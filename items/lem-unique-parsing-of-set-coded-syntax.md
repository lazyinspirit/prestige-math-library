---
id: lem-unique-parsing-of-set-coded-syntax
kind: lemma
title: "Unique parsing of finite syntax"
status: draft
origin: pipeline
deps: ["def-set-coded-terms-and-formulas", "thm-strong-induction"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 1B.4\u20131B.5 and x1.1\u2013x1.2, pp.6,48."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Statement

Every term and every formula in the delimited coding has exactly one outer constructor, with uniquely determined symbol fields and immediate subexpressions. Each immediate subexpression is shorter than its parent.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Use the following fully delimited words over $W_L$. A leaf term is $(\mathsf{var},v_i)$ or $(\mathsf{const},c)$. A composite term is $(\mathsf{fun},f,t_1,\ldots,t_n)$ with $a(f)=n$. Atomic formulas are $(\mathsf{eq},s,t)$ and $(\mathsf{rel},R,t_1,\ldots,t_n)$, with $a(R)=n$. Formula constructors are $(\mathsf{neg},\phi)$, $(\mathsf{and},\phi,\psi)$ and $(\mathsf{exists},v_i,\phi)$. Parentheses and commas in these displays are actual punctuation tokens; the tag and symbol fields are single tokens, and subexpression fields are entire words. Formally, start with the leaf terms and no formulas, repeatedly add all licensed constructors to the current pair of subsets of $W_L$, and take the two unions over $\omega$. The one-stage map is a function on the set $\mathcal P(W_L)^2$, so natural recursion applies. Each finite list of arguments appears by a common finite stage; hence the union is closed. Induction on stages puts it inside any constructor-closed pair containing the leaves. These are the least term and formula sets, denoted $\operatorname{Term}_L$ and $\operatorname{Form}_L$. We print the familiar abbreviations $f(t_1,\ldots,t_n)$, $s=t$, $R(t_1,\ldots,t_n)$, $\neg\phi$, $\phi\land\psi$ and $\exists v_i\phi$. Define $\phi\lor\psi:=\neg(\neg\phi\land\neg\psi)$, $\phi\to\psi:=\neg(\phi\land\neg\psi)$ and $\forall v_i\phi:=\neg\exists v_i\neg\phi$. In the pure membership signature there is just one binary relation symbol $\in$ and every term is a variable. Conventions and prerequisites: def-set-signature-and-finite-syntax-strings, thm-recursion. ([[def-set-coded-terms-and-formulas]])

[F2] Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.) ([[thm-strong-induction]])

## Proof

1.1 Induct on construction stages to verify that every expression starts with an opening parenthesis, ends with its matching closing parenthesis, and has positive parenthesis balance at every nonempty proper prefix. A parent contributes one to the balance while its child words each have nonnegative balance and total balance zero; leaf interiors have no parentheses. Thus these assertions hold for leaves and are preserved by all constructors. [F1]

2.1 For a word known to be an expression, the second token is its unique constructor tag. Scan from its opening parenthesis: commas at balance one separate exactly its outer fields, because child interiors have balance at least two. The first return to balance zero is the end of the expression. These boundaries depend only on the word, not on a proposed construction. [step 1.1, F1]

3.1 The tag prescribes the sorts of the fields, and any function or relation symbol prescribes their number through its arity. The scan therefore recovers every child word uniquely. Existence follows from membership in the constructor closure. Every child omits at least the outer opening, tag and closing tokens, so is shorter; strong induction on length also recovers all descendant parses. [step 2.1, F2] ∎

