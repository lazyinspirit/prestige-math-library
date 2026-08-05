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

# Citation-precision audit — everything that cites `thm-monotone-convergence`

## The target, as it actually stands on disk

`items/thm-monotone-convergence.md` — theorem — A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

#### Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let
$S = \{x_k : k \in \mathbb{N}\}$ be its range.

1. If $(x_k)$ is nondecreasing ([[def-monotone-sequence]]) and $S$ is bounded
   above ([[def-bounded-set]]), then $(x_k)$ converges ([[def-real-limit]]) and
   $$\lim_{k} x_k = \sup S .$$
2. If $(x_k)$ is nonincreasing and $S$ is bounded below, then $(x_k)$ converges
   and $$\lim_{k} x_k = \inf S .$$

Both suprema and infima exist under the stated hypotheses: $S$ is nonempty, so
the least-upper-bound property ([[def-complete-ordered-field]]) supplies the
first and [[thm-infimum-property]] the second, and each is unique
([[lem-sup-unique]]).

This is the first place in this track where the least-upper-bound property
produces a **limit**. Everything on the sequences page held in any Archimedean
ordered field; the theorem below does not, and the sequence of decimal
truncations of $\sqrt 2$ inside $\mathbb{Q}$ is the standard witness of its
failure there.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-dini-on-the-unit-interval` (cross-batch, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- [L6] Dini's theorem: on a compact metric space a sequence of continuous real functions with $g_k \le g_{k+1}$ pointwise, converging pointwise to a continuous $g$, converges to $g$ uniformly ([[thm-dini]], [[def-monotone-sequence]], [[thm-monotone-convergence]]).

### `thm-dini` (cross-batch, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- [L2] A convergent sequence of reals is bounded, and a nondecreasing sequence bounded above converges to the supremum of its range; limits of real sequences are unique ([[lem-convergent-implies-bounded]], [[thm-monotone-convergence]], [[lem-limit-unique]], [[def-bounded-set]], [[def-complete-ordered-field]], [[lem-sup-unique]]).


---

# Citation-precision audit — everything that cites `cor-interval-uncountable`

## The target, as it actually stands on disk

`items/cor-interval-uncountable.md` — corollary — Every nondegenerate interval of $\\mathbb{R}$ is uncountable

#### Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]) and
let $a, b \in \mathbb{R}$ with $a < b$. Then both

1. the closed interval $[a,b] = \{\, x \in \mathbb{R} : a \le x \le b \,\}$, and
2. the open interval $(a,b) = \{\, x \in \mathbb{R} : a < x < b \,\}$

are uncountable ([[def-countable]]).

**What this adds to [[thm-r-uncountable]], and what it does not inherit from it.**
That theorem states exactly one thing: $\mathbb{R}$ is uncountable. Its statement
says nothing about any interval, so the present result cannot be read off it. Its
*proof*, on the other hand, is general in every part but its seed: the trisection
rule of its step 2.1 is constructed there for an arbitrary $(a,b) \in I$, and its
steps 4.1, 5.1 and 6.1, together with the interval reasoning of its step 7.1, use
nothing about the starting interval beyond the nesting and the strictness
$a_n < b_n$ that the rule delivers. Only three places are special to $\mathbb{R}$
and to $(0,1)$: the surjection of its step 1.1 is onto $\mathbb{R}$, the recursion
of its step 3.1 is seeded at $(0,(0,1))$, and the conclusion drawn in its step 7.1
is about $\mathbb{R}$. So the construction is re-run below, seeded
instead at the **middle third** of $(a,b)$, against a surjection onto $(a,b)$; the
remarks record why that seed and not $(a,b)$ itself.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-cocountable-closure-detected-by-a-net-not-a-sequence` (published-backward, page nets-and-filters-examples)

Title: In the cocountable topology on $\\mathbb{R}$, a closure point outside $[0,1]$ is reached by a net in $[0,1]$ but by no sequence in $[0,1]$

- [L2] $[0,1]$ is uncountable ([[cor-interval-uncountable]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L5] Every nondegenerate open interval of $\mathbb{R}$ is uncountable, $\mathbb{Q}$ is at most countable, and a subset of an at most countable set is at most countable ([[cor-interval-uncountable]], [[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]]).


---

# Citation-precision audit — everything that cites `thm-subspace-closure-and-interior`

## The target, as it actually stands on disk

`items/thm-subspace-closure-and-interior.md` — theorem — For $A \\subseteq S \\subseteq X$ the closure of $A$ in $S$ is $\\overline{A}^{X} \\cap S$, while the interior only contains $\\operatorname{int}^{X}(A) \\cap S$, with equality when $S$ is open; and a dense subset of $X$ traces to a dense subset of every open $S$

#### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$S \subseteq X$ carry the subspace topology $\mathcal{T}_S$
([[def-subspace-topology-top]]) and let $A \subseteq S$. Write $\overline{A}$ and
$\operatorname{int}(A)$ for the closure and the interior of $A$ in $X$, and
$\operatorname{cl}_S(A)$ and $\operatorname{int}_S(A)$ for those taken in the
space $(S, \mathcal{T}_S)$ ([[def-interior-closure-boundary-top]]). Then:

1. **Closure traces exactly.**
   $$\operatorname{cl}_S(A) \;=\; \overline{A} \cap S .$$
2. **Interior traces only one way.** $\operatorname{int}(A) \subseteq S$, so
   $\operatorname{int}(A) \cap S = \operatorname{int}(A)$, and
   $$\operatorname{int}(A) \;\subseteq\; \operatorname{int}_S(A) ,$$
   an inclusion that may be strict.
3. **Equality for an open subspace.** If $S \in \mathcal{T}$ then
   $\operatorname{int}_S(A) = \operatorname{int}(A)$.
4. **Density traces to open subspaces only.** If $D \subseteq X$ is dense in $X$
   ([[def-dense-top]]) and $S \in \mathcal{T}$, then $D \cap S$ is dense in
   $(S, \mathcal{T}_S)$. Without the hypothesis $S \in \mathcal{T}$ this fails.

Both failures are witnessed inside the proof, in Sierpinski space
([[def-standard-topologies]]): the unqualified forms of claims 2 and 3 and of
claim 4 are false, and the counterexamples are two lines each rather than
deferred.

## The 2 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [A3] The open sets of $T$ are the traces $U' \cap T$ of the open sets of $W \times Z$, the closed sets of $T$ are the traces of the closed sets, and the traces of a basis form a basis ([[def-subspace-topology-top]], [[thm-subspace-closure-and-interior]]).

### `def-separated-sets` (published-backward, page separation-axioms)

Title: Separated sets: $\\overline{A} \\cap B = A \\cap \\overline{B} = \\varnothing$

- ([[thm-subspace-closure-and-interior]], claim 1), so


---

# Citation-precision audit — everything that cites `thm-omega-one-is-the-least-uncountable-ordinal`

## The target, as it actually stands on disk

`items/thm-omega-one-is-the-least-uncountable-ordinal.md` — theorem — $\\omega_1$ is uncountable, every ordinal below it is at most countable, it is a cardinal and a limit ordinal, and its existence is a theorem of ZF

#### Statement

Let $\omega_1 = \aleph(\omega)$ ([[def-first-uncountable-ordinal]]). Then:

**(a) The bridge.** An ordinal $\alpha$ ([[def-ordinal]]) injects into
$\mathbb{N}$ if and only if $\alpha$ is at most countable
([[def-countable]]).

**(b)** $\omega_1$ is **uncountable**.

**(c)** Every ordinal $\alpha \in \omega_1$ is at most countable; so $\omega_1$
is the least uncountable ordinal.

**(d)** $\omega_1$ is a **cardinal**, that is an initial ordinal
([[def-cardinal]]): no $\alpha \in \omega_1$ is equinumerous with $\omega_1$.

**(e)** $\omega_1$ is a **limit ordinal** ([[def-limit-ordinal]]).

**All of this is a theorem of ZF and uses no choice principle.** That matters
here and is stated deliberately: [[thm-hartogs]] is choice free,
[[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]] are
choice free, so $\omega_1$ and every property listed above exist in ZF alone.
The cost begins two items later on this page, at the boundedness theorem for at
most countable subsets of $\omega_1$, which genuinely needs countable choice.

## The 2 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- uncountable ([[thm-omega-one-is-the-least-uncountable-ordinal]]). As a set,
- [L3] $\omega_1$ is uncountable, is a limit ordinal, and every ordinal below it is at most countable ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).
