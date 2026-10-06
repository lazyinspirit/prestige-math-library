---
id: lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra
kind: lemma
title: "Central actions on nilradical cohomology factor through the Harish–Chandra projection"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [prop-lie-algebra-cohomology-is-derived-invariants, prop-a-normalizer-acts-on-lie-algebra-cohomology, def-harish-chandra-projection, lem-central-elements-have-weight-zero, thm-harish-chandra-isomorphism-for-the-center, def-universal-enveloping-algebra-as-a-tensor-quotient, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra, thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra, def-chevalley-eilenberg-cochains, def-chevalley-eilenberg-differential, def-lie-algebra-cohomology, thm-long-exact-sequence-in-lie-algebra-cohomology, cor-every-module-admits-an-injective-resolution, def-injective-module, prop-positive-ext-vanishes-on-an-injective-second-variable, def-free-module-on-a-set-and-standard-basis, thm-unit-isomorphisms-for-module-tensor-products, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.2 printed pp.64–70"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: "§3.2.4–§3.3, printed pp.70–72, Proposition 3.2.9, Propositions 3.2.10–3.2.11, and Theorem 3.3.1 with its dimension-shifting proof"
    - title: "Peter Woit, Lie Algebra Cohomology and the Borel–Weil–Bott Theorem (Math G4344, Spring 2012), printed pp.1–7"
      url: "https://www.math.columbia.edu/~woit/LieGroups-2012/borelweilbott.pdf"
      locator: "printed p.4, discussion of the Casselman–Osborne lemma; no proof is supplied there"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra with Cartan subalgebra $\mathfrak h$ and triangular decomposition $\mathfrak g=\mathfrak n^-\oplus\mathfrak h\oplus\mathfrak n^+$ ([[thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra]]), and let $V$ be a $U(\mathfrak g)$-module. Write $\operatorname{pr}$ for the Harish–Chandra projection of [[def-harish-chandra-projection]]. Then for every $z\in Z(U(\mathfrak g))$, every $p\ge0$ and every $\omega\in H^p(\mathfrak n^+,V)$,
$$z\cdot\omega=\operatorname{pr}(z)\cdot\omega,$$
where the left side multiplies cochain values by $z$ and the right side is the $\mathfrak h$-action of [[prop-a-normalizer-acts-on-lie-algebra-cohomology]] applied to $\operatorname{pr}(z)\in U(\mathfrak h)=S(\mathfrak h)$. Thus the $Z(U(\mathfrak g))$-action on $H^\bullet(\mathfrak n^+,V)$ factors through the unshifted projection $\operatorname{pr}$; the $\rho$-shift appears only when $\operatorname{pr}$ is composed with the evaluation that produces the Harish–Chandra isomorphism [[thm-harish-chandra-isomorphism-for-the-center]]. Only the unshifted identity is asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice; a central element $z\in Z(U(\mathfrak g))$; the PBW decomposition adapted to $\mathfrak g=\mathfrak n^-\oplus\mathfrak h\oplus\mathfrak n^+$; a $U(\mathfrak g)$-module $V$.

[F1] By [[def-harish-chandra-projection]], multiplication gives the vector-space decomposition $U(\mathfrak g)=U(\mathfrak h)\oplus(\mathfrak n^-U(\mathfrak g)+U(\mathfrak g)\mathfrak n^+)$; $\operatorname{pr}$ is the projection onto $U(\mathfrak h)$ on the zero-weight subspace. Central elements are zero-weight ([[lem-central-elements-have-weight-zero]]).

[F2] In the PBW basis adapted to the order $\mathfrak n^-,\mathfrak h,\mathfrak n^+$, every monomial is an $\mathfrak h$-weight vector, and a zero-weight monomial whose $\mathfrak n^-$ part is nontrivial has a nontrivial $\mathfrak n^+$ part; any such monomial, written with its $\mathfrak n^+$ factor on the right, lies in $U(\mathfrak g)\mathfrak n^+$ ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[def-universal-enveloping-algebra-as-a-tensor-quotient]]).

[F3] The same PBW basis shows $U(\mathfrak g)\cong U(\mathfrak n^-)\otimes U(\mathfrak h)\otimes U(\mathfrak n^+)$ as vector spaces, and exhibits $U(\mathfrak g)$ as a free right $U(\mathfrak n^+)$-module on the image of $U(\mathfrak n^-)\otimes U(\mathfrak h)$; consequently $U(\mathfrak g)\otimes_{U(\mathfrak n^+)}-$ is a direct sum of copies of the identity functor and preserves monomorphisms ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[def-free-module-on-a-set-and-standard-basis]], [[thm-unit-isomorphisms-for-module-tensor-products]]).

[F4] Every left module over the unital ring $U(\mathfrak g)$ embeds in an injective module, indeed admits an injective resolution, under the Axiom of Choice ([[cor-every-module-admits-an-injective-resolution]], [[def-injective-module]]).

[F5] Chevalley–Eilenberg cohomology computes $\operatorname{Ext}$ of the trivial module: $H^q(\mathfrak n^+,W)\cong\operatorname{Ext}^q_{U(\mathfrak n^+)}(k,W)$, and positive Ext vanishes on an injective second variable ([[prop-lie-algebra-cohomology-is-derived-invariants]], [[prop-positive-ext-vanishes-on-an-injective-second-variable]]).

[F6] The Chevalley–Eilenberg differential has the zero-based two-sum formula ([[def-chevalley-eilenberg-differential]], [[def-chevalley-eilenberg-cochains]]); for finite-dimensional $\mathfrak n^+$ and a short exact sequence of $\mathfrak n^+$-modules, the Chevalley–Eilenberg complexes form a degreewise short exact sequence and there is a natural long exact sequence whose connecting maps raise degree by one ([[thm-long-exact-sequence-in-lie-algebra-cohomology]], [[def-lie-algebra-cohomology]]).

[F7] The normalizer action of [[prop-a-normalizer-acts-on-lie-algebra-cohomology]] makes $H^\bullet(\mathfrak n^+,W)$ a $\mathfrak b/\mathfrak n^+\cong\mathfrak h$-module for every $\mathfrak g$-module $W$; the construction is given by the formula for $\theta_x$ and is natural in the coefficient module $W$.

## Proof

**Proof technique:** prove the degree-zero identity directly, transfer vanishing and exactness along an injective embedding, and propagate the identity through the connecting maps of the long exact sequence.

1.1 Multiplication by a central element is a cochain map: if $\omega\in C^q(\mathfrak n^+,V)$ and $(z\cdot\omega)(x_1,\dots,x_q)=z\cdot\omega(x_1,\dots,x_q)$, then $z\cdot(d\omega)=d(z\cdot\omega)$, because in the two sums of the differential the operator $z$ commutes with every $x_i$ and with every bracket on $V$; hence $z$ acts on each $H^q(\mathfrak n^+,V)$. [F6, algebra]

1.2 An injective $U(\mathfrak g)$-module is injective over $U(\mathfrak n^+)$. Let $u:A\rightarrowtail B$ be an embedding of $U(\mathfrak n^+)$-modules and $f:A\to I$ a $U(\mathfrak n^+)$-linear map. By [F3], $U(\mathfrak g)\otimes_{U(\mathfrak n^+)}-$ preserves monomorphisms, so $U(\mathfrak g)\otimes u$ is injective, and the map $F:U(\mathfrak g)\otimes_{U(\mathfrak n^+)}A\to I$, $s\otimes a\mapsto s\cdot f(a)$, is a well-defined $U(\mathfrak g)$-linear map by the extension-of-scalars adjunction $\operatorname{Hom}_{U(\mathfrak n^+)}(A,I)\cong\operatorname{Hom}_{U(\mathfrak g)}(U(\mathfrak g)\otimes_{U(\mathfrak n^+)}A,I)$, which is the universal property of the tensor product over $U(\mathfrak n^+)$. Since $I$ is injective over $U(\mathfrak g)$, $F$ extends along $U(\mathfrak g)\otimes u$ to a $U(\mathfrak g)$-linear $\widetilde F$; the formula $g(b)=\widetilde F(1\otimes b)$ defines a $U(\mathfrak n^+)$-linear map $B\to I$ extending $f$, because $1\otimes u(a)$ is the image of $1\otimes a$ and $\widetilde F$ extends $F$. Hence $I$ has the extension property over $U(\mathfrak n^+)$. [F3, F4, algebra]

1.3 Let $0\to V\to I\to I/V\to0$ be the short exact sequence obtained from an injective embedding $V\hookrightarrow I$ of [F4]. The connecting maps of its long exact sequence commute with multiplication by $z$ and with the $\mathfrak h$-action of [F7]: multiplication by $z$ is a $U(\mathfrak n^+)$-linear endomorphism of each of $V$, $I$, $I/V$ commuting with the inclusion and the quotient, so naturality of the long exact sequence of [F6] gives $z\cdot\delta=\delta\cdot z$. For the Cartan action, represent a class by a cocycle $c$ in $C^{p-1}(\mathfrak n^+,I/V)$ and lift it to $b$ in $C^{p-1}(\mathfrak n^+,I)$; then $\delta[c]=[db]$, with $db$ valued in $V$. The coefficient inclusion and quotient intertwine the cochain operators $\theta_h$, so $\theta_hb$ lifts $\theta_hc$; since $\theta_h$ commutes with $d$ by [F7], $\delta[\theta_hc]=[d\theta_hb]=[\theta_hdb]=\theta_h\delta[c]$. This proves Cartan equivariance directly, and therefore equivariance for $\operatorname{pr}(z)\in U(\mathfrak h)$. [F4, F6, F7, algebra]

2.1 The identity holds in degree zero. Let $v\in H^0(\mathfrak n^+,V)=V^{\mathfrak n^+}$. By [F1] and [F2], $z-\operatorname{pr}(z)\in U(\mathfrak g)\mathfrak n^+$, so $(z-\operatorname{pr}(z))v\in U(\mathfrak g)(\mathfrak n^+v)=0$; hence $z\cdot v=\operatorname{pr}(z)\cdot v$, where $\operatorname{pr}(z)\in U(\mathfrak h)$ acts through the $\mathfrak h$-action of [F7] and the identification $U(\mathfrak h)=S(\mathfrak h)$. [F1, F2, F7, step 1.1]

2.2 Positive cohomology with injective coefficients vanishes: $H^q(\mathfrak n^+,I)=0$ for every $q>0$ and every injective $U(\mathfrak g)$-module $I$. By step 1.2, $I$ is injective over $U(\mathfrak n^+)$, so by [F5] $H^q(\mathfrak n^+,I)\cong\operatorname{Ext}^q_{U(\mathfrak n^+)}(k,I)=0$ for $q>0$. [F4, F5, step 1.2]

3.1 For every $p\ge1$ the connecting map $\delta:H^{p-1}(\mathfrak n^+,I/V)\to H^p(\mathfrak n^+,V)$ is surjective: in the long exact sequence the map $H^p(\mathfrak n^+,V)\to H^p(\mathfrak n^+,I)$ has image contained in $H^p(\mathfrak n^+,I)=0$ by step 2.2, and exactness identifies $\operatorname{im}\delta$ with its kernel, which is all of $H^p(\mathfrak n^+,V)$. [F6, step 2.2]

4.1 Induction on $p$ proves the identity for every coefficient module $V$, hence the lemma. The case $p=0$ is step 2.1, which uses only that $z$ is central and therefore applies to every module, in particular to $I/V$. Suppose the identity holds in degree $p-1$ for all modules. Given $\omega\in H^p(\mathfrak n^+,V)$, write $\omega=\delta\eta$ with $\eta\in H^{p-1}(\mathfrak n^+,I/V)$ by step 3.1; then $z\cdot\omega=z\cdot\delta\eta=\delta(z\cdot\eta)=\delta(\operatorname{pr}(z)\cdot\eta)=\operatorname{pr}(z)\cdot\delta\eta=\operatorname{pr}(z)\cdot\omega$ by step 1.3 and the inductive hypothesis. Since every class in degree $p$ arises this way, the identity holds in degree $p$; the cases $V=0$ and $\mathfrak n^+=0$ are immediate (all groups involved are zero or the action is the given one). The proof inherits the Axiom of Choice through the injective embedding of [F4] and the free-resolution interface of [F5]. [F4, step 2.1, step 1.3, step 3.1] ∎ 