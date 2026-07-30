---
id: lem-subnets-preserve-eventual-properties-and-limits
kind: lemma
title: "Subnets preserve eventual properties and every limit of a net"
status: published
origin: session
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
