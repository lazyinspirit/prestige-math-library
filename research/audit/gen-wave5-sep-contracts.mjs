// Generator for research/audit/wave5-topology-separation.proof-contracts.json
// (Audit-Beta, wave 5, topology-separation batch, step A2 / owner decision D1.)
//
// Mechanical parts, read off the item files with the SAME extraction that
// tools/proof-contract.mjs uses, so the contract cannot drift from the text:
//   citations[]   one entry per distinct wikilink in each [F#]/[A#]/[L#] fact,
//                 `uses` = every numbered step whose text names that fact.
//   derivations[] one entry per numbered step, exactly once, `inputs` = every
//                 fact and earlier step the step's own text names.
// Hand-authored parts, from reading the item and the cited target on disk:
//   quote         the clause of the cited item that licenses the fact. QUOTES is
//                 the canonical clause for a target cited for one proposition
//                 throughout; QUOTE_OVERRIDE handles a target cited for
//                 different clauses in different facts. Every quote is checked
//                 to be an exact (whitespace-normalised) substring of the cited
//                 item's Statement / Statement refuted / Definition / Example.
//   boundaries[]  the eight-case worksheet of QUALITY-CONTROLS.md, per item.

import fs from 'fs';

const SCOPE_FILE = 'research/audit/wave5-topology-separation.pages.json';
const OUT = 'research/audit/wave5-topology-separation.proof-contracts.json';
const SOURCE_SECTIONS = ['Statement refuted', 'Statement', 'Definition', 'Example'];
const CASES = ['empty', 'zero', 'one', 'degenerate', 'endpoints', 'nonempty-choice', 'iff-forward', 'iff-reverse'];

const QUOTES = {
  // --- core topology
  'def-topological-space': 'is **closed** when its complement $X \\setminus F$ is open',
  'def-neighbourhood-top': 'is a **neighbourhood of $x$** if there is an open',
  'def-interior-closure-boundary-top': 'The **closure** of $A$ is',
  'thm-closure-characterisation-top': '$\\overline{A}$ is closed, contains $A$, and is contained in every closed',
  'def-standard-topologies': 'The six families below are topologies on $X$',
  'def-hausdorff-space': 'for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with',
  'def-topology-basis-subbasis': 'is a **basis for $\\mathcal{T}$**',
  'thm-basis-criterion': '**(B2)** for all $B_1, B_2 \\in \\mathcal{B}$',
  'def-subspace-topology-top': 'the family of **traces** on $S$ of the open sets of $X$',
  'thm-subspace-closure-and-interior': '\\operatorname{cl}_S(A) \\;=\\; \\overline{A} \\cap S',
  'def-continuous-map-top': '**continuous at $x$**',
  'thm-continuity-characterisations-top': '$f^{-1}[V]$ is open in $X$ for every open $V \\subseteq Y$',
  'def-sequence-convergence-top': '**converges to $p$**',
  'lem-sequential-closure-inside-closure': '$A \\subseteq \\operatorname{seqcl}(A) \\subseteq \\overline{A}$',
  'thm-first-countable-sequences-suffice': '$\\operatorname{seqcl}(A) = \\overline{A}$ for every $A \\subseteq X$',
  'def-first-countable-top': 'is **first countable** if every point of $X$ has an at most countable neighbourhood base',
  'def-compact-space': '**compact** when every open cover of it has a finite subcover',
  'thm-compact-iff-fip': 'finite intersection property',
  'def-product-topology': '**product topology**',
  'thm-product-universal-property': '**The projections are continuous**',
  'fs-compact-implies-sequentially-compact': '\\prod_{x \\in D} \\{0,1\\}',
  // --- separation page (in-scope targets)
  'def-t0-and-t1-spaces': '$X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points',
  'thm-t1-iff-singletons-are-closed': '$\\{x\\}$ is closed for every $x \\in X$',
  'def-separated-sets': '$A$ and $B$ are **separated** when',
  'def-g-delta-and-f-sigma-in-a-topological-space': '$A$ is a **$G_\\delta$ set of $X$** when there is a sequence',
  'def-regular-and-t3-spaces': '$X$ is **regular** when a point can be separated from a closed set not',
  'lem-regularity-via-closed-neighbourhoods': 'x \\in V \\subseteq \\overline{V} \\subseteq U',
  'def-urysohn-space': '\\overline{U} \\cap \\overline{V} = \\varnothing',
  'lem-urysohn-sits-between-hausdorff-and-regular-plus-t1': 'then $X$ is Urysohn',
  'def-zero-sets-and-cozero-sets': '$Z(f)$ is the **zero set** of $f$ and $\\operatorname{coz}(f)$ its **cozero set**',
  'def-completely-regular-and-tychonoff-spaces': '$X$ is **completely regular** when a point can be separated from a closed set',
  'thm-completely-regular-implies-regular': 'then $X$\nis regular',
  'def-normal-and-t4-spaces': '$X$ is **normal** when any two disjoint closed sets can be separated by',
  'lem-normality-via-shrinking': 'A \\subseteq V \\subseteq \\overline{V} \\subseteq U',
  'thm-t4-implies-t3': 'Then $X$ is regular',
  'def-completely-normal-and-perfectly-normal-spaces': '$X$ is **completely normal** when any two **separated** sets can be put into',
  'thm-completely-normal-implies-normal': 'then $X$ is normal',
  'thm-perfectly-normal-implies-completely-normal': 'admit disjoint open $U \\supseteq A$ and $V \\supseteq B$',
  'thm-metric-spaces-are-completely-normal': 'Then there are disjoint open sets $U \\supseteq A$ and $V \\supseteq B$',
  'thm-metric-spaces-are-tychonoff-and-perfectly-normal': '**Every closed set is a zero set.**',
  'def-order-topology-on-an-ordinal': 'the **order topology on $\\gamma$**',
  'lem-ordinal-order-topology-is-t3': 'and therefore $T_3$',
  'lem-the-k-topology-is-hausdorff-and-not-regular': 'is **not regular**',
  // --- metric and real analysis
  'def-metric-space': 'metric',
  'def-metric-topology': 'open',
  'def-metric-ball': 'B(x,r) := \\{\\, y \\in X : d(x,y) < r',
  'def-metric-bounded-diameter': '**Distance from a point to a set, for nonempty $A$ only.**',
  'thm-metric-closure-characterisation': '\\overline{A} = \\{\\, x \\in X : d(x,A) = 0 \\,\\}',
  'thm-metric-open-set-algebra': '**Balls are open.**',
  'lem-distance-to-set-is-lipschitz': '$1$-Lipschitz',
  'def-metrizable-space': '**metrizable** if there is a metric $d$ on $X$',
  'def-metric-continuity': '**continuous at $a$**',
  'thm-metric-continuity-characterisations': '$f^{-1}[V]$ is open in $X$ for every open $V \\subseteq Y$',
  'lem-metric-nonnegativity': '$p(x,y) \\ge 0$ for all',
  'def-infimum': '**greatest lower bound**, or **infimum**',
  'thm-infimum-property': 'greatest lower bound in $\\mathbb{R}$',
  'def-max-min': '$m$ is a **maximum**',
  'lem-finite-set-has-max': 'has a maximum and a minimum',
  'lem-real-line-is-a-metric-space': 'B(x,r) = (x-r,\\ x+r)',
  'def-interval': 'order-convex',
  'def-open-and-closed-in-r': '$U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$',
  'def-f-sigma-g-delta': '$A$ is a **$G_\\delta$ set** when there is a sequence',
  'lem-of-abs-value': '|x| < c \\iff -c < x < c',
  'def-canonical-natural': '**canonical natural**',
  'cor-archimedean-reciprocal': 'there is a natural number\n$n \\ge 1$ such that',
  'thm-of-archimedean': 'for every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$',
  'lem-of-naturals-positive': 'the map $n \\mapsto n \\cdot 1_F$ is strictly increasing',
  'lem-of-inverse-positive': 'If $0 < a < b$ then $0 < b^{-1} < a^{-1}$',
  'def-absolute-and-conditional-convergence': '**converges absolutely** when the',
  'def-sum-over-a-finite-index-set': '\\sum_{i \\in S} a_i := \\sum_{k<n} a_{\\varphi(k)}',
  'thm-sum-rule': '**Splitting a sum along a partition of its index set.**',
  'thm-dirichlet-rearrangement': 'the rearranged series again converges absolutely',
  'thm-nonnegative-series-bounded-partial-sums': 'converges **if and only if** $S$ is bounded above',
  'lem-positive-and-negative-parts': '|a_k| = a_k^{+} + a_k^{-}',
  // --- countability, choice, foundations
  'def-countable': '$A$ is **finite**',
  'lem-subset-of-countable': '$B$ is at most countable',
  'lem-countable-iff-surjection-from-n': 'there is a surjection $s : \\mathbb{N} \\to A$',
  'thm-countable-union-of-countable': 'is at most countable',
  'thm-r-uncountable': '$\\mathbb{R}$ is **uncountable**',
  'cor-interval-uncountable': 'are uncountable',
  'def-countable-choice': 'there is a function $f$ with domain $\\mathbb{N}$',
  'lem-nat-trichotomy': 'exactly one of $m < n$, $m = n$, $m > n$ holds',
  'lem-nat-nonzero-is-successor': 'every natural number is either $0$ or a successor',
  'thm-well-ordering-principle': 'has a least element',
  'thm-recursion': 'there is a unique function $g : N \\to A$',
  'lem-index-map-grows': '$n_k \\ge k$ for every',
  'def-partial-order': '**(A)** *antisymmetry*',
  // --- ordinals
  'def-ordinal': '**transitive set**',
  'lem-ordinal-basics': 'every element of $\\alpha$ is an ordinal',
  'lem-ordinal-trichotomy': '**exactly one** of',
  'def-limit-ordinal': '**limit ordinal** when $\\alpha \\ne 0$',
  'lem-omega-least-limit-ordinal': '$\\omega$ is a limit ordinal',
  'def-ordinal-addition': '\\alpha + 1 = \\alpha + 0^{+} = (\\alpha + 0)^{+} = \\alpha^{+}',
  'def-first-uncountable-ordinal': '\\omega_1 \\;:=\\; \\aleph(\\omega)',
  'thm-omega-one-is-the-least-uncountable-ordinal': 'Every ordinal $\\alpha \\in \\omega_1$ is at most countable',
  'thm-countable-subsets-of-omega-one-are-bounded': 'is bounded below $\\omega_1$',
  'def-cofinal-subset-of-an-ordinal': '**cofinal in $\\alpha$**',
  // --- filters, ultrafilters, nets (in-scope and neighbouring targets)
  'def-filter': '**(F4)** *upward closure in $X$*',
  'def-filter-base': '**(B3)** *downward directedness*',
  'lem-filter-base-generates': '$\\langle \\mathcal{B} \\rangle$ is a filter on $X$',
  'def-ultrafilter': '**maximal element**',
  'thm-ultrafilter-characterisation': 'either $A \\in \\mathcal{U}$ or',
  'thm-ultrafilter-lemma': 'there is an ultrafilter',
  'def-directed-set-and-net': 'a nonempty set $D$ with a reflexive, transitive relation',
  'def-net-eventually-and-frequently': '**eventually in $S$**',
  'def-net-convergence-and-cluster-point': '**converges to $p$**',
  'def-subnet': 'eventually cofinal',
  'def-tail-filter-of-a-net': 'the **tail filter**',
  'def-filter-convergence-and-cluster-point': '**converges to $p$**',
  'def-net-derived-from-a-filter': 'E_{\\mathcal F}=\\{(A,x):A\\in\\mathcal F,\\ x\\in A\\}',
  'def-universal-net': '**universal** if, for every subset $S\\subseteq X$',
  'def-frechet-urysohn-and-sequential-spaces': '**Fréchet–Urysohn**',
  'thm-closure-characterised-by-nets': 'there is a net in $A$ converging to $p$',
  'thm-continuity-characterised-by-nets': 'the net $f(x_d)$ converges to $f(p)$',
  'thm-net-cluster-point-iff-convergent-subnet': 'has a subnet converging to $p$',
  'thm-hausdorff-iff-net-limits-are-unique': 'every net in $X$ has at most one limit',
  'lem-tail-filter-preserves-net-convergence-and-cluster-points': 'a point is a limit of $x$ exactly when it is a limit of $\\mathcal F_x$',
  'lem-filter-derived-net-preserves-convergence-and-cluster-points': 'have exactly the same limits and cluster points',
  'thm-net-filter-convergence-dictionary': 'preserves and reflects convergence and cluster points',
  'thm-universal-nets-and-ultrafilters-correspond': 'A net is universal if and only if its tail filter is an ultrafilter',
  'lem-ultrafilter-cluster-points-are-limits': 'Every cluster point of an ultrafilter is a limit of that ultrafilter',
  'lem-universal-net-cluster-points-are-limits': 'Every cluster point of a universal net is a limit of that net',
  'lem-continuous-images-of-universal-nets-are-universal': 'then $f(x)$ is universal',
  'lem-every-net-has-a-universal-subnet': 'Every net has a universal subnet',
  'cor-compactness-via-universal-nets': 'compact if and only if every universal net in it converges',
  'thm-compactness-via-nets-filters-and-ultrafilters': 'every net in $X$ has a cluster point',
  'thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma': 'with its product topology, is compact',
  'ex-finite-subset-net-for-unordered-real-summation': 'the **finite-subset net**',
  'ex-sierpinski-space-is-t0-normal-and-not-regular': '$S$ is **normal**',
  'thm-compact-subset-of-a-hausdorff-space-is-closed': '**Compact implies closed.**',
  'thm-tychonoff': 'with the product topology',
};

// `${id}|${fact}|${target}` -> the clause that fact actually leans on.
const QUOTE_OVERRIDE = {
  // cofinite / cocountable / particular-point / Sierpinski / discrete / indiscrete clauses
  'thm-t1-iff-singletons-are-closed|L3|def-standard-topologies': 'Its closed sets are $X$ together with the finite subsets of $X$',
  'fs-every-t1-space-is-hausdorff|L1|def-standard-topologies': 'Its closed sets are $X$ together with the finite subsets of $X$',
  'ex-the-cofinite-topology-in-the-separation-hierarchy|A1|def-standard-topologies': 'Its closed sets are $X$ together with the finite subsets of $X$',
  'fs-unique-sequential-limits-imply-hausdorff|A1|def-standard-topologies': 'Its closed sets are $X$ together with the at most countable subsets of $X$',
  'ex-the-cocountable-topology-in-the-separation-hierarchy|A1|def-standard-topologies': 'Its closed sets are $X$ together with the at most countable subsets of $X$',
  'ex-the-particular-point-topology-in-the-separation-hierarchy|A1|def-standard-topologies': 'the open sets are $\\varnothing$ and the sets containing $p$',
  'ex-sierpinski-space-is-t0-normal-and-not-regular|A1|def-standard-topologies': '\\mathcal{T}_{\\mathrm{Sier}} := \\{\\varnothing, \\{b\\}, S\\}',
  'fs-every-normal-space-is-hausdorff|L1|def-standard-topologies': 'Its closed sets are again $\\varnothing$ and $X$',
  'ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy|A1|def-standard-topologies': 'every subset is open, hence every subset is closed',
  'ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy|A2|def-standard-topologies': 'Its closed sets are again $\\varnothing$ and $X$',
  'lem-ordinal-order-topology-is-t3|L3|thm-t1-iff-singletons-are-closed': '$\\{x\\}$ is closed for every $x \\in X$',
  'ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy|L7|thm-t1-iff-singletons-are-closed': '$\\{x\\}$ is closed for every $x \\in X$',
  'fs-every-t1-space-is-hausdorff|L2|thm-t1-iff-singletons-are-closed': '$\\mathcal{T}_{\\mathrm{cof}} \\subseteq \\mathcal{T}$',
  'fs-unique-sequential-limits-imply-hausdorff|L4|thm-t1-iff-singletons-are-closed': '$\\mathcal{T}_{\\mathrm{cof}} \\subseteq \\mathcal{T}$',
  'ex-the-cofinite-topology-in-the-separation-hierarchy|L1|thm-t1-iff-singletons-are-closed': '$\\mathcal{T}_{\\mathrm{cof}} \\subseteq \\mathcal{T}$',
  'ex-the-cocountable-topology-in-the-separation-hierarchy|L1|thm-t1-iff-singletons-are-closed': '$\\mathcal{T}_{\\mathrm{cof}} \\subseteq \\mathcal{T}$',
  // metric clauses
  'thm-metric-spaces-are-completely-normal|L1|def-metric-bounded-diameter': '**Distance from a point to a set, for nonempty $A$ only.**',
  'thm-metric-spaces-are-completely-normal|L3|thm-metric-open-set-algebra': '**Arbitrary unions.**',
  'thm-metric-spaces-are-completely-normal|L5|def-metric-space': 'metric',
  'thm-metric-spaces-are-tychonoff-and-perfectly-normal|L4|thm-metric-closure-characterisation': '$A$ is closed if and only if $A = \\overline{A}$',
  'thm-metric-spaces-are-tychonoff-and-perfectly-normal|L1|thm-metric-closure-characterisation': '\\overline{A} = \\{\\, x \\in X : d(x,A) = 0 \\,\\}',
  'ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets|L1|thm-metric-spaces-are-tychonoff-and-perfectly-normal': '**Every closed set is a $G_\\delta$**',
  'thm-the-separation-implication-chain|L8|thm-metric-spaces-are-tychonoff-and-perfectly-normal': 'is **Tychonoff**',
  'thm-metric-spaces-are-tychonoff-and-perfectly-normal|L8|thm-metric-spaces-are-completely-normal': 'every metrizable space ([[def-metrizable-space]]) is **completely\nnormal**',
  'thm-the-separation-implication-chain|L7|thm-metric-spaces-are-completely-normal': '**No choice principle is used.**',
  // ordinal clauses
  'ex-the-ordinal-spaces-omega-plus-one-and-omega-one|L3|thm-omega-one-is-the-least-uncountable-ordinal': '$\\omega_1$ is a **limit ordinal**',
  'cex-the-deleted-tychonoff-plank-is-not-normal|L1|thm-omega-one-is-the-least-uncountable-ordinal': '$\\omega_1$ is a **limit ordinal**',
  'ex-the-ordinal-spaces-omega-plus-one-and-omega-one|L6|lem-ordinal-basics': '$\\alpha^{+} = \\alpha \\cup \\{\\alpha\\}$ is an ordinal',
  'cex-the-deleted-tychonoff-plank-is-not-normal|L2|lem-ordinal-trichotomy': 'every nonempty **set** $A$ of ordinals has an $\\in$-least',
  'ex-the-ordinal-spaces-omega-plus-one-and-omega-one|L1|lem-omega-least-limit-ordinal': 'every ordinal $\\alpha \\in \\omega$ is $0$ or a successor ordinal',
  // net and filter clauses
  'thm-compactness-via-nets-filters-and-ultrafilters|L1|thm-compact-iff-fip': 'if and only if** every\n   family $\\mathcal{A}$ of closed subsets of $X$ with the finite intersection\n   property',
  'thm-compactness-via-nets-filters-and-ultrafilters|L3|thm-net-filter-convergence-dictionary': 'preserves and reflects convergence and cluster points',
  'thm-compactness-via-nets-filters-and-ultrafilters|L4|lem-ultrafilter-cluster-points-are-limits': 'Every cluster point of an ultrafilter is a limit of that ultrafilter',
  'lem-every-net-has-a-universal-subnet|L1|thm-ultrafilter-lemma': 'there is an ultrafilter',
  'ex-free-ultrafilter-converging-in-a-convergent-sequence-space|L2|thm-ultrafilter-lemma': 'there is an ultrafilter',
  'ex-free-ultrafilter-converging-in-a-convergent-sequence-space|L1|def-tail-filter-of-a-net': 'the **tail filter**',
  'ex-free-ultrafilter-converging-in-a-convergent-sequence-space|L3|def-filter': '**(F4)** *upward closure in $X$*',
  'thm-universal-nets-and-ultrafilters-correspond|A3|def-net-derived-from-a-filter': 'ordered by $(A,x)\\preceq(B,y)$ when $B\\subseteq A$',
  'lem-filter-derived-net-preserves-convergence-and-cluster-points|A1|def-net-derived-from-a-filter': 'ordered by $(A,x)\\preceq(B,y)$ when $B\\subseteq A$',
  'cor-compactness-via-universal-nets|L1|thm-compactness-via-nets-filters-and-ultrafilters': 'every net in $X$ has a cluster point',
  'cor-compactness-via-universal-nets|L2|lem-every-net-has-a-universal-subnet': 'Every net has a universal subnet',
  'cor-compactness-via-universal-nets|L2|lem-universal-net-cluster-points-are-limits': 'Every cluster point of a universal net is a limit of that net',
  'cor-compactness-via-universal-nets|L3|thm-net-cluster-point-iff-convergent-subnet': 'has a subnet converging to $p$',
  'thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma|L2|cor-compactness-via-universal-nets': 'compact if and only if every universal net in it converges',
  'thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma|L3|thm-hausdorff-iff-net-limits-are-unique': 'every net in $X$ has at most one limit',
  'ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence|L2|thm-compactness-via-nets-filters-and-ultrafilters': 'every net in $X$ has a convergent subnet',
  'ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence|L3|thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma': 'with its product topology, is compact',
  'lem-subnets-preserve-eventual-properties-and-limits|A2|def-net-convergence-and-cluster-point': 'it is eventually in every neighbourhood of $p$',
  'thm-net-cluster-point-iff-convergent-subnet|A1|def-net-convergence-and-cluster-point': 'is a **cluster point**',
  'lem-universal-net-cluster-points-are-limits|A2|def-net-convergence-and-cluster-point': 'is a **cluster point**',
  'lem-tail-filter-preserves-net-convergence-and-cluster-points|A2|def-filter-convergence-and-cluster-point': 'is a **cluster point** of $\\mathcal F$',
  'lem-ultrafilter-cluster-points-are-limits|A1|def-filter-convergence-and-cluster-point': 'is a **cluster point** of $\\mathcal F$',
  'thm-first-countable-frechet-urysohn-sequential-hierarchy|A1|def-frechet-urysohn-and-sequential-spaces': 'is **sequential** if every sequentially closed subset is closed',
  'ex-arens-space-is-sequential-not-frechet-urysohn|A1|def-frechet-urysohn-and-sequential-spaces': 'is **sequential** if every sequentially closed subset is closed',
  'fs-every-subnet-of-a-sequence-is-a-subsequence|A2|lem-index-map-grows': '$n_k \\ge k$ for every',
};

// Eight-case boundary worksheet per proof-bearing item: ['c', evidence] or ['n', reason].
const B = {
  'thm-t1-iff-singletons-are-closed': {
    empty: ['c', 'step 1.2 reads the finite list at $n = 0$ as $F = \\varnothing$, closed by [L1]; step 1.3 disposes of $U = \\varnothing$ in the cofinite topology'],
    zero: ['c', 'step 1.2: the case $n = 0$ of the listing $F = \\{x_0, \\dots, x_{n-1}\\}$'],
    one: ['c', 'step 1.1 is the singleton case, showing $X \\setminus \\{x\\}$ is a neighbourhood of each of its points'],
    degenerate: ['c', 'statement: on a space with at most one point every condition holds, (a) vacuously and (d) because the cofinite topology on such a set is its whole power set'],
    endpoints: ['n', 'no ordered domain and no interval occurs; the statement quantifies over points, finite subsets and topologies'],
    'nonempty-choice': ['n', 'no set is asserted nonempty in order to select from it: the separating sets $X \\setminus \\{x\\}$ and $X \\setminus \\{y\\}$ in steps 1.1 and 1.4 are exhibited outright'],
    'iff-forward': ['c', 'steps 1.1 and 2.1 give (a) implies (b), steps 1.2 and 2.2 give (b) implies (c)'],
    'iff-reverse': ['c', 'steps 1.3 and 1.4 give (c) implies (d) and (d) implies (a), and step 3.1 closes the cycle, so each of the four implications holds in both directions round the cycle'],
  },
  'lem-regularity-via-closed-neighbourhoods': {
    empty: ['c', 'step 1.1 allows $C = X \\setminus U$ to be empty, in which case [A1] is met by $V = X$ and $W = \\varnothing$, and the conclusion of step 2.1 is unaffected'],
    zero: ['n', 'no numeric index occurs in the statement or the proof'],
    one: ['c', 'step 1.3 uses the single closed neighbourhood $K$ supplied by (c); no family of neighbourhoods is needed'],
    degenerate: ['c', 'statement: on a one-point or empty space all three conditions hold, the only closed set missing a point being $\\varnothing$ in step 1.3'],
    endpoints: ['n', 'no ordered domain, interval or extremal value occurs'],
    'nonempty-choice': ['n', 'every object is supplied by an instantiated existential ([A1] in step 1.1, [L1] in step 1.2, (c) in step 1.3); no family is asserted nonempty in order to choose from it'],
    'iff-forward': ['c', 'steps 1.1, 2.1 and 3.1 give (a) implies (b); steps 1.2, 2.2 and 3.2 give (b) implies (c)'],
    'iff-reverse': ['c', 'steps 1.3, 2.3 and 3.3 give (c) implies (a), closing the cycle at step 4.1, so each direction of each equivalence is discharged'],
  },
  'lem-urysohn-sits-between-hausdorff-and-regular-plus-t1': {
    empty: ['n', 'no set is allowed to be empty in the hypotheses: every clause quantifies over pairs of distinct points, and the closed set used in claim 3 is the singleton $\\{y\\}$'],
    zero: ['n', 'no numeric index occurs'],
    one: ['c', 'step 1.3 turns the single point $y$ into the closed set $\\{y\\}$ by [L1], which is the only closed set the proof needs'],
    degenerate: ['c', 'statement: for a space with at most one point all three claims are vacuous, no pair $x \\ne y$ existing'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['n', 'the two applications of regularity in steps 2.3 and 3.1 instantiate an existential each; nothing is selected from a family'],
    'iff-forward': ['n', 'the statement is three one-directional implications; no biconditional is asserted'],
    'iff-reverse': ['c', 'the statement says explicitly that no reversal is asserted, and the page refutes two of them separately; step 5.1 composes the implications in one direction only'],
  },
  'thm-completely-regular-implies-regular': {
    empty: ['c', 'step 2.2 is vacuous for $C = \\varnothing$, and complete regularity itself allows that case by the constant function $1$'],
    zero: ['n', 'no numeric index occurs; the values $0$ and $1$ are function values, disposed of under endpoints'],
    one: ['c', 'step 2.1 uses the single value $f(x_0) = 1$'],
    degenerate: ['c', 'statement: the empty space and the one-point space are completely regular and regular, both conditions being vacuous or met by $U = X$, $V = \\varnothing$ as in step 3.1'],
    endpoints: ['c', 'step 1.1 cuts at the interior threshold $1/2$ and steps 2.1 and 2.2 use the endpoint values $1$ and $0$ of $[0,1]$, which lie on opposite sides of it by [L3]'],
    'nonempty-choice': ['n', 'the only object produced is the function $f$ of [A1], an instantiated existential'],
    'iff-forward': ['n', 'the statement is a one-directional implication'],
    'iff-reverse': ['c', 'the statement says explicitly that the converse is neither proved nor asserted'],
  },
  'lem-normality-via-shrinking': {
    empty: ['c', 'the final Remark records the empty cases of the corollary, $V = \\varnothing$ for $A = \\varnothing$ and $V = X$ for $D = \\varnothing$; step 5.1 covers both since [L2] gives $X \\setminus D = X$'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role: the statement is about closed sets, and no separation axiom makes points closed here'],
    degenerate: ['c', 'statement: on a space whose only closed sets are $\\varnothing$ and $X$ both conditions hold, as step 1.1 then produces $V = X$ or $V = \\varnothing$'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['n', 'the open sets in steps 1.1 and 1.2 are instantiated existentials from [A1] and from (b); nothing is selected from a family'],
    'iff-forward': ['c', 'steps 1.1, 2.1 and 3.1 give (a) implies (b)'],
    'iff-reverse': ['c', 'steps 1.2, 2.2 and 3.2 give (b) implies (a), and step 4.1 records the equivalence'],
  },
  'thm-t4-implies-t3': {
    empty: ['c', 'step 1.2 allows $C = \\varnothing$, the disjointness $\\{x\\} \\cap C = \\varnothing$ being immediate, and [A1] then supplies $V = \\varnothing$'],
    zero: ['n', 'no numeric index occurs'],
    one: ['c', 'step 1.1 is exactly the one-point case: $T_1$ makes $\\{x\\}$ closed, which is what normality is applied to in step 2.1'],
    degenerate: ['c', 'statement: a $T_4$ space with at most one point is regular vacuously, step 3.1 quantifying over pairs $(C, x)$ with $x \\notin C$'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['n', 'the two open sets of step 2.1 are an instantiated existential from [A1]'],
    'iff-forward': ['n', 'the statement is a one-directional implication'],
    'iff-reverse': ['c', 'the statement claims one direction only, and the Remark records that the converse is left open'],
  },
  'thm-completely-normal-implies-normal': {
    empty: ['c', 'step 2.1 holds when either of the disjoint closed sets is empty, the two intersections being empty either way'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role; the hypothesis is about closed sets, and $T_1$ enters only in claim 3 at step 4.1'],
    degenerate: ['c', 'statement: on a space whose only closed sets are $\\varnothing$ and $X$ the conclusion of step 3.1 is met by $U = \\varnothing$, $V = X$'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['n', 'the open sets of step 3.1 are an instantiated existential from [A1]'],
    'iff-forward': ['n', 'the three claims are one-directional implications'],
    'iff-reverse': ['c', 'the statement makes three one-directional claims, and the Remark records that neither converse is proved or asserted'],
  },
  'thm-perfectly-normal-implies-completely-normal': {
    empty: ['c', 'steps 6.2 and 6.3 are vacuous when $A$ or $B$ is empty, and step 2.1 allows the $F_\\sigma$ presentation of an empty open set, every $F_n$ being empty'],
    zero: ['c', 'step 5.1 starts both unions at $n = 0$ and the subtracted family $\\bigcup_{i \\le n} \\overline{V_i}$ at $i = 0$, so the first stage subtracts $\\overline{V_0}$ rather than nothing'],
    one: ['n', 'no singleton or one-element index set plays a distinguished role; the construction is over the whole of $\\mathbb{N}$'],
    degenerate: ['c', 'statement: for $A = B = \\varnothing$ the conclusion holds with $U = V = \\varnothing$, which steps 6.2 and 6.3 deliver vacuously'],
    endpoints: ['c', 'steps 7.1 and 7.2 turn on the comparison of the two indices at their boundary, the case $n = m$ being taken by the branch $n \\le m$ of step 7.1'],
    'nonempty-choice': ['c', 'step 4.1 is the only selection: [L1] makes each of the two families nonempty for every $n$, and [A3] supplies the sequences; the hypothesis $\\mathrm{AC}_\\omega$ is carried in the statement'],
    'iff-forward': ['n', 'the statement is a one-directional implication'],
    'iff-reverse': ['c', 'the statement is a one-directional implication, and the Remark records that the converse is not proved and not asserted'],
  },
  'thm-metric-spaces-are-completely-normal': {
    empty: ['c', 'step 1.1 disposes of $A = \\varnothing$ and of $B = \\varnothing$ separately, which is necessary because [L1] defines $d(x,S)$ only for nonempty $S$'],
    zero: ['c', 'step 2.1 excludes the radius $0$: separation gives $d(a,B) \\ne 0$ and [L1] gives $d(a,B) \\ge 0$, so $r_a > 0$, which [L4] needs'],
    one: ['n', 'no singleton plays a distinguished role; the unions in step 3.1 are indexed by the points of $A$ and of $B$'],
    degenerate: ['c', 'statement: for $A = B = \\varnothing$ step 1.1 already supplies the disjoint open sets, and a one-point metric space is covered by the same step'],
    endpoints: ['c', 'step 5.2 is the extremal comparison $r_a + s_b \\le 2\\max\\{r_a, s_b\\}$, and step 6.1 closes at the resulting equality boundary $d(a,b) < \\max\\{\\dots\\} \\le d(a,b)$'],
    'nonempty-choice': ['c', 'the statement records that nothing is selected: the radius attached to a point is determined by that point, by the other set and by $d$, so no choice principle is used at step 3.1'],
    'iff-forward': ['n', 'the statement is a one-directional implication from separatedness to separation by open sets'],
    'iff-reverse': ['c', 'the statement assumes separatedness, and the Remark records the failure direction concretely: the disjoint but non-separated pair $(0,1)$ and $[1,2)$ in $\\mathbb{R}$, where the radii would fail to be positive'],
  },
  'thm-metric-spaces-are-tychonoff-and-perfectly-normal': {
    empty: ['c', 'step 1.2 disposes of $C = \\varnothing$ in claim 1 by the constant function $1$, step 4.1 disposes of it in claim 2 by openness, and step 5.1 cites step 1.2 for claim 3; the separation is necessary because $d(x,\\varnothing)$ is undefined'],
    zero: ['c', 'step 3.3 uses the index starting at $n = 0$, where the radius is $1/(0+1) = 1$, and step 2.1 identifies the zero level set with $C$'],
    one: ['c', 'step 4.3 evaluates the truncation at the endpoint value $1$, giving $f(x_0) = \\min\\{1, r/r\\} = 1$'],
    degenerate: ['c', 'statement: for $C = X$ claim 3 is vacuous, there being no $x_0 \\notin C$; the one-point metric space is covered by the same steps 2.1 and 4.3'],
    endpoints: ['c', 'step 4.2 checks the truncation $\\min\\{1, u\\}$ at both endpoints of the two cases $u \\le 1$ and $u > 1$, including the crossing case $u \\le 1 < v$'],
    'nonempty-choice': ['c', 'the statement records that no choice principle is used: every function and every open set is written down explicitly from $d$ and $C$, and step 6.1 fixes one inducing metric for a metrizable space by instantiation'],
    'iff-forward': ['n', 'the four claims are one-directional: closed implies zero set, closed implies $G_\\delta$, and the two separation properties'],
    'iff-reverse': ['c', 'the Remark records that no converse is claimed, in particular no metrization theorem; the companion example exhibits a $G_\\delta$ subset of $\\mathbb{R}$ that is not closed'],
  },
  'thm-the-separation-implication-chain': {
    empty: ['n', 'the statement quantifies over spaces and their properties; no set-level empty case arises, each clause being discharged by citing the item that proves it'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role at this level of assembly'],
    degenerate: ['c', 'statement: a space with at most one point satisfies every property named, so every clause holds; the assembly steps 1.1 to 1.6 quote implications that are themselves vacuous there'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['c', 'step 1.1 carries $\\mathrm{AC}_\\omega$ into clause 1 unchanged, and the Remark records that clause 6 is choice free, so the one choice cost on the page is confined to the one arrow that spends it'],
    'iff-forward': ['n', 'every clause is an implication; the statement says explicitly that none is an equivalence'],
    'iff-reverse': ['c', 'the Remark names the four converses this page refutes and states that nothing is asserted about the others; the missing arrow $T_4 \\Rightarrow T_{3\\frac12}$ is excluded explicitly in the statement'],
  },
  'lem-ordinal-order-topology-is-t3': {
    empty: ['c', 'statement: for $\\gamma = 0$ the basis is empty and all four claims are vacuous, every quantifier ranging over elements of $\\gamma$'],
    zero: ['c', 'step 1.2 uses the basic set $[0,\\zeta]$, whose left endpoint is the ordinal $0$, and step 2.2 uses $S_{\\alpha^{+}} = [0,\\alpha]$'],
    one: ['c', 'step 2.3 is the singleton case, $\\gamma \\setminus \\{\\xi\\} = S_\\xi \\cup T_\\xi$, which is what makes $\\gamma$ a $T_1$ space at step 3.2'],
    degenerate: ['c', 'statement: for $\\gamma = 1$ the only basic set is $[0,0] = \\{0\\}$, which is clopen, and the Hausdorff clause of step 1.3 is vacuous'],
    endpoints: ['c', 'steps 1.1 and 1.2 handle the two one-sided tails $T_\\beta$ and $S_\\xi$; the half-open form of the basic sets is what makes both open, and the largest element of $\\gamma$, when there is one, needs no separate case because $[0,\\beta]$ is basic for every $\\beta \\in \\gamma$'],
    'nonempty-choice': ['n', 'the Remark records that no choice principle is used; every basic set in steps 1.1 to 2.3 is named outright'],
    'iff-forward': ['n', 'the four claims are one-directional statements about $\\gamma$'],
    'iff-reverse': ['c', 'the statement lists four one-directional claims, and the Remark records what is deliberately not claimed, namely normality of an ordinal space in either direction'],
  },
  'lem-the-k-topology-is-hausdorff-and-not-regular': {
    empty: ['c', 'step 1.2 covers the empty intersection case of (B2), where the two basic sets are disjoint and the condition is vacuous'],
    zero: ['c', 'the point $0$ is the distinguished point of claim 4, and step 4.1 records that $0 \\notin K$ because every element of $K$ is positive by [L4]'],
    one: ['c', 'step 6.1 fixes the single element $1/(n+1)$ of $K$ inside $(a,b)$ that the whole refutation turns on'],
    degenerate: ['c', 'step 1.2 disposes of the degenerate intersections, where $\\max\\{a,c\\} \\ge \\min\\{b,d\\}$ and the intersection is empty'],
    endpoints: ['c', 'steps 8.1 to 10.1 work inside the gap between consecutive members of $K$: $t = \\max\\{\\max\\{a,c\\}, 1/(n+2)\\}$ is the lower endpoint and $1/(n+1)$ the upper, and step 9.1 shows the open interval between them misses $K$'],
    'nonempty-choice': ['c', 'step 10.1 exhibits the witness $z$ as the midpoint of $(t, 1/(n+1))$, which is nonempty by [A1] and step 8.1, so no selection from a family is made'],
    'iff-forward': ['n', 'the four claims are one-directional'],
    'iff-reverse': ['c', 'the statement refutes regularity through one pair, and the first Remark records that no regularity at any other pair is asserted'],
  },
  'fs-every-t1-space-is-hausdorff': {
    empty: ['c', 'step 1.3 assumes $U$ and $V$ nonempty, so the empty open set is excluded from the disjointness argument rather than overlooked'],
    zero: ['n', 'no numeric index occurs'],
    one: ['c', 'step 3.1 fixes the single pair $x = 0$, $y = 1$, which is all a refutation needs'],
    degenerate: ['c', 'step 1.2 rules out the degenerate case: on a finite carrier the cofinite topology is discrete and the claim would not be refuted, so the infinitude of $\\mathbb{R}$ is proved rather than assumed'],
    endpoints: ['n', 'no ordered domain or interval occurs; the Remark records that neither the order nor the arithmetic of $\\mathbb{R}$ is used'],
    'nonempty-choice': ['n', 'no selection is made: the two points are named outright in step 3.1'],
    'iff-forward': ['n', 'the refuted claim is an implication, and a refutation needs one witness'],
    'iff-reverse': ['c', 'the statement refutes one direction, and the Remark records that the converse implication is true and is proved elsewhere on the page'],
  },
  'fs-every-normal-space-is-hausdorff': {
    empty: ['c', 'steps 1.1 and 1.2 are exactly the empty-set case: one of two disjoint closed sets must be $\\varnothing$, which is what makes the space normal'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton is closed here; step 1.1 lists the closed sets as $\\varnothing$ and $X$ only'],
    degenerate: ['c', 'statement and step 1.3: the witness is the smallest space that can fail $T_0$, a two-point indiscrete space, and the failure is exhibited at its only pair'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['n', 'the separating sets in step 1.2 are named outright'],
    'iff-forward': ['n', 'the refuted claim is an implication'],
    'iff-reverse': ['c', 'the statement refutes one direction, and the Remark records what does survive, that normality together with $T_1$ gives the whole descending chain'],
  },
  'fs-every-hausdorff-space-is-regular': {
    empty: ['n', 'no empty case arises: the witness is a fixed space and the pair $(0, K)$ is fixed, with $K$ nonempty'],
    zero: ['c', 'the point $0$ is the point of the pair, and step 1.2 records $0 \\notin K$'],
    one: ['c', 'step 2.1 uses the single pair $(K, 0)$, which suffices because regularity quantifies over all pairs'],
    degenerate: ['n', 'no degenerate parameter occurs; the witness space and the pair are fixed'],
    endpoints: ['n', 'the endpoint work sits in the cited lemma, not here; this item quotes claims 2, 3 and 4 of it'],
    'nonempty-choice': ['n', 'nothing is selected; both objects are named in [L1]'],
    'iff-forward': ['n', 'the refuted claim is an implication'],
    'iff-reverse': ['c', 'the statement refutes one direction, and the Remark records that regularity does not imply Hausdorff either, with the indiscrete witness, so neither direction holds'],
  },
  'fs-unique-sequential-limits-imply-hausdorff': {
    empty: ['c', 'step 1.2 assumes $U$ and $V$ nonempty, and step 1.1 allows $R$ to be empty when the sequence is constant with value $p$'],
    zero: ['n', 'no numeric index occurs beyond the sequence indices, which are handled under endpoints'],
    one: ['c', 'step 4.1 fixes the single alternative limit $q \\ne p$ and refutes it'],
    degenerate: ['c', 'step 3.1 records the degenerate behaviour that drives the example: every convergent sequence is eventually constant'],
    endpoints: ['c', 'step 4.1 takes the index $\\max\\{K, K\'\\}$, past both thresholds, which is where the contradiction is read off'],
    'nonempty-choice': ['c', 'no choice principle is used: [L2] records that the two-set countable union is the padded instance and is choice free, and every set in steps 1.1 to 4.1 is named outright'],
    'iff-forward': ['n', 'the refuted claim is an implication'],
    'iff-reverse': ['c', 'the statement refutes one direction, and the Remark records that the converse holds, in a Hausdorff space limits are unique'],
  },
  'ex-sierpinski-space-is-t0-normal-and-not-regular': {
    empty: ['c', 'steps 2.2 and 3.1 are the empty-set case: one of two disjoint closed sets must be $\\varnothing$, which is exactly why the space is normal'],
    zero: ['n', 'no numeric index occurs'],
    one: ['c', 'step 1.1 lists $\\{a\\}$, the only nonempty proper closed set, and step 2.3 uses it as the closed set that cannot be separated from $b$'],
    degenerate: ['c', 'statement: the carrier has exactly two points, which is the smallest space separating $T_0$ from $T_1$'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['n', 'every open and closed set is listed outright in steps 1.1 and 1.3'],
    'iff-forward': ['n', 'the four claims are one-directional statements about one space'],
    'iff-reverse': ['c', 'the statement makes four one-directional claims, and the first Remark records the direction left open here, naming the later item that refutes it'],
  },
  'ex-the-particular-point-topology-in-the-separation-hierarchy': {
    empty: ['c', 'step 1.1 excludes $\\varnothing$ explicitly, every *nonempty* open set containing $p$; the empty set is the one open set that does not'],
    zero: ['n', 'no numeric index occurs'],
    one: ['c', 'step 2.1 uses the singleton $\\{x\\}$, closed because it misses $p$, as the closed set of the regularity failure'],
    degenerate: ['c', 'statement: the thresholds are stated and used, two points for clauses 2 and 3 at steps 1.3 and 3.1 and three for clause 4 at step 1.4, and the two-point case is identified with Sierpinski space, which is normal'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['n', 'the points $x$ and $y$ of steps 1.3 and 1.4 are instantiated from the cardinality hypothesis; no family is selected from'],
    'iff-forward': ['n', 'the four claims are one-directional'],
    'iff-reverse': ['c', 'the statement makes four one-directional claims, and the Remarks record what is not claimed, in particular that $\\overline{\\{p\\}} = X$ makes the particular point dense rather than separating'],
  },
  'ex-the-cofinite-topology-in-the-separation-hierarchy': {
    empty: ['c', 'step 1.3 assumes $U$ and $V$ nonempty; the empty open set is excluded there rather than overlooked'],
    zero: ['n', 'no numeric index occurs'],
    one: ['c', 'step 2.2 uses the singleton $\\{y\\}$, closed by [A1], as the closed set of the regularity failure'],
    degenerate: ['c', 'the statement carries the infinitude hypothesis, and the second Remark records the degenerate case: on a finite set the cofinite topology is discrete and satisfies every axiom'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['c', 'step 1.2 needs three distinct points and gets them from [L3], which derives them from infinitude rather than selecting them'],
    'iff-forward': ['n', 'the two claims are one-directional statements about one family of spaces'],
    'iff-reverse': ['c', 'the statement makes two one-directional claims, and the third Remark records the direction that is true, that every $T_1$ topology on the set contains this one'],
  },
  'ex-the-cocountable-topology-in-the-separation-hierarchy': {
    empty: ['c', 'step 1.4 assumes $U$ and $V$ nonempty, and step 1.3 allows the set $R$ to be empty for a constant sequence'],
    zero: ['n', 'no numeric index occurs beyond sequence indices, handled under endpoints'],
    one: ['c', 'step 2.3 uses the singleton $\\{v\\}$, closed because it is at most countable'],
    degenerate: ['c', 'the statement fixes the uncountable carrier $\\mathbb{R}$, and the third Remark records the degenerate case: on an at most countable set the cocountable topology is discrete'],
    endpoints: ['c', 'step 3.1 takes an index at least both $K$ and $K\'$, past both thresholds, to reach the contradiction'],
    'nonempty-choice': ['c', 'no choice principle is used: [L3] records that the two-set countable union is the padded, choice-free instance, and the three points of step 1.2 are named outright'],
    'iff-forward': ['n', 'the three claims are one-directional statements about one space'],
    'iff-reverse': ['c', 'the statement makes three one-directional claims, and the first Remark records the direction that fails to carry information, uniqueness of sequential limits'],
  },
  'ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy': {
    empty: ['c', 'step 1.7 is the empty-set case for the indiscrete space, where the only closed set disjoint from a point is $\\varnothing$; step 2.2 shows a separated pair there always has an empty member'],
    zero: ['n', 'no numeric index occurs; the $G_\\delta$ presentations of steps 2.1 and 4.1 use the constant sequence'],
    one: ['c', 'step 1.1 uses the singletons of the discrete space, which are closed and open'],
    degenerate: ['c', 'statement: both extremes are degenerate on purpose, the discrete topology satisfying everything and the two-point indiscrete topology failing every numbered axiom while satisfying every adjective'],
    endpoints: ['n', 'no ordered domain occurs; the target $[0,1]$ enters only through the constant functions of steps 1.4 and 1.7'],
    'nonempty-choice': ['n', 'every separating set and every function is named outright in steps 1.2, 1.4, 1.7, 3.2 and 4.1'],
    'iff-forward': ['n', 'the two claims are property lists for two fixed spaces'],
    'iff-reverse': ['c', 'the statement is a property list for two fixed spaces, and the second Remark records the reading they refute: no unnumbered adjective implies any separation of points'],
  },
  'ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets': {
    empty: ['c', 'the statement restricts to nonempty closed $A$, because [A1] defines $d(x,A)$ only for nonempty $A$; the empty closed set is disposed of in the general theorem this item specialises'],
    zero: ['c', 'step 2.3 computes $d(x,\\{0\\}) = |x|$ and the index starts at $n = 0$, where the radius is $1$, as the first Remark records'],
    one: ['c', 'step 2.3 is the one-point case $A = \\{0\\}$, the standard presentation of a point as a $G_\\delta$'],
    degenerate: ['c', 'step 1.3 is the degenerate stretch of the distance function, $d(x,[0,1]) = 0$ for $x$ inside the interval'],
    endpoints: ['c', 'steps 1.2 and 1.4 are exactly the two endpoint regimes of $[0,1]$, minimised at $a = 0$ and at $a = 1$, and step 2.2 reads off the open envelope $(-\\varepsilon, 1 + \\varepsilon)$'],
    'nonempty-choice': ['c', 'nothing is selected: each infimum in steps 1.2 to 1.4 is attained at a named point and shown to be a lower bound by [A1]'],
    'iff-forward': ['n', 'the two claims are one-directional: closed implies zero set and closed implies $G_\\delta$'],
    'iff-reverse': ['c', 'step 1.5 refutes the converse with $(0,1)$, a $G_\\delta$ that is not closed'],
  },
  'ex-the-ordinal-spaces-omega-plus-one-and-omega-one': {
    empty: ['n', 'no empty case arises: both spaces are nonempty ordinals and every set constructed is a nonempty initial segment or range'],
    zero: ['c', 'step 2.1 treats $\\xi = 0$ separately from a successor, $\\{0\\} = [0,0]$ being basic open, and step 1.2 takes $\\alpha := 0$ in the initial-segment case'],
    one: ['c', 'step 2.1 shows every point of $\\omega$ is isolated, its singleton being basic open'],
    degenerate: ['c', 'the statement works the two smallest interesting ordinal spaces, and the first Remark records the degenerate range: every ordinal at most $\\omega$ carries the discrete topology'],
    endpoints: ['c', 'steps 1.2 and 2.2 work at the top point $\\omega$ of $\\omega + 1$, and steps 3.2 and 4.2 at the bound $\\alpha^{+}$ inside $\\omega_1$, which is where the cofinality claim is refuted'],
    'nonempty-choice': ['c', 'clause 3 spends $\\mathrm{AC}_\\omega$ at step 2.3 through [L4], and the second Remark records that this is the only choice used; the bound $\\alpha$ is produced by the cited theorem rather than selected here'],
    'iff-forward': ['n', 'the four clauses are one-directional statements about two spaces'],
    'iff-reverse': ['c', 'step 3.1 supplies the negative half of clause 2, that the sequence converges to no other point, so the limit claim is not read as an equivalence'],
  },
  'cex-the-deleted-tychonoff-plank-is-not-normal': {
    empty: ['n', 'no empty case arises: $A$ and $B$ are nonempty by construction and every basic box used is nonempty'],
    zero: ['c', 'step 6.1 takes $\\alpha := 0$ in the case $P = [0,\\omega_1] = W$, and step 11.1 takes $m := 0$ in the case $Q\' = [0,\\omega] = Z$'],
    one: ['c', 'step 12.1 exhibits the single point $z = (\\alpha^{+}, m^{+})$ that lies in both open sets'],
    degenerate: ['c', 'step 1.2 records the degenerate reading that makes $A$ and $B$ disjoint: every point of $A$ has second coordinate in $\\omega$ and every point of $B$ has second coordinate $\\omega$'],
    endpoints: ['c', 'the whole argument is about the two top endpoints: step 6.1 uses that $\\omega_1$ is the largest element of $W$, step 11.1 that $\\omega$ is the largest element of $Z$, and the deleted corner is the pair of them'],
    'nonempty-choice': ['c', 'step 8.1 avoids choice by taking the *least* $\\alpha_n$, and the only choice principle is $\\mathrm{AC}_\\omega$ inside [L3] at step 9.1, which the statement declares'],
    'iff-forward': ['n', 'the refuted claim is a universal implication and one witness refutes it'],
    'iff-reverse': ['c', 'the statement fixes what is not claimed: nothing about normality of $W \\times Z$ itself, nor about heredity or productivity in either direction'],
  },
  'lem-subnets-preserve-eventual-properties-and-limits': {
    empty: ['n', 'no set is asserted nonempty or empty: $S$ is arbitrary and both index sets are nonempty by the definition of a directed preorder'],
    zero: ['n', 'no numeric index occurs; the index sets are arbitrary directed preorders'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: the identity map exhibits every net as a subnet of itself, and step 2.1 then reads as the trivial inclusion'],
    endpoints: ['c', 'step 2.1 uses the threshold $e_0$ supplied by eventual cofinality, which is the only extremal index the argument needs'],
    'nonempty-choice': ['n', 'the thresholds in steps 1.1 and 2.1 are instantiated existentials from the hypothesis and from [A1]'],
    'iff-forward': ['n', 'the statement is a one-directional preservation claim'],
    'iff-reverse': ['c', 'the statement claims preservation only, and no reversal holds: a subnet may converge where the net does not, which is the content of the cluster-point theorem on the same page'],
  },
  'thm-net-cluster-point-iff-convergent-subnet': {
    empty: ['c', 'the index set $E$ of step 1.1 is nonempty because $X$ is a neighbourhood of $p$ and the net is frequently in it, which step 2.2 uses through the pair $(d_0, X)$'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: a convergent net is its own subnet under the identity, so a limit is a cluster point, the degenerate instance of the forward direction'],
    endpoints: ['c', 'step 1.2 takes a common upper bound of the two thresholds $e_0$ and $e_1$, which is where the converse is read off'],
    'nonempty-choice': ['c', 'step 2.1 needs a point of $N \\cap M$ and gets it from frequent membership by [A1] and [A2]; the witness is carried in the index of $E$, so no choice function is built'],
    'iff-forward': ['c', 'steps 1.1 and 2.1 to 2.3 construct a subnet converging to a cluster point'],
    'iff-reverse': ['c', 'step 1.2 shows a convergent subnet makes the point a cluster point of the original net'],
  },
  'thm-closure-characterised-by-nets': {
    empty: ['c', 'the index set of step 1.1 is nonempty exactly because $p \\in \\overline{A}$ makes every neighbourhood meet $A$ by [L1]; for $A = \\varnothing$ the closure is empty and the statement is vacuous'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: for $p \\in A$ the constant net witnesses the forward direction, the degenerate case of step 1.1'],
    endpoints: ['c', 'step 2.2 uses the pair with first coordinate exactly $N$ as the threshold, which is the extremal index of the construction'],
    'nonempty-choice': ['c', 'step 2.1 selects a point of $(N \\cap M) \\cap A$, nonempty by [L1] and [L2]; the point is carried in the index, so no choice principle is used'],
    'iff-forward': ['c', 'steps 1.1, 2.1 and 2.2 construct a net in $A$ converging to a closure point'],
    'iff-reverse': ['c', 'step 1.2 shows a convergent net in $A$ puts its limit in the closure'],
  },
  'thm-continuity-characterised-by-nets': {
    empty: ['c', 'step 2.1 needs $A = X \\setminus f^{-1}[V]$ to meet every neighbourhood of $p$, which it derives from the failure of continuity rather than assuming; if $A$ were empty $f^{-1}[V]$ would be a neighbourhood'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: the constant net converging to $p$ makes the forward direction trivial there, and the pointwise form covers a one-point domain'],
    endpoints: ['c', 'step 1.1 uses the threshold past which the net lies in $f^{-1}[V]$, which is the only extremal index'],
    'nonempty-choice': ['c', 'the net of step 2.1 comes from [A2], whose construction carries its witness in the index, so no choice principle is used'],
    'iff-forward': ['c', 'step 1.1 gives continuity implies net preservation'],
    'iff-reverse': ['c', 'steps 1.2, 2.1, 3.1 and 4.1 give the converse by contradiction'],
  },
  'thm-hausdorff-iff-net-limits-are-unique': {
    empty: ['c', 'the index set of step 1.2 is nonempty because in a non-Hausdorff space every neighbourhood of $p$ meets every neighbourhood of $q$, so some triple exists'],
    zero: ['n', 'no numeric index occurs'],
    one: ['c', 'step 2.1 concludes $p = q$, the one-limit case, which is the content of uniqueness'],
    degenerate: ['c', 'statement: a space with at most one point is Hausdorff and every net in it has exactly one limit, so both sides hold'],
    endpoints: ['c', 'step 1.1 takes an index after both thresholds, which is where the contradiction with disjointness appears'],
    'nonempty-choice': ['c', 'step 2.2 needs a point in $U \\cap V$ for each pair of neighbourhoods, supplied by the failure of the Hausdorff condition and carried in the index of the triple, so no choice function is built'],
    'iff-forward': ['c', 'steps 1.1 and 2.1 give Hausdorff implies at most one limit'],
    'iff-reverse': ['c', 'steps 1.2 and 2.2 give the contrapositive of the converse, a net with two distinct limits in a non-Hausdorff space'],
  },
  'lem-tail-filter-preserves-net-convergence-and-cluster-points': {
    empty: ['c', 'no tail is empty, each $T_d$ containing $x_d$, which is what makes the tail filter proper and is recorded in the cited definition'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: for a constant net the tail filter is the principal filter at that value, and both equivalences read off directly'],
    endpoints: ['c', 'step 1.2 identifies frequent membership with meeting every tail $T_d$, the tails being the extremal members of the filter base'],
    'nonempty-choice': ['n', 'nothing is selected; step 2.1 argues from the containment of a tail in each filter member'],
    'iff-forward': ['c', 'step 1.1 gives net convergence implies filter convergence, and step 2.1 the cluster half in the same direction'],
    'iff-reverse': ['c', 'steps 1.1 and 2.1 are read in the other direction as well, [A1] being an equivalence between eventual membership and filter membership'],
  },
  'lem-filter-derived-net-preserves-convergence-and-cluster-points': {
    empty: ['c', 'no filter member is empty by (F2), which is what makes the index set of the derived net a directed preorder and is used when step 1.1 picks a point of $N$'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: for a principal filter the derived net is eventually constant at the generating point, and both equivalences read off directly'],
    endpoints: ['c', 'step 2.1 uses the threshold index $(A,x)$ and then varies only the second coordinate, which is the extremal case that forces $A \\subseteq N$'],
    'nonempty-choice': ['c', 'step 1.1 chooses a point of the filter member $N$, nonempty by (F2); the point is carried in the index, so no choice function is built'],
    'iff-forward': ['c', 'step 1.1 gives filter convergence implies convergence of the derived net'],
    'iff-reverse': ['c', 'step 2.1 gives the converse through upward closure, and step 3.1 does both directions for cluster points'],
  },
  'thm-net-filter-convergence-dictionary': {
    empty: ['n', 'no set is asserted empty or nonempty at this level of assembly; the two cited lemmas carry those cases'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: the degenerate instances are the constant net and the principal filter, disposed of in the two cited lemmas'],
    endpoints: ['n', 'no ordered domain or interval occurs; thresholds are handled in the cited lemmas'],
    'nonempty-choice': ['n', 'no selection is made here; steps 1.1 and 1.2 apply the two lemmas'],
    'iff-forward': ['c', 'step 1.1 applies [L1] to a net, giving the net-to-filter direction'],
    'iff-reverse': ['c', 'step 1.2 applies [L2] to a filter, giving the filter-to-net direction, so the dictionary preserves and reflects'],
  },
  'thm-universal-nets-and-ultrafilters-correspond': {
    empty: ['c', 'the derived net of step 1.2 is indexed by pairs whose first coordinate is a nonempty ultrafilter member, so no empty index arises'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role; the subsets $S$ range over all of $\\mathcal{P}(X)$'],
    degenerate: ['c', 'statement: a constant net is universal and its tail filter is the principal ultrafilter at that point, the degenerate instance of both directions'],
    endpoints: ['c', 'step 1.2 uses the index $(S,a)$ as the threshold, past which every value lies in $S$'],
    'nonempty-choice': ['c', 'step 1.2 needs a point $a \\in S$, supplied by $S \\in \\mathcal{U}$ and (F2); the point is carried in the index, so no choice function is built'],
    'iff-forward': ['c', 'step 1.1 gives universal implies ultrafilter tail, via [A1] and [A2]'],
    'iff-reverse': ['c', 'step 1.1 read backwards gives the converse, and steps 1.2 and 2.1 add that the net derived from an ultrafilter is universal'],
  },
  'lem-ultrafilter-cluster-points-are-limits': {
    empty: ['c', 'step 2.1 turns on $N \\cap (X \\setminus N) = \\varnothing$, the empty intersection that contradicts clusterhood'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: for a principal ultrafilter at $p$ the conclusion is immediate, every neighbourhood of $p$ containing $p$'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['n', 'nothing is selected: step 2.1 uses the dichotomy of [A2] on the single set $N$'],
    'iff-forward': ['n', 'the statement is a one-directional implication from cluster point to limit'],
    'iff-reverse': ['c', 'the reverse implication, that a limit is a cluster point, holds for every filter and is recorded in the cited definition rather than claimed here'],
  },
  'thm-compactness-via-nets-filters-and-ultrafilters': {
    empty: ['c', 'the empty space is compact and satisfies conditions 2 to 5 vacuously, there being no net and no filter on the empty set; step 1.1 quantifies over filters, of which there are none there'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: on a one-point space every net converges and the only filter is principal, so all five conditions hold'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['c', 'step 1.1 instantiates a point of the intersection of closures, and steps 1.5 and 1.4 spend the ultrafilter lemma through [L4], which the statement declares as its hypothesis'],
    'iff-forward': ['c', 'steps 1.1 and 2.1 give 1 implies 4, step 1.2 gives 4 implies 2 and 2 iff 3, step 1.4 gives 4 implies 5'],
    'iff-reverse': ['c', 'step 1.3 gives 2 implies 4 and steps 1.5 and 2.2 give 5 implies 1, closing the cycle at step 3.1'],
  },
  'lem-universal-net-cluster-points-are-limits': {
    empty: ['c', 'step 2.1 turns on the empty intersection $N \\cap (X \\setminus N)$, which is what contradicts frequent membership'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: a constant net is universal and converges to its value, the degenerate instance'],
    endpoints: ['c', 'step 2.1 takes an index after both thresholds, the eventual one for $X \\setminus N$ and the frequent one for $N$'],
    'nonempty-choice': ['n', 'nothing is selected; universality is applied to the single set $N$'],
    'iff-forward': ['n', 'the statement is a one-directional implication'],
    'iff-reverse': ['c', 'the reverse implication, that a limit is a cluster point, holds for every net and is recorded in the cited definition'],
  },
  'lem-continuous-images-of-universal-nets-are-universal': {
    empty: ['c', 'step 1.1 covers $S = \\varnothing$ and $S = Y$: the preimages are $\\varnothing$ and $X$, and [A1] applies to them as to any subset'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: the first claim assumes nothing about $f$, so a constant map is covered, its image net being constant and hence universal'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['n', 'nothing is selected; step 1.1 applies universality to the preimage of $S$'],
    'iff-forward': ['n', 'both claims are one-directional'],
    'iff-reverse': ['c', 'the statement claims one direction only: an image net can be universal without the original being so, and nothing above asserts otherwise'],
  },
  'lem-every-net-has-a-universal-subnet': {
    empty: ['c', 'no member of $\\mathcal{U}$ is empty by (F2), which is what makes $A \\cap B \\cap T_h$ nonempty in step 2.1 and $S \\cap T_{d_0}$ nonempty in step 2.3'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: a net that is already universal has itself as a universal subnet, the degenerate instance'],
    endpoints: ['c', 'step 2.2 uses the index $(d_0, X)$ as the threshold that makes $\\phi$ eventually cofinal, $X$ being the largest member of the ultrafilter'],
    'nonempty-choice': ['c', 'the ultrafilter of step 1.1 is the one place a choice principle enters, through the ultrafilter lemma declared in the statement; the points chosen in steps 2.1 and 2.3 are single instantiations from nonempty ultrafilter members'],
    'iff-forward': ['n', 'the statement is a one-directional existence claim'],
    'iff-reverse': ['c', 'the statement is an existence claim: every net trivially has subnets, and its content is that one of them can be made universal'],
  },
  'cor-compactness-via-universal-nets': {
    empty: ['c', 'the empty space is compact and has no net at all, so the right-hand side holds vacuously; steps 1.1 and 1.2 quantify over nets'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: on a one-point space every net is universal and converges, so both sides hold'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['c', 'the ultrafilter lemma is declared in the statement and is spent inside [L2] at step 1.2, where the universal subnet is produced'],
    'iff-forward': ['c', 'step 1.1 gives compact implies every universal net converges'],
    'iff-reverse': ['c', 'steps 1.2 and 2.1 give the converse through the universal subnet and the cluster-point characterisation'],
  },
  'thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma': {
    empty: ['c', 'the empty index set gives the one-point product, which is compact; an empty factor makes the product empty, which is compact as well, and step 3.1 quantifies over universal nets, of which there are then none'],
    zero: ['n', 'no numeric index occurs'],
    one: ['c', 'step 2.2 restricts to the finitely many coordinates a basic neighbourhood constrains, and the single-factor case is the instance $|J| = 1$'],
    degenerate: ['c', 'statement: for one factor the theorem is the hypothesis, and step 1.1 then reads as the compactness of that factor'],
    endpoints: ['c', 'step 2.2 takes one index after the finitely many coordinate thresholds, which is where the product convergence is read off'],
    'nonempty-choice': ['c', 'step 2.1 is the point of the argument: uniqueness of the coordinate limits, by [L3], *defines* the limit point, so no choice function over the index set is needed; the ultrafilter lemma is declared in the statement and is spent inside [L2]'],
    'iff-forward': ['n', 'the statement is a one-directional implication'],
    'iff-reverse': ['c', 'the statement claims compactness of the product only, and the companion remark records that the relative strength of the two hypotheses is not asserted'],
  },
  'thm-first-countable-frechet-urysohn-sequential-hierarchy': {
    empty: ['c', 'step 1.2 covers $C = \\varnothing$, whose sequential closure is empty, so the implication is vacuous there'],
    zero: ['n', 'no numeric index occurs'],
    one: ['c', 'step 1.2 uses the constant sequence, the one-term-repeated case, for the inclusion $C \\subseteq \\operatorname{seqcl}(C)$'],
    degenerate: ['c', 'statement: a discrete space is first countable and both conclusions are immediate there, every set being closed'],
    endpoints: ['n', 'no ordered domain or interval occurs'],
    'nonempty-choice': ['c', 'the first implication carries $\\mathrm{AC}_\\omega$ into the statement through [L1]; the second is a theorem of ZF, as step 1.2 and step 2.1 use only the constant sequence and the hypothesis'],
    'iff-forward': ['n', 'both implications are one-directional and the statement says so'],
    'iff-reverse': ['c', 'the statement asserts two implications and no converse, and the companion page exhibits both failures: the sequential fan is Frechet-Urysohn and not first countable, the Arens space sequential and not Frechet-Urysohn'],
  },
  'fs-every-subnet-of-a-sequence-is-a-subsequence': {
    empty: ['n', 'no empty case arises: the witness is a fixed sequence on a fixed nonempty index set'],
    zero: ['c', 'step 1.1 defines $\\phi(0) = 0$ separately, which is what creates the repetition $y_0 = y_1$'],
    one: ['c', 'step 2.1 uses the single repeated value at indices $0$ and $1$ to defeat injectivity'],
    degenerate: ['n', 'no degenerate parameter occurs; the index map is exhibited outright'],
    endpoints: ['c', 'step 1.1 checks eventual cofinality at the threshold $n + 1$, where $\\phi(k) = k - 1 \\ge n$'],
    'nonempty-choice': ['n', 'nothing is selected; the index map is defined by cases'],
    'iff-forward': ['n', 'the refuted claim is a universal implication and one witness refutes it'],
    'iff-reverse': ['c', 'the statement refutes one direction; the converse is true and not at issue, every subsequence being a subnet because a strictly increasing index map is eventually cofinal by [A2]'],
  },
  'ex-neighbourhood-indexed-net-converging-to-a-closure-point': {
    empty: ['c', 'step 1.1 builds a nonempty index set exactly because every neighbourhood of $p$ meets $A$ by [L1]; for $A = \\varnothing$ no such $p$ exists'],
    zero: ['n', 'no numeric index occurs'],
    one: ['n', 'no singleton plays a distinguished role'],
    degenerate: ['c', 'statement: for $p \\in A$ the pairs with second coordinate $p$ are available and the net is eventually at $p$'],
    endpoints: ['c', 'step 2.2 uses any pair with first coordinate $N$ as the threshold for eventual membership in $N$'],
    'nonempty-choice': ['c', 'step 2.1 takes a point of $(N \\cap M) \\cap A$, nonempty by [L1] and [L2], and carries it in the index, so no choice function is built'],
    'iff-forward': ['n', 'the statement is a construction, not a biconditional'],
    'iff-reverse': ['c', 'the statement is a construction, and the reverse reading, that such a net forces $p \\in \\overline{A}$, is the cited closure characterisation rather than a claim made here'],
  },
  'ex-finite-subset-net-for-unordered-real-summation': {
    empty: ['c', 'step 1.1 uses $\\varnothing \\in \\operatorname{Fin}(I)$ to make the index set nonempty, and $s_\\varnothing = 0$ is the empty sum'],
    zero: ['c', 'step 1.1 starts the net at $\\varnothing$, whose sum is $0$, and for $I = \\varnothing$ the net is constant at $0$'],
    one: ['c', 'step 1.2 reads the singleton stages, where the net value is $a_i$, the first nonconstant values'],
    degenerate: ['c', 'statement: for a finite $I$ the net has a largest index $I$ itself, so it converges to the finite sum'],
    endpoints: ['n', 'no ordered domain or interval occurs; the order on the index set is inclusion'],
    'nonempty-choice': ['n', 'no selection is made: the upper bound of two finite sets in step 1.1 is their union'],
    'iff-forward': ['n', 'the item is a construction and a definition of summability, not a biconditional'],
    'iff-reverse': ['c', 'the statement is a construction and a definition of summability; the equivalence with absolute convergence is the theorem that follows this item'],
  },
  'thm-unordered-summability-of-real-families': {
    empty: ['c', 'the statement covers $S = \\varnothing$ through its finite-enumeration clause: every $a_i$ is then zero, the net is constant at $0$ and the empty sum is $0$'],
    zero: ['c', 'indices outside $S$ contribute zero, which step 1.2 uses explicitly, and the level sets of step 2.1 are taken over $a_i^{+} \\ge 1/n$ with $n \\ge 1$'],
    one: ['c', 'step 2.1 runs over $n \\ge 1$, the first level set being $a_i^{+} \\ge 1$'],
    degenerate: ['c', 'statement: a finite support is admitted explicitly, the right-hand side then reading as the finite sum rather than a series'],
    endpoints: ['c', 'step 1.1 fixes the finite set $F_0$ past which the partial sums are bounded, and step 1.2 fixes the initial segment past which the absolute tail is below $\\varepsilon$'],
    'nonempty-choice': ['c', 'the only choice is $\\mathrm{AC}_\\omega$ inside [L1] at step 2.1, used to make the union of the countably many finite level sets at most countable; the statement carries that hypothesis'],
    'iff-forward': ['c', 'steps 1.1, 2.1 and 2.2 give convergence of the net implies countable support and absolute convergence'],
    'iff-reverse': ['c', 'step 1.2 gives the converse, and step 3.1 adds the enumeration independence'],
  },
  'ex-free-ultrafilter-converging-in-a-convergent-sequence-space': {
    empty: ['c', 'step 2.1 needs $B \\cap \\mathbb{N} \\ne \\varnothing$ for membership in $\\mathcal{U}^X$, and step 4.1 uses that $\\{\\infty\\} \\cap \\mathbb{N} = \\varnothing$ to exclude the point at infinity from the ultrafilter'],
    zero: ['n', 'no distinguished numeric index occurs; the tails $T_N$ run over all $N$'],
    one: ['c', 'step 1.1 shows no singleton lies in $\\mathcal{U}$, since $\\{k\\} \\cap T_{k+1} = \\varnothing$, which is what freeness means'],
    degenerate: ['c', 'statement: the space is the one-point extension of a discrete space, the smallest setting in which a free ultrafilter can converge'],
    endpoints: ['c', 'step 3.1 uses the basic neighbourhoods $U_N$, whose traces on $\\mathbb{N}$ are exactly the tails, so convergence is read at the top point $\\infty$'],
    'nonempty-choice': ['c', 'the ultrafilter lemma is declared in the statement and spent at step 1.1; nothing else is selected'],
    'iff-forward': ['n', 'the item is a construction, not a biconditional'],
    'iff-reverse': ['c', 'no converse is claimed: nothing here says every ultrafilter on $X$ converging to $\\infty$ is free, and step 4.1 only shows this one is'],
  },
  'ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence': {
    empty: ['n', 'no empty case arises: the cube and the sequence are fixed and both factors are nonempty'],
    zero: ['c', 'step 1.2 assigns the value $0$ off the chosen subsequence indices, which is what makes $r$ a total function on $\\mathbb{N}$'],
    one: ['c', 'step 2.1 uses the single coordinate $r$ to defeat convergence of the subsequence'],
    degenerate: ['c', 'statement: each factor is the two-point discrete space, the smallest nondegenerate compact Hausdorff space'],
    endpoints: ['c', 'step 2.1 reads the alternation at even and odd $j$, the two extremes of the coordinate values'],
    'nonempty-choice': ['c', 'the ultrafilter lemma is declared and spent through [L2] and [L3]; the point $r$ of step 1.2 is defined by cases, not selected'],
    'iff-forward': ['n', 'the item is a construction exhibiting one space and one sequence'],
    'iff-reverse': ['c', 'the statement is a construction, and the reverse reading is refuted rather than asserted: the sequence has a convergent subnet and no convergent subsequence'],
  },
  'ex-cocountable-closure-detected-by-a-net-not-a-sequence': {
    empty: ['n', 'no empty case arises: $A = [0,1]$ is uncountable by [L2] and every neighbourhood of $2$ is cocountable'],
    zero: ['n', 'no numeric index occurs'],
    one: ['c', 'step 1.2 uses the single point $2$ and the at most countable range of the sequence, whose complement is a neighbourhood of $2$'],
    degenerate: ['c', 'statement: the example is degenerate on purpose, $2 \\notin A$ while $2 \\in \\overline{A}$, which is what sequences cannot see'],
    endpoints: ['c', 'the point $p = 2$ sits outside the closed interval $[0,1]$, and step 1.1 needs only that every cocountable set meets it'],
    'nonempty-choice': ['c', 'step 1.1 obtains the net from [L4], whose construction carries its witness in the index; no choice principle is used'],
    'iff-forward': ['n', 'the item is a construction, not a biconditional'],
    'iff-reverse': ['c', 'step 1.2 supplies the negative half, that no sequence in $A$ converges to $2$, so the two halves are not read as one equivalence'],
  },
  'ex-sequential-fan-is-frechet-urysohn-not-first-countable': {
    empty: ['c', 'step 1.1 covers a spoke meeting $A$ in the empty set by setting the threshold to $0$ there'],
    zero: ['c', 'step 1.1 uses the threshold $0$ on a spoke disjoint from $A$, and step 1.2 forms $g(k) = f_k(k) + 1$, so the diagonal threshold is strictly above the base one'],
    one: ['c', 'step 2.2 defeats each candidate base member $B_k$ with the single point $(k, f_k(k))$'],
    degenerate: ['c', 'statement: every point other than the apex is isolated, so the only nondegenerate closure point is the apex, which steps 1.1 and 2.1 treat'],
    endpoints: ['c', 'step 1.1 takes the maximum of the finitely many second coordinates on each spoke, the extremal value that defines the threshold'],
    'nonempty-choice': ['c', 'no choice principle is used: the threshold functions of steps 1.1 and 1.2 are defined canonically by maxima and least elements, using [L1]'],
    'iff-forward': ['n', 'the two claims are one-directional properties of one space'],
    'iff-reverse': ['c', 'the statement lists two one-directional properties, and the space is the witness that the first-countability implication does not reverse'],
  },
  'ex-arens-space-is-sequential-not-frechet-urysohn': {
    empty: ['c', 'step 1.2 covers a row meeting $C$ in the empty set, whose threshold is then $0$, and it excludes the finitely many rows whose centres lie in $C$'],
    zero: ['c', 'step 1.1 puts the threshold $0$ on every unvisited row, so the constructed neighbourhood omits the whole sequence'],
    one: ['c', 'step 1.1 defeats a sequence that visits a single row infinitely often by a neighbourhood omitting that one row'],
    degenerate: ['c', 'statement: the isolated points are the doubly indexed ones, so the only closure points needing work are the row centres and the apex, which steps 1.2 and 2.2 treat'],
    endpoints: ['c', 'steps 1.1 and 1.2 take the maximum of the finitely many second coordinates on a row, the extremal value that defines a disjoint tail'],
    'nonempty-choice': ['c', 'steps 1.1 and 1.2 use no choice principle: every threshold is a maximum and every listing is by least elements, using [L2]'],
    'iff-forward': ['n', 'the two claims are one-directional properties of one space'],
    'iff-reverse': ['c', 'the statement lists two one-directional properties, and the space is the witness that sequential does not imply Frechet-Urysohn; the reverse implication is the theorem on the main page'],
  },
};

// ---------------------------------------------------------------- extraction
// These four helpers mirror tools/proof-contract.mjs exactly.
function split(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return match ? { fm: match[1], body: match[2] } : { fm: '', body: source };
}
function sectionText(body, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = body.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, 'm'));
  return match?.[1] ?? '';
}
function factsByLabel(body) {
  const facts = new Map();
  for (const paragraph of sectionText(body, 'Facts & Assumptions').split(/\n\s*\n/)) {
    const match = paragraph.trim().match(/^\[([FAL]\d+)\]\s*([\s\S]*)$/);
    if (!match) continue;
    const links = [...paragraph.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((link) => link[1]);
    facts.set(match[1], { label: match[1], text: paragraph, links });
  }
  return facts;
}
function numberedSteps(body) {
  const steps = new Map();
  for (const section of ['Proof', 'Refutation', 'Counterexample', 'Verification']) {
    for (const line of sectionText(body, section).split(/\r?\n/)) {
      const match = line.match(/^(\d+\.\d+)\s+(.+)$/);
      if (match) steps.set(match[1], { id: match[1], text: match[2] });
    }
  }
  return steps;
}
function explicitTokens(text) {
  const out = new Set();
  for (const match of text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)) out.add(match[1] ?? match[2]);
  return out;
}
const normalise = (value) => value.replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim();

function licensingSection(id) {
  const { body } = split(fs.readFileSync(`items/${id}.md`, 'utf8'));
  for (const name of SOURCE_SECTIONS) {
    const text = sectionText(body, name);
    if (text) return { name, text };
  }
  return { name: 'Statement', text: body };
}

// ---------------------------------------------------------------- generation
const scope = [];
const contracts = {};
const problems = [];
const sectionCache = new Map();

const manifest = JSON.parse(fs.readFileSync(SCOPE_FILE, 'utf8'));
for (const id of manifest.flatMap((page) => page.items.map((item) => item.id))) {
  const { body } = split(fs.readFileSync(`items/${id}.md`, 'utf8'));
  const facts = factsByLabel(body);
  const steps = numberedSteps(body);
  if (!steps.size) continue;
  scope.push(id);

  const citations = [];
  for (const fact of facts.values()) {
    const uses = [...steps.values()].filter((step) => explicitTokens(step.text).has(fact.label)).map((step) => step.id);
    if (!uses.length) problems.push(`${id}: ${fact.label} is never cited by a numbered step`);
    for (const target of new Set(fact.links)) {
      if (!sectionCache.has(target)) sectionCache.set(target, licensingSection(target));
      const section = sectionCache.get(target);
      const key = `${id}|${fact.label}|${target}`;
      const quote = QUOTE_OVERRIDE[key] ?? QUOTES[target];
      if (!quote) problems.push(`${key}: NO QUOTE`);
      else if (!normalise(section.text).includes(normalise(quote))) problems.push(`${key}: quote absent from ${target} ${section.name}`);
      citations.push({
        fact: fact.label,
        source: target,
        source_section: section.name,
        quote: normalise(quote ?? ''),
        uses,
      });
    }
  }

  const derivations = [...steps.values()].map((step) => {
    // A step whose tag list is only `given`, `construct` or `assume-hyp` names no
    // fact and no earlier step; its inputs are then that tag list, which is what
    // the step actually rests on.
    const tokens = [...explicitTokens(step.text)];
    const tags = (normalise(step.text).match(/\[([^\]]*)\]\s*(?:∎)?\s*$/)?.[1] ?? '')
      .split(',').map((tag) => tag.trim()).filter(Boolean);
    return {
      id: `step-${step.id}`,
      claim: normalise(step.text).replace(/\s*\[[^\]]*\]\s*(?:∎)?\s*$/, '').slice(0, 220),
      step: step.id,
      inputs: tokens.length ? tokens : tags,
    };
  });
  for (const derivation of derivations) {
    if (!derivation.inputs.length) problems.push(`${id}: step ${derivation.step} names no fact, earlier step or tag`);
  }

  const table = B[id];
  if (!table) problems.push(`${id}: NO BOUNDARY TABLE`);
  const boundaries = CASES.map((name) => {
    const entry = table?.[name];
    if (!entry) return { case: name, status: 'checked', evidence: 'MISSING' };
    return entry[0] === 'c'
      ? { case: name, status: 'checked', evidence: entry[1] }
      : { case: name, status: 'not_applicable', reason: entry[1] };
  });

  contracts[id] = {
    citations,
    derivations,
    routine_steps: [],
    boundaries,
    finite_smoke: [],
    risk_review: {
      status: 'pending',
      reviewer: 'Alpha',
      notes: 'Audit-Beta captured the contract at A2 by reading each item and each cited target from disk; Alpha routes high and critical items to a proof-refuter at A5/A6.',
    },
  };
}

for (const id of Object.keys(B)) if (!scope.includes(id)) problems.push(`${id}: boundary table for an item outside the proof-bearing scope`);

fs.writeFileSync(OUT, JSON.stringify({ version: 1, level: 'audit-wave5-topology-separation', scope, contracts }, null, 1) + '\n');
const citations = scope.reduce((n, id) => n + contracts[id].citations.length, 0);
const stepCount = scope.reduce((n, id) => n + contracts[id].derivations.length, 0);
console.log(`items=${scope.length} citations=${citations} steps=${stepCount}`);
console.log(problems.length ? `PROBLEMS (${problems.length}):\n` + problems.join('\n') : 'no problems');
