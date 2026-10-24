---
id: def-qftx-nonabelian-gauge-data
kind: definition
title: Non-Abelian gauge data and bundle sectors
status: draft
origin: session
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited only through the supplied construction of Lie(G) from the tangent space at the identity."
deps:
  - def-countable-choice
  - def-lie-group
  - thm-the-tangent-space-at-the-identity-is-a-lie-algebra
  - def-principal-g-bundle-and-associated-fiber-bundle
  - def-smooth-principal-g-bundle
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-associated-bundle-to-a-principal-bundle-and-representation
  - thm-associated-vector-bundle-is-well-defined
dependency_roles:
  def-countable-choice: mathematical-premise
  def-lie-group: mathematical-premise
  thm-the-tangent-space-at-the-identity-is-a-lie-algebra: mathematical-premise
  def-principal-g-bundle-and-associated-fiber-bundle: mathematical-premise
  def-smooth-principal-g-bundle: mathematical-premise
  def-finite-dimensional-representation-of-a-group-over-a-field: mathematical-premise
  def-associated-bundle-to-a-principal-bundle-and-representation: mathematical-premise
  thm-associated-vector-bundle-is-well-defined: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories (full text)"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§§1.1.3, 1.1.5 and 2.1: right principal bundles, associated bundles, and the local-versus-global gauge distinction."
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 1, §1.4 and §1.6, printed pp. 8–15: smooth principal bundles and associated representation bundles."
verification:
  precheck: pending
---

## Definition

Assume the axiom of countable choice $\mathrm{AC}_\omega$. Let $M$ be a finite-dimensional, Hausdorff, second-countable smooth manifold without boundary. A **non-Abelian gauge datum on $M$** consists of the following specified objects.

First choose a finite-dimensional real Lie group $G$ that is compact in its manifold topology (every open cover has a finite subcover) and noncommutative (there are $g,h\in G$ with $gh\ne hg$). The actual group $G$, including its global form, is part of the datum. Its Lie algebra is $\mathfrak g=\operatorname{Lie}(G)=T_eG$ with the bracket transported from left-invariant smooth vector fields.

Choose a smooth right principal $G$-bundle $\pi:P\to M$: the projection and right action are smooth, and the action is free and transitive on each fibre. There is an open cover $\{U_\alpha\}_{\alpha\in A}$ of $M$ with a family of equivariant diffeomorphisms $\phi_\alpha:\pi^{-1}(U_\alpha)\to U_\alpha\times G$ for $\alpha\in A$, each over $U_\alpha$. Explicitly, $\operatorname{pr}_1\circ\phi_\alpha=\pi$, and if $\phi_\alpha(p)=(x,g)$ then $\phi_\alpha(ph)=(x,gh)$ for every $h\in G$.

Choose a specified set $I$ of representation labels and, for each $a\in I$, a finite-dimensional complex vector space $V_a$, a positive-definite Hermitian form $h_a$, and a smooth group homomorphism $\rho_a:G\to U(V_a,h_a)$. Here $U(V_a,h_a)$ is the group of complex-linear isometries of $h_a$, and a representation is the corresponding finite-dimensional group action. Its associated vector bundle is the quotient $E_a=P\times_{\rho_a}V_a$ with relation $[pg,v]=[p,\rho_a(g)v]$.

Two smooth right principal $G$-bundles over $M$ are isomorphic over $M$ when a smooth diffeomorphism between their total spaces covers $\operatorname{id}_M$ and commutes with the right $G$-actions. A **bundle sector** is one equivalence class under this relation. The datum specifies a set $\Sigma$ of admitted bundle sectors and requires $[P]\in\Sigma$; a model may take $\Sigma=\{[P]\}$. The Lie algebra alone does not replace the chosen group or sector. This definition does not choose a connection, an action functional, or a quantum theory.

## Definition references

[Full mathematical treatment of right principal and associated bundles](https://arxiv.org/html/2110.06334)

[Full lecture notes on principal and associated bundles](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)

[[def-countable-choice|Countable-choice assumption used to form the Lie algebra]]

[[def-lie-group|Finite-dimensional real Lie group]]

[[thm-the-tangent-space-at-the-identity-is-a-lie-algebra|Lie algebra of a Lie group]]

[[def-principal-g-bundle-and-associated-fiber-bundle|Topological right principal bundle and quotient convention]]

[[def-smooth-principal-g-bundle|Smooth right principal bundle]]

[[def-finite-dimensional-representation-of-a-group-over-a-field|Finite-dimensional group representation]]

[[def-associated-bundle-to-a-principal-bundle-and-representation|Associated representation bundle]]

[[thm-associated-vector-bundle-is-well-defined|Smooth vector-bundle structure on the associated quotient]]
