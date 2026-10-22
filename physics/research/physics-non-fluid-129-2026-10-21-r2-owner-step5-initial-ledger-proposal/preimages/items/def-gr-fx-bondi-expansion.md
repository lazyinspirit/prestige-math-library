---
id: def-gr-fx-bondi-expansion
kind: definition
title: "A smooth vacuum Bondi expansion"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
physical_scope: "Formal smooth asymptotically flat vacuum Bondi data at a null end; no global vacuum existence, exact finite-radius waveform, empirical claim, or conclusion about nature is asserted."
deps:
  - def-gr-fx-null-screen-geometry
  - def-gr-wave-screen-and-tt-projection
  - def-gr-curvature-tensor-and-derived-tensors
  - def-countable-choice
dependency_roles:
  def-gr-fx-null-screen-geometry: mathematical-premise
  def-gr-wave-screen-and-tt-projection: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-countable-choice: mathematical-premise
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Thomas Mädler and Jeffrey Winicour, Bondi-Sachs Formalism, arXiv:1609.01731 (2016), full 31-page PDF: §2, Eqs. (3)-(5), and §3, Eqs. (33)-(45)"
      url: "https://arxiv.org/pdf/1609.01731"
    - title: "Andrew Strominger, Lectures on the Infrared Structure of Gravity and Gauge Theory, Princeton University Press (2018), full lecture notes arXiv:1703.05448: §5.1, Eqs. (5.1.1)-(5.1.5)"
      url: "https://arxiv.org/pdf/1703.05448"
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice for the smooth Lorentzian tangent-bundle conventions of the suppliers. Let $I\subseteq\mathbb R$ be a nonempty open interval, $r_0>0$, and $\mathcal E=I\times(r_0,\infty)\times S^2$, where $S^2=\{x\in\mathbb R^3:|x|=1\}$ has its unit round metric $q_{AB}$ and area form $d\Omega$. Let $D_A$ be the Levi-Civita covariant derivative of $q$, and raise angular indices with $q^{AB}$. A **Bondi-Sachs end** is a smooth Lorentzian metric on $\mathcal E$ written in coordinates $(u,r,x^A)$, $A,B=1,2$, as

$$g=-\left(e^{2\beta}\frac Vr-r^2\gamma_{AB}U^AU^B\right)du^2-2e^{2\beta}du\,dr-2r^2\gamma_{AB}U^Bdu\,dx^A+r^2\gamma_{AB}dx^A dx^B,$$

where $\beta,V,U^A,\gamma_{AB}$ are smooth, $\gamma_{AB}$ is positive definite, $\gamma^{AC}\gamma_{CB}=\delta^A_B$, and $\det(\gamma_{AB})=\det(q_{AB})$. Thus $u=\mathrm{constant}$ are outgoing null hypersurfaces, $r$ is the area radius, and $x^A$ are constant along their null generators. This Bondi gauge has $g_{rr}=g_{rA}=0$.

A **smooth Bondi expansion** is such an end with the differentiated uniform expansions

$$\gamma_{AB}=q_{AB}+\frac{C_{AB}(u,x)}r+\frac{P_{AB}(u,x)}{r^2}+O(r^{-3}),\qquad \beta=O(r^{-2}),\qquad U^A=\frac{U^A_{(2)}(u,x)}{r^2}+\frac{U^A_{(3)}(u,x)}{r^3}+O(r^{-4}),\qquad V=r-2m(u,x)+\frac{V_{(1)}(u,x)}r+O(r^{-2}).$$

Here $C_{AB}$, $P_{AB}$ and the displayed coefficients are smooth sphere fields on $I$; the determinant gauge imposes $q^{AB}C_{AB}=0$ and $q^{AB}P_{AB}=\tfrac12 C_{AB}C^{AB}$. For every compact $I'\subset I$, angular chart compact set, and derivative multi-index $\alpha$ of total order at most two, the partial derivatives of each $O(r^{-k})$ remainder obey $\partial_u^{\alpha_u}D^{\alpha_x}\partial_r^{\alpha_r}O(r^{-k})=O(r^{-k-\alpha_r})$ uniformly as $r\to\infty$. Define the **mass aspect** by $m(u,x):=-\tfrac12\lim_{r\to\infty}(V(u,r,x)-r)$, the **Bondi shear** by $C_{AB}=\lim_{r\to\infty}r(\gamma_{AB}-q_{AB})$, the **Bondi news** by $N_{AB}:=\partial_u C_{AB}$, and the **geometric Bondi mass** by $m_B(u):=\frac1{4\pi}\int_{S^2}m(u,x)\,d\Omega$. The future null boundary used here is the formal $r\to\infty$ boundary $\mathcal I^+=I\times S^2$ with coordinates $(u,x^A)$; no conformal completion is included in this definition.

A **vacuum Bondi expansion** is a smooth Bondi expansion whose Ricci tensor vanishes identically on the supplied end: $\operatorname{Ric}_g(p)=0$ for every $p\in\mathcal E$. Equivalently, $\operatorname{Ric}_{ab}(u,r,x)=0$ for every pair $a,b\in\{u,r,1,2\}$ at every point of every Bondi coordinate chart, with no cosmological term. The curvature convention is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$, and $\operatorname{Ric}_{bd}=R^a{}_{bad}$. This is a condition on the supplied metric, not an assertion of existence for prescribed boundary coefficients. Imposing only finitely many asymptotic coefficient equations does not assert membership in this vacuum subclass; formal boundary-data examples must state separately which equations they impose.

## Definition references

[[def-gr-fx-null-screen-geometry]]

[[def-gr-wave-screen-and-tt-projection]]

[[def-gr-curvature-tensor-and-derived-tensors]]

[[def-countable-choice]]

## Conventions and scope

The round metric $q$ and its area form are dimensionless. The formulas use geometric coordinates in which $x^0=ct$ and $u=ct_{\mathrm{ret}}$ have dimensions of length. In the SI reading, $r,C_{AB},m,m_B$ have length units, $P_{AB}$ has length-squared units, and $N_{AB}$ is dimensionless. The geometric energy is $E_B=(c^4/G_N)m_B$, with Newton's constant $G_N$; this is a unit conversion, not a claim that any observed system obeys the model.

More explicitly, $r_0$ is a positive length; $\beta$ is a dimensionless scalar on $\mathcal E$; and $\gamma_{AB}(u,r,x)$ is a dimensionless positive-definite covariant two-tensor on each angular tangent plane, with inverse $\gamma^{AB}$ also dimensionless. $U^A$ is a smooth angular vector field of dimension $\mathrm{length}^{-1}$, so its expansion coefficients $U^A_{(2)}$ and $U^A_{(3)}$ have dimensions of length and length-squared, respectively. $V$ is a length-valued scalar and $V_{(1)}$ is a length-squared scalar coefficient. The mass aspect $m$ and the shear coefficient $C_{AB}$ are length-valued sphere fields; $P_{AB}$ and $V_{(1)}$ are length-squared sphere fields; $N_{AB}$ remains dimensionless. The constants $c$ and $G_N$ are respectively the speed of light, with SI dimensions $\mathrm{length}/\mathrm{time}$, and Newton's gravitational constant, with SI dimensions $\mathrm{length}^3/(\mathrm{mass}\,\mathrm{time}^2)$. Thus $(c^4/G_N)m_B$ has energy dimensions. If geometric units set $c$ or $G_N$ numerically to $1$, their unit conversion is suppressed, not their dimensional role.

The expansion and its differentiated remainders are explicit hypotheses. No theorem here says that arbitrary asymptotically Euclidean initial data admit a smooth null infinity or this expansion. Logarithmic/polyhomogeneous terms are outside the stated class. A finite-radius transverse-traceless waveform is not identified with $N_{AB}$ by this definition; the screen and TT terminology is exactly that of [[def-gr-wave-screen-and-tt-projection]], while any detector comparison requires the separate leading large-radius approximation stated in [[prop-gr-fx-memory-integral]].

The cylinder below represents only the formal boundary $\mathcal I^+=I\times S^2$. The ellipses denote full spherical cuts, vertical curves fix an angular point $x^A$, and the arrow points toward increasing retarded length $u$. It asserts no global compactification or field equation.

```tikz
\begin{tikzpicture}[>=stealth,scale=1]
  \draw[thick] (0,0) ellipse (0.8 and 0.3);
  \draw[thick] (0,2.8) ellipse (0.8 and 0.3);
  \draw[thick] (-0.8,0) -- (-0.8,2.8);
  \draw[thick] (0.8,0) -- (0.8,2.8);
  \draw[->,very thick] (0,0.45) -- (0,2.35) node[midway,right] {$\partial_u$};
  \node[left] at (-0.9,0) {$u_1$ cut};
  \node[left] at (-0.9,2.8) {$u_2$ cut};
  \node[above] at (0,3.25) {$\mathcal I^+=I\times S^2$};
  \node[right] at (0.9,1.45) {fixed $x^A$};
  \node[below] at (0,-0.4) {$u$ increases upward};
\end{tikzpicture}
```
