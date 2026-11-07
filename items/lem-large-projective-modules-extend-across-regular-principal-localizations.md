---
id: lem-large-projective-modules-extend-across-regular-principal-localizations
kind: lemma
title: "Large projectives extend across regular principal localizations over infinite fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-algebraic-k0-and-k1-of-a-ring
  - lem-regular-finite-dimensional-ring-k0-surjects-to-principal-localization
  - lem-large-projectives-split-and-cancel-over-infinite-field-algebras
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the regular K0 and projective cancellation suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Raymond T. Hoobler, A cohomological interpretation of Brauer groups of rings"
      url: "https://msp.org/pjm/1980/86-1/pjm-v86-n1-p05-s.pdf"
      locator: "p. 89, high-rank projective extension used in affine Brauer patching; the infinite-field assembly is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $k$ be an infinite field, let $A$ be a regular integral finite-type $k$-algebra of dimension $d$, and let $0\ne g\in A$. If $P$ is a finite projective $A_g$-module of constant rank $r>d$, then there is a finite projective $A$-module $Q$ of rank $r$ with $Q_g\cong P$.

## Facts & Assumptions

**Given:** The infinite field, regular integral finite-type algebra, nonzero element and large projective module in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] $K_0$ is the group completion of finite projective modules under direct sum. [[def-algebraic-k0-and-k1-of-a-ring]]

[F2] For a finite-dimensional regular Noetherian ring, $K_0$ surjects to $K_0$ of every principal localization. [[lem-regular-finite-dimensional-ring-k0-surjects-to-principal-localization]]

[F3] Over a finite-type algebra over an infinite field, projectives of constant rank greater than the dimension split a free line and cancel stable free summands; equal $K_0$ classes of such projectives are isomorphic. [[lem-large-projectives-split-and-cancel-over-infinite-field-algebras]]

## Proof

**Proof technique:** lift the $K_0$ class, remove surplus free summands, and cancel after localization.

1.1 By [F2] choose $x\in K_0(A)$ mapping to $[P]$. By [F1], write $x=[E]-[F]$ with $E,F$ finite projective. A finite projective complement $F'$ with $F\oplus F'\cong A^N$ gives $x=[E\oplus F']-[A^N]$. Put $Q_0=E\oplus F'$. Since $A$ is an integral domain and $g\ne0$, the generic point belongs to $\operatorname{Spec}A_g$, and the rank of $x$ is $r$. Hence $Q_0$ has constant rank $r+N$ on the connected spectrum. [A1, F1, F2, given, choose, construct, algebra]

2.1 If $N>0$, repeatedly apply the free-line splitting in [F3] to $Q_0$. Before each of the $N$ splittings its rank is at least $r+1>d$, so the hypotheses remain valid. This produces $Q_0\cong Q\oplus A^N$ with $Q$ finite projective of constant rank $r$. Therefore $[Q]=x$ in $K_0(A)$. The case $N=0$ is immediate. [F1, F3, step 1.1, construct, algebra]

3.1 Localization gives $[Q_g]=[P]$ in $K_0(A_g)$. Both modules have rank $r>d\ge\dim A_g$, and $A_g$ remains a finite-type algebra over the infinite field $k$. The equal-class cancellation conclusion of [F3] therefore gives $Q_g\cong P$. The unit case $g=1$ and rank-one case when $d=0$ are included. [F3, step 1.1, step 2.1, algebra] ∎
