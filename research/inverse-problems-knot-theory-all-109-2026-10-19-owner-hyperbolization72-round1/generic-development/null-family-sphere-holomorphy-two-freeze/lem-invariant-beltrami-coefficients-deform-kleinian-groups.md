---
id: lem-invariant-beltrami-coefficients-deform-kleinian-groups
kind: lemma
title: Invariant Beltrami coefficients deform Kleinian groups
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-measurable-riemann-mapping-sphere
  - thm-composition-and-inverse-quasiconformal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: Quasiconformal deformation context; the complete coefficient and discreteness argument used here is supplied locally from the measurable mapping theorem
---

## Statement

Assume AC. Let $\Gamma$ be a discrete subgroup of $\mathrm{PSL}_2(\mathbb C)$, acting by Möbius transformations on the Riemann sphere. Let $\mu$ be a sphere Beltrami coefficient with $\|\mu\|_\infty\le k<1$, invariant under that action: for each $\gamma\in\Gamma$,
$$\mu(\gamma z)\frac{\overline{\gamma'(z)}}{\gamma'(z)}=\mu(z)$$
almost everywhere in finite charts, equivalently as an equality of sphere coefficient classes. Let $f$ be the unique solution of the Beltrami equation for $\mu$ fixing $0,1,\infty$.

Then every $\rho_\mu(\gamma)=f\gamma f^{-1}$ is Möbius, and $\rho_\mu$ is a faithful homomorphism with discrete image. It preserves the order of every element and therefore preserves torsion-freeness. The map $f$ is an orientation-preserving quasiconformal conjugacy with maximal dilatation at most $(1+k)/(1-k)$. If $\mu=0$, this normalized conjugacy and the induced representation are the identity and the original inclusion. No finiteness or finite-generation hypothesis on $\Gamma$ is needed.

## Facts & Assumptions

**Given:** AC, the discrete matrix subgroup and the invariant coefficient with the stated strict norm bound.

[A1] Full choice is [[def-axiom-of-choice]].

[F1] The sphere measurable mapping theorem supplies the normalized quasiconformal solution, its dilatation bound, and uniqueness up to postcomposition by a Möbius transformation. [[thm-measurable-riemann-mapping-sphere]]

[F2] Quasiconformal compositions and inverses are quasiconformal and satisfy the almost-everywhere Beltrami composition formula, including its null-set transport. [[thm-composition-and-inverse-quasiconformal]]

## Proof

1.1 By [F1], the required normalized $f$ exists. A Möbius transformation is conformal, so the composition formula [F2] gives $\mu_{f\gamma}(z)=\mu(\gamma z)\overline{\gamma'(z)}/\gamma'(z)=\mu(z)$ almost everywhere by the assumed invariance. These are coefficient classes on the sphere; poles are handled in its other chart and the finitely many omitted points are null. Thus $f\gamma$ and $f$ solve the same sphere Beltrami equation. Uniqueness up to Möbius postcomposition in [F1] gives a Möbius map $A_\gamma$ with $f\gamma=A_\gamma f$, proving $A_\gamma=f\gamma f^{-1}$. [A1, F1, F2, given]

2.1 Conjugation by the bijection $f$ preserves products and is injective, so $\gamma\mapsto A_\gamma$ is a faithful homomorphism. Its restriction to every cyclic subgroup is an isomorphism, preserving element orders, including infinite order. Its image therefore is torsion-free exactly when the original group is. [step 1.1, algebra]

2.2 We check discreteness in the actual matrix topology. Suppose otherwise. The finite-dimensional matrix group is metrizable, so there would be nonidentity elements $A_{\gamma_n}$ tending to the identity. Their sphere actions converge uniformly to the identity: in homogeneous coordinates unit vectors map to their matrix images, and matrices tending to a scalar identity give uniformly convergent projective actions on the compact unit sphere. Uniform continuity of $f^{-1}$ on the compact sphere then gives $\gamma_n=f^{-1}A_{\gamma_n}f\to\mathrm{id}$ uniformly on the sphere. For completeness, uniform convergence of Möbius maps to the identity implies convergence in the matrix group. Their values on $0,1,\infty$ converge to these three distinct points. The unique fractional linear map with three specified distinct images is obtained by composing the maps $z\mapsto((z-a)/(z-c))((b-c)/(b-a))$ taking an ordered triple $(a,b,c)$ to $(0,1,\infty)$, interpreted in the appropriate finite charts. Its projective matrix coefficients depend continuously on the three images near $(0,1,\infty)$. Thus $\gamma_n\to\mathrm{id}$ in $\mathrm{PSL}_2(\mathbb C)$, contrary to discreteness of $\Gamma$. Hence the image is discrete. [step 1.1, given, algebra]

3.1 The dilatation and orientation claims are exactly those of [F1]. If $\mu=0$, the identity sphere map solves the equation and has the chosen normalization, so [F1]'s uniqueness gives $f=\mathrm{id}$ and $\rho_\mu(\gamma)=\gamma$. The trivial group and finite groups are included; no selected generating set or countable family of exceptional sets was used, since step 1.1 proves the coefficient identity separately for each supplied group element. [F1, step 1.1, step 2.1, step 2.2] ∎

## Authoring scope

The complete actual measurable sphere mapping theorem and quasiconformal composition/inverse supplier were read. This elementary deformation lemma does not establish simultaneous uniformization, geometric finiteness, a skinning-map fixed point, or hyperbolization. Those remain separate authoring obligations in the generic hyperbolization chain.
