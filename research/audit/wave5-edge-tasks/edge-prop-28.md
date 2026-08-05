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

# Citation-precision audit — everything that cites `thm-ordinal-spaces-and-compactness`

## The target, as it actually stands on disk

`items/thm-ordinal-spaces-and-compactness.md` — theorem — Every successor ordinal is compact in its order topology and every limit ordinal is not; and, assuming countable choice, $\\omega_1$ is countably compact and sequentially compact while $\\omega_1 + 1$ is compact

#### Statement

Every ordinal carries the order topology of the membership order on it
([[def-ordinal]], [[def-order-topology-on-a-linearly-ordered-set]]), with the
clopen basis $\mathcal{B}_\gamma$ of
[[lem-the-order-topology-on-an-ordinal]]. Then:

1. **Successors are compact.** For every ordinal $\delta$ the successor ordinal
   $\delta^{+}$ is compact ([[def-compact-space]]).
2. **Limits are not.** No limit ordinal ([[def-limit-ordinal]]) is compact.
3. **Assuming the Axiom of Countable Choice** ([[def-countable-choice]]): the
   first uncountable ordinal $\omega_1$ ([[def-first-uncountable-ordinal]]) is
   sequentially compact and countably compact ([[def-compactness-variants]]),
   and it is not compact; while $\omega_1 + 1$ is compact
   ([[def-ordinal-addition]]).

Claims 1 and 2 are theorems of ZF. Claim 3 spends countable choice twice, both
times through cited results that carry the hypothesis in their own statements:
[[thm-countable-subsets-of-omega-one-are-bounded]], which supplies the
boundedness of at most countable subsets of $\omega_1$, and claim 2 of
[[thm-compactness-variants-hierarchy]], which converts sequential compactness
into countable compactness; the extraction of a subsequence below selects
nothing, taking least elements throughout.

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-countability-profile-of-omega-one` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: Assuming countable choice, $\\omega_1$ is first countable and countably compact but is not separable or Lindelöf

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.


---

# Citation-precision audit — everything that cites `thm-all-norms-on-rn-are-equivalent`

## The target, as it actually stands on disk

`items/thm-all-norms-on-rn-are-equivalent.md` — theorem — For $n \\ge 1$ all norms on $\\mathbb{R}^n$ are equivalent

#### Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. Then any two norms on $\mathbb{R}^{n}$ are
equivalent ([[def-equivalent-norms]], [[def-norm-and-normed-space]]).

More precisely, for every norm $N$ on $\mathbb{R}^{n}$ there are reals
$c > 0$ and $C' > 0$ with

$$c\,\lVert x\rVert_2 \;\le\; N(x) \;\le\; C'\,\lVert x\rVert_2 \qquad \text{for every } x \in \mathbb{R}^{n},$$

and the general statement follows because equivalence of norms is an equivalence
relation.

**Consequently all the metric notions on $\mathbb{R}^{n}$ are norm independent**
for $n \ge 1$: any two norms give the same open sets, the same convergent
sequences with the same limits, the same Cauchy sequences and the same uniformly
continuous maps ([[def-equivalent-norms]]).

**The hypothesis $n \ge 1$ is used twice in the proof and both uses are marked**:
once so that the constant $C$ of
[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] exists, and once
so that the Euclidean unit sphere is **nonempty**, which is what the extreme
value theorem needs. At $n = 0$ the conclusion is true but vacuous, the zero
space carrying exactly one norm ([[def-norm-and-normed-space]]), and it is not
obtained from the argument below.

## The 1 citing use(s), quoted verbatim from the citing items

### `rem-euclidean-topology-dictionary` (published-backward, page the-topology-of-euclidean-space)

Title: The product, Euclidean-metric and norm topologies on $\\mathbb{R}^n$ agree, and for $n=1$ they agree with the real-line topology

- For $n \ge 1$, the product topology on $\mathbb{R}^n$ is the metric topology of each of $d_1$, $d_2$, and $d_\infty$ ([[lem-product-topology-on-rn]]). Every norm on $\mathbb{R}^n$ is equivalent to the Euclidean norm, hence induces that same topology ([[thm-all-norms-on-rn-are-equivalent]]). Thus open, closed, compact, connected, and continuous below have one unambiguous Euclidean meaning.


---

# Citation-precision audit — everything that cites `thm-compactness-under-continuous-maps`

## The target, as it actually stands on disk

`items/thm-compactness-under-continuous-maps.md` — theorem — A continuous image of a compact space is compact; a continuous real-valued map on a nonempty compact space attains a maximum and a minimum; and a continuous bijection from a compact space to a Hausdorff space is a homeomorphism

#### Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), and let $\mathbb{R}$ carry its usual topology, the
metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]], [[def-metric-topology]],
[[def-metrizable-space]]). Then:

1. **Continuous images.** If $f : X \to Y$ is continuous
   ([[def-continuous-map-top]]) and $(X, \mathcal{T}_X)$ is compact
   ([[def-compact-space]]), then $f[X]$ is a compact subset of $Y$. More
   generally, if $K \subseteq X$ is a compact subset of $X$ then $f[K]$ is a
   compact subset of $Y$.
2. **Extreme values.** If $(X, \mathcal{T}_X)$ is compact and nonempty and
   $g : X \to \mathbb{R}$ is continuous, then $g[X]$ has a maximum and a minimum
   ([[def-max-min]]): there are $x_{\max}, x_{\min} \in X$ with
   $$g(x_{\min}) \;\le\; g(x) \;\le\; g(x_{\max}) \qquad \text{for every } x \in X .$$
3. **Compact to Hausdorff.** If $(X, \mathcal{T}_X)$ is compact, $(Y,
   \mathcal{T}_Y)$ is Hausdorff ([[def-hausdorff-space]]) and $f : X \to Y$ is a
   continuous bijection, then $f$ is a homeomorphism
   ([[def-homeomorphism-and-open-maps]]).

Nonemptiness in claim 2 is a hypothesis and not an oversight: for
$X = \varnothing$ the image is empty and has neither a maximum nor a minimum. **No
choice principle is used**: the one selection made below is over a finite index
set, where [[lem-finite-choice]] is a theorem of ZF.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` (published-backward, page the-topology-of-euclidean-space)

Title: For a nonempty subset of $\\mathbb{R}^n$ with $n\\ge1$, compactness, closedness and boundedness, pseudocompactness, and attainment of extrema by every continuous real-valued function are equivalent

- [L3] A continuous real-valued map on a nonempty compact topological space attains a maximum and a minimum ([[thm-compactness-under-continuous-maps]], claim 2).


---

# Citation-precision audit — everything that cites `thm-metric-compactness-equivalences`

## The target, as it actually stands on disk

`items/thm-metric-compactness-equivalences.md` — theorem — For a metric space, compact, countably compact, limit point compact, sequentially compact, and complete together with totally bounded are all equivalent, given countable choice and dependent choice

#### Statement

**Assume the Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom
of Dependent Choice ([[def-dependent-choice]]).** Let $(X,d)$ be a metric space
([[def-metric-space]]). Then the following five conditions are equivalent.

- **(a)** $(X,d)$ is compact ([[def-metric-compactness]]).
- **(b)** $(X,d)$ is countably compact ([[def-metric-compactness-variants]]).
- **(c)** $(X,d)$ is limit point compact.
- **(d)** $(X,d)$ is sequentially compact.
- **(e)** $(X,d)$ is complete ([[def-complete-metric-space]]) and totally bounded
  ([[def-totally-bounded]]).

**The two hypotheses are not needed everywhere, and the statement should not be
read as if they were.** Of the implications assembled below, all but two are
theorems of ZF. Dependent choice is used only for "sequentially compact implies
totally bounded" ([[thm-sequentially-compact-implies-totally-bounded]]), and
countable choice only for "complete and totally bounded implies compact"
([[thm-complete-and-totally-bounded-implies-compact]]). Each is an upper bound on
the cost of the proof given in this library and not a claim of necessity; the
implication-by-implication account is
[[rem-compactness-choice-ledger-metric]].

## The 1 citing use(s), quoted verbatim from the citing items

### `cor-euclidean-compactness-equivalence-chart` (published-backward, page the-topology-of-euclidean-space)

Title: Assuming $\\mathrm{AC}_\\omega$ and $\\mathrm{DC}$, compactness, sequential compactness, countable compactness, limit point compactness, completeness and total boundedness, pseudocompactness, closedness and boundedness, and the extreme-value property are equivalent for nonempty subsets of $\\mathbb{R}^n$ with $n\\ge1$

- [L2] Under $\mathrm{AC}_\omega$ and $\mathrm{DC}$, a metric space is compact if and only if it is countably compact, limit point compact, sequentially compact, or complete and totally bounded ([[thm-metric-compactness-equivalences]]).
