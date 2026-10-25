---
id: def-qftx-adhm-linear-data-stability-and-regularity
kind: definition
title: "ADHM linear data, stability, costability and FI levels"
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-linear-data-and-framed-monads
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "Nikita A. Nekrasov, Seiberg–Witten Prepotential from Instanton Counting"
      url: https://arxiv.org/pdf/hep-th/0206161
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
---

## Definition

Fix integers $N\ge1$ and $k\ge0$ and equip $V=\mathbb C^k$ and $W=\mathbb C^N$ with the standard Hermitian inner products $\langle u,v\rangle=\sum_j\overline{u_j}v_j$, which are conjugate-linear in the first variable. For a linear map $T:E\to F$ between these spaces, its Hermitian adjoint $T^\dagger:F\to E$ is characterized by $\langle Tu,v\rangle_F=\langle u,T^\dagger v\rangle_E$; in the standard bases its matrix is the conjugate transpose. For $A,B\in\operatorname{End}_{\mathbb C}(V)$, define their commutator by $[A,B]:=AB-BA$. Let

$$\mathscr D_{k,N}=\operatorname{End}_{\mathbb C}(V)^2\times\operatorname{Hom}_{\mathbb C}(W,V)\times\operatorname{Hom}_{\mathbb C}(V,W),\qquad \operatorname{Herm}(V)=\{H\in\operatorname{End}_{\mathbb C}(V):H^\dagger=H\}.$$

Here $\operatorname{Herm}(V)$ is regarded as a real vector space. A framed ADHM linear datum is $x=(B_1,B_2,I,J)\in\mathscr D_{k,N}$. The complex and real moment maps are the maps $\mu_{\mathbb C}:\mathscr D_{k,N}\to\operatorname{End}_{\mathbb C}(V)$ and $\mu_{\mathbb R}:\mathscr D_{k,N}\to\operatorname{Herm}(V)$ defined by

$$\mu_{\mathbb C}(x)=[B_1,B_2]+IJ,\qquad \mu_{\mathbb R}(x)=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J.$$

The datum is stable if the vectors $B_{i_1}\cdots B_{i_m}I(w)$, with $m\ge0$, $i_j\in\{1,2\}$ and $w\in W$, span $V$. It is costable if there is no nonzero subspace of $V$ invariant under both $B_i$ and contained in $\ker J$. It is regular if it is stable and costable. The group $GL(V)$ acts by $g\cdot x=(gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1})$. Its unitary subgroup is $U(V)$.

Write $X^s=\{x:\mu_{\mathbb C}(x)=0,\ x\text{ stable}\}$, $X^{\mathrm{reg}}=\{x\in X^s:x\text{ costable}\}$ and, for real $\zeta\ge0$, $X_\zeta^U=\{x\in X^s:\mu_{\mathbb R}(x)=\zeta I_V\}$. Denote the corresponding orbit sets by $X^s/GL(V)$, $X^{\mathrm{reg}}/GL(V)$ and $X_\zeta^U/U(V)$, with quotient topologies when discussing their analytic spaces. A word frame consists of $k$ columns obtained by fixed words in $B_1,B_2$ applied to fixed standard basis vectors of $W$.

For $T_{\mathbb C}=(\mathbb C^*)^2\times(\mathbb C^*)^N$, write $t_1,t_2,e_1,\ldots,e_N$ for the coordinate characters and put $h=\operatorname{diag}(e_1^{-1},\ldots,e_N^{-1})$. Its action is $(t_1,t_2,h)\cdot x=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ)$. The compact torus is its subgroup on which all characters have modulus one. The framing representation thus has character $\sum_\alpha e_\alpha^{-1}$ and its dual has character $\sum_\alpha e_\alpha$.

These are finite-dimensional matrix definitions. They do not assert a real/complex quotient correspondence, a sheaf or ASD identification, or a noncompact pushforward. In particular, positive-FI stability and zero-FI regularity are distinct conditions; neither an endpoint identification nor an ordinary ASD interpretation follows from this definition.

## Definition references

[Nekrasov, §§3.1–3.3: ADHM data and FI moment-map conventions](https://arxiv.org/pdf/hep-th/0206161)

[Nakajima–Yoshioka, §3.1: framed-sheaf and regular-locus boundary](https://arxiv.org/pdf/math/0311058)
