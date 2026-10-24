---
id: thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations
kind: theorem
title: "The KLR Grothendieck ring satisfies the divided-power quantum Serre relations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives, def-divided-power-klr-idempotents-and-projectives, lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases, lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head, def-split-grothendieck-group-of-an-additive-category, def-graded-grothendieck-group-shift-module-and-cartan-map, thm-adjoint-exact-functors-induce-adjoint-grothendieck-operators, def-drinfeld-jimbo-quantized-enveloping-algebra, def-quantum-integers-factorials-and-divided-powers-at-q-i, def-positive-negative-and-toral-quantum-subalgebras, def-lusztig-divided-power-integral-form, thm-triangular-decomposition-of-a-quantized-enveloping-algebra, def-klr-induction-and-restriction-bimodules, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Raphael Rouquier, 2-Kac-Moody Algebras'
      url: 'https://arxiv.org/pdf/0812.5023'
      locator: 'Lemma 3.13, printed pp. 27-28: indexed contraction maps and the extremal-coefficient computation; the native divided-difference signs and grading shifts are computed locally.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: 'Propositions 3.1-3.4 and their proofs, printed pp. 34-38: the induction algebra, the restriction coalgebra, the pairing adjunctions, the relations $[P_{ij}]=[P_{ji}]$ ($i\cdot j=0$) and $[P_{iji}]=[P_{i(2)j}]+[P_{ji(2)}]$ ($i\cdot j=-1$), and the descent to $\gamma:Af\to K_0(R)$.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups II, Transactions of the AMS 363 (2011) 2685-2700, arXiv:0804.2080v1'
      url: 'https://arxiv.org/pdf/0804.2080'
      locator: '§3, Proposition 6 and Corollary 7 with the proof, printed pp. 12-14: the categorical quantum Serre isomorphisms for an arbitrary Cartan datum.'
    - title: 'Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, Bulletin of the AMS 47 (2010) 419-481 (survey), arXiv:0909.4844'
      url: 'https://arxiv.org/pdf/0909.4844'
      locator: '§9.1, Theorem 9.1, printed pp. 39-40: the isomorphism $\gamma:Af\to[\mathrm{Proj}(H^\infty)]$ and its compatibility with induction, restriction, comultiplication and the bar involution.'
    - title: 'Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4 (42 pages)'
      url: 'https://arxiv.org/pdf/1102.4677'
      locator: '§3, Theorem 3.6 and Corollary 3.4 with proof, printed pp. 12-14: the categorical $\mathfrak{sl}_2$ relations used for the multiple-edge case.'
---

## Statement

Let $Q$ be a KLR datum as in [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] and let $K_0(R):=\bigoplus_{\beta\in Q_+}K_0(R(\beta))$ be the split Grothendieck group of finite graded projective modules with the shift action $q[P]=[P\{1\}]$ ([[def-split-grothendieck-group-of-an-additive-category]], [[def-graded-grothendieck-group-shift-module-and-cartan-map]], [[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]]).
(i) The induction product $[P][P']:=[\mathrm{Ind}_{\beta,\gamma}(P\boxtimes P')]$ for $P\in K_0(R(\beta)),P'\in K_0(R(\gamma))$ makes $K_0(R)$ a unital associative $\mathbb Z[q,q^{-1}]$-algebra, and $[\mathrm{Res}]$ makes it a coassociative counital $\mathbb Z[q,q^{-1}]$-coalgebra; with the twisted multiplication on $K_0(R)\otimes K_0(R)$ defined by $(x_1\otimes x_2)(x_1'\otimes x_2')=q^{-(|x_2|\mid|x_1'|)}x_1x_1'\otimes x_2x_2'$ on homogeneous elements, $[\mathrm{Res}]$ is an algebra homomorphism ([[thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]]).
(ii) With the divided-power projectives $P_{i,n}$ of [[def-divided-power-klr-idempotents-and-projectives]], the classes $[P_{i,n}]$ satisfy, for all $i\ne j$, the divided-power quantum Serre relation
$$\sum_{a+b=-a_{ij}+1}(-1)^a[P_{i,a}]\,[P_{j,1}]\,[P_{i,b}]=0\qquad\text{in }K_0(R),$$
with the convention $[P_{i,0}]=1$, and satisfy $[P_{i,1}][P_{j,1}]=[P_{j,1}][P_{i,1}]$ when $a_{ij}=0$; these are the defining relations of the negative half.
(iii) Consequently the assignment $\theta_i\mapsto[P_{i,1}]$ extends uniquely to an algebra homomorphism $\gamma:Af\to K_0(R)$ of the divided-power form of the negative half, with $\gamma(\theta_i^{(n)})=[P_{i,n}]$ and $\gamma(\theta_{i_1}^{(n_1)}\cdots\theta_{i_r}^{(n_r)})=[\mathrm{Ind}(P_{i_1,n_1}\boxtimes\cdots\boxtimes P_{i_r,n_r})]$; $\gamma$ is compatible with the coproducts ($r$ on $Af$ and $[\mathrm{Res}]$ on $K_0(R)$) and with the bar involutions, and it is $\mathbb Z[q,q^{-1}]$-linear.

## Facts & Assumptions

**Given:** A KLR datum $Q$, its divided-power projectives $P_{i,n}$ of [[def-divided-power-klr-idempotents-and-projectives]], the induction and restriction functors with their exactness, adjunction and Mackey filtration of [[thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]], and the negative half $Af$ with divided powers $\theta_i^{(n)}$ of [[def-lusztig-divided-power-integral-form]] and [[def-quantum-integers-factorials-and-divided-powers-at-q-i]].

[F1] Corner filtration ([[thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]]): $e_{\beta,\gamma}R(\beta+\gamma)e_{\beta',\gamma'}$ has a finite Mackey filtration indexed by four-block weight matrices whose subquotient is the composite four-block restriction, middle flip and induction bimodule, shifted by the negative pairing of the crossed blocks; Ind is left adjoint to Res and both are exact.

[F2] Presentation of the negative half ([[def-lusztig-divided-power-integral-form]]): $U_A^-$ is the $A$-subalgebra generated by the divided powers $F_i^{(r)}$, with the Serre relations; the $A$-form is spanned by ordered divided words, not by an ordinary free algebra on the $F_i$.

[F3] The negative half over $\mathbb Q(q)$ is exactly the algebra presented by the negative Serre relations ([[thm-triangular-decomposition-of-a-quantized-enveloping-algebra]], clause (ii)); $U_A^-$ is its $A$-subalgebra generated by divided powers. No integral shuffle-freeness claim is taken from the formal $\mathbb C\llbracket\hbar\rrbracket$ theorem.

## Proof

**Proof technique:** direct; build the induction algebra and restriction coalgebra, then the contracting homotopy for the Serre relation, then descend $\gamma$.

1.1 (Induction algebra and restriction coalgebra.) The induction product is associative and unital: the balanced identifications of [[def-klr-induction-and-restriction-bimodules]] for the two parenthesizations of three blocks are inverse degree-zero isomorphisms, and the unit is $[R(0)]=[k]$. For the block algebra $B$, the positive-center quotient is the tensor product of the two finite-dimensional graded quotients from [[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]]. Their simples are absolutely simple by [[lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head]], so their graded semisimple quotients are products of split graded matrix algebras. Tensoring these matrix blocks gives all simple shift orbits of $B$; tensor products of the factor projective covers cover them, by reducing their kernels and using the graded least-degree argument. Uniqueness of covers therefore identifies $K_0(B)$ with $K_0(R(\beta))\otimes_AK_0(R(\gamma))$. Restriction is coassociative with counit the weight-zero component, because iterated idempotent restriction multiplies the corresponding block idempotents, and the two orders of multiplication agree. To prove that $[\mathrm{Res}]$ respects the twisted multiplication, apply the Mackey filtration [F1] to the corner $e_{\beta,\gamma}Re_{\beta',\gamma'}$: PBW partitions its basis by the double cosets of the two block permutation groups, ordered by crossing length, and multiplication across a braid move changes only smaller-length terms; the associated quotient is exactly the four-block restriction/induction bimodule shifted by minus the root pairing of the two crossed middle blocks. Taking classes gives $[\mathrm{Res}](xy)=\sum q^{-(|y_2|\mid|x_1'|)}x_1x_1'\otimes x_2x_2'$ with the twisted product, so $[\mathrm{Res}]$ is an algebra homomorphism; no use of the second adjunction is needed. [given, F1, algebra]

2.1 (Explicit Serre contraction.) Fix $i\ne j$, write $d=-a_{ij}$, $D=d+1$, $N=d+2$, and $t=[u^d]Q_{ij}\ne0$. For $0\le r\le D$, let $E_r$ be the product of the reflected nil-Hecke idempotents on the two $i$-blocks in $i^rji^{D-r}$, let $s_r=-d_i(\binom r2+\binom{D-r}2)$, and put $C_r=R E_r\{s_r\}$. Use right multiplication by $a_r=E_r\tau_{N-1}\cdots\tau_{r+1}E_{r+1}$ for $C_r\to C_{r+1}$ and by $b_r=E_{r+1}\tau_1\cdots\tau_{r+1}E_r$ in the reverse direction. Each string crosses $j$ once and respectively $D-r-1$ or $r$ equal-color pairs, so its degrees are $d_id-2d_i(D-r-1)$ and $d_id-2d_ir$. As $s_{r+1}-s_r=d_i(D-2r-1)$, both maps have degree zero between the shifted columns. The nil-Hecke identities $\tau_aE_r=0$ for equal-color crossings internal to its divided blocks and the braid moves give $a_{r-1}a_r=0$. At corner $r$, put $L_r=a_rb_r$, $R_r=b_{r-1}a_{r-1}$, with absent endpoint terms zero. Moving far crossings cancels the common strings in $L_r-R_r$; the remaining braid correction is the divided difference of $Q_{ij}$. For a monomial $u^av^b$ its correction is the sum of $a$ monomials of combined outer degree $a-1$, with the native minus sign. The $r-1$ left and $D-r-1$ right equal-color divided differences kill it unless $a\ge d$; homogeneity permits $a=d$ only when $b=0$, and permits no $a>d$. For $a=d$ exactly the staircase exponents $r-1,D-r-1$ survive, each evaluated by the nil-Hecke trace calculation of [[def-divided-power-klr-idempotents-and-projectives]]; transporting the variable order on the left block gives $L_r-R_r=(-1)^rtE_r$, including endpoints. Thus $h_r=(-1)^rt^{-1}b_r$ satisfies $a_rh_r+h_{r-1}a_{r-1}=E_r$ on every corner. These degree-zero maps contract the finite complex $(C_r,a_r)$ over every field and every (Q1)–(Q4) parameter. [step 1.1, algebra, construct]

3.1 (Alternating classes and the $a_{ij}=0$ case.) A bounded complex with $dh+hd=1$ is split contractible: choosing the successive splittings gives a contraction with $h^2=0$, and then $d+h$ is an isomorphism from even to odd part; hence the alternating sum of the classes of its terms vanishes, which is exactly $\sum_{a+b=D}(-1)^a[P_{i,a}][P_{j,1}][P_{i,b}]=0$, the displayed Serre relation. If $a_{ij}=0$ then the crossing $\tau$ of the two colours is invertible (its square is the nonzero constant $Q_{ij}$), and right multiplication by it gives a degree-zero isomorphism between the two corners, so $[P_{i,1}][P_{j,1}]=[P_{ij}]=[P_{ji}]=[P_{j,1}][P_{i,1}]$. [step 2.1, algebra]

4.1 (Descent of $\gamma$.) First define $\gamma$ over $\mathbb Q(q)$ from the presentation of the negative Serre half: [F3] identifies the Serre-presented rational negative half with the actual negative subalgebra, and the assignments $\theta_i\mapsto[P_{i,1}]$, extended multiplicatively and $q$-linearly, respect all Serre relations by step 3.1 and the commuting relation, so they define an algebra homomorphism $\gamma_{\mathbb Q}$ on the localization. Since the $A$-form is the $A$-subalgebra spanned by ordered divided words [F2], and $[P_{i,1}]^n=[n]_i![P_{i,n}]$ by the nil-Hecke decomposition, so every rational divided power maps to $[P_{i,n}]$. These divided-word images lie in $K_0(R)$, which embeds in its rational scalar extension because its shift-orbit basis is free, the homomorphism restricts to the stated $A$-linear $\gamma$; the formula $\gamma(\theta_{i_1}^{(n_1)}\cdots\theta_{i_r}^{(n_r)})=[\mathrm{Ind}(P_{i_1,n_1}\boxtimes\cdots\boxtimes P_{i_r,n_r})]$ is multiplicativity of $\gamma$ together with the definition of $P_\theta$. Coproduct compatibility is the Mackey computation of step 1.1, and bar compatibility is the projective $^\#$ duality of [[def-divided-power-klr-idempotents-and-projectives]], which fixes each normalized $P_{i,n}$ and hence each word class. No source parameter-specialization is asserted to preserve projective ranks. [step 1.1, step 3.1, F2, F3, algebra] ∎
