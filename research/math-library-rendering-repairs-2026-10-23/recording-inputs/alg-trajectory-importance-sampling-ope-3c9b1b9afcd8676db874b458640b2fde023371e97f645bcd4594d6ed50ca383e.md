---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-trajectory-importance-sampling-ope.json
  precheck: n/a
id: alg-trajectory-importance-sampling-ope
kind: algorithm
title: "Ordinary, per-decision, and weighted trajectory importance sampling"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-offline-reinforcement-learning-dataset
  - lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative
justified_by:
  - thm-trajectory-importance-sampling-is-unbiased
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§5.5, printed pp. 128–129, equations (5.3)–(5.5)."
    - title: "Nan Jiang and Lihong Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning"
      url: "https://proceedings.mlr.press/v48/jiang16.pdf"
      locator: "§3.2.2, PDF pp. 2–3, equations (4)–(7)."
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§3.1, PDF pp. 10–12, equations (5)–(6) and surrounding discussion."
---

## Definition

Assume AC for the policy-induced trajectory laws. Input a finite-horizon logged dataset of $n\ge1$ independent behavior trajectories, a target policy $\pi$, the true behavior propensities $\mu(a\mid s)$, horizon $H$, and discount $0\le\gamma\le1$. Require full horizon coverage $P^\pi_H\ll P^\mu_H$. For trajectory $i$, compute $\rho_{i,t}=\pi(A_t^i\mid S_t^i)/\mu(A_t^i\mid S_t^i)$ for $0\le t<H$, and $W_{i,t}=\prod_{k=0}^{t}\rho_{i,k}$; set $W_{i,-1}=1$. If an observed pair has $\mu(A_t^i\mid S_t^i)=0<\pi(A_t^i\mid S_t^i)$, return status unsupported; if both probabilities are zero, set that ratio to zero. Let $G_i=\sum_{t=0}^{H-1}\gamma^tR_{t+1}^i$. Return the ordinary trajectory estimator

$$\widehat J_{\mathrm{OIS}}=\frac1n\sum_{i=1}^n W_{i,H-1}G_i,$$

the per-decision estimator

$$\widehat J_{\mathrm{PDIS}}=\frac1n\sum_{i=1}^n\sum_{t=0}^{H-1}\gamma^tW_{i,t}R_{t+1}^i,$$

and the self-normalized weighted estimator

$$\widehat J_{\mathrm{WIS}}=\begin{cases}\displaystyle\frac{\sum_{i=1}^nW_{i,H-1}G_i}{\sum_{i=1}^nW_{i,H-1}},&\sum_{i=1}^nW_{i,H-1}>0,\\0,&\sum_{i=1}^nW_{i,H-1}=0.\end{cases}$$

The procedure specifies estimators; it includes no finite-sample unbiasedness assertion for the self-normalized output.

## Definition references

[[def-offline-reinforcement-learning-dataset|Finite-horizon trajectory data, behavior propensities, return, and coverage.]]

[[lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative|The cumulative action-propensity product is the RN density on each finite trajectory prefix.]]

[Sutton and Barto, Reinforcement Learning: An Introduction, 2nd ed.](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf)

[Jiang and Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning](https://proceedings.mlr.press/v48/jiang16.pdf)

[Levine, Kumar, Tucker, and Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems](https://arxiv.org/pdf/2005.01643)

## Remarks

For illustration, take $H=3$ and suppress the trajectory index $i$. Each action ratio extends the prefix weight through the reward on that transition. Thus OIS applies the final weight to the whole return, whereas PDIS applies a different prefix weight to each reward:

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node (s0) at (0,0) {$S_0$};
\node (s1) at (3,0) {$S_1$};
\node (s2) at (6,0) {$S_2$};
\node (s3) at (9,0) {$S_3$};
\draw[->] (s0) -- node[above] {$A_0,\ R_1$} node[below] {$\rho_0$} (s1);
\draw[->] (s1) -- node[above] {$A_1,\ R_2$} node[below] {$\rho_1$} (s2);
\draw[->] (s2) -- node[above] {$A_2,\ R_3$} node[below] {$\rho_2$} (s3);
\node at (1.5,-1.1) {$W_0=\rho_0$};
\node at (4.5,-1.1) {$W_1=\rho_0\rho_1$};
\node at (7.5,-1.1) {$W_2=\rho_0\rho_1\rho_2$};
\node[anchor=west] at (0,-2.1) {$\mathrm{OIS:}\quad W_2(R_1+\gamma R_2+\gamma^2 R_3)$};
\node[anchor=west] at (0,-2.9) {$\mathrm{PDIS:}\quad W_0R_1+\gamma W_1R_2+\gamma^2W_2R_3$};
\end{tikzpicture}
```

The bottom rows are the contributions of one trajectory before averaging over the dataset. For the same horizon, WIS sums the OIS contributions over trajectories and divides by $\sum_iW_{i,2}$ when that denominator is positive, using the stated zero convention otherwise. This self-normalization carries no finite-sample unbiasedness assertion. The diagram is explanatory; the procedure and its justification are independent of it.
