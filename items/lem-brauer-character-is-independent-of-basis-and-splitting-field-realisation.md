---
id: lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation
kind: lemma
title: "The Brauer character is independent of basis and splitting-field realization"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-brauer-character-of-a-finite-dimensional-kg-module, lem-teichmuller-lift-is-multiplicative-and-unique]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

For a finite-dimensional $kG$-module $V$, the value $\varphi_V(g)$ on a
$p$-regular element $g$ is independent of the chosen basis of $V$. It is also
independent of the chosen splitting realization, provided the realizations
identify the same prime-to-$p$ roots of unity by the residue-field isomorphism.

## Facts & Assumptions

**Given:** A finite-dimensional $kG$-module $V$ and a $p$-regular element
$g\in G$.

[F1] The Brauer character of $V$ at $g$ is the sum of the Teichmuller lifts of
the eigenvalues of the action of $g$ on $V$
([[def-brauer-character-of-a-finite-dimensional-kg-module]]).

[L1] Teichmuller lifts are unique and multiplicative
([[lem-teichmuller-lift-is-multiplicative-and-unique]]).

## Proof

**Proof technique:** direct.

1.1 Changing basis replaces the matrix of $g$ by a similar matrix. Similar matrices have the same characteristic polynomial, hence the same eigenvalues with the same multiplicities. Therefore the sum in [F1] is basis-independent. [F1, given, algebra]

1.2 If two splitting realizations identify the same prime-to-$p$ roots of unity in the residue fields, then they identify each eigenvalue of the action of $g$ and, by [L1], identify its unique Teichmuller lift. So the lifted eigenvalue sum computed in [F1] is the same in either realization. [F1, L1, algebra]

2.1 Steps 1.1 and 1.2 prove both independence statements. [step 1.1, step 1.2] ∎
