---
id: cex-cm15-deflection-need-not-decrease
kind: counterexample
title: "The deflection need not decrease with the impact parameter: an attractive refracting shell with index $3/2$ has $\\theta(b)=2(\\arcsin(b/a)-\\arcsin(2b/(3a)))$ strictly increasing, with a jump down to $0$ at grazing incidence"
status: draft
origin: session
domain: physics
dependency_level: 18
deps: [post-cm15-impulse,
       def-cm15-asymptotic-data,
       def-cm15-cross-section,
       pthm-cm15-central-scattering,
       def-cm01-units,
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
       cor-mean-value-theorem]
dependency_roles:
  post-cm15-impulse: physical-assumption
  def-cm15-asymptotic-data: formulation-prerequisite
  def-cm15-cross-section: formulation-prerequisite
  pthm-cm15-central-scattering: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
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
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A refutation of the unqualified monotonicity claim for central scattering: a declared attractive refracting-shell model with index $n=3/2$ (an adopted radial contact rule conserving tangential velocity and energy at $r=a$) has deflection $\\theta(b)=2(\\arcsin(b/a)-\\arcsin(2b/(3a)))$ for $b<a$, strictly increasing in $b$ and jumping down to $0$ at grazing incidence, so the deflection is not a decreasing function of the impact parameter and the scattering map is not injective. The model is a contact model outside the $C^2$ finite-range hypothesis of the central-scattering theorem; the example isolates the necessity of that hypothesis for any monotonicity statement and reports no observation and no measured value."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.5, the discussion after Eq. (3.69): the assertion that the scattering angle decreases as the particle energy or the impact parameter is increased, the unqualified form of which is refuted here"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.4, Eqs. (352)-(357): the impenetrable-sphere example, where the deflection is monotone for the reflection contact rule; the contrast with the refracting rule below shows that monotonicity is a property of the interaction rule, not of central scattering as such"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
---

## Statement refuted

**False statement.** *Let a conservative central scattering model with a
finite-range interaction, positive energy and nonzero angular momentum have
a unique scattering angle for every impact parameter. Then the scattering
angle is a strictly decreasing function of the impact parameter.*

The central-scattering theorem [[pthm-cm15-central-scattering]] does not
assert this: its clause 5 records that no monotonicity of
$b\mapsto\theta_{\mathrm s}$ is claimed, and
[[def-cm15-cross-section]] sums over deflection branches instead of
inverting a global decreasing function. The witness below shows that the
claim is false already for a conservative finite-range radial rule, and
identifies which hypothesis of the theorem fails for it: the rule is a
contact rule at $r=a$, not a $C^2$ potential on $(0,\infty)$.

## Facts & Assumptions

**Given:** A length $a>0$, a reduced mass $\mu>0$, a positive energy $E>0$, and the **refracting-shell model**: the label moves freely for $r\ne a$; at $r=a$ the adopted radial contact rule preserves the tangential velocity component (the contact force is radial, so the angular momentum about the centre is conserved) and conserves the energy with a potential drop $U_0>0$ inside, so that the speed inside is $v_{\mathrm{in}}=\sqrt{v_\infty^2+2U_0/\mu}$ with $v_\infty=\sqrt{2E/\mu}$; the rule is the index-$3/2$ choice $v_{\mathrm{in}}=\frac32v_\infty$, i.e. $n:=\frac32$ and $U_0=\frac54E$. The incoming motion is a straight line with impact parameter $b\ge0$ and speed $v_\infty$.

[L1] Rule consistency and existence of the broken straight motion ([[post-cm15-impulse]] clauses (i)-(ii) for the contact-law format, [[def-cm15-asymptotic-data]] clauses (ii)-(iii) for the deflection vocabulary, [[def-cross-product-in-r3]], [[def-euclidean-inner-product]]): with the tangential velocity component and the energy preserved at the interface, the inside velocity obtains by Snell's law $\sin\alpha=n\sin\beta$ at the entry and, by the symmetry of the chord, the exit is the mirror configuration; the inside radial kinetic energy at $r=a$ equals $\frac\mu2\bigl(v_\infty^2+2U_0/\mu\bigr)\bigl(1-b^2/a^2\bigr)>0$ for $b<a$, so the label always reaches the second intersection and no internal reflection occurs.

[L2] Chord and refraction geometry ([[def-euclidean-inner-product]]): for an entry point $P=a\,e_x$, incident direction $\hat u=-\cos\alpha\,e_x+\sin\alpha\,e_y$ with $\sin\alpha=b/a$, inside direction $\hat u_{\mathrm{in}}=-\cos\beta\,e_x+\sin\beta\,e_y$ and chord length $2a\cos\beta$, the exit point is $Q=a(-\cos2\beta\,e_x+\sin2\beta\,e_y)$ with outward normal $\hat n_Q=Q/a$, and the outgoing direction is $\hat u_{\mathrm{out}}=\cos\alpha\,\hat n_Q+\sin\alpha\,\hat t_Q$ with $\hat t_Q:=-\sin2\beta\,e_x-\cos2\beta\,e_y$; expanding gives $\hat u_{\mathrm{out}}=-\cos(2\beta-\alpha)e_x+\sin(2\beta-\alpha)e_y$, so the angle between $\hat u$ and $\hat u_{\mathrm{out}}$ is $2(\alpha-\beta)$.

[L3] Inverse trigonometry and monotonicity ([[def-principal-inverse-sine-and-cosine]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]], [[thm-monotonicity-from-the-derivative]], [[thm-intermediate-value]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-interval]], [[cor-mean-value-theorem]]): $\arcsin$ is increasing and differentiable on $(-1,1)$ with derivative $(1-x^2)^{-1/2}$, so $b\mapsto\arcsin(b/a)$ and $b\mapsto\arcsin(b/(na))$ are differentiable on $(0,a)$; a differentiable function with positive derivative on an interval is strictly increasing; and a strictly increasing function is injective, so a value is attained at most once.

## Counterexample

**Proof technique:** direct.

1.1 Motion: for $0<b<a$ the model of the Facts admits the exact broken-straight motion: an incoming straight line, a chord inside $r<a$ (the label moves freely there with speed $v_{\mathrm{in}}$), and an outgoing straight line; the entry and exit data are related by the two conservation rules as in [L1], and [L2] computes the outgoing direction. For $b\ge a$ the line misses the shell and the motion is free, with deflection $0$. [given, L1, L2]

1.2 Deflection formula: by [L2], for $b\in(0,a)$ the angle between the incoming and outgoing directions is $\theta(b)=2(\alpha-\beta)$ with $\sin\alpha=b/a$ and $\sin\beta=\sin\alpha/n=b/(na)$, that is
$$\theta(b)=2\Bigl(\arcsin\frac{b}{a}-\arcsin\frac{2b}{3a}\Bigr)\qquad(0<b<a).$$ [step 1.1, L2, algebra]

2.1 Monotonicity: differentiating [L3], $$\theta'(b)=2\left(\frac{1}{\sqrt{a^2-b^2}}-\frac{1}{\sqrt{n^2a^2-b^2}}\right)>0\qquad(0<b<a),$$ because $n>1$ gives $\sqrt{n^2a^2-b^2}>\sqrt{a^2-b^2}>0$, so each term is positive; hence $\theta$ is strictly increasing on $(0,a)$, the opposite of the claimed decrease. [step 1.2, L3, algebra]

2.2 Consistency of the contact rule: at the entry the angular momentum about the centre is $\mu b v_\infty$, and inside it equals $\mu a v_{\mathrm{in}}\sin\beta=\mu a\,nv_\infty\sin\beta=\mu b v_\infty$, so angular momentum is conserved across the interface as the radial contact force requires; the energy is conserved by construction of $v_{\mathrm{in}}$ with $U_0=\frac54E$. The model is therefore conservative and finite-range in the sense of the false statement. [step 1.1, L1, L2, algebra]

3.1 Values and the grazing jump: $\theta(0)=0$ and, as $b\uparrow a$, $\alpha\to\pi/2$ and $\beta\to\arcsin(1/n)=\arcsin\frac23$, so $\theta(b)\to\pi-2\arcsin\frac23\approx1.682$ rad $\approx96.4^\circ$; while for every $b\ge a$ the deflection is $0$. The map is therefore not decreasing (it increases on $(0,a)$ and then drops to $0$), and it is not injective: the value $0$ is attained for every $b\ge a$, in addition to its branch value at $b=0$. [step 2.1, L3, algebra]

4.1 Failure of the false statement and of the theorem's hypothesis: the model has a well-defined scattering angle $\theta(b)$ for every $b\ge0$, and $\theta$ is not decreasing; hence the false statement fails. The reason it does not contradict [[pthm-cm15-central-scattering]] is precisely its clause-5 and (H1)-(H2) structure: the refracting shell is a contact rule at $r=a$, and its potential (piecewise constant, discontinuous at $a$) is not of class $C^2$ on $(0,\infty)$, so the theorem's hypotheses are not met. This witness therefore shows that the smooth $C^2$ finite-range hypothesis is doing genuine work in the monotonicity question and cannot be dropped, and the cross-section statement of the page must be phrased on deflection branches as in [[def-cm15-cross-section]]. [step 3.1, step 2.2, given, L1, L3] ∎

## Remarks

- **What is and is not claimed about the model.** The refracting-shell rule is *adopted*, exactly as the reflection rule of [[ex-cm15-hard-sphere-reflection-check]]: the tangential-velocity and energy conditions are the model's contact law, consistent with a radial impulsive force at the shell. Unlike the impenetrable-sphere contact, this rule is *not* specular reflection; the inside speed exceeds the outside speed and the contact bends the path toward the normal.

- **The grazing discontinuity.** At $b=a$ the contact angle is grazing, the chord length shrinks to zero, and the deflection jumps from $\pi-2\arcsin\frac23$ to $0$. This is a genuine model feature (a "glory" concentration near forward angles in the associated cross-section) and a further reason why the cross-section must be built from branch data rather than from a single monotone inverse.

- **No empirical claim.** The index $3/2$, the radius $a$ and the energy $E$ are declared model data; the computation checks an assertion about model functions, not a measurement of any material.
