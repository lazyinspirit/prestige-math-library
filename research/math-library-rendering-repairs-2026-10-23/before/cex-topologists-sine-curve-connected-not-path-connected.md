---
id: cex-topologists-sine-curve-connected-not-path-connected
kind: counterexample
title: "The topologist's sine curve is connected but not path connected"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-topologists-sine-curve-is-connected,
       thm-product-universal-property,
       cor-connected-subsets-of-the-line,
       cor-intermediate-value-theorem-topological,
       thm-sine-cosine-zero-sets-and-fundamental-period,
       thm-quarter-turn-values-and-shift-formulas,
       cor-archimedean-reciprocal, def-path-connected,
       thm-continuity-preimage-characterisation,
       lem-closed-subset-of-a-compact-space-is-compact, thm-heine-borel-r,
       thm-extreme-value-metric, lem-real-and-metric-notions-agree,
       lem-continuity-is-local-and-pastes,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Gary Gruenhage and Mark Guest, Topology Course Notes, §2.3.1, Example 111"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every connected subset of $\mathbb R^2$ is path connected.

The witness is the topologist's sine curve

$$S:=\{(x,\sin(1/x)):0<x\le1\}\cup(\{0\}\times[-1,1]).$$

It is connected but no path in $S$ joins $(0,0)$ to $(1,\sin1)$.

## Facts & Assumptions

**Given:** The set $S$ in the Statement and the two points $(0,0),(1,\sin1)\in S$.

[L1] The topologist's sine curve $S=\{(x,\sin(1/x)):0<x\le1\}\cup(\{0\}\times[-1,1])$ is connected ([[lem-topologists-sine-curve-is-connected]]).

[L2] Projections from a product are continuous ([[thm-product-universal-property]], claim 1).

[L3] For a continuous real function on a subset of $\mathbb R$, the preimage of a closed set is relatively closed ([[thm-continuity-preimage-characterisation]]); real and metric continuity agree for the usual metric ([[lem-real-and-metric-notions-agree]], claim 1).

[L4] The interval $[0,1]$ is compact ([[thm-heine-borel-r]]), real and metric compactness agree on subsets of $\mathbb R$ ([[lem-real-and-metric-notions-agree]], claim 5), and a closed subset of a compact metric space is compact ([[lem-closed-subset-of-a-compact-space-is-compact]]).

[L5] A continuous real function on a nonempty compact metric space attains its maximum ([[thm-extreme-value-metric]]).

[L6] A continuous real function on a connected space attains every intermediate value between two of its values ([[cor-intermediate-value-theorem-topological]]).

[L7] The quarter-turn values and period give $\sin(\pi/2+2m\pi)=1$ and $\sin(3\pi/2+2m\pi)=-1$ for every integer $m$, and for every real $\varepsilon>0$ some positive integer $N$ satisfies $1/N<\varepsilon$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[cor-archimedean-reciprocal]]).

[L8] A space is path connected when every pair of points is joined by a continuous path from $[0,1]$ ([[def-path-connected]]).

[L9] The number $\pi=2\gamma$ is positive because the smallest positive zero of cosine satisfies $\gamma\in(0,2)$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]]).

[L10] Every interval in the real line, including $[s,r]$, is connected ([[cor-connected-subsets-of-the-line]]).

[L11] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

## Counterexample

**Proof technique:** contradiction.

1.1 The set $S$ is connected by [L1]. [L1]

1.2 Suppose, for contradiction, that a path $\gamma:[0,1]\to S$ joins $(0,0)$ to $(1,\sin1)$. Write $x:=\pi_1\circ\gamma$ and $y:=\pi_2\circ\gamma$; the projections are continuous by [L2], so both components are continuous by [L11]. [assume-contra, L2, L8, L11]

2.1 The set $E:=x^{-1}(\{0\})$ is nonempty because $0\in E$, and is closed by [L3]. By [L4] it is compact, so [L5] applied to the identity on $E$ gives its maximum $s$. Since $x(1)=1$, one has $s<1$; for every $t\in(s,1]$, the point $\gamma(t)\in S$ has $x(t)>0$. [step 1.2, L3, L4, L5]

3.1 Let $\delta>0$ and put $r:=s+\tfrac12\min\{\delta,1-s\}$. Then $s<r<\min\{s+\delta,1\}$ and $x(r)>0$ by step 2.1. By [L7] and [L9], choose $0<u,v<x(r)$ with $\sin(1/u)=1$ and $\sin(1/v)=-1$. Applying [L6] to $x$ on the connected interval $[s,r]$ from [L10] gives $p,q\in(s,r)$ with $x(p)=u$ and $x(q)=v$. Because $x(p),x(q)>0$ and $\gamma$ lies in $S$, one has $y(p)=1$ and $y(q)=-1$. [step 2.1, L6, L7, L9, L10, choose, algebra]

4.1 Continuity of $y$ at $s$ gives a $\delta>0$ such that $|y(t)-y(s)|<1/2$ whenever $|t-s|<\delta$. Step 3.1 supplies $p,q$ in that interval with $y(p)=1$ and $y(q)=-1$, which would imply $2=|1-(-1)|<1$ by the triangle inequality. This contradiction proves that no such path exists. Together with step 1.1, $S$ is connected but not path connected, and the claim is refuted. [step 1.1, step 1.2, step 3.1, discharge-contradiction] ∎
