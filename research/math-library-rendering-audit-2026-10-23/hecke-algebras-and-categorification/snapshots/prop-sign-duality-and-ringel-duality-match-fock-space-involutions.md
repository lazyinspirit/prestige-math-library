---
id: prop-sign-duality-and-ringel-duality-match-fock-space-involutions
kind: proposition
title: "Sign duality and Ringel duality match the Fock-space involutions"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 43
deps: [def-axiom-of-choice,
       lem-complex-specht-modules-are-self-dual,
       lem-conjugate-specht-sign-duality-over-fields,
       thm-weyls-complete-reducibility-theorem,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       thm-skryabins-equivalence-for-the-type-a-whittaker-pair,
       def-deformed-tensor-space-for-the-type-a-finite-w-algebra,
       def-degenerate-cyclotomic-hecke-tower-and-residue-functors,
       thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module,
       thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module,
       thm-degenerate-ariki-categorification,
       thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one,
       def-degenerate-cyclotomic-hecke-algebra,
       def-dual-canonical-canonical-and-quasi-canonical-fock-bases,
       def-the-ringel-dual-of-a-finite-highest-weight-ideal,
       thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic,
       thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o,
       thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases,
       thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule,
       thm-the-highest-weight-fock-submodule-has-the-qg-global-bases,
       def-the-higher-level-schur-weyl-projective-generator-and-schur-functor,
       thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects,
       thm-higher-level-schur-weyl-double-centralizer,
       thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives,
       lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Brundan-Kleshchev, The degenerate analogue of Ariki's categorification theorem (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.7 (printed pp. 31-32), (3.33)-(3.40), Lemmas 3.12-3.13 and Theorem 3.14: the charge reversal, the sign automorphism, the multipartition transpose and the simple/Specht comparison; complete passage read."
    - title: "Brundan-Kleshchev, The degenerate analogue of Ariki's categorification theorem (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Sections 4.2-4.4 (printed pp. 35-42), the reduced permutation modules (4.3), the intrinsic Young and signed Young definitions, Lemma 4.10, Theorems 4.15 and 4.17 and Corollaries 4.18-4.19; complete passage read for the full-generator and Ringel statements."
    - title: "Brundan-Kleshchev, Schur-Weyl duality for higher levels (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Theorem 4.8 (printed pp. 21-22), Theorem 4.14 (printed pp. 25-26), and Theorems 6.9-6.10 (printed pp. 42-43): socle detection, cumulative symmetric-power projectives, natural permutation corners and full projective faithfulness; relevant complete passages read. Tilting faithfulness is proved by the local head/socle corner lemma, rather than claimed as Theorem 6.15."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice, inherited through the Skryabin, natural
Whittaker and category-O projective/tilting suppliers. The finite Hecke
calculations below require only finite-dimensional linear algebra.

For $I=\mathbb Z$ (and reflected auxiliary finite cuts used to realize this
global statement), the map $t$ sends $\Lambda_i$ to $\Lambda_{-i}$ and
$\alpha_i$ to $\alpha_{-i}$, so $m^t=(-m_l,\dots,-m_1)$. The sign map
$\sigma(s_r)=-s_r$, $\sigma(x_r)=-x_r$ gives
$H^\Lambda_\alpha\cong H^{\Lambda^t}_{\alpha^t}$ and intertwines residue $i$
with $-i$. Multipartition transpose with reversed components gives
$\mathrm{Col}^\Lambda_\alpha\cong\mathrm{Col}^{\Lambda^t}_{\alpha^t}$, sending
$\mathrm{Rev}$ to target $\mathrm{Std}$. The genuine sourced Specht/sign
comparison is $\sigma^*S(A^t)\cong S(A)^{\circledast}$, and for
$A\in\mathrm{Rev}$ the simple and projective-cover labels are $A^t\mapsto A^\downarrow$;
no off-standard $D(A)$ is made into a simple. At parameter one these are maps on
the projected highest constituent/costandard and standard lattices, rather than
a naive permutation of all simple labels or all ambient monomial vectors.

For a finite bounded category-O chunk define $Y_{\mathrm{all}}(A)=\pi P_{\mathcal O}(A)$
for EVERY $A\in\mathrm{Col}^\Lambda$, and
$\widetilde Y_{\mathrm{all}}(A)=\pi T_{\mathcal O}(A)$ for EVERY
$A\in\mathrm{Col}^\Lambda$. The existing signed-Young comparison identifies
$\widetilde Y_{\mathrm{all}}(A)$ with $\sigma^*Y_{\mathrm{all}}(A^t)$; on
$\mathrm{Rev}$ it is the projective cover $Y(A^\downarrow)$. All these families
retain their ordinary self-dual source scope. Take FULL sums over
$\mathrm{Col}^\Lambda$, with one representative each:
$\operatorname{End}_{H^\Lambda}(Y_{\mathrm{all}})^{op}$ is the quasihereditary
Schur-cover algebra, and
$\operatorname{End}_{H^\Lambda}(\widetilde Y_{\mathrm{all}})^{op}$ is its
Ringel dual. Off-standard $Y_{\mathrm{all}}$ are indecomposable nonprojective
$H$-images, so summing only standard projective covers is not this full Young
generator. The Ringel category is the reversed-Levi/opposite-parabolic block,
using $F=D\Psi$ with its explicit shifts and
$F(\overline P(A))=T_{\mathcal O}(A)$; it is not an unqualified longest-Borel
twisting equivalence. For a proper original lower ideal the corresponding
opposite category is the matching highest-weight Serre quotient. Positive
finite multiplicities give Morita-equivalent generator algebras. The global
sign and these bounded-chunk categorical constructions have their stated
distinct domains.

## Facts & Assumptions

**Given:** The tower $H^\Lambda$ with its blocks, residue functors and duality $\circledast$ of [[def-degenerate-cyclotomic-hecke-tower-and-residue-functors]], the identifications and simple labels of [[thm-degenerate-ariki-categorification]], the Schur quotient $\pi$ with full-faithfulness properties of [[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]] and [[thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]], and the fused Ringel/Young dictionary of [[def-the-ringel-dual-of-a-finite-highest-weight-ideal]] and [[thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic]]. We prove the clauses under the inherited Axiom of Choice.

[F1] The Hecke simple and projective classes are indexed by $\mathrm{Std}^\Lambda$, with standard-labelled classes $[D(A)]\mapsto D_A$ and $[Y(A)]\mapsto P_A$ ([[thm-degenerate-ariki-categorification]]).

[F2] The ordinary complex Specht form is nondegenerate and every transposition is self-adjoint ([[lem-complex-specht-modules-are-self-dual]]); transpose shape followed by sign is the original Specht module ([[lem-conjugate-specht-sign-duality-over-fields]]). Their evaluated dots are scalars plus Jucys-Murphy sums, so are self-adjoint as well.

[F3] The actual finite-W tensor transport and regular-row corner are the natural identifications of [[thm-skryabins-equivalence-for-the-type-a-whittaker-pair]], [[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]] and [[thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]]. The latter sends generalized standards to intrinsic Spechts and standard-labelled simples to simple heads. The tilting supplier proves the standard-socle criterion: every simple embedded in any generalized standard has standard label, and $P(B)=T(B^\uparrow)$ for standard $B$.

[A1] The Axiom of Choice is allowed ([[def-axiom-of-choice]]). Its use is inherited from the Skryabin/Whittaker constructions, their arbitrary module extension and projective/tilting existence arguments; the choices of a finite cut, finite row names, finite bases and finite decompositions in this proof use only finite choice.

[F4] PBW makes parabolic induction exact ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]). Polynomial finite Levi modules have diagonalizable centre and semisimple derived part, so are completely reducible by [[thm-weyls-complete-reducibility-theorem]]. The degenerate cyclotomic algebra's local proof supplies its symmetric nondegenerate top PBW trace.

## Proof

**Proof technique:** direct.

1.1 **The sign automorphism.** The assignments $\sigma(s_r)=-s_r$ and $\sigma(x_r)=-x_r$ respect the defining relations of [[def-degenerate-cyclotomic-hecke-algebra]]: involution and braid relations hold for the $s_r$ and the $x_r$ commute, and the cross relation $s_rx_{r+1}=x_rs_r+1$ is preserved because the two minus signs in each product cancel and $1$ is fixed, while $x_{r+1}s_r=s_rx_r+1$ is preserved the same way. Hence $\sigma$ is an algebra automorphism of the degenerate affine Hecke algebra; it maps the polynomial idempotent $e(i)$ to $e(-i)$ and therefore the block idempotent $e_\alpha$ of $H_d(m)$ to the block idempotent $e_{\alpha^t}$ of $H_d(m^t)$, giving an isomorphism $H^\Lambda_\alpha\cong H^{\Lambda^t}_{\alpha^t}$ that intertwines the tower inclusion and the residue projectors $u_{\alpha,i}$ with $u_{\alpha^t,-i}$; twisting modules by $\sigma$ gives exact functors that interchange residue $i$ with residue $-i$ and commute with the duality $\circledast$ (which is defined by the $x_r$- and $s_r$-fixed anti-automorphism and is therefore $\sigma$-stable). [given, algebra]

1.2 **The transpose of multipartitions.** Write $\lambda^{(j)}_r=A(m_j+1-r,j)-(m_j+1-r)$; these ground differences give a partition in each column. Reversing components and transposing the partitions is an involution. A node $(r,c)$ in component $j$ has residue $m_j+c-r$; its transposed node has residue $-m_j+r-c$, so the content becomes $\alpha^t$. For adjacent charges put $g=m_j-m_{j+1}\ge0$, $\lambda=\lambda^{(j)}$ and $\mu=\lambda^{(j+1)}$. The aligned reverse-standard row inequalities are $\lambda_r+g\ge\mu_r$ for all $r$, whereas standard rows in the reflected shape require $\mu^{\mathsf T}_{a+g}\le\lambda^{\mathsf T}_a$ for all $a\ge1$. These conditions are equivalent: the first makes every row of $\mu$ of length at least $a+g$ a row of $\lambda$ of length at least $a$; conversely, if $\mu_r>\lambda_r+g$, take $a=\lambda_r+1$ to get $\mu^{\mathsf T}_{a+g}\ge r>\lambda^{\mathsf T}_a$. Applying this to every adjacent pair proves the bijection $\mathrm{Rev}^\Lambda_\alpha\to\mathrm{Std}^{\Lambda^t}_{\alpha^t}$, with inverse the same reversed-component transpose. [given, algebra]

1.3 **Full faithfulness on all projectives and tiltings.** In the admissible stable realization the exact Schur quotient $\pi$ is fully faithful on ALL category-O projectives and on all tilting objects, the endomorphism isomorphism identifies the Hecke image algebra with the endomorphism algebra of the prinjective detector, and the category-O tilting objects are classified with a standard flag, by [[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]], [[thm-higher-level-schur-weyl-double-centralizer]], [[thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]] and [[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]]; the Young and signed-Young images are the ones of [[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]] and [[thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic]]. The tilting faithfulness use is the local head/socle corner argument: a standard flag gives standard socle labels and duality gives standard head labels; the unit into the right adjoint of the corner is injective with corner-killed cokernel, and a module with only standard head labels has no nonzero map into such a cokernel. Adjunction therefore lifts every corner map uniquely. This argument uses both flags, rather than claiming that exactness alone preserves heads. [given, construct]

1.4 **Longest-shuffle induction duality.** Let $P$ be the affine Young subalgebra with original block sizes and $Q$ the reversed block subalgebra. Affine PBW on the right gives $H_d=\bigoplus_{u\in U}uP$, where $U$ consists of minimal right coset representatives. Its unique longest representative $r$ reverses the blocks, preserving their internal orders; its length is the number of cross-block pairs. Let $\theta:Q\to P$ relabel positions by $r^{-1}$ and let $E(\sum up_u)=p_r$. Then $E$ is right $P$-linear and $E(qh)=\theta(q)E(h)$. Indeed straightening $x_ju$ gives $ux_{u^{-1}j}$ plus shorter-permutation terms, which cannot reach the longest coset, and an internal $Q$ reflection preserves that coset with $s_jr=r\theta(s_j)$. For finite $P$-module $M$, give $M^*$ its generator-fixing dual action and transport it to $Q$ through $\theta$. The pairing $\langle a\otimes m,b\otimes\varphi\rangle=\varphi(E(b^*a)m)$ is balanced by these two identities and is contravariant. [F2, given, algebra]

1.5 Minimal representatives $v$ for $H_d/Q$ satisfy $vr\in U$; $E(v^{-1}u)$ is one precisely when $u=vr$ and zero otherwise. Thus the pairing matrix is a permutation matrix tensored with the ordinary perfect pairing, proving that the dual of induction is the reverse-block induction of the dual. [F2, given, algebra]

1.6 **The correctly normalized exterior quotient.** Choose a sufficiently low finite cut $k$, put $q_i=m_i+1-k$, $n=q_1$ and $c=n+k-1$. The ordinary parabolic ground has scalar $q_1+\cdots+q_{i-1}+m_i$, obtained from the head character $-\rho_i=\sum_{j\le i}q_j-n$ plus $c$. The finite-W tail shift is a different embedding convention and is not substituted for this character; the transported roots are nevertheless exactly $m_i=c+q_i-n$. For the transposed component partitions $\nu^{(i)}=(\lambda^{(i)})^{\mathsf T}$ form the exterior suffix module $D=\mathbb C_c\otimes\bigotimes_{i=l}^1\bigwedge^{\nu^{(i)}}(V/V_{i-1})$. Its tensor quotient $q:U=\mathbb C_c\otimes V^{\otimes d}\to D$ is parabolic-linear and hence finite-W-linear. Select $d$ distinct longest row names with idempotent $e_S$ and cyclic rightmost-row tensor $w$; regular evaluation identifies $H\to e_SU$, $b\mapsto wb$, with left corner action $a(wb)=w(ab)$. Therefore $K=\ker(q\,\mathrm{reg})$ is a LEFT ideal; no right-Hecke linearity of the exterior quotient is assumed. [F3, F4, construct, algebra]

2.1 **The Specht and reverse-standard simple comparisons.** The evaluation maps have $x_j=m+\sum_{k<j}(k\ j)$, so [F2] makes each evaluated Specht factor self-dual. Twisting its reflected evaluation by $\sigma$ changes $-m$ to $m$ and every Jucys transposition to its sign twist. Ordinary conjugate-Specht/sign duality, followed by the reversed-induction isomorphism of step 1.5, gives $\sigma^*S(A^t)=S(A)^\circledast$. For $A\in\mathrm{Rev}$ put $B=A^\downarrow$. The actual tilting bottom flag gives an embedding $M(A)\hookrightarrow T(A)=P(B)$, hence $S(A)\hookrightarrow Y(B)$ by exactness. The symmetric trace identifies a primitive projective cover $He$ with $(eH)^*$; since $Z\mapsto eZ$ is exact, this is the injective hull of its split simple top, with unique essential socle $D(B)$. Every nonzero submodule therefore contains that socle, giving $\operatorname{soc}S(A)=D(B)$: $S(A)$ is nonzero by its affine-PBW induced basis, and the socle of any nonzero submodule of this injective hull is its unique essential simple socle. Duality converts it to the simple head of $S(A)^\circledast$. Since $A^t$ is standard, the target standard-head statement and exact sign pullback now give $\sigma^*D(A^t)=D(A^\downarrow)$. No arbitrary quotient is assumed to preserve a head or socle. [F2, F3, F4, step 1.5, algebra]

2.2 **The full Young generator algebra.** For every $A\in\mathrm{Col}^\Lambda$ put $Y_{\mathrm{all}}(A):=\pi P_{\mathcal O}(A)$; by step 1.3 full faithfulness on projectives makes these nonzero indecomposable with local endomorphism rings, and makes them pairwise nonisomorphic, while for $A\in\mathrm{Std}^\Lambda$ they are the projective covers $Y(A)$ of [F1]. If some $Y_{\mathrm{all}}(A)$ with $A\notin\mathrm{Std}^\Lambda$ were projective, it would be a sum of standard projective covers, and full faithfulness on the distinct O-projectives $P_{\mathcal O}(A)$ would give an identification of two nonisomorphic O-projectives, a contradiction; so off-standard images are nonprojective. Taking the full finite sum $Y_{\mathrm{all}}=\bigoplus_{A\in\mathrm{Col}^\Lambda}Y_{\mathrm{all}}(A)$ (one representative each) and using full faithfulness on the corresponding full projective generator $Q=\bigoplus_AP_{\mathcal O}(A)$ gives $\operatorname{End}_{H^\Lambda}(Y_{\mathrm{all}})^{op}\cong\operatorname{End}_{\mathcal O}(Q)^{op}$, the quasihereditary Schur-cover algebra of [[thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic]] and [[def-the-ringel-dual-of-a-finite-highest-weight-ideal]]. Summing only the standard projective covers would give a Morita generator of $H^\Lambda$, which is symmetric and not quasihereditary in general, and is not the algebra meant here. [step 1.3, F1, given, algebra]

2.3 **An explicit trace-adjoint covector.** Positions have nonincreasing original column types $t_1\ge\cdots\ge t_d$, constant inside exterior blocks $J$. Put $p=\prod_j\prod_{i<t_j}(x_j-m_i)$, $a_-=\sum_{u\in J}\operatorname{sgn}(u)u$ and $g=pa_-=a_-p=g^*$. The native right dot formula on row tensors of columns $c_j$ is $vx_j=v_{L_j}+m_{c_j}v+\sum_{h<j,c_h\ge c_j}v(hj)-\sum_{h>j,c_h<c_j}v(jh)$. Let $\phi_0$ select the all-column-one tensor with fixed row order. Process the factors of $p$ in order $j=1,\ldots,d$, then $i=1,\ldots,t_j-1$. At that stage the target columns are $t_h$ for $h<j$, $i$ at $j$, and one for $h>j$. Transposing the dot formula has no earlier swap, since $t_h\ge t_j>i$, and no later swap, since $1\le i$; its diagonal is $m_i-m_i=0$. It therefore raises exactly that column by one with coefficient one. Thus $\phi_0R_p=\phi_{\mathbf t}$. The covector $\phi_{\mathbf t}R_{a_-}$ alternates inside each exterior block and vanishes on forbidden columns, so equals $\lambda q$ for an actual exterior covector $\lambda$. [F3, step 1.6, algebra]

3.1 **Descent to the projected lattices at parameter one.** At parameter one the simple classes are the projected vectors $D_A=\pi_{\mathrm{Fock}}L_A$ and the projective classes are $P_A=T_{A^\uparrow}$ by [[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]]; the sign and transpose maps of steps 1.1-1.2 act on these two families by the label rules $A\mapsto A^\downarrow$ for costandard vectors on $\mathrm{Rev}$ and by the inverse rectification for standard vectors, compatibly with the identification of [[thm-degenerate-ariki-categorification]]. This is the projected-lattice statement of the first paragraph; the map is not asserted to permute all monomials or all simple labels of the full Fock space, since the off-standard monomials have no simple image. [step 1.2, step 2.1, F1, given, algebra]

3.2 **The signed full generator and Ringel duality.** Likewise put $\widetilde Y_{\mathrm{all}}(A):=\pi T_{\mathcal O}(A)$ for every $A\in\mathrm{Col}^\Lambda$. Full faithfulness on tiltings (step 1.3) makes the full sum $\widetilde Y_{\mathrm{all}}=\bigoplus_A\widetilde Y_{\mathrm{all}}(A)$ satisfy $\operatorname{End}_{H^\Lambda}(\widetilde Y_{\mathrm{all}})^{op}\cong\operatorname{End}_{\mathcal O}(\bigoplus_AT_{\mathcal O}(A))^{op}$, and the characteristic-tilting endomorphism algebra is the Ringel dual of the Schur-cover algebra, realized as the reversed-Levi/opposite-parabolic block via the functor $F=D\Psi$ with its explicit reverse-column shifts and $F(\overline P(A))=T_{\mathcal O}(A)$, by [[thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic]], [[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]] and [[def-the-ringel-dual-of-a-finite-highest-weight-ideal]]. For a proper original lower ideal the opposite datum is the matching highest-weight Serre quotient, not the same downset subcategory, and no unqualified longest-Borel twisting equivalence on all of $\mathcal O$ is used. Positive finite multiplicities replace the generator by a Morita-equivalent one with the same module category. [step 1.3, step 2.2, given, algebra]

3.3 **The exact ideal kernel.** The top PBW trace $\tau$ equals $\phi_0\mathrm{reg}$: only the bounded monomial with all exponents $l-1$ and identity permutation reaches the all-column-one fixed-order tensor in top degree. Consequently $\tau(bg)=\lambda(q\,\mathrm{reg}(b))$. If $b\in K$, every $ab\in K$ and $\tau(abg)=0$ for all $a$, so nondegeneracy gives $bg=0$. Hence $H/K\to Hg$, $b+K\mapsto bg$, is well defined and surjective. The exterior row basis has size $(d!/|J|)\prod_j(l-t_j+1)$. In the truncated polynomial/permutation associated graded, with $b_j=t_j-1$, the words $uX^{\mathbf r+\mathbf b}a_-$, $u\in S_d/J$, $0\le r_j\le l-t_j$, are independent: different cosets have disjoint permutation supports and different exponent vectors have different polynomial supports. Their filtered lifts give that many independent vectors in $Hg$. Dimension comparison proves $K=\operatorname{Ann}_{\rm left}(g)$ and $H/K\cong Hg$. The bare trace adjoint has RIGHT image $gH$; applying the generator-fixing anti-involution gives the contragredient LEFT image $Hg$. [F4, step 2.3, algebra]

3.4 All roots may repeat, since none was divided by a difference. [F4, step 2.3, algebra]

4.1 **Lifting the kernel in category $\mathcal O$.** Let $T=\operatorname{Ind}_{\mathfrak p}^{\mathfrak g}(I^\Lambda\otimes V^{\otimes d})$ and $E(A)=\operatorname{Ind}_{\mathfrak p}^{\mathfrak g}(I^\Lambda\otimes D_0)$, with the ordinary ground $I^\Lambda$ and the exterior suffix factor $D_0$ above. Exact parabolic induction supplies $q:T\twoheadrightarrow E(A)$. Natural finite-W transport and regular evaluation identify $\pi(q)$ with the preceding exterior quotient and $\pi(R_g)$ with right multiplication by $g$. A finite total-column-degree filtration makes the nilradical act trivially on its graded finite Levi pieces; complete reducibility refines this to a standard flag of $E(A)$. The projective $T$ also has a standard flag. For any simple submodule $L$ of either standard-filtered object, choose the first flag term meeting $L$ nontrivially; simplicity gives containment there and zero intersection with the preceding term, hence an embedding of $L$ into that standard section. Its label is standard by [F3]. Every nonzero submodule has a simple socle because this is a finite-length chunk, so exactness and the nonzero standard-simple image make $\pi$ detect nonzero SUBMODULES of these two objects. This does not assert conservativity on the whole category. Since $\pi(R_g\ker q)=0$, detection gives $R_g\ker q=0$. Thus $R_g$ factors as $Fq$ with $F:E(A)\to T$. Its Schur image is the injective map $H/K\to Hg\subset H$; detection on submodules of $E(A)$ makes $F$ injective. Hence $\ker q=\ker R_g$ as actual category-$\mathcal O$ submodules. [F3, F4, A1, step 3.3, construct, algebra]

5.1 **A genuine tilting module, not just its character.** The self-dual prinjective ground carries a perfect restricted contravariant form, and its tensor product with the natural tensor dot product gives a symmetric nondegenerate contravariant form $B_T$; Casimir and place permutations are self-adjoint, hence so is $g$. The form $B_E(qt,qu)=B_T(t,R_gu)$ is well defined by the actual kernel equality of step 4.1. If $qt$ is in its radical, self-adjointness and nondegeneracy of $B_T$ force $R_gt=0$, hence $qt=0$. It is symmetric and contravariant, and finite weight spaces make it a perfect restricted form. Thus $E(A)$ is self-dual. Dualizing its already established standard flag gives a costandard flag, so it is a tilting object; arbitrary parabolic induction has not been asserted to preserve tiltings. [F3, F4, step 4.1, algebra]

6.1 **The leading tilting summand.** For a product of wedges with lengths $\nu_s$, occupation of the first $r$ coordinates is at most $\sum_s\min(r,\nu_s)=\sum_{a\le r}\lambda_a$. Equality at the highest weight forces every wedge of length at least $a$ to contain its $a$th initial coordinate; that tensor is unique. In a suffix allocation, slots can move only to later Levi blocks. If $u_{<j}$ slots originally before $j$ move to block $j$ or later, the degree before $j$ drops by $u_{<j}$, while at most $u_{<j}$ moved slots can increase the first $r$ coordinates in block $j$. Thus every resulting highest partition $\beta$ satisfies $\sum_{i<j}|\beta^{(i)}|+\sum_{a\le r}\beta_a^{(j)}\le\sum_{i<j}|\lambda^{(i)}|+\sum_{a\le r}\lambda_a^{(j)}$. Any moved slot gives a strict component boundary; equality everywhere forces the unique original leading tensor. Exact induction consequently gives $[E(A):M(A)]=1$ with all other standards strictly lower in multipartition dominance. [F3, F4, step 5.1, algebra]

6.2 Tilting classification and its leading-standard triangularity then yield $E(A)=T(A)\oplus\bigoplus_{\lambda(B)<\lambda(A)}T(B)^{\oplus m_B}$. This is an actual tilting decomposition obtained after step 5.1, not a module isomorphism inferred from characters alone. [F3, F4, step 5.1, algebra]

7.1 **Ordinary and signed Young extraction on ALL labels.** The ordinary cumulative-column symmetric-power objects in the full-projective copresentation proof are genuine projectives. Schur-Weyl and Specht-to-permutation dominance give their leading standard $M(A)$ once and only multipartitions strictly above $\lambda(A)$ otherwise. BGG projective triangularity therefore gives $P(A)$ once and only projectives of higher multipartition dominance. For the ordinary component types $t_1\le\cdots\le t_d$, put $p_+=\prod_j\prod_{i>t_j}(x_j-m_i)$ and let $a_+$ sum the within-row Young subgroup $J_+$. Acting on the rightmost regular tensor $w$, process $j$ from left to right and the factors at position $j$ from $i=l$ down to $t_j+1$. Earlier positions already have columns $t_h\le t_j<i$, while later ones remain in column $l\ge i$, so the native dot formula has no spectator swaps; subtracting $m_i$ leaves exactly the next left shift. Thus $wp_+$ is exactly the nondecreasing-column tensor, and $wp_+a_+$ is its within-block symmetric sum. [step 1.3, step 2.2, step 3.3, step 6.2, algebra]

7.2 It belongs to the actual cumulative-column symmetric submodule $e_SZ(A)$. The map $Hp_+a_+\to e_SZ(A)$ induced by regular evaluation is injective. Its target has dimension $(d!/|J_+|)\prod_j t_j$. In the associated graded algebra the coset words $uX^{\mathbf r+\mathbf b}a_+$ with $b_j=l-t_j$, $0\le r_j<t_j$, have disjoint polynomial/permutation supports and are independent. Hence the source has at least the target dimension and is exactly that submodule. This proves $\pi Z(A)=Hp_+a_+$ locally. Under reversed transpose, the reflected charges satisfy $m_i^t=-m_{l+1-i}$. Applying $\sigma$ to the displayed ordinary product sends each factor to a unit $-1$ times $(x_j-m_i)$, and the ordinary symmetrizer becomes $a_-$. Its positional bounds become $t_1\ge\cdots\ge t_d$ and its factors exactly $i<t_j$, so its left ideal is precisely $Hg_A$ from step 2.3; transpose reverses multipartition dominance. Consequently the signed module $Hg_A$ has the triangular decomposition with leading $\sigma^*Y_{\rm all}(A^t)$ once and strictly lower terms. [step 1.3, step 2.2, step 3.3, step 6.2, algebra]

7.3 Steps 3.3 and 6.2 give the SAME family of signed modules a triangular decomposition with leading $\pi T(A)$ once and strictly lower terms. Full faithfulness on projectives and tiltings makes both leading families nonzero indecomposable, pairwise nonisomorphic, with local endomorphism rings. Induct upwards through this finite dominance poset. At a minimal label both decompositions have only their leading term. At a later label the previously identified lower terms constitute the same known family (their multiplicities need not be equal); the new leading term cannot be a member of that family because each leading family is pairwise nonisomorphic. Uniqueness of indecomposable summands therefore identifies the two new leading terms, and cancellation then identifies all lower multiplicities. This proves $\pi T(A)\cong\sigma^*Y_{\rm all}(A^t)$ for ALL column-strict labels. It is not inferred only for standard labels. [step 1.3, step 2.2, step 3.3, step 6.2, algebra]

8.1 **Blocks, cuts and the requested consequences.** Every map, form and kernel above commutes with central block projection; the block trace is nondegenerate. Auxiliary ground-row deletion selects the original row names and preserves the forbidden-column and exterior relations, so the natural quotient maps agree with the accepted admissible central-corner transfer. Thus the full-label comparison survives the admitted finite chunks and the reflected global cuts. On reverse-standard labels step 2.1 makes the signed image the projective cover $Y(A^\downarrow)$. The full generator endomorphism algebras are precisely those identified in steps 2.2 and 3.2; positive finite multiplicities change only the Morita generator. The restricted form makes every $T(A)$ self-dual, so the duality-compatible Schur quotient makes every signed image self-dual. The full-label sign comparison, applied in the reflected realization and using that $\sigma$ commutes with $\circledast$, then makes every ordinary Young image self-dual as well; no self-duality of an off-standard category-O projective is assumed. [step 2.1, step 3.2, step 7.3, algebra]

9.1 **Domains.** The global sign statement lives on $I=\mathbb Z$ and on reflected auxiliary finite cuts realizing it, chosen with every charge inside the root interval; its categorical realization uses the finite bounded chunks of the bounded-chunk construction above, not a simultaneously bounded-below index set preserved by negation, and the bounded chunks realize the sign comparison through the finite double-cut identifications of [[thm-degenerate-ariki-categorification]]. The two domains, global label reversal and finite-chunk categorical duality, are thus kept distinct. [step 1.1, step 1.2, step 8.1, given]

10.1 **Conclusion.** Step 1.1 gives the sign isomorphism and the residue intertwining $i\leftrightarrow-i$; steps 1.2 and 2.1 give the transpose bijection and the Specht/simple comparison with the rectified labels; step 3.1 gives the parameter-one descent to the projected lattices; steps 2.2-3.2 identify the full Young and signed generators with the Schur-cover algebra and its Ringel dual, including the off-standard nonprojectivity and the opposite-parabolic/serre-quotient clauses; step 8.1 gives the signed-Young comparison; and step 9.1 separates the global and bounded-chunk domains. No unqualified twisting equivalence and no off-standard simple label is used. [step 3.1, step 2.2, step 3.2, step 8.1, step 9.1, given] ∎
