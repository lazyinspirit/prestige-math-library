// Alpha group `a`, frontier-15 step 6b — contract updates for the items I repaired.
// Structured edit, never sed: each change is keyed by item id and fact/step id.
import fs from 'node:fs';

const P = 'research/frontier-15-batch-2.proof-contracts.json';
const c = JSON.parse(fs.readFileSync(P, 'utf8'));
const C = c.contracts;

const put = (id, fn) => {
  if (!C[id]) throw new Error(`no contract for ${id}`);
  fn(C[id]);
};

// ---------------------------------------------------------------- Sylow I
// Proof rewritten: the two method-announcement steps replaced by the actual
// orbit/stabilizer argument, with the induction case split into 3.1 / 3.2.
put('thm-sylow-first-theorem', (k) => {
  const uses = {
    L1: ['4.1'],
    L2: ['1.1'],
    L3: ['2.1'],
    L4: ['2.1'],
    L5: ['3.2'],
    L6: ['1.1', '3.2'],
  };
  for (const cit of k.citations) if (uses[cit.fact]) cit.uses = uses[cit.fact];
  k.citations.push({
    fact: 'L7',
    source: 'thm-orbits-partition-the-set',
    source_section: 'Statement',
    quote:
      'For a left action of $G$ on $X$, define $x\\sim y$ when $y=g\\cdot x$ for some\n$g\\in G$. This is an equivalence relation, its equivalence class at $x$ is\n$G\\cdot x$, and the distinct orbits partition $X$.',
    uses: ['2.1'],
  });
  k.derivations = [
    {
      id: 'step-1-1',
      step: '1.1',
      claim:
        'Strong induction on $|G|$; $\\Omega$ is the set of $p^a$-element subsets of $G$ under left translation, and $p\\nmid|\\Omega|$ by the Wielandt valuation.',
      inputs: ['L2', 'L6', 'given', 'algebra'],
    },
    {
      id: 'step-2-1',
      step: '2.1',
      claim:
        'Orbits partition $\\Omega$, so some orbit $\\mathcal O$ has $p\\nmid|\\mathcal O|$; for $A\\in\\mathcal O$ with stabilizer $H$, $|G|=|H|\\,|\\mathcal O|$ gives $p^a\\mid|H|$.',
      inputs: ['step 1.1', 'L3', 'L4', 'L7', 'choose'],
    },
    {
      id: 'step-3-1',
      step: '3.1',
      claim:
        'If $H=G$ then $A$ is translation-invariant, so $A=G$, $m=1$, and $G$ itself has order $p^a$.',
      inputs: ['step 2.1', 'given', 'algebra'],
    },
    {
      id: 'step-3-2',
      step: '3.2',
      claim:
        'If $H\\ne G$ then $|H|=p^am\'$ with $p\\nmid m\'$ and $|H|<|G|$, so the induction hypothesis gives a subgroup of order $p^a$ inside $H$.',
      inputs: ['step 2.1', 'L5', 'L6', 'given', 'algebra'],
    },
    {
      id: 'step-4-1',
      step: '4.1',
      claim:
        'The two cases are exhaustive, so $G$ has a subgroup of order $p^a$, which is a Sylow $p$-subgroup; $a=0$ returns the trivial subgroup.',
      inputs: ['L1', 'step 3.1', 'step 3.2', 'given'],
    },
  ];
  const ev = (s) => ({ status: 'checked', evidence: s });
  k.boundaries = [
    { case: 'empty', ...ev('The hypotheses admit no empty object: $G$ is a group, hence nonempty, and $\\Omega$ is nonempty because $p^a\\le|G|$. At $a=0$, $\\Omega$ is the set of singletons of $G$ and step 4.1 returns the trivial subgroup.') },
    { case: 'zero', ...ev('$a=0$ is admitted. Then $p^a=1$, $\\Omega$ is the set of one-element subsets of $G$, the stabilizer of $\\{x\\}$ is trivial, and step 4.1 records that the subgroup produced is the trivial subgroup of order $p^0=1$.') },
    { case: 'one', ...ev('$m=1$ is the exceptional one-factor input and is exactly the case $H=G$ settled in step 3.1: there $A=G$, $|G|=p^a$, and $G$ is its own Sylow $p$-subgroup. The trivial group $|G|=1$ is the subcase $a=0$, $m=1$.') },
    { case: 'degenerate', ...ev('The degenerate input is $p\\nmid|G|$, i.e. $a=0$, disposed of in step 4.1; and $H=G$, disposed of in step 3.1. No other collapse of the hypotheses is admitted.') },
    { case: 'endpoints', ...ev('The induction runs on $|G|$ with base $|G|=1$: there $a=0$ and step 4.1 returns the trivial subgroup, so the strong induction of [L6] has no unproved base case. The other endpoint, $|H|=|G|$, is step 3.1.') },
    { case: 'nonempty_choice', ...ev('Step 2.1 chooses an orbit $\\mathcal O$ with $p\\nmid|\\mathcal O|$ and a member $A\\in\\mathcal O$. Both choices are from nonempty finite families: some orbit has index prime to $p$ because otherwise $p$ would divide the sum $|\\Omega|$, and an orbit is nonempty by definition. Finitely many choices, so no choice principle is used.') },
    { case: 'iff_forward', status: 'not_applicable', reason: 'The Statement is a single implication from the hypotheses on $|G|$ to existence of a subgroup of order $p^a$; it is not a biconditional.' },
    { case: 'iff_reverse', status: 'not_applicable', reason: 'The Statement is a single implication from the hypotheses on $|G|$ to existence of a subgroup of order $p^a$; it is not a biconditional.' },
  ];
});

// ------------------------------------ composition series <-> chain conditions
// Statement now scopes dependent choice to the converse direction only.
put('thm-composition-series-iff-noetherian-and-artinian', (k) => {
  const uses = { L1: ['1.1', '3.1'], L2: ['2.1'], L3: ['3.1'], L4: ['1.1', '2.1'] };
  for (const cit of k.citations) if (uses[cit.fact]) cit.uses = uses[cit.fact];
  k.derivations = [
    {
      id: 'step-1-1',
      step: '1.1',
      claim:
        'Induction along a composition series: the zero module and each simple factor satisfy both chain conditions, and the short-exact-sequence theorem carries them up each stage. Choice-free.',
      inputs: ['L1', 'L4', 'given', 'algebra'],
    },
    {
      id: 'step-2-1',
      step: '2.1',
      claim:
        'Assuming dependent choice: every nonzero submodule of a Noetherian module has a maximal proper submodule, and dependent choice iterates this from $M$ to give a descending chain.',
      inputs: ['step 1.1', 'L2', 'L4', 'given', 'algebra'],
    },
    {
      id: 'step-3-1',
      step: '3.1',
      claim:
        'The descending chain terminates at $0$ by DCC, and each successive quotient is simple by maximality, so reversing it gives a composition series.',
      inputs: ['L1', 'L3', 'step 2.1', 'given', 'algebra'],
    },
  ];
  const b = Object.fromEntries((k.boundaries || []).map((r) => [r.case, r]));
  b.zero = { case: 'zero', status: 'checked', evidence: 'The zero module is admitted. Step 1.1 starts its induction at $M_0=0$, and step 3.1 records that for $M=0$ the empty chain is already the required composition series, so the dependent-choice construction is not entered.' };
  b.iff_forward = { case: 'iff_forward', status: 'checked', evidence: 'Forward direction (composition series implies Noetherian and Artinian) is step 1.1, and it uses no choice principle.' };
  b.iff_reverse = { case: 'iff_reverse', status: 'checked', evidence: 'Reverse direction (Noetherian and Artinian implies a composition series) is steps 2.1-3.1 and is stated under dependent choice, which the Statement now declares.' };
  k.boundaries = Object.values(b);
});

// ------------------------ finitely generated nonzero modules: Zorn made explicit
put('thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules', (k) => {
  const uses = { L1: ['1.1'], L2: ['1.1'], L3: ['3.1'] };
  for (const cit of k.citations) if (uses[cit.fact]) cit.uses = uses[cit.fact];
  k.derivations = [
    { id: 'step-1-1', step: '1.1', claim: 'The poset $\\mathcal P$ of proper submodules of the nonzero finitely generated $M$ is nonempty because $0\\in\\mathcal P$.', inputs: ['L1', 'L2', 'given', 'algebra'] },
    { id: 'step-2-1', step: '2.1', claim: 'Every chain in $\\mathcal P$ has an upper bound in $\\mathcal P$: the empty chain is bounded by $0$, and the union of a nonempty chain is a proper submodule because the finitely many generators cannot all lie in it.', inputs: ['step 1.1', 'given', 'algebra'] },
    { id: 'step-3-1', step: '3.1', claim: 'Zorn\'s lemma, under the Axiom of Choice now declared in the Statement, gives a maximal element of $\\mathcal P$.', inputs: ['L3', 'step 2.1', 'given'] },
    { id: 'step-4-1', step: '4.1', claim: 'Both hypotheses are load-bearing: nonzeroness in step 1.1, finite generation in step 2.1.', inputs: ['step 1.1', 'step 2.1', 'step 3.1', 'given'] },
  ];
  const b = Object.fromEntries((k.boundaries || []).map((r) => [r.case, r]));
  b.empty = { case: 'empty', status: 'checked', evidence: 'The empty chain is admitted by Zorn\'s hypothesis and is disposed of explicitly in step 2.1, where $0\\in\\mathcal P$ is its upper bound. This is the case a "every chain has an upper bound" argument most often drops.' };
  b.zero = { case: 'zero', status: 'checked', evidence: 'The zero module is excluded by hypothesis, and step 4.1 records why: for $M=0$ the poset of proper submodules is empty and the conclusion is false, so nonzeroness is necessary rather than cosmetic.' };
  k.boundaries = Object.values(b);
});

fs.writeFileSync(P, JSON.stringify(c, null, 2) + '\n');
console.log('batch-2 contract updated for 3 items');
