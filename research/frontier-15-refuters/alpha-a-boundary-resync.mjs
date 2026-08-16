// Alpha `a`, step 6b — re-anchor the boundary rows whose evidence quoted a proof
// step I replaced, with per-case content.
//
// Why these rows were vacuous in the first place: the evidence string was built by
// quoting the proof's final step. Where that step was an announcement ("We include
// the trivial group and the one-prime case."), the boundary row quoted the
// announcement, so the same non-disposition appeared twice and confirmed itself.
// boundary-audit's template detector cannot see this, because each announcement is
// worded differently, so no cluster forms.
//
// Re-anchoring them all to my rewritten closing step would reproduce the defect in
// a new file: one evidence string repeated across five cases is a template. Each
// row below therefore says what its own case is and why it holds.
import fs from 'node:fs';

const P = 'research/frontier-15-batch-2.proof-contracts.json';
const doc = JSON.parse(fs.readFileSync(P, 'utf8'));

const EV = {
  'thm-normalizer-condition-for-finite-nilpotent-groups': {
    zero: 'Nilpotency class zero means $G=1$, which has no proper subgroup, so the universally quantified claim is vacuously true and the central-series construction of step 1.1 is never entered. Step 3.1 states this.',
    degenerate: 'The collapsed subgroup $H=1$ is admitted. Step 3.1 disposes of it directly: $N_G(1)=G$, which properly contains $1$ whenever $G\\ne1$.',
    endpoints: 'The two ends of the central series are the relevant endpoints: the first term is contained in $H$ by construction in step 1.1, and the last is $G$, which is not contained in the proper subgroup $H$, so the "first term not contained in $H$" that step 1.1 selects exists.',
  },
  'thm-maximal-subgroups-of-finite-nilpotent-groups': {
    zero: 'The trivial quotient is excluded rather than ignored: step 3.1 records that a maximal subgroup is proper by definition, so $M\\ne G$ and $G/M\\ne1$, which is what makes its order a genuine prime rather than $1$.',
    degenerate: 'The degenerate input would be $M=G$, which is not a maximal proper subgroup; step 3.1 states that properness is part of maximality, so the case does not arise.',
  },
  'lem-finite-nilpotence-via-normal-sylow-subgroups': {
    empty: 'The empty family of Sylow subgroups occurs exactly for $G=1$. Step 4.1 disposes of it using the empty-family clause of [L5]: the empty internal direct product is the trivial group, and [L7] makes it nilpotent of class zero.',
    zero: 'The trivial group is the zero case and is disposed of in step 4.1 by the same empty-family clause of [L5]; all three conditions hold there simultaneously, so the equivalence is not vacuously asserted.',
    one: 'The one-factor case is $|G|$ a prime power. Step 4.1 disposes of it using the one-factor clause of [L5]: the family has the single member $G$, the internal direct product is $G$, and [L7] makes $G$ nilpotent.',
    degenerate: 'The degenerate configuration is a single prime dividing $|G|$, handled as the one-factor case in step 4.1; there is no separate collapse of the hypotheses.',
    'iff-reverse': 'The reverse implications are steps 2.1 and 3.1: normal Sylow subgroups give the internal direct product, and a finite direct product of $p$-groups is nilpotent by [L6] and [L7]. Step 4.1 confirms both survive at the empty and one-factor ends.',
  },
  'thm-second-isomorphism-theorem-modules': {
    zero: 'Step 3.1 evaluates both zero cases rather than declaring them inapplicable: at $L=0$ both sides are $0$, since $0/(0\\cap N)=0$ and $(0+N)/N=0$; at $N=0$ both sides are $L$.',
    degenerate: 'The coincident case $L=N$ is admitted and evaluated in step 3.1: both sides are $0$, since $L/(L\\cap L)=L/L$ and $(L+L)/L=L/L$.',
  },
  'cor-finite-direct-sums-preserve-chain-conditions': {
    empty: 'Step 3.1 evaluates the empty direct sum: it is the zero module, whose only chains of submodules are constant, so it satisfies both conditions, while the "every summand" side of the equivalence is vacuously true.',
    one: 'Step 3.1 records that a single summand makes the direct sum that summand, so the equivalence is an identity; this is also the base case of the induction in step 1.1.',
    degenerate: 'A summand equal to the whole sum is the one-summand case of step 3.1; a zero summand contributes the zero module, which satisfies both chain conditions and so changes neither side.',
    'iff-reverse': 'The reverse direction is step 2.1: every summand is both a submodule and a quotient of the direct sum, so [L1] reflects each chain condition down to it. Step 3.1 confirms this survives at zero and one summands.',
  },
  'thm-finitely-generated-modules-over-noetherian-rings-are-noetherian': {
    empty: 'Step 3.1 evaluates the empty generating set: $M=0$, $R^0=0$, and the presentation of step 1.1 reads $0\\twoheadrightarrow 0$.',
    zero: 'The zero module is the $n=0$ case of step 3.1; it has only the constant chain of submodules and is Noetherian, so no separate base case is needed.',
    degenerate: 'The degenerate ring input is the zero ring, where every module is zero and step 3.1 applies unchanged.',
  },
  'cor-noetherian-modules-are-hopfian': {
    empty: 'There is no empty object here: the module may be zero but is never absent, and the endomorphism is supplied by hypothesis. The zero module is evaluated in step 3.1.',
    zero: 'Step 3.1 evaluates the zero module: its only endomorphism is the identity, which is injective, so the conclusion holds and the argument of step 2.1 is not vacuously true by accident.',
    degenerate: 'The degenerate case is $f$ the identity, where $\\ker f=0$ and the chain of step 1.1 is constant from the start; the conclusion is immediate.',
    endpoints: 'The endpoint of the ascending chain is the stabilization index $n$ chosen in step 2.1; the argument uses only $\\ker f^n=\\ker f^{n+1}$ at that single index, not stabilization beyond it.',
    'nonempty-choice': 'Step 2.1 chooses a stabilization index $n$ and, for $x\\in\\ker f$, a preimage $y$ with $f^n(y)=x$. The index exists because the chain of step 1.1 stabilizes, and the preimage because $f$, hence $f^n$, is surjective; both families are nonempty and only one element of each is used.',
  },
  'thm-submodules-and-quotients-of-semisimple-modules': {
    zero: 'Step 3.1 evaluates the zero submodule: it is the empty direct sum, hence semisimple, and its quotient $M/0\\cong M$ is semisimple by hypothesis.',
    degenerate: 'Step 3.1 evaluates the whole submodule $M$: it is semisimple by hypothesis and its quotient $M/M=0$ is again the empty direct sum.',
  },
  'thm-schurs-lemma-for-modules': {
    zero: 'Step 4.1 evaluates the zero homomorphism: between nonzero simple modules it is not an isomorphism, which is why the hypothesis asks for a nonzero one, and in the endomorphism ring of step 3.1 it is the zero element rather than a non-invertible unit.',
    degenerate: 'The degenerate configuration is two non-isomorphic simple modules; step 4.1 records the contrapositive, that every homomorphism between them is zero.',
  },
  'cor-rational-algebraic-integers-are-integers': {
    zero: 'Step 4.1 evaluates $0$: its lowest-terms representation is $0/1$, whose denominator is already $1$, and it is a root of the monic polynomial $X$.',
    degenerate: 'Step 4.1 evaluates negative integers: for $n<0$ the polynomial $X-n$ of step 3.1 is $X+|n|$, still monic with integer coefficients.',
    'iff-reverse': 'The reverse direction is step 3.1: every integer $n$ is a root of the monic integer polynomial $X-n$. Step 4.1 confirms this covers $n=0$ and $n<0$.',
  },
  'fs-every-module-has-a-composition-series': {
    endpoints: 'Step 2.1 exhibits the endpoint that fails: the chain $\\mathbb Z>2\\mathbb Z>4\\mathbb Z>\\cdots$ has no least term, so it never stabilizes and $\\mathbb Z$ is not Artinian. The refutation therefore rests on an explicit witness rather than on a scope restriction.',
  },
};

let n = 0, missed = [];
for (const [id, rows] of Object.entries(EV)) {
  const k = doc.contracts[id];
  if (!k) { missed.push(id); continue; }
  for (const r of k.boundaries || []) {
    if (!rows[r.case]) continue;
    r.status = 'checked';
    r.evidence = rows[r.case];
    delete r.reason;
    n++;
  }
}

fs.writeFileSync(P, JSON.stringify(doc, null, 2) + '\n');
console.log(`${n} boundary row(s) rewritten with per-case evidence`);
if (missed.length) console.log('NOT FOUND:', missed.join(', '));
