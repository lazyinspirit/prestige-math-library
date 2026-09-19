---
id: lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact
kind: lemma
title: Continuous convolution operators are Hilbert–Schmidt
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group, thm-l-two-kernels-give-hilbert-schmidt-operators, thm-hilbert-schmidt-operators-are-compact, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-axiom-of-choice, prop-integration-against-haar-is-invariant-under-translations-and-conjugation, thm-linearity-of-the-lebesgue-integral-on-l-one]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3, compactness of convolution by a continuous kernel"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VII §1 (cross-check)"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact Lie group with normalized Haar
measure $dg$ and let $k\in C(G,\mathbb C)$. Then $T_k$ has the square-integrable
kernel $K(x,y)=k(x^{-1}y)$ on $G\times G$, is Hilbert–Schmidt with
$\|T_k\|_{HS}=\|k\|_2$, and is compact.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with normalized Haar measure $dg$, and $k\in C(G,\mathbb C)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Haar measure and the Hilbert–Schmidt theory cited.

[L1] $(T_kf)(x)=\int_Gk(x^{-1}y)f(y)\,dy$ defines a bounded operator on $L^2(G)$, and $K(x,y)=k(x^{-1}y)$ is continuous ([[def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group]]).

[L2] If $k\in L^2(G\times G)$ is a kernel class, the associated operator $T$ on $L^2(G)$ is Hilbert–Schmidt with $\|T\|_{HS}=\|k\|_2$; Hilbert–Schmidt operators are compact ([[thm-l-two-kernels-give-hilbert-schmidt-operators]], [[thm-hilbert-schmidt-operators-are-compact]]).

[L3] Fubini's theorem identifies the product integral of an integrable function on two sigma-finite measure spaces with either iterated integral ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]), and Haar measure is translation invariant ([[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]]).

## Proof

**Proof technique:** direct.

1.1 The kernel $K(x,y)=k(x^{-1}y)$ is continuous on the compact product $G\times G$ by [L1], hence bounded and measurable; its squared modulus is integrable, and by Fubini and translation invariance $\int\!\!\int_{G\times G}|K(x,y)|^2\,dx\,dy=\int_G\Bigl(\int_G|k(x^{-1}y)|^2\,dx\Bigr)dy=\int_G\|k\|_2^2\,dy=\|k\|_2^2<+\infty$. [L1, L3]

2.1 The operator with kernel $K$ is $T_k$ by [L1], so by [L2] the operator $T_k$ is Hilbert–Schmidt with $\|T_k\|_{HS}=\|k\|_2$ and is compact. [A1, L1, L2, step 1.1]∎
