---
id: lem-qa-13-two-nearest-phase-mass
kind: lemma
title: "Two nearest phase labels carry probability at least eight over pi squared"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - lem-qa-phase-estimation-outcome-kernel
  - lem-qa-phase-estimation-geometric-sum
  - lem-qa-13-pi-rational-bounds
  - lem-qa-phase-estimation-sine-chord-bounds
  - thm-sine-and-cosine-derivatives
  - thm-tangent-cotangent-secant-cosecant-derivatives-and-periods
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
  - thm-cofunction-supplementary-and-reflection-identities
  - thm-double-angle-and-power-reduction-identities
  - thm-quarter-turn-values-and-shift-formulas
  - cor-mean-value-theorem
  - thm-chain-rule
  - thm-algebra-of-derivatives
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
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

Let $M=2^m$ with $m\ge1$, and let $\theta\in[0,1)$ be an eigenphase measured by the $M$-label QPE kernel. The two labels $\lfloor M\theta\rfloor$ and $\lceil M\theta\rceil$ reduced modulo $M$ (one label when $M\theta$ is an integer) have total outcome probability at least $8/\pi^2$.

## Facts & Assumptions

**Given:** The QPE eigenphase outcome law with $M=2^m$, $m\ge1$, and phase $\theta\in[0,1)$.

[F1] For label $y$, $P_\theta(y)=M^{-2}|\sum_{j=0}^{M-1}e^{2\pi i j(\theta-y/M)}|^2$ ([[lem-qa-phase-estimation-outcome-kernel]]).

[F2] The finite geometric sum reduces to $(1-z^M)/(1-z)$ when $z\ne1$ ([[lem-qa-phase-estimation-geometric-sum]]).

[F3] For $v\ge0$, $\sin v\le v$ ([[lem-qa-phase-estimation-sine-chord-bounds]]).

[F4] $\pi$ satisfies $3<\pi<22/7$ ([[lem-qa-13-pi-rational-bounds]]).

[F5] Sine/cosine derivatives, tangent/secant derivatives, first-quadrant signs, and the Pythagorean identity are given by [[thm-sine-and-cosine-derivatives]], [[thm-tangent-cotangent-secant-cosecant-derivatives-and-periods]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]], [[thm-chain-rule]], and [[thm-algebra-of-derivatives]].

[F6] The mean value theorem converts a derivative sign into monotonicity on a compact interval ([[cor-mean-value-theorem]]).

[F7] Cofunction and supplementary identities give $\sin(\pi/2-x)=\cos x$, $\tan(\pi/2-x)=\cot x$, and $\cos(\pi-x)=-\cos x$ on their domains ([[thm-cofunction-supplementary-and-reflection-identities]]).

[F8] $\cos(2x)=2\cos^2x-1$ and $\sin^2x+\cos^2x=1$ ([[thm-double-angle-and-power-reduction-identities]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

## Proof

1.1 If $r=\{M\theta\}=0$, write $q=M\theta$. For label $q$ modulo $M$, every summand in [F1] is $1$, so its probability is $1$; for any other label, the geometric ratio in [F2] is not $1$ but its $M$th power is $1$, so the sum is zero. Otherwise $0<r<1$, the floor and ceiling labels have exact probabilities $\sin^2(\pi r)/(M^2\sin^2(\pi r/M))$ and $\sin^2(\pi r)/(M^2\sin^2(\pi(1-r)/M))$ by [F1]–[F2]. Applying [F3] to each denominator shows their sum is at least $g(r)/\pi^2$, where $g(r)=\sin^2(\pi r)(r^{-2}+(1-r)^{-2})$. [given, F1, F2, F3, algebra]

1.2 The function $g$ is symmetric under $r\mapsto1-r$. For $0<r<1/2$, set $t=1-2r$, $A=r^{-2}+(1-r)^{-2}>0$ and $C=r^{-3}-(1-r)^{-3}>0$. Differentiation gives $g'(r)=2\sin(\pi r)[\pi\cos(\pi r)A-\sin(\pi r)C]$, and direct substitution gives $C/A=2t(3+t^2)/(1-t^4)$. Since $\sin(\pi r)>0$, $\cos(\pi r)>0$, and $A>0$, $g'(r)\le0$ exactly when $\pi\cot(\pi r)\le C/A$. By [F7], this is $\tan(\pi t/2)\le2t(3+t^2)/[\pi(1-t^4)]$. [F5, F7, algebra]

1.3 Put $T(t)=\tan(\pi t/2)$ on $[0,1/2]$. Its second derivative is $T''(t)=(\pi^2/2)\tan(\pi t/2)\sec^2(\pi t/2)\ge0$ by [F5]. Thus $T'$ is nondecreasing by [F6]; applying the mean value theorem on $[a,t]$ and $[t,b]$ for $a<t<b$ shows $T(t)$ lies below the chord joining $(a,T(a))$ and $(b,T(b))$. For endpoint values, let $c=\cos(\pi/3)>0$. By [F7]–[F8], $2c^2-1=\cos(2\pi/3)=-c$, so $(2c-1)(c+1)=0$ and $c=1/2$. Hence $\sin(\pi/3)>4/5$ because its square is $3/4>16/25$, so [F7] gives $\tan(\pi/6)=\cot(\pi/3)<5/8$. Also $\sin(\pi/4)=\cos(\pi/4)>0$ by cofunction symmetry, hence $\tan(\pi/4)=1$. [F4, F5, F6, F7, F8, algebra]

2.1 For $0\le t\le1/3$, the chord from $0$ to $1/3$ in step 1.3 gives $T(t)\le(15/8)t$. For $t>0$, the right side of the inequality in step 1.2 is at least $6t/\pi>21t/11>(15/8)t$, using $\pi<22/7$ and $21/11>15/8$; at $t=0$ both sides are zero. [F4, step 1.2, step 1.3, algebra]

2.2 For $1/3\le t\le1/2$, the chord from $0$ to $1/2$ in step 1.3 gives $T(t)\le2t$. Put $R(t)=(3+t^2)/(1-t^4)$. On this interval its denominator is positive, and differentiation gives $R'(t)=2t(1+6t^2+t^4)/(1-t^4)^2\ge0$, so $R(t)\ge R(1/3)=63/20>22/7>\pi$. The right side in step 1.2 is therefore $2tR(t)/\pi\ge2t$. [F4, F5, F6, step 1.2, step 1.3, algebra]

2.3 For $1/2\le t<1$, put $\alpha=\pi(1-t)/2$. The function $u(x)=\tan x-x$ has $u(0)=0$ and $u'(x)=\tan^2x\ge0$ on $[0,\pi/4]$, so [F5]–[F6] give $\tan\alpha\ge\alpha$. Hence $\sin\alpha-\alpha\cos\alpha=\cos\alpha(\tan\alpha-\alpha)\ge0$. The function $h(\alpha)=\sin\alpha(1-\alpha^2/3)-\alpha\cos\alpha$ has derivative $(\alpha/3)(\sin\alpha-\alpha\cos\alpha)\ge0$ and $h(0)=0$, so $h(\alpha)\ge0$ and $\cot\alpha\le1/\alpha-\alpha/3$. After multiplying the desired comparison by $\pi(1-t)>0$, its right side minus this upper bound is $(1-t)^2[\pi^2/6-2/((1+t)(1+t^2))]>0$, since $(1+t)(1+t^2)\ge15/8$ and $\pi>3$. This proves the inequality in step 1.2 on the last interval. [F4, F5, F6, step 1.2, algebra]

3.1 Steps 2.1–2.3 show $g$ is nonincreasing on $(0,1/2]$; symmetry then shows its minimum on $(0,1)$ is $g(1/2)=8$. Step 1.1 therefore gives probability at least $8/\pi^2$, and the exact-grid case in step 1.1 already has probability one. [step 1.1, step 2.1, step 2.2, step 2.3, algebra] ∎

