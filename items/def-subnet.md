---
id: def-subnet
kind: definition
title: "Subnet via an eventually cofinal index map"
status: published
origin: session
deps: [def-directed-set-and-net, def-net-eventually-and-frequently]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Schlumprecht, Math 655 notes"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
pipeline_run: null
---

## Definition

Let $x:D\to X$ be a net. A net $y:E\to X$ is a **subnet** of $x$ if $E$ is a directed preorder and there is a map $\phi:E\to D$ such that $y_e=x_{\phi(e)}$ for every $e\in E$ and

$$\text{for every }d\in D\text{ there is }e_0\in E\text{ such that }e\ge e_0\Longrightarrow\phi(e)\ge d.$$

The displayed condition says that $\phi$ is **eventually cofinal**. No order-preservation condition is imposed on $\phi$.

## Remarks

Stricter conventions require $\phi$ to be order-preserving, or formulate subnets through a relation. They are not used here. Eventual cofinality is the property needed to carry eventual statements from a net to its subnet and to turn cluster points into convergent subnets.
