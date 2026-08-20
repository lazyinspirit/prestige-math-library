---
id: ex-picard-iteration-for-y-prime-equals-y
kind: example
title: "Picard iteration for $y'=y$, $y(0)=1$, recovers the exponential series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-picard-lindelof-local-existence-and-uniqueness, prop-picard-iteration-converges-with-explicit-error-bounds, thm-picard-iterates-for-exponential]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Example

For $y'=y$ and $y(0)=1$, start from $u_0(t)=1$. The Picard iterates are

$$u_m(t)=\sum_{k=0}^{m}\frac{t^k}{k!},$$

and converge uniformly on every bounded interval to $\exp t$, the unique solution.

## Facts & Assumptions

**Given:** The scalar Picard operator $(\mathcal Tu)(t)=1+\int_0^t u(s)ds$.

[L1] The iterates $u_r$ converge to $\exp$ uniformly on every bounded interval ([[thm-picard-iterates-for-exponential]]).

[L2] Picard-Lindelöf gives a unique local solution of the IVP ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

## Verification

**Proof technique:** direct.

1.1 The cited construction gives $u_m(t)=\sum_{k=0}^{m}t^k/k!$, beginning with $u_0=1$, and [L1] gives compact-uniform convergence to $\exp$. [given, L1]

2.1 The limit satisfies the Picard equation, and [L2] identifies it with the unique solution of $y'=y$, $y(0)=1$. [step 1.1, L2] ∎
