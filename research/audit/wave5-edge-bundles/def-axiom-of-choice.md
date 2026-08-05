# Citation-precision audit — everything that cites `def-axiom-of-choice`

## The target, as it actually stands on disk

`items/def-axiom-of-choice.md` — definition — The Axiom of Choice

#### Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation, immediate from the definition of the Cartesian
product, is that a product of nonempty sets is nonempty: if $X_i \ne \emptyset$
for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.

## The 10 citing use(s), quoted verbatim from the citing items

### `def-lindelof-degree-and-cellularity` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, Lindelöf degree $L(X)$ and cellularity $c(X)$ as raw cardinal functions

- Assume the Axiom of Choice ([[def-axiom-of-choice]]). The **Lindelöf degree** $L(X)$ is the least cardinal $\kappa$ such that every open cover of $X$ has a subcover of cardinality at most $\kappa$. The **cellularity** $c(X)$ is the cardinal supremum of the cardinalities of pairwise-disjoint families of nonempty open subsets of $X$.

### `def-weight-density-and-character` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, weight $w(X)$, density $d(X)$, local character $\\chi(x,X)$, and character $\\chi(X)$ as raw cardinal minima and a supremum

- Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $X$ be a topological space. The **weight** $w(X)$ is the least cardinality of a basis for $X$, and the **density** $d(X)$ is the least cardinality of a dense subset of $X$ ([[def-topology-basis-subbasis]], [[def-dense-top]], [[def-cardinal]]).

### `ex-cardinal-functions-of-the-lower-limit-line` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `lem-large-cantor-cubes-are-not-separable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, if $|I|>2^{\\aleph_0}$, then the Cantor cube $2^I$ is not separable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `lem-uncountable-delta-system-for-finite-sets` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, the uncountable $\\Delta$-system lemma for finite sets

- [A1] The Axiom of Choice implies countable choice and Zorn's lemma ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-zorn]]).

### `prop-continuous-image-density-and-lindelof-degree` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, a continuous surjection does not increase density or Lindelöf degree

- **Given:** The Axiom of Choice and a continuous surjection $f:X\to Y$ ([[def-axiom-of-choice]]).

### `rem-tychonoff-choice-strengths` (published-backward, page nets-and-filters)

Title: The compact Hausdorff product theorem uses the ultrafilter lemma, while the published arbitrary compact product theorem assumes the full Axiom of Choice

- The proof of [[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]] spends the ultrafilter lemma at the universal-subnet step. The published [[thm-tychonoff]] asserts compactness for arbitrary compact factors under the full Axiom of Choice ([[def-axiom-of-choice]]). These are distinct stated hypotheses; this page makes no claim about their exact relative strength.

### `thm-basic-cardinal-function-inequalities` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, $c(X)\\le d(X)\\le w(X)$ and $\\chi(X),L(X)\\le w(X)$

- [A1] The Axiom of Choice chooses one member from each nonempty set in a family ([[def-axiom-of-choice]]).

### `thm-cantor-cubes-are-ccc` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every Cantor cube $2^I$ satisfies ccc

- [A1] Choice selects from an arbitrary family of nonempty sets ([[def-axiom-of-choice]]).

### `thm-metric-weight-equals-density` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every metrizable space has $w(X)=d(X)$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.
