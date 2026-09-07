# Batch 18 scaffold checkpoint — frontier-33

Only this batch manifest, coverage and notes are writable. No plan, workflow, published content or other batch was edited.

## Design/spec decision

Read CLAUDE.md and README.md fully, SCHEMA.md, the batch task and scaffold task, and both design locations. L1276 starts TC-31; L1301 is its B-page heading inside the SAME section, not a later amendment. TC-31 therefore controls both pages. It specifies the two prerequisites but no numeric order. The spec and manifest agree at A=641/B=642 and on both prerequisites. No design/spec conflict found.

## Sources and conventions

Verified the complete 329-page July 18 2023 Thaler PDF and 489-page January 2007 Arora–Barak web draft through the web tool; read the exact ranges enumerated in coverage, including proof endings. Shell curl cannot resolve the hosts in this sandbox. Failed guessed chapter8.pdf/chapter19.pdf URLs were recovered to the same authors' complete book PDF before harvesting. Original URL provenance is in coverage. This is not a replacement treatment. No cryptographic trust or commitment assumptions are imported.

The design's root-bound and Schwartz–Zippel placeholders would duplicate existing claims. Use thm-root-bound-for-polynomials-over-a-domain (published) and thm-schwartz-zippel-lemma (existing draft with a checked proof), via a recall remark. The latter's draft status is an upstream publication obligation, not permission to remint it. Existing cube-reduction uniqueness concerns a supplied polynomial; the new interpolation theorem supplies an explicit extension of an arbitrary table and proves its uniqueness. Neither existing reduction item is reminted or modified.

BLR uses the verified finite Fourier proof, with local definitions, orthogonality/inversion/Parseval and the cubic identity, so no unestablished harmonic-analysis theorem is needed. General Parseval is not silently assumed. Normalized distance means disagreement fraction; Arora–Barak's rho-close means agreement, and is translated explicitly.

Use formal polynomials, coefficient messages and individual degree bounds; permit zero polynomials with degree upper bounds. Fresh challenges follow messages, including the last round. Field implementation and trusted evaluation are explicit inputs. A field of cardinality exceeding the count can still have small characteristic; exact counting requires the supplied prime p>2^n. Sum is not Boolean existential quantification. Quantifier products can double degree; the full degree-reduced TQBF protocol belongs to the next page.

Source errata: Thaler p.35 says honest degree equals deg_i(g), but only an upper bound holds after cancellation. On p.37 the inductive proof says 'conditioned on this event' after equality, where the false-claim continuation needs inequality; use the fully read non-inductive proof instead. On p.31 the prose swaps the names chi_0 and chi_1; use the consistent equation (3.2). These do not change the harvested results.

## Scope and closure

24 A items and 4 B items; no split required. All manifest objects have explicit deps. The two formula/Schwartz–Zippel upstream draft items are established on disk but require publication by their owner before publication of this pair. Sources and exact claims are recorded per item below. Internal deps point backward; external deps are existing item IDs. The algorithmic table-evaluation lemmas explain why MLE existence alone is not a polynomial-time point oracle. No generated statement is used as a dependency.

## Item checkpoints

### def-arithmetization-of-a-boolean-formula

Claim/conventions: Over a field F, map constants and variables identically, NOT u to 1-u, AND to uv, OR to u+v-uv. Retain the expression tree; do not expand into monomials.

Dependencies: def-boolean-formula-cnf-and-sat, def-field, def-multivariate-polynomial-ring-by-iteration. These supply the objects and results explicitly used below.

Proof/construction: Recursive construction on formula syntax.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — §8.5.1, printed p.158 (PDF p.174).

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### lem-arithmetization-agrees-on-boolean-inputs

Claim/conventions: For every Boolean assignment, the arithmetized formula has exactly the original 0/1 value in F.

Dependencies: def-arithmetization-of-a-boolean-formula. These supply the objects and results explicitly used below.

Proof/construction: Check the three gate truth tables, then structural induction.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — §8.5.1, p.158.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### lem-formula-arithmetization-degree-and-evaluation-cost

Claim/conventions: For a formula with s syntax nodes and t_i occurrences of variable i, its polynomial has individual degree at most t_i and total degree at most sum t_i. Point evaluation takes O(s) field operations.

Dependencies: def-arithmetization-of-a-boolean-formula. These supply the objects and results explicitly used below.

Proof/construction: Induct on the expression tree. Addition takes maximum degree, multiplication adds degree bounds; evaluate nodes once. Constants and the zero polynomial satisfy the upper bounds.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — §8.5.1, p.158, 3CNF construction generalized by the same gate induction.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### def-multilinear-extension

Claim/conventions: An extension of f:{0,1}^n to F is a formal polynomial agreeing with f on the cube; multilinear means degree at most one in every variable. No uniqueness presumed in the definition.

Dependencies: def-field, def-multivariate-polynomial-ring-by-iteration. These supply the objects and results explicitly used below.

Proof/construction: Define the extension relation; theorem below discharges existence and uniqueness.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §3.5, Definition 3.4 and Fact 3.5, pp.28–29.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### thm-existence-and-uniqueness-of-multilinear-extension

Claim/conventions: Every table f:{0,1}^n→F has unique multilinear extension sum_b f(b) product_i [b_i X_i+(1-b_i)(1-X_i)]. Includes n=0 and characteristic two.

Dependencies: def-multilinear-extension. These supply the objects and results explicitly used below.

Proof/construction: The product basis is a delta function on cube vertices. For uniqueness induct using h=(1-X_n)h|0+X_n h|1; zero restrictions imply h=0. Existing polynomial-reduction uniqueness is not reminted.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §3.5, Fact 3.5 and Lemma 3.6, pp.29–30.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### lem-multilinear-extension-streaming-evaluation

Claim/conventions: Given all N=2^n indexed values, evaluate the extension at r in O(nN) field operations and O(n) field-element storage in one pass (n≥1).

Dependencies: thm-existence-and-uniqueness-of-multilinear-extension. These supply the objects and results explicitly used below.

Proof/construction: Accumulate each weighted basis term; store r and one accumulator. This is exponential in n, not an efficient oracle for a succinctly specified table.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Lemma 3.7, pp.30–31.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### lem-multilinear-extension-table-evaluation

Claim/conventions: Given the full table and r, evaluate in O(2^n) field operations and O(2^n+n) storage.

Dependencies: thm-existence-and-uniqueness-of-multilinear-extension. These supply the objects and results explicitly used below.

Proof/construction: Build basis weights by doubling a prefix table and multiplying by 1-r_i or r_i, then take the finite weighted sum. Geometric sum bounds the work.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Lemma 3.8, pp.31–32.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### lem-degree-under-arithmetized-quantifiers

Claim/conventions: Write p_b=p|X_i=b. Summation p_0+p_1 preserves remaining individual degree upper bounds; universal product p_0 p_1 and Boolean existential p_0+p_1-p_0p_1 at most double them. Product and Boolean existential have the correct 0/1 semantics; summation is a counting operator, not Boolean OR in arbitrary characteristic.

Dependencies: def-arithmetization-of-a-boolean-formula. These supply the objects and results explicitly used below.

Proof/construction: Degree arithmetic and the already specified AND/OR gates. Repeated products can yield exponential degrees; no claim of efficient quantified-formula verification here.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — §8.5.1 p.158 and §8.5.3 opening degree-growth paragraph p.160.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### rem-polynomial-identity-bounds-for-sum-check

Claim/conventions: Recall the univariate root bound and multivariate total-degree bound d/|S| for nonempty finite S. Apply them to differences of formal polynomials; total and individual degrees are distinct.

Dependencies: thm-root-bound-for-polynomials-over-a-domain, thm-schwartz-zippel-lemma. These supply the objects and results explicitly used below.

Proof/construction: Reuse established item IDs, not the design placeholders thm-polynomial-root-bound or thm-schwartz-zippel-multivariate-form. Explain why sum-check only needs the univariate theorem.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §3.4, Lemma 3.3, p.28.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### def-sum-check-instance-and-protocol

Claim/conventions: Input: fixed g in n≥1 variables over finite F, trusted individual bounds d_i, claimed H, and trusted point evaluation. Round i receives at most d_i+1 coefficients, checks h_i(0)+h_i(1)=current claim, then draws fresh uniform r_i and updates claim to h_i(r_i). Final comparison is with independently evaluated g(r). Reject malformed messages.

Dependencies: def-finite-field-and-its-order, def-completeness-and-soundness, def-multivariate-polynomial-ring-by-iteration. These supply the objects and results explicitly used below.

Proof/construction: State coefficient representation, message-before-challenge timing and all n rounds, including n=1. Honest h_i is the partial cube sum. H is an input, not an extra counted prover message.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §4.1 protocol box pp.33–36.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### lem-sum-check-perfect-completeness

Claim/conventions: For true H, the honest partial-sum polynomials satisfy every degree, consistency and terminal check for every challenge sequence.

Dependencies: def-sum-check-instance-and-protocol. These supply the objects and results explicitly used below.

Proof/construction: Finite-sum invariant; substitution and summation cannot increase individual degree.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Proposition 4.1, p.36.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### lem-first-false-round-is-caught-by-root-bound

Claim/conventions: Conditioned on any past transcript with a false current claim, either checks reject immediately or the next scalar claim is true with probability at most min(1,d_i/|F|).

Dependencies: def-sum-check-instance-and-protocol, thm-root-bound-for-polynomials-over-a-domain. These supply the objects and results explicitly used below.

Proof/construction: Consistency forces h_i to differ from the true partial-sum polynomial. Both degrees ≤d_i and the new challenge is independent of the past; apply root bound to their difference. Becoming true is the exceptional event, not necessarily immediate detection of every false polynomial.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Proposition 4.1 non-inductive proof, pp.36–37.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### thm-sum-check-soundness

Claim/conventions: For false H, every adaptive prover is accepted with probability at most min(1,sum_i d_i/|F|), hence at most nd/|F| for d_i≤d.

Dependencies: lem-first-false-round-is-caught-by-root-bound. These supply the objects and results explicitly used below.

Proof/construction: If accepted, an initially false claim must first become true before the trusted terminal equality. Sum the conditional bad-event bounds over n rounds. Fix prover coins or condition on its messages; no independence of round failures is asserted.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Proposition 4.1 non-inductive proof, pp.36–37.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### lem-sum-check-verifier-is-polynomial-time-given-point-evaluation

Claim/conventions: Let D=sum_i(d_i+1). Verifier uses O(D) field operations plus one point evaluation, D prover field elements, at most n verifier field elements, n independent field samples, and n rounds. In an efficient supplied field representation with b-bit elements, bit work is O(D) times field-operation cost plus evaluation/sampling cost.

Dependencies: def-sum-check-instance-and-protocol. These supply the objects and results explicitly used below.

Proof/construction: Horner evaluation at 0,1,r_i and summing message lengths. Polynomial time is conditional on polynomial D, b, evaluator and sampler; last challenge need not be sent. Uniform sampling has expected O(b) random bits by rejection, or exactly nb random bits total if |F|=2^b.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §4.1 Discussion of costs, Table 4.1 and Remark 4.2, pp.37–39.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### cor-sum-check-field-size-error-budget

Claim/conventions: For ε>0, a supplied field with |F|≥(sum_i d_i)/ε yields soundness at most ε.

Dependencies: thm-sum-check-soundness. These supply the objects and results explicitly used below.

Proof/construction: Substitute in the soundness bound; field construction is not silently included.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Proposition 4.1 and degree/field-size discussion pp.35–38.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### prop-arithmetized-formula-counting-sum

Claim/conventions: The cube sum of the formula polynomial is its satisfying-assignment count in F. Sum-check verifies this with error ≤sum_i t_i/|F| and O(s+n) field operations. Over a supplied prime field F_p with p>2^n and 0≤K≤2^n, equality of K and the sum is equivalent to exact integer counting.

Dependencies: lem-arithmetization-agrees-on-boolean-inputs, lem-formula-arithmetization-degree-and-evaluation-cost, thm-sum-check-soundness, lem-sum-check-verifier-is-polynomial-time-given-point-evaluation. These supply the objects and results explicitly used below.

Proof/construction: Sum Boolean values, use the occurrence bounds and formula-tree evaluator; injectivity for counts below p gives exactness. Large extension-field cardinality alone does not prevent characteristic wraparound.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — §8.5.1–8.5.2, Theorem 8.18 proof pp.158–160 (field supplied variant).

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### def-linearity-test

Claim/conventions: For fixed f:F_2^n→F_2, choose independent uniform x,y and accept iff f(x)+f(y)=f(x+y). Distance is fraction of disagreements; linear functions are a·x, with no affine constant.

Dependencies: def-field. These supply the objects and results explicitly used below.

Proof/construction: Define dot products mod 2 and the three-query test; random bits cost 2n. Include the Walsh-Hadamard truth-table encoding as terminology.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — §18.4.1, Definition 18.22, pp.363–364.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### def-boolean-cube-fourier-coefficients

Claim/conventions: For real h on F_2^n define χ_a(x)=(-1)^(a·x) and hhat(a)=2^-n sum_x h(x)χ_a(x).

Dependencies: def-linearity-test. These supply the objects and results explicitly used below.

Proof/construction: Finite sums only; expectation is the uniform arithmetic mean. Distinguish real signs from arithmetic mod 2.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — §19.3.1, pp.388–389.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### lem-boolean-cube-fourier-inversion-and-parseval

Claim/conventions: Uniform averages satisfy E χ_aχ_b=1 if a=b and 0 otherwise; h=sum_a hhat(a)χ_a; E hk=sum_a hhat(a) khat(a). In particular E h²=sum_a hhat(a)². Distinct linear Boolean functions disagree on exactly half the cube.

Dependencies: def-boolean-cube-fourier-coefficients. These supply the objects and results explicitly used below.

Proof/construction: Pair x with x+e_j for a nonzero character. Sum characters over a to get the point delta identity, hence inversion; expand finite sums for Parseval and half-distance. No analytic Fourier theorem assumed.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — §19.3.1 and Lemma 19.7 pp.388–389; §18.4.1 p.363.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### lem-blr-acceptance-fourier-identity

Claim/conventions: For h=(-1)^f and BLR acceptance probability α, 2α-1=E h(x)h(y)h(x+y)=sum_a hhat(a)^3.

Dependencies: lem-boolean-cube-fourier-inversion-and-parseval. These supply the objects and results explicitly used below.

Proof/construction: Expand three finite Fourier sums; character multiplication and independence kill all terms except equal indices.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — Theorem 19.9 proof pp.390–391.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### thm-blr-linearity-test-soundness

Claim/conventions: If BLR accepts with probability at least ρ>1/2, some linear a·x agrees with f on at least a ρ fraction. Equivalently rejection ε<1/2 guarantees distance at most ε. Linear functions have perfect completeness.

Dependencies: lem-blr-acceptance-fourier-identity. These supply the objects and results explicitly used below.

Proof/construction: Parseval gives sum hhat²=1, so cubic sum≤max hhat; translate correlation at least 2ρ-1 into agreement at least ρ. Keep the signed maximum, not absolute value, to obtain linear rather than affine agreement.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — Theorems 18.23 and 19.9, pp.364 and 390–391.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### def-self-correction-of-a-noisy-linear-function

Claim/conventions: For requested x and fixed oracle f, choose uniform y and output f(y)+f(x+y) over F_2.

Dependencies: def-linearity-test. These supply the objects and results explicitly used below.

Proof/construction: This is pointwise correction with random queries, not an assertion that f(x) is already correct.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — §18.4.1 Local decoding of Walsh-Hadamard code pp.364–365.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### thm-linear-self-correction

Claim/conventions: If f has distance δ<1/4 from a linear ℓ, ℓ is unique and at every fixed x the corrector outputs ℓ(x) with probability at least 1-2δ>1/2. Uses two queries and n random bits.

Dependencies: def-self-correction-of-a-noisy-linear-function, lem-boolean-cube-fourier-inversion-and-parseval. These supply the objects and results explicitly used below.

Proof/construction: Half-distance plus triangle inequality proves uniqueness. Each queried location is marginally uniform, so union bound ≤2δ; when both are uncorrupted, linearity proves the answer. Do not assume the two locations independent.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — §18.4.1 Local decoding pp.364–365.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### fs-sum-check-computes-all-exponential-summands

Claim/conventions: False assertion: a sum-check verifier must evaluate g separately at all 2^n Boolean points.

Dependencies: def-sum-check-instance-and-protocol, lem-sum-check-verifier-is-polynomial-time-given-point-evaluation. These supply the objects and results explicitly used below.

Proof/construction: Refute with the protocol resource theorem: one trusted point evaluation suffices; the prover may perform exponential work.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §4.1 pp.33–38.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### ex-existence-and-uniqueness-of-multilinear-extension

Claim/conventions: For table f(0,0)=1,f(0,1)=2,f(1,0)=1,f(1,1)=4 over F_5, extension is 1+Y+2XY; evaluate at (2,3) to obtain 1 mod 5.

Dependencies: thm-existence-and-uniqueness-of-multilinear-extension. These supply the objects and results explicitly used below.

Proof/construction: Expand the four Lagrange terms and check vertices and the requested value.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Figure 3.2 p.31.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### ex-sum-check-three-variable-transcript

Claim/conventions: For g=2X³+XZ+YZ over F_101, H=12 and challenges 2,3,6 yield honest messages 8X³+2X+1, 34+Y, 16+5Z. Final value is 46.

Dependencies: def-sum-check-instance-and-protocol. These supply the objects and results explicitly used below.

Proof/construction: Verify consistency 12,69,37 and final equality 46, all modulo 101; degree vector (3,1,1) gives error ≤5/101.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §4.1 Example Execution pp.36–37.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### ex-linear-self-correction

Claim/conventions: On F_2^3 take ℓ(x)=x_1 and corrupt only f(0). At each nonzero requested x, exactly y=0,x fail; success is 6/8. At x=0 the corrector always returns 0.

Dependencies: thm-linear-self-correction. These supply the objects and results explicitly used below.

Proof/construction: Enumerate the two bad query positions; compare δ=1/8 and bound 1-2δ=3/4. This is a concrete specialization of the source construction.

Source: https://theory.cs.princeton.edu/complexity/book.pdf — §18.4.1 Local decoding pp.364–365.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

### cex-sum-check-computes-all-exponential-summands

Claim/conventions: Let g=product_i X_i over a supplied finite field. The cube has 2^n points and sum 1, while the sum-check verifier uses one n-multiplication evaluation and O(n) field work.

Dependencies: def-sum-check-instance-and-protocol, lem-sum-check-verifier-is-polynomial-time-given-point-evaluation. These supply the objects and results explicitly used below.

Proof/construction: Check the unique nonzero Boolean summand and use degree bounds d_i=1; error ≤n/|F|. The example is about the verifier, not prover runtime.

Source: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §4.1 protocol and resource analysis pp.33–38.

Scaffold obligation: record complete; mathematical body and proof checks belong to step 5.

## Validation and next action

- `node tools/coverage-checklist.mjs research/frontier-33-batch-18.coverage.json --require-destination`: PASS, 57 harvested rows, no errors. One low-yield warning counts 20 included rows against 57 total; 32 inline dispositions are substantial content carried by named items, not discarded results. The five declines concern general grids, optimized provers, uniform #SATD language packaging, random-function Fourier heuristics, and PCP application. Each has its specific reason and, for deferrals, a resolvable destination.
- `node tools/content-policy.mjs research/frontier-33-batch-18.pages.json --manifest-only`: PASS, 28 items, no errors/warnings. All explicit deps resolve; no duplicate IDs or forbidden B-page targets.
- Required whole-run `node tools/content-policy.mjs research/frontier-33-batch-*.pages.json --manifest-only --json`: FAIL at the observed 363-item snapshot, six missing dependencies outside batch 18: thm-rationals-dense, def-weak-star-topology, thm-bipolar-closure-for-linear-subspaces, thm-all-norms-on-a-finite-dimensional-space-are-equivalent, def-functor, def-flat-module. Do not repair other owners' manifests. Other batches are changing concurrently.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS on the current shared plan; this does NOT validate this unspliced scaffold. It reports 511 pages without item lists.
- Additional validation on a temporary copy of the spec with ONLY batch 18 manifests overlaid: FAIL, one `undeclared-prereq`. def-arithmetization-of-a-boolean-formula depends on existing def-boolean-formula-cnf-and-sat, homed on the-cook-levin-theorem (621), outside the declared requires closure. The mathematical dependency is valid and retained. Drift/plan owner must adjudicate the missing path; this batch must not edit requires or remint Boolean formula syntax to hide it. Other external dependencies passed this merged-plan check.
- `node tools/url-sweep.mjs --coverage research/frontier-33-batch-18.coverage.json --out /tmp/f33b18-url.json --recover --fail-on-dead`: FAIL because curl cannot resolve either reader-facing host. The web tool successfully opened and exposed the complete PDF text of both source URLs. Archive recovery is also unavailable to the shell, so its 'no snapshot' output is not evidence that the same texts are unavailable. Do not re-source these live verified documents merely because shell DNS is restricted. No automated fetch_verified stamp has been fabricated; repeat the native URL gate in a network-enabled driver environment.

Post-check refinements: BLR theorem includes independent repetition with rejection at least 1-(1-delta)^k, supported by Arora–Barak p.364. The B-page transcript explicitly depends on thm-sum-check-soundness for its 5/101 bound. The earlier guessed chapter19.pdf URL is retained as recovery prose, with the same host/path as original_url, so a superseded guess is not mistaken for a third reader-facing source. Exact original attempt: https://www.cs.princeton.edu/~arora/book/chapter19.pdf .

Unresolved obligations: upstream draft publication of Boolean syntax and Schwartz–Zippel; missing Cook–Levin prerequisite path; native URL liveness gate; whole-run failures outside scope. This batch is scaffolded, not certified ready. Next action is driver/Alpha drift adjudication and rerunning network-dependent gates; mathematical authoring and proof validation remain step 5 work. No published files or plan/workflow state were changed.

## Step-3 fix pass

### Finding ID: `In-scope scaffold repair` (Batch 18; the Alpha review supplies no separate numeric identifier)

Disposition: **applied and revalidated**. The current A-page record
`arithmetization-and-the-sum-check-protocol` in
`research/frontier-33-batch-18.pages.json` explicitly declares
`the-cook-levin-theorem` in `requires`, after
`interactive-proof-systems-and-public-coins` and
`algebraic-extensions-degree-and-finite-fields`. No second copy of the edge,
item, statement, page, or order was added in this pass.

Evidence: `def-arithmetization-of-a-boolean-formula` explicitly depends on
`def-boolean-formula-cnf-and-sat`; that local dependency defines the recursive
Boolean-formula/CNF syntax and is homed on the earlier Cook--Levin page (order
621). The repaired page edge is therefore backward and is the needed declared
closure, rather than a replacement definition. Arora--Barak,
https://theory.cs.princeton.edu/complexity/book.pdf, §8.5.1, printed p.158
(PDF p.174), supplies the formula-to-polynomial gate construction. The complete
independent source ranges remain fetch-verified and harvested without change:
Thaler, https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf,
§§3.4--3.5 pp.28--32 and §4.1 pp.33--39; and Arora--Barak,
§§8.5.1--8.5.2 pp.158--160, §8.5.3 opening degree-growth paragraph,
§18.4.1 pp.363--365, and §§19.3.1--19.3.2 pp.388--391. Their existing
coverage dispositions still name every included or inline item and retain
specific deferred/out-of-scope reasons.

Changed scaffold record: the existing `requires` array above is the applied
repair identified by Alpha. It was already present when this dispatch began,
so this pass changed only this checkpoint record; the source harvest and item
list already satisfy the finding and needed no duplicative edit. `node tools/manifest-deps.mjs
research/frontier-33-batch-18.pages.json` reports 28 items and 0 errors.

Validation at this pass: `node tools/coverage-checklist.mjs
research/frontier-33-batch-18.coverage.json --require-destination` reports 57
harvested results, 0 errors, and the expected low-yield warning (20 mapped
results); `node tools/source-fetch-check.mjs --coverage
research/frontier-33-batch-18.coverage.json` reports 2/2 fetch-verified
sources. Whole-run `node tools/content-policy.mjs --manifest-only
research/frontier-33-batch-*.pages.json --json` reports 923 scoped items, 0
errors, and 0 warnings. `node tools/validate-plan.mjs research/plan-spec.json`
passes: the declared order is acyclic and consistent, with no item-level cycles,
forward references, B-page dependencies, or unresolved IDs among populated
pages. The engine-owned Step-4 splice still owns incorporation of this repaired
page-level edge into the plan; no plan or workflow artifact was edited here.

## Step-5 authoring

Required inputs, group g verdicts/review, SCHEMA.md and tools/proof-contract.mjs read. All 28 owned item paths were absent at entry; no existing contract file existed. Current cited external dependency definitions/statements and relevant root-bound/Schwartz–Zippel proofs read in full. Reopened both exact author-hosted PDFs and read the complete relevant arguments: Thaler §§3.4–3.5 and §4.1 through p.39; Arora–Barak §§8.5.1–8.5.2, opening degree-growth paragraph of §8.5.3, §18.4.1, §§19.3.1–19.3.2 through the cubic bound. Source numbering uses one-based PDF pages (Arora–Barak printed page +16); the web P labels are zero-based, so existing locators are correct. No source-offset edit is needed. The sources' degree-equality and conditioning slips recorded above are avoided. The Fourier argument uses the normalized character basis, not the source's incorrectly called orthonormal unnormalized point indicators.

All outputs remain draft. No independent reviews, workflow state, plan structure or published files are changed. Proofs are freshly written adaptations of the cited treatments; component provenance is retained unless a local specialization calls for ai-altered. No generated statement is introduced as a prerequisite. Item checkpoints below record the actual claim, dependencies, source locators and open validation obligations immediately after each item write.

### Authored `def-arithmetization-of-a-boolean-formula`

Claim and conventions: Let $F$ be a field and let $\varphi$ be a Boolean formula on variables $x_1,\ldots,x_n$, with $n\geq0$. Use the syntax of [[def-boolean-formula-cnf-and-sat]], with binary AND and OR. Its **arithmetization** is the formal polynomial $P_\varphi\in F[X_1,\ldots,X_n]$ defined recursively by $$P_\bot=0,\quad P_\top=1,\quad P_{x_i}=X_i,\quad P_{\neg\psi}=1-P_\psi,$$ $$P_{\psi\land\theta}=P_\psi P_\theta,\qquad P_{\psi\lor\theta}=P_\psi+P_\theta-P_\psi P_\theta.$$ Here field and polynomial ring mean [[def-field]] and [[def-multivariate-polynomial-ring-by-iteration]]. Retain the original formula tree with these gate operations; a gate can use its two already computed child values more than once. Expanding into monomials is unnecessary. Boolean false and true are identified with the distinct field elements $0$ and $1$.

Dependencies: def-boolean-formula-cnf-and-sat, def-field, def-multivariate-polynomial-ring-by-iteration.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — §8.5.1, printed p.158 (PDF p.174).

Disposition: complete draft definition/remark; provenance literature-derived/not-applicable. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `lem-arithmetization-agrees-on-boolean-inputs`

Claim and conventions: For every field $F$, Boolean formula $\varphi$ on $n\geq0$ variables and assignment $a\in\{0,1\}^n$, $P_\varphi(a)$ equals the Boolean value of $\varphi(a)$, embedded as $0$ or $1$ in $F$.

Dependencies: def-arithmetization-of-a-boolean-formula.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — §8.5.1, p.158.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `lem-formula-arithmetization-degree-and-evaluation-cost`

Claim and conventions: Let $\varphi$ be a formula with $s\geq1$ syntax nodes on $n\geq0$ variables, and let $t_i$ count the leaves labelled $x_i$. Then $P_\varphi$ has individual degree at most $t_i$ in $X_i$ and total degree at most $\sum_i t_i$. The bounds include the zero polynomial (which satisfies every nonnegative degree upper bound). At any supplied point, $P_\varphi$ can be evaluated with $O(s)$ field operations.

Dependencies: def-arithmetization-of-a-boolean-formula.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — §8.5.1, p.158, 3CNF construction generalized by the same gate induction.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `def-multilinear-extension`

Claim and conventions: Let $F$ be a field, let $n\geq0$, and let $f:\{0,1\}^n\to F$ be a table. An **extension** of $f$ is a formal polynomial $p\in F[X_1,\ldots,X_n]$ satisfying $p(b)=f(b)$ for every Boolean vector $b$. It is **multilinear** if every monomial has exponent at most one in each variable; the zero polynomial is included. Fields and formal polynomial rings are as in [[def-field]] and [[def-multivariate-polynomial-ring-by-iteration]].  For $n=0$, the cube contains the empty tuple, and a polynomial in no variables is a field constant. This definition specifies an extension relation; existence and uniqueness are separate assertions.

Dependencies: def-field, def-multivariate-polynomial-ring-by-iteration.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §3.5, Definition 3.4 and Fact 3.5, pp.28–29.

Disposition: complete draft definition/remark; provenance literature-derived/not-applicable. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `thm-existence-and-uniqueness-of-multilinear-extension`

Claim and conventions: For every field $F$, $n\geq0$, and table $f:\{0,1\}^n\to F$, there is exactly one multilinear extension. It is $$\widetilde f(X)=\sum_{b\in\{0,1\}^n} f(b)\lambda_b(X),\qquad \lambda_b(X)=\prod_{i=1}^n\bigl(b_iX_i+(1-b_i)(1-X_i)\bigr).$$ An empty product is $1$. Equality and uniqueness are for formal polynomials, including in characteristic two.

Dependencies: def-multilinear-extension.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §3.5, Fact 3.5 and Lemma 3.6, pp.29–30.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `lem-multilinear-extension-streaming-evaluation`

Claim and conventions: Let $n\geq1$, $N=2^n$, and let a stream supply each indexed pair $(b,f(b))$, $b\in\{0,1\}^n$, exactly once, in any order. Given $r\in F^n$, the multilinear extension can be evaluated at $r$ in one pass with $O(nN)$ field operations and $O(n)$ field-element working storage, plus an $O(n)$-bit current index. The input is the full table, not a succinct description.

Dependencies: thm-existence-and-uniqueness-of-multilinear-extension.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Lemma 3.7, pp.30–31.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `lem-multilinear-extension-table-evaluation`

Claim and conventions: For $n\geq0$, a full table $f:\{0,1\}^n\to F$ and $r\in F^n$, one can compute $\widetilde f(r)$ in $O(2^n)$ field operations and $O(2^n+n)$ storage, measured in field elements with indexed array access.

Dependencies: thm-existence-and-uniqueness-of-multilinear-extension.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Lemma 3.8, pp.31–32.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `lem-degree-under-arithmetized-quantifiers`

Claim and conventions: Let $p\in F[X_1,\ldots,X_n]$, with $n\geq1$, and eliminate variable $X_i$. Write $p_b=p|_{X_i=b}$ for $b=0,1$. If $\deg_{X_j}p\leq d_j$ for $j\ne i$, with nonnegative upper bounds including zero polynomials, then $p_0+p_1$ has bound $d_j$, while $p_0p_1$ and $p_0+p_1-p_0p_1$ have bound $2d_j$.  If $p$ is Boolean-valued on the Boolean cube, the latter two operators represent universal and existential quantification there, respectively. The sum operator adds the two field values; it is not a Boolean OR operator over arbitrary fields. Repeated product elimination can produce exponentially growing degrees.

Dependencies: def-arithmetization-of-a-boolean-formula.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — §8.5.1 p.158 and §8.5.3 opening degree-growth paragraph p.160.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `rem-polynomial-identity-bounds-for-sum-check`

Claim and conventions: The existing [[thm-root-bound-for-polynomials-over-a-domain]] says that a nonzero univariate polynomial of degree $m$ over an integral domain has at most $m$ distinct roots. A field is an integral domain: if $ab=0$ and $a\ne0$, multiplication by $a^{-1}$ gives $b=0$.  The existing [[thm-schwartz-zippel-lemma]] says that a nonzero formal polynomial of total degree at most $d$ over a field vanishes at a uniform point of $S^n$ with probability at most $d/|S|$, for nonempty finite $S\subseteq F$.  Apply such bounds to a nonzero difference of formal polynomials. Individual degree bounds concern one variable at a time; total degree bounds concern sums of exponents within a monomial. Sum-check's round comparison is univariate and needs only the root bound. When a degree bound is at least the field size, the resulting probability bound may be vacuous. Distinct formal polynomials over a finite field need not define distinct functions on the whole field.

Dependencies: thm-root-bound-for-polynomials-over-a-domain, thm-schwartz-zippel-lemma.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §3.4, Lemma 3.3, p.28.

Disposition: complete draft definition/remark; provenance literature-derived/not-applicable. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `def-sum-check-instance-and-protocol`

Claim and conventions: A **sum-check instance** consists of a supplied finite field $F$, a fixed formal polynomial $g\in F[X_1,\ldots,X_n]$ with $n\geq1$, trusted nonnegative integer individual degree bounds $d_i$, a claimed value $H\in F$, and trusted access to point evaluation of that same $g$ on $F^n$. Zero polynomials satisfy every nonnegative bound. The claim is $$H=\sum_{b\in\{0,1\}^n}g(b).$$ The field order is as in [[def-finite-field-and-its-order]], the formal ring as in [[def-multivariate-polynomial-ring-by-iteration]], and correctness uses the honest/universal-strategy quantifiers of [[def-completeness-and-soundness]].  Set $C_0=H$. For each $i=1,\ldots,n$, in this order:  1. Receive a coefficient list $(a_0,\ldots,a_m)$ specifying $h_i(T)=\sum_{j=0}^m a_jT^j$, with $0\leq m\leq d_i$. Reject a missing, malformed, non-field, or overlength message. The single coefficient $0$ represents zero; trailing zero coefficients are allowed up to the length cap. 2. Check $h_i(0)+h_i(1)=C_{i-1}$; reject on failure. 3. Only after that message is fixed and checked, draw a fresh independent uniform $r_i\in F$ and put $C_i=h_i(r_i)$. Send $r_i$ to the prover if $i<n$; sending it when $i=n$ is optional.  Finally compute $g(r_1,\ldots,r_n)$ through the trusted evaluator and accept exactly when it equals $C_n$ and every earlier check passed. In particular $n=1$ still has a coefficient message, a fresh challenge, and a terminal comparison. The evaluator's answer is not an unchecked prover assertion.  For a fixed challenge prefix, the honest round polynomial is $$q_i(T)=\sum_{b\in\{0,1\}^{n-i}}g(r_1,\ldots,r_{i-1},T,b).$$ The cube of dimension zero has one empty tuple, so $q_n(T)=g(r_1,\ldots,r_{n-1},T)$. Write $$S_i=\sum_{b\in\{0,1\}^{n-i}}g(r_1,\ldots,r_i,b),\qquad S_0=\sum_{b\in\{0,1\}^n}g(b).$$ A scalar claim at stage $i$ is **true** when $C_i=S_i$. The honest prover sends $h_i=q_i$. The input $H$ is not counted as an additional prover message.

Dependencies: def-finite-field-and-its-order, def-completeness-and-soundness, def-multivariate-polynomial-ring-by-iteration.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §4.1 protocol box pp.33–36.

Disposition: complete draft definition/remark; provenance literature-derived/not-applicable. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `lem-sum-check-perfect-completeness`

Claim and conventions: In sum-check over a supplied finite field, with $n\geq1$, trusted individual bounds and trusted evaluation, if $H=\sum_b g(b)$, the honest partial-sum polynomials pass every check for every challenge sequence. Thus the protocol has perfect completeness.

Dependencies: def-sum-check-instance-and-protocol.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Proposition 4.1, p.36.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `lem-first-false-round-is-caught-by-root-bound`

Claim and conventions: At any round $i\in\{1,\ldots,n\}$ of sum-check, condition on a reached past transcript of positive probability for which $C_{i-1}\ne S_{i-1}$. If the next message fails its format or consistency check it is rejected. Otherwise, conditioned also on the prover's fixed message, the probability that the updated claim becomes true is at most $\min(1,d_i/|F|)$. The same upper bound holds after averaging over a randomized choice of message. Fresh verifier randomness is drawn after the message.

Dependencies: def-sum-check-instance-and-protocol, thm-root-bound-for-polynomials-over-a-domain.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Proposition 4.1 non-inductive proof, pp.36–37.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `thm-sum-check-soundness`

Claim and conventions: Fix a sum-check instance over a finite field $F$, with $n\geq1$, trusted individual bounds $d_1,\ldots,d_n$, trusted evaluation, and false initial claim $H\ne\sum_b g(b)$. For every adaptive prover strategy the acceptance probability is at most $$\min\left(1,\frac{\sum_{i=1}^n d_i}{|F|}\right).$$ In particular it is at most $nd/|F|$ if all $d_i\leq d$. A randomized prover is allowed; its coins are independent of future verifier challenges.

Dependencies: lem-first-false-round-is-caught-by-root-bound.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Proposition 4.1 non-inductive proof, pp.36–37.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `lem-sum-check-verifier-is-polynomial-time-given-point-evaluation`

Claim and conventions: In sum-check with $n\geq1$, put $D=\sum_{i=1}^n(d_i+1)$. An execution uses at most $D$ prover field elements, at most $n$ verifier field elements, $n$ independent uniform field samples on a full execution, and $n$ rounds. The verifier uses $O(D)$ field operations plus at most one trusted point evaluation; a full execution reaching the terminal check uses exactly one such evaluation. Early rejection may shorten these costs. Coefficient lists may be zero-padded to attain the $D$ bound.  With supplied $b$-bit field representations, efficient encoding checks and field operations of bit cost at most $A(b)$, the bit work is $O(D(A(b)+b))$ plus trusted evaluation and sampling costs. Polynomial time is conditional on polynomial bounds for these quantities and $D$. With an efficient bijective indexing of field elements by $\{0,\ldots,q-1\}$, $q=|F|$, rejection sampling uses expected $O(\lceil\log_2 q\rceil)$ random bits per sample. If $q=2^b$ with such a $b$-bit encoding, a full execution uses exactly $nb$ random bits.

Dependencies: def-sum-check-instance-and-protocol.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §4.1 Discussion of costs, Table 4.1 and Remark 4.2, pp.37–39.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `cor-sum-check-field-size-error-budget`

Claim and conventions: Let $\varepsilon>0$. For a supplied sum-check instance with a field satisfying $|F|\geq (\sum_i d_i)/\varepsilon$, every prover's probability of acceptance on a false initial claim is at most $\varepsilon$. This assumes the stated field and trusted evaluation are already supplied; it does not construct a field.

Dependencies: thm-sum-check-soundness.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Proposition 4.1 and degree/field-size discussion pp.35–38.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `prop-arithmetized-formula-counting-sum`

Claim and conventions: Let $\varphi$ have $s\geq1$ syntax nodes and $n\geq1$ variables, with $t_i$ occurrences of $x_i$. Over any supplied finite field $F$, its polynomial satisfies $$\sum_{b\in\{0,1\}^n}P_\varphi(b)=M\,1_F,$$ where $M\in\{0,\ldots,2^n\}$ is the number of satisfying assignments. With the formula-tree evaluator and bounds $d_i=t_i$, sum-check has perfect completeness and soundness at most $\min(1,\sum_i t_i/|F|)$, using $O(s+n)$ verifier field operations, including evaluation.  If $F=\mathbb F_p$ is a supplied prime field with $p>2^n$, then for every integer $0\leq K\leq2^n$, $$K\,1_F=\sum_bP_\varphi(b)\quad\Longleftrightarrow\quad K=M.$$ The field and its implementation are inputs. Large extension-field cardinality alone does not guarantee this integer equivalence.

Dependencies: lem-arithmetization-agrees-on-boolean-inputs, lem-formula-arithmetization-degree-and-evaluation-cost, thm-sum-check-soundness, lem-sum-check-verifier-is-polynomial-time-given-point-evaluation.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — §8.5.1–8.5.2, Theorem 8.18 proof pp.158–160 (field supplied variant).

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `def-linearity-test`

Claim and conventions: Let $n\geq0$ and let $f:\mathbb F_2^n\to\mathbb F_2$ be a fixed oracle table. Here $\mathbb F_2=\{0,1\}$ has addition and multiplication modulo two, with the field convention of [[def-field]]. For $a,x\in\mathbb F_2^n$, put $a\cdot x=\sum_i a_ix_i$ modulo two. A **linear function** here is $\ell_a(x)=a\cdot x$; no affine constant is added.  The **BLR test** chooses independent uniform $x,y\in\mathbb F_2^n$, queries $f(x),f(y),f(x+y)$, and accepts exactly when $$f(x)+f(y)=f(x+y).$$ It uses three oracle calls (locations can coincide) and $2n$ random bits. Its acceptance probability is over the two uniform choices, with $f$ fixed.  The **normalized distance** is $\operatorname{dist}(f,g)=2^{-n}|\{x:f(x)\ne g(x)\}|$. Agreement is $1-\operatorname{dist}(f,g)$; distance to linear functions is $\min_a\operatorname{dist}(f,\ell_a)$. The ordered truth table of $\ell_a$ is the **Walsh–Hadamard encoding** of $a$, a string of length $2^n$. When $n=0$, the cube has one point and the sole linear function is zero.

Dependencies: def-field.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — §18.4.1, Definition 18.22, pp.363–364.

Disposition: complete draft definition/remark; provenance literature-derived/not-applicable. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `def-boolean-cube-fourier-coefficients`

Claim and conventions: Use the cube and dot product of [[def-linearity-test]]. For $a,x\in\mathbb F_2^n$, $n\geq0$, the real-valued **character** is $\chi_a(x)=(-1)^{a\cdot x}$. For $h:\mathbb F_2^n\to\mathbb R$, define $$\widehat h(a)=\mathbb E_x h(x)\chi_a(x)=2^{-n}\sum_{x\in\mathbb F_2^n}h(x)\chi_a(x).$$ The expectation symbol is just the uniform arithmetic mean. Products, sums of coefficients, and these averages are in $\mathbb R$; only the dot product and vector addition are modulo two. In particular $\chi_0=1$ and $\widehat h(0)$ is the mean of $h$.

Dependencies: def-linearity-test.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — §19.3.1, pp.388–389.

Disposition: complete draft definition/remark; provenance literature-derived/not-applicable. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `lem-boolean-cube-fourier-inversion-and-parseval`

Claim and conventions: For $n\geq0$, real functions $h,k$ on $\mathbb F_2^n$ and the normalized characters and coefficients, $$\mathbb E_x\chi_a(x)\chi_b(x)=\begin{cases}1&a=b,\\0&a\ne b,\end{cases}\qquad h(x)=\sum_a\widehat h(a)\chi_a(x),$$ $$\mathbb E_x h(x)k(x)=\sum_a\widehat h(a)\widehat k(a),\qquad \mathbb E_xh(x)^2=\sum_a\widehat h(a)^2.$$ Any two distinct linear Boolean functions $\ell_a,\ell_b$ disagree on exactly half the cube.

Dependencies: def-boolean-cube-fourier-coefficients.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — §19.3.1 and Lemma 19.7 pp.388–389; §18.4.1 p.363.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `lem-blr-acceptance-fourier-identity`

Claim and conventions: For a fixed $f:\mathbb F_2^n\to\mathbb F_2$, $n\geq0$, put $h(x)=(-1)^{f(x)}$. If the BLR acceptance probability is $\alpha$, then $$2\alpha-1=\mathbb E_{x,y}h(x)h(y)h(x+y)=\sum_{a\in\mathbb F_2^n}\widehat h(a)^3,$$ where $x,y$ are independent uniform points and the Fourier coefficients are real and normalized.

Dependencies: lem-boolean-cube-fourier-inversion-and-parseval.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — Theorem 19.9 proof pp.390–391.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `thm-blr-linearity-test-soundness`

Claim and conventions: Let $n\geq0$ and fix $f:\mathbb F_2^n\to\mathbb F_2$. If BLR accepts with probability at least $\rho$, where $1/2<\rho\leq1$, then some linear $\ell_a(x)=a\cdot x$ agrees with $f$ on at least a $\rho$ fraction of the cube. Equivalently, rejection probability at most $\varepsilon<1/2$, with $\varepsilon\geq0$, guarantees distance at most $\varepsilon$ from some linear function. Every linear function passes the test with probability one.  For $0<\delta<1/2$ and integer $k\geq0$, repeating the test $k$ times with independent randomness and rejecting if any trial rejects detects every fixed $f$ at distance greater than $\delta$ from every linear function with probability at least $1-(1-\delta)^k$.

Dependencies: lem-blr-acceptance-fourier-identity, lem-boolean-cube-fourier-inversion-and-parseval.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — Theorems 18.23 and 19.9, pp.364 and 390–391.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `def-self-correction-of-a-noisy-linear-function`

Claim and conventions: For fixed oracle $f:\mathbb F_2^n\to\mathbb F_2$, $n\geq0$, and a requested point $x$, the **two-query self-corrector** chooses uniform $y\in\mathbb F_2^n$ and returns $$\operatorname{Corr}_f(x;y)=f(y)+f(x+y)\quad\text{in }\mathbb F_2.$$ It uses $n$ random bits and two oracle calls, possibly at the same location. Linearity and distance have the conventions of [[def-linearity-test]]. Correctness will require proximity of the fixed oracle to a linear function. This procedure does not assume that the original value $f(x)$ is correct.

Dependencies: def-linearity-test.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — §18.4.1 Local decoding of Walsh-Hadamard code pp.364–365.

Disposition: complete draft definition/remark; provenance literature-derived/not-applicable. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `thm-linear-self-correction`

Claim and conventions: Let $n\geq0$ and suppose a fixed $f:\mathbb F_2^n\to\mathbb F_2$ has distance $\delta<1/4$ from a linear function $\ell$. Then $\ell$ is the unique linear function at distance less than $1/4$ from $f$. At every fixed requested point $x$, the two-query corrector outputs $\ell(x)$ with probability at least $1-2\delta>1/2$, using two oracle calls and $n$ random bits.

Dependencies: def-self-correction-of-a-noisy-linear-function, lem-boolean-cube-fourier-inversion-and-parseval.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — §18.4.1 Local decoding pp.364–365.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `fs-sum-check-computes-all-exponential-summands`

Claim and conventions: **False assertion.** A sum-check verifier must evaluate its polynomial separately at all $2^n$ Boolean points in order to verify the claimed cube sum.

Dependencies: def-sum-check-instance-and-protocol, lem-sum-check-verifier-is-polynomial-time-given-point-evaluation.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §4.1 pp.33–38.

Disposition: complete draft proof and item-specific contract; provenance literature-derived/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `ex-existence-and-uniqueness-of-multilinear-extension`

Claim and conventions: Over $\mathbb F_5$, let $f(0,0)=1$, $f(0,1)=2$, $f(1,0)=1$, and $f(1,1)=4$. Its unique multilinear extension is $\widetilde f(X,Y)=1+Y+2XY$. In particular $\widetilde f(2,3)=1$ in $\mathbb F_5$.

Dependencies: thm-existence-and-uniqueness-of-multilinear-extension.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — Figure 3.2 p.31.

Disposition: complete draft proof and item-specific contract; provenance ai-altered/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `ex-sum-check-three-variable-transcript`

Claim and conventions: Over $\mathbb F_{101}$ let $g(X,Y,Z)=2X^3+XZ+YZ$, with individual bounds $(3,1,1)$ and claimed sum $H=12$. An honest transcript with successive challenges $2,3,6$ has messages $$h_1(X)=8X^3+2X+1,\qquad h_2(Y)=34+Y,\qquad h_3(Z)=16+5Z.$$ The successive scalar claims are $69,37,46$, and the terminal equality holds. For this polynomial, a false initial sum claim is accepted with probability at most $5/101$ by the randomized protocol; a displayed fixed challenge sequence alone is not a soundness proof.

Dependencies: def-sum-check-instance-and-protocol, thm-sum-check-soundness.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §4.1 Example Execution pp.36–37.

Disposition: complete draft proof and item-specific contract; provenance ai-altered/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `ex-linear-self-correction`

Claim and conventions: On $\mathbb F_2^3$, let $\ell(x)=x_1$, and let $f$ agree with $\ell$ except that $f(0)=1$. Thus $\operatorname{dist}(f,\ell)=1/8$. At every fixed nonzero $x$, the two-query corrector succeeds with probability exactly $6/8=3/4$; it fails exactly for seeds $y=0$ and $y=x$. At $x=0$ it always returns zero.

Dependencies: thm-linear-self-correction.

Sources: https://theory.cs.princeton.edu/complexity/book.pdf — §18.4.1 Local decoding pp.364–365.

Disposition: complete draft proof and item-specific contract; provenance ai-altered/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Authored `cex-sum-check-computes-all-exponential-summands`

Claim and conventions: The assertion that a sum-check verifier must evaluate $g$ separately at every Boolean vertex is false. For $n\geq1$, take $g(X_1,\ldots,X_n)=\prod_iX_i$ over a supplied finite field, with individual bounds $d_i=1$. Its cube sum is one although the cube has $2^n$ points. The verifier uses $O(n)$ field work, including one evaluation of $g$ with at most $n$ multiplications. False initial claims have acceptance probability at most $\min(1,n/|F|)$.

Dependencies: def-sum-check-instance-and-protocol, lem-sum-check-verifier-is-polynomial-time-given-point-evaluation, thm-sum-check-soundness.

Sources: https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf — §4.1 protocol and resource analysis pp.33–38.

Disposition: complete draft proof and item-specific contract; provenance ai-altered/ai-altered. No claim dropped. Validation pending focused batch checks. Next action: author the next owned item, then run required validators.

### Page composition and authoring decisions

Authored both planned pages directly under library/computability-theory, status draft, with all 24 A items and four B items. All 28 item IDs are stable. Added direct citations/deps within this batch where the actual proof uses them: Parseval in thm-blr-linearity-test-soundness, and soundness in cex-sum-check-computes-all-exponential-summands. No prerequisite page or plan structure changed. The resource claim says at most D transmitted coefficients and at most one terminal evaluation because messages may be shorter and early rejection is possible; padding recovers D. The bit bound explicitly includes reading/encoding checks, and uniform rejection sampling requires a supplied efficient indexing. The counting protocol is explicitly for n≥1; interpolation and Fourier results include n=0. These are precise conventions, not omitted proof obligations. No planned result was dropped. Current remaining action: run all four required focused validators, apply any canonical phase repair, and record actual results.

### Focused validation and canonical repair

Initial explicit 28-path precheck examined 21 proof-bearing items and requested canonical phase renumbering/reordering in eight: lem-arithmetization-agrees-on-boolean-inputs, lem-formula-arithmetization-degree-and-evaluation-cost, thm-existence-and-uniqueness-of-multilinear-extension, lem-degree-under-arithmetized-quantifiers, prop-arithmetized-formula-counting-sum, lem-blr-acceptance-fourier-identity, thm-linear-self-correction, cex-sum-check-computes-all-exponential-summands. Applied exactly those canonical row mappings, including the interpolation row order, and updated every contract use, derivation input and boundary anchor. Removed quotes around proof_strategy scalars so the precheck wrapper sees the full intended induction keyword. Mathematical claims and arguments are unchanged. Initial content-policy passed 28 items with zero errors/warnings; initial strict proof-contract passed 21/21 with zero errors/warnings. Bare validate-plan invocation required a plan path (exit 2 usage); the corrected invocation `node tools/validate-plan.mjs research/plan-spec.json` passed with 892 populated pages and 463 unpopulated pages at that shared snapshot. Existing redundant-prerequisite warnings concern the whole plan. Remaining action: rerun repaired precheck and strict contracts and check rendering.

### Induction-format follow-up

After canonical repair, precheck passed 20/21 and reported `strategy-missing(step-cites-IH)` for lem-arithmetization-agrees-on-boolean-inputs: the induction application and discharge occupied the same row. Split the existing parent implication from the final structural-induction discharge and updated its contract derivations. No hypothesis, conclusion or cited claim changed. Strict contracts passed 21/21 and content-policy passed 28 items after the earlier repair. Focused rendercheck passed all 30 owned Markdown files, including actual KaTeX and renderer YAML parsing. Final precheck/contract rerun remains pending at this checkpoint.

### Provenance precision and finite smoke

Statement provenance is refined to ai-altered for lem-formula-arithmetization-degree-and-evaluation-cost, thm-existence-and-uniqueness-of-multilinear-extension, lem-multilinear-extension-table-evaluation, lem-degree-under-arithmetized-quantifiers, lem-sum-check-verifier-is-polynomial-time-given-point-evaluation: these respectively generalize the cited 3CNF bound to arbitrary formula trees, expose all-field/zero-dimension interpolation, include zero-dimensional table evaluation, make the quantifier bound explicit with an actual growth family, and specify encoding/early-rejection resource details beyond the source table. Their proof provenance remains ai-altered. Source URLs and locators are unchanged; no generated statement or generation record is introduced. Updated the manifest resource and counting descriptions to match the precise authored hypotheses and bounds.

Independent Python finite smoke passed: F_5 interpolation vertices and evaluation, F_101 cube sum and transcript values 69/37/46, all 64 correction seed/request pairs, and the BLR agreement inequality for all 278 Boolean tables in dimensions 0 through 3. These bounded computations are supplemental checks, not proof evidence for arbitrary dimension. The general arguments are in the numbered proof rows.

### Final Step-5 results

- Authored: all 28 stable manifest item IDs, both planned pages at their exact library/computability-theory paths, and 21 proof-bearing item contracts. All 30 Markdown artifacts remain status draft, with no judge or publication stamps. All declared dependency paths exist.
- Explicit 28-item-path `node tools/tsx-run.mjs tools/precheck.mts ...`: PASS after the recorded canonical repairs, 21 checked, 0 failing. Definitions and the recall remark have no phase proof and are skipped by that checker.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS on the current shared plan snapshot; the bare command required this explicit path. The output reports acyclic consistent page order, no item-level cycles, forward references, B-page dependencies or unresolved IDs among populated pages. Its unpopulated-page caveat and existing redundant-prerequisite warnings are retained above.
- `node tools/content-policy.mjs research/frontier-33-batch-18.pages.json`: final PASS, 28 scoped items, 0 errors and 0 warnings.
- `node tools/proof-contract.mjs research/frontier-33-batch-18.proof-contracts.json --strict`: final PASS, 21/21 contracts, 0 errors and 0 warnings.
- Additional focused `rendercheck`: PASS for all 30 Markdown files; rerun on the six subsequently adjusted files also PASS, including real KaTeX and renderer YAML parsing.
- Independent bounded finite smoke: PASS as detailed above; no finite enumeration is presented as a proof of a general statement.

No planned item was dropped. Precise resource and n≥1 counting qualifications, direct citation edges and component-provenance refinements are recorded above and in the manifest. No current Step-5 authoring blocker remains. Earlier draft dependencies (Boolean syntax and Schwartz–Zippel) remain their owners’ publication obligations; no publication was attempted. The independent Alpha reviews and exact-hash gates were preserved, not regenerated. Next action belongs to the build driver’s subsequent stage; this authoring dispatch has no remaining mathematical or validation obligation.
