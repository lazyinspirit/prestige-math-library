---
id: ex-emx-longitudinal-focused-field
kind: example
title: An oblique plane wave with a nonzero longitudinal electric component
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - def-cross-product-in-r3
  - def-directional-and-partial-derivatives
  - def-divergence-and-curl-of-a-c1-vector-field
  - def-euclidean-inner-product
  - def-em-fields
  - def-em-lab-geometry
  - def-em-sources
  - def-em-si-conventions
  - def-em-complex-plane-wave
  - def-emx-angular-spectrum
  - post-em-vacuum-maxwell
  - pthm-emx-paraxial-error
  - thm-chain-rule-for-total-derivatives
  - thm-complex-exponential-is-entire-with-derivative-itself
dependency_roles:
  def-cross-product-in-r3: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-complex-plane-wave: formulation-prerequisite
  def-emx-angular-spectrum: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
  pthm-emx-paraxial-error: physical-result
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Exact plane-wave example in the smooth, source-free vacuum Maxwell model and
  the propagating cone of the ideal angular-spectrum model. It illustrates the
  longitudinal component required by Maxwell's equations for its specified
  transverse polarization; it asserts no
  measured field, focal apparatus, or torque.
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Konijnenberg, Adam and Urbach, BSc Optics, §6.3 Angular Spectrum Method"
      url: "https://phys.libretexts.org/Bookshelves/Optics/BSc_Optics_%28Konijnenberg_Adam_and_Urbach%29/06%3A_Scalar_diffraction_optics/6.04%3A_Angular_Spectrum_Method"
      locator: "§6.3 final vector-field remark: longitudinal electric components are fixed by the momentum-space transversality condition."
    - title: "Alexander Cerjan and Charles Cerjan, Orbital angular momentum of Laguerre–Gaussian beams beyond the paraxial approximation, JOSA A 28 (2011)"
      url: "https://alexcerjan.com/documents/papers/cerjan_JOSA_2011.pdf"
      locator: "§4 equations (22), (29), and (37), PDF pp. 2256–2257: longitudinal electric field is reconstructed from transverse data under Maxwell transversality."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zürich 2024 FS lecture notes"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: '§11.1 Fourier-Raum, equations (11.5)–(11.10), PDF pp. 121–122: the exact vector amplitude satisfies $\mathbf k\cdot\mathbf e=0$.'
generation:
  role: example
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Let $0<\kappa\le\delta k_0$, $\mathbf q=(\kappa,0)$,
$k_z:=\sqrt{k_0^2-\kappa^2}$, and choose a real $E_0\ne0$ in
$\mathrm{V\,m^{-1}}$. Put
$$\mathbf e:=(E_0,0,-\kappa E_0/k_z),\qquad \mathbf b:=\left(0,\frac{k_0^2E_0}{\omega k_z},0\right),\qquad \phi(\mathbf x,t):=\kappa x+k_z z-\omega t.$$
The real fields $E(\mathbf x,t):=\operatorname{Re}(\mathbf e e^{i\phi(\mathbf x,t)})$
and $B(\mathbf x,t):=\operatorname{Re}(\mathbf b e^{i\phi(\mathbf x,t)})$ are an exact, forward,
source-free vacuum plane-wave mode. In particular,
$$e_z=-\frac{\kappa E_0}{\sqrt{k_0^2-\kappa^2}}\ne0,\qquad \frac{|e_z|}{|E_0|}=\frac{\kappa}{\sqrt{k_0^2-\kappa^2}} \le\frac{\delta}{\sqrt{1-\delta^2}}.$$
Thus setting $e_z=0$ while keeping this transverse amplitude would not give an
exact Maxwell mode.

## Example references

[[def-emx-angular-spectrum]]

[[pthm-emx-paraxial-error]]

## Facts & Assumptions

**Given:** A fixed SI laboratory chart, $c>0$, $\omega>0$, $k_0=\omega/c$, $0<\delta<1$, $0<\kappa\le\delta k_0$, and real $E_0\ne0$ in $\mathrm{V\,m^{-1}}$.

[F1] The SI chart has spatial coordinates in metres and time in seconds, $k_0=\omega/c$, and $E$ and $B$ have units $\mathrm{V\,m^{-1}}$ and tesla. [[def-em-fields]] [[def-em-lab-geometry]] [[def-em-si-conventions]] [[def-emx-angular-spectrum]]

[F2] The plane-wave convention uses the real part of complex amplitudes times $e^{i(\mathbf K\cdot\mathbf x-\omega t)}$. [[def-em-complex-plane-wave]]

[A1] The adopted smooth source-free vacuum Maxwell equations, with $\rho=0$ and $J=0$, are $\operatorname{div}E=\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, and $\operatorname{curl}B=c^{-2}\partial_tE$; $\rho$ and $J$ are the charge and current densities of the source definition, and divergence and curl are the coordinate operators of the fixed spatial chart. [[post-em-vacuum-maxwell]] [[def-em-sources]] [[def-divergence-and-curl-of-a-c1-vector-field]]

[F3] The complex exponential satisfies $\exp'=\exp$ and the chain rule; real parts commute with these real partial derivatives. The plane-wave fields are therefore $C^1$. Use the Euclidean dot and cross products on the spatial vectors. [[def-em-complex-plane-wave]] [[thm-complex-exponential-is-entire-with-derivative-itself]] [[thm-chain-rule-for-total-derivatives]] [[def-directional-and-partial-derivatives]] [[def-euclidean-inner-product]] [[def-cross-product-in-r3]]

[F4] For an exact mode with these $\mathbf q,k_z$, the longitudinal relation and cone bound are as stated in the paraxial error theorem. [[pthm-emx-paraxial-error]]

## Verification

1.1 Since $\kappa\le\delta k_0<k_0$, $k_z=\sqrt{k_0^2-\kappa^2}$ is positive. The definitions give $\kappa^2+k_z^2=k_0^2$, $\kappa E_0+k_ze_z=0$, and $\omega b_y=k_0^2E_0/k_z$. Thus $\mathbf K=(\kappa,0,k_z)$ is a forward wavevector of length $k_0$, and $\mathbf e$ is transverse to it. [given, F1, algebra]

2.1 By [F3], for each spatial coordinate $x_j$, $\partial_{x_j}E=\operatorname{Re}(iK_je\,e^{i\phi})$ componentwise, and $\partial_tE=\operatorname{Re}(-i\omega e\,e^{i\phi})$; the same formulas hold with $B,b$ in place of $E,e$. From [step 1.1], $$\mathbf K\cdot\mathbf e=\kappa E_0+k_ze_z=0,\qquad \mathbf K\cdot\mathbf b=0,$$ $$\mathbf K\times\mathbf e= \left(0,k_zE_0-\kappa e_z,0\right) =\left(0,\frac{k_0^2E_0}{k_z},0\right)=\omega\mathbf b,$$ and $$\mathbf K\times\mathbf b= \left(-k_zb_y,0,\kappa b_y\right) =\left(-\frac{k_0^2E_0}{\omega},0, \frac{\kappa k_0^2E_0}{\omega k_z}\right) =-\frac{\omega}{c^2}\mathbf e,$$ where the last equality uses $k_0=\omega/c$. Summing the spatial derivatives therefore yields $$\operatorname{div}E=\operatorname{Re}(i(\mathbf K\cdot\mathbf e)e^{i\phi})=0, \qquad \operatorname{div}B=\operatorname{Re}(i(\mathbf K\cdot\mathbf b)e^{i\phi})=0,$$ $$\operatorname{curl}E=\operatorname{Re}(i(\mathbf K\times\mathbf e)e^{i\phi}) =-\partial_tB,\qquad \operatorname{curl}B=\operatorname{Re}(i(\mathbf K\times\mathbf b)e^{i\phi}) =c^{-2}\partial_tE.$$ Thus all four source-free Maxwell equations in [A1] hold pointwise, so these real fields are an exact mode. [step 1.1, F1, F2, F3, A1, algebra]

3.1 The constructed transverse amplitude is $(E_0,0)$. Applying [F4] gives $e_z=-\mathbf q\cdot\mathbf e_\perp/k_z=-\kappa E_0/k_z$ and $|e_z|/|E_0|\le\delta/\sqrt{1-\delta^2}$. Since $\kappa>0$, $E_0\ne0$, and $k_z>0$, $e_z\ne0$. Hence the alternative $e_z=0$ with this same transverse amplitude is incompatible with source-free Maxwell transversality. [given, step 1.1, F4, algebra] ∎

## Remarks

For the illustrative case $\delta=3/4$ and $\kappa/k_0=1/2$, the normalized x-z projections are $\mathbf K/k_0=(1/2,\sqrt3/2)$ and $\mathbf e/E_0=(1,-1/\sqrt3)$; their dot product is zero. The arrows use these separate dimensionless normalizations, and the figure is schematic only. The Maxwell verification is the component proof in step 2.1, not the drawing.

~~~tikz
\begin{tikzpicture}[x=2.5cm,y=2cm,>=stealth]
  \draw[->] (-0.12,0) -- (1.25,0) node[right] {$x$ component};
  \draw[->] (0,-0.8) -- (0,1.15) node[above] {$z$ component};
  \draw[dashed,gray] (0,0) -- (0.5,0);
  \draw[dashed,gray] (0.5,0) -- (0.5,{sqrt(3)/2});
  \draw[very thick,->] (0,0) -- (0.5,{sqrt(3)/2})
    node[above right] {$\mathbf K/k_0$};
  \draw[very thick,->,blue] (0,0) -- (1,{-1/sqrt(3)})
    node[below right] {$\mathbf e/E_0$};
  \node[below] at (0.5,0) {$\kappa/k_0=1/2$};
  \node[right] at (0.5,0.53) {$k_z/k_0=\sqrt3/2$};
\end{tikzpicture}
~~~
