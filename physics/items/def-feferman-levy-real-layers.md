---
id: def-feferman-levy-real-layers
kind: definition
title: The real layers of the Feferman–Levy model
status: published
origin: pipeline
deps: [lem-feferman-levy-fixed-boolean-values-come-from-initial-layers]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, definitions of S_n and R_n and equation (10.8), printed pp. 143–144", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Definition

Let $B=\operatorname{RO}(P)$ and let $B_m$ be its complete subalgebra of
$H_m$-fixed values. For $m<\omega$, let $S_m$ be the ground-model set of
Boolean names for subsets of $\omega$ of the form

$$\dot x=\{\langle\check k,b_k\rangle:k<\omega\},\qquad b_k\in B_m.$$

In the Feferman–Levy symmetric model $N$, define

$$R_m=\{\dot x_G:\dot x\in S_m\}.$$

Equivalently, $R_m$ is the set of reals admitting a Boolean name with
$m$-bounded layer support. By
[[lem-feferman-levy-fixed-boolean-values-come-from-initial-layers]], every
member of $S_m$ is hereditarily symmetric. Since $H_m$ is normal in the
layer-preserving group, every automorphism maps $B_m$ and $S_m$ onto
themselves. Therefore the canonical names collecting each $S_m$, and the
canonical name for the sequence $\langle R_m:m<\omega\rangle$, are fixed by
the whole group and are hereditarily symmetric. In particular every $R_m$ and
the displayed sequence are sets of $N$. No choice principle is used in this
definition.
