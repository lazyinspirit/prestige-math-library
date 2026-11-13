---
id: lem-se-author-88d8498c76d6-weak-dirichlet-form
kind: lemma
domain: mathematics
title: Weak shifted Dirichlet form and energy bound on an open set
status: draft
deps:
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:def-wkp-zero-as-a-sobolev-closure
  - math:cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup
  - physics:thm-nrqmx-closed-form-representation
  - math:thm-sobolev-spaces-are-banach-spaces
  - math:lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - math:def-distributional-derivative
  - math:rem-weak-derivatives-are-distributional-derivatives-with-function-values
  - math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - math:thm-cauchy-schwarz-in-an-inner-product-space
  - math:def-closed-sectorial-form-and-its-associated-operator
  - math:thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - math:thm-unbounded-borel-functional-calculus
  - math:lem-unbounded-pvm-integral-is-well-defined-and-closed
  - math:lem-spectral-form-domain-and-core-of-a-semibounded-operator
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  math:cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup: mathematical-premise
  physics:thm-nrqmx-closed-form-representation: mathematical-premise
  math:thm-sobolev-spaces-are-banach-spaces: mathematical-premise
  math:lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  math:def-distributional-derivative: mathematical-premise
  math:rem-weak-derivatives-are-distributional-derivatives-with-function-values: mathematical-premise
  math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration: mathematical-premise
  math:thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  math:def-closed-sectorial-form-and-its-associated-operator: mathematical-premise
  math:thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  math:thm-unbounded-borel-functional-calculus: mathematical-premise
  math:lem-unbounded-pvm-integral-is-well-defined-and-closed: mathematical-premise
  math:lem-spectral-form-domain-and-core-of-a-semibounded-operator: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement

Assume AC. Let $U\subseteq\mathbb R^n$ be nonempty and open, $H=L^2(U;\mathbb C)$, and $Q=H^1_0(U)$. The form $q(u,v)=\int_U(u\overline v+\nabla u\cdot\overline{\nabla v})$ is densely defined, closed and satisfies $q[u]\ge\|u\|_2^2$. Its self-adjoint representing operator $A\ge I$ has
$$D(A)=\{u\in H^1_0(U):\Delta u\in L^2(U)\},\qquad Au=u-\Delta u.$$
Here the Laplacian is distributional, and $\|u\|_{H^1}\le\|Au\|_2$ for $u\in D(A)$. Moreover $D(A^{1/2})=Q$ and $q[u]=\|A^{1/2}u\|_2^2$ on $Q$.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [[math:def-axiom-of-choice]]; its countable and dependent instances follow from [[math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]. These supply the choice hypotheses of the Sobolev, Hilbert-space, distributional and form-representation inputs.

[F2] The weak derivatives and $H^1$ norm are those of [[math:def-sobolev-space-wkp-and-its-norm]]; $H^1_0(U)$ is the $H^1$ closure of $C_c^\infty(U)$ by [[math:def-wkp-zero-as-a-sobolev-closure]]. Completeness is supplied by [[math:thm-sobolev-spaces-are-banach-spaces]], and density in $L^2$ by [[math:lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]].

[F3] [[math:cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup]] gives the self-adjoint nonpositive form operator $\Delta_D$ on any nonempty open set; its weak domain is defined by the Dirichlet energy identity. Only clause (1) is used.

[F4] [[physics:thm-nrqmx-closed-form-representation]] is a mathematics-domain supplier with inner products linear in the first variable. At $c=0$ its statement gives the self-adjoint representing operator, $D(A^{1/2})=Q$, and $q(u,v)=\langle Au,v\rangle$ for $u\in D(A)$ and $v\in Q$. The square-root form identity on all of $Q$ is deduced locally below from these stated interfaces and the spectral form-core input [F10].

[F5] By [[math:lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], $H=L^2(U;\mathbb C)$ is a complex Hilbert space for $\langle u,v\rangle=\int_Uu\overline v$, linear in the first variable, under Countable Choice supplied by [F1].

[F6] Distributional derivatives use the bilinear test pairing and signed-transpose convention of [[math:def-distributional-derivative]]. By [[math:rem-weak-derivatives-are-distributional-derivatives-with-function-values]], weak derivatives agree with represented distributional derivatives under Countable Choice. Thus for $u\in H^1(U)$, $\Delta u=\sum_{j=1}^n\partial_j(\partial_ju)$ is a distribution, with $\langle\Delta u,\psi\rangle=-\sum_j\int_U\partial_ju\,\partial_j\psi$ for every test $\psi$. Here $\Delta u\in L^2$ means that this distribution is represented by an $L^2$ class.

[F7] Cauchy–Schwarz in a complex inner-product space is supplied by [[math:thm-cauchy-schwarz-in-an-inner-product-space]]. Applying it to the $L^2$ pairings from [F5] and to the finite-dimensional coordinate pairing gives $|q(u,v)|\le\|u\|_{H^1}\|v\|_{H^1}$, and $|\langle h,v\rangle|\le\|h\|_2\|v\|_2\le\|h\|_2\|v\|_{H^1}$ for $h\in H$ and $u,v\in Q$.

[F8] For a nonnegative symmetric form, [[math:def-closed-sectorial-form-and-its-associated-operator]] defines closedness by completeness in the shifted form norm $(q[u]+\|u\|_2^2)^{1/2}$, with $M=0$ and $\theta=0$ in its sector condition. Its form-domain boundedness and continuous inclusion requirements are checked below. Only the closedness definition is used; the positive representing-operator convention is that of [F4].

[F9] Under AC, [[math:thm-spectral-theorem-for-unbounded-self-adjoint-operators]] supplies the spectral projection-valued measure $E$ of a self-adjoint operator on a nonzero complex Hilbert space. [[math:thm-unbounded-borel-functional-calculus]] supplies the Borel calculus, addition of constants and spectral support. By [[math:lem-unbounded-pvm-integral-is-well-defined-and-closed]], $\|f(E)u\|^2=\int|f(t)|^2\,dE_u(t)$ on its squared-integrability domain, where $E_u(S)=\langle E(S)u,u\rangle$ and $E_u(\mathbb R)=\|u\|^2$. Square roots use the nonnegative square-root function on the spectral support. The zero Hilbert space has the unique zero operator and all these norm identities are zero.

[F10] Under AC, [[math:lem-spectral-form-domain-and-core-of-a-semibounded-operator]] applies to a self-adjoint operator $A\ge0$ on a complex Hilbert space. With its lower-bound parameter $c=0$, it states that $D(A)$ is dense in $D(A^{1/2})$ for the norm $(\|z\|_2^2+\|A^{1/2}z\|_2^2)^{1/2}$ and that $\langle Az,z\rangle=\|A^{1/2}z\|_2^2$ for $z\in D(A)$. This includes its zero-space convention. The density is in the spectral graph norm; its conversion into density in the given $H^1$ form norm is proved below.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the conclusions in the statement under its stated hypotheses.

1.1 By [F5], $H$ is the required complex Hilbert space. The form $q$ is symmetric sesquilinear and bounded on $Q$ by [F7], and $q[u]=\|u\|_{H^1}^2\ge\|u\|_2^2$. The space $Q$ is a closed subspace of the complete space $H^1(U)$, hence complete in $q[u]^{1/2}$. The shifted norm required by [F4] at $c=0$ satisfies $q[u]\le q[u]+\|u\|_2^2\le2q[u]$, so it is complete as well. The inclusion $Q\hookrightarrow H$ is continuous because $\|u\|_2\le\|u\|_{H^1}$, and the nonnegative real diagonal satisfies the sector condition with $M=0$ and $\theta=0$. Thus [F8], together with boundedness from [F7], identifies this completeness as closedness of $q$. The inclusion $Q\subseteq H$ is dense because $C_c^\infty(U)$ is dense in $L^2(U)$. With the choice hypotheses supplied by [F1], the closed-form theorem gives the self-adjoint representative. The weak identity identifies its domain and action with $I-\Delta_D$ from the any-open realization: $q(u,v)=\langle f,v\rangle$ is equivalent to $\int_U\nabla u\cdot\overline{\nabla v}=\langle f-u,v\rangle$. Since $\Delta_D\le0$, this gives $A\ge I$. [F1, F2, F3, F4, F5, F7, F8, given, algebra]

2.1 If $u\in D(A)$ and $Au=f$, test the form identity with $\phi=\overline\psi$ for $\psi\in C_c^\infty(U)$. By [F6], $\langle\Delta u,\psi\rangle=-\sum_j\int_U\partial_ju\,\partial_j\psi=\int_U(u-f)\psi$, so $\Delta u=u-f$ in distributions. Conversely if $u\in Q$ and $\Delta u=g\in L^2$, use $\psi=\overline\phi$ in this distributional identity to obtain $q(u,\phi)=\langle u-g,\phi\rangle$ for smooth compactly supported $\phi$. Both sides are continuous in the $H^1$ norm of $\phi$ by [F7], so the defining density of $Q$ extends the equality to every $\phi\in Q$. The form-operator domain characterization gives $u\in D(A)$ and $Au=u-g$. [F2, F4, F5, F6, F7, step 1.1]

2.2 If $H=\{0\}$ the square-root claims are immediate. Otherwise $A\ge I\ge0$ by step 1.1, so [F10] applies under [F1] with $c=0$. Its spectral square root is the one in [F9], and [F4] identifies $D(A^{1/2})=Q$. For every $z\in D(A)$, the representing identity and the operator-domain identity in [F10] give $q[z]=\langle Az,z\rangle=\|A^{1/2}z\|_2^2$. Thus the two forms agree on $D(A)$ before any extension to $Q$ is made. [F1, F4, F5, F9, F10, step 1.1]

3.1 For $u\in D(A)$ the form identity and Cauchy–Schwarz yield $\|u\|_{H^1}^2=\langle Au,u\rangle\le\|Au\|_2\|u\|_2\le\|Au\|_2\|u\|_{H^1}$. Division when $u\ne0$, with the zero case immediate, proves the bound. [F4, F5, F7, step 1.1, step 2.1, algebra]

4.1 Fix $u\in Q=D(A^{1/2})$. Choose, using [F1] and the density assertion in [F10], a sequence $u_k\in D(A)$ such that $\|u_k-u\|_2+\|A^{1/2}(u_k-u)\|_2\to0$. For differences in $D(A)$, step 2.2 gives $\|u_k-u_j\|_{H^1}^2=q[u_k-u_j]=\|A^{1/2}(u_k-u_j)\|_2^2\to0$ as $k,j\to\infty$. Completeness of $Q$ in the $H^1$ norm from step 1.1 yields $v\in Q$ with $\|u_k-v\|_{H^1}\to0$. Since $\|u-v\|_2\le\|u-u_k\|_2+\|u_k-v\|_{H^1}\to0$, this limit is $v=u$. Continuity of the two norms and step 2.2 now give $q[u]=\lim_k q[u_k]=\lim_k\|A^{1/2}u_k\|_2^2=\|A^{1/2}u\|_2^2$. This proves the full form-domain identity and also that $D(A)$ is dense in $Q$ for the original form norm. Expanding the identity at $u+v$ and $u+iv$ and comparing real and imaginary parts gives $q(u,v)=\langle A^{1/2}u,A^{1/2}v\rangle$ for all $u,v\in Q$. [F1, F2, F4, F7, F10, step 1.1, step 2.2, choose, algebra] ∎

## Source notes

The any-open realization, the closed-form definition and representation theorem, the spectral-calculus norm identity, and the spectral form-core lemma are used here. The full square-root form identity is proved by completion from the operator domain. No bounded-domain spatial regularity, spectral gap, compact resolvent or eigenfunction expansion is assumed. The density of tests in L² and Sobolev completeness supply the form-domain density and completeness requirements.
