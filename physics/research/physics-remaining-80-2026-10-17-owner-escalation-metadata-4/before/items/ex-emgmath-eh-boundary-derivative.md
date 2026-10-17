---
id: ex-emgmath-eh-boundary-derivative
kind: example
title: "Zero boundary metric value does not kill EH derivative flux"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
proof_strategy: direct
deps:
  - lem-emg-einstein-action-variation
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-compact-metric-and-timelike-curve-variation
  - thm-gr-density-divergence-and-finite-chain-flux
  - lem-smooth-bump-between-concentric-euclidean-balls
  - def-countable-choice
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  lem-emg-einstein-action-variation: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-compact-metric-and-timelike-curve-variation: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  def-countable-choice: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, 2019 lecture notes, §4.1, PDF pp. 149–151 (printed pp. 142–144)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.1 gives the Einstein–Hilbert divergence term and warns that boundary variations require care; the exact local normal-derivative example is computed here."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4, equations (4.60)–(4.70), PDF pp. 122–124 (printed pp. 115–117)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4 derives the Palatini divergence and the compact-support boundary convention; this example computes a nonzero boundary flux when only the metric value is fixed."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Example

Work in boundaryless ambient $M=\mathbb R^4$ and integrate the local divergence over the half-space subdomain $H=\{x^3\ge0\}$. Give $M$ the flat metric $\eta=\operatorname{diag}(-1,1,1,1)$, coordinates $(x^0,x^1,x^2,x^3)$, and outward conormal $-dx^3$ at its boundary. All coordinates have length units and choose a length $\ell>0$. Take dimensionless cutoffs $\chi\in C_c^\infty(\mathbb R^3)$ and $\rho\in C_c^\infty(\mathbb R)$ with $\chi\ge0$, $\chi=1$ near $0\in\mathbb R^3$, and $\rho=1$ near $0\in\mathbb R$. Define

$$f(x):=\frac{x^3}{\ell}\chi(x^0,x^1,x^2)\rho(x^3),\qquad h_{ab}:=f\eta_{ab}.$$

Then $h_{ab}=0$ on $\partial H$, but its normal derivative is nonzero there. For the Einstein–Hilbert summand with coefficient $c^3/(16\pi G_N)$, the local variation formula in [[lem-emg-einstein-action-variation]] has a nonzero boundary flux for this variation. The diagram records only the chosen half-space and normal; the proof is the component calculation below.

```tikz
\begin{tikzpicture}[scale=0.9]
  \fill[gray!12] (0,0) rectangle (4,2);
  \draw[thick] (0,0) -- (4,0) node[right] {$x^3=0$};
  \draw[->] (0.6,0) -- (0.6,1.5) node[above] {$+\partial_3$};
  \draw[->] (3,0) -- (3,-0.7) node[below] {$n_{\rm out}=-\partial_3$};
  \node at (2,1.2) {$H:\ x^3\ge0$};
  \node at (2,-1.1) {$h|_{\partial H}=0,\quad \partial_3h|_{\partial H}\ne0$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The half-space chart and flat metric above, compact cutoffs $\chi,\rho$, and the metric variation $g_s=\eta+s h$ for sufficiently small $s$.

[F1] The first variation of the Einstein–Hilbert density is $\delta(wR)=wG_{ab}q^{ab}+\partial_a(wV^a)$, where $V^a= g^{bd}\delta\Gamma^a{}_{db}-g^{ab}\delta\Gamma^d{}_{db}$ and $\delta\Gamma^a{}_{bc}=\frac12g^{ad}(\nabla_bh_{cd}+\nabla_ch_{bd}-\nabla_dh_{bc})$. ([[lem-emg-einstein-action-variation]])

[F2] Curvature and the Einstein tensor are defined from the metric-selected connection and its curvature; for the constant metric $\eta$, its Christoffel symbols and curvature vanish. ([[def-gr-curvature-tensor-and-derived-tensors]])

[F3] Nonnegative smooth cutoffs with compact support and a plateau equal to one near a point exist in Euclidean coordinate balls. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[A1] The cutoffs are smooth, compactly supported, nonnegative where stated, and equal to $1$ on neighborhoods of the origin and $x^3=0$ respectively. The first variation is interpreted as a compactly supported action difference on the half-space.

[A2] The geometric supplier chain carries the $\mathrm{AC}_\omega$ convention stated in [[def-countable-choice]]; the local cutoff calculation makes no further choice.

## Verification

1.1 By [F3], choose nonnegative compactly supported dimensionless $\chi$ equal to one near the origin and dimensionless $\rho$ equal to one near zero. The factor $x^3/\ell$ gives $h_{ab}|_{x^3=0}=0$. At the boundary, $\partial_3 f=\chi/\ell$ and $\partial_\alpha f=0$ for $\alpha=0,1,2$; in particular, at the origin $\partial_3f=1/\ell$. Since $f$ is bounded and nonzero, $g_s=(1+sf)\eta$ has the same Lorentzian signature whenever $|s|<1/(2\|f\|_\infty)$. Thus the metric value is fixed at the boundary while its normal derivative is not. [A1, F3, algebra]

2.1 At the flat background, substituting $h_{ab}=f\eta_{ab}$ into [F1] gives $\delta\Gamma^a{}_{bc}=\frac12(\delta^a_c\partial_bf+\delta^a_b\partial_cf-\eta_{bc}\partial^af)$. Contracting the two terms in $V^a$ gives $\eta^{bd}\delta\Gamma^a{}_{db}=-\partial^af$ and $\eta^{ab}\delta\Gamma^d{}_{db}=2\partial^af$, hence $V^a=-3\partial^af$. On $x^3=0$, $V^3=-3\chi/\ell$. [A2, F1, step 1.1, algebra]

3.1 Since $G_{ab}=0$, the linearized Einstein–Hilbert density is just $\partial_aV^a$ by [F1]. The tangential integrals vanish because $\chi$ is compactly supported, and the upper normal endpoint contributes zero because $\rho$ is compactly supported. The fundamental theorem of calculus on $x^3\in[0,\infty)$ therefore gives, after multiplying by the action coefficient, the boundary contribution $-\frac{c^3}{16\pi G_N}\int_{x^3=0}V^3\,dx^0dx^1dx^2=\frac{3c^3}{16\pi G_N\ell}\int_{\mathbb R^3}\chi\,dx^0dx^1dx^2>0$. This is the outward flux for conormal $-dx^3$. [A1, F1, F2, step 2.1, algebra]

4.1 The nonzero first-variation boundary term in step 3.1 occurs despite $h_{ab}=0$ on $\partial H$. Therefore fixing only boundary metric values does not justify discarding the Einstein–Hilbert derivative flux. [step 1.1, step 3.1, algebra] ∎

## Remarks

- This is the local divergence flux on a subdomain of a boundaryless ambient manifold; it is not a boundary value problem for Einstein's equations.
- The seven typed foundational replacement carriers declared in `deps` are now authored on emg-mg02; no independent acceptance is asserted: [[def-emg-finite-real-supremum-domain]], [[def-emg-real-metric-axiom-convention]], [[lem-emg-metric-axioms-imply-nonnegativity]], [[def-emg-explicit-power-regimes]], [[lem-emg-sequence-limit-criterion-with-choice]], [[def-emg-boundaryless-completeness-domain]], and [[def-emg-set-size-and-class-schema]].

