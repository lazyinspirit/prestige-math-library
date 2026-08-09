---
id: cor-separated-uniformizable-iff-tychonoff
kind: corollary
title: "Assuming dependent choice, a nonempty topological space is separated-uniformizable if and only if it is Tychonoff"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-uniformizable-iff-completely-regular, thm-separated-uniformity-iff-induced-topology-is-hausdorff, def-completely-regular-and-tychonoff-spaces, def-t0-and-t1-spaces, def-dependent-choice, lem-completely-regular-topologies-come-from-continuous-pseudometrics, def-gauge-of-pseudometrics, lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, thm-t1-iff-singletons-are-closed]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

**Assuming dependent choice,** a nonempty topological space is separated-uniformizable if and only if it is Tychonoff.

## Facts & Assumptions

**Given:** A nonempty topological space and dependent choice.

[L1] Uniformizable is equivalent to completely regular under dependent choice ([[thm-uniformizable-iff-completely-regular]]).

[L2] A separated compatible uniformity induces a Hausdorff topology ([[thm-separated-uniformity-iff-induced-topology-is-hausdorff]]).

[L3] Tychonoff means completely regular plus $T_1$ ([[def-completely-regular-and-tychonoff-spaces]], [[def-t0-and-t1-spaces]]).

[L4] A completely regular topology is induced by the gauge $p_f(x,y)=|f(x)-f(y)|$ over all continuous $f:X\to[0,1]$ ([[lem-completely-regular-topologies-come-from-continuous-pseudometrics]], [[def-gauge-of-pseudometrics]]).

[L5] Every Hausdorff space is $T_1$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], clause 2).

[L6] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

## Proof

**Proof technique:** direct.

1.1 A separated-uniformizable space is completely regular by [L1] and Hausdorff by [L2], hence $T_1$ by [L5] and therefore Tychonoff by [L3]. [L1, L2, L3, L5]

1.2 Conversely, let $X$ be Tychonoff. For $x\ne y$, the singleton $\{y\}$ is closed by [L6], and complete regularity gives a continuous $f:X\to[0,1]$ with $f(x)=1$ and $f(y)=0$. Thus the gauge in [L4] has an entourage excluding $(x,y)$, so its intersection is the diagonal and it is separated. It induces the original topology by [L4]. [L3, L4, L6]

2.1 Thus it is separated-uniformizable, proving the converse and the equivalence. [step 1.2] ∎
