---
id: cor-iwasawa-criterion-for-faithful-finite-actions
kind: corollary
title: "The finite Iwasawa criterion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-iwasawa-simplicity-criterion-for-primitive-actions]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "P. J. Cameron, Classical Groups, Sections 2.3-2.4"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/class_gps/cg.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Statement

Let a finite group $G$ act faithfully and primitively on $\Omega$, and fix
$\alpha \in \Omega$. Assume $G_\alpha$ has a nontrivial abelian normal subgroup
$A$ whose conjugates generate $G$. If $G = [G,G]$, then $G$ is simple.

## Facts & Assumptions

**Given:** A finite faithful primitive action of $G$ on $\Omega$, a point $\alpha \in \Omega$, a nontrivial abelian normal subgroup $A \trianglelefteq G_\alpha$, the conjugates of $A$ generate $G$, and $G = [G,G]$.

[L1] Under these hypotheses, every nontrivial normal subgroup of $G$ contains $[G,G]$, and therefore a group with $G = [G,G]$ is simple ([[thm-iwasawa-simplicity-criterion-for-primitive-actions]]).

## Proof

**Proof technique:** direct.

1.1 The stated hypotheses are exactly those of [L1]. [L1]

2.1 Since $G = [G,G]$, the concluding clause of [L1] applies and yields that $G$ is simple. [L1, step 1.1] ∎
