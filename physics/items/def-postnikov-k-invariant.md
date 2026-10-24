---
id: def-postnikov-k-invariant
kind: definition
title: Postnikov k-invariant
status: published
origin: pipeline
deps: ["def-postnikov-section-and-postnikov-tower", "thm-obstruction-theory-for-lifting-through-a-fibration", "thm-eilenberg-maclane-spaces-represent-singular-cohomology", "def-homology-and-cohomology-with-local-coefficients", "def-axiom-of-choice"]
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Section 7.12.1, Postnikov systems, printed pages 192--194
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 12, Postnikov tower, printed pages 37--40
---

## Definition

Assume AC, let $(X,x_0)$ be a connected based space, and let $n\geq2$. Put $A=\pi_n(X,x_0)$. Present the Postnikov-stage map by a based fibration

$$ K(A,n)\longrightarrow P_nX\xrightarrow{q_n}P_{n-1}X $$

with the identification of the fiber over the specified basepoint with $K(A,n)$ fixed. Its primary obstruction to a section, in the sign convention of the local cellular obstruction cochain, is the **$(n+1)$st Postnikov k-invariant**

$$ k_{n+1}(X):=o_{n+1}(q_n)\in H^{n+1}(P_{n-1}X;\mathcal A). $$

Here $\mathcal A$ is the local system whose monodromy is the $\pi_1(X,x_0)$-action on $A$. If $X$ is simple, this action is trivial and the chosen identification makes $\mathcal A$ the constant system $A$, so

$$ k_{n+1}(X)\in H^{n+1}(P_{n-1}X;A). $$

Representability then identifies this class with a based homotopy class

$$ \kappa_{n+1}:P_{n-1}X\longrightarrow K(A,n+1). $$

A fiber-homotopy-equivalent stage, together with the stated base and fiber-group identifications, transports the obstruction class to the same k-invariant. If those identifications are changed, the corresponding automorphism of $A$ acts on the class. For a nontrivial $\pi_1$-action, the local-coefficient class above is still the definition, but no untwisted cohomology formula or ordinary map to $K(A,n+1)$ is asserted here.
