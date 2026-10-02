---
id: ex-smooth-conic-is-projective-line-with-point
kind: example
title: A smooth conic is a projective line once it has a rational point
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
- cor-morphisms-equal-on-dense-open-reduced-source
- def-algebraic-curve-over-field
- def-axiom-of-choice
- def-degree-divisor-proper-curve
- def-divisor-smooth-proper-curve
- def-order-codimension-one-rational-function
- def-projective-line-two-affine-cover-and-twisting-sheaf
- def-rational-map-integral-schemes
- def-relative-projective-space-standard-charts
- def-riemann-roch-space-of-divisor
- def-smooth-morphism-to-field-classical
- lem-chain-dimension-open-cover
- lem-closed-immersion-proper
- lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
- lem-projective-line-curve-and-divisor-basics
- lem-proper-stable-composition
- lem-rational-map-smooth-curve-to-proper-scheme-extends
- thm-affine-domain-dimension-transcendence-degree
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
    - title: William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8
      url: https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf
    - title: The Stacks Project, Algebraic Curves (tag 0BRV)
      url: https://stacks.math.columbia.edu/download/curves.pdf
    - title: Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
verification:
  audited: 2026-10-02
---


## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field of
characteristic not two, let $C=V_+(F)\subseteq\mathbb P^2_k$ be a smooth conic
with a $k$-rational point $p$, and let $\mathbb P^1_k$ be the projective line
with its standard charts
([[def-relative-projective-space-standard-charts]],
[[def-projective-line-two-affine-cover-and-twisting-sheaf]]). Then:

1. projection from $p$ exhibits $C$ as isomorphic to $\mathbb P^1_k$: the
   residual-intersection parametrisation
   $\Phi:\mathbb P^1_k\to C$, $[X:Z]\mapsto[fXZ:-aX^2-eXZ-cZ^2:fZ^2]$ in the
   normal form of step 1.1, is an isomorphism of $k$-schemes;
2. consequently, for the divisor $D=[P]$ of a $k$-rational point $P\in C(k)$,
   the Riemann-Roch space $L(D)$
   ([[def-riemann-roch-space-of-divisor]]) has $k$-dimension $2$;
3. the plane-curve arithmetic genus formula gives
   $p_a(C)=\frac{(2-1)(2-2)}{2}=0$
   ([[thm-plane-curve-arithmetic-genus]]), so a smooth conic has genus zero;
   and since $C$ is smooth, hence normal, $C$ agrees with its normalization
   ([[thm-normalization-glues-integral-finite-type-curves]]).

*Supplier interface.* The projective-line calculation uses the earlier
local lemma [[lem-projective-line-curve-and-divisor-basics]]. Its Proof 1.2
computes the residue degrees and Proof 2.1 computes the divisor of a monic
irreducible polynomial; these are the statements used in [F4] and step 1.2.

## Facts & Assumptions

**Given:** A field $k$ of characteristic not two, a nonzero homogeneous quadratic form $F\in k[X,Y,Z]$, the conic $C=V_+(F)\subseteq\mathbb P^2_k$ assumed smooth with $C(k)\neq\emptyset$, a $k$-rational point $p\in C(k)$, and a $k$-rational point $P\in C(k)$.

[F1] A curve over $k$ is geometrically integral, separated, of finite type and of chain dimension one; properness and smoothness are additional properties. ([[def-algebraic-curve-over-field]])

[F2] Under Choice, $X\to\operatorname{Spec}k$ is smooth if and only if for every field extension $K/k$ every local ring of the base change $X_K$ is regular; in particular smoothness implies regularity of the local rings of $X$ itself. Regular local rings are integrally closed domains, so an integral smooth scheme is normal. ([[def-smooth-morphism-to-field-classical]], [[thm-regular-local-rings-are-normal]])

[F3] The projective plane $\mathbb P^2_k$ and the projective line $\mathbb P^1_k$ have their standard charts; $\mathbb P^1_k$ has the charts $U_0=\operatorname{Spec}k[t]$ and $U_1=\operatorname{Spec}k[u]$ glued along $tu=1$, with $\infty=[0:1]$ the pole of $t$, and the origin $[1:0]=V(t)$ the zero of $t$. ([[def-relative-projective-space-standard-charts]], [[def-projective-line-two-affine-cover-and-twisting-sheaf]])

[F4] (Earlier local prerequisite.) On $\mathbb P^1_k$ with coordinate $t$: (1) $\mathbb P^1_k$ is a smooth proper geometrically integral curve of genus $0$; (2) for every monic irreducible $g\in k[t]$ of degree $d$, the closed point $p=V(g)$ has $[\kappa(p):k]=d$ and $\operatorname{div}(g)=[p]-d[\infty]$. ([[lem-projective-line-curve-and-divisor-basics]])

[F5] On a smooth curve the order $\operatorname{ord}_x$ of a nonzero rational function at a closed point is additive and satisfies $\operatorname{ord}_x(f^{-1})=-\operatorname{ord}_x(f)$, the divisor of a rational function is $\operatorname{div}(f)=\sum_x\operatorname{ord}_x(f)[x]$ with $\operatorname{div}(fg)=\operatorname{div}(f)+\operatorname{div}(g)$, effectivity means all coefficients are nonnegative, and $\deg_k(\sum_xn_x[x])=\sum_xn_x[\kappa(x):k]$. ([[def-divisor-smooth-proper-curve]], [[def-order-codimension-one-rational-function]], [[def-degree-divisor-proper-curve]])

[F6] The Riemann-Roch space of a divisor $D$ on $C$ is $L(D)=\{f\in k(C)^\times:\operatorname{div}(f)+D\ge0\}\cup\{0\}$, a $k$-subspace of the function field. ([[def-riemann-roch-space-of-divisor]])

[F7] Under Choice every rational map from a smooth curve to a proper $k$-scheme is represented by a $k$-morphism, and rational maps are equivalence classes of morphisms on nonempty opens. ([[lem-rational-map-smooth-curve-to-proper-scheme-extends]], [[def-rational-map-integral-schemes]])

[F8] Under Choice, two $S$-morphisms $a,b:W\to Y$ with $Y\to S$ separated and $W$ reduced agree if they agree on a dense open subscheme. ([[cor-morphisms-equal-on-dense-open-reduced-source]])

[F9] Let $F$ be a nonzero homogeneous form of degree $d\ge1$ with $X=V_+(F)\subseteq\mathbb P^2_k$ an integral curve; then $H^0(X,\mathcal O_X)=k$ and $p_a(X)=1-\chi(\mathcal O_X)=\frac{(d-1)(d-2)}{2}$. ([[thm-plane-curve-arithmetic-genus]])

[F10] Under the Axiom of Choice, for an integral separated finite-type curve $C$ of chain dimension one the normalization $\nu:C^{\mathrm{nu}}\to C$ is integral and normal, finite and birational over $C$, and initial among normal integral schemes finite and birational over $C$. ([[thm-normalization-glues-integral-finite-type-curves]], [[def-axiom-of-choice]])

[F11] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F12] A finite-type $k$-algebra is Noetherian; a finite-type domain $A$ over $k$ has $\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$, and the chain dimension of a Noetherian space is the supremum of dimensions on an open cover. ([[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]], [[thm-affine-domain-dimension-transcendence-degree]], [[lem-chain-dimension-open-cover]])

[F13] Projective space over $k$ is proper, a closed immersion is proper, and proper morphisms compose; a closed subscheme of $\mathbb P^2_k$ is therefore proper over $k$. ([[thm-projective-space-proper-over-base]], [[lem-closed-immersion-proper]], [[lem-proper-stable-composition]])



## Proof

**Proof technique:** direct; put the conic into a normal form at the rational point, write down the residual-intersection parametrisation and the projection, glue them into an isomorphism on dense opens, and read off the Riemann-Roch space from the explicit model of the projective line.

1.1 Geometric integrality, normal form, and scheme dimension. Since $C$ is smooth, [F2] says it remains regular after every field extension, in particular over an algebraic closure $\bar k$. If $F_{\bar k}$ were reducible, a quadratic factorization would be either two distinct lines, singular at their intersection, or a repeated line, singular along that line; both contradict regularity. Thus $F_{\bar k}$ is irreducible and $C$ is geometrically integral. Choose homogeneous coordinates with $p=[0:1:0]$ and tangent line $T_pC=V(Z)$. Writing $F=aX^2+bY^2+cZ^2+dXY+eXZ+fYZ$, the point condition gives $b=0$; the tangent condition gives $d=0$ and $f\ne0$, so $F=aX^2+eXZ+fYZ+cZ^2$. If $a=0$, then $F=Z(eX+fY+cZ)$, contradicting geometric integrality; hence $a\ne0$. The charts $D(Z)$ and $D(Y)$ cover $C$, since the only projective point with $Y=Z=0$ would be $[1:0:0]$, where $F=a\ne0$. On $D(Z)$, the equation $a x^2+e x+f y+c=0$ is linear in $y$ with coefficient $f\ne0$, so the coordinate ring is $k[x]$. On $D(Y)$, the ring is the domain $R=k[x,z]/(a x^2+e xz+f z+c z^2)$. Its defining polynomial has positive degree in $z$ because $f\ne0$. The degree-in-$z$ product rule shows $k[x]\hookrightarrow R$: a nonzero polynomial in $x$ cannot be a multiple of a polynomial of positive $z$-degree. The equation also makes $z$ algebraic over $k(x)$, so $\operatorname{trdeg}_k\operatorname{Frac}(R)=1$. Both finite-type chart rings are Noetherian by [F12]; the same fact makes $C$ Noetherian, and [F12] gives chart dimension one and chain dimension one for $C$ by the finite open-cover lemma. Thus [F1] makes $C$ a curve; it is proper by [F13] and smooth by assumption. [F1, F2, F12, F13]

1.2 The model computation on the projective line. Let $\mathbb P^1_k$ have coordinate $t$ on $U_0$ and point at infinity $\infty=[0:1]$, the pole of $t=x_1/x_0$ [F3]. For a monic irreducible $g\in k[t]$ of degree $d$, [F4] gives $\operatorname{div}(g)=[V(g)]-d[\infty]$; if $P$ is a nonzero polynomial with factorization $P=c\prod_i g_i^{e_i}$, then [F5] gives $\operatorname{div}(P)=\sum_i e_i[V(g_i)]-(\deg P)[\infty]$. Let $Q\in\mathbb P^1(k)$. If $Q=\infty$, write a nonzero $f\in L([\infty])$ as $P/Q_0$ with coprime $P,Q_0\in k[t]$. Any irreducible factor $g^e$ of a nonconstant denominator contributes coefficient $-e$ at the finite point $V(g)$ in $\operatorname{div}(f)+[\infty]$, since $P$ and $Q_0$ are coprime. Thus $Q_0$ is constant and $f=P$; then $\operatorname{div}(f)+[\infty]$ is effective exactly when $\deg P\le1$, so $L([\infty])=k\cdot1\oplus k\cdot t$ has dimension two. If $Q=[1:c]$ for $c\in k$, then $\operatorname{div}(t-c)=[Q]-[\infty]$ [F4]. For $f=P/Q_0$ in lowest terms, every irreducible denominator factor other than $t-c$ would contribute a negative coefficient at its finite point, so $Q_0=(t-c)^m$. Coprimeness gives $t-c\nmid P$, and effectivity at $Q$ requires $1-m\ge0$, hence $m\in\{0,1\}$. At infinity the coefficient is $m-\deg P$, so $\deg P\le m$. If $m=0$, $P$ is constant; if $m=1$, write $P=\alpha(t-c)+\beta$, giving $f=\alpha+\beta/(t-c)$. Therefore $L([Q])=k\cdot1\oplus k\cdot\frac{1}{t-c}$ has dimension two. [F3, F4, F5]

1.3 Arithmetic genus and normalization. By [F1] the conic $C$ is an integral curve in $\mathbb P^2_k$, so [F9] gives $H^0(C,\mathcal O_C)=k$ and $p_a(C)=\frac{(2-1)(2-2)}{2}=0$. By [F2] the local rings of the smooth curve $C$ are regular, hence integrally closed, so $C$ is normal; then the identity morphism $C\to C$ is a normal integral scheme, finite and birational over $C$, so by initiality of the normalization [F10] the normalization $\nu:C^{\mathrm{nu}}\to C$ is an isomorphism, i.e. $C$ agrees with its normalization. [F1, F2, F9, F10]

2.1 The parametrization and the projection. Keep the normal form of step 1.1 and let $[X:Z]$ be homogeneous coordinates on $\mathbb P^1_k$. Define $$\Phi:\mathbb P^1_k\longrightarrow\mathbb P^2_k,\qquad [X:Z]\longmapsto\bigl[fXZ:-(aX^2+eXZ+cZ^2):fZ^2\bigr],$$ whose components are homogeneous of degree two; they do not all vanish, because $Z=0$ forces $X\ne0$ and then the image is $[0:-aX^2:0]=[0:1:0]$ since $a\ne0$, so $\Phi$ is a $k$-morphism [F3]; and $\Phi$ lands in $C$: substituting gives $a(fXZ)^2+e(fXZ)(fZ^2)+f\bigl(-(aX^2+eXZ+cZ^2)\bigr)(fZ^2)+c(fZ^2)^2=fZ^2\cdot0$. In the other direction the projection $$\Pi:C\smallsetminus\{p\}\longrightarrow\mathbb P^1_k,\qquad [X:Y:Z]\longmapsto[X:Z],$$ is a $k$-morphism: on $C$ the equations $X=Z=0$ define the single point $p=[0:1:0]$, as $F(0,Y,0)=0$ for all $Y$, so off $p$ at least one of $X,Z$ is nonzero. [F3, step 1.1]

3.1 The two maps are mutually inverse on dense opens. For $[X:Z]\in\mathbb P^1_k$ with $Z\ne0$ one has $\Pi(\Phi([X:Z]))=\Pi([fXZ:-(aX^2+eXZ+cZ^2):fZ^2])=[fXZ:fZ^2]=[X:Z]$, so $\Pi\circ\Phi$ is the identity on the dense open $\{Z\ne0\}\subseteq\mathbb P^1_k$. On the open chart $Z\ne0$ of $C$, with homogeneous coordinates $[X:Y:Z]$, one has $Z\ne0$ (if $Z=0$ then $0=F(X,Y,0)=aX^2$ forces $X=0$, hence $[X:Y:Z]=p$), and the conic equation $YfZ=-(aX^2+eXZ+cZ^2)$ gives $\Phi(\Pi([X:Y:Z]))=[fXZ:-(aX^2+eXZ+cZ^2):fZ^2]=[X(fZ):Y(fZ):Z(fZ)]=[X:Y:Z]$, since $fZ\ne0$; so $\Phi\circ\Pi$ is the identity on the dense open $C\smallsetminus\{p\}$. [step 1.1, step 2.1]

4.1 The isomorphism. The morphism $\Pi$ of step 2.1 represents a rational map $C\dashrightarrow\mathbb P^1_k$ [F7]; the curve $C$ is smooth and $\mathbb P^1_k$ is proper over $k$, so under Choice [F11] the extension lemma [F7] represents this rational map by a morphism $\overline\Pi:C\to\mathbb P^1_k$ extending $\Pi$. The morphisms $\Phi\circ\overline\Pi$ and $\mathrm{id}_C$ from the reduced scheme $C$ to the separated $k$-scheme $C$ agree on the dense open $C\smallsetminus\{p\}$ by step 3.1, so they are equal by [F8]; similarly $\overline\Pi\circ\Phi$ and $\mathrm{id}_{\mathbb P^1}$ agree on the dense open $\{Z\ne0\}\subseteq\mathbb P^1$ by step 3.1, so $\overline\Pi\circ\Phi=\mathrm{id}_{\mathbb P^1}$. Hence $\overline\Pi$ is an isomorphism of $k$-schemes with inverse $\Phi$, which is the first assertion: projection from $p$ exhibits $C\cong\mathbb P^1_k$. [F7, F8, F11, step 2.1, step 3.1]

5.1 The Riemann-Roch space of a rational point. Let $D=[P]$ with $P\in C(k)$ and put $Q=\overline\Pi(P)\in\mathbb P^1_k(k)$. An isomorphism of $k$-schemes induces a $k$-isomorphism of function fields and a bijection of closed points preserving residue fields, hence a degree-preserving bijection of divisor groups intertwining $\operatorname{div}$ and $\operatorname{ord}$ by [F5]; under the isomorphism $\overline\Pi:C\to\mathbb P^1_k$ the pullback of $[Q]$ is $[P]=D$, and pullback of rational functions $f\mapsto f\circ\overline\Pi$ carries $L([Q])$ onto $L(D)$ [F6]. By step 1.2 the space $L([Q])$ is $2$-dimensional over $k$, with basis $\{1,t\}$ for $Q=\infty$ and $\{1,\frac{1}{t-c}\}$ for the finite point $Q=[1:c]$ with $t=x_1/x_0$; hence $\dim_kL(D)=2$. [F5, F6, step 1.2, step 4.1]

6.1 Conclusion. For a smooth conic $C\subseteq\mathbb P^2_k$ with a $k$-rational point $p$, step 4.1 exhibits an explicit isomorphism $C\cong\mathbb P^1_k$ from the projection at $p$ and its residual-intersection parametrization, step 5.1 computes $\dim_kL([P])=2$ for every $k$-rational point $P$, and step 1.3 gives $p_a(C)=\frac{(2-1)(2-2)}{2}=0$ together with the agreement of $C$ with its normalization. The Axiom of Choice is assumed for the geometric-regularity characterization and normalization in steps 1.1 and 1.3, as well as the rational-map extension and dense-open uniqueness in step 4.1 [F2, F10, F7, F8]. The divisor calculation in step 1.2 uses the verified clauses 1 and 2 of the current draft supplier [F4]. [F2, F4, F7, F8, F10, step 1.3, step 4.1, step 5.1] ∎
