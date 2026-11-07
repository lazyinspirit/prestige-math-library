---
dependency_level: 10
id: cor-local-brauer-invariant-under-choice
kind: corollary
title: Classical local Brauer invariants, relative kernels and corestriction under
  choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- thm-local-class-formation-for-finite-residue-local-field
- thm-continuous-lyndon-hochschild-serre-spectral-sequence
- thm-hilbert-90-for-absolute-galois-group
- thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
- def-restriction-and-corestriction-on-group-cohomology
- thm-restriction-corestriction-composite-is-multiplication-by-the-index
justified_by: []
proof_strategy: direct
axiom_use: AC is assumed throughout; it covers the finite-dimensional and compactness
  choices. DC and supplied resolutions are used only where cohomology is invoked.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate
      lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Milne CFT ChapterIII§1 and IV§§3–4; locally adapted AC/DC corollary,
      with continuous transfer constructed explicitly rather than imported from ordinary
      cohomology.
verification: {}
---

## Statement

Assume AC and DC and the supplied cohomology convention. For every complete discretely valued field $K$ with finite residue field, the standard crossed-product comparison $b_K$ followed by the independently constructed local class-formation invariant defines an isomorphism
$$I_K:\operatorname{Br}_{\mathrm{alg}}(K)\xrightarrow{\sim}\mathbb Q/\mathbb Z.$$
The comparison is normalized by $b_K([A(c)])=[c]$, equivalently $b_K=-o_K$ for the matrix-descent obstruction.

For every finite separable extension $E/K$ of degree $m$, scalar restriction and the corestriction transported from continuous Galois cohomology satisfy
$$I_E(\operatorname{Res}_{E/K}\alpha)=m I_K(\alpha),\qquad
I_K(\operatorname{Cor}_{E/K}\beta)=I_E(\beta).$$
Here corestriction means precisely the continuous finite-index transfer constructed below, transported by $b_K,b_E$; no separate algebraic norm-algebra definition is asserted. The relative Brauer group $\ker(\operatorname{Br}_{\mathrm{alg}}(K)\to\operatorname{Br}_{\mathrm{alg}}(E))$ is identified with $(\frac1m\mathbb Z)/\mathbb Z$. If $E/K$ is Galois, actual inflation identifies $H^2(\operatorname{Gal}(E/K),E^\times)$ with that kernel.

These are explicit AC/DC assertions, not a choice-free resolution of the older unqualified local-invariant Statement.

## Statement references

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[[thm-local-class-formation-for-finite-residue-local-field]]

[[thm-continuous-lyndon-hochschild-serre-spectral-sequence]]

[[thm-hilbert-90-for-absolute-galois-group]]

[[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[[def-restriction-and-corestriction-on-group-cohomology]]

[[thm-restriction-corestriction-composite-is-multiplication-by-the-index]]

## Facts & Assumptions

**Given:** AC, DC, and the objects and cohomology conventions in the Statement.

[F1] Under AC/DC the standard comparison $b=-o$ identifies classical Brauer classes with continuous $H^2$, sends a standard crossed product of factor $c$ to $[c]$, and commutes with scalar extension. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F2] The independent local class formation has invariant isomorphisms to $\mathbb Q/\mathbb Z$; restriction for finite separable extensions multiplies by their degree. [[thm-local-class-formation-for-finite-residue-local-field]]

[F3] Continuous LHS under AC gives degree-two inflation injective with image the restriction kernel when $H^1$ of the closed normal subgroup vanishes. [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]]

[F4] Absolute Hilbert90 gives that first-cohomology vanishing. [[thm-hilbert-90-for-absolute-galois-group]]

[F5] Continuous cohomology is the finite-quotient direct limit under AC/DC. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[F6] Ordinary finite-index corestriction is the unique cohomological delta-functor map extending the coset norm, and corestriction after restriction is the index. We use these statements at finite groups only. [[def-restriction-and-corestriction-on-group-cohomology]] [[thm-restriction-corestriction-composite-is-multiplication-by-the-index]]

[A1] AC and DC are explicit hypotheses. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 Define $I_K$ as the composite in the Statement. Both factors are isomorphisms by [F1] and [F2]. Naturality of $b$ and [F2]'s degree rule prove $I_E\operatorname{Res}=mI_K$. In particular restriction is surjective, since multiplication by $m$ on $\mathbb Q/\mathbb Z$ is surjective. [A1, F1, F2, given, algebra]

1.2 The restriction kernel therefore has invariant subgroup $(\frac1m\mathbb Z)/\mathbb Z$. For Galois $E/K$, apply [F3] to $G_E\triangleleft G_K$ with coefficients $K_s^\times$. Its fixed module is $E^\times$, its quotient is $\operatorname{Gal}(E/K)$, and [F4] kills $H^1(G_E,K_s^\times)$. The actual degree-two inflation has precisely this kernel as image and is injective. Transport by [F1] gives the stated identification. [F1, F3, F4, step 1.1, algebra]

2.1 We construct the continuous transfer needed for the second equality, rather than apply an ordinary-group theorem to a profinite group. Let $H\le G$ be open of index $m$ in a compact profinite group, and let $M$ be a discrete continuous $G$-module, written additively. Choose representatives $T$ of the left cosets $G/H$. For an inhomogeneous $H$-cochain $c$, define
$$(Tc)(g_1,\ldots,g_n)=\sum_{t_n\in T}t_0c(h_1,\ldots,h_n),\qquad
g_it_i=t_{i-1}h_i\quad(i=n,\ldots,1),$$
where the recursion determines $t_{i-1}\in T$ and $h_i\in H$ uniquely. In degree zero the formula is $T(x)=\sum_{t\in T}tx$ for $x\in M^H$. These are continuous cochains: all coset selections are locally constant, and every summand uses continuous group operations and coefficient action. Normalized cochains stay normalized. Expanding the inhomogeneous differential gives $dT=Td$: the first term uses $g_1t_1=t_0h_1$, each middle merger replaces $(h_i,h_{i+1})$ by $h_ih_{i+1}$, and the last term reindexes the finite transversal. Thus this is a natural coefficient-compatible cochain map. [A1, given, construct, algebra]

2.2 Use open normal $U\triangleleft G$ with $U\subseteq H$; they are cofinal for both groups by taking finite intersections of conjugates of open subgroups. Every cochain descends to such a quotient with coefficients $M^U$ by [F5]. The formula in step 2.1 at $G/U,H/U$ is unchanged on refinement, using the images of the same $T$. At a finite quotient it is the corestriction of [F6]: it is a natural cohomological delta-functor map, since it commutes with coefficient maps and cocycle-lift connecting maps, and its degree-zero component is the coset norm; uniqueness in [F6] identifies it. Hence it is independent of $T$ on finite-level cohomology. Passing to [F5] proves a well-defined continuous corestriction, independent of representatives, with $\operatorname{Cor}\operatorname{Res}=m$ because that equality holds at every finite quotient by [F6]. This passage includes the actual coefficient inclusions. [A1, F5, F6, step 2.1, algebra]

3.1 Apply this construction to $G_K,G_E,K_s^\times$ and transport it by the fixed comparison $b$. For $\beta\in\operatorname{Br}_{\mathrm{alg}}(E)$ choose $\alpha$ with $\operatorname{Res}\alpha=\beta$, possible by step 1.1. Then
$$I_K(\operatorname{Cor}\beta)=I_K(m\alpha)=mI_K(\alpha)=I_E(\beta).$$
Only surjectivity of degree multiplication and the proved transfer identity were used. All formulas include $m=1$ and zero classes. No local Artin theorem, multiplicative norm index, unit Herbrand theorem, or global reciprocity is an input. [F1, F2, step 1.1, step 2.2, choose, algebra] ∎
