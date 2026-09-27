---
id: "lem-dominant-affine-image-contains-principal-open"
kind: "lemma"
title: "Dominant affine images contain a principal open"
deps: ["lem-dominant-affine-map-normalization-over-open", "thm-lying-over", "def-classical-affine-coordinate-ring", "def-axiom-of-choice"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (lem-dominant-affine-image-contains-principal-open). No independent judge or whole-closure certification.
    delegated_by: owner
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

[F3] Elements of the coordinate ring of a classical affine variety are polynomial functions on its points ([[def-classical-affine-coordinate-ring]]).

[A1] The lying-over theorem is invoked under the stated Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

1.1 Use normalization over an open to obtain $0\ne a\in A=k[Y]$ with $B_a=k[X]_a$ finite over the injected polynomial algebra $R=A_a[t_1,\ldots,t_r]$. The open $D_Y(a)$ is nonempty: by [F3], $a$ is a nonzero polynomial function on $Y$, so it is nonzero at some point. [F1, F3]

2.1 Fix $y\in D_Y(a)$ and the maximal ideal $\mathfrak n=(\mathfrak m_y,t_1,\ldots,t_r)\subset R$, whose quotient is $k$. By [A1] and [F2], lying over gives a prime $\mathfrak q\subset B_a$ contracting to $\mathfrak n$. The domain $B_a/\mathfrak q$ is finite over $k$. Every nonzero element acts injectively on this finite-dimensional vector space, hence surjectively, so the domain is a field. Algebraic closedness forces it to be $k$. The resulting $k$-algebra homomorphism $B\to B_a\to B_a/\mathfrak q=k$ evaluates the finitely many affine-coordinate classes at elements of $k$. All defining polynomials of $X$ vanish at this tuple because their classes are zero in $B$; the restrictions of $A=k[Y]$ evaluate at $y$ because $\mathfrak q\cap R=\mathfrak n$. Hence this tuple is a classical point $x\in X$ with $f(x)=y$. Thus $D_Y(a)$ lies in the image, including when $r=0$. [A1, F2, F3, step 1.1] ∎
