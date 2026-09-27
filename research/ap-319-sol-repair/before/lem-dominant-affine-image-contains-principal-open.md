---
id: "lem-dominant-affine-image-contains-principal-open"
kind: "lemma"
title: "Dominant affine images contain a principal open"
deps: ["lem-dominant-affine-map-normalization-over-open", "thm-lying-over", "thm-affine-nullstellensatz-correspondence"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne Theorem 9.1, p.198"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: "Vakil Theorem 12.4.1 proof, pp.354–356"
      url: https://math.stanford.edu/~vakil/216blog/FOAGjul2724public.pdf
status: published
origin: "pipeline"
proof_strategy: "Above y in D(a), choose a maximal ideal (m_y,t_1,...,t_r) of the polynomial subalgebra. Lying over gives a prime upstairs; the integral residue domain over k is a field equal to k. Thus it represents a classical point over y."
---

## Statement

The image of a dominant morphism $f:X\to Y$ between irreducible affine varieties contains a nonempty principal open subset of $Y$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Let $f:X\to Y$ be dominant between irreducible affine varieties, put $A=k[Y]\subseteq B=k[X]$, and let $r=\operatorname{trdeg}_{k(Y)}k(X)$. There are $0\ne a\in A$ and elements $t_1,\ldots,t_r\in B_a$, algebraically independent over $A_a$, such that $B_a$ is module-finite over $A_a[t_1,\ldots,t_r]$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dominant-affine-map-normalization-over-open]]).

[F2] Assume the Axiom of Choice. Let $f:A\to B$ be an integral ring map, and let $\mathfrak p\in\operatorname{Spec}(A)$ with $\ker f\subseteq\mathfrak p$. Then there exists a prime ideal $\mathfrak q\in\operatorname{Spec}(B)$ such that $f^{-1}(\mathfrak q)=\mathfrak p$. ([[thm-lying-over]]).

[F3] Assume the Axiom of Choice. Let $k$ be an algebraically closed field. 1. The assignments $$ X\longmapsto I(X),\qquad J\longmapsto V(J) $$ induce mutually inverse inclusion-reversing correspondences between affine algebraic sets $X\subseteq \mathbf A_k^n$ and radical ideals $J\subseteq k[x_1,\ldots,x_n]$. 2. Under this correspondence, nonempty irreducible affine algebraic sets correspond exactly to prime ideals. ([[thm-affine-nullstellensatz-correspondence]]).

## Proof

1.1 Use normalization over an open to obtain $0\ne a\in A=k[Y]$ with $B_a=k[X]_a$ finite over the injected polynomial algebra $R=A_a[t_1,\ldots,t_r]$. The open $D_Y(a)$ is nonempty: if $a$ vanished at every point it would be zero in the reduced coordinate ring by the Nullstellensatz. [F1, F3]

2.1 Fix $y\in D_Y(a)$ and the maximal ideal $\mathfrak n=(\mathfrak m_y,t_1,\ldots,t_r)\subset R$, whose quotient is $k$. Lying over gives a prime $\mathfrak q\subset B_a$ contracting to $\mathfrak n$. The domain $B_a/\mathfrak q$ is finite over $k$. Every nonzero element acts injectively on this finite-dimensional vector space, hence surjectively, so the domain is a field. Algebraic closedness forces it to be $k$. Images of the affine coordinates therefore give a classical point of $X$ lying over $y$, with $a$ nonzero. Thus every such $y$ lies in the image, including when $r=0$. [F2, step 1.1] ∎
