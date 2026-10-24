# Algebraic number theory scaffold audit

Audit date: 2026-10-23. Reviewer: `/root/ant_auditor`.

## Scope and current audit state

This report covers the proposed algebraic number theory prose scaffold, its
pair/source inventories, and its prerequisite graph. It does not certify
authored proofs, native build or review coverage, gate success, or publication.
The canonical track draft is `research/plan-algebraic-number-theory-track.md`;
the builder has the exclusive write scope for that file and its build report.
I have not edited either file, `research/plan-spec.json`, or any item/page
carrier.

At the initial audit checkpoint, the canonical track draft and researcher
dossiers were still in progress. The findings below are now checked against
the completed prose track, combined page fragment, combined item projections,
and researcher source logs. This is a static planning audit; it does not
certify future proofs, source gates, native build/review coverage, or
publication.

## Confirmed existing supplier coverage

The published `number-theory` category already contains substantial algebraic
number theory. These pages are existing suppliers and should be reused when the
new plan reaches the same statements:

| Published page | Existing coverage |
|---|---|
| `number-fields-rings-of-integers-and-discriminants` | Number fields, algebraic integers, orders and integral bases, trace/norm, embeddings/signature, discriminants, quadratic-field integer rings, Dedekind property. |
| `prime-ideal-decomposition-ramification-and-the-different` | Ideal norms and factorization, residue degree and ramification index, Dedekind–Kummer, discriminant ramification, codifferent/different, tame/wild exponent bounds. |
| `decomposition-inertia-and-frobenius` | Number-field places and completions, Hensel factor lifting, Galois action on primes, decomposition/inertia groups and exact sequence, towers/fixed fields, arithmetic Frobenius and cycle type. |
| `minkowski-theory-and-number-field-class-groups` | Minkowski embedding/lattices, first and second convex-body theorems, successive minima, ideal covolumes and Minkowski bound, class-group finiteness/generators, Hermite–Minkowski finiteness. |
| `dirichlets-unit-theorem-regulators-and-s-units` | Product formula, logarithmic embedding and full unit lattice, Dirichlet unit theorem, regulator, signature ranks, (S)-integers and (S)-unit theorem. |
| `cyclotomic-arithmetic-and-reciprocity-via-frobenius` | Cyclotomic integer rings/discriminants and conductor, prime splitting, Gauss sums, quadratic reciprocity through arithmetic Frobenius. |
| `absolute-values-completions-and-p-adic-numbers`; `hilbert-symbols-and-the-quadratic-local-global-principle` | Rational absolute values/completions and Hasse–Minkowski for quadratic forms over ℚ. |

The previous number theory scaffold `research/plan-number-theory-track.md`
specifies additional cross-track prerequisites: commutative algebra's
integral-extension, DVR, Dedekind-domain, ideal, localization, completion and
Hensel interfaces; abstract algebra's finite-field, Galois and cyclotomic
interfaces; and explicit Choice inheritance for selected Minkowski/unit
arguments. I verified the current published page bodies and frontmatter for
the listed number theory suppliers; I did not treat the older plan as evidence
that any unbuilt sibling prerequisite is present.

The older number theory plan §2 explicitly deferred class field theory, ideles,
Artin reciprocity, Kronecker–Weber, and higher reciprocity. The current owner's
explicit expansion authorizes treating those topics in a new Algebraic Number
Theory category; the old defers are historical baseline, not a veto. A
repository ID search found relevant but incomplete group-cohomology/Hilbert 90
definitions and a few draft quadratic local/global norm lemmas, but no
published general class-field-theory supplier. Any new class-field-theory
branch therefore needs its own concrete prerequisite and proof inventory;
source references alone do not make those draft items usable suppliers.

## Audit checklist for the final track

## Preliminary source-file checks

The local PDF/text inventory is not uniformly usable as evidence:

- The initially present `r5-sources/rubin-euler-systems-iwasawa-selmer.pdf`
  was an HTML Incapsula error page (1,049 bytes), with an 83-byte paired text
  file. It has since been removed from the current source directory. The final
  R5 source map does not use that item as a supplier; its Mazur–Rubin
  Kolyvagin-systems source is a separate, identified full text.
- `r2-sources/milne-arithmetic-duality-theorems.pdf` produces garbled text
  extraction on its opening pages. A clean complete Second Edition is present
  as `r2-sources/milne-arithmetic-duality-theorems-notes.pdf` and
  `r3-sources/milne-arithmetic-duality-theorems-2e.pdf`, each with 347 pages
  and readable extracted text. Any evidence must identify one of those clean
  copies and its exact edition.
- `r4-sources/laurent-lafforgue-global-langlands-function-fields.pdf.txt`
  identifies itself as arXiv:math/0212400v1, David Mumford's ICM paper
  “Pattern Theory: The Mathematics of Perception.” The file does not match its
  claimed Lafforgue/function-field title and cannot support that branch. The
  mismatched file has since been removed from the current source directory.
  The current R4 source ledger points to the verified replacement:
  `r4-sources/laurent-lafforgue-global-langlands-fulltext.pdf/.txt` identifies
  the 2002 Inventiones paper *Chtoucas de Drinfeld et correspondance de
  Langlands* (DOI 10.1007/s002220100174, printed pp. 1–241). The ledger
  records the exact sections read and remaining proof gates; the removed
  mismatched download remains a historical file-integrity finding.

These are file-integrity and source-availability observations. The final
dossiers identify the clean ADT and Lafforgue copies where used and state their
read limits. This audit cross-checks the named source identities and the source
rows discussed below; a downloaded file or bibliography entry alone does not
establish that a proof was read.

- Verify every pair's page IDs, item IDs/kinds, page counts, and local item
  order against current `items/` and `library/` files and the canonical plan.
- Trace every `deps` and A-page `requires` edge to an exact existing published
  item/page or an explicitly planned earlier supplier. A companion B page must
  not supply another pair; no missing supplier, forward edge, alias ambiguity,
  or dependency cycle is acceptable.
- Check overlap against the published suppliers above and the explicit
  ownership/seam decisions in the existing number theory and commutative
  algebra plans. New rows should fill a genuine gap or add a distinct result,
  not restate an established library theorem under a second ID.
- Check exact hypotheses and conventions in every mathematical claim:
  extension degree/separability/normality, ring and ideal hypotheses, local
  field/valuation normalizations, chosen reciprocity/Frobenius convention,
  class-group variant, and Choice use. Keep definitions before first use and
  distinguish established results awaiting local proof from genuinely open
  problems. For heights, keep relative $H_K$ and absolute height
  ($H_{\mathrm{abs}}=H_K^{1/d}$, where $d=[K:\mathbb Q]$) distinct across Schanuel counting,
  Northcott, Diophantine results, and arithmetic-dynamics consumers; check each
  theorem's exponent and error term after any normalization change.
- For each algorithm, require explicit inputs, outputs, admissibility
  conditions and executable steps; require correctness, well-definedness,
  termination and complexity only as separately stated proved obligations.
- Reconcile the broad frontier axes explicitly: function fields/Drinfeld
  modules/shtukas; higher local fields/class field theory/duality;
  Brauer/étale/fppf/Poitou–Tate; arithmetic (K)-theory/motives/special
  values; prismatic/integral (p)-adic Hodge theory/perfectoid spaces;
  arithmetic dynamics/Diophantine geometry/transcendence; and certified
  computational algorithms. Each axis needs a concrete pair, an exact local
  supplier, or a justified source-backed defer. A theorem name without its
  actual supplier interface is insufficient.
- Audit any proposed étale/Deligne chain separately and in dependency order.
  Finite-étale covers do not supply étale cohomology. A trace formula or Weil
  II endpoint is not a closed pair unless the plan exposes the essential site
  and cohomology constructions, derived/cohomological prerequisites, exact
  hypotheses, and intermediate proof suppliers. Add prerequisite pairs where
  these are missing rather than hiding them behind a named theorem.
- Use the 2026-08-13 subjects-01 materials and the older number theory scaffold
  to locate existing suppliers and understand previous boundaries. The
  current owner's request supersedes the old category scope and authorizes a
  distinct Algebraic Number Theory category appended to the canonical plan.
  Preserve existing supplier homes and IDs; record actual cross-category
  prerequisites where the new branches need algebraic geometry, abstract
  algebra, commutative algebra, or complex analysis. Do not treat old defers as
  a reason to omit an expressly requested frontier branch.
- Verify full-text source identity, version/edition, URL and local file; exact
  consulted page/section/theorem locators; source-to-pair claim support; and
  honest extraction/read limits. Require a heading disposition for every
  heading in each claimed read range, including out-of-scope and deferred
  material. A downloaded PDF, contents extraction, or citation alone does not
  establish that a proof was consulted. This follows the binding source
  direction in `research/subjects-01-number-theory-enrich.task.md`: verify
  source reachability, obtain full texts, harvest each source's own headings
  over the exact read ranges, disposition every heading, and provide a
  per-pair source table; candidate treatments are not automatically accepted.
- Report any unresolved source-access, proof, dependency, scope, or status
  question without upgrading it to a completed proof or current literature
  consensus.

## Plan-specific findings and dispositions

### Function-field class-field-theory source boundary checkpoint

The local R2 texts distinguish the global existence proof from its local
inputs. Milne, *Arithmetic Duality Theorems*, 2nd ed., Appendix A, §§A.1–A.6
(printed pp. 127–131; local text
`r2-sources/milne-arithmetic-duality-theorems-notes.pdf.txt`) explicitly
derives function-field class-field theory except for the existence theorem;
it proves Henselian local reciprocity and records the complete finite-residue
local existence case. Yoon, “Neukirch’s Approach to the Reciprocity Map and
Global Class Field Theory in Positive Characteristic,” §§2–3 and Appendix A
(local text
`r2-sources/global-function-field-class-field-theory-neukirch-approach.pdf.txt`),
states global existence and proves the second inequality, but its local Theorem
3 invokes the local CFT axiom and points to Neukirch for its proof. The
combined plan now supplies shared global/function-field, place/completion,
function-field product-formula, weak-approximation, and adele/idele interfaces
with exact item rows and page requirements; these are planned suppliers, not
current library pages. It also includes the additive adele quotient theorem
and the multiplicative idelic diagonal/quotient contracts.

Two original Yoon proof gaps remain accurately marked in `r2-local-global.md`.
Yoon §3.3.1 Corollary 1, used in Corollary 2 and the second-inequality proof,
asserts infinitely many non-splitting places but cites Neukirch [14] and omits
its proof. R2 adds the distinct item
`thm-global-function-field-infinitely-many-nonsplit-primes` using the first
norm-index inequality, weak approximation and open norm subgroups, while the
local unit Herbrand-quotient argument remains a proof/source gate. Yoon §3.2
Proposition 5 also splits the idele class group using a rational place of
degree one, unavailable for every global function field over its full
constant field. The planned Picard-degree-one torsor, Lang vanishing and
finite-field Brauer sequence produce a degree-one virtual divisor without
asserting a rational point. The exact-constant-field condition and Bézout
construction remain explicit.

The function-field existence theorem is still established-but-proof-gated:
equal-characteristic local norm-subgroup existence is cited rather than
proved in the read ADT/Yoon passages. The global theorem's local existence and
nonsplitting/norm-index obligations remain visible, and the proof route does
not use Chebotarev. This source-boundary audit records current planned
interfaces and unresolved proof duties; it does not claim the future pairs
are proof-closed.

### Étale/Deligne supplier boundary checkpoint

Current library interfaces are narrower than étale cohomology over finite
fields. `etale-covers-and-the-etale-fundamental-group` classifies finite étale
covers by finite continuous actions of the étale fundamental group. The analytic
constructible-sheaf and proper-hypercover pages concern the analytic topology
of complex algebraic varieties. Published
`thm-good-reduction-and-smooth-proper-base-change` proves coherent cohomology
and base change together with prime-to-residue-characteristic torsion
specialization, and explicitly disclaims an all-degree smooth-proper étale
cohomology theorem. These are reusable local interfaces, but none supplies
the full \(\ell\)-adic constructible derived formalism over finite fields, its
compact-support operations and comparison/base-change theorems, the trace
formula, or Weil II. Any final trace-formula/Weil-II chain must supply those
missing prerequisites explicitly or place them in separate earlier pairs.

R4 has added explicit small-étale-site, derived-category, compatible
$\ell$-adic-system, $Rf_!$, compactification-independence, proper-base-change,
and constructible-stalk trace items ahead of the trace formula. The current
Poincaré-duality contract now states its smooth geometrically connected curve,
lisse coefficient, $\ell\ne p$, and Tate-twist conditions. The FKM trace
correlation was also corrected after checking the scanned Theorem 4.1 (printed
p. 13): both sums use
$\sum_x t_{\mathcal F_1}(x)\overline{t_{\mathcal F_2}(x)}$, and the proof uses
$\mathcal F_1\otimes D(\mathcal F_2)$. The constructible-stalk trace is now
separate from the lisse-open/inertia-invariant trace function. These repairs
address the prior contract mismatch; the FKM tensor-conductor estimate and
Lafforgue's cited 1997/1998 inputs remain explicit proof/source gates.

The source table now records Milne *Lectures on Étale Cohomology* Chapter I
§§5–9, printed pp. 39–69, for the étale site, sheaf categories, images,
extension by zero, derived-functor cohomology and excision. R4 also added a
separate perfectoid-fields/spaces/tilting pair sourced to Scholze's complete
published *Perfectoid Spaces* paper, with explicit finite-étale and étale-site
interfaces. Its unread Gabber–Ramero/Illusie inputs to the almost-ring proof
remain named local proof gates; later diamonds/relative perfectoid theory and
weight-monodromy are explicitly deferred. This closes the earlier coverage
omission while preserving the limited scope.

### Complex multiplication frontier checkpoint

R4 has added pairs for elliptic CM and ring class fields, and for CM types,
reflex fields and abelian-variety reciprocity. The Cox source record covers
Chapter III §§9–11 and §13.A Proposition 13.2; Milne's *Complex Multiplication*
notes and 2007 article supply the stated higher-dimensional interfaces. The
ring-class contract correctly quotients by the image of scalar residues and
keeps the global-unit kernel; the action uses arithmetic Frobenius to match
Cox's ideal action. The record leaves Cox's cited proof of Theorem 11.36, the
local scalar-residue/unit bridge, singular-modulus generation, and Deligne's
absolute-Hodge input to the higher-dimensional theorem as explicit proof gates.
It does not claim the cited global proofs are already reproduced.

The R4 CM pair consumes R1's new
`quadratic-orders-gauss-composition-and-ideal-classes` pair and its primitive
form/ideal-class bridge. The combined projection now includes that supplier
and its bounded-discriminant enumeration companion. R4's Hilbert-class-
polynomial example now uses A-page modular-form and form-class suppliers, with
no B-to-B edge. The CM statement scopes and exact proof gates above remain
future local-authoring obligations, not source-free claims.

### Requested frontier coverage disposition

| Frontier axis | Planned disposition checked | Remaining boundary |
|---|---|---|
| Function fields, Drinfeld modules and shtukas | R2 has explicit global function-field, class-field and duality pairs; R4 has Drinfeld-module and shtuka/global-Langlands pairs. | Lafforgue's 1997 Arthur–Selberg and cited compactification/\(\varphi\)-lattice proofs remain explicit gates; no source-free completion claim is made. |
| Higher local fields, CFT and duality | R2 includes finite-residue local CFT, Milnor \(K\)-groups, and bounded higher-local frontiers. | General \(d\)-local reciprocity and duality are source-based defers to the incomplete Parshin/Kato/\([FK]\) proof chain; the plan claims no such theorem. |
| Brauer, étale/fppf and Poitou–Tate | R2 supplies Brauer–Hasse, Poitou–Tate, and finite-flat duality; R4 supplies the small étale site, derived \(\ell\)-adic operations, compact support, trace and weight chain. | Finite-flat statements retain their ADT hypotheses; FKM tensor-conductor and selected Weil/Langlands inputs remain proof gates. |
| Arithmetic \(K\)-theory, motives and special values | R5 includes relative algebraic \(K\)-theory, Borel regulators, motivic/special-value conjectures and Iwasawa special-value pairs. | Future local proofs and identified source/status gates remain; conjectures are not promoted to theorems. |
| Prismatic/integral \(p\)-adic Hodge theory and perfectoid spaces | R4 includes integral prismatic/crystalline lattices, perfectoid fields/spaces/tilting, and the BMS bridge. | Almost-ring and imported comparison inputs retain named proof gates; later diamonds/relative perfectoid theory is explicitly outside the slice. |
| Arithmetic dynamics, Diophantine geometry and transcendence | R3 includes height/Northcott, arithmetic dynamics, Diophantine finiteness, and effective logarithmic-form/transcendence interfaces. | Height conventions are checked above; source-dependent effective bounds and open conjectures keep their separate proof/status limits. |
| Certified computational algorithms | R1 defines separate exact algorithms and correctness/termination items for integral closure, prime decomposition, bounded ideals, S-unit/class-group computation, quadratic composition, and bounded-discriminant enumeration. | The finite procedures make no practical complexity claim; A5's coordinate lemma and A7/A8 correctness proofs remain local authoring obligations. |

This is a coverage check against the owner's requested axes, not a claim that
the algebraic-number-theory literature or future proof work is complete.

### Additive adelic quotient coverage

The owner required the additive global-field result alongside the
multiplicative idelic quotient. The combined plan now includes a base-case
theorem, a finite-separable adelic base-change theorem, and the general
statement that $F\hookrightarrow\mathbb A_F$ is discrete and
$\mathbb A_F/F$ is compact. The source check found a complete read supplier in
MIT 18.785 Fall 2021, Lecture 25 §25.3, Theorem 25.12 and Corollary 25.11
(printed pp. 7–8; the full §25.1–25.3 read is recorded in the R2 source
ledger): it explicitly proves both $\mathbb Q$ and $\mathbb F_q(t)$ base
cases and extends to global fields by finite-separable base change. Stein,
*Algebraic Number Theory: A Computational Approach*, Ch. 18 §18.3, Theorem
18.3.5 and Corollaries 18.3.4 and 18.3.6, pp. 188–190, is a second source;
its printed proof gives the $\mathbb Q$ case and refers to $\mathbb F_q(t)$
without writing it out. The track now attributes the $\mathbb F_q(t)$ base
proof to MIT Theorem 25.12; its finite-place approximation and polynomial
adjustment are consistent with the proof text. The final track assigns
finite-place completion decomposition to Milne, ANT VIII Prop. 8.2, and the
almost-all integral comparison to Stein, Ch. 18 Lemma 18.1.6; both read ranges
are present in the R2 ledger. The combined inventory now exposes the
primitive-element, nonarchimedean absolute-value extension, polynomial
factorization, CRT, finite-support and trace-pairing prerequisites. The
archimedean number-field factors are a separate local R/C factorization
supplier using the fundamental theorem of algebra and real polynomial
factorization. MIT Lecture 25's proof does call Lecture 11 Theorem 11.23 and
Corollary 11.26, but the final track no longer attributes that unread lecture
to R2; its source route uses the already logged Milne and Stein passages.

Milne ANT VII Thm. 7.38 proves absolute-value extension only for a discrete
nonarchimedean complete base. Remark 7.39 says the broader extension proof
needed for Chapter VIII is omitted. The plan avoids relying on that omitted
general result: its Milne-based item is now limited to nonarchimedean global
places, and the number-field archimedean tensor product has its own explicit
factorization proof contract. Stein Lemma 18.1.6 uses finite support of
denominators and of the nonzero trace determinant; its local trace-matrix
argument is reflected in the combined dependencies. These source and
dependency repairs close the earlier Lecture 11 attribution defect. The future
proof contracts still need to write out the factor-to-place identification
and restricted-product isomorphism; this audit does not certify those future
proofs.

### R1 proposal: exact number-field arithmetic algorithms

- **Repairs confirmed in the revised R1 note:** the duplicated (p=2)
  Dedekind–Kummer example was replaced by a (p=5) trace; the source log now
  includes heading-by-heading dispositions; A1 computes the trace Gram matrix
  from powers of the companion matrix; and A2 uses Stein's finite-algebra
  decomposition instead of general finite-field polynomial factorization.
  A2 now gives a local finite-ring nilradical/CRT proof, an explicit finite
  nilpotence bound for the idempotent lift, and the nilradical definition
  dependency. The earlier UFD concern is therefore closed for the abandoned
  procedure; the current item projection declares the UFD supplier for A2's
  finite factor reasoning.
- **A3 source/provenance checked:** Milne, Lemma 2.44 and Remark 2.45(b), pp.
  41–42, supply a canonical HNF form (the proposed upper-triangular column
  convention is transpose-compatible); Stein, Proposition 6.3.6, p. 76,
  supplies norm=index and finiteness of bounded-index subgroups. The exact
  bounded-HNF loop and multiplication-table stability test are new glue, but
  R1 labels them ai-altered and gives a local correctness/termination
  argument. No verbatim source algorithm is needed. The final item should keep
  this attribution boundary.
- **A5 height source and theorem scope checked; prose repair is mathematically
  aligned at the main interface:** Lenstra's $H_L(x)$ is the relative product
  over normalized places (real absolute values, squared complex absolute
  values, and finite values with $|\pi_v|_v=1/Nv$). Theorem 6.2 (printed pp.
  27–28) requires $S$ to contain $S_\infty$ and every finite prime of norm at
  most $d=(2/\pi)^{r_2}\sqrt{|\Delta|}$; it gives integral $S$-unit generators
  with $H_L(x)\le d^2m_S$, not ordinary-unit generators from $S=S_\infty$.
  The revised prose now takes $S_f=\{\mathfrak p:N\mathfrak p\le|\Delta|\}$,
  bounds $d^2m_S\le|\Delta|^2$, and recovers $\mathcal O_K^*$ as the integer
  kernel of the valuation matrix. This corrects the earlier theorem-scope
  error and follows the exact §5 sequence
  $0\to\mathcal O_K^*\to K_S\to\mathbb Z^{S_f}\to\mathrm{Cl}(\mathcal O_K)
  \to0$. The current finite search threshold is justified with the sharper
  identity $d^2=(2/\pi)^{2r_2}|\Delta|\le |\Delta|=B$, followed by
  $m_S\le B$, so $d^2m_S\le B^2$; the earlier weaker inequalities alone did
  not imply this threshold.
- **A5 theorem-scope and proof-plan repair confirmed:** the source's integral
  $S$-unit theorem is now applied with the correct $S$, and the prose defines
  $N(a)$ and the product group, states the Hausdorff/identity-component/
  $1\in P$ hypotheses in its local Schreier lemma, and separates the
  auxiliary fundamental-domain ideal from $\mathfrak d_a=\operatorname{den}(a)$.
  It proves $\operatorname{den}(a)\mid\mathfrak b$, applies the coordinate
  lemma to $\mathfrak d_a$, and records the cancellation. The product-body
  lemma is now for arbitrary full lattices and the $a\mathfrak a^{-1}$
  covolume is correctly $2^{-r_2}\sqrt{|\Delta|}$ in the unscaled embedding;
  this resolves the earlier mathematical defect. The item proof remains a
  future authoring obligation: the existing
  `thm-small-element-in-a-number-field-ideal` is norm-only, so the new
  coordinate lemma must be proved from the equality-form Minkowski supplier.
  The seven A5 IDs and direct height dependency on R3's multiplicative-height
  item are present in the proposed inventory. The former Q(√2) example has
  been replaced by a complete Q valuation-matrix trace.
- **A6 input/output contract repair confirmed:** the latest input now clears
  denominator $q$, runs LLL on $qL$, and divides returned vectors by $q$;
  the loop also follows the source's $k-1$ reduction/test/remaining-reductions
  order and exactly recomputes Gram–Schmidt data after each update. This closes
  the earlier output-scaling gap.
- **A5 zero-matrix SNF case confirmed:** the current algorithm initializes
  $U=I_r$ and $Q=I_m$, returns $D=0$ for a zero input, uses empty identities
  for zero dimensions, and leaves an all-zero recursive block unchanged. This
  makes the zero-row valuation-matrix example's kernel/cokernel output explicit.
- **A7 quadratic-order/Gauss-composition pair checked:** the revised contract
  distinguishes ordinary Picard classes for negative discriminant from narrow
  classes for positive nonsquare discriminant, excludes negative-definite forms
  from the imaginary correspondence, and fixes the form-to-ideal norm and
  orientation conventions. The exact HNF product-ideal routine is a local
  algorithm composition, not an algorithm falsely attributed verbatim to
  Bhargava. The source map records a complete read of Bhargava §§3.1–3.3 and
  the appendix; the bridge converse, properness/invertibility, and
  composition-compatibility arguments remain explicit future proof duties.
- **A8 bounded-discriminant enumeration checked:** the input bound is a positive
  integer, the fixed-degree coefficient boxes and finite Gauss-factor search
  are exact, the $n=1$ case is separate, and the uniform wrapper uses the
  stated $n\le6B-3$ consequence of Minkowski's bound. It returns presentations
  with possible repetitions and makes no deduplication or complexity claim.
  The relative discriminant is defined using integral $K$-bases without
  assuming global freeness. The revised tower proof localizes the global
  determinant ideal at each prime using a local basis, then obtains the
  $p$-adic product of completed integer rings by prime-ideal factorization,
  CRT and inverse limits before applying the local trace-Gram determinant
  identity. This is source-guided by Neukirch III §2; the relative different
  itself remains deferred. The source attribution must remain clear that the
  executable enumeration is an ai-altered composition and that Milne's
  Hermite–Minkowski proof is a finiteness argument, not a verbatim algorithm.
- **A9 Malle interface and status checked:** the finite action uses
  \(\operatorname{Gal}(K(\mu_{|G|})/K)\) on the specified conjugacy classes,
  defines \(\Gamma_K(G)\) as its image, and cites the element-order divisor
  supplier needed to make the power action depend only on the exponent modulo
  \(|G|\). The strong orbit exponent counts precisely the minimal-index
  conjugacy classes. The weak conjecture is the sole open-problem supplier;
  the strong logarithmic prediction's counterexample and the later full-text
  status evidence are scoped without asserting frontier completeness. The
  original 2002/2004 Malle articles remain unavailable and are not represented
  as read.
- **Static R1 projection check:** the latest unique inventory has 48 unique
  rows and no ID collisions with current item files. The two height links to
  R3 are present in the combined projection. All A/B examples are self-contained
  or use A-page suppliers. This read-only check does not validate authored
  proofs or native build/review completion.

### Height convention checkpoint

Schanuel, “Heights in number fields” (1979), Theorem 3 and its corollary
(printed p. 447; local text `r3-sources/schanuel-heights-in-number-fields.txt`),
supports a relative height $H_K$ with counting order $B^m$ and error order
$B^{m-1/d}$, where $d=[K:Q]$, apart from the rational $\mathbb P^1$
$B\log B$ exception. Silverman defines the absolute logarithmic height as
$h=(1/d)\log H_K$, so the multiplicative absolute height is $H_K^{1/d}$.
The absolute-height count exponents $md$ and $md-1$ are consistent with these
source conventions. Silverman's *An Introduction to Height Functions* (MSRI
notes, 2006; local text
`r3-sources/silverman-introduction-to-height-functions-msri.txt`), pp. 2–5,
defines the normalization, states Northcott for fixed number fields and for
points of bounded absolute height and degree, and states the Schanuel count.
This verifies the normalization and the two Northcott formulations against
the local texts. The final R3 prose assigns Northcott, canonical heights, and
arithmetic dynamics to the absolute logarithmic height API; the analytic R5
Schanuel pair consumes the absolute multiplicative height API, with the
relative $H_K$ convention and conversion stated separately. The unique R3
dossier and unique inventory now define
`ex-relative-versus-absolute-height-exponents` as the threshold equivalence
$H_{\mathrm{abs}}([x])\le B$ iff $H_K([x])\le B^N$ for $N=[K:\mathbb Q]$ and
$B\ge1$. It depends on the absolute multiplicative-height item and makes no
counting, asymptotic or error-term claim. The combined inventory row now has
the matching title and dependency. R5 separately owns
`ex-relative-and-absolute-height-exponents-over-a-quadratic-field` with the
Schanuel theorem dependency; R5 remains the sole count owner.

### Ordinary absolute values and normalized product factors

The shared place definition uses equivalence classes of genuine field
absolute values, and the completion definition uses their ordinary induced
topologies. The number-field height and Lenstra interfaces instead multiply
normalized local factors; at a complex embedding the factor is the square of
the usual modulus. This is a valid multiplicative product factor, but it does
not satisfy the ordinary absolute-value triangle inequality. The inherited
published `thm-product-formula-for-number-fields` calls that complex factor an
“absolute value”; use its product identity with this weighted-factor meaning,
and do not derive it from `def-multiplicative-absolute-value-on-a-field`.
R3's height prose states the complex weight 2, R1's Lenstra prose states the
squared factor, and neither uses the square as a field absolute value. The
function-field factor (q^{-\deg(v)\operatorname{ord}_v(x)}) is a genuine
nonarchimedean absolute value.

### Choice assumptions and inheritance

The combined plan now keeps Choice dependencies on the suppliers that actually
introduce them: global-place classification carries AC, the general metric
completion carries Countable Choice, and global weak approximation carries
both through those inputs. Tychonoff-based local-compactness and additive
quotient arguments name Tychonoff and its AC hypothesis; the function-field
idele-class degree-zero compactness proof separately names Tychonoff and AC for
the infinite product of compact local units. Downstream class-field, duality,
and place-indexed items retain the assumptions through their explicit supplier
edges rather than being reported as new choice constructions. The Chebotarev
prime-counting-function definition is choice-free because it only counts
already-defined number-field prime ideals and Frobenius classes; the theorem
and its CFT supplier retain their actual inherited assumptions. This matches
the current R2 choice ledger and avoids treating inherited assumptions as new
proof steps.

### Combined static projection review

The current algebraic and analytic fragments contain 282 unique A/B page rows
(140 algebraic and 142 analytic), all with empty `items: []`; companion pairs
are reciprocal and the page graph is acyclic. The combined item projections
contain 1,354 unique rows (678 algebraic and 676 analytic); a
read-only dependency scan found no duplicate IDs, unresolved dependencies,
item cycles, B-to-B example suppliers, or `open-problem` dependencies. All
page requirements resolve to a planned or published page. These are
planning-structure checks only; they do not certify authored proofs, source
gates, native build/review coverage, or publication.

The shared adelic source attribution is now aligned with the R2 ledger:
finite-place completion decomposition is assigned to Milne ANT VIII Prop. 8.2,
almost-all integral comparison to Stein Ch. 18 Lemma 18.1.6, and the separate
archimedean number-field decomposition has an explicit local R/C factorization
contract. MIT Lecture 25 is fully logged for the additive quotient theorem;
although its proof cites MIT Lecture 11, the final track does not claim that
Lecture 11 was read. Remaining work here is future local proof authoring of
the factor-to-place identification and restricted-product isomorphism, not an
unlogged-source or unresolved-dependency defect.

All five researcher source dossiers and heading dispositions are present in
the combined track. Explicit future proof/source/status gates remain as listed
above and in those dossiers; they are not accepted as completed proofs or
current frontier consensus. No native build, item/page authoring, tests,
commit, publication, or push was performed by this auditor.
