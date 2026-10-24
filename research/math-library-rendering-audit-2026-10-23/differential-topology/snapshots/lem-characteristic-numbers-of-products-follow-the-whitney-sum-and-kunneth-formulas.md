---
id: lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas
kind: lemma
title: "Characteristic numbers of products satisfy the Whitney-sum and Kunneth product formulas"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-kronecker-pairing-is-multiplicative-under-cross-products, lem-fundamental-class-of-a-product-of-closed-manifolds, def-stiefel-whitney-number-of-a-closed-manifold, def-pontryagin-number-of-a-closed-oriented-manifold, thm-canonical-tangent-and-cotangent-splittings-for-products, thm-whitney-sum-formula-for-stiefel-whitney-classes, thm-naturality-of-stiefel-whitney-classes, thm-pontryagin-whitney-product-away-from-two, thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes, thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism, cor-field-kunneth-isomorphism-for-homology-of-products, def-kronecker-evaluation-pairing, def-pontryagin-classes-by-complexification, thm-naturality-normalization-and-whitney-sum-for-chern-classes, cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion, prop-complexification-is-conjugation-invariant, lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives, def-axiom-of-choice, thm-top-homology-characterizes-compact-orientable-manifolds, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Section 16, Lemma 16.2 and Corollaries 16.3-16.5, printed pp. 190-193: products for the monomial-symmetric s-classes, with the Pontryagin congruence modulo two-torsion on p. 193. The labeled-index formula for ordinary monomials is proved locally here."
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lecture 1, printed pp. 12-13 and Lecture 11, printed pp. 96-98, for the product behaviour of characteristic numbers"
dependency_level: 1
---

## Statement

Assume AC ([[def-axiom-of-choice]]), inherited from the Kunneth, Whitney-sum,
Pontryagin-multiplicativity and characteristic-number suppliers, and used only
there. Let $M^m$ and $N^n$ be closed smooth manifolds, and write
$T(M\times N)\cong TM\boxplus TN$ for the canonical splitting of the tangent
bundle of a product
([[thm-canonical-tangent-and-cotangent-splittings-for-products]]). The total
Stiefel-Whitney class is multiplicative under the Kunneth cross product,
$$w(T(M\times N))=w(TM)\times w(TN).$$
For the Pontryagin classes the identity $p(T(M\times N))=p(TM)\times p(TN)$
holds over $\mathbb Z[1/2]$, and it holds integrally whenever the odd Chern
classes of $TM_{\mathbb C}$ and $TN_{\mathbb C}$ vanish, in particular when $M$
and $N$ are complex manifolds; integrally the difference is the two-torsion
cross term
$$p(T(M\times N))-p(TM)\times p(TN)=\sum_{a,b\ge0}(-1)^{a+b+1}\,c_{2a+1}(TM_{\mathbb C})\times c_{2b+1}(TN_{\mathbb C}).$$
In all cases the characteristic numbers expand by splitting each labeled
index. For $I=(i_1,\ldots,i_t)$ with $\sum_l i_l=m+n$,
$$w^I[M\times N]=\sum_{a_l+b_l=i_l}w_{a_1}\cdots w_{a_t}[M]\,w_{b_1}\cdots w_{b_t}[N]\in\mathbb F_2.$$
For closed oriented $M^{4a},N^{4b}$ and $J=(j_1,\ldots,j_t)$ with
$\sum_lj_l=a+b$,
$$p_J[M\times N]=\sum_{a_l+b_l=j_l}p_{a_1}\cdots p_{a_t}[M]\,p_{b_1}\cdots p_{b_t}[N]\in\mathbb Z.$$
Each sum runs over nonnegative pairs independently for every $l$. Zero-index
classes are $1$ and are omitted from the resulting partitions; a factor
monomial of the wrong degree contributes zero. In particular indices may
split nontrivially, such as $2=1+1$. A cross product of specified top-degree
monomials from the two factors evaluates to the product of their numbers.

## Facts & Assumptions

**Given:** Closed smooth manifolds $M^m$ and $N^n$ and the product $M\times N$ with its product smooth structure; oriented structures where Pontryagin numbers occur, with $m=4a$, $n=4b$ in that case.

[F1] [[thm-canonical-tangent-and-cotangent-splittings-for-products]] gives the canonical isomorphism $T_{(p,q)}(M\times N)\cong T_pM\oplus T_qN$, hence a canonical bundle isomorphism $T(M\times N)\cong\pi_1^*TM\oplus\pi_2^*TN$ over the projections.

[F2] [[def-stiefel-whitney-number-of-a-closed-manifold]] and [[def-pontryagin-number-of-a-closed-oriented-manifold]] define the characteristic numbers as evaluations on the fundamental class, componentwise over components, with the conventions $w_0=1$, $w_i=0$ for $i>\dim$, $p_0=1$, $p_i=0$ for $2i>\operatorname{rank}$, and with the value $0$ assigned to monomials of the wrong total degree.

[F3] [[thm-whitney-sum-formula-for-stiefel-whitney-classes]] gives the mod-two Whitney formula $w(E\oplus F)=w(E)w(F)$ and the trivial-summand stability over the admissible bases of that theorem; [[thm-naturality-of-stiefel-whitney-classes]] gives naturality under pullback and invariance under bundle isomorphism.

[F4] [[def-pontryagin-classes-by-complexification]] defines $p_i(E)=(-1)^ic_{2i}(E_{\mathbb C})$; [[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]] gives naturality, stability and the rank cutoff; [[thm-naturality-normalization-and-whitney-sum-for-chern-classes]] gives naturality and the integral Whitney formula for Chern classes; [[cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion]] gives $2c_{2j+1}(E_{\mathbb C})=0$; [[prop-complexification-is-conjugation-invariant]] gives $c_i(\overline V)=(-1)^ic_i(V)$; [[thm-pontryagin-whitney-product-away-from-two]] gives $p(E\oplus F)=p(E)p(F)$ over $\mathbb Z[1/2]$ and asserts no integral multiplicativity.

[F5] [[lem-fundamental-class-of-a-product-of-closed-manifolds]] gives $[M\times N]=[M]\times[N]$ for the product orientation, and over $\mathbb F_2$ for the canonical mod-two orientations; [[lem-kronecker-pairing-is-multiplicative-under-cross-products]] gives $\langle\alpha\times\beta,c\times d\rangle=\langle\alpha,c\rangle\langle\beta,d\rangle$.

[F6] [[def-kronecker-evaluation-pairing]] and [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]] make the pairing well defined and biadditive, so a class $x$ with $2x=0$ pairs to zero with every integral homology class, since $2\langle x,z\rangle=\langle2x,z\rangle=0$ in $\mathbb Z$; [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]] defines the external product $a\times b=\operatorname{pr}_1^*a\smile\operatorname{pr}_2^*b$ and its multiplication $(a\times b)(a'\times b')=(-1)^{|b||a'|}(aa')\times(bb')$; [[cor-field-kunneth-isomorphism-for-homology-of-products]] gives the field-coefficient Kunneth isomorphism used for the mod-two evaluations.

[F7] [[thm-top-homology-characterizes-compact-orientable-manifolds]] gives homology vanishing above the dimension on each compact connected component; [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]] gives the corresponding mod-two cohomology vanishing under AC. The Pontryagin-number definition gives CW-type transport of naturality and stability; the same transport, using the Chern Whitney and conjugation identities on a CW model, gives [F4] on smooth-manifold bases.

## Proof

1.1 By [F1, F3], $w(T(M\times N))=\pi_1^*w(TM)\pi_2^*w(TN)=w(TM)\times w(TN)$. Thus $w_{i_l}(T(M\times N))=\sum_{a_l+b_l=i_l}w_{a_l}(TM)\times w_{b_l}(TN)$. Multiplying these finite sums gives the displayed indexed expansion; Koszul signs disappear over $\mathbb F_2$. By [F5] each term whose factor degrees are $m,n$ evaluates to the product of its factor numbers. A factor class above its manifold dimension is zero by top-homology vanishing and field duality; since the two degrees sum to $m+n$, every term with unequal factor degrees has such an over-dimension factor. Hence precisely the wrong-degree terms contribute zero, as stipulated in [F2]. [F1, F2, F3, F5, F6, F7]

2.1 Pontryagin defect. Complexifying the splitting [F1] and using naturality and the Whitney formula for Chern classes [F4] gives $c\bigl((T(M\times N))_{\mathbb C}\bigr)=\pi_1^*c(TM_{\mathbb C})\cdot\pi_2^*c(TN_{\mathbb C})$. Writing $c(TM_{\mathbb C})=\sum_ic_i$ and $c(TN_{\mathbb C})=\sum_jc_j$ and comparing even parts with the definition $p_k=(-1)^kc_{2k}$ [F4] gives $$p(T(M\times N))-p(TM)\times p(TN)=\sum_{a,b\ge0}(-1)^{a+b+1}c_{2a+1}(TM_{\mathbb C})\times c_{2b+1}(TN_{\mathbb C}),$$ because the even-even terms reassemble to the cross product of the two total Pontryagin classes and each odd-odd term appears with the sign recorded. Each odd Chern class of a complexified real bundle is two-torsion by [F4], so the right-hand side, a sum of cross products of two-torsion classes, is two-torsion; hence it vanishes in $H^*(M\times N;\mathbb Z[1/2])$, giving the stated identity over $\mathbb Z[1/2]$, which also follows directly from the away-from-two multiplicativity in [F4]. If the odd Chern classes of $TM_{\mathbb C}$ and $TN_{\mathbb C}$ all vanish the correction is zero, so the identity is integral. [F1, F4, step 1.1]

3.1 The complex-manifold case. If $M$ and $N$ are complex manifolds, then $TM$ and $TN$ are complex vector bundles, and the complexification of an underlying real complex bundle is $V\oplus\overline V$: the map $v\otimes z\mapsto(zv,z\bar v)$ is complex linear, with inverse $(a,\bar b)\mapsto\frac{a+b}{2}\otimes1+\frac{a-b}{2i}\otimes i$, where $v\mapsto\bar v$ is the canonical antilinear copy. The formulas respect local frames. Thus $(TM_{\mathbb R})_{\mathbb C}\cong TM\oplus\overline{TM}$; by the conjugation formula of [F4], $c(\overline{TM})$ is obtained from $c(TM)$ by $c_i\mapsto(-1)^ic_i$, so the odd part of $c(TM\oplus\overline{TM})$ cancels in pairs and the correction of step 2.1 vanishes. Hence the integral class identity $p(T(M\times N))=p(TM)\times p(TN)$ holds for complex-manifold factors, and in particular for products of complex projective spaces. [F4, step 2.1]

3.2 For $J=(j_1,\ldots,j_t)$, write $p_{j_l}(T(M\times N))=\sum_{a_l+b_l=j_l}p_{a_l}(TM)\times p_{b_l}(TN)+\delta_{j_l}$, where each $\delta_{j_l}$ is two-torsion by step 2.1. In the product every term containing a correction remains two-torsion and pairs to zero with the integral fundamental class by [F6]. The remaining product is the product of these individually prescribed homogeneous sums, and expands over all tuples $(a_l,b_l)$ in the statement, with positive Koszul signs. Terms of bidegree $(4a,4b)$ evaluate by [F5] to the product of the two factor numbers. For any other bidegree of the same total degree one factor exceeds its dimension; over $\mathbb Q$ it vanishes by top-homology vanishing and field duality [F7], so its integral product term has zero integral evaluation by coefficient naturality and injectivity of $\mathbb Z\to\mathbb Q$ [F6]. This proves the integer formula, including the wrong-degree convention. [F2, F4, F5, F6, F7, step 2.1]

4.1 The evaluation of a specified cross product of top-degree monomials is the single product of evaluations by [F5]. When one factor is zero-dimensional, the formulas reduce componentwise to the sum of signed point contributions over $\mathbb Z$ or point parity over $\mathbb F_2$; these need not equal $1$. Empty factors give zero. No choice beyond the stated supplier assumptions is used. [F2, F5, step 1.1, step 3.2] ∎
