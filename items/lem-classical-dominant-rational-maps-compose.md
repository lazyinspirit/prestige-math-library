---
id: "lem-classical-dominant-rational-maps-compose"
kind: "lemma"
title: "Dominant rational maps compose on nonempty open domains"
status: published
origin: "pipeline"
deps: ["lem-classical-affine-variety-nonempty-opens-dense", "lem-classical-morphism-inverse-image-of-closed-is-closed", "lem-classical-rational-map-equivalence-transitive", "def-classical-dominant-morphism-and-rational-map", "lem-classical-open-source-morphisms-equal-on-dense-open", "thm-classical-rational-map-maximal-domain-affine-target"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, §5k–l pp. 116–117"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Dominant rational maps between affine varieties compose to a well-defined dominant rational map. Representatives $\phi:U\to Y$ and $\psi:V\to Z$ compose on $W=U\cap\phi^{-1}(V)$. Composition is independent of representatives, associative, and has identity rational maps.

## Facts & Assumptions

**Given:** Affine varieties $X,Y,Z$ over algebraically closed $k$ and dominant rational maps represented by $\phi:U\to Y$ and $\psi:V\to Z$. For associativity take a third dominant map represented by $\chi:T\to Q$.

[F1] Dominance is independent of representatives and survives nonempty open restriction ([[def-classical-dominant-morphism-and-rational-map]]).

[F2] Morphisms are continuous and pull back local regular functions ([[lem-classical-morphism-inverse-image-of-closed-is-closed]]).

[F3] Equality on a nonempty open defines equality of rational maps ([[lem-classical-rational-map-equivalence-transitive]]).

## Proof

**Proof technique:** direct.

1.1 Because $\phi$ is dominant and V is nonempty open, $W=\phi^{-1}(V)$ is nonempty; by F2 it is open in U and hence X. Local pullback in F2 shows $\psi\circ\phi$ is a morphism there. For a nonempty open $T\subseteq Z$, $\psi^{-1}(T)$ is a nonempty open of V, hence of Y, and dominance of $\phi$ gives a point of W mapping into it. Thus the composite meets every nonempty T and is dominant. [F1, F2, given]

1.2 If $\phi,\phi^{\prime}$ agree on a nonempty open E and $\psi,\psi^{\prime}$ agree on a nonempty open H, F1 makes $\phi|_E$ dominant. Therefore $E\cap\phi^{-1}(H)$ is nonempty open, contained in both composite domains. On it the two composite values agree by substitution. F3 identifies the resulting rational maps, proving representative independence. [F1, F2, F3, given]

2.1 For a third dominant representative $\chi:T\to Q$, both parentheses are defined on $U\cap\phi^{-1}(V\cap\psi^{-1}(T))$. The inner inverse image is nonempty open by dominance of $\psi$, and its inverse image under $\phi$ is nonempty open by dominance of $\phi$. On this domain $\chi(\psi(\phi(x)))$ is the value for both parentheses. F3 and step 1.2 prove associativity. Identity maps have full domain and dense image, and their composites restrict to the original representative, hence give identity classes. [F1, F2, F3, step 1.2] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §5k–l pp. 116–117. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
