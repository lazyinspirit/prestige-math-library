---
id: cor-the-class-of-all-graphs-is-not-erdos-hajnal
kind: corollary
title: "The hereditary class of all finite graphs does not have the Erdős–Hajnal property"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-erdos-hajnal-property-and-constant, thm-random-graph-logarithmic-homogeneous-set-upper-bound, thm-logarithm-slower-than-every-positive-power, thm-logarithm-change-of-base]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Chernikov, MATH 223M notes, sec. 3.1"
      url: "https://chernikov.umd.edu/teaching/19F-MATH223M/Notes.pdf"
pipeline_run: null
---

## Statement

The hereditary class of all finite graphs does not have the Erdős–Hajnal property.

## Facts & Assumptions

**Given:** The class $\mathcal G$ of all finite graphs.

[L1] A hereditary class has the Erdős–Hajnal property exactly when some $\epsilon>0$ satisfies $\operatorname{hom}(G)\ge|V(G)|^\epsilon$ for every nonempty graph in the class ([[def-erdos-hajnal-property-and-constant]]).

[L2] For every $n\ge16$, some $n$-vertex graph $G$ satisfies $\operatorname{hom}(G)<3\log_2n$ ([[thm-random-graph-logarithmic-homogeneous-set-upper-bound]]).

[L3] For every $\epsilon>0$, $\log x/x^\epsilon\to0$ as $x\to+\infty$ ([[thm-logarithm-slower-than-every-positive-power]]).

[L4] For $x>0$, $\log_2x=\log x/\log2$ ([[thm-logarithm-change-of-base]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $\mathcal G$ has an Erdős–Hajnal constant $\epsilon>0$. [assume-contra, L1]

1.2 By [L3] and [L4], choose an integer $n\ge16$ so large that $3\log_2n<n^\epsilon$. [L3, L4, choose]

2.1 Choose from [L2] an $n$-vertex graph $G$ with $\operatorname{hom}(G)<3\log_2n<n^\epsilon$, contradicting [L1] and step 1.1. Therefore $\mathcal G$ does not have the Erdős–Hajnal property. [step 1.1, step 1.2, L1, L2, discharge-contradiction] ∎
