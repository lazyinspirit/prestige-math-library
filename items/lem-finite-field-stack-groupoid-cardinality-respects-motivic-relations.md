---
id: lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations
kind: lemma
title: "Finite-field groupoid cardinality respects the motivic stack relations"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-field-stack-groupoid-cardinality
  - def-motivic-stack-function-groups-for-quiver-representations
  - thm-etale-formally-etale-finite-presentation
  - thm-etale-morphisms-open-and-quasi-finite
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dominic Joyce, Configurations in abelian categories. II. Ringel-Hall algebras, arXiv:math/0503029v2, §§2–3"
      url: "https://arxiv.org/pdf/math/0503029v4"
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, arXiv:1002.4372v1, §3"
      url: "https://arxiv.org/pdf/1002.4372v1"
    - title: "Yakov Varshavsky, Moduli spaces of principal F-bundles, Lemma 3.3(a) and its proof"
      url: "https://arxiv.org/pdf/math/0205130v2"
verification:
  precheck: pass
---

## Statement

For the finite-quiver quotient stacks over $\mathbb F_q$ whose rational-point
groupoids are finite, groupoid cardinality is additive under closed/open
decomposition and multiplicative under product. It respects the
vector-bundle-stack relation
$$[V_1/V_0\to S] =\mathbb L^{r_1-r_0}[S\to S],$$
so it defines a ring realization on the subring of motivic classes generated
by these stacks, and it sends $\mathbb L$ to $q$.

## Facts & Assumptions

**Given:** A finite field $\mathbb F_q$, the vector-stack coefficient relation,
and the groupoid cardinality of
[[def-finite-field-stack-groupoid-cardinality]].

[F1] Groupoid cardinality is the finite sum
$\sum_{[x]}|\operatorname{Aut}(x)|^{-1}$
([[def-finite-field-stack-groupoid-cardinality]]).

[F2] The coefficient theory imposes
$[V_1/V_0]=\mathbb L^{r_1-r_0}[S]$
for a constant-rank vector-bundle map
([[def-motivic-stack-function-groups-for-quiver-representations]]).

[F3] A locally finitely presented morphism of schemes is étale if it has unique lifts across square-zero thickenings ([[thm-etale-formally-etale-finite-presentation]]). We apply this criterion on étale scheme charts of representable morphisms of algebraic spaces.

[F4] Étale morphisms of schemes are open ([[thm-etale-morphisms-open-and-quasi-finite]]); the same conclusion on algebraic-space charts gives openness of representable étale morphisms of stacks.

[A1] The inherited [[def-axiom-of-choice]] is assumed, including its uses in [F3] and [F4] and the choice of an algebraic closure. The finite groupoid sums and vector-space calculations require only finite choices.

## Proof

**Proof technique:** direct.

1.1 First let $S$ be any of the finite-type Artin stacks with affine stabilizers allowed as a coefficient generator, put $k=\mathbb F_q$, and write $F$ for absolute $q$-power Frobenius. The stack $Z=S\times_{S\times_k S}S$, formed using the diagonal and the graph of $F$, has objects $(s,\alpha:F_T^*s\mathbin{\sim} s)$ over $T$. It is an Artin stack of finite type with finite-type diagonal: its projection to $S$ is the base change of the finite-type representable diagonal of $S$. For a square-zero thickening $i:T_0\hookrightarrow T$, Frobenius factors as $F_T=i\circ f$ with $f:T\to T_0$, since $a\mapsto a^q$ kills the square-zero ideal. A pair $(s_0,\alpha_0)$ lifts to $(f^*s_0,f^*\alpha_0)$, whose restriction is identified with $(s_0,\alpha_0)$ by $\alpha_0$. For pairs $(s,\alpha)$ and $(t,\beta)$ over $T$, a compatible morphism $u_0$ over $T_0$ lifts uniquely to $u=\beta\circ f^*u_0\circ\alpha^{-1}$; the compatibility equation $u\alpha=\beta F_T^*u$ proves uniqueness and, after restriction, proves that this formula is a lift. Thus $Z(T)\to Z(T_0)$ is an equivalence. [F2, algebra, construct]

1.2 If a finite group $G$ acts on a finite groupoid $\mathcal H$, then $|\mathcal H//G|=|\mathcal H|/|G|$. Indeed, an orbit represented by $h$ has $|G|/|\operatorname{Stab}_G([h])|$ isomorphism classes with the same automorphism order. In the quotient the automorphism order is $|\operatorname{Aut}_{\mathcal H}(h)|\,|\operatorname{Stab}_G([h])|$, because each stabilizing group element admits exactly $|\operatorname{Aut}_{\mathcal H}(h)|$ isomorphisms to $h$. Comparing the two contributions proves the formula. In particular, translation of $k^{r_0}$ on $k^{r_1}$ through a linear map gives cardinality $q^{r_1-r_0}$, retaining all kernel automorphisms. [F1, algebra]

2.1 Put $K=\overline{k}$. Every $K$-point $z:\operatorname{Spec}K\to Z_K$ is representable and locally finitely presented: after base change to a finite-type smooth scheme atlas, its source is an algebraic space of finite type over $K$, by the finite-type diagonal. The lifting equivalence of step 1.1 makes this point morphism formally étale, hence étale by [F3] on scheme charts, and open by [F4]. Its image in $|Z_K|$ is a single point. Distinct $K$-isomorphism classes have distinct images, since an isomorphism existing over a field extension already exists over the algebraically closed field $K$ (use a finite-type scheme cover of the nonempty isomorphism space). These images are disjoint nonempty opens. A noetherian space has only finitely many such opens, since each contains the generic point of an irreducible component and there are finitely many components. Consequently $Z(K)$ has finitely many isomorphism classes. The natural functor $S(k)\to Z(K)$ is fully faithful: compatibility with the canonical Frobenius identifications says exactly that an isomorphism is Frobenius invariant, so it descends to $k$ by the sheaf condition for isomorphisms and finite-field Galois descent. Finally $\operatorname{Aut}_S(s)$ is affine of finite type, so it has finitely many $k$-points. Hence $S(k)$ is a finite groupoid for every allowed coefficient generator. We may therefore use [F1]'s finite-sum formula on all of them, extending the prescribed quiver-stack counts. [F1, F2, F3, F4, A1, step 1.1]

2.2 Every torsor under an additive vector group $k^r$ is trivial over $k$. To see this, choose a point $t$ over $K$, and write its arithmetic Frobenius image as $F(t)=t+a$. Choose $b\in K^r$ solving $b^q-b=-a$, coordinate by coordinate, which is possible because $K$ is algebraically closed. Then $F(t+b)=t+b$, so $t+b$ descends to a $k$-point and trivializes the torsor. Accordingly, for every $s\in S(k)$, the rational-point groupoid of the vector-stack fiber is equivalent to $[V_1(s)(k)/V_0(s)(k)]$; there are no additional torsor classes. Its cardinality is $q^{r_1-r_0}$ by step 1.2. [F2, step 1.2, construct]

3.1 Now let $S$ be an arbitrary base allowed in [F2], not necessarily a quiver quotient stack. By step 2.1 its rational-point groupoid is finite. Over a representative $s$, the vector bundles and their map carry the natural linear action of $\operatorname{Aut}_S(s)(k)$. Trivial torsors and the origin give an equivariant model for the fiber in step 2.2. Thus the total rational-point groupoid over the isomorphism class $[s]$ is its action groupoid under $\operatorname{Aut}_S(s)(k)$, and has cardinality $q^{r_1-r_0}/|\operatorname{Aut}_S(s)(k)|$ by step 1.2. Summing over the finitely many base classes proves $|[V_1/V_0](k)|=q^{r_1-r_0}|S(k)|$ for every defining vector-bundle-stack relation. Finite rank stratification, when needed, gives the same identity stratum by stratum. [F1, F2, step 2.1, step 1.2, step 2.2]

4.1 Define the count on the free coefficient generators by $[S]\mapsto |S(k)|$ for all $S$ allowed in [F2]. Rational points of a closed/open decomposition form a disjoint union of full groupoids, and rational points of a product form the product groupoid, so the finite-sum formula is additive and multiplicative. Step 3.1 checks every vector-bundle-stack relation in this whole presentation. Since $|\mathbb A^1(k)|=q\ne0$, the resulting homomorphism extends across localization at $\mathbb L$, with $\mathbb L^{-1}\mapsto q^{-1}$. Its restriction to the subring generated by the quiver quotient stacks is the claimed realization; verification on the whole coefficient presentation also ensures it respects all ambient equalities between those classes. [F1, F2, step 2.1, step 3.1, algebra] ∎
