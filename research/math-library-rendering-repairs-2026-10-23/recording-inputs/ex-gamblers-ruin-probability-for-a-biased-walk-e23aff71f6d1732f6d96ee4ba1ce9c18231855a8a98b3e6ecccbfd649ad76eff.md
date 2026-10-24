---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-gamblers-ruin-probability-for-a-biased-walk.json
  precheck: pass
id: ex-gamblers-ruin-probability-for-a-biased-walk
kind: example
title: Gambler's ruin probability for a biased walk
status: published
origin: pipeline
deps: [lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time, thm-optional-stopping-with-a-dominating-integrable-variable, lem-conditioning-a-known-variable-and-an-independent-variable, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - {title: "Durrett, Probability: Theory and Examples, 5th ed., gambler's ruin and optional stopping in §4.8", url: "https://web.archive.org/web/20240514054731if_/https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}
---

## Statement

Assume AC. Let $N$ and $i$ be integers with $0<i<N$, set $S_0=i$, and let the independent increments $\xi_k=S_k-S_{k-1}$ be $+1$ with probability $p$ and $-1$ with probability $q=1-p$, where $0<p<1$ and $p\ne q$. Use the natural filtration $\mathcal F_n=\sigma(\xi_1,\ldots,\xi_n)$, with $\mathcal F_0$ trivial. For $\tau=\inf\{n:S_n\in\{0,N\}\}$,
$$\mathbb P(S_\tau=N)=\frac{1-(q/p)^i}{1-(q/p)^N}.$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time]] makes $\tau$ stopping.

[F2] [[lem-conditioning-a-known-variable-and-an-independent-variable]] verifies the exponential martingale.

[F3] [[thm-optional-stopping-with-a-dominating-integrable-variable]] applies to its bounded stopped values.

[F4] [[def-axiom-of-choice]] is inherited from conditional expectation and optional stopping.

## Proof

1.1 Put $r=q/p$, so $r>0$ and $r\ne1$. Independence of the next increment and $$pr+q/r=q+p=1$$ give $$\mathbb E[r^{S_{n+1}}\mid\mathcal F_n] =r^{S_n}(pr+q/r)=r^{S_n}.$$ Thus $r^{S_n}$ is a martingale. [F2]

1.2 The same block argument as for symmetric ruin works because an all-up block of $N$ increments has positive probability $p^N$: conditional on survival, it forces exit. Hence $\mathbb P(\tau>mN)\le(1-p^N)^m\to0$. F1 gives stopping and this bound gives almost-sure finiteness. [F1]

2.1 Before exit, $S_{\tau\wedge n}\in[0,N]$, so $r^{S_{\tau\wedge n}}$ is bounded by $\max(1,r^N)$. F3 gives $$r^i=\mathbb Er^{S_\tau} =1\cdot\mathbb P(S_\tau=0)+r^N\mathbb P(S_\tau=N).$$ Writing the first probability as one minus the second and solving yields $(r^i-1)/(r^N-1)$, equal to the displayed formula. AC has exactly the role in F4. [F3, F4, step 1.1, step 1.2] ∎


## Remarks

The diagram shows the local transition rule for the stopped walk $S_{n\wedge\tau}$ at any interior state $1\le k\le N-1$, and its two absorbing states separately. It starts at $S_0=i$; at $\tau$ it first reaches either $0$ or $N$. The upper-exit event in the Statement is $S_\tau=N$.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node[draw,circle,minimum size=10mm] (left) at (0,0) {$k-1$};
\node[draw,circle,minimum size=10mm] (middle) at (3,0) {$k$};
\node[draw,circle,minimum size=10mm] (right) at (6,0) {$k+1$};
\draw[->] (middle) -- node[above] {$q=1-p$} (left);
\draw[->] (middle) -- node[above] {$p$} (right);
\node[draw,circle,double,minimum size=10mm] (zero) at (1,-2) {$0$};
\node[draw,circle,double,minimum size=10mm] (top) at (5,-2) {$N$};
\draw[->] (zero) edge[loop left] node[left] {$1$} (zero);
\draw[->] (top) edge[loop right] node[right] {$1$} (top);
\node at (3,-3) {Absorbing states of the stopped walk};
\end{tikzpicture}
```
