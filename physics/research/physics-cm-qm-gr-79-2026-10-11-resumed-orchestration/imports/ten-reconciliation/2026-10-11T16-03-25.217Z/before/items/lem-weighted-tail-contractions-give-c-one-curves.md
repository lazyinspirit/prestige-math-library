---
id: lem-weighted-tail-contractions-give-c-one-curves
kind: lemma
title: "Weighted half-tail contractions for $q_n=M_{s_n}(q_{n-1},q_{n+1})$ give a unique $C^1$ curve with tangent slope bounded by $c/(1-q)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [lem-bounded-bilateral-sequence-ball-is-complete, def-isometry-and-metric-embedding, thm-banach-fixed-point, def-metric-space, def-metric-convergence, def-continuity-real, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, thm-mean-value-inequality-for-total-derivatives, thm-extreme-value-metric, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, def-lipschitz-holder-contraction, def-abs-value, lem-of-abs-value, def-complete-ordered-field]
dependency_roles:
  lem-bounded-bilateral-sequence-ball-is-complete: mathematical-premise
  def-isometry-and-metric-embedding: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  def-metric-space: mathematical-premise
  def-metric-convergence: mathematical-premise
  def-continuity-real: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-mean-value-inequality-for-total-derivatives: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
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

Let $J\subseteq\mathbb R$ be a closed interval, let $s\in X_\pm$, and let $M_u:J\times J\to J$ be of class $C^2$ for $u\in\{-1,+1\}$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) with

$$\bigl|\partial_1M_u\bigr|\le c,\qquad \bigl|\partial_2M_u\bigr|\le c\qquad\text{on }J\times J .$$

Let $(y_n)_{n\ge0}$ be a sequence with $y_n\in J$ and let $b_*\in J$ satisfy

$$y_n=M_{s_n}(y_{n-1},y_{n+1})\quad(n\ge1),\qquad y_0=M_{s_0}(b_*,y_1),$$

and assume there is $\bar\rho>0$ with $[y_n-\bar\rho,\,y_n+\bar\rho]\subseteq J$ for every $n\ge0$. Write

$$\ell^\infty_\theta(\mathbb N):=\Bigl\{\,u:\mathbb N\to\mathbb R\ :\ \|u\|_\theta:=\sup_{n\ge0}\theta^{-n}|u_n|<\infty\,\Bigr\}$$

and for $b\in J$ define $T_b:\ell^\infty_\theta(\mathbb N)\to\ell^\infty_\theta(\mathbb N)$ by

$$(T_bu)_n:=M_{s_n}\bigl(z_{n-1},z_{n+1}\bigr)-y_n,\qquad z_{-1}:=b,\quad z_k:=y_k+u_k\ (k\ge1).$$

Then:

1. $\ell^\infty_\theta(\mathbb N)$ is a complete metric space in the distance $\|u-v\|_\theta$, and for every $b\in J$ the map $T_b$ is a contraction with constant $q<1$; hence $T_b$ has exactly one fixed point $u(b)\in\ell^\infty_\theta(\mathbb N)$;
2. if $|b-b_*|\le(1-q)\bar\rho/c$, then $\|u(b)\|_\theta\le\bar\rho$; for every $b$ one has the a priori bound $\|u(b)\|_\theta\le c\,|b-b_*|/(1-q)$, and the map $b\mapsto u(b)$ is Lipschitz with

$$\|u(b')-u(b)\|_\theta\le\frac{c}{1-q}\,|b'-b| ;$$

3. $b\mapsto u(b)$ is continuously differentiable into $\ell^\infty_\theta(\mathbb N)$: with $z^*_k:=y_k+u_k(b)$, the derivative $d(b):=du(b)/db\in\ell^\infty_\theta(\mathbb N)$ is the unique element of $\ell^\infty_\theta(\mathbb N)$ satisfying

$$d_n(b)=\partial_1M_{s_n}(z^*_{n-1},z^*_{n+1})\,d_{n-1}(b)+\partial_2M_{s_n}(z^*_{n-1},z^*_{n+1})\,d_{n+1}(b)\quad(n\ge1),$$

$$d_0(b)=\partial_1M_{s_0}\bigl(b,z^*_1\bigr)+\partial_2M_{s_0}\bigl(b,z^*_1\bigr)\,d_1(b),\qquad d_{-1}(b):=1,$$

and $\|d(b)\|_\theta\le c/(1-q)$;
4. consequently the phase curve

$$\gamma(b):=\bigl(b,\;y_0+u_0(b)\bigr)$$

defined for $b\in J$ near $b_*$ is $C^1$ with $\gamma'(b)=(1,d_0(b))$, and so $|d_0(b)|\le c/(1-q)$.

## Facts & Assumptions

**Given:** The parameters $\theta,c,q$, the interval $J$, the two-sign sequence $s$, the maps $M_{-1},M_{+1}$, the reference data $y,b_*$ and the radius $\bar\rho$, the weighted space $\ell^\infty_\theta(\mathbb N)$ and the operators $T_b$.

[F1] $M_u$ is $C^2$ on $J\times J$ with $|\partial_1M_u|,|\partial_2M_u|\le c$ there (given). Since $J\times J$ is a nonempty compact subset of $\mathbb R^2$, the total derivative $DM_u$ and the second-order partial derivatives of $M_u$ are continuous and bounded on $J\times J$ ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]], [[thm-extreme-value-metric]]); in particular there is $K<\infty$ such that for all $z,z'\in J\times J$

$$\bigl|M_u(z')-M_u(z)-DM_u(z)(z'-z)\bigr|\le K\,\|z'-z\|_1^2,$$

by the mean value inequality applied to $DM_u$ between $z$ and $z'$ ([[thm-mean-value-inequality-for-total-derivatives]], [[def-total-derivative-in-euclidean-space]]).

[F2] The map $W:\ell^\infty_\theta(\mathbb N)\to\ell^\infty(\mathbb N)$, $(Wu)_n:=\theta^{-n}u_n$, is a bijection with $\|Wu\|_\infty=\|u\|_\theta$; hence $(\ell^\infty_\theta(\mathbb N),\|\cdot-\cdot\|_\theta)$ is a complete metric space, as an isometric copy of the complete space $\ell^\infty(\mathbb N)=\mathcal B(\mathbb N)$ ([[lem-bounded-bilateral-sequence-ball-is-complete]], clauses 1, 2 and 4; [[def-isometry-and-metric-embedding]], [[def-metric-space]]).

[F3] Banach's fixed point theorem ([[thm-banach-fixed-point]], [[def-lipschitz-holder-contraction]]): a map of a nonempty complete metric space into itself with constant $q<1$ has exactly one fixed point, and it is the limit of the iterates from every starting point.

[F4] Absolute value and order arithmetic ([[def-abs-value]], [[lem-of-abs-value]], [[def-complete-ordered-field]]): $|uv|=|u||v|$, $|u+w|\le|u|+|w|$, and $\theta^{-n}>0$ for all $n$.

[F5] Metric convergence and continuity ([[def-metric-convergence]], [[def-continuity-real]]).



## Proof

**Proof technique:** direct; contract in the weighted supremum norm, estimate the boundary forcing, and linearise by a Taylor remainder estimate in the same norm.

1.1 Contraction: let $u,v\in\ell^\infty_\theta(\mathbb N)$ and $b\in J$. For $n\ge1$ the arguments $z_{n-1},z_{n+1}$ of $M_{s_n}$ contain the errors $u_{n\pm1}$, and [F1] gives $$\bigl|(T_bu)_n-(T_bv)_n\bigr|\le c\bigl(|u_{n-1}-v_{n-1}|+|u_{n+1}-v_{n+1}|\bigr)\le\theta^n\,c(\theta^{-1}+\theta)\,\|u-v\|_\theta=\theta^n\,q\,\|u-v\|_\theta .$$ For $n=0$ only the argument $z_1$ varies, so $\bigl|(T_bu)_0-(T_bv)_0\bigr|\le c|u_1-v_1|\le q\|u-v\|_\theta$ because $c\theta\le q$. Multiplying by $\theta^{-n}$ and taking the supremum gives $\|T_bu-T_bv\|_\theta\le q\|u-v\|_\theta$. [given, F1, F4, algebra]

2.1 Ball invariance: suppose $|b-b_*|\le(1-q)\bar\rho/c$ and $\|u\|_\theta\le\bar\rho$. Then for every $n$ the points $z_{n\pm1}=y_{n\pm1}+u_{n\pm1}$ lie in $J$ by the hypothesis $[y_n-\bar\rho,y_n+\bar\rho]\subseteq J$ (with $n\pm1$ in place of $n$) and [F4]. For $n\ge1$, using the reference recurrence of the statement, $$\bigl|(T_bu)_n\bigr|=\bigl|M_{s_n}(z_{n-1},z_{n+1})-M_{s_n}(y_{n-1},y_{n+1})\bigr|\le c\bigl(|u_{n-1}|+|u_{n+1}|\bigr)\le\theta^nq\,\|u\|_\theta\le\theta^nq\bar\rho .$$ For $n=0$, $(T_bu)_0=M_{s_0}(b,z_1)-M_{s_0}(b_*,y_1)$, so $|(T_bu)_0|\le c|b-b_*|+c|u_1|\le(1-q)\bar\rho+q\bar\rho=\bar\rho$. Hence $\|T_bu\|_\theta\le\bar\rho$. [given, step 1.1, F1, F4, algebra]

2.2 Linearised equation: fix $b$ and put $z^*_k:=y_k+u_k(b)$ for $k\ge0$ and $z^*_{-1}:=b$. Define the affine map $L$ on $\ell^\infty_\theta(\mathbb N)$ by $$(Ld)_n:=\partial_1M_{s_n}(z^*_{n-1},z^*_{n+1})\,d_{n-1}+\partial_2M_{s_n}(z^*_{n-1},z^*_{n+1})\,d_{n+1}\quad(n\ge1),\qquad (Ld)_0:=\partial_2M_{s_0}(b,z^*_1)\,d_1+\partial_1M_{s_0}(b,z^*_1),$$ where $d_{-1}:=1$ is held fixed. The homogeneous part $d\mapsto Ld-d_{-1}\text{-part}$ is a contraction of constant $q$ by the computation of step 1.1, so [F3] gives a unique $d(b)\in\ell^\infty_\theta(\mathbb N)$ with $Ld(b)=d(b)$, i.e. the displayed system; taking the fixed point of the homogeneous contraction started at $0$ gives $\|d(b)\|_\theta\le c/(1-q)$ because the forcing $\partial_1M_{s_0}(b,z^*_1)e_0$ has norm at most $c$. [given, step 1.1, F1, F3, F4]

3.1 Fixed point: by [F2] the space is a nonempty complete metric space, and by step 1.1 every $T_b$ is a contraction with constant $q<1$; [F3] gives a unique fixed point $u(b)\in\ell^\infty_\theta(\mathbb N)$ for every $b\in J$. If $|b-b_*|\le(1-q)\bar\rho/c$, then step 2.1 shows that the closed ball $\overline B_\theta(0,\bar\rho)=\{u:\|u\|_\theta\le\bar\rho\}$ is mapped into itself by $T_b$; this ball is a nonempty complete metric space, as a closed subset of the complete space of [F2] ([[lem-bounded-bilateral-sequence-ball-is-complete]], clause 2), so [F3] applied to the restriction gives a fixed point inside it; by uniqueness this is $u(b)$, and $\|u(b)\|_\theta\le\bar\rho$. [step 1.1, step 2.1, F2, F3]

3.2 Taylor remainder: put $u':=u(b+h)$ and $\Delta:=u'-u(b)$. For $n\ge1$, [F1] applied at $z=(z^*_{n-1},z^*_{n+1})$ and $z'=(z'_{n-1},z'_{n+1})$ gives $$\bigl|(T_{b+h}u')_n-(T_bu)_n-\partial_1M_{s_n}\Delta_{n-1}-\partial_2M_{s_n}\Delta_{n+1}\bigr|\le K\bigl(|\Delta_{n-1}|+|\Delta_{n+1}|\bigr)^2\le 2K\bigl(|\Delta_{n-1}|^2+|\Delta_{n+1}|^2\bigr),$$ and multiplying by $\theta^{-n}$ bounds this by $2K\theta^{n}(\theta^{-2}+\theta^{2})\|\Delta\|^2_\theta$. For $n=0$ one has the analogous bound $K|\Delta_1|^2+K'h^2$ with $K'$ a bound for the second derivative of $b\mapsto M_{s_0}(b,z^*_1)$, obtained from [F1] applied in the first variable, so altogether $$\bigl\|u'-(T_bu)-\bigl[D_uT_b(u)\bigr]\Delta-D_bT_b(u)h\bigr\|_\theta\le C_0\bigl(\|\Delta\|_\theta^2+h^2\bigr)$$ with the constants absorbed into $C_0<\infty$. [given, step 2.2, F1, F4, algebra]

4.1 Lipschitz dependence and a priori bound: for $u\in\ell^\infty_\theta(\mathbb N)$ and $b,b'\in J$, $(T_{b'}u)_n=(T_bu)_n$ for $n\ge1$, while $\bigl|(T_{b'}u)_0-(T_bu)_0\bigr|\le c|b'-b|$; hence $\|T_{b'}u-T_bu\|_\theta\le c|b'-b|$ by [F1] and [F4]. Applying this with $u=u(b')$ and using [F3] gives $\|u(b')-u(b)\|_\theta\le q\|u(b')-u(b)\|_\theta+c|b'-b|$, hence $\|u(b')-u(b)\|_\theta\le c|b'-b|/(1-q)$. Taking $b'=b_*$ and using $u(b_*)=0$ (the zero sequence is the fixed point because $y$ itself solves the recurrence and $b=b_*$ produces the zero error) gives $\|u(b)\|_\theta\le c|b-b_*|/(1-q)$. [step 1.1, step 3.1, F1, F3, F4, algebra]

5.1 Differentiability: write $D_uT:=D_uT_b(u(b))$ and $D_bT:=D_bT_b(u(b))$ for the two partial derivatives of the map $(b,u)\mapsto T_bu$ at $(b,u(b))$. By step 3.2 applied to the fixed point equations $u(b+h)=T_{b+h}u(b+h)$ and $u(b)=T_bu(b)$, $$u(b+h)=u(b)+D_uT\,\Delta+D_bT\,h+R_1,\qquad \|R_1\|_\theta\le C_0\bigl(\|\Delta\|_\theta^2+h^2\bigr),$$ with $\Delta=u(b+h)-u(b)$. By step 2.2, $h\,d(b)=D_uT\,(h\,d(b))+D_bT\,h$; subtracting $h\,d(b)$ from the displayed equation and putting $R:=\Delta-h\,d(b)$ therefore yields $R=D_uT\,R+R_1$, whence $\|R\|_\theta\le q\|R\|_\theta+\|R_1\|_\theta$. By step 4.1, $\|\Delta\|_\theta\le c|h|/(1-q)$, so $\|R_1\|_\theta\le C_1h^2$ for $|h|$ small and hence $\|R\|_\theta\le C_1h^2/(1-q)$: that is, $u(b+h)=u(b)+h\,d(b)+O(h^2)$ in $\ell^\infty_\theta(\mathbb N)$. This proves differentiability with derivative $d(b)$ and identifies it with the solution of clause 3. [step 4.1, step 2.2, step 3.2, F1, F4, algebra]

5.2 Continuity of the derivative: by step 2.2 the difference of the linear operators at $b'$ and $b$ has coefficients $\partial_iM_{s_n}(z'_{n\pm1})-\partial_iM_{s_n}(z_{n\pm1})$, which tend to zero uniformly in $n$ as $b'\to b$ by uniform continuity of the $\partial_iM_u$ on the compact $J\times J$ and by the uniform estimate $|z'_k-z_k|\le c|b'-b|/(1-q)$ of step 4.1; the same holds for the forcing. Applying the difference estimate of step 4.1 to the fixed points $d(b'),d(b)$ of the affine maps gives $\|d(b')-d(b)\|_\theta\to0$. [step 4.1, step 2.2, F1, F4]

6.1 The curve: the map $b\mapsto\gamma(b)=(b,y_0+u_0(b))$ has components the identity and the affine function of $u_0$, and $b\mapsto u_0(b)$ is continuously differentiable by steps 5.1 and 5.2 with derivative $d_0(b)$; hence $\gamma$ is $C^1$ with the displayed derivative ([F5]). The bound $|d_0(b)|\le\|d(b)\|_\theta\le c/(1-q)$ is step 2.2. [step 2.2, step 5.1, step 5.2, F4, F5] ∎


## Remarks

- The lemma isolates the exact contractive mechanism used for both the unperturbed square-root recurrence and its perturbations: only the two partial-derivative bounds of the update and the existence of one reference half-orbit are used, not the explicit shape of $M_u$.

- The weighted growth $|u_n|\le\theta^n\|u\|_\theta$ is what makes the solution track the reference half-orbit exponentially; for the phase curve $\gamma$ this means that the forward orbits of its points converge to the same limit as the reference orbit, which is the stable-set membership used later.

- No choice principle is used: completeness of the weighted space comes from the complete space of bounded sequences, and the fixed points are unique.
