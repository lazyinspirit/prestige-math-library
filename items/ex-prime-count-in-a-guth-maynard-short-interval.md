---
id: ex-prime-count-in-a-guth-maynard-short-interval
kind: example
title: "A Prime Count in a Guth–Maynard Short Interval"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-real-power
  - thm-guth-maynard-primes-in-short-intervals
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Guth and Maynard, Corollary 1.3"
      url: "https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v"
---

## Example

Assume the Guth–Maynard prime-count theorem in the form stated for intervals $y\in[x^{17/30+\varepsilon},x^{99/100}]$. At $\varepsilon=1/60$, it gives the prime-count asymptotic for each sufficiently large $x$ and every $y\in[x^{7/12},x^{99/100}]$.

## Example references

[Guth and Maynard, Corollary 1.3](https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v)

## Facts & Assumptions

**Given:** A sufficiently large real $x>1$, a real $y$ with $x^{7/12}\le y\le x^{99/100}$, and the stated Guth–Maynard prime-count theorem as an explicit hypothesis for this example.

[A1] [[thm-guth-maynard-primes-in-short-intervals]]: For each fixed $\varepsilon>0$, there are constants $C_\varepsilon,x_\varepsilon>0$ such that for every real $x\ge x_\varepsilon$ and every real $y$ with $x^{17/30+\varepsilon}\le y\le x^{99/100}$,
$$\left|\pi(x+y)-\pi(x)-\frac{y}{\log x}\right|\le C_\varepsilon y\exp\!\left(- (\log x)^{1/4}\right).$$

## Verification

1.1 Substituting $\varepsilon=1/60$ gives $17/30+1/60=35/60=7/12$. [given, algebra]

2.1 Since $7/12<99/100$ and $x>1$, exponentiation preserves the inequality and $x^{7/12}<x^{99/100}$. Thus every $y$ in the stated interval lies in the theorem's parameter range. [given, step 1.1, algebra]

3.1 Apply the explicitly assumed theorem [A1] with $\varepsilon=1/60$. Since steps 1.1 and 2.1 verify the lower and upper parameter bounds, respectively, it gives $\left|\pi(x+y)-\pi(x)-\frac{y}{\log x}\right|\le C_{1/60}y\exp\!\left(- (\log x)^{1/4}\right)$, where $C_{1/60}$ is the theorem's constant for this fixed epsilon. [A1, step 1.1, step 2.1, given] ∎
