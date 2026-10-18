---
id: ex-same-center-s-orbital-integrals
kind: example
title: Exact same-center s-orbital overlap, kinetic, attraction, and Coulomb integrals
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-cartesian-gaussian-primitives-and-contractions, def-boys-function-and-coulomb-auxiliary-recurrence, thm-boys-integral-identities-series-and-incomplete-gamma, thm-cartesian-gaussian-raising-lowering-and-kinetic-recurrences, thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas, lem-cartesian-gaussian-moments-and-parameter-derivatives, thm-gaussian-product-theorem-and-polynomial-shift]
proof_strategy: direct
axiom_use: None. The example evaluates finite Gaussian integrals without any choice principle.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; the spherical-Gaussian, Boys, and one-/two-electron Coulomb formulas are derived on pp. 18–26."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §§III–IV, pp. 10–18, closed s-Gaussian and Coulomb auxiliary formulas."
---

## Example

Let $g_a(x)=e^{-a\|x\|^2}$ and $g_b(x)=e^{-b\|x\|^2}$ for $a,b>0$, both centered at the origin. Put $p=a+b$. Then
$$S(g_a,g_b)=\frac{\pi^{3/2}}{p^{3/2}},\qquad T(g_a,g_b)=\frac{3ab\pi^{3/2}}{p^{5/2}},\qquad V_0(g_a,g_b)=\frac{2\pi}{p}.$$
For $c,d>0$, put $q=c+d$. The same-center two-electron integral is
$$G(g_a,g_b;g_c,g_d)=\frac{2\pi^{5/2}}{pq\sqrt{p+q}}.$$

## Facts & Assumptions

**Given:** Positive exponents $a,b,c,d$; the integral conventions in [[def-cartesian-gaussian-primitives-and-contractions]]; and all centers equal to zero.

[F1] [[lem-cartesian-gaussian-moments-and-parameter-derivatives]]: $\int_{\mathbb R^3}e^{-p\|x\|^2}dx=(\pi/p)^{3/2}$ and $\int_{\mathbb R^3}\|x\|^2e^{-p\|x\|^2}dx=\frac{3}{2p}(\pi/p)^{3/2}$.

[F2] [[thm-cartesian-gaussian-raising-lowering-and-kinetic-recurrences]]: $-\tfrac12\Delta g_b=(3b-2b^2\|x\|^2)g_b$ for an s primitive.

[F3] [[thm-boys-integral-identities-series-and-incomplete-gamma]]: $F_0(0)=1$.

[F4] [[thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas]]: the s-pair Coulomb formulas reduce to $2\pi/p\,F_0(p\|P-C\|^2)$ and $2\pi^{5/2}/(pq\sqrt{p+q})F_0(\eta\|P-Q\|^2)$; an s-pair has only its $E^{000}=1$ coefficient.

[F5] [[thm-gaussian-product-theorem-and-polynomial-shift]]: multiplying two primitives gives the product exponent $p=a+b$ and product center $P=(aA+bB)/p$, with its stated Gaussian prefactor.

## Verification

1.1 For $A=B=0$, [F5] gives $g_ag_b=e^{-p\|x\|^2}$, so [F1] evaluates the overlap as $(\pi/p)^{3/2}$. For kinetic energy, substitute [F2] and use both moments in [F1]: $$3b(\pi/p)^{3/2}-2b^2\frac{3}{2p}(\pi/p)^{3/2}=\frac{3ab\pi^{3/2}}{p^{5/2}}.$$ [given, F1, F2, F5, algebra]

2.1 In [F4], set $C=P=0$; then the Boys argument is zero and [F3] gives $V_0=2\pi/p$. For the two-electron integral, both pair centers are zero and their only Hermite coefficient is $1$, so [F4] with $F_0(0)=1$ gives $2\pi^{5/2}/(pq\sqrt{p+q})$. [given, F3, F4, algebra] ∎
