---
id: "thm-classical-birational-equivalence-iff-function-fields-isomorphic"
kind: "theorem"
title: "Classical integral varieties are birational exactly when their function fields are isomorphic over $k$"
status: published
origin: "pipeline"
deps: ["thm-classical-function-field-independent-of-affine-open", "lem-classical-dominant-map-pulls-back-function-fields", "thm-classical-dominant-rational-maps-function-field-embeddings", "def-classical-birational-equivalence", "def-classical-integral-affine-atlas-and-chartwise-morphism", "lem-classical-integral-affine-charts-have-canonical-common-function-field", "lem-classical-open-source-morphisms-equal-on-dense-open", "lem-classical-principal-opens-form-affine-basis", "thm-classical-principal-open-is-affine-variety", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 3.36 p. 74 and Proposition 5.39 p. 117"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. Two integral classical varieties over algebraically closed $k$ are birationally equivalent exactly when their function fields are isomorphic over $k$. For affine varieties this is also equivalent to the existence of mutually inverse dominant rational maps.

## Facts & Assumptions

**Given:** AC and integral classical varieties $X,Y$ over the same algebraically closed field $k$, equipped with compatible affine atlases.

[F1] Field embeddings correspond bijectively to dominant rational maps of affine varieties ([[thm-classical-dominant-rational-maps-function-field-embeddings]]).

[F2] Pullback reverses composition and preserves identities ([[lem-classical-dominant-map-pulls-back-function-fields]]).

[F3] Rational agreement on a nonempty open extends over the common domain for affine targets ([[lem-classical-open-source-morphisms-equal-on-dense-open]]).

[F4] All nonempty affine opens of an integral variety have canonically the ambient field ([[lem-classical-integral-affine-charts-have-canonical-common-function-field]]).

[F5] Charts and their compatible affine subopens are open in the whole variety ([[def-classical-integral-affine-atlas-and-chartwise-morphism]]).

[F6] Birational equivalence for integral varieties means isomorphic nonempty opens ([[def-classical-birational-equivalence]]).

[F7] Principal opens form a basis in an affine chart ([[lem-classical-principal-opens-form-affine-basis]]).

[F8] Nonempty principal opens are affine ([[thm-classical-principal-open-is-affine-variety]]).

## Proof

**Proof technique:** direct.

1.1 First let X,Y be affine and let $\sigma:k(Y)\to k(X)$ be a k-isomorphism. F1 gives dominant rational maps $\Phi:X\dashrightarrow Y$ and $\Psi:Y\dashrightarrow X$ for $\sigma$ and $\sigma^{-1}$. F2 makes the pullbacks of their composites identity embeddings, and injectivity of the bijection in F1 forces both composites to be identity rational maps. Conversely mutually inverse dominant rational maps give inverse k-field embeddings by F2. [F1, F2, given]

2.1 Choose representatives $\phi:U\to Y$ and $\psi:V\to X$ of the inverse maps. Set $U_0=U\cap\phi^{-1}(V)$ and $V_0=V\cap\psi^{-1}(U)$. Dominance makes both nonempty open. Their compositions agree rationally with the identities; F3 extends those identities over all U0 and V0. If $x\in U_0$, put $y=\phi(x)$. Then $y\in V$ and $\psi(y)=x\in U$, so $y\in V_0$. Conversely if $y\in V_0$, $x=\psi(y)\in U$ and $\phi(x)=y\in V$, so $x\in U_0$. Thus the restrictions $U_0\to V_0$ and $V_0\to U_0$ are inverse morphisms. This produces the required nonempty open isomorphism. [F3, step 1.1, algebra]

3.1 Now let X,Y have compatible integral affine atlases and let their fields be k-isomorphic. Choose one nonempty affine chart in each. F4 transfers the field isomorphism to their chart fields, and steps 1.1–2.1 give isomorphic nonempty opens in these charts. By F5 these opens are open in the whole X and Y, so F6 makes X,Y birationally equivalent. [F4, F5, F6, step 1.1, step 2.1]

4.1 Conversely suppose $h:U\to V$ is an isomorphism of nonempty opens of X,Y. Take a point x of U, a chart A containing x and a chart B containing h(x). The open $U\cap A\cap h^{-1}(B)$ contains x. F7 and F8 give a nonempty principal affine open W of A in it. Its image h(W) is open in Y and is affine via the isomorphism with W; its regular functions are identified with those on W. Taking fractions and applying F4 identifies k(X) with k(W), then with k(h(W)), then with k(Y), all over k. This proves the reverse direction and, together with steps 1.1–3.1, all claimed equivalences. [F4, F5, F7, F8, given] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Proposition 3.36 p. 74 and Proposition 5.39 p. 117. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
