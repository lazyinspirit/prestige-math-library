import {test} from 'node:test';
import assert from 'node:assert/strict';
import {statementHash,restatedIds} from './step7-statement.mjs';

test('only Statement and Definition sections determine downstream roots',()=>{
  const original='---\nkind: theorem\ndeps: [old]\n---\n## Statement\nThe claim.\n## Facts & Assumptions\nA fact.\n## Proof\nOld proof.\n## Sources\nOld citation.\n';
  const hash=statementHash(original);
  assert.equal(statementHash(original.replace('Old proof.','Repaired proof.').replace('[old]','[new]').replace('Old citation.','New citation.').replace('A fact.','Repaired fact.')),hash);
  assert.notEqual(statementHash(original.replace('The claim.','The corrected claim.')),hash);
  assert.notEqual(statementHash(original.replace('## Statement\nThe claim.\n','')),hash);
  const definition='## Definition\nAn object is X.\n## Remarks\nExplanation.';
  assert.equal(statementHash(definition),statementHash(definition.replace('Explanation.','New explanation.')));
  assert.notEqual(statementHash(definition),statementHash(definition.replace('is X','is Y')));
  assert.deepEqual(restatedIds({before_statements:{a:hash,b:hash}},['a','b'],{a:hash,b:statementHash(definition)}),['b']);
  assert.deepEqual(restatedIds({before_statements:{}},['new'],{new:hash}),['new']);
  assert.deepEqual(restatedIds({},['legacy'],{}),['legacy']);
});
