---
id: thm-no-continuous-logarithm-on-the-punctured-complex-plane
kind: theorem
title: "There is no continuous logarithm on all of $\\mathbb C\\setminus\\{0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-logarithms-principal-logarithm-and-complex-powers, thm-kernel-and-fibres-of-complex-exponential, thm-complex-exponential-addition-and-real-extension, def-complex-metric-convergence-and-continuity, thm-eulers-formula, thm-sine-and-cosine-derivatives, thm-componentwise-limits-and-continuity, thm-intermediate-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

There is no continuous function $L:\mathbb C\setminus\{0\}\to\mathbb C$ satisfying $\exp(L(z))=z$ for every $z\ne0$. The conventions and prerequisite facts used below are recorded in [[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[thm-kernel-and-fibres-of-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]], [[def-complex-metric-convergence-and-continuity]], [[thm-eulers-formula]], [[thm-sine-and-cosine-derivatives]], [[thm-componentwise-limits-and-continuity]], and [[thm-intermediate-value]].

## Facts & Assumptions

**Given:** The unit-circle path $\gamma(t)=\exp(it)$ for $0\le t\le2\pi$.

[L1] [[thm-kernel-and-fibres-of-complex-exponential]] states that $\exp u=\exp v$ exactly when $u-v\in2\pi i\mathbb Z$.

[L2] [[thm-eulers-formula]] gives $\gamma(t)=\cos t+i\sin t$, and [[thm-sine-and-cosine-derivatives]] makes both real coordinate functions continuous.

[L3] [[thm-componentwise-limits-and-continuity]] makes a complex-valued map continuous exactly when its two real components are continuous.

[L4] [[thm-intermediate-value]] gives every intermediate real value of a continuous real function on a closed interval.

[L5] [[def-complex-metric-convergence-and-continuity]] defines continuity on subsets of $\mathbb C$ by its Euclidean metric.

## Proof

**Proof technique:** contradiction.

1.1 Suppose such a continuous $L$ exists and put $h(t)=L(\gamma(t))-it$. By [L2], [L3], and [L5], $\gamma$, $L\circ\gamma$, and $h$ are continuous on $[0,2\pi]$. [assume-contra, L2, L3, L5]

2.1 The assumed identity says $\exp(L(\gamma(t)))=\gamma(t)=\exp(it)$. Hence [L1] gives $h(t)\in2\pi i\mathbb Z$ for every $t$. [L1, step 1.1]

3.1 By [L3], $\nu(t):=\operatorname{Im}(h(t))/(2\pi)$ is a continuous real-valued function; by step 2.1 it takes values in $\mathbb Z$. If $\nu(s)\ne\nu(t)$ for some $s<t$, [L4] applied to $\nu$ on $[s,t]$ gives a noninteger value strictly between two distinct integers, a contradiction. Thus $\nu$ is constant. [L3, L4, step 2.1]

4.1 Euler's formula gives $\gamma(0)=\gamma(2\pi)=1$, so $h(2\pi)=L(1)-2\pi i=h(0)-2\pi i$. Its imaginary quotient therefore changes by $-1$, contradicting step 3.1. [L2, step 1.1, step 3.1, discharge-contradiction] ∎
