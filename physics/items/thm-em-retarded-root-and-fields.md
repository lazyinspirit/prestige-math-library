---
id: thm-em-retarded-root-and-fields
kind: theorem
title: "Complete retarded point fields: unique retarded root, the delta substitution with denominator $1-n\\cdot\\beta$, Liénard–Wiechert potentials and fields, and a uniform far-zone remainder"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 5
proof_strategy: direct
deps:
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-countable-choice
  - def-cross-product-in-r3
  - def-directional-and-partial-derivatives
  - def-em-potential-gauge-and-field-conventions
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
  - def-vector-valued-derivative-and-integral
  - lem-cross-product-is-bilinear-alternating-and-orthogonal
  - lem-em-global-retarded-root
  - lem-em-point-current-continuity
  - lem-em-point-retarded-potential-and-fields
  - lem-em-retarded-wave-kernel
  - thm-algebra-of-derivatives
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-chain-rule-for-total-derivatives
  - thm-integral-triangle-inequality
  - thm-intermediate-value
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-em-potential-gauge-and-field-conventions: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  lem-em-global-retarded-root: mathematical-premise
  lem-em-point-current-continuity: mathematical-premise
  lem-em-point-retarded-potential-and-fields: mathematical-premise
  lem-em-retarded-wave-kernel: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-parametrized-implicit-function-theorem-with-higher-regularity: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§62-§63 printed pp. 158-163: the root equation (63.1) with the uniqueness footnote, the implicit derivatives (63.6)-(63.7), the potentials (63.5) and the field (63.8)-(63.9) with the 1/R^2 velocity part and the 1/R acceleration part; §66 printed pp. 170-172: the large-distance 1/R fields and the t-R'/c combination"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§10.3.1 printed pp. 429-434: the retarded-time equation (10.33), the single-retarded-point argument, the factor (1-n.v/c)^{-1} of (10.37)-(10.38) and the potentials (10.39)-(10.40); §10.3.2 printed pp. 435-441: (10.65)-(10.66) and the velocity/acceleration-field discussion on p. 438"
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§6.4.1-§6.4.3 printed pp. 157-164: the delta substitution (6.33)-(6.34) with df/dt'=1-R.v/c, the retarded-time equation (6.36), the kappa bookkeeping (6.39)-(6.41) and the fields (6.42), (6.44)-(6.45)"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), used through the change-of-variables corollaries inside the proof of the retarded-convolution identity cited in clause (b) ([[def-countable-choice]]). Let $c>0$, let $v_*<c$, let $z:\mathbb R\to\mathbb R^3$ be of class $C^3$ with $|z'(s)|\le v_*$ for every $s\in\mathbb R$ ([[def-vector-valued-derivative-and-integral]], [[def-ck-euclidean-maps-and-diffeomorphisms]]), let $q\in\mathbb R$ and $\varepsilon_0>0$, put $\mu_0:=(c^2\varepsilon_0)^{-1}$ and $C:=q/(4\pi\varepsilon_0)$, and write $\Omega:=\mathbb R^3\times\mathbb R$ and $\Gamma:=\{(z(s),s):s\in\mathbb R\}$.

(a) [Root and emission-time Jacobian] For every $(x,t)\in\Omega\setminus\Gamma$ (equivalently $x\ne z(t)$) there is exactly one $s=s(x,t)<t$ with $t-s=|x-z(s)|/c$. The map $s:\Omega\setminus\Gamma\to\mathbb R$ is of class $C^3$, and with $R:=x-z(s)$, $r:=|R|$, $n:=R/r$, $\beta:=z'(s)/c$ and $\kappa:=1-n\cdot\beta$ ([[def-euclidean-inner-product]]) one has $$\partial_ts(x,t)=\kappa^{-1},\qquad \nabla_xs(x,t)=-\frac{n}{c\,\kappa},\qquad \kappa\in[1-v_*/c,\,1+v_*/c],$$ so $\kappa\ge 1-v_*/c>0$ uniformly on $\Omega\setminus\Gamma$. Moreover, for the fixed $x$ and near the root, the function $s'\mapsto s'+|x-z(s')|/c$ is differentiable at $s'=s$ with derivative $\kappa(x,t)$: this emission-time Jacobian $1-n\cdot\beta$ is the denominator produced by the delta substitution of clause (b).

(b) [Delta substitution and Liénard-Wiechert potentials] Let $\rho,J\in\mathcal D'(\Omega)$ be the point-source distributions of [[lem-em-point-current-continuity]] attached to $q$ and the worldline $z$, let $K$ be the retarded wave kernel of [[lem-em-retarded-wave-kernel]], and for $\psi\in\mathcal D(\Omega)$ put $(K\circledast\psi)(y,\tau):=\langle K,\psi(y+\cdot,\tau+\cdot)\rangle$ and define the retarded-history pairings by the explicit integrals $\langle\Phi,\psi\rangle:=(q/\varepsilon_0)\int_{\mathbb R}(K\circledast\psi)(z(s),s)\,ds$, $\langle\Upsilon,\psi\rangle:=\mu_0q\int_{\mathbb R}z'(s)(K\circledast\psi)(z(s),s)\,ds$, componentwise in the second case. These are the history-integral interpretation supplied by clause (b) of [[lem-em-point-retarded-potential-and-fields]], not ordinary distribution action on a noncompact test. Then these pairings are finite for every $\psi$ and their exact retarded-convolution values are $$\langle\Phi,\psi\rangle=\int_{\Omega\setminus\Gamma}\frac{C\,\psi}{\kappa\,r}\,dx\,dt,\qquad \langle\Upsilon,\psi\rangle=\int_{\Omega\setminus\Gamma}\frac{\beta}{c}\,\frac{C\,\psi}{\kappa\,r}\,dx\,dt$$ (the second identity componentwise); equivalently, $\Phi$ and $\Upsilon$ are the regular distributions of the locally integrable zero extensions to $\Gamma$ of the $C^2$ functions $\varphi:=C/(\kappa r)$ and $A:=\beta\varphi/c$ on $\Omega\setminus\Gamma$. The weight $(\kappa r)^{-1}$ with $\kappa=1-n\cdot\beta$ is the exact form of the substitution with denominator $1-n\cdot\beta$ (the rigorous statement is the displayed pairing identity; composition of $\delta$ with a function is not part of the distribution calculus used here).

(c) [Fields and the velocity/acceleration split] With $E:=-\nabla\varphi-\partial_tA$ and $B:=\operatorname{curl}A$ on $\Omega\setminus\Gamma$ ([[def-em-potential-gauge-and-field-conventions]]), and writing $\dot\beta:=z''(s)/c$ at the root, $$E=E_{\mathrm{vel}}+E_{\mathrm{acc}},\qquad E_{\mathrm{vel}}=\frac{C(1-|\beta|^2)(n-\beta)}{\kappa^3r^2},\qquad E_{\mathrm{acc}}=\frac{C\,n\times\bigl((n-\beta)\times\dot\beta\bigr)}{c\,\kappa^3r},\qquad B=\frac{n\times E}{c}$$ at every event of $\Omega\setminus\Gamma$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]). Both $E$ and $B$ are $C^1$ on $\Omega\setminus\Gamma$, and the velocity field obeys the bound $$|E_{\mathrm{vel}}(x,t)|\le |C|\,\frac{1+v_*/c}{(1-v_*/c)^3}\,r(x,t)^{-2}$$ at every event.

(d) [Uniform far-zone remainder] For every $s_0\in\mathbb R$ and every $n\in\mathbb R^3$ with $|n|=1$, put $x_r:=z(s_0)+rn$ and $t_r:=s_0+r/c$ for $r>0$, and set $\beta_0:=z'(s_0)/c$, $\dot\beta_0:=z''(s_0)/c$, $\kappa_0:=1-n\cdot\beta_0$. Then $(x_r,t_r)\in\Omega\setminus\Gamma$ and $s(x_r,t_r)=s_0$ for every $r>0$, and $$E(x_r,t_r)=\frac{C\,n\times\bigl((n-\beta_0)\times\dot\beta_0\bigr)}{c\,\kappa_0^3\,r}+\rho_E(s_0,n,r),\qquad B(x_r,t_r)=\frac{n\times E(x_r,t_r)}{c},$$ where the remainder is bounded uniformly in the direction, $$|\rho_E(s_0,n,r)|\le |C|\,\frac{1+v_*/c}{(1-v_*/c)^3}\,r^{-2}\qquad\text{for every }n\in S^2\text{ and every }r>0.$$ Equivalently, $rE(x_r,t_r)\to C\,n\times((n-\beta_0)\times\dot\beta_0)/(c\,\kappa_0^3)$ as $r\to\infty$, uniformly over $n\in S^2$ at the explicit rate $O(r^{-1})$ given by the same bound multiplied by $r$. The uniformity is in the direction $n$ at a fixed emission event $s_0$; no uniformity in $s_0$ is asserted ($z''$ is not assumed bounded), and no finite-energy, decay or radiation-flux conclusion is drawn.

This is a mathematical model computation for the stipulated $C^3$ uniformly subluminal worldline and the retarded choice; no self-force law, no radiation-reaction postulate and no physical Maxwell coupling is asserted or proved, and the uniform speed bound and the exclusion of $\Gamma$ are essential hypotheses (see the companion example page).

## Facts & Assumptions

**Given:** A speed $c>0$, a real bound $v_*<c$, a worldline $z:\mathbb R\to\mathbb R^3$ of class $C^3$ with $|z'(s)|\le v_*$ for every $s\in\mathbb R$, a real $q$ and a positive $\varepsilon_0$, together with the constants $\mu_0=(c^2\varepsilon_0)^{-1}$, $C=q/(4\pi\varepsilon_0)$ and the sets $\Omega=\mathbb R^3\times\mathbb R$, $\Gamma=\{(z(s),s):s\in\mathbb R\}$.

[F1] Let $c>0$, $0\le v_*<c$ and $z:\mathbb R\to\mathbb R^3$ of class $C^1$ with $|z'(s)|\le v_*$ for every $s$. Then for every $(x,t)\in\mathbb R^3\times\mathbb R$ there is exactly one real root $s=s(x,t)$ of $t-s=|x-z(s)|/c$, and $s\le t$ with equality exactly when $x=z(t)$; on the open off-instantaneous-worldline domain $D=\{(x,t):x\ne z(t)\}$ one has $s<t$, $r=|x-z(s)|=c(t-s)>0$, the root is $C^1$, and with $n=(x-z(s))/r$, $\beta=z'(s)/c$, $\kappa=1-n\cdot\beta$ its derivatives are $\partial_ts=1/\kappa$ and $\nabla_xs=-n/(c\kappa)$, where $1-v_*/c\le\kappa\le1+v_*/c$. If $z$ is $C^k$ for an integer $k\ge1$, the root is $C^k$ on $D$; in particular a $C^3$ trajectory gives a $C^3$ root ([[lem-em-global-retarded-root]]).

[F2] For $f:A\to\mathbb R^m$ with $A\subseteq\mathbb R$ and a limit point $c\in A$, $f$ is differentiable at $c$ when the difference quotients $q_{f,c}(x)=\frac{1}{x-c}(f(x)-f(c))$ converge as $x\to c$, and then the derivative is the limit $f'(c):=\lim_{x\to c}q_{f,c}(x)\in\mathbb R^m$; the notion is intrinsic and is computed componentwise ([[def-vector-valued-derivative-and-integral]]).

[F3] A map $f:U\to\mathbb R^q$ on an open $U\subseteq\mathbb R^m$ is of class $C^k$ when every word of at most $k$ coordinate partial derivatives of each component exists and is continuous, including the word of length zero; it is smooth when it is $C^k$ for every $k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F4] On $\mathbb R^n$ the Euclidean inner product is $\langle x,y\rangle=\sum_{k<n}x_ky_k$, it is bilinear and symmetric, $\langle z,z\rangle\ge0$ with $\langle z,z\rangle=0$ only for $z=0$, and the Euclidean norm is $\lVert x\rVert_2=\sqrt{\langle x,x\rangle}$ ([[def-euclidean-inner-product]]).

[F5] For all $x,y\in\mathbb R^n$ one has $\lvert\langle x,y\rangle\rvert\le\lVert x\rVert_2\lVert y\rVert_2$; $\lVert\cdot\rVert_2$ is a norm, so $\lVert u+v\rVert_2\le\lVert u\rVert_2+\lVert v\rVert_2$ and $\lVert\lambda u\rVert_2=\lvert\lambda\rvert\lVert u\rVert_2$, and consequently the reverse triangle inequality $\lvert\lVert u\rVert_2-\lVert v\rVert_2\rvert\le\lVert u-v\rVert_2$ holds ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F6] Let $I\subseteq\mathbb R$ be an open interval, $z:I\to\mathbb R^3$ a $C^1$ trajectory, $q\in\mathbb R$, and $\Omega\supseteq\Gamma$ open on which the graph map is proper. Then $\langle\rho,\psi\rangle=q\int_I\psi(z(t),t)dt$ and $\langle J,\psi\rangle=q\int_Iz'(t)\psi(z(t),t)dt$ define distributions with $\partial_t\rho+\operatorname{div}J=0$; properness is automatic for $\Omega=\mathbb R^3\times I$, in particular for the all-time history $I=\mathbb R$ ([[lem-em-point-current-continuity]]).

[F7] The retarded wave kernel is the distribution $K$ on $\mathbb R^3\times\mathbb R$ given by $\langle K,\psi\rangle=\frac{1}{4\pi}\int_{\mathbb R^3}\frac{\psi(y,\lvert y\rvert/c)}{\lvert y\rvert}dy$, and for $(y,\tau)\in\mathbb R^3\times\mathbb R$ the shifted pairing $(K\circledast\psi)(y,\tau):=\langle K,\psi(y+\cdot,\tau+\cdot)\rangle$ equals the absolutely convergent integral $\frac{1}{4\pi}\int\frac{\psi(y+z,\tau+\lvert z\rvert/c)}{\lvert z\rvert}dz$ ([[lem-em-retarded-wave-kernel]]).

[F8] Assume $\mathrm{AC}_\omega$. Let $c>0$, $q\in\mathbb R$, $\varepsilon_0>0$ and let $z:\mathbb R\to\mathbb R^3$ be $C^3$ with $|z'(s)|\le v_*<c$ for all $s$. With $K$ the retarded kernel of [F7] and, for tests $\psi$, $\langle\Phi,\psi\rangle=(q/\varepsilon_0)\int_{\mathbb R}(K\circledast\psi)(z(s),s)ds$, $\langle\Upsilon,\psi\rangle=\mu_0q\int_{\mathbb R}z'(s)(K\circledast\psi)(z(s),s)ds$ componentwise, these pairings are finite for every $\psi$ and satisfy the exact retarded-convolution identities $\langle\Phi,\psi\rangle=\int_{\Omega\setminus\Gamma}\frac{C\psi}{\kappa r}dxdt$ and $\langle\Upsilon,\psi\rangle=\int_{\Omega\setminus\Gamma}\frac{\beta}{c}\frac{C\psi}{\kappa r}dxdt$; consequently $\Phi$ and $\Upsilon$ are the regular distributions of the locally integrable zero extensions of the $C^2$ functions $\varphi=C/(\kappa r)$ and $A=\beta\varphi/c$ on $\Omega\setminus\Gamma$ ([[lem-em-point-retarded-potential-and-fields]]).

[F9] In the situation of [F8], the fields $E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$ on $\Omega\setminus\Gamma$ satisfy $$E=C\Bigl[\frac{(1-\lvert\beta\rvert^2)(n-\beta)}{\kappa^3r^2}+\frac{n\times((n-\beta)\times\dot\beta)}{c\kappa^3r}\Bigr],\qquad B=\frac{n\times E}{c}$$ and are of class $C^1$ there, where $\dot\beta=z''(s)/c$ is evaluated at the retarded root ([[lem-em-point-retarded-potential-and-fields]]).

[F10] For $c>0$ and an open $\Omega\subseteq\mathbb R^3\times\mathbb R$, a $C^k$ scalar-vector potential pair $(\varphi,A)$ on $\Omega$ with $k\ge1$ has fields $E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$, both of class $C^{k-1}$ ([[def-em-potential-gauge-and-field-conventions]]).

[F11] The right-handed cross product on $\mathbb R^3$ is $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$ ([[def-cross-product-in-r3]]); it is bilinear and alternating, $\langle u\times v,w\rangle=\det[u\ v\ w]$, and $u\times v$ is orthogonal to both $u$ and $v$ ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

[F12] $\mathrm{AC}_\omega$: every family $(X_n)_{n\in\mathbb N}$ of nonempty sets has a choice function ([[def-countable-choice]]).

## Proof

**Given:** The hypotheses of the Statement: $c>0$, $v_*<c$, a $C^3$ worldline $z$ with $|z'(s)|\le v_*$ for every $s$, $q\in\mathbb R$, $\varepsilon_0>0$, and the derived data $\mu_0$, $C$, $\Omega$, $\Gamma$.

**Proof technique:** direct: clause (a) is the root lemma together with the one-variable computation of the emission-time Jacobian; clause (b) is the supplier's pairing identity read in the stated history-integral interpretation; clause (c) is the supplier's field formula with an elementary uniform bound; clause (d) evaluates the field on the ray family and reads off the uniform limit.

1.1 Hypothesis audit and the root. The hypothesis gives $0\le|z'(0)|\le v_*$, so $0\le v_*<c$, and $z$ is of class $C^3$, hence $C^1$; the root lemma [F1] therefore applies with these $c$, $v_*$, $z$, and since $z$ is $C^3$ its $C^k$ branch with $k=3$ applies. Hence for every $(x,t)\in\Omega\setminus\Gamma$ there is exactly one $s=s(x,t)<t$ with $t-s=|x-z(s)|/c$, the root map is of class $C^3$ on $\Omega\setminus\Gamma$, and with $R=x-z(s)$, $r=|R|>0$, $n=R/r$, $\beta=z'(s)/c$, $\kappa=1-n\cdot\beta$ one has $\partial_ts=\kappa^{-1}$, $\nabla_xs=-n/(c\kappa)$ and $1-v_*/c\le\kappa\le1+v_*/c$, so $\kappa\ge1-v_*/c>0$. The differentiability vocabulary and the $C^k$ vocabulary used throughout are [F2] and [F3]. [F1, F2, F3, given]

1.2 The norm term. Fix $(x,t)\in\Omega\setminus\Gamma$ with root $s$ and put $R=x-z(s)$, $r=\lVert R\rVert_2>0$, $n=R/r$; I show that $\psi(s'):=\lVert x-z(s')\rVert_2$ is differentiable at $s'=s$ with $\psi'(s)=-\langle z'(s),R\rangle/r$. For $h\ne0$ put $V_h:=\frac{z(s+h)-z(s)}{h}$; by [F2] one has $V_h\to z'(s)$ as $h\to0$, so with $M:=\lVert z'(s)\rVert_2+1$ there is $\delta>0$ with $\lVert V_h\rVert_2\le M$ for $0<\lvert h\rvert<\delta$; shrinking $\delta$ if necessary so that $M\delta<r/2$, the vector $w_2:=x-z(s+h)$ satisfies $\lVert w_2-R\rVert_2=\lVert z(s+h)-z(s)\rVert_2=\lvert h\rvert\lVert V_h\rVert_2\le M\lvert h\rvert$ and $\lVert w_2\rVert_2\ge r-M\lvert h\rvert>r/2$. Writing $w_1:=R$, the identity $\lVert w_2\rVert_2-\lVert w_1\rVert_2=\frac{\langle w_2-w_1,\,w_2+w_1\rangle}{\lVert w_2\rVert_2+\lVert w_1\rVert_2}$ holds, because $\lVert w_2\rVert_2^2-\lVert w_1\rVert_2^2=\langle w_2+w_1,w_2-w_1\rangle$ by bilinearity and symmetry and the denominator is positive [F4]; since $w_2-w_1=-hV_h$, dividing by $h$ gives $\frac{\psi(s+h)-\psi(s)}{h}=-\langle V_h,U_h\rangle$ with $U_h:=\frac{w_1+w_2}{\lVert w_1\rVert_2+\lVert w_2\rVert_2}$. The triangle inequality gives $\lVert U_h\rVert_2\le1$, and $\lVert U_h-n\rVert_2=\frac{\lVert rw_2-\lVert w_2\rVert_2w_1\rVert_2}{r(r+\lVert w_2\rVert_2)}\le\frac{2\lVert w_2-w_1\rVert_2}{r+\lVert w_2\rVert_2}\le\frac{2M\lvert h\rvert}{r}$, where the middle step is the reverse triangle inequality [F5]. Cauchy-Schwarz then gives $\lvert\langle V_h,U_h\rangle-\langle z'(s),n\rangle\rvert\le\lVert V_h-z'(s)\rVert_2\lVert U_h\rVert_2+\lVert z'(s)\rVert_2\lVert U_h-n\rVert_2\le\lVert V_h-z'(s)\rVert_2+\lVert z'(s)\rVert_2\frac{2M\lvert h\rvert}{r}$, which tends to $0$ as $h\to0$; hence the difference quotients converge and $\psi'(s)=-\langle z'(s),n\rangle=-n\cdot z'(s)$ [F5]. [F2, F4, F5, algebra]

1.3 The ray family. Fix $s_0\in\mathbb R$ and $n\in\mathbb R^3$ with $\lVert n\rVert_2=1$, and let $r>0$; put $x_r:=z(s_0)+rn$ and $t_r:=s_0+r/c$. Then $t_r-s_0=r/c=\lVert x_r-z(s_0)\rVert_2/c$, so $s_0$ solves the retarded equation at the event $(x_r,t_r)$; by the uniqueness in [F1] applied at that event the root is $s(x_r,t_r)=s_0$, and since $s_0<t_r$, the equality clause of [F1], which says that the root equals $t$ exactly when the observation point is $z(t)$, gives $x_r\ne z(t_r)$, that is $(x_r,t_r)\in\Omega\setminus\Gamma$. [F1, given, algebra]

2.1 Emission-time Jacobian. With the fixed $x$ of step 1.2, the function $g_x(s'):=s'+\frac{1}{c}\lVert x-z(s')\rVert_2$ is differentiable at $s'=s$, as the sum of the identity map, whose derivative is $1$, and the constant multiple $\frac1c\psi$ of the differentiable map $\psi$ of step 1.2, and its derivative is $g_x'(s)=1-\frac{1}{c}n\cdot z'(s)=1-n\cdot\beta=\kappa(x,t)$, using $\beta=z'(s)/c$ and $\kappa=1-n\cdot\beta$ from step 1.1; this is exactly the emission-time Jacobian $1-n\cdot\beta$ asserted in clause (a). [step 1.2, F1, F2, algebra]

2.2 Clause (b). The definitions of the retarded-history pairings in clause (b) coincide with [F8], with the same signed constant $C=q/(4\pi\varepsilon_0)$, the same $\beta=z'(s)/c$ and $\kappa=1-n\cdot\beta$ of step 1.1, and the same shifted-kernel pairing $(K\circledast\psi)$ of [F7]; the point-source distributions and their continuity equation are [F6], whose proper-graph hypothesis is automatic for the all-time history $I=\mathbb R$. The supplier [F8] proves, under $\mathrm{AC}_\omega$ [F12], that the pairings are finite for every test, that the displayed exact identities hold, and that $\Phi$ and $\Upsilon$ are the regular distributions of the locally integrable zero extensions of $\varphi=C/(\kappa r)$ and $A=\beta\varphi/c$, which are $C^2$ on $\Omega\setminus\Gamma$ by the supplier's regularity branch fed by the $C^3$ root of step 1.1; this is the whole content of clause (b). [F6, F7, F8, F12, step 1.1, given]

2.3 Clause (c). By step 1.1 and [F8] the pair $(\varphi,A)$ is a $C^2$ potential pair on $\Omega\setminus\Gamma$, so [F10] identifies its fields as $E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$, both $C^1$; the supplier's formula [F9] gives the displayed $E$ and $B$, whose acceleration numerator is the cross product of [F11], and splitting the bracket defines $E_{\mathrm{vel}}$ and $E_{\mathrm{acc}}$ as in the Statement. For the bound, at every event $\lVert n\rVert_2=1$ and $\lVert\beta\rVert_2=\lVert z'(s)\rVert_2/c\le v_*/c$, so $\lvert1-\lVert\beta\rVert_2^2\rvert\le1$ and the triangle inequality [F5] gives $\lVert n-\beta\rVert_2\le1+\lVert\beta\rVert_2\le1+v_*/c$; with $\kappa\ge1-v_*/c>0$ from step 1.1 this yields $\kappa^3\ge(1-v_*/c)^3$ and hence $\lVert E_{\mathrm{vel}}(x,t)\rVert_2\le\lvert C\rvert\frac{1+v_*/c}{(1-v_*/c)^3}r^{-2}$, the signed constant $C$ being kept in the formula and $\lvert C\rvert$ used in the bound. [step 1.1, F5, F8, F9, F10, F11, algebra]

3.1 The far-zone expansion. At the event $(x_r,t_r)$ of step 1.3 the retarded data are the root $s_0$, the separation $x_r-z(s_0)=rn$, the retarded distance $\lVert x_r-z(s_0)\rVert_2=r$, which is the ray parameter, the unit vector $n$, and $\beta=\beta_0=z'(s_0)/c$, $\dot\beta=\dot\beta_0=z''(s_0)/c$, $\kappa=\kappa_0=1-n\cdot\beta_0$; hence step 2.3 gives $E(x_r,t_r)=\frac{Cn\times((n-\beta_0)\times\dot\beta_0)}{c\kappa_0^3r}+\rho_E(s_0,n,r)$ with $\rho_E(s_0,n,r):=E_{\mathrm{vel}}(x_r,t_r)$ and $B(x_r,t_r)=\frac{n\times E(x_r,t_r)}{c}$, while the uniform bound of step 2.3 gives $\lvert\rho_E(s_0,n,r)\rvert\le\lvert C\rvert\frac{1+v_*/c}{(1-v_*/c)^3}r^{-2}$ for every unit $n$ and every $r>0$. Multiplying by $r$ yields $\bigl\lVert rE(x_r,t_r)-\frac{Cn\times((n-\beta_0)\times\dot\beta_0)}{c\kappa_0^3}\bigr\rVert_2\le\lvert C\rvert\frac{1+v_*/c}{(1-v_*/c)^3}\frac1r$, which tends to $0$ as $r\to\infty$ with a constant depending only on $C$, $v_*$ and $c$; hence $rE(x_r,t_r)\to\frac{Cn\times((n-\beta_0)\times\dot\beta_0)}{c\kappa_0^3}$ uniformly over the unit directions $n$ at the fixed emission event $s_0$, at the explicit rate $O(r^{-1})$, and no bound on $z''$ enters the remainder. [F5, F11, step 1.3, step 2.3, algebra]

4.1 Assembly. Steps 1.1 and 2.1 give clause (a): at every event off the worldline there is a unique retarded root strictly below the observation time, the root map is $C^3$, $\partial_ts=\kappa^{-1}$, $\nabla_xs=-n/(c\kappa)$ and $1-v_*/c\le\kappa\le1+v_*/c$, and the emission-time Jacobian is $1-n\cdot\beta=\kappa$; step 2.2 gives clause (b) with the finiteness of the history pairings, the exact pairing identities and the identification of $\Phi,\Upsilon$ as the regular distributions of the zero extensions of the $C^2$ potentials $\varphi=C/(\kappa r)$ and $A=\beta\varphi/c$; step 2.3 gives clause (c) with the velocity/acceleration split, the $C^1$ regularity and the uniform velocity-field bound; and steps 1.3 and 3.1 give clause (d) with $s(x_r,t_r)=s_0$, the expansion, the direction-uniform remainder bound and the equivalent $O(r^{-1})$ limit of $rE$. All hypotheses are those of the Statement, $\mathrm{AC}_\omega$ is assumed and used only through clause (b), the signed constant $C$ is retained in the field formulas while the bounds use $\lvert C\rvert$, and no self-force, radiation-reaction, Maxwell-coupling, finite-energy, decay or flux conclusion is asserted. [given, step 1.1, step 1.3, step 2.1, step 2.2, step 2.3, step 3.1] ∎
