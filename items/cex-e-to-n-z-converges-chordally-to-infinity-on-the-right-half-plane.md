---
id: cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane
kind: counterexample
title: "The family e^(nz) converges chordally to infinity on the right half-plane without being holomorphically normal there"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-chordal-local-uniform-convergence-and-meromorphic-normality, thm-chordal-limit-theorem-for-meromorphic-functions, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-normal-family-of-holomorphic-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Statement refuted

If a holomorphic family converges chordally locally uniformly to $\infty$, then it
is normal in the holomorphic sense of finite-valued locally uniform limits.

## Facts & Assumptions

**Given:** The right half-plane $H=\{z\in\mathbb C:\operatorname{Re}z>0\}$ and the sequence $f_n(z)=e^{nz}$.

[L1] For real $x,y$, one has $|e^{x+iy}|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L2] Normal holomorphic families are defined by subsequences with finite-valued holomorphic locally uniform limits ([[def-normal-family-of-holomorphic-functions]]).

## Counterexample

**Proof technique:** direct.

1.1 If $K\subseteq H$ is compact, then some $\delta>0$ satisfies $\operatorname{Re}z\ge\delta$ on $K$, and [L1] gives $|f_n(z)|\ge e^{n\delta}$. Therefore $\chi(f_n(z),\infty)=2/\sqrt{1+|f_n(z)|^2}\le2e^{-n\delta}$ on $K$, so $f_n\to\infty$ chordally locally uniformly on $H$. [L1, given, choose, algebra]

2.1 Every subsequence has the same chordal limit $\infty$, so no subsequence can converge locally uniformly to a finite holomorphic function. By [L2], the family is not normal in the finite-valued holomorphic sense. [L2, given] ∎
