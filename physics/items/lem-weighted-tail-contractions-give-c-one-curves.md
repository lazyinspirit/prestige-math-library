---
id: lem-weighted-tail-contractions-give-c-one-curves
kind: lemma
title: "Weighted half-tail contractions for $q_n=M_{s_n}(q_{n-1},q_{n+1})$ give a unique $C^1$ curve with tangent slope bounded by $c/(1-q)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [lem-bounded-bilateral-sequence-ball-is-complete, def-isometry-and-metric-embedding, thm-banach-fixed-point, def-metric-space, def-metric-convergence, def-continuity-real, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, thm-mean-value-inequality, thm-extreme-value-metric, thm-heine-borel-rn, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, def-lipschitz-holder-contraction, def-abs-value, lem-of-abs-value, def-complete-ordered-field]
dependency_roles:
  lem-bounded-bilateral-sequence-ball-is-complete: mathematical-premise
  def-isometry-and-metric-embedding: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  def-metric-space: mathematical-premise
  def-metric-convergence: mathematical-premise
  def-continuity-real: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-mean-value-inequality: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-lipschitz-holder-contraction: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-complete-ordered-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Part 2, contraction and implicit-recurrence methods in a complete metric space of sequences"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "P. Cvitanović, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8, complete PDF), Chapter 15 Sections 15.1-15.2, continuation of stable and unstable curves by weighted contractions"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
verification:
  precheck: pass
---

## Statement

Let $\theta\in(0,1)$, $c>0$ and put

$$q:=c\,(\theta+\theta^{-1}),\qquad\text{and assume }q<1 .$$

Let $J\subseteq\mathbb R$ be a nonempty compact interval, let $s\in X_\pm$,
and let $O\subseteq\mathbb R^2$ be open with $J\times J\subseteq O$. For
$u\in\{-1,+1\}$ let $\widetilde M_u:O\to\mathbb R$ be of class $C^2$
([[def-ck-euclidean-maps-and-diffeomorphisms]]); write $M_u$ for its
restriction to $J\times J$, assume $M_u(J\times J)\subseteq J$, and suppose
that

$$\bigl|\partial_1M_u\bigr|\le c,\qquad \bigl|\partial_2M_u\bigr|\le c\qquad\text{on }J\times J .$$

Let $(y_n)_{n\ge0}$ be a sequence with $y_n\in J$ and let $b_*\in J$ satisfy

$$y_n=M_{s_n}(y_{n-1},y_{n+1})\quad(n\ge1),\qquad y_0=M_{s_0}(b_*,y_1),$$

and assume there is $\bar\rho>0$ with $[y_n-\bar\rho,\,y_n+\bar\rho]\subseteq J$ for every $n\ge0$. Choose $\delta_*>0$ such that

$$[b_*-\delta_*,\,b_*+\delta_*]\subseteq J,\qquad \delta_*<\frac{(1-q)\bar\rho}{c},$$

and put $I:=(b_*-\delta_*,b_*+\delta_*)$. Write

$$\ell^\infty_\theta(\mathbb N):=\Bigl\{\,u:\mathbb N\to\mathbb R\ :\ \|u\|_\theta:=\sup_{n\ge0}\theta^{-n}|u_n|<\infty\,\Bigr\}$$

with metric $\|u-v\|_\theta$, and define its closed ball

$$\mathcal B_{\bar\rho}:=\{u\in\ell^\infty_\theta(\mathbb N):\|u\|_\theta\le\bar\rho\}.$$

For $u\in\mathcal B_{\bar\rho}$ and $b\in I$, put $z_{-1}:=b$ and
$z_k:=y_k+u_k$ for every $k\ge0$, and define $T_b:\mathcal B_{\bar\rho}\to\mathcal B_{\bar\rho}$ by

$$(T_bu)_n:=M_{s_n}\bigl(z_{n-1},z_{n+1}\bigr)-y_n\qquad(n\ge0).$$

Then:

1. $\ell^\infty_\theta(\mathbb N)$ is a complete metric space and $\mathcal B_{\bar\rho}$ is complete in the distance $\|u-v\|_\theta$; for every $b\in I$ the map $T_b$ is a contraction with constant $q<1$, so it has exactly one fixed point $u(b)\in\mathcal B_{\bar\rho}$;
2. for every $b\in I$ one has the a priori bound $\|u(b)\|_\theta\le c\,|b-b_*|/(1-q)$, and the map $b\mapsto u(b)$ is Lipschitz on $I$ with

$$\|u(b')-u(b)\|_\theta\le\frac{c}{1-q}\,|b'-b| ;$$

3. $b\mapsto u(b)$ is continuously differentiable on $I$ into $\ell^\infty_\theta(\mathbb N)$: with $z^*_k:=y_k+u_k(b)$ for $k\ge0$ and $z^*_{-1}:=b$, the derivative $d(b):=du(b)/db\in\ell^\infty_\theta(\mathbb N)$ is the unique element of $\ell^\infty_\theta(\mathbb N)$ satisfying

$$d_n(b)=\partial_1M_{s_n}(z^*_{n-1},z^*_{n+1})\,d_{n-1}(b)+\partial_2M_{s_n}(z^*_{n-1},z^*_{n+1})\,d_{n+1}(b)\quad(n\ge1),$$

$$d_0(b)=\partial_1M_{s_0}\bigl(b,z^*_1\bigr)+\partial_2M_{s_0}\bigl(b,z^*_1\bigr)\,d_1(b),\qquad d_{-1}(b):=1,$$

and $\|d(b)\|_\theta\le c/(1-q)$;
4. consequently the local phase curve

$$\gamma(b):=\bigl(b,\;y_0+u_0(b)\bigr)$$

defined for $b\in I$ is $C^1$ with $\gamma'(b)=(1,d_0(b))$, and so $|d_0(b)|\le c/(1-q)$.

## Facts & Assumptions

**Given:** The parameters $\theta,c,q$, the compact interval $J$, the open neighborhood $O$, the $C^2$ extensions $\widetilde M_{-1},\widetilde M_{+1}$ and their restrictions $M_{-1},M_{+1}$, the two-sign sequence $s$, the reference data $y,b_*$, the radius $\bar\rho$ and parameter interval $I$, the weighted space $\ell^\infty_\theta(\mathbb N)$, its closed ball $\mathcal B_{\bar\rho}$, and the operators $T_b$.

[F1] Each $\widetilde M_u$ is $C^2$ on the open set $O$, its restriction maps $J\times J$ into $J$, and $|\partial_1M_u|,|\partial_2M_u|\le c$ on $J\times J$ (given). The box $J\times J$ is compact by Heine--Borel; hence the first and second partial derivatives are bounded there ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]]). If $z,z'\in J\times J$ and $\Delta:=z'-z$, the segment $z+t\Delta$ lies in $J\times J$. The function $g(t):=\widetilde M_u(z+t\Delta)$ is $C^2$ on an open interval containing $[0,1]$, and the chain rule gives $|g'(t)|\le c\|\Delta\|_1$ and $|g''(t)|\le K\|\Delta\|_1^2$ with a common finite $K$ for both signs ([[thm-chain-rule-for-total-derivatives]]). The mean-value inequality ([[thm-mean-value-inequality]]) applied to $g$ gives

$$|M_u(z')-M_u(z)|\le c\|z'-z\|_1,$$

For the Taylor remainder, the mean-value inequality applied to $g'$ on $[0,t]$ gives $|g'(t)-g'(0)|\le Kt\|\Delta\|_1^2$; thus $\phi(t):=g(t)-g(0)-tg'(0)$ has $|\phi'(t)|\le K\|\Delta\|_1^2$. Applying the same inequality to $\phi$ on $[0,1]$ gives

$$\bigl|M_u(z')-M_u(z)-DM_u(z)(z'-z)\bigr|\le K\,\|z'-z\|_1^2.$$

Here $\|\cdot\|_1$ is the sum of the absolute values of the two coordinates; the derivative bounds follow from the chain rule and the uniform second-derivative bound above ([[thm-chain-rule-for-total-derivatives]], [[thm-mean-value-inequality]], [[def-total-derivative-in-euclidean-space]]).

[F2] The map $W:\ell^\infty_\theta(\mathbb N)\to\ell^\infty(\mathbb N)$, $(Wu)_n:=\theta^{-n}u_n$, is a bijection with $\|Wu\|_\infty=\|u\|_\theta$; hence $(\ell^\infty_\theta(\mathbb N),\|\cdot-\cdot\|_\theta)$ is a complete metric space, as an isometric copy of the complete space $\ell^\infty(\mathbb N)=\mathcal B(\mathbb N)$. It maps $\mathcal B_{\bar\rho}$ isometrically onto the closed sup-norm ball $B_{\bar\rho}(\mathbb N)$, so that ball and therefore $\mathcal B_{\bar\rho}$ are complete as well ([[lem-bounded-bilateral-sequence-ball-is-complete]], clauses 1, 2 and 4; [[def-isometry-and-metric-embedding]], [[def-metric-space]]).

[F3] Banach's fixed point theorem ([[thm-banach-fixed-point]], [[def-lipschitz-holder-contraction]]): a map of a nonempty complete metric space into itself with constant $q<1$ has exactly one fixed point, and it is the limit of the iterates from every starting point.

[F4] Absolute value and order arithmetic ([[def-abs-value]], [[lem-of-abs-value]], [[def-complete-ordered-field]]): $|uv|=|u||v|$, $|u+w|\le|u|+|w|$, and $\theta^{-n}>0$ for all $n$.

[F5] Metric convergence and continuity ([[def-metric-convergence]], [[def-continuity-real]]).



## Proof

**Proof technique:** direct; contract in the weighted supremum norm, estimate the boundary forcing, and linearise by a Taylor remainder estimate in the same norm.

1.1 Contraction: let $u,v\in\mathcal B_{\bar\rho}$ and $b\in I$. Every argument pair of $M_{s_n}$ lies in $J\times J$: $b\in J$ and, for $k\ge0$, $|u_k|,|v_k|\le\bar\rho$ with $[y_k-\bar\rho,y_k+\bar\rho]\subseteq J$. The line segment between the two argument pairs also lies in $J\times J$ because $J$ is an interval, so the derivative bound in [F1] gives for $n\ge1$ $$\bigl|(T_bu)_n-(T_bv)_n\bigr|\le c\bigl(|u_{n-1}-v_{n-1}|+|u_{n+1}-v_{n+1}|\bigr)\le\theta^n\,c(\theta^{-1}+\theta)\,\|u-v\|_\theta=\theta^n\,q\,\|u-v\|_\theta .$$ For $n=0$ only the argument $z_1$ varies, so $\bigl|(T_bu)_0-(T_bv)_0\bigr|\le c|u_1-v_1|\le q\|u-v\|_\theta$ because $c\theta\le q$. Multiplying by $\theta^{-n}$ and taking the supremum gives $\|T_bu-T_bv\|_\theta\le q\|u-v\|_\theta$. [given, F1, F4, algebra]

2.1 Ball invariance: let $b\in I$ and $u\in\mathcal B_{\bar\rho}$. For every $k\ge0$, $z_k=y_k+u_k\in J$ by $|u_k|\le\bar\rho$ and the margin hypothesis; also $z_{-1}=b\in J$. For $n\ge1$, using the reference recurrence of the statement and [F1], $$\bigl|(T_bu)_n\bigr|=\bigl|M_{s_n}(z_{n-1},z_{n+1})-M_{s_n}(y_{n-1},y_{n+1})\bigr|\le c\bigl(|u_{n-1}|+|u_{n+1}|\bigr)\le\theta^nq\,\|u\|_\theta\le\theta^nq\bar\rho .$$ For $n=0$, $(T_bu)_0=M_{s_0}(b,z_1)-M_{s_0}(b_*,y_1)$, so $|(T_bu)_0|\le c|b-b_*|+c|u_1|\le (1-q)\bar\rho+q\bar\rho=\bar\rho$, since $|b-b_*|<\delta_*<(1-q)\bar\rho/c$. Hence $\|T_bu\|_\theta\le\bar\rho$. [given, step 1.1, F1, F4, algebra]

2.2 Linearised equation: fix $b$ and put $z^*_k:=y_k+u_k(b)$ for $k\ge0$ and $z^*_{-1}:=b$. Define the affine map $L$ on $\ell^\infty_\theta(\mathbb N)$ by $$(Ld)_n:=\partial_1M_{s_n}(z^*_{n-1},z^*_{n+1})\,d_{n-1}+\partial_2M_{s_n}(z^*_{n-1},z^*_{n+1})\,d_{n+1}\quad(n\ge1),\qquad (Ld)_0:=\partial_2M_{s_0}(b,z^*_1)\,d_1+\partial_1M_{s_0}(b,z^*_1),$$ where $d_{-1}:=1$ is held fixed. The homogeneous part $d\mapsto Ld-d_{-1}\text{-part}$ is a contraction of constant $q$ by the computation of step 1.1, so [F3] gives a unique $d(b)\in\ell^\infty_\theta(\mathbb N)$ with $Ld(b)=d(b)$, i.e. the displayed system; taking the fixed point of the homogeneous contraction started at $0$ gives $\|d(b)\|_\theta\le c/(1-q)$ because the forcing $\partial_1M_{s_0}(b,z^*_1)e_0$ has norm at most $c$. [given, step 1.1, F1, F3, F4]

3.1 Fixed point: by [F2], $\mathcal B_{\bar\rho}$ is a nonempty complete metric space. For every $b\in I$, step 2.1 shows $T_b$ maps this ball into itself and step 1.1 shows that it is a contraction with constant $q<1$; [F3] therefore gives exactly one fixed point $u(b)\in\mathcal B_{\bar\rho}$. [step 1.1, step 2.1, F2, F3]

3.2 Taylor remainder: fix $b\in I$ and take $h$ small enough that $b+h\in I$. Put $u':=u(b+h)$ and $\Delta:=u'-u(b)$, and for $k\ge0$ put $z_k:=y_k+u_k(b)$ and $z'_k:=y_k+u'_k$, with $z_{-1}:=b$ and $z'_{-1}:=b+h$. For $n\ge1$, [F1] applied at $z=(z^*_{n-1},z^*_{n+1})$ and $z'=(z'_{n-1},z'_{n+1})$ gives $$\bigl|(T_{b+h}u')_n-(T_bu)_n-\partial_1M_{s_n}\Delta_{n-1}-\partial_2M_{s_n}\Delta_{n+1}\bigr|\le K\bigl(|\Delta_{n-1}|+|\Delta_{n+1}|\bigr)^2\le 2K\bigl(|\Delta_{n-1}|^2+|\Delta_{n+1}|^2\bigr),$$ and multiplying by $\theta^{-n}$ bounds this by $2K\theta^{n}(\theta^{-2}+\theta^{2})\|\Delta\|^2_\theta$. For $n=0$ the two input differences are $h$ and $\Delta_1$; [F1] gives a remainder bounded by $K'(|h|+|\Delta_1|)^2\le2K'(h^2+|\Delta_1|^2)$ with a uniform $K'$, so altogether $$\bigl\|u'-(T_bu)-\bigl[D_uT_b(u)\bigr]\Delta-D_bT_b(u)h\bigr\|_\theta\le C_0\bigl(\|\Delta\|_\theta^2+h^2\bigr)$$ with $C_0<\infty$. [given, step 2.2, F1, F4, algebra]

4.1 Lipschitz dependence and a priori bound: for $u\in\mathcal B_{\bar\rho}$ and $b,b'\in I$, $(T_{b'}u)_n=(T_bu)_n$ for $n\ge1$, while $\bigl|(T_{b'}u)_0-(T_bu)_0\bigr|\le c|b'-b|$ by [F1]. Applying this with $u=u(b')$ and using step 1.1 gives $\|u(b')-u(b)\|_\theta\le q\|u(b')-u(b)\|_\theta+c|b'-b|$, hence $\|u(b')-u(b)\|_\theta\le c|b'-b|/(1-q)$. At $b=b_*$, $u(b_*)=0$ because the zero sequence solves the fixed-point equation; taking one parameter to be $b_*$ gives $\|u(b)\|_\theta\le c|b-b_*|/(1-q)$. [step 1.1, step 3.1, F1, F3, F4, algebra]

5.1 Differentiability: write $D_uT:=D_uT_b(u(b))$ and $D_bT:=D_bT_b(u(b))$ for the two partial derivatives of the map $(b,u)\mapsto T_bu$ at $(b,u(b))$. By step 3.2 applied to the fixed point equations $u(b+h)=T_{b+h}u(b+h)$ and $u(b)=T_bu(b)$, $$u(b+h)=u(b)+D_uT\,\Delta+D_bT\,h+R_1,\qquad \|R_1\|_\theta\le C_0\bigl(\|\Delta\|_\theta^2+h^2\bigr),$$ with $\Delta=u(b+h)-u(b)$. By step 2.2, $h\,d(b)=D_uT\,(h\,d(b))+D_bT\,h$; subtracting $h\,d(b)$ from the displayed equation and putting $R:=\Delta-h\,d(b)$ therefore yields $R=D_uT\,R+R_1$, whence $\|R\|_\theta\le q\|R\|_\theta+\|R_1\|_\theta$. By step 4.1, $\|\Delta\|_\theta\le c|h|/(1-q)$, so $\|R_1\|_\theta\le C_1h^2$ for $|h|$ small and hence $\|R\|_\theta\le C_1h^2/(1-q)$: that is, $u(b+h)=u(b)+h\,d(b)+O(h^2)$ in $\ell^\infty_\theta(\mathbb N)$. This proves differentiability with derivative $d(b)$ and identifies it with the solution of clause 3. [step 4.1, step 2.2, step 3.2, F1, F4, algebra]

5.2 Continuity of the derivative: by step 2.2 the difference of the linear operators at $b'$ and $b$ has coefficients $\partial_iM_{s_n}(z'_{n\pm1})-\partial_iM_{s_n}(z_{n\pm1})$, which tend to zero uniformly in $n$ as $b'\to b$ by uniform continuity of the $\partial_iM_u$ on the compact $J\times J$ and by the uniform estimate $|z'_k-z_k|\le c|b'-b|/(1-q)$ of step 4.1; the same holds for the forcing. Applying the difference estimate of step 4.1 to the fixed points $d(b'),d(b)$ of the affine maps gives $\|d(b')-d(b)\|_\theta\to0$. [step 4.1, step 2.2, F1, F4]

6.1 The curve: the map $b\mapsto\gamma(b)=(b,y_0+u_0(b))$ has components the identity and the affine function of $u_0$, and $b\mapsto u_0(b)$ is continuously differentiable by steps 5.1 and 5.2 with derivative $d_0(b)$; hence $\gamma$ is $C^1$ with the displayed derivative ([F5]). The bound $|d_0(b)|\le\|d(b)\|_\theta\le c/(1-q)$ is step 2.2. [step 2.2, step 5.1, step 5.2, F4, F5] ∎


## Remarks

- The lemma isolates the exact contractive mechanism used for both the unperturbed square-root recurrence and its perturbations: only the two partial-derivative bounds of the update and the existence of one reference half-orbit are used, not the explicit shape of $M_u$.

- The weighted growth $|u_n|\le\theta^n\|u\|_\theta$ is what makes the solution track the reference half-orbit exponentially; for the phase curve $\gamma$ this means that the forward orbits of its points converge to the same limit as the reference orbit, which is the stable-set membership used later.

- No choice principle is used: completeness of the weighted space comes from the complete space of bounded sequences, and the fixed points are unique.
