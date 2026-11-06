---
id: pthm-st-open-bosonic-lightcone-spectrum
kind: physics-theorem
title: "Open Bosonic Lightcone Spectrum"
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
  - pthm-st-open-neumann-classical-mode-expansion
dependency_roles:
  def-st-conformal-gauge-and-residual-symmetry: formulation-prerequisite
  def-st-bosonic-matter-oscillator-modes: formulation-prerequisite
  pthm-st-critical-dimension-flat-bosonic-string: physical-result
  pthm-st-open-neumann-classical-mode-expansion: physical-result
physical_scope: "The flat open tensile bosonic string with Neumann endpoints, p^+ nonzero, D=26, intercept a=1, and the standard transverse Fock representation."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§2.2–2.3.3 and 3.1 (PDF file pp.39–52 and 60–61; printed pp.32–45 and 53–54); printed pp.32–45 and 53–54); printed pp.32–45 and 53–54); printed pp.32–45 and 53–54); printed pp.32–45 and 53–54); printed pp.32–45 and 53–54); printed pp.32–45 and 53–54); light-cone gauge and open-string mass formula."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Use the target $M=\mathbb R^{1,25}$ with $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$, define $X^\pm=(X^0\pm X^{25})/\sqrt2$, $p^\pm=(p^0\pm p^{25})/\sqrt2$, and oscillator components $\alpha_n^\pm=(\alpha_n^0\pm\alpha_n^{25})/\sqrt2$, and let $i=1,\ldots,24$ denote transverse indices. The open worldsheet is the dimensionless Neumann strip $\tau\in\mathbb R$, $\sigma\in[0,\pi]$. The target light-cone chart is $p^+\ne0$ with gauge condition $X^+(\tau,\sigma)=x^++2\alpha'p^+\tau$. In this chart the nonzero-mode Virasoro constraints determine the longitudinal modes $\alpha_n^-$ from the transverse modes, while the gauge sets $\alpha_n^+=0$ for $n\ne0$. Define the weighted transverse level $N=\sum_{n>0}\sum_{i=1}^{24}\alpha_{-n}^i\alpha_n^i$; a monomial with $r_{n,i}$ quanta of mode $(n,i)$ has level $\sum_{n,i}nr_{n,i}$. With mass convention $M^2=-p_\mu p^\mu$, the zero-mode state constraint is $L_0^m-a=0$. At $D=26$ and intercept $a=1$, the physical Fock space has 24 transverse oscillator families with positive oscillator norm and mass formula $\alpha'M^2=N-1$ for $N\in\mathbb Z_{\ge0}$.

## Statement references

[David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes](https://arxiv.org/pdf/0908.0333v3), §§2.2–2.3.3 and 3.1 (PDF file pp.39–52 and 60–61; printed pp.32–45 and 53–54); printed pp.32–45 and 53–54); printed pp.32–45 and 53–54); printed pp.32–45 and 53–54); printed pp.32–45 and 53–54); printed pp.32–45 and 53–54); printed pp.32–45 and 53–54); light-cone gauge and open-string mass formula.

## Facts & Assumptions

[F1] [[def-st-bosonic-matter-oscillator-modes]] fixes $p\in\mathbb R^{1,D-1}$ with dimension $L^{-1}$, dimensionless modes, $\alpha_0^\mu=\sqrt{2\alpha'}p^\mu$, the oscillator algebra, normal ordering, and the weighted level $\sum_{n>0,i}\alpha_{-n}^i\alpha_n^i$ in the transverse sector.

[F2] [[pthm-st-critical-dimension-flat-bosonic-string]] states the conditional values $D=26$ and $a=1$ for the standard flat tensile model.

[F3] The draft physics theorem [[pthm-st-open-neumann-classical-mode-expansion]] locally proves the $C^2$ Neumann-strip mode expansion, its one-family normalization, and the classical $L_n=0$ constraints used in the gauge reduction.

[F4] [[def-st-conformal-gauge-and-residual-symmetry]] defines the local world-sheet conformal gauge, $\sigma^\pm$ coordinates, and residual world-sheet conformal maps. It does not define the target light-cone coordinates or target gauge; those are stated in this item's Statement.

[A1] Work at fixed momentum with $p^+\ne0$ and the standard transverse Fock vacuum; use the target chart and gauge condition stated above.

[A2] In this light-cone quantization, impose the normal-ordered oscillator form of the nonzero-mode Virasoro constraints from [F3], solve them for the longitudinal oscillators, and impose the remaining zero-mode condition $(L_0^m-a)|\psi\rangle=0$. This is the adopted gauge-fixed quantization prescription.

**Given:** Assume the flat open tensile string with Neumann endpoints, the stated zero modes, and $D=26$, $a=1$.

## Proof

1.1 The gauge condition gives $\alpha_n^+=0$ for $n\ne0$ and $\alpha_0^+=\sqrt{2\alpha'}p^+\ne0$. With $\eta_{+-}=-1$, the nonzero-mode constraints from [F3] under [A2] become $0=-\alpha_0^+\alpha_n^-+L_n^\perp$, where $L_n^\perp=\frac12\sum_{r\in\mathbb Z}\sum_{i=1}^{24}:\alpha_{n-r}^i\alpha_r^i:$; hence $\alpha_n^-=(L_n^\perp)/(\alpha_0^+)$. The zero-mode operator is $L_0^m=\frac12\alpha_0^2+N=\alpha'p^2+N$, with $N=\sum_{n>0,i}\alpha_{-n}^i\alpha_n^i$ the weighted level from [F1]. Thus the two longitudinal oscillator families are not independent. The transverse commutator is $[\alpha_m^i,\alpha_n^j]=m\delta^{ij}\delta_{m+n,0}$, so each normalized creation mode $\alpha_{-n}^i/\sqrt n$ has positive norm and the transverse finite-particle Fock form is positive definite. [given, F1, F3, F4, A1, A2, algebra]

2.1 The zero-mode condition in [A2] and $a=1$ from [F2] give $\alpha'p^2+N-1=0$. Since $M^2=-p^2$, this is $\alpha'M^2=N-1$. The normalized oscillator number at mode $n$ is $\alpha_{-n}^i\alpha_n^i/n$, so the weighted sum in [F1] has eigenvalue $\sum_{n,i}nr_{n,i}\in\mathbb Z_{\ge0}$ on occupation numbers $r_{n,i}$. [given, F1, F2, A1, A2, step 1.1, algebra]

3.1 Every state at level $N$ is a finite product of the 24 transverse creation modes, and step 1.1 shows these span the light-cone physical Fock space with positive oscillator norm; the result is restricted to the declared Neumann, nonzero-$p^+$ chart. [step 1.1, step 2.1] ∎
