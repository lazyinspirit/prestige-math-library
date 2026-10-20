---
id: thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation
kind: theorem
title: "Target-dependent depth-six approximation of Lipschitz functions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-relu-network, def-sobolev-space-wkp-and-its-norm, def-axiom-of-choice, thm-w-one-infinity-functions-have-lipschitz-representatives, def-countable-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks, Theorem 2 and complete proof"
      url: "https://arxiv.org/pdf/1610.01145"
      locator: "Theorem 2 and proof, §3.3, printed pp. 13–19."
    - title: "Michael J. Sullivan, Deep Learning Theory, §5.3"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "§5.3, target-dependent interpolation and adaptive coding construction."
---

## Statement

Assume the Axiom of Choice. Let $F_{1,1}$ be the unit ball of $W^{1,\infty}((0,1);\mathbb R)$ under the maximum norm of the function and its weak derivative, using the Lipschitz representative on $[0,1]$. There is an absolute constant $C$ such that for every $f\in F_{1,1}$ and $0<\varepsilon<1/2$, an architecture depending on $f$ computes a ReLU approximation with uniform error at most $\varepsilon$, depth $6$ counting input and output layers, and at most $C/[\varepsilon\log(1/\varepsilon)]$ weights, connections, and computation units.

## Statement references

[Yarotsky, Theorem 2 and complete proof: adaptive depth-six Lipschitz approximation](https://arxiv.org/pdf/1610.01145)

[Sullivan, §5.3: target-dependent approximation architecture](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The Axiom of Choice, a function class element $f\in W^{1,\infty}((0,1);\mathbb R)$ with $\|f\|_{W^{1,\infty}}\le1$, and $0<\varepsilon<1/2$.

[F1] The $W^{1,\infty}$ norm is $\max(\|f\|_{L^\infty},\|Df\|_{L^\infty})$ ([[def-sobolev-space-wkp-and-its-norm]]), and under the Axiom of Choice every such class on an open bounded convex domain has a Lipschitz representative with constant at most $\|Df\|_{L^\infty}$ ([[thm-w-one-infinity-functions-have-lipschitz-representatives]]).

[F2] The Axiom of Choice implies Countable Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[F3] ReLU networks use hidden ReLU units and affine outputs, and depth counts input and output layers ([[def-relu-network]]).

## Proof

1.1 By [A1] and [F2], the Countable Choice convention in [F1] holds. Choose the Lipschitz representative on $(0,1)$ and extend it uniquely to $[0,1]$: values along any sequence approaching an endpoint are Cauchy and any two such limits agree by the Lipschitz bound. The continuous representative satisfies $|f|\le1$ everywhere, since any interior value with modulus greater than $1$ would by continuity violate the almost-everywhere bound on an interval of positive measure. Let $T\ge1$ be an integer and let $f_1$ linearly interpolate $f$ at $t/T$, $0\le t\le T$. Then $f_1$ is $1$-Lipschitz, and $f_2=f-f_1$ vanishes at every grid endpoint and is $2$-Lipschitz. Indeed, both summands are $1$-Lipschitz. [given, F1, F2, A1, construct]

2.1 Let $m\ge1$ and let $\Gamma$ be the set of piecewise-linear functions on the grid $r/m$, $0\le r\le m$, with endpoint values zero and successive increments in $\{-2/m,0,2/m\}$. Thus $|\Gamma|\le3^m$. For each coarse interval $I_t=[t/T,(t+1)/T)$, rescale $g_t(y)=Tf_2((t+y)/T)$. This function is $2$-Lipschitz and vanishes at both endpoints. Quantize each node value down to the nearest multiple of $2/m$; adjacent quantized values differ by one of the three allowed increments. At a fraction $\theta$ of a grid subinterval, a $2$-Lipschitz function differs from its endpoint chord by at most $4\theta(1-\theta)/m\le1/m$; quantizing both endpoint values changes that chord by at most $2/m$. Hence some $\gamma_t\in\Gamma$ satisfies $\sup_{x\in I_t}|f_2(x)-T^{-1}\gamma_t(Tx-t)|\le3/(Tm)$. [step 1.1, construct, algebra]

3.1 Define the discontinuous selector $\chi(z)=z$ for $0\le z<1$ and $0$ otherwise. For $x\in[0,1)$, exactly the index $t$ with $x\in I_t$ has $\chi(Tx-t)=Tx-t$; all other terms vanish. Therefore $$\widetilde f_2(x)=\frac1T\sum_{\gamma\in\Gamma}\gamma\!\left(\sum_{t:\gamma_t=\gamma}\chi(Tx-t)\right)$$ equals the local interpolant $T^{-1}\gamma_t(Tx-t)$ and has error at most $3/(Tm)$. If $s_{\gamma,r}$ is the slope of $\gamma$ on $[r/m,(r+1)/m]$, then its zero value at $0$ gives $$\gamma(z)=s_{\gamma,0}\rho(z)+\sum_{r=1}^{m-1}(s_{\gamma,r}-s_{\gamma,r-1})\rho(z-r/m),\qquad 0\le z\le1,$$ by matching the initial slope and each slope jump. This uses $m$ ReLU hinges. The cache is a depth-five mixed-gate network with $O(T+m3^m)$ units and weights: $T$ selector units, at most $3^m$ grouped sums, $m3^m$ ReLU hinge units, and an affine output. For the coarse interpolant, set $s_t=T(f((t+1)/T)-f(t/T))$ for $0\le t<T$; then $$f_1(x)=f(0)+s_0\rho(x)+\sum_{t=1}^{T-1}(s_t-s_{t-1})\rho(x-t/T)$$ on $[0,1]$. This slope-jump identity has $T$ ReLU units and one affine output, so $f_1$ is a depth-three ReLU network of size $O(T)$. [step 2.1, F3, construct, algebra]

4.1 Replace each discontinuous selector by $$\chi_\delta(z)=\rho(z)-\delta^{-1}\rho(z-(1-\delta))+(\delta^{-1}-1)\rho(z-1).$$ This continuous piecewise-linear function agrees with $\chi$ on $[0,1-\delta]$, decreases linearly to zero on $[1-\delta,1]$, and is zero outside $[0,1]$. Let $\varphi_\delta$ be the piecewise-linear tent that is zero outside $[0,1-\delta]$, rises from $0$ to $1$ on $[0,\delta]$, equals $1$ on $[\delta,1-2\delta]$, and falls to $0$ on $[1-2\delta,1-\delta]$. Its four slope jumps give a representation by at most four ReLU hinges as in step 3.1. Put $\Phi_\delta(x)=\sum_{t=0}^{T-1}\varphi_\delta(Tx-t)$; this comb is a ReLU spline with $O(T)$ units and weights. Replacing the $T$ selectors by three ReLU units each and adding the comb keeps the cache size $O(T+m3^m)$ independently of $\delta$. [step 3.1, construct, algebra]

5.1 Let $\widetilde f_{2,\delta}$ be the cache network using $\chi_\delta$, and set $$f_{2,\delta}(x)=\rho(\widetilde f_{2,\delta}(x)+2\Phi_\delta(x)-1)-\rho(2\Phi_\delta(x)-1).$$ At most one selector is nonzero at any $x$, its value lies in $[0,1]$, and each rescaled $\gamma_t$ vanishes at both endpoints and is $2$-Lipschitz; hence $|\widetilde f_{2,\delta}(x)|\le1$. On each plateau where $\Phi_\delta=1$, the selector is unchanged and the gate outputs the cache. Where $\Phi_\delta=0$, the two ReLU terms cancel. On the transition strips $y\in[0,\delta]$ or $y\in[1-2\delta,1-\delta]$ in a coarse coordinate $y=Tx-t$, $\chi_\delta(y)=\chi(y)$, so the cache equals the continuous piecewise-linear spline $\widetilde f_2$ from step 3.1. For $0\le p\le1$, the map $a\mapsto\rho(a+2p-1)-\rho(2p-1)$ is $1$-Lipschitz and vanishes at $a=0$, hence its output has modulus at most $|a|$. Every point where $0<\Phi_\delta<1$ is within $2\delta/T$ of a coarse endpoint; both $f_2$ and $\widetilde f_2$ vanish there and are $2$-Lipschitz, so on those strips $|f_2-f_{2,\delta}|\le8\delta/T$. Where $\Phi_\delta=0$, $f_{2,\delta}=0$ and $|f_2|\le4\delta/T$, which is also within this bound. On plateaus the quantization error is at most $3/(Tm)$ by step 2.1. Thus $$\|f_2-f_{2,\delta}\|_\infty\le 8\delta/T+3/(Tm).$$ The two final ReLU preactivations absorb the former affine cache output, followed by a shared affine output, so depth increases from five to six; complexity remains $O(T+m3^m)$. [step 1.1, step 2.1, step 3.1, step 4.1, F3, algebra]

6.1 Choose $m=\lceil\tfrac12\log_3(1/\varepsilon)\rceil$, $T=\lceil6/(m\varepsilon)\rceil$, and $0<\delta\le\min\{1/4,\varepsilon T/16\}$. Then both error terms in step 5.1 are at most $\varepsilon/2$, while $T+m3^m\le C/[\varepsilon\log(1/\varepsilon)]$: here $T=O(1/(\varepsilon m))$, $3^m=O(\varepsilon^{-1/2})$, and $m\varepsilon^{-1/2}=O(1/(\varepsilon m))$ because $\varepsilon^{1/2}(\log(1/\varepsilon))^2$ is bounded on $(0,1/2)$. The sum $f_1+f_{2,\delta}$ is the required ReLU approximation. [step 3.1, step 5.1, algebra, choose] ∎



## Proof notes

The source's printed intermediate estimate for the cache uses $2/m$. This proof uses the directly verified conservative $3/m$ bound and chooses $T$ with a corresponding larger constant; the asymptotic rate is unchanged.
