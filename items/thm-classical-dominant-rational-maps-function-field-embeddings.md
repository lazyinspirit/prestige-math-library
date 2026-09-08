---
id: "thm-classical-dominant-rational-maps-function-field-embeddings"
kind: "theorem"
title: "Dominant rational maps to an affine variety correspond to field embeddings"
status: "draft"
origin: "pipeline"
deps: ["thm-classical-affine-nullstellensatz-correspondence", "thm-classical-affine-morphisms-coordinate-ring-antiequivalence", "thm-classical-function-field-independent-of-affine-open", "def-classical-dominant-morphism-and-rational-map", "thm-classical-rational-map-maximal-domain-affine-target", "lem-classical-dominant-map-pulls-back-function-fields", "thm-classical-principal-open-is-affine-variety", "lem-classical-open-source-morphisms-equal-on-dense-open", "def-axiom-of-choice", "lem-classical-regular-functions-on-open-embed-in-function-field", "lem-classical-affine-variety-nonempty-opens-dense"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 5.38 p. 117; Proposition 3.34(a) p. 72"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. For affine varieties $X,Y$, pullback is a natural bijection between dominant rational maps $X\dashrightarrow Y$ and $k$-field embeddings $k(Y)\hookrightarrow k(X)$. The inverse is defined on a nonempty principal open by a common denominator for the images of finitely many coordinate generators.

## Facts & Assumptions

**Given:** AC and affine varieties $X,Y$ over algebraically closed $k$. The reverse construction starts with an injective field homomorphism $\sigma:k(Y)\to k(X)$ fixing $k$.

[F1] Dominant rational maps have functorial injective field pullbacks ([[lem-classical-dominant-map-pulls-back-function-fields]]).

[F2] D(d), for d nonzero, is affine with coordinate ring A_d ([[thm-classical-principal-open-is-affine-variety]]).

[F3] Algebra maps of coordinate rings give unique affine morphisms ([[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]]).

[F4] Nonempty affine opens have the ambient function field ([[thm-classical-function-field-independent-of-affine-open]]).

[F5] A proper closed subset of Y has a vanishing ideal strictly larger than I(Y) ([[thm-classical-affine-nullstellensatz-correspondence]]).

[F6] Open-source morphisms with dense agreement agree on the common domain ([[lem-classical-open-source-morphisms-equal-on-dense-open]]).

[F7] Open regular sections embed faithfully and compatibly in the function field ([[lem-classical-regular-functions-on-open-embed-in-function-field]]).

[F8] Nonempty open subsets of an affine variety have nonempty intersection ([[lem-classical-affine-variety-nonempty-opens-dense]]).

## Proof

**Proof technique:** direct.

1.1 Let $\sigma:k(Y)\hookrightarrow k(X)$ fix k. Put $A=k[X]$ and $B=k[Y]=k[y_1,\ldots,y_m]$. Write $\sigma(y_i)=a_i/b_i$ with $a_i,b_i\in A$ and $b_i\ne0$. The finite product $d=\prod_i b_i$ is nonzero since A is a domain; for $m=0$ put $d=1$. Each $b_i$ is invertible in $A_d$ with inverse $(\prod_{j\ne i}b_j)/d$, so $\sigma(B)\subseteq A_d$. F2 and F3 realize this algebra map as $\phi:D(d)\to Y$. [F2, F3, given, algebra]

2.1 If the image of $\phi$ were contained in a proper closed $C\subsetneq Y$, F5 would give a polynomial function $0\ne b\in B$ vanishing on C: choose an element of $I(C)\setminus I(Y)$. Then the coordinate dictionary makes $\sigma(b)=\phi^*(b)=0$ in $A_d$, hence in k(X), contrary to injectivity of $\sigma$. Thus $\phi$ is dominant. F4 identifies the source field with k(X); F1 and the equality on B show its field pullback equals $\sigma$ on every ratio. [F1, F3, F4, F5, step 1.1]

3.1 If two dominant rational maps have the same field pullback, take representatives on U and V. Their pullbacks of each y_i agree as elements of k(X), so the faithful open-section embedding F7 makes their values agree on $U\cap V$. This intersection is nonempty by F8, hence the representatives determine the same rational map. Conversely equal rational maps have equal pullbacks by F1. Thus step 2.1 proves surjectivity and this argument proves injectivity. [F1, F6, step 2.1, F7, F8]

4.1 Finally F1 gives identity preservation and reversal of composition, so the bijection is natural with respect to dominant rational composition. This construction asserts a dense image, and does not require an image-constructibility theorem. [F1, step 3.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Proposition 5.38 p. 117; Proposition 3.34(a) p. 72. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
