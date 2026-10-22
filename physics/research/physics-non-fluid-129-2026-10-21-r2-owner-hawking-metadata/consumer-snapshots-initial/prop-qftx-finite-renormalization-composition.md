---
id: prop-qftx-finite-renormalization-composition
kind: proposition
title: Renormalization maps form a formal composition group
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 9
deps:
  - thm-qftx-scalar-eg-induction
  - lem-qftx-finite-graph-scaling-degree
  - def-qftx-local-time-ordered-system
  - def-qftx-off-shell-local-polynomial-functionals
  - prop-qft-local-counterterm-jet-classification
  - lem-finite-sums-of-product-tests-are-dense-on-product-open-sets
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-qftx-scalar-eg-induction: mathematical-premise
  lem-qftx-finite-graph-scaling-degree: mathematical-premise
  def-qftx-local-time-ordered-system: mathematical-premise
  def-qftx-off-shell-local-polynomial-functionals: mathematical-premise
  prop-qft-local-counterterm-jet-classification: mathematical-premise
  lem-finite-sums-of-product-tests-are-dense-on-product-open-sets: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, full lecture notes
      url: https://arxiv.org/html/1208.1428
      locator: Section 7, equations (79)–(80), formal S-matrices and composition by local renormalization maps; the coefficient recursion and locality proof are supplied here.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Sections 3.2 and 4, printed pp. 16–21, causal factorization and local diagonal ambiguities; finite-renormalization composition is derived here from the inspected induction.
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice and Countable Choice. For two scalar time-ordered systems $T$ and $T'$ satisfying the local scalar contract for the same free data and with $T_0=T'_0=1$, $T_1=T'_1=\operatorname{id}$, define their normalized formal S-maps by
$$\mathcal S(V)=\sum_{n=0}^{\infty}\frac{1}{n!}T_n(V,\ldots,V),\qquad \mathcal S'(V)=\sum_{n=0}^{\infty}\frac{1}{n!}T'_n(V,\ldots,V).$$
There is a unique formal map $Z(V)=V+O(V^2)$ from local polynomial functionals to local polynomial functionals such that $Z(0)=0$, $dZ_0=\operatorname{id}$, $Z$ preserves supports and scalar Poincare covariance, and
$$\mathcal S'(V)=\mathcal S(Z(V))$$
coefficientwise. Such maps compose, and each has a recursively defined formal inverse; hence they form a group under composition.

## Statement references

[[def-qftx-local-time-ordered-system]]

[[thm-qftx-scalar-eg-induction]]

[[prop-qft-local-counterterm-jet-classification]]

## Facts & Assumptions

**Given:** The common admissible free scalar data, two time-ordered systems satisfying the stated contract, and the Axiom of Choice and Countable Choice.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]] for the finite graph extensions and Countable Choice [[def-countable-choice]] for the microcausal contraction products.

[F1] [[thm-qftx-scalar-eg-induction]]: both systems exist with complete graph extensions conditional on the fixed free data, causal factorization, field independence and scalar Poincare covariance.

[F2] [[def-qftx-local-time-ordered-system]]: $T_0=1$, $T_1=\operatorname{id}$; the formal S-map is coefficientwise and causal; the vertex functionals and support convention are those of [[def-qftx-off-shell-local-polynomial-functionals]].

[F3] [[prop-qft-local-counterterm-jet-classification]]: a difference supported at the total diagonal and of finite scaling degree is a finite sum of delta derivatives of bounded order, hence pairs with local polynomial vertices as a local polynomial functional.

[F4] [[lem-finite-sums-of-product-tests-are-dense-on-product-open-sets]]: finite sums of products of compactly supported smooth tests are dense in the test-function topology on any product of open Euclidean sets, with supports in one compact product.

## Proof

**Proof technique:** direct triangular recursion in formal degree.

**Given:** [A1], two systems as in the Statement, and [F1]–[F4].

1.1 The existence result [F1] applies to the common free data; the Statement also supplies the two systems explicitly. Introduce a formal degree parameter $\lambda$ and write $\mathcal S(\lambda V)=1+\sum_{n\ge1}\lambda^nS_n(V)$ and $\mathcal S'(\lambda V)=1+\sum_{n\ge1}\lambda^nS'_n(V)$. Since $T_1=T'_1=\operatorname{id}$, the degree-one coefficients agree. Set $Z_1(V)=V$. [given, F1, F2, construct]

2.1 Suppose homogeneous maps $Z_j$ are defined for $1\le j<n$, with finite-jet kernels supported on the total diagonal and preserving supports and covariance, and $\mathcal S(Z_{<n}(\lambda V))$ agrees with $\mathcal S'(\lambda V)$ through degree $n-1$. In the degree-$n$ coefficient of $\mathcal S(Z_{<n}(\lambda V)+\lambda^nZ_n(V))$, the only occurrence of $Z_n$ is the linear term $T_1(Z_n)=Z_n$: every term with $T_k$ for $k\ge2$ has $k$ positive degrees summing to $n$, so each degree is at most $n-1$. Therefore there is exactly one choice of $Z_n$, namely the degree-$n$ residual of $\mathcal S'$ minus the already known coefficient of $\mathcal S\circ Z_{<n}$. [F1, F2, step 1.1, algebra]

3.1 Polarize the homogeneous residual from step 2.1 into its symmetric $n$-linear vertex kernel. Fix a point of a causal cover set $C_I$ and choose small coordinate neighborhoods of its $n$ entries whose product lies in $C_I$. For arbitrary $f_i\in C_c^\infty$ in those neighborhoods, fix arbitrary polynomial jet labels $P_i$ of finite order and take the local functionals $F_i(\phi)=\int f_i(x)P_i(j^{s_i}\phi(x))\,d^4x$; their supports satisfy the same causal split. Introduce independent formal variables $t_1,\ldots,t_n$. Each lower map $Z_j$, $j<n$, has a kernel supported on the total diagonal by the induction hypothesis in step 2.1; because the two block supports are disjoint, every mixed term of $Z_j(\sum_i t_iF_i)$ containing variables from both blocks vanishes, so $Z_j$ splits as the sum of its block restrictions. The causal-factorization identity for $\mathcal S'$ and for $\mathcal S\circ Z_{<n}$ then expresses the coefficient of $t_1\cdots t_n$ as a star product of block coefficients of degrees $|I|$ and $|I^c|$. Both degrees are strictly below $n$, so these coefficients agree by the induction hypothesis and the coefficient vanishes. For each of the arbitrary fixed polynomial jet labels, the corresponding numerical residual distribution therefore pairs to zero with every product test $f_1\otimes\cdots\otimes f_n$ in this neighborhood. Iterating [F4] over the $n$ factors shows finite sums of these product tests are dense in its test-function space, so the residual distribution vanishes on the neighborhood. Since the causal cover sets cover the complement of the total diagonal, the residual kernel is supported on that diagonal. [A1, F1, F2, F4, step 2.1, construct, algebra]

4.1 By [F1] the residual has a finite scaling upper bound, and under [A1] the classification [F3] identifies it with a finite jet of the diagonal delta distribution. Pairing this jet with the finite local polynomial derivative kernels of [F2] gives a local polynomial functional of finite jet order. The canonical balanced representatives and derivative identities in the common contract make this pairing independent of every density presentation. It is supported where the original vertices meet, hence its support lies in the support of $V$. Its covariance follows from the covariance of both systems and the invariant diagonal. Therefore the unique residual $Z_n$ chosen in step 2.1 is local, support-preserving and covariant. [A1, F1, F2, F3, step 2.1, step 3.1, construct]

5.1 Induction defines every $Z_n$ uniquely, and each coefficient of a composition uses only finitely many partitions of its total degree. If $Z(V)=V+\sum_{n\ge2}Z_n(V)$, solve $Z(X(V))=V$ recursively: the unknown degree-$n$ term of $X$ again occurs through the identity linear coefficient, while all other terms use lower degrees. This gives a unique formal inverse with local support-preserving coefficients. Formal composition is associative coefficientwise and preserves the identity linear term, so these maps form a group. [F2, step 2.1, step 4.1, algebra] ∎
