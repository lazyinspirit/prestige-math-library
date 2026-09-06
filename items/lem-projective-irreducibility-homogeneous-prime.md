---
id: lem-projective-irreducibility-homogeneous-prime
kind: lemma
title: "projective irreducibility homogeneous prime"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-variety-classical, def-homogeneous-polynomial-and-homogeneous-ideal, thm-affine-nullstellensatz-correspondence]
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
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

A nonempty projective algebraic set $X$ is irreducible if and only if
$I_+(X)$ is prime. Assuming the Axiom of Choice, the homogeneous radical
ideals $J$ with $V_+(J)\ne\varnothing$ are exactly the ideals $I_+(X)$ of
nonempty projective algebraic sets.

## Proof

**Given:** A nonempty projective algebraic set $X$ and its affine cone $C$.

1.1 Every homogeneous polynomial vanishing on $X$ vanishes on $C$. Conversely, [given, algebra]
write a polynomial vanishing on $C$ as $P=\sum_dP_d$ with each $P_d$
homogeneous. For a representative $a$ of a point of $X$ and every
$\lambda\in k$, one has $0=P(\lambda a)=\sum_d\lambda^dP_d(a)$. Since the
algebraically closed field $k$ is infinite, each $P_d(a)$ is zero. Thus all
homogeneous components of $P$ lie in $I_+(X)$, and $I(C)=I_+(X)$. [given,
algebra]

1.2 Suppose $X$ is irreducible and homogeneous $F,G$ satisfy [given, algebra]
$FG\in I_+(X)$. Then $X\subseteq V_+(F)\cup V_+(G)$, so irreducibility gives
$F\in I_+(X)$ or $G\in I_+(X)$. A homogeneous ideal is prime exactly when
this test holds for homogeneous elements, so $I_+(X)$ is prime. [given,
algebra]

1.3 Conversely, suppose $I_+(X)$ is prime and $X=Y\cup Z$ with $Y,Z$ [given, algebra]
projective algebraic subsets of $X$. If both are proper, choose
$p\in X\setminus Y$ and $q\in X\setminus Z$. Homogeneous defining equations
give $F\in I_+(Y)$ with $F(p)\ne0$ and $G\in I_+(Z)$ with $G(q)\ne0$.
Then $FG$ vanishes on $X$, contrary to primality of $I_+(X)$. Hence
$X=Y$ or $X=Z$, so $X$ is irreducible. [given, algebra]

2.1 Now assume the Axiom of Choice and let $J$ be homogeneous radical with [step 1.1, algebra]
$V_+(J)\ne\varnothing$. Its affine zero locus is the cone over $V_+(J)$.
The affine Nullstellensatz gives $I(V(J))=\sqrt J=J$, while step 1.1 gives
$I(V(J))=I_+(V_+(J))$. Conversely, every $I_+(X)$ is homogeneous and
radical, because $F^r$ vanishing on $X$ forces $F$ to vanish there. This is
the stated radical-ideal correspondence. [step 1.1, algebra] ∎
