---
id: prop-tits-cone-basic-artin-tits-normalisers
kind: proposition
title: Basic Tits-cone properties
status: published
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-arrangement-artin-tits-normalisers
  - prop-tits-domain-interface-artin-tits-prerequisites
dependency_roles:
  def-coxeter-arrangement-artin-tits-normalisers: mathematical-premise
  prop-tits-domain-interface-artin-tits-prerequisites: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 5, 7, 8; §2.2; §3.1; opening of Lemma 3.5 argument
      statement: The Tits cone is a $W$-invariant convex cone, $\overline C$ is a
        fundamental domain, and $(\mathrm{Cone}^{\circ},\mathcal H)$ is locally
        finite. Moreover $W$ is finite if and only if $\mathrm{Cone}=\Theta$.
      hypotheses: The hypotheses in the extracted statement; standing Coxeter-system
        notation of §§2–3. Spherical type is imposed only where explicitly
        stated.
      reading_limits: Frozen article text and rendered pages inspected for inventory
        only. This citation attributes the article claim; it is not an
        independent prerequisite or proof. No cited bibliography entry has been
        independently read in this task.
dependency_level: 3
---

## Statement

Let $(W,S)$ be a Coxeter system with $S$ finite, with the canonical real reflection representation, its dual space $\Theta$, the contragredient $W$-action, the closed fundamental chamber $\overline C$, the Tits cone $\mathrm{Cone}=\bigcup_{w\in W}w\overline C$, and the set $\mathcal H$ of distinct root hyperplanes as in [[def-coxeter-arrangement-artin-tits-normalisers]]. Use the finite-dimensional topology specified there.

The Tits cone is a $W$-invariant convex cone. The chamber $\overline C$ is a fundamental domain in the sense that every $W$-orbit in $\mathrm{Cone}$ meets it in exactly one point. The arrangement $(\mathrm{Cone}^{\circ},\mathcal H)$ is locally finite: every point of $\mathrm{Cone}^{\circ}$ has a neighbourhood in $\Theta$ meeting only finitely many members of $\mathcal H$. Finally, $W$ is finite if and only if $\mathrm{Cone}=\Theta$.

## Statement references

[[def-coxeter-arrangement-artin-tits-normalisers]]

[[prop-tits-domain-interface-artin-tits-prerequisites]]

## Facts & Assumptions

[F1] The contragredient maps form a $W$-action and $\mathrm{Cone}=\bigcup_{w\in W}w\overline C$. The hyperplanes in $\mathcal H$ are the distinct root hyperplanes. [[def-coxeter-arrangement-artin-tits-normalisers]]

[F2] For this finite-rank representation, the union $U=\bigcup_{w\in W}w\overline C$ is a convex cone, every orbit in $U$ meets $\overline C$ exactly once, the distinct root hyperplanes are locally finite on $U^\circ$, and $U=\Theta$ exactly when $W$ is finite. [[prop-tits-domain-interface-artin-tits-prerequisites]]

## Proof
**Given:** The finite-rank Coxeter system and the geometric notation in the Statement.


**Proof technique:** direct.

**Goal:** Prove the four assertions about the Tits cone, its fundamental domain, local finiteness and finiteness of $W$.

1.1 By [F1], for any $g\in W$ the action law gives $g\mathrm{Cone}=\bigcup_{w\in W}gw\overline C=\bigcup_{v\in W}v\overline C=\mathrm{Cone}$, since multiplication by $g$ permutes $W$. By [F2], the same union is a convex cone and every orbit in it meets $\overline C$ exactly once. This proves invariance, convexity and the stated fundamental-domain property. [F1, F2, given]

2.1 The definitions in [F1] identify $\mathrm{Cone}$ with the set $U$ in [F2] and $\mathcal H$ with its distinct root hyperplanes. Thus the local-finiteness assertion in [F2] gives the stated neighbourhood condition on $\mathrm{Cone}^{\circ}$, and its final assertion gives $W$ finite if and only if $\mathrm{Cone}=\Theta$. Together with 1.1 this proves the proposition. [F1, F2, step 1.1] ∎
