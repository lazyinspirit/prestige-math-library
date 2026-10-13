---
id: lem-nrqm-autonomous-dynamics-stationary-ray-characterization
aliases: [nrqm-autonomous-dynamics-stationary-ray-characterization]
kind: lemma
domain: mathematics
title: "Stationary rays of a self-adjoint flow are exactly the eigenrays"
status: published
origin: pipeline
dependency_level: 1
deps: [cor-finite-dimensional-subspaces-are-closed, def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-inner-product-space, def-projection-valued-measure, def-strongly-continuous-one-parameter-unitary-group, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-unbounded-integral-against-a-pvm, lem-closed-subspace-of-a-banach-space-is-banach, lem-nrqm-autonomous-dynamics-flow-calculus, lem-unbounded-pvm-integral-is-well-defined-and-closed, thm-bounded-borel-pvm-integral, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-stone-one-parameter-unitary-groups, thm-unbounded-borel-functional-calculus]
dependency_roles:
  cor-finite-dimensional-subspaces-are-closed: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-closed-subspace-of-a-banach-space-is-banach: mathematical-premise
  lem-nrqm-autonomous-dynamics-flow-calculus: mathematical-premise
  lem-unbounded-pvm-integral-is-well-defined-and-closed: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 3.1, printed pages 87-93 (the spectral theorem and the bounded functional calculus, including the identity ||P(f)psi||^2 = int |f|^2 d mu_psi), and Theorems 5.1-5.2, printed pages 123-125 (self-adjoint generators, domain invariance and the derivative characterization)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Section 3.1, printed pages 18-20 (Heisenberg operators, conservation and stationary states)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $H\ne\{0\}$ be a complex Hilbert space ([[def-hilbert-space]], [[def-inner-product-space]]), let $T$ be self-adjoint ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]) with spectral projection-valued measure $E$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]]), let $U(t)=e^{itT}=\int e^{it\lambda}\,dE(\lambda)$ be the generated strongly continuous unitary group ([[def-strongly-continuous-one-parameter-unitary-group]], [[def-unbounded-integral-against-a-pvm]]), and let $\psi\in H$ with $\psi\ne0$. Then the following are equivalent:

(i) for every $t\in\mathbb R$ the vector $U(t)\psi$ is a complex multiple of $\psi$ (the ray of $\psi$ is invariant under the flow);

(ii) $\psi\in D(T)$ and $T\psi=\lambda\psi$ for some $\lambda\in\mathbb R$ (the ray of $\psi$ is an eigenray of $T$).

If these hold for the eigenvalue $\lambda$, then $U(t)\psi=e^{it\lambda}\psi$ for every $t\in\mathbb R$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Countable Choice; a nonzero complex Hilbert space $H$; a self-adjoint operator $T$ with spectral PVM $E$ and flow $U(t)=\int e^{it\lambda}\,dE(\lambda)$; a nonzero vector $\psi\in H$.

[F1] **Flow and domain.** $U$ is a strongly continuous one-parameter unitary group, $U(t)D(T)=D(T)$, and for $u\in D(T)$ the difference quotient $\frac1s\bigl(U(s)u-u\bigr)$ converges to $iTu$ as $s\to0$, while for $u\notin D(T)$ it does not converge; moreover $E(B)U(t)=U(t)E(B)$ for every Borel $B$ ([[lem-nrqm-autonomous-dynamics-flow-calculus]] clause (a)-(c)).

[F2] **Flow as a bounded function of $T$.** $U(t)=\Phi_E(f_t)$ with $f_t(\lambda)=e^{it\lambda}$, and for $x\in H$ and bounded Borel $g$ one has $\|\Phi_E(g)x\|^{2}=\int|g|^{2}\,dE_x$, where $E_x(B)=\langle E(B)x,x\rangle$ ([[thm-bounded-borel-pvm-integral]] clause 2, [[lem-unbounded-pvm-integral-is-well-defined-and-closed]]).

[F3] **Eigenvector identity.** For $u\in D(T)$ and real $\mu$ one has $\|(T-\mu)u\|^{2}=\int(\lambda-\mu)^{2}\,dE_u(\lambda)$ ([[lem-unbounded-pvm-integral-is-well-defined-and-closed]]).

[F4] **Vanishing criterion.** If $g\ge0$ is measurable with $\int g\,dE_u=0$, then $g=0$ $E_u$-almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F5] **Closed subspaces and Stone's theorem.** The span $K=\mathbb Cu$ of a nonzero vector is closed ([[cor-finite-dimensional-subspaces-are-closed]]) and, with the restricted inner product, is a complex Hilbert space ([[def-hilbert-space]], [[lem-closed-subspace-of-a-banach-space-is-banach]]); a strongly continuous one-parameter unitary group on a complex Hilbert space equals $t\mapsto e^{itS}$ for a unique self-adjoint generator $S$, and $D(S)$ is exactly the set of vectors whose difference quotients converge, with limit $iSx$ ([[thm-stone-one-parameter-unitary-groups]], [[def-strongly-continuous-one-parameter-unitary-group]]).

[F6] **Reality of eigenvalues.** A self-adjoint operator is symmetric: $\langle Su,u\rangle=\langle u,Su\rangle$ for every $u\in D(S)$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]); if $Su=\lambda u$ with $u\ne0$ and $u\in D(S)$, then $\lambda\|u\|^{2}=\langle Su,u\rangle=\langle u,Su\rangle=\overline\lambda\,\|u\|^{2}$, so $\lambda\in\mathbb R$ ([[def-inner-product-space]]).

## Proof

**Proof technique:** direct; the forward implication reads the spectral measure of an eigenvector, the converse restricts the flow to the closed invariant span of $\psi$ and applies Stone's theorem there.

**Given:** The data of the statement, and [F1]-[F6].

1.1 [Eigenrays are stationary] Assume (ii): $T\psi=\lambda\psi$ with $\lambda\in\mathbb R$, and set $u:=\psi/\|\psi\|$, so that $Tu=\lambda u$ and $\|u\|=1$. By [F3], $\int(\lambda'-\lambda)^{2}\,dE_u(\lambda')=\|(T-\lambda)u\|^{2}=0$; the integrand is nonnegative and measurable, so by [F4] it vanishes $E_u$-almost everywhere, that is, $E_u(\mathbb R\setminus\{\lambda\})=0$. Fix $t$ and put $g_t(\lambda'):=e^{it\lambda'}-e^{it\lambda}$, a bounded Borel function vanishing $E_u$-almost everywhere; by [F2], $\|U(t)u-e^{it\lambda}u\|^{2}=\|\Phi_E(g_t)u\|^{2}=\int|g_t|^{2}\,dE_u=0$, so $U(t)u=e^{it\lambda}u$ and, multiplying by $\|\psi\|$, $U(t)\psi=e^{it\lambda}\psi$. In particular $U(t)\psi$ is a multiple of $\psi$ for every $t$, which is (i). The reality of $\lambda$ is [F6] applied to the unit vector $u$. [given, F2, F3, F4, F6, algebra]

1.2 [The invariant span] Assume (i). Multiplication by the nonzero scalar $\|\psi\|^{-1}$ shows that $u:=\psi/\|\psi\|$ satisfies $U(t)u=c(t)u$ with $c(t)\in\mathbb C$ for every $t$; since $U(t)$ is unitary and $\|u\|=1$, one has $|c(t)|=1$. By [F5], $K:=\mathbb Cu$ is a closed subspace of $H$ and, with the restricted inner product, a complex Hilbert space; by (i) each $U(t)$ maps $K$ into $K$, and because $U(t)^{-1}=U(-t)$ also maps $K$ into $K$, the restriction $W(t):=U(t)|_K$ is a bijection of $K$ onto itself. [given, F1, F5, algebra]

2.1 [The restricted group] The maps $W(t)$ are unitary on $K$: they are norm preserving on $K$ because $U(t)$ is, and they are onto $K$ by step 1.2. The group law $W(t+s)=W(t)W(s)$ and the continuity of $t\mapsto W(t)x$ for each $x\in K$ are inherited from $U$. Hence $W$ is a strongly continuous one-parameter unitary group on the Hilbert space $K$. [given, step 1.2, F1, F5]

3.1 [Generator on the span] By [F5] applied to $W$ on $K$, there is a self-adjoint operator $T_K$ on $K$ with $W(t)=e^{itT_K}$, whose domain $D(T_K)$ consists exactly of the vectors $x\in K$ for which $\frac1s(W(s)x-x)$ converges, the limit then being $iT_Kx$. A self-adjoint operator is densely defined ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]), so $D(T_K)$ is a dense subspace of the one-dimensional space $K$; hence $D(T_K)=K$ and $T_Ku=\lambda u$ for some $\lambda\in\mathbb C$. Since $T_K$ is symmetric on $K$ and $u\ne0$, [F6] gives $\lambda\in\mathbb R$. [given, step 2.1, F5, F6]

4.1 [Transfer to the ambient space] By step 3.1 and [F5], the difference quotient $\frac1s\bigl(W(s)u-u\bigr)=\frac1s\bigl(U(s)u-u\bigr)$ converges in $K$, hence in $H$, to $iT_Ku=i\lambda u$. By [F1], the quotient of the ambient flow converges exactly for vectors of $D(T)$, with limit $iT$ applied to the vector; therefore $u\in D(T)$ and $iTu=i\lambda u$, that is, $Tu=\lambda u$ with $\lambda\in\mathbb R$. Multiplying by $\|\psi\|$ gives $T\psi=\lambda\psi$ and $\psi\in D(T)$, which is (ii). [given, step 3.1, F1, F5, algebra]

5.1 Steps 1.1, 1.2, 2.1, 3.1 and 4.1 prove the equivalence and the additional display of the statement. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **Normalization is bookkeeping.** The proof normalizes $\psi$ only to use the unit vector in the inner-product computations of [F6] and step 1.1; the statement itself does not require $\|\psi\|=1$.
- **No converse beyond rays.** Clause (i) concerns the invariance of the ray; it does not claim that $U(t)\psi=\psi$ for an eigenvector, because the eigenvalue phase $e^{it\lambda}$ is present. The statement that the two vectors lie in one ray, hence determine the same pure preparation, is the content of the phase-invariance of states, not an equality of vectors.
