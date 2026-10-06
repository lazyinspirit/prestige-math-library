---
id: "lem-derivatives-under-field-isomorphisms"
kind: "lemma"
title: "Derivative ideals under semilinear ground-field isomorphisms"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 4
deps:
  - "def-derivation-algebra"
  - "def-field"
  - "def-ideal-of-derivatives"
  - "def-morphism-of-schemes"
  - "def-smooth-morphism-schemes"
  - "thm-prime-subfield-classification"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Let $K$ and $K'$ be fields of characteristic zero and let $\sigma\colon K\overset\sim\longrightarrow K'$ be a field isomorphism; both fields have prime subfield $\mathbb Q$ ([[def-field]], [[thm-prime-subfield-classification]]). Let $X$ be a smooth $K$-scheme and $X'$ a smooth $K'$-scheme ([[def-smooth-morphism-schemes]]). Suppose $\varphi\colon X'\to X$ is a $\sigma$-semilinear isomorphism, meaning that it is an isomorphism of $\mathbb Q$-schemes and its pullback acts on the ground-field constants by $\sigma$ ([[def-morphism-of-schemes]]).

Then for every coherent ideal sheaf $\mathcal I\subseteq\mathcal O_X$ and every $i\ge0$,
$$\varphi^*\bigl(\mathcal D^i_K(\mathcal I)\bigr)=\mathcal D^i_{K'}(\varphi^*\mathcal I),$$
where the derivative ideals on $X$ and $X'$ are formed using $K$- and $K'$-derivations, respectively ([[def-ideal-of-derivatives]]).

## Facts & Assumptions

**Given:** Fields $K,K'$ of characteristic zero, a field isomorphism $\sigma\colon K\to K'$, smooth schemes $X/K$ and $X'/K'$, a $\sigma$-semilinear isomorphism $\varphi\colon X'\to X$, and a coherent ideal sheaf $\mathcal I\subseteq\mathcal O_X$.

[F1] [[def-ideal-of-derivatives]]: $\mathcal D_K(\mathcal I)$ is generated locally by $\mathcal I$ and the sections $D(f)$ for $K$-derivations $D$; $\mathcal D^i_K$ is the $i$-fold iterate, and similarly over $K'$.

[F2] [[def-derivation-algebra]]: a derivation is additive, satisfies the Leibniz rule, and is linear over the indicated ground field.

[F3] [[def-morphism-of-schemes]]: on corresponding open sets the isomorphism induces inverse ring isomorphisms $\varphi^*$ and $(\varphi^*)^{-1}$, and semilinearity means $\varphi^*(c)=\sigma(c)$ for $c\in K$.

[F4] [[def-field]], [[thm-prime-subfield-classification]]: the prime subfields of $K$ and $K'$ are both $\mathbb Q$, and $\sigma$ fixes that prime field.

## Proof

1.1 Transport derivations. Let $D$ be a $K$-derivation of $\mathcal O_X(U)$ and define $D'$ on $\mathcal O_{X'}(\varphi^{-1}U)$ by $D'(g)=\varphi^*(D((\varphi^*)^{-1}g))$. If $c'=\sigma(c)\in K'$, then semilinearity gives $D'(c'g)=\varphi^*(cD((\varphi^*)^{-1}g))=c'D'(g)$ because $D(c)=0$; the Leibniz rule follows by conjugating the Leibniz rule for $D$. Thus $D'$ is a $K'$-derivation. Conjugation by $\varphi^*$ is bijective, with inverse conjugation by $(\varphi^*)^{-1}$. [F2, F3, F4]

2.1 Derivative ideals agree. For each local section $f\in\mathcal I(U)$, one has $D'(\varphi^*f)=\varphi^*(D(f))$. As $D$ varies, the bijection in step 1.1 identifies all $K$-derivative generators with all $K'$-derivative generators, so $\varphi^*(\mathcal D_K(\mathcal I))=\mathcal D_{K'}(\varphi^*\mathcal I)$. Applying this identity successively to each derivative ideal gives $\varphi^*(\mathcal D^i_K(\mathcal I))=\mathcal D^i_{K'}(\varphi^*\mathcal I)$ for every $i\ge0$. [F1, step 1.1] ∎

## Remarks

- Włodarczyk's Lemma 4.3.1 states this for varieties over one characteristic-zero field and an isomorphism over $\mathbb Q$; the semilinear formulation above also permits relabelling the ground field along an isomorphism $K\simeq K'$.
- In particular, this applies to the automorphisms of an algebraic closure in Galois descent; those automorphisms need not be linear over the algebraic closure.
