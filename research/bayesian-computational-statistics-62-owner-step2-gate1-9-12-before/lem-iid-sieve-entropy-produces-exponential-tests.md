---
id: lem-iid-sieve-entropy-produces-exponential-tests
kind: lemma
title: "Sieve metric entropy produces uniform exponential tests"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-hellinger-distance-between-density-laws
  - lem-hellinger-distance-controls-l1-and-total-variation
  - lem-iid-bounded-variance-bernstein-tail
  - def-total-variation-distance-for-probability-laws
  - def-measure-with-density
  - def-identically-distributed-and-iid-random-variables
  - lem-measurable-functions-preserve-independence
  - thm-grouping-independent-sigma-algebras
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-minkowski-inequality-for-integrals
  - thm-holder-inequality-for-integrals
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - thm-derivative-of-exponential
  - lem-probability-measure-basic-identities
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Subhashis Ghosal, Jayanta K. Ghosh and Aad W. van der Vaart, Convergence rates of posterior distributions, Theorem 7.1 and proof"
      url: "https://doi.org/10.1214/aos/1016218228"
    - title: "Subhashis Ghosal, The Dirichlet Process, Related Priors and Posterior Asymptotics, §2.5.2"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf"
    - title: "B. J. K. Kleijn, Bayesian Statistics for Frequentists, §6.4.4"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf"
    - title: "Joel A. Tropp, Probability in High Dimensions, Caltech ACM 217 lecture notes, Lecture 4"
      url: "https://tropp.caltech.edu/notes/Tro21-Probability-High-LN-corr.pdf"
---

## Statement

Let $(\mathsf X,\mathcal A,\mu)$ be a measure space with a fixed sigma-finite measure. A probability density is a finite-valued nonnegative measurable $p$ with $\int p\,d\mu=1$, and its induced law is $P_p=p\,d\mu$ as in [[def-measure-with-density]]. Let $p_0$ be a probability density and write $P_0:=p_0\,d\mu$. Let $\mathcal F$ be a family of such densities, write $P_p:=p\,d\mu$ for $p\in\mathcal F$, and let $\mathcal F_n\subseteq\mathcal F$ be nonempty. Let $X_1,\ldots,X_n$ be IID under each law used below. The selected metric $d$ is one of:

- the root-L2 Hellinger distance $h$ of [[def-hellinger-distance-between-density-laws]];
- the full density distance $d_1(p,q):=\int|p-q|\,d\mu$;
- the density distance $d_2(p,q):=(\int|p-q|^2\,d\mu)^{1/2}$, provided a fixed $B>0$ bounds $p_0$ and every $p\in\mathcal F$ by $B$ almost everywhere.

For $r>0$, let $D(r,\mathcal F_n,d)$ be the supremum of the cardinalities of finite subsets of $\mathcal F_n$ whose distinct points have $d$-distance greater than $r$. Suppose $\epsilon_n>0$, $\epsilon_n\to0$, $n\epsilon_n^2\to\infty$, and
$$\log D(\epsilon_n,\mathcal F_n,d)\le n\epsilon_n^2.$$
Then for every fixed $M\ge128$ and all sufficiently large $n$, there is a measurable test $\phi_n:\mathsf X^n\to\{0,1\}$ such that, for some $c_d>0$ depending only on the selected metric (and on $B$ in the $d_2$ case),
$$P_0^n(\phi_n=1)\le2e^{-(c_dM^2-1)n\epsilon_n^2},$$
and $P_p^n(\phi_n=0)\le e^{-c_dM^2n\epsilon_n^2}$ for every $p\in\mathcal F_n$ with $d(p,p_0)>M\epsilon_n$.

The entropy metric is the same metric used in the separation and test-error conclusion. The $d_1$ convention is the full integral $\int|p-q|\,d\mu$, which equals twice the library event-supremum total variation distance.

## Facts & Assumptions

**Given:** A sigma-finite measure $\mu$, a density family $\mathcal F$, its nonempty subset $\mathcal F_n$, density $p_0$, a selected metric $d$ from the Statement, and a sequence $\epsilon_n$ satisfying the stated entropy and rate conditions.

[A2] In the $d_2$ branch only, assume $p_0$ and every model density satisfy $0\le p\le B$ $\mu$-almost everywhere for one fixed finite $B>0$.

[F1] [[def-hellinger-distance-between-density-laws]]: $h(P,Q)=\lVert\sqrt p-\sqrt q\rVert_2$ under the fixed common dominator.

[F2] [[lem-hellinger-distance-controls-l1-and-total-variation]]: $h$ satisfies the triangle inequality, $d_1(p,q)\le2h(P,Q)$, and $\lVert P-Q\rVert_{\rm TV}\le h(P,Q)$.

[F3] [[def-total-variation-distance-for-probability-laws]]: for probability laws, $\lVert P-Q\rVert_{\rm TV}=\sup_A|P(A)-Q(A)|$.

[F4] [[lem-iid-bounded-variance-bernstein-tail]]: for independent centered variables bounded in absolute value by $b$ with total variance $V$, each one-sided tail at $t>0$ is at most $\exp[-t^2/(2(V+bt/3))]$.

[F5] [[def-identically-distributed-and-iid-random-variables]]: an IID sample is mutually independent and has one common law.

[F6] [[lem-measurable-functions-preserve-independence]] and [[thm-grouping-independent-sigma-algebras]]: measurable functions of independent coordinates remain independent, and disjoint finite coordinate blocks are independent.

[F7] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions on sigma-finite product spaces may be integrated in either order.

[F9] [[thm-minkowski-inequality-for-integrals]]: $L^1$ and $L^2$ norms satisfy the triangle inequality.

[F10] [[thm-holder-inequality-for-integrals]]: the integral Cauchy–Schwarz inequality holds for two $L^2$ functions.

[F11] [[def-natural-logarithm]], [[def-real-exponential-function-and-e]] and [[thm-exponential-is-strictly-increasing]]: the natural logarithm is increasing and inverse to the real exponential, whose power series has nonnegative terms at positive arguments.

[F12] [[thm-derivative-of-exponential]]: the derivative of $e^x$ is $e^x$.

[F13] [[lem-probability-measure-basic-identities]]: the probability of a finite union is at most the sum of the event probabilities.

[F14] [[def-measure-with-density]]: the law associated with a nonnegative measurable density $p$ is the measure $P_p(A)=\int_Ap\,d\mu$.

[F15] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: sums, differences, products, and lattice operations on measurable functions preserve measurability.

[F16] [[thm-composition-with-borel-functions-preserves-measurability]]: composing measurable functions with Borel maps preserves measurability, including square roots, signs, and threshold events used below.

[F17] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] and [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: the nonnegative integral preserves order, is additive, and is homogeneous under positive finite scalars.

## Proof

1.1 Put $\eta:=1/128$ and, for integers $j\ge0$, set $a_j:=(M+j)\epsilon_n$ and $S_{n,j}:=\{p\in\mathcal F_n:a_j<d(p,p_0)\le a_j+\epsilon_n\}$. These shells cover every $p$ with $d(p,p_0)>M\epsilon_n$. The selected metrics are bounded on probability densities: $h^2\le2$ by [F1], $d_1\le2$ by [F17] and the unit-mass densities, and in the $d_2$ branch only, [A2] and [F17] give $d_2^2\le\int(p+p_0)^2d\mu\le2B\int(p+p_0)d\mu=4B$. Thus only finitely many shells are nonempty for fixed $n$. For each nonempty shell choose a maximal subset $Q_{n,j}\subseteq S_{n,j}$ whose distinct points are more than $r_j:=\eta a_j$ apart. Since $a_j\ge M\epsilon_n$ and $M\ge128$, $r_j\ge\epsilon_n$; its size is at most $D(\epsilon_n,\mathcal F_n,d)\le e^{n\epsilon_n^2}$. Maximality puts every shell member within $r_j$ of a center, and the triangle inequality gives $d(q,p_0)>(1-\eta)a_j$ for each center. Only finitely many choices are made for each $n$, so no arbitrary-index choice axiom is used to form the nets. [A2, F1, F2, F5, F9, F14, F17, given, choose]

1.2 Now let $d=d_1$. For a center $q$ in shell $j$, put $s:=d_1(q,p_0)>(1-\eta)a$, $r=\eta a$, and $f(x):=\operatorname{sign}(q(x)-p_0(x))$, with $\operatorname{sign}(0)=1$. By [F15, F16], $f$ is measurable, so its sample mean and threshold event are measurable. Then $|f|\le1$, $P_qf-P_0f=s$, and every $p$ with $d_1(p,q)\le r$ satisfies $P_pf-P_0f\ge\Delta:=s-r>(1-2\eta)a$. Test by whether the sample mean of $f(X_i)$ is at least $P_0f+\Delta/2$. Under either law, the centered summands have variance at most one and absolute value at most two; also $\Delta\le s\le2$. Bernstein [F4] with $t=n\Delta/2$, total variance at most $n$ and bound $b=2$ gives exponent at least $n\Delta^2/[8(1+\Delta/3)]\ge3n\Delta^2/40$, so each error is at most $\exp(-3n\Delta^2/40)$. Thus this branch has $c_1=3(1-2\eta)^2/40$. [F4, F15, F16, given, construct, algebra]

1.3 Now let $d=d_2$ and assume [A2]. At center $q$, put $s:=\lVert q-p_0\rVert_2>(1-\eta)a$, $r=\eta a$, and $f:=q-p_0$. This is measurable by [F15]. Then $P_qf-P_0f=s^2$. Since $r/s<\eta/(1-\eta)<1/2$, every $p$ with $\lVert p-q\rVert_2\le r$ satisfies, by [F10], $P_pf-P_0f\ge\Delta:=s^2-rs\ge s^2/2$. Also $\Delta\le s^2$, $\mathbb E_R f(X)^2\le B s^2$ for $R=P_0$ or $P$ by [A2] and monotonicity [F17], and $|f(X)-R f|\le2B$ under either law because $|f|\le B$. Testing the sample mean at threshold $P_0f+\Delta/2$ and applying [F4] with total variance at most $nBs^2$, bound $b=2B$, and $t=n\Delta/2$ gives exponent at least $3ns^2/(128B)\ge3na^2/(512B)$. Thus each error is at most $\exp(-3na^2/(512B))$ and $c_2=3/(512B)$. [A2, F4, F10, F15, F17, given, construct, algebra]

2.1 Fix a nonempty shell, write $a:=a_j$, $r:=\eta a$, and let $q\in Q_{n,j}$. First consider $d=h$. Write $s_0=(1-\eta)a$ and $\rho:=\int\sqrt{p_0q}\,d\mu=1-h(P_0,Q)^2/2$. By [F10], $0\le\rho\le1$; the affinity integrand is measurable by [F15, F16]. Since $h(P_0,Q)>s_0$, this gives $\rho\le1-s_0^2/2$. By step 1.1 and nonemptiness, $s_0^2\le2$. Set $m:=\lceil2\log(8)/s_0^2\rceil$. For $u=s_0^2/2\in[0,1]$, $e^{-u}-(1-u)$ has value zero at $u=0$ and derivative $1-e^{-u}\ge0$ by monotonicity of the exponential; hence $1-u\le e^{-u}$. On a block of $m$ observations use $T=\mathbf1\{\prod_{i=1}^m q(X_i)>\prod_{i=1}^m p_0(X_i)\}$. The products and comparison event are measurable by [F15, F16]. Tonelli on the finite product space gives product affinity $\rho^m$, and $\rho^m\le(1-u)^m\le e^{-mu}\le1/8$. Its type-I error under $P_0^m$ is at most this affinity, since on $T=1$ the product density $p_0^{\otimes m}$ is at most $\sqrt{p_0^{\otimes m}q^{\otimes m}}$; its type-II error under $Q^m$ is at most the same bound by the symmetric inequality on $T=0$. [F7, F10, F11, F12, F15, F16, step 1.1, given, construct]

3.1 If $p$ lies in the Hellinger ball $h(P,Q)\le r$, then Tonelli on the measurable product densities gives $h(P^m,Q^m)^2=2(1-\rho(P,Q)^m)\le m h(P,Q)^2$, since $1-z^m=(1-z)(1+z+\cdots+z^{m-1})\le m(1-z)$ for $0\le z\le1$. By [F2], $\lVert P^m-Q^m\rVert_{\rm TV}\le h(P^m,Q^m)\le\sqrt m\,r$. Since $a\le\sqrt2$ for a nonempty Hellinger shell, $s_0^2\le2$, $m\le8/s_0^2$, and $m r^2\le8\eta^2/(1-\eta)^2<1/64$, so $\sqrt m\,r<1/8$. Indeed, [F11] gives $e^3>1+3+9/2>8$, hence $\log8<3$; also $1-\eta>1/2$. For the event $\{T=0\}$, the change in probability from $Q^m$ to $P^m$ is at most TV, so the type-II error is at most $1/8+1/8=1/4$ uniformly over this ball. [F2, F3, F7, F11, F15, F16, step 2.1, algebra]

4.1 Divide the first $Nm$ observations into $N:=\lfloor n/m\rfloor$ disjoint blocks and reject when at least half of their block tests reject. The block indicators are independent under both $P_0^n$ and $P^n$ by [F5]–[F6]. Under $P_0$, each has mean at most $1/8$; under the ball alternatives each has mean at least $3/4$. Their variances are at most $1/4$ and their centered absolute values at most one. Under $P_0$, rejection forces an upward deviation at least $3N/8$, so [F4] gives $\exp[-(3N/8)^2/(2(N/4+(3N/8)/3))]=e^{-3N/16}\le e^{-3N/32}$. Under an alternative, acceptance forces a downward deviation at least $N/4$, so [F4] gives $\exp[-(N/4)^2/(2(N/4+(N/4)/3))]=e^{-3N/32}$. Since $m\le32/a^2$, $na^2\to\infty$ implies $n/m\ge2$ eventually and $N\ge n/(2m)\ge na^2/64$; hence both errors are at most $e^{-3na^2/2048}$. Thus $c_h=3/2048$. [F4, F5, F6, step 3.1, algebra]

5.1 In the selected branch let $c_d$ be its constant from steps 4.1, 1.2, or 1.3. If there are no nonempty shells, the alternative set is empty and define $\phi_n\equiv0$. Otherwise choose each center's local test and let $\phi_n$ be their maximum over the finitely many centers in the nonempty shells. The local tests are measurable by the density-difference, product, and threshold measurability in [F15, F16]; a finite maximum remains measurable. For a fixed alternative in shell $j$, its nearby center supplies type-II error at most $e^{-c_dn a_j^2}\le e^{-c_dM^2n\epsilon_n^2}$. For type I, the union bound over at most $e^{n\epsilon_n^2}$ centers per shell gives $P_0^n(\phi_n=1)\le e^{n\epsilon_n^2}\sum_{j=0}^\infty e^{-c_dn(M+j)^2\epsilon_n^2}\le2e^{-(c_dM^2-1)n\epsilon_n^2}$ for all sufficiently large $n$: writing $x=n\epsilon_n^2$, the sum is $e^{-c_dM^2x}\sum_{j=0}^\infty e^{-c_dx(2Mj+j^2)}$, whose consecutive-term ratio is at most $e^{-c_dx(2M+1)}\le1/2$. This proves the two test bounds for the same metric used in the packing condition. [F4, F13, F15, F16, step 1.1, step 4.1, step 1.2, step 1.3, algebra] ∎
