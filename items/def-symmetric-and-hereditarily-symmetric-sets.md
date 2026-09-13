---
id: def-symmetric-and-hereditarily-symmetric-sets
kind: definition
title: Symmetric and hereditarily symmetric sets
status: draft
origin: pipeline
deps: [def-permutation-support-system-and-normal-filter, def-transitive-closure-of-a-set]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, §4.2, pp. 46–47", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Definition

A ZFA atom is a **hereditarily $\mathcal F$-symmetric** base case: its singleton stabilizer belongs to the normal filter by [[def-permutation-support-system-and-normal-filter]]. For an atom $a$ put $\operatorname{TC}_{\mathrm{ZFA}}(a)=\varnothing$. For a set $x$ define the membership-descendant closure by rank recursion,

$$
\operatorname{TC}_{\mathrm{ZFA}}(x)=\bigcup_{y\in x}\bigl(\{y\}\cup\operatorname{TC}_{\mathrm{ZFA}}(y)\bigr).
$$

A set $x$ is hereditarily $\mathcal F$-symmetric when every object in $\{x\}\cup\operatorname{TC}_{\mathrm{ZFA}}(x)$ is $\mathcal F$-symmetric. Rank induction on the displayed recursion proves equivalently that $x$ is symmetric and every $y\in x$ is hereditarily symmetric, using the atom base case when $y$ is an atom. On pure sets this closure agrees with [[def-transitive-closure-of-a-set]]. Write $\mathrm{HS}_{\mathcal F}$ for all hereditarily symmetric objects, with inherited membership and the original atoms. If $y\in x\in\mathrm{HS}_{\mathcal F}$, the recursive clause gives $y\in\mathrm{HS}_{\mathcal F}$, so this permutation subuniverse is transitive. Symmetry alone is insufficient: a symmetric set can contain a nonsymmetric member.
