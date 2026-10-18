---
id: lem-na-hdiv-is-hilbert-and-h0div-closed
kind: lemma
title: H(div) is Hilbert and H0(div) is closed
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-na-hdiv-space, def-na-h0div-space, lem-na-hdiv-weak-normal-trace, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-holder-inequality-for-integrals, lem-closed-subspace-of-a-banach-space-is-banach, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.1, equations (2.1.14)–(2.1.16), H(div) graph norm and normal trace continuity."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div) finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §§14.1–14.4, H(div) conformity and normal-trace conventions."
---

## Statement

Assume Countable Choice. For every open $D\subseteq\mathbb R^d$, the real space $H(\operatorname{div};D)$ with the graph inner product
$$
(v,w)_{H(\operatorname{div})}:=(v,w)_{L^2(D;\mathbb R^d)}+(\operatorname{div}v,\operatorname{div}w)_{L^2(D)}
$$
is a Hilbert space. Its subspace $H_0(\operatorname{div};D)$ of [[def-na-h0div-space]] is closed, hence is Hilbert with the restricted inner product.

## Facts & Assumptions

**Given:** Countable Choice and an open set $D\subseteq\mathbb R^d$.

[A1] Countable Choice is inherited from the real $L^2$ Hilbert-space interface used for graph completeness. ([[def-countable-choice]])

[F1] Real $L^2$ is complete for its integral inner product and quotient norm. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]])

[F2] The graph norm is $\|v\|_{H(\operatorname{div})}^2=\|v\|_2^2+\|\operatorname{div}v\|_2^2$. ([[def-na-hdiv-space]])

[F3] The weak normal trace is bounded by the H(div) graph norm. ([[lem-na-hdiv-weak-normal-trace]])

[F4] Holder's inequality passes the two $L^2$ pairings to their limits. ([[thm-holder-inequality-for-integrals]])

[F5] A closed subspace of a Banach space is complete in the restricted norm. ([[lem-closed-subspace-of-a-banach-space-is-banach]])

## Proof

1.1 Let $(v_n)$ be Cauchy in the graph norm. By [F1] applied componentwise, $v_n\to v$ in $L^2(D;\mathbb R^d)$ and $\operatorname{div}v_n\to g$ in $L^2(D)$ for some $v,g$. For every $\phi\in C_c^\infty(D;\mathbb R)$, the distributional identity gives $\int_D v_n\cdot\nabla\phi=-\int_D(\operatorname{div}v_n)\phi$. Holder's inequality [F4] passes both pairings to their $L^2$ limits, so $\int_Dv\cdot\nabla\phi=-\int_Dg\phi$. Hence $g=\operatorname{div}v$ distributionally, $v\in H(\operatorname{div};D)$, and [F2] gives graph-norm convergence $v_n\to v$. [A1, F1, F2, F4, algebra, algebra]

2.1 The displayed graph inner product is the sum of the real $L^2$ inner products of $v$ and its divergence, so it induces exactly the graph norm. By step 1.1 that norm is complete; therefore H(div) is Hilbert. [F1, F2, step 1.1, algebra]

3.1 By [F3], if $v_n\in H_0(\operatorname{div};D)$ and $v_n\to v$ in H(div), then $\gamma_n v_n\to\gamma_n v$ in $T_D'$. Since each $\gamma_n v_n=0$, the limit trace is zero, so $v\in H_0(\operatorname{div};D)$. This proves closedness; [F5] and step 2.1 show that the restricted inner-product space is complete. [F3, F5, step 2.1, algebra] ∎