---
id: pthm-st-closed-bosonic-lightcone-spectrum
kind: physics-theorem
title: "Closed Bosonic Lightcone Spectrum"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 11
deps:
  - def-st-conformal-gauge-and-residual-symmetry
  - def-st-bosonic-matter-oscillator-modes
  - pthm-st-critical-dimension-flat-bosonic-string
  - pthm-st-closed-classical-mode-expansion
dependency_roles:
  def-st-conformal-gauge-and-residual-symmetry: formulation-prerequisite
  def-st-bosonic-matter-oscillator-modes: formulation-prerequisite
  pthm-st-critical-dimension-flat-bosonic-string: physical-result
  pthm-st-closed-classical-mode-expansion: physical-result
physical_scope: "The flat closed tensile bosonic string on a periodic cylinder with p^+ nonzero, equal left/right target momentum, D=26, and intercepts a=tilde-a=1."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§2.2–2.3.3 (PDF file pp.39–52; printed pp.32–45); printed pp.32–45); printed pp.32–45); printed pp.32–45); printed pp.32–45); printed pp.32–45); printed pp.32–45); left/right modes, level matching, and closed mass formula."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Use the target $M=\mathbb R^{1,25}$ with $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$, define $X^\pm=(X^0\pm X^{25})/\sqrt2$, $p^\pm=(p^0\pm p^{25})/\sqrt2$, and oscillator components $\alpha_n^\pm=(\alpha_n^0\pm\alpha_n^{25})/\sqrt2$, $\widetilde\alpha_n^\pm=(\widetilde\alpha_n^0\pm\widetilde\alpha_n^{25})/\sqrt2$, and let $i=1,\ldots,24$ denote transverse indices. The closed worldsheet is the dimensionless periodic cylinder $\tau\in\mathbb R$, $\sigma\in\mathbb R/(2\pi\mathbb Z)$. The target light-cone chart is $p^+\ne0$ with gauge condition $X^+(\tau,\sigma)=x^++\alpha'p^+\tau$. In this chart the nonzero-mode left and right Virasoro constraints determine $\alpha_n^-$ and $\widetilde\alpha_n^-$ from the transverse modes, while the gauge sets $\alpha_n^+=\widetilde\alpha_n^+=0$ for $n\ne0$. Define the weighted transverse levels $N=\sum_{n>0}\sum_{i=1}^{24}\alpha_{-n}^i\alpha_n^i$ and $\widetilde N=\sum_{n>0}\sum_{i=1}^{24}\widetilde\alpha_{-n}^i\widetilde\alpha_n^i$; a monomial with occupations $r_{n,i}$, $\widetilde r_{n,i}$ has levels $\sum_{n,i}nr_{n,i}$, $\sum_{n,i}n\widetilde r_{n,i}$. The intercept convention is $L_0^m-a=0$ and $\widetilde L_0^m-\widetilde a=0$. With $M^2=-p_\mu p^\mu$, at $D=26$ and $a=\widetilde a=1$ the physical Fock space has 24 left and 24 right transverse oscillator families, obeys level matching $N=\widetilde N$, and satisfies $\alpha'M^2/4=N-1=\widetilde N-1$.

## Statement references

[David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes](https://arxiv.org/pdf/0908.0333v3), §§2.2–2.3.3 (PDF file pp.39–52; printed pp.32–45); printed pp.32–45); printed pp.32–45); printed pp.32–45); printed pp.32–45); printed pp.32–45); printed pp.32–45); left/right modes, level matching, and closed mass formula.

## Facts & Assumptions

[F1] [[def-st-bosonic-matter-oscillator-modes]] fixes $p\in\mathbb R^{1,D-1}$ with dimension $L^{-1}$, dimensionless independent left/right modes, $\alpha_0=\widetilde\alpha_0=\sqrt{\alpha'/2}\,p$, and the weighted transverse levels $N=\sum_{n>0,i}\alpha_{-n}^i\alpha_n^i$, $\widetilde N=\sum_{n>0,i}\widetilde\alpha_{-n}^i\widetilde\alpha_n^i$.

[F2] [[pthm-st-critical-dimension-flat-bosonic-string]] gives $D=26$ and $a=1$ in the standard flat tensile model.

[F3] The draft physics theorem [[pthm-st-closed-classical-mode-expansion]] locally proves the $C^2$ periodic-cylinder left/right mode expansions, common target zero mode, and chiral classical constraints used in the gauge reduction.

[F4] [[def-st-conformal-gauge-and-residual-symmetry]] defines the local world-sheet conformal gauge, $\sigma^\pm$ coordinates, and residual world-sheet conformal maps. It does not define the target light-cone coordinates or target gauge; those are stated in this item's Statement.

[A1] Work at fixed momentum with $p^+\ne0$ and the standard left/right transverse Fock vacua; use the target chart and gauge conditions stated above.

[A2] In this light-cone quantization, impose the normal-ordered left and right oscillator forms of the nonzero-mode Virasoro constraints from [F3], solve them for the two longitudinal oscillator families, and impose the zero-mode conditions $(L_0^m-a)|\psi\rangle=(\widetilde L_0^m-\widetilde a)|\psi\rangle=0$. This is the adopted gauge-fixed quantization prescription.

**Given:** Assume a flat closed tensile string on the periodic cylinder, with equal left/right target momentum and intercepts $a=\widetilde a=1$.

## Proof

1.1 The gauge gives $\alpha_n^+=\widetilde\alpha_n^+=0$ for $n\ne0$ and $\alpha_0^+=\widetilde\alpha_0^+=\sqrt{\alpha'/2}\,p^+\ne0$. With $\eta_{+-}=-1$, [F3] and [A2] give $0=L_n^m=-\alpha_0^+\alpha_n^-+L_n^\perp$ and $0=\widetilde L_n^m=-\widetilde\alpha_0^+\widetilde\alpha_n^-+\widetilde L_n^\perp$, where $L_n^\perp=\frac12\sum_{r\in\mathbb Z}\sum_i:\alpha_{n-r}^i\alpha_r^i:$ and likewise for tilded modes. Thus each longitudinal oscillator is solved by division by its nonzero plus zero mode. The separate transverse commutators are $[\alpha_m^i,\alpha_n^j]=m\delta^{ij}\delta_{m+n,0}$ and the same for tilded modes, while mixed commutators vanish; hence the finite-particle left/right transverse Fock forms are positive. [given, F1, F3, F4, A1, A2, algebra]

2.1 Each chiral zero mode gives $L_0^m=\frac12\alpha_0^2+N=\alpha'p^2/4+N$ and $\widetilde L_0^m=\alpha'p^2/4+\widetilde N$. The zero-mode conditions in [A2] and intercepts $a=\widetilde a=1$ from [F2] are $\alpha'p^2/4+N-1=0$ and $\alpha'p^2/4+\widetilde N-1=0$. Subtracting gives $N=\widetilde N$; using $M^2=-p^2$ gives $\alpha'M^2/4=N-1=\widetilde N-1$. The weighted levels have the nonnegative integer eigenvalues stated in [F1]. [given, F1, F2, A1, A2, step 1.1, algebra]

3.1 Let $\mathcal T_N(p)$ and $\widetilde{\mathcal T}_{\widetilde N}(p)$ be the spans of transverse occupation monomials of weighted levels $N$ and $\widetilde N$ in the two positive 24-family Fock spaces. At the fixed momentum in [A1], the physical space is precisely the algebraic sum of $\mathcal T_N(p)\otimes\widetilde{\mathcal T}_{\widetilde N}(p)$ over nonnegative integers satisfying both $\alpha'p^2/4+N-1=0$ and $\alpha'p^2/4+\widetilde N-1=0$. Necessity follows from step 2.1; conversely these scalar equations and the longitudinal solution of step 1.1 fulfill every condition of [A2]. Thus the space is zero if $1-\alpha'p^2/4$ is not a nonnegative integer, and otherwise it is the single level-matched summand with $N=\widetilde N=1-\alpha'p^2/4$. Its nonzero vectors have positive oscillator norm and its masses are exactly the stated spectrum. No semi-relative or absolute BRST cohomology is identified here. [A1, A2, step 1.1, step 2.1, algebra] ∎
