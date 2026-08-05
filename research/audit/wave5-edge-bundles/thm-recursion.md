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
