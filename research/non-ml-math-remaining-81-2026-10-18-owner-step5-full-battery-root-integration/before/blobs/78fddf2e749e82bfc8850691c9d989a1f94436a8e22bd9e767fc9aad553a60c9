---
id: def-symplectic-comoment-map-and-hamiltonian-observable-action
kind: definition
title: Symplectic comoment maps and Hamiltonian observable actions
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - thm-smooth-functions-form-a-poisson-algebra
  - def-poisson-bracket-on-a-symplectic-manifold
  - def-representation-of-a-lie-algebra
  - def-lie-algebra-over-a-field
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, §22.1, printed pp. 133–135
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Definition 7.12 and Lemma 7.14, printed pp. 83–84
verification:
  precheck: n/a
---

## Definition

Let $\mathfrak g$ be a real Lie algebra and let $(M,\omega)$ be a symplectic
manifold. Put $A=C^\infty(M,\mathbb R)$, with pointwise multiplication and the
symplectic Poisson bracket $\{F,G\}=X_G(F)=-X_F(G)$ in the library convention
([[thm-smooth-functions-form-a-poisson-algebra]],
[[def-poisson-bracket-on-a-symplectic-manifold]]). Thus $A$ is a commutative
associative real algebra; its bracket is real-bilinear, skew, satisfies Jacobi,
and obeys the Leibniz rule in each argument. These are the real Poisson-algebra
properties used below. A **comoment map** in this page's usage is a real-linear
map $J:\mathfrak g\to A$ satisfying

$$J([\xi,\eta])=\{J(\xi),J(\eta)\}\qquad(\xi,\eta\in\mathfrak g).$$

For $\xi\in\mathfrak g$, define its **observable action** on a smooth real-valued
function $F$ by

$$\rho_J(\xi)F:=\{J(\xi),F\}.$$

Bracket bilinearity makes each $\rho_J(\xi)$ a real-linear operator on $A$.

Here an **observable** means an element of $A$. For a real vector space $A$, an
operator $D\in\operatorname{End}_{\mathbb R}(A)$ is a **Poisson derivation**
when it satisfies both operation rules

$$D(FG)=D(F)G+FD(G),\qquad D\{F,G\}=\{D(F),G\}+\{F,D(G)\}\qquad(F,G\in A).$$

Thus a Poisson derivation preserves pointwise multiplication and the Poisson
bracket by the Leibniz rule. The comoment condition says that $J$ is a Lie
algebra homomorphism to the Poisson Lie algebra of functions. This definition
does not require a Lie-group action, select a moment map, or assert integration
of a Lie-algebra action to a group.
