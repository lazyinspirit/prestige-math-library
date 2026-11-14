---
id: lem-qec-prereq-bosonic-thermal-moment-contract
kind: lemma
domain: mathematics
title: Finite-mode bosonic Gibbs occupations and moments
status: draft
origin: session
deps:
  - physics:def-qft-fock-and-test-spaces
  - physics:lem-qft-fock-ccr-car
  - physics:lem-qft-fock-one-mode-splitting
  - physics:thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - physics:thm-qsm-trace-gibbs-variational
  - physics:def-trace-class-operator
  - physics:def-trace-of-a-trace-class-operator
  - physics:lem-nuclear-series-characterizes-trace-norm
  - math:thm-geometric-series
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - physics:def-projection-valued-measure
  - physics:def-regular-borel-measure-on-an-lch-space
  - physics:thm-bounded-borel-pvm-integral
  - physics:def-unbounded-integral-against-a-pvm
  - physics:thm-trace-is-absolutely-convergent-and-basis-independent
dependency_roles:
  physics:def-qft-fock-and-test-spaces: mathematical-premise
  physics:lem-qft-fock-ccr-car: mathematical-premise
  physics:lem-qft-fock-one-mode-splitting: mathematical-premise
  physics:thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  physics:thm-qsm-trace-gibbs-variational: mathematical-premise
  physics:def-trace-class-operator: mathematical-premise
  physics:def-trace-of-a-trace-class-operator: mathematical-premise
  physics:lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  math:thm-geometric-series: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  physics:def-projection-valued-measure: mathematical-premise
  physics:def-regular-borel-measure-on-an-lch-space: mathematical-premise
  physics:thm-bounded-borel-pvm-integral: mathematical-premise
  physics:def-unbounded-integral-against-a-pvm: mathematical-premise
  physics:thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $m\geq1$, let $e_1,\ldots,e_m$ be the standard orthonormal basis of $\mathbb C^m$, and let $a_j=a(e_j)$ and $a_j^\dagger=a^\dagger(e_j)$ be the bosonic annihilation and creation operators on symmetric Fock space. For $\omega_j>0$ and $\beta>0$, let $H$ be the self-adjoint closure of $\sum_{j=1}^m\omega_j a_j^\dagger a_j$ on the finite-particle subspace, $Z=\operatorname{Tr}(e^{-\beta H})$, and $\rho_\beta=Z^{-1}e^{-\beta H}$. Then $Z=\prod_{j=1}^m(1-e^{-\beta\omega_j})^{-1}$ and, with $\langle X\rangle_\beta:=\operatorname{Tr}(X\rho_\beta)$,

$$\langle a_i^\dagger a_j\rangle_\beta=\delta_{ij}(e^{\beta\omega_j}-1)^{-1},\qquad \langle a_i a_j^\dagger\rangle_\beta=\delta_{ij}\bigl[1+(e^{\beta\omega_j}-1)^{-1}\bigr].$$

Both $\langle a_i a_j\rangle_\beta$ and $\langle a_i^\dagger a_j^\dagger\rangle_\beta$ are zero. Each displayed product composed with $\rho_\beta$ is a well-defined trace-class operator. This finite-mode trace construction does not itself supply an infinite-volume state or correlation limit.

For $\mathbf n\in\mathbb N^m$, put $N=\sum_jn_j$ and let $P_{s,N}$ be the symmetric-sector projection. The vectors $|\mathbf n\rangle=\sqrt{N!/\prod_jn_j!}\,P_{s,N}(e_1^{\otimes n_1}\otimes\cdots\otimes e_m^{\otimes n_m})$, with $|\mathbf0\rangle$ the vacuum, form a complete orthonormal basis. In this basis $H|\mathbf n\rangle=(\sum_j\omega_jn_j)|\mathbf n\rangle$ and $\rho_\beta|\mathbf n\rangle=p_{\mathbf n}|\mathbf n\rangle$, where $p_{\mathbf n}=\prod_j(1-q_j)q_j^{n_j}$ and $q_j=e^{-\beta\omega_j}\in(0,1)$; in particular $\sum_{\mathbf n}p_{\mathbf n}=1$.

## Facts & Assumptions

**Given:** The choice assumptions, finite mode number, positive frequencies and inverse temperature in the Statement.

[F1] The symmetric Fock space, finite-particle subspace, vacuum and sector creation and annihilation maps use the conventions of [[physics:def-qft-fock-and-test-spaces]]. The maximal bosonic maps are closed and mutually adjoint, with the stated finite-particle core and canonical commutator relations. [[physics:lem-qft-fock-ccr-car]]

[F2] Splitting off a unit vector gives a unitary one-mode Fock tensor factor, on which creation and annihilation have the raising and lowering coefficients $\sqrt{n+1}$ and $\sqrt n$. [[physics:lem-qft-fock-one-mode-splitting]]

[F3] Under Full Choice, the operator $\int\lambda\,dP$ of a regular PVM on $\mathbb R$, with domain specified by its finite second spectral moment, is self-adjoint and has spectral PVM $P$. [[physics:thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

[F4] Under Full Choice, for a nonzero separable complex Hilbert space and a self-adjoint lower-bounded operator whose exponential is trace class on an open positive-temperature interval, the normalized exponential is a density operator. [[physics:thm-qsm-trace-gibbs-variational]]

[F5] Trace class and trace use [[physics:def-trace-class-operator]] and [[physics:def-trace-of-a-trace-class-operator]]. A compact operator with an absolutely summable rank-one expansion converging in operator norm is trace class by [[physics:lem-nuclear-series-characterizes-trace-norm]]. Its trace is the absolutely convergent sum of diagonal entries in any supplied orthonormal basis by [[physics:thm-trace-is-absolutely-convergent-and-basis-independent]].

[F6] For real $0<q<1$, $\sum_{n\ge0}q^n=(1-q)^{-1}$. [[math:thm-geometric-series]]

[F7] The projection, multiplicativity and strong countable additivity requirements for a PVM, and its scalar-measure regularity requirement, are those of [[physics:def-projection-valued-measure]] and [[physics:def-regular-borel-measure-on-an-lch-space]]. When applying the spectral and trace suppliers, use their first-variable-linear pairing $(u,v)_1=\langle v,u\rangle_2$; this has the same norm, adjoints and quadratic projection measures as the Fock convention, and $(Tu,u)_1=\langle u,Tu\rangle_2$.

[F8] Under Countable Choice, bounded Borel functions of a PVM on a nonzero complex Hilbert space have bounded operator integrals obtained by uniform simple approximation. [[physics:thm-bounded-borel-pvm-integral]]

[F9] Under Countable Choice, $f(P)$ has domain $\{\psi:\int|f|^2dP_\psi<\infty\}$ and acts by the norm limit of bounded truncation integrals. Functions agreeing outside a $P$-null set define the same operator and domain. [[physics:def-unbounded-integral-against-a-pvm]]

[A1] Full Choice and Countable Choice are assumed for the cited spectral and Fock constructions. [[math:def-axiom-of-choice]] [[math:def-countable-choice]]

## Proof

**Goal:** Establish the normalization, the four families of moments, and the stated domains.

1.1 For $\mathbf n\in\mathbb N^m$ put $N=\sum_jn_j$, $t_{\mathbf n}=e_1^{\otimes n_1}\otimes\cdots\otimes e_m^{\otimes n_m}$, $C_{\mathbf n}=N!/\prod_j n_j!$, and $|\mathbf n\rangle=\sqrt{C_{\mathbf n}}P_{s,N}t_{\mathbf n}$, with the vacuum at $N=0$. There are $C_{\mathbf n}$ distinct tensor words with these occupations, each occurring $\prod_jn_j!$ times in the permutation average, so $P_{s,N}t_{\mathbf n}$ is their average. These words are orthonormal by the tensor inner product; hence $\|P_{s,N}t_{\mathbf n}\|^2=C_{\mathbf n}^{-1}$. Distinct occupations give orthogonal vectors, and all symmetrized elementary basis tensors occur this way, so these vectors span the symmetric $N$-particle sector. Thus the occupation vectors form an orthonormal basis of Fock space, and their finite span is the finite-particle subspace, because every fixed-particle sector is finite-dimensional. These are also the vectors obtained from successive applications of the explicit maps in [F2], whose binomial normalization factors multiply to $\sqrt{C_{\mathbf n}}$. This identification uses only the splitting maps, without assuming any intertwining for complementary modes. [F1, F2, A1, construct, algebra]

1.2 Put $q_j=e^{-\beta\omega_j}\in(0,1)$ and $w_{\mathbf n}=\prod_jq_j^{n_j}$. For $0<q<1$, finite summation gives $(1-q)\sum_{n=0}^M n q^n=\sum_{n=1}^Mq^n-Mq^{M+1}$. To see $Mq^{M+1}\to0$, choose $q<r<1$; the ratio of successive positive terms is $q(1+1/M)\le r$ for sufficiently large $M$, and a geometric bound applies. Therefore [F6] gives $\sum_{n\ge0}nq^n=q/(1-q)^2$ and $\sum_{n\ge0}(n+1)q^n=(1-q)^{-2}$. Taking finite rectangular sums and then their increasing limits shows $\sum_{\mathbf n}w_{\mathbf n}(2+\sum_jn_j)<\infty$. [F6, algebra]

2.1 The sector creation formula in [F1] and invariance of the full permutation average under prior symmetrization give $a_j^\dagger|\mathbf n\rangle=\sqrt{N+1}\sqrt{C_{\mathbf n}/C_{\mathbf n+\mathbf e_j}}|\mathbf n+\mathbf e_j\rangle=\sqrt{n_j+1}|\mathbf n+\mathbf e_j\rangle$, where $\mathbf e_j$ is the unit occupation vector. For $N>0$ and $n_j>0$, exactly the fraction $n_j/N$ of the words in step 1.1 have first factor $e_j$; contraction by $e_j$ leaves the uniform average of the words with occupation $\mathbf n-\mathbf e_j$. Thus $a_j|\mathbf n\rangle=\sqrt N(n_j/N)\sqrt{C_{\mathbf n}/C_{\mathbf n-\mathbf e_j}}|\mathbf n-\mathbf e_j\rangle=\sqrt{n_j}|\mathbf n-\mathbf e_j\rangle$. It is zero if $n_j=0$, including the vacuum. This proves both ladder formulas on the same basis for every $j$ directly from the sector definitions. Consequently $\sum_j\omega_j a_j^\dagger a_j$ has eigenvalue $E_{\mathbf n}=\sum_j\omega_j n_j$ on that finite span. [step 1.1, F1, algebra]

3.1 For a Borel set $B\subseteq\mathbb R$, define $P(B)\psi=\sum_{E_{\mathbf n}\in B}c_{\mathbf n}|\mathbf n\rangle$, where $c_{\mathbf n}=\langle\mathbf n|\psi\rangle$. These are coordinate orthogonal projections, $P(\mathbb R)=I$, $P(\varnothing)=0$, and $P(B)P(C)=P(B\cap C)$. For pairwise disjoint Borel sets, the corresponding coordinate selections are orthogonal and their squared norms sum to at most $\|\psi\|^2$, proving strong countable additivity. The scalar measure is $P_\psi(B)=\sum_{E_{\mathbf n}\in B}|c_{\mathbf n}|^2$. It is finite and regular: given $\varepsilon>0$, choose a finite set of occupation indices whose omitted squared coefficients sum to less than $\varepsilon$. For any Borel $B$, the energies in $B$ of these selected indices form a finite compact subset $K\subseteq B$ with $P_\psi(B\setminus K)<\varepsilon$. The open set obtained by deleting their finitely many energies outside $B$ contains $B$ and has excess measure less than $\varepsilon$. This proves compact inner and open outer approximation for every Borel set; finiteness gives local finiteness as well. Hence $P$ is a regular PVM on $\mathbb R$, supported on $[0,\infty)$. [step 1.1, step 2.1, F7, A1, construct, algebra]

4.1 For any bounded Borel $f$, first evaluate simple integrals on an occupation vector, obtaining $f(E_{\mathbf n})|\mathbf n\rangle$; uniform approximation in [F8] proves the same formula for $f(P)$. Thus [F9] gives $D(\int\lambda\,dP)=\{\psi:\sum_{\mathbf n}E_{\mathbf n}^2|c_{\mathbf n}|^2<\infty\}$ and the coordinate action $c_{\mathbf n}\mapsto E_{\mathbf n}c_{\mathbf n}$. By [F3] this operator is self-adjoint with spectral PVM $P$. Truncating occupation coordinates, for example to $\sum_j n_j\le M$, converges in its graph norm, so by step 2.1 it is exactly the closure $H$ in the Statement. It is nonnegative, since its quadratic form on its operator domain is $\sum_{\mathbf n}E_{\mathbf n}|c_{\mathbf n}|^2\ge0$. Because $P((-\infty,0))=0$, [F9] permits replacing the exponential function by the bounded Borel function $f_\beta(\lambda)=e^{-\beta\max(\lambda,0)}$. Its integral therefore is $e^{-\beta H}$ and acts on $|\mathbf n\rangle$ by $w_{\mathbf n}$. [step 1.1, step 2.1, step 1.2, step 3.1, F3, F8, F9, A1, algebra]

5.1 Repeated finite rectangular sums, their increasing limits, and [F6] give $\sum_{\mathbf n}w_{\mathbf n}=\prod_j(1-q_j)^{-1}<\infty$. The diagonal expansion of $e^{-\beta H}$ has rank-one norms $w_{\mathbf n}$, so its finite sums converge in operator norm. The limit is compact: for each positive tolerance, a finite-rank approximation maps the unit ball into a bounded finite-dimensional set with a finite net, and the norm error supplies a finite net for the image under the limit; its closure is complete in the Hilbert space. It is trace class by [F5], with trace the displayed positive sum. Step 1.1 supplies a countable orthonormal basis, hence a nonzero separable complex Hilbert space. The same argument holds for every $\beta>0$, so [F4] applies on the open interval $(0,\infty)$ and gives the density operator $\rho_\beta$. [step 1.1, step 1.2, step 4.1, F4, F5, F6, A1, algebra]

6.1 Write a product of two ladder operators as $X=BC$, with $C$ acting first. Each maps an occupation vector to a single occupation vector or zero. If $N=\sum_jn_j$, the first coefficient has modulus at most $\sqrt{N+1}$ and, after this operation, total occupation is at most $N+1$, so the second coefficient is at most $\sqrt{N+2}$. Thus $\|X|\mathbf n\rangle\|\le\sqrt{(N+1)(N+2)}\le N+2$. For $\psi=\sum c_{\mathbf n}|\mathbf n\rangle$, let $u_M=Z^{-1}\sum_{N\le M}w_{\mathbf n}c_{\mathbf n}|\mathbf n\rangle$. Then $u_M\to\rho_\beta\psi$. Both $Cu_M$ and $BCu_M$ converge absolutely in norm: $|c_{\mathbf n}|\le\|\psi\|$, the first coefficient is at most $\sqrt{N+1}\le N+2$, and $\sum_{\mathbf n}w_{\mathbf n}(N+2)<\infty$ by step 1.2. Closedness of $C$ first gives $\rho_\beta\psi\in D(C)$ and $Cu_M\to C\rho_\beta\psi$; closedness of $B$ then gives $C\rho_\beta\psi\in D(B)$ and the required image. Hence $X\rho_\beta$ is defined on all of Fock space. Its occupation expansion has sum of rank-one norms at most $Z^{-1}\sum_{\mathbf n}w_{\mathbf n}(2+\sum_jn_j)<\infty$, and thus converges in operator norm. It is compact by the finite-net argument of step 5.1, trace class by [F5], and its trace is the sum of its diagonal occupation matrix elements. [step 2.1, step 1.2, step 5.1, F1, F5, algebra]

7.1 For $i\ne j$, both normal and antinormal products change the occupation vector, so their diagonal matrix elements vanish. For $i=j$, they are respectively $n_j$ and $n_j+1$. Products of two annihilations or two creations always change total particle number by two and therefore have zero diagonal matrix elements. Using step 1.2 and the product normalization gives $\langle a_j^\dagger a_j\rangle_\beta=q_j/(1-q_j)=(e^{\beta\omega_j}-1)^{-1}$ and $\langle a_j a_j^\dagger\rangle_\beta=(1-q_j)^{-1}=1+(e^{\beta\omega_j}-1)^{-1}$. Absolute convergence and the trace-class domains are supplied by step 6.1. These are all the claimed moments; no infinite-volume limit has been invoked. [step 2.1, step 1.2, step 5.1, step 6.1, algebra] ∎
