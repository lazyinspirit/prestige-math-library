---
id: ex-cech-cocycle-projective-line-o-minus-two
kind: example
title: "Generator cocycle for H1 of O(-2)"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-top-cohomology-projective-space-o-d
  - def-axiom-of-choice
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-open-cover
  - def-relative-projective-space-standard-charts
  - def-sheaf-cohomology-derived-global-sections
  - def-twist-quasi-coherent-sheaf-projective
  - def-twisting-sheaf-proj
  - lem-proj-associated-sheaf-basic-sections
  - lem-projective-space-cech-monomial-complex
  - lem-projective-space-diagonal-closed
  - lem-standard-opens-proj-affine
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-projective-space-as-proj
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Example

Let $k$ be a field, let $X=\mathbb P^1_k$ with the two standard charts
$U_0=D_+(x_0)$, $U_1=D_+(x_1)$ ordered by $0<1$, and let $\mathcal O_X(-2)$ be
the twisting sheaf ([[def-relative-projective-space-standard-charts]],
[[def-twisting-sheaf-proj]]). Then
$$1/(x_0x_1)=x_0^{-1}x_1^{-1}\;\in\;\Gamma(U_0\cap U_1,\mathcal O_X(-2))$$
is a Čech $1$-cocycle for this cover, and its class spans the $k$-vector space
$$H^1(X,\mathcal O_X(-2))\;\cong\;k$$
([[def-cech-cohomology-open-cover]],
[[def-sheaf-cohomology-derived-global-sections]]); in particular the class is
nonzero and is a basis of $H^1$. Every field $k$ is allowed, including
$\mathbb F_2$, and no smoothness, Noetherian or characteristic hypothesis is
used.

## Facts & Assumptions
**Given:** A field $k$; the projective line $X=\mathbb P^1_k$ with the standard
charts $U_0=D_+(x_0)$, $U_1=D_+(x_1)$ and the twisting sheaf
$\mathcal O_X(-2)$; and the Axiom of Choice inherited from the cited suppliers.

[F1] Charts and affine cover ([[def-relative-projective-space-standard-charts]],
[[thm-projective-space-as-proj]], [[lem-standard-opens-proj-affine]]):
$X=\mathbb P^1_k\cong\operatorname{Proj}k[x_0,x_1]$; the standard charts
$U_i=D_+(x_i)$ are affine open subschemes forming a cover of $X$, and the
intersection $U_0\cap U_1=D_+(x_0x_1)$ is again affine; the index set
$\{0,1\}$ is ordered by $0<1$.

[F2] Separatedness ([[lem-projective-space-diagonal-closed]]): the diagonal
$\Delta_{X/k}$ is a closed immersion, so the structure morphism of $X$ over
$\operatorname{Spec}k$ is separated.

[F3] Twists and their sections ([[def-twisting-sheaf-proj]],
[[def-twist-quasi-coherent-sheaf-projective]],
[[lem-proj-associated-sheaf-basic-sections]]): $\mathcal O_X(-2)$ is the
associated sheaf $\widetilde{S(-2)}$ of the graded module $S(-2)$,
$S=k[x_0,x_1]$, it is quasi-coherent, and for a homogeneous $f$ of positive
degree $\Gamma(D_+(f),\mathcal O_X(-2))=S(-2)_{(f)}$ is the degree-zero part
of the homogeneous localisation; for $f=x_0x_1$ this module has as $k$-basis
the Laurent monomials $x_0^{e_0}x_1^{e_1}$ with
$e_0+e_1=-2$, and the element $1/(x_0x_1)$ is the member $e=(-1,-1)$.

[F4] Ordered Čech complex ([[def-cech-cochain-complex-open-cover]],
[[def-cech-cohomology-open-cover]]): for an open cover indexed by a linearly
ordered set one has $C^p=\prod_{i_0<\dots<i_p}\mathcal F(U_{i_0}\cap\dots\cap
U_{i_p})$ with the alternating Čech differential; for the two-member cover
$U_0,U_1$ this gives $C^0=\mathcal F(U_0)\oplus\mathcal F(U_1)$,
$C^1=\mathcal F(U_0\cap U_1)$ and $C^p=0$ for $p\ge2$, with
$\delta^0(s_0,s_1)=(s_1-s_0)|_{U_0\cap U_1}$.

[F5] Monomial decomposition of the Čech complex
([[lem-projective-space-cech-monomial-complex]]): for $X=\mathbb P^n_A$ with
the ordered standard cover and $\mathcal O_X(d)$ one has
$C^\bullet(\mathcal U,\mathcal O_X(d))=\bigoplus_e K^\bullet(e)$, the sum over
$e\in\mathbb Z^{n+1}$ with $\sum_ie_i=d$, where $K^p(e)$ is free on basis
elements $x^e_\sigma$ indexed by the $(p+1)$-element subsets
$\sigma\supseteq N(e)$, $N(e)=\{i:e_i<0\}$; if $N(e)=\varnothing$ then
$H^0(K^\bullet(e))=A$ and all higher cohomology vanishes, if
$N(e)=\{0,\dots,n\}$ then $H^n(K^\bullet(e))=A$ and the other groups vanish,
and if $N(e)$ is nonempty and proper then $K^\bullet(e)$ is contractible;
cohomology of the total complex is the direct sum of the cohomologies of the
summands.

[F6] Čech comparison
([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]): for a
quasi-compact separated scheme $X$ with a finite affine open cover
$U_0,\dots,U_r$ and a quasi-coherent $\mathcal O_X$-module $\mathcal F$, the
canonical comparison $\check H^q(\mathcal U,\mathcal F)\to H^q(X,\mathcal F)$
is an isomorphism for every $q\ge0$.

[F7] Top cohomology of projective twists
([[cor-top-cohomology-projective-space-o-d]]): for $n\ge1$ the group
$H^n(\mathbb P^n_A,\mathcal O(d))$ is the free $A$-module on the Laurent
monomials $x_0^{e_0}\cdots x_n^{e_n}$ with all $e_i<0$ and $\sum_ie_i=d$, and
it is zero for $d>-n-1$; for $A=k$ a field, $n=1$ and $d=-2$ there is exactly
one such monomial, $x_0^{-1}x_1^{-1}$, so $H^1(\mathbb P^1_k,\mathcal O(-2))$
is free of rank one over $k$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]): every family of nonempty
sets has a choice function, inherited here from [F6] and [F7].



## Verification

**Proof technique:** direct: the two-member Čech complex is computed by the
Laurent-monomial decomposition, in which exactly one summand is all-negative
and contributes the class of $1/(x_0x_1)$, and the comparison theorem
identifies this Čech class with the cohomology class.

1.1 The cover $(U_0,U_1)$ ordered by $0<1$ is a finite affine open cover of the quasi-compact separated scheme $X$, and $\mathcal O_X(-2)$ is quasi-coherent, so by [F6] the comparison map $\check H^1(\mathcal U,\mathcal O_X(-2))\to H^1(X,\mathcal O_X(-2))$ is an isomorphism. [F1, F2, F3, F6]

2.1 For the two-member cover the ordered Čech complex is $0\to C^0\xrightarrow{\delta^0}C^1\to0$ with $C^0=\Gamma(U_0,\mathcal O_X(-2))\oplus\Gamma(U_1,\mathcal O_X(-2))$, $C^1=\Gamma(U_0\cap U_1,\mathcal O_X(-2))$ and $\delta^0(s_0,s_1)=(s_1-s_0)|_{U_0\cap U_1}$; hence every $1$-cochain is a cocycle and $\check H^1(\mathcal U,\mathcal O_X(-2))=C^1/\operatorname{im}\delta^0$, and by [F3] the element $1/(x_0x_1)$ is the basis monomial $x^{(-1,-1)}$ of $C^1$. [F4, F3, step 1.1]

3.1 In the monomial decomposition [F5] with $n=1$ and $d=-2$, a summand with $N(e)=\varnothing$ would require $e_0,e_1\ge0$ and $e_0+e_1=-2$, which is impossible, and $N(e)=\{0,1\}$ holds only for $e=(-1,-1)$, whose summand satisfies $K^0=0$ and $K^1=k\cdot x^{(-1,-1)}_{\{0,1\}}$, so it contributes $H^1=k$ generated by the class of $x^{(-1,-1)}$; every other $e$ has nonempty proper $N(e)$ and contributes a contractible summand with zero cohomology, so $\check H^1(\mathcal U,\mathcal O_X(-2))=k\cdot[1/(x_0x_1)]$. [F5, step 2.1]

4.1 By the isomorphism of step 1.1 the class of $1/(x_0x_1)$ spans $H^1(X,\mathcal O_X(-2))$, which by [F7] is free on the single all-negative monomial $x_0^{-1}x_1^{-1}$ and hence is $k$; in particular the class is nonzero and forms a basis. [F7, step 1.1, step 3.1]

5.1 Boundary and degenerate cases: $k$ is a field, so $k\neq0$, $X$ is nonempty and both charts and their intersection are nonempty; $d=-2=-n-1$ is the endpoint at which the top group $H^1$ has rank $\binom{1}{1}=1$ and is nonzero, whereas $d>-2$ gives $H^1=0$ and $d<-2$ gives higher rank; the degree $q=1=n$ is the top degree of the two-chart cover and the only degree in which a cohomology class is exhibited; the field $k=\mathbb F_2$ and fields of every characteristic are allowed; the cover, the monomial $x_0^{-1}x_1^{-1}$ and the comparison map are canonical, so no selection beyond the inherited [A1] occurs. [A1, F1, F7, step 4.1] ∎
