---
id: thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra
kind: theorem
title: "L1 of a locally compact group is a Banach star-algebra"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-banach-star-algebra-without-required-unit, def-convolution-on-cc-and-l1-of-a-group, lem-convolution-preserves-cc-and-is-associative, lem-the-l1-involution-is-isometric-and-reverses-convolution, lem-complex-haar-l1-and-l2-are-complete-and-cc-dense, def-complex-haar-lp-spaces-and-compactly-supported-functions, def-axiom-of-choice, def-involution-on-l1-of-a-group, def-compactly-supported-convolution-on-a-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§31A–31E, printed pp. 119–125"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Assume AC. Let $G$ be an LCH group with a fixed left Haar measure $\mu$. Then
$L^1(G)=L^1(G,\mu;\mathbb C)$, with the convolution of
[[def-convolution-on-cc-and-l1-of-a-group]] and the involution of
[[def-involution-on-l1-of-a-group]], is a complex Banach $\ast$-algebra without
a required unit ([[def-banach-star-algebra-without-required-unit]]).

## Facts & Assumptions

**Given:** An LCH group $G$ with a fixed left Haar measure $\mu$, the complex space $L^1(G)$ with norm $\|\cdot\|_1$, its convolution and its involution, and AC.

[F1] $L^1(G)$ is a complete complex normed space ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F2] Convolution on $L^1(G)$ is the unique $\mathbb C$-bilinear extension of the $C_c$ convolution satisfying $\|f\ast g\|_1\le\|f\|_1\|g\|_1$, hence jointly continuous ([[def-convolution-on-cc-and-l1-of-a-group]]).

[F3] The $C_c$ convolution is associative: $(f\ast g)\ast h=f\ast(g\ast h)$ for $f,g,h\in C_c(G)$, and $f\ast g\in C_c(G)$ ([[lem-convolution-preserves-cc-and-is-associative]], [[def-compactly-supported-convolution-on-a-group]]).

[F4] The involution of $L^1(G)$ is conjugate-linear and isometric, satisfies $(f^{*})^{*}=f$, and reverses convolution: $(f\ast g)^{*}=g^{*}\ast f^{*}$ for all $f,g\in L^1(G)$ ([[lem-the-l1-involution-is-isometric-and-reverses-convolution]], [[def-involution-on-l1-of-a-group]]).

[F5] $C_c(G)$ is dense in $L^1(G)$ ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F6] A complex Banach $\ast$-algebra without a required unit is a possibly nonunital complex Banach algebra with a conjugate-linear involutive involution reversing products and continuous; continuity of the involution and a unit are not part of the structural claims beyond what is listed ([[def-banach-star-algebra-without-required-unit]]).

[A1] AC is assumed in the choice-function form of the cited definition, inherited from the Haar measure and the interfaces used in [F1]–[F4]; its first use in the proof is the density statement [F5] in step 1.1 ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Associativity of convolution on $L^1(G)$. Let $F,G\in L^1(G)$ and $h\in C_c(G)$, and choose $f_n,g_n\in C_c(G)$ with $f_n\to F$ and $g_n\to G$ in $\|\cdot\|_1$, possible by [F5] under the AC of [A1]. By [F2] the products converge: $f_n\ast g_n\to F\ast G$ and $g_n\ast h\to G\ast h$. Applying [F2] again, $(f_n\ast g_n)\ast h\to(F\ast G)\ast h$ and $f_n\ast(g_n\ast h)\to F\ast(G\ast h)$. By [F3] the two sequences are equal termwise, so their limits are equal: $(F\ast G)\ast h=F\ast(G\ast h)$ for $F,G\in L^1(G)$ and $h\in C_c(G)$. [A1, F2, F3, F5]

2.1 Associativity on $L^1(G)$ in the second variable as well. Let $F,G,H\in L^1(G)$ and choose $h_n\in C_c(G)$ with $h_n\to H$. By step 1.1, $(F\ast G)\ast h_n=F\ast(G\ast h_n)$ for every $n$. By joint continuity [F2], $(F\ast G)\ast h_n\to(F\ast G)\ast H$ and $G\ast h_n\to G\ast H$, hence $F\ast(G\ast h_n)\to F\ast(G\ast H)$; uniqueness of limits gives $(F\ast G)\ast H=F\ast(G\ast H)$. [F2, F5, step 1.1]

3.1 The structural axioms hold. $L^1(G)$ is a complex vector space, complete and normed, with associative bilinear multiplication that is submultiplicative by [F2] and associative by step 2.1; the involution is conjugate-linear and involutive and reverses products by [F4], and it is isometric, hence in particular continuous. This is exactly the list of properties required of a complex Banach $\ast$-algebra without a required unit in [F6], and no unit is claimed to exist. ∎ [F1, F2, F4, F6, step 2.1]

## Remarks

- **The involution is an isometry, not merely continuous.** Property 5 of [[def-banach-star-algebra-without-required-unit]] asks only for continuity; the isometry $\|f^{*}\|_1=\|f\|_1$ proved in [[lem-the-l1-involution-is-isometric-and-reverses-convolution]] is stronger and is used in the approximate-identity theorem on this page.
- **Choice cost.** [A1] enters only through the suppliers [F1]–[F5], namely the Haar measure, the completeness and density statements; the extension and associativity arguments in this proof use no further choice.
