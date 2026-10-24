---
id: "lem-integration-over-the-signed-shuffle-equals-the-product-of-simplex-integrals"
kind: "lemma"
title: "Integration over the signed shuffle equals the product of simplex integrals"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-singular-chain-cross-product-on-generators","def-integral-of-a-form-over-a-smooth-singular-simplex","lem-simplex-integrals-are-independent-of-affine-coordinate-identification","prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges","thm-change-of-variables-for-compact-jordan-sets","lem-integral-additivity-over-a-content-zero-almost-partition","thm-jordan-fubini-by-sections","thm-jordan-boundary-criterion","thm-graphs-of-continuous-functions-have-content-zero","thm-continuous-functions-on-compact-jordan-sets-are-integrable","thm-heine-borel-rn"]
sources:
  references:
    - title: Local simplex product integration; shuffle convention from Miller Lecture
        7
      url: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/9e7c0386b3c2febaa2cf58e75d9c7c32_MIT18_905F16_lec7.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $A$ and $B$ be restrictions of smooth differential forms defined on neighbourhoods of the standard simplices, of degrees $r,s\ge0$ on standard simplices $\Delta^a,\Delta^b$, with $r+s=a+b$. Use the product order (first factor before second) and the standard simplex orientations. For the signed shuffle chain $S_{a,b}$ of the product simplex,
$$\int_{S_{a,b}}\operatorname{pr}_1^*A\wedge\operatorname{pr}_2^*B=\begin{cases}\left(\int_{\Delta^a}A\right)\left(\int_{\Delta^b}B\right),&(r,s)=(a,b),\\0,&(r,s)\ne(a,b).\end{cases}$$
Each summand on the left is defined by affine pullback and simplex integration of an extension to the affine span. The value is independent of the extensions. In particular this applies to forms pulled back along smooth singular simplices into a manifold with boundary. The identity is choice-free.

## Facts & Assumptions

[F1] [[def-singular-chain-cross-product-on-generators]] specifies the signed shuffle paths and their affine simplex maps.

[F2] [[def-integral-of-a-form-over-a-smooth-singular-simplex]] gives the oriented simplex integral, with degree-zero integration equal to evaluation. [[lem-simplex-integrals-are-independent-of-affine-coordinate-identification]] supplies its independence of the chosen neighbourhood extension.

[F3] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]] gives the pullback and wedge formulas in coordinates.

[F4] [[thm-change-of-variables-for-compact-jordan-sets]] gives the integral change of variables for invertible affine maps on compact Jordan domains.

[F5] [[lem-integral-additivity-over-a-content-zero-almost-partition]] gives finite additivity over Jordan pieces with content-zero overlaps.

[F6] [[thm-jordan-fubini-by-sections]] gives the iterated integral on the compact product domain once its sections and integrands are verified.

[F7] [[thm-jordan-boundary-criterion]] tests Jordan measurability by boundary content zero.

[F8] [[thm-graphs-of-continuous-functions-have-content-zero]] makes bounded pieces of nonvertical affine hyperplanes content zero; permuting coordinates preserves cube volumes and content zero.

[F9] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]] gives integrability for the smooth coefficient functions on the compact domains used below.

[F10] [[thm-heine-borel-rn]] makes closed bounded Euclidean sets compact.

## Proof

**Given:** The two simplices, forms and degree equality in the statement. Write $T_a=\{x_i\ge0,\ \sum_{i=1}^a x_i\le1\}$ in the standard affine coordinates, and similarly $T_b$.

1.1 First suppose $a,b>0$. Put $u_i=x_i+\cdots+x_a$ and $v_j=y_j+\cdots+y_b$. The first simplex becomes $1\ge u_1\ge\cdots\ge u_a\ge0$, and the second has the analogous inequalities for $v$. Both coordinate changes have triangular matrix with diagonal entries one, so preserve orientation and have determinant one. At vertex number $i$ of the first simplex, the first $i$ entries of $u$ are one and the rest zero. Consequently a shuffle path increases one successive coordinate of its factor at each step. [F1, F2, given]

2.1 A shuffle specifies an ordering of all the $u_i,v_j$ preserving their within-factor orders. Its image is exactly the closed region where that combined list is decreasing. To see this, if the path's successive vertices are $w_0,\ldots,w_{a+b}$ and their barycentric weights are $t_0,\ldots,t_{a+b}$, the coordinate increased at step $k$ has value $t_k+\cdots+t_{a+b}$. Conversely a decreasing merged list $z_1\ge\cdots\ge z_{a+b}$ in $[0,1]$ gives weights $t_0=1-z_1$, $t_k=z_k-z_{k+1}$ for $k<a+b$, and $t_{a+b}=z_{a+b}$. They are nonnegative, sum to one, and recover the point. Sorting any two already ordered finite lists supplies such an interleaving; ties allow multiple regions. Thus the shuffle regions cover $T_a\times T_b$. Distinct regions intersect only where some $u_i=v_j$: without ties the merged order is unique. [F1, step 1.1]

3.1 The product domain and every shuffle region are bounded closed sets given by finitely many affine inequalities. Their boundaries lie in finitely many bounding affine hyperplanes: a point satisfying all the inequalities strictly is interior. Each relevant bounded hyperplane piece is a subset of the graph of an affine function on a bounding rectangle after solving for one coordinate and, if needed, permuting coordinates. By [F8] these pieces have content zero. The finite union has content zero by taking covers with total volumes below $\varepsilon/N$ for each of its $N$ pieces. Hence [F7] gives Jordan measurability, and [F10] makes their closed bounded descriptions compact. The overlaps in step 2.1 have content zero by the same argument. Smooth coefficient functions are bounded and integrable on all these compact Jordan domains by [F9]. [F7, F8, F9, F10, step 2.1]

4.1 Let $n=a+b$ and $\lambda_\theta:T_n\to T_a\times T_b$ be one shuffle parametrization. In its merged coordinate order its coordinate matrix is the triangular matrix $z_k=t_k+\cdots+t_n$, of determinant one. Returning the merged list to the block order $(u_1,\ldots,u_a,v_1,\ldots,v_b)$ has sign $\operatorname{sgn}(\theta)$: its inversions count exactly the second-factor steps preceding first-factor steps. Returning $u,v$ to $x,y$ again has determinant one. Therefore $\det D\lambda_\theta=\operatorname{sgn}(\theta)$; in particular the affine map is invertible on its affine span and extends to a global affine diffeomorphism of $\mathbb R^n$. For any smooth top-form coefficient $F$, [F2], [F3] and [F4] give $$\operatorname{sgn}(\theta)\int_{\Delta^n}\lambda_\theta^*(F\,dx_1\wedge\cdots\wedge dx_a\wedge dy_1\wedge\cdots\wedge dy_b)=\int_{\lambda_\theta(T_n)}F.$$ Indeed the oriented pullback contributes the determinant sign, while change of variables contributes its absolute value one. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1]

5.1 Suppose $(r,s)=(a,b)$. Write $A=f(x)\,dx_1\wedge\cdots\wedge dx_a$ and $B=g(y)\,dy_1\wedge\cdots\wedge dy_b$. Summing step 4.1 over shuffles, [F5] and step 3.1 give $$\int_{S_{a,b}}\operatorname{pr}_1^*A\wedge\operatorname{pr}_2^*B=\int_{T_a\times T_b}f(x)g(y).$$ Every section at $x\in T_a$ is $T_b$, with continuous integrand $f(x)g$, and sections outside $T_a$ are empty. Thus [F6], with no exceptional sections, makes the last integral $\int_{T_a}f(x)(\int_{T_b}g(y)\,dy)\,dx=(\int_{T_a}f)(\int_{T_b}g)$. This is the asserted product, with no extra Koszul sign. [F2, F3, F5, F6, F9, step 3.1, step 4.1]

6.1 If $(r,s)\ne(a,b)$ but $r+s=a+b$, either $r>a$ or $s>b$. An alternating $r$-form on the $a$-dimensional affine span is zero when $r>a$, and similarly for the second factor. Its restriction and all affine pullbacks are zero, so the left side is zero. If $a=0$ or $b=0$ and degrees match, the one shuffle is the product with a vertex. Its integral is the value of the degree-zero form times the other simplex integral by [F2] and [F3]; if both dimensions are zero it is the ordinary product of two values. The mismatched-degree argument still applies. These cases do not use a positive-dimensional Fubini or Jordan theorem in dimension zero. [F1, F2, F3, step 5.1]

7.1 Extensions of each form agree, together with their derivatives, on the simplex: equality on its affine interior extends to its boundary by continuity. Their product extensions therefore agree on the product tangent spaces, and every affine pullback and integral agrees. For smooth singular pullbacks the same extension convention in [F2] supplies these forms, even for constant or rank-deficient simplices and boundary targets. Zero forms give zero by linearity. Only finitely many shuffles, specified coordinate changes and finite covers for content-zero estimates were used; no countable or arbitrary choice enters. [F2, F3, step 3.1, step 4.1, step 5.1, step 6.1] ∎
