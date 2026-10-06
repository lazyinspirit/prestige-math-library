---
id: def-bruhat-double-coset-basis-of-the-finite-hecke-algebra
kind: definition
title: "The Bruhat double-coset basis of the finite Hecke algebra"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms
  - thm-bruhat-decomposition-of-gl-n-over-a-finite-field
  - prop-cardinality-of-a-finite-bruhat-cell
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.1, the basis (T_w) with T_w = q^{l(w)} e_{B^F} w e_{B^F}, printed p. 46"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Section 5, the standard basis T_w of H(G,B) = e C[G] e, printed pp. 44-45"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Keep $G=\operatorname{GL}_n(\mathbb F_q)$ with upper triangular Borel $B$ and
the idempotent $e_B=|B|^{-1}\sum_{b\in B}b$ of the group algebra, and let
$H=e_B\mathbb C[G]e_B$ be the finite Hecke algebra with unit $e_B$
([[thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms]]). For
$w\in S_n$ let $\dot w:=P_w\in G$ be the permutation matrix of $w$ and let
$\ell(w)$ be its inversion length. Define the **standard basis element**
$$T_w\;:=\;q^{\ell(w)}\,e_B\,\dot w\,e_B\;=\;\frac{1}{|B|}\sum_{x\in B\dot wB}x\;\in\;H,$$
where the displayed equality is the computation below and uses
$|B\dot wB|/|B|=q^{\ell(w)}$
([[prop-cardinality-of-a-finite-bruhat-cell]]).

**The displayed equality.** In the group algebra, $e_B\dot we_B=|B|^{-2}\sum_{b,b'\in B}b\dot wb'$. Each element $x\in B\dot wB$ is hit by exactly $|S|$ pairs $(b,b')$, where $S:=B\cap\dot w^{-1}B\dot w$: writing $x=b_0\dot wb_0'$, the equation $b\dot wb'=x$ with $b,b'\in B$ is equivalent to $b_0'b'^{-1}\in S$, and then $b$ is determined. Hence $e_B\dot we_B=|S|\,|B|^{-2}\sum_{x\in B\dot wB}x$. The same parametrisation $B\times B\to B\dot wB$, $(b,b')\mapsto b\dot wb'$, shows $|B|^2=|S|\cdot|B\dot wB|$, equivalently $|B|/|S|=|B\dot wB|/|B|=q^{\ell(w)}$; substituting gives $q^{\ell(w)}e_B\dot we_B=|B|^{-1}\sum_{x\in B\dot wB}x$, as displayed.

**Basic properties.**

1. $T_1=e_B$ is the unit of $H$: for $w=1$ the cell is $B$, the sum
$|B|^{-1}\sum_{x\in B}x$ equals $e_B$, and $e_B$ is the unit of the corner.
2. By the Bruhat decomposition $G=\bigsqcup_{w\in S_n}B\dot wB$
([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]]) the elements
$T_w=q^{\ell(w)}e_B\dot we_B$, $w\in S_n$, are linearly independent and form a
$\mathbb C$-basis of $H$. Indeed the cells $B\dot wB$ are pairwise disjoint and
cover $G$, so the sums $|B|^{-1}\sum_{x\in B\dot wB}x$ are linearly independent
elements of $\mathbb C[G]$, and they span $H$ because $H=e_B\mathbb C[G]e_B$ is
spanned by the elements $e_Bge_B$ with $g\in G$, while
$e_B(bxb')e_B=(e_Bb)x(b'e_B)=e_Bxe_B$ for $b,b'\in B$ shows that $e_Bge_B$
depends only on the double coset $BgB$; hence $e_Bge_B=q^{-\ell(w)}T_w$ for the
unique $w$ with $g\in B\dot wB$. In particular $\dim_{\mathbb C}H=n!$.
3. Under the identification of $H$ with the convolution algebra of
$B$-bi-invariant functions on $G$, the element $T_w$ is the normalized
characteristic function of the double coset $B\dot wB$, taking the value
$|B|^{-1}$ on that cell: an element $h\in\mathbb C[G]$ is $B$-bi-invariant
precisely when $e_Bhe_B=h$, so $H$ is the space of functions constant on double
cosets, and the displayed formula exhibits $T_w$ as $|B|^{-1}$ times the sum of
the basis elements of the cell.

**Normalization.** This is the Dudas-Michel normalization, used for the rest of
this page: the multiplication rules established below on this page take the form
in which length-additive products of the standard basis elements are single
basis elements, and the rank-one quadratic relation in this normalization is
recorded by the page's rank-one relation result, reading
$T_s^2=(q-1)T_s+q\,T_1$ for a simple reflection $s$ with corresponding basis
element $T_s$. No choice principle is used: the permutation matrices $\dot w$
are explicit representatives of the double cosets.
