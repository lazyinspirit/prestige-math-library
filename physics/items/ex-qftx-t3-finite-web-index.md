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
  - def-countable-choice
dependency_roles:
  def-qftx-spectral-network-data: formulation-prerequisite
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: Source-qualified geometric example for the T3 cubic differential in a type-A2 class-S context. It proves a finite-web and nonzero geometric-period calculation and makes no unconditional physical charge-image claim; if a selected model supplies a subgroup containing the cycle, a mass scale, and a descended additive geometric-period normalization, the image is conditionally nonzero. It asserts no numerical bulk or framed BPS index and no general network algorithm.
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

Use the geometric T3 cubic differential of Kidwai and Tahar on $X=\mathbb P^1$, with dimensionless coordinate $x$ and source scale $\alpha=1$:

$$\varphi=\frac{dx^{\otimes3}}{x^2(x-1)^2}.$$

Let $\omega=e^{2\pi i/3}$. An explicit canonical cover is the smooth compactification of $y^3=x(x-1)$, with $\pi(x,y)=x$ and $\lambda_{\rm geom}=dx/y^2$, so $\lambda_{\rm geom}^3=\pi^*\varphi$. Let $\widetilde A,\widetilde B,\widetilde C$ be its unique points over $0,1,\infty$. Define

$$\beta:=\int_0^1\frac{dx}{x^{2/3}(1-x)^{2/3}},\qquad a:=(1-\omega)\beta,\qquad c:=|a|=\sqrt3\,\beta.$$

The integral coordinate $w=a^{-1}\int_{\widetilde A}^{\,\cdot}\lambda_{\rm geom}$, taken modulo $\mathbb Z+\omega\mathbb Z$, identifies this cover with $\Sigma=\mathbb C/(\mathbb Z+\omega\mathbb Z)$. In this coordinate $\lambda_{\rm geom}=a\,dw$, $\widetilde A=0$, $\widetilde B=(2+\omega)/3$, and $\widetilde C=(1+2\omega)/3$. The deck map $\tau(x,y)=(x,\omega y)$ becomes $\tau([w])=[\omega w]$ and satisfies $\tau^*\lambda_{\rm geom}=\omega\lambda_{\rm geom}$. In particular, $a=ce^{-i\pi/6}$: the unit-lattice coordinate is rotated relative to the actual flat coordinate $u=aw$. All lengths and periods below use the specified differential at $\alpha=1$. The name T3 here refers to this cubic differential; it does not by itself specify a four-dimensional quantum model. A physical model using this geometry must supply a positive mass scale $m_*$ and identify its mass-dimension-one one-form with $m_*\lambda_{\rm geom}$; this example makes no such identification unconditionally.

Use the geometric WKB phase convention $\mathcal W^{\rm KT}_{\vartheta}(\varphi)=\mathcal W(e^{-3i\vartheta}\varphi)$, with the network seeded by maximal trajectories from the three conical branch values and enlarged by its local junction rule. A double wall is a network trajectory also present with opposite orientation (and opposite sign) in the same network; use the maximal such overlap, which cannot be extended while remaining double. A saddle connection between conical singularities is a double wall. Define $p:[0,1]\to\Sigma$ by $p(t)=[t(2+\omega)/3]$. It is the straight segment from $\widetilde A$ to $\widetilde B$, with unit-lattice displacement $(2+\omega)/3$, coordinate direction $\vartheta_w=\pi/6$, and unit-coordinate length $1/\sqrt3$. It is the lift of the actual real interval $0\le x\le1$ on which $y=-[x(1-x)]^{1/3}$, parametrized at constant flat speed. Its KT cover-metric length is $\beta$ and its actual geometric phase is $\vartheta_{\rm KT}=\arg(a)+\vartheta_w=0$. For the ordered sheets with $\lambda^{(i)}-\lambda^{(j)}=(1-\omega)\lambda_{\rm geom}$, the sheet-difference phase of the assigned spectral-network definition is $\vartheta_{\rm W}=-\pi/6$. The projection of $p$ is a single-edge finite web: a finite connected metric ribbon graph with two univalent branch-point vertices and no internal vertices. The edge has length $c=\sqrt3\,\beta$ in the GMN sheet-difference metric; the GMN factor gives the normalized geometric number $c/\pi$, not a physical mass. Numerically, $\beta\approx5.2999$, $c\approx9.1797$, and $c/\pi\approx2.9220$ in this source normalization.

Define the explicit oriented cycle $\gamma_{\rm geom}=[p-\tau(p)]\in H_1(\Sigma;\mathbb Z)$, where both paths are oriented from $\widetilde A$ to $\widetilde B$. Since $\tau$ fixes both endpoints, the difference is a closed cycle. This is an explicit cycle and is not asserted to be the canonical lift used in the source's finite-web construction. Its normalized geometric period is $Z_{\rm geom}(\gamma_{\rm geom})=\int_{\gamma_{\rm geom}}\lambda_{\rm geom}=a=(1-\omega)\beta=ce^{-i\pi/6}\ne0$, as verified below.

In the source's rational-slope coordinates, $\widetilde B-\widetilde A=(2/3,1/3)$ in the basis $(1,\omega)$ corresponds to $(p_0,q_0)=(2,1)$, giving $\tan\vartheta_w=\sqrt3 q_0/(2p_0-q_0)=1/\sqrt3$ and Eisenstein determinant $p_0^2-p_0q_0+q_0^2=3$. These are coordinate-slope data; the actual flat phase is shifted by $\arg(a)=-\pi/6$. The geometric period and its nonzero homology class are not automatically a physical charge. If a selected type-$A_2$ model supplies a subgroup $\Gamma_0$ containing $\gamma_{\rm geom}$, a quotient $\rho:\Gamma_0\to\Gamma_{\mathcal T}$, the mass scale $m_*>0$ with physical one-form $m_*\lambda_{\rm geom}$, and the descended GMN normalization, then $Z_{\mathcal T}(\rho(\gamma_{\rm geom}))=m_*a/\pi\ne0$. Because $Z_{\mathcal T}$ is additive, $Z_{\mathcal T}(0)=0$, so this conditional result forces $\rho(\gamma_{\rm geom})\ne0$. Without all these model data, no physical charge-image claim follows.

For the separate defect-index convention, choose a generic point $z\in X\setminus\{0,1,\infty\}$ away from the branch values and a model-supplied fundamental half-BPS surface defect with three vacua indexed by $\pi^{-1}(z)$. For generic regular points $z_1,z_2$, a path $\wp:z_1\to z_2$, and a generic interface phase $\vartheta_{\rm fr}$, the bulk index convention is $\Omega(\gamma)=-\frac12\operatorname{Tr}_{\mathcal H^{1,\mathrm{BPS}}_\gamma}((-1)^{2J_3}(2J_3)^2)$ and, for $y\in Y_{\mathcal T}$ as supplied by the assigned definition, the framed convention is $\overline\Omega(L_{\wp,\vartheta_{\rm fr}},\bar a;y)=\operatorname{Tr}_{\mathcal H^{1,\mathrm{BPS}}_{L_{\wp,\vartheta_{\rm fr}},\bar a}}e^{i\pi F}(-y)^{\mathcal J}$, with $\mathcal J=2J_{12}+2I_{12}$. If the unrefined specialization is used, $1\in Y_{\mathcal T}$. These formulas use the explicit $\mathrm{AC}_\omega$ mathematical premise and trace-class/domain conditions in the assigned definition: each displayed composite operator must extend to a bounded trace-class operator on its indicated Hilbert sector. The selected model supplies those sectors, domains, the $y$-parameter convention, the fermion-number normalization and sign refinement, and any physical central-charge normalization. This example computes neither a numerical $\Omega$, a soliton index, nor a framed index.

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

This is the canonical-cover fundamental parallelogram in the unit-lattice coordinate, with basis vectors $1$ and $\omega$; dashed opposite sides are identified. The solid segment is one lift of the projected one-edge web, not the whole spectral network. The diagram records coordinates only; its drawn lengths are not the $|\lambda_{\rm geom}|$ lengths because $\lambda_{\rm geom}=a\,dw$. The verification below does not rely on it.

## Example references

[Kidwai and Tahar, *Spectral Networks, Finite Webs, and the T3 Cubic Differential*, §§2–3](https://arxiv.org/html/2610.23752v1)

[Gaiotto, Moore, and Neitzke, *Spectral Networks*, §§2–3.3 and §5](https://arxiv.org/pdf/1204.4824)

[Kineider, Kydonakis, Rogozinnikov, Tatitscheff, and Thomas, *Spectral Networks: Bridging Higher-Rank Teichmüller Theory and BPS States*, Chapter 22](https://arxiv.org/pdf/2412.03588v3)

## Facts & Assumptions

**Given:** The T3 geometric data and phase convention in the Example; definitions [F1]–[F3] and [F5] from the assigned A-page item; the explicit cycle [F4]; the source facts in [L1]; the mathematical premise $\mathrm{AC}_\omega$ for the displayed trace conventions; and, only for the optional physical interpretation, a selected class-$S$ type-$A_2$ model with its supplied charge, mass scale, and trace data.

[F1] [[def-qftx-spectral-network-data]]: for distinct sheets and a regular path avoiding branch values and punctures, the WKB condition is $\operatorname{Im}(e^{-i\vartheta_{\rm W}}(\lambda^{(i)}-\lambda^{(j)})(\dot z))=0$, with the orientation chosen so the corresponding real part is positive.

[F2] [[def-qftx-spectral-network-data]]: the geometric WKB network is generated from maximal such trajectories issuing from branch points; when compatible $ij$- and $jk$-trajectories meet, an $ik$-trajectory may issue from their joint.

[F3] [[def-qftx-spectral-network-data]]: a finite web is a finite connected metric ribbon graph with trivalent internal vertices and univalent branch-point vertices.

[F4] The explicit oriented chain $p-\tau(p)$, with both paths directed from $\widetilde A$ to $\widetilde B$, is a cycle because $\tau$ fixes both endpoints; this example does not identify it with a canonical lift.

[F5] [[def-qftx-spectral-network-data]]: the physical charge group is a model-specified quotient of a subgroup of $\Gamma_{\rm geom}$ and is not identified with all of $H_1(\widetilde\Sigma;\mathbb Z)$ by notation alone.

[L1] Kidwai and Tahar, *Spectral Networks, Finite Webs, and the T3 Cubic Differential*, arXiv:2610.23752v1, §§2.1–2.3 and 3.1: the flat metric and canonical cover; the double-wall criterion; finite-web and canonical-lift definitions; the T3 torus identification, which is only up to scale and rotation; and the coordinate-slope formula $\tan\vartheta_w=\sqrt3 q_0/(2p_0-q_0)$ for coprime $(p_0,q_0)$. Our explicit period coordinate fixes the scale and rotation left implicit by that model, so $\vartheta_{\rm KT}=\vartheta_w+\arg(a)$ for the stated $\alpha=1$ differential. The period of the explicit cycle here is computed directly, not imported from the canonical-lift lemma.

[A1] The optional physical conclusion assumes $\gamma_{\rm geom}\in\Gamma_0$, a model-supplied scale $m_*>0$ with physical one-form $m_*\lambda_{\rm geom}$, and the descended GMN normalization; without these data no physical charge-image claim is made. BPS-state existence and numerical bulk, soliton, and framed indices likewise require model-supplied Hilbert sectors and trace data.

[A2] The formulas for the indices use the explicitly assumed mathematical premise $\mathrm{AC}_\omega$ and require each displayed composite operator to extend from its model-specified dense domain to a bounded trace-class operator on the indicated Hilbert sector. The framed index is evaluated only for $y\in Y_{\mathcal T}$ with the assigned definition's model-supplied power convention; the unrefined specialization is used only when $1\in Y_{\mathcal T}$.

## Verification

1.1 On the affine curve $y^3=x(x-1)$, $dx/y^2$ cubes to the specified differential. There are exactly three fully ramified points, over $0,1,\infty$. Near the first two, use $y$ as a coordinate: differentiation gives $dx/y^2=3\,dy/(2x-1)$, which extends holomorphically and is nonzero. Near infinity take a parameter $t$ with $x=t^{-3}$ and $y=t^{-2}h(t)$, where $h(t)^3=1-t^3$ and $h(0)=1$; then $dx/y^2=-3h(t)^{-2}dt$, again holomorphic and nonzero. Away from these points the cover is unramified and the form is nonzero. Along the lift $q$ of $[0,1]$ with $y=-[x(1-x)]^{1/3}$ the form is positive real, and $\int_q\lambda_{\rm geom}=\beta$. The integral converges because both endpoint exponents are $-2/3>-1$. The three oriented lifts are $q,\tau q,\tau^2q$, and their integrals are $\beta,\omega\beta,\omega^2\beta$. [given, algebra, construct]

2.1 The inverse image $G=\pi^{-1}([0,1])$ is a graph with two vertices and these three edges. Its complement is one open disk: $\mathbb P^1\setminus[0,1]$ is an open disk containing the single remaining branch value $\infty$, and its punctured-disk cover is connected with cyclic monodromy of order three; cutting along a radius gives three slit disks glued cyclically, whose missing central point fills to one disk by the local degree-three model. Thus the compact surface has a cell decomposition with $G$ as its one-skeleton and one two-cell. The oriented attaching boundary traverses each graph edge once in each direction, so its cellular boundary is zero. The integral cycle group of $G$ consists of the triples $(n_0,n_1,n_2)$ with $n_0+n_1+n_2=0$; a basis is $(1,-1,0),(0,1,-1)$. Consequently $[q-\tau q]$ and $[\tau q-\tau^2q]$ form a basis of $H_1(\Sigma;\mathbb Z)$, and the full period group is $a(\mathbb Z+\omega\mathbb Z)$, with $a=(1-\omega)\beta$. Integration is unchanged by homotopy or a boundary: subdivide a homotopy or singular two-simplex into finitely many pieces contained in primitive disks, then the primitive endpoint differences cancel on internal edges. This also justifies using the cellular cycle representatives to compute all periods. [given, step 1.1, construct, algebra]

3.1 Define $f:\Sigma\to\mathbb C/(a\mathbb Z+a\omega\mathbb Z)$ by integration from $\widetilde A$ modulo the period group. Step 2.1 makes this well-defined, and its derivative is the nowhere-zero form from step 1.1, so it is a local biholomorphism. Compactness makes its image closed; local invertibility makes it open, so connectedness of the target makes it surjective and a finite covering. The two loops in step 2.1 map to the two target lattice generators; hence the induced fundamental-group image is the entire target group $\mathbb Z^2$. A connected covering with this image has one sheet: lifting target loops permutes its fiber transitively, whereas loops in the image fix the chosen point, so surjectivity leaves only that point. Thus $f$ is a biholomorphism. Dividing its coordinate by $a$ gives the asserted $w$ and $\lambda_{\rm geom}=a\,dw$. Along $q$, $w$ runs straight from $0$ to $\beta/a=1/(1-\omega)=(2+\omega)/3$, so constant flat-speed parametrization is exactly $p(t)=[t(2+\omega)/3]$. Integration also gives $w(\tau P)=\omega w(P)$. The fixed classes of this rotation solve $(1-\omega)w\in\mathbb Z+\omega\mathbb Z$; the determinant of multiplication by $1-\omega$ is $3$, and the three distinct solutions are the displayed $\widetilde A,\widetilde B,\widetilde C$. The remaining branch point therefore has the asserted coordinate $\widetilde C$. [given, step 1.1, step 2.1, construct, algebra]

4.1 The displacement $(2+\omega)/3=1/2+i\sqrt3/6$ has unit-coordinate length $1/\sqrt3$ and coordinate angle $\vartheta_w=\pi/6$. Since $a=(1-\omega)\beta=\sqrt3\beta e^{-i\pi/6}$, its actual flat length is $|a|/\sqrt3=\beta$ and its actual geometric phase is $\vartheta_{\rm KT}=0$. The ordered sheet difference $(1-\omega)\lambda_{\rm geom}$ along this path has phase $\vartheta_{\rm W}=-\pi/6$, with positive real part after multiplication by $e^{i\pi/6}$. The coordinate-slope formula has coprime $(p_0,q_0)=(2,1)$ and determinant $4-2+1=3$; the rotation from $w$ to the flat coordinate must be included when interpreting this as a network phase. Finally, $\int_p\lambda_{\rm geom}=a(2+\omega)/3=\beta$. [given, F1, L1, step 3.1, algebra]

5.1 A point on the open segment has basis coordinates $(2s/3,s/3)$ for $0<s<1$. It cannot equal a lattice translate of $\widetilde A$, since that would require an integer second coordinate $s/3\in(0,1/3)$; it cannot equal a translate of $\widetilde B$, since the second coordinate would require $s=1+3n$ for an integer $n$, which has no solution in $(0,1)$; and it cannot equal a translate of $\widetilde C$, since it would require $s=2+3n$, also with no solution in $(0,1)$. Thus the open segment contains no branch point. It is embedded on the torus since a nonzero difference between two points on it has norm less than $1/\sqrt3$, whereas every nonzero lattice vector has norm at least $1$. Its projection under $\pi$ also has no interior self-identification: for $0<s,t<1$, the basis coordinates of $p(t)-\tau(p(s))$ are $((2t+s)/3,(t-s)/3)$, which cannot both be integers, and those of $p(t)-\tau^2(p(s))$ are $((2t+s)/3,(t+2s)/3)\in(0,1)^2$, also not a lattice vector. Therefore the projected path is an embedded regular trajectory from one conical branch value to the other. The WKB network contains this trajectory from each endpoint, in both orientations; the two orientations form a double wall. [given, F1, F2, L1, step 3.1, step 4.1, algebra]

6.1 The graph $T=[0,1]$ with its single edge assigned length $\beta$ in the KT cover metric is finite and connected, has two univalent external vertices and no internal vertices, and maps isometrically to the projected double wall because $\pi$ is an unramified local isometry on its open edge. In the GMN sheet-difference metric its edge length is $|1-\omega|\beta=\sqrt3\,\beta=c$, whose GMN-normalized value is $c/\pi$ in the source's geometric units; no physical mass is asserted. Thus it satisfies the finite-web definition in either explicitly declared convention. [given, F3, step 4.1, step 5.1, construct]

7.1 The deck rotation $\tau$ fixes the two endpoints, so $p-\tau(p)$ is the explicit cycle of [F4]. Its period is $\int_{p-\tau(p)}\lambda_{\rm geom}=(1-\omega)\int_p\lambda_{\rm geom}=(1-\omega)\beta=a=ce^{-i\pi/6}\ne0$. In the unit-lattice coordinate the displacement of this cycle is $(1-\omega)(2+\omega)/3=1$, agreeing with this period. It is a primitive nonzero homology class by the basis computation in step 2.1; independently, its nonzero period excludes a boundary by the primitive-disk argument there. Its phase $-\pi/6$ is congruent to $\vartheta_{\rm KT}+\pi/2=\pi/2$ modulo $\pi/3$; this congruence is only a phase check and does not identify the explicit cycle with a canonical lift. This proves the nonzero geometric class and exact period, not an unconditional physical identification. [given, F4, F5, L1, step 2.1, step 4.1, step 6.1, algebra]

8.1 Under the assumptions of [A1], the descended physical central charge is $Z_{\mathcal T}(\rho(\gamma_{\rm geom}))=\pi^{-1}\int_{\gamma_{\rm geom}}m_*\lambda_{\rm geom}=m_*a/\pi\ne0$. Since $Z_{\mathcal T}$ is additive, it sends zero to zero, so $\rho(\gamma_{\rm geom})\ne0$. Without the assumptions in [A1], no physical charge image follows. [A1, step 7.1, algebra] ∎

## Remarks

The source's T3 argument is geometric. Although its title refers to BPS states in the physical interpretation, this one-edge calculation does not quantize web zero modes or determine $\Omega$, $\mu$, or a framed index. The geometric period $a=(1-\omega)\beta$, of modulus $c=\sqrt3\,\beta$, uses the explicit $\alpha=1$ differential and is not an observed or physical mass value. The sign of any defect index also requires the stated fermion-number refinement.
