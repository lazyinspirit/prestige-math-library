---
id: "thm-grothendieck-spectral-sequence"
kind: "theorem"
title: "Grothendieck spectral sequence"
deps: ["lem-the-two-filtrations-have-e-two-pages-rpg-rqf-and-the-derived-composite-edge", "thm-cartan-eilenberg-injective-resolutions-exist", "lem-cartan-eilenberg-comparisons-preserve-both-filtrations", "thm-injective-comparison-map-exists", "thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy", "def-dependent-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Theorem 5.8.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "Stacks Project, Tag 015N"
      url: "https://stacks.math.columbia.edu/download/derived.pdf"
landmark: true
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Let $F:\mathcal A\to\mathcal B$ and $G:\mathcal B\to\mathcal C$ be additive left-exact functors between abelian categories, with enough injectives in $\mathcal A$ and $\mathcal B$. Suppose $F$ carries injectives to $G$-acyclic objects. With supplied injective and Cartan–Eilenberg resolutions and compatible comparison data, there is a natural first-quadrant spectral sequence
$$E_2^{p,q}=R^pG(R^qF(A))\quad\Longrightarrow\quad R^{p+q}(GF)(A).$$
The differential has bidegree $(r,1-r)$. Convergence is strong with finite decreasing filtration $F^0H^n=H^n$, $F^{n+1}H^n=0$ and $\operatorname{gr}^pH^n=E_\infty^{p,n-p}$. Its edges are $R^nG(F(A))\to R^n(GF)(A)\to G(R^nF(A))$. Alternatively DC supplies the countable choices for each construction in the ambient-set convention of the existence theorem; no global simultaneous choice over all objects is asserted.

## Facts & Assumptions

**Given:** The functors, categories and acyclicity/data hypotheses above.

[F1] Cartan–Eilenberg resolutions exist with the stated supplied-choice or DC qualification ([[thm-cartan-eilenberg-injective-resolutions-exist]]).

[F2] The two composite filtrations identify $E_2$, the derived-composite target and its canonical edges ([[lem-the-two-filtrations-have-e-two-pages-rpg-rqf-and-the-derived-composite-edge]]).

[F3] Object maps extend to injective resolutions, uniquely up to cochain homotopy under DC ([[thm-injective-comparison-map-exists]], [[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]]).

[F4] Cartan–Eilenberg comparisons induce canonical maps from horizontal-first $E_2$ with DC or supplied comparison data ([[lem-cartan-eilenberg-comparisons-preserve-both-filtrations]]).

## Proof

1.1 Take the supplied injective resolution $A\to I$ and a Cartan–Eilenberg resolution $F(I)\to J$, or obtain the latter by F1. Apply $G$ to $J$ and use the filtration by its resolution degree. F2 gives $E_2^{p,q}=R^pG(R^qF(A))$, identifies its total target with $R^{p+q}(GF)(A)$, and identifies both edge maps. All indices are nonnegative. [F1, F2]

2.1 The finite total diagonals of $GJ$ give exactly the finite target filtration in F2: in degree $n$ only resolution degrees $0,\ldots,n$ occur. The associated graded is its stationary page, with differential bidegree $(r,1-r)$, so this is strong convergence, not just an asserted target. In degree zero the sole quotient is $GF(A)$; zero objects and zero filtration pieces require no separate reconstruction. [F2, step 1.1]

3.1 For $A\to A'$ lift to $I\to I'$ using F3 or supplied data, apply $F$, then lift to $J\to J'$ by F4. This preserves resolution degree and gives a spectral-sequence map. On $E_2$ it is the map $R^pG(R^qF(A))\to R^pG(R^qF(A'))$. Different injective comparison maps are homotopic, so additivity of $F$ gives the same maps on $R^qF$, and hence on $E_2$; different Cartan–Eilenberg lifts give the same $E_2$ map by F4. Equality propagates to every later page by taking homology. On the target, additivity of $GF$ preserves the original injective homotopy and the augmentation comparison in F2 intertwines the maps, so the target maps also agree. Identity and composition now establish naturality. [F2, F3, F4, step 1.1, step 2.1] ∎
