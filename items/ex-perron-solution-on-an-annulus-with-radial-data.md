---
id: ex-perron-solution-on-an-annulus-with-radial-data
kind: example
title: "The Perron solution on an annulus with constant radial boundary data is logarithmic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-perron-solves-dirichlet-on-regular-plane-domains, thm-exterior-disc-and-exterior-cone-points-are-regular, cor-uniqueness-for-the-bounded-plane-dirichlet-problem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Boris Khoruzhenko, Potential Theory lecture notes"
      url: "https://www.yumpu.com/en/document/view/12029492/potential-theory"
---

## Example

Let $A_{r,R}=\{z\in\mathbb C:r<|z|<R\}$ with $0<r<R$, and prescribe the constant
boundary values
$$u=\alpha\quad\text{on }|z|=r,\qquad u=\beta\quad\text{on }|z|=R.$$
Then the Perron solution is
$$u(z)=\alpha+\frac{\beta-\alpha}{\log(R/r)}\log\frac{|z|}{r}.$$

## Facts & Assumptions

**Given:** Radii $0<r<R$, real constants $\alpha,\beta$, and the annulus $A_{r,R}$.

[L1] Exterior-disc points are regular, so a bounded domain with that property at every boundary point has a unique Perron Dirichlet solution ([[thm-exterior-disc-and-exterior-cone-points-are-regular]], [[thm-perron-solves-dirichlet-on-regular-plane-domains]]).

[L2] Continuous harmonic extensions on a bounded domain are unique ([[cor-uniqueness-for-the-bounded-plane-dirichlet-problem]]).

## Verification

**Proof technique:** direct.

1.1 Every point of the two boundary circles of $A_{r,R}$ admits an exterior disc, so [L1] makes the annulus regular and hence ensures existence of a Perron solution. [L1, given]

1.2 The function [given, algebra]
$$h(z)=\alpha+\frac{\beta-\alpha}{\log(R/r)}\log\frac{|z|}{r}$$
is harmonic on $A_{r,R}$ because $\log|z|$ is harmonic away from $0$, and it satisfies $h=\alpha$ on $|z|=r$ and $h=\beta$ on $|z|=R$. [given, algebra]

2.1 By step 1.1, the Perron solution exists; by step 1.2, $h$ is a continuous harmonic function on the closure of the annulus with the required boundary data. The uniqueness statement [L2] therefore forces the Perron solution to equal $h$. [L2, step 1.1, step 1.2] ∎
