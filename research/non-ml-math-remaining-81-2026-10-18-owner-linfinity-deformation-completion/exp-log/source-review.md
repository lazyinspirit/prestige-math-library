# Authoritative source review for the fixed-carrier proof

Reviewed 2026-10-18. This records actual full-text retrieval and reading of the relevant complete sections, not a claim to have read every page of either book/paper. The proof in `proof.md` is supplied locally; these references establish provenance and conventions rather than serving as unproved logical suppliers.

## Marco Manetti, *Deformation theory via differential graded Lie algebras*

Authoritative full text: https://arxiv.org/abs/math/0507284 and https://arxiv.org/pdf/math/0507284 . The retrieved file identifies itself as arXiv:math/0507284v1 [math.AG], 14 July 2005; title-page date 11 July 2005. Its preface says this is a 1999 expository paper reposted with only typo/minor corrections, and explicitly points to the later 2004 *Lectures on deformations of complex manifolds* for a more recent treatment. Do not call it a 2024 paper or mistake the repository retrieval date for publication date.

Actual local retrieval: `exp-log/manetti.pdf`, 297986 bytes, SHA256 `78a5c9c6682d0e3fe25d2bd96813b1ece5d0f739b8c18ba2cf93e2613f178135`. Root separately retrieved and extracted the same source into `../sources/manetti.pdf` and `../sources/manetti.txt`; I read the root's page-marked extraction for the passages below.

Reviewed passages:

- §1, Definition 1.3 (printed p. 2): MC equation `da + (1/2)[a,a] = 0`.
- Example 1.11 (printed p. 4): Hochschild DGLA and Gerstenhaber insertion bracket for an ordinary associative algebra. The paper writes the shifted cochain space as the direct sum of `Hom_K(A^{⊗(n+1)},A)[−n]`. This passage supplies classical provenance, but does not justify substituting this naive tensor expression for arbitrary continuous Taylor coefficients over an infinite-dimensional coefficient algebra.
- §1, printed p. 5: nilpotent Lie exponential, multiplication and representation properties; in particular item 3 states `exp(ad_ρ)(exp(a))f = exp(ρ(a)) f exp(−ρ(a))`. Immediately on printed p. 6, the paper says “Exercise: Prove the above items.” Consequently the displayed assertion is not a complete published proof of the noncommutative completion or coalgebra-logarithm lemma. `proof.md`, Helpers 1–4, supplies that work independently.
- Printed p. 6: the extended differential construction gives infinitesimal gauge generator `[a,v+d]_d=[a,v]−d(a)`, and interprets gauge equivalence of represented operators through conjugation. This sign agrees with Helper 4's convention `G(D+R)G^{-1}`.
- Example 1.16 (printed p. 7): a polarized graded associative algebra with square-zero element d has differential `δ(a)=da−(−1)^|a|ad`; the gauge group can instead be written using `identity+g` in a nilpotent associative degree-zero algebra. This is close to the concrete endomorphism algebra construction in `proof.md`, but equivalence to the Lie exponential action is again left as an exercise.
- Example 2.4.2 (printed p. 8): the Artin-ring group functor is `exp(L^0⊗m_A)`. This uses a nilpotent maximal ideal and is not, by itself, an inverse-limit theorem for arbitrary complete B.

Conclusion: Manetti documents the MC/gauge/conjugation construction in characteristic zero and the ordinary Hochschild example. It does not prove that every identity-mod-I coalgebra automorphism is an exponential, and it does not state the coefficient-completed fixed-carrier contract used here. Those are locally proved extensions, not quotations attributed to this paper.

## Jean-Louis Loday and Bruno Vallette, *Algebraic Operads*, version 0.99

Author-hosted complete text: https://www.math.univ-paris13.fr/~vallette/Operads.pdf . Retrieved 2026-10-18. Actual local full text: `exp-log/loday-vallette.pdf`, 4830005 bytes, 530 PDF pages, title page “Algebraic Operads / Version 0.99 / Jean-Louis Loday and Bruno Vallette”; SHA256 `fff644523ee308753e0bbd17d5f388b340e4db6879fe4708f87779e2dcae493e`. The local `loday-vallette.txt` was extracted with PyMuPDF from the actual PDF; it contains some font-control characters. `loday-vallette-relevant-extracts.txt` retains separately page-marked complete selected pages. Citations below use printed page numbers, followed by PDF page numbers where useful.

Relevant sections read:

- §1.2.5–1.2.7, printed pp. 8–10 (PDF pp. 26–28): cofree means cofree within the **conilpotent** category. §1.2.6 defines `T^c(V)=K1 ⊕ V ⊕ ... ⊕ V^{⊗n} ⊕ ...` with deconcatenation. Proposition 1.2.7 proves the universal property; its proof explicitly observes finite support because this is a direct sum. This is the precise reason `proof.md` avoids calling the unrestricted arity product the same cofree conilpotent coalgebra.
- §1.2.8–1.2.9, printed p. 10 (PDF p. 28): coderivation requires `d(1)=0` and `Δd=(d⊗id+id⊗d)Δ`; Proposition 1.2.9 shows it is determined by its weight-one projection and displays its iterated-coproduct insertion formula. The ordinary ungraded formula is converted to the graded Koszul insertion formula explicitly in `proof.md`; the local proof also explains existence and uniqueness.
- §1.2.11, printed p. 11 (PDF p. 29): cofree cocommutative coalgebra is the symmetric module with the unshuffle coproduct, within the conilpotent category. This supports the symmetric variant; the exp/log argument is coalgebra-axiomatic and does not depend on its particular coproduct.
- §2.2.1–2.2.3, printed pp. 33–34 (PDF pp. 51–52): the bar coderivation induced by an associative product. Proposition 2.2.2 states associativity implies square-zero; Lemma 2.2.3 proves the adjacent-multiplication signs `(−1)^{i−1}` and explicitly computes `[a1|a2|a3] ↦ [μ(a1,a2)|a3] − [a1|μ(a2,a3)]`. The local proof additionally proves the converse using its arity-three Taylor component.
- §9.2.1–9.2.2, printed pp. 271–272 (PDF pp. 289–290): A-infinity algebra as square-zero coderivation, determined by all positive-arity Taylor maps, and the component identities.
- §10.1.17–10.1.20, printed pp. 296–297 (PDF pp. 314–315): Proposition 10.1.18 identifies the convolution and coderivation brackets; Proposition 10.1.19 proves the MC↔square-zero correspondence for the relevant cofree cooperad coalgebra; Proposition 10.1.20 identifies the tensor/symmetric codifferential models of A-infinity/L-infinity structures.

Convention warning: Loday–Vallette uses homological degree −1 for the codifferential and degree +1 suspension. `proof.md` uses cohomological degree +1 and `|sa|=|a|−1`. Accordingly it derives rather than copies the precise binary formula `b_μ(sa,sb)=(−1)^{|a|}sμ(a,b)`, its equivalent tensor-map formula with an extra minus sign, the arity-three associator, and the sign relating its shifted differential to the conventional unshifted Hochschild differential. In degree-zero A both grading choices produce the same alternating adjacent-multiplication sign, but this does not license dropping the graded sign calculation.

Conclusion: the full source supports the cofree/coderivation/codifferential framework and the associative specialization. The coefficient-adic topological endomorphism algebra, complete exp/log bijection, and logarithm-coderivation interpolation proof remain supplied locally in `proof.md`. No claim is made that the book itself proves those exact complete-topology statements.

## Dependency and applicability conclusion

The canonical local exp/log results for a commutative Q-algebra cannot be used directly on the composition algebra of endomorphisms. Helper 1 instead proves convergence in a noncommutative complete associative algebra and uses single-variable identities only after justifying substitution. The source references above are appropriate provenance for the established deformation framework. The proof package does not need finite-dimensional V, finite-dimensional ideals, a blanket “all deformation problems” slogan, or an appeal to a source without a local proof.
