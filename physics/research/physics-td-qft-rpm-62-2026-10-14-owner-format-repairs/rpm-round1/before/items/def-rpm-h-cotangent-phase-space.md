---
id: def-rpm-h-cotangent-phase-space
kind: definition
title: "Cotangent phase data, observables and action dimensions"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: "Mathematical cotangent phase-space conventions; action units are interpretations assigned by a particle model, with no dynamics or measurement asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-countable-choice
  - def-tautological-one-form-on-a-cotangent-bundle
  - thm-the-canonical-cotangent-two-form-is-symplectic
  - def-symplectic-form-and-symplectic-manifold
dependency_roles:
  def-countable-choice: mathematical-premise
  def-tautological-one-form-on-a-cotangent-bundle: mathematical-premise
  thm-the-canonical-cotangent-two-form-is-symplectic: mathematical-premise
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
sources:
  references:
    - title: "Eckhard Meinrenken, Symplectic Geometry, complete lecture notes"
      url: "https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf"
      locator: "§3.4, Definition 3.10, printed pp. 34–35: tautological cotangent one-form."
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry, complete lecture notes"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf"
      locator: "Lecture 1, printed pp. 11–12: cotangent bundle canonical symplectic form."
---

## Definition

Assume countable choice $\mathrm{AC}_{\omega}$: every sequence of nonempty sets has a choice function ([[def-countable-choice]]). Let $Q$ be a finite-dimensional, Hausdorff, second-countable smooth manifold without boundary, of dimension $n$. Its cotangent bundle is

$$T^*Q=\coprod_{q\in Q}T_q^*Q,\qquad \pi:T^*Q\to Q,\quad \pi(q,p)=q,$$

with the canonical smooth structure and induced cotangent charts supplied by the manifold construction in [[def-tautological-one-form-on-a-cotangent-bundle]]. The **tautological one-form** is $\theta_{(q,p)}(\xi)=p(d\pi_{(q,p)}\xi)$, and the **canonical cotangent two-form** is $\omega=-d\theta$. The exact theorem [[thm-the-canonical-cotangent-two-form-is-symplectic]] makes $(T^*Q,\omega)$ a symplectic manifold in the sense of [[def-symplectic-form-and-symplectic-manifold]]. We call this pair the **cotangent phase space** of $Q$.

In an induced chart $(q^1,\ldots,q^n,p_1,\ldots,p_n)$, $\theta=p_i\,dq^i$ and $\omega=dq^i\wedge dp_i$. A mathematical **observable** on this phase space means a smooth function $F:T^*Q\to\mathbb R$; this definition does not assert that a measurement has been performed or that every such function is physically measurable.

For an interpreted particle model, assign coordinates $q^i$ their declared units and assign the conjugate covector components $p_i$ units of action divided by the units of $q^i$. Thus $\theta$ and $\omega$ have action units, conventionally joule-seconds, and a bracket of quantities with units \([F]\) and \([G]\) has units \([F][G]/(\text{action})\). These are dimensional interpretations of the model, not additional mathematical premises. The use of $\mathrm{AC}_{\omega}$ is exactly the use in the smooth cotangent-bundle suppliers; no full Axiom of Choice is used.
