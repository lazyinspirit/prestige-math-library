# Step 3a reader report — batch 17

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Date: 2026-10-25

## Disposition

I made no item or page edits. The assigned arguments and the worked computation
are sound under their stated mathematical inputs. I found one definition gap in
a published ODE dependency; it is reported in the batch findings file. The
assigned theorem and its example page therefore remain on hold pending that
dependency review.

## Opened inventory

The assigned manifest was
[batch 17 pages](advanced-qft-supersymmetry-build-2026-10-23-batch-17.pages.json).
I also inspected the batch proof contracts, cross-batch dependency rows,
coverage record, and authoring notes as evidence, not as verdicts.

Assigned pages:

- [qftx-eft-rg-data](../library/quantum-field-theory-mathematics/qftx-eft-rg-data.md):
  draft A page, `page_layout: compact-v1`, inventory matches the manifest, no
  Markdown body.
- [qftx-eft-rg-data-examples](../library/quantum-field-theory-mathematics/qftx-eft-rg-data-examples.md):
  draft B page, `page_layout: compact-v1`, example inventory matches the
  manifest, no Markdown body.

Assigned items were read in dependency order:

1. [def-aqft-scheme-and-wilson-coefficients](../items/def-aqft-scheme-and-wilson-coefficients.md)
2. [thm-aqft-truncated-coupled-rge-wellposedness](../items/thm-aqft-truncated-coupled-rge-wellposedness.md)
3. [ex-aqft-coupled-rge-linear-mixing](../items/ex-aqft-coupled-rge-linear-mixing.md)

Relevant supplied item statements and proof arguments opened:

- [def-aqft-local-operator-and-dimension](../items/def-aqft-local-operator-and-dimension.md),
  [lem-aqft-finite-order-local-operator-space-finite-dimensional](../items/lem-aqft-finite-order-local-operator-space-finite-dimensional.md),
  and [def-aqft-operator-basis-quotient](../items/def-aqft-operator-basis-quotient.md)
  from current batch 16; also their reductive-group supplier
  [def-reductive-and-linearly-reductive-over-c](../items/def-reductive-and-linearly-reductive-over-c.md).
- The ODE suppliers
  [def-vector-valued-derivative-and-integral](../items/def-vector-valued-derivative-and-integral.md),
  [def-first-order-ode-initial-value-problem-and-solution](../items/def-first-order-ode-initial-value-problem-and-solution.md),
  [def-locally-lipschitz-in-the-state-variable](../items/def-locally-lipschitz-in-the-state-variable.md),
  [prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation](../items/prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation.md),
  and [thm-picard-lindelof-local-existence-and-uniqueness](../items/thm-picard-lindelof-local-existence-and-uniqueness.md).
- Direct Picard-proof support statements opened:
  [lem-vector-valued-continuous-curve-space-is-complete](../items/lem-vector-valued-continuous-curve-space-is-complete.md),
  [lem-picard-operator-preserves-a-closed-curve-ball](../items/lem-picard-operator-preserves-a-closed-curve-ball.md),
  [lem-picard-operator-is-a-short-time-contraction](../items/lem-picard-operator-is-a-short-time-contraction.md),
  [thm-banach-fixed-point](../items/thm-banach-fixed-point.md), and
  [cor-connected-subsets-of-the-line](../items/cor-connected-subsets-of-the-line.md).

Relevant page prerequisites opened:

- [qftx-eft-operator-quotients](../library/quantum-field-theory-mathematics/qftx-eft-operator-quotients.md);
  its fixed-weight operator and quotient items are listed above.
- [qftx-scale-cocycles](../library/quantum-field-theory-mathematics/qftx-scale-cocycles.md);
  its relationship is page-level context, not an RG-equation proof premise here.
- The published mathematics page
  [picard-lindelof-and-first-order-odes](../../library/real-analysis/picard-lindelof-and-first-order-odes.md).

The imported ODE items and page are read-only. Their item hashes match the
corresponding entries in `research/math-imports.json`; in particular, the
current pinned hash for
`def-locally-lipschitz-in-the-state-variable` is
`ae015e1f76770988632ebca4012e0df93fd03340b388190d76e521690bc94597`.

## Review findings and evidence

### Assigned definition

The scheme definition takes a finite complex quotient and basis as supplied
data, defines coefficient coordinates and their realification, specifies the
logarithmic scale variable and the supplied continuous vector field, and
disclaims any beta-function calculation, matching construction, relation-space
completeness, or omitted-term estimate. The quotient interface agrees with
current batch 16. Its displayed coefficient expression has the stated mass
dimension four. Its complete Definition is uninterrupted; references follow in
the required separate section.

The cited sources support the limited background role claimed for them:
[Manohar, Chapter 3 §3.2 and Chapter 5 §5.10](https://arxiv.org/pdf/1804.05863)
gives scale-dependent renormalized parameters, reference-scale evolution, and
an example of coefficient running and mixing; [Burgess, §§2.2.1–2.2.2 and
§4.1.3](https://arxiv.org/pdf/hep-th/0701053) distinguishes scheme conventions
and illustrates scale-dependent renormalized couplings. Neither source is
treated as establishing the abstract quotient, arbitrary supplied beta field,
or the local ODE theorem.

### Assigned theorem

The statement preserves the finite-dimensional realified domain, continuity,
local state-Lipschitz hypothesis, local interval, uniqueness, and continuous
dependence conclusion. The proof's compact-neighborhood construction, common
interval application of Picard–Lindelöf, oriented Volterra inequality, vector
integral norm estimate, bounded iteration remainder, and exponential-series
limit establish the claim. The proof contract's F1–F5 quotes, use locations,
and derivation rows match the current item.

The relevant source passages were inspected at their cited locators:
[Teschl, Chapter 2 §2.2, Theorem 2.2 and proof](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf)
and [Bouin, §1.5, Theorem 1.5.4 and Lemma 1.5.5](https://www.ceremade.dauphine.fr/~bouin/ens1819/EquaDiff_CoursL3_2018-2019.pdf).
These support the local existence and uniqueness input. Continuous dependence
is proved locally in the assigned theorem rather than attributed to those
sources.

One supplier defect remains: the published
`def-locally-lipschitz-in-the-state-variable` defines its condition by
quantifying over “compact time-state cylinders” without defining which subsets
of the time-state domain count as such cylinders. Assigned theorem step 1.1
requires the definition to provide a Lipschitz constant on
`K=[t0-h0,t0+h0] × closed-ball(x0,2r)`. Under the familiar product-cylinder
interpretation this is the intended and valid use, but that set class is not
stated in the dependency itself. An explicit product-set definition (and the
corresponding parameter version) would close the gap. The subject is published
mathematics and outside this batch's write scope, so I left it unchanged and
reported it as a published-dependency finding.

### Assigned example

The initial vector, both derivatives, and both components of \(AC\) agree
exactly. The stated estimate \(\|A\Delta\|_2^2\le6\|\Delta\|_2^2\) follows from
the displayed component bounds, so the realified vector field is globally
Lipschitz with constant \(\sqrt6\). The candidate is defined for every
\(t\in\mathbb R\), and the cited theorem's common-interval uniqueness gives
uniqueness of the global solution. The supplied matrix is not presented as a
QFT calculation. The proof contract matches these computations and all
hypotheses. The example's complete description is uninterrupted and followed
by its references section.

No TikZ or tikzcd diagrams occur in the assigned items; none is needed for
these definitions or the direct two-component calculation.

## Edits

None. Since no item changed, I did not run reflow, precheck, or proof-layout.

## Page verdicts and blocker

- `qftx-eft-rg-data`: hold. The page inventory and presentation are correct;
  the assigned scheme definition is sound as supplied data. The page's theorem
  depends on the unresolved precision of the published state-Lipschitz
  definition.
- `qftx-eft-rg-data-examples`: hold. The page inventory and presentation are
  correct and the worked solution is sound. Its dependency closure reaches the
  same published definition through the assigned theorem.

Blocker: the published ODE definition is read-only from this assignment.
The exact finding and assigned consumer are in
`research/advanced-qft-supersymmetry-build-2026-10-23-reader-findings-17.json`.
No assigned carrier remains unreviewed.

## Coverage note

All three assigned items, both assigned pages, their relevant current item and
page suppliers, the proof contracts, and the direct support statements used by
the published Picard theorem were inspected. The EFT and ODE PDFs were opened
and the cited relevant passages were checked; the PDFs were not read cover to
cover. The scale-cocycle page was checked as page-level context only, not as a
logical item premise. No diagrams were present. No repair was made.
