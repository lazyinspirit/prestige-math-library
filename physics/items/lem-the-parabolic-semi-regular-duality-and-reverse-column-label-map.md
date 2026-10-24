---
id: lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map
kind: lemma
title: "Parabolic semi-regular duality and the reverse-column label map"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-standard-parabolic-and-levi-subalgebras-from-simple-roots,
       def-parabolic-category-o-for-a-standard-parabolic,
       thm-parabolic-category-o-is-a-highest-weight-category,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       thm-root-sl-two-triple,
       prop-trace-forms-are-symmetric-and-invariant,
       prop-brackets-of-root-spaces,
       prop-restricted-duality-is-an-exact-involution-on-category-o,
       def-axiom-of-choice,
       def-higher-level-wedge-tensor-fock-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Character formulas for tilting modules over Kac-Moody algebras (complete 22-page author English preprint; some later additions absent)"
      url: "https://home.mathematik.uni-freiburg.de/soergel/PReprints/CharKippengl.ps"
      locator: "Author preprint pp. 2–6: Definition 1.1, Theorem 1.3 and its complete normal-order computation, Theorem 2.1 and Corollary 2.3; pp. 14–15: removal of the grading; pp. 16–17: parabolic grading and Lemma 7.4. Retrieved and converted full 22-page PS in this repair; the argument below includes the grade-zero PBW and restricted-Hom corrections."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathfrak g=\mathfrak{gl}_n$, with its upper Borel and Cartan, and let $\mathfrak p$ be the standard parabolic of the tableau column sizes $n_1,\ldots,n_l$. Let $\bar{\mathfrak p}=\bar{\mathfrak l}\oplus\bar{\mathfrak u}$ be the standard parabolic with these block sizes reversed. Set $\alpha_i(\zeta)=0$ on the simple Levi roots and $\alpha_i(\zeta)=1$ on the remaining simple roots, and grade by $\operatorname{ad}\zeta$. Thus
$$\mathfrak g_0=\bar{\mathfrak l},\qquad \mathfrak g_{>0}=\bar{\mathfrak u},\qquad \mathfrak g_{<0}=\bar{\mathfrak u}^{-}.$$
Degrees greater than one are retained. Put $U=U(\mathfrak g)$, $B=U(\bar{\mathfrak p})$, $N=U(\bar{\mathfrak u}^{-})$, and $\gamma=2\rho_{\mathfrak g}-2\rho_{\bar{\mathfrak l}}$, a character of $\bar{\mathfrak l}$ extended by zero to $\bar{\mathfrak u}$. For a graded vector space $V$, write $V^{\#}=\bigoplus_d(V_{-d})^*$ and
$$\underline{\operatorname{Hom}}(V,W)=\bigoplus_d\operatorname{Hom}^d(V,W).$$
Here $\operatorname{Hom}^d$ consists of maps homogeneous of degree $d$; the direct sum allows only finitely many degrees. These conventions are essential.

(1) The algebraic space $S=N^{\#}\otimes B$ has commuting left and right $U$-actions and identifications
$$S\cong N^{\#}\otimes_N U\cong U\otimes_N N^{\#}.$$
Its left action is obtained from the restricted coinduction model
$$S\cong\underline{\operatorname{Hom}}_B(U,\mathbb C_\gamma\otimes B).$$
No completion of $S$ is taken. With $P$ and $Q$ the projections of $\mathfrak g$ to $\mathfrak g_{\ge0}$ and $\mathfrak g_{<0}$, respectively, the polarization trace governing normal ordering is
$$\omega(X,Y)=\operatorname{tr}_{\mathfrak g_{\ge0}}(P\operatorname{ad}XQ\operatorname{ad}YP-P\operatorname{ad}YQ\operatorname{ad}XP)=\gamma_0([X,Y]),$$
where $\gamma_0$ is zero outside degree zero. In particular, for $X\in\mathfrak g_1$ and $Y\in\mathfrak g_{-1}$ this is $\gamma([X,Y])=\operatorname{tr}_{\mathfrak g_0}(\operatorname{ad}X\operatorname{ad}Y)$, not the full adjoint-composition trace.

(2) On graded $U$-modules free over $N$ of finite graded rank, $T=S\otimes_U-$ is an exact equivalence onto the graded $U$-modules cofree over $N$ of finite graded rank. Its inverse is $H=\underline{\operatorname{Hom}}_U(S,-)$; finite graded rank means a finite sum of grading shifts of $N$, respectively $N^{\#}$. In this restricted sense
$$\underline{\operatorname{End}}_N(N^{\#})\cong N^{\mathrm{op}}.$$
This equality is not an assertion about unrestricted endomorphisms: for $N=\mathbb C[x]$ with $\deg x=-1$, the unrestricted ring is $\mathbb C[\![x]\!]$.

(3) With the principal contragredient action $(Xf)(v)=-f(Xv)$ on the restricted dual, $\Phi(M)=(S\otimes_U M)^{\#}$ is an exact contravariant equivalence of the finite generalized-standard flag category for $\bar{\mathfrak p}$ with its own opposite. On a finite-dimensional simple $\bar{\mathfrak l}$-module $E$,
$$\Phi(\Delta^{\bar{\mathfrak p}}(E))\cong\Delta^{\bar{\mathfrak p}}(\mathbb C_{-\gamma}\otimes E^*).$$
The parabolic in this formula is unchanged.

(4) Let $c(X)=-w_0X^{\mathsf T}w_0$, which carries the upper Borel to itself and reverses the Levi blocks, and set $\Psi=c^*\Phi$. For a lower-bounded tableau shape set $n_j=m_j+1-\inf(I)$ and use the concatenated ordinary highest-weight reading $a_i$, with each column read from top to bottom in strictly decreasing order, and $\lambda_{A,i}=a_i+i-1$. The source reading is the reversed sequence of columns, without reversing positions within a column. Then
$$\Psi:\mathcal F(\bar\Delta)\longrightarrow\mathcal F(\Delta)^{\mathrm{op}},\qquad\Psi(\bar\Delta(A))\cong\Delta(A).$$
This is an exact contravariant equivalence. It preserves the tableau label and the corresponding central-character summands, including the scalar central coordinate, and the reverse-column label order is opposite to the target order. More explicitly its weight map is
$$\lambda\longmapsto w_0w_{\bar J}\lambda+2w_0\rho_{\bar{\mathfrak u}}.$$

(5) For restricted BGG transpose duality $D$, the composite $F=D\Psi$ is an exact covariant equivalence $\mathcal F(\bar\Delta)\simeq\mathcal F(\nabla)$ with $F(\bar\Delta(A))\cong\nabla(A)$.

For category-$\mathcal O$ modules these constructions use finite weight spaces and the finite direct sum of $\zeta$-eigenvalue cosets modulo $\mathbb Z$. Internal homogeneous Hom becomes the $\zeta$-locally finite part of Hom, and the dual is the weight-restricted dual. No equivalence on arbitrary category-$\mathcal O$ objects or unrestricted completed Hom spaces is asserted.

## Facts & Assumptions

**Given:** The type-$A$ Lie algebra, reversed-block parabolic, grading element, algebras $U,B,N$, restricted dual and internal Hom conventions, and tableau readings of the Statement.

[F1] PBW and root structure ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[thm-root-sl-two-triple]], [[prop-brackets-of-root-spaces]]): ordered monomials give both decompositions $U=B\otimes N=N\otimes B$ as vector spaces; the simple positive and negative root vectors and the Cartan generate $\mathfrak g$.

[F2] Parabolic structure ([[def-standard-parabolic-and-levi-subalgebras-from-simple-roots]], [[def-parabolic-category-o-for-a-standard-parabolic]], [[thm-parabolic-category-o-is-a-highest-weight-category]]): $\bar{\mathfrak l}$ is reductive, standards are $U\otimes_B E$ with $E$ finite-dimensional simple and radical acting trivially, and finite flags have finite-dimensional weight spaces and locally finite Levi action.

[F3] Restricted BGG duality ([[prop-restricted-duality-is-an-exact-involution-on-category-o]]) is exact, preserves weights and central-character summands, and sends standards to costandards.

[F4] Tableau conventions ([[def-higher-level-wedge-tensor-fock-module]]): the normally ordered top-to-bottom decreasing column reading and fixed-total-weight prefix-dominance order. Use that same column reading for the ordinary highest-weight tuple here and put $\lambda_{A,i}=a_i+i-1$.

[F5] The Axiom of Choice ([[def-axiom-of-choice]]) is available for the choice of bases and splittings; trace forms are symmetric and invariant ([[prop-trace-forms-are-symmetric-and-invariant]]).

## Proof

**Proof technique:** direct.

1.1 **All graded pieces and the crossing trace.** A positive root has degree equal to the number of omitted simple roots in its support. Hence the full positive radical is $\bigoplus_{d>0}\mathfrak g_d$, not generally $\mathfrak g_1$. The simple outside root vectors lie in $\mathfrak g_1$ and their negatives in $\mathfrak g_{-1}$; together with $\mathfrak g_0$ they generate the Lie algebra. For $H\in\mathfrak g_0$, $\operatorname{tr}_{\mathfrak g_{>0}}\operatorname{ad}H=\sum_{\alpha\in\Phi^+\setminus\Phi_{\bar J}^+}\alpha(H)=\gamma(H)$ on the Cartan. Both sides vanish on the derived Levi, so this identity holds on all of $\mathfrak g_0$. In particular $\gamma$ is a Levi character. [F1, F2, algebra]

1.2 **Restricted coinduction and the two actions.** Every component $N_{-r}$ is finite dimensional and $N_0=\mathbb C$. Give $N^{\#}$ its regular transpose bimodule actions $(nf)(a)=f(an)$ and $(fn)(a)=f(na)$. PBW gives $N^{\#}\otimes_N U=N^{\#}\otimes B$, carrying its right $U$-action. On the other hand restrict a $B$-linear map $U\to\mathbb C_\gamma\otimes B$ to $N$ using $U=B\otimes N$. A homogeneous map of degree $d$ sends $N_{-r}$ into $B_{d-r}$, hence is zero for $r>d$. Consequently it has finite support in $r$, and the remaining domains are finite dimensional. This proves $\underline{\operatorname{Hom}}_B(U,\mathbb C_\gamma\otimes B)=N^{\#}\otimes B$ even though $B_0$ is infinite dimensional. The left action is $(XG)(u)=G(uX)$. Its Lie relations follow from associativity in $U$; restriction to $N$ gives an algebraic action on $S$. The left $N$-action and right $B$-action already commute with the entire opposite action. [F1, F2, F5, construct]

2.1 For homogeneous $X,Y$ of opposite degrees, take the $P$-block trace of $[\operatorname{ad}X,\operatorname{ad}Y]$. Its terms entirely within $P\mathfrak g$ form a commutator and have trace zero, leaving exactly $\omega(X,Y)$. The bracket has degree zero; its adjoint trace on $\mathfrak g_0$ is zero since that algebra is reductive, so step 1.1 gives $\omega(X,Y)=\gamma([X,Y])$. For degrees whose sum is nonzero the crossing operators have nonzero degree and trace zero, and $\gamma_0([X,Y])=0$; degree-zero pairs have no crossing terms and $\gamma$ annihilates their bracket. This proves the displayed identity for all $X,Y$. For degrees $1,-1$, only $\mathfrak g_0$ crosses the boundary, giving the stated $\mathfrak g_0$ trace. For the root $\mathfrak{sl}_2$ example it is $2$, whereas the full trace on $\mathfrak{sl}_2$ is $4$. [F1, F2, F5, step 1.1, algebra]

2.2 **Normal ordering.** Choose a basis $H_i$ of $\mathfrak g_0$. For $X\in\mathfrak g_1$, PBW uniquely defines maps $C_i^X,R_X:N\to N$ by $aX=Xa+\sum_iH_iC_i^X(a)+R_X(a)$. All these maps have degree $1$; higher negative degrees of $a$ are retained. On $f\otimes1$ the left formulas are $H(f\otimes1)=-(f\operatorname{ad}H)\otimes1+f\otimes(H+\gamma(H))$ and $X(f\otimes1)=f\otimes X+\sum_i(fC_i^X)\otimes(H_i+\gamma(H_i))+(fR_X)\otimes1$. For $Y\in\mathfrak g_{-1}$ right multiplication gives $(f\otimes1)Y=(fL_Y)\otimes1$, where $L_Y$ is left multiplication on $N$. Comparing the two PBW expansions of $(Ya)X=Y(aX)$, with $[Y,X]=\sum_ic_iH_i$, gives $C_i^XL_Y=L_YC_i^X+c_i\operatorname{id}$ and $R_XL_Y=L_YR_X+\sum_iL_{[Y,H_i]}C_i^X$. [F1, step 1.2, algebra]

2.3 **Restricted endomorphisms and the inverse functor.** Transposing a homogeneous left $N$-endomorphism of $N^{\#}$ gives a homogeneous right $N$-endomorphism of $N$, because its homogeneous pieces are finite dimensional. Such an endomorphism is multiplication by its value at $1$. Transposition reverses composition, and summing finitely many degrees gives $\underline{\operatorname{End}}_N(N^{\#})=N^{\mathrm{op}}$. For unrestricted maps this argument produces a product of degrees: in the polynomial example $x$ acts locally nilpotently on the dual basis, so every power series in $x$ acts, and these are all the endomorphisms. Its $\zeta$-locally finite subspace under commutator is exactly the polynomial subalgebra; unrestricted completion is therefore explicitly excluded. [F1, step 1.2, algebra]

3.1 Substitute these two identities into $X((f\otimes1)Y)-(X(f\otimes1))Y$. All terms with a nonconstant operator on $N$ cancel; the remaining scalar is the difference $\gamma([X,Y])-\operatorname{tr}_{\mathfrak g_0}(\operatorname{ad}X\operatorname{ad}Y)$, multiplied by $f\otimes1$, and is zero by step 2.1. For $H,Y$ the cancellation is $[\operatorname{ad}H,L_Y]=L_{[H,Y]}$. The same relations on $f\otimes b$ follow by induction on a word in the generators $\mathfrak g_0,\mathfrak g_1$ of $B$: commute right multiplication by the next generator past $Y$, whose bracket lies in $\mathfrak g_0$ or $\mathfrak g_{-1}$. Since $U$ is generated by $\mathfrak g_0,\mathfrak g_{\pm1}$, both actions commute everywhere. Thus higher radical degrees require no extra assumption; their relations are already relations in the coinduction and tensor models, and their crossing traces were checked in step 2.1. [F1, step 1.1, step 2.1, step 1.2, step 2.2, algebra]

4.1 **Left PBW, without a dimension shortcut.** The map $U\otimes_N N^{\#}\to S$ is left multiplication on the inclusion $f\mapsto f\otimes1$. Its PBW domain is $B\otimes N^{\#}$. For a homogeneous $f$ filter first by its nonnegative dual degree and then by the ordinary PBW length of the $B$-word. In the formula for $X$, every correction decreases the dual degree; in the formula for $H$, corrections preserve that degree but decrease the $B$-length. Thus the map on the associated successive quotients is precisely the vector-space interchange $b\otimes f\mapsto f\otimes b$. Inducting over the dual degree and, at fixed degree, over PBW length proves surjectivity. A finite linear relation has a largest pair of filtration indices; its leading symbols are independent under the interchange, proving injectivity. Each expression involves finitely many words, so the argument needs neither finite dimension of $B_0$ nor a completed series. [F1, step 2.2, step 3.1, algebra]

5.1 From the right PBW model $T(M)=N^{\#}\otimes_N M$, so free finite rank becomes cofree finite rank. From the left PBW model $H(K)=\underline{\operatorname{Hom}}_N(N^{\#},K)$, which is free finite rank by step 2.3. Tensor-Hom adjunction supplies the unit and counit. On each shifted rank-one summand they are the identity under the endomorphism identification and the evaluation map, respectively, so both are isomorphisms. A short exact sequence of graded free finite-rank objects splits over $N$ since its quotient is graded free. A sequence of graded cofree objects splits over $N$ since its subobject is graded injective: $N^{\#}$ is the graded coinduction of the field, and its Hom functor is the exact dual of the corresponding homogeneous component. Hence $T,H$ preserve the exact sequences at issue. [step 1.2, step 4.1, step 2.3, algebra]

6.1 **Duality and standards.** Restricted duality with the principal antipode gives an exact anti-equivalence from finite cofree to finite free objects; the transpose of that antipode identifies the two regular transpose actions on $N^{\#}$. Finite homogeneous components give biduality, so composing with $T$ gives $\Phi$ with inverse $H\circ(-)^{\#}$; no involutivity of $T$ is assumed. For $M=U\otimes_B E$, tensor cancellation gives $T(M)=S\otimes_B E=N^{\#}\otimes E$. On the augmentation vector $\varepsilon\otimes E$, the Levi action in step 2.2 is the original $E$-action plus $\gamma$, since $\varepsilon\operatorname{ad}H=0$. Dualizing makes the generator space $\mathbb C_{-\gamma}\otimes E^*$. The positive radical annihilates this generator space by degree, and the negative regular action makes the dual free on it. The induced PBW map is therefore an isomorphism $\Phi(M)=U\otimes_B(\mathbb C_{-\gamma}\otimes E^*)$. This is a standard for the same parabolic. [F1, F2, step 2.2, step 5.1, algebra]

7.1 A finite standard flag is graded free over $N$ of finite rank, since its standard sections are such and every extension splits over $N$. Applying $\Phi$ gives a reversed finite standard flag by step 6.1. Conversely $H\circ(-)^{\#}$ sends a standard back to a standard: the transformation $E\mapsto\mathbb C_{-\gamma}\otimes E^*$ is involutive, and the unit and counit give its inverse. Induction on flag length thus restricts the equivalence precisely to the standard-flag categories. In category $\mathcal O$, $\zeta$ is semisimple; a finite generating set gives finitely many eigenvalue cosets modulo $\mathbb Z$. Choose a grading origin on each coset. Each standard has finite-dimensional graded components, because its finite Levi space has scalar $\zeta$-action and the graded pieces of $N$ are finite dimensional; the same holds for finite flags. Weight restriction and degree restriction therefore agree here. All $U$-morphisms preserve the actual $\zeta$-eigenvalues. Changing origins just shifts gradings, so the construction descends to the ungraded flag category using the $\zeta$-locally finite internal Hom. On outputs the eigenvalue cosets are shifted by $\gamma(\zeta)$ and negated by the principal dual; this is part of the construction, not an extra integrality assumption on highest weights. [F1, F2, step 5.1, step 6.1, induction]

7.2 **Reverse-column shifts.** The automorphism $c$ preserves the upper Borel and carries $\bar{\mathfrak p}$ to $\mathfrak p$. If the source Levi highest weight is $\lambda$, that of $E^*$ is $-w_{\bar J}\lambda$, so step 6.1 gives $\nu=-w_{\bar J}\lambda-2\rho_{\bar{\mathfrak u}}$ before applying $c^*$. Pullback by $c$ sends a highest weight to $-w_0\nu$, giving the displayed weight map. A target block of length $r$ starting after $b$ coordinates has reversed source offset $b'=n-b-r$. The map $w_0w_{\bar J}$ preserves its position $k=1,\ldots,r$ inside the column. The value of $2\rho_{\bar{\mathfrak u}}$ on the source block is $n-2b'-r=b-b'$, hence the value of $2w_0\rho_{\bar{\mathfrak u}}$ on the target block is $b-b'$. The source coordinate $a_i+b'+k-1$ is consequently transported to $a_i+b'+k-1+b-b'=a_i+i-1$. Thus $\Psi(\bar\Delta(A))=\Delta(A)$ including the scalar trace-centre coordinate. [F2, F4, step 6.1, algebra]

8.1 With $\rho_i=(n+1-2i)/2$, the shifted coordinate is $\lambda_{A,i}+\rho_i=a_i+(n-1)/2$. Reversing columns preserves its multiset, so corresponding source and target standards belong to matching central-character summands; extensions of standards in one summand remain in it, and hence so do the images under $\Psi$. At fixed total weight, each reversed-column prefix is the complementary suffix of the original reading; subtracting from the total changes the direction of each prefix-dominance inequality. This reverses the tableau order. Neither connectedness of a central summand nor an equivalence on arbitrary objects is used. [F2, F4, step 7.1, step 7.2, algebra]

9.1 **Covariant equivalence.** Restricted BGG duality is exact and contravariant, sends target standards to costandards and preserves the target central summands. Composing it with the contravariant equivalence $\Psi$ gives the covariant exact equivalence $F=D\Psi$ and $F(\bar\Delta(A))=\nabla(A)$. The label order reversal comes from step 8.1, whereas applying $D$ changes the variance and the kind of flag. This proves all the stated algebraic and filtered-category assertions with their restricted-Hom boundary. [F3, step 7.1, step 7.2, step 8.1] ∎
