---
id: def-serial-relation-dependent-choice-principle-over-zf
kind: definition
title: "The serial-relation Dependent Choice principle over ZF"
status: draft
origin: pipeline
deps: [def-relation-domain-range-and-field, def-function, def-natural-numbers]
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Miller, Lecture notes on set theory without choice; Definition 5.1, p.10"
      url: https://people.math.wisc.edu/~awmille1/old/m873-08/ac.pdf
    - title: "Karagila, Zornian Functional Analysis, Definition 4 and Chapter 2, pp. 4–5, 8–11"
      url: https://karagila.org/wp-content/uploads/2016/10/axiom-of-choice-in-analysis.pdf
---

## Definition

Work in ZF. Write $\omega=\{0,1,2,\ldots\}$ as in [[def-natural-numbers]].
A relation $R\subseteq A\times A$ is **serial on $A$** when
$ (\forall a\in A)(\exists b\in A)\ a\,R\,b $, where $a\,R\,b$ means
$(a,b)\in R$ ([[def-relation-domain-range-and-field]]).

**Dependent Choice (DC)** is the following global principle: for every
**nonempty** set $A$ and every serial relation $R$ on $A$, there is a function
$f:\omega\to A$ such that $f(n)\,R\,f(n+1)$ for every $n\in\omega$.
Here function has its ordinary set-theoretic meaning [[def-function]].

The **prescribed-start form** asks, for each such $A,R$ and each $a_0\in A$,
for such an $f$ with $f(0)=a_0$. The equivalence of these global principles
requires a proof; it is not part of the definition.

Neither form requires distinct values, an irreflexive relation, or transitivity.
On a singleton $A=\{a\}$, seriality forces $a\,R\,a$ and the constant map
satisfies the requirement. The empty carrier is excluded: it has a vacuously
serial relation but admits no map from $\omega$.

## Remarks

The nonempty qualification is explicit in Karagila, Definition 4, printed p.4.
Miller, Definition 5.1, printed p.10, supplies the starting-point-free formula
but omits that necessary qualification in its displayed wording.
