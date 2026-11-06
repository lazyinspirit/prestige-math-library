---
id: def-cft-2d-radial-quantization
kind: definition
title: Radial quantization of a plane CFT
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-cft-pointed-analytic-worldsheet
  - def-real-and-complex-inner-product-space
  - def-hilbert-space
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988)
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: "§2.2, printed pp. 15–20 (PDF pp. 9–11): cylinder coordinate, radial ordering, radial time, and the radial-reflection involution."
    - title: Duccio Pappadopulo, Slava Rychkov, Johnny Espin, Riccardo Rattazzi, OPE Convergence in Conformal Field Theory, arXiv:1208.6449v3
      url: https://arxiv.org/pdf/1208.6449v3
      locator: "§2, PDF pp. 7–8: separating sphere and Hilbert-space overlap; the source assumes the state/OPE identification."
---

## Definition

Let the Euclidean plane be the standard complex plane with its usual orientation, metric $ds^2=dx^2+dy^2=|dz|^2$, dimensionless coordinate $z=x+iy$, and chosen origin $0$. Write $\mathbb C^\times=\mathbb C\setminus\{0\}$. The map
$$(\tau,\theta)\longmapsto z=e^{\tau+i\theta},\qquad \tau\in\mathbb R,\quad \theta\in\mathbb R/(2\pi\mathbb Z),$$
is a diffeomorphism $\mathbb R\times S^1\to\mathbb C^\times$; its inverse is $\tau=\log|z|$ and $\theta=\arg z\pmod{2\pi}$. Thus $\tau$ is Euclidean radial time, and a circle $|z|=r$ is the time slice $\tau=\log r$. A radially ordered product is defined for insertions at distinct radii by placing the factor with larger $|z|$ to the left. This definition assigns no order to equal-radius factors; their equal-time ordering is separate model data.

A selected radial model supplies its state and field data rather than receiving them from the coordinate change. In the positive-Hilbert branch, these data include a complex Hilbert space $\mathcal H$, with the inner product linear in the first argument and complete for its induced norm, a unit vacuum vector $\Omega$, a densely defined radial energy operator $K:D(K)\to\mathcal H$, a common dense linear field domain $\mathcal D\subseteq\mathcal H$, and the specified radial-reflection and field-adjoint operations. The model states the domains and how its radial evolution and smeared fields act on them. A weakly smeared field means a linear test-function assignment whose matrix coefficients on $\mathcal D$ have the declared continuity; point evaluation is not assumed to be an operator. The compact pointed-worldsheet supplier fixes the compatible holomorphic-chart convention when the plane calculation is used inside a pointed-surface model; it does not assert that the plane is compact.

For a point $z=re^{i\theta}\in\mathbb C^\times$, radial reflection is the involution
$$\Theta(z)=\frac{1}{\overline z}=r^{-1}e^{i\theta}.$$
It sends $\tau$ to $-\tau$ and fixes the unit circle. In a positive-Hilbert model, the field data include an antilinear isometric involution $J$ on the declared domain and a corresponding adjoint on smeared field labels: if $A(\varphi)$ is defined on $\mathcal D$, its reflected adjoint $A^\sharp(\Theta_*\varphi)$ satisfies
$$\langle A(\varphi)u,v\rangle=\langle u,A^\sharp(\Theta_*\varphi)v\rangle,\qquad u,v\in\mathcal D.$$
Here $\Theta_*\varphi$ denotes the test function obtained from the model's declared pullback, Jacobian, and any field-weight multiplier. Those data are specified by the model. This is not a theorem that every CFT has a positive Hilbert realization or these fields.

The geometry fixes radial time and ordering only. It does not imply a spectrum condition, a discrete energy basis, existence of radial insertion limits, field-domain invariance, radial reflection positivity, or convergence of an OPE; each such condition is supplied or proved separately in the selected model.

## Definition references

[[def-cft-pointed-analytic-worldsheet]]

[[def-real-and-complex-inner-product-space]]

[[def-hilbert-space]]

## Remarks

The diagram is schematic: the left concentric circles are level sets of $r=|z|$; the right horizontal circles are level sets of $\tau=\log r$. The arrow preserves $\theta$ and sends each radius $r>0$ to $\tau=\log r$. No proof uses the drawing.

```tikz
\begin{tikzpicture}[>=stealth,scale=0.9]
\draw (0,0) circle (0.45);
\draw (0,0) circle (0.9);
\draw (0,0) circle (1.35);
\fill (0,0) circle (0.035);
\draw[->] (0.95,0.95) -- (3.0,1.25);
\draw (3.4,-1.35) -- (3.4,1.35);
\draw (5.4,-1.35) -- (5.4,1.35);
\draw (3.4,1.35) arc (180:360:1 and 0.25);
\draw (3.4,-1.35) arc (180:360:1 and 0.25);
\draw (4.4,0.85) ellipse (1 and 0.20);
\draw (4.4,0.0) ellipse (1 and 0.20);
\draw (4.4,-0.85) ellipse (1 and 0.20);
\node at (0,-1.7) {plane, coordinate $z$};
\node at (4.4,-1.8) {cylinder, coordinates $(\tau,\theta)$};
\node at (0.45,1.45) {$r$};
\node at (5.65,0) {$\tau$};
\end{tikzpicture}
```

A formal or analytic CFT may use the same radial coordinates without a positive Hilbert-space interpretation. Any such alternative state-space convention must be stated in its own model data.

