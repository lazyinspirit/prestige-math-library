---
id: thm-rpm-h-homogeneous-legendre-degeneracy
kind: theorem
title: "Positive homogeneity forces Legendre degeneracy"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-almost-regular-legendre, def-fibre-derivative-and-legendre-transform-of-a-lagrangian]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-h-almost-regular-legendre: mathematical-premise
  def-fibre-derivative-and-legendre-transform-of-a-lagrangian: mathematical-premise
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete lecture notes (arXiv:gr-qc/9712019v1)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Complete 238-page notes; Chapter 1, printed pp. 25–27, and Chapter 3, printed pp. 68–72; full relevant sections inspected."
    - title: "Henneaux, Teitelboim and Regge, Constrained Hamiltonian Systems, Part 1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Chapter I, pp. 7–11: singular Lagrangians and primary constraints."
physical_scope: "Pure conditional result for smooth positively homogeneous Lagrangians; it does not assert every singular system is almost regular."
---

## Statement

Let $L(q,v)$ be $C^2$ on a conic open subset of a tangent bundle, and suppose $L(q,av)=aL(q,v)$ for every $a>0$ in its domain. At each nonzero $v$,

$$v^iL_{v^i}=L,\qquad L_{v^iv^j}v^i=0,\qquad E_L:=v^iL_{v^i}-L=0.$$

Consequently the velocity Hessian is singular and the fibre derivative cannot be a local diffeomorphism there; a regular Legendre equivalence theorem cannot be applied. These conclusions do not imply that the motion is static or that the Lagrangian has a specified constraint surface.

## Facts & Assumptions

**Given:** A twice continuously differentiable Lagrangian on a positive-ray conic velocity domain, positively homogeneous of degree one.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-fibre-derivative-and-legendre-transform-of-a-lagrangian]]: the fibre derivative has components $p_i=L_{v^i}$, and its velocity derivative is the fibre Hessian.

[F2] [[def-rpm-h-almost-regular-legendre]]: regular inversion requires a locally invertible fibre derivative; almost-regularity is a separate package of image, rank, submersion and fibre hypotheses.

## Proof

1.1 Differentiate $L(q,av)=aL(q,v)$ with respect to $a$ at $a=1$. The chain rule gives $v^iL_{v^i}=L$. [given, A1, calculus]

1.2 Differentiate the identity in step 1.1 with respect to $v^j$. The product rule gives $L_{v^j}+v^iL_{v^iv^j}=L_{v^j}$, hence $L_{v^iv^j}v^i=0$. For nonzero $v$ this is a nonzero kernel vector, so the Hessian is singular and the derivative of the fibre map in [F1] is not invertible. [given, F1, step 1.1, calculus]

2.1 The definition $E_L=v^iL_{v^i}-L$ and step 1.1 give $E_L=0$. The inverse function theorem's necessary invertibility condition fails by step 1.2, so regular Legendre inversion is unavailable; [F2] also makes clear that stronger almost-regular hypotheses do not follow from this degeneracy. [given, F2, step 1.1, step 1.2] ∎
