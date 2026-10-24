---
id: alg-particle-backward-simulator
kind: algorithm
title: Particle backward simulator
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-state-space-filtering-laws
  - lem-smoothing-backward-kernel-bayes-factorization
  - def-feynman-kac-path-targets-and-normalizers
  - alg-sequential-importance-resampling
axiom_use: AC is inherited from the state-space conditional-law and Feynman–Kac path-law interfaces. Once normalized filtering particles or exact backward kernels are supplied, the finite sampling instructions make no further choice.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 11, §11.2"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §5.2"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Definition

Fix a finite horizon $T\ge0$ and a requested path count $S\ge1$, used in
either mode below. In the **particle mode**, the inputs include a particle
count $N\ge1$ and normalized filtering clouds
$$\{(x_t^i,w_t^i):1\le i\le N\},\qquad w_t^i\ge0,\quad\sum_{i=1}^Nw_t^i=1,$$
for $0\le t\le T$, produced, for example, by
[[alg-sequential-importance-resampling]]. Each $x_t^i$ is the time-$t$
coordinate of its stored particle path. Write $M_{t+1}$ for the model
transition kernel and require a product-measurable density
$f_{t+1}(x'\mid x)$ relative to a declared sigma-finite measure
$\lambda_{t+1}$, meaning
$$M_{t+1}(x,A)=\int_A f_{t+1}(x'\mid x)\,\lambda_{t+1}(dx')$$
for each measurable $A$. For each $t<T$, define the predictive score with
zero-weight terms omitted:
$$q_{t+1}^N(x')=\sum_{i:w_t^i>0}w_t^i f_{t+1}(x'\mid x_t^i).$$
For particle-mode path sampling, define the set of reachable indices
recursively by $R_T=\{j:w_T^j>0\}$. Descending from $t=T-1$ to $0$, require
$q_{t+1}^N(x_{t+1}^j)\in(0,\infty)$ for every $j\in R_{t+1}$, and put
$$R_t=\bigcup_{j\in R_{t+1}}\{i:w_t^i>0,\ f_{t+1}(x_{t+1}^j\mid x_t^i)>0\}.$$
These are exactly the indices that can be drawn with positive probability at
the corresponding backward step. For the all-marginals mode below, require
instead that $q_{t+1}^N(x_{t+1}^j)\in(0,\infty)$ whenever the current
smoothing weight $\bar w_{t+1|T}^j$ is positive. Thus no denominator is
required for an omitted zero-weight term. At $T=0$ there are no denominator
conditions.

In particle mode, repeat independently for $s=1,\ldots,S$:

1. Draw $I_T^s$ from $\{1,\ldots,N\}$ with probabilities $w_T^i$ and set
   $\widetilde X_T^s=x_T^{I_T^s}$.
2. For $t=T-1,T-2,\ldots,0$, set $b_t^i=0$ without evaluating the density
   whenever $w_t^i=0$. For $w_t^i>0$, set
   $$b_t^i(\widetilde X_{t+1}^s)=\frac{w_t^i f_{t+1}(\widetilde X_{t+1}^s\mid x_t^i)}{q_{t+1}^N(\widetilde X_{t+1}^s)}.$$
   Draw $I_t^s$ from this probability vector, and set
   $\widetilde X_t^s=x_t^{I_t^s}$.
3. Return the tuple
   $$\widetilde X_{0:T}^s=(x_0^{I_0^s},\ldots,x_T^{I_T^s}).$$
   This is a draw from the particle backward approximation to the smoothing
   path law. The coordinates are selected by separate backward indices and
   need not be the stored forward ancestor history of any one particle.
The particle path-sampling output is the list
$\widetilde X_{0:T}^1,\ldots,\widetilde X_{0:T}^S$.

If an exact filtering kernel $\eta_T$ and supplied backward conditional
kernels $B_t$ from
[[lem-smoothing-backward-kernel-bayes-factorization]] are available for
general transition kernels, there is a separate exact-kernel mode: draw
$S$ conditionally independent paths, each by drawing $X_T\sim\eta_T$ and then
drawing $X_t\sim B_t(X_{t+1},\cdot)$ successively backward. This mode uses
the actual kernels; it does not evaluate a transition density or a kernel on
particle singletons. It returns exact smoothing paths under the supplied
conditional versions wherever their factorization holds.

An optional all-marginals mode computes particle smoothing weights instead
of drawing paths. Initialize $\bar w_{T|T}^j=w_T^j$. For
$t=T-1,\ldots,0$, let $J_{t+1}=\{j:\bar w_{t+1|T}^j>0\}$. For each
$j\in J_{t+1}$ and $i$ with $w_t^i>0$, set
$$b_{t}^{i,j}=\frac{w_t^i f_{t+1}(x_{t+1}^j\mid x_t^i)}{q_{t+1}^N(x_{t+1}^j)};$$
set $b_t^{i,j}=0$ without evaluating the density if $j\notin J_{t+1}$ or
$w_t^i=0$. Update
$$\bar w_{t|T}^i=\sum_{j\in J_{t+1}}\bar w_{t+1|T}^j b_t^{i,j}.$$
For every active $j$, $(b_t^{i,j})_{i=1}^N$ is a probability vector, so the
raw updated values are nonnegative and already sum to one; explicit
normalization leaves them unchanged. Return
$\sum_i\bar w_{t|T}^i\delta_{x_t^i}$ as the approximate smoothed marginal at
time $t$. The algorithm makes no finite-particle accuracy, consistency, or
long-time stability claim.

## Remarks

When a required density denominator is zero or infinite, the corresponding
mode is inadmissible; the algorithm does not replace it with uniform weights.
Zero filtering or smoothing weights are omitted before density evaluation, so
no term evaluates $0\cdot\infty$ or $0/0$. For a general transition kernel,
use an exact supplied backward conditional kernel as in the second mode, or
provide a valid dominating-density interface. A fixed-lag target remains a
truncated-observation target; see
[[alg-fixed-lag-particle-smoother]].
