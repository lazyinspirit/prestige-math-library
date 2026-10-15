---
id: ex-hh-group-graded-spaces-as-comodules
kind: example
title: "Group-graded vector spaces as comodules over the group-like coalgebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-right-comodule-and-comodule-morphism, def-hh-scalar-and-tensor-conventions, def-linear-map]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Daniel Kongsgaard and UCSD Math 207A, Hopf Algebras Lecture Notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "§1.6, printed pp.11–15; Examples 1.15–1.16, pp.13–14; §§3.3–3.4, printed pp.36–41"
    - title: "William Chin, A Brief Introduction to Coalgebra Representation Theory"
      url: "https://condor.depaul.edu/~wchin/crt.pdf"
      locator: "§2, printed pp.2–3"
---
## Example

Let $G$ be a group and let $C=kG$ denote the vector space with basis symbols $e_g$ for $g\in G$, with the group-coalgebra structure $\Delta(e_g)=e_g\otimes e_g$ and $\varepsilon(e_g)=1$. The group multiplication is not used by this coalgebra structure. Right $C$-comodules are exactly $G$-graded vector spaces, where a grading means an algebraic direct sum with finite support for each vector.

## Facts & Assumptions

**Given:** A field $k$, a group $G$, its basis-indexed vector space $C=kG$, and either a $G$-graded vector space $V=\bigoplus_{g\in G}V_g$ or a right $C$-comodule $(M,\rho)$.

[F1] A right comodule is a vector space with $\rho:M\to M\otimes C$ satisfying coassociativity and counitality. ([[def-hh-right-comodule-and-comodule-morphism]])

[F2] A coalgebra is a vector space with coassociative $\Delta:C\to C\otimes C$ and a two-sided counit $\varepsilon:C\to k$; a coalgebra map preserves both. ([[def-hh-coalgebra-and-coalgebra-map]])

[F3] Every tensor is a finite sum of elementary tensors, and the coordinate functional $\delta_g$ on $kG$ is defined by $\delta_g(e_h)=\delta_{g,h}$ and linear extension. ([[def-hh-scalar-and-tensor-conventions]], [[def-linear-map]])

## Verification

**Given:** The structures in the Example.

1.1 Define $\Delta(e_g)=e_g\otimes e_g$ and $\varepsilon(e_g)=1$ on the basis and extend linearly. For every $g$, $(\Delta\otimes\operatorname{id})\Delta(e_g)=e_g\otimes e_g\otimes e_g=(\operatorname{id}\otimes\Delta)\Delta(e_g)$ and $(\varepsilon\otimes\operatorname{id})\Delta(e_g)=e_g=(\operatorname{id}\otimes\varepsilon)\Delta(e_g)$. Both sides are linear, so $C$ is a coalgebra. [given, F2, construct, algebra]

1.2 A grading $V=\bigoplus_gV_g$ means every $v\in V$ has a unique finite decomposition $v=\sum_g v_g$ with $v_g\in V_g$. Define $\rho(v)=\sum_g v_g\otimes e_g$. Uniqueness of the finite decomposition makes $\rho$ well-defined, and adding or scaling decompositions shows it is linear. [given, F3, construct]

1.3 Conversely, fix $m\in M$ and collect equal basis terms in its finite tensor expansion as $\rho(m)=\sum_{i=1}^r m_i\otimes e_{g_i}$ with distinct $g_i$. Coassociativity gives $\sum_i \rho(m_i)\otimes e_{g_i}=\sum_i m_i\otimes e_{g_i}\otimes e_{g_i}$. Apply $\operatorname{id}_M\otimes\operatorname{id}_C\otimes\delta_{g_j}$ for a fixed $j$. Distinctness of the $g_i$ makes the left side $\rho(m_j)$ and the right side $m_j\otimes e_{g_j}$, so each $m_j$ is homogeneous of degree $g_j$. [given, F1, F3, construct]

2.1 For homogeneous $v_g\in V_g$, $(\rho\otimes\operatorname{id})\rho(v_g)=v_g\otimes e_g\otimes e_g=(\operatorname{id}\otimes\Delta)\rho(v_g)$ and $(\operatorname{id}\otimes\varepsilon)\rho(v_g)=v_g$. Homogeneous vectors span the direct sum, so linearity extends both identities to every $v$; hence $V$ is a right $C$-comodule. [F1, step 1.1, step 1.2, algebra]

2.2 The counit identity gives $m=\sum_i m_i$, so the homogeneous subspaces span $M$ with finite support. If a finite sum $\sum_{g\in F}u_g=0$ has $u_g$ homogeneous of degree $g$, applying $\rho$ gives $\sum_{g\in F}u_g\otimes e_g=0$; then $\operatorname{id}_M\otimes\delta_h$ gives $u_h=0$ for each $h\in F$. Thus the sum is direct and the recovered grading is unique. [F1, F3, step 1.3]

3.1 Steps 1.2 and 2.1 construct a comodule from every $G$-grading, and steps 1.3 and 2.2 recover a unique such grading from every right $kG$-comodule. The coalgebra axioms for this $kG$ structure were checked in step 1.1. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎
