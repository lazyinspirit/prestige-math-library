---
id: thm-uniform-integrability-of-conditional-expectations-of-one-variable
kind: theorem
title: "Uniform integrability of conditional expectations of one variable"
status: published
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-taking-out-what-is-known, def-uniformly-integrable-family, thm-absolute-continuity-of-the-integral, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "van der Vaart, Martingales, Diffusions and Financial Mathematics"
      url: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf
---

## Statement

Assume AC. For fixed real $X\in L^1(P)$, the classes $E[X\mid\mathcal G]$, as $\mathcal G$ ranges over all sub-sigma-algebras of $\mathcal F$, form a uniformly integrable family.

## Facts & Assumptions

**Given:** AC and one fixed real $X\in L^1(P)$; G ranges over sub-sigma-algebras of F.

[F1] Versions have the same event integrals as their input. ([[def-conditional-expectation-as-an-ae-class]])

[F2] The modulus is bounded by the conditional mean of the absolute input; ordinary expectations are preserved. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] For fixed integrable X, sufficiently small measure events have uniformly small integrals of |X|. ([[thm-absolute-continuity-of-the-integral]])

[F4] Uniform integrability means the supremum of absolute tail integrals tends to zero. ([[def-uniformly-integrable-family]])

## Proof

**Proof technique:** direct.

1.1 Fix one G, a version $Y=E[X\mid\mathcal G]$, and $K>0$. Put $A=\{|Y|>K\}\in\mathcal G$. Since $K\mathbf1_A\le|Y|\mathbf1_A$ and $E|Y|\le E|X|$, integration gives $P(A)\le E|X|/K$. Also $|Y|\le E[|X|\mid\mathcal G]$ almost surely, so the defining event integral gives $\int_A|Y|\le\int_A E[|X|\mid\mathcal G]=\int_A|X|$. [F1, F2]

2.1 Given $\varepsilon>0$, choose $\delta>0$ using [F3] for the fixed X. Choose $K>E|X|/\delta$ (any positive K works when the numerator is zero). Then step 1.1 gives $P(A)<\delta$ and hence $\int_{\{|Y|>K\}}|Y|<\varepsilon$. The same K works for every G and every version, so [F4] proves uniform integrability. The proof fixed G arbitrarily and did not select versions simultaneously over all sigma-algebras. [step 1.1, F3, F4] ∎

## Source notes

Van der Vaart, Martingales, Diffusions and Financial Mathematics, Lemma 1.21 and its full proof, printed p.6 (PDF index 11). The local argument uses the same tail event with absolute continuity of the fixed input integral.
