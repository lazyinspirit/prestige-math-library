---
id: lem-tau-threshold-under-nonzero-filtered-maps
kind: lemma
title: "Nonzero filtered maps bound the tau threshold"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Only finite-dimensional linear algebra is used; no choice axiom is required."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
---

## Statement

Let $C,D$ be finite integer-filtered chain complexes over $\mathbb F_2$ with one-dimensional total homology. Let $f:C\to D$ be a chain map inducing a nonzero map on total homology, and suppose $f(F_sC)\subseteq F_{s+a}D$ for every integer $s$, where $a\in\mathbb Z$. Then $\tau(D)\le\tau(C)+a$. If a second chain map $h:D\to C$ induces a nonzero map on total homology and satisfies $h(F_sD)\subseteq F_{s+b}C$, then
$$-b\le\tau(D)-\tau(C)\le a.$$
In particular, nonzero maps in both directions with filtration shift at most $g\ge0$ imply $|\tau(D)-\tau(C)|\le g$.

## Statement references

[[def-knot-floer-filtration-and-tau]]

## Facts & Assumptions

**Given:** The finite filtered complexes and chain maps satisfying exactly the hypotheses in the Statement.

[F1] [[def-knot-floer-filtration-and-tau]] defines $\tau(C)$ as the least level whose inclusion induces a nonzero map to total homology.

## Proof

1.1 Put $t=\tau(C)$. By [F1] there is a cycle $x\in F_tC$ whose class is nonzero in $H(C)$. Since a nonzero linear map between one-dimensional vector spaces is injective, $H(f)[x]\ne0$. The chain-map property gives $\partial f(x)=f(\partial x)=0$, and the filtration condition gives $f(x)\in F_{t+a}D$. Thus $H(F_{t+a}D)\to H(D)$ has nonzero image and $\tau(D)\le t+a$. [F1, given, construct, algebra]

2.1 Apply step 1.1 to $h$ with the roles of $C,D$ reversed to obtain $\tau(C)\le\tau(D)+b$. Rearranging and combining the inequalities gives $-b\le\tau(D)-\tau(C)\le a$. For $a=b=g$, this interval is $[-g,g]$, equivalent to the asserted absolute-value bound. [step 1.1, given, algebra] ∎

## Remarks

This is an algebraic implication for maps already constructed and proved nonzero. It asserts no existence, naturality, or Alexander shift for maps associated with an embedded knot cobordism.
