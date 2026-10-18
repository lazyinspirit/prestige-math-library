---
id: thm-gl-1-1-is-a-lie-superalgebra
kind: theorem
title: The gl(1|1) bracket data define a Lie superalgebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-gl-1-1-bracket-data
  - def-lie-superalgebra-over-complex-numbers
  - def-triangular-decomposition-of-a-lie-superalgebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, §§2.2 and 2.3.1"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed pp. 12–14 and 18–20: graded matrix Lie-superalgebra bracket and gl(m|n) example."
    - title: "Victor Kac, Classification of Supersymmetries, §2"
      url: https://arxiv.org/pdf/math-ph/0302016
      locator: "ICM 2002 survey, §2: finite-dimensional classical Lie-superalgebra conventions."
---

## Statement

The graded vector space and bracket of [[def-gl-1-1-bracket-data]] satisfy the complex Lie-superalgebra axioms. With $\mathfrak h=\mathbb C h_1\oplus\mathbb C h_2$, $\mathfrak n^+=\mathbb C e$, and $\mathfrak n^-=\mathbb C f$, they also give the triangular decomposition required by [[def-triangular-decomposition-of-a-lie-superalgebra]]. We denote this Lie superalgebra by $\mathfrak{gl}(1|1)$.

## Facts & Assumptions

**Given:** The bracket data of [[def-gl-1-1-bracket-data]].

[F1] [[def-gl-1-1-bracket-data]]: $h_1,h_2$ are even, $e,f$ odd, the even basis elements commute, $[e,e]=[f,f]=0$, $[e,f]=h_1+h_2$, and $[h_i,e],[h_i,f]$ are given by the displayed table.

[F2] [[def-lie-superalgebra-over-complex-numbers]]: a Lie superalgebra bracket must be graded, graded-skew, and satisfy signed Jacobi and the separately listed odd self-Jacobi identity; over $\mathbb C$, the latter follows from signed Jacobi.

[F3] [[def-triangular-decomposition-of-a-lie-superalgebra]]: the triangular subalgebras must be graded, $\mathfrak h$ even abelian, their direct sum must be the full graded vector space, and $\mathfrak h\oplus\mathfrak n^+$ must be a subalgebra.

## Proof




1.1 The bracket table is homogeneous: even–even brackets lie in the even part, even–odd brackets in the odd part, and odd–odd brackets in the even part. Its odd–odd entries are symmetric and its even–odd reverse entries are their negatives, so it satisfies graded skew symmetry in [F2]. [given, F1, F2, algebra]

1.2 For homogeneous $x,y,z$, put $J(x,y,z)=(-1)^{|x||z|}[x,[y,z]]+(-1)^{|y||x|}[y,[z,x]]+(-1)^{|z||y|}[z,[x,y]]$. Graded skew symmetry gives $J(x,y,z)=(-1)^{|x||z|}\bigl([x,[y,z]]-\left\lbrack[x,y],z\right\rbrack-(-1)^{|x||y|}[y,[x,z]]\bigr)$ and $J(y,x,z)=-(-1)^{|x||y|+|y||z|+|z||x|}J(x,y,z)$; cyclic rotation preserves $J$ by its formula. Hence the derivation Jacobi identity is equivalent to $J=0$, and it suffices to check representative basis triples up to permutation. For representatives $(h_i,h_j,x)$ with $x=e$ or $f$, the commuting diagonal actions of $h_1,h_2$ have weights $(1,-1)$ and $(-1,1)$, so $[h_i,[h_j,x]]=[h_j,[h_i,x]]$. All-even brackets vanish, so all-even triples also satisfy Jacobi. [F1, F2, algebra]

2.1 Put $c=h_1+h_2$. By [F1], $[h_i,c]=[e,c]=[f,c]=0$. For a triple $(h_i,e,f)$, the Jacobi identity reduces to $[h_i,c]=\left\lbrack [h_i,e],f\right\rbrack+[e,[h_i,f]]$; the two terms on the right are opposite multiples of $c$, so their sum is zero. For $(h_i,e,e)$ or $(h_i,f,f)$, every term vanishes because $[e,e]=[f,f]=0$. This checks all basis triples with one even and two odd entries. [F1, F2, step 1.2, algebra]

3.1 For three odd basis entries, each inner bracket is either zero or $c$, and every outer bracket of $c$ with $e$ or $f$ is zero by step 2.1. Hence every nested-bracket term vanishes. Together with the representative even and mixed checks from step 1.2 and step 2.1, permutation reduction and multilinearity give signed Jacobi for all homogeneous triples. [F1, step 1.2, step 2.1, algebra]

4.1 For any odd $x$, put $A=[x,[x,x]]$. Applying the signed Jacobi identity from [F2] to $(x,x,x)$ gives $A=[ [x,x],x]-A$, while graded skew symmetry and the even parity of $[x,x]$ give $[ [x,x],x]=-A$. Hence $3A=0$, and $A=0$ because $\mathbb C$ has characteristic zero. This proves the additional odd self-Jacobi clause, so the bracket satisfies the full complex Lie-superalgebra axioms. [F2, step 3.1, algebra]

5.1 The subspaces $\mathfrak h,\mathfrak n^+,\mathfrak n^-$ are graded subalgebras: $\mathfrak h$ is abelian, and $[e,e]=[f,f]=0$. Their direct sum is $E$. The table gives $[h_i,e]\in\mathbb C e$, so $\mathfrak h\oplus\mathfrak n^+$ is a subalgebra as well. These are precisely the conditions in [F3]. [F1, F3, step 4.1, algebra] ∎

