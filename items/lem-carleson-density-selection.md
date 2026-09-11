---
id: "lem-carleson-density-selection"
kind: "lemma"
title: "Carleson density selection"
deps: ["def-density-size-and-tree-count-for-carleson-tiles", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Lemma 3.6; section 4
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let S be a finite tile family, E a finite-measure testing set and N a measurable selector, and let $\delta=\operatorname{dens}_{E,N}(S)>0$. There is a partition of S into a remainder of density at most $\delta/2$ and finitely many trees with designated tops satisfying $\sum_T|I_T|\le C\delta^{-1}m(E)$. The constant depends only on the fixed exponent $\kappa=20$.

## Facts & Assumptions

[F1] Density uses all dominating tiles, the weight with exponent 20, and designated forest tops [[def-density-size-and-tree-count-for-carleson-tiles]].

[F2] Assume AC [[def-axiom-of-choice]], as in F1's packet conventions.

## Proof

**Given:** The finite family S with positive density delta.

1.1 Write $d(t)=\int_{E\cap\{N\in\omega_t\}}\chi_{I_t}$. Consider all tiles t dominating some s in S and satisfying $d(t)>\delta/2$. They form a finite nonempty set: $d(t)\le m(E)/|I_t|$ implies $|I_t|<2m(E)/\delta$, while domination implies $|I_t|\ge\min_{s\in S}|I_s|>0$. Only finitely many dyadic scales lie in this range; at each scale there is one spatial ancestor of each fixed s and finitely many frequency subintervals of its frequency interval. Nonemptiness follows from the definition of positive supremum delta. Let Tops be the maximal members of this finite set. Assign each s lying below a member of Tops to one such top using a fixed finite ordering. This gives disjoint trees. Every s left over has density at most $\delta/2$: otherwise a witness t with $d(t)>\delta/2$ would dominate s and extend to a maximal candidate. [F1, F2]

2.1 For a top t let $I=I_t$, $\omega=\omega_t$, and let $2^kI$ be the interval with the same center and length $2^k|I|$. There is an integer $k\ge0$ with $m(E\cap\{N\in\omega\}\cap2^kI)\ge c\delta2^{2k}|I|$, where c is an absolute positive constant fixed below. Indeed, partition the line into I and the shells $2^kI\setminus2^{k-1}I$ for k>=1. On the kth shell $\chi_I\le A\cdot2^{-20k}/|I|$ for $A=2^{40}$, and the same bound with k=0 dominates its value on I. If every proposed mass bound failed, then $d(t)\le Ac\delta\sum_{k\ge0}2^{-18k}$. Taking $c=(8A)^{-1}$ makes this less than $\delta/2$, contradicting the choice of t. Assign the least successful k to t, and call its assigned family $\mathcal T_k$. [F1, step 1.1]

3.1 Fix k. Greedily choose from $\mathcal T_k$ a tile with greatest spatial length, retain it, and remove every remaining tile whose enlarged rectangle $2^kI_s\times\omega_s$ intersects its enlarged rectangle. Continue until none remain; this is a finite procedure. Retained enlarged rectangles are disjoint, so their sets $E\cap\{N\in\omega_t\}\cap2^kI_t$ are disjoint. Step 2.1 gives $\sum_{t\text{ retained}}|I_t|\le(c\delta2^{2k})^{-1}m(E)$. [step 1.1, step 2.1]

4.1 A tile s removed by a retained t has $|I_s|\le|I_t|$ and overlapping frequency intervals; dyadic nesting and reciprocal lengths imply $\omega_t\subseteq\omega_s$. All tiles removed by this same t therefore have mutually overlapping, hence nested, frequency intervals. Since Tops is an antichain, their original spatial intervals must be pairwise disjoint: otherwise dyadic nesting of both coordinates would make two tops comparable. Also overlap of the enlarged spatial intervals implies each original $I_s$ lies in the interval centered at $c(I_t)$ of radius $(3/2)2^k|I_t|$. Thus the sum of their lengths is at most $3\cdot2^k|I_t|$. Including t itself in its removed family, and using step 3.1, yields $\sum_{s\in\mathcal T_k}|I_s|\le(3/c)2^{-k}\delta^{-1}m(E)$. Summing over k gives $\sum_{t\in\mathrm{Tops}}|I_t|\le(6/c)\delta^{-1}m(E)$. Together with step 1.1 this proves the partition and count assertion. Empty assigned trees may be deleted, only reducing the count. AC is inherited; the selections here are finite greedy choices and least integers. [F2, step 1.1, step 2.1, step 3.1] ∎
