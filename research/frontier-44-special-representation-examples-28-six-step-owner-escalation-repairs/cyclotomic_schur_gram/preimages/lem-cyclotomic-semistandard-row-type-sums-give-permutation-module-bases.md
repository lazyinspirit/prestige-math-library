---
id: lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases
kind: lemma
title: "Cyclotomic semistandard row-type sums give permutation-module bases"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       lem-universal-nondegenerate-affine-hecke-ordered-monomials-form-a-basis,
       thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular,
       lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular,
       lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage,
       lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations,
       thm-standard-basis-of-the-generic-type-a-hecke-algebra,
       thm-the-symmetric-group-has-the-coxeter-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mathas, The representation theory of the Ariki–Koike and cyclotomic q-Schur algebras, math/0204025"
      url: "https://arxiv.org/pdf/math/0204025"
      locator: "PDF pp. 16–19, 27–37: arbitrary-level element conventions and contracts; full local arguments in these registration drafts replace the review sketches."
    - title: "Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Ordinary finite type A only; Garnir/Murphy printed pp. 18–25 and ordinary semistandard/Specht/Schur PDF pp. 45–50 were actually read; no arbitrary-level DJM proof read claimed."
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451v4"
      locator: "Section 2.1–2.3 exact multipartition-summand Schur variant and deformation; no external proof fallback."
---

## Statement

Let $H_n=H_n(R;z;U_1,\dots,U_\ell)$ be the arbitrary-level cyclotomic Hecke
algebra of [[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]]
over a commutative ring $R$ in which $z,U_1,\dots,U_\ell$ are units, and let
$\mu$ be an $\ell$-multipartition of $n$. Then the submodule
$M_\mu=m_\mu H_n\subseteq H_n$ has $R$-basis
$$m_{(S,t)}=\sum_{s:\,\mu(s)=S}m_{st},$$
where $S$ ranges over the semistandard multitableaux of multipartition shape
$\lambda$ and type $\mu$ and $t$ over the standard tableaux of shape $\lambda$,
with $\mu(s)$ the row-and-component reading. The sums have disjoint
coefficient-$1$ Murphy pivots, so they are $R$-independent and $M_\mu$ is a
direct summand of $H_n$ as an $R$-module. The statement holds first over the
universal Laurent parameter ring and then over every commutative
specialization with unit parameters: the proof constructs, for each $(S,t)$,
an explicit affine element $h$ with $m_{(S,t)}=m_\mu h$ and uses no
quantum-factorial or parameter-difference division, and the equality descends
to $R$ by coefficient identities rather than by generic flatness. The Specht
filtration of $M_\mu$ is ordered by higher shapes and contains one copy of the
Specht module $S_\lambda$ for each semistandard $S$, and no primitive-block
classification is used.

## Facts & Assumptions

**Given:** The arbitrary-level cyclotomic Hecke algebra and Murphy data of [[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]], the affine PBW and localization theory of [[lem-universal-nondegenerate-affine-hecke-ordered-monomials-form-a-basis]], the cellular Murphy basis of [[thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular]], the finite type-A suppliers [[lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations]], [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]] and [[thm-the-symmetric-group-has-the-coxeter-presentation]], the cellular-head theory of [[lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage]], and the Jucys–Murphy triangularity of [[lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular]].

[F1] Presentation, multipartitions, initial tableau $t^\lambda$, the units $u_\lambda=\prod_k\prod_{j\le a_k}(X_j-U_k)$ and $x_\lambda=\sum_{w\in S_\lambda}T_w$ for the row subgroup $S_\lambda$, the element $m_\lambda=x_\lambda u_\lambda$, the right submodule $M_\lambda=m_\lambda H_n$, the involution $*$, and the Murphy elements $m_{st}=T_{d(s)}^*m_\lambda T_{d(t)}$; semistandard multitableaux $S$ of multipartition shape and type, the reading $\mu(s)$, and the sums $m_{(S,t)}=\sum_{s:\,\mu(s)=S}m_{st}$ ([[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]]). The flag condition is that a label of component $a$ occurs only in a physical component $b\le a$; the type of $S$ counts each label with the multiplicity of its row, and $\#\operatorname{SStd}_\mu(\lambda)=K_{(\lambda,\mu)}$ is the number of such $S$.

[F2] The affine algebra $H_n^{\mathrm{aff}}$ of [F1] has the two PBW bases $X^aT_w$ and $T_wX^a$, left multiplication by a nonzero Laurent polynomial is injective, and after localizing at the differences $X_i-X_j$ the algebra maps into the rational crossed product with $\Phi_i:=T_i-c_{i,i+1}$, $c_{ij}=(z-1)X_j/(X_j-X_i)$, satisfying $\Phi_if=s_i(f)\Phi_i$ ([[lem-universal-nondegenerate-affine-hecke-ordered-monomials-form-a-basis]]).

[F3] The elements $m_{st}$ are an $R$-basis of $H_n$ and a dominance-cellular datum with $m_{st}^*=m_{ts}$ and $m_{st}h\equiv\sum_v r_{(t,v)}(h)m_{sv}\pmod{H^{>\lambda}}$, coefficients independent of $s$; the higher spans are two-sided ideals and every commutative specialization with unit parameters inherits the basis ([[thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular]]).

[F4] For the ordinary finite type-A Hecke algebra over any commutative ring with invertible parameter, the permutation module $x_\rho H_n$ has basis $m_{(S,t)}=\sum_{s:\rho(s)=S}m_{st}$ over semistandard $S$ of type $\rho$ and standard $t$, with Specht filtration multiplicity $\#\operatorname{SStd}_\rho(\lambda)$; over the generic field the algebra and each row parabolic are split semisimple with simple ordinary Specht modules and the same trivial-character multiplicities, and the identical left row-double-coset identity holds ([[lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations]]).

[F5] The $T_w$ form a basis of the generic finite type-A Hecke algebra with the multiplication rule $T_wT_i=T_{ws_i}$ for increasing length and $T_wT_i=(z-1)T_w+zT_{ws_i}$ for decreasing length ([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F6] The symmetric group has the Coxeter presentation, so reduced words, the length function, and the Bruhat subword characterization are available ([[thm-the-symmetric-group-has-the-coxeter-presentation]]).

[F7] Over a field, every nonzero cellular head quotient is absolutely simple, the simple modules occur once as nonzero heads, and the nonzero cell modules' block theory is controlled by shared simple factors ([[lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage]]).

[F8] On the Specht module $S_\lambda$ the elements $X_r$ act dominance-triangularly with diagonal $U_az^{j-i}$ at the node $(i,j,a)$ carrying $r$; the universal triangularity specializes to the generic fibre, and at level one the transport $X_j\mapsto U_1M_j$ along the multiplicative Jucys–Murphy elements $M_j=z^{1-j}T_{j-1}\cdots T_1^2\cdots T_{j-1}$ exhibits the finite type-A Hecke algebra inside the cyclotomic algebra, so that the distinct generic content eigenvalues separate all standard tableaux ([[lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular]]).

## Proof

**Proof technique:** direct.

**Given:** The data and suppliers of [F1]–[F8]; work first over the universal

Laurent parameter ring and localize only where [F2] permits.

1.1 The affine expansion with only variable-difference denominators. Writing $T_w$ as the product of the $\Phi_i$ and the scalars $c_{i,i+1}$ along a reduced word of $w$ and moving a Laurent polynomial $f$ leftward across the $\Phi$'s by [F2] expresses $T_wf$ as a sum of terms $c_v\,v(f)$ times a monomial in a subword, where $v$ runs over products of subwords of that reduced word, every denominator of $c_v$ is a product of differences $X_i-X_j$, and each $v$ is Bruhat-below $w$ by the subword characterization of Bruhat order ([F6]). In particular applying this with $f=u_\lambda$ keeps all denominators among the variable differences and introduces no $U_a-U_b$, quantum factorial, or Gram determinant. [F1, F2, F6, algebra]

1.2 Flagging is Bruhat-downward closed and gives monic divisibility. Let $S$ be semistandard of shape $\lambda$ and type $\mu$, and for a permutation $\sigma$ let $\pi=\sigma^{-1}$ map each label to its physical position; set $A_k=\sum_{a<k}|\lambda^{(a)}|$ and $B_k=\sum_{a<k}|\mu^{(a)}|$. By [F1] the flag condition says that a label of component $a$ occupies only a physical component $b\le a$, i.e. $\#\{r\le B_k:\pi(r)\le A_k\}=B_k$ for all $k$. The count is at most $B_k$; inversion preserves the Bruhat order and a Bruhat-smaller permutation has at least as many entries in every prefix rectangle, so every Bruhat-smaller permutation of a flagged one is flagged. If $\sigma$ is flagged then $\sigma(u_\lambda)=\prod_k\prod_{j\le A_k}(X_{\sigma(j)}-U_k)$ contains the factor $(X_r-U_k)$ for every $r\le B_k$, because $\pi(r)\le A_k$; hence $\sigma(u_\lambda)=u_\mu\prod_j\prod_{a(j)<k\le b(j)}(X_j-U_k)$ with $a(j)$ the physical component of the position occupied by label $j$ and $b(j)$ its type component, a monic polynomial. In particular $u_\mu$ divides $\sigma(u_\lambda)$ in the Laurent polynomial ring. [F1, F6, algebra]

2.1 The left row-double-coset identity and localized membership. Let $s_0$ be the least standard refinement of $S$ and $D=S_\mu d(s_0)^{-1}S_\lambda$. Every row-standard refinement of the semistandard $S$ is standard, and the ordinary length-additive left row-double-coset expansion gives $\sum_{s:\,\mu(s)=S}T_{d(s)}^*x_\lambda=\sum_{w\in D}T_w$, each element of $D$ exactly once, with no row-intersection quantum factorial ([F4] proves the identical finite identity; [F1] fixes the elements $T_{d(s)}^*$ and $x_\lambda$). Since $S_\mu$ permutes labels inside $\mu$-components and $S_\lambda$ permutes positions inside $\lambda$-rows, every $w\in D$ is flagged; hence every Bruhat-subword permutation $v$ in the expansion of step 1.1 is flagged by step 1.2, so $v(u_\lambda)=u_\mu g_v$ with $g_v$ a Laurent polynomial, and $T_wu_\lambda\in u_\mu H_n^{\mathrm{aff}}[(X_i-X_j)^{-1}]$ for every $w\in D$. Writing $b_0:=\sum_{w\in D}T_w$ and summing, $b_0u_\lambda\in u_\mu H_n^{\mathrm{aff}}[(X_i-X_j)^{-1}]$. [F1, F4, step 1.1, step 1.2, algebra]

2.2 The flagged span is a right ideal and a left parabolic module. Let $W_\mu$ be the $R$-span of the $m_{st}$ with $s$ $\mu$-flagged. Right multiplication by a finite generator $T_i$ uses the Murphy expansion of [F3]: same-shape terms retain the left tableau, and higher terms arise from ordinary straightening inside physical components whose permutations are products of $d(s)$ with permutations internal to the physical intervals, hence only permute the admissible $\mu$-labels among the nodes of each component; the exact quadratic expansion, row normalization, and straightening inside components preserve the flagged set. Right multiplication by $X_1$ keeps the same-shape term and, in the higher component-shift term of the proved formula, moves one node of physical component $k$ to component $k-1$ with its $\mu$-component label unchanged: in cumulative-profile form the boundary $A_{k-1}$ increases by one and no other boundary decreases, so every previously valid rank rectangle of step 1.2 stays valid, and sorting and subsequent finite straightening happen inside the new component intervals; the $k=1$ term vanishes. The algebra is generated by the $T_i$ and $X_1$, and $X_1^{-1}$ is a polynomial in $X_1$ by the cyclotomic relation, so this proves that $W_\mu$ is a right ideal; since $m_\mu\in W_\mu$ (its initial tableau has equal physical and type components) we get $M_\mu\subseteq W_\mu$. The same support tracking for left generators inside one $\mu$-row keeps the flag, so $W_\mu$ and its cellular-ideal filtration are left modules for the $\mu$-row parabolic, and $m_\mu=x_\mu u_\mu$ makes every $m\in M_\mu$ satisfy $T_im=zm$ for $\mu$-row generators. [F1, F3, algebra]

3.1 Exact unlocalized membership. Expand $b_0u_\lambda$ in the left affine PBW basis $X^aT_w$ of [F2]; its coefficients lie in $P=R^{\mathrm{univ}}[X_1^{\pm1},\dots,X_n^{\pm1}]$. Membership in $u_\mu H_n^{\mathrm{aff}}[(X_i-X_j)^{-1}]$ from step 2.1 says each coefficient lies in $u_\mu P[(X_i-X_j)^{-1}]$. Every factor $X_j-U_k$ of $u_\mu$ is a prime of the unique factorization domain $P$, is not associated to any difference $X_i-X_j$, and is not inverted by the localization, so its multiplicity cannot drop when passing to the localization; hence each coefficient is already divisible by $u_\mu$ in $P$. Therefore the PBW coordinates of $u_\mu^{-1}b_0u_\lambda$ are actual Laurent polynomials and there is an exact unlocalized equality $b_0u_\lambda=u_\mu b$ with $b\in H_n^{\mathrm{aff}}$. [F1, F2, step 2.1, algebra]

4.1 Eigenvalue descent and the explicit element $h$. Let $i$ be a generator of the $\mu$-row subgroup, so that $i,i+1$ lie in one $\mu$-component interval. Expand the double coset into disjoint left cosets, choosing the minimal representative $r$ of each coset. Length additivity gives $b_0=\sum_r x_\mu T_r$, so $T_ib_0=zb_0$ by pairing the row-subgroup words under left multiplication by $s_i$; right multiplication by $u_\lambda$ retains this left eigenvalue, so $T_i(u_\mu b)=zu_\mu b$. The element $u_\mu$ is symmetric in the variables of each $\mu$-interval, so it commutes with $T_i$, and injectivity of left multiplication by the nonzero Laurent polynomial $u_\mu$ ([F2]) cancels it, giving $T_ib=zb$. Write $b=\sum_wT_wf_w$ in the right PBW basis ([F2]). For each $w$ with $\ell(s_iw)=\ell(w)+1$, comparing coefficients of $T_{s_iw}$ in $T_ib=zb$ gives $f_w+(z-1)f_{s_iw}=zf_{s_iw}$ by the quadratic relation $(T_i-z)(T_i+1)=0$, hence $f_w=f_{s_iw}$; thus $f$ is constant on each left coset $S_\mu w$. Taking minimal-length coset representatives $r$ and using the length-additive expansion $x_\mu T_r=\sum_{\sigma\in S_\mu}T_{\sigma r}$ gives $b=x_\mu h_0$ with $h_0=\sum_rT_rf_r\in H_n^{\mathrm{aff}}$. Since $x_\mu$ commutes with $u_\mu$, the explicit sum defining $m_{(S,t)}$ becomes $m_{(S,t)}=b_0u_\lambda T_{d(t)}=u_\mu x_\mu h_0T_{d(t)}=m_\mu h$ with $h=h_0T_{d(t)}$; this constructs $h$ by finite coset enumeration and polynomial division with no inverted quantum factorial, and the equality is exact, so the Murphy coefficient at the pivot $m_{s_0t}$ is $1$. [F1, F2, step 3.1, algebra]

5.1 Generic upper bound by the finite Mackey count. Over the field $K$ of fractions of the universal Laurent ring, the finite type-A Hecke algebra and each row parabolic are split semisimple with simple ordinary Specht modules and trivial-character multiplicities equal to the ordinary semistandard numbers ([F4], whose generic-multiplicity step uses the cellular-head theory [F7] and the content separation of [F8]); the finite $T_w$ basis and multiplication rule [F5] realize the double-coset decompositions below by explicit basis maps. Restricting the shape-$\lambda$ left cell module to the $\mu$-row parabolic and applying the finite double-coset decomposition splits it as the direct sum over the allocation matrices $N=(N_{r,b})$ recording how many entries of $\mu$-row $r$ enter physical component $b$; the trivial-character multiplicity is $\sum_{N\ \text{flag-compatible}}\prod_bK_{(\lambda^{(b)},\rho_b)}$, which is in bijection with $\#\operatorname{SStd}_\mu(\lambda)$ by reading off each component's ordinary semistandard tableau. By the cellular-ideal filtration [F3] the $\lambda$-layer of $W_\mu$ is the flagged left cell tensored with the full right cell, so exactness of the trivial-character multiplicity gives $\dim_K(W_\mu)^{\mathrm{triv}}=\sum_\lambda\#\operatorname{SStd}_\mu(\lambda)\#\operatorname{Std}_\lambda$. By step 2.2, $M_\mu^K\subseteq(W_\mu)^{\mathrm{triv}}$, while step 4.1 puts all $\sum_\lambda\#\operatorname{SStd}_\mu(\lambda)\#\operatorname{Std}_\lambda$ sums $m_{(S,t)}$ inside $M_\mu^K$ and their disjoint coefficient-$1$ Murphy fibres make them independent; the two bounds agree, so $M_\mu^K$ is exactly their $K$-span. [F3, F4, F5, F7, F8, step 4.1, step 2.2, algebra]

6.1 Descent to $R$, specialization, direct summand, and Specht filtration. Let $h\in m_\mu H_R$. Its Murphy coordinates in the basis [F3] lie in $R$, and step 5.1 says that, after extending scalars to $K$, they vanish outside the admissible fibres and are constant on each admissible fibre; these are literal coefficient identities in $R$ because the Laurent polynomial ring injects into $K$, so $h$ lies in the span $V_\mu$ of the $m_{(S,t)}$. Hence $M_\mu\subseteq V_\mu$, and step 4.1 gives the reverse inclusion, so $M_\mu=V_\mu$ over $R$; every element of $V_\mu$ was constructed as $m_\mu h$, so this infers no basis from generic flatness. For any commutative specialization $R'$, the same two inclusions hold after applying $- \otimes_RR'$: each $m_{(S,t)}$ remains in $m_\mu H_{R'}$ by the explicit identity of step 4.1, and each element of $m_\mu H_{R'}$ has Murphy coordinates in $V_\mu$ by the specialized coefficient identities. Finally, with $s_0$ the pivot refinement of $S$, replace in the Murphy basis the vector $m_{s_0t}$ by the fibre sum $m_{(S,t)}$ and retain $m_{st}$ for all non-pivot $(s,t)$: this change of basis is unitriangular with diagonal entries $1$ over $R$, so the $m_{(S,t)}$ have disjoint coefficient-$1$ pivots and span an $R$-direct summand of $H_n$. Ordering the semistandard $S$ in a shape-compatible order, the Murphy cell law [F3] identifies each successive fixed-fibre quotient with the Specht module $S_\lambda$, one copy for each semistandard $S$. [F3, step 5.1, algebra] ∎

## Remarks

The lemma supplies the permutation-module basis on which the cyclotomic Schur algebra and the Jantzen theory of this page are built. The localized affine argument is used only to prove explicit divisibility by the monic polynomial $u_\mu$; the geometric statements over $R$ are then coefficient identities in the already proved universal Murphy basis, and no parameter-difference or quantum-factorial division occurs. No choice principle is used: only finite bases, finite coset decompositions, finite filtrations, and explicit polynomial identities occur.
