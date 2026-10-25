---
id: thm-qa-relative-probability-guarantee
kind: theorem
title: "Relative probability estimation with a charged finite cap"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - lem-qa-coherent-amplitude-grid-rounding
  - alg-qa-relative-probability-estimation
  - def-qa-13-amplitude-estimation-task
  - alg-qa-13-phase-estimation-amplitude-estimation
  - thm-qa-13-amplitude-estimation-guarantee
  - thm-qa-13-amplitude-estimation-query-complexity
  - lem-qa-13-pi-rational-bounds
  - lem-qa-13-real-cyclotomic-comparison
  - def-qa-classical-bit-cost
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; every schedule and measurement family is finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
---

## Statement

For every promised input of [[alg-qa-relative-probability-estimation]], the procedure terminates. If $p=0$, it returns $\widehat p=0$ with certainty. If $p>0$, then
$$\Pr\{|\widehat p-p|\le cp\}\ge1-\beta.$$

Let $C$ count all invocations of the declared sampler and inverse capabilities: each controlled $A$, controlled $A^*$, and initial ordinary $A$ preparation is counted once in this total, while their individual resource coordinates remain distinct. Put $p_*=\max\{p,p_{\min}\}$, and let $L,r,M_L$ be the algorithm's finite parameters. Then
$$\mathbb E C=O\!\left(\frac{r}{c\sqrt{p_*}}\right),\qquad r=O\!\left(1+\log\frac{L+2}{\beta}\right),\qquad L=O\!\left(1+\log\frac1{p_{\min}}\right).$$
Every execution satisfies the charged cap
$$C<\frac{65rM_L}{c}<\frac{4160r}{c\sqrt{p_{\min}}}.$$
With probability at least $1-\beta$, both $|\widehat p-p|\le cp$ and $C<4160r/(c\sqrt{p_*})$ hold; when $p=0$, both hold deterministically. Thus the expected sampler-and-inverse count is
$$O\!\left(\frac{1+\log((2+\log(1/p_{\min}))/\beta)}{c\sqrt{\max\{p,p_{\min}\}}}\right).$$

These bounds require the algorithm's explicit controlled-access contract. They do not identify a controlled black-box call with an ordinary uncontrolled black-box call. Controlled reflections, control phases, QFT and other ordinary gates, measurements, and classical postprocessing retain separate charged costs. In the retained `exact-cyclotomic` mode, rounding uses finitely many exact algebraic comparisons and produces a rational with $O(\log N)$ bits in each of numerator and denominator at a final scale $N$; no polynomial or polylogarithmic classical-bit bound is asserted. The optional `efficient-grid` mode instead has the helper's uniform polynomial-in-$\log M$ rounding gates, work and generation, while preserving every probability/query bound. Estimation measures only its own construction workspaces, so a subsequent fresh sampler execution, conditional on the returned classical transcript, retains that sampler's prescribed output state and conditional good state.

## Facts & Assumptions

**Given:** A promised input and all access capabilities of [[alg-qa-relative-probability-estimation]], with rational $p_{\min},c,\beta$ in its stated ranges. All estimator preparations and measurements use independent fresh workspaces, as required by that algorithm.

[F1] The finite schedule, rational rounding grid, medians, detection threshold and final scale are defined in [[alg-qa-relative-probability-estimation]].

[F2] The generic coherent sampler, success projection and signed iterate, including their separately declared controlled and inverse accesses, are defined in [[def-qa-13-amplitude-estimation-task]].

[F3] For dyadic $M\ge4$, the raw QFT estimator outputs $z=\sin^2(\pi y/M)$, with its exact cyclotomic representation ([[alg-qa-13-phase-estimation-amplitude-estimation]]).

[F4] The raw output satisfies $|z-p|\le2\pi\sqrt{p(1-p)}/M+\pi^2/M^2$ with probability at least $8/\pi^2$, and equals zero with certainty at $p=0$ ([[thm-qa-13-amplitude-estimation-guarantee]]).

[F5] The circle constant satisfies $3<\pi<22/7$ ([[lem-qa-13-pi-rational-bounds]]).

[F6] One raw estimator uses exactly $M-1$ controlled-$Q$ calls; each has one controlled $A$, controlled $A^*$, controlled $S_0$, controlled $S_{\rm good}$ and control phase. Its initial state preparation is separate ([[thm-qa-13-amplitude-estimation-query-complexity]]).

[F7] Real cyclotomic values admit a terminating exact comparison procedure, including equality, without an asserted polynomial bit-cost bound ([[lem-qa-13-real-cyclotomic-comparison]]).

[F8] Classical comparisons, encoding, arithmetic and output writing are charged separately from quantum query and gate costs ([[def-qa-classical-bit-cost]]).

[F9] The efficient-grid helper returns a rational in $[0,1]$, is exactly zero for $y=0$, has output error at most $3/(4M^2)<M^{-2}$, and has uniform polynomial-in-$\log M$ reversible resources ([[lem-qa-coherent-amplitude-grid-rounding]]).

## Proof


1.1 The dyadic sequence $M_j=4\cdot2^j$ has unbounded squares, so its positive rational threshold in [F1] is eventually reached. Since $p_{\min}\le1$, its least cap index has $L\ge3$, and minimality gives $M_{L-1}^2p_{\min}<1024$, hence $M_L<64/\sqrt{p_{\min}}$. The geometric sequence $(4/5)^r$ tends to zero, so the least positive odd $r$ in [F1] exists. The final scale is a finite dyadic ceiling of a rational number and satisfies $16M_J/c\le N<32M_J/c$. Every raw call has dyadic size at least four. Thus all schedule choices are executable by finite rational arithmetic. [given, F1, F2, F3, algebra]

2.1 For each raw output $z\in[0,1]$, the rounding instruction finds $t=\lfloor M^2z\rfloor$ by finite binary search with [F7], including equality and the endpoint $z=1$. Its returned rational $b=t/M^2$ satisfies $0\le z-b<M^{-2}$, with equality $b=z$ when $M^2z$ is integral, and returns exactly zero when $y=0$. Binary search uses $O(\log M)$ comparisons. Its rational output has $O(\log M)$ numerator and denominator bits. Every comparison terminates by [F7], and all its internal refinement and output operations remain charged under [F8]. In efficient-grid mode [F9] supplies the same range, zero branch and $M^{-2}$ error directly, with its separately proved finite polynomial resource bound; no exact-comparison refinement is used in that mode. There are at most $L+1$ detection medians and one final median, each with finitely many calls, so the entire procedure terminates. [F1, F3, F7, F8, F9, step 1.1, algebra]

2.2 By [F6], one rounded call at size $M$ uses $M-1$ controlled $A$ calls, $M-1$ controlled $A^*$ calls and one ordinary $A$ preparation, for $2M-1$ sampler-and-inverse invocations. A median costs at most $2rM$ such invocations, with separately charged $r(M-1)$ occurrences of each controlled reflection and control phase. Since $\sum_{j=0}^LM_j<2M_L$, detection costs less than $4rM_L$. A final median, if invoked, has size $N<32M_L/c$ and costs less than $64rM_L/c$. Thus every execution, including unsuccessful estimates reaching the cap, has $C<4rM_L+64rM_L/c<65rM_L/c<4160r/(c\sqrt{p_{\min}})$, because $4c<1$. [given, F1, F2, F6, step 1.1, algebra]

3.1 By [F5], $8/\pi^2>8/(22/7)^2>4/5$, $2\pi<8$, and $\pi^2<16$. Therefore [F4] and step 2.1 imply that each rounded output lies in the interval $I_M=[p-8\sqrt p/M-17/M^2,p+8\sqrt p/M+17/M^2]$ with failure probability at most $1/5$. Let $B_i$ indicate failure of copy $i$ in a median, and put $B=\sum_{i=1}^rB_i$. Independence gives $\mathbb E4^B=\prod_i\mathbb E4^{B_i}\le(8/5)^r$. Since $\mathbf1_{\{B\ge r/2\}}\le4^B/4^{r/2}$, taking expectations gives $\Pr\{B\ge r/2\}\le(4/5)^r\le\delta$. If fewer than half of the samples miss $I_M$, their middle order statistic lies in $I_M$: an order statistic outside that interval would put at least $(r+1)/2$ samples on the same outside side. Consequently each median misses $I_M$ with probability at most $\delta$. This also holds conditional on every earlier classical transcript, because the chosen size is then fixed and this median uses independent fresh workspaces. [given, F1, F4, F5, step 2.1, algebra]

4.1 Call a median good when it belongs to $I_M$, and put $x=M\sqrt p$. At a good detection stage, $x^2-8x-17\le M^2b\le x^2+8x+17$. A good stage that detects therefore has $x>11$, since for $0\le x\le11$ its upper bound is at most $121+88+17=226<256$. A good stage with $x\ge32$ certainly detects, since $x^2-8x-17$ is increasing there and is at least $751>256$. For a positive promised $p$, $M_L\sqrt p\ge32$, so a good cap stage detects. [given, F1, step 3.1, algebra]

5.1 If detection occurs at a good stage $J$, then the fresh final scale has $x'=N\sqrt p\ge16M_J\sqrt p/c>176/c$. When its final median is good, $|\widehat p-p|/p\le8/x'+17/(x')^2<c/22+17c^2/176^2<c$, using $0<c<1/4$. At most $L+2$ medians are invoked, and each has conditional failure probability at most $\delta$ by step 3.1. The union bound therefore makes the probability of any invoked bad median at most $(L+2)\delta\le\beta$. On the complementary event, a positive input detects by the cap and satisfies the relative estimate just proved. At $p=0$, [F4] gives raw output zero with certainty; step 2.1 and the algorithm's zero-label branch make every rounded value and median zero. No positive threshold is met, so the algorithm returns zero exactly. [given, F1, F4, step 1.1, step 2.1, step 3.1, step 4.1, algebra]

5.2 Suppose $p>0$. Let $j_*$ be the first index with $M_{j_*}\sqrt p\ge32$. It exists by the promise and satisfies $j_*\le L$, $j_*>0$, and $M_{j_*}<64/\sqrt p$. For analysis, preassign independent hypothetical median outcomes to all detection stages, and reveal them only if reached; this finite product of independent experiments has exactly the procedure's law. To reach stage $j_*+t\le L$, every one of the $t$ preceding stages beginning at $j_*$ must have a bad median, since a good one at these scales would detect by step 4.1. Thus $\Pr\{\text{reach }j_*+t\}\le\delta^t$. If $S$ is the sum of sizes of invoked detection stages, finite summation and $\delta\le1/16$ give $\mathbb ES<2M_{j_*}+M_{j_*}\sum_{t\ge1}(2\delta)^t\le(2+1/7)M_{j_*}<3M_{j_*}$. The infinite geometric sum here is only an upper bound on a finite expected cost. [given, F1, step 3.1, step 4.1, algebra]

6.1 Detection costs at most $2rS$. If detection occurs, $M_J\le S$ and the final median costs less than $64rM_J/c$; otherwise that cost is zero. Hence $\mathbb EC\le(2+64/c)r\mathbb ES<200rM_{j_*}/c<12800r/(c\sqrt p)$. If $p=0$, there is no final median and $C<4rM_L<256r/\sqrt{p_{\min}}$. Both cases imply $\mathbb EC=O(r/(c\sqrt{p_*}))$. On the probability-$1-\beta$ event of step 5.1, a positive input stops by $j_*$, so the deterministic calculation of step 2.2, with $M_{j_*}$ replacing $M_L$, gives $C<65rM_{j_*}/c<4160r/(c\sqrt p)$. For $p=0$ the deterministic cap already gives the claimed $p_*$ bound. This establishes the simultaneous probability assertion. [given, F1, step 1.1, step 5.1, step 2.2, step 5.2, algebra]

7.1 Minimal dyadic threshold choice gives $L=O(1+\log(1/p_{\min}))$. Since $r$ is the least positive odd integer with $(4/5)^r\le\delta$, it is at most two above the real threshold $\log(1/\delta)/\log(5/4)$, apart from the harmless minimum value one. Also $1/\delta=\max\{16,(L+2)/\beta\}$, so $r=O(1+\log((L+2)/\beta))$. Substituting into step 6.1 gives the stated expected bound. Rounding's precision and finite comparison count are those of step 2.1, and [F8] keeps their actual bit costs, along with the ordinary quantum resources in [F6], separate from this query bound. Finally, by [F1] every measured estimation workspace is discarded and the output is classical. Conditional on any resulting transcript, a subsequent fresh execution initializes its own declared input and applies its own prescribed sampler. Its output state, and therefore its conditional good state when that event has positive probability, is precisely that prescribed for the fresh sampler; the measured construction registers are not inputs to it. [given, F1, F6, F8, step 2.1, step 6.1, algebra] ∎

