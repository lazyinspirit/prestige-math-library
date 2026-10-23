---
id: lem-fd-cauchy-contact
kind: lemma
title: Linear traction from shrinking local contact balance
status: published
origin: pipeline
proof_strategy: direct
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-smooth-motion
  - def-countable-choice
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-surface-integral-is-independent-of-c-one-boundary-charts
dependency_roles:
  def-fd-smooth-motion: mathematical-premise
  def-countable-choice: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-surface-integral-is-independent-of-c-one-boundary-charts: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mechanics of Solids"
      url: "https://pamies.cee.illinois.edu/assets/pdf/Mechanics_of_Solids.pdf"
      locator: "§§3.3.1–3.3.4, printed pp. 38–41."
    - title: "A Short Course on Nonlinear Continuum Mechanics"
      url: "https://users.ices.utexas.edu/~arbogast/cam397/oden0908.pdf"
      locator: "Chapter 4 §4.1, printed pp. 26–27."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
physical_scope: null
empirical_premises: []
---

## Statement

Assume the axiom of countable choice: every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets has a selector $f$ with $f(n)\in X_n$. Let $I\subset\mathbb R$ be a nonempty open interval containing $0$, let $B\subset\mathbb R^3$ be a nonempty bounded open set with $C^1$ boundary, and let $U\subseteq\mathbb R^3$ be open with $\overline B\subset U$. Let $\chi\in C^2(I\times U;\mathbb R^3)$ have slices $\chi_t:U\to\chi_t(U)$ that are bijections with $C^2$ inverses and $\det D_a\chi(t,a)>0$ for all $a\in U$. Write $\Omega_t=\chi_t(B)$ and $\mathcal Q=\{(s,y):s\in I,\ y\in\Omega_s\}$, and for $(t,x)\in\mathcal Q$ define $A(t,x)=\chi_t^{-1}(x)$, $u(t,x)=\partial_t\chi(t,A(t,x))$, and $D_tf=\partial_tf+(D_xf)u$; define the material acceleration $a_m:=D_tu$. At a fixed $(t,x)\in\mathcal Q$, let $\rho:\mathcal Q\to(0,\infty)$ and $b:\mathcal Q\to\mathbb R^3$ be continuously differentiable nearby. Let $\tau:\mathcal Q\times S^2\to\mathbb R^3$ be a contact traction indexed by the point $y$ and outward unit normal $n\in S^2$. In SI units, spatial and reference coordinates are measured in metres, $t$ in seconds, $\rho$ in $\mathrm{kg\,m^{-3}}$, $b$ and $a_m$ in $\mathrm{m\,s^{-2}}$, and $\tau$ in pascals, so both terms in the assumed resultant balance have units of newtons. Assume $\tau$ depends on a contact surface only through $(t,y,n)$, is continuous in $(y,n)$, and is uniformly bounded near $(t,x)$ for $n\in S^2$.

For every nonempty bounded open $C^1$ subdomain $P$ whose closure is a compact subset of $\Omega_t$, meaning that its boundary is locally a $C^1$ graph and $P$ lies locally on one side, suppose the local force balance
$$\int_{\partial P}\tau(t,y,\nu_P(y))\,dS_y+\int_P\rho(t,y)\bigl(b(t,y)-a_m(t,y)\bigr)\,dy=0$$
holds, where $\nu_P$ is the outward unit normal and $dS$ is Euclidean surface measure defined in regular charts by the Gram density $\sqrt{\det(DX^TDX)}$. Then there is a unique matrix $\sigma(t,x)\in\mathbb R^{3\times3}$ such that $\tau(t,x,n)=\sigma(t,x)n$ for every $n\in S^2$. This conclusion assumes ordinary surface traction with no surface couples or curvature-dependent singular forces.

## Statement references

[[def-fd-smooth-motion]]

[[def-countable-choice]]

[[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]

[[def-surface-integral-on-a-compact-c-one-hypersurface]]

[Pamies, *Mechanics of Solids*, §§3.3.1–3.3.4](https://pamies.cee.illinois.edu/assets/pdf/Mechanics_of_Solids.pdf).

[Oden, *A Short Course on Nonlinear Continuum Mechanics*, Chapter 4 §4.1](https://users.ices.utexas.edu/~arbogast/cam397/oden0908.pdf).

## Facts & Assumptions

**Given:** Assume countable choice, the stated $C^2$ motion and Eulerian acceleration, continuous locally bounded orientation-only traction, and the local force balance for every nonempty bounded $C^1$ subdomain.

[L1] [[def-fd-smooth-motion]]: $C^r$ means all coordinate partial derivatives through total order $r$ exist and are continuous. The definition requires $I$ nonempty open containing $0$, a nonempty bounded open reference region $B$ with $C^1$ boundary, open $U$ with $\overline B\subset U$, and $\chi\in C^2(I\times U;\mathbb R^3)$ whose slices are bijections with $C^2$ inverses and positive Jacobian. It gives the inverse label $A$, Eulerian velocity $u=\partial_t\chi(t,A)$, and $D_t f=\partial_tf+(D_xf)u$. In particular $u\in C^1$, so this item's explicit definition $a_m:=D_tu$ is well-defined and continuous.

[F1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ asserts that each countable sequence of nonempty sets has a choice function.

[F2] [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]: a bounded $C^1$ domain is a nonempty bounded open set locally on one side of each $C^1$ boundary graph; the outward normal is the graph normal transported by the rigid chart.

[F3] [[def-surface-integral-on-a-compact-c-one-hypersurface]]: surface integrals use regular charts with area density $\sqrt{\det(DX^TDX)}$; the chart formula also defines integrals on compact Borel faces.

[F4] [[lem-surface-integral-is-independent-of-c-one-boundary-charts]]: under $\mathrm{AC}_\omega$, the chart integral defines a finite surface measure independent of the finite regular charts and subordinate partitions; the graph density is $\sqrt{1+|Dh|^2}$ and the outward normal agrees on chart overlaps.

[A1] Orientation locality, continuity, and uniform local boundedness of $\tau$ are hypotheses, not consequences of force balance.

[A2] The integral force balance is assumed for every nonempty bounded $C^1$ subdomain with closure compactly contained in $\Omega_t$; it is not proved from a physical postulate here.

## Proof

1.1 Fix $(t,x,n)$. Since $x\in\Omega_t$ and $\Omega_t$ is open, choose a ball about $x$ contained in $\Omega_t$; for sufficiently small $h$ it contains the pillboxes with $0<\varepsilon\le1$. Choose a square $A_h$ of side $h$ in the plane through $x$ perpendicular to $n$ and let $K$ be the closed square prism of thickness $\varepsilon h$ around it. Round this prism, or any tetrahedron constructed below, by taking the open distance-$\eta$ parallel body of the sharp convex polytope, with $\eta=\delta h$. Its boundary consists of face-parallel pieces and circular edge and spherical vertex pieces that meet tangentially, hence is $C^1$. At fixed shape and $h$, each face-parallel area tends to the original face area as $\delta\downarrow0$; the total area of the edge pieces is $O(\delta h^2)$ and of vertex pieces is $O(\delta^2h^2)$. The added volume is contained in prisms of thickness $O(\delta h)$ along faces, cylinders of radius $O(\delta h)$ along edges, and balls of radius $O(\delta h)$ at vertices, so it is $O(\delta h^3)$. Choose $h$ and then $\delta$ small enough that the rounded domains have closure in the chosen ball; they are admissible in the balance hypothesis. On face-parallel pieces the normals are the original face normals and the traction integrands converge uniformly by continuity in $y$; the bounded traction times the vanishing curved-piece area tends to zero. The bounded body-force integrand times the vanishing volume difference also tends to zero. The finite, chart-independent surface integral from [F4] makes each face integral unambiguous. Thus the assumed balance passes to each sharp-polytope limit as $\delta\downarrow0$ at fixed $h$ (and fixed $\varepsilon$ for the pillbox). [given, L1, F1, F2, F3, F4, A1, A2]

2.1 Now let $\varepsilon\downarrow0$ at fixed $h$. The side area is $O(\varepsilon h^2)$ and the volume is $O(\varepsilon h^3)$, so their resultants vanish by local boundedness. The two caps converge to the same square with opposite outward normals, giving $\int_{A_h}(\tau(t,y,n)+\tau(t,y,-n))\,dS_y=0$. The cap measure is the finite chart-independent face measure from [F4]. Divide by $|A_h|=h^2$ and let $h\downarrow0$; continuity in $y$ yields $\tau(t,x,n)+\tau(t,x,-n)=0$. [step 1.1, given, A1, A2, F1, F3, F4]

3.1 First take $n\in S^2$ with all coordinates nonzero. For $i=1,2,3$ put $v_i=x+(h/n_i)e_i$, and take the tetrahedron with vertices $x,v_1,v_2,v_3$. Its oblique face lies in $n\cdot(y-x)=h$ and has outward normal $n$ because the tetrahedron lies on the side $n\cdot(y-x)\le h$. Its diameter is $O(h)$ and its oblique face area $A$ satisfies $A\asymp h^2$ for this fixed $n$. The other face opposite $v_i$ has outward normal $-\operatorname{sgn}(n_i)e_i$; orthogonal projection of the oblique face onto that coordinate plane is exactly this face, so its area is $|n_i|A$. Equivalently the oriented area vector of the oblique face is $An$, whose $i$th component is its signed projected area. Round this tetrahedron by the construction in step 1.1 and pass to the sharp limit. Divide the balance by $A$ and let $h\downarrow0$: the bounded volume resultant is $O(h^3)/A\to0$, while continuity makes the mean traction on each face converge to its value at $x$. The face integrals are well-defined by [F3,F4]. Hence $\tau(t,x,n)+\sum_{i=1}^3|n_i|\tau(t,x,-\operatorname{sgn}(n_i)e_i)=0$. Using step 2.1 gives $\tau(t,x,n)=\sum_i n_i\tau(t,x,e_i)$. [step 1.1, step 2.1, given, L1, A1, A2, F1, F3, F4]

4.1 If a coordinate of $n$ is zero, approximate $n$ by unit vectors with nonzero coordinates and use continuity in $n$ to retain the same formula. Define the $i$th column of $\sigma(t,x)$ to be $\tau(t,x,e_i)$. Then the formula gives $\tau(t,x,n)=\sigma(t,x)n$ for every unit $n$, and these three column values force uniqueness. [step 3.1, given, A1] ∎

## Geometry diagram

The sketch shows the vertex $x$, the oblique face $F$ with area $A$ and normal $n$, and the three coordinate faces. It is a schematic projection; the proof derives their areas from the oriented area vector and does not use the drawing as a deduction.

```tikz
\begin{tikzpicture}[scale=0.9, line join=round, line cap=round]
  \coordinate (x) at (0,0);
  \coordinate (a) at (3.1,0.2);
  \coordinate (b) at (2.0,1.8);
  \coordinate (c) at (0.6,1.4);
  \draw[thick] (x)--(a)--(b)--cycle;
  \draw[thick] (a)--(c)--(b);
  \draw[dashed] (x)--(c);
  \node[below left] at (x) {$x$};
  \node[below] at (1.7,0.55) {$F_1$};
  \node[right] at (1.1,1.0) {$F_2$};
  \node[left] at (0.9,0.45) {$F_3$};
  \node[above] at (2.05,1.4) {$F,\,A$};
  \draw[->,thick] (2.1,1.4)--(2.75,2.2) node[above right] {$n$};
  \draw[->] (0.3,-0.35)--(1.0,-0.35) node[right] {$e_1$};
  \draw[->] (0.3,-0.35)--(0.3,0.35) node[above] {$e_3$};
\end{tikzpicture}
```
