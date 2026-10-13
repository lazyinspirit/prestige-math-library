---
id: lem-close-map-first-component-has-uniform-inverse
kind: lemma
title: "A $C^2$ map $C^1$-close to $F$ has a unique inverse branch for its first component, with $O(\\varepsilon)$ derivative bounds"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [lem-of-triangle-inequality, cor-mean-value-theorem, def-bilateral-symbol-and-bounded-sequence-space, def-ck-euclidean-maps-and-diffeomorphisms, thm-banach-fixed-point, thm-euclidean-implicit-function-theorem, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, thm-mean-value-inequality-for-total-derivatives, def-metric-ball, def-metric-space, def-continuity-real, def-abs-value, lem-of-abs-value, def-interval, def-lipschitz-holder-contraction, thm-cauchy-criterion-via-lub, lem-limit-preserves-order, def-complete-metric-space]
dependency_roles:
  lem-of-triangle-inequality: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  thm-euclidean-implicit-function-theorem: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-mean-value-inequality-for-total-derivatives: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-space: mathematical-premise
  def-continuity-real: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-interval: mathematical-premise
  def-lipschitz-holder-contraction: mathematical-premise
  thm-cauchy-criterion-via-lub: mathematical-premise
  lem-limit-preserves-order: mathematical-premise
  def-complete-metric-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Chapter 13, perturbation arguments for near-integrable maps and implicit-function estimates"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, uniform estimates for maps close to a quadratic model"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
verification:
  precheck: pass
---

## Statement

Fix $a\ge100$ and put $R:=\sqrt a+3$, so that $R\ge13$. Let $0<\varepsilon<1$, let $U\subseteq\mathbb R^2$ be open with $[-R-1,R+1]^2\subseteq U$, and let $G=(A,B):U\to\mathbb R^2$ be of class $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) whose components satisfy, on the closed square $S:=[-R-1,R+1]^2$,

$$|A(x,y)-y|\le\varepsilon,\qquad |\partial_xA(x,y)|\le\varepsilon,\qquad |\partial_yA(x,y)-1|\le\varepsilon,$$

$$|B(x,y)-(y^2-a-x)|\le\varepsilon,\qquad |\partial_xB(x,y)+1|\le\varepsilon,\qquad |\partial_yB(x,y)-2y|\le\varepsilon .$$

Then:

1. for every $(q,q')\in[-R,R]^2$ the equation $A(q,v)=q'$ has exactly one solution $v=V(q,q')\in[-R-1,R+1]$, and this defines a map $V:[-R,R]^2\to[-R-1,R+1]$;
2. $V$ is of class $C^1$ on $[-R,R]^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), with

$$\partial_qV(q,q')=-\frac{\partial_xA(q,V)}{A_y(q,V)},\qquad \partial_{q'}V(q,q')=\frac{1}{\partial_yA(q,V)};$$

3. $V$ satisfies the uniform estimates

$$\bigl|V(q,q')-q'\bigr|\le\varepsilon,\qquad \bigl|\partial_qV(q,q')\bigr|\le\frac{\varepsilon}{1-\varepsilon},\qquad \bigl|\partial_{q'}V(q,q')-1\bigr|\le\frac{\varepsilon}{1-\varepsilon}$$

for every $(q,q')\in[-R,R]^2$.

## Facts & Assumptions

**Given:** The parameter $a\ge100$, $R=\sqrt a+3$, the open set $U$, the map $G=(A,B)$ with its closeness bounds on $S$, and a point $(q,q')\in[-R,R]^2$.

[F1] First-component closeness (given, [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]]): for every $v\in[-R-1,R+1]$ one has $|A(q,v)-v|\le\varepsilon$ and $|\partial_yA(q,v)-1|\le\varepsilon$. The function $f(v):=A(q,v)-v$ is continuous on $[-R-1,R+1]$ and differentiable on its interior, since $A$ is $C^2$ on the open set $U$. For any distinct $v,w$ in this closed interval, the scalar mean value theorem ([[cor-mean-value-theorem]]) on $[\min(v,w),\max(v,w)]$ gives $f(v)-f(w)=f\prime(\xi)(v-w)$ for an interior $\xi$. The derivative is $\partial_yA(q,\xi)-1$, of absolute value at most $\varepsilon$; equal endpoints give zero. Thus, including both boundary endpoints,

$$\bigl|(A(q,v)-v)-(A(q,w)-w)\bigr|\le\varepsilon\,|v-w|\qquad(v,w\in[-R-1,R+1]);$$

equivalently, for $\Phi(v):=q'+v-A(q,v)$ one has $|\Phi(v)-q'|\le\varepsilon$ and $|\Phi(v)-\Phi(w)|\le\varepsilon|v-w|$ on the interval, with $\varepsilon<1$.

[F2] The interval $[-R-1,R+1]$ is nonempty. Every Cauchy sequence in it converges in $\mathbb R$ by [[thm-cauchy-criterion-via-lub]], and its limit remains between $-R-1$ and $R+1$ by [[lem-limit-preserves-order]]. Thus the interval is complete ([[def-complete-metric-space]]), and a map of it into itself with constant $\varepsilon<1$ has exactly one fixed point ([[thm-banach-fixed-point]], [[def-lipschitz-holder-contraction]], [[def-metric-space]]).

[F3] Implicit differentiation ([[thm-euclidean-implicit-function-theorem]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): $A$ is $C^1$ on the open set $U$; if $\partial_yA(q_0,v_0)\ne0$ and $A(q_0,v_0)=q_0'$, then near $(q_0',q_0)$ the equation $A(q,v)=q'$ has a unique $C^1$ solution $v=\varphi(q,q')$ with $\partial_q\varphi=-\partial_xA/\partial_yA$ and $\partial_{q'}\varphi=1/\partial_yA$.

[F4] Absolute value and order ([[def-abs-value]], [[lem-of-abs-value]], [[lem-of-triangle-inequality]]): $|u+w|\le|u|+|w|$, $|uv|=|u||v|$, and $R\ge13$ so that $[-R,R]\subseteq[-R-1,R+1]$ and $q'+[-1,1]\subseteq[-R-1,R+1]$ for $q'\in[-R,R]$.

[F5] Continuous differentiability and the topology of the square ([[def-metric-ball]], [[def-metric-space]], [[def-continuity-real]]): the closed square $S$ is a nonempty subset of the open set $U$, and a function is of class $C^1$ when its partial derivatives exist and are continuous.



## Proof

**Proof technique:** direct; solve the equation by the contraction $v\mapsto q'+v-A(q,v)$ for each fixed $(q,q')$, then use the implicit function theorem for regularity and differentiate the defining identity for the bounds.

1.1 Location of the root: fix $(q,q')\in[-R,R]^2$ and define $\Phi(v):=q'+v-A(q,v)$ on $[-R-1,R+1]$. For every such $v$, $\Phi(v)-q'=v-A(q,v)$ so $|\Phi(v)-q'|\le\varepsilon\le1$ by [F1]; hence $\Phi(v)\in[-R-1,R+1]$ by [F4] (because $q'\in[-R,R]$ gives $q'+[-1,1]\subseteq[-R-1,R+1]$). Also $|\Phi(v)-\Phi(w)|=|(v-w)-(A(q,v)-A(q,w))|\le\sup_{\xi}|1-\partial_yA(q,\xi)|\,|v-w|\le\varepsilon|v-w|$ by [F1] and the mean value inequality. Thus $\Phi$ maps the complete interval into itself and is a contraction with constant $\varepsilon<1$. [given, F1, F2, F4, algebra]

2.1 Unique root: by [F2], $\Phi$ has exactly one fixed point $v\in[-R-1,R+1]$; the identity $\Phi(v)=v$ is equivalent to $A(q,v)=q'$. This proves clause 1 and defines $V$. [step 1.1, F2, algebra]

3.1 Regularity: at a root $(q,q')$ with $v=V(q,q')$, the partial derivative $\partial_yA(q,v)$ satisfies $|\partial_yA(q,v)|\ge1-\varepsilon>0$ by the closeness bound, so $A_y(q,v)\ne0$. The implicit function theorem [F3] gives a $C^1$ solution $\varphi$ near $(q,q')$ with the displayed derivatives, and by clause 1 this local solution coincides with $V$; since $(q,q')\in[-R,R]^2$ was arbitrary, $V$ is $C^1$ on the square with the displayed formulas. [step 2.1, F3, F5, algebra]

4.1 Regularity needed by the half-tail construction: choose $0<\delta<1-\varepsilon$. For $(q,q')\in(-R-\delta,R+\delta)^2$, both parameters lie in $[-R-1,R+1]$, and every $(q,v)$ with $v\in[-R-1,R+1]$ lies in $S$. Thus the given bounds apply and $\partial_yA(q,v)\ge1-\varepsilon>0$. The contraction $\Phi(v)=q'+v-A(q,v)$ has constant $\varepsilon$; moreover $|\Phi(v)-q'|\le\varepsilon$, so $\Phi(v)\in[-R-1,R+1]$ because $|q'|<R+\delta$ and $\delta+\varepsilon<1$. Its unique fixed point therefore defines $V$ on this open parameter rectangle, extending the original branch by uniqueness. The implicit function theorem gives a local $C^1$ branch at each point; uniqueness makes these local branches agree with the contraction-defined extension. Since $A$ is $C^2$, the formulas in step 3.1 make its first partial derivatives $C^1$ compositions and quotients with nonvanishing denominator. Consequently this extension is $C^2$ on the open rectangle, as needed by the later root and weighted-tail constructions; clause 2's $C^1$ conclusion remains valid. [step 1.1, step 2.1, step 3.1, F1, F3, given, algebra]

4.2 Estimates: from $A(q,V(q,q'))=q'$ and the closeness $|A(q,v)-v|\le\varepsilon$ evaluated at $v=V(q,q')$, clause 3's first inequality follows: $|V(q,q')-q'|=|V-A(q,V)|\le\varepsilon$ by [F4]. For the derivatives, by step 3.1 $\bigl|\partial_qV\bigr|=\frac{|\partial_xA(q,V)|}{|\partial_yA(q,V)|}\le\frac{\varepsilon}{1-\varepsilon},\qquad \bigl|\partial_{q'}V-1\bigr|=\frac{|\partial_yA(q,V)-1|}{|\partial_yA(q,V)|}\le\frac{\varepsilon}{1-\varepsilon},$ using $|\partial_xA|\le\varepsilon$ and $|\partial_yA-1|\le\varepsilon$ from the hypotheses and $|\partial_yA|\ge1-\varepsilon$ from step 3.1. [step 3.1, step 2.1, F4, algebra]

5.1 Conclusion: steps 2.1, 3.1 and 4.2 prove clauses 1, 2 and 3 respectively. [step 2.1, step 3.1, step 4.2] ∎


## Remarks

- The proof uses only two properties of the model map $(x,y)\mapsto(y,y^2-a-x)$: its first component is the second variable, so that solving $A(q,v)=q'$ in $v$ is a near-identity equation, and its second component is a quadratic in $v$. The quadratic structure enters quantitatively in the split $\varepsilon$ between the two components in [[lem-perturbed-scalar-recurrence-root-bounds]].

- The estimates are uniform on the square and show that $V$ is a small $C^1$ perturbation of the projection $(q,q')\mapsto q'$.
