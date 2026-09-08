---
id: "thm-classical-function-field-independent-of-affine-open"
kind: "theorem"
title: "The function field is independent of the chosen nonempty principal affine open"
status: published
origin: "pipeline"
deps: ["lem-classical-principal-opens-form-affine-basis", "thm-classical-principal-open-coordinate-ring-localization", "thm-classical-principal-open-is-affine-variety", "def-classical-affine-open-subset", "def-classical-variety-function-field", "thm-universal-property-of-the-field-of-fractions", "lem-classical-regular-functions-on-open-embed-in-function-field", "def-axiom-of-choice"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, §3k p. 74 and Proposition 3.32 p. 71"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. For every nonempty affine open $U$ in an affine variety $X$, restriction gives the canonical identification $\operatorname{Frac}(\mathcal O_X(U))=k(X)$. In particular, for $f\ne0$, $k[D_X(f)]=k[X]_f$ and $\operatorname{Frac}(k[D_X(f)])=k(X)$. The identifications commute with further nonempty affine-open restriction.

## Facts & Assumptions

**Given:** AC, an affine variety $X$ over algebraically closed $k$, and a nonempty affine open $U\subseteq X$. For the principal case, $f\in k[X]$ is nonzero.

[F1] Nonempty open section algebras embed in k(X), compatibly with restriction ([[lem-classical-regular-functions-on-open-embed-in-function-field]]).

[F2] A embeds in its fraction field ([[def-classical-variety-function-field]]).

[F3] An injective map from a domain into a field extends uniquely to its fraction field ([[thm-universal-property-of-the-field-of-fractions]]).

[F4] Principal-open sections are A_f ([[thm-classical-principal-open-coordinate-ring-localization]]).

[F5] Nonempty principal opens are affine ([[thm-classical-principal-open-is-affine-variety]]).

## Proof

**Proof technique:** direct.

1.1 Put $A=k[X]$, $B=\mathcal O_X(U)$ and $K=k(X)$. Restriction sends A into B, and the embedding $B\hookrightarrow K$ of F1 sends each restricted polynomial a to $a/1$. Thus $A\subseteq B\subseteq K$ with these specified maps, and B is a domain as a subring of a field. [F1, F2, given]

2.1 F3 extends $B\hookrightarrow K$ to an embedding $\operatorname{Frac}(B)\hookrightarrow K$. Its image contains every $a/b$ for $a,b\in A$, $b\ne0$, since $A\subseteq B$. Such fractions exhaust K by F2, so this extension is surjective and is the claimed isomorphism. [F2, F3, step 1.1]

3.1 For $U=D(f)$, F4 and F5 identify B with the affine coordinate ring $A_f$, so step 2.1 is the asserted principal-open identification. For a further nonempty affine open V, both restriction embeddings into K agree on sections by F1; their extensions agree on every ratio by the uniqueness in F3. [F1, F3, F4, F5, step 2.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §3k p. 74 and Proposition 3.32 p. 71. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
