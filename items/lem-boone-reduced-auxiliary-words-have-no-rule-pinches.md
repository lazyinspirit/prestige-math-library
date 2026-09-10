---
id: lem-boone-reduced-auxiliary-words-have-no-rule-pinches
kind: lemma
title: "Boone reduced auxiliary words have no rule pinches"
status: draft
origin: pipeline
deps: ["lem-boone-base-groups-and-associated-free-bases", "lem-boone-hnn-tower-and-auxiliary-subgroups", "thm-hnn-normal-form-theorem", "def-axiom-of-choice"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to the Theory of Groups, Chapter 12, pp.442\u2013444, Lemma 12.14 and reduced-length comparison"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Statement

Assume AC. Each freely reduced auxiliary word on $x,r_i$ has no rule-letter HNN pinch. For freely reduced signed tape words $X,Y$ and freely reduced auxiliary words $L,R$, an equality $LX^\#q_jYR=q$ in $G_2$ forces $L$ and $R$ to have the same number of rule letters. If that number is positive, an identity spelling $LX^\#q_jYRq^{-1}$ has a central pinch
$$r_i^\epsilon(x^mX^\#q_jYx^n)r_i^{-\epsilon}.$$

## Facts & Assumptions

**Given:** The specified freely reduced words and the rule HNN extension.

[F1] The free associated bases, tape retraction, infinite cyclic subgroup and multiple-letter pinch/comparison results hold. ([[lem-boone-base-groups-and-associated-free-bases]])

[F2] In $G_2$, $A_i\cap\langle x\rangle=B_i\cap\langle x\rangle=\{1\}$, as proved in the tower construction; $G_0$ embeds in $G_2$. ([[lem-boone-hnn-tower-and-auxiliary-subgroups]])

[F3] HNN normal forms relative to chosen transversals are unique. ([[thm-hnn-normal-form-theorem]])

[A1] Assume AC for those transversals. ([[def-axiom-of-choice]])

## Proof

1.1 Here is also the intersection check directly. Undoing the state-twisting automorphism in [F1] fixes $H$. A reduced word with a state syllable then cannot lie in $H$, so an element of $A_i\cap\langle x\rangle$ must lie in $T_1=\langle sx\rangle$. The tape retraction sends a nonempty reduced basis word there to a nonempty reduced tape word, whereas it sends $x^m$ to identity. Therefore the basis word is empty and $x^m=1$, whence $m=0$. For $B_i$ the same computation uses $T_{-1}=\langle sx^{-1}\rangle$, with the identical retraction image. This verifies the intersections used in [F2]. [F1, F2]

2.1 An internal pinch in a reduced auxiliary word must pair $r_i^\epsilon,r_i^{-\epsilon}$ across a pure power $x^m$. By step 1.1 membership in the requisite edge subgroup forces $m=0$. But then the two letters freely cancel, contrary to reducedness. There is thus no internal pinch. [step 1.1]

3.1 Rewrite the given equality as $LX^\#q_j=qR^{-1}Y^{-1}$. Both sides are rule-reduced by step 2.1, since all their rule letters occur in their single auxiliary block. The multiple-letter comparison of [F1], derived by successively pairing letters across the seam, shows their signed rule sequences agree. In particular their lengths agree. This is consistent with the single-letter normal-form invariant [F3], with choices licensed by [A1]; the finite comparison here uses the proved multiple-letter version. [F1, F3, A1, step 2.1]

4.1 If the common length is positive, multiple-letter Britton applied to $LX^\#q_jYRq^{-1}=1$ supplies a pinch. It cannot be wholly within either auxiliary block by step 2.1. The only other consecutive pair of rule letters is the last one of $L$ and the first one of $R$, with intervening coefficient $x^mX^\#q_jYx^n$ for their adjacent terminal/initial powers. Thus it has exactly the central form in the statement. If the common length is zero, the whole equality is in $G_0$ by base embedding. [F1, F2, step 2.1, step 3.1] ∎

## Source locator

Rotman, printed pp.442–444, Lemma 12.14 and the opening comparison in Lemma 12.15. The retraction proves the intersection even when the auxiliary word has no tape letters.
