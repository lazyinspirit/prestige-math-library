---
id: lem-compactly-supported-covariant-generators-are-dense
kind: lemma
title: "Density of averaged covariant generators"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, def-covariant-function-model-of-unitary-induction, lem-the-induced-inner-product-is-independent-of-coset-representatives, lem-closed-subgroup-quotient-averaging-and-compact-lifts, thm-bochner-integrability-criterion, thm-c-c-is-dense-in-l-p-for-radon-measures, thm-choice-implies-dependent-implies-countable-choice, lem-finite-lch-partition-of-unity-near-a-compact-set, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, thm-rmk-uniqueness-among-radon-measures, thm-weil-quotient-integration-formula-with-rho-function]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Chapters 1 and 7"
      url: "https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf"
    - title: "David Vogan, Unitary Representations of Locally Compact Groups and Induced Representations"
      url: "https://math.mit.edu/~dav/ind.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC. For $f\in C_c(G)$ and $v\in V$, the section $\xi_{f,v}(x)=\int_H f(xh)\sigma(h)v\,dh$ belongs to $C_c(G,H;V)$. Their finite linear span is uniformly dense on compact quotient supports in $C_c(G,H;V)$, and the Hilbert completion equals the locally strongly measurable covariant $L^2$ sections modulo $\mu_\rho$-almost-everywhere equality.

## Facts & Assumptions

**Given:** AC, closed $H\le G$, a strongly continuous unitary $\sigma$ on $V$, and the rho-derived quotient measure.

[F1] Covariant sections and their quotient norm are defined in the induced model ([[def-covariant-function-model-of-unitary-induction]]).

[F2] Their integrated inner product is positive definite, and the measure has full support ([[lem-the-induced-inner-product-is-independent-of-coset-representatives]]).

[F3] The averaging map is onto with nonnegative lifts, compact quotient sets have compact lifts, and compact subsets of an open set admit compactly supported cutoffs ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]], [[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]]).

[F4] A finite open cover near a compact set admits a subordinate compactly supported partition of unity under DC ([[lem-finite-lch-partition-of-unity-near-a-compact-set]]).

[F5] $C_c$ is dense in $L^2$ for Radon measures under DC ([[thm-c-c-is-dense-in-l-p-for-radon-measures]]).

[F6] Strong measurability and integrability of the norm imply Bochner integrability ([[thm-bochner-integrability-criterion]]).

[F7] AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F8] The Weil formula holds for $C_c(G)$, and Radon measures agreeing on $C_c$ agree on Borel sets ([[thm-weil-quotient-integration-formula-with-rho-function]], [[thm-rmk-uniqueness-among-radon-measures]]).

[A1] AC is assumed ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For fixed $x$, the integrand defining $\xi_{f,v}$ is supported on the compact set $x^{-1}\operatorname{supp}f\cap H$, so the Bochner integral exists. Replacing $x$ by $xh_0$ and substituting $k=h_0h$ gives $\xi_{f,v}(xh_0)=\sigma(h_0)^{-1}\xi_{f,v}(x)$. For a relatively compact neighborhood $N$ of a fixed $x_0$, every contributing $h$ lies in the compact set $K=\overline N^{-1}\operatorname{supp}f\cap H$. The integrand $(x,h)\mapsto f(xh)\sigma(h)v$ is jointly continuous on a compact neighborhood times $K$, so its uniform variation in $h$ tends to zero as $x\to x_0$; the integral therefore varies continuously. Its quotient support lies in $p(\operatorname{supp}f)$, which is compact. Thus $\xi_{f,v}\in C_c(G,H;V)$. [F1, F3, F6, construct]
1.2 Now let $F$ be a locally strongly measurable covariant section with finite quotient $L^2$ norm. By [F5] choose $\psi\in C_c(G/H)$ close in scalar $L^2$ to $q\mapsto\|F(q)\|$; outside $Q=\operatorname{supp}\psi$ the $L^2$ tail of $F$ is therefore small. Put $F_Q=\mathbf1_QF$ and choose a cutoff $\chi\in C_c(G/H)$ with $\chi=1$ on $Q$ by [F3], then choose a nonnegative lift $u_0\in C_c(G)$ with $T_Hu_0=\chi$ by [F3]. The measurable map $U=u_0F_Q$ is supported in a compact subset of $G$. For $\phi\in C_c(G/H)$, apply the Weil formula [F8] to $f(y)=(\phi\circ p)(y)|u_0(y)|^2$. It identifies the finite Radon measures $B\mapsto\int_{p^{-1}(B)}|u_0(y)|^2\rho(y)\,dy$ and $B\mapsto\int_B T_H(|u_0|^2)(q)\,d\mu_\rho(q)$, first on $C_c(G/H)$ and then on Borel sets by [F8]. Integrating $q\mapsto\|F_Q(q)\|^2$ gives $$\int_G\|U(x)\|^2\rho(x)\,dx=\int_Q\|F(q)\|^2T_H(|u_0|^2)(q)\,d\mu_\rho(q)<\infty.$$ On its compact support $\rho\,dx$ is finite, so [F6] makes $U$ Bochner square integrable. [A1, F3, F5, F6, F7, F8, choose]
2.1 Let $F\in C_c(G,H;V)$ and $K=\operatorname{supp}_{G/H}F$. Choose a cutoff $\chi\in C_c(G/H)$ with $\chi=1$ on $K$ by [F3], then a nonnegative lift $u_0\in C_c(G)$ with $T_Hu_0=\chi$ by [F3]. The map $u_0F$ is continuous and compactly supported on $G$. Cover its compact support by finitely many open sets on which $F$ varies by less than $\epsilon$ in norm; [F4] supplies a subordinate partition $\theta_j$. For chosen $v_j$ from each patch, $u_0F$ is uniformly within $\|u_0\|_\infty\epsilon$ of $\sum_j(u_0\theta_j)v_j$. Averaging the latter gives a finite sum of generators. The averaging error is bounded uniformly on the compact quotient support because, after choosing a compact lift $C$ of that support, all relevant $h$ lie in the fixed compact set $C^{-1}\operatorname{supp}u_0\cap H$, of finite Haar measure. Since $A(u_0F)=T_Hu_0\,F=F$ on $K$ and both vanish off $K$, the generators approximate $F$ uniformly. [F1, F2, F3, F4, A1, step 1.1, choose, construct]
3.1 Strong measurability approximates $U$ by finite-valued simple maps; scalar $C_c$ density [F5] approximates their coefficients in $L^2(G,\rho\,dx)$. Multiplying by one fixed compactly supported cutoff equal to one on $\operatorname{supp}U$ makes all approximants supported in a common compact $C$. The averaging operator $A(W)(x)=\int_H\sigma(h)W(xh)\,dh$ is bounded on continuous maps supported in $C$. If $C=\varnothing$ then $W=0$ and the bound is immediate. Otherwise choose a compact lift $C_0$ of $p(C)$ and let $m=dh(C_0^{-1}C\cap H)<\infty$. For each $q\in p(C)$ choose a representative $x\in C_0$. Cauchy–Schwarz gives $\|A(W)(x)\|^2\le m\,T_H(\|W\|^2)(q)$. Integrating over $G/H$ and applying [F8] to $\|W\|^2\in C_c(G)$ yields $$\|A(W)\|_2^2\le m\int_G\|W(y)\|^2\rho(y)\,dy=m\|W\|_{L^2(G,\rho\,dy)}^2.$$ Therefore averages of the finite-sum $C_c(G,V)$ approximants converge to $A(U)=F_Q$. Each average is a finite sum of the generators in step 1.1. Letting the discarded tail tend to zero proves density in the full measurable $L^2$ space. ∎ [F1, F3, F5, F6, F8, step 1.2, choose, construct]



## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix E §E.1, Proposition E.1.1 and Lemma E.1.3, PDF pp. 411–414. Full text was inspected; the vector-valued approximation and the compact-fiber bound are supplied explicitly here.
