---
id: ex-trivial-vertex-algebra-is-rational
kind: example
title: The one-dimensional vertex operator algebra is rational assuming Choice
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - cor-every-vector-space-has-a-basis
  - def-axiom-of-choice
  - def-admissible-vertex-algebra-module
  - def-conformal-vertex-algebra
  - def-rational-vertex-algebra
  - def-vertex-algebra-module
  - def-vertex-algebra-state-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §4.2
      url: https://arxiv.org/pdf/0809.1380
    - title: Tomoyuki Arakawa and Anne Moreau, Arc Spaces and Vertex Algebras, §§2.5–2.7
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Example

Let $V=\mathbb C\mathbf1$ with $T=0$, $Y(\mathbf1,z)=\operatorname{id}_V$, and conformal vector $\omega=0$ (central charge $0$). Assuming the Axiom of Choice ([[def-axiom-of-choice]]), under the admissible-module rationality convention of [[def-rational-vertex-algebra]], $V$ is rational.

## Facts & Assumptions

**Given:** The Axiom of Choice and the one-dimensional complex vector space $V=\mathbb C\mathbf1$, $T=0$, $Y(\mathbf1,z)=\operatorname{id}_V$, $\omega=0$, and an arbitrary admissible $V$-module $M$.

[F1] [[def-vertex-algebra-state-field]]: for every $a,v\in V$, the state field is lower truncated on $v$.

[F2] [[def-vertex-algebra-state-field]]: $Y(\mathbf1,z)=\operatorname{id}_V$, $T\mathbf1=0$, and $Y(a,z)\mathbf1=e^{zT}a$.

[F3] [[def-vertex-algebra-state-field]]: $[T,Y(a,z)]=\partial_zY(a,z)$ for every $a\in V$.

[F4] [[def-vertex-algebra-state-field]]: for every $a,b\in V$, some $N\ge0$ satisfies $(z-w)^N[Y(a,z),Y(b,w)]=0$.

[F5] [[def-conformal-vertex-algebra]]: the conformal modes satisfy the Virasoro relations, $L(-1)=T$, and $V_0=\mathbb C\mathbf1$ in the CFT-type grading.

[F6] [[def-vertex-algebra-module]]: a module has vacuum action $Y_M(\mathbf1,z)=\operatorname{id}_M$ and satisfies the module Jacobi identity.

[F7] [[def-admissible-vertex-algebra-module]]: an admissible module has $M=\bigoplus_{n\ge0}M(n)$ and $a^M_{(k)}M(n)\subseteq M(n+r-k-1)$ for homogeneous $a\in V_r$.

[F8] [[def-rational-vertex-algebra]]: rationality means every admissible module is a direct sum of irreducible admissible modules.

[F9] [[cor-every-vector-space-has-a-basis]]: assuming AC, every vector space over a field has a basis.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

## Proof

1.1 Every state is a scalar multiple of $\mathbf1$. The identity field is lower truncated by [F1], and [F2] gives the vacuum and creation identities. Translation covariance holds because both sides are zero by [F3]; locality holds because the identity commutes with itself by [F4]. Thus $V$ satisfies the vertex-algebra axioms. [given, F1, F2, F3, F4, algebra]

1.2 Every state is $a=\lambda\mathbf1$. Linearity and the vacuum property in [F6] give $Y_M(a,z)=\lambda\operatorname{id}_M$. Hence every graded subspace of $M$ is a $V$-submodule, and each $M(n)$ in [F7] is a submodule. [F6, F7, given, algebra]

2.1 Since $Y(\omega,z)=0$, all $L(n)=0$ and the Virasoro relations hold with central charge $0$; also $L(-1)=0=T$. The grading is $V_0=V=\mathbb C\mathbf1$ and $V_n=0$ for $n>0$, so $V$ is conformal of CFT type by [F5]. [given, F5, step 1.1, algebra]

3.1 If $M=0$, it is the empty direct sum of simple modules. Otherwise, for each $n$ with $M(n)\ne0$, [F9] gives a nonempty set of bases of $M(n)$; [A1] chooses one basis in every such degree. Each basis line is a one-dimensional admissible submodule concentrated in degree $n$, hence is simple, and the direct sum of all these lines is $M$. Thus every admissible module is completely reducible, which is rationality by [F8]. [A1, F7, F8, F9, step 1.2, step 2.1] ∎
