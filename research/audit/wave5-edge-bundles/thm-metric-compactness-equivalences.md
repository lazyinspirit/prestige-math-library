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
