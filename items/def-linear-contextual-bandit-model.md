---
id: def-linear-contextual-bandit-model
kind: definition
title: Finite-dimensional linear contextual bandit model
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
verification:
  precheck: n/a
deps: [def-conditional-expectation-given-a-sigma-algebra,
       def-euclidean-inner-product,
       def-expectation-of-a-nonnegative-or-integrable-random-variable,
       def-filtration-and-filtered-probability-space,
       def-measurable-function-between-measurable-spaces,
       def-matrix-product-and-identity-matrix,
       def-online-decision-protocol,
       def-random-element-and-real-random-variable,
       def-ring-matrix-product-identity-and-transpose,
       def-tikhonov-regularised-least-squares,
       thm-tikhonov-regularised-least-squares-has-a-unique-minimiser]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§§19.1–19.2: contextual feature maps, stochastic linear reward model, and sample-sum ridge estimator."
    - title: "Yasin Abbasi-Yadkori, Dávid Pál, and Csaba Szepesvári, Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems"
      url: "https://arxiv.org/pdf/1102.2670"
      locator: "Assumption A1, §5.1, and equation (16): sequential regression model and regularized least-squares estimator."
    - title: "University of Washington CSE 541, Linear Bandits lecture notes"
      url: "https://courses.cs.washington.edu/courses/cse541/24sp/resources/lecture_notes.pdf"
      locator: "Chapter 2, §2.2, fixed-design least squares and the Gaussian confidence geometry."
---

## Definition

Fix integers $d,n\ge1$, real parameters $\lambda>0$, $L\ge1$, and $m_2\ge0$, and a deterministic vector $\theta^*\in\mathbb R^d$ with $\|\theta^*\|_2\le m_2$. Replacing any finite feature bound by its maximum with $1$ makes the convention $L\ge1$ harmless. Work on a probability space with a filtration $(\mathcal F_t)_{t=0}^{n+1}$ satisfying $\mathcal F_t\subseteq\mathcal F_{t+1}$.

At round $t$, before reward noise is observed, the history sigma-algebra $\mathcal F_t$ contains all contexts, choices, and feedback through rounds $s<t$, as well as the current context $C_t$, the nonempty available action set, and its available feature set $\mathcal A_t\subseteq\mathbb R^d$. The features arise from a measurable map $\psi_t$ between spaces with declared measurable structures by $a=\psi_t(C_t,\bar a)$ for available actions $\bar a$. The feature set is finite or compact in the Euclidean topology, every candidate $a\in\mathcal A_t$ satisfies $\|a\|_2\le L$, and the selected feature $A_t=\psi_t(C_t,a_t)\in\mathcal A_t$ is $\mathcal F_t$-measurable. The true-mean maximum is attained and its value is $\mathcal F_t$-measurable. A policy using LinUCB must also select an attained upper-confidence maximizer measurably from the pre-reward information; finite ordered action sets select the first maximizer, while a compact set is used only when such a predictable selection is supplied.

After $A_t$ is selected, the reward $X_t$ is observed, where $\eta_t$ is an $\mathcal F_{t+1}$-measurable real random variable and

$$X_t=\langle\theta^*,A_t\rangle+\eta_t.$$

For every $q\in\mathbb R$, require $e^{q\eta_t}$ to be integrable and its conditional expectation version to satisfy

$$\mathbb E[e^{q\eta_t}\mid\mathcal F_t]\le e^{q^2/2}\quad\text{almost surely}.$$

This is conditional $1$-sub-Gaussian noise with the pre-reward convention for $\mathcal F_t$. No independence between rounds is assumed. For $0\le t\le n$, define the unaveraged ridge information matrix and response sum by

$$V_t:=\lambda I_d+\sum_{s=1}^t A_sA_s^{\mathsf T},\qquad b_t:=\sum_{s=1}^t A_sX_s,$$

with empty sums equal to $0$. Set $\widehat\theta_0=0$ and $\widehat\theta_t=V_t^{-1}b_t$ for $t\ge1$. For a real symmetric matrix $M$ satisfying $v^{\mathsf T}Mv>0$ for all nonzero $v$, write $\|v\|_M:=\sqrt{v^{\mathsf T}Mv}$. The estimate $\widehat\theta_t$ is the unique minimizer of $\sum_{s=1}^t(X_s-\langle\theta,A_s\rangle)^2+\lambda\|\theta\|_2^2$; the sum is not divided by $t$.

## Definition references

[[def-online-decision-protocol]]: the generic protocol restricts a choice to prior history and learner-private randomization before current feedback; the current context and available feature information specified in this contextual model are additional side information.

[[def-random-element-and-real-random-variable]]: contexts, selected features, noise, and rewards are measurable random elements.

[[def-measurable-function-between-measurable-spaces]]: the context/action feature map is measurable between its declared measurable spaces.

[[def-filtration-and-filtered-probability-space]]: $(\mathcal F_t)$ is an increasing sequence of sub-sigma-algebras on the probability space.

[[def-conditional-expectation-given-a-sigma-algebra]]: each conditional MGF is a measurable integrable version whose event integrals agree with those of the exponential.

[[def-euclidean-inner-product]]: $\langle x,y\rangle=x^{\mathsf T}y$ and $\|x\|_2^2=x^{\mathsf T}x$.

[[def-tikhonov-regularised-least-squares]]: the ridge objective uses the displayed sample-sum least-squares convention.

[[thm-tikhonov-regularised-least-squares-has-a-unique-minimiser]]: the positive ridge term gives the unique minimizer in the displayed normal-equation form.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §§19.1–19.2](https://tor-lattimore.com/downloads/book/book.pdf)

[Abbasi-Yadkori, Pál, and Szepesvári, Assumption A1 and §5.1](https://arxiv.org/pdf/1102.2670)
