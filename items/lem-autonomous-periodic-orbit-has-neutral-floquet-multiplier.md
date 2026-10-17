---
id: lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier
kind: lemma
title: "An autonomous periodic orbit has a neutral Floquet multiplier"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-local-periodic-orbit-poincare-and-floquet-data
  - lem-c1-ode-flow-on-common-tube
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - thm-chain-rule-for-total-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
---

## Statement

Let $f$ be an autonomous $C^1$ vector field, let $\gamma(t)=\phi_t(x_*)$ be a nonconstant periodic solution of period $T>0$, and let $M=D_x\phi_T(x_*)$ be its monodromy matrix. Then
$$
M f(x_*)=f(x_*).
$$
In particular, $1$ is a Floquet multiplier.

## Facts & Assumptions

**Given:** The autonomous vector field, its $C^1$ local flow on a common tube through time $T$, and the nonconstant periodic solution $\gamma(T)=x_*$.

[F1] The variational derivative $D_x\phi_T(x_*)$ exists on a common compact tube ([[lem-c1-ode-flow-on-common-tube]]).

[F2] A $C^1$ autonomous field has a unique maximal $C^1$ flow with $\partial_t\phi_t(x)=f(\phi_t(x))$ ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]). Uniqueness gives $\phi_T(\phi_s(x_*))=\phi_{T+s}(x_*)$ wherever both sides are defined: as functions of the elapsed time, both sides solve the same IVP from $\phi_s(x_*)$.

[F3] Derivatives of compositions obey the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[F4] A monodromy matrix is the period-time variational fundamental matrix, and its eigenvalues are the Floquet multipliers ([[def-local-periodic-orbit-poincare-and-floquet-data]]).

## Proof
1.1 Nonconstancy implies $f(x_*)\ne0$: otherwise the constant curve through $x_*$ is an IVP solution, and uniqueness in [F2] forces $\gamma$ to be that constant curve. [given, F2]

2.1 Differentiate the flow identity in [F2] with respect to $s$ at $s=0$. The chain rule [F3] gives $D_x\phi_T(x_*)f(x_*)$ on the left, while the time derivative on the right is $f(\phi_T(x_*))=f(x_*)$. By [F1] the left derivative is the monodromy action, hence $Mf(x_*)=f(x_*)$. Since $f(x_*)\ne0$ by step 1.1, this is an eigenvector with eigenvalue $1$, which is a Floquet multiplier by [F4]. [F1, F2, F3, F4, step 1.1] ∎
