---
id: def-homological-spectral-sequence
kind: definition
title: Homological spectral sequence
deps: ["def-abelian-category", "def-homology-object-of-a-chain-complex"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
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
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
---



## Definition

A **homological spectral sequence** in an abelian category ([[def-abelian-category]]), starting at a specified integer $r_0\ge0$, consists of objects $E^r_{p,q}$, maps
$$d^r_{p,q}:E^r_{p,q}\to E^r_{p-r,q+r-1},\qquad d^rd^r=0,$$
for r≥r₀ and p,q∈ℤ, and specified isomorphisms
$$\alpha_r:\frac{\ker(d^r_{p,q})}{\operatorname{im}(d^r_{p+r,q-r+1})}\xrightarrow{\sim}E^{r+1}_{p,q}.$$
The quotient has the meaning of [[def-homology-object-of-a-chain-complex]]; no direct sum of the whole family is assumed. The isomorphisms are data. **First quadrant** means the initial page vanishes unless p,q≥0; **third quadrant** means it vanishes unless p,q≤0. **Bounded** means that for each integer n only finitely many initial-page terms with p+q=n are nonzero. These support conditions persist because later terms are subquotients of earlier ones.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
