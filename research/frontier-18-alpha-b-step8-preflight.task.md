# Step 8 — group **b**, run `frontier-18`

You are the group Alpha for batches **5**, **10**: 4 A/B pair(s), 8 page(s), 225 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-18-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-18-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `lattice-paths-and-catalan-numbers` | A | combinatorics | 197 | `linear-recurrences-and-rational-generating-functions`, `formal-power-series` |
| 5 | `lattice-paths-and-catalan-numbers-examples` | B | combinatorics | 198 | `lattice-paths-and-catalan-numbers` |
| 5 | `linear-algebra-methods-in-combinatorics` | A | combinatorics | 223 | `finite-probability-and-the-probabilistic-method`, `inner-product-spaces-and-orthogonality`, `gaussian-elimination-and-row-reduction`, `polynomial-rings-and-roots` |
| 5 | `linear-algebra-methods-in-combinatorics-examples` | B | combinatorics | 224 | `linear-algebra-methods-in-combinatorics` |
| 10 | `modules-substitution-and-prime-graphs` | A | combinatorics | 397 | `erdos-hajnal-property-and-homogeneous-sets` |
| 10 | `modules-substitution-and-prime-graphs-examples` | B | combinatorics | 398 | `modules-substitution-and-prime-graphs` |
| 10 | `sparse-restricted-subgraphs-and-rodl-nikiforov` | A | combinatorics | 401 | `regular-pairs-and-induced-counting` |
| 10 | `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` | B | combinatorics | 402 | `sparse-restricted-subgraphs-and-rodl-nikiforov` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `lattice-paths-and-catalan-numbers` — Lattice Paths and Catalan Numbers (58 item(s))

- `def-lattice-path-and-step-set` · definition — Lattice paths, step sets and step words
- `lem-lattice-paths-are-determined-by-their-step-words` · lemma — For each start point the step word is a bijection onto $S^n$
- `def-monotone-lattice-path` · definition — Monotone lattice paths with steps $E=(1,0)$ and $N=(0,1)$
- `thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient` · theorem — $\lvert\mathcal{M}((0,0),(m,n))\rvert=\binom{m+n}{n}$
- `def-diagonal-lattice-path-and-its-height` · definition — Diagonal lattice paths with steps $U=(1,1)$ and $D=(1,-1)$, and the height function
- `lem-monotone-and-diagonal-lattice-paths-correspond` · lemma — The two step sets describe the same objects: $U\mapsto N$, $D\mapsto E$ is a bijection matching the diagonal $y=x$ with the level $0$
- `cor-diagonal-lattice-paths-with-a-prescribed-endpoint-are-counted-by-a-binomial-coefficient` · corollary — The number of diagonal paths from $(0,a)$ to $(n,b)$ is $\binom{n}{(n+b-a)/2}$ when $n\equiv b-a\pmod2$ and $\lvert b-a\rvert\le n$, and $0$ otherwise
- `lem-a-diagonal-path-that-changes-side-of-a-level-meets-it` · lemma — A diagonal path with $h(0)\le c\le h(n)$ or $h(n)\le c\le h(0)$ satisfies $h(i)=c$ for some $i$
- `lem-reflection-at-the-first-visit-to-a-level-is-a-bijection` · lemma — Reflecting the initial segment at the first visit to level $c$
- `thm-reflection-principle-for-diagonal-lattice-paths` · theorem — The reflection principle: paths from $(0,a)$ to $(n,b)$ staying strictly above level $c$ are counted by a difference of two binomial coefficients
- `thm-ballot-problem` · theorem — Bertrand's ballot problem: for $p>q\ge0$ the orderings in which the first candidate is strictly ahead throughout satisfy $(p+q)\,N=(p-q)\binom{p+q}{p}$
- `cor-weak-ballot-problem` · corollary — The weak ballot count: for $p\ge q\ge0$ the orderings in which the first candidate is never behind satisfy $(p+1)\,N=(p-q+1)\binom{p+q}{q}$
- `def-dyck-path-and-semilength` · definition — Dyck paths of semilength $n$
- `lem-dyck-paths-of-a-given-semilength-form-a-finite-set` · lemma — $\mathcal{D}_n$ is a finite set
- `def-catalan-number` · definition — The Catalan number $C_n:=\lvert\mathcal{D}_n\rvert$
- `thm-catalan-numbers-by-reflection` · theorem — $C_n+\binom{2n}{n+1}=\binom{2n}{n}$
- `cor-catalan-closed-formula` · corollary — $(n+1)\,C_n=\binom{2n}{n}$
- `cor-one-more-than-n-divides-the-central-binomial-coefficient` · corollary — $n+1$ divides $\binom{2n}{n}$ for every $n\in\mathbb{N}$
- `def-cyclic-shift-and-the-periodic-partial-sum-function` · definition — Cyclic shifts of an integer word and its periodic partial-sum function
- `lem-cyclic-shift-is-an-action-of-the-integers-modulo-the-length` · lemma — Cyclic shifting is an action of $\mathbb{Z}/m$ on the words of length $m$ over a set
- `lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser` · lemma — If $\gcd(\lVert a\rVert,m)=1$ then the shift stabiliser of $a$ is trivial, so its orbit has exactly $m$ elements
- `lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums` · lemma — $\sigma^{j}a$ has all partial sums positive exactly when $S_a(i)>S_a(j)$ for every $i>j$
- `lem-strict-right-minima-of-a-quasiperiodic-partial-sum-function` · lemma — If every $a_i\le1$ and $\lVert a\rVert\ge1$, the strict right minima form a two-sided increasing list on which $S_a$ increases by exactly $1$ at each successive index
- `thm-cycle-lemma` · theorem — The cycle lemma (Dvoretzky–Motzkin): if every $a_i\le1$ and $\lVert a\rVert=k\ge1$, then exactly $k$ of the $m$ cyclic shifts of $a$ have all partial sums positive
- `thm-catalan-numbers-by-the-cycle-lemma` · theorem — $(2n+1)\,C_n=\binom{2n+1}{n}$, a second derivation of the Catalan count
- `lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once` · lemma — If $\lVert a\rVert=1$ then $j\mapsto\#\{r:0\le r<m,\ S_a(j+r)\le S_a(j)\}$ is a bijection from $\{0,\dots,m-1\}$ onto $\{1,\dots,m\}$
- `thm-chung-feller` · theorem — The Chung–Feller theorem: for each $k$ with $0\le k\le n$, exactly $C_n$ of the diagonal paths from $(0,0)$ to $(2n,0)$ have exactly $2k$ steps lying above level $0$
- `lem-first-return-decomposition-of-a-nonempty-dyck-path` · lemma — Every Dyck path of semilength $n+1$ factors uniquely as $U\,P\,D\,Q$ with $P\in\mathcal{D}_i$ and $Q\in\mathcal{D}_{n-i}$
- `thm-catalan-recurrence` · theorem — $C_{n+1}=\sum_{i=0}^{n}C_i\,C_{n-i}$, with $C_0=1$
- `def-catalan-generating-function` · definition — The Catalan generating function $C(x)=\sum_{n\ge0}C_nx^n$ in $\mathbb{Q}\llbracket x\rrbracket$
- `thm-catalan-generating-function-satisfies-a-quadratic-equation` · theorem — $C(x)=1+x\,C(x)^2$
- `lem-the-coefficients-of-the-formal-square-root-of-one-minus-four-x` · lemma — $[x^k](1-4x)^{1/2}=-\frac{2}{k}\binom{2k-2}{k-1}$ for $k\ge1$, and $1$ for $k=0$
- `thm-catalan-generating-function-closed-form` · theorem — $2x\,C(x)=1-(1-4x)^{1/2}$, where $(1-4x)^{1/2}$ is the unique square root with constant coefficient $1$
- `thm-catalan-numbers-from-the-generating-function` · theorem — A third derivation of $(n+1)\,C_n=\binom{2n}{n}$, from the closed form of $C(x)$
- `thm-the-catalan-generating-function-is-not-rational` · theorem — $C(x)$ is not a rational formal power series, so $(C_n)$ satisfies no eventual constant-coefficient linear recurrence
- `def-motzkin-and-schroder-paths` · definition — Motzkin paths, Schröder paths, the Motzkin numbers $M_n$, the large Schröder numbers $R_n$, and their generating functions
- `thm-motzkin-numbers-by-first-return-decomposition` · theorem — $M(x)=1+x\,M(x)+x^{2}M(x)^{2}$, and $2x^{2}M(x)=1-x-(1-2x-3x^{2})^{1/2}$
- `cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers` · corollary — $M_n=\sum_{k\in\mathbb{N},\,2k\le n}\binom{n}{2k}C_k$
- `thm-large-schroder-numbers-by-first-return-decomposition` · theorem — $R(x)=1+x\,R(x)+x\,R(x)^{2}$, and $2x\,R(x)=1-x-(1-6x+x^{2})^{1/2}$
- `cor-large-schroder-numbers-as-a-binomial-sum-of-catalan-numbers` · corollary — $R_n=\sum_{k=0}^{n}\binom{n+k}{2k}C_k$
- `def-balanced-bracket-word` · definition — Balanced bracket words, defined by the recursive grammar
- `thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words` · theorem — $\mathcal{B}_n$ is exactly the set of words of length $2n$ over $\{\texttt{(},\texttt{)}\}$ in which every prefix has at least as many $\texttt{(}$ as $\texttt{)}$ and the totals are equal
- `cor-balanced-bracket-words-are-counted-by-the-catalan-numbers` · corollary — $\lvert\mathcal{B}_n\rvert=C_n$
- `def-binary-tree-and-its-size` · definition — Binary trees, defined recursively, and their size
- `lem-binary-trees-of-a-given-size-form-a-finite-set` · lemma — Each $\mathcal{T}_n$ is finite
- `thm-binary-trees-correspond-to-dyck-paths` · theorem — There is a bijection $\mathcal{T}_n\to\mathcal{D}_n$ for every $n$
- `cor-binary-trees-are-counted-by-the-catalan-numbers` · corollary — $\lvert\mathcal{T}_n\rvert=C_n$
- `def-convex-polygon-chords-crossings-and-triangulations` · definition — Chords of a labelled convex polygon, crossing, and triangulations, defined combinatorially
- `lem-a-triangulation-has-a-unique-triangle-on-the-closing-side` · lemma — For $m\ge3$ and a triangulation $T$ of the $m$-gon there is a unique $k$ with $1<k<m$ such that $\{1,k\}$ and $\{k,m\}$ are both chords of $T$ or sides, and $T$ splits along $k$
- `thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees` · theorem — There is a bijection $\mathcal{T}_n\to\mathcal{P}_{n+2}$ for every $n\in\mathbb{N}$
- `cor-triangulations-of-a-convex-polygon-are-counted-by-the-catalan-numbers` · corollary — $\lvert\mathcal{P}_{n+2}\rvert=C_n$
- `def-path-system-and-non-intersecting-path-system` · definition — Path systems between two families of lattice points, and non-intersecting systems
- `lem-sign-reversing-involution-on-intersecting-path-systems` · lemma — Tail-swapping is a sign-reversing involution on the intersecting systems
- `thm-lindstrom-gessel-viennot` · theorem — $\det\bigl(\lvert\mathcal{M}(A_i,E_j)\rvert\bigr)_{i,j}=\sum_{\pi\in S_r}\operatorname{sgn}(\pi)\cdot\#\{\text{non-intersecting }\pi\text{-systems}\}$
- `cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant` · corollary — For $n\ge1$ the pairs of non-intersecting monotone paths $(1,0)\to(n+1,n)$ and $(0,1)\to(n,n+1)$ number $\binom{2n}{n}^2-\binom{2n}{n+1}\binom{2n}{n-1}$
- `rem-routes-to-the-catalan-count` · remark — Why the Catalan count is proved three times, and how the three statements agree
- `rem-binary-trees-and-triangulations-here-are-combinatorial-objects` · remark — The trees and polygons of this page are defined by recursion and by inequalities on labels
- `rem-lattice-path-conventions` · remark — Conventions fixed on this page

### `lattice-paths-and-catalan-numbers-examples` — Lattice Paths and Catalan Numbers — Examples (16 item(s))

- `ex-monotone-lattice-paths-from-the-origin-to-three-two` · example — The ten monotone lattice paths from $(0,0)$ to $(3,2)$
- `ex-the-five-dyck-paths-of-semilength-three` · example — The five Dyck paths of semilength $3$, with their height functions
- `ex-the-three-catalan-families-matched-at-semilength-three` · example — The five Dyck paths of semilength $3$ matched to bracket words, binary trees and pentagon triangulations
- `ex-the-reflection-bijection-on-a-concrete-path` · example — Reflecting a path from $(0,0)$ to $(6,0)$ at its first visit to level $-1$
- `ex-the-ballot-problem-with-three-and-two-votes` · example — The ballot problem for $p=3$, $q=2$: two orderings out of ten
- `ex-the-cycle-lemma-on-a-word-of-length-seven` · example — The seven cyclic shifts of a $\pm1$ word of weight $1$, exactly one with all partial sums positive
- `ex-catalan-numbers-to-six-computed-two-ways` · example — $C_0$ to $C_6$ by the recurrence and by the closed formula
- `ex-the-fourteen-triangulations-of-a-convex-hexagon` · example — The fourteen triangulations of the convex hexagon
- `ex-the-first-coefficients-of-the-catalan-generating-function` · example — Squaring the truncation of $C(x)$ and of $(1-4x)^{1/2}$ through degree five
- `ex-non-intersecting-path-pairs-by-a-two-by-two-determinant` · example — The three non-intersecting path pairs at $n=1$, counted by hand and by the determinant
- `ex-the-tail-swap-involution-on-an-intersecting-pair` · example — Tail-swapping applied to an intersecting pair, and applied twice
- `fs-the-central-binomial-quotient-is-an-integer-only-for-small-n` · false-statement — FALSE: $\binom{2n}{n}/(n+1)$ is a natural number only for small $n$
- `fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths` · false-statement — FALSE: the monotone paths from $(0,0)$ to $(n,n)$ that stay weakly below the diagonal number $\binom{2n}{n}/2$
- `fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence` · false-statement — FALSE: the Catalan numbers satisfy a constant-coefficient linear recurrence
- `cex-a-map-between-two-catalan-families-that-is-not-injective` · counterexample — A natural-looking map from hexagon triangulations to Dyck paths that is not injective
- `cex-a-step-set-for-which-the-reflection-argument-fails` · counterexample — With steps $(1,1)$ and $(1,-2)$ a path can pass from above a level to below it without meeting it

### `linear-algebra-methods-in-combinatorics` — Linear Algebra Methods in Combinatorics (46 item(s))

- `def-incidence-vector-of-a-subset` · definition — The incidence vector $v_A\in F^{n}$ of a subset $A\subseteq[n]$ over a stated field
- `def-standard-bilinear-form-on-a-coordinate-space` · definition — The standard bilinear form $\langle x,y\rangle=\sum_{i<n}x_iy_i$ on $F^{n}$
- `lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size` · lemma — $\langle v_A,v_B\rangle$ is the image of $\lvert A\cap B\rvert$ in $F$; over $\mathbb{F}_2$ it is $0$ or $1$ according to the parity of $\lvert A\cap B\rvert$
- `def-set-family-and-its-incidence-matrix` · definition — A finite family of subsets of $[n]$ and its incidence matrix over $F$
- `lem-a-family-with-independent-incidence-vectors-has-at-most-n-members` · lemma — If the incidence vectors of $A_1,\dots,A_m\subseteq[n]$ are linearly independent over $F$ then $m\le n$
- `lem-diagonal-independence-criterion` · lemma — Diagonal criterion: if $\langle v_i,w_i\rangle\ne0$ and $\langle v_i,w_j\rangle=0$ for $i\ne j$, then $v_1,\dots,v_m$ are linearly independent
- `lem-triangular-independence-criterion` · lemma — Triangular criterion: if $\langle v_i,w_i\rangle\ne0$ and $\langle v_i,w_j\rangle=0$ for $j<i$, then $v_1,\dots,v_m$ are linearly independent
- `lem-determinant-independence-criterion` · lemma — Determinant criterion: if the matrix $\bigl(\langle v_i,w_j\rangle\bigr)_{i,j}$ is invertible then both $v_1,\dots,v_m$ and $w_1,\dots,w_m$ are linearly independent
- `thm-oddtown` · theorem — Oddtown: distinct $A_1,\dots,A_m\subseteq[n]$ with every $\lvert A_i\rvert$ odd and every $\lvert A_i\cap A_j\rvert$ ($i\ne j$) even satisfy $m\le n$
- `cor-the-oddtown-bound-is-attained` · corollary — The $n$ singletons form an Oddtown family, so the bound $m\le n$ is attained for every $n$
- `lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field` · lemma — A $d$-dimensional vector space over a field with $q$ elements has exactly $q^{d}$ elements
- `lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form` · lemma — For a subspace $U\le F^{n}$, $\dim_F U^{\perp}=n-\dim_F U$, where $U^{\perp}=\{x:\langle x,u\rangle=0\text{ for all }u\in U\}$
- `thm-eventown` · theorem — Eventown: distinct $A_1,\dots,A_m\subseteq[n]$ with every $\lvert A_i\rvert$ and every $\lvert A_i\cap A_j\rvert$ even satisfy $m\le 2^{\lfloor n/2\rfloor}$
- `thm-every-maximal-eventown-family-is-maximum` · theorem — An Eventown family that no further set can be added to has exactly $2^{\lfloor n/2\rfloor}$ members
- `lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent` · lemma — If $v_1,\dots,v_m\in\mathbb{R}^{n}$ satisfy $\langle v_i,v_j\rangle=t\ge0$ for $i\ne j$ and $\langle v_i,v_i\rangle>t$, they are linearly independent
- `thm-nonuniform-fisher-inequality` · theorem — Fisher's inequality, nonuniform form: distinct nonempty $A_1,\dots,A_m\subseteq[n]$ with $\lvert A_i\cap A_j\rvert=t$ for all $i\ne j$ satisfy $m\le n$
- `cor-uniform-fisher-inequality` · corollary — A $k$-uniform family on $[n]$ with all pairwise intersections of size $t<k$ has at most $n$ members
- `def-complete-bipartite-decomposition-of-a-graph` · definition — A decomposition of a graph's edge set into complete bipartite subgraphs
- `thm-graham-pollak` · theorem — Graham–Pollak: a complete bipartite decomposition of $K_n$ has at least $n-1$ parts
- `def-shattering-and-vc-dimension` · definition — Shattering and the Vapnik–Chervonenkis dimension of a set family
- `def-down-shift-of-a-set-family` · definition — The down-shift $S_j$ of a set family at a point $j$
- `lem-the-down-shift-preserves-the-number-of-sets` · lemma — $\lvert S_j(\mathcal{F})\rvert=\lvert\mathcal{F}\rvert$, and $w(S_j(\mathcal{F}))\le w(\mathcal{F})$ with equality only when $S_j(\mathcal{F})=\mathcal{F}$
- `lem-the-down-shift-creates-no-new-shattered-set` · lemma — Every set shattered by $S_j(\mathcal{F})$ is shattered by $\mathcal{F}$
- `lem-iterated-down-shifting-terminates-in-a-downward-closed-family` · lemma — Applying down-shifts until none changes the family terminates, and the result is closed under taking subsets
- `lem-a-downward-closed-family-shatters-each-of-its-members` · lemma — If $\mathcal{F}$ is closed under taking subsets then $\mathcal{F}$ shatters every $F\in\mathcal{F}$
- `thm-sauer-shelah` · theorem — Sauer–Shelah: a family on $[n]$ of VC dimension at most $d$ has at most $\sum_{i=0}^{d}\binom{n}{i}$ members
- `cor-sauer-shelah-polynomial-bound` · corollary — For $d\ge1$ a family on $[n]$ of VC dimension at most $d$ has at most $(n+1)^{d}$ members
- `def-inclusion-matrix` · definition — The inclusion matrix $W_{t,k}(n)$ of $t$-sets against $k$-sets
- `thm-rank-of-the-point-inclusion-matrix` · theorem — $\operatorname{rank}_{\mathbb{Q}}W_{1,k}(n)=n$ for $1\le k\le n-1$
- `rem-the-rank-of-a-general-inclusion-matrix-is-not-established-here` · remark — What is and is not proved about $\operatorname{rank}W_{t,k}(n)$ on this page
- `def-monomials-multidegree-and-total-degree` · definition — Monomials, coefficients, degree in each variable and total degree in $F[x_1,\dots,x_n]$
- `thm-polynomial-identity-lemma` · theorem — If $\deg_{x_i}P<\lvert S_i\rvert$ for each $i$ and $P$ vanishes on $S_1\times\cdots\times S_n$, then $P=0$
- `lem-grid-reduction-of-a-multivariate-polynomial` · lemma — Reducing $f$ modulo $g_i(x_i)=\prod_{s\in S_i}(x_i-s)$ lowers each $\deg_{x_i}$ below $\lvert S_i\rvert$, preserves the values on the grid, and does not change the coefficient of a monomial of top total degree
- `thm-combinatorial-nullstellensatz` · theorem — Alon's Combinatorial Nullstellensatz: if $\deg f=\sum_it_i$, the coefficient of $x_1^{t_1}\cdots x_n^{t_n}$ in $f$ is nonzero, and $\lvert S_i\rvert>t_i$, then $f(s_1,\dots,s_n)\ne0$ for some $s_i\in S_i$
- `lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime` · lemma — If $p$ is prime and $0\le k\le m<p$ then $p\nmid\binom{m}{k}$
- `thm-cauchy-davenport` · theorem — Cauchy–Davenport: for $p$ prime and nonempty $A,B\subseteq\mathbb{Z}/p$, $\lvert A+B\rvert\ge\min\{p,\lvert A\rvert+\lvert B\rvert-1\}$
- `thm-alon-furedi-hyperplane-cover-of-the-cube` · theorem — Covering $\{0,1\}^{n}$ minus the origin by affine hyperplanes avoiding the origin needs at least $n$ of them
- `def-multilinear-polynomial-and-multilinear-reduction` · definition — Multilinear polynomials and the reduction $x_i^{2}\mapsto x_i$ on the cube
- `lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction` · lemma — $\widetilde f$ is multilinear, agrees with $f$ at every point of $\{0,1\}^{n}$, has no larger total degree, and is the unique multilinear polynomial with that agreement
- `lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube` · lemma — The functions $\{0,1\}^{n}\to F$ obtained from $x_T$ with $\lvert T\rvert\le s$ are linearly independent, so they span a space of dimension $\sum_{i=0}^{s}\binom{n}{i}$
- `def-l-intersecting-family` · definition — $L$-intersecting families
- `thm-frankl-wilson-nonuniform-bound` · theorem — An $L$-intersecting family on $[n]$ with $\lvert L\rvert=s$ has at most $\sum_{i=0}^{s}\binom{n}{i}$ members
- `lem-an-unshattered-set-reduces-a-monomial-on-a-family` · lemma — If $\mathcal{F}$ does not shatter $T$ then $x_T$ agrees on $\{v_F:F\in\mathcal{F}\}$ with a combination of the $x_S$ for $S\subsetneq T$
- `thm-sauer-shelah-by-multilinear-polynomials` · theorem — A second proof of Sauer–Shelah, from the multilinear polynomial space
- `rem-sauer-shelah-uses-no-linear-algebra` · remark — The shifting proof of Sauer–Shelah uses no field and no vector space
- `rem-the-field-is-a-hypothesis-of-every-bound-on-this-page` · remark — Which field each bound is proved over, and what changes when it is replaced

### `linear-algebra-methods-in-combinatorics-examples` — Linear Algebra Methods in Combinatorics — Examples (18 item(s))

- `ex-an-oddtown-family-on-four-points` · example — An Oddtown family of four clubs on four citizens, and why a fifth cannot be added
- `ex-an-eventown-family-of-maximum-size` · example — The pairing construction gives an Eventown family of size $2^{\lfloor n/2\rfloor}$
- `ex-the-nonuniform-fisher-bound-on-the-seven-lines-of-the-fano-plane` · example — The seven lines of the Fano plane meet pairwise in one point, and Fisher's bound is tight
- `ex-graham-pollak-for-the-complete-graph-on-four-vertices` · example — $K_4$ decomposed into three complete bipartite graphs, and no decomposition into two
- `ex-a-family-of-vc-dimension-two-attaining-the-sauer-shelah-bound` · example — All subsets of $[4]$ of size at most $2$: VC dimension $2$ and exactly $\sum_{i\le2}\binom{4}{i}=11$ members
- `ex-the-inclusion-matrix-of-points-against-pairs-on-four-points` · example — $W_{1,2}(4)$ written out, and its rank computed
- `ex-cauchy-davenport-in-the-integers-modulo-seven` · example — $A=B=\{0,1,2\}$ in $\mathbb{Z}/7$: the sumset has five elements and the bound is tight
- `ex-the-combinatorial-nullstellensatz-on-a-two-variable-polynomial` · example — Applying the Nullstellensatz by hand to $f(x,y)=x^{2}y+xy^{2}+x+y$ over $\mathbb{Q}$
- `ex-the-nonuniform-intersection-bound-on-the-pairs-in-four-points` · example — The six $2$-subsets of $[4]$ are $\{0,1\}$-intersecting, and the bound $\sum_{i\le2}\binom{4}{i}=11$ holds
- `ex-covering-the-cube-minus-the-origin-with-n-hyperplanes` · example — The $n$ hyperplanes $x_i=1$ cover $\{0,1\}^{n}$ except the origin, so the Alon–Füredi bound is tight
- `fs-the-oddtown-bound-can-be-improved-to-n-minus-one` · false-statement — FALSE: an Oddtown family on $[n]$ has at most $n-1$ members
- `fs-fisher-inequality-holds-over-the-two-element-field` · false-statement — FALSE: distinct nonempty $A_1,\dots,A_m\subseteq[n]$ whose pairwise intersections all have the same parity satisfy $m\le n$
- `fs-a-family-of-vc-dimension-d-has-at-most-n-to-the-d-members` · false-statement — FALSE: a family on $[n]$ of VC dimension at most $d$ has at most $n^{d}$ members
- `fs-the-standard-bilinear-form-on-the-two-element-field-is-an-inner-product` · false-statement — FALSE: $\langle x,y\rangle=\sum_ix_iy_i$ makes $\mathbb{F}_2^{n}$ an inner product space
- `fs-the-combinatorial-nullstellensatz-holds-without-the-top-coefficient-hypothesis` · false-statement — FALSE: if $\deg f=\sum_it_i$ and $\lvert S_i\rvert>t_i$ then $f$ is nonzero somewhere on $S_1\times\cdots\times S_n$
- `cex-incidence-vectors-dependent-over-the-two-element-field-and-independent-over-the-reals` · counterexample — A set family whose incidence vectors are dependent over $\mathbb{F}_2$ and independent over $\mathbb{R}$
- `cex-cauchy-davenport-fails-for-a-composite-modulus` · counterexample — In $\mathbb{Z}/4$ the sets $A=B=\{0,2\}$ have $\lvert A+B\rvert=2$, below the Cauchy–Davenport bound $3$
- `cex-a-nonzero-polynomial-vanishing-on-a-grid-of-exactly-its-degree` · counterexample — $P(x)=x(x-1)$ vanishes on $\{0,1\}$ although $\deg_x P=\lvert\{0,1\}\rvert$

### `modules-substitution-and-prime-graphs` — Modules, Substitution and Prime Graphs (36 item(s))

- `def-module-of-a-graph` · definition — Modules of a graph, and the trivial modules
- `lem-module-criteria` · lemma — Three equivalent descriptions of a module: purity of every outside vertex, equality of outside neighbourhoods, and indistinguishability of the members
- `lem-modules-are-complement-invariant` · lemma — A vertex set is a module of $G$ exactly when it is a module of $\overline G$
- `lem-unions-of-components-and-of-anticomponents-are-modules` · lemma — Every union of connected components is a module, and so is every union of anticonnected components
- `lem-disjoint-modules-are-a-pure-pair` · lemma — Two disjoint nonempty modules form a complete or an anticomplete pair
- `lem-intersection-of-two-modules-is-a-module` · lemma — The intersection of two modules is a module
- `lem-union-of-two-meeting-modules-is-a-module` · lemma — The union of two modules with a common vertex is a module
- `lem-differences-of-overlapping-modules-are-modules` · lemma — If two modules overlap, then each difference and their symmetric difference are modules
- `lem-a-module-meets-an-induced-subgraph-in-a-module` · lemma — If $M$ is a module of $G$ and $W\subseteq V(G)$, then $M\cap W$ is a module of $G[W]$
- `lem-a-module-of-a-module-is-a-module` · lemma — A module of $G[M]$ is a module of $G$ whenever $M$ is a module of $G$
- `lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour` · lemma — In a connected graph, some vertex outside a nonempty proper module is complete to it
- `def-prime-graph` · definition — Prime graphs: those whose only modules are the trivial ones
- `lem-graphs-on-three-vertices-are-not-prime` · lemma — No graph on exactly three vertices is prime
- `def-substitution-of-a-graph-for-a-vertex` · definition — Substituting one graph for a vertex of another
- `lem-the-substituted-set-is-a-module` · lemma — In $G_1$ with $G_2$ substituted for $a$, the vertex set of $G_2$ is a module, the two factors are recovered as induced subgraphs, and substituting a one-vertex graph changes nothing
- `lem-substitution-commutes-with-complementation` · lemma — The complement of $G_1[a\to G_2]$ is $\overline{G_1}[a\to\overline{G_2}]$
- `thm-prime-graphs-are-the-graphs-that-are-not-substitutions` · theorem — A graph with at least two vertices is prime exactly when it is not obtained by substituting one graph on at least two vertices for a vertex of another graph on at least two vertices
- `def-modular-partition-and-quotient-graph` · definition — Modular partitions and the quotient graph they define
- `lem-a-union-of-parts-is-a-module-exactly-when-the-index-set-is` · lemma — For a modular partition, a set of parts is a module of the quotient exactly when the union of those parts is a module of the graph
- `thm-a-modular-partition-its-quotient-and-its-parts-determine-the-graph` · theorem — A graph is recovered from any modular partition by the induced subgraphs on the parts together with the quotient graph
- `lem-the-quotient-is-an-induced-subgraph-on-a-transversal` · lemma — The quotient by a modular partition is isomorphic to the subgraph induced by any set meeting each part exactly once
- `lem-overlapping-proper-modules-of-a-connected-anticonnected-graph` · lemma — In a connected and anticonnected graph, the union of two proper modules that meet is again a proper module
- `lem-every-vertex-lies-in-a-unique-maximal-proper-module` · lemma — In a connected and anticonnected graph with at least two vertices, each vertex lies in a largest proper module, and two such modules are equal or disjoint
- `thm-gallai-modular-decomposition` · theorem — Gallai's modular decomposition theorem: a graph on at least two vertices is disconnected, or has a disconnected complement, or has a modular partition into its maximal proper modules whose quotient is prime
- `cor-the-prime-quotient-has-at-least-four-vertices` · corollary — The prime quotient produced by the modular decomposition of a connected and anticonnected graph has at least four vertices
- `cor-the-modular-partition-with-a-prime-quotient-is-unique` · corollary — In a connected and anticonnected graph, a modular partition with at least two parts whose quotient is prime consists of the maximal proper modules
- `lem-homogeneous-number-is-monotone-under-induced-subgraphs` · lemma — $\operatorname{hom}(G[W])\le\operatorname{hom}(G)$ for every vertex subset $W$
- `lem-a-large-set-contains-a-pattern-when-the-homogeneous-number-is-small` · lemma — If $\epsilon$ is an Erdős–Hajnal constant for $H$ and $W$ is a nonempty vertex set with $|W|^{\epsilon}>\operatorname{hom}(G)$, then $G[W]$ has an induced copy of $H$
- `lem-supersaturation-for-induced-copies` · lemma — If every $m$-element vertex set contains an induced copy of $H$, then at least $\prod_{i<h}(n-i)/\prod_{i<h}(m-i)$ of the $h$-element vertex sets induce a copy of $H$
- `lem-induced-copies-counted-by-extending-a-deleted-vertex` · lemma — The induced copies of $H_1$ in $G$ are counted by summing, over the induced embeddings of $H_1-v$, the number of vertices that extend them at $v$
- `lem-a-pattern-inside-an-extension-set-produces-the-substitution` · lemma — An induced copy of $H_2$ inside the extension set of an induced embedding of $H_1-v$ yields an induced copy of $H_1$ with $H_2$ substituted for $v$
- `thm-substitution-preserves-the-erdos-hajnal-property` · theorem — Alon–Pach–Solymosi: if $H_1$ and $H_2$ have the Erdős–Hajnal property, so does the graph obtained from $H_1$ by substituting $H_2$ for a vertex
- `cor-the-erdos-hajnal-conjecture-reduces-to-prime-graphs` · corollary — Every graph has the Erdős–Hajnal property if and only if every prime graph does
- `cor-blowing-up-a-vertex-preserves-the-erdos-hajnal-property` · corollary — Substituting a complete or an edgeless graph for a vertex preserves the Erdős–Hajnal property
- `rem-modules-and-the-word-homogeneous` · remark — Why this page says module where its sources say homogeneous set
- `rem-conventions-for-prime-graphs` · remark — Which small graphs count as prime, and why the convention matters

### `modules-substitution-and-prime-graphs-examples` — Modules, Substitution and Prime Graphs — Examples (14 item(s))

- `ex-modules-of-complete-and-edgeless-graphs` · example — Every vertex set is a module of a complete graph and of an edgeless graph
- `ex-modules-of-the-four-vertex-path` · example — The four-vertex path has only trivial modules
- `ex-the-four-vertex-path-is-the-only-prime-graph-on-four-vertices` · example — Up to isomorphism the four-vertex path is the only prime graph on four vertices
- `ex-paths-on-at-least-four-vertices-are-prime` · example — $P_n$ is prime for every $n\ge4$
- `ex-the-five-cycle-is-prime` · example — The five-cycle is prime
- `ex-substitution-into-an-edge-and-into-a-nonedge` · example — Substituting into $K_2$ gives the join and substituting into $\overline{K_2}$ gives the disjoint union
- `ex-the-modular-decomposition-of-a-blown-up-five-cycle` · example — The modular decomposition of a five-cycle with each vertex blown up into an edgeless graph
- `ex-counting-induced-three-vertex-paths-by-extensions` · example — Counting the induced copies of $P_3$ in $P_4$ by extension sets
- `ex-a-four-vertex-graph-with-the-erdos-hajnal-property-by-substitution` · example — Substituting an edge for an endpoint of $P_3$ gives a four-vertex graph with the Erdős–Hajnal property
- `cex-a-union-of-two-disjoint-modules-need-not-be-a-module` · counterexample — Two disjoint modules whose union is not a module
- `cex-a-difference-of-nested-modules-need-not-be-a-module` · counterexample — A difference of two nested modules that is not a module
- `cex-maximal-proper-modules-need-not-be-disjoint-in-a-disconnected-graph` · counterexample — Maximal proper modules need not be disjoint when the graph or its complement is disconnected
- `cex-primality-is-not-inherited-by-induced-subgraphs` · counterexample — An induced subgraph of a prime graph need not be prime
- `fs-every-graph-with-at-least-four-vertices-has-a-nontrivial-module` · false-statement — Every graph with at least four vertices has a nontrivial module

### `sparse-restricted-subgraphs-and-rodl-nikiforov` — Sparse Restricted Subgraphs and the Rödl–Nikiforov Theorems (26 item(s))

- `def-c-sparse-and-c-restricted-vertex-set` · definition — $c$-sparse, $c$-dense and $c$-restricted vertex sets
- `def-directional-and-weak-sparsity-between-vertex-sets` · definition — Sparsity of one vertex set to another, and weak sparsity of a pair
- `lem-weak-sparsity-is-a-bound-on-the-edge-density` · lemma — For disjoint nonempty vertex sets, weak $c$-sparsity says exactly that the edge density is at most $c$
- `lem-sparsity-depends-only-on-the-induced-subgraph` · lemma — A set is $c$-sparse exactly when the maximum degree of the graph it induces is at most $c$ times its size
- `lem-a-sparse-set-has-small-self-density` · lemma — A $c$-sparse set has self-density at most $c$, and a $c$-dense set has self-density at least $1-c-1/|X|$
- `lem-a-weakly-sparse-set-has-a-large-sparse-subset` · lemma — A set of self-density at most $c$ has a subset of at least half its size that is $4c$-sparse
- `lem-restrictedness-is-complement-invariant` · lemma — A set is $c$-sparse in $G$ exactly when it is $c$-dense in $\overline G$, so $c$-restrictedness is complement-invariant
- `lem-sparsity-transfers-to-a-large-subset` · lemma — A subset occupying at least a $\lambda$ fraction of a $c$-sparse set is $(c/\lambda)$-sparse
- `lem-sparsity-is-monotone-in-the-parameter` · lemma — Sparsity is preserved when the parameter grows, and every set of at most two vertices is $0$-restricted
- `cor-a-restricted-set-contains-a-large-stable-set-or-clique` · corollary — A $c$-sparse set $X$ satisfies $\alpha(G[X])\ge|X|/(c|X|+1)$, and a $c$-dense set satisfies $\omega(G[X])\ge|X|/(c|X|+1)$
- `lem-regularity-is-monotone-in-the-parameter` · lemma — An $\epsilon$-regular pair is $\epsilon'$-regular for every $\epsilon'\ge\epsilon$ with $\epsilon'>0$
- `lem-trimming-a-self-regular-set-of-low-density` · lemma — Deleting the high-degree vertices of a $\gamma$-self-regular set of density $d$ leaves more than $(1-\gamma)$ of it, and that remainder is $((d+\gamma)/(1-\gamma))$-sparse
- `lem-trimming-a-self-regular-set-of-high-density` · lemma — Deleting the low-degree vertices of a $\gamma$-self-regular set of density $d$ leaves more than $(1-\gamma)$ of it, and that remainder is $((1-d+2\gamma)/(1-\gamma))$-dense
- `lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies` · lemma — A large $\gamma$-self-regular set whose density lies between $\eta$ and $1-\eta$ forces at least $c|W|^{|V(H)|}$ induced copies of $H$
- `lem-few-induced-copies-is-inherited-by-large-induced-subgraphs` · lemma — If $G$ has fewer than $(\delta n)^{h}$ induced copies of $H$ and $|W|\ge\lambda n$, then $G[W]$ has fewer than $((\delta/\lambda)|W|)^{h}$
- `thm-nikiforov-few-induced-copies-force-a-linear-restricted-set` · theorem — Nikiforov: for every $H$ and every $\epsilon\in(0,\tfrac12)$ there is $\delta>0$ such that every graph $G$ with $\operatorname{ind}_H(G)<(\delta|V(G)|)^{|V(H)|}$ has an $\epsilon$-restricted vertex set of size at least $\delta|V(G)|$
- `cor-rodl-every-h-free-graph-has-a-linear-restricted-set` · corollary — Rödl: for every $H$ and every $\epsilon\in(0,\tfrac12)$ there is $\delta>0$ such that every $H$-free graph has an $\epsilon$-restricted vertex set of size at least $\delta|V(G)|$
- `cor-rodl-for-a-nonempty-family-of-forbidden-graphs` · corollary — Rödl's theorem for a nonempty family of forbidden induced subgraphs
- `cor-rodl-in-the-edge-density-form` · corollary — The edge-density form of Rödl's theorem: a linearly large set of self-density at most $\epsilon$ or at least $1-\epsilon$
- `cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable` · corollary — The edge-density form of Rödl's theorem implies the maximum-degree form, with $\epsilon$ and $\delta$ each shrunk by a constant factor
- `cor-nikiforov-applies-to-every-linearly-large-induced-subgraph` · corollary — A linearly large induced subgraph of a graph with few induced copies again has a linearly large restricted set
- `cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction` · corollary — For every $\lambda>0$ a bounded number of disjoint $\epsilon$-restricted sets covers all but $\lambda|V(G)|$ vertices of an $H$-free graph
- `thm-a-bounded-partition-into-weakly-restricted-sets` · theorem — Every $H$-free graph partitions into boundedly many vertex sets of self-density at most $\epsilon$ or at least $1-\epsilon$
- `rem-the-two-forms-of-rodls-theorem` · remark — Bounded degree against bounded density: the two statements of Rödl's theorem, and which one is stronger
- `rem-the-diagonal-convention-in-self-density` · remark — Why the dense alternative carries a $1/|X|$ slack
- `rem-the-size-of-the-constant-in-rodls-theorem` · remark — What this proof gives for $\delta$, and why the regularity route is expensive

### `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` — Sparse Restricted Subgraphs and the Rödl–Nikiforov Theorems — Examples (11 item(s))

- `ex-zero-sparse-sets-are-the-stable-sets` · example — The $0$-sparse sets are exactly the stable sets and the $0$-dense sets exactly the cliques
- `ex-the-self-density-of-a-clique` · example — A clique of size $s$ has self-density $1-1/s$
- `ex-a-disjoint-union-of-small-cliques-is-a-sparse-vertex-set` · example — In a disjoint union of cliques of order $k$ the whole vertex set is $(k/n)$-sparse
- `ex-rodls-theorem-with-an-explicit-constant-for-p-three-free-graphs` · example — For $P_3$-free graphs Rödl's theorem holds with $\delta=\epsilon$, by an explicit argument
- `ex-restricted-sets-in-a-union-of-two-cliques` · example — In a union of two equal cliques the restricted sets are the ones concentrated on a single side
- `ex-restricted-sets-in-a-complete-bipartite-graph` · example — In a balanced complete bipartite graph the two sides are the restricted sets of linear size
- `cex-weak-sparsity-does-not-imply-sparsity` · counterexample — A star has tiny self-density, yet no restricted subset containing its centre has more than two vertices
- `cex-sparsity-does-not-pass-to-subsets` · counterexample — A subset of a $c$-sparse set that is not $c$-sparse
- `cex-directional-sparsity-is-not-symmetric` · counterexample — $X$ can be $c$-sparse to $Y$ while $Y$ is not $c$-sparse to $X$
- `cex-a-complete-graph-has-no-large-sparse-set` · counterexample — The dense alternative in Rödl's theorem cannot be dropped
- `fs-a-sparse-set-contains-a-stable-set-of-half-its-size` · false-statement — Every $c$-sparse set of size $m$ contains a stable set of size at least $m/2$

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
`research/frontier-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, run `frontier-18`

You are the resumed group Alpha for the group described above. The engine has
already adjudicated the judge rows. This dispatch exists because a mechanical
or contract gate found residue from a licensed fatal repair.

Read the latest failing gate record in `.autopilot/events.jsonl` and take only
the item ids owned by your group. Re-run that gate only on those ids whenever
the tool supports an item filter. Do not run `level-coverage`, a whole-repo gate
battery, a judge sweep, or a workflow transition; the engine owns those tasks.

Preserve the Step-8 fatal-only boundary. You may complete or correct a repair
already licensed by an exact `confirmed_fatal` adjudication and update its
owning batch proof contract, manifest, impact record, or stale verification
metadata. You may also repair a purely documentary contract row so it describes
the current proof exactly. Do not edit an item adjudicated nonfatal or false
positive, and do not broaden the work to polish.

This task is used only before `8-rejudge`. A licensed completion may still
change the item because the exact changed id will be judged afterward. If your
task says the run is in frozen cutover mode, use the separate Step-8 close task
instead; never infer permission to edit from this file after rejudge.

Use the existing append-only ledgers. Never rewrite another group’s rows. Open
every cited dependency needed to check the mathematics; do not clear a detector
by weakening the detector or changing a contract to conceal a real defect.

Return a concise report naming the gate, exact ids reviewed, files changed,
licensing fatal rows, targeted checks run, and any blocker. No permission
prompts.
