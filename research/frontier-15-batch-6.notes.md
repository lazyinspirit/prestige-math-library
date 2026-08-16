# Frontier 15 batch 6 — Beta-6 scaffold notes

Run: frontier-15
Batch: 6
Pair: goursat-and-cauchys-theorem-in-a-convex-domain / goursat-and-cauchys-theorem-in-a-convex-domain-examples
Stage: steps 1–2 and the Step-3 fix pass complete; durable handoff to Alpha recheck and to this batch's Step-5 author.

## Continuity checkpoint

- Current substage: all B6-1 through B6-5 fixes are applied to the batch-local scaffold, canonical coverage, dependency audit, and proof-obligation map; the no-change adjudication in B6-6 is recorded below.
- Owned artifacts: research/frontier-15-batch-6.pages.json, research/frontier-15-batch-6.coverage.json, research/frontier-15-batch-6.proof-contracts.json, and this file.
- Completed checks: every external dependency was opened from items/; all were published; no dependency statement is ai-generated or legacy-unclassified; all published-source quotations currently in the proof contract were checked against the exact permitted source section; the requested coverage, manifest-only content-policy, and current-plan validation commands passed; source-fetch-check accepted all eight existing full-body verification stamps.
- Open constraints: Step-3 Alpha must recheck B6-1 through B6-6. Step 4 must splice the manifest before validate-plan.mjs and depsource.mjs can test this pair authoritatively. No mathematical dependency or source-stamp obligation is known to remain open.
- Exact next action: Alpha rechecks B6-1 through B6-6 from disk, then the engine mechanically splices the 17-item A page and 8-item B page without a page split.

## Two-paragraph pair summary for the prose scaffold

The main page proves Goursat's triangle theorem by making both hidden mechanisms explicit: midpoint subdivision cancels the interior edges algebraically, and a deterministic nested-triangle selection retains a fixed share of the boundary integral while the diameters shrink to zero. Splitting a rectangle along a diagonal gives the classical rectangle corollary. The one-exception version then feeds a triangle-to-primitive proposition, yielding Cauchy's theorem first on star-shaped domains and explicitly on convex domains. A filled difference quotient and a direct computation of the off-centre circle kernel give Cauchy's circle formula; a difference-quotient estimate then proves existence and the formula for all higher derivatives before Cauchy's inequalities.

The companion page computes the triangle and circle examples in the design, displays the midpoint cancellation, and tests the hypotheses against the punctured plane and complex conjugation. Its counterexamples distinguish connected from star-shaped domains and continuity from holomorphy, while its false statements isolate the precise innovations of Goursat's theorem and the primitive criterion.

## Findings for Step-3 Alpha

### F1 — approve: replace the incorrect convexity dependency

What is wrong: the prose says to cite convexity, but that page develops convex real-valued functions, not convex subsets of the Euclidean plane. The exact published objects are def-convex-subset-of-euclidean-space, def-star-shaped-open-subset-of-rn, and rem-complex-plane-euclidean-dictionary.

Recommendation: approve rem-plane-star-shaped-and-convex-dictionary with those exact dependencies. If declined, the page will cite a different mathematical notion as its domain hypothesis.

### F2 — approve: replace the incorrect nested-set dependency

What is wrong: equivalent-forms-of-completeness supplies an ordered-field nested-interval principle, not the complete-metric Cantor intersection theorem needed for nested filled triangles in \(\mathbb C\). The exact published theorem is thm-cantor-intersection-metric, applied with thm-complex-plane-is-complete.

Recommendation: approve those two dependencies, with compactness/closedness supplied by thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, and thm-compact-subset-is-closed-and-bounded. If declined, the unique common point in Goursat's bisection has no correctly typed cited theorem.

### F3 — approve: insert the missing triangle-to-primitive bridge and exceptional star-shaped theorem

What is wrong: the original inventory jumps from zero triangle integrals to a primitive and later tries to feed the triangle-only exceptional theorem directly into a circle formula. A triangle theorem by itself does not assert zero integral on a closed circle.

Recommendation: approve prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain and thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain. The first is the standard segment-integration bridge; the second applies it to the one-exception triangle theorem and then uses the published primitive integral theorem. If declined, the circle formula has a genuine contour-shape gap.

### F4 — approve: compute the off-centre circle kernel rather than miscite CA-3

What is wrong: CA-3's thm-circle-integrals-of-integer-monomials directly computes powers centred at the circle centre \(a\), whereas Cauchy's formula requires
\[
\int_{|\zeta-a|=r}\frac{d\zeta}{\zeta-z}=2\pi i
\quad\text{for every }|z-a|<r.
\]
That is not the centred \(m=-1\) clause unless \(z=a\).

Recommendation: in thm-cauchy-integral-formula-circle, expand
\[
\frac1{\zeta-z}
=\sum_{k=0}^{N}\frac{(z-a)^k}{(\zeta-a)^{k+1}}+\text{uniform remainder}
\]
on the circle. Use lem-geometric-sequence-null, thm-uniform-limit-interchanges-complex-line-integrals, linearity, and the exact centred monomial theorem. If declined, the proof would paraphrase CA-3 as a stronger off-centre result it does not state.

### F5 — approve: state the convex-domain corollary explicitly

What is wrong: the page title promises Cauchy's theorem in a convex domain, while the original inventory only states the stronger star-shaped-domain theorem.

Recommendation: approve cor-cauchy-theorem-convex-domain immediately after the star-shaped theorem, using the dictionary remark. If declined, the mathematical implication remains available but the named theorem promised by the page is absent.

### F6 — approve: correct the source locators and add the exact exceptional-point source

What is wrong: the Howell–Mathews labels in the design do not match the live section headings, and the original source set does not expose the exact one-continuously-filled-point/star-shaped seam as directly as the Columbia notes do.

Recommendation: record Howell–Mathews §§6.3–6.5 under their live section titles and add Tang-Kai Lee §2.1.2, Theorems 2.14–2.16. If declined, the source ledger obscures which source actually warrants the exceptional theorem consumed by the circle formula.

No published dependency contained an unambiguous falsehood. No repair queue is proposed.

## Exact applyable edits to the prose scaffold

Target file: research/plan-complex-analysis-track.md
Target section: ## CA-4. Goursat's Theorem and Cauchy's Theorem in a Convex Domain

### Edit 1 — pair-source block

Exact old text:

~~~text
Pair sources (exact harvested locators): Ahlfors Ch. 4 §§1.4--2.3 (“Cauchy's
Theorem for a Rectangle,” “Cauchy's Theorem in a Disk,” “The Integral
Formula,” “Higher Derivatives”); Stein--Shakarchi Ch. 2, “Goursat's theorem”
through “Cauchy's integral formulas”; Howell--Mathews Ch. 6 §§6.3--6.5
(“Cauchy--Goursat theorem,” “Fundamental theorem for integration,” “Integral
representations”).
~~~

Exact new text:

~~~text
Pair sources (exact harvested locators): Ahlfors Ch. 4 §§1.4--2.3, printed
pp. 109--123 (“Cauchy's Theorem for a Rectangle” through “Higher
Derivatives”); Stein--Shakarchi Ch. 2 §§1--4, printed pp. 34--52 (“Goursat's
theorem” through “Cauchy's integral formulas”); Howell--Mathews Ch. 6
§§6.3--6.5, section bodies before the exercises (“The Cauchy--Goursat
Theorem,” “Fundamental Theorems for Integration,” “Cauchy's Integral
Formulas”); Tang-Kai Lee §2.1.2, printed pp. 22--24, Theorems 2.14--2.16.
~~~

### Edit 2 — A-page inventory

Replace the exact block beginning

~~~text
Proposed A-page inventory (dependency order; 13 items):
~~~

and ending

~~~text
| `cor-cauchy-inequalities` | cor | $\lvert f^{(n)}(a)\rvert\le n!M_r/r^n$ for every compactly contained circle. |
~~~

with:

~~~text
Proposed A-page inventory (dependency order):

| id | kind | one-line statement |
|---|---|---|
| `def-oriented-complex-triangle-and-boundary` | def | Define filled complex triangles, their oriented three-edge boundary contours, diameter, and perimeter. |
| `rem-plane-star-shaped-and-convex-dictionary` | rem | Identify the published Euclidean star-shaped and convex notions under $\mathbb C=\mathbb R^2$. |
| `lem-goursat-four-triangle-boundary-cancellation` | lem | Midpoint subdivision cancels every interior edge and preserves the outer boundary integral. |
| `lem-goursat-nested-triangle-selection` | lem | Select nested quarter-triangles retaining a quarter of the integral magnitude, with halving diameters and a one-point intersection. |
| `thm-goursat-triangle-theorem` | thm | A holomorphic function integrates to zero around every triangle contained in its domain. |
| `cor-goursat-rectangle-theorem` | cor | A holomorphic function integrates to zero around the positively oriented boundary of every rectangle contained in its domain. |
| `thm-goursat-theorem-one-exceptional-point` | thm | A continuous function holomorphic away from one point still has zero integral around every contained triangle. |
| `prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain` | prop | Vanishing integrals around contained triangles construct a primitive by segment integration. |
| `thm-holomorphic-primitive-on-star-shaped-domain` | thm | Every holomorphic function on a star-shaped domain has a primitive. |
| `cor-cauchy-theorem-star-shaped-domain` | cor | Every closed rectifiable contour integral of a holomorphic function on a star-shaped domain is zero. |
| `cor-cauchy-theorem-convex-domain` | cor | Every closed rectifiable contour integral of a holomorphic function on a convex complex domain is zero. |
| `thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain` | thm | A continuous function holomorphic away from one point on a star-shaped domain has a primitive and zero closed-contour integrals. |
| `lem-cauchy-difference-quotient-exceptional-extension` | lem | Filling $(f(\zeta)-f(z))/(\zeta-z)$ at $\zeta=z$ gives the exact one-exception hypotheses. |
| `thm-cauchy-integral-formula-circle` | thm | A compactly contained circle represents every holomorphic value in its interior. |
| `lem-differentiating-cauchy-integrals` | lem | A direct difference-quotient estimate differentiates a Cauchy-kernel integral over a fixed contour. |
| `thm-cauchy-integral-formula-higher-derivatives` | thm | Every higher complex derivative exists and satisfies $f^{(n)}(z)=\frac{n!}{2\pi i}\int f(\zeta)/(\zeta-z)^{n+1}\,d\zeta$. |
| `cor-cauchy-inequalities` | cor | $\lvert f^{(n)}(a)\rvert\le n!M_r/r^n$ on every compactly contained circle. |
~~~

### Edit 3 — definition dependencies

Exact old text:

~~~text
**star-shaped** and **convex** open subsets of $\mathbb{C}$ (cite
`convexity` and `rn-as-a-normed-space`; do not re-mint).
~~~

Exact new text:

~~~text
**star-shaped** and **convex** open subsets of $\mathbb{C}$ (use
`rem-complex-plane-euclidean-dictionary`,
`def-star-shaped-open-subset-of-rn`, and
`def-convex-subset-of-euclidean-space`; do not re-mint).
~~~

### Edit 4 — nested-triangle dependencies

Exact old text:

~~~text
(completeness from
`the-complex-exponential-and-eulers-formula` and `rn-as-a-normed-space`; the
nested-set principle is `equivalent-forms-of-completeness`)
~~~

Exact new text:

~~~text
(completeness from `thm-complex-plane-is-complete`; the complete-metric
nested-set principle is `thm-cantor-intersection-metric`, after compactness
and closedness of each filled triangle are established)
~~~

### Edit 5 — primitive and Cauchy-theorem chain

Exact old text:

~~~text
**existence of a primitive on a star-shaped domain**
(define $F(z) = \int_{[z_0,z]}f$ and use Goursat on the triangle $z_0,z,z+h$);
**Cauchy's theorem for a star-shaped domain** (landmark): $\int_\gamma f = 0$
for every closed contour, immediately from the primitive and CA-3;
~~~

Exact new text:

~~~text
**triangle integrals give a primitive on a star-shaped domain**: if a
continuous function has zero integral around every contained triangle, define
$F(z)=\int_{[z_0,z]}f$ and use the triangle $z_0,z,z+h$; **existence of a
primitive for a holomorphic function on a star-shaped domain**, by Goursat and
that proposition; **Cauchy's theorem for a star-shaped domain** (landmark):
$\int_\gamma f=0$ for every closed rectifiable contour, from the primitive and
CA-3; **Cauchy's theorem for a convex domain**, by the published
convex-to-star-shaped dictionary; **Cauchy's theorem with one exceptional
point on a star-shaped domain**, by the exceptional triangle theorem, the
same primitive proposition, and CA-3;
~~~

### Edit 6 — circle-kernel computation

Exact old text:

~~~text
via Goursat-with-an-exceptional-point applied to $(f(\zeta)-f(z))/(\zeta - z)$
plus the fundamental computation of CA-3;
~~~

Exact new text:

~~~text
via the one-exception star-shaped theorem applied to the continuously filled
$(f(\zeta)-f(z))/(\zeta-z)$, and an explicit off-centre kernel computation:
expand $1/(\zeta-z)$ geometrically about $a$, interchange the uniform limit
with the contour integral, and apply CA-3's centred monomial-circle formula;
~~~

### Edit 7 — nested-set trap

Exact old text:

~~~text
(iv) The nested compact sets: cite
`equivalent-forms-of-completeness` rather than rebuilding the nested
interval principle in $\mathbb{C}$.
~~~

Exact new text:

~~~text
(iv) The nested compact sets: cite `thm-cantor-intersection-metric` together
with `thm-complex-plane-is-complete`; `equivalent-forms-of-completeness` is an
ordered-field nested-interval result and is not the theorem used here.
~~~

### Edit 8 — explicit companion inventory

After the exact paragraph ending

~~~text
CEX: a holomorphic function on an annulus with $\int_\gamma f \ne 0$, showing
star-shapedness is not decoration; a domain that is connected and not
star-shaped.
~~~

insert:

~~~text
Proposed B-page inventory (dependency order):

| id | kind | one-line statement |
|---|---|---|
| `ex-goursat-triangle-integral-of-z-squared` | ex | The integral of $z^2$ around the triangle with vertices $0,1,i$ vanishes edge by edge. |
| `ex-goursat-four-triangle-boundary-cancellation` | ex | The four midpoint subtriangles of the $0,1,i$ triangle display all cancelling interior edges. |
| `ex-cauchy-integral-formula-exponential-over-z-minus-one` | ex | $\int_{|z|=2}e^z/(z-1)\,dz=2\pi i e$. |
| `ex-cauchy-integral-formula-cosine-third-order-pole` | ex | $\int_{|z|=2}\cos z/(z-1)^3\,dz=-\pi i\cos 1$. |
| `cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral` | cex | A holomorphic function on an annulus can have a nonzero closed-contour integral. |
| `cex-connected-domain-need-not-be-star-shaped` | cex | A connected complex domain need not be star-shaped. |
| `fs-goursats-theorem-requires-continuity-of-the-derivative` | fs | FALSE: Goursat's triangle conclusion requires a separate continuity hypothesis on $f'$. |
| `fs-every-continuous-function-on-a-convex-domain-has-a-primitive` | fs | FALSE: every continuous complex-valued function on a convex domain has a primitive. |
~~~

## Final per-page item lists

### goursat-and-cauchys-theorem-in-a-convex-domain

Count: 17.

| position | id | kind | title |
|---:|---|---|---|
| 1 | def-oriented-complex-triangle-and-boundary | definition | Filled complex triangles, their oriented three-edge boundary contours, diameter, and perimeter |
| 2 | rem-plane-star-shaped-and-convex-dictionary | remark | Complex star-shaped and convex domains are the published Euclidean notions under the identification \(\mathbb C=\mathbb R^2\) |
| 3 | lem-goursat-four-triangle-boundary-cancellation | lemma | Midpoint subdivision of a triangle cancels every interior edge and preserves its outer boundary integral |
| 4 | lem-goursat-nested-triangle-selection | lemma | Goursat bisection selects nested triangles retaining one quarter of the boundary-integral magnitude, with halving diameters and a one-point intersection |
| 5 | thm-goursat-triangle-theorem | theorem | Goursat's triangle theorem: a holomorphic function integrates to zero around every triangle contained in its domain |
| 6 | cor-goursat-rectangle-theorem | corollary | Goursat's theorem for rectangles: a holomorphic function integrates to zero around every rectangle contained in its domain |
| 7 | thm-goursat-theorem-one-exceptional-point | theorem | Goursat's triangle theorem remains valid for a continuous function holomorphic away from one point |
| 8 | prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain | proposition | Vanishing integrals around triangles construct a primitive for a continuous function on a star-shaped domain |
| 9 | thm-holomorphic-primitive-on-star-shaped-domain | theorem | Every holomorphic function on a star-shaped domain has a primitive |
| 10 | cor-cauchy-theorem-star-shaped-domain | corollary | Cauchy's theorem on a star-shaped domain: every closed rectifiable contour integral of a holomorphic function is zero |
| 11 | cor-cauchy-theorem-convex-domain | corollary | Cauchy's theorem on a convex complex domain |
| 12 | thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain | theorem | A continuous function holomorphic away from one point on a star-shaped domain has a primitive and zero closed-contour integrals |
| 13 | lem-cauchy-difference-quotient-exceptional-extension | lemma | The filled difference quotient is continuous at its exceptional point and holomorphic away from it |
| 14 | thm-cauchy-integral-formula-circle | theorem | Cauchy's integral formula on a circle compactly contained in a disc of holomorphy |
| 15 | lem-differentiating-cauchy-integrals | lemma | Cauchy-kernel contour integrals may be differentiated by a direct difference-quotient estimate |
| 16 | thm-cauchy-integral-formula-higher-derivatives | theorem | All higher complex derivatives exist and satisfy Cauchy's integral formula on an interior circle |
| 17 | cor-cauchy-inequalities | corollary | Cauchy's inequalities bound every derivative by a boundary bound on a compactly contained circle |

### goursat-and-cauchys-theorem-in-a-convex-domain-examples

Count: 8.

| position | id | kind | title |
|---:|---|---|---|
| 1 | ex-goursat-triangle-integral-of-z-squared | example | The integral of \(z^2\) around the triangle with vertices \(0\), \(1\), and \(i\) vanishes edge by edge |
| 2 | ex-goursat-four-triangle-boundary-cancellation | example | The four midpoint subtriangles of the \(0,1,i\) triangle display all three cancelling interior edges |
| 3 | ex-cauchy-integral-formula-exponential-over-z-minus-one | example | The circle integral of \(e^z/(z-1)\) over \(|z|=2\) is \(2\pi i e\) |
| 4 | ex-cauchy-integral-formula-cosine-third-order-pole | example | The circle integral of \(\cos z/(z-1)^3\) over \(|z|=2\) is \(-\pi i\cos 1\) |
| 5 | cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral | counterexample | A holomorphic function on an annulus can have a nonzero closed-contour integral |
| 6 | cex-connected-domain-need-not-be-star-shaped | counterexample | A connected complex domain need not be star-shaped |
| 7 | fs-goursats-theorem-requires-continuity-of-the-derivative | false-statement | FALSE: Goursat's triangle conclusion requires a separate continuity hypothesis on \(f'\) |
| 8 | fs-every-continuous-function-on-a-convex-domain-has-a-primitive | false-statement | FALSE: every continuous complex-valued function on a convex domain has a primitive |

## Per-pair richness report

Both required passes were performed separately for this pair.

Long-proof decomposition:

- Goursat's theorem was decomposed into lem-goursat-four-triangle-boundary-cancellation and lem-goursat-nested-triangle-selection. The first makes the interior-edge computation auditable; the second isolates quarter retention, deterministic selection, scale induction, compactness, and the complete-metric intersection step.
- The primitive route was decomposed into prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain, thm-holomorphic-primitive-on-star-shaped-domain, and thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain. This separates the general triangle-to-primitive mechanism from its ordinary and exceptional Goursat inputs.
- The higher-derivative formula was decomposed into lem-differentiating-cauchy-integrals and thm-cauchy-integral-formula-higher-derivatives, so no undeclared general differentiation-under-the-integral theorem is used.

Useful corollaries added:

- cor-goursat-rectangle-theorem, the named rectangle form obtained by splitting along a diagonal and cancelling its two orientations.
- cor-cauchy-theorem-star-shaped-domain, the immediate primitive consequence.
- cor-cauchy-theorem-convex-domain, the named specialization promised by the page title.
- cor-cauchy-inequalities, the direct \(ML\)-estimate consequence of the higher formula.

The A page has 17 planned items and is not approaching the 60-item ceiling. No split and no pruning are proposed. The B page has 8 planned leaves.

## Proof-obligation and boundary map

The complete step map is research/frontier-15-batch-6.proof-contracts.json. Its scope contains every proof-bearing planned item. The Step-5 author must preserve these load-bearing subclaims:

- Four-triangle cancellation: list all directed edges, cancel each interior edge using reversal and linearity, and reassemble the outer sides.
- Nested selection: prove one child retains at least a quarter; use a least-index maximizer plus recursion; prove the \(4^{-n}\) integral bound and \(2^{-n}\) diameter/perimeter formulas; prove each filled triangle is nonempty compact and closed; then apply the exact complete-metric Cantor theorem.
- Goursat: at the unique point, split \(f\) into constant, linear, and differentiability-remainder terms; integrate the first two to zero; combine \(ML\), diameter, perimeter, and the retained lower bound before sending the remainder bound to zero.
- Rectangle Goursat: split a positive-side-length rectangle along the prescribed diagonal, apply triangle Goursat twice, cancel the oppositely oriented diagonal, and reassemble the positive four-edge boundary.
- One-exception Goursat: treat the exceptional point's position explicitly, subdivide so it is a vertex of affected pieces, and shrink those pieces using continuity and \(ML\); do not cite plain Goursat at an exceptional piece.
- Triangle-to-primitive: choose \(h\) so the base segment lies in a small ball and the full triangle lies in the star-shaped domain; use the triangle identity to express the segment-integral increment; estimate its difference quotient.
- Ordinary and exceptional Cauchy theorems: build the relevant primitive first, then invoke the exact published closed-integral-of-a-derivative statement.
- Circle formula: fill the difference quotient, apply the exceptional star-shaped theorem, and separately compute the off-centre kernel by uniform geometric expansion. Do not silently replace it with thm-circle-integrals-of-integer-monomials.
- Differentiating the kernel: use the exact algebraic difference quotient, maintain positive distance from the fixed contour, bound the error uniformly, and apply \(ML\).
- Higher derivatives: include \(n=0\), use induction from \(F_n'=nF_{n+1}\), prove existence and the formula simultaneously, and match the factorial recurrence.
- Inequalities: keep \(r>0\), include \(n=0\), use circle length \(2\pi r\), and simplify exactly to \(n!M_r/r^n\).
- Companion checks: parameterize every triangle edge; verify the midpoint drawing's orientations; recompute both circle values including the \(2!\) factor and the sign of \(\cos''(1)\); prove the punctured plane is a domain but not star-shaped; refute the continuous-primitive statement with \(\bar z\) on a disk and its nonzero circle integral.

All eight standard boundary rows—empty, zero, one, degenerate, endpoints, nonempty choice, iff-forward, and iff-reverse—have an explicit disposition in each contract. No registered bounded-model smoke checker is meaningful for these analytic contour arguments, so each finite_smoke array is empty and the proof contracts carry the analytic checks instead.

## Expected component provenance

URL keys:

- A — Ahlfors: <https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf>
- S — Stein–Shakarchi: <https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf>
- H63 — Howell–Mathews §6.3: <https://complexanalysis.org/web/sec_cauchy-goursat.html>
- H64 — Howell–Mathews §6.4: <https://complexanalysis.org/web/sec_integration-theorems.html>
- H65 — Howell–Mathews §6.5: <https://complexanalysis.org/web/sec_cauchy-integral-formulas.html>
- C — Tang-Kai Lee §2.1.2: <https://www.math.columbia.edu/~leetk/TA/CA25-file/Note-CA.pdf>
- L — J. Lebl, Proposition 3.2.11 and its proof: <https://math.okstate.edu/people/lebl/osu5283-s20/ca.pdf?r=1>

Every URL named for a source-backed component must appear verbatim in that item's Step-5 sources.references.

| item | expected statement | expected proof | rationale and Step-5 reference |
|---|---|---|---|
| def-oriented-complex-triangle-and-boundary | literature-derived | not-applicable | The triangle/oriented-boundary convention follows S §1 and H63 §6.3; wording is normalized to published contour operations. References S, H63. |
| rem-plane-star-shaped-and-convex-dictionary | ai-altered | not-applicable | A local agreement remark joining exact published Euclidean and complex-plane definitions, not a new notion. Reference L for the complex convention. |
| lem-goursat-four-triangle-boundary-cancellation | literature-derived | ai-altered | The cancellation is explicit in A §1.4 and S Theorem 1.1; the proof becomes directed-edge algebra using CA-3. References A, S. |
| lem-goursat-nested-triangle-selection | literature-derived | ai-altered | Quarter retention and halving triangles are from S Theorem 1.1; least-index selection and exact library completeness closure are local adaptations. Reference S. |
| thm-goursat-triangle-theorem | literature-derived | ai-altered | Exact theorem from S Theorem 1.1 and H63 Theorem 6.3.6; proof is adapted to the preceding lemmas and published \(ML\). References S, H63. |
| cor-goursat-rectangle-theorem | literature-derived | ai-altered | The rectangle conclusion is A §1.4 Theorem 2 and S Corollary 1.2; the proof is rewritten as two local triangle applications plus the published reversal and concatenation identities. References A, S. |
| thm-goursat-theorem-one-exceptional-point | literature-derived | ai-altered | Exact one-missing-point theorem is C Theorem 2.14; proof is rewritten against the local triangle convention. Reference C. |
| prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain | literature-derived | ai-altered | L Proposition 3.2.11 gives the bridge and C Corollary 2.15 notes the star-shaped route; proof is adapted to CA-3. References L, C. |
| thm-holomorphic-primitive-on-star-shaped-domain | literature-derived | ai-altered | Standard consequence of the disk results in A §1.5 and S §2 plus the source-backed local star-shaped bridge; proof delegates to that bridge. References A, S, L. |
| cor-cauchy-theorem-star-shaped-domain | literature-derived | ai-altered | Closed-contour consequence of the source primitive theorem, the star-shaped observation in C, and published complex FTC. References A, C. |
| cor-cauchy-theorem-convex-domain | literature-derived | ai-altered | C Corollary 2.15 states the convex conclusion; the local proof factors through the exact dictionary. Reference C. |
| thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain | literature-derived | ai-altered | C proves the convex case and says the proof works for star-shaped sets; the local proof uses the general primitive proposition. Reference C. |
| lem-cauchy-difference-quotient-exceptional-extension | literature-derived | ai-altered | The filled quotient occurs in A §2.2, S Theorem 4.1, and C Theorem 2.16; the local lemma isolates its obligations. References A, S, C. |
| thm-cauchy-integral-formula-circle | literature-derived | ai-altered | Circle formula in A §2.2, S Theorem 4.1, H65 Theorem 6.5.1, and C Theorem 2.16; the off-centre kernel calculation is expanded locally. References A, S, H65, C. |
| lem-differentiating-cauchy-integrals | literature-derived | ai-altered | A Lemma 3 and H65 Theorem 6.5.6 supply the result; proof uses the mandated direct estimate. References A, H65. |
| thm-cauchy-integral-formula-higher-derivatives | literature-derived | ai-altered | Existence and the formula are explicit in A §2.3, S Corollary 4.2, and H65 Theorem 6.5.7 with Corollary 6.5.10; the proof is induction through the kernel lemma. References A, S, H65. |
| cor-cauchy-inequalities | literature-derived | ai-altered | Exact inequalities in A §2.3 and S Corollary 4.3; proof uses published \(ML\) and circle length. References A, S. |
| ex-goursat-triangle-integral-of-z-squared | ai-generated | ai-generated | Exact \(0,1,i\) calculation comes from the design, not a source. Leaf requiring generation; parameterize every edge and cross-check with the polynomial primitive. |
| ex-goursat-four-triangle-boundary-cancellation | ai-altered | ai-altered | The picture specializes S's and H63's four-triangle subdivision to \(0,1,i\); every orientation is recomputed locally. References S, H63. |
| ex-cauchy-integral-formula-exponential-over-z-minus-one | literature-derived | ai-altered | Exact integral is H65 Example 6.5.3; proof invokes the local circle formula. Reference H65. |
| ex-cauchy-integral-formula-cosine-third-order-pole | ai-generated | ai-generated | Exact design example. Leaf requiring generation; check \(n=2\), \(2!\), and \(\cos''(1)=-\cos1\), giving \(-\pi i\cos1\). |
| cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral | literature-derived | ai-altered | The \(1/z\) circle witness is H64 Example 6.4.9 and CA-3; annulus/domain verification is explicit locally. Reference H64. |
| cex-connected-domain-need-not-be-star-shaped | ai-altered | ai-altered | Punctured-plane witness is selected locally from the source's multiply-connected setting and checked with published polygonal connectedness; use \(a,-a\). Reference H63. |
| fs-goursats-theorem-requires-continuity-of-the-derivative | literature-derived | ai-altered | A §1.4 and S Theorem 1.1 frame Goursat as removing \(f'\)-continuity; refutation cites the local theorem. References A, S. |
| fs-every-continuous-function-on-a-convex-domain-has-a-primitive | ai-generated | ai-generated | Exact false claim and \(\bar z\) disk witness are local. Leaf requiring generation; calculate \(\int_{|z|=1}\bar z\,dz=2\pi i\) and contradict the closed integral of a derivative. |

No ai-generated Statement/Construction is a dependency target. The generated items are companion leaves with checkable witnesses. Their truth-risk checks are mandatory at Step 5 and are encoded in the proof contracts. No external fallback is planned.

## Web research and canonical-coverage ledger

The exhaustive per-heading dispositions are in research/frontier-15-batch-6.coverage.json.

| source and locator actually read | support used here | convention disagreement or scope boundary |
|---|---|---|
| Ahlfors Ch. 4 §§1.4–2.3, printed pp. 109–123, URL A | rectangle Goursat, subdivision/cancellation strategy, nested selection, disk primitive theorem, filled quotient, circle formula, kernels, higher derivatives, inequalities | Ahlfors proves the rectangle form directly by repeated bisection and uses “analytic” for holomorphic. Its finite weak-exception theorems are stronger singularity results and are deferred. |
| Stein–Shakarchi Ch. 2 §§1–4, printed pp. 34–52, URL S | triangle Goursat, diagonal rectangle corollary, four-subtriangle mechanics, disk primitive/Cauchy theorem, circle formula, derivatives, inequalities | Main local domain is a disk; this scaffold uses the triangle proof and standard star-shaped bridge. Toy/keyhole contours and Fourier applications belong elsewhere. |
| Howell–Mathews Ch. 6 §6.3 body through Example 6.3.22, URL H63 | triangular theorem, subdivision picture, centred circle monomials | Live heading is “The Cauchy–Goursat Theorem.” Its simply-connected result leans on Green/deformation machinery and is not backing for this local page. |
| Howell–Mathews Ch. 6 §6.4 body through Example 6.4.9, URL H64 | primitive-by-integration strategy, fundamental theorem, \(1/z\) circle witness | Live heading is “Fundamental Theorems for Integration.” General simply-connected path independence is deferred to the global Cauchy page. |
| Howell–Mathews Ch. 6 §6.5 body through Corollary 6.5.12, URL H65 | circle formula, exact exponential example, kernel differentiation, existence and formula for all derivative orders | Live heading is “Cauchy's Integral Formulas.” The separate smoothness comparison is deferred to analyticity-liouville-and-morera; arbitrary-contour and pole-selection variants need index/residue machinery. |
| Tang-Kai Lee §2.1.2, printed pp. 22–24, URL C | exact one-exception theorem, convex exceptional Cauchy theorem, star-shaped proof note, filled quotient | Its index-weighted formula is global winding-number content; only the circle specialization belongs here. |
| J. Lebl, §3.2 Proposition 3.2.11 and its complete proof, URL L | exact triangle-to-primitive bridge on a star-like domain | Added to close a logical seam not explicit in the original source list. |
| UCR “Cantor's Intersection Theorem,” full note | exact complete-metric nested closed sets with diameters tending to zero | URL: <https://math.ucr.edu/~res/math205A/nested.pdf>. Corrects the ordered-field/metric-space mismatch. |

All source URLs were opened successfully. No source prose was copied into an item; the coverage file records source headings and named results, and this file records planned adaptations.

## Published dependency audit and closure

Every external dependency in the manifest was opened from disk and its status, exact Statement/Definition, domain, quantifiers, hypotheses, conclusion, and direction were checked. Complete set:

cor-closed-contour-integral-of-a-derivative-is-zero; cor-complex-differentiability-implies-continuity; cor-complex-trigonometric-and-hyperbolic-derivatives; cor-ml-estimate-for-complex-line-integrals; def-complex-contours-reversal-concatenation-and-closedness; def-complex-differentiability-holomorphic-and-entire; def-complex-domain; def-complex-line-integral-over-a-rectifiable-path; def-complex-primitive; def-convex-subset-of-euclidean-space; def-factorial-and-falling-factorial; def-metric-bounded-diameter; def-polygonal-path-and-polygonal-connectedness; def-star-shaped-open-subset-of-rn; lem-complex-conjugation-and-modulus-laws; lem-geometric-sequence-null; lem-punctured-rn-is-polygonally-connected; prop-linearity-of-complex-line-integrals; prop-reversal-and-concatenation-of-complex-line-integrals; rem-complex-plane-euclidean-dictionary; thm-algebra-of-complex-derivatives; thm-cantor-intersection-metric; thm-circle-circumference-diameter-ratio-is-pi; thm-circle-integrals-of-integer-monomials; thm-compact-subset-is-closed-and-bounded; thm-complex-exponential-is-entire-with-derivative-itself; thm-complex-plane-is-complete; thm-complex-polynomials-and-rational-functions-are-holomorphic; thm-continuous-image-of-a-compact-space-is-compact; thm-fundamental-theorem-for-complex-line-integrals; thm-heine-borel-rn; thm-induction-principle; thm-path-connected-implies-connected; thm-polar-form-with-unique-principal-argument; thm-recursion; thm-riemann-stieltjes-and-parametric-contour-integrals-agree; thm-uniform-limit-interchanges-complex-line-integrals; thm-well-ordering-principle.

No external dependency is legacy-unclassified and none has provenance.statement: ai-generated. Literature-derived statements were read directly. AI-altered statements were confirmed as standard exact claims from mathematical knowledge, with these material routes:

- thm-cantor-intersection-metric: source-checked at <https://math.ucr.edu/~res/math205A/nested.pdf> for the exact complete-metric, nonempty closed nested, diameter-to-zero convention.
- thm-complex-plane-is-complete: established-from-knowledge; exact Euclidean-metric statement also checked against the published complex-plane dictionary.
- All remaining AI-altered dependencies: established-from-knowledge after opening their complete on-disk statements. They are elementary exact claims about line integrals, continuity, compactness, derivative algebra, uniform limits, circle calculations, Euclidean geometry, or punctured-plane connectivity; domains and directions match their proof-contract uses.

The two companion counterexamples do not depend on fs-every-continuous-complex-function-on-a-domain-has-a-primitive. Their proofs cite the direct rational-function, modulus, circle-integral, connectedness, and star-shaped results they actually use. The annulus counterexample's Statement refuted will print the design's unrestricted Cauchy-theorem claim explicitly, so no second fs item or duplicated witness is needed.

Every load-bearing dependency is either earlier in this pair or published on a strictly earlier page. There are no exceptions, external fallbacks, forward references, or cross-batch dependencies.

## New-id report

For every id, this exact search pattern was run:

~~~sh
rg -n -F "<id>" items research/plan-spec.json
test -e "items/<id>.md"
~~~

Every search returned no existing item and no planned occurrence. New ids:

- def-oriented-complex-triangle-and-boundary
- rem-plane-star-shaped-and-convex-dictionary
- lem-goursat-four-triangle-boundary-cancellation
- lem-goursat-nested-triangle-selection
- thm-goursat-triangle-theorem
- cor-goursat-rectangle-theorem
- thm-goursat-theorem-one-exceptional-point
- prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain
- thm-holomorphic-primitive-on-star-shaped-domain
- cor-cauchy-theorem-star-shaped-domain
- cor-cauchy-theorem-convex-domain
- thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain
- lem-cauchy-difference-quotient-exceptional-extension
- thm-cauchy-integral-formula-circle
- lem-differentiating-cauchy-integrals
- thm-cauchy-integral-formula-higher-derivatives
- cor-cauchy-inequalities
- ex-goursat-triangle-integral-of-z-squared
- ex-goursat-four-triangle-boundary-cancellation
- ex-cauchy-integral-formula-exponential-over-z-minus-one
- ex-cauchy-integral-formula-cosine-third-order-pole
- cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral
- cex-connected-domain-need-not-be-star-shaped
- fs-goursats-theorem-requires-continuity-of-the-derivative
- fs-every-continuous-function-on-a-convex-domain-has-a-primitive

## Forward references and cross-batch dependencies

Forward references kept: none.

Cross-batch dependencies: none in either direction known from this scaffold.

## Confidence and unverified work

Confidence is high on the architecture, published dependency closure, source harvest, exceptional-point seam, and off-centre kernel correction. The delicate authored checks are the orientation ledger in the four-triangle identity, treatment of an exceptional point on an edge or vertex, and the uniform geometric remainder in the off-centre kernel calculation; the proof contracts enumerate them, but no item has yet been authored or judged.

I ran validate-plan.mjs against the current research/plan-spec.json, but neither it nor depsource.mjs is authoritative for this batch until Step 4 splices this manifest. I did not verify future rendered diagrams, item frontmatter, or judge verdicts. The proof-contract gate necessarily reports missing planned item files before Step 5; its pre-authoring structural and citation-quote checks are reported below.

## Batch-local gate log

This section records only commands actually run.

- node tools/coverage-checklist.mjs research/frontier-15-batch-6.coverage.json: passed after the Step-3 source-ledger refinement; pages=1, harvested_results=92, errors=0, warnings=0.
- JSON parse and manifest/contract-set checks: passed; both page objects parse, the proof-contract scope and contract-key set agree, and every contract item is planned.
- Published proof-contract quote check: passed; all 48 citations to existing items match the normalized exact text in their declared Statement/Definition section. The 23 citations to planned earlier items remain Step-5 exact-authoring obligations.
- node tools/content-policy.mjs research/frontier-15-batch-6.pages.json --manifest-only: passed; errors=0, warnings=0.
- node tools/prosecheck.mjs on all batch artifacts with --warnings: errors=0. Its warnings are scaffold/report anchors rather than authored page prose: Edit 2's exact-old-text inventory anchor and numbered source-result titles.
- Dependency/order audit: passed; external_targets=38, published_homes_resolved=38, published_order_range=6..307, and no same-page dependency points forward.
- New-id collision audit against items/ and research/plan-spec.json: no collision or existing item file.
- notation-iota-applied and wikilink-in-math searches: no actual occurrence in planned prose. Wikilinks embedded in exact quoted published Statements are outside their adjacent math delimiters.
- node tools/proof-contract.mjs research/frontier-15-batch-6.proof-contracts.json: run before authoring and, as expected, reported item-missing for each planned item. This is not claimed as a pass; the separate pre-authoring structure, order, boundary, and exact-published-quote checks above passed.
- node tools/depsource.mjs was run only against the unspliced base spec while tracing foundational item homes. Its base-spec result is not a batch gate and is not claimed for this manifest. The requested validate-plan command was run during the Step-3 fix pass and is recorded below.

## Step-3 fix pass

### B6-1 — applied

Added `cor-goursat-rectangle-theorem` immediately after the triangle theorem, backed by Ahlfors §1.4 Theorem 2 and Stein–Shakarchi §1 Corollary 1.2. The strategy splits a positive-side-length rectangle along a specified diagonal, applies triangle Goursat twice, cancels the oppositely oriented diagonal, and reassembles the positive rectangle boundary. The coverage rows now disposition the rectangle theorem to this item, and the proof-contract scope contains its complete citation, derivation, and boundary map.

### B6-2 — applied

Removed `fs-every-continuous-complex-function-on-a-domain-has-a-primitive` from both companion counterexamples. Neither proof uses the false Statement; each already declares the direct published results that establish its witness. The annulus and punctured-plane strategies and contract review notes no longer describe that unused edge as provenance continuity.

### B6-3 — applied

Added `lem-complex-conjugation-and-modulus-laws` to the annulus counterexample and added its exact triangle-inequality clause to the contract. The planned first step derives $||z|-|w||\le |z-w|$ and chooses a positive radius below the two gaps $|z|-1/2$ and $2-|z|$, which proves the annulus open before `def-complex-domain` is invoked.

### B6-4 — applied

Retitled `thm-cauchy-integral-formula-higher-derivatives` so its planned Statement asserts that every higher complex derivative exists and satisfies the formula. Its strategy and derivation map now prove existence and the representation simultaneously. Howell–Mathews Corollary 6.5.10 is split faithfully in coverage: existence is included here, while the separately emphasized holomorphicity/smoothness consequence and Remark 6.5.11 are deferred to `cor-holomorphic-functions-are-real-analytic-and-smooth` on `analyticity-liouville-and-morera`.

### B6-5 — applied

Author decision: retain a single `cex-` carrier rather than duplicate the annulus witness in a new `fs-` item. By the item schema, `cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral` must print a `Statement refuted`; its strategy now requires the exact claim that Cauchy's theorem holds for every closed rectifiable contour in every complex domain. A separate canonical-coverage row accounts for that design false statement and maps it to the counterexample.

### B6-6 — applied (adjudication recorded; no scaffold mutation owed)

Recorded Alpha's approval of Findings F1–F6 without reopening or reverting any of the approved scaffold changes. The Step-5 authoring obligation is retained explicitly: every use of `cor-closed-contour-integral-of-a-derivative-is-zero` must verify that the primitive is holomorphic, its derivative is continuous, and the rectifiable contour is closed. This finding requires no new item, dependency, coverage disposition, or proof-contract row at the scaffold-fix stage.

### Fix-pass gate record

- `node tools/coverage-checklist.mjs research/frontier-15-batch-6.coverage.json`: passed; 1 page, 92 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-15-batch-6.pages.json`: passed; 25 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed for the current unspliced plan; it reported no item-level cycles, forward references, B-page dependencies, or unresolved ids among pages whose item lists are already present. This is not claimed as validation of the unspliced batch-6 edits.
- `node tools/prosecheck.mjs` on the four batch-6 artifacts with `--warnings`: passed with 0 errors. Its warnings are exact scaffold anchors and numbered source-result titles, not authored page prose.
- `node tools/source-fetch-check.mjs --coverage research/frontier-15-batch-6.coverage.json --stamp`: passed; all 8 sources carry existing full-body verification stamps, and no source needed a new stamp.

## Step-5 authoring

### Authored artifacts and per-item precheck

The authored pages are `library/complex-analysis/goursat-and-cauchys-theorem-in-a-convex-domain.md` and `library/complex-analysis/goursat-and-cauchys-theorem-in-a-convex-domain-examples.md`. Both are draft pages. The A-page body has exactly two nonempty prose paragraphs, and the B-page body is empty. Their `items:` and `examples:` lists exactly match the authored files.

| item | precheck |
|---|---|
| def-oriented-complex-triangle-and-boundary | n/a: definition |
| rem-plane-star-shaped-and-convex-dictionary | n/a: remark |
| lem-goursat-four-triangle-boundary-cancellation | pass |
| lem-goursat-nested-triangle-selection | pass |
| thm-goursat-triangle-theorem | pass |
| cor-goursat-rectangle-theorem | pass |
| thm-goursat-theorem-one-exceptional-point | pass |
| prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain | pass |
| thm-holomorphic-primitive-on-star-shaped-domain | pass |
| cor-cauchy-theorem-star-shaped-domain | pass |
| cor-cauchy-theorem-convex-domain | pass |
| thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain | pass |
| lem-cauchy-difference-quotient-exceptional-extension | pass |
| thm-cauchy-integral-formula-circle | pass |
| lem-differentiating-cauchy-integrals | pass |
| thm-cauchy-integral-formula-higher-derivatives | pass |
| cor-cauchy-inequalities | pass |
| ex-goursat-triangle-integral-of-z-squared | pass |
| ex-goursat-four-triangle-boundary-cancellation | pass |
| ex-cauchy-integral-formula-exponential-over-z-minus-one | pass |
| ex-cauchy-integral-formula-cosine-third-order-pole | pass |
| cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral | pass |
| cex-connected-domain-need-not-be-star-shaped | pass |
| fs-goursats-theorem-requires-continuity-of-the-derivative | pass |
| fs-every-continuous-function-on-a-convex-domain-has-a-primitive | pass |

### Final component-provenance ledger

Every item has `status: draft` and `origin: session`. No authored file sets `verification.audited`, `verification.verified`, or a judge result. Source keys A, S, H63, H64, H65, C, and L refer to the URLs recorded above. Each source-backed item repeats its support URL in `sources.references`.

| item | statement / proof | source and edit history |
|---|---|---|
| def-oriented-complex-triangle-and-boundary | literature-derived / not-applicable | S and H63 supply the triangle and orientation convention; local wording aligns it with published contour length, concatenation, modulus, and metric diameter. |
| rem-plane-star-shaped-and-convex-dictionary | ai-altered / not-applicable | Local agreement of the cited Euclidean and complex-plane definitions, supported by L; no new notion is introduced. |
| lem-goursat-four-triangle-boundary-cancellation | literature-derived / ai-altered | A and S supply midpoint cancellation; the local proof lists and cancels every directed edge. |
| lem-goursat-nested-triangle-selection | literature-derived / ai-altered | S supplies quarter retention and halving; the local edit adds least-index selection, compactness, completeness, and the natural base index. |
| thm-goursat-triangle-theorem | literature-derived / ai-altered | S and H63 state the theorem; the proof is adapted through the local nested lemma, derivative definition, polynomial primitive, linearity, and ML. |
| cor-goursat-rectangle-theorem | literature-derived / ai-altered | A and S state the rectangle conclusion; local prose defines the positive boundary exactly and proves it by two triangles. |
| thm-goursat-theorem-one-exceptional-point | literature-derived / ai-altered | C Theorem 2.14 supplies the claim; the local proof handles every position of the exceptional point and degenerate triangles. |
| prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain | literature-derived / ai-altered | L Proposition 3.2.11 and C supply the bridge; the local proof adds existence and the short-edge estimate under the repository's contour conventions. |
| thm-holomorphic-primitive-on-star-shaped-domain | literature-derived / ai-altered | A, S, and L support the result; the local proof combines continuity, Goursat, and the preceding bridge. |
| cor-cauchy-theorem-star-shaped-domain | literature-derived / ai-altered | A and C support the conclusion; the proof explicitly checks holomorphy, derivative continuity, closedness, and rectifiability before the FTC corollary. |
| cor-cauchy-theorem-convex-domain | literature-derived / ai-altered | C supplies the convex result; the proof reduces through the exact domain and star-shaped definitions. |
| thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain | literature-derived / ai-altered | C supplies the exceptional result and star-shaped extension; the proof constructs a primitive and checks every closed-derivative theorem hypothesis. |
| lem-cauchy-difference-quotient-exceptional-extension | literature-derived / ai-altered | A, S, and C use the filled quotient; the local lemma isolates continuity at the filled point and holomorphy only away from it. |
| thm-cauchy-integral-formula-circle | literature-derived / ai-altered | A, S, H65, and C give the formula; the local proof derives the off-centre kernel from a finite geometric identity and uniform remainder. |
| lem-differentiating-cauchy-integrals | literature-derived / ai-altered | A and H65 supply the result; the proof uses a direct power-difference identity, compact trace bounds, positive separation, and ML. |
| thm-cauchy-integral-formula-higher-derivatives | literature-derived / ai-altered | A, S, and H65 state existence and the formula; local induction proves both simultaneously from \(n=0\). |
| cor-cauchy-inequalities | literature-derived / ai-altered | A and S give the inequalities; the proof uses the higher formula, ML, and the published circle length. |
| ex-goursat-triangle-integral-of-z-squared | ai-generated / ai-generated | Designed leaf computed from the polynomial primitive and independently checked against Goursat; it is not a dependency target. |
| ex-goursat-four-triangle-boundary-cancellation | ai-altered / ai-altered | The S and H63 subdivision is specialized to \(0,1,i\), with every orientation recomputed locally. |
| ex-cauchy-integral-formula-exponential-over-z-minus-one | literature-derived / ai-altered | H65 Example 6.5.3 supplies the exact value; the proof uses the local circle formula and published exponential. |
| ex-cauchy-integral-formula-cosine-third-order-pole | ai-generated / ai-generated | Designed leaf checked locally for \(n=2\), \(2!\), the sign of the second derivative, and the circle boundary; it is not a dependency target. |
| cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral | literature-derived / ai-altered | H64 supplies the \(1/z\) witness; local proof adds openness, rational holomorphy, explicit path-connectedness, and path continuity. |
| cex-connected-domain-need-not-be-star-shaped | ai-altered / ai-altered | Punctured-plane witness selected locally from H63's multiply-connected setting and checked using published polygonal connectedness and the segment from \(a\) to \(-a\). |
| fs-goursats-theorem-requires-continuity-of-the-derivative | literature-derived / ai-altered | A and S frame Goursat as removing the extra \(f'\)-continuity hypothesis; the refutation cites the local theorem exactly. |
| fs-every-continuous-function-on-a-convex-domain-has-a-primitive | ai-altered / ai-altered | Howell-Mathews Example 6.2.16 supplies conjugation with path-dependent integrals; the local refutation uses the whole plane and unit circle and proves the domain hypotheses. |

The expected provenance for `fs-every-continuous-function-on-a-convex-domain-has-a-primitive` changed from `ai-generated/ai-generated` to `ai-altered/ai-altered`. Howell-Mathews Example 6.2.16 at <https://complexanalysis.org/web/sec_contour-integrals.html> supports the exact conjugation obstruction, and that URL is recorded on the item. This is a provenance correction, not a claim change.

Generated-claim counterexample searches:

- `ex-goursat-triangle-integral-of-z-squared`: checked all positively oriented edge increments from \(z^3/3\) and independently checked the total with Goursat. The values are \(1/3\), \((-i-1)/3\), and \(i/3\); no discrepancy was found.
- `ex-cauchy-integral-formula-cosine-third-order-pole`: checked the pole-order mapping \(3\mapsto n=2\), \(2!\), \(\cos''(1)=-\cos1\), and nonvanishing on the radius-two circle. Direct substitution gives \(-\pi i\cos1\); no conflicting case was found.

### Scaffold-change ledger

No id, kind, title, reading order, page assignment, mathematical claim, or planned item was dropped, renamed, merged, or narrowed. The B-page title exactly matches the scaffold. The rectangle Statement makes its positive-side-length convention explicit as required by Alpha; the higher-derivative Statement includes derivative existence exactly as fixed in Step 3.

Final dependency deltas from `research/frontier-15-batch-6.pages.json`:

- `def-oriented-complex-triangle-and-boundary`: added modulus laws and piecewise-\(C^1\) length; dropped unused polygonal-path terminology.
- `lem-goursat-four-triangle-boundary-cancellation`: dropped unused line-integral linearity.
- `lem-goursat-nested-triangle-selection`: added the geometric-sequence limit and complex triangle inequality used in the proof.
- `thm-goursat-triangle-theorem`: added the triangle definition, derivative definition, and line-integral linearity used explicitly.
- `thm-goursat-theorem-one-exceptional-point`: replaced the unused midpoint lemma with reversal and concatenation used in the cut-off and fan arguments.
- `prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain`: added line-integral existence, ML, and linearity.
- `cor-cauchy-theorem-star-shaped-domain`: added the primitive definition.
- `cor-cauchy-theorem-convex-domain`: added the star-shaped and complex-domain definitions.
- `thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain`: added the primitive definition.
- `thm-cauchy-integral-formula-circle`: dropped the plane dictionary because disc star-shapedness is derived inline.
- `lem-differentiating-cauchy-integrals`: added line-integral existence, the compact interval/image/boundedness chain, and complex integer powers.
- `thm-cauchy-integral-formula-higher-derivatives`: added holomorphic-implies-continuous for the induction's boundary data.
- `ex-goursat-triangle-integral-of-z-squared`: added holomorphic-implies-continuous to check the FTC hypothesis.
- `cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral`: added the path-connected definition, exponential theorem, and holomorphic continuity for the explicit polar paths.
- `cex-connected-domain-need-not-be-star-shaped`: dropped the rational-function theorem because openness is direct; added path-connectedness, polygonal connectedness, and modulus laws.
- `fs-every-continuous-function-on-a-convex-domain-has-a-primitive`: added the primitive and complex-domain definitions and connectedness of \(\mathbb R^2\).

Every other dependency list equals its scaffold baseline. Every final dependency appears as an actual wikilink. No load-bearing target has `provenance.statement: ai-generated`, and no target is legacy-unclassified. No external fallback or published-dependency repair was used.

### Coverage, contracts, and boundaries

`research/frontier-15-batch-6.coverage.json` remains true of the authored set: every `included` row names an item that exists, and no planned inclusion was dropped. The checklist passes with 1 page, 92 harvested results, 0 errors, and 0 warnings. Its 8 registered sources retain verified full-body stamps. Howell-Mathews Example 6.2.16 is recorded directly on its supported item; a ninth coverage-source stamp was not fabricated after the local fetch attempt encountered DNS failure.

`research/frontier-15-batch-6.proof-contracts.json` quotes every direct fact source exactly, records every use, and has one derivation-map entry for every numbered step. Every contract specifically disposes empty, zero, one, degenerate, endpoints, nonempty choice, and both iff directions. Strict validation passes for all 23 proof-bearing items.

The boundary pass checked repeated and collinear triangles, zero integrals/perimeters/diameters, natural index \(0\), positive rectangle side lengths, every exceptional-point position, existence of segment integrals, the excluded value \(h=0\), circle interior/boundary separation, constant contours/functions, the factorial base case, \(M=0\), and both the domain and non-star-shaped parts of the companion witnesses.

### Step-5 gate record

The gate results below come from commands actually run:

- `node tools/tsx-run.mjs tools/reflow.mts` on all batch items: every file unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on all batch items: 23 proof-bearing items checked, 0 failing; definition and remark n/a.
- `node tools/proof-contract.mjs research/frontier-15-batch-6.proof-contracts.json --strict`: 23/23, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-15-batch-6.coverage.json`: 1 page, 92 results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-15-batch-6.coverage.json`: 8/8 fetch-verified.
- `node tools/content-policy.mjs research/frontier-15-batch-6.pages.json`: 25 scoped items, 0 errors, 0 warnings.
- `node tools/prosecheck.mjs` on all item/page files with `--warnings`: 27 files, 0 errors, 0 warnings; positional-spec check passed.
- `node tools/rendercheck.mjs` on all item/page files: all frontmatter and math parsed; no delimiter or wikilink-in-math defect. The page-only rerun after restoring the exact scaffold title also passed.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed with only repository-wide redundant-prerequisite notices.
- `node tools/depsource.mjs` on each batch page id: 0 unresolved for each.
- `node tools/depcheck.mjs`: exit 0; repository-wide advisory warnings only, none for batch 6.
- `node tools/fwdcheck.mjs`: exit 0.
- `node tools/extcheck.mjs`: exit 0; inherited published warnings only.
- `node tools/citecheck.mjs`: exit 0; repository-wide advisory warnings only, none requiring a batch-6 dependency change.

### Escalations, blockers, and confidence

Escalations: none. No needed item is missing, no published dependency was found unambiguously false, no cross-batch or B-page dependency was needed, and no scaffold claim proved unauthorable. No blocker remains.

Confidence is high in the Statements, boundary handling, dependency directions, exact fact citations, and local contour arguments. The most delicate passages were rechecked against their contracts: deterministic nested selection, exceptional-point geometry, the off-centre remainder, direct kernel differentiation, simultaneous higher-derivative induction, and the annulus paths.

I did not run either judge lane, publish any item, set an audit or verified field, or transition the autopilot run. I did not reconstruct every theorem in the transitive closure of the direct dependencies; I opened and verified every direct dependency Statement/Definition and provenance, and the mechanical dependency/source gates passed. Howell-Mathews Example 6.2.16 was checked on its live page, but it was not added as a ninth stamped coverage source because the local source-fetch operation could not resolve that host during the attempted stamp.
