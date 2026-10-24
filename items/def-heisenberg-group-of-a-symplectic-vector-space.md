---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-heisenberg-group-of-a-symplectic-vector-space.json
  precheck: n/a
id: def-heisenberg-group-of-a-symplectic-vector-space
kind: definition
title: The Heisenberg group of a finite-dimensional symplectic vector space
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-symplectic-vector-space, def-topological-group]
justified_by: [lem-heisenberg-group-lagrangian-splitting-and-dual-orbit]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
    - title: "Amritanshu Prasad, An Easy Proof of the Stone-von Neumann-Mackey Theorem"
      url: "https://arxiv.org/pdf/0912.0574"
---

## Definition

Let $(V,\omega)$ be a finite-dimensional real symplectic vector space, so $V$
is a finite-dimensional real vector space and $\omega:V\times V\to\mathbb R$ is
an alternating, nondegenerate bilinear form
([[def-symplectic-vector-space]]). Define

$$
H(V,\omega):=V\times\mathbb R
$$

with the product topology and multiplication

$$
(v,t)(w,s)=\left(v+w,\ t+s-\frac12\omega(v,w)\right).
$$

The proposed identity is $(0,0)$, and the central coordinate is the subgroup
$j(\mathbb R)=\{(0,t):t\in\mathbb R\}$. The lemma
[[lem-heisenberg-group-lagrangian-splitting-and-dual-orbit]] verifies that this
is a second-countable locally compact topological group and that $j(\mathbb R)$
is its center.

## Remarks

The maps $j(t)=(0,t)$ and $\operatorname{pr}_V(v,t)=v$ form the central
extension shown below. The diagram records the maps; exactness is established
by the explicit kernel computation in the cited lemma.

```tikzcd
\begin{tikzcd}
1 \arrow[r] & \mathbb R \arrow[r, hook, "j"] & H(V,\omega) \arrow[r, two heads, "{\mathrm{pr}_V}"] & V \arrow[r] & 1
\end{tikzcd}
```
