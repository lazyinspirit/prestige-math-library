# Step 8 — group **d**, run `frontier-19`

You are the group Alpha for batches **5**, **6**, **10**: 5 A/B pair(s), 10 page(s), 123 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-19-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-19-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `combinatorial-classes-and-the-symbolic-method` | A | combinatorics | 194.1 | `formal-power-series`, `finite-counting-and-binomial-coefficients`, `congruences-and-the-chinese-remainder-theorem`, `group-actions-and-cayleys-theorem` |
| 5 | `combinatorial-classes-and-the-symbolic-method-examples` | B | combinatorics | 194.2 | `combinatorial-classes-and-the-symbolic-method` |
| 5 | `permutation-statistics-inversions-and-eulerian-numbers` | A | combinatorics | 198.1 | `symmetric-groups-and-the-sign-homomorphism`, `combinatorial-classes-and-the-symbolic-method`, `formal-power-series`, `finite-counting-and-binomial-coefficients` |
| 5 | `permutation-statistics-inversions-and-eulerian-numbers-examples` | B | combinatorics | 198.2 | `permutation-statistics-inversions-and-eulerian-numbers` |
| 6 | `block-designs-and-finite-projective-planes` | A | combinatorics | 225 | `linear-algebra-methods-in-combinatorics`, `algebraic-extensions-degree-and-finite-fields`, `congruences-and-the-chinese-remainder-theorem`, `eigenvalues-eigenvectors-and-the-characteristic-polynomial` |
| 6 | `block-designs-and-finite-projective-planes-examples` | B | combinatorics | 226 | `block-designs-and-finite-projective-planes` |
| 6 | `classical-and-loglog-erdos-hajnal-bounds` | A | combinatorics | 403 | `erdos-hajnal-property-and-homogeneous-sets`, `sparse-restricted-subgraphs-and-rodl-nikiforov` |
| 6 | `classical-and-loglog-erdos-hajnal-bounds-examples` | B | combinatorics | 404 | `classical-and-loglog-erdos-hajnal-bounds` |
| 10 | `polynomial-rodl-and-viral-equivalence` | A | combinatorics | 405 | `erdos-hajnal-property-and-homogeneous-sets`, `sparse-restricted-subgraphs-and-rodl-nikiforov` |
| 10 | `polynomial-rodl-and-viral-equivalence-examples` | B | combinatorics | 406 | `polynomial-rodl-and-viral-equivalence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `combinatorial-classes-and-the-symbolic-method` — Combinatorial Classes and the Symbolic Method (27 item(s))

- `def-combinatorial-class-and-ordinary-generating-function` · definition — Combinatorial classes, counting sequences and ordinary generating functions
- `def-neutral-and-atomic-classes` · definition — The neutral class $\mathcal{E}$ and the atomic class $\mathcal{Z}$
- `def-disjoint-union-and-cartesian-product-of-combinatorial-classes` · definition — Disjoint unions and Cartesian products of combinatorial classes
- `thm-symbolic-sum-and-product-rules` · theorem — Disjoint union and Cartesian product translate to addition and multiplication of ordinary generating functions
- `def-sequence-construction-of-a-combinatorial-class` · definition — The sequence construction $\operatorname{SEQ}(\mathcal{A})$
- `thm-sequence-construction-generating-function` · theorem — If $\mathcal{A}$ has no size-zero objects then $\operatorname{SEQ}(\mathcal{A})$ has generating function $1/(1-A(x))$
- `cor-binary-words-have-generating-function-one-over-one-minus-two-x` · corollary — Binary words have generating function $1/(1-2x)$
- `cor-compositions-have-generating-function-x-over-one-minus-two-x` · corollary — Positive-integer compositions have generating function $x/(1-2x)$
- `cor-compositions-with-k-parts-are-counted-by-binomial-coefficients` · corollary — Compositions of $n$ into $k$ positive parts are counted by $\binom{n-1}{k-1}$
- `def-multiset-and-powerset-constructions` · definition — The multiset construction $\operatorname{MSET}(\mathcal{A})$ and the powerset construction $\operatorname{PSET}(\mathcal{A})$
- `thm-multiset-product-formula` · theorem — If $\mathcal{A}$ has no size-zero objects then $\operatorname{MSET}(\mathcal{A})$ has generating function $\prod_{n\ge 1}(1-x^n)^{-a_n}$
- `thm-multiset-exponential-formula` · theorem — Over a commutative $\mathbb{Q}$-algebra, $\operatorname{MSET}(\mathcal{A})$ has generating function $\exp(\sum_{k\ge 1}A(x^k)/k)$
- `cor-integer-partitions-have-euler-product` · corollary — Integer partitions have generating function $\prod_{n\ge 1}(1-x^n)^{-1}$
- `thm-powerset-product-formula` · theorem — If $\mathcal{A}$ has no size-zero objects then $\operatorname{PSET}(\mathcal{A})$ has generating function $\prod_{n\ge 1}(1+x^n)^{a_n}$
- `thm-powerset-exponential-formula` · theorem — Over a commutative $\mathbb{Q}$-algebra, $\operatorname{PSET}(\mathcal{A})$ has generating function $\exp(\sum_{k\ge 1}(-1)^{k-1}A(x^k)/k)$
- `def-cycle-construction-of-a-combinatorial-class` · definition — The cycle construction $\operatorname{CYC}(\mathcal{A})$
- `lem-cyclic-rotation-fixed-tuples-are-periodic` · lemma — A tuple fixed by a cyclic rotation is determined by a shorter periodic block
- `thm-cycle-construction-formula` · theorem — Over a commutative $\mathbb{Q}$-algebra, $\operatorname{CYC}(\mathcal{A})$ has generating function $\sum_{k\ge 1}\frac{\varphi(k)}{k}\log\frac{1}{1-A(x^k)}$
- `cor-necklaces-over-an-m-letter-alphabet` · corollary — The number of necklaces of length $n$ on an $m$-letter alphabet is $\frac{1}{n}\sum_{d\mid n}\varphi(d)m^{n/d}$
- `def-substitution-of-combinatorial-classes` · definition — Substitution of combinatorial classes
- `thm-substitution-rule-for-ordinary-generating-functions` · theorem — If $B(0)=0$ then $\mathcal{A}\circ\mathcal{B}$ has generating function $A(B(x))$
- `def-pointing-of-a-combinatorial-class` · definition — Pointing a combinatorial class
- `thm-pointing-rule-for-ordinary-generating-functions` · theorem — Pointing translates to $xA'(x)$
- `def-combinatorial-specification-and-order-raising-recursion` · definition — Combinatorial specifications and order-raising recursive specifications
- `thm-order-raising-recursive-specifications-have-unique-solutions` · theorem — An order-raising recursive specification has a unique solution
- `cor-plane-trees-satisfy-t-equals-z-over-one-minus-t` · corollary — Rooted plane trees satisfy $T(x)=x/(1-T(x))$
- `cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared` · corollary — Rooted plane binary trees satisfy $B(x)=1+xB(x)^2$

### `combinatorial-classes-and-the-symbolic-method-examples` — Combinatorial Classes and the Symbolic Method — Examples (11 item(s))

- `ex-binary-words-as-sequences-of-two-atoms` · example — Binary words of length at most three from $\operatorname{SEQ}(2\mathcal{Z})$
- `ex-compositions-of-four-from-sequences` · example — The compositions of $4$ from $\operatorname{SEQ}_{\ge 1}(\operatorname{SEQ}_{\ge 1}(\mathcal{Z}))$
- `ex-partitions-with-parts-at-most-three` · example — Partitions with parts at most $3$ from a truncated multiset product
- `ex-plane-trees-with-at-most-four-vertices` · example — Plane trees with at most four vertices from $T=\mathcal{Z}\times\operatorname{SEQ}(T)$
- `ex-binary-necklaces-of-length-six-in-two-colours` · example — Binary necklaces of length $6$ from both $\operatorname{CYC}(2\mathcal{Z})$ and Burnside's lemma
- `ex-truncation-iteration-for-a-recursive-specification` · example — Iterating a recursive specification to determine coefficients through degree $6$
- `cex-an-infinite-level-is-not-a-combinatorial-class` · counterexample — A family with infinitely many objects of size $2$ is not a combinatorial class
- `cex-a-non-disjoint-union-does-not-satisfy-the-sum-rule` · counterexample — Without disjoint copies, union does not add generating functions
- `cex-a-product-without-unique-factorisation-does-not-satisfy-the-product-rule` · counterexample — A product class without unique factorisation does not have generating function $A(x)B(x)$
- `fs-sequence-construction-with-a-size-zero-object` · false-statement — FALSE: $\operatorname{SEQ}(\mathcal{A})$ is a combinatorial class even when $\mathcal{A}$ has a size-zero object
- `fs-multiset-product-exists-for-every-coefficient-sequence` · false-statement — FALSE: the positive-size multiset product always encodes a valid multiset class

### `permutation-statistics-inversions-and-eulerian-numbers` — Permutation Statistics, Inversions and Eulerian Numbers (21 item(s))

- `rem-permutation-statistics-conventions` · remark — This page uses the published inversion number and the shifted Eulerian indexing $A(n,k)$
- `def-descent-set-major-index-excedance-and-fixed-point` · definition — Descent sets, major index, excedances and fixed points of a permutation
- `def-eulerian-number-and-eulerian-polynomial` · definition — Eulerian numbers and Eulerian polynomials
- `def-q-integer-q-factorial-and-q-multinomial` · definition — The $q$-integer, $q$-factorial and $q$-multinomial coefficients
- `def-lehmer-code` · definition — The Lehmer code of a permutation
- `thm-lehmer-code-is-a-bijection` · theorem — The Lehmer code is a bijection $S_n\to\prod_{i=1}^{n}\{0,\dots,i-1\}$
- `cor-symmetric-group-has-factorial-cardinality-again` · corollary — The Lehmer code gives $|S_n|=n!$ again
- `thm-q-factorial-counts-permutations-by-inversions` · theorem — The inversion generating function of $S_n$ is $[n]_q!$
- `def-foata-schutzenberger-transformation` · definition — Foata's recursive transformation on permutations
- `lem-foata-transformation-is-bijective` · lemma — Foata's transformation is a bijection of $S_n$
- `thm-foata-transformation-sends-major-index-to-inversion-number` · theorem — Foata's transformation sends major index to inversion number
- `cor-major-index-generating-function-is-q-factorial` · corollary — The major-index generating function of $S_n$ is $[n]_q!$
- `def-standard-cycle-form-and-foata-fundamental-transformation` · definition — Standard cycle form and Foata's fundamental transformation
- `lem-anti-excedances-become-descents-under-foata-fundamental-transformation` · lemma — Under Foata's fundamental transformation, anti-excedances become descents
- `thm-descents-and-excedances-are-equidistributed` · theorem — Descents and excedances are equidistributed on $S_n$
- `cor-eulerian-numbers-are-symmetric` · corollary — The Eulerian numbers satisfy $A(n,k)=A(n,n-1-k)$
- `thm-eulerian-recurrence` · theorem — The Eulerian numbers satisfy $A(n,k)=(k+1)A(n-1,k)+(n-k)A(n-1,k-1)$
- `thm-worpitzky-identity` · theorem — Worpitzky's identity for $n\ge1$
- `cor-eulerian-polynomial-exponential-generating-function` · corollary — The Eulerian-polynomial exponential generating function in $\mathbb{Q}(t)\llbracket x\rrbracket$
- `def-weak-order-on-the-symmetric-group` · definition — The weak order on $S_n$ by inversion-set inclusion
- `def-bruhat-order-on-the-symmetric-group` · definition — The Bruhat order on $S_n$ by rank inequalities

### `permutation-statistics-inversions-and-eulerian-numbers-examples` — Permutation Statistics, Inversions and Eulerian Numbers — Examples (8 item(s))

- `ex-s-four-statistics-table` · example — The permutations of $S_4$ tabulated by inversions, descents, major index and excedances
- `ex-lehmer-code-and-q-factorial-for-s-four` · example — The Lehmer codes of $S_4$ recover $[4]_q!$
- `ex-foata-transformation-on-three-one-four-two` · example — Foata's transformation on the permutation $2\,0\,3\,1$
- `ex-a-four-two-computed-three-ways` · example — $A(4,2)=11$ by the recurrence, by Worpitzky's identity and by excedances
- `ex-weak-and-bruhat-orders-in-s-three` · example — The weak and Bruhat orders on $S_3$
- `cex-same-descent-set-different-inversion-number` · counterexample — Two permutations can have the same descent set and different inversion numbers
- `cex-eulerian-statistic-need-not-be-mahonian` · counterexample — The number of excedances is Eulerian but not Mahonian
- `fs-major-index-equals-inversion-number-pointwise` · false-statement — FALSE: the major index equals the inversion number for every permutation

### `block-designs-and-finite-projective-planes` — Block Designs and Finite Projective Planes (24 item(s))

- `def-two-design` · definition — A $2$-$(v,k,\lambda)$ design
- `def-incidence-matrix-of-a-two-design` · definition — The point-block incidence matrix of a $2$-design
- `lem-replication-number-is-constant-in-a-two-design` · lemma — Every point of a $2$-design lies in the same number of blocks
- `thm-counting-identities-for-a-two-design` · theorem — A $2$-design satisfies $bk=vr$ and $r(k-1)=\lambda(v-1)$
- `cor-divisibility-conditions-for-a-two-design` · corollary — The standard divisibility conditions for a $2$-design
- `thm-incidence-matrix-identity-for-a-two-design` · theorem — For a $2$-design, $NN^{\mathsf T}=(r-\lambda)I+\lambda J$
- `thm-fishers-inequality-for-two-designs` · theorem — Fisher's inequality: every $2$-$(v,k,\lambda)$ design has at least $v$ blocks
- `def-symmetric-design` · definition — A symmetric design
- `thm-block-intersections-in-a-symmetric-design` · theorem — In a symmetric $2$-design, distinct blocks meet in exactly $\lambda$ points
- `def-steiner-systems-and-steiner-triple-systems` · definition — Steiner triple systems
- `cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six` · corollary — A Steiner triple system can exist only when $v\equiv1$ or $3\pmod6$
- `thm-bose-construction-produces-a-steiner-triple-system` · theorem — Bose's construction gives a Steiner triple system of order $6m+3$ for $m\ge1$
- `rem-skolem-construction-produces-a-steiner-triple-system` · remark — Skolem's construction gives a Steiner triple system of order $6m+1$
- `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six` · theorem — A Steiner triple system exists exactly for orders $v>3$ with $v\equiv1$ or $3\pmod6$
- `def-finite-projective-plane` · definition — A finite projective plane
- `lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points` · lemma — Every line in a finite projective plane has the same number of points
- `def-order-of-a-finite-projective-plane` · definition — The order of a finite projective plane
- `thm-counts-in-a-finite-projective-plane` · theorem — A finite projective plane of order $n$ has $n^2+n+1$ points and the same number of lines
- `cor-finite-projective-planes-are-symmetric-two-designs` · corollary — A projective plane of order $n$ is a symmetric $2$-$(n^2+n+1,n+1,1)$ design
- `thm-pg-two-q-is-a-finite-projective-plane` · theorem — For every prime power $q$, the space $PG(2,q)$ is a projective plane of order $q$
- `def-latin-square` · definition — A Latin square
- `def-orthogonal-latin-squares-and-complete-families` · definition — Orthogonal Latin squares and complete families of them
- `thm-linear-latin-squares-over-a-finite-field-are-mutually-orthogonal` · theorem — The linear Latin squares $L_a(i,j)=ai+j$ over $\mathbb F_q$ are pairwise orthogonal
- `cor-prime-power-orders-admit-complete-families-of-orthogonal-latin-squares` · corollary — Every prime power order $q$ admits $q-1$ mutually orthogonal Latin squares

### `block-designs-and-finite-projective-planes-examples` — Block Designs and Finite Projective Planes — Examples (7 item(s))

- `ex-skolems-construction-gives-the-fano-plane` · example — The seven translates of $\{0,1,3\}$ form the Fano plane
- `ex-the-incidence-matrix-of-the-fano-plane` · example — The Fano plane has incidence matrix $N$ with $NN^{\mathsf T}=2I+J$
- `ex-bose-construction-for-the-steiner-triple-system-on-nine-points` · example — Bose's construction at order $9$ gives a Steiner triple system on nine points
- `ex-pg-two-three-has-thirteen-points-and-thirteen-lines` · example — $PG(2,3)$ has $13$ points and $13$ lines
- `ex-two-orthogonal-latin-squares-of-order-three` · example — The squares $L_1(i,j)=i+j$ and $L_2(i,j)=2i+j$ on $\mathbb F_3$ are orthogonal
- `cex-a-symmetric-design-need-not-be-a-projective-plane` · counterexample — The complementary $2$-$(7,4,2)$ design is symmetric but not a projective plane
- `cex-two-latin-squares-need-not-be-orthogonal` · counterexample — A Latin square need not be orthogonal to an identical copy of itself

### `classical-and-loglog-erdos-hajnal-bounds` — Classical and Log-Log Erdős–Hajnal Bounds (5 item(s))

- `rem-fox-sudakov-quantitative-density-theorem` · remark — Fox–Sudakov: a quantitative density form of Rödl's theorem
- `thm-classical-erdos-hajnal-bound` · theorem — Every $H$-free graph has a homogeneous set of size at least $2^{c\sqrt{\log_2 n}}$
- `rem-loglog-quantitative-density-theorem` · remark — Bucić–Nguyen–Scott–Seymour: a log-log quantitative density theorem
- `thm-loglog-erdos-hajnal-bound` · theorem — Every $H$-free graph has a homogeneous set of size at least $2^{c\sqrt{\log_2 n\,\log_2\log_2 n}}$
- `cor-the-loglog-bound-eventually-dominates-the-classical-bound` · corollary — For fixed $H$, the log-log scale eventually exceeds every classical scale $2^{c\sqrt{\log_2 n}}$

### `classical-and-loglog-erdos-hajnal-bounds-examples` — Classical and Log-Log Erdős–Hajnal Bounds — Examples (5 item(s))

- `ex-choosing-x-for-the-classical-erdos-hajnal-bound` · example — For large $n$, the Fox–Sudakov choice of $x$ leaves a dense-or-sparse set of order at least $\sqrt n$
- `ex-choosing-x-for-the-loglog-erdos-hajnal-bound` · example — For large $n$, the log-log choice of $x$ still leaves a dense-or-sparse set of order at least $\sqrt n$
- `ex-the-classical-bound-is-subpolynomial` · example — A lower bound of size $2^{c\sqrt{\log_2 n}}$ is still subpolynomial in $n$
- `ex-the-loglog-bound-is-still-subpolynomial` · example — A lower bound of size $2^{c\sqrt{\log_2 n\,\log_2\log_2 n}}$ is still subpolynomial in $n$
- `ex-p-three-free-graphs-have-much-larger-homogeneous-sets` · example — The $P_3$-free case is much stronger than the general lower bounds

### `polynomial-rodl-and-viral-equivalence` — Polynomial Rödl, Virality and Erdős–Hajnal Equivalence (11 item(s))

- `def-polynomial-rodl-property-for-a-finite-family` · definition — The polynomial Rödl property for a finite forbidden family
- `def-viral-property-for-a-finite-family` · definition — The viral property for a finite forbidden family
- `def-t-k-homogeneous-property` · definition — The $(t,k)$-homogeneous property
- `lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets` · lemma — Many good $2t$-vertex subsets force many homogeneous $k$-sets
- `lem-small-total-copy-expectation-forces-many-homogeneous-k-sets` · lemma — Small total induced-copy expectation forces many homogeneous $k$-sets
- `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets` · lemma — Without a large $\epsilon$-sparse induced subgraph, the number of $k$-vertex stable sets is bounded
- `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral` · theorem — Every finite family with the Erdős–Hajnal property is viral
- `cor-viral-implies-polynomial-rodl-for-a-finite-family` · corollary — The viral property implies the polynomial Rödl property
- `cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family` · corollary — The polynomial Rödl property implies the Erdős–Hajnal property
- `thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence` · theorem — For a finite family, the Erdős–Hajnal property, the polynomial Rödl property, and virality are equivalent
- `cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence` · corollary — For a single graph, the Erdős–Hajnal property, the polynomial Rödl property, and virality are equivalent

### `polynomial-rodl-and-viral-equivalence-examples` — Polynomial Rödl, Virality and Erdős–Hajnal Equivalence — Examples (4 item(s))

- `ex-the-singleton-family-p-three-is-viral` · example — The singleton family $\{P_3\}$ is viral
- `ex-a-family-containing-k-one-is-vacuously-viral` · example — A family containing $K_1$ is viral for vacuous reasons
- `cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted` · counterexample — The polynomial Rödl witness need not be the whole graph
- `cex-the-empty-family-is-not-erdos-hajnal` · counterexample — The empty forbidden family is not Erdős–Hajnal

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: both
lanes may have passed every item you own. Verify it against
`research/frontier-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen post-rejudge integrity close, run `frontier-19`

You are the resumed group Alpha for the group described above. The mathematical
rejudge boundary has already completed. This dispatch exists only because a
repository, contract, receipt, or ledger gate found residue on the final tree.

Item mathematics is frozen. Do not edit, create, delete, rename, or reorder an
item, and do not launch or request another judge cycle. You may correct a
mechanically stale contract or receipt only when it describes the current item
exactly and the correction does not conceal a real defect. If the honest fix
would change mathematics, report the exact item, failed gate, and defect as an
intervention blocker.

Read the latest failure in `.autopilot/events.jsonl`, take only exact ids owned
by your group, and rerun only the targeted gate where supported. Do not run a
whole-repository battery, `level-coverage`, or a workflow transition; the
engine owns those checks.

Return a concise report naming the gate, ids reviewed, non-item records changed,
targeted checks run, and every blocker. No permission prompts.
