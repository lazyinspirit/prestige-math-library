---
id: lem-projective-determinant-is-homogeneous-and-scale-invariant
kind: lemma
title: "The pencil determinant is homogeneous and its zero condition is scale invariant"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-regular-generalized-eigenvalue-pencil
  - thm-leibniz-determinant-is-alternating-multilinear-and-normalized
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §12.9"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "LAPACK Users' Guide, Generalized Nonsymmetric Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node35.html"
---

## Statement

For $A,B\in\mathbb F^{n\times n}$, $n\ge1$, let
$p(\alpha,\beta)=\det(\beta A-\alpha B)$. For every $c\in\mathbb C$,
$$p(c\alpha,c\beta)=c^n p(\alpha,\beta).$$
Consequently the zero condition is independent of the nonzero representative
of a homogeneous pair. If $\beta\ne0$, then
$$p(\alpha,\beta)=\beta^n\det(A-(\alpha/\beta)B).$$

## Facts & Assumptions

**Given:** $n\ge1$, $A,B\in\mathbb F^{n\times n}$, and
$(\alpha,\beta)\in\mathbb C^2$.

[F1] [[def-regular-generalized-eigenvalue-pencil]]: $p(\alpha,\beta)$ is
$\det(\beta A-\alpha B)$, and homogeneous pairs are identified by nonzero
complex scaling.

[F2] [[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]:
the determinant is multilinear in each column.

## Proof

1.1 Scaling $(\alpha,\beta)$ by $c$ scales every column of $\beta A-\alpha B$ by $c$. Applying [F2] to its $n$ columns gives $\det(c(\beta A-\alpha B))=c^n\det(\beta A-\alpha B)$, which is the first identity by [F1]. [given, F1, F2, algebra]

2.1 If $c\ne0$, then $c^n\ne0$, so $p(c\alpha,c\beta)=0$ exactly when $p(\alpha,\beta)=0$. If $\beta\ne0$, factor $\beta A-\alpha B=\beta(A-(\alpha/\beta)B)$ and apply the same column multilinearity to obtain the finite-eigenvalue identity. [step 1.1, F1, F2, algebra] ∎
