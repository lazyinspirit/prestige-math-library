---
id: thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives
kind: theorem
title: "Generic KLR induction and restriction adjunctions preserve projectives"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-klr-induction-and-restriction-bimodules, thm-klr-pbw-basis-theorem, thm-bimodule-tensor-exactness-and-projective-preservation, thm-graded-bimodule-tensor-hom-adjunction, def-graded-balanced-tensor-product-and-homogeneous-hom, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: '§2.6, Proposition 2.16 (freeness with staircase basis), Corollary 2.17 (restriction preserves projectives), Propositions 2.18-2.19 (Mackey/restriction formula), Lemma 2.20, printed pp. 31-34.'
    - title: 'Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4 (42 pages)'
      url: 'https://arxiv.org/pdf/1102.4677'
      locator: '§3, (3.11)-(3.12) and Theorem 3.6 with its proof, printed pp. 12-14: exactness, the adjunction $\mathrm{Hom}(F_iM,N)\cong\mathrm{Hom}(M,E_iN)$, and the biadjoint statement.'
    - title: 'Ben Webster, Knot Invariants and Higher Representation Theory I, arXiv:1001.2020v9 (62 pages)'
      url: 'https://arxiv.org/pdf/1001.2020'
      locator: '§1.3, Theorem 1.8 and Remark 1.9 with the proof, printed pp. 18-20: the closing-diagram Frobenius trace, its symmetric adjustment, and biadjointness of $E_j,F_j$.'
    - title: 'Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3 (66 pages)'
      url: 'https://arxiv.org/pdf/0812.5023'
      locator: '§2.3.2, printed pp. 10-13: Frobenius forms over a base algebra and their equivalence with adjunctions of restriction/induction; §3.1.7: the symmetrizing form for the nil affine Hecke algebra.'
    - title: 'Aaron D. Lauda and Monica Vazirani, Crystals from categorified quantum groups, arXiv:0909.1810v2'
      url: 'https://arxiv.org/pdf/0909.1810'
      locator: '§2.2-§2.3, PDF pp. 12-16, Theorem 2.2 and equations (2.3)-(2.11): longest-shuffle coinduction map; the grading shift is stated in the proof, not displayed in part (2).'
---

## Statement

Let $Q$ be a KLR datum as in [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] and $\beta,\gamma\in Q_+$. Put $A=R(\beta+\gamma)$, $B=R(\beta)\otimes_kR(\gamma)$, $e=e(\beta,\gamma)$ and $c=(\beta\mid\gamma)$. The bimodules $eA$ and $Ae$ are ungraded free respectively as left and right $B$-modules, of rank $\binom{|\beta|+|\gamma|}{|\beta|}$. As GRADED modules they are finite projective direct sums of the appropriate principal idempotent $B$-modules with labelled shuffle shifts: for each concatenated word $\xi=\nu\ast\eta$ the right-module summand $e(\xi)B$ has shift $\delta_R(w,\xi)=\deg(\tau_we(\xi))$ and the left-module summand $Be(\xi)$ has shift $\delta_L(w,\xi)=\deg(e(\xi)\tau_w)=\delta_R(w,w^{-1}\xi)$, using respectively the corresponding right and left minimal shuffle representatives $w$; these degrees depend on the labels, and no common shift for an entire $B$ copy is asserted. The functors $\mathrm{Ind}=Ae\otimes_B-$ and $\mathrm{Res}=e(-)$ of [[def-klr-induction-and-restriction-bimodules]] are exact, commute with internal shifts, and preserve finitely generated graded projectives. $\mathrm{Ind}$ is left adjoint to $\mathrm{Res}$. The right adjoint of $\mathrm{Res}$ is $\mathrm{Coind}=\operatorname{HOM}_B(eA,-)$, with $(a\cdot f)(t)=f(ta)$, and the exact generic second-adjunction formula is
$$\mathrm{Coind}_{\beta,\gamma}(M\boxtimes N)\cong\mathrm{Ind}_{\gamma,\beta}(N\boxtimes M)\{c\}.$$
Thus the second adjunction reverses the two blocks and has the displayed shift; same-ordered unshifted biadjunction is not asserted. The formula is an isomorphism of functors and holds on arbitrary graded $B$-modules after interpreting the right side with the block-flip equivalence. This is distinct from the cyclotomic $E_i/F_i$ biadjunction theorem. Moreover $eR(\beta+\gamma)e'$ has a finite Mackey filtration indexed by nonnegative four-block weight matrices with row sums $\beta,\gamma$ and column sums $\beta',\gamma'$, whose subquotient is the corresponding composite four-block restriction, flip of the middle blocks and induction bimodule, shifted by $-(b\mid c)$; the same statement holds for arbitrary numbers of blocks.

## Facts & Assumptions

**Given:** A KLR datum $Q$, weights $\beta,\gamma\in Q_+$, the algebra $A=R(\beta+\gamma)$ with idempotent $e=e(\beta,\gamma)$, the tensor algebra $B=R(\beta)\otimes_kR(\gamma)$, the bimodules $eA$ and $Ae$, and the functors $\mathrm{Ind}=Ae\otimes_B-$, $\mathrm{Res}=e(-)$ of [[def-klr-induction-and-restriction-bimodules]].

[F1] PBW basis ([[thm-klr-pbw-basis-theorem]]): monomials $\tau_wx_1^{a_1}\cdots x_n^{a_n}e(\nu)$ form a basis; every permutation $w$ has a unique decomposition $w=w_Pw_{\text{shuffle}}$ as a product of a parabolic element of $S_{|\beta|}\times S_{|\gamma|}$ and a minimal-length shuffle, with additive length.

[F2] Exactness and projectives ([[thm-bimodule-tensor-exactness-and-projective-preservation]]): if $M$ is flat as an underlying right $A$-module then $M\otimes_A-$ is exact on graded left modules; if $M$ is finite graded projective as a left $B$-module then $M\otimes_A-$ carries finite graded projective left $A$-modules to finite graded projective left $B$-modules.

[F3] Tensor-Hom adjunction ([[thm-graded-bimodule-tensor-hom-adjunction]]): $\operatorname{Hom}_{B,0}(M\otimes_AX,Y)\cong\operatorname{Hom}_{A,0}(X,\operatorname{HOM}_B(M,Y))$ naturally, with $\operatorname{HOM}$ the graded hom of finite sums of homogeneous maps.

[F4] Shifts ([[def-graded-balanced-tensor-product-and-homogeneous-hom]]): the balanced tensor product carries the total-degree internal grading, and outer actions by graded algebras are homogeneous; all shifts below are internal shifts.

## Proof

**Proof technique:** direct; decompose $Ae$ as a right block module and $eA$ as a left block module, then establish exactness, projectivity, adjunctions and the double-coset filtration.

1.1 (Shuffle decomposition and freeness.) Choose reduced PBW words adapted to the parabolic subgroup $S_{|\beta|}\times S_{|\gamma|}$. For each concatenated word $\xi=\nu\ast\eta$ and minimal right coset representative $w$, the vectors $\tau_we(\xi)b$, with $b$ ranging through the PBW basis of $e(\xi)B$, form precisely the PBW basis of the right $B$-module $Ae$: the permutation is a minimal shuffle followed by an internal block permutation, with additive length, and the right idempotent records the source word in the corner $e$. Thus $Ae\cong\bigoplus_{w,\xi}e(\xi)B\{\delta_R(w,\xi)\}$, with the displayed degree of $\tau_we(\xi)$. Reversal of products fixing dots, crossings and idempotents preserves the defining relations and is an anti-involution; it sends $Ae$ to $eA$ and $\tau_we(\xi)$ to $e(\xi)\tau_{w^{-1}}$, giving the left $B$-module decomposition of $eA$ into the corresponding $Be(\xi)$ with shifts $\delta_L(w,\xi)=\deg(e(\xi)\tau_w)$. Both decompositions are finite sums of principal graded projectives. Ungraded, for each shuffle the sum over all concatenated $\xi$ is one copy of $B$, so both ranks are $\binom{|\beta|+|\gamma|}{|\beta|}$. Neither bimodule is replaced by $eAe$: its unconstrained opposite endpoint is essential for the shuffle basis. [given, F1, algebra]

1.2 (Left adjunction.) For a graded left $B$-module $X$ and a graded left $A$-module $L$, currying gives the natural degree-zero bijection $\operatorname{Hom}_{A,0}(Ae\otimes_BX,L)\to\operatorname{Hom}_{B,0}(X,eL)$, $\Phi\mapsto(x\mapsto\Phi(e\otimes x))$, with inverse $f\mapsto(ae\otimes x\mapsto a\,f(x))$, well defined on balanced tensors and inverse by the idempotence of $e$; this is the adjunction of [F3] for the $(A,B)$-bimodule $Ae$. [given, F3, algebra]

2.1 (Exactness and projectivity.) The right $B$-module $Ae$ is projective, hence flat, by step 1.1, so $\mathrm{Ind}=Ae\otimes_B-$ is exact by [F2]. Idempotent restriction is exact on left modules: for a surjection $L\to N$, a vector $en\in eN$ lifts to $e\ell\in eL$, and kernels and images commute with multiplication by the degree-zero idempotent $e$; no right action on $L$ is required. A finitely generated graded projective left $B$-module is a summand of a finite sum of shifts of $B$, so its induction is a summand of the corresponding sum of shifts of $Ae$. As a left $A$-module $Ae$ is the image of the degree-zero idempotent endomorphism $a\mapsto ae$ of $A$, hence is finitely generated graded projective. Similarly, if $P$ is a finitely generated graded projective left $A$-module, realize $P$ as a summand of a finite sum of shifts of $A$ and apply $e(-)$ to its split inclusion and projection. Then $eP$ is a summand of the corresponding sum of shifts of $eA$, which is finitely generated graded projective as a left $B$-module by step 1.1. Internal shifts commute with induction and restriction because their balance relations and idempotent action have degree zero. This proves exactness, shift compatibility and both finite-projective preservation clauses. [step 1.1, F2, F4, algebra]

2.2 (Coinduction and the longest shuffle.) The right adjoint of $\mathrm{Res}$ is $\mathrm{Coind}=\operatorname{HOM}_B(eA,-)$ by [F3] applied to $M=eA$, and explicit currying gives $(a\cdot f)(t)=f(ta)$. For the second-adjunction formula let $y$ be the longest block shuffle of the two blocks, of degree $-c$ (each of the $|\beta||\gamma|$ crossed positions contributes the negative pairing of the two colours), and let $e'=e(\gamma,\beta)$ be the reversed-block idempotent. By PBW there is a well-defined $B$-balanced coefficient map $t:eAe'\to B$ projecting onto the $y$-coefficient, where the reversed block order is read in $B$ through the flip equivalence $R(\beta)\otimes_kR(\gamma)\to R(\gamma)\otimes_kR(\beta)$; dot slides and block crossings preserve the longest-shuffle coefficient, while every dot or braid correction in a shorter shuffle has strictly smaller shuffle length and is killed by $t$. Hence the map $\Phi:Ae'\to\operatorname{HOM}_B(eA,B)$, $z\mapsto(u\mapsto t(uz))$, is a degree-$c$ map of $(A,B)$-bimodules, and it is compatible with the flip identification. [step 1.1, F1, F3, algebra]

2.3 (Mackey filtration.) Fix a second flag with idempotent $e'=e(\beta',\gamma')$ and choose reduced double-coset representatives for the row block permutation group and the column block permutation group acting on the $|\beta|+|\gamma|$ positions. Partition the PBW monomials of the corner $eAe'$ by the four intersection blocks $(a,b;c,d)$ with row sums $\beta,\gamma$ and column sums $\beta',\gamma'$, and filter by the crossing length of the double-coset representatives. The span of the double cosets of strictly smaller length is a $(B,B')$-sub-bimodule: sliding a block generator across a representative either stays in its double coset with an internal block permutation, or produces a quadratic/braid correction of strictly smaller length, which lies in the smaller span. In the associated quotient only the monomials whose permutation is the minimal double-coset representative survive; they are exactly tensor products of the PBW bases of the four blocks composed with the row and column induced bimodules and the unique minimal crossing of the two middle blocks, which carries the shift $-(b\mid c)$ because the crossed colours are precisely $b$ and $c$. The basis bijection defines inverse maps between the associated quotient and the composite four-block restriction/induction bimodule, so the filtration is proved and not merely a character identity; iterating the same permutation argument gives the multi-block statement. [step 1.1, F1, algebra]

3.1 (Triangularity and the functor formula.) Pair the right $B$-module shuffle basis of $Ae'$ (through the block flip) with the left $B$-module shuffle basis of $eA$ by complementary shuffles. Ordered by shuffle length, the coefficient matrix of the pairing $u\mapsto t(uz)$ is triangular: a complementary pair is exactly the reduced longest shuffle with coefficient $1$ up to the absorbed equal-colour signs, and a noncomplementary pair either misses its permutation or reduces by a quadratic or braid correction to strictly smaller length, hence vanishes in the associated graded. Finite triangular elimination over $B$ (division by the diagonal units $1$) inverts the matrix, so $\Phi$ is an isomorphism of graded $(A,B)$-bimodules; consequently $\operatorname{HOM}_B(eA,B)\cong Ae'\{c\}$ with the $B$-action transported by the block flip. Since $eA$ is finite projective over $B$ by step 1.1, evaluation identifies $\operatorname{HOM}_B(eA,B)\otimes_BX\cong\operatorname{HOM}_B(eA,X)$ for every graded $B$-module $X$ (checked on finite free modules and finite summands), and tracking the outer right $B$-action through the flip gives the functorial isomorphism $\mathrm{Coind}_{\beta,\gamma}(M\boxtimes N)\cong\mathrm{Ind}_{\gamma,\beta}(N\boxtimes M)\{c\}$. [step 2.2, F1, F3, algebra]

4.1 All clauses of the statement are now proved: step 1.1 gives the freeness and the labelled shuffle shifts, step 2.1 the exactness, shift compatibility and projective preservation, step 1.2 the left adjunction, steps 2.2 and 3.1 the right adjoint and its exact reversed-block formula, and step 2.3 the finite Mackey filtration and its multi-block version. [step 1.1, step 2.1, step 1.2, step 2.2, step 3.1, step 2.3, algebra] ∎
