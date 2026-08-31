---
id: thm-domains-and-ranges-of-partial-computable-functions-are-ce
kind: theorem
title: "Domains and ranges of partial computable functions are computably enumerable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-computable-and-partial-computable-function, def-computably-enumerable-set, def-dovetailing-schedule, lem-dovetailing-reaches-every-finite-stage, thm-recognizable-iff-enumerable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 18: Further discussion of computability"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf"
---

## Statement

Let $f:D\to Y$ be a partial computable function on effectively encoded sets
$X$ and $Y$, and assume that the chosen total decoder for the input encoding of
$X$ is itself computable. Then its domain $D\subseteq X$ and its range
$f[D]\subseteq Y$ are computably enumerable.

## Facts & Assumptions

**Given:** A partial computable function $f:D\to Y$ on effectively encoded sets $X$ and $Y$, together with a computable total decoder for the chosen input encoding of $X$.

[L1] By [[def-computable-and-partial-computable-function]], some machine computes $f$, halting exactly on the inputs in $D$ and outputting the correct value there.

[L2] By [[thm-recognizable-iff-enumerable]], it is enough to build recognizers for the binary code languages of the domain and range.

[L3] By [[lem-dovetailing-reaches-every-finite-stage]], the stage-sum schedule eventually reaches every finite simulation stage of every candidate input.

## Proof

**Proof technique:** direct.

1.1 Let $E_D:=\{e_X(x):x\in D\}\subseteq\{0,1\}^*$. On an input word $z\in\{0,1\}^*$, run the computable decoder from the given data for the input encoding of $X$. If $z$ is malformed, diverge forever. If $z=e_X(x)$ is valid, simulate the machine from [L1] on the same word $z$ and accept exactly when that simulation halts. This recognizes exactly the binary language $E_D$, so [L2] makes $E_D$ computably enumerable. Since $E_D$ consists exactly of the codes of elements of $D$, the same enumeration viewed through the fixed encoding $e_X$ witnesses that $D$ is computably enumerable as a subset of $X$. [L1, L2, given, construct]

1.2 Let $E_R:=\{e_Y(y):y\in f[D]\}\subseteq\{0,1\}^*$. On an input word $z\in\{0,1\}^*$, dovetail the following branches over all binary words $w$ in shortlex order: first run the computable decoder for the input encoding of $X$ on $w$, and discard the branch if $w$ is malformed; otherwise simulate the machine from [L1] on $w$. Accept as soon as some valid input code halts with output $z$. If $z=e_Y(f(x))$ for some $x\in D$, then [L3] ensures that the halting computation on the valid code $e_X(x)$ is eventually reached, so the recognizer accepts. If $z\notin E_R$, no valid branch can witness acceptance. Thus $E_R$ is recognizable, [L2] makes it computably enumerable as a binary language, and therefore $f[D]$ is computably enumerable as a subset of $Y$. [L1, L2, L3, construct]

2.1 Therefore both the domain and the range of a partial computable function are computably enumerable. [step 1.1, step 1.2] ∎
