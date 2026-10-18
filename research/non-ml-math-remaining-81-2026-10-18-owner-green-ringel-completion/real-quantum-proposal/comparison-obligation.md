# Numerical presentation comparison: draft resolution

The original two draft items proved only integral-specialization nondegeneracy and the independent Hall-composition PBW upper bound. They did not identify the numerical Serre-only algebra with the integral specialization.

That missing comparison is now reconstructed in `thm-prime-power-numerical-serre-half-is-the-integral-specialization.md`, using two additional local draft suppliers in this directory and the sibling rank-one helper `lem-numerical-serre-rank-one-skew-kernel-is-integrable` in `../joseph-source/`.

The actual chain is:

1. Lower-global Gram congruence and exact Gaussian-factorial denominators prove arithmetic nondegeneracy at the nonunit algebraic integer ν=√(prime power). First-word reversal gives the inverse parameter.
2. The already proved generic quasi-R tensor has coefficients regular at these parameters by that separate Gram argument. Transport it to source coproduct convention and evaluate. Applying multiplication after antipode on its first tensor factor gives the Casimir commutations by explicit cancellation. Its weight factor yields eigenvalue ν^(λ²+2htλ).
3. In the free contragredient Verma at label0, augmentation is the direct sum of free Vermas at labels−α_i by last-letter decomposition. Mapping to the actual integral quotient gives a relation-module map with exact kernel J T_+. The Serre ideal is stable under raising generators by explicit opposite-Serre commutator cancellation. A minimal residual numerical relation therefore gives a nonzero highest vector−β in a subquotient of ⊕M(−α_i), forcing β²=2htβ>0.
4. The numerical rank-one helper proves directly from Serre relations that a common skew-derivative-kernel vector has β(h_i)≤0 for every i. Minimal residual relations are killed by both derivatives, by actual torus independence. Hence β²≤0, a contradiction.

All hypotheses cover finite symmetric Cartan data of finite, affine, and indefinite type. The exact arithmetic parameter is ν=√(p^a); no assertion for arbitrary real algebraic parameters is added. The approved numerical Serre-only source is preserved.

Actual focused checks on the three final comparison/Casimir/relation-module drafts: precheck 3 checked, 0 failing; rendercheck 3 files passed actual KaTeX/YAML; proof-layout 3 items, 15 steps, 0 defects. These are mechanical checks, not independent proof acceptance. Parent owns integration and acceptance.

Authoritative source reading: Lusztig author-hosted split chapter6, printed pp48–49, §§6.1.1–6.1.2, viewed in full; its antipode cancellation is reconstructed locally. Chapter33 pp258–260, §§33.1.1–33.1.5, viewed in full and found to address generic Q(v)/v=1 comparison rather than the numerical gap. Tanisaki arXiv1506.00826 §3 and §4 and Heckenberger–Kolb math/0605460 §3.4 read from their full PDFs. Joseph95 relevant pages were not available in full; no reading or proof from them is claimed or needed in the constructed argument. Hu–Pei–Rosso0811.0129 §3 was inspected but its unproved large-weight Cor38 was not used.
