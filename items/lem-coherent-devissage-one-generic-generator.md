---
id: lem-coherent-devissage-one-generic-generator
kind: lemma
title: "Noetherian devissage for coherent proper pushforward"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-finite-type-finite-presentation-module-sheaf
  - def-quasi-coherent-module-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - def-support-module-sheaf
  - def-integral-scheme
  - def-noetherian-topological-space
  - def-reduction-of-scheme
  - def-prime-spectrum-and-vanishing-sets
  - def-direct-image-sheaf
  - def-closed-immersion-schemes
  - def-sheaf-on-topological-space
  - lem-noetherian-subspaces-and-compact-opens
  - lem-distinguished-open-refinement-at-a-point
  - lem-radical-commutes-with-localisation
  - lem-associated-sheaf-sections-basic-open
  - thm-affine-quasi-coherent-equivalence
  - thm-sheaf-equalizer-condition
  - thm-localisation-of-modules-is-exact
  - thm-qc-ideal-closed-subscheme-correspondence-complete
  - thm-radical-as-intersection-of-primes
  - lem-closed-immersion-cohomology-pushforward
  - thm-exactness-of-sheaves-stalkwise
  - thm-coherent-sheaves-abelian-noetherian-scheme
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Section 30.12 (Tags 01YD, 01YE, 01YF, 01YG, 01YH)"
      url: https://stacks.math.columbia.edu/tag/01YD
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a Noetherian scheme
([[def-locally-noetherian-and-noetherian-scheme]]) and let $\mathcal P$ be a
property of coherent $\mathcal O_X$-modules
([[def-coherent-module-scheme]]) such that for every short exact sequence of
coherent $\mathcal O_X$-modules $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$,
if two of the three sheaves have property $\mathcal P$ then so does the third.
Assume also that $\mathcal P(0)$ holds.
Suppose that for every integral closed subscheme $Z\subseteq X$
([[def-integral-scheme]]) with generic point $\xi$ there exists a coherent
$\mathcal O_X$-module $\mathcal G$ with support contained in $Z$
([[def-support-module-sheaf]]), whose generic stalk is annihilated by the
maximal ideal $\mathfrak m_\xi\subseteq\mathcal O_{X,\xi}$ and satisfies
$\dim_{\kappa(\xi)}\mathcal G_\xi=1$, and such that $\mathcal P(\mathcal G)$
holds. Then $\mathcal P$ holds for every coherent $\mathcal O_X$-module on $X$.
The empty scheme and the zero sheaf are included: when $X=\varnothing$ the
witness condition is vacuous, and the separate hypothesis $\mathcal P(0)$
supplies the conclusion.

## Facts & Assumptions

**Given:** AC; a Noetherian scheme $X$; a property $\mathcal P$ of coherent modules with $\mathcal P(0)$ and the two-out-of-three property; and, for every integral closed subscheme $Z\subseteq X$ with generic point $\xi$, a coherent $\mathcal G_Z$ supported on $Z$ with $\mathfrak m_\xi\mathcal G_{Z,\xi}=0$, $\dim_{\kappa(\xi)}\mathcal G_{Z,\xi}=1$, and $\mathcal P(\mathcal G_Z)$.

[F1] A Noetherian scheme is quasi-compact and locally Noetherian. Every open subspace is Noetherian and quasi-compact under AC. On an affine chart $V=\operatorname{Spec}A$, a coherent module is $\widetilde M$ for a finite $A$-module $M$, the support is $V(\operatorname{Ann}_A M)$, and an open subset has a finite distinguished-open cover. ([[def-locally-noetherian-and-noetherian-scheme]], [[lem-noetherian-subspaces-and-compact-opens]], [[lem-distinguished-open-refinement-at-a-point]], [[thm-affine-quasi-coherent-equivalence]], [[def-support-module-sheaf]])

[F2] On a locally Noetherian scheme, quasi-coherent modules of finite type are coherent; kernels, images, cokernels, finite direct sums and extensions of coherent modules are coherent. On a Noetherian affine chart, every submodule of a finite module is finite. ([[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-coherent-module-scheme]], [[def-finite-type-finite-presentation-module-sheaf]])

[F3] A closed subset $Z\subseteq X$ has its reduced induced closed subscheme structure: on an affine $V=\operatorname{Spec}A$ write $Z\cap V=V(I)$ and take the radical ideal $\sqrt I$, uniquely determined by the closed set under AC. Radical commutes with localization, so these ideals give a quasi-coherent radical ideal sheaf and the completed correspondence constructs the closed subscheme; its local quotient rings are reduced. If $Z$ is irreducible, this reduced closed subscheme is integral. For an integral closed subscheme $i:Z\hookrightarrow X$ with generic point $\xi$ and ideal $\mathcal J$, $\mathcal O_{Z,\xi}=\kappa(\xi)$ is a field and $\mathcal J_\xi=\mathfrak m_\xi\subseteq\mathcal O_{X,\xi}$. On affine charts a quasi-coherent module $\widetilde M$ annihilated by $\mathcal J$ is an $A/\mathcal J(V)$-module sheaf, hence the pushforward of a quasi-coherent module on $Z$; the pushforward of a coherent module is coherent when $X$ is locally Noetherian. ([[def-prime-spectrum-and-vanishing-sets]], [[thm-radical-as-intersection-of-primes]], [[lem-radical-commutes-with-localisation]], [[def-reduction-of-scheme]], [[def-integral-scheme]], [[def-closed-immersion-schemes]], [[thm-qc-ideal-closed-subscheme-correspondence-complete]], [[lem-closed-immersion-cohomology-pushforward]])

[F4] On an affine scheme, sections of an associated module sheaf on $D(f)$ are the localization $M_f$. A sheaf's sections on a finite open cover are the equalizer of the two restriction maps to pairwise overlaps. Localization is exact and commutes with finite products. These facts also apply to the empty finite cover, whose section module is zero. ([[lem-associated-sheaf-sections-basic-open]], [[thm-sheaf-equalizer-condition]], [[thm-localisation-of-modules-is-exact]], [[def-sheaf-on-topological-space]])

[F5] For a closed immersion $i:Z\hookrightarrow X$, $(i_*\mathcal H)_x=\mathcal H_x$ at $x\in Z$ and is zero off $Z$; hence $i_*$ preserves exact sequences of module sheaves by stalkwise exactness. Its coherent pushforwards are supplied by [F3]. ([[def-direct-image-sheaf]], [[thm-exactness-of-sheaves-stalkwise]], [[lem-closed-immersion-cohomology-pushforward]])

## Proof

**Proof technique:** Noetherian induction on the support of a counterexample. A reduced-ideal filtration handles an irreducible support; on its integral reduced subscheme, two generically isomorphic coherent modules have a common coherent submodule with lower-support kernels and quotients. The latter comparison uses a finite affine equalizer to prove quasi-coherence of the open pushforward.

1.1 Finite-power support calculation. Let $V=\operatorname{Spec}A$ be a Noetherian affine chart, $M$ a finite $A$-module, and $I=(a_1,\ldots,a_t)$ an ideal with $\operatorname{Supp}(\widetilde M)\subseteq V(I)$. By [F1], $V(\operatorname{Ann}M)\subseteq V(I)$, so every $a_j$ lies in $\sqrt{\operatorname{Ann}M}$. Choose $e_j\ge1$ with $a_j^{e_j}M=0$; then every product of $N=1+\sum_j(e_j-1)$ generators of $I$ contains some $a_j^{e_j}$, and $I^NM=0$. The same argument applies on any Noetherian open subspace. A finite affine cover gives one common exponent by taking the maximum of finitely many local exponents. [F1, F2]

1.2 Quasi-coherence of an open pushforward. Let $Z$ be an integral Noetherian scheme, $U\subseteq Z$ a quasi-compact open, $j:U\hookrightarrow Z$, and $\mathcal H$ quasi-coherent on $Z$. For an affine $V=\operatorname{Spec}A\subseteq Z$, write $\mathcal H|_V=\widetilde M$. The open $U\cap V$ has a finite cover by distinguished opens $D(f_1),\ldots,D(f_t)$ of $V$ by [F1]. The sheaf equalizer [F4] gives $\Gamma(U\cap V,\mathcal H)$ as the kernel of $\prod_i M_{f_i}\to\prod_{i,j}M_{f_if_j}$. For $g\in A$, the restricted cover of $U\cap D(g)$ is $D(gf_i)$; exact localization and its commutation with finite products identify the same equalizer after localizing at $g$ with $\Gamma(U\cap D(g),\mathcal H)$. Thus $(j_*\mathcal H|_U)(D(g))=(j_*\mathcal H|_U)(V)_g$ for every $g$, compatibly with further restrictions. The affine criterion in [F1] shows $j_*\mathcal H|_U$ is quasi-coherent on $Z$. This includes $U\cap V=\varnothing$, when both equalizers are zero. [F1, F4]

2.1 Coherent comparison on an integral scheme. Let $Z$ be integral Noetherian with generic point $\xi$, and let $\mathcal H,\mathcal E$ be coherent $\mathcal O_Z$-modules whose generic stalks have the same finite dimension $r>0$ over $\kappa(\xi)$. Choose an affine neighbourhood $W=\operatorname{Spec}A$ of $\xi$; $A$ is a domain and the two modules on $W$ are finite. Choose bases of their generic fibres and lift them after clearing denominators to maps $A^r\to\Gamma(W,\mathcal H)$ and $A^r\to\Gamma(W,\mathcal E)$. Their finite kernels and cokernels vanish after tensoring with the fraction field, so finitely many nonzero denominators annihilate them; on a common nonempty principal open $U=D(f)\subseteq W$, both maps are isomorphisms. Fix the resulting isomorphism $\mathcal E|_U\cong\mathcal H|_U$, and put $Q=j_*(\mathcal H|_U)$ for $j:U\hookrightarrow Z$. By step 1.2, $Q$ is quasi-coherent. The natural maps $\mathcal H\to Q$ and $\mathcal E\to Q$ (the latter through the chosen isomorphism) have coherent kernels $K_H,K_E$ and coherent images $H',E'$: their kernels are quasi-coherent submodules of finite modules on Noetherian charts, and their images are coherent quotients by [F2]. They restrict to isomorphisms on $U$, so $K_H,K_E$ have support in the proper closed subset $Z\setminus U$. Form $T=H'\cap E'$ inside $Q$. The kernel of $H'\oplus E'\to Q$, $(h,e)\mapsto h-e$, is canonically isomorphic to $T$ by either projection, so $T$ is a quasi-coherent submodule of the coherent $H'\oplus E'$, hence coherent by [F2]. Both $H'/T$ and $E'/T$ are coherent and vanish on $U$, so their supports are proper closed subsets of $Z$. [F1, F2, step 1.2]

2.2 Minimal support. Suppose some coherent module lacks $\mathcal P$. Its support is closed by [F1], and the empty support gives the zero module, which has $\mathcal P$ by hypothesis. The Noetherian descending-chain condition therefore selects a counterexample $\mathcal F$ whose nonempty support $Z$ is minimal among counterexample supports. Every coherent module with support strictly contained in $Z$ has $\mathcal P$. If $Z$ is reducible, choose a proper irreducible component $Z_1\subsetneq Z$ with reduced ideal sheaf $\mathcal I_1$ and generic point $\eta_1$. The point $\eta_1$ is minimal in the support of $\mathcal F$; a prime strictly below its prime in an affine neighbourhood would otherwise be a point of the support specializing to $\eta_1$, contradicting that $Z_1$ is a component. Thus the finite module $\mathcal F_{\eta_1}$ is supported only at the maximal ideal of the Noetherian local ring $\mathcal O_{X,\eta_1}$, and the local form of step 1.1 gives $\mathcal I_{1,\eta_1}^{n}\mathcal F_{\eta_1}=0$ for some $n$. The coherent submodule $\mathcal I_1^n\mathcal F$ therefore misses $\eta_1$, so its closed support is a proper subset of $Z$. The coherent quotient $\mathcal F/\mathcal I_1^n\mathcal F$ is supported on $Z_1$, because $\mathcal I_1=\mathcal O_X$ off $Z_1$, and its support is also a proper subset of $Z$. Both have $\mathcal P$ by minimality, and the exact sequence between them gives $\mathcal P(\mathcal F)$ by two-out-of-three, a contradiction. Consequently $Z$ is irreducible. [F1, F2, F3, step 1.1, given]

3.1 Reduction to modules on the integral closed subscheme. Give the irreducible closed set $Z$ its reduced integral closed subscheme structure $i:Z_{\mathrm{red}}\hookrightarrow X$ with coherent ideal $\mathcal J$. By step 1.1, since $\operatorname{Supp}\mathcal F=Z=V(\mathcal J)$, some $N$ satisfies $\mathcal J^N\mathcal F=0$. The finite filtration by $\mathcal J^k\mathcal F$ has coherent successive quotients $\mathcal H_k=\mathcal J^k\mathcal F/\mathcal J^{k+1}\mathcal F$ by [F2]. Each $\mathcal H_k$ is annihilated by $\mathcal J$, hence is $i_*\overline{\mathcal H}_k$ for a coherent module on $Z_{\mathrm{red}}$ by [F3]. If a quotient has zero stalk at the generic point $\xi$ of $Z$, its support is a proper closed subset of $Z$ and it has $\mathcal P$ by minimality. It remains to treat a quotient of generic rank $r>0$. [F1, F2, F3, step 1.1, step 2.2]

3.2 The one-generator witness on the reduced subscheme. Take the witness $\mathcal G_Z$ from the Statement for $Z_{\mathrm{red}}$. Because $\mathcal J_\xi=\mathfrak m_\xi$ and $\mathfrak m_\xi\mathcal G_{Z,\xi}=0$, the coherent submodule $\mathcal J\mathcal G_Z$ has zero stalk at $\xi$, hence support strictly contained in $Z$ and property $\mathcal P$ by minimality. The exact sequence $0\to\mathcal J\mathcal G_Z\to\mathcal G_Z\to\mathcal E:=\mathcal G_Z/\mathcal J\mathcal G_Z\to0$ and the given $\mathcal P(\mathcal G_Z)$ imply $\mathcal P(\mathcal E)$. The coherent $\mathcal E$ is annihilated by $\mathcal J$, so $\mathcal E=i_*\overline{\mathcal E}$ for a coherent module on $Z_{\mathrm{red}}$; its generic stalk is a one-dimensional vector space over $\kappa(\xi)$. Since $\mathcal P(0)$ holds and $\mathcal P$ is stable under extensions, each finite direct sum $\mathcal E^{\oplus r}$ has $\mathcal P$. [F1, F2, F3, given, step 2.2]

4.1 Transfer to each generic-rank-$r$ quotient. Apply step 2.1 on the integral scheme $Z_{\mathrm{red}}$ to $\overline{\mathcal H}_k$ and $\overline{\mathcal E}^{\oplus r}$. Push its coherent kernels, images, common intersection $T$, and quotient sequences forward by the closed immersion $i$; [F5] preserves their exactness and [F3] their coherence. Every pushed-forward kernel and quotient from step 2.1 has support in the proper closed subset $Z\setminus U$, so it has $\mathcal P$ by step 2.2. Starting from $\mathcal P(\mathcal E^{\oplus r})$ of step 3.2, two-out-of-three in succession gives $\mathcal P(i_*E')$, then $\mathcal P(i_*T)$, then $\mathcal P(i_*H')$, and finally $\mathcal P(\mathcal H_k)$. Thus every successive quotient in step 3.1 has $\mathcal P$. [F3, F5, step 2.1, step 2.2, step 3.1, step 3.2]

5.1 Conclusion. Apply the extension direction of two-out-of-three to the finite filtration of step 3.1, beginning with $\mathcal J^N\mathcal F=0$, which has $\mathcal P$ by hypothesis. Step 4.1 gives $\mathcal P$ for each successive quotient, so induction through the filtration gives $\mathcal P(\mathcal F)$, contradicting step 2.2. There is no counterexample. If $X=\varnothing$, its sole coherent module is zero and the explicit $\mathcal P(0)$ hypothesis gives the same conclusion. The use of AC is confined to the finite-cover and associated-sheaf suppliers in [F1]–[F4] and the stipulated witnesses $\mathcal G_Z$; all subsequent choices are finite. [F1, F2, F3, F4, F5, step 2.2, step 4.1] ∎
