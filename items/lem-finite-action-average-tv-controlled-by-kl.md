---
id: lem-finite-action-average-tv-controlled-by-kl
kind: lemma
title: "Finite-action average total variation is bounded by average KL"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - def-total-variation-distance-for-probability-laws
  - thm-pinsker
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, PMLR 70 (2017)"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf"
      locator: "§5.1, equation (7), PDF p. 3: Pinsker followed by Jensen for average statewise KL."
---

## Statement

Assume the Axiom of Choice. Let $S$ be a finite nonempty set, let $d$ be a probability distribution on $S$, and for each $s\in S$ let $A(s)$ be a finite nonempty set with probability distributions $q_s$ and $p_s$. On the power-set sigma-algebra of $A(s)$, define

$$\operatorname{TV}_{A(s)}(q_s,p_s):=\frac12\sum_{a\in A(s)}|q_s(a)-p_s(a)|.$$

Use the directional Kullback–Leibler divergence with natural logarithms, defined by

$$D_{\rm KL}(q_s\|p_s):=\begin{cases}\displaystyle\sum_{a:q_s(a)>0}q_s(a)\log\frac{q_s(a)}{p_s(a)},&q_s(a)>0\Rightarrow p_s(a)>0,\\+\infty,&\text{otherwise,}\end{cases}$$

and the convention $0\log0=0$. Put

$$K:=\sum_{s:d(s)>0}d(s)D_{\rm KL}(q_s\|p_s)\in[0,+\infty].$$

Then

$$\sum_{s\in S}d(s)\operatorname{TV}_{A(s)}(q_s,p_s)\le\sqrt{K/2},$$

where the right side is $+\infty$ when $K=+\infty$.

## Statement references

[Achiam et al., *Constrained Policy Optimization*, §5.1, equation (7)](https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf).

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite nonempty state set, probability weights $d(s)$, and finite nonempty action sets with probability distributions $q_s,p_s$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is invoked only to apply the published Pinsker theorem [F3]. The finite sums and weighting arguments are choice-free.

[F1] [[def-kullback-leibler-divergence]]: directional KL is $+\infty$ when the first probability law is not absolutely continuous with respect to the second; under absolute continuity it uses the natural logarithm and the convention $0\log 0=0$.

[F2] [[def-total-variation-distance-for-probability-laws]]: event-supremum total variation is $\sup_B|q(B)-p(B)|$ and has no factor $1/2$; on a finite power-set space it must be identified with the displayed half-$\ell^1$ convention.

[F3] [[thm-pinsker]]: under AC, event-supremum total variation between probability laws is at most $\sqrt{D_{\rm KL}(q\|p)/2}$; the result is immediate if the KL divergence is infinite.

## Proof

1.1 Fix one state $s$. Write $\Delta_a=q_s(a)-p_s(a)$; since both distributions have mass one, $\sum_a\Delta_a=0$. The set $B=\{a:\Delta_a\ge0\}$ consists of the nonnegative differences. The positive and negative parts of $\Delta$ therefore have equal sum, each equal to $\frac12\sum_a|\Delta_a|$. For every subset $C\subseteq A(s)$, $|\sum_{a\in C}\Delta_a|$ is at most this common sum, and $C=B$ attains it. Thus the event-supremum total variation in [F2] equals $\operatorname{TV}_{A(s)}(q_s,p_s)$. [F2, algebra, construct]

2.1 Apply [F3] to the probability measures $q_s$ and $p_s$ on the finite power-set space, and use step 1.1. This gives $\operatorname{TV}_{A(s)}(q_s,p_s)\le\sqrt{D_{\rm KL}(q_s\|p_s)/2}$, including the infinite-divergence case. [A1, F1, F3, step 1.1, given]

3.1 If $K=+\infty$, the asserted inequality holds because each total-variation term is at most one. Suppose $K<\infty$ and put $m=K/2$. When $m=0$, step 2.1 gives $D_{\rm KL}(q_s\|p_s)\ge2\operatorname{TV}_{A(s)}(q_s,p_s)^2\ge0$ for every state. Since their $d$-weighted sum is zero, every state with $d(s)>0$ has zero divergence, so step 2.1 also gives zero total variation there. When $m>0$, for every $x\ge0$ the square $(\sqrt{x}-\sqrt m)^2\ge0$ gives $\sqrt{x}\le(\sqrt m+x/\sqrt m)/2$. Apply this with $x=D_{\rm KL}(q_s\|p_s)/2$ for states with $d(s)>0$, multiply by $d(s)$, and sum. Since $\sum_sd(s)=1$ and $\sum_sd(s)x_s=m$, the result is $\sum_sd(s)\sqrt{x_s}\le\sqrt m$. Step 2.1 now yields the claimed bound. [step 2.1, given, algebra] ∎
## Remarks

The finite-action equality in step 1.1 uses the event-supremum convention, not the total-variation norm of a signed measure. AC enters only in the KL/Pinsker branch; the finite-sum and weighted square-root arguments are choice-free.
