---
id: ex-sr-collinear-boost-composition-and-rapidity
kind: example
title: "Worked collinear composition and rapidity addition at beta = 3/5"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 10
deps: [def-lorentz-boost, lem-collinear-boost-composition-and-velocity-addition,
       lem-rapidity-parametrization-of-collinear-boosts,
       def-euclidean-inner-product, def-natural-logarithm,
       def-real-exponential-function-and-e, thm-natural-logarithm-laws]
dependency_roles:
  def-lorentz-boost: mathematical-premise
  lem-collinear-boost-composition-and-velocity-addition: mathematical-premise
  lem-rapidity-parametrization-of-collinear-boosts: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

Worked computation. Let $e$ be a unit spatial direction of an inertial frame and
let $B(\frac35e)$ be the passive boost with parameter $\frac35$
([[def-lorentz-boost]]), so $\gamma=5/4$ and, in the ordered pair of
directions $(e_0,e)$, the boost has the $2\times2$ matrix
$\begin{pmatrix}5/4&-3/4\\ -3/4&5/4\end{pmatrix}$ and is the identity on $\{y\in S:\delta(e,y)=0\}$, the $\eta$-orthogonal complement of $\operatorname{span}(e_0,e)$
([[lem-rapidity-parametrization-of-collinear-boosts]]). Then:

(i) $B(\frac35e)^2=\begin{pmatrix}5/4&-3/4\\ -3/4&5/4\end{pmatrix}^2=\begin{pmatrix}17/8&-15/8\\ -15/8&17/8\end{pmatrix}=B(\frac{15}{17}e)$,
because $\gamma(\frac{15}{17})=(1-\frac{225}{289})^{-1/2}=(\frac{64}{289})^{-1/2}=\frac{17}{8}$
and $\gamma(\frac{15}{17})\cdot\frac{15}{17}=\frac{17}{8}\cdot\frac{15}{17}=\frac{15}{8}$.
This is the velocity-addition law
$\frac{3/5+3/5}{1+(3/5)(3/5)}=\frac{6/5}{34/25}=\frac{15}{17}$, with
$|15/17|<1$.

(ii) The rapidities are
$r(\frac35)=\frac12\log\bigl(\frac{1+3/5}{1-3/5}\bigr)=\frac12\log 4=\log 2$
and
$r(\frac{15}{17})=\frac12\log\bigl(\frac{1+15/17}{1-15/17}\bigr)=\frac12\log 16=\log 4=2\log 2$,
so the rapidities add under composition: $r(\frac{15}{17})=r(\frac35)+r(\frac35)$.

(iii) The two boosts commute: the reversed product $B(\frac35e)B(\frac35e)$
equals the square computed in (i), and this is the instance
$\beta_1=\beta_2=3/5$ of the commutativity of collinear boosts.

## Facts & Assumptions

**Given:** A unit spatial direction $e$ of an inertial frame, the passive boost $B(\frac35e)$, and the collinear family $B(\beta e)$, $\beta\in(-1,1)$.

[L1] For $|\beta|<1$ the boost $B(\beta e)$ acts in the frame coordinates by $x'^0=\gamma(x^0-\beta x^1)$, $x'^1=\gamma(x^1-\beta x^0)$ on the $(e_0,e)$ plane, with $\gamma=(1-\beta^2)^{-1/2}>0$ and $\beta$ the coefficient of the unit direction; the matrix on the ordered pair $(e_0,e)$ is $\begin{pmatrix}\gamma&-\gamma\beta\\ -\gamma\beta&\gamma\end{pmatrix}$ and the map is the identity on $\{y\in S:\delta(e,y)=0\}$ ([[def-lorentz-boost]]).

[L2] For a unit spatial direction $e$ and $r\in\mathbb R$, the boost $B(\tanh(r)e)$ has on $(e_0,e)$ the matrix $\begin{pmatrix}\cosh r&-\sinh r\\ -\sinh r&\cosh r\end{pmatrix}$; in particular, with $\beta=\tanh(r)$, $\gamma(\beta)=\cosh(r)$ and $\gamma(\beta)\beta=\sinh(r)$ ([[lem-rapidity-parametrization-of-collinear-boosts]]).

[L3] For unit $e$ and $\beta_1,\beta_2\in(-1,1)$ one has $B(\beta_1e)B(\beta_2e)=B(\beta e)$ with $\beta=\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}$ and $|\beta|<1$, and collinear boosts commute ([[lem-collinear-boost-composition-and-velocity-addition]]).

[L4] For $\beta\in(-1,1)$ the rapidity is $r(\beta)=\frac12\log\frac{1+\beta}{1-\beta}$, a strictly increasing bijection of $(-1,1)$ onto $\mathbb R$ with $\beta=\tanh(r(\beta))$; for a fixed unit direction, rapidities add: $B(\tanh(r)e)B(\tanh(s)e)=B(\tanh(r+s)e)$ ([[lem-rapidity-parametrization-of-collinear-boosts]], [[def-natural-logarithm]]).

[L5] For $x,y>0$ one has $\log(xy)=\log x+\log y$ and $\log(x/y)=\log x-\log y$ ([[thm-natural-logarithm-laws]]); the exponential satisfies $e^r=\exp(r)$ and the hyperbolic functions are $\sinh(r)=(e^r-e^{-r})/2$, $\cosh(r)=(e^r+e^{-r})/2$ ([[def-real-exponential-function-and-e]]).

[L6] The Euclidean norm of a vector of $\mathbb R^3$ satisfies $|\beta e|=|\beta|$ for a unit direction ([[def-euclidean-inner-product]]).



## Proof

**Proof technique:** direct.

1.1 With $\beta=3/5$ and $|\beta e|=3/5$ by [L6], [L1] gives $\gamma=(1-9/25)^{-1/2}=(16/25)^{-1/2}=5/4$, so the matrix of $B(\frac35e)$ on the ordered pair $(e_0,e)$ is $\begin{pmatrix}5/4&-3/4\\ -3/4&5/4\end{pmatrix}$, and the map is the identity on the $\eta$-orthogonal complement of $\operatorname{span}(e_0,e)$. This is the matrix form recorded in [L2], with the rapidity fixed by $\tanh r=3/5$; the numerical value of that rapidity is computed below. [L1, L2, L6, algebra]

1.2 By the commutativity clause of [L3], $B(\frac35e)B(\frac35e)=B(\frac35e)B(\frac35e)$, i.e. the reversed order gives back the same product; clause (iii) is this instance, and no separate computation is needed. [L3]

2.1 Squaring the matrix of step 1.1 in the $2\times2$ block, $(5/4)^2+(3/4)^2=25/16+9/16=34/16=17/8$ on the diagonal and $-(5/4)(3/4)-(3/4)(5/4)=-15/8$ off the diagonal, while the identity block on the complement squares to itself; hence $B(\frac35e)^2$ has matrix $\begin{pmatrix}17/8&-15/8\\ -15/8&17/8\end{pmatrix}$ on $(e_0,e)$ and is the identity on the complement. By [L3], $B(\frac35e)^2=B(\beta e)$ with $\beta=\frac{3/5+3/5}{1+(3/5)(3/5)}=\frac{6/5}{34/25}=\frac{15}{17}$, and $|15/17|<1$. For this $\beta$, $\gamma(\beta)=(1-225/289)^{-1/2}=(64/289)^{-1/2}=17/8$ and $\gamma(\beta)\beta=\frac{17}{8}\cdot\frac{15}{17}=\frac{15}{8}$; by [L1] the matrix of $B(\frac{15}{17}e)$ is therefore $\begin{pmatrix}17/8&-15/8\\ -15/8&17/8\end{pmatrix}$ on $(e_0,e)$, matching the square. This proves clause (i) and the velocity-addition law. [L3, step 1.1, algebra]

3.1 By [L4] and [L5], $r(\frac35)=\frac12\log\frac{8/5}{2/5}=\frac12\log 4$, and $\log 4=\log 2+\log 2$ by the product law, so $r(\frac35)=\frac12(2\log 2)=\log 2$; similarly $r(\frac{15}{17})=\frac12\log\frac{32/17}{2/17}=\frac12\log 16$ and $\log 16=\log 4+\log 4=4\log 2$, so $r(\frac{15}{17})=\frac12(4\log 2)=2\log 2=\log 4$. With $\log 2=\log 2$ this gives $r(\frac{15}{17})=r(\frac35)+r(\frac35)$: the rapidity of the composed boost in step 2.1 is the sum of the two equal rapidities, in agreement with the addition statement of [L4]. [L4, L5, step 2.1, algebra]

4.1 Steps 1.1-2.1 prove clauses (i) and (iii) and step 3.1 proves clause (ii); every entry is an exact rational or logarithmic identity justified by the displayed suppliers. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
