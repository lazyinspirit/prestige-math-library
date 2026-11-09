---
title: Postnikov inverse and the specified nonconnective degree-zero group
status: draft
research_item: lem-author-7ef3227685d9-supported-k0-postnikov
dependency_level: 12
---

PDF p. 15: Supported degree-zero dévissage

## Prerequisites

- [lem-author-7ef3227685d9-supported-k0-heart](item-lem-author-7ef3227685d9-supported-k0-heart)
- [lem-author-7ef3227685d9-supported-k0-euler](item-lem-author-7ef3227685d9-supported-k0-euler)
- [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input)
- [lem-author-3a003d7b5208-triangle-presentation](item-lem-author-3a003d7b5208-triangle-presentation)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed suitable universes of the supplied supported perfect and nonconnective constructions. For regular Noetherian finite-dimensional $U$ and closed $T$, the coherent Euler map induces a canonical isomorphism
$$\pi_0K_{|T|}(U)\xrightarrow{\sim}G_0(\mathcal A_T).$$
Its inverse takes $[M]$ to the class of the actual perfect object $M[0]$. The same construction for $T=U$ gives $G_0(U)\simeq\pi_0K(U)$, with $G_0(U)$ the coherent-sheaf Grothendieck group. These comparisons commute with inclusion of supported categories.

## Facts & Assumptions
[A1] The already assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed universes discharge the supported-heart and Euler constructions [F1] in steps 1.1–2.1 and the selected essentially small nonconnective model [F2] in step 3.1. The finite truncation calculation introduces no additional choice.

**Given:** The current nonconnective $K$ and supported perfect categories; AC and fixed universes.

**Goal:** Establish the inverse by actual finite truncation triangles, and use a genuine general $\pi_0$ comparison.

[F1] [lem-author-7ef3227685d9-supported-k0-heart](item-lem-author-7ef3227685d9-supported-k0-heart) supplies the bounded t-structure and actual cofiber sequences for heart short exact sequences; [lem-author-7ef3227685d9-supported-k0-euler](item-lem-author-7ef3227685d9-supported-k0-euler) supplies the Euler homomorphism.

[F2] [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input) identifies the object/cofiber Grothendieck group of every small idempotent-complete stable category with $\pi_0$ of the same BGT nonconnective functor, naturally in exact functors. [lem-author-3a003d7b5208-triangle-presentation](item-lem-author-3a003d7b5208-triangle-presentation) identifies this with the triangle group. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) gives essentially small idempotent-complete models for $\mathcal C_T$.

## Proof
1.1 The assignment $[M]\mapsto[M[0]]$ defines a map from $G_0(\mathcal A_T)$ to the triangle group by the short-exact/cofiber assertion in [F1]. The Euler composite is the identity on each generator $[M]$ by [F1]. [A1, F1, construct]

2.1 For $E\in\mathcal C_T$, choose $a\leq b$ outside which its cohomology vanishes. Its actual truncation triangles $\tau_{\leq n-1}E\to\tau_{\leq n}E\to H^n(E)[-n]$ all lie in $\mathcal C_T$ by [F1]. Starting with $\tau_{\leq a-1}E=0$ and ending with $\tau_{\leq b}E\simeq E$, their relations give $[E]=\sum_n(-1)^n[H^n(E)[0]]$; the sign follows from the triangle $A\to0\to A[1]$. Hence the reverse composite is also the identity. [A1, F1, step 1.1]

3.1 Apply [F2] to a small equivalent presentation of the idempotent-complete $\mathcal C_T$ and compose its inverse with the triangle Euler isomorphism just proved. This gives exactly the displayed $\pi_0$ isomorphism and object-class inverse for the current nonconnective functor. Take $T=U$ for the global comparison. Inclusion of the supported category is an actual exact functor preserving the same cohomology; naturality in [F2] and the Euler compatibility in [F1] give the asserted commutative support/global square. Positive-degree comparison alone is not used. [A1, F1, F2, step 1.1, step 2.1] ∎
