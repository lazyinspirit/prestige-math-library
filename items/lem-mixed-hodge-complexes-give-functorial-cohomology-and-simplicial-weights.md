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
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
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
      locator: "(2.4.1), printed p. 8: the weight sequence degenerates at E_2 and the shifted filtration W_l H^n = image H^n(W_{l-n}) carries a mixed Hodge structure"
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
weight zero). The Hodge filtration is finite on each cochain group; the coface
and codegeneracy maps are chain maps preserving it and commuting with the
levelwise rational comparisons. Form its simple
complex $sK$ with the standard total differential and the increasing filtration
$L$ by cosimplicial degree, $L_{-p}sK^n=\bigoplus_{i\ge p}K^{i,n-i}$. Then $sK$
is a rational cohomological mixed Hodge complex for the filtration $L$ and the
Hodge filtrations of the $K^p$, the cosimplicial spectral sequence
$E_1^{p,q}=H^q(K^p)\Rightarrow H^{p+q}(sK)$ degenerates at $E_2$, and
$\operatorname{Gr}^W_qH^n(sK)\cong E_2^{n-q,q}$; consequently all weights of
$H^n(sK)$ are at most $n$.

## Facts & Assumptions

**Given:** A rational cohomological mixed Hodge complex $K$ with its axiom: for every $w$, $\operatorname{Gr}^W_wK$ has finite-dimensional cohomology, its differential is strict for the induced $F$, and $H^r(\operatorname{Gr}^W_wK)$ with its induced $F$ and rational comparison is a pure Hodge structure of weight $r+w$ ([[def-cohomological-mixed-hodge-complex]]).

[F1] The cohomological filtered complex construction: for a cochain complex with a decreasing filtration by subcomplexes, degreewise finite, $E_1^{p,q}\cong H^{p+q}(\operatorname{gr}^pK)$ and the sequence naturally abuts to the decreasing image filtration with $E_\infty^{p,q}\cong\operatorname{gr}^pH^{p+q}(K)$; a filtered chain map induces compatible maps on all pages and on the abutments ([[thm-the-cohomological-filtered-complex-construction]]).

[F2] Morphisms of mixed Hodge structures are strict, their kernels, images and cokernels with induced or quotient filtrations are mixed Hodge structures, and a morphism from a structure of weights at least $q$ to one of weights at most $q'<q$ is zero: strictness gives $W_{q-1}$ of its image equal to zero and $W_{q'}$ of its image equal to the whole image, and $q'\le q-1$ forces the image to vanish ([[lem-morphisms-of-mixed-hodge-structures-are-strict]]).

[F3] A cochain complex has $d^{n+1}d^n=0$; the filtrations in the mixed Hodge complex datum are by subcomplexes and are therefore preserved by the differential ([[def-cochain-complex-in-an-abelian-category]], [[def-cohomological-mixed-hodge-complex]]).

## Proof

**Proof technique:** direct.

1.1 (First page and pure strictness.) Put $G^p=W_{-p}$ and apply [F1] over $\mathbb Q$ and $\mathbb C$. Then $E_0^{p,q}=\operatorname{Gr}^p_GK^{p+q}$, $E_1^{p,q}=H^{p+q}(\operatorname{Gr}^W_{-p}K)$ and $E_\infty^{p,q}=\operatorname{Gr}^p_GH^{p+q}(K)$ for the image filtration. The axiom gives $E_1^{p,q}$ a pure rational Hodge structure of weight $q$. We will use the following explicit pure case of [F2]: a rational map preserving $F$ also preserves $\bar F$; between pure structures of the same weight it therefore preserves each type $F^a\cap\bar F^b$, so it is strict for $F$, and its kernels, images and cokernels have the induced pure structures. If the source has weight $q$ and the target has weight $q'<q$, it is zero: a source vector of type $(a,b)$ with $a+b=q$ maps into $F^a\cap\bar F^b$ of the target, which is zero because no target type of total $q'$ has both indices at least $a,b$. Thus no mixed Hodge structure on the abutment is being assumed. [F1, F2, given, algebra]

1.2 (Strict representative correction.) For a complex $C$ with decreasing filtration $T$ by subcomplexes and $T$-strict differential, the sequence $0\to H^n(T^aC)\to H^n(C)\to H^n(C/T^aC)\to0$ is exact for every $a,n$. For injectivity, a cycle $x\in T^aC$ that is a boundary $dy$ in $C$ equals $dy'$ for some $y'\in T^aC$ by strictness. For surjectivity, a quotient cycle lifts to $x\in C$ with $dx\in T^aC$; strictness gives $y\in T^aC$ with $dy=dx$, so $x-y$ is a cycle with the same quotient class. If a cycle maps to a quotient boundary, subtract a lift of that boundary to obtain a cycle in $T^aC$, proving exactness at the middle. In particular $H(T^aC)$ identifies with the filtration induced on $H(C)$ by $T^a$. These corrections use only strictness of the differential on $C$. [F3, construct, algebra]

1.3 (Scalar extension.) Tensoring rational vector spaces with $\mathbb C$ preserves exact sequences, hence kernels, images, quotients and cohomology. Here is a finite argument that needs no basis of an arbitrary vector space. The field $\mathbb C$ is the directed union of its finite-dimensional rational subspaces $U$; tensor elements and the relations equating them involve finitely many coefficients, so $V\otimes\mathbb C$ is the directed union, in the tensor presentation, of the systems $V\otimes U$. On a fixed $U$, a finite rational basis identifies tensoring with a finite direct sum of copies of the given sequence, which is exact. A tensor in a kernel is represented at some $U$, and its vanishing in the target is witnessed at a larger finite-dimensional $U'$; exactness there supplies a preimage. Surjectivity follows by lifting the finitely many vector coefficients of a tensor. Thus the original tensor sequence is exact; applying this to cycles and boundaries gives the cohomology assertion. The same subquotient argument identifies the rational spectral-sequence pages after scalar extension with the pages of $K_{\mathbb Q}\otimes\mathbb C$, compatibly with their differentials. [construct, algebra]

2.1 (Exact filtered pages through $E_2$.) Fix a Hodge index $a$, and apply [F1] with the intersection and quotient $G$ filtrations to $A=F^aK_{\mathbb C}$, $B=K_{\mathbb C}$ and $C=B/A$. Their $E_0$ complexes form a short exact sequence $0\to E_0(A)\to E_0(B)\to E_0(C)\to0$: the first image in $G^pB/G^{p+1}B$ is $(F^aB\cap G^pB+G^{p+1}B)/G^{p+1}B$, exactly $F^aE_0(B)$, and the last term is its quotient. The mixed Hodge complex axiom says $d_0$ on $E_0(B)=\operatorname{Gr}^GK_{\mathbb C}$ is $F$-strict. Step 1.2 therefore gives a short exact sequence on $E_1$, with first image exactly $F^aE_1(B)$. Naturality of the page maps shows $d_1$ preserves this image for every $a$; its rational form then makes $d_1:E_1^{p,q}\to E_1^{p+1,q}$ a map of pure Hodge structures of weight $q$, strict by step 1.1. Apply step 1.2 again to the $E_1$ complexes to obtain exactness on $E_2$, with $E_2(A)$ identifying with the filtration induced on $E_2(B)=H(E_1(B),d_1)$. Denote this recursively induced filtration by $F_{\mathrm{rec}}$. The pure type decomposition of $E_1$ descends through its type-preserving $d_1$, so $E_2^{p,q}(B)$ with $F_{\mathrm{rec}}$ is pure of weight $q$. [F1, given, step 1.1, step 1.2, algebra]

3.1 (Higher differentials and exact stable pages.) Suppose the three page complexes are exact at page $r\ge2$, with $E_r(A)$ identifying with $F^a_{\mathrm{rec}}E_r(B)$ for every $a$, and $E_r^{p,q}(B)$ pure of weight $q$. Naturality shows $d_r$ preserves these images, hence $F_{\mathrm{rec}}$; it also preserves the rational structures. Its target $E_r^{p+r,q-r+1}$ has lower weight, so step 1.1 forces $d_r=0$. This zero map is strict, and step 1.2 applied to the exact triple of $E_r$ complexes gives exactness at $E_{r+1}$ and the recursive filtration identification. Since $d_r(B)=0$, injectivity of $E_r(A)\to E_r(B)$ and surjectivity onto $E_r(C)$ also give $d_r(A)=d_r(C)=0$. Starting from step 2.1 proves this induction for all $r\ge2$. Thus the weight sequence degenerates at $E_2$, and the three sequences for $A,B,C$ stabilize there; $E_\infty^{p,q}(B)=E_2^{p,q}(B)$ is pure of weight $q$ for the recurrent filtration. [F1, step 1.1, step 1.2, step 2.1, algebra]

4.1 (Recurrent filtration equals the abutment filtration.) By convergence and naturality [F1], the injective stable-page map $E_\infty(A)\to E_\infty(B)$ is $\operatorname{Gr}_G H(A)\to\operatorname{Gr}_G H(B)$ for the image $G$ filtrations on cohomology. A filtered linear map between finite filtered spaces whose graded map is injective is injective and strict: for any nonzero $x$, choose its largest decreasing-filtration index $p$; its nonzero graded class has nonzero image, so the image has this same index. This proves injectivity and, if the image of $x$ belongs to $G^p$, forces $x\in G^p$, which is strictness. The cohomology $G$ filtrations here are finite in each degree because $G$ is finite on the degree-$n$ cochain group, so the argument applies to $H^n(F^aK)\to H^n(K)$. Consequently its graded image is the induced filtration of the subspace $F^aH^n(K)=\operatorname{im}(H^n(F^aK)\to H^n(K))$ on $\operatorname{Gr}_GH^n(K)$: in filtration degree $p$ the numerator is $(F^aH^n(K)\cap G^pH^n(K))+G^{p+1}H^n(K)$. By steps 2.1 and 3.1 that same image on $E_\infty$ is $F^a_{\mathrm{rec}}$. This proves exactly the recurrent-to-abutment comparison needed here, with the strict representative correction supplied in step 1.2. [F1, step 1.2, step 2.1, step 3.1, algebra]

5.1 (Mixed Hodge structure and shifted weights.) Write $W_mH^n(K)=\operatorname{im}(H^n(W_{m-n}K)\to H^n(K))$. Substitution $p=n-m$, $q=m$ in [F1] and step 3.1 gives $\operatorname{Gr}^W_mH^n(K)=\operatorname{Gr}^{n-m}_GH^n(K)\cong E_2^{n-m,m}$. Step 4.1 makes this identification compatible with the Hodge filtration induced by $F$ on cohomology; the right side is pure of weight $m$ by step 2.1. By step 1.3, the rational comparison identifies scalar-extended rational pages with complex pages: it is an isomorphism on $E_1$ by the graded quasi-isomorphism axiom and hence on the stable pages. Its cohomology map is injective by the leading-term argument of step 4.1 and surjective by lifting a target graded class and correcting the remaining error through the finite filtration; thus it is an isomorphism. The finitely many nonzero stable terms in degree $n$ are finite-dimensional, so $H^n(K_{\mathbb Q})$ is finite-dimensional. The induced $W$ and $F$ are finite, and every $\operatorname{Gr}^W_m$ with its induced $F$ is pure of weight $m$, precisely the mixed Hodge axiom. [F1, given, step 1.1, step 1.3, step 2.1, step 3.1, step 4.1, algebra]

6.1 (Functoriality.) A morphism of cohomological mixed Hodge complexes induces rational and complex cohomology maps compatible with the comparisons. It maps $W_{m-n}K$ to $W_{m-n}L$ and $F^aK_{\mathbb C}$ to $F^aL_{\mathbb C}$, hence preserves the cohomology image filtrations $W_m$ and $F^a$. These maps are therefore morphisms of the mixed Hodge structures of step 5.1. Naturality of [F1] and of the exact-page construction makes the graded-piece identifications compatible with these maps and their Hodge filtrations. [F1, given, step 4.1, step 5.1]

7.1 (The cosimplicial case.) Form $sK^n=\bigoplus_{p+q=n}K^{p,q}$ on both rational and complex sides, with $F^a(sK^n)_{\mathbb C}=\bigoplus_{p+q=n}F^aK_{\mathbb C}^{p,q}$. On $K^{p,q}$ put $D=\delta+(-1)^p d$, where $\delta=\sum_{i=0}^{p+1}(-1)^i\partial^i$ is the alternating coface map and $d$ is the internal differential. The cosimplicial identities pair the terms of $\delta^2$ with opposite signs, so $\delta^2=0$; the cofaces are chain maps, so $\delta d=d\delta$, and the cross terms in $D^2$ cancel because $\delta$ raises $p$. Thus $D^2=0$, and $D$ preserves $F$ because both its summands do. The filtration $L_\ell sK^n=\bigoplus_{i\ge-\ell}K^{i,n-i}$ is increasing, by subcomplexes, and finite on each degree because $0\le i\le n$. Its graded piece is $\operatorname{Gr}^L_\ell sK\cong K^{-\ell}[\ell]$, so $H^r(\operatorname{Gr}^L_\ell sK)=H^{r+\ell}(K^{-\ell})$ is pure of weight $r+\ell$, and its internal differential is strict for $F$ by the Hodge complex hypothesis. Levelwise rational comparisons and filtration-preserving coface maps assemble to the total comparison, which is a graded quasi-isomorphism; the total complex is bounded below and its $F$ filtration is degreewise finite because each diagonal is finite. Thus $sK$ is a rational cohomological mixed Hodge complex for $L$. Applying steps 1.1-6.1 gives $E_1^{p,q}=H^{p+q}(\operatorname{Gr}^L_{-p}sK)=H^q(K^p)$, degeneration at $E_2$ and $\operatorname{Gr}^W_qH^n(sK)=\operatorname{Gr}^L_{q-n}H^n(sK)\cong E_2^{n-q,q}$, with its induced Hodge filtration and functorial mixed structure. Here $W_qH^n=L_{q-n}H^n$ is the shifted cohomology filtration, not the unshifted $L$. [F1, given, construct, step 1.1, step 3.1, step 5.1, step 6.1]

8.1 (Weights at most the degree.) Since the cosimplicial degree is nonnegative, $E_1^{p,q}=0$ for $p<0$, hence $E_2^{n-q,q}=0$ when $q>n$. Step 7.1 gives $\operatorname{Gr}^W_qH^n(sK)=0$ for all $q>n$; finiteness of the weight filtration then gives $W_nH^n(sK)=H^n(sK)$, proving the stated bound. [step 5.1, step 7.1, algebra] ∎

## Source notes

Deligne III, Scholie (8.1.9), is the primary source for part (i). Deligne II (1.3.15)-(1.3.17) supplies the comparison of direct, recurrent and abutment filtrations used in its proof and in (3.2.5)-(3.2.10). Steps 1.2-4.1 instead prove the comparison needed for this statement by exact spectral-sequence pages for $F^aK\to K\to K/F^aK$, including the strict cycle and boundary corrections; no unproved comparison is invoked. Theorem (8.1.15) and its proof (8.1.17) are the source for the cosimplicial conclusion, whose weight-zero special case is constructed in step 7.1. The shifted weight filtration is kept distinct from the unshifted cosimplicial filtration. Weber (2.4.1) and Arapura, Proposition 4.12 and Corollary 4.13, state the same cohomology conclusion. Nothing above uses a choice principle or a splitting of a filtration over $\mathbb Q$ or $\mathbb R$.
