---
id: thm-qc-local-stochastic-concatenated-threshold
kind: theorem
title: "Concatenated Threshold Under Local-Stochastic Correlated Noise"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-qc-local-stochastic-noise-model
  - def-qc-finite-channel-location-schedule
  - def-qc-ft-gadget-and-proper-code-contract
  - lem-qc-noise-channel-model-composes-with-circuit-semantics
  - def-qc-level-r-good-and-bad-rectangles
  - lem-qc-sparse-fault-path-implies-code-deviation
  - lem-qc-local-stochastic-fault-witness-bound
  - def-qc-trace-distance
  - thm-qc-trace-distance-range-and-equality
  - thm-qc-measurement-variation-at-most-trace-distance
  - thm-finite-union-bound
dependency_level: 23
proof_strategy: direct
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf"
    - title: "P. Aliferis, D. Gottesman, J. Preskill, Accuracy Threshold for Postselected Quantum Computation"
      url: "https://arxiv.org/pdf/quant-ph/0703264"
---

## Statement

Assume a fixed proper code of block size $m\ge2d+1$ and correction capacity $d\ge1$, with a recursively closed finite gadget family satisfying [[def-qc-ft-gadget-and-proper-code-contract]]. Let its positive integer effective spread budget be $\ell$, let $a\ge2$ bound the number of child rectangles, put $q=\lfloor d/(2\ell)\rfloor$, and assume $1\le q<a$. Assume also the proved finite port-substitution hypothesis of [[lem-qc-sparse-fault-path-implies-code-deviation]] for these parameters, including its noisy attraction and intermediate-sector requirements, and use its recursive final decoder. Put $A=\binom a{q+1}$. At each integer level $r\ge0$, use the full-depth recursive rectangle hierarchy: every root-to-location path has exactly $r$ child edges, and sibling location sets are disjoint. Use the finite channel-location schedule of [[def-qc-finite-channel-location-schedule]] and local-stochastic fault model of [[def-qc-local-stochastic-noise-model]], with $\eta\in[0,1]$ and $A\eta^q<1$. For each finite simulated circuit, let $N\ge1$ be its total number of top-level rectangles, counting every gate, initialization, correction, scheduled idle, measurement, and readout gadget. Then the level-$r$ bad-rectangle bound is
$$
p_r\le A^{-1/q}\bigl(A^{1/q}\eta\bigr)^{(q+1)^r}.
$$
The noisy computation starts at an admitted encoded boundary: pre-existing live data blocks are jointly encoded from an arbitrary logical input, with any finite external reference retained, and any newly initialized blocks are supplied by the protected prescribed-initialization gadgets covered by the contract and counted among the top-level rectangles. No guarantee is asserted for an unknown unencoded physical input before this protection begins.
The probability that any of the $N$ top-level rectangles is bad, decoded-output trace distance, finite-POVM total-variation error, and success-probability change are each at most $Np_r$. For any target $0<\delta\le1$, choose the least $r$ such that $N A^{-1/q}(A^{1/q}\eta)^{(q+1)^r}\le\delta$ (for $\eta=0$, take $r=0$). For fixed code and gadget parameters, as $N/\delta\to\infty$, this gives $O(\log\log(N/\delta))$ concatenation levels and polylogarithmic fixed-code overhead. Fault indicators need not be independent; conditional operations remain local to their specified locations.

## Facts & Assumptions

**Input boundary:** The admitted inputs are arbitrary joint encoded logical states, with arbitrary finite external references, or blocks produced by protected prescribed initializations covered by the proper-code contract. An unknown unencoded physical input before protection is outside the noisy guarantee.


**Given:** A finite local-stochastic fault-set process, full-depth disjoint child-location trees at each recursive level, the proper-code encoded-instrument correction and gadget contracts, integers $d\ge1$, $\ell\ge1$, $a\ge2$, and $N\ge1$, $q=\lfloor d/(2\ell)\rfloor$ with $1\le q<a$, $A=\binom a{q+1}$, $\eta\in[0,1]$ with $A\eta^q<1$, a target $\delta\in(0,1]$, and the proved finite port-substitution hypothesis with its recursive final decoder. Prove the probability and decoded-output guarantees.

[F1] [[def-qc-local-stochastic-noise-model]]: Every realized fault set obeys the local-stochastic subset bound, and its conditional channel is a chronological composition of pattern-dependent CPTP maps, one local map at each faulty location.

[F2] [[def-qc-level-r-good-and-bad-rectangles]]: A bad parent requires at least $q+1$ bad children with disjoint underlying location sets.

[F3] [[lem-qc-local-stochastic-fault-witness-bound]]: Under the stated hierarchy and local-stochastic subset bound, the root bad probability is at most $A^{-1/q}(A^{1/q}\eta)^{(q+1)^r}$.

[F4] [[lem-qc-sparse-fault-path-implies-code-deviation]]: Its finite port-substitution hypothesis gives joint hierarchical residual instruments in $\mathcal E_{r;q\ell}$, exactly corrected by the recursive decoder with arbitrary references retained.

[F5] [[def-qc-trace-distance]]: $D(\rho,\sigma)=\tfrac12\|\rho-\sigma\|_1$.

[F6] [[thm-qc-trace-distance-range-and-equality]]: $D(\rho,\sigma)\le1$ for density operators.

[F7] [[thm-qc-measurement-variation-at-most-trace-distance]]: Any finite POVM outcome laws have total-variation distance at most the input-state trace distance.

[F8] [[def-qc-ft-gadget-and-proper-code-contract]]: The contracts hold branchwise with any finite reference retained and quantify over arbitrary CPTP maps supported on the union of faulty child supports.

[F9] [[def-qc-finite-channel-location-schedule]]: Each conditional fault-pattern denotation is a finite chronological composition of full-register channels.

[F10] [[lem-qc-noise-channel-model-composes-with-circuit-semantics]]: A finite probability-weighted mixture of conditional pattern denotations is a CPTP channel.

[F11] [[thm-finite-union-bound]]: For a finite family of events, the probability of their union is at most the sum of their probabilities.

[A1] The family satisfies the additional proved finite port-substitution hypothesis in [F4], including its support/refresh checks. This is additional to the one-level contract in [F8].

## Proof

1.1 Apply [F3] to each level-$r$ rectangle. Its proof counts fault-witness sets and uses only the local-stochastic subset bound, so it requires no independence between child fault indicators. Thus each top-level circuit rectangle is bad with probability at most $p_r=A^{-1/q}(A^{1/q}\eta)^{(q+1)^r}$. [given, F1, F2, F3]

1.2 If $\eta=0$, each single-location fault event has probability zero by the local-stochastic subset bound; the finite union bound gives no faults almost surely, so level zero suffices. Otherwise put $\theta=A^{1/q}\eta\in(0,1)$ and $c=-\log\theta>0$. Any $r$ with $(q+1)^r\ge c^{-1}\log(NA^{-1/q}/\delta)$ is sufficient; if the logarithm is nonpositive or its positive value is at most $c$, $r=0$ suffices. For fixed parameters, the least qualifying $r$ is $O(\log\log(N/\delta))$ as $N/\delta\to\infty$. [given, F3, algebra]

2.1 By [F11], the probability $\alpha$ that at least one of the $N$ top-level circuit rectangles is bad satisfies $\alpha\le Np_r$. For every fault pattern, [F9] gives a conditional channel, so its output on the fixed joint data input and external reference is a density operator. On the complementary event, recursive goodness gives at most $q$ bad children in every stage. The one-level contract [F8] and finite hypothesis [A1] permit the simultaneous recursive correction guarantee [F4] for the per-location channels allowed by [F1]. Its recursive final decoder takes every such hierarchical residual instrument to the ideal logical instrument. Thus every pattern with no bad top-level rectangle has decoded output $\rho_{\mathrm{id}}$. If $\alpha>0$, the normalized finite mixture of bad-pattern outputs is a density operator $\tau$; if $\alpha=0$, choose any density operator for $\tau$. Then $\rho_{\mathrm{out}}=(1-\alpha)\rho_{\mathrm{id}}+\alpha\tau$, and [F10] confirms that the weighted schedule output is a channel. [given, A1, F1, F2, F4, F8, F9, F10, F11, step 1.1]

3.1 By homogeneity of trace distance and [F6], $D(\rho_{\mathrm{out}},\rho_{\mathrm{id}})=\alpha D(\tau,\rho_{\mathrm{id}})\le\alpha\le Np_r$. Applying [F7] to the final POVM bounds its output total-variation distance by $Np_r$, and every success event changes by at most that total-variation distance. [F5, F6, F7, step 2.1, algebra]

4.1 Because the gadget family is fixed and finite, choose a constant $\kappa\ge1$ bounding both the number of elementary locations and the scheduled depth of every replacement gadget, including preparation, control, reset, and idle locations. Replacing each location of a schedule of size $S$ and depth $D$ gives size at most $S\kappa$ and depth at most $D\kappa$: replace disjoint locations of each original layer in parallel and pad their gadgets to the common depth bound. Induction gives size at most $S\kappa^r$ and depth at most $D\kappa^r$ at level $r$. Thus the multiplicative size and depth overheads are at most $\kappa^r$, which is a fixed power of $\log(N/\delta)$ by step 1.2. [given, step 1.2, algebra] ∎

## Remarks

This is a separate proof branch from the independent-location recurrence. The source paper states the local-stochastic extension but does not supply the complete witness-count derivation written here. The finite channel schedule and proper-code gadget contracts are explicit hypotheses; their transitive supplier closure remains a draft dependency.

