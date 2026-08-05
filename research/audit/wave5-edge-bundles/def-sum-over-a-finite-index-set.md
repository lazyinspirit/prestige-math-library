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
