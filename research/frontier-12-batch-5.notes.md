# Frontier 12, batch 5 — Beta scaffold notes

## Batch result

The machine scaffold contains 82 items across four page objects: 37 on the finite-probability foundations A page, 11 on its B companion, 28 on the probabilistic-method A page, and 6 on its B companion. In aggregate the A pages have 17 definitions, 15 lemmas, 1 proposition, 28 theorems, and 4 corollaries; the B pages have 11 examples, 5 counterexamples, and 1 false statement. No B-page item is a dependency outside its own page; the one local B-to-B edge remains earlier on the foundations B page. The proof-contract artifact contains 65 contracts, one for every non-definition scaffold item, with `scope` ordered foundations A/B and then method A/B.

Decision D1 is applied at the approved cut after `cor-relative-variance-positive-probability-bound`. Finite probability, expectation, independence, variance, Markov, Chebyshev, Cauchy--Schwarz, and the second-moment inequality form the 37-item foundations page; the existence principles, alteration, random graphs, Chernoff, the Local Lemma, and applications form the 28-item method page. No result was dropped and every previously scaffolded item id is unchanged.

## Applied split and order plan

1. Order 220.2: `finite-probability-spaces-and-random-variables`, title **Finite Probability Spaces and Random Variables**, A items 1--37. Its sole `requires` entry is `the-logarithm-and-general-powers`, whose closure supplies the real, exponential, finite-sum, and set foundations used here.
2. Order 220.4: `finite-probability-spaces-and-random-variables-examples`, its B companion, B items 1--11: loaded die, Bayes urns, pairwise-not-mutual independence, equal probabilities without independence, uncorrelated without independence, dependent product expectation, the false independence requirement for linearity, strictness of the union bound, Chebyshev sharpness, Markov sharpness, and failure of Markov's conclusion without nonnegativity. It requires the foundations A page only.
3. Order 221: `finite-probability-and-the-probabilistic-method` retains its id, title, and order, with A items 38--65. Its `requires` entries are `finite-probability-spaces-and-random-variables`, `extremal-graph-theory`, and `congruences-and-the-chinese-remainder-theorem`; the last is the exact published route used by the finite strict sum-free proof.
4. Order 222: `finite-probability-and-the-probabilistic-method-examples` retains its id and order, with B items 12--17: the triangle count, second-moment random-subset calculation, Ramsey calculation, Local-Lemma parameter check, high-girth/high-chromatic ledger, and the threshold-one counterexample. It requires the method A page only.

This differs from my proposal because orders 223/224 are occupied by `linear-algebra-methods-in-combinatorics` and its companion; shifting them would cascade through the combinatorics track. The free fractional orders 220.2/220.4 place the foundations pair immediately before the method pair, preserve the method page's order-221 id for its three planned downstream consumers, and require no renumbering or downstream edits. The coverage entry is divided between the two A ids: the method half retains the three probabilistic-method lecture-note treatments, while the foundations half now adds two genuine probability-textbook treatments to those three corroborating prefaces. The proof-contract `scope` is divided at the same A and B cuts.

### Seam check

The split creates no forward dependency. No item on orders 220.2 or 220.4 depends on an item on orders 221 or 222. The method A page has 41 direct dependency edges back to foundations A, all licensed by its declared `requires`; method B has 11 direct edges to method A and 10 to foundations A, both inside its prerequisite closure. Foundations B has 34 direct edges to foundations A, and its sole local B-to-B edge points to an earlier item on the same B page. No item depends on any of the three new boundary witnesses. No item needed to move and no dependency citation was weakened.

### Applyable prose-scaffold amendments

In `research/plan-combinatorics-and-categories.md`, replace the exact block beginning

> `## CB-12. Finite Probability and the Probabilistic Method  (order 203, combinatorics)`

and ending with the `Forward references: NONE.` immediately before `## CB-13.` by two sections, in this order:

1. `## CB-12a. Finite Probability Spaces and Random Variables (order 220.2, combinatorics)`, with `requires: the-logarithm-and-general-powers (177)`, the first proposed summary below, DEFS equal to foundation definitions 1, 6, 10, 13, 14, 16, 17, 21, 23, 26, and 31, THMS equal to foundation proof-bearing items 2--37, and B/FS/CEX equal to B items 1--11. End with `Forward references: NONE.`
2. `## CB-12b. Finite Probability and the Probabilistic Method (order 221, combinatorics)`, with `requires: finite-probability-spaces-and-random-variables (220.2), extremal-graph-theory (219), congruences-and-the-chinese-remainder-theorem (30)`, the second proposed summary below, DEFS equal to method definitions 42, 44, 48, 56, 58, and 60, THMS equal to method proof-bearing items 38--65, and B/CEX equal to B items 12--17. End with `Forward references: NONE.`

This replacement removes the stale instruction that Chernoff may be dropped: the exponential machinery is published and the bound is scaffolded. It also replaces the old claim that the Ramsey lower bound should be a second A-page theorem; it is now a B-page derivation agreeing with the already-published `thm-diagonal-ramsey-counting-lower-bound`. It adds the previously absent conditional-probability/Bayes machinery, the pairwise-versus-mutual distinction, product spaces, indicator variables, covariance algebra, deletion/alteration, hypergraph colouring, MAX-CUT, property $S_k$, dominating sets, and sum-free subsets.

In the summary table of the same file, replace the exact old row

> `| 203/204 | finite-probability-and-the-probabilistic-method | Finite Probability and the Probabilistic Method | combinatorics | 23 / 13 |`

(with the id formatted in backticks on disk) by the two rows `220.2/220.4 | finite-probability-spaces-and-random-variables | Finite Probability Spaces and Random Variables | combinatorics | 37 / 11` and `221/222 | finite-probability-and-the-probabilistic-method | Finite Probability and the Probabilistic Method | combinatorics | 28 / 6`, preserving the table's backtick formatting.

## Proposed two-paragraph A-page summaries

### `finite-probability-spaces-and-random-variables`

A finite probability space assigns nonnegative weights summing to one to a finite outcome set, with every subset available as an event. This page develops finite additivity, inclusion--exclusion for two events, the union bound, conditional probability, the chain rule, total probability, and Bayes' theorem. It distinguishes pairwise from mutual independence, records stability under subfamilies and complements, and constructs finite product spaces whose coordinate events are mutually independent.

Real random variables on a finite space then admit expectation by outcome or distribution, and linearity needs no independence assumption. Indicators connect event intersections to products, while independent variables permit factorisation of product expectations. Variance and covariance lead to the variance-of-a-sum formula and its pairwise-independent specialization, followed by Bernoulli and binomial moments, Markov and Chebyshev inequalities, finite Cauchy--Schwarz, and the second-moment and relative-variance positive-probability bounds.

### `finite-probability-and-the-probabilistic-method`

The probabilistic method converts positive probability and expectation bounds into deterministic existence. This page formalizes the first-moment principle and deletion/alteration, defines the finite Erdős--Rényi model, and develops exponential moments through moment generating functions, a random-sign estimate, and a Chernoff tail bound. A dependency digraph then supports a full finite asymmetric Lovász Local Lemma and its symmetric form.

The machinery is harvested through classical applications rather than left abstract: first-moment and Local-Lemma hypergraph two-colouring, MAX-CUT, Szele's tournament Hamilton-path count, tournaments with property $S_k$, small dominating sets, Erdős's sum-free subset theorem, and graphs with arbitrarily high girth and chromatic number. The applications expose exact constants and strict inequalities and keep the published Ramsey lower bound as a worked bridge rather than duplicating it as a new theorem.

## Canonical-coverage harvest

The harvest contains 200 source or canonical headings: 176 `included`, 8 `inline`, 8 `already-published`, and 8 `out-of-scope`; none is `deferred`. Thus 192 headings are retained locally, absorbed into proofs, or supplied by an opened published item. The foundations entry has 116 rows and the unchanged method entry has 84. Counts are source-heading dispositions, so independent treatments of the same result are intentionally counted more than once.

### Fix round 2 — foundations sourcing correction

Alpha's stage-0 finding was reproduced mechanically: before this correction, the 37-item foundations manifest had exactly 14 ids absent from the union of source-content and canonical rows. The page and proof-contract artifacts are unchanged because their mathematics, ids, ordering, strategies, and dependency seam were accepted. The coverage and source ledger now supply the following item-by-item routes:

| Previously unsourced item | Corrected route |
|---|---|
| `lem-finite-probability-basic-laws` | Grinstead--Snell Theorem 1.1 and Pishro--Nik §§1.3.2--1.3.3. |
| `thm-finite-additivity-of-probability` | Grinstead--Snell Theorem 1.2 and Pishro--Nik §1.3.2. |
| `cor-two-event-inclusion-exclusion` | Grinstead--Snell Theorem 1.4 and Pishro--Nik §1.3.3. |
| `thm-conditional-probability-multiplication-and-chain-rules` | Grinstead--Snell equation (4.2) for multiplication and Pishro--Nik §1.4.0 for the finite chain rule. |
| `thm-finite-law-of-total-probability` | Grinstead--Snell Theorem 1.3, Corollary 1.1, and equation (4.3), independently Pishro--Nik §1.4.2. |
| `thm-finite-bayes-theorem` | Grinstead--Snell's Bayes' Formula block and Pishro--Nik §1.4.3. |
| `lem-mutual-independence-under-subfamilies-and-complements` | Canonical finite consequence of the harvested mutual-independence product identities, with the complement step proved by indicator expansion. |
| `def-product-of-finite-probability-spaces` | Grinstead--Snell Definitions 4.3--4.5 and its product-distribution construction, plus a canonical row for the arbitrary-factor finite generalization. |
| `thm-product-probability-has-independent-coordinate-events` | Grinstead--Snell's coordinate-variable conclusion after Definition 4.5, plus the canonical arbitrary-factor cylinder-event form. |
| `thm-event-independence-and-indicator-independence` | Canonical four-atom comparison, grounded in Pishro--Nik's event-independence and indicator/Bernoulli blocks. |
| `thm-covariance-bilinearity-and-symmetry` | Pishro--Nik §5.3.1 covariance lemma, including symmetry and full bilinearity. |
| `def-bernoulli-and-binomial-random-variables` | Grinstead--Snell's Bernoulli-trials/binomial paragraph and Pishro--Nik §3.1.5 definitions and sum-of-Bernoulli lemma. |
| `lem-cauchy-schwarz-for-finite-random-variables` | Pishro--Nik §6.2.4, which states and proves Cauchy--Schwarz for random variables. |
| `thm-finite-second-moment-lower-bound` | Canonical one-line specialization of Pishro--Nik §6.2.4 to $X=X\mathbf 1_{\{X>0\}}$. |

### Fix round 3 — boundary witnesses on page 220.4

Only the foundations B page changes. The A page at 220.2 and both pages at 221/222 remain unchanged, and the sourcing correction above remains discharged. Three terminal witnesses are appended after the accepted eight B items:

| New item | Source and exact boundary |
|---|---|
| `ex-chebyshev-inequality-is-sharp` | Grinstead--Snell §8.1, immediately after Example 8.1 (printed p. 306; PDF p. 314), gives the distribution on $\{-\varepsilon,+\varepsilon\}$ with weights $1/2,1/2$. Its mean is $0$, its variance is $\varepsilon^2$, and the weak deviation event at threshold $\varepsilon>0$ has probability $1$. |
| `ex-markov-inequality-is-sharp` | Pishro--Nik §6.2.2 supplies Markov's exact statement. The canonical witness takes $X=a$ on an event of probability $p$ and $X=0$ off it, for $a>0$ and $p\in[0,1]$, giving $\mathbb P(X\ge a)=p=\mathbb E[X]/a$. |
| `cex-markov-inequality-fails-without-nonnegativity` | Pishro--Nik §6.2.2 explicitly assumes that $X$ is nonnegative. On a fair two-point space, $X\in\{1,-3\}$ has mean $-1$, while at $a=1$ its upper-tail probability is $1/2$, contradicting the conclusion if the hypothesis is removed. |

All three items have proof contracts and coverage rows. The two Markov constructions are canonical rows tied only to Pishro--Nik §6.2.2; Grinstead--Snell §8.1 is cited only for the Chebyshev item. No scaffold item lists any of the three new ids as a dependency, so page 220.4 remains a leaf.

The eight declines expected to receive the closest Alpha scrutiny are:

- Matoušek--Vondrák's Fano-plane definition and the calculation $m(3)\le7$: these are a named incidence-design example and its special obstruction, not missing probability machinery; both would naturally live on a design-theory/examples treatment.
- Matoušek--Vondrák's algorithmic-LLL remark: the result requires an algorithmic resampling framework absent from the selected finite existence proof and belongs to algorithms, not a lemma that could merely be inserted here.
- Matoušek--Vondrák's discrepancy proposition: it opens a separate discrepancy-theory development and is not used by any of the 27 downstream probability consumers.
- Zhao's and Bucić's fixed-point calculations for a random permutation: this duplicate worked example was declined independently in both sources because the B page already tests each new logical seam and the calculation introduces no new method beyond indicators and linearity.
- Bucić's extremal function $f(k)$ refinement for property $S_k$: the selected text poses sharper extremal behaviour beyond the proved existence theorem; the scaffold retains the exact theorem $n\ge3k^2 2^k$.
- Bucić's discussion of tightness and refinements for sum-free subsets: it concerns sharper additive-combinatorial structure beyond the proved universal $>n/3$ result and is not a missing prerequisite for that proof.

## Source ledger and exact ranges read

### Grinstead--Snell

C. M. Grinstead and J. L. Snell, *Introduction to Probability*, second edition, Chance Project version dated 4 July 2006, <https://math.dartmouth.edu/~prob/prob/prob.pdf>. I read the named statement blocks declared in coverage from §1.2 (printed pp. 18--24), §4.1 (pp. 133--147), §6.1 (pp. 225--234), §6.2 (pp. 257--260), and §8.1 through the Chebyshev sharpness paragraph immediately after Example 8.1 (printed pp. 305--306; sharpness at PDF p. 314). These blocks independently develop the finite outcome-weight model, probability laws, conditioning, independence, product distributions, Bernoulli/binomial variables, expectation, variance, Chebyshev, and the exact two-point equality witness. The book's preface expressly describes a thorough probability treatment, and this Chance Project version is freely redistributable under the GNU Free Documentation License.

### Pishro--Nik

H. Pishro--Nik, *Introduction to Probability, Statistics, and Random Processes*, Kappa Research LLC, 2014, <https://www.probabilitycourse.com/>. I read the named statement blocks declared in coverage from online §§1.3.2--1.3.3, 1.4.0--1.4.3, 3.1.5, 3.2.2, 3.2.4, 5.3.1, 6.1.1, 6.2.1--6.2.2, and 6.2.4. This second open-access, peer-reviewed textbook independently supplies the axioms and basic laws, chain rule, total probability, Bayes, Bernoulli/binomial variables, expectation and variance, covariance bilinearity, Markov, Chebyshev, and Cauchy--Schwarz. Section 6.2.2 supplies the exact Markov statement and its nonnegativity hypothesis; the equality and hypothesis-boundary witnesses are separately identified as canonical rows rather than attributed to the source. Worked examples and solved-problem pages are excluded from the declared locator unless a coverage row names one explicitly.

### Matoušek--Vondrák

J. Matoušek and J. Vondrák, *The Probabilistic Method*, revised March 2008, <https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf>. I read §1.1 (PDF pp. 6--9), §§2.1--2.2 (pp. 11--14), Chapter 3 (pp. 18--20), the opening of Chapter 4 through §4.2 (pp. 21--23), §5.1 (pp. 24--25), §§6.1--6.2 (pp. 33--36), and §7.1 (pp. 40--42). These ranges supply the main independent probabilistic-method treatment and a compact probability preface: spaces, variables, independence, expectation, indicators, union bound, Ramsey and hypergraph applications, Szele, MAX-CUT, Markov, high girth/high chromatic number, variance/Chebyshev, the asymmetric and symmetric Local Lemma, and random-sign Chernoff. As §1.1 itself warns, that preface is not a substitute for a probability course; it is now corroborative rather than the foundations page's principal treatment.

### Zhao--Lin

Y. Zhao, notes by A. Lin, *MIT 18.218 Probabilistic Method in Combinatorics*, Spring 2019, <https://yufeizhao.com/pm/sp19/pmnotes.pdf>. I read §§2.1--2.2 (PDF pp. 11--12), the Chapter 3 opening and §§3.1 and 3.3 (pp. 24--27), §4.1 (pp. 29--30), §5.1 through Corollary 5.3 but not Fact 5.4 (pp. 41--42), and §6.1 through Theorem 6.3 plus §6.3 (pp. 45--49). These ranges independently support linearity and indicators, variance/second moment, Chernoff, the Local Lemma, dominating sets, sum-free sets, and high-girth/high-chromatic graphs.

### Bucić

M. Bucić, *Probabilistic Method* lecture notes, 30 January 2026, <https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf>. I read §1.1 from Theorem 1.5 through Remark 1.6 and §1.2 (PDF pp. 5--7), the Chapter 2 introduction and §§2.1--2.3 (pp. 9--11), the Chapter 4 opening and §4.1 (pp. 16--18), and Appendix A through Lemma A.15 (pp. 57--61). These ranges independently support property $S_k$, MAX-CUT, Szele, sum-free subsets, high-girth/high-chromatic graphs, and the finite probability/expectation/variance/inequality toolkit.

The three probabilistic-method files are university- or author-hosted lecture notes. I found no broad reuse licence in the selected material and therefore treat those three as reference-only. Grinstead--Snell is the GFDL open textbook requested in the dispatch, and Pishro--Nik is an open-access textbook; nevertheless, all scaffold titles and strategies remain paraphrases and step 5 must continue to write independently. The published dependency files retain their own source records and licences.

## Exact statement and constant ledger

- **Ramsey.** The new B item applies the already-published `thm-diagonal-ramsey-counting-lower-bound`, whose exact statement is $R(k,k)>2^{k/2}$ for every natural $k\ge3$. Matoušek--Vondrák first state the cruder $>2^{k/2-1}$ and mention the improved exponent in the following remark; Bucić writes $2^{k/2}\le R(k,k)$. The scaffold does not restate either weaker source form as a new theorem.
- **Hypergraph two-colouring.** If a $k$-uniform hypergraph has fewer than $2^{k-1}$ edges, the first-moment proof gives a proper two-colouring. The Local-Lemma form uses maximum edge-intersection degree $d$ and $e,2^{1-k}(d+1)\le1$.
- **Chernoff.** For independent random signs and positive $\lambda$, $\Pr(|S|\ge\lambda)\le2\exp(-\lambda^2/(2n))$. The scaffold uses non-strict `\le`, as in Zhao; Matoušek--Vondrák print a strict sign that is false at the boundary $\lambda=0$. The statement deliberately assumes $\lambda>0$ and the proof contract still checks the zero boundary separately.
- **Local Lemma.** The asymmetric form is $\Pr(A_i)\le x_i\prod_{(i,j)}(1-x_j)$ with $x_i\in[0,1)$ and a directed dependency relation; the conclusion is $\Pr(\bigcap_i A_i^c)\ge\prod_i(1-x_i)>0$. The symmetric corollary is $ep(d+1)\le1$.
- **Tournaments.** For every $n\ge1$, Szele's bound is at least $n!/2^{n-1}$ Hamilton paths. Property $S_k$ is guaranteed when $n\ge3k^2 2^k$; the definition covers all subsets of size at most $k$, and the source proof for size exactly $k$ extends smaller sets.
- **Dominating sets.** For an $n$-vertex graph of minimum degree $\delta>1$, the stated bound is $\gamma(G)\le n(1+\log(\delta+1))/(\delta+1)$.
- **MAX-CUT.** Every $m$-edge graph has a cut, equivalently a spanning bipartite subgraph, with at least $m/2$ edges.
- **Sum-free.** Every finite set of $n$ nonzero integers has a sum-free subset with **strictly more than** $n/3$ elements. Zhao's continuous averaging route records only `at least`; Bucić's finite prime-modulo-three proof supplies the stronger exact form used here.
- **High girth and chromatic number.** For every positive natural $g,k$ there is a finite graph with girth strictly greater than $g$ and chromatic number strictly greater than $k$. The random proof treats $g=1,2$ explicitly and otherwise uses the two scaffolded parameter lemmas before alteration.
- **Second moment.** For nonnegative finite $X$, $\Pr(X>0)\ge (\mathbb E X)^2/\mathbb E(X^2)$ when the denominator is positive; the relative-variance corollary is $\Pr(X=0)\le\operatorname{Var}(X)/(\mathbb E X)^2$ when $\mathbb E X\ne0$.

## Convention decisions and disagreements

- A finite probability space is an outcome set with a nonnegative real weight function summing to one. All subsets are events; there is no sigma-algebra or measurability layer. Zero-weight outcomes are allowed, so probability zero does not imply an event is empty. Only positive probability is used to infer nonemptiness.
- Conditional probability is defined only when the conditioning event has positive probability. Total-probability cells of weight zero are omitted rather than used as illegal denominators.
- Mutual independence means the product identity for every nonempty subfamily; pairwise independence means the identity only for each pair of distinct events. These are kept visibly distinct.
- Independence of finite random variables is stated through joint attained values. Indicator independence then exactly matches event independence, and covariance zero is explicitly not treated as independence.
- Linearity of expectation has no independence hypothesis. Independence enters only for products and, pairwise, for variance addition.
- $G(n,p)$ is the labelled graph on $[n]$ with mutually independent edge indicators of common parameter $p$. The published graph convention is finite and simple, and the published girth convention assigns infinity to a forest.
- The Local Lemma uses the directed dependency-digraph convention of Matoušek--Vondrák. An undirected dependency graph is a symmetric special case; the symmetric corollary counts at most $d$ out-neighbours.
- A sum-free set forbids $x+y=z$ with $x,y,z$ in the set and permits $x=y$. Property $S_k$ requires one vertex dominating each set of at most $k$ other vertices; the dominator is automatically outside that set.
- `log` is the published natural logarithm. Real exponentiation and exponential monotonicity use the published conventions. Newly scaffolded text never applies the canonical embedding symbol to a natural number; legacy published occurrences were read but left untouched.
- B pages remain leaves. In particular the Ramsey calculation illustrates the already-published theorem, and no method theorem depends on it.

## Published dependency audit and confidence routes

I opened every direct external dependency below as an individual item on disk, in addition to reading the relevant published pages. Every item is `status: published`; none has `provenance.statement: ai-generated`, and no direct dependency is legacy-unclassified. No published dependency appeared unambiguously false.

`S` means the displayed statement and conventions were matched directly to the named literature or to the independently harvested lecture notes. `K` means I independently checked the exact displayed statement from standard mathematics and against the local route; where the published proof is AI-generated, the scaffold relies only on that checked statement, never on its proof provenance.

| Published dependency | Route | Exact use checked |
|---|---|---|
| `cor-mean-value-theorem` | S | exact finite-interval mean-value identity used in $1+x\le e^x$ |
| `def-binomial-coefficient` | S | finite subset count and notation |
| `def-clique-and-independence-numbers` | S | independence number and clique conventions |
| `def-congruence-modulo-an-integer` | S | congruence classes in the prime-modulo-three argument |
| `def-factorial-and-falling-factorial` | K | factorial count and falling-factorial identity; no legacy applied-embedding notation is copied |
| `def-finite-cardinality` | K | finite cardinality and uniform normalization |
| `def-finite-simple-graph` | S | finite simple graph convention |
| `def-finite-sum` | K | empty and recursive finite sums |
| `def-function` | S | weight functions and random variables |
| `def-integer-power` | K | natural powers and the $m=0$ convention in exponential probability estimates |
| `def-integers` | S | ambient set and equality convention for sum-free subsets |
| `def-graph-adjacency-incidence-neighbourhood-and-degree` | S | degree, neighbourhood, and minimum-degree conventions |
| `def-graph-distance-and-girth` | S | girth and the acyclic infinity convention |
| `def-hamilton-path-cycle-and-hamilton-connected` | S | directed Hamilton-path terminology through the tournament bridge |
| `def-multigraph-loop-and-digraph` | S | arc and digraph conventions |
| `def-natural-logarithm` | S | natural logarithm as inverse exponential |
| `def-off-diagonal-ramsey-number` | S | exact $R(k,k)$ convention |
| `def-product-of-an-indexed-family` | S | finite Cartesian products of outcome sets |
| `def-proper-vertex-colouring-and-chromatic-number` | S | chromatic number and colour classes |
| `def-rational-power` | S | the rational exponent $k/2$ in the exact Ramsey threshold |
| `def-real-exponential-function-and-e` | S | the real exponential and $e$ |
| `def-subgraph-induced-subgraph-and-spanning-subgraph` | S | induced subgraphs after vertex deletion |
| `def-tournament` | S | orientation convention for complete graphs |
| `def-uniform-hypergraph-and-complete-partite-hypergraph` | S | $k$-uniform hypergraph convention |
| `lem-every-integer-above-one-has-a-prime-divisor` | K | prime divisor existence in the Euclid-style congruence proof |
| `thm-prime-factorisation-exists` | K | finite prime product needed to infer that a number congruent to $2$ modulo $3$ has a prime factor with that residue |
| `lem-finite-set-has-max` | K | maximum over finite real values for boundary choices |
| `lem-finite-sum-laws` | K | additivity, scaling, monotonicity, products, and empty cases |
| `lem-finite-sum-reindexing-and-fubini` | K | disjoint splitting, reindexing, and finite Fubini |
| `lem-integer-part` | S | the exact floor used in the finite Ramsey calculation |
| `lem-power-laws` | K | natural-power product, quotient, and iterated-power algebra in the tournament estimate |
| `lem-power-monotone` | K | preservation of a nonnegative base inequality under a natural power |
| `lem-rational-power-monotone` | S | order comparison at the rational Ramsey exponent |
| `lem-series-linearity` | K | cancellation of odd terms in the two exponential series for a random sign |
| `thm-binomial-closed-formula` | K | the factorial form of the binomial bound in the tournament and Ramsey calculations |
| `thm-diagonal-ramsey-counting-lower-bound` | S | exact strict bound $R(k,k)>2^{k/2}$ for $k\ge3$ |
| `thm-derivative-of-exponential` | S | $(\exp)'=\exp$ for the tangent-line inequality |
| `thm-direct-comparison-test` | K | convergence of the termwise-dominated random-sign exponential series |
| `thm-exponential-addition-formula` | S | exponential products in moment generating functions |
| `thm-exponential-is-strictly-increasing` | S | exponentiating scalar inequalities |
| `thm-integers-modulo-n-basic-algebra` | K | ring arithmetic modulo the selected prime |
| `thm-logarithm-slower-than-every-positive-power` | S | asymptotic parameter choice in the high-girth proof |
| `thm-natural-logarithm-laws` | S | logarithmic simplification in the dominating-set bound |
| `thm-nonnegative-series-bounded-partial-sums` | S | comparison of nonnegative exponential sums and the factorial estimate in the $S_k$ bound |
| `thm-number-of-bijections-of-a-finite-set` | K | exactly $n!$ vertex orderings in Szele's argument |
| `thm-real-power-laws` | S | real-power algebra in exact probability bounds |
| `thm-reals-ordered-field` | K | finite inequalities and rearrangements |
| `thm-z-mod-p-is-a-field` | S | nonzero modular multipliers are bijections modulo a prime |

## Provenance assignments and per-item rationales

The intended component values below are for step 5. `LD` is `literature-derived`, `AA` is `ai-altered`, and `NA` is `not-applicable`. Every definition is `LD/NA`. No scaffolded Statement or Construction is `ai-generated`; all proof-bearing items use `AA` proofs because step 5 will adapt, combine, or make boundary-complete the cited arguments.

### Foundations A items 1--37

| Item | Statement / proof | Rationale |
|---|---|---|
| `def-finite-probability-space-and-event` | LD / NA | Matoušek--Vondrák Definition 1.1.1 and Bucić Appendix A, specialized to finite outcome weights. |
| `lem-finite-probability-basic-laws` | AA / AA | Grinstead--Snell Theorem 1.1 and Pishro--Nik §§1.3.2--1.3.3, consolidated in the local finite-weight notation. |
| `thm-finite-additivity-of-probability` | AA / AA | Grinstead--Snell Theorem 1.2 and Pishro--Nik §1.3.2, recast for the local finite family and finite-sum interface. |
| `cor-two-event-inclusion-exclusion` | AA / AA | Grinstead--Snell Theorem 1.4 and Pishro--Nik §1.3.3, with the overlap partition made explicit locally. |
| `thm-finite-union-bound` | LD / AA | Matoušek--Vondrák Lemma 1.1.3 and Bucić Lemma A.7; local disjointification proof. |
| `def-conditional-probability` | LD / NA | Matoušek--Vondrák Definition 1.1.5 and Bucić Definition A.11. |
| `thm-conditional-probability-multiplication-and-chain-rules` | AA / AA | Grinstead--Snell equation (4.2) and Pishro--Nik §1.4.0, adapted to a finite chain with legal denominators. |
| `thm-finite-law-of-total-probability` | AA / AA | Grinstead--Snell Theorem 1.3, Corollary 1.1, and equation (4.3), independently Pishro--Nik §1.4.2. |
| `thm-finite-bayes-theorem` | LD / AA | Grinstead--Snell's Bayes' Formula block and Pishro--Nik §1.4.3, locally stated for a finite positive-probability partition. |
| `def-pairwise-and-mutual-independence-of-events` | LD / NA | Matoušek--Vondrák Definition 1.1.4 and Bucić Definitions A.14--A.15. |
| `thm-event-independence-via-conditioning` | AA / AA | Source observation after Matoušek--Vondrák Definition 1.1.5, expanded to the iff and symmetric forms. |
| `lem-mutual-independence-under-subfamilies-and-complements` | AA / AA | Canonical finite consequence of the harvested mutual-independence identities; proved by subfamily restriction and complemented-indicator expansion. |
| `def-uniform-finite-probability-space` | LD / NA | Uniform-distribution paragraph in Matoušek--Vondrák §1.1 and Bucić Example A.2. |
| `def-product-of-finite-probability-spaces` | LD / NA | Grinstead--Snell Definitions 4.3--4.5 and the following finite product-distribution construction, generalized canonically to unequal finite factors. |
| `thm-product-probability-has-independent-coordinate-events` | AA / AA | Grinstead--Snell's coordinate-variable conclusion after Definition 4.5, generalized and verified locally for arbitrary finite factors. |
| `def-finite-real-random-variable-and-distribution` | LD / NA | Matoušek--Vondrák Definition 1.1.6 and Bucić Definition A.4. |
| `def-expectation-on-a-finite-probability-space` | LD / NA | Matoušek--Vondrák Definition 1.1.7 and Bucić Definition A.5. |
| `lem-expectation-by-distribution` | AA / AA | Locally regrouped finite outcome sum by equal attained values. |
| `thm-linearity-of-expectation` | LD / AA | Matoušek--Vondrák Lemma 3.1.1 and Bucić Proposition A.8; no independence. |
| `thm-expectation-monotonicity-and-bounds` | AA / AA | Standard finite averaging consequences derived locally from nonnegative weights. |
| `def-indicator-random-variable` | LD / NA | Matoušek--Vondrák Definition 3.1.2 and Bucić §2.1. |
| `lem-indicator-expectation-and-products` | LD / AA | Matoušek--Vondrák Lemma 3.1.3 plus the standard product/intersection identity. |
| `def-independence-of-finite-random-variables` | LD / NA | Matoušek--Vondrák Definition 1.1.8, in finite joint-value form. |
| `thm-event-independence-and-indicator-independence` | AA / AA | Canonical four-atom equivalence connecting Pishro--Nik's harvested event-independence and indicator/Bernoulli blocks. |
| `thm-expectation-of-products-of-independent-random-variables` | LD / AA | Matoušek--Vondrák Lemma 1.1.9 and Bucić Proposition A.15. |
| `def-variance-and-covariance` | LD / NA | Matoušek--Vondrák §6.1, Zhao §3.1, and Bucić Definition A.9. |
| `lem-variance-and-covariance-identities` | LD / AA | Source identities $\operatorname{Var}X=E(X^2)-(EX)^2$ and covariance expansion. |
| `thm-covariance-bilinearity-and-symmetry` | AA / AA | Pishro--Nik §5.3.1 covariance lemma, reformulated as the exact finite-expectation interface for variance sums. |
| `thm-variance-of-a-finite-sum` | LD / AA | Matoušek--Vondrák §6.1 and Zhao §3.1, with all covariance terms explicit. |
| `cor-variance-adds-for-pairwise-independent-random-variables` | LD / AA | Standard pairwise-independent specialization of the variance-sum formula. |
| `def-bernoulli-and-binomial-random-variables` | LD / NA | Grinstead--Snell's Bernoulli-trials/binomial paragraph and Pishro--Nik §3.1.5 definitions and sum-of-Bernoulli lemma. |
| `lem-bernoulli-and-binomial-mean-and-variance` | LD / AA | Standard indicator-sum calculation from the harvested expectation and variance laws. |
| `thm-markov-inequality` | LD / AA | Matoušek--Vondrák Theorem 4.1.1 and Bucić Theorem A.10. |
| `thm-chebyshev-inequality` | LD / AA | Matoušek--Vondrák Theorem 6.1.2 and Bucić Theorem A.11. |
| `lem-cauchy-schwarz-for-finite-random-variables` | AA / AA | Pishro--Nik §6.2.4, specialized to finite weighted random variables and retained as machinery for the second moment. |
| `thm-finite-second-moment-lower-bound` | AA / AA | Canonical Paley--Zygmund-at-zero consequence of the harvested Cauchy--Schwarz theorem, using $X=X\mathbf 1_{\{X>0\}}$. |
| `cor-relative-variance-positive-probability-bound` | AA / AA | Algebraic corollary of the local second-moment bound and the variance identity. |

### Method A items 38--65

| Item | Statement / proof | Rationale |
|---|---|---|
| `thm-positive-probability-existence-principle` | AA / AA | Explicit finite logical bridge from positive probability to a witness. |
| `thm-first-moment-method` | AA / AA | Standard expectation-existence principle formulated from the local averaging theorem. |
| `prop-deletion-alteration-method` | AA / AA | Generic locally formulated alteration template supporting the graph application. |
| `lem-exponential-dominates-one-plus-x` | AA / AA | Standard tangent-line estimate proved locally by the published mean-value, derivative, and monotonicity theorems; natural-power monotonicity supplies its probability corollary. |
| `def-erdos-renyi-random-graph` | LD / NA | Matoušek--Vondrák Definition 1.1.2 and the standard $G(n,p)$ model. |
| `lem-random-graph-fixed-pattern-probability` | AA / AA | Local independent-edge calculation covering simultaneous required and forbidden edges. |
| `def-moment-generating-function` | LD / NA | Standard exponential-moment definition used by both Chernoff treatments. |
| `lem-mgf-of-independent-finite-sum` | AA / AA | Local iteration of product-expectation factorisation. |
| `lem-moment-bound-for-a-random-sign` | AA / AA | Source cosh estimate extracted as the exact one-variable Chernoff input, with the infinite termwise inequality discharged by the published comparison machinery. |
| `thm-chernoff-bound-for-independent-random-signs` | LD / AA | Matoušek--Vondrák §7.1 and Zhao §4.1, with Zhao's non-strict sign. |
| `def-dependency-digraph-for-finite-events` | LD / NA | Matoušek--Vondrák §5.1 directed dependency convention. |
| `lem-local-lemma-conditional-probability-bound` | AA / AA | Conditional induction extracted from the standard Local-Lemma proof. |
| `thm-asymmetric-lovasz-local-lemma` | LD / AA | Matoušek--Vondrák Theorem 5.1.1 and Zhao Theorem 5.1. |
| `cor-symmetric-lovasz-local-lemma` | LD / AA | Matoušek--Vondrák Corollary 5.1.2 and Zhao Corollary 5.3. |
| `thm-hypergraph-two-colouring-by-first-moment` | LD / AA | Matoušek--Vondrák Theorem 2.2.4, stated as the exact edge threshold. |
| `thm-hypergraph-two-colouring-by-local-lemma` | LD / AA | Matoušek--Vondrák §5.2 application with the exact dependency-degree condition. |
| `thm-max-cut-at-least-half-the-edges` | LD / AA | Matoušek--Vondrák Theorem 3.3.1 and Bucić Theorem 2.1. |
| `thm-szele-many-hamilton-paths-in-a-tournament` | LD / AA | Matoušek--Vondrák Theorem 3.2.1 and Bucić Theorem 2.2. |
| `def-tournament-property-s-k` | LD / NA | Bucić definition preceding Theorem 1.5. |
| `thm-tournament-property-s-k-existence` | LD / AA | Bucić Theorem 1.5 with exact constant $3k^2 2^k$. |
| `def-dominating-set-in-a-graph` | LD / NA | Zhao §6.1 standard domination convention. |
| `thm-small-dominating-set-from-minimum-degree` | LD / AA | Zhao Theorem 6.1 with exact logarithmic bound and $\delta>1$. |
| `def-sum-free-set-of-integers` | LD / NA | Zhao §6.1 and Bucić §2.3 convention, including repeated summands. |
| `lem-arbitrarily-large-primes-congruent-to-two-modulo-three` | AA / AA | Local Euclid-style lemma; the opened factorisation theorem supplies the load-bearing step from the product residue to a prime factor congruent to $2$ modulo $3$. |
| `thm-erdos-sum-free-subset-bound` | LD / AA | Bucić Theorem 2.3 gives the strict $>n/3$ statement. |
| `lem-random-graph-short-cycle-expectation` | AA / AA | Local indicator count distilled from the high-girth proofs. |
| `lem-random-graph-independence-number-bound` | AA / AA | Local union/expectation bound distilled from the same proofs. |
| `thm-erdos-high-girth-and-high-chromatic-number` | LD / AA | Matoušek--Vondrák Theorem 4.2.1, Zhao Theorem 6.3, and Bucić Theorem 4.1. |

### B-page leaves

| Item | Statement / proof | Rationale |
|---|---|---|
| `ex-loaded-die-and-conditional-probability` | AA / AA | Locally chosen rational-weight calculation testing the nonuniform definition and conditioning. |
| `ex-bayes-theorem-for-two-urns` | AA / AA | Classical Bayes example adapted to the finite-partition theorem and exact fractions. |
| `ex-pairwise-independent-events-not-mutually-independent` | LD / AA | Matoušek--Vondrák exercise; the parity construction is proved locally. |
| `cex-equal-probability-events-need-not-be-independent` | AA / AA | Local finite countermodel separating equal marginals from the product identity. |
| `cex-uncorrelated-random-variables-need-not-be-independent` | AA / AA | Standard symmetric finite countermodel, recomputed locally. |
| `cex-dependent-variables-need-not-factor-expectation` | AA / AA | Local indicator countermodel showing why the product theorem needs independence. |
| `fs-linearity-of-expectation-requires-independence` | AA / AA | Deliberately false claim refuted by the exact linearity theorem and a dependent pair. |
| `ex-strict-union-bound-for-overlapping-events` | AA / AA | Local overlap calculation showing the union bound can be strict. |
| `ex-chebyshev-inequality-is-sharp` | LD / AA | Grinstead--Snell §8.1 supplies the exact symmetric two-point distribution and equality claim; step 5 recomputes its mean, variance, and tail event locally. |
| `ex-markov-inequality-is-sharp` | AA / AA | Canonical extremal construction adapted from the exact Markov statement in Pishro--Nik §6.2.2 and checked for every $p\in[0,1]$. |
| `cex-markov-inequality-fails-without-nonnegativity` | AA / AA | Canonical two-point boundary witness for the nonnegativity hypothesis stated in Pishro--Nik §6.2.2, with the negative mean and failed bound computed locally. |
| `ex-triangle-count-in-the-erdos-renyi-random-graph` | LD / AA | Standard $G(n,p)$ indicator application, with expectation derived locally. |
| `ex-second-moment-bound-for-a-nonempty-random-subset` | AA / AA | Local finite subset model testing all hypotheses of the second-moment bound. |
| `ex-diagonal-ramsey-lower-bound-by-the-union-bound` | LD / AA | Matoušek--Vondrák §2.1 and the opened published strict Ramsey theorem. |
| `ex-local-lemma-hypergraph-parameter-check` | AA / AA | Local arithmetic check translating edge intersections to the symmetric LLL. |
| `ex-high-girth-high-chromatic-parameter-ledger` | AA / AA | Local ledger exposing the parameter choices implicit in three source proofs. |
| `cex-first-moment-threshold-one-is-not-enough` | AA / AA | Local one-point countermodel showing why $E[X]<1$, not merely $\le1$, yields a zero witness. |

## Proof-contract priorities for step 5

The proof-contract file is intentionally `planned`: citation lists and exact quotation matches remain empty until prose exists. Its highest-risk contracts are the conditional induction in the asymmetric Local Lemma, the optimization and zero-threshold boundaries in Chernoff, the prime-modulo-three construction for the strict sum-free bound, and the simultaneous parameter choices plus alteration in the high-girth/high-chromatic theorem. Each has an explicit local dependency route and all eight standard boundary fields. Definitions have no proof contract.

Step 5 must not compress the Local Lemma to a citation-only proof, must not hide the high-girth parameter selection in asymptotic prose, and must preserve the exact strict/nonstrict signs in the constant ledger above. Finite smoke tests should then be added where they validate arithmetic without substituting for proof.

## Step-2 status and blockers

Decision D1 remains fully applied: the A split is 37/28, the B split is now 11/6 after the three dispatched boundary witnesses, and proof-contract scope follows pair order. Fix round 2 changed sourcing only and remains discharged; fix round 3 changes only page 220.4 and its matching coverage, provenance notes, and proof contracts. The foundations coverage entry now has 116 rows across two full textbook treatments and three corroborative lecture-note prefaces, plus seven canonical finite-result rows; the accepted method entry remains byte-for-byte unchanged at 84 rows across the original three lecture-note treatments. All 37 foundations A ids and all three new B ids occur in the corrected coverage union. The required final commands are green: `coverage-checklist` reports 2 pages, 200 harvested results, 0 errors and 0 warnings; `validate-plan` exits 0 with page order acyclic and consistent. There were no permission, web, source-access, mathematical, or seam blockers, and there is no unpublished or false dependency to report. The standalone proof-contract checker remains outside this fix round: before step 5 its 65 planned `items/*.md` files do not exist, while the JSON scope/contract bijection now contains all 65 proof-bearing scaffold items.
## Continuity checkpoint

- The authoritative four-page batch is fully drafted on disk: 82 item files (37 + 11 + 28 + 6) and four `status: draft` page files. The dispatch table's 79/8 count is stale; the spliced plan and Alpha recheck require the three added foundation boundary examples.
- The first `precheck` pass examined 65 proof-bearing items and reported 37 failures. Most are canonical proof-stratification `REPAIR` results; the remaining hard failures are explicit strategy-tag omissions or mismatches in constructive/inductive proofs.
- No final gate result has yet been claimed. Next actions are to adopt the canonical stratifications, repair the hard failures, re-run precheck, complete the statement/dependency/citation and boundary-case audit, synchronize this batch's proof contracts to the written proofs, and run every required individual gate.
- Known authored departure to preserve and report: `thm-erdos-sum-free-subset-bound` was narrowed to nonempty finite sets because the scaffolded strict lower bound is false for the empty set.

## Step-5 authoring completion (2026-08-13)

This section supersedes the scaffold-era statements above that the proof contracts are `planned`, that the item files do not yet exist, and that a local B-to-B dependency remains. The authoritative spliced plan contains 82 items, not the stale 79 in the dispatch table: 37 foundations A items, 11 foundations B items, 28 method A items, and 6 method B items. All 82 item files and all four page files are authored with `status: draft`; every item has `origin: session` and separate statement/construction and proof/verification provenance. The 65 proof-bearing items have synchronized strict proof contracts. No authored statement is `ai-generated`, no item targets an AI-generated statement, and no item depends on a B-page leaf.

### Departures from the scaffolded proof design

1. `thm-erdos-sum-free-subset-bound` is narrowed in both title and Statement to a **nonempty** finite set. The scaffolded strict conclusion is false for the empty set, since it would demand a subset of cardinality strictly greater than zero. The proof otherwise follows the planned random-dilate construction and now disposes of the modular interval bounds explicitly.
2. `lem-local-lemma-conditional-probability-bound` retains the planned induction, but the written proof expands the quotient argument into numerator and denominator events and proves positivity of every conditioning prefix before division. This replaces the scaffold's compressed conditional-probability bridge with the boundary-complete argument the claim requires.
3. `thm-erdos-high-girth-and-high-chromatic-number` retains alteration, but replaces the planned asymptotic parameter sentence with explicit finite inequalities, treats the `ell <= 2` case separately by a complete graph, and proves the post-deletion colour-class contradiction quantitatively. Its companion parameter-ledger example makes the same probability estimates explicit.
4. `thm-tournament-property-s-k-existence` retains the union-bound strategy, but handles `k=1` and `k=2` separately; the latter uses the exact inequality `(3/4)^8 < 1/9` rather than an opaque exponential comparison.
5. `ex-bayes-theorem-for-two-urns` realizes the priors and likelihoods on an explicit `2 x 4` product space, giving eight elementary outcomes. This replaces the scaffold's vague four-branch realization without changing the intended Bayes calculation.
6. `lem-arbitrarily-large-primes-congruent-to-two-modulo-three` retains the Euclid-style construction, but uses the actual finite-prime-product and prime-factorisation interfaces. The scaffold's `def-finite-sum` and standalone prime-divisor route did not license the load-bearing product-residue inference.
7. `fs-linearity-of-expectation-requires-independence` now constructs its dependent random-sign witness locally instead of depending on an earlier example on the same B page. This removes the scaffolded B-to-B edge and preserves the required leaf invariant.

Other dependency differences from the scaffold are direct citation-closure repairs rather than strategy changes: the authored Facts blocks name the exact finite-sum/Fubini, independence, sign, exponential, logarithmic, square-root, graph, and existence interfaces actually used, and omit dependencies not used by the written proof. Both directions of the Chebyshev and relative-variance equivalences, zero-weight and empty-family cases, degenerate Local-Lemma degrees, endpoint probability parameters, and nonempty witness choices are explicit in the final proofs and their contracts.

### Final verification

- `reflow.mts`: 82/82 item files unchanged.
- `precheck.mts`: 65 checked, 0 failing; every proof-bearing item records `verification.precheck: pass`.
- `rendercheck.mjs`: 86 files checked with the real KaTeX and renderer YAML parser, clean.
- `prosecheck.mjs --warnings`: 4 page files, 0 errors and 0 warnings.
- `citecheck.mjs`: 82 item files, clean with no warnings.
- `proof-contract.mjs --strict`: 65/65 contracts checked, 0 errors and 0 warnings.
- `content-policy.mjs`: 82 scoped items, 0 errors and 0 warnings.
- `coverage-checklist.mjs`: 2 A pages and 200 harvested results, 0 errors and 0 warnings.
- `validate-plan.mjs`: reading order and page prerequisites are acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved ids in authored page lists.

No proof obligation remains unclosed after the sum-free theorem was narrowed to its true domain. There were no permission, source-access, tooling, or mathematical blockers. Nothing was published.
