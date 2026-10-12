---
id: thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer
kind: theorem
title: "The finite W and degenerate cyclotomic Hecke actions satisfy a double centralizer"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 32
deps: [def-deformed-tensor-space-for-the-type-a-finite-w-algebra,
       thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer,
       thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e,
       thm-skryabins-equivalence-for-the-type-a-whittaker-pair,
       lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient,
       thm-ordered-monomial-pbw-basis-for-the-shifted-yangian,
       def-the-whittaker-functor-from-the-relevant-parabolic-o-summand,
       def-degenerate-cyclotomic-hecke-algebra,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       def-the-type-a-finite-w-algebra-and-whittaker-category,
       def-classical-complex-matrix-lie-algebras, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Sections 3.5-3.7, Lemmas 3.6-3.8 and Theorems 3.7, 3.9, printed pp. 14-17: the filtered double centralizer for every origin, the stable injectivity condition q_l>=d, and the Morita statement under admissibility."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Chapter 3 and Chapter 8, printed pp. 24-33 and 88-96: the filtered bimodule structure, the truncation and the admissible-origin comparison used to split the mutual-centralizer statement from the Morita statement."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Fix the pyramid $\lambda$ with columns
$q_1\ge\cdots\ge q_l$, an origin $c\in\mathbb C^l$, and $d\ge0$, and let
$V_c^{\otimes d}$ be the truncated tensor space of
[[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]]. Let
$W_d=\varphi_d(W(\lambda))\subseteq\operatorname{End}(V_c^{\otimes d})$ be the
image of the finite W-algebra and let
$B_d=\psi_d(H_d(\Lambda))$ be the image of the cyclotomic Hecke algebra of
[[def-degenerate-cyclotomic-hecke-algebra]] under the right action. Then:

1. $W_d$ and $B_d$ are mutual centralizers on $V_c^{\otimes d}$, for every
   complex origin $c$ and every $d$, and their associated graded image
   algebras are the corresponding images of $U(\mathfrak g^e)$ and of the
   truncated polynomial/permutation algebra.
2. If $q_l\ge d$, then the action of the full cyclotomic algebra
   $H_d(\mathbf a)$ is faithful.
3. If $c$ is admissible (that is, $c_i-c_j\in\mathbb Z$ implies $c_i=c_j$),
   then the tensor module is a progenerator and
   $\operatorname{Hom}_{W_d}(V_c^{\otimes d},-)$ is a Morita equivalence
   between $W_d$-mod and $B_d$-mod.

Mutual centralizers alone do not imply Morita for arbitrary $c$: the explicit
example with $c=(0,1)$, $q=(1,1)$, $d=2$ on the companion page has a
nonprojective tensor module.

## Facts & Assumptions

**Given:** The pyramid $\lambda$, an origin $c$, the truncated tensor space $V_c^{\otimes d}$, and the image algebras $W_d$, $B_d$.

[F1] In the fixed loop chart, the associated graded left representation is the character-twisted Vust representation $X\mapsto\sum_tX^{(t)}+\kappa_c(X)\operatorname{id}$. Its unital image is exactly the untwisted Vust image, because it is obtained by the automorphism $X\mapsto X+\kappa_c(X)1$ of $U(\mathfrak g^e)$. The right graded image is the ordinary truncated polynomial/permutation image. These image algebras are mutual centralizers for every Jordan type and every degree, including scalar degree zero and the empty-pyramid zero tensor case ([[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]], [[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]]).

[F2] $W(\lambda)$ has a separated loop filtration with associated graded $U(\mathfrak g^e)$, and the cyclotomic quotient has the bounded monomial basis $x_1^{r_1}\cdots x_d^{r_d}w$ with $0\le r_i<l$; both filtrations are compatible with the bimodule structure ([[thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e]], [[def-degenerate-cyclotomic-hecke-algebra]]).

[F3] The genuine original-head Whittaker comparison is exact, identifies induced standards with their head-normalized finite Levi modules and scalar content central characters, sends standard-labelled simples to the distinct exhaustive finite-image simples and other simples to zero, and intertwines both ordinary tensor functors with V and V* and the actual right Casimir/flip operators; the standard-label crystal supplies predecessor head quotients, and the category-O detector contains every standard projective cover and has only standard labels in its head and socle ([[thm-skryabins-equivalence-for-the-type-a-whittaker-pair]], [[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]]).

[F4] The stable injectivity criterion: if $e$ has at least $d$ strings of maximum length $l$, the longest-string vector realizes the regular right module, so the right action is injective ([[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]]).

[F5] The genuine standard/Casimir interfaces proved in [[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]] supply the admissible character/quotient computations.

## Proof

**Proof technique:** direct.

**Given:** The filtered bimodule $V_c^{\otimes d}$, its actual character-twisted graded representation and its unchanged unital Vust image algebras.

1.1 The graded unital images. Write $E=V^{\otimes d}$, $C=W_d$, and $D$ for the right Hecke image viewed as an algebra of operators on $E$. The supplied actual tensor model in F1 gives commuting filtered operator algebras, with the graded symbols containing the unital images $A^0$ of $U(\mathfrak g^e)$ and $D^0$ of the truncated polynomial/permutation algebra. The character automorphism in F1 gives exactly the same $A^0$ as the untwisted representation; no equality of the fixed-chart twisted and untwisted modules is inferred. Since $A^0,D^0$ are mutual centralizers, taking leading homogeneous terms of commuting operators gives $A^0\subseteq\operatorname{gr}C\subseteq\operatorname{gr}Z(D)\subseteq Z(\operatorname{gr}D)\subseteq Z(D^0)=A^0$, where $Z$ is the commutant in $\operatorname{End}(E)$. Interchanging $C,D$ gives $D^0\subseteq\operatorname{gr}D\subseteq\operatorname{gr}Z(C)\subseteq Z(\operatorname{gr}C)\subseteq Z(A^0)=D^0$. Thus every inclusion is equality, establishing strict equality of both graded images as well as their commutants. [F1, F2, construct, algebra]

2.1 The filtered centralizers. For an operator in $Z(D)$, equality of the induced graded spaces in step 1.1 supplies a member of $C$ with the same leading symbol. Subtracting lowers its integer filtration degree. The finite grading of $E$ bounds the induced endomorphism filtration below, so this terminates, proving $Z(D)=C$. The same procedure proves $Z(C)=D$. Returning to the right-action opposite convention gives both mutual-centralizer identities and the stated associated graded image algebras. At degree zero both images are scalar, while for an empty pyramid and positive degree $E=0$ and both are zero; these are already covered by the actual tensor model of F1. This proves clause (1) for every origin, without a Morita assumption. [F1, F2, step 1.1, construct, algebra]

3.1 Stable injectivity. If $q_l\ge d$, then $e$ has at least $d$ strings of maximum length $l$, so by [F4] the right action is injective on the associated graded; a nonzero element of $H_d(\mathbf a)$ has nonzero leading symbol and therefore nonzero image, so the full cyclotomic action is faithful. [F4, step 2.1, algebra]

3.2 The finite-image row projectives. Assume $c$ admissible. A row occupancy $\nu=(\nu_1,\ldots,\nu_n)$ determines a tuple $\mathbf j_\nu$ of terminal row boxes and the diagonal row-multiset projection $e_\nu$. Since the right tensor matrices preserve row multisets, $e_\nu\in W_d$ by step 2.1; these orthogonal idempotents sum to one. Here is the actual basis of their projective left ideals. For a commuting matrix $\sum b_{\mathbf i,\mathbf j}E_{\mathbf i,\mathbf j}$, place permutations identify diagonal $S_d$-orbits, and the $U(\mathfrak p)$ image forces $b_{\mathbf i,\mathbf j}=0$ when some source column is smaller than its output column. Comparing its coefficients with $x_k$ and replacing $\mathbf j$ by $R_k(\mathbf j)$ expresses each nonterminal coefficient in coefficients with larger total source column sum: the first term is $b_{R_k(\mathbf i),R_k(\mathbf j)}$, the diagonal term is $(c_{\operatorname{col}(i_k)}+q_{\operatorname{col}(i_k)}-c_{\operatorname{col}(j_k)+1}-q_{\operatorname{col}(j_k)+1})b_{\mathbf i,R_k(\mathbf j)}$, and the two remaining sums run over swaps $(h\ k)$ with respectively both columns at most, or both columns greater than, the $k$th columns. Their signs are respectively plus and minus. This is terminating elimination from terminal source tuples. The graded string-orbit matrices are independent and indexed by the same terminal orbits, so step 1.1 makes the terminal-coordinate map an isomorphism. Let $\Xi_{\mathbf i,\mathbf j_\nu}$ be the normalized preimages. Evaluation on $v_{\mathbf j_\nu}$ gives exactly the orbit sums under $\prod_rS_{\nu_r}$, which form the monomial basis of $Z_\nu=\bigotimes_r\operatorname{Sym}^{\nu_r}(V_{\le p_r})$ with its actual $c$-twist. Thus $W_de_\nu\cong Z_\nu$ as actual modules, and the regular module is their sum. This proves these projectivities in the finite image, without invoking Morita. [F1, F2, step 1.1, step 2.1, construct, algebra]

3.3 Projectivity of the ground object. For $r\ge0$, take degree $Nr$ and the one-dimensional determinant-shifted ground object $D_r=\mathbb C_c\circledast\det^r$, with tableau $A_{c+r\mathbf1}$. Its content reconstructs it uniquely among column-strict tableaux: in each charge coset the minimum appears in every column and hence in its bottom box; removing these boxes and repeating reconstructs all columns. Therefore its scalar central-character summand has exactly this one simple, by F3. The regular-module multiplicity of $D_r$ is one. Indeed, the Levi decomposition of $Z_\nu$ uses semistandard tableaux of shapes given by the column partitions of ground differences, with the alphabet in column $j$ consisting of the terminal row boxes whose rows reach that column. This follows by expanding the complete symmetric characters of its symmetric factors and using the Schur semistandard formula, or successive horizontal-strip multiplication; its finite radical filtration makes it an actual $\mathfrak p$-filtration by these Levi sections. For $D_r$ the shapes are rectangles $(r^{q_j})$ and the allowed alphabet has exactly $q_j$ letters. Each length-$q_j$ strictly increasing tableau column must contain every letter in order. There is exactly one tuple, and its row-$i$ multiplicity is $rp_i$. Thus the coefficient is one for $\nu_i=rp_i$ and zero for every other occupancy. Other standards cannot contain $D_r$ because their scalar central characters differ. The supported regular summand has length one and is $D_r$ itself, so $D_r$ is projective over $W_{Nr}$. For a surjection in the rational finite-W category $\mathcal R_c$, a common determinant twist puts its terms into finite sums of polynomial-image categories. The scalar degree operator splits these by degree. A map from $\mathbb C_c$ becomes a map from $D_r$ into the degree-$Nr$ summand, where it lifts by the projectivity just proved. The inverse determinant twist gives the original lift. Hence $\mathbb C_c$ is projective in $\mathcal R_c$, without claiming projectivity in arbitrary $W(\lambda)$-mod. [F3, step 3.2, construct, algebra]

3.4 The exact ordinary-dual adjoint. For a finite rational $\mathfrak g$-module $E$, Skryabin transports ordinary evaluation $E^*\otimes E\to\mathbb C$ and coevaluation $\mathbb C\to E\otimes E^*$ to the tensor functors $F_E(M)=M\circledast E$. The ordinary zigzag identities give both adjunctions between $F_E$ and $F_{E^*}$. These functors are exact: tensoring is exact, it preserves generalized Whittaker modules by a finite Engel-flag nilpotence bound, and Skryabin is an exact equivalence. They preserve $\mathcal R_c$: a faithful finite image module embeds the regular algebra into a finite direct sum of copies of itself by evaluation on a basis, so every finite-image module is a subquotient of a finite sum of tensor modules; exact tensor transport sends degree $d$ to degree $d+1$. For $N>0$, also $V^*=\bigwedge^{N-1}V\otimes\det^{-1}$, and the exterior power is a summand of a tensor power by the antisymmetrizer. Determinant shifts therefore give closure under $V^*$ too. Consequently $F_V$ preserves projectives in the entire rational category through its exact right adjoint $F_{V^*}$. Here $V^*$ is the ordinary contragredient natural module, distinct from $V$; the transpose contravariant duality of category $\mathcal O$ is not this adjoint. [F3, construct, algebra]

3.5 The finite-W projective covers. Put $Q(A)=\operatorname{Wh}(P(A))$ for standard labels. At degree zero this is the ground object, projective by step 3.3. For a positive-degree standard $A$, the actual standard-label crystal supplies $A=\widetilde f_iB$ and a quotient $L_O(B)\otimes V\to L_O(A)$. Lifting along the projective cover and splitting proves $P(A)$ is a summand of $P(B)\otimes V$. The genuine tensor comparison sends this to a summand of $Q(B)\circledast V$, projective by step 3.4. To identify its head, write $P(B)\otimes V=\bigoplus_C P(C)^{m_C}$ with standard $C$, using the independently proved detector head/socle property in F3. Exact Wh gives $\dim\operatorname{Hom}_W(Q(C),L_W(D))\ge\delta_{CD}$. On the other hand ordinary-dual adjunction, the induction hypothesis and the genuine simple/tensor comparison give $\dim\operatorname{Hom}_W(Q(B)\circledast V,L_W(D))=[L_W(D)\circledast V^*:L_W(B)]=[L_O(D)\otimes V^*:L_O(B)]=m_D$. Comparing this equality with the sum over $C$ forces $\dim\operatorname{Hom}_W(Q(C),L_W(D))=\delta_{CD}$ for every summand with $m_C>0$. Thus each $Q(A)$ is the genuine projective cover of $L_W(A)$. Exhaustion of finite-image simples and occurrence of every standard cover in the detecting tensor object now show that $U_d=\operatorname{Wh}(P_c\otimes V^{\otimes d})$ is a projective generator of $W_d$-mod. This uses the actual simple-image and tensor maps of F3, rather than inferring covers from characters or mutual centralizers. [F3, step 3.3, step 3.4, construct, algebra]

3.6 Morita for the finite images. Since $U_d$ is a finite projective generator of $W_d$-mod, every module admits a presentation by finite sums of $U_d$. The evaluation maps from the tensor-Hom adjunction are isomorphisms on $U_d$ and its direct sums and summands, hence on every module by passing to the cokernels of such presentations. Conversely the same argument for presentations of modules over $\operatorname{End}_{W_d}(U_d)^{\mathrm{op}}$ gives the inverse evaluation. Thus $\operatorname{Hom}_{W_d}(U_d,-)$ is an equivalence with inverse $U_d\otimes_{B_d}-$, and step 2.1 identifies its target algebra with the genuine Hecke image $B_d$. This proves clause (3) under admissibility independently of any supporting-block Morita assumption. In the empty-pyramid case the positive-degree tensor and both image algebras are zero, so their module categories are zero and the equivalence is immediate; degree zero is the scalar equivalence. [step 2.1, step 3.5, construct, algebra]

4.1 The nonadmissible boundary. For $c=(0,1)$, $q=(1,1)$, $d=2$, the explicit finite matrix computed from the tensor action shows that the tensor module is not projective over $B_d$, so the progenerator hypothesis fails; the mutual centralizers of step 2.1 still hold. This is the companion-page example separating the two assertions. [step 2.1, given] ∎