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

# Citation-precision audit — everything that cites `lem-filter-base-generates`

## The target, as it actually stands on disk

`items/lem-filter-base-generates.md` — lemma — The upward closure of a filter base is the smallest filter containing it

#### Statement

Let $X$ be a set and let $\mathcal{B}$ be a filter base on $X$
([[def-filter-base]]), with upward closure

$$\langle \mathcal{B} \rangle = \{\, A \subseteq X \;:\; B \subseteq A \text{ for some } B \in \mathcal{B} \,\}.$$

Then:

1. $\langle \mathcal{B} \rangle$ is a filter on $X$ ([[def-filter]]);
2. $\mathcal{B} \subseteq \langle \mathcal{B} \rangle$, and
   $\langle \mathcal{B} \rangle \subseteq \mathcal{F}$ for every filter
   $\mathcal{F}$ on $X$ with $\mathcal{B} \subseteq \mathcal{F}$, so
   $\langle \mathcal{B} \rangle$ is the smallest filter on $X$ containing
   $\mathcal{B}$;
3. every filter $\mathcal{F}$ on $X$ is itself a filter base, and it generates
   itself: $\langle \mathcal{F} \rangle = \mathcal{F}$.

## The 1 citing use(s), quoted verbatim from the citing items

### `def-tail-filter-of-a-net` (published-backward, page nets-and-filters)

Title: The tail filter of a net

- For a net $x:D\to X$, put $T_d=\{x_e:d\le e\}$ and $\mathcal B_x=\{T_d:d\in D\}$. This is a filter base: it is nonempty, each $T_d$ contains $x_d$, and if $f\ge d,e$ then $T_f\subseteq T_d\cap T_e$. Its generated filter [[lem-filter-base-generates]] is the **tail filter** of $x$:


---

# Citation-precision audit — everything that cites `thm-compact-iff-fip`

## The target, as it actually stands on disk

`items/thm-compact-iff-fip.md` — theorem — A space is compact exactly when every family of closed subsets with the finite intersection property has nonempty intersection

#### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). For a
family $\mathcal{A}$ of subsets of $X$ write

$$\bigcap \mathcal{A} \;:=\; \{\, x \in X : x \in A \text{ for every } A \in \mathcal{A} \,\},$$

so that $\bigcap \varnothing = X$, matching the convention for the empty finite
intersection in [[def-finite-intersection-property]]. Then:

1. $(X, \mathcal{T})$ is compact ([[def-compact-space]]) **if and only if** every
   family $\mathcal{A}$ of closed subsets of $X$ with the finite intersection
   property ([[def-finite-intersection-property]]) satisfies
   $\bigcap \mathcal{A} \ne \varnothing$.
2. Equivalently: $(X, \mathcal{T})$ is compact if and only if every family of
   closed subsets of $X$ that is contained in some filter on $X$
   ([[def-filter]]) has nonempty intersection, a family of subsets of $X$ lying
   in a filter exactly when it has the finite intersection property
   ([[lem-fip-generates-filter]]).

No choice principle is used in either direction: complementation is a canonical
bijection, so no member of a family ever has to be selected.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-compactness-via-nets-filters-and-ultrafilters` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, compactness is equivalent to every net having a cluster point, every net having a convergent subnet, every filter having a cluster point, and every ultrafilter converging

- [L1] Compactness is equivalent to every family of closed sets with the finite-intersection property having nonempty intersection; moreover, a family of subsets of $X$ has the finite-intersection property exactly when it is contained in a filter on $X$ ([[thm-compact-iff-fip]], clauses 1 and 2).


---

# Citation-precision audit — everything that cites `thm-tychonoff`

## The target, as it actually stands on disk

`items/thm-tychonoff.md` — theorem — Tychonoff's theorem: an arbitrary product of compact spaces is compact in the product topology, assuming the Axiom of Choice

#### Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]).

Let $I$ be a set and let $(X_i, \mathcal{T}_i)_{i \in I}$ be a family of compact
topological spaces ([[def-compact-space]], [[def-topological-space]]). Then the
product

$$P \;:=\; \prod_{i \in I} X_i$$

with the product topology ([[def-product-topology]]) is compact.

**The Axiom of Choice is spent twice, and both uses are flagged below.** Once
inside [[thm-alexander-subbase-lemma]], through Zorn's lemma ([[thm-zorn]]), and
once directly at step 2.1, to produce a point of a product of nonempty sets.

## The 1 citing use(s), quoted verbatim from the citing items

### `rem-tychonoff-choice-strengths` (published-backward, page nets-and-filters)

Title: The compact Hausdorff product theorem uses the ultrafilter lemma, while the published arbitrary compact product theorem assumes the full Axiom of Choice

- The proof of [[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]] spends the ultrafilter lemma at the universal-subnet step. The published [[thm-tychonoff]] asserts compactness for arbitrary compact factors under the full Axiom of Choice ([[def-axiom-of-choice]]). These are distinct stated hypotheses; this page makes no claim about their exact relative strength.


---

# Citation-precision audit — everything that cites `thm-first-countable-sequences-suffice`

## The target, as it actually stands on disk

`items/thm-first-countable-sequences-suffice.md` — theorem — Assuming Countable Choice, in a first countable space sequential closure equals closure and sequential continuity at a point equals continuity there

#### Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let $X$ be a
first countable topological space ([[def-first-countable-top]]) and let $Y$ be a
topological space. Then:

1. $\operatorname{seqcl}(A) = \overline{A}$ for every $A \subseteq X$
   ([[def-sequence-convergence-top]], [[thm-closure-characterisation-top]]);
2. for $f : X \to Y$ and $p \in X$, $f$ is continuous at $p$
   ([[def-continuous-map-top]]) if and only if $f$ is sequentially continuous at
   $p$.

**Where $\mathrm{AC}_\omega$ is spent, and that it is not decoration.** Both
directions that this theorem adds to
[[lem-sequential-closure-inside-closure]] build a sequence by picking one point
from each of countably many nonempty sets $M_k \cap A$, respectively
$M_k \setminus f^{-1}[V]$, and the first countability hypothesis supplies no rule
for the pick. The two applications of $\mathrm{AC}_\omega$ below are the only
uses of any choice principle in the proof; the inclusions already proved in
[[lem-sequential-closure-inside-closure]] use none at all.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-first-countable-frechet-urysohn-sequential-hierarchy` (published-backward, page nets-and-filters)

Title: Assuming countable choice, every first countable space is Fréchet–Urysohn; in ZF every Fréchet–Urysohn space is sequential

- [L1] Under countable choice, first countability gives $\operatorname{seqcl}(A)=\overline A$ for every $A\subseteq X$ ([[thm-first-countable-sequences-suffice]], [[def-countable-choice]]).
