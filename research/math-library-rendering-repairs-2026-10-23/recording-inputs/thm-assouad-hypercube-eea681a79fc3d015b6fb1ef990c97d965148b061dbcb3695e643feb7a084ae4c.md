---
id: thm-assouad-hypercube
kind: theorem
title: "Assouad lower bound for a squared-error hypercube"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-bayes-and-minimax-risk
  - def-loss-function-and-risk
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - def-randomized-procedure-as-a-markov-kernel
  - def-statistical-experiment
  - def-total-variation-distance-for-probability-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 8, §§8.5.1–8.5.3 and §8.8.3"
      url: "https://stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Let $d\ge1$, $a>0$, and consider the finite experiment indexed by
$\omega\in\{0,1\}^d$ with sample laws $P_\omega$. The target is
$t_\omega=a\omega\in\mathbb R^d$, the action is in $\mathbb R^d$, and loss
is squared Euclidean distance. For each coordinate $i$, let $\omega^{(i)}$
denote the vector with bit $i$ flipped, and set
$$v:=\max_{\omega\in\{0,1\}^d,\ 1\le i\le d} \|P_\omega-P_{\omega^{(i)}}\|_{\rm TV}.$$
For every randomized estimator kernel $K$,
$$\max_{\omega}R_\omega(K)\ge\frac{a^2d}{8}(1-v),$$
and the same lower bound holds for the minimax risk. The total variation
convention is $\|P-Q\|_{\rm TV}=\sup_A|P(A)-Q(A)|$.

## Facts & Assumptions

**Given:** A positive integer $d$, a number $a>0$, the finite hypercube experiment, and an arbitrary randomized action kernel $K$.

[F1] [[def-statistical-experiment]] and [[def-parameter-measurable-statistical-model-as-markov-kernel]]: the parameter set $\{0,1\}^d$ is finite with its power-set sigma-algebra and the model assigns $P_\omega$ to $\omega$.

[F2] [[def-randomized-procedure-as-a-markov-kernel]]: action-event probabilities $x\mapsto K(x,B)$ are measurable, and each $K(x,\cdot)$ is a probability measure.

[F3] [[def-loss-function-and-risk]]: the squared-error risk is the nonnegative kernel integral $R_\omega(K)=\int\int\|z-a\omega\|_2^2K(x,dz)P_\omega(dx)$.

[F4] [[def-total-variation-distance-for-probability-laws]]: total variation is the event supremum $\sup_A|P(A)-Q(A)|$ and lies in $[0,1]$.

[F5] [[def-bayes-and-minimax-risk]]: minimax risk is the infimum over procedures of the supremum of their risks.

## Proof

1.1 For each coordinate $i$, define $\phi_i(x)=K(x,\{z\in\mathbb R^d:z_i\ge a/2\})$. This is a measurable $[0,1]$-valued function by [F2]. If the true bit is $0$, an action counted by $\phi_i$ has coordinate squared error at least $a^2/4$; if the true bit is $1$, an action outside that event has coordinate squared error at least $a^2/4$. Thus $R_\omega(K)\ge\frac{a^2}{4}\sum_{i=1}^d \bigl[(1-\omega_i)\,P_\omega\phi_i+\omega_i\,P_\omega(1-\phi_i)\bigr],$ where $P f:=\int f\,dP$. [F1, F2, F3, given, algebra]

2.1 For any two probability laws $P,Q$ and measurable $\phi:\mathcal X\to[0,1]$, the finite approximants $\phi_N=N^{-1}\sum_{r=1}^N\mathbf1_{\{\phi\ge r/N\}}$ satisfy $0\le\phi-\phi_N\le1/N$. By [F4], $\int\phi_NdP-\int\phi_NdQ\le\|P-Q\|_{\rm TV}$, and the replacement error is at most $2/N$. Letting $N\to\infty$ gives $\int\phi dP-\int\phi dQ\le\|P-Q\|_{\rm TV}$. Applying the same result to $1-\phi$ gives $P\phi+Q(1-\phi)\ge1-\|P-Q\|_{\rm TV}.$ For each coordinate, pair every hypercube vertex with bit $i=0$ to the unique neighbor with bit $i=1$. There are $2^{d-1}$ such pairs, and each pair's two testing errors in step 1.1 sum to at least $1-v$. Averaging over all $2^d$ vertices therefore gives average coordinate error at least $(1-v)/2$. This establishes the coordinate error bound. [F4, step 1.1, algebra]

3.1 Average the risk bound in step 1.1 over the $2^d$ vertices. Step 2.1 shows that the average risk is at least $a^2d(1-v)/8$. The supremum of finitely many risks is at least their arithmetic mean, so every $K$ has maximum risk at least this amount. Taking the infimum over procedures using [F5] proves the minimax bound. [F5, step 1.1, step 2.1, algebra] ∎

## Remarks

The square below illustrates the pairing in step 2.1 for $d=2$; the theorem applies to every $d\ge1$. Subscripts $00,10,01,11$ abbreviate the corresponding bit vectors. Each vertex represents a parameter $\omega$, its target $t_\omega=a\omega$, and its sample law $P_\omega$. Edges join parameters differing in exactly one bit; they are pairings, not maps between probability laws. The two thick horizontal edges are the pairs for coordinate $i=1$.

```tikz
\begin{tikzpicture}[scale=1.2]
\coordinate (A) at (0,0);
\coordinate (B) at (4,0);
\coordinate (C) at (0,2.5);
\coordinate (D) at (4,2.5);
\draw[very thick,blue] (A) -- (B);
\draw[very thick,blue] (C) -- (D);
\draw (A) -- (C);
\draw (B) -- (D);
\fill (A) circle (2pt);
\fill (B) circle (2pt);
\fill (C) circle (2pt);
\fill (D) circle (2pt);
\node[below] at (A) {$\begin{array}{c}\omega=(0,0)\\t_\omega=(0,0)\\P_{00}\end{array}$};
\node[below] at (B) {$\begin{array}{c}\omega=(1,0)\\t_\omega=(a,0)\\P_{10}\end{array}$};
\node[above] at (C) {$\begin{array}{c}\omega=(0,1)\\t_\omega=(0,a)\\P_{01}\end{array}$};
\node[above] at (D) {$\begin{array}{c}\omega=(1,1)\\t_\omega=(a,a)\\P_{11}\end{array}$};
\node[above] at (2,0) {$\mathrm{flip\ bit}\ 1$};
\node[below] at (2,2.5) {$\mathrm{flip\ bit}\ 1$};
\node[left] at (0,1.25) {$\mathrm{flip\ bit}\ 2$};
\node[right] at (4,1.25) {$\mathrm{flip\ bit}\ 2$};
\end{tikzpicture}
```

For either horizontal pair, with $j\in\{0,1\}$ fixed, step 2.1 gives
$$P_{(0,j)}\phi_1+P_{(1,j)}(1-\phi_1)\ge1-\|P_{(0,j)}-P_{(1,j)}\|_{\mathrm{TV}}\ge1-v.$$
Thus both horizontal pairs contribute when averaging over all four vertices. In general there are $2^{d-1}$ pairs per coordinate; step 3.1 then sums the resulting coordinate bounds. The rigorous proof above is independent of the illustration.
