---
id: lem-adjudicate-ef9b31e59a9f-nisnevich-picard-space
kind: lemma
title: Shifted Nisnevich units and the line-bundle groupoid
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - math:def-picard-group-scheme
  - def-derived-sections-on-sites
  - lem-eilenberg-maclane-shift-index
  - lem-author-8e1c0251ef0d-fpqc-descent-input
  - lem-author-8e1c0251ef0d-h1-torsor-input
  - lem-author-8e1c0251ef0d-units-sheaf
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - def-nisnevich-covering-interface
  - def-stable-spectra-interface
  - lem-adjudicate-28f1411ede08-derived-one-space-descent
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-picard-group-scheme: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  lem-author-8e1c0251ef0d-fpqc-descent-input: mathematical-premise
  lem-author-8e1c0251ef0d-h1-torsor-input: mathematical-premise
  lem-author-8e1c0251ef0d-units-sheaf: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-determinant-one-type-input: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  lem-adjudicate-28f1411ede08-derived-one-space-descent: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 16
formulation_deps:
  - math:def-axiom-of-choice
  - math:def-picard-group-scheme
  - def-derived-sections-on-sites
  - lem-eilenberg-maclane-shift-index
  - lem-author-8e1c0251ef0d-fpqc-descent-input
  - lem-author-8e1c0251ef0d-h1-torsor-input
  - lem-author-8e1c0251ef0d-units-sheaf
  - def-nisnevich-covering-interface
  - def-stable-spectra-interface
  - lem-adjudicate-28f1411ede08-derived-one-space-descent
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
argument_deps:
  - math:def-axiom-of-choice
  - math:def-picard-group-scheme
  - def-derived-sections-on-sites
  - lem-eilenberg-maclane-shift-index
  - lem-author-8e1c0251ef0d-fpqc-descent-input
  - lem-author-8e1c0251ef0d-h1-torsor-input
  - lem-author-8e1c0251ef0d-units-sheaf
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - def-nisnevich-covering-interface
  - def-stable-spectra-interface
  - lem-adjudicate-28f1411ede08-derived-one-space-descent
sources:
  references:
    - title: "The Stacks Project, Lemma 18.3.1: Abelian sheaves"
      url: https://stacks.math.columbia.edu/tag/03CN
      locator: Lemma 18.3.1(2) and (6), including the displayed proof
      statement: Kernels of abelian sheaves are sectionwise. In an exact sheaf
        complex, any middle-term cycle lifts to the preceding term after a site
        cover.
      hypotheses: Abelian sheaves and a complex on one site; exactness at its middle
        term. Apply to the chosen injective resolution on the fixed bounded
        Nisnevich site.
      reading_limits: Read the complete lemma and displayed proof in the live tagged
        primary text. Import only (2) and (6); the cited sheafification and
        abelian-category foundations were not reconstructed.
---

## Statement
Assume the Axiom of Choice and fixed compatible universe bounds. Work on a fixed universe-bounded big Nisnevich site of qcqs schemes over a prime field, or its smooth finite-type subsite over an extension field. The chosen category contains the terminal base scheme and the fibre products and Zariski refinements used in descent. For an object $X$, derived evaluation and torsors use this same site over $X$; no comparison with a different small site is assumed.

Let $G=\mathbb G_m$ be the abelian sheaf $U\mapsto\Gamma(U,\mathcal O_U)^\times$. Define $\mathcal{Pic}(X)$ to be the groupoid whose objects are invertible $\mathcal O_X$-modules and whose morphisms are module isomorphisms, pointed by $\mathcal O_X$. Pullback gives its restriction functors. Its tensor product induces the ordinary group $\operatorname{Pic}(X)$ on isomorphism classes. Define $BG(X)$ to be the groupoid of Nisnevich $G$-torsors over $X$ and equivariant isomorphisms, pointed by the trivial torsor. A torsor is a sheaf with a $G$-action which is locally nonempty and simply transitive. Regard a groupoid as a space by its nerve, whose $n$-simplices are strings of $n$ composable morphisms.

Write $HC$ for the Eilenberg–Mac Lane spectrum of a cochain complex $C$, with $\pi_n(HC)=H^{-n}(C)$, and $\Omega^\infty$ for its zeroth space. There are natural pointed equivalences

$$\Omega^\infty H\bigl(R\Gamma_{\mathrm{Nis}}(X,G)[1]\bigr)\simeq BG(X)\simeq\mathcal{Pic}(X).$$

The second equivalence sends a line bundle to its frame torsor in the reverse direction. The first identifies the loop sheaf with $G$ by the identity. On sections the components are $\operatorname{Pic}(X)$, the automorphism group of every line bundle is $\Gamma(X,\mathcal O_X)^\times$, and homotopy groups in degrees at least two vanish. Connectedness here is local in the Nisnevich topology, not connectedness of the section space for each $X$.

## Statement references
[[math:def-picard-group-scheme]]

[[def-derived-sections-on-sites]]

[[lem-eilenberg-maclane-shift-index]]

[[lem-author-8e1c0251ef0d-h1-torsor-input]]

[[lem-adjudicate-28f1411ede08-derived-one-space-descent]]

[[thm-author-16f30f6b95cb-lowweight-determinant-one-type-input]]

## Facts & Assumptions
**Given:** Choice, the fixed compatible bounds, the stated Nisnevich site and its slices, and a scheme $X$ in it.

**Goal:** Identify the actual line-bundle groupoid, rather than only its component set, with shifted derived units.

[A1] [[math:def-axiom-of-choice]] is retained in the derived and one-type inputs and when choosing local torsor sections; the stated bounds make each site and its slices small in the chosen larger universe.

[F1] [[def-nisnevich-covering-interface]] specifies the chosen Nisnevich covering families, their topology and the inclusion of Zariski covers. [[def-stable-spectra-interface]] supplies coherent Omega towers and their limits; zeroth-space evaluation is level-zero evaluation on such a tower. [[def-derived-sections-on-sites]] supplies derived evaluation of sheaf complexes, nonnegative resolutions for ordinary sheaves and negative-degree vanishing. [[lem-eilenberg-maclane-shift-index]] supplies the natural formula $\pi_n(HC)=H^{-n}(C)$, applied to $C=R\Gamma_{\mathrm{Nis}}(X,G)[1]$.

[F2] [[lem-author-8e1c0251ef0d-fpqc-descent-input]] supplies effective and fully faithful descent of quasi-coherent modules, descent of finite local freeness, the fpqc property of Nisnevich covering families, and the structure-sheaf assertion under its four site hypotheses. [[lem-author-8e1c0251ef0d-units-sheaf]] then makes $G$ an abelian sheaf. Use [[lem-author-8e1c0251ef0d-h1-torsor-input]] for its sheaf-action, equivariant-isomorphism and local-nonemptiness conventions for torsors on the slice over $X$. [[math:def-picard-group-scheme]] supplies the tensor-product group of line-bundle isomorphism classes.

[F3] Use only the general pointed connected one-type clause of [[thm-author-16f30f6b95cb-lowweight-determinant-one-type-input]]: in an infinity-topos, the loop-group functor is fully faithful and identifies pointed connected one-types with sheaves of groups. Its determinant assertions are not premises of this argument.

[F4] [[lem-adjudicate-28f1411ede08-derived-one-space-descent]] supplies a coherent simultaneous space-valued model of shifted derived sections from one nonnegative injective resolution on the chosen site. It proves descent and identifies the loop sheaf by the identity on the original abelian sheaf. Its small-site and covering-family hypotheses hold for the bounded Nisnevich site and the descent fibre products stipulated here; keep the same compatible universe bounds.

[F5] Reference 0 supplies sectionwise kernels and local lifting of cycles in an exact complex of abelian sheaves. Apply it to $I^0\to I^1\to I^2$ on the original site.

## External input
Reference 0 imports the general-site kernel and local-exactness criteria, with the recorded hypotheses and reading limits. The resolution model and one-type classification use [F4] and [F3]. The frame argument and the application of local lifting below are locally authored.

## Proof
1.1 The chosen site is full in schemes over its base and has a terminal object and Zariski refinements. Its covers are jointly surjective and etale by [F1], and are therefore fpqc by [F2]; the four structure-sheaf hypotheses of [F2] therefore hold, including on slices. A line bundle $L$ gives the $G$-torsor of frames $\operatorname{Isom}(\mathcal O,L)$. Conversely use the torsor convention in [F2] and choose local sections using [A1]; their transition units $g_{ij}$ glue the free rank-one modules with frames $e_j=g_{ij}e_i$ by effective descent in [F2]. Finite local freeness descends, and its rank is one because it is one on the covering members. A torsor morphism, in these frames, is multiplication by units compatible on overlaps; full faithfulness of descent gives exactly one line-bundle isomorphism, and the reverse construction takes a line isomorphism to its equivariant frame map. Thus frames give an equivalence of groupoids, compatible with pullback and tensor products. The same effective and fully faithful descent makes these groupoids a Nisnevich stack. It is a pointed connected one-type locally, since lines trivialize on Zariski covers and all its arrows are isomorphisms. Multiplication by a global unit is every automorphism of $\mathcal O_X$; for another line bundle the same formula holds in frames and glues uniquely, so its automorphism sheaf is also $G$. Its component set is the Picard group of [F2]. [A1, F1, F2, construct]

2.1 Choose a single nonnegative injective resolution $G\to I^\bullet$ in abelian sheaves on the chosen bounded site. Apply [F4] to this site and this sheaf. It constructs the pointed sheaf of spaces $D_I(X)=\Omega^\infty H(I^\bullet(X)[1])$, with coherent restrictions from that one sheaf complex, representing $D(X)=\Omega^\infty H(R\Gamma_{\mathrm{Nis}}(X,G)[1])$ on the same site. Thus $D$ is a Nisnevich sheaf of spaces, and its loop sheaf is canonically $G$ through the identity normalization of [F4]. By [F1], $\pi_nD(X)=H^{1-n}_{\mathrm{Nis}}(X,G)$ for $n\geq0$. For $n\geq2$ this is zero. A nonnegative resolution gives $H^0_{\mathrm{Nis}}(X,G)=G(X)$ because evaluation preserves kernels; hence the loop sheaf is canonically $G$. To prove local connectedness, represent a class in $\pi_0D(X)=H^1_{\mathrm{Nis}}(X,G)$ by $z\in I^1(X)$ with $d^1z=0$. The injective resolution is exact as a complex of abelian sheaves on this same site. By [F5], some Nisnevich cover $\{U_i\to X\}$ admits $t_i\in I^0(U_i)$ with $d^0t_i=z|_{U_i}$. Thus every component becomes the base component locally, so the sheaf of components of $D$ is terminal. This proves connectedness without a comparison of slice cohomology with derived evaluation. Apply [F3] to $D$ and the stack in step 1.1: the identity of their common loop sheaf $G$ determines a pointed equivalence, naturally on the site. Evaluating this equivalence gives the asserted equivalences on every $X$, not merely isomorphisms of component sets. The tensor/addition structures agree as well: their multiplication maps have common loop homomorphism $G\times G\to G$, and [F3] identifies these maps fully faithfully. Together with step 1.1 this proves all component and automorphism assertions. [A1, F1, F2, F3, F4, F5, step 1.1] ∎
