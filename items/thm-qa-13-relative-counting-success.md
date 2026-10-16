---
id: thm-qa-13-relative-counting-success
kind: theorem
title: "Relative approximate counting success guarantee"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - alg-qa-13-relative-approximate-counting
  - thm-qa-13-counting-error-guarantee
  - lem-qa-13-counting-zero-outcome-kernel
  - lem-qa-13-pi-rational-bounds
  - lem-qa-phase-estimation-sine-chord-bounds
  - def-sine-and-cosine-by-power-series
  - thm-alternating-series-test
  - thm-sine-and-cosine-derivatives
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - cor-mean-value-theorem
  - alg-qa-13-counting-from-amplitude-estimation
  - lem-qa-13-certified-count-output-rounding
  - def-qa-classical-bit-cost
  - def-nat-power
  - thm-induction-principle
  - thm-of-archimedean
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

For the dyadic relative-counting procedure with rational $0<\epsilon\le1$, if $t>0$ its integer output is within $\epsilon t$ of $t$ with probability at least $2/3$. If $t=0$, every rough and final Count output is exactly zero, the loop stops at its finite cutoff, and the output is zero with certainty.

For every stated input, both dyadic scheduling loops terminate and the final certified integer rounding terminates. The final scale is the least dyadic value at least $T=[20(22/7)^2/\epsilon]L$, hence $T\le M<2T$ and $M\ge20\pi^2L/\epsilon$. Fresh preparations and all controlled access and bit costs remain as declared.

## Facts & Assumptions

**Given:** The relative-counting algorithm, $N=2^n\ge1$, integer $t$ marked addresses, and rational $0<\epsilon\le1$.

[F1] The rough loop doubles $L$, stops on nonzero label or $L^2\ge4N$, and uses final $M\ge20(22/7)^2L/\epsilon$ ([[alg-qa-13-relative-approximate-counting]]).

[F2] Fresh Count has zero-label probability $\sin^2(L\theta)/(L^2\sin^2\theta)$, with exact zero endpoint ([[lem-qa-13-counting-zero-outcome-kernel]]).

[F3] The final Count raw error has the $k=1$ bound and probability at least $8/\pi^2$ ([[thm-qa-13-counting-error-guarantee]]).

[F4] For $0\le u\le1/2$, $\sin(\pi u)\ge2u$, and for $v\ge0$, $\sin v\le v$ ([[lem-qa-phase-estimation-sine-chord-bounds]]).

[F5] $3<\pi<22/7$ ([[lem-qa-13-pi-rational-bounds]]).

[F6] The cosine power series and alternating-series remainder apply at $2/5$ ([[def-sine-and-cosine-by-power-series]], [[thm-alternating-series-test]]).

[F7] $\sin\prime=\cos$, sine is nonnegative on $[0,\pi/2]$, cosine is nonnegative and decreasing there, and the mean value theorem turns a nonnegative derivative into monotonicity ([[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-mean-value-theorem]]).

[F8] The sine double-angle formula is $\sin(2x)=2\sin x\cos x$ ([[thm-sine-and-cosine-addition-formulas]]).

[F21] Count is defined for every power-of-two label size $L\ge2$ and uses the explicit controlled membership reflection ([[alg-qa-13-counting-from-amplitude-estimation]]).

[F22] The exact zero-label probability is the kernel in [[lem-qa-13-counting-zero-outcome-kernel]].

[F23] The rational upper bound $22/7$ exceeds $\pi$ ([[lem-qa-13-pi-rational-bounds]]).

[F24] Certified integer rounding returns an integer within $2/3$ of the raw algebraic value ([[lem-qa-13-certified-count-output-rounding]]).

[F25] The exact label and interval operations are classical postprocessing ([[def-qa-classical-bit-cost]]).

[F26] The real field is Archimedean, natural powers obey $2^{j+1}=2^j\cdot2$, and induction holds on the naturals ([[thm-of-archimedean]], [[def-nat-power]], [[thm-induction-principle]]).

## Proof


1.1 The rough loop starts at $L=2$ and doubles each round. By [F26] choose a natural $q>4N$. Induction gives $2^j\ge j+1$ for every natural $j$: it is equality at $j=0$, and $2^{j+1}=2^j+2^j\ge(j+1)+(j+1)\ge j+2$. Thus after at most $q$ rounds the scale $L=2^q>4N$ has been reached, so $L^2\ge4N$; the other stopping condition can only make the loop stop earlier. By [F21]–[F22], $y\ne0$ is exactly a nonzero raw estimate test. [given, F21, F22, F25, F26, algebra]

1.2 Suppose $t>0$ and put $\theta=\arcsin\sqrt{t/N}$. Let $m$ be the largest nonnegative index such that $2^j\theta\le1/5$ for every $1\le j\le m$; the condition is vacuous for $m=0$. This index is finite because $\theta>0$ and the powers of two are unbounded by [F26]. For each rough scale $L=2^j$ with $1\le j\le m$, one has $L\theta\le1/5$ and $L^2\le1/(25\theta^2)\le N/25<4N$, because $\theta\ge\sin\theta=\sqrt{t/N}\ge1/\sqrt N$. Thus cutoff cannot occur during these $m$ rounds. [given, F1, F2, F26, algebra]

2.1 The threshold $T=[20(22/7)^2/\epsilon]L$ is a positive rational. By [F26] and the induction argument in step 1.1, some power of two exceeds $T$, so the doubling loop terminates; its first value $M\ge T$ is the least such power and satisfies $M<2T$. Since $L\ge2$ and $\epsilon\le1$, $T>2$, so $M$ is even and at least $2$, as required by Count and the rounding lemma. Since $22/7>\pi$, $M\ge20\pi^2L/\epsilon$ and $M<40(22/7)^2L/\epsilon$. The rounding step [F24] terminates and makes the integer output explicit; its bit work is covered by [F25]. [given, F23, F24, F25, F26, step 1.1, algebra]

2.2 For $0\le x\le2/5$, define $H(x)=\sin x-x\cos x$. By [F7], $H(0)=0$ and $H'(x)=x\sin x\ge0$, so the mean value theorem gives $\sin x\ge x\cos x$. At each rough scale $L\theta\le1/5$, this and $\sin\theta\le\theta$ yield $P_0(L)\ge\cos^2(L\theta)$ by [F2]. Fresh runs make their zero events independent. If $m\ge1$, then $\theta\le1/10$ and [F8] gives $\prod_{j=1}^m\cos^2(2^j\theta)=[\sin(2^{m+1}\theta)/(2^{m+1}\sin\theta\cos\theta)]^2\ge\cos^2(2/5)$, using $\sin x\ge x\cos x$, $\sin\theta\cos\theta\le\theta$, $2^{m+1}\theta\le2/5$, and the decrease of nonnegative cosine from [F7]. If $m=0$, the empty product is $1\ge\cos^2(2/5)$. [F2, F4, F7, F8, step 1.2, algebra]

2.3 On the event that the first $m$ rough labels are zero, the loop cannot terminate before rough scale $2^{m+1}$: none of scales $2^j$, $1\le j\le m$, triggers the cutoff by step 1.2, and the first $m$ labels are zero. By maximality of $m$, $2^{m+1}\theta>1/5$, so $2^{m+1}>1/(5\theta)$. The loop therefore terminates at some scale $L\ge2^{m+1}>1/(5\theta)$, whether by a nonzero label or by the cutoff. Thus [F1] gives $M\ge20(22/7)^2L/\epsilon>4\pi^2/(\epsilon\theta)$, in particular $M\ge4$. Applying [F3], using $\sqrt{t(N-t)}=N\sin\theta\cos\theta$ and $\theta\le(\pi/2)\sin\theta$, gives $|\widetilde t-t|\le\epsilon t/4+\epsilon^2t/64$. The trigonometric inequality follows from [F4] with $u=\theta/\pi$. [F1, F3, F4, step 1.2, algebra]

3.1 Each Count call uses a fresh preparation; the algorithm uses only the supplied access capabilities in [F21]. It is a finite procedure with exact finite stopping tests and certified final output, but no success or query-cost bound follows from this definition alone. [given, F21, F22, step 1.1, step 2.1]

3.2 Since $\cos(2/5)\ge1-(2/5)^2/2=23/25$ by the alternating cosine series [F6], [F5] gives $\cos^2(2/5)\,8/\pi^2>(23/25)^2(8\cdot49/484)>2/3$, where the last comparison is $622104>605000$ after cross multiplication. The final Count is a fresh run, so conditionally on the rough outcomes it succeeds with probability at least $8/\pi^2$; multiplying by the rough-event probability proves joint probability greater than $2/3$. [F3, F5, F6, step 2.3, algebra]

3.3 The output integer differs from $\widetilde t$ by at most $2/3$ by [F1]. If $\epsilon t<1$, raw error plus rounding is at most $(\epsilon/4+\epsilon^2/64)t+2/3<17/64+2/3<1$, so the integer equals $t$. If $\epsilon t\ge1$, then $2/3\le2\epsilon t/3$ and $\epsilon^2t\le\epsilon t$, so total error is at most $(1/4+1/64+2/3)\epsilon t=179\epsilon t/192<\epsilon t$. [F1, F3, step 2.3, algebra]

4.1 If $t=0$, every Count phase is exactly zero by [F2], so rough labels are zero and cutoff $L^2\ge4N$ eventually terminates. The final Count is also exactly zero, and certified rounding returns zero. This proves the zero-count branch and completes the success guarantee. [F1, F2, step 3.3] ∎

