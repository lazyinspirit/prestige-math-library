---
id: "thm-obstructions-lie-in-ext-two-cotangent-complex"
kind: "theorem"
title: "Obstructions to deformations lie in Ext^2 of the cotangent complex"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 15
justified_by: []
aliases: []
deps:
  - "def-infinitesimal-deformation-functor-over-square-zero-extension"
  - "def-cotangent-complex-of-a-scheme-morphism"
  - "def-ext-groups-of-the-cotangent-complex"
  - "def-square-zero-extension-and-small-extension"
  - "lem-affine-deformations-obstruction-and-torsor"
  - "lem-flat-deformations-form-a-zariski-sheaf-of-groupoids"
  - "def-artinian-ring"
  - "def-local-ring"
  - "lem-cotangent-complex-truncation-and-smooth-case"
  - "lem-ext-of-locally-free-sheaf-via-cohomology"
  - "def-flat-morphism-schemes"
  - "def-locally-finite-presentation-morphism"
  - "def-derivation-algebra"
  - "def-smooth-morphism-schemes"
  - "def-axiom-of-choice"
  - "thm-choice-implies-dependent-implies-countable-choice"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "The Stacks Project, flatness across a square-zero extension"
      url: "https://stacks.math.columbia.edu/tag/063Y"
      locator: "Lemma 37.10.1, full statement and proof; its nilpotent flatness input Lemma 10.99.8 (051C) also read in full, 2026-10-06."
    - title: "The Stacks Project, square-zero sheaf extensions are schemes"
      url: "https://stacks.math.columbia.edu/tag/04EW"
      locator: "Lemma 37.2.2, full statement and proof: a square-zero extension with quasi-coherent kernel is a scheme, with affine charts recovered by sections. Read 2026-10-06."
    - title: "The Stacks Project, The Cotangent Complex, complete chapter (Chapter 92)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Lemma 92.21.1 (tag 08UZ) with proof, and Lemma 92.16.1 (tag 08SP): obstruction class in Ext^2, lifting torsor under Ext^1, automorphisms Ext^0, naturality in the square-zero extension (printed pages 25-33, read 2026-10-05)"
    - title: "Robin Hartshorne, Lectures on Deformation Theory (Berkeley Math 274 draft, 2004/2005)"
      url: "http://math.berkeley.edu/~robin/math274root.pdf"
      locator: "Chapter 2 Section 10 Theorem 10.1 with its full proof (printed pages 58-61): affine small-extension obstruction and torsor. The global Ext statement uses the exact Stacks tag 08UZ. Read 2026-10-06."
---

## Statement

Assume the Axiom of Choice (supplying Dependent Choice, [[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]). Let $k$ be a field,
let $A'\to A$ be a small extension of local Artin $k$-algebras with residue
field $k$ and kernel $I$ ([[def-square-zero-extension-and-small-extension]]),
and let $X$ be a flat, locally finitely presented $A$-scheme
([[def-flat-morphism-schemes]],
[[def-locally-finite-presentation-morphism]]). Put
$X_0=X\times_{\operatorname{Spec}A}\operatorname{Spec}k$ and regard $X$ as
the specified deformation of $X_0$ over $A$. The relative lifting problem is
to lift this whole $A$-scheme $X$ across $A'\to A$, with the reduction
identified with $X$ (the relative convention in
[[def-infinitesimal-deformation-functor-over-square-zero-extension]]). There
is a canonical obstruction class
$$o(X)\in\operatorname{Ext}^2_{\mathcal O_X}\bigl(L_{X/A},\mathcal O_X\otimes_AI\bigr)$$
whose vanishing is necessary and sufficient for such a lift to exist
([[def-ext-groups-of-the-cotangent-complex]]). If a lift exists, then the
set of its isomorphism classes, with the reduction identification fixed, is a
torsor under
$\operatorname{Ext}^1_{\mathcal O_X}(L_{X/A},\mathcal O_X\otimes_AI)$, and the
automorphism group of a lift inducing the identity on the specified reduction
$X$ is
$\operatorname{Ext}^0_{\mathcal O_X}(L_{X/A},\mathcal O_X\otimes_AI)=\operatorname{Hom}_{\mathcal O_X}(\Omega^1_{X/A},\mathcal O_X\otimes_AI)=\operatorname{Der}_A(\mathcal O_X,\mathcal O_X\otimes_AI)$.
The construction is natural under isomorphisms of the specified lifting datum
and functorial in the small extension, and
for each specified extension the obstruction is the boundary of its
extension datum in the long exact Ext sequence of the transitivity triangle. Vanishing criterion: if
$\operatorname{Ext}^2_{\mathcal O_X}(L_{X/A},\mathcal O_X\otimes_AI)=0$ then
the specified $A$-scheme $X$ lifts to $A'$ (the relative deformation problem is
smooth in that degree); for $X$ smooth over $A$ the obstruction group is
$H^2(X,T_{X/A}\otimes_AI)$.

## Facts & Assumptions

**Given:** a small extension $A'\to A$ of local Artin $k$-algebras with residue field $k$ and kernel $I$, a flat locally finitely presented $A$-scheme $X$ (viewed as a specified deformation of its special fibre over $A$), and the Axiom of Choice.

[F1] The affine obstruction theorem: for a flat ring map $A\to B$ and a square-zero extension $A'\to A$ with kernel $I$, the relative lifts of the specified $A$-algebra $B$ to $A'$ (with their reduction identified with $B$) have a canonical obstruction class in $\operatorname{Ext}^2_B(L_{B/A},B\otimes_AI)$ whose vanishing is equivalent to existence of a lift, and the isomorphism classes of lifts form a torsor under $\operatorname{Ext}^1$ with automorphisms over $B$ given by $\operatorname{Ext}^0=\operatorname{Der}_A(B,B\otimes_AI)$. ([[lem-affine-deformations-obstruction-and-torsor]], [[def-derivation-algebra]])

[F2] Flat deformations over $A'$ satisfy effective Zariski descent, and the exact cited source theorem Stacks tag 08UZ classifies the global ringed-space extensions by the groups $\operatorname{Ext}^2$ and $\operatorname{Ext}^1$ of the cotangent complex. ([[lem-flat-deformations-form-a-zariski-sheaf-of-groupoids]])

[F3] $L_{X/A}$ is glued from the affine complexes $L_{\mathcal O_X(U)/\mathcal O_S(V)}$ with the canonical affine comparison isomorphisms, and $\operatorname{Ext}^i_{\mathcal O_X}(L_{X/A},-)$ is the cohomology of the derived Hom. ([[def-cotangent-complex-of-a-scheme-morphism]], [[def-ext-groups-of-the-cotangent-complex]])

[F4] For $X$ smooth over $A$ one has $L_{X/A}\simeq\Omega^1_{X/A}[0]$ with $\Omega^1_{X/A}$ locally free of finite rank, so $\operatorname{Ext}^i_{\mathcal O_X}(L_{X/A},M)\cong H^i(X,T_{X/A}\otimes M)$. ([[lem-cotangent-complex-truncation-and-smooth-case]], [[lem-ext-of-locally-free-sheaf-via-cohomology]], [[def-smooth-morphism-schemes]])

## Proof

**Proof technique:** apply the global ringed-space obstruction theorem and verify that its solutions are precisely flat scheme lifts of local finite presentation.

1.1 Affine case. If $X=\operatorname{Spec}B$ is affine over $A$, the relative lifting problem for this specified $A$-scheme is exactly the affine problem of [F1]; hence there is a canonical obstruction class $o(X)\in\operatorname{Ext}^2_B(L_{B/A},B\otimes_AI)$ vanishing if and only if a lift exists, and when it does the isomorphism classes of lifts form a torsor under $\operatorname{Ext}^1$ with automorphism group over $X$ given by $\operatorname{Ext}^0=\operatorname{Der}_A(B,B\otimes_AI)$. [F1, given]

2.1 Global case. For a general $X$, choose an affine open cover. On each member the specified $A$-scheme restricts to the affine lifting problem of step 1.1; the local obstruction classes transform by the canonical isomorphisms of the local cotangent complexes on overlaps. By the exact cited ringed-space extension theorem 08UZ, with $G=\mathcal O_X\otimes_AI$ and the canonical map $I\to G$, the global obstruction is the single class $o(X)\in\operatorname{Ext}^2_{\mathcal O_X}(L_{X/A},\mathcal O_X\otimes_AI)$ obtained as the boundary of the prescribed extension datum in the long exact Ext sequence of the transitivity triangle $Lf^*L_{A/A'}\to L_{X/A'}\to L_{X/A}$, and its vanishing is equivalent to the existence of a ringed-space solution. A ringed-space solution is an extension $0\to G\to\mathcal A\to\mathcal O_X\to0$ with square-zero kernel $G=\mathcal O_X\otimes_AI$, which is quasi-coherent. Stacks tag 04EW (the square-zero scheme criterion) therefore makes $(X,\mathcal A)$ a scheme, with the corresponding opens over affine charts of $X$ also affine. The prescribed map from $I$ induces the identity $\mathcal O_X\otimes_AI\to G$, so Stacks tag 063Y gives flatness over $A'$ and reduction exactly $X$. On affine finite-presentation charts, the finite-presentation assertion of [[lem-affine-deformations-obstruction-and-torsor]] gives finite presentation of the lift. Conversely every flat lift has this canonical kernel by the same flatness criterion. Thus the ringed-space solutions and the required scheme lifts are the same groupoid. The isomorphism classes of lifts and their automorphisms over $X$ glue in the same way, giving a torsor under $\operatorname{Ext}^1$ and automorphism group $\operatorname{Ext}^0=\operatorname{Der}_A(\mathcal O_X,\mathcal O_X\otimes_AI)$. [F2, F3, step 1.1]

3.1 Naturality under isomorphisms of the specified $A$-scheme and functoriality in the small extension follow from the functoriality of the affine construction and of the gluing, both computed from the chart data; no functoriality for a bare morphism between underlying schemes is asserted. The boundary description is the construction in the full proof of Stacks tag 08UZ; its naturality supplies the stated compatibility for morphisms of the specified square-zero lifting data. If $\operatorname{Ext}^2=0$ then $o(X)=0$, so this specified $A$-scheme lifts. [F2, F3, step 2.1]

4.1 For $X$ smooth over $A$, [F4] identifies $\operatorname{Ext}^2_{\mathcal O_X}(L_{X/A},\mathcal O_X\otimes_AI)\cong H^2(X,T_{X/A}\otimes_AI)$, $T_{X/A}=\mathcal Hom(\Omega^1_{X/A},\mathcal O_X)$; substituting into step 2.1 gives the smooth-case obstruction statement. The Axiom of Choice is used only through the declared derived-Hom and Cech suppliers. [F4, step 2.1] ∎

**Source application.** The global obstruction and torsor assertions use the exact source theorem Stacks tag 08UZ with its full proof, rather than inferring existence of global lifts merely from local cohomology. That proof constructs the obstruction as the boundary of the prescribed extension datum under the transitivity triangle. No claim about a composite that is not square-zero is made.
