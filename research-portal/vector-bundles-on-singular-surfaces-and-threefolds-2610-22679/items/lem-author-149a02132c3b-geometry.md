---
id: lem-author-149a02132c3b-geometry
kind: lemma
title: The actual smooth open pair and its choice scope
status: draft
domain: mathematics
deps:
  - def-article-conventions
  - def-cohomology-with-support
  - def-nisnevich-covering-interface
  - math:def-axiom-of-choice
dependency_roles:
  def-article-conventions: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 14
---

## Statement
Assume AC. Let $X$ be an affine finite-type threefold over algebraically closed $k$, let $U=X_{\mathrm{smooth}}$, and let $T\subset X$ be closed with $T\subset U$. Put $V=U\setminus T$ and $W=X\setminus T$. All four schemes are qcqs and $U,V$ are smooth separated finite type over the perfect field $k$. They are regular Noetherian as schemes over the prime field. The two opens $U,W$ cover $X$ and their intersection is $V$, giving a Nisnevich two-open covering square. If $T$ is an integral curve, it is affine; it lies in one of the open-and-closed relative-dimension strata of $U$.

## Facts & Assumptions
**Given:** The hypotheses in the statement, with the Axiom of Choice and fixed universe bounds.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] [[def-article-conventions]], [[def-cohomology-with-support]] and [[def-nisnevich-covering-interface]] fix the finite-type, size, AC and two-open conventions. Basic smoothness here includes its regularity over a perfect field and locally constant relative dimension.

## Proof
1.1 Finite-type affine $X/k$ is Noetherian and separated. Every open is quasi-compact in a Noetherian space, and its induced scheme is separated finite type. Thus the four objects lie in the completed qcqs category. The smooth locus and its open $V$ are smooth over $k$, hence regular Noetherian. An algebraically closed field is perfect: in positive characteristic each polynomial $t^p-a$ has a root, so Frobenius is surjective; characteristic zero is perfect. Forgetting the map to $k$ does not change regularity or Noetherianness. [F1]

2.1 The inclusion $T\subset U$ gives $X=U\cup W$ and $U\cap W=V$. Open immersions are étale, and each point has a residue-preserving lift to one of these opens, so the family is Nisnevich. A closed subscheme of affine $X$ is affine, giving the curve assertion. For a smooth morphism to a field the relative dimension is locally constant; the finitely many dimension strata of $U$ are open and closed. The connected integral curve lies in one such stratum. These are component/dimension bookkeeping facts, with no new comparison theorem assumed. [F1, step 1.1] ∎
