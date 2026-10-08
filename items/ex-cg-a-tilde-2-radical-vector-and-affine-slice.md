---
id: "ex-cg-a-tilde-2-radical-vector-and-affine-slice"
kind: "example"
title: "The radical vector of A-tilde 2 and its Euclidean slice"
provenance: {"statement": "ai-generated", "proof": "ai-altered"}
generation: {"role": "example"}
sources: {"references": [{"title": "M. W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, Princeton University Press, 2008; 600 PDF pages)", "url": "https://people.math.osu.edu/davis.12/davisbook.pdf", "locator": "Section 6.8, Proposition 6.8.8 and Lemma 6.8.6 with proofs, printed pp. 100-101; Appendix C, the cases $\\tilde A_n$ ($\\sum$ of rows $=0$) and Table 6.1, printed pp. 104, 436"}, {"title": "R. Xiong, Lectures on Affine Weyl Groups (complete lecture notes, October 2024; 77 PDF pages)", "url": "https://cubicbear.github.io/doc/affineNotes.pdf", "locator": "Chapter 2, Example 2.7 (the action of $W_a$ in type $A_2$ and the triangular alcove), PDF pp. 12-13"}], "scraped": []}
status: published
origin: "pipeline"
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 17
deps: ["def-cg-irreducible-affine-coxeter-type","lem-cg-positive-radical-and-affine-gram-exclusions","def-cg-standard-affine-diagrams","lem-cg-affine-slice-simplex-and-wall-reflections","def-cg-real-coxeter-form-and-reflection","ex-classical-root-systems-in-euclidean-coordinates","thm-sylvesters-criterion-for-positive-definiteness","lem-cg-affine-type-crystallographic-alcove-diagrams","lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram","lem-cg-highest-root-and-fundamental-alcove"]
proof_strategy: direct
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s_1,s_2,s_3\}$, $m(s_i,s_j)=3$ for $i\ne j$, so that $\Gamma=\tilde A_2$ ([[def-cg-standard-affine-diagrams]] (1)), and let $B$ be the cosine matrix $$B=\begin{pmatrix}1&-\frac12&-\frac12\\[1pt]-\frac12&1&-\frac12\\[1pt]-\frac12&-\frac12&1\end{pmatrix}$$ on $V=\mathbb R^S$ ([[def-cg-real-coxeter-form-and-reflection]]). Then:

**(i)** $B$ is positive semidefinite of corank one, its kernel is $\operatorname{rad}(B)=\mathbb R\delta$ with $\delta=e_{s_1}+e_{s_2}+e_{s_3}=(1,1,1)>0$ ([[lem-cg-positive-radical-and-affine-gram-exclusions]] (1)), and all proper principal submatrices of $B$ (the rank-two principal minors) are positive definite. The eigenvalue statement behind the corank: $B v=0$ for $v=(1,1,1)$, and $B(v,v)=3-6\cdot\frac12=0$; the determinant is zero and each $2\times2$ principal submatrix has determinant $\sin^2(\pi/3)=\frac34>0$ ([[thm-sylvesters-criterion-for-positive-definiteness]]).

**(ii)** The radical quotient $U=V/\mathbb R\delta$ is two-dimensional Euclidean; the affine slice is $E=\{\varphi\in V^*:\varphi(\delta)=1\}$, i.e. $\varphi=(\varphi(e_{s_1}),\varphi(e_{s_2}),\varphi(e_{s_3}))$ with coordinate sum $1$, and the three vertices of the alcove simplex ([[lem-cg-affine-slice-simplex-and-wall-reflections]] (3)) are $v_1=(1,0,0)$, $v_2=(0,1,0)$, $v_3=(0,0,1)$ (coordinate functionals). The alcove $\bar A=\operatorname{conv}\{v_1,v_2,v_3\}$ is the standard equilateral triangle: the three side vectors are differences of distinct vertices, each of dual $b^*$-norm squared $4/3$, so the side length is $2/\sqrt3$ (the dual metric is the slice metric, rather than the quotient form applied to the same coordinate tuple).

**(iii)** The three walls $\varphi(e_{s_i})=0$ meet pairwise at the angle $\pi/3$ (their normals are the classes of the $e_{s_i}$, whose pairwise $b$-pairing is $-\frac12=-\cos(\pi/3)$), so each facet-reflection product has order $3$; the facet reflections generate the faithful affine action of $W(\tilde A_2)$ on $E$ ([[lem-cg-affine-slice-simplex-and-wall-reflections]] (4)), in agreement with the constant term $\delta_s\varphi(e_s)$-relation $\sum_s\delta_s\varphi(e_s)=1$.

**(iv)** Comparison with the crystallographic $A_2$ alcove: $\tilde A_2$ is the alcove diagram of the root system $A_2$ by [[lem-cg-affine-type-crystallographic-alcove-diagrams]] (1); both alcoves have facet normals with the same Gram matrix $B$ and are therefore similar facet-to-facet by [[lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram]]; the two reflection groups are conjugate. The $A_2$ alcove of [[lem-cg-highest-root-and-fundamental-alcove]] (2) in its ambient Euclidean plane is accordingly related to the slice triangle $\bar A=\operatorname{conv}\{v_1,v_2,v_3\}$ by a similarity matching facets, and the ratio of the side lengths gives the scale factor.

**(v)** The radical vector is exactly the positive relation among the facet normals: $\delta_{s_1}\bar u_{s_1}+\delta_{s_2}\bar u_{s_2}+\delta_{s_3}\bar u_{s_3}=0$ in $U$ ([[lem-cg-affine-slice-simplex-and-wall-reflections]] (2)-(3)), and the property that its coefficients are all positive is what makes $\bar A$ a bounded simplex rather than an unbounded cone.

## Facts & Assumptions

**Given:** The three-vertex all-$3$ diagram and its displayed form.

[F1] The form is the cosine form, whose generator reflections are $r_s(v)=v-2B(v,e_s)e_s$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F2] The quotient and dual slice metric use $b^\flat$ and its inverse, not the same coordinate quadratic form on vectors and functionals ([[def-cg-irreducible-affine-coxeter-type]] (3)–(4)).

[F3] The slice vertices, simplex normals, faithful action and reflection formulas are [[lem-cg-affine-slice-simplex-and-wall-reflections]] (1)–(4).

[F4] The $A_2$ root system has simple roots $\alpha_1=e_1-e_2,\alpha_2=e_2-e_3$, highest root $\theta=e_1-e_3$, and the alcove inequalities are $(x,\alpha_i)>0$, $(x,\theta)<1$ ([[ex-classical-root-systems-in-euclidean-coordinates]], [[lem-cg-highest-root-and-fundamental-alcove]]). Its affine facet-normal Gram matrix is the one displayed here ([[lem-cg-affine-type-crystallographic-alcove-diagrams]] (1)–(2)).

[F5] Equal facet-normal Gram matrices give a facet-matching similarity conjugating the reflection groups ([[lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram]]).

## Proof

**Proof technique:** direct; all finite coordinate constructions use no choice principle.

1.1 For $x=(x_1,x_2,x_3)$, direct expansion gives $B(x,x)=\frac12((x_1-x_2)^2+(x_2-x_3)^2+(x_3-x_1)^2)$. It is nonnegative and vanishes exactly on $\mathbb R(1,1,1)$; matrix multiplication also gives $B(1,1,1)=0$, so this is precisely the radical. Each two-coordinate principal form is $a^2-ab+b^2=(a-b/2)^2+3b^2/4$, positive definite; the one-coordinate forms are $(1)$ and the empty case is vacuous. Their determinants are $3/4$, and the full determinant is zero. [F1, algebra]

2.1 The slice relation is $\varphi_1+\varphi_2+\varphi_3=1$, and [F3] gives its coordinate vertices $v_i$ and triangular closure. Put $H:=\{z\in\mathbb R^3:\sum_i z_i=0\}$. Every class in $U=V/\mathbb R(1,1,1)$ has a unique representative in $H$, obtained by subtracting the mean of its coordinates, so $H\to U$ is a linear isomorphism. The direction space $K_\delta$ consists of functionals with coordinate tuple $y=(\psi(e_{s_1}),\psi(e_{s_2}),\psi(e_{s_3}))\in H$; under the representative identification, $\psi(\bar z)=\sum_i y_i z_i$, so $y$ represents $\psi$ using the standard dot product on $H$. For $z\in H$, the matrix in [F1] gives $Bz=(3/2)z$; hence $b^\flat(z)$ is represented by $(3/2)z$, and $b^\flat{}^{-1}\psi$ is represented by $z=(2/3)y$. Therefore $b^*(\psi,\psi)=B(z,z)=(2/3)\sum_i y_i^2$. Each difference $v_i-v_j$ has tuple with one $1$, one $-1$ and one zero, so its squared length is $4/3$. All three sides therefore have length $2/\sqrt3$ in the prescribed Euclidean slice metric. [F1, F2, F3, step 1.1, algebra]

3.1 The inward unit normals are $b^\flat(\bar e_i)$; their pairings are $-1/2$ for distinct indices by [F3]. The walls of the triangle thus meet at interior angle $\pi/3$, and composing two line reflections gives rotation by $2\pi/3$, of exact order three. The facet reflections generate the faithful action by [F3]. The relation among the normals is $\sum_i b^\flat(\bar e_i)=b^\flat(\bar\delta)=0$, with all coefficients one. Its positivity gives the bounded coordinate simplex directly: $\varphi_i\ge0$ and $\sum_i\varphi_i=1$ bound each coordinate. [F1, F2, F3, step 2.1, algebra]

4.1 In the coordinate $A_2$ plane $x_1+x_2+x_3=0$, the closed root alcove is $x_1\ge x_2\ge x_3$ and $x_1-x_3\le1$. Its vertices are the intersections of pairs of its three wall equations. The equations $x_1=x_2$ and $x_2=x_3$, together with the coordinate sum, give $(0,0,0)$. For $x_1=x_2$ and $x_1-x_3=1$, write $x_1=x_2=a$, $x_3=a-1$; then $3a-1=0$, giving $(1,1,-2)/3$. For $x_2=x_3$ and $x_1-x_3=1$, write $x_2=x_3=b$, $x_1=b+1$; then $3b+1=0$, giving $(2,-1,-1)/3$. Each point satisfies the remaining inequality. Each difference of two distinct vertices is, up to coordinate permutation and sign, $(2,-1,-1)/3$, so its squared length is $(4+1+1)/9=2/3$. By [F4,F5] the root alcove and slice triangle are similar facet to facet, and the similarity from root alcove to slice has scale $\sqrt2$, since $(4/3)/(2/3)=2$. It conjugates the corresponding reflection groups. This proves all the stated radical, wall, metric and comparison data without Choice. [F4, F5, step 1.1, step 2.1, step 3.1, algebra] ∎
