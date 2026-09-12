---
id: "lem-the-total-cartan-eilenberg-complex-computes-the-derived-composite"
kind: "lemma"
title: "The total Cartan-Eilenberg complex computes the derived composite"
deps: ["lem-an-injective-resolution-for-f-produces-a-g-acyclic-resolution-after-f", "thm-first-hypercohomology-spectral-sequence", "prop-the-hypercohomology-edge-maps-are-the-canonical-maps-from-cohomology-of-f", "def-right-derived-object-relative-to-injective-resolution-data", "def-dependent-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 5.8.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "Stacks Project, Tag 015N"
      url: "https://stacks.math.columbia.edu/download/derived.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Let $F:\mathcal A\to\mathcal B$ and $G:\mathcal B\to\mathcal C$ be additive left-exact functors, with enough injectives in $\mathcal A,\mathcal B$, and suppose $F$ sends injectives to $G$-acyclic objects. Supply an injective resolution datum $\mathsf I$ at $A$, write $I^\bullet=\mathsf I(A)_{\mathrm{del}}$, and supply a Cartan–Eilenberg resolution $F(I^\bullet)\to J$. Then the augmentation
$$GF(I^\bullet)\longrightarrow\operatorname{Tot}(GJ)$$
is a quasi-isomorphism, and consequently
$$H^n(\operatorname{Tot}(GJ))=R_{\mathsf I}^n(GF)(A)$$
via this canonical comparison. One may suppress the subscript and obtain resolution-independent naturality only under DC or with supplied change-of-resolution comparison maps and homotopies. All relative acyclicity assertions use the displayed supplied columns or their supplied comparison identifications.

## Facts & Assumptions

**Given:** The functors, acyclicity condition and supplied resolutions in the statement.

[F1] $F(I^\bullet)$ is termwise $G$-acyclic and its cohomology computes the right derived objects of $F$ relative to the displayed supplied resolution ([[lem-an-injective-resolution-for-f-produces-a-g-acyclic-resolution-after-f]]).

[F2] The first hypercohomology sequence computes the hyperderived total target from termwise derived objects ([[thm-first-hypercohomology-spectral-sequence]]).

[F3] Its bottom edge is induced by the augmentation of the original functor-applied complex ([[prop-the-hypercohomology-edge-maps-are-the-canonical-maps-from-cohomology-of-f]]).

[F4] $R_{\mathsf I}^n(GF)(A)$ is defined as $H^n(GF(I^\bullet))$ for the named supplied injective datum $\mathsf I$ at $A$ ([[def-right-derived-object-relative-to-injective-resolution-data]]).

## Proof

1.1 Apply F2 to $G$ and the complex $F(I^\bullet)$. Its first page is $E_1^{q,p}=R^pG(F(I^q))$. F1 makes this zero for $p>0$; for $p=0$ left exactness identifies it with $GF(I^q)$ and the $d_1$ is its cochain differential. Thus the second page has only the row $p=0$, equal to $H^q(GF(I^\bullet))$. [F1, F2]

2.1 Every differential from page two onward has zero source or target off that row, so the page is stationary. In target degree $n$ its finite filtration has only one potentially nonzero quotient, at $(n,0)$; all earlier successive quotients vanish and the last filtration term is zero. Therefore its bottom edge $H^n(GF(I^\bullet))\to H^n(\operatorname{Tot}(GJ))$ is an isomorphism. F3 identifies this exact edge with the augmentation map, proving that augmentation is a quasi-isomorphism. [F2, F3, step 1.1]

3.1 F4 identifies the source cohomology with $R_{\mathsf I}^n(GF)(A)$, and nowhere is $F(I^\bullet)$ treated as a resolution of $F(A)$. Under DC, or when the relevant change-of-resolution comparisons and homotopies are supplied, this relative identification is independent of $\mathsf I$ and natural, so the subscript may then be suppressed. At $n=0$ it agrees with the left-exact augmentation kernel identification, and zero terms or zero complexes satisfy the same one-row argument. [F2, F4, step 2.1] ∎
