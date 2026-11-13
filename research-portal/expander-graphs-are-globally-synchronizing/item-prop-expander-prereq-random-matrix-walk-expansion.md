---
title: Trace powers, closed walks and independent edge moments
status: draft
research_item: prop-expander-prereq-random-matrix-walk-expansion
dependency_level: 1
---

## Prerequisites

- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix)
- [math:def-trace-of-a-square-matrix](https://alphabetamath.cc/item/def-trace-of-a-square-matrix)
- [math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms)
- [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)
- [math:thm-factorization-of-expectations-for-independent-variables](https://alphabetamath.cc/item/thm-factorization-of-expectations-for-independent-variables)
- [math:thm-change-of-variables-for-expectation](https://alphabetamath.cc/item/thm-change-of-variables-for-expectation)
- [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)
- [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)
- [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)
- [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)
- [math:cor-trace-is-invariant-under-similarity](https://alphabetamath.cc/item/cor-trace-is-invariant-under-similarity)
- [math:def-law-or-distribution-of-a-random-element](https://alphabetamath.cc/item/def-law-or-distribution-of-a-random-element)
- [math:thm-arithmetic-and-lattice-operations-preserve-measurability](https://alphabetamath.cc/item/thm-arithmetic-and-lattice-operations-preserve-measurability)
- [math:thm-composition-with-borel-functions-preserves-measurability](https://alphabetamath.cc/item/thm-composition-with-borel-functions-preserves-measurability)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)
- [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)
- [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)
- [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)
- [math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral)


## Statement

Let $n\geq1$ and $\ell\geq1$ be integers, and let $W=(W_{ij})_{1\leq i,j\leq n}$ be a real symmetric random matrix: its entries are real random variables on one probability space and $W_{ij}=W_{ji}$ pointwise. Write $\operatorname{Tr}A=\sum_i A_{ii}$ and let $\|W\|$ be the operator norm induced by the Euclidean norm on $\mathbb R^n$ (equivalently, by the standard norm on $\mathbb C^n$). Then, pointwise,

$$\operatorname{Tr}W^{2\ell}=\sum_{i_0,\ldots,i_{2\ell-1}=1}^{n}\prod_{j=0}^{2\ell-1}W_{i_ji_{j+1}},\qquad i_{2\ell}=i_0,$$

and $\|W\|^{2\ell}\leq\operatorname{Tr}W^{2\ell}\leq n\|W\|^{2\ell}$.

Suppose additionally that the family $(W_{ab})_{1\leq a\leq b\leq n}$ is mutually independent and $\mathbb E|W_{ab}|^{2\ell}<\infty$ for every $a\leq b$. A closed walk here is an ordered sequence $(i_0,\ldots,i_{2\ell})$ with $i_{2\ell}=i_0$; loops and repeated vertices and edges are allowed. For each unordered pair $e=\{a,b\}$, including $a=b$, let $m_e$ be the number of steps whose unordered endpoint pair is $e$. Then

$$\mathbb E\!\left[\prod_{j=0}^{2\ell-1}W_{i_ji_{j+1}}\right]=\prod_{e:m_e>0}\mathbb E[W_e^{m_e}],$$

where $W_{\{a,b\}}=W_{\min(a,b),\max(a,b)}$. If each $W_e$ has a law symmetric about zero, meaning that $W_e$ and $-W_e$ have the same distribution, every factor with odd $m_e$ is zero. Consequently only walks with every multiplicity even can contribute to the expected trace. Comparing these surviving terms with those of another such matrix requires, in addition, the relevant entry-moment inequalities; the walk expansion alone supplies no Gaussian comparison.

## Facts & Assumptions

[F1] Matrix multiplication gives $(AB)_{ij}=\sum_k A_{ik}B_{kj}$, and trace is the sum of diagonal entries ([math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix), [math:def-trace-of-a-square-matrix](https://alphabetamath.cc/item/def-trace-of-a-square-matrix)).

[F2] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis ([math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms)). The vertex-space convention supplies the standard matrix action and Euclidean norm ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)); the induced operator norm is the supremum of the output norm over the closed unit ball ([math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)).

[F3] A real random variable is a measurable map into $\mathbb R$ with its Borel sigma-algebra ([math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)). Independence is independence of the coordinate-generated sigma-algebras ([math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)). For independent real random variables, integrable Borel functions of the individual variables have an integrable product whose expectation is the product of their expectations ([math:thm-factorization-of-expectations-for-independent-variables](https://alphabetamath.cc/item/thm-factorization-of-expectations-for-independent-variables)).

[F4] Expectation of an integrable random variable is its integral over the underlying probability space ([math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)). The Lebesgue integral is linear on $L^1$ of that space, so expectation is linear on integrable random variables ([math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)). Expectation of an integrable function of a random variable is also its integral against that variable's law ([math:thm-change-of-variables-for-expectation](https://alphabetamath.cc/item/thm-change-of-variables-for-expectation)).

[F5] Similar square matrices have equal trace ([math:cor-trace-is-invariant-under-similarity](https://alphabetamath.cc/item/cor-trace-is-invariant-under-similarity)).

[F6] The law of a real random variable $X$ is $\mathbb P_X(B)=\mathbb P(X^{-1}(B))$ for Borel $B\subseteq\mathbb R$; equality in distribution means equality of these laws ([math:def-law-or-distribution-of-a-random-element](https://alphabetamath.cc/item/def-law-or-distribution-of-a-random-element)).

[F7] Arithmetic and lattice operations preserve measurability: in particular, finite products, real scalar multiples and absolute values of measurable real functions are measurable ([math:thm-arithmetic-and-lattice-operations-preserve-measurability](https://alphabetamath.cc/item/thm-arithmetic-and-lattice-operations-preserve-measurability)). Applied to the identity function on $\mathbb R$ with its Borel sigma-algebra, this gives Borel measurability of $x\mapsto x^k$, $x\mapsto |x|^k$ for positive integers $k$, and $x\mapsto-x$. Composition of measurable maps is measurable ([math:thm-composition-with-borel-functions-preserves-measurability](https://alphabetamath.cc/item/thm-composition-with-borel-functions-preserves-measurability)).

[F8] A measurable real function $f$ is integrable exactly when $\int |f|\,d\mu<\infty$ ([math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)). For nonnegative measurable $f\leq g$, $\int f\,d\mu\leq\int g\,d\mu$ on any measure space ([math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)).

[F9] A probability space has $\mathbb P(\Omega)=1$ ([math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)). The simple integral of $1=\chi_\Omega$ is therefore $1$ ([math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)), and its nonnegative Lebesgue integral has the same value ([math:prop-the-nonnegative-integral-agrees-with-the-simple-integral](https://alphabetamath.cc/item/prop-the-nonnegative-integral-agrees-with-the-simple-integral)).

## Proof

**Given:** The matrix and integer hypotheses in the Statement; assume the additional independence and moment hypotheses for the expectation assertions.

**Goal:** Establish the displayed identities, cancellation, and norm bounds.

1.1 Repeatedly applying the matrix-product formula in [F1] gives $(W^k)_{ab}=\sum_{i_1,\ldots,i_{k-1}}W_{ai_1}W_{i_1i_2}\cdots W_{i_{k-1}b}$ for $k\geq2$. Taking $k=2\ell$, setting $a=b=i_0$, and summing the diagonal entries yields the stated closed-walk expansion. The argument is pointwise and permits loops and repeated edges. [F1, given, induction]

1.2 For a fixed walk, symmetry of $W$ groups its factors as $\prod_{e:m_e>0}W_e^{m_e}$. Each $m_e$ lies between $1$ and $2\ell$. By [F7], all powers and absolute powers used here are measurable. By [F9] and [F8], the constant function $1$ is integrable. The moment hypothesis and [F4], [F8] imply that $|W_e|^{2\ell}$ is integrable. Thus [F4] makes $1+|W_e|^{2\ell}$ integrable, with integral $1+\mathbb E|W_e|^{2\ell}<\infty$. For $1\leq m\leq2\ell$, the bound $|x|^m\leq1+|x|^{2\ell}$ follows by considering $|x|\leq1$ and $|x|>1$. Monotonicity in [F8] therefore gives $\int_\Omega |W_e|^m\,d\mathbb P\leq1+\mathbb E|W_e|^{2\ell}<\infty$, so [F8] proves integrability of $W_e^m$, in particular of $W_e^{m_e}$. [F7, F8, F9, F4, given, algebra]

2.1 Apply [F3] to the distinct independent entries and the Borel functions $x\mapsto x^{m_e}$ from [F7] to obtain the product formula and integrability of each walk product, using step 1.2. By [F4], integrate the finite sum of these integrable walk products over the underlying probability space; repeated $L^1$ linearity permits expectation to pass through the finite expansion in step 1.1. [F3, F4, F7, step 1.2, step 1.1, given]

3.1 If $W_e$ and $-W_e$ have the same law in the sense of [F6] and $m_e$ is odd, both are random variables by [F7], and both $m_e$th powers are integrable by step 1.2 because their absolute values agree. The change-of-variables formula in [F4] evaluates both expectations as the integral of the same Borel function $x\mapsto x^{m_e}$ against their common law. Since $(-W_e)^{m_e}=-W_e^{m_e}$, linearity in [F4] gives $\mathbb E[W_e^{m_e}]=\mathbb E[(-W_e)^{m_e}]=-\mathbb E[W_e^{m_e}]$. Thus that moment is zero. The product formula in step 2.1 then eliminates every walk with an odd multiplicity. For a comparison, the formula identifies precisely the moments to be compared; inequalities for those moments are additional hypotheses. [F6, F7, F4, step 1.2, step 2.1, algebra]

4.1 Fix an outcome. A real symmetric matrix is self-adjoint for the Euclidean inner product. By [F2] it has an orthonormal eigenbasis with real eigenvalues $\lambda_1,\ldots,\lambda_n$. Let $Q$ have those eigenvectors as columns. Then $Q^{-1}=Q^T$ and $Q^{-1}W^{2\ell}Q=\operatorname{diag}(\lambda_1^{2\ell},\ldots,\lambda_n^{2\ell})$, since both sides act on each coordinate vector by the same scalar. Thus [F5] and [F1] give $\operatorname{Tr}W^{2\ell}=\sum_r\lambda_r^{2\ell}$ in the original coordinates. For $x=\sum_r c_r v_r$ in the orthonormal eigenbasis, $\|Wx\|_2^2=\sum_r|\lambda_r|^2|c_r|^2\leq(\max_r|\lambda_r|)^2\|x\|_2^2$. This proves boundedness and the upper bound for the unit-ball supremum in [F2]; a unit eigenvector for a maximal absolute eigenvalue attains it. Hence the operator norm is $\max_r|\lambda_r|$. The same calculation in the complexified basis gives the identical complex operator norm. Every summand is nonnegative and at most the largest, while one attains it. Therefore $\|W\|^{2\ell}\leq\operatorname{Tr}W^{2\ell}\leq n\|W\|^{2\ell}$. The preceding steps prove all assertions. [F2, F1, F5, given, algebra] ∎
