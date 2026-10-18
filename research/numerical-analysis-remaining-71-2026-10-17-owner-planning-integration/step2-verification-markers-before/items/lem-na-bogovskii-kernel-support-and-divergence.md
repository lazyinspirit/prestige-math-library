---
id: lem-na-bogovskii-kernel-support-and-divergence
kind: lemma
title: "Support, integrability, and divergence identity for the Bogovskii kernel"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: ["def-na-star-shaped-bogovskii-integral", "def-countable-choice", "thm-linear-change-of-variables-for-lebesgue-measure", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "cor-cauchy-schwarz-inequality-for-l-two", "thm-compactness-under-continuous-maps", "def-distributional-derivative", "thm-heine-borel-rn"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ricardo G. Durán, An elementary proof of the continuity from L2_0(Omega) to H1_0(Omega)^n of Bogovskii’s right inverse of the divergence"
      url: https://arxiv.org/pdf/1103.3718
      locator: "Complete 17-page article; adopted proof range: pp. 2–7, formula (1.3), Lemmas 2.1–2.4 and Theorem 2.1; complete source reviewed."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 8, §8.2 and §§8.5.5–8.7.1: continuous divergence lifting, inf-sup and MINI element."
---

## Statement

Assume Countable Choice. Let $U,\omega$ and $\mathcal B_U$ be as in [[def-na-star-shaped-bogovskii-integral]]. For $f\in C_c^\infty(U)$, write $G(x,y)=(x-y)\int_0^1\omega(y+(x-y)/t)t^{-d-1}dt$. Then $\mathcal B_Uf(x)=\int_UG(x,y)f(y)dy$ defines an $L^2$ field supported in a compact subset of $U$. Writing $K(x,y)=|G(x,y)|$ and $(\mathcal K_Ug)(x):=\int_UK(x,y)g(y)dy$, the majorant $\mathcal K_U|f|$ is also in $L^2(U)$, and $\mathcal K_U$ has a finite $L^2$ bound. Moreover,
$$\operatorname{div}\mathcal B_Uf=f-\omega\int_Uf$$
in distributions on $\mathbb R^d$. In particular, mean-zero input has divergence $f$.

## Facts & Assumptions

**Given:** Countable Choice; bounded open $U$ star-shaped with respect to the support ball of $\omega\in C_c^\infty$, $\int\omega=1$, and $f\in C_c^\infty(U)$.

[A1] Countable Choice is required by the affine Lebesgue change-of-variables supplier [F2]. ([[def-countable-choice]])

[F1] The Bogovskii vector kernel is $G(x,y)=(x-y)\int_0^1\omega(y+(x-y)/t)t^{-d-1}dt$. ([[def-na-star-shaped-bogovskii-integral]])

[F2] The affine change $x=y+t(z-y)$ scales Lebesgue measure by $t^d$. ([[thm-linear-change-of-variables-for-lebesgue-measure]])

[F3] Tonelli and Fubini allow the nonnegative/absolutely integrable changes of order in the kernel and test-function calculations. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F4] The L2 Cauchy--Schwarz inequality gives $\int|fg|\le\|f\|_2\|g\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F5] A continuous image of a compact set is compact. ([[thm-compactness-under-continuous-maps]])


[F6] Distributional divergence is defined by $\langle\operatorname{div}u,\eta\rangle=-\int u\cdot\nabla\eta$. ([[def-distributional-derivative]])

[F7] Closed bounded subsets of Euclidean space are compact. ([[thm-heine-borel-rn]])

## Proof

1.1 If the integrand in [F1] is nonzero, $z=y+(x-y)/t\in\operatorname{supp}\omega$, so $x=(1-t)y+tz$. Star-shapedness puts every such $x$ in $U$. The sets $\operatorname{supp}f$, $\operatorname{supp}\omega$ and $[0,1]$ are closed and bounded, so their product is closed and bounded in Euclidean space and compact by [F7]. Its image under the continuous map $(y,z,t)\mapsto(1-t)y+tz$ is compact by [F5]. Star-shapedness puts the image inside $U$. [F1, given, F5, F7]

1.2 If $G(x,y)\ne0$ and $r=|x-y|$, then $r/t=|z-y|\le R:=\operatorname{diam}(U)$. Thus $t\ge r/R$ and $|G(x,y)|\le r\|\omega\|_\infty\int_{r/R}^1t^{-d-1}dt\le C r^{1-d}$. For any fixed $x$, decompose $0<|x-y|\le R$ into annuli $2^{-n-1}R<|x-y|\le2^{-n}R$; on the $n$th annulus, $r^{1-d}\le(2^{-n-1}R)^{1-d}$ and its measure is at most $(2^{1-n}R)^d$. The annular integral is therefore at most $C R2^{-n}$, whose sum is finite. The same estimate with $x,y$ interchanged proves both $\sup_x\int_U|G(x,y)|dy<\infty$ and $\sup_y\int_U|G(x,y)|dx<\infty$. [F1, given, algebra]

2.1 For the nonnegative kernel $K=|G|$, Cauchy–Schwarz gives $|\int K(x,y)f(y)dy|^2\le(\int K(x,y)dy)(\int K(x,y)|f(y)|^2dy)$. Integrating in $x$ and using the two finite bounds in step 1.2 gives $\|\mathcal K_U|f|\|_2^2\le M_xM_y\|f\|_2^2$, where $M_x=\sup_x\int_UK(x,y)dy$ and $M_y=\sup_y\int_UK(x,y)dx$. The vector field is componentwise dominated by this majorant, so it is in $L^2$ and has the support in step 1.1. [F1, F3, F4, step 1.1, step 1.2]

2.2 Let $\eta\in C_c^\infty(\mathbb R^d)$. Using [F2], Fubini (justified by step 1.2, the compact support of $f$, and boundedness of $\nabla\eta$), and $x=y+t(z-y)$ gives $\int_{\mathbb R^d}G(x,y)\cdot\nabla\eta(x)dx=\int\omega(z)(z-y)\cdot\int_0^1\nabla\eta(y+t(z-y))dt\,dz=\int\omega(z)(\eta(z)-\eta(y))dz.$ The last equality is the one-variable fundamental theorem along the segment. [A1, F1, F2, F3, step 1.2]

3.1 By the definition of distributional divergence, step 2.2 says $\operatorname{div}_xG(\cdot,y)=\delta_y-\omega$; integrating against $f(y)$ yields $\operatorname{div}\mathcal B_Uf=f-\omega\int_Uf$. If $\int f=0$, the second term vanishes. [given, F6, step 2.2] ∎
