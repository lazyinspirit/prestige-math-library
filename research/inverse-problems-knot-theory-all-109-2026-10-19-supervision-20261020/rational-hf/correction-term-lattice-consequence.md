# Correction term from the finite minus lattice

This is the final algebraic consequence of the newly constructed absolute grading and rational-sphere infinity standardness. It does not replace either construction. Coefficients are `F_2`; write `R=F_2[U,U^{-1}]` and `R_-=F_2[U]`, with `deg U=-2`.

Fix a rational homology sphere and a Spin-c structure. The infinity construction supplies a graded isomorphism `HF^infinity=R rho`. The finite pointed diagram has finitely many intersection generators. Its minus complex is a finite free `R_-` complex, with one generator `[x,-1]` for each intersection point in the chosen Spin-c structure. Consequently its homology is finitely generated over `R_-`, and its localization is infinity homology: localization is exact and the localized disk differential is literally the infinity differential.

Let `L` be the image of minus homology in `R rho`. It is nonzero, since its localization is `R rho`. It is graded, since the inclusion of complexes preserves absolute grading. Its degrees are bounded above: each free minus generator has a fixed rational degree, multiplication by `U` only decreases degree, and there are finitely many generators. Thus the set of integers `j` for which `U^j rho` belongs to `L` is nonempty and bounded below. It is closed under addition of nonnegative integers. If its minimum is `a`, it is exactly `{a,a+1,...}`. There are no additional nonmonomial homogeneous elements in a single Laurent tower, and every element is a finite sum of homogeneous elements. Therefore

`L=U^a F_2[U] rho`.

The long exact sequence of the actual short exact sequence `CF^- -> CF^infinity -> CF^+` identifies the image in plus homology, with its grading, as

`(R rho)/(U^a F_2[U] rho)`.

Its nonzero homogeneous elements are `U^j rho` for `j<a`. Since `deg(U^j rho)=deg rho-2j`, their least degree is attained exactly at `j=a-1`, and equals `deg rho-2(a-1)`. The map sending the standard tower class `U^k` to `U^{k+a-1}rho` identifies this image with `R/U F_2[U]`, shifted so that its bottom has that degree. Every individual class is killed by a sufficiently large power of `U`; every class has a preimage under every power of `U`, by decreasing its exponent. These assertions concern the image, and make no claim about the reduced summand of plus homology.

The completed Heegaard-move construction gives commuting grading-preserving maps on the minus, infinity and plus complexes. Thus it carries `L` onto the corresponding lattice and induces a grading-preserving isomorphism of the quotient. In particular the least degree is independent of diagram and regular data. Changing the chosen Laurent generator from `rho` to `U^b rho` changes `a` to `a-b` and `deg rho` to `deg rho-2b`; the displayed least degree is unchanged.

For the genus-zero diagram of `S^3`, there is one intersection generator, no nonconstant disks, and the normalization gives `deg[x,0]=0`. Its minus lattice is `U F_2[U][x,0]`, so `a=1` and the least plus-image degree is zero.

For a punctured rational homology ball, the new fixed-Spin-c rational-cobordism construction gives an infinity isomorphism and commuting plus map of degree zero in each orientation. Applying the already supplied commuting-tower bottom-degree inequality in both orientations gives `d(Y,t)>=d(S^3)=0` and `d(Y,t)<=d(S^3)=0`. Hence `d(Y,t)=0`. This last inference requires no orientation-reversal formula for correction terms.

No canonical integration or new review verdict is asserted by this research note. The infinity standardness input remains conditional on the new IHS unit-surgery-chain supplier until its author delivers the completed interface.
