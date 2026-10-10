---
id: lem-em-spherical-mean-family-smoothness
kind: lemma
title: "Joint smoothness of the spherical-mean family of a smooth spacetime function"
status: draft
origin: pipeline
domain: mathematics
deps: [cor-mean-value-theorem, def-ck-and-multi-index-notation-in-several-variables, def-ck-euclidean-maps-and-diffeomorphisms, def-countable-choice, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-surface-integral-on-a-compact-c-one-hypersurface, lem-em-parameter-integrals, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-algebra-of-derivatives, thm-cauchy-schwarz-and-the-euclidean-norm, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-continuous-partial-derivatives-imply-total-differentiability, thm-extreme-value-metric, thm-heine-borel-rn, thm-total-derivative-computes-directional-and-partial-derivatives]
dependency_roles:
  cor-mean-value-theorem: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-em-parameter-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "\u00a77.1, printed pp. 167-170: the derivation of the spherical-mean/Kirchhoff formulas (7.9)-(7.13) differentiates the sphere integrals in their parameters; the argument is carried out on compact parameter sets with no support hypothesis"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "\u00a79.1.3, printed pp. 284-285: definition (9.1.14) of the spherical mean and Remark 9.1.3, where the mean is differentiated in the radius and the space variable under the sphere integral"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), declared by the surface-integral and parameter-integral conventions below. Let $t_0<T$ and let $h\in C^\infty(\mathbb R^3\times[t_0,T])$ in the extension sense: $h$ is the restriction of a $C^\infty$ function on $\mathbb R^3\times J$ for some open interval $J\supset[t_0,T]$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]). Let $d\Omega$ be the surface measure on the unit sphere $S^2\subset\mathbb R^3$ of total mass $\int_{S^2}d\Omega=4\pi$ ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[def-euclidean-inner-product]]), and define the spherical-mean family $$M(x,s,v):=\frac{1}{4\pi}\int_{S^2}h(x+sn,v)\,d\Omega(n),\qquad (x,s,v)\in\mathbb R^3\times\mathbb R\times[t_0,T].$$ Then $M$ is of class $C^\infty$ on $\mathbb R^3\times\mathbb R\times[t_0,T]$ in the same extension sense, and for every multi-index $\alpha$ in $x$ and all integers $m,l\ge0$ $$D_x^\alpha\partial_s^m\partial_v^lM(x,s,v)=\frac{1}{4\pi}\int_{S^2}D_x^\alpha\partial_s^m\partial_v^l\bigl[h(x+sn,v)\bigr]\,d\Omega(n),$$ where the right-hand integrand is the corresponding iterated partial derivative of the composed map $(x,s,v)\mapsto h(x+sn,v)$; in particular $\partial_s[h(x+sn,v)]=\nabla_x h(x+sn,v)\cdot n$, where $\nabla_xh(y,v):=(\partial_{y_0}h(y,v),\partial_{y_1}h(y,v),\partial_{y_2}h(y,v))\in\mathbb R^3$ is the spatial gradient at fixed $v$, so the $s$-derivatives are directional derivatives along $n$. Consequently, for every $c>0$ the map $\tilde H(x,t,v):=(t-v)\,M(x,c(t-v),v)$ is $C^\infty$ on $\mathbb R^3\times[t_0,T]\times[t_0,T]$ in the extension sense, and for every fixed $x\in\mathbb R^3$ the map $(t,v)\mapsto\tilde H(x,t,v)$ is $C^\infty$ on an open neighbourhood of the closed triangle $\{(t,v):t_0\le v\le t\le T\}$. Nothing here assumes decay, compact support or boundedness of $h$; the statement is local in $(x,s,v)$ and uses uniform bounds only on compact parameter sets.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$; times $t_0<T$; a $C^\infty$ function $h$ on an open set $\mathbb R^3\times J$ with $[t_0,T]\subset J$; and the surface measure $d\Omega$ on the unit sphere $S^2\subset\mathbb R^3$ of total mass $\int_{S^2}d\Omega=4\pi$.

[F1] A map is of class $C^k$ when every word iterated coordinate partial derivative of order at most $k$ exists and is continuous, and of class $C^\infty$ when it is $C^k$ for every $k$; $D^\alpha f=\partial_0^{\alpha_0}\cdots\partial_{m-1}^{\alpha_{m-1}}f$ is the canonical-order multi-index derivative, and for a coordinate word $w=(i_1,\ldots,i_r)$ write $D^w:=\partial_{i_r}\cdots\partial_{i_1}$, with the empty word denoting the identity, and let $w\cdot j$ denote appending the coordinate $j$, so $D^{w\cdot j}=\partial_jD^w$; partial derivatives are the one-variable derivatives along coordinate lines ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F2] Chain rule: if $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[F3] Finite sums, scalar multiples and products of $C^k$ Euclidean maps are $C^k$, and composites of composable $C^k$ maps are $C^k$, for every $k\in\mathbb N$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]); sums, scalar multiples and products of differentiable real functions differentiate by the sum, scalar-multiple and product rules ([[thm-algebra-of-derivatives]]).

[F4] If all first partial derivatives of $q$ exist on a neighbourhood of $a$ and are continuous at $a$, then $q$ is totally differentiable at $a$ with total derivative the Jacobian matrix; if $q$ is totally differentiable at $a$, then for every direction $u$ the directional derivative exists and $D_uq(a)=Dq(a)u=\sum_j\partial_jq(a)u_j$, which for scalar $q$ is $\langle\nabla q(a),u\rangle$ with the gradient $\nabla q$ of [[def-jacobian-matrix-and-gradient]] ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-euclidean-inner-product]]).

[F5] Parameter integrals: if $K\subseteq\mathbb R^n$ is compact, measurable and of finite Lebesgue measure, $a<b$, and $f$ and $\partial_tf$ are continuous on a neighbourhood of $K\times[a,b]$, then $t\mapsto\int_Kf(x,t)\,dx$ is differentiable on $[a,b]$ with derivative $\int_K\partial_tf(x,t)\,dx$; the same conclusion holds, under the $\mathrm{AC}_\omega$ convention of [[def-surface-integral-on-a-compact-c-one-hypersurface]], with surface measure on a fixed compact $C^1$ hypersurface in place of $K$; nothing is asserted for moving parameter sets or singularities crossing the integration set ([[lem-em-parameter-integrals]]).

[F6] On a compact embedded $C^1$ hypersurface $S$ the surface integral is defined by the finite chart formula with Gram density; for signed functions with $\int_S|f|\,dS<\infty$ it is the difference of the integrals of the positive and negative parts; the notation of this item fixes $\int_{S^2}1\,d\Omega=4\pi$ for the unit sphere $S^2=\{n\in\mathbb R^3:\langle n,n\rangle=1\}$ ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[def-euclidean-inner-product]]).

[F7] For nonnegative measurable $f\le g$ one has $\int f\le\int g$, and $\int cf=c\int f$ for $c\ge0$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F8] Mean value theorem: if $f:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable at every point of $(a,b)$, then there is $c\in(a,b)$ with $f(b)-f(a)=f'(c)(b-a)$ ([[cor-mean-value-theorem]]).

[F9] Closed boxes in $\mathbb R^m$ are compact in the Euclidean metric, and a continuous real-valued function on a nonempty compact metric space attains a maximum and a minimum ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

[F10] Cauchy-Schwarz: $|\sum_{j}u_jv_j|\le(\sum_ju_j^2)^{1/2}(\sum_jv_j^2)^{1/2}$ for real vectors, the right-hand factors being Euclidean norms ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-euclidean-inner-product]]).

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$: every at most countable family of nonempty sets has a choice function ([[def-countable-choice]]).



## Proof

**Proof technique:** direct.

1.1 The setting and the reduction to the open set $\Omega$. Let $h$ also denote the $C^\infty$ function on the open set $\mathbb R^3\times J$ whose restriction to $\mathbb R^3\times[t_0,T]$ is the $h$ of the statement, put $\Omega:=\mathbb R^3\times\mathbb R\times J$, an open subset of $\mathbb R^5$, and let $S^2=\{n\in\mathbb R^3:\langle n,n\rangle=1\}$ carry the surface measure $d\Omega$ of total mass $4\pi$ of [F6]. Define $M(x,s,v):=\frac{1}{4\pi}\int_{S^2}h(x+sn,v)\,d\Omega(n)$ for $(x,s,v)\in\Omega$; its restriction to the closed set $\mathbb R^3\times\mathbb R\times[t_0,T]$ is the family of the statement, so every assertion proved below on $\Omega$, or on an open neighbourhood of a closed subset of $\Omega$, restricts to the corresponding extension-sense assertion of the statement. All surface integrals are read under the $\mathrm{AC}_\omega$ convention carried by [F5] and [F6]. [given, A1, F5, F6]

1.2 The composed integrand. Define $\Phi:\Omega\times\mathbb R^3\to\mathbb R^4$ by $\Phi(x,s,v,n):=(x+sn,v)$. Each component of $\Phi$ is a finite sum of products of coordinate functions, so $\Phi$ is $C^\infty$ on the open set $\Omega\times\mathbb R^3$ by [F3], and $\Phi$ takes values in $\mathbb R^3\times J$. Hence $H:=h\circ\Phi$ is $C^\infty$ on $\Omega\times\mathbb R^3$ by the composition clause of [F3], so every word iterated partial derivative $D^vH$ exists and is continuous on $\Omega\times\mathbb R^3$ by [F1]. At $p=(x,s,v)\in\Omega$ and $n\in S^2$, the chain rule [F2], total differentiability of $h$ [F4] and $\partial_s\Phi(p,n)=(n,0)$ give $\partial_sH(p,n)=Dh(x+sn,v)(n,0)=\sum_{j<3}\partial_jh(x+sn,v)\,n_j=\langle\nabla_x h(x+sn,v),n\rangle$, the directional derivative of $h$ at $(x+sn,v)$ in direction $(n,0)$ [F4]; applying the same computation to the already differentiated integrands shows that the iterated derivatives $D_x^\alpha\partial_s^m\partial_v^lH(p,n)$ are the corresponding iterated partial derivatives of the composed map $(x,s,v)\mapsto h(x+sn,v)$, which is $H$ itself, and in particular that $\partial_s^mH(p,n)$ is the $m$-th iterated derivative at $\lambda=s$ of $\lambda\mapsto h(x+\lambda n,v)$. [given, F1, F2, F3, F4]

2.1 Local bounds on compact boxes. Let $K=\prod_{j<5}[a_j,b_j]$ be a nonempty closed box contained in $\Omega$. Then $K\times[-1,1]^3$ is a nonempty closed box in $\mathbb R^8$, hence compact by [F9], and by step 1.2 every $|D^vH|$ is continuous on the open set $\Omega\times\mathbb R^3$, which contains $K\times[-1,1]^3$; so by [F9] each $|D^vH|$ attains a maximum there and $C_v:=\max_{K\times[-1,1]^3}|D^vH|$ is a finite nonnegative real number with $|D^vH(p,n)|\le C_v$ for all $(p,n)\in K\times S^2$, because $S^2\subseteq[-1,1]^3$. [given, step 1.2, F9]

2.2 Continuity of parameter sphere integrals. Claim: if $q:\Omega\times\mathbb R^3\to\mathbb R$ is continuous with continuous first partial derivatives, $K\subseteq\Omega$ is a nonempty closed box and $|\partial_{p_j}q(p,n)|\le C_j$ for all $(p,n)\in K\times S^2$ and all $j<5$, then $\bigl|\int_{S^2}q(p,n)\,d\nu(n)-\int_{S^2}q(p_0,n)\,d\nu(n)\bigr|\le\bigl(\sum_{j<5}C_j^2\bigr)^{1/2}|p-p_0|$ for all $p,p_0\in K$, where $\nu:=d\Omega/4\pi$. Indeed, for fixed $n\in S^2$ the function $g(\lambda):=q(p_0+\lambda u,n)$, $u:=p-p_0$, is defined on $[0,1]$ because the box is convex, and the affine map $\lambda\mapsto(p_0+\lambda u,n)$ has constant partial derivatives, hence is totally differentiable by [F4]; the chain rule [F2] with total differentiability of $q$ [F4] therefore gives $g'(\lambda)=Dq(p_0+\lambda u,n)(u,0)=\sum_{j<5}\partial_{p_j}q(p_0+\lambda u,n)\,u_j$ at every $\lambda\in(0,1)$, and the mean value theorem [F8] bounds $|q(p,n)-q(p_0,n)|\le\sup_{\lambda}\bigl|\sum_j\partial_{p_j}q(p_0+\lambda u,n)\,u_j\bigr|\le\bigl(\sum_jC_j^2\bigr)^{1/2}|u|$ by Cauchy-Schwarz [F10] and the local bounds. Integrating this pointwise bound against $\nu$: the signed surface integral is the difference of the integrals of the positive and negative parts [F6], so $\bigl|\int_{S^2}q(p,\cdot)\,d\nu-\int_{S^2}q(p_0,\cdot)\,d\nu\bigr|\le\int_{S^2}|q(p,n)-q(p_0,n)|\,d\nu(n)\le\bigl(\sum_jC_j^2\bigr)^{1/2}|u|\int_{S^2}d\nu=\bigl(\sum_jC_j^2\bigr)^{1/2}|u|$, where the chart formula of [F6] with the monotonicity and scalar rules of [F7] gives monotonicity, the bound $\int_{S^2}c\,d\nu=c$ for constants $c\ge0$, and $\int_{S^2}d\nu=1$ from the normalisation $\int_{S^2}d\Omega=4\pi$ of [F6]. [given, step 1.2, F2, F4, F6, F7, F8, F10]

3.1 Induction: every word derivative of $M$ exists with the differentiated-integral formula, continuously. Claim: for every word $v$ in the five coordinate directions of $\Omega$, the iterated derivative $D^vM$ exists on $\Omega$ and equals $\int_{S^2}D^vH(p,n)\,d\nu(n)$, and this integral is continuous on $\Omega$. Prove the claim by induction on the length $r$ of the word. For $r=0$ it is the definition of $M$ in step 1.1 together with $\nu=d\Omega/4\pi$, and continuity is step 2.2 applied with $q:=H$, whose partial derivatives $D^{(j)}H$ are continuous with bounds $C_{(j)}$ on $K\times S^2$ by steps 1.2 and 2.1. Assume the claim for all words of length $r$; let $v$ be such a word and $j$ a coordinate direction, and fix $p_0\in\Omega$, a nonempty closed box $K\subseteq\Omega$ with $p_0$ in its interior and coordinate intervals $[a_j,b_j]$. For fixed coordinates other than the $j$-th and $t\in[a_j,b_j]$, put $Q(n,t):=D^vH(p(t),n)$, where $p(t)$ is the point of the $j$-th coordinate line with $j$-th coordinate $t$; then both $Q$ and $\partial_tQ=D^{v\cdot j}H(p(t),n)$ are continuous on an open neighbourhood of $S^2\times[a_j,b_j]$ in $\mathbb R^3\times\mathbb R$, being restrictions of the continuous $D^vH$ and $D^{v\cdot j}H$ of step 1.2. By the surface clause of [F5], $t\mapsto\int_{S^2}Q(n,t)\,d\Omega(n)$ is differentiable on $[a_j,b_j]$ with derivative $\int_{S^2}\partial_tQ(n,t)\,d\Omega(n)$; multiplying by the constant $1/4\pi$ (the scalar multiple rule for one-variable derivatives, [F3]) gives $\partial_j\int_{S^2}D^vH\,d\nu=\int_{S^2}D^{v\cdot j}H\,d\nu$ on the line through $p_0$; with the induction hypothesis this shows $D^{v\cdot j}M=\int_{S^2}D^{v\cdot j}H\,d\nu$ on that line, hence on all of $\Omega$ since $p_0$ and $j$ are arbitrary, and this integral is continuous on $\Omega$ by step 2.2 applied to $q:=D^{v\cdot j}H$, whose partial derivatives $D^{(v\cdot j)\cdot i}H$ are continuous by step 1.2 with bounds $C_{(v\cdot j)\cdot i}$ on $K\times S^2$ by step 2.1. This closes the induction. [step 1.1, step 1.2, step 2.1, step 2.2, F1, F3, F5]

4.1 $M$ is $C^\infty$ and satisfies the displayed formula. By step 3.1 every word iterated partial derivative of $M$ exists and is continuous on the open set $\Omega$, so $M$ is of class $C^\infty$ on $\Omega$ by [F1]; in particular its restriction to $\mathbb R^3\times\mathbb R\times[t_0,T]$ is $C^\infty$ in the extension sense of the statement. Every canonical-order derivative $D_x^\alpha\partial_s^m\partial_v^lM$ is one of the word derivatives covered by step 3.1, so it equals the sphere integral of the corresponding word derivative $D_x^\alpha\partial_s^m\partial_v^lH$ of the composed map, and step 1.2 identifies those integrands as the corresponding iterated partial derivatives of $(x,s,v)\mapsto h(x+sn,v)$; the asserted $s$-derivative statements are those of step 1.2. [step 1.2, step 3.1, F1]

5.1 The composed map $\tilde H$ and the local nature of the argument. Let $c>0$ and define $\tilde H(x,t,v):=(t-v)M(x,c(t-v),v)$ on the open set $\mathbb R^3\times\mathbb R\times J$. The map $\Psi(x,t,v):=(x,c(t-v),v)$ has components that are finite sums of products of coordinate functions, so it is $C^\infty$ by [F3] and takes values in $\Omega$; hence $(x,t,v)\mapsto M(\Psi(x,t,v))$ is $C^\infty$ by composition [F3] with step 4.1, and multiplying by the $C^\infty$ function $t-v$ gives that $\tilde H$ is $C^\infty$ on $\mathbb R^3\times\mathbb R\times J$ by [F3]. Since $[t_0,T]\subset J$ and the closed triangle $\Delta=\{(t,v):t_0\le v\le t\le T\}$ is contained in $[t_0,T]\times[t_0,T]\subset J\times J$, the restriction shows that $\tilde H$ is $C^\infty$ on $\mathbb R^3\times[t_0,T]\times[t_0,T]$ in the extension sense, and for each fixed $x$ the map $(t,v)\mapsto\tilde H(x,t,v)$ is $C^\infty$ on the open neighbourhood $J\times J$ of $\Delta$. The whole argument used only the bounds of step 2.1 on compact parameter boxes and the compactness of $S^2$; no boundedness, decay or compact spatial support of $h$ was assumed or used. [step 2.1, step 4.1, F3] ∎
