---
id: lem-amenable-folner-kernel-approximation
kind: lemma
title: "Følner sets approximate algebraic kernels in von Neumann dimension"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - lem-finite-von-neumann-module-dimension-and-dense-quotients
  - thm-folner-criterion-for-amenability
justified_by: []
proof_strategy: direct
axiom_use: "The standing full AC convention is inherited from the finite von Neumann module supplier. Finite-dimensional rank calculations and the Følner estimates add no choice requirement."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jae Choon Cha and Kent E. Orr, L2-signatures, homology localization, and amenable groups"
      url: https://arxiv.org/pdf/0910.3700
      locator: "Theorem 6.3, amenable dimension-flatness; the finite-propagation estimate needed for it is supplied locally."
---

## Statement

Work under the standing AC convention for finite von Neumann modules. Let $G$ be a countable discrete amenable group, so that for every finite $S\subseteq G$ and $\varepsilon>0$ there is a nonempty finite $F\subseteq G$ with $|SF\setminus F|<\varepsilon|F|$. Let $B\in M_{m,n}(\mathbb CG)$ act by left convolution on $\ell^2(G)^n$. The Hilbert closure of $\ker(B:(\mathbb CG)^n\to(\mathbb CG)^m)$ is the full Hilbert kernel of $B$. More precisely, if the finite coefficient support of $B$, together with the identity, is contained in $S$, and $K_F$ is the space of vectors in that kernel supported in $F$, then, writing $d=\tau_n(P_{\ker B})$ and $r=\tau_m(P_{\overline{\operatorname{im}B}})=n-d$,
$$n|F|-r|SF|\le\dim_{\mathbb C}K_F\le d|F|.$$
The closure of the right $\mathcal N G$-span of the algebraic kernel is therefore the full Hilbert kernel, and the quotient of the algebraic $\mathcal N G$-kernel by that span has dimension zero.

## Statement references

[[lem-finite-von-neumann-module-dimension-and-dense-quotients]]

[[thm-folner-criterion-for-amenability]]

[Cha–Orr, Theorem 6.3](https://arxiv.org/pdf/0910.3700)

## Facts & Assumptions

**Given:** The group, matrix and finite sets of the Statement, and the standing AC convention of the finite von Neumann module supplier.

[F1] Kernel and range projections of matrices over $\mathcal N G$ lie in the matrix algebra, satisfy trace rank-nullity, and a Hilbert-dense submodule of a finite projection module has dimension-zero quotient. [[lem-finite-von-neumann-module-dimension-and-dense-quotients]]

[F2] Under the ultrafilter lemma, invariant-mean amenability implies the Følner condition; the standing full AC convention supplies that lemma. [[thm-folner-criterion-for-amenability]]

[A1] The finite coefficient support and the identity lie in $S$. Amenability is used only through the stated finite-set Følner property.

## Proof

**Given:** The data in the Statement.

1.1 The matrix has finite propagation: $B(\mathbb C[F]^n)\subseteq\mathbb C[SF]^m$. Let $V_F=B(\mathbb C[F]^n)$, with ordinary finite-dimensional orthogonal projection $Q_F$. Since $V_F\subseteq\overline{\operatorname{im}B}$, its projection is at most the full range projection $P$. Since it is supported in $SF$, its ordinary rank is the sum of its diagonal coefficients at the coordinate vectors $\delta_g e_j$ for $g\in SF$ and $j\le m$. These coefficients are at most the corresponding coefficients of $P$. The matrix $P$ commutes with right translations, so the sum over $j$ at each $g$ is $\tau_m(P)=r$. Hence $\dim_{\mathbb C}V_F\le r|SF|$. Ordinary finite-dimensional rank-nullity gives the lower estimate $\dim_{\mathbb C}K_F\ge n|F|-r|SF|$. [F1, A1, algebra]

2.1 Let $E_F$ project onto $K_F$. Its range is supported in $F$ and lies in the full Hilbert kernel, so the same diagonal comparison, now with $P_{\ker B}$, gives $\dim_{\mathbb C}K_F\le d|F|$. The trace rank-nullity formula in [F1] gives $r=n-d$. [F1, step 1.1, algebra]

3.1 Let $L$ be the Hilbert closure of the algebraic kernel. It is contained in the Hilbert kernel. The right $\mathcal N G$-span of the algebraic kernel has the same Hilbert closure: each algebraic kernel vector has a bounded column operator, and the right group translates of that vector span its column range densely. Thus [F1] gives a projection $P_L$ in $M_n(\mathcal N G)$. Write $l=\tau_n(P_L)\le d$. Since $K_F\subseteq L$, the upper diagonal estimate from step 2.1 also gives $\dim_{\mathbb C}K_F\le l|F|$. Given $\varepsilon>0$, [F2] gives a finite nonempty set $F$ with $|sF\triangle F|<\varepsilon|F|/\max(1,|S|)$ for every $s\in S$. The finite-union bound $|SF\setminus F|\le\sum_{s\in S}|sF\triangle F|$ then gives $|SF|/|F|<1+\varepsilon$. Step 1.1 then gives $l\ge n-r(1+\varepsilon)=d-r\varepsilon$. Letting $\varepsilon\downarrow0$ gives $l=d$; faithfulness of the trace makes the projection $P_{\ker B}-P_L$ zero. Therefore $L$ is the full Hilbert kernel. The quotient conclusion is the dense-submodule conclusion of [F1]. [F1, F2, A1, step 1.1, step 2.1, algebra] ∎
