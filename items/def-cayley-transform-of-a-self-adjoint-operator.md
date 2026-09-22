---
id: def-cayley-transform-of-a-self-adjoint-operator
kind: definition
title: "Cayley transform of a self-adjoint operator"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-self-adjoint-resolvent-estimate, thm-self-adjointness-range-criterion, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-bounded-linear-operator, def-unbounded-linear-operator-domain-and-graph, def-countable-choice]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.6, (2.105) and Theorem 2.26, pp.91-92"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Theorem 6.39 (Cayley transform), Sec. 6.3.2"
---

## Definition

Assume Countable Choice ([[def-countable-choice]]). Let $T$ be a self-adjoint
operator on $H$. By
[[thm-self-adjoint-resolvent-estimate]] the points $\pm i$ lie in $\rho(T)$, so
$T+i$ and $T-i$ are bijections of $D(T)$ onto $H$ with bounded inverses, and
$$C_T:=(T-i)(T+i)^{-1}\in\mathcal B(H)$$
is a bounded everywhere defined operator, the **Cayley transform** of $T$. In
the resolvent convention $R_T(z)=(z-T)^{-1}$ of
[[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]] one has
$$(T+i)^{-1}=-R_T(-i),\qquad C_T=I+2iR_T(-i)=I-2i(T+i)^{-1}.$$

**Its properties, with proofs.** Writing $C:=C_T$:

1. *$C$ is isometric.* For $x\in H$ put $y:=(T+i)^{-1}x$, so that $x=(T+i)y$
   with $y\in D(T)$; then $Cx=(T-i)y$, and the symmetry computation
   $\|(T\mp i)y\|^2=\|Ty\|^2+\|y\|^2$ of
   [[thm-self-adjoint-resolvent-estimate]] gives $\|Cx\|=\|x\|$.
2. *$C$ is unitary, with $C^{-1}=C^*=(T+i)(T-i)^{-1}$.* Using
   $C=I-2i(T+i)^{-1}$ and the adjoint rule
   $((T+i)^{-1})^*=((T+i)^*)^{-1}=(T-i)^{-1}$ for the self-adjoint $T$ one gets
   $C^*=I+2i(T-i)^{-1}=(T+i)(T-i)^{-1}$; the elementary resolvent identity then gives
   $C^*C=CC^*=I$, as follows also from applying the computation of item 1 to
   $C$ and to $C^*$ and using that a surjective isometry of $H$ onto $H$ is
   unitary ([[def-bounded-linear-operator]]). Concretely $C^*Cx=x$ for
   $x\in D(T)$ by direct substitution, and both sides are continuous.
3. *$\ker(I-C)=\{0\}$, and $I-C=2i(T+i)^{-1}$, $I+C=2T(T+i)^{-1}$ as maps
   on $H$.* Indeed
   $I-C=2i(T+i)^{-1}$ is injective with inverse $(2i)^{-1}(T+i)$, while
   $(I+C)(T+i)x=(T+i)x+(T-i)x=2Tx$ for $x\in D(T)$.
4. *Domain recovery.* $\operatorname{ran}(I-C)=D(T)$: by item 3,
   $\operatorname{ran}(I-C)=\operatorname{ran}(2i(T+i)^{-1})=D(T)$.
