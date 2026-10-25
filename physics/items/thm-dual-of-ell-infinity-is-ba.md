---
id: thm-dual-of-ell-infinity-is-ba
kind: theorem
title: "The dual of ell-infinity is ba"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finitely-additive-integral-is-well-defined-and-isometric, def-dual-space-of-a-normed-space]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Michael Müger, Introduction to Functional Analysis"
      url: "https://www.math.ru.nl/~mueger/functionalanalysis.pdf"
      locator: "Theorem B.18 and complete proof, printed pp.192-193"
pipeline_run: phase-2-next-18
---

## Statement

The map

$$\Phi:(\ell^\infty)^*\longrightarrow ba(\mathcal P(\mathbb N)), \qquad \Phi(\varphi)(A):=\varphi(\mathbf1_A),$$

is a linear isometric isomorphism. Its inverse sends $\nu$ to the finitely
additive integral $I_\nu$.

## Facts & Assumptions

[L1] For each finite-variation charge, $I_\nu$ is a bounded functional and $\|I_\nu\|=|\nu|(\mathbb N)$ ([[lem-finitely-additive-integral-is-well-defined-and-isometric]]).

[L2] The dual consists of bounded scalar-valued linear functionals with the operator norm ([[def-dual-space-of-a-normed-space]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 Let $\varphi\in(\ell^\infty)^*$ and put $\nu_\varphi(A)=\varphi(\mathbf1_A)$. Linearity and $\mathbf1_{A\sqcup B}=\mathbf1_A+\mathbf1_B$ give finite additivity. For a finite partition $(A_j)$ choose scalar phases $c_j$ with $c_j\nu_\varphi(A_j)=|\nu_\varphi(A_j)|$. Then $\|\sum_jc_j\mathbf1_{A_j}\|_\infty=1$ and [L2] gives [given, L2]

$$\sum_j|\nu_\varphi(A_j)| =\varphi\left(\sum_jc_j\mathbf1_{A_j}\right)\le\|\varphi\|.$$

Thus $\nu_\varphi\in ba$ and $\|\nu_\varphi\|_{ba}\le\|\varphi\|$. [L2, finite additivity, phases]

2.1 By construction, $I_{\nu_\varphi}(\mathbf1_A)=\varphi(\mathbf1_A)$. [given, L1, step 1.1] Linearity gives equality on finite-range sequences, and density plus boundedness gives $I_{\nu_\varphi}=\varphi$ on $\ell^\infty$. [L1, step 1.1, algebra]

3.1 Conversely, $\Phi(I_\nu)(A)=I_\nu(\mathbf1_A)=\nu(A)$, so the two maps are [given, L1, step 2.1] inverse. Finally [L1] gives $\|I_\nu\|=\|\nu\|_{ba}$, proving isometry and completing both surjectivity and injectivity. [L1, step 2.1] ∎