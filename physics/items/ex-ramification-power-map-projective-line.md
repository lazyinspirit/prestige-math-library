---
id: ex-ramification-power-map-projective-line
kind: example
title: Ramification indices of the power map on the projective line
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
- def-algebraic-curve-over-field
- def-axiom-of-choice
- def-composition-series-and-length-of-a-module
- def-divisor-smooth-proper-curve
- def-nonconstant-morphism-curves-degree
- def-order-codimension-one-rational-function
- def-projective-line-two-affine-cover-and-twisting-sheaf
- def-ramification-and-branch-points
- def-ramification-index-curve-map
- def-relative-projective-space-standard-charts
- def-sheaf-relative-differentials
- lem-ag-polynomial-quotient-differentials
- lem-curve-different-local-support-and-index-bound
- lem-differentials-localization
- lem-fibre-degree-sum-ramification-residue
- lem-function-with-poles-defines-map-p1
- lem-projective-line-curve-and-divisor-basics
- thm-dvr-element-normal-form
- thm-dvr-ideal-and-module-length
- thm-local-ring-smooth-curve-dvr
- thm-nonconstant-morphism-proper-curves-finite-surjective
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
    - title: Jiahui Gao and Shouwu Zhang, Lectures on Algebraic Geometry (December 14,
        2019), Ch. 7
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
    - title: The Stacks Project, Algebraic Curves (tag 0BRV)
      url: https://stacks.math.columbia.edu/download/curves.pdf
verification:
  audited: 2026-10-02
---


## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
finite morphism to the projective line and from the divisor theory of the
projective line. Let $k$ be a field, let $n\ge1$ be an integer with
$\operatorname{char}k\nmid n$, and let $\mathbb P^1_k$ have homogeneous
coordinates $[s:t]$, origin $0=[1:0]$, point at infinity $\infty=[0:1]$, and
affine coordinate $x=t/s$ on the chart $U_0=\{s\ne0\}$ with $y=s/t=x^{-1}$ on
the chart $U_\infty=\{t\ne0\}$. Let $\varphi\colon\mathbb P^1_k\to\mathbb P^1_k$
be the morphism given in these coordinates by
$\varphi([s:t])=[s^n:t^n]$, so that on the charts it is $x\mapsto x^n$ and
$y\mapsto y^n$. Then:

1. $\varphi$ is a finite surjective morphism of smooth proper geometrically
   integral curves of degree $\deg(\varphi)=n$;
2. at every closed point $p\notin\{0,\infty\}$ the morphism is unramified:
   $e_p=1$ and the residue extension $\kappa(p)/\kappa(\varphi(p))$ is
   separable; the index-ramification locus of $\varphi$ is $\{0,\infty\}$ when
   $n\ge2$ and is empty when $n=1$, and the differential-ramification locus is
   likewise $\{0,\infty\}$ when $n\ge2$ and empty when $n=1$;
3. at $0$ and at $\infty$ the fibre of $\varphi$ is a single point and the
   ramification index is $n$: the pullback of a uniformizer of the target at
   the image point has order exactly $n$, and the fibre degree sum reads $n=n$
   over each of the two points;
4. the tame case is the case at hand, because $\operatorname{char}k\nmid n$;
   the ramification divisor $R_\varphi=\sum_p l_p[p]$, where $l_p$ is the
   length over $\mathcal O_{\mathbb P^1_k,p}$ of the relative differentials
   $\Omega_{\mathbb P^1_k/\mathbb P^1_k}$ at $p$, equals
   $R_\varphi=(n-1)\bigl([0]+[\infty]\bigr)$: it has support $\{0,\infty\}$ with
   length $n-1$ at each point when $n\ge2$, and it is the zero divisor when
   $n=1$.

**Supplier interfaces.** The current draft [[lem-projective-line-curve-and-divisor-basics]] supplies the projective-line and divisor facts in [F1]. The current draft [[lem-function-with-poles-defines-map-p1]] supplies the map and its zero/pole fibre identifications; this example computes the degree independently from [[lem-fibre-degree-sum-ramification-residue]], so it does not use the separate [[lem-finite-flat-curve-fibre-degree]] calculation.
## Facts & Assumptions
**Given:** A field $k$, an integer $n\ge1$ with $\operatorname{char}k\nmid n$, the projective line $\mathbb P^1_k$ with charts $U_0=\operatorname{Spec}k[x]$ and $U_\infty=\operatorname{Spec}k[y]$, $y=x^{-1}$, points $0=V(x)$ and $\infty=V(y)$, and the morphism $\varphi\colon\mathbb P^1_k\to\mathbb P^1_k$ with $\varphi^{\sharp}(x)=x^n$ on the target coordinate $x$; the Axiom of Choice is assumed.

[F1] The projective line $\mathbb P^1_k$ is a smooth proper geometrically integral curve over $k$ with standard charts $U_0=\operatorname{Spec}k[x]$, $U_\infty=\operatorname{Spec}k[y]$ glued along $xy=1$; its closed points in $U_0$ are the points $V(g)$ for monic irreducible $g\in k[x]$, with $[\kappa(V(g)):k]=\deg g$, and the divisor of the rational function $g$ is $\operatorname{div}(g)=[V(g)]-(\deg g)[\infty]$; in particular $\operatorname{div}(x)=[0]-[\infty]$, the points $0$ and $\infty$ are $k$-rational, and the local ring $\mathcal O_{\mathbb P^1_k,p}$ at a closed point $p\in U_0$ is the localization $k[x]_{(h)}$ at the maximal ideal $(h)$ defining $p$. ([[lem-projective-line-curve-and-divisor-basics]], [[def-projective-line-two-affine-cover-and-twisting-sheaf]], [[def-relative-projective-space-standard-charts]], [[def-algebraic-curve-over-field]])

[F2] A nonconstant rational function $f\in k(\mathbb P^1_k)^{\times}$ determines a finite locally free morphism $\varphi_f\colon\mathbb P^1_k\to\mathbb P^1_k$ of degree $[k(\mathbb P^1_k):k(f)]$ with $\varphi_f^{\sharp}(x)=f$ for the target coordinate $x$, whose fibre over $0$ is the zero divisor $(f)_0=\sum_{\operatorname{ord}_p(f)>0}\operatorname{ord}_p(f)[p]$ and whose fibre over $\infty$ is the pole divisor $(f)_\infty=\sum_{\operatorname{ord}_p(f)<0}(-\operatorname{ord}_p(f))[p]$; in particular $\varphi_f$ is nonconstant and, being a morphism of proper curves, it is surjective. ([[lem-function-with-poles-defines-map-p1]], [[def-nonconstant-morphism-curves-degree]], [[thm-nonconstant-morphism-proper-curves-finite-surjective]])

[F3] At a closed point $p$ of a smooth curve with image $q=\varphi(p)$ the local rings are discrete valuation rings, a uniformizer is a generator of the maximal ideal, every nonzero element is a unit times a power of a uniformizer, the order $\operatorname{ord}_p$ is additive and vanishes on units, the ramification index is $e_p=\operatorname{ord}_p\bigl(\varphi^{\sharp}(t_q)\bigr)$ for a uniformizer $t_q$ of $\mathcal O_{D,q}$, and $e_p=1$ exactly for the unramified points of the index convention. ([[def-ramification-index-curve-map]], [[thm-local-ring-smooth-curve-dvr]], [[thm-dvr-element-normal-form]], [[def-order-codimension-one-rational-function]])

[F4] For a nonconstant morphism $\varphi\colon C\to D$ of smooth proper geometrically integral curves of degree $n$ and every closed point $q$ of $D$ the fibre is finite and $\sum_{p\in\varphi^{-1}(q)}e_p\,[\kappa(p):\kappa(q)]=n$. ([[lem-fibre-degree-sum-ramification-residue]], [[def-algebraic-curve-over-field]])

[F5] For a finite surjective morphism $\varphi\colon C\to D$ of smooth proper geometrically integral curves with separable function-field extension the sheaf $\Omega_{C/D}$ of relative differentials is coherent and torsion with finite support, and with $l_p=\operatorname{length}_{\mathcal O_{C,p}}(\Omega_{C/D,p})$ one has $l_p=0$ if and only if $e_p=1$ and $\kappa(p)/\kappa(\varphi(p))$ is separable; if the residue extension is separable and $e_p$ is invertible in $\kappa(\varphi(p))$, then $l_p=e_p-1$; and the differential-ramification locus is the support of $\Omega_{C/D}$, which equals the set of points with $e_p>1$ or inseparable residue extension. ([[lem-curve-different-local-support-and-index-bound]], [[def-sheaf-relative-differentials]], [[def-ramification-and-branch-points]], [[def-composition-series-and-length-of-a-module]])

[F6] On an affine chart, if a morphism of affine schemes corresponds to the ring map $A\to B$ and $B=A[x_1,\dots,x_r]/I$, then $\Omega_{B/A}$ is the cokernel of the Jacobian map $B^{c}\to B^{r}$ of a set of generators of $I$; in particular for $B=A[x]/(g)$ one has $\Omega_{B/A}\cong B/(g'(x))$. Localizing at a multiplicative set computes the corresponding localization of the module, and for an affine open $U=\operatorname{Spec}B$ of the source mapping into an affine open of the target the module of sections of $\Omega_{C/D}$ over $U$ is $\Omega_{B/A}$. ([[lem-ag-polynomial-quotient-differentials]], [[lem-differentials-localization]], [[def-sheaf-relative-differentials]])

[F7] For a discrete valuation ring $V$ with uniformizer $\pi$ and $n\ge0$ one has $\ell_V(V/\pi^n)=n$, so a module with a filtration by powers of the uniformizer has length equal to the number of successive quotients. ([[thm-dvr-ideal-and-module-length]], [[def-composition-series-and-length-of-a-module]])

[F8] A divisor on a curve is a finite formal $\mathbb Z$-linear combination of closed points and is effective when all coefficients are nonnegative; the divisors $[p]$ of closed points generate it. ([[def-divisor-smooth-proper-curve]])

[F9] The Axiom of Choice is assumed, here inherited from the construction of $\varphi$ as a finite morphism to the projective line and from the divisor theory of $\mathbb P^1_k$; no further selection is made. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; exhibit $\varphi$ as the finite map attached to the rational function $x^n$, read off the ramification indices at $0$ and $\infty$ from the zero and pole divisors, determine the degree from the fibre-degree sum, and compute the relative differentials on the two affine charts.

1.1 The morphism. The coordinate $x$ satisfies $\operatorname{ord}_\infty(x)=-1$ by [F1], so $x$ is nonconstant and hence $x^n$ is nonconstant as well. By [F2] applied to $f=x^n$ there is a finite locally free morphism $\varphi\colon\mathbb P^1_k\to\mathbb P^1_k$ of degree $[k(\mathbb P^1_k):k(x^n)]$ with $\varphi^{\sharp}(x)=x^n$; it is nonconstant, hence surjective. On the affine charts the comorphism is $k[x]\to k[x]$, $x\mapsto x^n$ on $U_0$, and $k[y]\to k[y]$, $y=x^{-1}\mapsto (x^n)^{-1}=y^n$ on $U_\infty$. In the homogeneous coordinates of [F1] the target coordinate of the image of $[s:t]$ with $s\ne0$ is $x^n=(t/s)^n$, so the image is $[1:t^n/s^n]=[s^n:t^n]$; thus $\varphi$ is the morphism of the statement. [F1, F2]

1.2 Zeros and poles. The order function of [F3] is additive, so $\operatorname{ord}_p(x^n)=n\operatorname{ord}_p(x)$ for every closed point $p$; by [F1] the only points with $\operatorname{ord}_p(x)\ne0$ are $0$, where $\operatorname{ord}_0(x)=1$, and $\infty$, where $\operatorname{ord}_\infty(x)=-1$. Hence $\operatorname{div}(x^n)=n[0]-n[\infty]$, the zero divisor of $x^n$ is $(x^n)_0=n[0]$, and its pole divisor is $(x^n)_\infty=n[\infty]$. By [F2] the fibre of $\varphi$ over $0$ is carried by $n[0]$ and the fibre over $\infty$ by $n[\infty]$; in particular $\varphi^{-1}(0)=\{0\}$ and $\varphi^{-1}(\infty)=\{\infty\}$ as sets, with $\kappa(0)=\kappa(\infty)=k$ by [F1]. [F1, F2, F3]

1.3 Ramification at $0$ and at $\infty$. By [F1] the element $x$ is a uniformizer of $\mathcal O_{\mathbb P^1_k,0}$, and the pullback of the target uniformizer $x$ at $0$ is $\varphi^{\sharp}(x)=x^n$, so $e_0=\operatorname{ord}_0(x^n)=n$ by [F3]. At infinity $y=x^{-1}$ is a uniformizer of $\mathcal O_{\mathbb P^1_k,\infty}$ by [F1], and the pullback of the target uniformizer $y$ at $\infty$ is $\varphi^{\sharp}(y)=y^n$, so $e_\infty=\operatorname{ord}_\infty(y^n)=n$. [F1, F3]

2.1 The degree is $n$. The function field extension $k(\mathbb P^1_k)/k(x^n)$ is separable because $x$ satisfies the polynomial $T^n-x^n\in k(x^n)[T]$ whose derivative $nT^{n-1}$ has no common root with it in characteristic not dividing $n$, so [F4] applies to the nonconstant morphism $\varphi$ of degree $[k(\mathbb P^1_k):k(x^n)]$. Evaluating the fibre-degree sum of [F4] at $q=0$ and using that the fibre is the single point $0$ with $\kappa(0)=k$ by step 1.2 and $e_0=n$ by step 1.3 gives $\deg(\varphi)=e_0\,[\kappa(0):k]=n$. The same computation at $\infty$ gives $\deg(\varphi)=e_\infty\,[\kappa(\infty):k]=n$, and the two readings agree. [F2, F4, step 1.2, step 1.3]

2.2 Relative differentials on the two charts. On $U_0$ the map of affine charts is the ring map $A=k[x]\to B=k[x]$, $x\mapsto x^n$, so $B=A[T]/(T^n-x)$ with $T\mapsto x$ and $g(T)=T^n-x$; its derivative is $g'(T)=nT^{n-1}$, and the class $n\in k$ is a unit because $\operatorname{char}k\nmid n$, so [F6] gives $\Omega_{B/A}\cong B/(T^{n-1})=k[x]/(x^{n-1})$. Localizing at the maximal ideal $(h)$ of a closed point $p=V(h)\in U_0$ as in [F1] and using the localization clause of [F6], the stalk is $\Omega_{\mathbb P^1_k/\mathbb P^1_k,p}\cong k[x]_{(h)}/(x^{n-1})$: this is zero when $h\ne x$, because then $x$ is a unit of the localization, and for $p=0$ it is the module $k[x]_{(x)}/(x^{n-1})$, whose filtration by the powers of the uniformizer $x$ has $n-1$ successive quotients isomorphic to $\kappa(0)=k$, so its length is $n-1$ by [F7]. The same computation in the coordinate $y$ on $U_\infty$ gives $\Omega_{\mathbb P^1_k/\mathbb P^1_k,p}=0$ for $p\in U_\infty$ with $p\ne\infty$ and length $n-1$ at $\infty$. Hence the relative differentials are supported exactly on $\{0,\infty\}$, with $l_0=l_\infty=n-1$, and this support is empty exactly when $n=1$. [F1, F5, F6, F7, step 1.1]

3.1 Unramifiedness away from $0$ and $\infty$. Let $p\notin\{0,\infty\}$ be a closed point. By step 2.2 the stalk $\Omega_{\mathbb P^1_k/\mathbb P^1_k,p}$ vanishes, so $l_p=0$, and the criterion of [F5] gives $e_p=1$ together with separability of $\kappa(p)/\kappa(\varphi(p))$; in the terminology of [F5] the point $p$ is unramified and lies in neither the index-ramification locus nor the differential-ramification locus. Since $e_0=e_\infty=n$ by step 1.3, the index-ramification locus equals $\{0,\infty\}$ when $n\ge2$ and is empty when $n=1$, and by step 2.2 the same holds for the differential-ramification locus. [F5, step 1.3, step 2.2]

3.2 The ramification divisor. Define $R_\varphi=\sum_p l_p[p]$ with $l_p$ the length of the relative differentials at $p$; since $l_p=0$ for all but finitely many $p$ and all $l_p\ge0$, this is an effective divisor on $\mathbb P^1_k$ in the sense of [F8]. By step 2.2 its coefficients are $l_0=l_\infty=n-1$ and $l_p=0$ for every other closed point, so $R_\varphi=(n-1)\bigl([0]+[\infty]\bigr)$, with support $\{0,\infty\}$ and length $n-1$ at each of the two points when $n\ge2$, and $R_\varphi$ is the zero divisor when $n=1$. [F8, step 2.2]

4.1 Conclusion. The morphism $\varphi([s:t])=[s^n:t^n]$ of the statement is finite and surjective of degree $n$ by steps 1.1 and 2.1; it is unramified at every closed point away from $0$ and $\infty$ by step 3.1; at $0$ and at $\infty$ the fibre is the single point with ramification index $n$ by steps 1.2 and 1.3, so the fibre degree sum reads $n=n$ over both points by step 2.1; and, in the tame case $\operatorname{char}k\nmid n$, the ramification divisor is $R_\varphi=(n-1)\bigl([0]+[\infty]\bigr)$ by step 3.2. The Axiom of Choice of [F9] is used only through the construction of the finite morphism and through the divisor theory of the projective line, and no further selection is made. [F4, F5, F9, step 1.1, step 2.1, step 3.1, step 3.2] ∎
