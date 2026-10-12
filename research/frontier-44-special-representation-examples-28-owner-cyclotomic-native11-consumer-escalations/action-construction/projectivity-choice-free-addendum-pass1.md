# Choice-free refinement of the elementary projectivity helper

New first-pass binding by `/root/repair_klr_global_basis/cyclotomic_action_construction`; original research drafts remain unchanged. This supplies a precise refinement, rather than adding Axiom of Choice to the general algebraic argument.

The proof-route's phrase "direct summand of copies of A[t]/(f), therefore projective over A" is immediate for the **finite** projectives K_0,K_1 needed here, using finite free modules. For an arbitrary projective P over A[t], do not justify the implication by silently claiming arbitrary free A-modules are projective without Choice. The following lifting proof establishes the general statement without that claim.

Let C=A[t] and B=C/(f), with f central monic. B is finite free as an A-module. If P is a projective right C-module, P⊗_C B is projective as a right A-module: for a surjection q:Y→Z of right A-modules, Hom_A(B,Y)→Hom_A(B,Z) is surjective by the finite free basis of B (only finite choice). These Hom modules have a right C action

$$(u\cdot c)(b)=u(cb),\qquad c\in C,\ b\in B.$$

For a right A-linear map g:P⊗_C B→Z, its adjoint \hat g:P→Hom_A(B,Z), \hat g(p)(b)=g(p⊗b), is right C-linear by the balancing relation. Projectivity of P lifts \hat g through Hom_A(B,q), and adjunction gives an A-linear lift of g. Thus P⊗_C B=P/Pf is A-projective with no arbitrary direct-sum argument. Because f is central, its multiplication is C-linear, and the earlier monic leading-coefficient argument makes it injective on P: a projective P splits the canonical free-module surjection C^{(P)}→P using its lifting property, and no assertion that that arbitrary free module is projective is needed to obtain the split. On the ambient free module, injectivity is tested coefficientwise using only finite-support polynomial vectors.

Consequently the short exact sequence 0→P→^fP→P/Pf→0 splits over A by the proved lifting property of its quotient. This fully justifies the p used in the monic projective-dimension-one lemma, including for arbitrary projectives, choice-free.

Likewise F preserves all projectives by the first adjunction F⊣E and exactness of E: a map F(P)→Z through a surjection Y→Z corresponds to P→E(Z), and E(Y)→E(Z) is surjective; lift by projectivity of P and adjoint back. This avoids any use of arbitrary free modules being projective. Finite generation preservation is separate and follows from the finite induction bimodule. The local projectivity theorem needs no choice assumption.

## Exact elementary direct suppliers

For the standalone monic helper use `def-projective-module`, `def-tensor-product-of-modules-by-generators-and-relations`, and `def-graded-ring-module-bimodule-and-internal-shift`, rather than the shift definition alone in the initial proposed contract. The adjunction above is proved locally by its displayed two mutually inverse formulas, so no unproved Hom/tensor theorem is imported.

For the finite K_0,K_1 scalar-extension and graded-summand assertions, the existing proved local `thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules` may be declared if its interface is used; alternatively retain the finite PBW idempotent-summand argument already written, which proves the needed finite projectivity directly. If direct summand lifting is used, `thm-a-direct-summand-of-a-projective-is-projective` is the matching elementary supplier. No reference to arbitrary `thm-free-modules-are-projective-with-choice-boundary` is needed.
