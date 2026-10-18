---
id: lem-na-rt0-unisolvence-and-global-conformity
kind: lemma
title: RT0 facet-flux unisolvence and global H(div) conformity
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-na-simplicial-mesh-rt-bdm-spaces, def-na-hdiv-space, def-na-h0div-space, lem-na-hdiv-weak-normal-trace, lem-na-piola-preserves-rt-bdm-spaces, lem-na-piola-divergence-and-flux-identities, lem-affine-simplex-gauss-green-formula, lem-na-simplex-h1-facet-trace-bound, lem-na-h1-interior-facet-traces-agree, lem-na-smooth-neighborhood-dense-in-h1-simplex, lem-weak-derivatives-are-unique-almost-everywhere, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div) finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §14.1, printed pp. 156–157: RT0 unisolvence, facet flux degrees of freedom and global conformity."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §§2.2–2.3: RT degrees of freedom and conformity."
---

## Statement

Assume Countable Choice and the mesh conventions of [[def-na-simplicial-mesh-rt-bdm-spaces]]. On each $d$-simplex $K$, $\operatorname{RT}_0(K)=\{a+cx:a\in\mathbb R^d,c\in\mathbb R\}$ has dimension $d+1$, and the $d+1$ integrated outward facet-normal fluxes determine its element uniquely. A piecewise RT0 field belongs to $H(\operatorname{div};D)$ exactly when its oriented integrated fluxes match across every shared facet; such a field belongs to $H_0(\operatorname{div};D)$ exactly when its normal component (equivalently its integrated outward flux) also vanishes on every boundary facet.

## Facts & Assumptions

**Given:** Countable Choice, a conforming affine simplicial mesh, and piecewise RT0 vector polynomials with the stated facet flux conditions.

[A1] Countable Choice is inherited through the Sobolev trace and density interfaces. ([[def-countable-choice]])

[F1] RT0 on a cell is $\mathbb P_0(K)^d+x\mathbb P_0(K)$, and each simplex has $d+1$ facets. ([[def-na-simplicial-mesh-rt-bdm-spaces]])

[F2] Piola preserves RT0 and its divergence and oriented facet flux. ([[lem-na-piola-preserves-rt-bdm-spaces]], [[lem-na-piola-divergence-and-flux-identities]])

[F3] On a smooth field on a simplex, the integral of its divergence equals the sum of its outward facet fluxes. ([[lem-affine-simplex-gauss-green-formula]])

[F4] H1 functions on a cell have $L^2$ facet traces; the traces from adjacent cells agree for a global H1 function. ([[lem-na-simplex-h1-facet-trace-bound]], [[lem-na-h1-interior-facet-traces-agree]])

[F5] Smooth-neighborhood functions are dense in H1 of each cell. ([[lem-na-smooth-neighborhood-dense-in-h1-simplex]])

[F6] The weak normal trace on the global domain is Green duality, and H0(div) is its zero kernel. ([[lem-na-hdiv-weak-normal-trace]], [[def-na-h0div-space]])

[F7] An $L^2$ representative of a weak derivative is unique almost everywhere. ([[lem-weak-derivatives-are-unique-almost-everywhere]])

## Proof

1.1 On the reference simplex $\widehat S_d=\{x_i>0,\sum_i x_i<1\}$, each coordinate facet has outward normal $-e_i$ and area $1/(d-1)!$, while the top facet has outward normal $(1,\ldots,1)/\sqrt d$ and area $\sqrt d/(d-1)!$. For $\widehat v=a+cx$, the constant-vector facet fluxes sum to zero by [F3], and the flux sum of $cx$ is $c/(d-1)!=dc|\widehat S_d|$. If all facet fluxes vanish then $c=0$; the coordinate-facet fluxes then force each $a_i=0$. The flux map is injective between spaces of dimension $d+1$, hence bijective. [A1, F1, F3, algebra]

2.1 For any physical simplex, [F2] transports the reference flux degrees of freedom bijectively, so the same unisolvence holds. On each facet, $(a+cx)\cdot n$ is constant because $x\cdot n$ is constant on its supporting hyperplane; equal integrated fluxes therefore give equal normal components. [F1, F2, step 1.1, algebra]

3.1 Let $v$ be a piecewise RT0 field with matching shared-facet fluxes. For $\phi\in C_c^\infty(D)$, apply [F3] to $\phi v$ cellwise and sum: interior facet terms cancel by step 2.1 and the common value of $\phi$, and boundary terms vanish because $\phi$ is compactly supported. Thus $\int_Dv\cdot\nabla\phi=-\sum_K\int_K(\operatorname{div}v)\phi$. The cellwise divergence is constant and in $L^2$, so $v\in H(\operatorname{div};D)$ by definition. [F1, F3, step 2.1, algebra]

3.2 Conversely, let $v$ be a piecewise RT0 field in H(div), with global $L^2$ divergence $g$. For every test supported in one cell, the global distributional identity and cellwise Gauss–Green identify $g$ with that cell's polynomial divergence; uniqueness [F7] gives equality almost everywhere there. For arbitrary $\phi\in C_c^\infty(D)$, summing cellwise Green formulas and comparing with the global distributional identity yields $\sum_{F=K^+\cap K^-\,\mathrm{interior}}\int_F\phi(v_{K^+}\cdot n_{K^+}+v_{K^-}\cdot n_{K^-})=0$. Each normal sum is constant on its facet. If one were nonzero, choose a nonnegative smooth test supported in a small ball around a relative-interior point of that facet, meeting no other facet, and positive on a subpatch; the sum would be a nonzero constant times a positive surface integral, a contradiction. Hence all interior fluxes match. [A1, F3, F7, step 2.1, construct, contradiction]

4.1 Suppose the interior fluxes match. For $w\in H^1(D)$, approximate each restriction $w|_K$ in H1 by smooth-neighborhood functions using [F5]. The trace bound [F4] and volume convergence pass cellwise Gauss–Green to each restriction. Interior traces of $w$ agree by [F4], and the normal components of $v$ agree by step 2.1, so interior terms cancel. If $c_F$ denotes the constant outward normal component on a boundary facet $F$, the resulting identity is $\int_D(v\cdot\nabla w+\operatorname{div}v\,w)=\sum_{F\subset\partial D}c_F\int_F\gamma_Fw$. By [F6] this is the weak normal-trace functional; in particular, if every boundary flux is zero then $v\in H_0(\operatorname{div};D)$. [A1, F4, F5, F6, step 2.1, step 3.1, construct, algebra]

5.1 Conversely, if $v\in H_0(\operatorname{div};D)$, its zero trace and the identity in step 4.1 give $\sum_{F\subset\partial D}c_F\int_F\gamma_Fw=0$ for every $w\in H^1(D)$. For any selected boundary facet, choose a smooth function on $\mathbb R^d$ supported in a small ball about a relative-interior point of that facet, positive on a subpatch, and meeting no other boundary facet; its restriction lies in $H^1(D)$. The sum then reduces to the selected $c_F$ times a positive surface integral, so $c_F=0$. Thus every boundary facet flux vanishes. [A1, F4, F6, step 3.2, step 4.1, construct, contradiction] ∎
