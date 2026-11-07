---
id: def-finite-cyclotomic-action-on-conjugacy-classes
kind: definition
title: "Finite cyclotomic action on conjugacy classes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-cyclotomic-extension
  - def-roots-of-unity-in-a-field
  - thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n
  - def-conjugacy-class-and-centralizer
  - def-group
  - def-group-action
  - def-finite-cardinality
  - cor-order-of-element-divides-group-order
  - def-number-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. Klüners, A counter example to Malle's conjecture on the asymptotics of discriminants, §1"
      url: "https://arxiv.org/pdf/math/0411486v1"
    - title: "Akhtari, Park, Pieropan, Sankar, Classifying stacks and Malle's conjecture, §4.1"
      url: "https://arxiv.org/pdf/2304.10726"
verification: {}
---

## Definition

Let $K$ be a number field, let $G$ be a finite group of order $m\ge2$, and let $\mu_m$ be the group of $m$th roots of unity in an algebraic closure containing $K$. The finite Galois extension $K(\mu_m)/K$ acts on the set $\operatorname{Cl}(G)$ of conjugacy classes of $G$ as follows. For $\sigma\in\operatorname{Gal}(K(\mu_m)/K)$, write $\sigma(\zeta)=\zeta^a$ for a primitive $m$th root of unity $\zeta$ and the corresponding residue class $a\in(\mathbb Z/m\mathbb Z)^\times$; send the class $[g]$ to $[g^a]$. The image permutation group is denoted $\Gamma_K(G)$.

## Definition references

[Klüners, “A counter example to Malle's conjecture on the asymptotics of discriminants,” §1](https://arxiv.org/pdf/math/0411486v1)

[Akhtari, Park, Pieropan, Sankar, *Classifying stacks and Malle's conjecture*, §4.1](https://arxiv.org/pdf/2304.10726)

## Facts & Assumptions

**Given:** A number field $K$ and a finite group $G$ of order $m\ge2$.

[F1] For a field of characteristic zero, $K(\mu_m)/K$ is finite Galois and its automorphism group embeds into $(\mathbb Z/m\mathbb Z)^\times$ by the power action on primitive roots ([[thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n]]).

[F2] The $m$th roots of unity form a cyclic group, so a primitive $m$th root generates all of them ([[def-roots-of-unity-in-a-field]]).

[F3] The order of every element of a finite group divides the group order ([[cor-order-of-element-divides-group-order]]).

[F4] Conjugacy classes are the orbits for the conjugation action of a group on itself ([[def-conjugacy-class-and-centralizer]], [[def-group-action]]).

## Verification

1.1 By [F1], each automorphism has a unique power class $a\in(\mathbb Z/m\mathbb Z)^\times$ and the class is independent of the primitive root. By [F2], every $m$th root is a power of $\zeta$, and the action of $\sigma$ on it is raising to $a$. [F1, F2, given]

2.1 If $g'=hgh^{-1}$, then $(g')^a=hg^ah^{-1}$, so the map $[g]\mapsto[g^a]$ is well defined on conjugacy classes. By [F3], the order of $g$ divides $m$, so its power depends only on the residue class $a\bmod m$; because $a$ is a unit modulo $m$, it preserves the order and the induced map is a permutation, with inverse given by any inverse exponent modulo $m$. Multiplication of power classes corresponds to composition of these permutations, so their image is the finite group $\Gamma_K(G)$. [F1, F3, step 1.1, algebra] ∎
