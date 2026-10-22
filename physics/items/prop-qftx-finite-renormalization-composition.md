---
id: prop-qftx-finite-renormalization-composition
kind: proposition
title: Renormalization maps form a formal composition group
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 9
deps:
  - def-qftx-local-time-ordered-system
  - def-qftx-off-shell-local-polynomial-functionals
  - lem-finite-sums-of-product-tests-are-dense-on-product-open-sets
  - def-countable-choice
  - thm-distributions-supported-at-one-point
  - lem-test-function-cutoffs-and-euclidean-localization
dependency_roles:
  def-qftx-local-time-ordered-system: mathematical-premise
  def-qftx-off-shell-local-polynomial-functionals: mathematical-premise
  lem-finite-sums-of-product-tests-are-dense-on-product-open-sets: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-distributions-supported-at-one-point: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
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
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice. Put $L=\mathcal F_{\mathrm{loc}}^{\mathrm{poly}}(\mathbb M)$, $A=\mathcal F_{\mu c}^{\mathrm{poly}}(\mathbb M)$, and $R=\mathbb C\llbracket\hbar\rrbracket$. Write $L_R=L\llbracket\hbar\rrbracket$ and $A_R=A\llbracket\hbar\rrbracket$. Extend each time-ordered map coefficientwise and $R$-multilinearly to $L_R^n\to A_R$. All maps below are formal in the interaction degree: evaluation at $\lambda V$, for a second formal indeterminate $\lambda$ and $V\in L_R$, is compared in $A_R\llbracket\lambda\rrbracket$. For two scalar time-ordered systems $T$ and $T'$ satisfying the local scalar contract for the same free data and with $T_0=T'_0=1$, $T_1=T'_1=\operatorname{id}$, define their normalized formal S-maps by
$$\mathcal S(V)=\sum_{n=0}^{\infty}\frac{1}{n!}T_n(V,\ldots,V),\qquad \mathcal S'(V)=\sum_{n=0}^{\infty}\frac{1}{n!}T'_n(V,\ldots,V).$$
There is a unique formal map $Z(V)=V+\sum_{n\ge2}Z_n(V)=V+O(V^2)$, where $Z_n$ is the diagonal of a symmetric $R$-multilinear map $L_R^n\to L_R$ and $Z(\lambda V)\in\lambda L_R\llbracket\lambda\rrbracket$ such that $Z(0)=0$, $dZ_0=\operatorname{id}$, $Z$ preserves supports and scalar Poincare covariance, and
$$\mathcal S'(V)=\mathcal S(Z(V))$$
coefficientwise. Such maps compose, and each has a recursively defined formal inverse; hence they form a group under composition.

## Statement references

[[def-qftx-local-time-ordered-system]]

[[thm-distributions-supported-at-one-point]]

## Facts & Assumptions

**Given:** The common admissible free scalar data, two time-ordered systems satisfying the stated contract, and Countable Choice.

[A1] Assume Countable Choice [[def-countable-choice]] for the common microcausal contraction contract. The two time-ordered systems are supplied; no new graph extension or arbitrary family of extension choices is made here.

[F1] The two time-ordered systems are given in the Statement, including their causal factorization, field independence, covariance, derivative compatibility and finite graph scaling upper bounds.

[F2] [[def-qftx-local-time-ordered-system]]: $T_0=1$, $T_1=\operatorname{id}$; the formal S-map is coefficientwise and causal; the vertex functionals and support convention are those of [[def-qftx-off-shell-local-polynomial-functionals]].

[F3] [[thm-distributions-supported-at-one-point]]: a distribution supported at one point is a unique finite sum of delta derivatives, in ZF. If its scaling upper bound is $B$ in relative dimension $d$, the largest nonzero derivative order is at most $\lfloor B-d\rfloor$, since a nonzero point-supported sum of largest order $k$ has scaling degree $d+k$.

[F4] [[lem-finite-sums-of-product-tests-are-dense-on-product-open-sets]]: finite sums of products of compactly supported smooth tests are dense in the test-function topology on any product of open Euclidean sets, with supports in one compact product.

[F5] [[lem-test-function-cutoffs-and-euclidean-localization]] supplies compact smooth cutoffs; normalizing a nonnegative nonzero one gives a compact smooth function of integral one.

## Proof

**Proof technique:** direct triangular recursion in formal degree.

**Given:** [A1], two systems as in the Statement, and [F1]–[F5].

1.1 Use the two explicitly supplied systems [F1]; no existence theorem for constructing them is invoked. Introduce a formal degree parameter $\lambda$ and write $\mathcal S(\lambda V)=1+\sum_{n\ge1}\lambda^nS_n(V)$ and $\mathcal S'(\lambda V)=1+\sum_{n\ge1}\lambda^nS'_n(V)$. Since $T_1=T'_1=\operatorname{id}$, the degree-one coefficients agree. Set $Z_1(V)=V$. [given, F1, F2, construct]

2.1 Suppose homogeneous maps $Z_j$ are defined for $1\le j<n$, with finite-jet kernels supported on the total diagonal and preserving supports and covariance, and $\mathcal S(Z_{<n}(\lambda V))$ agrees with $\mathcal S'(\lambda V)$ through degree $n-1$. In the degree-$n$ coefficient of $\mathcal S(Z_{<n}(\lambda V)+\lambda^nZ_n(V))$, the only occurrence of $Z_n$ is the linear term $T_1(Z_n)=Z_n$: every term with $T_k$ for $k\ge2$ has $k$ positive degrees summing to $n$, so each degree is at most $n-1$. Therefore there is exactly one choice of $Z_n$, namely the degree-$n$ residual of $\mathcal S'$ minus the already known coefficient of $\mathcal S\circ Z_{<n}$. [F1, F2, step 1.1, algebra]

3.1 Polarize the homogeneous residual from step 2.1 into its symmetric $n$-linear vertex kernel. Fix a point of a causal cover set $C_I$ and choose small coordinate neighborhoods of its $n$ entries whose product lies in $C_I$. For arbitrary $f_i\in C_c^\infty$ in those neighborhoods, fix arbitrary polynomial jet labels $P_i$ of finite order and take the local functionals $F_i(\phi)=\int f_i(x)P_i(j^{s_i}\phi(x))\,d^4x$; their supports satisfy the same causal split. Introduce independent formal variables $t_1,\ldots,t_n$. Each lower map $Z_j$, $j<n$, has a kernel supported on the total diagonal by the induction hypothesis in step 2.1; because the two block supports are disjoint, every mixed term of $Z_j(\sum_i t_iF_i)$ containing variables from both blocks vanishes, so $Z_j$ splits as the sum of its block restrictions. The causal-factorization identity for $\mathcal S'$ and for $\mathcal S\circ Z_{<n}$ then expresses the coefficient of $t_1\cdots t_n$ as a star product of block coefficients of degrees $|I|$ and $|I^c|$. Both degrees are strictly below $n$, so these coefficients agree by the induction hypothesis and the coefficient vanishes. For each of the arbitrary fixed polynomial jet labels, the corresponding numerical residual distribution therefore pairs to zero with every product test $f_1\otimes\cdots\otimes f_n$ in this neighborhood. Iterating [F4] over the $n$ factors shows finite sums of these product tests are dense in its test-function space, so the residual distribution vanishes on the neighborhood. Since the causal cover sets cover the complement of the total diagonal, the residual kernel is supported on that diagonal. [A1, F1, F2, F4, step 2.1, construct, algebra]

4.1 Fix balanced input and remaining-field labels and one $\hbar$ coefficient of the polarized residual in step 3.1, and call its numerical distribution $Q$. Its field-independent numerical coefficients are translation invariant by covariance in [F1]; lower-order counterterm insertions preserve that invariance by the induction hypothesis. In coordinates $y=x_n$, $z_i=x_i-x_n$, simultaneous translation acts only on $y\in\mathbb R^4$, and step 3.1 gives $\operatorname{supp}Q\subseteq\{z=0\}$. Translation invariance implies $Q(\partial_{y_a}\Psi)=0$ for every test $\Psi$, by differentiating its translated test curve in the fixed-support smooth topology. Choose $\eta(y)=\prod_{a=1}^4\eta_a(y_a)$ with $\eta_a\in C_c^\infty(\mathbb R)$ and $\int\eta_a=1$, using [F5], and define $q(\psi)=Q(\eta(y)\psi(z))$. For any $\Psi$, replace its dependence on $y_1$, then $y_2,y_3,y_4$, by $\eta_a(y_a)$ times its integral in that coordinate. Each replacement difference has zero integral in that coordinate, so its primitive from $-\infty$ is compactly supported and smooth, also in the remaining variables. Hence $\Psi-\eta(y)\int\Psi(v,z)\,d^4v$ is a sum of four $y$-derivatives of compact smooth tests. The derivative-annihilation identity yields $Q(\Psi)=q(\int\Psi(y,z)\,d^4y)$, that is, $Q=1_y\otimes q$. The map defining $q$ is continuous on every fixed-support test space, and its support is contained in $\{0\}\subset\mathbb R^{4(n-1)}$. [F1, F5, step 2.1, step 3.1, construct, algebra]

5.1 Now apply [F3] to $q$, not to $Q$: $q=\sum_{|\beta|\le m}c_\beta\partial_z^\beta\delta_0$ with finite $m$. Its finite relative scaling bound comes from the finite graph bounds of the two supplied systems and the finitely many lower-order local insertions at this fixed input, interaction and $\hbar$ degree. If that bound is $B$ and $d=4(n-1)$, [F3] gives $|\beta|\le\lfloor B-d\rfloor$ for nonzero coefficients. In the original vertex coordinates the precise diagonal-jet formula is $Q(\Psi)=\sum_\beta c_\beta(-1)^{|\beta|}\int_{\mathbb M}(\partial_z^\beta\Psi)(y,0)\,d^4y$, with $\Psi$ here written in the $(y,z)$ coordinates. Pairing it with the finite local polynomial vertex kernels differentiates their compact smooth coefficients and remaining field jets only finitely many times, giving an integral of a finite polynomial in the field jets at $y$. Thus each coefficient of $Z_n$ belongs to $L$. Balanced representatives and derivative identities in [F1] make it independent of the density presentation. The diagonal formula confines its functional support to the intersection of the vertex supports, and covariance follows from covariance of the residual recursion. Therefore $Z_n$ has the required formal local, support-preserving and covariant coefficients. [A1, F1, F2, F3, step 2.1, step 4.1, construct, algebra]

6.1 Induction defines every $Z_n$ uniquely by the displayed residual formula; ordinary recursion and Replacement collect these unique coefficients without an axiom of choice, and each coefficient of a composition uses only finitely many partitions of its total degree. If $Z(V)=V+\sum_{n\ge2}Z_n(V)$, solve $Z(X(V))=V$ recursively: the unknown degree-$n$ term of $X$ again occurs through the identity linear coefficient, while all other terms use lower degrees. This gives a unique formal inverse with local support-preserving coefficients. Formal composition is associative coefficientwise and preserves the identity linear term, so these maps form a group. [F2, step 2.1, step 5.1, algebra] ∎

## Remarks

Constructing the time-ordered systems is a separate theorem under its own Choice hypotheses. This comparison result takes the systems as input and selects no new extensions, so the Axiom of Choice is unnecessary here. Countable Choice remains part of the actual contraction contract.
