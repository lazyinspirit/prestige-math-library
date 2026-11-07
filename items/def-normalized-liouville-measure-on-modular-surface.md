---
id: def-normalized-liouville-measure-on-modular-surface
kind: definition
title: "Normalized Liouville measure on the modular surface"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-hyperbolic-laplacian-on-the-upper-half-plane
  - thm-standard-fundamental-domain-for-the-modular-group
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "§1, normalized volume measure and Theorem 1, printed pp. 1–2."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§2, Theorem 1.2 and definition of Liouville measure, pp. 11–13."
---

## Definition

Let $M=SL_2(\mathbb Z)\backslash\mathbb H$ with hyperbolic area measure $d\mu=y^{-2}dx\,dy$ and area $A=\int_Md\mu$. The standard fundamental domain lies in $|x|\le1/2$, $y\ge\sqrt3/2$, and contains the rectangle $|x|<1/4$, $2<y<3$; hence $0<A\le2/\sqrt3<\infty$. Its unit cotangent bundle $S^*M$ consists of pairs $(z,\xi)$ with $\xi$ a cotangent vector of hyperbolic norm $1$. In any local oriented orthonormal covector frame $(e^1,e^2)$, write $\xi=\cos\theta\,e^1+\sin\theta\,e^2$. Define the normalized Liouville measure $m_L$ on $S^*M$ by
$$dm_L(z,\theta)=\frac{1}{2\pi A}\,d\mu(z)\,d\theta.$$
This definition is independent of the chosen frame because a change of oriented orthonormal frame rotates $\theta$ and preserves $d\theta$. It has total mass $1$, and its projection to $M$ is the normalized hyperbolic area measure
$$m_M=\frac{d\mu}{A}.$$

## Definition references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, §1, printed pp. 1–2.](https://arxiv.org/pdf/0901.4060v1)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, §2, pp. 11–13.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

[[def-hyperbolic-laplacian-on-the-upper-half-plane]]

[[thm-standard-fundamental-domain-for-the-modular-group]]
