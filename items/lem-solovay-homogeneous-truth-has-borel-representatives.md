---
id: lem-solovay-homogeneous-truth-has-borel-representatives
kind: lemma
title: Homogeneous truth about a generic real has Borel representatives
status: published
origin: pipeline
deps: [lem-solovay-absorption-factorization-and-homogeneity, thm-forcing-theorem, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: boolean-valued-forcing
verification:
  audited: 2026-09-14
sources:
  references:
    - {title: "Solovay 1970, Part II, Lemma 2.8 and Part III, Lemma 1.4", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}
---

## Statement

For a formula over a localized intermediate $N=V[f]$ to which the Solovay absorption factorization applies, an $N$-coded Borel set represents its truth in the final collapse extension for every $N$-random real. The Cohen analogue gives a Borel, hence open-mod-meagre, representative on $N$-Cohen generics.

## Facts & Assumptions

**Given:** A formula $\varphi(x,a,\vec\alpha)$ with parameters in $N$ and the canonical generic-real name $\dot x$.

[F1] [[lem-solovay-absorption-factorization-and-homogeneity]]: after the real forcing, the remaining collapse is homogeneous over $N[x]$.

[F2] [[thm-forcing-theorem]]: Boolean values have the truth-lemma interpretation.

[F3] [[def-axiom-of-choice]]: ambient AC supplies the maximal-antichain and Boolean-completion presentations used to form the Boolean values.

## Proof

1.1 For a random real $x$ over $N$, F1 factors the final extension as $N[x][H_x]$ with homogeneous tail forcing $R_x$. In the random forcing language over $N$, let $\psi(\dot x)$ be the assertion that the top condition of $R_{\dot x}$ forces $\varphi(\dot x,a,\vec\alpha)$. Use F3 to form $b=\lVert\psi(\dot x)\rVert$ in the completed random algebra and choose an $N$-coded Borel representative $B$ of $b$. For every $N$-random $x$, the random-forcing truth lemma gives $x\in B$ iff $N[x]\models\psi(x)$. Homogeneity says the Boolean value of $\varphi(x,a,\vec\alpha)$ in $R_x$ is $0$ or $1$, and the tail truth lemma applied to the actual $H_x$ therefore gives $N[x]\models\psi(x)$ iff $N[x][H_x]=V[G]\models\varphi(x,a,\vec\alpha)$. Thus $B$ represents final-extension truth on every $N$-random real; no absoluteness from $N[x]$ to its tail extension was used. [F1, F2, F3]

2.1 In Cohen forcing use the analogous assertion $\psi(\dot x)$ that the top of the homogeneous tail forces $\varphi(\dot x,a,\vec\alpha)$. F3 supplies its regular-open Boolean value, with an $N$-coded regular-open representative $U$ whose boundary is nowhere dense. The Cohen-forcing truth lemma and the same homogeneous-tail argument from step 1.1 show that, for every $N$-Cohen generic $x$, final-extension truth is equivalent to $x\in U$. Thus $U$ is already a Borel representative, and it differs from an open set by the empty, hence meagre, set. The statement deliberately leaves all nongenerics as exceptions; their largeness is used only by later items after its countability hypothesis has been verified. [F1, F2, F3, step 1.1] ∎
