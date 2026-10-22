---
id: ex-csm-frontier-ising-coupling-conversion
kind: example
title: "Square-lattice Ising critical coupling from the two-state Potts model"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 7
deps:
  - thm-csm-frontier-potts-square-critical-temperature
dependency_roles:
  thm-csm-frontier-potts-square-critical-temperature: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vincent Beffara and Hugo Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Section 1, pp. 1–2: the q = 2 Potts model is the Ising model and its critical value is noted there; Theorem 3 is stated only for q > 2."
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapter 1 §§1.2–1.4: Potts/Ising interaction and finite FK coupling conventions."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

On $\Lambda_n=[-n,n]^2\cap\mathbb Z^2$, let $E_n$ be the nearest-neighbor edges with both endpoints in $\Lambda_n$ and fix plus boundary spins $\sigma_x=+1$ whenever $\lVert x\rVert_\infty=n$. For $\sigma_x\in\{-1,+1\}$, define the finite-volume Ising Hamiltonian and Gibbs law by
$$H_{I,n}(\sigma)=-J_I\sum_{\{x,y\}\in E_n}\sigma_x\sigma_y,\qquad \mathbb P_{\beta,n}^{I,+}(\sigma)\propto e^{-\beta H_{I,n}(\sigma)},\quad J_I>0.$$
Define $m_I^+(\beta):=\lim_{n\to\infty}\mathbb P_{\beta,n}^{I,+}(\sigma_0=+1)-1/2$ when the limit exists, and $\beta_c^I:=\inf\{\beta>0:m_I^+(\beta)>0\}$. The limit exists and
$$\beta_c^I J_I=\tfrac12\log(1+\sqrt2).$$

## Example references

[[thm-csm-frontier-potts-square-critical-temperature]]

## Facts & Assumptions

**Given:** The Ising interaction above, $J_I>0$, and the square-lattice $Q=2$ Potts critical-temperature theorem.

[F1] For $\sigma_x,\sigma_y\in\{-1,+1\}$, $\mathbf1_{\{\sigma_x=\sigma_y\}}=(1+\sigma_x\sigma_y)/2$ by checking the two possible products $+1$ and $-1$.

[F2] For the two-state Potts model with energy $-J_P\sum_{\{x,y\}}\mathbf1_{\{\tau_x=\tau_y\}}$, its critical inverse temperature $\beta_c^P$ satisfies $\beta_c^P J_P=\log(1+\sqrt2)$ ([[thm-csm-frontier-potts-square-critical-temperature]]).

## Verification

**Proof technique:** direct coupling conversion.

1.1 For each finite box and edge, [F1] gives $-J_P\mathbf1_{\{\sigma_x=\sigma_y\}}=-(J_P/2)\sigma_x\sigma_y-J_P/2$. Setting $J_P=2J_I$ makes the finite Potts Hamiltonian equal to $H_{I,n}(\sigma)-J_I|E_n|$. The difference is independent of $\sigma$, so it cancels from the normalized finite Gibbs probabilities. The boundary color $1$ in the Potts model corresponds to the Ising plus spin $+1$. Thus the two models have the same plus-boundary probabilities and the same critical inverse temperature. [F1, algebra]

2.1 Let $\beta_c^P$ and $\beta_c^I$ denote the critical inverse temperatures in the two definitions. Step 1.1 gives $\beta_c^I=\beta_c^P$. By [F2] with $J_P=2J_I$, $\beta_c^P(2J_I)=\log(1+\sqrt2)$. Divide by $2$ to obtain $\beta_c^I J_I=\tfrac12\log(1+\sqrt2)$. This is an exact coupling conversion; the constant energy shift does not affect probabilities. [F2, step 1.1, algebra] ∎

## Remarks

The factor of two comes from $\mathbf1_{\{\sigma_x=\sigma_y\}}=(1+\sigma_x\sigma_y)/2$; no critical exponent or transition order is inferred.
