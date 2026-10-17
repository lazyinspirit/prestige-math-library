---
id: thm-smooth-advection-stencils-consistent
kind: theorem
title: Smooth consistency orders for the five periodic advection stencils
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-periodic-one-way-advection-schemes, cor-taylor-remainder-bound, def-ck-and-multi-index-notation-in-several-variables, thm-symmetry-of-higher-mixed-partials]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§6.6, PDF pp. 99–104: upwind truncation error, boundary rows, and smooth-solution error estimate."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 15, Finite Difference Methods for the One-Way Wave Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/286be9198204bea2f7e7d77f88e7b061_MIT18_336S09_lec15.pdf"
      locator: "Complete PDF pp. 1–4: Taylor consistency orders for upwind, downwind, centered, and Lax–Wendroff; the Lax–Friedrichs consistency estimate is completed locally."
---

## Statement

Fix $a\in\mathbb R\setminus\{0\}$. Let $u:\mathbb R^2\to\mathbb R$ be a $C^6$ solution of $u_t+a u_x=0$ that is periodic in $x$ with period $P>0$, so $u(x+P,t)=u(x,t)$, and whose derivatives through order six are bounded. Let $h,k\to0$ with $0<c_-\le k/h\le c_+<\infty$, and put $\nu=|a|k/h$. For a stencil $S$, define its local residual by
$$ \tau_S(x,t)=\frac{u(x,t+k)-S(u(\cdot,t))(x)}{k}. $$
Then, for the sign-selected stencils of [[def-periodic-one-way-advection-schemes]], the upwind, downwind, centered, and Lax--Friedrichs residuals are $O(h)$ uniformly in $(x,t)$, while the Lax--Wendroff residual is $O(h^2)$. Here a remainder $R=O(\eta(h,k))$ uniformly means $|R(x,t;h,k)|\le C\eta(h,k)$ for all $x,t$ and sufficiently small $h,k$, with $C$ independent of $x,t,h,k$ under the stated ratio bounds. These are smooth-solution consistency statements and imply no convergence result at discontinuities.

## Facts & Assumptions

**Given:** The stated smooth solution, fixed nonzero speed $a$, and two-sided mesh ratio $c_-\le k/h\le c_+$.

[F1] The five periodic stencils use the stated sign convention for $a>0$ and are reflected by $j\mapsto-j$ for $a<0$, with $\nu=|a|k/h$ ([[def-periodic-one-way-advection-schemes]]).

[F2] If derivatives through order $m+1$ are bounded on the segment, the order-$m$ Taylor polynomial has a remainder bounded by the derivative bound times the corresponding power divided by $(m+1)!$ ([[cor-taylor-remainder-bound]]).

[F3] For a function on an open subset of $\mathbb R^2$, $C^6$ means that every iterated partial derivative of total order at most six exists and is continuous ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F4] For a $C^k$ function, iterated partial derivatives of order $k$ are unchanged by permuting the coordinate differentiations ([[thm-symmetry-of-higher-mixed-partials]]).

## Proof

1.1 If $a<0$, set $A=-a>0$ and $\widetilde u(x,t)=u(-x,t)$. For fixed $x$, its time difference quotient is that of $u$ at $(-x,t)$, so $\widetilde u_t(x,t)=u_t(-x,t)$. In its spatial difference quotient, substitute $s=-h$ to get $\widetilde u_x(x,t)=-u_x(-x,t)$. Repeating these coordinate calculations gives $\partial_x^p\partial_t^q\widetilde u(x,t)=(-1)^p(\partial_x^p\partial_t^q u)(-x,t)$, so the period and derivative bounds are preserved. The PDE gives $\widetilde u_t+A\widetilde u_x=u_t(-x,t)-A u_x(-x,t)=0$. The definition's reflection $j\mapsto-j$ identifies each negative-speed stencil residual with the corresponding positive-speed residual of $\widetilde u$ at the reflected point. If $a>0$, take $A=a$ and $\widetilde u=u$. It is therefore enough to derive the estimates for positive speed $A$. [given, F1, F3, construct, algebra]

2.1 For this positive-speed solution, differentiating $\widetilde u_t=-A\widetilde u_x$ in $t$ and $x$, then using [F4] to commute the order-two mixed partials, gives $\widetilde u_{tt}=-A\widetilde u_{xt}=-A\widetilde u_{tx}=A^2\widetilde u_{xx}$. Differentiating this identity in $t$ and the PDE twice in $x$, then using [F4] to commute the order-three partials, gives $\widetilde u_{ttt}=A^2\widetilde u_{xxt}=A^2\widetilde u_{txx}=-A^3\widetilde u_{xxx}$. By [F3] these derivatives exist, and the bounded derivatives in the hypotheses make the Taylor remainders uniform. Taylor's formula from [F2] yields $$ \frac{\widetilde u(x,t+k)-\widetilde u(x,t)}{k}=\widetilde u_t+\frac{k}{2}\widetilde u_{tt}+\frac{k^2}{6}\widetilde u_{ttt}+O(k^3), $$ $$ \frac{\widetilde u(x+h,t)-\widetilde u(x-h,t)}{2h}=\widetilde u_x+\frac{h^2}{6}\widetilde u_{xxx}+O(h^4),\qquad \frac{\widetilde u(x+h,t)-2\widetilde u(x,t)+\widetilde u(x-h,t)}{h^2}=\widetilde u_{xx}+\frac{h^2}{12}\widetilde u_{xxxx}+O(h^4). $$ The one-sided expansions are $(\widetilde u(x,t)-\widetilde u(x-h,t))/h=\widetilde u_x-\frac h2\widetilde u_{xx}+O(h^2)$ and $(\widetilde u(x+h,t)-\widetilde u(x,t))/h=\widetilde u_x+\frac h2\widetilde u_{xx}+O(h^2)$. [given, F2, F3, F4, step 1.1, algebra]

3.1 Substituting the step 2.1 expansions into [F1] with speed $A=|a|$ and using $\widetilde u_t+A\widetilde u_x=0$ gives $$ \tau_{\rm up}=\frac{k}{2}\widetilde u_{tt}-\frac{Ah}{2}\widetilde u_{xx}+O(k^2+h^2),\quad \tau_{\rm down}=\frac{k}{2}\widetilde u_{tt}+\frac{Ah}{2}\widetilde u_{xx}+O(k^2+h^2),\quad \tau_{\rm centered}=\frac{k}{2}\widetilde u_{tt}+O(k^2+h^2). $$ For Lax--Friedrichs the symmetric average contributes $-h^2\widetilde u_{xx}/(2k)$ to the residual, so $\tau_{\rm LF}=\frac{k}{2}\widetilde u_{tt}-\frac{h^2}{2k}\widetilde u_{xx}+O(k^2+h^2+h^4/k)$. For Lax--Wendroff the $k\widetilde u_{tt}/2$ term cancels the second-difference term by $\widetilde u_{tt}=A^2\widetilde u_{xx}$, leaving $\tau_{\rm LW}=\frac{k^2}{6}\widetilde u_{ttt}+\frac{Ah^2}{6}\widetilde u_{xxx}+O(k^3+h^4+kh^2)$. Reflection in step 1.1 transfers these residual bounds to the negative-speed branch. [F1, step 1.1, step 2.1, algebra]

4.1 The mesh ratio bounds imply $k=O(h)$ and $h^2/k=O(h)$. Thus the first four residuals are uniformly $O(h)$, and every displayed Lax--Wendroff term is $O(h^2)$ or smaller. By step 1.1 the same estimates hold for either velocity sign. The conclusion concerns only the sampled smooth solution in the stated periodic setting. [given, step 1.1, step 3.1, algebra] ∎
