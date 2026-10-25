---
id: lem-boone-base-groups-and-associated-free-bases
kind: lemma
title: "Boone base groups and associated free bases"
status: published
origin: pipeline
deps: ["def-boone-group-presentation-and-special-word", "thm-reduced-words-form-the-free-group", "thm-normal-form-for-free-products", "thm-brittons-lemma", "cor-the-base-group-embeds-in-its-hnn-extension", "def-axiom-of-choice"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to the Theory of Groups, Chapter 12, pp.438\u2013440, Lemma 12.11 and Corollary 12.12 (corrected free factor)"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Statement

Assume AC. Put $H=\langle x,\bar S\mid s^{-1}xs=x^2\ (s\in\bar S)\rangle$ and $G_0=H*F(\bar Q)$. Then $\langle x\rangle$ is infinite cyclic and embeds in $H$. For each rule $i$, put $a_i=F_i^\#q_{a(i)}G_i$, $b_i=H_i^\#q_{b(i)}K_i$. The subgroups
$$A_i=\langle a_i,sx\ (s\in\bar S)\rangle,\qquad B_i=\langle b_i,sx^{-1}\ (s\in\bar S)\rangle$$
are free on the indicated bases. The correspondence $a_i\mapsto b_i$, $sx\mapsto sx^{-1}$ is an isomorphism $\phi_i:A_i\to B_i$. The map $\theta(x)=x^{-1}$, $\theta(s)=s$ is an involutive automorphism of $H$.

The retraction $\rho:H\to F(\bar S)$ sending $x\mapsto1$, $s\mapsto s$ is injective on each $T_\eta=\langle sx^\eta:s\in\bar S\rangle$, for $\eta=\pm1$. The automorphism of $G_0$ fixing $H$ and all other states and sending $q_{a(i)}\mapsto a_i$ identifies $\langle q_{a(i)}\rangle*T_1$ with $A_i$; the corresponding automorphism identifies $\langle q_{b(i)}\rangle*T_{-1}$ with $B_i$.

We also use the following finite multiple-letter version of Britton's lemma: for finitely many isomorphisms between subgroups of one base, the successive HNN construction embeds that base; a word with stable letters equal to a base element contains a pinch for an original edge subgroup. Two reduced words representing the same element have the same ordered sequence of signed stable letters.

## Facts & Assumptions

**Given:** The finite alphabets and rule contexts of the Boone presentation.

[F1] These are the specified tape relations and rule words. ([[def-boone-group-presentation-and-special-word]])

[F2] Reduced words give free groups and their universal property; nonempty reduced words are nonidentity. ([[thm-reduced-words-form-the-free-group]])

[F3] Reduced syllable expressions in a free product are unique. ([[thm-normal-form-for-free-products]])

[F4] A reduced single-letter HNN word containing a stable letter cannot be the identity. ([[thm-brittons-lemma]])

[F5] The base embeds in a single-letter HNN extension. ([[cor-the-base-group-embeds-in-its-hnn-extension]])

[A1] Assume the Axiom of Choice. ([[def-axiom-of-choice]])

## Proof

1.1 For finitely many edge maps between subgroups of a base $E$, adjoin their letters successively. The edge subgroups remain embedded after each addition by [F5], so the next map is still an isomorphism of actual subgroups. AC chooses representatives of their nonempty cosets for the single-letter normal forms underlying [F4]. This is the choice use throughout the construction. [F4, F5, A1, construct]

2.1 Prove the multiple-letter pinch assertion by induction on the number of letters. With no letters there is nothing to assert; with one letter apply [F4] to the word times the inverse of its asserted base value. For the next letter, regard all older-letter blocks as coefficients. If the new letter occurs, single-letter Britton supplies a new-letter pinch whose intervening older-letter block represents an element of an original edge subgroup in $E$. If that block contains older letters, the induction hypothesis supplies an older-letter pinch in the original spelling. Otherwise the new-letter pinch is already a pinch over $E$. If the new letter never occurs, use the induction hypothesis directly. This proves the assertion for every finite family, without changing any edge subgroup. [F4, step 1.1]

3.1 For completeness, compare two multiple-letter reduced words $U,V$ with $U=V$. In $UV^{-1}$ a pinch can occur only across the seam, since neither side has an internal pinch. It must pair the last signed letter of $U$ with the inverse of the last signed letter of $V$, with the same label. Reducing this pinch replaces the seam coefficient by a base element, leaving shortened prefixes of the original reduced words. Repeat. If one prefix had stable letters after the other ran out, it would be a reduced word equal to a base element, contradicting step 2.1. Hence all paired letters agree in reverse order and both prefixes run out together. This proves the sequence assertion, including length zero. [step 2.1, algebra]

3.2 Start with the free group on $x$. By [F2], $x^n\ne1$ for every nonzero integer $n$. The map $x^n\mapsto x^{2n}$ is an isomorphism $\langle x\rangle\to\langle x^2\rangle$: it preserves addition of exponents, is injective and has precisely that image. Successively adjoin each $s$ with $s^{-1}xs=x^2$. Steps 1.1–2.1 apply (the local stable letter is $s^{-1}$), giving $H$ and preserving the infinite order of $x$. Form $G_0=H*F(\bar Q)$ using [F3]; states have no relations with $H$. [F1, F2, F3, step 1.1, step 2.1]

4.1 Sending $x\mapsto1$ and $s\mapsto s$ respects every relator of $H$, giving $\rho:H\to F(\bar S)$. For either $\eta=1$ or $\eta=-1$, a nonempty reduced word in the abstract letters $z_s$ maps under $z_s\mapsto sx^\eta$ and then $\rho$ to the same nonempty reduced tape word. By [F2] it is nonidentity. Thus $T_\eta=\langle sx^\eta:s\in\bar S\rangle$ is free on that displayed basis, and $\rho$ restricts injectively to $T_\eta$. [F2, step 3.2]

5.1 In $G_0$, the subgroup $\langle q_{a(i)}\rangle*T_1$ is a free product: any alternating product of its nonidentity state powers and tape elements is a nonempty reduced syllable word by [F3]. The assignment fixing $H$ and all other states and sending $q_{a(i)}$ to $F_i^\#q_{a(i)}G_i$ defines an automorphism of $G_0$. Its inverse sends that state to $(F_i^\#)^{-1}q_{a(i)}G_i^{-1}$ and fixes the same other generators; substitution verifies both composites on every generator. This automorphism carries the preceding free product to $A_i$, proving its asserted free basis. Empty $F_i$ or $G_i$ give the same substitution with an identity factor. [F2, F3, step 4.1, construct]

6.1 Replace the state by $q_{b(i)}$, the contexts by $H_i^\#,K_i$, and $T_1$ by $T_{-1}$ in the explicit automorphism construction of step 5.1. Its inverse is $q_{b(i)}\mapsto(H_i^\#)^{-1}q_{b(i)}K_i^{-1}$. Thus $B_i$ is free on the stated basis. The unique homomorphisms given by the forward and reverse basis correspondences compose to the identity on every basis element, hence on both groups. They are inverse isomorphisms, proving the assertion about $\phi_i$. [F2, F3, step 4.1, step 5.1]

7.1 Inverting the equation $s^{-1}xs=x^2$ gives $s^{-1}x^{-1}s=x^{-2}$, exactly its image under $\theta$. Thus $\theta$ defines an endomorphism of $H$. Its square fixes $x$ and every $s$, so it is an involutive automorphism. It interchanges $T_1$ and $T_{-1}$. All claims now follow. [F1, step 3.2, step 6.1, algebra] ∎

## Source locator

Rotman, printed pp.438–440, Lemma 12.11 and Corollary 12.12. The free state factor here corrects the state/$x$ commutation printed in part (ii-prime). The multiple-letter pinch and comparison arguments above derive precisely the extra interface needed from the local single-letter results.
