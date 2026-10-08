---
id: lem-local-analytic-separation-and-saturated-borel-quotients
kind: lemma
title: "Local analytic separation and saturated Borel quotient images"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - lem-closed-witness-codings-and-measured-projections
  - lem-polish-closed-products-and-baire-parametrization
  - lem-borel-subspaces-admit-polish-presentations
  - lem-primitive-ideals-have-standard-borel-quotient-norm-codings
  - def-standard-borel-space
  - lem-c-star-state-gns-purity-and-polish-state-space
  - lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - lem-measurable-gram-schmidt-and-constant-field-trivializations
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - thm-riesz-representation-for-hilbert-space
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - lem-second-countable-group-c-star-algebra-has-a-sequential-approximate-identity
  - lem-second-countable-group-c-star-algebra-is-separable-with-a-countable-dense-star-subalgebra
  - def-mackey-borel-structure-and-countable-separation
  - lem-second-countable-lch-spaces-are-standard-borel
  - lem-compact-metric-space-has-a-countable-dense-subset
  - thm-complex-stone-weierstrass-self-adjoint
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "AC is explicit; inherited supplier choice and the exact local selections are identified in the Proof. No global selector of irreducible equivalence classes is asserted."
verification:
  precheck: pending
sources:
  references:
    - title: "David Marker, Descriptive Set Theory, complete notes"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
      locator: "Lemmas4.2 and4.5 printed34–35; Theorem4.13 and Corollary4.14 printed37; complete separation arguments read and repeated locally."
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras (2019), complete author-hosted book"
      url: "https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf"
      locator: "Theorem5.2.1, Lemmas5.2.2 and5.2.5, Proposition5.2.8, printed141–144; complete passages read; excision algebra and the nonunital step are supplied locally."
---

## Statement

Assume AC. Disjoint analytic subsets of a Polish presentation admit a Borel separator; analytic means a projection of a closed set in a product with a Polish witness space. For separable C*-algebra $A$, if its Borel pure-state kernel map onto the standard primitive code space has exactly unitary-equivalence-class fibres, every saturated Borel set has Borel image. The pure-state quotient Borel structure agrees with the Mackey quotient on fixed-carrier irreducible representation spaces, by explicit Borel GNS and vector-state maps. For second-countable LCH $G$, the group/$C^*(G)$ correspondence is Borel in both directions and identifies these Mackey quotients with [[def-mackey-borel-structure-and-countable-separation]]. No late-page analytic-separation supplier or global selector of irreducible classes is used.

## Facts & Assumptions

**Given:** The Statement hypotheses and AC.

[F1] Borel relations have closed Polish witness codings; nonempty Polish spaces are continuous images of Baire sequence space ([[lem-closed-witness-codings-and-measured-projections]], [[lem-polish-closed-products-and-baire-parametrization]]).

[F2] Borel subspaces admit Polish presentations, and primitive quotient-norm codes are standard Borel with the pure-state kernel map Borel ([[lem-borel-subspaces-admit-polish-presentations]], [[lem-primitive-ideals-have-standard-borel-quotient-norm-codings]], [[def-standard-borel-space]]).

[F3] GNS constructions, purity, Polish pure states, bounded density and approximate units are proved locally ([[lem-c-star-state-gns-purity-and-polish-state-space]], [[lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations]], [[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]]).

[F4] Countable Gram families have Borel orthonormal frames, dimension strata and transported matrix entries ([[lem-measurable-gram-schmidt-and-constant-field-trivializations]], [[def-measurable-hilbert-field-from-a-countable-fundamental-family]]). Bounded matrix forms represent operators by Hilbert Riesz ([[thm-riesz-representation-for-hilbert-space]]).

[F5] The group/C*-representation correspondence, sequential integrated approximate identity, and group-algebra separability are proved in [[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]], [[lem-second-countable-group-c-star-algebra-has-a-sequential-approximate-identity]], [[lem-second-countable-group-c-star-algebra-is-separable-with-a-countable-dense-star-subalgebra]]. The group quotient convention is [[def-mackey-borel-structure-and-countable-separation]].

[F6] Second-countable LCH spaces are Polish, compact metric spaces have countable dense sets, and a self-adjoint separating complex function algebra is uniformly dense on a compact space ([[lem-second-countable-lch-spaces-are-standard-borel]], [[lem-compact-metric-space-has-a-countable-dense-subset]], [[thm-complex-stone-weierstrass-self-adjoint]]). Haar measure is finite on compact sets ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[A1] AC supplies countable witness selections and the supplier assumptions ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The Statement hypotheses and Facts.

1.1 A Borel map between Polish presentations has Borel graph: for a dense target family $y_j$, the least index with $d(f(x),y_j)<2^{-n}$ is Borel; hence $d(f(x),y)$ is the limit of the Borel functions $d(y_{j_n(x)},y)$. The zero set is its graph. By [F1], the graph restricted to a Borel set has a closed witness coding, so its image is analytic. A nonempty analytic set is a continuous image of Baire space: its closed witness space is Polish, [F1] parametrizes that space, and the coordinate projection is continuous. Empty analytic sets need no parametrization. [F1, F2, A1, algebra]

1.2 We make the C*-Mackey convention explicit. On each fixed carrier $H_n=\mathbb C^n$ or $\ell^2$, code a representation by the matrix entries of its values on a countable rational-complex dense star algebra $D$. Norm-bounded matrices form closed subsets of countable products of compact scalar discs: bounds on all finite rational-vector forms give exactly bounded operators by [F4]. Thus their coordinate space is standard Borel. Linearity, adjoints and multiplicativity are Borel equations; matrix products are limits of finite matrix sums, and the norm bounds extend them uniquely to $A$. Nondegeneracy is Borel: choose a sequential positive approximate unit using finite dense-algebra tests, and require its images to tend strongly to1 on every basis vector. Irreducibility is Borel as well: by bounded density [F3], it is equivalent to approximating, on each finite basis tuple and to each rational error, every fixed finite-rank rational contraction target by the image of a member of a countable dense unit ball of $A$. These countably quantified norm tests are Borel (norms are countable sums of squared matrix entries). Conversely these tests make the generated algebra contain all finite-rank contractions strongly, hence all bounded operators, so its commutant is scalar. The irreducible nondegenerate code spaces $\operatorname{Irr}_n(A)$ are therefore standard Borel by [F2]. Their quotient sigma-algebra by unitary equivalence is the C*-Mackey structure. Pointwise strong or weak matrix conventions give the same Borel sets, since vector norms are Borel coordinate sums and all represented operators have the fixed norm bounds. [F2, F3, F4, A1, algebra]

1.3 For second-countable LCH $G$, [F6] supplies a compatible Polish metric. Choose an increasing compact exhaustion $K_m$ whose interiors cover $G$, from a countable relatively compact open cover; every compact set is contained in some $K_m$. Choose countable dense sets in each $K_m$. On a fixed carrier, the weak compact-uniform topology is generated by compact sup norms of basis matrix coefficients; all other vector coefficients follow by finite-vector approximation and the unitary norm bound. Each $C(K_m)$ is separable: the rational-complex algebra generated by distances to a countable dense set, their products and constants is self-adjoint and separates points, so [F6] gives uniform density. Hence this topology is second countable. Its Borel sets are generated by countable point evaluations, since every compact sup norm is the supremum over the chosen dense set. [F6, A1, algebra]

2.1 For disjoint nonempty analytic $C,D$ choose continuous parametrizations $f,g$ by Baire space. Let $C_s=f[N_s]$, $D_t=g[N_t]$ for finite prefixes. If all pairs $C_{s n},D_{t m}$ have Borel separators $E_{nm}$, then $\bigcup_n\bigcap_mE_{nm}$ separates $C_s,D_t$. Thus inseparability of the parent forces an inseparable child pair. Recursively choose such pairs, using AC, to obtain branches $\alpha,\beta$. Their image points are distinct since $C,D$ are disjoint. Disjoint open neighborhoods of those points, by continuity, eventually contain all images of the corresponding prefix cylinders, contradicting their inseparability. Hence a Borel separator exists; if either set is empty it is immediate. In particular analytic complementary sets are Borel. [F1, step 1.1, A1, algebra]

2.2 Fix the first unit basis vector on each carrier. Its vector state under an irreducible nondegenerate representation is pure, and its entries on $D$ are Borel matrix entries. Conversely, on the pure-state base the GNS fundamental family $[d_i]$ has continuous Gram coefficients $\phi(d_j^*d_i)$. The explicit least-active-index Gram–Schmidt construction of [F4] yields Borel dimension strata and fixed-carrier representation matrices. Its pointwise conclusions hold on all base points; a finite Dirac measure on any nonempty pure-state base suffices for its stated measure hypotheses. The result is a Borel map into the disjoint union of the spaces in step 1.2, with GNS class equal to the original pure-state class. Therefore a class set has Borel inverse image in the representation spaces if and only if it has Borel inverse image in pure states: use the GNS map in one direction and the fixed-vector-state map in the other. This proves equality of the two quotient structures without selecting one representative per class. The zero algebra has empty quotients and satisfies the same assertion. [F2, F3, F4, step 1.2, algebra]

2.3 The integrated correspondence from [F5] is Borel from group representations to $C^*(G)$ representations. On $q(C_c(G))$, its matrix coordinates are integrals of compactly supported tests times matrix coefficients; compact-uniform convergence makes them continuous. Norm-density and contractivity extend this to every fixed algebra element by uniform limits over the representation variable, so a dense star-algebra family has Borel matrix coordinates. Conversely, let $u_j\in C_c(G)$ be the countable approximate identity of [F5]. The inverse representation has $\pi_\rho(g)=\operatorname*{s-lim}_j\rho(q(L_g u_j))$, because $\rho(q(L_gu_j))=\pi_\rho(g)\rho(q(u_j))$ and the latter approximate-unit images converge strongly to1. At each fixed $g$, its matrix coordinates are therefore limits of Borel algebra coordinates. Step 1.3 makes the inverse map Borel. For completeness, $g\mapsto L_gu_j$ is norm-continuous in $L^1$: near fixed $g$ the supports lie in one compact set, and uniform continuity of the continuous kernel bounds the $L^1$ error by a uniform error times that compact set's finite Haar measure. Thus joint group/representation coordinates are Borel as well, by approximation with a countable dense algebra family. [F5, F6, step 1.2, step 1.3, algebra]

3.1 Let $k:P(A)\to\operatorname{Prim}(A)$ be the stated Borel surjection, and let $E$ be saturated Borel. Its image and the image of its complement are analytic by step 1.1, using the Polish presentations of [F2,F3]. They are disjoint complements because fibres are full equivalence classes. Step 2.1 makes $k(E)$ Borel. Conversely a Borel target set has Borel preimage. This proves the exact saturated-quotient claim under its fibre hypothesis; GCR will supply that hypothesis separately. [F2, F3, step 1.1, step 2.1, algebra]

4.1 The correspondences of steps 2.2 and 2.3 preserve equivalence classes and are Borel in both directions. They therefore identify the group quotient in [F5] with the C*-Mackey and pure-state quotients. Combining with step 3.1 proves the stated Borel-image and quotient assertions; step 2.1 proves analytic separation. Every map was constructed on state or representation codes, not by a global selector of irreducible classes. [F2, F5, step 2.1, step 3.1, step 2.2, step 2.3] ∎
