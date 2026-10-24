---
id: alg-linucb
kind: algorithm
title: LinUCB with a self-normalized confidence radius
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
verification:
  precheck: n/a
deps: [def-determinant-of-a-square-matrix,
       def-euclidean-inner-product,
       def-linear-contextual-bandit-model,
       def-natural-logarithm,
       lem-linucb-ridge-estimates-are-measurable,
       lem-linucb-ridge-information-matrix,
       thm-natural-logarithm-laws]
justified_by: [thm-linucb-regret]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§19.2, LinUCB score and ridge estimator; §20.1, Theorem 20.5 confidence radius."
    - title: "Yasin Abbasi-Yadkori, Dávid Pál, and Csaba Szepesvári, Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems"
      url: "https://arxiv.org/pdf/1102.2670"
      locator: "§5.1, Table 1 and equation (21), with regularized estimator (16)."
---

## Definition

**Inputs and admissibility.** Take the finite-dimensional linear contextual bandit model and a confidence level $\delta\in(0,1)$. At each round, the nonempty available action set is finite and ordered with its feature vectors, or the available feature set is compact with a supplied attained measurable predictable maximizer for the score below. In the finite case evaluate the score for each action's feature and resolve ties by the first action. All model assumptions, including $\lambda>0$, the feature and parameter bounds, pre-reward information, and the conditional noise bound, are in force.

**Outputs.** Before each reward is observed, output the selected feature $A_t$; after the reward $X_t$ is observed, record it. At the horizon return the online sequence $(A_t,X_t)_{t=1}^n$ and terminal state $(V_n,b_n,\widehat\theta_n)$.

Initialize $V_0=\lambda I_d$, $b_0=0$, $\widehat\theta_0=0$, $W_0=\lambda^{-1}I_d$, and $D_0=\lambda^d$. At each round $t=1,\ldots,n$, compute

$$\rho_t=\sqrt\lambda\,m_2+\sqrt{2\log(1/\delta)+\log(D_{t-1}/D_0)},\qquad \beta_t=\max\{1,\rho_t^2\},$$

Next select an available feature vector

$$A_t\in\arg\max_{a\in\mathcal A_t}\left\{\langle\widehat\theta_{t-1},a\rangle+\sqrt{\beta_t}\,\sqrt{a^{\mathsf T}W_{t-1}a}\right\}.$$

For a finite ordered action set, evaluate every action's score and take the first maximizing action's feature; for a compact feature set, call the supplied selector once. After observing reward $X_t$, update

$$V_t=V_{t-1}+A_tA_t^{\mathsf T},\qquad b_t=b_{t-1}+A_tX_t.$$

Then compute the updated matrix state $W_t,D_t$ from $V_t$ by the following exact row procedure. Form the augmented matrix $M=[V_t\mid I_d]$, set $s=1$ and $D=1$, and for $k=0,\ldots,d-1$ choose the least row index $i\ge k$ whose current left-block entry $M_{ik}$ is nonzero. If no such row exists, return failure. If $i\ne k$, swap rows $i$ and $k$ and replace $s$ by $-s$. Set $p_k=M_{kk}$, replace $D$ by $Dp_k$, divide row $k$ by $p_k$, and for every $j\ne k$ set $\operatorname{row}_j\leftarrow\operatorname{row}_j-M_{jk}\operatorname{row}_k$. After the loop set $W_t$ to the right block and $D_t=sD$, and set $\widehat\theta_t=W_tb_t$. For a compact feature set the supplied selector must return an attained maximizing feature measurably from pre-reward information.

## Definition references

[[def-linear-contextual-bandit-model]]: the context/feature map, conditional reward model, filtration, norm bound, and sample-sum ridge notation.

[[lem-linucb-ridge-information-matrix]]: the matrices $V_t$ are positive definite, invertible, and have positive determinant.

[[lem-linucb-ridge-estimates-are-measurable]]: the ridge estimate, information matrix, and response sum are measurable from the available data.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §19.2 and §20.1](https://tor-lattimore.com/downloads/book/book.pdf)

[Abbasi-Yadkori, Pál, and Szepesvári, §5.1, Table 1](https://arxiv.org/pdf/1102.2670)
