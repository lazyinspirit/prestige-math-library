---
id: pthm-rpm-external-charge-action-equivalence
kind: physics-theorem
title: "Stationary charged action and Lorentz force"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional equivalence for finite fixed-endpoint timelike curve variations in a local potential domain of the prescribed curved background model: stationarity of the adopted external charged-particle action is equivalent to the covariant Lorentz-force equation with the RPM SI sign convention. It asserts no global potential, local or global trajectory existence, self-field, radiation reaction, or empirical claim."
empirical_premises: []
deps:
  - def-rpm-charge-spin-model
  - def-em-electromagnetic-tensor
  - post-rpm-external-charge-action
  - lem-rpm-curved-charge-action-variation
  - def-countable-choice
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-algebra-of-continuous-functions
  - thm-composition-of-continuous-functions
  - thm-real-power-continuity-and-derivatives
  - thm-continuous-implies-integrable
  - thm-ftc-first-part
  - thm-ftc-second-part
dependency_roles:
  def-rpm-charge-spin-model: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  post-rpm-external-charge-action: physical-assumption
  lem-rpm-curved-charge-action-variation: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-composition-of-continuous-functions: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 lecture-note excerpt"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
      locator: "Complete 55-page Chapter 1 excerpt; §1.1 fixed-endpoint Euler–Lagrange variation and §1.2.3, especially equation (1.21), printed pp. 8–28. The curved local variation is proved from inspected mathematical suppliers."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011)"
      url: "https://arxiv.org/html/1102.0529v3"
      locator: "Complete author manuscript, arXiv v3, §5.2.1: curved charged-particle interaction/action and worldline equation, with the singular self-field limitation kept separate from the prescribed external-field model."
verification: {}
---

## Statement

Assume the charged test-body quantities and local potential domain of [[def-rpm-charge-spin-model]], the flat-space sign convention of [[def-em-electromagnetic-tensor]], and the adopted fixed-endpoint action postulate [[post-rpm-external-charge-action]], and assume $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure. For a finite $C^2$ future-timelike curve segment $z:[a,b]\to O$ in that domain, where $a<b$ are proper-time endpoints, and the local $C^2$ fixed-endpoint variations of the postulate, choose the orientation-preserving parameter $\lambda=\tau$; the segment is stationary for the adopted action if and only if

$$m\nabla_UU=qF^\sharp(U),\qquad (\nabla_UU)_a=\frac qm F_{ab}U^b.$$

This is a model deduction: it establishes the equation equivalent to stationarity of the postulated functional, not the physical truth of the postulate.

## Facts & Assumptions

**Given:** The charged test-body definitions and fixed external potential of [[def-rpm-charge-spin-model]], the local field convention of [[def-em-electromagnetic-tensor]], and the physical action adoption of [[post-rpm-external-charge-action]], together with $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure.

[A1] [[post-rpm-external-charge-action]]: the model's trajectories are stationary points of $S[\gamma]=-mc\int\sqrt{-g(\gamma',\gamma')}\,d\lambda+q\int A(\gamma')\,d\lambda$ under local $C^2$ fixed-endpoint variations through future-timelike curves in a potential domain. Admissible parameter changes are $C^2$ diffeomorphisms $\phi:[\tilde a,\tilde b]\to[a,b]$ with $\phi'>0$, acting on the whole variation by composition; stationarity means vanishing first variation for every such local variation.

[A2] [[def-countable-choice]]: assume the axiom of countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure.

[F1] [[def-rpm-charge-spin-model]]: $F=dA$ on the potential domain, $F^\sharp$ is defined by $g(F^\sharp(v),w)=F(w,v)$, and $m,c>0$ with constant charge $q$ are the model parameters.

[F2] [[lem-rpm-curved-charge-action-variation]]: under $\mathrm{AC}_\omega$, for these $C^2$ fixed-endpoint timelike variations, the first variation equals $\int[-m g(J,\nabla_UU)+qF(J,U)]\,d\tau$ and vanishes for every local variation exactly when $m(\nabla_UU)_a=qF_{ab}U^b$.

[F3] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: for differentiable real-valued functions on subsets of $\mathbb R$, if the inner and outer derivative and limit-point hypotheses hold at the points in question, then $(f\circ g)'(x)=f'(g(x))g'(x)$; sums, products and scalar multiples of differentiable real functions obey the corresponding derivative rules. These apply componentwise in charts to a curve composed with a parameter map.

[F4] [[thm-composition-of-continuous-functions]], [[thm-algebra-of-continuous-functions]], and [[thm-real-power-continuity-and-derivatives]]: continuous compositions, finite sums and products, and the positive square-root operation preserve continuity on their stated domains.

[F5] [[thm-continuous-implies-integrable]]: every continuous real-valued function on a compact real interval is Riemann integrable.

[F6] [[thm-ftc-first-part]]: if $h$ is integrable on a compact interval and continuous there, then its integral function $H(x):=\int_a^x h(s)\,ds$ is differentiable at every point, with one-sided derivatives at the endpoints, and $H'=h$.

[F7] [[thm-ftc-second-part]]: if $G$ is differentiable on a compact interval and $G'$ is integrable there, then $\int G'=G(\text{right endpoint})-G(\text{left endpoint})$, with one-sided endpoint derivatives allowed.

## Proof

**Proof technique:** direct.

1.1 Let $I=[a,b]$ and $J=[\tilde a,\tilde b]$ be compact nondegenerate real intervals, let $\phi:J\to I$ be an admissible parameter change from [A1], and let $h:I\to\mathbb R$ be continuous. By [F5], $h$ is integrable. Define $H(x):=\int_a^x h(s)\,ds$; [F6] gives $H'=h$ on $I$, with one-sided derivatives at its endpoints. The chain rule [F3] applied to $G:=H\circ\phi$ gives $G'(\lambda)=h(\phi(\lambda))\phi'(\lambda)$ on $J$. This derivative is continuous by [F4] and therefore integrable by [F5]. Since $\phi(\tilde a)=a$ and $\phi(\tilde b)=b$, [F7] yields $\int_{\tilde a}^{\tilde b}h(\phi(\lambda))\phi'(\lambda)\,d\lambda=G(\tilde b)-G(\tilde a)=H(b)-H(a)=\int_a^b h(s)\,ds$. Thus the one-dimensional integral substitution used below holds for each continuous action integrand. [A1, F3, F4, F5, F6, F7]

1.2 For any local fixed-endpoint variation $\gamma_\epsilon:[a,b]\to O$ from [A1], composition with $\phi$ gives a $C^2$ fixed-endpoint variation $\gamma_\epsilon\circ\phi$ on $J$. In chart components, for $\widetilde\gamma^i(\epsilon,\lambda):=\gamma^i(\epsilon,\phi(\lambda))$, the first and second derivatives in $\lambda$ are $(\partial_s\gamma^i)\circ\phi\,\phi'$ and $(\partial_{ss}\gamma^i)\circ\phi\,(\phi')^2+(\partial_s\gamma^i)\circ\phi\,\phi''$; the derivatives in $\epsilon$ and the mixed derivative are $(\partial_\epsilon\gamma^i)\circ\phi$, $(\partial_{\epsilon\epsilon}\gamma^i)\circ\phi$ and $(\partial_{\epsilon s}\gamma^i)\circ\phi\,\phi'$. The chain and product rules [F3], together with continuity under composition and products [F4], show these derivatives are continuous, so the family remains $C^2$. Since $\phi'>0$, the composed curves remain future timelike and have the same endpoint events, and the chart-supported variation field remains supported in that chart. Bilinearity of $g$ gives $\sqrt{-g((\gamma_\epsilon\circ\phi)',(\gamma_\epsilon\circ\phi)')}=(\sqrt{-g(\gamma_\epsilon',\gamma_\epsilon')})\circ\phi\,\phi'$, and linearity of the covector $A$ gives $A((\gamma_\epsilon\circ\phi)')=(A(\gamma_\epsilon'))\circ\phi\,\phi'$. Both scalar integrands are continuous by [F4]; applying step 1.1 to each proves $S[\gamma_\epsilon\circ\phi]=S[\gamma_\epsilon]$ for every $\epsilon$. Composition with $\phi^{-1}$ is the inverse map on variation families. Thus the action functions and their first variations agree, so stationarity is invariant under every admissible reparameterization. [step 1.1, A1, F3, F4]

2.1 The segment in the statement is parameterized by proper time, and [A1] admits $\lambda=\tau$. If the same segment and variations are expressed in any other admissible parameter, step 1.2 proves that both the action and fixed-endpoint stationarity are unchanged. Therefore it suffices to test stationarity with $\lambda=\tau$. Under [A2], the curve, potential, regularity and endpoint hypotheses now match the local first-variation result [F2]. [A1, A2, F1, F2, step 1.2]

3.1 Applying [F2] under [A2], stationarity for every local fixed-endpoint variation is equivalent to $m(\nabla_UU)_a=qF_{ab}U^b$. Raising the covector index with the nondegenerate metric and using the definition of $F^\sharp$ in [F1] gives the equivalent vector equation $m\nabla_UU=qF^\sharp(U)$. [step 2.1, A2, F1, F2, algebra] ∎
