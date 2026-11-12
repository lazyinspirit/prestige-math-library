---
id: lem-author-2ac325480ae8-chosen-root
kind: lemma
title: A chosen root trivializes the actual Tate coefficient on the slice
status: published
domain: mathematics
deps:
  - def-etale-tate-coefficients
  - lem-author-2ac325480ae8-slice-site
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-quasi-compact-and-quasi-separated-scheme
  - def-scheme-sites-and-sheafification
  - math:def-morphism-of-schemes
  - math:def-fibre-product-schemes-universal-property
  - math:thm-fibre-products-of-schemes-exist
dependency_roles:
  def-etale-tate-coefficients: mathematical-premise
  lem-author-2ac325480ae8-slice-site: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  math:def-morphism-of-schemes: mathematical-premise
  math:def-fibre-product-schemes-universal-property: mathematical-premise
  math:thm-fibre-products-of-schemes-exist: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 13
formulation_deps:
  - def-etale-tate-coefficients
  - lem-author-2ac325480ae8-slice-site
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-quasi-compact-and-quasi-separated-scheme
  - def-scheme-sites-and-sheafification
  - math:def-morphism-of-schemes
  - math:def-fibre-product-schemes-universal-property
  - math:thm-fibre-products-of-schemes-exist
argument_deps:
  - def-etale-tate-coefficients
  - lem-author-2ac325480ae8-slice-site
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-quasi-compact-and-quasi-separated-scheme
  - def-scheme-sites-and-sheafification
  - math:def-morphism-of-schemes
  - math:def-fibre-product-schemes-universal-property
  - math:thm-fibre-products-of-schemes-exist
sources:
  references:
    - title: The Stacks Project, compatible big and small étale sites
      url: https://stacks.math.columbia.edu/tag/0214
      locator: Definitions 34.4.6 and 34.4.8; Lemma 34.4.7; Lemmas 34.4.17(2) and
        34.4.18, including their proofs
      statement: Common big étale sites give compatible small sites; base change
        induces their morphisms, with direct image evaluated on fibre products
        and canonical composition identifications.
      hypotheses: Schemes in one size-bounded big étale site. Enlarge the universe
        bounds to include the schemes, base changes and covering refinements
        used here.
      reading_limits: Read these definitions, the covering-refinement lemma and the
        two morphism/composition lemmas with their proofs in the served text.
        Import the site-existence machinery they cite. No general interchange of
        small-site restriction with inverse image is used; no revision pin or
        foundational reconstruction is claimed.
    - title: The Stacks Project, inverse image on small étale sites
      url: https://stacks.math.columbia.edu/tag/03PZ
      locator: Definition 59.36.1; Equation 59.36.1.1; Lemma 59.36.2(1)–(2) and the
        proof of those parts
      statement: Small étale inverse image is left adjoint to direct image and
        preserves finite limits and colimits of sheaves of sets; it is exact on
        abelian sheaves.
      hypotheses: Any scheme morphism with its corresponding compatible small étale sites.
      reading_limits: Read the adjunction, associated-presheaf formula, all four lemma
        assertions and the proof of (1)–(2). Import general topos existence and
        exactness. The geometric-stalk and representable-sheaf clauses are not
        needed for this application.
    - title: The Stacks Project, pullback of modules on ringed topoi
      url: https://stacks.math.columbia.edu/tag/03D5
      locator: Definition 18.13.1(2); Lemmas 18.13.2–3 with their proofs
      statement: Module pullback is extension of scalars after inverse image; it is
        adjoint to module direct image and has canonical composition
        identifications.
      hypotheses: A morphism of ringed topoi and sheaves of modules. Apply with
        constant coefficient ring sheaves and the ring comparison constructed
        below.
      reading_limits: Read the definition and both lemmas with their proofs. Import
        the cited inverse-image and change-of-rings foundations. Only ordinary
        sheaf modules are used, without derived tensor products or
        structure-sheaf coefficients.
    - title: The Stacks Project, tensor products and pullback
      url: https://stacks.math.columbia.edu/tag/03EL
      locator: Lemma 18.26.2, full statement and proof
      statement: Pullback along a morphism of ringed topoi commutes canonically and
        functorially with tensor products of module sheaves.
      hypotheses: A morphism of ringed topoi and two source-ring module sheaves.
        Iterate twice over the constant coefficient ring for the tensor cube.
      reading_limits: Read the complete statement and adjunction/bilinearity proof.
        Import its general sheaf-module foundations; the finite tensor iteration
        and chosen-root application are proved locally here.
---

## Statement
Let $k$ be a field, let $p\geq1$ be an integer invertible in $k$, and let $\zeta\in k$ have multiplicative order $p$. On each size-bounded small étale site of a qcqs $k$-scheme $V$, including the open restrictions and covers used in the coefficient construction, the map $t_{\zeta,V}:\mathbb Z/p\to\mu_p$, $a\mapsto\zeta^a$, is an isomorphism of sheaves of $\mathbb Z/p$-modules. Its tensor cube gives $t^{(3)}_{\zeta,V}:\mathbb Z/p\to\mu_p^{\otimes3}$, $1\mapsto\zeta^{\otimes3}$. These coefficient isomorphisms commute with pullback along $k$-morphisms in the following precise sense. Here $\mathbb Z/p$ denotes the constant étale ring sheaf and tensor products are over that sheaf.

For cross-site comparisons use compatible small étale sites: the functor $b_f:V_{\rm et}\to W_{\rm et}$, $E\mapsto E\times_V W$, is defined on objects and arrows for every $k$-morphism $f:W\to V$ in use, preserves finite limits and takes covers to covers. One may use the small sites induced by a common size-bounded big étale site containing the schemes, fibre products, open restrictions and covering refinements in use, enlarging the bounds as necessary. All comparisons use the canonical fibre-product identifications for identities and composition. Denote the constant ring sheaf on $V_{\rm et}$ by $R_V$ and the root sheaf by $\mu_{p,V}$, and write $f_{\rm et}^{-1}$ for the inverse image left adjoint to $(f_{{\rm et},*}F)(E/V)=F(E\times_V W/W)$.

There are canonical isomorphisms $\rho_f:f_{\rm et}^{-1}R_V\to R_W$ and $c_f:f_{\rm et}^{-1}\mu_{p,V}\to\mu_{p,W}$. The first is induced by constant sections; the second is adjoint to pullback of regular root sections along $E\times_V W\to E$, followed by sheafification. Through $\rho_f$, inverse image is also pullback of modules over the constant coefficient rings and has its canonical tensor comparison. Let $c_f^{(3)}:f_{\rm et}^{-1}(\mu_{p,V}^{\otimes3})\to\mu_{p,W}^{\otimes3}$ be the tensor cube of $c_f$ under that comparison. Naturality asserts the equalities
$$c_f\circ f_{\rm et}^{-1}t_{\zeta,V}=t_{\zeta,W}\circ\rho_f,\qquad c_f^{(3)}\circ f_{\rm et}^{-1}t^{(3)}_{\zeta,V}=t^{(3)}_{\zeta,W}\circ\rho_f.$$
The comparisons and equalities are compatible with identities and composition of $k$-morphisms.

For the identification with the ambient slice, assume additionally that $p$ is prime and assume the Axiom of Choice. Fix compatible nested Grothendieck universes containing $\omega$, with larger universes for categories and presheaf values; the bounds contain the indicated schemes, fibre products and small étale sites, with compatible choices as above. Put $S=\operatorname{Spec}\mathbb Z[1/p]$, $U=\operatorname{Spec}k$ with its canonical map to $S$, and $\mathcal C=\mathrm{Sch}^{\rm qcqs}_S$ with BEM's big cdh topology, generated by finite Nisnevich covers and finitely presented abstract blowup covers. The family above is then defined on $\mathcal C/U$, the category of qcqs $k$-schemes with the induced topology. No such chosen-root map is asserted on all of $\mathcal C$.

## Facts & Assumptions
[F1] [[def-etale-tate-coefficients]] supplies the coefficient sheaves, the locally represented sections of their sheafifications, the tensor products and unit identifications, and the chosen-root factorization and local inverse. The constant coefficient is the constant étale sheaf; its sections on a disconnected scheme need not equal the single ring $\mathbb Z/p$.

[F2] Qcqs has the absolute scheme meaning of [[math:def-quasi-compact-and-quasi-separated-scheme]]. Scheme morphisms and pullback of regular functions have the meaning of [[math:def-morphism-of-schemes]]. Fibre products exist by [[math:thm-fibre-products-of-schemes-exist]], with the projections, induced arrows and canonical composition identifications characterized by [[math:def-fibre-product-schemes-universal-property]].

[F3] Source reference 0 supplies compatible small étale sites and their base-change morphisms and composition; reference 1 supplies inverse image and its adjunction and finite-limit/finite-colimit preservation. [[def-scheme-sites-and-sheafification]] supplies sheafification, its universal property and local representatives. In particular the underlying set sheaf of $R_V$ is the sheaf coproduct of $p$ copies of the terminal sheaf: sheafify the constant presheaf of $p$ elements. Its ring operations are induced by those of $\mathbb Z/p$.

[F4] For $f:W\to V$, the map from the constant presheaf on $V_{\rm et}$ to $f_{{\rm et},*}R_W$ sends $a$ to the corresponding constant section on $E\times_V W$; it extends by sheafification. Its adjoint is the ring comparison $\rho_f$. Pullback of regular functions similarly gives $P_{p,V}(E)\to\mu_{p,W}(E\times_V W)$, where $P_{p,V}$ is the root presheaf of [F1]; sheafify and take the adjoint to define $c_f$. These maps respect powers and scalars. Reference 2 defines module pullback by $f_R^*M=R_W\otimes_{f_{\rm et}^{-1}R_V}f_{\rm et}^{-1}M$ and gives its adjunction and composition; once $\rho_f$ is an isomorphism this identifies with $f_{\rm et}^{-1}M$. Reference 3 gives the functorial tensor comparison for this pullback. Its maps preserve pure tensors, and the tensor-unit identification is multiplication, as in [F1].

[A1] Only the ambient-slice identification invokes [[lem-author-2ac325480ae8-slice-site]], under its prime-$p$, Choice and compatible-universe hypotheses. The Axiom of Choice is [[math:def-axiom-of-choice]]; universe closure is [[math:def-grothendieck-universe-closure-convention]], and existence of the stated universes is assumed separately from Choice. The coefficient construction in [F1] applies for every positive integer $p$ as stated. Its fixed-site proof and the comparison proof on given compatible sites do not invoke the slice supplier or Choice; existence of the stipulated size bounds and compatible sites is separate data.

## External input
The site constructions and base-change morphisms are imported from [Stacks, §34.4](https://stacks.math.columbia.edu/tag/0214), inverse image from [§59.36](https://stacks.math.columbia.edu/tag/03PZ), module pullback from [§18.13](https://stacks.math.columbia.edu/tag/03D5), and its tensor comparison from [Lemma 18.26.2](https://stacks.math.columbia.edu/tag/03EL). Source references 0–3 state their exact hypotheses and reading limits. The chosen-root naturality square below is a local application of these premises; this item does not claim to reconstruct the imported topos machinery.

## Proof
**Given:** $k,p,\zeta,V$ as stated; compatible small sites for cross-site comparisons; and, for the ambient-slice identification only, the additional assumptions in [A1].

**Goal:** Construct the coefficient isomorphisms with their exact naturality domain and comparison maps.

1.1 For $p=1$, both coefficient module sheaves are zero and the asserted map is their unique isomorphism. Otherwise the factorization $T^p-1=\prod_{a=0}^{p-1}(T-\zeta^a)$ has pairwise unit differences on every $k$-scheme. As proved in [F1], a root on an affine étale object gives a finite disjoint open decomposition on which it equals a unique $\zeta^a$ on every nonempty piece. Local exponent sections glue to an inverse of the constant-sheaf map. Thus $t_{\zeta,V}$ is an isomorphism on every site specified in the statement, including for disconnected or nonreduced $V$. Tensor it and its inverse three times and use the unit identification $R_V^{\otimes3}\cong R_V$ by multiplication. This gives exactly $t^{(3)}_{\zeta,V}$ and its inverse. [F1, F2, given]

2.1 Fix $f:W\to V$. By [F3], inverse image preserves the terminal sheaf and finite coproducts, so applying it to the description of $R_V$ gives the canonical bijection underlying $\rho_f$. Finite-product preservation retains its ring operations, making $\rho_f$ a ring isomorphism, including when $p=1$. The construction in [F4] therefore gives a linear map $c_f$ over this identified ring. By adjunction, the first asserted naturality equality is equivalent to equality of two maps $R_V\to f_{{\rm et},*}\mu_{p,W}$. On a locally constant exponent $a$ represented over an étale object $E$, both maps give the regular section $\zeta^a$ pulled back to $E\times_V W$, since $f$ is a $k$-morphism. Every section of $R_V$ is locally so represented, and the target is a sheaf, so the maps agree. The equality and step 1.1 show that $c_f$ is an isomorphism: $c_f=t_{\zeta,W}\circ\rho_f\circ(f_{\rm et}^{-1}t_{\zeta,V})^{-1}$. Apply [F4]'s functorial tensor comparison twice to define $c_f^{(3)}$. Tensor the first equality three times and use multiplication to identify the three constant factors on each side; compatibility follows on pure tensors and hence by their universal property. This proves the second equality and the invertibility of $c_f^{(3)}$. Pullback of regular functions and of constant sections respects identities and composition; [F2, F3]'s canonical fibre-product and inverse-image composition identifications and the adjunction carry those equalities to $\rho_f$ and $c_f$. The tensor universal property carries them to $c_f^{(3)}$ as well. Thus these are the canonical cross-site comparisons, rather than independently chosen trivializations. Under [A1], the slice supplier identifies precisely these qcqs $k$-schemes and $k$-morphisms with $\mathcal C/U$, with the indicated topology. This supplies the ambient-slice domain under its additional hypotheses; no root over an arbitrary ambient object is used. [F1, F2, F3, F4, A1, step 1.1] ∎
