---
id: def-emx-port-scattering-model
kind: definition
title: "Finite propagating-port scattering map"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-countable-choice
  - def-emx-reciprocal-phasor-medium
  - pthm-emx-lorentz-reciprocity
  - pthm-emx-weak-poynting-uniqueness
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emx-reciprocal-phasor-medium: formulation-prerequisite
  pthm-emx-lorentz-reciprocity: physical-result
  pthm-emx-weak-poynting-uniqueness: formulation-prerequisite
verification:
  precheck: n/a
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A conditional finite-channel interface for linear, fixed-frequency Maxwell scattering in one stationary material-rest frame. It assumes the listed propagating channels, their flux and reciprocal pairings, and a unique solution map at the chosen real frequency. Evanescent fields may be needed in the exact boundary matching. The definition proves no existence, uniqueness, completeness or empirical realization claim, and an omitted outgoing continuum must be separately counted."
sources:
  references:
    - title: "Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS complete lecture script, 176 pages"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "Chapter 13, §13.2, printed pp. 13.3–13.6 (PDF pp. 155–158), equations (13.10)–(13.28): vacuum fields in a straight hollow guide with ideal conducting walls, neglecting conductor penetration; cross-sectional eigenvalue problem and propagating versus evanescent longitudinal factors. The finite propagating-mode count is stated in that setting, not for every reference guide allowed below; the finite channel list below is an independent assumption. This section does not establish open-end scattering existence."
    - title: "Weng Cho Chew, Theory of Microwave and Optical Waveguides, Purdue lecture notes, complete 362-page text"
      url: "https://engineering.purdue.edu/wcchew/course/tgwAll20121211.pdf"
      locator: "§1.12.2, printed pp. 25–26 (PDF pp. 34–35), defines the incident-to-outgoing scattering matrix; §§5.1–5.2, printed pp. 178–188 (PDF pp. 188–197), treat mode matching at waveguide junctions. The text retains infinitely many matching modes; finite truncation is an approximation."
    - title: "Roger B. Marks and Dylan F. Williams, A General Waveguide Circuit Theory, Journal of Research of the National Institute of Standards and Technology 97(5) (1992), pp. 533–562"
      url: "https://nistdigitalarchives.contentdm.oclc.org/digital/api/collection/p16009coll6/id/74796/download"
      locator: "§5, printed pp. 555–556 (PDF pp. 22–23): power-wave amplitudes and their net-power convention; the text distinguishes them from traveling waves for complex characteristic impedance."
---

## Definition

Fix a real angular frequency $\omega>0$ in $\mathrm{s^{-1}}$ and use the $e^{-i\omega t}$ convention and SI field units of the fixed-frequency reciprocal-phasor model. Let $\Omega\subset\mathbb R^3$ be a bounded device region with $C^1$ boundary in one stationary material-rest frame. Its continuous phasor coefficient maps are $\varepsilon,\mu:\overline\Omega\to\mathbb C^{3\times3}$ in $\mathrm{F\,m^{-1}}$ and $\mathrm{H\,m^{-1}}$, respectively. The complex phasor fields $\widetilde E,\widetilde H\in C^1(\overline\Omega;\mathbb C^3)$ have units $\mathrm{V\,m^{-1}}$ and $\mathrm{A\,m^{-1}}$. They satisfy the fixed-frequency Maxwell equations of the reciprocal-phasor data class, with no impressed volume current or charge in $\Omega$. The corresponding real fields are $E(x,t)=\operatorname{Re}(\widetilde E(x)e^{-i\omega t})$ and $H(x,t)=\operatorname{Re}(\widetilde H(x)e^{-i\omega t})$, with period $T=2\pi/\omega$. Assume $\mathrm{AC}_\omega$ as defined by the countable-choice axiom when the reciprocal boundary identity below is used.

An **admissible port** consists of a bounded connected $C^1$ cross-section $\Sigma_j$ in a plane perpendicular to a fixed unit guide axis $\widehat z_j$, together with a uniform lossless straight reference guide extending from that section. The outward normal $n_j$ on the port points from $\Omega$ into the guide. The reference-guide phasor coefficients and wall conditions are independent of distance along $\widehat z_j$. A propagating channel mode is a pair of $C^1$ complex transverse profiles $(e_{j\alpha},h_{j\alpha})$ whose associated source-free phasor fields in the guide solve the fixed-frequency Maxwell equations and have longitudinal factor $e^{\pm i\beta_\alpha s_j}$ with real $\beta_\alpha>0$ in $\mathrm{m^{-1}}$. The profiles are normalized per unit amplitude in $\mathrm{W^{1/2}}$, so the resulting fields have units $\mathrm{V\,m^{-1}}$ and $\mathrm{A\,m^{-1}}$. The plus and minus signs are assigned according to whether energy travels toward or away from $\Omega$. At $\omega$, assume a finite list of $N$ propagating mode channels in total and that this list is complete for the propagating channels represented by the finite interface. Any outgoing radiation continuum or omitted propagating channel is separately recorded as nonnegative outward power $P_{\mathrm{other}}$. Evanescent modes may be required in the exact near-port matching field, but are not entries of the propagating amplitude vectors; no finite truncation of such matching modes is asserted to be exact.

Let $a=(a_1,\ldots,a_N)^T\in\mathbb C^N$ and $b=(b_1,\ldots,b_N)^T\in\mathbb C^N$ be the incoming and outgoing amplitudes. Choose the mode shapes and amplitude convention so that each coefficient has units $\mathrm{W^{1/2}}$, the Hermitian norm is $\|a\|_2^2=\sum_{\alpha=1}^N|a_\alpha|^2$ in W, and the total time-averaged outward power through the port sections is

$$P_{\mathrm{ports}}=\|b\|_2^2-\|a\|_2^2.$$

This equality, including the vanishing of cross terms in the real-power pairing, is a port-mode normalization hypothesis. For complex phasor fields the time-averaged Poynting vector is $\boldsymbol\Pi=\tfrac12\operatorname{Re}(\widetilde E\times\widetilde H^*)$ in $\mathrm{W\,m^{-2}}$, where $*$ denotes componentwise conjugation before the bilinear cross product. This Hermitian power pairing is distinct from the unconjugated Lorentz bilinear pairing.

On the non-port wall $\Gamma_w$, the model prescribes either a smooth PEC condition $E_\tau(t)=0$, giving zero outward wall power, or a passive wall condition with explicitly specified nonnegative cycle-averaged outward power $P_\partial\ge0$. Here $E_\tau(t)=E(t)-(n\cdot E(t))n$ and $H_\tau(t)=H(t)-(n\cdot H(t))n$ are the classical tangential restrictions of the smooth real fields. A smooth impedance wall is one such condition: for a real scalar surface admittance $Y\ge0$ in siemens and $H_\tau(t)=Y(n\times E_\tau(t))$, its instantaneous outward power density is $n\cdot(E_\tau(t)\times H_\tau(t))=Y|E_\tau(t)|^2\ge0$, so its cycle-averaged outward power is nonnegative. For phasor amplitude $\widetilde E_\tau$, that average is $\tfrac12Y|\widetilde E_\tau|^2$. This is a smooth-field model assumption; no $L^2$ trace is inferred from membership in $H(\operatorname{curl})$.

The total cycle-averaged outward boundary power is the port contribution $\|b\|_2^2-\|a\|_2^2$, plus $P_\partial$ and any unlisted outgoing power $P_{\mathrm{other}}$. No unlisted incoming power is included.

For each $a$, assume the adopted linear source-free Maxwell boundary problem has a unique time-harmonic solution and a unique outgoing vector $b$. The model assumes no incoming wave in unlisted channels. By linearity of the phasor equations and uniqueness, the map $a\mapsto b$ is complex-linear: a linear combination of two solutions solves the problem for the same linear combination of their incoming data, and uniqueness identifies its outgoing data. The **finite scattering matrix** is the unique matrix $S(\omega)\in\mathbb C^{N\times N}$ such that $b=S(\omega)a$. The definition assumes this well-posed solution map; it does not prove its existence, uniqueness, modal completeness, or absence of resonances.

For reciprocal use, the incoming and outgoing modal phases are additionally chosen so that for every pair of source-free solutions with incoming vectors $a_1,a_2$ and outgoing vectors $b_1,b_2$, the Lorentz boundary pairing reduces to

$$\int_{\partial\Omega}n\cdot(\widetilde E_1\times\widetilde H_2-\widetilde E_2\times\widetilde H_1)\,dS=a_1^Tb_2-b_1^Ta_2.$$

This is an explicit reciprocal-normalization condition, using the complex-bilinear products of the reciprocal-phasor model and the bounded-$C^1$ reciprocity identity of the Lorentz reciprocity theorem. Power normalization alone does not imply this bilinear pairing for arbitrary complex reference impedances. Rephasing a port is allowed only when the declared reciprocal pairing is preserved.

## Definition references

[[def-countable-choice]]

[[def-emx-reciprocal-phasor-medium]]

[[pthm-emx-lorentz-reciprocity]]

[[pthm-emx-weak-poynting-uniqueness]]

## Port orientation

The arrows show the sign convention for two ports: incoming amplitudes point toward the device and outgoing amplitudes point away. The drawing records orientation only; the flux identities in the definition, not the drawing, determine the proofs.

```tikz
\begin{tikzpicture}[>=stealth,thick]
  \draw[rounded corners] (-0.55,-0.55) rectangle (0.55,0.55);
  \node at (0,0) {device $\Omega$};
  \draw[->] (-3,0.25) -- (-0.55,0.25) node[midway,above] {$a_1$};
  \draw[->] (-0.55,-0.25) -- (-3,-0.25) node[midway,below] {$b_1$};
  \draw[->] (3,0.25) -- (0.55,0.25) node[midway,above] {$a_2$};
  \draw[->] (0.55,-0.25) -- (3,-0.25) node[midway,below] {$b_2$};
  \node[above] at (-2,0.55) {$\Sigma_1$};
  \node[above] at (2,0.55) {$\Sigma_2$};
\end{tikzpicture}
```

## Remarks

The rectangular-guide suppliers on the prerequisite page provide mode-profile results only under their stated rectangular, lossless hypotheses; their completeness theorem expressly does not prove an open-end scattering map. The finite channel basis and the unique scattering solution above therefore remain explicit interface assumptions. For an open radiating device, radiation power must be included in $P_{\mathrm{other}}$; finite-channel unitarity is not concluded while that term is omitted.
