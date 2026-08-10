---
id: cex-distinct-polynomials-can-induce-the-same-finite-field-function
kind: counterexample
title: 'Over F_p, x^p-x and the zero polynomial induce the same function but are distinct polynomials'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-evaluation-and-root, thm-fermats-little-theorem, prop-integers-modulo-n-as-a-quotient-ring, def-prime, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Section 22, polynomial functions'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement refuted

Two formal polynomials over a field are equal whenever they induce the same function on that field.

## Facts & Assumptions

**Given:** A prime $p$, the field $\mathbb F_p=\mathbb Z/p$, and the polynomials $f=x^p-x$ and $0$ in $\mathbb F_p[x]$.

[L1] Evaluation substitutes an element into a formal polynomial, while the formal polynomial itself is its coefficient sequence ([[def-polynomial-evaluation-and-root]]).

[L2] Fermat's little theorem gives $a^p\equiv a\pmod p$ for every integer $a$ ([[thm-fermats-little-theorem]]).

[L3] The ring $\mathbb Z/p$ is the quotient $\mathbb Z/p\mathbb Z$ ([[prop-integers-modulo-n-as-a-quotient-ring]]).

[L4] A prime integer is greater than $1$ ([[def-prime]]).

[L5] For prime $p$, the quotient ring $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

## Counterexample

**Proof technique:** direct.

1.1 Fact [L5] licenses the field $\mathbb F_p=\mathbb Z/p$. For every $a\in\mathbb F_p$, choose an integer representative; [L2] and [L3] give $f(a)=a^p-a=0$, so $f$ and the zero polynomial induce the same function. [given, L1, L2, L3, L5]

2.1 Because [L4] gives $p>1$, the degrees $p$ and $1$ are distinct; as a coefficient sequence, $f$ has coefficient $1$ in degree $p$ and is therefore nonzero. Hence [L1] distinguishes $f$ from the zero formal polynomial and refutes the statement. [given, L1, L3, L4] ∎
