---
id: ex-brauer-characters-of-a-p-group
kind: example
title: "Brauer characters of a p-group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-brauer-character-of-a-finite-dimensional-kg-module, thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions, cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Example

Let $P$ be a finite $p$-group over a splitting field $k$ of characteristic $p$.
Then $P^0=\{1\}$, every Brauer character is determined by its value at $1$, and
the unique irreducible Brauer character is the trivial character.

## Facts & Assumptions

**Given:** A finite $p$-group $P$.

[F1] Brauer characters are defined on the $p$-regular elements
([[def-brauer-character-of-a-finite-dimensional-kg-module]]).

[L1] Irreducible Brauer characters form a basis of class functions on $P^0$
([[thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]]).

[L2] A finite $p$-group has only the trivial simple module in characteristic
$p$
([[cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p]]).

## Verification

**Proof technique:** direct.

1.1 If $g\in P$ is $p$-regular, then $|g|$ divides the order of the $p$-group $P$ and is also coprime to $p$, so $|g|=1$. Thus $P^0=\{1\}$. [F1, given, algebra]

2.1 By [L2], the only simple $kP$-module is the trivial one, so the only irreducible Brauer character is the trivial character. Then [L1] is consistent with step 1.1 because the class-function space on the one-point set $P^0$ is one-dimensional. [L1, L2, step 1.1]

3.1 For any finite-dimensional $kP$-module $V$, the Brauer character is therefore determined by $\varphi_V(1)=\dim_kV$. [F1, step 1.1, step 2.1, algebra] ∎
