---
id: thm-qc-unbounded-error-counting-time-space-alternative
kind: theorem
title: "Unbounded error counting time space alternative"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps:
  - def-qc-unbounded-error-time-space-counting-model
  - thm-qc-probabilistic-polynomial-time-hierarchy
  - lem-qc-counting-time-space-to-linear-hierarchy
  - lem-qc-tight-majority-formula-completeness
  - lem-qc-basis-query-time-normalization
  - lem-qc-bounded-space-virtual-input-simulation
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Van Melkebeek and Watson, Time-Space Efficient Simulations of Quantum Computations, final published model and Theorem 1.3"
      url: https://doi.org/10.4086/toc.2012.v008a001
    - title: "Eric Allender et al., Time-Space Tradeoffs in the Counting Hierarchy"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
proof_strategy: direct
---

## Statement

For either fixed profile $P\in\{\mathrm{seq},\mathrm{basis}\}$, every real $d$ and every $\varepsilon>0$, there is a constant $c>1$ such that at least one of the following holds: $\mathrm{MajMajSAT}\notin\mathrm{PrTIME}_{P}(n^c)$, or $\mathrm{MajSAT}\notin\mathrm{PrTISP}_{P}(n^d,n^{1-\varepsilon})$. The basis profile is the derived full-basis comparison model. Formula thresholds are at least-half and machine acceptance is strict majority.

## Facts & Assumptions

**Given:** real $d$, $\varepsilon>0$, one fixed profile, and the local majority-formula encodings.

[F1] [[thm-qc-probabilistic-polynomial-time-hierarchy]] gives proper containment for rational strictly separated time exponents in the selected profile.

[F2] [[lem-qc-counting-time-space-to-linear-hierarchy]] maps the selected profile's polynomial-time/sublinear-space machines to a fixed level of its linear counting hierarchy.

[F3] [[lem-qc-tight-majority-formula-completeness]] supplies near-linear reductions for both hierarchy levels, direct polylogarithmic-time/logspace bit generation, and sequential on-demand generation with the same per-transition overhead.

[F4] [[def-qc-unbounded-error-time-space-counting-model]] fixes the two profiles and exact charged oracle access. The time-only normalization can carry an exact classical oracle by forwarding its completed query and using its deterministic answer; its dictionary invariants are independent of that answer. Query copying adds only polylogarithmic time per original query symbol, absorbed by the strict padding margins below.

[F5] [[lem-qc-basis-query-time-normalization]] normalizes time-bounded basis queries into an index-only computation when its clock is at least input length. This time-only use adds polylogarithmic overhead.

[F6] [[lem-qc-bounded-space-virtual-input-simulation]] handles generated inputs while retaining $O(M+\log n)$ work extent for a known polynomial bound $M$ on source work operands, using maintained range-OR trees. It is the space-preserving tool below; [F5] is not used to transport a sublinear space bound.

## Proof



1.1 Choose rational $0<\eta<\eta_1<\min(\varepsilon,1)$ and $a>\max(d,1)$. Suppose $\mathrm{MajSAT}$ has the stated time/space decider. For a language in $\mathrm{LCH}_{P,1}$, [F3] produces a formula of length $N=O(n\log^k n)$. Its source decider work extent is eventually below a known power-of-two bound $M=O(n^{1-\eta_1})$, because $\eta_1<\varepsilon$ absorbs fixed constants and polylogs in $N$. In the basis profile use [F6] to simulate both ordinary reads and native basis queries on this generated formula in time $O((n+N+N^d+1)\mathrm{polylog}\,n)$ and space $O(M+\log n)$. In the sequential profile [F3]'s ordered source-constant block, or a logarithmic virtual-input-position counter, gives at most the same overhead for each local input move without changing work records. The strict margins $a>\max(d,1)$ and $\eta<\eta_1$ bound these resources by $O(n^a)$ and $O(n^{1-\eta})$. Hence $\mathrm{PrTIME}_P(n)\subseteq\mathrm{PrTISP}_P(n^a,n^{1-\eta})$. [F3, F4, F6, given, construct, algebra]

2.1 Choose rational $1<b<B$ with $B(1-\eta)<1$, put $\beta=1-B(1-\eta)>0$, and choose rational $A>Ba$. For any $\mathrm{PrTIME}_P(n^b)$ language, its self-delimited padded version at length $m=\Theta(n^B)$ has a linear-time decider. In the basis profile apply [F5] to the original fixed decider, then translate its short indices to the original-input portion of the actual padded word; the cost $n^b\mathrm{polylog}\,n$ fits $O(m)$ because $b<B$. Sequential simulation is no slower. Apply step 1.1 to that padded language. On the original word, its resulting time/space decider sees a generated input of length $m$. For the basis profile [F6] simulates this virtual padded input with a known work bound $M=O(m^{1-\eta})$ rounded to a power of two; its delimiter and zero bits have polylogarithmic-time/logspace generators. Time is $O(n^{Ba}\mathrm{polylog}\,n)\subseteq O(n^A)$ and work extent $O(m^{1-\eta}+\log n)=O(n^{1-\beta})$. The sequential virtual-input simulation has the same bounds. Thus $\mathrm{PrTIME}_P(n^b)\subseteq\mathrm{PrTISP}_P(n^A,n^{1-\beta})\subseteq\mathrm{LCH}_{P,\tau}$ by [F2] for a fixed finite $\tau$. Increase $\tau$ to at least two if necessary. [F2, F4, F5, F6, step 1.1, construct, algebra]

3.1 Choose rational constants $1<c<\rho<\delta<b^{1/(\tau-1)}$ and suppose $\mathrm{MajMajSAT}$ has a fixed $\mathrm{PrTIME}_P(n^c)$ decider. Let the reduction in [F3] map an $n$-bit input to a formula $y=R(x)$ of length $N=O(n\log^k(n+2))$ for some fixed $k$, with the stated direct bit generator. If $P=\mathrm{seq}$, supply this formula on demand using [F3]'s sequential streaming guarantee; the decider then takes $O(N^c\mathrm{polylog}\,n)=O(n^c\mathrm{polylog}\,n)$ time. If $P=\mathrm{basis}$, the bit generator alone does not justify composition with a time-only decider that can issue long block queries. Choose a constructible clock $T=\lceil K_0(N+2)^c\rceil\ge N$ and apply [F5] to the decider's fixed explicit code. The resulting exact index-only interpreter has time and physical work-access extent bounded by a constructible $T'=O(N^c\mathrm{polylog}\,N)$. Choose a power-of-two majorant $M_n=2^{\lceil K_1\log_2(n+2)\rceil}$ with fixed $K_1$ large enough that $T'\le M_n\le(n+2)^{K_1+1}$. The normalized index-only interpreter is a special case of the basis machine's head-access operations, with no native block query left; apply [F6] to its run on the generated formula $R(x)$. The formula length, bit generator, clock and address majorant satisfy [F6]'s hypotheses, so the exact simulation takes $O((n+T'+1)\log^{O(1)}(n+2))=O(n^c\log^{O(1)}n)$ time. Thus in either profile $\mathrm{LCH}_{P,2}\subseteq\mathrm{PrTIME}_P(n^\rho)$, with the strict exponent margin absorbing the reduction, normalization and generated-input overheads. [F3, F4, F5, F6, step 2.1, given, construct, algebra]

4.1 We prove the stronger induction assertion that for every $j\ge2$ there is a rational $e'_j<\delta^{j-1}$ with $\mathrm{LCH}_{P,j}\subseteq\mathrm{PrTIME}_P(n^{e'_j})$. The base is $e'_2=\rho$. For the induction step, set $e=\delta^{j-1}$ and take any $B\in\mathrm{LCH}_{P,j}$ with the resulting decider of time $O(|q|^{e'_j})$, where $e'_j<e$ and $e'_j>1$. Encode each padded query self-delimited, with its original query $q$ in a designated prefix and a zero suffix, to a length $m=\Theta((|q|+2)^e)$. This padded language is in $\mathrm{LCH}_{P,1}$: verify its format in $O(m)$ time and run the $B$ decider on the logical input $q$. For $P=\mathrm{basis}$, first apply [F5] to the fixed $B$ decider on its actual $|q|$-bit input using the constructible clock $T_q=\lceil K_2(|q|+2)^{e'_j}\rceil\ge |q|$. The normalized interpreter's index-only input reads are redirected to the encoded $q$ substring, returning the original blank or zero answer for addresses outside that substring; offsetting and saturating the emitted input indices is charged within the normalization bound. Its run takes $O(|q|^{e'_j}\mathrm{polylog}\,|q|)=O(m)$ because $e'_j<e$. The sequential case reads the same encoded substring by local input moves within the same bound. Hence the padded language belongs to $\mathrm{LCH}_{P,1}$. The original linear-time oracle machine for $\mathrm{LCH}_{P,j+1}$ makes queries whose total lengths are $O(n)$. For $P=\mathrm{seq}$, use that machine directly on the logical input $x$. For $P=\mathrm{basis}$, apply [F5] to its fixed code with a constructible clock $K_4(n+2)\ge n$; [F4] permits forwarding its exact completed oracle queries and answers. The resulting index-only simulation takes $O(n\mathrm{polylog}\,n)$ time. Use a self-delimited padded input with the length and $x$ available in a designated prefix. The padded-language machine checks that encoding in $O(m)$ time; the index-only simulation redirects each logical input read to the encoded $x$ substring and returns the original blank/zero answer outside it. This offset handling is charged to the emitted input-index bits. Replace each query $q$ by its padded version of length $\Theta((|q|+2)^e)$. The sum of these query lengths is $O(\sum_q(|q|+2)^e)=O(n^e)$ because the original query lengths and query count sum to $O(n)$. Padding counters and query writes have the same total bound, so the padded outer language is decided in $O(m)$ time with oracle $B_e\in\mathrm{LCH}_{P,1}$ and hence lies in $\mathrm{LCH}_{P,2}$. [F3, F4, F5, step 2.1, step 3.1, construct, induction, algebra]

5.1 Apply the $m^\rho$ time decider from step 3.1 to that padded outer language, whose input is $y=\operatorname{pad}_e(x)$ of length $m=\Theta((n+2)^e)$. In the basis profile its block queries may again use long address blocks, so normalize this decider with [F5] at the constructible clock $T_m=\lceil K_3(m+2)^\rho\rceil\ge m$. Its exact index-only interpreter has time and physical work-access extent bounded by a constructible $T'_m=O(m^\rho\mathrm{polylog}\,m)$. The bits of $y$ are generated from $x$ by the self-delimited prefix and zero-padding map in polylogarithmic time and logarithmic space; its padding length, the clocks, and the address majorants have polylog-time/logspace binary generators. Since $T'_m$ is polynomial in $n$, choose a constructible power-of-two address majorant $M_n=2^{\lceil K\log_2(n+2)\rceil}\le(n+2)^{K+1}$ and apply [F6] to simulate the normalized run on this generated input. The resulting time is $O((n+T'_m+1)\log^{O(1)}(n+2))=O(n^{e\rho}\mathrm{polylog}\,n)$. In the sequential profile, supply the same padded bits on demand to the sequential decider with at most polylogarithmic overhead per input transition. Choose rational $e'_{j+1}$ strictly between $e\rho$ and $e\delta=\delta^j$; the strict margin absorbs all polylogarithmic factors. This proves the induction assertion with its needed margin for the next padding step. [F3, F4, F5, F6, step 3.1, step 4.1, construct, algebra]

6.1 Steps 2.1 and 4.1–5.1 give $\mathrm{PrTIME}_P(n^b)\subseteq\mathrm{PrTIME}_P(n^{\delta^{\tau-1}})$ although $\delta^{\tau-1}<b$. Both exponents are rational and strictly greater than or equal to one, so [F1] contradicts this containment. The two assumed deciders therefore cannot both exist. This proves the stated alternative in either fixed profile without converting a VMW time/space computation to a sequential one. [F1, F2, F3, step 2.1, step 4.1, step 5.1, contradiction] ∎
## Historical profile

The separately named preprint-delimited profile is not identified with the final erased-index profile. An extension of this theorem to that distinct profile is not proved or used here.
