---
id: thm-principal-structure-theorem-for-lca-groups
kind: theorem
title: The principal structure theorem for LCA groups
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-axiom-of-choice, def-compact-space, def-dependent-choice, def-generated-subgroup, def-hausdorff-space, def-homeomorphism-and-open-maps, def-locally-compact-space, def-product-topology, def-subgroup, def-topological-group, lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean, lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index, lem-local-compact-subgroups-of-hausdorff-groups-are-closed]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: T. W. Koerner, Topological Groups (author lecture notes)
    url: https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf
    locator: 'Theorem 14.6, printed p. 28, and Lemmas 14.13-14.14, printed p. 29: the principal structure theorem and its two reductions.'
  - title: K. A. Ross, Closed subgroups of compactly generated LCA groups are compactly generated (author-hosted article, 2018)
    url: https://pages.uoregon.edu/math/people/ross/SubgroupsCGLCAGareCG-v2.pdf
    locator: 'Theorem 3 proof, printed p. 3: quotes the compactly generated LCA classification used in the local reductions.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]). Let $G$ be a locally compact Hausdorff abelian topological group ([[def-locally-compact-space]], [[def-hausdorff-space]], [[def-topological-group]]). Then $G$ contains an open (hence closed) subgroup isomorphic as a topological group to $\mathbb R^n\times W$ for some $n\ge0$ and some compact group $W$.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$, and the Axiom of Choice together with Dependent Choice.

[F1] Every locally compact Hausdorff abelian group contains an open, hence closed, subgroup which is compactly generated and contains no open subgroup of infinite index. ([[lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index]])

[F2] A compactly generated locally compact Hausdorff abelian group with no open subgroup of infinite index is isomorphic as a topological group to $W\oplus\mathbb R^n$ for some compact group $W$ and some $n\ge0$. ([[lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean]])

[F3] A closed subgroup of an LCA group is LCA ([[lem-local-compact-subgroups-of-hausdorff-groups-are-closed]]). An open subgroup of a topological group is closed, and a topological isomorphism carries open subgroups to open subgroups and compact groups to compact groups; products carry the product topology. ([[def-subgroup]], [[def-topological-group]], [[def-homeomorphism-and-open-maps]], [[def-product-topology]], [[def-compact-space]])

## Proof

1.1 Apply [F1] to $G$: there is an open subgroup $H\le G$ which is compactly generated and contains no open subgroup of infinite index. [F1]

2.1 Apply [F2] to $H$: there are $n\ge0$ and a compact group $W$ with $H\cong W\oplus\mathbb R^n$ as topological groups. Since $H$ is open in $G$ it is closed by [F3], and the isomorphism is the required one. Thus $G$ contains an open subgroup isomorphic to $\mathbb R^n\times W$, which is the statement. [F2, F3, step 1.1] ∎