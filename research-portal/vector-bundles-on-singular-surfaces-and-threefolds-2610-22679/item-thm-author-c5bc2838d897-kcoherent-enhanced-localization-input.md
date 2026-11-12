---
title: External localization of one marked scheme and tensor family
status: published
research_item: thm-author-c5bc2838d897-kcoherent-enhanced-localization-input
dependency_level: 0
sources:
  references:
    - title: Blumberg–Gepner–Tabuada, Uniqueness of the multiplicative cyclotomic
        trace
      url: https://arxiv.org/pdf/1103.3923v3
      locator: §3, Proposition 3.5, PDF p. 13
      statement: A symmetric monoidal relative category whose weak equivalences are
        preserved by tensor in each variable has a symmetric monoidal
        infinity-localization. A weakly symmetric monoidal functor preserving
        weak equivalences induces a symmetric monoidal functor on these
        localizations.
      hypotheses: Ordinary symmetric monoidal categories C,D, weak equivalences
        W_C,W_D tensor-stable in each variable, and a lax symmetric monoidal
        functor whose unit/product comparison maps are weak equivalences. Apply
        to K-flat sheaf complexes and quasi-isomorphisms, with actual strong
        symmetric monoidal f*.
      reading_limits: Current repair inspected Proposition 3.5, its displayed proof,
        and the preceding Lemma 3.4 discussion. The statement is imported, not
        reproved here; the cited older Higher Algebra numbering is
        version-specific. No field-dependent dg monoidal nerve theorem is used.
    - title: Jacob Lurie, Higher Algebra
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definitions 1.1.1.9 and 1.3.1.1; Construction 1.3.1.6; Proposition
        1.3.2.10, Remark 1.3.2.17 and paragraph following its proof (pp. 89–92);
        Proposition 1.3.4.5 (p. 109); Proposition 1.3.5.15 (p. 127); Definitions
        2.0.0.7, 2.1.1.8 and 2.1.2.1
      statement: The indicated definitions fix stability, dg categories, the dg nerve,
        and the finite-pointed-set symmetric monoidal framework. Proposition
        1.3.4.5 identifies interval-closed complex categories localized at
        homotopy equivalences with their dg nerves. The paragraph after
        Proposition 1.3.2.10 gives stability of shift/cone-closed full complex
        subcategories. Proposition 1.3.5.15 identifies the derived
        infinity-category of a Grothendieck abelian category with
        quasi-isomorphism localization.
      hypotheses: "For the chain-interval comparison: an additive category and a full
        complex subcategory closed under tensor with N_*(Delta^1). For
        stability: a nonempty full complex subcategory closed under shifts and
        mapping cones. For the unbounded derived comparison: a Grothendieck
        abelian category. Translate chains to cochains by degree negation.
        Application to K-flat sheaf complexes requires the local consumers to
        verify interval, shift and cone closure; this source does not itself
        establish those K-flat properties. Symmetric monoidal
        infinity-categories satisfy the inert Segal equivalences, including the
        nullary case."
      reading_limits: Current repair inspected the listed dg/stability definitions and
        construction, Proposition 1.3.4.5 statement, Proposition 1.3.2.10 and
        its cone/shift proof and following paragraph, Proposition 1.3.5.15 and
        its displayed proof, and the symmetric monoidal/active/inert definitions
        and surrounding discussion. No reconstruction of model structures,
        coherent nerves or the complete proof of Proposition 1.3.4.5 is claimed.
    - title: Brad Drew, Verdier quotients of stable quasi-categories are localizations
      url: https://arxiv.org/pdf/1511.08287v1
      locator: Definition 1.1 and Theorem 1.3, printed pp. 5–6 (PDF pp. 6–7)
      statement: If A is a stable full subcategory of a small stable infinity-category
        C, then localization of C at maps whose cofibers lie in A is the stable
        Verdier quotient C/A. In particular that ordinary infinity-localization
        is stable.
      hypotheses: Smallness in a chosen universe; enlarge universes to encompass the
        sheaf-complex categories. No field hypothesis occurs in Theorem 1.3.
      reading_limits: Current repair read Definition 1.1 and Theorem 1.3 with its
        displayed proof and Lemma 1.2 context. The ind-completion foundations
        and cited BGT inputs in that proof are imported, not reconstructed. No
        field-dependent dg construction from Section 2 is applied.
    - title: Vladimir Hinich, Dwyer–Kan localization revisited
      url: https://arxiv.org/pdf/1311.4128v4
      locator: §1.1.2–1.1.3; Definition 2.1.1, Proposition 2.1.4 and complete proof
        §2.1.5–2.2.6; Definition 3.2.1 and Proposition 3.2.2; PDF pp. 4–5, 16–22
      statement: Localization is an actual functor L:Cat_∞^+→Cat_∞ with a natural
        localization map. A marked cocartesian fibration localizes to a
        cocartesian fibration with the localized fibers (Proposition 2.1.4).
        Tensor-stable markings give a symmetric monoidal localization with the
        full symmetric monoidal functor universal property (Proposition 3.2.2).
      hypotheses: Definition 2.1.1 requires a cocartesian fibration, marked
        cocartesian lifts of marked base edges, preservation of fiber markings
        by every transport, and equivalence of localized fibers over marked base
        edges. Markings are saturated. For symmetric monoidal localization every
        active Fin_* transport must preserve the markings. Use equivalences as
        base markings, componentwise quasi-isomorphisms in the fibers, and all
        categories in a sufficiently large universe.
      reading_limits: Current repair inspected the localization definition and natural
        map in Sections 1.1.2–1.1.3, Definitions 2.1.1 and 2.1.3, Proposition
        2.1.4, the classification discussion and Lemma 2.1.6, and Definition
        3.2.1 and Proposition 3.2.2 with surrounding marking conventions. This
        checks the imported statements and hypotheses, not the complete
        mapping-simplex proof in Section 2.2 or the straightening foundations.
        K-flat application hypotheses remain obligations of the local consumers.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Definitions 1.1.2.4, 2.0.0.3, 2.4.1.1 and 2.4.2.1; Sections 1.2.4 and
        3.0 (Definition 3.0.0.1); Remark 2.4.2.2 and its dual; Proposition
        3.2.5.21; Hinich Sections 2.1.5–2.1.6
      statement: The specified definitions fix infinity-categories, equivalences,
        Cat_infinity, inner fibrations and cocartesian edges/fibrations by
        duality. The nerve of an ordinary Grothendieck opfibration is
        cocartesian. Proposition 3.2.5.21 identifies the cocartesian relative
        nerve of a category-valued diagram with its classified diagram; Hinich
        Section 2.1.5 supplies the general coherent-diagram classification used
        here.
      hypotheses: Use inner-horn infinity-categories and the dual
        Cartesian-edge/fibration definitions. Ordinary categories and
        opfibrations are in a chosen universe. For Proposition 3.2.5.21 the base
        is an ordinary category and each diagram value is an infinity-category.
        For the ordinary Grothendieck construction, pseudofunctor comparison
        isomorphisms must satisfy their unit and composition coherence
        equations.
      reading_limits: Current repair inspected the indicated infinity-category,
        Cat_infinity and fibration definitions, Remark 2.4.2.2, Proposition
        3.2.5.21 and its displayed proof, and Hinich Sections 2.1.5–2.1.6. The
        general straightening equivalence and its model-categorical foundations
        are imported rather than reproved. The general classification assertion
        is anchored to Hinich, not attributed solely to the ordinary-base
        Proposition 3.2.5.21.
    - title: The Stacks Project, Cohomology of Sheaves, Flat resolutions
      url: https://stacks.math.columbia.edu/tag/06Y7
      locator: Section 20.26, Definition 20.26.2 and Lemmas 20.26.1–20.26.3
      statement: A sheaf complex is K-flat when total tensor with every acyclic sheaf
        complex is acyclic. Total tensor induces an exact homotopy-category
        functor; tensoring with a K-flat complex preserves quasi-isomorphisms.
      hypotheses: A ringed space and unbounded complexes of modules over its
        commutative structure sheaf; use direct-sum total tensor. Lemma 20.26.3
        requires the tensor factor to be K-flat.
      reading_limits: Read Definition 20.26.2 and the statements and displayed proofs
        of Lemmas 20.26.1 and 20.26.3. These are imported definitions/premises,
        not a local reconstruction of resolutions or of the general theory of
        derived tensor.
external_input: true
---

PDF p. 3: Nonconnective algebraic K theory: enhanced prerequisite interface

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-chain-homotopy-equivalence](https://alphabetamath.cc/item/def-chain-homotopy-equivalence)
- [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-complex-homotopy-and-contractibility-in-an-additive-category](https://alphabetamath.cc/item/def-complex-homotopy-and-contractibility-in-an-additive-category)
- [math:def-symmetric-monoidal-category](https://alphabetamath.cc/item/def-symmetric-monoidal-category)
- [math:def-lax-strong-and-strict-monoidal-functor](https://alphabetamath.cc/item/def-lax-strong-and-strict-monoidal-functor)
- [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)
- [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)
- [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)
- [` Blumberg–Gepner–Tabuada, Uniqueness of the multiplicative cyclotomic trace · §3, Proposition 3.5, PDF p. 13 `](https://arxiv.org/pdf/1103.3923v3)
- [` Jacob Lurie, Higher Algebra · Definitions 1.1.1.9 and 1.3.1.1; Construction 1.3.1.6; Proposition 1.3.2.10, Remark 1.3.2.17 and paragraph following its proof (pp. 89–92); Proposition 1.3.4.5 (p. 109); Proposition 1.3.5.15 (p. 127); Definitions 2.0.0.7, 2.1.1.8 and 2.1.2.1 `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Brad Drew, Verdier quotients of stable quasi-categories are localizations · Definition 1.1 and Theorem 1.3, printed pp. 5–6 (PDF pp. 6–7) `](https://arxiv.org/pdf/1511.08287v1)
- [` Vladimir Hinich, Dwyer–Kan localization revisited · §1.1.2–1.1.3; Definition 2.1.1, Proposition 2.1.4 and complete proof §2.1.5–2.2.6; Definition 3.2.1 and Proposition 3.2.2; PDF pp. 4–5, 16–22 `](https://arxiv.org/pdf/1311.4128v4)
- [` Jacob Lurie, Higher Topos Theory · Definitions 1.1.2.4, 2.0.0.3, 2.4.1.1 and 2.4.2.1; Sections 1.2.4 and 3.0 (Definition 3.0.0.1); Remark 2.4.2.2 and its dual; Proposition 3.2.5.21; Hinich Sections 2.1.5–2.1.6 `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)
- [` The Stacks Project, Cohomology of Sheaves, Flat resolutions · Section 20.26, Definition 20.26.2 and Lemmas 20.26.1–20.26.3 `](https://stacks.math.columbia.edu/tag/06Y7)

## Statement
Assume AC and suitable universes. Hinich's localization L:Cat_∞^+→Cat_∞ is a functor with a natural localization map. For a marked cocartesian fibration p:(E,V)→(B,W) satisfying Definition 2.1.1, its localization is a cocartesian fibration L(E,V)→L(B,W), with fibers the localized original fibers (Proposition 2.1.4). The four hypotheses are: p is cocartesian; cocartesian lifts of W are marked; all fiber transports preserve markings; and transports over W induce equivalences of localized fibers. Markings are saturated. For a symmetric monoidal cocartesian fibration over Fin_*, if every active transport preserves its componentwise marking, Proposition 3.2.2 gives a symmetric monoidal localization, with the full universal property for symmetric monoidal functors.

The nerve of an ordinary Grothendieck opfibration is a cocartesian fibration (dual of HTT Remark 2.4.2.2). Cocartesian fibrations classify coherent diagrams, as in Hinich §2.1.5–2.1.6/HTT straightening. These facts apply to a single family over a product base, and thus retain coherence in all base variables simultaneously.

For the fiber comparison, retain these formal inputs: the symmetric monoidal relative localization theorem of BGT Proposition 3.5; HA Proposition 1.3.4.5 identifying chain-homotopy localization with the dg nerve under finite-chain-interval closure; HA Proposition 1.3.2.10 and its following paragraph giving stability for full shift/cone-closed complex subcategories; and Drew Theorem 1.3 identifying stable Verdier quotients with localization at the maps whose cones lie in the subcategory.

## Definition
**Size and scheme convention.** Fix nested Grothendieck universes containing $\omega$, large enough that every category being localized is small in the next universe. Their existence is an additional size assumption, not a consequence of AC. Here $\operatorname{Sch}_{qcqs}$ has all quasi-compact quasi-separated schemes in the fixed universe and all scheme morphisms between them.

**Complex convention.** Use unbounded complexes in an additive category and its cochain homotopies; convert chain notation by $C_n=C^{-n}$. A homotopy equivalence has an inverse up to chain homotopy; a quasi-isomorphism induces isomorphisms on all homology objects when the category is abelian. In cochain notation $C[1]^n=C^{n+1}$ with differential $-d_C$, and $\operatorname{Cone}(f)^n=D^n\oplus C^{n+1}$ with differential $(y,x)\mapsto(d_Dy+f(x),-d_Cx)$. The finite chain interval is free on two degree-zero vertices and one degree-one edge whose boundary is the second vertex minus the first; tensor with it uses finite sums and the total differential. These are the interval, shift and cone conventions in HA Proposition 1.3.4.5 and Remark 1.3.2.17.

**Higher categories and families.** Use HTT Definition 1.1.2.4 (inner-horn infinity-categories), Section 1.2.4 (equivalences), and Definition 3.0.0.1 ($\operatorname{Cat}_\infty$). Functors are simplicial maps; $\operatorname{Fun}(C,D)$ is the simplicial exponential. The ordinary nerve has strings of composable arrows as its simplices. Cocartesian edges and fibrations mean the duals of HTT Definitions 2.4.1.1 and 2.4.2.1; transport is induced by cocartesian lifts. Fibers are taken in the infinity-categorical sense; Hinich Definition 2.1.3 allows equivalent cocartesian presentations. A coherent diagram over $B$ means a functor $B\to\operatorname{Cat}_\infty$.

**Ordinary opfibration.** For a functor $p:E\to B$, an arrow $a:e\to e'$ above $u:b\to b'$ is opcartesian if every arrow $h:e\to z$ above $vu$, for any $v:b'\to p(z)$, factors uniquely as $h=ka$ with $p(k)=v$. It is an opfibration when such an $a$ exists for every $e$ and every $u$ starting at $p(e)$. A covariant pseudofunctor assigns categories $F(b)$ and functors $F(u)$ with invertible unit/composition comparisons satisfying unit and associativity coherence. Its ordinary Grothendieck construction has pairs $(b,x)$ as objects and pairs $(u,F(u)x\to y)$ as arrows; composition uses those comparisons. The coherence equations give associativity and identities. This is the ordinary convention in the dual of HTT Remark 2.4.2.2.

**Marked localization.** A marked category $(C,W)$ has specified arrows $W$; saturation means that $W$ is the inverse image of equivalences under some functor. Use Hinich Section 1.1.2 for $\operatorname{Cat}_\infty^+$ and localization: functors from $L(C,W)$ correspond to functors from $C$ taking $W$ to equivalences. For an ordinary relative category, apply this to its nerve and its chosen weak-equivalence subcategory.

**Tensor convention.** $\mathrm{Fin}_*$ consists of finite pointed sets $\langle n\rangle=\{*,1,\ldots,n\}$ and pointed maps. Active means that only the basepoint maps to the basepoint; inert means each nonbasepoint in the target has exactly one preimage. Symmetric monoidal infinity-categories and their functors have HA Definition 2.0.0.7 and Hinich Definition 3.2.1 conventions. In particular, the inert projections identify the $\langle n\rangle$ fiber with the $n$th power of the $\langle1\rangle$ fiber, including the terminal nullary fiber. Componentwise marking uses these identifications. For BGT's ordinary symmetric monoidal categories, a lax symmetric monoidal functor has coherent unit/product comparisons compatible with the symmetry; weakly symmetric monoidal means those comparisons are weak equivalences.

**Stable and dg convention.** Use HA Definitions 1.1.1.9 and 1.3.1.1 and Construction 1.3.1.6 for stability, dg categories and the dg nerve, respectively. Cofibers are pushouts along the map to zero; exact functors preserve zero and finite limits and colimits. The stable Verdier quotient has Drew Definition 1.1's universal property among exact functors annihilating the subcategory. This is the stable quotient, with no additional idempotent completion asserted.

**Sheaf application convention.** $\operatorname{Mod}(\mathcal O_X)$ means all Zariski module sheaves, without a quasicoherence restriction. Tensor of complexes is direct-sum total tensor of sheaf tensor products, with $d(p\otimes q)=dp\otimes q+(-1)^i p\otimes dq$ for $p$ of degree $i$. A complex is acyclic when all its cohomology sheaves vanish. It is K-flat when its total tensor with every acyclic module-sheaf complex is acyclic (Stacks Definition 20.26.2). Degreewise pullback applies $f^*M=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}M$ in every degree. These conventions specify the application objects; the consumers still owe the closure and preservation hypotheses of the imported theorems.

## Definition references
[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-chain-homotopy-equivalence](https://alphabetamath.cc/item/def-chain-homotopy-equivalence)

[math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-complex-homotopy-and-contractibility-in-an-additive-category](https://alphabetamath.cc/item/def-complex-homotopy-and-contractibility-in-an-additive-category)

[math:def-symmetric-monoidal-category](https://alphabetamath.cc/item/def-symmetric-monoidal-category)

[math:def-lax-strong-and-strict-monoidal-functor](https://alphabetamath.cc/item/def-lax-strong-and-strict-monoidal-functor)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)

[math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[Higher categorical definitions and opfibrations (HTT)](https://www.math.ias.edu/~lurie/papers/HTT.pdf)

[Stable, dg and symmetric monoidal definitions (HA)](https://www.math.ias.edu/~lurie/papers/HA.pdf)

[Marked localization conventions (Hinich)](https://arxiv.org/pdf/1311.4128v4)

[Stable quotient convention (Drew)](https://arxiv.org/pdf/1511.08287v1)

[K-flat convention (Stacks)](https://stacks.math.columbia.edu/tag/06Y7)

## Source contract
**Given:** Marked cocartesian families satisfying all four explicit conditions, tensor-stable markings for the monoidal assertion, and the interval/stability conditions for the separate fiber comparison. Use larger universes for the categories of schemes and sheaf complexes.

**Goal:** Import a genuine coherent family-localization theorem, rather than only pointwise localization statements.

[A1] Retain [AC](https://alphabetamath.cc/item/def-axiom-of-choice) for choices of representatives, cocartesian lifts and localization presentations in the imported constructions. The size assumption supplies the chosen larger universes; AC does not supply their existence. No minimal-choice assertion is made.

[F1] Hinich Definition 2.1.1 and Proposition 2.1.4 supply the family theorem and its compatibility with the functorial localization map of §1.1.

[F2] Hinich Definition 3.2.1/Proposition 3.2.2 supply the symmetric monoidal universal property; HTT Remark 2.4.2.2 and family classification supply the ordinary-opfibration and coherent-diagram bridge.

[F3] The precise BGT, HA and Drew results in the frontmatter supply the formal fiber comparisons; no field-dependent dg monoidal nerve theorem is used.

## External input
Import [F1]–[F3] with the stated hypotheses and reading limits. For the intended application, take $\operatorname{Sch}_{qcqs}^{op}\times\mathrm{Fin}_*$ as base, marked only by equivalences, and componentwise quasi-isomorphisms as the fiber markings.

If a consumer constructs the total Grothendieck category over this base and verifies saturation, all four marked-cocartesian conditions, the symmetric monoidal Segal and unit conditions on each scheme fiber, and preservation of markings by active tensor transports, then the imported theorems give one localized cocartesian family, hence one coherent diagram in the scheme and tensor variables simultaneously.

Identifying its localized fibers with supplied enhancements additionally requires the consumer to establish the relevant fiber comparisons under the hypotheses of the formal inputs above. The general imports alone do not establish the application construction, its hypothesis checks or those identifications. A natural comparison with a separately specified pullback/tensor diagram would require further data and verification; when no such diagram has been specified, no such comparison is asserted.
