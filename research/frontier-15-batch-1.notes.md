# Frontier 15, batch 1 — Beta-1 scaffold notes

## Continuity checkpoint

- Current substage: Step 2 dependency closure and proof-contract construction after the source harvest and mathematical-richness pass.
- Owned artifact paths: `research/frontier-15-batch-1.pages.json`, `research/frontier-15-batch-1.notes.md`, `research/frontier-15-batch-1.proof-contracts.json`, and the separately required gated harvest `research/frontier-15-batch-1.coverage.json`.
- Completed checks: the normative instructions, schema, README, house exemplar, newest completed-run shapes, NT-3 prose design, and proof-contract schema were read; Hackman D.II, D.V, B.IV, and B.VII, Stein §§4.1 and 4.3, Gorodnik Lectures 7 §1, 9 §2, and 10 §§1–2, and Shoup §§12.2–12.4 were harvested; the Jacobi algorithm naming defect and the duplicate published example modulo 128 were identified; proposed example witnesses were computed directly.
- Open constraints: finish opening every published dependency and recording its exact statement/provenance; minimise the dependency graph; encode every proof-bearing item’s numbered steps, citations, and eight boundary dispositions; run the structural and prose gates.
- Exact next action: inspect the candidate published dependency files in one read-only pass, then finalise the 18-item A page and 8-item B page with no forward references.

The action in that checkpoint is complete. The source harvest added one classical consequence, so the final companion has 9 rather than 8 items.

## Scope and owned artifacts

This scaffold owns `quadratic-reciprocity-and-the-jacobi-symbol` at order 57.005 and `quadratic-reciprocity-and-the-jacobi-symbol-examples` at order 57.006. The A page has 18 items and the B page has 9. The required page edge is to the published `quadratic-residues-and-the-legendre-symbol-examples`; its closure contains every external dependency listed below.

No split is proposed. The A page is not close to the 60-item ceiling, and the retained cut is coherent: the page proves prime and Jacobi reciprocity, builds the Euclidean Jacobi algorithm, then develops unit square roots locally and by CRT. The companion contains finite computations and the source-backed Euclid-style infinitude corollary.

The four batch artifacts are:

- `research/frontier-15-batch-1.pages.json`
- `research/frontier-15-batch-1.coverage.json`
- `research/frontier-15-batch-1.proof-contracts.json`
- `research/frontier-15-batch-1.notes.md`

The coverage file is separately and explicitly required by the dispatch and `QUALITY-CONTROLS.md`, even though the dispatch's earlier three-file list accidentally omitted it.

## Applyable amendments to the NT-3 prose design

Target file: `research/plan-number-theory-track.md`, section `### NT-3. Quadratic reciprocity, the Jacobi symbol, and square roots modulo n`.

### Amendment NT3-1 — split the combined Jacobi laws

Recommendation: approve. The source treatments state the supplementary laws and reciprocity as separate theorems, and their proofs have different inputs. Keeping the combined row would create one long proof and make the Euclidean algorithm cite more than it uses.

Exact old row:

```text
| `thm-jacobi-symbol-supplements-and-reciprocity` | `thm` | For odd positive \(n\), \((-1/n)=(-1)^{(n-1)/2}\) and \((2/n)=(-1)^{(n^2-1)/8}\); for coprime odd positive \(m,n\), \((m/n)(n/m)=(-1)^{(m-1)(n-1)/4}\). | L/A; Hackman D.II.4; Gorodnik Lecture 10, reciprocity theorem.  Multiply the prime Legendre laws with multiplicity and reduce the parity exponents explicitly. |
```

Exact new rows:

```text
| `thm-jacobi-symbol-supplements` | `thm` | For every odd positive \(n\), \((-1/n)=(-1)^{(n-1)/2}\) and \((2/n)=(-1)^{(n^2-1)/8}\), including \(n=1\). | L/A; Hackman D.II.4(a)–(b), Gorodnik Lecture 10, Thm. 1.4, and Shoup Thm. 12.5. Apply the prime supplements with multiplicity and prove the odd-product parity identities explicitly. |
| `thm-jacobi-symbol-reciprocity` | `thm` | For coprime odd positive \(m,n\), \((m/n)(n/m)=(-1)^{(m-1)(n-1)/4}\), including either denominator equal to one. | L/A; Hackman D.II.4(c), Gorodnik Lecture 10, Thm. 1.5, and Shoup Thm. 12.5. Expand the canonical prime factorisations, apply prime reciprocity to every cross-pair, and collect parity exponents. |
```

If declined, the authored proof would combine independent named results, obscure the exact source clauses used by the algorithm, and weaken proof decomposition.

### Amendment NT3-2 — correct the algorithm's name

Recommendation: approve. Shoup §12.3's algorithm repeatedly takes a remainder, removes powers of two, and swaps; Shoup Exercise 12.5 explicitly reserves “binary” for an add/subtract/shift implementation. The design's statement is mathematically an Euclidean-style algorithm.

Exact old A row:

```text
| `thm-binary-algorithm-for-jacobi-symbol` | `thm` | Repeatedly reducing the numerator modulo the odd denominator, removing powers of \(2\), and swapping numerator and denominator with the reciprocity sign computes \((a/n)\) without factoring \(n\); it terminates at denominator \(1\) or detects a nontrivial gcd and returns \(0\). | L/A; Hackman D.II.5; Gorodnik Lecture 10, §2.  Termination is by strict decrease of the nonnegative denominator after reduction and swap. |
```

Exact new A row:

```text
| `thm-euclidean-algorithm-for-jacobi-symbol` | `thm` | The remainder-based Euclidean Jacobi algorithm computes \((a/n)\) for every integer \(a\) and odd \(n\ge1\), terminates at denominator one or a zero remainder, and does not factor \(n\). | L/A; Shoup §12.3, Hackman D.II.5, and Gorodnik Lecture 10 §1. Correctness follows from class invariance, numerator multiplicativity, the second supplement, and Jacobi reciprocity; strict denominator descent proves termination. |
```

Exact old B row:

```text
| `ex-jacobi-symbol-by-the-binary-algorithm` | `ex` | Evaluate a large Jacobi symbol step by step without factoring its denominator. |
```

Exact new B row:

```text
| `ex-jacobi-symbol-by-the-euclidean-algorithm` | `ex` | Evaluate \((1111/8093)=-1\) by the remainder-based Euclidean Jacobi algorithm, recording every sign update and without factoring 8093. |
```

If declined, the library would attach the standard name of a different algorithm to the proved pseudocode.

### Amendment NT3-3 — separate the square implication from its counterexample

Recommendation: approve. The old A proposition embeds the exact B-page counterexample, duplicating its construction. The forward implication and its contrapositive are useful load-bearing statements; the failed converse remains a worked counterexample.

Exact old row:

```text
| `prop-jacobi-one-necessary-not-sufficient-for-residue` | `prop` | If \(\gcd(a,n)=1\) and \(a\) is a square modulo odd \(n\), then \((a/n)=1\); the converse fails, for example \((2/15)=1\) although \(2\) is not a square modulo \(15\). | L/A; Hackman D.II.2; Gorodnik Lecture 10 following Def. 1.1.  Necessity reduces the square congruence at every prime divisor; failure is checked modulo \(3\) or \(5\). |
```

Exact new rows:

```text
| `prop-unit-square-has-jacobi-symbol-one` | `prop` | If \(n\) is odd and \(a\) is a unit square modulo \(n\), then \((a/n)=1\). | L/A; Hackman D.II.2, Gorodnik Note 1.3, and Shoup §12.2. Apply the Jacobi homomorphism to a square in the unit group. |
| `cor-jacobi-symbol-minus-one-obstructs-square` | `cor` | If \(\gcd(a,n)=1\) and \((a/n)=-1\), then \(a\) is not a square modulo the odd positive integer \(n\). | L/A; Gorodnik Note 1.3. This is the direct contrapositive of the preceding proposition. |
```

Keep the existing B row `cex-jacobi-symbol-one-does-not-imply-a-square` with its exact witness. If this amendment is declined, the A page and companion would repeat the same calculation and the useful obstruction would remain buried inside a mixed proposition.

### Amendment NT3-4 — add the character and kernel structure harvested from Shoup

Recommendation: approve. Insert the following row after `thm-jacobi-symbol-multiplicativity`:

```text
| `prop-jacobi-symbol-on-units-is-a-homomorphism` | `prop` | For fixed odd \(n\), the assignment \(\chi_n([a]_n)=(a/n)\) is a homomorphism from \((\mathbb Z/n)^\times\) to \(\{\pm1\}\). | L/A; Shoup §12.2 and the multiplicativity theorem. Representative independence defines the map, and the unit condition excludes the zero value. |
```

Insert the following row after `cor-number-of-square-roots-of-a-unit-modulo-n`:

```text
| `thm-jacobi-map-kernel-and-square-subgroup` | `thm` | For odd \(n=\prod_{i<r}p_i^{e_i}\), the unit-square subgroup lies in \(\ker\chi_n\), has index \(2^r\), and \([\ker\chi_n:U_n^2]\) is \(2^r\) when \(n\) is a square and \(2^{r-1}\) otherwise. | L/A; Shoup Exercise 12.3. Use the local root counts and squaring map for the square-subgroup index; the Jacobi character is trivial exactly when all exponents are even and otherwise is surjective. |
```

If declined, the page would define and calculate the Jacobi symbol without recording the standard group-theoretic reason that Jacobi value one is weaker than quadratic residuosity.

### Amendment NT3-5 — correct the two-power source locator

Recommendation: approve. In the row for `thm-unit-square-criterion-modulo-two-powers`, replace:

```text
Hackman B.IV.1--B.IV.3 and C.IV.3
```

with:

```text
Hackman B.VII.5, independently checked against Shoup §12.4
```

Hackman B.IV contains the CRT construction of extra roots of one for composite moduli, not the complete unit-square criterion modulo powers of two. If declined, the statement would carry an inaccurate locator.

### Amendment NT3-6 — retain the harvested infinitude corollary

Recommendation: approve. Append this B row after `ex-primes-dividing-x-squared-plus-three`:

```text
| `cor-infinitely-many-primes-congruent-to-one-modulo-three` | `cor` | Use the prime-divisor constraint for \(x^2+3\) in a Euclid-style argument to prove that infinitely many primes are congruent to \(1\pmod3\). |
```

Gorodnik states this consequence immediately after Example 2.4. Its local proof needs only the published existence of a prime divisor: for an alleged finite list with product \(P\), any prime divisor of \(12P^2+1\) is a new prime congruent to one modulo three. If declined, a classical named consequence in the harvested range would be dropped despite having a short closed proof.

### Amendment NT3-7 — use distinct generated witnesses for the local and CRT examples

Recommendation: approve. Author the B examples with these fixed constructions:

- `ex-square-roots-modulo-an-odd-prime-power`: lift the two roots of 2 modulo 7 to roots 235 and 2166 modulo 2401.
- `ex-four-square-roots-modulo-a-power-of-two`: use 9 modulo 128, with roots 3, 61, 67, and 125.
- `ex-square-roots-modulo-a-composite-by-crt`: use 1 modulo 360, with the 16 representatives recorded in the manifest strategy.
- `cex-square-modulo-each-prime-does-not-ignore-the-two-part`: use 13 modulo 24.

The originally suggested root-of-one example modulo 128 would duplicate the published `ex-square-roots-of-one-modulo-one-hundred-twenty-eight`. If declined, the companion would repeat an immutable published construction under a new id.

## Source ledger and locator verification

### Hackman

H. Hackman, *Elementary Number Theory*: https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf

Read §D.II “The Jacobi Symbol,” printed pp. 118–122; §D.V “The Rectangle Proof,” printed pp. 127–129; and §B.VII “Algebraic Congruences,” printed pp. 60–64. The cached PDF is text-bearing and the headings D.II.1–D.II.7, D.V.1 and its complete rectangle proof, and B.VII.1–B.VII.7 were extracted rather than inferred from the title. These ranges support the Jacobi definition and laws, the 2/15 counterexample, the remainder-based evaluation method, the complete rectangle proof, specialised lifting, the two-power criterion, CRT solvability, and the product root count.

Convention disagreement: Hackman D.II.1 defines the Jacobi symbol only for coprime arguments, then remarks that a zero extension is natural. The library follows Gorodnik and Shoup by defining zero when the gcd exceeds one. Hackman does not supply the denominator-one empty-product clause in the same form; Gorodnik and Shoup do.

### Stein

William Stein, *Elementary Number Theory: Primes, Congruences, and Secrets*: https://wstein.org/ent/ent.pdf

Read Chapter 4, §4.1, printed pp. 70–73, and §4.3, printed pp. 75–81. The range contains Definitions 4.1.1–4.1.2, Lemma 4.1.4, Remarks 4.1.5–4.1.6, Theorem 4.1.7, Examples 4.1.8–4.1.9, Remark 4.1.10, Lemma 4.3.1, Example 4.3.2, Lemma 4.3.3, Propositions 4.3.4–4.3.5, and the first complete proof. It independently verifies the reciprocity statement and Gauss-lemma strategy.

Convention disagreement: Stein's first complete proof uses rational-interval counts plus ceiling/floor notation. The scaffold takes the independent Hackman rectangle proof and restates the one parity count as an explicit finite set, so no real-analysis floor item is a dependency. Stein's interval-parity and Euler-proposition branch is explicitly declined in the coverage file as an alternate proof, not because its machinery is unavailable.

### Gorodnik

Alexander Gorodnik, *Number Theory*, Lecture 9: https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf

Read §2, printed pp. 3–7: Theorem 2.1, Eisenstein Lemma 2.2, the geometric proof, Theorem 2.3, and Examples 2.4–2.5. This independently supports reciprocity, the lattice-count parity, the evaluation of minus three, the prime-divisor constraint for \(x^2+3\), and the infinitude corollary.

Alexander Gorodnik, *Number Theory*, Lecture 10: https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf

Read §§1–2, printed pp. 1–6: Definition 1.1, Theorem 1.2, Note 1.3, Theorems 1.4–1.5, Examples 1.6–1.8, and Theorem 2.1. The first section supplies a full independent Jacobi treatment with \(n=1\) and the zero convention, both multiplicativities, supplements, reciprocity, the 2/15 counterexample, and the exact 1111/8093 computation. The second section's conic/character-sum count is read and declined result by result because it is a separate finite-field counting topic.

Alexander Gorodnik, *Number Theory*, Lecture 7: https://www.math.uzh.ch/gorodnik/nt/lecture7.pdf

Read §1, printed pp. 1–3: Theorem 1.1, its recursive formula, and Examples 1.2–1.3. The source supports the one-step congruence derivation and unique lifting. The scaffold specialises it to \(f(X)=X^2-a\) and proves that congruence directly; it does not mint a general theorem named Hensel's lemma.

### Shoup

Victor Shoup, *A Computational Introduction to Number Theory and Algebra*, second edition: https://www.shoup.net/ntb/ntb-v2.pdf

Read Chapter 12, §§12.2–12.4, printed pp. 346–350. The range contains the total Jacobi definition, Theorem 12.5, the unit-group homomorphism, the square-subgroup discussion, Exercises 12.3–12.6, the §12.3 algorithm and its termination analysis, and the prime/prime-power/composite residuosity discussion in §12.4. It is the exact backing for the algorithm's corrected Euclidean name and for the Jacobi kernel theorem.

Convention disagreement: Shoup's §12.3 pseudocode uses Euclidean remainders, while Exercise 12.5 calls the add/subtract/shift implementation binary. This is the source of Amendment NT3-2. Shoup discusses computational difficulty at an unfactored composite modulus; the scaffold makes no unproved hardness claim.

All six URLs above were opened successfully during this session. The course index https://www.math.uzh.ch/gorodnik/nt/index.html was also opened to verify that the three lecture URLs are official course files. No source prose is copied into the planned items; exact statements are independently phrased and each source-backed item will carry the relevant URL in `sources.references`.

## Canonical coverage yield

The coverage artifact records 84 source headings: 36 `included`, 17 `inline`, 7 `already-published`, 1 `deferred`, and 23 `out-of-scope`. The larger decline set is caused by reading complete exact ranges rather than stopping at the first relevant theorem. The principal declines are Stein's complete alternate interval proof branch, singular/general polynomial Hensel examples, Gorodnik's two-variable character-sum theorem, duplicate symbol computations, Shoup's binary optimisation exercise, and the Solovay–Strassen application. Every decline has a result-specific reason in the coverage file.

No important result was declined merely for lacking a definition or lemma. The harvest instead added the Jacobi homomorphism, its kernel/square-subgroup theorem, and the infinitude of primes congruent to one modulo three. No split is needed after those additions.

## Published dependencies opened and confidence routes

Every one of the 34 external dependency ids in the final manifest was opened from `items/` and has `status: published`. Every one lies on a page of order at most 57.003, strictly before 57.005. No external target has an `ai-generated` Statement, and none is legacy-unclassified.

Source-checked exact statements and conventions:

- `def-legendre-symbol` — literature-derived/not-applicable; total numerator convention and zero branch checked against Hackman, Stein, and Gorodnik.
- `prop-legendre-symbol-well-defined` — literature-derived/ai-altered; exact class-invariance and zero iff divisibility clauses opened.
- `thm-legendre-symbol-multiplicativity` — literature-derived/ai-altered; unconditional integer-numerator formula opened.
- `thm-first-supplement-to-quadratic-reciprocity` — literature-derived/ai-altered; exact odd-prime statement opened.
- `thm-second-supplement-to-quadratic-reciprocity` — literature-derived/ai-altered; exact exponent and residue-class form opened.
- `thm-gauss-quadratic-residue-lemma` — literature-derived/ai-altered; exact least-positive-residue count and strict \(p/2\) threshold opened.
- `lem-gauss-half-system-permutation` — literature-derived/ai-altered; exact permutation of the absolute signed representatives opened.
- `cor-number-of-solutions-to-quadratic-congruence-modulo-prime` — literature-derived/ai-altered; exact \(1+(a/p)\) count, including the zero case, opened.
- `thm-linear-congruence-solvability-and-solution-count` — literature-derived/ai-altered; the gcd iff and exact solution-class count opened.
- `thm-unit-criterion-modulo-n` — literature-derived/ai-altered; exact iff and representative-independence consequence opened.
- `thm-unit-group-modulo-odd-prime-power-is-cyclic` — literature-derived/ai-altered; exact odd-prime and positive-exponent hypotheses and group order opened.
- `thm-unit-group-modulo-two-power-structure` — literature-derived/ai-altered; exact \(k\ge3\) hypothesis and unique \((-1)^\varepsilon5^j\) coordinates opened.
- `thm-unit-group-chinese-remainder-decomposition` — literature-derived/ai-altered; finite pairwise-coprime and empty-list clauses opened.
- `thm-first-isomorphism-theorem-groups` — literature-derived/ai-altered; exact quotient-by-kernel and image statement opened.
- `def-kernel-and-image-of-group-homomorphism` — literature-derived/not-applicable; exact kernel and image sets opened.
- `thm-euclids-lemma` — literature-derived/literature-derived; exact prime and integer quantifiers opened.

Established-from-knowledge after exact on-disk statement inspection:

- `def-monoid-finite-product` — ai-altered/not-applicable; only the finite recursion and empty product are used.
- `def-group-homomorphism` — ai-altered/not-applicable; only product preservation is used.
- `def-unit-group-modulo-n-and-euler-totient` — ai-altered/not-applicable; only the unit-group definition and modulus-one clause are used.
- `def-index` — ai-altered/not-applicable; only finite subgroup index is used.
- `def-common-divisor-and-gcd` — ai-altered/not-applicable; the exact integer gcd convention and common-divisor property were opened.
- `thm-canonical-prime-factorisation` — ai-altered/ai-generated; exact uniqueness of exponents for an injective prime list is used, and the standard theorem was checked independently from mathematical knowledge.
- `thm-division-algorithm-in-z` — ai-altered/ai-generated; exact positive-divisor remainder range and uniqueness are used.
- `lem-prime-not-dividing-is-coprime` — ai-altered/ai-generated; only the exact prime nondivisibility-to-gcd-one clause is used.
- `lem-every-integer-above-one-has-a-prime-divisor` — ai-altered/ai-generated; the construction uses only its final existence clause after proving the integer exceeds one.
- `thm-lagrange` — ai-altered/ai-altered; only \(|G|=[G:H]|H|\) is used, not its separate legacy embedding sentence.
- `cor-index-tower-finite` — ai-altered/ai-generated; the exact finite-chain index product was opened and checked by the standard Lagrange calculation.
- `lem-p-adic-valuation-additive` — ai-altered/ai-generated; only the standard product formula for nonzero integers is used to add prime exponents and recognise square factorisations.
- `lem-p-adic-valuation-basic` — ai-altered/ai-generated; only the maximal power-of-two factorisation with odd cofactor is used by the algorithm.
- `thm-generalised-associativity` — ai-altered/ai-generated; only permutation/regrouping of a finite commutative product is used in the Euclid-style corollary.
- `def-countable` — ai-altered/not-applicable; only its finite-set clause is used.
- `def-equinumerous` — ai-altered/not-applicable; the exact existence-of-a-bijection clause turns an assumed finite set into a list.
- `def-injection-surjection-bijection` — ai-altered/not-applicable; exact injective, surjective, and bijective clauses opened.
- `lem-divisibility-basic` — ai-altered/ai-generated; only finite-product factor divisibility and the linearity step forcing a divisor of one are used.

The proof-contract artifact contains 46 citation quotes to published items, all of which were checked as exact substrings of the cited Definition or Statement. The remaining 40 contract quotes target same-batch items and are authoring-time exact-statement obligations. No published dependency was found mathematically false, so no Step-5 dependency repair is proposed.

## Planned component provenance and source rationale

### A page

| Item | Statement | Proof | Rationale and Step-5 reference URLs |
|---|---|---|---|
| `lem-gauss-lower-half-lattice-count` | ai-altered | ai-altered | Hackman D.V.1 and Gorodnik Lemma 2.2 materially reformulated as a finite-set count to avoid floor notation; cite Hackman and Gorodnik Lecture 9. |
| `lem-reciprocity-rectangle-lattice-count` | literature-derived | ai-altered | Hackman D.V rectangle partition, independently Gorodnik's geometric proof; cite both. |
| `thm-quadratic-reciprocity` | literature-derived | ai-altered | Hackman D.V, Stein Theorem 4.1.7 and §4.3.2, Gorodnik Theorem 2.1; local proof uses the two scaffolded count lemmas. |
| `def-jacobi-symbol` | literature-derived | not-applicable | Gorodnik Definition 1.1 and Shoup §12.2 give \(n=1\) and the zero convention; Hackman D.II.1 records the convention fork; cite all three. |
| `prop-jacobi-symbol-well-defined` | ai-altered | ai-altered | Canonical bridge assembled from the definition, unique integer factorisation, and class-invariant Legendre factors; the claim is source-checked against Gorodnik Theorem 1.2 and Shoup §12.2. |
| `thm-jacobi-symbol-multiplicativity` | literature-derived | ai-altered | Hackman D.II.3, Gorodnik Theorem 1.2, Shoup Theorem 12.5; preserve the absence of a coprimality hypothesis between denominators. |
| `prop-jacobi-symbol-on-units-is-a-homomorphism` | literature-derived | ai-altered | Shoup §12.2; representative independence and multiplicativity provide the local derivation. |
| `thm-jacobi-symbol-supplements` | literature-derived | ai-altered | Hackman D.II.4(a)–(b), Gorodnik Theorem 1.4, Shoup Theorem 12.5; prove the composite-denominator parity identities. |
| `thm-jacobi-symbol-reciprocity` | literature-derived | ai-altered | Hackman D.II.4(c), Gorodnik Theorem 1.5, Shoup Theorem 12.5; local proof expands cross-pairs of prime factors. |
| `thm-euclidean-algorithm-for-jacobi-symbol` | literature-derived | ai-altered | Shoup §12.3 is the exact algorithm and naming source; Hackman D.II.5 and Gorodnik Example 1.6 independently demonstrate the method. |
| `prop-unit-square-has-jacobi-symbol-one` | literature-derived | ai-altered | Hackman D.II.2, Gorodnik Note 1.3, Shoup §12.2; prove it through the Jacobi homomorphism. |
| `cor-jacobi-symbol-minus-one-obstructs-square` | literature-derived | ai-altered | Gorodnik Note 1.3; local proof is the direct contrapositive. |
| `lem-nonsingular-square-root-lift-modulo-odd-prime-powers` | ai-altered | ai-altered | Gorodnik Lecture 7 Theorem 1.1 and Hackman B.VII.2–B.VII.3 specialised materially to \(X^2-a\); cite both and do not call it general Hensel's lemma. |
| `thm-unit-square-criterion-modulo-odd-prime-powers` | literature-derived | ai-altered | Hackman D.I.14/B.VII, Gorodnik Lecture 7, Shoup §12.4; exact two-root count retained. |
| `thm-unit-square-criterion-modulo-two-powers` | literature-derived | ai-altered | Hackman B.VII.5 and Shoup §12.4; local proof also cites the published unit-group structure. |
| `thm-unit-square-criterion-modulo-n` | literature-derived | ai-altered | Hackman B.VII.6 and Shoup §12.4; local statement makes the unit and \(n=1\) boundaries explicit. |
| `cor-number-of-square-roots-of-a-unit-modulo-n` | literature-derived | ai-altered | Hackman B.VII.6; direct CRT product of local counts. |
| `thm-jacobi-map-kernel-and-square-subgroup` | literature-derived | ai-altered | Shoup Exercise 12.3; local proof supplies the index calculations from earlier page items and published finite-group theorems. |

### B page

| Item | Statement/construction | Verification | Rationale and Step-5 reference URLs |
|---|---|---|---|
| `ex-complete-reciprocity-table-for-small-odd-primes` | ai-generated | ai-generated | Locally selected exhaustive table among 3, 5, 7, 11; cite Hackman/Stein/Gorodnik for reciprocity, but disclose the exact table construction as generated. `generation.role: example`. |
| `ex-jacobi-symbol-by-the-euclidean-algorithm` | literature-derived | ai-altered | Gorodnik Example 1.6 gives the exact 1111/8093 construction; Shoup §12.3 supports the method. |
| `cex-jacobi-symbol-one-does-not-imply-a-square` | literature-derived | ai-altered | Exact 2 modulo 15 witness in Hackman D.II.2 and Gorodnik Note 1.3. |
| `ex-square-roots-modulo-an-odd-prime-power` | ai-generated | ai-generated | Locally selected lift of 2 modulo powers of 7, with every representative checked. `generation.role: example`. |
| `ex-four-square-roots-modulo-a-power-of-two` | ai-generated | ai-generated | Locally selected 9 modulo 128 avoids the published roots-of-one example; all four witnesses checked. `generation.role: example`. |
| `ex-square-roots-modulo-a-composite-by-crt` | ai-generated | ai-generated | Locally selected 1 modulo 360 exposes all local count factors and has a complete checked 16-class witness list. `generation.role: example`. |
| `cex-square-modulo-each-prime-does-not-ignore-the-two-part` | ai-generated | ai-generated | Locally selected 13 modulo 24 has a checkable odd-prime success and mod-8 failure. `generation.role: counterexample`. |
| `ex-primes-dividing-x-squared-plus-three` | literature-derived | ai-altered | Gorodnik Example 2.4; the iff is derived from \((-3/p)=(p/3)\), with \(p=3\) separate. |
| `cor-infinitely-many-primes-congruent-to-one-modulo-three` | literature-derived | ai-altered | Gorodnik's stated consequence after Example 2.4; local Euclid-style proof uses \(12P^2+1\). |

The generated constructions are non-load-bearing leaves: no planned item lists any of them in `deps`. Their truth-risk audit is finite and explicit. Step 5 must independently recompute the complete small-prime table, all three root lists, and the 13-modulo-24 obstruction before authoring. The computed witnesses currently recorded are:

- roots of 2: \(3,4\pmod7\); \(10,39\pmod{49}\); \(108,235\pmod{343}\); \(235,2166\pmod{2401}\);
- roots of 9 modulo 128: 3, 61, 67, 125;
- roots of 1 modulo 360: 1, 19, 71, 89, 91, 109, 161, 179, 181, 199, 251, 269, 271, 289, 341, 359;
- two-part counterexample: \(13\equiv1\pmod3\) but \(13\equiv5\pmod8\).

No generated theorem, proposition, definition, lemma, false statement, or remark is planned. There is no external fallback and no item with `proved_here: false`.

## Proof decomposition, corollary pass, and boundary obligations

Both required passes were performed separately for this A/B pair.

Long-proof decomposition:

- The complete proof of quadratic reciprocity is decomposed into `lem-gauss-lower-half-lattice-count` and `lem-reciprocity-rectangle-lattice-count`, followed by the short theorem. The first lemma isolates the parity conversion from Gauss's lemma; the second isolates the no-diagonal and rectangle partition.
- The Jacobi development is decomposed into the definition, well-definedness, two multiplicativities, the unit-group homomorphism, separate supplements, separate reciprocity, and the algorithm correctness/termination theorem.
- Prime-power square roots are decomposed into the one-step nonsingular lifting lemma, odd-prime-power criterion, two-power criterion, global CRT criterion, and global count.
- The kernel theorem uses the earlier unit-square implication and global root count rather than re-proving either inside a monolithic character argument.

Useful corollaries added by the corollary pass:

- `cor-jacobi-symbol-minus-one-obstructs-square` records the usable contrapositive of the unit-square proposition.
- `cor-number-of-square-roots-of-a-unit-modulo-n` records the exact CRT product count.
- `cor-infinitely-many-primes-congruent-to-one-modulo-three` records the source's classical Euclid-style consequence of the minus-three reciprocity computation.

No further corollary is proposed. In particular, Shoup's Solovay–Strassen application requires a new primality-testing topic, and his special two-prime cryptographic quotient belongs with quadratic-residuosity cryptosystems.

The proof-contract file is the durable numbered obligation map for all 26 proof-bearing items. It covers every direct citation, every planned numbered step, and all eight boundary cases. The highest-risk boundaries are:

- strict inequalities and the first index in both lattice counts;
- the empty prime factorisation and empty product at Jacobi denominator one;
- the zero Jacobi value in multiplicativity and algorithm termination;
- coprimality for every prime cross-pair in Jacobi reciprocity;
- exponent \(k=1\) in the lifting lemma and odd-prime-power induction;
- the exceptional exponents one and two before the \(2^k\) structure theorem applies;
- the empty CRT factor list at \(n=1\);
- the square-denominator case, in which the Jacobi character is trivial, versus the nonsquare case, in which it is surjective;
- the empty alleged list in the infinitude proof, handled by the product \(P=1\).

No registered `finite_smoke` check applies to these number-theory statements. The generated examples have direct bounded computations in their contracts instead; an empty `finite_smoke` array is not claimed as evidence.

## Exact Step-5 statement clauses bound by the contracts

The following clauses must occur verbatim in the authored source items because same-batch proof-contract citations quote them:

- `lem-gauss-lower-half-lattice-count`: `Put $S_{p,q}:=|\{(x,y)\in\mathbb Z^2:1\le x\le(p-1)/2,\ 0<py<qx\}|$.` and `Then $\left(\frac qp\right)=(-1)^{S_{p,q}}$.`
- `lem-reciprocity-rectangle-lattice-count`: `Then $S_{p,q}+S_{q,p}=(p-1)(q-1)/4$.`
- `thm-quadratic-reciprocity`: `For distinct odd primes $p,q$, $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{(p-1)(q-1)/4}$.`
- `def-jacobi-symbol`: `For odd $n\ge1$ with canonical prime factorisation $n=\prod_{i<r}p_i^{e_i}$, define $\left(\frac an\right):=\prod_{i<r}\left(\frac a{p_i}\right)^{e_i}$.` and the denominator-one and gcd-zero clauses used by the algorithm.
- `prop-jacobi-symbol-well-defined`: `The Jacobi symbol depends only on $a\pmod n$, and it is zero exactly when $\gcd(a,n)>1$.`
- `thm-jacobi-symbol-multiplicativity`: both displayed numerator and denominator formulas quoted in the contracts.
- `prop-jacobi-symbol-on-units-is-a-homomorphism`: `The assignment $\chi_n([a]_n)=\left(\frac an\right)$ is a group homomorphism $(\mathbb Z/n)^\times\to\{\pm1\}$.`
- `thm-jacobi-symbol-supplements`, `thm-jacobi-symbol-reciprocity`, and `thm-euclidean-algorithm-for-jacobi-symbol`: use the exact formulas and algorithm conclusion quoted in their downstream contracts.
- `prop-unit-square-has-jacobi-symbol-one`: `If $a$ is a unit square modulo an odd positive integer $n$, then $\left(\frac an\right)=1$.`
- `lem-nonsingular-square-root-lift-modulo-odd-prime-powers`, both local square criteria, the global criterion, and the root-count corollary: include the exact uniqueness, iff, and count clauses quoted by their consumers.
- `ex-primes-dividing-x-squared-plus-three`: `For every odd prime $p\ne3$, the congruence $x^2\equiv-3\pmod p$ is soluble if and only if $p\equiv1\pmod3$.`

## Exact A-page summary for Step 5

Gauss's lemma turns a Legendre symbol into the parity of a finite lower-half count. For two distinct odd primes, the two counts occupy opposite sides of a rectangle with no lattice point on its diagonal, so their sum gives the sign in quadratic reciprocity. This proof uses only integer division, rational inequalities, and finite sets; it does not use a floor function or any result from real analysis.

The Jacobi symbol multiplies the prime Legendre symbols in an odd denominator's canonical factorisation, with value zero for noncoprime arguments and empty-product value one at denominator one. Its multiplicativity, supplementary laws, and reciprocity yield a terminating Euclidean evaluation algorithm. On unit groups it is a sign character: every square lies in its kernel, but the kernel can be larger. Direct lifting at odd prime powers, the separate criterion for powers of two, and the Chinese remainder theorem then give a complete criterion and exact count for unit square roots modulo a positive integer.

The B page must have no authored summary body.

## Per-page item list

### `quadratic-reciprocity-and-the-jacobi-symbol` — 18 items

1. `lem-gauss-lower-half-lattice-count` — lemma — Gauss's lemma as a lower-half lattice-point count
2. `lem-reciprocity-rectangle-lattice-count` — lemma — The two reciprocity lattice counts partition an open rectangle
3. `thm-quadratic-reciprocity` — theorem — Quadratic reciprocity for distinct odd primes
4. `def-jacobi-symbol` — definition — The Jacobi symbol, with its zero value and empty-product convention
5. `prop-jacobi-symbol-well-defined` — proposition — The Jacobi symbol is well defined on numerator residue classes
6. `thm-jacobi-symbol-multiplicativity` — theorem — The Jacobi symbol is multiplicative in numerator and denominator
7. `prop-jacobi-symbol-on-units-is-a-homomorphism` — proposition — For fixed odd modulus, the Jacobi symbol is a homomorphism on the unit group
8. `thm-jacobi-symbol-supplements` — theorem — The two supplementary laws for the Jacobi symbol
9. `thm-jacobi-symbol-reciprocity` — theorem — Quadratic reciprocity for coprime odd Jacobi denominators
10. `thm-euclidean-algorithm-for-jacobi-symbol` — theorem — The Euclidean algorithm computes the Jacobi symbol without factoring the denominator
11. `prop-unit-square-has-jacobi-symbol-one` — proposition — A unit square modulo an odd integer has Jacobi symbol one
12. `cor-jacobi-symbol-minus-one-obstructs-square` — corollary — Jacobi symbol minus one obstructs quadratic residuosity
13. `lem-nonsingular-square-root-lift-modulo-odd-prime-powers` — lemma — A nonsingular square root lifts uniquely by one odd-prime-power step
14. `thm-unit-square-criterion-modulo-odd-prime-powers` — theorem — Unit square criterion and root count modulo odd prime powers
15. `thm-unit-square-criterion-modulo-two-powers` — theorem — Unit square criterion and root count modulo powers of two
16. `thm-unit-square-criterion-modulo-n` — theorem — A unit is a square modulo n exactly when it is a square at every prime-power factor
17. `cor-number-of-square-roots-of-a-unit-modulo-n` — corollary — The number of square roots of a unit modulo n is the product of the local counts
18. `thm-jacobi-map-kernel-and-square-subgroup` — theorem — The kernel of the Jacobi map and the subgroup of unit squares

### `quadratic-reciprocity-and-the-jacobi-symbol-examples` — 9 items

1. `ex-complete-reciprocity-table-for-small-odd-primes` — example — A complete reciprocity table for 3, 5, 7, 11
2. `ex-jacobi-symbol-by-the-euclidean-algorithm` — example — Computing (1111/8093) by the Euclidean Jacobi algorithm
3. `cex-jacobi-symbol-one-does-not-imply-a-square` — counterexample — Jacobi symbol one does not imply a square: (2/15)=1
4. `ex-square-roots-modulo-an-odd-prime-power` — example — Lifting both square roots of 2 from modulo 7 to modulo 7^4
5. `ex-four-square-roots-modulo-a-power-of-two` — example — The four square roots of 9 modulo 128
6. `ex-square-roots-modulo-a-composite-by-crt` — example — The square roots of 1 modulo 360 by the Chinese remainder theorem
7. `cex-square-modulo-each-prime-does-not-ignore-the-two-part` — counterexample — Odd-prime tests alone miss the obstruction to 13 being a square modulo 24
8. `ex-primes-dividing-x-squared-plus-three` — example — Odd primes represented by a divisor of x²+3
9. `cor-infinitely-many-primes-congruent-to-one-modulo-three` — corollary — There are infinitely many primes congruent to 1 modulo 3

## New-id and reuse report

The exact command was a fixed-string `rg` over `items/` and `research/plan-spec.json` for every final id. All 27 ids above reported `NEW`. A separate semantic search for Jacobi homomorphisms, Jacobi kernels, nonsingular square-root lifting, two-power square criteria, and Euclidean/binary Jacobi algorithms found no published duplicate. The semantic check did find `ex-square-roots-of-one-modulo-one-hundred-twenty-eight`, which caused Amendment NT3-7 and the distinct target 9 modulo 128.

The new infinitude id `cor-infinitely-many-primes-congruent-to-one-modulo-three` was checked separately by searching for its id and for statements about infinitely many primes congruent to one modulo three; no existing item or plan row was found.

## Forward references and cross-batch dependencies

There are no forward references. Every dependency is either earlier on the same page, on the A page when consumed by its B companion, or published on a page of smaller order. In particular:

- no floor or ceiling item is cited;
- the lifting lemma is local and does not cite the later commutative-algebra Hensel development;
- no choice principle is cited;
- no B-page item is a dependency target except the literature-derived `ex-primes-dividing-x-squared-plus-three`, which is earlier on that same B page and supports the final source-backed corollary.

This batch needs no item from another batch of `frontier-15`. A later number-theory batch may use the page-level prerequisite edge through this companion and may directly use `thm-quadratic-reciprocity`, `thm-unit-square-criterion-modulo-n`, or `cor-number-of-square-roots-of-a-unit-modulo-n`; all are literature-derived Statements and eligible targets. No generated B construction is offered as a dependency.

## Findings for Step-3 Alpha

1. Approve the algorithm rename in Amendment NT3-2. The current design calls a Euclidean remainder algorithm binary; declining ships a standard-name error and mismatches the exact source.
2. Approve the two-power source correction in Amendment NT3-5. The current B.IV locator does not contain the claimed complete criterion; declining preserves an inaccurate citation.
3. Approve splitting supplements from Jacobi reciprocity in Amendment NT3-1. Declining combines distinct named results and weakens proof/citation auditability.
4. Approve the square-implication/counterexample split in Amendment NT3-3. Declining duplicates the exact 2/15 construction between pages and hides a useful corollary.
5. Approve the homomorphism and kernel structure in Amendment NT3-4. Declining omits Shoup's canonical explanation of why Jacobi value one is weaker than being a square.
6. Approve the infinitude corollary in Amendment NT3-6. Declining drops an important harvested result even though its elementary proof closes with published prerequisites.
7. Approve the distinct generated witnesses in Amendment NT3-7. Declining would duplicate the published roots-of-one modulo 128 example and would make the local/CRT examples less diagnostically distinct.

These are independent decisions and are ordered by mathematical/citational severity before richness. No finding recommends a forward reference, external fallback, page split, or published-item repair.

## Dependency-closure and confidence statement

The manifest has 34 distinct external dependencies. Each actual item was opened from disk; each is published; its exact Definition or Statement, hypotheses, quantifiers, direction, and relevant boundary were checked; and its plan page is strictly earlier than order 57.005. The proof-contract quote audit found 46 published source clauses and zero misses. Every load-bearing edge is internal to the pair or published in its prerequisite closure. There are no exceptions and no external fallback.

Mathematical confidence is high. The complete reciprocity proof, Jacobi convention fork, Euclidean algorithm invariant and descent, both directions of every local/global square criterion, exact root counts, kernel indices, and the Euclid-style infinitude construction were checked explicitly. The finite witnesses were independently computed once and remain flagged for recomputation at Step 5 because they have generated construction provenance.

What was not verified: the proof-contract strict gate cannot run before the planned source items exist, and `validate-plan`/`depsource` cannot authoritatively classify the batch edges until Step 4 splices this manifest into `research/plan-spec.json`. No claim that either gate passed is made here. The coverage gate and prose checks are run directly against the owned artifacts below.

## Final Step-2 checks

At the close of Step 2:

- `coverage-checklist` reports 1 page, 84 harvested results, 0 errors, and 0 warnings.
- `content-policy --manifest-only` reports 27 scoped items, 0 errors, and 0 warnings.
- The manifest parses as 18 A items and 9 B items.
- The proof-contract artifact parses as 26 scoped proof-bearing items and 26 contracts; every contract has all eight boundary dispositions, and every published citation quote matches its source item on disk.
- The direct dependency overlay reports 34 distinct published external ids over 50 external edges, 46 exact published citation clauses, 40 same-batch clauses deferred to Step 5, and 0 errors.
- The direct collision search reports every final id new; the semantic collision search caused the modulo-128 witness repair described above.
- `prosecheck --warnings` reports 0 errors and 9 count heuristics, all in this required audit report; the page manifests, coverage file, and proof contracts introduce no count or positional warning.
- The notation scan finds no applied canonical embedding, the dependency scan finds no floor item, and `git diff --check` reports no whitespace error.

No mathematical, dependency, citation, source, size, cross-batch, forward-reference, external-fallback, permission, or known published-falsehood blocker remains.

## Step-3 fix pass

- **B1-1 — already correct.** The suspected padding is a real proof dependency, so no scaffold edit is warranted. In `cor-infinitely-many-primes-congruent-to-one-modulo-three`, proof-contract step 1.1 uses `def-countable` to unpack finiteness as equinumerosity with a natural number, `def-equinumerous` to obtain a bijection, and `def-injection-surjection-bijection` to invert that bijection into a finite list containing every prime in the assumed finite set. The published `thm-euclid-infinitude-of-primes` uses those definitions for its finite-list-to-infinitude clause. The manifest retains each dependency.

## Step-5 authoring

### Authored artifacts and per-item precheck

Both page files and every scoped item file were authored with `status: draft` and `origin: session`. The A page has the required two-paragraph summary; the B page has no body after its frontmatter. The proofless definition is intentionally skipped by the phase-proof runner and records `verification.precheck: n/a`; every proof-bearing item records `verification.precheck: pass` only after the final clean run.

| Item | Final precheck |
|---|---|
| `lem-gauss-lower-half-lattice-count` | PASS (direct) |
| `lem-reciprocity-rectangle-lattice-count` | PASS (direct) |
| `thm-quadratic-reciprocity` | PASS (direct) |
| `def-jacobi-symbol` | N/A (proofless definition) |
| `prop-jacobi-symbol-well-defined` | PASS (direct) |
| `thm-jacobi-symbol-multiplicativity` | PASS (direct) |
| `prop-jacobi-symbol-on-units-is-a-homomorphism` | PASS (direct) |
| `thm-jacobi-symbol-supplements` | PASS (direct) |
| `thm-jacobi-symbol-reciprocity` | PASS (direct) |
| `thm-euclidean-algorithm-for-jacobi-symbol` | PASS (direct) |
| `prop-unit-square-has-jacobi-symbol-one` | PASS (direct) |
| `cor-jacobi-symbol-minus-one-obstructs-square` | PASS (direct) |
| `lem-nonsingular-square-root-lift-modulo-odd-prime-powers` | PASS (direct) |
| `thm-unit-square-criterion-modulo-odd-prime-powers` | PASS (direct) |
| `thm-unit-square-criterion-modulo-two-powers` | PASS (direct) |
| `thm-unit-square-criterion-modulo-n` | PASS (direct) |
| `cor-number-of-square-roots-of-a-unit-modulo-n` | PASS (direct) |
| `thm-jacobi-map-kernel-and-square-subgroup` | PASS (direct) |
| `ex-complete-reciprocity-table-for-small-odd-primes` | PASS (direct) |
| `ex-jacobi-symbol-by-the-euclidean-algorithm` | PASS (direct) |
| `cex-jacobi-symbol-one-does-not-imply-a-square` | PASS (direct) |
| `ex-square-roots-modulo-an-odd-prime-power` | PASS (direct) |
| `ex-four-square-roots-modulo-a-power-of-two` | PASS (direct) |
| `ex-square-roots-modulo-a-composite-by-crt` | PASS (direct) |
| `cex-square-modulo-each-prime-does-not-ignore-the-two-part` | PASS (direct) |
| `ex-primes-dividing-x-squared-plus-three` | PASS (direct) |
| `cor-infinitely-many-primes-congruent-to-one-modulo-three` | PASS (contradiction) |

### Final component-provenance and source/edit ledger

The component labels below are the labels actually written in the final frontmatter. “Local” refers only to this batch's derivation or finite computation; it does not relabel a source-backed statement as generated. Every source-backed row has its supporting URL in that item's `sources.references`.

| Item | Statement / construction | Proof / verification | Final source and edit history |
|---|---|---|---|
| `lem-gauss-lower-half-lattice-count` | ai-altered | ai-altered | Hackman D.V and Gorodnik Lecture 9 were materially recast as a finite lower-half lattice count so the proof needs no floor function; the parity derivation is local. |
| `lem-reciprocity-rectangle-lattice-count` | literature-derived | ai-altered | Hackman's rectangle proof and Gorodnik's geometric proof support the statement; the no-diagonal and partition argument was written locally. |
| `thm-quadratic-reciprocity` | literature-derived | ai-altered | Hackman D.V, Stein §§4.1/4.3, and Gorodnik Lecture 9 support the theorem; the local proof composes the two authored count lemmas. |
| `def-jacobi-symbol` | literature-derived | not-applicable | Gorodnik Definition 1.1 and Shoup §12.2 support the zero extension and denominator-one convention, with Hackman documenting the coprime-only convention; well-definedness is forward-justified by the next proposition. |
| `prop-jacobi-symbol-well-defined` | ai-altered | ai-altered | The exact claim was source-checked against Gorodnik Theorem 1.2 and Shoup §12.2, then stated as the canonical bridge from unique factorisation and Legendre class invariance; both directions of the zero criterion are proved locally. |
| `thm-jacobi-symbol-multiplicativity` | literature-derived | ai-altered | Hackman D.II.3, Gorodnik Theorem 1.2, and Shoup Theorem 12.5 support both formulas without a denominator-coprimality hypothesis; regrouping and valuation-additivity are local. |
| `prop-jacobi-symbol-on-units-is-a-homomorphism` | literature-derived | ai-altered | Shoup §12.2 supports the character statement; representative independence, the unit criterion, and numerator multiplicativity give the local proof. |
| `thm-jacobi-symbol-supplements` | literature-derived | ai-altered | Hackman D.II.4, Gorodnik Theorem 1.4, and Shoup Theorem 12.5 support both formulas; the composite-denominator parity identities and the empty product at one are proved locally. |
| `thm-jacobi-symbol-reciprocity` | literature-derived | ai-altered | Hackman D.II.4, Gorodnik Theorem 1.5, and Shoup Theorem 12.5 support the statement; the cross-prime expansion and parity collection are local. |
| `thm-euclidean-algorithm-for-jacobi-symbol` | literature-derived | ai-altered | Shoup §12.3 is the exact algorithm and naming source, with Hackman D.II.5 and Gorodnik Example 1.6 as independent checks; the invariant, noncoprime zero case, and descent proof are local. |
| `prop-unit-square-has-jacobi-symbol-one` | literature-derived | ai-altered | Hackman D.II.2, Gorodnik Note 1.3, and Shoup §12.2 support the implication; the proof factors it through the authored Jacobi homomorphism. |
| `cor-jacobi-symbol-minus-one-obstructs-square` | literature-derived | ai-altered | Gorodnik Note 1.3 supports the obstruction; the local proof is the direct contrapositive, written as two phase steps. |
| `lem-nonsingular-square-root-lift-modulo-odd-prime-powers` | ai-altered | ai-altered | Gorodnik Lecture 7 Theorem 1.1 and Hackman B.VII were materially specialised to $X^2-a$; the linear correction congruence, existence, and uniqueness are proved directly without claiming a general Hensel lemma. |
| `thm-unit-square-criterion-modulo-odd-prime-powers` | literature-derived | ai-altered | Hackman D.I/B.VII, Gorodnik Lecture 7, and Shoup §12.4 support the iff and exact root count; the base case, unique lifting, and exhaustion argument are local. |
| `thm-unit-square-criterion-modulo-two-powers` | literature-derived | ai-altered | Hackman B.VII.5 and Shoup §12.4 support the criterion and counts; the local proof uses the published unit-group coordinates and separately checks moduli two and four. |
| `thm-unit-square-criterion-modulo-n` | literature-derived | ai-altered | Hackman B.VII.6 and Shoup §12.4 support the local-to-global criterion; the proof uses the published unit-group CRT and explicitly handles the empty product at $n=1$. |
| `cor-number-of-square-roots-of-a-unit-modulo-n` | literature-derived | ai-altered | Hackman B.VII.6 supports the product count; the local proof restricts CRT to the root fibres and multiplies the authored local counts. |
| `thm-jacobi-map-kernel-and-square-subgroup` | literature-derived | ai-altered | Shoup Exercise 12.3 supports the character-kernel structure; the local proof supplies the squaring-kernel, square/nonsquare denominator split, and finite-index calculations. |
| `ex-complete-reciprocity-table-for-small-odd-primes` | ai-generated | ai-generated | The table was constructed locally and exhaustively recomputed from all residue classes modulo $3,5,7,11$; all unordered pairs were checked, with opposite signs exactly for the pairs whose primes are both $3$ modulo $4$. |
| `ex-jacobi-symbol-by-the-euclidean-algorithm` | literature-derived | ai-altered | Gorodnik Example 1.6 supplies the exact input and Shoup §12.3 the method; the local computation was re-run, and the display was corrected to list post-update states rather than a mixture of update and remainder substates. |
| `cex-jacobi-symbol-one-does-not-imply-a-square` | literature-derived | ai-altered | Hackman D.II.2 and Gorodnik Note 1.3 supply the exact $2$ modulo $15$ witness; its Jacobi value and mod-$3$ obstruction are checked locally. |
| `ex-square-roots-modulo-an-odd-prime-power` | ai-generated | ai-generated | The lift of $2$ through $7,49,343,2401$ was constructed locally; exhaustive residue enumeration at every displayed modulus reconfirmed both branches and the final complete root set. |
| `ex-four-square-roots-modulo-a-power-of-two` | ai-generated | ai-generated | The target $9$ modulo $128$ was selected locally to avoid the published roots-of-one example; exhaustive enumeration reconfirmed exactly the displayed roots. |
| `ex-square-roots-modulo-a-composite-by-crt` | ai-generated | ai-generated | The target $1$ modulo $360$ was selected locally; exhaustive enumeration reconfirmed the complete displayed root set, independently of the CRT count proof. |
| `cex-square-modulo-each-prime-does-not-ignore-the-two-part` | ai-generated | ai-generated | The witness $13$ modulo $24$ was selected locally; exhaustive enumeration of all residue classes modulo $24$ found no root, while direct reduction verifies the odd-prime success and mod-$8$ obstruction. |
| `ex-primes-dividing-x-squared-plus-three` | literature-derived | ai-altered | Gorodnik Example 2.4 supports the exact prime-divisor criterion; the local proof derives $(-3/p)=(p/3)$ and isolates $p=3$. The final algebra read corrected the named multiplier from $(p/3)$ to $(3/p)$ without changing the statement. |
| `cor-infinitely-many-primes-congruent-to-one-modulo-three` | literature-derived | ai-altered | Gorodnik's consequence after Example 2.4 supports the claim; the local contradiction proof uses $12P^2+1$, including the empty alleged list $P=1$. |

No AI-generated construction is a dependency target. No external fallback, `proved_here: false` item, generated theorem, generated definition, or generated mathematical remark was used.

### Scaffold-change and repair ledger

- No item id, kind, title, statement scope, page placement, coverage disposition, or planned result was dropped, renamed, narrowed, or merged. The final titles match the spliced scaffold exactly, and coverage remains true for every `included` row.
- `prop-jacobi-symbol-on-units-is-a-homomorphism` adds `thm-unit-criterion-modulo-n`, because step 1.1 uses the exact equivalence between invertibility and coprimality to exclude Jacobi value zero.
- `thm-jacobi-map-kernel-and-square-subgroup` adds `def-jacobi-symbol`, because step 1.3 uses the prime-factor product formula to evaluate the constructed CRT unit.
- `cex-jacobi-symbol-one-does-not-imply-a-square` adds `prop-unit-square-has-jacobi-symbol-one`, because its Statement refuted explicitly identifies the converse of that proposition; the edge records the cited target even though the finite witness verification itself uses only the definition.
- `ex-primes-dividing-x-squared-plus-three` adds `thm-legendre-symbol-multiplicativity`, because step 1.1 directly uses $(-3/p)=(-1/p)(3/p)$.
- No dependency was added merely to silence a checker, and no planned dependency was dropped. A filtered `depcheck` rerun reports no finding on any batch-1 id.
- The scaffold proof contract for the complete reciprocity table spoke of a single opposite-sign pair. The exhaustive table has three such unordered pairs; the final contract and proof now say so explicitly.
- The Euclidean example initially displayed intermediate remainder substates as though all triples were post-update states. The final display is the actual post-update sequence $(1,1111,8093)$, $(1,8093,1111)$, $(-1,1111,79)$, $(-1,79,5)$, $(-1,5,1)$; the contract was synchronized.

### Proof obligations and final gates

The final proof contract has one exact input map for every numbered step, exact excerpts and uses for every direct fact citation, and item-specific dispositions for empty, zero, one, degenerate, endpoint, nonempty-choice, and both iff directions. The supplementary boundary audit prompted two contract-only corrections: the zero-value biconditional is now checked in both directions, and positivity of the Jacobi denominator is recorded as the zero-denominator disposition.

Final scoped results:

- `reflow`: every scoped item unchanged.
- `precheck`: 26 proof-bearing items checked, 0 failing; the proofless definition is N/A.
- `proof-contract --strict`: 26/26 checked, 0 errors, 0 warnings.
- `citation-fidelity --fail-on-missing-quote`: 89 citations; no missing exact quote and no widening candidate.
- `boundary-audit --fail-on-template --fail-on-contradicted`: 208 rows; no template cluster and no contradicted disposition.
- `coverage-checklist`: 1 page harvest, 84 results, 0 errors, 0 warnings.
- `content-policy`: 27 scoped items, 0 errors, 0 warnings.
- `validate-plan`: pass; no item-level cycles, forward references, B-page dependency, or unresolved id in the authored plan pages.
- `depsource` on both pages: 0 unresolved dependency.
- `rendercheck`: 29 authored item/page files clean under KaTeX and the renderer's YAML parser.
- `prosecheck --warnings`: the same 29 files have 0 errors and 0 warnings.
- Independent finite recomputation: all generated root sets, the mod-$24$ obstruction, and the corrected Euclidean post-update trace pass.
- Global `fwdcheck` and `extcheck`: pass. Global `citecheck`: exit 0; its heuristic warnings name no batch-1 item.
- Global `depcheck` was run but did not pass: at that concurrent snapshot it reported 37 YAML-escape errors in other batches' new files. Filtering its full output against all batch-1 ids after the dependency repair produced no row. Those out-of-scope files were not edited.

### Escalations, blockers, and confidence

There is no mathematical, source, dependency, leaf-rule, forward-reference, external-fallback, published-dependency-repair, coverage, or permission blocker in this batch. Nothing required an edit outside the owned ids and namespaced artifacts. The only non-green repository-wide command is the concurrent global `depcheck` described above; its failures are outside this batch's write boundary and do not occur in the batch-filtered output.

Confidence is high in the authored mathematics. Every published direct fact was reopened and represented by an exact contract excerpt; every load-bearing external statement is published and has component provenance; the reciprocal sign formulas, algorithm invariant and descent, local/global square criteria, exact root counts, kernel indices, finite witnesses, and infinitude contradiction were checked against their stated boundary cases. The generated constructions were exhaustively checked over their finite residue spaces and remain non-load-bearing.

Not verified here: no Step-6 independent-reader or Alpha audit has occurred, no Step-7 DeepSeek/Terra judge was run, no item was published, and no `verification.audited` or `verification.verified` field was written. I did not repair or independently clear the unrelated global `depcheck` failures, and I did not re-harvest the external PDFs beyond the source ranges and liveness evidence already recorded in this batch's Step-2 ledger.
