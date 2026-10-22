---
id: ex-gr-fx14-3
kind: example
title: Holonomy and discrete geometric interfaces — antisymmetric SU(2) intertwiner
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 6
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
---

## Statement

At a vertex with two incoming edges carrying the defining representation $\rho(g)v:=gv$ for $g\in SU(2)$ and $v\in V=\mathbb C^2$, the vertex space is $W_v=V\otimes V$. For a basis $e_1,e_2$ of $V$, the nonzero antisymmetric tensor

$$\epsilon=e_1\otimes e_2-e_2\otimes e_1$$

is invariant under the diagonal action $g\otimes g$. Consequently the normalized Haar projection $P_v$ of [[prop-gr-fx-vertex-haar-projection]] fixes it: $P_v\epsilon=\epsilon$.

## Statement references

[[prop-gr-fx-vertex-haar-projection]]

[[def-gr-fx-discrete-holonomy-model]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The defining representation of $SU(2)$ on $\mathbb C^2$, the two incoming half-edge factors, and the full-AC Haar projection of the linked proposition.

[F1] [[prop-gr-fx-vertex-haar-projection]]: under full AC, the normalized Haar average projects onto vertex-invariant tensors.

[F2] [[def-gr-fx-discrete-holonomy-model]]: incoming edges contribute copies of their representation spaces to the vertex tensor product.

[F3] [[def-axiom-of-choice]]: full AC is the set-theoretic assumption inherited by the averaging supplier.

## Proof

**Proof technique:** direct determinant calculation.

1.1 Write $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SU(2)$. Expanding the tensor product gives $(g\otimes g)\epsilon=(ae_1+ce_2)\otimes(be_1+de_2)-(be_1+de_2)\otimes(ae_1+ce_2)=(ad-bc)\epsilon=(\det g)\epsilon=\epsilon$. The tensor is nonzero because $e_1\otimes e_2$ and $e_2\otimes e_1$ are distinct basis tensors. [given, F2, algebra]

2.1 By [F1], the Haar projection is $P_v\epsilon=\int_{SU(2)}(g\otimes g)\epsilon\,d\mu(g)$. Step 1.1 makes the integrand the constant vector $\epsilon$, and the normalized Haar probability has total mass one; hence the integral equals $\epsilon$. [given, F1, F3, step 1.1, algebra] ∎

## Remarks

```tikzcd
V\otimes V \arrow[r,"\rho(g)\otimes\rho(g)"] & V\otimes V
```

The diagram records the diagonal action on the two incoming tensor factors; invariance of $\epsilon$ is established by the determinant computation above.
