---
id: fs-the-pumping-lemma-characterizes-regular-languages
kind: false-statement
title: "FALSE: the pumping lemma characterizes the regular languages"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-pumping-lemma-for-regular-languages, cor-distinguishable-prefix-nonregularity-criterion]
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
    - title: "Eric Blais, Models of Computation, 20. Nonregular Languages"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

If a language satisfies the regular pumping property, then it is regular.

## Facts & Assumptions

**Given:** The language $$ G:=\{ww^Rv:w,v\in\{0,1\}^+,\ w\neq\varepsilon\}. $$

[L2] By [[cor-distinguishable-prefix-nonregularity-criterion]], a language with infinitely many pairwise distinguishable prefixes is not regular.

## Refutation

**Proof technique:** direct.

1.1 The language $G$ satisfies the pumping conclusion with pumping length $4$. If $s=ww^Rv\in G$ with $|w|\geq 2$, write $w=au$ with $u\neq\varepsilon$ and choose $x=\varepsilon$, $y=a$, $z=uu^Rav$; then $xz=uu^Rav\in G$, the original word is $xyz\in G$, and for every $i\geq 2$ the word $xy^iz=a^iuu^Rav$ lies in $G$ by using the one-letter witness word $a$ and the nonempty suffix $a^{i-2}uu^Rav$. [given, construct]

1.2 For each $n\geq 1$, let $p_n:=(01)^n$ and $x_n:=(10)^n1$. Then $p_nx_n=(01)^n(10)^n1$ lies in $G$ by taking witness word $(01)^n$ and suffix $1$. If $m>n$ and $p_mx_n$ were in $G$, write $p_mx_n=rr^Rv$ with $r\neq\varepsilon$ and $v\in\{0,1\}^+$. The word $p_mx_n=(01)^m(10)^n1$ has exactly one doubled adjacent pair, namely the middle `11` at the junction between $(01)^m$ and $(10)^n1$. Any prefix of the form $rr^R$ has a doubled middle pair at the boundary between $r$ and $r^R$, so that boundary must be this unique `11`. Hence $|r|=2m$, which makes the palindromic prefix $rr^R$ have length $4m$. But $|p_mx_n|=2m+2n+1<4m+1$ because $n<m$, so no such factorization with nonempty $v$ exists. Therefore $p_mx_n\notin G$, and the prefixes $p_n$ are pairwise distinguishable. [L2, given]

2.1 If instead $|w|=1$, then $s=aav$ with $|v|\geq 2$ because $|s|\geq 4$; writing $v=bt$ and choosing $x=aa$, $y=b$, $z=t$ pumps entirely inside the nonempty suffix $v$, so every $xy^iz$ stays in $G$. Thus every sufficiently long word in $G$ has a legal pumping decomposition. [step 1.1, given]

3.1 Step 1.2 and [L2] show that $G$ is not regular, while steps 1.1 and 2.1 show that $G$ still has the regular pumping property. Therefore the pumping property does not characterize regularity, and the statement is false. [L2, step 1.1, step 2.1, step 1.2] ∎
