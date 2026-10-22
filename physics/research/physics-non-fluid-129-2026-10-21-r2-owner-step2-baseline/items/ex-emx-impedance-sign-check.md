---
id: ex-emx-impedance-sign-check
kind: example
title: "Positive admittance removes energy"
status: draft
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
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A local sign check for the impedance boundary condition in the finite-energy model, using an orthonormal tangent basis on a flat face. It records outward power and the corresponding sign of the energy balance; it is not an outgoing-wave model or an experiment."
sources:
  references:
    - title: "Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS lecture notes, 176 pp."
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "Section 8.2, printed pp. 8.1-8.2 (PDF pp. 86-87), equations (8.3)-(8.9): the Poynting vector is outward energy-flux density and its sign in the fixed-volume balance."
    - title: "Long Chen, Variational Formulation of Maxwell Equations, University of California, Irvine lecture note, updated May 12 2024, 8 pp."
      url: "https://www.math.uci.edu/~chenlong/226/Maxwellweakform.pdf"
      locator: "Section 2, PDF p. 3: the impedance boundary condition is written as a relation between tangential magnetic field and tangential electric field. The sign convention is converted explicitly in the local calculation."
---

## Example

On a flat boundary face with outward normal $n=e_z$, take a right-handed tangent basis $e_x,e_y$, with $e_z\times e_x=e_y$, and let $E_\tau=E_0e_x$ for $E_0\in\mathbb R$. For surface admittance $Y\ge0$, the boundary condition $H_\tau=Y(n\times E_\tau)$ gives $H_\tau=YE_0e_y$ and outward power

$$n\cdot(E_\tau\times H_\tau)=YE_0^2\ge0.$$

If the sign in the boundary law is reversed, $H_\tau=-Y(n\times E_\tau)$, the outward power is $-YE_0^2$; it is strictly inward when $YE_0^2>0$, so the same energy balance records power entering the domain.

## Statement references

[[def-emx-finite-energy-boundary-model]]

[[pthm-emx-weak-poynting-uniqueness]]

## Diagram

The drawing is a projection of the tangent plane: $e_z$ points out of the page, and the right-handed convention is $e_x\times e_y=e_z$. The diagram records the boundary vectors only; the verification below supplies the sign calculation.

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

[F1] In the impedance branch, $H_\tau=Y(n\times E_\tau)$, and the outward boundary power is the scalar $n\cdot(E_\tau\times H_\tau)$. [[def-emx-finite-energy-boundary-model]]

[F2] For an admissible impedance solution, the energy identity includes the boundary term $-\int_{\partial\Omega}Y|E_\tau|^2\,dS$ in the change of field energy. [[pthm-emx-weak-poynting-uniqueness]]

[F3] The cross product is bilinear and right-handed, so $e_z\times e_x=e_y$, $e_x\times e_y=e_z$, and $n\cdot v$ uses the Euclidean inner product. [[def-cross-product-in-r3]] [[def-euclidean-inner-product]]

## Verification

**Given:** The values and conventions of the Example.

1.1 Apply the impedance law [F1]: $H_\tau=Y(e_z\times E_0e_x)=YE_0e_y$ by $e_z\times e_x=e_y$ from [F3]. [given, F1, F3, algebra]

2.1 Using bilinearity and $e_x\times e_y=e_z$ from [F3], $ n\cdot(E_\tau\times H_\tau)=e_z\cdot\bigl(E_0e_x\times YE_0e_y\bigr)=YE_0^2, $ which is nonnegative because $Y\ge0$ and $E_0^2\ge0$. Replacing the boundary law by its negative changes $H_\tau$ to $-YE_0e_y$, so the same calculation gives $-YE_0^2$, strictly negative when $YE_0^2>0$. [step 1.1, F3, given, algebra]

3.1 By [F2], positive $YE_0^2$ enters the energy balance with a minus sign and removes energy from the domain; the reversed sign makes the outward flux negative and contributes positive energy to the domain. This is a boundary-sign calculation and uses no outgoing-wave assumption. [step 2.1, F2] ∎

