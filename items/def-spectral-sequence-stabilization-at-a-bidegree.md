---
id: def-spectral-sequence-stabilization-at-a-bidegree
kind: definition
title: Spectral sequence stabilization at a bidegree
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

A [[def-homological-spectral-sequence]] **stabilizes at $(p,q)$** if there is R such that for every r≥R both the incoming and outgoing differentials at that position are zero. Then their homology quotient is canonically $E^r_{p,q}$, and α supplies identifications with every subsequent term. Isomorphism of the underlying objects alone does not assert this vanishing.

For an abstract sequence, its terms can be represented as nested subquotients of the initial term at each position. Start with $Z_{r_0}=E^{r_0}_{p,q}$ and $B_{r_0}=0$. Given the quotient $Z_r\twoheadrightarrow Z_r/B_r\cong E^r_{p,q}$, define $Z_{r+1}$ as the inverse image of the outgoing kernel and $B_{r+1}$ as the inverse image of the incoming image. Square zero puts $B_r\subseteq B_{r+1}\subseteq Z_{r+1}\subseteq Z_r$. The transition α identifies $Z_{r+1}/B_{r+1}$ with $E^{r+1}_{p,q}$. When both differentials vanish, these inverse images are respectively $Z_r$ and $B_r$, so stabilization makes both families stationary. Their eventual quotient is denoted $E^\infty_{p,q}$.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
