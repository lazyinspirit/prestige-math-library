---
id: ex-trace-vanishes-on-a-purely-inseparable-extension
kind: example
title: "For $\\mathbb F_p(t)/\\mathbb F_p(t^p)$, the trace is identically zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-rational-function-field-as-a-fraction-field, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-field-norm-and-trace-by-embeddings]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "B. Conrad, Norm and trace, Section 2"
      url: "https://virtualmath1.stanford.edu/~conrad/248APage/handouts/normtrace.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Remark 5.47"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Example

Let $F=\mathbb F_p(t^p)$ and $K=\mathbb F_p(t)$. Then $K/F$ is purely
inseparable of degree $p$, its only $F$-embedding into an algebraic closure is
the inclusion, and

$$\operatorname{Tr}_{K/F}(x)=0\qquad\text{for every }x\in K.$$

In particular,

$$N_{K/F}(t)=t^p,\qquad \operatorname{Tr}_{K/F}(t)=0.$$

## Facts & Assumptions

**Given:** The fields $F=\mathbb F_p(t^p)$ and $K=\mathbb F_p(t)$.

[L1] Rational function fields are fraction fields of polynomial rings ([[cor-rational-function-field-as-a-fraction-field]]).

[L2] If a constant is not a $p$-th power, then $x^p-a$ is irreducible ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L3] A simple algebraic extension has degree equal to the degree of the minimal polynomial of its generator ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L4] In a finite extension, norm and trace are given by the embedding formulas with the inseparable exponent, and the trace vanishes when that exponent is greater than one ([[thm-field-norm-and-trace-by-embeddings]]).

## Verification

**Proof technique:** direct.

1.1 If $t\in F$, then one could write $t=u(t^p)/v(t^p)$ with coprime polynomials $u,v\in\mathbb F_p[s]$. Clearing denominators gives the polynomial identity $$t\,v(t^p)-u(t^p)=0.$$ But the first term has degree congruent to $1$ modulo $p$, while every term of $u(t^p)$ has degree divisible by $p$, impossible. Hence $t\notin F$. [L1, algebra]

2.1 Since $t^p\in F$ and $t\notin F$, the polynomial $x^p-t^p$ is irreducible over $F$ by [L2]. Therefore $K=F(t)$ has degree $p$ over $F$ by [L3], and it is purely inseparable because $t^p\in F$. The only $F$-embedding of $K$ into an algebraic closure is the inclusion. [step 1.1, L2, L3, algebra]

3.1 Now [L4] gives $$N_{K/F}(t)=t^p,\qquad \operatorname{Tr}_{K/F}(t)=p\,t=0,$$ and the same embedding formula shows $\operatorname{Tr}_{K/F}(x)=0$ for every $x\in K$. [step 2.1, L4, algebra] ∎
