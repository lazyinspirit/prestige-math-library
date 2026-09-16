---
id: cor-vector-levy-characterization
kind: corollary
title: "Vector Levy characterization"
status: draft
origin: pipeline
deps: [thm-levy-characterization-of-brownian-motion, def-quadratic-covariation-of-brownian-ito-processes, def-d-dimensional-brownian-motion, def-continuous-time-adapted-process-and-martingale, def-continuous-time-filtration-and-all-pairs-martingale, def-continuous-time-stopping-time, def-standard-normal-and-normal-laws, cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms, thm-tower-property-of-conditional-expectation, def-conditional-expectation-as-an-ae-class, def-law-modification-and-indistinguishability-of-processes, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
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
$M=(M^1,\dots,M^d)$ be an $\mathbb R^d$-valued continuous local martingale
relative to a filtration $(\mathcal F_t)_{t\ge0}$, with $M_0=0$ almost surely,
whose quadratic covariations in the sense of
[[def-quadratic-covariation-of-brownian-ito-processes]] satisfy
$[M^i,M^j]_t=\delta_{ij}t$ for all $i,j$ and all $t\ge0$. Then $M$ is a
standard $d$-dimensional Brownian motion [[def-d-dimensional-brownian-motion]],
and for all $0\le s<t$ the vector increment $M_t-M_s$ is independent of
$\mathcal F_s$ with law $N_d(0,(t-s)I_d)$.

## Facts & Assumptions

**Given:** AC, a filtered probability space with continuous-time filtration, an $\mathbb R^d$-valued continuous local martingale $M$ with $M_0=0$ almost surely and $[M^i,M^j]_t=\delta_{ij}t$, a vector $\lambda\in\mathbb R^d$, and times $0\le s<t$.

[F1] **Finite linear combinations of local martingales.** If $X^1,\dots,X^d$ are continuous local martingales relative to $(\mathcal F_t)$, then so is $\lambda\cdot X=\sum_i\lambda_iX^i$: intersection of the finitely many localizing sequences is a localizing sequence, and a finite linear combination of the corresponding martingales is a martingale. [[def-continuous-time-adapted-process-and-martingale]] [[def-continuous-time-stopping-time]]

[F2] **Bilinearity of covariation.** For continuous processes whose pairwise covariations exist the covariation is bilinear: $[X_1+X_2,Y]=[X_1,Y]+[X_2,Y]$ and $[cX,Y]=c[X,Y]$, because cross-increment sums are exactly bilinear and probability limits are unique. [[def-quadratic-covariation-of-brownian-ito-processes]]

[F3] **Scalar Levy characterization.** A real continuous local martingale $N$ with $N_0=0$ and $[N]_t=t$ is a standard Brownian motion with the increment independence and $N(0,t-s)$ conditional law of [[thm-levy-characterization-of-brownian-motion]]. [[thm-levy-characterization-of-brownian-motion]] [[def-continuous-time-adapted-process-and-martingale]]

[F4] **Multivariate Fourier uniqueness and Gaussian laws.** Finite Borel measures on $\mathbb R^n$ with equal Fourier transforms are equal; the law $N_d(0,(t-s)I_d)$ is the product of independent $N(0,t-s)$ coordinates, and its Fourier transform at $\lambda$ is $e^{-(t-s)|\lambda|^2/2}$. [[cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms]] [[def-standard-normal-and-normal-laws]] [[def-d-dimensional-brownian-motion]]

[F5] **Conditional expectations and towers.** Conditional expectations are unique almost-sure classes; for $A\in\mathcal F_s$ one has $E[1_AX\mid\mathcal F_s]=1_AE[X\mid\mathcal F_s]$ and $E[1_AE[X\mid\mathcal F_s]]=E[1_AX]$; the tower property passes conditional laws from one time to an earlier time. [[def-conditional-expectation-as-an-ae-class]] [[thm-tower-property-of-conditional-expectation]]

[F6] **AC bookkeeping.** Choice is declared for the conditional-expectation interface. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** direct.

1.1 Reduction to scalars: fix $\lambda\in\mathbb R^d$ and put $X^\lambda_t:=\lambda\cdot M_t=\sum_i\lambda_iM^i_t$, a continuous local martingale with $X^\lambda_0=0$ by [F1], and compute its quadratic variation by bilinearity [F2]: $[X^\lambda]_t=\sum_{i,j}\lambda_i\lambda_j[M^i,M^j]_t=\sum_i\lambda_i^2t=|\lambda|^2t$; all covariations appearing here exist by hypothesis, so the bilinearity identities apply. [F1, F2, given]

1.2 Scalar characterization: for $\lambda\ne0$ the process $N^\lambda:=X^\lambda/|\lambda|$ is a continuous local martingale with $N^\lambda_0=0$ and $[N^\lambda]_t=t$ (by [F2] applied with the constant factor $1/|\lambda|$), so [F3] gives that $N^\lambda$ is a standard Brownian motion and, in particular, $E[e^{i\mu(N^\lambda_t-N^\lambda_s)}\mid\mathcal F_s]=e^{-\mu^2(t-s)/2}$ for every real $\mu$. Substituting $\mu=|\lambda|$ gives $E[e^{i\lambda\cdot(M_t-M_s)}\mid\mathcal F_s]=e^{-(t-s)|\lambda|^2/2}$ almost surely for every $\lambda\ne0$; for $\lambda=0$ both sides are $1$. [F2, F3]

2.1 Conditional law of the vector increment: for each $A\in\mathcal F_s$ define the finite Borel measure $Q_A(\Gamma):=E[1_A1_{\{M_t-M_s\in\Gamma\}}]$ on $\mathbb R^d$; its Fourier transform is $\int e^{i\lambda\cdot x}Q_A(dx)=E[1_Ae^{i\lambda\cdot(M_t-M_s)}]=P(A)e^{-(t-s)|\lambda|^2/2}$ by step 1.2 and [F5], which is $P(A)$ times the Fourier transform of $N_d(0,(t-s)I_d)$ by [F4]. By multivariate Fourier uniqueness [F4], $Q_A=P(A)N_d(0,(t-s)I_d)$ for every $A\in\mathcal F_s$; in particular, with $A=\Omega$, the increment has law $N_d(0,(t-s)I_d)$, and with general $A$ the identity is exactly the independence of the increment from $\mathcal F_s$. [F4, F5, step 1.2]

3.1 Finite lists of increments: for $0=t_0<t_1<\cdots<t_n$ the increments $M_{t_j}-M_{t_{j-1}}$ are independent with laws $N_d(0,(t_j-t_{j-1})I_d)$. Induction on $n$: the case $n=1$ is step 2.1; given the claim for $n$ increments, the increment at $t_{n+1}$ has conditional law $N_d(0,(t_{n+1}-t_n)I_d)$ given $\mathcal F_{t_n}$ and is independent of $\mathcal F_{t_n}$ by step 2.1 applied with $s=t_n$, hence independent of the sigma-algebra generated by the earlier increments, and [F5] multiplies the joint law. [F5, step 2.1]

4.1 Conclusion and boundary cases: $M$ is adapted, continuous, starts at $0$ almost surely, and its finite-dimensional increment laws are those of a standard $d$-dimensional Brownian motion by step 3.1; this is precisely the defining increment condition, so $M$ is a standard $d$-dimensional Brownian motion with the stated filtration property. For $d=1$ the statement reduces to the scalar characterization [F3]; for $\lambda=0$ the linear combination is the zero process and the identity is trivial; the coordinate increments at $s=t$ are zero with law $N(0,0)$; the hypothesis $\delta_{ij}t$ excludes degenerate covariance matrices, and no independence of the coordinates is assumed in the proof — it is derived from the Fourier uniqueness step; and AC enters only through [F6]. [F3, F4, F6, step 3.1] ∎

## Source notes

Van der Vaart states the multivariate Lévy characterization as Exercise 6.5, derived from the scalar theorem. The proof above uses the Cramér--Wold style reduction through linear functionals and multivariate Fourier uniqueness, which is the standard route when the exercise is not proved in the source.
