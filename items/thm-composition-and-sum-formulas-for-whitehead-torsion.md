---
id: thm-composition-and-sum-formulas-for-whitehead-torsion
kind: theorem
title: "Composition and based-pair sum formulas for Whitehead torsion"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-whitehead-torsion-is-independent-of-cellular-approximation-basepaths-lifts-orientations-orders-and-contraction, lem-basis-change-and-direct-sum-formulas-for-chain-torsion, def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence, lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear, lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group, def-relative-singular-homology, lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone, def-based-cellular-chain-complex-of-a-universal-cover, def-mapping-cone-of-a-chain-map, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, Lemma 2.9, pp.29–30; Theorem 2.1, pp.23–24"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Lemma 2.9, pp.29–30; Theorem 2.1, pp.23–24"
    - title: "Cohen, §§20–23, pp.66–77"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§§20–23, pp.66–77"
    - title: "Lurie, Lemma 2 and Proposition 4, pp.1–2"
      url: "https://people.math.harvard.edu/~lurie/281notes/Lecture4-Whitehead2.pdf"
      locator: "Lemma 2 and Proposition 4, pp.1–2"
---
## Statement

Let $f:X\to Y$ and $g:Y\to Z$ be homotopy equivalences of finite CW complexes.

1. (composition) $\tau(g\circ f)=\tau(g)+g_*\tau(f)$ in $\mathrm{Wh}(\pi_1(Z,z))$, where $g_*:\mathrm{Wh}(\pi_1(Y,y))\to\mathrm{Wh}(\pi_1(Z,z))$ is induced by the group isomorphism $g_*:\pi_1(Y,y)\to\pi_1(Z,z)$ of [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]. If the complexes are disconnected this holds componentwise.
2. (pairs) Let $f:(X,A)\to(Y,B)$ be a cellular map of finite CW pairs whose restrictions $f_X:X\to Y$ and $f_A:A\to B$ are homotopy equivalences, with compatible basepoint paths on components. Then
$$\tau(f_X)=j_*\tau(f_A)+\tau(f_{\mathrm{rel}})$$
in $\mathrm{Wh}(\pi_1(Y,y))$ for connected $Y$, where $j:B\hookrightarrow Y$ induces coefficient extension from each component of $B$ to the component of $Y$ containing it, and $f_{\mathrm{rel}}:C_*(\widetilde X,p_X^{-1}A)\to C_*(\widetilde Y,p_Y^{-1}B)$ is the induced map of relative based cellular chain complexes over $\mathbb Z[\pi_1(Y)]$. For disconnected $Y$, take this formula componentwise, summing the images of the $B$-component torsions in each target component.
3. (based exact sequences, algebraic form) For a degreewise based exact sequence $0\to C_*\to D_*\to E_*\to 0$ of contractible bounded finite based free right $R$-complexes whose displayed odd and even basis lists have equal size in each of $C_*,D_*,E_*$, $\tau(D)=\tau(C)+\tau(E)$; equivalently, in a strictly commutative based exact diagram of bounded finite based free right $R$-complexes in which two of the three vertical maps are chain homotopy equivalences and the three mapping cones have equal odd and even displayed basis sizes, the torsion of the middle map is the sum of the torsions of the sub- and quotient maps.

## Facts & Assumptions

**Given:** Finite CW complexes with basepoints, homotopy equivalences $f:X\to Y$, $g:Y\to Z$, and for clause 2 a cellular map of finite CW pairs as stated.

[F1] $\tau$ is defined by chosen cellular representatives and compatible lifts as the image in $\mathrm{Wh}$ of the contraction torsion of the based cone complex, and it is independent of all auxiliary choices, so it may be computed with any convenient representative and contraction; homotopic representatives give the same class ([[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]], [[thm-whitehead-torsion-is-independent-of-cellular-approximation-basepaths-lifts-orientations-orders-and-contraction]]).

[F2] Algebraic composition and sum formulas for maps whose cone torsions are defined: for chain homotopy equivalences $f_*:C_*\to D_*$, $g_*:D_*\to E_*$ of finite based free $R$-chain complexes one has $\tau(g_*\circ f_*)=\tau(g_*)+\tau(f_*)$; for a commutative diagram of finite based free complexes with based exact rows in which two of the three vertical maps are chain homotopy equivalences and all three cones have equal odd and even displayed basis sizes, all three maps are chain homotopy equivalences and $\tau(f_*)-\tau(g_*)+\tau(h_*)=0$ (Lück, Lemma 2.9(1) and 2.9(3), pp.29–30; the based exact sequence case follows from [[lem-basis-change-and-direct-sum-formulas-for-chain-torsion]]).

[F3] A lifted cellular map of a homotopy equivalence induces a right-linear chain homotopy equivalence of the based cellular chain complexes after transporting the source coefficients along the induced fundamental-group isomorphism, and deck twists and unipotent basis corrections do not change the class in $\mathrm{Wh}$ ([[lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone]], [[lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear]], [[lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group]]).

[F4] For a finite CW pair $(X,A)$, the integral cellular chains of the lifted inclusion $p_X^{-1}A\subset\widetilde X$ form a degreewise based split sequence $0\to C_*(p_X^{-1}A)\to C_*(\widetilde X)\to C_*(\widetilde X,p_X^{-1}A)\to0$ of finite free modules over the ambient group ring. Componentwise, $C_*(p_X^{-1}A)$ is the module induced from the universal-cover cellular complex of each component of $A$ along its fundamental-group homomorphism into $\pi_1X$; this remains true when that homomorphism is not injective. A homotopy equivalence of the components of $A$ induces a chain homotopy equivalence on these induced modules, because extension of scalars carries a chain inverse and its homotopies to a chain inverse and homotopies after induction ([[def-based-cellular-chain-complex-of-a-universal-cover]], [[lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone]], [[def-relative-singular-homology]]).

[F5] Functoriality: a unital ring homomorphism, in particular the coefficient extension $\mathbb Z[\pi_1(B)]\to\mathbb Z[\pi_1(Y)]$, carries invertible matrices to invertible matrices, elementary matrices to elementary matrices and the classes $[\pm h]$ to $[\pm j(h)]$, hence induces maps on $K_1$ and on $\mathrm{Wh}$ compatible with composition ([[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

## Proof

**Proof technique:** direct.

1.1 Choose cellular representatives of $f,g$ and compatible lifts $\widetilde f,\widetilde g$ of $gf$; by [F3] the lifted chain maps are right-linear chain homotopy equivalences after transporting coefficients, and by [F3] again the composite $C_*(\widetilde g)C_*(\widetilde f)$ differs from the lift of $gf$ by a deck twist, which does not change classes in $\mathrm{Wh}$. Hence the algebraic composition formula of [F2] applies to the transported based complexes and gives the composition formula after applying the group isomorphism $g_*$ to the coefficient ring of the middle complex; this is the displayed formula, since the transport of $\tau(f)$ from $\mathrm{Wh}(\pi_1(Y))$ to $\mathrm{Wh}(\pi_1(Z))$ is exactly $g_*\tau(f)$ by [F5]. [F1, F2, F3, F5]

1.2 For clause 2 write $A'=p_X^{-1}A\subset\widetilde X$ and $B'=p_Y^{-1}B\subset\widetilde Y$, and transport all source coefficients through $f_{X*}$ to $R=\mathbb Z[\pi_1(Y,y)]$. In each degree the lifted cells of $X$ split into those over $A$ and those outside $A$, and similarly for $(Y,B)$. Hence [F4] gives two degreewise based exact rows $0\to C_*(A')\to C_*(\widetilde X)\to C_*(\widetilde X,A')\to0$ and $0\to C_*(B')\to C_*(\widetilde Y)\to C_*(\widetilde Y,B')\to0$, joined by the three chain maps induced by $f_A,f_X,f_{\mathrm{rel}}$. A lift of the cellular pair map preserves the subcomplexes, so the diagram commutes. [F3, F4]

2.1 Taking algebraic mapping cones of the three vertical maps in step 1.2 gives the degreewise based exact sequence
$$0\to\operatorname{Cone}(C_*(A')\to C_*(B'))\to\operatorname{Cone}(C_*(\widetilde X)\to C_*(\widetilde Y))\to\operatorname{Cone}(f_{\mathrm{rel}})\to0.$$
The first and middle cones are contractible: for the first, decompose $A,B$ componentwise and use the induced chain equivalences of [F4]; for the middle use [F3]. The last cone is contractible as well. Explicitly, a graded basis splitting of the exact sequence gives a graded section $s$ of the quotient and defect $\delta=d s-sd$ with values in the first cone; if $h$ contracts the first cone, $s'=s-h\delta$ is a chain section because $d\delta+\delta d=0$ and $dh+hd=1$. The last cone is then a chain retract of the contractible middle cone, so it inherits a contraction. By the cone criterion of [F3], $f_{\mathrm{rel}}$ is a chain homotopy equivalence. [F2, F3, F4, step 1.2]

3.1 Apply the based exact sequence formula of [F2] to step 2.1. The cone bases in each degree are concatenations of the bases of the lifted subcomplex and quotient cells, up to cell permutations whose classes vanish in $\mathrm{Wh}$ by [F3]. Hence the middle cone torsion is the sum of the first and last cone torsions. The first is the image $j_*\tau(f_A)$ under componentwise coefficient extension: the induced complex over $R$ is obtained by extending the component coefficient rings and their chosen bases, so its contraction matrix is the scalar extension of the contraction matrix for $f_A$. The last is $\tau(f_{\mathrm{rel}})$ by definition of algebraic cone torsion. Passing to $\mathrm{Wh}(\pi_1Y)$ proves $\tau(f_X)=j_*\tau(f_A)+\tau(f_{\mathrm{rel}})$. [F2, F3, F4, F5, step 2.1]

4.1 Clause 3 is the algebraic statement of [F2] as proved from [[lem-basis-change-and-direct-sum-formulas-for-chain-torsion]]; clause 1 is step 1.1 and clause 2 is steps 1.2, 2.1 and 3.1. No step used a choice principle beyond finitely many cell and lift choices, and no step used a smooth, handle or cobordism statement. [F2, step 1.1, step 3.1] ∎
