---
id: ex-fundamental-group-of-the-punctured-plane
kind: example
title: '$\pi_1(\mathbb R^2\setminus\{0\})\cong\mathbb Z$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-punctured-rn-deformation-retracts-onto-the-sphere,
       def-retraction-and-deformation-retract,
       thm-induced-fundamental-group-map-functoriality,
       thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle,
       thm-fundamental-group-of-the-circle,
       def-euclidean-spheres-and-closed-balls]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Example

Point $\mathbb R^2\setminus\{0\}$ at $(1,0)$. Its fundamental group is infinite cyclic:

$$\pi_1(\mathbb R^2\setminus\{0\},(1,0))\cong(\mathbb Z,+).$$

## Facts & Assumptions

**Given:** The punctured plane $P=\mathbb R^2\setminus\{0\}$, its unit circle $C$, and the basepoint $(1,0)\in C$.

[F1] Radial normalization is a deformation retraction of $\mathbb R^n\setminus\{0\}$ onto its unit sphere for every $n\ge1$ ([[thm-punctured-rn-deformation-retracts-onto-the-sphere]]).

[F2] Induced fundamental-group maps respect identities, composition, and pointed homotopies ([[thm-induced-fundamental-group-map-functoriality]]).

[F3] The map $[t]\mapsto(\cos 2\pi t,\sin 2\pi t)$ is a homeomorphism from $\mathbb R/\mathbb Z$ to $C$ sending $[0]$ to $(1,0)$ ([[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]).

[F4] The degree map is an isomorphism $\pi_1(\mathbb R/\mathbb Z,[0])\cong(\mathbb Z,+)$ ([[thm-fundamental-group-of-the-circle]]).

## Verification

**Proof technique:** direct.

1.1 Specializing [F1] to $n=2$ gives a retraction $r:P\to C$ and an endpoint-fixed homotopy from $\operatorname{id}_P$ to the composite of $r$ with the inclusion $i:C\hookrightarrow P$, fixing $(1,0)$. [F1]

2.1 Functoriality gives $r_*i_*=\operatorname{id}$ and the pointed homotopy in step 1.1 gives $i_*r_*=\operatorname{id}$, so $i_*$ is an isomorphism $\pi_1(C,(1,0))\cong\pi_1(P,(1,0))$. [step 1.1, F2]

3.1 The pointed homeomorphism of [F3] induces an isomorphism from the quotient-circle fundamental group to $\pi_1(C,(1,0))$. Composing it with [F4] and the isomorphism of step 2.1 gives $\pi_1(P,(1,0))\cong\mathbb Z$. [step 2.1, F2, F3, F4] ∎
