---
id: lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback
kind: lemma
title: Coherent derived tensor and pullback on perfect complexes
status: published
domain: mathematics
deps:
  - lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison
  - def-scheme-perfect-complexes
  - lem-author-4f716d60801a-lifted-affine-equivalence
  - math:def-axiom-of-choice
  - thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input
  - math:lem-affine-module-sheaf-universal-property
  - math:thm-pullback-pushforward-module-adjunction
  - math:thm-extension-of-scalars-is-left-adjoint-to-restriction
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-projective-module
  - math:thm-projective-modules-are-flat
  - math:thm-morphisms-into-affine-scheme-global-sections
dependency_roles:
  lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  lem-author-4f716d60801a-lifted-affine-equivalence: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input: mathematical-premise
  math:lem-affine-module-sheaf-universal-property: mathematical-premise
  math:thm-pullback-pushforward-module-adjunction: mathematical-premise
  math:thm-extension-of-scalars-is-left-adjoint-to-restriction: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:thm-affine-schemes-quasi-separated: mathematical-premise
  math:def-projective-module: mathematical-premise
  math:thm-projective-modules-are-flat: mathematical-premise
  math:thm-morphisms-into-affine-scheme-global-sections: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
---

## Statement
Assume the Axiom of Choice and fix the universes of the common-family construction. Let $X$ be a quasi-compact quasi-separated (qcqs) scheme. On the common-family realization $\widehat{\operatorname{Perf}}(X)$ of the supplied perfect fiber, derived tensor is a coherent symmetric monoidal product with unit $\mathcal O_X$, exact separately in each variable. Every morphism $f:X\to Y$ between qcqs schemes induces an exact symmetric monoidal pullback $Lf^*:\operatorname{Perf}(Y)\to\operatorname{Perf}(X)$, coherently compatible with composition. For every homomorphism $A\to B$ of commutative unital rings, its affine specialization on bounded finite-projective representatives is derived extension of scalars. No flatness or finite Tor-dimension assumption on $f$ is needed.

## Facts & Assumptions
**Given:** Qcqs schemes $X,Y$ in the fixed universe, any morphism $f:X\to Y$, and AC.

**Goal:** Restrict actual enhanced operations to the supplied perfect subcategories.

[F1] [[lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison]] constructs one coherent scheme/tensor family of K-flat localizations over qcqs schemes and all their morphisms, with its full perfect subfamily and actual exact equivalences to the supplied perfect fibers. All operations in this lemma are those of that common family, without comparison to any independently chosen pullback diagram. Its nested Grothendieck universes are standing size assumptions, separate from AC; its symmetric monoidal and exact functors retain their higher coherences.

[F2] [[def-scheme-perfect-complexes]] specifies local bounded finite locally free representatives and the full stable subcategory, with finite stable operations inherited from the sheaf-derived category. Bounded means zero outside a finite interval of cochain degrees, and finite locally free means locally a finite sum of copies of the structure sheaf.

[F3] [[lem-author-4f716d60801a-lifted-affine-equivalence]] identifies the given enhanced affine perfect category through the actual degreewise associated-sheaf functor, for all commutative unital rings in the chosen universes.

[F4] [[thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input]] defines sheaf tensor, its signed direct-sum cochain total, K-flatness and module pullback. It supplies the stalkwise K-flat test, bounded-above-flat K-flatness, tensor computation on K-flat representatives, and computation of derived pullback by degreewise pullback on K-flat representatives. Its arbitrary-ringed-space scope includes open subspaces and one-point ringed spaces with a commutative ring as structure ring. These are classical computations; the coherent enhanced family is supplied by [F1].

[F5] [[math:lem-affine-module-sheaf-universal-property]] supplies the natural bijection $\operatorname{Hom}_{\mathcal O_{\operatorname{Spec}A}}(\widetilde M,H)\cong\operatorname{Hom}_A(M,\Gamma(\operatorname{Spec}A,H))$ for every $A$-module $M$ and every module sheaf $H$, with no quasi-coherence or finiteness assumption on $H$.

[F6] [[math:thm-pullback-pushforward-module-adjunction]] supplies the natural module-sheaf adjunction $f^*\dashv f_*$ for any morphism of ringed spaces. Here $(f_*H)(V)=H(f^{-1}V)$ with scalar action induced by the structure-sheaf map.

[F7] [[math:thm-extension-of-scalars-is-left-adjoint-to-restriction]] supplies the natural bijection $\operatorname{Hom}_B(B\otimes_A M,N)\cong\operatorname{Hom}_A(M,\operatorname{Res}^B_A N)$ for a unital map of commutative rings. The restricted action is $a n=u(a)n$ for the ring map $u:A\to B$, and extension of scalars is the $B$-module $B\otimes_A M$.

[F8] [[math:def-quasi-compact-and-quasi-separated-scheme]] defines qcqs. Under our AC assumption, [[math:cor-affine-scheme-quasi-compact]] and [[math:thm-affine-schemes-quasi-separated]] place every affine scheme in that scope.

[F9] [[math:def-projective-module]] defines projectivity by lifting through surjective module maps. A finite projective module is such a module with a finite generating family. [[math:thm-projective-modules-are-flat]] gives its flatness. We also apply these to the finite free stalk modules in local presentations.

[F10] [[math:thm-morphisms-into-affine-scheme-global-sections]] associates to a ring map $u:A\to B$ its morphism $f:\operatorname{Spec}B\to\operatorname{Spec}A$, inducing $u$ on global functions under the canonical identifications. Consequently the $A$-action on $\Gamma(\operatorname{Spec}B,H)$ coming from $f_*H$ is restriction along $u$.

[A1] [[math:def-axiom-of-choice]] is assumed for the common-family construction in [F1], the enhanced affine comparison in [F3], and affine quasi-compactness in [F8]. The finite local computations below use those supplied constructions.

## Proof
1.1 Locally represent $E$ and $F$ by bounded finite locally free complexes as in [F2]. Each stalk complex is bounded with finite free terms. A finite free module is projective by lifting the images of its finitely many basis vectors through a surjection, and hence is flat by [F9]. Apply the bounded-above-flat assertion of [F4] to the one-point ringed space at each stalk, then its stalkwise criterion on the neighbourhood: these local representatives are K-flat. Thus [F4] computes derived tensor by their ordinary signed total tensor. This is again bounded finite locally free: after shrinking to trivialize the finitely many terms, the tensor of ranks $r,s$ has basis $e_i\otimes e_j$ of rank $rs$, and each total degree is a finite sum of these modules. The unit $\mathcal O_X[0]$ is perfect. The full perfect subfamily in [F1] already retains the tensor coherences; the computation identifies the local perfect condition of [F2]. [F1, F2, F4, F9, A1]

1.2 Fix a ring map $u:A\to B$, put $U=\operatorname{Spec}A$, $V=\operatorname{Spec}B$, and let $f:V\to U$ be its morphism from [F10]. For any $A$-module $M$ and any $\mathcal O_V$-module sheaf $H$, the adjunctions [F5]–[F7], with the scalar action checked in [F10], give natural bijections $\operatorname{Hom}_{\mathcal O_V}(f^*\widetilde M,H)\cong\operatorname{Hom}_{\mathcal O_U}(\widetilde M,f_*H)\cong\operatorname{Hom}_A(M,\operatorname{Res}^B_A\Gamma(V,H))\cong\operatorname{Hom}_B(B\otimes_A M,\Gamma(V,H))\cong\operatorname{Hom}_{\mathcal O_V}(\widetilde{B\otimes_A M},H)$. Evaluating these mutually inverse natural bijections at the two identity morphisms gives maps between $f^*\widetilde M$ and $\widetilde{B\otimes_A M}$; naturality shows that their composites are the identities. This proves a canonical isomorphism $f^*\widetilde M\cong\widetilde{B\otimes_A M}$, natural in $M$. It therefore commutes with every differential when applied degreewise to a complex; this is a natural chain isomorphism, not literal identity of the two constructions. [F5, F6, F7, F10, construct]

2.1 Tensoring K-flat representatives commutes with the signed mapping-cone matrices and takes zero to zero. Thus it preserves the ambient cone cofiber sequences, consistently with the enhanced exactness supplied by [F1]. Since the finite stable operations in [F2] are inherited from the ambient category, exactness in each variable restricts to the full perfect subcategory. [F1, F2, F4, step 1.1]

3.1 Given $E\in\operatorname{Perf}(Y)$ and $x\in X$, choose around $f(x)$ a bounded finite locally free presentation, and restrict to its inverse-image neighbourhood of $x$. The stalkwise K-flat criterion also shows that restriction of a K-flat complex to an open remains K-flat, so [F4] computes the derived pullback there by ordinary degreewise pullback of that presentation. Pullback preserves finite sums by the adjunction [F6]; its formula in [F4] gives $f^*\mathcal O_Y\cong\mathcal O_X$ by $a\otimes b\mapsto ab$ with inverse $a\mapsto a\otimes1$. Applied on local free charts, this gives $f^*\mathcal O_Y^r\cong\mathcal O_X^r$. The pulled-back complex is therefore bounded finite locally free and $Lf^*$ preserves perfect objects. Exactness and the strong monoidal and compositional coherences are those of the single localized family in [F1]. [F1, F2, F4, F6, step 1.1, step 2.1]

4.1 Let $P$ be a bounded finite-projective $A$-complex. Its terms are flat by [F9], so the one-point case of [F4] shows that $P$ is K-flat and $B\otimes_A P$ computes $B\otimes_A^{\mathbf L}P$. Each term $P^n$ is a summand of a finite free module: a finite generating family gives a surjection $A^r\to P^n$, and the projective lifting property supplies a section. Tensoring these inclusion and projection maps with $B$ retains their identity composite, making $B\otimes_A P^n$ a finitely generated summand of $B^r$. Such a summand is projective by extending a lifting problem to $B^r$, lifting its finite basis, and restricting to the summand. Thus $B\otimes_A P$ is a bounded finite-projective $B$-complex. By [F3], $\widetilde P$ represents a perfect object. The split finite-free presentations above remain split under associated sheaf, and [F5] identifies $\widetilde{A^r}$ with $\mathcal O_U^r$. Every stalk of $\widetilde P$ is therefore bounded with projective, hence flat, terms; the bounded-above and stalk criteria of [F4] make $\widetilde P$ K-flat. Step 1.2 identifies its actual degreewise sheaf pullback canonically with $\widetilde{B\otimes_A P}$. This natural chain isomorphism descends to the localizations of [F1] and [F3], and hence gives precisely the asserted affine specialization under their actual fiber comparisons. Both affine schemes are qcqs by [F8]. The construction works for every $u$ and every $f$ of the Statement, with no flatness or finite Tor-dimension restriction on the morphism. [F1, F3, F4, F5, F8, F9, A1, step 1.1, step 3.1, step 1.2] ∎
