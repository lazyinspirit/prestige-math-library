---
title: Independent generalized reflected-ray and GCC convention
status: published
research_item: prop-se-generalized-ray-contract
dependency_level: 0
sources:
  references:
    - title: Geometric control condition for the wave equation with a time-dependent
        observation domain
      url: https://arxiv.org/pdf/1607.01527v2
      locator: Section 1.3.1, Definitions 1.3–1.4 and Proposition 1.5, PDF pp. 6–9;
        Section 1.3.2, Definition 1.6, PDF p. 9
      statement: Definition 1.3 uses a differentiable characteristic map on $\mathbb
        R\setminus B$, with isolated reflection parameters in $B$, Hamilton
        evolution in the interior and at diffractive points, tangential Hamilton
        evolution at other glancing points, and the specified two-sided
        hyperbolic reflection limits. Definition 1.4 extends its compressed
        image continuously to all real parameters; its spatial projection uses
        physical time and unit speed. Definition 1.6 quantifies over complete
        compressed bicharacteristics and requires a meeting with the observation
        set at a physical time in $(0,T)$.
      hypotheses: Smooth boundary and the stationary wave symbol in normal
        coordinates. The source works on a compact Riemannian manifold with
        boundary. Its local rules and complete-curve/GCC conventions are
        specialized here to Euclidean boundary charts; no global exterior
        existence, continuation, uniqueness or propagation theorem,
        observability theorem, or no-infinite-order-contact hypothesis is
        imported.
      reading_limits: Read Section 1.3.1 through Definition 1.6 in the arXiv v2 HTML
        and the PDF text served at https://arxiv.org/pdf/1607.01527 (whose front
        page identifies v2), including Definitions 1.3–1.4 and the qualification
        in Proposition 1.5. The versioned PDF endpoint was unavailable. The
        original Melrose–Sjöstrand papers and any global exterior existence,
        continuation, uniqueness or propagation theorem were not read.
    - title: On nonlinear Schrödinger equations in exterior domains
      url: https://www.numdam.org/article/AIHPC_2004__21_3_295_0.pdf
      locator: Introduction, printed pp. 295–296, opening paragraph
      statement: For a smooth compact obstacle in Euclidean dimension at least two,
        non-trapping means that every reflected geometric-optics ray,
        equivalently every generalized bicharacteristic in the boundary
        cotangent setting, leaves every compact set in finite time.
      hypotheses: A smooth compact obstacle in Euclidean space of dimension at least
        two, with its exterior. This is a geometric convention; the cited
        passage does not supply a common escape time or a global uniqueness
        theorem.
      reading_limits: Read the opening paragraph in the online published PDF text on
        printed pp. 295–296. The Melrose–Sjöstrand references cited there were
        not read.
external_input: true
---

## Prerequisites

- [math:def-bounded-c-k-domain-and-boundary-charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts)
- [math:def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union](https://alphabetamath.cc/item/def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union)
- [` Geometric control condition for the wave equation with a time-dependent observation domain · Section 1.3.1, Definitions 1.3–1.4 and Proposition 1.5, PDF pp. 6–9; Section 1.3.2, Definition 1.6, PDF p. 9 `](https://arxiv.org/pdf/1607.01527v2)
- [` On nonlinear Schrödinger equations in exterior domains · Introduction, printed pp. 295–296, opening paragraph `](https://www.numdam.org/article/AIHPC_2004__21_3_295_0.pdf)


## Statement

Let $D\subset\mathbb R^d$, $d\ge2$, have smooth boundary. A cotangent vector is a linear functional on the tangent space; cotangent vectors over all points form the cotangent bundle. On spacetime $Y=\mathbb R_t\times\overline D$, use the wave symbol $p(t,x,\tau,\xi)=-\tau^2+|\xi|^2$ and its nonzero characteristic covectors, meaning $p=0$ and $(\tau,\xi)\ne0$. In local boundary normal coordinates $y=(y',y_n)$, where $y_n>0$ is the domain side and $y'$ includes time, write $p=\eta_n^2+r(y,\eta')$ and $r_0=r|_{y_n=0}$. The compression map is $j(y;\eta)=(y;\eta',y_n\eta_n)$, with the natural compressed-bundle topology. At the boundary it identifies covectors having the same tangential components, including the incoming and outgoing characteristic covectors. Boundary characteristic points are hyperbolic when $r_0<0$ and glancing when $r_0=0$.

A complete generalized bicharacteristic is a differentiable characteristic curve $\gamma:\mathbb R\setminus B\to T^*Y$, with $B\subset\mathbb R$ consisting of isolated reflection parameters, obeying the rules in the External input below. Its compressed image $j\circ\gamma$ has a continuous extension $\widehat\gamma$ to all of $\mathbb R$. The spatial projection, parametrized by physical time, is a complete generalized ray $x:\mathbb R\to\overline D$ and travels at unit speed. Curves obeying the same local rules on shorter intervals are ray segments; they are not independently quantified over in GCC or non-trapping. The complete-curve convention does not assert that every locally admissible segment has a complete extension.

For a time-independent open observation region $\omega\subset\overline D$ and $T>0$, $(\omega,T)$ satisfies the geometric control condition (GCC) when every complete generalized ray $x:\mathbb R\to\overline D$ has $x(t)\in\omega$ for some $t\in(0,T)$. GCC means that such a common $T$ exists. All complete admissible rays are quantified over; uniqueness at infinite-order contact is not asserted.

For a smooth compact obstacle $\Theta\subset\mathbb R^d$, its exterior is non-trapping when every complete generalized ray $x:\mathbb R\to\overline{\mathbb R^d\setminus\Theta}$ leaves every compact set in finite forward time, starting at $t=0$. This is a pointwise condition on complete rays, with no common escape time asserted here.

## External input

In the above boundary coordinates put $r_1=\partial_{y_n}r|_{y_n=0}$ and, for a function $f$ of canonical coordinates, $H_f=\sum_j(\partial_{\eta_j}f\,\partial_{y_j}-\partial_{y_j}f\,\partial_{\eta_j})$. On boundary tangential variables, $H_{r_0}$ uses the same formula with only tangential coordinates and momenta. Put $G^2=G$, the glancing set. For $k\ge0$, $G^{k+2}$ consists of glancing points where $H_{r_0}^j r_1=0$ for $0\le j<k$, and $G^\infty=\bigcap_{k\ge0}G^{k+2}$. For each integer $\ell\ge1$, the diffractive part of $G^{2\ell}\setminus G^{2\ell+1}$ is the subset where $H_{r_0}^{2\ell-2}r_1<0$; let $G_d$ be the union of these subsets.

The parameter domain is $\mathbb R\setminus B$, where every $s_0\in B$ is isolated in $B$; no reflection parameter is an endpoint of the complete curve. For $s\notin B$, $\gamma(s)$ is either an interior nonzero characteristic covector or a glancing characteristic covector, and $\gamma$ is differentiable there. It follows $H_p$ in the interior and at $G_d$, and $H_{r_0}$ at $G\setminus G_d$. For each $s_0\in B$ there is $\delta>0$ such that $\gamma(s)$ is interior for $s\in(s_0-\delta,s_0)\cup(s_0,s_0+\delta)$. The limits $\rho^\pm=\lim_{s\to s_0^\pm}\gamma(s)$ exist at the boundary, have the same base point and tangential covector, and have opposite nonzero normal covectors. Set $\widehat\gamma(s)=j(\gamma(s))$ for $s\notin B$ and $\widehat\gamma(s_0)=j(\rho^-)=j(\rho^+)$ for $s_0\in B$; the compressed curve $\widehat\gamma$ is continuous on $\mathbb R$.

The physical-time and spatial coordinates are thus defined also at reflections. The cited construction parametrizes the projected ray by physical time on all of $\mathbb R$, at unit speed. These rules include infinite-order glancing points; they do not assert that a point there determines a unique global curve. The boundaryless convention likewise uses complete unit-speed projected geodesics, without reflection.

The non-trapping convention in the Statement is the independent compact-obstacle convention of Burq, Gérard and Tzvetkov. The ray and GCC conventions are the local Euclidean specialization of the definitions of Le Rousseau, Lebeau, Terpolilli and Trélat. No observability theorem, global exterior existence or continuation theorem, or exterior propagation theorem is asserted by these definitions.

## Facts & Assumptions

The boundary-chart supplier fixes the smooth one-sided local graph convention; normal coordinates and compressed rays are supplied by the cited external construction. The bounded-domain supplier is used for that local chart convention, not to assert that an exterior domain is bounded.

The cotangent-bundle supplier identifies each cotangent space as the dual of its tangent space and the bundle as their disjoint union. The compressed bundle and its topology are additional imported structures.
