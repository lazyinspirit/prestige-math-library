---
id: thm-plancherel
kind: theorem
title: Plancherel theorem
deps: ["thm-parseval-pairing-on-schwartz-space", "lem-schwartz-space-is-dense-in-l-two", "cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space", "thm-extension-of-a-bounded-map-from-a-dense-subspace", "def-l-p-space-as-a-quotient-by-null-functions", "lem-complex-lp-completeness-density-and-inner-product", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Theorem 14.10, p.383
---

## Statement

Assume countable choice and let $n\ge1$. Fourier transformation on Schwartz space extends uniquely to a surjective complex-linear isometry $\mathcal F_2:L^2(\mathbb R^n;\mathbb C)\to L^2(\mathbb R^n;\mathbb C)$. It preserves the first-variable-linear inner product, and hence is unitary.

## Facts & Assumptions

**Given:** An integer $n\ge1$, [[def-countable-choice]], and almost-everywhere classes as in [[def-l-p-space-as-a-quotient-by-null-functions]].

[F1] Schwartz Parseval preserves pairings and norms ([[thm-parseval-pairing-on-schwartz-space]]).

[F2] Schwartz classes are dense in complex $L^2$ ([[lem-schwartz-space-is-dense-in-l-two]]).

[F3] Fourier is onto Schwartz space ([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

[F4] A bounded linear map on a dense subspace into a Banach space extends uniquely under countable choice ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]]).

[F5] Complex $L^2$ is complete with the stated pairing and Cauchy–Schwarz ([[lem-complex-lp-completeness-density-and-inner-product]]).

## Proof

**Proof technique:** direct.

1.1 View Schwartz functions as a normed subspace of $L^2$: a continuous function vanishing a.e. vanishes everywhere, since any nonzero value persists on a positive-volume box. Thus the association with its class is injective. By [F1], Fourier is a bounded linear isometry on this dense subspace, and [F5] makes the target Banach. [F4] and [F2] give a unique bounded linear extension $\mathcal F_2$. For each fixed $f$, countable choice selects a sequence $u_k\in\mathcal S$ with $\|u_k-f\|_2<1/(k+1)$ for $k\in\mathbb N$; its Fourier images converge to $\mathcal F_2f$. The isometry on the subspace gives $\|\mathcal F_2f\|_2=\lim_k\|\widehat u_k\|_2=\lim_k\|u_k\|_2=\|f\|_2$. Independence of the sequence follows also from $\|\widehat u_k-\widehat v_k\|_2=\|u_k-v_k\|_2\to0$. [F1, F2, F4, F5, given]

2.1 For any $g\in L^2$, [F2] and countable choice give $v_k\in\mathcal S$ tending to $g$. By [F3], define the uniquely determined $u_k=\mathcal F^{-1}v_k\in\mathcal S$. By [F1], $\|u_k-u_l\|_2=\|v_k-v_l\|_2$, so [F5] gives a limit $u\in L^2$. Continuity of the extension in step 1.1 gives $\mathcal F_2u=\lim_kv_k=g$. Thus the extension is surjective. [step 1.1, F1, F2, F3, F5, given]

3.1 For approximants $u_k\to f$, $v_k\to g$, Cauchy–Schwarz in [F5] bounds $|\langle u_k,v_k\rangle-\langle f,g\rangle|$ by $\|u_k-f\|_2\|v_k\|_2+\|f\|_2\|v_k-g\|_2\to0$, since a convergent sequence is norm bounded. Apply the same estimate to their transform images and pass to the limit in [F1]. This proves pairing preservation. Steps 1.1 and 2.1 give the remaining unitary properties. Countable choice was used only in the cited interfaces and to select countable approximation sequences for each fixed input; no simultaneous arbitrary-index selection or Hilbert basis is needed. [step 1.1, step 2.1, F1, F5] ∎
