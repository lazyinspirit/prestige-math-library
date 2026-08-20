# Frontier 16, batch 3 — Beta-3 scaffold notes

## Continuity checkpoint

- Current substage: Step 2 artifacts are complete in structure; source-body stamping is the only mechanical blocker.
- Owned artifacts: `research/frontier-16-batch-3.pages.json`, `research/frontier-16-batch-3.notes.md`, `research/frontier-16-batch-3.proof-contracts.json`, and `research/frontier-16-batch-3.coverage.json`.
- Completed checks: all normative files and both design locations were read; four full-text sources were harvested; every proposed published dependency was opened, found published, provenance-eligible, and homed at a lower plan order; fixed-string and semantic duplicate searches were run; the richness and boundary passes were completed; the coverage checklist and manifest-only content policy are clean.
- Open constraint: `source-fetch-check --stamp` returned `EAI_AGAIN` for every host because this sandbox has no DNS route. No hashes were invented.
- Exact next action: in a network-enabled engine process, rerun `node tools/source-fetch-check.mjs --coverage research/frontier-16-batch-3.coverage.json --stamp`; then Step-3 Alpha can review the mathematics and the harvest together.

## Controlling design and plan drift

For `picard-lindelof-and-first-order-odes`, I read both named design locations. The controlling design is RC-10 in `research/plan-realanalysis-completion-track.md`: it is the later amendment and it explicitly assigns local existence, Grönwall, continuous dependence, continuation, and Peano to RC-10. The differential-geometry track's DG-8 seam agrees and reserves only smooth dependence, variational equations, and smooth flow maps for `euclidean-ordinary-differential-equations-with-smooth-dependence`.

The live spec controls both pairs. Two prerequisite drifts remain for the stage-1 drift unit:

- RC-10 prose lists `the-fundamental-theorems-of-calculus`, `completeness-and-uniform-continuity`, `uniform-convergence-of-functions`, and `approximation-and-compactness-in-ck`; the spec lists only `the-fundamental-theorems-of-calculus` and `approximation-and-compactness-in-ck`.
- RC-11 prose lists `the-fundamental-theorems-of-calculus`, `equivalent-forms-of-completeness`, and `bounded-variation-and-riemann-stieltjes`; the spec lists only `the-fundamental-theorems-of-calculus`.

The manifest preserves the spec verbatim. No batch-local ruling is made on either drift.

## Applyable prose-scaffold amendments

### Amendment B3-1 — correct and make explicit the Peano proof route

- File: `research/plan-realanalysis-completion-track.md`
- Section: `RC-10 Picard–Lindelöf, Grönwall and First-Order ODEs`
- Exact old text: `**Peano's existence theorem** from Arzelà–Ascoli, giving existence without uniqueness under continuity alone — the library has \`thm-arzela-ascoli-for-real-ck\` and this is its natural consumer.`
- Exact new text: `**Peano's existence theorem** from Euler polygonal approximations: their uniform boundedness and equicontinuity give a uniformly convergent subsequence by a specialised finite-dimensional Arzelà–Ascoli argument, and the vanishing Euler defect yields the Volterra equation. Do not use Picard iterates for this compactness proof; they need not have a subsequence converging to a solution under continuity alone.`
- Reason: Lebl's current errata expressly withdraws the Picard-iterate/Arzelà–Ascoli outline; Teschl §2.7 supplies the correct Euler-polygonal proof.

### Amendment B3-2 — reuse the published Volterra counterexample

- File: `research/plan-realanalysis-completion-track.md`
- Section: `RC-11 The Gauge Integral and Cousin's Lemma`
- Exact old text: `**B page.** Volterra's function, differentiable with bounded derivative that is not Riemann integrable, integrated by HK;`
- Exact new text: `**B page.** \`fs-every-derivative-is-riemann-integrable\`, refuted by the already-published \`cex-volterra-bounded-derivative-not-riemann-integrable\`, with the HK derivative theorem giving the correct replacement;`
- Reason: the construction is already published and immutable; reminting it would violate reuse discipline.

### Amendment B3-3 — move the Lebesgue comparison to where both integrals exist

- File: `research/plan-realanalysis-completion-track.md`
- Section: RC-11 ledger
- Exact old text: `- \`fs-the-hk-integral-strictly-extends-the-lebesgue-integral-in-both-directions\` — FALSE; the correct relation is stated, and the Lebesgue half is left to \`measure-theory\`.`
- Exact new text: `- Defer \`fs-the-hk-integral-strictly-extends-the-lebesgue-integral-in-both-directions\` to \`the-lebesgue-and-riemann-integrals-compared\`, where the Lebesgue integral is defined. On RC-11 use the in-scope \`cex-henstock-kurzweil-integrability-is-not-absolute\` and \`fs-henstock-kurzweil-integrable-implies-riemann-integrable\`.`
- Reason: a false statement and its refutation cannot be authored before one side of the claimed comparison is defined.

### Amendment B3-4 — update RC-11's primary source

- File: `research/plan-realanalysis-completion-track.md`
- Section: §7.2 per-pair backing table
- Exact old text: `| RC-11 | S12 §1.21 (the generalized Riemann integral) | S11 §1.21 and §4.5.3 (Cousin's property) | S20 for the choice-cost note only |`
- Exact new text: `| RC-11 | A. Fonda, *The Kurzweil–Henstock Integral for Undergraduates*, Ch. 1 §§1.1–1.16 | A. Bruckner, J. Bruckner and B. Thomson, *Real Analysis*, §§1.2.1–1.2.2 and §1.21 | Fonda is the complete treatment for Cauchy, Saks–Henstock, noncompact integration and Hake; BBT independently supplies Cousin, the generalized Riemann definition, the derivative route and Cauchy extension. |`
- Reason: BBT §1.21 is a brief preview and three exercises; it does not contain the Saks–Henstock or Hake development attributed to the pair.

## Web research ledger

### ODE pair

- [Teschl, *Ordinary Differential Equations and Dynamical Systems*, Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf): definitions, Volterra equation, Picard–Lindelöf, Weissinger and factorial error bounds, Grönwall, continuous dependence, maximal solutions, compact escape, Euler polygons, Peano, and Osgood. Smooth dependence and regular perturbation were harvested and sent to `euclidean-ordinary-differential-equations-with-smooth-dependence`.
- [Lebl, *Basic Analysis I*, §6.3](https://www.jirka.org/ra/html/sec_picard.html): independent scalar Picard proof, exponential iterates, quadratic blowup, nonuniqueness for the square-root field, the Dirichlet right-hand side with no solution, and the integrating-factor exercise.
- Convention agreement: both use nonautonomous first-order systems/IVPs and a Lipschitz condition in the state variable. Teschl formulates the system in `R^n`; Lebl's principal theorem is scalar. The scaffold uses the vector formulation.
- Convention disagreement: Teschl's improved Picard theorem removes the short-time contraction restriction by Weissinger; Lebl uses a direct contraction on a shorter interval. The scaffold states local existence via Banach and separately proves the factorial/Weissinger extension.
- Mathematical correction found during research: Lebl's current errata says Picard iterates need not converge to a Peano solution under continuity alone. The scaffold uses Euler polygons.

### Gauge-integral pair

- [Fonda, *The Kurzweil–Henstock Integral for Undergraduates*, Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf): P-partitions, gauges, Cousin, compact HK integration, algebra/order, the derivative FTC, primitives, integration by parts and substitution, Cauchy, subinterval additivity, Saks–Henstock, Riemann agreement, noncompact integrals, comparison, conditional sine integration, and Hake.
- [Bruckner–Bruckner–Thomson, *Real Analysis*, §§1.2 and 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf): independent Cousin/bisection treatment, Heine–Borel consequence, generalized Riemann definition, derivative motivation, Volterra, the irrational-indicator exercise, elementary algebra, and Cauchy extension.
- Convention disagreement: Fonda requires each tagged cell to lie in the centered gauge interval; BBT states the equivalent length-below-gauge form. The scaffold uses centered containment because it records the tag geometry explicitly.
- Naming disagreement: Fonda says “P-partition” and unqualified “integrable”; BBT says “generalized Riemann integral.” The scaffold says “tagged partition” and “Henstock–Kurzweil integral.”

The exact source-heading harvest and every disposition are in `research/frontier-16-batch-3.coverage.json`. The structural checklist reports 104 harvested rows without errors.

## Source-fetch status

The four URLs above were opened as substantive full bodies through web research. The required local command was also run:

`node tools/source-fetch-check.mjs --coverage research/frontier-16-batch-3.coverage.json --stamp`

It failed immediately with `EAI_AGAIN` for all four hosts because this sandbox cannot resolve external DNS. Consequently the coverage file deliberately has no `fetch_verified` objects. This is a real gate blocker, not a claim that the URLs are dead; a network-enabled engine process must produce the stamps.

## Planned summaries for Step 5

### `picard-lindelof-and-first-order-odes`

The fundamental theorems of calculus turn a differentiable vector-valued initial value problem into an integral equation and recover a derivative from a continuous integral. Compactness in spaces of continuous functions supplies the subsequence mechanism used for continuous vector fields, while the supremum metric provides the setting for fixed-point iteration and stability estimates.

A local state-Lipschitz condition makes the Picard operator contract on a sufficiently short closed curve ball, giving Picard–Lindelöf existence, uniqueness, and explicit iteration errors. Grönwall's inequality yields continuous dependence on initial data and parameters. Compatible local solutions glue to one maximal solution, whose finite endpoints force escape from compact subsets. Euler polygonal approximations and a specialised Arzelà–Ascoli argument then prove Peano existence under continuity alone, while Osgood's criterion records a useful uniqueness hypothesis weaker than Lipschitz continuity.

### `the-gauge-integral-and-cousins-lemma`

Tagged Riemann sums approximate an integral by sampling one point in each partition interval, and the fundamental theorem evaluates an integrable derivative by its endpoint increment. A gauge replaces one global mesh bound by a positive radius depending on the tag. Cousin's lemma, proved from nested-interval completeness, ensures that every gauge actually admits a fine tagged partition.

The Henstock–Kurzweil integral controls all partitions fine for one gauge. Its uniqueness, linearity, monotonicity, subinterval additivity, Cauchy criterion, and Saks–Henstock estimate lead to agreement with the Riemann integral and to integration by parts and substitution. Every derivative is integrable without a prior boundedness or integrability hypothesis. Compact truncation limits define integrals at missing or infinite endpoints, comparison tests control their tails, and Hake's theorem shows that a finite missing endpoint can be filled with an arbitrary finite value without enlarging the integral.

Both B pages receive no authored summary body.

## Component provenance plan

No AI-generated statement or construction is planned. Therefore no `generation` block and no generated-statement counterexample-search obligation arises. Every statement is directly source-backed or a materially adapted version of a harvested source statement; every local proof is an adaptation organised around this library's actual dependencies.

| Item | Statement/construction | Proof/verification | Rationale and Step-5 references |
|---|---|---|---|
| `def-first-order-ode-initial-value-problem-and-solution` | literature-derived | not-applicable | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the convention; the library statement fixes notation and boundary clauses without a proof component. |
| `def-locally-lipschitz-in-the-state-variable` | literature-derived | not-applicable | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the convention; the library statement fixes notation and boundary clauses without a proof component. |
| `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `def-picard-operator-and-picard-iterates` | literature-derived | not-applicable | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the convention; the library statement fixes notation and boundary clauses without a proof component. |
| `lem-vector-valued-continuous-curve-space-is-complete` | ai-altered | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `lem-picard-operator-preserves-a-closed-curve-ball` | ai-altered | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `lem-picard-operator-is-a-short-time-contraction` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-picard-lindelof-local-existence-and-uniqueness` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `cor-uniform-picard-lindelof-for-nearby-initial-values` | ai-altered | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `lem-weissinger-fixed-point-criterion` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `prop-picard-iteration-converges-with-explicit-error-bounds` | ai-altered | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-gronwall-integral-inequality` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `cor-lipschitz-ode-uniqueness-and-stability-estimate` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-continuous-dependence-of-odes-on-initial-data-and-parameters` | ai-altered | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `def-maximal-ode-solution` | literature-derived | not-applicable | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the convention; the library statement fixes notation and boundary clauses without a proof component. |
| `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-existence-and-uniqueness-of-a-maximal-ode-solution` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `lem-ode-extension-from-a-compact-interior-region` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `cor-finite-maximal-time-forces-escape-from-every-compact-set` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `cor-globally-lipschitz-odes-have-global-solutions` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-first-order-linear-ode-integrating-factor` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence` | ai-altered | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-peano-local-existence-for-continuous-odes` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `def-modulus-of-continuity-and-osgood-condition` | literature-derived | not-applicable | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the convention; the library statement fixes notation and boundary clauses without a proof component. |
| `thm-osgood-uniqueness-criterion-for-first-order-odes` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `ex-picard-iteration-for-y-prime-equals-y` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `ex-quadratic-ode-finite-time-blowup` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `cex-continuous-ode-with-nonunique-delayed-solutions` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `cex-discontinuous-right-hand-side-with-no-local-solution` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `cex-uniqueness-does-not-require-local-lipschitz-continuity` | ai-altered | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `fs-continuity-of-the-right-hand-side-guarantees-unique-ode-solutions` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `fs-a-local-ode-solution-exists-on-the-whole-domain-of-the-vector-field` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `fs-local-lipschitz-continuity-is-necessary-for-ode-uniqueness` | literature-derived | ai-altered | [Teschl Ch. 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) and [Lebl §6.3](https://www.jirka.org/ra/html/sec_picard.html) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `def-gauge-and-fine-tagged-partition` | literature-derived | not-applicable | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the convention; the library statement fixes notation and boundary clauses without a proof component. |
| `thm-cousins-lemma-for-gauges` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `def-henstock-kurzweil-integral-on-a-compact-interval` | literature-derived | not-applicable | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the convention; the library statement fixes notation and boundary clauses without a proof component. |
| `prop-henstock-kurzweil-integral-is-unique` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-linearity-of-the-henstock-kurzweil-integral` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-monotonicity-of-the-henstock-kurzweil-integral` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-henstock-kurzweil-cauchy-criterion` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-saks-henstock-lemma` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-riemann-integrable-functions-are-henstock-kurzweil-integrable` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-every-derivative-is-henstock-kurzweil-integrable` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `cor-henstock-kurzweil-integration-by-parts` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `cor-henstock-kurzweil-substitution-for-derivatives` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `def-henstock-kurzweil-integral-on-a-noncompact-interval` | literature-derived | not-applicable | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the convention; the library statement fixes notation and boundary clauses without a proof component. |
| `thm-cauchy-criterion-for-noncompact-henstock-kurzweil-integrals` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-comparison-tests-for-noncompact-henstock-kurzweil-integrals` | ai-altered | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `thm-hake-extension-theorem-for-henstock-kurzweil-integrals` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `ex-dirichlet-function-is-henstock-kurzweil-integrable` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `ex-unbounded-derivative-evaluated-by-henstock-kurzweil` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `ex-sine-over-x-has-a-noncompact-henstock-kurzweil-integral` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `ex-cousins-lemma-gives-heine-borel-on-an-interval` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `fs-every-derivative-is-riemann-integrable` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `fs-henstock-kurzweil-integrable-functions-are-bounded` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `cex-henstock-kurzweil-integrability-is-not-absolute` | ai-altered | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `fs-henstock-kurzweil-integrable-implies-riemann-integrable` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |
| `fs-every-henstock-kurzweil-integrable-function-is-a-derivative` | literature-derived | ai-altered | [Fonda Ch. 1](https://dmi.units.it/~fonda/p2017_book_KH.pdf) and [Bruckner–Bruckner–Thomson §§1.2, 1.21](https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf) supplies the statement or exact witness. The Step-5 derivation is locally reorganized around published dependencies and the proof contract. |

## Proof decomposition and corollary pass

### ODE pair

The long Picard–Lindelöf argument is decomposed into the vector-valued curve-space completeness lemma, invariant curve ball, short-time contraction, local theorem, uniform nearby-data corollary, Weissinger criterion, and explicit geometric/factorial error proposition.

The continuation theory is decomposed into overlap agreement/gluing, maximal-solution existence, extension from compact interior data, compact escape, and the global-Lipschitz corollary.

Peano is decomposed into Euler-polygonal boundedness/equicontinuity, specialised vector-valued Arzelà–Ascoli, and the final vanishing-defect limit argument. This explicitly avoids the invalid Picard-iterate route.

The corollary pass added uniform local existence for nearby initial values, the Grönwall stability/uniqueness estimate, compact escape at finite maximal time, global existence for globally Lipschitz fields, and the Osgood correction showing Lipschitz is not necessary.

### Gauge-integral pair

The foundational proof is decomposed into gauge fineness, Cousin, HK definition, uniqueness, linearity, monotonicity, subinterval additivity, the compact Cauchy criterion, and Saks–Henstock.

The sharp FTC is followed by separate integration-by-parts and substitution corollaries. Noncompact theory is decomposed into its definition, tail Cauchy criterion, comparison/absolute/limit-comparison theorem, and Hake extension.

The corollary pass added the two derivative-calculus formulas and the comparison package. It also records the in-scope non-absolute counterexample rather than attempting a premature Lebesgue comparison.

Both A pages remain well below the 60-item ceiling; no split is proposed. Their recounted sizes appear in the per-page lists below.

## Boundary and proof-obligation highlights

The complete numbered input map, direct citation clauses, eight boundary dispositions, and finite-smoke selections are in `research/frontier-16-batch-3.proof-contracts.json`. Its scope contains every proof-bearing item in the owned page objects.

High-risk obligations retained for Step 5:

- The Picard ball proof must separate $M=0$ and $L=0$ before any quotient, require $hM\le r$ and $Lh<1$ for the Banach route, and use factorial bounds for the larger Weissinger interval.
- Continuous dependence must compare solutions only on a common compact time-state-parameter cylinder.
- The maximal solution is the pointwise union made well defined by uniqueness; it is not a choice of representatives.
- Compact continuation must upgrade convergence of a subsequence of states to convergence of the whole curve using a local vector-field bound.
- Peano must use Euler polygons, include the final shortened mesh cell, pass to the limit componentwise, and make no uniqueness claim.
- Osgood must regularise the zero difference before separating variables and must prove both time directions.
- Cousin must include endpoint limiting points and the one-piece partition contradiction.
- HK restriction/additivity must handle tags at the cut; Saks–Henstock must allow an empty partial partition.
- The derivative FTC must split each cell at its tag, include one-sided endpoint derivatives, and telescope with the correct orientation.
- Hake must distinguish a finite missing endpoint from an infinite endpoint and prove independence of the assigned endpoint value.
- The sine-over-$x$ example asserts convergence only; the unproved value $\pi/2$ is deliberately absent.

No registered finite-smoke check in `QUALITY-CONTROLS.md` models these analytic statements, so every `finite_smoke` array is empty. This is not presented as computational evidence.

## Exact same-batch clauses bound by the proof contracts

Step 5 must include these clauses verbatim in the named item's Definition, Statement, Counterexample, or Example section so same-batch citation checks remain faithful:

- `def-locally-lipschitz-in-the-state-variable`: `On every compact time-state cylinder the state-variable inequality holds with one finite constant $L$.`
- `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`: `A curve solves the IVP if and only if it satisfies the associated Volterra integral equation.`
- `thm-picard-lindelof-local-existence-and-uniqueness`: `a unique local solution of the IVP exists on some interval around the initial time`
- `lem-weissinger-fixed-point-criterion`: `Summably contracting iterates have a unique fixed point and the iteration tail bounds its error.`
- `thm-gronwall-integral-inequality`: `If a nonnegative function is bounded by an initial error plus its coefficient-weighted integral, Grönwall gives the exponential estimate.`
- `thm-gronwall-integral-inequality`: `Gronwall's integral inequality converts an additive forcing error into an exponential stability bound.`
- `cor-lipschitz-ode-uniqueness-and-stability-estimate`: `Coincident initial values give uniqueness on every common interval.`
- `thm-picard-lindelof-local-existence-and-uniqueness`: `a unique local solution exists on an interval around the initial time`
- `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps`: `Locally unique solutions through the same data agree on every overlap.`
- `lem-ode-extension-from-a-compact-interior-region`: `A solution whose graph has a sequence approaching a compact interior endpoint state extends past that endpoint.`
- `thm-gronwall-integral-inequality`: `Gronwall bounds a nonnegative function by its forcing and a linear integral term.`
- `cor-finite-maximal-time-forces-escape-from-every-compact-set`: `At a finite maximal endpoint the solution leaves every compact subset of the ODE domain.`
- `lem-vector-valued-continuous-curve-space-is-complete`: `Continuous $\mathbb R^n$-valued curves on a compact interval are complete in the supremum metric.`
- `lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous`: `Euler polygonal approximations on a compact cylinder are uniformly bounded and equicontinuous.`
- `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence`: `A uniformly bounded equicontinuous sequence of $\mathbb R^n$-valued curves has a uniformly convergent subsequence.`
- `cor-finite-maximal-time-forces-escape-from-every-compact-set`: `If the positive maximal endpoint is finite, the solution must eventually leave every compact set.`
- `thm-osgood-uniqueness-criterion-for-first-order-odes`: `The Osgood divergence condition gives uniqueness of solutions through the same initial value.`
- `cex-continuous-ode-with-nonunique-delayed-solutions`: `$y'=2\sqrt{|y|}$ has distinct delayed-start solutions through the origin.`
- `ex-quadratic-ode-finite-time-blowup`: `$y'=y^2$, $y(0)=1$, has maximal solution $y(t)=(1-t)^{-1}$ on $(-\infty,1)$.`
- `cex-uniqueness-does-not-require-local-lipschitz-continuity`: `An almost-Lipschitz vector field has a unique solution through zero but is not locally Lipschitz there.`
- `thm-cousins-lemma-for-gauges`: `every gauge on a compact interval admits a fine tagged partition`
- `def-henstock-kurzweil-integral-on-a-compact-interval`: `For every $\varepsilon>0$ one gauge controls every fine tagged Riemann sum.`
- `thm-linearity-of-the-henstock-kurzweil-integral`: `The Henstock–Kurzweil integral is linear.`
- `thm-cousins-lemma-for-gauges`: `every gauge admits a fine tagged partition`
- `thm-cousins-lemma-for-gauges`: `every gauge admits at least one fine tagged partition`
- `thm-cousins-lemma-for-gauges`: `every gauge on each complementary compact interval admits a fine tagged partition`
- `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity`: `Henstock–Kurzweil integrals restrict to subintervals and add over adjacent intervals.`
- `thm-every-derivative-is-henstock-kurzweil-integrable`: `Every derivative is Henstock–Kurzweil integrable and its integral is the endpoint increment.`
- `thm-every-derivative-is-henstock-kurzweil-integrable`: `Every derivative is Henstock–Kurzweil integrable and evaluates by endpoint difference.`
- `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity`: `For points $u,v,w$, $\int_u^w f=\int_u^v f+\int_v^w f$ whenever the compact pieces are integrable.`
- `thm-monotonicity-of-the-henstock-kurzweil-integral`: `If $f(x)\le g(x)$ on a compact interval, then $\int f\le\int g$.`
- `thm-cauchy-criterion-for-noncompact-henstock-kurzweil-integrals`: `Noncompact integrability is equivalent to uniformly small tail integrals.`
- `thm-cauchy-criterion-for-noncompact-henstock-kurzweil-integrals`: `A missing finite-endpoint integral exists exactly when all sufficiently late tail integrals are small.`
- `thm-saks-henstock-lemma`: `Fine partial tagged partitions have uniformly small sums of local integration errors.`
- `thm-every-derivative-is-henstock-kurzweil-integrable`: `Every derivative is Henstock–Kurzweil integrable and its integral equals the endpoint increment.`
- `thm-riemann-integrable-functions-are-henstock-kurzweil-integrable`: `Every Riemann integrable function is Henstock–Kurzweil integrable with the same integral.`
- `thm-every-derivative-is-henstock-kurzweil-integrable`: `Every derivative is Henstock–Kurzweil integrable.`
- `ex-unbounded-derivative-evaluated-by-henstock-kurzweil`: `$F(x)=x^2\sin(1/x^2)$ has an unbounded derivative whose Henstock–Kurzweil integral is $\sin 1$.`
- `ex-unbounded-derivative-evaluated-by-henstock-kurzweil`: `The derivative $f$ of $x^2\sin(1/x^2)$ is Henstock–Kurzweil integrable on $[0,1]$.`
- `thm-hake-extension-theorem-for-henstock-kurzweil-integrals`: `A finite-endpoint noncompact integral extends to a proper HK integral if and only if the truncation limit exists.`
- `ex-dirichlet-function-is-henstock-kurzweil-integrable`: `The indicator of the irrationals is Henstock–Kurzweil integrable with integral $1$.`

## Dependency closure

The manifest has 64 distinct external dependencies. Every file was opened from disk; every one has `status: published`; every statement provenance is `literature-derived` or `ai-altered`; and every dependency is homed on a page with order below 288.00019. There are no legacy-unclassified dependencies, no AI-generated dependency targets, no homeless dependencies, and no published dependency requiring repair.

External dependency ids:

`cex-dirichlet-is-not-riemann-integrable`, `cex-volterra-bounded-derivative-not-riemann-integrable`, `cor-banach-error-estimates`, `cor-bolzano-weierstrass-in-rn`, `cor-exponential-reciprocal-and-positivity`, `cor-primitives-of-a-continuous-function`, `cor-vector-valued-ftc-and-lipschitz-bound`, `def-complete-metric-space`, `def-derivative`, `def-dirichlet-and-thomae-functions`, `def-equicontinuity-and-boundedness-in-ck`, `def-euclidean-inner-product`, `def-factorial-and-falling-factorial`, `def-improper-integral-at-a-finite-endpoint`, `def-interval`, `def-limits-at-infinity`, `def-lipschitz-holder-contraction`, `def-metric-ball`, `def-metric-uniform-continuity`, `def-monotone-function`, `def-one-sided-limits`, `def-oriented-integral`, `def-rational-power`, `def-series`, `def-tagged-partition-and-riemann-sum`, `def-vector-valued-derivative-and-integral`, `def-vector-valued-functions-limits-and-continuity`, `lem-absolute-convergence-implies-convergence`, `lem-finite-sum-laws`, `lem-geometric-sequence-null`, `lem-metrics-on-rn`, `lem-q-and-irrationals-dense-r`, `thm-algebra-of-derivatives`, `thm-all-norms-on-rn-are-equivalent`, `thm-banach-fixed-point`, `thm-c-k-complete-in-the-sup-metric`, `thm-cauchy-criterion-via-lub`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-chain-rule`, `thm-componentwise-convergence-and-completeness`, `thm-componentwise-limits-and-continuity`, `thm-connected-subsets-of-r-are-intervals`, `thm-continuous-implies-integrable`, `thm-darboux-equals-riemann`, `thm-darboux-theorem-for-derivatives`, `thm-derivative-of-exponential`, `thm-dirichlet-test-for-improper-integrals`, `thm-extreme-value-metric`, `thm-ftc-first-part`, `thm-ftc-second-part`, `thm-heine-borel-r`, `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `thm-intermediate-value`, `thm-linearity-of-the-integral`, `thm-logarithm-derivative-and-integral`, `thm-monotonicity-of-the-integral`, `thm-nested-interval-property`, `thm-norm-inequality-for-the-vector-valued-integral`, `thm-picard-iterates-for-exponential`, `thm-quarter-turn-values-and-shift-formulas`, `thm-rationals-countable`, `thm-sine-and-cosine-derivatives`, `thm-uniform-limit-interchanges-riemann-integration`

The source checks of Teschl, Lebl, Fonda, and BBT independently confirm the exact conventions used by the load-bearing ODE and HK results. AI-altered published inputs such as Banach fixed point, vector-valued integration, Euclidean compactness, and curve-space completeness were also checked directly from their actual Statements; their exact claims are sufficient for the scaffolded use.

## New-id and reuse report

The exact fixed-string search was run for every proposed id:

`for id in <all-final-ids>; do rg -F -q "$id" items research/plan-spec.json; done`

Every final id reported `NEW`. Semantic searches for Picard–Lindelöf, Volterra integral equations, Grönwall, maximal ODE solutions, Weissinger, Euler polygons, Osgood, gauges, Saks–Henstock, Hake, and HK uniqueness found no duplicate planned or published statement. The search did find the published `cex-volterra-bounded-derivative-not-riemann-integrable`, which is reused rather than reminted.

- `def-first-order-ode-initial-value-problem-and-solution`
- `def-locally-lipschitz-in-the-state-variable`
- `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`
- `def-picard-operator-and-picard-iterates`
- `lem-vector-valued-continuous-curve-space-is-complete`
- `lem-picard-operator-preserves-a-closed-curve-ball`
- `lem-picard-operator-is-a-short-time-contraction`
- `thm-picard-lindelof-local-existence-and-uniqueness`
- `cor-uniform-picard-lindelof-for-nearby-initial-values`
- `lem-weissinger-fixed-point-criterion`
- `prop-picard-iteration-converges-with-explicit-error-bounds`
- `thm-gronwall-integral-inequality`
- `cor-lipschitz-ode-uniqueness-and-stability-estimate`
- `thm-continuous-dependence-of-odes-on-initial-data-and-parameters`
- `def-maximal-ode-solution`
- `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps`
- `thm-existence-and-uniqueness-of-a-maximal-ode-solution`
- `lem-ode-extension-from-a-compact-interior-region`
- `cor-finite-maximal-time-forces-escape-from-every-compact-set`
- `cor-globally-lipschitz-odes-have-global-solutions`
- `thm-first-order-linear-ode-integrating-factor`
- `lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous`
- `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence`
- `thm-peano-local-existence-for-continuous-odes`
- `def-modulus-of-continuity-and-osgood-condition`
- `thm-osgood-uniqueness-criterion-for-first-order-odes`
- `ex-picard-iteration-for-y-prime-equals-y`
- `ex-quadratic-ode-finite-time-blowup`
- `cex-continuous-ode-with-nonunique-delayed-solutions`
- `cex-discontinuous-right-hand-side-with-no-local-solution`
- `cex-uniqueness-does-not-require-local-lipschitz-continuity`
- `fs-continuity-of-the-right-hand-side-guarantees-unique-ode-solutions`
- `fs-a-local-ode-solution-exists-on-the-whole-domain-of-the-vector-field`
- `fs-local-lipschitz-continuity-is-necessary-for-ode-uniqueness`
- `def-gauge-and-fine-tagged-partition`
- `thm-cousins-lemma-for-gauges`
- `def-henstock-kurzweil-integral-on-a-compact-interval`
- `prop-henstock-kurzweil-integral-is-unique`
- `thm-linearity-of-the-henstock-kurzweil-integral`
- `thm-monotonicity-of-the-henstock-kurzweil-integral`
- `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity`
- `thm-henstock-kurzweil-cauchy-criterion`
- `thm-saks-henstock-lemma`
- `thm-riemann-integrable-functions-are-henstock-kurzweil-integrable`
- `thm-every-derivative-is-henstock-kurzweil-integrable`
- `cor-henstock-kurzweil-integration-by-parts`
- `cor-henstock-kurzweil-substitution-for-derivatives`
- `def-henstock-kurzweil-integral-on-a-noncompact-interval`
- `thm-cauchy-criterion-for-noncompact-henstock-kurzweil-integrals`
- `thm-comparison-tests-for-noncompact-henstock-kurzweil-integrals`
- `thm-hake-extension-theorem-for-henstock-kurzweil-integrals`
- `ex-dirichlet-function-is-henstock-kurzweil-integrable`
- `ex-unbounded-derivative-evaluated-by-henstock-kurzweil`
- `ex-sine-over-x-has-a-noncompact-henstock-kurzweil-integral`
- `ex-cousins-lemma-gives-heine-borel-on-an-interval`
- `fs-every-derivative-is-riemann-integrable`
- `fs-henstock-kurzweil-integrable-functions-are-bounded`
- `cex-henstock-kurzweil-integrability-is-not-absolute`
- `fs-henstock-kurzweil-integrable-implies-riemann-integrable`
- `fs-every-henstock-kurzweil-integrable-function-is-a-derivative`

## Per-page item lists

### `picard-lindelof-and-first-order-odes` — 26 items

1. `def-first-order-ode-initial-value-problem-and-solution` — definition — First-order systems, initial value problems, and solutions on intervals
2. `def-locally-lipschitz-in-the-state-variable` — definition — Local Lipschitz continuity in the state variable, locally uniform in time and parameters
3. `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation` — proposition — A first-order initial value problem is equivalent to its Volterra integral equation
4. `def-picard-operator-and-picard-iterates` — definition — The Picard operator and Picard iterates on a closed ball of continuous curves
5. `lem-vector-valued-continuous-curve-space-is-complete` — lemma — Continuous $\mathbb{R}^n$-valued curves on a compact interval form a complete supremum-metric space
6. `lem-picard-operator-preserves-a-closed-curve-ball` — lemma — A bounded vector field makes the Picard operator preserve a sufficiently short closed curve ball
7. `lem-picard-operator-is-a-short-time-contraction` — lemma — A state-Lipschitz vector field makes the Picard operator a contraction when $Lh<1$
8. `thm-picard-lindelof-local-existence-and-uniqueness` — theorem — Picard-Lindelöf local existence and uniqueness for first-order systems
9. `cor-uniform-picard-lindelof-for-nearby-initial-values` — corollary — Nearby initial values share one Picard–Lindelöf time interval and one state cylinder
10. `lem-weissinger-fixed-point-criterion` — lemma — Weissinger's fixed-point criterion for summably contracting iterates
11. `prop-picard-iteration-converges-with-explicit-error-bounds` — proposition — Picard iteration converges with geometric short-time and factorial cylinder error bounds
12. `thm-gronwall-integral-inequality` — theorem — Gronwall's integral inequality with variable and constant coefficients
13. `cor-lipschitz-ode-uniqueness-and-stability-estimate` — corollary — The Grönwall estimate for two solutions of a Lipschitz ODE
14. `thm-continuous-dependence-of-odes-on-initial-data-and-parameters` — theorem — Continuous dependence of ODE solutions on initial data and parameters
15. `def-maximal-ode-solution` — definition — Extensions, maximal solutions, maximal intervals, and global solutions
16. `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps` — lemma — Locally unique ODE solutions agree on overlaps and glue across a common endpoint
17. `thm-existence-and-uniqueness-of-a-maximal-ode-solution` — theorem — Every Picard–Lindelöf initial value problem has one maximal solution on an open interval
18. `lem-ode-extension-from-a-compact-interior-region` — lemma — A solution whose graph approaches a compact interior region at a finite endpoint extends past that endpoint
19. `cor-finite-maximal-time-forces-escape-from-every-compact-set` — corollary — At a finite maximal time an ODE solution leaves every compact subset of the domain
20. `cor-globally-lipschitz-odes-have-global-solutions` — corollary — A globally state-Lipschitz vector field on $\mathbb R\times\mathbb R^n$ has global solutions
21. `thm-first-order-linear-ode-integrating-factor` — theorem — A scalar first-order linear ODE has a unique solution given by the integrating-factor formula
22. `lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous` — lemma — Euler polygonal approximations for a continuous ODE are uniformly bounded and equicontinuous
23. `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence` — lemma — A uniformly bounded equicontinuous sequence of $\mathbb R^n$-valued curves has a uniformly convergent subsequence
24. `thm-peano-local-existence-for-continuous-odes` — theorem — Peano local existence for a continuous first-order system
25. `def-modulus-of-continuity-and-osgood-condition` — definition — Moduli of continuity and the Osgood divergence condition
26. `thm-osgood-uniqueness-criterion-for-first-order-odes` — theorem — Osgood's criterion gives uniqueness without a Lipschitz bound

### `picard-lindelof-and-first-order-odes-examples` — 8 items

1. `ex-picard-iteration-for-y-prime-equals-y` — example — Picard iteration for $y'=y$, $y(0)=1$, recovers the exponential series
2. `ex-quadratic-ode-finite-time-blowup` — example — $y'=y^2$, $y(0)=1$, has maximal solution $y(t)=(1-t)^{-1}$ on $(-\infty,1)$
3. `cex-continuous-ode-with-nonunique-delayed-solutions` — counterexample — $y'=2\sqrt{|y|}$ has a continuum of delayed-start solutions through the origin
4. `cex-discontinuous-right-hand-side-with-no-local-solution` — counterexample — The Dirichlet right-hand side gives a first-order equation with no solution
5. `cex-uniqueness-does-not-require-local-lipschitz-continuity` — counterexample — An almost-Lipschitz vector field has a unique solution through zero but is not locally Lipschitz there
6. `fs-continuity-of-the-right-hand-side-guarantees-unique-ode-solutions` — false statement — False: continuity of the right-hand side guarantees unique ODE solutions
7. `fs-a-local-ode-solution-exists-on-the-whole-domain-of-the-vector-field` — false statement — False: a local ODE solution extends across the whole time-domain of its vector field
8. `fs-local-lipschitz-continuity-is-necessary-for-ode-uniqueness` — false statement — False: local Lipschitz continuity is necessary for uniqueness of an ODE solution

### `the-gauge-integral-and-cousins-lemma` — 17 items

1. `def-gauge-and-fine-tagged-partition` — definition — Gauges and gauge-fine tagged partitions of a compact interval
2. `thm-cousins-lemma-for-gauges` — theorem — Cousin's lemma: every gauge on a compact interval admits a fine tagged partition
3. `def-henstock-kurzweil-integral-on-a-compact-interval` — definition — The Henstock–Kurzweil integral on a compact interval
4. `prop-henstock-kurzweil-integral-is-unique` — proposition — The Henstock–Kurzweil integral has at most one value
5. `thm-linearity-of-the-henstock-kurzweil-integral` — theorem — Linearity of the Henstock–Kurzweil integral
6. `thm-monotonicity-of-the-henstock-kurzweil-integral` — theorem — Monotonicity of the Henstock–Kurzweil integral
7. `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity` — theorem — Henstock–Kurzweil integrability on subintervals and additivity over adjacent intervals
8. `thm-henstock-kurzweil-cauchy-criterion` — theorem — The Cauchy criterion for Henstock–Kurzweil integrability
9. `thm-saks-henstock-lemma` — theorem — The Saks–Henstock lemma for fine partial tagged partitions
10. `thm-riemann-integrable-functions-are-henstock-kurzweil-integrable` — theorem — Every Riemann integrable function is Henstock–Kurzweil integrable with the same integral
11. `thm-every-derivative-is-henstock-kurzweil-integrable` — theorem — Every derivative is Henstock–Kurzweil integrable and satisfies Newton–Leibniz
12. `cor-henstock-kurzweil-integration-by-parts` — corollary — Henstock–Kurzweil integration by parts for differentiable factors
13. `cor-henstock-kurzweil-substitution-for-derivatives` — corollary — Henstock–Kurzweil substitution for a derivative composed with a differentiable map
14. `def-henstock-kurzweil-integral-on-a-noncompact-interval` — definition — Henstock–Kurzweil integrals on half-open and unbounded intervals by compact truncation limits
15. `thm-cauchy-criterion-for-noncompact-henstock-kurzweil-integrals` — theorem — The Cauchy criterion for a Henstock–Kurzweil integral at a missing endpoint
16. `thm-comparison-tests-for-noncompact-henstock-kurzweil-integrals` — theorem — Comparison, absolute-convergence, and limit-comparison tests for noncompact Henstock–Kurzweil integrals
17. `thm-hake-extension-theorem-for-henstock-kurzweil-integrals` — theorem — Hake's theorem: a finite-endpoint generalized integral is a proper Henstock–Kurzweil integral after assigning the endpoint value

### `the-gauge-integral-and-cousins-lemma-examples` — 9 items

1. `ex-dirichlet-function-is-henstock-kurzweil-integrable` — example — The indicator of the irrationals is Henstock–Kurzweil integrable with integral $1$
2. `ex-unbounded-derivative-evaluated-by-henstock-kurzweil` — example — $F(x)=x^2\sin(1/x^2)$ has an unbounded derivative whose Henstock–Kurzweil integral is $\sin 1$
3. `ex-sine-over-x-has-a-noncompact-henstock-kurzweil-integral` — example — $\sin x/x$ has a Henstock–Kurzweil integral on $[0,\infty)$
4. `ex-cousins-lemma-gives-heine-borel-on-an-interval` — example — Cousin's lemma yields the Heine–Borel theorem on a compact interval
5. `fs-every-derivative-is-riemann-integrable` — false statement — False: every derivative is Riemann integrable
6. `fs-henstock-kurzweil-integrable-functions-are-bounded` — false statement — False: every Henstock–Kurzweil integrable function is bounded
7. `cex-henstock-kurzweil-integrability-is-not-absolute` — counterexample — Henstock–Kurzweil integrability does not imply integrability of the absolute value
8. `fs-henstock-kurzweil-integrable-implies-riemann-integrable` — false statement — False: Henstock–Kurzweil integrability implies Riemann integrability
9. `fs-every-henstock-kurzweil-integrable-function-is-a-derivative` — false statement — False: every Henstock–Kurzweil integrable function is a derivative

## Implication-direction ledgers

### ODE companion

- Continuity does not imply uniqueness: `fs-continuity-of-the-right-hand-side-guarantees-unique-ode-solutions`.
- Local existence does not imply existence across the vector field's whole domain: `fs-a-local-ode-solution-exists-on-the-whole-domain-of-the-vector-field`.
- Uniqueness does not imply local Lipschitz continuity: `fs-local-lipschitz-continuity-is-necessary-for-ode-uniqueness`.
- Discontinuity may destroy existence entirely: `cex-discontinuous-right-hand-side-with-no-local-solution`.

### Gauge companion

- HK integrability does not imply Riemann integrability: `fs-henstock-kurzweil-integrable-implies-riemann-integrable`.
- HK integrability does not imply boundedness: `fs-henstock-kurzweil-integrable-functions-are-bounded`.
- HK integrability is not absolute: `cex-henstock-kurzweil-integrability-is-not-absolute`.
- HK integrability does not imply being a derivative: `fs-every-henstock-kurzweil-integrable-function-is-a-derivative`.
- Being a derivative does not imply Riemann integrability: `fs-every-derivative-is-riemann-integrable`.

## Forward references and cross-batch dependencies

There are no forward references and no external fallback. Every load-bearing dependency is earlier in the same A/B pair or published below order 288.00019.

This batch needs no item from another `frontier-16` batch. Later differential geometry should consume the local theorem, maximal continuation, and continuous-dependence interface here rather than reminting them; its smooth-dependence page remains the destination for the deferred variational equations.

## Findings for Step-3 Alpha

1. Approve Amendment B3-1, the Euler-polygonal Peano route. Declining it risks authoring a proof from an outline the source's current errata says is invalid.
2. Approve Amendment B3-3, deferring the Lebesgue comparison false statement to `the-lebesgue-and-riemann-integrals-compared`. Declining it forces a statement whose vocabulary and refutation are unavailable at this order.
3. Approve Amendment B3-2, reuse of the published Volterra counterexample. Declining it mints a duplicate immutable id and repeats a long construction.
4. Approve the explicit Weissinger lemma and factorial Picard estimate. Declining them loses Teschl's named quantitative result and leaves only the shorter Banach interval.
5. Approve the specialised, choice-free vector-valued Arzelà–Ascoli lemma. Declining it either overcharges Peano with the general compactness theorem's choice assumptions or leaves the vector compactness step unstated.
6. Approve Osgood's criterion and its almost-Lipschitz example. Declining them leaves the design's “Lipschitz is not necessary” ledger with no precise positive uniqueness mechanism.
7. Approve the HK comparison theorem and the separate integration-by-parts/substitution corollaries. Declining them drops named, locally provable material harvested from Fonda without any page-size pressure.
8. Approve Amendment B3-4, the source correction. Declining it continues to attribute Saks–Henstock and Hake coverage to a BBT section that does not contain them.
9. Preserve the live-spec `requires` arrays pending the stage-1 drift ruling. Changing either array inside this batch would make this batch disagree with the engine's plan.
10. Treat source stamping as an engine/environment blocker: rerun the exact stamp command where DNS is available. Declining that rerun leaves the required fetch gate red.

These recommendations are independent and ordered by mathematical/citational severity before enrichment.

## Gate and command report

- `node tools/coverage-checklist.mjs research/frontier-16-batch-3.coverage.json` — passed without errors or warnings; the exact row total remains mechanically recountable from the coverage file.
- `node tools/content-policy.mjs research/frontier-16-batch-3.pages.json --manifest-only` — passed: 60 scoped items, no errors or warnings.
- External dependency home-order audit — passed: all 64 external dependency ids have a published earlier home.
- `node tools/source-fetch-check.mjs --coverage research/frontier-16-batch-3.coverage.json --stamp` — failed: four `EAI_AGAIN` DNS errors; zero stamps written.
- `node tools/proof-contract.mjs research/frontier-16-batch-3.proof-contracts.json --strict` — run, but expectedly reports every as-yet-unauthored file as missing; all contracts are present, and semantic quote checking cannot run before authoring.
- `validate-plan.mjs research/plan-spec.json` and `depsource.mjs` were not claimed against this unspliced batch. The engine's Step-4 splice is required first.

## Confidence statement

Mathematical confidence is high on the scaffold: the contraction and Weissinger estimates, Grönwall signs, common-cylinder dependence argument, maximal-domain union, compact continuation, Euler/Peano limit, Osgood zero boundary, Cousin bisection, HK Cauchy/Saks–Henstock constants, derivative FTC, comparison tails, and Hake endpoint construction were each checked against the named full-text sources and mapped to exact library dependencies.

I did not verify the final Step-5 prose or precheck stratification because the items do not yet exist. I did not compute the Dirichlet integral value $\pi/2$, and the scaffold does not claim it. I could not mechanically fetch-stamp the sources because DNS is unavailable in this sandbox.
