---
id: thm-finite-description-compression-bound
kind: theorem
title: "Finite-description compression bound for trained classifiers"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-margin-preserving-compression
  - def-measurable-space
  - def-measurable-function-between-measurable-spaces
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - def-identically-distributed-and-iid-random-variables
  - lem-probability-measure-basic-identities
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - cor-exponential-reciprocal-and-positivity
  - lem-bounded-variable-hoeffding-mgf
  - lem-measurable-functions-preserve-independence
  - thm-factorization-of-expectations-for-independent-variables
  - cor-markov-inequality-for-random-variables
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-algebra-of-continuous-functions
  - thm-composition-of-continuous-functions
  - def-borel-sigma-algebra
  - def-law-or-distribution-of-a-random-element
  - thm-change-of-variables-for-expectation
  - def-real-exponential-function-and-e
  - cor-expectation-of-an-indicator-is-probability
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is assumed or used."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Sanjeev Arora, Rong Ge, Behnam Neyshabur, and Yi Zhang, Stronger Generalization Bounds for Deep Nets via a Compression Approach, §2, Theorem 2.1"
      url: "https://proceedings.mlr.press/v80/arora18b/arora18b.pdf"
    - title: "Sanjeev Arora, Rong Ge, Behnam Neyshabur, and Yi Zhang, supplementary material, Appendix A.1"
      url: "https://proceedings.mlr.press/v80/arora18b/arora18b-supp.pdf"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 4 §4.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Statement

The following corrected finite-description form of Arora, Ge, Neyshabur, and Zhang's compression bound applies to a measurable sample-dependent score classifier. Let $(\mathcal X,\Sigma_X)$ be a nonempty measurable space, let $\mathcal Y=\{1,\ldots,K\}$ have the discrete sigma-algebra with $K\ge2$, put $\Sigma_Z=\Sigma_X\otimes2^{\mathcal Y}$ on $Z=\mathcal X\times\mathcal Y$, and let $P$ be a probability law on $(Z,\Sigma_Z)$. Let $m\ge1$ and draw $S=((X_1,Y_1),\ldots,(X_m,Y_m))$ independently and identically distributed (IID) with law $P$, with sample space $Z^m$ carrying $\Sigma_Z^{\otimes m}$. Fix integers $q\ge0$, $r\ge1$, a helper string $s$ independent of $S$, finite nonempty parameter sets $D_1,\ldots,D_q$ with $|D_j|\le r$, a nonempty code set $\mathcal A\subseteq\prod_{j=1}^qD_j$ (with the empty product a singleton when $q=0$), a distortion tolerance $\epsilon>0$, and a confidence level $0<\delta<1$. For any score map $u$ with measurable coordinates, write $h_u(x)$ for the classifier that chooses the least index attaining the largest coordinate of $u(x)$. For each $a\in\mathcal A$, let $g_{s,a}:\mathcal X\to\mathbb R^K$ have measurable coordinates and put $h_{s,a}:=h_{g_{s,a}}$. Equip $\mathbb R^K$ with its Borel sigma-algebra. Let $F:Z^m\times\mathcal X\to\mathbb R^K$ be measurable for $\Sigma_Z^{\otimes m}\otimes\Sigma_X$, write $f_S(x)=F(S,x)$, and let $\alpha:Z^m\to\mathcal A$ be measurable for the discrete sigma-algebra on $\mathcal A$. Suppose that, for $P^m$-almost every $S$,
$$\max_{k\in\mathcal Y}|f_S(X_i)_k-g_{s,\alpha(S)}(X_i)_k|\le\epsilon\qquad(1\le i\le m)$$
With natural logarithms, define
$$R_P(h):=P\{(x,y):h(x)\ne y\},\qquad \widehat R_S(h):=\frac1m\sum_{i=1}^m\mathbf1\{h(X_i)\ne Y_i\},$$
$$M_{f_S}(x,y):=f_S(x)_y-\max_{j\ne y}f_S(x)_j,\qquad \widehat L_\gamma(f_S;S):=\frac1m\sum_{i=1}^m\mathbf1\{M_{f_S}(X_i,Y_i)\le\gamma\},\qquad \gamma\ge0.$$
Then, with probability at least $1-\delta$ over $S$,
$$R_P\bigl(h_{s,\alpha(S)}\bigr)\le\widehat L_{2\epsilon}(f_S;S)+\sqrt{\frac{q\log r+\log(1/\delta)}{2m}}.$$
In particular, the coordinatewise distortion $\epsilon$ only guarantees preservation of an observed label when its original score margin is strictly greater than $2\epsilon$. The conclusion bounds the selected compressed classifier $h_{s,\alpha(S)}$; it does not bound the original classifier $h_{f_S}$ unless a separate all-domain loss-preservation argument is supplied. The theorem assumes a suitable fixed-helper compressor and makes no claim that a network compression construction exists or that layer-stability or cushion hypotheses hold.

## Statement references

[[def-margin-preserving-compression]]: defines the finite codebook, fixed helper string, score distortion, least-index tie rule, margin, and empirical margin loss.

[[def-measurable-space]]: a measurable space is a set equipped with a sigma-algebra.

[[def-measurable-function-between-measurable-spaces]]: measurability is the preimage condition.

[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: product sigma-algebras are generated by measurable rectangles and finite products are formed recursively.

[[thm-arithmetic-and-lattice-operations-preserve-measurability]]: finite arithmetic operations, absolute values, and maxima preserve measurability of real-valued functions.

[[def-identically-distributed-and-iid-random-variables]]: IID observations are mutually independent and share a common law.

[[lem-probability-measure-basic-identities]]: finite unions of events have probability at most the sum of their probabilities.

[[lem-bounded-variable-hoeffding-mgf]]: for $0\le Y\le1$, $\mathbb E\exp(\lambda(Y-\mathbb EY))\le\exp(\lambda^2/8)$ for every real $\lambda$; its proof is choice-free.

[[lem-measurable-functions-preserve-independence]]: applying measurable coordinate maps to independent random elements preserves independence.

[[thm-factorization-of-expectations-for-independent-variables]]: expectations of finite products of nonnegative Borel functions of independent real variables factor.

[[cor-markov-inequality-for-random-variables]]: for a nonnegative random variable $X$ and $a>0$, $\mathbb P(X\ge a)\le\mathbb E[X]/a$.

[[thm-exponential-addition-formula]]: $\exp(x+y)=\exp(x)\exp(y)$.

[[thm-exponential-is-strictly-increasing]]: the exponential is continuous and strictly increasing.

[[thm-algebra-of-continuous-functions]]: sums, scalar multiples, constants, and the identity function are continuous.

[[thm-composition-of-continuous-functions]]: a composite of continuous real functions is continuous.

[[def-borel-sigma-algebra]]: the Borel sigma-algebra is generated by open sets.

[[def-law-or-distribution-of-a-random-element]]: the law of a random element is its pushforward probability measure.

[[thm-change-of-variables-for-expectation]]: $\mathbb E[g(X)]=\int g\,dP_X$ for a nonnegative measurable $g$ and a random element $X$ with law $P_X$.

[[def-real-exponential-function-and-e]]: defines the real exponential function used in the MGF and Markov argument.

[[cor-expectation-of-an-indicator-is-probability]]: the expectation of the indicator of an event equals its probability.

[[def-natural-logarithm]]: defines $\log$ as the inverse of the exponential on positive reals.

[[thm-natural-logarithm-laws]]: supplies the product, quotient, reciprocal, and monotonicity laws for $\log$.

[[cor-exponential-reciprocal-and-positivity]]: $\exp(-x)=1/\exp(x)>0$ for every real $x$.

[Arora et al., §2, Theorem 2.1 and Remarks 1–4](https://proceedings.mlr.press/v80/arora18b/arora18b.pdf): fixes the finite code family and helper-string model, and explicitly states that its conclusion concerns the compressed classifier.

[Arora et al., supplementary material, Appendix A.1](https://proceedings.mlr.press/v80/arora18b/arora18b-supp.pdf): gives the finite-code Hoeffding/union-bound route; the local proof corrects its margin step.

[Shalev-Shwartz and Ben-David, Chapter 4 §4.2](https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf): independently proves finite-class bounded-loss uniform convergence by Hoeffding's inequality and a union bound.

## Facts & Assumptions

**Given:** The measurable spaces and law $P$, an IID sample of size $m\ge1$, a fixed helper string and finite nonempty codebook with at most $r$ values in each of $q$ parameter positions, measurable training and compression maps, distortion $\epsilon>0$ on $P^m$-almost every sample, and $0<\delta<1$.

[F1] For a finite family of events $E_1,\ldots,E_n$, $P(\bigcup_{j=1}^nE_j)\le\sum_{j=1}^nP(E_j)$. [[lem-probability-measure-basic-identities]]

[F2] The helper string, codebook, and decoders are fixed independently of $S$, with at most $r^q$ codes. [[def-margin-preserving-compression]]

[F3] The measurable code selector may depend on $S$ and the coordinatewise distortion condition applies at every observed input on each successful sample. [[def-margin-preserving-compression]]

[F4] The natural logarithm is increasing and satisfies $\log(xy)=\log x+\log y$, $\log(x/y)=\log x-\log y$, and $\log 1=0$ for positive $x,y$. [[thm-natural-logarithm-laws]]

[F5] $\exp(\log x)=x$ for $x>0$. [[def-natural-logarithm]]

[F6] $\exp(-x)=1/\exp(x)>0$ for every real $x$. [[cor-exponential-reciprocal-and-positivity]]

[F7] IID observations are mutually independent and share the same law. [[def-identically-distributed-and-iid-random-variables]]

[F8] The sample space and finite products carry sigma-algebras generated by measurable rectangles. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F9] Measurability is defined by measurable preimages; compositions are measurable by successive preimages. [[def-measurable-function-between-measurable-spaces]]

[F10] Finite sums, scalar multiples, absolute values, and finite maxima of measurable real-valued functions are measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F11] If $U$ is measurable and $0\le U\le1$ almost surely, then $\mathbb E\exp(\lambda(U-\mathbb EU))\le\exp(\lambda^2/8)$ for every real $\lambda$. [[lem-bounded-variable-hoeffding-mgf]]

[F12] Measurable coordinatewise functions of independent random elements remain independent. [[lem-measurable-functions-preserve-independence]]

[F13] For independent real random variables and nonnegative Borel functions $g_i$, the expectation of their finite product factors into the product of expectations. [[thm-factorization-of-expectations-for-independent-variables]]

[F14] If $V$ is a nonnegative random variable and $a>0$, then $\mathbb P(V\ge a)\le\mathbb E[V]/a$. [[cor-markov-inequality-for-random-variables]]

[F15] $\exp(x+y)=\exp(x)\exp(y)$ for real $x,y$. [[thm-exponential-addition-formula]]

[F16] The exponential is continuous and strictly increasing on $\mathbb R$. [[thm-exponential-is-strictly-increasing]]

[F17] The law of a random element is its pushforward probability measure. [[def-law-or-distribution-of-a-random-element]]

[F18] For a random element with law $P$ and a nonnegative measurable $g$, $\mathbb E[g(X)]=\int g\,dP$. [[thm-change-of-variables-for-expectation]]

[F19] The real exponential function is the power-series function denoted by $\exp$. [[def-real-exponential-function-and-e]]

[F20] Sums, scalar multiples, constants, and the identity function are continuous. [[thm-algebra-of-continuous-functions]]

[F21] The composite of continuous real functions is continuous. [[thm-composition-of-continuous-functions]]

[F22] The Borel sigma-algebra is generated by open subsets of $\mathbb R$. [[def-borel-sigma-algebra]]

[F23] The expectation of an indicator of a measurable error event is its probability, so $\int\ell_a\,dP=R_P(h_{s,a})$. [[cor-expectation-of-an-indicator-is-probability]]

[A1] The bounded-variable MGF bound uses finite product and scalar integral arguments and does not assume the Axiom of Choice. [[lem-bounded-variable-hoeffding-mgf]]

## Proof
1.1 For each sample coordinate $i$, the projections $S\mapsto(X_i,Y_i)$ and $S\mapsto X_i$ are measurable by [F8]. The map $T_i:S\mapsto(S,X_i)$ is measurable because the preimage of a measurable rectangle $B\times C$ is $B\cap\{S:X_i\in C\}$ and such rectangles generate the product sigma-algebra [F8]; composition with $F$ is measurable by [F9], so $S\mapsto f_S(X_i)$ is measurable. For each fixed $a$, $S\mapsto g_{s,a}(X_i)$ is measurable by [F9]. The selector $\alpha$ takes values in the finite set $\mathcal A$ by [F2], so the preimage of a Borel set under $S\mapsto g_{s,\alpha(S)}(X_i)$ is a finite union of intersections of measurable selector fibers and fixed-code preimages. By [F10], each coordinatewise distortion comparison is measurable, and the finite intersection over coordinates and sample positions makes the compression-success event measurable. The zero-one loss $\ell_a(x,y)=\mathbf1\{h_{s,a}(x)\ne y\}$ is measurable by the verified measurability properties in [F3]; composing it with the sample projections and taking a finite average shows that each $\widehat R_S(h_{s,a})$ is measurable. Since $\mathcal A$ is finite and $\alpha$ measurable, both selected risk maps $S\mapsto R_P(h_{s,\alpha(S)})$ and $S\mapsto\widehat R_S(h_{s,\alpha(S)})$ are measurable. The margins $M_{f_S}(X_i,Y_i)$ are measurable by [F10], hence so is their finite threshold average $\widehat L_{2\epsilon}(f_S;S)$. Thus every event in the Statement and proof is measurable. [given, F2, F3, F8, F9, F10, algebra]

1.2 On a sample satisfying the compression condition, if $M_{f_S}(X_i,Y_i)>2\epsilon$, then for each $j\ne Y_i$ the coordinatewise distortion bound [F3] gives $g_{s,\alpha(S)}(X_i)_{Y_i}-g_{s,\alpha(S)}(X_i)_j\ge f_S(X_i)_{Y_i}-f_S(X_i)_j-2\epsilon\ge M_{f_S}(X_i,Y_i)-2\epsilon>0$. Thus the decoded classifier predicts $Y_i$ at that observation. Each decoded training-error indicator is therefore at most $\mathbf1\{M_{f_S}(X_i,Y_i)\le2\epsilon\}$, and averaging gives $\widehat R_S(h_{s,\alpha(S)})\le\widehat L_{2\epsilon}(f_S;S)$. [given, F3, F10, algebra]

2.1 Fix $a\in\mathcal A$, write $Z_i=(X_i,Y_i)$ and $U_i=\ell_a(Z_i)$, and put $\mu=R_P(h_{s,a})=\int\ell_a\,dP$ by [F23]. Each $Z_i$ has law $P$ by [F7] and [F17], so [F18] gives $\mathbb E U_i=\mu$. The $U_i$ are independent by [F12], since $\ell_a$ is measurable by step 1.1. The function $x\mapsto\lambda(x-\mu)$ is continuous by [F20], and [F16] and [F21] make $g_\lambda(x):=\exp(\lambda(x-\mu))$ continuous. Its preimage of every open set is open; preimages preserve complements and countable unions, so [F22] makes preimages of all Borel sets Borel by [F9]. Thus $g_\lambda$ is a nonnegative Borel function. [given, F7, F9, F10, F12, F16, F17, F18, F19, F20, F21, F22, F23, step 1.1, algebra]

3.1 By finite-product factorization [F13], exponential addition [F15], and the bounded-variable MGF estimate [F11], $\mathbb E\exp\!\left(\lambda\sum_{i=1}^m(U_i-\mu)\right)=\prod_{i=1}^m\mathbb E\exp(\lambda(U_i-\mu))\le\exp(m\lambda^2/8)$ for every real $\lambda$. This finite MGF argument uses no choice principle by [A1]. [given, A1, F11, F13, F15, step 2.1, algebra]

4.1 For $t>0$, put $\lambda=-4t$. On $\{\sum_i(U_i-\mu)\le-mt\}$, strict increase of the exponential [F16] gives $\exp(\lambda\sum_i(U_i-\mu))\ge\exp(4mt^2)>0$ by [F6]. Markov's inequality [F14] and step 3.1 therefore give $P^m\{R_P(h_{s,a})-\widehat R_S(h_{s,a})\ge t\}\le\exp(m\lambda^2/8)/\exp(4mt^2)=\exp(-2mt^2)$. [given, F6, F14, F16, step 3.1, algebra]

5.1 Set $\tau=\sqrt{\log(r^q/\delta)/(2m)}$. Since $r^q\ge1$ and $0<\delta<1$, [F4] gives $\tau>0$. Applying step 4.1 to each fixed code at $t=\tau$ and using [F5]–[F6] gives failure probability at most $\exp(-2m\tau^2)=\exp(-\log(r^q/\delta))=\delta/r^q$. The union bound [F1] over at most $r^q$ codes by [F2] yields, with probability at least $1-\delta$, one event on which every $a\in\mathcal A$ satisfies $R_P(h_{s,a})\le\widehat R_S(h_{s,a})+\tau$. For $q=0$, $\log(r^q)=\log1=0$; for $q\ge1$, repeated use of the product law [F4] gives $\log(r^q)=q\log r$. The quotient law gives $\log(r^q/\delta)=q\log r+\log(1/\delta)$, so $\tau$ is the displayed complexity term. [given, F1, F2, F4, F5, F6, step 4.1, algebra]

6.1 The event from step 5.1 holds simultaneously for every fixed code, so it also holds for the sample-dependent choice $\alpha(S)$. The compression condition fails only on a $P^m$-null set. Intersecting the step 5.1 event with its full-measure success set and applying step 1.2 gives the stated risk inequality with probability at least $1-\delta$. [given, step 5.1, step 1.2] ∎
