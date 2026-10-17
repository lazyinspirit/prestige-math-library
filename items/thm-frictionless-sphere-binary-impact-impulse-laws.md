---
id: thm-frictionless-sphere-binary-impact-impulse-laws
kind: theorem
title: Impulse, momentum, and kinetic-energy laws for an isolated frictionless sphere impact
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
axiom_use: No choice axiom is used; all operations are finite-dimensional algebra.
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 1.1.1, pp. 2–3; single-contact restitution convention; the multi-sphere extension is derived locally here.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 12, slides 158–161; inner-product subgradient and normal-cone conventions.
---

## Statement

Let two spheres of radii $r_1,r_2>0$ and masses $m_1,m_2>0$ have centers $q_1,q_2\in\mathbb R^d$ at contact, so $\|q_1-q_2\|_2=r_1+r_2$. Let $n=(q_1-q_2)/(r_1+r_2)$ be the unit normal pointing from center $2$ to center $1$. Suppose the pre-impact relative normal velocity is $v_n=\langle v_1^- - v_2^-,n\rangle<0$. For prescribed restitution $e\in[0,1]$, put
$$\alpha=\frac1{m_1}+\frac1{m_2},\qquad J=-\frac{(1+e)v_n}{\alpha},\qquad v_1^+=v_1^-+\frac{J}{m_1}n,\quad v_2^+=v_2^- -\frac{J}{m_2}n.$$
Then $J>0$, total linear momentum is conserved, the post-impact relative normal velocity is $-e v_n$, each tangential velocity is unchanged, and
$$K^+-K^-=-\frac{(1-e^2)v_n^2}{2(1/m_1+1/m_2)}\le0,$$
where $K^\pm=\tfrac12m_1\|v_1^\pm\|_2^2+\tfrac12m_2\|v_2^\pm\|_2^2$. This is a single frictionless binary impulse law; it asserts no existence or uniqueness for simultaneous or frictional multi-contact.

## Facts & Assumptions

**Given:** The two masses, contact normal, pre-impact velocities, and restitution coefficient in the Statement.

[F1] [[def-euclidean-inner-product]]: the Euclidean inner product is bilinear and symmetric, and $\|x\|_2^2=\langle x,x\rangle$.

## Proof

1.1 Since $m_1,m_2>0$, $\alpha>0$. Since $1+e>0$ and $v_n<0$, $J>0$. The impulse changes total momentum by $m_1(v_1^+-v_1^-)+m_2(v_2^+-v_2^-)=Jn-Jn=0$. [F1, given, algebra]

2.1 Taking the relative normal component gives $$\langle v_1^+-v_2^+,n\rangle=v_n+J\left(\frac1{m_1}+\frac1{m_2}\right)=v_n-(1+e)v_n=-e v_n.$$ For either velocity, projection onto any vector orthogonal to $n$ is unchanged because the impulse term is parallel to $n$. [F1, step 1.1, given, algebra]

3.1 Expanding the two squared norms with [F1] yields $$K^+-K^-=J\langle v_1^- -v_2^-,n\rangle+\frac{J^2}{2}\left(\frac1{m_1}+\frac1{m_2}\right)=Jv_n+\frac{J^2\alpha}{2}.$$ Substitute $J=-(1+e)v_n/\alpha$ to obtain $K^+-K^-=-(1-e^2)v_n^2/(2\alpha)$. Since $0\le e\le1$, this is nonpositive; at $e=0$ it is the maximal loss in this law and at $e=1$ it is zero. [F1, step 1.1, given, algebra] ∎
