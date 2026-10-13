---
id: ex-em-constant-field-trajectory
kind: example
title: "Exact trajectory in a uniform electric field and the failure of the unscoped Newtonian extrapolation"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 19
deps: [pthm-em-relativistic-lorentz-force,
       def-em-fields,
       def-em-si-conventions,
       def-em-relativistic-worldlines-frames,
       def-cross-product-in-r3,
       def-rational-power,
       lem-rational-power-laws,
       lem-of-square-monotone,
       thm-real-power-continuity-and-derivatives,
       thm-real-power-agrees-with-rational-exponent,
       thm-chain-rule,
       thm-algebra-of-derivatives,
       def-vector-valued-derivative-and-integral,
       thm-of-square-roots,
       def-euclidean-inner-product,
       post-em-vacuum-maxwell,
       def-em-electromagnetic-tensor,
       lem-em-antisymmetric-tensor-contraction,
       def-divergence-and-curl-of-a-c1-vector-field]
dependency_roles:
  pthm-em-relativistic-lorentz-force: physical-result
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-relativistic-worldlines-frames: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-real-power-agrees-with-rational-exponent: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  post-em-vacuum-maxwell: physical-assumption
  def-em-electromagnetic-tensor: formulation-prerequisite
  lem-em-antisymmetric-tensor-contraction: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An exact conditional solution example for one prescribed uniform external electric field ($E\\equiv E_0e_1$, $B\\equiv0$, $E_0>0$ in $\\mathrm V\\,\\mathrm m^{-1}$) acting on a particle of constant charge $q$ and external rest mass $m>0$ under the framework's adopted covariant coupling: the trajectory, its subluminality at all finite times, the work-energy identity, and the comparison with the unscoped Newtonian constant-acceleration extrapolation. Excluded: the particle's own field, radiation reaction and self-force, the production of the field, measurement, and any empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.4.2 printed pp. 116-118 (motion in constant fields: the relativistic trajectory in a uniform electric field and its limiting speed), read in the full extracted text"
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node106.html"
      locator: "node 126 'Relativistic particle dynamics' and node 127 'The force on a moving charge', read in the complete author-hosted lecture notes"
    - title: "N. Beisert, Elektrodynamik, Vorlesungsskript, ETH Zürich 2024 FS (author-hosted 176-page lecture script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§9.4 'Geladene Teilchen' pp. 9.12-9.13 (the coordinate equations (9.70)-(9.71) used to verify the displayed solution), read in the author-hosted script"
verification:
  precheck: pass
---

## Example

Let $q\in\mathbb R$ be a constant charge parameter, $m>0$ an externally supplied rest mass and $E_0>0$ a field strength in $\mathrm V\,\mathrm m^{-1}$, and consider the prescribed exterior fields $E,B:\mathbb R^3\times\mathbb R\to\mathbb R^3$ of [[def-em-fields]] with $$E\equiv E_0e_1,\qquad B\equiv0,$$ a source-free constant solution of the smooth vacuum Maxwell branch. Put $h:=qE_0/(mc)$, carrying the unit $\mathrm s^{-1}$, and for $r_0\in\mathbb R^3$ define $r:\mathbb R\to\mathbb R^3$ and its chart reading $t\mapsto(ct,r(t))$ by $$r(t):=r_0+\frac{c}{h}\bigl(\sqrt{1+h^2t^2}-1\bigr)e_1\quad(h\ne0),\qquad r(t):=r_0\quad(h=0),$$ $$v(t):=r'(t)=\frac{c\,ht}{\sqrt{1+h^2t^2}}\,e_1\ (h\ne0),\qquad \gamma(t):=\sqrt{1+h^2t^2},\qquad p(t):=m\gamma(t)v(t).$$ Then: (i) [Exact solution] for $h\ne0$ the curve is a future timelike $C^\infty$ curve with coordinate velocity $v(t)$, $|v(t)|<c$ for every finite $t$ and $|v(t)|\to c$ as $t\to\pm\infty$, and $p(t)=qE_0t\,e_1$, so that $$\frac{dp}{dt}=qE_0e_1=q(E+v\times B),\qquad \frac{d(\gamma mc^2)}{dt}=qE\cdot v$$ hold identically, as required by [[pthm-em-relativistic-lorentz-force]] (a); at $h=0$ (equivalently $q=0$) the curve is the constant $r\equiv r_0$ with $v\equiv0$, $p\equiv0$ and the same equations hold trivially. (ii) [Energy] $\gamma(t)mc^2=mc^2\sqrt{1+h^2t^2}$ and $\frac{d}{dt}(\gamma mc^2)=qE_0\,v_1(t)$: the field delivers power $qE\cdot v$ to the particle. (iii) [Unscoped Newtonian extrapolation] For $h\ne0$, the Newtonian constant-acceleration prediction $v_N(t):=(qE_0/m)t\,e_1$ satisfies $v(t)=v_N(t)/\sqrt{1+h^2t^2}$, so the two agree only to first order in $|ht|$ and $|v_N(t)|=\sqrt{1+h^2t^2}\,|v(t)|$ exceeds $c$ for $|t|>1/|h|$, whereas the exact solution of the adopted coupling remains subluminal at every finite time; for this explicit solution the approximation is quantified directly. Put $r_N(t)=r_0+\tfrac12hc t^2e_1$. For $h\ne0$, $$|v-v_N|\le\frac c2|ht|^3,\qquad |r-r_N|\le\frac{c}{8|h|}|ht|^4.$$ Thus on $|ht|\le\delta$ the velocity error is at most $c\delta^3/2$ and the displacement error at most $c\delta^4/(8|h|)$; these are special-model comparisons, not a general trajectory-stability consequence of [[pthm-em-relativistic-lorentz-force]] (c). When $h=0$ both trajectories and velocities coincide, and the Newtonian superluminal-time condition containing $1/|h|$ is not used. (iv) [Scope] the field is prescribed and external, the particle's own field and any radiation reaction or self-force are excluded, and no measurement or empirical claim is made; the solution is exact for the stated coupling with $E_0>0$ and arbitrary constant $q$.

## Facts & Assumptions

**Given:** The constant charge parameter $q\in\mathbb R$, the rest mass $m>0$, the field strength $E_0>0$, the prescribed fields $E\equiv E_0e_1$, $B\equiv0$ on $\mathbb R^3\times\mathbb R$, the number $h=qE_0/(mc)$ and the origin $r_0\in\mathbb R^3$; the chart reading $t\mapsto(ct,r(t))$ with the functions of the statement; and, where used, the real parameter $h\ne0$.

[F1] The fields are those of [[def-em-fields]] on the whole-space laboratory region, with $E$ carrying $\mathrm V\,\mathrm m^{-1}$; the chart reading $t\mapsto(ct,r(t))$ of a massive worldline satisfies $|r'(t)|<c$ and has four-velocity $U=\gamma(c,v)$ with $\gamma=(1-|v|^2/c^2)^{-1/2}$, and a vector $(c,w)$ with $|w|<c$ is future timelike ([[def-em-relativistic-worldlines-frames]] (a), (c), [[def-em-si-conventions]] (c)).

[F2] The smooth branch of [[post-em-vacuum-maxwell]] with $\rho=0$, $J=0$ consists of $\operatorname{div}E=0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}B=c^{-2}\partial_tE$, with the divergence and curl of [[def-divergence-and-curl-of-a-c1-vector-field]] applied at fixed time; a constant field has every first partial derivative equal to $0$, so all four equations hold for $(E,B)$.

[F3] The force and power identities of [[pthm-em-relativistic-lorentz-force]] (a): for a solution of the adopted coupling with coordinate velocity $v$, Lorentz factor $\gamma$, coordinate momentum $p=m\gamma v$ and prescribed field $(E,B)$, $dp/dt=q(E+v\times B)$ and $d(\gamma mc^2)/dt=qE\cdot v$; the coordinate derivative $r'$ and the vector-valued derivative are those of [[def-vector-valued-derivative-and-integral]]. The raised-index operator $\Phi$ of [[lem-em-antisymmetric-tensor-contraction]] is defined by $\eta(\Phi(u),w)=F(w,u)$ and has components $\Phi(u)^\mu=\eta^{\mu\alpha}F_{\alpha\beta}u^\beta$; for the prescribed field $F^{01}=E_0/c$, $F^{10}=-E_0/c$ and all other components zero ([[def-em-electromagnetic-tensor]] (a)), so $\Phi(u)^0=E_0u^1/c$, $\Phi(u)^1=E_0u^0/c$ and $\Phi(u)^2=\Phi(u)^3=0$, and the adopted equation of motion is $m\,dU/d\tau=q\,\Phi(U)$.

[F4] Powers and roots: for $a>0$ the map $x\mapsto x^{\alpha}$ is continuous and differentiable on $(0,\infty)$ with $(x^{\alpha})'=\alpha x^{\alpha-1}$, and real powers agree with rational powers at rational exponents, so $x^{1/2}=\sqrt x$ on $(0,\infty)$ with derivative $\tfrac12x^{-1/2}$; the rational powers satisfy $a^{r+s}=a^ra^s$ and $a^{-r}=(a^r)^{-1}$, and $\sqrt{\cdot}$ is the nonnegative square root of [[thm-of-square-roots]] ([[thm-real-power-continuity-and-derivatives]], [[thm-real-power-agrees-with-rational-exponent]], [[def-rational-power]], [[lem-rational-power-laws]]).

[F5] Chain rule and product rule: composites and finite sums and products of differentiable functions are differentiable with the usual rules ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]). The Euclidean norm and inner product are those of [[def-euclidean-inner-product]], the cross product is that of [[def-cross-product-in-r3]], and for $a,b\ge0$, $a\le b$ exactly when $a^2\le b^2$ ([[lem-of-square-monotone]]).

## Verification

**Proof technique:** direct differentiation of the displayed functions, the identity $(1+s^2)^{1/2}\ge1$ and rationalisation of the square root; the special-model error bounds are proved by elementary inequalities.

1.1 The prescribed field is source-free: $E\equiv E_0e_1$ and $B\equiv0$ are constant, so every first partial derivative of every component vanishes; by the component formulas of [F2], $\operatorname{div}E=\operatorname{div}B=0$, $\operatorname{curl}E=\operatorname{curl}B=0$ and $\partial_tE=\partial_tB=0$, so the four source-free smooth-branch equations hold on $\mathbb R^3\times\mathbb R$. [given, F1, F2, algebra]

1.2 The trajectory and its velocity ($h\ne0$): put $g(t):=\sqrt{1+h^2t^2}=(1+h^2t^2)^{1/2}$, a composition of the positive polynomial $t\mapsto1+h^2t^2$ with the power $x\mapsto x^{1/2}$; by [F4] and the chain rule [F5], $g$ is differentiable with $g'(t)=\tfrac12(1+h^2t^2)^{-1/2}\cdot2h^2t=h^2t/g(t)$, and since every derivative is a rational expression with nonzero denominator $g$, iterating the same rules shows $g$ and hence $r(t)=r_0+\tfrac{c}{h}(g(t)-1)e_1$ are $C^\infty$ on $\mathbb R$. Then $r'(t)=\tfrac{c}{h}g'(t)e_1=\tfrac{c ht}{g(t)}e_1=v(t)$ by [F5], so $|v(t)|=c|ht|/g(t)<c$ because $h^2t^2<1+h^2t^2$ for all real $t$ [F5], and $|v(t)|\to c$ as $|t|\to\infty$ because $|ht|/g(t)\to1$. [given, F4, F5, algebra]

1.3 The branch $h=0$: here $q=0$ since $E_0>0$, $m>0$ and $h=qE_0/(mc)$; the definition gives $r\equiv r_0$, $v\equiv0$, $\gamma\equiv1$ and $p\equiv0$, so $dp/dt=0=q(E+v\times B)$ and $d(\gamma mc^2)/dt=0=qE\cdot v$ hold trivially, and the Newtonian comparison trajectory of clause (iii) is $r_N\equiv r_0$ as well, with $v_N\equiv0$; the formulas containing $1/h$ are not used in this branch. [given, F3, algebra]

2.1 Force and power identities ($h\ne0$): by step 1.2, $\gamma(t)=g(t)$ equals $(1-|v(t)|^2/c^2)^{-1/2}$, since $1-|v|^2/c^2=1-\frac{h^2t^2}{1+h^2t^2}=\frac{1}{g(t)^2}$; hence $p(t)=m\gamma(t)v(t)=mg(t)\cdot\frac{c ht}{g(t)}e_1=mch t\,e_1=qE_0t\,e_1$, because $mch=qE_0$. Therefore $dp/dt=qE_0e_1=q(E+v\times B)$, since $E=E_0e_1$, $B=0$ and $v\times0=0$ [F5]. For the power identity, $d(\gamma mc^2)/dt=mc^2g'(t)=mc^2h^2t/g(t)=qE_0\cdot v_1(t)$ because $qE_0=mch$ and $v_1(t)=cht/g(t)$. These are the two coordinate identities of [F3]. The covariant equation $m\,dU/d\tau=q\Phi(U)$ of [F3] also holds: with $U^0=g(t)c$, $U^1=cht$ and $U^2=U^3=0$ one has $dU^0/d\tau=g\,d(gc)/dt=c\,g\,g'=ch^2t$ and $dU^1/d\tau=g\,d(cht)/dt=cgh$, so $m\,dU^0/d\tau=mch^2t=qE_0ht=q\Phi(U)^0$ and $m\,dU^1/d\tau=mgch=qgE_0=q\Phi(U)^1$, while the components $2,3$ vanish on both sides; hence the displayed curve is an exact solution of the adopted coupling in this special model. [given, step 1.2, F3, F5, algebra]

2.2 The curve is a future timelike worldline: by step 1.2 the curve is $C^\infty$ with coordinate velocity $v(t)$ and $|v(t)|<c$; its tangent $(c,v(t))$ has $\eta$-square $-c^2+|v(t)|^2<0$ and positive time component $c>0$, so it is future timelike at every $t$, and the chart reading is that of a massive worldline in the sense of [F1]. At $h=0$ the constant curve has tangent $(c,0)$, also future timelike. [given, step 1.2, step 1.3, F1, F5, algebra]

2.3 The unscoped Newtonian extrapolation ($h\ne0$): define $v_N(t):=(qE_0/m)t\,e_1=hct\,e_1$ and $r_N(t):=r_0+\tfrac12hct^2e_1$. Since $qE_0/m=hc$, step 1.2 gives $v(t)=\frac{cht}{g(t)}e_1=\frac{v_N(t)}{g(t)}=\frac{v_N(t)}{\sqrt{1+h^2t^2}}$, and therefore $|v_N(t)|=g(t)|v(t)|=c|ht|$, which exceeds $c$ exactly when $|ht|>1$, while $|v(t)|<c$ for every finite $t$ by step 1.2. The two velocities agree only at $t=0$; $v_N$ is the Newtonian constant-acceleration prediction of the unscoped law. [given, step 1.2, F5, algebra]

3.1 Error bounds ($h\ne0$): put $s:=ht$ and $g=\sqrt{1+s^2}\ge1$. Rationalisation gives $g-1=\frac{s^2}{g+1}\le\frac{s^2}{2}$ and $1-\frac1g=\frac{g-1}{g}\le\frac{s^2}{2}$; hence $|v-v_N|=|v_N|\bigl|1-\frac1g\bigr|=c|s|\bigl(1-\frac1g\bigr)\le\frac{c}{2}|s|^3$, which is the velocity bound. For the displacement, $r(t)-r_N(t)=\frac{c}{h}\bigl(g-1-\tfrac{s^2}{2}\bigr)e_1$, and the elementary identity $1+\tfrac{s^2}{2}-g=\tfrac{(g-1)^2}{2}$ gives $\bigl|g-1-\tfrac{s^2}{2}\bigr|=\tfrac{(g-1)^2}{2}\le\tfrac{s^4}{8}$ by the first inequality; multiplying by $c/|h|$ gives $|r-r_N|\le\frac{c}{8|h|}|s|^4$. Consequently on $|ht|\le\delta$ the velocity error is at most $c\delta^3/2$ and the displacement error at most $c\delta^4/(8|h|)$; these are special-model comparisons for this explicit solution and do not import a general trajectory-stability consequence of [[pthm-em-relativistic-lorentz-force]] (c). [given, step 1.2, step 2.3, F5, algebra]

4.1 Closing and scope: the prescribed field is a source-free constant smooth-branch solution (step 1.1); for $h\ne0$ the displayed curve is $C^\infty$, future timelike and subluminal at every finite time, and it satisfies the force and power identities with $p=qE_0te_1$ (steps 1.2, 2.1, 2.2); the Newtonian comparison and its exact superluminal condition are step 2.3, and the special-model error bounds are step 3.1; the branch $h=0$ with $q=0$ is step 1.3. The field is prescribed and external, the particle's own field, radiation reaction and any self-force are excluded, no production of the field is described, and no measurement or empirical claim is made. The argument used the field and worldline objects [F1], the smooth-branch equations [F2], the force and power identities [F3], the power and root calculus [F4] and the chain and product rules [F5]; no choice principle is used. [given, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 2.3, step 3.1, F1, F3] ∎

## Source notes

Tong §5.4.2 gives the trajectory for a particle initially at rest in a uniform electric field and its subluminal limiting speed. Fitzpatrick nodes 126–127 give the relativistic momentum, force and power relations; Beisert §9.4 gives the general coordinate force and power equations (9.70)–(9.71), without solving the uniform-field trajectory. The verification above differentiates the displayed closed-form trajectory in the framework's chart ($x^0=ct$, SI units, $h=qE_0/mc$), checks the coordinate force and power identities of the framework's adopted covariant coupling, and quantifies the failure of the unscoped Newtonian constant-acceleration prediction by explicit elementary bounds; the conversion from the sources' conventions is carried out here rather than assumed.
