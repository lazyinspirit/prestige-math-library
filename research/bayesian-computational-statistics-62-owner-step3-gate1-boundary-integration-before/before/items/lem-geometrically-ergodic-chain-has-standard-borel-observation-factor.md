---
dependency_level: 1
id: lem-geometrically-ergodic-chain-has-standard-borel-observation-factor
kind: lemma
title: A geometrically ergodic chain has an all-start standard-Borel observation factor
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-iterated-transition-kernels
  - lem-countably-generated-kernel-stable-sub-sigma-field
  - thm-standard-borel-spaces-admit-bimeasurable-real-codings
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - lem-real-line-is-standard-borel
  - thm-doob-dynkin-lemma
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - thm-dynkin-pi-lambda
  - thm-markov-property-for-bounded-future-path-functionals
  - thm-measurability-of-integration-against-a-kernel
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - thm-monotone-convergence-for-the-integral
  - cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Meyn and Tweedie, Markov Chains and Stochastic Stability, measurable kernels and geometric ergodicity; observation-factor reduction supplied locally
      url: https://probability.ca/MT/BOOK.pdf
axiom_use: AC is inherited from real coding, Doob-Dynkin factorization, standard-Borel disintegration and probability-space extensions.
---

## Statement

Assume AC. Let $P$ be a probability kernel on an arbitrary measurable space $(X,\mathcal F)$, with invariant probability $\pi$, finite measurable $M:X\to[0,\infty)$ and $0<r<1$ satisfying
$$\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\le M(x)r^n\quad(x\in X,\ n\ge1).$$
Let $f:X\to\mathbb R$ be finite measurable. For each specified initial law $\mu$, there are a nonempty standard-Borel space $S$, a probability kernel $T$ on $S$, an invariant probability $\widehat\pi$, an initial probability $\widehat\mu$, and finite measurable functions $\varphi:S\to\mathbb R$ and $\widehat M:S\to[0,\infty)$ such that
$$\|T^n(z,\cdot)-\widehat\pi\|_{\mathrm{TV}}\le\widehat M(z)r^n\quad(z\in S,\ n\ge1).$$
The complete observation path $(f(X_n))_{n\ge0}$ of a $\mu$-started $P$-chain has the same law as $(\varphi(Y_n))_{n\ge0}$ of a $\widehat\mu$-started $T$-chain. The corresponding stationary observation paths also have the same law, and $\widehat\pi(|\varphi|^a)=\pi(|f|^a)$ for every $a>0$, with infinity allowed. The factor may depend on $\mu$.

Moreover, any joint law of that observation path with a random element of a standard-Borel space can be lifted to an extension preserving the entire original chain probability space and process.

## Facts & Assumptions

**Given:** AC and the objects and geometric bound in the Statement.

[A1] [[def-axiom-of-choice]]: AC supplies the inherited coding, factorization, disintegration and extension conventions.

[F1] [[lem-countably-generated-kernel-stable-sub-sigma-field]]: a real observable lies in a countably generated kernel-stable sub-sigma-field, with restricted iterates and invariant law.

[F2] [[thm-standard-borel-spaces-admit-bimeasurable-real-codings]], [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]], and [[lem-real-line-is-standard-borel]]: real finite tuples and standard-Borel spaces have Borel real codings.

[F3] [[thm-doob-dynkin-lemma]]: a real or extended-real function measurable for the sigma-field of a real code factors through a Borel function of that code.

[F4] [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]: standard-Borel joint laws have measurable conditional probability kernels, unique outside a single null set.

[F5] [[thm-dynkin-pi-lambda]]: probability measures agreeing on a generating algebra agree everywhere.

[F6] [[thm-markov-property-for-bounded-future-path-functionals]]: the original Markov conditional identities hold, and bounded future-observation expectations are measurable.

[F7] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: supplied measurable probability kernels extend an initial probability space while preserving its marginal.

[F8] [[thm-monotone-convergence-for-the-integral]] and [[thm-measurability-of-integration-against-a-kernel]]: nonnegative limits and probability-kernel integrals have their usual measurability and integral identities.

[F9] [[def-standard-borel-space]] and [[cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish]]: Borel subspaces of Polish presentations are standard Borel, and countable products of Polish spaces are Polish under the assumed choice convention.

[F10] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]] and [[def-iterated-transition-kernels]]: invariance is $\pi P=\pi$, and iterates are successive kernel integrations.

## Proof

**Given:** The hypotheses in the Statement and AC [A1].

1.1 Define $\lambda=\tfrac12\pi+\tfrac12\sum_{k\ge0}2^{-k-1}\mu P^k.$ This is a probability by [F8], $\pi,\mu\ll\lambda$, and $\lambda P\ll\lambda$: if $\lambda(A)=0$, then $\pi(A)=0$ and $\mu P^k(A)=0$ for every $k$, which also makes $\lambda P(A)=0$. Thus $\lambda P^j\ll\lambda$ for every $j$. Apply [F2] to code the pair $(f,M)$ into one real observable, and apply [F1] to it. The resulting countably generated $\mathcal G\subseteq\mathcal F$ is kernel-stable and contains both $f$ and $M$, since the coding has a Borel inverse. [A1, F1, F2, F8, F10, construct, given]

2.1 Enumerate generators $A_j$ of $\mathcal G$ and set $c(x)=\sum_{j\ge1}2\cdot3^{-j}1_{A_j}(x)$, taking values in the closed Cantor subset $C$ of $[0,1]$. Its coordinate digits recover every $A_j$, so $\sigma(c)=\mathcal G$. The target $C$ is standard Borel by [F9]; no Borel-image assertion about $c(X)$ is needed. By [F3], write $f=\varphi_0\circ c$ and $M=m_0\circ c$ for Borel extended-real functions on $C$. Put $\lambda_c=c_*\lambda$, $\pi_c=c_*\pi$ and $\mu_c=c_*\mu$. [A1, F3, F9, step 1.1, construct]

3.1 Push the probability $\lambda(dx)P(x,dy)$ to $(c(x),c(y))\in C^2$ and disintegrate by [F4], obtaining a Borel kernel $T:C\to C$. For each $B$ in a fixed countable generating algebra of $C$, kernel stability and [F3] factor $P(x,c^{-1}B)$ through $c(x)$. Its value is the conditional mean of $1_B(c(X_1))$ given $c(X_0)$ under this reference joint law. Hence $T(c(x),B)=P(x,c^{-1}B)$ for $\lambda$-almost every $x$. Intersect over the countable algebra and apply [F5] to obtain equality of these probability measures simultaneously on every Borel $B$, on one $\lambda$-full set. In particular $\lambda_cT=c_*(\lambda P)\ll\lambda_c$, and $\pi_cT=\pi_c$ because $\pi\ll\lambda$ and $\pi P=\pi$. [A1, F3, F4, F5, F7, F8, F10, step 1.1, step 2.1]

4.1 Iterating that kernel equality gives $T^n(c(x),\cdot)=c_*P^n(x,\cdot)$ for $\lambda$-almost every $x$, simultaneously for all $n\ge0$. At the induction step, $P(x,\cdot)$ avoids the preceding $\lambda$-null exceptional set for $\lambda$-almost every $x$, since $\lambda P\ll\lambda$; integration of a nonnegative Borel function of $c$ agrees under the two one-step measures by simple approximation and [F8]. The geometric hypothesis therefore implies $\|T^n(z,\cdot)-\pi_c\|_{\mathrm{TV}}\le m_0(z)r^n$ for $\lambda_c$-almost every $z$, simultaneously for $n\ge1$. [F8, F10, step 1.1, step 3.1, given]

5.1 On $C$ the total-variation supremum can be taken over its fixed countable generating algebra. Indeed, for any two probabilities, every Borel set is approximable in symmetric-difference measure by that algebra under their finite sum: the approximable sets form a sigma-field, using complements and first approximating a countable union by a finite union. Its probability difference is approximated too. Thus the supremum over the algebra equals the full supremum and is measurable as a function of the starting point. Let $B_0$ be the Borel set where all the bounds in step 4.1 hold and $\varphi_0,m_0$ are finite with $m_0\ge0$. It is $\lambda_c$-full by step 2.1 and the finiteness of $f,M$. Define $B_{j+1}=B_j\cap\{z:T(z,B_j)=1\}$ and $S=\bigcap_{j\ge0}B_j$. Absolute continuity $\lambda_cT\ll\lambda_c$ makes every $B_j$ full. If $z\in S$, continuity from above gives $T(z,S)=1$. Thus $S$ is nonempty, Borel and absorbing. [F8, F9, step 2.1, step 3.1, step 4.1, construct]

6.1 Restrict $T$ to $S$, and set $\widehat\pi=\pi_c|_S$, $\widehat\mu=\mu_c|_S$, $\varphi=\varphi_0|_S$ and $\widehat M=m_0|_S$. These are probabilities and finite functions because $\pi_c,\mu_c\ll\lambda_c$. Absorption preserves $\widehat\pi T=\widehat\pi$. By the definition of $B_0$ the geometric bound now holds for every state in $S$, with the original rate $r$. Its total variation on $S$ is the same as on $C$ for measures supported on $S$. [F9, F10, step 3.1, step 5.1, construct]

7.1 For an original chain with initial law $\mu$, every $X_k$ has law $\mu P^k\ll\lambda$. Thus step 3.1 and [F6], followed by conditioning on the coded past, show that $c(X_k)$ is a $T$-chain. Countably many time and algebra tests suffice; [F5] and bounded approximation extend them to every bounded Borel test. The code chain remains in $S$ almost surely and $f(X_k)=\varphi(c(X_k))$ simultaneously for every $k$. The same argument applies with initial law $\pi$. This proves the complete initial and stationary observation-path equalities and, by pushforward integration, every stated stationary moment identity. [F3, F5, F6, F8, step 1.1, step 2.1, step 3.1, step 6.1]

8.1 A countable path space over a standard-Borel space is standard Borel: code its coordinates by [F2] into a Borel subset $D$ of $[0,1]$; then $D^{\mathbb N_0}$ is Borel in the Polish cube $[0,1]^{\mathbb N_0}$ by a countable intersection of coordinate tests, using [F9]. In particular the real observation-path space is standard Borel. Disintegrate any specified joint law of this path and a standard-Borel auxiliary random element conditional on the path by [F4]. Evaluate that kernel at the actual original observation path and use [F7] to extend the original probability space. Its original marginal is unchanged, and the observation/auxiliary joint law is exactly the specified law. This proves the final lifting assertion without any conditional kernel on the original arbitrary state space. [A1, F2, F4, F7, F9, step 7.1] ∎
