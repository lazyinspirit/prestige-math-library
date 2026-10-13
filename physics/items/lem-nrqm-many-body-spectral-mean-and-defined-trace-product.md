---
id: lem-nrqm-many-body-spectral-mean-and-defined-trace-product
kind: lemma
domain: mathematics
title: "Spectral first moments and trace products with a density operator"
status: draft
origin: pipeline
dependency_level: 2
deps: [thm-zorn, thm-parseval-equivalences-for-a-complete-orthonormal-family, lem-finite-rank-operators-are-compact, thm-norm-limit-of-compact-operators-is-compact, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice, def-axiom-of-choice, def-hilbert-space, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-nuclear-bounded-cyclicity, thm-trace-is-absolutely-convergent-and-basis-independent, lem-nuclear-series-characterizes-trace-norm, thm-bounded-borel-pvm-integral, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-hilbert-space-fourier-expansion]
dependency_roles:
  thm-zorn: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-hilbert-space-fourier-expansion: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, Chapters 2-3: density eigenexpansions and spectral integrals; the typed-product comparison is proved locally here"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $A$ be a self-adjoint operator on a nonzero complex Hilbert space, let $E_A$ be its spectral PVM, let $\rho$ be a density operator, and set $\mu_\rho^A(B):=\operatorname{tr}(\rho E_A(B))$. Then:

(a) The finite first mean is defined exactly under the absolute-first-moment condition
$$\int_{\mathbb R}|a|\,d\mu_\rho^A(a)<\infty,$$
and its value is $m:=\int a\,d\mu_\rho^A(a)$. For every positive-eigenvalue expansion $\rho=\sum_kw_kT_{u_k,u_k}$ of [[lem-nrqm-composites-density-and-scalar-spectral-probability]] (a), with $w_k>0$ and $\sum_kw_k=1$, one has
$$\int|a|\,d\mu_\rho^A=\sum_kw_k\int|a|\,dE_{A,u_k},\qquad m=\sum_kw_k\int a\,dE_{A,u_k}.$$
The first identity allows infinity; the second is asserted under the stated integrability condition and converges absolutely. This condition does not require $u_k\in D(A)$.

(b) If $A$ is bounded, the condition in (a) holds automatically and
$$m=\operatorname{tr}(A\rho)=\operatorname{tr}(\rho A).$$

(c) Suppose the condition in (a) holds and the **literal product** $A\rho$ is defined on the whole Hilbert space and is trace class; thus $\rho(H)\subset D(A)$ and $T:=A\rho\in\mathcal S_1(H)$. Then
$$m=\operatorname{tr}(T).$$
Moreover the densely defined product $\rho A$ has bounded closure $T^*$, that closure is trace class, and $\operatorname{tr}(\overline{\rho A})=m$. This is a conditional trace identity for defined trace-class products. The existence of the mean alone does not assert any of these unbounded-operator product hypotheses.

## Facts & Assumptions

**Given:** The choice hypotheses, $A,E_A,\rho,\mu_\rho^A$, and in (c) the explicitly stated literal-product assumptions.

[F1] The density eigenexpansion has positive weights and orthonormal vectors, converges in trace norm, and gives $\mu_\rho^A(B)=\sum_kw_kE_{A,u_k}(B)$. For $u\in D(A)$, $\int a\,dE_{A,u}=\langle Au,u\rangle$; absolute first integrability alone is equivalent to $u\in D(|A|^{1/2})$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] (a)-(c)).

[F2] Nonnegative monotone limits commute with integrals, and integrable domination permits limits of signed integrals ([[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]]).

[F3] Bounded Borel spectral integrals agree with their scalar spectral integrals ([[thm-bounded-borel-pvm-integral]]). Bounded multiplication of a density eigenexpansion gives $\operatorname{tr}(A\rho)=\sum_kw_k\langle Au_k,u_k\rangle$ and bounded cyclicity gives $\operatorname{tr}(A\rho)=\operatorname{tr}(\rho A)$ ([[lem-nrqm-composites-nuclear-bounded-cyclicity]]).

[F4] A trace-class operator has its trace as an absolutely convergent diagonal in a supplied Hilbert basis; it also has a nuclear representation whose rank-one traces sum to its trace ([[thm-trace-is-absolutely-convergent-and-basis-independent]], [[lem-nuclear-series-characterizes-trace-norm]]). Under AC, order the set of orthonormal families containing the given family by inclusion. This poset is nonempty because it contains the given family. Every nonempty chain has its orthonormal union as an upper bound in this poset; the empty chain has the given family as an upper bound. Thus [[thm-zorn]] provides a maximal extension. Its orthogonal complement is zero by maximality, hence it is complete by [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]. Coordinate expansion is [[thm-hilbert-space-fourier-expansion]]. Finite-rank maps and their operator-norm limits are compact ([[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]]).

## Proof

**Proof technique:** direct; integrate the density eigenexpansion and compare it with correctly defined trace products.

**Given:** The data of the statement and [F1]-[F4].

1.1 [First-moment expansion] By [F1] the outcome measure is the countable weighted sum of the scalar measures. This gives $\int g\,d\mu_\rho^A=\sum_kw_k\int g\,dE_{A,u_k}$ first for nonnegative simple functions by the measure identity and finite linearity, and then for all nonnegative measurable $g$ by increasing simple approximation and [F2]; the nonnegative sums interchange as increasing finite subsums. Taking $g=|a|$ gives the first identity in (a), including infinity. When it is finite, both positive and negative parts are integrable, so subtracting their two finite sums gives $m=\sum_kw_k\int a\,dE_{A,u_k}$ with $\sum_kw_k|\int a\,dE_{A,u_k}|\le\sum_kw_k\int|a|\,dE_{A,u_k}<\infty$. For each positive $w_k$, only absolute first integrability is forced; [F1] identifies its form domain, without requiring the operator-square moment. This proves (a). [F1, F2, algebra]

2.1 [Bounded observable] If $A$ is bounded, every $u_k$ is in $D(A)$, and Cauchy-Schwarz for the scalar probability measure gives $\int|a|\,dE_{A,u_k}\le(\int a^2\,dE_{A,u_k})^{1/2}=\|Au_k\|\le\|A\|$ by [F1] ([[cor-cauchy-schwarz-inequality-for-l-two]]). Step 1.1 therefore bounds the first absolute moment by $\|A\|$. Each $u_k$ is in $D(A)$ and [F1] gives $\int a\,dE_{A,u_k}=\langle Au_k,u_k\rangle$. Thus step 1.1 and the bounded trace formula [F3] give $m=\sum_kw_k\langle Au_k,u_k\rangle=\operatorname{tr}(A\rho)=\operatorname{tr}(\rho A)$. This proves (b). [F1, F3, step 1.1, algebra]

2.2 [Literal trace-class left product] Under (c), $\rho u_k=w_ku_k\in D(A)$ and $w_k>0$, so each $u_k\in D(A)$ and $Tu_k=w_kAu_k$. Complete the orthonormal eigenfamily by an orthonormal basis of its perpendicular subspace using the already assumed AC. The density eigenexpansion shows $\rho=0$ on that perpendicular subspace, so $T=0$ there. The trace diagonal formula [F4] therefore gives $\operatorname{tr}(T)=\sum_k\langle Tu_k,u_k\rangle=\sum_kw_k\langle Au_k,u_k\rangle$. Step 1.1 and [F1] identify this absolutely convergent scalar sum with $m$. This proof uses the literal-product hypothesis to obtain $u_k\in D(A)$; it does not infer that hypothesis from first-moment existence. [F1, F4, step 1.1, choose, algebra]

3.1 [Closure of the right product] For $x\in D(A)$ and arbitrary $y$, self-adjointness of $A$ and $\rho$ gives $\langle\rho Ax,y\rangle=\langle Ax,\rho y\rangle=\langle x,A\rho y\rangle=\langle x,Ty\rangle=\langle T^*x,y\rangle$, so $\rho A$ agrees with the bounded $T^*$ on the dense domain $D(A)$. Its graph closure is all of the graph of $T^*$: approximate any $x$ by $x_l\in D(A)$ and use boundedness of $T^*$, while its closed graph contains every graph limit from that restriction. A nuclear representation $T=\sum_jT_{v_j,z_j}$ gives $T^*=\sum_jT_{z_j,v_j}$ with the same summable nuclear norms; the operator-norm convergence of these finite-rank partial sums first gives compactness, and then the nuclear criterion gives trace class and [F4] gives $\operatorname{tr}(T^*)=\overline{\operatorname{tr}(T)}=m$, since the spectral integral $m$ is real. This proves (c), without invoking cyclicity for unbounded multipliers. [F4, step 2.2, algebra] ∎
