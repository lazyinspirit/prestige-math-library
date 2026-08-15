# Proof-refuter brief for run `frontier-13` (step 6)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's wording: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* It binds a **compound command
> as a whole — no segment of an `&&` chain may raise a prompt either.** Use
> command forms already allowed inside your sandbox and choose non-escalated
> forms. Web search is part of your job and you never ask before searching. If an
> indispensable operation has no escalation-free form, **record a blocker in your
> report** — that is the escape hatch, never a prompt.

You are a **read-only proof-refuter on run `frontier-13`**, GPT 5.6 Sol. Your
process is `--sandbox read-only`: you *cannot* write, and that is deliberate.
**You never write content and never apply a fix.** Alpha adjudicates every
finding from disk. Your job is evidence, not a verdict.

Your assignment is in the "This dispatch" section appended below.

## Your standard is the step-7 judges' standard

You are held to the same skeptical, adversarial standard as the paired DeepSeek
V4 Pro and GPT 5.6 Terra judges who read this text at step 7. Report **only**:

- a concrete **false claim** — the Statement, a witness, or a computed value is
  actually wrong, and you can say why;
- an **unlicensed inference** — a proof step that does not follow from the
  facts, hypotheses and earlier steps it cites;
- a **missing hypothesis** — characteristic, ordering, nonnegativity,
  nonemptiness, smallness, connectedness, finiteness, or a choice principle the
  proof silently uses;
- an **inaccurate citation** — a `[F#]`/`[A#]`/`[L#]` fact that does not state
  what the cited item states, with a changed domain, quantifier, hypothesis,
  direction or conclusion, or an invented converse.

**Open the cited item on disk before alleging a dependency is too weak.** Every
dependency is a real file at `items/<id>.md`. A restatement that inflates a
dependency to carry more weight than it has is a defect; a terse but licensed
routine move is not.

## What is NOT a finding

A logical gap a competent human reader closes in **30 seconds** is nonfatal
(owner, 2026-07-31). Say so and move on; do not open a fatal repair cycle on it.
Style preferences, alternative proofs you prefer, "could be deeper", and missing
generality that the page deliberately scoped away are not findings.

One scope note for this run: the pages under review sit in linear algebra
(minimal polynomial, diagonalisation, inner product spaces) and in combinatorics
(linear recurrences, generating functions, transfer matrices). Where a proof is
deliberately stated over a commutative ring rather than a field, or over a formal
power series ring rather than an analytic one, that is the page's scope and not a
gap.

## Titles and Statements

A **title or Statement asserting more than the proof delivers is fatal.** The
step-7 judges read Statements and cannot see a false title. Check the title
against what was actually proved, every time.

## Provenance is part of your check

Every mathematical-content item carries `provenance.statement` and
`provenance.proof`. An **`ai-generated` Statement or Construction may never be a
dependency target** — if you find one in another item's `deps`, that is a
finding. For an `ai-generated` statement, witness or refutation anywhere in your
assignment, **actively search for a counterexample** when you have concrete
doubt; a plausible repaired proof is not evidence the Statement is true.

## Your output

You are read-only and cannot write a file. **Put your complete report in your
final message**, structured per finding:

- the item id and the exact location (Statement, a numbered proof step, a `[F#]`
  fact, the Remark, or page prose);
- what is wrong;
- the evidence — quote the dependency text from disk, or give the counterexample;
- your severity call: **fatal** or **nonfatal**.

Put fatal findings first. Finish with a plain statement of coverage: which items
you read fully, which you sampled, and anything you could not check.

If you find nothing fatal, say so plainly. "No defect found in these N items,
here is what I checked" is a valuable and expected result — do not manufacture a
finding to justify the dispatch.


---

# This dispatch

## This dispatch — cross-level citation refutation, cluster `xl-g`

You are checking **cross-level citations**: facts in this run's draft items
that cite items already **published** in the library. Step 6b found this run's
dominant defect class *within* batches — an `[F#]`/`[L#]` restatement claiming
more than the cited item's Statement says (an enlarged domain, a dropped
`n\ge1`, a citation pointing at an item that does not state the claimed fact at
all). The cross-level surface below has had no equivalent pass.

Your cluster is **37 published target items** carrying
**81 load-bearing citation edges**.

### Method — the target is read once, the restatements are checked against it

For each published target below:

1. Open `items/<target>.md` and read its **Statement** (or Definition /
   Construction) verbatim. This is ground truth. Note its exact domain,
   hypotheses, quantifiers, direction and conclusion.
2. For each citing item listed under it, open `items/<citing-item>.md`, find the
   named `[F#]`/`[A#]`/`[L#]` fact, and compare its prose against the Statement
   you just read.
3. Then read the **numbered steps that use that fact** (listed for you) and ask
   the load-bearing question: *does the FAITHFUL version of this dependency
   license this step?* A restatement can be inaccurate but harmless, or
   accurate but applied outside its domain. Report which.

Report a finding only when you can name the exact clause of the cited Statement
and the exact clause of the restatement that differ, and say whether a step
depends on the difference. **A restatement that is a faithful shortening is not
a finding** — the house rule asks for the smallest faithful shortening, not the
whole Statement. Do not report a missing clause the citing step never uses,
unless the restatement positively asserts something false.

### Your cluster

#### target: `thm-unit-criterion-modulo-n`  (theorem, 12 citations)

- `cor-generators-of-a-finite-cyclic-group` **L3** — used at step(s) 2.1
  - restatement on disk: The unit classes modulo $m$ are exactly the classes represented by integers coprime to $m$ ([[thm-unit-criterion-modulo-n]]).
- `thm-eulers-criterion-for-binomial-congruences` **L6** — used at step(s) 1.1
  - restatement on disk: A class modulo $n$ is a unit exactly when its representative is coprime to $n$ ([[thm-unit-criterion-modulo-n]]).
- `cor-number-of-solutions-of-a-binomial-congruence` **L4** — used at step(s) 1.2
  - restatement on disk: A class modulo $n$ is a unit exactly when its representative is coprime to $n$ ([[thm-unit-criterion-modulo-n]]).
- `lem-primitive-root-lift-to-prime-square` **L1** — used at step(s) 1.1, 2.2
  - restatement on disk: A class is a primitive root when its order equals the totient of the modulus ([[def-primitive-root-modulo-n]]), and it is a unit exactly when its representative is coprime to the modulus ([[thm-unit-criterion-modulo-n]]).
- `lem-order-of-one-plus-pu-modulo-prime-powers` **L1** — used at step(s) 1.3
  - restatement on disk: The units modulo a positive modulus form a finite group ([[def-unit-group-modulo-n-and-euler-totient]]), and a class is a unit exactly when its representative is coprime to the modulus ([[thm-unit-criterion-modulo-n]]).
- `lem-order-of-five-modulo-two-powers` **L5** — used at step(s) 1.1
  - restatement on disk: A residue class is a unit exactly when its representative is coprime to the modulus ([[thm-unit-criterion-modulo-n]]).
- `thm-unit-group-modulo-two-power-structure` **L4** — used at step(s) 2.1
  - restatement on disk: The units modulo $2^k$ are the classes represented by odd integers ([[thm-unit-criterion-modulo-n]]).
- `cor-carmichael-exponent-theorem` **L2** — used at step(s) 1.1
  - restatement on disk: The class of $a$ is a unit exactly when $\gcd(a,n)=1$ ([[thm-unit-criterion-modulo-n]]).
- `ex-lifting-a-primitive-root-through-powers-of-five` **L5** — used at step(s) 1.1, 2.1
  - restatement on disk: A class modulo $n$ is a unit exactly when its representative is coprime to $n$, and a primitive root is a unit of order $\varphi(n)$ ([[thm-unit-criterion-modulo-n]], [[def-primitive-root-modulo-n]]).
- `thm-automorphisms-of-a-finite-cyclic-group` **L2** — used at step(s) 1.2
  - restatement on disk: A residue class modulo $n$ is a unit exactly when its representative is coprime to $n$ ([[thm-unit-criterion-modulo-n]]).
- `ex-affine-group-modulo-eight-as-a-holomorph` **L3** — used at step(s) 1.1
  - restatement on disk: The units modulo $8$ are exactly the classes represented by integers coprime to $8$ ([[thm-unit-criterion-modulo-n]]).
- `ex-automorphism-group-of-the-cyclic-group-of-order-eight` **L2** — used at step(s) 1.1
  - restatement on disk: The units modulo $8$ are the residue classes coprime to $8$ ([[thm-unit-criterion-modulo-n]]).

#### target: `def-symmetric-group`  (definition, 6 citations)

- `prop-vandermonde-square-is-symmetric` **L3** — used at step(s) 1.1
  - restatement on disk: A permutation is a bijection of the index set ([[def-symmetric-group]]).
- `prop-holomorph-as-a-permutation-group` **L3** — used at step(s) 1.2, 2.1
  - restatement on disk: Group actions on a set correspond to homomorphisms into its symmetric group ([[thm-group-actions-correspond-to-homomorphisms]], [[def-symmetric-group]]).
- `ex-dihedral-group-of-order-six-is-s-three` **L3** — used at step(s) 1.1, 1.2
  - restatement on disk: $S_3$ is the group of permutations of a three-element set ([[def-symmetric-group]]).
- `ex-symmetric-group-splits-over-the-alternating-group` **L5** — used at step(s) 1.1
  - restatement on disk: $S_n$ consists of the permutations of an $n$-element set ([[def-symmetric-group]]).
- `ex-s-four-as-the-holomorph-of-the-klein-four-group` **L3** — used at step(s) 2.1
  - restatement on disk: $S_4$ is the group of all permutations of a four-element set ([[def-symmetric-group]]).
- `fs-an-abelian-group-has-an-abelian-automorphism-group` **L2** — used at step(s) 1.1, 2.1
  - restatement on disk: The symmetric group on a set consists of all its permutations under composition ([[def-symmetric-group]]).

#### target: `def-characteristic-polynomial-of-an-operator`  (definition, 5 citations)

- `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors` **L8** — used at step(s) 1.2
  - restatement on disk: In any ordered basis, the characteristic polynomial of an endomorphism is the characteristic polynomial of its representing matrix, independently of the chosen basis ([[def-characteristic-polynomial-of-an-operator]]).
- `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree` **L5** — used at step(s) 1.1
  - restatement on disk: In any ordered basis, $\chi_T$ is the characteristic polynomial of the representing matrix, independently of the chosen basis ([[def-characteristic-polynomial-of-an-operator]]).
- `fs-diagonalisability-requires-distinct-characteristic-roots` **L3** — used at step(s) 2.1
  - restatement on disk: The characteristic polynomial of an operator is that of any matrix representation ([[def-characteristic-polynomial-of-an-operator]]).
- `cor-cayley-hamilton-recurrences-for-matrix-powers` **L3** — used at step(s) 1.1
  - restatement on disk: The operator characteristic polynomial is the characteristic polynomial of any representing matrix ([[def-characteristic-polynomial-of-an-operator]]).
- `cor-eigenvalue-form-of-the-transfer-matrix-trace` **L3** — used at step(s) 1.1
  - restatement on disk: The characteristic polynomial of an endomorphism equals that of any representing matrix ([[def-characteristic-polynomial-of-an-operator]]).

#### target: `def-polynomial-evaluation-and-root`  (definition, 4 citations)

- `thm-monic-resultant-root-product-and-common-root-criterion` **L3** — used at step(s) 3.1
  - restatement on disk: An element is a root of $g$ exactly when its evaluation $g(a)$ is zero ([[def-polynomial-evaluation-and-root]]).
- `cor-monic-resultant-is-unchanged-modulo-f` **L2** — used at step(s) 1.1
  - restatement on disk: Polynomial evaluation is a ring homomorphism and an element $a$ is a root of $f$ exactly when $f(a)=0$ ([[def-polynomial-evaluation-and-root]]).
- `lem-power-congruence-root-bound-modulo-a-prime` **L4** — used at step(s) 2.1
  - restatement on disk: Congruence modulo $q$ is equality of classes in $\mathbb Z/q$, and a root is an element at which polynomial evaluation is zero ([[def-integers-modulo-n]], [[def-polynomial-evaluation-and-root]]).
- `ex-the-galois-connection-between-ideals-and-varieties` **F2** — used at step(s) 1.1
  - restatement on disk: For $f=\sum_i a_ix^i$ and a unital homomorphism $\varphi:R\to S$, evaluation is $f_\varphi(s)=\sum_i\varphi(a_i)s^i$, and a root is an $s$ at which this value is zero ([[def-polynomial-evaluation-and-root]]).

#### target: `thm-dimension-of-a-linear-subspace`  (theorem, 4 citations)

- `thm-diagonalisability-eigenspace-direct-sum-criterion` **L4** — used at step(s) 1.2
  - restatement on disk: Every subspace of a finite-dimensional vector space is finite-dimensional and has a basis ([[thm-dimension-of-a-linear-subspace]]).
- `thm-finite-dimensional-orthogonal-decomposition` **L1** — used at step(s) 1.1
  - restatement on disk: Every subspace of a finite-dimensional space has a finite basis that can be extended to a basis of the ambient space ([[thm-dimension-of-a-linear-subspace]]).
- `cor-double-orthogonal-complement-and-dimension` **L3** — used at step(s) 3.1
  - restatement on disk: If one finite-dimensional subspace is contained in another and their dimensions agree, the two subspaces are equal ([[thm-dimension-of-a-linear-subspace]]).
- `thm-finite-dimensional-isometry-characterisations` **L8** — used at step(s) 1.2
  - restatement on disk: A subspace of a finite-dimensional space has the same dimension as the ambient space exactly when it is the whole space ([[thm-dimension-of-a-linear-subspace]]).

#### target: `def-exact-and-short-exact-sequences-of-modules`  (definition, 3 citations)

- `cor-flat-modules-preserve-intersections-of-ideals` **L4** — used at step(s) 1.1, 4.1
  - restatement on disk: Exactness at a module is equality of the incoming image and outgoing kernel ([[def-exact-and-short-exact-sequences-of-modules]]).
- `thm-right-exactness-of-tensor-products` **L1** — used at step(s) 1.1, 1.2, 3.1
  - restatement on disk: Exactness means that $g$ is surjective and $\operatorname{im}f=\ker g$ ([[def-exact-and-short-exact-sequences-of-modules]]).
- `thm-flat-quotients-preserve-short-exact-tensor-sequences` **L5** — used at step(s) 1.1, 4.1, 7.1
  - restatement on disk: A short exact sequence has an injective first map, a surjective second map, and image equal to kernel ([[def-exact-and-short-exact-sequences-of-modules]]).

#### target: `thm-operator-invertible-iff-determinant-nonzero`  (theorem, 3 citations)

- `thm-gram-determinant-detects-linear-independence` **L6** — used at step(s) 1.1
  - restatement on disk: A square operator over a field is invertible exactly when its determinant is nonzero ([[thm-operator-invertible-iff-determinant-nonzero]]).
- `thm-qr-factorisation-over-r-or-c` **L4** — used at step(s) 1.2
  - restatement on disk: A square operator is invertible exactly when its determinant is nonzero ([[thm-operator-invertible-iff-determinant-nonzero]]).
- `thm-finite-dimensional-isometry-characterisations` **L4** — used at step(s) 1.5
  - restatement on disk: Operator determinants are multiplicative, and a finite-dimensional endomorphism is invertible exactly when its determinant is nonzero ([[thm-operator-determinant-is-multiplicative]], [[thm-operator-invertible-iff-determinant-nonzero]]).

#### target: `thm-cayley-hamilton`  (theorem, 3 citations)

- `cor-minimal-polynomial-divides-characteristic-polynomial` **L1** — used at step(s) 1.1
  - restatement on disk: Cayley–Hamilton states $\chi_T(T)=0$ ([[thm-cayley-hamilton]]).
- `thm-minimal-polynomial-is-well-defined-and-controls-annihilators` **L2** — used at step(s) 1.2
  - restatement on disk: Cayley–Hamilton states $\chi_T(T)=0$ for every finite-dimensional endomorphism $T$ ([[thm-cayley-hamilton]]).
- `cor-cayley-hamilton-recurrences-for-matrix-powers` **L1** — used at step(s) 1.1
  - restatement on disk: Every finite-dimensional endomorphism satisfies its characteristic polynomial: $\chi_T(T)=0$ ([[thm-cayley-hamilton]]).

#### target: `thm-splitting-fields-exist-for-nonzero-polynomials`  (theorem, 3 citations)

- `thm-monic-resultant-root-product-and-common-root-criterion` **L4** — used at step(s) 2.1
  - restatement on disk: Every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).
- `cor-monic-resultant-symmetry` **L2** — used at step(s) 1.1
  - restatement on disk: Every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).
- `thm-existence-of-finite-fields` **L2** — used at step(s) 1.1
  - restatement on disk: Every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

#### target: `def-field`  (definition, 2 citations)

- `fs-f-p-n-is-z-mod-p-n` **L3** — used at step(s) 2.1
  - restatement on disk: In a field every nonzero element has an inverse, so a nonzero nilpotent cannot exist ([[def-field]]).
- `prop-the-underlying-set-functor-on-fields-has-no-left-adjoint` **F1** — used at step(s) 1.3
  - restatement on disk: A field has $0\ne1$, is an abelian group under addition, has associative commutative multiplication with unit and inverses for nonzero elements, and satisfies distributivity ([[def-field]]).

#### target: `def-group-power`  (definition, 2 citations)

- `thm-vieta-expansion-in-elementary-symmetric-polynomials` **L2** — used at step(s) 1.1, 3.1
  - restatement on disk: Natural powers in a monoid satisfy $g^0=e$ and $g^{r+1}=g^rg$ ([[def-group-power]]).
- `thm-binomial-theorem-over-a-commutative-ring` **L3** — used at step(s) 1.1, 2.1
  - restatement on disk: Natural powers satisfy $z^0=1$ and $z^{r+1}=z^rz$ ([[def-group-power]]).

#### target: `lem-p-adic-valuation-additive`  (lemma, 2 citations)

- `lem-order-of-one-plus-pu-modulo-prime-powers` **L4** — used at step(s) 1.1, 1.2, 3.1
  - restatement on disk: $v_p(a)=j$ means $p^j\mid a$ but $p^{j+1}\nmid a$ ([[lem-p-adic-valuation-basic]]), and valuations add on nonzero products ([[lem-p-adic-valuation-additive]]).
- `lem-order-of-five-modulo-two-powers` **L3** — used at step(s) 1.1, 1.2, 3.1
  - restatement on disk: $v_2(a)=j$ means $2^j\mid a$ and $2^{j+1}\nmid a$ ([[lem-p-adic-valuation-basic]]), and valuations add on nonzero products ([[lem-p-adic-valuation-additive]]).

#### target: `def-complex-numbers-and-arithmetic`  (definition, 2 citations)

- `ex-real-rotation-changes-diagonalisability-after-complex-scalar-extension` **L3** — used at step(s) 2.1
  - restatement on disk: In $\mathbb C$, the element $i$ satisfies $i^2=-1$ ([[def-complex-numbers-and-arithmetic]]).
- `ex-complex-tensor-square-over-the-reals` **L1** — used at step(s) 1.1, 1.2, 2.1, 2.2
  - restatement on disk: Every complex number has unique form $a+bi$, with the usual arithmetic, and $\mathbb C$ is a field ([[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]]).

#### target: `thm-number-of-bijections-of-a-finite-set`  (theorem, 2 citations)

- `ex-s-four-as-the-holomorph-of-the-klein-four-group` **L4** — used at step(s) 2.1
  - restatement on disk: A four-element set has $4!=24$ bijections ([[thm-number-of-bijections-of-a-finite-set]]).
- `lem-groups-of-order-pq-have-a-normal-q-subgroup` **L4** — used at step(s) 1.2
  - restatement on disk: A set of $p$ elements has $p!$ bijections, where $p!=1\cdot2\cdots p$ ([[thm-number-of-bijections-of-a-finite-set]], [[def-factorial-and-falling-factorial]]).

#### target: `def-logarithm-to-a-base`  (definition, 2 citations)

- `thm-ramsey-logarithmic-homogeneous-set-bound` **L4** — used at step(s) 2.1
  - restatement on disk: For $b>0$ with $b\ne1$ and $x>0$, $\log_bx:=\log x/\log b$ ([[def-logarithm-to-a-base]]).
- `thm-random-graph-logarithmic-homogeneous-set-upper-bound` **L7** — used at step(s) 1.1
  - restatement on disk: For $b>0$ with $b\ne1$ and $x>0$, $\log_bx:=\log x/\log b$ ([[def-logarithm-to-a-base]]).

#### target: `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`  (corollary, 2 citations)

- `thm-multiplicative-group-of-a-finite-field-is-cyclic` **L3** — used at step(s) 2.1
  - restatement on disk: Every finite subgroup of the unit group of an integral domain is cyclic ([[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]]).
- `cor-unit-group-modulo-prime-is-cyclic` **L3** — used at step(s) 2.1
  - restatement on disk: Every finite subgroup of the unit group of an integral domain is cyclic ([[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]]).

#### target: `lem-characteristic-polynomial-of-block-triangular-matrix`  (lemma, 2 citations)

- `ex-same-characteristic-polynomial-different-minimal-polynomials` **L1** — used at step(s) 1.1
  - restatement on disk: A block-triangular characteristic polynomial is the product of the characteristic polynomials of its diagonal blocks ([[lem-characteristic-polynomial-of-block-triangular-matrix]]).
- `fs-the-characteristic-polynomial-determines-diagonalisability` **L1** — used at step(s) 1.1
  - restatement on disk: A block-triangular characteristic polynomial is the product of those of its diagonal blocks ([[lem-characteristic-polynomial-of-block-triangular-matrix]]).

#### target: `thm-interchange-law-for-natural-transformations`  (theorem, 2 citations)

- `thm-adjunctions-compose` **F1** — used at step(s) 1.1, 2.1, 2.2
  - restatement on disk: Whenever the expressions are defined, the interchange identity is $(\beta'\circ\beta)*(\alpha'\circ\alpha)=(\beta'*\alpha')\circ(\beta*\alpha)$ ([[thm-interchange-law-for-natural-transformations]]).
- `thm-mates-under-a-pair-of-adjunctions` **F1** — used at step(s) 1.3, 2.1, 2.2
  - restatement on disk: The interchange identity is $(\beta'\circ\beta)*(\alpha'\circ\alpha)=(\beta'*\alpha')\circ(\beta*\alpha)$ whenever the expressions are defined ([[thm-interchange-law-for-natural-transformations]]).

#### target: `def-trace-of-a-square-matrix`  (definition, 2 citations)

- `cor-cayley-hamilton-recurrences-for-matrix-powers` **L5** — used at step(s) 3.1
  - restatement on disk: The trace of a field matrix is the finite sum of its diagonal entries ([[def-trace-of-a-square-matrix]]).
- `prop-ring-trace-agrees-with-the-published-field-trace` **L2** — used at step(s) 1.2
  - restatement on disk: The published field trace is $\operatorname{tr}(A)=\sum_{i<p}a_{ii}$, with empty sum zero when $p=0$ ([[def-trace-of-a-square-matrix]]).

#### target: `thm-bezout-identity`  (theorem, 1 citation)

- `thm-automorphisms-of-a-finite-cyclic-group` **L5** — used at step(s) 1.2
  - restatement on disk: If $\gcd(a,n)=1$, there are integers $u,v$ with $au+nv=1$ ([[thm-bezout-identity]]).

#### target: `cor-dimension-of-a-direct-sum`  (corollary, 1 citation)

- `cor-double-orthogonal-complement-and-dimension` **L2** — used at step(s) 1.1
  - restatement on disk: Dimensions add across an internal direct sum of finite-dimensional subspaces ([[cor-dimension-of-a-direct-sum]]).

#### target: `def-formal-power-series-and-coefficient-extraction`  (definition, 1 citation)

- `lem-formal-matrix-geometric-series` **L1** — used at step(s) 1.1, 1.2, 2.1
  - restatement on disk: Formal series are coefficient functions with Cauchy product $[x^n](fg)=\sum_{i=0}^{n}[x^i]f[x^{n-i}]g$ ([[def-formal-power-series-and-coefficient-extraction]]).

#### target: `lem-polynomial-factorisation-into-irreducibles`  (lemma, 1 citation)

- `thm-factorization-of-x-qn-minus-x` **L6** — used at step(s) 3.1
  - restatement on disk: Every nonzero nonunit polynomial over a field factors into irreducibles ([[lem-polynomial-factorisation-into-irreducibles]]).

#### target: `def-natural-logarithm`  (definition, 1 citation)

- `ex-bounded-order-graph-classes-are-erdos-hajnal` **L5** — used at step(s) 1.2, 2.1
  - restatement on disk: $\log:(0,\infty)\to\mathbb R$ is the inverse function of $\exp$; in particular $\exp(\log x)=x$ for $x>0$ and $\log(\exp y)=y$ for $y\in\mathbb R$ ([[def-natural-logarithm]]).

#### target: `def-dimension`  (definition, 1 citation)

- `cor-tensor-products-of-finite-free-modules-and-dimension` **L3** — used at step(s) 1.2, 1.3, 2.1
  - restatement on disk: The dimension of a finite-dimensional vector space is the unique natural number equinumerous with a basis; the zero space has dimension zero ([[def-dimension]]).

#### target: `def-continuous-map-top`  (definition, 1 citation)

- `thm-the-discrete-and-indiscrete-topologies-form-an-adjoint-triple-over-set` **F2** — used at step(s) 1.1, 1.2
  - restatement on disk: A map $f$ is continuous when it is continuous at every point, and $f$ is continuous at $x$ exactly when for every open $V\subseteq Y$ with $f(x)\in V$ there is an open $U\subseteq X$ with $x\in U$ and $f[U]\subseteq V$ ([[def-continuous-map-top]]).

#### target: `def-ordinal-addition`  (definition, 1 citation)

- `fs-the-hom-set-form-of-an-adjunction-needs-no-size-hypothesis` **F2** — used at step(s) 1.1
  - restatement on disk: Ordinal addition is specified by $\alpha+0=\alpha$, $\alpha+(\beta+1)=(\alpha+\beta)+1$, and $\alpha+\lambda=\bigcup_{\beta<\lambda}(\alpha+\beta)$ for nonzero limit $\lambda$ ([[def-ordinal-addition]]).

#### target: `def-free-abelian-group`  (definition, 1 citation)

- `thm-automorphisms-of-a-finite-rank-free-abelian-group` **L1** — used at step(s) 1.1
  - restatement on disk: A homomorphism from a free abelian group is determined uniquely by the images of a free basis ([[def-free-abelian-group]]).

#### target: `cor-order-of-a-quotient-group`  (corollary, 1 citation)

- `lem-groups-of-order-pq-have-a-normal-q-subgroup` **L6** — used at step(s) 1.3
  - restatement on disk: For finite $G$ and normal $K$, $|G/K|=|G|/|K|$ ([[cor-order-of-a-quotient-group]]).

#### target: `cor-connected-components-partition-the-vertex-set`  (corollary, 1 citation)

- `thm-p3-free-graphs-have-square-root-homogeneous-sets` **L6** — used at step(s) 1.3, 2.1
  - restatement on disk: Component vertex sets are nonempty, pairwise disjoint, cover $V(G)$, and induce connected graphs ([[cor-connected-components-partition-the-vertex-set]]).

#### target: `def-erdos-renyi-random-graph`  (definition, 1 citation)

- `thm-random-graph-logarithmic-homogeneous-set-upper-bound` **L2** — used at step(s) 3.1
  - restatement on disk: In $G(n,1/2)$, all possible edges are independent Bernoulli variables on the labelled vertex set $[n]$ ([[def-erdos-renyi-random-graph]]).

#### target: `cor-every-module-is-a-quotient-of-a-free-module`  (corollary, 1 citation)

- `thm-flat-quotients-preserve-short-exact-tensor-sequences` **L4** — used at step(s) 1.1
  - restatement on disk: Every module admits a canonical surjection from a free module ([[cor-every-module-is-a-quotient-of-a-free-module]]).

#### target: `thm-first-isomorphism-theorem-modules`  (theorem, 1 citation)

- `ex-tensor-product-of-two-quotient-modules` **L3** — used at step(s) 2.1
  - restatement on disk: A module homomorphism induces an isomorphism from its quotient by its kernel to its image ([[thm-first-isomorphism-theorem-modules]]).

#### target: `lem-canonical-comparison-characterises-limit-preservation`  (lemma, 1 citation)

- `thm-representable-second-proof-of-rapl-under-local-smallness` **F2** — used at step(s) 4.1
  - restatement on disk: A functor preserves a chosen limit exactly when its canonical comparison to the chosen limit of the image diagram is an isomorphism ([[lem-canonical-comparison-characterises-limit-preservation]]).

#### target: `thm-free-groups-unique-up-to-unique-isomorphism`  (theorem, 1 citation)

- `thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor` **F2** — used at step(s) 4.1
  - restatement on disk: Two free groups on the same set are uniquely isomorphic by an isomorphism preserving the generator maps ([[thm-free-groups-unique-up-to-unique-isomorphism]]).

#### target: `thm-universal-property-of-a-polynomial-ring`  (theorem, 1 citation)

- `ex-the-galois-connection-between-ideals-and-varieties` **F3** — used at step(s) 1.1
  - restatement on disk: For commutative rings $R,S$, a unital ring homomorphism $\varphi\colon R\to S$, and $s\in S$, there is a unique unital ring homomorphism $\operatorname{ev}_{\varphi,s}\colon R[x]\to S$ extending $\varphi$ on constant polynomials and sending $x$ to $s$ ([[thm-universal-property-of-a-polynomial-ring]]).

#### target: `def-linear-map`  (definition, 1 citation)

- `ex-frobenius-reciprocity-for-group-representations` **F3** — used at step(s) 1.1, 2.2, 3.1, 3.2
  - restatement on disk: A map $T:V\to W$ is linear exactly when $T(au+bv)=aT(u)+bT(v)$ for all scalars and vectors ([[def-linear-map]]).

### Report format

Write your findings to stdout as your final message. Per finding:

- citing item id, fact label, cited target id
- **what the restatement claims** vs **what the Statement says** (quote both)
- which numbered step depends on the difference, or "no step depends on it"
- your severity: `fatal` (a step is unlicensed / a false claim is asserted) or
  `nonfatal` (a competent reader closes it in 30 seconds)

Close with: targets opened, edges checked, findings by severity. If you checked
an edge and it is clean, it is clean — do not pad the report.
