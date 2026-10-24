---
id: ex-threshold-class-is-glivenko-cantelli
kind: example
title: The uniform threshold class is Glivenko–Cantelli
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps: [def-countable-choice, def-covering-packing-bracketing-number-and-metric-entropy, def-empirical-process-and-rademacher-process, def-glivenko-cantelli-class, thm-gc-by-bracketing-entropy, thm-rationals-countable, lem-subset-of-countable, lem-rat-embeds-dense]
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
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, §6, Theorem 6.1"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Empirical Processes: Theory and Applications, Section 8"
      url: "http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf"
---

## Example

Assume Countable Choice. Let $P$ be uniform probability on $[0,1]$, let $X_1,X_2,\ldots$ be iid with law $P$, and let
$$\mathcal F=\{f_t:t\in[0,1]\},\qquad f_t(x)=\mathbf1_{[0,t]}(x).$$
Then $\mathcal F$ is strongly $P$-Glivenko–Cantelli:
$$\sup_{0\le t\le1}|P_nf_t-Pf_t|\longrightarrow0\quad\text{almost surely}.$$

## Facts & Assumptions

**Given:** Countable Choice, the iid Uniform$[0,1]$ experiment, the threshold class $\mathcal F$, and the bracketing Glivenko–Cantelli theorem.

[A1] $P([0,t])=t$ for $t\in[0,1]$, and the envelope $F(x)=1$ is integrable.

[A2] Countable Choice supplies the theorem's strong-law branch and, for each fixed $t<1$, a sequence of rational approximants chosen from the intervals $(t,\min(1,t+1/k))$ ([[def-countable-choice]]).

[F1] [[def-glivenko-cantelli-class]]: uniform convergence of $P_nf$ to $Pf$ over the class defines the Glivenko–Cantelli property.

[F2] [[def-covering-packing-bracketing-number-and-metric-entropy]]: an $L^1(P)$ bracket has measurable endpoints, contains functions lying between them $P$-almost everywhere, and has width $P(u-l)$.

[F3] [[def-empirical-process-and-rademacher-process]]: for iid observations, $P_nf_t=n^{-1}\sum_{i=1}^n f_t(X_i)$ and $Pf_t=\int f_t\,dP$.

[F4] [[thm-gc-by-bracketing-entropy]]: a pointwise-measurable class with an integrable envelope and finite $L^1(P)$ bracketing number at every positive scale is strongly $P$-Glivenko–Cantelli when Countable Choice is assumed.

[F5] [[thm-rationals-countable]]: $\mathbb Q$ is countable.

[F6] [[lem-subset-of-countable]]: every subset of an at most countable set is at most countable.

[F7] [[lem-rat-embeds-dense]]: between any two distinct real numbers there is a rational.

## Verification

**Given:** The objects and facts above.

1.1 The class is pointwise measurable. Since $1\in\mathbb Q$, the rational thresholds together with $1$ are indexed by $\mathbb Q\cap[0,1]$, a countable set by [F5]–[F6]. For each fixed $t<1$, Countable Choice [A2] selects $q_k\in\mathbb Q\cap(t,\min(1,t+1/k))$, which exist by [F7]. Then $q_k\to t$ from above, so $\mathbf1_{[0,q_k]}(x)\to\mathbf1_{[0,t]}(x)$ for every $x\in[0,1]$. [A2, F5, F6, F7, construct]

1.2 For each integer $m\ge1$, the $m$ brackets $[f_{j/m},f_{(j+1)/m}]$, $0\le j<m$, cover $\mathcal F$ and have $L^1(P)$ width $(j+1)/m-j/m=1/m$. Thus for every $\epsilon>0$, taking an integer $m>1/\epsilon$ gives $N_{[]} (\epsilon,\mathcal F,L^1(P))\le m<\infty$. The envelope condition is [A1]. [A1, F2, choose, algebra]

2.1 By [F4] under [A2], the hypotheses verified in steps 1.1 and 1.2 imply $\sup_{t\in[0,1]}|P_nf_t-Pf_t|\to0$ almost surely, which is the claimed strong Glivenko–Cantelli property by [F1]. [A2, F1, F3, F4, step 1.1, step 1.2] ∎
