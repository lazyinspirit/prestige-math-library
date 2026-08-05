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

# Citation-precision audit — everything that cites `def-ordinal-addition`

## The target, as it actually stands on disk

`items/def-ordinal-addition.md` — definition — Ordinal addition $\\alpha + \\beta$

#### Definition

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]). The **sum**
$\alpha + \beta$ is defined by recursion on $\beta$, in the three cases of
[[def-limit-ordinal]]:

$$\alpha + 0 = \alpha, \qquad \alpha + \beta^{+} = (\alpha + \beta)^{+}, \qquad \alpha + \lambda = \bigcup\{\, \alpha + \beta : \beta \in \lambda \,\} \quad (\lambda \text{ a limit ordinal}).$$

That exactly one operation satisfies these three clauses, and that all its
values are ordinals, is [[cor-ordinal-addition-well-defined]], proved
immediately above. The union in the limit clause is the least upper bound of the
values already produced (claim (e) of [[lem-ordinal-basics]]), so it may be
written $\sup$ and the clause read as "at a limit, take the supremum".

**Notation.** We write $1 = 0^{+}$, $2 = 1^{+}$, and so on for the finite
ordinals, and $\sup$ for $\bigcup$ applied to a set of ordinals. The successor
operation is now a special case of addition:

$$\alpha + 1 = \alpha + 0^{+} = (\alpha + 0)^{+} = \alpha^{+},$$

so from here on $\alpha + 1$ and $\alpha^{+}$ denote the same ordinal, and both
notations are used, whichever reads better.

## The 2 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- ([[def-ordinal-addition]]) are $\omega_1^{+}$ and $\omega^{+}$; give each its
- [L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- ([[def-ordinal-addition]]), $\omega + 1 = \omega^{+} = \omega \cup \{\omega\}$,
- [A2] $\alpha + 1 = \alpha^{+}$, by the clauses of ordinal addition at $0$ and at a successor ([[def-ordinal-addition]]).


---

# Citation-precision audit — everything that cites `def-sum-over-a-finite-index-set`

## The target, as it actually stands on disk

`items/def-sum-over-a-finite-index-set.md` — definition — The sum $\\sum_{i \\in S} a_i$ over a finite index set, and its product form

#### Definition

Let $S$ be a finite set, $n := \lvert S\rvert$ ([[def-finite-cardinality]]), and
let $a : S \to \mathbb{R}$ or $a : S \to \mathbb{N}$, written $a_i$ for $a(i)$.
Choose a bijection $\varphi : n \to S$, which exists because $S \approx n$
([[def-equinumerous]]), and set

$$\sum_{i \in S} a_i := \sum_{k<n} a_{\varphi(k)}, \qquad \prod_{i \in S} a_i := \prod_{k<n} a_{\varphi(k)},$$

the right-hand sides being the iterated operations of [[def-finite-sum]] when the
values are real and of [[def-nat-finite-sum-and-product]] when they are natural.

**Independence of the enumeration, which is the content of the definition.** Let
$\varphi, \psi : n \to S$ be two bijections. Then $\pi := \varphi^{-1} \circ \psi$
is a bijection $n \to n$ ([[def-injection-surjection-bijection]]), and
$a_{\psi(k)} = a_{\varphi(\pi(k))}$ for every $k < n$. Applying
[[lem-finite-sum-permutation-invariance]] to the list $c_k := a_{\varphi(k)}$
gives

$$\sum_{k<n} a_{\psi(k)} = \sum_{k<n} c_{\pi(k)} = \sum_{k<n} c_k = \sum_{k<n} a_{\varphi(k)},$$

and identically for products. So the value does not depend on which bijection is
used, and $\sum_{i \in S} a_i$ is a single well-determined element.

**No choice principle is involved.** The definition does not select an
enumeration: it asserts that all enumerations give the same value, and that value
is what the notation names. Only one bijection is ever produced at a time, from a
set already known to be nonempty.

**Three clauses, recorded here because the page uses them constantly.**

**(a) The bridge to the old notation.** Taking $S = n$ and $\varphi = \mathrm{id}_n$,
which is legitimate since $\lvert n\rvert = n$, gives

$$\sum_{i \in n} a_i = \sum_{k<n} a_k, \qquad \prod_{i \in n} a_i = \prod_{k<n} a_k .$$

So the new notation **extends** the sum over an initial segment rather than
competing with it, and every law proved for the latter is available for the
former whenever the index set is a natural number.

**(b) Reindexing along a bijection.** If $h : T \to S$ is a bijection of finite
sets, then $\sum_{j \in T} a_{h(j)} = \sum_{i \in S} a_i$, and likewise for
products. Indeed $\lvert T\rvert = \lvert S\rvert = n$ by transport
([[def-finite-cardinality]]), and if $\varphi : n \to S$ is a bijection then
$h^{-1} \circ \varphi : n \to T$ is one, so
$\sum_{j \in T} a_{h(j)} = \sum_{k<n} a_{h(h^{-1}(\varphi(k)))} = \sum_{k<n} a_{\varphi(k)} = \sum_{i \in S} a_i$.

**(c) The empty index set and a constant summand.** $\lvert\varnothing\rvert = 0$,
so $\sum_{i \in \varnothing} a_i = 0$ and $\prod_{i \in \varnothing} a_i = 1$ by
the base clause of the recursion. And for a constant $c$, clause (a) together
with the constant clause of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]
in $\mathbb{N}$, or clause 2 of [[lem-finite-sum-laws]] in $\mathbb{R}$, gives

$$\sum_{i \in S} c = \lvert S\rvert \cdot c \quad (c \in \mathbb{N}), \qquad \sum_{i \in S} c = \iota(\lvert S\rvert)\cdot c \quad (c \in \mathbb{R}),$$

the second with $\iota$ written out because $\lvert S\rvert$ is a natural number
and not an element of $\mathbb{R}$ ([[def-canonical-natural]]).

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-finite-subset-net-for-unordered-real-summation` (published-backward, page nets-and-filters-examples)

Title: Finite partial sums of a real family form a net directed by inclusion

- [L1] A finite-index sum is independent of its enumeration ([[def-sum-over-a-finite-index-set]]).

### `thm-unordered-summability-of-real-families` (published-backward, page nets-and-filters-examples)

Title: Assuming countable choice, a real family is summable as a finite-subset net if and only if it has at most countable support and its nonzero terms are absolutely summable; its sum is independent of the enumeration

- [L5] A real series is absolutely convergent exactly when the series of absolute values converges; sums over finite index sets are invariant under their enumerations ([[def-absolute-and-conditional-convergence]], [[def-sum-over-a-finite-index-set]]).


---

# Citation-precision audit — everything that cites `def-finite-sum`

## The target, as it actually stands on disk

`items/def-finite-sum.md` — definition — Finite sums and finite products, by recursion

#### Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L8] Finite sums, their notation $\sum_{i<n}$, and their laws: additivity, scaling, monotonicity, and telescoping $\sum_{i<n}(t_{i+1} - t_i) = t_n - t_0$ for any sequence $(t_i)$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).


---

# Citation-precision audit — everything that cites `def-natural-numbers`

## The target, as it actually stands on disk

`items/def-natural-numbers.md` — definition — The natural numbers $\\mathbb{N}$ (von Neumann)

#### Definition

The set of **natural numbers** is the **smallest inductive set**
([[def-inductive-set]]),

$$\mathbb{N} = \omega := \bigcap\,\{\, I : I \text{ is inductive} \,\},$$

which exists and is itself inductive by [[lem-omega-smallest-inductive]] (the
Axiom of Infinity supplies one inductive set to intersect within, and Separation
makes the intersection a set). On $\mathbb{N}$ we take

$$0 := \varnothing, \qquad \sigma(n) := n \cup \{n\},$$

the distinguished element and the successor function. Thus
$0 = \varnothing$, $1 = \{0\}$, $2 = \{0, 1\}$, $3 = \{0, 1, 2\}$, and in general
$n = \{0, 1, \dots, n-1\}$ is the set of its predecessors.

## The 1 citing use(s), quoted verbatim from the citing items

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- Let $\sigma$ be the successor on $\mathbb{N}$ ([[def-natural-numbers]]). There are
- **Given:** By the recursion theorem ([[thm-recursion]]) applied to the set $\mathbb{R}$, the element $1$ and the function $u \mapsto -u$, the unique sequence $(s_k)$ of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$; applied to the set $\mathbb{N}$, the element $0$ and the function $i \mapsto \sigma(\sigma(i))$, the unique $e : \mathbb{N} \to \mathbb{N}$ with $e_0 = 0$ and $e_{\sigma(j)} = \sigma(\sigma(e_j))$; and applied to $\mathbb{N}$, the element $\sigma(0)$ and the same function, the unique $o : \mathbb{N} \to \mathbb{N}$ with $o_0 = \sigma(0)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j))$ ([[def-natural-numbers]], [[def-sequence]]).
