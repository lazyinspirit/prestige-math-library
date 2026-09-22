---
id: def-absolute-value-of-a-bounded-operator
kind: definition
title: Absolute value of a bounded operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-positive-square-root, thm-hilbert-adjoint-properties, def-axiom-of-choice, def-self-adjoint-positive-unitary-and-normal-operator, def-operator-norm]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Chapter IX §3, printed pp.239–243"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Definition

Assume AC and let $H$ be a nonzero complex Hilbert space with $T\in\mathcal B(H)$ ([[def-operator-norm]]). The **absolute value** of $T$ is the bounded positive operator

$$|T|:=(T^*T)^{1/2},$$

the unique bounded positive square root of $T^*T$ supplied by the positive-square-root theorem ([[thm-positive-square-root]]).

**Well-definedness.** $T^*T$ is self-adjoint and positive: $(T^*T)^*=T^*T$ by the involution rule, and $\langle T^*Tx,x\rangle=\langle Tx,Tx\rangle=\|Tx\|^2\ge0$ for every $x$ by the adjoint identity ([[thm-hilbert-adjoint-properties]], [[def-self-adjoint-positive-unitary-and-normal-operator]]). The square root theorem therefore applies and its root is unique, so $|T|$ is a well-defined bounded positive operator; indeed $|T|\ge0$ and $|T|^2=T^*T$. Moreover $|T|$ is self-adjoint: positivity makes $\langle|T|x,x\rangle$ real for every $x$, hence $\langle(|T|-|T|^*)x,x\rangle=0$, and the four-term polarization identity applied to the sesquilinear form $(x,y)\mapsto\langle(|T|-|T|^*)x,y\rangle$ gives $|T|=|T|^*$.

**The two identities used later.** For every $x$,

$$\||T|x\|^2=\langle|T|x,|T|x\rangle=\langle|T|^*|T|x,x\rangle=\langle|T|^2x,x\rangle=\langle T^*Tx,x\rangle=\|Tx\|^2,$$

so $\||T|x\|=\|Tx\|$; consequently $|T|x=0$ exactly when $Tx=0$, that is $\ker|T|=\ker T$, and $\|\,|T|\,\|=\|T\|$ because the two operators have the same unit-ball images of norms. The absolute value depends on $T$ through the self-adjoint operator $T^*T$, and the square root lies in $C^*(I,T^*T)$; no polar decomposition or Borel calculus is used in its definition.
