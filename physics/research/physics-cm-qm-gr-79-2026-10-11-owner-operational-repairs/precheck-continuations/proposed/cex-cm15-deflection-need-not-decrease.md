---
id: cex-cm15-deflection-need-not-decrease
kind: counterexample
title: "Smooth finite-range free scattering refutes global strict decrease; as a
  separate contact comparison, an attractive refracting shell with index $3/2$
  has $\\theta(b)=2(\\arcsin(b/a)-\\arcsin(2b/(3a)))$ strictly increasing, with
  a jump down to $0$ at grazing incidence"
status: draft
origin: session
domain: physics
dependency_level: 18
deps:
  [
    post-cm15-impulse,
    def-cm15-asymptotic-data,
    def-cm15-cross-section,
    pthm-cm15-central-scattering,
    def-cm01-units,
    post-cm01-frames,
    def-interval,
    def-euclidean-inner-product,
    def-cross-product-in-r3,
    def-principal-inverse-sine-and-cosine,
    thm-sine-cosine-signs-monotonicity-and-ranges,
    thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions,
    thm-monotonicity-from-the-derivative,
    thm-intermediate-value,
    thm-chain-rule,
    thm-algebra-of-derivatives,
    cor-mean-value-theorem,
    def-countable-choice
  ]
dependency_roles:
  post-cm15-impulse: formulation-prerequisite
  def-cm15-asymptotic-data: formulation-prerequisite
  def-cm15-cross-section: formulation-prerequisite
  pthm-cm15-central-scattering: physical-result
  def-cm01-units: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-principal-inverse-sine-and-cosine: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  thm-monotonicity-from-the-derivative: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Assuming countable choice for the scattering measures and
  vocabulary, the smooth finite-range model has zero deflection for every impact
  parameter beyond its range, so any globally defined deflection map is constant
  on this tail and cannot be strictly decreasing. The zero potential is a
  genuine smooth witness with unique deflection for every positive impact
  parameter. As a separate example-specific contact model, the adopted
  attractive refracting shell of index 3/2 has a strictly increasing branch on
  $0<b<a$ and a jump to zero at grazing incidence $b=a$; the endpoint extension
  at $b=0$ is not a branch value, and the contact model is outside the smooth
  central-scattering class and the restricted restitution postulate. All
  computations concern declared model data and report no observations."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics
        (title page last edited September 1, 2026), §3.5, the discussion after
        Eq. (3.69): the assertion that the scattering angle decreases as the
        particle energy or the impact parameter is increased, the unqualified
        form of which is refuted here"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §6.4, Eqs. (352)-(357): the impenetrable-sphere example, where the
        deflection is monotone for the reflection contact rule; the contrast
        with the refracting rule below shows that monotonicity is a property of
        the interaction rule, not of central scattering as such"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
---

## Statement refuted

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the cited scattering measures and vocabulary.

**False statement.** *Let a conservative central scattering model with a
finite-range interaction, positive energy and nonzero angular momentum have
a unique scattering angle for every impact parameter. Then the scattering
angle is a strictly decreasing function of the impact parameter.*

The smooth finite-range witness below refutes this claim within the exact
central-scattering class of [[def-cm15-asymptotic-data]]: the zero potential
has deflection $0$ at every positive impact parameter. More generally,
beyond the range of any finite-range potential the scattering trajectories
are free, so a globally defined deflection map has a constant tail. The
separate adopted refracting-shell comparison retains its increasing branch;
that contact rule is outside the smooth $C^2$ class and is not used as the
witness for the stated claim. [[pthm-cm15-central-scattering]] clause 5 makes
no global monotonicity assertion, and [[def-cm15-cross-section]] uses
specified deflection branches instead of inverting a global decreasing map.

## Facts & Assumptions

**Given:** Countable choice for the scattering measures. A length $a>0$, a reduced mass $\mu>0$, a positive energy $E>0$, with $[a]=\ell$, $[\mu]=\mu$ and $[E]=[U_0]=\mu\ell^2\tau^{-2}$; the speeds $v_\infty,v_{\mathrm{in}}$ have units $\ell\tau^{-1}$ and the angle parameters are dimensionless. Also adopt the following separate **refracting-shell model**: the label moves freely for $r\ne a$; at $r=a$ the example-specific radial contact rule preserves the tangential velocity component and conserves energy with a potential drop $U_0>0$ inside, so the speed inside is $v_{\mathrm{in}}=\sqrt{v_\infty^2+2U_0/\mu}$ with $v_\infty=\sqrt{2E/\mu}$. Choose the index $n=\frac32$ so that $v_{\mathrm{in}}=\frac32v_\infty$ and $U_0=\frac54E$. This interface rule is adopted here and is not supplied by [[post-cm15-impulse]] clause (ii), which covers only finite-mass collinear two-label restitution. The incoming motion is a straight line with impact parameter $b\ge0$ and speed $v_\infty$. The interface rule is applied at transverse crossings; at grazing $b=a$ adopt the free continuation. Separately, for the genuine smooth witness use the central model on time window $\mathbb R$ with $u=0$ and two equal label masses $2\mu$.

**Trajectory convention for the contact comparison.** In the plane spanned
by the orthonormal vectors $e_x,e_y$, time is $t\in\mathbb R$ in the fixed
inertial chart and the label's position relative to the shell centre is a
continuous curve $\gamma_b:\mathbb R\to\mathbb R^3$. For $0<b<a$ it is
piecewise affine, with one incoming free segment, one interior chord and one
outgoing free segment; its one-sided velocity limits at the two contact
times obey the separately adopted interface rule. For $b>a$ it is a free
line, and for $b=a$ the adopted free grazing continuation is used. The
impact parameter is the perpendicular distance of the incoming affine line
from the origin. At $b=0$ the same rule gives the radial diameter path,
while the extension $\theta(0)=0$ is only an endpoint convention for the
branch. This contact path is not asserted to be a motion of the $C^2$
central-potential model.

[L1] For the separately adopted interface rule of the Given clause, tangential-velocity preservation and the energy change imply Snell's relation $\sin\alpha=n\sin\beta$ at entry; by chord symmetry the exit is the mirror configuration. The inside radial kinetic energy at $r=a$ is $\frac\mu2(v_{\mathrm{in}}^2-v_\infty^2b^2/a^2)=\frac\mu2v_\infty^2(n^2-b^2/a^2)>0$ for $b<a$. The outgoing radial energy is $\frac\mu2v_\infty^2(1-b^2/a^2)>0$, so the label reaches the second intersection and transmits without internal reflection. This separate rule is not the finite-mass collinear contact law of [[post-cm15-impulse]] clause (ii). ([[def-cross-product-in-r3]], [[def-euclidean-inner-product]])

[L2] Chord and refraction geometry ([[def-euclidean-inner-product]]): for an entry point $P=a\,e_x$, incident direction $\hat u=-\cos\alpha\,e_x+\sin\alpha\,e_y$ with $\sin\alpha=b/a$, inside direction $\hat u_{\mathrm{in}}=-\cos\beta\,e_x+\sin\beta\,e_y$ and chord length $2a\cos\beta$, the exit point is $Q=a(-\cos2\beta\,e_x+\sin2\beta\,e_y)$ with outward normal $\hat n_Q=Q/a$, and the outgoing direction is $\hat u_{\mathrm{out}}=\cos\alpha\,\hat n_Q+\sin\alpha\,\hat t_Q$ with $\hat t_Q:=-\sin2\beta\,e_x-\cos2\beta\,e_y$; expanding gives $\hat u_{\mathrm{out}}=-\cos(2\beta-\alpha)e_x+\sin(2\beta-\alpha)e_y$, so the angle between $\hat u$ and $\hat u_{\mathrm{out}}$ is $2(\alpha-\beta)$.

[L3] Inverse trigonometry and monotonicity ([[def-principal-inverse-sine-and-cosine]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]], [[thm-monotonicity-from-the-derivative]], [[thm-intermediate-value]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-interval]], [[cor-mean-value-theorem]]): $\arcsin$ is increasing and differentiable on $(-1,1)$ with derivative $(1-x^2)^{-1/2}$, so $b\mapsto\arcsin(b/a)$ and $b\mapsto\arcsin(b/(na))$ are differentiable on $(0,a)$; a differentiable function with positive derivative on an interval is strictly increasing; and a strictly increasing function is injective, so a value is attained at most once.

[L4] Smooth central scattering ([[def-cm15-asymptotic-data]] clauses (i)-(iii), [[pthm-cm15-central-scattering]] clauses 1-3 and 5): the adopted smooth model has masses $m_1,m_2>0$, reduced mass $\mu$ and static $C^2$ potential $u$. For $u=0$ on $[R,\infty)$, the effective potential on that region is $V(r)=J^2/(2\mu r^2)$. The theorem applies to a model trajectory attaining a simple outer turning radius with $V=E$ and $V<E$ beyond it; the scattering angle is the angle between the nonzero asymptotic relative velocities. No global monotonicity is asserted.

## Counterexample

**Proof technique:** direct.

1.1 Motion: for $0<b<a$ the model of the Facts admits the exact broken-straight motion: an incoming straight line, a chord inside $r<a$ (the label moves freely there with speed $v_{\mathrm{in}}$), and an outgoing straight line; the entry and exit data are related by the two conservation rules as in [L1], and [L2] computes the outgoing direction. For $b>a$ the line misses the shell; at $b=a$ it has the adopted free grazing continuation. In both cases the deflection is $0$. [given, L1, L2]

1.2 Genuine smooth finite-range witness and the general obstruction: fix an adopted smooth central model on time window $\mathbb R$ with $u(r)=0$ for $r\ge R$, and let $b>R$, $v_\infty=\sqrt{2E/\mu}$ and $r_b(t)=(v_\infty t,b,0)$. Then $|r_b(t)|\ge b>R$, so $u=u'=0$ along it and $r_b''=0$ solves the reduced equation. With $M=m_1+m_2$, the curves $x_1=(m_2/M)r_b$, $x_2=-(m_1/M)r_b$ have separation $r_b$, zero accelerations and zero force, hence are motions of the adopted model with zero centre of mass. Their angular momentum has magnitude $J=\mu b v_\infty>0$ and energy $E$; at the turning radius $b$, $V(b)=E$, $V'(b)=-J^2/(\mu b^3)<0$ and $V(r)<E$ for every $r>b$, matching [L4]. Both asymptotic relative velocities equal $(v_\infty,0,0)$, so the deflection is uniquely $0$. Any incoming line with impact parameter $b>R$ stays outside the interaction region and continues freely; thus every finite-range model has this constant deflection tail. In particular $u=0$ is $C^2$ and finite-range, and the same construction works for every $b>0$, giving a unique angle $0$ for every positive impact parameter; two distinct positive parameters therefore violate the asserted strict decrease. [given, L4, algebra]

2.1 Deflection formula: by [L2], for $b\in(0,a)$ the angle between the incoming and outgoing directions is $\theta(b)=2(\alpha-\beta)$ with $\sin\alpha=b/a$ and $\sin\beta=\sin\alpha/n=b/(na)$, that is
$$\theta(b)=2\Bigl(\arcsin\frac{b}{a}-\arcsin\frac{2b}{3a}\Bigr)\qquad(0<b<a).$$ [step 1.1, L2, algebra]

2.2 Consistency of the contact rule: at the entry the angular momentum about the centre is $\mu b v_\infty$, and inside it equals $\mu a v_{\mathrm{in}}\sin\beta=\mu a\,nv_\infty\sin\beta=\mu b v_\infty$, so angular momentum is conserved across the interface as the radial contact force requires; the energy is conserved by construction of $v_{\mathrm{in}}$ with $U_0=\frac54E$. This separate contact model is conservative and finite-range as an adopted radial rule; it is not a member of the smooth central-scattering class. [step 1.1, L1, L2, algebra]

3.1 Monotonicity: differentiating [L3], $$\theta'(b)=2\left(\frac{1}{\sqrt{a^2-b^2}}-\frac{1}{\sqrt{n^2a^2-b^2}}\right)>0\qquad(0<b<a),$$ because $n>1$ gives $\sqrt{n^2a^2-b^2}>\sqrt{a^2-b^2}>0$, so the first reciprocal exceeds the second; hence $\theta$ is strictly increasing on $(0,a)$, the opposite of the claimed decrease. [step 2.1, L3, algebra]

4.1 Endpoint limits and the grazing jump: the continuous endpoint extension at $b=0$ is $\theta(0)=0$, which is not a branch value because the branch domain is $(0,a)$. As $b\uparrow a$, $\alpha\to\pi/2$ and $\beta\to\arcsin(1/n)=\arcsin\frac23$, so $\theta(b)\to\pi-2\arcsin\frac23\approx1.682$ rad $\approx96.4^\circ$; at grazing $b=a$ and for every $b>a$ the adopted free continuation has deflection $0$. This value lies outside the branch's angular domain $(0,\pi)$. The full contact-model deflection therefore increases on $(0,a)$ and then drops to $0$, and it is not injective. [step 3.1, L3, algebra]

5.1 Conclusion: step 1.2 refutes the stated global strict-decrease claim with a genuine smooth central-scattering model satisfying its positive-energy, nonzero-angular-momentum and unique-angle hypotheses. More generally, any finite-range model whose angle is defined for every positive impact parameter has the constant free tail established there, so global strict decrease fails even when the interaction inside the range is nontrivial. Steps 1.1-4.1 separately retain the increasing refracting-shell branch and its adopted grazing jump; that contact comparison lies outside the smooth class and supplies no claim that $C^2$ regularity implies or is necessary for monotonicity. The central-scattering theorem itself records no global monotonicity claim and assumes a chosen nondegenerate branch for its cross-section formula. [step 1.2, step 1.1, step 4.1, step 2.2, L4] ∎

## Remarks

- **What is and is not claimed about the model.** The refracting-shell rule is *adopted*, exactly as the reflection rule of [[ex-cm15-hard-sphere-reflection-check]]: the tangential-velocity and energy conditions are the model's contact law, consistent with a radial impulsive force at the shell. Unlike the impenetrable-sphere contact, this rule is *not* specular reflection; the inside speed exceeds the outside speed and the contact bends the path toward the normal.

- **The grazing discontinuity.** As $b\uparrow a$, the interior chord length $2a\cos\beta$ tends to $2a\sqrt5/3>0$, since $\sin\beta\to2/3$. At $b=a$ the separately adopted free grazing path has no interior chord, and the deflection jumps from the branch's endpoint limit $\pi-2\arcsin\frac23$ to $0$. Neither $b=0$ nor the zero-angle grazing outcome is in the defined branch, whose domain is $(0,a)$ and whose image lies in $(0,\pi)$. This is a feature of the declared contact rule; no forward-angle cross-section contribution at $\theta=0$ is defined here.

- **No empirical claim.** The index $3/2$, the radius $a$ and the energy $E$ are declared model data; the computation checks an assertion about model functions, not a measurement of any material.
