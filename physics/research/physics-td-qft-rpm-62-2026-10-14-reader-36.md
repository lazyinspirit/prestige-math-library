# Independent reader report — batch 36

Run: physics-td-qft-rpm-62-2026-10-14  
Role: reader  
Scope: batch 36 only

## Opened inventory

Manifest: research/physics-td-qft-rpm-62-2026-10-14-batch-36.pages.json.

Assigned pages:
- library/quantum-field-theory-mathematics/qft-mc03.md
- library/quantum-field-theory-mathematics/qft-mc03-examples.md

Assigned items, read in dependency order:
- items/def-qft-finite-bounded-kraus-instrument.md
- items/lem-qft-finite-instrument-normalization.md
- items/cex-qft-formal-factorial-series.md

The direct item suppliers declared by these carriers were opened before the relevant consumer: def-bounded-linear-operator, def-countable-choice, def-hilbert-space, def-hilbert-space-adjoint, def-operator-norm, def-real-and-complex-inner-product-space, def-space-of-bounded-linear-operators, thm-hilbert-adjoint-properties, def-self-adjoint-positive-unitary-and-normal-operator, def-trace-class-operator, def-trace-of-a-trace-class-operator, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-nuclear-bounded-cyclicity, lem-nrqm-composites-rank-one-operator-calculus, thm-trace-class-is-a-two-sided-banach-operator-ideal, and thm-trace-is-absolutely-convergent-and-basis-independent. These suppliers are marked published in the physics mathematical snapshots.

Also inspected the assigned proof contract research/physics-td-qft-rpm-62-2026-10-14-batch-36.proof-contracts.json. Its claim and citation mappings agree with the item proofs; they were treated as review context, not as verdicts.

## Source checks

- Watrous, The Theory of Quantum Information, author-hosted 2018 pre-publication manuscript, §2.3.1, pp. 100–102, and §2.3.2, pp. 111–113: the first section gives normalized measurement operators and outcome probabilities; the latter gives the normalized Kraus-operator form, conditional update, and general instrument formulation. The item URL timed out when opened, so I checked the current author-hosted copy at https://jhwatrous.github.io/TQI.pdf, which identifies the ©2018 pre-publication draft and contains the cited sections and equations (2.199)–(2.202), (2.255)–(2.261). The source is finite-dimensional, while the assigned definition states its arbitrary-H bounded-operator data explicitly and proves the displayed maps are bounded; it does not claim an arbitrary-instrument representation theorem. Original cited URL: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf.
- Griffiths, Notes on Quantum Information Theory, version 30 Jan. 2004, §7, pp. 1–3, equations (7.2)–(7.9): verifies the finite Kraus-operator normalization, pure-state outcome probabilities, and normalized conditional update cited by the definition. URL: https://www.andrew.cmu.edu/course/33-658/qit7.pdf.
- OpenStax, Calculus Volume 2, §6.1: explicitly treats the series with coefficients n! and gives radius zero; its power-series convention also sets the zeroth power to one at the center. URL: https://openstax.org/books/calculus-volume-2/pages/6-1-power-series-and-functions.
- Howell, Complex Analysis, §4.4: states the complex power-series radius criterion and the ratio-test formula. The assigned counterexample independently proves the needed divergence by the term test. URL: https://complexanalysis.org/web/sec_power-series.html.

## Item review

### def-qft-finite-bounded-kraus-instrument — pass

The definition fixes a nonzero complex Hilbert space, the first-slot-linear inner-product convention, Countable Choice, the bounded-operator space, the adjoint, and a finite outcome/Kraus index family. The normalization, outcome effects, and maps are explicitly stated. The adjoint supplier provides boundedness and the norm identity, and the local estimate establishes that each displayed product and finite sum lies in B(H). Empty Kraus lists are consistently assigned zero. The item expressly limits its claim to this finite Kraus form and makes no apparatus-realization claim.

### lem-qft-finite-instrument-normalization — pass

The proof applies to the finite normalized datum and density operator specified in the statement. The adjoint identities establish positivity of each M* M and each M rho M*; the trace-class ideal supplier establishes trace-class membership; the density expansion and rank-one trace formula give nonnegative outcome traces; and bounded trace cyclicity gives tr(J_a(rho)) = tr(rho E_a). Finite summation with the normalization identity gives total probability one and the effect upper bounds. The positive-probability normalization and zero-probability case are separated correctly, and the pure-state formula follows from the rank-one supplier. No unbounded operator, physical realization, or empirical assertion is used.

### cex-qft-formal-factorial-series — pass

The formal-series object is defined as a coefficient sequence, separate from numerical convergence. For every nonzero complex g, the consecutive term-modulus ratio is (n+1)|g| and eventually exceeds 2, so the terms do not tend to zero and the numerical series diverges. At g=0 the stipulated zeroth-power convention gives value 1. Every positive-radius disk contains a nonzero point of divergence, so the defined radius is exactly zero. The remark limits the conclusion to formal coefficients and makes no claim about a particular QFT expansion.

## Page verdicts

- qft-mc03 — pass. Its summary accurately states the finite bounded instrument definition, the conditional normalization identities, the Countable Choice hypothesis, and the absence of an apparatus-realization claim.
- qft-mc03-examples — pass. Its summary accurately records the factorial-series counterexample and the boundary between formal coefficients and analytic convergence, without asserting a result about a particular physical perturbation series.

## Edits, unresolved defects, and checks

Edits: none. No confirmed defect required an authorized repair.

Uneditable defects: none identified.

No item validators or proof-layout command were run because no item was edited. The existing precheck metadata was not treated as proof acceptance.

Blocker: none.

Coverage limitation: this review checked every assigned carrier and each direct declared item dependency, and checked the cited sources for the assigned items. It did not re-audit the complete transitive dependency closures of the already-published mathematical suppliers.
