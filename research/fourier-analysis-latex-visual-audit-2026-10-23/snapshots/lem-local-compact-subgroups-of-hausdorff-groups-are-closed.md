---
id: lem-local-compact-subgroups-of-hausdorff-groups-are-closed
kind: lemma
title: A locally compact subgroup of a Hausdorff topological group is closed
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-compact-space, def-continuous-map-top, def-hausdorff-space, def-homeomorphism-and-open-maps, def-interior-closure-boundary-top, def-locally-compact-space, def-neighbourhood-top, def-quotient-topology, def-subgroup, def-subspace-topology-top, def-topological-group, lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure, lem-compactness-of-a-subspace-is-ambient, lem-continuity-is-local-and-pastes, lem-topological-group-translations-and-inversion, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-compactness-under-continuous-maps, thm-subspace-closure-and-interior]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Linus Kramer, Locally Compact Groups and Lie Groups, Chapter 1 (author lecture notes, 2020)
    url: https://www.uni-muenster.de/AGKramer/content/ch1.pdf
    locator: 'Corollary 1.14 and its proof, printed p. 8; Proposition 1.29, printed p. 13: locally compact subgroups of Hausdorff groups are closed, and closed subgroups of locally compact groups are locally compact.'
proof_strategy: direct
verification:
  precheck: pass
---
## Statement

Let $G$ be a Hausdorff topological group ([[def-hausdorff-space]], [[def-topological-group]]) and let $H\le G$ be a subgroup ([[def-subgroup]]) which is locally compact in the subspace topology ([[def-subspace-topology-top]], [[def-locally-compact-space]]). Then $H$ is closed in $G$. Conversely, if $G$ is locally compact and $H$ is closed in $G$, then $H$ is locally compact in the subspace topology. In particular, closed subgroups of locally compact Hausdorff abelian groups are again locally compact Hausdorff abelian.

No choice principle is used.

## Facts & Assumptions

**Given:** A Hausdorff topological group $G$, a subgroup $H\le G$ locally compact in the subspace topology, and a point $x\in G$.

[F1] Local compactness of $H$ gives an $H$-open neighbourhood $V$ of the identity $e$ whose $H$-closure $C:=\mathrm{cl}_H(V)$ is compact in $H$. For a subspace $H$ of $G$ the closure traces exactly: $\mathrm{cl}_H(V)=\mathrm{cl}_G(V)\cap H$, and $V=H\cap O$ for some $O$ open in $G$. ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]], [[def-locally-compact-space]], [[def-neighbourhood-top]], [[thm-subspace-closure-and-interior]], [[def-subspace-topology-top]])

[F2] $G$ is a topological group: for fixed $a\in G$ the translations $x\mapsto a+x$ and $x\mapsto x+a$ and the inversion $x\mapsto-x$ are homeomorphisms, hence map open sets to open sets and preserve closures. ([[def-topological-group]], [[lem-topological-group-translations-and-inversion]], [[def-homeomorphism-and-open-maps]])

[F3] A closed subset of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]). A subset compact in the subspace $H$ is compact in $G$, and a compact subset of the Hausdorff space $G$ is closed. ([[lem-compactness-of-a-subspace-is-ambient]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-compact-space]], [[def-hausdorff-space]])

[F4] A point $x$ lies in $\mathrm{cl}_G(H)$ if and only if every open neighbourhood of $x$ meets $H$. If $O\subseteq G$ is open and $y\in\mathrm{cl}_G(H)\cap O$, then $y\in\mathrm{cl}_G(H\cap O)$: every open neighbourhood $N$ of $y$ has $N\cap O$ an open neighbourhood of $y$, which meets $H$, hence meets $H\cap O$. ([[def-interior-closure-boundary-top]], [[def-neighbourhood-top]], [[thm-subspace-closure-and-interior]])

## Proof

1.1 Choose an $H$-open neighbourhood $V$ of $e$ with $C:=\mathrm{cl}_H(V)$ compact in $H$, and write $V=H\cap O$ with $O$ open in $G$. Then $C$ is compact in $G$ and closed in $G$, and $V\subseteq C\subseteq H$ with $\mathrm{cl}_G(V)\subseteq C$ because $C$ is closed in $G$ and contains $V$. [F1, F3]

2.1 Let $x\in\mathrm{cl}_G(H)$. The set $x-O=\{x-o:o\in O\}$ is an open neighbourhood of $x$ by [F2], so by the closure characterisation it meets $H$: there are $h\in H$ and $o\in O$ with $h=x-o$, that is $x=h+o$. [F2, F4, step 1.1]

3.1 With $h,o$ as in step 2.1, the point $o=(-h)+x$ lies in $\mathrm{cl}_G(H)$, because $-h+H=H$ and translations preserve closures; and $o\in O$, so $o\in\mathrm{cl}_G(H)\cap O\subseteq\mathrm{cl}_G(H\cap O)=\mathrm{cl}_G(V)\subseteq C\subseteq H$, using $V=H\cap O$ and the inclusion of [F4]. [F4, step 1.1, step 2.1]

4.1 Since $o\in H$ and $x=h+o$ with $h\in H$, the subgroup $H$ contains $x$. Hence every $x\in\mathrm{cl}_G(H)$ lies in $H$, that is $\mathrm{cl}_G(H)=H$ and $H$ is closed in $G$. Conversely, suppose $G$ is locally compact and $H$ is closed. For $h\in H$, a compact neighbourhood $N$ of $h$ in $G$ gives a compact neighbourhood $N\cap H$ in $H$: it is closed in the compact space $N$ and contains the trace on $H$ of an open neighbourhood of $h$. The Hausdorff property and continuous group operations restrict to $H$, as does abelianness. Thus a closed subgroup of an LCA group is LCA. [F1, F2, F3, step 3.1, step 2.1] ∎

## Remarks

The proof uses no compactness of $G$, no abelianness, and no choice principle: the single compact set is $\mathrm{cl}_H(V)$, supplied by local compactness of $H$.
