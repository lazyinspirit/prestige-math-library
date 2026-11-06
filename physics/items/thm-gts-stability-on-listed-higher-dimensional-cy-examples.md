---
id: thm-gts-stability-on-listed-higher-dimensional-cy-examples
kind: theorem
title: Stability on listed higher-dimensional CY examples
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: mathematics
library: physics
axiom_use: ZF + AC
category: string-theory
deps:
- def-axiom-of-choice
- def-derived-category-of-an-abelian-category
- def-gts-bridgeland-stability-condition-with-support-property
- def-gts-compact-calabiyau-manifold-conventions
- def-gts-strict-calabi-yau-manifold-conventions
- lem-gts-ordered-elliptic-product-stability-and-diagonal-symmetry
- lem-gts-special-product-charge-uniqueness-and-block-permutation-invariance
- thm-gts-all-n-surface-hilbert-symmetric-group-kernel-equivalence
- lem-gts-finite-group-induction-of-invariant-stability
- lem-gts-cynk-hulek-local-clusters-and-equivariant-derived-induction
- lem-gts-finite-etale-stability-lifting-and-hilbert-norm-intertwining
- lem-gts-named-enriques-bielliptic-hilbert-strict-covers
- lem-gts-isotrivial-fibre-stability-restriction-from-torsion-invariance
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-derived-category-of-an-abelian-category: mathematical-premise
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-strict-calabi-yau-manifold-conventions: mathematical-premise
  lem-gts-ordered-elliptic-product-stability-and-diagonal-symmetry: mathematical-premise
  lem-gts-special-product-charge-uniqueness-and-block-permutation-invariance: mathematical-premise
  thm-gts-all-n-surface-hilbert-symmetric-group-kernel-equivalence: mathematical-premise
  lem-gts-finite-group-induction-of-invariant-stability: mathematical-premise
  lem-gts-cynk-hulek-local-clusters-and-equivariant-derived-induction: mathematical-premise
  lem-gts-finite-etale-stability-lifting-and-hilbert-norm-intertwining: mathematical-premise
  lem-gts-named-enriques-bielliptic-hilbert-strict-covers: mathematical-premise
  lem-gts-isotrivial-fibre-stability-restriction-from-torsion-invariance: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Yiran Cheng, Bridgeland stability conditions on some higher-dimensional Calabi-Yau manifolds and generalized
      Kummer varieties
    url: https://arxiv.org/pdf/2510.22432v1
    locator: §1.1, Theorems1.1,1.3–1.5 (PDF pp.2–3), and complete§5.1–5.5 (pp.25–34), with §§2.2–2.3 and4 read for
      the exact categorical/restriction context; local suppliers replace the source forthcoming uniqueness result.
  - title: Keiji Oguiso and Stefan Schröer, Enriques manifolds
    url: https://arxiv.org/pdf/1001.4912v4
    locator: Complete §3 (PDF pp.8–11), Theorem3.1,Lemma3.2,Lemma3.3,Proposition3.4 andTheorem3.5 with proofs; Theorem3.5
      uses an elliptic cover of Alb(S), not a fixed original automorphism factor. The local strictness proof does
      not import Bogomolov decomposition.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Under the source characteristic-zero, finite-group, cover, Hilbert-scheme, and crepant-resolution hypotheses, Bridgeland stability conditions exist on these families: (i) $K_n(S)=\alpha_n^{-1}(0)$, where $\alpha_n:S^{[n]}\to S$ is the Albanese map and $S=(C_1\times C_2)/G$ is an abelian surface isogenous to a product of elliptic curves with $G$ finite and acting freely; (ii) the source Enriques surfaces obtained from elliptic curves $C_1,C_2$, the actions $(x,y)\mapsto(-x,-y)$ and $(x,y)\mapsto(-x+t_1,y+t_2)$ for 2-torsion $t_i$, and the strict Calabi–Yau universal covers of $S^{[n]}$ for $n\ge2$; (iii) the source bielliptic surfaces $S=(C_1\times C_2)/G$, with $G$ acting by translations on $C_1$ and automorphisms on $C_2$, and the strict Calabi–Yau factor $X$ in the source finite étale cover $\widetilde{S^{[n]}}\cong X\times E$ for $n\ge2$, where $E$ is an elliptic finite étale cover of $\operatorname{Alb}(S)$ (isogenous to the translation factor $C_1$); and (iv) the source Cynk–Hulek crepant resolutions of $(C_1\times\cdots\times C_n)/G_n$, where $G_n=\{(a_i)\in(\mathbb Z/m)^n:\sum_i a_i=0\}$, $m=2$ or $3$, and the source order-$m$ automorphism acts on each elliptic-curve factor. Here $[n]$ denotes the Hilbert scheme of length-$n$ zero-dimensional subschemes, and “strict Calabi–Yau” uses the separate Hodge-vanishing definition on this page. “Stability conditions” means locally finite Bridgeland conditions with the source support-property convention on the indicated bounded derived categories. No claim is made for unlisted higher-dimensional varieties.


## Statement references

[[def-axiom-of-choice]]

[[def-derived-category-of-an-abelian-category]]

[[def-gts-bridgeland-stability-condition-with-support-property]]

[[def-gts-compact-calabiyau-manifold-conventions]]

[[def-gts-strict-calabi-yau-manifold-conventions]]

[[lem-gts-ordered-elliptic-product-stability-and-diagonal-symmetry]]

[[lem-gts-special-product-charge-uniqueness-and-block-permutation-invariance]]

[[thm-gts-all-n-surface-hilbert-symmetric-group-kernel-equivalence]]

[[lem-gts-finite-group-induction-of-invariant-stability]]

[[lem-gts-cynk-hulek-local-clusters-and-equivariant-derived-induction]]

[[lem-gts-finite-etale-stability-lifting-and-hilbert-norm-intertwining]]

[[lem-gts-named-enriques-bielliptic-hilbert-strict-covers]]

[[lem-gts-isotrivial-fibre-stability-restriction-from-torsion-invariance]]

## Facts & Assumptions

**Given:** The source complex characteristic-zero, actual finite actions, free quotient or specified crepant resolution, Hilbert-scheme and finite-cover hypotheses for ALL four named families. The elliptic-factor correction in (iii) retains all bielliptic inputs.

[F1] The foundational setting includes [[def-axiom-of-choice]] (every set-indexed family of nonempty sets has a choice function), inherited from the explicitly AC-conditional suppliers below; this is not an added restriction on the named geometric families. Its exact use enters F2 through the ordered-product proof step 8.1, which chooses complements to cycles/boundaries of an algebraic Cech dg model, and through the functorial injective-resolution interfaces of F3–F6. No claim of minimal choice strength is made. [[def-derived-category-of-an-abelian-category]], [[def-gts-bridgeland-stability-condition-with-support-property]], [[def-gts-compact-calabiyau-manifold-conventions]] and [[def-gts-strict-calabi-yau-manifold-conventions]] give the bounded derived, local-finiteness/support and canonical/Hodge conventions. A strict CY factor is distinguished from a generalized Kummer variety.

[F2] [[lem-gts-ordered-elliptic-product-stability-and-diagonal-symmetry]] constructs actual rational support-property conditions on every ordered elliptic product, with charge $-\int e^{-iH}\mathrm{ch}$, stable points of phase one, factor automorphism invariance and actual Pic0 tensor invariance. [[lem-gts-special-product-charge-uniqueness-and-block-permutation-invariance]] proves the required equality of differently ordered hearts/slicings, hence actual block-permutation invariance and finite equivariant support lattices. This is not inferred merely from a symmetric central charge.

[F3] [[thm-gts-all-n-surface-hilbert-symmetric-group-kernel-equivalence]] gives the actual all-n isospectral-kernel equivalence $D^b(S^{[n]})\simeq D^b_{S_n}(S^n)$ for ANY smooth projective complex surface, with automorphism/exterior-product/wreath compatibility and coherent norm-line intertwining. Its n!-flatness and kernel proof are supplied locally; neither a symplectic hypothesis on the Enriques/bielliptic surface nor an arbitrary-dimensional McKay premise is inserted.

[F4] [[lem-gts-finite-group-induction-of-invariant-stability]] induces the actual slicing, HN filtrations, local finiteness and finite-rank support from a finite invariant action. [[lem-gts-finite-etale-stability-lifting-and-hilbert-norm-intertwining]] supplies free quotient descent, exact tensor norm identities and actual stability lifting across an abelian finite étale cover whose character lines preserve the condition.

[F5] [[lem-gts-cynk-hulek-local-clusters-and-equivariant-derived-induction]] constructs the source order-two/order-three recursive crepant resolutions, their strict-CY geometry and their full residual-equivariant derived comparison with the product quotient. Only its explicit normal A1/A2/scalar3 kernels are used; no arbitrary-dimensional crepant-resolution equivalence is assumed.

[F6] [[lem-gts-named-enriques-bielliptic-hilbert-strict-covers]] constructs the actual canonical universal cover in (ii) and the actual product cover $X\times E$ in (iii), including strictness and the corrected Albanese elliptic factor. [[lem-gts-isotrivial-fibre-stability-restriction-from-torsion-invariance]] constructs scheme-level fibre HN restriction with support and local finiteness from the verified torsion-line invariance, rather than a forthcoming restriction theorem.

## Proof

**Given:** F1–F6 and the complete named hypotheses in the Statement. All categories and central charges below retain the exact finite-lattice support convention.

1.1 On every required product of elliptic curves choose degree-one numerical classes and the F2 condition. Its invariance includes the diagonal groups in the Cynk–Hulek constructions, and includes the source factorwise surface actions and every permutation of their repeated two-dimensional blocks. For an abelian surface quotient $S=(C_1\times C_2)/G$ in (i), the free quotient being abelian forces $G$ to act by translations: its invariant two-dimensional one-form space equals the whole product one-form space, so every derivative is the identity; an elliptic-product automorphism with identity derivative is a translation. Thus it too is factorwise and is covered. Enriques and bielliptic surface actions are the explicitly stated factorwise affine automorphisms. The orbit-lattice construction in F2 gives a genuinely equivariant numerical support lattice for each finite wreath group, not a possibly order-dependent Liu lattice declared invariant. [given, F1, F2, construct]

1.2 Construct the surface and repeated-product categorical comparisons. A free quotient $A\to S$ has the exact descent equivalence $D^b(S)\simeq D^b_G(A)$ from F4, with its natural line-bundle linearizations. For the Enriques case, first use the explicit A1 Kummer resolution kernel from F5 for $A=C_1\times C_2$ and $\langle(-1,-1)\rangle$. The residual free involution $\tau$ acts naturally on that universal-cluster kernel, so finite free descent gives $D^b(S)\simeq D^b_{\langle-1,\tau\rangle}(A)$. Its freeness is the actual source Enriques condition: both two-torsion parameters are nonzero, as proved in F6. Taking the exterior tensor product of the actual Fourier–Mukai kernels preserves the residual actions and has the canonical permutation/Koszul coherence. F3 then supplies
$$D^b(S^{[n]})\simeq D^b_{S_n}(S^n)\simeq D^b_{G^n\rtimes S_n}(A^n),$$
with the appropriate surface group $G$ in each case. This uses the actual all-n Hilbert kernel, not the surface or threefold McKay theorem outside its scope. [given, F3, F4, F5, F6, construct]

1.3 In (iv), the F2 condition on $C_1\times\cdots\times C_n$ is invariant under the actual diagonal group $G_n$ for $m=2$ or $3$. F4 induces a condition on its equivariant category. The F5 universal-kernel induction is an actual equivalence of that category with $D^b(X_n)$, for the source recursive Cynk–Hulek resolution, so transports the condition with its HN filtrations, local finiteness and numerical support. F5 independently proves smooth projectivity, crepancy and strict Hodge vanishing for this precise named construction. No stability on an arbitrary product or arbitrary-dimensional McKay theorem has been inserted. [given, F1, F2, F4, F5, construct]

2.1 Apply finite equivariant induction in F4 to the F2 wreath-invariant product condition, and transport along the equivalence of step 1.2. This gives actual locally finite support-property conditions on the named surfaces themselves (take $n=1$) and on every required $S^{[n]}$. The support remains a finite-rank numerical coimage: forgetting an equivariant structure preserves numerical equivalence by its induction adjunction, and the actual Fourier–Mukai equivalence preserves Euler pairings. These are full stability conditions with finite HN filtrations, not only invariant central charges. [F1, F2, F3, F4, step 1.1, step 1.2, construct]

3.1 For the abelian $S$ in (i), translation gives the actual isogeny-trivialization
$$S^{[n]}\times_{S,[n]}S\simeq K_n(S)\times S,\qquad (Z,a)\mapsto(Z-a,a).$$
The fibre is smooth by the differential of translation, and connected because its symmetric-product image is the quotient of the connected kernel of $\sum:S^n\to S$ and Hilbert–Chow has connected fibres. For every finite-order flat line $L$ on $S$, $\alpha_n^*L$ is its Hilbert norm line: their characters are both the product of the point-loop characters. The exact F3/F4 norm kernel identity turns this tensor into the external product of the pullback line on $C_1\times C_2$, which splits into finite-order flat lines on its elliptic factors. The actual F2 Pic0 slicing invariance therefore makes the constructed Hilbert condition invariant under these $\alpha_n^*L$. F6's actual fibre-restriction theorem now gives a locally finite support-property condition on $K_n(S)$. The cases where this fibre is a point have the ordinary vector-space condition directly. No strict-CY label is imposed on this generalized Kummer family. [given, F1, F2, F3, F4, F6, step 2.1, construct]

3.2 In (ii), F6 constructs the canonical universal double cover $\pi:\widetilde{S^{[n]}}\to S^{[n]}$ and its strict Calabi–Yau geometry for $n\ge2$. Its character line is the canonical line $\omega_{S^{[n]}}$. Under the actual equivalence of step 1.2, the Serre-functor trace compatibility identifies tensor by that line with tensor by the canonical character of the equivariant elliptic product. Its underlying canonical bundle is trivial; permutations of two-dimensional surface blocks have determinant $+1$, and the residual Enriques involution has canonical character $-1$. The induced condition is invariant under ANY character twist because its underlying forgotten object and charge do not change. Thus the canonical character line preserves the actual slicing downstairs. F4's complete finite étale lifting construction supplies the required stability upstairs, with HN, local finiteness and support. This proves the Enriques and even-dimensional strict-CY assertions without using equality of Chern characters as a slicing uniqueness argument. [given, F1, F2, F3, F4, F6, step 1.2, step 2.1, construct]

3.3 In (iii), F6 constructs a finite abelian étale cover $\pi:X\times E\to S^{[n]}$, with $E$ a finite elliptic cover of $\operatorname{Alb}(S)$ and $X$ strict Calabi–Yau. Every character line of this cover is a finite-order Hilbert norm $N_n(M)$ from the surface. For the source free quotient $C_1\times C_2\to S$, the pullback of $M$ splits into finite-order flat factor lines, by the direct-sum elliptic fundamental lattice and the actual finite character cover construction. F3/F4 intertwine tensor by $N_n(M)$ with tensor by their external product, and F2 preserves it as a SLICING. Thus F4 lifts the Hilbert condition to $X\times E$. For a finite-order line $L$ on $E$, extend its character across the finite-index isogeny lattice to a finite-order line $M_B$ on $B=\operatorname{Alb}(S)$. Then $\operatorname{pr}_E^*L=\pi^*f^*M_B$. Projection formula and the verified norm-line invariance downstairs make the lifted condition invariant under these factor lines. Apply F6's actual product-fibre restriction to obtain a locally finite support-property condition on $X$. All source bielliptic inputs are retained; no isogeny between their two original elliptic factors was introduced. [given, F1, F2, F3, F4, F6, step 2.1, construct]

4.1 The preceding constructions give exactly the four named classes in the Statement. Each output condition is obtained by a verified finite equivariant induction, actual Fourier–Mukai equivalence, finite étale lifting or scheme-level fibre restriction, each preserving the stated support/local-finiteness/HN data. F6's strict factors and F1's separate convention retain the original distinction between strict Calabi–Yau manifolds and generalized Kummer varieties. Nothing is concluded for an unlisted higher-dimensional variety. [F1, F3, F4, F5, F6, step 3.1, step 3.2, step 3.3, step 1.3, algebra] ∎

## Remarks

The elliptic factor in the bielliptic product cover is an elliptic cover of the Albanese, isogenous to the translation factor $C_1$. The fixed $C_2$ label copied from Cheng is incorrect when $C_1,C_2$ are nonisogenous; Oguiso–Schröer Theorem3.5 states an unspecified elliptic curve and starts its proof with $\operatorname{Alb}(S)$. The correction retains every named bielliptic family. The source forthcoming general central-charge uniqueness theorem is not a premise: the actual special-charge permutation result and the torsion-invariant fibre-restriction construction supply precisely what this proof uses.
