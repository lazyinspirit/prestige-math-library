---
id: lem-author-7ef3227685d9-supported-k0-ideal-filtration
kind: lemma
title: Finite ideal-power filtrations and coherent sheaves on the closed subscheme
status: published
domain: mathematics
deps:
  - thm-author-7ef3227685d9-supported-k0-regular-cohomology-input
  - math:def-axiom-of-choice
  - math:def-closed-immersion-schemes
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-noetherian-ring-and-module
  - math:def-regular-local-ring-geometric-point
  - math:def-coherent-module-scheme
  - math:def-support-module-sheaf
  - math:def-quasi-coherent-module-scheme
  - math:def-finite-type-finite-presentation-module-sheaf
  - math:thm-affine-closed-immersions-quotient-rings
  - math:thm-affine-quasi-coherent-equivalence
  - math:lem-associated-sheaf-stalk-localization
  - math:lem-associated-sheaf-sections-basic-open
  - math:def-localisation-of-a-module
  - math:thm-coherent-sheaves-abelian-noetherian-scheme
  - math:thm-noetherian-ring-quotients-and-localisations
  - math:thm-exactness-of-sheaves-stalkwise
  - math:thm-gluing-sheaves
  - math:def-abelian-category
  - math:def-affine-scheme-spectrum
  - math:thm-stalk-structure-sheaf-prime-localization
  - math:thm-sections-basic-open-affine-scheme
dependency_roles:
  thm-author-7ef3227685d9-supported-k0-regular-cohomology-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-noetherian-ring-and-module: mathematical-premise
  math:def-regular-local-ring-geometric-point: mathematical-premise
  math:def-coherent-module-scheme: mathematical-premise
  math:def-support-module-sheaf: mathematical-premise
  math:def-quasi-coherent-module-scheme: mathematical-premise
  math:def-finite-type-finite-presentation-module-sheaf: mathematical-premise
  math:thm-affine-closed-immersions-quotient-rings: mathematical-premise
  math:thm-affine-quasi-coherent-equivalence: mathematical-premise
  math:lem-associated-sheaf-stalk-localization: mathematical-premise
  math:lem-associated-sheaf-sections-basic-open: mathematical-premise
  math:def-localisation-of-a-module: mathematical-premise
  math:thm-coherent-sheaves-abelian-noetherian-scheme: mathematical-premise
  math:thm-noetherian-ring-quotients-and-localisations: mathematical-premise
  math:thm-exactness-of-sheaves-stalkwise: mathematical-premise
  math:thm-gluing-sheaves: mathematical-premise
  math:def-abelian-category: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:thm-stalk-structure-sheaf-prime-localization: mathematical-premise
  math:thm-sections-basic-open-affine-scheme: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Characterizing modules of finite type and finite
        presentation
      url: https://stacks.math.columbia.edu/tag/01PB
      locator: Lemma 28.17.1 (Tag 01PB), complete statement and proof; formerly
        numbered 28.16.1
      statement: For a commutative ring A and an A-module P, the associated sheaf on
        Spec(A) is of finite type exactly when P is finitely generated over A.
      hypotheses: A is a commutative ring with identity; P is any A-module; the sheaf
        is the quasi-coherent associated sheaf on the affine scheme Spec(A). No
        Noetherian hypothesis is required. Finite type means locally generated
        by finitely many sections, the equivalent local form supplied by
        math:def-finite-type-finite-presentation-module-sheaf under the standing
        Axiom of Choice.
      reading_limits: Read the complete statement and proof on the Tag 01PB HTML page
        for this repair. The proof reduces through a finite distinguished-open
        cover to Algebra Lemma 10.23.2; that cited algebra result and the
        foundational associated-sheaf constructions are imported, not
        independently reconstructed here. The application is only the
        finite-type test on the chosen affine charts of U and their Noetherian
        affine quotients. The zero ring has only the zero unital module and the
        empty associated sheaf, so its degenerate case is checked directly.
proof_strategy: direct
dependency_level: 8
formulation_deps:
  - thm-author-7ef3227685d9-supported-k0-regular-cohomology-input
  - math:def-axiom-of-choice
  - math:def-closed-immersion-schemes
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-regular-local-ring-geometric-point
  - math:def-coherent-module-scheme
  - math:def-support-module-sheaf
  - math:thm-affine-quasi-coherent-equivalence
  - math:thm-gluing-sheaves
  - math:def-abelian-category
argument_deps:
  - thm-author-7ef3227685d9-supported-k0-regular-cohomology-input
  - math:def-axiom-of-choice
  - math:def-closed-immersion-schemes
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-noetherian-ring-and-module
  - math:def-regular-local-ring-geometric-point
  - math:def-coherent-module-scheme
  - math:def-support-module-sheaf
  - math:def-quasi-coherent-module-scheme
  - math:def-finite-type-finite-presentation-module-sheaf
  - math:thm-affine-closed-immersions-quotient-rings
  - math:thm-affine-quasi-coherent-equivalence
  - math:lem-associated-sheaf-stalk-localization
  - math:lem-associated-sheaf-sections-basic-open
  - math:def-localisation-of-a-module
  - math:thm-coherent-sheaves-abelian-noetherian-scheme
  - math:thm-noetherian-ring-quotients-and-localisations
  - math:thm-exactness-of-sheaves-stalkwise
  - math:thm-gluing-sheaves
  - math:def-abelian-category
  - math:def-affine-scheme-spectrum
  - math:thm-stalk-structure-sheaf-prime-localization
  - math:thm-sections-basic-open-affine-scheme
---

## Statement
Assume the Axiom of Choice. Let $i:T\hookrightarrow U$ be any closed subscheme of the regular Noetherian finite-dimensional scheme $U$, with coherent defining ideal $\mathcal I=\ker(\mathcal O_U\to i_*\mathcal O_T)$. Write $\mathrm{Coh}(X)$ for the category of coherent $\mathcal O_X$-modules and all their module-sheaf morphisms. Let $\mathcal A_T$ be its full subcategory for $X=U$ on modules $M$ with $\operatorname{Supp}(M)\subseteq |T|$, and let $\mathcal B_T$ be the full subcategory of $\mathcal A_T$ on modules annihilated by $\mathcal I$. For every $M\in\mathcal A_T$, some integer $N\geq1$ satisfies $\mathcal I^NM=0$. Here $\mathcal I^rM$ is the subsheaf locally generated by products of $r$ sections of $\mathcal I$ acting on sections of $M$, with $\mathcal I^0M=M$. The finite filtration
$$M\supseteq\mathcal IM\supseteq\cdots\supseteq\mathcal I^NM=0$$
has coherent quotients annihilated by $\mathcal I$. Closed direct image identifies $\mathrm{Coh}(T)$ exactly with the full abelian subcategory $\mathcal B_T\subseteq\mathcal A_T$. This inclusion is exact and closed under subobjects and quotients, although it need not be closed under extensions in $\mathcal A_T$. The empty schemes and the zero module are included.

## Facts & Assumptions
**Given:** $U,T,i,\mathcal I$ and $M$ as stated, and the Axiom of Choice. Regular means that every point is regular in the local-ring sense; finite-dimensional means that lengths of strict chains of nonempty irreducible closed subsets are bounded. Neither extra restriction on $U$ is needed in the ordinary coherent-sheaf argument below. No regularity of $T$ is assumed.

**Goal:** Verify the exact hypotheses for abelian dévissage using an actual finite filtration.

[A1] The Axiom of Choice is [[math:def-axiom-of-choice]]. It is inherited through the selected affine quotient, associated-sheaf and coherent finite-type interfaces in [F3]–[F4]. The exponent calculation and finite selections use no additional choice; no enhanced perfect-category or nonconnective model is used.

[F1] The unconditional coherent-sheaf clause of [[thm-author-7ef3227685d9-supported-k0-regular-cohomology-input]] gives the coherent abelian category on $U$, with kernels, images and cokernels computed as module sheaves. Abelian is used in the sense of [[math:def-abelian-category]], and exact means preservation of short exact sequences computed in module sheaves. Exactness of stalks in [F5] then makes $\mathcal A_T$ an abelian full subcategory: kernels and cokernels of maps between supported objects remain supported, as do the zero object and finite direct sums; the coimage-to-image isomorphisms are inherited from $\mathrm{Coh}(U)$. Short exact sequences between such objects also have supported middle term whenever that term is coherent.

[F2] [[math:def-closed-immersion-schemes]] defines a closed immersion by a homeomorphism onto a closed subset and a surjection of structure sheaves. [[math:def-locally-noetherian-and-noetherian-scheme]] supplies a finite affine cover by spectra of Noetherian rings; [[math:def-noetherian-ring-and-module]] says that every ideal of a Noetherian ring is finitely generated. Regular points are defined in [[math:def-regular-local-ring-geometric-point]]. Coherent modules are those of [[math:def-coherent-module-scheme]], and [[math:def-support-module-sheaf]] defines support by the nonzero stalks. These conventions specify the categories in the Statement. Direct image is explicitly $(i_*F)(V)=F(i^{-1}V)$, with the $\mathcal O_U$-action induced by the structure-sheaf map.

[F3] The spectrum and basic opens are those of [[math:def-affine-scheme-spectrum]]: its points are primes and $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$; put $V(J)=\{\mathfrak p:J\subseteq\mathfrak p\}$. [[math:thm-affine-closed-immersions-quotient-rings]] identifies the restriction of $i$ over $\operatorname{Spec}A$ with $\operatorname{Spec}(A/J)\hookrightarrow\operatorname{Spec}A$, for its defining ideal $J$, with underlying closed set $V(J)$. By [[math:thm-sections-basic-open-affine-scheme]], on $D(f)$ the direct image of the quotient structure sheaf has sections $(A/J)_{\bar f}$, so its kernel ideal sheaf is $\widetilde J$. [[math:thm-affine-quasi-coherent-equivalence]] identifies modules and quasi-coherent sheaves, including their morphisms; quasi-coherence means the local associated-module condition of [[math:def-quasi-coherent-module-scheme]]. Under this equivalence [[math:lem-associated-sheaf-stalk-localization]] identifies stalks with $P_{\mathfrak p}$ and [[math:lem-associated-sheaf-sections-basic-open]] identifies sections on $D(f)$ with $P_f$, compatibly with restrictions. By [[math:def-localisation-of-a-module]], $p/1=0$ in $P_f$ precisely when some nonnegative power of $f$ annihilates $p$.

[F4] [[math:thm-coherent-sheaves-abelian-noetherian-scheme]] gives coherent if and only if quasi-coherent of finite type on a locally Noetherian scheme, and closure under kernels, images, cokernels and finite direct sums. Use the equivalent local finite-section form of finite type in [[math:def-finite-type-finite-presentation-module-sheaf]]. The affine finite-type test imported in External input identifies this condition for $\widetilde P$ with finite generation of $P$ over the affine coordinate ring. Combining that test with the coherent-if-and-only-if-finite-type assertion above and the affine equivalence in [F3], on each Noetherian affine chart coherent sheaves correspond exactly to finite modules. This deduction uses the declared statements and the explicit imported test. [[math:thm-noetherian-ring-quotients-and-localisations]] ensures that $A/J$ is again Noetherian, including when it is the zero ring.

[F5] [[math:thm-exactness-of-sheaves-stalkwise]] tests exactness on stalks; a module sheaf with all stalks zero is zero (a section with zero germs vanishes on a neighbourhood cover and hence vanishes). [[math:thm-gluing-sheaves]] glues compatible local module sheaves. Their morphisms glue uniquely by the sheaf axiom, by gluing their values on local sections. For a closed inclusion, neighbourhoods induced from the ambient space are cofinal among neighbourhoods in the closed subspace, so $i_*F$ has stalk $F_x$ at $x\in T$ and zero stalk off $T$. For the affine example below, [[math:thm-stalk-structure-sheaf-prime-localization]] identifies the local ring of $\operatorname{Spec}R$ at $\mathfrak p$ with $R_{\mathfrak p}$.

## External input
The affine finite-type test is imported from [The Stacks Project, Lemma 28.17.1, Tag 01PB](https://stacks.math.columbia.edu/tag/01PB): for a commutative ring $A$ with identity and any $A$-module $P$, the associated quasi-coherent sheaf $\widetilde P$ on $\operatorname{Spec}A$ has finite type if and only if $P$ is finitely generated over $A$. No Noetherian hypothesis is needed for this test. Finite type is used in the local finite-section sense of [F4]. The statement and its published argument are literature-derived external input; the filtration and closed-immersion application in the Proof are locally authored deductions.

For this repair the complete statement and proof of Tag 01PB were read. Its proof uses a finite distinguished-open cover and Algebra Lemma 10.23.2; those underlying results are imported, without a claimed reconstruction here. Apply the test in [F4] to the affine modules representing coherent restrictions of $M$ and to modules over $A/J$ in step 2.1. On the Noetherian rings $A$ and $A/J$, [F4]'s coherent finite-type equivalence applies. If a ring is zero, its only unital module is zero and its spectrum is empty, so the same finite-type equivalence holds directly.

## Proof
1.1 If $U=\varnothing$, then $M=0$ and take $N=1$. Otherwise choose a finite affine cover of $U$ by spectra of Noetherian rings. On a member $\operatorname{Spec}A$, write $M=\widetilde P$ with $P$ finite and $\mathcal I=\widetilde J$ for a finite ideal $J=(f_1,\ldots,f_r)$, using the affine equivalence and its compatibility with kernels. For every $f_j$, the sheaf $M$ has zero stalks on $D(f_j)$ because its support is in $V(J)$; hence it is zero there, and $P_{f_j}=0$. For a finite generating list $p_1,\ldots,p_s$ of $P$, the fraction criterion gives powers of $f_j$ killing each $p_a$. Their maximum, enlarged to at least $1$, gives $n_j\geq1$ with $f_j^{n_j}P=0$; if $P=0$, take $n_j=1$. Every monomial of degree $N_A=1+\sum_j(n_j-1)$ in the $f_j$ contains one such power, so $J^{N_A}P=0$. If $J=0$, take $N_A=1$. The maximum of $1$ and the finitely many $N_A$ gives a global $N$: higher ideal powers lie in lower ones, and a sheaf is zero if its restrictions on a cover are zero. [A1, F1, F2, F3, F4, F5, given, choose, algebra]

2.1 For each $q\geq0$, on each chosen affine the finitely many monomials of degree $q$ in generators of $J$ generate $J^q$, so $\mathcal I^qM$ is locally the image of a map from a finite direct sum of copies of $M$ to $M$. It and $\mathcal I^qM/\mathcal I^{q+1}M$ are therefore coherent, supported on $|T|$, and the quotient is annihilated by $\mathcal I$. Step 1.1 gives the finite filtration. For the category assertion, the stalk calculation in [F5] proves that $i_*$ is exact. On an affine quotient $\operatorname{Spec}(A/J)\hookrightarrow\operatorname{Spec}A$, an $A$-module $P$ killed by $J$ has the unique action $(a+J)p=ap$, and maps between such modules are $A$-linear exactly when they are $A/J$-linear. A finite generating list over either ring generates over the other. By [F3]–[F4], this identifies the coherent sheaves on the quotient with the coherent sheaves on the affine target annihilated by $J$: direct image has sections $P_{\bar f}=P_f$ on $D(f)$, where $\bar f$ is the image in $A/J$. These local identifications restrict compatibly; on overlaps refine by affine target opens, where the quotient action and every factored morphism are unique. They consequently satisfy the cocycle identities and glue by [F5]. Thus $i_*$ is fully faithful with image exactly $\mathcal B_T$. Kernels, cokernels and finite sums of modules killed by $\mathcal I$ are killed by $\mathcal I$, proving abelianity and exact inclusion; coherent subobjects and quotients have the same property. To verify that extension closure can fail within the stated geometric scope, take the ring $R$ of rational functions $a(t)/b(t)$ with $a,b\in\mathbb Q[t]$ and $b(0)\ne0$. Every nonzero element is $t^n$ times a unit, with $n\geq0$. The least such order in any nonzero ideal generates it, so $R$ is Noetherian, with only primes $(0)$ and $(t)$. By the affine structure-stalk identification in [F5], its local rings are its fraction field and $R$. Evaluation at $t=0$ identifies $R/(t)$ with $\mathbb Q$, and multiplication by $t$ identifies $R/(t)$ with $(t)/(t^2)$ by cancellation. Thus $R$ has dimension one and cotangent dimension one, while its fraction field has both dimensions zero. Hence $U=\operatorname{Spec}R$ is regular Noetherian of dimension one. For $T=\operatorname{Spec}(R/(t))$, the exact sequence $0\to(t)/(t^2)\to R/(t^2)\to R/(t)\to0$ gives coherent sheaves supported on $T$. Both end terms are killed by $(t)$, whereas the middle term is not, since $t\notin(t^2)$. This proves the asserted possible failure of extension closure. [A1, F1, F2, F3, F4, F5, step 1.1, construct, algebra] ∎
