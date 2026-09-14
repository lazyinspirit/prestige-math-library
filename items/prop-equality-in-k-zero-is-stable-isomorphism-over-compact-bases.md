---
id: prop-equality-in-k-zero-is-stable-isomorphism-over-compact-bases
kind: proposition
title: Equality in K⁰ is stable isomorphism over compact bases
status: draft
origin: pipeline
deps: [def-complex-topological-k-zero-by-grothendieck-completion, thm-finite-rank-complement-theorem-over-compact-hausdorff-bases, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 2.1 and following construction"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Grothendieck equality and finite complements, printed pp.39–40"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §1"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Stable equivalence description, printed pp.203–204"
---

## Statement

Assume AC. For a compact Hausdorff space $X$,

$$[E]-[F]=[E']-[F']\text{ in }K^0(X)$$

if and only if there is a finite-rank bundle $H$ such that

$$E\oplus F'\oplus H\cong E'\oplus F\oplus H.$$

Equivalently, there is an $N\geq0$ such that

$$E\oplus F'\oplus\varepsilon^N\cong E'\oplus F\oplus\varepsilon^N.$$

In particular, $[E]=[F]$ if and only if
$E\oplus\varepsilon^N\cong F\oplus\varepsilon^N$ for some $N$.

## Facts & Assumptions

**Given:** AC, a compact Hausdorff space $X$, and finite-rank complex bundles
$E,F,E',F'$ over $X$.

[F1] Equality in the Grothendieck group is the common-summand relation
([[def-complex-topological-k-zero-by-grothendieck-completion]]).

[F2] Under AC, every finite-rank bundle over a compact Hausdorff base has a
finite-rank complement in a trivial bundle
([[thm-finite-rank-complement-theorem-over-compact-hausdorff-bases]]).

[A1] AC is used only through [F2] to obtain the complement.

## Proof

**Proof technique:** direct.

1.1 By [F1], the first displayed equality holds exactly when some bundle $H$ satisfies the first stable-isomorphism display. This proves both directions of the first equivalence, including $H=0_X$ when no added summand is needed. [F1]

2.1 Apply [F2] to $H$. There are a bundle $H'$ and $N\geq0$ with $H\oplus H'\cong\varepsilon^N$. Adding $H'$ to both sides of the isomorphism in step 1.1 gives the trivial-stabilization display. Conversely, that display is the relation in step 1.1 with $H=\varepsilon^N$. [F2, A1, step 1.1, algebra]

3.1 Set $F=F'=0_X$ in the proved equivalence. Then $[E]=[F]$ exactly when $E\oplus\varepsilon^N\cong F\oplus\varepsilon^N$ for some $N$, including $N=0$. [step 2.1] ∎
