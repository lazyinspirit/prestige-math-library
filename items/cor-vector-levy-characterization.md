---
id: cor-vector-levy-characterization
kind: corollary
title: "Vector Levy characterization"
status: draft
origin: pipeline
deps: [lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t, def-quadratic-covariation-of-brownian-ito-processes, def-d-dimensional-brownian-motion, def-continuous-time-adapted-process-and-martingale, def-continuous-time-filtration-and-all-pairs-martingale, def-standard-normal-and-normal-laws, def-multivariate-normal-law, lem-characteristic-function-of-a-multivariate-normal-law, thm-monotone-convergence-for-the-integral, cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms, thm-tower-property-of-conditional-expectation, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Exercise 6.5 (componentwise reduction to Theorem 6.1)"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$ and let
$M=(M^1,\dots,M^d)$ be an adapted $\mathbb R^d$-valued process with continuous
paths such that every coordinate $M^i$ is a real continuous local martingale
relative to $(\mathcal F_t)_{t\ge0}$ in the sense of
[[def-continuous-time-adapted-process-and-martingale]]. Suppose $M_0=0$ almost surely and
whose quadratic covariations in the sense of
[[def-quadratic-covariation-of-brownian-ito-processes]] satisfy
$[M^i,M^j]_t=\delta_{ij}t$ for all $i,j$ and all $t\ge0$. Then $M$ is a
standard $d$-dimensional Brownian motion [[def-d-dimensional-brownian-motion]],
and for all $0\le s<t$ the vector increment $M_t-M_s$ is independent of
$\mathcal F_s$ with law $N_d(0,(t-s)I_d)$.

## Facts & Assumptions

**Given:** AC, a filtered probability space with continuous-time filtration, an adapted $\mathbb R^d$-valued continuous process $M$ whose coordinates are real continuous local martingales, with $M_0=0$ almost surely and $[M^i,M^j]_t=\delta_{ij}t$, a vector $\lambda\in\mathbb R^d$, and times $0\le s<t$.

[F1] **Martingale linearity.** Finite linear combinations of true integrable adapted martingales are martingales, by finite linearity of their event-integral identities. A true martingale is local using the deterministic localizers $\tau_k=k$. The coordinates are proved to be true martingales in step 1.1 before this observation is used. [[def-continuous-time-adapted-process-and-martingale]] [[def-conditional-expectation-as-an-ae-class]]

[F2] **Bilinearity of covariation.** For continuous processes whose pairwise covariations exist the covariation is bilinear: $[X_1+X_2,Y]=[X_1,Y]+[X_2,Y]$ and $[cX,Y]=c[X,Y]$, because cross-increment sums are exactly bilinear and probability limits are unique. [[def-quadratic-covariation-of-brownian-ito-processes]]

[F3] **Scalar characteristic exponential.** For a real continuous local martingale $N$ with $N_0=0$ almost surely and $[N]_t=t$, the characteristic-exponential lemma gives $E[e^{i\theta(N_t-N_s)}\mid\mathcal F_s]=e^{-\theta^2(t-s)/2}$. Here and throughout this proof $E[U+iV\mid\mathcal F_s]$ means $E[U\mid\mathcal F_s]+iE[V\mid\mathcal F_s]$, for real integrable $U,V$; equalities mean the two real almost-sure class identities. This is exactly the componentwise convention of the supplier. [[lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t]] [[def-conditional-expectation-as-an-ae-class]]

[F4] **Multivariate Fourier uniqueness and Gaussian laws.** Finite Borel measures on $\mathbb R^n$ with equal Fourier transforms are equal. The laws $N_1(0,t-s)$ and $N_d(0,(t-s)I_d)$ have finite second moments and mean zero. The latter law exists, can be realized as the product of independent $N(0,t-s)$ coordinates, and its Fourier transform at $\lambda$ is $e^{-(t-s)|\lambda|^2/2}$. [[cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms]] [[def-multivariate-normal-law]] [[lem-characteristic-function-of-a-multivariate-normal-law]] [[def-standard-normal-and-normal-laws]] [[def-d-dimensional-brownian-motion]] [[thm-monotone-convergence-for-the-integral]]

[F5] **Conditional expectations and towers.** Conditional expectations are unique almost-sure classes; for $A\in\mathcal F_s$ one has $E[1_AX\mid\mathcal F_s]=1_AE[X\mid\mathcal F_s]$ and $E[1_AE[X\mid\mathcal F_s]]=E[1_AX]$; the tower property passes conditional laws from one time to an earlier time. [[def-conditional-expectation-as-an-ae-class]] [[thm-tower-property-of-conditional-expectation]]

[F6] **AC bookkeeping.** Choice is declared for conditional expectations, the characteristic-exponential supplier, Gaussian construction and Fourier uniqueness. [[def-axiom-of-choice]]



## Proof

**Proof technique:** direct.

1.1 First establish true coordinate martingales, without intersecting localizers. Apply [F3] to each $M^i$, since $[M^i]_t=t$. For $A\in\mathcal F_s$, let $\mu^i_A(C)=P(A\cap\{M^i_t-M^i_s\in C\})$. This finite positive Borel measure has transform $P(A)e^{-\theta^2(t-s)/2}$ by componentwise conditional event testing. Finite-measure Fourier uniqueness [F4] in dimension one identifies it with $P(A)N_1(0,t-s)$, including when $P(A)=0$, without normalization. With $A=\Omega$, this proves integrability and zero mean of each increment. At $s=0$, $M^i_0=0$ almost surely gives integrability of $M^i_t$; $M^i_0$ is itself integrable. Integrating the identity function against $\mu^i_A=P(A)N_1(0,t-s)$ gives $E[1_A(M^i_t-M^i_s)]=0$. The pushforward integral identity here follows first for indicators from the definition of $\mu^i_A$, then for simple functions and nonnegative increasing limits, and finally for integrable signed functions. Thus every coordinate is a true all-pairs martingale by its defining event tests. [F1, F3, F4, F5]

2.1 Fix $\lambda\in\mathbb R^d$ and put $X^\lambda_t=\sum_i\lambda_iM^i_t$. It is an integrable adapted martingale by step 1.1 and [F1], hence a local martingale, and has continuous paths on the finite intersection of the coordinate continuity events. It starts at zero almost surely. For every deterministic partition its square sums are exactly $\sum_{i,j}\lambda_i\lambda_j$ times the respective cross sums. Their uniform error is bounded by the sum of the finitely many absolute coefficients times the corresponding uniform errors. The union bound therefore proves existence, not merely a formal use of bilinearity, of $[X^\lambda]_t=|\lambda|^2t$ along every permitted sequence. [F1, F2, step 1.1]

3.1 For $\lambda\ne0$, $N^\lambda=X^\lambda/|\lambda|$ satisfies the hypotheses of [F3]. Apply its componentwise identity at frequency $\theta=|\lambda|$. This gives $E[e^{i\lambda\cdot(M_t-M_s)}\mid\mathcal F_s]=e^{-(t-s)|\lambda|^2/2}$. For $\lambda=0$ both sides are $1$. No common exceptional set for all frequencies is needed: each fixed frequency identity gives a numerical equality of event integrals. [F2, F3, F5, step 2.1]

4.1 Conditional law of the vector increment: for each $A\in\mathcal F_s$ define the finite Borel measure $Q_A(\Gamma):=E[1_A1_{\{M_t-M_s\in\Gamma\}}]$ on $\mathbb R^d$; its Fourier transform is $\int e^{i\lambda\cdot x}Q_A(dx)=E[1_Ae^{i\lambda\cdot(M_t-M_s)}]=P(A)e^{-(t-s)|\lambda|^2/2}$ by step 3.1 and [F5], which is $P(A)$ times the Fourier transform of $N_d(0,(t-s)I_d)$ by [F4]. By multivariate Fourier uniqueness [F4], $Q_A=P(A)N_d(0,(t-s)I_d)$ for every $A\in\mathcal F_s$; in particular, with $A=\Omega$, the increment has law $N_d(0,(t-s)I_d)$, and with general $A$ the identity is exactly the independence of the increment from $\mathcal F_s$. [F4, F5, step 3.1]

5.1 Finite lists of increments: for $0=t_0<t_1<\cdots<t_n$ the increments $M_{t_j}-M_{t_{j-1}}$ are independent with laws $N_d(0,(t_j-t_{j-1})I_d)$. Induction on $n$: the case $n=1$ is step 4.1; given the claim for $n$ increments, the increment at $t_{n+1}$ has conditional law $N_d(0,(t_{n+1}-t_n)I_d)$ given $\mathcal F_{t_n}$ and is independent of $\mathcal F_{t_n}$ by step 4.1 applied with $s=t_n$, hence independent of the sigma-algebra generated by the earlier increments, and [F5] multiplies the joint law. [F5, step 4.1]

6.1 Conclusion and boundary cases: $M$ is adapted, continuous, starts at $0$ almost surely, and its finite-dimensional increment laws are those of a standard $d$-dimensional Brownian motion by step 5.1; this is precisely the defining increment condition, so $M$ is a standard $d$-dimensional Brownian motion with the stated filtration property. For $d=1$ the same Fourier event-test argument gives the scalar characterization; for $\lambda=0$ the linear combination is the zero process and the identity is trivial; the coordinate increments at $s=t$ are zero with law $N(0,0)$; the hypothesis $\delta_{ij}t$ excludes degenerate covariance matrices, and no independence of the coordinates is assumed in the proof — the Brownian definition derives it from the verified vector increment laws; and AC has the uses declared in [F6]. [F3, F4, F6, step 5.1] ∎



## Source notes

Van der Vaart states the multivariate Lévy characterization as Exercise 6.5, derived from the scalar theorem. The proof above uses the Cramér--Wold style reduction through linear functionals and multivariate Fourier uniqueness, which is the standard route when the exercise is not proved in the source. To avoid an unproved stopping assertion when combining coordinate localizers, the proof first derives true coordinate martingales from their unit clocks and then uses ordinary finite linearity.
