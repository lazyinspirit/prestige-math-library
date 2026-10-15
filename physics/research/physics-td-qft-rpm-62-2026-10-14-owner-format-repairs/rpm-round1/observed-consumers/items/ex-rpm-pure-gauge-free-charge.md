---
id: ex-rpm-pure-gauge-free-charge
kind: example
title: "Pure-gauge potential and free massive charged motion"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
physical_scope: "Symbolic flat-Minkowski example of the adopted external-field massive charged test-body action, on finite fixed-endpoint timelike segments and under the inherited countable-choice hypothesis. The pure-gauge potential changes a local canonical covector without changing the kinetic momentum or producing a Lorentz force. No self-field, radiation reaction, measured energy, empirical finding or interaction mechanism is asserted."
empirical_premises: []
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
deps:
  - def-sr-affine-minkowski-model
  - def-inertial-frame-and-inertial-chart
  - def-rpm-charge-spin-model
  - post-rpm-external-charge-action
  - lem-rpm-charge-gauge-boundary
  - pthm-rpm-external-charge-action-equivalence
  - def-countable-choice
  - cor-zero-derivative-implies-constant
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-rpm-charge-spin-model: formulation-prerequisite
  post-rpm-external-charge-action: physical-assumption
  lem-rpm-charge-gauge-boundary: mathematical-premise
  pthm-rpm-external-charge-action-equivalence: physical-result
  def-countable-choice: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 lecture-note excerpt"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
      locator: "The exact local action and gauge dictionary is supplied by the final batch-24 items; this item is the reserved D7 polynomial specialization and proves its calculation locally."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011)"
      url: "https://arxiv.org/html/1102.0529v3"
      locator: "Source context for the charged-particle action in §5.2.1, as documented by the final batch-24 suppliers; no self-field theory or empirical observation is used in this example."
verification: {}
---

## Example

Use flat affine Minkowski spacetime $(\mathcal A,V,\eta,C^+)$ with signature $(-,+,+,+)$ in one named inertial chart $(x^0,x^1,x^2,x^3)$, $x^0=ct$, with coordinates in metres. Adopt the external charged test-body action of [[post-rpm-external-charge-action]], the model quantities of [[def-rpm-charge-spin-model]], and the countable-choice hypothesis $\mathrm{AC}_\omega$ of [[def-countable-choice]] required by the final action-equivalence supplier; no full Axiom of Choice is assumed. Fix $m>0$ kilograms, $q\in\mathbb R$ coulombs and $c>0$ metres per second. For a chosen constant $b\in\mathbb R$ in tesla, put

$$\chi(x)=\frac b2(x^1)^2,\qquad A=d\chi=b x^1\,dx^1.$$

Here $\chi$ has units tesla metre squared and the covector components $A_a$ have units tesla metres. Then $F=dA=0$. On every finite $C^2$ future-timelike segment $z:[\tau_0,\tau_1]\to\mathcal A$ with $\tau_0<\tau_1$, proper-time parameter in seconds and fixed endpoint events $X_0,X_1$, the action differs from its zero-potential value by

$$S_A[z]-S_0[z]=q\bigl(\chi(X_1)-\chi(X_0)\bigr).$$

Thus its stationary curves are precisely the free massive straight timelike curves on these segments. Their kinetic momentum $P=mU$, $U=dz/d\tau$, is constant. With $p=mU^\flat$ and the local canonical covector $\pi_A=p+qA$ of [[lem-rpm-charge-gauge-boundary]],

$$\pi_{A,1}=mU_1+qb x^1,\qquad \frac{d\pi_{A,1}}{d\tau}=qb U^1.$$

The raised and lowered spatial components agree in this chart. This canonical component can vary when $qbU^1\ne0$, while the Lorentz force and kinetic-momentum derivative vanish. If any factor vanishes, the canonical component is constant too. The shift is a gauge-dependent covector calculation, not a force or an energy measurement.

## Facts & Assumptions

**Given:** The flat inertial chart, $m,c>0$, constants $q,b$, the displayed polynomial potential, finite timelike segments parameterized by proper time, fixed endpoint events and the adopted action model.

[A1] [[post-rpm-external-charge-action]] adopts stationarity of $S_A=-mc\int\sqrt{-g(z',z')}d\lambda+q\int A(z')d\lambda$ under finite fixed-endpoint timelike variations on a local potential domain. The displayed potential is smooth globally, so every stated finite segment lies in such a domain.

[A2] [[def-countable-choice]]: assume only $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure used by the action-equivalence supplier.

[F1] [[def-sr-affine-minkowski-model]] and [[def-inertial-frame-and-inertial-chart]] supply the constant flat metric matrix $\operatorname{diag}(-1,1,1,1)$ and the inertial chart. [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] supplies the Levi–Civita coefficient formula; the constant metric makes every coefficient zero, so covariant differentiation in this chart is ordinary component differentiation.

[F2] [[lem-rpm-charge-gauge-boundary]]: replacing zero potential by $d\chi$ leaves the field strength zero, adds $q[\chi(X_1)-\chi(X_0)]$ to the finite fixed-endpoint action, and changes the canonical covector to $mU^\flat+q\,d\chi$ while leaving the kinetic covector unchanged.

[F3] [[pthm-rpm-external-charge-action-equivalence]]: under [A2] and the finite proper-time/potential-domain conditions, stationarity is equivalent to $m\nabla_UU=qF^\sharp(U)$.

[F4] [[def-rpm-charge-spin-model]]: $U$ is future timelike with $g(U,U)=-c^2$, $P=mU$ is kinetic momentum, and $m,q$ are constant model parameters.

[F5] [[cor-zero-derivative-implies-constant]]: a differentiable real function on a connected interval with zero derivative is constant.

## Verification

1.1 The polynomial $\chi=b(x^1)^2/2$ is smooth and $d\chi=b x^1dx^1$, so its only nonzero potential component is $A_1=b x^1$. The alternating coordinate derivatives give $F_{ab}=\partial_aA_b-\partial_bA_a=0$: all off-diagonal partial derivatives vanish and the only diagonal derivative cancels itself. Applying [F2] with initial potential zero gives the displayed action difference. It is fixed under the endpoint-preserving variations of [A1], so stationarity is unchanged. [given, A1, F2, algebra]

2.1 By [A2] and [F3], stationarity is equivalent to $m\nabla_UU=0$. Since $m>0$ and the metric matrix is constant, [F1] gives $\Gamma^a{}_{bc}=\tfrac12\eta^{ad}(\partial_b\eta_{dc}+\partial_c\eta_{db}-\partial_d\eta_{bc})=0$; thus the equation is $dU^a/d\tau=0$ in the inertial chart. Apply [F5] to each component on the interval to obtain constant $U=U_0$; applying it to $z^a(\tau)-U_0^a\tau$ gives $z(\tau)=X_0+(\tau-\tau_0)U_0$. Conversely a future-timelike proper-time straight curve has $dU/d\tau=0$ and is stationary by the reverse implication of [F3]. No compatible endpoint curve is asserted to exist for arbitrary endpoint events or arbitrary proper-time duration. [given, A1, A2, F1, F3, F4, F5, step 1.1, algebra]

3.1 By [F4], $P=mU_0$ is constant, and [F2] gives $\pi_{A,1}=mU_1+qb x^1$. Differentiating along the curve from step 2.1 yields $d\pi_{A,1}/d\tau=qb U^1$, with $U_1=U^1$ by [F1]. Hence the canonical component may vary exactly as stated while $qF^\sharp(U)=0$ and $dP/d\tau=0$. The action shift has units joule-seconds and the canonical covector components have momentum units; neither is an empirical measurement. [given, F1, F2, F4, step 1.1, step 2.1, algebra] ∎
