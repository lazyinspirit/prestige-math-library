---
dependency_level: 0
id: lem-semisimple-horospherical-local-product-and-tiles
kind: lemma
title: "Semisimple horospherical geometry and Malcev tiles"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero
  - thm-baker-campbell-hausdorff
  - prop-adjoint-exponential-identity
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock, Badly approximable systems of affine forms"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§§2.3 and 3.1; finite BCH construction and tiling are proved below"
---

## Statement

Assume Countable Choice. Let $G$ be a finite-dimensional real Lie group, $X\in\mathfrak g$ with semisimple $\operatorname{ad}X$, and $a_t=\exp(tX)$. Let $\mathfrak h$ and $\mathfrak s$ be the real subspaces whose complexifications are the sums of the positive-real-part and nonpositive-real-part eigenspaces, respectively. Suppose $k=\dim\mathfrak h>0$.

Then $H=\exp_G\mathfrak h$ is a closed embedded simply connected nilpotent subgroup, and its exponential coordinates identify it smoothly with $\mathbb R^k$. For a right-invariant Riemannian metric on $H$, the automorphisms $\Phi_t(h)=a_tha_{-t}$ satisfy $\operatorname{Lip}(\Phi_{-t})\le C e^{-\lambda t}$ for $t\ge0$, with $\lambda>0$, and scale Haar volume by $e^{\chi t}$, $\chi=\operatorname{tr}(\operatorname{ad}X|_{\mathfrak h})>0$.

Near the identity multiplication $(s,h)\mapsto\exp(s)h$, $s\in\mathfrak s$, is a smooth product chart. Its transverse factors remain uniformly small under every $\Phi_t$, $t\ge0$. A smooth left-invariant volume on $G$ in this chart is exactly $d\nu_{\mathfrak s}(s)d\nu_H(h)$ for a smooth positive transverse density. For a quotient by a discrete subgroup, a right-invariant metric on $G$ gives $\operatorname{dist}(\Phi_t(\exp s)z,z)\le C_0\|s\|$, uniformly in $z,t\ge0$ for small $s$.

There is a basis $Y_1,\ldots,Y_k$ such that for every $r>0$ the open coordinate box $V_r=\{\exp(\sum x_iY_i):|x_i|<r/2\}$ and translations $\gamma_b=\exp(\sum rb_iY_i)$, $b\in\mathbb Z^k$, have disjoint translated open interiors and translated closed boxes covering $H$. These closed cells are locally finite, compact, of equal Haar volume, and have null boundaries. No subgroup property of the translation set or rationality of structure constants is assumed.

## Statement references

[Kleinbock, §§2.3 and 3.1](https://arxiv.org/pdf/math/9808057v2) — expanding directions, transverse directions and nilpotent tessellations.

## Facts & Assumptions

**Given:** Countable Choice, $G,X,\mathfrak h,\mathfrak s,k$ as stated.

[F1] Under Countable Choice the Lie exponential is smooth with identity differential at zero, and local products are given by the convergent BCH series. [[thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero]], [[thm-baker-campbell-hausdorff]]

[F2] Under Countable Choice $\operatorname{Ad}_{\exp Y}=e^{\operatorname{ad}Y}$. Exponentials commute with conjugation, by conjugating the uniquely specified one-parameter curves. [[prop-adjoint-exponential-identity]]

[F3] A smooth finite-dimensional coordinate map with invertible differential has a smooth local inverse. [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]

[F4] Under Countable Choice, smooth Euclidean coordinate changes transform nonnegative integrals by their absolute Jacobian; countable chart pieces therefore define smooth-density measures consistently. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[A1] Countable Choice is assumed for the conditional Lie, integration, measure or dimension suppliers actually invoked below. No stronger Choice axiom is adopted. [[def-countable-choice]]

## Proof

**Proof technique:** finite weight filtrations, local BCH and explicit triangular rounding.

1.1 Brackets add adjoint eigenvalues, since $\operatorname{ad}X$ is a derivation. Thus $\mathfrak h,\mathfrak s$ are real Lie subalgebras and give a direct sum of $\mathfrak g$. Let $\lambda$ be the smallest positive real part among the eigenvalues in $\mathfrak h$. Repeated bracketing by vectors in $\mathfrak h$ raises the finite real-weight filtration of all $\mathfrak g$ by at least $\lambda$ at each step. Sufficiently long brackets vanish. Hence $\mathfrak h$ is nilpotent and all $\operatorname{ad}Y$, $Y\in\mathfrak h$, are simultaneously strictly triangular in an ordered weight basis. The map $\operatorname{ad}|_{\mathfrak h}$ is injective: a central $Y$ has $[X,Y]=0$, whereas a vector in the positive-weight subspace with this property is zero. [given, algebra]

2.1 The restriction of BCH to $\mathfrak h$ is a finite polynomial. For arbitrary $Y,Z\in\mathfrak h$, conjugate them by $e^{-t\operatorname{ad}X}$ into the local neighbourhood in F1. Local BCH there and its equivariance under the Lie automorphism $e^{-t\operatorname{ad}X}$ give, after conjugation back, $\exp Y\exp Z=\exp\operatorname{BCH}(Y,Z)$ globally. Also $(\exp Y)^{-1}=\exp(-Y)$. Thus $H$ is a subgroup without invoking a global Lie integration theorem. By F2, the matrix logarithm of $\operatorname{Ad}_{\exp Y}$ is the finite polynomial $\sum_{j\ge1}(-1)^{j+1}(\operatorname{Ad}_{\exp Y}-I)^j/j$, equal to $\operatorname{ad}Y$. Its degree is uniformly bounded by the finite weight filtration. This proves injectivity of $\exp|_{\mathfrak h}$ and a smooth inverse on its image. [F1, F2, step 1.1, algebra, A1]

3.1 The matrices $\exp(\operatorname{ad}\mathfrak h)$ form a closed subset of the unipotent triangular matrices: their polynomial logarithms lie in the closed linear space $\operatorname{ad}\mathfrak h$, and polynomial exponential and logarithm are inverse on the ambient strictly triangular matrix space. If $\exp Y_n\to g$ in $G$, continuity of Ad and this polynomial inverse give $Y_n\to Y\in\mathfrak h$, hence $g=\exp Y$. The finite-dimensional first-countable topology and the stated CC allow the usual closure sequence test. This proves closed embeddedness, not merely abstract injectivity. The global smooth exponential coordinate chart identifies $H$ with $\mathbb R^k$, hence makes it simply connected. [F1, F2, step 1.1, step 2.1, algebra]

3.2 A nilpotent Lie algebra has a basis with $[\mathfrak h,Y_i]\subset\operatorname{span}(Y_{i+1},\ldots,Y_k)$. To construct it, take a nonzero vector in the centre, which contains the last nonzero lower-central term, use it as $Y_k$, and induct on the quotient by its line; lifts of the quotient basis have the required property. The abelian and one-dimensional cases start this finite induction. In these first-kind coordinates BCH has $i$-th coordinate $x_i+z_i+P_i(x_1,\ldots,x_{i-1},z_1,\ldots,z_{i-1})$, since any bracket containing an index at least $i$ has output index greater than $i$. [step 1.1, step 2.1, construct, algebra]

4.1 Semisimplicity gives $\|e^{-t\operatorname{ad}X}|_{\mathfrak h}\|\le Ce^{-\lambda t}$ and $\|e^{t\operatorname{ad}X}|_{\mathfrak s}\|\le C$ by decomposing into real exponential-rotation blocks. In a right-invariant metric the first bound applies to the length of every path under $\Phi_{-t}$, giving the global Lipschitz bound. Its volume Jacobian at the identity is $\det e^{t\operatorname{ad}X}|_{\mathfrak h}=e^{\chi t}$, and invariance makes it the same everywhere. Each positive real weight contributes positively to the real trace, so $\chi>0$. [F2, step 1.1, step 3.1, algebra]

4.2 Fix $r>0$. To write any point as $x*rb$ with $x_i\in[-r/2,r/2)$ and $b\in\mathbb Z^k$, solve the triangular equations of step 3.2 in increasing $i$. All polynomial terms are already determined at each stage, so ordinary integer rounding gives a unique $b_i$ and residual $x_i$. Thus these half-open cells partition $H$, their open interiors are disjoint, and their closed versions cover. The same triangular multiplication has Jacobian1 under both left and right translation, so coordinate Lebesgue density is Haar; all cells have equal positive volume and their boundaries are null. The closure of the initial box is compact by the global chart. On any compact coordinate set the same recursion bounds all possible integer $b_i$, proving local finiteness of closed cells. This proves the full tiling assertion without a rational lattice in $H$. [F4, step 3.1, step 3.2, construct, algebra]

5.1 The differential of $(s,Y)\mapsto\exp s\exp Y$ at zero is $(s,Y)\mapsto s+Y$, invertible by the direct sum, so F3 gives the local product chart. For small $s$, $\Phi_t(\exp s)=\exp(e^{t\operatorname{ad}X}s)$ remains in a fixed exponential neighbourhood and its distance to identity is at most $C_0\|s\|$ by step 4.1 and local smoothness. A right-invariant metric on $G$ descends locally to the quotient by a discrete right subgroup, and $\operatorname{dist}(qg,g)=\operatorname{dist}(q,e)$ in $G$. Taking the quotient infimum proves the uniform displacement assertion. [F1, F2, F3, step 4.1, algebra]

6.1 A smooth left-invariant density on $G$ is constructed by translating one positive density on $\mathfrak g$; its integral is defined using countably many Euclidean charts and change of variables under CC. Right translation by $h\in H$ changes it by $|\det\operatorname{Ad}_h|^{-1}=1$, since step 1.1 makes the adjoint nilpotent before exponentiation. Pull this density back to the product chart and divide by the smooth right-invariant density on $H$ obtained by right-translating one positive density at its identity. The remaining smooth factor $J(s,h)$ is independent of $h$, because right translation in that factor changes only the second product coordinate and preserves both densities. On the connected small coordinate box this gives $J(s,h)=J(s,e)$. Put $d\nu_{\mathfrak s}=J(s,e)ds$; this proves the exact product identity. This is a direct smooth-density construction; no general Haar existence theorem is imported. [F2, F4, step 1.1, step 5.1, algebra]

7.1 Steps 4.1–5.1 give the contraction, volume and transverse metric assertions; step 6.1 gives the product density; and step 4.2 gives all claimed cells and their measure properties. All Lie integration used here was the local CC exponential/BCH input followed by the explicit weight-contraction argument. In particular closed embeddedness was verified separately in step 3.1, so an injectively immersed nonclosed subgroup is not being mistaken for this horosphere. [step 3.1, step 4.1, step 5.1, step 6.1, step 4.2, algebra] ∎

