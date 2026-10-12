---
id: lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights
kind: lemma
title: "Mixed Hodge complex cohomology and simplicial weights"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cohomological-mixed-hodge-complex, lem-morphisms-of-mixed-hodge-structures-are-strict, thm-the-cohomological-filtered-complex-construction, def-cochain-complex-in-an-abelian-category]
justified_by: []
aliases: []
landmark: false
dependency_level: 3
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pierre Deligne, Theorie de Hodge III, Publ. Math. IHES 44 (1974) 5-77"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0.pdf"
      locator: "Scholie (8.1.9), printed p. 30: on the terms of the spectral sequence of (K_C,W) the recurrent and the two direct filtrations defined by F coincide, W[n] and F define a mixed Hodge structure on H^n(K), the differentials respect the Hodge bigrading, and the sequence degenerates at E_2; Theorem (8.1.15) with proof (8.1.17), printed pp. 32-34: DG and cosimplicial mixed Hodge complexes, the L-filtration, E_2-degeneration and Gr^L_p H^n = E_2^{p,n-p}"
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
      locator: "SS1.3.8-1.3.17, printed pp. 16-19: direct and recurrent filtrations on the pages, and the criterion that strictness of the differentials identifies the recurrent filtration with the filtration induced on the abutment; SS3.2.5-3.2.11, printed pp. 35-37: the weight spectral sequence of a cohomological complex, its E_2-degeneration and the induced mixed Hodge structure"
    - title: "Andrzej Weber, Notes on Mixed Hodge Structures, Srni January 2005 (author-hosted, 15 pp.)"
      url: "https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf"
      locator: "(2.4.1), printed p. 7: the weight sequence degenerates at E_2 and the shifted filtration W_l H^n = image H^n(W_{l-n}) carries a mixed Hodge structure"
    - title: "F. El Zein, Hodge Structures and Mixed Hodge Structures, University of Pennsylvania course notes (June 24, 2010)"
      url: "https://www2.math.upenn.edu/~siegelch/Notes/ElZein.pdf"
      locator: "SS3.2-3.3, Definitions 3.3-3.5 and Theorem 3.6, printed pp. 4-5: mixed Hodge complexes and the mixed Hodge structure on their cohomology"
    - title: "Donu Arapura, Mixed Hodge Structures Associated to Geometric Variations, in Cycles, Motives and Shimura Varieties (TIFR, Narosa 2010), pp. 1-34"
      url: "https://www.math.purdue.edu/~dvb/preprints/tifr.pdf"
      locator: "SS4.5, printed pp. 29-30: Proposition 4.12 and Corollary 4.13, the mixed Hodge structure on the cohomology of a cohomological mixed Hodge complex"
---

## Statement

(i) Let $K$ be a rational cohomological mixed Hodge complex
([[def-cohomological-mixed-hodge-complex]]). Then for every $n$ the vector
space $H^n(K_{\mathbb Q})$ carries a mixed Hodge structure whose weight
filtration is the shifted image filtration
$W_mH^n(K)=\operatorname{im}(H^n(W_{m-n}K)\to H^n(K))$ and whose Hodge
filtration is the image filtration
$F^pH^n(K_{\mathbb C})=\operatorname{im}(H^n(F^pK_{\mathbb C})\to H^n(K_{\mathbb C}))$.
In the weight spectral sequence $E_1^{p,q}=H^{p+q}(\operatorname{Gr}^W_{-p}K)$
one has $E_1^{p,q}$ pure of weight $q$, the sequence degenerates at $E_2$, and
$\operatorname{Gr}^W_mH^n(K)\cong E_2^{n-m,m}$ compatibly with the Hodge
filtrations. A morphism of cohomological mixed Hodge complexes induces, on
every $H^n$, a morphism of the resulting mixed Hodge structures.

(ii) Let $K^\bullet$ be a cosimplicial system of weight-zero rational Hodge
complexes concentrated in nonnegative cohomological degrees: cochain complexes
$K^{p,q}$ with coface maps and an internal differential satisfying the
cosimplicial identities, with $K^{p,q}=0$ unless $p,q\ge0$, whose differentials
are strict for the Hodge filtration, and with $H^q(K^p)$, together with the
induced $F$ and the rational comparison, a pure Hodge structure of weight $q$
for all $p,q$ (the axioms (GH1)-(GH2) of a cohomological Hodge complex of
weight zero). Form its simple
complex $sK$ with the standard total differential and the increasing filtration
$L$ by cosimplicial degree, $L_{-p}sK^n=\bigoplus_{i\ge p}K^{i,n-i}$. Then $sK$
is a rational cohomological mixed Hodge complex for the filtration $L$ and the
Hodge filtrations of the $K^p$, the cosimplicial spectral sequence
$E_1^{p,q}=H^q(K^p)\Rightarrow H^{p+q}(sK)$ degenerates at $E_2$, and
$\operatorname{Gr}^W_qH^n(sK)\cong E_2^{n-q,q}$; consequently all weights of
$H^n(sK)$ are at most $n$.

## Facts & Assumptions

**Given:** A rational cohomological mixed Hodge complex $K$ with its axiom: for
every $w$, $\operatorname{Gr}^W_wK$ has finite-dimensional cohomology, its
differential is strict for the induced $F$, and $H^r(\operatorname{Gr}^W_wK)$
with its induced $F$ and rational comparison is a pure Hodge structure of
weight $r+w$ ([[def-cohomological-mixed-hodge-complex]]).

[F1] The cohomological filtered complex construction: for a cochain complex with a decreasing filtration by subcomplexes, degreewise finite, $E_1^{p,q}\cong H^{p+q}(\operatorname{gr}^pK)$ and the sequence naturally abuts to the decreasing image filtration with $E_\infty^{p,q}\cong\operatorname{gr}^pH^{p+q}(K)$; a filtered chain map induces compatible maps on all pages and on the abutments ([[thm-the-cohomological-filtered-complex-construction]]).

[F2] Morphisms of mixed Hodge structures are strict, their kernels, images and cokernels with induced or quotient filtrations are mixed Hodge structures, and a morphism from a structure of weights at least $q$ to one of weights at most $q'<q$ is zero because its image would be both pure of weight $q$ and pure of weight $q'$ ([[lem-morphisms-of-mixed-hodge-structures-are-strict]]).

[F3] A cochain complex has $d^{n+1}d^n=0$, so its differentials preserve every subcomplex filtration used below ([[def-cochain-complex-in-an-abelian-category]], [[def-cohomological-mixed-hodge-complex]]).

## Proof

**Proof technique:** direct.

1.1 (Weight spectral sequence and its first page.) Apply [F1] to $K_{\mathbb C}$ with the decreasing filtration $G^p:=W_{-p}K_{\mathbb C}$, a filtration by subcomplexes that is finite on each cochain group by the definition of a mixed Hodge complex. Its first page is $E_1^{p,q}\cong H^{p+q}(\operatorname{gr}^p_GK_{\mathbb C})=H^{p+q}(\operatorname{Gr}^W_{-p}K_{\mathbb C})$, and because the filtration is degreewise finite the sequence abuts to the image filtration with $E_\infty^{p,q}\cong\operatorname{gr}^p_GH^{p+q}(K_{\mathbb C})$; the same construction over $\mathbb Q$ carries the rational structure and the comparison morphism. By the axiom, the term $E_1^{p,q}$ with its induced $F$-filtration and rational comparison is a pure Hodge structure of weight $(p+q)+(-p)=q$. This is the weight spectral sequence of $K$. [F1, F3, given]

2.1 (Degeneration at $E_2$.) The differential $d_1$ is induced by the differential of $K_{\mathbb C}$ and by its rational counterpart, so it is complex-linear, preserves the rational structures and, because $F$ is a filtration by subcomplexes, preserves the Hodge filtration on the pages. Hence $d_1:E_1^{p,q}\to E_1^{p+1,q}$ is a morphism of the pure Hodge structures of weight $q$ of step 1.1, and by [F2] it is strict, with kernel, image and cokernel carrying mixed Hodge structures; $E_2^{p,q}=\ker d_1/\operatorname{im}d_1$ is then pure of weight $q$, being a subquotient of the pure weight-$q$ structure $E_1^{p,q}$. Inductively each $E_r^{p,q}$, $r\ge2$, is pure of weight $q$: since $d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}$ preserves the rational structure and $F$ and its target has weight $q-r+1\le q$, it is a morphism of mixed Hodge structures whose image, by [F2], is simultaneously a quotient of a pure weight-$q$ structure and a subobject of a pure weight-$(q-r+1)$ structure; for $r\ge2$ these weights differ, the image is zero, and therefore $d_r=0$ for every $r\ge2$, so $E_{r+1}=E_r$ and the weight spectral sequence degenerates at $E_2$ with $E_2=E_\infty$. [F1, F2, step 1.1, algebra]

3.1 (The graded pieces as $E_2$-terms.) Substituting $p=n-m$ and $q=m$ into the abutment of step 1.1 gives $\operatorname{Gr}^{n-m}_GH^n(K)=\operatorname{im}(H^n(W_{m-n}K))/\operatorname{im}(H^n(W_{m-n-1}K))=W_mH^n(K)/W_{m-1}H^n(K)=\operatorname{Gr}^W_mH^n(K)$; since $E_\infty=E_2$ by step 2.1, this is an isomorphism $\operatorname{Gr}^W_mH^n(K)\cong E_2^{n-m,m}$ of rational vector spaces, natural in the complex. This identifies the graded pieces of the shifted weight filtration with the second-page terms of the weight spectral sequence. [F1, step 1.1, step 2.1]

4.1 (Filtered compatibility of morphisms.) A morphism of cohomological mixed Hodge complexes is a pair of filtered chain maps compatible with the comparisons; by the naturality in [F1] it induces maps on every page of the weight spectral sequences and on their abutments, commuting with the identifications of step 3.1 and with the rational structures, and it maps $W_{m-n}K$ into $W_{m-n}L$ and $F^pK_{\mathbb C}$ into $F^pL_{\mathbb C}$, hence induces maps $W_mH^n(K)\to W_mH^n(L)$ and $F^pH^n(K_{\mathbb C})\to F^pH^n(L_{\mathbb C})$ on the image filtrations. These are the filtered maps underlying the functoriality clause of the statement. [F1, step 1.1, step 2.1]

4.2 (The cosimplicial case.) Let $K^\bullet$ be as in part (ii) and form $sK^n=\bigoplus_{p+q=n}K^{p,q}$ with the standard total differential; the cosimplicial identities and $d^2=0$ make it a cochain complex, and the filtration $L_\ell sK^n=\bigoplus_{i\ge-\ell}K^{i,n-i}$ is increasing, by subcomplexes, and finite on each $sK^n$ because $0\le p\le n$ in degree $n$. Its graded pieces are $\operatorname{Gr}^L_\ell sK\cong K^{-\ell}[\ell]$, so $H^r(\operatorname{Gr}^L_\ell sK)\cong H^{r+\ell}(K^{-\ell})$ is pure of weight $r+\ell$ by hypothesis, and the differential of each $K^p$ is strict for $F$ by the weight-zero Hodge complex hypothesis; the levelwise comparisons assemble into a comparison of $sK$ compatible with $L$ whose graded pieces are the given quasi-isomorphisms. Hence $sK$ is a rational cohomological mixed Hodge complex for the filtration $L$, and step 1.1-3.1 applied to it give degeneration of the weight spectral sequence at $E_2$ with $E_1^{p,q}=H^{p+q}(\operatorname{Gr}^L_{-p}sK)=H^q(K^p)$, which is the cosimplicial spectral sequence $E_1^{p,q}=H^q(K^p)\Rightarrow H^{p+q}(sK)$, and $\operatorname{Gr}^L_qH^n(sK)\cong E_2^{n-q,q}$. [F1, given, construct, step 1.1, step 2.1, step 3.1]

5.1 (Weights at most the degree.) In the situation of step 4.2 one has $K^{p,q}=0$ for $p<0$, so $E_1^{p,q}=H^q(K^p)=0$ for $p<0$ and hence $E_2^{n-q,q}=0$ whenever $q>n$; by step 4.2 the graded pieces $\operatorname{Gr}^L_qH^n(sK)$ therefore vanish for $q>n$, that is, all weights of $H^n(sK)$ are at most $n$. [step 3.1, step 4.2, algebra] ∎

## Remarks

**Open obligation.** The steps above prove the existence of the weight
filtration, the purity of the $E_1$- and $E_2$-terms, the degeneration at
$E_2$, the vector-space identifications of step 3.1 and 4.1, the filtered
compatibility of step 4.1 and the weight bound of step 5.1. They do **not**
prove that the image Hodge filtration makes $(H^n(K),W,F)$ a mixed Hodge
structure, nor that the identifications of step 3.1 and 4.1 are compatible
with the Hodge filtrations; the functoriality clause of part (i) and the Hodge
clauses of part (ii) are conditional on the same missing input. What that input
is: for a complex with a degreewise finite filtration $G$ and a second
filtration $F$ by subcomplexes whose differentials satisfy the strictness
axiom, the recurrent filtration on the stable page $E_\infty$ must be proved to
coincide with the filtration induced on the abutment by $F$ (equivalently, with
the direct filtrations); this is Deligne II (1.3.15)-(1.3.17), invoked in the
proofs of Scholie (8.1.9)(i) and of (3.2.5)(i), and its strict representative
correction is not available in the published library. Until that comparison is
supplied and independently audited, the mixed Hodge structure clause of part
(i), the Hodge-compatibility of the identifications, and every downstream step
that consumes them remain open obligations of this item.

## Source notes

Deligne III, Scholie (8.1.9), is the primary source for part (i); its proof
transposes the arguments of Deligne II (3.2.5)-(3.2.10) and uses the comparison
machinery (1.3.15)-(1.3.17) of Deligne II, which is recorded here as the open
obligation above rather than assumed. Theorem (8.1.15) with its proof (8.1.17)
is the source for the cosimplicial statement, including the identification
$\operatorname{Gr}^L_pH^n=E_2^{p,n-p}$ and the weight bound; the construction of
the simple complex and the verification of the mixed Hodge complex axioms are
carried out above rather than cited. Weber (2.4.1) and Arapura, Proposition 4.12
and Corollary 4.13, state the same conclusions. Nothing above uses a choice
principle or a splitting of a filtration over $\mathbb Q$ or $\mathbb R$.
