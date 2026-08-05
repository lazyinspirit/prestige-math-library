# Citation-precision audit — do these citing items state their target correctly?

You are reading a **published legacy corpus** of this library. Below are one or
more TARGET items, each quoted as it actually stands on disk, followed by every
place in this audit wave that cites it.

**The one question for every citing line:** does the citing text state the
target's own proposition — same domain, same quantifiers, same hypotheses, same
direction, same strength — or does it state something the target does not
actually give? A fact that quietly drops a hypothesis, flips an implication,
promotes an implication to a biconditional, or widens a domain is a **FATAL**
defect of the incorrect-dependency-citation class. It is this library's single
most common confirmed defect, and it is only visible by reading the two texts
against each other, which is what this file lets you do.

Do NOT report: a concise but faithful shortening (that is the required house
style); a paraphrase that preserves content; wording you would have chosen
differently; missing URLs; prose style. A citing line reading as a shortened
but faithful version of the target is CORRECT and must not be flagged.

Where a citing line says a dependency is declared but never cited in the body,
say whether that looks like a stale declaration or a use that lost its citation
— that one is NONFATAL either way.

For every finding use the block format from the brief, and finish with the
`N fatal, M nonfatal` line. If every citation is faithful, say so plainly and
name the targets you checked.

---

# Citation-precision audit — everything that cites `def-divergence-to-infinity`

## The target, as it actually stands on disk

`items/def-divergence-to-infinity.md` — definition — Divergence to $+\\infty$ and to $-\\infty$

#### Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]].

- $(x_k)$ **diverges to $+\infty$**, written $x_k \to +\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all
  $k \ge K$.
- $(x_k)$ **diverges to $-\infty$**, written $x_k \to -\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k < M$ for all
  $k \ge K$.

Equivalently, in the language of [[def-sequence]]: $x_k \to +\infty$ when the
property $x_k > M$ holds eventually, for every real $M$.

## The 4 citing use(s), quoted verbatim from the citing items

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- ([[def-divergence-to-infinity]]).
- [L8] Divergence to $+\infty$: for every real $M$ there is $K$ with $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- ([[def-divergence-to-infinity]]). Since a contractive sequence converges
- [L7] Divergence to $+\infty$ ([[def-divergence-to-infinity]]); a convergent sequence is bounded ([[lem-convergent-implies-bounded]]); convergence ([[def-real-limit]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- ([[def-divergence-to-infinity]]).
- [L11] Convergence to $0$ and divergence to $+\infty$ for a sequence of reals; a rational test value $\varepsilon > 0$ is in particular a real one ([[def-real-limit]], [[def-divergence-to-infinity]], [[def-sequence]]).

### `lem-monotone-unbounded-diverges` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence that is not bounded above diverges to $+\\infty$

- ([[def-divergence-to-infinity]]): for every $M \in \mathbb{R}$ there is
- [L4] Divergence to $+\infty$: $x_k \to +\infty$ when for every $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).
- - **$+\infty$ is not a limit.** [[def-divergence-to-infinity]] is deliberately


---

# Citation-precision audit — everything that cites `def-dense-top`

## The target, as it actually stands on disk

`items/def-dense-top.md` — definition — Dense, nowhere dense and codense subsets of a topological space, and the criterion by basic open sets

#### Definition

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) and let $A \subseteq X$. Interior
and closure are as in [[def-interior-closure-boundary-top]].

- $A$ is **dense** in $X$ if $\overline{A} = X$.
- $A$ is **codense** in $X$ if $X \setminus A$ is dense.
- $A$ is **nowhere dense** in $X$ if $\operatorname{int}(\overline{A}) = \varnothing$.

**Three equivalent forms of density, and the one used in practice.** The
following are equivalent:

1. $\overline{A} = X$;
2. $U \cap A \ne \varnothing$ for every nonempty open $U \subseteq X$;
3. $B \cap A \ne \varnothing$ for every nonempty $B \in \mathcal{B}$.

*Proof.* (1) $\Rightarrow$ (2): if $U$ is open and nonempty, pick $x \in U$; then
$x \in \overline{A}$, so $U \cap A \ne \varnothing$ by clause (c) of
[[thm-closure-characterisation-top]]. (2) $\Rightarrow$ (3): a nonempty member of
$\mathcal{B}$ is a nonempty open set. (3) $\Rightarrow$ (1): let $x \in X$; every
$B \in \mathcal{B}$ with $x \in B$ is nonempty and so meets $A$, hence
$x \in \overline{A}$ by clause (d) of [[thm-closure-characterisation-top]]. Form
3 is what makes density checkable: for the Sorgenfrey line it is a statement
about half-open intervals, and for a metric space a statement about balls.

**Codensity is emptiness of the interior.** $A$ is codense if and only if
$\operatorname{int}(A) = \varnothing$, because
$X \setminus \operatorname{int}(A) = \overline{X \setminus A}$
([[def-interior-closure-boundary-top]]), so $\overline{X \setminus A} = X$ holds
exactly when $\operatorname{int}(A) = \varnothing$.

**Nowhere dense implies codense, and the converse fails.** If
$\operatorname{int}(\overline{A}) = \varnothing$ then
$\operatorname{int}(A) \subseteq \operatorname{int}(\overline{A}) = \varnothing$
by monotonicity of the interior, so $A$ is codense. The two notions can differ
only on sets whose closure is larger than themselves, and there they sometimes
do: a dense set with empty interior, such as the rationals inside the real line,
is codense and is not nowhere dense, its closure being everything. They may also
agree on such a set: $(0,1)$ inside $\mathbb{R}$ has closure $[0,1]$ and is
neither codense nor nowhere dense. A *closed* set is nowhere dense
precisely when it is codense, since then $\overline{A} = A$.

## The 4 citing use(s), quoted verbatim from the citing items

### `def-separable-space` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Separability: the existence of an at most countable dense subset

- A topological space $X$ is **separable** if some at most countable subset $D\subseteq X$ is dense in $X$ ([[def-dense-top]], [[def-countable]]). Equivalently, every nonempty open subset of $X$ meets $D$.

### `def-weight-density-and-character` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, weight $w(X)$, density $d(X)$, local character $\\chi(x,X)$, and character $\\chi(X)$ as raw cardinal minima and a supremum

- Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $X$ be a topological space. The **weight** $w(X)$ is the least cardinality of a basis for $X$, and the **density** $d(X)$ is the least cardinality of a dense subset of $X$ ([[def-topology-basis-subbasis]], [[def-dense-top]], [[def-cardinal]]).

### `prop-separable-spaces-are-ccc` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Every separable space satisfies the countable chain condition

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-second-countable-implies-separable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, every second countable space is separable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.


---

# Citation-precision audit — everything that cites `def-cardinal-arithmetic`

## The target, as it actually stands on disk

`items/def-cardinal-arithmetic.md` — definition — Cardinal sum $\\kappa \\oplus \\lambda$, product $\\kappa \\otimes \\lambda$ and exponentiation $\\kappa^{\\lambda}$, and why they are written apart from the ordinal operations

#### Definition

Let $\kappa$ and $\lambda$ be cardinals ([[def-cardinal]]), and recall the
notation of [[lem-cardinal-operations-are-well-defined]]:

$$\kappa \sqcup \lambda = (\{0\} \times \kappa) \cup (\{1\} \times \lambda), \qquad {}^{\lambda}\kappa = \{\, h : h \text{ is a function } \lambda \to \kappa \,\}.$$

**Sum and product.**

$$\kappa \oplus \lambda \;:=\; \lvert \kappa \sqcup \lambda \rvert, \qquad \kappa \otimes \lambda \;:=\; \lvert \kappa \times \lambda \rvert .$$

Both values exist in ZF and are cardinals: claim (c) of
[[lem-cardinal-operations-are-well-defined]] well-orders each of the two sets
explicitly, and [[lem-cardinality-of-a-well-orderable-set]] then supplies the
least equinumerous ordinal. **No choice principle is used.**

**Exponentiation.**

$$\kappa^{\lambda} \;:=\; \lvert {}^{\lambda}\kappa \rvert ,$$

the number of functions from a set of size $\lambda$ to a set of size $\kappa$.
The right-hand side is defined exactly when ${}^{\lambda}\kappa$ is
well-orderable. **Assuming the Axiom of Choice** ([[def-axiom-of-choice]]) every
set is well-orderable ([[thm-well-ordering-theorem]]) and $\kappa^{\lambda}$ is
defined for all cardinals; every statement on this page that writes
$\kappa^{\lambda}$ for an infinite exponent says so in its own hypotheses.

**Transport to arbitrary sets.** If $A$ and $B$ are well-orderable with
$\lvert A \rvert = \kappa$ and $\lvert B \rvert = \lambda$, then

$$\lvert A \sqcup B \rvert = \kappa \oplus \lambda, \qquad \lvert A \times B \rvert = \kappa \otimes \lambda, \qquad \lvert {}^{B}A \rvert = \kappa^{\lambda}$$

whenever the sets on the left have cardinalities at all, because $A \approx \kappa$
and $B \approx \lambda$ ([[def-equinumerous]]) and the three constructions
respect $\approx$ (claim (a) of [[lem-cardinal-operations-are-well-defined]],
[[def-injection-surjection-bijection]]). So the operations may be computed from
any representatives.

**Finite and infinite cardinals.** A cardinal $\kappa$ is **finite** when
$\kappa \in \omega$ and **infinite** when $\omega \subseteq \kappa$, that is
$\omega \le \kappa$; by trichotomy ([[lem-ordinal-trichotomy]]) and
[[lem-omega-least-limit-ordinal]] every cardinal is exactly one of the two.

## The 4 citing use(s), quoted verbatim from the citing items

### `def-lindelof-degree-and-cellularity` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, Lindelöf degree $L(X)$ and cellularity $c(X)$ as raw cardinal functions

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-weight-density-and-character` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, weight $w(X)$, density $d(X)$, local character $\\chi(x,X)$, and character $\\chi(X)$ as raw cardinal minima and a supremum

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `lem-large-cantor-cubes-are-not-separable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, if $|I|>2^{\\aleph_0}$, then the Cantor cube $2^I$ is not separable

- [L2] The binary sequences have cardinality $2^{\aleph_0}$ ([[def-cardinal-arithmetic]], [[thm-cardinal-power-set-and-cantor]]).

### `thm-metric-weight-equals-density` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every metrizable space has $w(X)=d(X)$

- [L3] If $\kappa$ is infinite, then $\kappa\cdot\aleph_0=\kappa$ ([[def-cardinal-arithmetic]], [[cor-cardinal-absorption]]).


---

# Citation-precision audit — everything that cites `def-metric-convergence`

## The target, as it actually stands on disk

`items/def-metric-convergence.md` — definition — Convergence of a sequence in a metric space: $x_k \\to x$ iff $d(x_k, x) \\to 0$ in $\\mathbb{R}$

#### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library, $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here.

Let $(x_k)$ be a sequence in $X$ and $p \in X$. The function
$k \mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is
nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$
([[def-abs-value]]). Define

$$x_k \longrightarrow p \text{ in } (X,d) \quad :\Longleftrightarrow \quad d(x_k,p) \longrightarrow 0 \text{ in } \mathbb{R},$$

the convergence on the right being that of [[def-real-limit]]. Unwound, this
says: for every **rational** $\varepsilon > 0$ there is $K \in \mathbb{N}$ with
$d(x_k, p) < \varepsilon$ for every $k \ge K$. We then call $p$ a **limit** of
$(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit.

**Rational and real $\varepsilon$ agree here, as they do on the real line.**
[[def-real-limit]] tests convergence against rational $\varepsilon$ only, and its
own remark, restated for sequences in [[def-sequence]], records that nothing is
lost: below any real $\eta > 0$ lies a positive rational
([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for
$\eta$. So a proof may establish convergence by producing an index for every
real $\varepsilon > 0$, and may use a convergence hypothesis at a real
$\varepsilon$ by first passing to a rational below it. Both moves are used on
this page and are always cited.

**Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the
composite $x \circ n$ for a strictly increasing $n : \mathbb{N} \to \mathbb{N}$,
written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and
$p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence
converges to $p$, which is the metric-space form of [[def-subsequential-limit]].

## The 4 citing use(s), quoted verbatim from the citing items

### `lem-uniform-convergence-in-the-uniform-metric` (published-backward, page function-space-topologies)

Title: Convergence in the uniform metric is exactly uniform convergence: one $N$ serving every point

- convergence in a metric space being [[def-metric-convergence]] and uniform
- [L4] $g_k \to g$ in a metric space means: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with the distance from $g_k$ to $g$ below $\varepsilon$ for every $k \ge K$; and the test with a **real** $\varepsilon > 0$ is equivalent, since below every positive real lies a positive rational ([[def-metric-convergence]], [[lem-rat-embeds-dense]], [[def-metric-ball]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- [L8] Uniform convergence of $(f_k)$ to $f$ is: for every real $\varepsilon > 0$ there is $N \in \mathbb{N}$ with $|f_k(x) - f(x)| < \varepsilon$ for every $x \in X$ and every $k \ge N$ ([[def-topology-of-uniform-convergence]], [[lem-uniform-convergence-in-the-uniform-metric]], [[def-metric-convergence]]).

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- [L3] Completeness of $(Y,d)$: every $d$-Cauchy sequence in $Y$ converges in $(Y,d)$, and its limit is unique ([[def-complete-metric-space]], [[lem-metric-limits-unique]], [[def-metric-convergence]]).
- [L4] $x_k \to p$ in a metric space means: for every real $\varepsilon > 0$ there is $K$ with the distance from $x_k$ to $p$ below $\varepsilon$ for every $k \ge K$ ([[def-metric-convergence]], [[def-metric-ball]], [[lem-rat-embeds-dense]]).

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.
