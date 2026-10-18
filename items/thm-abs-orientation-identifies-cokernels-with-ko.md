---
id: thm-abs-orientation-identifies-cokernels-with-ko
kind: theorem
title: The actual ABS symbol identifies graded Clifford cokernels with KO
status: published
origin: pipeline
deps:
- def-abs-cokernel-and-clifford-symbol
- lem-real-clifford-restriction-matrices
- thm-real-bott-periodicity-from-rank-eight-clifford-thom
- thm-ko-coefficient-table-and-eightfold-periodicity
- thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp
- lem-real-and-symplectic-clutching-groups-in-low-degrees
- lem-reduced-relative-ko-suspension-exactness-and-product
- def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Atiyah–Bott–Shapiro, Clifford Modules, section 11, especially proposition
      11.1
    url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 16
---

## Statement

Assume AC. For $M=M^0\oplus M^1$ a graded real $C_n=\mathrm{Cl}_{0,n}$
module, let $a_M(v)=c(v)|_{M^0}:M^0\to M^1$. Its disk/sphere triple
$(\pi^*M^0,\pi^*M^1,a_M)$ gives $s_n(M)\in\widetilde{KO}^0(S^n)$.
For $n=0$ this means the even-minus-odd virtual vector space on $S^0$.
Then

$$\ker s_n=\operatorname{im}(r_n),\qquad \alpha_n:A_n\xrightarrow{\cong}KO^{-n}(\mathrm{pt}).$$

The maps are multiplicative under the graded tensor product. The chosen
degree-eight algebraic generator maps to the same $\beta$ that supplies
real Bott periodicity; no ABS theorem assuming preexisting periodicity
is a premise.

## Facts & Assumptions

**Given:** AC, the graded negative-square modules and the stated direction of
the symbol map. The triple denotes source-minus-target as usual.

[F1] The theorem [[lem-real-clifford-restriction-matrices]] proves the
restriction matrices, their cokernels and algebraic eightfold tensor
periodicity, without assuming any KO theorem.

[F2] The real Bott theorem
[[thm-real-bott-periodicity-from-rank-eight-clifford-thom]] is product by the
irreducible volume-graded $C_8$ symbol $\beta$ for finite CW pairs and all
degrees. The coefficient theorem
[[thm-ko-coefficient-table-and-eightfold-periodicity]] gives
$\mathbb Z,\mathbb Z/2,\mathbb Z/2,0,\mathbb Z,0,0,0$ in degrees
$0,-1,\ldots,-7$. This proposal depends on their actual completion.

[F3] The low-clutching theorem
[[lem-real-and-symplectic-clutching-groups-in-low-degrees]] identifies the
reflection clutching on $S^0$ with the nonzero class on $S^1$, and the
one-turn rotation loop in $SO(2)$ with the nonzero stable $\pi_1(O)$ class.

[F4] The rank-four/rank-eight Spin Thom theorem
[[thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp]] uses the
same ungraded irreducible module with its volume grading, and sends the
quaternionic or real trivial line to a generator at a point.

[F5] Relative triples, homotopy, excision, and the relative tensor product
are supplied by [[lem-reduced-relative-ko-suspension-exactness-and-product]].



**Proof technique:** explicit symbols and finite-dimensional bundle constructions.

## Proof

**Proof technique:** direct construction.

1.1 Choose invariant inner products on the finite-dimensional modules. One elementary construction averages over the finite group of signed Clifford monomials; each generator then acts orthogonally and, since its square is $-1$, skew-adjointly. Consequently $a_M(v)$ is invertible when $v\ne0$ with inverse $-c(v)|_{M^1}/\lVert v\rVert^2$. The triple is therefore defined on the disk/sphere pair. Isomorphic modules give isomorphic triples, direct sums give sums, and interpolation between invariant metrics is harmless since the symbol itself does not depend on the metric. This defines the homomorphism $s_n$ on $M_n$. [given, F5, construct]


1.2 At $n=2$, put $M^0=M^1=\mathbb R^2$, let $J=\left(\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\right)$, and take $c(e_1)=\left(\begin{smallmatrix}0&-I\\I&0\end{smallmatrix}\right)$, $c(e_2)=\left(\begin{smallmatrix}0&J\\J&0\end{smallmatrix}\right)$. Both square to $-I$ and their anticommutator is zero. The even part has the irreducible $C_1$ action $-J$, so this is the graded simple in [F1]. Its sphere map is $xI+yJ$, the one-turn $SO(2)$ rotation. As a complex one-dimensional map this is multiplication by $x+iy$, so its relative class is the underlying real class of the complex Hopf-line symbol. By [F3] the loop remains nonzero after stable inclusion in $O$. Thus $\alpha_2$ is nonzero and is an isomorphism between the two $\mathbb Z/2$ groups. [F1, F2, F3, algebra]


1.3 At $n=4$ take the irreducible ungraded $C_4=M_2(\mathbb H)$ column module and grade it by the volume involution; call this graded module $Q$. Its two parts have real dimension four. Its even part is one of the two simple $C_3$ modules, so it gives a cokernel generator in [F1]. Its relative symbol is literally the rank-four spinor symbol in [F4] at a point. The quaternionic Morita unit is one right-$\mathbb H$ line, so [F4] sends its class to this symbol and proves it is a generator of $\widetilde{KO}(S^4)=\mathbb Z$. Fix the choice of split-row sign by this volume convention. No inference from real dimension four to generation is being made. [F1, F4, algebra]


1.4 At $n=8$ take the module $B$ of [F1] with the volume grading. Its symbol is the same irreducible real spinor symbol used to define $\beta$ in [F2] and [F4]. Both constructions must use even-to-odd multiplication by $c(v)$ with the same volume sign. In particular the geometric map here is the plus-minus symbol $\Phi=-\Psi_{EH}$ under EH's north-section subtraction convention; reversing the boundary arrow while also swapping the two bundles negates a source-minus-target triple. Thus $\alpha_8([B])=\beta$, not merely a class with the same rank or complexification. [F1, F2, F4, algebra]


2.1 If $M$ is restricted from a graded $C_{n+1}$-module with extra generator $e$, the sphere isomorphism extends over the entire disk by $c(v)+\sqrt{1-\lVert v\rVert^2}\,c(e)$, restricted from even to odd. The square of the full odd endomorphism is $-1$, since the cross terms cancel and $\lVert v\rVert^2+(1-\lVert v\rVert^2)=1$. It is continuous even at the boundary and agrees there with $c(v)$. An everywhere invertible triple is zero. At $n=0$ this also says that equal even and odd dimensions have zero difference. Thus $\operatorname{im}r_n\subseteq\ker s_n$ and $\alpha_n$ is defined. [F5, step 1.1, algebra]


2.2 Write $E=E^0\oplus E^1$, $F=F^0\oplus F^1$ and denote the grading operator on $E$ by $\Gamma_E$. The total symbol is $D(v,w)=c_E(v)\otimes1+\Gamma_E\otimes c_F(w)$. The two summands anticommute, so $D^2=-(\lVert v\rVert^2+\lVert w\rVert^2)$. Its even space is $E^0F^0\oplus E^1F^1$ and odd space is $E^1F^0\oplus E^0F^1$, with tensor signs understood. If $a=c_E(v)|_{E^0}$ and $b=c_F(w)|_{F^0}$, its even-to-odd block is $\left(\begin{smallmatrix}a\otimes1&1\otimes b^*\\1\otimes b&-a^*\otimes1\end{smallmatrix}\right)$. This is exactly the skew-adjoint totalization of the two two-term complexes $E^0\xrightarrow{a}E^1$ and $F^0\xrightarrow{b}F^1$: their differentials are extended by zero, the total differential is $d_E\otimes1+\Gamma_E\otimes d_F$, and subtraction of its adjoint gives $D$. [step 1.1, algebra]


3.1 This totalization represents their relative product. Explicitly, in the displayed even/odd order the self-adjoint product operator of [F5] has block $P=\left(\begin{smallmatrix}a\otimes1&-1\otimes b^*\\1\otimes b&a^*\otimes1\end{smallmatrix}\right)$, whereas the skew-adjoint Clifford block is $P\operatorname{diag}(I,-I)$. The second factor is a globally defined automorphism of the total even bundle, so these triples are isomorphic, without any sign change of their relative class. To see the relative point explicitly, if $a$ or $b$ is invertible the corresponding two-term complex is contractible; its contracting inverse, tensored with the other complex with the indicated grading sign, contracts the total complex. On the boundary of the product of disks, $D$ itself has the continuous contracting inverse $-D/(\lVert v\rVert^2+\lVert w\rVert^2)$. Thus passing from the tensor complex to its even/odd triple is compatible with the trivializations required for the relative tensor product [F5]. Excision and radial rescaling identify the product of disks with the round disk of $\mathbb R^{n+m}$ as pairs; $D$ is invertible throughout the intervening annulus. The resulting relative class is the symbol for $E\widehat\otimes F$. Hence $s_{n+m}(E\widehat\otimes F)=s_n(E)\boxtimes s_m(F)$. If $E$ extends by one generator, $E\widehat\otimes F$ also extends, using that generator on the first factor. Consequently restriction images form an ideal, and the product descends to the $A_n$. [F5, step 2.1, step 2.2, algebra]


3.2 At $n=0$, $s_0(a,b)=a-b$, whose kernel and quotient are precisely the diagonal and $\mathbb Z$ in [F1]. At $n=1$, choose $M^0=M^1=\mathbb R$ and $c(e_1)=\left(\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\right)$. Its symbol on the two boundary points is $+1$ and $-1$. Clutching two trivial lines on two arcs by these signs gives the Möbius line: following a nonzero vector once around the circle reverses its sign. The reduced class is the nonzero stable class in [F3]. The unique simple therefore maps to the generator of $\mathbb Z/2$. [F1, F2, F3, step 2.1, algebra]


4.1 For $n=3,5,6,7$, both the cokernel and KO coefficient vanish by [F1] and the independently supplied [F2]. Together with step 1.2, step 1.3 and step 3.2 this proves the actual $\alpha_n$ is an isomorphism for $0\le n<8$. Multiplication by $[B]$ is an isomorphism $A_n\to A_{n+8}$ by [F1], and multiplication by $\beta$ is an isomorphism on KO by [F2]. Steps 3.1 and 1.4 make these two period maps commute with $\alpha$. Induction therefore proves the assertion in all degrees $n\ge0$. Since $\alpha_n$ is injective and $s_n$ is its composite with the quotient, the reverse inclusion $\ker s_n\subseteq\operatorname{im}r_n$ also follows. This identifies the full kernel, not just a vanishing subgroup, and finishes the multiplicative comparison. [F1, F2, step 3.1, step 3.2, step 1.2, step 1.3, step 1.4, algebra] ∎
