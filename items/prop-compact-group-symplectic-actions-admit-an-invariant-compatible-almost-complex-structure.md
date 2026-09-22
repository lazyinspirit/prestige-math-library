---
id: prop-compact-group-symplectic-actions-admit-an-invariant-compatible-almost-complex-structure
kind: proposition
title: Compact-group symplectic actions admit an invariant compatible almost-complex structure
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-symplectic-and-hamiltonian-lie-group-action, cor-normalized-haar-measure-on-a-compact-lie-group, prop-integration-against-haar-is-invariant-under-translations-and-conjugation, cor-every-smooth-manifold-admits-a-riemannian-metric, lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots, def-riemannian-metric-and-riemannian-manifold, def-axiom-of-choice, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, averaging over a compact group, printed page 85
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, §22.3 and Lecture 23, proof of Theorem 23.1, printed pages 136, 141--145
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice and $\mathrm{AC}_\omega$. Let a compact Lie group
$G$ act symplectically on a symplectic manifold $(M,\omega)$. Then $M$ carries
a $G$-invariant almost-complex structure $J$ compatible with $\omega$: that
is, $J^2=-\operatorname{id}$, $\omega(Ju,Jv)=\omega(u,v)$ for all tangent
vectors, and $(u,v)\mapsto\omega(u,Jv)$ is a Riemannian metric on $M$ which is
also $G$-invariant.

## Facts & Assumptions

**Given:** the Axiom of Choice, $\mathrm{AC}_\omega$, a compact Lie group $G$ acting symplectically on $(M,\omega)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]] and $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]].

[A2] AC is used to obtain the normalized Haar measure and the background Riemannian metric, and $\mathrm{AC}_\omega$ is inherited from the fundamental-field interface of the action; no other choice is made.

[F1] $G$ has a unique regular Borel probability measure $\mu$ invariant under left and right translations and inversion, and $\int_Gf(hx)\,d\mu(x)=\int_Gf(x)\,d\mu(x)$ for integrable $f$. [[cor-normalized-haar-measure-on-a-compact-lie-group]], [[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]].

[F2] Every smooth manifold admits a Riemannian metric. [[cor-every-smooth-manifold-admits-a-riemannian-metric]].

[F3] A smooth self-adjoint positive-definite bundle endomorphism has a unique smooth self-adjoint positive-definite square root. [[lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots]].

[F4] The action is symplectic: $a_g^*\omega=\omega$ for all $g$, where $a_g(p)=g\cdot p$. [[def-symplectic-and-hamiltonian-lie-group-action]].

## Proof

**Proof technique:** direct.

1.1 Choose a background Riemannian metric $h_0$ on $M$ by [F2] and put $$h_p(u,v):=\int_G(a_g^*h_0)_p(u,v)\,d\mu(g).$$ The integrand is smooth in $(g,p)$ and the integral is a finite-dimensional parameter integral, so $h$ is a smooth symmetric bilinear form; it is positive definite because the average of positive numbers is positive, and nondegenerate accordingly. [A2, F1, F2]

2.1 The metric $h$ is $G$-invariant: for $k\in G$, invariance of Haar under left translation gives $$h_{k\cdot p}(d(a_k)u,d(a_k)v)=\int_G(a_{g k}^*h_0)_p(u,v)\,d\mu(g)=\int_G(a_{g}^*h_0)_p(u,v)\,d\mu(h^{-1}g)=h_p(u,v).$$ [step 1.1, F1]

2.2 Define a bundle endomorphism $A$ by $\omega_p(u,v)=h_p(A_pu,v)$; it exists and is unique because $h_p$ is nondegenerate. It is invertible because $\omega_p$ is nondegenerate, and it is skew-adjoint for $h$: expanding $\omega_p(u,v)+\omega_p(v,u)=0$ gives $h_p((A_p+A_p^*)u,v)=0$ for all $u,v$, hence $A^*=-A$. Therefore $-A^2=A^*A$ is $h$-positive-definite, and it commutes with $A$. [step 1.1]

3.1 By step 2.2 the endomorphism $-A^2=A^*A$ is self-adjoint and positive definite, so [F3] gives its unique smooth self-adjoint positive-definite square root; set $$J:=A\,(-A^2)^{-1/2}.$$ Since $A$ commutes with $-A^2$ and with its functional calculus, $J^2=A^2(-A^2)^{-1}=-\operatorname{id}$. [step 2.2, F3]

4.1 Compatibility: from $J^2=-\operatorname{id}$ and $A^*=-A$ one computes $\omega(Ju,Jv)=\omega(u,v)$ and that $(u,v)\mapsto\omega(u,Jv)$ is symmetric; positivity follows from $\omega(u,Ju)=h(Au,Ju)=h((-A^2)^{1/2}u,u)>0$ for $u\ne0$, so $g_\omega(u,v):=\omega(u,Jv)$ is a Riemannian metric. [step 3.1]

5.1 Invariance: both $h$ and $\omega$ are $G$-invariant, so $A$ is $G$-equivariant: $h(A d(a_g)u,d(a_g)v)=\omega(d(a_g)u,d(a_g)v)=\omega(u,v)=h(Au,v)=h(d(a_g)Au,d(a_g)v)$ for all $v$, whence $A d(a_g)=d(a_g)A$ by nondegeneracy of $h$. Hence $-A^2$ is $G$-equivariant, its unique positive square root is $G$-equivariant by uniqueness, and $J=A(-A^2)^{-1/2}$ is $G$-equivariant. In particular $J$ and $g_\omega$ are $G$-invariant. [step 3.1, step 4.1, F4]

6.1 Steps 1.1--2.1 produce an invariant Riemannian metric, steps 2.2--3.1 produce a smooth almost-complex structure $J$, step 4.1 verifies compatibility with $\omega$, and step 5.1 verifies $G$-invariance; this proves the claim. [step 4.1, step 5.1, A1] ∎
