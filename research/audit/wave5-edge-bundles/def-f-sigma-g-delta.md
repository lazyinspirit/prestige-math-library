# Citation-precision audit — everything that cites `def-f-sigma-g-delta`

## The target, as it actually stands on disk

`items/def-f-sigma-g-delta.md` — definition — $F_\\sigma$ and $G_\\delta$ subsets of $\\mathbb{R}$

#### Definition

Let $A \subseteq \mathbb{R}$, with open and closed sets as in
[[def-open-and-closed-in-r]].

- $A$ is an **$F_\sigma$ set** when there is a sequence $(F_n)_{n \in \mathbb{N}}$
  of closed subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} F_n .$$
- $A$ is a **$G_\delta$ set** when there is a sequence $(V_n)_{n \in \mathbb{N}}$
  of open subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcap_{n \in \mathbb{N}} V_n .$$

The letters are the traditional ones: $F$ for *fermé* with $\sigma$ for *somme*,
$G$ for *Gebiet* with $\delta$ for *Durchschnitt*.

**The two classes are exchanged by complementation.** $A$ is $F_\sigma$ if and
only if $\mathbb{R} \setminus A$ is $G_\delta$. If $A = \bigcup_n F_n$ with each
$F_n$ closed, then $\mathbb{R} \setminus A = \bigcap_n (\mathbb{R} \setminus F_n)$
by De Morgan, and each $\mathbb{R} \setminus F_n$ is open by the definition of
closedness ([[def-open-and-closed-in-r]]); the converse is the same computation
read backwards, using that the complement of an open set is closed, which is
again [[def-open-and-closed-in-r]].

**Every closed set is $F_\sigma$ and every open set is $G_\delta$**, by the
constant sequence $F_n := A$, respectively $V_n := A$. As with
[[def-nowhere-dense-meager]], an at most countable family ([[def-countable]]) may
always be presented as a sequence: a finite list $F_0, \dots, F_m$ of closed sets
is extended by $F_n := F_m$ for $n > m$, and a finite list of open sets likewise,
so nothing is lost by indexing over $\mathbb{N}$.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- same name would be a defect.** [[def-f-sigma-g-delta]] defines $F_\sigma$ and
- sense of [[def-f-sigma-g-delta]]; and likewise for $F_\sigma$. **There is one
- with $\delta$ for *Durchschnitt*, as [[def-f-sigma-g-delta]] records.

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- $G_\delta$ subset of $\mathbb{R}$ in the sense of [[def-f-sigma-g-delta]], the
- [L2] The topological notions of $G_\delta$ and $F_\sigma$ for $\mathbb{R}$ with its usual topology coincide with those of [[def-f-sigma-g-delta]], the two collections of open subsets of $\mathbb{R}$ being one collection ([[def-g-delta-and-f-sigma-in-a-topological-space]], [[def-open-and-closed-in-r]]).
