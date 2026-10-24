---
id: ex-qftx-t3-finite-web-index
kind: example
title: A T3 finite web with nonzero geometric period
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 2
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-spectral-networks-examples
deps:
  - def-qftx-spectral-network-data
dependency_roles:
  def-qftx-spectral-network-data: formulation-prerequisite
proof_strategy: direct
physical_scope: Source-qualified geometric example for the T3 cubic differential in a type-A2 class-S context. It proves a finite-web and nonzero geometric-period calculation only; it asserts no nonzero physical charge image, no numerical bulk or framed BPS index, and no general network algorithm.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Omar Kidwai and Guillaume Tahar, Spectral Networks, Finite Webs, and the T3 Cubic Differential
      url: https://arxiv.org/html/2610.23752v1
      locator: "§2.1 (cubic differential and flat torus cover), §§2.2–2.3 (WKB networks, finite webs, canonical lifts and Lemma 2.7), §3.1 (the T3 differential and branch points), §3.3 (network result), and Appendix A (angle convention)."
    - title: Davide Gaiotto, Gregory W. Moore, and Andrew Neitzke, Spectral Networks
      url: https://arxiv.org/pdf/1204.4824
      locator: "§§2–3.3 and §5: physical charge and defect conventions, finite webs, and the distinction between geometric web data and numerical index evaluation."
    - title: "Clarence Kineider, Georgios Kydonakis, Eugen Rogozinnikov, Valdo Tatitscheff, and Alexander Thomas, Spectral Networks: Bridging Higher-Rank Teichmüller Theory and BPS States"
      url: https://arxiv.org/pdf/2412.03588v3
      locator: "Final monograph version (2026; Lecture Notes in Mathematics 2386), Chapter 22, printed pp. 365–396, §§22.1.1–22.1.3 and §§22.3.1.1–22.3.1.4: type-A class-S setup, finite webs, charge lifts, second-helicity and framed-index conventions."
verification:
  precheck: pending
---

## Example

Use the geometric T3 cubic differential of Kidwai and Tahar on $X=\mathbb P^1$, with dimensionless coordinate $x$ and scale $\alpha=1$:

$$\varphi=\frac{dx^{\otimes3}}{x^2(x-1)^2}.$$

Let $\omega=e^{2\pi i/3}$. In the source's flat normalization, its canonical degree-three cover is $\Sigma=\mathbb C/(\mathbb Z+\omega\mathbb Z)$, with $\lambda^3=\pi^*\varphi$, holomorphic $\lambda$, and ramification points $\widetilde A=0$, $\widetilde B=(2+\omega)/3$, and $\widetilde C=(1+2\omega)/3$. The deck rotation $\tau([w])=[\omega w]$ fixes those points and satisfies $\tau^*\lambda=\omega\lambda$. The name T3 here refers to this cubic differential; it does not by itself specify a four-dimensional quantum model.

Use the geometric WKB phase convention $\mathcal W^{\rm KT}_{\vartheta}(\varphi)=\mathcal W(e^{-3i\vartheta}\varphi)$, with the network seeded by maximal trajectories from the three conical branch values and enlarged by its local junction rule. The straight segment $p$ from $\widetilde A$ to $\widetilde B$ has direction $\vartheta_{\rm KT}=\pi/6$ and positive finite length $1/\sqrt3$ in the KT cover metric $|\lambda|$. For the ordered sheets with $\lambda^{(i)}-\lambda^{(j)}=(1-\omega)\lambda$, the sheet-difference phase of the assigned spectral-network definition is $\vartheta_{\rm W}=0$; it is not the geometric slope phase $\vartheta_{\rm KT}$. Its projection to $X$ is a single-edge finite web: a finite connected metric ribbon graph with two univalent branch-point vertices and no internal vertices. The same edge has length $1$ in the GMN sheet-difference metric; applying the GMN string mass normalization gives the normalized value $1/\pi$, not a physical mass assigned to this geometric example. A canonical lifted cycle is $\gamma_{\rm geom}=[p-\tau(p)]\in H_1(\Sigma;\mathbb Z)$, whose geometric period is $Z_{\rm geom}(\gamma_{\rm geom})=\int_{\gamma_{\rm geom}}\lambda=1$ in this normalized scale.

In the source's rational-slope coordinates, $\widetilde B-\widetilde A=(2/3,1/3)$ in the basis $(1,\omega)$ corresponds to $(p_0,q_0)=(2,1)$, giving $\tan\vartheta_{\rm KT}=\sqrt3 q_0/(2p_0-q_0)=1/\sqrt3$ and Eisenstein determinant $p_0^2-p_0q_0+q_0^2=3$. The geometric period and its nonzero homology class are not automatically a physical charge: a selected type-$A_2$ model must supply the subgroup and charge map from the definition above. A separately supplied physical central charge may allow this cycle to map to zero; under the geometric-period normalization that descends through the quotient, its nonzero period instead forces a nonzero image.

For the separate defect-index convention, choose a generic point $z\in X\setminus\{0,1,\infty\}$ away from the branch values and a model-supplied fundamental half-BPS surface defect with three vacua indexed by $\pi^{-1}(z)$. For generic regular points $z_1,z_2$, a path $\wp:z_1\to z_2$, and a generic interface phase $\vartheta_{\rm fr}$, the bulk index convention is $\Omega(\gamma)=-\frac12\operatorname{Tr}_{\mathcal H^{1,\mathrm{BPS}}_\gamma}((-1)^{2J_3}(2J_3)^2)$ and the framed convention is $\overline\Omega(L_{\wp,\vartheta_{\rm fr}},\bar a;y)=\operatorname{Tr}_{\mathcal H^{1,\mathrm{BPS}}_{L_{\wp,\vartheta_{\rm fr}},\bar a}}e^{i\pi F}(-y)^{\mathcal J}$, with $\mathcal J=2J_{12}+2I_{12}$. The selected model supplies the Hilbert sectors, trace domains, fermion-number sign refinement, and any physical central-charge normalization. This example computes neither a numerical $\Omega$, a soliton index, nor a framed index.

```tikz
\begin{tikzpicture}[scale=3.2]
  \coordinate (A) at (0,0);
  \coordinate (E1) at (1,0);
  \coordinate (E2) at (-0.5,0.8660254);
  \coordinate (E12) at (0.5,0.8660254);
  \coordinate (B) at (0.5,0.2886751);
  \coordinate (C) at (0,0.5773503);
  \draw[dashed] (A)--(E1)--(E12)--(E2)--cycle;
  \draw[thick] (A)--(B);
  \fill (A) circle (0.025) (B) circle (0.025) (C) circle (0.025);
  \node[below left] at (A) {$\widetilde A$};
  \node[right] at (B) {$\widetilde B$};
  \node[left] at (C) {$\widetilde C$};
  \node[below] at (0.45,0.06) {$p$};
  \node[above] at (0.25,0.88) {opposite sides identified};
\end{tikzpicture}
```

This is the canonical-cover fundamental parallelogram in the real plane, with basis vectors $1$ and $\omega$; dashed opposite sides are identified. The solid segment is one lift of the projected one-edge web, not the whole spectral network. The diagram records the source's coordinates only; the verification below does not rely on it.

## Example references

[Kidwai and Tahar, *Spectral Networks, Finite Webs, and the T3 Cubic Differential*, §§2–3](https://arxiv.org/html/2610.23752v1)

[Gaiotto, Moore, and Neitzke, *Spectral Networks*, §§2–3.3 and §5](https://arxiv.org/pdf/1204.4824)

[Kineider, Kydonakis, Rogozinnikov, Tatitscheff, and Thomas, *Spectral Networks: Bridging Higher-Rank Teichmüller Theory and BPS States*, Chapter 22](https://arxiv.org/pdf/2412.03588v3)

## Facts & Assumptions

**Given:** The T3 geometric data and phase convention in the Example; definitions [F1]–[F5] from the assigned A-page item; the source facts in [L1]; and, only for the optional physical interpretation, a selected class-$S$ type-$A_2$ model with its supplied charge and trace data.

[F1] [[def-qftx-spectral-network-data]]: for distinct sheets and a regular path avoiding branch values and punctures, the WKB condition is $\operatorname{Im}(e^{-i\vartheta_{\rm W}}(\lambda^{(i)}-\lambda^{(j)})(\dot z))=0$, with the orientation chosen so the corresponding real part is positive.

[F2] [[def-qftx-spectral-network-data]]: the geometric WKB network is generated from maximal such trajectories issuing from branch points; when compatible $ij$- and $jk$-trajectories meet, an $ik$-trajectory may issue from their joint.

[F3] [[def-qftx-spectral-network-data]]: a finite web is a finite connected metric ribbon graph with trivalent internal vertices and univalent branch-point vertices.

[F4] [[def-qftx-spectral-network-data]]: the chosen sheet-lift rule for a closed web joins its oriented edge lifts into a cycle in $\Gamma_{\rm geom}$.

[F5] [[def-qftx-spectral-network-data]]: the physical charge group is a model-specified quotient of a subgroup of $\Gamma_{\rm geom}$ and is not identified with all of $H_1(\widetilde\Sigma;\mathbb Z)$ by notation alone.

[L1] Kidwai and Tahar, *Spectral Networks, Finite Webs, and the T3 Cubic Differential*, arXiv:2610.23752v1, §§2.1–2.3 and 3.1: the $\alpha=1$ differential, torus cover and ramification points; the WKB network definition; the finite-web graph condition; the canonical lift and central charge; and $\tan\vartheta_{\rm KT}=\sqrt3 q_0/(2p_0-q_0)$ for coprime $(p_0,q_0)$.

[A1] Any identification of $\gamma_{\rm geom}$ with a physical charge, any BPS-state existence claim, and any numerical bulk, soliton, or framed index requires model-supplied charge, Hilbert-space, and trace data; none is inferred from the cubic differential alone.

## Verification

1.1 In the real basis $(1,\omega)$, the segment displacement is $\widetilde B-\widetilde A=(2/3,1/3)$, or $(2+\omega)/3=1/2+i\sqrt3/6$. Its flat length is $\sqrt{(1/2)^2+(\sqrt3/6)^2}=1/\sqrt3>0$ and its slope is $\tan\vartheta_{\rm KT}=(\sqrt3/6)/(1/2)=1/\sqrt3$. Since $\arg(1-\omega)=-\pi/6$, the ordered sheet difference $(1-\omega)\lambda$ along this path has phase $\vartheta_{\rm W}=\vartheta_{\rm KT}-\pi/6=0$. The source formula therefore uses coprime $(p_0,q_0)=(2,1)$, with determinant $4-2+1=3$, and $\int_p\lambda=(2+\omega)/3$ in the chosen flat coordinate. [given, F1, L1, algebra]

2.1 A point on the open segment has basis coordinates $(2s/3,s/3)$ for $0<s<1$. It cannot equal a lattice translate of $\widetilde A$, since that would require an integer second coordinate $s/3\in(0,1/3)$; it cannot equal a translate of $\widetilde B$, since the second coordinate would require $s=1+3n$ for an integer $n$, which has no solution in $(0,1)$; and it cannot equal a translate of $\widetilde C$, since it would require $s=2+3n$, also with no solution in $(0,1)$. Thus the open segment contains no branch point. It is embedded on the torus since a nonzero difference between two points on it has norm less than $1/\sqrt3$, whereas every nonzero lattice vector has norm at least $1$. Its projection under $\pi$ also has no interior self-identification: for $0<s,t<1$, the basis coordinates of $p(t)-\tau(p(s))$ are $((2t+s)/3,(t-s)/3)$, which cannot both be integers, and those of $p(t)-\tau^2(p(s))$ are $((2t+s)/3,(t+2s)/3)\in(0,1)^2$, also not a lattice vector. Therefore the projected path is an embedded regular trajectory from one conical branch value to the other. The WKB network contains this trajectory from each endpoint, in both orientations; the two orientations form a double wall. [given, F1, F2, L1, step 1.1, algebra]

3.1 The graph $T=[0,1]$ with its single edge assigned length $1/\sqrt3$ in the KT cover metric is finite and connected, has two univalent external vertices and no internal vertices, and maps isometrically to the projected double wall because $\pi$ is an unramified local isometry on its open edge. In the GMN sheet-difference metric its edge length is $|1-\omega|/\sqrt3=1$, whose GMN-normalized length would give $1/\pi$ under the string mass convention; no physical mass is asserted. Thus it satisfies the finite-web definition in either explicitly declared convention. [given, F3, step 1.1, step 2.1, construct]

4.1 The deck rotation $\tau$ fixes the two endpoints, so the chain $p-\tau(p)$ is closed. Since $\tau^*\lambda=\omega\lambda$ and $\int_p\lambda=(2+\omega)/3$, its canonical-lift period is $\int_{p-\tau(p)}\lambda=(1-\omega)(2+\omega)/3=1$, using $1+\omega+\omega^2=0$. This nonzero period implies the cycle is nonzero in $H_1(\Sigma;\mathbb Z)$: a boundary integrates to zero because the holomorphic one-form $\lambda$ is closed. The geometric phase is $0$ modulo $\pi/3$, agreeing with $\vartheta_{\rm KT}+\pi/2=2\pi/3$ modulo $\pi/3$ from the finite-web period convention. This proves only a nonzero geometric class and period; it does not prove its physical image or any numerical index. [given, F4, F5, L1, step 1.1, step 3.1, algebra] ∎

## Remarks

The source's T3 argument is geometric. Although its title refers to BPS states in the physical interpretation, this one-edge calculation does not quantize web zero modes or determine $\Omega$, $\mu$, or a framed index. The geometric period $1$ is in the source's normalized flat coordinate and is not an observed or physical mass value. The sign of any defect index also requires the stated fermion-number refinement.
