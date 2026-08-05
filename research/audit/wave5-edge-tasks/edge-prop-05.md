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

# Citation-precision audit — everything that cites `thm-recursion`

## The target, as it actually stands on disk

`items/thm-recursion.md` — theorem — The recursion theorem

#### Statement

Let $(N,0,\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

## The 8 citing use(s), quoted verbatim from the citing items

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- **Given:** The set $A := \{u \in \mathbb{R} : u \ge 1\}$, the element $1 \in A$, and the function $f : A \to A$ with $f(u) = u + 1/u$, which lands in $A$ because $u \ge 1 > 0$ gives $1/u > 0$ and hence $f(u) > u \ge 1$; by the recursion theorem ([[thm-recursion]]) the unique $g : \mathbb{N} \to A$ with $g_0 = 1$ and $g_{j+1} = f(g_j)$; and the gaps $d_j := g_{j+1} - g_j$.
- [L1] Recursion theorem ([[thm-recursion]]) and induction principle ([[thm-induction-principle]]).

### `ex-arens-space-is-sequential-not-frechet-urysohn` (published-backward, page nets-and-filters-examples)

Title: Arens space $S_2$ is sequential but not Fréchet–Urysohn

- [L2] Finite subsets of $\mathbb N$ have maxima, nonempty subsets have least members, and recursion produces sequences from uniquely specified successive terms ([[lem-finite-set-has-max]], [[thm-well-ordering-principle]], [[thm-recursion]]).

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- **Given:** The set $A := \{u \in \mathbb{R} : u > 0\}$, the element $2 \in A$, and the function $f : A \to A$ with $f(u) = (u + 2/u)/2$, which does land in $A$ because $u > 0$ gives $2/u > 0$ and hence $f(u) > 0$; by the recursion theorem ([[thm-recursion]]) the unique $g : \mathbb{N} \to A$ with $g_0 = 2$ and $g_{j+1} = f(g_j)$. We write $x_k := g_{k-1}$ for $k \ge 1$, so $x_1 = 2$ and $x_{k+1} = f(x_k)$.
- [L1] Recursion theorem ([[thm-recursion]]) and the induction principle ([[thm-induction-principle]]).

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- **Given:** A real $a$, and by the recursion theorem ([[thm-recursion]]) applied to $\mathbb{R}$, the element $a$ and the function $f(u) = (u+1)/3$, the unique sequence $(x_k)$ of reals with $x_0 = a$ and $x_{k+1} = f(x_k)$ ([[def-sequence]]); the constant $c := 1/3$.
- [L1] Recursion theorem ([[thm-recursion]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- **Given:** The set $A := \{u \in \mathbb{R} : 0 \le u < 2\}$, the element $1 \in A$, and the function $f : A \to A$ with $f(u) = \sqrt{2+u}$; by the recursion theorem ([[thm-recursion]]) the unique $g : \mathbb{N} \to A$ with $g_0 = 1$ and $g_{j+1} = f(g_j)$. We write $x_k := g_{k-1}$ for $k \ge 1$, so $x_1 = 1$ and $x_{k+1} = \sqrt{2 + x_k}$.
- [L1] Recursion theorem ([[thm-recursion]]).

### `ex-sequential-fan-is-frechet-urysohn-not-first-countable` (published-backward, page nets-and-filters-examples)

Title: The sequential fan is Fréchet–Urysohn and not first countable

- [L1] Every nonempty finite subset of $\mathbb N$ has a maximum, every nonempty subset of $\mathbb N$ has a least member, and recursion defines sequences from uniquely specified successive terms ([[lem-finite-set-has-max]], [[thm-well-ordering-principle]], [[thm-recursion]]).

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- **Given:** By the recursion theorem ([[thm-recursion]]) applied to the set $\mathbb{R}$, the element $1$ and the function $u \mapsto -u$, the unique sequence $(s_k)$ of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$; applied to the set $\mathbb{N}$, the element $0$ and the function $i \mapsto \sigma(\sigma(i))$, the unique $e : \mathbb{N} \to \mathbb{N}$ with $e_0 = 0$ and $e_{\sigma(j)} = \sigma(\sigma(e_j))$; and applied to $\mathbb{N}$, the element $\sigma(0)$ and the same function, the unique $o : \mathbb{N} \to \mathbb{N}$ with $o_0 = \sigma(0)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j))$ ([[def-natural-numbers]], [[def-sequence]]).
- [L1] Recursion theorem, including its uniqueness clause ([[thm-recursion]]).

### `lem-peak-monotone-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

- [L1] Recursion theorem: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g_0 = a$ and $g_{\sigma(j)} = f(g_j)$ ([[thm-recursion]]).
- [[thm-recursion]] then produces the index map. This is why the lemma, and with


---

# Citation-precision audit — everything that cites `lem-power-monotone`

## The target, as it actually stands on disk

`items/lem-power-monotone.md` — lemma — Monotonicity of $x \\mapsto x^n$ and of $n \\mapsto a^n$

#### Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]].

1. **Signs.** If $a \ge 0$ then $a^n \ge 0$, and if $a > 0$ then $a^n > 0$.
2. **Strict monotonicity in the base.** If $0 \le a < b$ and $n \ge 1$ then $a^n < b^n$. Consequently, for $a, b \ge 0$ and $n \ge 1$: $a < b \iff a^n < b^n$ and $a \le b \iff a^n \le b^n$, and $x \mapsto x^n$ is injective on $\{x \in \mathbb{R} : x \ge 0\}$.
3. **Comparison with the base.** If $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; if $a > 1$ and $n \ge 1$ then $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1$.
4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.

## The 8 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L4] Powers and order: for $a, b \ge 0$, $a \le b$ exactly when $a^2 \le b^2$, and $a < b$ exactly when $a^2 < b^2$ ([[lem-power-monotone]]); and $(1/t)^n = 1/t^n = t^{-n}$ for $t \ne 0$ ([[lem-power-laws]]).

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- [L3] Powers and order: for $a, b \ge 0$ and $n \ge 1$, $a < b$ exactly when $a^n < b^n$ ([[lem-power-monotone]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L3] Powers: $(u + v)^2 = u^2 + 2uv + v^2$ and $u \cdot (1/u) = 1$, so $(u + 1/u)^2 = u^2 + 2 + 1/u^2$; and for $a, b \ge 0$, $a < b$ exactly when $a^2 < b^2$ ([[def-integer-power]], [[lem-power-monotone]]).

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L3] Powers and order: for $a, b \ge 0$, $a < b$ exactly when $a^2 < b^2$ ([[lem-power-monotone]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- [L3] Powers and order: for $a, b \ge 0$, $a < b$ exactly when $a^2 < b^2$, and $a \le b$ exactly when $a^2 \le b^2$ ([[lem-power-monotone]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [L2] Powers and order: for $a, b \ge 0$ and $n \ge 1$, $a < b$ exactly when $a^n < b^n$, and $a \le b$ exactly when $a^n \le b^n$; and $a \ge 0$ gives $a^n \ge 0$ ([[lem-power-monotone]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L5] Powers and order: $a \ge 0$ gives $a^n \ge 0$ and $a > 0$ gives $a^n > 0$; $1^n = 1$ for every $n$ ([[lem-power-monotone]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L4] Powers and order: $a \ge 0$ gives $a^n \ge 0$; $1^n = 1$ for every $n$ ([[lem-power-monotone]]).
- [L10] Factorisation: $1 - c^{\,n} = (1 - c)\sum_{i<n} c^{\,i}$, the case $b = 1$, $a = c$ of $b^n - a^n = (b-a)\sum_{i=0}^{n-1} a^i b^{\,n-1-i}$ together with $1^m = 1$; at $n = 0$ both sides are $0$ ([[lem-power-difference-factorisation]], [[lem-power-monotone]]).


---

# Citation-precision audit — everything that cites `lem-ordinal-trichotomy`

## The target, as it actually stands on disk

`items/lem-ordinal-trichotomy.md` — lemma — Trichotomy and well-ordering of the ordinals

#### Statement

For ordinals $\alpha$ and $\beta$ ([[def-ordinal]]), **exactly one** of

$$\alpha \in \beta, \qquad \alpha = \beta, \qquad \beta \in \alpha$$

holds. Moreover every nonempty **set** $A$ of ordinals has an $\in$-least
element, and consequently $A$ ordered by
$\alpha \le \beta :\iff \alpha \subseteq \beta$ is a well-order
([[def-well-order]]) whose strict part is membership.

So the ordinals are linearly ordered by $\in$, every set of them is well
ordered, and [[thm-transfinite-induction]] is available on any such set. No
choice principle is used.

## The 8 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L2] For ordinals exactly one of $\xi < \eta$, $\xi = \eta$, $\eta < \xi$ holds, and every nonempty set of ordinals has a least element ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- *(B2), intersections.* By trichotomy of the ordinals ([[lem-ordinal-trichotomy]])
- of ZF ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- [L6] For ordinals exactly one of $\xi < \eta$, $\xi = \eta$, $\eta < \xi$ holds; $\alpha^{+}$ is an ordinal, and $\alpha^{+} = \{\, \xi : \xi \le \alpha \,\}$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

### `lem-character-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $\\chi(x,X)$ and $\\chi(X)$ are well-defined cardinals

- [L2] Every nonempty set of ordinals, and hence every nonempty set of cardinals, has a least member ([[lem-ordinal-trichotomy]]).

### `lem-density-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $d(X)$ is a well-defined cardinal

- [L1] Every nonempty set of ordinals, and hence every nonempty set of cardinals, has a least member; this is a theorem of ZF ([[lem-ordinal-trichotomy]]).

### `lem-lindelof-degree-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $L(X)$ is a well-defined cardinal

- [L1] Every nonempty set of ordinals, and hence every nonempty set of cardinals, has a least member; this is a theorem of ZF ([[lem-ordinal-trichotomy]]).

### `lem-ordinal-order-topology-is-t3` (published-backward, page separation-axioms)

Title: Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular

- [L1] For ordinals exactly one of $\zeta < \eta$, $\zeta = \eta$, $\eta < \zeta$ holds, and $<$ is transitive; every element of an ordinal is an ordinal ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).
- - **No choice principle is used**, every ingredient being a theorem of ZF ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

### `lem-weight-is-well-defined` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $w(X)$ is a well-defined cardinal

- [L1] Every nonempty set of ordinals, and hence every nonempty set of cardinals, has a least member; this is a theorem of ZF ([[lem-ordinal-trichotomy]]).


---

# Citation-precision audit — everything that cites `thm-countable-union-of-countable`

## The target, as it actually stands on disk

`items/thm-countable-union-of-countable.md` — theorem — Countable unions of at most countable sets, assuming $\\mathrm{AC}_\\omega$

#### Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(A_n)_{n \in \mathbb{N}}$ be a family of at most countable sets
([[def-countable]]) indexed by $\mathbb{N}$. Then

$$U = \bigcup_{n \in \mathbb{N}} A_n$$

is at most countable.

**The hypothesis $\mathrm{AC}_\omega$ is not decoration and it is not removable.**
It is spent at exactly one step, step 3.1 below, where one surjection
$\mathbb{N} \to A_n$ is selected for every $n$ at once. Each $A_n$ has such
surjections, in general many of them, and the countability assumption provides no
rule for singling one out. Without some choice principle the theorem is not
available at all: ZF alone does not prove it, **conditionally on the consistency
of ZF**, as recorded among this page's false statements and discussed in the
remarks below, where that item is named and linked. The
consistency hypothesis is not a formality and cannot be dropped: the separation
rests on an external independence result that this library quotes rather than
proves, and it cannot be stated without it.

## The 8 citing use(s), quoted verbatim from the citing items

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- [L3] A union of two at most countable sets is at most countable: this is the two-set instance of [[thm-countable-union-of-countable]] padded with copies of $\varnothing$, and it needs no choice principle, as [[def-standard-topologies]] records.

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- at step 5.1, through [[thm-countable-union-of-countable]]
- [L8] Assuming the Axiom of Countable Choice, a union over $\mathbb{N}$ of at most countable sets is at most countable; a subset of an at most countable set is at most countable; and $\mathbb{R}$ is uncountable ([[thm-countable-union-of-countable]], [[def-countable-choice]], [[lem-subset-of-countable]], [[thm-r-uncountable]], [[def-countable]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- [L2] A union of two at most countable sets is at most countable; this is the two-set instance of [[thm-countable-union-of-countable]], padded with copies of $\varnothing$, and it needs no choice principle, exactly as [[def-standard-topologies]] records for the cocountable topology itself.

### `lem-uncountable-delta-system-for-finite-sets` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, the uncountable $\\Delta$-system lemma for finite sets

- [L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable]]).

### `thm-countable-products-of-first-countable-spaces` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a countable product of first countable spaces is first countable

- [L1] A product of two at most countable sets is at most countable, and under countable choice a countable union of at most countable sets is at most countable ([[thm-product-of-countable]], [[thm-countable-union-of-countable]]).

### `thm-countable-products-of-second-countable-spaces` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a countable product of second countable spaces is second countable

- [L1] A product of two at most countable sets is at most countable, and under countable choice a countable union of at most countable sets is at most countable ([[thm-product-of-countable]], [[thm-countable-union-of-countable]]).

### `thm-metric-countability-equivalences` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, a metrizable space is second countable if and only if it is separable if and only if it is Lindelöf

- [L2] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

### `thm-unordered-summability-of-real-families` (published-backward, page nets-and-filters-examples)

Title: Assuming countable choice, a real family is summable as a finite-subset net if and only if it has at most countable support and its nonzero terms are absolutely summable; its sum is independent of the enumeration

- [L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]]).
