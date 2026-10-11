---
id: def-quantum-characteristic-of-an-invertible-hecke-parameter
kind: definition
title: "The quantum characteristic of an invertible Hecke parameter"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-generic-type-a-hecke-algebra, def-q-integer-q-factorial-and-q-multinomial, prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Equation (3.26) and the surrounding discussion of the quantum characteristic, printed pp. 26-28, together with Definition 3.35, printed p. 32"
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844; Bull. Amer. Math. Soc. 47 (2010) 419-481; complete 66-page arXiv survey, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 5.3, printed pp. 23-24: the quantum characteristic e and the q-integer closed formula for q of finite order"
---

## Definition

Let $F$ be a field and $q\in F^{\times}$ an invertible element. The **quantum
characteristic** $e=e(F,q)$ is the least integer $e\ge2$ such that
$1+q+\cdots+q^{e-1}=0$ in $F$, and $e:=\infty$ when no such integer exists
([[def-q-integer-q-factorial-and-q-multinomial]],
[[def-generic-type-a-hecke-algebra]]). Since $[1]_q=1\ne0$, the least positive
integer $e$ with $[e]_q=0$, when it exists, automatically satisfies $e\ge2$, so
the two formulations coincide.

Concretely: (i) if $q\ne1$ then $[m]_q=(q^m-1)/(q-1)$ for all $m\ge0$ — indeed
$(q-1)(1+q+\cdots+q^{m-1})=q^m-1$ and $q-1\ne0$ — so $[e]_q=0$ is equivalent
to $q^e=1$, and a finite $e$ exists exactly when $q$ is a root of unity and
then $e$ is the multiplicative order of $q$ in $F^{\times}$ (which is $\ge2$
because $q\ne1$); (ii) if $q=1$ then $[m]_1=m$, so $e=\operatorname{char}(F)$
when $\operatorname{char}(F)>0$ (the characteristic is a prime, hence at least
$2$, and $m\cdot1_F\ne0$ for $1\le m<p$) and $e=\infty$ when
$\operatorname{char}(F)=0$
([[prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra]]).

If $e<\infty$ then $q\ne1$ implies $q^e=1$, and hence $[m+e]_q=[m]_q$ for
every integer $m$: for $m\ge0$ the sum splits as
$$[m+e]_q=[m]_q+q^m[e]_q,$$
so $[m+e]_q=[m]_q$ whenever $[e]_q=0$; for the remaining $m<0$ one extends the
closed formula by $[m]_q:=(q^m-1)/(q-1)$ when $q\ne1$ and reads $[m]_1:=m\in F$
for the canonical image of the integer $m$ when $q=1$, in which case
$e=\operatorname{char}(F)$ and $[m+e]_1=m+e=m$ in $F$. In particular the
quantum characteristic, not merely the multiplicative order, is the parameter
governing the modular representation theory of the Hecke algebra. No choice
principle is used.
