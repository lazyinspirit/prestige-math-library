---
id: lem-gts-isotrivial-fibre-stability-restriction-from-torsion-invariance
kind: lemma
title: Isotrivial fibre stability restriction from torsion invariance
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
axiom_use: ZF + AC
proof_strategy: direct
deps:
- lem-gts-ordered-elliptic-product-stability-and-diagonal-symmetry
- def-axiom-of-choice
- def-derived-category-of-an-abelian-category
- def-gts-bridgeland-stability-condition-with-support-property
- thm-flatness-of-noetherian-completion
- thm-proper-pushforward-coherent
- lem-gts-finite-etale-stability-lifting-and-hilbert-norm-intertwining
dependency_roles:
  lem-gts-ordered-elliptic-product-stability-and-diagonal-symmetry: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-derived-category-of-an-abelian-category: mathematical-premise
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  thm-flatness-of-noetherian-completion: mathematical-premise
  thm-proper-pushforward-coherent: mathematical-premise
  lem-gts-finite-etale-stability-lifting-and-hilbert-norm-intertwining: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Yiran Cheng, Bridgeland stability conditions on some higher-dimensional
      Calabi–Yau manifolds and generalized Kummer varieties
    url: https://arxiv.org/pdf/2510.22432v1
    locator: Sections2–5; exact missing constructions are supplied below rather than
      imported by citation.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 4
---

## Statement

Assume AC. Let f:V→B be a morphism of smooth projective complex varieties with B abelian and smooth connected fibre $F=f^{-1}(b)$, and suppose a finite étale base change near b makes it a product. If a locally finite support-property Bridgeland condition (P,Z) on Db(V) is actually invariant under tensoring by $f^*L$ for every finite-order flat line L on B, then $P_F(\phi)=\{A:i_*A\in P(\phi)\}$, $Z_{F}=Z$ $i_*$ define such a condition on Db(F), with support lattice the coimage of K(F)→K(V)→Lambda. The entire fibre HN filtration pushes forward to the actual ambient HN filtration. No assertion about every stability condition on every subvariety is assumed.

## Facts & Assumptions

**Given:** The exact objects, actual group actions, covers, kernels and hypotheses in the Statement.

[F1] Assume full [[def-axiom-of-choice]], retaining the AC/DC hypotheses of proper coherent pushforward. Its declared inheritance is through affine localization, Cech comparison and devissage; no additional injective-embedding chain is asserted. Full AC implies DC by choosing successors and iterating.

[F2] [[def-derived-category-of-an-abelian-category]]: The bounded coherent derived localization and its usual shifts and triangles are used.

[F3] [[def-gts-bridgeland-stability-condition-with-support-property]]: The actual slicing, HN, local-finiteness and finite-lattice support conventions are retained.

[F4] [[thm-flatness-of-noetherian-completion]]: Local completion is faithfully flat in the Noetherian setting, so finite coherent kernel cones are detected after completion.

[F5] [[thm-proper-pushforward-coherent]]: Proper coherent cohomology and higher images are coherent and finite over the stated bases.

[F6] [[lem-gts-finite-etale-stability-lifting-and-hilbert-norm-intertwining]]: The actual norm-line/cyclic-cover construction and literal tensor intertwining are used, with no slicing uniqueness assumption.

[F7] [[lem-gts-ordered-elliptic-product-stability-and-diagonal-symmetry]] supplies invariance of the actual ordered product slicing and charge under every Pic⁰ line twist, in particular the factorwise finite-order lines in step 2.1. F6 supplies only the norm and kernel compatibility which transports that invariance. Neither supplier provides block-permutation invariance; the conditional Hilbert application below requires it as a separate input, after the general fibre-restriction theorem has been established.

## Proof

**Given:** The Facts and the explicit conventions of the Statement. All maps and compatibility assertions used below are actual constructions.

1.1 **1. HN factors are set-theoretically on the given fibre.** If $E=i_*A$, then E tensor $f^*L$ is isomorphic to E for every base line L, since $i^*f^*L$ is a one-dimensional constant line. More generally this is true for every fibre-supported complex, since the line bundle becomes trivial on the completed base neighborhood and the completion equivalence is constructed independently in the The actual formal-product category and its central coordinates construction. Sigma-invariance and uniqueness of HN filtrations therefore imply that each HN factor Q is isomorphic to Q tensor $f^*L$ for every finite-order flat L. This is a statement about actual slicing factors, not only their central charges. Such a Q can have support over only FINITELY many points of B. Otherwise a nonzero standard coherent cohomology sheaf T has an irreducible support component Z mapping positively-dimensionally to B. Restrict T to the reduced Z, choose a general projective curve C in Z with nonconstant f|C, normalize C and divide the pulled-back sheaf by its torsion. This gives a vector bundle of rank $r>0$ whose isomorphisms under all $f^*L$ force `((f|C)^*L)^r = O_C` by taking determinants. A nonconstant curve map to an abelian variety has nonzero H1 image: some translation-invariant holomorphic one-form pulls back nontrivially, since those forms span its cotangent spaces, and a nonzero curve holomorphic form has nonzero cohomology class. Choose a finite character of H1(B,Z) with arbitrarily large order on that image. It is realized algebraically by a character eigensheaf of the multiplication-N cover of B. Its restriction to C has order not dividing r, contradiction. Thus every cohomology support image, and hence the union support of Q, is finite. Objects supported on finitely many disjoint fibres split as the direct sum of their fibre-supported pieces. This is an actual derived splitting: take an affine base neighborhood containing those points, localize by functions separating them, and use the finite-support coherent Chinese-remainder decomposition on cohomology. The localization maps give a quasi-isomorphism to the direct sum, so the projection functors are exact. A direct summand of a sigma-semistable object stays semistable of its phase. Project the HN filtration of E to any fibre other than b; it would be a descending-phase HN filtration of zero, which has no nonzero factors. Hence all Q, and all cumulative HN objects, are supported set-theoretically on F. The same argument applies to all real-phase truncations and sigma-heart cohomologies of E: they are extensions of those factors, so stay in $Db_{F}(V)$. [F1, F2, F3, F4, F5, F6, given, construct, algebra]

1.2 **2. The actual formal-product category and its central coordinates.** The fibre-supported derived category identifies with that for $F×P^{r}$ supported on F×{0}, where r=dim B. Here are the finite algebraic details. A finite étale trivializing base change induces an isomorphism on completed base local rings after selecting the point over b, so the formal neighborhood is F×Spf C[[u1,...,ur]]. Local completion is flat. For coherent modules killed by a power of the fibre ideal, finite regular resolutions compute Ext and commute with completion; their Ext modules are themselves killed by a power and unchanged by completion. A finite affine Čech cover of the proper fibre gives the same comparison globally. Thus completion is fully faithful on bounded fibre-supported complexes. Conversely each formal torsion cohomology sheaf is a sheaf on some finite infinitesimal neighborhood, already an algebraic scheme; algebraize the finitely many cohomologies and their Postnikov extension classes using that Ext comparison. This gives essential surjectivity. The formal product and $F×P^{r}$ have the same finite neighborhoods, so their supported categories agree. In this model there is a proper projection $p:F×P^{r}\to F$, with $p_*i_*=id$ on derived categories. The normal formal functions uj are CENTRAL natural endomorphisms of the identity on the fibre-supported category. They act by zero on $i_*A$, not merely on its cohomology. Functorial slicing truncations and ordinary truncations in the sigma heart commute with every central endomorphism: use their adjoint universal property and the centrality of uj to see that applying the truncation to uj(E) is exactly multiplication by uj on the truncation. Thus if uj(E)=0, all its HN pieces, cumulative objects and sigma-cohomology objects have uj=0 as ACTUAL derived morphisms. [F1, F2, F3, F4, F5, F6, given, construct, algebra]

1.3 **3. A precise reduced-fibre image criterion.** Suppose Q in $Db_{F}(F×P^{r})$ has uj(Q)=0 in the derived category for every j. Its derived restriction to the fibre is computed by the finite Koszul complex. At each stage multiplication by the next uj is still zero, because derived tensor is a functor and commutes with that central coordinate. Splitting the successive zero-map triangles gives `i_*Li^*Q = direct_sum_(j=0)^r binom(r,j) Q[j].` No choice of mutually coherent null-homotopies is assumed; this is a succession of actual zero morphisms after applying exact tensor functors. Apply $i_*Rp_*$ to the equality. Since $p_*i_*=id$, its left side is unchanged, and obtain `direct_sum binom(r,j) Q[j] ≃ direct_sum binom(r,j) (i_*Rp_*Q)[j].` This supported category is Krull–Schmidt: Hom is finite dimensional (support on the proper fibre and a finite nilpotent order), and idempotents split in the bounded coherent category of the smooth projective model and its support subcategory. Nonzero bounded objects cannot be isomorphic to a nonzero shift. Comparing the finite indecomposable multiplicities on each shift orbit cancels the polynomial(1+t)^r in $Z[t,t^{-1}]$, which has no zero divisors. Therefore `Q ≃ i_*Rp_*Q.` This proves membership in the actual image of Db(F), not only annihilation of ordinary coherent cohomologies. In particular it applies to every truncation object found in the The actual formal-product category and its central coordinates construction. [F1, F2, F3, F4, F5, F6, given, construct, algebra]

1.4 **4. Constructing the fibre heart before lifting any HN morphisms.** Let $A=P((0,1])$ be the ambient sigma heart, restricted to the fibre-supported category, and put `A0={F0 in Db(F) : i_*F0 belongs to A}.` It is full, additive, extension-closed and closed under summands. The functor $i_*$ is faithful because $Rp_*i_*=id$. Hence $\operatorname{Hom}_{F}(A0,A0[k])=0$ for $k<0$, by the ambient-heart vanishing. For ANY F0 in Db(F), take the finite sigma-cohomology Postnikov filtration of $i_*F0$. Its factors are actual $i_*F_{j}$ by the formal-product and reduced-fibre constructions. Apply the exact functor $Rp_*$ to that filtration; it gives a finite filtration of F0 with factors $F_{j}$ shifted by the corresponding cohomological integers, all $F_{j}$ in A0. These two properties construct a bounded t-structure with heart A0. Explicitly take extension closures of the nonnegative and nonpositive shifts of A0; negative Hom gives orthogonality, and group the ordered finite Postnikov factors at zero to give the required truncation triangle. Extension closure of A0 makes their intersection precisely A0. Thus the heart is established BEFORE any claim that an ambient HN map lifts. Since $i_*$ is exact and sends this heart into A, it is t-exact for these bounded t-structures. For A1,A2 in A0 the natural Hom map is an ISOMORPHISM, not just faithful. The product Koszul computation gives `Hom_V(i_*A1,i_*A2) = direct_sum_(j=0)^r Hom_F(A1,A2[-j]) tensor exterior^j(C^r).` All terms $j>0$ vanish by the heart property just constructed. The remaining $j=0$ is the actual pushforward map. No incorrect assertion that $i_*$ is fully faithful on the entire derived category is made. [F1, F2, F3, F4, F5, F6, given, construct, algebra]

1.5 **5. HN filtrations, support and local finiteness on the fibre.** Take F0 in A0 and the HN filtration of $i_*F0$ in A. All cumulative objects and quotients are in A and, by the support, formal-product and reduced-fibre constructions, in the image of $i_*$. Their preimages therefore lie in A0. the Constructing the fibre heart before lifting any HN morphisms construction Hom isomorphism lifts the filtration maps UNIQUELY. Applying $i_*$ to their cones recovers the original HN quotient triangles, so t-exactness and conservativity make these maps monomorphisms in A0 with the required semistable quotients. Thus every object has an actual finite HN filtration, and its factors push forward to the original ones. Boundedness extends this to the whole derived category. The slicing is exactly the inverse-image slicing in the Statement. Hom vanishing follows from faithfulness; shifts are automatic; nonzero semistable fibre objects have nonzero charge because their pushforwards are nonzero semistable ambient objects. If v is the original finite-rank support lattice, replace it by the image of $v∘i_*$ modulo torsion and use the restricted norm. Semistable pushforwards give the same support bound. A strict chain in a short phase interval pushes to a strict chain in the corresponding finite-length ambient interval; a nonzero quotient stays nonzero by the left inverse $Rp_*$. Hence local finiteness is inherited. This proves the complete claimed stability condition. [F1, F2, F3, F4, F5, F6, given, construct, algebra]

2.1 **6. Conditional use in the named Hilbert applications.** The theorem proved in steps 1.1–1.5 requires an actual ambient condition, not merely a candidate charge. To apply it through a Hilbert–symmetric-group equivalence, first supply a product condition invariant under the whole acting wreath group, including $S_{n}$ block permutations. F7 proves only factorwise and flat-twist invariance and does not by itself supply that input. The following deductions concern any ambient condition obtained after this separate input and the relevant equivariant equivalences have actually been supplied. For Kummer $Y=S^{[n]}$, the sum morphism alpha:Y->S has $\alpha ^*L=N_{n}(L)$ for every finite-order flat L on the abelian surface S. Both flat characters are the product of the individual point-loop characters; algebraicity of the identity follows from the finite Kummer-cover component argument in the companion cover note. The free quotient/product/Hilbert kernel norm identity then turns tensor by $\alpha ^*L$ into tensor by an external product of finite-order elliptic lines before equivariant induction. F7 preserves these tensor functors, and their naturally linearized versions preserve the induced condition once wreath-invariant equivariant induction is available. Forgetting the linearization verifies this last assertion directly. Thus that actual induced Hilbert condition has the torsion invariance required above; no existence of the equivariant induction is inferred from F7 alone. The isotrivial product after[n]:S->S was already constructed by translation. For the bielliptic cover $\pi :X×E\to Y=S^{[n]}$, let a:E->B=Alb(S) be its finite isogeny and f:Y->B the sum-Albanese map. Every finite-order line L on E is $a^*M$ for a finite-order line M on B: extend its finite character from the finite-index sublattice pi1(E) to pi1(B), choosing finite-order roots, and realize that character by an isogeny eigensheaf. The actual finite line-bundle identity follows as before. Thus $pr_{E}^*L=\pi ^*f^*M$. For the corresponding finite-cover condition upstairs, constructed from that actual Hilbert condition by F6, the charge and slicing use $\pi _*$. Projection formula and the norm-line invariance downstairs make it invariant under these factor tensor lines. The projection X×E->E is literally a product. Applying the theorem constructs the desired stability condition on the strict CY factor X. This verifies the family-specific tensor invariance and restriction conditional on the stated separate ambient-existence input. It creates no circular prerequisite: the general fibre theorem in steps 1.1–1.5 uses neither a Hilbert stability condition nor a permutation-invariance theorem. It does not assume or claim that every stability condition on every morphism to an Albanese-finite base has this invariance. [F1, F2, F3, F4, F5, F6, F7, given, construct, algebra] ∎

## Remarks

This is the source-formatted attached construction. Actual reading: Cheng2510.22432v1 targeted Sections2.2–2.3, Section4 and Section5; the strict-cover geometry also consulted Oguiso–Schröer1001.4912v4 Section3. No external citation is used as a missing proof, no arbitrary-dimensional McKay theorem is inferred, and no production acceptance or gate result is asserted by this source.
