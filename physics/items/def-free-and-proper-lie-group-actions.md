---
id: def-free-and-proper-lie-group-actions
kind: definition
title: Free and proper Lie-group actions
status: published
origin: pipeline
deps: [def-smooth-left-action-of-a-lie-group, def-compact-space]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Definitions and discussion preceding Proposition 21.4, printed pages 542–543
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

A smooth action of a Lie group $G$ on a manifold $M$ is **free** if
$G_x=\{e\}$ for every $x\in M$.

It is **proper** if its action-graph map

$$\Theta:G\times M\longrightarrow M\times M,\qquad \Theta(g,x)=(g\cdot x,x),$$

is proper: $\Theta^{-1}(K)$ is compact for every compact
$K\subseteq M\times M$. The reversed coordinate convention
$(x,g\cdot x)$ is equivalent by the factor-swap homeomorphism. Freeness and
properness are independent conditions; neither is encoded by the other.
