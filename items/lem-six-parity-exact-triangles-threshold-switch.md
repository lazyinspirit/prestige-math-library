---
id: lem-six-parity-exact-triangles-threshold-switch
kind: lemma
title: "Six parity-exact triangles determine the threshold switch"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Only dimensions of finite vector spaces and a six-term sum are used; no choice axiom is required."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Hedden and Ording, The Ozsvath-Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/pdf/math/0512348v1"
      locator: "Lemma 2.5, the parity-rank argument"
---

## Statement

Let $A_0,\ldots,A_6$ be finite-dimensional $\mathbb Z/2$-graded vector spaces over a field, and let $B$ be one-dimensional of odd parity. For $t=1,\ldots,6$, suppose the cyclic sequence
$$A_t\xrightarrow{f_t}B\xrightarrow{g_t}A_{t-1}\xrightarrow{h_t}A_t$$
is exact at all three spaces. Suppose $f_t,h_t$ preserve parity and $g_t$ reverses parity. Write $e_t=\dim A_t^{\mathrm{even}}$ and let $\epsilon_t=\operatorname{rank}g_t\in\{0,1\}$. Then $e_{t-1}=e_t+\epsilon_t$. If $e_6=0$, $e_0=2$, and $\epsilon_1\ge\epsilon_2\ge\cdots\ge\epsilon_6$, then
$$\epsilon_1=\epsilon_2=1,\qquad\epsilon_3=\epsilon_4=\epsilon_5=\epsilon_6=0.$$
Consequently, if numbers $q_0,\ldots,q_5\in\{0,1\}$ satisfy $q_{t-1}=\epsilon_t$, then $q_0=q_1=1$ and $q_2=q_3=q_4=q_5=0$.

## Statement references

[Hedden and Ording, Section 2.2, Lemma 2.5](https://arxiv.org/pdf/math/0512348v1)

## Facts & Assumptions

**Given:** The finite parity-graded vector spaces, exact triangles, parity conditions, and, for the concluding assertions, the stated endpoint dimensions and monotonicity.

## Proof

1.1 Since $B^{\mathrm{even}}=0$ and $f_t$ preserves parity, every even vector in $A_t$ lies in $\ker f_t=\operatorname{im}h_t$. Since $h_t$ preserves parity, an even target vector has an even preimage: decompose any preimage into its even and odd parts and retain the even part. Thus $h_t:A_{t-1}^{\mathrm{even}}\to A_t^{\mathrm{even}}$ is surjective. Its kernel is $\operatorname{im}g_t$, because exactness gives this equality on the full spaces and the parity reversal places all of $g_t(B)$ in the even part of $A_{t-1}$. Rank-nullity yields $e_{t-1}=e_t+\operatorname{rank}g_t=e_t+\epsilon_t$. The one-dimensional source of $g_t$ implies $\epsilon_t\in\{0,1\}$. [given, algebra]

2.1 Sum the six identities of step 1.1. They telescope to $\sum_{t=1}^6\epsilon_t=e_0-e_6=2$. A nonincreasing sequence of zeros and ones consists of an initial string of ones followed by zeros; its sum equals the length of that string. The length is therefore exactly two, giving precisely the displayed values of $\epsilon_t$. Substitution into $q_{t-1}=\epsilon_t$ gives the final six values. [step 1.1, given, algebra] ∎

## Remarks

This lemma does not assert the existence of a knot Floer skein triangle. Its application to the two-twisted Whitehead double additionally needs authenticated diagrams, the two endpoint even ranks, parity and nonvanishing properties of the actual skein maps, their relation to tau, and the crossing-change monotonicity that forces the stated order of the six ranks.
