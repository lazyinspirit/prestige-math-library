---
id: def-hh-affine-hecke-weight-temperedness-and-positive-position
kind: definition
title: Weight temperedness and positive Langlands data
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-hh-affine-hecke-parabolic-subalgebras-and-central-characters, lem-root-datum-combinatorics]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Maarten Solleveld, Affine Hecke Algebras and Their Representations"
      url: "https://arxiv.org/pdf/2009.03007"
      locator: "Definitions 3.6, 3.9 and 3.12; dual lattice convention."
---

## Definition

Use $L,B,E,W,H_P,T$ from [[def-hh-affine-hecke-parabolic-subalgebras-and-central-characters]]. Fix a positive definite $W$-invariant inner product on $E$, obtained by averaging any positive definite form over the finite group $W$ ([[lem-root-datum-combinatorics]]). For $P\subseteq B$ put
$$
E_P=\operatorname{span}_{\mathbb R}\{\beta^\vee:\beta\in P\},\qquad E^P=E_P^\perp=\{\nu:\beta(\nu)=0\text{ for every }\beta\in P\},\qquad K_P=-\sum_{\beta\in P}\mathbb R_{\ge0}\beta^\vee.
$$
In particular $K_\varnothing=\{0\}$. Set
$$
C=\{\nu\in E:\beta(\nu)\ge0\text{ for all }\beta\in B\},\qquad C_P^{++}=\{\nu\in E^P:\beta(\nu)>0\text{ for all }\beta\in B\setminus P\}.
$$
A finite dimensional $H_P$-module is **tempered** if all its logarithmic weights belong to $K_P$. It is **essentially tempered with real exponent $\nu$** if $\nu\in E^P$ and every logarithmic weight belongs to $\nu+K_P$. For a nonzero module this exponent is unique because $E^P\cap E_P=0$. An irreducible essentially tempered module is in **strictly positive position** if $\nu\in C_P^{++}$. A **Langlands datum** is a pair $(P,\sigma)$ with $\sigma$ such a module. Its **standard module** is $I_P(\sigma)$.

These are the weight definitions of temperedness and essential temperedness; no analytic characterization is presumed. For the full algebra the tempered condition is equivalently $|t(\ell)|\le1$ for every weight $t$ and every $\ell\in L^+=\{\ell:\langle\ell,\beta^\vee\rangle\ge0\ (\beta\in B)\}$. The equivalence follows because this rational polyhedral cone is generated as a real cone by its lattice points, and its polar cone is $K_B$. For $H_P$ use $P$ in place of $B$. The lattice-point assertion follows by expressing the cone as its central linear space plus nonnegative rational fundamental-weight rays and clearing denominators. The polar assertion also follows directly by expanding in the basis of simple coroots and testing the dual fundamental weights and both signs of every central vector.

The definition includes the whole central real exponent: when $P=B$, strict positivity imposes no additional inequality and $C_B^{++}=E^B$. Unitary central characters remain part of $\sigma$. Thus no uniqueness of a choice of unitary twist or of a semisimple-parabolic torus factorization is asserted.
