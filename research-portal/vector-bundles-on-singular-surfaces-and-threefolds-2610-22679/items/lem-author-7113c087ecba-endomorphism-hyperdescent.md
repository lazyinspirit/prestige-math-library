---
id: lem-author-7113c087ecba-endomorphism-hyperdescent
kind: lemma
title: From constructible-category hyperdescent to the actual cohomology complex
status: published
domain: mathematics
deps:
  - thm-author-7113c087ecba-arc-input
  - thm-adjudicate-60ab133bec72-enhanced-mapping-input
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-7113c087ecba-arc-input: mathematical-premise
  thm-adjudicate-60ab133bec72-enhanced-mapping-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 9
sources:
  references:
    - title: The Stacks Project, Cohomology of unbounded complexes
      url: https://stacks.math.columbia.edu/tag/07A5
      locator: Section 21.19, opening Grothendieck/K-injective construction,
        additive-functor clause (2), computation formula and object-sections
        example (2), before Lemma 21.19.1.
      statement: On a ringed site, module complexes admit functorial K-injective
        resolutions; the right derived functor of an additive functor into an
        abelian category is computed on such a resolution. Apply evaluation at
        the terminal object with target Lambda-modules.
      hypotheses: A ringed site in fixed universes, here the small etale site with the
        constant commutative coefficient ring sheaf; evaluation is additive. Use
        Choice for the imported resolution constructions. Restrict the natural
        global coefficient-ring action along Lambda to obtain Lambda-modules.
      reading_limits: Read the opening construction through the two examples in the
        online tagged text. The injective-existence theorem and general
        derived-functor machinery cited there are imported, not reconstructed.
        Accessed 2026-11-12; no repository revision pinned.
    - title: The Stacks Project, K-injective complexes
      url: https://stacks.math.columbia.edu/tag/070G
      locator: Definition 13.31.1 and Lemma 13.31.2, including its proof.
      statement: K-injectivity means vanishing of homotopy classes from acyclic
        complexes; maps into a K-injective complex in the homotopy category
        agree with derived-category maps, and quasi-isomorphisms in the source
        induce isomorphisms on these maps.
      hypotheses: An abelian category, an arbitrary source complex and a K-injective
        target; shifts of acyclic complexes remain acyclic.
      reading_limits: Read Definition 13.31.1, the following shift observation, and
        the full statement and displayed proof of Lemma 13.31.2. No
        reconstruction of existence of K-injective resolutions is claimed.
        Accessed 2026-11-12.
    - title: Jacob Lurie, Higher Algebra, differential graded mapping spaces and
        derived enhancements
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Remark 1.3.1.12, printed p. 83; Definition 1.3.5.8 and Proposition
        1.3.5.9, pp. 125–126; Lemmas 1.3.5.11–12 and Propositions 1.3.5.13–15,
        pp. 126–127.
      statement: The derived infinity-category of a Grothendieck abelian category is
        the dg nerve of fibrant injective complexes and is the
        infinity-localization at quasi-isomorphisms. Its mapping spaces are
        obtained from the nonnegative chain truncation of the Hom complex by
        Dold–Kan. Quasi-isomorphisms in the source preserve Hom into a fibrant
        target.
      hypotheses: A Grothendieck abelian category in fixed universes, with Choice for
        the imported model/resolution constructions. Reindex source chain
        complexes to cochains by C_n=C^{-n}. All shifts are retained when
        recovering a mapping spectrum.
      reading_limits: Read the explicit mapping-space formula in Remark 1.3.1.12,
        Definition 1.3.5.8, the stability statement, and the Hom/localization
        statements and displayed excerpts of their arguments. The injective
        model structure, Dold–Kan and dg-nerve foundations remain imported. The
        passage from the rank-one Hom complex to sections is proved in this
        item.
    - title: Jacob Lurie, Higher Topos Theory, cores and arrow categories
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 1.2.5.3 and following right-adjoint explanation, printed
        pp. 35–36; Proposition 2.4.7.10 and Corollary 2.4.7.11, pp. 142–143;
        Definition 3.0.0.1 and Remarks 3.0.0.2–4, pp. 144–145.
      statement: The maximal subgroupoid (core) is right adjoint to inclusion of
        spaces into infinity-categories. Cat-infinity has functor-category cores
        as mapping spaces; endpoint evaluation from the arrow category is a
        bifibration, giving the usual mapping-space fiber description.
      hypotheses: Infinity-categories and diagrams small in the chosen enlarged
        universe. Use homotopy fibers after taking cores, and retain the
        specified objects at the endpoints.
      reading_limits: Read the statement of Proposition 1.2.5.3 and following adjoint
        explanation, the endpoint-bifibration statement and displayed proof, and
        the definition and remarks defining Cat-infinity. The core and
        bifibration foundations remain imported. Commutation of the resulting
        mapping-space formula with limits is the local argument below, not an
        independently quoted theorem.
    - title: Jacob Lurie, Higher Algebra, arbitrary limits of coefficient modules
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Corollaries 4.2.3.2–3, printed p. 527, especially 4.2.3.3(1)–(2).
      statement: For a fixed algebra in a monoidal infinity-category acting on an
        infinity-category with K-indexed limits, its module category has those
        limits, computed in the underlying category; the forgetful functor
        detects equivalences.
      hypotheses: Apply with both ambient categories equal to spectra, algebra HLambda
        and any small K, including a product indexing set and Delta. The
        derived-module equivalence is the one in the declared enhanced-mapping
        supplier.
      reading_limits: Read Corollaries 4.2.3.2–3 and the adjacent end of the proof of
        Proposition 4.2.3.1. The operadic existence proof is imported. This uses
        the actual arbitrary-K statement, extending beyond the finite-limit
        interface of the existing supplier; no independent reconstruction is
        claimed.
---

## Statement
Let $\Lambda$ be a finite commutative ring. The complex-valued functor $E_\Lambda(X)=R\Gamma_{\mathrm{et}}(X,\underline\Lambda)$ on all qcqs schemes satisfies hyperdescent for arc hypercovers, with its actual derived pullback maps. The constant sheaf is an ordinary degree-zero sheaf; no invertibility of its order on $X$ is required.

## Statement references
[[thm-author-7113c087ecba-arc-input]]

## Definition
Use the Choice and nested-universe convention of the arc-input supplier: schemes lie in a fixed universe, and the sites, enhanced coefficient categories and small diagram limits lie in sufficiently enlarged universes. The small étale site, constant module sheaf, exact coefficient inverse images, bounded constructible derived infinity-category, arc topology and formal-family hypercovers have precisely that supplier's definitions. These are the entire qcqs scheme category and the rank-at-most-one valuation test, with no noetherian or coefficient-invertibility restriction. Write $\mathcal D_X=D^b_{\mathrm{cons}}(X_{\mathrm{et}},\Lambda)$; its constant object $\underline\Lambda_X$ lies in degree zero. We only use this object and its shifts; no closure of $\mathcal D_X$ under arbitrary derived tensor products is asserted.

Write $D(\Lambda)$ here for the unbounded derived infinity-category of cochain complexes of ordinary $\Lambda$-modules, rather than its homotopy category. For a sheaf complex $M$ on $X_{\mathrm{et}}$, choose a K-injective resolution $M\to I^\bullet$ and define $R\Gamma_{\mathrm{et}}(X,M)$ by the complex $I^\bullet(X)$, with its $\Lambda$-action. K-injective means that all cochain maps from acyclic complexes are homotopic to zero; acyclic means all cohomology sheaves vanish. The imported construction makes this independent of the resolution in the enhanced derived category. The scalar action uses $\Lambda\to\Gamma(X,\underline\Lambda_X)$; those two rings need not be equal. In particular $E_\Lambda(X)=R\Gamma_{\mathrm{et}}(X,\underline\Lambda_X)$ is an object of $D(\Lambda)$.

For $f:Y\to X$, the actual cohomology pullback is the derived version of the natural map $M(X)\to(f^{-1}M)(Y)$, with its fixed coefficient action. Equivalently, under the rank-one derived-Hom identification proved below, it is induced by the exact $\Lambda$-linear inverse-image functor on maps from the constant object. The coherent composition maps are those of inverse image. For a formal family $\coprod_aU_a$ set $E_\Lambda(\coprod_aU_a)=\prod_aE_\Lambda(U_a)$; totalization means the homotopy limit over $\Delta$ in $D(\Lambda)$.

## Facts & Assumptions
**Given:** The finite commutative ring and the inherited Choice and universe bounds just specified.

**Goal:** For every arc hypercover, prove that its canonical comparison of actual coefficient complexes is an equivalence, including the empty-family value.

[A1] Choice is used for the imported injective-resolution and derived-enhancement constructions. [[math:def-axiom-of-choice]]

[F1] The precise geometric, site, constructibility, inverse-image and hypercover definitions and the hypercomplete categorical arc theorem are supplied by [[thm-author-7113c087ecba-arc-input]].

[F2] The existing stable-category, coherent spectrum, representable-limit and equivalence $D(\Lambda)\simeq\operatorname{Mod}_{H\Lambda}$ interfaces are supplied by [[thm-adjudicate-60ab133bec72-enhanced-mapping-input]]. This item uses $D(\Lambda)$ for the enhancement that supplier calls $\mathcal D(\Lambda)$.

[F3] The ringed-site K-injective construction and the dg mapping-space formula are imported in source records 0–2 below. The rank-one identification with derived sections, its coefficient action and its pullback compatibility are checked locally in step 1.1.

[F4] Source record 3 supplies cores and the endpoint mapping-space description. Source record 4 supplies all small limits and detection of equivalences for $\operatorname{Mod}_{H\Lambda}$, not merely finite limits.

## External input
[Stacks, Section 21.19](https://stacks.math.columbia.edu/tag/07A5) supplies K-injective derived evaluation on the ringed site $(X_{\mathrm{et}},\underline\Lambda_X)$. Use its additive-functor clause with target ordinary $\Lambda$-modules. [Stacks, Section 13.31](https://stacks.math.columbia.edu/tag/070G) fixes K-injectivity and maps into such resolutions. [Higher Algebra](https://www.math.ias.edu/~lurie/papers/HA.pdf), at source record 2's locators, supplies the enhanced dg mapping-space calculation. Thus this is a statement about complexes and their enhancement, rather than an inference from cohomology groups alone. Their foundational existence and comparison proofs remain imported.

[Higher Topos Theory](https://www.math.ias.edu/~lurie/papers/HTT.pdf), at source record 3's locators, supplies the core and arrow-category foundations used in step 2.1. There $\mathcal C^\simeq$ is the maximal subgroupoid of $\mathcal C$, and $\operatorname{Fun}(\Delta^1,\mathcal C)$ is its arrow category; the mapping space from $x$ to $y$ is the homotopy fiber at $(x,y)$ of the endpoint map on their cores. [Higher Algebra](https://www.math.ias.edu/~lurie/papers/HA.pdf), Corollaries 4.2.3.2–3, supplies the all-small-limit module criterion. The source records give exact hypotheses and reading limits. The categorical descent-to-cohomology composition is the local proof below; the whole lemma is not declared an imported theorem.

## Proof
1.1 Fix an arc hypercover $U_\bullet\to X$. By [F1], the actual inverse images give an equivalence $\mathcal D_X\simeq\lim_{[m]\in\Delta}\mathcal D_{U_m}$, evaluating a formal family by the product of its categories. The constant degree-zero object is bounded constructible, since it is constant of finite type on every affine open, and inverse image preserves this object and each shift. To identify its derived endomorphisms, resolve the target constant sheaf by $I^\bullet$. For every sheaf $N$, evaluation of a module map at $1$ gives a natural $\Lambda$-linear isomorphism $\operatorname{Hom}_{\underline\Lambda_X}(\underline\Lambda_X,N)\cong N(X)$: a global section defines multiplication by that section on constant scalars, and the map extends to locally constant scalars by sheaf gluing. Applied in every degree, this identifies the full Hom cochain complex from $\underline\Lambda_X[0]$ into $I^\bullet$ with $I^\bullet(X)$, with the same differentials and scalar action. The K-injective and dg mapping interfaces of [F3] therefore identify the underlying spectrum of $E_\Lambda(X)$ with the mapping spectrum from $\underline\Lambda_X$ to itself in $\mathcal D_X$, naturally in all shifts. Fullness of the constructible subcategory gives the same mapping spaces as the ambient derived category. This identification respects pullback: both maps arise from exact coefficient inverse image applied to maps out of the constant sheaf; its scalar maps $\lambda\operatorname{id}$ pull back to the identical scalar maps. More explicitly, starting from $M\to I_X^\bullet$, the map on sections is the composite into $(f^{-1}I_X^\bullet)(Y)$ and then into a K-injective replacement on $Y$. Exact inverse image makes $f^{-1}M\to f^{-1}I_X^\bullet$ a quasi-isomorphism. Functorial replacement and inversion of this quasi-isomorphism identify the target with $R\Gamma_{\mathrm{et}}(Y,f^{-1}M)$. All these maps and the Hom maps before localization are maps of $\Lambda$-complexes; functorial resolution and inverse-image composition retain their coherent $\Lambda$-module structure. Thus the resulting coherent map is the canonical $\Lambda$-linear cohomology pullback defined above. The same reasoning applies to every hypercover member and product family. [A1, F1, F2, F3]

2.1 For any small diagram of infinity-categories with limit $\mathcal C=\lim_i\mathcal C_i$ and objects $x,y$ in $\mathcal C$, the endpoint-core formula in [F4] gives $\operatorname{Map}_{\mathcal C}(x,y)\simeq\operatorname{fib}_{(x,y)}(\operatorname{Fun}(\Delta^1,\mathcal C)^\simeq\to(\mathcal C\times\mathcal C)^\simeq)$. Both functor-category formation and taking cores preserve limits: the former is right adjoint to product with $\Delta^1$, by the functor exponential identity, and the latter is right adjoint to inclusion of spaces by [F4]. Limits commute with homotopy fibers by their universal property. Hence this fiber is $\lim_i\operatorname{Map}_{\mathcal C_i}(x_i,y_i)$, with exactly the maps induced by the limit cone. Apply this to the constant object and its shifts in the categorical descent equivalence of step 1.1. For every $n\geq0$ it gives the comparison for $\operatorname{Map}(\underline\Lambda,\underline\Lambda[n])$, compatibly with their loop structure maps; these are the spaces of the endomorphism spectrum in [F2]. Taking limits levelwise in its coherent loop-tower description gives an equivalence of underlying spectra. By step 1.1 this is the underlying spectrum of the canonical $\Lambda$-linear comparison $E_\Lambda(X)\to\lim_{[m]\in\Delta}E_\Lambda(U_m)$: [F4] computes the entire limit, including family products, after forgetting from $H\Lambda$-modules to spectra, and detects equivalences there. Consequently the comparison is an equivalence in $D(\Lambda)$, with the actual pullbacks. On the empty scheme the small étale site has only the empty object and its empty covering, so every module sheaf is zero and $E_\Lambda(\varnothing)=0$. This also supplies empty-cover descent. All uses of the categorical theorem require only finite $\Lambda$, so no invertibility assumption has entered. [F1, F2, F4, step 1.1] ∎
