---
dependency_level: 6
id: lem-gl3-boundary-flag-geometry-and-normal-order-nilpotence
kind: lemma
title: "GL3 boundary flag geometry and normal-order nilpotence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-full-level-gl3-automorphic-distribution, lem-gl3-unipotent-character-descent-and-rank-one-boundary-model, thm-local-finite-order-characterization-of-distributions, thm-leibniz-rule-for-distributions, thm-distributions-form-a-sheaf, lem-distribution-pairing-with-smooth-parameter-families, lem-test-function-cutoffs-and-euclidean-localization, def-countable-choice]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Miller and Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), proof of Lemma 5.3, (5.37), (5.48)–(5.53); explicit real flag-coordinate reconstruction"
      url: "https://arxiv.org/pdf/math/0408100v3"
---

## Statement

Assume Countable Choice. In $G/P$ use flags $(\ell\subset\Pi)$ represented by nonzero vectors $v$ and covectors $w$ with $wv=0$. Put $O=\{v_3\ne0\}$ and $S=\{v_3\ne0,w_1=0\}$, so $O$ is the open orbit $H_1S_1P/P$ and $S$ its hypersurface $x=\infty$. For integers $a,b,c,\bar a$ with $c\ne0$ and $a\bar a-bc=1$, put
$$\gamma=\begin{pmatrix}1&0&0\\0&a&b\\0&c&\bar a\end{pmatrix},\qquad h_t=\gamma n(0,t,0)\gamma^{-1}.$$
Then
$$U=O\cup\gamma O=\{\ell\ne\mathbb Re_1\},\qquad T=S\cup\gamma S=\{\ell\ne\mathbb Re_1,w_1=0\}$$
are open and, respectively, a closed smooth hypersurface in $U$. They are invariant under $\gamma H_1\gamma^{-1}$. The complement of $\gamma S$ in $T$ is the codimension-two submanifold
$$K=\{v_3\ne0,w_1=0,v_2/v_3=a/c\}.$$
In coordinates $u=1/x$, $v=y-a/c$, $z$, given by line $(z,y,1)$ and plane covector $(-u,1,uz-y)$, the flow is
$$u\mapsto\frac{u}{1+c^2t(uz-v)},\qquad v\mapsto\frac{v}{1-c^2tv},\qquad z\mapsto\frac{z}{1-c^2tv}.$$
Its normal vector-field coefficients vanish quadratically along $K=\{u=v=0\}$ and its tangent coefficient vanishes linearly there. Its infinitesimal principal-series line-bundle multiplier vanishes on $K$.

On a section supported on $K$ with a finite uniform normal-jet order, the infinitesimal action lowers that normal order; its cyclic action is therefore a finite nilpotent polynomial. The same is true of the upper unipotent action on the finite point jets at infinity in the rank-one model, with identity action on each successive quotient. Consequently, if a principal-series distribution section $Q$ on $U$ is supported on $K$, is periodic under $z\mapsto z+1$, satisfies $\pi(h_1)Q=Q$, and satisfies $\int_0^1\pi(h_t)Q\,dt=0$, then $Q=0$. Likewise, for any $\mu\in\mathbb C$, $\epsilon\in\{0,1\}$, a rank-one vector $D\in W_{\mu,\epsilon}^{-\infty}$ supported at infinity with $\psi(n(1))D=D$ and $\int_0^1\psi(n(t))D\,dt=0$ is zero. No tempered parameter or compact-type condition is required.

## Statement references

[Miller and Schmid, (5.37) and (5.48)–(5.53)](https://arxiv.org/pdf/math/0408100v3)

## Facts & Assumptions

**Given:** The stated flag, principal-series and rank-one data, under [[def-countable-choice|Countable Choice]].

[F1] [[def-full-level-gl3-automorphic-distribution]] gives the lower-triangular principal-series character and its line-bundle action. [[lem-gl3-unipotent-character-descent-and-rank-one-boundary-model]] supplies the open product flag orbits and the full two-chart rank-one model.

[F2] [[thm-local-finite-order-characterization-of-distributions]] bounds a compactly localized distribution by a finite derivative order. [[lem-test-function-cutoffs-and-euclidean-localization]] supplies the scaled normal cutoffs. [[thm-distributions-form-a-sheaf]] identifies sections agreeing locally.

[F3] [[thm-leibniz-rule-for-distributions]] gives the normal-order calculation. [[lem-distribution-pairing-with-smooth-parameter-families]] gives the smooth group-parameter pairings and compact averages.

## Proof

**Given:** The stated data.

1.1 The identity flag is $(\mathbb Re_3\subset\mathbb Re_2+\mathbb Re_3)$ and its stabilizer is exactly $P$. Every flag has a basis adapted to this line and plane, so this is the usual full real flag model of $G/P$. On the finite cell $n(x,y,z)$ the line is $(z,y,1)$ and the plane has covector $(1,-x,xy-z)$. Allowing $x=\infty$ gives every incident plane over a line with $v_3\ne0$, as in [F1]. The condition for $\gamma O$ is $a v_3-c v_2\ne0$. Since $c\ne0$, these two open sets miss exactly $v_2=v_3=0$, the line $\mathbb Re_1$. On their union, $w_1=0$ means the plane contains $e_1$. For $\ell\ne\mathbb Re_1$ that plane is uniquely $\operatorname{span}(e_1,\ell)$, and its plane-fiber equation is a transverse smooth equation. Thus $T$ is a closed smooth hypersurface of $U$. The group $\gamma H_1\gamma^{-1}$ fixes $e_1$ and therefore preserves both conditions. Its complement $T\setminus\gamma S$ is exactly $v_3\ne0$, $a v_3-cv_2=0$, which is the stated $K$. [F1, given, algebra]

2.1 In the specified local chart the covector $(-u,1,uz-y)$ has incidence zero with $(z,y,1)$. The bottom-right block of $h_t$ is [F1, step 1.1, algebra]
$$\begin{pmatrix}1-ac t&a^2t\\-c^2t&1+ac t\end{pmatrix}.$$
Apply it to the line vector and its inverse to the plane covector, then normalize their third and second coordinates, respectively. This gives exactly the three rational transformations in the statement. Their infinitesimal vector field is
$$(c^2uv-c^2u^2z)D_u+c^2v^2D_v+c^2vzD_z.$$
It has the stated vanishing orders and fixes $K$ pointwise. At every fixed flag, $h_t$ is represented in its stabilizer by a lower triangular unipotent matrix, because it is conjugate to a unipotent matrix and triangular. Every diagonal entry is therefore one. The principal-series character in [F1] is one on such a stabilizer element, so the fiber action is trivial on $K$. Its smooth infinitesimal multiplier consequently vanishes there. The actual representation may use the inverse flow; that changes signs without changing any of these vanishing orders. [F1, step 1.1, algebra]

2.2 A section supported on $K$ and periodic in $z$ has uniformly finite normal order. Indeed [F2] on a compact normal neighborhood times one period of $z$ gives some order $M$; periodicity gives the same order along all $K$. If a test has all $(u,v)$ derivatives through degree $M$ zero on $K$, multiply it by a cutoff at normal scale $\varepsilon$. Multivariable Taylor remainder and the product rule bound every derivative through the distribution order by $O(\varepsilon)$ on that support, while support on $K$ leaves the pairing unchanged. Letting $\varepsilon\downarrow0$ proves that the section depends only on the finite normal jet. Using fixed normal Taylor monomials times a bump therefore represents it as [F2, F3, step 1.1, algebra]
$$Q=\sum_{i+j\le M}D_u^iD_v^j\bigl(\delta_0(u)\delta_0(v)\bigr)\otimes Q_{i,j}(z),$$
with distribution coefficients along $K$, in a local bundle frame. This is a finite normal-jet statement; no finite-dimensionality of all tangent distribution coefficients is assumed. [F2, F3, step 1.1, algebra]

3.1 Let $A$ be the infinitesimal action of $h_t$ on these sections. A normal derivative raises normal order by one, multiplication by a function vanishing to normal order $r$ lowers it by at least $r$, and a tangent derivative preserves it, by the finite jet representation and [F3]. Step 2.1 therefore shows that $A$ lowers normal order by at least one, including the bundle multiplier. Hence $A^{M+1}Q=0$ globally. The span of $Q,AQ,\ldots,A^MQ$ is finite dimensional even though the tangent coefficients themselves need not be. The generator commutes with its own one-parameter action, so the derivative of order $M+1$ of that orbit is also zero. Smooth parameter differentiation and scalar Taylor's formula on each test give $\pi(h_t)Q=\sum_{j=0}^Mt^jA^jQ/j!$. The invariance at $t=1$ gives $AP(A)Q=0$, where $P(A)=\sum_{j=0}^{M}A^j/(j+1)!$ has constant term one and is invertible on this nilpotent cyclic span by a finite geometric polynomial. Thus $AQ=0$ and $\pi(h_t)Q=Q$ for all $t$. Its compact average is then $Q$, so the zero-average hypothesis forces $Q=0$. [F2, F3, step 2.1, step 2.2, algebra]

4.1 For the rank-one assertion, a distribution supported at a point is a finite sum of delta derivatives, by the same Taylor-test argument as step 2.2 with no tangent variable. In the infinity coordinate $u=-1/x$ of [F1], the action of $n(t)$ has coordinate $u/(1+tu)$ and frame factor $(1+tu)^{\mu-1}$ near zero. Its infinitesimal action is $-u^2D_u+(\mu-1)u$, which lowers the point-jet order by at least one for every complex $\mu$. Repeat the nilpotent polynomial argument of step 3.1; integer periodicity makes the entire one-parameter action trivial, and the zero average makes the vector zero. This proves both vanishing criteria and all stated geometry without an external flag-classification or representation theorem. [F1, F2, F3, step 2.2, step 3.1, algebra] ∎
