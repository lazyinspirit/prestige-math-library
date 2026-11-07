---
id: thm-rational-hurewicz-for-finite-type-homotopy-commutative-cw-h-spaces
kind: theorem
title: Rational Hurewicz for finite-type homotopy-commutative CW H-spaces
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: constructive
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- thm-connected-cw-h-space-finite-integral-homology-implies-finite-homotopy
- lem-h-space-fundamental-group-simple-and-finite-type
- thm-rational-homology-hopf-algebra-of-finite-type-eilenberg-maclane-spaces
- thm-homological-serre-spectral-sequence
- lem-relative-hurewicz-comparison-through-a-choice-free-weak-model
- prop-the-first-hurewicz-map-in-degree-one-is-abelianization
- thm-dold-kan-equivalence-for-simplicial-modules
- lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
- lem-connected-rational-super-bicommutative-hopf-algebra-is-free-on-primitives
---

## Statement

Let $(X,e)$ be a path-connected based CW complex with supplied characteristic maps and a based multiplication that is homotopy associative and homotopy commutative through based homotopies, with pointed unit homotopies. Assume $H_i(X;\mathbb Z)$ is finitely generated for every $i\ge0$. Then, for each $n\ge1$, the rational Hurewicz map induces a natural isomorphism
$$\pi_n(X,e)\otimes\mathbb Q\xrightarrow{\cong} P H_n(X;\mathbb Q),$$
where $P$ denotes primitives for the diagonal coproduct. No axiom of choice is used.

## Statement references

[[thm-connected-cw-h-space-finite-integral-homology-implies-finite-homotopy]]

[[lem-h-space-fundamental-group-simple-and-finite-type]]

[[thm-rational-homology-hopf-algebra-of-finite-type-eilenberg-maclane-spaces]]

[[thm-homological-serre-spectral-sequence]]

[[lem-relative-hurewicz-comparison-through-a-choice-free-weak-model]]

[[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

[[thm-dold-kan-equivalence-for-simplicial-modules]]

[[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]]

[[lem-connected-rational-super-bicommutative-hopf-algebra-is-free-on-primitives]]

## Facts & Assumptions

**Given:** The H-space, finite-homology and CW hypotheses in the Statement.

[F1] Finite integral homology gives finitely generated homotopy in all positive degrees for the given connected CW H-space. [[thm-connected-cw-h-space-finite-integral-homology-implies-finite-homotopy]]

[F2] Its fundamental group is abelian and acts trivially on all higher homotopy groups. [[lem-h-space-fundamental-group-simple-and-finite-type]]

[F3] The rational homology Hopf algebra of the explicit K(A,n), for finitely generated A, is the graded symmetric algebra on its spherical degree-n generators. [[thm-rational-homology-hopf-algebra-of-finite-type-eilenberg-maclane-spaces]]

[F4] The homological Serre spectral sequence has the stated coefficient and finite-filtration convergence. [[thm-homological-serre-spectral-sequence]]

[F5] The first nonzero homology and homotopy of a simply connected CW pair agree via the actual Hurewicz map. [[lem-relative-hurewicz-comparison-through-a-choice-free-weak-model]]

[F6] First Hurewicz is the choice-free abelianization map. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

[F7] The explicit Dold–Kan equivalence identifies normalized-chain homology with homotopy of the associated simplicial abelian group. [[thm-dold-kan-equivalence-for-simplicial-modules]]

[F8] Weak equivalences induce integral homology isomorphisms without choice. [[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]]

[F9] A connected graded-commutative and graded-cocommutative rational Hopf algebra is freely graded symmetric on its primitives, by a natural finite Eulerian-logarithm formula. [[lem-connected-rational-super-bicommutative-hopf-algebra-is-free-on-primitives]]

## Proof

**Proof technique:** Functorial n-types and multiplicative homological Serre induction.

1.1 The connected-H-space finite-homology helper gives finite generation of every π_j X. The H-space simple-group helper says π₁X is abelian and acts trivially on all higher groups. Let S=Sing X, a Kan simplicial set. For n≥0 put P_n=|cosk_(n+1) S| in compactly generated spaces. Coskeleton is the right Kan extension from the (n+1)-skeleton: an m-simplex is the finite compatible family of its faces of dimension at most n+1. The map S→cosk_(n+1)S is an isomorphism on π_i for i≤n: a fixed i-sphere and a fixed homotopy between i-spheres are witnessed by simplices in dimensions ≤i+1≤n+1. It kills π_i for i>n, since an i-sphere has a filler in dimension i+1>n+1, determined by its compatible (n+1)-faces. Finite simplicial approximation of one sphere or one disk compares these classes with the realized spaces. All choices are finite per representative. P_0 is connected and weakly contractible. [F1, F2, construct, algebra]

2.1 Coskeleton preserves finite products. Applying it to the supplied multiplication and the specified pointed homotopies, and then realizing, gives compatible homotopy associative and homotopy commutative H-space multiplications on all P_n and H-maps P_n→P_(n−1). The finite-product comparison for realizations is the standard pointwise simplex/prism map in compactly generated spaces; its inverse and homotopies are obtained from the finite shuffle and subdivision of a product of simplices. No Postnikov classification or cohomology representability is used. Retain the construction of step 1.1. [construct, algebra, step 1.1]

3.1 Replace P_n→P_(n−1) by its mapping-path fibration E_n→P_(n−1), with E_n={(x,β): β(0)=p(x)} and projection β(1). The map P_n→E_n by constant paths is a homotopy equivalence, with inverse projection to x and explicit path-shortening homotopy. Multiplication of x coordinates and pointwise multiplication of β coordinates makes this a map of homotopy commutative H-spaces, with fiber F_n also an H-space. The long exact homotopy sequence and the truncation calculation give π_n(F_n)=A_n:=π_n(X), with all other homotopy groups zero. For n=1 the base P_0 has trivial π₁. For n≥2, its π₁ acts on π_n(F_n) as π₁X acts on π_nX, hence trivially; this follows from naturality of the boundary and change-of-basepoint maps in the fibration sequence. Retain the construction of step 2.1. [F2, construct, algebra, step 2.1]

4.1 For the fixed n-type F_n form C, the normalized chain complex of the reduced free simplicial abelian group on Sing(F_n). Its good truncation T keeps C_i for i<n, replaces C_n by C_n/im(d_(n+1)), and is zero above n. The natural inclusion A_n=ker(T_n→T_(n−1)) gives A_n[n]→T, and the singular complex maps naturally into Γ(T) through the reduced free simplicial abelian group. These maps define F_n←|Sing F_n|→|Γ(T)|←|Γ(A_n[n])|; the left arrow is weak by finite simplicial subdivision. For n≥2, use the choice-free first Hurewicz isomorphism on the canonical CW realization |Sing F_n| to identify H_n with A_n; lower reduced homology vanishes. For n=1, the same statement follows from first Hurewicz and the fact that A_1 is abelian. In both cases T has A_n as its only nonzero homology group. Dold–Kan and the finite horn description of simplicial-abelian homotopy make both arrows to Γ(T) weak equivalences; the choice-free weak-equivalence homology theorem gives the asserted homology zigzag. The zigzag is natural for self maps of F_n; hence a monodromy map which is the identity on A_n acts identically on all its rational homology, without choosing representatives. The K(A,n) rational-homology helper and the natural zigzag identify the diagonal coalgebra of H_*(F_n;Q) with that of Sym_gr((A_n⊗Q)[n]); every arrow preserves the diagonal even though it need not preserve the H-space multiplication. In that coalgebra the primitive subspace is precisely A_n⊗Q in degree n. The mapping-path fiber is homotopy commutative, so its own multiplication makes its homology a connected graded-commutative and graded-cocommutative Hopf algebra. The rational Hopf decomposition therefore identifies that actual homology algebra with Sym_gr((A_n⊗Q)[n]). Its generators are the Hurewicz classes, primitive because the diagonal of an n-sphere has only its two endpoint terms. Retain the construction of step 3.1. [F3, F5, F6, F7, F8, F9, construct, algebra, step 3.1]

5.1 Fix n and inductively suppose the rational homology algebra of P_(n−1) is freely graded commutative on finitely many spherical primitive generators in degrees 1,…,n−1, with one basis in degree j for π_j(X)⊗Q. The base case P_0 is Q concentrated in degree zero. The Serre local system on H_q(F_n;Q) is trivial by step 2. Rational Künneth for the base and fiber in the needed finite range follows by the finite-rank free chain approximations used in the finite-homotopy carrier: choose finitely many cycles and bounding witnesses in each of the finitely many degrees for one prescribed total degree. The homological Serre E²-page is the graded tensor product H_*(P_(n−1);Q)⊗H_*(F_n;Q). Its product is induced by the H-space multiplication of the mapping-path fibration; the map of product fibrations and the chain cross product make each differential a graded derivation. Retain the construction of step 4.1. [F3, F4, construct, algebra, step 4.1]

6.1 The fiber has no positive homology below n. Thus no differential d_r with 2≤r≤n can occur. Base generators lie in bidegree (j,0), j<n, so every d_r with r≥n+1 has negative target filtration on them. Fiber generators lie in bidegree (0,n), so no outgoing differential is possible. All E² classes are products of these generators, hence every differential is zero by the derivation rule. The same argument shows no generator is killed by an incoming differential: every potential source is itself a polynomial in the generators and has zero differential. The E∞ page is therefore E². Retain the construction of step 5.1. [F4, construct, algebra, step 5.1]

7.1 For each of the finitely many lower-degree generators, choose one spherical representative in P_(n−1). The stage map is an isomorphism on π_j for j<n, so choose a lift in E_n. Also take spherical representatives of a basis of A_n⊗Q in F_n and map them into E_n. Their Hurewicz classes are primitive, and their associated-graded classes are respectively the base and fiber algebra generators. They define an algebra map from the free graded-symmetric algebra on the finite collection to H_*(E_n;Q). On every fixed total degree the Serre filtration is finite and this map is an isomorphism on its associated graded. Finite filtration induction gives an isomorphism, with no hidden extensions. Each choice is a finite list for this fixed n. This proves the induction and shows the primitives are exactly the spherical generators: the graded symmetric Hopf algebra on primitive generators has no others in characteristic zero, by its finite Eulerian-logarithm projection or by polarization of a polynomial of tensor length ≥2. Retain the construction of step 6.1. [F9, construct, algebra, step 6.1]

8.1 The map |Sing X|→P_n induces an isomorphism on π_i for i≤n and has n-connected homotopy fiber. The choice-free first Hurewicz comparison on a canonical CW weak model makes that fiber's integral homology vanish in degrees 1,…,n; tensoring the singular chain complex with Q preserves the finite exact chain witnesses: clear the finitely many denominators of one rational chain and its integral bounding chain, then divide the boundary by their common nonzero denominator. The homological Serre sequence for its mapping-path replacement gives an isomorphism H_i(X;Q)→H_i(P_n;Q) for i≤n. The map is an H-map, so the isomorphism in degrees ≤n preserves the diagonal and detects primitives in degree n. Natural Hurewicz and the inductive calculation on P_n identify π_n(X)⊗Q with those primitives. The zero group, n=1, torsion summands of A_n and finite-dimensional degreewise duals are included in the construction. Retain the construction of step 7.1. [F4, F5, F6, construct, algebra, discharge-construct, step 7.1] ∎

