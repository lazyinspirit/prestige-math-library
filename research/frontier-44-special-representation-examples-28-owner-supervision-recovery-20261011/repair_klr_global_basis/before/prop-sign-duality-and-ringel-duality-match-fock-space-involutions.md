---
id: prop-sign-duality-and-ringel-duality-match-fock-space-involutions
kind: proposition
title: "Sign duality and Ringel duality match the Fock-space involutions"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 43
deps: [def-degenerate-cyclotomic-hecke-tower-and-residue-functors,
       thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module,
       thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module,
       thm-degenerate-ariki-categorification,
       thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one,
       def-degenerate-cyclotomic-hecke-algebra,
       def-dual-canonical-canonical-and-quasi-canonical-fock-bases,
       def-the-ringel-dual-of-a-finite-highest-weight-ideal,
       thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic,
       thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o,
       thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases,
       thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule,
       thm-the-highest-weight-fock-submodule-has-the-qg-global-bases,
       def-the-higher-level-schur-weyl-projective-generator-and-schur-functor,
       thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects,
       thm-higher-level-schur-weyl-double-centralizer,
       thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives,
       lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Brundan-Kleshchev, The degenerate analogue of Ariki's categorification theorem (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.7 (printed pp. 31-32), (3.33)-(3.40), Lemmas 3.12-3.13 and Theorem 3.14: the charge reversal, the sign automorphism, the multipartition transpose and the simple/Specht comparison; complete passage read."
    - title: "Brundan-Kleshchev, The degenerate analogue of Ariki's categorification theorem (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Sections 4.2-4.4 (printed pp. 35-42), the reduced permutation modules (4.3), the intrinsic Young and signed Young definitions, Lemma 4.10, Theorems 4.15 and 4.17 and Corollaries 4.18-4.19; complete passage read for the full-generator and Ringel statements."
    - title: "Brundan-Kleshchev, Schur-Weyl duality for higher levels (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Theorems 6.9, 6.10, 6.12 and 6.15 (printed pp. 33-41): projective and tilting images of the Schur functor and the full faithfulness on projectives and tiltings; complete passage read."
    - title: "Brundan-Kleshchev, Representations of shifted Yangians and finite W-algebras (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Section 8.5 (printed pp. 93-97): the Whittaker functor and the higher-level duality used for full faithfulness on all projectives; the relevant passages were read."
verification:
  precheck: pass
---

## Statement

For $I=\mathbb Z$ (and reflected auxiliary finite cuts used to realize this
global statement), the map $t$ sends $\Lambda_i$ to $\Lambda_{-i}$ and
$\alpha_i$ to $\alpha_{-i}$, so $m^t=(-m_l,\dots,-m_1)$. The sign map
$\sigma(s_r)=-s_r$, $\sigma(x_r)=-x_r$ gives
$H^\Lambda_\alpha\cong H^{\Lambda^t}_{\alpha^t}$ and intertwines residue $i$
with $-i$. Multipartition transpose with reversed components gives
$\mathrm{Col}^\Lambda_\alpha\cong\mathrm{Col}^{\Lambda^t}_{\alpha^t}$, sending
$\mathrm{Rev}$ to target $\mathrm{Std}$. The genuine sourced Specht/sign
comparison is $\sigma^*S(A^t)\cong S(A)^{\circledast}$, and for
$A\in\mathrm{Rev}$ the simple and projective-cover labels are $A^t\mapsto A^\downarrow$;
no off-standard $D(A)$ is made into a simple. At parameter one these are maps on
the projected highest constituent/costandard and standard lattices, rather than
a naive permutation of all simple labels or all ambient monomial vectors.

For a finite bounded category-O chunk define $Y_{\mathrm{all}}(A)=\pi P_{\mathcal O}(A)$
for EVERY $A\in\mathrm{Col}^\Lambda$, and
$\widetilde Y_{\mathrm{all}}(A)=\pi T_{\mathcal O}(A)$ for EVERY
$A\in\mathrm{Col}^\Lambda$. The existing signed-Young comparison identifies
$\widetilde Y_{\mathrm{all}}(A)$ with $\sigma^*Y_{\mathrm{all}}(A^t)$; on
$\mathrm{Rev}$ it is the projective cover $Y(A^\downarrow)$. All these families
retain their ordinary self-dual source scope. Take FULL sums over
$\mathrm{Col}^\Lambda$, with one representative each:
$\operatorname{End}_{H^\Lambda}(Y_{\mathrm{all}})^{op}$ is the quasihereditary
Schur-cover algebra, and
$\operatorname{End}_{H^\Lambda}(\widetilde Y_{\mathrm{all}})^{op}$ is its
Ringel dual. Off-standard $Y_{\mathrm{all}}$ are indecomposable nonprojective
$H$-images, so summing only standard projective covers is not this full Young
generator. The Ringel category is the reversed-Levi/opposite-parabolic block,
using $F=D\Psi$ with its explicit shifts and
$F(\overline P(A))=T_{\mathcal O}(A)$; it is not an unqualified longest-Borel
twisting equivalence. For a proper original lower ideal the corresponding
opposite category is the matching highest-weight Serre quotient. Positive
finite multiplicities give Morita-equivalent generator algebras. The global
sign and these bounded-chunk categorical constructions have their stated
distinct domains.

## Facts & Assumptions

**Given:** The tower $H^\Lambda$ with its blocks, residue functors and duality
$\circledast$ of [[def-degenerate-cyclotomic-hecke-tower-and-residue-functors]],
the identifications and simple labels of
[[thm-degenerate-ariki-categorification]], the Schur quotient $\pi$ with
full-faithfulness properties of
[[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]]
and [[thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]],
and the fused Ringel/Young dictionary of
[[def-the-ringel-dual-of-a-finite-highest-weight-ideal]] and
[[thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic]].
We prove the four clauses.

[F1] The Hecke simple and projective classes are indexed by
$\mathrm{Std}^\Lambda$, with standard-labelled classes $[D(A)]\mapsto D_A$ and
$[Y(A)]\mapsto P_A$
([[thm-degenerate-ariki-categorification]]).

[F2] The source comparison of Specht modules under the sign twist is
$\sigma^*S(A^t)\cong S(A)^{\circledast}$ for all $A$, and the simple comparison
on reverse-standard labels is $\sigma^*D(A^t)\cong D(A^\downarrow)$ for
$A\in\mathrm{Rev}$; this is the comparison of the source and of the sign
suppliers named in the Sources locator, used as a supplied statement.

## Proof

**Proof technique:** direct.

1.1 **The sign automorphism.** The assignments $\sigma(s_r)=-s_r$ and $\sigma(x_r)=-x_r$ respect the defining relations of [[def-degenerate-cyclotomic-hecke-algebra]]: involution and braid relations hold for the $s_r$ and the $x_r$ commute, and the cross relation $s_rx_{r+1}=x_rs_r+1$ is preserved because both sides change sign in the $x$-variable and $1$ is fixed, while $x_{r+1}s_r=s_rx_r+1$ is preserved the same way. Hence $\sigma$ is an algebra automorphism of the degenerate affine Hecke algebra; it maps the polynomial idempotent $e(i)$ to $e(-i)$ and therefore the block idempotent $e_\alpha$ of $H_d(m)$ to the block idempotent $e_{\alpha^t}$ of $H_d(m^t)$, giving an isomorphism $H^\Lambda_\alpha\cong H^{\Lambda^t}_{\alpha^t}$ that intertwines the tower inclusion and the residue projectors $u_{\alpha,i}$ with $u_{\alpha^t,-i}$; twisting modules by $\sigma$ gives exact functors that interchange residue $i$ with residue $-i$ and commute with the duality $\circledast$ (which is defined by the $x_r$- and $s_r$-fixed anti-automorphism and is therefore $\sigma$-stable). [given, algebra]

1.2 **The transpose of multipartitions.** Reversing the $l$ components of an $l$-multipartition and transposing each component is an involution $\lambda\mapsto\lambda^t$ that maps the multipartitions of the Fock shape $\Lambda$ of weight $\Lambda-\alpha$ to those of shape $\Lambda^t$ of weight $\Lambda^t-\alpha^t$; on tableaux it induces the tableau bijection of the source, and row-versus-column inequalities interchange, so it restricts to a bijection $\mathrm{Rev}^\Lambda_\alpha\to\mathrm{Std}^{\Lambda^t}_{\alpha^t}$. This is the combinatorial part of [[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]] and [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], specialized to the multipartition dictionary of [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]]. [given, algebra]

1.3 **Full faithfulness on all projectives and tiltings.** In the admissible stable realization the exact Schur quotient $\pi$ is fully faithful on ALL category-O projectives and on all tilting objects, the endomorphism isomorphism identifies the Hecke image algebra with the endomorphism algebra of the prinjective detector, and the category-O tilting objects are classified with a standard flag, by [[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]], [[thm-higher-level-schur-weyl-double-centralizer]], [[thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]] and [[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]]; the Young and signed-Young images are the ones of [[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]] and [[thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic]]. [given, construct]

2.1 **The sign comparison on simples and Spechts.** Applying $\sigma$ to the defining induction product presentation of the Specht modules and using the elementary $\mathbb C[S_d]$-identity $S(\lambda^t)\otimes\operatorname{sgn}\cong S(\lambda)$ gives $\sigma^*S(A^t)\cong S(A)^{\circledast}$ for every $A\in\mathrm{Col}^\Lambda$; taking irreducible heads and using that $\circledast$ fixes simple classes gives $\sigma^*D(A^t)\cong D(A^\downarrow)$ for $A\in\mathrm{Rev}^\Lambda_\alpha$, where the right side is the simple labelled by the rectified reverse-standard tableau by [[thm-degenerate-ariki-categorification]]. Both statements are the source comparison [F2]; in particular no off-standard vector $D(A)$ with $A\notin\mathrm{Std}^\Lambda$ is a simple label, and the comparison is not a permutation of ambient monomials. [step 1.1, step 1.2, F1, F2, given, algebra]

2.2 **The full Young generator algebra.** For every $A\in\mathrm{Col}^\Lambda$ put $Y_{\mathrm{all}}(A):=\pi P_{\mathcal O}(A)$; by step 1.3 full faithfulness on projectives makes these nonzero indecomposable with local endomorphism rings, and makes them pairwise nonisomorphic, while for $A\in\mathrm{Std}^\Lambda$ they are the projective covers $Y(A)$ of [F1]. If some $Y_{\mathrm{all}}(A)$ with $A\notin\mathrm{Std}^\Lambda$ were projective, it would be a sum of standard projective covers, and full faithfulness on the distinct O-projectives $P_{\mathcal O}(A)$ would give an identification of two nonisomorphic O-projectives, a contradiction; so off-standard images are nonprojective. Taking the full finite sum $Y_{\mathrm{all}}=\bigoplus_{A\in\mathrm{Col}^\Lambda}Y_{\mathrm{all}}(A)$ (one representative each) and using full faithfulness on the corresponding full projective generator $Q=\bigoplus_AP_{\mathcal O}(A)$ gives $\operatorname{End}_{H^\Lambda}(Y_{\mathrm{all}})^{op}\cong\operatorname{End}_{\mathcal O}(Q)^{op}$, the quasihereditary Schur-cover algebra of [[thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic]] and [[def-the-ringel-dual-of-a-finite-highest-weight-ideal]]. Summing only the standard projective covers would give a Morita generator of $H^\Lambda$, which is symmetric and not quasihereditary in general, and is not the algebra meant here. [step 1.3, F1, given, algebra]

3.1 **Descent to the projected lattices at parameter one.** At parameter one the simple classes are the projected vectors $D_A=\pi_{\mathrm{Fock}}L_A$ and the projective classes are $P_A=T_{A^\uparrow}$ by [[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]]; the sign and transpose maps of steps 1.1-1.2 act on these two families by the label rules $A\mapsto A^\downarrow$ for costandard vectors on $\mathrm{Rev}$ and by the inverse rectification for standard vectors, compatibly with the identification of [[thm-degenerate-ariki-categorification]]. This is the projected-lattice statement of the first paragraph; the map is not asserted to permute all monomials or all simple labels of the full Fock space, since the off-standard monomials have no simple image. [step 1.2, step 2.1, F1, given, algebra]

3.2 **The signed full generator and Ringel duality.** Likewise put $\widetilde Y_{\mathrm{all}}(A):=\pi T_{\mathcal O}(A)$ for every $A\in\mathrm{Col}^\Lambda$. Full faithfulness on tiltings (step 1.3) makes the full sum $\widetilde Y_{\mathrm{all}}=\bigoplus_A\widetilde Y_{\mathrm{all}}(A)$ satisfy $\operatorname{End}_{H^\Lambda}(\widetilde Y_{\mathrm{all}})^{op}\cong\operatorname{End}_{\mathcal O}(\bigoplus_AT_{\mathcal O}(A))^{op}$, and the characteristic-tilting endomorphism algebra is the Ringel dual of the Schur-cover algebra, realized as the reversed-Levi/opposite-parabolic block via the functor $F=D\Psi$ with its explicit reverse-column shifts and $F(\overline P(A))=T_{\mathcal O}(A)$, by [[thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic]], [[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]] and [[def-the-ringel-dual-of-a-finite-highest-weight-ideal]]. For a proper original lower ideal the opposite datum is the matching highest-weight Serre quotient, not the same downset subcategory, and no unqualified longest-Borel twisting equivalence on all of $\mathcal O$ is used. Positive finite multiplicities replace the generator by a Morita-equivalent one with the same module category. [step 1.3, step 2.2, given, algebra]

4.1 **Signed images under the sign twist.** The intrinsic reduced permutation modules of [[def-degenerate-cyclotomic-hecke-algebra]] and the signed-Young comparison of [[def-the-ringel-dual-of-a-finite-highest-weight-ideal]] identify the signed images with the sign twists $\sigma^*Y_{\mathrm{all}}(A^t)$ for every $A$, and on reverse-standard labels the comparison combined with step 2.1 identifies $\widetilde Y_{\mathrm{all}}(A)$ with the projective cover $Y(A^\downarrow)$; all these modules are self-dual in their source scope, and the identification uses the actual tilted sign automorphism, not a naive label permutation. This is the signed-Young clause of the statement and completes the Young/tilting comparison. [step 2.1, step 2.2, step 3.2, given, algebra]

5.1 **Domains.** The global sign statement lives on $I=\mathbb Z$ and on reflected auxiliary finite cuts realizing it, chosen with every charge inside the root interval; its categorical realization uses the finite bounded chunks of steps 2.2-4.1, not a simultaneously bounded-below index set preserved by negation, and the bounded chunks realize the sign comparison through the finite double-cut identifications of [[thm-degenerate-ariki-categorification]]. The two domains, global label reversal and finite-chunk categorical duality, are thus kept distinct. [step 1.1, step 1.2, step 4.1, given]

6.1 **Conclusion.** Step 1.1 gives the sign isomorphism and the residue intertwining $i\leftrightarrow-i$; steps 1.2 and 2.1 give the transpose bijection and the Specht/simple comparison with the rectified labels; step 3.1 gives the parameter-one descent to the projected lattices; steps 2.2-3.2 identify the full Young and signed generators with the Schur-cover algebra and its Ringel dual, including the off-standard nonprojectivity and the opposite-parabolic/serre-quotient clauses; step 4.1 gives the signed-Young comparison; and step 5.1 separates the global and bounded-chunk domains. No unqualified twisting equivalence and no off-standard simple label is used. [step 3.1, step 2.2, step 3.2, step 4.1, step 5.1, given] ∎
