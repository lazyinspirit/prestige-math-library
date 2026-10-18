---
id: def-full-toral-weight-root-of-unity-module-category
kind: definition
title: "The full toral-weight Lusztig module category"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-root-of-unity-quantum-group-forms
sources:
  references:
    - title: "George Lusztig, Introduction to Quantum Groups"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Sections 23.1.1–23.1.4, printed pp.185–186, and specialization of the divided-power weight action."
---

## Definition

Fix a simple simply-laced finite root system, its full weight lattice $P$ and coroot lattice $Q^\vee$, with the simply connected root datum $X=P$, $Y=Q^\vee$ and $d_i=1$. Let $\zeta\in\mathbb C^\times$ satisfy $\operatorname{ord}(\zeta^2)=\ell$, where $\ell>h$ is odd and $h$ is the Coxeter number. Both orders $\ell$ and $2\ell$ for $\zeta$ are allowed. Use the full Lusztig form of [[def-root-of-unity-quantum-group-forms]] with this datum, specialized at $q=\zeta$.

Let $\mathcal C_\zeta$ consist of finite-dimensional left modules with a finite $P$-weight decomposition $M=\bigoplus_{\mu\in P}M_\mu$ satisfying, for every $h\in Q^\vee$, $i\in I$, $r,t\ge0$ and $c\in\mathbb Z$,

$$K_h|_{M_\mu}=\zeta^{\langle\mu,h\rangle}\operatorname{id},\qquad T_{i,c,t}|_{M_\mu}=\left.\begin{bmatrix}\langle\mu,h_i\rangle+c\\t\end{bmatrix}_q\right|_{q=\zeta}\operatorname{id},$$

$$E_i^{(r)}M_\mu\subseteq M_{\mu+r\alpha_i},\qquad F_i^{(r)}M_\mu\subseteq M_{\mu-r\alpha_i}.$$

The binomial is evaluated as a Laurent polynomial, including negative upper indices, rather than as a ratio of specialized factorials. Morphisms preserve weights and commute with the full algebra. The structure includes all divided powers and toral binomials; ordinary-generator eigenvalue conditions alone are insufficient at a root.

Normalize the symmetric rational bilinear form on $P$ by $(\alpha_i,\alpha_j)=a_{ij}$. Choose a positive integer $D$ with $D(P,P)\subseteq\mathbb Z$ and choose $t\in\mathbb C^\times$ with $t^D=\zeta$. Define the symmetric bicharacter

$$\chi(\lambda,\mu)=t^{D(\lambda,\mu)}.$$

This is part of the choice of braiding. In particular $\chi(\alpha_i,\mu)=\zeta^{\langle\mu,h_i\rangle}$ on the entire selected weight lattice. No coprimality of $\ell$ and the determinant of the Cartan matrix is imposed.
