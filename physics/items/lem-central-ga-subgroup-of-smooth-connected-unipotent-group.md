---
id: lem-central-ga-subgroup-of-smooth-connected-unipotent-group
kind: lemma
title: "A nontrivial smooth connected unipotent group with split torus action over a perfect field has a stable central G_a"
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-group-of-multiplicative-type-and-torus
  - lem-smooth-finite-type-schemes-have-schematically-dense-rational-points
  - def-subgroup-commutator-and-lower-central-series
  - def-trigonalizable-algebraic-group
  - lem-smooth-trigonalizable-group-normal-series-refinement
  - thm-unipotent-groups-have-central-series-with-subgroups-of-ga-quotients
  - def-unipotent-algebraic-group
  - lem-unipotent-and-diagonalizable-intersection-is-trivial
  - thm-trigonalizable-group-has-normal-series-with-vector-quotients
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Corollary 16.23, printed p. 331
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Section 5.3, Lemma 128, p. 53
---
## Statement

Assume the Axiom of Choice inherited from the cited smoothness, quotient and reduction suppliers ([[def-axiom-of-choice]]).

Let $k$ be a perfect field, let $U$ be a smooth connected unipotent algebraic group over $k$ ([[def-trigonalizable-algebraic-group]]), and let $T$ be a split torus acting on $U$ by group automorphisms ([[def-group-of-multiplicative-type-and-torus]]). If $U\ne1$, there is a closed subgroup $N\subseteq U$ that is central in $U$, stable under $T$, and isomorphic to $\mathbf G_a$.

## Facts & Assumptions
**Given:** AC, a perfect field $k$, a smooth connected unipotent $k$-group $U\ne1$, and a split torus $T$ acting on $U$ by group automorphisms.

[F1] The semidirect product $H=U\rtimes T$ is a smooth connected trigonalizable affine group with largest normal unipotent subgroup $H_u=U$: the quotient $H/U\cong T$ is a torus, and a normal unipotent closed subgroup of $H$ maps into this torus, where it is trivial because a closed subgroup that is both unipotent and diagonalizable is trivial. ([[def-trigonalizable-algebraic-group]], [[def-group-of-multiplicative-type-and-torus]], [[lem-unipotent-and-diagonalizable-intersection-is-trivial]])

[F2] Assume AC. The smooth connected trigonalizable group $H$ has a normal series $H\supseteq H_0=U\supseteq H_1\supseteq\dots\supseteq H_r=1$ in which every term $H_i$ with $i\ge0$ is smooth, connected and normal in $H$, and every successive quotient $H_i/H_{i+1}$ is isomorphic to $\mathbf G_a$; the series refines the $H/H_u$-equivariant series with quotients embedded in $\mathbf G_a$. ([[lem-smooth-trigonalizable-group-normal-series-refinement]], [[thm-trigonalizable-group-has-normal-series-with-vector-quotients]])

[F3] An automorphism of $\mathbf G_a$ over a field is linear: an automorphism of the polynomial algebra has degree one, and preserving zero removes its constant term. For a smooth affine acting group $H$, apply this fact only to its points over an algebraic closure. Smooth schemes have schematically dense rational points there, so coefficients vanishing at those points vanish in $O(H_{\bar k})$ and hence in $O(H)$. This proves linearity of an $H$-action on $\mathbf G_a$ below; it does not identify the full automorphism functor with $\mathbf G_m$. ([[lem-smooth-finite-type-schemes-have-schematically-dense-rational-points]])

[F4] Every nonzero rational representation of the unipotent group $U$ has a nonzero fixed vector; a vector fixed by $U$ in a representation that factors through a quotient of $U$ is fixed by that quotient; and the kernel of the standard action of $\mathbf G_m$ on $\mathbf A^1$ is trivial. ([[def-unipotent-algebraic-group]])

[A1] The Axiom of Choice is inherited through the cited suppliers and is the axiom of [[def-axiom-of-choice]].

## Proof

**Given:** AC, a perfect field $k$, a smooth connected unipotent $k$-group $U\ne1$, and a split torus $T$ acting on $U$ by group automorphisms.

1.1 Form $H=U\rtimes T$, which is smooth connected trigonalizable with $H_u=U$ by [F1]; by [F2] fix a normal series $H\supseteq H_0=U\supseteq H_1\supseteq\dots\supseteq H_r=1$ with each $H_i$ ($i\ge0$) smooth, connected and normal in $H$ and each quotient $H_i/H_{i+1}\cong\mathbf G_a$. Since $U\ne1$ the series is nontrivial; let $N=H_{r-1}$ be its last nontrivial term. Then $N\subseteq U$, and $N$ is smooth, connected and normal in $H$, hence stable under the conjugation action of $T$; since $H_r=1$, the last quotient is $N=N/H_r\cong\mathbf G_a$. [F1, F2]

2.1 Identify $N$ with $\mathbf G_a$ and write the conjugation coaction as $x\mapsto\sum_{j\ge0}a_j\otimes x^j$, with $a_j\in O(H)$. The constant coefficient is zero because the action fixes the identity. Over an algebraic closure, evaluation at every $h\in H(\bar k)$ is a field-valued automorphism of $\mathbf G_a$, so $a_j(h)=0$ for $j>1$. The smooth reduced group $H_{\bar k}$ has schematically dense rational points by [F3], hence every $a_j$ for $j>1$ is zero. Inversion in $H$ supplies an inverse for $a_1$, and the action law gives $\Delta(a_1)=a_1\otimes a_1$, so this coaction is scalar multiplication through a character $H\to\mathbf G_m$. Restricting it to $U$ gives a one-dimensional rational representation. By [F4] it has a nonzero invariant vector, so the entire line is invariant and the character of $U$ is trivial as a group-scheme morphism. Thus conjugation $U\times N\to N$ is trivial and $N$ is central in $U$. [F3, F4, step 1.1, algebra]

3.1 Collecting: $N\subseteq U$ is a closed subgroup isomorphic to $\mathbf G_a$, central in $U$ by [step 2.1] and stable under $T$ by [step 1.1], which is the required subgroup. [A1, step 1.1, step 2.1] ∎ 