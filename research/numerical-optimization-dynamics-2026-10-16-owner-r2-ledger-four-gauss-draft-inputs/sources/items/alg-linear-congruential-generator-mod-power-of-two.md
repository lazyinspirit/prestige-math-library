---
id: alg-linear-congruential-generator-mod-power-of-two
kind: algorithm
title: "Linear congruential generator modulo a power of two"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. Jung, Monte-Carlo Methods lecture notes, §3.1 and Theorem 3.6"
      url: "https://jjung.perso.univ-pau.fr/Enseignements/AlgoAv/MonteCarlo.pdf"
verification:
  precheck: n/a
---

## Definition

Let $w\ge2$, $M=2^w$, integers $a,c$, and a seed $x_0\in\{0,\ldots,M-1\}$ be inputs. For an integer $r$, $[r]_M$ denotes the unique residue in $\{0,\ldots,M-1\}$ congruent to $r$ modulo $M$. The state sequence and returned midpoint word are
$$x_{n+1}=[ax_n+c]_M,\qquad u_n=\frac{x_n+1/2}{M}\quad(n\ge0).$$
The output is the deterministic state sequence, or its midpoint conversion $u_n\in(0,1)$. A full-period LCG is the special case $a\equiv1\pmod4$ and $c$ odd; its period is proved separately. A seed chosen at random is a distinct probability model, not part of this deterministic procedure.

## Remarks

An LCG has finite state and therefore eventually repeats. Full period and uniform one-time marginals do not assert independence of successive states. The output conversion uses midpoints to avoid exact values $0$ and $1$.
