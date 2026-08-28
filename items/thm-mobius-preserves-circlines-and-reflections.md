---
id: thm-mobius-preserves-circlines-and-reflections
kind: theorem
title: "Möbius transformations preserve circlines and conjugate their reflections"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-circline-and-reflection, thm-mobius-group-and-projective-linear-identification, thm-three-point-transitivity-mobius-transformations, thm-mobius-transformations-biholomorphic-sphere, thm-cross-ratio-mobius-invariant]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement

Möbius transformations preserve circlines. More precisely, if $M$ is Möbius and
$C$ is a circline, then $M(C)$ is a circline. If $\sigma_C$ denotes reflection in
$C$, then
$$M\circ\sigma_C\circ M^{-1}=\sigma_{M(C)}.$$

## Facts & Assumptions

**Given:** A Möbius transformation $M$ and a circline $C$.

[L1] The cross-ratio is Möbius invariant ([[thm-cross-ratio-mobius-invariant]]).

[L2] Circlines are exactly the loci $C(a,b,c)=\{a,b,c\}\cup\{z\notin\{a,b,c\}:[a,b;c,z]\in\mathbb R\}$ ([[def-circline-and-reflection]]).

[L3] A Möbius transformation carries any ordered triple of distinct sphere points to any other such triple ([[thm-three-point-transitivity-mobius-transformations]]).

[L4] Möbius transformations form a group under composition ([[thm-mobius-group-and-projective-linear-identification]]).

## Proof

**Proof technique:** direct.

1.1 Writing $C=C(a,b,c)$, the defining points $a,b,c$ map to $M(a),M(b),M(c)\in C(M(a),M(b),M(c))$. If $z\notin\{a,b,c\}$, then [L2] says $z\in C$ exactly when $[a,b;c,z]\in\mathbb R$. By [L1] this is equivalent to $[M(a),M(b);M(c),M(z)]\in\mathbb R$, which is exactly the condition $M(z)\in C(M(a),M(b),M(c))$. Thus $M(C)=C(M(a),M(b),M(c))$ is again a circline. [L1, L2, given]

2.1 If $C=C(a,b,c)$, then [L3] gives a Möbius map $N$ with $N(a)=\infty$, $N(b)=0$, and $N(c)=1$. Step 1.1 makes $N(C)$ a circline. Its defining triple $\infty,0,1$ already lies in $C(\infty,0,1)$, and for every $w\notin\{\infty,0,1\}$ one has $[\infty,0;1,w]=w$, so [L2] makes $w\in C(\infty,0,1)$ exactly when $w\in\mathbb R$. Hence $N(C)=C(\infty,0,1)=\widehat{\mathbb R}$, so every circline admits a Möbius normalization to the standard real circline. [L2, L3, step 1.1, given, algebra]

3.1 Let $N$ and $N'$ be two normalizing maps for $C$, and put $H:=N'\circ N^{-1}$. By [L4], $H$ is Möbius and preserves $\widehat{\mathbb R}$. The map $\widetilde H:=\sigma_{\widehat{\mathbb R}}\circ H\circ\sigma_{\widehat{\mathbb R}}$ is Möbius by conjugating the coefficients of a fractional-linear formula. Moreover, $H$ and $\widetilde H$ agree at $0$, $1$, and $\infty$, because these points and their $H$-images lie in $\widehat{\mathbb R}$. By [L3], $\widetilde H=H$, equivalently $H\circ\sigma_{\widehat{\mathbb R}}=\sigma_{\widehat{\mathbb R}}\circ H$. [L3, L4, step 2.1, algebra]

4.1 Since $N'=H\circ N$, step 3.1 gives $$(N')^{-1}\circ\sigma_{\widehat{\mathbb R}}\circ N'=N^{-1}\circ H^{-1}\circ\sigma_{\widehat{\mathbb R}}\circ H\circ N=N^{-1}\circ\sigma_{\widehat{\mathbb R}}\circ N.$$ Thus the reflection $\sigma_C$ is independent of the normalizing map. [step 3.1, algebra]

5.1 Choose a normalizing map $N$ for $C$. Since step 1.1 makes $M(C)$ a circline, $N\circ M^{-1}$ normalizes $M(C)$ to $\widehat{\mathbb R}$. Using the well-defined reflection from step 4.1 gives $$\sigma_{M(C)}=(N\circ M^{-1})^{-1}\circ\sigma_{\widehat{\mathbb R}}\circ(N\circ M^{-1})=M\circ\sigma_C\circ M^{-1}.$$ [step 1.1, step 2.1, step 4.1, given, algebra] ∎
