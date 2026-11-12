---
id: lem-author-4f716d60801a-restriction-support
kind: lemma
title: Restriction, stalks and cohomological support
status: published
domain: mathematics
deps:
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-scheme
  - math:def-module-on-ringed-space
  - math:def-restriction-sheaf-open-subspace
  - math:def-stalk-of-presheaf
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-kernel-cokernel-image-sheaves
  - math:thm-exactness-of-sheaves-stalkwise
  - math:def-exact-functor-between-abelian-categories
  - math:thm-long-exact-sequence-in-cohomology
dependency_roles:
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-restriction-sheaf-open-subspace: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
  math:def-cohomology-object-of-a-cochain-complex: mathematical-premise
  math:def-kernel-cokernel-image-sheaves: mathematical-premise
  math:thm-exactness-of-sheaves-stalkwise: mathematical-premise
  math:def-exact-functor-between-abelian-categories: mathematical-premise
  math:thm-long-exact-sequence-in-cohomology: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement
Assume the Axiom of Choice and fix suitable Grothendieck universes containing $\omega$ and the scheme data, with larger universes for the categories, as in the derived-enhancement input. The existence of these universes is a standing size assumption. Let $X$ be a scheme, $U\subseteq X$ open with structure sheaf $\mathcal O_U=\mathcal O_X|_U$, and $x\in X$. Write $\mathcal D(X)$ for the derived infinity-category of all Zariski $\mathcal O_X$-module sheaves, and use the analogous notation for $U$ and for modules over the stalk ring $\mathcal O_{X,x}$. Restriction and taking the stalk at $x$ induce exact functors $\mathcal D(X)\to\mathcal D(U)$ and $\mathcal D(X)\to\mathcal D(\mathcal O_{X,x})$. Both commute with cohomology: $H^n(E|_U)\cong H^n(E)|_U$ and $H^n(E_x)\cong H^n(E)_x$, where $E_x$ denotes the derived object represented by the degreewise stalk complex.

For $E\in\mathcal D(X)$ put $\operatorname{Supp}(E)=\bigcup_{n\in\mathbb Z}\{y\in X:H^n(E)_y\ne0\}$, where $H^n$ denotes the cohomology sheaf. This support is invariant under equivalence. For $T\subseteq X$, it is contained in $T$ exactly when the stalk complex at every point outside $T$ is acyclic. If $T$ is closed, this is equivalent to $E|_{X\setminus T}\simeq0$. Support is unchanged by shifts. For any cofiber sequence $E\to F\to G$, one has $\operatorname{Supp}(G)\subseteq\operatorname{Supp}(E)\cup\operatorname{Supp}(F)$. If $E$ is a retract of $F$, meaning there are maps $i:E\to F$ and $r:F\to E$ with $ri=1_E$ in the homotopy category, then $\operatorname{Supp}(E)\subseteq\operatorname{Supp}(F)$.

## Statement references

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:def-scheme]]

[[math:def-module-on-ringed-space]]

[[math:def-restriction-sheaf-open-subspace]]

[[math:def-stalk-of-presheaf]]

[[math:def-cohomology-object-of-a-cochain-complex]]

[[thm-author-4f716d60801a-derived-enhancement-input]]

## Facts & Assumptions
**Given:** $X$, $U$, $x$, $T$ and $E$ as stated, under Choice and the fixed universe assumptions.

**Goal:** Establish exactness and all the cohomology and support assertions.

[A1] Choice is used to invoke the derived enhancement in [F1], in the stated fixed universes; no extra choice is needed by the stalkwise argument. The assumptions are [[math:def-axiom-of-choice]] and [[math:def-grothendieck-universe-closure-convention]].

[F1] [[thm-author-4f716d60801a-derived-enhancement-input]] supplies the derived localizations, their homotopy categories, exact functoriality for exact additive functors, and the cone and shift conventions. Every cofiber sequence is equivalent to a cone sequence, using the cochain-map representatives of derived arrows described there.

[F2] [[math:def-scheme]] specifies $(X,\mathcal O_X)$; [[math:def-module-on-ringed-space]] specifies its module sheaves and their linear morphisms. [[math:def-restriction-sheaf-open-subspace]] identifies restriction on an open subset with the same sections on its open subsets. [[math:def-stalk-of-presheaf]] gives germs on neighbourhoods and equality after shrinking. [[math:def-kernel-cokernel-image-sheaves]] computes kernels, images and cokernels of module sheaves by the underlying sheaf formulas with their induced module structures.

[F3] [[math:thm-exactness-of-sheaves-stalkwise]] supplies exactness detection on every stalk for the underlying abelian sheaves. Apply this also to $0\to\mathcal M\to0$ to detect that a sheaf is zero. The module structures in [F2] do not change whether these underlying sequences are exact.

[F4] [[math:def-cohomology-object-of-a-cochain-complex]] gives $H^n(C)=\ker(d^n)/\operatorname{im}(d^{n-1})$. By [[math:def-exact-functor-between-abelian-categories]], an exact additive functor preserves kernels, images and cokernels, and hence these cohomology objects.

[F5] [[math:thm-long-exact-sequence-in-cohomology]] applies to a short exact sequence of cochain complexes in any abelian category, in particular to the degreewise split sequence $0\to D\to\operatorname{Cone}(f)\to C[1]\to0$ for $f:C\to D$, and to its degreewise stalk sequence.

## Proof
1.1 The open restriction in [F2] is an $\mathcal O_U$-module sheaf, and germs of an $\mathcal O_X$-module form an $\mathcal O_{X,x}$-module: multiply representatives after restricting to a common neighbourhood; changing representatives gives the same germ after further shrinking. Linear sheaf morphisms therefore induce linear germ maps. Both operations are additive. For $y\in U$, the identification $(\mathcal M|_U)_y\cong\mathcal M_y$ follows by intersecting each neighbourhood with $U$; the germ equivalence in [F2] proves both surjectivity and injectivity. By [F2] and [F3], taking a stalk preserves short exact sequences of module sheaves, and the displayed stalk identification shows that restriction also preserves them. For a sheaf map $a:\mathcal M\to\mathcal N$, apply this preservation to $0\to\ker(a)\to\mathcal M\to\operatorname{im}(a)\to0$ and $0\to\operatorname{im}(a)\to\mathcal N\to\operatorname{coker}(a)\to0$: the induced projection onto the image and inclusion of the image identify the kernel, image and cokernel after applying either functor. Thus both functors are exact in the sense of [F4]. They commute with cohomology, so preserve quasi-isomorphisms. Under [A1], [F1] now gives the exact derived functors asserted in the Statement. Their action is the degreewise restriction or stalk operation, yielding both cohomology identifications. Cohomology of complexes sends quasi-isomorphisms to isomorphisms, so descends by localization to the homotopy category in [F1]; equivalent derived objects therefore have isomorphic cohomology sheaves. In particular, their supports agree. [A1, F1, F2, F3, F4, given]

2.1 By step 1.1, $H^n(E_x)\cong H^n(E)_x$, so the definition of support gives the stalkwise acyclicity criterion for every subset $T$. A complex represents zero in the localization exactly when it is acyclic: an acyclic complex is linked to zero by its quasi-isomorphism $0\to C$, and the converse follows from cohomology invariance. For closed $T$, apply step 1.1 and the zero-sheaf criterion in [F3] to the cohomology sheaves on $X\setminus T$. This proves the open-complement equivalence. The shift convention in [F1] gives $H^n(E[k])\cong H^{n+k}(E)$ for each integer $k$, so shifting does not change the union defining support. For a cofiber sequence, [F1] allows a presentation by $f:C\to D$ and its cone $K$. The sequence in [F5] remains short exact on stalks by step 1.1. Its long exact cohomology sequence contains $H^n(D_y)\to H^n(K_y)\to H^{n+1}(C_y)$. Outside the union of the first two supports, both outer terms vanish for every $n$, forcing the middle term to vanish; support invariance transfers this conclusion to the given cofiber sequence. Finally, applying the cohomology and stalk functors to $ri=1_E$ makes $H^n(E)_y$ a retract of $H^n(F)_y$. If the latter is zero, the identity of the former is zero, so the former vanishes. This proves the retract assertion and all remaining claims. [F1, F3, F4, F5, step 1.1, given] ∎
