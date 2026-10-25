---
id: rem-square-and-club-guessing-orientation
kind: remark
title: "Square and club-guessing orientation"
status: published
origin: pipeline
deps: ["def-cofinality-strata-and-stationary-trace", "def-normal-ordinal-function"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Inamdar–Rinot, Fact 1.2 and Definition 1.8, pp.1,5; coherence discussion pp.4–5"
      url: https://arxiv.org/pdf/2207.03969
    - title: "Rinot, Definition 3.8, p.22"
      url: https://papers.assafrinot.com/jensendiamond.pdf
---

## Statement

For a set $S$ of nonzero limit ordinals below a regular uncountable $\kappa$, a $C$-sequence on $S$ assigns a club $C_\delta\subseteq\delta$ to each $\delta\in S$. One possible **club-guessing requirement** is that for every club $D\subseteq\kappa$, the set $\{\delta\in S:C_\delta\subseteq D\}$ is stationary. This describes a requirement, not an existence assertion.

A typical **coherence requirement** is $C_\beta=C_\delta\cap\beta$ whenever $\beta$ is a nonzero limit point of $C_\delta$ (and the indices in question are in the domain). Square principles combine coherence with precisely specified domain, order-type, width, or no-thread conditions. A thread means a club $D$ whose initial segments agree with the prescribed clubs at its limit points. These qualifications are part of the principle; coherence alone is not a square principle. The later trees, delta-systems, and diamond track supplies the formal versions. No square or club-guessing existence theorem is used here.
