---
id: rem-complete-convergence-implication-diagram
kind: remark
title: "Complete convergence implication diagram"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-almost-sure-convergence-implies-convergence-in-probability, thm-convergence-in-probability-implies-convergence-in-distribution, thm-lp-convergence-implies-convergence-in-probability, thm-lq-convergence-implies-lp-convergence-on-a-probability-space]
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Theorem 3.12"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

The proved arrows are
$$L^q\ (q>p)\Longrightarrow L^p\Longrightarrow\text{in probability}\Longrightarrow\text{in distribution},$$
and almost-sure convergence also implies convergence in probability. The only reverse implication here is distributional convergence to a constant.

None of the displayed implications reverses in general. On $(0,1)$, shrinking
spikes $(n+1)^{1/p}\mathbf1_{(0,1/(n+1))}$ converge almost surely and in probability
but not in $L^p$, while the dyadic typewriter sequence converges in every
finite $L^p$ but not almost surely. If $X$ is symmetric on $\{-1,1\}$, the
constant sequence $X_n=-X$ has the law of $X$ but does not converge to $X$ in
probability. Independent indicators with probabilities $1/(n+1)$ converge in
probability but, by Borel--Cantelli, not almost surely. Finally,
$(n+1)^{1/q}\mathbf1_{(0,1/(n+1))}$ converges in $L^p$ but not $L^q$ when $p<q$.
The shrinking spikes $(n+1)\mathbf1_{(0,1/(n+1))}$ also converge almost surely while
their expectations remain equal to one.


## Remarks

In the diagram, every node describes convergence of the same sequence $X_n$
to the same random variable $X$ on a probability space, with $1\le p<q\le\infty$.
Solid arrows are unconditional implications. The dashed reverse arrow applies
only when the limit $X$ is almost surely constant.

```tikz
\begin{tikzpicture}[>=stealth,thick]
\node (q) at (0,0) {$L^q$};
\node (p) at (2,0) {$L^p$};
\node (prob) at (5,0) {$\mathrm{in\ probability}$};
\node (dist) at (9,0) {$\mathrm{in\ distribution}$};
\node (as) at (5,1.6) {$\mathrm{almost\ surely}$};
\draw[->] (q) -- (p);
\draw[->] (p) -- (prob);
\draw[->] (as) -- (prob);
\draw[->] (prob) -- (dist);
\draw[->,dashed] (dist.south) .. controls (9,-1.4) and (5,-1.4) .. node[below] {$\mathrm{constant\ limit}$} (prob.south);
\end{tikzpicture}
```

The shrinking-spike examples above rule out reversing $L^q\Rightarrow L^p$
and $L^p\Rightarrow$ convergence in probability. The symmetric-law example
rules out reversing convergence in probability $\Rightarrow$ convergence in
distribution without the constant-limit condition. The independent indicators
rule out reversing almost-sure convergence $\Rightarrow$ convergence in
probability; the dyadic typewriter also shows that $L^p$ convergence need not
imply almost-sure convergence. The expectation example is separate from these
arrows. The diagram is an illustration of the stated implications and does not
replace their proofs.
