---
dependency_level: 13
id: lem-rigidified-picard-ray-quotients-over-finite-fields
kind: lemma
title: Rigidified Picard schemes and physical ray quotients over finite fields
deps:
- thm-picard-zero-represented-by-jacobian
- thm-full-riemann-roch-divisor
- cor-canonical-degree-two-g-minus-two
- cor-negative-degree-no-sections-rr
- thm-line-bundle-rational-section-cartier-divisor
- thm-cartier-weil-divisors-curves-agree
- thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
- thm-global-functions-proper-integral-variety
- thm-projective-bundle-represents-line-quotients
- def-projective-bundle-scheme
- def-relative-proj-quasi-coherent-graded-algebra
- lem-faithfully-flat-effective-descent-of-modules-and-algebras
- lem-nonaffine-affine-and-finite-morphism-fppf-descent
- lem-nonaffine-effective-affine-algebra-descent
- thm-jacobian-criterion-smooth-morphism
- thm-etale-morphisms-open-and-quasi-finite
- cor-weak-nullstellensatz-algebraically-closed-coordinate-form
- lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
- thm-frobenius-endomorphism-and-finite-field-automorphism
- lem-nonempty-smooth-scheme-finite-separable-point
- thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
- thm-multiplicative-group-of-a-finite-field-is-cyclic
- lem-cyclic-group-cohomology-norm-and-inflation
- def-idele-group-of-a-global-field
- def-idele-class-group-of-a-global-field
- thm-global-field-element-integral-at-all-but-finitely-many-places
- def-completion-of-a-global-field-at-a-place
- lem-function-field-discrete-idele-cohomology-and-local-invariants
- def-axiom-of-choice
- def-dependent-choice
- thm-choice-implies-dependent-implies-countable-choice
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
axiom_use: AC and DC exactly; AC implies Countable Choice when needed. Full arbitrary-test affine
  descent and nonreduced modulus retained. Commutative Lang finiteness is proved via finite
  constant-group torsor descent, not point counts. The nonzero-modulus premise is essential
  and never replaced by an empty-modulus convention.
sources:
  references:
  - title: Quentin Guignard, On the ramified class field theory of relative curves, arXiv1804.02243v2
    url: https://arxiv.org/pdf/1804.02243v2
    locator: Section4.1–4.14, printed/PDF16–21, full actual rigidified-Picard and Abel-map proofs
      read. The all-test construction is reconstructed from local Picard/projective-bundle/affine-descent
      suppliers; no geometric CFT theorem is imported.
  - title: Hanming Liu, Geometric Class Field Theory, arXiv2211.09730v1
    url: https://arxiv.org/pdf/2211.09730v1
    locator: Sections3.1–3.5 and4.1–4.2, printed12–27/PDF14–29, full relevant passages read.
      Cited Weil, singular Riemann–Roch and arbitrary-field results are not imported; finite-field
      Lang/ray norm cofinality is proved explicitly.
verification: {}
proof_strategy: direct
---

## Statement

Assume AC and DC. Let $k=\mathbb F_q$, let $C/k$ be a smooth proper geometrically integral curve of genus $g$, put $F=k(C)$, and let $D=\sum_v n_vv$ be a nonzero effective divisor. Put $U=C\setminus|D|$ and $N=\deg D>0$. The functor of isomorphism classes of pairs $(L,\rho)$, where $L$ is a line bundle on $C_T$ and $\rho:\mathcal O_{D_T}\xrightarrow{\sim}L|_{D_T}$, is represented on every $k$-scheme $T$ by a separated group scheme $P_D$ locally of finite type. Its degree-zero group $J_D=P_D^0$ is smooth and geometrically connected, and the forgetful map fits into an fppf exact sequence $1\to G_D\to J_D\to J_C\to0$, with $G_D=(H^0(D,\mathcal O_D)^\times)/\mathbb G_m$ interpreted as the finite-algebra unit-group fppf quotient. The map $J_D\to J_C$ is affine and smooth of relative dimension $N-1$.
There is a signed $k$-divisor $D_0$ of degree one supported in $U$. With its canonical $D$-rigidification,
$$C_F/\operatorname{im}(V_D)\xrightarrow{\sim}P_D(k)\xrightarrow{\sim}J_D(k)\times\mathbb Z,$$
where $V_D=\prod_{v\notin|D|}\mathcal O_v^\times\times\prod_{v\in|D|}(1+\mathfrak m_v^{n_v})$, the first map sends an outside uniformizer idèle to its divisor pair, and the second sends a divisor $E$ to $([E-\deg(E)D_0],\deg(E))$. The group $J_D(k)$ is finite. The Lang map $\Phi_q-1:J_D\to J_D$ is a finite étale torsor with constant kernel $J_D(k)$, where $\Phi_q$ acts on geometric points by arithmetic Frobenius. No rational point of $C$, reducedness of $D$, or Noetherian/reduced hypothesis on $T$ is required.

## Statement references

[[thm-picard-zero-represented-by-jacobian]]
[[thm-full-riemann-roch-divisor]]

## Facts & Assumptions

**Given:** Exactly the curve, finite field, nonzero modulus and AC/DC in the Statement.

[F1] The full relative Picard fppf sheaf is represented, its degree subfunctors are open and closed, and $J_C$ is smooth proper geometrically connected. After a field extension with a curve point $P$, the all-test $P$-rigidified functor has its universal normalized line bundle. This does not assert an ordinary universal bundle without $P$.
[[thm-picard-zero-represented-by-jacobian]]

[F2] Full Riemann–Roch and dual sections give $H^1(C,L)=0$ for $\deg L>2g-2$; the canonical degree is $2g-2$ and negative-degree bundles have no section. Every line bundle has a rational section and Cartier/Weil divisors agree. Finite affine Čech covers compute quasi-coherent cohomology; proper geometrically integral curves have only constant global functions.
[[thm-full-riemann-roch-divisor]] [[cor-canonical-degree-two-g-minus-two]]
[[cor-negative-degree-no-sections-rr]]
[[thm-line-bundle-rational-section-cartier-divisor]]
[[thm-cartier-weil-divisors-curves-agree]]
[[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]
[[thm-global-functions-proper-integral-variety]]

[F3] In the quotient convention $\mathbb P(E)$ represents invertible quotients of $E$; lines in $V$ are represented by $\mathbb P(V^\vee)$ with tautological line $\mathcal O(-1)$. Homogeneous principal opens of relative Proj are affine over an affine base.
[[thm-projective-bundle-represents-line-quotients]]
[[def-projective-bundle-scheme]]
[[def-relative-proj-quasi-coherent-graded-algebra]]

[F4] Faithfully flat module/algebra descent is effective with the entire overlap tensor cocycle, including arbitrary modules and tests. Affine morphisms and finite morphisms descend along quasi-compact fppf covers.
[[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]
[[lem-nonaffine-affine-and-finite-morphism-fppf-descent]]
[[lem-nonaffine-effective-affine-algebra-descent]]

[F5] The smooth equal-dimension Jacobian criterion detects étale morphisms; these are open and quasi-finite. A nonempty finite-type scheme over an algebraically closed field has a rational closed point; finite-type fields are finite algebraic. Frobenius has zero differential. A nonempty smooth curve has a finite separable closed point.
[[thm-jacobian-criterion-smooth-morphism]]
[[thm-etale-morphisms-open-and-quasi-finite]]
[[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]
[[thm-frobenius-endomorphism-and-finite-field-automorphism]]
[[lem-nonempty-smooth-scheme-finite-separable-point]]

[F6] Finite extensions of finite fields are cyclic Frobenius extensions. Multiplicative finite-field groups are cyclic, so their field norm is onto. Cyclic $H^2$ is the fixed-module norm quotient, under the supplied ordinary resolution convention.
[[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]
[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]
[[lem-cyclic-group-cohomology-norm-and-inflation]]

[F7] Idèles are the physical restricted product and $C_F$ its topological quotient by $F^\times$. Global elements are units almost everywhere. The actual completion is dense and preserves the discrete valuation, hence finite local-ring quotients.
[[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]]
[[thm-global-field-element-integral-at-all-but-finitely-many-places]]
[[def-completion-of-a-global-field-at-a-place]]
[[lem-function-field-discrete-idele-cohomology-and-local-invariants]]

[A1] AC and DC are literal assumptions. AC supplies the algebraic closure, finite field/point choices and stated scheme/cohomology conventions and implies Countable Choice if an interface requires it.
[[def-axiom-of-choice]] [[def-dependent-choice]]
[[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** direct commutative Lang calculation, all-test determinant-open affine descent, and finite-jet Riemann–Roch.

**Given:** The stated data. Use additive notation for commutative group schemes and write $\Omega$ for an algebraic closure of $k$.

1.1 First prove the Lang assertion for any smooth geometrically connected separated finite-type commutative $k$-group $G$. The homomorphism $\lambda=\Phi_q-1$ has differential $-1$, hence is étale and open by [F5]. Over $\Omega$, its image on $\Omega$-points is a subgroup $H$ and its topological image is an open $W$. Distinct $H$-cosets give disjoint translates of $W$: a nonempty intersection of two such open subsets contains an $\Omega$-point by [F5], contradicting the coset relation. These translates cover the scheme, since their union contains every $\Omega$-point and a nonempty closed complement would have such a point. Thus $W$ is clopen; geometric connectedness forces $W=G_\Omega$. This proves surjectivity. The kernel is étale, zero-dimensional and finite type; it has finitely many points, each an open point with finite residue field extension, so is finite étale. Its geometric points are precisely the Frobenius-fixed points $G(k)$ and are rational, so it is the constant finite group $G(k)$. On every test, subtracting two equal-image points identifies $G\times G(k)$ with $G\times_{\lambda,G,\lambda}G$. Hence $\lambda$ is an fppf torsor. Base change by itself makes it finite étale; the affine/finite descent in [F4] proves finiteness before that cover. Its already proved étaleness remains, so it is finite étale. No properness or point-count estimate is used. [A1, F4, F5, given, construct, algebra]

2.1 The represented degree-one Picard component in [F1] is an fppf $J_C$-torsor: after a finite field extension with a curve point it has $\mathcal O(P)$, and on every test the difference of two degree-one classes is a unique degree-zero class. Choose a geometric point $x$ of this torsor and write $\Phi_q(x)=x+c$. Apply step 1.1 to $J_C$ to find $h$ with $\Phi_q(h)-h=-c$. Then $x+h$ is Frobenius fixed, hence a $k$-point of the represented degree-one component. To represent it by an actual line bundle, take a finite-type affine member of an fppf cover supplying a representative, and take a closed point of it. Its residue field $K/k$ is finite, hence cyclic Galois by [F6]. Equality in the Picard sheaf implies two line bundles differ by a base line: fppf-local trivializations of their quotient have base-unit transition functions, since on an affine test $T=\operatorname{Spec}A$ a finite affine Čech cover of $C$ gives $H^0(C_A,\mathcal O)=A$ by tensoring its degree-zero kernel $k$ with the flat $k$-module $A$. Arbitrary tests glue. Over the field $K$ the base line is trivial. Therefore choose isomorphisms $\sigma L\to L$; their scalar failure cocycle lies in $K^\times$. Its $H^2$ is zero by [F6]: the cyclic norm quotient is $k^\times/NK^\times=0$, because the finite-field power norm is onto. Rescale by a finite $1$-cochain and use [F4] to descend the bundle. This gives a degree-one line bundle $B$ over $k$ without asserting an ordinary universal Poincaré bundle. [A1, F1, F2, F4, F5, F6, step 1.1, construct, algebra]

3.1 Choose a closed point $Q$ in the nonempty open $U$ and put $H_0=Q$. The algebra $R=H^0(D,\mathcal O_D)$ is a finite product of Artin local rings, so every invertible $R$-module is free: choose one generator over each residue field, lift it and apply Nakayama; its resulting surjection between rank-one local free modules is an isomorphism. There are only finitely many factors. For any line bundle $L$ and prescribed generator of $L|D$, take $r$ large enough that $\deg(L(rH_0)(-D))>2g-2$. By [F2], its $H^1$ is zero, so the restriction sequence gives a section of $L(rH_0)$ with that prescribed value. It is nonzero along $D$; its divisor, minus $rH_0$, is a signed divisor representing $L$ supported in $U$. For $L=B$ obtain $D_0$ of degree one and its canonical $D$-trivialization. The same restriction argument gives simultaneous approximation to arbitrary finite Laurent jets at a finite set $S$: allow a pole divisor at $S$, use a sufficiently large multiple of a closed point outside $S$, and kill $H^1$ after subtracting the required finite thickening. Density and unchanged valuation identify the curve local-ring quotients with completion quotients: approximation represents every class modulo a fixed positive valuation threshold, and injectivity is valuation equality. Thus the rational section gives the required completion jets. Nonzero target jets give a nonzero rational function. This proves precisely the finite approximation used below. [A1, F2, F5, F7, step 2.1, construct, algebra]

3.2 The presheaf of $D$-pairs is an fppf sheaf on arbitrary tests. An automorphism of a line bundle on $C_T$ is a base unit by the Čech kernel computation of step 2.1, and a base unit equal to1 on $D_T$ is1 because $D_T\to T$ is finite faithfully flat of positive rank. Thus isomorphisms of rigidified pairs are unique and satisfy the descent cocycle. Effective module descent [F4] then descends every fppf-local pair and its maps. Tensor product and fibre degree give its group law and degree subfunctors. [F1, F2, F4, step 2.1, construct, algebra]

4.1 Choose a finite field extension $K/k$ with $P\in C(K)$. Over $Z=\operatorname{Pic}^d_{C_K/K}$ translation by $\mathcal O(dP)$ identifies this component with $J_{C_K}$, so it is smooth and finite type. The all-test provider [F1] gives the universal $P$-normalized bundle $M$. Push $M|_{D_K\times Z}$ forward to a rank-$N$ vector bundle $V$. It is finite projective locally: an invertible module over the finite locally free algebra is a summand of a finite free module, and its fibre rank over the base is $N$. In $\mathbb P_Z(V^\vee)$ in [F3]'s QUOTIENT convention let $\ell=\mathcal O(-1)\subset V$ be the tautological line. The condition that multiplication $(\mathcal O_{D_K}\otimes\mathcal O_Z)\otimes\ell\to M|D$ be an isomorphism is the nonvanishing of its homogeneous determinant of degree $N$. Locally on $Z$, this is $D_+(\det)$ in projective space, affine by [F3], and smooth of relative dimension $N-1$ since it is open in a projective bundle. The bundle $M\otimes p^*\ell^{-1}$ has its universal $D$-rigidification there. Conversely, a pair with underlying Picard class $z:T\to Z$ is $M_z$ tensored with a base line by step 2.1; its rigidification is exactly an invertible line in $z^*V$ with that determinant nonzero. These constructions are inverse on ALL tests, including nonreduced and non-Noetherian tests, and on maps, not just field-valued frames modulo scalars. [F1, F3, F4, step 2.1, step 3.2, construct, algebra]

5.1 The two pullbacks of this affine-over-$\operatorname{Pic}^d$ scheme to the whole $K\otimes_kK$ represent the same sheaf of pairs by step 4.1. Their unique representing isomorphism satisfies the cocycle over the triple tensor algebra. Descend their affine algebras over each affine open of $\operatorname{Pic}^d_k$ by [F4] and glue by uniqueness. This constructs $P_D^d$ on every test. Finite presentation, affineness, smoothness and separatedness follow from the determinant charts and fppf descent; for smoothness one can descend their finite Jacobian presentations. The universal pair and group operations descend by step 3.2's uniqueness. The disjoint union of these degree pieces represents $P_D$, since degree is locally constant in [F1]. No ordinary universal bundle is descended to $k$ without a curve point. [F1, F3, F4, step 3.2, step 4.1, construct, algebra]

6.1 The forgetful map has kernel $G_D=R^\times/\mathbb G_m$ as a sheaf: a trivial underlying Picard class is a base line, and its frames on $D$ differ by $R$-units modulo base scalars, exactly the determinant-open construction. The same calculation makes $P_D^0\to J_C$ a $G_D$-torsor. Over $\Omega$, the smooth-curve local parameters identify the factors of $D_\Omega$ with $\Omega[t]/t^e$. Their unit varieties are $\mathbb G_m\times\mathbb A^{e-1}$; dividing all factors by one common scalar gives $G_{D,\Omega}\cong\mathbb G_m^{s-1}\times\mathbb A^{N-s}$ as a variety, where $s$ is the geometric number of support points. Thus it is smooth geometrically connected, including nilpotent moduli in arbitrary characteristic. The total $J_D$ is smooth with geometrically connected fibres over connected $J_C$. A geometric clopen separation of the total space would give disjoint open images in $J_C$: its fibres are connected and its map is smooth open. This is impossible. Hence $J_D$ is geometrically connected, separated and finite type, with affine smooth map of relative dimension $N-1$. Apply step 1.1 to get its asserted finite étale Lang torsor and finite constant kernel $A_D=J_D(k)$. Finiteness of $A_D$ also follows directly from a finite affine cover over finite $k$. [F1, F4, F5, step 1.1, step 4.1, step 5.1, algebra]

7.1 By step 3.1, every $k$-pair has a rational section with exactly its specified rigidification along $D$. Its divisor is supported in $U$. Conversely a divisor $E$ in $U$ gives $(\mathcal O(E),1)$, and this pair is trivial precisely when $E=\operatorname{div}(f)$ with $f|D=1$. Thus $P_D(k)=\operatorname{Div}(U)/\{\operatorname{div}(f):f\equiv1\pmod D\}$. The map from divisors to $C_F/\operatorname{im}(V_D)$ by outside uniformizer idèles is onto: for any idèle $a$, step 3.1 chooses $f\in F^\times$ with $fa_v\in1+\mathfrak m_v^{n_v}$ at the finitely many places in $D$; the other valuations of $fa$ give a finite divisor on $U$ by [F7]. Its kernel consists exactly of the displayed principal congruence divisors; changing an outside uniformizer changes only an outside unit. Hence this is the first claimed isomorphism with the actual physical quotient. Degree and the pair of $D_0$ split it as $A_D\times\mathbb Z$. In particular, the elements $b_v=[v-\deg(v)D_0]$ for ALL closed $v\in U$ generate $A_D$: write any degree-zero divisor representative as $\sum n_vv$ and use $\sum n_v\deg(v)=0$. The image of $V_D$ in $C_F$ is open, since its inverse image is the union $F^\times V_D$ of open translates, so these quotient maps to finite $A_D$ are continuous. This proves every claimed identity and map, with $D_0$ signed rather than a rational point. [F2, F7, step 3.1, step 5.1, step 6.1, construct, algebra] ∎
