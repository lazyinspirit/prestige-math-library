---
id: lem-tgrx-modular-kms-time-rescaling
kind: lemma
title: Positive rescaling of an upper-strip W*-KMS flow
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
physical_scope: null
deps:
  - def-axiom-of-choice
  - def-qsmx-von-neumann-kms-state
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qsmx-von-neumann-kms-state: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "F. Hiai, Concise lectures on selected topics of von Neumann algebras, arXiv:2004.02383"
      url: "https://arxiv.org/pdf/2004.02383"
      locator: "Complete 159-page lecture notes; §2.2, Definition 2.11 and Theorem 2.14 (PDF pp. 17–19), for the upper/lower strip KMS boundary convention. Hiai writes the modular convention at width beta = -1; the local lemma uses the upper-strip convention of its exact supplier."
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, complete lecture notes, arXiv:1311.2717"
      url: "https://arxiv.org/pdf/1311.2717"
      locator: "Complete 157-page lecture notes; §3.4, Definition 3.4.4 (printed pp. 74–75, PDF pp. 73–74), for the C*-dynamical KMS strip with physical width hbar beta. That definition assumes a strongly continuous C*-flow; the present W*-rescaling is proved directly and does not use that hypothesis."
---

## Statement

Assume the Axiom of Choice. Let $H$ be a complex Hilbert space and let
$M\subseteq\mathcal B(H)$ be a nonzero unital $*$-subalgebra with $M=M''$,
where $\mathcal B(H)$ is the bounded-operator algebra and $M'$ is its
commutant. Let $\omega$ be a normal state, meaning a bounded positive linear
functional with $\omega(I)=1$ that preserves suprema of bounded increasing
nets of positive elements. Let $t\mapsto\alpha_t$ be a one-parameter group
of bijective unital $*$-automorphisms of $M$, with dimensionless parameter
$t$, such that $t\mapsto\varphi(\alpha_t(X))$ is continuous for every
$X\in M$ and every normal linear functional $\varphi$ on $M$ (an element of
the predual). Suppose
that for some dimensionless $\theta>0$, for every $A,B\in M$ there is a
bounded continuous function $F_{A,B}$ on
$S_\theta=\{z\in\mathbb C:0\le\operatorname{Im}z\le\theta\}$, holomorphic
inside, with
$$F_{A,B}(t)=\omega(A\alpha_t(B)),\qquad F_{A,B}(t+i\theta)=\omega(\alpha_t(B)A).$$
This is the upper-strip convention of the preceding von Neumann KMS
definition. For any scalar $\lambda>0$, set
$\widetilde\alpha_\tau=\alpha_{\tau/\lambda}$ for $\tau\in\mathbb R$.
Then $\widetilde\alpha$ is again a point-ultraweakly continuous
one-parameter group, and $\omega$ satisfies the same upper-strip boundary
condition for $\widetilde\alpha$ on the strip of width $\lambda\theta$.

## Statement references

[[def-axiom-of-choice]]

[[def-qsmx-von-neumann-kms-state]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the von Neumann algebra, normal state,
point-ultraweak group, upper-strip boundary functions, and $\lambda>0$ from
the Statement.

[A1] The Axiom of Choice is assumed as in [[def-axiom-of-choice]].

[F1] The preceding upper-strip KMS definition requires a bounded continuous
strip function with lower boundary $\omega(A\alpha_t(B))$ and upper boundary
$\omega(\alpha_t(B)A)$ for every $A,B\in M$; its parameter and strip width
are dimensionless. [[def-qsmx-von-neumann-kms-state]]

## Proof

**Proof technique:** Reparameterize the existing strip functions by the
positive linear map $z\mapsto z/\lambda$.

**Given:** [A1], [F1], $M$, $\omega$, $\alpha$, $\theta$, and $\lambda>0$.

1.1 The rescaled maps satisfy
$\widetilde\alpha_{\tau_1}\widetilde\alpha_{\tau_2}
=\alpha_{\tau_1/\lambda+\tau_2/\lambda}
=\widetilde\alpha_{\tau_1+\tau_2}$ and
$\widetilde\alpha_0=\operatorname{id}_M$. For each $X\in M$ and normal
linear functional $\varphi$, the map
$\tau\mapsto\varphi(\widetilde\alpha_\tau(X))
=\varphi(\alpha_{\tau/\lambda}(X))$ is continuous because it is the
composition of the continuous map $t\mapsto\varphi(\alpha_t(X))$ with
$\tau\mapsto\tau/\lambda$. Thus $\widetilde\alpha$ is a
point-ultraweakly continuous one-parameter group. [A1, F1, given, algebra]

1.2 For each $A,B\in M$, choose the strip function $F_{A,B}$ supplied by
[F1] and define $G_{A,B}(z)=F_{A,B}(z/\lambda)$. Since $\lambda>0$, the
map $z\mapsto z/\lambda$ sends the closed strip of width $\lambda\theta$
bijectively to $S_\theta$ and its interior to the interior. Therefore
$G_{A,B}$ is bounded and continuous on the closed rescaled strip and
holomorphic inside. [A1, F1, given, construct]

2.1 For real $\tau$, the boundaries are
$G_{A,B}(\tau)=\omega(A\alpha_{\tau/\lambda}(B))
=\omega(A\widetilde\alpha_\tau(B))$ and
$G_{A,B}(\tau+i\lambda\theta)
=\omega(\alpha_{\tau/\lambda}(B)A)
=\omega(\widetilde\alpha_\tau(B)A)$. These are precisely the required
upper-strip boundary values at width $\lambda\theta$. [A1, F1, step 1.2, algebra] ∎
