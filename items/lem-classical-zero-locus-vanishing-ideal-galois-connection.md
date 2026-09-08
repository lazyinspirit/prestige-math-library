---
id: "lem-classical-zero-locus-vanishing-ideal-galois-connection"
kind: "lemma"
title: "Zero loci and vanishing ideals form a Galois connection"
status: "draft"
origin: "pipeline"
deps: ["def-classical-affine-algebraic-set-with-empty-boundaries", "lem-classical-zero-locus-ideal-radical-invariance", "def-classical-vanishing-ideal", "thm-classical-affine-zero-loci-form-zariski-closed-sets"]
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
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 2.10 pp. 38–39, Proposition 2.14 p. 41, and Remark 2.23 p. 44"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

For $E\subseteq k^n$ and an ideal $J\subseteq R$, $E\subseteq V(J)$ iff $J\subseteq I(E)$. Both $I$ and $V$ reverse inclusion. Moreover $V(I(E))=\overline E$ in the Zariski topology, and $V(I(V(J)))=V(J)$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, a subset $E\subseteq k^n$, and an ideal $J\subseteq R=k[x_1,\ldots,x_n]$.

[F1] Zero loci use a universal condition on equations ([[def-classical-affine-algebraic-set-with-empty-boundaries]]).

[F2] Vanishing ideals use a universal condition on points ([[def-classical-vanishing-ideal]]).

[F3] Every closed zero locus can be defined by an ideal ([[lem-classical-zero-locus-ideal-radical-invariance]]).

[F4] Zero loci are exactly the Zariski closed sets ([[thm-classical-affine-zero-loci-form-zariski-closed-sets]]).

## Proof

**Proof technique:** direct.

1.1 $E\subseteq V(J)$ says that for every $a\in E$ and every $f\in J$, $f(a)=0$. Interchanging these two universal quantifiers says precisely $J\subseteq I(E)$. Enlarging $E$ imposes more conditions on $I(E)$; enlarging $J$ imposes more equations on $V(J)$. This proves both reversals. [F1, F2, given]

2.1 Every point of $E$ lies in $V(I(E))$. If a closed set $V(J)$ contains $E$, step 1.1 gives $J\subseteq I(E)$ and therefore $V(I(E))\subseteq V(J)$. Thus $V(I(E))$ is the smallest closed set containing $E$. Applying this to the already closed set $E=V(J)$ gives the last identity. [F3, F4, step 1.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Proposition 2.10 pp. 38–39, Proposition 2.14 p. 41, and Remark 2.23 p. 44. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
