---
id: cex-dini-needs-a-continuous-limit
kind: counterexample
title: "Dini's theorem fails for a discontinuous limit: powers on $[0,1]$ decrease pointwise to a discontinuous endpoint indicator but not uniformly"
status: published
origin: session
deps: [thm-dini-on-a-closed-interval, cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly, def-continuity-real, thm-algebra-of-continuous-functions, def-integer-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** continuity of the pointwise limit in Dini's theorem can be
dropped.

On $[0,1]$ let $f_k(x)=x^{k+1}$. These continuous functions decrease
pointwise to the discontinuous endpoint indicator

$$\chi(x)=\begin{cases}0,&0\le x<1,\\1,&x=1,\end{cases}$$

and the convergence is not uniform.

## Facts & Assumptions

**Given:** The functions $f_k(x)=x^{k+1}$ and the endpoint indicator $\chi$ on $[0,1]$.

[L1] The powers $x^{k+1}$ converge pointwise to $\chi$ on $[0,1]$ and do not converge uniformly there ([[cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly]]).

[L2] Every polynomial function, hence every natural power, is continuous ([[thm-algebra-of-continuous-functions]], [[def-integer-power]], [[def-continuity-real]]).

[L3] Dini's theorem on a closed interval requires the approximating functions and their pointwise limit to be continuous ([[thm-dini-on-a-closed-interval]]).

[L4] Continuity at $c$ requires that every positive output error admit a positive input radius on which all nearby function values remain close to the value at $c$ ([[def-continuity-real]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $f_k$ is continuous by [L2]. [L2]

1.2 For $x\in[0,1]$, $f_{k+1}(x)=x^{k+2}=x\,x^{k+1}\le x^{k+1}=f_k(x)$, so the sequence is pointwise nonincreasing. [given, algebra]

1.3 The pointwise convergence to $\chi$ and the failure of uniform convergence are [L1]. [L1]

1.4 The function $\chi$ is discontinuous at $1$: for every $\delta>0$, the point $y:=1-\min\{\delta/2,1/2\}$ lies in $[0,1)$ with $|y-1|<\delta$ and $|\chi(y)-\chi(1)|=1$. [L4, algebra]

2.1 Thus compactness, continuity of all approximants, and monotonicity hold, but the limit is discontinuous and the uniform conclusion fails; continuity of the limit in [L3] is indispensable. [step 1.1, step 1.2, step 1.3, step 1.4, L3] ∎
