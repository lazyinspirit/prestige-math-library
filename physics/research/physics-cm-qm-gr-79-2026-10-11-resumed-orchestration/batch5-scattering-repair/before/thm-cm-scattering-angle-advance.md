---
id: thm-cm-scattering-angle-advance
kind: theorem
title: "The scattering angle advance $\\Delta$ and the deflection relation: the total polar advance is $2\\Delta$ and the velocity directions make the cosine $\\cos(\\pi-2\\Delta)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-cm-central-force-trajectory, def-cm-scattering-data, thm-cm-central-force-polar-reduction, thm-cm-scattering-turning-point-and-global-branches, thm-cm-scattering-asymptotic-velocities-and-impact-parameter, def-euclidean-inner-product, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-derivative-of-an-inverse, thm-substitution, thm-chain-rule, thm-algebra-of-derivatives, def-interval, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm-central-force-trajectory: mathematical-premise
  def-cm-scattering-data: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  thm-cm-scattering-turning-point-and-global-branches: mathematical-premise
  thm-cm-scattering-asymptotic-velocities-and-impact-parameter: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  thm-substitution: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.4, Eqs. (346)-(351): the scattering-angle quadrature and the relation between the half-angle and the deflection"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.5, Eqs. (3.66)-(3.68): $\\theta=\\pi-2\\varphi_0$ with the nearest-approach angle $\\varphi_0$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let the hypotheses of
[[thm-cm-scattering-turning-point-and-global-branches]] hold, let
$r:\mathbb R\to\mathbb R^3$ be the extension of the trajectory, and let
$(\rho,\theta)$ be polar data with $r=\rho\,n(\theta)$,
$n(\varphi)=\cos\varphi\,e_1+\sin\varphi\,e_2$
([[thm-cm-central-force-polar-reduction]]). Write
$t_*$ for the apsis time, and for $\alpha\in\mathbb R$ let $R_\alpha$ be the
rotation of the plane $\operatorname{span}(e_1,e_2)$,
$R_\alpha(x):=\cos\alpha\,x+\sin\alpha\,(e_3\times x)$. Then:

1. the half-angle
   $$\Delta:=\int_{r_*}^{\infty}\frac{J\,\mathrm dr}{r^2\sqrt{2\mu\,(E-V(r))}}$$
   is finite and positive, and
   $$\theta(\infty)-\theta(t_*)=\Delta=\theta(t_*)-\theta(-\infty),\qquad \theta(\infty)-\theta(-\infty)=2\Delta;$$
2. $\displaystyle\lim_{t\to\pm\infty}n(\theta(t))$ exist and equal
   $v_+/|v_+|$ (as $t\to+\infty$) and $-v_-/|v_-|$ (as $t\to-\infty$);
3. consequently
   $$\frac{v_+}{|v_+|}=-R_{2\Delta}\Bigl(\frac{v_-}{|v_-|}\Bigr), \qquad \frac{\langle v_-,v_+\rangle}{|v_-|\,|v_+|}=-\cos 2\Delta=\cos(\pi-2\Delta);$$
   in particular, if $0<\Delta<\pi/2$ then $\pi-2\Delta\in(0,\pi)$ is the
   (undirected) angle between the asymptotic velocity directions, and the
   signed velocity rotation is $-( \pi-2\Delta)$ in the orientation defined by
   $e_3$.

## Facts & Assumptions

**Given:** The finite-range scattering orbit with its apsis time $t_*$, its polar data, its asymptotic velocities $v_\pm$ ([[thm-cm-scattering-asymptotic-velocities-and-impact-parameter]]) and the frozen angular momentum $j=Je_3$, $J>0$.

[L1] Branch structure and quadrature: $\rho(t_*)=r_*$, $\rho$ is strictly decreasing on $(-\infty,t_*]$ and strictly increasing on $[t_*,\infty)$, $\rho'$ has the corresponding signs, and $(\rho')^2=(2/\mu)(E-V(\rho))$ ([[thm-cm-scattering-turning-point-and-global-branches]]).

[L2] $\rho^2\theta'=J/\mu$ and $\theta$ is strictly increasing ([[thm-cm-central-force-polar-reduction]]).

[L3] Substitution on a strictly monotone branch and the conversion $\mathrm dt=\mathrm d\rho/|\rho'|$ ([[thm-substitution]], [[thm-derivative-of-an-inverse]], [[thm-chain-rule]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-interval]]).

[L4] The addition formulas give $n(\varphi+\alpha)=R_\alpha(n(\varphi))$ for all $\varphi,\alpha$, and the cross product identity $\langle u,e_3\times u\rangle=0$ for every $u$: the mixed term of $\langle u,R_\alpha u\rangle$ vanishes because $\langle u,e_3\times u\rangle=\det[u,e_3,u]=0$ under the determinant form of the scalar triple product ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-cross-product-in-r3]]).

[L5] Free tails: for $t_1\ge t_*$ with $\rho(t_1)>R$, $r(t)=r(t_1)+(t-t_1)v_+$ for $t\ge t_1$; symmetrically on the incoming tail with $v_-$ ([[thm-cm-scattering-turning-point-and-global-branches]], [[thm-cm-scattering-asymptotic-velocities-and-impact-parameter]]).

## Proof

**Proof technique:** direct.

1.1 Outgoing half-angle: on $[t_*,\infty)$, $\theta$ is $C^1$ and strictly increasing with $\theta'=J/(\mu\rho^2)>0$, and $\rho$ is a $C^1$ strictly increasing bijection of $[t_*,\infty)$ onto $[r_*,\infty)$; substituting $\rho$ for $t$ on this branch [L3] gives $$\theta(\infty)-\theta(t_*)=\int_{t_*}^{\infty}\theta'(t)\,\mathrm dt =\int_{r_*}^{\infty}\frac{J}{\mu s^2}\frac{\mathrm ds}{\rho'(s)}=\int_{r_*}^{\infty}\frac{J\,\mathrm ds}{s^2\sqrt{2\mu\,(E-V(s))}}=\Delta,$$ using $\rho'=\sqrt{(2/\mu)(E-V)}$ from [L1]; the integral converges at $r_*$ because $E-V(s)$ is comparable to $s-r_*$ there and diverges nowhere else, and it is positive. [given, L1, L2, L3, algebra]

2.1 Incoming half-angle: the same computation on the decreasing branch $(-\infty,t_*]$, where $\rho'=-\sqrt{(2/\mu)(E-V(\rho))}$ and the substitution reverses the sign, gives $\theta(t_*)-\theta(-\infty)=\Delta$; adding the two halves gives $\theta(\infty)-\theta(-\infty)=2\Delta$, which is clause 1. [step 1.1, L1, L2, L3, algebra]

3.1 Direction limits: on the outgoing tail [L5], $r(t)/\lVert r(t)\rVert_2\to v_+/|v_+|$ as $t\to\infty$ (an affine curve with nonzero velocity direction tends to its velocity direction), and $r(t)/\rho(t)=n(\theta(t))\to n(\theta(\infty))$ because $\theta$ has a finite limit and $n$ is continuous; hence $n(\theta(\infty))=v_+/|v_+|$. On the incoming tail, $t-t_2<0$ tends to $-\infty$, so $r(t)/\lVert r(t)\rVert_2\to -v_-/|v_-|$, while $r(t)/\rho(t)\to n(\theta(-\infty))$; hence $n(\theta(-\infty))=-v_-/|v_-|$. This is clause 2. [step 1.1, step 2.1, L5, algebra]

4.1 Rotation form: by [L4], $v_+/|v_+|=n(\theta(\infty))=n(\theta(-\infty)+2\Delta)=R_{2\Delta}(n(\theta(-\infty)))=-R_{2\Delta}(v_-/|v_-|)$, the first equality of clause 3. [step 2.1, step 3.1, L4, algebra]

5.1 Cosine: writing $u:=v_-/|v_-|$, the last identity gives $\langle v_-,v_+\rangle/(|v_-||v_+|)=\langle u,-R_{2\Delta}u\rangle=-\cos 2\Delta$, because $\langle u,R_{2\Delta}u\rangle=\cos 2\Delta\,|u|^2+\sin 2\Delta\,\langle u,e_3\times u\rangle=\cos 2\Delta$ by [L4]. Since $\cos(\pi-2\Delta)=-\cos 2\Delta$, this gives the displayed cosine; if $0<\Delta<\pi/2$ then $\pi-2\Delta\in(0,\pi)$ and the identity says that the angle between the two nonzero velocity vectors (the unique angle in $[0,\pi]$ whose cosine is the displayed value, cosine being strictly decreasing there) is $\pi-2\Delta$. [step 4.1, L4, algebra] ∎
