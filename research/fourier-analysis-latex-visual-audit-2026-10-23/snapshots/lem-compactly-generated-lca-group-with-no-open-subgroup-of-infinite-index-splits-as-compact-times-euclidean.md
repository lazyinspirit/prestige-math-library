---
id: lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean
kind: lemma
title: A compactly generated LCA group with no open subgroup of infinite index is Euclidean times compact
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-axiom-of-choice, def-compact-space, def-connected-space, def-dependent-choice, def-generated-subgroup, def-hausdorff-space, def-homeomorphism-and-open-maps, def-integers, def-locally-compact-space, def-neighbourhood-top, def-product-topology, def-quotient-group, def-quotient-topology, def-standard-topologies, def-subgroup, def-topological-group, lem-topological-group-translations-and-inversion, thm-compactness-under-continuous-maps, thm-quotient-universal-property]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: K. A. Ross, Closed subgroups of compactly generated LCA groups are compactly generated (author-hosted article, 2018)
    url: https://pages.uoregon.edu/math/people/ross/SubgroupsCGLCAGareCG-v2.pdf
    locator: 'Theorem 3 proof, printed p. 3: the compactly generated LCA classification attributed to Hewitt-Ross Theorem 9.8; elimination of the discrete factor is proved here.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]). Let $H$ be a compactly generated locally compact Hausdorff abelian topological group ([[def-locally-compact-space]], [[def-hausdorff-space]], [[def-topological-group]], [[def-generated-subgroup]]) containing no open subgroup of infinite index. Then there are $n\ge0$ and a compact group $W$ with $H\cong W\oplus\mathbb R^n$ (topological group isomorphism), the summands being the direct factors of the product $W\times\mathbb R^n$.

## Facts & Assumptions

**Given:** A compactly generated locally compact Hausdorff abelian group $H$ containing no open subgroup of infinite index, and the Axiom of Choice together with Dependent Choice.

[F1] **Classification of compactly generated abelian groups.** Every compactly generated locally compact Hausdorff abelian group is isomorphic as a topological group to $\mathbb R^m\times\mathbb Z^n\times K$ for some $m,n\ge0$ and some compact group $K$. This is Hewitt-Ross, *Abstract Harmonic Analysis I*, Theorem 9.8, quoted and attributed in the Ross article recorded in the sources (Theorem 3 proof, p. 3); the primary volume is not available here, so the classification is used as a cited theorem and no minimality claim about its axiom basis is made beyond the declared AC and DC.

[F2] $\mathbb Z$ is an infinite discrete abelian group and $\mathbb Z^n$ is its $n$-fold product with the product topology; for $n\ge1$ the map $\mathbb R^m\times\mathbb Z^n\times K\to\mathbb Z^n$, $(v,z,k)\mapsto z$, is a continuous surjective homomorphism with kernel $\mathbb R^m\times\{0\}\times K$, so by the universal property of the quotient the quotient group $(\mathbb R^m\times\mathbb Z^n\times K)/(\mathbb R^m\times\{0\}\times K)$ is topologically isomorphic to $\mathbb Z^n$. ([[def-integers]], [[def-standard-topologies]], [[def-product-topology]], [[def-quotient-group]], [[def-quotient-topology]], [[thm-quotient-universal-property]])

[F3] A subgroup $L$ of a topological group is open exactly when each of its cosets is open, since translations are homeomorphisms; in the quotient by an open subgroup all points are open, so the quotient is discrete. The set $\mathbb R^m\times\{0\}\times K$ is open in $\mathbb R^m\times\mathbb Z^n\times K$, because $\{0\}$ is open in the discrete group $\mathbb Z^n$ and $K$ is open in $K$, and the preimage of an open set under a homeomorphism is open. ([[def-subgroup]], [[def-homeomorphism-and-open-maps]], [[lem-topological-group-translations-and-inversion]], [[def-standard-topologies]])

[F4] The index of a subgroup $L\le H$ is the cardinality of the quotient $H/L$; an infinite quotient group therefore means infinite index. A topological isomorphism preserves subgroups, openness and indices. ([[def-quotient-group]], [[def-subgroup]], [[def-homeomorphism-and-open-maps]])

## Proof

1.1 Let $\varphi:H\to\mathbb R^m\times\mathbb Z^n\times K$ be a topological isomorphism as in [F1], and suppose $n\ge1$. Then $L:=\varphi^{-1}\big(\mathbb R^m\times\{0\}\times K\big)$ is an open subgroup of $H$ by [F3], and taking images under $\varphi$ identifies the quotient $H/L$ with $(\mathbb R^m\times\mathbb Z^n\times K)/(\mathbb R^m\times\{0\}\times K)$, which is isomorphic to $\mathbb Z^n$ by [F2]; as $\mathbb Z^n$ is infinite for $n\ge1$, the index $[H:L]$ is infinite by [F4]. This contradicts the hypothesis that $H$ has no open subgroup of infinite index. Hence $n=0$. [F1, F2, F3, F4]

2.1 With $n=0$, [F1] gives a topological isomorphism $H\cong\mathbb R^m\times\{0\}\times K\cong\mathbb R^m\times K$, and hence $H\cong K\oplus\mathbb R^m$ with the compact group $W:=K$ and the exponent $m\ge0$. This is the statement. [step 1.1] ∎