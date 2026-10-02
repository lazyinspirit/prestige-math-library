---
id: ex-cuspidal-cubic-normalization-genus
kind: example
title: "Cuspidal cubic: delta invariant and normalization"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-plane-curve-geometric-genus-delta-correction
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-delta-invariant-curve-singularity
  - def-geometric-genus-singular-curve
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - lem-chain-dimension-open-cover
  - lem-closed-immersion-proper
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - lem-normalization-lowers-arithmetic-genus-delta
  - lem-proper-stable-composition
  - thm-affine-domain-dimension-transcendence-degree
  - thm-jacobian-criterion-affine-variety
  - thm-normalization-glues-integral-finite-type-curves
  - thm-plane-curve-arithmetic-genus
  - thm-projective-space-proper-over-base
  - thm-regular-local-rings-are-normal
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Example

Assume the Axiom of Choice. Let $k$ be algebraically closed with $\operatorname{char}k\ne2,3$ and let
$$X=V_+(Y^2Z-X^3)\subseteq\mathbb P^2_k$$
be the cuspidal cubic, with cusp $o=(0:0:1)$. Then $p_a(X)=\frac{(3-1)(3-2)}2=1$,
the cusp has $\delta_o(X)=1$, the curve is smooth away from the cusp, and the
normalization of $X$ is the projective line via the parametrization
$$t\longmapsto(t^2:t^3:1),$$
so the geometric genus of $X$ is $g(X)=0$.

## Facts & Assumptions
**Given:** The Axiom of Choice, an algebraically closed field $k$ of characteristic $\ne2,3$, the plane curve $X=V_+(Y^2Z-X^3)$, its cusp $o=(0:0:1)$, and the map $\varphi:\mathbb P^1_k\to X$ given on coordinates $(T:S)$ by $(T:S)\mapsto(T^2S:T^3:S^3)$.

[F1] For a closed subscheme $V_+(F)\subseteq\mathbb P^2_k$ which is a curve, $H^0(X,\mathcal O_X)=k$ and $p_a(X)=\frac{(d-1)(d-2)}{2}$, where $d=\deg F$. ([[thm-plane-curve-arithmetic-genus]])

[F2] Under the Axiom of Choice, for an integral proper finite-type curve $X$ over algebraically closed $k$ with normalization $\nu:X^{\mathrm{nu}}\to X$, the delta invariant is $\delta_x(X)=\dim_k\bigl((\nu_*\mathcal O_{X^{\mathrm{nu}}})_x/\mathcal O_{X,x}\bigr)$, it vanishes exactly at regular points, the sum over closed points is finite and supported on the singular locus, and $g(X^{\mathrm{nu}})=p_a(X)-\sum_x\delta_x(X)$; the geometric genus $g(X)=g(X^{\mathrm{nu}})$ is the genus of the smooth proper normalization. ([[def-delta-invariant-curve-singularity]], [[lem-normalization-lowers-arithmetic-genus-delta]], [[def-geometric-genus-singular-curve]], [[def-axiom-of-choice]])

[F3] Under the Axiom of Choice, for an irreducible homogeneous form $F$ of degree $d\ge1$ defining the integral plane curve $X$, one has $g(X^{\mathrm{nu}})=\frac{(d-1)(d-2)}{2}-\sum_x\delta_x(X)$, the sum over the finitely many singular points. ([[cor-plane-curve-geometric-genus-delta-correction]], [[def-axiom-of-choice]])

[F4] Under the Axiom of Choice, the normalization of an integral separated finite-type curve of chain dimension one glues the affine integral closures; it is finite and birational, unique up to unique isomorphism, and initial among normal integral schemes finite and birational over the curve. ([[thm-normalization-glues-integral-finite-type-curves]], [[def-axiom-of-choice]])

[F5] At a closed $k$-rational point of an affine hypersurface $A=k[t_1,\dots,t_n]/(f)$, regularity is equivalent to Jacobian rank $n-\dim A_{\mathfrak m}$; for the closed points of these integral curve charts the local dimension is one, so in two variables this is equivalent to the gradient of $f$ being nonzero. ([[thm-jacobian-criterion-affine-variety]])

[F6] $\mathbb P^1_k$ has its standard affine charts and is smooth, proper and geometrically integral; under Choice, regular local rings are normal, so $\mathbb P^1_k$ is normal. ([[def-projective-line-two-affine-cover-and-twisting-sheaf]], [[thm-regular-local-rings-are-normal]], [[def-axiom-of-choice]])

[F7] A finite-type $k$-algebra is Noetherian; a finite-type domain $A$ over $k$ has $\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$, and the chain dimension of a Noetherian space is the supremum of the dimensions on an open cover. ([[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]], [[thm-affine-domain-dimension-transcendence-degree]], [[lem-chain-dimension-open-cover]])

[F8] Projective space over $k$ is proper, a closed immersion is proper, and proper morphisms compose; hence a closed subscheme of $\mathbb P^2_k$ is proper over $k$. ([[thm-projective-space-proper-over-base]], [[lem-closed-immersion-proper]], [[lem-proper-stable-composition]])

[F9] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])



## Proof

**Proof technique:** direct; identify the singular locus by the Jacobian criterion, compute the delta invariant from the explicit normalization, and read the genus off the correction formula.

1.1 The cubic is an integral curve, and its only singular point is the cusp $o$. On $Z=1$, the equation is $f=y^2-x^3$. Over $k(x)$ this monic quadratic is irreducible because $x^3$ has odd valuation at $x=0$ and is not a square; Gauss's lemma gives irreducibility in $k[x,y]$. The homogeneous cubic is not divisible by $Z$, hence is irreducible. Since $k$ is algebraically closed, $X$ is geometrically integral. The charts $D(Z)$ and $D(Y)$ cover $X$, because $Y=Z=0$ in its equation forces $X=0$. On $D(Z)$ the coordinate ring $A=k[x,y]/(y^2-x^3)$ is a domain with fraction field $k(t)$ under $x=t^2$, $y=t^3$, where $t=y/x$. On $D(Y)$ the ring is $k[x,z]/(z-x^3)\cong k[x]$. Both chart rings are finite-type domains and hence Noetherian; [F7] gives their dimension one and the chain dimension one of their finite open cover $X$. The projective cubic is a closed subscheme of $\mathbb P^2_k$, hence proper by [F8]; it is also separated and finite type. Thus it is an integral proper curve, and its generic point is regular because its local ring is the function field. Every other point is closed. On $Z=1$, the partials of $f$ are $-3x^2$ and $2y$, so a closed singular point must be $x=y=0$ because $\operatorname{char}k\ne2,3$; this is $o$. On $Y=1$, the equation is $g=z-x^3$ and its partials $-3x^2$ and $1$ never vanish together. On $X=1$, the equation is $h=y^2z-1$ with partials $2yz$ and $y^2$; the equation forces $y\ne0$, so they do not both vanish. Hence all other points are regular. [F5, F7, F8]

2.1 Arithmetic genus. By step 1.1, $X$ is an integral proper plane curve of degree three, so [F1] gives $p_a(X)=\frac{(3-1)(3-2)}2=1$. [F1, step 1.1]

2.2 The finite projective normalization map. The homogeneous triple defining $\varphi(T:S)=(T^2S:T^3:S^3)$ has no common zero: if $S=0$, then $Y=T^3\ne0$, while if $S\ne0$, then $Z=S^3\ne0$. It lands on $X$ because $Y^2Z=T^6S^3=X^3$. On $D(Z)$ the source is $\operatorname{Spec}k[t]$ with $t=T/S$, and the ring map $A=k[x,y]/(y^2-x^3)\to k[t]$, $x\mapsto t^2$, $y\mapsto t^3$, is finite because $k[t]=A[t]$ and $t^2=x$; it is birational since $t=y/x$ in $\operatorname{Frac}(A)$. On $D(Y)$ the inverse image is $\operatorname{Spec}k[s]$ with $s=S/T$, and the target ring $k[x,z]/(z-x^3)$ maps isomorphically to $k[s]$ by $x\mapsto s$, $z\mapsto s^3$. As $D(Z),D(Y)$ cover $X$, the projective map is finite. Its source is normal and integral by [F6], so the finite birational map identifies it with the normalization by the initial property in [F4]. [F4, F6, step 1.1]

3.1 Delta at the cusp. By step 2.2, $\varphi$ is the normalization map. The only point of the affine source mapping to the cusp $o$ is $t=0$, so the stalk of $\nu_*\mathcal O_{\mathbb P^1}$ at $o$ is the local ring $k[t]_{(t)}$, and the image of $\mathcal O_{X,o}=A_{(x,y)}$ in it is the local ring $A_{(x,y)}=k[t^2,t^3]_{(t^2,t^3)}$. Writing $u=t^2$ one has $k[t]=k[u]\oplus tk[u]$ and $k[t^2,t^3]=k[u]\oplus t^3k[u]=k[u]\oplus tu\,k[u]$; localizing at $(t)$, which inverts no power of $u$, gives $k[t]_{(t)}=k[u]_{(u)}\oplus t\,k[u]_{(u)}$ and $k[t^2,t^3]_{(t^2,t^3)}=k[u]_{(u)}\oplus t\,u\,k[u]_{(u)}$. Hence the quotient is $t\,k[u]_{(u)}/tu\,k[u]_{(u)}\cong k[u]_{(u)}/u\,k[u]_{(u)}\cong k$, a one-dimensional $k$-vector space, and $\delta_o(X)=1$. Since $o$ is the only singular point by step 1.1 and $\delta$ vanishes at regular points, $\sum_x\delta_x(X)=1$. [F2, step 1.1, step 2.2]

4.1 Genus. By [F3] applied to the cubic $X$ (which has only isolated singularities by step 1.1) and steps 2.1 and 3.1, [F2, F3, step 2.1, step 3.1]
$$g(X^{\mathrm{nu}})=\frac{(3-1)(3-2)}2-\delta_o(X)=1-1=0,$$
so the geometric genus of $X$ is $0$.

5.1 The normalization is the line. By step 2.2, the displayed map is a normal integral finite birational model of $X$; the uniqueness clause in [F4] identifies it with $X^{\mathrm{nu}}$. Hence the normalization of the cuspidal cubic is the projective line, and its geometric genus is zero by step 4.1. [F4, step 2.2, step 4.1]

6.1 Conclusion. Under the Axiom of Choice, for the cuspidal cubic $X=V_+(Y^2Z-X^3)$ over an algebraically closed field with $\operatorname{char}k\ne2,3$: $p_a(X)=1$, the cusp $o$ is the unique singular point with $\delta_o(X)=1$, and the normalization is $\mathbb P^1_k$ via $t\mapsto(t^2:t^3:1)$ with geometric genus zero. Choice is used in the normalization and normality interfaces [F4, F6] and the delta/genus interfaces [F2, F3], in steps 2.2, 3.1, 4.1 and 5.1. [F4, F6, F2, F3, F9, step 2.2, step 3.1, step 4.1, step 5.1] ∎
