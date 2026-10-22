---
id: prop-gr-fx-path-functor-and-gauge
kind: proposition
title: Path transport composes and transforms covariantly
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-connection-path-transport
  - def-gr-fx-thin-path-groupoid
  - prop-gr-fx-thin-transport-invariance
  - def-gr-fx-tetrad-spin-connection
dependency_roles:
  def-gr-fx-connection-path-transport: mathematical-premise
  def-gr-fx-thin-path-groupoid: mathematical-premise
  prop-gr-fx-thin-transport-invariance: mathematical-premise
  def-gr-fx-tetrad-spin-connection: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §§3.3–3.4.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "§3.3, transport along paths; §3.4.2, the local Lorentz transformation law for the connection one-form."
    - title: "Urs Schreiber and Konrad Waldorf, Parallel Transport and Functors, arXiv:0705.0452, §2.1"
      url: "https://arxiv.org/pdf/0705.0452"
      locator: "§2.1, parallel transport as a functor on the thin path groupoid."
verification:
  precheck: pass
---

## Statement

For transport as in [[def-gr-fx-connection-path-transport]], with composition convention $[\delta]\circ[\gamma]=[\delta*\gamma]$ meaning first traverse $\gamma$ and then $\delta$,

$$U_{\delta*\gamma}(1)=U_\delta(1)U_\gamma(1),\qquad U_{\bar\gamma}(1)=U_\gamma(1)^{-1}.$$

Let the target category have the tangent spaces $T_xM$ for $x\in U$ as objects, all linear isomorphisms between them as morphisms, and ordinary composition. Transport therefore defines a functor from the thin path groupoid [[def-gr-fx-thin-path-groupoid]] to this groupoid of tetrad fibers and invertible linear maps. Under the supplier convention $e'=\Lambda e$, the transport in the changed local frame satisfies

$$U'_{\gamma}(1)=\Lambda(\gamma(1))U_\gamma(1)\Lambda(\gamma(0))^{-1}.$$

## Statement references

[[def-gr-fx-connection-path-transport]]

[[def-gr-fx-thin-path-groupoid]]

[[prop-gr-fx-thin-transport-invariance]]

[[def-gr-fx-tetrad-spin-connection]]

## Facts & Assumptions

**Given:** The transport ODE and curvature convention of [[def-gr-fx-tetrad-spin-connection]], a piecewise-smooth path, and a smooth local Lorentz frame change $\Lambda$.

[F1] [[def-gr-fx-connection-path-transport]]: transport solves $U'=-\omega(\dot\gamma)U$ with initial value $I$; on concatenated pieces the later piece multiplies on the left.

[F2] [[def-gr-fx-thin-path-groupoid]]: composition is represented by path concatenation, the identity by a constant path, and inverse by the reversed path.

[F3] [[prop-gr-fx-thin-transport-invariance]]: thin-homotopic path representatives have the same transport matrix.

[F4] [[def-gr-fx-tetrad-spin-connection]]: a Lorentz connection is $\eta$-skew, so $\omega^{\mathsf T}\eta+\eta\omega=0$; under $e'=\Lambda e$, $\omega'=\Lambda\omega\Lambda^{-1}-d\Lambda\,\Lambda^{-1}$.

## Proof

**Proof technique:** direct.

1.1 On the constant path the coefficient $\omega(\dot\gamma)$ is zero, so the unique solution is $U(t)=I$. If $\gamma$ is followed by $\delta$, solve on the two parameter intervals with the terminal value from the first interval as initial value for the second. The second solution is $U_\delta(t)U_\gamma(1)$, so uniqueness gives $U_{\delta*\gamma}(1)=U_\delta(1)U_\gamma(1)$. [given, F1, algebra]

1.2 Write $\eta=\operatorname{diag}(-1,1,1,1)$. Along each smooth segment the derivative is $\frac{d}{dt}(U^{\mathsf T}\eta U)=U^{\mathsf T}(-\omega^{\mathsf T}\eta-\eta\omega)U=0$ by [F4]; continuity across the finite segment endpoints gives $U(t)^{\mathsf T}\eta U(t)=\eta$ throughout. Since $\eta$ is nonsingular, each $U(t)$ is invertible. [given, F1, F4, algebra]

2.1 Let $U(t)$ solve along $\gamma$. The matrix $V(s):=U(1-s)U(1)^{-1}$ starts at $I$ and, since $\dot{\bar\gamma}(s)=-\dot\gamma(1-s)$, satisfies $V'(s)=-\omega(\dot{\bar\gamma}(s))V(s)$. Hence uniqueness gives $U_{\bar\gamma}(1)=U(1)^{-1}$. By [F3], transport is independent of the representative of a thin class; [F1]–[F2] and the identities in steps 1.1–1.2 preserve composition, identity and inverse. Thus it is a functor on the stated groupoid. [given, F1, F2, F3, step 1.2, algebra]

3.1 Put $\widetilde U(t)=\Lambda(\gamma(t))U(t)\Lambda(\gamma(0))^{-1}$. Differentiating and using $U'=-\omega(\dot\gamma)U$ gives $\widetilde U'(t)=(d\Lambda(\dot\gamma)\Lambda^{-1}-\Lambda\omega(\dot\gamma)\Lambda^{-1})\widetilde U(t)=-\omega'(\dot\gamma)\widetilde U(t)$ by the transformation law [F4]. Its initial value is $I$, so uniqueness identifies $\widetilde U$ with transport in the changed frame and gives the endpoint formula. This is a local frame covariance statement; it is a principal-bundle gauge action only when $\Lambda$ has the global extension required by the cited gauge-group definition. [given, F1, F4, algebra] ∎

## Remarks

The endpoint covariance is summarized by the commutative diagram below; the diagram records the source and target frame maps, while the proof above establishes the equality by differentiating the ODE.

```tikzcd
E_{\gamma(0)} \arrow[r,"U_\gamma"] \arrow[d,"\Lambda(\gamma(0))"'] & E_{\gamma(1)} \arrow[d,"\Lambda(\gamma(1))"] \\
E'_{\gamma(0)} \arrow[r,"U'_\gamma"'] & E'_{\gamma(1)}
```

No ordinary-homotopy invariance is asserted here. The design's ordinary-homotopy comparison is a separate flatness-dependent result; the thin path groupoid is the interface proved in this item.
