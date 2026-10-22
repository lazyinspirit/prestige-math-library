---
id: pthm-emx-helicity-berry-curvature
kind: physics-theorem
title: Curvature and the obstruction to a global polarization basis
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - def-emx-helicity-line-bundle
  - thm-the-exterior-derivative-squares-to-zero
  - def-smooth-singular-chain-and-cochain-complexes
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-emx-helicity-line-bundle: formulation-prerequisite
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
  def-smooth-singular-chain-and-cochain-complexes: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Conditional classical Maxwell-Lorentz vacuum model in the smooth source-free
  nonzero-Fourier-mode regime stated by the supplier, with no extra approximation.
  The result concerns the helicity line over nonzero wavevector directions, not
  a photon position operator, quantization, a material medium, an experiment, or
  an empirical claim.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "K. Y. Bliokh, F. J. Rodríguez-Fortuño, F. Nori and A. V. Zayats, Spin-orbit interactions of light, Nature Photonics 9 (2015), arXiv:1505.02864"
      url: "https://arxiv.org/pdf/1505.02864"
      locator: "Section 'Angular momenta and geometric phases', Box 2, PDF pp. 3–4: transverse polarization on the sphere of directions and helicity-dependent Berry connection/curvature; the exact sign and flux here are derived locally."
    - title: "David Tong, The Quantum Hall Effect, TIFR Infosys Lecture Notes (2016)"
      url: "https://www.damtp.cam.ac.uk/user/tong/qhe/qhe.pdf"
      locator: "§1.5.1–1.5.2, printed pp. 28–34: gauge changes, curvature, surface phase, and the spin-in-a-field monopole calculation. Tong uses the opposite connection sign and a spin-1/2 quantum model; neither is imported as a premise."
verification:
  precheck: pending
---

## Statement

Fix $\sigma\in\{+1,-1\}$ and let $L_\sigma(n)$ be the range of the helicity projector $P_\sigma(n)$ over the outward-oriented unit sphere $S^2$. On an angular chart with $0<\theta<\pi$ and a smooth longitude branch $\phi$, use $v_\sigma=(e_\theta+i\sigma e_\phi)/\sqrt2$ and the connection convention $A_\sigma=i v_\sigma^\dagger d v_\sigma$. The spherical frame has Berry one-form $A_\sigma=\sigma\cos\theta\,d\phi$ and curvature $F_\sigma=dA_\sigma=-\sigma\sin\theta\,d\theta\wedge d\phi$. If $\omega_{S^2,n}(X,Y):=n\cdot(X\times Y)$ is the outward area form for $X,Y\in T_nS^2$, then this curvature extends smoothly to the whole sphere as $F_\sigma=-\sigma\omega_{S^2}$. Write $\int_{S^2}$ for the outward-oriented integral, evaluated as the sum over the eight radially projected octant triangles described in the Proof. Its total flux is $\int_{S^2}F_\sigma=-4\pi\sigma$, so the flux divided by $2\pi$ is $-2\sigma$ in this convention. The line bundle has no globally smooth unit frame.

## Statement references

[[def-emx-helicity-line-bundle]]

[[thm-the-exterior-derivative-squares-to-zero]]

[[def-smooth-singular-chain-and-cochain-complexes]]

[[def-integral-of-a-form-over-a-smooth-singular-simplex]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

## Facts & Assumptions

**Given:** The smooth oriented unit sphere, the helicity line $L_\sigma$, its local unit frame $v_\sigma$, and its connection $A=i v_\sigma^\dagger d v_\sigma$ from [[def-emx-helicity-line-bundle]].

[F1] [[def-emx-helicity-line-bundle]] gives $v_\sigma=(e_\theta+i\sigma e_\phi)/\sqrt2$, $A=i v_\sigma^\dagger d v_\sigma$, and $A'=A-d\chi$ under $v'=e^{i\chi}v$.

[F2] [[thm-stokes-theorem-for-smooth-singular-chains]] states that for a smooth manifold, a finite smooth singular $k$-chain $c$, $k\ge1$, and a smooth $(k-1)$-form $\alpha$, $\int_c d\alpha=\int_{\partial c}\alpha$.

[F3] [[def-smooth-singular-chain-and-cochain-complexes]] defines finite real sums of smooth singular simplices with signed face boundary; [[def-integral-of-a-form-over-a-smooth-singular-simplex]] defines each simplex integral by pullback to its ordered affine simplex.

[F4] [[thm-the-exterior-derivative-squares-to-zero]] gives $d^2\alpha=0$ for every smooth differential form $\alpha$.

## Proof

**Given:** $S^2$, a fixed $\sigma\in\{+1,-1\}$, and the local frame and connection specified in [F1].

1.1 In spherical coordinates, $\partial_\theta e_\theta=-n$, $\partial_\theta e_\phi=0$, $\partial_\phi e_\theta=\cos\theta\,e_\phi$, and $\partial_\phi e_\phi=-\cos\theta\,e_\theta+\sin\theta\,n$. Using $e_\theta\cdot e_\theta=e_\phi\cdot e_\phi=1$, $e_\theta\cdot e_\phi=0$, and $e_\theta\cdot n=e_\phi\cdot n=0$, direct expansion gives $v_\sigma^\dagger\partial_\theta v_\sigma=0$ and $v_\sigma^\dagger\partial_\phi v_\sigma=-i\sigma\cos\theta$. Thus $A_\sigma=i v_\sigma^\dagger d v_\sigma=\sigma\cos\theta\,d\phi$. [F1, algebra]

2.1 Differentiating the preceding local form yields $dA_\sigma=-\sigma\sin\theta\,d\theta\wedge d\phi$. The globally defined form $\omega_{S^2,n}(X,Y)=n\cdot(X\times Y)$ is smooth because its coefficients are polynomial in the embedded coordinates and tangent vectors; since $\partial_\theta n=e_\theta$ and $\partial_\phi n=\sin\theta\,e_\phi$, it satisfies $\omega_{S^2}=\sin\theta\,d\theta\wedge d\phi$. Therefore $dA_\sigma=-\sigma\omega_{S^2}$ away from the poles. On any overlap neighborhood where two unit frames differ by a smooth real phase $\chi$, [F1] changes $A$ by $-d\chi$, so [F4] gives $dA'=dA$; the local curvatures glue smoothly, and equality with the smooth form $-\sigma\omega_{S^2}$ extends by continuity to the poles. [F1, F4, step 1.1, algebra]

3.1 To compute the flux with [F3], take the boundary $O=\{|x_1|+|x_2|+|x_3|=1\}$ of the unit octahedron. Fix one order of its six vertices. For each of its eight triangular faces, let $\tau_f:\Delta^2\to f$ be the affine simplex using that global vertex order, and compose it with the radial projection $r(x)=x/\|x\|$ to $S^2$. The denominator is nonzero on $O$, so each face map extends smoothly to a neighborhood of its simplex. Give each map coefficient $+1$ or $-1$ so its orientation agrees with the outward sphere orientation. A shared edge then has the same ordered affine edge map in the two adjacent faces and opposite boundary coefficients, so the finite sum $z$ of the eight maps satisfies $\partial z=0$. Each spherical octant has $\omega_{S^2}=\sin\theta\,d\theta\wedge d\phi$ and area $\int_0^{\pi/2}\sin\theta\,d\theta\int_0^{\pi/2}d\phi=\pi/2$; the eight octants cover the sphere and their edges contribute no two-dimensional integral. Hence $\int_z\omega_{S^2}=8(\pi/2)=4\pi$, and step 2.1 gives $\int_{S^2}F_\sigma:=\int_zF_\sigma=-4\pi\sigma$. Dividing by $2\pi$ gives $-2\sigma$. [F3, step 2.1, construct, algebra]

4.1 Suppose a global smooth unit frame $v$ existed. Then $A=i v^\dagger d v$ would be a global smooth one-form and its curvature would be $F_\sigma=dA$. Applying [F2] to the finite cycle $z$ from step 3.1 gives $\int_zF_\sigma=\int_zdA=\int_{\partial z}A=0$, contradicting $\int_zF_\sigma=-4\pi\sigma\ne0$ by the nonzero values of $\sigma$ in [F1] and step 3.1. Therefore no global smooth unit frame exists. [F1, F2, step 3.1, algebra] ∎

## Gauge-patch diagram

On the overlap $S^2\setminus\{+e_3,-e_3\}$ the longitude phase is single-valued after exponentiation because $\sigma=\pm1$. The two local frame choices $v_N=e^{i\sigma\phi}v_\sigma$ and $v_S=e^{-i\sigma\phi}v_\sigma$ obey the displayed transition. The arrow records only this change of frame; the proof above establishes the curvature and obstruction without relying on the diagram.

```tikz
\begin{tikzpicture}[>=stealth]
  \node (south) at (0,0) {$v_S=e^{-i\sigma\phi}v_\sigma$};
  \node (north) at (5,0) {$v_N=e^{i\sigma\phi}v_\sigma$};
  \draw[->] (south) -- node[above] {$g_{NS}(\phi)=e^{2i\sigma\phi}$} (north);
  \node at (2.5,-0.65) {$S^2\setminus\{+e_3,-e_3\}$};
\end{tikzpicture}
```
