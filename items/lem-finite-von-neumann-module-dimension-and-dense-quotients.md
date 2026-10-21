---
id: lem-finite-von-neumann-module-dimension-and-dense-quotients
kind: lemma
title: Finite von Neumann modules, Hilbert closures, and dimension-zero quotients
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - thm-spectral-theorem-for-bounded-normal-operators-pvm-form
  - thm-polar-decomposition-for-bounded-operators
justified_by: []
proof_strategy: direct
axiom_use: The standing full AC convention of the L2 signature definitions is
  used through the published Hilbert-space spectral, polar-decomposition and
  concrete von Neumann algebra suppliers. No additional choice principle is
  introduced.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jae Choon Cha and Kent E. Orr, L2-signatures, homology localization, and
        amenable groups
      url: https://arxiv.org/pdf/0910.3700
      locator: Section 6.1, dimension convention and properties; their cited dimension
        machinery is proved here in the finite-module form needed locally.
---

## Statement

Assume AC. Let $G$ be a discrete group, let $A=\mathcal N G\subseteq\mathcal B(\ell^2(G))$ have its canonical faithful normal trace $\tau$, and give matrices the unnormalized trace $\tau_r((a_{ij}))=\sum_{i=1}^r\tau(a_{ii})$. For a projection $p\in M_r(A)$ put $\dim_A(pA^r)=\tau_r(p)$; for any right $A$-module take the supremum of dimensions of its finitely generated projective submodules. These dimensions are independent of the projective representation. If $L\subseteq pA^r$ is any submodule and $q$ is the projection onto its Hilbert closure in $p\ell^2(G)^r$, then $q\in M_r(A)$, $q\le p$, and
$$\dim_A L=\tau_r(q),\qquad \dim_A(pA^r/L)=\tau_r(p)-\tau_r(q).$$
In particular a Hilbert-dense submodule has dimension-zero quotient. Modules of dimension zero are closed under submodules, quotients, extensions and filtered colimits. For any matrix $B\in M_{r,s}(A)$, its kernel and Hilbert-closed image are projection modules, its algebraic image is isomorphic to its support projection module, and
$$\tau_s(P_{\ker B})+\tau_r(P_{\overline{\operatorname{im}B}})=s.$$

## Statement references

[[def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra]]

[[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]]

[[thm-polar-decomposition-for-bounded-operators]]

[Cha–Orr, Section 6.1](https://arxiv.org/pdf/0910.3700)

## Facts & Assumptions

**Given:** AC, the group algebra von Neumann closure $A$, its canonical trace and the dimension convention in the Statement. Vectors in $A^r$ are columns and matrices act on the left, so their maps are right $A$-linear.

[F1] The canonical group trace is faithful, normal and tracial. Matrix traces inherit these properties by finite summation. [[def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra]]

[F2] A generated concrete von Neumann algebra is strongly closed and equals its double commutant. [[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]

[F3] Bounded self-adjoint operators have spectral projections and bounded Borel functional calculus. [[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]]

[F4] A bounded operator has polar decomposition, with initial and final spaces the closures of its adjoint range and range. [[thm-polar-decomposition-for-bounded-operators]]

[A1] AC is the standing hypothesis of [F2]–[F4]. [[def-axiom-of-choice]]

## Proof

**Given:** The data in the Statement.

1.1 A spectral projection of a self-adjoint matrix over $A$ belongs to the same matrix von Neumann algebra: it commutes with every element of that algebra's commutant by [F3], so belongs to its double commutant by [F2]. In the rectangular case apply this observation to $B^*B$ and $BB^*$; the polar partial isometry is the strong limit of $B(B^*B+\varepsilon I)^{-1/2}$ as $\varepsilon\downarrow0$, and belongs to the rectangular matrix algebra by [F2]–[F4]. Thus kernel, initial and final projections are matrices over $A$. The equality $\tau_s(v^*v)=\tau_r(vv^*)$, obtained by summing the trace identity for the matrix entries of $v$, gives the displayed rank-nullity formula. The algebraic kernel is exactly $P_{\ker B}A^s$, and $B$ maps $(I-P_{\ker B})A^s$ bijectively onto its algebraic image. [F1, F2, F3, F4, A1, algebra]

2.1 Every finite projective module has the form $eA^r$ for an idempotent $e$. Its Hilbert range is closed because $e^2=e$. Let $p$ be its orthogonal range projection, which lies in $M_r(A)$ by step 1.1. Since $ep=p$ and $pe=e$, one has $eA^r=pA^r$. Every module map between two such projection modules is given by a rectangular matrix: extend it to the ambient finite free module by composing with the source projection. If the algebraic map is injective, its Hilbert kernel projection is zero, since a nonzero kernel projection has a nonzero column in the algebraic kernel. Polar decomposition then implies that the source projection trace is at most the target projection trace. Applying this to an isomorphism and its inverse proves invariance of projective dimension. [F1, F4, step 1.1, algebra]

2.2 For finitely many vectors of $L$, let $B$ have those vectors as columns. The corresponding range projection $q_B$ lies in $M_r(A)$ by step 1.1. As the finite subsets increase, the ranges increase, and their union has Hilbert closure equal to the closure of $L$: a vector $x\in A^r$ gives its Hilbert representative by applying its entries to $\delta_e$, while right translates of those representatives are also representatives of vectors of $L$. Their closed span contains the range of each column operator, because the coordinate vectors span $\ell^2(G)$ densely. The increasing projections converge strongly to their supremum $q\in M_r(A)$ by [F2]. Their ranges lie in the range of $p$, so $q\le p$. [F2, step 1.1, construct]

3.1 For each such $B$, let $q_{B,\varepsilon}=\mathbf1_{[\varepsilon,\infty)}(BB^*)$ for $\varepsilon>0$. Then $q_{B,\varepsilon}\le q_B$ and $q_{B,\varepsilon}\uparrow q_B$ as $\varepsilon\downarrow0$. The bounded Borel function $f_\varepsilon(t)=t^{-1}\mathbf1_{[\varepsilon,\infty)}(t)$ gives $q_{B,\varepsilon}=BB^*f_\varepsilon(BB^*)$. Hence every column of $q_{B,\varepsilon}$ is a right $A$-linear combination of columns of $B$, and $q_{B,\varepsilon}A^r\subseteq L$. Normality of the trace first lets these traces approach $\tau_r(q_B)$ and then, over finite subsets, $\tau_r(q)$. Conversely any finite projective submodule of $L$ embeds in $qA^r$, so step 2.1 bounds its dimension by $\tau_r(q)$. Taking suprema proves $\dim_A L=\tau_r(q)$. [F1, F3, step 2.1, step 2.2, algebra]

4.1 The module $(p-q)A^r$ embeds in $pA^r/L$, giving lower dimension bound $\tau_r(p)-\tau_r(q)$. For the reverse bound let a finite projective $P$ embed in that quotient. Projectivity lifts this map to a map $f:P\to pA^r$. For each projection $q_{B,\varepsilon}$ from step 3.1, the map $(p-q_{B,\varepsilon})f$ is injective: its kernel maps under $f$ into $q_{B,\varepsilon}A^r\subseteq L$, and therefore has zero image under the given embedding of $P$ into the quotient. Step 2.1 yields $\dim_A P\le\tau_r(p)-\tau_r(q_{B,\varepsilon})$. Taking the projection traces arbitrarily close to $\tau_r(q)$ proves the quotient formula. [F1, step 2.1, step 3.1, algebra]

5.1 Submodules of a zero-dimensional module are zero-dimensional by the defining supremum. If a finite projective embeds in a quotient of a zero-dimensional module, projectivity lifts it to an injective map into the original module; hence its dimension is zero, proving quotient closure. For an exact sequence $0\to U\to V\to W\to0$ with $U,W$ zero-dimensional, take any finite projective $P\subseteq V$. Its kernel $K=P\cap U$ and its image $P/K\subseteq W$ are zero-dimensional. Apply steps 3.1 and 4.1 inside a projection representation of $P$: those formulas give $\dim_A P=\dim_A K+\dim_A(P/K)=0$. Thus $V$ is zero-dimensional. Finally, each image of a zero-dimensional module in a filtered colimit is zero-dimensional by quotient closure; these images form a directed family. Every finite set of generators of a finite projective submodule of the colimit lies in one member, so that projective has dimension zero. This proves filtered-colimit closure. [step 2.1, step 3.1, step 4.1, construct, algebra] ∎
