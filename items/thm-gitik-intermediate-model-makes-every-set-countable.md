---
id: thm-gitik-intermediate-model-makes-every-set-countable
kind: theorem
title: Every set is countable in the intermediate extension
status: published
origin: pipeline
deps:
  - thm-gitik-intermediate-model-zf-minus-power-set
  - def-gitik-strongly-compact-filter-system-and-class-forcing
  - def-cofinality
  - lem-cofinality-is-well-defined
  - thm-cofinality-basics
  - def-countable
  - def-countable-choice
  - thm-countable-union-of-countable
  - lem-countable-iff-surjection-from-n
  - thm-transfinite-induction
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Schürz, Gitik's model, abstract and Sections 2 and 5, pages 3–7 and 12"
      url: https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf
---

## Statement

In $M[G]$, every set is at most countable in the convention of
[[def-countable]]. Equivalently, every nonempty set is the range of a map from
$\omega$; the empty set is finite and is not asserted to be such a range.

## Facts & Assumptions

**Given:** The intermediate Gitik extension $M[G]$.

[F1] [[def-gitik-strongly-compact-filter-system-and-class-forcing]]: At each regular coordinate $\delta$, conditions carry finite one-to-one sections from $\omega$ to $\delta$, and every required successor set belongs to a uniform filter on $\delta$.

[F2] [[thm-gitik-intermediate-model-zf-minus-power-set]]: $M[G]$ has Collection/Replacement and a definable global well-order; hence it satisfies AC and $\mathrm{AC}_\omega$, although Power Set is absent.

[F3] [[lem-cofinality-is-well-defined]]: In ZF, every ordinal $\lambda$ has a strictly increasing cofinal map from the least ordinal $\operatorname{cf}(\lambda)$ witnessing its cofinality.

[F4] [[thm-cofinality-basics]]: For every limit ordinal $\lambda$, $\operatorname{cf}(\lambda)$ is a regular infinite cardinal.

[F5] [[thm-transfinite-induction]]: A property inherited at each ordinal from all smaller ordinals holds for every ordinal.

[F6] [[thm-countable-union-of-countable]]: Under $\mathrm{AC}_\omega$, a countable union of at most countable sets is at most countable.

[F7] [[lem-countable-iff-surjection-from-n]]: A nonempty set is at most countable iff it is a surjective image of $\omega$.

[F8] [[def-countable]]: The empty set is finite, hence at most countable, but there is no map from nonempty $\omega$ onto it.

## Proof

1.1 Fix an infinite regular ground cardinal $\delta$. The union $g_\delta=\bigcup\{p(\delta):(p,U)\in G,\ \delta\in\operatorname{dom}_1(p)\}$ is a well-defined one-to-one partial map $\omega\to\delta$: two generic conditions have a common refinement, whose section extends both finite sections. For each $n<\omega$, support extension followed by finitely many legal successors gives a condition filling the $n$th slot, so the corresponding class is dense and $\operatorname{dom}(g_\delta)=\omega$. For each $\xi<\delta$, every successor set in the coordinate filter is unbounded—co-bounded in the small case and of cardinality $\delta$ by uniformity in the ultrafilter cases—so pruning it above $\xi$ and taking the next successor is dense. Hence $\operatorname{ran}(g_\delta)$ is cofinal in $\delta$. It is not claimed to equal $\delta$. [F1]

2.1 Let $\lambda$ be a nonzero limit ordinal and compute $\delta=\operatorname{cf}^M(\lambda)$. By F3, choose in $M$ an increasing cofinal $h:\delta\to\lambda$, and by F4 the ground cardinal $\delta$ is regular and infinite. If $\delta=\omega$, $h$ already witnesses countable cofinality in $M[G]$. If $\delta>\omega$, step 1.1 gives a cofinal $g_\delta:\omega\to\delta$, so $h\circ g_\delta$ has cofinal range in $\lambda$. A finite map cannot be cofinal in a nonzero limit ordinal, and therefore $M[G]\models\operatorname{cf}(\lambda)=\omega$. [F1, F3, F4, step 1.1]

3.1 Apply transfinite induction to “$\alpha$ is at most countable in $M[G]$.” The zero ordinal is finite. If $\alpha$ is countable, then $\alpha+1$ is countable by adjoining one point to a finite or $\omega$-enumeration. At a nonzero limit $\lambda$, choose the cofinal map $c:\omega\to\lambda$ from step 2.1. Every $c(n)+1<\lambda$ is countable by the induction hypothesis, and $\lambda=\bigcup_{n<\omega}(c(n)+1)$. The definable global well-order from F2 supplies $\mathrm{AC}_\omega$, so F6 makes this union countable. F5 now gives that every ordinal of $M[G]$ is at most countable. [F2, F5, F6, F8, step 2.1]

4.1 Let $x\in M[G]$. If $x=\varnothing$, F8 makes it finite and countable. Otherwise the definable global well-order from F2 restricts to a well-order of $x$; Replacement supplies its ordinal order type $\alpha$ and a bijection $x\cong\alpha$. Step 3.1 makes $\alpha$, and hence $x$, at most countable. By F7 this is equivalent, in the nonempty case only, to a surjection $\omega\to x$. [F2, F7, F8, step 3.1] ∎
