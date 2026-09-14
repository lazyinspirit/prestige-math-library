---
id: thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence
kind: theorem
title: Multiplicative cohomological Serre spectral sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-cohomological-serre-spectral-sequence, lem-serre-fibration-replacement-preserves-fiber-homology-transport, thm-mapping-path-factorization, def-hurewicz-and-serre-fibrations, def-compactly-generated-conventions-for-based-homotopy, lem-kification-compact-tests-and-finite-constructions, thm-cellular-approximation-for-maps-of-cw-pairs, thm-a-filtered-complex-produces-an-exact-couple, thm-an-exact-couple-generates-a-spectral-sequence, prop-the-exact-couple-and-subquotient-constructions-of-the-filtered-complex-spectral-sequence-agree, thm-the-next-page-is-the-homology-of-the-current-page, def-cup-and-cap-products-with-local-coefficient-pairings, def-additive-singular-cohomology-cross-product, def-relative-cup-product, prop-relative-cup-products-are-natural-and-compatible-with-connectors, prop-cup-product-is-natural-unital-and-associative, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Algebraic Topology, multiplicative Serre spectral sequence"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "Chapter 5, §5.1, multiplicative-structure discussion, printed pp. 543–546"
    - title: "Miller, MIT 18.906 notes, Product structure"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 29, printed pp. 100–101"
    - title: "Hatcher, Algebraic Topology, Appendix, Theorem A.6"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Product CW structure on the compactly generated product, printed p. 524"
---

## Statement

Assume the Axiom of Choice. Let $p:E\to B$ be a Serre fibration over a
path-connected CW complex, and let $R$ be a commutative unital ring. From
the second page onward, the cohomological Serre spectral sequence of
[[thm-cohomological-serre-spectral-sequence]] is a natural multiplicative
spectral sequence. If
$$x\in E_r^{a,b},\qquad y\in E_r^{c,d},$$
then $xy\in E_r^{a+c,b+d}$, the unit lies in $E_r^{0,0}$, and
$$d_r(xy)=d_r(x)y+(-1)^{a+b}x\,d_r(y).$$
The specified maps $E_{r+1}\cong H(E_r,d_r)$ are algebra isomorphisms, and
the products are associative and graded-commutative for total degree.

Fiber transport is by graded-ring isomorphisms, so fiber cup product gives a
local-system pairing
$$\mathcal H^b(p;R)\otimes_R\mathcal H^d(p;R) \longrightarrow \mathcal H^{b+d}(p;R).$$
Under the authored second-page identification, the product is
$$
x\,y=(-1)^{bc}\, x\smile_{\cup_F}y \in H^{a+c}\bigl(B;\mathcal H^{b+d}(p;R)\bigr), \tag{1}
$$
where $c$ is the base degree of the second factor and
$\smile_{\cup_F}$ is the local-coefficient cup product for that pairing.

The image filtration on the abutment is multiplicative,
$$F^aH^m(E;R)\,F^cH^n(E;R) \subseteq F^{a+c}H^{m+n}(E;R),$$
and the isomorphisms
$$E_\infty^{a,m-a}\cong F^aH^m(E;R)/F^{a+1}H^m(E;R)$$
assemble to an isomorphism of bigraded $R$-algebras
$E_\infty\cong\operatorname{gr}_F H^*(E;R)$.

Even when monodromy is trivial, (1) is not silently replaced by a tensor
product. The formula
$$E_2^{a,b}\cong H^a(B;R)\otimes_R H^b(F;R)$$
is asserted only when the relevant constant-coefficient Künneth or universal
coefficient comparison is an isomorphism.

## Facts & Assumptions

**Given:** AC, the fibration and ring in the statement, and the cohomological skeletal spectral sequence already constructed.

[A1] [[def-axiom-of-choice]] is assumed throughout. It is used by the cohomological Serre theorem and to cellularly approximate the diagonal of an arbitrary CW base.

[F1] [[thm-cohomological-serre-spectral-sequence]] supplies the pages, their first-quadrant convergence, the local-system $E_2$-identification, and the finite image filtration. [[lem-serre-fibration-replacement-preserves-fiber-homology-transport]] and [[thm-mapping-path-factorization]] compare this sequence with the mapping-path Hurewicz replacement without changing total cohomology or the fiber local systems.

[F2] [[def-hurewicz-and-serre-fibrations]] gives unrestricted homotopy lifting for a Hurewicz fibration. [[def-compactly-generated-conventions-for-based-homotopy]] and [[lem-kification-compact-tests-and-finite-constructions]] give categorical k-products and preserve exactly the maps from compact Hausdorff domains, hence the singular complexes and Serre disk tests. Hatcher's Appendix Theorem A.6 gives the product-cell CW structure on $B\times_kB$. [[thm-cellular-approximation-for-maps-of-cw-pairs]] cellularly approximates maps and homotopies of arbitrary CW complexes under [A1].

[F3] [[def-additive-singular-cohomology-cross-product]] fixes the positive coboundary sign for external products. [[def-relative-cup-product]] constructs the relative product for open excisive triads by small chains. [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]] gives the two connector identities, and [[prop-cup-product-is-natural-unital-and-associative]] fixes the absolute cup product.

[F4] [[thm-a-filtered-complex-produces-an-exact-couple]], [[thm-an-exact-couple-generates-a-spectral-sequence]], and [[prop-the-exact-couple-and-subquotient-constructions-of-the-filtered-complex-spectral-sequence-agree]] identify the skeletal pages with the successive derived couples, including the positive connector sign. [[thm-the-next-page-is-the-homology-of-the-current-page]] fixes the page transition.

[F5] [[def-cup-and-cap-products-with-local-coefficient-pairings]] constructs the local-coefficient cup in (1), including reverse transport on the back face and its Leibniz identity.

## Proof

**Proof technique:** relative external products on the skeletal exact couple, followed by the derived-couple representative calculation.

1.1 We first remove a false shortcut. The ordinary singular Alexander--Whitney cup does not in general satisfy $$F^aC^m(E)\smile F^cC^n(E)\subseteq F^{a+c}C^{m+n}(E)$$ for the annihilator filtration. For example, take the identity fibration of a circle with one vertex and one edge. A singular $2$-simplex in the one-skeleton can have its front and back edges nonconstant (take two inverse edge paths and a constant third edge). Degree-one cochains vanishing on the vertex may evaluate nontrivially on those two faces, so their cup need not vanish on the one-skeleton. Thus no filtered-DGA argument is applied to the raw cochains. [given]

2.1 First kify the spaces over $B$. By [F2], this does not change singular simplices, Serre disk tests, or homotopies, so it changes neither the filtered singular cochain complexes nor the fiber local systems. Now take the functorial mapping-path Hurewicz replacement $\widehat p:\widehat E\to B$ using k-products. Write $\widehat E_k=\widehat p^{-1}(B^k)$. By [F1], the constant-path map $j:E\to\widehat E$ is over $B$, is a homotopy equivalence on total spaces, and induces the compatible fiber (co)homology local-system isomorphisms. Its filtered pullback therefore gives an isomorphism of the two Serre sequences from $E_2$ onward. It is enough to construct the products for $\widehat p$ and transport them through this isomorphism. [A1, F1, F2, step 1.1]

3.1 Use the compactly generated product $B\times_k B$. By Hatcher's theorem in [F2], its product cells make it a CW complex with $$(B\times_k B)^k=\bigcup_{i+j\leq k}B^i\times B^j. \qquad\text{(2)}$$ Under [A1], cellular approximation in [F2] gives a cellular map $\Delta_c:B\to B\times_k B$ homotopic to the diagonal. Let $H:\Delta\simeq\Delta_c$ be the chosen homotopy. The product $\widehat p\times_k\widehat p$ is Hurewicz: lift the two coordinate homotopies and pair the lifts by the categorical property of the k-product. Hence $H(\widehat p(-),-)$ lifts starting with the true diagonal $\Delta_{\widehat E}$. Its endpoint $$\widetilde\Delta:\widehat E\longrightarrow\widehat E\times_k\widehat E$$ is homotopic to $\Delta_{\widehat E}$, covers $\Delta_c$, and satisfies $$\widetilde\Delta(\widehat E_k) \subseteq(\widehat p\times_k\widehat p)^{-1}((B\times_k B)^k). \qquad\text{(3)}$$ This is the filtered diagonal used below; it is not claimed to equal the true diagonal. In all subsequent product-space displays through the abutment comparison, the product is this k-product. Its singular complex is the ordinary-product singular complex because simplices are compact Hausdorff, by [F2], so the cited singular cross-product and relative-chain interfaces apply unchanged. [A1, F2, step 2.1]

4.1 For $a,c\geq0$, (2) gives $$(B\times B)^{a+c-1}\subseteq (B^{a-1}\times B)\cup(B\times B^{c-1}). \qquad\text{(4)}$$ A CW subcomplex inclusion has NDR data. Choose open NDR neighbourhoods $U_a\supseteq B^{a-1}$ and $U_c\supseteq B^{c-1}$ whose deformation homotopies preserve the neighbourhood and the subcomplex setwise and end with the neighbourhood in the subcomplex. Unrestricted homotopy lifting for the Hurewicz fibration in [F2], starting with the identity of $\widehat E$, lifts each base deformation. A lifted path above the preserved subcomplex remains above that subcomplex, even though it need not be stationary there. Thus the lift and its endpoint are maps of pairs and exhibit $(\widehat E,\widehat E_{a-1})\to(\widehat E,\widehat p^{-1}U_a)$ as a pair homotopy equivalence; similarly for $c$. The two subspaces $\widehat p^{-1}U_a\times\widehat E$ and $\widehat E\times\widehat p^{-1}U_c$ are open in their union, so the open-triad relative product in [F3], transported through these pair equivalences and followed by restriction along (4) and pullback by (3), gives $$\begin{aligned} H^m(\widehat E,\widehat E_{a-1}) \otimes_R H^n(\widehat E,\widehat E_{c-1}) &\longrightarrow H^{m+n}\bigl(\widehat E\times\widehat E,\, \widehat E_{a-1}\times\widehat E\cup \widehat E\times\widehat E_{c-1}\bigr)\\ &\longrightarrow H^{m+n}(\widehat E\times\widehat E,Y_{a+c-1})\\ &\xrightarrow{\widetilde\Delta^*} H^{m+n}(\widehat E,\widehat E_{a+c-1}), \end{aligned} \qquad\text{(5)}$$ where $Y_k=(\widehat p\times\widehat p)^{-1}((B\times B)^k)$. The first arrow is defined through the open neighbourhood pairs and transported back by the lifted NDR equivalences. Naturality and homotopy invariance make it independent of the neighbourhoods. Thus no CW hypothesis on $\widehat E$ or $\widehat E\times\widehat E$ is used. [F2, F3, step 3.1]

5.1 The same construction on the layer $(B\times B)^{a+c}/(B\times B)^{a+c-1}$, followed by projection to its $(a,c)$-cell summand, gives $$E_1^{a,b}\otimes_RE_1^{c,d} \longrightarrow E_1^{a+c,b+d}. \qquad\text{(6)}$$ Restricting one factor before taking a connector gives the two mixed pairings needed between the $D$- and $E$-vertices of the initial exact couple. Every square with the restriction maps commutes by relative naturality. The two formulas in [F3] give, for homogeneous total degree $|x|=a+b$, $$k(xy)=k(x)y+(-1)^{|x|}xk(y), \qquad\text{(7)}$$ with the mixed products understood on the appropriate adjacent filtration pieces. Hence (5)--(7) make the initial skeletal exact couple a paired exact couple. [F3, F4, step 4.1]

6.1 We spell out why (7) controls every later differential. In the subquotient description of the $r$-th derived couple from [F4], represent $x,y$ by initial $E$-classes for which, locally, $$kx=i^{\,r-1}u,\qquad ky=i^{\,r-1}v.$$ Repeated compatibility of the mixed products with $i$, together with (7), gives $$k(xy)=i^{\,r-1}\bigl(uy+(-1)^{|x|}xv\bigr).$$ The derived differential is obtained by applying $j$ to the displayed $i^{r-1}$-lift. Therefore $$d_r(xy)=d_r(x)y+(-1)^{|x|}x\,d_r(y). \qquad\text{(8)}$$ If either representative is changed by a derived boundary, the connector identities put the change in the next derived boundary; if an $i^{r-1}$-lift is changed, its difference lies in the kernel killed by $j$. Thus (8) is independent of all representatives and lifts. This is the later-page calculation missing from a mere $E_1$ derivation argument. [F3, F4, step 5.1]

7.1 A product of $d_r$-cycles is a cycle by (8), and changing either factor by a $d_r$-boundary changes the product by a $d_r$-boundary. Consequently the product induced on $H(E_r,d_r)$ is exactly the product on the next derived couple. The specified comparison $E_{r+1}\cong H(E_r,d_r)$ in [F4] is therefore an algebra map. This proves the page-transition assertion without assuming that the raw singular cochain filtration was multiplicative. [F4, step 6.1]

8.1 Under the cell isomorphism used in [F1], a class of bidegree $(a,b)$ is an $a$-cell cochain with values in fiber degree $b$. In (6), the cellular diagonal supplies the ordinary cellular base cup, while the diagonal on a strict fiber supplies the fiber cup. Moving the degree-$b$ fiber cochain of the first factor past the degree-$c$ base cell of the second factor contributes exactly $(-1)^{bc}$. The back-face fiber value is transported in the reverse direction, exactly as in [F5]. Thus on cellular cochains $$\Phi(xy)=(-1)^{bc}\,\Phi(x)\smile_{\cup_F}\Phi(y). \qquad\text{(9)}$$ The $d_1$ connector is the cellular local-coefficient coboundary by [F1], and [F5] gives its Leibniz identity. Passing to cohomology proves (1). [F1, F3, F5, step 5.1, step 7.1]

9.1 Fiber transport is represented by fiber homotopy equivalences and hence preserves the fiber cup product by its naturality. Thus the coefficient pairing in (1) is a morphism of local systems. The local cup is associative, unital and graded-commutative in total degree after the sign in (9). Therefore $E_2$ has these properties. Step 7.1 propagates each identity to every later page. It also propagates the unit, represented initially by the constant degree-zero class in filtration zero. [F1, F3, F5, step 7.1, step 8.1]

10.1 Since $\widetilde\Delta$ is ordinarily homotopic to the true diagonal, the product (5) after passage to absolute cohomology is $$\widetilde\Delta^*(x\times y)=\Delta_{\widehat E}^*(x\times y)=x\smile y.$$ Formula (5) shows at the same time that representatives from filtration $a$ and $c$ multiply into filtration $a+c$. The stable representative description in [F4] consequently identifies the stable page product with the quotient product $$F^aH^m/F^{a+1}H^m\ \otimes\ F^cH^n/F^{c+1}H^n \longrightarrow F^{a+c}H^{m+n}/F^{a+c+1}H^{m+n}.$$ Transport through the homotopy equivalence $j$ and use the convergence identifications of [F1]. This proves the asserted $E_\infty\cong\operatorname{gr}_F H^*(E;R)$ as algebras in both quotient directions. [F1, F3, F4, step 2.1, step 4.1, step 9.1]

11.1 Different cellular diagonals and lifts give the same multiplication from $E_2$ onward: step 8.1 identifies every choice with the single intrinsic local-coefficient product on $E_2$, and step 7.1 determines each later product inductively. The same observation proves naturality for a strictly commuting square over a cellular base map, since fiber cups, local cups, and the authored $E_2$-map are natural. On the abutment it is ordinary cup-product naturality. No unrecorded simultaneous choice is needed beyond [A1]. [A1, F1, F3, F5, step 7.1, step 8.1, step 10.1]

12.1 If $B=\varnothing$, then $E=\varnothing$ and all products are zero; if a fiber is empty, its stalk and every term using it are zero. The zero ring, zero classes and zero products satisfy (7)--(9). Filtration degree zero contains the unit; $a=0$, $c=0$, $b=0$, and $d=0$ are included in (1), with sign $+1$ whenever the exponent vanishes. A one-cell base reduces (6) to the fiber cup product. Degenerate singular simplices are included in the small-chain comparison. Both factors in (5), both terms in (7), both changes of representatives in step 6.1, and both quotient directions in step 10.1 have been checked. There is no iff assertion. Trivial monodromy only makes the coefficient system constant; the final tensor formula additionally requires the explicitly stated comparison isomorphism. [A1, F1, F2, F3, F4, F5, step 4.1, step 6.1, step 8.1, step 10.1, step 11.1] ∎