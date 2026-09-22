---
id: thm-levy-characterization-of-brownian-motion
kind: theorem
title: "Levy characterization of Brownian motion"
status: draft
origin: pipeline
deps: [lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t, lem-normal-density-has-total-mass-one, def-continuous-time-adapted-process-and-martingale, def-continuous-time-filtration-and-all-pairs-martingale, def-quadratic-covariation-of-brownian-ito-processes, def-brownian-motion, def-elementary-predictable-brownian-integrand, def-standard-normal-and-normal-laws, thm-uniqueness-of-a-law-from-its-characteristic-function, def-conditional-expectation-as-an-ae-class, thm-tower-property-of-conditional-expectation, def-law-modification-and-indistinguishability-of-processes, def-continuity-real, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Theorem 6.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the Axiom of Choice. Let $(\Omega,\mathcal F,P)$ be a probability space
with a continuous-time filtration $(\mathcal F_t)_{t\ge0}$, and let $M$ be a
real continuous local martingale relative to $(\mathcal F_t)$ with $M_0=0$
almost surely and quadratic variation $[M]_t=t$ for every $t\ge0$ in the sense
of [[def-quadratic-covariation-of-brownian-ito-processes]]. Then $M$ is a
standard Brownian motion [[def-brownian-motion]] and satisfies the standing
hypothesis (H) of [[def-elementary-predictable-brownian-integrand]] relative to
$(\mathcal F_t)$: $M$ is adapted, has continuous paths, and for all $0\le s<t$
the increment $M_t-M_s$ is independent of $\mathcal F_s$ with law $N(0,t-s)$.

## Facts & Assumptions

**Given:** AC, a filtered probability space with continuous-time filtration $(\mathcal F_t)$, a real continuous local martingale $M$ with $M_0=0$ almost surely and $[M]_t=t$ for all $t$, and times $0\le s<t$.
 
[F1] **Characteristic exponential.** The lemma [[lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t]] gives, for every real $\theta$, the conditional identity $E[e^{i\theta(M_t-M_s)}\mid\mathcal F_s]=e^{-\theta^2(t-s)/2}$ almost surely, together with the complex martingale property of $\exp(i\theta M_t+\theta^2t/2)$. [[lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t]] [[def-continuous-time-adapted-process-and-martingale]]
 
[F2] **Gaussian law and its characteristic function.** For $\sigma^2>0$ the law $N(0,\sigma^2)$ is defined as the pushforward of $N(0,1)$ under $x\mapsto\sigma x$, and its characteristic function is $\phi(\theta)=e^{-\theta^2\sigma^2/2}$: the computation is the direct Gaussian density computation $\int e^{i\theta x}(2\pi\sigma^2)^{-1/2}e^{-x^2/(2\sigma^2)}dx=e^{-\theta^2\sigma^2/2}$; the value $\theta=0$ gives $1$. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]
 
[F3] **Uniqueness from characteristic functions.** Two Borel probability laws on $\mathbb R$ with equal characteristic functions are equal. [[thm-uniqueness-of-a-law-from-its-characteristic-function]]
 
[F4] **Conditional expectations and test events.** Conditional expectations are unique almost-sure classes, and for $A\in\mathcal F_s$ the identity $E[1_AX\mid\mathcal F_s]=1_AE[X\mid\mathcal F_s]$ holds; the tower property gives $E[1_AE[X\mid\mathcal F_s]]=E[1_AX]$. [[def-conditional-expectation-as-an-ae-class]] [[thm-tower-property-of-conditional-expectation]]
 
[F5] **AC bookkeeping.** Choice is declared for the conditional-expectation interface. [[def-axiom-of-choice]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 The conditional law of the increment is $N(0,t-s)$: by [F1], $E[e^{i\theta(M_t-M_s)}\mid\mathcal F_s]=e^{-\theta^2(t-s)/2}$ for every real $\theta$; for each $A\in\mathcal F_s$, [F4] gives $E[1_Ae^{i\theta(M_t-M_s)}]=E[1_A]e^{-\theta^2(t-s)/2}$. Let $Q_A(\Gamma):=E[1_A1_{\{M_t-M_s\in\Gamma\}}]$ for Borel $\Gamma$, a finite measure of total mass $P(A)$; its Fourier transform is $Q_A$'s transform $E[1_Ae^{i\theta(M_t-M_s)}]=P(A)\phi_{t-s}(\theta)$ with $\phi_{t-s}$ the characteristic function of $N(0,t-s)$ by [F2]. Since $Q_A$ and $P(A)N(0,t-s)(\cdot)$ are finite Borel measures with equal Fourier transforms, [F3] applied after normalization (or to the differences) gives $Q_A(\Gamma)=P(A)N(0,t-s)(\Gamma)$ for all Borel $\Gamma$. [F2, F3, F4]
 
2.1 Independence: taking $A=\Omega$ in step 1.1 gives the marginal law $P(M_t-M_s\in\Gamma)=N(0,t-s)(\Gamma)$. For general $A\in\mathcal F_s$ and Borel $\Gamma$, step 1.1 therefore gives $E[1_A1_{\{M_t-M_s\in\Gamma\}}]=P(A)P(M_t-M_s\in\Gamma)$, which is exactly the independence of $M_t-M_s$ from $\mathcal F_s$, together with the stated law. [F3, step 1.1]
 
3.1 Finite lists of increments: for $0=t_0<t_1<\cdots<t_n$ the increments $M_{t_j}-M_{t_{j-1}}$ are independent with laws $N(0,t_j-t_{j-1})$. Induction on $n$: for $n=1$ this is step 2.1; given the claim for $n$ increments, the conditional law of the increment at $t_{n+1}$ given $\mathcal F_{t_n}$ is $N(0,t_{n+1}-t_n)$ by step 2.1 and is independent of $\mathcal F_{t_n}$, hence independent of the sigma-algebra generated by the previous increments (which is contained in $\mathcal F_{t_n}$), and the tower property [F4] multiplies the joint law. [F4, step 2.1]
 
4.1 Conclusion and boundary cases: $M$ is adapted, has continuous paths and $M_0=0$ almost surely, and steps 2.1 and 3.1 verify clauses 2 and 3 of the definition of a standard Brownian motion and the increment condition (H) relative to $(\mathcal F_t)$; hence $M$ is a standard Brownian motion with the stated filtration property. At $s=t$ the increment is $0$ with law $N(0,0)$ and independence is trivial; at $s=0$ the identity gives the law of $M_t$; for $\theta=0$ the conditional identity is the trivial constant-$1$ identity; if the clock were $c\,t$ with $c>0$, rescaling would give the Gaussian factor $e^{-c\theta^2(t-s)/2}$ and the same argument with variance $c(t-s)$; a non-continuous local martingale is not covered, since continuity is used both from the lemma and in the definition of Brownian motion; and AC enters only through [F5]. [F1, F5, step 3.1] ∎

## Source notes

Van der Vaart, Theorem 6.1, characterizes Brownian motion by the characteristic exponential of a continuous local martingale with quadratic variation $t$. The conditional-law argument of steps 1.1--2.1 is the standard characteristic-function uniqueness route; the conditional expectation is used only through event-testing, so no regular conditional distribution is introduced.
