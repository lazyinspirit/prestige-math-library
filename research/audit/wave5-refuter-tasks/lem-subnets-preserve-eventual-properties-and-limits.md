# Adversarial proof reading — `lem-subnets-preserve-eventual-properties-and-limits`

## The item under review, in full

`items/lem-subnets-preserve-eventual-properties-and-limits.md`

```markdown
---
id: lem-subnets-preserve-eventual-properties-and-limits
kind: lemma
title: "Subnets preserve eventual properties and every limit of a net"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-subnet, def-net-convergence-and-cluster-point, def-net-eventually-and-frequently]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
    - title: "Subnet (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subnet_(mathematics)"
pipeline_run: null
---

## Statement

If $y$ is a subnet of a net $x$, then every subset in which $x$ is eventually contained is one in which $y$ is eventually contained. Consequently every limit of $x$ is a limit of $y$.

## Facts & Assumptions

**Given:** A subnet $y_e=x_{\phi(e)}$ of $x_d$.

[A1] Eventual cofinality says that for every $d_0\in D$ some $e_0\in E$ has $e\ge e_0\Rightarrow\phi(e)\ge d_0$ ([[def-subnet]]).

[A2] A net converges to $p$ exactly when it is eventually in every neighbourhood of $p$ ([[def-net-convergence-and-cluster-point]]).



## Proof

**Proof technique:** direct.

1.1 Suppose $x$ is eventually in $S\subseteq X$, and choose $d_0$ such that $d\ge d_0$ implies $x_d\in S$. [given]

2.1 Choose $e_0$ from [A1] for this $d_0$; then $e\ge e_0$ gives $y_e=x_{\phi(e)}\in S$. Thus $y$ is eventually in $S$. [step 1.1, A1]

3.1 If $x$ converges to $p$, apply step 2.1 to each neighbourhood of $p$ using [A2]; then $y$ is eventually in every such neighbourhood and converges to $p$. [step 2.1, A2] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-subnet` — definition — Subnet via an eventually cofinal index map

(statement provenance: ai-altered)

### Definition

Let $x:D\to X$ be a net. A net $y:E\to X$ is a **subnet** of $x$ if $E$ is a directed preorder and there is a map $\phi:E\to D$ such that $y_e=x_{\phi(e)}$ for every $e\in E$ and

$$\text{for every }d\in D\text{ there is }e_0\in E\text{ such that }e\ge e_0\Longrightarrow\phi(e)\ge d.$$

The displayed condition says that $\phi$ is **eventually cofinal**. No order-preservation condition is imposed on $\phi$.

### `def-net-convergence-and-cluster-point` — definition — Convergence and cluster points of a net in a topological space

(statement provenance: literature-derived)

### Definition

Let $x:D\to X$ be a net in a topological space $X$ and let $p\in X$.

- $x$ **converges to $p$**, written $x_d\to p$, if it is eventually in every neighbourhood of $p$ ([[def-neighbourhood-top]]).
- $p$ is a **cluster point** of $x$ if $x$ is frequently in every neighbourhood of $p$.

Convergence implies being a cluster point. If $x$ is eventually in a neighbourhood
$N$ after $d_0$, then for an arbitrary threshold $d$ choose a common upper bound
$e\ge d,d_0$; one has $x_e\in N$, so $x$ is frequently in $N$.

### `def-net-eventually-and-frequently` — definition — A net is eventually or frequently in a subset of its codomain

(statement provenance: literature-derived)

### Definition

Let $x:D\to X$ be a net ([[def-directed-set-and-net]]) and let $S\subseteq X$.

- $x$ is **eventually in $S$** if some $d_0\in D$ satisfies $x_d\in S$ for every $d\ge d_0$.
- $x$ is **frequently in $S$** if, for every $d_0\in D$, there is $d\ge d_0$ with $x_d\in S$.

The net is frequently in $S$ exactly when it is not eventually in $X\setminus S$: negating the first displayed existential-universal condition gives the second one.

## What to return

Read `lem-subnets-preserve-eventual-properties-and-limits` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
