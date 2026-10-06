---
id: lem-pushforward-pullback-compatibility-chow
kind: lemma
title: "Proper pushforward commutes with flat pullback"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps:
  - cor-length-is-additive-in-short-exact-sequences
  - def-axiom-of-choice
  - def-fibre-product-schemes-universal-property
  - def-flat-morphism-schemes
  - def-proper-morphism
  - lem-cycle-of-a-closed-subscheme
  - lem-flat-morphisms-stable-base-change
  - lem-flat-pullback-chow-groups
  - lem-proper-pushforward-of-cycles-well-defined
  - lem-proper-stable-base-change
  - thm-affine-quasi-coherent-equivalence
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-proper-quasi-finite-is-finite
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Section 42.15 (tag 02RV ff.)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Section 42.15: proper pushforward and flat pullback commute, with the generic-length computation"
    - title: "The Stacks Project, Intersection Theory, Sections 43.10-43.12"
      url: "https://stacks.math.columbia.edu/download/intersection.pdf"
      locator: "Chapter 43, Sections 43.10-43.12: the base-change compatibility of proper pushforward and flat pullback"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
proper/quasi-finite and scheme base-change suppliers. Let $k$ be a field and let
$$\begin{array}{ccc} X' & \xrightarrow{g'} & X\\ \downarrow f' & & \downarrow f\\ Y' & \xrightarrow{g} & Y\end{array}$$
be a cartesian square of schemes locally of finite type over $k$
([[def-fibre-product-schemes-universal-property]]), with $f$ proper (hence $f'$
proper, [[lem-proper-stable-base-change]]) and $g$ flat of relative dimension
$n$ with all fibres of pure dimension $n$ (hence $g'$ flat of relative dimension
$n$, [[lem-flat-morphisms-stable-base-change]]). Then the two graded
homomorphisms $A_d(X)\to A_{d+n}(Y')$ agree:
$$g^*\circ f_*\;=\;f'_*\circ g'^*,$$
where $f_*,f'_*$ are proper pushforwards
([[lem-proper-pushforward-of-cycles-well-defined]]) and $g^*,g'^*$ are flat
pullbacks ([[lem-flat-pullback-chow-groups]]).

## Facts & Assumptions

**Given:** the Axiom of Choice; a cartesian square as in the statement, with $f$ proper and $g$ flat of pure relative dimension $n$; a coherent $\mathcal O_X$-module $\mathcal F$ supported in dimension at most $d$.

[L1] The cycle of a coherent sheaf $[\mathcal F]_d$ is the sum of the generic lengths over the $d$-dimensional components of the support, additive in short exact sequences with a common dimension bound, and flat pullback of cycles is the linear extension of $[V]\mapsto[f^{-1}V]$ ([[lem-cycle-of-a-closed-subscheme]]).

[L2] Proper pushforward of cycles is the norm-degree pushforward on integral cycles and descends to Chow groups; flat pullback of cycles is defined for flat morphisms of pure relative dimension $n$ and descends to Chow groups ([[lem-proper-pushforward-of-cycles-well-defined]], [[lem-flat-pullback-chow-groups]]).

[L3] A proper quasi-finite morphism is finite; on affine schemes the global sections of a quasi-coherent sheaf are computed by the Čech complex of a finite affine cover, and flat base change of tensor products commutes with kernels ([[thm-proper-quasi-finite-is-finite]], [[thm-affine-quasi-coherent-equivalence]], [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]). Length is additive in short exact sequences ([[cor-length-is-additive-in-short-exact-sequences]]).

## Proof

**Proof technique:** direct; compare the two operations on the cycles of coherent sheaves by computing generic lengths, then apply the flat-base-change isomorphism for the direct image sheaf.

1.1 Proper pushforward of the cycle of a sheaf. Let $\mathcal F$ be coherent on $X$ with support of dimension at most $d$. Then $f_*[\mathcal F]_d=[f_*\mathcal F]_d$ in $Z_d(Y)$. Indeed, let $\eta$ be the generic point of a $d$-dimensional component of $\operatorname{Supp}(f_*\mathcal F)$; every point of $\operatorname{Supp}\mathcal F$ mapping to $\eta$ is generic in a $d$-dimensional support component, because otherwise its closure would have dimension less than $d$ and map onto a neighbourhood of $\eta$ of dimension $d$, which is impossible; hence the fibre of the support over $\eta$ is finite. Give that support the closed scheme structure defined by $\operatorname{Ann}\mathcal F$; $\mathcal F$ is a coherent sheaf on this closed subscheme. Its restricted morphism to $Y$ is proper and is quasi-finite over $\eta$, so after removing the closed image of its non-quasi-finite locus it is finite near $\eta$ by [L3]. Then $(f_*\mathcal F)_\eta\cong\bigoplus_{\xi\mapsto\eta}\mathcal F_\xi$ is a finite module of finite length over the local ring $\mathcal O_{Y,\eta}$, and a composition series over each local ring gives $\ell_{\mathcal O_{Y,\eta}}((f_*\mathcal F)_\eta)=\sum_{\xi\mapsto\eta}[\kappa(\xi):\kappa(\eta)]\ell_{\mathcal O_{X,\xi}}(\mathcal F_\xi)$, with the residue degree weights because the simple factors of $\mathcal F_\xi$ acquire composition factors of $\kappa(\xi)$ over $\kappa(\eta)$; comparing with the norm-degree definition of $f_*[\mathcal F]_d$ proves the identity. If the image of a component has dimension less than $d$, both $d$-cycles vanish at that component. [L1, L2, L3, given, algebra]

1.2 Flat pullback of the cycle of a sheaf. For $\mathcal F$ coherent on $Y$ supported in dimension at most $d$ one has $g^*[\mathcal F]_d=[g^*\mathcal F]_{d+n}$ in $Z_{d+n}(Y')$: at a generic point $\xi$ of a top-dimensional component of the preimage of its support, with $\eta=g(\xi)$, the stalk of $g^*\mathcal F$ is $\mathcal F_\eta\otimes_{\mathcal O_{Y,\eta}}\mathcal O_{Y',\xi}$. Tensoring a composition series of the finite-length module $\mathcal F_\eta$ with this flat local algebra shows that its length is $\ell_{\mathcal O_{Y,\eta}}(\mathcal F_\eta)\,\ell_{\mathcal O_{Y',\xi}}(\mathcal O_{Y',\xi}/\mathfrak m_\eta\mathcal O_{Y',\xi})$. The second factor is the generic fibre multiplicity and can exceed one for a nonreduced fibre. [L1, L2, given, algebra]

1.3 Flat base change for the direct image. For a quasi-coherent $\mathcal O_X$-module $\mathcal G$ there is a natural isomorphism $g^*f_*\mathcal G\cong f'_*g'^*\mathcal G$: on an affine open $\operatorname{Spec}A\subseteq Y'$ whose image in $Y$ is contained in an affine open over which $f$ is proper and $\mathcal G$ is quasi-coherent, the preimage under $f$ has a finite affine cover with affine finite intersections (properness gives separatedness and quasi-compactness), the Čech complex computes the degree-zero sections by [L3], tensoring with $A$ over the base ring is exact, and the comparison maps agree on overlaps; hence they glue. [L3, given, algebra]

2.1 Compatibility on cycles. Apply steps 1.1, 1.2 and 1.3 to $\mathcal F=\mathcal O_V$ for an integral closed subscheme $V\subseteq X$ of dimension $d$: $g^*f_*[V]=g^*[f_*\mathcal O_V]_d=[g^*f_*\mathcal O_V]_{d+n}=[f'_*g'^*\mathcal O_V]_{d+n}=f'_*[g'^*\mathcal O_V]_{d+n}=f'_*g'^*[V]$, where the middle equality is step 1.3 applied to the quasi-coherent sheaf $\mathcal O_V$ and the outer equalities are steps 1.1 and 1.2; the finite-support and locally finite cases are handled by the same identities term by term. Since both sides are additive, $g^*f_*=f'_*g'^*$ on cycles and therefore on Chow groups by [L2]. [L1, L2, step 1.1, step 1.2, step 1.3, algebra] ∎ 
