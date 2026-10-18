---
id: def-a-infinity-morphism
kind: definition
title: "A∞-morphism and quasi-isomorphism"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-a-infinity-algebra
  - def-koszul-sign-rule-for-graded-tensors
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §3.4"
      url: "https://arxiv.org/pdf/math/9910179v2"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §§10.2.1–10.2.2"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Definition

Let $A$ and $B$ be uncurved cohomological A∞-algebras in the convention of
[[def-a-infinity-algebra]]. An **A∞-morphism** $f:A\to B$ is a family of
homogeneous maps

$$f_n:A^{\otimes_k n}\longrightarrow B,\qquad |f_n|=1-n,\qquad n\ge1,$$

such that, for every $n\ge1$, the following equality of maps
$A^{\otimes_k n}\to B$ holds:

$$\sum_{\substack{r,s,t\ge0,\ s\ge1\\r+s+t=n}} (-1)^{r+st}f_{r+1+t}(1^{\otimes r}\otimes m_s^A\otimes1^{\otimes t}) =\sum_{q=1}^{n}\ \sum_{\substack{i_1+\cdots+i_q=n\\i_j\ge1}} (-1)^{\eta(i_1,\ldots,i_q)} m_q^B(f_{i_1}\otimes\cdots\otimes f_{i_q}),$$

where
$\eta(i_1,\ldots,i_q)=\sum_{j=1}^{q-1}(q-j)(i_j-1)$ and all tensor maps
use [[def-koszul-sign-rule-for-graded-tensors]]. The identity at $n=1$ says
that $f_1$ is a cochain map from $(A,m_1^A)$ to $(B,m_1^B)$.

An A∞-morphism is an **A∞ quasi-isomorphism** if $f_1$ induces an isomorphism
on cohomology, where
$H^j(A,m_1^A)=\ker(m_1^A:A^j\to A^{j+1})/\operatorname{im}(m_1^A:A^{j-1}\to A^j)$
and likewise for $B$. This definition imposes no unit condition on $f$.
