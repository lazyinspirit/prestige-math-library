---
id: lem-ip-gaussian-product-mixture-testing-bound
kind: lemma
title: Symmetric Gaussian product-mixture testing bound
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-gaussian-sequence-inverse-model
  - thm-ip-white-noise-spectral-sequence-representation
  - def-ip-minimax-detection-risk-and-separation
  - def-total-variation-distance-for-probability-laws
  - thm-independent-random-elements-have-product-joint-law
  - lem-finite-measure-uniqueness-on-a-pi-system
  - lem-normal-density-has-total-mass-one
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice is inherited from the Gaussian sequence inverse model and the change-of-variables supplier. The finite sign prior and likelihood-ratio computations use no additional choice principle.
sources:
  references:
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, §4.1, PDF pp. 6–7"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §6.2.3, PDF pp. 506–508"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Assume Countable Choice. In the Gaussian sequence detection experiment, let $v\in\Theta_q(r)$ have finite support $J$ and put
$$u(v)^2=\frac{1}{2\varepsilon^4}\sum_{j\in J}v_j^4.$$
Let $\pi_v$ be the uniform probability law on the finite family of mean sequences whose $j$th coordinate is independently $+v_j$ or $-v_j$ for $j\in J$ and is zero off $J$, and let $P_{\pi_v}$ be the corresponding mixture sampling law. Then its likelihood ratio with respect to the null law is
$$L_v=\frac{dP_{\pi_v}}{dP_{\varepsilon,0}}=\prod_{j\in J}\exp\!\left(-\frac{v_j^2}{2\varepsilon^2}\right)\cosh\!\left(\frac{v_jY_j}{\varepsilon^2}\right),$$
it satisfies
$$\mathbb E_{\varepsilon,0}L_v^2=\prod_{j\in J}\cosh\!\left(\frac{v_j^2}{\varepsilon^2}\right),\qquad \mathbb E_{\varepsilon,0}(L_v-1)^2\le \exp(u(v)^2)-1,$$
and the minimax risks obey
$$\gamma_\varepsilon(\Theta_q(r))\ge1-\frac12\sqrt{\exp(u(v)^2)-1},\qquad \beta_\varepsilon(\Theta_q(r),\alpha)\ge1-\alpha-\frac12\sqrt{\exp(u(v)^2)-1}$$
for every $\alpha\in(0,1)$.

## Statement references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, §4.1, equations (4.1)–(4.3), PDF pp. 6–7](https://arxiv.org/pdf/1001.1853)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §6.2.3, Theorem 6.2.11 proof, PDF pp. 506–508](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $\varepsilon>0$, $v\in\Theta_q(r)$ of finite support, and the null and alternative laws in the Gaussian sequence detection experiment.

[A1] [[def-countable-choice]]: Countable Choice is inherited from the Gaussian sequence inverse model.

[F1] [[def-ip-gaussian-sequence-inverse-model]] and [[thm-ip-white-noise-spectral-sequence-representation]]: after scaling the normalized observation by $s_j=\sigma_j^{-1}$, $Y_j=\eta_j+\varepsilon\xi_j$ with independent standard normal coordinates $\xi_j$.

[F2] [[def-ip-minimax-detection-risk-and-separation]]: $\alpha_\varepsilon(\psi)=\mathbb E_{\varepsilon,0}\psi$, $\beta_\varepsilon(\Theta_q(r),\psi)=\sup_{\eta\in\Theta_q(r)}\mathbb E_{\varepsilon,\eta}(1-\psi)$, and $\gamma_\varepsilon$ is the infimum of their sum.

[F3] The standard-normal coordinate law supplied by [F1] has density $\varphi(x)=(2\pi)^{-1/2}e^{-x^2/2}$. Since it is a probability law, $\int_{\mathbb R}\varphi(x)\,dx=1$. This uses the supplied experiment, not the stronger-AC normalization theorem [[lem-normal-density-has-total-mass-one]].

[F4] [[thm-independent-random-elements-have-product-joint-law]]: a finite tuple of independent coordinates has the product of its marginal laws.

[F5] [[lem-finite-measure-uniqueness-on-a-pi-system]]: probability measures agreeing on a generating pi-system agree on its generated sigma-algebra.

[F6] [[def-total-variation-distance-for-probability-laws]]: $\|P-Q\|_{\rm TV}=\sup_A|P(A)-Q(A)|$ over measurable events.

[F7] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: translation of the standard normal density preserves its integral, so $\mathbb E e^{tG}=e^{t^2/2}$ for $G\sim N(0,1)$ by completing the square.

## Proof


1.1 For each sign vector $\tau\in\{-1,+1\}^J$, let $v^\tau_j=\tau_jv_j$ on $J$ and zero elsewhere. Absolute values and squares are unchanged, so every $v^\tau$ belongs to $\Theta_q(r)$. [A1, F1, given, construct]

1.2 Under the null, $X_j=Y_j/\varepsilon$ has density $\varphi$. For a fixed sign and coordinate, the density ratio for mean $\tau_jv_j$ versus zero is $\exp(\tau_jv_jY_j/\varepsilon^2-v_j^2/(2\varepsilon^2))$; completing the square using [F7] shows its null expectation is one. [F1, F3, F7, given, algebra]

2.1 Independence [F4] multiplies the one-coordinate ratios from step 1.2, giving the density ratio for the finite coordinate vector on each cylinder event. Its null expectation is the product of unit expectations, so it defines a probability measure on the full product space. [step 1.2, F4, algebra]

3.1 Cylinder events form a generating pi-system. The fixed-sign sampling law and the probability measure from step 2.1 agree on every cylinder, so [F5] gives equality on the product sigma-algebra and validates the full likelihood-ratio identity. [step 2.1, F5, algebra]

4.1 Averaging the fixed-sign likelihood ratios in step 3.1 over the finite sign set factors coordinatewise and gives $L_v=\prod_{j\in J}e^{-\delta_j/2}\cosh(\sqrt{\delta_j}X_j)$, where $\delta_j=v_j^2/\varepsilon^2$. This density is positive and has null expectation one. [step 3.1, algebra]

5.1 For a standard normal $G$, [F7] and $\cosh^2t=(1+\cosh(2t))/2$ give $e^{-\delta}\mathbb E\cosh^2(\sqrt\delta G)=e^{-\delta}(1+e^{2\delta})/2=\cosh\delta$. Independence [F4] and step 4.1 therefore give $\mathbb E_0L_v^2=\prod_{j\in J}\cosh\delta_j$. [F4, F7, step 4.1, algebra]

6.1 The function $g(t)=t^2/2-\log\cosh t$ is even, has $g(0)=0$, and for $t\ge0$ has derivative $g'(t)=t-\tanh t\ge0$, since $(\tanh t)'\le1$ and $\tanh0=0$. Thus $\cosh t\le e^{t^2/2}$ for all real $t$. Since $\sum_j\delta_j^2=2u(v)^2$, step 5.1 yields $\mathbb E_0(L_v-1)^2=\prod_j\cosh\delta_j-1\le e^{\frac12\sum_j\delta_j^2}-1=e^{u(v)^2}-1$. [step 5.1, algebra]

7.1 Since $\mathbb E_0(L_v-1)=0$, the positive and negative parts of $L_v-1$ have equal integrals; hence every event $E$ satisfies $|P_{\pi_v}(E)-P_0(E)|\le\frac12\mathbb E_0|L_v-1|\le\frac12\sqrt{\mathbb E_0(L_v-1)^2}$. Approximate a randomized test $\psi$ by $N^{-1}\sum_{k=1}^N\mathbf1_{\{\psi\ge k/N\}}$; the event bound [F6] and uniform approximation error $N^{-1}$ give $|\mathbb E_{\pi_v}\psi-\mathbb E_0\psi|\le\|P_{\pi_v}-P_0\|_{\rm TV}$. [F6, step 6.1, algebra]

8.1 The maximal type-II error is at least its mixture average because every sign alternative lies in $\Theta_q(r)$. Therefore every test has total error at least $1-\|P_{\pi_v}-P_0\|_{\rm TV}$, and any level-$\alpha$ test has maximal type-II error at least $1-\alpha-\|P_{\pi_v}-P_0\|_{\rm TV}$. Taking the respective infima, then applying steps 6.1 and 7.1, proves both stated risk bounds. [F2, step 6.1, step 7.1, given, algebra] ∎
