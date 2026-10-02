---
id: ex-genus-two-cocompact-fuchsian-quotient
kind: example
title: "A genus-two compact surface gives a cocompact Fuchsian group"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-axiom-of-choice
  - def-riemann-surface-and-holomorphic-atlas
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-biholomorphic-map
  - thm-holomorphic-implicit-function-theorem
  - lem-local-holomorphic-logarithm-nonvanishing-function-on-disc
  - def-riemann-sphere-holomorphic-charts
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - thm-higher-dimensional-spheres-are-simply-connected
  - def-simply-connected
  - thm-heine-borel-rn
  - thm-compactness-under-continuous-maps
  - lem-compactness-of-a-subspace-is-ambient
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-closure-of-a-connected-set
  - thm-continuous-image-of-a-connected-space
  - thm-connected-subsets-of-r-are-intervals
  - def-connected-space
  - lem-plane-exterior-of-a-closed-disc-is-path-connected
  - thm-path-connected-implies-connected
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - def-ramification-index-and-branch-value
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - thm-riemann-hurwitz-formula
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - thm-topological-classification-compact-riemann-surfaces
  - def-universal-covering-type-riemann-surface
  - cor-compact-genus-determines-uniformization-type
  - def-properly-discontinuous-group-action
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-universal-covering-space
  - prop-deck-transformations-are-determined-by-one-point-and-act-freely
  - thm-deck-transformations-are-hyperbolic-isometries
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - thm-disc-automorphisms-are-rotated-blaschke-factors
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - def-mobius-transformation
  - thm-classification-mobius-transformations
  - def-compact-open-topology
  - thm-compact-open-equals-compact-convergence
  - def-topology-of-compact-convergence
  - def-quotient-topology
  - thm-initial-and-final-characteristic-properties
  - def-homeomorphism-and-open-maps
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
      locator: "Ch. 1 \u00a72 (algebraic curve examples), Ch. 4 \u00a7\u00a72-3 (double covers, ramification and the hyperelliptic genus count), printed pp. 9-11 and 43-46"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 \u00a7\u00a72.4 and 5, printed pp. 64-68 and 115-118, Theorems 5.1-5.6 (surfaces as quotients of the disc)"
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Chs. 2-3 and 6 (hyperelliptic curves as branched double covers and their genus by Riemann-Hurwitz); Ch. 16 printed pp. 146-147 (hyperbolic geometry); Ch. 17 printed p. 157 (uniformization)"
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 1-15, especially Lemmas 1-5, Theorem 4, Corollary 6, and the non-Green proof"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

Assume the Axiom of Choice. Let $a_1,\dots,a_6\in\mathbb C$ be distinct, put
$P(x)=\prod_{j=1}^{6}(x-a_j)$ and let
$$X_0=\{(x,y)\in\mathbb C^2:y^2=P(x)\}$$
be the affine hyperelliptic curve, completed at infinity by the two charts
constructed in step 1.2. Then the completed space $X$ is a compact connected
Riemann surface, and the projection
$$\pi:X\to\widehat{\mathbb C},\qquad (x,y)\mapsto x,\qquad \infty_\pm\mapsto\infty,$$
is a proper holomorphic map of degree $2$ whose branch values are exactly the
six numbers $a_1,\dots,a_6$, each carrying a single point of ramification index
$2$, while the value $\infty$ is unramified. Consequently:

1. $X$ is a compact Riemann surface of genus $2$;
2. $X$ has hyperbolic universal-covering type: its holomorphic universal
   cover $p:\widetilde X\to X$ is biholomorphic to $\mathbb D$;
3. writing $\psi:\widetilde X\to\mathbb D$ for a biholomorphism and
   $\Gamma:=\psi\operatorname{Deck}(p)\psi^{-1}\le\operatorname{Aut}(\mathbb D)$,
   the transported map $\Psi:=p\circ\psi^{-1}:\mathbb D\to X$ is a covering
   whose deck group is exactly $\Gamma$; the group $\Gamma$ is torsion-free,
   and it is discrete for the compact-open topology on $\operatorname{Aut}(\mathbb D)$;
   it acts on $\mathbb D$ freely and properly discontinuously, and
   $\mathbb D/\Gamma$ is homeomorphic to $X$;
4. $X$ is a cocompact Fuchsian quotient.

Here a subgroup of $\operatorname{Aut}(\mathbb D)$ is called **Fuchsian** when
it acts on $\mathbb D$ freely and properly discontinuously; its quotient is
**cocompact** when that quotient is compact. No examples-page item and no
Gauss-Bonnet theorem is consumed.

## Facts & Assumptions
**Given:** The Axiom of Choice; distinct $a_1,\dots,a_6\in\mathbb C$; $P(x)=\prod_{j=1}^{6}(x-a_j)$ and $u_j(x)=P(x)/(x-a_j)$; the affine curve $X_0=\{(x,y)\in\mathbb C^2:y^2=P(x)\}$ with the projection $\pi_0(x,y)=x$; the Riemann sphere $\widehat{\mathbb C}$ with its two standard charts; $Q(t)=\prod_{j=1}^{6}(1-a_jt)$; the completed space $X=X_0\cup\{\infty_+,\infty_-\}$ with the two charts at infinity of step 2.1 and the projection $\pi$ equal to $\pi_0$ on $X_0$ and sending $\infty_\pm$ to $\infty$; and a choice of $\varepsilon>0$ with $Q\ne0$ on $|t|<\varepsilon$ together with a holomorphic square root $\rho$ of $Q$ on that disc.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]): every family of nonempty sets has a choice function. It is used only through the genus interface [F13] and the existence and type assertions of the holomorphic universal cover [F14], both of which assume it; every selection made in the construction below is finite or explicit.

[F1] Riemann surfaces, holomorphic maps and biholomorphisms ([[def-riemann-surface-and-holomorphic-atlas]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[def-biholomorphic-map]]): a Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas whose charts are homeomorphisms onto plane domains and whose transitions are holomorphic in both directions; a map of Riemann surfaces is holomorphic when its chart expressions are holomorphic; a biholomorphism is a bijective holomorphic map with holomorphic inverse, and it is in particular a homeomorphism.

[F2] The holomorphic implicit function theorem ([[thm-holomorphic-implicit-function-theorem]]): if $F$ is holomorphic near $(a,b)$, $F(a,b)=0$, and the partial derivative of $F$ in the second variable does not vanish at $(a,b)$, then near $(a,b)$ the zero set of $F$ is the graph $w=\varphi(z)$ of a unique holomorphic $\varphi$, and $F(z,w)=0$ exactly when $w=\varphi(z)$; the same statement holds with the roles of the variables exchanged.

[F3] Local logarithm and square root ([[lem-local-holomorphic-logarithm-nonvanishing-function-on-disc]]): a nowhere-vanishing holomorphic function $h$ on a disc has a holomorphic logarithm $L$ with $\exp L=h$; then $\rho:=\exp(L/2)$ is holomorphic with $\rho^2=h$.

[F4] The Riemann sphere and its charts ([[def-riemann-sphere-holomorphic-charts]]): the standard charts are $\phi_0(z)=z$ on $\widehat{\mathbb C}\setminus\{\infty\}$ and $\phi_\infty$ with $\phi_\infty(z)=1/z$ for $z\in\mathbb C^\times$ and $\phi_\infty(\infty)=0$; on the overlap the transition is $w\mapsto1/w$, holomorphic on $\mathbb C^\times$.

[F5] The sphere as a topological sphere ([[thm-stereographic-projection-riemann-sphere-homeomorphism]]): stereographic projection $\Sigma:\widehat{\mathbb C}\to S^2$, with $S^2=\{(x,y,t)\in\mathbb R^3:x^2+y^2+t^2=1\}$, is a homeomorphism.

[F6] The sphere is connected ([[thm-higher-dimensional-spheres-are-simply-connected]], [[def-simply-connected]]): $S^2$ is simply connected, hence nonempty and path connected, hence connected.

[F7] Compactness ([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]], [[lem-compactness-of-a-subspace-is-ambient]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]): a subset of $\mathbb R^n$ is compact exactly when it is closed and bounded; continuous images of compact sets are compact; a closed subset of a compact space is compact; compact subsets of a Hausdorff space are closed and compact subsets admit finite ambient open subcovers.

[F8] Connectedness tools ([[thm-closure-of-a-connected-set]], [[thm-continuous-image-of-a-connected-space]], [[thm-connected-subsets-of-r-are-intervals]], [[def-connected-space]]): a set squeezed between a connected set and its closure is connected, so closures of connected sets are connected; continuous images of connected sets are connected; a subset of $\mathbb R$ is connected exactly when it is order-convex, so $[0,2\pi]$ is connected; and a two-point space such as $\{1,-1\}$ is disconnected, being the union of its two nonempty open singletons.

[F9] Path connectivity ([[lem-plane-exterior-of-a-closed-disc-is-path-connected]], [[thm-path-connected-implies-connected]]): for every real $R\ge0$ and centre $c$ the exterior $\{z\in\mathbb C:|z-c|>R\}$ is path connected, hence connected; and a path-connected space is connected.

[F10] Ramification ([[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[def-ramification-index-and-branch-value]]): for a nonconstant holomorphic map of Riemann surfaces there are centred charts with expression $z\mapsto z^{e}$, the exponent $e=e_x(f)$ is the ramification index, the index equals the order $\operatorname{ord}_x(f-f(x))$ of the centred expression in any charts, and $e_x(f)=1$ exactly when $f$ is a local biholomorphism at $x$.

[F11] Degree of a proper map ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]): for a proper nonconstant holomorphic map $f$ between connected Riemann surfaces the weighted fibre count $d=\sum_{x\in f^{-1}(y)}e_x(f)$ is a positive finite integer independent of $y$.

[F12] Riemann-Hurwitz ([[thm-riemann-hurwitz-formula]]): for a nonconstant holomorphic map $f:X\to Y$ of compact connected Riemann surfaces, $$2g(X)-2=d\bigl(2g(Y)-2\bigr)+\sum_{x\in X}\bigl(e_x-1\bigr).$$

[F13] Genus and classification ([[def-genus-and-euler-characteristic-compact-riemann-surface]], [[thm-topological-classification-compact-riemann-surfaces]]): under the Axiom of Choice every compact Riemann surface is homeomorphic to $\#_gT^2$ for exactly one $g\ge0$, where $\#_0T^2=S^2$; that number is the genus, and $g=0$ holds exactly for the sphere.

[F14] Universal cover, type and the compact-genus corollary ([[def-universal-covering-type-riemann-surface]], [[cor-compact-genus-determines-uniformization-type]]): under the Axiom of Choice a connected Riemann surface has a holomorphic universal cover $p:\widetilde X\to X$, every deck transformation is biholomorphic, and $\widetilde X$ is biholomorphic to exactly one of $\widehat{\mathbb C}$, $\mathbb C$, $\mathbb D$, the occurring model being the universal-covering type (spherical, parabolic, hyperbolic); and a compact Riemann surface of genus at least $2$ has hyperbolic type, so its holomorphic universal cover is biholomorphic to $\mathbb D$.

[F15] Free and properly discontinuous actions ([[def-properly-discontinuous-group-action]]): an action of a group $G$ on a space $Y$ by homeomorphisms is free when no nonidentity element fixes a point, and properly discontinuous when for every compact $K\subseteq Y$ only finitely many $g\in G$ satisfy $gK\cap K\ne\varnothing$.

[F16] Coverings, sheets and deck transformations ([[def-covering-map-and-evenly-covered-neighbourhoods]], [[def-universal-covering-space]], [[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]): a covering map is a continuous surjection every point of whose base has an evenly covered neighbourhood $U$ whose preimage is a disjoint union of open sheets each mapped homeomorphically onto $U$; a universal covering is a covering with simply connected total space; deck transformations are the homeomorphisms over the base and form a group acting by evaluation; and for a covering with connected total space two deck transformations agreeing at one point are equal, so the deck group acts freely.

[F17] The uniformization interface ([[thm-deck-transformations-are-hyperbolic-isometries]]): for a connected Riemann surface of hyperbolic universal-covering type with a uniformization $(p,\psi)$, where $p:\widetilde X\to X$ is its holomorphic universal covering and $\psi:\widetilde X\to\mathbb D$ is a biholomorphism, every $h\in\operatorname{Deck}(p)$ is a biholomorphism of $\widetilde X$ and the conjugate $\gamma_h:=\psi\circ h\circ\psi^{-1}$ is an automorphism of $\mathbb D$.

[F18] Deck transitivity on fibres ([[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]): for a path-connected, locally path-connected, semilocally simply connected base the deck group of a universal cover is isomorphic to the fundamental group, the isomorphism carrying a loop class to the deck transformation that moves the chosen point of the fibre to the corresponding lifted endpoint; consequently the deck group acts transitively on every fibre.

[F19] Disc automorphisms ([[thm-disc-automorphisms-are-rotated-blaschke-factors]], [[def-unit-disc-upper-half-plane-and-blaschke-factor]]): a holomorphic map $f:\mathbb D\to\mathbb D$ is an automorphism of $\mathbb D$ if and only if there are $a\in\mathbb D$ and $\theta\in\mathbb R$ with $$f(z)=e^{i\theta}\varphi_a(z)=e^{i\theta}\frac{a-z}{1-\overline a\,z}\qquad(z\in\mathbb D).$$

[F20] Mobius transformations ([[def-mobius-transformation]], [[thm-classification-mobius-transformations]]): a Mobius transformation is a map $z\mapsto(az+b)/(cz+d)$ with $ad-bc\ne0$, extended to $\widehat{\mathbb C}$; a nonidentity Mobius transformation is either parabolic, with one fixed point, and then conjugate to $z\mapsto z+1$, or has two fixed points and is conjugate to $z\mapsto\lambda z$ for some $\lambda\in\mathbb C^\times\setminus\{1\}$; and for any representing matrix $A$ the quantity $\tau(M)=\operatorname{tr}(A)^2/\det A$ is independent of the representative, equals $\lambda+2+\lambda^{-1}$ in the dilation normal form and equals $4$ in the translation normal form.

[F21] The compact-open topology ([[def-compact-open-topology]], [[thm-compact-open-equals-compact-convergence]], [[def-topology-of-compact-convergence]]): on the set $C(\mathbb D,\mathbb D)$ of continuous maps the compact-open topology, generated by the sets $S(K,V)=\{f:f[K]\subseteq V\}$ over compact $K$ and open $V$, is the same topology as the topology of compact convergence, for which the sets $B_L(g,\delta)=\{f:d(f(x),g(x))<\delta$ for every $x\in L\}$ over compact $L\subseteq\mathbb D$ and $\delta>0$ form a neighbourhood base at $g$.

[F22] Quotient topology and homeomorphisms ([[def-quotient-topology]], [[thm-initial-and-final-characteristic-properties]], [[def-homeomorphism-and-open-maps]]): for a surjection $q:Y\to Z$ the quotient topology on $Z$ is the final topology of $q$, so a subset of $Z$ is open exactly when its preimage under $q$ is open in $Y$ and a map $k:Z\to W$ is continuous exactly when $k\circ q$ is continuous; a continuous bijection whose inverse is continuous, equivalently a continuous bijection which is an open map, is a homeomorphism.


**Proof technique:** direct.

## Verification

1.1 **The affine curve and its local parameters.** Let $F(x,y):=y^2-P(x)$ and let $(x_0,y_0)\in X_0$. The gradient $(-P'(x),2y)$ does not vanish at $(x_0,y_0)$: if $y_0\ne0$ this is read off the second component, while if $y_0=0$ then $P(x_0)=0$, so $x_0=a_j$ for a unique $j$ and $-P'(a_j)=-\prod_{k\ne j}(a_j-a_k)\ne0$ because the six roots are distinct. By [F2] the curve is therefore locally a graph over a coordinate: where $y_0\ne0$ there are discs $A\ni x_0$, $B\ni y_0$ and a holomorphic $\eta:A\to B$ with $X_0\cap(A\times B)=\{(x,\eta(x)):x\in A\}$, and at $(a_j,0)$ there are discs $A_j\ni a_j$, $B_j\ni0$ and a holomorphic $\psi_j:B_j\to A_j$ with $X_0\cap(A_j\times B_j)=\{(\psi_j(y),y):y\in B_j\}$. The maps $x\mapsto(x,\eta(x))$ and $y\mapsto(\psi_j(y),y)$ are homeomorphisms onto their images, with inverses given by the holomorphic coordinate functions $x$ and $y$, so the two families of charts are compatible in both directions [F1]. Moreover $u_j$ is holomorphic near $a_j$ with $u_j(a_j)=P'(a_j)\ne0$, so from $y^2=P(\psi_j(y))=(\psi_j(y)-a_j)u_j(\psi_j(y))$ one obtains $\psi_j(y)-a_j=y^2w_j(y)$ with $w_j:=1/(u_j\circ\psi_j)$ holomorphic near $0$ and $w_j(0)=1/P'(a_j)\ne0$. Hence the projection $\pi_0(x,y)=x$ has, in the chart with parameter $y$ at $(a_j,0)$ and the centred target chart $z\mapsto a_j+z$, the expression $y\mapsto y^2w_j(y)$, of order $2$ at $0$, while at a point with $y\ne0$ its expression in the chart with parameter $x$ is $z\mapsto z$. [F1, F2, given, algebra]

1.2 **The complement of the six roots is path connected.** Let $V:=\mathbb C\setminus\{a_1,\dots,a_6\}$ and fix $R>\max\{1/\varepsilon,1+\max_j|a_j|\}$. For $x\in V$ with $|x|\le R$, choose a direction $\theta$ different from the at most six directions toward the roots. The segment of length $3R$ from $x$ in that direction avoids the roots and ends in $E:=\{z\in\mathbb C:|z|>R\}$, since its endpoint has modulus at least $3R-|x|\ge2R>R$. If $|x|>R$, then $x\in E$ already. The set $E$ is path connected by [F9] and is contained in $V$, so any two points of $V$ can be joined in $V$ by paths through $E$. Hence $V$ is path connected and connected. [F9, given]

2.1 **Completion at infinity.** Put $t:=1/x$ and $v:=y/x^3$, so that on $X_0$ with $x\ne0$ the equation $y^2=P(x)$ reads $v^2=P(x)/x^6=Q(t)=\prod_{j=1}^{6}(1-a_jt)$, and $Q(0)=1$. Choose $\varepsilon>0$ with $Q(t)\ne0$ for $|t|<\varepsilon$; by [F3] there is a holomorphic $L$ on that disc with $\exp L=Q$, and $\rho:=\exp(L/2)$ satisfies $\rho^2=Q$ and $\rho(0)\ne0$. Add two points $\infty_+$ and $\infty_-$ to $X_0$ and declare $$t\mapsto(t,+\rho(t)),\qquad t\mapsto(t,-\rho(t))\qquad(|t|<\varepsilon),$$ to be charts at them. For $t\ne0$ the corresponding point of the first chart is $(x,y)=(1/t,\rho(t)t^{-3})$, and $y^2=t^{-6}\rho(t)^2=t^{-6}Q(t)=P(1/t)=P(x)$, so it lies in $X_0$; the two charts are glued to the affine charts of step 1.1 by the transition maps $t=1/x$, $v=y/x^3$ and their inverses $x=1/t$, $y=v/t^3$, holomorphic on $t\ne0$. Thus $X:=X_0\cup\{\infty_+,\infty_-\}$ carries the atlas of steps 1.1 and 2.1, and towards the chart $\phi_\infty$ of [F4] the projection $\pi$ has at $\infty_\pm$ the expression $t\mapsto t$. Moreover for every $R>1/\varepsilon$ the points of $X$ with $|x|>R$, equivalently with $t=1/x$ satisfying $0<|t|<1/R$, are exactly the points of the two chart images with $t\ne0$, and their second coordinates are $\pm x^3\rho(1/x)$. [F3, F4, given, algebra]

2.2 **The punctured affine curve is a connected two-sheeted cover of $V$.** Put $Z:=\{(x,y)\in X_0:x\in V\}$. For $x\in V$ one has $P(x)\ne0$, so by [F3] there are a disc $D(x,r)\subseteq V$ and a holomorphic square root $\rho_x$ of $P$ on it; the two maps $z\mapsto(z,\pm\rho_x(z))$ are local inverses of $\pi_0$, and they exhibit $\pi_0^{-1}(D(x,r))$ as the disjoint union of two open sets each mapped homeomorphically onto $D(x,r)$. Hence $\pi_0:Z\to V$ is a covering of degree $2$ [F16], so it is continuous and open, and $Z$ is Hausdorff and second countable as a subspace of $\mathbb C^2$. Suppose $Z$ were disconnected, say $Z=Z_1\sqcup Z_2$ with the $Z_i$ nonempty, open and closed. Over each small evenly covered disc, each of the two connected sheets lies wholly in one of the clopen $Z_i$, so the number of sheet points in $Z_i$ is locally constant on $V$. Thus the images $\pi_0(Z_i)$ are nonempty, open and closed in the connected space $V$ (step 1.2), hence equal to $V$; and since each fibre of $\pi_0$ consists of exactly two points, one over each $Z_i$, the restriction $\pi_0|_{Z_1}$ is a bijection onto $V$ with local continuous inverse, hence a homeomorphism. Its inverse provides a continuous $s:V\to\mathbb C$ with $s(x)^2=P(x)$ for all $x\in V$. Fix $0<\varepsilon_1<\min_{k\ne1}|a_1-a_k|$ and, by [F3], a holomorphic $\rho$ on $D(a_1,\varepsilon_1)$ with $\rho^2=u_1$; there $u_1$ is holomorphic and nowhere zero. Define $c(\theta):=a_1+(\varepsilon_1/2)e^{i\theta}$, $w(\theta):=(\varepsilon_1/2)^{1/2}e^{i\theta/2}$, so $w(\theta)^2=c(\theta)-a_1$, and $g(\theta):=s(c(\theta))/(w(\theta)\rho(c(\theta)))$ for $\theta\in[0,2\pi]$. Then $$g(\theta)^2=\frac{P(c(\theta))}{(c(\theta)-a_1)u_1(c(\theta))}=1,$$ so $g$ maps the connected interval $[0,2\pi]$ continuously into $\{1,-1\}$ [F8]; a continuous image of a connected set is connected while $\{1,-1\}$ is disconnected, so $g$ is constant [F8]. But $s(c(2\pi))=s(c(0))$, $\rho(c(2\pi))=\rho(c(0))$ and $w(2\pi)=-w(0)$, so $g(2\pi)=-g(0)\ne g(0)$, a contradiction. Hence $Z$ is connected. [F3, F8, F16, step 1.1, step 1.2]

3.1 **The completed space is Hausdorff and second countable, and $\pi$ is holomorphic for the atlas.** Distinct points of $X_0$ are separated by the Hausdorff topology of $\mathbb C^2$, the affine charts being restrictions of the coordinate projections; the two points $\infty_+$ and $\infty_-$ are separated because their chart values at $t=0$ are $\rho(0)$ and $-\rho(0)$, which are distinct and give disjoint chart images. A point $(x_0,y_0)\in X_0$ with $R>\max\{|x_0|,1/\varepsilon\}$ and an infinity point are separated by the open sets $\{|x|<R\}\cap X_0$ and the image under the relevant chart of the disc $|t|<1/R$, which is disjoint from the first by step 2.1. Hence $X$ is Hausdorff. A countable base of the topology of $X$ is obtained from a countable base of the open subspace $X_0$, which is second countable as a subspace of $\mathbb C^2$, together with the images under the two chart maps of a countable base of the disc $|t|<\varepsilon$; these sets are open and every open subset of $X$ is the union of its intersections with the three open pieces $X_0$ and the two chart images, so $X$ is second countable. The chart expressions of $\pi$ are holomorphic: $z\mapsto z$ and $y\mapsto\psi_j(y)$ on the affine charts of step 1.1 and $t\mapsto t$ on the two charts at infinity of step 2.1. Consequently, once $X$ is known to be connected, it is a Riemann surface with this atlas and $\pi$ is a nonconstant holomorphic map of Riemann surfaces [F1]. [F1, step 1.1, step 2.1]

3.2 **The completed space is compact.** Fix $R>1/\varepsilon$. The set $K:=\{(x,y)\in X_0:|x|\le R\}$ is the intersection of the closed set $X_0$ with the closed cylinder $\{|x|\le R\}$ in $\mathbb C^2$, hence closed; on it $|y|^2=|P(x)|\le\prod_j(R+|a_j|)$, so it is bounded in $\mathbb C^2$, hence compact [F7]. The image of the closed disc $|t|\le1/R$ under each of the two charts at infinity is compact, being a continuous image of a compact set [F7], and it contains the corresponding point $\infty_\pm$; by step 2.1 every point of $X$ with $|x|>R$ lies in one of these two images. Therefore $X=K\cup(\text{image of the }+\text{-chart})\cup(\text{image of the }-\text{-chart})$ is a finite union of compact subsets, hence compact. [F7, step 1.1, step 2.1]

4.1 **The completed space is connected.** By step 2.2 the set $Z$ is connected and contained in $X_0$. Every point of $X_0\setminus Z$, namely each $(a_j,0)$, is a limit point of $Z$: in the chart $y\mapsto(\psi_j(y),y)$ of step 1.1 the points with $0<|y|<\delta$ have $x=\psi_j(y)=a_j+y^2w_j(y)\ne a_j$, so they lie in $Z$, and they tend to $(a_j,0)$ as $y\to0$. Hence $X_0$ lies between the connected set $Z$ and its closure, so $X_0$ is connected [F8]. Likewise each $\infty_\pm$ is a limit point of $X_0$: the points of its chart with $0<|t|<\delta$ belong to $X_0$ by step 2.1 and tend to $\infty_\pm$ as $t\to0$; hence $X$ lies between the connected set $X_0$ and its closure, so $X$ is connected [F8]. By step 3.1, $X$ is a Riemann surface. [F1, F8, step 1.1, step 2.1, step 2.2]

5.1 **The ramification points of $\pi$ are the six branch points.** At a point $(x_0,y_0)\in X_0$ with $y_0\ne0$ the chart of step 1.1 has local parameter $x$ and the chart expression of $\pi$ towards $\phi_0$ is $z\mapsto z$, so the ramification index is $1$ there, by the description of the index as an order [F10]. Over each $a_j$ the only point of $X$ is $(a_j,0)$, because $y^2=P(a_j)=0$ forces $y=0$; in the chart with local parameter $y$ and the centred target chart at $a_j$ the expression of $\pi$ is $y\mapsto y^2w_j(y)$ with $w_j(0)\ne0$ (step 1.1), whose order at $0$ is $2$, so $e_{(a_j,0)}(\pi)=2$ [F10]. At $\infty_\pm$ the chart expression towards $\phi_\infty$ is $t\mapsto t$ (step 2.1), so the index is $1$ and $\infty$ is not a branch value. Hence the branch values of $\pi$ are exactly the six distinct numbers $a_1,\dots,a_6$, each with exactly one preimage, of index $2$, and every other value has all its preimages of index $1$. [F10, step 1.1, step 2.1, step 3.1, step 4.1]

6.1 **$\pi$ is proper of degree two.** By steps 3.1 and 4.1 the space $X$ is a Riemann surface and $\pi:X\to\widehat{\mathbb C}$ is nonconstant holomorphic. For compact $K\subseteq\widehat{\mathbb C}$ the preimage $\pi^{-1}(K)$ is closed in $X$, because $\pi$ is continuous and $K$ is closed in the Hausdorff space $\widehat{\mathbb C}$; being a closed subset of the compact space $X$ (step 3.2), it is compact [F7]. So $\pi$ is proper, and the degree theorem [F11] applies. For $b\in\mathbb C\setminus\{a_1,\dots,a_6\}$ the fibre is $\pi^{-1}(b)=\{(b,\sqrt{P(b)}),(b,-\sqrt{P(b)})\}$, two distinct points, each of index $1$ by step 5.1, so $d=\deg\pi=2$. [F7, F11, step 3.1, step 3.2, step 4.1, step 5.1]

7.1 **The genus is two.** By steps 3.2, 4.1 and 6.1 the map $\pi$ is a nonconstant holomorphic map of degree $2$ between compact connected Riemann surfaces, so Riemann-Hurwitz [F12] gives $$2g(X)-2=2\bigl(2g(\widehat{\mathbb C})-2\bigr)+\sum_{x\in X}\bigl(e_x(\pi)-1\bigr).$$ By step 5.1 the ramification points are exactly the six points $(a_j,0)$, each with index $2$, while all other points, namely the affine points with $y\ne0$ and the two points $\infty_\pm$, have index $1$; hence the sum equals $6$. The sphere $\widehat{\mathbb C}$ is compact, being homeomorphic to the closed bounded subset $S^2$ of $\mathbb R^3$ [F5, F7], and connected [F6]; and $g(\widehat{\mathbb C})=0$, because $\widehat{\mathbb C}\cong S^2=\#_0T^2$ and the genus is the unique handle number [F13]. Therefore $2g(X)-2=2(0-2)+6=2$, that is $g(X)=2$. [F5, F6, F7, F12, F13, step 3.2, step 4.1, step 5.1, step 6.1]

8.1 **Hyperbolic type and the uniformization.** By step 7.1 the surface $X$ is a compact Riemann surface of genus $2$, so the compact-genus corollary [F14], whose choice hypothesis is covered by [A1], gives that $X$ has hyperbolic universal-covering type: its holomorphic universal cover $p:\widetilde X\to X$ satisfies $\widetilde X\cong\mathbb D$ [F14], and fixing a biholomorphism $\psi:\widetilde X\to\mathbb D$ gives a uniformization $(p,\psi)$ [F14]. By [F17] the conjugate $\gamma_h:=\psi\circ h\circ\psi^{-1}$ is an automorphism of $\mathbb D$ for every $h\in\operatorname{Deck}(p)$, and $\Gamma:=\psi\operatorname{Deck}(p)\psi^{-1}=\{\gamma_h:h\in\operatorname{Deck}(p)\}$ is a subgroup of $\operatorname{Aut}(\mathbb D)$, isomorphic to $\operatorname{Deck}(p)$. [A1, F14, F17, step 7.1]

9.1 **The transported covering, its deck group, and freeness.** Define $\Psi:=p\circ\psi^{-1}:\mathbb D\to X$. A homeomorphism of the total space carries evenly covered neighbourhoods to evenly covered neighbourhoods, so $\Psi$ is a covering map, with the same evenly covered sets as $p$ [F16]. A homeomorphism $h$ of $\mathbb D$ satisfies $\Psi\circ h=\Psi$ exactly when $p\circ\psi^{-1}h\psi=p$, that is exactly when $\psi^{-1}h\psi\in\operatorname{Deck}(p)$, that is exactly when $h\in\Gamma$; hence $\operatorname{Deck}(\Psi)=\Gamma$. Since $\mathbb D$ is connected, deck transformations of $\Psi$ agreeing at one point are equal, so $\operatorname{Deck}(\Psi)=\Gamma$ acts freely on $\mathbb D$ [F16]. [F16, step 8.1]

10.1 **The action of $\Gamma$ is properly discontinuous.** Let $K\subseteq\mathbb D$ be compact. Use the family of all evenly covered coordinate-disc neighbourhoods $U$ and smaller open neighbourhoods $W$ whose compact closures lie in $U$. Finitely many $W_i$ cover $\Psi(K)$. For each $i$, the set $K\cap\Psi^{-1}(\overline W_i)$ is closed in $K$, hence compact; the sheets over $U_i$ cover it, so only finitely many sheets meet it. Denote these by $S_i$. If $\gamma K\cap K\ne\varnothing$, write $\gamma x=y$ with $x,y\in K$ and choose $i$ with $\Psi(x)=\Psi(y)\in W_i$. The sheets $V,V'\in S_i$ containing $x,y$ are over the same $U_i$, and $\gamma$ maps $V$ onto $V'$ because it is a deck transformation. Two deck transformations mapping $V$ onto $V'$ agree at the unique point of $V$ above any fixed base point, hence agree everywhere by [F16]. Therefore at most $\sum_i|S_i|^2$ elements of $\Gamma$ move $K$ to meet itself, so the action is properly discontinuous [F15]. [F15, F16, step 9.1]

10.2 **$\Gamma$ is discrete.** Fix $z_0\in\mathbb D$. For each $\gamma\in\Gamma$ choose an evenly covered neighbourhood of $\Psi(z_0)$ and its sheet $V$ containing $\gamma(z_0)$. The compact-open set $S(\{z_0\},V)$ is a neighbourhood of $\gamma$. If $\gamma'\in\Gamma$ also lies in it, then $\gamma'(z_0)$ and $\gamma(z_0)$ lie in the same sheet and fibre, so injectivity on the sheet makes these values equal. Deck rigidity [F16] gives $\gamma'=\gamma$. Every element of $\Gamma$ is therefore isolated in the compact-open topology. [F16, F21, step 9.1]

10.3 **$\Gamma$ is torsion-free.** Let $\gamma\in\Gamma$ with $\gamma^m=\mathrm{id}$ for some $m\ge1$; we show $\gamma=\mathrm{id}$. By [F19] there are $a\in\mathbb D$ and $\theta\in\mathbb R$ with $\gamma=e^{i\theta}\varphi_a$, where $\varphi_a(z)=(a-z)/(1-\overline a\,z)$; written as a quotient of linear polynomials this exhibits $\gamma$ as a Mobius transformation [F20]. Assume $\gamma\ne\mathrm{id}$; the classification [F20] gives two alternatives. In the parabolic alternative $\gamma$ is conjugate to $z\mapsto z+1$, so $\gamma^m$ is conjugate to $z\mapsto z+m\ne\mathrm{id}$, contradicting $\gamma^m=\mathrm{id}$. In the other alternative $\gamma$ has two fixed points and is conjugate to $z\mapsto\lambda z$ with $\lambda\in\mathbb C^\times\setminus\{1\}$; then $\gamma^m=\mathrm{id}$ forces $\lambda^m=1$, so $|\lambda|=1$, $\lambda\ne1$, and the invariant $\tau(\gamma)=\operatorname{tr}(A)^2/\det A$ of any representing matrix $A$ equals $\lambda+2+\lambda^{-1}=2+2\operatorname{Re}\lambda$, which lies in $[0,4)$ [F20]. The matrix $$A=\begin{pmatrix}-e^{i\theta}&e^{i\theta}a\\-\overline a&1\end{pmatrix}$$ represents $\gamma$, and $\operatorname{tr}A=1-e^{i\theta}$, $\det A=-e^{i\theta}(1-r^2)$ with $r:=|a|<1$, so $$\tau(\gamma)=\frac{(1-e^{i\theta})^2}{-e^{i\theta}(1-r^2)}=\frac{4\sin^2(\theta/2)}{1-r^2}.$$ Hence $4\sin^2(\theta/2)<4(1-r^2)$, that is $r^2<\cos^2(\theta/2)$; writing $c:=\cos(\theta/2)$ we have $r<|c|$. If $a=0$ then $\gamma(z)=-e^{i\theta}z$ fixes $0\in\mathbb D$, contradicting the freeness of the action of $\Gamma$ (step 9.1); so $a\ne0$ and $r>0$. The fixed points of $\gamma$ solve $\gamma(z)=z$, that is $\overline a\,z^2-(1+e^{i\theta})z+e^{i\theta}a=0$; substituting $z=e^{i\theta/2}w$ and dividing by $e^{i\theta}$ turns this into $\overline a\,w^2-2cw+a=0$, and multiplying by $a$ gives $r^2w^2-2acw+a^2=0$, whose roots are $w=a(c\pm s)/r^2$ with $s:=(c^2-r^2)^{1/2}>0$ real. Hence $z_\pm=e^{i\theta/2}a(c\pm s)/r^2$ are the two fixed points of $\gamma$, and $|z_\pm|=|c\pm s|/r$. Since $c^2-s^2=r^2>0$, one has $s<|c|$ and the two numbers $c\pm s$ have the same sign. Thus $\min\{|z_+|,|z_-|\}=(|c|-s)/r$. Moreover $|c|^2-s^2=r^2$, so $(|c|-s)/r=r/(|c|+s)<1$. Hence one of the fixed points lies in $\mathbb D$, contradicting freeness (step 9.1). [F19, F20, step 9.1, algebra]

10.4 **$\mathbb D/\Gamma$ is homeomorphic to $X$ and compact.** Let $q:\mathbb D\to\mathbb D/\Gamma$ be the quotient map of the action of $\Gamma$ and give $\mathbb D/\Gamma$ the quotient topology [F22]. For $\gamma_h\in\Gamma$ one has $\Psi(\gamma_h z)=p(\psi^{-1}\psi h\psi^{-1}z)=p(h\psi^{-1}z)=p(\psi^{-1}z)=\Psi(z)$, so $\Psi$ is $\Gamma$-invariant and induces a map $\Phi:\mathbb D/\Gamma\to X$ with $\Phi\circ q=\Psi$; by the characteristic property of the quotient topology $\Phi$ is continuous [F22]. It is surjective because $\Psi$ is. It is injective: if $\Psi(z)=\Psi(z')$, then $\psi^{-1}z$ and $\psi^{-1}z'$ lie in one fibre of $p$, and the deck group of the universal cover acts transitively on each fibre [F18], so $\psi^{-1}z'=h\psi^{-1}z$ for some $h\in\operatorname{Deck}(p)$ and hence $z'=\gamma_h z$, that is $q(z')=q(z)$. The map $\Psi$ is open: if $O\subseteq\mathbb D$ is open and $w=\Psi(u)\in\Psi(O)$, choose an evenly covered $U\ni w$ with sheet $V\ni u$; then $V\cap O$ is open and $\Psi(V\cap O)$ is open in $U$, hence in $X$, and contains $w$. Consequently for every open $O\subseteq\mathbb D/\Gamma$ the set $\Phi(O)=\Psi(q^{-1}(O))$ is open in $X$ [F22], since $q$ is surjective; so the continuous bijection $\Phi$ is a homeomorphism [F22]. Therefore $\mathbb D/\Gamma\cong X$ is compact by step 3.2, that is, $\Gamma$ is cocompact. [F18, F22, step 3.2, step 9.1]

11.1 **Conclusion.** Steps 3.1 to 4.1 exhibit $X$ as a compact connected Riemann surface (steps 3.2 and 4.1). Step 6.1 shows that the projection $\pi:X\to\widehat{\mathbb C}$ is a proper holomorphic map of degree $2$; step 5.1 identifies its branch values as the six numbers $a_1,\dots,a_6$, each with a single point of index $2$ and with $\infty$ unramified; and step 7.1 computes $g(X)=2$. By step 8.1 the surface $X$ has hyperbolic universal-covering type, with uniformization $\Psi:\mathbb D\to X$ whose deck group is $\Gamma\le\operatorname{Aut}(\mathbb D)$ (step 9.1). The group $\Gamma$ acts freely (step 9.1) and properly discontinuously (step 10.1), so it is Fuchsian in the sense of the Example; it is torsion-free (step 10.3) and discrete for the compact-open topology (step 10.2); and $\mathbb D/\Gamma\cong X$ is compact (step 10.4), so the quotient is cocompact. This proves all the assertions of the Example. [step 3.2, step 4.1, step 5.1, step 6.1, step 7.1, step 8.1, step 9.1, step 10.1, step 10.2, step 10.3, step 10.4] ∎
