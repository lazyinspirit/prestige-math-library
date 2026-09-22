---
id: def-numerical-range-and-numerical-radius
kind: definition
title: Numerical range and numerical radius
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-space, thm-cauchy-schwarz-in-an-inner-product-space, def-operator-norm, def-real-and-complex-inner-product-space]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Joel H. Shapiro, Notes on the Numerical Range, §3, PDF pp.9–11"
      url: "https://www.joelshapiro.org/Pubvit/Downloads/NumRangeNotes/numrange_notes.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Definition

Let $H$ be a nonzero complex Hilbert space and let $T\in\mathcal B(H)$ be a bounded linear operator ([[def-hilbert-space]], [[def-operator-norm]]). The **numerical range** of $T$ is the set of values of its quadratic form on the unit sphere,

$$W(T):=\{\,\langle Tx,x\rangle:\ x\in H,\ \|x\|=1\,\}\subseteq\mathbb C,$$

and the **numerical radius** of $T$ is

$$w(T):=\sup\{\,|z|:z\in W(T)\,\}.$$

**Well-definedness.** The unit sphere of a nonzero Hilbert space is nonempty, so $W(T)\ne\varnothing$. For $\|x\|=1$ Cauchy–Schwarz gives $|\langle Tx,x\rangle|\le\|Tx\|\,\|x\|\le\|T\|$, so $W(T)$ is a nonempty subset of the closed disc of radius $\|T\|$ and the supremum $w(T)$ is a real number satisfying $0\le w(T)\le\|T\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]). The pairing is linear in its first variable and conjugate-linear in its second, so $W(T)$ is the image of the unit sphere under a continuous map, but no closedness is claimed or used here.

**The zero space and the zero operator.** On the zero Hilbert space the unit sphere is empty; by convention $W(0):=\{0\}$ and $w(0):=0$ there, so that the numerical radius of the zero operator is $0$ in every dimension. On a nonzero space the zero operator has $W(0)=\{0\}$ and $w(0)=0$ directly from the definition ([[def-real-and-complex-inner-product-space]] for the pairing convention, which is linear in the first variable throughout this page).

**Two elementary facts used later.** Since $W(\lambda T)=\lambda W(T)$ for scalars $\lambda$, one has $w(\lambda T)=|\lambda|\,w(T)$; and $|z|\le\|T\|$ for every $z\in W(T)$, so $w(T)\le\|T\|$ always. Neither definiteness nor the triangle inequality for $w$ is asserted at this point: they are proved on the next page, together with the equality $w(T)=\|T\|$ for normal $T$.
