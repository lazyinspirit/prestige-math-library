---
id: def-stable-spectra-interface
kind: definition
title: Stable spectra and exact triangles
status: published
domain: mathematics
deps:
  - math:def-stable-homotopy-groups-of-a-sequential-prespectrum
  - lem-author-e0b0bf18ed2b-singular-sequential-comparison
  - lem-author-e0b0bf18ed2b-omega-replacement-comparison
  - thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input
  - lem-author-e0b0bf18ed2b-omega-tower-shift
  - lem-author-e0b0bf18ed2b-exactness-and-products
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
  - math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps
  - math:def-axiom-of-choice
formulation_deps:
  - math:def-stable-homotopy-groups-of-a-sequential-prespectrum
  - lem-author-e0b0bf18ed2b-singular-sequential-comparison
  - lem-author-e0b0bf18ed2b-omega-replacement-comparison
  - thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input
  - lem-author-e0b0bf18ed2b-omega-tower-shift
  - lem-author-e0b0bf18ed2b-exactness-and-products
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
  - math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps
  - math:def-axiom-of-choice
argument_deps:
  - math:def-stable-homotopy-groups-of-a-sequential-prespectrum
  - lem-author-e0b0bf18ed2b-singular-sequential-comparison
  - lem-author-e0b0bf18ed2b-omega-replacement-comparison
  - thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input
  - lem-author-e0b0bf18ed2b-omega-tower-shift
  - lem-author-e0b0bf18ed2b-exactness-and-products
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
  - math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps
  - math:def-axiom-of-choice
dependency_roles:
  math:def-stable-homotopy-groups-of-a-sequential-prespectrum: mathematical-premise
  lem-author-e0b0bf18ed2b-singular-sequential-comparison: mathematical-premise
  lem-author-e0b0bf18ed2b-omega-replacement-comparison: mathematical-premise
  thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input: mathematical-premise
  lem-author-e0b0bf18ed2b-omega-tower-shift: mathematical-premise
  lem-author-e0b0bf18ed2b-exactness-and-products: mathematical-premise
  thm-author-e0b0bf18ed2b-stable-enhancement-input: mathematical-premise
  math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Jacob Lurie, Higher Algebra (September 18, 2017): detection of spectral
        equivalences"
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 1.2.1.11, printed p. 40; Proposition 1.4.3.6, printed pp.
        151–152; Remark 1.4.3.8, printed p. 153 (PDF pages 40, 151–153)
      statement: A spectrum map is an equivalence exactly when all its integer
        homotopy groups are isomorphisms. In degrees at least two these are the
        usual groups after pointed infinite-loop evaluation; shifts use
        homological indexing.
      hypotheses: Spectra in Sp of spaces, with its canonical t-structure and all
        integer degrees. No connectivity or CW hypothesis. Use the declared
        universe and ZFC conventions.
      reading_limits: Read the named definition, proposition and its proof, and the
        entire remark through primary PDF text. Their foundational proofs are
        imported. The comparison with this item’s sphere-mapping groups is
        local.
    - title: "Jacob Lurie, Higher Algebra (September 18, 2017): coherent algebra
        objects"
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definitions 2.1.2.3 and 2.1.2.7, printed pp. 178, 180; Definition
        2.1.3.1, printed p. 184; Definitions 4.1.1.1, 4.1.1.3, 4.1.1.6 and
        Notation 4.1.1.8, printed pp. 455–456
      statement: Commutative algebras are inert-preserving operadic sections over
        finite pointed sets; associative algebras are such sections after
        pullback to the associative operad, whose operations encode ordered
        inputs.
      hypotheses: The full symmetric monoidal infinity-category, here spectra under
        smash. Units and all higher coherences are included.
      reading_limits: Read the cited definitions and notation plus Remark 4.1.1.4
        through primary PDF text. Import the operadic formalism; no
        rectification theorem or monoidal comparison with sequential prespectra
        is claimed.
dependency_level: 3
---

## Definition
Use the symmetric monoidal stable infinity-category $\mathrm{Sp}=\operatorname{Exc}_*(S_*^{\mathrm{fin}},S)$ supplied by the stable enhancement input. Here $S$ is the infinity-category of spaces, $S_*^{\mathrm{fin}}$ is the infinity-category of finite pointed spaces, and $\operatorname{Exc}_*$ consists of functors taking the point to a contractible space and pushouts to pullbacks. An infinity-category retains mapping spaces and coherent higher compositions. Diagrams are coherent functors, and limits and colimits are their homotopy limits and colimits; these exist for small diagrams.

Write $0$ for the zero spectrum. For $f:A\to B$, define $\operatorname{fib}(f)=A\times_B0$ and $\operatorname{cofib}(f)=B\sqcup_A0$. A fiber or cofiber sequence includes its nullhomotopy and defining pullback or pushout square. Define suspension $E[1]=0\sqcup_E0$ and desuspension $E[-1]=0\times_E0$. A fiber sequence $F\to A\to B$ extends to the cofiber triangle $F\to A\to B\to F[1]$, and $\operatorname{cofib}(f)\simeq\operatorname{fib}(f)[1]$. Let $\mathbb S=\Sigma^\infty S^0$ be the sphere spectrum and define $\pi_i(E)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[i],E)$. These are abelian groups for every $i\in\mathbb Z$, and $\pi_i(E[1])\cong\pi_{i-1}(E)$.

Products are coherent homotopy products. The smash product $E\wedge F$ is the separately colimit-preserving symmetric monoidal product with unit $\mathbb S$; its associativity, symmetry and unit include higher coherences. A ring spectrum means an associative or commutative algebra object for smash, with the intended type specified. Smash is separately exact: it preserves finite limits and finite colimits in each variable.

To connect this interface with the published sequential-prespectrum definition, let $E$ be a sequential prespectrum of well-pointed based compactly generated weak Hausdorff spaces, with $\sigma_n:S^1\wedge E_n\to E_{n+1}$ and the sphere coordinate first. Form $X=\operatorname{Sing} E$ with the structure maps of the singular sequential comparison; every level $X_n$ is Kan. Apply the simplicial Omega replacement input to this level-Kan $X$ to form $QX$ functorially. Then $QX$ is level Kan and its adjoint structure maps $(QX)_n\to\Omega(QX)_{n+1}$ are weak equivalences (indeed isomorphisms). Regard its coherent Omega tower as an object $\mathcal RE$ of $\mathrm{Sp}$ using the imported tower equivalence. For every $i\in\mathbb Z$ there is a natural isomorphism

$$\pi_i^{\mathrm{seq}}(E)=\operatorname*{colim}_{n\gg0}\pi_{n+i}(E_n)\xrightarrow{\sim}\pi_i(\mathcal RE).$$

The left bonding map is suspension with $S^1$ first followed by $\sigma_n$, with the published sphere-coordinate identification. If $E$ is already an Omega-prespectrum, its adjoint structure maps are weak equivalences and the comparison agrees with evaluation at each sufficiently late level. The tower $(QX)_{n+1}$ represents $(\mathcal RE)[1]$, so $\pi_i((\mathcal RE)[1])\cong\pi_{i-1}^{\mathrm{seq}}(E)$. In particular, a map inducing isomorphisms on all published stable groups is sent to an equivalence in $\mathrm{Sp}$.

## Definition references

[[thm-author-e0b0bf18ed2b-stable-enhancement-input]]

[[math:def-stable-homotopy-groups-of-a-sequential-prespectrum]]

[[lem-author-e0b0bf18ed2b-singular-sequential-comparison]]

[[lem-author-e0b0bf18ed2b-omega-replacement-comparison]]

[[thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input]]

## Facts & Assumptions
**Given:** The foundational and smallness conventions of the external stable enhancement and, for the comparison, a sequential prespectrum $E$ as specified above.

**Goal:** Justify the operations, comparison, index convention and equivalence detection in the definition.

[F1] [[thm-author-e0b0bf18ed2b-stable-enhancement-input]] supplies the stable enhancement, coherent tower equivalence, limits, colimits and smash product.

[F2] [[lem-author-e0b0bf18ed2b-singular-sequential-comparison]] makes $X=\operatorname{Sing} E$ a level-Kan sequential pointed simplicial prespectrum and identifies its groups with the published sequential groups, preserving sphere order.

[F3] [[lem-author-e0b0bf18ed2b-omega-replacement-comparison]] identifies the groups of $\operatorname{Sing} E$ and its Omega replacement.

[F4] [[lem-author-e0b0bf18ed2b-omega-tower-shift]] identifies the latter groups with enhanced groups and proves the suspension index.

[F5] [[lem-author-e0b0bf18ed2b-exactness-and-products]] proves rotation, homotopy products and separate exactness.

[F6] Reference 0 in External input supplies the criterion that all integer homotopy groups detect equivalences of spectra, and specifies their shift and pointed-evaluation conventions. Reference 1 supplies the coherent algebra-object meaning of ring spectrum.

[F7] The strict sequential objects and adjoint structure maps are those of [[math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]]; their stable-group bonding maps are those of [[math:def-stable-homotopy-groups-of-a-sequential-prespectrum]]. A map here is a family of based level maps commuting with the structure maps. An Omega-prespectrum has weak-equivalence adjoint structure maps.

[F8] Assume the Axiom of Choice, as in [[math:def-axiom-of-choice]], within the ZFC setting of [F1]. The same nested universes and smallness convention apply throughout. Choice is retained in the imported categorical and homotopical foundations of [F1] and [F6] and the replacement input [F9]; no choice-free version of those inputs is asserted.

[F9] [[thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input]] applies to the level-Kan $X$ of [F2] and supplies the functorial $QX$, which is level Kan with adjoint structure maps $(QX)_n\to\Omega(QX)_{n+1}$ that are weak equivalences (indeed isomorphisms). Thus $QX$ gives the coherent Omega tower required by [F1] and [F4]. This is a separate input from the stable-group comparison in [F3].

## External input
Reference 0 imports spectral equivalence detection and the homotopy-group conventions in [F6]. Reference 1 imports coherent algebra objects: for the smash fibration $p:\mathrm{Sp}^{\otimes}\to N(\mathrm{Fin}_*)$, a commutative algebra is a section preserving inert morphisms. An inert base map has exactly one preimage over each non-basepoint of its target; inert arrows upstairs are the coCartesian arrows over these maps. For an associative algebra, first pull $p$ back along the associative operad to $N(\mathrm{Fin}_*)$, then take an inert-preserving section. That operad is the nerve of the category with finite pointed sets as objects and pointed maps equipped with an ordering of each non-basepoint fiber as morphisms; composition orders fibers by ordered concatenation. These imports apply to the supplied monoidal enhancement under [F8]. Only these premises are imported; the comparison and their application below are local.

## Justification
1.1 The operations and coherences exist by [F1], rotation, products and exactness follow from [F5], and the algebra terminology uses [F6]. For every spectrum, [F4] identifies $\pi_i$ with a homotopy group in degree at least two, hence an abelian group. For a sequential $E$, [F2] verifies the level-Kan hypothesis of [F9]. That input makes $QX$ level Kan with weak-equivalence adjoint structure maps, so its image in pointed spaces is a coherent Omega tower to which [F1] and [F4] apply. Compose the natural group isomorphisms of [F2], [F3] and [F4]. They give the displayed comparison with the sphere-first bonding maps of [F7]. The tail formula in [F4] gives the suspension sign. If $E$ is already an Omega-prespectrum, its adjoint weak equivalences make each sufficiently late bonding map an isomorphism; the colimit therefore agrees with evaluation there, compatibly with the comparison. [F1, F2, F3, F4, F5, F6, F7, F8, F9, given]

2.1 Let $f:E\to E'$ induce isomorphisms on all published stable groups. Naturality in step 1.1 gives isomorphisms on every $\pi_i(\mathcal Rf)$. These are precisely the groups in the imported criterion: for any spectrum $Z$ and integer $i$, choose $r\geq0$ with $d=i+r\geq2$. By [F4], our $\pi_i(Z)$ is naturally $\pi_d(\Omega^\infty(Z[r]))$. By [F6], the latter is the source's degree-$d$ group of $Z[r]$, hence its degree-$i$ group of $Z$, since the source defines degree $j$ by applying its degree-zero functor to $Z[-j]$. These identifications are natural in $Z$, so the criterion of [F6] applies to $\mathcal Rf$ and proves it is an equivalence in $\mathrm{Sp}$. The construction uses the functorial $\operatorname{Sing}$ and $Q$ of [F2] and [F9]; this argument asserts neither a model-category nor a monoidal equivalence. [F1, F2, F3, F4, F6, F8, F9, step 1.1] ∎
