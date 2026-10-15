---
id: thm-iid-posterior-contraction-by-entropy-and-prior-mass
kind: theorem
title: "IID posterior contraction by entropy and prior mass"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - lem-iid-posterior-denominator-lower-bound-from-kl-mass
  - lem-iid-sieve-entropy-produces-exponential-tests
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-probability-measure
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - def-measure-with-density
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - def-hellinger-distance-between-density-laws
  - lem-hellinger-distance-controls-l1-and-total-variation
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-factorization-of-expectations-for-independent-variables
  - cor-markov-inequality-for-random-variables
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Subhashis Ghosal, Jayanta K. Ghosh and Aad W. van der Vaart, Convergence rates of posterior distributions, Theorem 2.1 and proof"
      url: "https://doi.org/10.1214/aos/1016218228"
    - title: "B. J. K. Kleijn, Bayesian Statistics for Frequentists, Theorem 6.4.3 and proof"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf"
    - title: "Subhashis Ghosal, The Dirichlet Process, Related Priors and Posterior Asymptotics, §2.5.2"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf"
---

## Statement

Let $(\mathsf X,\mathcal A,\mu)$ be a sample space with a fixed sigma-finite dominating measure. Let $(\Theta,\mathcal T)$ be a measurable parameter space with prior probability measure $\Pi$, and let $p_\theta$ be finite-valued probability densities relative to $\mu$ such that $(\theta,x)\mapsto p_\theta(x)$ is jointly measurable. Let $p_0$ be a true density relative to $\mu$, and observe $X_1,\ldots,X_n$ IID from $P_0$, the law with density $p_0$. Assume AC for the imported directional KL convention ([[def-axiom-of-choice]]). The joint density family is explicit input; no arbitrary-index selection of versions is performed in this theorem.

Choose one metric $d$ for both the entropy and conclusion: the root-L2 Hellinger distance $h$ of [[def-hellinger-distance-between-density-laws]], the full density distance $d_1(p,q)=\int|p-q|\,d\mu$, or the density distance $d_2(p,q)=(\int|p-q|^2\,d\mu)^{1/2}$. In the $d_2$ case assume one finite constant $B$ bounds $p_0$ and every density $p_\theta$ in the model by $B$ $\mu$-almost everywhere. For each $n$, let $\Theta_n\in\mathcal T$ be a nonempty measurable parameter sieve and put $\mathcal F_n:=\{p_\theta:\theta\in\Theta_n\}$. Assume $\theta\mapsto d(p_\theta,p_0)$ is measurable; this follows from the jointly measurable density family by integration of the relevant nonnegative distance integrands. Let $D(r,\mathcal F_n,d)$ be the packing number defined in [[lem-iid-sieve-entropy-produces-exponential-tests]]. Suppose $C>0$, $\epsilon_n>0$, $\epsilon_n\to0$, $n\epsilon_n^2\to\infty$, and
$$\log D(\epsilon_n,\mathcal F_n,d)\le n\epsilon_n^2,\qquad \Pi(\Theta_n^c)\le e^{-(C+4)n\epsilon_n^2},$$
while
$$\Pi\!\left\{\theta:\mathrm{KL}(P_0\Vert P_\theta)\le\epsilon_n^2,\quad \int\left[\log\frac{p_\theta}{p_0}\right]^2p_0\,d\mu\le\epsilon_n^2\right\}\ge e^{-Cn\epsilon_n^2}.$$
Here $\mathrm{KL}(P_0\Vert P_\theta)$ has the directional convention of [[def-kullback-leibler-divergence]]. In the log-square integral, set the weighted integrand to zero on $\{p_0=0\}$; on $\{p_0>0,p_\theta=0\}$ the log ratio is $-\infty$ and its square is $+\infty$, as in [[lem-iid-posterior-denominator-lower-bound-from-kl-mass]]. Define the data-indexed posterior by normalizing $\prod_i p_\theta(X_i)$ against $\Pi$ on fibers with finite positive evidence. Then for all sufficiently large fixed $M$, the posterior contracts outside the $M\epsilon_n$-ball in the selected metric:
$$\Pi\{\theta:d(p_\theta,p_0)>M\epsilon_n\mid X_1,\ldots,X_n\}\longrightarrow0$$
in $P_0^n$-probability.

For $d=d_1$, the radius is in the full density L1 norm; by [[lem-hellinger-distance-controls-l1-and-total-variation]], $d_1=2\lVert P-Q\rVert_{\rm TV}$ under the library event-supremum convention. The theorem asserts only convergence in probability and gives no automatic almost-sure or minimax-optimality conclusion.

## Facts & Assumptions

**Given:** A sigma-finite dominated IID density model with a jointly measurable density evaluation map, a prior $\Pi$, a true finite-valued density $p_0$, measurable parameter sieves $\Theta_n$, their density images $\mathcal F_n$, and the displayed entropy, sieve-tail, and local prior-mass conditions.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]] for the imported directional KL convention [[def-kullback-leibler-divergence]]. The jointly measurable density family is explicitly supplied, so no arbitrary-index selection of these versions is used.

[F1] [[lem-iid-posterior-denominator-lower-bound-from-kl-mass]]: the local KL/log-square mass condition gives $D_n\ge e^{-(C+2)n\epsilon_n^2}$ with probability at least $1-1/(n\epsilon_n^2)$.

[F2] [[lem-iid-sieve-entropy-produces-exponential-tests]]: under the same metric entropy condition on $\mathcal F_n$, tests exist with null error at most $2e^{-(c_dM^2-1)n\epsilon_n^2}$ and error at most $e^{-c_dM^2n\epsilon_n^2}$ for every density in $\mathcal F_n$ outside the $M\epsilon_n$-ball.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions have measurable section integrals and may be integrated in either order on sigma-finite product spaces.

[F4] [[thm-factorization-of-expectations-for-independent-variables]]: for IID observations, expectations of finite products of nonnegative one-observation functions factor.

[F5] [[cor-markov-inequality-for-random-variables]]: for a nonnegative random variable $Y$ and $a>0$, $P(Y>a)\le E[Y]/a$.

[F6] [[thm-arithmetic-and-lattice-operations-preserve-measurability]] and [[thm-composition-with-borel-functions-preserves-measurability]]: arithmetic operations and Borel functions of jointly measurable density maps preserve product measurability, including absolute values, squares, and square roots.

[F7] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] and [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: the nonnegative integral preserves order, is additive, and is homogeneous under positive finite scalars.

[F8] [[thm-independent-random-elements-have-product-joint-law]]: a finite IID sample has the product joint law. For the supplied one-observation density $p_\theta$, Tonelli and [[def-measure-with-density]] show that $\prod_i p_\theta(x_i)$ defines its product-law density relative to $\mu^n$: the two measures agree on measurable rectangles, and [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]] identifies them on the product sigma-algebra [[def-product-sigma-algebra-and-finite-product-sigma-algebras]].

## Proof

1.1 On the $P_0^n$-full event where $0<\prod_i p_0(X_i)<\infty$, set $R_n(\theta):=\prod_{i=1}^np_\theta(X_i)/p_0(X_i)$ and $D_n:=\int R_n(\theta)\,\Pi(d\theta)$. By [F1], on an event $\Omega_n$ with $P_0^n(\Omega_n^c)\le1/(n\epsilon_n^2)$, the scaled denominator $D_n$ is finite and at least $e^{-(C+2)n\epsilon_n^2}$. The evidence $\int\prod_i p_\theta(X_i)\Pi(d\theta)=D_n\prod_i p_0(X_i)$ is therefore finite and positive, and on this event the posterior is the quotient of these likelihood integrals. [A1, F1, given]

1.2 Joint measurability of $p_\theta$ and the arithmetic/Borel-composition rules [F6] make each nonnegative distance integrand $|p_\theta-p_0|$, $|p_\theta-p_0|^2$, or $(\sqrt{p_\theta}-\sqrt{p_0})^2$ product-measurable. Tonelli [F3] therefore gives measurability of $\theta\mapsto d(p_\theta,p_0)$. Its values are finite: the Hellinger bound follows from the definition remark, $d_1\le2$ follows from $|p_\theta-p_0|\le p_\theta+p_0$ and [F7], and in the $d_2$ case [F7] and the uniform bound give $d_2^2\le\int(p_\theta+p_0)^2d\mu\le2B\int(p_\theta+p_0)d\mu=4B$. Thus $A_n$ is measurable. Apply [F2] with the selected metric and choose $M$ large enough that $c_dM^2\ge C+4$. The resulting test $\phi_n$ has $P_0^n(\phi_n=1)\to0$ and error at most $e^{-c_dM^2n\epsilon_n^2}$ for every $\theta\in\Theta_n$ with $d(p_\theta,p_0)>M\epsilon_n$. [F2, F3, F6, F7, given, choose]

1.3 Put $A_n:=\{\theta:d(p_\theta,p_0)>M\epsilon_n\}$, $N_n:=\int_{A_n\cap\Theta_n}R_n(\theta)\,\Pi(d\theta)$ and $T_n:=\int_{A_n\cap\Theta_n^c}R_n(\theta)\,\Pi(d\theta)$. The piecewise likelihood ratio is jointly measurable: on the measurable set where $p_0>0$ it is a Borel function of $(p_\theta,p_0)$, and it is zero where $p_0=0$, by [F6]. Thus the product-density identity [F8], joint measurability, and Tonelli [F3] give $\mathbb E_{P_0^n}[(1-\phi_n)N_n]\le\int_{A_n\cap\Theta_n}P_\theta^n(1-\phi_n)\,\Pi(d\theta)\le e^{-c_dM^2n\epsilon_n^2}.$ The first inequality allows $P_\theta$ to put mass outside the support of $P_0$, since the likelihood-ratio integral then contains only the $P_0$-support and is no larger than the full $P_\theta^n$ probability. [F2, F3, F6, F8, given]

1.4 For every fixed $\theta$, $\mathbb E_{P_0}[p_\theta(X_1)/p_0(X_1)]=\int_{\{p_0>0\}}p_\theta\,d\mu\le1$. Independence and [F4] therefore give $\mathbb E_{P_0^n}R_n(\theta)\le1$. Tonelli [F3] and the sieve-tail premise yield $\mathbb E_{P_0^n}T_n\le\Pi(\Theta_n^c)\le e^{-(C+4)n\epsilon_n^2}.$ [F3, F4, given, algebra]

2.1 Fix $\delta>0$. On $\Omega_n\cap\{\phi_n=0\}$, posterior mass $\Pi(A_n\mid X^n)>\delta$ implies $(1-\phi_n)(N_n+T_n)>\delta e^{-(C+2)n\epsilon_n^2}$. Markov's inequality [F5], step 1.1, and [F2]–[F3] give $P_0^n\{\Pi(A_n\mid X^n)>\delta\}\le\frac1{n\epsilon_n^2}+2e^{-(c_dM^2-1)n\epsilon_n^2}+\frac{e^{(C+2)n\epsilon_n^2}}{\delta}\left(e^{-c_dM^2n\epsilon_n^2}+e^{-(C+4)n\epsilon_n^2}\right).$ By the choice $c_dM^2\ge C+4$ and $n\epsilon_n^2\to\infty$, the right side tends to zero. Since this holds for every $\delta>0$, the posterior mass outside the stated ball converges to zero in $P_0^n$-probability. [F1, F2, F3, F5, step 1.1, step 1.2, step 1.3, step 1.4, algebra] ∎
