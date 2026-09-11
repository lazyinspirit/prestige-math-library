---
id: lem-a-bundle-connection-is-local-and-restricts-to-open-sets
kind: lemma
title: A bundle connection is local and restricts to open sets
status: published
origin: pipeline
deps: [prop-connection-laws-in-directional-form, def-connection-on-a-smooth-vector-bundle]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Lemma 5.1.1 and Corollary 5.1.2
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

For a connection on $E\to M$, if two sections agree near $p$, their covariant derivatives at $p$ agree in every tangent direction. The derivative in direction $X$ depends only on $X(p)$. For every open $U\subseteq M$, there is a unique connection on $E|_U$ agreeing with the original on restricted global sections; restrictions to nested open sets compose. Boundary points are included.

## Facts & Assumptions

**Given:** A smooth bundle $E\to M$, a connection $\nabla$, a point $p$ where relevant, and an open set $U$.

[F1] Directional connection laws hold; the converse proof also constructs plateau cutoffs in interior and boundary charts ([[prop-connection-laws-in-directional-form]]).

[F2] The connection value is a smooth fibrewise linear map $T_pM\to E_p$ ([[def-connection-on-a-smooth-vector-bundle]]).

## Proof

1.1 Suppose $s$ vanishes on a neighbourhood $W$ of $p$. Take a smooth cutoff $\chi$ supported in $W$ with $\chi(p)=1$, using the construction in the proof of [F1]. Since $\chi s=0$, the Leibniz rule at any $v\in T_pM$ gives $0=\nabla_v(\chi s)=d\chi_p(v)s(p)+\chi(p)\nabla_vs=\nabla_vs$. Apply this to the difference of two sections. The direction depends only on its value by [F2]; no assertion that $d\chi_p=0$ was needed in this vanishing argument. [F1, F2]

2.1 For a local section $s$ on $U$, take a cutoff supported in $U$ and equal to one on a neighbourhood $V$ of $p\in U$. Extend $\chi s$ by zero outside $U$ to a global smooth section $\widetilde s$: outside its closed support it is identically zero, so the definitions paste smoothly. Define $(\nabla^U s)_p=(\nabla\widetilde s)_p$. Different extensions agree near $p$, so step 1.1 proves independence. On $V$, one fixed extension works at every point, making $\nabla^U s$ smooth. Local functions can be extended by the same cutoff; the global real-linearity and Leibniz laws then imply those laws on $U$. Thus this is a connection. [F1, step 1.1, construct]

3.1 Any other restriction connection is local by step 1.1 applied on $U$, and agrees on the global extension in step 2.1; hence its value on $s$ at $p$ is forced. This proves uniqueness and, by applying uniqueness twice, composition of restrictions. The empty open set has a unique zero operator. Zero sections and rank-zero bundles give zero derivatives in steps 1.1 and 2.1; rank one and a zero-dimensional base require no modification. A single point is handled with a single cutoff, and the uniquely specified values assemble without a choice of cutoffs for all points. [step 1.1, step 2.1] ∎
