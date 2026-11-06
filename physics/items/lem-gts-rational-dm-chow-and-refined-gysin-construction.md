---
id: lem-gts-rational-dm-chow-and-refined-gysin-construction
kind: lemma
title: Rational DM Chow groups and the deformation construction of refined Gysin
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: gts-stable-curves-algebraic-enumerative-theory
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - lem-gts-separated-dm-stacks-have-finite-scheme-covers
  - lem-vector-bundle-chow-homotopy-invariance
  - lem-gysin-specialization-bivariant-and-base-change
  - lem-zero-section-gysin-and-excess-vector-subbundle
  - def-deformation-to-the-normal-cone-and-specialization
  - def-intersection-with-a-cartier-divisor-and-first-chern-class
  - def-chow-group-of-cycles-mod-rational-equivalence
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-gts-separated-dm-stacks-have-finite-scheme-covers: mathematical-premise
  lem-vector-bundle-chow-homotopy-invariance: mathematical-premise
  lem-gysin-specialization-bivariant-and-base-change: mathematical-premise
  lem-zero-section-gysin-and-excess-vector-subbundle: mathematical-premise
  def-deformation-to-the-normal-cone-and-specialization: mathematical-premise
  def-intersection-with-a-cartier-divisor-and-first-chern-class: mathematical-premise
  def-chow-group-of-cycles-mod-rational-equivalence: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Edidin, Hassett, Kresch and Vistoli, Brauer groups and quotient stacks
      url: https://arxiv.org/pdf/math/9905049
      locator: "Theorem 2.7 and Remark 2.8; §5.1. Finite covers are locally reconstructed in the named supplier."
    - title: Behrend and Fantechi, The intrinsic normal cone
      url: https://arxiv.org/pdf/alg-geom/9601010v1
      locator: "§5, rational Chow conventions and global-resolution zero-section operation; source context only, not the construction used in this proof."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the Axiom of Choice. Work over a field $k$ with separated finite-type Deligne–Mumford stacks, and base changes remaining in that category. There is a rational Chow theory whose cycles are finite rational sums of integral closed substacks and whose relations are principal divisors of rational functions on integral substacks of one higher dimension. It has proper pushforward, flat pullback, localization and Cartier divisor operations. If $p:E\to X$ is a rank-$r$ vector bundle, $p^*:A_d(X)_{\mathbb Q}\to A_{d+r}(E)_{\mathbb Q}$ is bijective.

For a regular closed immersion $i:Z\hookrightarrow Y$ of codimension $c$, normal bundle $N$, and every $f:T\to Y$ in the stated category, put $Z_T=Z\times_YT$ and $N_T=N|_{Z_T}$. The formula
$$
i_T^!=(p_T^*)^{-1}(a_T)_*\sigma_{Z_T/T}:A_d(T)_{\mathbb Q}\longrightarrow A_{d-c}(Z_T)_{\mathbb Q}
$$
defines a well-defined refined operation. Here $a_T:C_{Z_T}T\hookrightarrow N_T$ is the canonical cone inclusion and $\sigma$ is specialization in the explicit deformation space. The operations commute with proper pushforward, flat pullback of pure relative dimension, and Cartier Gysin, and restrict along every further base morphism by reindexing the same family. No flatness of $T\to Y$ or regularity of $Z_T\hookrightarrow T$ is required. For the regular zero section $0_E:X\hookrightarrow E$, its unrefined operation on $A_d(E)$ is $(p^*)^{-1}$, and its refinements are given by the same formula after all base changes.

No biconditional characterization, uniqueness or optimal-degree assertion is made.

## Facts & Assumptions

**Given:** Full AC and the category in the Statement. Dimensions are dimensions of DM substacks, agreeing with dimensions on étale atlases. All Chow groups below have rational coefficients.

[F1] Each stack in the Statement has a finite surjective representable scheme cover $q:S\to X$, and $S\times_XS$ is a scheme. [[lem-gts-separated-dm-stacks-have-finite-scheme-covers]]

[F2] On schemes the cycle/principal-divisor quotient, Cartier intersection, vector-bundle homotopy, specialization and the conormal-surjection refined construction have the stated properties. The conormal-surjection result applies even when the pulled-back closed immersion is not regular. [[def-chow-group-of-cycles-mod-rational-equivalence]], [[def-intersection-with-a-cartier-divisor-and-first-chern-class]], [[lem-vector-bundle-chow-homotopy-invariance]], [[def-deformation-to-the-normal-cone-and-specialization]], [[lem-gysin-specialization-bivariant-and-base-change]], [[lem-zero-section-gysin-and-excess-vector-subbundle]]

## Proof

**Given:** [F1]–[F2]. We construct the quotient and its operations before using any stack homotopy or specialization assertion.

1.1 On an empty stack the cycle and relation spaces are zero, hence every displayed operation is the unique zero map. For any stack, degrees below zero or above its dimension have no integral generators and give zero groups. A rank-zero bundle is the identity map, with identity pullback; a codimension-zero regular immersion is an open-and-closed immersion locally defined by the empty regular sequence. These conventions also cover the identity immersion and the empty base-changed zero locus in the formula below. [given, construct]

1.2 For an integral DM substack $W$, its rational functions mean the invariant rational functions on an étale atlas, with the equalities imposed by the two groupoid maps; these form its function field $k(W)$. For $h\in k(W)^*$ define $\operatorname{div}_W(h)$ by passing to the normalization of $W$ and taking the discrete-valuation orders at its codimension-one points, then pushing these codimension-one cycles to $W$. On an étale chart these are ordinary scheme valuations with residue-field multiplicities, and the étale maps preserve those valuations, so they descend to a unique cycle on $W$. This includes nonnormal $W$ by the normalization prescription. Define
$$
A_d(X)_{\mathbb Q}=\left(\bigoplus_{\substack{V\subset X\ \mathrm{integral}\ \dim V=d}}\mathbb Q[V]\right)\bigg/\left\langle\operatorname{div}_W(h):\dim W=d+1,\ h\in k(W)^*\right\rangle.
$$
This is an actual specified quotient, including the relations, rather than a referral to a stack-intersection convention. [F1, F2, construct]

2.1 For a proper morphism $g:X\to Y$ and integral $V\subset X$ with image $W$, set $g_*[V]=0$ if $\dim W<\dim V$. In equal dimension set
$$
g_*[V]=[k(V):k(W)]\frac{e_W}{e_V}[W],
$$
where $e_V,e_W$ are the orders of the geometric generic inertia groups. For a representable finite map this is its ordinary generic rank, calculated after an étale scheme chart. The formula for a nonrepresentable map is fixed by the requirement that after a finite scheme cover it agrees with the scheme degree formula; the generic inertia factors telescope under composition, so this requirement gives exactly the displayed formula. Orders are finite nonzero integers because the diagonal is finite and unramified. Proper pushforward respects the relations of step 1.2: normalize an integral source relation, use the field norm if its image has the same dimension, and the ordinary degree-zero divisor identity on a proper curve over the function field if the image has dimension one less. At all other image dimensions the pushed cycle is zero. Each equality is verified on an étale chart by the scheme valuation/norm calculation; the inertia ratios are exactly the finite-cover degrees in that calculation. Thus the displayed operation descends to the quotient. [F1, F2, step 1.2, construct, algebra]

3.1 The following finite-cover relation sequence is exact:
$$
A_d(S\times_XS)\xrightarrow{(q_1)_*-(q_2)_*}A_d(S)\xrightarrow{q_*}A_d(X)\longrightarrow0.
$$
First it is exact for cycle vector spaces. Each integral $W\subset X$ has an integral lift $V\subset S$ finite surjective over $W$ with a nonzero rational degree $\delta_V$, so $[W]=q_*([V]/\delta_V)$. For any two such lifts $V_1,V_2$ choose an integral component $C$ of $V_1\times_WV_2$ dominating both. The fiber product is nonempty over their common geometric generic object, including when that object has inertia. If its projection degrees are $a,b$, multiplicativity gives $a\delta_{V_1}=b\delta_{V_2}$. Consequently the pushforward difference of $[C]$ generates the difference between the normalized lifts. These differences span the cycle kernel. To descend exactness to Chow, lift a principal relation $\operatorname{div}_W(h)$ by taking a finite integral lift $V\to W$ and $\delta_V^{-1}\operatorname{div}_V(h|_V)$; the norm/degree identity of step 2.1 pushes it to the given relation. If a cycle on $S$ pushes to a sum of principal relations, subtract these lifted principal relations; its residual pushforward is zero as a cycle and hence is a difference from $S\times_XS$. This proves exactness on the specified quotient, without assuming étale descent of Chow groups. [F1, F2, step 1.2, step 2.1, construct, algebra]

3.2 Localization for a closed substack $Z\subset X$ and its complement is exact: an integral open cycle lifts by closure, and a principal relation on the open lifts by the same function on the closure of its support; all extra divisor components lie in $Z$. Flat pullback of pure relative dimension is defined by the generic lengths of the inverse-image cycles, on étale charts. Scheme flat length formulas identify the two groupoid pullbacks, preserve principal divisors, and give proper/flat base-change and composition. These identities are equalities of cycles or of principal relations and so can be checked on the surjective étale charts, where cycles inject by their nonzero generic pullback multiplicities. No injection of Chow groups under an arbitrary atlas is asserted. [F1, F2, step 1.2, step 2.1, construct, algebra]

4.1 Cartier operations can be constructed on this quotient using a finite scheme cover of each integral test cycle. Namely lift the test cycle to a scheme with its inverse nonzero degree as in step 3.1, perform the scheme Cartier operation in [F2], and push to the divisor target. The kernel assertion of step 3.1 makes this independent of all lifts, since the scheme Cartier operation commutes with both proper projections from $S\times_XS$. For a cycle not contained in the Cartier divisor this is its local vanishing-order cycle. For a cycle contained in it, this is $c_1$ of the restricted divisor line: if that line has a generic inertia character, take a tensor power killing this finite character, choose a nonzero rational section, divide its divisor by that power, and push. Such a section exists because the character-free line on the generic residual gerbe descends to a one-dimensional vector space over its field. Changing the section multiplies it by a rational function and therefore changes the answer by precisely a relation from step 1.2; a common multiple compares two tensor powers. This also gives $c_1(\mathcal O)=0$. Proper compatibility follows already from the finite-cover construction and composition of pushforwards. Flat compatibility follows from the local vanishing-order/length formula and this rational-section formula; both reduce to the corresponding scheme identities of [F2]. Commutation of two Cartier operators follows by pulling a rational lift to its scheme cover, applying scheme commutation there and pushing, using surjectivity in step 3.1. In particular $j^!j_*\beta=c_1(L|_D)\cap\beta$ for the Cartier inclusion with normal line $L|_D$. [F1, F2, step 3.1, step 3.2, construct, algebra]

5.1 Pull a rank-$r$ bundle $E\to X$ to the finite cover $S$ and to $R=S\times_XS$. Their total spaces are schemes and form the corresponding finite-cover relation sequence for $E$. The two exact sequences in step 3.1, for $X$ and $E$, fit into a diagram whose vertical maps are bundle flat pullbacks and whose left two vertical maps are isomorphisms by scheme homotopy [F2]. Proper/flat base-change of step 3.2 makes the diagram commute. Taking cokernels proves that its rightmost map $p^*:A_d(X)\to A_{d+r}(E)$ is an isomorphism. This proves both surjectivity and injectivity, using the relation term rather than a localization-only diagram. The same construction applies to every vector bundle on every base-changed stack in the category. Naturality of its inverse for proper pushforward, flat pullback and Cartier operations follows by multiplying the required identity by the bijection $p^*$ and using the proved compatibility for $p^*$. [F1, F2, step 3.1, step 3.2, step 4.1, algebra]

5.2 For an arbitrary closed immersion $Z\subset T$ with ideal $I$, define the deformation stack over $\mathbb A^1$ by the relative algebra
$$
D_{Z/T}=\operatorname{Spec}_T\mathcal O_T[t,I/t],\qquad \mathcal O_T[t,I/t]\subset\mathcal O_T[t,t^{-1}],
$$
where the notation means that the algebra is the subalgebra generated by $t$ and all $a/t$, $a\in I$. This is an affine finite-type morphism over $T$; on each chart it is literally that subalgebra. In particular $t$ is a nonzerodivisor, the $t\ne0$ part is $T\times\mathbb G_m$, and its quotient by $t$ is $\operatorname{gr}_I\mathcal O_T$. Thus the zero fiber is the normal cone $C_ZT$ with all its multiplicities, its inclusion $j$ is Cartier, and its normal line is trivial. All charts glue by their identical ideal algebra. Let $u:T\times\mathbb G_m\hookrightarrow D$ be the open inclusion. For $\alpha\in A_d(T)$ choose, using localization in step 3.2, a lift $\widetilde\alpha\in A_{d+1}(D)$ of its flat pullback to $T\times\mathbb G_m$, and set $\sigma_{Z/T}(\alpha)=j^!\widetilde\alpha$. Two lifts differ by $j_*\beta$, and step 4.1 gives $j^!j_*\beta=c_1(\mathcal O)\cap\beta=0$. Hence this is well defined on Chow classes. On an integral $V\subset T$, closure of $V\times\mathbb G_m$ has chart algebra $\mathcal O_V[t,I\mathcal O_V/t]$, so specialization is the fundamental cycle of $C_{Z\cap V}V$, pushed to $C_ZT$. [F2, step 3.2, step 4.1, construct, algebra]

6.1 If $h:T'\to T$ is proper and $Z'=Z\times_TT'$, the generator description gives a surjection $\mathcal O_{T'}\otimes_{\mathcal O_T}\mathcal O_T[t,I/t]\twoheadrightarrow\mathcal O_{T'}[t,I\mathcal O_{T'}/t]$. Therefore $D_{Z'/T'}$ is a closed substack of $D_{Z/T}\times_TT'$, so its induced map to $D_{Z/T}$ is proper. Its ordinary part is the proper base change $T'\times\mathbb G_m\to T\times\mathbb G_m$, and its special-fiber square is Cartesian because both special fibers are cut by $t$. Push a lift from its source deformation to its target deformation and use proper/Cartier compatibility of step 4.1. This proves $\sigma h_*=h_{C,*}\sigma$ directly, including all generic degrees. Flat compatibility follows by flat base change of the ideal algebra, since flat tensor preserves its ideal powers and injections; pullback of a chosen lift is then a lift. These arguments prove proper and flat compatibility of specialization, retaining all generic degrees and multiplicities. Cartier compatibility of the final refined operation will instead be proved by the scheme conormal-surjection operation and finite-cover descent in steps 7.1–8.1; no identification of a nonflat pullback of a deformation algebra with the deformation of the pulled-back ideal is used. [F2, step 2.1, step 3.2, step 4.1, step 5.2, construct, algebra]

6.2 If $i:Z\hookrightarrow Y$ is regular of codimension $c$, its conormal is locally free of rank $c$. For any $T\to Y$, the pulled-back equations give a surjection
$$
N_T^\vee\twoheadrightarrow I_T/I_T^2,
$$
so the induced graded surjection $\operatorname{Sym}(N_T^\vee)\twoheadrightarrow\operatorname{gr}_{I_T}\mathcal O_T$ gives the closed cone immersion $a_T:C_{Z_T}T\hookrightarrow N_T$. It exists for arbitrary base change because only the quotient ideal and the surjection are used; no false equality of arbitrary-base-changed associated graded algebras is needed. Steps 5.1–5.2 now define exactly the displayed operation $(p_T^*)^{-1}(a_T)_*\sigma_{Z_T/T}$ on the specified rational-equivalence quotient, with dimension lowered by $c$. [F2, step 5.1, step 5.2, construct, algebra]

7.1 This operation also has a useful descent description which verifies that no choice was hidden in step 6.2. Take a finite scheme cover $q:S\to T$. Pull back the ideal, the conormal surjection and its rank-$c$ bundle. The scheme conormal-surjection operation in [F2] defines a map $A_d(S)\to A_{d-c}(Z_S)$. Proper compatibility for both projections from the scheme $S\times_TS$ makes this operation descend through the exact sequence of step 3.1 to $A_d(T)\to A_{d-c}(Z_T)$. Step 6.1 and the proper naturality of the inverse bundle pullback in step 5.1 identify it with the operation of step 6.2. A common finite cover compares any two choices; no regularity of $Z_S\hookrightarrow S$ was required. [F1, F2, step 3.1, step 5.1, step 6.1, step 6.2, algebra]

8.1 Proper and flat compatibility follow by composing the compatibilities of steps 5.1 and 6.1 with proper/flat base-change for the cone inclusion. For Cartier compatibility, let a line bundle and section on $T$ cut out $D$, and choose a finite scheme cover $q:S\to T$. The pulled-back zero locus $D_S$ need not be Cartier; nevertheless its Cartier Gysin exists by [F2]. Every class on $T$ is $q_*\beta$ by step 3.1. Apply the two iterated operations to this expression: proper compatibility of Cartier Gysin (step 4.1) and of the refined operation (steps 5.1, 6.1 and 7.1) expresses both answers as pushforwards from the corresponding iterated zero locus on $S$. There they agree by the Cartier compatibility of the scheme conormal-surjection operation in [F2]. Thus they agree on $T$. This proves the identity also when either pulled-back zero locus is nonregular. Proper compatibility for a nonrepresentable proper map may also be checked after finite scheme covers of its source and target: their fiber product is a scheme by the fiber-product assertion of the cover supplier, its scheme pushforward equality descends by step 3.1, and the generic inertia ratios telescope as in step 2.1. To restrict along an arbitrary map $T'\to T$, simply apply the same formula to $Z\times_YT'\hookrightarrow T'$ and $N|_{Z\times_YT'}$. The two possible indexings have the identical quotient ideal, conormal map and deformation algebra; hence they give the same operation. This assertion is reindexing of a bivariant family, not an assertion that Chow pullback exists for every map or that the cone itself commutes with every nonflat map. [F2, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 6.2, step 7.1, algebra]

9.1 Finally apply the construction to $0_E:X\hookrightarrow E$. Choose a finite scheme cover $S\to X$ and its induced finite scheme cover $E_S\to E$. On the scheme $E_S$, every Chow class is a bundle pullback by [F2]. For a generating pullback $[E_V]$ from an integral $V\subset S$, the normal cone of $V$ in $E_V$ is $E_V$ itself, with its identity inclusion into the normal bundle: the associated graded of the positive-degree ideal in $\operatorname{Sym}(E^\vee|_V)$ is that same symmetric algebra. Specialization therefore gives $[E_V]$, and the inverse bundle pullback gives $[V]$. Linearity proves that this unrefined scheme operation is exactly the inverse bundle pullback. The descent description of step 7.1 and the bundle isomorphism of step 5.1 identify its unrefined operation with $(p^*)^{-1}$ on $A_*(E)$. The equality after arbitrary base changes means the same refined family of step 6.2; the base-changed zero locus need not be regularly embedded. For rank one the same construction uses the line-bundle inverse of step 5.1, and for codimension one its scheme descent is precisely Cartier Gysin in [F2]. For codimension zero the conormal bundle has rank zero and the deformation formula restricts a cycle to the open-and-closed zero locus; for the identity immersion this is the identity. Nonreduced test stacks retain their generic lengths and the full associated-graded algebra throughout. All chosen integral lifts dominate nonempty integral supports and have nonzero rational degrees by step 3.1; no degree zero is inverted. This proves all asserted operations and compatibilities at the original separated finite-type DM scope. [F2, step 5.1, step 6.2, step 7.1, step 8.1, algebra] ∎
