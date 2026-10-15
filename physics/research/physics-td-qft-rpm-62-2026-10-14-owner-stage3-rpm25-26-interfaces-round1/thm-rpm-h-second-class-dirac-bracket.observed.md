---
id: thm-rpm-h-second-class-dirac-bracket
kind: theorem
title: "Second-class constraints and the Dirac bracket"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-regular-constraint-system, def-symplectic-form-and-symplectic-manifold, thm-smooth-functions-form-a-poisson-algebra, thm-a-regular-level-set-is-an-embedded-submanifold]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-h-regular-constraint-system: mathematical-premise
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
  thm-smooth-functions-form-a-poisson-algebra: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
sources:
  references:
    - title: "Henneaux, Teitelboim and Regge, Constrained Hamiltonian Systems, Part 1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Chapter II, printed pp. 27–30; second-class constraints and bracket."
    - title: "Ghanashyam Date, Lectures on Constrained Systems, arXiv:1010.2062"
      url: "https://arxiv.org/pdf/1010.2062"
      locator: "§4, printed pp. 18–22."
physical_scope: "Local result on an open neighborhood where the constraint bracket matrix is invertible."
---

## Statement

Let $(P,\omega)$ be symplectic and let $\chi_1,\ldots,\chi_{2k}$ be smooth on an open set $U$, with $C_{ab}=\{\chi_a,\chi_b\}$ invertible at every point of $U$. Write $C^{ab}$ for its inverse and $N=\{\chi=0\}\cap U$. Then $N$ is an embedded symplectic submanifold, and the bracket

$$\{F,G\}_D=\{F,G\}-\{F,\chi_a\}C^{ab}\{\chi_b,G\}$$

is the Poisson bracket of the restricted symplectic form on $N$. It is independent of ambient extensions of $F,G$, and every $\chi_a$ is a Casimir. This is local and assumes invertibility on $U$; it does not cover singular points.

## Facts & Assumptions

**Given:** A symplectic manifold, an even family of smooth constraints, and an everywhere invertible bracket matrix on $U$.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-symplectic-form-and-symplectic-manifold]]: $\omega$ is closed and nondegenerate and defines Hamiltonian vector fields.

[F2] [[thm-smooth-functions-form-a-poisson-algebra]]: the ambient bracket is Poisson.

[F3] [[thm-a-regular-level-set-is-an-embedded-submanifold]]: independent differentials at a level yield an embedded level and the stated tangent kernel.

[F4] [[def-rpm-h-regular-constraint-system]]: $C_{ab}=\{\chi_a,\chi_b\}$ uses the canonical action-unit bracket convention; regularity is a separate hypothesis.

## Proof

1.1 If $\sum_a\lambda^a d\chi_a=0$, evaluate on each $X_{\chi_b}$. This gives $\sum_a\lambda^a C_{ba}=0$ for every $b$, so invertibility implies λ=0. The differentials are independent throughout $U$; [F3] makes each nonempty joint level embedded with tangent space $TN=\cap_a\ker d\chi_a$. [given, A1, F1, F3, F4, algebra]

2.1 For any $F$, set $X_F^D=X_F-X_{\chi_a}C^{ab}\{\chi_b,F\}$. Then $d\chi_c(X_F^D)=\{\chi_c,F\}-C_{ca}C^{ab}\{\chi_b,F\}=0$, so it is tangent to $N$. For tangent $v$, ω$(X_F^D,v)=dF(v)$, because $d\chi_a(v)=0$. [given, F1, F2, step 1.1, algebra]

3.1 A vector tangent to $N$ in the radical of $\omega|_N$ lies in $(TN)^\omega$, which is spanned by the independent $X_{\chi_a}$ because the annihilator of $TN$ is spanned by independent $d\chi_a$ and $\omega^\flat$ is an isomorphism. Tangency of a linear combination of these fields gives a coefficient vector annihilated by $C$, hence zero. Thus $\omega|_N$ is nondegenerate; it is closed by pullback of $d\omega=0$. [given, F1, step 1.1, step 2.1, algebra]

4.1 Contracting the tangent field $X_F^D$ with (dG) gives $X_F^D(G)=\{G,F\}-\{G,\chi_a\}C^{ab}\{\chi_b,F\}=\{G,F\}_D$ with the declared convention after skewness and $C^{ab}=-C^{ba}$. Since $X_F^D$ is exactly the Hamiltonian field on $N$ proved in step 2.1, the bracket is the induced symplectic Poisson bracket and obeys Jacobi by [F2] applied to the symplectic $N$. If an extension vanishes on $N$, its tangent differential vanishes, so its restricted Hamiltonian field and bracket vanish; this proves extension independence. Substitution of $F=\chi_c$ in the formula gives zero by $CC^{-1}=I$, so constraints are Casimirs. [given, F1, F2, step 2.1, step 3.1, algebra] ∎

