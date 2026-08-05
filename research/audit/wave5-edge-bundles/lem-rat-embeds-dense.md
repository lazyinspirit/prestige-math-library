# Citation-precision audit — everything that cites `lem-rat-embeds-dense`

## The target, as it actually stands on disk

`items/lem-rat-embeds-dense.md` — lemma — The rationals embed densely in the reals

#### Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## The 11 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- **Given:** For $n \in \mathbb{N}$ the rational $s_n = k_n/10^n$, where $k_n$ is the largest natural with $k_n^2 \le 2 \cdot 10^{2n}$, together with the properties established for it in [[fs-rationals-complete]]; and the real $\sqrt 2$ ([[thm-of-square-roots]]). Rationals are identified with their images in $\mathbb{R}$ under the embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), so $(s_n)$ is also a sequence of reals ([[def-sequence]]).
- [L2] The embedding $q \mapsto \hat q$ is an injective, order-preserving field homomorphism of $\mathbb{Q}$ into $\mathbb{R}$, so every identity and inequality between rationals holds between their images and conversely ([[lem-rat-embeds-dense]], [[def-rationals]]).

### `ex-cardinal-functions-of-the-lower-limit-line` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-lindelofness-is-productive` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, refuted: Lindelöfness is productive

- [L2] The rationals are at most countable and dense in the real line, the real line is uncountable, and a set injecting into an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]], [[lem-countable-iff-surjection-from-n]]).

### `fs-separability-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: separability is hereditary

- [L2] The rational numbers are at most countable and dense in the real line, and the real line is uncountable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]]).

### `fs-separable-spaces-are-second-countable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: every separable space is second countable

- [L1] The rational numbers are at most countable and dense in the real line, and the real line is uncountable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L3] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

### `lem-cauchy-sequence-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every Cauchy sequence of reals is bounded

- [L3] The rational $1$ is positive, and the embedding of $\mathbb{Q}$ in $\mathbb{R}$ carries it to $1 \in \mathbb{R}$, so $\varepsilon = 1$ is an admissible test value in [A1] ([[lem-rat-embeds-dense]]).

### `lem-cauchy-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit

- [L3] Halving a rational: if $\varepsilon$ is a positive rational then so is $\varepsilon/2$, and the embedding of $\mathbb{Q}$ in $\mathbb{R}$ is a field embedding, so the image of $\varepsilon/2$ is half the image of $\varepsilon$ and the two halves sum to $\varepsilon$ ([[lem-rat-embeds-dense]]).

### `lem-uniform-convergence-in-the-uniform-metric` (published-backward, page function-space-topologies)

Title: Convergence in the uniform metric is exactly uniform convergence: one $N$ serving every point

- [L4] $g_k \to g$ in a metric space means: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with the distance from $g_k$ to $g$ below $\varepsilon$ for every $k \ge K$; and the test with a **real** $\varepsilon > 0$ is equivalent, since below every positive real lies a positive rational ([[def-metric-convergence]], [[lem-rat-embeds-dense]], [[def-metric-ball]]).

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- [L2] $(x_k)$ is Cauchy in a metric space when for every real $\varepsilon > 0$ there is $K$ with the distance between $x_m$ and $x_n$ below $\varepsilon$ for all $m, n \ge K$; the rational and real tests agree ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).
- [L4] $x_k \to p$ in a metric space means: for every real $\varepsilon > 0$ there is $K$ with the distance from $x_k$ to $p$ below $\varepsilon$ for every $k \ge K$ ([[def-metric-convergence]], [[def-metric-ball]], [[lem-rat-embeds-dense]]).

### `thm-metric-weight-equals-density` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every metrizable space has $w(X)=d(X)$

- [L2] The rationals are countably infinite and lie densely between reals ([[thm-rationals-countable]], [[lem-rat-embeds-dense]]).
