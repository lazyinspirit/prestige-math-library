---
page: compact-support-sheaf-calculus
title: Compact Support Sheaf Calculus
status: draft
requires:
- cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes
- compactness
- hausdorff-via-the-diagonal
- presheaves-sheaves-stalks-and-sheafification
- relations-functions-and-quotients
- sheaf-cohomology-cech-cohomology-and-comparison
- sheaf-operations-exactness-ringed-spaces-and-module-pullback
- uniform-spaces
- simplicial-complexes-and-simplicial-homology
- simplicial-subdivision-and-simplicial-approximation
- chain-complexes-and-homology
- derived-categories
- ext-and-balanced-resolutions
items:
- def-support-of-a-sheaf-section
- lem-compatible-refinement-for-tuple-indexed-coverings
- lem-sections-near-a-compact-set-are-sections-on-that-set
- lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions
- def-c-soft-sheaf
- def-compactly-supported-global-sections
- lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology
- lem-c-soft-field-sheaves-are-compact-support-acyclic
- lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward
- lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology
- lem-vanishing-compactly-supported-h1-on-opens-implies-c-soft
- lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions
examples: []
---

**Objective.** This page develops the compact-support calculus for sheaves of
abelian groups (in particular of vector spaces) on locally compact Hausdorff
spaces, over the Axiom of Choice, and isolates the exact points where choice
enters. The support of a section and the compactly supported global sections
$\Gamma_c$ come first, including the left exactness of $\Gamma_c$ and its right
derived functors $H^q_c$ built from a functorial injective resolution datum.
C-softness is introduced in the neighbourhood form supplied by the extension
lemma for sections over a compact set, and the page proves its basic theory:
injective sheaves are c-soft, c-soft sheaves are compact-support acyclic, and
c-softness is preserved by open and closed restriction, extension by zero,
finite direct sums and the constant coefficient case; the compactly supported
section sequence of a short exact sequence with c-soft kernel and middle term
is short exact. The criterion that vanishing of $H^1_c$ on every open subspace
forces c-softness is proved by the open/closed decomposition of the space along
a compact set, and it identifies c-softness with concentration of
$R\Gamma_c$ in degree zero.

**Around the main line.** The field-sheaf foundations also establish exact inverse image, derived tensor–Hom and inverse/direct-image adjunctions, injective flasqueness and flasque acyclicity before they are used in the fibrewise resolution argument. Two further tools are developed: the compact-support
calculus of extension by zero along an open embedding and of direct image
along its closed complement, giving the degree-zero and derived identities
used in the criterion and in the dimension bound; and, for compact Hausdorff
spaces, the identification of the refinement-limit Čech cohomology with sheaf
cohomology, which turns finite covers of bounded order into vanishing theorems
for arbitrary sheaves. The page closes with the finite-polyhedron instantiation
of the order bound --- every sheaf on a finite compact polyhedron of dimension
$d$ has vanishing cohomology above $d$, and the same bound holds for open
subspaces and their compactly supported cohomology --- and with the theorem
that a uniform fibrewise compact-support dimension bound yields bounded
resolutions by fibrewise c-soft sheaves, the input consumed by the analytic
six-operations page that requires this one.
