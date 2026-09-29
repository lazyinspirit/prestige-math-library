---
id: thm-veronese-pullback-twist
kind: theorem
title: "Veronese embedding pulls O(1) back to O(d)"
status: published
origin: pipeline
deps:
  - def-relative-projective-space-standard-charts
  - def-closed-immersion-schemes
  - def-very-ample-invertible-sheaf-relative
  - def-globally-generated-sheaf
  - thm-line-bundle-sections-define-projective-map
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-closed-immersion-local-on-target
  - def-locally-closed-immersion
  - lem-immersion-with-closed-image
  - lem-proper-source-to-separated-target-proper
  - thm-projective-space-proper-over-base
  - thm-proper-morphism-closed-image
  - ex-affine-n-space-over-arbitrary-base
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
    - title: "Gao-Zhang, Lectures on Algebraic Geometry, Chapter 5"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice as inherited from the projective-space and sheaf
constructions ([[def-axiom-of-choice]]). Let $S$ be a scheme, let $n\ge0$ and
$d\ge1$, and let $M$ be the set of multi-indices
$m=(m_0,\dots,m_n)$ with $m_j\ge0$ and $|m|=m_0+\dots+m_n=d$; put
$$N=|M|-1=\binom{n+d}{d}-1.$$
Write $\mathbb P^N_S$ for the relative projective space whose standard
coordinates are indexed by $M$
([[def-relative-projective-space-standard-charts]]), with coordinate sections
$y_m\in\Gamma(\mathbb P^N_S,\mathcal O(1))$ on the target and
$x_j\in\Gamma(\mathbb P^n_S,\mathcal O(1))$ on the source, and let
$$s_m=x^m=\prod_{j=0}^{n}x_j^{m_j}\in\Gamma\bigl(\mathbb P^n_S,\mathcal O(d)\bigr)$$
be the degree-$d$ monomial sections
([[def-very-ample-invertible-sheaf-relative]]). Let
$$\nu_d:\mathbb P^n_S\longrightarrow\mathbb P^N_S$$
be the associated morphism.

Then the monomial sections $s_m$ generate $\mathcal O_{\mathbb P^n_S}(d)$
([[def-globally-generated-sheaf]]) and $\nu_d$ is a closed immersion with
$$\nu_d^*\mathcal O_{\mathbb P^N_S}(1)\cong\mathcal O_{\mathbb P^n_S}(d),$$
carrying the coordinate section $y_m$ to $s_m$. For $d=1$ one has $N=n$ and
$\nu_1$ is the identity morphism; for $n=0$ the morphism $\nu_d$ is an
isomorphism $\mathbb P^0_S\cong\mathbb P^0_S$. All schemes may be empty and no
Noetherian or field hypothesis is imposed.

## Facts & Assumptions

**Given:** A scheme $S$, integers $n\ge0$ and $d\ge1$, the index set $M$ of degree-$d$ monomials with $|M|=\binom{n+d}{d}$, the relative projective spaces $\mathbb P^n_S$ and $\mathbb P^N_S$ with their standard charts, and the Axiom of Choice as inherited from the projective-space and sheaf constructions.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] The standard charts $U_i$ of $\mathbb P^n_S$ are affine over $S$, and over an affine base $T=\operatorname{Spec}A\subseteq S$ the chart $U_i^T=U_i\times_ST$ is $\operatorname{Spec}A[x^{(i)}_\ell:\ell\ne i]$ with $x^{(i)}_\ell=t_\ell/t_i$; the charts and their overlaps commute with base change. The twisting sheaf $\mathcal O(1)$ is glued from frames $e_i$ on $U_i$ with $e_j=x^{(i)}_je_i$ on overlaps, and the coordinate sections satisfy $x_i|_{U_i}=e_i$ and $x_j|_{U_i}=x^{(i)}_je_i$ for $j\ne i$, so that $X_{x_i}=D_+(x_i)=U_i$. For $d\ge1$ the sheaf $\mathcal O(d)=\mathcal O(1)^{\otimes d}$ has frame $e_i^d$ on $U_i$, and the monomial sections restrict to $s_m|_{U_i}=\bigl(\prod_{\ell\ne i}(x^{(i)}_\ell)^{m_\ell}\bigr)e_i^d$, so that on $U_i$ one has $X_{s_m}=D\bigl(\prod_{\ell\ne i}(x^{(i)}_\ell)^{m_\ell}\bigr)$. ([[def-relative-projective-space-standard-charts]], [[def-very-ample-invertible-sheaf-relative]], [[ex-affine-n-space-over-arbitrary-base]])

[F2] Let $X$ be an $S$-scheme, $L$ an invertible $\mathcal O_X$-module and $t_m\in\Gamma(X,L)$, indexed by a finite set, global sections generating $L$. Then there is a unique $S$-morphism $\varphi:X\to\mathbb P^N_S$ such that $\varphi^*\mathcal O(1)\cong L$ with $\varphi^*(y_m)$ corresponding to $t_m$ under this isomorphism and $\varphi^{-1}(D_+(y_m))=X_{t_m}$; moreover on the chart $D_+(y_{m_0})$ with coordinates $y_m/y_{m_0}$ one has $(y_m/y_{m_0})\circ\varphi=t_m/t_{m_0}$ on $X_{t_{m_0}}$. ([[thm-line-bundle-sections-define-projective-map]])

[F3] If finitely many global sections $t_0,\dots,t_r$ of an invertible sheaf $L$ induce a surjective morphism $\mathcal O_X^{r+1}\to L$, $(g_0,\dots,g_r)\mapsto\sum_ig_it_i$, then $L$ is globally generated. ([[def-globally-generated-sheaf]])

[F4] For a commutative ring $B$ and an ideal $I\subseteq B$ the quotient map $B\to B/I$ induces a closed immersion $\operatorname{Spec}(B/I)\to\operatorname{Spec}B$; a surjective ring homomorphism $B\to C$ induces a closed immersion after identifying $C$ with $B/\ker$. ([[lem-closed-immersion-affine-quotient-and-base-change]], [[def-closed-immersion-schemes]])

[F5] A morphism $i:Z\to X$ is a closed immersion if and only if its restrictions $i^{-1}(V_j)\to V_j$ to the members of an open cover $X=\bigcup_jV_j$ are closed immersions. ([[lem-closed-immersion-local-on-target]])

[F6] A morphism is an immersion when it factors as a closed immersion followed by an open immersion; for a factorization $f=j\circ c$ with $j$ an open immersion the image $f(Z)=c(Z)$ is locally closed, and if it is closed in $X$ then $f$ is a closed immersion. ([[def-locally-closed-immersion]], [[lem-immersion-with-closed-image]])

[F7] Assume AC. For every scheme $S$ and every $r\ge0$ the projection $\mathbb P^r_S\to S$ is proper; hence for an $S$-morphism $h:X\to Y$ with $X\to S$ proper and $Y\to S$ separated the morphism $h$ is proper; a proper morphism is a closed map, so the image of the whole source is closed. ([[thm-projective-space-proper-over-base]], [[lem-proper-source-to-separated-target-proper]], [[thm-proper-morphism-closed-image]])

## Proof

**Proof technique:** direct: prove that the monomial sections generate $\mathcal O(d)$, let the universal property produce $\nu_d$, check on affine base opens that each source chart maps to a target chart by a surjective ring map hence a closed immersion, use locality on the target to exhibit $\nu_d$ as an immersion, and use properness to close the image.

1.1 The monomial sections generate $\mathcal O(d)$. Fix a chart $U_i$ and let $m=i^d$ be the multi-index with $m_i=d$; by [F1] the restriction $s_{i^d}|_{U_i}=e_i^d$ is a frame of $\mathcal O(d)$ on $U_i$, so the component $\mathcal O_X\to\mathcal O(d)$ of the evaluation morphism indexed by $i^d$ is an isomorphism over $U_i$. Hence the evaluation morphism $\mathcal O_X^{|M|}\to\mathcal O(d)$, $(g_m)\mapsto\sum_mg_ms_m$, restricts to a surjection on every $U_i$; the charts cover $\mathbb P^n_S$, so it is surjective, and the $s_m$ generate $\mathcal O(d)$ by [F3]. [F1, F3, algebra]

2.1 The morphism and its pullback identity. By step 1.1 the sections $s_m$ generate the invertible sheaf $\mathcal O(d)$, so [F2] applies with $X=\mathbb P^n_S$, $L=\mathcal O(d)$ and $t_m=s_m$: there is a unique $S$-morphism $\nu_d:\mathbb P^n_S\to\mathbb P^N_S$ with $\nu_d^*\mathcal O(1)\cong\mathcal O(d)$ carrying $y_m$ to $s_m$, and $\nu_d^{-1}(D_+(y_m))=X_{s_m}$. Write $V_m=D_+(y_m)\subseteq\mathbb P^N_S$ for the target chart at $m$; taking $m=i^d$, [F1] gives $X_{s_{i^d}}=X_{x_i^d}=X_{x_i}=U_i$ (here $d\ge1$), so $\nu_d^{-1}(V_{i^d})=U_i$ for every $i$, and this proves the pullback identity asserted. [F1, F2, step 1.1]

3.1 The chartwise ring map is surjective. Let $T=\operatorname{Spec}A$ be an affine open of $S$. By base change [F1] the source chart is $U_i^T=\operatorname{Spec}A[x^{(i)}_\ell:\ell\ne i]$ and the target chart $V_{i^d}^T=V_{i^d}\times_ST$ has coordinate ring $A[u_m:m\in M,\ m\ne i^d]$ with $u_m=y_m/y_{i^d}$. On $U_i=X_{s_{i^d}}$ the chart formula of [F2] gives $u_m\circ\nu_d=s_m/s_{i^d}$, and by [F1] this is $s_m/s_{i^d}=\prod_{\ell\ne i}(x^{(i)}_\ell)^{m_\ell}$ because $s_m|_{U_i}=\bigl(\prod_{\ell\ne i}(x^{(i)}_\ell)^{m_\ell}\bigr)e_i^d$ and $s_{i^d}|_{U_i}=e_i^d$. Consequently the induced $A$-algebra map $A[u_m]\to A[x^{(i)}_\ell]$ sends $u_{i^{d-1}\ell}$ to $x^{(i)}_\ell$ for each $\ell\ne i$, hence is surjective, and by [F4] the base-changed morphism $U_i^T\to V_{i^d}^T$ is a closed immersion. [F1, F2, F4, step 2.1, algebra]

4.1 Each chart gives a closed immersion. Fix $i$. The open subschemes $V_{i^d}^T$, for affine opens $T\subseteq S$, cover $V_{i^d}$, and the restriction of $\nu_d|_{U_i}:U_i\to V_{i^d}$ to $V_{i^d}^T$ is the base-changed morphism $U_i^T\to V_{i^d}^T$ of step 3.1, which is a closed immersion; by [F5] therefore $\nu_d|_{U_i}:U_i\to V_{i^d}$ is a closed immersion. [F5, step 3.1]

5.1 $\nu_d$ is an immersion. Let $W=\bigcup_{i=0}^{n}V_{i^d}\subseteq\mathbb P^N_S$, an open subscheme containing the image of $\nu_d$ because $\nu_d(U_i)\subseteq V_{i^d}$ by step 2.1. Let $j:W\hookrightarrow\mathbb P^N_S$ be the open immersion and $\nu':\mathbb P^n_S\to W$ the morphism with $\nu_d=j\circ\nu'$. The opens $V_{i^d}$ cover $W$ and $(\nu')^{-1}(V_{i^d})=U_i$, so all restrictions of $\nu'$ to this cover are the closed immersions of step 4.1; by [F5] the morphism $\nu'$ is a closed immersion, and then $\nu_d=j\circ\nu'$ is an immersion by [F6]. [F5, F6, step 2.1, step 4.1]

6.1 $\nu_d$ is a closed immersion. Since $\nu_d$ is an immersion by step 5.1 and is an $S$-morphism, and since $\mathbb P^n_S\to S$ is proper while $\mathbb P^N_S\to S$ is proper hence separated, [F7] shows that $\nu_d$ is proper; a proper morphism is closed, so the image $\nu_d(\mathbb P^n_S)$ is closed in $\mathbb P^N_S$, and an immersion with closed image is a closed immersion by [F6]. [F6, F7, step 5.1]

7.1 Conclusion and degenerate cases. Steps 1.1, 2.1 and 6.1 together show that the $s_m$ generate $\mathcal O(d)$ and that $\nu_d$ is a closed immersion with $\nu_d^*\mathcal O(1)\cong\mathcal O(d)$ carrying $y_m$ to $s_m$. If $d=1$ then $M=\{e_0,\dots,e_n\}$ and the identity of $\mathbb P^n_S$ has pullback data $(\mathcal O(1);x_0,\dots,x_n)$, so $\nu_1=\mathrm{id}$ by the uniqueness in [F2]. If $n=0$ then $\mathbb P^0_S\cong S$, $\mathcal O(d)=\mathcal O_S$ and the single monomial section $x_0^d$ is a frame, so $\nu_d:\mathbb P^0_S\to\mathbb P^0_S$ is an $S$-morphism of $S$ to itself and a closed immersion by step 6.1, hence an isomorphism; for $S=\varnothing$ all four projective spaces are empty and $\nu_d$ is the unique isomorphism $\varnothing\to\varnothing$, which is also a closed immersion. The Axiom of Choice [A1] is inherited from the projective-space constructions and the gluing data of [F1]; no further choice is made. [A1, F1, F2, step 6.1, cases: d=1 and n=0 and empty S]
\qed
