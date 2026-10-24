---
id: ex-nodal-cubic-normalization-genus
kind: example
title: "Nodal cubic: arithmetic genus one, delta one, geometric genus zero"
status: published
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
verification:
  audited: 2026-10-02
---

## Example

Assume the Axiom of Choice. Let $k$ be algebraically closed of characteristic $\ne2$ and let
$$X=V_+(Y^2Z-X^3-X^2Z)\subseteq\mathbb P^2_k$$
be the nodal plane cubic, with node $o=(0:0:1)$. Then
$p_a(X)=\frac{(3-1)(3-2)}2=1$, the unique singular point $o$ is a node with
$\delta_o(X)=1$, and the normalization $X^{\mathrm{nu}}$ has geometric genus
$g(X^{\mathrm{nu}})=1-1=0$; the normalization is the projective line, matching
the parametrization $(T:S)\mapsto(S(T^2-S^2):T(T^2-S^2):S^3)$ of the nodal
cubic. (Characteristic two is excluded because there the tangent cone
degenerates and the singular point is not an ordinary node; the computation
below uses $\operatorname{char}k\ne2$.)

## Facts & Assumptions
**Given:** The Axiom of Choice, an algebraically closed field $k$ with $\operatorname{char}k\ne2$, the plane cubic $X=V_+(Y^2Z-X^3-X^2Z)$, its node $o=(0:0:1)$, and the map $\psi:\mathbb P^1_k\to X$, $(T:S)\mapsto(S(T^2-S^2):T(T^2-S^2):S^3)$.

[F1] For an integral proper plane curve $X=V_+(F)\subseteq\mathbb P^2_k$ with $d=\deg F$ one has $H^0(X,\mathcal O_X)=k$ and $p_a(X)=\frac{(d-1)(d-2)}2$. ([[thm-plane-curve-arithmetic-genus]])

[F2] Under the Axiom of Choice, for an integral proper finite-type curve over algebraically closed $k$ with normalization $\nu$, the delta invariant $\delta_x(X)=\dim_k((\nu_*\mathcal O_{X^{\mathrm{nu}}})_x/\mathcal O_{X,x})$ vanishes exactly at regular points, and $g(X^{\mathrm{nu}})=p_a(X)-\sum_x\delta_x(X)$; the sum is finite and supported on the singular points, where it is computed. ([[def-delta-invariant-curve-singularity]], [[lem-normalization-lowers-arithmetic-genus-delta]], [[def-axiom-of-choice]])

[F3] Under the Axiom of Choice, if $F$ is irreducible of degree $d$ defining the integral plane curve $X$, then $g(X^{\mathrm{nu}})=\frac{(d-1)(d-2)}2-\sum_x\delta_x(X)$ over the finitely many singular points. ([[cor-plane-curve-geometric-genus-delta-correction]], [[def-axiom-of-choice]])

[F4] Under the Axiom of Choice, the normalization glues affine integral closures and is finite, birational and initial among normal integral schemes finite and birational over an integral separated finite-type curve of chain dimension one. ([[thm-normalization-glues-integral-finite-type-curves]], [[def-axiom-of-choice]])

[F5] At a closed $k$-rational point of $k[x,y]/(f)$, regularity is equivalent to Jacobian rank $2-\dim A_{\mathfrak m}$; for the closed points of these integral curve charts the local dimension is one, so this is equivalent to the gradient of $f$ being nonzero. ([[thm-jacobian-criterion-affine-variety]])

[F6] $\mathbb P^1_k$ has its standard affine charts and is smooth, proper and geometrically integral; under Choice, regular local rings are normal, so $\mathbb P^1_k$ is normal. ([[def-projective-line-two-affine-cover-and-twisting-sheaf]], [[thm-regular-local-rings-are-normal]], [[def-axiom-of-choice]])

[F7] A finite-type $k$-algebra is Noetherian; a finite-type domain $A$ over $k$ has $\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$, and the chain dimension of a Noetherian space is the supremum of the dimensions on an open cover. ([[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]], [[thm-affine-domain-dimension-transcendence-degree]], [[lem-chain-dimension-open-cover]])

[F8] Projective space over $k$ is proper, a closed immersion is proper, and proper morphisms compose; hence a closed subscheme of $\mathbb P^2_k$ is proper over $k$. ([[thm-projective-space-proper-over-base]], [[lem-closed-immersion-proper]], [[lem-proper-stable-composition]])

[F9] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])



## Proof

**Proof technique:** direct; locate the unique singular point by the Jacobian criterion, compute the delta invariant from the explicit normalization, and apply the genus correction formula.

1.1 The cubic is an integral curve, and its only singular point is the ordinary node $o$. On $Z=1$, let $f=y^2-x^3-x^2=y^2-x^2(x+1)$. Over $k(x)$ the monic quadratic $f$ is irreducible: $x^2(x+1)$ has valuation one at $x+1$, so it is not a square; Gauss's lemma gives irreducibility in $k[x,y]$. The homogeneous cubic is not divisible by $Z$, hence is irreducible as well. Since $k$ is algebraically closed, $X$ is geometrically integral. The charts $D(Z)$ and $D(Y)$ cover $X$, because $Y=Z=0$ in its equation forces $X=0$. On $D(Z)$ the coordinate ring is the domain $A=k[x,y]/(y^2-x^3-x^2)$ with fraction field $k(t)$ under $x=t^2-1$, $y=t(t^2-1)$; here $t=y/x$ in the fraction field. On $D(Y)$ the coordinate ring is $R=k[x,z]/((1-x^2)z-x^3)$. The identity $1=(1-x^2)(1+x^2+xz)$ in $R$ makes $1-x^2$ invertible, and solving for $z$ gives $R\cong k[x,(1-x^2)^{-1}]$. Both chart rings are finite-type domains and hence Noetherian; [F7] gives their dimension one and the chain dimension one of their finite open cover $X$. The projective cubic is a closed subscheme of $\mathbb P^2_k$, hence proper by [F8]; it is also separated and finite type. Thus it is an integral proper curve, and its generic point is regular because its local ring is the function field. Every other point is closed. On $Z=1$ the partials of $f$ are $-3x^2-2x=-x(3x+2)$ and $2y$. A closed singular point must have $y=0$, so the curve equation gives $x=0$ or $x=-1$; at $x=-1$ the first partial is $-1$, in every characteristic. Thus the only singular point on this chart is $o$. On $Y=1$ the equation $g=z-x^3-x^2z$ has partials $-3x^2-2xz$ and $1-x^2$; if the second vanishes, then $x^2=1$ and $g=-x^3\ne0$, so there is no singular point there. On $X=1$ the equation $h=y^2z-1-z$ has partials $2yz$ and $y^2-1$; the equation $z(y^2-1)=1$ forces the second partial to be nonzero. The quadratic tangent cone at $o$ is $y^2-x^2=(y-x)(y+x)$, with distinct tangent lines because $\operatorname{char}k\ne2$. Hence $o$ is an ordinary node and all other points are regular. [F5, F7, F8]

2.1 Arithmetic genus. By step 1.1, $X$ is an integral proper plane curve of degree three, so [F1] gives $p_a(X)=\frac{(3-1)(3-2)}2=1$. [F1, step 1.1]

2.2 Explicit normalization and finite projective map. Put $q=T^2-S^2$. The homogeneous triple defining $\psi(T:S)=(Sq:Tq:S^3)$ has no common zero: if $S=0$, then $Y=T^3\ne0$, while if $S\ne0$, then $Z=S^3\ne0$. It lands on $X$ because $Y^2Z=T^2q^2S^3=S^3q^2(q+S^2)=X^3+X^2Z$. On $D(Z)$ the source chart is $\operatorname{Spec}k[t]$ with $t=T/S$, and its ring map is $A=k[x,y]/(y^2-x^3-x^2)\to k[t]$, $x\mapsto t^2-1$, $y\mapsto t(t^2-1)$. It is finite because $k[t]=A[t]$ and $t^2=x+1$; it is birational since $t=y/x$ in $\operatorname{Frac}(A)$. On $D(Y)$ the inverse image is $\operatorname{Spec}k[u,(1-u^2)^{-1}]$, where $u=S/T$, and the chart map $R\to k[u,(1-u^2)^{-1}]$ sends $x\mapsto u$, $z\mapsto u^3/(1-u^2)$; it is an isomorphism by the description of $R$ in step 1.1. As $D(Z)$ and $D(Y)$ cover $X$, these chart maps show that $\psi$ is finite. Its source $\mathbb P^1_k$ is normal and integral by [F6], so the finite birational map identifies it with the normalization by the initial property in [F4]. [F4, F6, step 1.1]

3.1 Delta at the node. By step 2.2, $\psi$ is the normalization map. The two points $t=1$ and $t=-1$ of the affine source map to $o$ and no other point does, so the stalk of $\nu_*\mathcal O_{\mathbb P^1}$ at $o$ is the semilocalization $k[t]_S$ with $S=\{h\in k[t]:h(1)\ne0,\ h(-1)\ne0\}$. Put $u=t^2-1$ and identify the coordinate ring of $Z=1$ with the subring $A=k[u,tu]=k[u]\oplus tu\,k[u]\subseteq k[t]$; also $k[t]=k[u]\oplus t\,k[u]$. The semilocalization equals $k[u]_{(u)}\oplus t\,k[u]_{(u)}$: if $h(t)=a(u)+tb(u)$ is nonzero at both $1$ and $-1$, its norm $h(t)h(-t)=a(u)^2-(u+1)b(u)^2$ is nonzero at $u=0$, so $h$ is invertible after localizing over $k[u]_{(u)}$, and every element of $k[u]\setminus(u)$ is nonzero at both points. The image of $\mathcal O_{X,o}=A_{(u,tu)}$ in this semilocalization is $k[u]_{(u)}\oplus tu\,k[u]_{(u)}$. The quotient is $t\,k[u]_{(u)}/tu\,k[u]_{(u)}\cong k[u]_{(u)}/u\,k[u]_{(u)}\cong k$, of dimension one. Hence $\delta_o(X)=1$, and since $o$ is the only singular point by step 1.1 and delta vanishes off the singular locus, $\sum_x\delta_x(X)=1$. [F2, step 1.1, step 2.2]

4.1 Genus. By [F3] and steps 1.1 and 3.1, $g(X^{\mathrm{nu}})=\frac{(3-1)(3-2)}2-\sum_x\delta_x(X)=1-1=0$; the geometric genus of $X$ is $0$. [F2, F3, step 3.1]

5.1 Normalization is the line. By step 2.2, the displayed map is a normal integral finite birational model of $X$; the uniqueness clause in [F4] identifies it with $X^{\mathrm{nu}}$. Thus the normalization is the projective line, and the geometric genus computed in step 4.1 is zero. [F4, step 2.2, step 4.1]

6.1 Conclusion. Under the Axiom of Choice, for the nodal cubic $X=V_+(Y^2Z-X^3-X^2Z)$ over an algebraically closed field with $\operatorname{char}k\ne2$, the arithmetic genus is $1$, the unique singular point is the ordinary node $o$ with delta invariant $1$, and the normalization is the projective line; the normalization has geometric genus $0$. Choice is used in the normalization and normality interfaces [F4, F6] and the delta/genus interfaces [F2, F3], in steps 2.2, 3.1, 4.1 and 5.1. [F4, F6, F2, F3, F9, step 2.2, step 3.1, step 4.1, step 5.1] ∎
