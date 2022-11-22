<?php
namespace TurbineTest\Unit;

use Turbine\DummyClass;

class ExampleTest extends \Codeception\Test\Unit
{
    public function testDummyFunction()
    {
        $dummyClass = new DummyClass();

        $returnValue = $dummyClass->dummyFunction();

        $this->assertSame(1, $returnValue);
    }
}
