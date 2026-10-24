---
id: lem-linucb-gaussian-mixture-supermartingale
kind: lemma
title: The conditional Gaussian mixture is a nonnegative supermartingale
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
verification:
  precheck: pass
deps: [def-axiom-of-choice,
       def-conditional-expectation-given-a-sigma-algebra,
       def-borel-sigma-algebra,
       def-conditional-expectation-as-an-ae-class,
       def-countable-choice,
       def-linear-contextual-bandit-model,
       def-martingale-submartingale-and-supermartingale,
       def-matrix-space,
       def-measurable-function-between-measurable-spaces,
       def-product-sigma-algebra-and-finite-product-sigma-algebras,
       lem-linucb-predictable-mgf-substitution,
       lem-linucb-ridge-information-matrix,
       lem-positive-definite-gaussian-integral,
       prop-closure-properties-of-measurable-functions-used-by-the-integral,
       thm-basic-algebra-and-order-properties-of-conditional-expectation,
       thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions,
       thm-conditional-expectation-exists-by-radon-nikodym,
       thm-continuous-preimages-of-borel-sets-are-borel,
       thm-cauchy-schwarz-and-the-euclidean-norm,
       thm-determinant-of-a-triangular-matrix,
       thm-monotone-convergence-for-the-integral,
       thm-tonelli-theorem-for-sigma-finite-product-spaces]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC supplies the conditional-expectation AE classes and supermartingale interface. Countable Choice is the explicit premise of the Gaussian-integral and nonnegative change-of-variables suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§20.1, conditional exponential supermartingales, Lemma 20.3, and Theorem 20.4 proof."
    - title: "Yasin Abbasi-Yadkori, Dávid Pál, and Csaba Szepesvári, Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems"
      url: "https://arxiv.org/pdf/1102.2670"
      locator: "Lemma 1 and Theorem 3, complete Gaussian-mixture and stopping-time proof, PDF pp. 1–3."
---

## Statement

Assume AC and Countable Choice and the finite-dimensional linear contextual bandit model. Put $S_t=\sum_{s=1}^tA_s\eta_s$, $G_t=\sum_{s=1}^tA_sA_s^{\mathsf T}$, and $V_t=\lambda I_d+G_t$. Let $\mathcal H_t:=\mathcal F_{t+1}$ be the information after round $t$ has been observed. Then

$$Z_t:=\sqrt{\frac{\det(V_0)}{\det(V_t)}}\exp\!\left(\frac12 S_t^{\mathsf T}V_t^{-1}S_t\right),\qquad Z_0:=1,$$

is a nonnegative integrable supermartingale with respect to $(\mathcal H_t)_{t=0}^n$.

## Statement references

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §20.1, Lemma 20.3 and Theorem 20.4](https://tor-lattimore.com/downloads/book/book.pdf)

[Abbasi-Yadkori, Pál, and Szepesvári, Lemma 1 and Theorem 3](https://arxiv.org/pdf/1102.2670)

## Facts & Assumptions

**Given:** AC, Countable Choice, the model's predictable feature vectors and conditional MGF bounds, and the matrix sums $S_t,G_t,V_t$ in the Statement.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; it supplies the conditional-expectation existence and supermartingale interfaces used here.

[A2] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; it is the exact choice premise of the Gaussian integral and Lebesgue change-of-variables suppliers.

[F1] [[def-linear-contextual-bandit-model]]: $A_t$ is $\mathcal F_t$-measurable, $\|A_t\|_2\le L$, and $\mathbb E[e^{q\eta_t}\mid\mathcal F_t]\le e^{q^2/2}$ for each real $q$.

[F2] [[lem-linucb-predictable-mgf-substitution]]: for bounded $\mathcal F_t$-measurable $Q$, $\mathbb E[e^{Q\eta_t-Q^2/2}\mid\mathcal F_t]\le1$ almost surely.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|u^{\mathsf T}A_t|\le\|u\|_2\|A_t\|_2$.

[F4] [[lem-linucb-ridge-information-matrix]]: $V_t$ is symmetric positive definite and $\det V_t>0$.

[F5] [[def-conditional-expectation-given-a-sigma-algebra]], [[def-conditional-expectation-as-an-ae-class]], [[thm-conditional-expectation-exists-by-radon-nikodym]], and [[def-martingale-submartingale-and-supermartingale]]: conditional-expectation versions are measurable and integrable and have the same integrals as the conditioned variable on every event in the conditioning sigma-algebra; a supermartingale is an integrable adapted process whose next conditional-expectation class is at most its current value. The existence and supermartingale interfaces use AC.

[F6] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear and order preserving, preserves total expectation, and contracts $L^1$.

[F7] [[thm-monotone-convergence-for-the-integral]]: increasing nonnegative measurable functions pass to the limit under the integral.

[F8] [[lem-positive-definite-gaussian-integral]]: for symmetric positive-definite $V$, $\int_{\mathbb R^d}e^{-u^{\mathsf T}Vu/2}\,du=(2\pi)^{d/2}/\sqrt{\det V}$ under Countable Choice.

[F9] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: a $C^1$ diffeomorphism changes a nonnegative Lebesgue integral by the absolute Jacobian determinant; translations have Jacobian determinant $1$.

[F10] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for a nonnegative product-measurable function on sigma-finite spaces, the iterated integrals equal the product integral and the section integrals are measurable.

[F11] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[def-measurable-function-between-measurable-spaces]], [[def-matrix-space]], [[def-borel-sigma-algebra]], [[thm-continuous-preimages-of-borel-sets-are-borel]], and [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: finite-coordinate measurable maps, continuous polynomial/exponential operations, and their compositions are measurable on the relevant finite product spaces.

[F12] [[thm-determinant-of-a-triangular-matrix]]: $\det(\lambda I_d)=\lambda^d$.

## Proof

1.1 For fixed $u\in\mathbb R^d$, define $M_t(u)=\exp\!\left(u^{\mathsf T}S_t-\frac12u^{\mathsf T}G_tu\right)$, $M_0(u)=1$, and $R_t(u)=e^{Q_t\eta_t-Q_t^2/2}$ where $Q_t=u^{\mathsf T}A_t$. The model makes $Q_t$ $\mathcal F_t$-measurable and, by [F3], bounds $|Q_t|\le L\|u\|_2$. Thus [F2] gives $\mathbb E[R_t(u)\mid\mathcal F_t]\le1$ and [F6] gives $\mathbb E[R_t(u)]\le1$. Also $M_t(u)=M_{t-1}(u)R_t(u)$, and $M_t(u)$ is $\mathcal H_t=\mathcal F_{t+1}$-measurable. [given, F1, F2, F3, F6, algebra]

1.2 For fixed $t$, each coordinate of $S_t$ and $G_t$ is a finite sum and product of variables observed by time $t$. On $(\Omega\times\mathbb R^d,\mathcal H_t\otimes\mathcal B(\mathbb R^d))$, the projections from each factor are measurable, so each coordinate of $S_t(\omega)$, $G_t(\omega)$, and $u$ is measurable. The Borel sigma-algebra of the finite-dimensional Euclidean product is generated by coordinate projections, since rational open boxes form a countable basis; hence $(\omega,u)\mapsto(S_t(\omega),G_t(\omega),u)$ is measurable. The maps $(S,G,u)\mapsto u^{\mathsf T}S-\frac12u^{\mathsf T}Gu$ and $x\mapsto e^x$ are continuous, so $(\omega,u)\mapsto M_t(u,\omega)$ is product-measurable by [F11]. Tonelli's section-measurability clause [F10] therefore makes $\overline M_t=\int M_t(u)p_\lambda(u)\,du$ $\mathcal H_t$-measurable. The density $p_\lambda(u)=(\lambda/(2\pi))^{d/2}e^{-\lambda\|u\|_2^2/2}$ is nonnegative and integrates to $1$ by [F8] with $V=\lambda I_d$. [given, A2, F8, F10, F11]

1.3 By the definitions of $S_t,G_t,V_t$ and the Gaussian density, $$\overline M_t=\left(\frac{\lambda}{2\pi}\right)^{d/2}\int_{\mathbb R^d}\exp\!\left(u^{\mathsf T}S_t-\frac12u^{\mathsf T}V_tu\right)du.$$ Completing the square gives $$u^{\mathsf T}S_t-\tfrac12u^{\mathsf T}V_tu=\tfrac12S_t^{\mathsf T}V_t^{-1}S_t-\tfrac12(u-V_t^{-1}S_t)^{\mathsf T}V_t(u-V_t^{-1}S_t).$$ [given, F4, algebra]

2.1 For fixed $u,t$ and every $B\in\mathcal F_t$, step 1.1 and the defining event integrals [F5] give $\mathbb E[\mathbf1_BR_t(u)]\le P(B)$. Hence for any nonnegative finite-valued $\mathcal F_t$-measurable $W=\sum_j c_j\mathbf1_{B_j}$, summing these inequalities gives $\mathbb E[WR_t(u)]\le\mathbb E[W]$. For a bounded nonnegative $\mathcal F_t$-measurable $W$, the finite-valued dyadic approximants $W_r=2^{-r}\lfloor2^rW\rfloor$ increase to $W$. Since $R_t(u)\ge0$, monotone convergence [F7] on both sides gives the same inequality for $W$. [step 1.1, F5, F7, construct, algebra]

3.1 Induct on $t$ to prove integrability and the supermartingale inequality. The base $M_0(u)=1$ is integrable. If $M_{t-1}(u)$ is integrable, put $W_k=\min\{M_{t-1}(u),k\}$, a bounded nonnegative $\mathcal F_t$-measurable variable. Step 2.1 gives $\mathbb E[W_kR_t(u)]\le\mathbb E[W_k]$. Since $W_kR_t(u)\uparrow M_t(u)$, [F7] gives $\mathbb E[M_t(u)]\le\mathbb E[M_{t-1}(u)]\le1$. Replacing $W_k$ by $\mathbf1_BW_k$ for any $B\in\mathcal F_t$ and applying [F7] again gives $\mathbb E[\mathbf1_BM_t(u)]\le\mathbb E[\mathbf1_BM_{t-1}(u)]$. Let $Y_t$ be a conditional-expectation version of $M_t(u)$ given $\mathcal F_t$, which exists by [A1] and [F5]. For each $k\ge1$, $B_k:=\{Y_t\ge M_{t-1}(u)+1/k\}\in\mathcal F_t$. On $B_k$, the event-integral property in [F5] and the preceding inequality imply $$\int_{B_k}Y_t\,dP=\int_{B_k}M_t(u)\,dP\le\int_{B_k}M_{t-1}(u)\,dP,$$ whereas the definition of $B_k$ makes the left side at least the right side plus $P(B_k)/k$. Thus $P(B_k)=0$ for every $k$; since $\{Y_t>M_{t-1}(u)\}=\bigcup_{k\ge1}B_k$, we have $Y_t\le M_{t-1}(u)$ almost surely. This is the supermartingale conditional-expectation inequality. [step 1.1, step 2.1, A1, F5, F7, algebra]

4.1 For any $B\in\mathcal H_{t-1}=\mathcal F_t$, Tonelli [F10] and step 3.1 give $$\mathbb E[\mathbf1_B\overline M_t]=\int\mathbb E[\mathbf1_BM_t(u)]p_\lambda(u)\,du\le\int\mathbb E[\mathbf1_BM_{t-1}(u)]p_\lambda(u)\,du=\mathbb E[\mathbf1_B\overline M_{t-1}].$$ Taking $B=\Omega$ shows $\overline M_t$ is integrable. Let $Y_t$ be a conditional-expectation version of $\overline M_t$ given $\mathcal H_{t-1}$; it exists by [A1] and [F5]. For each $k\ge1$, $B_k:=\{Y_t\ge\overline M_{t-1}+1/k\}\in\mathcal H_{t-1}$. The event-integral property [F5] and the displayed event inequality imply $$\int_{B_k}Y_t\,dP=\mathbb E[\mathbf1_{B_k}\overline M_t]\le\mathbb E[\mathbf1_{B_k}\overline M_{t-1}],$$ while the definition of $B_k$ makes the left side at least the right side plus $P(B_k)/k$. Thus every $B_k$ is null and $Y_t\le\overline M_{t-1}$ almost surely. Together with adaptedness from step 1.2 and $\overline M_0=1$, this is the integrable supermartingale property. [step 3.1, step 1.2, A1, F5, F10, algebra]

5.1 The translation $w=u-V_t^{-1}S_t$ is a $C^1$ diffeomorphism with Jacobian determinant $1$, so [F9] and [F8] evaluate the last integral as $(2\pi)^{d/2}/\sqrt{\det V_t}$. Since $\det V_0=\lambda^d$ by [F12], this gives $$\overline M_t=\sqrt{\frac{\det V_0}{\det V_t}}\exp\!\left(\tfrac12S_t^{\mathsf T}V_t^{-1}S_t\right)=Z_t.$$ Thus the process in the Statement is the supermartingale established in step 4.1. [step 4.1, step 1.3, A2, F4, F8, F9, F12, algebra] ∎
