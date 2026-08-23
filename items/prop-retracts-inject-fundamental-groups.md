---
id: prop-retracts-inject-fundamental-groups
kind: proposition
title: "A retract induces an injection on fundamental groups, and a deformation retract induces an isomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-retraction-and-deformation-retract, thm-induced-fundamental-group-map-functoriality]
justified_by: []
aliases: []
landmark: true
short: 'retracts inject $\pi_1$'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1.17"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

Let $A\subseteq X$, let $i:A\hookrightarrow X$ be the inclusion, and choose $a\in A$. If $A$ is a retract of $X$ ([[def-retraction-and-deformation-retract]]), then

$$i_*:\pi_1(A,a)\longrightarrow\pi_1(X,a)$$

is injective. If $A$ is a deformation retract of $X$, the inclusion and retraction induce mutually inverse fundamental-group isomorphisms at every basepoint of $A$.

## Facts & Assumptions

**Given:** A subspace $A\subseteq X$, its inclusion $i:A\hookrightarrow X$, a basepoint $a\in A$, and a retraction $r:X\to A$; in the second clause, a deformation retraction from $X$ onto $A$.

[F1] A continuous map $r:X\to A$ is a retraction when $r\circ i=\operatorname{id}_A$; for a deformation retract, $\operatorname{id}_X$ is homotopic to $i\circ r$ through a homotopy that fixes every point of $A$ ([[def-retraction-and-deformation-retract]]).

[L1] For pointed continuous maps, $\operatorname{id}_*=\operatorname{id}$ and $(g\circ f)_*=g_*\circ f_*$; pointed-homotopic maps induce the same homomorphism on fundamental groups ([[thm-induced-fundamental-group-map-functoriality]]).

## Proof

**Proof technique:** direct.

1.1 Since $a\in A$, both $i:(A,a)\to(X,a)$ and $r:(X,a)\to(A,a)$ are pointed, and $r\circ i=\operatorname{id}_A$. [given, F1]

2.1 Functoriality gives $r_*\circ i_*=(r\circ i)_*=\operatorname{id}$, so $i_*$ has a left inverse and is injective. [step 1.1, L1, algebra]

3.1 If $A$ is a deformation retract, the homotopy from $\operatorname{id}_X$ to $i\circ r$ fixes $a$, so [L1] also gives $i_*\circ r_*=(i\circ r)_*=\operatorname{id}$; hence $i_*$ and $r_*$ are mutually inverse isomorphisms. [step 2.1, F1, L1] ∎
