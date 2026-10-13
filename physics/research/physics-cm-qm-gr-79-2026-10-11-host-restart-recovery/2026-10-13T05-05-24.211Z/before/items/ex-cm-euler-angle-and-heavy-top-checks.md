---
id: ex-cm-euler-angle-and-heavy-top-checks
kind: example
title: "Finite checks of the Euler-angle parametrization, the angular-velocity formula and a steady precession of the heavy top"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-pi-via-first-positive-cosine-zero, thm-quarter-turn-values-and-shift-formulas, cor-pi-is-the-first-positive-sine-zero, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-addition-formulas, def-cm-euler-angle-parametrization-and-heavy-top-system, lem-cm-euler-angle-angular-velocity, thm-cm-heavy-top-reduction, lem-cm-coordinate-rotation-matrices, lem-cm-skew-matrix-cross-product-correspondence, def-cm-rigid-placement-and-body-angular-velocity, def-matrix-product-and-identity-matrix, def-sine-and-cosine-by-power-series, cor-trigonometric-parity-and-pythagorean-identity, def-euclidean-inner-product, def-derivative, def-interval]
dependency_roles:
  def-pi-via-first-positive-cosine-zero: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  cor-pi-is-the-first-positive-sine-zero: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  def-cm-euler-angle-parametrization-and-heavy-top-system: mathematical-premise
  lem-cm-euler-angle-angular-velocity: mathematical-premise
  thm-cm-heavy-top-reduction: mathematical-premise
  lem-cm-coordinate-rotation-matrices: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  def-cm-rigid-placement-and-body-angular-velocity: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §§3.5-3.6, Eqs. (3.54)-(3.70), printed pp. 62-69: Euler angles, angular velocity, and uniform precession of the symmetric top"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §4.5, Eqs. (4.74)-(4.85): Euler-angle kinematics and the exact precession condition of the symmetric top"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §2.10: the top equations and their steady precession"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Example

All data are the exact ones of the heavy-top system of [[def-cm-euler-angle-parametrization-and-heavy-top-system]] with the parameter choice $A=C=m=d=g=1$, and the rotation matrices are those of [[lem-cm-coordinate-rotation-matrices]]. Three computations are performed: the value of the Euler-angle parametrization at a specific triple, the body angular velocity of a specific motion through the formula of [[lem-cm-euler-angle-angular-velocity]] checked against the definition, and a constant-rate precession checked against every clause of [[thm-cm-heavy-top-reduction]]. No physical measurement is involved and no claim about a physical top is made.

## Facts & Assumptions

**Given:** The parametrization $\Theta(\varphi,\theta,\psi)=R_z(\varphi)R_y(\theta)R_z(\psi)$, the matrices $R_z(a)=\begin{pmatrix}\cos a&-\sin a&0\\ \sin a&\cos a&0\\ 0&0&1\end{pmatrix}$ and $R_y(a)=\begin{pmatrix}\cos a&0&\sin a\\ 0&1&0\\ -\sin a&0&\cos a\end{pmatrix}$, the angular-velocity formula of [[lem-cm-euler-angle-angular-velocity]], and the reduction clauses 1-4 of [[thm-cm-heavy-top-reduction]].

[L1] $R_z(a),R_y(a)\in SO(3)$; $R_z(a)e_1=\cos a\,e_1+\sin a\,e_2$, $R_z(a)e_2=-\sin a\,e_1+\cos a\,e_2$, $R_z(a)e_3=e_3$, $R_y(a)e_1=\cos a\,e_1-\sin a\,e_3$, $R_y(a)e_2=e_2$, $R_y(a)e_3=\sin a\,e_1+\cos a\,e_3$; and the derivative rules of [[lem-cm-coordinate-rotation-matrices]].

[L2] The body angular velocity is the unique $\omega$ with $R^{\mathsf T}R'=[\omega]_\times$, and $[\omega]_\times z=\omega\times z$; for the Euler-angle curve it equals $(-\varphi'\sin\theta\cos\psi+\theta'\sin\psi,\ \varphi'\sin\theta\sin\psi+\theta'\cos\psi,\ \psi'+\varphi'\cos\theta)$ in the standard basis [[lem-cm-euler-angle-angular-velocity]], [[def-cm-rigid-placement-and-body-angular-velocity]], [[lem-cm-skew-matrix-cross-product-correspondence]].

[L3] For a heavy-top trajectory, $b=C(\psi'+\varphi'\cos\theta)$ and $a=A\varphi'\sin^2\theta+b\cos\theta$ are constant, $\varphi'=(a-b\cos\theta)/(A\sin^2\theta)$, $\psi'=b/C-(a-b\cos\theta)\cos\theta/(A\sin^2\theta)$, the reduced energy $E=\tfrac12A\theta'^2+(a-b\cos\theta)^2/(2A\sin^2\theta)+b^2/(2C)+mgd\cos\theta$ is constant, and $A\theta''=-U'(\theta)$ with $U=(a-b\cos\theta)^2/(2A\sin^2\theta)+b^2/(2C)+mgd\cos\theta$ [[thm-cm-heavy-top-reduction]].

[L4] With $\pi$ of [[def-pi-via-first-positive-cosine-zero]], $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$ by [[thm-quarter-turn-values-and-shift-formulas]]. For $c=\cos(\pi/3)$, the addition formulas give $4c^3-3c=\cos\pi=-1$, hence $(c+1)(2c-1)^2=0$; strict decrease of cosine on $[0,\pi]$ implies $c>-1$, so $c=1/2$. Positivity of sine on $(0,\pi)$ and $\sin^2+\cos^2=1$ give $\sin(\pi/3)=\sqrt3/2$ ([[thm-sine-and-cosine-addition-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-pi-is-the-first-positive-sine-zero]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L5] Matrix multiplication is entrywise-accumulating, so the product of displayed matrices can be read off entrywise, and $\lVert\cdot\rVert_2$ is the Euclidean norm [[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]].

## Verification

**Proof technique:** direct.

1.1 Value of the parametrization: $\Theta(0,\tfrac\pi2,0)=R_z(0)R_y(\tfrac\pi2)R_z(0)=R_y(\tfrac\pi2)=\begin{pmatrix}0&0&1\\0&1&0\\-1&0&0\end{pmatrix}$ by [L4] and [L5]; its columns $(0,0,-1),(0,1,0),(1,0,0)$ are orthonormal and its determinant is $1$ (expansion along the second row), so the value lies in $SO(3)$, as the parametrization guarantees. [given, L1, L4, L5, algebra]

1.2 Angular-velocity check: take $\varphi(t)=t$, $\theta(t)=\tfrac\pi2$, $\psi(t)=0$, so $R(t)=R_z(t)R_y(\tfrac\pi2)$. Then $R'(t)=R_z'(t)R_y(\tfrac\pi2)=R_z(t)[e_3]_\times R_y(\tfrac\pi2)$ by [L1], hence $R(t)^{\mathsf T}R'(t)=R_y(\tfrac\pi2)^{\mathsf T}[e_3]_\times R_y(\tfrac\pi2)=[R_y(\tfrac\pi2)^{\mathsf T}e_3]_\times=[-e_1]_\times$ by the conjugation identity; so $\omega=-e_1$. The formula of [L2] with $\varphi'=1$, $\theta'=\psi'=0$, $\cos\psi=1$, $\sin\psi=0$ gives $(-\sin\tfrac\pi2,0,\cos\tfrac\pi2)=(-1,0,0)$, in agreement. [given, L1, L2, L4, L5, algebra]

1.3 Steady precession: put $\theta(t)\equiv\tfrac\pi3$, $\varphi(t)=2t$, $\psi(t)=\tfrac12t$. Then $b=C(\psi'+\varphi'\cos\theta)=\tfrac12+2\cdot\tfrac12=\tfrac32$ and $a=A\varphi'\sin^2\theta+b\cos\theta=2\cdot\tfrac34+\tfrac32\cdot\tfrac12=\tfrac94$ are constants, so the first and third system equations hold identically; and the second equation reads $\frac{d}{dt}(A\theta')=0=A\varphi'^2\sin\theta\cos\theta-C(\psi'+\varphi'\cos\theta)\varphi'\sin\theta+mgd\sin\theta$, the right side being $4\cdot\tfrac{\sqrt3}{2}\cdot\tfrac12-\tfrac32\cdot2\cdot\tfrac{\sqrt3}{2}+\tfrac{\sqrt3}{2}=\sqrt3-\tfrac{3\sqrt3}{2}+\tfrac{\sqrt3}{2}=0$; hence this is a heavy-top trajectory. [given, L3, L4, algebra]

2.1 The reduction clauses at this trajectory: $\varphi'=\tfrac{a-b\cos\theta}{A\sin^2\theta}=\tfrac{\frac94-\frac34}{\frac34}=2$ and $\psi'=\tfrac{b}{C}-\tfrac{(a-b\cos\theta)\cos\theta}{A\sin^2\theta}=\tfrac32-\tfrac{\frac32\cdot\frac12}{\frac34}=\tfrac12$, recovering the chosen rates; and $U'(\theta)=\varphi'\sin\theta(b-A\varphi'\cos\theta)-mgd\sin\theta=2\cdot\tfrac{\sqrt3}{2}\cdot(\tfrac32-1)-\tfrac{\sqrt3}{2}=0$, consistent with the constant $\theta$. The reduced energy evaluates to $\tfrac12A\theta'^2+\tfrac{(a-b\cos\theta)^2}{2A\sin^2\theta}+\tfrac{b^2}{2C}+mgd\cos\theta=0+\tfrac{9/4}{3/2}+\tfrac{9/8}+\tfrac12=\tfrac32+\tfrac98+\tfrac12=\tfrac{25}{8}$, and directly as $\tfrac12A\varphi'^2\sin^2\theta+\tfrac12C(\psi'+\varphi'\cos\theta)^2+mgd\cos\theta=\tfrac12\cdot4\cdot\tfrac34+\tfrac12\cdot\tfrac94+\tfrac12=\tfrac32+\tfrac98+\tfrac12=\tfrac{25}{8}$; both agree, as the reduction theorem requires. [step 1.3, given, L3, L5, algebra] ∎
