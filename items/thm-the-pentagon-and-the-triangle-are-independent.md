---
id: thm-the-pentagon-and-the-triangle-are-independent
kind: theorem
title: "The pentagon axiom and the triangle axiom are independent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-monoidal-category]
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.1, Exercise 6"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Statement

Neither the pentagon axiom nor the triangle axiom follows from the other.

## Facts & Assumptions

**Given:** The one-object category $\mathcal Z$ with
$\operatorname{End}_{\mathcal Z}(*)=\mathbb Z$, composition $m\circ n=m+n$, and
tensor on morphisms $m\otimes n=m+n$.

[L1] A monoidal category consists of a bifunctor, a unit object, natural isomorphisms $\alpha,\lambda,\rho$, and exactly the pentagon and triangle equations from [[def-monoidal-category]].

## Proof

**Proof technique:** direct.

1.1 In $\mathcal Z$, every integer is invertible for composition, so any chosen integers can serve as the components of $\alpha,\lambda,\rho$. The tensor prescription is a bifunctor because $((m'\otimes n')\circ(m\otimes n))=(m'+n')+(m+n)=(m'+m)+(n'+n)=((m'\circ m)\otimes(n'\circ n))$. Thus only the pentagon and triangle equations need to be checked. [given, L1]

2.1 First choose $\alpha=0$, $\lambda=1$, and $\rho=0$. Then the pentagon reads $0+0=0+0+0$, so it holds, while the triangle becomes $0+1=0$, namely $1=0$, so it fails. Hence the pentagon does not imply the triangle. [step 1.1, L1, algebra]

2.2 Now choose $\alpha=1$, $\lambda=0$, and $\rho=1$. Then the triangle reads $1+0=1$, so it holds, while the pentagon becomes $1+1=1+1+1$, namely $2=3$, so it fails. Hence the triangle does not imply the pentagon. [step 1.1, L1, algebra]

3.1 The two witnesses prove that neither axiom is a consequence of the other. [step 2.1, step 2.2] ∎
