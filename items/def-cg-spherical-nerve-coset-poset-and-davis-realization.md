---
id: "def-cg-spherical-nerve-coset-poset-and-davis-realization"
kind: definition
title: "Spherical subsets, the nerve, the poset of spherical cosets, and the Davis realization"
status: published
origin: pipeline
dependency_level: 7
deps: ["def-hh-coxeter-matrix-word-group-and-length", "def-cg-parabolic-quotient-and-two-sided-minima", "def-generated-subgroup", "def-coset", "def-group", "lem-finite-coset-partition", "def-abstract-simplicial-complex", "def-face-poset-and-order-complex", "def-geometric-realization-of-an-abstract-simplicial-complex", "prop-a-finite-simplicial-complex-has-compact-hausdorff-realization", "thm-hh-parabolic-minimal-representatives-and-length-additivity"]
justified_by: ["lem-cg-spherical-coset-inclusion-and-intersection", "thm-cg-davis-complex-cell-incidence-and-stabilizers"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, author manuscript of the first edition (Princeton Univ. Press, 2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Definition 7.1.1 and (7.1) in §7.1, pp. 123-126; §7.2, pp. 126-127 (order realization |P|, K=|S|)"
    - title: "R. Boyd, Homology of Coxeter and Artin groups, PhD thesis, University of Aberdeen, 2018 (with corrections)"
      url: "https://www.maths.gla.ac.uk/~rboyd/Boyd%20Thesis%20with%20corrections.pdf"
      locator: "§1.3, Definitions 1.3.1, 1.3.3, 1.3.4 and the action paragraph, printed pp. 20-21"
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (MSC lecture slides, Tsinghua, 2013)"
      url: "https://people.math.osu.edu/davis.12/papers/Davis-MSC.pdf"
      locator: "slides 'Second realization: the cell complex Sigma', 'Filling in Cay(W,S)', 'The dual construction of Sigma'"
---

## Definition

Let $(S,m)$ be a Coxeter matrix with $S$ finite, let $W$ be the presented group with length function $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]), and for $T\subseteq S$ let $W_T=\langle s:s\in T\rangle\le W$ ([[def-cg-parabolic-quotient-and-two-sided-minima]] (1), [[def-generated-subgroup]]); recall $W_T=\{w\in W:S(w)\subseteq T\}$ for the support $S(w)$ of a reduced expression ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1)).

**(1) Spherical subsets and the nerve.** A subset $T\subseteq S$ is **spherical** when $W_T$ is finite. Let $\mathbb S$ denote the set of spherical subsets, partially ordered by inclusion; it has least element $\emptyset$ because $W_\emptyset=\{1\}$. If $T\in\mathbb S$ and $T'\subseteq T$, then $W_{T'}\le W_T$ ([[def-generated-subgroup]]), so $T'$ is spherical by [[lem-finite-coset-partition]]: $\mathbb S$ is downward closed. For each $s\in S$, the relation $s^2=1$ makes $W_{\{s\}}$ finite, so every singleton is spherical ([[def-hh-coxeter-matrix-word-group-and-length]]). The **nerve** $L$ is the abstract simplicial complex ([[def-abstract-simplicial-complex]]) on vertex set $S$ whose nonempty simplices are the nonempty spherical subsets; it also contains the empty simplex by the library's complex convention. Since $S$ is finite, $L$ is finite.

**(2) The poset of spherical cosets.** For $T\in\mathbb S$ and $w\in W$ let $wW_T$ be the left coset ([[def-coset]]), and put $$WS:=\{wW_T:w\in W,\ T\in\mathbb S\},$$ partially ordered by inclusion of subsets of $W$. For $T=\emptyset$ this gives $wW_\emptyset=\{w\}$, so $W$ sits inside $WS$ as the set of minimal elements. A member of $WS$ is the resulting subset of $W$, not a choice of representative pair $(w,T)$; the equality, inclusion, and intersection criteria for these cosets are proved in [[lem-cg-spherical-coset-inclusion-and-intersection]].

**(3) The Davis realization.** $\Sigma:=|WS|$ is the geometric realization of the order complex of the poset $WS$ ([[def-face-poset-and-order-complex]], [[def-geometric-realization-of-an-abstract-simplicial-complex]]): its vertices are the cosets $wW_T$, and its simplices are the finite chains in $WS$. The **chamber** is $K:=|\mathbb S|$, the order complex of the poset of spherical subsets, and $j\colon K\to\Sigma$ is the simplicial map induced by $T\mapsto W_T$; this is simplicial because $T\subseteq T'$ implies $W_T\subseteq W_{T'}$. As an abstract complex, $K$ is the cone with apex $\emptyset$ over the barycentric subdivision of $L$, and it is finite, hence compact and Hausdorff ([[prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]]).

**(4) The $W$-action.** Left multiplication $(v,wW_T)\mapsto (vw)W_T$ is a well-defined left action of $W$ on the set $WS$ by order-preserving bijections ([[def-group]], [[def-coset]]); it induces a simplicial action of $W$ on $\Sigma$. The **chambers** of $\Sigma$ are the images $w j(K)=wK$, $w\in W$, and the map $w\mapsto wK$ is injective: the vertex $W_\emptyset=\{1\}$ of $K$ is carried to $wW_\emptyset=\{w\}$, and $\{v\}=\{w\}W_\emptyset$ forces $v=w$ ([[def-coset]]).

## Remarks

- **(5) Abstentions.** Nothing beyond these constructions is asserted here: not that the chambers meet one another in faces, not that the spherical cosets $wW_T$ carry the structure of the Coxeter cells $C_T$, not that the action on $\Sigma$ is proper with compact quotient, and not that $\Sigma$ is simply connected. Those assertions are the content of [[thm-cg-davis-complex-cell-incidence-and-stabilizers]], a recorded justifier of this definition; simple connectivity is proved later on this page.
- **Choice.** No Choice is used in (1)-(4): all constructions are set-theoretic over the finite set $S$ and the fixed group $W$.
