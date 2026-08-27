---
id: fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic
kind: false-statement
title: "FALSE: an arbitrary pointwise supremum of subharmonic functions is subharmonic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity, thm-upper-envelope-theorem-for-plane-subharmonic-functions]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
---

## Statement refuted

The pointwise supremum of an arbitrary family of subharmonic functions is
always subharmonic.

## Facts & Assumptions

**Given:** For each $n\ge1$, the function $u_n(z)=\max\{n\operatorname{Re}z,-1\}$ on the unit disc.

[L1] Finite maxima of subharmonic functions are subharmonic; in particular, the maximum of a harmonic function and a constant is subharmonic ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]).

[L2] The upper-envelope theorem requires a locally bounded-above family before taking a supremum and then regularizing it ([[thm-upper-envelope-theorem-for-plane-subharmonic-functions]]).

## Refutation

**Proof technique:** direct.

1.1 The function $\operatorname{Re}z$ is harmonic on the unit disc, so $n\operatorname{Re}z$ is harmonic for each $n$. By [L1], each [L1, given, algebra] $$u_n(z)=\max\{n\operatorname{Re}z,-1\}$$ is subharmonic. [L1, given, algebra]

2.1 Their pointwise supremum is [step 1.1, algebra] $$u(z)=\sup_n u_n(z)=\begin{cases}\operatorname{Re}z,& \operatorname{Re}z<0,\\ 0,& \operatorname{Re}z=0,\\ +\infty,& \operatorname{Re}z>0.\end{cases}$$ This function is not even finite-valued on the right half-disc, so it cannot be subharmonic in the page's convention. [step 1.1, algebra]

3.1 Therefore the arbitrary-supremum claim is false. Step 2.1 is also exactly why [L2] insists on local boundedness above and upper-semicontinuous regularization. [L2, step 2.1] ∎
