# Citation-precision audit — everything that cites `lem-sequential-closure-inside-closure`

## The target, as it actually stands on disk

`items/lem-sequential-closure-inside-closure.md` — lemma — The sequential closure is contained in the closure, continuity implies sequential continuity, and sequential limits need not be unique

#### Statement

Let $X$ and $Y$ be topological spaces, with convergence, sequential closure and
sequential continuity as in [[def-sequence-convergence-top]]. Then:

1. $A \subseteq \operatorname{seqcl}(A) \subseteq \overline{A}$ for every
   $A \subseteq X$.
2. If $f : X \to Y$ is continuous at $p \in X$ ([[def-continuous-map-top]]) then
   $f$ is sequentially continuous at $p$.
3. **Sequential limits need not be unique.** In the indiscrete topology on a set
   $X$ with at least two points ([[def-standard-topologies]]), every sequence in
   $X$ converges to every point of $X$.

Claim 3 is why this library never writes $\lim_k x_k$ for a sequence in a general
topological space: the symbol would not denote.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-frechet-urysohn-and-sequential-spaces` (published-backward, page nets-and-filters)

Title: Fréchet–Urysohn spaces and sequential spaces

- A topological space $X$ is **Fréchet–Urysohn** if, whenever $p\in\overline A$, there is a sequence in $A$ converging to $p$. Equivalently, $\operatorname{seqcl}(A)=\overline A$ for every $A\subseteq X$, since sequential closure is always contained in closure ([[lem-sequential-closure-inside-closure]]).

### `thm-first-countable-frechet-urysohn-sequential-hierarchy` (published-backward, page nets-and-filters)

Title: Assuming countable choice, every first countable space is Fréchet–Urysohn; in ZF every Fréchet–Urysohn space is sequential

- [L2] $A\subseteq\operatorname{seqcl}(A)\subseteq\overline A$ for every $A$ ([[lem-sequential-closure-inside-closure]]).
