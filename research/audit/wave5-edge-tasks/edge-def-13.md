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

# Citation-precision audit — everything that cites `def-limit-ordinal`

## The target, as it actually stands on disk

`items/def-limit-ordinal.md` — definition — Successor and limit ordinals

#### Definition

Let $\alpha$ be an ordinal ([[def-ordinal]]).

- $\alpha$ is a **successor ordinal** when $\alpha = \beta^{+} = \beta \cup \{\beta\}$
  for some ordinal $\beta$, which is then an ordinal by [[lem-ordinal-basics]];
- $\alpha$ is a **limit ordinal** when $\alpha \ne 0$ and $\alpha$ is not a
  successor ordinal.

Every ordinal is therefore exactly one of: $0$, a successor ordinal, or a limit
ordinal. The three cases are the three clauses of a definition or a proof by
transfinite recursion or induction over the ordinals.

## The 3 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- limit ([[def-limit-ordinal]]). If $\xi = 0$ then $\{\xi\} = [0,0]$ is basic open;

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- [L1] $\omega$ is an ordinal and a limit ordinal, every element of $\omega$ is $0$ or a successor, and $m \in n$ is $m < n$ for naturals ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[lem-ordinal-basics]]).


---

# Citation-precision audit — everything that cites `def-ultrafilter`

## The target, as it actually stands on disk

`items/def-ultrafilter.md` — definition — Ultrafilter

#### Definition

Let $X$ be a set and let $\mathrm{Filt}(X)$ be the set of all filters on $X$
([[def-filter]]). Since every filter is a subset of $\mathcal{P}(X)$, the family
$\mathrm{Filt}(X)$ is a subset of $\mathcal{P}(\mathcal{P}(X))$ and is therefore a
set, carved out by Separation. Inclusion is a partial order on it
([[def-partial-order]]): $\subseteq$ is reflexive, antisymmetric by
extensionality, and transitive.

An **ultrafilter on $X$** is a filter on $X$ that is a **maximal element** of
$(\mathrm{Filt}(X), \subseteq)$ ([[def-maximal-element]]): a filter $\mathcal{U}$
on $X$ such that no filter on $X$ strictly contains $\mathcal{U}$, equivalently
such that every filter $\mathcal{G}$ on $X$ with $\mathcal{U} \subseteq
\mathcal{G}$ satisfies $\mathcal{G} = \mathcal{U}$.

An ultrafilter is **principal** if it is of the form
$\{\, A \subseteq X : x \in A \,\}$ for some $x \in X$, and **free**, or
**non-principal**, otherwise.

## The 3 citing use(s), quoted verbatim from the citing items

### `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` (published-backward, page nets-and-filters-examples)

Title: Assuming the ultrafilter lemma, a free ultrafilter on $\\mathbb{N}$ converges to the added point in the one-point convergent-sequence space

- [L5] A filter is an ultrafilter exactly when for every subset it contains that subset or its complement ([[def-ultrafilter]], [[thm-ultrafilter-characterisation]]).

### `lem-ultrafilter-cluster-points-are-limits` (published-backward, page nets-and-filters)

Title: Every cluster point of an ultrafilter is a limit of that ultrafilter

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-universal-nets-and-ultrafilters-correspond` (published-backward, page nets-and-filters)

Title: A net is universal exactly when its tail filter is an ultrafilter, and the canonical net of an ultrafilter is universal

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.


---

# Citation-precision audit — everything that cites `def-field`

## The target, as it actually stands on disk

`items/def-field.md` — definition — Field

#### Definition

A **field** is a set $F$ equipped with two binary operations $+$ (addition) and
$\cdot$ (multiplication) and two distinguished elements $0 \ne 1$ of $F$,
satisfying:

- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is
  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an
  additive inverse $-x$ with $x + (-x) = 0$.
- **(M)** Multiplication is associative and commutative **on all of $F$**, and
  $x \cdot 1 = x$ for every $x \in F$; moreover $(F \setminus \{0\}, \cdot)$ is an
  abelian group with identity $1$, so every $x \ne 0$ has a multiplicative inverse
  $x^{-1}$ with $x \cdot x^{-1} = 1$.
- **(D)** Multiplication distributes over addition: $x \cdot (y + z) = x\cdot y + x\cdot z$.

We write $x - y := x + (-y)$ and $x/y := x \cdot y^{-1}$ (for $y \ne 0$), and
abbreviate $x \cdot y$ as $xy$.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L3] Field arithmetic: $(u+1)/3 - (v+1)/3 = (u - v)/3$, and $3L = L + 1$ is equivalent to $2L = 1$ ([[def-field]]).

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L5] Absolute value and field arithmetic: $|-u| = |u|$ ([[lem-of-abs-value]]); $|v| = v$ whenever $v \ge 0$ ([[def-abs-value]], [[def-real-order]]); and $-(-u) = u$ ([[def-field]]).


---

# Citation-precision audit — everything that cites `def-one-point-compactification`

## The target, as it actually stands on disk

`items/def-one-point-compactification.md` — definition — The one-point (Alexandroff) compactification $X^{*} = X \\cup \\{\\infty\\}$, whose open sets are the open sets of $X$ together with the complements in $X^{*}$ of the closed compact subsets of $X$

#### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

**A point outside $X$, named rather than assumed.** Put

$$\infty \;:=\; \{\, y \in X : y \notin y \,\},$$

a set by Separation. Then $\infty \notin X$: were $\infty \in X$, the defining
condition applied to $\infty$ itself would give
$\infty \in \infty \iff \infty \notin \infty$. So no hypothesis about $X$ is
needed to obtain a point outside it, and the construction below is available for
every space.

**The space.** Put $X^{*} := X \cup \{\infty\}$ and

$$\mathcal{T}^{*} \;:=\; \mathcal{T} \;\cup\; \{\, X^{*} \setminus C \;:\; C \subseteq X,\ C \text{ closed in } X \text{ and a compact subset of } X \,\} .$$

The pair $(X^{*}, \mathcal{T}^{*})$ is the **one-point compactification**, or
**Alexandroff compactification**, of $X$. Members of $\mathcal{T}$ are said to be
of the **first kind** and the sets $X^{*} \setminus C$ of the **second kind**; a
set of the second kind is exactly an open set of $\mathcal{T}^{*}$ containing
$\infty$, since a member of $\mathcal{T}$ is a subset of $X$, and the set $C$ is
recovered from it as $C = X^{*} \setminus (X^{*} \setminus C)$.

**$\mathcal{T}^{*}$ is a topology on $X^{*}$, and this is discharged here.**
Throughout, "closed" and "compact" without qualification mean closed in $X$ and a
compact subset of $X$ ([[def-compact-space]]); two facts about such sets are used
and both are [[thm-closed-subspace-of-a-compact-space-is-compact]]: a subset of a
compact $C$ that is closed in $X$ is closed in the subspace $C$
([[def-subspace-topology-top]]) and hence compact, and a union of two compact
subsets is compact.

*(T1).* $\varnothing \in \mathcal{T}$, and $X^{*} = X^{*} \setminus \varnothing$
is of the second kind, $\varnothing$ being closed in $X$ and compact.

*(T2).* Let $\mathcal{S} \subseteq \mathcal{T}^{*}$, let $\mathcal{S}_1$ be the
members of $\mathcal{S}$ lying in $\mathcal{T}$ and $\mathcal{S}_2$ the rest, so
that every member of $\mathcal{S}_2$ is of the second kind. If
$\mathcal{S}_2 = \varnothing$ then $\bigcup \mathcal{S} = \bigcup \mathcal{S}_1$
lies in $\mathcal{T}$ by (T2) in $X$. Otherwise put
$U := \bigcup \mathcal{S}_1 \in \mathcal{T}$ and
$\mathcal{D} := \{\, X^{*} \setminus O : O \in \mathcal{S}_2 \,\}$, a nonempty
family of closed compact subsets of $X$, and $C_0 := \bigcap \mathcal{D}$. Then
$C_0$ is closed by (C2) of [[def-topological-space]], and it is a closed subset of
any one member of $\mathcal{D}$, hence compact. Now

$$\bigcup \mathcal{S} \;=\; U \cup (X^{*} \setminus C_0) \;=\; X^{*} \setminus (C_0 \setminus U),$$

and $C_0 \setminus U = C_0 \cap (X \setminus U)$ is closed in $X$ and a subset of
the compact $C_0$, hence compact; so $\bigcup \mathcal{S}$ is of the second kind.

*(T3).* For $U, V \in \mathcal{T}$ the intersection lies in $\mathcal{T}$ by (T3)
in $X$. For two sets of the second kind,
$(X^{*} \setminus C) \cap (X^{*} \setminus D) = X^{*} \setminus (C \cup D)$, and
$C \cup D$ is closed in $X$ and compact as a union of two compact subsets. For one
of each, $\infty \notin U$ gives
$U \cap (X^{*} \setminus C) = U \cap (X \setminus C)$, an intersection of two
members of $\mathcal{T}$.

**Why the compact sets are also required to be closed.** The complement of a
compact set that is not closed in $X$ would not make $\infty$'s neighbourhoods
behave: the union computation in (T2) uses that an intersection of the discarded
sets is again closed, and the intersection of arbitrary compact subsets of a
non-Hausdorff space need not be compact. When $X$ is Hausdorff every compact
subset is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]) and the
two descriptions agree, which is why many texts state the definition without the
word "closed" and silently assume the Hausdorff case.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-cardinal-functions-of-a-one-point-compactification` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: The one-point compactification of the discrete real line is compact and Lindelöf but is neither first countable nor separable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.
