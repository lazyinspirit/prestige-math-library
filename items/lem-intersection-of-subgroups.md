---
id: lem-intersection-of-subgroups
kind: lemma
title: "The intersection of a nonempty family of subgroups of $G$ is a subgroup of $G$"
status: published
origin: session
deps: [def-subgroup, lem-subgroup-criterion, def-group]
justified_by: []
aliases: []
landmark: false
short: "intersection of subgroups"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Subgroup (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subgroup"
pipeline_run: null
---

## Statement

Let $G$ be a group ([[def-group]]) and let $\mathcal{H}$ be a nonempty set of
subgroups of $G$ ([[def-subgroup]]). Then the intersection

$$K \;=\; \bigcap_{H \in \mathcal{H}} H \;=\; \{\, x \in G \;:\; x \in H \text{ for every } H \in \mathcal{H} \,\}$$

is a subgroup of $G$. In particular the intersection of two subgroups is a
subgroup.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$, a nonempty set $\mathcal{H}$ of subgroups of $G$, and $K$ the intersection of the members of $\mathcal{H}$.

[L1] Each $H \in \mathcal{H}$ contains $e$, is closed under the operation, and is closed under inverses ([[def-subgroup]]).

[L2] One-step test: a nonempty subset $S \subseteq G$ with $g h^{-1} \in S$ for all $g, h \in S$ is a subgroup ([[lem-subgroup-criterion]]).

## Proof

**Proof technique:** direct.

1.1 $K \subseteq G$, since every member of $\mathcal{H}$ is a subset of $G$ and $\mathcal{H}$ is nonempty. [given, L1]

1.2 $e \in K$, since $e \in H$ for every $H \in \mathcal{H}$; in particular $K$ is nonempty. [L1]

1.3 Let $g, h \in K$ and let $H \in \mathcal{H}$ be arbitrary. Then $g, h \in H$, so $h^{-1} \in H$ by closure under inverses and $g h^{-1} \in H$ by closure under the operation. [L1, given]

2.1 Since $H$ was arbitrary in step 1.3, $g h^{-1}$ lies in every member of $\mathcal{H}$, that is $g h^{-1} \in K$. [step 1.3]

3.1 $K$ is a nonempty subset of $G$ satisfying the one-step test, hence a subgroup of $G$. [step 1.1, step 1.2, step 2.1, L2] ∎

## Remarks

- **The hypothesis that $\mathcal{H}$ is nonempty is load bearing.** The intersection of the empty family of subsets of $G$ is not a subset of $G$ by any convention used here; the statement is made for a nonempty family so that step 1.1 is available.

- This lemma is what makes [[def-generated-subgroup]] legitimate: the family of subgroups containing a given subset $S$ is nonempty, since $G$ itself belongs to it, so its intersection is a subgroup, and it is by construction the smallest subgroup containing $S$.
