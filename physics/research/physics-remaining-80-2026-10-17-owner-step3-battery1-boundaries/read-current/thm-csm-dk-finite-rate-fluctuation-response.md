---
id: thm-csm-dk-finite-rate-fluctuation-response
kind: theorem
title: "Finite-rate fluctuation response and Green–Kubo inverse"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-dk-finite-reversible-rate-model
  - thm-csm-dk-nonexplosive-ctmc-and-gap
  - thm-csm-dk-integrable-covariance-green-kubo
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-csm-dk-finite-reversible-rate-model: mathematical-premise
  thm-csm-dk-nonexplosive-ctmc-and-gap: mathematical-premise
  thm-csm-dk-integrable-covariance-green-kubo: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs"
      url: "https://www.stat.berkeley.edu/~aldous/RWG/book.pdf"
      locator: "Chapter 3 §§3.1–3.4: detailed balance, the self-adjoint finite generator and its spectral representation."
    - title: "Udo Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/pdf/1205.4176"
      locator: "§8.1.1 and §§8.2.2–8.2.4: equilibrium response correlations, rate-dependent response and local detailed balance."
---

## Statement

Assume the Axiom of Choice [[def-axiom-of-choice]], countable choice [[def-countable-choice]], and the rate model $E,\pi,w,Q$ of [[def-csm-dk-finite-reversible-rate-model]]. Let $X_t$ be the stationary two-sided chain of [[thm-csm-dk-nonexplosive-ctmc-and-gap]], with transition semigroup $P_t=e^{tQ}$. For any real observables $A,B:E\to\mathbb R$, write $A_c=A-\pi(A)$ and $B_c=B-\pi(B)$, and define
$$C_{BA}(t):=\langle B_c,P_tA_c\rangle_\pi,\qquad t\ge0.$$
Define $\operatorname{Cov}_\pi(A,B):=\pi(AB)-\pi(A)\pi(B)$, where $AB$ is pointwise multiplication.
For any finite horizon $t_f>0$, let $h:[0,t_f]\to\mathbb R$ be continuous and let $\epsilon$ be dimensionless. For $0\le t\le t_f$, prescribe rates
$$w^\epsilon_{ab}(t)=w_{ab}\exp\! \left(\frac{\beta\epsilon h(t)}2(B_b-B_a)\right),\quad a\ne b,$$
with negative row sums on the diagonal, and let $p^\epsilon(0)=\pi$ evolve by the resulting finite forward equation. For $0\le t\le t_f$, the derivative of the observable mean at $\epsilon=0$ is
$$\left.\frac{\partial}{\partial\epsilon}\sum_a p^\epsilon_a(t)A_a\right|_{\epsilon=0}=\int_0^t h(s)R_{AB}(t-s)\,ds,\qquad R_{AB}(u)=-\beta\,\frac{d}{du}C_{BA}(u).$$
For a constant field $h$, define the normalized perturbed Gibbs vector by
$$\pi^\epsilon_a:=\frac{\pi_a e^{\beta\epsilon hB_a}}{\sum_{c\in E}\pi_c e^{\beta\epsilon hB_c}}.$$
It is stationary and its static susceptibility is $\beta h\,\operatorname{Cov}_\pi(A,B)$.

For any bounded vector observable $G:E\to\mathbb R^d$, set $G_c=G-\pi(G)$ and
$$C_{ij}(s):=\langle (G_c)_i,P_s(G_c)_j\rangle_\pi.$$
These correlations are absolutely integrable. The Green–Kubo covariance limit is
$$\lim_{T\to\infty}\frac{\operatorname{Cov}_\pi(\int_0^T G(X_s)\,ds)}{2T}=D,\qquad D_{ij}=\int_0^\infty C_{ij}(s)\,ds=\langle (G_c)_i,(-Q)^{-1}(G_c)_j\rangle_\pi,$$
where $(-Q)^{-1}$ is the inverse on the mean-zero subspace and $D$ is positive semidefinite.

## Facts & Assumptions
**Given:** Choice, countable choice, and the connected finite reversible rate model.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A2] [[def-countable-choice]]: for every sequence of nonempty sets $(X_n)_{n\in\mathbb N}$, there is a choice function selecting one member of each $X_n$.

[F1] [[def-csm-dk-finite-reversible-rate-model]]: $\pi(f)=\sum_a\pi_af_a$ and $\langle f,g\rangle_\pi=\sum_a\pi_af_ag_a$; $Q_{ab}=w_{ab}$ for $a\ne b$, $Q_{aa}=-\sum_{b\ne a}w_{ab}$, $\pi$ is a positive probability vector, the positive-rate graph is connected, and $\pi_aw_{ab}=\pi_bw_{ba}$.

[F2] [[thm-csm-dk-nonexplosive-ctmc-and-gap]]: $P_t=e^{tQ}$ is stochastic; $Q$ is self-adjoint on $L^2(E,\pi)$ with a one-dimensional constant kernel and a positive gap; from initial law $\pi$ there is a jointly measurable two-sided stationary chain.

[F3] [[thm-csm-dk-integrable-covariance-green-kubo]]: for a jointly measurable, centered, second-order stationary process on a two-sided time axis with absolutely integrable covariances, the covariance of its time integral divided by $2T$ converges to the symmetrized integrated covariance matrix, which is positive semidefinite.

## Proof

**Given:** [A1]–[A2] and [F1]–[F3].

1.1 By [F2], choose an orthonormal eigenbasis of $Q$ with $\phi_0=1$ and $Q\phi_j=-\lambda_j\phi_j$ for $j\ge1$, where $\lambda_j>0$. For centered $A,B$, expand $A_c=\sum_{j\ge1}a_j\phi_j$ and $B_c=\sum_{j\ge1}b_j\phi_j$. Then $C_{BA}(t)=\sum_{j=1}^{r-1}b_ja_je^{-\lambda_jt}$ and $\int_0^\infty C_{BA}(t)\,dt=\sum_{j=1}^{r-1}a_jb_j/\lambda_j=\langle B_c,(-Q)^{-1}A_c\rangle_\pi$. The sum is finite, so the correlation is absolutely integrable. Applying the same expansion to each component of $G_c$ gives $D_{ij}=\sum_{j'=1}^{r-1}g_{i,j'}g_{j,j'}/\lambda_{j'}$, a symmetric positive-semidefinite matrix. The two-sided stationary chain in [F2] has bounded, jointly measurable $G_c(X_t)$; its covariance is absolutely integrable by this expansion, so [F3] gives the stated covariance limit and agrees with this matrix. [A1, A2, F1, F2, F3, algebra]

2.1 For a finite time interval, the controlled off-diagonal rate matrix has the uniform expansion $Q^\epsilon(t)=Q+\epsilon h(t)K+O(\epsilon^2)$, where $K_{ab}=\frac{\beta}{2}w_{ab}(B_b-B_a)$ for $a\ne b$ and each diagonal entry makes its row sum zero. The remainder is uniform because $E$ is finite and $h$ is bounded. The finite forward equation $p'=pQ^\epsilon(t)$ has a unique solution: its Picard series converges uniformly, since the $n$th iterated integral is bounded by $M^nt_f^n/n!$ when $\|Q^\epsilon(t)\|\le M$. Since $E$ is finite, $h$ is bounded, and the exponential factors are bounded uniformly for $t\in[0,t_f]$ and $|\epsilon|\le1$, choose one $\Lambda$ larger than every controlled exit rate on this set. Then $Q^\epsilon(t)+\Lambda I$ has nonnegative entries; after $r(t)=e^{\Lambda t}p^\epsilon(t)$, its Picard series has nonnegative terms, so $p^\epsilon(t)\ge0$ for all such $\epsilon$. The row sums of $Q^\epsilon$ are zero, hence total mass remains one. Subtracting the unperturbed equation and using $\pi Q=0$ gives $p^\epsilon-\pi=O(\epsilon)$ on $[0,t_f]$ by successive substitution in the bounded linear integral equation. Put $y^\epsilon=(p^\epsilon-\pi)/\epsilon$; then $y^\epsilon(t)=\int_0^t y^\epsilon(s)Q\,ds+\int_0^t p^\epsilon(s)(Q^\epsilon(s)-Q)/\epsilon\,ds$. The second integrand converges uniformly to $\pi h(s)K$, since $p^\epsilon\to\pi$ uniformly and $(Q^\epsilon-Q)/\epsilon\to hK$ uniformly. Subtracting the limiting integral equation bounds $\|y^\epsilon-q\|$ by a term tending uniformly to zero plus $M\int_0^t\|y^\epsilon-q\|,ds$; successive substitution bounds this difference by the forcing error times $e^{Mt_f}$. Thus $q=\partial_\epsilon p^\epsilon|_0$ exists and satisfies $q'=qQ+h\pi K$, $q(0)=0$. Variation of constants, verified by differentiation, gives $q(t)=\int_0^t h(s)\pi K P_{t-s}\,ds$. [A1, F1, F2, step 1.1, construct, algebra]

3.1 For each state $b$, detailed balance in [F1] and the definition of $K$ give $(\pi K)_b=\frac{\beta}{2}\sum_{a\ne b}\pi_aw_{ab}(B_b-B_a)-\frac{\beta}{2}\pi_b\sum_{c\ne b}w_{bc}(B_c-B_b)=-\beta\pi_b(QB)_b$. Indeed, replacing $\pi_aw_{ab}$ by $\pi_bw_{ba}$ makes the first sum the negative of the second before its prefactor is applied. Thus $q(t)A=\int_0^t h(s)(\pi K)P_{t-s}A\,ds=-\beta\int_0^t h(s)\langle QB_c,P_{t-s}A_c\rangle_\pi\,ds$. Self-adjointness of $Q$ and $P'_u=QP_u$ imply $C'_{BA}(u)=\langle QB_c,P_uA_c\rangle_\pi$, proving the response formula. [F1, F2, step 2.1, algebra]

4.1 For constant $h$, put $Z_\epsilon:=\sum_{c\in E}\pi_c e^{\beta\epsilon hB_c}>0$ and $\pi^\epsilon_a=Z_\epsilon^{-1}\pi_ae^{\beta\epsilon hB_a}$. Multiplying this by $w^\epsilon_{ab}$ gives a common edge factor proportional to $\pi_aw_{ab}e^{\beta\epsilon h(B_a+B_b)/2}$, symmetric in $a,b$ by detailed balance. Hence $\pi^\epsilon$ is stationary. Differentiating its finite normalization sum at $\epsilon=0$ gives $\left.\partial_\epsilon\sum_a\pi^\epsilon_aA_a\right|_0=\beta h(\pi(AB)-\pi(A)\pi(B))$, the stated static susceptibility. [F1, step 1.1, algebra] ∎
