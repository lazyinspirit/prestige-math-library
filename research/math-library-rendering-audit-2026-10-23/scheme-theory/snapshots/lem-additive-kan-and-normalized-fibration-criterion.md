---
id: lem-additive-kan-and-normalized-fibration-criterion
kind: lemma
title: "Additive Kan maps and the normalized fibration criterion"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
proof_strategy: constructive
justified_by: []
aliases: []
deps:
  - def-simplicial-horn-and-kan-fibration
  - thm-dold-kan-equivalence-for-simplicial-modules
  - lem-simplicial-normalization-prism-and-trivial-fibration-criterion
  - lem-trivial-simplicial-fibration-fibres-products-and-contraction
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Goerss-Schemmerhorn, Model Categories and Simplicial Methods"
      url: "https://arxiv.org/pdf/math/0609537"
      locator: "Reconstructed normalized criterion; full Stacks 14.31.6-14.31.9, PDF 57-60; exact source statements used as route, unprinted prerequisites expanded locally"
    - title: "The Stacks Project, Chapter 14 (Simplicial Methods)"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Sections 14.5-14.8, 14.24.1-14.24.3 and 14.31.1-14.31.9, PDF 57-60"
---

## Statement

Every simplicial abelian group is Kan
([[def-simplicial-horn-and-kan-fibration]]). A homomorphism $f$ of simplicial
abelian groups is a Kan fibration exactly when $N(f)_n$ is surjective for all
$n>0$. It has boundary lifting exactly when it is a Kan fibration and a
quasi-isomorphism on normalized complexes
([[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]]).
Underlying horn and boundary lifting therefore detect precisely these classes
for simplicial modules and for commutative unital or nonunital simplicial
algebras. The Axiom of Choice ([[def-axiom-of-choice]]) is assumed for the
arbitrary-monomorphism contraction route in the boundary converse.

## Facts & Assumptions

**Given:** A homomorphism $f\colon X\to Y$ of simplicial abelian groups, with normalized complexes $N(X),N(Y)$ and $N(f)$; AC.

[F1] Horns $\Lambda^k[n]$, Kan fibrations, anodyne inclusions and the lifting translation are as defined for simplicial sets; the additive horn identities are the simplicial identities ([[def-simplicial-horn-and-kan-fibration]]).

[F2] The normalization $N$ is an exact equivalence with explicit inverse; in particular every simplicial abelian group decomposes naturally as $M_n=\bigoplus_{\alpha\colon[n]\twoheadrightarrow[r]}N(M)_r$ through the degeneracy maps, $N$ preserves finite limits and colimits and turns degreewise surjections into surjections ([[thm-dold-kan-equivalence-for-simplicial-modules]]).

[F3] A termwise surjective homomorphism inducing a quasi-isomorphism of associated complexes is a trivial Kan fibration, hence lifts all boundary inclusions and all monomorphisms; a homomorphism that is a homotopy equivalence of underlying simplicial sets induces a quasi-isomorphism ([[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]], [[lem-trivial-simplicial-fibration-fibres-products-and-contraction]]).



## Proof

1.1 Every simplicial abelian group is Kan. A horn in $X$ prescribes $x_i\in X_{n-1}$ for $i\ne k$ with the compatibility $d_ix_j=d_{j-1}x_i$ for $i<j$, $i,j\ne k$. Beginning with $u=0$, for $i=0,\dots,k-1$ replace $u$ by $u+s_i(x_i-d_iu)$: the replacement fixes face $i$ because $d_is_i=\mathrm{id}$, and it preserves all earlier faces because for $j<i$ the identity $d_j(x_i-d_iu)=d_{i-1}(x_j-d_ju)=0$ holds and $d_js_i=s_{i-1}d_j$. Then for $i=n,n-1,\dots,k+1$ replace $u$ by $u+s_{i-1}(x_i-d_iu)$, which fixes face $i$ since $d_is_{i-1}=\mathrm{id}$ and preserves every already fixed face $j<k$ and $j>i$ by the same compatibility identities. The resulting $u$ fills every prescribed face, so $X$ is Kan. [F1, given, construct]

1.2 Kan implies normalized surjectivity. Let $f$ be a Kan fibration and let $y\in N(Y)_n$, $n>0$. Use the zero horn $\Lambda^n[n]\to X$ and target simplex $y\colon\Delta[n]\to Y$; its faces $d_iy$ for $i<n$ are zero, so this is a commutative horn square. A horn lift $x\in X_n$ satisfies $f(x)=y$ and $d_ix=0$ for $i<n$, hence $x\in N(X)_n$; thus $N(f)_n$ is surjective. [F1, F2]

2.1 Termwise surjective additive maps are Kan. If $f\colon X\to Y$ is termwise surjective and a horn in $Y$ is given, lift its target simplex $y$ to some $z\in X_n$, subtract the faces of $z$ from the prescribed horn to obtain a compatible horn in the kernel $\ker f$ (which is a simplicial abelian group, hence Kan by step 1.1), fill that horn by step 1.1, and add the filler to $z$. The result is a horn filler in $X$. [F1, step 1.1]

2.2 Boundary lifting from Kan plus quasi-isomorphism. Suppose $f$ is Kan and $N(f)$ is a quasi-isomorphism. Positive normalized degrees surject by step 1.2. In degree zero, given $y_0\in Y_0$ choose $x_0\in X_0$ with the same class in $H_0$ and write $y_0-f(x_0)=\partial v$ for some $v\in N(Y)_1$; lifting $v$ to $N(X)_1$ by step 1.2 and correcting $x_0$ gives degree-zero surjectivity, so all normalized degrees are surjective and the Dold-Kan decomposition makes $f$ termwise surjective. The kernel $K$ of $f$ then has acyclic normalization by the exact sequence of normalized complexes, and an explicit boundary-filling argument applies: lift the target simplex, reduce to a boundary in $K$, fill faces $0,\dots,n-1$ by successive degeneracy corrections as in step 1.1, and use acyclicity of $N(K)$ to correct the last normalized discrepancy. For $n=0$ termwise surjectivity suffices. Hence $f$ has boundary lifting. [F1, F2, step 1.1, step 1.2]

3.1 Normalized surjectivity implies Kan. Assume $N(f)_n$ is surjective for all $n>0$, and let $D_n\subseteq Y_n$ be the set of simplices whose vertex component in $\pi_0(Y)=Y_0/\partial N(Y)_1$ lies in the image of $\pi_0(X)$; every vertex of a simplex has the same component, since successive vertices are joined by an edge whose difference is a boundary, so $D$ is a simplicial subgroup and a union of components, and $f$ maps into $D$. By the Dold-Kan decomposition of [F2], an element of $D_n$ lifts to $X_n$: write it in the summands $N(Y)_r$ ($r>0$), lift each coefficient by the hypothesis, and for the $r=0$ coefficient use that its component lies in the image of $\pi_0(X)$, choosing $x_0\in X_0$ and $v\in N(Y)_1$ with $y_0-f(x_0)=\partial v$, lifting $v$ to $N(X)_1$ and correcting $x_0$. Hence $f\colon X\to D$ is termwise surjective and is Kan by step 2.1. A horn square for $f$ with $n\ge1$ has a nonempty horn, so its target simplex has a vertex and therefore lies in $D$; filling it over $D$ by step 2.1 fills it over $Y$. [F1, F2, step 2.1]

4.1 Converse. Let $f$ have boundary lifting. Then it has horn lifting, and by the boundary-lifting criterion of [F3] it lifts every monomorphism, in particular the empty inclusions $\varnothing\subset\Delta[n]$ (a degreewise surjectivity statement) and $\varnothing\subset Y$ (giving a section $s$ of $f$). Lifting the inclusion $X\times\partial\Delta[1]\subseteq X\times\Delta[1]$ with endpoints $\mathrm{id}_X$ and $sf$ gives a homotopy $\mathrm{id}_X\simeq sf$, while $fs=\mathrm{id}_Y$; the prism and free-additive homology argument of [F3] then shows that $N(f)$ is a quasi-isomorphism. Combining with step 2.2, boundary lifting is exactly Kan plus a quasi-isomorphism on normalized complexes, and the criterion applies to simplicial modules and to unital or nonunital simplicial algebras through their underlying additive groups. [F2, F3, step 2.2, discharge-construct] ∎ 