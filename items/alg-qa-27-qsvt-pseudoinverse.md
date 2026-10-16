---
id: alg-qa-27-qsvt-pseudoinverse
kind: algorithm
title: QSVT regularized pseudoinverse transformation
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-27-block-encoded-qlsp
  - alg-qa-24-qsvt
  - thm-qa-24-qsvt-singular-space-action
  - thm-qa-24-qsvt-error-and-resource-bound
  - thm-qa-24-qsvt-query-count
  - def-qa-24-pue-svd-data
  - alg-qa-23-qsp-phase-synthesis
  - thm-qa-23-qsp-synthesis-correctness
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-dirac-notation-conversion
  - def-qa-23-qsp-signal-sequence
justified_by: []
axiom_use: None; the circuits and certificates are finite, and all access is
  supplied explicitly.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular
        value transformation and beyond
      url: https://arxiv.org/pdf/1806.01838
      locator: Theorems 17 and 41, Lemmas 19 and 40, and the polynomial approximation
        discussion, PDF pp.18–21 and 36–38.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapters 28–29, block encodings and QSVT.
operational_contract_ref:
  path: research/quantum-algorithms-planning/operational-contracts.md
  section: OP1A
  binding: true
---

## Definition

**Input.** An exact or approximate projected-unitary encoding of $\bar A=A/\alpha$, its supplied inverse and every controlled form used, left/right singular-space projectors, a unitary preparing normalized $|b\rangle$ in the promised left singular space, rational $0<e\le\delta=\gamma/\alpha\le1/2$, and explicit block, phase, reflection, state-preparation, arithmetic, and gate costs. The algorithm returns a success flag and the conditional right-space state, or the declared failure result.

**Bare-gap generation branch (binding OP1A).** Run the finite `InversePoly($\delta,e$)` construction in the binding OP1A section of `research/quantum-algorithms-planning/operational-contracts.md`: set $\kappa_0=2/\delta$, $u=e/(100\delta)$, $b=\lceil\kappa_0^2\ln(\kappa_0/u)\rceil$, and $J=\lceil\sqrt{b\ln(4b/u)}\rceil$ using certified upper endpoints. Generate the finite binomial sums $a_j=4(-1)^j2^{-2b}\sum_{i=j+1}^b\binom{2b}{b+i}$ and $P(x)=(\delta/2)\sum_j a_jT_{2j+1}(x)$ by the Chebyshev recurrence. Retain $P_{\max}=1+2\delta(J+1)$ as the declared coarse bound.

Run `SignPoly(g,v)` from OP1A with $t=3\delta/4$, $a_0=1+t$, $g=\delta/(4a_0)$, and $v=e/(1000P_{\max})$. The routine evaluates the declared erf Chebyshev interpolant with its finite node, tail, coefficient-rounding, and division steps and returns its rational odd polynomial and ellipse/tail certificate. Form
$$C_{\rm cut}(x)=1+\frac{S((x-t)/a_0)-S((x+t)/a_0)}2,\qquad p(x)=\frac{P(x)C_{\rm cut}(x)}{1+e/10}.$$
Generate every product coefficient with the stated total rounding budget. Check exact odd parity and degree. Run the OP1 exact critical-point check for $|p(x)|\le1$ on $[-1,1]$. Construct the reciprocal certificate on $[\delta,1]$ by the specified dyadic rational partitions and nonnegative Bernstein coefficients for both $ex\pm(xp(x)-\delta/2)$. Refine precision when intervals are undecided; on an actually failed certificate halve $u,v$ and regenerate. Any declared cap returns `CONSTRUCTION_TIMEOUT`; any failed exact certificate returns its stated non-success branch.

On a successful polynomial certificate, set the rational phase-synthesis tolerance to $e/100$ and call [[alg-qa-23-qsp-phase-synthesis]] in `efficient-numerical` mode with the checked real odd polynomial $p$, its degree, and that tolerance. Retain the exact pre-angle target $p_0$ produced by its deterministic shrink/round rule, complementary pair $B,C$, exact phase-scalar descriptors, and numerical phase certificates. Charge its target shrink/round error and numerical-angle/compiler errors to the separate phase term in the supplied error budget. Before any QSVT call, form the ordered matrix product from the returned exact phase-scalar descriptors, using the recurrence in [[def-qa-23-qsp-signal-sequence]] and coefficient arithmetic in the basis $\mathbb C[x]\oplus\sqrt{1-x^2}\,\mathbb C[x]$. Compare its four entries coefficientwise with
$$\begin{pmatrix}p_0+iB&\sqrt{1-x^2}\,C\\(-1)^{d+1}\sqrt{1-x^2}\,C^*&(-1)^d(p_0-iB)\end{pmatrix}.$$
This finite exact check validates the phase list actually returned by the peeling routine, rather than relying on existence of some phase list. Charge its arithmetic and certificate output with phase generation. If any comparison fails, return `PHASE_PRODUCT_ERROR` with the generated polynomial record and mismatch witness, and do not execute QSVT. Only after the check passes may the execution use the returned phase list. The subsequent rational-angle and optional compiler errors remain separately bounded by the returned phase certificates and the supplied error budget; the exact product check does not replace those bounds. No exact phase rotation or finite-basis compiler is free.

**Execution.** Execute the QA24 odd QSVT sequence on the adjoint projected-unitary encoding of $\bar A$, with left and right projectors swapped, using the generated phase list and the separately supplied controlled/inverse access. The ideal supported singular-value multiplier is $p(\sigma/\alpha)$; the intended target is $(\delta/2)\bar A^+|b\rangle=(\gamma/2)A^+|b\rangle$. Apply the declared success projector and return its conditional state only on a positive-probability success branch. The scalar polynomial, block-encoding, phase-synthesis, and circuit-implementation errors are separate terms in the supplied error budget.

An optional certified-input branch accepts finite polynomial, phase, and reciprocal-certificate lists; it verifies their parity, interval, identity, and Bernstein checks before execution and returns `INVALID` if a check fails. It does not prove that bare rational inputs can be converted into such a certificate.

## Remarks

This is the binding OP1A procedure, not merely an existence-based choice of polynomial. `lem-qa-27-even-sign-window` proves a bounded-window estimate for its declared sign approximant and shows why the printed formula of Gilyén et al. Lemma 29 is unnecessary for this cutoff. The separate polynomial-degree result establishes its uncapped termination, interpolation, coefficient/cutoff margins, certificate refinement, degree, and the exact link from the returned phase list to its completed polynomial pair. Finite caps retain their timeout result. Exact-root/phase generation and implementation use the actual QA23 contract; all generation, comparison and arithmetic bit costs stay separately charged, with no total bit-time bound inferred from this Definition.
