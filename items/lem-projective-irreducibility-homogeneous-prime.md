---
id: lem-projective-irreducibility-homogeneous-prime
kind: lemma
title: "projective irreducibility homogeneous prime"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-algebraic-set, def-homogeneous-polynomial-and-homogeneous-ideal, cor-strong-nullstellensatz-two-inclusions, thm-root-bound-for-polynomials-over-a-domain, def-axiom-of-choice]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: pass
---

## Statement

Work over an algebraically closed field $k$. For a projective algebraic set
$X\subseteq\mathbf P_k^n$, let $I_+(X)$ be the homogeneous ideal whose
degree-$d$ elements are the degree-$d$ forms vanishing on $X$.
A nonempty projective algebraic set $X$ is irreducible if and only if
$I_+(X)$ is prime. Assuming the Axiom of Choice, the homogeneous radical
ideals $J$ with $V_+(J)\ne\varnothing$ are exactly the ideals $I_+(X)$ of
nonempty projective algebraic sets.

## Facts & Assumptions

**Given:** A nonempty projective algebraic set $X$ over algebraically closed $k$; AC is additionally assumed for the radical-ideal correspondence.

[F1] Under AC, the affine strong Nullstellensatz gives $I(V(J))=\sqrt J$ for every polynomial ideal $J$ ([[cor-strong-nullstellensatz-two-inclusions]]).

[F2] [[thm-root-bound-for-polynomials-over-a-domain]]: a nonzero polynomial of degree $N$ over an integral domain has at most $N$ distinct roots.

## Proof

1.1 Let $C$ consist of zero and all nonzero representatives of points of $X$. Every homogeneous polynomial vanishing on $X$ vanishes on $C$. Conversely, write a polynomial vanishing on $C$ as $P=\sum_dP_d$ with each $P_d$ homogeneous. For a representative $a$ of a point of $X$ and every $\lambda\in k$, one has $0=P(\lambda a)=\sum_d\lambda^dP_d(a)$. The field $k$ is infinite: if it were finite, the nonconstant polynomial $\prod_{b\in k}(T-b)+1$ would take the value $1$ at every element of $k$, contradicting algebraic closedness. The polynomial $\sum_dT^dP_d(a)$ therefore has infinitely many roots; by [F2] it is zero, so each coefficient $P_d(a)$ is zero. Thus all homogeneous components of $P$ lie in $I_+(X)$, and $I(C)=I_+(X)$. [given, F2, algebra]

1.2 Suppose $X$ is irreducible and homogeneous $F,G$ satisfy $FG\in I_+(X)$. Then $X\subseteq V_+(F)\cup V_+(G)$, so irreducibility gives $F\in I_+(X)$ or $G\in I_+(X)$. A homogeneous ideal is prime exactly when this test holds for homogeneous elements: in the graded quotient, the product of two nonzero elements has nonzero component at the sum of their lowest nonzero degrees. Here the ideal is proper since $X$ is nonempty. Thus $I_+(X)$ is prime. [given, algebra]

1.3 Conversely, suppose $I_+(X)$ is prime and $X=Y\cup Z$ with $Y,Z$ projective algebraic subsets of $X$. If both are proper, choose $p\in X\setminus Y$ and $q\in X\setminus Z$. Homogeneous defining equations give $F\in I_+(Y)$ with $F(p)\ne0$ and $G\in I_+(Z)$ with $G(q)\ne0$. Then $FG$ vanishes on $X$, contrary to primality of $I_+(X)$. Hence $X=Y$ or $X=Z$, so $X$ is irreducible. [given, algebra]

2.1 Now assume the Axiom of Choice and let $J$ be homogeneous radical with $V_+(J)\ne\varnothing$. Its affine zero locus is the cone over $V_+(J)$. The affine strong Nullstellensatz F1, the exact inherited use of AC in this proof, gives $I(V(J))=\sqrt J=J$, while step 1.1 gives $I(V(J))=I_+(V_+(J))$. Conversely, every $I_+(X)$ is homogeneous and radical by its equality with the affine vanishing ideal $I(C)$ in step 1.1: $P^r$ vanishing on $C$ forces $P$ to vanish there. Finally $V_+(I_+(X))=X$, since homogeneous defining equations for $X$ belong to $I_+(X)$. This is the stated radical-ideal correspondence. [F1, step 1.1, algebra] ∎
