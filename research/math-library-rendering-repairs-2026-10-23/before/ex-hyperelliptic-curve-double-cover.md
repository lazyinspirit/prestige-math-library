---
id: ex-hyperelliptic-curve-double-cover
kind: example
title: Ramification of the double cover y^2=f(x)
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
- cor-finite-morphism-proper
- cor-plane-curve-geometric-genus-delta-correction
- def-algebraic-curve-over-field
- def-arithmetic-genus-proper-curve
- def-axiom-of-choice
- def-canonical-line-bundle-curve
- def-delta-invariant-curve-singularity
- def-finite-morphism-schemes
- def-geometric-genus-singular-curve
- def-nonconstant-morphism-curves-degree
- def-normal-noetherian-ring
- def-projective-morphism-pre-proj
- def-ramification-and-branch-points
- def-ramification-index-curve-map
- lem-ag-separable-residue-cotangent-sequence
- lem-ample-pullback-finite-morphism
- lem-composite-finite-proper-morphism-proper
- lem-fibre-degree-sum-ramification-residue
- lem-finite-type-jacobson-residue-extension
- lem-normalization-lowers-arithmetic-genus-delta
- lem-projective-line-twisting-sheaf-ample
- lem-two-affine-double-cover-cohomology
- thm-ample-powers-very-ample-proper-base
- thm-curves-function-fields-equivalence
- thm-differentials-smooth-locally-free
- thm-dvr-element-normal-form
- thm-jacobian-criterion-affine-variety
- thm-local-ring-smooth-curve-dvr
- thm-nakayama-lemma
- thm-nonconstant-morphism-proper-curves-finite-surjective
- thm-normalization-glues-integral-finite-type-curves
- thm-plane-curve-arithmetic-genus
- thm-projective-morphism-proper
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

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the current
normalization, curve/function-field, finiteness, smooth-differential,
properness, ampleness, and Čech-cohomology supplier routes used below. Let $k$
be algebraically closed
of characteristic $\ne2$ and let $f\in k[x]$ be squarefree of degree
$n=2g+1$ or $n=2g+2$ with $g\ge1$. The affine curve $y^2=f(x)$ has a smooth
projective model $C$, and the projection to the $x$-line is a finite
surjective morphism $\pi:C\to\mathbb P^1_k$ of degree two that is branched
exactly at the roots of $f$ and, when $n$ is odd, at infinity: over each of
these $2g+2$ branch points there lies exactly one point with $e_p=2$, and
over every other closed point of $\mathbb P^1_k$ there lie two points with $e_p=1$.
The plane model $X$ of $C$ has degree $n$ and
$p_a(X)=\frac{(n-1)(n-2)}2$. Its only possible singular point is infinity;
that point is singular exactly when $n\ge4$, with
$\delta_\infty=\frac{(n-1)(n-2)}2-g$. For $n=3$ (so $g=1$), the plane cubic
is smooth and the singularity sum is empty, with $\delta_\infty=0$. In all
cases $g(C)=g$.

The ramification assertions use only $\operatorname{char}k\ne2$ and
squarefreeness of $f$. The genus computation is carried out for algebraically
closed $k$, because the delta invariant
([[def-delta-invariant-curve-singularity]]) and the plane-curve genus
correction ([[cor-plane-curve-geometric-genus-delta-correction]]) are stated
over algebraically closed fields.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ with $\operatorname{char}k\ne2$, a squarefree polynomial $f\in k[x]$ of degree $n=2g+1$ or $n=2g+2$, $g\ge1$, the affine curve $U=V(y^2-f)\subseteq\mathbb A^2_k$, the plane model $X=V_+(G)\subseteq\mathbb P^2_k$ with $G=Y^2Z^{n-2}-F(X,Z)$ and $F(X,Z)=Z^nf(X/Z)$, and the normalization $\nu:C\to X$; the Axiom of Choice is assumed.

[F1] Jacobian criterion over an algebraically closed field: a closed point of $V(h)\subseteq\mathbb A^2_k$ is regular exactly when the two partial derivatives of $h$ do not both vanish there. ([[thm-jacobian-criterion-affine-variety]])

[F2] For an integral plane curve $X=V_+(F)$ of degree $d$ one has $H^0(X,\mathcal O_X)=k$ and $p_a(X)=\frac{(d-1)(d-2)}2$. ([[thm-plane-curve-arithmetic-genus]])

[F3] The normalization $\nu:C\to X$ is finite, birational, $C$ is integral and normal with $k(C)=k(X)$, and over the algebraically closed field $k$ the curve $C$ is smooth; for a smooth proper geometrically connected curve the genus is $g(C)=h^1(C,\mathcal O_C)=1-\chi(\mathcal O_C)$, and the geometric genus of $X$ is $g(X)=g(C)$. ([[thm-normalization-glues-integral-finite-type-curves]], [[def-geometric-genus-singular-curve]], [[def-arithmetic-genus-proper-curve]], [[def-algebraic-curve-over-field]])

[F4] The delta invariant is $\delta_x(X)=\dim_k\bigl((\nu_*\mathcal O_C)_x/\mathcal O_{X,x}\bigr)$, it vanishes exactly at regular points, and $p_a(X)=g(X^{\mathrm{nu}})+\sum_x\delta_x(X)$, equivalently $g(X^{\mathrm{nu}})=\frac{(d-1)(d-2)}2-\sum_x\delta_x(X)$ for the plane model of degree $d$. ([[def-delta-invariant-curve-singularity]], [[lem-normalization-lowers-arithmetic-genus-delta]], [[cor-plane-curve-geometric-genus-delta-correction]])

[F5] Dominant $k$-morphisms $C\to D$ of smooth proper geometrically integral curves correspond bijectively to injective $k$-algebra homomorphisms $k(D)\hookrightarrow k(C)$; a nonconstant morphism is finite, surjective and has degree $\deg(f)=[k(C):k(D)]$. ([[thm-curves-function-fields-equivalence]], [[def-nonconstant-morphism-curves-degree]], [[thm-nonconstant-morphism-proper-curves-finite-surjective]])

[F6] The ramification index is $e_p=\operatorname{ord}_p$ of the pullback of a uniformizer of the target; for every closed point $q$ one has $\sum_{p\in f^{-1}(q)}e_p[\kappa(p):\kappa(q)]=\deg(f)$; the differential-ramification locus consists of the points with $e_p>1$ together with those having inseparable residue extension, and over the algebraically closed field $k$ the residue extensions are trivial. ([[def-ramification-index-curve-map]], [[lem-fibre-degree-sum-ramification-residue]], [[def-ramification-and-branch-points]])

[F7] At a closed point $p$ of the smooth curve $C$ the local ring $\mathcal O_{C,p}$ is a discrete valuation ring, $\operatorname{ord}_p$ is a valuation with $\operatorname{ord}_p(uv)=\operatorname{ord}_p(u)+\operatorname{ord}_p(v)$, and an element is a uniformizer exactly when its order is one. ([[thm-local-ring-smooth-curve-dvr]], [[thm-dvr-element-normal-form]])

[F8] The canonical bundle is $\omega_C=\Omega^1_{C/k}$ and is locally free of rank one ([[def-canonical-line-bundle-curve]], [[thm-differentials-smooth-locally-free]]). At a closed point $p$ of $C$, the residue field $\kappa(p)$ is finite over $k$ by the finite-type residue-field lemma, hence equals $k$ because $k$ is algebraically closed ([[lem-finite-type-jacobson-residue-extension]]). The cotangent sequence for this finite separable residue extension identifies $\mathfrak m_p/\mathfrak m_p^2$ with $\Omega^1_{C/k}\otimes\kappa(p)$ ([[lem-ag-separable-residue-cotangent-sequence]]). The local ring is a discrete valuation ring, so a uniformizer $t_p$ gives a basis of the one-dimensional space $\mathfrak m_p/\mathfrak m_p^2$ ([[thm-local-ring-smooth-curve-dvr]]); consequently $\mathrm dt_p$ gives a basis of $\Omega^1_{C/k}\otimes\kappa(p)$ and Nakayama's lemma ([[thm-nakayama-lemma]]) makes $\mathrm dt_p$ a local frame of $\omega_C$ near $p$. Thus for a nonzero rational differential $\omega=g\,\mathrm dt_p$ its order is $\operatorname{ord}_p(g)$, independently of the chosen uniformizer, agreeing with the frame definition ([[def-canonical-line-bundle-curve]]). Also $\operatorname{div}(\omega)=\sum_p\operatorname{ord}_p(\omega)[p]$ is effective exactly when $\omega$ is a global section of $\omega_C$, two nonzero rational differentials on a smooth proper geometrically integral curve differ by a nonzero rational function $g$, and $\operatorname{div}(g\omega)=\operatorname{div}(\omega)+\operatorname{div}(g)$ ([[def-canonical-line-bundle-curve]]).

[F9] The two-affine double-cover calculation gives $\dim_k H^1(C,\mathcal O_C)=g$ when the separated scheme has affine rings $k[x,y]/(y^2-f)$ and $k[t,w]/(w^2-\psi)$, intersection obtained by inverting $x$ or $t$, and transition $t=x^{-1}$, $w=x^{-(g+1)}y$. ([[lem-two-affine-double-cover-cohomology]])

[F10] Projectivity of the model: for every scheme $S$ the structure morphism $\mathbb P^m_S\to S$ is proper; a morphism factoring as a closed immersion into $\mathbb P^m_k$ followed by the projection is proper, so the plane model $X$ is proper over $k$; the twisting sheaf $\mathcal O(1)$ on $\mathbb P^1_k$ is ample and for every finite morphism $g:Y\to\mathbb P^1_k$ the pullback $g^*\mathcal O(1)$ is ample; a finite morphism is proper, a composite of a finite morphism with a proper morphism is proper, and a composite of finite-type morphisms is of finite type; finally, if $Z$ is proper of finite type over a Noetherian scheme $S$ and $L$ is ample on $Z$, then for every sufficiently large $d$ the power $L^{\otimes d}$ is closed H-very ample relative to $S$, so that some $S$-closed immersion $Z\hookrightarrow\mathbb P^N_S$ pulls $\mathcal O(1)$ back to $L^{\otimes d}$. ([[thm-projective-space-proper-over-base]], [[thm-projective-morphism-proper]], [[lem-projective-line-twisting-sheaf-ample]], [[lem-ample-pullback-finite-morphism]], [[cor-finite-morphism-proper]], [[lem-composite-finite-proper-morphism-proper]], [[thm-ample-powers-very-ample-proper-base]])

[F11] A regular Noetherian ring is normal, and a normal domain is integrally closed in its fraction field: every element of the fraction field integral over the ring lies in it. In particular the local rings of a smooth affine curve over $k$ are regular, so the curve and all its local rings are integrally closed. ([[thm-regular-local-rings-are-normal]], [[def-normal-noetherian-ring]])





**Proof technique:** direct; identify the plane model and its only possible singular point, compute the ramification of the degree-two projection from the local normal forms, compute the genus of the smooth model by writing every regular differential against the explicit canonical divisor $dx/y$, and finish with the plane-curve delta correction.

## Verification

1.1 The affine curve is smooth. Write $h=y^2-f(x)\in k[x,y]$; its partial derivatives are $2y$ and $-f'(x)$. At a common zero one has $y=0$ (characteristic $\ne2$) and $f(x)=f'(x)=0$, so $x$ is a multiple root of $f$, contrary to squarefreeness. By the Jacobian criterion every closed point of $U$ is regular. [F1]

1.2 The plane model. The polynomial $G$ is homogeneous of degree $n$ and $Z\nmid G$, because $G(X,Y,0)=-F(X,0)=-a_nX^n$ with $a_n\ne0$; its dehomogenization at $Z=1$ is $h=y^2-f(x)$, which is irreducible in $k[x,y]$ since $\deg_yh=2$ and $f$ is squarefree of degree at least three, hence not a square in $k[x]$. If $G=G_1G_2$ were a factorization into nonconstant forms, substituting $Z=1$ would express the irreducible $h$ as a product, so one factor would dehomogenize to a nonzero constant $c$; that factor is homogeneous of positive degree and equals $c$ on the hyperplane $Z=1$ at that point, hence is the form $cZ^{\deg G_i}$, forcing $Z\mid G$, a contradiction. Therefore $G$ is irreducible, $X$ is an integral plane curve of degree $n$, and $U=X\cap\{Z\ne0\}$ is a dense open subscheme. By the plane-curve formula $H^0(X,\mathcal O_X)=k$ and $p_a(X)=\frac{(n-1)(n-2)}2$. [F2]

2.1 The only possible singular point. On the chart $Y\ne0$ put $u=X/Y$, $v=Z/Y$, so that $X$ is cut out by $g(u,v)=v^{n-2}-F(u,v)$, where $F(u,v)=\sum_{i=0}^na_iu^iv^{n-i}$ is a binary form of degree $n$ with $a_n\ne0$. The point $\infty=(0:1:0)$ corresponds to $(u,v)=(0,0)$, and every term of $F$ and of its first partial derivatives has order at least $n-1\ge2$ at the origin; hence the partials of $g$ at the origin are $-F_u=0$ and $(n-2)v^{n-3}-F_v$, which vanish at the origin for $n\ge4$ and equal $(0,1)$ for $n=3$. Every other closed point of the chart lies either in $U$, which is regular by step 1.1, or has $Z=0$; but $Z=0$ on $X$ forces $X=0$, so the only such point is $\infty$ itself. Hence $\infty$ is the only possibly singular point of $X$, and it is singular exactly when $n\ge4$. [F1, step 1.1]

2.2 A degree-two projection. The function field of $X$ is $k(X)=k(x,y)$ with $y^2=f(x)$ (step 1.2), and $y^2-f$ is irreducible over $k(x)$ because $f$ is squarefree of degree at least three and hence is not a square in $k(x)$; therefore $[k(X):k(x)]=2$. By [F5] the inclusion $k(x)\hookrightarrow k(C)=k(X)$ determines a dominant morphism $\pi:C\to\mathbb P^1_k$ with $\pi^*(x)=x$, and $\pi$ is finite and surjective of degree two. [F5, step 1.2]

3.1 The two affine charts. Finiteness of $\pi$ (step 2.2) makes the preimages $U'=\pi^{-1}(\operatorname{Spec}k[x])$ and $C_t=\pi^{-1}(\operatorname{Spec}k[t])$ of the two standard affine charts of $\mathbb P^1_k$ affine, with coordinate rings $A'$ and $B'$ module-finite over $k[x]$ and over $k[t]$ respectively ([[def-finite-morphism-schemes]]), and $\operatorname{Frac}A'=\operatorname{Frac}B'=k(C)$. Put $t=1/x$, $w=y\,t^{g+1}$, and $\psi(t)=t^nf(1/t)$ when $n=2g+2$, $\psi(t)=t^{n+1}f(1/t)$ when $n=2g+1$; then $w^2=\psi(t)$ in $k(C)$. The subrings $A=k[x,y]/(y^2-f)\subseteq A'$ and $B=k[t,w]/(w^2-\psi)\subseteq B'$ have $\operatorname{Frac}A=k(x,y)=k(C)$ and $\operatorname{Frac}B=k(t,w)=k(C)$, the latter because $[k(C):k(t)]=[k(C):k(x)]=2$ by step 2.2 while $w\notin k(t)$. The polynomial $\psi$ is squarefree: its roots are the inverses of the nonzero roots of $f$, all simple because $f$ is squarefree, together with $t=0$ in the odd case, where $\psi=t\varphi$ with $\varphi(t)=t^nf(1/t)$ of constant term $a_n\ne0$, so that root is simple as well. Since $\operatorname{char}k\ne2$, the Jacobian criterion [F1] shows that the localizations of $A$ (step 1.1) and of $B$ at maximal ideals are regular local rings, their localizations at the zero ideal are fraction fields, and so $A$ and $B$ are regular Noetherian domains, hence integrally closed [F11]; the same applies to $A'$ and $B'$, which are coordinate rings of affine opens of the smooth curve $C$. Now $x\in A'$ and $y^2=f(x)\in A'$ with $y\in k(C)=\operatorname{Frac}A'$, so $y\in A'$ and $A\subseteq A'$; dually $t\in B'$ and $w^2=\psi(t)\in B'$ give $w\in B'$ and $B\subseteq B'$. Every element of $A'$ is integral over $k[x]\subseteq A$ and every element of $B'$ is integral over $k[t]\subseteq B$, so integrally closedness gives $A'=A$ and $B'=B$. Consequently the closed points of the finite chart are the maximal ideals of $A$, the points of $C$ over $\infty$ are the maximal ideals of $B$ lying over $(t)$, and the local rings of $C$ at these points are the corresponding localizations. [F1, F11, step 1.1, step 2.2]

4.1 Ramification over finite points. Fix $x_0\in k$ and let $p\in C$ lie over $x_0$, so that $p$ corresponds to a maximal ideal of $A$ (step 3.1), while the pullback of the uniformizer $x-x_0$ of $\mathbb P^1_k$ at $x_0$ is the function $x-x_0$, whence $e_p=\operatorname{ord}_p(x-x_0)$. If $f(x_0)\ne0$, choose $y_0\in k^\times$ with $y_0^2=f(x_0)$ and write $f(x)-f(x_0)=(x-x_0)u(x)$, without requiring $u(x_0)\ne0$. At $p=(x_0,y_0)$ the factor $y+y_0$ is a unit, so $(y-y_0)=(x-x_0)u(x)/(y+y_0)$ in the local ring and its maximal ideal $(x-x_0,y-y_0)$ is $(x-x_0)$. At $p'=(x_0,-y_0)$ the factor $y-y_0$ is a unit, and the same identity gives $(y+y_0)=(x-x_0)u(x)/(y-y_0)$, so the maximal ideal $(x-x_0,y+y_0)$ is again $(x-x_0)$. Thus $x-x_0$ is a uniformizer at both points and $e_p=1$, regardless of whether $x_0$ is a critical point of $f$; these are exactly the two points over $x_0$. If $f(x_0)=0$, write $f=(x-x_0)u(x)$ with $u(x_0)\ne0$; then $x-x_0=y^2u(x)^{-1}$ in $k(C)$, so $x-x_0$ lies in the square of the maximal ideal at the unique point $p=(x_0,0)$ of $U$ and generates its square, whence the maximal ideal is generated by $y$, making $y$ a uniformizer with $\operatorname{ord}_p(x-x_0)=2$, $e_p=2$, and the fibre is $\{p\}$. In both cases the fibre-degree formula of [F6] shows that no further point lies over $x_0$, because the displayed contributions already sum to $\deg\pi=2$ with trivial residue extensions. [F6, F7, step 3.1]

4.2 Ramification over infinity. The points of $C$ over $\infty$ are the maximal ideals of $B$ over $(t)$, that is, the maximal ideals of $B/(t)=k[w]/(w^2-\psi(0))$ (step 3.1). If $n$ is even, then $\psi(0)=a_n\ne0$ and $k[w]/(w^2-a_n)\cong k\times k$, so there are exactly two points $p_\pm$ over $\infty$, and $w$ is a unit at each of them. At $p_+$ with $c=\sqrt{a_n}$, the identity $(w-c)(w+c)=\psi(t)-\psi(0)=t\,g(t)$, where $g=(\psi-\psi(0))/t\in k[t]$, shows that $w-c=t\,g(t)(w+c)^{-1}\in(t)$ because $w+c$ has nonzero residue $2c$ and is a unit; hence the maximal ideal $(t,w-c)$ equals $(t)$ and $t$ is a uniformizer at $p_+$, and the same computation with $-c$ at $p_-$ gives a uniformizer $t$ there too. If $n$ is odd, then $\psi(0)=0$ and $B/(t)=k[w]/(w^2)$ is local with maximal ideal $(w)$, so there is exactly one point $p_\infty$ over $\infty$; since $\psi=t\varphi$ with $\varphi(0)=a_n\ne0$, the element $\varphi(t)$ is a unit at $p_\infty$, so $t=w^2\varphi(t)^{-1}\in(w)^2$. In the local ring $B_{(t,w)}$, one has $B_{(t,w)}/(w)\cong k[t]_{(t)}/(t\varphi(t))\cong k$, so its maximal ideal $(t,w)$ is $(w)$; hence $w$ is a uniformizer at $p_\infty$ and $\operatorname{ord}_{p_\infty}(t)=2$. In both cases the pullback of the uniformizer $t$ of $\mathbb P^1_k$ at $\infty$ is the function $t$ itself, so the orders just computed are the ramification indices: $e_{p_+}=e_{p_-}=1$ for even $n$, and $e_{p_\infty}=2$ for odd $n$. [F6, F7, step 3.1]

4.3 Genus and projectivity. The proper plane model $X$ and finite normalization make $C$ proper of finite type by [F3, F10]. The finite projection gives the ample sheaf $L=\pi^*\mathcal O(1)$ by [F10]. A positive power of $L$ is closed H-very ample over the Noetherian base field by [F10], so $C$ is projective. It is smooth of dimension one by [F3]. The two affine charts in step 3.1 are the inverse images of the standard cover of $\mathbb P^1_k$; their intersection is obtained by inverting $x$ or $t$, with $t=x^{-1}$ and $w=x^{-(g+1)}y$. Properness supplies separatedness. Thus [F9] applies and gives $h^1(C,\mathcal O_C)=g$, with classes $x^{-1}y,\ldots,x^{-g}y$. The genus definition in [F3] now gives $g(C)=g$. [F3, F9, F10, step 2.2, step 3.1]

5.1 The branch locus. Combining step 4.1 and step 4.2: over a point $x_0\in k$ with $f(x_0)\ne0$ there are exactly two points of $C$, both with $e=1$; over each of the $n$ roots of $f$ there is exactly one point, with $e=2$; and over $\infty$ there are two points with $e=1$ when $n$ is even and one point with $e=2$ when $n$ is odd. Since $k$ is algebraically closed, every residue field extension at these closed points is trivial, so the fibre-degree formula $\sum_{p\in\pi^{-1}(q)}e_p[\kappa(p):\kappa(q)]=\deg\pi=2$ holds at every closed point $q$ of $\mathbb P^1_k$, consistently with the counts. The ramification locus of $\pi$ is therefore the set of $n+[n\text{ odd}]=2g+2$ points over the roots of $f$ and, for odd $n$, over infinity, all of index two, and the branch locus is exactly the set of the $n$ roots of $f$ together with $\infty$ when $n$ is odd, again $2g+2$ points; over each branch point lies exactly one ramification point, and over every other closed point of $\mathbb P^1_k$ lie two points with $e=1$. [F6, step 4.1, step 4.2]

5.2 The differential $\omega_0=\mathrm dx/y$ and its divisor. The form $\omega_0=\mathrm dx/y$ is a nonzero rational differential on $C$ [F8]: $y\ne0$ in the field $k(C)$, and $\mathrm dx\ne0$ because $k(C)/k(x)$ is separable of degree two in characteristic $\ne2$. At a point over $x_0$ with $f(x_0)\ne0$, step 4.1 provides the uniformizer $x-x_0$ and $y$ is a unit, so $\operatorname{ord}(\mathrm dx/y)=\operatorname{ord}\bigl(y^{-1}\mathrm d(x-x_0)\bigr)=0$; at the point over a root $x_0$ of $f$, writing $f=(x-x_0)u$ with $u(x_0)\ne0$ gives $x-x_0=y^2u(x)^{-1}$ and therefore $$\mathrm dx/y=2u(x)^{-1}\bigl(1+y^2u(x)^{-2}u'(x)\bigr)^{-1}\mathrm dy.$$ The coefficient is a unit at that point, so $\mathrm dx/y$ is a unit multiple of $\mathrm dy$ and has order $0$; this formula shows that $\mathrm dx$ itself is not a unit multiple of $\mathrm dy$ there. Over infinity, $x=1/t$, $\mathrm dx=-t^{-2}\mathrm dt$ and $y=w\,t^{-(g+1)}$ give $\mathrm dx/y=-t^{g-1}\mathrm dt/w$. In the even case $t$ is a uniformizer and $w$ a unit at $p_\pm$ (step 4.2), so $\operatorname{ord}_{p_\pm}(\mathrm dx/y)=g-1$; in the odd case $t=w^2\varphi(t)^{-1}$ gives $\mathrm dt=2w\varphi(t)^{-1}\bigl(1+w^2\varphi(t)^{-2}\varphi'(t)\bigr)^{-1}\mathrm dw$, so that $\mathrm dt/w$ is a unit multiple of $\mathrm dw$, and $t^{g-1}=w^{2g-2}\varphi(t)^{-(g-1)}$ gives $\operatorname{ord}_{p_\infty}(\mathrm dx/y)=2g-2$. Hence $\operatorname{div}(\mathrm dx/y)=(g-1)(p_++p_-)$ in the even case and $\operatorname{div}(\mathrm dx/y)=(2g-2)p_\infty$ in the odd case; both divisors have degree $2g-2$, and each is a canonical divisor on the smooth proper geometrically integral curve $C$. [F7, F8, step 4.1, step 4.2]

5.3 The delta invariant at infinity. By [F4] one has $p_a(X)=g(X^{\mathrm{nu}})+\sum_x\delta_x(X)$, the sum over the closed points of $X$; since $\delta_x$ vanishes at regular points and $\infty$ is the only possibly singular point of $X$ (step 2.1), the sum reduces to $\delta_\infty$, and it is empty when $n=3$, where $\infty$ is regular and $\delta_\infty=0$. With $p_a(X)=\frac{(n-1)(n-2)}2$ (step 1.2) and $g(X^{\mathrm{nu}})=g(C)=g$ (step 4.3), $$\delta_\infty=\frac{(n-1)(n-2)}2-g,$$ which is $2g^2$ for $n=2g+2$, $2g(g-1)$ for $n=2g+1$, and $0$ for $(n,g)=(3,1)$; in particular it is a nonnegative integer in each family. [F4, F7, step 1.2, step 2.1, step 4.3]

6.1 Regular differentials. Let $\omega$ be a global section of the canonical bundle $\omega_C=\Omega^1_{C/k}$, that is, a regular differential on $C$ [F8]; the zero section is the case $R=0$ below. If $\omega\ne0$, then $\omega=h\,\omega_0$ for a unique $h\in k(C)^\times$ [F8]. Since $\omega_0$ has order $0$ at every point of the finite chart and generates the free rank-one module $\omega_{C,p}$ there (step 5.2), regularity of $\omega$ forces $h\in\mathcal O_C(U')=A=k[x,y]/(y^2-f)$ (step 3.1), so $h=R(x)+S(x)y$ for unique $R,S\in k[x]$, the elements $1,y$ forming a $k(x)$-basis of $k(C)$ (step 2.2, step 3.1). Regularity on $U'$ is then automatic, and by [F8] it remains to impose at the points over infinity the condition $\operatorname{ord}_p(h)\ge-\operatorname{ord}_p(\omega_0)$ coming from $\operatorname{div}(\omega)=\operatorname{div}(h)+\operatorname{div}(\omega_0)$. In the even case, at $p_\pm$ one has $\operatorname{ord}(R(x))=-\deg R$ and $\operatorname{ord}(S(x)y)=-(g+1)-\deg S$ for nonzero $R$ and $S$, using $y=w\,t^{-(g+1)}$ with $w$ a unit, while $\operatorname{ord}_{p_\pm}(\omega_0)=g-1$; hence $\operatorname{ord}_{p_\pm}(h)\ge-(g-1)$ is required. For $S=0$ this is exactly $\deg R\le g-1$. For $S\ne0$: if the two orders differ, then $\operatorname{ord}(h)$ is the smaller one, and since $-(g+1)-\deg S\le-(g+1)<-(g-1)$ this is impossible; if the two orders are equal, so that $\deg R=g+1+\deg S$, then the coefficient of $t^{-\deg R}$ in $h$ at $p_\pm$ is $r+w(p_\pm)s$ with leading coefficients $r,s\ne0$, and regularity at both $p_+$ and $p_-$ would force $r+\sqrt{a_n}\,s=r-\sqrt{a_n}\,s=0$, impossible in characteristic $\ne2$ with $a_n\ne0$. Hence $S=0$ and $\deg R\le g-1$. In the odd case, at $p_\infty$ one has $\operatorname{ord}(R(x))=-2\deg R$ and $\operatorname{ord}(S(x)y)=-(2g+1)-2\deg S$ for nonzero $R$ and $S$, while $\operatorname{ord}_{p_\infty}(\omega_0)=2g-2$; if $S\ne0$, then $-(2g+1)-2\deg S\le-2g-1<-(2g-2)$, so if the orders of the two summands differ the order of $h$ is too small, and they cannot be equal because $-2\deg R$ is even while $-(2g+1)-2\deg S$ is odd. Hence again $S=0$, and $-2\deg R\ge-(2g-2)$ gives $\deg R\le g-1$. Conversely, every $R\in k[x]$ with $\deg R\le g-1$ yields a regular differential $R(x)\,\mathrm dx/y$: it is regular on $U'$, and at infinity its order is $g-1-\deg R\ge0$ in the even case and $2(g-1-\deg R)\ge0$ in the odd case (step 5.2, step 4.2). Therefore $$H^0(C,\omega_C)=\{\,R(x)\,\mathrm dx/y:\ R\in k[x],\ \deg R\le g-1\,\},$$ the differentials $\mathrm dx/y,x\,\mathrm dx/y,\dots,x^{g-1}\mathrm dx/y$ are linearly independent over $k$, and $h^0(C,\omega_C)=g$. [F8, step 2.2, step 3.1, step 5.2]

7.1 Conclusion. Step 1.1 shows that the affine curve $y^2=f(x)$ is smooth, and step 1.2 and step 2.1 identify the plane model $X=V_+(G)$ as an integral plane curve of degree $n$ with $p_a(X)=\frac{(n-1)(n-2)}2$ whose only possibly singular point is $\infty$, singular exactly when $n\ge4$. Step 2.2 exhibits the degree-two projection $\pi:C\to\mathbb P^1_k$ from the normalization, step 3.1 identifies the two standard affine charts with the explicit rings $A=k[x,y]/(y^2-f)$ and $B=k[t,w]/(w^2-\psi)$, and step 4.1 and step 4.2 compute the ramification over the finite points and over infinity. Step 5.1 shows that $\pi$ is finite and surjective of degree two, branched exactly at the $n$ roots of $f$ and, when $n$ is odd, at infinity — that is, at $2g+2$ branch points — with exactly one ramification point of index two over each of them and two points with $e=1$ over every other closed point of $\mathbb P^1_k$. Step 5.2 and step 6.1 compute $\operatorname{div}(\mathrm dx/y)$ and identify $H^0(C,\omega_C)$ with the $g$-dimensional space of differentials $R(x)\,\mathrm dx/y$ with $\deg R\le g-1$, and step 4.3 computes $H^1(C,\mathcal O_C)$ from the two affine charts and concludes $g(C)=g$. Finally step 5.3 computes the delta invariant $\delta_\infty=\frac{(n-1)(n-2)}2-g$, equal to $2g^2$ for $n=2g+2$, to $2g(g-1)$ for $n=2g+1$ and to $0$ for $(n,g)=(3,1)$, so that the geometric genus of $X$ is $g$. The Axiom of Choice is used through the normalization and curve/function-field/finiteness routes [F3], [F5], [F6], the differential and Čech-cohomology routes [F8], [F9], and the properness and ampleness suppliers [F10], at the steps where those inputs are applied. [F3, F5, F6, F8, F9, F10, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 4.2, step 5.1, step 5.2, step 6.1, step 4.3, step 5.3] ∎
