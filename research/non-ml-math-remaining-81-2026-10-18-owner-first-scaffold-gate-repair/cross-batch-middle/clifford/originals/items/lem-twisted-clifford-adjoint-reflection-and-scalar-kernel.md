---
id: lem-twisted-clifford-adjoint-reflection-and-scalar-kernel
kind: lemma
title: Twisted Clifford action, reflections, and scalar kernel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations
dependency_level: 4
deps:
  - def-clifford-algebra-of-a-quadratic-space
  - lem-clifford-polarized-relations
  - thm-clifford-pbw-basis-and-associated-graded
  - lem-real-orthogonal-space-preliminaries
  - lem-cartan-dieudonne-real-nondegenerate-reflection-factorization
  - lem-real-clifford-involutions-and-norm
  - def-real-clifford-group-and-normalized-pin-spin
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.3, Propositions 1.6–1.7"
      url: https://arxiv.org/pdf/0805.0311
    - title: "Eckhard Meinrenken, Lie groups and Clifford algebras, Chapter 2 §4.1, Theorem 4.2"
      url: https://www.math.toronto.edu/mein/teaching/LieClifford/cl12.pdf
---

## Statement

Let $(V,B)$ be a finite-dimensional nondegenerate real quadratic space, $Q(v)=B(v,v)$, and let $\Gamma$ and $\rho_x(v)=\alpha(x)vx^{-1}$ be as in [[def-real-clifford-group-and-normalized-pin-spin]]. For anisotropic $u$, $\rho_u=r_u$. Every $x\in\Gamma$ acts by an element of $O(V,B)$, is homogeneous, and is a nonzero scalar times a product of anisotropic vectors. The kernel of $x\mapsto\rho_x$ on $\Gamma$ is exactly $\mathbb R^\times 1$; consequently the unrestricted normalizer in the definition is a group and agrees with its homogeneous part.

## Facts & Assumptions

**Given:** The nondegenerate real quadratic space, its Clifford algebra, and $\Gamma$ from [[def-real-clifford-group-and-normalized-pin-spin]].

[F1] $v^2=Q(v)1$ and $vw+wv=2B(v,w)1$ in the Clifford algebra ([[def-clifford-algebra-of-a-quadratic-space]], [[lem-clifford-polarized-relations]]).

[F2] For an orthogonal anisotropic basis, increasing square-free monomials form a basis of the Clifford algebra ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F3] The reflection formula, orthogonality of $r_u$, and $\operatorname{im}(A-I)=\ker(A-I)^\perp$ are proved in [[lem-real-orthogonal-space-preliminaries]].

[F4] Every orthogonal transformation is a product of anisotropic reflections ([[lem-cartan-dieudonne-real-nondegenerate-reflection-factorization]]).

[F5] $\alpha$ is an algebra involution, $\alpha(v)=-v$, and the Clifford grading is by word parity ([[lem-real-clifford-involutions-and-norm]]).

## Proof


**Proof technique:** direct.

1.1 For anisotropic $u$, $u^{-1}=u/Q(u)$ by [F1]. Hence $\rho_u(v)=-uvu/Q(u)$. The polarized relation gives $uv+vu=2B(u,v)1$, so $-uvu/Q(u)=v-2B(v,u)u/Q(u)=r_u(v)$. [F1, F3, algebra]

1.2 Let $x\in\Gamma$ and $y_v=\rho_x(v)\in V$. Since $\alpha(y_v)=-y_v$, applying $\alpha$ to $y_v=\alpha(x)vx^{-1}$ gives $xv\alpha(x)^{-1}=\alpha(x)vx^{-1}$, that is, $\rho_{\alpha(x)}(v)=\rho_x(v)$. Using this equality in one factor and [F1] gives $2B(y_v,y_w)1=y_vy_w+y_wy_v=\alpha(x)(vw+wv)\alpha(x)^{-1}=2B(v,w)1$. Thus $\rho_x$ preserves $B$; it is injective because multiplication by invertible elements is injective, and finite dimensionality makes its image all of $V$. [F1, F5, algebra]

1.3 If $n=0$, [F2] gives $\mathrm{Cl}(V,Q)=\mathbb R$, so every kernel element is scalar. If $n>0$ and $\rho_x$ is the identity, then $\alpha(x)e_i=e_i x$ for every vector of an orthogonal anisotropic basis $e_1,\ldots,e_n$. Write $x=x_0+x_1$ with even and odd parts. The grading gives $x_0e_i=e_ix_0$ and $-x_1e_i=e_ix_1$. For a square-free monomial $e_I$ of length $r$, moving $e_i$ past it gives commutation sign $(-1)^r$ when $i\notin I$ and $(-1)^{r-1}$ when $i\in I$. For each nonempty even $I$, choose $i\in I$: the required commutation fails; for each odd $I$, choose $i\in I$: the required anticommutation fails. Distinct $I$ containing a fixed $i$ give distinct deleted basis monomials, so no cancellation can remove these coefficients. By [F2], only the empty even monomial remains and $x$ is scalar. Conversely every nonzero scalar acts trivially. [F2, F5, algebra]

2.1 To prove homogeneity, let $A=\rho_x\in O(V,B)$. By [F4], write $A=r_{u_1}\cdots r_{u_k}$ and put $y=u_1\cdots u_k$. Step 1.1 and homogeneity of each vector give $\rho_y=A$. Equality $\rho_x=\rho_y$ implies, after multiplying by $\alpha(y)^{-1}$ on the left and $x$ on the right, that $\alpha(y^{-1}x)v=v(y^{-1}x)$ for every $v$. The PBW kernel argument of step 1.3 applies to the even and odd parts of $y^{-1}x$ and makes it a nonzero scalar. Therefore $x$ is a scalar multiple of the homogeneous product $y$. [F2, F4, step 1.1, step 1.3, algebra]

3.1 Products of homogeneous normalizers act by composition: $\rho_{xy}=\rho_x\circ\rho_y$. Step 2.1 shows every unrestricted normalizer is homogeneous, and step 1.2 shows its action maps $V$ onto itself. These facts make the set closed under products and inverses, so $\Gamma$ is a group. Step 1.3 gives its scalar kernel, and step 2.1 proves equality with the homogeneous normalizer. [step 1.2, step 1.3, step 2.1, algebra] ∎

## Remarks

The scalar-kernel proof uses the PBW basis and nondegeneracy; it does not use the center of the ungraded Clifford algebra, which can be larger in odd dimension.
