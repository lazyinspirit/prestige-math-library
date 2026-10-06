---
id: rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation
kind: remark
title: "Bare $L^1$ data do not license pointwise Poisson summation (recorded)"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
design_row: FR-19
deps: [thm-poisson-summation-under-two-sided-polynomial-decay, cor-piecewise-c-one-fourier-series-converges-to-midpoint-values, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
external_dependency:
  source_url: "https://arxiv.org/pdf/0903.3845"
  exact_statement: "Laugesen, ch. 23, Example 23.2: \"In 1 dimension, if $f=\\mathbf 1_{[-\\pi,2\\pi)}$, then $\\operatorname{Pe}(f)=2\\pi(2\\cdot\\mathbf 1_{[-\\pi,0)}+\\mathbf 1_{[0,\\pi)})$ for $x\\in[-\\pi,\\pi)$, with $\\operatorname{Pe}(f)$ extending $2\\pi$-periodically to $\\mathbb R$.\" Laugesen's Theorem 23.5 then proves the pointwise periodisation identity only under the two-sided decay hypotheses (23.1)-(23.2)."
  local_proof_attempt: "Not reconstructed here: the design assigns this row proof provenance not-supplied. The library's midpoint-value convergence theorem and the interval-indicator transform already supply the ingredients to evaluate the jump, but no local counterexample proof is written and the item is a recorded warning."
  necessity: "Shows why bare $L^1$ with assigned point values is insufficient and additional regularity or summability is needed; the two-sided polynomial decay bounds are sufficient, without being individually necessary."
verification:
  precheck: n/a
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 23, Example 23.2 (periodisation of the step function, printed p. 135) and Theorem 23.5 with (23.1)-(23.2) (printed pp. 137-138)"
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§3, Exercise 13: the point-evaluated identity is stated for continuous functions decaying quickly enough, PDF p. 4"
---

## Remark

**Recorded, not proved here.** Assume Countable Choice ([[def-countable-choice]]),
as in the cited midpoint-convergence theorem. The two-sided decay hypotheses of
[[thm-poisson-summation-under-two-sided-polynomial-decay]] cannot be dropped to
bare $L^1$: the periodisation of an $L^1$ function is defined only almost
everywhere and depends pointwise on the chosen representative. A
piecewise $C^1$ periodisation can have jumps where its Fourier series tends to
the midpoint of the one-sided limits instead of its assigned value. Half-open
lattice cells themselves are disjoint; the discrepancy is not double-counting
by the tiling. Concretely,
Laugesen's Example 23.2 periodises $f=\mathbf 1_{[-\pi,2\pi)}$ and finds
$\operatorname{Pe}(f)(x)=2\pi\bigl(2\cdot\mathbf 1_{[-\pi,0)}(x)+\mathbf 1_{[0,\pi)}(x)\bigr)$
for $x\in[-\pi,\pi)$, which is discontinuous at the lattice point $x=0$: its
one-sided limits there are $4\pi$ and $2\pi$, so after rescaling the period to
$1$ its Fourier series converges at $0$ to the midpoint $3\pi$
([[cor-piecewise-c-one-fourier-series-converges-to-midpoint-values]]) rather
than to the value $2\pi$ taken by the periodisation sum at $0$. So a
point-sampled formula $\sum_\lambda f(\lambda)=c^{-1}\sum_{\lambda^*}\widehat f(\lambda^*)$
is not a theorem of bare $L^1$. This example shows the need for additional
pointwise regularity or summability; it does not make the particular polynomial
decay bounds necessary for every function satisfying a Poisson identity. This is a recorded source warning and is not proved on this page.
