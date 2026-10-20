---
id: thm-linucb-regret
kind: theorem
title: LinUCB has a log-determinant high-probability pseudo-regret bound
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
verification:
  precheck: pass
deps: [alg-linucb,
       def-axiom-of-choice,
       def-countable-choice,
       def-linear-contextual-bandit-model,
       def-determinant-of-a-square-matrix,
       def-real-and-complex-inner-product-space,
       lem-linucb-elliptical-potential,
       lem-linucb-ridge-information-matrix,
       lem-linucb-trace-determinant-bound,
       thm-cauchy-schwarz-in-an-inner-product-space,
       thm-determinant-under-elementary-row-operations,
       thm-self-normalized-linear-confidence-ellipsoid]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC and Countable Choice are inherited from the confidence-ellipsoid theorem: AC supports conditional expectation and bounded optional sampling, while Countable Choice supports the Gaussian integral. The optimism and determinant-sum calculation adds no choice use."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§19.3, Assumption 19.1 and complete proof of Theorem 19.2."
    - title: "Yasin Abbasi-Yadkori, Dávid Pál, and Csaba Szepesvári, Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems"
      url: "https://arxiv.org/pdf/1102.2670"
      locator: "§5.1, Theorem 13 and complete optimism/elliptical-potential proof, PDF pp. 8–9."
---

## Statement

Assume AC and Countable Choice, the finite-dimensional linear contextual bandit model, and LinUCB with $\beta_t=\max\{1,\rho_t^2\}$ as defined in the algorithm. Let $\delta\in(0,1)$ be the confidence input to LinUCB. Suppose also that for every round $t$,

$$\sup_{a,b\in\mathcal A_t}\langle\theta^*,a-b\rangle\le1.$$

Define the random pseudo-regret by

$$\widehat R_n:=\sum_{t=1}^n\left(\max_{a\in\mathcal A_t}\langle\theta^*,a\rangle-\langle\theta^*,A_t\rangle\right).$$

Then, with probability at least $1-\delta$,

$$\widehat R_n\le\sqrt{8n\beta_n\log\!\left(\frac{\det V_n}{\det V_0}\right)}\le\sqrt{8dn\beta_n\log\!\left(1+\frac{nL^2}{d\lambda}\right)}.$$

**Algorithm properties.** For every admissible model input, the algorithm also completes exactly $n$ rounds and outputs $(A_t,X_t)_{t=1}^n$ and $(V_n,b_n,\widehat\theta_n)$. Count exact real arithmetic operations, comparisons, square roots, and logarithms with unit cost, and exclude generation of contexts, features, and rewards. Let $F$ be the rounds with finite action sets and let $m_t$ be the number of available actions at round $t\in F$; let $K$ be the compact-feature rounds. The procedure makes exactly $|K|$ calls to the supplied maximizing selector and uses $O(nd^3+d^2\sum_{t\in F}m_t)$ operations apart from selector costs.

## Statement references

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §19.3, Theorem 19.2](https://tor-lattimore.com/downloads/book/book.pdf)

[Abbasi-Yadkori, Pál, and Szepesvári, §5.1, Theorem 13](https://arxiv.org/pdf/1102.2670)

## Facts & Assumptions

**Given:** AC, Countable Choice, the bandit model and LinUCB algorithm, and the per-round optimal-mean range bound in the Statement.

[A1] [[def-axiom-of-choice]]: the confidence supplier uses AC for conditional-expectation classes and bounded optional sampling.

[A2] [[def-countable-choice]]: the confidence supplier uses Countable Choice for its Gaussian integral.

[F1] [[def-linear-contextual-bandit-model]]: the model's fixed $\theta^*$, feature bounds $\|a\|_2\le L$, information matrices $V_t$, and sample-sum ridge estimates.

[F2] [[alg-linucb]]: $A_t$ maximizes $U_t(a)=\langle\widehat\theta_{t-1},a\rangle+\sqrt{\beta_t}\sqrt{a^{\mathsf T}W_{t-1}a}$ and $\beta_t=\max\{1,\rho_t^2\}$.

[F3] [[thm-self-normalized-linear-confidence-ellipsoid]]: with probability at least $1-\delta$, the true parameter is in the ellipsoid of radius $\rho_t$ about $\widehat\theta_{t-1}$ for every round in the horizon.

[F4] [[lem-linucb-elliptical-potential]]: if $u_t=\|A_t\|_{V_{t-1}^{-1}}^2$, then $\sum_t\min\{1,u_t\}\le2\log(\det V_n/\det V_0)$ and $\det V_t/\det V_{t-1}=1+u_t\ge1$.

[F5] [[lem-linucb-trace-determinant-bound]]: $\log(\det V_n/\det V_0)\le d\log(1+nL^2/(d\lambda))$.

[F6] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\,\|y\|$ in every real inner-product space; Cauchy–Schwarz also applies to the Euclidean inner product on $\mathbb R^n$.

[F7] [[lem-linucb-ridge-information-matrix]]: each $V_t$ is symmetric positive definite, so $\langle x,y\rangle_{V_t}:=x^{\mathsf T}V_ty$ is a real inner product and $V_t^{-1}$ is positive definite.

[F8] [[alg-linucb]]: the procedure initializes $W_0,D_0$, executes the stated finite loop, uses row swaps, nonzero row scalings, and row additions on the augmented matrix to construct $W_t,D_t$, and returns the specified online and terminal outputs. [[def-determinant-of-a-square-matrix]] gives $\det(I_d)=1$ and $\det(\lambda I_d)=\lambda^d$ by its Leibniz formula; [[thm-determinant-under-elementary-row-operations]] gives the determinant changes for the row operations.

## Proof

1.1 For each round, [F7] makes $V_t$ invertible and gives $\det V_t\ge\lambda^d>0$. To verify the row procedure, suppose $k<d$ pivots have succeeded. Each row swap, scaling by a nonzero pivot, and row addition is invertible, so the transformed left block remains invertible; elimination leaves it in block form $\begin{pmatrix}I_k&B\\0&C\end{pmatrix}$. The square block $C$ is invertible: otherwise a nonzero $z\in\ker C$ would give $\begin{pmatrix}-Bz\\z\end{pmatrix}$ in the kernel of the full left block. Its first column therefore has a nonzero entry, so a row $i\ge k$ with $M_{ik}\ne0$ exists and the selected pivot $p_k$ is nonzero. Induction gives all $d$ pivots and reduces the left block to $I_d$. The same row operations on the right identity block give a matrix $Q$ with $QV_t=I_d$, hence $W_t=Q=V_t^{-1}$. If $s$ is the product of row-swap signs, determinant tracking using [F8] gives $1=\det(V_t)s/(\prod_{k=0}^{d-1}p_k)$, so the stored value $s\prod_{k=0}^{d-1}p_k$ is exactly $D_t=\det(V_t)$. Initially these identities follow directly from $V_0=\lambda I_d$, $W_0=\lambda^{-1}I_d$, and $D_0=\lambda^d$. Therefore each confidence logarithm is finite and nonnegative, every score is finite, and the model or supplied selector makes an attained measurable choice. The model supplies each finite reward and the update matrices remain positive definite by [F7]. Induction over the fixed loop proves that all $n$ rounds complete and the stated outputs exist. [F1, F2, F7, F8, algebra]

2.1 At each elimination pivot, searching and swapping rows costs $O(d)$ operations; normalizing one row and eliminating its column from at most $d-1$ rows costs $O(d^2)$. The $d$ pivots therefore cost $O(d^3)$. Each matrix update and multiplication by $b_t$ costs $O(d^2)$; one finite-action score costs $O(d^2)$ and a maximization over $m_t$ actions costs $O(d^2m_t)$. Storing the returned feature and reward costs $O(d)$ per round. Summing over $n$ rounds gives $O(nd^3+d^2\sum_{t\in F}m_t)$ operations, and there is exactly one selector call for each $t\in K$. [step 1.1, F2, F8, algebra]

2.2 On the confidence event $E=\{\theta^*\in C_t\text{ for all }1\le t\le n\}$ from [F3], step 1.1 and the nonnegative radius formula give $\rho_t\ge0$. Since $\beta_t\ge\rho_t^2$, the algorithm's radius $\sqrt{\beta_t}$ also contains $\theta^*$. [A1, A2, F2, F3, step 1.1, algebra]

3.1 For any $a\in\mathcal A_t$, [F7] makes $\langle x,y\rangle_{V_{t-1}}=x^{\mathsf T}V_{t-1}y$ a real inner product. Cauchy–Schwarz gives $$\langle\theta^*,a\rangle=\langle\widehat\theta_{t-1},a\rangle+\langle\theta^*-\widehat\theta_{t-1},V_{t-1}^{-1}a\rangle_{V_{t-1}}\le\langle\widehat\theta_{t-1},a\rangle+\sqrt{\beta_t}\,\sqrt{a^{\mathsf T}V_{t-1}^{-1}a}.$$ By step 1.1, $W_{t-1}=V_{t-1}^{-1}$, so the final expression is $U_t(a)$. [F1, F2, F3, F6, F7, step 1.1, step 2.2, algebra]

4.1 By the model, the true-mean maximum on $\mathcal A_t$ is attained and its value is measurable. For every $a\in\mathcal A_t$, step 3.1 gives $\langle\theta^*,a\rangle\le U_t(a)$, and the algorithm's maximization gives $U_t(a)\le U_t(A_t)$. Taking the maximum over $a$ yields $$\max_{a\in\mathcal A_t}\langle\theta^*,a\rangle\le U_t(A_t).$$ [F1, F2, step 3.1]

5.1 Applying Cauchy–Schwarz to $A_t$ and the confidence error as in step 3.1 yields $$\langle\theta^*,A_t\rangle\ge\langle\widehat\theta_{t-1},A_t\rangle-\sqrt{\beta_t}\,\sqrt{A_t^{\mathsf T}V_{t-1}^{-1}A_t}=U_t(A_t)-2\sqrt{\beta_t}\,\sqrt{u_t},$$ where step 1.1 identifies $W_{t-1}=V_{t-1}^{-1}$. Define $r_t=\max_{a\in\mathcal A_t}\langle\theta^*,a\rangle-\langle\theta^*,A_t\rangle$. By step 4.1, this gap is nonnegative and at most $2\sqrt{\beta_t}\sqrt{u_t}$. [F1, F2, F3, F6, F7, step 1.1, step 2.2, step 4.1, algebra]

6.1 The range hypothesis gives $r_t\le1$. By [F4], $\det V_t/\det V_{t-1}=1+u_t\ge1$, so the algorithm's determinant-defined $\beta_t$ is nondecreasing and $\beta_t\le\beta_n$. If $u_t\le1$, step 5.1 gives $r_t\le2\sqrt{\beta_n}\sqrt{u_t}$; if $u_t\ge1$, the range bound gives $r_t\le1\le2\sqrt{\beta_n}$. Thus in both cases $r_t\le2\sqrt{\beta_n}\min\{1,\sqrt{u_t}\}$. [F2, F4, step 5.1, algebra]

7.1 Squaring step 6.1 gives $r_t^2\le4\beta_n\min\{1,u_t\}$. Euclidean Cauchy–Schwarz on $(r_1,\ldots,r_n)$ and $(1,\ldots,1)$ therefore yields $$\widehat R_n=\sum_{t=1}^nr_t\le\sqrt{n\sum_{t=1}^nr_t^2}\le2\sqrt{n\beta_n\sum_{t=1}^n\min\{1,u_t\}}.$$ [step 6.1, F6, algebra]

8.1 Apply the sum bound in [F4] to step 7.1 to obtain $\widehat R_n\le\sqrt{8n\beta_n\log(\det V_n/\det V_0)}$. Then [F5] gives the second displayed bound. These inequalities hold on $E$, whose probability is at least $1-\delta$ by [F3]. [F3, F4, F5, step 7.1] ∎

