---
id: lem-nagata-coherent-ideal-extension-with-controlled-support
kind: lemma
title: Extend a coherent ideal while retaining its support constraint
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-ideal-sheaf
  - def-coherent-module-scheme
  - def-quasi-coherent-module-scheme
  - def-quotient-ring
  - def-multiplicative-subset-and-localisation
  - cor-localisation-commutes-with-kernels-images-and-cokernels
proof_strategy: direct
axiom_use: No choice principle is assumed. Noetherian open subsets admit finite principal covers; all localization comparisons use finite equalizers and common denominators. No AC-qualified global coherent-extension theorem is invoked.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Theorem 1.2, Cases 2 and 3, printed p. 665; the ideal extension with center avoiding the prescribed open is reconstructed here.
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Proof of Theorem 2.8, internal p. 22, extension of the ideal on V with center disjoint from U; reading of this page completed, no claim of full Theorem 2.4 proof reading.
---

## Statement

Let $X$ be a Noetherian scheme, $V\subseteq X$ an open subscheme, and $F\subseteq X$ a closed subset. Let $\mathcal I$ be a coherent ideal sheaf on $V$ such that $\mathcal I|_{V\setminus F}=\mathcal O_{V\setminus F}$. There is a coherent ideal sheaf $\mathcal J$ on $X$ such that
$$\mathcal J|_V=\mathcal I,\qquad \mathcal J|_{X\setminus F}=\mathcal O_{X\setminus F}.$$
In particular the center cut out by $\mathcal J$ has underlying support contained in $F$. The open set $V$ need not be dense, and $X$ need not be reduced or separated. Empty open sets and the zero and unit ideals are included.

## Statement references

[Deligne, Theorem 1.2, Cases 2 and 3](https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf)

[Conrad, proof of Theorem 2.8, internal p. 22](https://math.stanford.edu/~conrad/papers/nagatafinal.pdf)

## Facts & Assumptions

**Given:** The Noetherian scheme, open subscheme, closed subset and coherent ideal sheaf in the Statement.

[F1] An ideal sheaf is a subsheaf of the structure sheaf closed under multiplication by local functions. Coherent modules are quasi-coherent and locally finitely generated; on a Noetherian affine chart their ideal generators and relations are finite. The associated-module description on a principal open uses localization of the coordinate module. [[def-ideal-sheaf]] [[def-coherent-module-scheme]] [[def-quasi-coherent-module-scheme]]

[F2] Quotient rings impose the ideal relations, localization has its fraction arithmetic, and localization commutes with kernels. Finite products of modules also commute with localization: multiply finitely many denominators to put all coordinates over one denominator. [[def-quotient-ring]] [[def-multiplicative-subset-and-localisation]] [[cor-localisation-commutes-with-kernels-images-and-cokernels]]

## Proof

1.1 Put $W=V\cup(X\setminus F)$. Glue the ideal $\mathcal I$ on $V$ to the unit ideal on $X\setminus F$; they coincide on the intersection by the hypothesis. Explicitly, a local function belongs to the resulting ideal sheaf $\mathcal K\subseteq\mathcal O_W$ if its restriction to $V$ belongs to $\mathcal I$, with no additional condition on $X\setminus F$. This is a coherent ideal locally on $W$, since it is respectively $\mathcal I$ and the unit ideal on the displayed open cover. Let $\mathcal Q=\mathcal O_W/\mathcal K$. On those opens this is respectively $\mathcal O_V/\mathcal I$ and zero. For the open immersion $j:W\hookrightarrow X$, define $\mathcal J=\ker(\mathcal O_X\to j_*\mathcal Q)$ as a sheaf of ideals. We prove its local coherence explicitly below. [F1, F2, given, construct]

2.1 Fix an affine open $T=\operatorname{Spec}A$ of $X$. The open $W\cap T$ is quasi-compact because $T$ is Noetherian. Cover it by finitely many principal opens $D(f_i)$ on which $\mathcal K$ has its finite ideal presentations. On each such open the quotient $\mathcal Q$ is the quotient of the coordinate ring by the presented ideal; write its section module as $M_i$. Its restriction to $D(f_if_j)$ is obtained by localization; the two restrictions are identified because $\mathcal Q$ is already a sheaf on $W$. The sheaf axiom expresses $M=(j_*\mathcal Q)(T)$ as the equalizer of the two maps $\prod_iM_i\rightrightarrows\prod_{i,j}\mathcal Q(D(f_if_j))$. For $h\in A$, use the cover $D(f_ih)$ of $W\cap D(h)$. Every term of its analogous equalizer is the localization at $h$ of the corresponding term above. By [F2], localization commutes with the two finite products and the kernel of their difference. Consequently the restriction map identifies $M_h$ with $(j_*\mathcal Q)(D(h))$, compatibly with further localization. If $W\cap T$ is empty, these modules are all zero and the same conclusion holds. [F1, F2, step 1.1, algebra]

3.1 Let $J=\ker(A\to M)$. Applying [F2] to this map and using step 2.1 gives $\mathcal J(D(h))=J_h$ for every principal open of $T$. Thus the already defined sheaf $\mathcal J|_T$ has exactly the localization description of the ideal $J$, proving its quasi-coherence directly from [F1]. Since $A$ is Noetherian, $J$ is finitely generated. Its relations are finite as well: the kernel of any map from a finite free $A$-module to $J$ is a submodule of a finite free Noetherian module, hence finitely generated, and the same holds over every localized ring $A_h$. By exact localization [F2], these relation kernels have the required principal-open localization descriptions. This proves the coherence condition for $\mathcal J|_T$. These affine opens cover $X$, so $\mathcal J$ is coherent on $X$. This argument constructs the required ideal without appealing to a global coherent-extension theorem. [F1, F2, step 2.1, algebra]

4.1 Restrict the kernel formula in step 1.1 to $W$. Since $j$ is an open immersion, its restriction is $\ker(\mathcal O_W\to\mathcal Q)=\mathcal K$. Hence $\mathcal J|_V=\mathcal I$, while $\mathcal J|_{X\setminus F}$ is the unit ideal. These are the two asserted equalities, and the latter puts the support of the center inside $F$. If $V$ is empty the construction gives the unit ideal, and if $F=X$ it is the unconstrained coherent ideal extension. The zero ideal and the unit ideal on $V$ satisfy the same kernel computation. No density, reducedness or separatedness was used. [F1, F2, step 1.1, step 3.1, algebra] ∎
