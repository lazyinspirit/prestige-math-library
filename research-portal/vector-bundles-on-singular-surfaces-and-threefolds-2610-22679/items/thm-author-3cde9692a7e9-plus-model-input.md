---
id: thm-author-3cde9692a7e9-plus-model-input
kind: theorem
title: External Quillen acyclicity and the actual local free-class model
status: published
domain: mathematics
deps:
  - thm-author-d026a7b99ace-universal-chern-space
  - thm-adjudicate-9ead0798f06a-projective-q-w-comparison
  - lem-adjudicate-10deda40f9da-affine-k-space-sheafification
  - math:def-local-ring
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  thm-adjudicate-9ead0798f06a-projective-q-w-comparison: mathematical-premise
  lem-adjudicate-10deda40f9da-affine-k-space-sheafification: mathematical-premise
  math:def-local-ring: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Charles Weibel, The K-book, Chapter IV
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf
      locator: IV.1.1 and IV.1.1.1–1.1.2, printed pp. 2–3; Definitions IV.1.4–1.4.1,
        Theorem IV.1.5 and Lemma IV.1.6, pp. 4–5; Construction IV.1.9(ii), p. 6;
        Theorem IV.4.9 and the explicit maps eta_n(g)=(g,1), pp. 42–43;
        Corollary IV.4.11.1, p. 45; Theorem IV.7.1, p. 61, and Corollary IV.7.2,
        p. 62.
      statement: The plus arrow is acyclic and preserves integral homology. Integral
        completion gives a functorial plus model for BGL. The stabilized
        free-automorphism arrow is identified by direct-sum group completion and
        the split-exact Q comparison.
      hypotheses: Use connected CW models componentwise. Stabilize GL_n(R) by
        diag(g,1) for a unital ring. IV.7.1 requires split exactness;
        projective-module short exact sequences split. Local freeness, rank, and
        the full perfect-space comparison are separate declared suppliers, not
        assertions imported from these passages.
      reading_limits: "Historical incoming source-reading record, retained without
        fresh primary-source credit: This maintenance read the cached primary
        Kbook.IV.txt extraction at printed pp. 2–6, 42–43, 45 and 61–62,
        including the listed definitions, theorem statements, Lemma 1.6 proof,
        Theorem 4.9 proof and stabilized maps, and the split-exact discussion
        before Theorem 7.1. It also read the current projective Q/W, full
        affine/sheaf and universal Chern supplier bodies. Plus existence,
        completion foundations and the full proof of IV.7.1 remain imported. The
        prior live-download reading is historical; no fresh network retrieval,
        scan inspection, full-chapter review, independent supplier acceptance or
        library audit is claimed. Current consumer-8588e1795ca8 maintenance read
        the assigned body and checked its current declared supplier contracts,
        including the conditional native clause and actual mapping-space
        construction. No fresh primary-source retrieval, reconstruction of
        imported foundations, independent acceptance or library audit is
        claimed."
dependency_level: 21
proof_strategy: direct
formulation_deps:
  - math:def-local-ring
  - math:def-axiom-of-choice
  - thm-adjudicate-9ead0798f06a-projective-q-w-comparison
  - lem-adjudicate-10deda40f9da-affine-k-space-sheafification
  - thm-author-d026a7b99ace-universal-chern-space
argument_deps:
  - thm-author-d026a7b99ace-universal-chern-space
  - thm-adjudicate-9ead0798f06a-projective-q-w-comparison
  - lem-adjudicate-10deda40f9da-affine-k-space-sheafification
  - math:def-local-ring
  - math:def-axiom-of-choice
---

## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions; existence of these universes is a separate assumption.

Let $R$ be any commutative local ring, meaning a nonzero commutative unital ring with a unique maximal ideal. Set $GL_n(R)=\operatorname{Aut}_R(R^n)$, $GL(R)=\operatorname{colim}_nGL_n(R)$ under $g\mapsto\operatorname{diag}(g,1)$, and $BGL(R)=|NGL(R)|$, the realization of the nerve of the one-object group category. Write $K_{\rm Perf}(R)=K_{\rm Perf}(\operatorname{Spec}R)$ for the specified nonconnective perfect-complex K-spectrum and $K_0(R)=\pi_0\Omega^\infty K_{\rm Perf}(R)$. The actual stable free-class arrow has the natural comparison
$$\mathbb Z\times BGL(R)\longrightarrow\mathbb Z\times BGL(R)^+\simeq\Omega^\infty K_{\rm Perf}(R).$$
Every finite projective $R$-module is finite free and rank identifies $K_0(R)$ with $\mathbb Z$. The first arrow is the plus arrow on each component: its homotopy fibers have the integral homology of a point, and it induces integral homology isomorphisms. The component indexed by $m$ represents $m[R]$, with negative indices interpreted by group completion. The comparison is natural for unital ring maps between these local rings, preserves the actual free-object and automorphism maps, and carries block sum, with integer rank addition, to direct-sum K-space addition through the categorical group-completion structure.

For sheaf-local use let $X$ be any qcqs scheme over a field, where qcqs means quasi-compact and quasi-separated. Use the qcqs presentations of its small Zariski site, small Nisnevich site, or smooth big site with Zariski or Nisnevich topology. The small presentations consist respectively of quasi-compact opens and qcqs étale $X$-schemes; the smooth presentation consists of qcqs smooth $X$-schemes. Nisnevich covers are étale families admitting a residue-field-preserving lift of every target point. The full affine Q-to-perfect comparison, including components, identifies their derived local sheaf models. Use the same stalkwise local homotopy convention on both sides. On all four presentations the actual free-bundle arrow agrees under this comparison with the canonical arrow used by the supplied coherent Chern construction, and it retains the direct-sum comparison. The formal Gillet completion description is retained only as the supplied conditional statement for its native small Zariski setting and an admissible graded theory; it does not identify that theory's stable class or target with the actual EM operation. Here $\underline{\mathbb Z}$ denotes locally constant ranks. The local-ring assertion applies in particular to the local rings used at Nisnevich stalks and requires no noetherian or dimension hypothesis. It does not assert that the displayed integer-component model describes every global affine K-space with nonfree projective classes.

## Statement references
[[math:def-local-ring]]

[[thm-adjudicate-9ead0798f06a-projective-q-w-comparison]]

[[lem-adjudicate-10deda40f9da-affine-k-space-sheafification]]

[[thm-author-d026a7b99ace-universal-chern-space]]

[[math:def-axiom-of-choice]]

## External input
Import plus acyclicity, its homology consequence, the functorial integral-completion model and the stabilized free-map identification at source reference 0, [Weibel, Chapter IV](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf). The finite-projective local calculation and the full Q/W/perfect comparisons are supplied separately below. The numbered argument composes these inputs; it does not reconstruct the imported foundations. The passage from a local comparison to a global identity of coefficient-valued operations remains the separately supplied normalized-chain adjunction argument; affine group agreement alone is not such an argument.

## Facts & Assumptions
**Given:** The ring or scheme/site application in the Statement, Choice, and compatible universe and site-size bounds.

[A1] Assume [[math:def-axiom-of-choice]] for the small presentations and enhanced realizations inherited from [F1]–[F3]. The compatible universes and site-size bounds are also assumed, independently of Choice. These assumptions are used when applying those comparisons and their local replacements in steps 1.1–2.1.

[F1] A local ring has the meaning in [[math:def-local-ring]]. The local calculation in Proof 2.1 of [[thm-adjudicate-9ead0798f06a-projective-q-w-comparison]] proves finite-projective freeness and the rank identification of its split Grothendieck group with $\mathbb Z$, without noetherianity. Its Statement and construction conventions supply $P(R)$, the split exact category of finite projectives, $K^Q(P(R))=\Omega BQ(P(R))$, the canonical full Q/W comparison and the componentwise acyclic stable free-class map. Its group-completion construction translates the reduced free-automorphism class into component $m[R]$.

[F2] [[lem-adjudicate-10deda40f9da-affine-k-space-sheafification]] supplies a natural equivalence $K^Q(P(A))\simeq\Omega^\infty K_{\rm Perf}(\operatorname{Spec}A)$ for every commutative unital ring $A$, including components and actual object and automorphism maps. It preserves direct sum. It also specifies the perfect-complex K-spectrum, the three qcqs site presentations and their covers, coherent pullbacks, the local sheafification comparison and its canonical unit. Ordinary derived sheafification and further hypercompletion remain distinct; use the latter consistently when adopting the stalkwise local homotopy convention.

[F3] [[thm-author-d026a7b99ace-universal-chern-space]] supplies the actual coherent universal Chern operations on the four qcqs field-scheme site presentations. Its actual construction uses stable universal bundle maps, the pointed mapping-space equivalence to reduced K, rank reduction, coherent affine extension and the canonical perfect-space source unit. It retains the full affine comparison, actual free-bundle maps and restrictions. Separately, its Statement and sixth fact give the conditional native Gillet formula $\Omega BQ\mathcal P\simeq\underline{\mathbb Z}\times\mathbb Z_\infty BGL$, and the completion of the native admissible theory's own stable class into its own derived simplicial abelian target. The supplier specifies both the native geometric category and the admissibility conditions on that theory. It asserts neither admissibility of the actual EM coefficients nor an identification of their selected stable class or target with these native objects. The native clause is not a construction of the actual four-site EM operation.

[F4] Source reference 0 imports the plus and integral-completion constructions and the explicit stabilized free-map/group-completion/Q comparison. For finite projectives the split-exact hypothesis of IV.7.1 holds because a surjection onto a projective module splits. The homology consequence of acyclicity is Lemma IV.1.6; Construction IV.1.9(ii) supplies $BGL(R)^+=\mathbb Z_\infty BGL(R)$. These imported facts do not by themselves identify the entire nonconnective perfect K-space.

## Proof
**Given:** The local ring $R$, or the qcqs field-scheme site application, with [A1].

**Goal:** Identify the actual free-class arrow and its full perfect-space target, retaining the completed local model.

1.1 By [F1], every finite projective over $R$ is free, the rank map identifies $\pi_0K^Q(P(R))$ with $\mathbb Z$, and the canonical stabilized free-class map is the componentwise plus map. Its construction uses the free automorphism class reduced by its trivial rank and translated by $m[R]$. Apply [F2] at $A=R$: the resulting equivalence is on entire spaces, not just positive homotopy groups, and its degree-zero map sends each projective to the same perfect object. It therefore identifies the two rank computations and gives the displayed factorization of the actual free-class arrow. By [F4] each first-arrow fiber is integrally acyclic and the arrow induces integral homology isomorphisms. Naturality and agreement on object/core maps follow from [F1]–[F2]; their direct-sum comparisons carry block sum and integer translation to the actual K-space addition. All supplied comparisons retain [A1]. [A1, F1, F2, F4]

2.1 In each stated site presentation, apply [F2]'s natural full affine comparison and then its chosen local replacement. Because the comparison retains actual object and automorphism maps and direct sum before localization, it identifies the canonical stable free-bundle arrow and its addition square in the common Q/perfect local model. The actual coherent Chern construction of [F3] uses these same arrows and the canonical perfect-space unit, through its separate mapping-space and affine-extension argument. Separately, under the native geometric and admissible-theory hypotheses recorded by [F3], the formal Gillet clause applies [F4]'s integral-completion model to that native theory's own stable class and derived simplicial abelian target. No identification of that class or target with the actual EM operation is inferred. This conditional clause is not used to construct the actual operations on any of the four presentations. Step 1.1 still supplies ring-level acyclicity at every local ring used for a stalk, with no regularity, noetherianity or dimension bound. For a nonlocal affine ring, [F2] supplies the full comparison with its actual projective components; [F1]'s replacement of those components by integer rank is applied only to local rings. No global free-generation claim or identity of global coefficient operations is inferred. [A1, F1, F2, F3, F4, step 1.1] ∎
