---
id: def-cohomological-spectral-sequence
kind: definition
title: Cohomological spectral sequence
deps: ["def-homological-spectral-sequence"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
---



## Definition

A **cohomological spectral sequence in an abelian category** $\mathcal A$ has
objects $E_r^{p,q}$ of $\mathcal A$ for $r\ge r_0\ge0$ and square-zero maps
$$d_r:E_r^{p,q}\to E_r^{p+r,q-r+1},$$
with specified isomorphisms
$H(E_r,d_r)^{p,q}\to E_{r+1}^{p,q}$ in $\mathcal A$. Its total degree is
$p+q$, raised by one by $d$. Equivalently it is a
[[def-homological-spectral-sequence]] in the same abelian category under
$E_r^{p,q}=E^r_{-p,-q}$: negating the target indices
$(-p-r,-q+r-1)$ gives $(p+r,q-r+1)$. Negating again recovers the homological
sequence, including its transition data.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
