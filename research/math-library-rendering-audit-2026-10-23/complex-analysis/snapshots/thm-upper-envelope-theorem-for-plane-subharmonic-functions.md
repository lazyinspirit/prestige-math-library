---
id: thm-upper-envelope-theorem-for-plane-subharmonic-functions
kind: theorem
title: "The upper-semicontinuous regularization of a locally bounded-above subharmonic supremum is subharmonic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-upper-semicontinuous-regularization, thm-harmonic-majorant-characterization-of-plane-subharmonicity, lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]
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

Let $\mathcal F$ be a nonempty family of subharmonic functions on a complex domain
$\Omega$, and suppose that for every compact set $K\subseteq\Omega$ there is a
real number $M_K$ with $v\le M_K$ on $K$ for every $v\in\mathcal F$. Define
$$u(z)=\sup_{v\in\mathcal F}v(z),\qquad U=u^*.$$
Then $U$ is subharmonic on $\Omega$.

## Facts & Assumptions

**Given:** A locally bounded-above family $\mathcal F$ of subharmonic functions on a complex domain $\Omega$.

[L1] Finite maxima of subharmonic functions are subharmonic ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]).

[L2] A function is subharmonic exactly when every harmonic boundary majorant on a compactly contained disc majorizes it throughout that disc ([[thm-harmonic-majorant-characterization-of-plane-subharmonicity]]).

[L3] Upper-semicontinuous regularization is the least upper-semicontinuous majorant ([[def-upper-semicontinuous-regularization]]).

## Proof

**Proof technique:** direct.

1.1 For every compact set $K\subseteq\Omega$, the hypothesis gives a real number $M_K$ with $u\le M_K$ on $K$, so both $u$ and $U=u^*$ are locally bounded above and never take the value $+\infty$. Because $\mathcal F$ is nonempty and every $v\in\mathcal F$ satisfies $v\le u\le U$, the function $U$ is not identically $-\infty$ on any connected component. By [L3], $U$ is upper semicontinuous and satisfies $u\le U$. [given, L3]

2.1 Let $\overline{D(a,r)}\subseteq\Omega$ and let $h$ be continuous on the closure, harmonic on the disc, and satisfy $h\ge U$ on $\partial D(a,r)$. Because $u\le U$, one also has $h\ge u$ on the boundary. [step 1.1, given]

3.1 Fix any $v\in\mathcal F$. Since $h\ge v$ on $\partial D(a,r)$, [L2] gives $h\ge v$ on $D(a,r)$. The same is therefore true for every finite maximum of members of $\mathcal F$, and [L1] keeps those maxima subharmonic. Taking the supremum over all $v\in\mathcal F$ yields $h\ge u$ on $D(a,r)$. [L1, L2, step 2.1]

4.1 Since $h$ is continuous and dominates $u$, it also dominates the least upper-semicontinuous majorant $U$ by [L3]. Thus $h\ge U$ on $D(a,r)$. Another use of [L2] shows that $U$ is subharmonic on $\Omega$. [L2, L3, step 3.1] ∎
