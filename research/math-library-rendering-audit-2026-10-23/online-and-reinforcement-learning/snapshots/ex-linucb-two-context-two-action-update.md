---
id: ex-linucb-two-context-two-action-update
kind: example
title: A two-context, two-action ridge update
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
verification:
  precheck: pass
deps: [alg-linucb, def-linear-contextual-bandit-model]
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§19.2, feature-based action representation and LinUCB update."
    - title: "Yasin Abbasi-Yadkori, Dávid Pál, and Csaba Szepesvári, Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems"
      url: "https://arxiv.org/pdf/1102.2670"
      locator: "§5.1, Table 1 and regularized estimator (16)."
---

## Example

Let $d=2$, $n=2$, $\lambda=L=1$, $m_2=0$, and $\delta=1/2$. On the one-point probability space $\Omega=\{\omega_0\}$ with its full sigma-algebra and unit mass, let the two contexts be $c_1,c_2$ and the ordered actions be $\bar a_1,\bar a_2$. At either context set $\psi(c_i,\bar a_1)=e_1=(1,0)$ and $\psi(c_i,\bar a_2)=e_2=(0,1)$. Take $\theta^*=(0,0)$ and $\eta_1=\eta_2=0$. LinUCB ties on the first round, chooses $\bar a_1$, updates to $V_1=\operatorname{diag}(2,1)$ and $\widehat\theta_1=0$, then chooses $\bar a_2$ on the second round because its confidence width is larger.

## Example references

[[def-linear-contextual-bandit-model]]: the finite-dimensional feature and reward model.

[[alg-linucb]]: LinUCB's confidence score, tie-breaking, and sample-sum update.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §19.2](https://tor-lattimore.com/downloads/book/book.pdf)

[Abbasi-Yadkori, Pál, and Szepesvári, §5.1](https://arxiv.org/pdf/1102.2670)

## Facts & Assumptions

**Given:** The deterministic two-round instance in the Example.

[F1] [[def-linear-contextual-bandit-model]]: $V_0=\lambda I_2$, $b_t=\sum_{s\le t}A_sX_s$, $V_t=V_{t-1}+A_tA_t^{\mathsf T}$, and $\widehat\theta_t=V_t^{-1}b_t$.

[F2] [[alg-linucb]]: the score is $\langle\widehat\theta_{t-1},a\rangle+\sqrt{\beta_t}\|a\|_{V_{t-1}^{-1}}$, $\beta_t\ge1$, and ties in a finite ordered action set take the first maximizer.

## Verification

1.1 The parameter satisfies $\|\theta^*\|_2=0\le m_2$, both feature vectors have norm $1=L$, and each reward is $0$. For every real $q$, the conditional MGF is $\mathbb E[e^{q\eta_t}\mid\mathcal F_t]=1\le e^{q^2/2}$; hence the instance satisfies the model. [given, F1, algebra]

2.1 At $t=1$, $\widehat\theta_0=0$ and $V_0=I_2$, so the two scores are both $\sqrt{\beta_1}$. The action order therefore makes LinUCB choose $\bar a_1$ and feature $A_1=e_1$. [given, F1, F2, step 1.1, algebra]

3.1 Since $X_1=0$, the update gives $V_1=I_2+e_1e_1^{\mathsf T}=\operatorname{diag}(2,1)$, $b_1=0$, and $\widehat\theta_1=0$. [F1, step 2.1, algebra]

4.1 At the second context, the score of $\bar a_1$ is $\sqrt{\beta_2}/\sqrt2$, while the score of $\bar a_2$ is $\sqrt{\beta_2}$. Because $\beta_2\ge1$, the latter is strictly larger, so the algorithm selects $\bar a_2$. [given, F1, F2, step 3.1, algebra] ∎
