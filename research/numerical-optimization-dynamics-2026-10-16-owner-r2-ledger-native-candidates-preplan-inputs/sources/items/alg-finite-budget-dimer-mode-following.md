---
id: alg-finite-budget-dimer-mode-following
kind: algorithm
title: "Finite-budget dimer rotation and saddle translation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - lem-dimer-central-force-hessian-vector-error
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Graeme Henkelman and Hannes Jónsson, A dimer method for finding saddle points on high dimensional potential surfaces using only first derivatives"
      url: "https://hj.hi.is/papers/paperDimer.pdf"
      locator: "§II A–C, equations (2)–(3), (18), and (21): paired-force curvature estimate, rotation, and modified translation force"
---

## Definition

Let $U,V$ be as in [[def-regular-minimum-energy-path-in-a-collision-free-tube]]. **Inputs:** $x_0\in U$, a unit vector $v_0$, finite-difference distance $\epsilon>0$, force-evaluation error bound $\eta\ge0$, rotation step $\alpha>0$, rotation tolerance $\tau_{\rm rot}\ge0$, force tolerance $\tau_F\ge0$, rotation cap $J\in\mathbb N_0$, translation step $\sigma>0$, and translation cap $K\in\mathbb N_0$. Return the last point, direction, reported residuals, and a status from `force-tolerance`, `mode-unverified`, `rotation-cap`, `translation-cap`, `geometry-failure`, `rotation-failure`, or `nonfinite-evaluation`.

At each translation iteration, start with the current unit direction $v$. For at most $J$ rotations:

1. If $x\pm\epsilon v\notin U$, return `geometry-failure`. Evaluate approximate gradients $\widehat g_\pm$ at $x\pm\epsilon v$ with the declared error bound, and form $D_\epsilon=(\widehat g_+-\widehat g_-)/(2\epsilon)$. Nonfinite data return `nonfinite-evaluation`.
2. Set $r_{\rm rot}=\|(I-vv^T)D_\epsilon\|_2$. If $r_{\rm rot}\le\tau_{\rm rot}$, end this rotation loop. Otherwise set $w=v-\alpha(I-vv^T)D_\epsilon$. If $w=0$, return `rotation-failure`; else replace $v$ by $w/\|w\|_2$.

If the rotation cap is reached before the residual test succeeds, return `rotation-cap` with the last direction. A small rotational residual by itself does not certify that the direction is the lowest eigenmode. If no validated spectral-gap or mode-tracking certificate is supplied, label the mode status `mode-unverified`.

After a rotation residual passes, evaluate $\widehat g(x)$ with error at most $\eta$. If it is nonfinite, return `nonfinite-evaluation`. If $\|\widehat g(x)\|_2\le\tau_F$, return `force-tolerance` together with the mode status. If the translation cap has been reached, return `translation-cap`. Otherwise update

$$x^+=x+\sigma\bigl[-\widehat g(x)+2(\widehat g(x)^Tv)v\bigr].$$

If $x^+\notin U$, return `geometry-failure`; otherwise set $x\leftarrow x^+$ and repeat. This finite procedure makes no arbitrary-start, termination, saddle-convergence, or global-transition claim.
