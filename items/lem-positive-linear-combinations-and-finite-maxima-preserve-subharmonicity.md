---
id: lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
kind: lemma
title: "Positive linear combinations and finite maxima preserve subharmonicity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-subharmonic-function,
       thm-harmonic-majorant-characterization-of-plane-subharmonicity,
       thm-plane-subharmonic-functions-are-locally-integrable]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a complex domain.

1. If $u_1,\dots,u_m$ are subharmonic on $\Omega$ and
   $\alpha_1,\dots,\alpha_m\ge0$, then
   $$\alpha_1u_1+\cdots+\alpha_mu_m$$
   is subharmonic on $\Omega$, where terms with $\alpha_j=0$ are omitted (so
   an all-zero combination is the zero function).
2. If $u_1,\dots,u_m$ are subharmonic on $\Omega$, then
   $$u(z)=\max\{u_1(z),\dots,u_m(z)\}$$
   is subharmonic on $\Omega$.

## Facts & Assumptions

**Given:** Subharmonic functions $u_1,\dots,u_m$ on a complex domain $\Omega$.

[L1] Subharmonicity is equivalent to harmonic comparison on compactly contained discs ([[thm-harmonic-majorant-characterization-of-plane-subharmonicity]]).

[L2] The defining submean inequality for subharmonicity is linear in the function being averaged ([[def-plane-subharmonic-function]]).

[L3] A subharmonic function is finite almost everywhere
([[thm-plane-subharmonic-functions-are-locally-integrable]]).

## Proof

**Proof technique:** direct.

1.1 Let $I=\{j:\alpha_j>0\}$. If $I$ is empty, the combination is the harmonic zero function. Otherwise it means the well-defined extended-real sum $\sum_{j\in I}\alpha_ju_j$; no product $0\cdot(-\infty)$ occurs. Finite sums with positive coefficients preserve upper semicontinuity, and [L3] shows that all summands are finite simultaneously almost everywhere, so their sum is not identically $-\infty$. On any closed disc, multiply the submean inequality for $u_j$ by $\alpha_j>0$ and sum over $I$ to obtain the submean inequality for the combination. [given, L2, L3, algebra]

1.2 For the finite maximum, upper semicontinuity is preserved by finite maxima. Let $\overline{D(a,r)}\subseteq\Omega$ and let $h$ be continuous on the closure, harmonic on the disc, and satisfy $h\ge\max(u_1,\dots,u_m)$ on the boundary. Then $h\ge u_j$ on the boundary for every $j$, so [L1] gives $h\ge u_j$ throughout the disc for every $j$. Therefore $h\ge\max(u_1,\dots,u_m)$ on the disc. Another use of [L1] shows that the maximum is subharmonic. [L1, given]

2.1 Steps 1.1 and 1.2 prove the two closure properties. [step 1.1, step 1.2] ∎
