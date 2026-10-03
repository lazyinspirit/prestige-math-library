---
id: def-lkb-absolute-second-homology-module
kind: definition
title: The integral LKB module as absolute second homology
status: draft
origin: pipeline
deps: [def-lawrence-krammer-bigelow-cover]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.1, printed p. 3: the representation is the action of B_n on H_2(C-tilde); section 2.2 introduces relative modules only for the pairing"
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 1.2, printed p. 473: 'The Lawrence-Krammer representation is the map from B_n to GL(H_2(C-tilde))'"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Definition

Let $\widetilde C\to C$ be the LKB cover of
[[def-lawrence-krammer-bigelow-cover]], with basepoint lift $\tilde c_0$,
deck group $\mathbb Z^2=\langle q\rangle\oplus\langle t\rangle$ and coefficient
ring $\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$.

The **integral Lawrence-Krammer-Bigelow module** is the ordinary absolute
singular homology
$$H_2(\widetilde C;\mathbb Z)$$
with the $\Lambda$-module structure in which the generators $q,t$ act by the
deck translations of the cover. No relative group is substituted for it.

The groups
$$H_2(\widetilde C,\tilde\nu)\qquad\text{and}\qquad H_2(\widetilde C,\partial\widetilde C\cup\tilde\nu)$$
introduced from the small end neighbourhoods $\tilde\nu_\varepsilon$ are
**auxiliary pairing targets only**: they are used as the second argument (and,
for the primed pairing, as the first argument) of the LKB intersection pairing,
but the representation and all matrix statements of this page are about the
absolute module $H_2(\widetilde C;\mathbb Z)$. In particular, no identification
of $H_2(\widetilde C;\mathbb Z)$ with a relative or quotient module is asserted
by this definition.
