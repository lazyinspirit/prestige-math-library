---
id: thm-deck-transformations-are-hyperbolic-isometries
kind: theorem
title: "Deck transformations preserve the hyperbolic metric"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-axiom-of-choice
  - def-poincare-metric-hyperbolic-riemann-surface
  - thm-poincare-distance-formula-and-disc-automorphism-invariance
  - lem-holomorphic-structure-lifts-to-covering-surface
  - def-universal-covering-type-riemann-surface
  - def-poincare-metric-and-distance-on-the-disc
  - def-deck-transformation-and-deck-group
  - def-biholomorphic-map
  - thm-disc-automorphisms-are-rotated-blaschke-factors
  - thm-path-lifting-for-covering-maps
  - cor-injective-holomorphic-derivative-nonzero
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-piecewise-c-one-curve-on-a-manifold
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 1-15, especially Lemmas 1-5, Theorem 4, Corollary 6, and the non-Green proof"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §§2.4 and 5, printed pp. 64-68 and 115-118, Theorems 5.1-5.6"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice. Let $X$ be a connected Riemann surface of
hyperbolic universal-covering type with a uniformization $(p,\psi)$: the map
$p:\widetilde X\to X$ is its holomorphic universal covering and
$\psi:\widetilde X\to\mathbb D$ is a biholomorphism; write
$G=\operatorname{Deck}(p)$, let $ds_X$ be the Poincaré metric of $X$ with
length $\ell_X$ and distance $d_X$, and let
$ds_{\widetilde X}:=\psi^*ds_{\mathbb D}=p^*ds_X$ be the pulled-back metric on
$\widetilde X$ with its length $\ell_{\widetilde X}$ and distance
$d_{\widetilde X}$
([[def-poincare-metric-hyperbolic-riemann-surface]],
[[def-universal-covering-type-riemann-surface]]). Then:

1. every $h\in G$ is a biholomorphism of $\widetilde X$, the conjugate
   $\gamma_h:=\psi\circ h\circ\psi^{-1}$ is an automorphism of $\mathbb D$,
   and $\gamma_h^*(ds_{\mathbb D})=ds_{\mathbb D}$;
2. every $h\in G$ preserves the pulled-back metric, length and distance:
   $h^*(ds_{\widetilde X})=ds_{\widetilde X}$, one has
   $\ell_{\widetilde X}(h\circ c)=\ell_{\widetilde X}(c)$ for every piecewise
   $C^1$ curve $c$ in $\widetilde X$, and
   $d_{\widetilde X}(hz,hw)=d_{\widetilde X}(z,w)$ for all
   $z,w\in\widetilde X$; moreover
   $d_{\widetilde X}(z,w)=d_{\mathbb D}(\psi(z),\psi(w))$;
3. $p$ is a local isometry, $\ell_X(p\circ c)=\ell_{\widetilde X}(c)$ for
   every piecewise $C^1$ curve $c$ in $\widetilde X$, and for all
   $x,y\in X$ and all lifts $z\in p^{-1}(x)$, $w\in p^{-1}(y)$ one has
   $$d_X(x,y)=\inf_{h\in G}d_{\widetilde X}(z,hw);$$ that is, the quotient
   metric on $X=\widetilde X/G$ induced by the $G$-invariant metric
   $ds_{\widetilde X}$ is precisely the surface Poincaré metric of $X$.

## Facts & Assumptions
**Given:** The Axiom of Choice; a connected Riemann surface $X$ of hyperbolic
universal-covering type with holomorphic universal covering
$p:\widetilde X\to X$, uniformization $\psi:\widetilde X\to\mathbb D$, deck
group $G=\operatorname{Deck}(p)$, Poincaré metric $ds_X$ with length $\ell_X$
and distance $d_X$, and the pulled-back metric
$ds_{\widetilde X}=\psi^*ds_{\mathbb D}=p^*ds_X$ on $\widetilde X$ with length
$\ell_{\widetilde X}$ and distance $d_{\widetilde X}$
([[def-axiom-of-choice]], [[def-universal-covering-type-riemann-surface]],
[[def-poincare-metric-hyperbolic-riemann-surface]],
[[def-poincare-metric-and-distance-on-the-disc]],
[[def-deck-transformation-and-deck-group]]).

[F1] Surface Poincaré metric ([[def-poincare-metric-hyperbolic-riemann-surface]]): for a surface of hyperbolic type the Poincaré metric is obtained by patching the local pushforwards $(\psi\circ s)^*ds_{\mathbb D}$ along inverse sheets $s$ of the holomorphic universal covering, and in a holomorphic chart $z$ it reads $2|F'|/(1-|F|^2)|dz|$ with $F=\psi\circ s\circ z^{-1}$; its length is the integral of the coefficient along piecewise $C^1$ curves and its distance is the infimum of these lengths over curves joining two points.

[F2] Deck transformations ([[def-deck-transformation-and-deck-group]]): a deck transformation of the covering $p$ is an isomorphism $h$ over $X$, that is, a homeomorphism with $p\circ h=p$, and the deck transformations form a group under composition acting on $\widetilde X$.

[F3] The disc metric and distance ([[def-poincare-metric-and-distance-on-the-disc]]): $ds_{\mathbb D}=2|dz|/(1-|z|^2)$, the disc length of a piecewise $C^1$ curve is $\ell_{\mathbb D}(\gamma)=\int_a^b 2|\gamma'(t)|/(1-|\gamma(t)|^2)\,dt$, and $d_{\mathbb D}(z,w)$ is the infimum of $\ell_{\mathbb D}$ over piecewise $C^1$ curves from $z$ to $w$, a finite metric on $\mathbb D$.

[F4] Covering structure and deck biholomorphy ([[lem-holomorphic-structure-lifts-to-covering-surface]]): the topological universal cover carries the unique complex structure making the projection a holomorphic unbranched covering, and every deck transformation is biholomorphic.

[F5] Biholomorphisms ([[def-biholomorphic-map]]): a map $f:U\to V$ between complex domains is biholomorphic when it is bijective, holomorphic and has holomorphic inverse; a biholomorphic self-map of a complex domain is called an automorphism, and compositions and inverses of biholomorphisms are again biholomorphic by the chain rule.

[F6] Disc automorphisms ([[thm-disc-automorphisms-are-rotated-blaschke-factors]]): a holomorphic map $f:\mathbb D\to\mathbb D$ is an automorphism of $\mathbb D$ if and only if there are $a\in\mathbb D$ and $\theta\in\mathbb R$ with $f(z)=e^{i\theta}(a-z)/(1-\overline a z)$ for all $z\in\mathbb D$.

[F7] Automorphism invariance of the disc distance ([[thm-poincare-distance-formula-and-disc-automorphism-invariance]]): the disc Poincaré distance satisfies $d_{\mathbb D}(z,w)=2\operatorname{artanh}|\varphi_z(w)|$ and every automorphism of $\mathbb D$ preserves this distance.

[F8] Path lifting ([[thm-path-lifting-for-covering-maps]]): for a covering $p:E\to B$, a path $\alpha:I\to B$ and a point $e_0\in E$ with $p(e_0)=\alpha(0)$ there is a unique path $\widetilde\alpha:I\to E$ with $\widetilde\alpha(0)=e_0$ and $p\circ\widetilde\alpha=\alpha$.

[F9] Injective holomorphic maps ([[cor-injective-holomorphic-derivative-nonzero]]): an injective holomorphic map on a complex domain has nowhere-zero derivative and is biholomorphic onto its open image.

[F10] Covering maps and sheets ([[def-covering-map-and-evenly-covered-neighbourhoods]]): every point of the base of a covering map has an evenly covered open neighbourhood $U$ whose preimage is a disjoint union of open sheets, each mapped homeomorphically onto $U$ by the covering.

[F11] Piecewise $C^1$ curves ([[def-piecewise-c-one-curve-on-a-manifold]]): a piecewise $C^1$ curve is continuous with a finite subdivision such that in local charts each closed piece is $C^1$ on the interior with one-sided derivatives extending continuously to the endpoints; refining a piece into finitely many chart pieces is allowed and constant segments are admissible.

[F12] Deck group and fundamental group ([[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]): for a path-connected, locally path-connected, semilocally simply connected base the deck group of a universal cover is isomorphic to $\pi_1(B,b_0)$, with the assignment carrying a loop class to the deck transformation that moves the chosen point of the fibre to the corresponding lifted endpoint being an isomorphism onto the deck group.

[F13] Hyperbolic type and the uniformization ([[def-universal-covering-type-riemann-surface]]): the holomorphic universal cover $\widetilde X$ of a surface of hyperbolic type is a simply connected Riemann surface biholomorphic to $\mathbb D$, and the type definition supplies the covering $p$ and the biholomorphism $\psi$ used as uniformization.

[F14] Holomorphic maps ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]): a map of Riemann surfaces is holomorphic when its chart expressions are holomorphic, and compositions of holomorphic maps are holomorphic by the chain rule.



**Proof technique:** direct.

## Proof

1.1 **Setup.** The surface $\widetilde X$ is simply connected and $\psi$ is a biholomorphism, the covering $p$ is holomorphic and $G=\operatorname{Deck}(p)$ consists of the homeomorphisms $h$ of $\widetilde X$ with $p\circ h=p$; the pulled-back metric $ds_{\widetilde X}=\psi^*ds_{\mathbb D}=p^*ds_X$ is a conformal metric on $\widetilde X$ with positive smooth coefficient in every chart, because $p^*ds_X=(\psi\circ s\circ p)^*ds_{\mathbb D}=\psi^*ds_{\mathbb D}$ on each sheet $s(V)$ of a connected evenly covered $V$ and the sheets cover $\widetilde X$, and its length $\ell_{\widetilde X}$ and distance $d_{\widetilde X}$ are defined by the same integral and infimum construction as $\ell_X,d_X$. [F1, F2, F3, F13, given]

1.2 **The conjugates are disc automorphisms.** Let $h\in G$. By [F2] $h$ is a homeomorphism with $p\circ h=p$, by [F4] it is biholomorphic, and the uniformization $\psi:\widetilde X\to\mathbb D$ is biholomorphic [F13]; hence $\gamma_h:=\psi\circ h\circ\psi^{-1}$ is a bijective holomorphic self-map of $\mathbb D$ whose inverse $\psi\circ h^{-1}\circ\psi^{-1}$ is holomorphic, so $\gamma_h$ is an automorphism of $\mathbb D$ [F5]. [F2, F4, F5, F13]

1.3 **Disc automorphisms preserve the disc length element.** Let $\gamma$ be an automorphism of $\mathbb D$. By [F6] there are $a\in\mathbb D$ and $\theta\in\mathbb R$ with $\gamma(z)=e^{i\theta}(a-z)/(1-\overline a z)$. Direct differentiation gives $\varphi_a'(z)=(|a|^2-1)/(1-\overline a z)^2$, so with $|\gamma'|=|\varphi_a'|$ and $1-|\gamma(z)|^2=1-|\varphi_a(z)|^2=(1-|a|^2)(1-|z|^2)/|1-\overline a z|^2$ one computes $2|\gamma'(z)|/(1-|\gamma(z)|^2)=2/(1-|z|^2)$ for every $z\in\mathbb D$; equivalently the pullback of the disc length element [F3] satisfies $\gamma^*(ds_{\mathbb D})=ds_{\mathbb D}$. [F3, F6, algebra]

1.4 **The covering is a local isometry.** Let $V\subseteq X$ be connected and evenly covered with inverse sheet $s$, so $p\circ s=\operatorname{id}_V$ [F10]; pulling back the definition $ds_X|_V=(\psi\circ s)^*ds_{\mathbb D}$ of [F1] by $p$ gives $p^*(ds_X)=(\psi\circ s\circ p)^*ds_{\mathbb D}=\psi^*(ds_{\mathbb D})=ds_{\widetilde X}$ on the sheet $s(V)$, and the sheets cover $\widetilde X$, so $p^*(ds_X)=ds_{\widetilde X}$ on all of $\widetilde X$. Consequently, for every piecewise $C^1$ curve $c$ in $\widetilde X$ [F11] the projected curve $p\circ c$ is a piecewise $C^1$ curve in $X$ [F14] and $\ell_X(p\circ c)=\ell_{\widetilde X}(c)$, because lengths are computed from the metric that pulls back to $p^*ds_X=ds_{\widetilde X}$. [F1, F10, F11, F14]

1.5 **Lifts of piecewise $C^1$ curves are piecewise $C^1$.** Let $c:[a,b]\to X$ be a piecewise $C^1$ curve and $z\in p^{-1}(c(a))$. By [F8] there is a unique continuous lift $\widetilde c$ with $\widetilde c(a)=z$. Refine the subdivision so that each closed parameter piece is mapped by $c$ into an evenly covered open set $U$ [F10]; this is possible because the finitely many compact parameter pieces can each be covered by finitely many such preimages. The image under $\widetilde c$ of such a piece is connected and lies in $p^{-1}(U)$, hence inside a single sheet $S$ over $U$ [F10], and there $\widetilde c=(p|_S)^{-1}\circ c$. The sheet inverse $(p|_S)^{-1}$ is holomorphic: in local charts $p|_S$ is an injective holomorphic map between plane domains, so by [F9] it is biholomorphic onto its open image, and these local inverses agree with $(p|_S)^{-1}$. Hence on each piece $\widetilde c$ is a holomorphic map composed with a $C^1$ curve, so it is $C^1$ with derivatives extending continuously to the endpoints [F11], and $\widetilde c$ is piecewise $C^1$. [F8, F9, F10, F11]

1.6 **The deck group is transitive on fibres.** Let $u,v\in p^{-1}(x)$. The total space $\widetilde X$ is simply connected [F13], hence path connected, so there is a path $\eta$ in $\widetilde X$ from $u$ to $v$; then $\alpha:=p\circ\eta$ is a loop at $x$ whose lift starting at $u$ is $\eta$ by uniqueness in [F8], so that lift ends at $v$. By [F12] the assignment carrying a loop class to the deck transformation moving the chosen point $u$ of the fibre to the lifted endpoint is an isomorphism onto $G$; applied to the class of $\alpha$ it gives $h\in G$ with $h(u)=v$. [F8, F12, F13]

2.1 **Deck transformations preserve the pulled-back metric.** For $h\in G$ the identity $ds_{\widetilde X}=\psi^*ds_{\mathbb D}$, the relation $\psi\circ h=\gamma_h\circ\psi$ (step 1.2) and the functoriality of pullback give $h^*(ds_{\widetilde X})=(\psi\circ h)^*ds_{\mathbb D}=(\gamma_h\circ\psi)^*ds_{\mathbb D}=\psi^*(\gamma_h^*ds_{\mathbb D})=\psi^*ds_{\mathbb D}=ds_{\widetilde X}$ (step 1.3). [step 1.1, step 1.2, step 1.3]

2.2 **The pulled-back distance is the disc distance in $\psi$-coordinates.** For a piecewise $C^1$ curve $c$ in $\widetilde X$ the composition $\psi\circ c$ is piecewise $C^1$ in $\mathbb D$ [F11, F14], and computing in a holomorphic chart of $\widetilde X$ in which $\psi$ has expression $F$ the chain rule turns the integral for $\ell_{\widetilde X}(c)$ into the integral for $\ell_{\mathbb D}(\psi\circ c)$; hence $\ell_{\widetilde X}(c)=\ell_{\mathbb D}(\psi\circ c)$. Since $\psi$ is a bijection with holomorphic inverse, $c\mapsto\psi\circ c$ is a bijection between the piecewise $C^1$ curves from $z$ to $w$ in $\widetilde X$ and the piecewise $C^1$ curves from $\psi(z)$ to $\psi(w)$ in $\mathbb D$, so taking infima as in [F3] gives $d_{\widetilde X}(z,w)=d_{\mathbb D}(\psi(z),\psi(w))$ for all $z,w\in\widetilde X$. [F1, F3, F11, F14, step 1.1]

2.3 **Lower bound for the quotient metric.** Let $x,y\in X$, let $z\in p^{-1}(x)$ and $w\in p^{-1}(y)$, and put $m:=\inf_{h\in G}d_{\widetilde X}(z,hw)$. For a piecewise $C^1$ curve $c$ in $X$ from $x$ to $y$, its lift $\widetilde c$ from $z$ is piecewise $C^1$ by step 1.5 and ends at some point of $p^{-1}(y)$, so by step 1.6 there is $h_0\in G$ with $\widetilde c(b)=h_0w$; then $\ell_X(c)=\ell_{\widetilde X}(\widetilde c)\ge d_{\widetilde X}(z,\widetilde c(b))=d_{\widetilde X}(z,h_0w)\ge m$, using step 1.4, the definition of $d_{\widetilde X}$ as an infimum [F1] and the definition of $m$. Taking the infimum over all $c$ gives $d_X(x,y)\ge m$. [F1, step 1.4, step 1.5, step 1.6]

3.1 **Length invariance.** Let $h\in G$ and let $c$ be a piecewise $C^1$ curve in $\widetilde X$; then $h\circ c$ is piecewise $C^1$ because $h$ is holomorphic [F14], and steps 2.2 and 1.3 give $\ell_{\widetilde X}(h\circ c)=\ell_{\mathbb D}(\psi\circ h\circ c)=\ell_{\mathbb D}(\gamma_h\circ(\psi\circ c))=\ell_{\mathbb D}(\psi\circ c)=\ell_{\widetilde X}(c)$, since $\gamma_h^*(ds_{\mathbb D})=ds_{\mathbb D}$. [F14, step 1.2, step 1.3, step 2.2]

3.2 **Distance invariance.** For $h\in G$ and $z,w\in\widetilde X$, steps 2.2 and 1.2 and [F7] give $d_{\widetilde X}(hz,hw)=d_{\mathbb D}(\psi(hz),\psi(hw))=d_{\mathbb D}(\gamma_h(\psi z),\gamma_h(\psi w))=d_{\mathbb D}(\psi z,\psi w)=d_{\widetilde X}(z,w)$. [F7, step 1.2, step 2.2]

3.3 **Upper bound for the quotient metric.** Keep $x,y,z,w$ and $m=\inf_{h\in G}d_{\widetilde X}(z,hw)$; by step 2.2 every $d_{\widetilde X}(z,hw)=d_{\mathbb D}(\psi z,\psi(hw))$ is finite [F3], so $m<+\infty$. Given $\varepsilon>0$, the definition of infimum provides $h\in G$ with $d_{\widetilde X}(z,hw)<m+\varepsilon$, and the definition of $d_{\widetilde X}$ as an infimum of lengths provides a piecewise $C^1$ curve $\widetilde c$ in $\widetilde X$ from $z$ to $hw$ with $\ell_{\widetilde X}(\widetilde c)<d_{\widetilde X}(z,hw)+\varepsilon$ [F1, F3]. Then $c:=p\circ\widetilde c$ is a piecewise $C^1$ curve in $X$ from $x$ to $y$ with $\ell_X(c)=\ell_{\widetilde X}(\widetilde c)<m+2\varepsilon$ by step 1.4, so $d_X(x,y)<m+2\varepsilon$ for every $\varepsilon>0$, whence $d_X(x,y)\le m$. [F1, F3, step 1.4]

4.1 **The formula is independent of the lifts.** If $z'\in p^{-1}(x)$ and $w'\in p^{-1}(y)$ are further lifts, step 1.6 gives $z'=h'z$ and $w'=h''w$ with $h',h''\in G$, and step 3.2 gives $d_{\widetilde X}(z',hw')=d_{\widetilde X}(h'z,hh''w)=d_{\widetilde X}(z,h'^{-1}hh''w)$ for every $h\in G$; since $h\mapsto h'^{-1}hh''$ is a bijection of $G$, the sets of distances coincide and their infima are equal. [step 3.2, step 1.6]

5.1 **Conclusion.** Assertion 1 is steps 1.2 and 1.3; assertion 2 is step 2.1 for the metric, step 3.1 for lengths, step 3.2 for distances and step 2.2 for the identity $d_{\widetilde X}(z,w)=d_{\mathbb D}(\psi(z),\psi(w))$; assertion 3 is the identity $p^*(ds_X)=ds_{\widetilde X}$ and the length statement of step 1.4 together with the inequalities $d_X(x,y)\ge m$ and $d_X(x,y)\le m$ of steps 2.3 and 3.3, the number $m$ being well defined independently of the chosen lifts by step 4.1. Hence every deck transformation is a biholomorphic isometry of the pulled-back Poincaré metric and distance, and the quotient metric on $X=\widetilde X/G$ is precisely the surface Poincaré metric. [step 1.2, step 1.3, step 2.1, step 2.2, step 3.1, step 3.2, step 1.4, step 2.3, step 3.3, step 4.1] ∎
