---
id: def-permutation-support-system-and-normal-filter
kind: definition
title: Permutation groups, stabilizers, supports, and normal filters
status: published
origin: pipeline
deps: [def-zfa-universe-atoms-and-kernel, def-group-action, def-filter]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, §4.2, pp. 45–47", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Definition

Let $G$ be a group of permutations of the atom set $A$. Extend $g\in G$ by rank recursion: $ga$ is the given atom permutation and $gx=\{gy:y\in x\}$ for sets. Then $x\in y$ iff $gx\in gy$, and pure sets are fixed.

Put $\operatorname{sym}_G(x)=\{g\in G:gx=x\}$ and, for $E\subseteq A$,
$\operatorname{fix}_G(E)=\{g\in G:g\restriction E=\mathrm{id}_E\}$. A **normal filter of subgroups** $\mathcal F$ is nonempty, upward closed among subgroups, closed under finite intersections and conjugation, and contains $\operatorname{fix}_G(\{a\})$ for every atom $a$. A set is $\mathcal F$-symmetric when its stabilizer lies in $\mathcal F$. A finite $E$ is a **support** of $x$ when $\operatorname{fix}_G(E)\subseteq\operatorname{sym}_G(x)$.

Rank induction gives $\operatorname{sym}_G(gx)=g\operatorname{sym}_G(x)g^{-1}$; hence normality makes symmetry invariant under $G$. Finite unions combine finite supports, and singleton stabilizers make every atom symmetric. No choice principle is used.

