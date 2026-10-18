# Step 4 batch reviewer — batch **2**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **2**. Step-5 owning group: **z**.
Return `group: "z"` and `batches: ["2"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 2 | `monotone-functions-and-discontinuities` | A | continuity-ivt-evt-and-uniform-continuity, cantor-set-baire-and-measure-zero, vector-spaces-and-subspaces, linear-independence-bases-and-dimension |
| 2 | `monotone-functions-and-discontinuities-examples` | B | monotone-functions-and-discontinuities, absolute-convergence-and-rearrangement |

## Your content, in full

### `monotone-functions-and-discontinuities` — Monotone Functions, Discontinuities, and Continuity Sets

- `def-monotone-function` · definition — Nondecreasing, increasing (strictly increasing), nonincreasing, decreasing, monotone and strictly monotone real functions on a subset of $\mathbb{R}$, with the dictionary to monotone sequences
- `def-classification-of-discontinuities` · definition — Discontinuity of $f$ at a point of its domain, and its classification: removable discontinuity, jump discontinuity and essential discontinuity, equivalently Rudin's discontinuities of the first and of the second kind
- `def-oscillation` · definition — The oscillation $\omega_f(S) = \sup\{\,|f(x) - f(y)| : x, y \in S\,\}$ of $f$ on a set and the oscillation $\omega_f(c) = \inf_{\delta > 0} \omega_f(A \cap N_\delta(c))$ at a point, both taken in the extended reals
- `def-dirichlet-and-thomae-functions` · definition — The Dirichlet function $1_{\mathbb{Q}}$, and Thomae's function $t$ with $t(x) = 1/q$ at a rational $x = p/q$ in lowest terms with $q \ge 1$ and $t(x) = 0$ at every irrational $x$
- `def-intermediate-value-property` · definition — The intermediate value property (Darboux property) of a function on an interval: the image of every subinterval is order-convex
- `def-semicontinuity` · definition — Upper and lower semicontinuity of $f : A \to \mathbb{R}$ at a point of $A$ and on $A$
- `lem-baire-category-in-a-closed-interval` · lemma — Baire category inside a closed bounded interval: if $[a,b]$ with $a < b$ is covered by a sequence of closed sets, then one of them contains a nondegenerate closed subinterval of $[a,b]$; no choice principle is used
- `def-baire-class-one` · definition — Pointwise convergence of a sequence of real functions, and the Baire class one functions as the pointwise limits of sequences of continuous functions
- `def-additive-function` · definition — Cauchy's functional equation $f(x+y) = f(x) + f(y)$, and the additive functions $\mathbb{R} \to \mathbb{R}$
- `lem-hamel-basis-exists` · lemma — Assuming the Axiom of Choice, $\mathbb{R}$ has a Hamel basis over $\mathbb{Q}$: there is $B \subseteq \mathbb{R}$ such that every real is a finite $\mathbb{Q}$-linear combination of elements of $B$ in exactly one way, and each basis vector carries a well-defined $\mathbb{Q}$-linear coefficient map
- `thm-monotone-one-sided-limits-exist` · theorem — One-sided limits of a monotone function always exist: for $f$ nondecreasing on an interval $I$ and $c \in I$, $\lim_{x \to c^{-}} f(x) = \sup\{f(x) : x \in I,\ x < c\}$ whenever $I$ has points below $c$, $\lim_{x \to c^{+}} f(x) = \inf\{f(x) : x \in I,\ x > c\}$ whenever it has points above $c$, and these satisfy $\lim_{x \to c^{-}} f(x) \le f(c) \le \lim_{x \to c^{+}} f(x)$
- `thm-continuous-injection-on-an-interval-is-strictly-monotone` · theorem — A continuous injective function on an interval is strictly monotone
- `cor-cantor-function-is-continuous` · corollary — The Cantor function is continuous on $[0,1]$
- `thm-continuity-iff-oscillation-zero` · theorem — $f : A \to \mathbb{R}$ is continuous at $c \in A$ if and only if $\omega_f(c) = 0$
- `lem-oscillation-superlevel-sets-are-closed` · lemma — For every real $\varepsilon > 0$ the set $\{\,x \in A : \omega_f(x) \ge \varepsilon\,\}$ is the intersection with $A$ of a closed subset of $\mathbb{R}$; in particular it is closed in $\mathbb{R}$ when $A = \mathbb{R}$
- `fs-intermediate-value-property-implies-continuity` · false-statement — FALSE: a function with the intermediate value property on an interval is continuous
- `thm-semicontinuity-level-set-characterisation` · theorem — $f$ is upper semicontinuous on $A$ if and only if $\{x \in A : f(x) < \alpha\}$ is relatively open in $A$ for every real $\alpha$, lower semicontinuous if and only if $\{x \in A : f(x) > \alpha\}$ is, and continuous if and only if it is both
- `lem-additive-is-q-linear` · lemma — An additive $f : \mathbb{R} \to \mathbb{R}$ satisfies $f(0) = 0$, $f(-x) = -f(x)$ and $f(qx) = q\,f(x)$ for every rational $q$ and every real $x$; in particular $f(q) = q\,f(1)$ at every rational $q$
- `thm-monotone-discontinuities-are-jumps` · theorem — A monotone function on an interval has no discontinuity of the second kind: at every point both relevant one-sided limits exist, and an interior point $c$ is a discontinuity exactly when $\lim_{x \to c^{-}} f(x) < \lim_{x \to c^{+}} f(x)$
- `thm-continuous-inverse` · theorem — Continuous inverse theorem: a continuous injective $f$ on an interval $I$ is a bijection onto the order-convex set $f[I]$, and the inverse $g : f[I] \to I$ is continuous and strictly monotone in the same sense as $f$
- `rem-cantor-function-increases-only-on-a-null-set` · remark — The Cantor function is continuous and nondecreasing, climbs from $0$ to $1$, and is constant on every interval removed in the construction of the Cantor set, so all of its increase happens on a set of measure zero
- `thm-discontinuity-set-is-f-sigma` · theorem — For $f : A \to \mathbb{R}$ the set of points of $A$ at which $f$ is discontinuous is the intersection with $A$ of an $F_\sigma$ subset of $\mathbb{R}$, and the set of points at which $f$ is continuous is the intersection with $A$ of a $G_\delta$ subset; for $A = \mathbb{R}$ the two sets are $F_\sigma$ and $G_\delta$ outright
- `thm-dirichlet-and-thomae-continuity-sets` · theorem — The Dirichlet function is continuous at no point of $\mathbb{R}$, and Thomae's function is continuous at every irrational and at no rational, so its set of continuity points is exactly the set of irrationals and its oscillation at $c$ equals $t(c)$
- `thm-semicontinuous-evt` · theorem — Semicontinuous extreme value theorem: an upper semicontinuous function on a nonempty compact $K \subseteq \mathbb{R}$ is bounded above and attains a maximum, and a lower semicontinuous one is bounded below and attains a minimum
- `lem-additive-bounded-above-on-an-interval-is-linear` · lemma — If an additive $f : \mathbb{R} \to \mathbb{R}$ is bounded above on some nondegenerate interval, then $f(x) = f(1)\,x$ for every real $x$
- `thm-froda` · theorem — Froda's theorem: the set of discontinuities of a monotone function on an interval is at most countable, the injection into $\mathbb{N}$ being built from one fixed enumeration of the rationals by least index, so no choice principle is used
- `thm-continuity-set-realisation` · theorem — Every $G_\delta$ subset of $\mathbb{R}$ is the set of continuity points of some $f : \mathbb{R} \to \mathbb{R}$, so the $G_\delta$ sets are exactly the continuity sets
- `cor-no-function-is-continuous-exactly-on-q` · corollary — No function $\mathbb{R} \to \mathbb{R}$ is continuous at every rational and discontinuous at every irrational, because $\mathbb{Q}$ is not $G_\delta$
- `thm-baire-one-continuity-points` · theorem — Baire's theorem: a Baire class one function on a closed bounded interval $[a,b]$ is continuous at the points of a dense subset of $[a,b]$ that is the trace of a $G_\delta$ set, so its set of discontinuities is meager
- `thm-cauchy-functional-equation-regularity` · theorem — Six regularity conditions each force an additive $f : \mathbb{R} \to \mathbb{R}$ to be $x \mapsto f(1)x$: continuity at a single point, monotonicity on a nondegenerate interval, boundedness above on one, boundedness below on one, constancy of sign on one, and a graph that is not dense in $\mathbb{R}^{2}$
- `thm-monotone-with-prescribed-discontinuity-set` · theorem — Converse to Froda: for every at most countable $E \subseteq \mathbb{R}$ there is a bounded nondecreasing $f : \mathbb{R} \to \mathbb{R}$ whose set of discontinuities is exactly $E$, every one of them a jump
- `fs-additive-implies-linear` · false-statement — FALSE: every additive $f : \mathbb{R} \to \mathbb{R}$ is of the form $x \mapsto cx$ for a single real $c$

### `monotone-functions-and-discontinuities-examples` — Monotone Functions, Discontinuities, and Continuity Sets: Examples and Counterexamples

- `ex-locally-unbounded-finite-everywhere` · example — The function equal to $q$ at a rational $p/q$ in lowest terms and to $0$ at every irrational is finite at every point and unbounded on every nondegenerate interval
- `ex-cantor-function-maps-a-null-set-onto-the-unit-interval` · example — The Cantor set has measure zero, yet the Cantor function maps it onto all of $[0,1]$: a null set can have image an interval of length $1$
- `ex-thomae-values-and-oscillation-computed` · example — Thomae's function computed: $t(1/2) = 1/2$, $t(2/3) = 1/3$, $t(m) = 1$ at every integer $m$, $t(x) = 0$ at every irrational, and $\omega_t(c) = t(c)$ at every real $c$
- `ex-continuous-inverse-gives-the-nth-root` · example — The $n$-th root as a continuous inverse: for a natural $n \ge 1$ the map $x \mapsto x^{n}$ is continuous and strictly increasing on $[0,\infty)$ with image $[0,\infty)$, so its inverse $x \mapsto x^{1/n}$ is continuous and strictly increasing
- `cex-upper-semicontinuous-need-not-attain-its-infimum` · counterexample — An upper semicontinuous function on $[0,1]$ that is bounded below and attains no minimum, so the semicontinuous extreme value theorem is genuinely one-sided
- `cex-continuous-injection-on-a-non-interval-need-not-be-monotone` · counterexample — A continuous injection on $[0,1] \cup [2,3]$ that is not monotone, so the interval hypothesis cannot be dropped from the strict-monotonicity theorem
- `ex-indicator-of-q-is-baire-class-two-not-one` · example — The Dirichlet function is the pointwise limit of a sequence of Baire class one functions and is itself not Baire class one, so the Baire hierarchy on $[0,1]$ is already strict at the first level
- `ex-monotone-function-discontinuous-exactly-at-the-rationals` · example — A bounded nondecreasing $f : \mathbb{R} \to \mathbb{R}$ whose set of discontinuities is exactly $\mathbb{Q}$, obtained from the prescribed-jump construction applied to one fixed enumeration of the rationals
- `ex-froda-is-sharp` · example — Froda's countable bound is attained: a bounded nondecreasing function on $\mathbb{R}$ discontinuous exactly at the points $1 - 1/(k+1)$ for $k \in \mathbb{N}$, an infinite discontinuity set inside a bounded interval
- `ex-hamel-basis-additive-function` · example — An additive $f : \mathbb{R} \to \mathbb{R}$ that is not $x \mapsto cx$: the coefficient of one fixed Hamel basis vector. It is unbounded above and below on every nondegenerate interval, its graph is dense in $\mathbb{R}^{2}$, and every nonempty level set is dense in $\mathbb{R}$
- `ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous` · example — A bounded function on $\mathbb{R}$ with no local maximum and no local minimum at any point, upper semicontinuous at no point and lower semicontinuous at no point: compose the Hamel coefficient with a strictly increasing injection of $\mathbb{R}$ into $(0,1)$

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
