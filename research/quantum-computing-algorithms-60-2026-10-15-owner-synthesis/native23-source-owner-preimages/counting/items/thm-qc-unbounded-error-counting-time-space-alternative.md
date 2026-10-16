---
id: thm-qc-unbounded-error-counting-time-space-alternative
kind: theorem
title: "Unbounded error counting time space alternative"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qc-unbounded-error-time-space-counting-model
  - thm-qc-probabilistic-polynomial-time-hierarchy
  - lem-qc-counting-time-space-to-linear-hierarchy
  - lem-qc-tight-majority-formula-completeness
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Eric Allender et al., Time-Space Tradeoffs in the Counting Hierarchy"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
proof_strategy: direct
---

## Statement

For every real $d$ and every $\varepsilon>0$, there is a constant $c>1$ such that at least one of the following holds in the sequential machine profile: $\mathrm{MajMajSAT}\notin\mathrm{PrTIME}_{\rm seq}(n^c)$, or $\mathrm{MajSAT}\notin\mathrm{PrTISP}_{\rm seq}(n^d,n^{1-\varepsilon})$. Formula thresholds are at least-half, and machine acceptance uses strict majority as defined in [[def-qc-unbounded-error-time-space-counting-model]].

## Facts & Assumptions

**Given:** real $d$, $\varepsilon>0$, the sequential profile, and the local majority-formula conventions.

[F1] [[thm-qc-probabilistic-polynomial-time-hierarchy]] gives strict separation of sequential $\mathrm{PrTIME}$ classes for rational, strictly separated, time-constructible exponents. Its proof currently depends on an unresolved uniform-simulation item.

[F2] [[lem-qc-counting-time-space-to-linear-hierarchy]] maps sublinear-space sequential unbounded-error machines into a fixed finite $\mathrm{LCH}$ level, conditional on its arithmetic and gate-uniformity suppliers.

[F3] [[lem-qc-tight-majority-formula-completeness]] gives the near-linear, bitwise-logspace reductions for both hierarchy levels, conditional on the unresolved near-linear Cook/Pippenger simulation.

## Proof

1.1 Choose $0<\eta<\min(\varepsilon,1)$ and a rational $a>\max(d,1)$. If $\mathrm{MajSAT}$ had a sequential $\mathrm{PrTISP}(n^d,n^{1-\varepsilon})$ decider, the $\mathrm{LCH}_1$ reduction in [F3] would produce a formula of length $N=O(n\log^k n)$, for a fixed $k$. Generate its bits as the sequential decider requests them. The generator uses $O(\log n)$ space and $O(N\log^{k'}n)$ time for some fixed $k'$, while the decider uses $O(N^d)$ time and $O(N^{1-\varepsilon})$ space. Since $a>\max(d,1)$ and $\eta<\varepsilon$, these costs are bounded by $O(n^a)$ time and $O(n^{1-\eta})$ space for all sufficiently large $n$. Hence $\mathrm{PrTIME}_{\rm seq}(n)\subseteq\mathrm{PrTISP}_{\rm seq}(n^a,n^{1-\eta})$, conditional on [F3]. [F3, given, construct, algebra]

1.2 Choose a rational $b>1$ with $b(1-\eta)<1$, and put $\beta=1-b(1-\eta)\in(0,1)$. For any language in $\mathrm{PrTIME}_{\rm seq}(n^b)$, pad an input of length $n$ to length $m=\Theta(n^b)$ and simulate its linear-time padded decider. Applying step 1.1 at length $m$ gives time $O(m^a)=O(n^{ba})$ and space $O(m^{1-\eta})=O(n^{1-\beta})$. Thus $\mathrm{PrTIME}_{\rm seq}(n^b)\subseteq\mathrm{PrTISP}_{\rm seq}(n^{ba},n^{1-\beta})$. By [F2], the latter class lies in $\mathrm{LCH}_{\tau}$ for some fixed finite $\tau$; increase $\tau$ to at least $2$ if necessary. [F2, step 1.1, given, construct, algebra]

1.3 Fix a rational $\delta$ with $1<\delta<b^{1/(\tau-1)}$, and then choose a rational $c$ with $1<c<\delta$. If $\mathrm{MajMajSAT}$ had a $\mathrm{PrTIME}_{\rm seq}(n^c)$ decider, the $\mathrm{LCH}_2$ reduction in [F3], streamed bitwise, would imply $\mathrm{LCH}_2\subseteq\mathrm{PrTIME}_{\rm seq}(n^\delta)$ after absorbing its fixed polylogarithmic overhead. We now show by induction that for every integer $j\ge2$, this inclusion implies $\mathrm{LCH}_j\subseteq\mathrm{PrTIME}_{\rm seq}(n^{\delta^{j-1}})$. The case $j=2$ is the assumption. For the induction step, let $A\in\mathrm{LCH}_j$ and put $e=\delta^{j-1}$. By the induction hypothesis $A\in\mathrm{PrTIME}_{\rm seq}(n^e)$. Its padded language $\widehat A=\{q\#0^{\lceil |q|^e\rceil-|q|}:q\in A\}$ lies in $\mathrm{LCH}_1$: on an input of length $m$, parse $q$ and run the $n^e$-time decider for $A$, which takes $O(m)$ time. A linear-time oracle machine on a padded input $x\#0^{\lceil |x|^e\rceil-|x|}$ can simulate any $\mathrm{PrTIME}_{\rm seq}(n)^A$ computation by replacing each query $q$ with its padded query to $\widehat A$. The total query-writing cost is at most $O((\sum_i|q_i|)^e)=O(n^e)$ because the original machine charges all query strings and $e>1$. This padded language is in $\mathrm{LCH}_2$, so the assumed $n^\delta$ decider runs in $O(n^{e\delta})$ time on the padded input. Therefore $\mathrm{LCH}_{j+1}\subseteq\mathrm{PrTIME}_{\rm seq}(n^{\delta^j})$, completing the induction. [F3, given, induction, construct, algebra]

1.4 Taking $j=\tau$ in step 1.3 and using step 1.2 yields $\mathrm{PrTIME}_{\rm seq}(n^b)\subseteq\mathrm{PrTIME}_{\rm seq}(n^{\delta^{\tau-1}})$. Since $\delta^{\tau-1}<b$, [F1] says the latter is a proper subclass of the former, a contradiction. Thus the two assumed deciders cannot both exist. The proof is conditional on [F1]–[F3]; in particular, the missing uniform-simulation and Cook/Pippenger proofs remain unresolved. [F1, F2, F3, step 1.2, step 1.3, contradiction] ∎
