---
id: lem-shin-radial-smooth-cutoff
kind: lemma
title: "A smooth radial profile with a prescribed inner plateau"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [lem-schwartz-cutoffs-from-the-standard-smooth-step, thm-chain-rule-for-total-derivatives]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Semyon Dyatlov, MIT 18.155 notes (source inherited through the local cutoff supplier; no new retrieval claimed)"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Provenance of the proved local cutoff supplier, not a claim of a new source reading"
---

## Statement

There exists $b\in C_c^\infty(\mathbb R)$ with $0\le b\le1$, $b(x)=1$ for $|x|\le1$, and $b(x)=0$ for $|x|\ge2$, such that the profile $\chi:[0,\infty)\to\mathbb R$ defined by $\chi(r)=b(4r)$ is the restriction of a smooth function on $\mathbb R$, equals $1$ for $0\le r\le1/4$, and equals $0$ for $r\ge1/2$.

Here $C_c^\infty(\mathbb R)$ denotes the infinitely differentiable, compactly supported real-valued functions.

## Facts & Assumptions

**Given:** A one-dimensional smooth cutoff with unit plateau radius $1$ and support radius $2$ as stated in [F1].

[F1] In dimension one there exists $b\in C_c^\infty(\mathbb R)$ with $0\le b\le1$, $b=1$ on $|x|\le1$, and $b=0$ on $|x|\ge2$ ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[F2] Composition of a smooth function with an affine map is smooth, by the chain rule ([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Choose $b$ supplied by [F1] and set $\chi(r)=b(4r)$ for $r\ge0$. [F1, choose]

2.1 The function $x\mapsto b(4x)$ is smooth by [F2], so its restriction is the stated smooth profile. If $0\le r\le1/4$, then $|4r|\le1$ and $b(4r)=1$; if $r\ge1/2$, then $|4r|\ge2$ and $b(4r)=0$. The bounds on $b$ are inherited by composition. [step 1.1, F1, F2, algebra] ∎

