---
id: lem-qsm-trace-state-calculus
kind: lemma
title: Trace-state cyclicity and spectral probability calculus
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
- def-countable-choice
- def-axiom-of-choice
- def-qsm-density-trace-state
- def-trace-class-operator
- def-trace-of-a-trace-class-operator
- thm-trace-is-absolutely-convergent-and-basis-independent
- thm-trace-class-is-a-two-sided-banach-operator-ideal
- thm-spectral-theorem-for-compact-self-adjoint-operators
- thm-bounded-borel-pvm-integral
- thm-spectral-theorem-for-unbounded-self-adjoint-operators
- lem-nrqm-composites-density-and-scalar-spectral-probability
- lem-nrqm-composites-nuclear-bounded-cyclicity
dependency_roles:
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-qsm-density-trace-state: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.3, author-hosted manuscript
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
  - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
    url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

Let $H\ne\{0\}$ be a separable complex Hilbert space and $\rho$ a trace-class normal density state. Its positive eigenvalues $p_j$ and orthonormal eigenvectors $u_j$ satisfy $\rho=\sum_jp_j|u_j\rangle\langle u_j|$ in trace norm and $\sum_jp_j=1$. For bounded $A$, $\operatorname{Tr}(\rho A)=\sum_jp_j\langle Au_j,u_j\rangle$, with absolute value at most $\|A\|$, and $\operatorname{Tr}(\rho A)=\operatorname{Tr}(A\rho)$. For a self-adjoint observable $A$ with spectral PVM $E_A$, the scalar law
$
\mu_\rho(B)=\operatorname{Tr}(\rho E_A(B))=\sum_jp_j\|E_A(B)u_j\|^2
$
is a probability measure. Its first absolute moment defines a scalar mean, and its second moment defines a variance; these are not defined as arbitrary unbounded products $\rho A$. For a fixed positive Boltzmann scale $k_B>0$ (in SI units J/K), the von Neumann entropy is $S(\rho)=-k_B\sum_jp_j\log p_j\in[0,\infty]$, and need not be finite. Countable convex mixtures of normal density states converge in trace norm.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; a nonzero separable complex Hilbert space; a positive trace-class density $\rho$; a bounded operator $B$; a self-adjoint operator $A$ with its spectral PVM; and the positive scale $k_B>0$ for the entropy clause.

[A1] Countable Choice permits indexing the positive eigenvalues of a positive trace-class operator by a finite or countable set ([[def-countable-choice]]).

[A2] The full Axiom of Choice is assumed by the inherited unbounded spectral calculus used below ([[def-axiom-of-choice]]).

[F1] [[def-qsm-density-trace-state]]: a normal density state is represented by a positive trace-class $\rho$ with $\operatorname{Tr}\rho=1$, acting by the bounded trace pairing.

[F2] [[thm-spectral-theorem-for-compact-self-adjoint-operators]] and [[thm-trace-is-absolutely-convergent-and-basis-independent]]: a positive trace-class density has a finite or countable positive-eigenvalue expansion with trace equal to the sum of its eigenvalues.

[F3] [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]: multiplication by a bounded operator preserves trace class and is trace-norm continuous.

[F4] [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]: a self-adjoint operator has a regular spectral PVM and $D(A)=\{u:\int \lambda^2\,dE_u(\lambda)<\infty\}$.

[F5] [[thm-bounded-borel-pvm-integral]]: bounded Borel functions integrate against the spectral PVM with the stated pairing and norm identities.

[F6] [[lem-nrqm-composites-nuclear-bounded-cyclicity]], parts (a)–(b): under Countable Choice, trace-class $T$ and bounded $C$ have $\operatorname{Tr}(CT)=\operatorname{Tr}(TC)$, by absolutely convergent nuclear pairings. No unbounded cyclicity is used.

[F7] [[lem-nrqm-composites-density-and-scalar-spectral-probability]], parts (a)–(c): a trace-one positive density gives the scalar PVM probability law and scalar moments on their actual integrability domains; the unbounded spectral clauses retain full Choice.

## Proof

1.1 Since $\rho$ is the trace-one positive density of [F1], [F2] gives $\rho=\sum_jp_j|u_j\rangle\langle u_j|$, $p_j>0$, with $\sum_jp_j=\operatorname{Tr}\rho=1$, and trace-norm convergence. For bounded $B$, [F3] makes $\rho B$ trace class. Applying the basis-independent trace to finite partial sums and passing to the trace-norm limit gives $\operatorname{Tr}(\rho B)=\sum_jp_j\langle Bu_j,u_j\rangle$; its absolute sum is at most $\|B\|\sum_jp_j=\|B\|$. The bounded cyclicity statement in [F6] gives $\operatorname{Tr}(B\rho)=\operatorname{Tr}(\rho B)$. [given, A1, F1, F2, F3, F6, algebra]

1.2 Define the scalar mean only when $\int|\lambda|\,d\mu_\rho(\lambda)<\infty$, and define the variance only when $\int\lambda^2\,d\mu_\rho(\lambda)<\infty$. For a vector $u$, the PVM domain formula [F4] is the operator domain, while the first absolute moment defines the larger form domain $D(|A|^{1/2})=\{u:\int|\lambda|\,dE_u(\lambda)<\infty\}$. These definitions use scalar integrals and make no unbounded cyclic permutation. [given, F4, F5]

1.3 Since $0<p_j\leq1$, every term $-p_j\log p_j$ is nonnegative, so the entropy sum is well defined in $[0,\infty]$; multiplying by the given $k_B>0$ preserves that range. It can diverge: let $c^{-1}=\sum_{n\geq2}(n(\log n)^2)^{-1}$ and $p_n=c/(n(\log n)^2)$. The normalizing series converges because the block $2^k\leq n<2^{k+1}$ contributes at most $1/(k\log2)^2$, and $\sum_k k^{-2}$ converges by grouping dyadic blocks. For sufficiently large $n$, $-p_n\log p_n\geq c/(2n\log n)$. Each dyadic block contributes at least $1/(4(k+1)\log2)$ to $\sum_n1/(n\log n)$, so that entropy series diverges. [given, algebra]

2.1 For each Borel set $C\subseteq\mathbb R$, [F5] and step 1.1 give $\mu_\rho(C)=\sum_jp_j\|E_A(C)u_j\|^2\geq0$ and $\mu_\rho(\mathbb R)=\sum_jp_j=1$. For pairwise disjoint $C_k$, the PVM property gives $\|E_A(\bigcup_k C_k)u_j\|^2=\sum_k\|E_A(C_k)u_j\|^2$, since the projected vectors are orthogonal. The nonnegative double series may be summed in either order; therefore $\mu_\rho(\bigcup_kC_k)=\sum_k\mu_\rho(C_k)$. This proves that $\mu_\rho$ is a probability measure and agrees with the canonical scalar-law interface [F7]. [given, A2, step 1.1, F5, F7, algebra]

3.1 For densities $\rho_k$ and weights $t_k\geq0$, $\sum_kt_k=1$, the partial sums $\sum_{k\leq N}t_k\rho_k$ are Cauchy in trace norm because each $\|\rho_k\|_1=\operatorname{Tr}\rho_k=1$ and the tail norm is at most $\sum_{k>N}t_k$. Completeness in [F3] gives a trace-class limit. Its trace is one by [F2] and trace continuity; its quadratic forms are nonnegative as limits of nonnegative quadratic forms. Thus the countable mixture is again a normal density state and the convergence is in trace norm. [given, A1, F2, F3, algebra] ∎
