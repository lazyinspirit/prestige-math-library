---
id: lem-s-idelic-primary-class-formation
kind: lemma
title: Primary class formation for S-idèle classes
author: /root/poitou
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-s-idele-class-module-of-a-global-field
  - thm-hilbert-90-for-finite-galois-extension
  - thm-number-field-global-class-formation
  - thm-function-field-global-class-formation-finite-constants
  - lem-s-outside-units-are-cohomologically-acyclic
  - lem-s-ideal-classes-capitulate-inside-unramified-tower
  - lem-quotient-class-formation-primary-invariants
  - thm-long-exact-sequence-in-cohomology
  - thm-continuous-lyndon-hochschild-serre-spectral-sequence
proof_strategy: direct
axiom_use: AC, Countable Choice and Dependent Choice are assumed, including their use in the actual number-field and function-field class formations and S-ideal capitulation.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I §4, Proposition 4.2 and Lemma 4.4, printed pp.50–51; the precise quotient, unramified unit and ideal-capitulation steps are supplied below.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K$ be a global field, let $S$ be a nonempty set of its places containing all archimedean places, and let $K_S$ be the maximal Galois extension of $K$ unramified outside $S$. For each finite $F\subset K_S$ let $S_F$ be the places above $S$, $C_{F,S_F}$ its $S$-idèle class group, and $U_{F,S}=\prod_{w\notin S_F}\mathcal O_{F_w}^{\times}$. Put $\Gamma=\operatorname{Gal}(K_S/K)$ and $C_S=\varinjlim_F C_{F,S_F}$ with discrete continuous action.

For each finite $F\subset K_S$ and corresponding open $V=\operatorname{Gal}(K_S/F)$ there is a canonical identification
$$C_S^V\cong C_F/U_{F,S},$$
where $U_{F,S}$ is embedded in the full idèle-class group $C_F$. Moreover $H^1(V,C_S)=0$, and there is a canonical injective normalized invariant $H^2(V,C_S)\hookrightarrow\mathbb Q/\mathbb Z$ whose image is the subgroup of classes annihilated by $[V:W]$ for some open $W\le V$. Restriction to $W$ multiplies this invariant by $[V:W]$. For each open normal $W\trianglelefteq V$, inflation identifies $H^2(V/W,C_S^W)$ with the subgroup of invariant values $[V:W]^{-1}\mathbb Z/\mathbb Z$. If $\ell$ divides the supernatural order of $\Gamma$ to unbounded power, each invariant image contains all $\ell$-primary elements. No assertion of a full $\mathbb Q/\mathbb Z$ invariant is made for other primes.

## Facts & Assumptions

**Given:** The global field, nonempty set $S$, tower, notation and explicit choice assumptions in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The number-field and finite-constant function-field direct-limit idèle-class modules are class formations with normalized local-sum invariants. [[thm-number-field-global-class-formation]] [[thm-function-field-global-class-formation-finite-constants]]

[F2] The actual S-idèle module is the direct limit of the specified S-restricted products modulo the corresponding S-units. [[def-s-idele-class-module-of-a-global-field]]

[F3] Multiplicative Hilbert 90 kills first cohomology for finite Galois extensions. [[thm-hilbert-90-for-finite-galois-extension]]

[F4] Outside-S units have zero positive cohomology over every open subgroup, with fixed units equal to the finite-stage unit product. [[lem-s-outside-units-are-cohomologically-acyclic]]

[F5] Every S-ideal class capitulates in a finite subextension of $K_S$. [[lem-s-ideal-classes-capitulate-inside-unramified-tower]]

[F6] The quotient of a class formation has the exact invariant image and finite-relative values claimed in the Statement, including full unbounded-primary components. [[lem-quotient-class-formation-primary-invariants]]

[F7] A short exact sequence of continuous coefficient modules gives the natural long exact cohomology sequence. [[thm-long-exact-sequence-in-cohomology]]

[F8] If a closed normal subgroup has zero first cohomology, inflation injects degree two with image the restriction kernel. [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]]

## Proof

**Proof technique:** descend full idèle classes, use S-capitulation to identify the quotient, then apply the actual quotient-formation invariants.

1.1 Let $E/F$ be finite Galois. The idelic exact sequence $1\to E^\times\to I_E\to C_E\to1$ and [F3] make $I_E^{\operatorname{Gal}(E/F)}\to C_E^{\operatorname{Gal}(E/F)}$ onto. An invariant idèle descends coordinatewise: its components over one place form a single decomposition-group-fixed element of the completion of $F$, and integrality outside a finite set descends. Thus $C_F$ maps onto the fixed classes. It also maps injectively: if a base idèle becomes principal with generator $a\in E^\times$, all embeddings of $E$ into an algebraic closure of any chosen completion of $F$ give the same base component, so all conjugates of $a$ agree and $a\in F$. Hence $C_E^{\operatorname{Gal}(E/F)}=C_F$ canonically. [F3, given, construct, algebra]

1.2 For finite $F\subset K_S$, the outside unit product $U_{F,S}$ injects in $C_F$: a principal idèle equal to $1$ at any place in nonempty $S_F$ has generator $1$. Extending an $S_F$-idèle by $1$ outside $S_F$ identifies $C_{F,S_F}$ with a subgroup of $C_F/U_{F,S}$. Its kernel consists exactly of the $S_F$-units, and the valuation map outside $S_F$ identifies the cokernel with $\operatorname{Cl}_{S_F}(F)$. Therefore $0\to C_{F,S_F}\to C_F/U_{F,S}\to\operatorname{Cl}_{S_F}(F)\to0$ is exact. This remains true for infinite $S$ because each fractional ideal has finite support. [F2, given, construct, algebra]

2.1 Put $G_0=\operatorname{Gal}(K_s/K)$, $H=\operatorname{Gal}(K_s/K_S)$ and $C=\varinjlim_{E\subset K_s}C_E$. We have $C^H=\varinjlim_{F\subset K_S}C_F$. Indeed, an $H$-fixed class is represented at a finite Galois $E/K$. Its equality with each translate is witnessed at a finite extension. Only finitely many restrictions of $H$ to $E$ occur, so choose one finite common Galois extension $E'$ containing the witnesses. The class is fixed in $C_{E'}$ by the finite image of $H$ and, by step 1.1, descends to $E'^H=E'\cap K_S$. The converse inclusion is immediate. All transition maps on idèle classes are injective by step 1.1. [A1, step 1.1, choose, construct, algebra]

3.1 Passing to the directed limit preserves exactness. The last term vanishes by [F5], while step 2.1 identifies the middle term with $C^H/U_S$ for $U_S=\varinjlim_F U_{F,S}$. Consequently $0\to U_S\to C^H\to C_S\to0$ is an actual short exact sequence of discrete $\Gamma$-modules. For each open $V=\operatorname{Gal}(K_S/F)$, [F4] kills the positive cohomology of $U_S$ and identifies $U_S^V=U_{F,S}$. The long exact sequence [F7] gives the displayed fixed-class isomorphism and canonical isomorphisms $H^r(V,C^H)\cong H^r(V,C_S)$ for every $r\ge1$. [F4, F5, F7, step 2.1, step 1.2, algebra]

4.1 By [F1], $(G_0,C)$ is a class formation in either global-field case. Apply [F6] to its closed normal subgroup $H$. Transport its quotient invariant through step 3.1. This proves the zero degree-one cohomology, exact degree-two image, restriction scaling and full primary components. The same coefficient isomorphism over open subgroups identifies finite-quotient degree-two groups by inflation and its image, because inflation is injective when $H^1(W,C_S)=0$ and its image is the restriction kernel. Thus the finite relative invariant is exactly $[V:W]^{-1}\mathbb Z/\mathbb Z$ as asserted. The zero class and trivial finite quotients are included. [F1, F4, F6, F7, F8, step 3.1, algebra] ∎
