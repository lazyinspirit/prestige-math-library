---
id: pthm-em-retarded-potentials
kind: physics-theorem
title: "Retarded potentials, Lorenz gauge and Maxwell fields of a compactly supported conserved smooth source"
domain: physics
status: draft
origin: pipeline
dependency_level: 19
deps: [post-em-radiation-selection, pthm-em-charge-continuity, lem-em-retarded-wave-kernel, thm-em-wave-cauchy-kirchhoff, pthm-em-lorenz-gauge-wave-form, post-em-vacuum-maxwell, def-em-sources, def-em-potential-gauge-and-field-conventions, def-em-fields, def-em-lab-geometry, def-em-si-conventions, lem-em-parameter-integrals, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, cor-c-one-change-of-variables-for-l-one-functions, thm-differentiation-under-the-integral-sign, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-polar-coordinates-formula-for-lebesgue-measure, def-ck-euclidean-maps-and-diffeomorphisms, def-countable-choice]
dependency_roles:
  post-em-radiation-selection: physical-assumption
  pthm-em-charge-continuity: physical-result
  lem-em-retarded-wave-kernel: mathematical-premise
  thm-em-wave-cauchy-kirchhoff: mathematical-premise
  pthm-em-lorenz-gauge-wave-form: physical-result
  post-em-vacuum-maxwell: physical-assumption
  def-em-sources: formulation-prerequisite
  def-em-potential-gauge-and-field-conventions: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  lem-em-parameter-integrals: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Retarded potentials and fields of a prescribed smooth conserved source of compact spatial support in a compact time interval, on the whole laboratory spacetime in the framework's inertial chart: Lorenz gauge, the smooth vacuum Maxwell equations, zero field before the source acts, the zero-data Cauchy identification and zero total charge. Excluded: point, line, sheet or non-integrable sources; weak/distributional branches; eternal isolated charges; finite-energy, decay or boundary claims; self-force and radiation reaction; and every empirical or measurement claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted 236-page PDF, title page dated Lent Term 2015)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.1$ printed pp. 134-143: retarded potentials from the wave Green function ($\\S6.1.1$-$\\S6.1.2$ pp. 135-142) and the check of the Lorenz-gauge condition for the retarded solution ($\\S6.1.3$ pp. 142-143); read in the retained full text."
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted HTML lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node50.html"
      locator: "Nodes 49-52 ('Green's functions', 'Retarded potentials', 'Advanced potentials?', 'Retarded fields') of chapter 4: the retarded potentials are obtained from the wave Green function and the retarded fields computed from them; the source also displays the advanced alternative, matching this item's selection statement."
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS (author-hosted 176-page script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "$\\S11.2$ printed pp. 11.4-11.7 (PDF pp. 124-127): retarded/advanced Green kernels and the causal potential construction with the sourced wave equations; used for the formulation of the retarded pair and the zero-incoming-field reading."
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$) as carried by the retarded-kernel and Cauchy suppliers below ([[def-countable-choice]]). Let the laboratory region, chart and units be those of [[def-em-lab-geometry]] and [[def-em-si-conventions]], so that $c>0$, $\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$ and $W:=c^{-2}\partial_t^2-\Delta$ is the wave expression of [[def-em-potential-gauge-and-field-conventions]]. Let $a>0$, $t_0<T$ and let $\rho:\mathbb R^3\times\mathbb R\to\mathbb R$, $J:\mathbb R^3\times\mathbb R\to\mathbb R^3$ be source fields of [[def-em-sources]] that are jointly of class $C^\infty$ in the sense of [[def-ck-euclidean-maps-and-diffeomorphisms]], vanish identically outside the compact set $\overline B_a(0)\times[t_0,T]$, and satisfy the continuity equation $\partial_t\rho+\operatorname{div}J=0$ everywhere --- the compatibility condition that [[pthm-em-charge-continuity]] shows to be forced by the Maxwell system, here assumed for the prescribed source. Define the retarded potentials by the explicit retarded integrals

$$\varphi(x,t):=\frac{1}{4\pi\varepsilon_0}\int_{\mathbb R^3}\frac{\rho\bigl(y,t-|x-y|/c\bigr)}{|x-y|}\,dy,\qquad A(x,t):=\frac{\mu_0}{4\pi}\int_{\mathbb R^3}\frac{J\bigl(y,t-|x-y|/c\bigr)}{|x-y|}\,dy,$$

and put $E:=-\nabla\varphi-\partial_tA$, $B:=\nabla\times A$ ([[def-em-potential-gauge-and-field-conventions]], [[def-em-fields]]). Then:

(a) [Smoothness and wave equations] $\varphi$ and each component of $A$ are of class $C^\infty$ on $\mathbb R^3\times\mathbb R$, and $W\varphi=\rho/\varepsilon_0$, $WA=\mu_0J$ pointwise.

(b) [Lorenz gauge] With $G:=\operatorname{div}A+c^{-2}\partial_t\varphi$ one has $G=0$ on $\mathbb R^3\times\mathbb R$: the retarded pair is in Lorenz gauge, the continuity hypothesis supplies this identity and the total-charge conclusion (f).

(c) [Maxwell fields] $E$ and $B$ are of class $C^\infty$ and the tuple $(E,B,\rho,J)$ satisfies the smooth branch of the vacuum Maxwell equations of [[post-em-vacuum-maxwell]] on the whole of $\mathbb R^3\times\mathbb R$: $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\nabla\times E=-\partial_tB$, $\nabla\times B=\mu_0J+c^{-2}\partial_tE$.

(d) [No field before the source] $E=B=0$ at every event with $t<t_0$ (indeed $\varphi=A=0$ there): the selected retarded solution carries no field from before the source acted.

(e) [Zero-data Cauchy identification] For every $t_1<t_0$ the pair $(\varphi,A)$ restricted to $\mathbb R^3\times[t_1,\infty)$ is the unique $C^2$ extension solution of the wave Cauchy problem of [[thm-em-wave-cauchy-kirchhoff]] at time $t_1$ with zero Cauchy data and sources $\rho/\varepsilon_0$, $\mu_0J$.

(f) [Total charge] The total charge $Q(t):=\int_{\mathbb R^3}\rho(y,t)\,dy$ is zero for every $t$: a source that is smooth, compactly supported in space and restricted to a compact time interval and satisfies continuity carries zero total charge, so this branch does not model an eternal isolated nonzero charge.

(g) [Scope] This is the compact smooth branch with an adopted causal selection; it asserts nothing about point, line or sheet sources, about weak or distributional branches, about finite-energy or decay properties, about radiation reaction or self-force, and no empirical claim. In particular the fields of a prescribed isolated point charge with an eternal worldline are not covered by this theorem and are supplied separately by the point-source items of this page.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]); the laboratory chart and SI constants of [[def-em-lab-geometry]] and [[def-em-si-conventions]]; constants $a>0$, $t_0<T$; a jointly $C^\infty$ source pair $(\rho,J)$ vanishing outside $\overline B_a(0)\times[t_0,T]$ and satisfying $\partial_t\rho+\operatorname{div}J=0$; the retarded integrals $\varphi,A$ of the Statement, with $K$ denoting the retarded kernel of [F1] so that $\varphi=\varepsilon_0^{-1}(K*\rho)$ and $A_k=\mu_0(K*J_k)$.

[F1] Retarded kernel: for every $h\in C_c^\infty(\mathbb R^3\times\mathbb R)$ the function $(K*h)(x,t)=\int_{\mathbb R^3}h(y,t-|x-y|/c)/(4\pi|x-y|)\,dy$ is well defined (absolutely convergent), of class $C^\infty$ on $\mathbb R^3\times\mathbb R$, and satisfies $W(K*h)=h$ pointwise. ([[lem-em-retarded-wave-kernel]] (b))

[F2] Gauge identities and the decoupling definition: for a potential pair of class $C^2$ jointly on an open set, $\operatorname{div}E=W\varphi-\partial_tG$ and $\operatorname{curl}B-c^{-2}\partial_tE=WA+\nabla G$ hold there, the source-free equations $\operatorname{div}B=0$ and $\operatorname{curl}E=-\partial_tB$ hold automatically for any potential pair, and if in addition $G=0$ then the sourced Maxwell system of [[post-em-vacuum-maxwell]] holds if and only if $W\varphi=\rho/\varepsilon_0$ and $WA=\mu_0J$; the fields $E,B$, the Lorenz divergence $G$ and the wave expression $W$ are those of [[def-em-potential-gauge-and-field-conventions]], and field regularity classes are those of [[def-em-fields]]. ([[pthm-em-lorenz-gauge-wave-form]] (a),(c))

[F3] Cauchy uniqueness: if $v\in C^2(\mathbb R^3\times[t_1,T'])$ is of class $C^2$ in the extension sense, satisfies $Wv=h$ on $\mathbb R^3\times(t_1,T')$ with $h\in C^\infty(\mathbb R^3\times[t_1,T'])$ in the extension sense, and has prescribed Cauchy data at $t_1$, then $v$ equals the solution constructed there. ([[thm-em-wave-cauchy-kirchhoff]] (b))

[F4] SI constants: $\varepsilon_0=(\mu_0c^2)^{-1}$, so $c^{-2}\varepsilon_0^{-1}=\mu_0$; $c>0$, $\mu_0>0$. ([[def-em-si-conventions]])

[F5] Source fields: smooth source fields $(\rho,J)$ with their units, the continuity equation and the compact-support convention are those of [[def-em-sources]]; the standing hypotheses of this theorem are as stated in the Given. ([[def-em-sources]])

[F6] $C^1$ change of variables for $L^1$: for a $C^1$ diffeomorphism $T:U\to V$ of open sets and $f\in L^1(\lambda_n)$, $\int_Vf=\int_U f\circ T\,|\det DT|$. ([[cor-c-one-change-of-variables-for-l-one-functions]])

[F7] Differentiation under the integral sign: if $x\mapsto f(x,s)$ is integrable for every $s$ in an open interval, $s\mapsto f(x,s)$ is differentiable for almost every $x$, the extended partial derivative is measurable in $x$, and $|\partial_sf(x,s)|\le g(x)$ for an integrable $g$ independent of $s$, then $\int f(x,s)\,dx$ is differentiable with derivative $\int\partial_sf(x,s)\,dx$. ([[thm-differentiation-under-the-integral-sign]])

[F8] Polar coordinates: for every nonnegative Borel $f$ on $\mathbb R^3$, $\int_{\mathbb R^3}f\,d\lambda_3=\int_0^\infty\int_{S^2}f(r\omega)r^2\,d\sigma(\omega)\,dr$; in particular $\int_{B_s(0)}|z|^{-1}\,dz=4\pi\int_0^s r\,dr=2\pi s^2<\infty$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F9] Linearity of the integral on $L^1$. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F10] Divergence theorem for a bounded $C^1$ Euclidean domain $\Omega$ and $F\in C^1(\overline\Omega;\mathbb R^3)$: $\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot\nu\,dS$ with outward normal. ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]])

[F11] Parameter integrals: if $K$ is compact measurable of finite measure and $f,\partial_tf$ are continuous on a neighbourhood of $K\times[a,b]$, then $t\mapsto\int_Kf(x,t)\,dx$ is differentiable there with derivative $\int_K\partial_tf(x,t)\,dx$. ([[lem-em-parameter-integrals]])

[F12] $C^k$ means continuous partial derivatives up to order $k$; finite sums and products of $C^k$ maps are $C^k$. ([[def-ck-euclidean-maps-and-diffeomorphisms]])

[F13] The framework adopts the retarded branch of [[post-em-radiation-selection]]: the selected physical potential pair is the retarded one with no free addition, and the theorem below computes exactly that branch; it asserts no existence of its own. ([[post-em-radiation-selection]] (b),(c))

[F14] For $C^2$ fields and $C^1$ sources satisfying the smooth branch of [[post-em-vacuum-maxwell]], the continuity equation is forced; here continuity is assumed for the prescribed source. ([[pthm-em-charge-continuity]] (a))

## Proof

**Proof technique:** direct; identify the potentials with the retarded kernel of [F1], differentiate the kernel pairing to obtain the Lorenz gauge from continuity, read off the Maxwell system from [F2], localize the retarded integrals for the vanishing and Cauchy claims, and integrate the continuity equation for the total charge.

1.1 Smoothness and wave equations. The source pair $(\rho,J)$ is jointly $C^\infty$ and vanishes outside the compact set $\overline B_a(0)\times[t_0,T]$, so $\rho/\varepsilon_0$ and each $h=\mu_0J_k$ belongs to $C_c^\infty(\mathbb R^3\times\mathbb R)$ [F5, F12]. Applying [F1] to these functions and using the identification $\varphi=\varepsilon_0^{-1}(K*\rho)$, $A_k=\mu_0(K*J_k)$ of the Given gives that $\varphi$ and every component of $A$ are of class $C^\infty$ on $\mathbb R^3\times\mathbb R$, with $W\varphi=\rho/\varepsilon_0$ and $WA=\mu_0J$ pointwise. This is (a). [F1, F4, F5, F12]

1.2 Derivative identities for the retarded kernel. Fix $h\in C_c^\infty(\mathbb R^3\times\mathbb R)$. For fixed $(x,t)$ the change of variable $y\mapsto z=x-y$, a $C^1$ diffeomorphism of $\mathbb R^3$ with $|\det D(x-\cdot)|=1$, is legitimate for the integrable function $y\mapsto h(y,t-|x-y|/c)/(4\pi|x-y|)$ [F6], so $(K*h)(x,t)=\int h(x-z,t-|z|/c)/(4\pi|z|)\,dz$. Choose $b_h>0$ such that the spatial projection of $\operatorname{supp}h$ lies in $\overline B_{b_h}(0)$, and let $M_h$ be a finite global bound on the first derivatives of $h$ (they are continuous and compactly supported). On a parameter neighbourhood $|x|<R$, $|t|<R$, with $R>0$, each differentiated integrand vanishes unless $|x-z|\le b_h$, hence unless $|z|<R+b_h$. Its absolute value is bounded by $M_h\mathbf1_{B_{R+b_h+1}}(z)/(4\pi|z|)$, which is integrable by [F8]. The zero extension at $z=0$ affects a null set only; this majorant is independent of the parameter being differentiated. The derivative is measurable as a limit of measurable difference quotients, so [F7] applies once per parameter $x_1,x_2,x_3,t$ with the other three parameters held fixed, and gives $\partial_{x_i}(K*h)=K*(\partial_{y_i}h)$ and $\partial_t(K*h)=K*(\partial_th)$ on $\mathbb R^3\times\mathbb R$, where $\partial_{y_i}h$ is the partial derivative of $h$ in its $i$-th spatial argument. [F6, F7, F8]

1.3 No field before the source. Suppose $t<t_0$. For every $y$ the retarded argument satisfies $t-|x-y|/c\le t<t_0$, where $\rho$ and $J$ vanish identically by the support hypothesis; hence both integrands in the definitions of $\varphi$ and $A$ vanish for every $y$, and $\varphi(x,t)=0$, $A(x,t)=0$ [F9]. Therefore $E=-\nabla\varphi-\partial_tA=0$ and $B=\nabla\times A=0$ at every event with $t<t_0$, which is (d). [F4, F5, F9, algebra]

1.4 Total charge. By the support hypothesis, $Q(t)=\int_{\mathbb R^3}\rho(y,t)dy=\int_{B_a(0)}\rho(y,t)dy$ for every $t$, and $Q(t)=0$ for $t<t_0$; the integral depends smoothly on $t$ with $Q'(t)=\int_{B_a(0)}\partial_t\rho(y,t)dy$ by [F11] applied to the fixed compact $\overline B_a(0)$ (the integrals over the open and closed balls agree since the smooth source vanishes on the boundary) (the integrands $\rho,\partial_t\rho$ are continuous on a neighbourhood of $\overline B_a(0)\times[t-1,t+1]$) [F5, F12]. Fix $t$ and $R>a$; the continuity equation and the divergence theorem [F10] give $\int_{B_a(0)}\operatorname{div}J(y,t)dy=\int_{B_R(0)}\operatorname{div}J(y,t)dy=\int_{\partial B_R(0)}J(y,t)\cdot\nu\,dS=0$, because $J$ vanishes outside $\overline B_a(0)$ and $R>a$; hence $Q'(t)=-\int_{B_a(0)}\operatorname{div}J(y,t)dy=0$. Thus $Q$ is constant on $\mathbb R$ and, being zero at times before $t_0$, is identically zero, which is (f). [F5, F9, F10, F11, algebra]

2.1 Lorenz gauge. By step 1.2 applied to each component $J_i$ and to $\rho$, together with linearity of the integral [F9], $$\operatorname{div}A=\mu_0\sum_{i=1}^{3}\partial_{x_i}(K*J_i)=\mu_0\sum_{i=1}^{3}K*(\partial_{y_i}J_i)=\mu_0\,K*(\operatorname{div}J),\qquad c^{-2}\partial_t\varphi=c^{-2}\varepsilon_0^{-1}K*(\partial_t\rho)=\mu_0\,K*(\partial_t\rho),$$ the second equality using $c^{-2}\varepsilon_0^{-1}=\mu_0$ [F4]. Adding, $G=\operatorname{div}A+c^{-2}\partial_t\varphi=\mu_0K*(\partial_t\rho+\operatorname{div}J)=0$ pointwise on $\mathbb R^3\times\mathbb R$ by the assumed continuity equation and linearity of the kernel integral [F9]. This is (b); continuity is also used in step 1.4 to establish the total-charge conclusion. [step 1.2, F4, F5, F9, algebra]

2.2 Zero-data Cauchy identification. Fix $t_1<t_0$ and $T'>t_0$. By step 1.3, $\varphi(\cdot,t_1)=0$, $A(\cdot,t_1)=0$ and also $\partial_t\varphi(\cdot,t_1)=0$, $\partial_tA(\cdot,t_1)=0$ (the same vanishing argument applies to the time derivatives, whose integrands contain $\rho_t,J_t$, vanishing for retarded arguments $<t_0$ as well). By step 1.1 the pair is $C^\infty$, hence $C^2$, on $\mathbb R^3\times[t_1,T']$ in the extension sense and satisfies $W\varphi=\rho/\varepsilon_0$, $WA=\mu_0J$ on $\mathbb R^3\times(t_1,T')$; [F3] (with its final time renamed $T'$ and its Cauchy data $a=b=0$) therefore identifies each component with the zero-data solution constructed there. As $T'>t_0$ is arbitrary, the identification extends to $\mathbb R^3\times[t_1,\infty)$, which is (e). [step 1.1, step 1.3, F3, F12, algebra]

3.1 Maxwell fields. $E$ and $B$ are $C^\infty$ because $\varphi$ and $A$ are [step 1.1, F12]. By [F2] with the Lorenz divergence $G$ of step 2.1, $\operatorname{div}E=W\varphi-\partial_tG=\rho/\varepsilon_0-0$ and $\operatorname{curl}B-c^{-2}\partial_tE=WA+\nabla G=\mu_0J+0$; the two source-free equations $\operatorname{div}B=0$ and $\operatorname{curl}E=-\partial_tB$ are automatic for the potential pair [F2]. Hence the smooth branch of [[post-em-vacuum-maxwell]] holds for $(E,B,\rho,J)$ on $\mathbb R^3\times\mathbb R$ with $E,B$ of class $C^\infty$, which is (c). The remaining clause (g) is scope bookkeeping: every hypothesis used above is one of the displayed compact smooth source hypotheses, no point, line, sheet or distributional source is involved, no product of distributions or self-field is formed, no finite-energy, decay, self-force or measurement claim is made, and the only choice assumption is $\mathrm{AC}_\omega$ carried by the kernel, polar and Cauchy suppliers. [step 1.1, step 2.1, step 2.2, F2, F13, F14, algebra] ∎
