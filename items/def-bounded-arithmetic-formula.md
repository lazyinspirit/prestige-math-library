---
id: def-bounded-arithmetic-formula
kind: definition
title: "Bounded arithmetic formulas"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-natural-numbers, thm-recursion]
verification:
  precheck: n/a
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local definition and direct-prerequisite repair; not independent review"
    delegated_by: owner
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §5.1"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

Work in the first-order language $0,S,+,\cdot,<,=$ over the natural numbers of [[def-natural-numbers]]. A quantifier is **bounded**
when it has the form $\exists u<t(\vec x)$ or $\forall u<t(\vec x)$, where
$t$ is an arithmetic term. A formula is **bounded** when every one of its
quantifiers is bounded.

For the normal-form presentation of the arithmetical hierarchy on this page,
we also permit an arbitrary primitive-recursive predicate $R(\vec x)$ as the quantifier-free matrix. Here the primitive-recursive functions are exactly those obtained by finitely many applications of composition and primitive recursion from zero functions, successor, and coordinate projections. Zero functions of every arity, including the nullary constant $0$, are allowed; the projections are $P_i^k(x_1,\ldots,x_k)=x_i$ for $1\leq i\leq k$. Composition substitutes functions of one common arity into the arguments of another. Primitive recursion takes functions $g$ of arity $k$ and $h$ of arity $k+2$ to $f$ of arity $k+1$ with
$$f(0,\vec x)=g(\vec x),\qquad f(m+1,\vec x)=h(m,f(m,\vec x),\vec x).$$
These clauses define a unique total function: for each fixed $\vec x$, apply [[thm-recursion]] on $\mathbb N^2$ with initial value $(0,g(\vec x))$ and transition $(m,y)\mapsto(m+1,h(m,y,\vec x))$, then take the second coordinate. Uniqueness for each parameter tuple makes this one well-defined function of all its arguments. A predicate is primitive recursive when its characteristic function, taking value $1$ exactly where it holds and $0$ elsewhere, is such a function.

This is an additional presentation convention: it does not assert that every
primitive-recursive predicate is definable by a bounded formula in the bare
first-order language chosen above.

## Remarks

Unbounded quantifiers are the displayed leading quantifiers used to measure an
arithmetical level; bounded quantifiers do not contribute an alternation.
