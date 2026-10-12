# Exact reduction of Q-S2 to a perfect trace and the Q-S1 unit pivots

This is a local algebraic proof, conditional on the explicit two premises below. It does not claim either unproved premise or the Schur Jantzen determinant identity complete. No active/native carrier is changed.

Let R be any commutative ring, A a finite free R-algebra and τ:A→R a symmetric R-linear functional such that a↦(b↦τ(ab)) identifies A with A*. Fix m∈A. Assume mA is an R-direct summand of A. Then

lAnn(rAnn(m))=Am.

Proof. Let L_m:A→A,a↦ma. Its image mA is projective, so 0→K→A→mA→0 is split exact over R, K=rAnn(m). A functional on A vanishing on K descends to a functional on mA. Because mA is a DIRECT SUMMAND OF THE CODOMAIN A, that descended functional extends to A; composing its extension with L_m recovers the original functional. Conversely every such composition vanishes on K. Thus the functionals vanishing on K are exactly the image of L_m*:A*→A*. Projectivity of the image/source-split alone would not prove this codomain extension, and is not substituted for the stated direct-summand premise. For the perfect symmetric pairing, the adjoint of L_m is R_m:a↦am: τ((ma)b)=τ(a(bm)). Hence K^perp=Am. If xK=0 then τ(xk)=0 for everyk∈K, so x∈Am. Conversely if τ(xk)=0 for everyk∈K, then for any a∈A, ka∈K because K is a right ideal; therefore τ((xk)a)=0 for everya. Perfectness implies xk=0. Thus the orthogonal and left-annihilator conditions coincide. No field, dimension count, rationalization, generic flatness, or nonsaturated-lattice argument is used.

Consequently evaluation gives

Hom_A(mνA,mµA)={x∈mµA:x rAnn(mν)=0}=mµA∩Amν.

The first equality follows directly by sending ma↦xa: it is well-defined precisely when xrAnn(m)=0, and inverse evaluation recoversx.

Apply this to Q over its universal Laurent parameter ring or LM DVR. Q-S1's proposed semistandard sums have disjoint fibres in the EXISTING Murphy basis and coefficient1 at their respective least refinements. IF the asserted membership/spanning equality mνA=⊕R m_(S,t) is proved, these sums extend to an R-basis of A: replace each chosen pivot basis vector by its fibre sum and leave the remaining coordinates; the transformation is unitriangular with determinant1. Hence mνA is a direct summand, exactly the premise needed above. This is why a mere free-image or generic-rank assertion is insufficient, and why the actual S1 unit pivots suffice.

The remaining independent S2 input is therefore precisely a perfect symmetric trace over R (or its DVR specialization) for the monic cyclotomic Hecke presentation with ALL q_H,Q_a units. Mathas review Proposition3.5(ii) states that result and Proposition4.9 uses it, but this reduction does not count the statement as its proof. An actual complete trace proof or explicit unit determinant/cyclicity construction is still required. Once that is available and S1 is proved, no further double-annihilator/intersection theorem is missing: Q constructor already supplies the rectangular-fibre intersection basis and Schur multiplication consequences.
