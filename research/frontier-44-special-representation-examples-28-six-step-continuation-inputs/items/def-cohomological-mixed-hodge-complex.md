---
id: def-cohomological-mixed-hodge-complex
kind: definition
title: "Cohomological mixed Hodge complexes"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rational-mixed-hodge-structure, def-cochain-complex-in-an-abelian-category, def-filtered-chain-complex, def-filtered-chain-map, def-quasi-isomorphism, thm-modules-over-a-ring-form-an-abelian-category]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Pierre Deligne, Theorie de Hodge III, Publ. Math. IHES 44 (1974) 5-77"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0.pdf"
      locator: "SS8.1.1-8.1.6, printed pp. 28-29: Hodge complexes of weight n with axioms (GH1)-(GH2), mixed Hodge complexes with axiom (GHM), and the cohomological versions (GHC)/(CHMC) on a space X; (1.1.2) for the shifted filtration"
    - title: "Andrzej Weber, Notes on Mixed Hodge Structures, Srni January 2005 (author-hosted, 15 pp.)"
      url: "https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf"
      locator: "(2.3.1), printed p. 7: the mixed Hodge complex as two filtered complexes, a filtered quasi-isomorphism and the graded pure-Hodge axiom; (2.4.1), printed p. 7: the shifted weight filtration on cohomology"
    - title: "Donu Arapura, Mixed Hodge Structures Associated to Geometric Variations, in Cycles, Motives and Shimura Varieties (TIFR, Narosa 2010), pp. 1-34"
      url: "https://www.math.purdue.edu/~dvb/preprints/tifr.pdf"
      locator: "SS4.5, printed pp. 29-30: the cohomological mixed Hodge complex axioms, Proposition 4.12 and Corollary 4.13"
---

## Definition

A **rational cohomological mixed Hodge complex** consists of

(a) a bounded-below cochain complex $K_{\mathbb Q}$ of $\mathbb Q$-vector
spaces with an increasing filtration $W$ by subcomplexes, finite on each
cochain group;

(b) a cochain complex $K_{\mathbb C}$ of $\mathbb C$-vector spaces with an
increasing filtration $W$ by subcomplexes and a decreasing filtration $F$ by
subcomplexes, again finite on each cochain group;

(c) a morphism of complexes
$\alpha\colon K_{\mathbb Q}\otimes_{\mathbb Q}\mathbb C\to K_{\mathbb C}$
compatible with the weight filtrations, such that for every $w$ the induced map
$\operatorname{Gr}^W_w\alpha$ is a quasi-isomorphism,

subject to the following axiom: for every integer $w$ the weight-graded
complex $\operatorname{Gr}^W_wK$ has finite-dimensional cohomology, its
differential (induced by $d_K$) is strict for the induced filtration $F$, and
for every $r$ the induced filtration $F$ on
$H^r(\operatorname{Gr}^W_wK_{\mathbb C})$, together with the induced rational
comparison
$H^r(\operatorname{Gr}^W_wK_{\mathbb Q})\otimes_{\mathbb Q}\mathbb C\to
H^r(\operatorname{Gr}^W_wK_{\mathbb C})$, is a pure Hodge structure of weight
$r+w$ ([[def-rational-mixed-hodge-structure]]).

Here a cochain complex is a complex in the sense of
[[def-cochain-complex-in-an-abelian-category]], a filtration by subcomplexes is
a filtered complex in the sense of [[def-filtered-chain-complex]], a morphism
compatible with the weight filtrations is a filtered chain map in the sense of
[[def-filtered-chain-map]], quasi-isomorphism means
[[def-quasi-isomorphism]], and finiteness on a cochain group $K^n$ means
$W_aK^n=0$ for all sufficiently negative $a$ and $W_aK^n=K^n$ for all
sufficiently positive $a$, with bounds depending on $n$; dually $F^pK^n=K^n$
for $p\ll0$ and $F^pK^n=0$ for $p\gg0$.

**The weight filtration on cohomology** is the shifted image filtration
$$W_mH^n(K):=\operatorname{im}\bigl(H^n(W_{m-n}K)\to H^n(K)\bigr).$$
The shift is essential: it is what makes the axiom's weight $r+w$ on the graded
complexes compatible with the weight of $H^n$, and pole-count weight on a
logarithmic complex is not the weight on its cohomology. The differential
strictness in the axiom is Deligne's condition (GH1); the equivalent
formulation that the $F$-spectral sequence of the graded complex degenerates at
its first page is recorded in the sources but is neither asserted nor used
here, so no degeneration theorem enters this definition.

**Morphisms and the sheaf case.** A morphism of cohomological mixed Hodge
complexes is a pair of chain maps $K_{\mathbb Q}\to L_{\mathbb Q}$ and
$K_{\mathbb C}\to L_{\mathbb C}$ compatible with both filtrations and with the
comparisons; compatible filtered homotopies are permitted. The same
definitions apply to bounded-below complexes of sheaves on a topological space
when the complexes are replaced by their derived global sections and the
resolutions used preserve the graded pieces; the existence of such resolutions
for the concrete complexes used later is proved where those complexes are
constructed, not here.

## Source notes

Deligne III (8.1.1)-(8.1.6) is the primary source; the concrete formulation
above unpacks Deligne's derived-category comparison
$\alpha\colon(K_{\mathbb C},W)\to(K_{\mathbb Q},W)\otimes\mathbb C$ into a
graded quasi-isomorphism, which for degreewise finite weight filtrations is the
same datum. [Weber, (2.3.1) and (2.4.1)](https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf)
and Arapura, Section 4.5, state the same axioms
(GH1)/(GHM) in the vector-space and sheaf settings. The shift in the displayed
weight filtration is the convention (1.1.2) used throughout this page. The
definition itself uses no choice principle.
