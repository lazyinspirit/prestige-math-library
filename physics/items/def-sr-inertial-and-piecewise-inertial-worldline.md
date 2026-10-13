---
id: def-sr-inertial-and-piecewise-inertial-worldline
kind: definition
title: "Inertial and piecewise inertial worldlines of the affine Minkowski model"
status: published
origin: pipeline
domain: mathematics
deps: [def-sr-affine-minkowski-model, def-sr-regular-causal-curve-and-worldline, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-inertial-frame-and-inertial-chart, def-vector-valued-derivative-and-integral, def-interval, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-affine-space-and-displacement, lem-affine-minkowski-charts-form-a-smooth-atlas]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  def-affine-space-and-displacement: mathematical-premise
  lem-affine-minkowski-charts-form-a-smooth-atlas: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): sections 1.3.3 'The gamma factor' pp. 25-27 and 3.5-3.7 pp. 60-68 (inertial motion and its straight-line representation); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 68-73 (proper-time functional, geodesic variation, the maximality remark and its 'locally' caveat, the twin remark)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), sections 2.1-2.3 pp. 25-30 (inertial frames, worldlines, curves of extremal proper time and straight lines in inertial frames); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
dependency_level: 8
aliases: []
---

## Definition

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski space
([[def-sr-affine-minkowski-model]]), let $I$ be an order-convex subset of
$\mathbb{R}$ with at least two elements ([[def-interval]]), and let curves
$x:I\to A$ and their derivatives be as in
[[def-sr-regular-causal-curve-and-worldline]]: the displacement
$x(s+h)-x(s)$ is taken in the affine structure of
[[def-affine-space-and-displacement]], and $x'(s)\in V$, when it exists, is the
limit of the difference quotients, read in the coordinate calculus of
[[def-vector-valued-derivative-and-integral]] in any inertial chart
([[def-inertial-frame-and-inertial-chart]],
[[lem-affine-minkowski-charts-form-a-smooth-atlas]]).

### (a) Inertial worldlines

A curve $x:I\to A$ is **inertial** (also called **uniform** or **straight**)
when there are a parameter value $s_0\in I$, an event $p\in A$ and a vector
$d\in V$, with $d$ future timelike
([[def-time-orientation-and-future-causal-sets]]), such that

$$x(s)=p+(s-s_0)\,d\qquad\text{for every }s\in I.$$

The affine action is defined for every real parameter and every vector, so the
display defines a map $I\to A$
([[def-affine-space-and-displacement]]); its image is
$x[I]=\{p+\lambda d:\lambda=s-s_0,\ s\in I\}$, and a restriction of an inertial
worldline to a subinterval $J\subseteq I$ with at least two elements is inertial
with the same $d$: for any $t_0\in J$ its formula is
$x(s)=x(t_0)+(s-t_0)d$ on $J$. A singleton restriction is a map but is not a
curve or worldline under the cited definition. Its tangent on $I$ is
the constant vector $d$: in the chart $x_A$ of an inertial frame the coordinate
path is the affine function $s\mapsto x_A(p)+(s-s_0)E^{-1}(d)$, whose difference
quotients equal the constant $E^{-1}(d)$
([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]), so $x'(s)=d$ at
every $s\in I$ by the difference-quotient definition in
[[def-sr-regular-causal-curve-and-worldline]]; the same computation gives
$C^k$ regularity for every $k\ge1$. Since the constant tangent $d$ is future
timelike by hypothesis, an inertial curve is a future timelike worldline of the
model ([[def-causal-classification-of-lorentz-vectors]],
[[def-sr-regular-causal-curve-and-worldline]] (Worldlines)). If two inertial worldlines
$x(s)=p+(s-s_0)d$ and $y(t)=p'+(t-t_0)d'$ have the same image and the same
direction of traversal, that is $d'=\alpha d$ with $\alpha>0$, then $p'$ lies in
the image of $x$, so $p'=p+\mu d$ for some real $\mu$, and

$$y(t)=x\bigl(s_0+\mu+\alpha(t-t_0)\bigr)\qquad\text{for every }t\text{ in the domain of }y,$$

an increasing affine reparametrization. Here an **increasing affine reparametrization** means
composition with a bijection of parameter domains of the form
$t\mapsto\alpha t+\beta$ with $\alpha>0$. Conversely, composing an inertial
worldline with such a bijection gives an inertial worldline with the same image. This
computation uses only the affine axioms and $d\ne0$.

### (b) Piecewise inertial worldlines

Let $a<b$ be real numbers with $[a,b]\subseteq I$. A curve $x:[a,b]\to A$ is
**piecewise inertial** when there are a finite partition
$a=s_0<s_1<\dots<s_m=b$, events $p_1,\dots,p_m\in A$ and future timelike vectors
$d_1,\dots,d_m\in V$ such that

$$x(s)=p_i+(s-s_{i-1})\,d_i\qquad\text{for every }s\in[s_{i-1},s_i]\text{ and every }i=1,\dots,m,$$

and consecutive pieces agree at the partition points, that is
$p_{i+1}=p_i+(s_i-s_{i-1})d_i=x(s_i)$ for $i=1,\dots,m-1$. The joining condition
makes the piecewise formulas define a single function on $[a,b]$, whose tangent
on each open piece $(s_{i-1},s_i)$ is the constant $d_i$ and whose finite
one-sided difference-quotient tangents at an interior partition point $s_i$ are
$d_i$ from the left and $d_{i+1}$ from the right; at the endpoints $a$ and $b$
the one-sided quotients are $d_1$ and $d_m$. Hence a piecewise inertial curve is
a piecewise $C^1$ future timelike worldline on $[a,b]$ in the weak sense of
[[def-sr-regular-causal-curve-and-worldline]] — no continuous extension of the
derivative to the closed pieces is required, and the tangents are future timelike
at every smooth point and on both sides of every corner — and it is
$C^1$ on $[a,b]$ if and only if $d_1=d_2=\dots=d_m$. The events $x(s_i)$ with
$0<i<m$ are the **corners** of the itinerary, and the itinerary is a **two-leg
itinerary** when $m=2$.

### (c) Scope

The definition asserts the existence of no worldlines beyond the explicitly
parametrized straight and piecewise straight ones, and it attaches no clock
reading to any curve: readings of ideal clocks are the subject of the model's
postulates, not of this definition. No choice principle is used, since every
object is finitely parametrized and every operation is finite-dimensional.
