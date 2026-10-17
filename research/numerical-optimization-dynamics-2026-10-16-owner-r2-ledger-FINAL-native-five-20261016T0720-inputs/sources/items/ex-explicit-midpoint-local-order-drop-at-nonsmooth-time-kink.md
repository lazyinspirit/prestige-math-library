---
id: ex-explicit-midpoint-local-order-drop-at-nonsmooth-time-kink
kind: example
title: "A time kink reduces the explicit midpoint local order"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-one-step-ode-method-local-defect-order-and-stability]
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III, Section III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis (Spring 2012), Chapter 5"
      url: "https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf"
dependency_level: 1
---

## Example

Consider $y'=|t|$ with exact solution $y(t)=\tfrac12t|t|$ and the explicit midpoint step

$$M_h(t,z):=z+h f\left(t+\tfrac h2,z+\tfrac h2f(t,z)\right).$$

For $0<h\le1$, use the fixed compact time-state rectangle $K=[-1,1]\times[-1,1]$. On the step starting at $t_h=-h/2$, the exact solution segment, the method input, midpoint stage, and method output all lie in $K$. This step has local defect $-h^2/4$. As $h\downarrow0$ these admitted starting times stay in $[-1,1]$ and the defect is $\Theta(h^2)$, so the uniform local order-two bound $O(h^3)$ fails at the time kink.

## Verification

**Given:** $0<h\le1$, $f(t,z)=|t|$, $y(t)=\tfrac12t|t|$, and the displayed explicit midpoint map. Compute its local defect on $[-h/2,h/2]$.

[F1] [[def-one-step-ode-method-local-defect-order-and-stability]]: the local defect is method output from an exact starting value minus the exact endpoint; uniform local order two requires a uniform $O(h^3)$ bound.

1.1 For $t<0$, $y(t)=-t^2/2$ and $y'(t)=-t=|t|$; for $t>0$, $y(t)=t^2/2$ and $y'(t)=t=|t|$. At $t=0$, $\lim_{s\to0}(y(s)-y(0))/s=\lim_{s\to0}|s|/2=0=|0|$. Hence $y$ is the exact solution through $y(0)=0$. [given, algebra]

2.1 At $t_h=-h/2$, the exact value is $y(t_h)=-h^2/8$ and the explicit midpoint stage time is $0$, where $f(0,z)=0$ for every stage value $z$. Thus $M_h(t_h,y(t_h))=y(t_h)=-h^2/8$, while $y(t_h+h)=y(h/2)=h^2/8$. [given, F1, step 1.1, algebra]

3.1 Therefore $\delta_h(t_h;y)=-h^2/4$. The exact segment has $|t|\le h/2\le1/2$ and $|y(t)|\le1/8$; the input and output states are $-h^2/8$, and the midpoint stage state is $h^2/8$, all in $[-1,1]$. Their time coordinates also lie in $[-1,1]$, so the definition applies on the fixed compact set $K$. If a uniform order-two bound held, $h^2/4\le Ch^3$ for every $0<h\le1$, forcing $C\ge1/(4h)$ as $h\downarrow0$, which is impossible. The exact defect is $O(h^2)$ but not $O(h^3)$, so this nonsmooth field reduces the local order to one. [F1, step 2.1, algebra] ∎

## Remarks

Hairer–Nørsett–Wanner's midpoint construction and its order discussion assume sufficient smoothness; this verification does not import a smooth-field order theorem. It directly disproves an $O(h^3)$ local bound at the nonsmooth time kink.
