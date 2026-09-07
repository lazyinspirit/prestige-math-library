---
id: thm-weak-maximum-principle-for-the-laplacian
kind: theorem
title: "Weak maximum principle for the laplacian"
status: draft
origin: pipeline
deps: [lem-strict-subharmonic-perturbation, thm-heine-borel-rn, thm-extreme-value-metric]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Theorem 2.17 and following subharmonic extension, pp.27–28"
---

## Statement

Let $n\ge2$ and let $\Omega\subseteq\mathbb R^n$ be bounded, nonempty and open. If $u\in C^2(\Omega)\cap C(\overline\Omega)$ and $\Delta u\ge0$, then
$$\max_{\overline\Omega}u=\max_{\partial\Omega}u.$$
No connectedness or boundary smoothness is required.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Adding $\varepsilon|x|^2$ to a subharmonic function, with $\varepsilon>0$, excludes interior local maxima. ([[lem-strict-subharmonic-perturbation]]).

[F2] A Euclidean subset is compact if and only if it is closed and bounded. ([[thm-heine-borel-rn]]).

[F3] A continuous real function on a nonempty compact metric space attains its maximum and minimum. ([[thm-extreme-value-metric]]).

## Proof

**Proof technique:** direct.

1.1 Choose $R>0$ with $\overline\Omega\subseteq\overline B_R(0)$. The closure is nonempty compact. For each $\varepsilon>0$, continuity makes $u_\varepsilon=u+\varepsilon|x|^2$ attain its maximum on that closure. [F2, F3, given]

2.1 The maximizer cannot lie in $\Omega$, so it lies in $\partial\Omega$. In particular the boundary is nonempty; it is closed and bounded, hence compact, and $m=\max_{\partial\Omega}u$ exists. [F1, F2, F3, step 1.1]

3.1 For every $x\in\overline\Omega$, $u(x)\le u_\varepsilon(x)\le m+\varepsilon R^2$. Letting $\varepsilon\downarrow0$ yields $u(x)\le m$. Since a boundary maximizer belongs to the closure, equality of the maxima follows. [step 2.1, algebra] ∎
