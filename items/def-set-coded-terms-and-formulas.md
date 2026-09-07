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

For an alphabet token $x$, let $[x]$ denote the one-letter word. If each
$u_i$ is either a token or a word, define the fully delimited serialization

$$\operatorname{enc}(u_0,\ldots,u_{k-1})=[\mathtt{(}]\mathbin{{}^\frown}\bar u_0\mathbin{{}^\frown}[\mathtt{,}]\mathbin{{}^\frown}\cdots\mathbin{{}^\frown}[\mathtt{,}]\mathbin{{}^\frown}\bar u_{k-1}\mathbin{{}^\frown}[\mathtt{)}],$$

where $\bar u_i=[u_i]$ for a token field and $\bar u_i=u_i$ for a word
field. Concatenation is the set function defined in
[[def-set-signature-and-finite-syntax-strings]], so every displayed constructor
below is an actual member of $W_L$.

A leaf term is $\operatorname{enc}(\mathsf{var},v_i)$ or
$\operatorname{enc}(\mathsf{const},c)$. A composite term is
$\operatorname{enc}(\mathsf{fun},f,t_1,\ldots,t_n)$ with $a(f)=n$. Atomic
formulas are $\operatorname{enc}(\mathsf{eq},s,t)$ and
$\operatorname{enc}(\mathsf{rel},R,t_1,\ldots,t_n)$ with $a(R)=n$. Formula
constructors are $\operatorname{enc}(\mathsf{neg},\phi)$,
$\operatorname{enc}(\mathsf{and},\phi,\psi)$, and
$\operatorname{enc}(\mathsf{exists},v_i,\phi)$. The punctuation, tag, and
symbol fields are tokens; an immediate subexpression field is inserted by
concatenating its complete word.

Formally, start with the leaf terms and no formulas, repeatedly apply these
serialization maps to the current pair of subsets of $W_L$, and take the two
unions over $\omega$. The one-stage map is a function on the set
$\mathcal P(W_L)^2$, so natural recursion applies. Each finite list of arguments
appears by a common finite stage; hence the union is closed. Induction on stages
puts it inside any constructor-closed pair containing the leaves. These are the
least term and formula sets, denoted $\operatorname{Term}_L$ and
$\operatorname{Form}_L$.

We print the familiar abbreviations $f(t_1,\ldots,t_n)$, $s=t$, $R(t_1,\ldots,t_n)$, $\neg\phi$, $\phi\land\psi$ and $\exists v_i\phi$. Define $\phi\lor\psi:=\neg(\neg\phi\land\neg\psi)$, $\phi\to\psi:=\neg(\phi\land\neg\psi)$ and $\forall v_i\phi:=\neg\exists v_i\neg\phi$. In the pure membership signature there is just one binary relation symbol $\in$ and every term is a variable.

Conventions and prerequisites: [[def-set-signature-and-finite-syntax-strings]], [[thm-recursion]].
