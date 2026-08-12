# Frontier 12, batch 6 — Beta scaffold notes

Run: `frontier-12`  
Batch: 6  
Pair: orders 303–304  
Owned artifacts: `research/frontier-12-batch-6.pages.json`, `research/frontier-12-batch-6.notes.md`, `research/frontier-12-batch-6.coverage.json`, and `research/frontier-12-batch-6.proof-contracts.json`

## Step-4 amendments for the orchestrator

### Required prerequisite replacement

This is a prerequisite correction, not a page split. The harmonicity and Hessian results require the published `thm-clairaut-schwarz-mixed-partials`, whose home page is `mixed-partials-taylor-and-extrema` (231). That page already requires `the-total-derivative` (229), so the stronger page subsumes the current direct edge.

- Machine file and location: `research/plan-spec.json`, page `complex-differentiability-and-cauchy-riemann`, `requires`.
- Exact old entry: `"the-total-derivative"`
- Exact new entry: `"mixed-partials-taylor-and-extrema"`
- Resulting requires list, in the intended order: `the-complex-exponential-and-eulers-formula`, `field-extensions-and-the-complex-numbers`, `mixed-partials-taylor-and-extrema`, `the-topology-of-euclidean-space`.
- Prose file and location: `research/plan-complex-analysis-track.md`, CA-1 `requires`.
- Exact prose operation: replace `the-total-derivative (169)` with `mixed-partials-taylor-and-extrema (231)`. The prose file's other displayed orders are historical; `plan-spec.json` remains the machine authority.

Without this replacement, retaining the required \(C^2\)-harmonicity result would create `undeclared-prereq`. Dropping harmonicity to retain the old edge would violate the owner's build-the-machinery instruction.

### Correction to the prose scaffold's counterexample sentence

- File and location: `research/plan-complex-analysis-track.md`, CA-1, paragraph beginning `CEX:`.
- Exact old text:

  `CEX: $\bar z$, $\lvert z\rvert^2$, $\mathrm{Re}\,z$, $\lvert z\rvert$ are nowhere complex differentiable ($\lvert z\rvert^2$ is differentiable at $0$ only — the sharpest of the four);`

- Exact new text:

  `CEX: $\bar z$, $\mathrm{Re}\,z$, and $\lvert z\rvert$ are nowhere complex differentiable; $\lvert z\rvert^2$ is complex differentiable exactly at $0$ and is holomorphic on no neighbourhood of $0$;`

The old sentence contradicts its own parenthesis. The machine scaffold uses the corrected sharp statement.

### Harvest-driven additions to the prose scaffold

- File and location: `research/plan-complex-analysis-track.md`, CA-1, `THMS`.
- Insert after the sentence containing the four-way equivalence:

  `The Wirtinger calculus also includes the composition formulas for real-differentiable complex-valued maps, the characterization of antiholomorphic maps by the conjugate difference quotient, and the conditional bridge “holomorphic with continuous complex derivative implies $C^1$ coordinate components.”`

These are the three source headings the harvest would otherwise have declined despite being short, useful machinery. They are present as separate items in the machine scaffold.

## Two-paragraph A-page summary

Complex differentiability asks for one difference quotient to converge as its complex increment approaches from every direction. Through the identification of the quotient field \(\mathbb C=\mathbb R[x]/(x^2+1)\) with the Euclidean plane, that requirement says exactly that the real total derivative is multiplication by a complex number. This yields the Cauchy–Riemann equations, the equivalent vanishing of the barred Wirtinger derivative, continuity, the \(C^1\) converse, and the familiar algebra and chain rules.

The same linear picture explains the geometry. A nonzero complex derivative is an orientation-preserving similarity, its Jacobian determinant is \(|f'|^2\), and it preserves oriented angles without asserting local or global injectivity. On domains, zero derivative forces constancy; useful consequences cover real-valued functions, constant modulus, and holomorphic conjugates. Under an explicit \(C^2\) hypothesis, the real and imaginary parts satisfy Laplace’s equation and form a harmonic-conjugate pair. Counterexamples show exactly why real differentiability, pointwise Cauchy–Riemann equations, bare partials, and disconnected open sets are insufficient.

## Scaffold inventory and split decision

- A page: `complex-differentiability-and-cauchy-riemann`, 28 items: 1 remark, 4 definitions, 2 lemmas, 13 theorems, and 8 corollaries.
- B page: `complex-differentiability-and-cauchy-riemann-examples`, 13 items: 6 examples, 4 false statements, and 3 counterexamples.
- Proof-contract scope: all 37 proof-bearing items. The four definitions are the only items excluded.
- Split decision: no split proposed. The A page is 28 items, well below the 60-item hard ceiling. The conformality-and-harmonic material is substantial but tightly tied to the real-linear interpretation of CR, so separating it now would weaken the founding page without a size justification.
- B-leaf check by construction: no item in either page depends on a B-page item, and `forwardRefs` is empty.

## Source ledger

### Jiří Lebl, *Guide to Cultivating Complex Analysis*, version 1.9

- URL: https://www.jirka.org/ca/ca.pdf
- Exact range read: Chapter 2, §§2.1.1–2.1.2 and §§2.2.1–2.2.2 (PDF pp. 26–34), plus §2.2.4 from its opening through Exercise 2.2.23 (PDF pp. 37–39). Section 2.2.3 was intentionally not claimed.
- Primary support: exact real-differentiability-plus-CR equivalence (Proposition 2.1.4); \(C^1\) converse (Corollary 2.1.5); continuity; derivative algebra; domain constancy; Wirtinger operators and characterization; the general Wirtinger chain rule; conjugate difference quotients; the everywhere-CR but discontinuous \(\exp(-z^{-4})\) example; constant/real-valued/conjugate-valued consequences; polar CR; \(C^2\) harmonicity and Hessian sign; oriented conformality and the linear similarity classification.
- Convention note: Lebl uses “holomorphic” in the library's sense. His §2.2.4 opens with “conformal mapping” as a bijective map of open sets but immediately identifies its infinitesimal content; this page adopts the explicitly pointwise convention from the dispatch and records no injectivity consequence.
- License: the official book page states dual CC BY-NC-SA 4.0 / CC BY-SA 4.0. No prose was copied; the scaffold records mathematical statements and independently phrased proof plans.

### Jeremy Orloff, MIT 18.04, Topic 2 notes

- URL: https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/330e301bd727c7bdaa679cf44cb75fe3_MIT18_04S18_topic2.pdf
- Exact range read: §§2.6–2.8, printed pp. 7–12 (PDF pages 7–12), stopping before §2.9.
- Primary support: difference-quotient definition and examples; conjugation; derivative algebra including the inverse derivative rule; necessary CR and the continuous-partials converse; exponential; zero-derivative constancy; the \(2\times2\) Jacobian/complex-multiplication matrix; and Theorem 2.13, the exact conditional statement that \(C^2\) components make \(f'\) holomorphic.
- Convention note: these notes call a function “analytic” when it has a complex derivative on an open region. This library uses “holomorphic” here and reserves “analytic” for the local power-series notion introduced on the next page.
- License: MIT OCW identifies its ordinary course material as CC BY-NC-SA 4.0. No source prose was copied.

### Russell W. Howell and John H. Mathews, *Complex Analysis*

- URLs read: https://complexanalysis.org/web/sec_diff-analytic.html, https://complexanalysis.org/web/sec_cauchy-riemann.html, https://complexanalysis.org/web/sec_harmonic-functions.html, and https://complexanalysis.org/web/sec_conformal-mappings.html
- Exact range read: §3.1 opening through Theorem 3.1.7, stopping before Theorem 3.1.8; §3.2 opening through Theorem 3.2.13, stopping before Exercises; §3.3 opening through Example 3.3.3; §9.1 opening through Theorem 9.1.2.
- Primary support: direct derivatives and algebra; differentiability implies continuity; the classical \(\bar z^2/z\) pointwise-CR counterexample; exact continuous-partials converse; differentiability precisely on the coordinate axes; polar CR; constant modulus and zero derivative on a domain; \(C^2\) harmonicity and the harmonic-conjugate convention; and pointwise conformality at nonzero derivative.
- Convention note: Howell–Mathews also uses “analytic” for neighbourhood-wise complex differentiability. Its conformal definition is pointwise and oriented, matching the chosen page convention more closely than Lebl's global terminology.
- License: the official site states CC BY 4.0, © Russell W. Howell, 2024. No prose was copied.

### Additional exact checks

- Howell–Mathews §3.1 Exercise 2(a) was opened to confirm that \(\operatorname{Re}z\) is nowhere complex differentiable.
- The on-disk source URLs attached to every published dependency were inspected as part of the dependency audit below. They were used for confidence checking, not added as padding to the canonical harvest.

## Canonical-coverage harvest

The checklist contains 100 source/canonical headings: 74 `included`, 23 `inline`, 1 `already-published`, and 2 `deferred`. There are no `out-of-scope` dispositions and no low-yield warning.

The two declines expected to receive Alpha scrutiny are:

1. Lebl Exercise 2.1.8(b), the local classification with angle-independent real part. Solving it produces a local logarithm/argument expression. The complex logarithm, branches, and branch domains have dedicated downstream pages; including the classification here would silently introduce precisely that global/local branch machinery.
2. Howell–Mathews Example 3.2.11, differentiation of a square-root branch on a slit plane. The mathematical obstacle is not a missing lemma but the example's actual subject: choosing and validating a branch cut. That belongs to the later logarithm/branch pages.

Everything else harvested was scaffolded directly, absorbed into a named proof, or (for the elementary definition of partial derivatives in the MIT notes) matched to an already-published item.

## Load-bearing conventions fixed for the new category

1. \(\mathbb C\) means the already-published quotient \(\mathbb R[x]/(x^2+1)\); \(i\) is the class of \(x\). The page does not replace that construction by an ordered-pair definition.
2. The map \(a+bi\mapsto(a,b)\) is an isometry for the published modulus and Euclidean norm, so metric, convergence, continuity, openness, connectedness, and total differentiability transfer. It preserves addition and real scalar multiplication. Complex multiplication is additional bilinear algebraic structure; an arbitrary real-linear map is not complex-linear; the identification supplies no field order.
3. A domain is a nonempty connected open subset of \(\mathbb C\), with open and connected interpreted through the Euclidean topology.
4. “Complex differentiable at \(a\)” is pointwise. “Holomorphic on \(U\)” means complex differentiable at every point of the open set \(U\). “Entire” means holomorphic on all of \(\mathbb C\). “Analytic” is not used as a synonym here because the next page gives the power-series definition.
5. The proved CR converse is exact: real total differentiability plus CR is equivalent pointwise to complex differentiability; continuous first partials on a neighbourhood supply real total differentiability and hence holomorphy. Bare existence of partials plus CR is false.
6. Polar CR is stated only for \(r>0\), locally in a supplied polar parametrization. It chooses no global argument branch.
7. “Conformal at a point” means that the real derivative is a nonzero orientation-preserving similarity. It does not include local or global bijectivity. Orientation-reversing similarities are classified separately as conjugate-complex multiplications.
8. The harmonicity statement assumes \(u,v\in C^2\). It defines the \(C^2\) Laplace-equation usage and identifies the given \(v\) as a harmonic conjugate of \(u\), but it does not claim automatic \(C^2\) regularity or global existence of conjugates.
9. No canonical embedding is applied to a natural number. In particular, authoring must retain ordinary \(0,1,n\), never \(\iota(0)\), \(\iota(1)\), or \(\iota(n)\).
10. The new `complex-analysis` directory uses the renderer's neutral fallback. No accent or application styling change is part of this batch.

## Published dependency audit

Every ID below was opened on disk, was confirmed `status: published`, and had its exact statement/definition, domain, hypotheses, conclusion, and direction checked. None has `provenance.statement: ai-generated`; several have AI-generated proofs, which does not taint their statements and is not used as a confidence shortcut. No false published dependency was found.

| Published dependency | On-disk component provenance | Confidence route |
|---|---|---|
| `def-complex-numbers-and-arithmetic` | literature-derived / not-applicable | Exact quotient construction checked on disk; source-checked against Judson's extension-field treatment. |
| `thm-complex-numbers-are-the-real-coordinate-plane` | ai-altered / ai-altered | Exact coordinate formula checked on disk and re-derived from the quotient representation; source-checked against the IIT Guwahati notes cited by the item. |
| `def-complex-conjugate-real-imaginary-part-and-modulus` | literature-derived / not-applicable | Exact conventions checked on disk and against Lebl's real-analysis complex-number section. |
| `lem-complex-conjugation-and-modulus-laws` | literature-derived / ai-altered | Exact algebraic clauses checked on disk and directly re-derived from coordinates; Lebl source cross-check. |
| `def-complex-metric-convergence-and-continuity` | ai-altered / not-applicable | Source-checked against Lebl and matched to the on-disk modulus metric. |
| `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity` | ai-altered / ai-altered | Exact Cartesian formula and modulus clause checked on disk; source-checked against Lebl's complex-exponential section. |
| `lem-complex-exponential-series-converges-everywhere` | ai-altered / ai-altered | Exact series and convergence domain checked on disk; the tail estimate needed by the B example was independently verified term by term. |
| `def-euclidean-linear-map` | ai-altered / not-applicable | Source-checked against Lebl's total-derivative section; exact dimensions and scalar field checked on disk. |
| `lem-euclidean-linear-maps-have-matrices-and-are-bounded` | ai-altered / ai-generated | Statement established directly from finite matrix coordinates and the finite-sum norm bound after opening the exact item. |
| `def-directional-and-partial-derivatives` | ai-altered / not-applicable | Source-checked against Lebl; coordinate-direction convention checked on disk. |
| `def-total-derivative-in-euclidean-space` | ai-altered / not-applicable | Source-checked against Lebl; remainder-over-norm quantifiers checked on disk. |
| `thm-total-derivative-computes-directional-and-partial-derivatives` | ai-altered / ai-generated | Source-checked against Lebl and independently verified by restricting the total-derivative remainder to a line. |
| `thm-total-differentiability-gives-a-local-linear-bound-and-continuity` | ai-altered / ai-generated | Exact local conclusion checked on disk; source-checked against Lebl and re-derived from the remainder estimate. |
| `thm-algebra-of-total-derivatives` | not used | This item was opened during research but was deliberately not retained as a direct dependency; the complex algebra theorem is proved from difference quotients. |
| `thm-chain-rule-for-total-derivatives` | ai-altered / ai-generated | Exact point mapping and order of composition checked on disk; source-checked against Lebl's total-derivative chain rule. |
| `thm-continuous-partial-derivatives-imply-total-differentiability` | ai-altered / ai-generated | Exact neighbourhood and continuity hypotheses checked on disk; source-checked against Lebl's continuous-partials theorem. |
| `def-jacobian-matrix-and-gradient` | ai-altered / not-applicable | Source-checked against Lebl; row/column convention checked on disk before fixing the CR matrix. |
| `def-ck-and-multi-index-notation-in-several-variables` | literature-derived / not-applicable | Exact \(C^2\) convention checked on disk and source-checked against the Toronto notes cited there. |
| `thm-clairaut-schwarz-mixed-partials` | literature-derived / ai-altered | Exact continuity hypothesis and equality direction checked on disk; source-checked against the Purdue note cited there. |
| `def-hessian-and-euclidean-critical-point` | literature-derived / not-applicable | Exact Hessian and critical-point conventions checked on disk and against the Columbia optimization notes. |
| `cor-two-variable-hessian-determinant-test` | literature-derived / ai-altered | Exact negative-determinant saddle conclusion checked on disk and against the Columbia source. |
| `def-euclidean-inner-product` | ai-altered / not-applicable | Exact real-plane convention established from knowledge after on-disk inspection; no convention ambiguity remained. |
| `def-metric-topology` | literature-derived / not-applicable | Exact open-ball definition checked on disk; standard metric-topology convention established from knowledge. |
| `rem-euclidean-topology-dictionary` | ai-altered / not-applicable | Exact Euclidean metric/topology equivalence checked on disk and re-established from the norm/metric definitions. |
| `def-connected-space` | ai-altered / not-applicable | Exact separation convention checked on disk; established-from-knowledge route. |
| `def-polygonal-path-and-polygonal-connectedness` | ai-altered / not-applicable | Exact finite-segment convention checked on disk; established-from-knowledge route. |
| `thm-open-connected-subsets-of-rn-are-polygonally-connected` | ai-altered / ai-generated | Exact open-and-connected hypotheses checked on disk; statement independently confirmed by the standard open-and-relatively-closed reachable-set proof. |
| `cor-zero-derivative-implies-constant` | literature-derived / ai-altered | Exact closed-interval/interior differentiability hypotheses checked on disk; established by the real mean value theorem. |
| `def-polynomial-ring-over-a-commutative-ring` | literature-derived / not-applicable | Exact coefficient and finite-support convention checked on disk; source-checked against Judson/UCI notes cited there. |
| `thm-derivative-of-exponential` | ai-altered / ai-altered | Exact real derivative statement checked on disk; source-checked against the MIT/UC Davis treatments cited there. |
| `thm-exponential-beats-every-polynomial` | ai-altered / ai-altered | Exact positive-infinity domination direction checked on disk; source-checked against the MIT source cited there before substituting \(s=1/t^4\). |
| `thm-sine-and-cosine-derivatives` | ai-altered / ai-generated | Exact real derivative signs checked on disk; source-checked against DLMF and the University of Vienna notes cited there. |

The `thm-algebra-of-total-derivatives` row is included only to make the research trail explicit: it was opened but is not a dependency in the final machine scaffold. All other rows are current direct published dependencies.

## Planned component provenance

Every mathematical-content item has a component plan below. “AI-altered” means the claim or proof has been adapted or combined from the cited source treatments and the library's earlier interfaces; “AI-generated” is used only for a local derivation or explicit leaf example, never for a load-bearing statement.

| Item | Statement / proof | Rationale |
|---|---|---|
| `rem-complex-plane-euclidean-dictionary` | ai-altered / not-applicable | Synthesizes published quotient, coordinate, modulus, metric, and topology clauses and adds explicit non-preservation warnings; as a remark it has no proof component under SCHEMA §3. |
| `def-complex-domain` | literature-derived / not-applicable | Standard convention shared by Lebl and Howell–Mathews. |
| `def-complex-differentiability-holomorphic-and-entire` | literature-derived / not-applicable | Directly sourced standard definitions; terminology normalized to library usage. |
| `lem-uniqueness-of-the-complex-derivative` | literature-derived / ai-generated | Standard uniqueness-of-limit consequence; local one-third triangle proof supplied here. |
| `def-wirtinger-derivatives` | ai-altered / not-applicable | Lebl's operators retained, with the antiholomorphic convention folded into one definition item. |
| `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann` | ai-altered / ai-altered | Combines Lebl Propositions 2.1.4 and 2.2.6 into the required single four-way equivalence. |
| `cor-complex-differentiability-implies-continuity` | literature-derived / ai-altered | Standard theorem in all three sources; proof routed through the library's total-derivative bridge. |
| `thm-continuous-partials-and-cauchy-riemann-imply-holomorphic` | literature-derived / ai-altered | Exact \(C^1\) converse from Lebl, MIT, and Howell–Mathews, adapted to published multivariable machinery. |
| `cor-cartesian-and-polar-cauchy-riemann-equations` | literature-derived / ai-altered | Lebl Exercise 2.1.8(a) and Howell–Mathews Theorem 3.2.10; branch-free local wording. |
| `thm-algebra-of-complex-derivatives` | literature-derived / ai-altered | Lebl Proposition 2.2.4 and MIT §2.6.1; quotient proof expanded for nonvanishing. |
| `thm-chain-rule-for-complex-derivatives` | literature-derived / ai-altered | Lebl Proposition 2.2.2/MIT §2.6.1, proved through the published real chain rule. |
| `thm-wirtinger-chain-rule-for-real-differentiable-maps` | literature-derived / ai-altered | Exact result of Lebl Exercise 2.2.10, phrased in the page's notation. |
| `thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps` | literature-derived / ai-altered | Lebl Exercise 2.2.11, strengthened to display the converse with its real-differentiability hypothesis. |
| `cor-continuous-complex-derivative-gives-c1-components` | literature-derived / ai-altered | Lebl Exercise 2.2.12(a), expressed through the four-way theorem. |
| `thm-derivative-of-a-continuous-complex-local-inverse` | ai-altered / ai-altered | MIT inverse rule with the continuity hypothesis exposed because no inverse-function theorem is in closure. |
| `thm-complex-polynomials-and-rational-functions-are-holomorphic` | literature-derived / ai-altered | Lebl Proposition 2.2.5 and Howell–Mathews derivative rules; zero and constant cases made explicit. |
| `thm-complex-exponential-is-entire-with-derivative-itself` | literature-derived / ai-altered | Lebl Exercise 2.1.4 and MIT Example 2.11, bridged to the already-published exponential. |
| `thm-zero-complex-derivative-on-a-domain-implies-constant` | literature-derived / ai-altered | Lebl Proposition 2.2.1 and Howell–Mathews Theorem 3.2.13; proof rebuilt via published polygonal connectedness. |
| `cor-real-valued-holomorphic-function-is-constant` | literature-derived / ai-altered | Lebl Exercise 2.1.5; CR proof routed through domain constancy. |
| `cor-constant-modulus-holomorphic-function-is-constant` | literature-derived / literature-derived | Howell–Mathews Theorem 3.2.12, including its zero-modulus split and elementary linear system. |
| `cor-holomorphic-function-with-holomorphic-conjugate-is-constant` | literature-derived / ai-altered | Lebl Exercise 2.2.9; paired CR signs give the local proof. |
| `def-oriented-conformal-map-at-a-point` | ai-altered / not-applicable | Reconciles Howell–Mathews pointwise usage with Lebl's orientation convention and excludes bijectivity. |
| `lem-oriented-similarities-are-nonzero-complex-multiplications` | ai-altered / ai-altered | Combines Lebl Proposition 2.2.9 with Exercises 2.2.22–23 to include both orientations. |
| `thm-nonzero-complex-derivative-iff-oriented-conformal` | ai-altered / ai-altered | Pointwise adaptation of Lebl Corollary 2.2.10 and Howell–Mathews Theorem 9.1.2. |
| `cor-jacobian-determinant-of-a-holomorphic-map` | literature-derived / ai-altered | Standard determinant formula recorded by Lebl; two-by-two computation supplied locally. |
| `thm-c2-holomorphic-components-are-harmonic` | ai-altered / literature-derived | Combines Lebl Exercises 2.1.6–7 and Howell–Mathews Theorem 3.3.1 with an explicit \(C^2\) hypothesis and conjugate-pair wording. |
| `thm-c2-holomorphic-function-has-holomorphic-derivative` | literature-derived / literature-derived | MIT Theorem 2.13 in its exact conditional form. |
| `cor-c2-holomorphic-components-have-nonpositive-hessian-determinant` | literature-derived / ai-altered | Lebl Exercise 2.1.7, closed using the published two-variable Hessian test. |
| `ex-square-function-from-the-complex-difference-quotient` | literature-derived / ai-altered | MIT Example 2.8 and Howell–Mathews Examples 3.2.3/3.3.2; direct quotient plus harmonic check. |
| `ex-complex-exponential-cauchy-riemann-in-cartesian-and-polar-form` | ai-altered / ai-altered | Combines direct series differentiation with MIT Cartesian and Howell/Lebl polar checks. |
| `ex-reciprocal-function-from-the-complex-difference-quotient` | literature-derived / ai-generated | Standard direct quotient calculation; exact punctured-domain proof supplied locally. |
| `ex-mobius-map-is-conformal-off-its-pole` | literature-derived / ai-altered | Standard Möbius derivative consequence of the sourced quotient and conformality results. |
| `ex-square-map-sends-a-grid-to-orthogonal-parabolas` | ai-altered / ai-generated | Adapts Howell–Mathews' square-map geometry to both grid families and proves orthogonality locally. |
| `fs-real-differentiability-implies-complex-differentiability` | literature-derived / literature-derived | Conjugation counterexample appears in all three sources; matrix and directional proofs retained. |
| `cex-modulus-squared-is-complex-differentiable-only-at-zero` | literature-derived / literature-derived | Lebl Exercise 2.1.3, including the sharp “only at zero” locus. |
| `cex-real-part-is-nowhere-complex-differentiable` | literature-derived / ai-altered | Howell–Mathews §3.1 Exercise 2(a); proof phrased through CR and two directions. |
| `cex-modulus-is-nowhere-complex-differentiable` | literature-derived / ai-altered | Standard textbook counterexample; origin and nonzero regimes are proved separately. |
| `ex-complex-differentiable-on-the-coordinate-axes-but-holomorphic-nowhere` | literature-derived / literature-derived | Howell–Mathews Example 3.2.9 with its exact differentiability locus. |
| `fs-cauchy-riemann-at-a-point-implies-complex-differentiability` | literature-derived / literature-derived | Howell–Mathews Example 3.2.5, including continuity and the two quotient paths. |
| `fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy` | literature-derived / ai-altered | Lebl Exercise 2.2.4; the domination and unbounded-ray details are made explicit, plus its conjugate Wirtinger variant. |
| `fs-zero-complex-derivative-on-an-open-set-implies-constant` | ai-altered / ai-generated | Standard connectedness warning; explicit two-half-plane leaf counterexample constructed here. |

No planned statement is `ai-generated`. The three AI-generated proofs on the B page and the local uniqueness proof are non-load-bearing derivations; B-page items remain leaves.

## Authoring-time proof and notation obligations

- Keep the four-way equivalence in one theorem and prove both directions of every equivalence; the proof contract marks both `iff` boundaries.
- State the derivative limit with nonzero increments that remain in the domain. At non-interior points there is no holomorphic definition on this page; holomorphy is on open sets.
- In the CR converse, do not write “CR implies differentiable” without the real-total-differentiability or continuous-partials hypothesis.
- In the polar calculation, exclude \(r=0\) before dividing by \(r\), and do not select a global \(\arg\).
- In the inverse derivative theorem, retain continuity of the inverse at the image point. Do not claim existence or continuity of a local inverse from \(f'(a)\ne0\); that needs the unavailable inverse-function theorem.
- In domain constancy, parameterize each closed segment, use differentiability only in the interval interior, and use continuity at endpoints. Do not replace connectedness by openness.
- For constant modulus, split the zero constant before solving the \(2\times2\) system.
- For conformality, define the positive signed-area condition by the explicit two-dimensional expression; no dependency on the later determinant page is needed.
- For \(C^2\) harmonicity and holomorphy of \(f'\), cite Clairaut–Schwarz exactly. Never imply arbitrary holomorphic functions are already \(C^2\).
- For the Hessian corollary, determinant zero is inconclusive; only a nondegenerate critical point is declared a saddle.
- For \(\exp(-z^{-4})\), the coordinate axes give decay to zero, whereas \(z=re^{i\pi/4}\) makes \(-z^{-4}=+r^{-4}\). Recheck this sign before publication.
- For \(\bar z^2/z\), the derivative quotient is \(\bar z^2/z^2\): it is \(1\) on the real axis and \(-1\) on \(y=x\).
- For \(|z|^2\), say “complex differentiable exactly at zero,” never “nowhere.”
- The exponential B example must retain the direct series-tail difference-quotient proof as well as the Cartesian and polar CR checks.
- Synchronization was completed at Step 5: all 36 proof-bearing items have exact source-section quotes, every authored fact use and numbered proof step is mapped, and every boundary row is anchored to the final canonical step numbering.
- No external fallback is planned. No forward reference is load-bearing.

## Blockers and findings

- No mathematical or source-access blocker.
- One prerequisite amendment is required before the batch can be merged: use `mixed-partials-taylor-and-extrema` in place of the direct `the-total-derivative` edge.
- One contradictory sentence in the prose scaffold is recorded above for correction.
- No published dependency inspected was unambiguously false.
- Presentation remains frozen; nothing outside the four owned batch artifacts was edited.

## Continuity checkpoint

Steps 1–2 are complete in the four owned batch artifacts. The source harvest, item design, dependency audit, provenance plan, and 37 prospective proof contracts are recorded. JSON parsing, the batch-local dependency-closure and B-leaf checks under the proposed prerequisite replacement, the page-scaffold applied-`\iota` notation check, and the final ownership-boundary review all pass. The required plan validator passes against the untouched plan, and the coverage checklist reports 1 page, 100 harvested results, 0 errors, and 0 warnings. The plan validator cannot exercise these unmerged item lists; the batch-local closure check is the corresponding scaffold-time evidence. The gate wrapper was not run, as directed.

## Step 5 authoring record (2026-08-13)

### Authored inventory

- `complex-differentiability-and-cauchy-riemann`: 28 items in the declared order, plus the A-page manifest and its exact two-paragraph summary.
- `complex-differentiability-and-cauchy-riemann-examples`: 13 leaf items in the declared order, plus the bodyless B-page manifest.
- `library/complex-analysis/_category.md`: the new draft category manifest. No renderer, stylesheet, or app-repository file was changed.
- All 41 items and both pages are `status: draft` and `origin: session`; nothing was published, judged, committed, or pushed.

The final proof-contract scope is 36 rather than the prospective 37. The scaffold had treated `rem-complex-plane-euclidean-dictionary` as proof-bearing, but SCHEMA §3 requires `provenance.proof: not-applicable` for remarks. The final contract therefore covers the 36 actual phase-proof bodies and excludes the four definitions and the remark.

### Dependency and proof-strategy reconciliation

The written claims remain the approved claims. These are the complete changes from the plan-spec dependency lists:

- `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann` adds `lem-complex-conjugation-and-modulus-laws` for the exact equality between the complex quotient remainder and the Euclidean remainder ratio.
- `cor-complex-differentiability-implies-continuity` replaces the remark dependency with `def-complex-metric-convergence-and-continuity`. The proof needs the metric identity itself, and proof-contract citations require a source with a recognized Definition/Statement section rather than free remark prose.
- `thm-derivative-of-a-continuous-complex-local-inverse` drops `cor-complex-differentiability-implies-continuity`; continuity of the inverse is an explicit hypothesis and the forward map's continuity is not used.
- `thm-complex-polynomials-and-rational-functions-are-holomorphic` adds `cor-complex-differentiability-implies-continuity` and `lem-complex-conjugation-and-modulus-laws` to prove that the denominator's nonzero set is open. Its power rule uses the finite difference-quotient factorization directly instead of the scaffold's induction; this proves the same formula while treating exponent zero explicitly.
- `thm-complex-exponential-is-entire-with-derivative-itself` adds `cor-differentiable-implies-continuous` and `lem-algebra-of-continuous-real-maps-on-a-space` to license continuity of all four displayed partial derivatives.
- `thm-zero-complex-derivative-on-a-domain-implies-constant` adds `cor-complex-differentiability-implies-continuity` to justify both closed-segment endpoints before applying the one-variable zero-derivative theorem.
- `cor-c2-holomorphic-components-have-nonpositive-hessian-determinant` adds `thm-clairaut-schwarz-mixed-partials` so that the two off-diagonal Hessian entries may be identified in the determinant formula.
- `ex-square-function-from-the-complex-difference-quotient` adds `thm-c2-holomorphic-components-are-harmonic` to license the page's harmonic and harmonic-conjugate terminology after the direct Laplacian computations.
- `ex-complex-exponential-cauchy-riemann-in-cartesian-and-polar-form` adds `def-complex-exponential` and `thm-complex-exponential-addition-and-real-extension` for the defining series and direct difference-quotient factorization; absolute convergence at 1 supplies the explicit series-tail bound.
- `fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy` adds `cor-complex-differentiability-implies-continuity` to infer non-differentiability from the proved discontinuity at zero.

Two proof presentations changed without changing dependencies or claims. The antiholomorphic quotient theorem uses the quotient remainder directly instead of first renaming the increment by its conjugate. The Wirtinger chain-rule proof now writes out the identity, conjugation, and constant-inner-map substitutions explicitly, as the scaffold required, after the first strict-contract pass showed that only the general formula had been written.

### Boundary and contract pass

The final proofs explicitly dispose of punctured zero increments, exponent zero, zero and constant polynomials, the empty rational-function domain for the zero denominator, zero modulus before the positive-modulus linear system, radius zero before polar division, the cases `c=0` and `d=0` for grid lines, `c=0` versus the unique Möbius pole, closed segment endpoints, coincident polygonal endpoints, both directions of every asserted equivalence, and the disconnected-open-set failure of global constancy. Determinant zero remains explicitly inconclusive in the Hessian test.

`frontier-12-batch-6.proof-contracts.json` contains full exact source-section text for every cited fact, final step-by-step inputs rather than prospective instructions, and step-anchored dispositions for all eight standard boundary rows. Strict verification reports 36/36 contracts with zero errors and zero warnings.

### Gate record

- reflow: completed on all 41 item files.
- precheck: 36 proof-bearing items checked, 0 failing; the printed canonical stratification was adopted wherever requested, and every item records `verification.precheck: pass` (definitions and the remark record `n/a`).
- rendercheck: 43 item/page files, clean KaTeX, YAML, delimiter, display-block, and wikilink checks.
- prosecheck: 2 page files, 0 errors and 0 warnings, including the `--warnings` pass.
- citecheck: 41 scoped items, no positional-claim conflicts; the global invocation also completed, with only pre-existing repository-wide heuristic warnings outside batch 6.
- depcheck, fwdcheck, extcheck: completed successfully. The repository-wide unproved-material notices are inherited published-library notices, not batch-6 failures.
- content-policy: 41 scoped items, 0 errors and 0 warnings.
- proof-contract `--strict`: 36/36 checked, 0 errors and 0 warnings.
- coverage-checklist: 1 source-coverage page, 100 harvested results, 0 errors and 0 warnings.

Nothing failed to close honestly. There is no mathematical, provenance, source-access, filesystem, or tooling blocker. The forbidden `tools/gates.mjs` wrapper was not run.
