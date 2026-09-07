---
id: "cor-regular-local-residue-field-projective-dimension-dimension"
kind: "corollary"
title: "regular local residue field projective dimension dimension"
deps: ["lem-regular-local-residue-field-koszul-resolution", "lem-projective-dimension-from-last-nonzero-betti-number", "cor-betti-number-is-rank-in-minimal-resolution", "cor-complete-intersection-betti-numbers-binomial"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "12.27 and 12.33, pp.121–123"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, $\operatorname{pd}_Rk=d$ and $\beta_i^R(k)=\binom di$ for $0\le i\le d$, with $\beta_i^R(k)=0$ for $i>d$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-regular-local-residue-field-koszul-resolution]]: For a regular local ring $(R,\mathfrak m,k)$ of dimension $d$, the Koszul complex on any regular system of parameters is a minimal free resolution of $k$ of length $d$.

[F2] [[lem-projective-dimension-from-last-nonzero-betti-number]]: For a nonzero finite module $M$ over a nonzero Noetherian local ring, $\operatorname{pd}_RM=\sup\{i\ge0:\beta_i^R(M)\ne0\}$, allowing infinity. For each integer $q\ge0$, $\operatorname{pd}_RM\le q$ if and only if $\operatorname{Tor}_{q+1}^R(k,M)=0$.

[F3] [[cor-betti-number-is-rank-in-minimal-resolution]]: For every minimal degreewise finite free resolution $F_\bullet\to M$ of a finite module over a nonzero Noetherian local ring, $\beta_i^R(M)=\operatorname{rank}_RF_i$ for all $i\ge0$.

[F4] [[cor-complete-intersection-betti-numbers-binomial]]: For a length-$n$ regular sequence in the maximal ideal of a local ring, the minimal Koszul resolution has $\beta_i^K=\binom ni$ for $0\le i\le n$ and $0$ otherwise.

## Proof

1.1 The minimal Koszul resolution has degree-$i$ rank $\binom di$, and is zero above $d$. The Koszul rank formula and the general minimal-resolution rank formula identify these with the stated Betti numbers. [F1, F4, F3]

2.1 The top rank $\binom dd=1$ is nonzero, so the projective-dimension criterion gives exactly $d$, not merely an upper bound. For $d=0$ the sole rank is $\beta_0(k)=1$. [F2, step 1.1, algebra] ∎
