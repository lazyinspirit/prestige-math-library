---
id: pthm-em-relativistic-lorentz-force
kind: physics-theorem
title: "The four-force equation reproduces the coordinate Lorentz force and power"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 18
deps: [def-em-electromagnetic-tensor,
       post-em-lorentz-coupling,
       lem-em-antisymmetric-tensor-contraction,
       pthm-sr-momentum-and-four-force,
       post-sr-massive-particle-dynamics,
       def-em-fields,
       def-em-sources,
       def-em-si-conventions,
       def-em-relativistic-worldlines-frames,
       post-em-minkowski-physical-model,
       thm-sr-proper-time-and-observer-decomposition,
       def-cross-product-in-r3,
       def-euclidean-inner-product,
       def-directional-and-partial-derivatives,
       cor-mean-value-theorem,
       thm-cauchy-mean-value,
       thm-real-power-continuity-and-derivatives,
       thm-real-power-agrees-with-rational-exponent,
       def-rational-power,
       lem-rational-power-laws,
       lem-rational-power-monotone,
       lem-of-inverse-positive,
       thm-chain-rule,
       thm-algebra-of-derivatives,
       def-abs-value,
       lem-of-abs-value,
       thm-intermediate-value,
       def-em-lab-geometry,
       cor-differentiable-implies-continuous]
dependency_roles:
  def-em-electromagnetic-tensor: formulation-prerequisite
  post-em-lorentz-coupling: physical-assumption
  lem-em-antisymmetric-tensor-contraction: mathematical-premise
  pthm-sr-momentum-and-four-force: physical-result
  post-sr-massive-particle-dynamics: physical-assumption
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-relativistic-worldlines-frames: formulation-prerequisite
  post-em-minkowski-physical-model: physical-assumption
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-real-power-agrees-with-rational-exponent: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  lem-rational-power-monotone: mathematical-premise
  lem-of-inverse-positive: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  thm-cauchy-mean-value: mathematical-premise
  thm-intermediate-value: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  cor-differentiable-implies-continuous: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional statement about one charged massive particle of constant charge and positive external rest mass moving on a future timelike $C^2$ worldline in a prescribed exterior electromagnetic field that is $C^1$ near the graph, under the adopted covariant coupling: the coordinate Lorentz force and power, preservation of the four-velocity norm, and uniform low-speed bounds with constants depending only on the speed interval. Excluded: the particle's own field, radiation reaction, self-force, magnetic monopoles, variable or zero mass, trajectory approximation over time without a stability argument, and any measurement or empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.4.1 printed pp. 115-116 (the four-dimensional force law $dP^\\mu/d\\tau=qF^{\\mu\\nu}U_\\nu$ (5.30) and its unpacking to $dp/dt=q(E+u\\times B)$ (5.32) and $d(\\text{energy})/dt=qE\\cdot u$) and §5.4.2 printed pp. 116-118, read in the full extracted text"
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node106.html"
      locator: "node 126 'Relativistic particle dynamics' and node 127 'The force on a moving charge' (the four-force $\\\\mathcal F_\\mu=\\\\frac{e}{c}F_{\\\\mu\\\\nu}U^\\\\nu$, $\\\\mathcal F_\\\\mu U^\\\\mu=0$, and $f_i=e(E_i+\\\\epsilon_{ijk}u^jB^k)$), read in the complete author-hosted lecture notes; the source's fourth component and sign conventions are converted to the framework's dictionary"
    - title: "N. Beisert, Elektrodynamik, Vorlesungsskript, ETH Zürich 2024 FS (author-hosted 176-page lecture script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§9.4 'Geladene Teilchen' pp. 9.12-9.13 (path and proper-time parametrization, four-momentum (9.67), the Lorentz force (9.68), and the coordinate equations $\\\\partial_t\\\\vec p=q(\\\\vec E+\\\\vec v\\\\times\\\\vec B)$ (9.70) and $c\\\\,\\\\partial_tp^0=q\\\\vec E\\\\cdot\\\\vec v$ (9.71)), read in the author-hosted script"
verification:
  precheck: pass
---

## Statement

Assume the framework's spacetime, field and worldline objects of [[post-em-minkowski-physical-model]], [[def-em-lab-geometry]], [[def-em-fields]] and [[def-em-relativistic-worldlines-frames]], with the SI units of [[def-em-si-conventions]], and clause (i) of the adopted Lorentz coupling [[post-em-lorentz-coupling]]: a constant charge parameter $q\in\mathbb R$ of [[def-em-sources]] (a), an externally supplied rest mass $m>0$, a future timelike $C^2$ massive worldline $x:J\to A$ with four-velocity $U$, and a prescribed field $F$ of [[def-em-electromagnetic-tensor]] that is $C^1$ on a neighbourhood of the graph of $x$ and is generated externally to the particle; the adopted equation of motion is $$m\,\frac{dU}{d\tau}=q\,\Phi(U),\qquad \eta(\Phi(u),w)=F(w,u),$$ $U$ the four-velocity of [[def-em-relativistic-worldlines-frames]] (b) with $\eta(U,U)=-c^2$. Let $t\mapsto r(t)$ be the laboratory chart reading of the worldline, $v:=r'$ its coordinate velocity and $\gamma:=(1-|v|^2/c^2)^{-1/2}$, so that $U=\gamma(c,v)$ ([[thm-sr-proper-time-and-observer-decomposition]] (e)). Then, wherever the worldline is $C^2$: (a) [Coordinate force and power] with the coordinate three-momentum $p:=m\gamma v$ of [[pthm-sr-momentum-and-four-force]] (a), $$\frac{dp}{dt}=q\,(E+v\times B),\qquad \frac{d(\gamma mc^2)}{dt}=q\,E\cdot v,$$ the derivatives taken with respect to the chart time $t$ and $E,B$ the components of $F$ in the laboratory frame. (b) [Norm preservation] $s\mapsto\eta(U(s),U(s))$ is constant on $J$ with value $-c^2$; in particular a solution with future timelike initial data remains future timelike, and $|v(t)|<c$ wherever the reading is differentiable ([[lem-em-antisymmetric-tensor-contraction]]). (c) [Controlled low-speed expansion] for every $\delta\in(0,1)$, on any interval where $|v|/c\le\delta$, $$|\gamma-1|\le\frac{|v|^2/c^2}{2(1-\delta^2)^{3/2}},\qquad \Bigl|\gamma-1-\frac{|v|^2}{2c^2}\Bigr|\le\frac{3}{8}(1-\delta^2)^{-5/2}\Bigl(\frac{|v|^2}{c^2}\Bigr)^{2},$$ and consequently $$|p-mv|\le m|v|\,\frac{|v|^2}{2c^2(1-\delta^2)^{3/2}},\qquad \Bigl|\gamma mc^2-mc^2-\tfrac12m|v|^2\Bigr|\le\frac{3}{8}(1-\delta^2)^{-5/2}\frac{m|v|^4}{c^2};$$ the constants depend only on $\delta$, so the bounds are uniform in $|v|/c\le\delta$. These are pointwise algebraic expansions; they assert no approximation of the trajectory over a time interval, which would require a separate stability argument. (d) [Scope] The charge is constant, $m>0$ is an externally supplied parameter and $F$ is a prescribed exterior field: the particle's own field, radiation reaction and any self-force are excluded, as are magnetic monopoles and zero or variable mass; the nonrelativistic coordinate law is not adopted as exact, and (c) is a controlled kinematic expansion, not a trajectory approximation. The statement is conditional on the adopted postulates and makes no empirical claim.

## Facts & Assumptions

**Given:** The spacetime, field and worldline objects of [[post-em-minkowski-physical-model]], [[def-em-lab-geometry]], [[def-em-fields]] and [[def-em-relativistic-worldlines-frames]] with the SI units of [[def-em-si-conventions]]; a constant charge parameter $q\in\mathbb R$ of [[def-em-sources]] (a); an externally supplied rest mass $m>0$; a future timelike $C^2$ massive worldline $x:J\to A$ with four-velocity $U$ and four-acceleration $A$; a prescribed field $F$ of [[def-em-electromagnetic-tensor]] that is $C^1$ on a neighbourhood of the graph of $x$ and is generated externally to the particle; the adopted coupling [F2]; and the laboratory chart reading $t\mapsto(ct,r(t))$, $v=r'$, $\gamma=(1-|v|^2/c^2)^{-1/2}$ of the worldline.

[F1] The worldline reading: $t\mapsto r(t)$ is defined on an open interval of laboratory times, $|v(t)|<c$, and the four-velocity and four-acceleration are $U=\gamma(c,v)$ and (when $x$ is $C^2$) $A=dU/d\tau$; $\eta(U,U)=-c^2$ ([[def-em-relativistic-worldlines-frames]] (b), (c), [[thm-sr-proper-time-and-observer-decomposition]] (e), [[def-em-lab-geometry]] (a), (c)).

[F2] Adopted coupling (clause (i) of [[post-em-lorentz-coupling]]): with $\Phi$ of [[lem-em-antisymmetric-tensor-contraction]], defined by $\eta(\Phi(u),w)=F(w,u)$ and given in components by $\Phi(u)^\mu=\eta^{\mu\alpha}F_{\alpha\beta}u^\beta$, the equation of motion is $m\,dU/d\tau=q\,\Phi(U)$, equivalently $m\,dU^\mu/d\tau=qF^\mu{}_\nu U^\nu$ with $F^\mu{}_\nu=\eta^{\mu\alpha}F_{\alpha\nu}$ and $U_\nu=\eta_{\nu\beta}U^\beta$; $q$ is constant, $m>0$ is externally supplied, and $F$ is a prescribed exterior field with no self-field.

[F3] Components of the field and of the coupling in the laboratory frame: with the dictionary $F^{0i}=E_i/c=-F^{i0}$, $F^{ij}=\epsilon_{ijk}B_k$ of [[def-em-electromagnetic-tensor]] (a) and the right-handed cross product of [[def-cross-product-in-r3]], $F^i{}_0=E_i/c$, $F^i{}_j=\epsilon_{ijk}B_k$, $\Phi(U)^i=\gamma(E_i+(v\times B)_i)$ and $\Phi(U)^0=\gamma\,E\cdot v/c$; the spatial inner products and norms are those of [[def-euclidean-inner-product]].

[F4] Momentum and four-force: $P=mU$ with $P$ of unit kg m s$^{-1}$, the coordinate three-momentum is $p=m\gamma v$, and the four-force is $\dot P=mA$ ([[pthm-sr-momentum-and-four-force]] (a), (b) with an inertial frame whose stationary observer is $e_0$, [[post-sr-massive-particle-dynamics]] (i), (iv)).

[F5] Proper time and the chain rule: the parametrization $t\mapsto\tau(t)$ of the worldline satisfies $\mathrm d\tau/\mathrm dt=\gamma^{-1}$, so $\mathrm d/\mathrm dt=\gamma^{-1}\mathrm d/\mathrm d\tau$ on functions of the chart time, and $U=\gamma(c,v)$ as a chart-time curve has the same differentiability as $v$ ([[thm-sr-proper-time-and-observer-decomposition]] (e), [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]]).

[F6] Orthogonality and norm conservation ([[lem-em-antisymmetric-tensor-contraction]]): $\eta(u,\Phi(u))=0$ for every $u\in V$; if $U$ is differentiable on an interval with $mU'(s)=q\Phi(U(s))$ for constant $m\ne0$ and $q$, then $s\mapsto\eta(U(s),U(s))$ is constant; the conclusion holds verbatim for a family of skew forms $F_s$ and their operators $\Phi_s$ with $mU'(s)=q\Phi_s(U(s))$, with no derivative of $F_s$ required. Also, differentiability at a point implies continuity there ([[cor-differentiable-implies-continuous]]), and a continuous real function on an interval that never vanishes has constant sign ([[thm-intermediate-value]]).

[F7] Powers: for $a>0$ and real $\alpha$ the map $x\mapsto x^\alpha$ is continuous and differentiable on $(0,\infty)$ with $(x^\alpha)'=\alpha x^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]]); the rational power of [[def-rational-power]] satisfies $a^{r+s}=a^ra^s$ and $a^{-r}=(a^r)^{-1}$ for rationals $r,s$, agrees with the real power at rational exponents ([[lem-rational-power-laws]], [[thm-real-power-agrees-with-rational-exponent]]), and is strictly increasing in the base for positive exponent ([[lem-rational-power-monotone]], [[lem-of-inverse-positive]]).

[F8] Mean value tools: in both statements let $a,b\in\mathbb R$ with $a<b$. If $f:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$ there is $c\in(a,b)$ with $f(b)-f(a)=f'(c)(b-a)$ ([[cor-mean-value-theorem]]); if $f,g$ are continuous on $[a,b]$ and differentiable on $(a,b)$ there is $c\in(a,b)$ with $(f(b)-f(a))g'(c)=(g(b)-g(a))f'(c)$ ([[thm-cauchy-mean-value]]). The absolute value satisfies $|xy|=|x||y|$ and $|x|\ge0$ ([[def-abs-value]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** contract the field with the four-velocity in the fixed component dictionary, then apply the mean value and Cauchy mean value theorems to $(1-z)^{-1/2}$ and $z^2$ on the compact speed interval.

1.1 (Clause (a): the coordinate force) By [F1] and [F5], $U=\gamma(c,v)$, $U^i=\gamma v_i$ and $\mathrm d/\mathrm d\tau=\gamma\,\mathrm d/\mathrm dt$ (chain rule for the inverse parametrization $t\mapsto\tau(t)$), and $p=m\gamma v$ by [F4]. For a spatial index $i$, the spatial component of the equation of motion [F2] reads $m\,dU^i/d\tau=q\,\Phi(U)^i=q\gamma\bigl(E_i+(v\times B)_i\bigr)$ by [F3]. Since $U^i=\gamma v_i$ and $p_i=m\gamma v_i$, the left side is $m\,dU^i/d\tau=m\gamma\,\frac{d}{dt}(\gamma v_i)=\gamma\,\frac{dp_i}{dt}$, so $\gamma\,dp_i/dt=q\gamma(E_i+(v\times B)_i)$ and, dividing by $\gamma>0$, $dp_i/dt=q(E_i+(v\times B)_i)$ for $i=1,2,3$; componentwise this is $dp/dt=q(E+v\times B)$. The derivatives are those of the chart time, and $E,B$ are the laboratory components of $F$. [given, F1, F2, F3, F4, F5, algebra]

1.2 (Clause (a): the power identity) For the temporal index, [F2] and [F3] give $m\,dU^0/d\tau=q\,\Phi(U)^0=q\gamma E\cdot v/c$. By [F1] and [F5], $U^0=\gamma c$ and $dU^0/d\tau=\gamma c\,\mathrm d\gamma/\mathrm dt$, so $m\,dU^0/d\tau=\frac{\gamma}{c}\,mc^2\frac{\mathrm d\gamma}{\mathrm dt}=\frac{\gamma}{c}\frac{d(\gamma mc^2)}{dt}$; comparing with the right-hand side, $\frac{\gamma}{c}\frac{d(\gamma mc^2)}{dt}=\frac{q\gamma E\cdot v}{c}$, and multiplying by $c/\gamma>0$ gives $d(\gamma mc^2)/dt=q\,E\cdot v$. [given, F1, F2, F3, F5, algebra]

1.3 (Clause (b): norm preservation and the future branch) At every interior parameter $s\in J$, the proper-time derivative in [F2] is $dU/d\tau=U'(s)/\tau'(s)$, with $\tau'(s)>0$. Thus $U'(s)=(q/m)\tau'(s)\Phi_{x(s)}(U(s))$. The product rule and pointwise skew orthogonality [F6] give $\frac{d}{ds}\eta(U,U)=2\eta(U,U')=2(q/m)\tau'(s)\eta(U,\Phi_{x(s)}(U))=0$; no derivative of the field is used. The scalar $\eta(U,U)$ is continuous on $J$; the mean value theorem [F8] on every compact subinterval therefore makes it constant, including any included endpoints. Its value is $-c^2$ by [F1]. Consequently $(U^0)^2=c^2+|U_{\mathrm{vec}}|^2>0$, so $U^0$ never vanishes. Continuity and the intermediate value theorem [F6] show that its sign is constant on $J$; if $U^0(s_0)>0$ at any initial parameter $s_0\in J$, then $U^0>0$ throughout. The solution remains future timelike and $|v(t)|<c$ wherever its chart reading is differentiable, by [F1]. No existence or continuation of solutions is asserted. [given, F1, F2, F6, F8, algebra]

1.4 (Clause (c): the function and its derivatives) Put $z(t):=|v(t)|^2/c^2$, so that $0\le z\le\delta^2$ on an interval where $|v|/c\le\delta$, $\delta\in(0,1)$, and $\gamma=f(z)$ with $f(z):=(1-z)^{-1/2}$. The function $f$ is continuous on $[0,\delta^2]$ and differentiable on $(0,\delta^2)$: it is the composition of $z\mapsto1-z$ with $y\mapsto y^{-1/2}$, the latter continuous and differentiable on $(0,\infty)$ with derivative $-\tfrac12y^{-3/2}$ [F7], and $\gamma=f(z)$ agrees with the rational power of [F1] by [F7]. By the chain rule [F5], $f'(z)=\tfrac12(1-z)^{-3/2}$ and $f''(z)=\tfrac34(1-z)^{-5/2}$ on $(0,\delta^2)$. If $z=0$ then $\gamma=1$ and every difference and bound in clause (c) vanishes exactly; hence assume $0<z\le\delta^2$ below, and note $1-\delta^2>0$. [given, F1, F5, F7, algebra]

2.1 (Clause (c): first-order bound) Since $f$ is continuous on $[0,z]$ and differentiable on $(0,z)$, [F8] gives $\xi\in(0,z)$ with $f(z)-f(0)=f'(\xi)z$, and $f(0)=1$; hence $|\gamma-1|=|f'(\xi)|\,z=\tfrac12(1-\xi)^{-3/2}z$. Since $0<\xi\le z\le\delta^2<1$, the base satisfies $1-\xi\ge1-\delta^2>0$, so $0<(1-\xi)^{-3/2}\le(1-\delta^2)^{-3/2}$ by monotonicity of the positive power and positivity of inverses [F7]; therefore $|\gamma-1|\le\frac{z}{2(1-\delta^2)^{3/2}}=\frac{|v|^2/c^2}{2(1-\delta^2)^{3/2}}$. [given, step 1.4, F7, F8, algebra]

2.2 (Clause (c): second-order bound) Define $q(s):=f(s)-1-\tfrac{s}{2}$ and $g(s):=s^2$ on $[0,z]$; both are continuous on $[0,z]$ and differentiable on $(0,z)$, with $q'(s)=f'(s)-\tfrac12$ and $g'(s)=2s>0$ there [F7, F8]. Cauchy's mean value theorem [F8] gives $\xi\in(0,z)$ with $\bigl(q(z)-q(0)\bigr)g'(\xi)=\bigl(g(z)-g(0)\bigr)q'(\xi)$; since $q(0)=0=g(0)$, $g'(\xi)=2\xi\ne0$ and $q'(\xi)=f'(\xi)-\tfrac12$, this reads $f(z)-1-\tfrac z2=\frac{z^2}{2\xi}\bigl(f'(\xi)-\tfrac12\bigr)$. The mean value theorem [F8] applied to $f'$ on $[0,\xi]$, where $f'$ is continuous on $[0,\xi]$ and differentiable on $(0,\xi)$ (the derivative $f''$ is given on $(0,\delta^2)$ in step 1.4), gives $\eta\in(0,\xi)$ with $f'(\xi)-f'(0)=\xi f''(\eta)$; since $f'(0)=\tfrac12$ this gives $f'(\xi)-\tfrac12=\xi f''(\eta)$, and substitution yields $f(z)-1-\tfrac z2=\frac{z^2}{2\xi}\cdot\xi f''(\eta)=\tfrac12f''(\eta)z^2=\tfrac38(1-\eta)^{-5/2}z^2$. Since $0<\eta\le\xi\le z\le\delta^2$, monotonicity of the positive power [F7] gives $(1-\eta)^{-5/2}\le(1-\delta^2)^{-5/2}$, hence $\bigl|\gamma-1-\frac{|v|^2}{2c^2}\bigr|=\bigl|f(z)-1-\tfrac z2\bigr|\le\frac38(1-\delta^2)^{-5/2}z^2=\frac38(1-\delta^2)^{-5/2}\bigl(\frac{|v|^2}{c^2}\bigr)^2$. [given, step 1.4, F7, F8, algebra]

3.1 (Clause (c): the momentum and energy bounds) Multiplying the first-order bound of step 2.1 by $m|v|\ge0$ and using $|xy|=|x||y|$ [F8] gives $|p-mv|=|m\gamma v-mv|=m|v|\,|\gamma-1|\le m|v|\frac{|v|^2}{2c^2(1-\delta^2)^{3/2}}$. Multiplying the second-order bound of step 2.2 by $mc^2>0$ gives $\bigl|\gamma mc^2-mc^2-\tfrac12m|v|^2\bigr|=mc^2\bigl|\gamma-1-\frac{|v|^2}{2c^2}\bigr|\le\frac38(1-\delta^2)^{-5/2}\frac{m|v|^4}{c^2}$. The constants depend only on $\delta$, so both bounds are uniform on any interval where $|v|/c\le\delta$. These are pointwise algebraic bounds; no approximation of the trajectory over a time interval is asserted. [given, step 2.1, step 2.2, F7, F8, algebra]

4.1 (Clauses (c) and (d): status and scope) Clauses (a) and (b) are steps 1.1-1.3, and clause (c) is steps 1.4, 2.1, 2.2 and 3.1: the two first-order and second-order bounds, the resulting momentum and energy bounds and their uniformity in $|v|/c\le\delta$ are established there, including the exact vanishing at $z=0$. The charge $q$ is a constant parameter of [[def-em-sources]] (a), $m>0$ is an externally supplied rest mass, and $F$ is a prescribed exterior field $C^1$ near the graph: the particle's own field, radiation reaction and any self-force are excluded, as are magnetic monopoles and zero or variable mass [F2]. The nonrelativistic coordinate law is not adopted as exact; clause (c) is a controlled kinematic expansion and asserts no trajectory approximation over time, which would require a separate stability argument. The argument used the metric contraction [F3], the coupling [F2], the momentum and four-force identification [F4], the proper-time chain rule [F5], the orthogonality and norm-conservation lemma [F6] (whose varying-field clause was used so that no derivative of $F$ enters), and the power and mean value tools [F7], [F8]; it is conditional on the adopted postulates, makes no empirical claim and uses no choice principle. [given, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2, step 3.1, F2, F5, F6] ∎

## Source notes

The three cited treatments state the covariant force law $m\,dU/d\tau=q\,\Phi(U)$ (equivalently $dP^\mu/d\tau=qF^{\mu\nu}U_\nu$), its unpacking into the coordinate Lorentz force and the power identity, and the constancy of the four-velocity norm, each in its own conventions. The deduction above performs the contraction in the framework's fixed dictionary ($F^{0i}=E_i/c$, $F^{ij}=\epsilon_{ijk}B_k$, $x^0=ct$), uses the framework's repaired raised-index operator $\eta(\Phi(u),w)=F(w,u)$, and derives the low-speed bounds from the mean value and Cauchy mean value theorems with the exact constants $1/2$ and $3/8$; the conversion from the sources' conventions is carried out here rather than assumed.
