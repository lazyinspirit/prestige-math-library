---
id: thm-vc-realizable-sample-complexity
kind: theorem
title: "Realizable sample complexity for finite-VC classes"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-vc-pac-learning-criterion
  - def-shattered-set-and-vc-dimension
  - def-growth-function
  - thm-sauer-shelah-growth-bound
  - def-population-and-empirical-risk
  - lem-population-and-empirical-risk-are-measurable
  - def-identically-distributed-and-iid-random-variables
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-independent-random-elements-have-product-joint-law
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-measurable-functions-preserve-independence
  - thm-factorization-of-expectations-for-independent-variables
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-markov-inequality-for-random-variables
  - lem-probability-measure-basic-identities
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - cor-exponential-reciprocal-and-positivity
  - lem-exponential-dominates-one-plus-x
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3, Exercise 3.30"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, Theorem 5 and Appendix B"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Statement

Let $(\mathcal X,\Sigma)$ be a nonempty measurable space, let $H$ be a nonempty class of measurable binary functions with finite VC dimension $d$, put $\mathcal Z=\mathcal X\times\{0,1\}$, and let $P$ be a probability law on $\mathcal Z$. Fix an integer $m\ge1$ and a map $A:\mathcal Z^m\to H$ for which $S\mapsto R_P(A(S))$ and $S\mapsto\widehat R_S(A(S))$ are measurable, where
$$R_P(h):=P\{(x,y):h(x)\ne y\},\qquad \widehat R_S(h):=\frac1m\sum_{i=1}^m\mathbf1\{h(X_i)\ne Y_i\}.$$
Suppose $P$ is realizable by $H$ and $A$ is consistent $P^m$-almost surely. For $0<\epsilon<1$, assume the events
$$E_{m,\epsilon}:=\{S\in\mathcal Z^m:\exists h\in H,\ R_P(h)>\epsilon,\ \widehat R_S(h)=0\}$$
and
$$B_{m,\epsilon}:=\{(S,S')\in\mathcal Z^m\times\mathcal Z^m:\exists h\in H,\ R_P(h)>\epsilon,\ \widehat R_S(h)=0,\ \widehat R_{S'}(h)\ge\epsilon/2\}$$
are measurable in their respective product sigma-algebras; this holds when $H$ is countable. For $0<\epsilon,\delta<1$ and $S\sim P^m$, if $d=0$ then $R_P(A(S))=0$ almost surely for every such rule. If $d\ge1$ and
$$m\ge\frac{64}{\epsilon}\left[d\log\!\left(\frac{64e}{\epsilon}\right)+\log\!\left(\frac4\delta\right)\right],$$
where $\log$ is natural and $e=\exp(1)$, then $\mathbb P\{R_P(A(S))\le\epsilon\}\ge1-\delta$. This is a conditional upper bound for consistent risk-measurable learners; it asserts no existence or computational-efficiency result.
## Statement references

[[def-vc-pac-learning-criterion]]: defines a realizable distribution and the realizable PAC event for possibly infinite classes, with the required risk measurability.

[Mohri et al., Chapter 3, Exercise 3.30](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): identifies the realizable VC upper-rate problem; the argument here supplies the complete finite-trace proof and explicit sample-size constants.

[Bartlett and Mendelson, Theorem 5 and Appendix B](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): independent classification-risk generalization context; that theorem is not used as a realizable sample-size proof.

## Facts & Assumptions

**Given:** A measurable binary class $H$ with finite VC dimension $d$, a law $P$ realized by some $h^*\in H$, a consistent risk-measurable rule $A$, $m\ge1$, and $0<\epsilon,\delta<1$.

[F1] Realizable PAC learning means that every law with a zero-risk member satisfies the stated high-probability risk event; consistency means $\widehat R_S(A(S))=0$. The definition makes no learner-existence claim. [[def-vc-pac-learning-criterion]]

[F2] A finite indexed tuple is shattered when all binary label vectors occur, and $d=\operatorname{VCdim}(H)$. [[def-shattered-set-and-vc-dimension]]

[F3] $\Pi_H(n)$ counts the largest number of traces on indexed $n$-tuples. [[def-growth-function]]

[F4] If $1\le d\le n$, then $\Pi_H(n)\le(en/d)^d$. [[thm-sauer-shelah-growth-bound]]

[F5] Population risk is the zero-one error probability and empirical risk is the average error indicator; for each fixed $h$ these are well-defined measurable quantities. [[def-population-and-empirical-risk]], [[lem-population-and-empirical-risk-are-measurable]]

[F6] IID coordinates have the finite product joint law; finite product probability measures exist, and Tonelli permits integration of the nonnegative event indicators over the two samples. [[def-identically-distributed-and-iid-random-variables]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-independent-random-elements-have-product-joint-law]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F7] Measurable functions of independent observations remain independent, and expectations of products of independent nonnegative variables factor. [[lem-measurable-functions-preserve-independence]], [[thm-factorization-of-expectations-for-independent-variables]]

[F8] The expectation of a finite sum of integrable indicators is the sum of their expectations. [[cor-expectation-linearity-monotonicity-and-modulus-bound]]

[F9] For a nonnegative random variable $W$ and $a>0$, $\mathbb P(W\ge a)\le\mathbb E[W]/a$. [[cor-markov-inequality-for-random-variables]]

[F10] A finite union of events has probability at most the sum of their probabilities. [[lem-probability-measure-basic-identities]]

[F11] The natural logarithm is increasing, satisfies the product law, and $\log x=\int_1^xdt/t$ for $x>0$. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]]

[F12] The nonnegative integral is monotone; on $[1,2]$, $1/t\ge1/2$, and on $[1,5/4]$, $[5/4,3/2]$, and $[3/2,2]$ it is respectively at most $1$, $4/5$, and $2/3$. Consequently $1/2\le\log2\le47/60<4/5$. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F13] $e=\exp(1)>0$, $\exp(a+b)=\exp(a)\exp(b)$, and $1+x\le\exp(x)$ for every real $x$. [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]], [[lem-exponential-dominates-one-plus-x]]

[A1] No Axiom of Choice is used: the sample partitions, trace patterns, and event unions in the proof are finite, and existential witnesses are used pointwise rather than selected as a sample-dependent function.

## Proof

**Given:** The hypotheses in the Statement.

1.1 If $d=0$, any two members of $H$ agree at every $x\in\mathcal X$, since otherwise the one-point tuple $(x)$ would be shattered. Thus $H$ has one function. Realizability makes that function have zero risk, and every $H$-valued rule outputs it, proving the $d=0$ clause. [F1, F2, given, A1]

1.2 Suppose $d\ge1$ and put $L=\log(64e/\epsilon)>1$ and $D=\log(4/\delta)>0$; the sample-size premise gives $m\epsilon\ge64(dL+D)>8$. Let $E_S:=\{\exists h\in H:R_P(h)>\epsilon,\ \widehat R_S(h)=0\}$ and let $B_{S,S'}$ be the event that some such $h$ also has $\widehat R_{S'}(h)\ge\epsilon/2$, where $S'$ is an independent IID sample. For each fixed $S\in E_S$, fix one witness $h$ for this $S$ only, with no sample-dependent selection function, and let $K_h=\sum_{i=1}^m\mathbf1\{h(X_i')\ne Y_i'\}$. By [F5]–[F8], $K_h$ is a sum of independent Bernoulli indicators with mean $mp$, where $p=R_P(h)>\epsilon$. Factorization [F7] gives $\mathbb E[2^{-K_h}]=(1-p/2)^m\le e^{-mp/2}$ by [F13]. On $K_h<mp/2$, $2^{-K_h}>2^{-mp/2}$, so [F9] gives $\mathbb P(K_h<mp/2)\le\exp[-mp(1-\log2)/2]$. From [F11]–[F12], $1/2\le\log2<4/5$, so this probability is at most $e^{-mp/10}\le e^{-m\epsilon/10}\le e^{-4/5}\le e^{-\log2}=1/2$. Since $mp/2>m\epsilon/2$, this proves $\mathbb P_{S'}(B_{S,S'}\mid S)\ge1/2$ for each $S\in E_S$. Integrating the measurable sections by [F6] yields $\mathbb P(E_S)\le2\mathbb P(B_{S,S'})$. [F5, F6, F7, F8, F9, F11, F12, F13, given, A1]

2.1 View $2m$ IID observations as a combined sample $T$. By [F6], permuting its coordinates preserves its product law, so the joint law of the first and second halves equals the average over all uniform choices of an $m$-index training subset $I\subseteq[2m]$ and its complement. For fixed $T$, each $h$ determines an error-index set $J_h=\{i:h(X_i)\ne Y_i\}$, and the number of distinct such sets is at most $\Pi_H(2m)$ because the labels $Y_i$ only flip coordinates of the trace. If $|J_h|=k>m$, no training subset can be disjoint from all errors. If $k\le m$, the fraction of training subsets disjoint from $J_h$ is $\prod_{j=0}^{k-1}(m-j)/(2m-j)\le2^{-k}$: after $j$ specified errors have been assigned to the ghost half, the next specified index lies there with probability $(m-j)/(2m-j)\le1/2$. Therefore only error patterns with $k\ge m\epsilon/2$ can witness $B$, and the finite union bound [F10] gives $\mathbb P(B_{S,S'})\le\Pi_H(2m)2^{-m\epsilon/2}$. [F2, F3, F6, F10, step 1.2, A1]

3.1 Combining steps 1.2 and 2.1, $\mathbb P(E_S)\le2\Pi_H(2m)2^{-m\epsilon/2}$. The sample-size hypothesis implies $m\ge d$, so [F4] at $n=2m$ gives $\mathbb P(E_S)\le2(2em/d)^d2^{-m\epsilon/2}$. Put $N_A:=\{S:\widehat R_S(A(S))>0\}$. This event is measurable because $S\mapsto\widehat R_S(A(S))$ is measurable, and it is $P^m$-null by the almost-sure consistency assumption. For $S\notin N_A$ with $R_P(A(S))>\epsilon$, $A(S)$ witnesses $E_S$, so the failure event $\{S:R_P(A(S))>\epsilon\}$ is contained in $E_S\cup N_A$. [F1, F4, step 1.2, step 2.1, given, algebra]

4.1 Put $L=\log(64e/\epsilon)$, $D=\log(4/\delta)$, and $M=64(dL+D)/\epsilon$. Then $L>1$, $D>0$, and the hypothesis gives $m\ge M$. For real $t\ge M$, define $q(t)=\log2+d\log(2et/d)-(\log2)\epsilon t/2$. Its derivative is $d/t-(\log2)\epsilon/2\le\epsilon/(64L)-\epsilon/4<0$, using $\log2\ge1/2$ from [F11]–[F12]; hence $q(m)\le q(M)$. The identity $\log(2eM/d)=L+\log2+\log(L+D/d)$, together with $\log(L+D/d)\le\log L+D/(dL)$ (from [F11], [F13]), $\log L\le L$, $\log2\le L$, and $\log2\ge1/2$, gives $q(M)\le L-13dL+D/L-16D$. Consequently $q(M)-\log\delta\le L-13dL+D/L-15D-\log4<0$, because $d\ge1$, $L>1$, and $D>0$. Exponentiating shows $2(2em/d)^d2^{-m\epsilon/2}\le\delta$. [F11, F12, F13, step 3.1, given, algebra]

5.1 By step 3.1 the failure event is contained in $E_S\cup N_A$, with $\mathbb P(N_A)=0$, and step 4.1 bounds $\mathbb P(E_S)$ by $\delta$. Hence $\mathbb P_{S\sim P^m}\{R_P(A(S))\le\epsilon\}\ge1-\delta$. The argument used no arbitrary-index choice axiom. [step 3.1, step 4.1, given, A1] ∎
