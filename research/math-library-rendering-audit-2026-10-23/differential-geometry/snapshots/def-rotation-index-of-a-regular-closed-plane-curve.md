---
id: def-rotation-index-of-a-regular-closed-plane-curve
kind: definition
title: "Rotation index of a regular closed plane curve"
status: published
origin: pipeline
deps:
  - thm-lebesgue-number-lemma
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature, Chapter 9"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "§Some Plane Geometry, printed pp. 156–161: tangent-angle lifts, one-sided corner angles and Theorem 9.1."
    - title: "Ved Datar, Lectures on Riemannian Geometry, Lectures 1–2"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 1, §§1.1–1.3, printed pp. 3–8: regular piecewise-smooth curves, no-cusp corners, tangent-angle lifts and prescribed corner increments."
---

## Definition

Let $\gamma:[a,b]\to\mathbb R^2$ be a closed, piecewise-$C^2$ regular curve
with a finite subdivision $a=t_0<t_1<\cdots<t_m=b$. On every smooth piece
$\dot\gamma\ne0$ up to its one-sided endpoints, and $\gamma(a)=\gamma(b)$ with
matching unit tangents $T(a)=T(b)$; the identified endpoint is taken in a
smooth piece. Write $T=\dot\gamma/\|\dot\gamma\|$ on smooth pieces. At each
interior vertex $t_j$, require the one-sided unit tangents $T_j^-$ and $T_j^+$
not to be antipodal. Define its signed corner jump $\epsilon_j$ to be the
unique number in $(-\pi,\pi)$ for which the positive rotation
$R_{\epsilon_j}$ sends $T_j^-$ to $T_j^+$. Self-intersections are allowed.

An **angle lift** of this tangent data is a real-valued continuous angle along
each smooth piece such that $T(t)=(\cos\theta(t),\sin\theta(t))$, with the
right-hand value at each vertex set to
$\theta(t_j^+)=\theta(t_j^-)+\epsilon_j$. The **rotation index** is
$$
\operatorname{rot}(\gamma)=\frac{\theta(b)-\theta(a)}{2\pi}.
$$
The definition is independent of the initial angle; the proof below establishes
that the lift exists and that the displayed value is an integer.

## Facts & Assumptions

**Given:** A closed piecewise-$C^2$ regular curve, with matching endpoint tangents and no antipodal corner jump.

[F1] Every open cover of a compact metric space has a positive Lebesgue number: all sufficiently small nonempty subsets lie in one cover member ([[thm-lebesgue-number-lemma]]).

## Proof

1.1 Fix one smooth piece $[u,v]$ and its continuous unit tangent $T$. For each $s\in[u,v]$, the set $U_s=\{t:T(t)\cdot T(s)>0\}$ is relatively open and contains $s$, so these sets cover $[u,v]$. By [F1] the cover has a Lebesgue number $\delta>0$; choose a finite uniform partition of mesh less than $\delta$. Each subinterval lies in some $U_s$, and the finitely many such centers can be chosen by finite induction, without an axiom of choice. [F1]

2.1 On each subinterval contained in $U_s$, the unique relative angle $\phi_s(t)\in(-\pi/2,\pi/2)$ from $T(s)$ to $T(t)$ is continuous. After choosing any initial angle $\theta(u)$ for $T(u)$, define recursively on a subinterval $[x_k,x_{k+1}]$ with center $s_k$ by $\theta(t)=\theta(x_k)+\phi_{s_k}(t)-\phi_{s_k}(x_k)$. Then $T(t)=(\cos\theta(t),\sin\theta(t))$ there, and the endpoint values agree across the finite partition, giving a continuous lift on the whole smooth piece. [step 1.1]

3.1 Apply step 2.1 successively to the finitely many smooth pieces, carrying the last angle to the next piece by adding the prescribed $\epsilon_j$ at each vertex. Since $T(b)=T(a)$, the resulting total increment satisfies $(\cos(\theta(b)-\theta(a)),\sin(\theta(b)-\theta(a)))=(1,0)$, hence $\theta(b)-\theta(a)=2\pi n$ for an integer $n$. Thus $\operatorname{rot}(\gamma)=n$, including the case $n=0$, and the single-piece case with no corners. [step 2.1]

4.1 Any two initial angles for $T(a)$ differ by $2\pi k$ for some integer $k$; the unique local relative angles in step 2.1 and the fixed corner jumps add that same constant on every later piece. Their endpoint difference is therefore unchanged. Changing the smooth starting point only splits one arc increment into two additive increments, and an orientation-preserving reparametrization preserves the oriented unit-tangent path; the cyclic total increment is unchanged. Reversing the curve reverses the increment and negates the index. [step 3.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, §“Some Plane Geometry,” printed pp. 156–161, defines the tangent angle of a regular curve, treats corner jumps in $(-\pi,\pi)$ with cusps excluded, and proves the rotation-angle theorem. Datar, *Lectures on Riemannian Geometry*, Lecture 1, §§1.1–1.3, printed pp. 3–8, gives the corresponding regular-curve, no-cusp, tangent-angle and piecewise-corner conventions. Those sources use covering-space lifting in the tangent-angle argument; the finite local semicircle construction above proves the needed lift directly from the Lebesgue-number lemma.
