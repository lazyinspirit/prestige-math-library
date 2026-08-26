---
id: ex-hilbert-90-and-pythagorean-triples
kind: example
title: "Hilbert 90 for $\\mathbb Q(i)/\\mathbb Q$ recovers the rational parametrization of the unit circle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hilberts-theorem-90]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Exercise 5-2"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "S. R. Ghorpade, Lectures on Field Theory and Ramification Theory, Section 1.3"
      url: "https://web.archive.org/web/20100705005645if_/http://www.math.iitb.ac.in:80/~srg/Lecnotes/isant.pdf"
pipeline_run: null
---

## Example

Let $K=\mathbb Q(i)$ over $\mathbb Q$, with Galois generator
$\sigma(a+bi)=a-bi$. Then every rational point $(x,y)$ on

$$x^2+y^2=1$$

with $x\ne-1$ has the form

$$x=\frac{1-t^2}{1+t^2},\qquad y=\frac{2t}{1+t^2}$$

for some $t\in\mathbb Q$. Equivalently, every primitive Pythagorean triple is
obtained from this parametrization after clearing denominators.

## Facts & Assumptions
**Given:** The quadratic extension $K/\mathbb Q$ and its nontrivial automorphism $\sigma(a+bi)=a-bi$.

[L1] In a finite cyclic extension, norm one is equivalent to being of the form $\beta/\sigma(\beta)$ ([[thm-hilberts-theorem-90]]).

## Verification

**Proof technique:** direct.

1.1 If $(x,y)\in\mathbb Q^2$ satisfies $x^2+y^2=1$, then $\alpha=x+yi\in K^\times$ has norm one. By [L1], there is $\beta=u+vi\in K^\times$ with $$x+yi=\frac{\beta}{\sigma(\beta)}=\frac{u+vi}{u-vi}=\frac{(u+vi)^2}{u^2+v^2}=\frac{u^2-v^2}{u^2+v^2}+\frac{2uv}{u^2+v^2}i.$$ If $u=0$ then $x=-1$, excluded in the statement. So with $t=v/u\in\mathbb Q$ one gets $$x=\frac{1-t^2}{1+t^2},\qquad y=\frac{2t}{1+t^2}.$$ [L1, algebra]

2.1 Conversely, every rational $t$ gives $$\left(\frac{1-t^2}{1+t^2}\right)^2+\left(\frac{2t}{1+t^2}\right)^2=1,$$ so the displayed formula indeed parametrizes rational points on the unit circle. Clearing denominators gives the classical Pythagorean triple formulas. [step 1.1, algebra] ∎
