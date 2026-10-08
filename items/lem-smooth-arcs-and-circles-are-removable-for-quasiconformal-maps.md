---
id: lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps
kind: lemma
title: Compact subsets of lines and round circles are removable for quasiconformal maps
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 9
deps:
  - cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
  - def-absolute-continuity-on-almost-every-coordinate-line
  - def-acl-sobolev-quasiconformal-homeomorphism
  - def-axiom-of-choice
  - def-complex-domain
  - def-countable-choice
  - def-geometric-quasiconformal-homeomorphism
  - def-homeomorphism-and-open-maps
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-lebesgue-outer-measure
  - def-mobius-transformation
  - def-riemann-sphere-holomorphic-charts
  - def-wirtinger-derivatives
  - lem-quasiconformal-local-jacobian-energy-bound
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-acl-characterisation-of-w-one-p
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-geometric-and-analytic-quasiconformality-equivalent
  - thm-composition-and-inverse-quasiconformal
  - thm-invariance-of-domain
  - thm-heine-borel-rn
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-compact-subset-is-closed-and-bounded
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-holder-inequality-for-integrals
  - thm-borel-sets-are-lebesgue-measurable
axiom_use: The Axiom of Choice is used through the geometric/analytic quasiconformality interface at Steps 1.1, 2.1, 5.1 and 6.1. Countable Choice enters the completed-product Fubini and Lebesgue-measure interfaces at Steps 2.1–5.1; the cited fundamental theorem of calculus also states Dependent Choice, which follows from the stated AC. The curve-null cover and finite-intersection argument use no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §13.3, printed pp. 190–191: the smooth Little Gluing Lemma for a local smooth arc and the ACL gluing idea. The source uses a single transverse intersection locally; this proof handles the finite intersections of a whole line or circle and supplies the missing integrability argument."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 3 §4, printed pp. 94–96, area/Jacobian estimate and derivative energy consequence used through [[lem-quasiconformal-local-jacobian-energy-bound]]. The separate proof of a.e. differentiability on pp. 94–95 has an unresolved maximum argument and is not used here."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $K\subset\mathbb C$ be a compact subset of a straight line or a round circle, let $U\subseteq\mathbb C$ be open with $K\subset U$, and let $h:U\to\mathbb C$ be a homeomorphic embedding ([[def-homeomorphism-and-open-maps]]) that is $K_0$-quasiconformal on $U\setminus K$, where $K_0\ge1$. Then $h$ is $K_0$-quasiconformal on $U$, with the same maximal dilatation bound. For the sphere clause, a homeomorphism is $K_0$-quasiconformal when its local expressions in holomorphic charts are analytically $K_0$-quasiconformal ([[def-riemann-sphere-holomorphic-charts]], [[def-acl-sobolev-quasiconformal-homeomorphism]]). In particular, the same conclusion holds for a homeomorphism of the Riemann sphere that is quasiconformal off a round circle or a generalized straight line $L\cup\{\infty\}$.

## Facts & Assumptions

**Given:** AC, compact $K\subset\mathbb C$ contained in a straight line or round circle, open $U\supset K$, and a homeomorphic embedding $h:U\to\mathbb C$ that is $K_0$-geometrically quasiconformal on every component of $U\setminus K$.

[F1] Each component of $U\setminus K$ is a complex domain ([[def-complex-domain]]). Under AC, geometric and analytic $K_0$-quasiconformality agree on every such component; the analytic form has weak derivatives in $L^2_{\rm loc}$ and satisfies $|h_{\bar z}|\le k_0|h_z|$ with $k_0=(K_0-1)/(K_0+1)$ ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-geometric-quasiconformal-homeomorphism]], [[thm-geometric-and-analytic-quasiconformality-equivalent]]).

[F2] The local Jacobian and energy estimate of [[lem-quasiconformal-local-jacobian-energy-bound]]: on a relatively compact Borel set $E$ in a component where $h$ is geometrically $K_0$-quasiconformal, $\int_E|Dh|_{\rm HS}^2\,dA\le C(K_0)\lambda_2(h(E))$.

[F3] A compact subset of a bounded straight segment or round circle has planar area zero: divide a finite-length parametrizing arc into $N$ pieces of diameter at most $C/N$ and cover each piece by a square of side $2C/N$; the total area is at most $4C^2/N$. The box-volume formula gives the stated cost ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-lebesgue-outer-measure]], [[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]). Compact sets are Borel and hence Lebesgue measurable ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-borel-sets-are-lebesgue-measurable]]).

[F4] Under Countable Choice, planar Lebesgue measure is the completion of the product of the two line measures, and Fubini applies to integrable functions for this completed product ([[def-countable-choice]], [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]], [[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F5] Under AC, if an almost-everywhere class has an ACL representative with locally square-integrable coordinate derivatives, those derivatives are its weak derivatives ([[def-absolute-continuity-on-almost-every-coordinate-line]], [[thm-acl-characterisation-of-w-one-p]]).

[F6] If $g\in L^1(a,b)$ then $t\mapsto\int_a^t g(s)\,ds$ is absolutely continuous ([[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]]). An absolutely continuous function on an interval is the integral of its a.e. derivative plus its endpoint value ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

[F7] Möbius transformations are biholomorphisms of the sphere and their chart restrictions are conformal ([[def-mobius-transformation]], [[def-riemann-sphere-holomorphic-charts]], [[thm-mobius-transformations-biholomorphic-sphere]]). The batch-12 composition theorem preserves the $K_0$ bound under the source and target chart changes used in Step 5.1 ([[thm-composition-and-inverse-quasiconformal]]).

[F8] On a finite interval, Cauchy–Schwarz gives $\int_I|g|\le |I|^{1/2}(\int_I|g|^2)^{1/2}$ ([[thm-holder-inequality-for-integrals]]).

[F9] Lebesgue measure is countably additive on measurable sets and finite on bounded measurable sets ([[thm-lebesgue-measure-is-a-complete-measure]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F10] A continuous injective map from an open subset of $\mathbb R^2$ to $\mathbb R^2$ has open image and restricts to a homeomorphism onto that image ([[thm-invariance-of-domain]]). Thus $h(R)$ is open whenever $R\subset U$ is open.

[F11] A closed square $\overline R$ is compact, and every closed bounded Euclidean circle is compact ([[thm-heine-borel-rn]]); continuous images of compact sets are compact ([[thm-continuous-image-of-a-compact-space-is-compact]]), and compact subsets of Euclidean space are bounded ([[thm-compact-subset-is-closed-and-bounded]]). This applies to $h(\overline R)$ and to the finite circle in Step 5.1.

## Sources

- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §13.3, printed pp. 190–191, Little Gluing Lemma (smooth version). The source proves the local smooth-arc case but only sketches absolute continuity across the crossing; the proof here adds the local energy and finite-intersection details.
- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 2 §7, printed pp. 71–80, Theorem 7.2 and Corollaries 7.3–7.7 (shadow criterion and line removability). This independent route is not used in the proof below. The current source coverage record should mark it as an unused alternative.
- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 3 §4, printed pp. 94–96, Theorem 4.2, Lemma 4.4 and Corollary 4.5. The local area-energy content is used by [F2]; the differentiability proof has an unresolved step and is reported in the Step 3b notes.

## Proof

**Proof technique:** glue ACL restrictions across finitely many points on almost every coordinate line.

1.1 If $K=\varnothing$, the assertion is the hypothesis. Otherwise, [F10] makes the image under $h$ of each component of $U\setminus K$ open, so both it and the source component are complex domains. By [F1], the map on each component is analytically $K_0$-quasiconformal. Its weak coordinate derivatives are locally square integrable there and satisfy the same Beltrami bound. [F1, F10, given]

1.2 The set $K$ has planar measure zero by [F3]. Fix an open square $R$ with $\overline R\subset U$ and put $O=R\setminus K$. Choose the maximal dyadic squares $Q_j$ whose closures lie in $O$. They have disjoint interiors and cover $O$ except for the countable union of dyadic grid lines; each grid-line segment inside $R$ is null because it lies in a degenerate rectangle of measure zero. Every point of $O$ off those grid lines belongs to a sufficiently small dyadic square with closure in $O$, and then to a maximal such square. Each $\overline{Q_j}$ lies in one component of $U\setminus K$, so [F2] gives $\int_{Q_j}|Dh|_{\rm HS}^2\,dA\le C(K_0)\lambda_2(h(Q_j))$. The images $h(Q_j)$ are pairwise disjoint open sets because $h$ is a homeomorphic embedding and [F10] makes it open; they lie in $h(\overline R)$, which is bounded by [F11]. Hence [F9] gives $$\sum_j\lambda_2(h(Q_j))=\lambda_2\!\left(\bigcup_j h(Q_j)\right)\le\lambda_2(h(R))<\infty.$$ Countable additivity and the null grid lines therefore give $$\int_{R\setminus K}|Dh|_{\rm HS}^2\,dA\le C(K_0)\lambda_2(h(R))<\infty.$$ [F2, F3, F9, F10, F11, given, construct]

2.1 Extend each weak coordinate derivative $g_i$ from $O$ by $0$ on $K\cap R$. It is measurable, and step 1.2 gives $g_i\in L^2(R)$. By [F4], for almost every horizontal line and almost every vertical line through $R$, the restriction of $g_i$ is in $L^2$; [F8] then puts it in $L^1$ on that bounded line interval. [F3, F4, F8, step 1.2]

3.1 Also discard the null line families on a countable rational-box cover of $O$ where the ACL representative or its agreement almost everywhere with $h$ fails; [F4]–[F5] justify this common exceptional family. Fix one of the remaining good coordinate lines. Its intersection with $K$ is finite except for at most one exceptional line when $K$ lies in a straight line parallel to the chosen direction; that one line is a null member of the parallel family. For a circle there are at most two intersection points on every coordinate line. On each open interval left after removing these finitely many points, [F1] and [F5] give an absolutely continuous representative with derivative $g_i$ a.e. The representative agrees a.e. with the continuous restriction of $h$, so the two agree everywhere on each such interval. Since $g_i\in L^1$ on the whole line interval, [F6] and continuity of $h$ at the finitely many missing points show that the restriction of $h$ on the full interval is the indefinite integral of $g_i$ plus a constant. It is therefore absolutely continuous across every point of $K$. [F1, F5, F6, step 2.1, given]

4.1 Applying step 2.1 in both coordinate directions on a countable rational-box cover of $U$ shows that $h$ itself is ACL on $U$. On every relatively compact rational box, the derivatives $g_i$ belong to $L^2$ by step 1.2; the ACL characterization [F5] therefore identifies them as the weak derivatives of $h$, so $h\in W^{1,2}_{\rm loc}(U)$. Since $K$ has planar measure zero, the inequality $|h_{\bar z}|\le k_0|h_z|$ continues to hold almost everywhere on $U$. Hence $h$ is analytically $K_0$-quasiconformal on $U$, and [F1] gives geometric $K_0$-quasiconformality with the same bound. [F1, F3, F5, step 1.2, step 3.1, given]

5.1 Let $H$ be a sphere homeomorphism that is $K_0$-quasiconformal off a generalized circle $\Sigma$, in the chartwise sense of the Statement. Choose a finite point $p\notin\Sigma$ and Möbius charts $\phi,\psi$ sending $p,H(p)$ to $\infty$, respectively (if $H(p)=\infty$, take $\psi$ to be the finite chart). Then $g=\psi\circ H\circ\phi^{-1}:\mathbb C\to\mathbb C$ is a homeomorphism. The set $K=\phi(\Sigma)$ is a finite round circle: write $\Sigma$ as $\alpha|z|^2+2\operatorname{Re}(\beta z)+\gamma=0$ with $\alpha,\gamma\in\mathbb R$; under $w=1/(z-p)$, multiplication by $|w|^2$ gives $P(p)|w|^2+2\operatorname{Re}((\alpha p+\overline\beta)w)+\alpha=0$, where $P(p)=\alpha|p|^2+2\operatorname{Re}(\beta p)+\gamma\ne0$. This is a Euclidean circle, hence compact by [F11]. By [F7] and the quasiconformal composition interface, $g$ is $K_0$-quasiconformal off $K$. The planar assertion applies to compact $K\subset\mathbb C$ with $U=\mathbb C$, so $g$ is $K_0$-quasiconformal on the whole finite chart. The omitted source point $p$ lies off $\Sigma$, where $H$ was already quasiconformal. This proves the sphere assertion with the same bound. [F7, F11, step 4.1, given, algebra] ∎
