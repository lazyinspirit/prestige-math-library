---
id: lem-author-e0b0bf18ed2b-omega-tower-shift
kind: lemma
title: Omega towers and the suspension index
status: published
domain: mathematics
deps:
  - lem-author-e0b0bf18ed2b-spectra-tail-invariance
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
  - math:cor-higher-homotopy-groups-are-iterated-loop-components
  - math:prop-loop-suspension-adjunction-on-based-homotopy-classes
  - math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps
  - math:def-stable-homotopy-groups-of-a-sequential-prespectrum
dependency_roles:
  lem-author-e0b0bf18ed2b-spectra-tail-invariance: mathematical-premise
  thm-author-e0b0bf18ed2b-stable-enhancement-input: mathematical-premise
  math:cor-higher-homotopy-groups-are-iterated-loop-components: mathematical-premise
  math:prop-loop-suspension-adjunction-on-based-homotopy-classes: mathematical-premise
  math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps: mathematical-premise
  math:def-stable-homotopy-groups-of-a-sequential-prespectrum: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 1
sources:
  references:
    - title: Kerodon, homotopy groups of a Kan complex
      url: https://kerodon.net/tag/00VJ
      locator: Construction 3.2.2.4; Examples 3.2.2.6–7; Remark 3.2.2.9; Theorem
        3.2.2.10; Remarks 3.2.2.16–17
      statement: Pointed sphere classes corepresent homotopy groups of pointed Kan
        complexes; positive-degree groups are functorial and homotopy invariant,
        and are abelian above degree one. Singular complexes recover topological
        sphere classes.
      hypotheses: Pointed Kan complexes; positive degree for groups, degree at least
        two for abelian groups. The singular comparison starts with a based
        topological space.
      reading_limits: Read these constructions, statements and remarks in the primary
        HTML in this repair. The group-law proof in the following subsection and
        the general foundations of the space infinity-category were not
        reconstructed. The sphere-class construction, not a rectification
        theorem for towers, is used.
    - title: Kerodon, loop spaces
      url: https://kerodon.net/tag/01JE
      locator: Example 4.6.1.13, entire example; Theorem 3.2.6.1
        (https://kerodon.net/tag/00WM), statement
      statement: The based loop Kan complex is the fiber of a Kan fibration from a
        contractible path complex to the pointed Kan complex. Its homotopy
        groups identify with those of the original complex one degree higher.
      hypotheses: A pointed Kan complex, with the constant loop as base point;
        nonnegative homotopy degree. The long exact sequence is applied to the
        displayed Kan fibration.
      reading_limits: Read the entire loop-space example and the long-exact-sequence
        statement in primary HTML in this repair. Their earlier Kan-fibration
        results and the proof of the long exact sequence are imported. Iteration
        and use for the present tower are local deductions.
    - title: Jacob Lurie, Higher Algebra (September 18, 2017), suspension and
        mapping-space groups
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Construction preceding Notation 1.1.2.7 and Remark 1.1.2.8, printed pp.
        23–24 (PDF pages 23–24); Notation 1.4.2.5, printed p. 141 (PDF page 141)
      statement: In a pointed infinity-category, suspension and loops, when defined,
        are adjoint, and mapping out of a suspension loops the pointed mapping
        space. Double suspension gives abelian component groups; in a stable
        infinity-category these groups are functorial in both variables. Pointed
        spheres are objects of pointed spaces.
      hypotheses: A pointed infinity-category with the indicated fibers and cofibers;
        invertible suspension for the stable mapping-group assertion. Applied to
        pointed spaces and to the stable category of spectra supplied by the
        declared enhancement.
      reading_limits: Read the suspension/loop construction, Notation 1.1.2.7, the
        whole Remark 1.1.2.8 and Notation 1.4.2.5 through the primary PDF text
        in this repair. No proof of the stabilization equivalence or point-set
        rectification is claimed. Preservation of the suspension pushout by the
        given left adjoint is justified locally by its mapping-space universal
        property.
---

## Statement
Let $Y=(Y_n,\alpha_n:Y_n\simeq\Omega Y_{n+1})_{n\geq0}$ be a coherent Omega tower of pointed spaces and let $\mathcal Y$ be its corresponding object of $\mathrm{Sp}$. Use the size and foundational conventions of the stable enhancement. Write $S_*$ for pointed spaces, $\mathbb S=\Sigma^\infty S^0$, and $\pi_k(\mathcal Y)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[k],\mathcal Y)$, with the canonical stable abelian group law. For a pointed space $Z$, $\pi_d(Z)=\pi_0\operatorname{Map}_{S_*}(S^d,Z)$ denotes its homotopy group, computed in a pointed Kan representative. Take $S^0$ to be the pointed two-point space and use the ordered suspension identification $S^{d+1}=\Sigma S^d\simeq S^1\wedge S^d$, with the new circle coordinate first.

Define $\lambda_d:\pi_{d+1}(Z)\xrightarrow{\sim}\pi_d(\Omega Z)$ by this suspension–loop adjunction. For fixed $k\in\mathbb Z$ and $n+k=d\geq2$, specify $b_n=\lambda_d^{-1}\circ(\alpha_n)_*:\pi_d(Y_n)\to\pi_{d+1}(Y_{n+1})$, and define the coherent tower's stable group by $G_k(Y)=\operatorname{colim}_{n\geq N}(\pi_{n+k}(Y_n),b_n)$, where $N\geq0$ and $N+k\geq2$. There are cutoff-independent compatible natural isomorphisms $\pi_k(\mathcal Y)\cong\pi_{n+k}(Y_n)\cong G_k(Y)$ for every such $n$. The tail $(Y_{n+1})_{n\geq0}$ represents $\mathcal Y[1]$, and $\pi_k(\mathcal Y[1])\cong\pi_{k-1}(\mathcal Y)$.

This definition agrees with the published stable groups whenever a compatible strict model is given: let $E$ be a sequential Omega-prespectrum of well-pointed based CGWH spaces with actual maps $\sigma_n:S^1\wedge E_n\to E_{n+1}$. Compatibility means pointed equivalences $q_n:\operatorname{Sing}E_n\simeq Y_n$ identifying the adjoint maps $\widetilde\sigma_n$ with $\alpha_n$ in pointed spaces, including the loop comparisons. Then the level homotopy-group isomorphisms identify the published sphere-first system of $E$ with $(\pi_{n+k}(Y_n),b_n)$ and induce $G_k(E)\cong G_k(Y)$. Here $G_k(E)$ is the published sequential stable group. The intrinsic definition of $G_k(Y)$ requires no choice of strict model.

## Statement references

[[thm-author-e0b0bf18ed2b-stable-enhancement-input]]

[[lem-author-e0b0bf18ed2b-spectra-tail-invariance]]

[[math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]]

[[math:def-stable-homotopy-groups-of-a-sequential-prespectrum]]

## Facts & Assumptions
**Given:** The coherent tower $Y$, its associated spectrum $\mathcal Y$, and the integers and size conventions of the Statement. Suspension $[1]$ and loops $[-1]$ are inverse on spectra. A compatible strict model is an additional given only for the final comparison in the Statement.

**Goal:** Construct the tower group system, identify its colimit with the enhanced groups, check agreement with any given compatible strict model, and determine the suspension index.

[F1] The declared enhancement supplies pointed spaces, their coherent diagrams and mapping spaces, the stable category $\mathrm{Sp}$, the pointed adjunction $\Sigma^\infty\dashv\Omega^\infty$, and the coherent equivalences $Y_n\simeq\Omega^\infty(\mathcal Y[n])$. [[thm-author-e0b0bf18ed2b-stable-enhancement-input]]

[F2] The abstract-group-system assertion supplies cutoff independence and invariance under compatible stage-group isomorphisms. Its realization and Kan-comparison interface also permits reading the groups of a pointed Kan level through its realization. [[lem-author-e0b0bf18ed2b-spectra-tail-invariance]]

[F3] A strict sequential prespectrum has the spaces and sphere-first maps stated above, with $\widetilde\sigma_n(x)(t)=\sigma_n(t\wedge x)$. Its published stable group is the colimit under $[f]\mapsto[\sigma_n\circ(1_{S^1}\wedge f)\circ\chi_d]$, where $\chi_d:S^{d+1}\cong S^1\wedge S^d$ is the ordered sphere identification. [[math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]] [[math:def-stable-homotopy-groups-of-a-sequential-prespectrum]]

[F4] For based CGWH spaces, iterated loop components are the higher homotopy groups, with the operation given by concatenation in the first cube coordinate. The topological suspension–loop transpose preserves based homotopies. These apply to the strict spaces in [F3], and to spheres as sources. [[math:cor-higher-homotopy-groups-are-iterated-loop-components]] [[math:prop-loop-suspension-adjunction-on-based-homotopy-classes]]

[F5] The precise pointed-space homotopy, loop, suspension and mapping-group inputs used beyond [F1] are the three source records in External input. Homotopic pointed maps induce equal homomorphisms; thus coherent compatibility becomes an equality on the specified homotopy groups.

## External input
Reference 0 supplies the Kan sphere-class construction, its group laws and functoriality, corepresentability by a pointed sphere, and the singular comparison. Reference 1 supplies the based loop model and its one-degree homotopy-group comparison; iteration identifies $\pi_d(Z)$ with components of iterated loops. Reference 2 supplies the pointed suspension–loop mapping-space adjunction and the functorial stable abelian group law. These inputs apply in pointed spaces and spectra under [F1]; the CGWH comparison uses [F4]. Only these premises are imported. The construction of $b_n$, the colimit comparison, the strict-model compatibility calculation and the suspension-index calculation below are local.

## Proof
1.1 By [F5], $\lambda_d$ is a natural isomorphism of abelian groups for $d\geq2$. Since $\alpha_n$ is an equivalence, every specified $b_n$ is an isomorphism. Homotopy invariance makes the system well-defined from the coherent tower, and makes coherent maps of towers induce compatible homomorphisms. To compare with spectra, the left adjoint in [F1] preserves the suspension pushout: mapping its image into any spectrum gives, by adjunction, exactly the pullback specifying that pushout. It preserves the zero object as well. Thus $\Sigma^\infty S^d\simeq\mathbb S[d]$, using the same ordered suspensions as in the Statement. For $d=n+k$, shifting both arguments and then applying the pointed adjunction gives $\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[k],\mathcal Y)\simeq\operatorname{Map}_{\mathrm{Sp}}(\Sigma^\infty S^d,\mathcal Y[n])\simeq\operatorname{Map}_{S_*}(S^d,Y_n)$. Taking components gives the required stage isomorphism, respecting the group laws because the adjunction and shifts identify the double-suspension loop operations of [F5]. Increasing $n$ once replaces a sphere map by the adjoint of $\alpha_n$ composed with that map; by definition this induces $b_n$. This proves compatibility and naturality, including the chosen sphere order. [F1, F5, given]

2.1 By [F2], cutoff changes give canonical colimit isomorphisms. Since all $b_n$ are isomorphisms, the map from any stage into the colimit is an isomorphism: represent a class at a common later stage and use the inverse composite of the intervening $b_n$ to return to that stage. Step 1.1 therefore identifies $\pi_k(\mathcal Y)$ with $G_k(Y)$. For a given compatible strict model, [F4] transposes $\widetilde\sigma_n\circ f$ to $(t,u)\mapsto\sigma_n(t\wedge f(u))$; under $\chi_d$ this is exactly the bonding representative of [F3]. The natural singular comparison in [F5] and the specified $q_n$ consequently intertwine the two group systems, so [F2] gives $G_k(E)\cong G_k(Y)$. This computation also retains the realization convention for Kan levels described in [F2]. Finally [F1] gives $\Omega^\infty((\mathcal Y[1])[n])\simeq Y_{n+1}$ coherently, so the tail represents $\mathcal Y[1]$. The shift equivalence gives $\operatorname{Map}(\mathbb S[k],\mathcal Y[1])\simeq\operatorname{Map}(\mathbb S[k-1],\mathcal Y)$, and hence the asserted suspension formula as an abelian group isomorphism. At stage $n$ of the tail the same degree is $n+k=(n+1)+(k-1)$, confirming the index. [F1, F2, F3, F4, F5, step 1.1, given] ∎
