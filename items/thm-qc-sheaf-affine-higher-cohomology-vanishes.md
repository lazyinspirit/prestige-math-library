---
id: thm-qc-sheaf-affine-higher-cohomology-vanishes
kind: theorem
title: Affine acyclicity of quasi-coherent sheaves
status: draft
origin: pipeline
deps:
  - def-quasi-coherent-module-scheme
  - def-associated-sheaf-module-affine-scheme
  - lem-associated-sheaf-sections-basic-open
  - lem-spectrum-localization-open-immersion
  - cor-principal-localisation-spectrum-is-distinguished-open
  - lem-distinguished-open-refinement-at-a-point
  - cor-affine-scheme-quasi-compact
  - def-cech-cohomology-open-cover
  - lem-affine-qc-cech-unit-ideal-exact
  - lem-cech-vanishing-on-a-cofinal-basis-implies-acyclicity
  - def-sheaf-cohomology-derived-global-sections
  - thm-affine-quasi-coherent-equivalence
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, \u00a7\u00a730.2\u201330.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), \u00a7\u00a719.1, 19.6, 19.9, 28.1\u201328.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X=\operatorname{Spec}A$ be an affine scheme
([[def-affine-scheme-spectrum]]) and let $\mathcal F$ be a quasi-coherent
$\mathcal O_X$-module ([[def-quasi-coherent-module-scheme]]). Then
$$H^q(X,\mathcal F)=0$$
for every $q>0$, where $H^q$ is sheaf cohomology
([[def-sheaf-cohomology-derived-global-sections]]). The empty affine scheme,
the zero ring and the zero module are included.



## Facts & Assumptions

**Given:** The Axiom of Choice, an affine scheme $X=\operatorname{Spec}A$ and a quasi-coherent $\mathcal O_X$-module $\mathcal F$.

[F1] Cofinal-basis acyclicity: if $\mathcal B$ is a basis of a space $X$ containing $X$ and closed under finite intersections, $\mathrm{Cov}$ assigns to each $U\in\mathcal B$ a nonempty cofinal family of finite open covers whose finite intersections of members lie in $\mathcal B$, and $\check H^p(\mathcal U,\mathcal F)=0$ for all these covers and all $p>0$, then $H^q(U,\mathcal F|_U)=0$ for every $U\in\mathcal B$ and every $q>0$. ([[lem-cech-vanishing-on-a-cofinal-basis-implies-acyclicity]])

[F2] If $B$ is a commutative ring, $N$ a $B$-module and $h_1,\dots,h_r\in B$ generate the unit ideal, then the augmented alternating complex $0\to N\to\bigoplus_iN_{h_i}\to\bigoplus_{i<j}N_{h_ih_j}\to\cdots$ is exact. ([[lem-affine-qc-cech-unit-ideal-exact]])

[F3] For $f\in A$ the distinguished open $D(f)\subseteq\operatorname{Spec}A$ is the spectrum of the principal localisation $A_f$, distinguished opens form a basis of the topology and $D(f)\cap D(g)=D(fg)$. ([[lem-spectrum-localization-open-immersion]], [[cor-principal-localisation-spectrum-is-distinguished-open]], [[lem-distinguished-open-refinement-at-a-point]])

[F4] Every affine scheme is quasi-compact, so every open cover of a distinguished open in $\operatorname{Spec}A$ has a finite refinement by distinguished opens. ([[cor-affine-scheme-quasi-compact]])

[F5] For a ring $B$ and a $B$-module $N$ the associated sheaf $\widetilde N$ on $\operatorname{Spec}B$ has $\widetilde N(D(h))=N_h$ for $h\in B$; quasi-coherence of $\mathcal F$ means that every point of $X$ has an affine open neighbourhood on which $\mathcal F$ is isomorphic to such an associated sheaf. ([[def-associated-sheaf-module-affine-scheme]], [[lem-associated-sheaf-sections-basic-open]], [[def-quasi-coherent-module-scheme]])

[F6] The $p$-th Čech cohomology $\check H^p(\mathcal U,\mathcal F)$ of a cover is computed from the alternating cochain complex of [[def-cech-cohomology-open-cover]], and $H^q$ is sheaf cohomology as in [[def-sheaf-cohomology-derived-global-sections]]; both vanish in negative degrees by convention. The affine quasi-coherent equivalence identifies $\mathcal F|_{\operatorname{Spec}B}$ with $\widetilde N$ for $N=\Gamma(\operatorname{Spec}B,\mathcal F)$ on every affine open $\operatorname{Spec}B$. ([[thm-affine-quasi-coherent-equivalence]])

## Proof

**Proof technique:** direct: the distinguished affine opens form a cofinal basis closed under intersections; on each finite standard cover the Čech complex is the augmented principal-open complex of the exact unit-ideal lemma after identifying sections with localisations; the cofinal-basis acyclicity theorem then gives vanishing.

1.1 Take $\mathcal B=\{D(f):f\in A\}$, which contains $X=D(1)$ and is closed under finite intersections because $D(f)\cap D(g)=D(fg)$ [F3]. For $U=D(g)\in\mathcal B$ let $\mathrm{Cov}(U)$ be the set of finite covers of $U$ by distinguished opens $D(h_1),\dots,D(h_r)\subseteq U$ with $\sum_j A_gh_j=A_g$; equivalently, after writing $h_j$ for its image in $A_g$, these are the finite covers of $U$ by basic opens. Every open cover of $U$ has a refinement in $\mathrm{Cov}(U)$ because $U$ is affine hence quasi-compact and distinguished opens form a basis [F3, F4], and finite intersections of members of a cover in $\mathrm{Cov}(U)$ are again distinguished opens, hence lie in $\mathcal B$. [F3, F4]

2.1 Fix $U=D(g)\in\mathcal B$ and a cover in $\mathrm{Cov}(U)$ given by $h_1,\dots,h_r\in A_g$ generating the unit ideal of the ring $A_g$. The Čech complex of this cover with values in $\mathcal F$ has terms $\bigoplus_{i_0<\cdots<i_p}\mathcal F(D(h_{i_0}\cdots h_{i_p}))$ [F6]. By the affine quasi-coherent equivalence of [F6] and the associated-sheaf section formula [F5], the quasi-coherent restriction $\mathcal F|_U$ is isomorphic to $\widetilde N$ for $N=\mathcal F(U)$, so $\mathcal F(D(h_{i_0}\cdots h_{i_p}))\cong N_{h_{i_0}\cdots h_{i_p}}$; the Čech complex is therefore the augmented alternating complex of the ring $A_g$ and the module $N$ with respect to the generating elements $h_1,\dots,h_r$, and [F2] shows that it is exact in every positive degree, that is, $\check H^p(\mathcal U,\mathcal F)=0$ for every $p>0$. [F2, F5, F6, step 1.1]

3.1 The basis $\mathcal B$, the assignment $\mathrm{Cov}$ and the sheaf $\mathcal F$ satisfy all hypotheses of [F1]: $\mathcal B$ contains $X$ and is closed under finite intersections, each $\mathrm{Cov}(U)$ is a nonempty cofinal family of finite covers with intersections in $\mathcal B$ by step 1.1, and the required positive Čech vanishing is step 2.1. Hence $H^q(U,\mathcal F|_U)=0$ for every $U\in\mathcal B$ and every $q>0$; taking $U=X=D(1)$ gives $H^q(X,\mathcal F)=0$ for every $q>0$, which is the statement. [F1, step 1.1, step 2.1]

4.1 Boundary cases: if $A=0$ then $X=\varnothing$, the basis is $\mathcal B=\{\varnothing\}$, $\mathrm{Cov}(\varnothing)$ contains the empty cover, whose Čech complex is the zero complex, so step 2.1 holds vacuously and [F1] gives the vanishing; if $\mathcal F=0$ the same steps apply with $N=0$. The Axiom of Choice is used through [F1], [F2] and the affine quasi-coherent equivalence in [F6], and no other selection is made. [F1, F2, F6, step 2.1, given] ∎
