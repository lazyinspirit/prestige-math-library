---
id: pthm-emx-uniaxial-dispersion
kind: physics-theorem
title: "Ordinary and extraordinary sheets"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 1
proof_strategy: direct
deps:
  - def-emx-anisotropic-plane-symbol
dependency_roles:
  def-emx-anisotropic-plane-symbol: formulation-prerequisite
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional classification of nonzero real-wavevector
  source-free bulk plane-wave modes in a homogeneous lossless uniaxial
  dielectric with positive real principal permittivities and positive scalar
  permeability, in the material-rest frame and SI units. The general uniaxial
  classification uses the xz-plane section; the isotropic specialization covers
  all real-wavevector directions. Physical use is restricted to a declared finite
  positive-frequency band of effective phase response. Interfaces, absorption, spatial dispersion and
  empirical material claims are outside scope."
sources:
  references:
    - title: "Jin Au Kong, Electromagnetic Wave Theory, last edition 2008, PIERS free
        release 2021"
      url: "https://piers.org/piers/files/BOOK_ElectromagneticWaveTheory_by_JINAUKONG\
        _FreeRelease2021.pdf"
      locator: "Chapter 3, §3.3.E, printed pp. 315–322, equations (3.3.54)–(3.3.73):
        ordinary and extraordinary wave-vector surfaces, polarization sectors,
        optic-axis degeneracy, the k-surface cross-section and the later
        group-velocity discussion. The quarter-wave plate and group-velocity
        conclusions on pp. 319–322 are not used."
    - title: "Weng Cho Chew, Electromagnetic Field Theory, Purdue ECE 604 lecture
        notes, 2023–2024 revision"
      url: "https://engineering.purdue.edu/wcchew/ece604f23/EMFTEDX032124R.pdf"
      locator: "§7.1.2, printed pp. 83–84: the anisotropic tensor constitutive
        relation and the fact that D and E need not be parallel. These notes do
        not derive the uniaxial sheets; the local proof does. Its displayed
        phasor convention is exp(+jωt); the local derivation uses exp(−iωt)."
---

## Statement

In the homogeneous lossless plane-wave model, let $\varepsilon=\operatorname{diag}(\varepsilon_\perp,\varepsilon_\perp,\varepsilon_\parallel)$ with $\varepsilon_\perp,\varepsilon_\parallel>0$ in $\mathrm{F\,m^{-1}}$, let $\mu>0$ be a scalar in $\mathrm{H\,m^{-1}}$, and let $\omega>0$ be in $\mathrm{s^{-1}}$. For a nonzero source-free mode with real wavevector $k=(k_x,0,k_z)\ne0$ in $\mathrm{m^{-1}}$, the nonzero-mode wavevectors lie on exactly the following two sheets:

$$k_x^2+k_z^2=\mu\varepsilon_\perp\omega^2,\qquad \frac{k_x^2}{\varepsilon_\parallel}+\frac{k_z^2}{\varepsilon_\perp}=\mu\omega^2.$$

Away from an intersection the first sheet is the ordinary sector, whose electric amplitude is parallel to $\hat y$, and the second is the extraordinary sector, whose electric amplitude lies in the $xz$ plane; each then has a one-dimensional polarization space. At an intersection the two sectors span a two-dimensional polarization space. If $\varepsilon_\perp=\varepsilon_\parallel=\varepsilon$, the isotropic specialization also allows arbitrary real $k\ne0$, without the $xz$-plane restriction: its nonzero-mode wavevectors lie in every direction on the common sphere $|k|^2=\mu\varepsilon\omega^2$, and at every such wavevector the polarization space is the two-dimensional complex subspace $\{e\in\mathbb C^3:k\cdot e=0\}$. In the $xz$ section the ordinary/extraordinary labels then denote the two coordinate sectors, not distinct dispersion branches. If $\varepsilon_\perp\ne\varepsilon_\parallel$, the sheets intersect only for $k_x=0$ and $k_z^2=\mu\varepsilon_\perp\omega^2$; at those optic-axis directions the polarization space is again two-dimensional. The zero amplitude is not a mode in this statement.

The symbol classification holds algebraically for every $\omega>0$. For physical interpretation, declare a finite band $I_\omega=[\omega_-,\omega_+]$ with $0<\omega_-<\omega_+<\infty$, in $\mathrm{s^{-1}}$, and use the constant-coefficient model only for $\omega\in I_\omega$, as in its defining material closure.

## Statement references

[[def-emx-anisotropic-plane-symbol]]

## Facts & Assumptions

**Given:** The fixed material-rest frame, right-handed Cartesian axes, SI units, positive coefficients, real wavevector, positive angular frequency and nonzero plane-wave amplitude stated above.

[L1] [[def-emx-anisotropic-plane-symbol]] defines the source-free anisotropic plane-mode equation as $\mu^{-1}k\times(k\times e)+\omega^2\varepsilon e=0$, with $d=\varepsilon e$, $k\cdot d=0$, and $e\ne0$.

## Proof

1.1 Write $e=(e_x,e_y,e_z)$. Substituting the stated diagonal tensor and $k=(k_x,0,k_z)$ into [L1], and expanding the cross products componentwise, gives $\begin{pmatrix}\omega^2\varepsilon_\perp-k_z^2/\mu&0&k_xk_z/\mu\\0&\omega^2\varepsilon_\perp-(k_x^2+k_z^2)/\mu&0\\k_xk_z/\mu&0&\omega^2\varepsilon_\parallel-k_x^2/\mu\end{pmatrix}\begin{pmatrix}e_x\\e_y\\e_z\end{pmatrix}=0$. [given, L1, algebra]

1.2 If $e_y\ne0$, the middle row gives $k_x^2+k_z^2=\mu\varepsilon_\perp\omega^2$. If $(e_x,e_z)\ne(0,0)$, the $xz$ block must be singular, and its determinant is $\frac{\omega^2\varepsilon_\perp\varepsilon_\parallel}{\mu}\left(\mu\omega^2-\frac{k_x^2}{\varepsilon_\parallel}-\frac{k_z^2}{\varepsilon_\perp}\right)$, so it vanishes exactly on the second sheet. Conversely, on the first sheet $(0,1,0)$ is a nonzero kernel vector, and on the second sheet the singular $xz$ block has a nonzero kernel vector. Since the matrix separates the $y$ and $xz$ sectors, these are all nonzero modes. Away from an intersection, the $xz$ block is invertible on the first sheet, so its kernel is exactly the $y$ line. On the second sheet, away from an intersection, the middle coefficient is nonzero and the singular $xz$ block has rank one: its off-diagonal entry is nonzero when $k_xk_z\ne0$, while on either coordinate axis its other diagonal entry is respectively $\omega^2\varepsilon_\parallel$ or $\omega^2\varepsilon_\perp$, both positive. Thus both polarization spaces are one-dimensional away from intersections. [given, L1, algebra]

2.1 At an intersection with $\varepsilon_\perp\ne\varepsilon_\parallel$, dividing the first sheet by $\varepsilon_\perp$ and subtracting the second gives $k_x^2(1/\varepsilon_\perp-1/\varepsilon_\parallel)=0$, hence $k_x=0$; either sheet then gives $k_z^2=\mu\varepsilon_\perp\omega^2$. Conversely, substituting these values into both sheets verifies an intersection. The matrix in step 1.1 is then $\operatorname{diag}(0,0,\omega^2\varepsilon_\parallel)$, so its kernel is the complex span of $\hat x,\hat y$. For $\varepsilon_\perp=\varepsilon_\parallel=\varepsilon$, take any real $k\in\mathbb R^3\setminus\{0\}$. Expanding the cross products in [L1] gives $\mathcal M(k,\omega)=(\varepsilon\omega^2-|k|^2/\mu)I_3+kk^T/\mu$. Every complex amplitude has the direct decomposition $e=e_\parallel+e_\perp$, where $e_\parallel=k(k\cdot e)/|k|^2$ and $k\cdot e_\perp=0$; the denominator is positive since $k$ is real and nonzero. The symbol acts by $\mathcal M e_\parallel=\varepsilon\omega^2e_\parallel$ and $\mathcal M e_\perp=(\varepsilon\omega^2-|k|^2/\mu)e_\perp$. Because $\varepsilon\omega^2>0$, a nonzero kernel occurs exactly on $|k|^2=\mu\varepsilon\omega^2$, and there it is precisely $k^\perp=\{e:k\cdot e=0\}$. This complex space has dimension two: choose an index with $k_i\ne0$ and solve its one linear equation for $e_i$ in terms of the other two complex coordinates. For every real unit direction $n$, taking $k=\omega\sqrt{\mu\varepsilon}\,n$ gives a point on that sphere. In the $xz$ section this kernel is the sum of the $y$ and transverse $xz$ coordinate sectors, verifying the common-circle section as well as the full-sphere claim. This proves the stated degeneracies and completes the conditional model classification. [given, L1, step 1.1, step 1.2, algebra] ∎

## Diagram

For the representative positive-uniaxial ratio $\varepsilon_\parallel=2\varepsilon_\perp$, normalize both wavevector coordinates by $\omega\sqrt{\mu\varepsilon_\perp}$. The ordinary cross-section is the unit circle; the extraordinary cross-section is the ellipse $u_x^2/2+u_z^2=1$. They intersect at the two optic-axis points $(0,\pm1)$. The drawing is a normalized cross-section of the two exact equations in the Statement; the proof does not rely on it.

~~~tikz
\begin{tikzpicture}[scale=1.25,>=stealth]
  \draw[->] (-1.8,0) -- (1.8,0) node[right] {$u_x$};
  \draw[->] (0,-1.45) -- (0,1.45) node[above] {$u_z$};
  \draw[thick,blue] (0,0) circle (1);
  \draw[thick,red,dashed] (0,0) ellipse [x radius=1.414,y radius=1];
  \fill (0,1) circle (1.4pt);
  \fill (0,-1) circle (1.4pt);
  \node[blue] at (-1.05,0.75) {ordinary};
  \node[red] at (1.15,0.78) {extraordinary};
  \node[below left] at (0,0) {$0$};
\end{tikzpicture}
~~~
