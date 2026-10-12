---
id: thm-soergels-character-conjecture
kind: theorem
title: "Soergel's character conjecture for type A"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [thm-hodge-riemann-for-indecomposable-soergel-bimodules, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree, def-real-type-a-soergel-category-and-scalar-extension, thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra, lem-the-type-a-standard-character-is-multiplicative, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis, thm-deformed-hard-lefschetz-for-b-x-b-s, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, def-the-deformed-lefschetz-operator-on-b-x-b-s]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Theorem 1.1 (Soergel's conjecture), its proof at the end of Section 6.8, Remark 3.2 for the dictionary to the Kazhdan-Lusztig basis, and the failure statement after (1) of Section 6.8"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Vermutung 1.13, Bemerkung 1.15, Satz 6.14 and the discussion in Section 7 (the omnibus lemma and the strategy)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Theoreme 2.7(1) and Section 0.2 (the main theorem)"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** A symmetric group $S_n$, the real type-$A$ Soergel category of [[def-real-type-a-soergel-category-and-scalar-extension]] with its normalized indecomposables $B_w^R$ and their characters, the type-$A$ Hecke algebra with its standard basis $H_w$ and Kazhdan-Lusztig basis $\underline H_w$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]), the statement $\mathrm S(w):\operatorname{ch}(B_w^R)=\underline H_w$ and the hypotheses $\mathrm hL(w)$, $\mathrm{HR}(w)$ of the dictionary ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]), and the deformed operator $L_\zeta$ on $B_x^RB_s^R$ ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]]).

[F1] The simultaneous induction theorem: if a finite Bruhat ideal $X$ satisfies the parameterized ascent and positive-descent HR conditions, then $\mathrm S(x)$, $\mathrm hL(x)$ and $\mathrm{HR}(x)$ hold for every $x\in X$; the conditions hold for $X=S_n$, so all three statements hold for every $w\in S_n$, and for every $x,s$ with $xs>x$ the strong forms $\mathrm{HRbar}(x,s)_\zeta$ hold for all $\zeta\ge0$ ([[thm-hodge-riemann-for-indecomposable-soergel-bimodules]]).

[F2] The standard character is the split-Grothendieck isomorphism $\Phi:K_0^{\mathrm{split}}\to H$, not its inverse. In the normalized standard basis $H_w=v^{\ell(w)}T_w$, its simple value is $\Phi([B_s])=v(T_s+1)=H_s+v=\underline H_s$. The published split-Grothendieck supplier names this simple Kazhdan--Lusztig generator $H_i$; that $H_i$ is distinct from the standard $H_s$ used here. The character is additive and multiplicative, satisfies $\operatorname{ch}(M(d))=v^d\operatorname{ch}(M)$, and on an object means $\operatorname{ch}(M)=\Phi([M])$. Real scalar extension preserves labels, shifts and support-filtration characters, and character identities over $\mathbb R$ descend to $\mathbb Q$ ([[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]], [[lem-the-type-a-standard-character-is-multiplicative]], [[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).

[F3] Descent: if $xs<x$ and $\mathrm S(x)$ holds, then $B_xB_s=B_x(1)\oplus B_x(-1)$ and the reduced operator is the matrix $\begin{pmatrix}\rho\cdot(-)&0\\ \zeta\rho(\alpha_s^\vee)&\rho\cdot(-)\end{pmatrix}$; if in addition $\mathrm hL(x)$ holds and $\zeta>0$ then $\mathrm hL(x,s)_\zeta$ holds, while centered hard Lefschetz fails at $\zeta=0$ ([[lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis]], [[thm-deformed-hard-lefschetz-for-b-x-b-s]]).

## Statement

For every $w\in S_n$ the character of the indecomposable type-$A$ Soergel bimodule equals the Kazhdan-Lusztig basis element: $\operatorname{ch}(B_w^R)=\underline H_w$. Equivalently, the class $[B_w^R]$ in the split Grothendieck group corresponds to $\underline H_w$ under the Hecke algebra isomorphism, and the extension of scalars of the rational $B_w$ categorifies the Kazhdan-Lusztig basis. Moreover the hard Lefschetz property $\mathrm hL(w)$ and the Hodge-Riemann relations $\mathrm{HR}(w)$ hold for every $w$, with the standard signs, and the same identities hold for the rational category by the base-change comparison. Finally, for every right descent $xs<x$ the matrix of $L_\zeta$ on $B_xB_s=B_x(1)\oplus B_x(-1)$ is $\begin{pmatrix}\rho\cdot(-)&0\\ \zeta\rho(\alpha_s^\vee)&\rho\cdot(-)\end{pmatrix}$; for $\zeta>0$, $\mathrm hL(x)$ implies $\mathrm hL(x,s)_\zeta$ without any additional character hypothesis, since $\mathrm S$ is now established for all elements, while at $\zeta=0$ centered hard Lefschetz fails.

## Proof
**Proof technique:** direct; specialize the simultaneous induction to the full symmetric group and read off the character, the Hodge-theoretic statements and the unconditional descent consequence.

1.1 **Soergel's conjecture for all elements.** The simultaneous induction theorem [F1] applies with $X=S_n$: its two parameterized HR conditions are verified for every Bruhat ideal along the induction, and its conclusion gives $\mathrm S(w)$, $\mathrm hL(w)$ and $\mathrm{HR}(w)$ for every $w\in S_n$. By the definition of $\mathrm S(w)$ this is $\operatorname{ch}(B_w^R)=\underline H_w$ for every $w$, which is the character statement; the same theorem also gives the strong embedded forms $\mathrm{HRbar}(x,s)_\zeta$ for all $x,s$ with $xs>x$ and all $\zeta\ge0$. [given, F1]

2.1 **The class and the rational form.** By [F2], $\operatorname{ch}(M)=\Phi([M])$ for the split-Grothendieck isomorphism $\Phi:K_0^{\mathrm{split}}\to H$, with $\Phi([B_s])=H_s+v$ in the normalized standard basis. Hence $\operatorname{ch}(B_w^R)=\underline H_w$ from step 1.1 means precisely $\Phi([B_w^R])=\underline H_w$. Real scalar extension preserves indecomposable labels, shifts and support-filtration multiplicities, so its character agrees with the rational character in the same integral Hecke algebra. The equality proved over $\mathbb R$ therefore gives the same character equality over $\mathbb Q$, and the rational $B_w$ categorifies the same Kazhdan--Lusztig basis element. No inverse map from $H$ to $K_0$ is used as an object character. [step 1.1, F2]

2.2 **Hodge-theoretic statements.** The hard Lefschetz property $\mathrm hL(w)$ and the Hodge-Riemann relations $\mathrm{HR}(w)$ for all $w$ are part of the conclusion of the simultaneous induction in step 1.1; the signs are the standard signs of the dictionary, normalized by the positive bottom Lefschetz form. [step 1.1, F1]

3.1 **The unconditional descent consequence.** Let $xs<x$ be a right descent. Since $\mathrm S(x)$ now holds for every $x$, the descent lemma [F3] displays the matrix of $L_\zeta$ on $B_xB_s=B_x(1)\oplus B_x(-1)$; combining it with $\mathrm hL(x)$ from step 2.2 and $\zeta>0$ gives $\mathrm hL(x,s)_\zeta$, with no character hypothesis beyond the already established $\mathrm S(x)$, and the same lemma records the failure of centered hard Lefschetz at $\zeta=0$ through the vanishing $(\ell(x)+1)$-st power of $\rho$ on the bottom class of $B_x(1)$ while the opposite total degree is nonzero by self-duality. [step 1.1, step 2.2, F3]

4.1 **Conclusion.** Steps 1.1 and 2.1 give the character statement in the real and rational categories, step 2.2 the Hodge-theoretic statements with the standard signs, and step 3.1 the unconditional descent consequence; no step assumes positivity of Kazhdan-Lusztig polynomials, which is instead a corollary of the character identity, and no step uses a result beyond the suppliers listed. This proves the theorem. [step 1.1, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- The theorem replaces the citation of Soergel's conjecture recorded on the Kazhdan-Lusztig basis page by a local proof: the character identity is a consequence of the simultaneous induction of this page, and positivity of the Kazhdan-Lusztig polynomials is deduced from it in the next item rather than assumed here.
- The descent consequence is genuinely downstream: the descent lemma is applied only after $\mathrm S(x)$ has been established for the element in question, so no logical cycle is created inside the induction.
