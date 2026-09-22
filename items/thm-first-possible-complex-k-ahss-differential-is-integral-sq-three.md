---
id: thm-first-possible-complex-k-ahss-differential-is-integral-sq-three
kind: theorem
title: The first possible complex K-theory AHSS differential is integral Sq-three
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-complex-k-theory-ahss, thm-naturality-and-edge-maps-of-the-ahss, thm-complex-bott-periodicity, lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three, lem-ku-representability-and-skeletal-postnikov-d-three-comparison, prop-steenrod-square-normalization-instability-and-top-square, def-steenrod-squares-from-cup-i-products, def-bockstein-connecting-operation, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from complex K-theory."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Caleb Ji, The Atiyah–Hirzebruch Spectral Sequence, Proposition 3.12, printed p. 12"
      url: https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf
      locator: "Proposition 3.12, printed p. 12"
    - title: "J. F. Adams, Stable Homotopy and Generalised Homology, Proposition 16.6, printed pp. 391–393"
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Adams-SHGH-latex2.pdf
      locator: "Proposition 16.6, printed pp. 391–393"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. In the complex topological $K$-theory Atiyah–Hirzebruch spectral
sequence of [[cor-complex-k-theory-ahss]], the first two possible differentials
are
$$d_2=0,\qquad d_3=Sq^3_{\mathbb Z}=\beta_{\mathbb Z}\,Sq^2\,\rho_2,$$
with Bott-periodic translates of this formula on all even coefficient rows. Here
$\rho_2$ is reduction modulo two, $Sq^2$ is the Steenrod square and
$\beta_{\mathbb Z}$ is the integral Bockstein of
$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to0$; the operation is
defined on integral cohomology by
$Sq^3_{\mathbb Z}=\beta_{\mathbb Z}Sq^2\rho_2:H^n(X;\mathbb Z)\to H^{n+3}(X;\mathbb Z)$.

## Facts & Assumptions

[A1] Assume AC. For a finite CW complex the $K$-AHSS has $E_2^{p,q}=H^p(X;\mathbb Z)$ for even $q$, $E_2^{p,q}=0$ for odd $q$, and $d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}$ ([[cor-complex-k-theory-ahss]]).

[A2] Under the $K$-AHSS, for $p\geq1$ the differential $d_3$ is read from the relevant $k_{p+3}$ Postnikov layer of the total-degree representing space $ku_{p+q}$; after Bott translation to a nonpositive coefficient row, this is the stable operation $\beta_{\mathbb Z}Sq^2\rho_2$ ([[lem-ku-representability-and-skeletal-postnikov-d-three-comparison]], [[lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three]]).

[A3] Steenrod squares vanish above the degree: for $x\in H^n(X;\mathbb F_2)$ one has $Sq^kx=0$ when $k>n$, so in particular $Sq^2(\rho_2y)=0$ for $y\in H^0(X;\mathbb Z)$ ([[prop-steenrod-square-normalization-instability-and-top-square]], [[def-steenrod-squares-from-cup-i-products]]).

[A4] A finite CW complex has finitely many path components, each a connected finite CW complex with $H^0(X_a;\mathbb Z)=\mathbb Z$. Naturality gives restriction maps of the $K$-AHSS along the component inclusions ([[thm-naturality-and-edge-maps-of-the-ahss]]).

[A5] Bott periodicity gives natural isomorphisms $K^q(X)\cong K^{q-2}(X)$ and identifies all even coefficient rows with the row $K^0(*)=\mathbb Z$ ([[thm-complex-bott-periodicity]]).

## Proof

**Proof technique:** direct.

**Given:** Assume AC, a finite CW complex $X$, and the $K$-AHSS of [A1].

1.1 The differential $d_2$ has bidegree $(2,-1)$: it maps the even coefficient row $q$ to the odd row $q-1$, which is zero by the coefficient computation; hence $d_2=0$ and $E_3=E_2$. [A1, A5, given]

1.2 Let $X=\coprod_{a=1}^mX_a$ be the finite decomposition into connected components. On each $X_a$, every class of $H^0(X_a;\mathbb Z)=\mathbb Z$ is pulled back from the point, so naturality identifies its $d_3$ with the pullback of $d_3$ on the point; the latter has target $H^3(\mathrm{pt};\mathbb Z)=0$. For $y\in H^0(X;\mathbb Z)$, naturality along $X_a\hookrightarrow X$ therefore makes every restriction of $d_3y\in H^3(X;\mathbb Z)$ zero. Every singular simplex of a disjoint union lies in one component, so restriction gives an isomorphism of singular cochain complexes $C^*(X;\mathbb Z)\cong\prod_{a=1}^mC^*(X_a;\mathbb Z)$ and hence an injective map $H^3(X;\mathbb Z)\to\prod_aH^3(X_a;\mathbb Z)$. Thus $d_3y=0$ without assuming a componentwise decomposition of the entire AHSS. [A1, A4, given]

1.3 For $p\geq1$ and any even coefficient row, the comparison and $k$-invariant lemmas identify $d_3$ on $E_3^{p,q}$ with $\beta_{\mathbb Z}Sq^2\rho_2$, transported along the Bott identification of the coefficient rows. [A2, A5, given]

2.1 On the $p=0$ row the operation $\beta_{\mathbb Z}Sq^2\rho_2$ also vanishes, since $Sq^2$ is zero on classes of degree zero by instability; thus the formula $d_3=\beta_{\mathbb Z}Sq^2\rho_2$ holds on the $p=0$ row as well. [A3, step 1.2]

3.1 Combining steps 1.1, 1.3 and 2.1 gives $d_2=0$ and $d_3=\beta_{\mathbb Z}Sq^2\rho_2$ on every even coefficient row, with the Bott-periodic translates supplied by [A5]; the sign ambiguity of the long exact sequence convention is immaterial because the operation has order two. [A5, step 1.1, step 1.3, step 2.1]

4.1 step 3.1 proves the asserted vanishing of $d_2$ and the identification of $d_3$ with $Sq^3_{\mathbb Z}=\beta_{\mathbb Z}Sq^2\rho_2$ on all even coefficient rows. [step 3.1] ∎

## Source notes

Compare [Ji](https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf), Proposition 3.12, printed p. 12, for the statement $d_3=\widetilde{Sq}^3$ and the description of the operation as the composite of reduction mod two, $Sq^2$ and the integral Bockstein; the normalization of the operation is supplied by [Adams](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Adams-SHGH-latex2.pdf), Proposition 16.6, printed pp. 391–393.
