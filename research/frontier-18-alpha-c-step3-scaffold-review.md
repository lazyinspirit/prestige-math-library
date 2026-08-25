# frontier-18 — Alpha group **c**, step-3 scaffold breadth and depth review

Batches **1, 3, 4** (`covers:` line of the step3-c dispatch). Group rationale in
`research/frontier-18-alpha-groups.json`: one polynomial-ring and finite-field
machinery running through all three, so the $\mathbb{F}_p$ square-counting
argument and the polynomial-ring conventions are each verified once.

| pair | batch | A items | B items | verdict |
|---|---|---|---|---|
| `lagrange-four-square-theorem` | 1 | 16 | 10 | **insufficient** (B1-1) |
| `finite-fields-and-cyclotomic-extensions` | 3 | 46 | 19 | **insufficient** (B3-1, B3-2) |
| `noetherian-rings-and-hilbert-basis` | 4 | 38 | 12 | **insufficient** (B4-1) |

Machine half: `research/frontier-18-alpha-c-step3-verdicts.json`.

None of the three pairs is thin. The mathematics in all three is correct as far
as a scaffold can be checked, the decompositions are honest, and the three Betas
each returned a numbered findings list asking Alpha to decide. Every one of those
30 findings is adjudicated below. The three blocking findings are a duplicated
published proof, six provenance labels that would hard-fail `content-policy` at
step 5, and one named source result declined on a premise that is false on disk
today.

---

## Severity table

| id | pair | class | severity | disposition |
|---|---|---|---|---|
| **B1-1** | lagrange-four-square | duplicated published proof; zero dependency edges to the declared prerequisite | **blocking** | route: cite `prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` |
| **B3-1** | finite-fields-and-cyclotomic | `ai-generated` statement planned on a `remark` and on four `false-statement` items | **blocking** | route: retag `ai-altered`, drop the `generation` blocks |
| **B3-2** | finite-fields-and-cyclotomic | a `deps` edge into an `ai-generated` statement, contradicting the notes' own load-bearing check | **blocking** | route: cut the edge |
| **B4-1** | noetherian-rings | Hochster Cor. 5.9 declined on a premise now false on disk, deferred to a published page | **blocking** | route: build the corollary |
| B3-3 | finite-fields-and-cyclotomic | Wedderburn's little theorem: decline correct, recorded reason materially wrong, destination unreachable | major | route with the corrected reason (decline stands) |
| B1-2 | lagrange-four-square | Conrad Thm 5.1, a second route to a published theorem, blocked only by the reciprocal-cross-reference rule | major | **owner decision** — recorded, not built |
| B4-2 | noetherian-rings | Hochster Thm 5.5, second proof of Hilbert basis over a field | major | **declined**, with reasons |
| B3-4 | finite-fields-and-cyclotomic | `cor-a-unique-quadratic-subfield…` is vacuously non-proper at $p=3$ | minor | boundary note for step 5 |
| B3-5 | finite-fields-and-cyclotomic | four harvest rows dispositioned `deferred` where the result is already published | minor | recorded, no action |
| B1-3 | lagrange-four-square | `finite_smoke` is empty for every item on the page and the gate reports green over zero checks | minor | recorded; registry change is a tool decision |
| T-1 | all | `validate-plan.mjs` performs no reading-order check on a dep that already exists in `items/` | tooling | recorded for the owner and the engine |

---

## What I ran, and what it found

Everything below is over batches 1, 3 and 4 only.

- `node tools/coverage-checklist.mjs research/frontier-18-batch-{1,3,4}.coverage.json`
  → **3 pages, 380 harvested results, 0 errors, 0 warnings.**
- `node tools/url-sweep.mjs --coverage … --recover --fail-on-dead`
  → **14/14 live, 0 failed, 0 recoverable, 0 suspect.** Batch 4's Hochster URL is
  the Wayback snapshot recovered under the recover-before-replace rule
  (batch-4 Finding 11); it answers.
- `node tools/validate-plan.mjs research/plan-spec.json` → OK, acyclic and
  consistent. The two drift edges are on disk: `finite-fields-and-cyclotomic-extensions`
  carries `triangularisation-and-jordan-canonical-form`, and
  `noetherian-rings-and-hilbert-basis` carries `symmetric-polynomials`.
- **Dependency closure**, every external dep of every item resolved against
  `library/` and the declared `requires` closure: **419 external dep uses over 168
  distinct published items, 0 outside the closure, 0 unresolved, 0 on a page that
  is not `published`.**
- **Reading order**, each external dep's home page order against the citing
  page's order: **0 forward-order dependencies** in either direction on any of the
  six pages. This matters more than usual because of T-1 below: the gate would not
  have caught one.
- **B-page leaf rule**: **0 violations**. No item of mine depends on a published
  item homed on an `-examples` page. (The drift review flagged batch 8 for exactly
  this; my three are clean.)
- **Provenance eligibility of every external dep**: of the 168 distinct published
  items cited, **none has `provenance.statement: ai-generated`**, none is
  `legacy-unclassified`, and none carries `proved_here: false`. The distribution is
  60 `literature-derived`/`ai-altered`, 45 `literature-derived`/`not-applicable`,
  23 `ai-altered`/`not-applicable`, 18 `ai-altered`/`ai-generated`, 14
  `literature-derived`/`literature-derived`, 7 `ai-altered`/`ai-altered`, 1
  `literature-derived`/`ai-generated`. The provenance-order rule is satisfied
  *outward*; B3-1 and B3-2 are about labels the batch plans to write *inward*.
- **Euler's four-square identity, both sign patterns and Hamilton's**, checked as
  polynomial identities over 200,000 random integer quadruple pairs each
  (Hamilton over 50,000): **0 failures**. The sign pattern
  `lem-euler-four-square-product-identity` fixes is a genuine identity, and the
  substitution $y\equiv x \pmod m$ really does annihilate all four bilinear
  coordinates for it and for Euler's second pattern but not for Hamilton's — which
  is the whole content of `rem-sign-patterns-in-the-four-square-identity`, and it
  is correct as written.
- Every worked number on batch 1's B page recomputed by hand: $7\cdot15=105$ with
  $z=(10,1,-2,0)$; the two descent steps $143\to26\to13$ with residue quadruples
  $(0,3,3,2)$ and $(0,1,1,0)$ and Euler outputs $(22,33,33,22)$ and $(6,4,0,0)$;
  both least-absolute-remainder tables mod 7 and mod 8. All correct.
- Batch 3's B-page arithmetic spot-checked: $\operatorname{ord}_5(3)=4$ and
  $\operatorname{ord}_7(3)=6$ give $\mathbb{F}_{3^4}\cap\mathbb{F}_{3^6}=\mathbb{F}_9$;
  $\operatorname{ord}_7(2)=3$ gives two cubics; $\operatorname{ord}_5(11)=1$ gives
  four roots in $\mathbb{F}_{11}$; $(\mathbb{Z}/12)^\times\cong(\mathbb{Z}/2)^2$
  gives exactly three quadratic subfields. All correct.

---

# Batch 1 — `lagrange-four-square-theorem`

Design: `research/plan-number-theory-track.md` §NT-5, lines 578–655, read in
full against the scaffold. Drift verdict for this pair was `no-drift`, and I
confirm it: nothing the pair cites falls outside the declared closure.

## Is the standard development present?

Yes, and it is deeper than the design's ten A-page rows. A competent chapter on
Lagrange's theorem proves: Euler's identity, closure under products, the
solvability of $x^2+y^2+1\equiv0 \pmod p$, the small multiple, the descent step,
the prime case, the general case, and the $4^a(8b+7)$ obstruction that shows four
is not two or three. All eight are scaffolded, and the descent — the one hard
point — is split into `lem-least-absolute-remainder`,
`lem-least-absolute-residue-quadruple-of-a-multiple` and `lem-four-square-descent`
rather than written as one item. That split is the right call and I would have
required it had it not been made: the equality case $n=m$ is the subtlest step on
the page and it now has a Statement a judge can check.

The four classical results a reader might expect and not find are all
dispositioned against a real destination: Legendre's three-square theorem
(`owner-decision`, because its proof needs Minkowski *and* Dirichlet, neither at
order 57.009), Jacobi's representation count (`arithmetic-functions-and-dirichlet-convolution`,
order 348.001), the Minkowski/geometry-of-numbers proof
(`minkowski-theory-and-number-field-class-groups`), and the Hurwitz-quaternion
proof (`out-of-scope` — the library has a quaternion *group* at order 68 and no
quaternion division algebra anywhere). I checked each destination against
`plan-spec.json`: all exist as planned pages. The quaternion decline is the one
where the 2026-08-11 build-the-machinery rule could bite; it does not, because
what is missing is a page's worth of algebra and the page already proves the
theorem by another route.

I traced every strategy against its `deps` and every one closes. Three worth
naming because they are where a route usually fails:

- `lem-least-absolute-residue-quadruple-of-a-multiple` rules out both $n=0$ and
  $n=m$, and the $n=m$ argument — $m$ even, every $a'=m/2$, hence
  $a^2\equiv m^2/4 \pmod {m^2}$ and $pm\equiv 0 \pmod{m^2}$ — is written out
  rather than waved at. Correct.
- `prop-three-square-congruence-obstruction` writes $4^a$ as a natural power in
  the commutative monoid $(\mathbb{Z},\cdot,1)$, citing `def-group-power` and
  `lem-units-of-z`. I opened both: `def-group-power`'s first clause is explicitly
  "Natural exponents, in a monoid", and `lem-units-of-z` establishes that
  $(\mathbb{Z},\cdot,1)$ is one. The citation is exact, not approximate, and it
  is what keeps the item clear of `notation-iota-applied`.
- `thm-every-prime-is-a-sum-of-four-squares` and `thm-lagrange-four-square-theorem`
  both take a least element of a set bounded below and cite
  `lem-int-bounded-above-has-greatest`. Its title carries both halves — "and a
  nonempty set of integers bounded below has a least element" — so the citation is
  right and not a 30-second gap dressed as one.

## B1-1 — the page re-derives a published proposition and has no dependency edge to its own prerequisite · **blocking**

`lem-four-square-congruence-for-primes` proves the odd-prime case by taking the
set $Q$ of all square classes mod $p$, counting $|Q|=(p+1)/2$, translating it by
$[-1]$, and colliding the two inside a $p$-element set.

`prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` is **published**
on `sums-of-two-squares` (order 57.007, `provenance.statement: literature-derived`,
paired-judge pass 2026-08-23, `audited: 2026-08-24`). Its Statement is: *let $p$
be an odd prime and $a\in\mathbb{Z}$ with $p\nmid a$; then there are integers
$x,y$ with $x^2+y^2\equiv a \pmod p$.* At $a=-1$ that is exactly what this lemma
needs. Its proof is the same argument step for step, and it cites the identical
five dependencies the scaffold plans to cite:
`thm-count-of-quadratic-residues-modulo-prime`, `thm-standard-representatives-modulo-n`,
`thm-sum-rule`, `thm-subset-of-a-finite-set`, `thm-integers-modulo-n-basic-algebra`.

The Beta declined to cite it, correctly at the time, because
`sums-of-two-squares` was `status: draft` when batch 1 was scaffolded at 03:31,
and its Finding 5 offers Alpha exactly two options and pre-authorises option (b)
"if frontier-17's pair is published before step 5". **It is published now** — both
`sums-of-two-squares` and `sums-of-two-squares-examples` read `status: published`
on disk, and publication state is the `status:` line, not the git log.

So the condition the Beta named has been met, and the consequence it flagged is
live: the A page currently has **zero** `deps` edges to `sums-of-two-squares`,
its sole declared prerequisite, and reaches it only through a wikilink in a
Remark. That is the shape the step-6 cross-edge rule names as a finding rather
than a clean bill — two pages that should connect, duplicating instead of citing.

**Decision: option (b).** `lem-four-square-congruence-for-primes` cites
`prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` at $a=-1$ for the
odd case and keeps $p=2$ as the direct check $1^2+0^2+1=2$. The five counting
dependencies come out of its `deps` and out of its contract's facts; the new
facts are the published proposition, `lem-congruence-respects-integer-arithmetic`
for rewriting $x^2+y^2\equiv-1$ as $x^2+y^2+1\equiv0$, and `lem-units-of-z` with
`def-divides-in-z` for $p\nmid-1$.

I am routing this rather than editing `.pages.json` myself because the fix has to
move `pages.json`, the item's `proof-contracts.json` entry (whose F1–L5 citations
and eight derivations are all written against the counting proof) and the notes'
§7 contract strings together, and the Beta owns all three at step 5.

Keep the Remark wikilink in `def-sum-of-four-squares-representation`: the page it
points at is published, so the "resolves for the owner and 404s for the public"
risk the Beta raised is gone.

## B1-2 — Conrad Theorem 5.1, a second route to a published theorem · **owner decision**

Conrad's *Proofs by Descent* §5 proves Fermat's two-square theorem for primes by
descent, and the library proves it by Thue's lemma
(`thm-fermat-two-square-theorem-for-primes`). That is a genuinely different
method, not a rearrangement, and the owner's 2026-08-20 rule welcomes it; the
page even builds the machinery it needs (`lem-least-absolute-remainder`), so
"reduced to a bare pointer" would understate what is available here.

I am **not** reversing the decline, and the Beta's reason needs updating rather
than approving: the blocker is no longer that the target is a draft. It is that
the rule requires **each version to name the other**, and the reciprocal
cross-reference is an edit to a now-published item on a page outside this level.
That is not an obvious-published-dependency repair — nothing on
`sums-of-two-squares` is false — so it is outside every write boundary I have at
step 3.

Recorded for the owner, in these terms: *if the owner authorises the reciprocal
`rem-` or Remark sentence on `thm-fermat-two-square-theorem-for-primes`, batch 1
can carry `thm-fermat-two-square-theorem-by-descent` at essentially no cost,
because the descent machinery is already on the page.* Nothing in this run turns
on it.

## B1-3 — the finite-smoke gate is green over zero checks · minor, recorded

The Beta read `finite-smoke.mjs --self-test`'s ten registered checks and found
that none is a bounded countermodel search for anything on this page; the nearest,
`binomial-congruence-solution-count`, is one-variable. So every contract will
carry `finite_smoke: []` and the gate will report `0 error(s), 0 check(s) over
0/24 item(s)` — the state `QUALITY-CONTROLS.md` names as the failure mode of a
gate that confirms rather than checks.

I approve the honest empty list; inventing an inapplicable check is worse. The
Beta ran the equivalent bounded searches by hand and recorded them, and I
reproduced the load-bearing one myself (the sign patterns, above) and got the
same answer. Its proposal of three registry checks —
`sum-of-k-squares-residues-mod-n`, `four-square-identity-sign-pattern`,
`three-square-obstruction` — is a tool change and I am not making one mid-run.
**Routed to the owner and the engine, not to the Beta.**

## Adjudication of batch 1's nine findings

| # | subject | disposition |
|---|---|---|
| 1 | design contradicts itself about whether Dummit is load-bearing | **approve.** The NT-5 backing paragraph calls Dummit non-load-bearing while the item table sources the three-square obstruction to Dummit §9.1.3; Dummit is the only selected source stating it. Apply the amendment at step 4. |
| 2 | three provenance cells in the design are wrong | **approve.** Conrad Lemma 6.2 leaves the expansion to the reader, so the proof is generated, not derived; Dummit and Crisman both decline to prove the obstruction; `cor-integers-requiring-four-squares`'s sentence is in no source. §5's `L/G`, `L/A` and `A/A` are the honest labels and they bind. |
| 3 | five lemmas the design's own proofs consume are unscaffolded | **approve.** I checked all five against the proofs that use them; each is genuinely consumed and `lem-least-absolute-remainder` would otherwise be re-derived inline twice. |
| 4 | restate the obstruction as $4^am$, $m\equiv7\pmod 8$ | **approve.** Verified against `def-group-power` and `lem-units-of-z`, as above. The $8b+7$ form would need the applied embedding the owner's standing rule bans. |
| 5 | zero dependency edges to `sums-of-two-squares` | **decide (b)** — B1-1. |
| 6 | three source locators in the design are off | **approve.** The coverage file already records the corrected ranges and `url-sweep` opens all four sources. Apply to the design at step 4. |
| 7 | wording slip in the design's descent paragraph | **approve.** "$1\le n\le m$, and it cannot be zero" does assert then argue; the proposed "$0\le n\le m$ … so $n\ge1$" is the right order. |
| 8.1 | Conrad Thm 5.1 second proof | **decline stands, reason replaced** — B1-2. |
| 8.2 | Conrad Thm C.1, four *rational* squares | **approve the decline.** Strictly weaker than what the page proves over $\mathbb{Z}$; the second-proof licence covers a different route to the same statement, not a weaker consequence of it. |
| 8.3 | Conrad Thm C.2, $ax^2+by^2\equiv c \pmod p$ | **approve the decline.** Nothing here consumes more than $a=b=1$, $c=-1$, and the destination `positive-definite-binary-quadratic-forms-and-reduction` (order 57.011) exists in `plan-spec.json`. |
| 9 | no applicable finite-smoke check | **approve; registry change routed** — B1-3. |

## Verdict

**insufficient**, on B1-1 alone. Everything else on this pair is approved as
scaffolded. Size 16 A items, no split.

---

# Batch 3 — `finite-fields-and-cyclotomic-extensions`

Design: `research/plan-algebra-track.md` §GA-3, lines 2789–2900. Drift verdict
`drift-applied`; the `triangularisation-and-jordan-canonical-form` edge is on
disk and I confirmed all three of its items are cited
(`thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials`,
`def-cyclic-subspace-vector-and-vector-annihilator`,
`thm-cyclic-subspace-power-basis-and-companion-matrix`).

## Is the standard development present?

This is the richest of my three and the answer is yes, with genuine depth beyond
the design's inventory. The Galois theory of finite fields is built from the
relative Frobenius through Artin's fixed-field theorem rather than through
separability and normality separately; the normal basis theorem is proved
**twice**, once over an infinite base field by Artin's determinant argument and
once for a cyclic extension by the cyclic-vector criterion, and then combined;
$\Phi_n$ is defined by the divisor recursion with a separate well-definedness
theorem; irreducibility over $\mathbb{Q}$ goes through the Dedekind
reduction-mod-$p$ lemma; and the page closes on the two classical payoffs —
infinitely many primes $\equiv1\pmod n$, and every finite abelian group as a
Galois group over $\mathbb{Q}$.

I traced every non-trivial strategy. All of them close. The ones I checked
hardest, because they are where this material usually breaks:

- `thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity`
  runs a strong induction inside a splitting field where $t^n-1$ is separable, and
  uses separability to rule out a root of $\Phi_n$ of smaller order. That is the
  only route available once $\Phi_n$ is the recursion rather than a minimal
  polynomial, and it is correct.
- `lem-a-primitive-root-of-unity-and-its-prime-power-share-a-minimal-polynomial-over-the-rationals`
  is the Dedekind argument with the $p\nmid n$ hypothesis explicitly load-bearing
  at the last step. Correct, and the strategy says where the hypothesis is used.
- `lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible`
  spreads a $K$-linear relation among the $\sigma_i$ from a basis to all of $K$ by
  $F$-linearity before applying Dedekind independence. That is the step people skip;
  it is written.
- `lem-degree-of-a-compositum-with-a-galois-extension` weakens Conrad's
  hypothesis from "both Galois" to "$E/F$ Galois", which is all the published
  translation theorem needs, and the Beta tagged the weakening `ai-altered`
  rather than passing it off as the source's. Correct on both counts.
- `thm-intersections-of-rational-cyclotomic-fields` is stated over $\mathbb{Q}$
  only and the B page carries the $\mathbb{F}_3$ witness showing the restriction
  is necessary. This is the design's trap and the scaffold does not fall into it.

Size: 46 A items against the 60 ceiling. **No split.**

## B3-1 — five items plan an `ai-generated` statement on a kind that cannot carry one · **blocking**

`content-policy.mjs` maps generated roles only for `corollary`, `example` and
`counterexample` (`GENERATED_ROLE`). Outside audit mode, an `ai-generated`
statement on any other kind is the hard error `generated-kind`, and a missing or
mismatched `generation.role` is the hard error `generated-role`.

Batch 3's §5 plans `provenance.statement: ai-generated` on **six** items, of
which **five** are on kinds that cannot carry it:

- `rem-the-two-descriptions-of-the-subfield-lattice-of-a-finite-field`, a
  `remark`, with `generation.role: direct-corollary` — a role reserved for
  `corollary`;
- `fs-every-basis-of-a-finite-field-over-a-subfield-is-a-normal-basis`,
- `fs-the-cyclotomic-polynomial-is-irreducible-over-every-field`,
- `fs-the-group-of-n-th-roots-of-unity-has-n-elements-in-every-field`,
- `fs-every-finite-abelian-group-is-the-galois-group-of-a-cyclotomic-field`,

all `false-statement`, which §5 assigns "`generation.role` … `counterexample`
for the `fs-` items".

This is not a theoretical reading. Of the whole published corpus, exactly two
`fs-` items and twenty-one `rem-` items carry `statement: ai-generated`, and the
most recent of them was audited **2026-08-01** — the day the component-provenance
rule landed. No run since has shipped one. Batch 3 as planned would ship five.

The labels are also wrong on the merits, and batch 1's Beta wrote the correct
reasoning for exactly this case: *"An `ai-generated` false statement is
prohibited, and this one is an adaptation of a literature statement, not a fresh
invention."* All four of batch 3's `fs-` items are adaptations — each is the
negation of a hypothesis the harvested sources state explicitly (Clark Prop 9.4
for $|\mu_n(K)|=n$, Conrad Thm 5.4 and Cor 5.7 for irreducibility over every
field, Conrad `linearchar` Ex 3.1 for the basis that is not normal, and the
$\varphi(n)$ count for the abelian-group claim). `ai-altered` is the honest label
and it is also the one that builds.

For the remark, `ai-altered` is likewise defensible: Milne Cor 4.21 derives the
elementary divisibility criterion *from* the Frobenius subgroup lattice, so the
agreement the remark records is the source's own move, restated in this library's
two-item vocabulary. The Beta's reason — "no source states the agreement because
no source has two items" — is about the *ids*, not the mathematics.

**Route:** retag all five to `provenance.statement: ai-altered`, name the source
clause each adapts or negates, and delete the `generation` blocks (a `generation`
block on a non-generated statement is itself the error
`generation-on-non-generated-statement`). `cor-a-unique-quadratic-subfield-of-the-p-th-cyclotomic-field`
is the sixth and it is **fine as planned**: a `corollary` with
`generation.role: direct-corollary` is exactly what the map licenses.

## B3-2 — a `deps` edge into an `ai-generated` statement · **blocking**

§5 asserts twice that no `ai-generated` statement is a dependency target in this
batch — "none of the three is a `deps` target anywhere in this batch" and, on the
remark's own row, "**Non-load-bearing; no item depends on it.**"

The manifest says otherwise. `ex-the-subfield-lattice-of-the-field-of-order-two-to-the-twelve`
declares `rem-the-two-descriptions-of-the-subfield-lattice-of-a-finite-field` in
its `deps`. Under `content-policy`'s `ai-generated-statement-dependency` that is
a hard error, and it is one the notes' own load-bearing check was supposed to
have caught.

**Route:** cut the edge. The example needs
`thm-intermediate-fields-of-an-extension-of-finite-fields` and the published
`thm-subfield-lattice-of-a-finite-field`, both of which say what it uses; the
remark is expository and nothing turns on citing it. B3-1's retag would also
clear the error, but the edge should go regardless — a worked example does not
rest on a dictionary remark.

## B3-3 — Wedderburn's little theorem: the decline is right and the recorded reason is not · major

The harvest defers *"Wedderburn's theorem that every finite division ring is
commutative, proved with cyclotomic polynomials"* to
`chain-conditions-and-semisimple-modules`, with the reason that the statement
"quantifies over division rings, which this page never introduces, and its
class-equation proof needs the centre and the conjugacy classes of the unit group
of a noncommutative ring; the page that builds noncommutative ring theory is where
the hypothesis can even be stated."

I checked that reason, because "requires machinery we do not have" is checkable:

- `thm-class-equation`, `thm-orbit-stabilizer` and `thm-cauchys-theorem-for-finite-groups`
  are all **published** on `group-actions-and-cayleys-theorem` at order 42. The
  class equation is available, and $D^\times$ is a finite group like any other, so
  "the conjugacy classes of the unit group" is not the obstacle.
- `chain-conditions-and-semisimple-modules` is at order **108** and is **published**.
  Deferring there means nothing will ever build it — and order 108 could not have
  built it either.

The real blocker is elsewhere and it does hold. The classical proof needs
$|\Phi_n(q)| > q-1$, which comes from $|q-\zeta| > q-1$ for a primitive $n$-th
root of unity $\zeta \ne 1$. That is an archimedean estimate over $\mathbb{C}$,
and the complex $n$-th roots of unity — `thm-complex-nth-roots-and-roots-of-unity`
— are published on `the-complex-exponential-and-eulers-formula` at order **189**,
against this page's 101.2. `thm-every-complex-number-has-a-square-root` at order
54 gives square roots and no more. There is no elementary substitute at this
anchor: the Möbius product formula for $\Phi_n$ needs
`arithmetic-functions-and-dirichlet-convolution` at order 348.001, and the
maximal-subfield route needs central simple algebras the library has nowhere.

**The decline stands.** Route the row to be re-dispositioned with that reason and
`destination: owner-decision` — this is a result whose home must sit above order
189 and no page in `plan-spec.json` currently claims it. The same correction
applies to the uniform $E\otimes E$ / Krull–Schmidt proof of the normal basis
theorem, whose recorded reason is accurate but whose destination is also a
published page.

## B3-4 — the quadratic subfield at $p=3$ · minor, boundary note for step 5

`cor-a-unique-quadratic-subfield-of-the-p-th-cyclotomic-field` is true as titled:
for odd $p$, $\operatorname{Gal}(\mathbb{Q}(\zeta_p)/\mathbb{Q})\cong(\mathbb{Z}/p)^\times$
is cyclic of even order $p-1$, so it has exactly one subgroup of index two. §6b
records the $p=2$ failure and the checks at $p=3,5,7$. It does not record the
other boundary: **at $p=3$ the unique degree-two intermediate field is
$\mathbb{Q}(\zeta_3)$ itself**, so a Statement written with "proper subfield"
would be false at the smallest case in scope. The current title says "intermediate
field", which is right; step 5 must not tighten it to "proper".

I also note, without requiring it, that this statement is standard in the wider
literature — the unique quadratic subfield of $\mathbb{Q}(\zeta_p)$ is
$\mathbb{Q}(\sqrt{p^{*}})$ with $p^{*}=(-1)^{(p-1)/2}p$, the Gauss-sum field. The
Beta searched its six harvested sources and correctly found none stating it, so
`ai-generated` with `generation.role: direct-corollary` and no dependants is the
honest tag against what it read. If step 5 sources it, retag `literature-derived`;
if not, keep it as planned and do **not** upgrade it to a `thm-`.

## B3-5 — four harvest rows dispositioned `deferred` where the result is already published · minor, no action

Milne Prop 4.24/Rem 4.25 (algebraic closure of $\mathbb{F}_p$) →
`algebraic-closure-embeddings-and-separability`; Milne §5 Dedekind independence
and Conrad `linearchar` §2 Thm 2.1 → `the-galois-correspondence`, where
`thm-dedekind-linear-independence-of-characters` is published and which this page
actually cites; Clark Ex 9.3 → `the-complex-exponential-and-eulers-formula`;
Conrad Ex 1.4 → `algebraic-extensions-degree-and-finite-fields-examples`. All four
are `already-published` rather than `deferred`. Each reason text is accurate and
says so in prose, so nothing is hidden and I am not routing a relabelling round
for it. Recorded so the step-6 harvest-faithfulness reader does not read four
open ends that are not open.

## Adjudication of batch 3's eleven findings

| # | subject | disposition |
|---|---|---|
| F1 | add the `triangularisation-and-jordan-canonical-form` edge | **approve; already applied.** On disk in `plan-spec.json`, order 90 < 101.2, backward, and all three cited items confirmed. `validate-plan` exits 0. |
| F2 | `the-galois-correspondence` is `status: draft` | **superseded by disk.** The page, its companion, and every one of the sixteen items this pair cites read `status: published`. `depsource` will report no `draft-page`. The sequencing constraint the Beta flagged for step 10 no longer exists. |
| F3 | five GA-3 design results are already published on AA-15 | **approve.** Verified against `algebraic-extensions-degree-and-finite-fields`. Re-minting any of them would put two ids on one statement; the scaffold re-mints none and records the agreement in a remark. Design amendments A2 and A6 at step 4. |
| F4 | Kronecker–Weber must be a `rem-` with `proved_here: false` | **approve.** The `rem-` + `proved_here: false` + `external_dependency` shape is the library's established pattern (118 published instances). §6c's record is concrete: exact statement, both failed local routes, and the necessity. Not using `external_refs` is right — nothing depends on it. |
| F5 | the quadratic subfield becomes a generated corollary | **approve, with B3-4.** Verified from the manifest that no item depends on it. |
| F6 | add the two Clark applications | **approve.** `thm-infinitely-many-primes-congruent-to-one-modulo-n` and `thm-every-finite-abelian-group-is-a-galois-group-over-the-rationals` are what the cyclotomic machinery is classically for, both are inside the harvested range, and I traced both routes: the first needs only $\Phi_n(0)=1$ and Lagrange, the second the published CRT and invariant-factor theorem, both in closure. |
| F7 | build the two cyclic-group prerequisites | **approve.** Confirmed the library has `thm-subgroups-of-cyclic-groups-are-cyclic` but nothing saying a finite cyclic group has exactly one subgroup of each dividing order, and nothing counting generators. Six items need them. Building a missing prerequisite is the required disposition since 2026-08-11. |
| F8 | the published several-variable lemma cannot serve | **approve.** Verified: `cor-polynomials-over-an-infinite-domain-are-determined-by-values` is single-variable **and** carries `provenance.statement: ai-generated`, so a `deps` edge to it is a hard `ai-generated-statement-dependency` error. Building `lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring` from the published root bound is the only route, and it is source-backed twice (Clark 8.21, Milne 5.19). |
| F9 | generalise two Conrad statements from $\mathbb{F}_p$ to $\mathbb{F}_q$ | **approve.** The published `thm-factorization-of-x-qn-minus-x` is already over $\mathbb{F}_q$, so stating the divisor-sum identity over $\mathbb{F}_p$ would be an artificial narrowing; Conrad's own Thm 2.10 licenses the second. Both tagged `ai-altered`, correctly. |
| F10 | $\Phi_n$ is the recursion, not the minimal polynomial | **approve.** Defining $\Phi_n$ by its complex roots is unavailable at order 101.2 and would make the irreducibility theorem circular and the $\mathbb{F}_q$ factorisation theorem meaningless. The well-definedness theorem discharging monic division **over $\mathbb{Z}$** — not over a field — is the right shape and must stay a numbered item. |
| F11 | the intersection theorem over $\mathbb{Q}$ only | **approve.** Stating it over an arbitrary $K$ ships a false theorem, and Conrad Examples 3.1 and 3.3 are two witnesses. The $\mathbb{F}_3$ one is on the B page, which is where a necessary hypothesis should be visible. |

## Verdict

**insufficient**, on B3-1 and B3-2, with B3-3's re-disposition in the same round.
The mathematics needs nothing added.

---

# Batch 4 — `noetherian-rings-and-hilbert-basis`

Design: `research/plan-commutative-algebra-track.md` §CA-1 and the §10.4 overlay.
Drift verdict `drift-applied`; the `symmetric-polynomials` edge (order 58) is on
disk and `def-invariant-subring-of-a-group-of-ring-automorphisms` cites
`def-symmetric-polynomial`, so the edge is live and not redundant.

## Is the standard development present?

Yes. Chain conditions at the ideal level, Noetherian induction, quotients and
localisations, the Hilbert basis theorem split into the stage-ideal construction,
the single cancellation step and the well-founded induction, finitely many
variables, finite-type algebras, finite presentation, the `Hom` finiteness
corollary, module-finiteness and its transitivity, Artin–Tate in both the
module-finite and the integral form, Noether's finiteness theorem for invariants,
and Cohen's criterion with its Zorn lemma and its colon-ideal primality step. The
B page carries four real non-Noetherian witnesses, each failing for a different
reason, and the no-uniform-bound false statement.

I traced every strategy. Three checks worth recording:

- `lem-polynomial-ideal-finite-generation` applies the cancellation lemma at
  stage $n=\min(d,N)$ and uses $\mathfrak{a}_d=\mathfrak{a}_N$ when $d>N$. Both
  branches satisfy the lemma's hypotheses ($d\ge n$ and $\mathrm{lc}(f)\in\mathfrak{a}_n$),
  and the note that $0\notin\mathfrak{a}\setminus\mathfrak{b}$ is what makes "the
  degrees form a nonempty subset of $\mathbb{N}$" true rather than nearly true.
- `lem-leading-coefficient-ideals` adjoins $0$ explicitly because the zero
  polynomial has no degree, and takes the stage at *exact* degree. The Beta's
  Finding 4 is right that this is the version all four sources use and that the
  "at most $n$" version silently needs a lifting argument the design never supplies.
- `lem-maximal-non-finitely-generated-ideal-is-prime` writes out the colon-ideal
  step and the decomposition $\mathfrak{p}=(x_1,\dots,x_n)+a\mathfrak{q}$ rather
  than asserting it. Correct.

Size: 38 A items. **No split.**

## B4-1 — Hochster Corollary 5.9 is declined on a premise that is false on disk · **blocking**

The harvest defers *"Corollary 5.9: a finitely generated algebra over a principal
ideal domain is Noetherian"* to `modules-over-a-pid-and-canonical-forms`, with
the reason: *"The one input this needs is that a principal ideal domain is
Noetherian, which already exists on disk as the drafted
`cor-principal-ideal-domains-are-noetherian` on an earlier page; that page is not
published and this pair may not rest on unpublished content."*

Two things are wrong with that, and both are checkable:

1. `cor-principal-ideal-domains-are-noetherian` reads **`status: published`** on
   disk, homed on `modules-over-a-pid-and-canonical-forms` (order 110), paired-judge
   pass 2026-08-23, `audited: 2026-08-24`. That page is `published` and is in this
   pair's declared closure through `modules-over-a-pid-and-canonical-forms-examples`.
   The reason was true when the batch was scaffolded at 03:45 and is not true now,
   and publication state is the `status:` line.
2. The reason conflates two statements. Hochster 5.9 is *"a finitely generated
   algebra over a PID is Noetherian"*, not *"a PID is Noetherian"*. Building it
   mints no second id for anything: it is one line from
   `cor-finite-type-algebra-over-noetherian-ring-is-noetherian`, which this page
   proves, and the published `cor-principal-ideal-domains-are-noetherian`.

The destination is also a published page, so as dispositioned nothing will ever
build it. It is a named result of a harvested source, it is the cheaply proved
corollary the scaffold-richness rule asks for a pass over, and its two inputs are
both in hand.

**Route:** build it — one `cor-` on the A page citing
`cor-finite-type-algebra-over-noetherian-ring-is-noetherian`,
`cor-principal-ideal-domains-are-noetherian` and
`def-finite-type-and-module-finite-algebras` — and re-disposition the harvest row
to `included`.

## B4-2 — Hochster Theorem 5.5, the second proof of Hilbert basis · **declined**

Finding 10 hands this decision to Alpha with "decline is the default". I decline
it, on two grounds rather than the one the Beta gave:

1. **It proves a weaker statement than the page already proves.** Hochster 5.5 is
   the polynomial ring over a *field*; `thm-hilbert-basis-theorem` on this page is
   over any Noetherian ring, and `cor-finite-variable-polynomial-ring-noetherian`
   gives the field case immediately. The owner's second-proof licence is for a
   genuinely different route **to the same statement**; a different route to a
   consequence of it is not what it covers, and it is the same shape as batch 1's
   rational four-squares decline.
2. The route needs the Noether-normalisation change of variables
   ($x_i\mapsto x_i+x_n^{m_i}$, or a linear substitution over an infinite field),
   which `noether-normalisation-and-nullstellensatz` is designed to own. Minting it
   here would pre-empt that page's id for its central lemma, and pulling the lemma
   forward is a plan decision.

Note for the record that the page's module-finite machinery
(`thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian`) is the *other*
half of that proof and is already here, so if the owner ever moves the
substitution lemma earlier, the enrichment costs one lemma and one theorem.

## Adjudication of batch 4's twelve findings

| # | subject | disposition |
|---|---|---|
| 1 | add the `symmetric-polynomials` edge | **approve; already applied.** Order 58 < 111.001, backward; the edge is live through `def-invariant-subring-of-a-group-of-ring-automorphisms` → `def-symmetric-polynomial`, and recording the agreement with the published $R[x_1,\dots,x_n]^{\operatorname{Sym}_n}$ rather than silently redefining it is the seam rule working. |
| 2 | defer the formal power series block | **approve.** `formal-power-series` is published at order **193** against this page's 111.001, so citing it is a load-bearing forward reference and building $R[[x]]$ again is a silent second construction. `destination: owner-decision` is right: both remedies — moving a published page in reading order, or giving $R[[x]]$ a commutative-algebra home above 193 — are owner decisions. See T-1 for the gate blind spot the Beta found while checking this. |
| 3 | the overlay's Cohen lemma carries an unused prime hypothesis | **approve.** The Zorn argument uses no hypothesis on primes; attaching one would make the criterion's proof read as circular. `lem-maximal-non-finitely-generated-ideal` as restated is correct. |
| 4 | stage ideals at exact degree, not "at most $n$" | **approve**, as above. |
| 5 | three overlay items duplicate published statements | **approve.** Verified on disk: `cor-noetherian-modules-are-hopfian`, `cor-finite-direct-sums-preserve-chain-conditions` and `ex-infinite-binary-product-ring-is-not-noetherian` are all published. Ids are immutable on `main`. |
| 6 | substitute a different non-Noetherian-subring witness | **approve.** `fs-noetherian-rings-have-noetherian-subrings` is published on a **B** page, so the leaf rule forbids any `deps` edge to it; naming the companion page in prose and citing only same-page items is the correct handling, and the two substituted witnesses fail for two further distinct reasons. |
| 7 | no ideal-level Noetherian statement; ideals-as-submodules only on a B page | **approve.** Confirmed `ex-ideals-as-submodules-of-the-regular-module` is homed on `modules-and-module-homomorphisms-examples`, a B page, so it cannot be a dependency. Doing the identification inline in `thm-noetherian-ring-ideal-characterisations` rather than minting a microlemma is the right call, and `lem-generated-submodule-as-finite-linear-combinations` is genuinely absent from the library. |
| 8 | `Hom` has no module structure; four new definitions | **approve.** Confirmed `def-hom-groups-and-induced-hom-maps` gives only the abelian group. Without `lem-hom-module-over-a-commutative-ring`, "$\operatorname{Hom}_R(M,N)$ is finitely generated" is not a statement the library can make. |
| 9 | four overlay rows declined as restatements | **approve.** Each named row is either a restatement of one of the three conditions in `thm-noetherian-ring-ideal-characterisations`, a contrapositive, an inline proof step, or belongs to the free-module route rather than the degree-reduction route the design's own strategy paragraph specifies. A restatement is not a second proof. |
| 10 | Hochster Thm 5.5 optional enrichment | **decline** — B4-2. |
| 11 | the Hochster URL is dead and was recovered from the archive | **approve, and it is the right order of operations.** Recover-before-replace held; `url-sweep --recover --fail-on-dead` opens the snapshot. Every other commutative-algebra batch citing H20 should reuse the snapshot rather than re-source, and I am carrying that to the run report. |
| 12 | locator drift in the design's primary-backing line | **approve.** Altman–Kleiman §16 ends at book p. 100 (pp. 101–107 are §17, Associated Primes) and Milne §3 ends at p. 13; the coverage file records the ranges actually read. Apply to the design at step 4. |

## Verdict

**insufficient**, on B4-1 alone. Everything else is approved as scaffolded.

---

# T-1 — a gate blind spot, for the owner and the engine

Batch 4's Beta found, and I confirmed by reading the source, that
`tools/validate-plan.mjs` performs **no reading-order check on a dependency that
already exists in `items/`**. The main dependency loop opens with

```js
if (existing.has(d)) continue;   // satisfied by published content
```

so every subsequent test in that loop — including the order comparison
`pageOrder.get(dp.id) > pageOrder.get(p.id)` — is unreachable for a published
dependency. The B-page leaf rule was patched around this in a separate loop below
(with a comment recording that it "passed silently" until level 9), and the
`orphan` warning runs there too, but **no order check was ever added**. So a new
page may cite a published item homed on a page with a *later* plan order and the
gate will pass it. That is exactly the forward reference the reading order exists
to prevent, and it is what batch 4 nearly had to do for formal power series at
order 193.

I did not change the gate: it is a tool change, and step 3 is not where one lands.
What I did instead was run the check by hand over my three batches — each external
dependency's home page order against the citing page's order — and **all six pages
are clean, 0 forward-order dependencies over 419 dependency uses.** Group Alphas a,
b and d should be asked whether their batches are, because the gate will not say.

---

# What I did not verify

- I read every source's harvested headings and checked them for internal
  consistency, exact result numbering and agreement with what I know of Milne FT,
  Conrad's four blurbs, Clark's *Field Theory*, Altman–Kleiman, Hochster's 614
  notes, Totaro/Norwood, Conrad's *Proofs by Descent*, MIT 18.781 Lecture 22,
  Dummit part 9 and Crisman. They are consistent, specific and correctly numbered,
  and `url-sweep` confirms all fourteen documents open. **I did not re-fetch and
  re-enumerate each document's table of contents heading by heading** — that is the
  step-6b.0 faithfulness read, against text that will then exist.
- Proof contracts. All three batches carry a full `.proof-contracts.json` already,
  which is unusual at step 3; I read the entry behind B1-1 in full and sampled
  others, but the contract gate belongs after step 5 and I did not run
  `proof-contract --strict` against a level with no items on disk.
- I did not assess batches 2, 5, 6, 7, 8, 9 or 10. They belong to Alphas a, b and d.
