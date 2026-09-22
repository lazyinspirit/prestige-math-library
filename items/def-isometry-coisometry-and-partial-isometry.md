---
id: def-isometry-coisometry-and-partial-isometry
kind: definition
title: Isometry coisometry and partial isometry
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-hilbert-adjoint-properties, thm-orthogonal-decomposition-by-a-closed-subspace, def-countable-choice, def-self-adjoint-positive-unitary-and-normal-operator, def-hilbert-orthogonal-projection, def-orthogonality-and-orthogonal-complement, def-operator-norm, def-hilbert-space]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Chapter IX §3, printed pp.239–243"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Definition

Assume Countable Choice and let $H,K$ be nonzero complex Hilbert spaces with $U\in\mathcal B(H,K)$ a bounded linear operator ([[def-operator-norm]]).

- $U$ is an **isometry** when $\|Ux\|=\|x\|$ for every $x\in H$; equivalently $U^*U=I_H$.
- $U$ is a **coisometry** when $U^*$ is an isometry; equivalently $UU^*=I_K$.
- $U$ is a **partial isometry** when $U$ vanishes on its kernel and is isometric on the orthogonal complement of its kernel:
  $$x\in\ker U\ \Longrightarrow\ Ux=0,\qquad x\in(\ker U)^\perp\ \Longrightarrow\ \|Ux\|=\|x\| .$$
  The closed subspace $(\ker U)^\perp$ is the **initial space** of $U$, and the closed subspace $\operatorname{ran}U$ is its **final space**.

**The equivalence in the isometry clause.** If $U^*U=I$ then $\|Ux\|^2=\langle U^*Ux,x\rangle=\langle x,x\rangle$. Conversely, if $\|Ux\|=\|x\|$ for every $x$, then $S:=U^*U-I$ is self-adjoint and $\langle Sx,x\rangle=\|Ux\|^2-\|x\|^2=0$ for every $x$; the four-term expansion of the sesquilinear form $(x,y)\mapsto\langle Sx,y\rangle$ applied to the vanishing diagonal values gives $\langle Sx,y\rangle=0$ for all $x,y$, hence $S=0$, that is $U^*U=I$ ([[thm-hilbert-adjoint-properties]] for the adjoint identities).

**Well-definedness of the subspaces.** The kernel $\ker U$ is a closed linear subspace because $U$ is bounded and linear, so its orthogonal complement is a closed subspace and the orthogonal-decomposition theorem gives $H=\ker U\oplus(\ker U)^\perp$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-orthogonality-and-orthogonal-complement]]). The range of a partial isometry is closed: $U$ is isometric on the closed subspace $(\ker U)^\perp$ and vanishes on its orthogonal complement, so $U$ carries the unit sphere of $(\ker U)^\perp$ to a closed set and $\operatorname{ran}U=U[(\ker U)^\perp]$ is closed. In the terminology of [[def-hilbert-orthogonal-projection]], the orthogonal projection onto the initial space is an orthogonal projection in the sense of that item, and the partial isometry restricted to it is an isometry onto $\operatorname{ran}U$.

**Immediate cases and conventions.** Every isometry and every coisometry is a partial isometry: an isometry has $\ker U=\{0\}$ and is isometric on $H=(\ker U)^\perp$, and a coisometry has $(\ker U)^\perp=\operatorname{ran}U^*$ on which it is isometric ([[thm-hilbert-adjoint-properties]]). The zero operator is a partial isometry, with $\ker U=H$ and $\operatorname{ran}U=\{0\}$ ([[def-hilbert-space]]). A partial isometry need not be an isometry and need not be unitary; the unilateral shift on the companion page is an isometry that is not a coisometry.
