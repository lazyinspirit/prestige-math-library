---
id: lem-square-integrable-markov-transition-conditional-expectation
kind: lemma
title: Kernel conditional expectations for square-integrable Markov observables
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-conditional-expectation-as-an-ae-class
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-measure-kernel-and-probability-kernel
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-chapman-kolmogorov-equations
  - thm-conditional-jensen-inequality
  - thm-conditional-monotone-convergence
  - thm-holder-inequality-for-integrals
  - thm-measurability-of-integration-against-a-kernel
  - thm-monotone-convergence-for-the-integral
  - thm-taking-out-what-is-known
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, §2"
      url: "https://arxiv.org/pdf/math/0409112"
    - title: "Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes, §§2.2 and 4.8"
      url: "https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf"
verification:
  precheck: pass
axiom_use: "AC is used only for the conditional-expectation classes in the Markov-chain definition and cited conditional-expectation results."
---

## Statement

Assume AC. Let $(X_k)_{k\ge0}$ be a stationary time-homogeneous Markov chain
with probability kernel $P$, invariant law $\pi$, and natural filtration
$\mathcal F_k=\sigma(X_0,\ldots,X_k)$. Let $g\in L^2(\pi)$ ([[def-l-p-space-as-a-quotient-by-null-functions]]) and fix a finite real measurable representative, also denoted by $g$. Define
$Pg(x)=\int g(y)P(x,dy)$ and $P(g^2)(x)=\int g(y)^2P(x,dy)$ on the
$\pi$-full measurable set where the respective integrals are finite, and set
these functions to zero on the exceptional set. Then, for each $k\ge0$,
$$\mathbb E[g(X_{k+1})\mid\mathcal F_k]=Pg(X_k).$$
$$\mathbb E[g(X_{k+1})^2\mid\mathcal F_k]=P(g^2)(X_k)\quad\text{a.s.}$$
Consequently, if $D_{k+1}=g(X_{k+1})-Pg(X_k)$, then $(D_{k+1})$ is a square-integrable martingale-difference sequence and
$$\mathbb E[D_{k+1}^2\mid\mathcal F_k]=P(g^2)(X_k)-(Pg(X_k))^2\quad\text{a.s.}$$

## Facts & Assumptions

**Given:** AC, a stationary chain $X$ with kernel $P$ and invariant law $\pi$,
its natural filtration, and a real measurable representative $g$ with $\pi(g^2)<\infty$.

[A1] AC is the choice principle used by the library's conditional-expectation
class convention. ([[def-axiom-of-choice]])

[F1] For a bounded measurable $h$ and a $P$-chain,
$\mathbb E[h(X_{m+n})\mid\mathcal F_m]=P^nh(X_m)$; in particular, at $n=1$
the conditional mean is the kernel integral. ([[thm-chapman-kolmogorov-equations]])

[F2] Increasing nonnegative inputs have increasing conditional-expectation
versions converging almost surely to the conditional expectation of their
limit. ([[thm-conditional-monotone-convergence]])

[F3] Invariance is the event identity $\int P(x,A)\,\pi(dx)=\pi(A)$ for every
measurable $A$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F4] Nonnegative increasing functions pass through an integral by monotone
convergence. ([[thm-monotone-convergence-for-the-integral]])

[F5] Kernel integration of a nonnegative product-measurable function is
measurable, with infinity permitted. ([[thm-measurability-of-integration-against-a-kernel]])

[F6] Conditional expectation is linear and preserves order. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F7] Conditional Jensen gives
$|\mathbb E[Z\mid\mathcal G]|^2\le\mathbb E[|Z|^2\mid\mathcal G]$
for square-integrable $Z$. ([[thm-conditional-jensen-inequality]])

[F8] On a probability space, Hölder gives
$\pi(|g|)\le\pi(g^2)^{1/2}<\infty$. ([[thm-holder-inequality-for-integrals]])

[F9] An integrable $\mathcal F_k$-measurable factor can be taken out of a
conditional expectation when the products are integrable.
([[thm-taking-out-what-is-known]])

[F10] Products of square-integrable random variables are integrable by
Hölder's inequality. ([[thm-holder-inequality-for-integrals]])

## Proof
1.1 For bounded measurable $h$, [F1] with $n=1$ gives $\mathbb E[h(X_{k+1})\mid\mathcal F_k]=Ph(X_k)$. Kernel measurability [F5] makes the right side measurable. [A1, F1, F5, given]

2.1 Write $g=g^+-g^-$. By [F8], both parts are integrable. For $N\ge1$ let $g_N^\pm=g^\pm\wedge N$. These functions are bounded and increase to $g^\pm$. Step 1.1 gives the conditional kernel identity for each $g_N^\pm$; [F2] makes the conditional expectations increase to $\mathbb E[g^\pm(X_{k+1})\mid\mathcal F_k]$, while [F4] makes $Pg_N^\pm(X_k)\uparrow Pg^\pm(X_k)$. Invariance [F3], first for nonnegative simple functions and then by [F4], gives $\mathbb E[Pg^\pm(X_k)]=\pi(g^\pm)<\infty$; hence both limits are finite almost surely. Subtracting the two finite identities using [F6] proves $\mathbb E[g(X_{k+1})\mid\mathcal F_k]=Pg(X_k)$. [F2, F3, F4, F6, F8, step 1.1]

2.2 Apply the same argument to the nonnegative integrable function $g^2$: the truncations $g^2\wedge N$ increase to $g^2$, and invariance gives $\mathbb E[P(g^2)(X_k)]=\pi(g^2)<\infty$. Thus $\mathbb E[g(X_{k+1})^2\mid\mathcal F_k]=P(g^2)(X_k)$. These identities do not depend on the chosen representative: if two representatives differ on a measurable $\pi$-null set $A$, invariance gives $\pi(P1_A)=0$, hence $P(x,A)=0$ for $\pi$-almost every $x$; their kernel integrals agree there, and their evaluations at each $X_k$ agree almost surely. [F2, F3, F4, step 1.1]

3.1 By [F7] and step 2.2, $(Pg(X_k))^2\le P(g^2)(X_k)$ almost surely, so stationarity and [F3] imply $\mathbb E[(Pg(X_k))^2]\le\pi(g^2)$; therefore $D_{k+1}\in L^2$. Step 2.1, the preceding square-integrability bound, conditional linearity and [F9] for the $\mathcal F_k$-measurable factor $Pg(X_k)$ give $\mathbb E[D_{k+1}\mid\mathcal F_k]=0$. The product $g(X_{k+1})Pg(X_k)$ is integrable by the two $L^2$ bounds and [F10], so [F9] also gives its conditional expectation as $(Pg(X_k))^2$. Expanding the square and using step 2.2 now yields $\mathbb E[D_{k+1}^2\mid\mathcal F_k]=P(g^2)(X_k)-(Pg(X_k))^2$. Thus the sequence is a square-integrable martingale-difference sequence. [F3, F6, F7, F9, F10, step 2.1, step 2.2] ∎

## Source notes

Jones §2 defines the kernel operator $Pg$ and states the conditional
one-step kernel convention. The bounded-to-square-integrable extension and
the exceptional-set version are proved here; no pointwise identity is
asserted outside a $\pi$-full set.
