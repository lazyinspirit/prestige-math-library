---
id: ex-gr-boost-congruence-energy-balance-in-flat-space
kind: example
title: "A boost-Killing congruence in flat space: acceleration source and conservation of the redshift-weighted energy current"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-energy-momentum-current, lem-gr-observer-energy-momentum-decomposition, def-gr-congruence-acceleration-and-expansion, lem-gr-congruence-acceleration-and-expansion-properties, lem-gr-energy-momentum-current-divergence, lem-gr-killing-congruence-kinematics-and-energy-current, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-gr-dust-matter-model, prop-gr-dust-and-perfect-fluid-conservation-equations, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, def-gr-tensor-fields-and-components, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, def-causal-classification-of-lorentz-vectors, prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor, def-real-power, thm-real-power-continuity-and-derivatives, def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-vector-field-as-a-tangent-bundle-section]
dependency_roles:
  def-gr-observer-energy-momentum-current: mathematical-premise
  lem-gr-observer-energy-momentum-decomposition: mathematical-premise
  def-gr-congruence-acceleration-and-expansion: mathematical-premise
  lem-gr-congruence-acceleration-and-expansion-properties: mathematical-premise
  lem-gr-energy-momentum-current-divergence: mathematical-premise
  lem-gr-killing-congruence-kinematics-and-energy-current: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-gr-dust-matter-model: mathematical-premise
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor: mathematical-premise
  def-real-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 5.3: Killing vectors, the Killing equation and conserved quantities along geodesics, printed pp. 53-56 (PDF pp. 54-57)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 5: Killing vectors and the boost symmetry of Minkowski space, printed pp. 140-142 (PDF pp. 147-149)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), sections 3.3.3-3.3.4: the acceleration of an Eulerian congruence as the gradient of the logarithm of the lapse, printed pp. 43-44 (PDF pp. 43-44)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart, the flat metric
$g=\operatorname{diag}(-1,1,1,1)$ and the time orientation $N=\partial_0$, with
metric-selected connection $\nabla$ ([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]). Let

$$U:=\bigl\{p\in M:\ x^1(p)>|x^0(p)|\bigr\},\qquad \xi:=x^1\partial_0+x^0\partial_1,$$

let $X:=\sqrt{(x^1)^2-(x^0)^2}>0$ on $U$, let $n:=\xi/X$, and let
$T^{ab}:=\rho\,\partial_0^a\partial_0^b$ with $\rho>0$ constant (the tensor of
the dust model $(\rho,\partial_0)$, [[def-gr-dust-matter-model]]). Then:

1. $U$ is open, $\xi$ is a Killing field on $U$, and $n$ is a smooth
   future-directed observer congruence on $U$ with
   $n^a\nabla_aX=0$ and acceleration and expansion

$$a=\nabla\ln X=\frac{x^0}{X^2}\,\partial_0+\frac{x^1}{X^2}\,\partial_1,\qquad \theta=0 .$$

2. $(\rho,\partial_0)$ satisfies the dust system and
   $\nabla^aT_{ab}=0$ on $M$.
3. The measured fields of [[def-gr-observer-energy-momentum-current]] for the
   congruence $n$ are

$$\mu=\rho\frac{(x^1)^2}{X^2},\qquad J=\rho\frac{x^1}{X}\,\partial_0,\qquad \Phi=-\rho\frac{x^1(x^0)^2}{X^3}\,\partial_0-\rho\frac{(x^1)^2x^0}{X^3}\,\partial_1 .$$

4. $\nabla_aJ^a=-\Phi^aa_a=\rho x^0x^1/X^3$ and
   $D\mu+\mu\theta+\nabla_a\Phi^a=\rho x^0x^1/X^3$: the balance of
   [[lem-gr-energy-momentum-current-divergence]] clause (b) holds with a
   nonvanishing acceleration source, so the measured energy current is *not*
   conserved.
5. $XJ=\rho x^1\partial_0$ satisfies $\nabla_a(XJ^a)=0$ and
   $T^{ab}\xi_b=-XJ^a$: the redshift-weighted current is conserved, in
   accordance with [[lem-gr-killing-congruence-kinematics-and-energy-current]]
   clause (d). Consequently, for every finite smooth singular $4$-chain
   $C\subseteq U$ with $\partial C=\Sigma_2-\Sigma_1+B$, the flux
   $\Phi_{XJ}$ satisfies $\Phi_{XJ}(\Sigma_2)-\Phi_{XJ}(\Sigma_1)=-\Phi_{XJ}(B)$;
   in particular $\Phi_{XJ}(\Sigma_2)=\Phi_{XJ}(\Sigma_1)$ whenever the
   velocity vectors of every simplex of $B$ span a hyperplane containing
   $\partial_0$.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart, $g=\operatorname{diag}(-1,1,1,1)$, metric-selected connection $\nabla$ and time orientation $N=\partial_0$; the open set $U$; the vector field $\xi=x^1\partial_0+x^0\partial_1$, the positive function $X=\sqrt{(x^1)^2-(x^0)^2}$ and the congruence $n=\xi/X$; the constant $\rho>0$ and the tensor $T^{ab}=\rho\,\partial_0^a\partial_0^b$.

[L1] On the identity chart the Christoffel symbols vanish and $\nabla$ is the coordinate connection, so for smooth fields the covariant derivatives are the coordinate derivatives; in particular the divergence of a vector field is the coordinate divergence ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L2] For a smooth vector field $\xi$ and a covariant $2$-tensor field with constant chart components, $(\mathcal L_\xi g)_{ab}=g_{cb}\partial_a\xi^c+g_{ac}\partial_b\xi^c$; $\xi$ is Killing exactly when $\mathcal L_\xi g=0$ ([[prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor]], [[def-gr-killing-field]]).

[L3] $U$ is open and on $U$ both $X>0$ and $\xi$ is timelike and future-directed: $g(\xi,\xi)=-(x^1)^2+(x^0)^2=-X^2$ and $g(\xi,N)=-x^1<0$; hence $n=\xi/X$ satisfies $g(n,n)=-1$, $g(n,N)=-x^1/X<0$ and is a smooth observer congruence ([[def-gr-observer-congruence-and-adapted-charts]], [[def-gr-observer-and-rest-space]], [[def-causal-classification-of-lorentz-vectors]], [[def-real-power]], [[thm-real-power-continuity-and-derivatives]]).

[L4] For such a timelike Killing field one has $n^a\nabla_aX=0$, $a=\nabla\ln X$ and $\theta=0$ ([[lem-gr-killing-congruence-kinematics-and-energy-current]] clauses (a) and (b)).

[L5] $(\rho,\partial_0)$ is a dust model with tensor $T^{ab}=\rho\,\partial_0^a\partial_0^b$; the dust system holds for constant $\rho$ and constant $\partial_0$, and it is equivalent to $\nabla^aT_{ab}=0$ ([[def-gr-dust-matter-model]], [[prop-gr-dust-and-perfect-fluid-conservation-equations]] clause (a)).

[L6] The measured fields satisfy $J=\mu n+\Phi$ and the decomposition of [[lem-gr-observer-energy-momentum-decomposition]]; with $\nabla^aT_{ab}=0$ the identities $\nabla_aJ^a=-T^{ab}\nabla_an_b$ and $D\mu+\mu\theta+\nabla_a\Phi^a=\nabla_aJ^a$ hold ([[def-gr-observer-energy-momentum-current]], [[lem-gr-energy-momentum-current-divergence]] clauses (a) and (b)).

[L7] For a timelike Killing field $\xi$ with $X=\sqrt{-g(\xi,\xi)}$ and $n=\xi/X$: $T^{ab}\nabla_an_b=\Phi^aa_a$, $\nabla_a(XJ^a)=0$, $T^{ab}\xi_b=-XJ^a$, and the flux balance $\Phi_{XJ}(\Sigma_2)-\Phi_{XJ}(\Sigma_1)=-\Phi_{XJ}(B)$ holds on chains contained in $U$ ([[lem-gr-killing-congruence-kinematics-and-energy-current]] clauses (c) and (d)).

## Verification

**Proof technique:** direct; check the Killing equation in the identity chart, verify the unit and future conditions of $n$, compute the measured fields and the balance explicitly, and identify the divergence-free weighted current.

1.1 (Killing field.) In the identity chart the components of $g$ are constant, so [L2] gives $(\mathcal L_\xi g)_{00}=2g_{00}\partial_0\xi^0=2(-1)(0)=0$, $(\mathcal L_\xi g)_{11}=2g_{11}\partial_1\xi^1=2(1)(0)=0$, $(\mathcal L_\xi g)_{01}=g_{11}\partial_0\xi^1+g_{00}\partial_1\xi^0=1\cdot1+(-1)\cdot1=0$, and the remaining components vanish because $\xi^2=\xi^3=0$ and the metric is diagonal with $\partial_a\xi^0=\delta^1_a$, $\partial_a\xi^1=\delta^0_a$. Hence $\mathcal L_\xi g=0$ and $\xi$ is Killing on $M$, hence on $U$. [L2, algebra]

1.2 (The congruence and its kinematics.) $U$ is open as the preimage of $(0,\infty)$ under the continuous function $x^1-|x^0|$. By [L3], $n=\xi/X$ is a smooth future-directed observer congruence on $U$, and [L4] gives $n^a\nabla_aX=0$, $\theta=0$ and $a=\nabla\ln X$; since $\partial_0X=-x^0/X$ and $\partial_1X=x^1/X$, the covector $a_a=\partial_a\ln X$ has components $(-x^0/X^2,\,x^1/X^2)$ and the vector $a=(x^0/X^2)\partial_0+(x^1/X^2)\partial_1$. [L3, L4, algebra]

1.3 (The dust model.) $\rho>0$ is constant and smooth, and $\partial_0$ is a smooth future-directed unit timelike field with constant components; the dust system is $\nabla_a(\rho\partial_0^a)=\rho\,\partial_0(1)=0$ and $\partial_0^a\nabla_a\partial_0^b=0$ by [L1], so [L5] gives $\nabla^aT_{ab}=0$ on $M$. [L1, L5, algebra]

2.1 (Measured fields.) By [L1], $n^a=(x^1/X)\delta^a_0+(x^0/X)\delta^a_1$ and $n_a=(-x^1/X)\delta^0_a+(x^0/X)\delta^1_a$. Since $T_{ab}=\rho\,\partial^0_a\partial^0_b$ and $\partial_0^an_a=n_0=-x^1/X$, we get $\mu=T_{ab}n^an^b=\rho(x^1)^2/X^2$; further $T^{ab}n_b=\rho\,\partial_0^a n_0=-\rho(x^1/X)\partial_0^a$, so $J^a=-T^{ab}n_b=\rho(x^1/X)\partial_0^a$ and $\Phi=J-\mu n$ has components $\Phi^0=\rho x^1/X-\rho(x^1)^2/X^2\cdot x^1/X=-\rho x^1(x^0)^2/X^3$ and $\Phi^1=0-\rho(x^1)^2/X^2\cdot x^0/X=-\rho(x^1)^2x^0/X^3$, using $(x^1)^2-X^2=(x^0)^2$. This is clause 3, and the decomposition of [L6] holds by [L6]. [L1, step 1.2, L6, algebra]

3.1 (The balance and its source.) By [L1] and step 2.1, $\nabla_aJ^a=\partial_0\!\bigl(\rho x^1/X\bigr)=\rho x^1\partial_0(X^{-1})=-\rho x^1X^{-2}\partial_0X=\rho x^0x^1/X^3$, using $\partial_0X=-x^0/X$. On the other side, $\Phi^aa_a=\Phi^0(-x^0/X^2)+\Phi^1(x^1/X^2)=\rho x^1(x^0)^3/X^5-\rho(x^1)^3x^0/X^5=\rho x^0x^1\bigl((x^0)^2-(x^1)^2\bigr)/X^5=-\rho x^0x^1/X^3$, so $\nabla_aJ^a=-\Phi^aa_a$, consistent with [L7]. Moreover $D\mu=n^a\partial_a\mu=\rho\bigl[(x^1/X)(2(x^1)^2x^0/X^4)+(x^0/X)(2x^1/X^2-2(x^1)^3/X^4)\bigr]=2\rho x^0x^1/X^3$ and $\nabla_a\Phi^a=\partial_0\Phi^0+\partial_1\Phi^1=-\rho x^0x^1/X^3$, so with $\theta=0$ the balance $D\mu+\mu\theta+\nabla_a\Phi^a=\rho x^0x^1/X^3=-\Phi^aa_a$ of [L6] holds and its source does not vanish. [step 1.2, step 2.1, L1, L6, L7, algebra]

4.1 (The weighted current and the flux balance.) $XJ=\rho x^1\partial_0$, so by [L1], $\nabla_a(XJ^a)=\partial_0(\rho x^1)=0$; and $T^{ab}\xi_b=\rho\,\partial_0^a\partial_0^b\xi_b=\rho\,\partial_0^a\xi_0=-\rho x^1\partial_0^a=-XJ^a$. Applying the flux balance of [L7] to $K=XJ$ gives $\Phi_{XJ}(\Sigma_2)-\Phi_{XJ}(\Sigma_1)=-\Phi_{XJ}(B)$ for every finite smooth singular $4$-chain $C\subseteq U$ with $\partial C=\Sigma_2-\Sigma_1+B$. If the velocity vectors of every simplex of $B$ span a hyperplane containing $\partial_0$, then $\iota_{XJ}\mathrm{vol}_g$ vanishes on those velocity vectors, because $\mathrm{vol}_g(\partial_0,v_1,v_2,v_3)=0$ for linearly dependent arguments and $XJ$ is a function multiple of $\partial_0$; hence $\Phi_{XJ}(B)=0$ and $\Phi_{XJ}(\Sigma_2)=\Phi_{XJ}(\Sigma_1)$. This completes the verification. [step 1.2, step 3.1, L1, L7, algebra] ∎

## Remarks

- **Contrast with the unweighted current.** The measured energy current $J$ is
  not divergence-free: the boost congruence is accelerated, and clause 4
  exhibits the source $-\Phi^aa_a$. The redshift weight $X$ converts $J$ into
  the divergence-free current $-T(\cdot,\xi)$, which is the content of
  [[lem-gr-killing-congruence-kinematics-and-energy-current]] in this explicit
  model.

- **Interpretation of the weight.** On $U$ the observers of the congruence
  move with rapidity $\operatorname{artanh}(x^0/x^1)$ relative to the static
  dust; $X=\sqrt{(x^1)^2-(x^0)^2}$ is the corresponding normalization, and the
  measured energy density $\mu=\rho(x^1)^2/X^2$ is the $\gamma^2$-enhanced
  density of the static dust seen by them.

- **No measurement.** The displayed values are exact identities of the flat
  model; the example asserts no measured value and no empirical claim.
