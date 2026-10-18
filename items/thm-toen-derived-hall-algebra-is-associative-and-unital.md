---
id: thm-toen-derived-hall-algebra-is-associative-and-unital
kind: theorem
title: "Toën derived Hall multiplication is associative and unital"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-toen-derived-hall-algebra
  - lem-derived-hall-moduli-spaces-and-convolution-are-finite
  - lem-homotopy-cardinality-base-change
  - lem-homotopy-cardinality-pushforward-is-functorial
  - lem-derived-hall-associativity-squares
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §4, Theorem 4.1"
      url: "https://arxiv.org/pdf/math/0501343v4"
    - title: "Olivier Schiffmann, Lectures on Hall algebras, arXiv:math/0611617v2, §5.6"
      url: "https://arxiv.org/pdf/math/0611617v2"
---

## Statement

For every locally finite dg-enhancement $\mathcal T$ over a finite field, the convolution of [[def-toen-derived-hall-algebra]] is a well-defined associative $\mathbb Q$-algebra. Its unit is $\chi_0$, the characteristic function of the zero module.

## Facts & Assumptions

**Given:** The product of [[def-toen-derived-hall-algebra]] on $\mathbb Q_c(X^{(0)})$.

[F1] The product is $\alpha*\beta=c_!(s\times t)^*(\alpha\otimes\beta)$, where $s$ is source, $c$ is target, and $t$ is homotopy cofiber ([[def-toen-derived-hall-algebra]]).

[F2] The moduli homotopy types are locally finite, $s\times t$ is proper on components, and the convolution has finite support ([[lem-derived-hall-moduli-spaces-and-convolution-are-finite]]).

[F3] Homotopy pushforward is functorial and satisfies base change for a homotopy-cartesian square with proper lower map ([[lem-homotopy-cardinality-pushforward-is-functorial]], [[lem-homotopy-cardinality-base-change]]).

[F4] For a composable pair, both correspondence squares in [[lem-derived-hall-associativity-squares]] are homotopy cartesian; the cone calculation there gives $t(k)\simeq t(g)$, and the definition of $k$ gives $s(k)=t(f)$.

## Proof

1.1 Fix $\alpha,\beta,\gamma\in\mathbb Q_c(X^{(0)})$ and write $p=s\times t:X^{(1)}\to X^{(0)}\times X^{(0)}$. For any map $a$ and finite-support functions $\mu,\nu$, one has $(a_!\mu)\otimes\nu=(a\times\mathrm{id})_!(\mu\otimes\nu)$: the fiber of $a\times\mathrm{id}$ at $(y,z)$ is $F_y\times\{z\}$, with the same homotopy groups and weight as $F_y$, and its component sum is the defining one for $a_!$. The first square in [F4], transposed so that its lower map is $p$, is homotopy cartesian and $p$ is proper by [F2]. Base change therefore gives $(\alpha*\beta)*\gamma=c_!p^*(c\times\mathrm{id})_!\big((p\times\mathrm{id})^*(\alpha\otimes\beta\otimes\gamma)\big)=(c\circ g)_!\big((s\circ f,t\circ f,t\circ k)^*(\alpha\otimes\beta\otimes\gamma)\big)$. Here $f,g,h,k$ are the maps on $X^{(2)}$ from [[def-toen-derived-hall-algebra]], and the three entries are source of $f$, cofiber of $f$, and cofiber of $k$; [F4] identifies the last entry with the cofiber of $g$. [F1, F2, F3, F4, construct]

1.2 Let $\delta_0=\chi_0$. For $\delta_0*\chi_x$, arrows with source zero have target equivalent to their cofiber; the target map on this restricted homotopy type has contractible fibers over the component of $x$. Its pushforward is therefore $\chi_x$, and is zero on other components. [F1, F2, construct]

2.1 The second square in [F4], again transposed with lower map $p$, is homotopy cartesian and gives $\alpha*(\beta*\gamma)=c_!p^*(\mathrm{id}\times c)_!\big((\mathrm{id}\times p)^*(\alpha\otimes\beta\otimes\gamma)\big)=(c\circ h)_!\big((s\circ f,s\circ k,t\circ k)^*(\alpha\otimes\beta\otimes\gamma)\big)$. By definition of the induced cofiber map, $s\circ k=t\circ f$; also $c\circ h=c\circ g$ because $h$ is the composite of $f$ and $g$. Thus the last expression is the same as in step 1.1. This proves associativity on finite-support functions. [F1, F2, F3, F4, step 1.1]

2.2 For $\chi_x*\delta_0$, the selected arrows have source in the component of $x$ and zero cofiber, hence are quasi-isomorphisms. Their core is the path homotopy type of the component of $x$; the target map is an equivalence onto that component with contractible homotopy fibers. The pushforward is again $\chi_x$ and vanishes elsewhere. Thus $\delta_0$ is a two-sided unit. [F1, F2, step 1.2]

3.1 Steps 1.1–1.2 prove associativity on arbitrary finite-support functions, and steps 1.2–2.2 prove both unit identities. Finiteness of each convolution is supplied by [F2]. [F2, step 1.1, step 2.1, step 1.2, step 2.2] ∎
