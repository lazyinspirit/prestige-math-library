---
id: cex-qftx-exact-differentiated-scaling-degree
kind: counterexample
title: Differentiation can force a contact term from a zero punctured coefficient
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 9
deps:
  - def-qftx-local-time-ordered-system
  - lem-qftx-balanced-local-functional-representatives
  - def-qft-distribution-scaling-degree
  - prop-qft-local-counterterm-jet-classification
  - thm-distributions-supported-at-one-point
  - thm-qftx-wavefront-product
  - lem-qftx-wavefront-chart-invariance
  - thm-fourier-inversion-on-schwartz-space
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-qftx-local-time-ordered-system: mathematical-premise
  lem-qftx-balanced-local-functional-representatives: mathematical-premise
  def-qft-distribution-scaling-degree: mathematical-premise
  prop-qft-local-counterterm-jet-classification: mathematical-premise
  thm-distributions-supported-at-one-point: mathematical-premise
  thm-qftx-wavefront-product: mathematical-premise
  lem-qftx-wavefront-chart-invariance: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  references:
    - title: Michael Duetsch and Klaus Fredenhagen, Causal perturbation theory in terms of retarded products, and a proof of the Action Ward Identity
      url: https://arxiv.org/pdf/hep-th/0403213
      locator: Section 3.2, printed pp. 24–25, integration by parts and derivative-compatible extension; the massless contact-term witness is calculated locally.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Sections 2.1 and 5.1–5.2, free-kernel wavefront conventions and point-extension scaling; the explicit Minkowski calculation is supplied here.
verification:
  precheck: pass
---

## Statement refuted

For all admissible flat scalar free data, time-ordered maps on the full off-shell finite-jet local functional class can preserve the exact scaling degree of every punctured differentiated numerical coefficient and its linear combinations, while being independent of the chosen density presentation. In particular, a differentiated coefficient that vanishes off the diagonal would have to extend as zero.

## Statement references

[[def-qftx-local-time-ordered-system]]

[[lem-qftx-balanced-local-functional-representatives]]

## Facts & Assumptions

**Given:** Four-dimensional Minkowski coordinates $(t,\mathbf x)$ with the scalar contract's conventions, $m=0$, and $P=\partial_t^2-\Delta_{\mathbf x}$.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]] and Countable Choice [[def-countable-choice]], as in the extension and Fourier suppliers.

[F1] [[def-qftx-local-time-ordered-system]] specifies admissible scalar free data, causal factorization and graph contractions. Its corrected scaling clause permits engineering-bounded contact terms; the Statement refutes the stronger exact-degree requirement, not that corrected clause.

[F2] [[lem-qftx-balanced-local-functional-representatives]] and the definition of local functionals give $\int fP\phi=\int(Pf)\phi$ by integration by parts, with the same actual functional as input.

[F3] [[def-qft-distribution-scaling-degree]] gives degree $-\infty$ for the zero distribution and degree $4$ for $\delta_0$; [[prop-qft-local-counterterm-jet-classification]] gives uniqueness of an extension of degree $2<4$. By [[thm-distributions-supported-at-one-point]], a nonzero extension of zero off the origin is a finite delta-jet sum and has degree at least $4$, so cannot have degree $-\infty$.

[F4] [[thm-qftx-wavefront-product]] and [[lem-qftx-wavefront-chart-invariance]] give smooth localization and coordinate transport of wavefront cones. [[thm-fourier-inversion-on-schwartz-space]] fixes the Fourier delta normalization.

## Counterexample

**Given:** [A1], [F1]–[F4].

1.1 Define the positive-frequency massless distribution by
$$w(t,\mathbf x)=\int_{\mathbb R^3}\frac{e^{-i|\mathbf k|t+i\mathbf k\cdot\mathbf x}}{2|\mathbf k|(2\pi)^3}\,d^3\mathbf k.$$
This is a distribution: pairing a compact smooth spacetime test gives its rapidly decreasing Fourier transform on the null mass shell, and $|\mathbf k|^{-1}d^3\mathbf k$ is integrable at zero and has polynomial growth at infinity. The mass-shell relation gives $Pw=0$. The measure is the restriction of $\theta(k^0)\delta((k^0)^2-|\mathbf k|^2)d^4k$, hence is invariant under the proper orthochronous Lorentz group; its reflection gives $w^*=w(-t,-\mathbf x)$. Scaling $\mathbf k$ shows that $w$ is nonzero homogeneous of degree $-2$. With a damping factor $e^{-\epsilon|\mathbf k|}$, angular integration and the elementary Laplace integral give
$$w_\epsilon(t,\mathbf x)=\frac{1}{4\pi^2}\frac{1}{|\mathbf x|^2-(t-i\epsilon)^2}.$$
The damped spectral integrals converge to $w$ on tests by the preceding absolute Fourier bound. [A1, F1, F4, construct, algebra]

2.1 This datum has precisely the required wavefront condition. At any nonzero point of the null cone, the preceding formula is, in a normal coordinate to that cone, a nonvanishing smooth multiple of a one-sided boundary value $(s\pm i0)^{-1}$. Its Laplace representation has Fourier support in one half-line and nonzero constant magnitude there; convolution with a compact cutoff therefore gives precisely that one-sided conormal direction. The sign selected by $t-i\epsilon$ makes the covector future null under the contract's metric-dual convention. Away from the cone the formula is smooth. At the origin, convolution of the null-shell measure with the rapidly decreasing transform of a test cutoff decreases arbitrarily fast in every cone separated from the future null cone: on that cone the frequency difference is bounded below by a fixed positive multiple of the sum of the two frequency magnitudes, and the mass-shell measure has polynomial growth. Thus no other origin directions occur. Every future null origin direction does occur, by closedness of the wavefront set and approach along nonzero null points with that conormal direction. In the two-point lift $W(x,y)=w(x-y)$ the covectors are $(\xi,-\xi)$ by [F4], giving exactly the specified relation. The boundary-value difference $w-w(-t,-\mathbf x)$ is supported on the null cone, so $E=(W-W^{\mathsf T})/i$ has causal support. This verifies the free $W$ conditions in [F1]. [F1, F4, step 1.1, algebra]

3.1 Define the time-ordered distribution by its spatial Fourier representation
$$h_F(t,\mathbf x)=\int_{\mathbb R^3}\frac{e^{-i|\mathbf k||t|+i\mathbf k\cdot\mathbf x}}{2|\mathbf k|(2\pi)^3}\,d^3\mathbf k.$$
It acts continuously on tests by first taking their spatial Fourier transform, which decreases rapidly uniformly on compact time intervals; the same polynomial measure bound as in step 1.1 is integrable after this decay. It is symmetric under $(t,\mathbf x)\mapsto(-t,-\mathbf x)$, equals the required ordering of $w$, and is homogeneous of degree $-2$, hence has scaling degree $2$. Off zero, time ordering and step 2.1 give exactly the permitted Feynman wavefront directions. At zero every relative covector is allowed by [F1]. Lorentz transformations preserve its off-zero ordering, since time order is preserved on causal pairs and the two orderings agree on spacelike pairs; the transformed distribution is another degree-$2$ extension of the same punctured kernel. Uniqueness from [F3] gives Lorentz invariance globally. Translation invariance of $H_F(x,y)=h_F(x-y)$ is immediate. Thus $(W,H_F)$ is an admissible free datum, with all its stated hypotheses checked. [F1, F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 For a fixed spatial frequency $\mathbf k\ne0$, $e^{-i|\mathbf k||t|}/(2|\mathbf k|)$ is continuous at $t=0$, and its first derivative has jump $-i$. Twice differentiating it as a one-dimensional distribution therefore gives
$$\left(\partial_t^2+|\mathbf k|^2\right)\frac{e^{-i|\mathbf k||t|}}{2|\mathbf k|}=-i\delta(t).$$
The integrable small-frequency bound and the rapidly decreasing spatial test transform justify this differentiation inside the pairing; the value at the single frequency zero is immaterial. Fourier inversion [F4] yields $Ph_F=-i\delta_0$ in four spacetime dimensions. Its punctured restriction is zero, of degree $-\infty$, while the forced contact term has degree $4$. Two undifferentiated linear vertices have a contraction of degree $2<4$, whose unique degree-preserving extension is $h_F$. Replacing the first vertex $\int(Pf)\phi$ by the equal functional $\int fP\phi$ in [F2] forces its differentiated contraction to be $Ph_F=-i\delta_0$. Requiring instead that the zero punctured differentiated coefficient extend with degree $-\infty$ forces zero, giving different values for the same input functional. This refutes the Statement. The engineering bound is $2+2=4$, which permits precisely this contact term and is compatible with the corrected contract. [F1, F2, F3, F4, step 3.1, algebra] ∎

## Remarks

The witness uses the corrected null-cotangent strip relation, including tangency to the connecting null line. It is not claimed admissible under the earlier overbroad wording that transported arbitrary null covectors along that line. Correcting that relation and correcting the incompatible differentiated-degree condition are separate necessary repairs.
