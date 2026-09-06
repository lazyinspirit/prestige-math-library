---
id: thm-continuous-maps-preserve-convergence-in-probability
kind: theorem
title: "Continuous maps preserve convergence in probability"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-probability, lem-pairing-preserves-convergence-in-probability]
proof_strategy: direct
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Theorem 3.14"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Let $f:\mathbb R^d\to\mathbb R^k$ be continuous, and suppose that, for every
$\varepsilon>0$,
$$\mathbb P(\|Z_n-Z\|>\varepsilon)\longrightarrow0.$$
Then, for every $\varepsilon>0$,
$$\mathbb P(\|f(Z_n)-f(Z)\|>\varepsilon)\longrightarrow0.$$
In particular, coordinate pairing gives stability under sums and products; it
gives quotients whenever the limiting denominator is nonzero almost surely,
defining the quotient arbitrarily where the approximating denominator is zero.

## Facts & Assumptions

**Given:** A continuous $f:\mathbb R^d\to\mathbb R^k$ and the displayed norm-tail convergence of $Z_n$ to $Z$.

[L1] The displayed hypothesis directly says that every fixed-distance bad
event for $Z_n-Z$ has probability tending to zero.

[L2] Coordinatewise probability convergence gives probability convergence of pairs ([[lem-pairing-preserves-convergence-in-probability]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\varepsilon,\eta>0$. Choose a compact cube $K$ with $\mathbb P(Z\notin K)<\eta$ and a compact cube $K'$ containing every point within distance $1$ of $K$. Uniform continuity of $f$ on $K'$ gives $\delta\in(0,1)$ such that points of $K'$ within $\delta$ have $f$-images within $\varepsilon$. [choose]

2.1 If $Z\in K$ and $\|Z_n-Z\|<\delta$, then $Z_n\in K'$ and $\|f(Z_n)-f(Z)\|<\varepsilon$. Thus the image bad-event probability is at most $\eta+\mathbb P(\|Z_n-Z\|\ge\delta)$, which is at most $\eta+\mathbb P(\|Z_n-Z\|>\delta/2)$. Its limsup is at most $\eta$ by [L1]. Letting $\eta\downarrow0$ proves the claim. [step 1.1, L1]

3.1 Apply [L2] and the claim to $(x,y)\mapsto x+y$ and $(x,y)\mapsto xy$. For division, first restrict to $|y|\ge r$ and then let $r\downarrow0$; the limiting denominator is nonzero almost surely, and the zero-denominator convention for the approximating pair is contained in the remaining event. [step 2.1, L2] ∎
