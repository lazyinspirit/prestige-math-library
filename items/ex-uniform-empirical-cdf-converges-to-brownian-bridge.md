---
id: ex-uniform-empirical-cdf-converges-to-brownian-bridge
kind: example
title: The uniform empirical CDF converges to a Brownian bridge
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps: [def-donsker-class-and-asymptotic-equicontinuity, def-empirical-process-and-rademacher-process, def-covering-packing-bracketing-number-and-metric-entropy, thm-empirical-process-functional-clt, def-axiom-of-choice, thm-rationals-countable, lem-subset-of-countable, lem-rat-embeds-dense]
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, §§1–2 and 7"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Section 10"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
---

## Example

Assume the Axiom of Choice. Let $X_i$ be iid Uniform$[0,1]$, $F_n(t)=P_n([0,t])$, and $F(t)=t$. The empirical process $\mathbb G_n(t)=\sqrt n(F_n(t)-F(t))$, $0\le t\le1$, converges weakly in outer expectation in $\ell^\infty([0,1])$ to the standard Brownian bridge: the tight centered Gaussian process $B$ with covariance
$$E[B(s)B(t)]=\min(s,t)-st.$$

## Facts & Assumptions

**Given:** Iid Uniform$[0,1]$ observations and the fixed-$P$ bracketing functional CLT.

[A1] For $0\le t\le1$, $P([0,t])=t$ and the envelope of $f_t=\mathbf1_{[0,t]}$ is $H\equiv1$, so $PH^2=1$.

[A2] AC is the premise of the functional CLT [F4] and permits choosing one rational approximant from each of the countably many nonempty intervals used in step 1.1 ([[def-axiom-of-choice]]).

[F1] [[def-empirical-process-and-rademacher-process]]: $F_n(t)=P_n f_t$ and $\mathbb G_n(f_t)=\sqrt n(P_nf_t-Pf_t)$.

[F2] [[def-donsker-class-and-asymptotic-equicontinuity]]: a $P$-Donsker limit is a tight centered Gaussian bridge with covariance $P[(f-Pf)(g-Pg)]$.

[F3] [[def-covering-packing-bracketing-number-and-metric-entropy]]: bracket width in $L^2(P)$ is the $L^2(P)$ norm of the nonnegative endpoint difference.

[F4] [[thm-empirical-process-functional-clt]]: under pointwise measurability, a square-integrable envelope, and a finite fixed-$P$ normalized $L^2(P)$ bracketing entropy integral, the process converges in outer expectation to a tight Gaussian bridge.

[F5] [[thm-rationals-countable]]: $\mathbb Q$ is countable.

[F6] [[lem-subset-of-countable]]: every subset of an at most countable set is at most countable.

[F7] [[lem-rat-embeds-dense]]: between any two distinct real numbers there is a rational.

## Verification

**Given:** The objects and facts above.

1.1 The class $\mathcal F=\{f_t:t\in[0,1]\}$ is pointwise measurable. Since $1\in\mathbb Q$, the rational thresholds together with $1$ are indexed by $\mathbb Q\cap[0,1]$, which is countable by [F5]–[F6]. For each fixed $t<1$, [A2] and [F7] give rationals $q_k\in\mathbb Q\cap(t,\min(1,t+1/(k+1)))$ for every integer $k\ge0$, so $q_k\to t$ from above and $f_{q_k}(x)\to f_t(x)$ for every $x\in[0,1]$. For $t=1$, use the constant sequence $q_k=1$. The envelope $H\equiv1$ is measurable and square-integrable. [A2, F1, F5, F6, F7, construct]

1.2 For an integer $m\ge1$, the $m$ brackets $[f_{j/m},f_{(j+1)/m}]$ have $L^2(P)$ width $\sqrt{1/m}$, since their endpoint difference is the indicator of an interval of length $1/m$. Thus for $0<\epsilon\le1$, choosing $m=\lceil\epsilon^{-2}\rceil$ gives $N_{[]} (\epsilon,\mathcal F,L^2(P))\le m$. [A1, F3, choose, algebra]

2.1 Consequently $\log N_{[]} (\epsilon,\mathcal F,L^2(P))\le\log(1+\epsilon^{-2})\le\log2+2\log(1/\epsilon)$ for $0<\epsilon\le1$. Since $\log(1/\epsilon)\le1/\epsilon$, the square-root entropy is bounded by $\sqrt{\log2}+\sqrt2\epsilon^{-1/2}$, an integrable function on $(0,1]$. All hypotheses of [F4] hold. [A1, F1, F3, F4, step 1.1, step 1.2, algebra]

3.1 Applying [F4] gives a tight centered Gaussian limit. For $s,t\in[0,1]$, $P(f_sf_t)=P([0,\min(s,t)])=\min(s,t)$ and $Pf_sPf_t=st$, so [F2] gives covariance $\min(s,t)-st$. This is precisely the defining covariance of the standard Brownian bridge stated in the example, proving the claimed limit. AC is carried from [F4]. [A1, A2, F2, F4, step 2.1] ∎
