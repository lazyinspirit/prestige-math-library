---
id: lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains
kind: lemma
title: Euclidean balls, annuli and spheres as bounded smooth domains and hypersurfaces
domain: mathematics
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-bounded-c-one-domain-boundary-charts-and-outward-normal", "def-surface-integral-on-a-compact-c-one-hypersurface", "thm-metric-continuity-characterisations", "def-metric-topology", "def-metric-continuity", "def-metric-ball", "def-euclidean-inner-product", "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric", "thm-heine-borel-rn", "def-metric-compactness", "thm-real-power-continuity-and-derivatives", "lem-derivative-of-a-power", "thm-chain-rule-for-total-derivatives", "thm-algebra-of-derivatives", "thm-continuous-partial-derivatives-imply-total-differentiability", "def-total-derivative-in-euclidean-space", "def-ck-euclidean-maps-and-diffeomorphisms", "def-metric-interior-closure-boundary", "def-countable-choice", "def-bounded-piecewise-c-one-euclidean-domain", "cor-first-green-identity-on-a-bounded-c-one-domain", "thm-divergence-theorem-for-bounded-c-one-euclidean-domains", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null", "lem-surface-integral-is-independent-of-c-one-boundary-charts", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "thm-borel-products-of-euclidean-spaces-are-euclidean-borel", "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets"]
dependency_roles:
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  thm-metric-continuity-characterisations: mathematical-premise
  def-metric-topology: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-metric-compactness: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-metric-interior-closure-boundary: mathematical-premise
  def-countable-choice: mathematical-premise
  def-bounded-piecewise-c-one-euclidean-domain: mathematical-premise
  cor-first-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
  lem-surface-integral-is-independent-of-c-one-boundary-charts: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: Section 1.3.1 printed pp. 24-28 (surfaces bounding elementary volumes) and Section 2.2.3 printed pp. 70-72 (spherical Gaussian surfaces). Read in the stamped scanned full text, OCR cross-checked.
    - title: David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: Sections 2.1.1-2.1.3 printed pp. 9-13 (the Coulomb force; the uniform sphere, pp. 11-12; line charges, pp. 12-13) and Section 2.2 printed pp. 16-17 (spherical surfaces and flux). Read in the stamped full text.
    - title: L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)
      url: http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf
      locator: Section 36 printed pp. 88-89 (spherically symmetric static fields and Gaussian surface calculations). Read in the stamped full text.
    - title: Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: Sections 1.3.1-1.3.2 printed pp. 8-9 (Coulomb's law) and Sections 3.3.2-3.3.3 printed pp. 35-36 (the point-charge solution and Green's function). Read in the stamped full text.
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), the convention of the boundary-chart and surface-measure interfaces used below ([[def-countable-choice]]).
Use the explicit coordinate labels $x_k:=x(k-1)$ for $k=1,2,3$; these relabel the zero-based coordinates of [[def-euclidean-inner-product]].
On $\mathbb R^3$ with its Euclidean structure ([[def-euclidean-inner-product]], [[def-metric-ball]]) let $0<\varepsilon<R$ and put
$$B_R:=\{x:|x|<R\},\qquad \overline B_R:=\{x:|x|\le R\},\qquad A_{\varepsilon,R}:=\{x:\varepsilon<|x|<R\},\qquad S_r:=\{x:|x|=r\}.$$
Then:

(a) [Domains] $B_R$ and $A_{\varepsilon,R}$ are bounded $C^1$ domains in the sense of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]; their boundaries are $S_R$, respectively $S_\varepsilon\cup S_R$, and the corresponding outward unit normals are
$$\nu(x)=\frac{x}{|x|}\ \ (x\in S_R),\qquad \nu(x)=-\frac{x}{|x|}\ \ (x\in S_\varepsilon,\ \text{boundary of }A_{\varepsilon,R});$$

(b) [Spheres] each $S_r$ is a compact embedded $C^1$ (indeed $C^\infty$) hypersurface in the sense of [[def-surface-integral-on-a-compact-c-one-hypersurface]] with two-sided unit normals $\pm x/|x|$, and the boundary components $S_\varepsilon,S_R$, each subdivided into six compact signed-maximal-coordinate graph faces $F_{r,k,\sigma}:=\{x\in S_r:\sigma x_k\ge |x_j|\text{ for all }j\}$ ($k=1,2,3$, $\sigma=\pm1$), with the compact edge set consisting of their seams $\sigma x_k=|x_j|$ for $j\ne k$, give a finite piecewise $C^1$ presentation of $A_{\varepsilon,R}$ in the sense of [[def-bounded-piecewise-c-one-euclidean-domain]];

(c) [Consequences used downstream] the divergence theorem and Green's first identity of [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]] and [[cor-first-green-identity-on-a-bounded-c-one-domain]] apply on $B_R$ and on $A_{\varepsilon,R}$ with the outward normals of (a), and $S_r$ carries a finite Borel surface measure with the standard graph charts.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, reals $0<\varepsilon<R$, the sets $B_R,\overline B_R,A_{\varepsilon,R},S_r$ above, and the Euclidean norm $N(x)=|x|$ on $\mathbb R^3$.

[F1] The Euclidean norm is continuous, and a map between metric spaces is continuous exactly when preimages of open sets are open ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[thm-metric-continuity-characterisations]], [[def-metric-topology]], [[def-metric-continuity]]).

[F2] The interior, closure, and boundary of a subset of a metric space are the sets determined by its open balls; $B_R$ is the open ball of radius $R$ and $\overline B_R$ its closed ball ([[def-metric-interior-closure-boundary]], [[def-metric-ball]]).

[F3] Real powers are smooth where defined, with the chain, product and algebra rules for derivatives and the converse characterization of differentiable maps by continuous partial derivatives ([[thm-real-power-continuity-and-derivatives]], [[lem-derivative-of-a-power]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-total-derivative-in-euclidean-space]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F4] A bounded $C^1$ domain is a nonempty bounded open set whose boundary is locally, after a rigid coordinate change, a graph $z=h(y)$ of a $C^1$ function with the set locally the subgraph; the outward normal in these coordinates is $\nu=(-Dh,1)/\sqrt{1+|Dh|^2}$, transported by the orthogonal coordinate map, and $|\cdot|$ enters through the Euclidean inner product ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], [[def-euclidean-inner-product]]).

[F5] A subset of $\mathbb R^3$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]], [[def-metric-compactness]]).

[F6] The chart surface integral on a compact embedded $C^1$ hypersurface is a finite Borel measure independent of charts and partitions; in graph coordinates its density is $\sqrt{1+|Dh|^2}$, and outward unit normals agree on chart overlaps ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]]).

[F7] A finite piecewise $C^1$ presentation of a bounded open set consists of compact faces covering its boundary, each inside a regular $C^1$ patch and carrying the actual outward normal off the compact edge set $E$, with $S_j\cap E$ of surface measure zero, and $E$ containing the relative face boundaries and all overlaps ([[def-bounded-piecewise-c-one-euclidean-domain]]).

[F8] For a bounded Borel function on a compact parameter rectangle the iterated planar integral of its indicator vanishes when almost every section is a null set, and coordinate hyperplanes and degenerate boxes are Lebesgue null; the Borel product sigma-algebra of $\mathbb R^2$ is the Euclidean one and the product measure agrees with $\lambda_2$ there ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]).

[F9] The nonnegative integral is monotone and homogeneous and the integral of an indicator is the measure of the set ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F10] On a bounded $C^1$ domain the divergence theorem holds for $C^1$ fields up to the closure and Green's first identity holds for real $u\in C^2(\overline\Omega)$, $v\in C^1(\overline\Omega)$, both with the outward normal on each boundary component ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]], [[cor-first-green-identity-on-a-bounded-c-one-domain]]).

## Proof

**Proof technique:** direct.

1.1 Because $N$ is continuous and $(0,R)$ and $(\varepsilon,R)$ are open, $B_R=N^{-1}\bigl((-\infty,R)\bigr)$ and $A_{\varepsilon,R}=N^{-1}\bigl((\varepsilon,R)\bigr)$ are open, nonempty (they contain the origin, respectively a point of norm $(\varepsilon+R)/2$) and bounded, being contained in the closed ball of radius $R$ ([F1], [F2]). If $|x|>R$, continuity of $N$ gives a ball about $x$ on which $|y|>R$, so no point outside $\overline B_R$ is a limit of points of $B_R$; if $|x|=R$, the points $\bigl(1-1/n\bigr)x$ lie in $B_R$ and converge to $x$; hence the closure of $B_R$ is $\overline B_R$ and, since $B_R$ is open, its boundary is $S_R$ ([F1], [F2]). The same argument with $N^{-1}\bigl((\varepsilon,R)\bigr)$, together with the identification of its closure with $\{x:\varepsilon\le|x|\le R\}$, gives that the boundary of $A_{\varepsilon,R}$ is $S_\varepsilon\cup S_R$, and both sets have nonempty interior equal to themselves because they are open. [given, F1, F2]

2.1 Fix $k\in\{1,2,3\}$ and $\sigma\in\{\pm1\}$, let $z=\sigma x_k$ and let $y$ collect the two remaining coordinates in a fixed order, labelled $y=(y_1,y_2)$; the map $x\mapsto(y,z)$ is a rigid change of coordinates (a permutation with one sign change). For $r>0$ put $U_{r,k,\sigma}:=\{x:\sigma x_k>r/(2\sqrt 3)\}$ and $h(y):=\sqrt{R^2-|y|^2}$, which is $C^\infty$ on the open set $|y|<R$ with $Dh(y)=-y/h(y)$ ([F3]). On $U_{R,k,\sigma}\cap\{|y|<R\}$ one has $z>0$ and $$|x|^2<R^2\iff z^2<R^2-|y|^2\iff z<h(y),$$ so $S_R\cap U_{R,k,\sigma}$ is the graph $z=h(y)$ over the open parameter set $V_R:=\{y:|y|<R,\ h(y)>R/(2\sqrt3)\}$ and $B_R\cap U_{R,k,\sigma}\cap\{|y|<R\}$ is its subgraph; this is the local presentation required of a bounded $C^1$ domain ([F4]). The graph normal of [F4] is $$\frac{(-Dh(y),1)}{\sqrt{1+|Dh(y)|^2}}=\frac{(y,h(y))}{R},$$ because $-Dh=y/h$ and $1+|Dh|^2=R^2/h^2$; transporting back through the rigid coordinate map gives $\nu(x)=x/R=x/|x|$ on $S_R$. The six coordinate neighbourhoods $U_{R,k,\sigma}$ cover the sphere $S_R$: for $x\ne0$ some coordinate satisfies $|x_k|\ge|x|/\sqrt3$, so with $\sigma:=\operatorname{sign}(x_k)$ one has $\sigma x_k=|x_k|\ge R/\sqrt3>R/(2\sqrt3)$ whenever $|x|\ge R$, and in particular the sphere $S_R$ is covered by the six graph patches. [step 1.1, F3, F4]

3.1 Fix again $k,\sigma$ and put $h_\varepsilon(y)=\sqrt{\varepsilon^2-|y|^2}$ on $|y|<\varepsilon$. In the coordinates $(y,z)$ of step 2.1 the complement of the closed ball satisfies $z>h_\varepsilon(y)$ inside the patch $U_{\varepsilon,k,\sigma}$ with $|y|<\varepsilon$, and the second rigid change $w=-z$ turns this into the subgraph $w<-h_\varepsilon(y)$ of the smooth function $g(y):=-h_\varepsilon(y)$ with $Dg(y)=y/h_\varepsilon(y)$ ([F3]). The graph normal of [F4] in the $(y,w)$ coordinates is $$\frac{(-Dg(y),1)}{\sqrt{1+|Dg(y)|^2}}=\frac{(-y,h_\varepsilon(y))}{\varepsilon},$$ and transporting back through $w=-\sigma x_k$ gives $\nu(x)=-x/\varepsilon=-x/|x|$ on $S_\varepsilon$. Near a point of $S_\varepsilon$ the ball $B_R$ occupies a full neighborhood because $|x|=\varepsilon<R$, so $A_{\varepsilon,R}=B_R\setminus\overline B_\varepsilon$ is locally exactly the subgraph just described, while near a point of $S_R$ it is locally the subgraph of $h$ from step 2.1 with normal $x/|x|$. Hence $A_{\varepsilon,R}$ is a bounded $C^1$ domain with boundary $S_\varepsilon\cup S_R$ and the stated outward normals ([F4]). [step 2.1, F3, F4]

4.1 Each $S_r$ is closed, being the preimage of the closed set $\{r\}$ under the continuous norm, and bounded, hence compact ([F1], [F5]). The restrictions of the six maps $y\mapsto(y,h_r(y))$ from steps 2.1 and 3.1, composed with the inverse rigid coordinate maps, are regular injective $C^\infty$ parametrizations of the open patches $S_r\cap U_{r,k,\sigma}$ with $C^\infty$ transitions (each transition is the coordinate projection from one graph chart composed with the other smooth graph parametrization) ([F3]). Therefore each $S_r$ is a compact embedded $C^1$ hypersurface in the sense of [F6], and the two graph normal computations of steps 2.1 and 3.1 exhibit both unit normals $\pm x/|x|$: the positive sign from the ball chart and the negative sign from the complement chart, continuously across overlaps. [step 2.1, step 3.1, F1, F3, F5, F6]

5.1 For $r=\varepsilon,R$ define the twelve compact faces $F_{r,k,\sigma}=\{x\in S_r:\sigma x_k\ge|x_j|\ \text{for all }j\}$, $k=1,2,3$, $\sigma=\pm1$. They cover $S_r$: choose $k$ with $|x_k|=\max_j|x_j|$; then $x_k\ne0$ and $\sigma=\operatorname{sign}(x_k)$ gives $\sigma x_k\ge|x_j|$ for all $j$. Each $F_{r,k,\sigma}$ is closed in the compact $S_r$, hence compact, and on it $\sigma x_k\ge r/\sqrt3>r/(2\sqrt3)$, so it is contained in the single regular patch $U_{r,k,\sigma}$ of steps 2.1-3.1 with parameter set contained in the compact set $\{|y|\le r\sqrt{2/3}\}\subset\{|y|<r\}$ ([F5]). [step 4.1, F5]

6.1 Let $E$ be the union over $r=\varepsilon,R$ of the seams $\{x\in S_r:\ \sigma x_k=|x_j|\ \text{for some }j\ne k,\ \sigma=\pm1\}$, a finite union of closed subsets of the compact spheres, hence compact. Every relative boundary point of a face $F_{r,k,\sigma}$ has $\sigma x_k=|x_j|$ for some $j$, and every overlap $F_{r,k,\sigma}\cap F_{r,k',\sigma'}$ with $(k,\sigma)\ne(k',\sigma')$ lies in such a seam, so $E$ contains all relative face boundaries and all overlaps ([F7]). To see that $F_{r,k,\sigma}\cap E$ has zero surface measure, work in the chart $z=\sigma x_k=h_r(y)$ of $F_{r,k,\sigma}$: a seam involving the maximal coordinate reads either $|y_1|=h_r(y)$ or $|y_2|=h_r(y)$. The first is $y_1^2=(r^2-y_2^2)/2$, the second $y_2^2=(r^2-y_1^2)/2$. For either case take the other coordinate as the fixed section parameter: the seam meets the vertical line in at most two points, a finite union of singletons and hence a $\lambda_1$-null set ([F8]); Fubini applied to the bounded Borel indicator on a containing rectangle gives the planar measure of these parameter sets as zero ([F8]). The other seams in $E$ equate the absolute values of the two nonmaximal coordinates; in this face chart they lie on $y_1=\pm y_2$, whose sections are again finite. The same argument gives planar measure zero for them. Thus the full finite union of seams meeting this face is planar null. The graph density $\sqrt{1+|Dh_r|^2}=r/h_r$ is continuous and bounded on the compact parameter set $\{|y|\le r\sqrt{2/3}\}$, so integrating it against the indicator of a planar null set gives zero ([F9]); by the chart-independence of the surface measure this says exactly that $S_j\cap E$ has zero surface measure in each face, as required by [F7]. [step 5.1, F6, F7, F8, F9]

7.1 Statement (a) is steps 2.1 and 3.1; statement (b) is steps 4.1, 5.1 and 6.1, the twelve compact faces with their null compact seam set satisfying exactly the requirements of [F7] for the annulus $A_{\varepsilon,R}$, whose exposed faces carry the outward normals computed in steps 2.1 and 3.1 off $E$. Finally, (c): the divergence theorem and Green's first identity of [F10] apply on $B_R$ and on $A_{\varepsilon,R}$ because both are bounded $C^1$ domains with the outward normals of (a), and $S_r$ carries a finite Borel surface measure with the standard graph charts by [F6]. [step 2.1, step 3.1, step 4.1, step 6.1, F6, F7, F10] ∎
