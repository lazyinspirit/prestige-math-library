---
id: thm-qc-proper-code-concatenated-threshold
kind: theorem
title: "Conditional Concatenated Threshold for Proper Codes"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-qc-ft-gadget-and-proper-code-contract
  - def-qc-level-r-good-and-bad-rectangles
  - lem-qc-sparse-fault-path-implies-code-deviation
  - lem-qc-recursive-bad-rectangle-probability
  - def-qc-noise-channel-model
  - def-qc-finite-channel-location-schedule
  - lem-qc-noise-channel-model-composes-with-circuit-semantics
  - thm-finite-union-bound
  - def-qc-trace-distance
  - thm-qc-trace-distance-range-and-equality
  - thm-qc-measurement-variation-at-most-trace-distance
dependency_level: 23
proof_strategy: direct
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf"
---

## Statement

Assume a fixed proper code with integer block size $m\ge2d+1$, integer correction capacity $d\ge1$, positive integer effective spread budget $\ell$, and an integer bound $a\ge2$ on the number of child rectangles per gadget. Let $q=\lfloor d/(2\ell)\rfloor$ and assume $1\le q<a$. Assume also the proved finite port-substitution hypothesis of [[lem-qc-sparse-fault-path-implies-code-deviation]] for these parameters, including its noisy attraction and intermediate-sector requirements. Put $A=\binom{a}{q+1}$. At each integer level $r\ge0$, use the full-depth recursive rectangle hierarchy: every root-to-location path has exactly $r$ child edges, and sibling location sets are disjoint. Use the independent local CPTP fault model of [[def-qc-noise-channel-model]] with rate $\eta\in[0,1]$, and assume $A\eta^q<1$. The circuit is a finite channel-location schedule as in [[def-qc-finite-channel-location-schedule]]. Interpret level-$r$ outputs after the recursive decoded recovery $D_r$ of [[lem-qc-sparse-fault-path-implies-code-deviation]], built from the declared one-level recovery. For each finite simulated circuit, let $N\ge1$ be its total number of top-level rectangles, counting every gate, initialization, correction, scheduled idle, measurement, and readout gadget. Then every level-$r$ rectangle is bad with probability at most
$$
p_r\le A^{-1/q}\bigl(A^{1/q}\eta\bigr)^{(q+1)^r}.
$$
The noisy computation starts at an admitted encoded boundary: pre-existing live data blocks are jointly encoded from an arbitrary logical input, with any finite external reference retained, and any newly initialized blocks are supplied by the protected prescribed-initialization gadgets covered by the contract and counted among the top-level rectangles. No guarantee is asserted for an unknown unencoded physical input before this protection begins. The probability that any of the $N$ top-level rectangles is bad is at most $Np_r$. For every admitted jointly encoded logical input, including one entangled with an arbitrary finite reference, the decoded level-$r$ output has trace distance at most $Np_r$ from the ideal logical output; every final finite POVM output law has total-variation distance at most $Np_r$, so every success probability changes by at most $Np_r$. For any target $0<\delta\le1$, choose the least $r$ such that $N A^{-1/q}(A^{1/q}\eta)^{(q+1)^r}\le\delta$ (for $\eta=0$, take $r=0$). For fixed code and gadget parameters, as $N/\delta\to\infty$, this level is $O(\log\log(N/\delta))$, and the fixed-code size and depth overhead are polylogarithmic in $N/\delta$. This conditional theorem does not supply a concrete universal gadget family; that is a separate authoring obligation.

## Facts & Assumptions

**Input boundary:** The admitted inputs are arbitrary joint encoded logical states, with arbitrary finite external references, or blocks produced by protected prescribed initializations covered by the proper-code contract. An unknown unencoded physical input before protection is outside the noisy guarantee.


**Given:** A finite channel-location schedule; a fixed proper code and recursively closed gadget family; integers $m\ge2d+1$, $d\ge1$, $\ell\ge1$, and $a\ge2$; $q=\lfloor d/(2\ell)\rfloor$ with $1\le q<a$; $A=\binom{a}{q+1}$; fault rate $\eta\in[0,1]$ with $A\eta^q<1$; full-depth disjoint rectangle hierarchies at each integer level $r\ge0$; a total count $N\ge1$ of top-level circuit rectangles; a target $\delta\in(0,1]$; and the proved finite port-substitution hypothesis with its recursive final decoder. Prove the probability, decoded-output-distance, and overhead bounds.

[F1] [[def-qc-level-r-good-and-bad-rectangles]]: A parent is bad only when at least $q+1$ child rectangles are bad; its ordinary child location sets are disjoint.

[F2] [[lem-qc-recursive-bad-rectangle-probability]]: Under the independent local fault model, $p_r\le A^{-1/q}(A^{1/q}\eta)^{(q+1)^r}$.

[F3] [[lem-qc-sparse-fault-path-implies-code-deviation]]: Under its finite port-substitution hypothesis and $2q\ell\le d$, a $q$-sparse path leaves a joint hierarchical error instrument in $\mathcal E_{r;q\ell}$ after correction, recovered by $D_r$ with every finite external reference retained.

[F4] [[def-qc-trace-distance]]: $D(\rho,\sigma)=\tfrac12\|\rho-\sigma\|_1$.

[F5] [[thm-qc-trace-distance-range-and-equality]]: For density operators, $0\le D(\rho,\sigma)\le1$.

[F6] [[thm-qc-measurement-variation-at-most-trace-distance]]: Any finite POVM outcome laws from $\rho,\sigma$ have total-variation distance at most $D(\rho,\sigma)$.

[F7] [[def-qc-ft-gadget-and-proper-code-contract]]: At one level, with at most $q$ faulty elementary locations, the computation and correction contracts preserve the decoded logical target, leave at most $q\ell$ residual supported errors, correct every $d$-deviation, and retain arbitrary references.

[F8] [[thm-finite-union-bound]]: For a finite family of events, the probability of their union is at most the sum of their probabilities.

[F9] [[def-qc-finite-channel-location-schedule]]: A schedule is a finite ordered list of full-register channels, and its denotation composes them in chronological order.

[F10] [[lem-qc-noise-channel-model-composes-with-circuit-semantics]]: A finite probability-weighted mixture of conditional pattern denotations is a CPTP channel.

[A1] The family satisfies the additional proved finite port-substitution hypothesis in [F3], including its support/refresh checks. The one-level definition in [F7] alone does not imply that hypothesis.

## Proof

1.1 Since $q=\lfloor d/(2\ell)\rfloor$, we have $2q\ell\le d$. Also $A\ge1$, and $A\eta^q<1$ gives $\theta:=A^{1/q}\eta<1$. Apply [F2] to obtain $p_r\le A^{-1/q}\theta^{(q+1)^r}$. [given, F2, algebra]

1.2 If $\eta=0$, the product fault law gives probability zero to every nonempty fault pattern, so $p_0=0$ and level zero suffices. If $\eta>0$, put $c=-\log\theta>0$. Any $r$ with $(q+1)^r\ge c^{-1}\log(NA^{-1/q}/\delta)$ gives $Np_r\le\delta$ by [F2]; if the logarithm is nonpositive or its positive value is at most $c$, level $r=0$ suffices. For fixed $A,q,\eta$ with $0<\theta<1$, the least qualifying level is $O(\log\log(N/\delta))$ as $N/\delta\to\infty$. [given, F2, algebra]

2.1 The event that any of the $N$ top-level circuit rectangles is bad is the union of $N$ events, each of probability at most $p_r$. The finite union bound [F8] gives $\alpha:=\mathbb P(\text{some top-level rectangle is bad})\le Np_r$. [given, F1, F8, step 1.1, algebra]

3.1 For every fault pattern, [F9] gives a conditional channel, so its output on the fixed joint data input and external reference is a density operator. On the event that all top-level rectangles are $q$-good, recursive goodness gives at most $q$ bad children in each computation and correction stage. The one-level contracts [F7], finite hypothesis [A1], and simultaneous recursive induction [F3] place the final corrected instrument in its hierarchical residual sector. Applying its recursive decoder $D_r$ returns the ideal logical instrument exactly, so every such pattern has decoded output $\rho_{\mathrm{id}}$. If $\alpha>0$, the normalized finite mixture of outputs from bad patterns is a density operator $\tau$; if $\alpha=0$, choose any density operator for $\tau$. Thus $\rho_{\mathrm{out}}=(1-\alpha)\rho_{\mathrm{id}}+\alpha\tau$, and [F10] confirms that this weighted schedule output is a channel. [given, A1, F1, F3, F7, F9, F10, step 2.1]

4.1 By homogeneity of the trace norm, $D(\rho_{\mathrm{out}},\rho_{\mathrm{id}})=\alpha D(\tau,\rho_{\mathrm{id}})\le\alpha\le Np_r$, where the first inequality is [F5]. The same identity holds after tensoring any reference identity, since the gadget contracts preserve the external reference after internal outcomes and fault memory are traced. [F4, F5, step 3.1, algebra]

5.1 Apply [F6] to the final finite POVM. Its output total-variation distance is at most $D(\rho_{\mathrm{out}},\rho_{\mathrm{id}})\le Np_r$. For any success event $E$, $|P_{\mathrm{out}}(E)-P_{\mathrm{id}}(E)|\le \tfrac12\sum_x|P_{\mathrm{out}}(x)-P_{\mathrm{id}}(x)|$, so the success-probability change is at most $Np_r$. [F6, step 4.1, algebra]

6.1 Because the gadget family is fixed and finite, choose a constant $\kappa\ge1$ bounding both the number of elementary locations and the scheduled depth of every replacement gadget, including preparation, control, reset, and idle locations. Replacing each location of a schedule of size $S$ and depth $D$ gives size at most $S\kappa$ and depth at most $D\kappa$: replace disjoint locations of each original layer in parallel and pad their gadgets to the common depth bound. Induction gives size at most $S\kappa^r$ and depth at most $D\kappa^r$ at level $r$. Thus the multiplicative size and depth overheads are at most $\kappa^r$, which is a fixed power of $\log(N/\delta)$ by step 1.2. [given, step 1.2, algebra] ∎

## Remarks

The proof is conditional on the declared gadget contract and disjoint rectangle partition. Overlapping extended rectangles require the separate truncated-exRec witness reduction in [[thm-qc-t1-extended-rectangle-threshold]]. The concrete universal-code and gadget existence theorem remains a separate item.

