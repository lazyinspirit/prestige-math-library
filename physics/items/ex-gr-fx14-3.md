---
id: ex-gr-fx14-3
kind: example
title: Holonomy and discrete geometric interfaces — antisymmetric invariant tensor at a bivalent SU(2) vertex
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - prop-gr-fx-vertex-haar-projection
  - def-gr-fx-discrete-holonomy-model
  - def-axiom-of-choice
dependency_roles:
  prop-gr-fx-vertex-haar-projection: mathematical-premise
  def-gr-fx-discrete-holonomy-model: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "John C. Baez, Spin Network States in Gauge Theory, arXiv:gr-qc/9411007, §2"
      url: "https://arxiv.org/pdf/gr-qc/9411007"
      locator: "§2, invariant tensors at vertices and the two-valent SU(2) invariant."
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (2025), §§2–3 and §5.2"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf"
      locator: "The determinant-one defining representation, invariant vectors, and normalized Haar averaging for compact groups."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the full Axiom of Choice. Take the graph with three distinct vertices $u_1,u_2,v$, edges $a_1:u_1\to v$, $a_2:u_2\to v$ and their reverses $\bar a_1,\bar a_2$, and no other edges. Order the edges as $a_1<a_2<\bar a_1<\bar a_2$ and fix any vertex order. Assign the defining representation $\rho(g)w:=gw$ on $V=\mathbb C^2$, with its standard inner product, to $a_1,a_2$; assign the trivial representation on $\mathbb C$ to each reverse edge. Thus $\rho_{\bar a_j}(g)z=z$ for every $g\in SU(2)$ and $z\in\mathbb C$; the Haar projection's hypotheses impose no relation between representations assigned to reverse orientations.

The full vertex space is $W_v=V\otimes V\otimes\mathbb C^*\otimes\mathbb C^*$. Write $\mathbf 1^*(z)=z$ and identify $V\otimes V$ with $W_v$ by the linear isomorphism $\iota(\xi)=\xi\otimes\mathbf 1^*\otimes\mathbf 1^*$. For any basis $e_1,e_2$ of $V$, the nonzero tensor

$$\epsilon=e_1\otimes e_2-e_2\otimes e_1$$

is invariant under $\rho(g)\otimes\rho(g)$. Consequently the normalized Haar projection $P_v:W_v\to W_v$ fixes $\iota(\epsilon)$; equivalently, $\iota^{-1}P_v\iota(\epsilon)=\epsilon$.

## Statement references

[[prop-gr-fx-vertex-haar-projection]]

[[def-gr-fx-discrete-holonomy-model]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Full AC, the specified four oriented edges and their representations, the vertex space $W_v$, the map $\iota$, and a basis $e_1,e_2$ of $V$.

[F1] [[prop-gr-fx-vertex-haar-projection]]: under full AC, the normalized Haar average projects onto vertex-invariant tensors.

[F2] [[def-gr-fx-discrete-holonomy-model]]: the graph includes both edge orientations, and a finite-dimensional unitary representation is a strongly continuous group homomorphism into the unitary operators. The complete vertex factor formula is supplied by [F1].

[F3] [[def-axiom-of-choice]]: full AC is the set-theoretic assumption inherited by the averaging supplier.

## Proof

**Proof technique:** direct determinant calculation.

1.1 The defining action is a group homomorphism, preserves the standard inner product because $g^\dagger g=I_2$, and is strongly continuous because its matrix entries are continuous. The trivial reverse-edge actions have these properties as well. By [F1], their dual factors at $v$ are trivial one-dimensional spaces, so the displayed $W_v$ and $\iota$ are well-defined and $R_v(g)\iota=\iota(\rho(g)\otimes\rho(g))$. For $g\in SU(2)$, write the matrix of $\rho(g)$ in the chosen basis as $\begin{pmatrix}a&b\\c&d\end{pmatrix}$; its determinant is $\det g=1$. Expanding the tensor product gives $(g\otimes g)\epsilon=(ae_1+ce_2)\otimes(be_1+de_2)-(be_1+de_2)\otimes(ae_1+ce_2)=(ad-bc)\epsilon=(\det g)\epsilon=\epsilon$. The tensor is nonzero because $e_1\otimes e_2$ and $e_2\otimes e_1$ are distinct basis tensors. [given, F1, F2, algebra]

2.1 By [F1], $P_v\iota(\epsilon)=\int_{SU(2)}R_v(g)\iota(\epsilon)\,d\mu(g)$. Step 1.1 makes the integrand the constant vector $\iota(\epsilon)$, and the normalized Haar probability has total mass one; hence the integral equals $\iota(\epsilon)$. Applying $\iota^{-1}$ gives the equivalent asserted formula. [given, F1, F3, step 1.1, algebra] ∎

## Remarks

```tikzcd
V\otimes V \arrow[r,"\rho(g)\otimes\rho(g)"] \arrow[d,"\iota"'] & V\otimes V \arrow[d,"\iota"] \\
W_v \arrow[r,"R_v(g)"'] & W_v
```

The diagram records the full vertex action under the specified trivial reverse-edge factors; the determinant computation proves invariance independently of the diagram.
