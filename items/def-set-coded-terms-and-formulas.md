---
id: def-set-coded-terms-and-formulas
kind: definition
title: "Terms and formulas as finite set codes"
status: draft
origin: pipeline
deps: ["def-set-signature-and-finite-syntax-strings", "thm-recursion"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 1B.3; Appendix app3, pp.2\u20133."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Definition

Use the following fully delimited words over $W_L$. A leaf term is $(\mathsf{var},v_i)$ or $(\mathsf{const},c)$. A composite term is $(\mathsf{fun},f,t_1,\ldots,t_n)$ with $a(f)=n$. Atomic formulas are $(\mathsf{eq},s,t)$ and $(\mathsf{rel},R,t_1,\ldots,t_n)$, with $a(R)=n$. Formula constructors are $(\mathsf{neg},\phi)$, $(\mathsf{and},\phi,\psi)$ and $(\mathsf{exists},v_i,\phi)$. Parentheses and commas in these displays are actual punctuation tokens; the tag and symbol fields are single tokens, and subexpression fields are entire words.

Formally, start with the leaf terms and no formulas, repeatedly add all licensed constructors to the current pair of subsets of $W_L$, and take the two unions over $\omega$. The one-stage map is a function on the set $\mathcal P(W_L)^2$, so natural recursion applies. Each finite list of arguments appears by a common finite stage; hence the union is closed. Induction on stages puts it inside any constructor-closed pair containing the leaves. These are the least term and formula sets, denoted $\operatorname{Term}_L$ and $\operatorname{Form}_L$.

We print the familiar abbreviations $f(t_1,\ldots,t_n)$, $s=t$, $R(t_1,\ldots,t_n)$, $\neg\phi$, $\phi\land\psi$ and $\exists v_i\phi$. Define $\phi\lor\psi:=\neg(\neg\phi\land\neg\psi)$, $\phi\to\psi:=\neg(\phi\land\neg\psi)$ and $\forall v_i\phi:=\neg\exists v_i\neg\phi$. In the pure membership signature there is just one binary relation symbol $\in$ and every term is a variable.

Conventions and prerequisites: [[def-set-signature-and-finite-syntax-strings]], [[thm-recursion]].
