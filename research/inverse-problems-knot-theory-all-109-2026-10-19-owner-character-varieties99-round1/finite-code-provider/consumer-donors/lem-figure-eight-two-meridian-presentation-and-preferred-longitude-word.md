---
id: lem-figure-eight-two-meridian-presentation-and-preferred-longitude-word
kind: lemma
title: "A two-meridian figure-eight presentation and its preferred longitude word"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-explicit-unknot-and-figure-eight-oriented-wirtinger-codes
  - lem-link-peripheral-longitude-word-from-diagram
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is retained from the knot-exterior branch; the Tietze eliminations and crossing-word calculation are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Petersen, A-polynomials of a family of two-bridge knots"
      url: https://nyjm.albany.edu/j/2015/21-39v.pdf
      locator: "Section3, Proposition3.1 and the longitude paragraph, printedpp851–852/PDFpp5–6. The exact transition from the repository's four-crossing code and its own preferred longitude is proved below."
---

## Statement

Assume full AC and use the standard oriented four-crossing figure-eight code of [[lem-explicit-unknot-and-figure-eight-oriented-wirtinger-codes]], with its positive based under-arc meridians $x_1,x_2,x_3,x_4$ and compatible diagram access paths. Put $u=x_1$, $v=x_2$, and $w=uv^{-1}u^{-1}v$. Then $$\pi_1(E_{4_1})=\langle u,v\mid vw=wu\rangle,$$ with $u$ a positive meridian. In this presentation $$X_3=uvu^{-1},\qquad X_4=v^{-1}uvu^{-1}v=w^{-1}v$$ are the old $x_3,x_4$. The preferred longitude based compatibly with $u$ is represented by $$\lambda=X_4u^{-1}vX_3^{-1}.$$ In particular its trace in any representation is the trace of this explicit word. The formula does not identify a zero-homology centralizing word as a longitude without the diagram-parallel calculation.

## Statement references

[[lem-explicit-unknot-and-figure-eight-oriented-wirtinger-codes|Actual oriented four-crossing code]]

[[lem-link-peripheral-longitude-word-from-diagram|Actual based blackboard-parallel and self-writhe correction]]

## Facts & Assumptions

**Given:** The stated oriented figure-eight code, compatible positive based diagram meridians, and the selected initial strand $x_1$.

[A1] [[def-axiom-of-choice]] is retained for the named knot-exterior branch; all new operations are finite.

[F1] [[lem-explicit-unknot-and-figure-eight-oriented-wirtinger-codes]] gives $R_1:x_1x_2=x_3x_1$, $R_2:x_1x_4=x_4x_2$, $R_3:x_3x_2=x_2x_4$, and $R_4:x_3x_4=x_1x_3$. Its full proof shows $R_4$ follows from the first three. Its actual oriented under-arc cycle is $x_1\to x_2$ at $R_2$, $x_2\to x_3$ at $R_1$, $x_3\to x_4$ at $R_3$, $x_4\to x_1$ at $R_4$; the local coordinate charts specify the source and target sides and positive crossing signs.

[F2] [[lem-link-peripheral-longitude-word-from-diagram]] proves that a positive component traversal contributes the over-meridian with exponent $+1$ for source-to-target underpasses and exponent $-1$ for target-to-source. Their ordered product is the based blackboard parallel; multiplying by the initial meridian to minus the self-writhe gives its preferred zero-self-linking longitude.

## Proof

1.1 In [F1] eliminate $x_3$ using $R_1$ to get $X_3=uvu^{-1}$, then eliminate $x_4$ using $R_3$ to get $X_4=v^{-1}X_3v=v^{-1}uvu^{-1}v$. These are eliminations of explicitly defined generators, reversible by substitution, so impose exactly the remaining relation $R_2$; $R_4$ adds none by [F1]. With $w=uv^{-1}u^{-1}v$ the expression is $X_4=w^{-1}v$. Hence $R_2$ reads $uw^{-1}v=w^{-1}v^2$, which after right cancellation of $v$ is $uw^{-1}=w^{-1}v$, equivalently $vw=wu$. This proves the asserted presentation with the original positive meridian $u=x_1$. [F1, given, construct, algebra]

1.2 Start the oriented traversal at $x_1$. The four successive underpasses in [F1] give the table $$(R_2,x_4,+1),\quad(R_1,x_1,-1),\quad(R_3,x_2,+1),\quad(R_4,x_3,-1),$$ listing crossing, over-meridian and source/target exponent. Indeed $R_2,R_3$ go from the lower source side to the upper target side in those actual coordinate charts, while $R_1,R_4$ go from the upper target side to the lower source side. The determinants of their ordered over/under tangents have these same signs: each over-tangent points right and the under-tangent points respectively upwards or downwards. Thus the self-writhe is $1-1+1-1=0$. This checks both the traversal order and the sign instead of deriving a longitude solely from homological exponent zero. [F1, F2, given, construct, algebra]

2.1 By [F2], the based blackboard parallel for that actual code is $x_4x_1^{-1}x_2x_3^{-1}$. The self-writhe correction in step 1.2 is zero, so this very word is the preferred longitude. Substitution from step 1.1 gives $X_4u^{-1}vX_3^{-1}$. The positive component traversal has degree one in its peripheral tube by [F2], and the zero-writhe correction gives zero self-linking; this is the actual preferred peripheral representative with the chosen initial access path. Evaluating it in any representation proves the trace assertion. No other longitude convention or external two-bridge peripheral formula is assumed. [A1, F2, step 1.1, step 1.2, construct, algebra] ∎
