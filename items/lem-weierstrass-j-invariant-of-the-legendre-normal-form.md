---
id: lem-weierstrass-j-invariant-of-the-legendre-normal-form
kind: lemma
title: "The j-invariant of the Legendre normal form"
status: draft
origin: pipeline
deps:
  - def-modular-lambda-function
  - def-modular-discriminant-and-j-invariant
  - lem-discriminant-is-a-nonvanishing-cusp-form
  - thm-eisenstein-series-are-modular-forms
  - def-level-one-eisenstein-series
  - def-divisor-power-sums-sigma-k
  - lem-lipschitz-formula-for-the-lattice-sum
  - thm-weierstrass-p-differential-equation
  - lem-weierstrass-p-degree-two-and-half-periods
  - thm-cross-ratio-mobius-invariant
  - thm-every-complex-number-has-a-square-root
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.3, printed pp. 95 and 97: the rational invariant F(lambda); Theorem 5.42, p. 103, and j=1728J, p. 104."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 3, printed pp. 46–47: g2,g3 and the lattice discriminant; Remark 4.4, p. 49; Propositions 4.18 and 4.20, pp. 55–57."
---

## Statement

For a full lattice $\Lambda_\tau$ with invariants $g_2,g_3$ one has $g_2=\frac{4\pi^4}{3}E_4(\tau)$ and $g_3=\frac{8\pi^6}{27}E_6(\tau)$, hence
$$\frac{1728\,g_2^3}{g_2^3-27g_3^2}=j(\tau).$$
Writing $\lambda=\lambda(\tau)$ and putting $J_{\mathrm{Leg}}(x):=\frac{256(x^2-x+1)^3}{x^2(x-1)^2}$ for $x\in\mathbb C\setminus\{0,1\}$, the affine normalisation of the associated Legendre cubic gives
$$\frac{1728\,g_2^3}{g_2^3-27g_3^2}=J_{\mathrm{Leg}}(\lambda(\tau))=j(\tau);$$
in particular $J_{\mathrm{Leg}}(1-\lambda)=J_{\mathrm{Leg}}(1/\lambda)=J_{\mathrm{Leg}}(\lambda)$.

## Facts & Assumptions

**Given:** $\Lambda_\tau=\mathbb Z+\mathbb Z\tau$, its invariants $g_2=60G_4$, $g_3=140G_6$, the cubic relation $\wp'^2=4\wp^3-g_2\wp-g_3=4(\wp-e_1)(\wp-e_2)(\wp-e_3)$ with distinct $e_j$, and $\lambda(\tau)=\frac{e_3-e_2}{e_1-e_2}$ ([[thm-weierstrass-p-differential-equation]], [[lem-weierstrass-p-degree-two-and-half-periods]], [[def-modular-lambda-function]]).

[F1] $G_k=2\zeta(k)E_k$. The unnormalised Fourier coefficient computed in [[thm-eisenstein-series-are-modular-forms]], Proof 1.2, is $(-2\pi i)^k/((k-1)!\zeta(k))$; comparing its values $240$ for $k=4$ and $-504$ for $k=6$ gives $\zeta(4)=\pi^4/90$ and $\zeta(6)=\pi^6/945$ ([[def-level-one-eisenstein-series]], [[lem-lipschitz-formula-for-the-lattice-sum]]).

[F2] The lattice discriminant $D_\Lambda:=g_2^3-27g_3^2$ is nonzero because the roots $e_j$ are distinct. The normalised modular discriminant is $\Delta=(E_4^3-E_6^2)/1728$, with $j=E_4^3/\Delta$; these are different normalisations, related in step 1.1 ([[lem-weierstrass-p-degree-two-and-half-periods]], [[lem-discriminant-is-a-nonvanishing-cusp-form]], [[def-modular-discriminant-and-j-invariant]]).

[F3] Writing the Weierstrass cubic $Y^2=4x^3-g_2x-g_3$ as $y^2=x^3+Ax+B$ uses $Y=2y$, $A=-g_2/4$, $B=-g_3/4$. Hence $1728\cdot4A^3/(4A^3+27B^2)=1728g_2^3/(g_2^3-27g_3^2)$. Choose $h$ with $h^2=d\ne0$ ([[thm-every-complex-number-has-a-square-root]]). Under $x=dX$, $y=h^3\widetilde y$, the coefficients become $A/d^2,B/d^3$, so both numerator and denominator acquire $d^{-6}$ and this ratio is unchanged.

[F4] The affine map $x\mapsto(x-e_2)/(e_1-e_2)$ carries the branch triple $(e_1,e_2,e_3)$ to $(1,0,\lambda)$; cross-ratios and the labelling of branch points are preserved by affine maps ([[def-modular-lambda-function]], [[thm-cross-ratio-mobius-invariant]], [[lem-weierstrass-p-degree-two-and-half-periods]]).

## Proof

1.1 By [F1], $g_2=60G_4=120\zeta(4)E_4=120\cdot\frac{\pi^4}{90}E_4=\frac{4\pi^4}{3}E_4$ and $g_3=140G_6=280\zeta(6)E_6=280\cdot\frac{\pi^6}{945}E_6=\frac{8\pi^6}{27}E_6$; hence $g_2^3=\frac{64\pi^{12}}{27}E_4^3$ and $27g_3^2=27\cdot\frac{64\pi^{12}}{729}E_6^2=\frac{64\pi^{12}}{27}E_6^2$, so $g_2^3-27g_3^2=\frac{64\pi^{12}}{27}(E_4^3-E_6^2)=\frac{64\pi^{12}}{27}\cdot1728\,\Delta$ by [F2]. Dividing, $\frac{1728g_2^3}{g_2^3-27g_3^2}=\frac{E_4^3}{\Delta}=j(\tau)$. [F1, F2, given, algebra]

2.1 Put $d=e_1-e_2\ne0$ and choose $h$ with $h^2=d$. In $Y^2=4(x-e_1)(x-e_2)(x-e_3)$, the substitutions $x=e_2+du$, $Y=2h^3v$ give $v^2=u(u-1)(u-\lambda)$ by [F4]. After the original Weierstrass cubic is written with leading coefficient one, the translation by $e_2$ and subsequent centring cancel each other, while the dilation divides the centred coefficients $-g_2/4,-g_3/4$ by $d^2,d^3$. Thus its invariant ratio is unchanged by [F3]. Completing the cube by $x=X+\frac{1+\lambda}{3}$ gives $y^2=X^3+AX+B$ with $A=\lambda-\frac{(1+\lambda)^2}{3}=-\frac{\lambda^2-\lambda+1}{3}$ and $B=\frac{(1+\lambda)(9\lambda-2(1+\lambda)^2)}{27}=-\frac{(\lambda^2-\lambda-2)(2\lambda-1)}{27}$. Therefore $4A^3=-\frac{4(\lambda^2-\lambda+1)^3}{27}$ and $27B^2=\frac{(\lambda^2-\lambda-2)^2(2\lambda-1)^2}{27}$, and the algebraic identity $4(\lambda^2-\lambda+1)^3-(\lambda^2-\lambda-2)^2(2\lambda-1)^2=27\lambda^2(\lambda-1)^2$, which holds for all $\lambda$ by expanding both sides, gives $4A^3+27B^2=-\lambda^2(\lambda-1)^2$. Hence $J:=\frac{1728\cdot4A^3}{4A^3+27B^2}=\frac{1728\cdot(-4(\lambda^2-\lambda+1)^3/27)}{-\lambda^2(\lambda-1)^2}=\frac{256(\lambda^2-\lambda+1)^3}{\lambda^2(\lambda-1)^2}=J_{\mathrm{Leg}}(\lambda)$. [F3, F4, step 1.1, given, algebra]

3.1 Invariance under the cross-ratio substitutions: $J_{\mathrm{Leg}}(1-\lambda)=J_{\mathrm{Leg}}(\lambda)$ because $(1-\lambda)^2-(1-\lambda)+1=\lambda^2-\lambda+1$ and $(1-\lambda)^2((1-\lambda)-1)^2=\lambda^2(\lambda-1)^2$; and $J_{\mathrm{Leg}}(1/\lambda)=J_{\mathrm{Leg}}(\lambda)$ because $\lambda^{-2}-\lambda^{-1}+1=(\lambda^2-\lambda+1)\lambda^{-2}$ and $(\lambda^{-2})(\lambda^{-1}-1)^2=\lambda^2(\lambda-1)^2\lambda^{-6}$. Combining 1.1 and 2.1, $\frac{1728g_2^3}{g_2^3-27g_3^2}=j(\tau)=J_{\mathrm{Leg}}(\lambda(\tau))$, which is the assertion. [F3, step 2.1, given, algebra] ∎
