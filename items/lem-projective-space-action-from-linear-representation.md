---
id: lem-projective-space-action-from-linear-representation
kind: lemma
title: "A linear representation induces an action on projective space with the same line stabilizers"
status: published
origin: pipeline
dependency_level: 3
deps: [cor-contravariant-yoneda-lemma, def-algebraic-group-action-and-scheme-theoretic-stabilizer, def-axiom-of-choice, def-fibre-product-schemes-universal-property, def-invertible-sheaf, def-locally-free-sheaf-finite-rank, def-projective-bundle-scheme, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-scheme-theoretic-fibre, lem-action-map-fibres-and-stabilizer-subscheme, lem-dual-locally-free-and-base-change, lem-field-valued-points-of-schemes, thm-projective-bundle-represents-line-quotients]
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
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapter 7, Sections 7(d)-(e), pp. 141-143, especially Lemma 7.10 and Theorem 7.18"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf
      locator: "Theorem 1.15 and the proof of Theorem 1.16, printed pp. 5-6"
---

## Statement

Assume the Axiom of Choice, inherited from
[[thm-projective-bundle-represents-line-quotients]]. Let $G$ be an affine
finite-type $k$-group scheme, let $V$ be finite-dimensional, and let
$r:G\to\operatorname{GL}_V$ be the rational representation of
[[def-rational-representation-and-comodule-of-an-affine-group-scheme]]. In the
repository's quotient convention, $\mathbb P(V)$ represents invertible
quotients of $V_T$ and has the natural action $g\cdot[q]=[q\circ r(g)^{-1}]$.
Define the space of lines by
$\mathbf P_{\mathrm{lines}}(V):=\mathbb P(V^\vee)$, using the dual
representation $r^\vee(g)=(r(g)^{-1})^\vee$. Its $T$-points are equivalently
rank-one locally direct summand subbundles $L\subseteq V_T$, with action
$L\mapsto r(g)L$. A line $L\subseteq V$ gives the point $[L]$ via the rank-one
quotient $V^\vee\twoheadrightarrow L^\vee$, not via
$V\twoheadrightarrow V/L$. The scheme stabilizer of this point has $R$-points
exactly $\{g:r(g)L_R=L_R\}$. Therefore any closed subgroup scheme with that
line-stabilizer functor is $G_{[L]}$. No smoothness of $G$ or its subgroup is
needed.

## Facts & Assumptions

**Given:** AC, an affine finite-type $k$-group scheme $G$, a finite-dimensional $k$-vector space $V$, and a rational representation $r$ of $G$ on $V$.

[F1] For a finite locally free $\mathcal O_S$-module $E$, the projective bundle $\pi:\mathbb P_S(E)\to S$ represents isomorphism classes of surjections $E_T\to L$ with $L$ invertible, the tautological quotient being the case of the identity map ([[thm-projective-bundle-represents-line-quotients]], [[def-projective-bundle-scheme]], [[def-invertible-sheaf]]).

[F2] The representation $r$ is a natural family of group homomorphisms $r_R:G(R)\to\operatorname{Aut}_R(V_R)$, so $r(g)$ acts invertibly on $V_R$ for every $k$-algebra $R$ and test scheme $T$ ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

[F3] A finite locally free module is reflexive: the evaluation $\mathcal E\to\mathcal E^{\vee\vee}$ is an isomorphism, duals of finite locally free modules are finite locally free of the same rank, and duality is natural in base change ([[lem-dual-locally-free-and-base-change]], [[def-locally-free-sheaf-finite-rank]]).

[F4] The Yoneda lemma identifies natural transformations between represented functors with morphisms of the representing schemes, and the fibre-product universal property identifies $h_G\times h_X$ with $h_{G\times_kX}$; consequently a natural transformation of group functors $h_G\times h_X\to h_X$ whose pointwise maps satisfy the unit and associativity identities is an action morphism ([[cor-contravariant-yoneda-lemma]], [[def-fibre-product-schemes-universal-property]], [[def-algebraic-group-action-and-scheme-theoretic-stabilizer]]).

## Proof

**Given:** AC, the affine finite-type $k$-group scheme $G$, the finite-dimensional $k$-vector space $V$, and the rational representation $r$.

1.1 Since $V$ is finite-dimensional, [F1] identifies the $T$-points of $\mathbb P(V^\vee)$ with isomorphism classes of surjections $V^\vee_T\to Q$ with $Q$ invertible. Such a surjection splits locally: on an open where $Q\cong\mathcal O_T$, a lift of $1$ gives a splitting. After shrinking further, one coefficient of the quotient map is a unit, so elementary changes of basis identify its kernel with $\mathcal O_T^{\dim V-1}$. Dualizing this local splitting gives a rank-one locally direct summand $Q^\vee\hookrightarrow V_T$ by [F3]. Conversely, dualizing a rank-one locally direct summand $L\hookrightarrow V_T$ gives a surjection $V^\vee_T\to L^\vee$; reflexivity makes these constructions inverse. For $V=0$ there are no such quotients or subbundles over a nonempty $T$. [F1, F3, construct, algebra]

2.1 A line $L\subseteq V$ is a rank-one direct summand: extend a nonzero vector of $L$ to a basis of the finite-dimensional $V$. Its dual $V^\vee\twoheadrightarrow L^\vee$ is therefore a rank-one quotient, and base change to any $T$ gives the point $[L]_T$ represented by $V^\vee_T\twoheadrightarrow L^\vee_T$. [step 1.1, algebra, construct]

2.2 The affine-local automorphisms supplied by [F2] agree on overlaps by naturality, giving $r(g)$ on $V_T$ for every $g\in G(T)$. On $\mathbb P(V)$ define $g\cdot[q]=[q\circ r(g)^{-1}]$. This respects quotient isomorphisms and base change, and $(gh)\cdot[q]=[q\circ r(h)^{-1}\circ r(g)^{-1}]=g\cdot(h\cdot[q])$; the identity acts trivially. By [F1] and [F4] this is a scheme action. Apply the same construction to the dual representation $r^\vee(g)=(r(g)^{-1})^\vee$, which satisfies $r^\vee(gh)=r^\vee(g)r^\vee(h)$, to obtain the action on $\mathbb P(V^\vee)$. [F1, F2, F4, step 1.1, algebra, construct]

3.1 On the line-submodule description of step 1.1 the action has the stated form $L\mapsto r(g)L$: if the quotient $q:V^\vee_T\to Q$ corresponds to $L=\operatorname{im}(q^\vee)$ under the double-dual identification, then $r^\vee(g)^{-1}=r(g)^\vee$ and the translate $q\circ r(g)^\vee$ has dual $r(g)\circ q^\vee$ by [F3], whose image is $r(g)L$. [F3, step 2.2, algebra]

4.1 Fix a line $L\subseteq V$ and a $k$-algebra $R$ with an element $g\in G(R)$. By steps 1.1 and 2.2 the point $g\cdot[L]_R$ is the class of the quotient $q_L\circ r^\vee(g)^{-1}=q_L\circ r(g)^\vee:V^\vee_R\to L^\vee_R$, and two rank-one locally free quotients of $V^\vee_R$ are isomorphic exactly when their kernels agree. The kernel of the quotient attached in step 1.1 to a rank-one subbundle $L'\subseteq V_R$ is its annihilator $L'^\perp\subseteq V^\vee_R$, so the kernel of $q_L\circ r(g)^\vee$ is $\{f:f(r(g)v)=0\text{ for all }v\in L\}=(r(g)L_R)^\perp$. Hence $g$ fixes $[L]_R$ exactly when $(r(g)L_R)^\perp=L_R^\perp$, and passing to annihilators in the reflexive finite locally free module $V_R$ of [F3] this is equivalent to $r(g)L_R=L_R$. Therefore the scheme-theoretic stabilizer $G_{[L]}$ has $G_{[L]}(R)=\{g\in G(R):r(g)L_R=L_R\}$ for every $k$-algebra $R$. [F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 If $H\subseteq G$ is a closed subgroup scheme whose functor of points is $H(R)=\{g:r(g)L_R=L_R\}$ for every $R$, then $H$ and $G_{[L]}$ have the same functor of points by step 4.1, so they are equal as closed subschemes of $G$ by the Yoneda lemma [F4]. No smoothness of $G$ or of $H$ was used anywhere in the argument, which completes the proof. [F4, step 4.1, given] ∎
