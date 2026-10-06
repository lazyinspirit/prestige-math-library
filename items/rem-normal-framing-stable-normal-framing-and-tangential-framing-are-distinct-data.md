---
id: rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data
kind: remark
title: "Normal framings, stable normal framings and tangential framings are distinct data"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 10
deps:
  - def-framing-of-a-normal-bundle
  - def-stable-normal-bundle-of-a-compact-smooth-manifold
  - thm-stable-normal-bundle-is-independent-of-the-embedding
  - def-stabilized-framed-cobordism-colimit
  - thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "(5.15)-(5.19) and Proposition 5.21, printed pp.40-41"
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, definitions of framings and Theorem B, printed pp.42-50"
---

## Remark

Assume $\mathrm{AC}_\omega$, inherited from the normal-bundle suppliers. Three different data types occur in this pair and are not interchangeable.
An **actual normal framing** of a closed embedded submanifold $N\subseteq S^m$
is a smooth bundle isomorphism $\varphi:\nu(N\subseteq S^m)\to N\times\mathbb R^k$
for the honest normal bundle, with $k$ the codimension of $N$ in $S^m$
([[def-framing-of-a-normal-bundle]]); it is part of the data of a framed
submanifold and the Pontryagin-Thom map depends on it. A **stable normal
framing** is a trivialization of $\nu(N)\oplus\varepsilon^j$ for some $j$,
considered up to homotopy and adding further trivial summands; this is the sense in which
the stable normal bundle of a compact manifold is independent of the chosen
embedding ([[def-stable-normal-bundle-of-a-compact-smooth-manifold]],
[[thm-stable-normal-bundle-is-independent-of-the-embedding]]). A **stable
tangential framing** is a trivialization of $TN\oplus\varepsilon^{j'}$
considered up to homotopy and further stabilization.

The passage between the actual and the stable notions loses information.
An actual framing $\varphi$ of $\nu(N)$ determines the stable normal framing
of $\varphi\oplus\mathrm{id}$ on $\nu(N)\oplus\varepsilon^j$ for every $j$,
and, once the splitting $TN\oplus\nu(N)=TS^m|_N$ of the restricted ambient
tangent bundle and the stable trivialization $TS^m\oplus\varepsilon^1\cong
\varepsilon^{m+1}$ of the sphere are fixed, it also determines a stable
tangential framing of $N$, by adding trivial summands to both sides; conversely
a stable normal framing and the same ambient data determine a stable
tangential framing up to homotopy. What is not available is a converse at the
level of actual data: a stable framing is an equivalence class under adding
trivial summands, it does not single out a codimension $k$, a level sphere
$S^{m}$ or an embedding, and no actual framing of $\nu(N)$ is recovered from
it without choosing a level and splitting off the added summands.

Consequently the left-hand side of the stable Pontryagin-Thom theorem is a
colimit. The elements of $\Omega^{\mathrm{fr}}_d$ are stabilization classes of
actual normal framings, not framed submanifolds of a fixed sphere
([[def-stabilized-framed-cobordism-colimit]]), and only at a sufficiently
large level does a representative of a stable class become an actual framed
submanifold, where the levelwise correspondence of
[[thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems]]
becomes available. Identifying the fixed-codimension and the stable statements
without keeping track of that stabilization is precisely the error this
remark rules out.
