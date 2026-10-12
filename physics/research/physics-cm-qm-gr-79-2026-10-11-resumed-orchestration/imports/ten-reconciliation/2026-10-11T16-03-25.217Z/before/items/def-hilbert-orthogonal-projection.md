---
id: def-hilbert-orthogonal-projection
kind: definition
title: The Hilbert orthogonal projection onto a closed subspace
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-orthogonal-decomposition-by-a-closed-subspace, thm-finite-dimensional-orthogonal-decomposition, def-orthogonal-projection, def-linear-subspace, def-countable-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Definition 5.36, p.237"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Definition 182 and Proposition 183"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Definition

Assume the Axiom of Countable Choice. Let $M$ be a closed linear subspace of a real or complex Hilbert space $H$ ([[def-linear-subspace]]). By the orthogonal-decomposition theorem ([[thm-orthogonal-decomposition-by-a-closed-subspace]]) every $x\in H$ has a unique representation

$$x=P_Mx+(x-P_Mx),\qquad P_Mx\in M,\quad x-P_Mx\in M^\perp ,$$

and the **Hilbert orthogonal projection onto $M$** is the map

$$P_M:H\longrightarrow M\subseteq H,\qquad x\longmapsto P_Mx ,$$

assigning to $x$ its unique $M$-component. Its defining properties are therefore

$$P_Mx\in M,\qquad x-P_Mx\in M^\perp\qquad(x\in H),$$

which characterise $P_M$ uniquely: a map with these defining properties must agree with the $M$-component of the unique decomposition of each $x$.

**Agreement with the finite-dimensional projection.** If $V$ is a finite-dimensional inner-product space and $W\subseteq V$ a subspace, then [[thm-finite-dimensional-orthogonal-decomposition]] writes $V=W\oplus W^\perp$ and [[def-orthogonal-projection]] defines $P_Wv$ as the unique $W$-component of $v$; the defining properties displayed above are the same, so they define the same map on a finite-dimensional Hilbert space.

**Range and kernel.** $P_Mx\in M$ for every $x$, and $P_Mm=m$ for $m\in M$ because $m=m+0$ with $0\in M^\perp$; conversely $P_Mx=0$ says exactly that $x=x-0\in M^\perp$. Hence the range of $P_M$ is $M$ and its kernel is $M^\perp$, and $P_M$ is the identity on $M$ and zero on $M^\perp$.
