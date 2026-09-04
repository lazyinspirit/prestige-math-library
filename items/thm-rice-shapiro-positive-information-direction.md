---
id: thm-rice-shapiro-positive-information-direction
kind: theorem
title: "Recognizable extensional properties are positively witnessed by finite information"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-index-set-and-extensional-machine-property, def-effective-encoding-of-turing-machines, def-turing-machine-acceptance-problem, thm-machine-acceptance-is-recognizable, thm-machine-acceptance-is-undecidable, thm-decidable-iff-language-and-complement-are-recognizable]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. G. Rice, Classes of Recursively Enumerable Sets and Their Decision Problems"
      url: "https://www.scribd.com/document/692967974/S0002-9947-1953-0053041-6"
    - title: "Kevin Kelly, Many-one Reduction"
      url: "https://www.andrew.cmu.edu/user/kk3n/recursionclass/8reduction.html"
---

## Statement

Let $\mathcal P$ be an extensional property of recognizable languages, and
assume that its index set $I_{\mathcal P}$ is recognizable. If
$A\in\mathcal P$ is recognizable, then there exists a finite set
$F\subseteq A$ such that every recognizable language $B$ with $F\subseteq B$
also belongs to $\mathcal P$.

## Facts & Assumptions

**Given:** An extensional property $\mathcal P$ with recognizable index set, and a recognizable language $A\in\mathcal P$.

[L1] By [[def-index-set-and-extensional-machine-property]], membership in $\mathcal P$ depends only on the recognized language, so the property can be viewed through any recognizable presentation of the same language.

[L2] The language $A_{TM}$ is recognizable but undecidable, by [[thm-machine-acceptance-is-recognizable]] and [[thm-machine-acceptance-is-undecidable]]. A language is decidable if and only if it and its complement are both recognizable, by [[thm-decidable-iff-language-and-complement-are-recognizable]].

[L3] Machine descriptions have a fixed effective coding, and $A_{TM}$ contains exactly the codes of accepting machine-input pairs, by [[def-effective-encoding-of-turing-machines]] and [[def-turing-machine-acceptance-problem]].

## Proof

**Proof technique:** direct.

1.1 By [L2], $\overline{A_{TM}}$ is not recognizable: otherwise both $A_{TM}$ and its complement would be recognizable and hence $A_{TM}$ would be decidable. [L2]

1.2 Choose a recognizer for $A$, and let $\Sigma$ be its finite input alphabet. Dovetail the recognizer on the words of $\Sigma^*$ in a fixed length-lexicographic order, outputting each newly accepted word once. This gives an effective enumeration of $A$ by finite stages $F_0\subseteq F_1\subseteq\cdots$ with $\bigcup_sF_s=A$. [given, construct]

2.1 Suppose for contradiction that no finite subset of $A$ belongs to $\mathcal P$. For each binary word $x$, effectively construct a recognizer $N_x$ that, on its own input $y$, simulates the stage enumeration from step 1.2 and the recognizer for $A_{TM}$ on $x$ in lockstep. It accepts if $y$ appears in the stage enumeration before the latter recognizer accepts, and otherwise continues forever. The coding in [L3] makes $x\mapsto\ulcorner N_x\urcorner$ total and computable. If $x\notin A_{TM}$ then $L(N_x)=A\in\mathcal P$; if $x\in A_{TM}$ then $L(N_x)=F_s\notin\mathcal P$ for the finite stage $s$ at which that simulation stops admitting new words. [L1, L2, L3, step 1.2, assume-contra, construct]

3.1 A recognizer for $I_{\mathcal P}$ could therefore recognize $\overline{A_{TM}}$: on input $x$, compute $\ulcorner N_x\urcorner$ and run the index-set recognizer on it. This contradicts step 1.1. Hence there is a finite set $F\subseteq A$ with $F\in\mathcal P$. [step 1.1, step 2.1, contradiction, discharge-contradiction: the assumed absence of a finite witness would recognize the complement of A_TM]

4.1 Let $B$ be recognizable with $F\subseteq B$, and suppose for contradiction that $B\notin\mathcal P$. For each binary word $x$, effectively build a recognizer $K_x$ that accepts every word of $F$ and, if the recognizer for $A_{TM}$ accepts $x$, also simulates a fixed recognizer for $B$. Then $x\notin A_{TM}$ gives $L(K_x)=F\in\mathcal P$, while $x\in A_{TM}$ gives $L(K_x)=F\cup B=B\notin\mathcal P$. As in step 3.1, the total computable map $x\mapsto\ulcorner K_x\urcorner$ and the recognizer for $I_{\mathcal P}$ would recognize $\overline{A_{TM}}$, contradicting step 1.1. Therefore every such $B$ belongs to $\mathcal P$, and $F$ is the required finite positive witness. [L1, L2, L3, step 1.1, step 3.1, assume-contra, construct, discharge-contradiction: an extension outside the property would recognize the complement of A_TM] ∎
