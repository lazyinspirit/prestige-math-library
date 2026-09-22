---
id: def-hilbert-space-adjoint
kind: definition
title: The Hilbert-space adjoint of a bounded operator
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-riesz-representation-for-hilbert-space, def-transpose-of-a-bounded-operator, def-space-of-bounded-linear-operators, def-bounded-linear-operator, thm-cauchy-schwarz-in-an-inner-product-space, def-operator-norm, def-real-and-complex-inner-product-space, def-countable-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Definition 5.36, p.237"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Theorem 185"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Definition

Assume the Axiom of Countable Choice. Let $H$ and $K$ be real or complex Hilbert spaces and let $T\in\mathcal B(H,K)$ be a bounded linear operator ([[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]]). For fixed $y\in K$ the map

$$x\longmapsto\langle Tx,y\rangle_K$$

is a bounded linear functional on $H$: it is linear in $x$ because $T$ is linear and the pairing is linear in its first argument, and $|\langle Tx,y\rangle_K|\le\|Tx\|\,\|y\|\le\|T\|\,\|x\|\,\|y\|$ by Cauchy–Schwarz and the operator-norm inequality ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-operator-norm]]). By Riesz representation ([[thm-riesz-representation-for-hilbert-space]]) there is therefore a unique vector $T^*y\in H$ with

$$\langle Tx,y\rangle_K=\langle x,T^*y\rangle_H\qquad\text{for every }x\in H .$$

The **Hilbert adjoint** of $T$ is the map

$$T^*:K\longrightarrow H,\qquad y\longmapsto T^*y .$$

It is the unique map $K\to H$ satisfying the displayed identity, since two such maps have $\langle x,(T^*_1-T^*_2)y\rangle=0$ for all $x$ and hence $(T^*_1-T^*_2)y=0$ by positive definiteness.

**The dictionary with the Banach transpose.** Write $R_H:H\to H^*$ and $R_K:K\to K^*$ for the Riesz maps $R_H(x)=\langle\,\cdot\,,x\rangle_H$ and $R_K(y)=\langle\,\cdot\,,y\rangle_K$, and let $T'\in\mathcal B(K^*,H^*)$ be the transpose of $T$, $(T'g)(x)=g(Tx)$ ([[def-transpose-of-a-bounded-operator]]). Then for all $y\in K$ and $x\in H$,

$$\bigl(R_H(T^*y)\bigr)(x)=\langle x,T^*y\rangle_H=\langle Tx,y\rangle_K=(R_Ky)(Tx)=\bigl(T'(R_Ky)\bigr)(x),$$

so $R_H\,T^*=T'\,R_K$. The Hilbert adjoint is thus the Banach transpose conjugated by the Riesz identifications of $H$ and $K$ with their duals; it is a different operator from $T'$ whenever the Riesz maps are conjugate-linear.
