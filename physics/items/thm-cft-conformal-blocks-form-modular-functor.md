---
id: thm-cft-conformal-blocks-form-modular-functor
kind: theorem
title: Strongly rational VOA coinvariants form a modular functor
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 13
domain: mathematics
library: mathematics
deps:
- def-cft-coinvariants-and-conformal-blocks
- def-cft-modular-functor-and-sewing
- def-cft-strong-rational-voa
- lem-cft-rational-top-balance-and-nodal-normalization
- lem-cft-stable-coinvariant-descent-and-formal-sewing
- lem-cft-hodge-atiyah-action-and-sewing-compatibility
- lem-cft-hodge-transport-and-graph-coherence
dependency_roles:
  def-cft-coinvariants-and-conformal-blocks: mathematical-premise
  def-cft-modular-functor-and-sewing: mathematical-premise
  def-cft-strong-rational-voa: mathematical-premise
  lem-cft-rational-top-balance-and-nodal-normalization: mathematical-premise
  lem-cft-stable-coinvariant-descent-and-formal-sewing: mathematical-premise
  lem-cft-hodge-atiyah-action-and-sewing-compatibility: mathematical-premise
  lem-cft-hodge-transport-and-graph-coherence: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
  - title: Chiara Damiolini and Lukas Woike, Modular Functors from Conformal Blocks
      of Rational Vertex Operator Algebras
    url: https://arxiv.org/pdf/2507.05845v2
    locator: §§2.1–2.2; Definitions 3.3.1 and 3.4.2; §§4.2–4.5, especially Theorem
      4.2.2 and its proof.
  - title: Chiara Damiolini, Angela Gibney, and Nicola Tarasca, On factorization and
      vector bundles of conformal blocks from vertex algebras
    url: https://arxiv.org/pdf/1909.04683v5
    locator: Theorem 4.3.1 (propagation of vacua); Theorems 7.0.1, 8.4.1, and 8.5.1
      and their proof routes. The factorization and sewing arguments are used only
      as explicit conditional inputs here.
  - title: Chiara Damiolini, Angela Gibney, and Nicola Tarasca, Conformal blocks from
      vertex algebras and their connections on Mbar_{g,n}
    url: https://arxiv.org/pdf/1901.06981v3
    locator: §§6.1–6.3 and Theorem 6.1 for the logarithmic Atiyah algebra action on
      coinvariant sheaves.
  - title: 'Kiyokazu Nagatomo and Akihiro Tsuchiya, Conformal field theories associated
      to regular chiral vertex operator algebras I: theories over the projective line'
    url: https://arxiv.org/pdf/math/0206223v2
    locator: Lemma 8.7.1 and its dual-pairing proof, cited within the q-coevaluation
      invariance step of Damiolini–Gibney–Tarasca Theorem 8.5.1.
  - title: Bojko Bakalov and Alexander Kirillov Jr., Lectures on Tensor Categories
      and Modular Functor, Chapter 5
    url: https://www.math.stonybrook.edu/~kirillov/tensor/chapter5.ps.gz
    locator: §§5.1–5.2 and §5.7, printed pp. 93–106 and 127–130; independent classical
      treatment of mapping-class actions, sewing moves, coherence, and anomaly extensions.
---

## Statement

Let $V=\bigoplus_{m\geq0}V_m$ be a strongly rational VOA over $\mathbb C$: it is simple, each $V_m$ is finite dimensional, $V_0=\mathbb C\mathbf1$, every admissible module is completely reducible, the restricted contragredient $V'$ is isomorphic to $V$, and $V/C_2(V)$ is finite dimensional, where $C_2(V)=\operatorname{span}_{\mathbb C}\{a_{(-2)}b:a,b\in V\}$. For $2g-2+n>0$, a stable $n$-pointed curve means a connected projective nodal curve of arithmetic genus $g=\dim H^1(C,\mathcal O_C)$ with $n$ distinct marked smooth points and finite automorphism group. Let $\widetilde{\mathcal M}_{g,n}$ be the source algebraic stack classifying such curves with a nonzero tangent vector at every marked point; let $\widetilde\Delta$ denote its nodal boundary and let $\Lambda=\det\pi_*\omega_{\mathcal C/\widetilde{\mathcal M}_{g,n}}$ be its Hodge line for the universal curve $\pi$, where $\omega$ is the relative dualizing sheaf. The logarithmic Atiyah algebra $A_\Lambda(-\widetilde\Delta)$ is the sheaf of first-order differential operators on $\Lambda$ whose scalar symbols are vector fields tangent to $\widetilde\Delta$. A logarithmic connection is projectively flat when its curvature is scalar and has only logarithmic poles along $\widetilde\Delta$.

Let $\mathsf{Surf}$ be the modular operad whose objects are connected compact oriented smooth surfaces with parametrized boundary circles, whose morphisms are isotopy classes of boundary-preserving orientation-preserving diffeomorphisms, and whose graph operations glue paired boundaries with opposite induced orientations. Write $Y(\omega,z)=\sum_{m\in\mathbb Z}L_mz^{-m-2}$ for the conformal vector; the central charge $c$ is fixed by $[L_m,L_n]=(m-n)L_{m+n}+\frac{c}{12}(m^3-m)\delta_{m+n,0}\,\mathrm{id}_V$. Let $\mathsf{Surf}_{c/2}\to\mathsf{Surf}$ be the source extension determined by the Hodge-line twist $(c/2)A_\Lambda(-\widetilde\Delta)$; its homotopy fibers are nonempty and connected, it has a section over the genus-zero suboperad, and its insertion-of-vacua map identifies adding a boundary labeled by the distinguished vacuum object $V$ with the value before adding that boundary. Let $\mathrm{Rexf}$ denote the symmetric monoidal bicategory of finite $\mathbb C$-linear abelian categories (finite-dimensional morphism spaces, finitely many simple isomorphism classes, enough projectives, and finite length), right-exact functors, and natural transformations. A modular $Q$-algebra assigns coherent right-exact functors on labeled surfaces, natural mapping-class actions, and compatible sewing maps. The source theorem asserts that the sheaves of $V$-coinvariants form a modular $\mathsf{Surf}_{c/2}$-algebra valued in $\mathrm{Rexf}$ and hence a modular functor. In the semisimple case, its sewing map at each node is the sum over simple intermediate modules $X_i$, with dual pair $(X_i^\vee,X_i)$.

## Statement references

[[def-cft-coinvariants-and-conformal-blocks]]

[[def-cft-modular-functor-and-sewing]]

[[def-cft-strong-rational-voa]]

## Facts & Assumptions

**Given:** Exactly the strongly rational VOA and source Hodge-extension convention in the unchanged Statement. The finite label category below consists of grading-restricted generalized modules with their ordinary module maps. The unrestricted category of all admissible modules is not asserted finite; admissible rationality remains the original hypothesis used to prove semisimplicity.

[F1] [[lem-cft-rational-top-balance-and-nodal-normalization]] proves that this label category is finite semisimple, with finite simple list, finite Hom spaces and exact involutive contragredience, and proves the nodal top-coevaluation normalization map.

[F2] [[lem-cft-stable-coinvariant-descent-and-formal-sewing]] constructs the actual stable-curve algebraic finite locally free sheaves, their base change and tangent-coordinate descent, their source-compatible auxiliary-vacuum extension including n=0, and their normalized formal sewing. The naive unmarked tensor quotient in [[def-cft-coinvariants-and-conformal-blocks]] is not silently identified with that extension.

[F3] [[lem-cft-hodge-atiyah-action-and-sewing-compatibility]] constructs the global $(c/2)A_\Lambda(-\widetilde\Delta)$ action with its exact determinant normalization, logarithmic behavior, vacuum compatibility and the conformal-weight residue in boundary sewing. It uses the genuine conformal modes.

[F4] [[lem-cft-hodge-transport-and-graph-coherence]] constructs the Hodge-lifted mapping-class transport, the connected-fiber extension with genus-zero section, and the coefficient-level graph coherence. It does not assume that binary sewing alone implies coherence.

[F5] [[def-cft-modular-functor-and-sewing]] specifies the finite-category, pairing, modular-operad and anomaly conventions. [[def-cft-strong-rational-voa]] supplies the original five VOA hypotheses, not any of the conclusions proved by F1–F4.

## Proof

1.1 Let $\mathcal C$ be the finite semisimple category in F1. Its objects are finite sums of the ordinary simples $S_i$, and its morphisms commute with all module modes. Auxiliary admissible grading shifts are not extra object data. This is finite in the precise Rexf sense: Hom spaces are finite, the simple list is finite, every object has finite length, and every object is projective because every short exact sequence splits. These conclusions were proved from admissible rationality and C2-cofiniteness in F1, without a tensor-product or modular-category assumption. [given, F1, F5, construct]

2.1 Its pairing is the two-point sphere coinvariant functor $\kappa(X,Y)=\operatorname{Hom}_{V}(X,Y')^*$, with the finite-space dual dictated by the coinvariant convention. The two-point Ward identities give precisely this formula: the corresponding block pairing intertwines all modes across the opposite-coordinate transformation, and L(0) makes the resulting map algebraic on each finite weight block. Restricted transposition and double-dual evaluation make kappa symmetric. In simple coordinates the category is $\bigoplus_i\mathrm{Vect}_{\mathbb C}^{\mathrm{fd}}$, contragredience permutes the indices involutively, and $\Delta=\bigoplus_iS_i'\boxtimes S_i$. Evaluation and coevaluation are the ordinary finite matrix identity tensors in these coordinates. Their two triangle identities are the finite dual-basis equalities, so the pairing is nondegenerate in Rexf. This verifies the actual finite-category duality required in the Statement. [F1, F4, F5, step 1.1, algebra]

2.2 F2 now assigns to every stable pair (g,n) the finite locally free algebraic coinvariant sheaf on the tangent-rigidified stable-curve stack, for every label tuple in C. It gives the actual fiber quotient and every base change, with coordinate independence proved by its Aut+O descent. It also defines unmarked and nonaffine-complement values by the auxiliary-vacuum construction. Hence this assignment has the full stable-curve scope in the Statement; it is not obtained by applying a smooth-family theorem to a nodal total space. Since all label exact sequences split, its additive label functors are right exact and have finite-dimensional values. [F1, F2, step 1.1, algebra]

3.1 By F3 these sheaves are modules over the specified logarithmic Atiyah algebra $(c/2)A_\Lambda(-\widetilde\Delta)$. The factor c/2 is the actual determinant comparison: the Laurent determinant extension has central weight two, whereas the VOA Virasoro center acts by c. Their vertical splittings agree, so this is a global algebroid identification and not merely a match of local curvature scalars. The induced connection is projectively flat and logarithmic. F4 integrates it to linear transport on the Hodge extension $\mathsf{Surf}_{c/2}$ and projective transport before that lift. Its construction has nonempty connected homotopy fibers and the canonical genus-zero section required in F5. [F3, F4, F5, step 2.2, algebra]

3.2 At a node F1 identifies the coinvariant fiber with the finite direct sum of the normalization values carrying $(S_i',S_i)$ at its two branches, with reversal of the branch enumeration accompanied by the canonical symmetry. F2 lifts this to its actual power-series sewing isomorphism and proves its q=0 specialization and external coordinate covariance. The normalized tensor uses degree $L(0)-h_i$ only to give nonnegative integral powers; F3 retains the genuine conformal lowest weight as the normal-direction residue $-h_i$. Thus the map intertwines the boundary-specialization Atiyah actions and has the exact dual-label and anomaly conventions of the Statement. Both separating and nonseparating nodes are included, since the normalization construction did not assume it connected. [F1, F2, F3, F5, step 2.1, algebra]

4.1 Vacuum insertion is the F2 sheaf isomorphism and intertwines the logarithmic action by F3: a lift regular at the new mark acts on its vacuum by modes L(m) with m at least −1, all zero. F4 therefore supplies capping with the distinguished label V, including the unstable disk and cylinder arities needed to pass from stable moduli to the full surface operad. For multiple contractions, every fixed-degree coefficient is a finite tensor contraction and a finite sum over labels. The two contraction orders and interchange with vacuum insertion are equal on representatives. The same equalities hold for the Hodge lifts by the exact determinant-line composition and the normal-residue calculation of F3–F4. Hence these are coherent natural graph-operation maps, not a further assumption A6. [F2, F3, F4, F5, step 3.2, algebra]

5.1 The finite category and symmetric nondegenerate pairing of step 2.1, the right-exact label values of step 2.2, the lifted mapping-class transport of step 3.1, and the coherent vacuum/sewing maps of the preceding steps define a modular $\mathsf{Surf}_{c/2}$-algebra in Rexf by F5. Its semisimple internal coevaluation is exactly the displayed direct sum over simple dual pairs. This proves the full unchanged Statement. No comparison with the Huang–Lepowsky tensor structure, RT classification theorem, or full local CFT has been assumed or concluded. [F1, F2, F3, F4, F5, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1, algebra] ∎
