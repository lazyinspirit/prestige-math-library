---
id: lem-erdos-hajnal-constants-are-downward-closed
kind: lemma
title: "Every smaller positive exponent is again an Erdős–Hajnal constant"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-erdos-hajnal-property-and-constant, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.4
    verdict: certify
    date: 2026-08-26
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Erdős-Hajnal beyond the five-vertex path"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a hereditary graph class. If $\epsilon$ is an Erdős–Hajnal constant for $\mathcal C$ and $0<\delta\le\epsilon$, then $\delta$ is also an Erdős–Hajnal constant for $\mathcal C$.

## Facts & Assumptions

**Given:** A hereditary class $\mathcal C$, an Erdős–Hajnal constant $\epsilon$ for it, and a real $\delta$ with $0<\delta\le\epsilon$.

[L1] A positive real $c$ is an Erdős–Hajnal constant for $\mathcal C$ exactly when every nonempty $G\in\mathcal C$ satisfies $\operatorname{hom}(G)\ge |V(G)|^c$, with $a^c=\exp(c\log a)$ for $a>0$ ([[def-erdos-hajnal-property-and-constant]]).

[L2] The logarithm is strictly increasing and $\log 1=0$ ([[thm-natural-logarithm-laws]]).

[L3] The exponential function is strictly increasing on $\mathbb R$ ([[thm-exponential-is-strictly-increasing]]).

## Proof

**Proof technique:** direct.

1.1 Let $G\in\mathcal C$ be nonempty and put $n=|V(G)|\ge1$. [given]

1.2 If $n=1$, then $n^\delta=n^\epsilon=1$, so the required inequality follows from the one for $\epsilon$. [L1, algebra]

1.3 If $n>1$, then $\log n>0$ by [L2], and hence $\delta\log n\le\epsilon\log n$. [given, L2, algebra]

2.1 In the case $n>1$, [L3] and the real-power convention in [L1] give $n^\delta=\exp(\delta\log n)\le\exp(\epsilon\log n)=n^\epsilon$. [step 1.3, L1, L3]

3.1 In both cases, $\operatorname{hom}(G)\ge n^\epsilon\ge n^\delta$; since $G$ was arbitrary, $\delta$ is an Erdős–Hajnal constant for $\mathcal C$. [step 1.2, step 2.1, L1] ∎
