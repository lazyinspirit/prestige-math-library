---
id: def-subgroup
kind: definition
title: "Subgroup"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-group, def-binary-operation, def-identity-element, def-invertible-element]
justified_by: []
aliases: []
landmark: true
short: "$H \\le G$"
verification:
  precheck: n/a
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

## Definition

Let $G$ be a group ([[def-group]]) with identity $e$. A subset $H \subseteq G$ is
a **subgroup** of $G$, written $H \le G$, when

- **(S1)** $e \in H$;
- **(S2)** $H$ is closed under the operation: $x, y \in H$ implies $xy \in H$
  ([[def-binary-operation]]);
- **(S3)** $H$ is closed under inverses: $x \in H$ implies $x^{-1} \in H$.

By (S2) the operation of $G$ restricts to a binary operation on $H$; it is
associative there because it is associative on $G$, the element $e$ of (S1) is a
two-sided identity for it ([[def-identity-element]]), and (S3) supplies for each
$x \in H$ a two-sided inverse lying in $H$ ([[def-invertible-element]]). So a
subgroup, with the restricted operation, is itself a group, and its identity and
its inverses are those of $G$.

Every group $G$ has the two **trivial subgroups** $\{e\}$ and $G$ itself; a
subgroup $H$ with $H \ne G$ is called **proper**.

## Remarks

- **The definition is stated so that no comparison of structures is needed.** A
  subgroup is a subset satisfying three closure conditions, and the group
  structure it carries is inherited rather than chosen. The converse reading, that
  a subset which happens to be a group under the restricted operation is a
  subgroup in the above sense, is a small theorem rather than a tautology,
  because a priori such a subset could carry a different identity; it is part of
  [[lem-subgroup-criterion]], and cancellation in $G$ is what rules that out.

- Conditions (S1)–(S3) are not independent as stated: if $H$ is nonempty and
  satisfies (S2) and (S3) then it satisfies (S1). The economical single test is
  [[lem-subgroup-criterion]].

- Intersections of subgroups are subgroups ([[lem-intersection-of-subgroups]]),
  which is what makes "the smallest subgroup containing a given subset"
  meaningful ([[def-generated-subgroup]]). Unions of subgroups are almost never
  subgroups.
