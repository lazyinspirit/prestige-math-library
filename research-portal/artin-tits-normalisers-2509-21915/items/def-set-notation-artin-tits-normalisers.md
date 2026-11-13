---
id: def-set-notation-artin-tits-normalisers
kind: definition
title: Subset and vertex-complement notation
status: published
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - math:def-set-difference-and-symmetric-difference
  - math:def-union-of-a-set-and-binary-union
  - math:def-unordered-pair-and-singleton
  - math:def-subset-and-proper-subset
  - math:lem-unions-and-intersections-of-small-families
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  math:def-set-difference-and-symmetric-difference: mathematical-premise
  math:def-union-of-a-set-and-binary-union: mathematical-premise
  math:def-unordered-pair-and-singleton: mathematical-premise
  math:def-subset-and-proper-subset: mathematical-premise
  math:lem-unions-and-intersections-of-small-families: mathematical-premise
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 7, §3.1, opening notation
      statement: For a set X and an element a, the article writes X+a for X union the
        singleton of a and X−a for X with a removed; for I contained in the
        vertex set Γ₀, it writes Iᶜ for Γ₀ minus I.
      hypotheses: X is a set, a is an element, and I is a subset of the vertex set Γ₀
        of the Coxeter diagram.
      reading_limits: The frozen extracted article text at the opening of §3.1 was
        read for attribution. The article is not used as a proof of the
        underlying set constructions.
dependency_level: 2
---

## Definition

Let $X$ and $a$ be sets. The singleton $\{a\}$ is the set whose only element is $a$. Write $X+a=X\cup\{a\}$ and $X-a=X\setminus\{a\}$. Thus $X+a$ consists of the elements of $X$ together with $a$, while $X-a$ consists of the elements of $X$ other than $a$; no assumption that $a\in X$ is required.

Let $\Gamma_0$ be the vertex set of the Coxeter diagram $\Gamma$. For $I\subseteq\Gamma_0$, write $I^c=\Gamma_0\setminus I$ for the complement of $I$ relative to $\Gamma_0$, namely the set of vertices of $\Gamma$ that are not in $I$.

## Definition references

[[def-coxeter-data-artin-tits-normalisers]]

[[math:def-unordered-pair-and-singleton]]

[[math:def-union-of-a-set-and-binary-union]]

[[math:def-set-difference-and-symmetric-difference]]

[[math:def-subset-and-proper-subset]]

[[math:lem-unions-and-intersections-of-small-families]]

## Justification

The singleton $\{a\}$ exists and is uniquely determined by its element, by [[math:def-unordered-pair-and-singleton]]. Binary union exists for sets by [[math:def-union-of-a-set-and-binary-union]], and set difference exists for any two sets by [[math:def-set-difference-and-symmetric-difference]]. Consequently the expressions $X+a$ and $X-a$ are well-defined, including when $a\notin X$. The same difference construction defines $I^c$ as a set; since $I\subseteq\Gamma_0$ in the sense of [[math:def-subset-and-proper-subset]], it is the complement relative to the specified vertex set. The notation $\Gamma_0$ for that vertex set is supplied by [[def-coxeter-data-artin-tits-normalisers]].

Part (iii) of [[math:lem-unions-and-intersections-of-small-families]], applied to $X$ and $\{a\}$, together with the singleton membership rule in [[math:def-unordered-pair-and-singleton]], gives $z\in X+a$ exactly when $z\in X$ or $z=a$. The membership rule in [[math:def-set-difference-and-symmetric-difference]] similarly gives $z\in X-a$ exactly when $z\in X$ and $z\ne a$.
