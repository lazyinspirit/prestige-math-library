# Frontier 14 batch 7 — Stone–Weierstrass scaffold notes

## Context checkpoint (60%)

- **Owned artifacts:** `frontier-14-batch-7.pages.json`, `.notes.md`, `.coverage.json`, and `.proof-contracts.json`; only the pre-existing empty pages manifest was present when this checkpoint was written.
- **Current substage:** source harvest and dependency inspection are complete; the restored scaffold is ready to be written.
- **Checks completed:** all five declared prerequisite pages and every published item planned as a direct citation were opened on disk; the three assigned source ranges were read from extracted text rather than inferred from HTTP status; the lost batch-2 scaffold was recovered from repository history as a design aid.
- **Open mathematical question:** no owner decision remains open. The disc-algebra counterexample must replace the deleted local dyadic filter with an inline finite-geometric-sum argument grounded in the published roots-of-unity items.
- **Exact next action:** write a 16-item A page and 6-item B page, then write the one-page coverage harvest and 18 proof contracts before running the required and overlay validation checks.

## Restoration decision and scope

This scaffold restores the Stone–Weierstrass pair that was lost at the earlier step-4 splice. The orchestrator's 2026-08-15 D1 decision is present on disk: page 287 now has legal backward edges to `field-extensions-and-the-complex-numbers` and `the-complex-exponential-and-eulers-formula`. The old local coordinate-pair field, local conjugation package, and local dyadic root filter have therefore been removed. The scaffold cites the single published complex field and develops only the Stone–Weierstrass machinery.

The A page has 16 items and the B page has 6. No A item cites a B item, and all examples remain leaves. No split is proposed: 16 is well below the 60-item A-page ceiling, while the lattice, real, nowhere-vanishing, complex self-adjoint, and quotient forms all remain present.

## Proposed A-page summary

Stone–Weierstrass turns the ability of a family of continuous functions to distinguish points into uniform approximation. This page first proves the Kakutani–Krein lattice form by two compact-cover sweeps: two-point interpolation, finite maxima, and finite minima produce a global approximant. Polynomial approximation of absolute value then shows that the uniform closure of a real function algebra is a lattice, yielding the standard real theorem and its nonunital, nowhere-vanishing variant.

For complex-valued functions, point separation alone is not enough. The page uses the published complex field and conjugation laws to show that the real part of a self-adjoint complex algebra is a separating real algebra, and derives the complex Stone–Weierstrass theorem with self-adjointness stated explicitly. It closes by identifying a closed real function algebra with all continuous functions on the compact Hausdorff quotient obtained by identifying exactly the points the algebra cannot distinguish.

## Reading order and proof decomposition

The A-page order is deliberate: three definitions; a compact-metric dictionary proposition; two-point interpolation; the two compact sweeps; lattice density; closure under absolute value; real density; construction of an approximate unit for a nowhere-vanishing algebra; the nowhere-vanishing corollary; extraction of a separating real part; the complex theorem; the generated self-adjoint algebra corollary; and the indistinguishability quotient plus its representation theorem. This leaves the main theorems with short dependency chains while making the compactness, constant-term, and self-adjointness obligations independently auditable.

The B page begins with the required closed-disc counterexample, then gives the circle, metric-distance lattice, finite-space exact interpolation, endpoint-duplication quotient, and nonclosed polynomial-algebra examples. The disc proof does not cite the deleted local filter. For a polynomial of degree $m$ it takes $N=m+2$, uses the published description of the $N$th roots and the exact published clause that their sum is zero, and derives the further shifted-power cancellations inline from the finite geometric identity. Thus `cor-sum-of-roots-of-unity` is not restated as a stronger filter theorem.

## Source ledger and locator verification

Each range below was read from extracted document text and checked for the named headings. A successful HTTP response was not treated as evidence that the range contained the claimed material.

| Source and exact range read | Role in this scaffold |
|---|---|
| John M. Erdman, *A Companion to Real Analysis*, §21.2, items 21.2.1–21.2.7 and 21.2.13–21.2.15 in full; items 21.2.8–21.2.12 were not claimed, `https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf` | Primary textbook. Supplies the polynomial nonclosed example, duplication relation, lattice theorem, algebra-to-lattice lemma, two-point interpolation, real theorem, self-adjoint definition, complex theorem, and quotient representation. |
| Berkeley Math 205B notes, Chapter 9, Theorem 9.3 through Theorem 9.6, including the complex remark after Theorem 9.3, `https://math.berkeley.edu/~moorxu/oldsite/notes/205b/205bmain.pdf` | Independent full lecture-note treatment of the real closed-algebra theorem and the Kakutani–Krein lattice route, plus the conjugation warning for the complex case. |
| Eric Carlen, Rutgers topology notes, §1.6 in full from Theorem 1.26 through Theorem 1.30, including Lemmas 1.27–1.28, the self-adjoint definition, and the unnumbered disc-algebra counterexample, `https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf` | Independent treatment of the nowhere-vanishing form, two compact sweeps, closed-algebra lattice lemma, complex theorem, disc counterexample, and trigonometric-polynomial application. |

The coverage artifact records 27 headings or canonical obligations: 22 `included`, 4 `already-published`, and 1 `out-of-scope`. The single decline is Gelfand duality. It requires characters, spectra, Banach-algebra norms, and C-star structure rather than the uniform-approximation machinery of page 287, and is explicitly licensed to the planned page `gelfand-theory-and-commutative-c-star-algebras`. There are no `deferred` dispositions and no unnamed destinations.

## Convention disagreements and source cautions

1. Carlen's printed conclusion in Theorem 1.29 says $C(X,\mathbb R)$ despite complex hypotheses, a complex-valued proof, and the surrounding complex discussion. The scaffold uses $C(X,\mathbb C)$, cross-checked against Erdman 21.2.14 and Berkeley's complex remark.
2. Berkeley states the real theorem in closed-algebra form. The scaffold states density and reaches it by applying the lattice theorem to the uniform closure; it does not quote the closed form as if it already were the density statement.
3. Erdman 21.2.15 supplies an abstract compact quotient/function-space representation. The scaffold chooses the canonical indistinguishability quotient and proves that realization. This is recorded as an AI-altered statement, not passed off as a verbatim source theorem.
4. “Function algebra” is defined first without forcing a unit; unital, separating, and nowhere-vanishing are separate predicates. This is necessary because the nowhere-vanishing theorem is precisely the route that constructs the unit in the closure.
5. The published coordinate-plane theorem states a bijection and coordinate arithmetic, not a topological homeomorphism. The disc and circle examples must derive $|z-w|=d_2(\Phi z,\Phi w)$ from the modulus definition before applying real-plane Heine–Borel.
6. The published root-sum corollary says only: for $n\ge2$, the sum of all $n$th roots of unity is zero. The disc proof derives cancellation for each shifted exponent separately and never widens that citation.
7. The legacy published roots item displays the old applied-embedding notation. This scaffold does not copy it; natural indices and exponents are written directly.

## Declared pages opened

The page files for `function-space-topologies`, `approximation-and-compactness-in-ck`, `compactness`, `field-extensions-and-the-complex-numbers`, and `the-complex-exponential-and-eulers-formula` were opened on disk and all five are published. The first three supply the function-space, compactness, and real approximation spine. The latter two are the approved D1 edges and supply the unique published complex numbers, conjugation/modulus, integer powers, roots of unity, and their finite sum.

## Published dependency ledger and confidence routes

Every external item below was opened from `items/<id>.md`. No dependency is `legacy-unclassified`, and no `ai-generated` Statement is used as a load-bearing fact. For AI-altered Statements, the exact displayed clause and its on-disk proof were inspected; elementary coordinate, metric, and compactness claims were also checked directly from mathematical knowledge rather than accepted from the provenance tag alone.

| Published id | Confidence route and exact use |
|---|---|
| `def-compact-space` | Exact audited compact-space Definition, including the empty-space convention; used only for the domain hypothesis and finite-cover meaning. |
| `def-continuous-map-top` | Exact audited continuity Definition; used for members of $C(X)$ and quotient descent. |
| `def-function-space` | Exact pointwise function-space operations checked on disk; only the displayed vector operations are consumed. |
| `def-hausdorff-space` | Exact audited disjoint-open-neighbourhood Definition; used in the three algebra/lattice definitions and in the quotient Hausdorff proof. |
| `def-ring-of-functions` | Exact pointwise ring operations checked on disk; used to state function-algebra closure without inventing multiplication conventions. |
| `def-topology-of-uniform-convergence` | Exact literature-derived Definition with its nonempty-domain hypothesis; empty domains are handled before it is invoked. |
| `def-unital-separating-real-function-algebra` | Exact literature-derived definition on a nonempty compact metric space; used only by the dictionary proposition and not widened to arbitrary spaces. |
| `lem-compactness-of-a-subspace-is-ambient` | Exact two-clause ambient open-cover criterion, including the empty alternative and finite-choice dependency. |
| `thm-compactness-under-continuous-maps` | Exact clauses for continuous images, real extrema, and compact-to-Hausdorff maps; uses are restricted to the relevant clause. |
| `thm-uniform-limit-theorem` | Exact arbitrary-topological-domain, metric-target Statement; only continuity/closedness under uniform limits is consumed. |
| `cor-weierstrass-approximation-on-a-closed-interval` | Exact clause “for $a\le b$” checked on disk and independently backed by Erdman 21.2.7; used for $|t|$ and $1/t$ on closed real intervals. |
| `def-quotient-topology` | Exact final-topology and equivalence-relation quotient clauses; quotient maps are never assumed open. |
| `def-metric-space` | Exact separation, symmetry, and triangle-inequality clauses; the distance-function example uses only these axioms. |
| `def-complex-numbers-and-arithmetic` | Exact literature-derived quotient construction; used only as the published complex-number foundation named by D1. |
| `thm-complex-numbers-form-a-field` | Exact literature-derived field, unique-coordinate, arithmetic, and inverse clauses; independently consistent with all three harvested complex treatments. |
| `thm-complex-numbers-are-the-real-coordinate-plane` | Exact coordinate bijection and addition/multiplication formulas; no unprinted topology claim is attributed to it. |
| `def-complex-conjugate-real-imaginary-part-and-modulus` | Exact literature-derived definitions of real part, imaginary part, conjugation, and modulus. |
| `lem-complex-conjugation-and-modulus-laws` | Exact literature-derived automorphism, involution, definiteness, multiplicativity, and triangle-inequality clauses. |
| `def-complex-integer-powers` | Exact recursive natural- and integer-power convention; only natural powers occur in the finite averaging proof. |
| `thm-complex-nth-roots-and-roots-of-unity` | Exact $n\ge1$ enumeration and distinctness claim, with the old notation left untouched in its published file; used to obtain a primitive root and the complete finite root set. |
| `cor-sum-of-roots-of-unity` | Exact $n\ge2$ zero-sum Statement; AI-altered component checked against its short field-cancellation proof and used without the invented dyadic-filter strengthening. |
| `lem-metrics-on-rn` | Exact Euclidean $d_2$ formula and metric conclusion; coordinate identity and triangle estimates were checked directly. |
| `thm-heine-borel-rn` | Exact closed-and-bounded iff compact clause for $\mathbb R^n$, with $n\ge1$ retained; the disc and circle use only $n=2$. |

## Planned component provenance

These are the step-5 frontmatter assignments. An AI-generated Statement occurs only on one B-page leaf; no planned item depends on it.

### `stone-weierstrass-general`

| Item | Statement / proof | Rationale |
|---|---|---|
| `def-separating-real-function-lattice` | literature-derived / not-applicable | Berkeley Definition 9.4 and Erdman 21.2.3, with constants and point separation made explicit. |
| `def-unital-separating-real-function-algebra-general` | literature-derived / not-applicable | Standard real function-algebra predicates used in all three treatments; nonunital and unital cases remain distinguishable. |
| `def-self-adjoint-complex-function-algebra` | literature-derived / not-applicable | Erdman 21.2.13 and Carlen's definition before Theorem 1.29, using the published conjugation. |
| `prop-general-real-function-algebra-agrees-with-the-metric-definition` | ai-altered / ai-generated | Direct clause-by-clause house dictionary on the exact nonempty compact-metric overlap; no later item depends on it. |
| `lem-two-point-interpolation-for-a-separating-real-function-lattice` | literature-derived / ai-altered | Erdman 21.2.5 and the interpolation step inside Carlen Lemma 1.27, rewritten to isolate the distinct-point denominator. |
| `lem-two-compact-cover-sweeps-for-function-lattices` | literature-derived / ai-altered | Carlen Lemma 1.27; property-defined cover families make the finite-choice boundary explicit. |
| `thm-lattice-stone-weierstrass` | literature-derived / ai-altered | Erdman 21.2.3 and Berkeley Theorem 9.6, with the empty compact space separated from the nonempty uniform-topology definition. |
| `lem-uniform-closure-of-a-general-real-function-algebra-is-a-lattice` | literature-derived / ai-altered | Erdman 21.2.4, Berkeley Lemma 9.5, and Carlen Lemma 1.28; includes the zero-range and nonunital constant-term branches. |
| `thm-real-stone-weierstrass-general` | literature-derived / ai-altered | Erdman 21.2.6, Berkeley Theorem 9.3, and Carlen Theorem 1.26. |
| `lem-nowhere-vanishing-algebras-approximate-the-constant-one` | literature-derived / ai-altered | The constructive approximate-unit step behind Carlen Theorem 1.26, decomposed so positive minimum and degenerate range are visible. |
| `cor-real-stone-weierstrass-nowhere-vanishing-form` | literature-derived / ai-altered | Carlen Theorem 1.26's second form, obtained by adjoining one in the closure rather than assuming it. |
| `lem-real-part-of-a-self-adjoint-complex-function-algebra` | literature-derived / ai-altered | The common reduction used in Erdman 21.2.14 and Carlen Theorem 1.29, rebuilt with the published field and conjugation laws. |
| `thm-complex-stone-weierstrass-self-adjoint` | literature-derived / ai-altered | Erdman 21.2.14, Berkeley's complex remark, and Carlen Theorem 1.29; self-adjointness remains an explicit hypothesis. |
| `cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense` | ai-altered / ai-generated | Immediate source-backed specialization of the complex theorem; it is not a dependency of another planned item. |
| `def-function-algebra-indistinguishability-quotient` | literature-derived / not-applicable | Erdman 21.2.2's duplication relation expressed as the canonical equivalence quotient. |
| `thm-closed-real-function-algebras-are-function-spaces-on-their-quotients` | ai-altered / ai-altered | Erdman 21.2.15 supports the representation, while the canonical quotient realization and Hausdorff proof are made explicit locally. |

### `stone-weierstrass-general-examples`

| Item | Statement / proof | Rationale |
|---|---|---|
| `cex-disc-algebra-is-not-dense-without-self-adjointness` | literature-derived / ai-altered | Carlen's unnumbered counterexample; the proof is rebuilt using the now-legal published roots-of-unity items. |
| `ex-trigonometric-polynomials-are-dense-on-the-circle` | literature-derived / ai-altered | Carlen Theorem 1.30, derived directly from complex Stone–Weierstrass without a Fourier convergence theorem. |
| `ex-distance-function-lattice-is-dense-on-a-compact-metric-space` | ai-altered / ai-generated | Standard direct application of the lattice theorem; B leaf with continuity and separation checked from metric axioms. |
| `ex-finite-space-function-algebras-interpolate-exactly` | ai-generated / ai-generated | Explicit finite indicator construction; B leaf. Step-5 truth-risk obligation: verify the empty product, finite Hausdorff discreteness, and both real and complex normalizations. |
| `ex-two-point-duplication-algebra-and-its-quotient` | literature-derived / ai-altered | Erdman 21.2.2 and 21.2.15 specialized to the endpoint-identification algebra. |
| `ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval` | literature-derived / ai-altered | Erdman Example 21.2.1 plus 21.2.7, with $a<b$ and an explicit interior corner retained. |

## Proof-contract status

The proof-contract artifact scopes all 18 proof-bearing items: 12 on the A page and 6 on the B page. It contains 144 individually written boundary rows, exactly eight per item. The boundary audit reports no repeated-rationale cluster and no disposition contradicted by the planned text. All `finite_smoke` arrays are empty because none of the repository's registered finite-check families matches these analytic/topological claims; no unregistered check name is invented. Exact citations to not-yet-authored same-batch items are prospective and must be frozen against their actual Statement or Definition text at step 5.

## Scaffold report

- **Pages and counts:** `stone-weierstrass-general` has 16 A items; `stone-weierstrass-general-examples` has 6 B items; total 22. There are 18 proof-bearing items and 4 definitions without proofs.
- **Harvest yield:** 27 rows: 22 included, 4 already published, 1 out of scope, 0 deferred. The only decline likely to be challenged is Gelfand duality; its subject prerequisites and exact licensing page are recorded above.
- **Split proposal:** none. The A page is 16/60 items and retains every mandated form rather than trimming to fit.
- **Published dependencies:** all 23 external item dependencies and all five declared page prerequisites were opened on disk. Their confidence routes are recorded above; none has an AI-generated Statement and none is legacy-unclassified.
- **Convention disagreements:** the Carlen codomain typo, closed-versus-dense formulation, abstract-versus-canonical quotient, nonunital terminology, coordinate-plane topology gap, root-sum scope, and legacy applied-embedding notation are all recorded above.
- **Blockers:** none. D1 is resolved in the live manifest. No page, result, or source range was dropped.
- **Anything not done:** no item or library page was authored, no normative file or sibling batch artifact was edited, and `tools/gates.mjs` was not run, as instructed.

## Gate results

- `node tools/validate-plan.mjs research/plan-spec.json` — **PASS** (exit 0): declared page order is acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 282 pages currently carrying item lists.
- In-memory process-substitution splice of both Batch 7 pages into the live plan, followed by `validate-plan.mjs` — **PASS** (exit 0): both restored pages and all 22 item declarations were validated; 284 pages then carried item lists. This is the item-aware check that the still-empty live page entries cannot perform.
- `node tools/coverage-checklist.mjs research/frontier-14-batch-7.coverage.json` — **PASS**: 1 page, 27 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/frontier-14-batch-7.pages.json --manifest-only` — **PASS**: 22 scoped items, 0 errors, 0 warnings.
- `node tools/boundary-audit.mjs research/frontier-14-batch-7.proof-contracts.json --min-cluster 3` — **PASS at scaffold scope**: 144 rows, 61 `not_applicable`, no template-reuse cluster, and no contradicted disposition. The tool correctly reports that text detectors are deferred for the 18 not-yet-authored items.
- JSON/dependency structure — **PASS**: 2 pages, 16 A items, 6 B items, 22 unique item ids, 23 resolvable external dependencies, 18 contract entries matching the 18-id scope, and 144 boundary rows.
- Prospective published-citation scan — **PASS**: all 23 recorded quotes whose sources are already published occur verbatim after whitespace normalization in the cited Definition or Statement. `citation-fidelity.mjs` correctly skipped target-text analysis because all 18 target items are not yet authored; that skip was not counted as an author-time citation-fidelity pass.
- Notation and D1-removal scan — **PASS**: no canonical-embedding application occurs in any owned artifact, and none of the three deleted local complex-scalar/filter ids occurs in the page or proof-contract manifest.
- `git diff --check` — **PASS**. Only the four owned Batch 7 artifacts are modified or newly created.

`tools/gates.mjs` was not run. There is no blocker and nothing requested by the step-1/2 brief remains undone.

## Step-3 fix pass

This section supersedes the pre-review counts and provenance rows above. The repaired scaffold has 18 A-page items and 6 B-page items: 24 total, comprising 5 definitions and 19 proof-bearing items. No split is proposed.

### Finding dispositions

| Finding | Disposition | Disk evidence |
|---|---|---|
| C1 | applied | Added `def-complex-metric-convergence-and-continuity` to all six named complex items and cited its exact metric/continuity clauses in every affected proof contract. `thm-complex-numbers-are-the-real-coordinate-plane` remains a direct dependency of `lem-real-part-of-a-self-adjoint-complex-function-algebra` only for its actual coordinate-arithmetic Statement, not as a topology bridge. |
| C2 | applied | Added `thm-compactness-agrees-with-metric-compactness` and `thm-metric-hausdorff-separation` to the disc, circle, and distance-lattice examples. The dictionary proposition now also cites `def-continuous-real-functions-on-a-compact-metric-space` and `thm-metric-continuity-characterisations` and compares metric/topological continuity before comparing algebra clauses. |
| C3 | applied | The disc counterexample now cites `cor-complex-de-moivre-formula` and `thm-kernel-and-fibres-of-complex-exponential`. Its contract has separate root-enumeration/primitivity, finite-geometric-induction, cancellation, and averaging steps; neither “finite geometric identity” nor “field algebra” remains as an unnamed input. |
| C4 | applied | Added `thm-real-stone-weierstrass-dichotomy-for-separating-algebras` with both Carlen 1.26 alternatives and derived the nowhere-vanishing corollary from it. `thm-complex-stone-weierstrass-self-adjoint` now states and proves the corresponding full complex dichotomy, with unital density as a consequence. Coverage has separate rows for the dichotomy and its nowhere-vanishing consequence. |
| C5 | applied | Erdman 21.2.2 now maps to `lem-two-point-interpolation-for-a-separating-real-function-lattice`, while a separate 21.2.15 construction row maps the canonical quotient definition. The quotient definition is retagged `ai-altered`; the endpoint example now rests on Erdman 21.2.15 plus its explicit local construction, not 21.2.2. |
| C6 | applied | Added `def-two-point-duplication-property`; generalized `lem-two-compact-cover-sweeps-for-function-lattices` to a sublattice relative to one target function; and made the lattice theorem obtain that property from affine interpolation before applying the general sweep. The proof contract now separates the two compact-cover sweeps. |
| C7 | applied | Recorded that Berkeley Definition 9.4 only requires max/min closure and that its printed Theorem 9.6 silently uses vector-space interpolation. The scaffold deliberately uses a real vector sublattice; it does not cite the printed weaker hypotheses as sufficient. |
| C8 | applied | Kept Alpha's default alternative 2: no A-page `fs-` item was minted, and the canonical row now explicitly reads `FALSE: complex Stone–Weierstrass holds without closure under conjugation`, mapped to the B-page disc counterexample. |
| C9 | applied | Rewrote every identified fragment citation, including both compactness occurrences and both Heine–Borel occurrences, as complete faithful propositions. The roots-of-unity enumeration includes its formula and range; continuous image includes continuity and compactness hypotheses; Heine–Borel includes closed **and bounded**; uniform convergence quotes its definition; conjugation/modulus clauses carry their quantifiers and conclusions. The separate uniform-limit opening fragment was repaired at the same time. |
| C10 | applied | Replaced the synthetic one-step pattern on every proof whose review fix introduced real stages. Nine contracts now have 2–5 derivations: the two sweeps, lattice specialization, both dichotomies, real-part reduction, quotient representation, disc counterexample, circle example, and distance-lattice example. The ten genuinely short scaffold contracts remain one derivation and must still be frozen against the authored numbered proof at step 5, as Alpha's advisory requires. |
| C11 | applied | The circle example now depends on `def-complex-integer-powers`, `lem-complex-conjugation-and-modulus-laws`, and the published complex field. Its strategy and contract contain a numbered derivation of $z^{-1}=\overline z$ from $z\overline z=|z|^2=1$ before negative Laurent powers are rewritten. |

### Step-3 provenance corrections

| Item | Revised Statement / proof provenance | Rationale |
|---|---|---|
| `def-two-point-duplication-property` | ai-altered / not-applicable | Erdman 21.2.2 supplies the distinct-pair terminology. The scaffold's definition must include the equal-pair/one-point boundary needed to make the general lattice criterion true on singleton domains; this correction is not presented as verbatim Erdman. |
| `thm-real-stone-weierstrass-dichotomy-for-separating-algebras` | literature-derived / ai-altered | Statement is Carlen Theorem 1.26. The local proof factors the no-common-zero branch through the approximate-unit lemma and proves the vanishing-ideal equality through unitization and evaluation at the unique common zero. |
| `cor-real-stone-weierstrass-nowhere-vanishing-form` | literature-derived / ai-altered | This is the immediate consequence of Carlen 1.26 obtained by ruling out its common-zero alternative, not a substitute for the dichotomy. |
| `def-function-algebra-indistinguishability-quotient` | ai-altered / not-applicable | Erdman 21.2.15 supplies an abstract compact Hausdorff representation space. Choosing the canonical equality-of-all-algebra-values quotient is a local strengthening and is labelled accordingly. |
| `ex-two-point-duplication-algebra-and-its-quotient` | literature-derived / ai-altered | Erdman 21.2.15 backs the representation pattern; the endpoint-equivalence calculation and piecewise-linear separators are the example's explicit local specialization. Erdman 21.2.2 is not used for this item. |

The two-point source convention has one additional boundary caution. Erdman 21.2.2 quantifies over distinct pairs, which is vacuous on a singleton and by itself does not force a sublattice to approximate an arbitrary singleton target. The planned definition therefore records the equal-pair/one-point witness explicitly. The scaffold uses that all-pairs formulation for the general proof, while Erdman's distinct-pair clause is used where constants make the equal-point witness automatic. This is the reason the new definition is `ai-altered` rather than `literature-derived`.

Berkeley's separate convention disagreement is also now explicit: its Definition 9.4 is max/min closure only, and Theorem 9.6 as printed is false without the vector-space interpolation hypothesis used by its proof. The counterexample $L=\{f\in C([0,1],\mathbb R):f(0)\le f(1)\}$ is closed under max/min, uniformly closed, separating, and contains one, but omits $t\mapsto1-t$. The scaffold retains the correct vector-sublattice hypothesis.

### Newly opened published dependencies

The earlier dependency table records 23 inspected items, but `lem-metrics-on-rn` is no longer a direct dependency after C1. The following seven newly added dependencies were each opened on disk, leaving 29 current external dependencies in the manifest:

| Published id | Confidence route and exact use |
|---|---|
| `def-continuous-real-functions-on-a-compact-metric-space` | Exact Definition of $C(K,\mathbb R)$ for a nonempty compact metric space; used only in the dictionary comparison. |
| `thm-metric-continuity-characterisations` | Exact five-way Statement inspected; the dictionary uses only the equivalence between epsilon-delta continuity and inverse images of opens. |
| `thm-compactness-agrees-with-metric-compactness` | Exact metric/topological compactness equivalence, including its subset clause; used for the dictionary and all three metric examples. |
| `thm-metric-hausdorff-separation` | Exact disjoint-ball Statement proving every metric space Hausdorff; used only after a metric has been established. |
| `def-complex-metric-convergence-and-continuity` | Exact equality $d_{\mathbb C}(z,w)=|z-w|=d_2((x,y),(u,v))$ and its convergence/continuity convention; this is now the sole complex metric bridge. |
| `cor-complex-de-moivre-formula` | Exact integer-exponent formula; used to identify the enumerated roots as powers of one root without copying legacy applied-embedding notation. |
| `thm-kernel-and-fibres-of-complex-exponential` | Exact kernel and equal-fibre clauses; used to prove the selected $N$th root is primitive for exponents $1\le r<N$. |

All four D1 dependencies remain present and meaningful: `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`, `thm-complex-numbers-are-the-real-coordinate-plane`, and `cor-sum-of-roots-of-unity`. No local complex-number, conjugation, or root-filter replacement was reintroduced.

### Revised scaffold report and gates

- **Pages and item counts:** `stone-weierstrass-general` has 18 A items; `stone-weierstrass-general-examples` has 6 B items; total 24. There are 19 proof-bearing contracts and 152 individually written boundary rows.
- **Harvest yield:** 29 rows: 24 `included`, 4 `already-published`, 1 `out-of-scope`, and 0 `deferred`. The only decline likely to be challenged remains Gelfand duality, licensed to `gelfand-theory-and-commutative-c-star-algebras`; Alpha already checked that destination on disk.
- **Split proposal:** none; the A page is 18/60 items and the additions restore source-backed core results rather than approaching the size ceiling.
- **Published dependencies opened:** all 29 current external item dependencies and all five declared prerequisite pages were opened on disk. Confidence routes are in the original table plus the seven-row delta above. None is `legacy-unclassified`, and no `ai-generated` Statement is load-bearing.
- **Convention disagreements:** Carlen's complex-codomain typo, Berkeley's missing vector-space hypothesis, Erdman's singleton-vacuous distinct-pair convention, closed-versus-dense formulations, abstract-versus-canonical quotient, nonunital terminology, the coordinate-plane topology gap, root-sum scope, and legacy applied-embedding notation are all recorded.
- **Blockers:** none.
- **Anything not done:** no item, library page, plan entry, normative file, or sibling-batch artifact was edited; nothing was authored. `tools/gates.mjs` was not run, as instructed.

Required step-3 gates, rerun after the fixes:

- `node tools/coverage-checklist.mjs research/frontier-14-batch-7.coverage.json` — **PASS**: 1 page, 29 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-14-batch-7.pages.json` — **PASS**: 24 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — **PASS**: declared page order remains acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 282 pages with live item lists.
- `node tools/manifest-integrity.mjs --run frontier-14` — **PASS**: 18 pages owed, 18 present in manifests, no scope drift.

An additional in-memory splice of the repaired Batch 7 manifest into the live plan also passes `validate-plan.mjs`: 24 Batch 7 items are checked among 4,684 planned items, 284 pages have item lists, and there are no cycles, forward references, B-leaf dependencies, undeclared prerequisites, or unresolved ids. This does not edit `plan-spec.json`.
