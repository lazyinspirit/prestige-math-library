# Batch 2 — finite averaging and character prerequisites

Date: 2026-09-08.

Status: **batch-local mathematics and source reading are closed; the Step-3
shared-plan page-closure finding is resolved and this batch has no remaining
local blocker.**

## Inventory and mathematical disposition

The inventory remains nine A lemmas and four B illustrations. No result was
dropped, weakened, or added. The proof order and all direct dependencies are
adequate. The four B items depend only on their corresponding A lemmas and
remain leaves.

The delicate interfaces were checked explicitly:

- finite-dimensional basis extension gives a projection without an infinite
  choice principle;
- the trace of an idempotent is the scalar image of its rank, not an integer
  recovered from trace in positive characteristic;
- complex-valued finite sums use the general commutative-monoid sum interface,
  while positivity is applied only to real squared moduli;
- the equality case
  `n^2-|sum z_i|^2=sum_(i<j)|z_i-z_j|^2` includes `n=1`;
- for the conjugate-average lemma, a conjugate `b` lies in the normal
  cyclotomic splitting field, the isomorphism `Q(a)->Q(b)` extends between
  the two copies of that splitting field, and the resulting automorphism
  preserves exact root orders. No algebraic-integrality hypothesis is used.

## Source reading

The complete relevant arguments were read in Etingof et al.,
*Introduction to Representation Theory*, Theorem 4.1.1 pp.61–62,
pp.63–68, and Lemma 5.4.5 pp.100–101; Axler, *Linear Algebra Done
Right*, 2.32–2.33, 6.2–6.3, and 8.49–8.51; Milne,
*Fields and Galois Theory*, Proposition 2.12 and Corollary 2.13
pp.29–30 together with the cited characteristic and normality passages; and
Judson, *Abstract Algebra*, complete §14.2 through the used examples.

All four retained sources now carry genuine `fetch_verified` records. Those
byte receipts are separate from the proof reading.

## Objection disposition

- The former DNS/source-fetch blocker is **resolved** (4/4 sources verified).
- The former demand to certify all 1,827 inherited items is retained only as a
  limit on what this batch proves. It is not a mathematical objection absent a
  specific inadequate load-bearing interface; every direct interface used by
  the 13 owned items was checked.
- The four inherited B-as-supplier page requirements were originally reserved
  for Phase 3. The current shared-plan A-for-B cutover resolves them; the exact
  current-state evidence appears in the Step-3 fix pass below.

No published item, library page, central plan, ledger, workflow, or engine state
was changed by the original scaffold pass.

## Step-3 fix pass

### `group-d:batch-2:missing[0]` — resolved

The stable Alpha-d verdict identified a fatal page-closure defect, not a flaw in
one of the thirteen proposed item proofs: the A page reached four B companions,
which are leaves and cannot be proof-bearing suppliers. The current shared plan
now contains the exact cutover specified in `research/plan-algebra-track.md`
§III.3:

- `algebraic-closure-embeddings-and-separability` requires
  `algebraic-extensions-degree-and-finite-fields`, rather than its B companion;
- `the-galois-correspondence` requires
  `algebraic-closure-embeddings-and-separability`, rather than its B companion;
- `finite-fields-and-cyclotomic-extensions` requires
  `the-galois-correspondence`, rather than its B companion; and
- `solvability-by-radicals-and-kummer-theory` requires
  `finite-fields-and-cyclotomic-extensions`, rather than its B companion.

Each replacement is the earlier A page that contains the cited proof-bearing
interface. A fresh depth-first traversal of
`finite-averaging-and-character-theory-prerequisites` through current
`requires` found 69 pages and no B page. The former paths through
`finite-fields-and-cyclotomic-extensions-examples`,
`the-galois-correspondence-examples`,
`algebraic-closure-embeddings-and-separability-examples`, and
`algebraic-extensions-degree-and-finite-fields-examples` are therefore absent.

Changed record: this notes file and
`research/phase-2-wave-1-batch-2.coverage.json` status. The batch manifest is
unchanged: its nine A lemmas and four B leaves already had complete explicit
`deps` arrays, and no new definition, lemma, theorem, prerequisite A/B pair,
or item dependency is mathematically warranted. The batch's cross-frontier
input remains the required empty array: there is no same-run external consumer
or supplier edge.

Source evidence is unchanged and current: `source-fetch-check --stamp` reports
4/4 active sources fetch-verified and resolved, with no documented drop and no
new stamp needed. The remaining blocker is none in this batch; the former
shared-plan defect is resolved outside this dispatch's write authority.

### Checks run after the repair

- A current page-`requires` depth-first traversal from the batch A page: 69
  reachable pages, no B supplier, and all four prescribed consumer `requires`
  arrays contain the A replacement.
- `node tools/source-fetch-check.mjs --stamp --coverage
  research/phase-2-wave-1-batch-2.coverage.json`: 4/4 fetch-verified, 0 newly
  stamped; 4/4 resolved and 0 documented drops.
- `node tools/coverage-checklist.mjs --require-destination
  research/phase-2-wave-1-batch-2.coverage.json`: 1 page, 41 harvested
  results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-{1..15}.pages.json`:
  434 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only
  research/phase-2-wave-1-batch-2.pages.json`: 13 scoped items, 0 errors,
  0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; declared
  page order is acyclic and consistent, with no unresolved ID, forward
  reference, item-level cycle, or item-level B-page dependency.
- `node tools/extcheck.mjs`: exit 0; recorded-not-proved structure is valid.
  Its 63 published-item notices are repository-wide existing warnings and are
  not in this batch's item closure.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`:
  refreshed and deduplicated; batch 2's owned empty input remains present.
- A trailing-whitespace scan of the two changed batch records: passed.


## Final adjudication — scaffold-final-d-39b8e7c7f70f07ef

This section supersedes earlier current-status assertions. See `research/phase-2-wave-1-alpha-d-recheck.md` for the complete current proof audit, source readings, scope dispositions and checks. The unchanged 9-A/4-B pair is accepted with confidence 1. Published Maschke and character-theory consumers remain Phase-3 repair targets under the canonical consumer ledger, not suppliers of these lemmas. No same-frontier dependency is used.

## Step-5 authoring

The current plan and accepted nine-A/four-B manifest control. Algebra design
§III.4 controls the mathematics; Combinatorics §III.6 only clarifies the separate
additive-character interface. The prose dependency table is abbreviated; the
current manifest/plan explicitly adds finite monoid sums, complex laws,
induction, basis/conjugacy definitions and the field-extension interfaces.
Those explicit dependencies are preserved. The old Step-3 review's B-supplier
finding is superseded by the current sufficient verdict and the documented
A-for-B plan repair. No plan or published content is edited here.

Source reading for this authoring pass uses browser-retrieved full passages;
local curl cannot resolve the hosts and pdftotext is unavailable. This does not
block browser access. No substitute run artifact is used. Proof contracts were
absent and are being created from the completed arguments. Per-item checkpoints
follow; final command receipts will be appended below.

### Authored `lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field`

Let $k$ be a field and $n>0$ an integer. Then $n\cdot1_k$ is invertible if and only if $\operatorname{char}(k)\nmid n$. Divisibility is in $\mathbb Z$; in particular, $0$ divides no positive integer.

Sources: [Milne, Fields and Galois Theory](https://www.jmilne.org/math/CourseNotes/FT.pdf), pp. 8–9, characteristic cases 1–2. The normalization motivating this interface occurs in [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Theorem 4.1.1, pp. 61–62.

Dependencies: `def-field`, `lem-characteristic-and-additive-order`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Authored `lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice`

For a subspace $U$ of a finite-dimensional $k$-vector space $V$, there is a linear $P:V\to V$ with $P^2=P$, $\operatorname{im}P=U$, and $P|_U=\operatorname{id}_U$. No choice axiom is required. This includes $U=0$ and $U=V$.

Sources: [Axler, Linear Algebra Done Right, 4e](https://linear.axler.net/LADR4e.pdf), 2.32–2.33, pp. 41–42. The local finite-basis supplier works over arbitrary fields, extending Axler’s real/complex convention. [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Theorem 4.1.1 proof, p. 62, uses the resulting projection.

Dependencies: `def-linear-map`, `thm-dimension-of-a-linear-subspace`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Authored `lem-trace-of-an-idempotent-is-the-dimension-of-its-image`

If $P:V\to V$ is an idempotent endomorphism of a finite-dimensional space over a field $k$, then $\operatorname{tr}(P)=(\dim_k\operatorname{im}P)\cdot1_k$. In positive characteristic this equality does not in general determine the integer rank from the trace.

Sources: [Axler](https://linear.axler.net/LADR4e.pdf), 8.47–8.51, pp. 326–327, gives the trace convention and basis independence. [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Theorem 4.5.1 proof, p. 68, uses projector trace over the complex numbers; the local proof retains arbitrary characteristic.

Dependencies: `def-trace-of-an-endomorphism`, `cor-idempotent-endomorphisms-are-diagonalisable-projections`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Authored `lem-indicator-basis-for-invariant-functions-on-a-finite-orbit-partition`

Let a group $G$ act on a set $X$ with finitely many distinct orbits $\mathcal O$, and let $k$ be any field. The invariant functions $f:X\to k$, meaning $f(g\cdot x)=f(x)$ for all $g,x$, form a vector space under pointwise operations. Its basis is $\{\mathbf1_O:O\in\mathcal O\}$ and its dimension is $|\mathcal O|$. Here $\mathbf1_O$ is $1_k$ on $O$ and $0_k$ elsewhere. For conjugation on a finite group, these are the class functions and conjugacy-class indicators. If $X=\varnothing$, the basis is empty.

Sources: [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), §4.2 opening, p. 63, supplies the class-function setting. [Judson, §14.2 opening](https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html) identifies the conjugation orbits. The orbit-function basis argument is the local generalization and uses neither character orthogonality nor completeness.

Dependencies: `def-group-action`, `thm-orbits-partition-the-set`, `def-vector-space`, `def-finite-sum-in-a-commutative-monoid`, `def-linear-basis`, `def-conjugacy-class-and-centralizer`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Authored `lem-standard-hermitian-form-on-functions-on-a-nonempty-finite-set-is-an-inner-product`

Let $X$ be a nonempty finite set. On $\mathbb C^X$, with pointwise vector-space operations, define $\langle f,h\rangle=|X|^{-1}\sum_{x\in X}f(x)\overline{h(x)}$. The denominator is the positive real image of $|X|$. This is an inner product, linear in the first variable.

Sources: [Axler](https://linear.axler.net/LADR4e.pdf), 6.2–6.3(a),(b), pp. 183–184, fixes the linear-first convention and positive weights. [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), §4.5 opening, p. 67, is the class-function specialization. The complex finite-sum laws and definiteness are explicitly derived above.

Dependencies: `def-inner-product-space`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-sum-over-a-finite-index-set`, `lem-finite-sum-laws`, `def-finite-sum-in-a-commutative-monoid`, `lem-complex-conjugation-and-modulus-laws`, `thm-induction-principle`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Authored `lem-equality-case-for-a-finite-sum-of-unit-complex-numbers`

For an integer $n>0$ and $z_1,\ldots,z_n\in\mathbb C$ with $|z_i|=1$, one has $|\sum_{i=1}^n z_i|\le n$. Equality holds if and only if all the $z_i$ are equal. This includes $n=1$.

Sources: [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Lemma 5.4.5 proof, p. 101, uses strictness for unequal unit roots. The pairwise squared-distance calculation supplies that equality argument locally for all unit complex numbers, without complex arguments or trigonometry.

Dependencies: `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-sum-over-a-finite-index-set`, `lem-finite-sum-laws`, `def-finite-sum-in-a-commutative-monoid`, `lem-finite-sum-reindexing-and-fubini`, `lem-complex-conjugation-and-modulus-laws`, `thm-induction-principle`, `lem-of-square-monotone`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Authored `lem-conjugates-of-an-average-of-roots-of-unity-are-averages-of-roots-of-unity`

Let $n>0$, let $z_1,\ldots,z_n\in\mathbb C$ be roots of unity, and put $a=n^{-1}\sum_i z_i$. Then $a$ is algebraic over $\mathbb Q$. There is a finite cyclotomic splitting field $E\subset\mathbb C$ containing all the $z_i$ such that for every complex $\mathbb Q$-conjugate $b$ of $a$, some $\mathbb Q$-automorphism $\sigma:E\to E$ satisfies $b=\sigma(a)=n^{-1}\sum_i\sigma(z_i)$. Each $\sigma(z_i)$ has the same multiplicative order as $z_i$. No integrality hypothesis on $a$ is required.

Sources: [Milne](https://www.jmilne.org/math/CourseNotes/FT.pdf), Proposition 2.12 and Corollary 2.13, pp. 29–30, and Definition 3.7, p. 37, support extension and normality. [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Lemma 5.4.5 proof, p. 101, uses simultaneous conjugate averages. Its later algebraic-integer conclusion is not claimed here.

Dependencies: `def-roots-of-unity-in-a-field`, `thm-isomorphisms-extend-to-splitting-fields`, `def-conjugate-elements-over-a-field`, `def-cyclotomic-extension`, `cor-every-complex-polynomial-splits-into-linear-factors`, `thm-finitely-generated-algebraic-extensions-are-finite`, `thm-finite-field-extensions-are-algebraic`, `prop-algebraic-splitting-extensions-are-normal`, `lem-an-isomorphism-extends-across-a-simple-root-adjunction`, `def-finite-sum-in-a-commutative-monoid`, `thm-induction-principle`, `def-normal-algebraic-extension`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Authored `lem-kernel-of-a-direct-sum-of-representations-is-the-intersection`

Let $(V_i,\rho_i)_{i\in I}$ be a finite family of finite-dimensional representations of a group $G$ over a field $k$. On $V=\bigoplus_{i\in I}V_i$, the formula $\rho(g)((v_i)_i)=(\rho_i(g)v_i)_i$ defines a finite-dimensional representation, and $\ker\rho=\bigcap_{i\in I}\ker\rho_i$. For $I=\varnothing$, $V=0$ and the empty intersection is understood inside $G$, so both sides are $G$.

Sources: [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Chapter 4 opening, p. 61, supplies the representation convention. The coordinate action, its finite-dimensionality, and both kernel containments are derived locally from the direct-sum definition.

Dependencies: `def-finite-dimensional-representation-of-a-group-over-a-field`, `def-kernel-and-image-of-group-homomorphism`, `def-direct-sum-of-a-family-of-modules`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Authored `lem-a-group-is-abelian-iff-every-conjugacy-class-is-a-singleton`

A group $G$ is abelian if and only if every conjugacy class in $G$ is a singleton. No finiteness assumption is needed.

Sources: [Judson, §14.2 opening](https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html) identifies fixed points of conjugation with the center. [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), §4.3(1), p. 64, uses singleton classes for abelian groups. Both implications are proved above without finiteness.

Dependencies: `def-conjugacy-class-and-centralizer`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Authored `ex-coordinate-projection-onto-a-subspace-of-c-three`

In $\mathbb C^3$, set $U=\operatorname{span}\{(1,1,0),(0,1,1)\}$. The map $P(x,y,z)=(x,x+z,z)$ is the projection onto $U$ along $\operatorname{span}\{(0,1,0)\}$.

Sources: [Axler](https://linear.axler.net/LADR4e.pdf), 2.33, p. 42, supplies the complement construction being illustrated. These particular vectors and coordinate calculations are locally chosen.

Dependencies: `lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Authored `ex-conjugacy-class-indicator-basis-for-s-three`

For $S_3$ and any field $k$, the indicators of $C_1=\{e\}$, $C_2=\{(12),(13),(23)\}$, and $C_3=\{(123),(132)\}$ form a basis of the $k$-valued class functions. In particular that space has dimension three.

Sources: [Judson, Example 14.2.1](https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html) lists these classes; [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), §4.3(2), p. 65, discusses $S_3$. The indicator-basis calculation is a local illustration, not a character-table computation.

Dependencies: `lem-indicator-basis-for-invariant-functions-on-a-finite-orbit-partition`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Authored `ex-standard-hermitian-inner-product-on-functions-on-a-three-point-set`

For $X=\{1,2,3\}$, identify functions with their value triples and put $\langle f,h\rangle=\frac13\sum_{j=1}^3f(j)\overline{h(j)}$. Its Gram matrix in the point-indicator basis is $I_3/3$. For $f=(1,i,0)$ and $h=(i,1,1)$, one has $\langle f,h\rangle=0$ and $\langle f,f\rangle=2/3$. Multiplying each point indicator by $\sqrt3$ gives an orthonormal basis.

Sources: [Axler](https://linear.axler.net/LADR4e.pdf), 6.3(b), p. 184, gives positive weighted inner products. The equal weights $1/3$ and the displayed vectors are the local example.

Dependencies: `lem-standard-hermitian-form-on-functions-on-a-nonempty-finite-set-is-an-inner-product`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Authored `cex-unit-complex-sum-strict-with-distinct-summands`

The assertion “for all $n>0$ and all unit complex numbers $z_1,\ldots,z_n$, $|\sum_i z_i|=n$” is false.

Sources: [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Lemma 5.4.5 proof, p. 101, motivates the strictness interface. The pair $1,-1$ is the locally specified counterexample.

Dependencies: `lem-equality-case-for-a-finite-sum-of-unit-complex-numbers`.
Decision: retained full assigned claim; explicit proof and step/citation/boundary contract written. No mathematical gap identified. Checks: mathematical substitutions and hypotheses checked in the numbered argument; command checks pending final batch pass. Next: author next assigned item, then run required checks.

### Final Step-5 receipt

This receipt supersedes the per-item “checks pending / next item” checkpoints
above. All nine A lemmas and all four B illustrations listed in
`research/phase-2-wave-1-batch-2.pages.json` are complete as authored drafts;
the thirteen preceding checkpoints give their exact IDs. Both pages are written:

- `library/abstract-algebra/finite-averaging-and-character-theory-prerequisites.md`
- `library/abstract-algebra/finite-averaging-and-character-theory-prerequisites-examples.md`

The contract contains all 13 item IDs and maps all 56 numbered argument rows
exactly once, including actual claims, input facts/earlier rows, exact local
supplier excerpts, citation uses, and all eight boundary dispositions. Phase
renumbering was obtained from the normative precheck and applied simultaneously
to the proofs and their contract references. The per-item mathematical claims
and source locators above remain unchanged by that renumbering; the final item
and contract files carry the current step numbers.

#### Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts` with all 13 explicit owned
  `items/ID.md` paths: first returned 13 canonical phase-number repairs; adopted
  those repairs and reran the same full owned scope: **13 checked, 0 failing**.
  After tightening the coordinate-projection example's cited fact to the exact
  existence claim, reran that item's explicit path: **1 checked, 0 failing**.
- `node tools/validate-plan.mjs`: exit 2, because this CLI requires a filename.
  Corrected invocation `node tools/validate-plan.mjs research/plan-spec.json`:
  **exit 0**, declared page order acyclic and consistent, no item-level cycles,
  forward references, B-page dependencies or unresolved IDs. It reported 930
  pages with item lists, 683 without, and repository-wide redundant-prerequisite
  notices. These are not claims to have audited other batches' mathematics.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-2.pages.json`:
  **13 scoped items, 0 errors, 0 warnings**, including the final metadata and
  dependency state.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-2.proof-contracts.json --strict`:
  **13/13 checked, 0 errors, 0 warnings**, including the final phase references.
- `node tools/rendercheck.mjs` with exactly the 13 owned item paths and both
  owned page paths: **15 files pass**, with real KaTeX math parsing and renderer
  YAML parsing available. No delimiter, wikilink-in-math, or YAML failure.
- Current owned dependency/page traversal: **33 distinct published direct
  suppliers**, no generated statement used as a supplier, no external
  same-frontier edge, and **69 pages in the A page's prerequisite closure,
  all A pages**. All owned items remain draft, with no judge record.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`:
  **refreshed and deduplicated** after the dependency edit. The consumer-owned
  `research/phase-2-wave-1-batch-2.cross-batch-dependencies.json` remains `[]`.

These mechanical receipts check format and declared structure. The mathematical
completion claim rests on the written arguments, exact uses of the reviewed
supplier statements, and the calculations recorded in the item checkpoints.

#### Provenance and dependency decisions

Preserved `provenance.statement: ai-altered` for the nine source-based A
lemmas. Preserved `ai-generated` statements for the three examples and one
counterexample, with their matching generation roles. Every local proof is
`ai-altered`; all retained sources have URLs and exact passage locators in the
items. No generated item is used as a dependency target. No result is recorded
without proof, no forward-reference exception is needed, and no Choice axiom
is assumed. No judge stamps existed on these new files; no judge or audit stamp
was written. `verification.precheck: pass` records only the format check.

One direct dependency was made explicit during authoring:
`lem-conjugates-of-an-average-of-roots-of-unity-are-averages-of-roots-of-unity`
now also depends on the published `def-normal-algebraic-extension`. Its F12 and
step 3.1 use the definition to pass from normality to splitting of the minimal
polynomial. The accepted manifest already supplied the normality theorem;
this is its explicit definitional interface, not a new mathematical result or
a scope change. Updated the owned manifest and consumer dependency input, then
refreshed the ledger. The central plan was not edited. For Alpha/serial plan
synchronization, preserve this additional published definition edge from the
owned manifest; the plan's earlier dependency list omits it.

#### Remaining obligations

No unresolved mathematical or scope obligation was identified in any assigned
item or page. No promised result was weakened, dropped, or moved. There is no
proposed narrowing or prerequisite addition requiring a new item/page. The
existing published Maschke/character consumer repairs remain outside this
batch's Step-5 scope and were not performed. The single manifest-to-plan
synchronization detail above is recorded for the owning Alpha; it does not
require further proof work. Next action belongs to the build driver's later
review stage, not this authoring dispatch.
