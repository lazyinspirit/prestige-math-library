---
id: ex-emx-impedance-sign-check
kind: example
title: "Positive admittance removes energy"
status: published
origin: pipeline
domain: physics
dependency_level: 2
proof_strategy: direct
deps:
  - def-emx-finite-energy-boundary-model
  - pthm-emx-weak-poynting-uniqueness
  - def-cross-product-in-r3
  - def-euclidean-inner-product
dependency_roles:
  def-emx-finite-energy-boundary-model: formulation-prerequisite
  pthm-emx-weak-poynting-uniqueness: physical-result
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
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
physical_scope: "A local sign check for the impedance boundary condition in the finite-energy model, using an orthonormal tangent basis on a flat face. It records outward power and the corresponding sign of the energy balance; it is not an outgoing-wave model or an experiment."
sources:
  references:
    - title: "Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS lecture notes, 176 pp."
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "Section 8.2, printed pp. 8.1-8.2 (PDF pp. 87-88), equations (8.3)-(8.9): the Poynting vector is outward energy-flux density and its sign in the fixed-volume balance."
    - title: "Long Chen, Variational Formulation of Maxwell Equations, University of California, Irvine lecture note, updated May 12 2024, 8 pp."
      url: "https://www.math.uci.edu/~chenlong/226/Maxwellweakform.pdf"
      locator: "Section 2, PDF p. 3: n cross H minus lambda E_t equals g, with no sign or positivity convention for lambda supplied there. The Source convention section below explicitly converts its homogeneous relation to this example's adopted law by lambda=-Y."
---

## Example

Use the boundary geometry of the preceding finite-energy model, with $\Gamma=\partial\Omega$. On a flat boundary face with outward normal $n=e_z$, take a right-handed tangent basis $e_x,e_y$, with $e_z\times e_x=e_y$, and prescribe tangential boundary data $E_\tau=E_0e_x$ for $E_0\in\mathbb R$. For surface admittance $Y\ge0$, the boundary condition $H_\tau=Y(n\times E_\tau)$ gives $H_\tau=YE_0e_y$ and outward power

$$n\cdot(E_\tau\times H_\tau)=YE_0^2\ge0.$$

If the sign in the boundary law is reversed, $H_\tau=-Y(n\times E_\tau)$, the outward power is $-YE_0^2$; it is strictly inward when $YE_0^2>0$.

For the conditional energy consequence, suppose an actual finite-energy model solution exists on a nonempty open interval $I$ and bounded Lipschitz polyhedron $\Omega$: $E,H\in C^1(I;L^2(\Omega;\mathbb R^3))\cap C(I;H(\operatorname{curl};\Omega))$, $J\in C(I;L^2(\Omega;\mathbb R^3))$, the two evolution equations of the preceding boundary model hold as $L^2$ identities, and tangential boundary fields $E_\tau,H_\tau\in L^2(\Gamma\times I;\mathbb R^3)$ satisfy its Green compatibility identity. Take $Y\in L^\infty(\Gamma)$, $Y\ge0$, as in that model. If the reversed law $H_\tau=-Y(n\times E_\tau)$ holds almost everywhere on all of $\Gamma\times I$, then the model energy $W(t)=\tfrac12\int_\Omega(E\cdot\varepsilon E+H\cdot\mu H)\,d\lambda_3$ obeys

$$W(t)-W(s)=-\int_s^t\int_\Omega E\cdot J\,d\lambda_3\,dr+\int_s^t\int_\Gamma Y|E_\tau|^2\,dS\,dr\qquad(s<t).$$

In particular, if $J=0$ and the last integral is positive, the stored energy increases. This conclusion is conditional on existence of a solution satisfying the reversed law.

## Statement references

[[def-emx-finite-energy-boundary-model]]

[[pthm-emx-weak-poynting-uniqueness]]

## Source convention

Chen's boundary relation is $n\times H-\lambda E_t=g$. Here $E_t$ denotes the tangential electric component, identified with $E_\tau$, and $g$ is prescribed tangential boundary data. For comparison with the homogeneous law of this example, set $g=0$ and use $H_\tau=Y(n\times E_\tau)$. Since $|n|=1$ and $n\cdot E_\tau=0$, the right-handed cross product gives $n\times H_\tau=Y n\times(n\times E_\tau)=-YE_\tau$. Thus our law corresponds to Chen's homogeneous relation with $\lambda=-Y$. This is a conversion of conventions; the cited passage does not stipulate a sign for $\lambda$ or supply a passivity claim.

## Diagram

The drawing is a projection of the tangent plane: $e_z$ points out of the page, and the right-handed convention is $e_x\times e_y=e_z$. The arrows depict the representative case $E_0>0$ and $Y>0$. If $E_0<0$ while $Y>0$, both tangential arrows reverse; if $E_0=0$, both vectors vanish; and if $Y=0$, $H_\tau$ vanishes. The verification below supplies the sign calculation.

~~~tikz
\begin{tikzpicture}[>=stealth,scale=1.1]
  \draw[->] (-0.2,0) -- (2.8,0) node[below] {$e_x$};
  \draw[->] (0,-0.2) -- (0,2.5) node[left] {$e_y$};
  \draw[->,thick,blue] (0,0) -- (1.7,0) node[below=4pt] {$E_\tau=E_0e_x$};
  \draw[->,thick,red] (0,0) -- (0,1.7) node[left=4pt] {$H_\tau=YE_0e_y$};
  \node at (2.2,1.4) {$n=e_z\ \odot$};
\end{tikzpicture}
~~~

## Facts & Assumptions

**Given:** The impedance boundary law, $n=e_z$, $E_\tau=E_0e_x$, an amplitude $E_0$ in $\mathrm{V\,m^{-1}}$, and an admittance $Y\ge0$ in siemens. The outward power density is measured in $\mathrm{W\,m^{-2}}$.

[A1] For the conditional energy conclusion only, the finite-energy model solution class has $E,H\in C^1(I;L^2(\Omega;\mathbb R^3))\cap C(I;H(\operatorname{curl};\Omega))$, $J\in C(I;L^2(\Omega;\mathbb R^3))$, the displayed evolution equations as $L^2$ identities, and a tangential $L^2(\Gamma\times I)$ pair satisfying the Green compatibility identity in the model definition. The reversed boundary law is an additional assumption on all of $\Gamma\times I$; it is not part of the model's original nonnegative-admittance branch. [[def-emx-finite-energy-boundary-model]]

[F1] In the impedance branch, $H_\tau=Y(n\times E_\tau)$, and the outward boundary power is the scalar $n\cdot(E_\tau\times H_\tau)$. [[def-emx-finite-energy-boundary-model]]

[F2] For an admissible impedance solution, the energy identity includes the boundary term $-\int_{\partial\Omega}Y|E_\tau|^2\,dS$ in the change of field energy. [[pthm-emx-weak-poynting-uniqueness]]

[F3] The cross product is the bilinear right-handed coordinate product of [[def-cross-product-in-r3]]. For a unit normal $n$ and tangential vector $e$ with $e\cdot n=0$, substituting that coordinate formula gives $n\cdot(e\times(n\times e))=|n|^2|e|^2-(e\cdot n)^2=|e|^2$; in the displayed tangent basis, $e_z\times e_x=e_y$ and $e_x\times e_y=e_z$. The dot product and norm are those of [[def-euclidean-inner-product]].

## Verification

**Given:** The values and conventions of the Example.

1.1 Apply the impedance law [F1]: $H_\tau=Y(e_z\times E_0e_x)=YE_0e_y$ by $e_z\times e_x=e_y$ from [F3]. [given, F1, F3, algebra]

2.1 Using bilinearity and $e_x\times e_y=e_z$ from [F3], $ n\cdot(E_\tau\times H_\tau)=e_z\cdot\bigl(E_0e_x\times YE_0e_y\bigr)=YE_0^2, $ which is nonnegative because $Y\ge0$ and $E_0^2\ge0$. Replacing the boundary law by its negative changes $H_\tau$ to $-YE_0e_y$, so the same calculation gives $-YE_0^2$, strictly negative when $YE_0^2>0$. [step 1.1, F3, given, algebra]

3.1 For the conditional solution in [A1], differentiate the bounded symmetric quadratic form $W$ in the real $L^2$ norm and substitute the evolution equations. For almost every $t$, this gives $W'(t)=(\operatorname{curl}H,E)_{L^2}-(J,E)_{L^2}-(H,\operatorname{curl}E)_{L^2}$. The Green compatibility identity then yields $W'(t)=-(J,E)_{L^2}-\int_\Gamma n\cdot(E_\tau\times H_\tau)\,dS$. Under the reversed law, [F3] gives $n\cdot(E_\tau\times H_\tau)=-Y|E_\tau|^2$, so integration in time gives the stated positive boundary term. For the original law the same calculation agrees with [F2]. The boundary sign conclusion uses the Green identity and assumes an admissible solution; the example itself asserts no solution existence. [A1, F2, F3, step 2.1, algebra] ∎

