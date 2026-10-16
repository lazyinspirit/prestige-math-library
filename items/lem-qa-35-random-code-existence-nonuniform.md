---
id: lem-qa-35-random-code-existence-nonuniform
kind: lemma
title: "Random linear-size fingerprint code exists nonuniformly"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps: ["def-qa-35-code-fingerprint-state", "def-finite-probability-space-and-event", "lem-chernoff-bound-for-bernoulli-trials"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Harry Buhrman, Richard Cleve, John Watrous, Ronald de Wolf, Quantum Fingerprinting"
      url: https://arxiv.org/pdf/quant-ph/0102001
      locator: "Complete 8-page paper, especially §2, PDF pp.2–4, code fingerprints and swap-test analysis."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
---

## Statement

For every n≥1 there is a map E:{0,1}ⁿ→{0,1}^(32n) of relative distance at least 1/4. Choosing the lexicographically first such codebook defines a nonuniform family; this argument gives no efficient uniform encoder.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and a uniformly random map $E:\{0,1\}^n\to\{0,1\}^{32n}$ whose output bits are mutually independent and uniform.

[F1] [[lem-chernoff-bound-for-bernoulli-trials]]: For independent Bernoulli$(p)$ trials of mean $\mu$, $\Pr(S\le(1-\alpha)\mu)\le\exp(-\alpha^2\mu/2)$ for $0<\alpha<1$.

[F2] [[def-finite-probability-space-and-event]]: A finite probability space assigns nonnegative weights summing to one, and every subset of outcomes is an event.

## Proof

**Proof technique:** probabilistic method on a finite probability space.

1.1 Fix distinct $x,y$. In each coordinate, the independent random bits $E_i(x),E_i(y)$ disagree with probability $1/2$, independently across the $32n$ coordinates. Thus their Hamming distance $S$ is a sum of independent Bernoulli$(1/2)$ variables with mean $16n$. By [F1] with $\alpha=1/2$, $\Pr(S\le8n)\le e^{-2n}$. [given, F1, F2, algebra]

2.1 Order the $2^n$ inputs lexicographically and index the $\binom{2^n}{2}<2^{2n}$ unordered pairs by $x<y$. For each such pair, let $B_{xy}$ be the event that its distance is below $8n$. On every codebook, the indicator of $\bigcup_{x<y}B_{xy}$ is at most $\sum_{x<y}\mathbf 1_{B_{xy}}$; summing this pointwise inequality against the finite probability weights in [F2] gives the union bound $\Pr(\bigcup_{x<y}B_{xy})\le\sum_{x<y}\Pr(B_{xy})$. By step 1.1 this is at most $2^{2n}e^{-2n}=e^{(2\ln2-2)n}<1$, since $\ln2=\int_1^2du/u<1$. Hence some finite codebook has every pairwise distance at least $8n$, which is relative distance at least $1/4$. For each $n$, order all finite codebooks lexicographically and choose the first one with this property; this defines a nonuniform family without an arbitrary-choice axiom. The exhaustive selection gives no polynomial-time construction or efficient uniform encoder. [step 1.1, F1, F2, algebra, choose] ∎
