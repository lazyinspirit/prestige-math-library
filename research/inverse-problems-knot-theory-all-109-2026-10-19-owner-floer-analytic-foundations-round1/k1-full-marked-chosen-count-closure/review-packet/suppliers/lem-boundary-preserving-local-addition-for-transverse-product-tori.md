---
id: lem-boundary-preserving-local-addition-for-transverse-product-tori
kind: lemma
title: "A boundary-preserving local addition flat near transverse generators"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-euclidean-inverse-function-theorem, thm-higher-regularity-of-local-inverses]
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Serge Lang, Fundamentals of Differential Geometry, connections and local additions"
      url: "https://link.springer.com/book/10.1007/978-1-4612-0541-8"
---

## Statement

Assume Countable Choice. Let $(X,g)$ be compact and let $L_0,L_1\subset X$ be compact smooth submanifolds whose intersections are finite and transverse. Suppose fixed disjoint coordinate neighborhoods of the intersection points take both submanifolds to linear subspaces, as provided by the product generator charts. Then there is a smooth map
$$\mathcal E:\{(x,v)\in TX:|v|_g<\epsilon\}\longrightarrow X$$
for some $\epsilon>0$, with $\mathcal E(x,0)=x$, $d_v\mathcal E(x,0)=I$, and $\mathcal E(x,v)\in L_j$ whenever $x\in L_j$, $v\in T_xL_j$. The map $(x,v)\mapsto(x,\mathcal E(x,v))$ is a diffeomorphism onto an open neighborhood of the diagonal in $X\times X$ after shrinking its domain. Its inverse for sufficiently close pairs in $L_j\times L_j$ takes values in $TL_j$.

On smaller fixed generator neighborhoods it is exactly coordinate addition:
$$q(\mathcal E(x,v))=q(x)+dq_xv$$
for all sufficiently small $v$. Derivatives of every fixed order of this addition and its inverse are uniformly bounded on smaller neighborhoods in finite coordinate covers. This is a genuine finite-dimensional boundary-preserving local addition, not an assumption about a Sobolev map space.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The compact smooth target, compact transverse boundary pair, and fixed linearizing neighborhoods in the statement.

[F1] The actual smooth local inverse results are [[thm-euclidean-inverse-function-theorem]] and [[thm-higher-regularity-of-local-inverses]]. The ODE existence and parameter regularity needed below are proved directly, rather than imported from an unrestricted-choice theorem.

## Proof

1.1 Cover $X$ by adapted coordinate neighborhoods as follows. At an intersection use a prescribed common linearizing chart. At a point of $L_j$ off the other submanifold use a submanifold chart flattening $L_j$, small enough to avoid the other closed submanifold. Elsewhere use a chart avoiding both. A finite subcover with smaller relatively compact neighborhoods exists by compactness; finite smooth bumps and normalization give a subordinate partition $\phi_i$. On each chart take the coordinate-flat affine connection $\nabla^i$. Every such local connection preserves $TL_j$ in tangent directions wherever its chart meets $L_j$, because that submanifold is a linear coordinate subspace there. The affine combination $\nabla=\sum_i\phi_i\nabla^i$ is a global smooth connection: $\sum\phi_i=1$ gives the connection Leibniz identity. It is torsion-free, since its torsion is the same weighted sum of the zero local torsions, and it satisfies $\nabla_vw\in TL_j$ for tangent fields $v,w$ along $L_j$. Terms with compactly supported weights extend smoothly by zero outside their charts. [given, construct, algebra]

2.1 Make this connection exactly flat on smaller prescribed generator neighborhoods. On each disjoint common linear chart choose a cutoff equal to one on a smaller relatively compact neighborhood and zero off a larger one. Replace $\nabla$ there by the affine combination of its current value and that chart's flat connection, with these weights. Both connections are torsion-free and preserve both tangent subbundles where present, so those properties persist. The finite modifications are disjoint. On a fixed smaller neighborhood of each generator, the resulting connection has zero Christoffel symbols in the prescribed chart. All its coordinate derivatives of any specified finite order are bounded on finite relatively compact covers. [step 1.1, construct, algebra]

3.1 In a coordinate chart its geodesic equation is $$x'=p,\qquad p'=-\Gamma(x)(p,p).$$ We prove local existence with parameters using only explicit contractions. On a compact coordinate neighborhood and a bounded velocity ball the smooth right side $F(x,p)$ has bounded norm and Lipschitz constant $L$. For a sufficiently small fixed time $h>0$, the integral map $T_\zeta(X)(t)=\zeta+\int_0^tF(X(r))dr$ maps a fixed closed trajectory ball in $C([0,h];\mathbb R^{2d})$ into itself and has contraction constant $hL\le1/2$. Its explicit iterates converge geometrically in the uniform norm to a unique solution. This solution is $C^1$ in time by its integral equation. Uniqueness on overlaps follows by subdividing into intervals where the same contraction estimate applies. No family of arbitrary fixed-point choices is used: the iterates start at the constant trajectory and their limits are unique. [step 2.1, construct, algebra]

4.1 The solution depends smoothly on its initial value $\zeta$. First the contraction estimate gives $\|X_{\zeta+\xi}-X_\zeta\|_\infty\le2|\xi|$. Let $K_\zeta Y(t)=\int_0^tDF(X_\zeta(r))Y(r)dr$, whose norm is at most $1/2$. The linear candidate derivative is $$D_\zeta X_\zeta\,\xi=(I-K_\zeta)^{-1}(t\mapsto\xi),$$ with inverse given by its norm-convergent Neumann series. Taylor's theorem for $F$ on the finite-dimensional compact coordinate neighborhood bounds the error in this formula by $C|\xi|^2$: subtract the two integral equations and the candidate derivative equation, bound the nonlinear remainder by $C\|X_{\zeta+\xi}-X_\zeta\|_\infty^2$, and absorb the $1/2$ linear term. Thus it is the Frechet derivative. It varies continuously since $K_\zeta$ does and the resolvent identity bounds differences of inverses. At order $r\ge2$, differentiation of the integral equation puts the unknown $D^rX$ under the same operator $I-K_\zeta$; its right side is a finite sum of integrals of $D^\ell F(X)$ applied to already known lower parameter derivatives, with $2\le\ell\le r$. The product and chain rules and the same inverse prove existence and continuity inductively, with uniform bounds at each fixed order. This proves smooth parameter dependence on each short interval directly. [step 3.1, construct, algebra]

5.1 A uniform small initial velocity gives a geodesic up to time one. On a smaller coordinate neighborhood the estimate $|p'|\le C|p|^2$ gives $$|p(t)|\le\frac{|p(0)|}{1-C|p(0)|t}\le2|p(0)|\qquad(0\le t\le1)$$ when $C|p(0)|\le1/2$. For nonzero $p$ this follows by differentiating $1/|p|$; a solution hitting $p=0$ is the constant solution by local uniqueness, so no missing zero case occurs. The displacement is at most $2|p(0)|$. Choose the velocity radius uniformly small compared with margins of finitely many smaller coordinate neighborhoods. These bounds keep trajectories in their larger charts. Finitely many short intervals of step 3.1 therefore extend every such solution to time one; step 4.1 and composition give smooth dependence and uniform bounds on all fixed-order derivatives. Coordinate solutions agree intrinsically by uniqueness of the transformed geodesic equation. Define $\mathcal E(x,v)$ as the time-one value. Compactness makes one positive radius work for all base points. [step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 For $x\in L_j$, $v\in T_xL_j$, the restricted geodesic equation on $L_j$ is also an ambient solution. In adapted coordinates its normal initial position and velocity vanish, and the normal acceleration stays zero because $\nabla$ preserves $TL_j$ in tangent directions. The short-interval existence construction within that submanifold followed by ambient uniqueness therefore proves $\mathcal E(x,v)\in L_j$. At $v=0$ the solution is constant. Differentiating its equation in the initial velocity gives $\delta p'=0$, $\delta x'=\delta p$, so $d_v\mathcal E(x,0)=I$. On a generator neighborhood with zero Christoffel symbols its solution is exactly $q(x(t))=q(x)+t\,dq_xv$ as long as that segment remains in the flat region. Shrink the base neighborhood and velocity radius uniformly to ensure this for $0\le t\le1$. This proves the claimed exact coordinate addition. [step 1.1, step 2.1, step 4.1, step 5.1, algebra]

7.1 In local bundle coordinates the derivative of $\Theta(x,v)=(x,\mathcal E(x,v))$ at $(x,0)$ is the block map $(a,b)\mapsto(a,a+b)$, hence invertible. By [F1] it has a local smooth inverse there. Invertibility persists on a uniform smaller neighborhood of the zero section by compactness. Injectivity also holds on some uniform smaller disk bundle: otherwise choose collisions with both vector norms tending to zero; their first coordinates are the same base point, a subsequence of those base points converges, and the local inverse near that zero vector contradicts the collisions. Thus $\Theta$ is an injective local diffeomorphism, hence a diffeomorphism onto its open image, which contains the diagonal. The same argument for its restriction to $TL_j$ gives a local inverse for close pairs in $L_j\times L_j$; uniqueness of the ambient inverse identifies the two, proving the tangent-valued assertion. Finally [F1], step 4.1 and finite relatively compact covers give bounded derivatives at each fixed order for the addition and its inverse on smaller neighborhoods. All constructions used finite covers and explicit countable iterations, so Countable Choice suffices. [F1, step 4.1, step 5.1, step 6.1, construct, algebra] ∎
