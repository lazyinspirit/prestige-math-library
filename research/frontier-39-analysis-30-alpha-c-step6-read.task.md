# Step 6 Alpha group reader — read-only digest — group **c**, run `frontier-39-analysis-30`

- You are the read-only Step 6 Alpha group reader for batches **4**, **5**, **9**: 3 A/B pair(s), 6 page(s), 105 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `sobolev-poincare-and-morrey-inequalities` | A | pde | 458.025 | `sobolev-traces-and-zero-boundary-values`, `poisson-problems-and-interior-harmonic-estimates` |
| 4 | `sobolev-poincare-and-morrey-inequalities-examples` | B | pde | 458.026 | `sobolev-poincare-and-morrey-inequalities` |
| 5 | `real-hardy-spaces-maximal-functions-and-atoms` | A | fourier-analysis | 458.02607 | `hilbert-and-riesz-transforms`, `calderon-zygmund-decomposition-and-singular-integrals`, `distributions-test-functions-and-differentiation`, `tempered-distributions-and-the-fourier-transform`, `the-maximal-function-and-lebesgue-differentiation`, `harmonic-functions-and-mean-values-in-rn` |
| 5 | `real-hardy-spaces-maximal-functions-and-atoms-examples` | B | fourier-analysis | 458.02608 | `real-hardy-spaces-maximal-functions-and-atoms` |
| 9 | `rellich-kondrachov-and-sobolev-compactness` | A | pde | 458.027 | `sobolev-poincare-and-morrey-inequalities`, `compact-operators-and-riesz-schauder-theory` |
| 9 | `rellich-kondrachov-and-sobolev-compactness-examples` | B | pde | 458.028 | `rellich-kondrachov-and-sobolev-compactness` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sobolev-poincare-and-morrey-inequalities` — Sobolev Poincare and Morrey Inequalities (26 item(s))

- `def-sobolev-conjugate-exponent` · definition — The Sobolev conjugate exponent and the scaling identity
- `lem-pointwise-potential-bound-for-compactly-supported-smooth-functions` · lemma — Pointwise potential bound for compactly supported smooth functions
- `thm-gagliardo-nirenberg-sobolev-inequality-for-p-one` · theorem — The p=1 Gagliardo-Nirenberg-Sobolev inequality
- `thm-gagliardo-nirenberg-sobolev-inequality` · theorem — The Gagliardo-Nirenberg-Sobolev inequality for $1<p<n$
- `cor-sobolev-inequality-for-w-one-p-zero` · corollary — The Sobolev inequality for zero-boundary Sobolev closures on open sets
- `thm-poincare-inequality-on-a-ball` · theorem — Poincare inequality on a ball
- `thm-poincare-inequality-for-w-one-p-zero` · theorem — The Poincare inequality for zero-boundary Sobolev closures on domains bounded in one direction
- `lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n` · lemma — Mean-zero Poincare estimate on bounded connected extension domains below the dimension
- `def-john-domain-and-john-constant` · definition — John domains and the John constant
- `lem-john-domain-admits-bounded-overlap-ball-chains` · lemma — Bounded-overlap ball chains in a bounded John domain
- `lem-truncated-riesz-kernel-potential-bounded-on-lp` · lemma — The truncated Riesz kernel is bounded on $L^p$ of a bounded set
- `thm-poincare-wirtinger-on-bounded-john-domains` · theorem — The mean-zero Poincare inequality on bounded John domains
- `thm-poincare-inequality-with-a-positive-measure-zero-set` · theorem — The Poincare inequality with a positive-measure zero set
- `cor-poincare-wirtinger-on-convex-domains` · corollary — Poincare-Wirtinger on bounded convex domains by the direct pairwise argument
- `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n` · theorem — Sobolev embedding on bounded extension domains for $p<n$
- `thm-sobolev-poincare-on-bounded-connected-extension-domains` · theorem — Sobolev-Poincare on bounded connected extension domains
- `thm-critical-sobolev-embedding-into-every-finite-lq` · theorem — The critical Sobolev embedding into every finite $L^q$
- `lem-ball-mean-oscillation-potential-bound` · lemma — Ball-mean oscillation bound by the Riesz potential of the gradient
- `thm-morrey-inequality-for-p-greater-than-n` · theorem — Morrey's inequality for $p>n$
- `thm-w-one-infinity-functions-have-lipschitz-representatives` · theorem — $W^{1,\infty}$ functions on convex domains have Lipschitz representatives
- `lem-weak-partial-derivatives-lower-sobolev-order` · lemma — Weak partial derivatives lower the Sobolev order
- `thm-higher-order-sobolev-embedding` · theorem — Higher-order Sobolev embedding
- `lem-weak-product-rule-for-bounded-sobolev-functions` · lemma — Weak product rule for bounded Sobolev functions
- `cor-sobolev-algebra-above-the-critical-index` · corollary — The Sobolev space $W^{k,p}$ is an algebra above the critical index
- `rem-critical-sobolev-does-not-embed-in-linfinity` · remark — The $p=n$ endpoint: no $L^\infty$ or Holder embedding
- `rem-domain-classes-for-the-mean-zero-poincare-inequality` · remark — Domain classes covered by the mean-zero Poincare inequality

### `sobolev-poincare-and-morrey-inequalities-examples` — Sobolev Poincare and Morrey Inequalities — Examples (9 item(s))

- `ex-scaling-for-the-sobolev-conjugate` · example — Dilations force the Sobolev conjugate
- `ex-poincare-on-an-interval-with-sharp-scaling` · example — Poincare on an interval: the length dependence is linear
- `cex-poincare-wirtinger-needs-connectedness` · counterexample — Poincare-Wirtinger fails on disconnected bounded domains
- `cex-poincare-without-mean-trace-or-zero-set-normalisation-fails` · counterexample — A gradient-only Poincare estimate needs normalisation
- `cex-w-one-p-to-lq-bound-fails-for-q-greater-than-p-star-by-dilation` · counterexample — The $W^{1,p}\to L^q$ bound fails for $q>p^{*}$ by dilation
- `cex-critical-w-one-n-does-not-embed-in-linfinity` · counterexample — $W^{1,n}$ is not contained in $L^\infty$
- `cex-morrey-endpoint-p-equals-n-fails` · counterexample — Morrey's inequality has no $p=n$ endpoint
- `ex-holder-representative-of-a-radial-sobolev-function` · example — Radial powers approach the Morrey borderline exponent
- `cex-sobolev-embedding-on-an-unbounded-domain-needs-the-full-norm-or-decay` · counterexample — Outward dilation defeats subcritical inclusion and homogeneous Poincare on Euclidean space

### `real-hardy-spaces-maximal-functions-and-atoms` — Real Hardy Spaces Maximal Functions and Atoms (28 item(s))

- `def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution` · definition — Radial and nontangential maximal functions of a tempered distribution
- `def-grand-maximal-test-class-of-order-n` · definition — Grand maximal test class of order N and the grand maximal function
- `lem-schwartz-dilations-preserve-schwartz-space` · lemma — Dilations and their normalisations preserve Schwartz space, with scaling identities
- `lem-schwartz-deconvolution-along-dyadic-dilations` · lemma — Deconvolution of a Schwartz function along the dyadic dilates of a fixed kernel
- `lem-tangential-maximal-function-norm-bound` · lemma — The tangential maximal function is controlled by the aperture-one nontangential maximal function in $L^p$
- `lem-grand-maximal-function-is-dominated-by-the-tangential-maximal-function` · lemma — The grand maximal function is pointwise dominated by a tangential maximal function
- `def-hp-atom-with-moment-order` · definition — $H^p$ atoms with a prescribed moment order
- `lem-existence-of-schwartz-functions-with-flat-fourier-transform-at-the-origin` · lemma — Schwartz functions with prescribed flatness of the Fourier transform at the origin
- `lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions` · lemma — Schwartz approximate identities converge in the sense of tempered distributions
- `lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space` · lemma — Whitney decomposition of a proper open subset of Euclidean space
- `lem-local-polynomial-projections-match-moments-through-order-s` · lemma — Local polynomial projections matching moments through order $s$
- `lem-whitney-type-ball-cover-of-a-proper-open-set` · lemma — Whitney-type ball cover with disjoint small balls and bounded overlap
- `lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable` · lemma — Measurability and lower semicontinuity of the smooth maximal functions
- `lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions` · lemma — The grand maximal function dominates every admissible radial and nontangential maximal function
- `def-real-hardy-space-by-a-radial-maximal-function` · definition — The real Hardy space $H^p$ defined by a radial maximal function
- `lem-truncated-maximal-function-estimates` · lemma — Truncated maximal functions: finiteness, comparison estimates and the good-set bound
- `lem-calderon-reproducing-formula-for-the-hardy-decomposition` · lemma — Calderon reproducing pair and the telescoping identity in $\mathcal S'$
- `lem-an-hp-atom-has-uniform-hp-quasinorm` · lemma — Atoms have uniformly bounded $H^p$ quasi-norm and uniformly bounded test pairings
- `thm-maximal-function-characterisations-of-real-hardy-spaces` · theorem — Maximal-function characterisations of real Hardy spaces
- `rem-riesz-transform-characterisation-of-real-hone` · remark — Recorded Riesz-transform characterisation of $H^1$ (not proved here)
- `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions` · lemma — $\ell^p$ sums of atoms converge in $\mathcal S'$ and in $H^p$
- `cor-real-hardy-space-equals-lp-for-p-greater-than-one` · corollary — $H^p$ equals $L^p$ with equivalent norms for $1<p<\infty$
- `lem-hardy-calderon-zygmund-level-decomposition-produces-atoms` · lemma — Level decomposition of an $H^p$ distribution produces atoms
- `thm-atomic-characterisation-of-real-hp` · theorem — Atomic characterisation of real $H^p$ for $0<p\le1$
- `rem-real-hp-is-quasi-banach-below-one` · remark — For $0<p<1$ the $H^p$ functional is a quasi-norm, and $H^p$ is a quasi-Banach space
- `thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation` · theorem — Calderon-Zygmund operators map $H^1$ boundedly into $L^1$
- `thm-fourier-transform-decay-of-real-hardy-space-elements` · theorem — Fourier transform decay of real $H^p$ elements
- `cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range` · corollary — Integrable $H^p$ functions have vanishing moments in the atomic range

### `real-hardy-spaces-maximal-functions-and-atoms-examples` — Real Hardy Spaces Maximal Functions and Atoms - Examples (5 item(s))

- `ex-a-normalised-mean-zero-hone-atom` · example — A normalised mean-zero $H^1$ atom
- `cex-a-normalised-cube-indicator-is-not-a-hone-atom` · counterexample — A normalised cube indicator is not an $H^1$ atom
- `cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone` · counterexample — A compactly supported $L^1$ function of nonzero integral is not in $H^1$
- `ex-hilbert-transform-of-a-hone-atom-is-integrable` · example — The Hilbert transform of an $H^1$ atom is integrable
- `cex-an-hone-atom-need-not-be-smooth` · counterexample — An $H^1$ atom need not be smooth or continuous

### `rellich-kondrachov-and-sobolev-compactness` — Rellich Kondrachov and Sobolev Compactness (27 item(s))

- `def-compactly-embedded-normed-spaces` · definition — Compactly embedded normed spaces
- `lem-translation-estimate-for-w-one-p-functions` · lemma — The translation estimate for $W^{1,p}$ functions on $\mathbb R^n$
- `lem-relative-compactness-implies-uniform-translation-continuity-in-lp` · lemma — Relative compactness forces uniform translation continuity in $L^p$
- `lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic` · lemma — Uniformly supported families have vanishing tails
- `thm-frechet-kolmogorov-compactness-criterion-in-lp` · theorem — The Fr\'echet--Kolmogorov compactness criterion in $L^p(\mathbb R^n)$
- `thm-rellich-compactness-from-w-one-p-zero-to-lp` · theorem — Compactness of $W^{1,p}_0(\Omega)\hookrightarrow L^p(\Omega)$ on bounded open sets
- `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain` · theorem — Compactness of $W^{1,p}(\Omega)\hookrightarrow L^p(\Omega)$ on bounded extension domains
- `thm-poincare-wirtinger-on-bounded-connected-extension-domains` · theorem — Poincare-Wirtinger on bounded connected extension domains by Rellich compactness
- `thm-local-lp-compactness-of-w-one-p-bounded-sequences` · theorem — Local $L^p$ compactness of $W^{1,p}_{\mathrm{loc}}$-bounded sequences
- `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets` · corollary — Subcritical compactness for $W^{1,p}_0$ on arbitrary bounded open sets
- `thm-rellich-kondrachov-for-p-less-than-n` · theorem — The Rellich--Kondrachov theorem for $1\le p<n$ on bounded extension domains
- `thm-rellich-kondrachov-at-the-critical-source-exponent` · theorem — Rellich--Kondrachov at the critical source exponent $p=n$
- `thm-morrey-rellich-compactness-for-p-greater-than-n` · theorem — Morrey--Rellich compactness for $p>n$
- `thm-higher-order-rellich-kondrachov` · theorem — Higher-order Rellich--Kondrachov compactness
- `cor-bounded-sobolev-sequences-have-strongly-convergent-subsequences` · corollary — Bounded Sobolev sequences have strongly convergent subsequences with the weak limit as limit
- `cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence` · corollary — Weak $H^1$ convergence plus compactness gives strong $L^2$ convergence
- `rem-rellich-is-a-strictly-subcritical-theorem` · remark — Rellich compactness is strictly subcritical
- `lem-fractional-level-set-kernel-measure-estimate` · lemma — The level-set kernel measure estimate for the Slobodeckij kernel
- `lem-dyadic-level-set-summability-estimate` · lemma — A dyadic summability estimate for decreasing level-set sequences
- `lem-slobodeckij-seminorm-controls-dyadic-level-sets` · lemma — The Slobodeckij seminorm bounds the dyadic level-set sum
- `thm-fractional-sobolev-inequality-on-euclidean-space` · theorem — The critical fractional Sobolev inequality on $\mathbb R^d$
- `lem-slobodeckij-mollification-approximation-rates` · lemma — Mollification rates for compactly supported Slobodeckij functions
- `thm-fractional-rellich-kondrachov-compactness-on-bounded-sets` · theorem — Subcritical compactness for compactly supported Slobodeckij functions
- `thm-subcritical-compactness-of-the-sobolev-trace` · theorem — Subcritical compactness of the Sobolev trace
- `cor-strong-lq-convergence-implies-strong-convergence-of-subcritical-powers` · corollary — Strong convergence of subcritical powers
- `cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo` · corollary — A bounded map into $H^1_0$ yields a compact $L^2$ operator
- `lem-strong-lp-closed-constraints-pass-through-rellich-limits` · lemma — Closed target constraints survive compact extraction

### `rellich-kondrachov-and-sobolev-compactness-examples` — Rellich Kondrachov and Sobolev Compactness — Examples (10 item(s))

- `ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval` · example — Compactness of a bounded $W^{1,p}$ sequence on an interval
- `cex-critical-sobolev-embedding-is-not-compact` · counterexample — The critical Sobolev embedding is not compact
- `cex-rellich-fails-on-rn-by-translations` · counterexample — Rellich compactness fails on $\mathbb R^n$ by translations
- `cex-rellich-fails-without-uniform-tail-control` · counterexample — The tightness hypothesis of the Fr\'echet--Kolmogorov criterion cannot be dropped
- `cex-morrey-compactness-loses-the-endpoint-holder-exponent` · counterexample — Morrey--Rellich compactness loses the endpoint H\"older exponent
- `ex-strong-ltwo-convergence-preserves-a-normalisation-constraint` · example — Strong $L^2$ convergence preserves an $L^2$-normalisation constraint
- `cex-high-frequency-oscillations-violate-uniform-translation-control` · counterexample — High frequencies destroy uniform translation control
- `ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star` · example — Critical bubbles converge weakly but not strongly
- `cex-critical-trace-compactness-fails-by-tangential-dilation` · counterexample — Critical traces fail compactness under boundary dilation
- `cex-dilations-can-destroy-tightness-on-an-unbounded-domain` · counterexample — Expanding bumps lose tightness

## Your seams

Another group's pages depend on yours:

- `bmo-john-nirenberg-and-h1-duality` (group b) requires your `real-hardy-spaces-maximal-functions-and-atoms`
- `littlewood-paley-theory-and-square-functions` (group d) requires your `real-hardy-spaces-maximal-functions-and-atoms`
- `scalar-conservation-laws-and-entropy-solutions` (group d) requires your `rellich-kondrachov-and-sobolev-compactness`
- `lax-milgram-and-weak-elliptic-solutions` (group f) requires your `rellich-kondrachov-and-sobolev-compactness`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-39-analysis-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
