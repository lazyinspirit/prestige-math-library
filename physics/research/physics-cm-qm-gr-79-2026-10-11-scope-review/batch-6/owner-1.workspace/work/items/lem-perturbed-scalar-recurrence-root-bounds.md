---
id: lem-perturbed-scalar-recurrence-root-bounds
kind: lemma
title: "Root bounds and $C^1$ dependence for the perturbed scalar recurrence $v^2-a-u-w+e(u,v,w)=0$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-bilateral-symbol-and-bounded-sequence-space, lem-close-map-first-component-has-uniform-inverse, def-ck-euclidean-maps-and-diffeomorphisms, thm-intermediate-value, thm-of-square-roots, thm-chain-rule-for-total-derivatives, thm-euclidean-implicit-function-theorem, def-continuity-real, def-abs-value, lem-of-abs-value, def-interval, def-metric-ball, thm-extreme-value-metric]
dependency_roles:
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  lem-close-map-first-component-has-uniform-inverse: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-euclidean-implicit-function-theorem: mathematical-premise
  def-continuity-real: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-interval: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, Proposition 4 and its proof, quadratic root location in the horseshoe region"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Chapter 13, implicit-function and perturbation estimates for the horseshoe region"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
verification:
  precheck: pass
---

## Statement

Fix $a\ge100$ and put

$$R:=\sqrt a+3,\qquad l:=\sqrt a-3\ge7,\qquad S:=[-R-1,R+1]^2 .$$

Let $0<\varepsilon<1$, let $U\subseteq\mathbb R^2$ be open with $S\subseteq U$, and let $G=(A,B):U\to\mathbb R^2$ be a $C^2$ map satisfying the closeness hypotheses of [[lem-close-map-first-component-has-uniform-inverse]] on $S$ with constant $\varepsilon$; let $V:[-R,R]^2\to[-R-1,R+1]$ be its inverse branch. Define the **defect**

$$e(u,v,w):=-\bigl(V(v,w)-w\bigr)+2v\,\bigl(V(u,v)-v\bigr)+\bigl(V(u,v)-v\bigr)^2+B\bigl(u,V(u,v)\bigr)-\bigl(V(u,v)^2-a-u\bigr)$$

for $(u,v,w)\in[-R,R]^3$, and put

$$P_{u,w}(v):=v^2-a-u-w+e(u,v,w),\qquad (u,v,w)\in[-R,R]^3 .$$

Then:

1. $e$ is of class $C^1$ on $[-R,R]^3$, and there is a constant $C=C(a,R)$ such that $\|e\|_{C^1([-R,R]^3)}\le C\varepsilon$; in particular, with $\eta:=C\varepsilon$ assumed to satisfy $\eta\le1$, for all $(u,v,w)$

$$|e(u,v,w)|\le\eta,\qquad |\partial_ve(u,v,w)|\le\eta,\qquad |\partial_ue(u,v,w)|\le\eta,\qquad |\partial_we(u,v,w)|\le\eta ;$$

2. for every $(u,w)\in[-R,R]^2$ and each sign $s\in\{-1,+1\}$ the equation $P_{u,w}(v)=0$ has exactly one solution $v=M_s(u,w)$ with $s\,v\in[l,R]$, and this solution satisfies the margins

$$s\,M_s(u,w)-l\ge\tfrac34,\qquad R-s\,M_s(u,w)\ge\tfrac34 ;$$

moreover $M_s$ is of class $C^1$ on $[-R,R]^2$ with

$$\bigl|\partial_uM_s\bigr|\le d:=\frac{1+\eta}{2l-\eta},\qquad \bigl|\partial_wM_s\bigr|\le d ;$$

3. with $d$ as above and $\theta:=1/2$ one has, for every $a\ge100$ and $\eta\le1$,

$$d\le\frac2{13},\qquad 2d\le\frac4{13}<1,\qquad d\bigl(\theta+\theta^{-1}\bigr)\le\frac5{13}<1,\qquad \frac{d}{1-d\theta}\le\frac16<\frac23 .$$

4. **(orbit form of the root equation)** for all $(u,v,w)\in[-R,R]^3$,

$$P_{u,w}(v)=0\quad\Longleftrightarrow\quad B\bigl(u,V(u,v)\bigr)=V(v,w).$$

## Facts & Assumptions

**Given:** The parameter $a\ge100$, the constants $R,l,S$, the map $G$ and its closeness constant $\varepsilon$, the inverse branch $V$ of [[lem-close-map-first-component-has-uniform-inverse]], the defect $e$ and the polynomials $P_{u,w}$.

[F1] The inverse branch ([[lem-close-map-first-component-has-uniform-inverse]], clauses 2 and 3): $V$ is $C^1$ on $[-R,R]^2$, $A(q,V(q,q'))=q'$, $|V(q,q')-q'|\le\varepsilon$, $|\partial_qV|\le\varepsilon/(1-\varepsilon)$, $|\partial_{q'}V-1|\le\varepsilon/(1-\varepsilon)$ for all $(q,q')\in[-R,R]^2$.

[F2] The closeness of $B$: $|B(x,y)-(y^2-a-x)|\le\varepsilon$, $|\partial_xB+1|\le\varepsilon$, $|\partial_yB-2y|\le\varepsilon$ on $S$ (given, and hypotheses of [[lem-close-map-first-component-has-uniform-inverse]]).

[F3] $C^1$ calculus and the uniform bound: $e$ is built from $V$, $B$ and polynomials by composition, product and sum, so it is $C^1$ on the compact cube, and its value and first partial derivatives are bounded by a constant times $\varepsilon$ by [F1], [F2], the chain rule and the extreme value theorem ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-chain-rule-for-total-derivatives]], [[thm-extreme-value-metric]], [[def-continuity-real]]); the constant depends only on $a$ and $R$. This is stated as clause 1 with a single constant $C$ absorbing the finitely many $O(1)$ factors.

[F4] The endpoint values of the unperturbed quadratic ([[thm-of-square-roots]], [[def-abs-value]], [[def-interval]]): with $u,w\in[-R,R]$ one has $|u+w|\le2R$, hence

$$l^2-a-(u+w)\le l^2-a+2R=-4\sqrt a+15,\qquad R^2-a-(u+w)\ge R^2-a-2R=4\sqrt a+3,$$

because $l^2=a-6\sqrt a+9$ and $R^2=a+6\sqrt a+9$. In particular $4\sqrt a-15\ge25$ and $4\sqrt a+3\ge43$ for $a\ge100$.

[F5] The intermediate value theorem and monotonicity ([[thm-intermediate-value]], [[def-continuity-real]], [[def-abs-value]]): a continuous real function on a closed interval taking a negative value at one endpoint and a positive value at the other has a zero; a $C^1$ function with strictly positive derivative on an interval is strictly increasing there.

[F6] Implicit differentiation in two variables ([[thm-euclidean-implicit-function-theorem]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): if $P(u_0,w_0,v_0)=0$ and $\partial_vP(u_0,w_0,v_0)\ne0$, then locally $v=M(u,w)$ is the unique $C^1$ solution with $\partial_uM=-\partial_uP/\partial_vP$ and $\partial_wM=-\partial_wP/\partial_vP$.



## Proof

**Proof technique:** direct; estimate the defect from the inverse-branch bounds, locate the root by endpoint signs, differentiate the defining equation, and expand once to identify the root equation with the $G$-orbit form.

1.1 Bounds for the defect: on the cube, [F1] gives $$|V(v,w)-w|\le\varepsilon,\qquad |V(u,v)-v|\le\varepsilon,\qquad \bigl|\partial_u(V(u,v)-v)\bigr|\le\frac{\varepsilon}{1-\varepsilon},\qquad \bigl|\partial_v(V(u,v)-v)\bigr|\le\frac{\varepsilon}{1-\varepsilon},$$ and the corresponding partials of $V(v,w)-w$ in $(v,w)$ are bounded by $\varepsilon/(1-\varepsilon)$; [F2] gives $|B(u,V(u,v))-(V(u,v)^2-a-u)|\le\varepsilon$ and partial bounds $\varepsilon$ plus Lipschitz factors $2|V|+1\le2(R+1)+1$ from the derivative bounds of $B$ and [F1]. Since $|2v|\le2R$, every term of $e$ and every first partial derivative of $e$ (computed by the chain rule and product rule) is bounded by a sum of finitely many terms each $O(\varepsilon)$, so there is $C=C(a,R)$ with $\|e\|_{C^1}\le C\varepsilon$; for $0<\varepsilon<1$ one may take, for instance, a constant absorbing $2R$, $R^2$ and the factors $1/(1-\varepsilon)\le2$. With $\eta:=C\varepsilon\le1$ clause 1 follows. [given, F1, F2, F3, algebra]

2.1 Endpoint values of $P$: fix $u,w\in[-R,R]$. By step 1.1, $|e(u,v,w)|\le\eta$ for every $v$. Using [F4], $$P_{u,w}(l)=l^2-a-u-w+e(u,l,w)\le-(4\sqrt a-15)+\eta<0,\qquad P_{u,w}(R)=R^2-a-u-w+e(u,R,w)\ge(4\sqrt a+3)-\eta>0,$$ because $\eta\le1\le25\le4\sqrt a-15$ and $\eta\le1<43\le4\sqrt a+3$. Similarly $P_{u,w}(-R)\ge(4\sqrt a+3)-\eta>0$ and $P_{u,w}(-l)\le-(4\sqrt a-15)+\eta<0$. [step 1.1, F4, algebra]

2.2 Monotonicity: for $v\in[l,R]$, $$P_{u,w}'(v)=2v+\partial_ve(u,v,w)\ge2l-\eta\ge14-1>0,$$ and for $v\in[-R,-l]$, $P_{u,w}'(v)=2v+\partial_ve\le-2l+\eta<0$; hence $P_{u,w}$ is strictly increasing on $[l,R]$ and strictly decreasing on $[-R,-l]$. [step 1.1, F5, algebra]

2.3 Orbit form of the root equation: fix $(u,v,w)\in[-R,R]^3$ and put $\delta_B:=B(u,V(u,v))-(V(u,v)^2-a-u)$, so that $|\delta_B|\le\varepsilon$ by [F2]. Expanding the two inverse-branch values, $$V(u,v)^2=v^2+2v\bigl(V(u,v)-v\bigr)+\bigl(V(u,v)-v\bigr)^2,\qquad V(v,w)=w+\bigl(V(v,w)-w\bigr),$$ one computes $$B\bigl(u,V(u,v)\bigr)-V(v,w)=v^2-a-u-w+\Bigl[-\bigl(V(v,w)-w\bigr)+2v\bigl(V(u,v)-v\bigr)+\bigl(V(u,v)-v\bigr)^2+\delta_B\Bigr]=P_{u,w}(v),$$ because the bracket is exactly $e(u,v,w)$. Hence $P_{u,w}(v)=0$ if and only if $B(u,V(u,v))=V(v,w)$, which is clause 4. [given, step 1.1, F1, F2, algebra]

3.1 Existence, uniqueness and margins of the root: by steps 2.1 and 2.2 and the intermediate value theorem [F5], $P_{u,w}$ has exactly one zero $M_+(u,w)$ in $[l,R]$ and exactly one zero $M_-(u,w)$ in $[-R,-l]$. For the margins, on $[l,R]$ one has $|P'_{u,w}|\le2R+\eta\le2\sqrt a+7$ by step 1.1, while $P_{u,w}(l)\le-(4\sqrt a-15)+\eta\le-(4\sqrt a-16)$ and $P_{u,w}(R)\ge(4\sqrt a+3)-\eta\ge4\sqrt a+2$ by step 2.1. The mean value theorem applied on $[l,M_+]$ and on $[M_+,R]$ therefore gives $$M_+-l\ge\frac{4\sqrt a-16}{2\sqrt a+7},\qquad R-M_+\ge\frac{4\sqrt a+2}{2\sqrt a+7},$$ and both right-hand sides are at least $3/4$ because $\sqrt a\ge10$: the first inequality is equivalent to $10\sqrt a\ge85$ and the second to $10\sqrt a\ge13$. At $a=100$ the two bounds read $24/27$ and $42/27$. The same computation on the interval $[-R,-l]$, where $P_{u,w}$ is decreasing and $P_{u,w}(-l)\le-(4\sqrt a-16)$, $P_{u,w}(-R)\ge4\sqrt a+2$, gives $|M_-|-l\ge\tfrac34$ and $R-|M_-|\ge\tfrac34$; thus $s\,M_s-l\ge\tfrac34$ and $R-s\,M_s\ge\tfrac34$ for each sign $s$. [step 1.1, step 2.1, step 2.2, F5, algebra]

4.1 Regularity and derivative bounds: at a zero $v$ of $P_{u,w}$ with $sv\in[l,R]$, step 2.2 gives $\partial_vP_{u,w}(v)\ge2l-\eta>0$ (respectively $\le-(2l-\eta)$), so the implicit function theorem [F6], applied to the $C^1$ function $(u,w,v)\mapsto P_{u,w}(v)$ and combined with the uniqueness of step 3.1, makes $M_s$ of class $C^1$ with $$\partial_uM_s=-\frac{\partial_uP}{\partial_vP}=\frac{1-\partial_ue}{2v+\partial_ve},\qquad \partial_wM_s=-\frac{\partial_wP}{\partial_vP}=\frac{1-\partial_we}{2v+\partial_ve} .$$ Both numerators are bounded by $1+\eta$ in absolute value, and the denominator by $2l-\eta$ from below in absolute value; hence $|\partial_uM_s|,|\partial_wM_s|\le(1+\eta)/(2l-\eta)=d$, which is clause 2. [step 3.1, step 1.1, F6, algebra]

5.1 Numerical inequalities: since $l\ge7$ and $\eta\le1$, $d\le(1+1)/(14-1)=2/13$; therefore $2d\le4/13<1$; with $\theta=1/2$, $d(\theta+\theta^{-1})\le(2/13)(5/2)=5/13<1$; and $d/(1-d\theta)\le(2/13)/(1-1/13)=2/12=1/6<2/3$. [step 4.1, algebra]

6.1 Conclusion: step 1.1 proves clause 1; steps 2.1, 2.2, 3.1 and 4.1 prove clause 2; step 5.1 proves clause 3; step 2.3 proves clause 4. [step 1.1, step 2.1, step 2.2, step 2.3, step 3.1, step 4.1, step 5.1] ∎


## Remarks

- The defect $e$ is not an arbitrary perturbation: it is exactly the residual obtained from a genuine $G$-orbit, because a $G$-orbit $(q_n,v_n)$ satisfies $v_n=V(q_n,q_{n+1})$ and $v_n=B(q_{n-1},v_{n-1})$, and substituting the inverse-branch expansions produces precisely $P_{q_{n-1},q_{n+1}}(q_n)=0$ (step 2.3, read backwards). Clause 4 is the exact equivalence used in [[thm-explicit-perturbed-horseshoe-and-transversality]] to convert the coded recurrence $q_n=M_{s_n}(q_{n-1},q_{n+1})$ into the two-step orbit relation of $G$.

- All numerical margins are evaluated at the worst case $a=100$, $l=7$, $\eta=1$; the argument is uniform in $a\ge100$ and only improves with larger $a$ or smaller $\eta$.
