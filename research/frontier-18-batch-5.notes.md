# frontier-18 · Beta-5 · batch notes — `lattice-paths-and-catalan-numbers` and `linear-algebra-methods-in-combinatorics` (steps 1–2)

Run `frontier-18`, batch `5`, two A/B pairs, category `combinatorics`.
Author: Beta-5 (Claude Opus 5, claude CLI, `xhigh`, 1M context).
Design sections named by the dispatch: `research/plan-combinatorics-and-categories.md`
§"CB-6. Lattice Paths and Catalan Numbers" (L1552) and §"CB-13. Linear Algebra Methods in
Combinatorics" (L2265). **Both are superseded inside the same file** by
§"CB-6 (ENRICHED)" (L4668) and §"CB-13 (ENRICHED)" (L5321); finding F1 below.

Artifacts owned by this batch and written here:
`research/frontier-18-batch-5.pages.json`,
`research/frontier-18-batch-5.coverage.json`,
`research/frontier-18-batch-5.proof-contracts.json`, and this file.
Nothing else in the repository was written.

---

## 1. Per-page item list

### A page `lattice-paths-and-catalan-numbers` — order 197 — 58 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `def-lattice-path-and-step-set` | definition | Lattice paths, step sets and step words |
| 2 | `lem-lattice-paths-are-determined-by-their-step-words` | lemma | For each start point the step word is a bijection onto $S^n$ |
| 3 | `def-monotone-lattice-path` | definition | Monotone lattice paths with steps $E=(1,0)$ and $N=(0,1)$ |
| 4 | `thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient` | theorem | $\lvert\mathcal{M}((0,0),(m,n))\rvert=\binom{m+n}{n}$ |
| 5 | `def-diagonal-lattice-path-and-its-height` | definition | Diagonal lattice paths with steps $U=(1,1)$ and $D=(1,-1)$, and the height function |
| 6 | `lem-monotone-and-diagonal-lattice-paths-correspond` | lemma | The two step sets describe the same objects: $U\mapsto N$, $D\mapsto E$ is a bijection matching the diagonal $y=x$ with the level $0$ |
| 7 | `cor-diagonal-lattice-paths-with-a-prescribed-endpoint-are-counted-by-a-binomial-coefficient` | corollary | The number of diagonal paths from $(0,a)$ to $(n,b)$ is $\binom{n}{(n+b-a)/2}$ when $n\equiv b-a\pmod2$ and $\lvert b-a\rvert\le n$, and $0$ otherwise |
| 8 | `lem-a-diagonal-path-that-changes-side-of-a-level-meets-it` | lemma | A diagonal path with $h(0)\le c\le h(n)$ or $h(n)\le c\le h(0)$ satisfies $h(i)=c$ for some $i$ |
| 9 | `lem-reflection-at-the-first-visit-to-a-level-is-a-bijection` | lemma | Reflecting the initial segment at the first visit to level $c$ |
| 10 | `thm-reflection-principle-for-diagonal-lattice-paths` | theorem | The reflection principle: paths from $(0,a)$ to $(n,b)$ staying strictly above level $c$ are counted by a difference of two binomial coefficients |
| 11 | `thm-ballot-problem` | theorem | Bertrand's ballot problem: for $p>q\ge0$ the orderings in which the first candidate is strictly ahead throughout satisfy $(p+q)\,N=(p-q)\binom{p+q}{p}$ |
| 12 | `cor-weak-ballot-problem` | corollary | The weak ballot count: for $p\ge q\ge0$ the orderings in which the first candidate is never behind satisfy $(p+1)\,N=(p-q+1)\binom{p+q}{q}$ |
| 13 | `def-dyck-path-and-semilength` | definition | Dyck paths of semilength $n$ |
| 14 | `lem-dyck-paths-of-a-given-semilength-form-a-finite-set` | lemma | $\mathcal{D}_n$ is a finite set |
| 15 | `def-catalan-number` | definition | The Catalan number $C_n:=\lvert\mathcal{D}_n\rvert$ |
| 16 | `thm-catalan-numbers-by-reflection` | theorem | $C_n+\binom{2n}{n+1}=\binom{2n}{n}$ |
| 17 | `cor-catalan-closed-formula` | corollary | $(n+1)\,C_n=\binom{2n}{n}$ |
| 18 | `cor-one-more-than-n-divides-the-central-binomial-coefficient` | corollary | $n+1$ divides $\binom{2n}{n}$ for every $n\in\mathbb{N}$ |
| 19 | `def-cyclic-shift-and-the-periodic-partial-sum-function` | definition | Cyclic shifts of an integer word and its periodic partial-sum function |
| 20 | `lem-cyclic-shift-is-an-action-of-the-integers-modulo-the-length` | lemma | Cyclic shifting is an action of $\mathbb{Z}/m$ on the words of length $m$ over a set |
| 21 | `lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser` | lemma | If $\gcd(\lVert a\rVert,m)=1$ then the shift stabiliser of $a$ is trivial, so its orbit has exactly $m$ elements |
| 22 | `lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums` | lemma | $\sigma^{j}a$ has all partial sums positive exactly when $S_a(i)>S_a(j)$ for every $i>j$ |
| 23 | `lem-strict-right-minima-of-a-quasiperiodic-partial-sum-function` | lemma | If every $a_i\le1$ and $\lVert a\rVert\ge1$, the strict right minima form a two-sided increasing list on which $S_a$ increases by exactly $1$ at each successive index |
| 24 | `thm-cycle-lemma` | theorem | The cycle lemma (Dvoretzky–Motzkin): if every $a_i\le1$ and $\lVert a\rVert=k\ge1$, then exactly $k$ of the $m$ cyclic shifts of $a$ have all partial sums positive |
| 25 | `thm-catalan-numbers-by-the-cycle-lemma` | theorem | $(2n+1)\,C_n=\binom{2n+1}{n}$, a second derivation of the Catalan count |
| 26 | `lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once` | lemma | If $\lVert a\rVert=1$ then $j\mapsto\#\{r:0\le r<m,\ S_a(j+r)\le S_a(j)\}$ is a bijection from $\{0,\dots,m-1\}$ onto $\{1,\dots,m\}$ |
| 27 | `thm-chung-feller` | theorem | The Chung–Feller theorem: for each $k$ with $0\le k\le n$, exactly $C_n$ of the diagonal paths from $(0,0)$ to $(2n,0)$ have exactly $2k$ steps lying above level $0$ |
| 28 | `lem-first-return-decomposition-of-a-nonempty-dyck-path` | lemma | Every Dyck path of semilength $n+1$ factors uniquely as $U\,P\,D\,Q$ with $P\in\mathcal{D}_i$ and $Q\in\mathcal{D}_{n-i}$ |
| 29 | `thm-catalan-recurrence` | theorem | $C_{n+1}=\sum_{i=0}^{n}C_i\,C_{n-i}$, with $C_0=1$ |
| 30 | `def-catalan-generating-function` | definition | The Catalan generating function $C(x)=\sum_{n\ge0}C_nx^n$ in $\mathbb{Q}\llbracket x\rrbracket$ |
| 31 | `thm-catalan-generating-function-satisfies-a-quadratic-equation` | theorem | $C(x)=1+x\,C(x)^2$ |
| 32 | `lem-the-coefficients-of-the-formal-square-root-of-one-minus-four-x` | lemma | $[x^k](1-4x)^{1/2}=-\frac{2}{k}\binom{2k-2}{k-1}$ for $k\ge1$, and $1$ for $k=0$ |
| 33 | `thm-catalan-generating-function-closed-form` | theorem | $2x\,C(x)=1-(1-4x)^{1/2}$, where $(1-4x)^{1/2}$ is the unique square root with constant coefficient $1$ |
| 34 | `thm-catalan-numbers-from-the-generating-function` | theorem | A third derivation of $(n+1)\,C_n=\binom{2n}{n}$, from the closed form of $C(x)$ |
| 35 | `thm-the-catalan-generating-function-is-not-rational` | theorem | $C(x)$ is not a rational formal power series, so $(C_n)$ satisfies no eventual constant-coefficient linear recurrence |
| 36 | `def-motzkin-and-schroder-paths` | definition | Motzkin paths, Schröder paths, the Motzkin numbers $M_n$, the large Schröder numbers $R_n$, and their generating functions |
| 37 | `thm-motzkin-numbers-by-first-return-decomposition` | theorem | $M(x)=1+x\,M(x)+x^{2}M(x)^{2}$, and $2x^{2}M(x)=1-x-(1-2x-3x^{2})^{1/2}$ |
| 38 | `cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers` | corollary | $M_n=\sum_{k\in\mathbb{N},\,2k\le n}\binom{n}{2k}C_k$ |
| 39 | `thm-large-schroder-numbers-by-first-return-decomposition` | theorem | $R(x)=1+x\,R(x)+x\,R(x)^{2}$, and $2x\,R(x)=1-x-(1-6x+x^{2})^{1/2}$ |
| 40 | `cor-large-schroder-numbers-as-a-binomial-sum-of-catalan-numbers` | corollary | $R_n=\sum_{k=0}^{n}\binom{n+k}{2k}C_k$ |
| 41 | `def-balanced-bracket-word` | definition | Balanced bracket words, defined by the recursive grammar |
| 42 | `thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words` | theorem | $\mathcal{B}_n$ is exactly the set of words of length $2n$ over $\{\texttt{(},\texttt{)}\}$ in which every prefix has at least as many $\texttt{(}$ as $\texttt{)}$ and the totals are equal |
| 43 | `cor-balanced-bracket-words-are-counted-by-the-catalan-numbers` | corollary | $\lvert\mathcal{B}_n\rvert=C_n$ |
| 44 | `def-binary-tree-and-its-size` | definition | Binary trees, defined recursively, and their size |
| 45 | `lem-binary-trees-of-a-given-size-form-a-finite-set` | lemma | Each $\mathcal{T}_n$ is finite |
| 46 | `thm-binary-trees-correspond-to-dyck-paths` | theorem | There is a bijection $\mathcal{T}_n\to\mathcal{D}_n$ for every $n$ |
| 47 | `cor-binary-trees-are-counted-by-the-catalan-numbers` | corollary | $\lvert\mathcal{T}_n\rvert=C_n$ |
| 48 | `def-convex-polygon-chords-crossings-and-triangulations` | definition | Chords of a labelled convex polygon, crossing, and triangulations, defined combinatorially |
| 49 | `lem-a-triangulation-has-a-unique-triangle-on-the-closing-side` | lemma | For $m\ge3$ and a triangulation $T$ of the $m$-gon there is a unique $k$ with $1<k<m$ such that $\{1,k\}$ and $\{k,m\}$ are both chords of $T$ or sides, and $T$ splits along $k$ |
| 50 | `thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees` | theorem | There is a bijection $\mathcal{T}_n\to\mathcal{P}_{n+2}$ for every $n\in\mathbb{N}$ |
| 51 | `cor-triangulations-of-a-convex-polygon-are-counted-by-the-catalan-numbers` | corollary | $\lvert\mathcal{P}_{n+2}\rvert=C_n$ |
| 52 | `def-path-system-and-non-intersecting-path-system` | definition | Path systems between two families of lattice points, and non-intersecting systems |
| 53 | `lem-sign-reversing-involution-on-intersecting-path-systems` | lemma | Tail-swapping is a sign-reversing involution on the intersecting systems |
| 54 | `thm-lindstrom-gessel-viennot` | theorem | $\det\bigl(\lvert\mathcal{M}(A_i,E_j)\rvert\bigr)_{i,j}=\sum_{\pi\in S_r}\operatorname{sgn}(\pi)\cdot\#\{\text{non-intersecting }\pi\text{-systems}\}$ |
| 55 | `cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant` | corollary | For $n\ge1$ the pairs of non-intersecting monotone paths $(1,0)\to(n+1,n)$ and $(0,1)\to(n,n+1)$ number $\binom{2n}{n}^2-\binom{2n}{n+1}\binom{2n}{n-1}$ |
| 56 | `rem-routes-to-the-catalan-count` | remark | Why the Catalan count is proved three times, and how the three statements agree |
| 57 | `rem-binary-trees-and-triangulations-here-are-combinatorial-objects` | remark | The trees and polygons of this page are defined by recursion and by inequalities on labels |
| 58 | `rem-lattice-path-conventions` | remark | Conventions fixed on this page |

Landmarks for step 5 (`landmark: true`) on this page: `def-lattice-path-and-step-set`, `thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient`, `def-diagonal-lattice-path-and-its-height`, `lem-reflection-at-the-first-visit-to-a-level-is-a-bijection`, `thm-reflection-principle-for-diagonal-lattice-paths`, `thm-ballot-problem`, `def-dyck-path-and-semilength`, `def-catalan-number`, `thm-catalan-numbers-by-reflection`, `cor-catalan-closed-formula`, `thm-cycle-lemma`, `thm-catalan-numbers-by-the-cycle-lemma`, `lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once`, `thm-chung-feller`, `lem-first-return-decomposition-of-a-nonempty-dyck-path`, `thm-catalan-recurrence`, `thm-catalan-generating-function-satisfies-a-quadratic-equation`, `thm-catalan-generating-function-closed-form`, `def-motzkin-and-schroder-paths`, `thm-motzkin-numbers-by-first-return-decomposition`, `thm-large-schroder-numbers-by-first-return-decomposition`, `thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words`, `def-binary-tree-and-its-size`, `thm-binary-trees-correspond-to-dyck-paths`, `def-convex-polygon-chords-crossings-and-triangulations`, `thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees`, `lem-sign-reversing-involution-on-intersecting-path-systems`, `thm-lindstrom-gessel-viennot`. Every other item on the page is `landmark: false`.

### B page `lattice-paths-and-catalan-numbers-examples` — order 198 — 16 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-monotone-lattice-paths-from-the-origin-to-three-two` | example | The ten monotone lattice paths from $(0,0)$ to $(3,2)$ |
| 2 | `ex-the-five-dyck-paths-of-semilength-three` | example | The five Dyck paths of semilength $3$, with their height functions |
| 3 | `ex-the-three-catalan-families-matched-at-semilength-three` | example | The five Dyck paths of semilength $3$ matched to bracket words, binary trees and pentagon triangulations |
| 4 | `ex-the-reflection-bijection-on-a-concrete-path` | example | Reflecting a path from $(0,0)$ to $(6,0)$ at its first visit to level $-1$ |
| 5 | `ex-the-ballot-problem-with-three-and-two-votes` | example | The ballot problem for $p=3$, $q=2$: two orderings out of ten |
| 6 | `ex-the-cycle-lemma-on-a-word-of-length-seven` | example | The seven cyclic shifts of a $\pm1$ word of weight $1$, exactly one with all partial sums positive |
| 7 | `ex-catalan-numbers-to-six-computed-two-ways` | example | $C_0$ to $C_6$ by the recurrence and by the closed formula |
| 8 | `ex-the-fourteen-triangulations-of-a-convex-hexagon` | example | The fourteen triangulations of the convex hexagon |
| 9 | `ex-the-first-coefficients-of-the-catalan-generating-function` | example | Squaring the truncation of $C(x)$ and of $(1-4x)^{1/2}$ through degree five |
| 10 | `ex-non-intersecting-path-pairs-by-a-two-by-two-determinant` | example | The three non-intersecting path pairs at $n=1$, counted by hand and by the determinant |
| 11 | `ex-the-tail-swap-involution-on-an-intersecting-pair` | example | Tail-swapping applied to an intersecting pair, and applied twice |
| 12 | `fs-the-central-binomial-quotient-is-an-integer-only-for-small-n` | false-statement | FALSE: $\binom{2n}{n}/(n+1)$ is a natural number only for small $n$ |
| 13 | `fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths` | false-statement | FALSE: the monotone paths from $(0,0)$ to $(n,n)$ that stay weakly below the diagonal number $\binom{2n}{n}/2$ |
| 14 | `fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence` | false-statement | FALSE: the Catalan numbers satisfy a constant-coefficient linear recurrence |
| 15 | `cex-a-map-between-two-catalan-families-that-is-not-injective` | counterexample | A natural-looking map from hexagon triangulations to Dyck paths that is not injective |
| 16 | `cex-a-step-set-for-which-the-reflection-argument-fails` | counterexample | With steps $(1,1)$ and $(1,-2)$ a path can pass from above a level to below it without meeting it |

Landmarks for step 5 (`landmark: true`) on this page: none. Every other item on the page is `landmark: false`.

### A page `linear-algebra-methods-in-combinatorics` — order 223 — 46 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `def-incidence-vector-of-a-subset` | definition | The incidence vector $v_A\in F^{n}$ of a subset $A\subseteq[n]$ over a stated field |
| 2 | `def-standard-bilinear-form-on-a-coordinate-space` | definition | The standard bilinear form $\langle x,y\rangle=\sum_{i<n}x_iy_i$ on $F^{n}$ |
| 3 | `lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size` | lemma | $\langle v_A,v_B\rangle$ is the image of $\lvert A\cap B\rvert$ in $F$; over $\mathbb{F}_2$ it is $0$ or $1$ according to the parity of $\lvert A\cap B\rvert$ |
| 4 | `def-set-family-and-its-incidence-matrix` | definition | A finite family of subsets of $[n]$ and its incidence matrix over $F$ |
| 5 | `lem-a-family-with-independent-incidence-vectors-has-at-most-n-members` | lemma | If the incidence vectors of $A_1,\dots,A_m\subseteq[n]$ are linearly independent over $F$ then $m\le n$ |
| 6 | `lem-diagonal-independence-criterion` | lemma | Diagonal criterion: if $\langle v_i,w_i\rangle\ne0$ and $\langle v_i,w_j\rangle=0$ for $i\ne j$, then $v_1,\dots,v_m$ are linearly independent |
| 7 | `lem-triangular-independence-criterion` | lemma | Triangular criterion: if $\langle v_i,w_i\rangle\ne0$ and $\langle v_i,w_j\rangle=0$ for $j<i$, then $v_1,\dots,v_m$ are linearly independent |
| 8 | `lem-determinant-independence-criterion` | lemma | Determinant criterion: if the matrix $\bigl(\langle v_i,w_j\rangle\bigr)_{i,j}$ is invertible then both $v_1,\dots,v_m$ and $w_1,\dots,w_m$ are linearly independent |
| 9 | `thm-oddtown` | theorem | Oddtown: distinct $A_1,\dots,A_m\subseteq[n]$ with every $\lvert A_i\rvert$ odd and every $\lvert A_i\cap A_j\rvert$ ($i\ne j$) even satisfy $m\le n$ |
| 10 | `cor-the-oddtown-bound-is-attained` | corollary | The $n$ singletons form an Oddtown family, so the bound $m\le n$ is attained for every $n$ |
| 11 | `lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field` | lemma | A $d$-dimensional vector space over a field with $q$ elements has exactly $q^{d}$ elements |
| 12 | `lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form` | lemma | For a subspace $U\le F^{n}$, $\dim_F U^{\perp}=n-\dim_F U$, where $U^{\perp}=\{x:\langle x,u\rangle=0\text{ for all }u\in U\}$ |
| 13 | `thm-eventown` | theorem | Eventown: distinct $A_1,\dots,A_m\subseteq[n]$ with every $\lvert A_i\rvert$ and every $\lvert A_i\cap A_j\rvert$ even satisfy $m\le 2^{\lfloor n/2\rfloor}$ |
| 14 | `thm-every-maximal-eventown-family-is-maximum` | theorem | An Eventown family that no further set can be added to has exactly $2^{\lfloor n/2\rfloor}$ members |
| 15 | `lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent` | lemma | If $v_1,\dots,v_m\in\mathbb{R}^{n}$ satisfy $\langle v_i,v_j\rangle=t\ge0$ for $i\ne j$ and $\langle v_i,v_i\rangle>t$, they are linearly independent |
| 16 | `thm-nonuniform-fisher-inequality` | theorem | Fisher's inequality, nonuniform form: distinct nonempty $A_1,\dots,A_m\subseteq[n]$ with $\lvert A_i\cap A_j\rvert=t$ for all $i\ne j$ satisfy $m\le n$ |
| 17 | `cor-uniform-fisher-inequality` | corollary | A $k$-uniform family on $[n]$ with all pairwise intersections of size $t<k$ has at most $n$ members |
| 18 | `def-complete-bipartite-decomposition-of-a-graph` | definition | A decomposition of a graph's edge set into complete bipartite subgraphs |
| 19 | `thm-graham-pollak` | theorem | Graham–Pollak: a complete bipartite decomposition of $K_n$ has at least $n-1$ parts |
| 20 | `def-shattering-and-vc-dimension` | definition | Shattering and the Vapnik–Chervonenkis dimension of a set family |
| 21 | `def-down-shift-of-a-set-family` | definition | The down-shift $S_j$ of a set family at a point $j$ |
| 22 | `lem-the-down-shift-preserves-the-number-of-sets` | lemma | $\lvert S_j(\mathcal{F})\rvert=\lvert\mathcal{F}\rvert$, and $w(S_j(\mathcal{F}))\le w(\mathcal{F})$ with equality only when $S_j(\mathcal{F})=\mathcal{F}$ |
| 23 | `lem-the-down-shift-creates-no-new-shattered-set` | lemma | Every set shattered by $S_j(\mathcal{F})$ is shattered by $\mathcal{F}$ |
| 24 | `lem-iterated-down-shifting-terminates-in-a-downward-closed-family` | lemma | Applying down-shifts until none changes the family terminates, and the result is closed under taking subsets |
| 25 | `lem-a-downward-closed-family-shatters-each-of-its-members` | lemma | If $\mathcal{F}$ is closed under taking subsets then $\mathcal{F}$ shatters every $F\in\mathcal{F}$ |
| 26 | `thm-sauer-shelah` | theorem | Sauer–Shelah: a family on $[n]$ of VC dimension at most $d$ has at most $\sum_{i=0}^{d}\binom{n}{i}$ members |
| 27 | `cor-sauer-shelah-polynomial-bound` | corollary | For $d\ge1$ a family on $[n]$ of VC dimension at most $d$ has at most $(n+1)^{d}$ members |
| 28 | `def-inclusion-matrix` | definition | The inclusion matrix $W_{t,k}(n)$ of $t$-sets against $k$-sets |
| 29 | `thm-rank-of-the-point-inclusion-matrix` | theorem | $\operatorname{rank}_{\mathbb{Q}}W_{1,k}(n)=n$ for $1\le k\le n-1$ |
| 30 | `rem-the-rank-of-a-general-inclusion-matrix-is-not-established-here` | remark | What is and is not proved about $\operatorname{rank}W_{t,k}(n)$ on this page |
| 31 | `def-monomials-multidegree-and-total-degree` | definition | Monomials, coefficients, degree in each variable and total degree in $F[x_1,\dots,x_n]$ |
| 32 | `thm-polynomial-identity-lemma` | theorem | If $\deg_{x_i}P<\lvert S_i\rvert$ for each $i$ and $P$ vanishes on $S_1\times\cdots\times S_n$, then $P=0$ |
| 33 | `lem-grid-reduction-of-a-multivariate-polynomial` | lemma | Reducing $f$ modulo $g_i(x_i)=\prod_{s\in S_i}(x_i-s)$ lowers each $\deg_{x_i}$ below $\lvert S_i\rvert$, preserves the values on the grid, and does not change the coefficient of a monomial of top total degree |
| 34 | `thm-combinatorial-nullstellensatz` | theorem | Alon's Combinatorial Nullstellensatz: if $\deg f=\sum_it_i$, the coefficient of $x_1^{t_1}\cdots x_n^{t_n}$ in $f$ is nonzero, and $\lvert S_i\rvert>t_i$, then $f(s_1,\dots,s_n)\ne0$ for some $s_i\in S_i$ |
| 35 | `lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime` | lemma | If $p$ is prime and $0\le k\le m<p$ then $p\nmid\binom{m}{k}$ |
| 36 | `thm-cauchy-davenport` | theorem | Cauchy–Davenport: for $p$ prime and nonempty $A,B\subseteq\mathbb{Z}/p$, $\lvert A+B\rvert\ge\min\{p,\lvert A\rvert+\lvert B\rvert-1\}$ |
| 37 | `thm-alon-furedi-hyperplane-cover-of-the-cube` | theorem | Covering $\{0,1\}^{n}$ minus the origin by affine hyperplanes avoiding the origin needs at least $n$ of them |
| 38 | `def-multilinear-polynomial-and-multilinear-reduction` | definition | Multilinear polynomials and the reduction $x_i^{2}\mapsto x_i$ on the cube |
| 39 | `lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction` | lemma | $\widetilde f$ is multilinear, agrees with $f$ at every point of $\{0,1\}^{n}$, has no larger total degree, and is the unique multilinear polynomial with that agreement |
| 40 | `lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube` | lemma | The functions $\{0,1\}^{n}\to F$ obtained from $x_T$ with $\lvert T\rvert\le s$ are linearly independent, so they span a space of dimension $\sum_{i=0}^{s}\binom{n}{i}$ |
| 41 | `def-l-intersecting-family` | definition | $L$-intersecting families |
| 42 | `thm-frankl-wilson-nonuniform-bound` | theorem | An $L$-intersecting family on $[n]$ with $\lvert L\rvert=s$ has at most $\sum_{i=0}^{s}\binom{n}{i}$ members |
| 43 | `lem-an-unshattered-set-reduces-a-monomial-on-a-family` | lemma | If $\mathcal{F}$ does not shatter $T$ then $x_T$ agrees on $\{v_F:F\in\mathcal{F}\}$ with a combination of the $x_S$ for $S\subsetneq T$ |
| 44 | `thm-sauer-shelah-by-multilinear-polynomials` | theorem | A second proof of Sauer–Shelah, from the multilinear polynomial space |
| 45 | `rem-sauer-shelah-uses-no-linear-algebra` | remark | The shifting proof of Sauer–Shelah uses no field and no vector space |
| 46 | `rem-the-field-is-a-hypothesis-of-every-bound-on-this-page` | remark | Which field each bound is proved over, and what changes when it is replaced |

Landmarks for step 5 (`landmark: true`) on this page: `def-incidence-vector-of-a-subset`, `def-standard-bilinear-form-on-a-coordinate-space`, `lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size`, `lem-a-family-with-independent-incidence-vectors-has-at-most-n-members`, `lem-diagonal-independence-criterion`, `thm-oddtown`, `thm-eventown`, `lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent`, `thm-nonuniform-fisher-inequality`, `thm-graham-pollak`, `def-shattering-and-vc-dimension`, `thm-sauer-shelah`, `def-inclusion-matrix`, `thm-polynomial-identity-lemma`, `thm-combinatorial-nullstellensatz`, `thm-cauchy-davenport`, `thm-alon-furedi-hyperplane-cover-of-the-cube`, `thm-frankl-wilson-nonuniform-bound`. Every other item on the page is `landmark: false`.

### B page `linear-algebra-methods-in-combinatorics-examples` — order 224 — 18 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-an-oddtown-family-on-four-points` | example | An Oddtown family of four clubs on four citizens, and why a fifth cannot be added |
| 2 | `ex-an-eventown-family-of-maximum-size` | example | The pairing construction gives an Eventown family of size $2^{\lfloor n/2\rfloor}$ |
| 3 | `ex-the-nonuniform-fisher-bound-on-the-seven-lines-of-the-fano-plane` | example | The seven lines of the Fano plane meet pairwise in one point, and Fisher's bound is tight |
| 4 | `ex-graham-pollak-for-the-complete-graph-on-four-vertices` | example | $K_4$ decomposed into three complete bipartite graphs, and no decomposition into two |
| 5 | `ex-a-family-of-vc-dimension-two-attaining-the-sauer-shelah-bound` | example | All subsets of $[4]$ of size at most $2$: VC dimension $2$ and exactly $\sum_{i\le2}\binom{4}{i}=11$ members |
| 6 | `ex-the-inclusion-matrix-of-points-against-pairs-on-four-points` | example | $W_{1,2}(4)$ written out, and its rank computed |
| 7 | `ex-cauchy-davenport-in-the-integers-modulo-seven` | example | $A=B=\{0,1,2\}$ in $\mathbb{Z}/7$: the sumset has five elements and the bound is tight |
| 8 | `ex-the-combinatorial-nullstellensatz-on-a-two-variable-polynomial` | example | Applying the Nullstellensatz by hand to $f(x,y)=x^{2}y+xy^{2}+x+y$ over $\mathbb{Q}$ |
| 9 | `ex-the-nonuniform-intersection-bound-on-the-pairs-in-four-points` | example | The six $2$-subsets of $[4]$ are $\{0,1\}$-intersecting, and the bound $\sum_{i\le2}\binom{4}{i}=11$ holds |
| 10 | `ex-covering-the-cube-minus-the-origin-with-n-hyperplanes` | example | The $n$ hyperplanes $x_i=1$ cover $\{0,1\}^{n}$ except the origin, so the Alon–Füredi bound is tight |
| 11 | `fs-the-oddtown-bound-can-be-improved-to-n-minus-one` | false-statement | FALSE: an Oddtown family on $[n]$ has at most $n-1$ members |
| 12 | `fs-fisher-inequality-holds-over-the-two-element-field` | false-statement | FALSE: the Fisher bound $m\le n$ follows from the same argument run over $\mathbb{F}_2$ |
| 13 | `fs-a-family-of-vc-dimension-d-has-at-most-n-to-the-d-members` | false-statement | FALSE: a family on $[n]$ of VC dimension at most $d$ has at most $n^{d}$ members |
| 14 | `fs-the-standard-bilinear-form-on-the-two-element-field-is-an-inner-product` | false-statement | FALSE: $\langle x,y\rangle=\sum_ix_iy_i$ makes $\mathbb{F}_2^{n}$ an inner product space |
| 15 | `fs-the-combinatorial-nullstellensatz-holds-without-the-top-coefficient-hypothesis` | false-statement | FALSE: if $\deg f=\sum_it_i$ and $\lvert S_i\rvert>t_i$ then $f$ is nonzero somewhere on $S_1\times\cdots\times S_n$ |
| 16 | `cex-incidence-vectors-dependent-over-the-two-element-field-and-independent-over-the-reals` | counterexample | A set family whose incidence vectors are dependent over $\mathbb{F}_2$ and independent over $\mathbb{R}$ |
| 17 | `cex-cauchy-davenport-fails-for-a-composite-modulus` | counterexample | In $\mathbb{Z}/4$ the sets $A=B=\{0,2\}$ have $\lvert A+B\rvert=1$ |
| 18 | `cex-a-nonzero-polynomial-vanishing-on-a-grid-of-exactly-its-degree` | counterexample | $P(x)=x(x-1)$ vanishes on $\{0,1\}$ although $\deg_x P=\lvert\{0,1\}\rvert$ |

Landmarks for step 5 (`landmark: true`) on this page: none. Every other item on the page is `landmark: false`.

Both A pages are below the 60-item `validate-plan` ceiling, with headroom of nine items on
`lattice-paths-and-catalan-numbers` and fourteen on `linear-algebra-methods-in-combinatorics`,
so no split is proposed. Section 3 records the material that would go into that headroom if
Alpha reverses any of the declines in section 4.

---

## 2. Per-pair richness report

Both passes — proof decomposition and the corollary pass — were run on each A/B pair, and
both found work on each.

### Pair 1, `lattice-paths-and-catalan-numbers`

**Proof-decomposition pass.** Four proofs the sources present as single arguments were split.

* **The reflection principle.** Krattenthaler Theorem 10.3.1 states a count; its proof is a
  bijection performed inline. Split into `lem-a-diagonal-path-that-changes-side-of-a-level-meets-it`
  (the discrete intermediate-value step, which is the only place the unit step size is spent, and
  which the companion page's counterexample points at), `lem-reflection-at-the-first-visit-to-a-level-is-a-bijection`
  (the map, with a two-sided inverse), and the counting theorem itself. The design's trap (i)
  requires exactly this: "reflect and count" is not a step.
* **The cycle lemma.** Dershowitz–Zaks give two proofs in prose; the second is the one that
  survives formalisation. Split into `def-cyclic-shift-and-the-periodic-partial-sum-function`
  (the two-sided partial-sum function by a closed formula, since the library has no two-sided
  sequence machinery), `lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums`
  (the translation), `lem-strict-right-minima-of-a-quasiperiodic-partial-sum-function` (the
  existence, value and succession claims, where the hypothesis that every letter is at most one
  is spent), and `thm-cycle-lemma`. Freeness of the orbit is a separate lemma,
  `lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser`, because the
  count of good words is a count of orbits and that step needs orbit–stabiliser, not the cycle
  lemma.
* **The generating-function route.** Split into the functional equation, the coefficient lemma
  `lem-the-coefficients-of-the-formal-square-root-of-one-minus-four-x`, the closed form (where
  the root is IDENTIFIED by the published uniqueness clause rather than chosen — the design's
  trap (ii)), and the coefficient extraction.
* **Lindström–Gessel–Viennot.** Split into the path-system definition, the sign-reversing
  involution (whose whole difficulty is that the three choices must be canonical), and the
  determinant identity.

**Corollary pass.** Added: `cor-weak-ballot-problem` (the weakly-ahead count, which is what the
Catalan case needs); `cor-one-more-than-n-divides-the-central-binomial-coefficient` (the
divisibility, proved by exhibiting the quotient as a count, which is what makes the companion
page's false statement refutable in two lines); `cor-diagonal-lattice-paths-with-a-prescribed-endpoint-are-counted-by-a-binomial-coefficient`
(with the vanishing case proved, since three later differences rely on it);
`thm-the-catalan-generating-function-is-not-rational`, which is the page's seam with the
published `linear-recurrences-and-rational-generating-functions` and costs four steps;
`cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant`, checked by
hand at the first parameter value.

**Second proofs, deliberately (owner, 2026-08-20).** The identity `(n+1)C_n = binom(2n,n)` is
proved three times by genuinely different methods: a bijection between two sets of paths
(`thm-catalan-numbers-by-reflection`), a free action of the integers modulo `2n+1`
(`thm-catalan-numbers-by-the-cycle-lemma`), and formal algebra in the rational power series ring
(`thm-catalan-numbers-from-the-generating-function`). Each names the others, and
`rem-routes-to-the-catalan-count` records which hypotheses each spends. A fourth route through
the published `thm-lagrange-burmann-inversion` was considered and **declined**: it starts from
the same functional equation as the generating-function route and differs only in avoiding the
square root, which is a rearrangement rather than a different method, and the published
`ex-lagrange-inversion-catalan-coefficients` already performs that computation (on a B page, so
it may not be cited — the enriched design's trap (v)).

**Added at the step-3 fix pass (findings B5-1 and B5-2), and what each pass found.** The
decomposition pass on the new material split the Chung–Feller argument in two:
`lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once` carries the
combinatorial content — that the shifts of a weight-one word sort themselves by how many of their
partial sums are nonpositive — and `thm-chung-feller` spends it. That lemma is the refinement of
the cycle lemma the page did not have: `thm-cycle-lemma` counts only the shifts whose partial sums
are all positive. The blocking reduction and the up-crossing/down-crossing pairing are numbered
steps inside `thm-chung-feller` rather than lemmas of their own, because neither has a second
consumer and the generated-claim rule prefers an inline decomposition step to a minted statement.
The corollary pass on the Motzkin and Schröder block added
`cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers` and
`cor-large-schroder-numbers-as-a-binomial-sum-of-catalan-numbers`: both are Krattenthaler
Corollary 10.8.2 verbatim, both are proved by deleting the level steps — a bijective route, not the
generating function again — and together they are what makes the page's own Catalan numbers count
something other than Dyck paths.

**Second proofs on the new block.** `thm-motzkin-numbers-by-first-return-decomposition` and its
corollary prove two different things about the same numbers by two different methods, and each names
the other; the same holds on the Schröder side. Neither is a restatement: one gives an algebraic
equation in $\mathbb{Q}\llbracket x\rrbracket$, the other a closed sum, and no step is shared.

### Pair 2, `linear-algebra-methods-in-combinatorics`

**Proof-decomposition pass.** Five splits.

* **The three independence criteria** are separate items, as the enriched design requires,
  because every later proof names exactly one of them: Oddtown and Eventown use the diagonal
  criterion, the intersection bound uses the triangular one, and the determinant criterion is
  stated for completeness and used by neither.
* **Eventown** needs two lemmas the library does not have:
  `lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field` and
  `lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form`. The second is proved by
  rank–nullity rather than by the published double-annihilator theorem, which is stated under the
  axiom of choice; the design's choice ledger records that this block spends none.
* **Sauer–Shelah by shifting** is split into the two compression lemmas the design names
  separately, plus termination and the downward-closed base — four lemmas, because the argument
  is unprovable without both compression halves.
* **The Combinatorial Nullstellensatz** is split into the polynomial identity lemma and the grid
  reduction, whose third clause (the top coefficient survives reduction) is the step that does
  the work and is where a proof is usually waved through.
* **Cauchy–Davenport's** binomial non-vanishing is its own lemma, as the design demands it be a
  cited step rather than an observation.

**Corollary pass.** Added: `cor-the-oddtown-bound-is-attained` (the sharpness is used, not
mentioned); `cor-uniform-fisher-inequality` (the form the companion page applies to the Fano
lines); `cor-sauer-shelah-polynomial-bound` (so the companion page's false statement has a true
bound to be measured against). Also added, beyond the §11 inventory: **Graham–Pollak**, which
both primary sources carry and which the enriched design names, and
**`thm-rank-of-the-point-inclusion-matrix`**, the case the companion page computes.

**Second proof, deliberately.** Sauer–Shelah is proved twice: by compression
(`thm-sauer-shelah`, which uses no field and no vector space) and by a spanning argument in the
multilinear polynomial space (`thm-sauer-shelah-by-multilinear-polynomials`). The enriched
design calls this the page's one deliberate two-routes item;
`rem-sauer-shelah-uses-no-linear-algebra` states which machinery each spends, which the design
requires so a reader does not inherit a false prerequisite.

---

## 3. Findings

Each is one recommendation to approve or decline, most severe first.

### F1 — the design file supersedes itself, and the spec follows neither. **Adjudication needed.**

**What is wrong.** The dispatch names `plan-combinatorics-and-categories.md` L1552 (CB-6) and
L2265 (CB-13). The same file, at L4668 and L5321, carries **CB-6 (ENRICHED)** and
**CB-13 (ENRICHED)**, written 2026-08-13, which supersede them: L142 states that two denials
were withdrawn and one rating reversed, and L50 tables a §23 block in which CB-13 keeps only
"rank bounds, inclusion matrices" while a new **CB-23** takes the Combinatorial Nullstellensatz
and a new **CB-24** takes polynomial spaces and Frankl–Wilson. `research/plan-spec.json`
contains **neither CB-23 nor CB-24**, and still lists `linear-algebra-methods-in-combinatorics`
at 223 with `block-designs-and-finite-projective-planes` at 225 and
`algebraic-and-spectral-graph-theory` at 227 — the pre-enrichment layout.

**What I propose.** Follow the spec, as the dispatch directs, and build the Combinatorial
Nullstellensatz block on `linear-algebra-methods-in-combinatorics`, per the §11 CB-13 design the
dispatch names. Deferring it is not available: a `deferred` disposition must name a destination
that resolves, and `CB-23` is not a page id in `plan-spec.json`. The enriched CB-13 inventory
(the three independence criteria, Eventown's maximal-is-maximum theorem, Graham–Pollak, the
inclusion matrix) is built as well, so the page carries both inventories.

**What breaks if declined.** If Alpha declines, nine items go (`def-monomials-multidegree-and-total-degree`,
`thm-polynomial-identity-lemma`, `lem-grid-reduction-of-a-multivariate-polynomial`,
`thm-combinatorial-nullstellensatz`, `lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime`,
`thm-cauchy-davenport`, `thm-alon-furedi-hyperplane-cover-of-the-cube`, and the two companion
false statements about them), the multilinear block loses its degree machinery and the
intersection bound with it, and the page becomes the rank-bound half alone. The spec-vs-design
divergence itself is not mine to settle; it is the stage-1 `drift` unit's, and this finding is
the report it needs.

### F2 — the design's stated orders disagree with the spec. **Recorded, no action.**

CB-6 says order 179 and CB-13 says order 205; the spec says 197 and 223. Both pairs are built
against the spec, and the `requires` lines are taken from the spec, not from the design. The
enriched CB-6 additionally requires `CB-15`, which does not exist in the spec; see F10.

### F3 — the enriched CB-13 makes a claim that is false of disk. **Approve the correction.**

L5335 states that the third of §11's uncertainties "cannot be resolved, because that page carries
0 items (§27)", of `inner-product-spaces-and-orthogonality`. That page carries **34 published
items** on disk, including `def-inner-product-space`, `prop-standard-coordinate-inner-products`,
`thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` and
`thm-gram-determinant-detects-linear-independence`. The scaffold cites it. If the note is left
standing, the next scaffolder to read it re-mints Cauchy–Schwarz and the Gram determinant.

### F4 — Lindström–Gessel–Viennot is kept here. **Approve.**

§11 recommends dropping it; the enriched CB-6 reverses that with reasons (its proof is a
sign-reversing involution, not linear algebra, and its consumers are spread over three later
pages). Both `symmetric-groups-and-the-sign-homomorphism` (44) and
`determinants-of-matrices-over-a-commutative-ring` (82) are inside this page's `requires`
closure, so it is buildable. Four items. If declined, remove
`def-path-system-and-non-intersecting-path-system`,
`lem-sign-reversing-involution-on-intersecting-path-systems`, `thm-lindstrom-gessel-viennot`,
`cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant` and the two
companion examples.

### F5 — the second Nullstellensatz application is Alon–Füredi, not a colouring corollary. **Approve.**

§11 asks for "the Cauchy–Davenport theorem ... and a graph colouring corollary". The colouring
applications in the harvested source (Alon §§7 and 9) are Alon–Tarsi and its planar-bipartite
consequence; they need orientations, Eulerian sub-digraphs, the graph polynomial and the
choosability notion, none of which the library has, and the enriched design routes them to CB-23
with planarity as a declared forward reference. In their place the page takes **Alon Theorem 6.3**
(covering the cube minus one vertex), which is Matoušek's Miniature 16 as well, so it is doubly
sourced and needs nothing the page does not already build. The colouring corollary is recorded
as `deferred` with destination `owner-decision` in the coverage file. If declined, name the
colouring result you want and the machinery it may assume.

### F6 — the general inclusion-matrix rank theorem is not built; only `t = 1` is. **Approve.**

The enriched CB-13 names `rank_Q W_{t,k}(n) = binom(n,t)` for `t <= k <= n-t`. I worked the
natural proof and it does not close: splitting rows and columns by whether they contain the last
point gives a block lower-triangular matrix with diagonal blocks `W_{t-1,k-1}(n-1)` and
`W_{t,k}(n-1)`, and the second block's hypothesis needs `k <= (n-1)-t`, so the provable range
loses one unit at every step of the induction and the induction proves nothing new. The boundary
case `k = n-t` is, after complementation, the nonsingularity of the disjointness matrix, whose
known proofs go through eigenvalues in the Johnson scheme or Gottlieb's construction. The page
therefore builds `def-inclusion-matrix` with the composition identity and
`thm-rank-of-the-point-inclusion-matrix` (the case `t = 1`, four steps), and
`rem-the-rank-of-a-general-inclusion-matrix-is-not-established-here` says exactly this rather
than stating a theorem the page does not have. If Alpha wants the full theorem it is a
sub-development of its own and the page would need a split.

### F7 — the nonuniform Ray-Chaudhuri–Wilson bound is built here. **Approve.**

The enriched design moves it to CB-24, which does not exist in the spec. The multilinear
machinery it needs is three items (`def-multilinear-polynomial-and-multilinear-reduction` and
two lemmas), and those same three items give the second proof of Sauer–Shelah that the design
asks for, so the marginal cost of the bound itself is two items. Its proof uses the triangular
criterion with the product truncated at intersection sizes strictly below `|F_i|`, which is what
removes the extra hypothesis usually attached to the statement; that truncation is a numbered
step in the contract. The modular Frankl–Wilson theorem, the uniform sharpening and the Borsuk
disproof are all `deferred` with destination `owner-decision`.

### F8 — a declared prerequisite with no edge. **Alpha's call; I decline to invent one.**

The spec gives `linear-algebra-methods-in-combinatorics` the prerequisite
`finite-probability-and-the-probabilistic-method` (221). I opened that page and looked for a
seam, as §7 of the brief requires. Nothing in this scaffold rests on it: every bound here is
deterministic, and the one place the two subjects genuinely meet in the literature — the
Frankl–Wilson explicit Ramsey graph as the constructive counterpart to the probabilistic lower
bound — needs the modular bound this page does not build (F7). I am not willing to mint a
statement to manufacture a dependency edge, which the generated-claim-minimization rule forbids.
Recommendation: accept the requirement as reading-order adjacency and record the zero-edge pair,
or direct me at step 3 to a specific published item on 221 that this page should genuinely
consume. Note that the requirement is not vacuous for the gate: the transitive closure of
`finite-probability-and-the-probabilistic-method` is what puts
`finite-counting-and-binomial-coefficients` (20) and
`inclusion-exclusion-and-the-pigeonhole-principle` (22) inside this page's declared closure, and
the scaffold cites both heavily.

### F9 — two source URLs are recorded as archive snapshots. **Approve, or restore and re-stamp.**

`source-fetch-check.mjs` could not verify two canonical URLs from this environment:
`https://people.cs.uchicago.edu/~laci/babai-frankl-book2024.pdf` fails certificate-chain
validation (`UNABLE_TO_VERIFY_LEAF_SIGNATURE`) while serving the document over `http` with the
same byte count, and `https://kam.mff.cuni.cz/~matousek/stml-53-matousek-1.pdf` times out under
the gate fetcher at 90, 180 and 300 seconds while `curl` fetches it in seconds. Under the
recover-before-replace convention both are recorded as Wayback snapshots serving identical byte
counts, with the canonical link kept in `original_url` and the reason in `recovery_note`. Both
now stamp, and `url-sweep --recover --fail-on-dead` reports 8/8 live. If the failures are
environmental, Alpha may restore the canonical URLs and re-stamp; the harvest and every locator
are unaffected, because the snapshots are the same documents.

### F10 — four results the enriched CB-6 names are not scaffolded. **Approve the declines, or direct additions at step 3.**

* **Chung–Feller.** The enriched design calls it "a cycle-lemma corollary, cheap and striking".
  It is not a corollary of the cycle lemma as this page states it, and it appears in neither
  harvested source's declared range (Dershowitz–Zaks §2 treats forests and tree heights, not
  Chung–Feller). I did not verify that its bijective proof closes in a bounded number of numbered
  steps and will not scaffold a proof I have not checked.
* **Narayana numbers and the Catalan triangle.** No source in my declared read ranges carries
  them, so scaffolding them would mean an unsourced statement.
* **Non-crossing partitions.** The enriched design makes them A-page definitions because CB-19
  and CB-20 want them; neither page exists in the spec, so the reason evaporates. Deferred to
  `set-partitions-stirling-numbers-and-exponential-generating-functions` (order 199), which is in
  the spec and is strictly later.
* **Motzkin and Schröder numbers.** The enriched design gets them from CB-15's symbolic method,
  which is not in the spec; building the symbolic method here is a page of its own.

The A page has nine items of headroom, so if Alpha wants any of these, say which and I will add
the source and the items at step 3, when the cost is a spec edit rather than a rewrite.

### F11 — `cor-sauer-shelah-polynomial-bound` states `(n+1)^d`. **Approve.**

The sharper standard bound is `(en/d)^d`, which needs the exponential and a real-analysis
estimate. `(n+1)^d` follows from the binomial theorem in two steps from published material and
is exactly what the companion page's false statement (`n^d`) must be measured against. The
hypothesis `d >= 1` is stated, and both small-`n` ends are checked in the contract.

---

## 4. Forward references kept

**One.** `rem-binary-trees-and-triangulations-here-are-combinatorial-objects` will declare
`forward_refs` into `trees-forests-and-spanning-trees` (order 209, strictly later than 197, and
already published). It is orientation only, it sits in a Remark, and it names no result the page
uses; the page's binary trees are an inductively defined set of ordered pairs and its polygons
are conditions on integers, so nothing graph-theoretic is load-bearing anywhere. The reference is
there because a reader who has met graph-theoretic trees will otherwise assume this page's trees
are those, which is the level-7 two-notions-of-open defect in another costume.

No other forward reference is kept, and no item on either page cites anything at a higher order.

---

## 5. New ids proposed

All 138 ids are new — 131 at steps 1–2 and seven more at the step-3 fix pass. The checks run,
from the repo root:

* `ls items/ | grep -ci -- <slug>` for each of `lattice-path`, `step-set`, `dyck`, `catalan`,
  `ballot`, `reflection`, `cycle-lemma`, `balanced-bracket`, `binary-tree`, `triangulation`,
  `narayana`, `chung-feller`, `gessel`, `viennot`, `incidence-vector`, `oddtown`, `eventown`,
  `fisher`, `graham-pollak`, `sauer`, `shelah`, `vc-dimension`, `shattering`, `inclusion-matrix`,
  `nullstellensatz`, `cauchy-davenport`, `alon-furedi`, `ray-chaudhuri`, `l-intersecting`,
  `down-shift`, `multilinear`. The only hits were unrelated: `thm-von-dyck` (a group presentation
  theorem), `ex-lagrange-inversion-catalan-coefficients` and
  `ex-formal-square-root-one-minus-four-x` (both on `formal-power-series-examples`, a B page and
  therefore a leaf this scaffold may not cite — the enriched CB-6's trap (v)),
  `rem-shelah-inaccessible-and-the-baire-property` (set theory), five `triangulation` hits from
  plane geometry and plane graphs, seven `multilinear` hits from the determinant development, and
  eight `reflection` hits from category theory, uniform spaces and trigonometry.
* A programmatic check of every one of the 131 planned ids against `items/` and against the 5,851
  planned item ids already in `research/plan-spec.json`: no collision, no duplicate inside the
  batch.
* **The seven ids added at the step-3 fix pass**, checked the same way:
  `lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once`,
  `thm-chung-feller`, `def-motzkin-and-schroder-paths`,
  `thm-motzkin-numbers-by-first-return-decomposition`,
  `cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers`,
  `thm-large-schroder-numbers-by-first-return-decomposition`,
  `cor-large-schroder-numbers-as-a-binomial-sum-of-catalan-numbers`. Each was grepped against
  `items/`, `research/plan-spec.json` and every `research/frontier-18-batch-*.pages.json` and
  returned no file. The topic greps `grep -ril motzkin items/` and `grep -ril chung items/`
  return nothing at all, and `grep -ril schr items/` returns only Schröder–Bernstein items from
  set theory, so no published item states any of these results under another id.

**Statements already in the library that this scaffold deliberately does not re-mint.** The
formal square root of `1-4x` and the Lagrange-inversion computation of the Catalan coefficients
both exist as published examples on `formal-power-series-examples`. That page is a B page, so
the b-leaf rule forbids depending on them, and the A page therefore derives what it needs from
`cor-unique-formal-root-with-constant-one` and `thm-formal-exponential-logarithm-identities`,
which are on the A page at order 193. `rem-lattice-path-conventions` will name the published
example so a reader meets both, as an ordinary link and not as a dependency.

---

## 6. Cross-batch dependencies

**None, in either direction.** I read all ten `research/frontier-18-batch-*.pages.json`
manifests. The other nine batches own `lagrange-four-square-theorem` (57), extraspecial
`p`-groups (71) and Cayley graphs (302), finite fields and cyclotomic extensions (101),
Noetherian rings (111), the divergence theorem (288), Lebesgue measure (288), the winding number
(315) and several complex variables (349), ends and coends (365), and two Erdős–Hajnal pages
(397, 401). No id in this batch appears in any of them, no page of this batch is in any of their
`requires` lines, and none of their pages is in mine. Every dependency of this batch is either
internal to its own pair or published on disk.

---

## 7. Confidence, and what I did not verify

**Verified from disk, item by item.** Every one of the published ids this scaffold cites was
opened and checked for `status: published` and for `provenance.statement`. A programmatic sweep
confirms: no dependency resolves to a missing id, none is unpublished, **none has
`provenance.statement: ai-generated`**, and **none is legacy-unclassified** — every published
dependency carries an explicit component provenance, so no `established-from-knowledge` or
`source-checked` confidence route was needed for any of them. The same sweep confirms the
prefix-to-kind match on all 131 ids, that no same-page dependency points forward, that no item
depends on anything homed on a B page, and that neither A page exceeds 60 items.

**Verified by hand.** The reflection count at `n = 0,1,2,3`; the ballot identity at `q = 0` and
`q = p-1`; the cycle-lemma count `7 * 5 = 35`; the agreement of `binom(2n+1,n)/(2n+1)` with
`binom(2n,n)/(n+1)`; the first six coefficients of the constant-one square root of `1-4x`
against the published example; the two-path determinant at `n = 1` (three non-intersecting pairs
against `2^2 - 1*1`); the Oddtown singleton family; the Eventown pairing construction at `n = 4`
and `n = 5`; the incidence-vector witness dependent over `F_2` and independent over `R`
(determinant 2); the Cauchy–Davenport failure in `Z/4`; and the Nullstellensatz false-statement
witness `f(x,y) = x^2 - x`, which has total degree `2 = t_1 + t_2`, zero coefficient at `xy`,
and vanishes at all four points of `{0,1}^2`.

**Not verified, and flagged.**

1. The **quotes in the proof contracts** are exact for statements I read verbatim and are
   projections for items this batch has not authored yet. Every one is re-checked when I return
   as the step-5 author; `proof-contract.mjs` currently reports 104 `item-missing` errors, which
   is the correct state at step 2.
2. The **collision witness** in `cex-a-map-between-two-catalan-families-that-is-not-injective` is
   specified as an obligation, not exhibited: the strategy says which statistic to use and
   requires the two colliding triangulations be written out and checked before shipping. I did
   not compute them at step 2.
3. **`lem-a-triangulation-has-a-unique-triangle-on-the-closing-side`** is the riskiest proof in
   the batch. I worked the argument in full (choose the least `k` with `{k,m}` a chord of `T` or
   the side `{m-1,m}`; if `{1,k}` were a diagonal outside `T`, maximality gives a crossing chord
   `{p,q}` with `1 < p < k < q`, which crosses `{k,m}` when `q < m` and contradicts minimality
   when `q = m`), and I am confident it closes, but the degenerate two-vertex polygon at the base
   of the recursion is a convention I have fixed by fiat and Alpha should read it.
4. **`thm-every-maximal-eventown-family-is-maximum`** has a parity boundary I have reasoned
   through but not written out: the odd case is where `U^perp ∩ H` is strictly smaller than
   `U^perp`. I checked the statement by hand at `n = 3` (the maximal family `{∅, {1,2}}` has size
   `2 = 2^1`).
5. **`thm-chung-feller`** was declined precisely because I did not verify it; see F10.
6. The **coverage harvest is faithful to what I read**, which for Krattenthaler is §§10.1–10.4
   and §10.13, for Postnikov the lectures of 6 and 8 February 2019, for Guichard chapter 3, for
   Dershowitz–Zaks §§1–2, for Babai–Frankl chapters 1, 2, 4 and 7, for Matoušek Miniatures 1–17,
   for Pikhurko §§2–5 and §11, and for Alon §§1–3 and §6. I read section and named-result
   headings across those ranges and the full text of the results I scaffolded; I did not read
   every proof in every declined section, and the declines rest on the statements and on what
   their proofs are known to need.
7. `coverage-checklist` reports **`coverage-low-yield` on pair 2** (23 of 66 harvested results
   scaffolded); pair 1 clears the threshold at 23 of 52. The pair-2 declines are the deep tails of
   a monograph, a miniature collection and a paper — Babai–Frankl's geometry, modular and
   Ramsey chapters, Matoušek's Euclidean-distance and spectral miniatures, Alon's finite-field
   sections — and every one is defended individually in the coverage file with a reason about
   that result. The call is Alpha's.

---

## 8. Web research ledger and dependency closure

### Sources, all fetch-verified and stamped

`node tools/source-fetch-check.mjs --coverage research/frontier-18-batch-5.coverage.json --stamp`
reports **9/9 fetch-verified** after the step-3 fix pass added the ninth source (Huq), and
`node tools/url-sweep.mjs --coverage ... --recover --fail-on-dead` reported **8/8 live** on the
eight sources present at steps 1–2.

| pair | source | kind | what it backs |
|---|---|---|---|
| 1 | Krattenthaler, *Lattice Path Enumeration* (Handbook of Enumerative Combinatorics ch. 10), `arxiv.org/pdf/1503.05930` | survey | the free path count, the reflection principle and its Catalan corollary, the cycle lemma, Lindström–Gessel–Viennot; and, from the range added at the step-3 fix pass, §10.8 for the Motzkin and Schröder step sets, the two families of numbers and their closed sums (Corollary 10.8.2) and §10.9 Theorem 10.9.2 for the two algebraic equations and closed generating functions |
| 1 | Postnikov, MIT 18.212 lecture notes (Spring 2019), `web.stanford.edu/~lindrew/18.212.pdf` | lecture-notes | the Catalan numbers DEFINED as a count of Dyck paths, the convolution recurrence, the functional equation, the closed form, the necklace argument |
| 1 | Guichard, *An Introduction to Combinatorics and Graph Theory*, `whitman.edu/mathematics/cgt_online/cgt.pdf` | textbook | §3.5 in full with its exercises: rooted binary trees, the recurrence, the generating function, the closed form, parenthesis sequences and the difference of binomial coefficients, the unique factorisation `(s_1)s_2`, staircase paths, and polygon triangulations |
| 1 | Dershowitz and Zaks, *The Cycle Lemma and Some Applications*, `cs.tau.ac.il/~nachumd/papers/CL.pdf` | paper | the cycle lemma's box-and-circle statement, both proofs, and the orientation convention |
| 1 | Huq, *Generalized Chung-Feller Theorems for Lattice Paths* (PhD thesis, Brandeis 2009), `arxiv.org/pdf/0907.3254` | paper | **added at the step-3 fix pass for B5-2**: Theorem 1.1.3 for the exact Chung–Feller statement, Theorem 2.1.1 for the weight-one transversal lemma, and Theorems 2.2.1 and 2.3.1(1) for the blocking reduction that carries the transversal onto the up steps |
| 2 | Babai and Frankl, *Linear Algebra Methods in Combinatorics* v2.2.1 (Nov 2024), archive snapshot of `people.cs.uchicago.edu/~laci/babai-frankl-book2024.pdf` | monograph | Oddtown, the independence criteria, Eventown, Graham–Pollak, the nonuniform Fisher inequality, the inclusion matrix, the VC-dimension route |
| 2 | Matoušek, *Thirty-three Miniatures*, archive snapshot of `kam.mff.cuni.cz/~matousek/stml-53-matousek-1.pdf` | textbook | Oddtown and the generalized Fisher inequality verbatim, Graham–Pollak, the cube cover, Frankl–Wilson |
| 2 | Pikhurko, *Algebraic Methods in Combinatorics* (Warwick, 2001), `opikhurko.warwick.ac.uk/AlgMet.pdf` | lecture-notes | the reduction of the addressing problem to bipartite decompositions, Graham–Pollak, the Nullstellensatz applications |
| 2 | Alon, *Combinatorial Nullstellensatz*, `tau.ac.il/~nogaa/PDFS/null2.pdf` | paper | the polynomial identity lemma, the Nullstellensatz, Cauchy–Davenport, the hyperplane cover |

### Convention disagreements found, and what this batch adopts

1. **The cycle lemma's orientation.** Dershowitz–Zaks cut a necklace at a valid origin and count
   `k`-dominating shifts with STRICT domination; Krattenthaler's Lemma 10.4.6 states the
   `mu`-version with weak domination below a line. These are the same lemma pointing opposite
   ways, and a page that mixes them gets a one-to-`nu` correspondence backwards. **Adopted:**
   strict positivity of every partial sum, with shifts indexed by starting position, fixed in
   `thm-cycle-lemma` and restated in `rem-lattice-path-conventions`.
2. **Which step set draws a Dyck path.** Krattenthaler §10.3 uses the diagonal steps and §10.2 the
   rectangular ones; Postnikov uses `(1,1)` and `(1,-1)`. **Adopted:** both, with
   `lem-monotone-and-diagonal-lattice-paths-correspond` as the required dictionary item, since the
   page genuinely needs both pictures and a silent re-definition is the level-7 defect.
3. **The Catalan index.** Every source consulted uses `C_n` for semilength `n`, so `C_0 = 1`;
   recorded in `def-catalan-number` because a formula-first definition would make `C_0` a
   convention rather than a count.
4. **How the square root is chosen.** Guichard §3.5 solves `xf^2 - f + 1 = 0` by the quadratic
   formula and then picks the branch by letting `x` approach `0` — an analytic argument that is
   not available in a formal power series ring and would be an unlicensed inference here.
   Postnikov's Proposition 7 does the same. **Adopted:** the root is IDENTIFIED, not chosen:
   `1 - 2xC` lies in `1 + xQ[[x]]` and squares to `1 - 4x`, so the published uniqueness clause of
   `cor-unique-formal-root-with-constant-one` says it IS the constant-one square root. This is the
   design's trap (ii), and it is the single place where both primary sources for pair 1 use an
   argument the library may not.
5. **The standard form over `F_2`.** Babai–Frankl §2.3 calls its section "Inner product spaces"
   and works over an arbitrary field; Matoušek Miniature 3 speaks of ranks and avoids the word.
   **Adopted:** Babai–Frankl's generality with Matoušek's vocabulary — the form is defined as a
   symmetric bilinear form and the definition says in as many words that it is not an inner
   product over `F_2`. The design's trap (iv) requires this and the companion page carries the
   false statement that gets it wrong.
6. **Eventown's bound.** Some treatments state `2^{floor(n/2)}` for maximal families and some for
   all Eventown families. **Adopted:** the bound for all of them (`thm-eventown`) and the equality
   for maximal ones (`thm-every-maximal-eventown-family-is-maximum`), as two items, since they are
   two theorems.
7. **The nonuniform intersection bound's name.** Babai–Frankl §7.2 calls it the nonuniform
   Ray-Chaudhuri–Wilson theorem; Matoušek Miniature 17 calls it the Frankl–Wilson inequality. The
   id names Frankl–Wilson and the Statement records both attributions.

### Dependency-closure statement

**Every published item proposed as a dependency was opened on disk**, and every load-bearing
dependency of every planned item is either an earlier item inside the same A/B pair or a
published item on a page inside that page's declared `requires` closure. The closures were
computed from `plan-spec.json`: 44 pages for `lattice-paths-and-catalan-numbers` and 73 for
`linear-algebra-methods-in-combinatorics`. **There is no exception**, no external
`proved_here: false` fallback is planned in this batch, and no item rests on a result the
library has not established.

Two closure facts worth handing to Alpha, because they shaped the design rather than merely
constraining it:

* `trees-forests-and-spanning-trees` sits at order 209 and `graphs-walks-and-connectivity` at
  207, both **above** `lattice-paths-and-catalan-numbers` at 197 and neither in its closure.
  The binary trees of this page are therefore defined recursively and its polygon triangulations
  combinatorially; that is not a shortcut, it is the only route, and F4's remark records it.
* `algebraic-extensions-degree-and-finite-fields` is **not** in the closure of
  `linear-algebra-methods-in-combinatorics`. Every field used on that page is `R`, `Q` or `Z/p`
  by way of `thm-z-mod-p-is-a-field`, and the three declines that turn on a general finite field
  (Chevalley–Warning, Dvir's Kakeya bound, Pikhurko §11.5) say so with that reason.

**No published dependency was found to carry an unambiguous falsehood.** The
owner-delegated repair protocol is therefore not invoked anywhere in this batch. One published
page's PROSE is inaccurate about another page — the design's, not the library's — and that is F3.

---

## 9. Amendments to the prose scaffold

These are precise, applyable edits to `research/plan-combinatorics-and-categories.md`. **I did
not apply them**: at steps 1–2 my write boundary is the three batch artifacts, and the lead Alpha
applies notes to the prose scaffolds.

### A1 — correct the false disk claim in CB-13 (ENRICHED)

*File:* `research/plan-combinatorics-and-categories.md`, §"CB-13 (ENRICHED). Linear-Algebra
Methods: Rank Bounds and Inclusion Matrices".

*Exact old text:*

> The third — whether
> `inner-product-spaces-and-orthogonality` homes what this page needs — **cannot be
> resolved, because that page carries 0 items** (§27).

*Exact new text:*

> The third is now resolved from disk too: `inner-product-spaces-and-orthogonality` carries 34
> published items, including `def-inner-product-space`,
> `prop-standard-coordinate-inner-products`,
> `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` and
> `thm-gram-determinant-detects-linear-independence`, all on the A page. This page cites the
> standard coordinate inner product and mints nothing that page already has.

### A2 — record in CB-6 that §11's LGV recommendation is superseded

*File:* same, §"CB-6. Lattice Paths and Catalan Numbers  (order 179, combinatorics)".

*Exact old text:*

> Lindström–Gessel–Viennot
> **only if** the determinant machinery is wanted here rather than on GT-7 —
> recommend DROPPING it here and recording it, since it duplicates a determinant
> argument better placed at 209.

*Exact new text:*

> Lindström–Gessel–Viennot **is kept here**; the recommendation to drop it is withdrawn at
> §"CB-6 (ENRICHED)", which gives the reasons (its proof is a sign-reversing involution, not
> linear algebra, and its consumers are spread across three later pages). `frontier-18` batch 5
> scaffolds it.

### A3 — record the spec divergence at the head of the §23 block

*File:* same, immediately after the §23 table row at §17.1.

*Exact new text to insert:*

> **Spec divergence, recorded by `frontier-18` batch 5 (steps 1–2).** `research/plan-spec.json`
> contains no page for CB-23 or CB-24, and still carries CB-13 at order 223, CB-14 at 225 and
> GT-7 at 227 — the pre-enrichment layout. Until the spec gains those pages, a Beta pointed at
> CB-13 must build the Combinatorial Nullstellensatz block on
> `linear-algebra-methods-in-combinatorics`, because a `deferred` disposition may not name a
> page id that does not resolve.

### A4 — record CB-6 (ENRICHED)'s route for Motzkin, Schröder and Chung–Feller

*Added by group Alpha `b` at the step-3 re-check (2026-08-24), not by the Beta.* The
B5-1 and B5-2 fixes changed which route this page takes to three of CB-6 (ENRICHED)'s
five additions, and the design text still names the unavailable one. Left standing it
is the same defect A1 corrects: the next scaffolder to read this section re-derives a
route the spec cannot supply.

*File:* `research/plan-combinatorics-and-categories.md`, §"CB-6 (ENRICHED)", the
additions list (the five bullets ending at the Hankel determinant).

*Exact old text:*

```
- **The Chung–Feller theorem** (the number of paths with exactly $k$ steps above
  the axis is independent of $k$) — a cycle-lemma corollary, cheap and striking.
- **Narayana numbers**, the Catalan triangle, and the refinement of $C_n$ by peaks.
- **Motzkin and Schröder numbers** via CB-15 specifications, with their algebraic
  equations solved by the fixed-point theorem.
```

*Exact new text:*

```
- **The Chung–Feller theorem** (the number of paths with exactly $k$ steps above
  the axis is independent of $k$). `frontier-18` batch 5 builds it, but NOT as a
  corollary of the cycle lemma as this page states that lemma: the cycle lemma
  counts the shifts whose partial sums are all positive, while Chung–Feller needs
  every shift sorted by how many of its partial sums are nonpositive. That
  refinement is Huq, *Generalized Chung-Feller Theorems for Lattice Paths*
  (arXiv:0907.3254), Theorem 2.1.1, and it is scaffolded as its own lemma ahead of
  the theorem. Krattenthaler carries no Chung–Feller at all.
- **Narayana numbers**, the Catalan triangle, and the refinement of $C_n$ by peaks.
  Not built by `frontier-18`: no route this page takes to $C_n$ tracks a statistic
  on a path, so the refinement needs machinery the page does not have. Huq §2.5
  carries the formulas if it is revisited.
- **Motzkin and Schröder numbers.** CB-15 does not exist in `research/plan-spec.json`
  at any order, so the specification-and-fixed-point route named here is
  unavailable and no `deferred` disposition may name it. `frontier-18` batch 5
  builds them instead by first-return decomposition on the step sets $\{U,D,L\}$
  and $\{U,D,L_2\}$, giving $M=1+xM+x^2M^2$ and $R=1+xR+xR^2$, and identifies each
  root through the uniqueness clause of the published
  `cor-unique-formal-root-with-constant-one` exactly as the Catalan closed form
  does. The statements are Krattenthaler Theorem 10.9.2, equations (10.49) and
  (10.50), with the two binomial-sum corollaries at Corollary 10.8.2, equations
  (10.45) and (10.46); §10.8 is titled "Elementary results on Motzkin and Schröder
  paths" and the source itself does not route them through the symbolic method.
  No combinatorial class, SEQ/MSET/CYC operator or $x$-adic fixed-point theorem is
  used.
```

*Why:* the design's route for two of these three is genuinely unavailable and the
third is attributed to a lemma that does not give it. Both were checked against the
sources at the re-check: Krattenthaler §§10.8–10.9 (arXiv:1503.05930, 745,705 bytes,
`sha256_16: 34a56044642417a8`) and Huq (arXiv:0907.3254, 1,094,110 bytes,
`sha256_16: 437dc39f79b8237b`), each re-fetched byte-identical to the coverage stamp.

---

## 10. Authoring notes for my step-5 self

These have no scaffold anchor and must reach the author.

1. **Never write the canonical embedding applied to a natural number.** Every count identity on
   both pages is stated multiplicatively in `N` for exactly this reason: `(n+1)C_n = binom(2n,n)`,
   `(2n+1)C_n = binom(2n+1,n)`, `(p+q)N = (p-q)binom(p+q,p)`. The quotient forms appear only as
   second clauses about a computation in `R`, and `lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size`
   writes `|A ∩ B| · 1_F`, never `iota(|A ∩ B|)`.
2. **`def-catalan-number` lists `lem-dyck-paths-of-a-given-semilength-form-a-finite-set` in
   `justified_by`, not in `deps`.** The lemma is about the object the definition introduces, so a
   `deps` edge would be a spurious cycle.
3. **The A-page summaries.** Two paragraphs, each under 150 words. Paragraph 1 for
   `lattice-paths-and-catalan-numbers` names the published material actually used: formal power
   series with coefficient extraction and the constant-one root, rational series and the
   recurrence equivalence, binomial coefficients as counts, group actions with orbits and
   stabilisers, the symmetric group's sign, and the Leibniz determinant. Paragraph 2 names the
   development: paths and their step words, the reflection principle and the ballot problem, Dyck
   paths and the Catalan numbers, three independent derivations of the closed formula, the
   generating function, the three proved bijections and the polygon triangulations, and the
   non-intersecting path determinant. Count nothing, rank nothing, and claim nothing about any
   other page.
4. **Every bijection on both pages is delivered with a two-sided inverse**, citing
   `thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse`. That is not style: the
   companion page carries a counterexample whose entire point is that a natural-looking map
   between two families of equal size need not be injective.
5. **`tikz` figures are welcome** in `## Example`, `## Definition`, `## Statement` and
   `## Remarks` — the five Dyck paths, the reflected path, the hexagon triangulations, the
   incidence matrix of the Fano lines — and are forbidden inside any phase-format body. Every fact
   a proof uses must also be in the text.
6. **`thm-cycle-lemma` fixes an orientation convention.** Cite it wherever the convention is used
   and do not restate it, because the sources disagree and a restatement is where the direction
   flips.
7. **Do not write "the library does not develop X" anywhere.** `rem-lattice-path-conventions` and
   `rem-the-rank-of-a-general-inclusion-matrix-is-not-established-here` both name things this
   batch does not build; both say "not built here", and both name what the result would need.
8. **The truth-risk obligations.** Nineteen items carry `provenance.statement: ai-generated`, all
   of them examples or counterexamples, none a `deps` target of anything. Each needs its witness
   COMPUTED and displayed before shipping, and three carry a specific obligation: the collision in
   `cex-a-map-between-two-catalan-families-that-is-not-injective` must be exhibited as two
   diagonal sets; the step-set failure in `cex-a-step-set-for-which-the-reflection-argument-fails`
   must include a pair of endpoints where the reflection COUNT is wrong, not only where the
   lemma's hypothesis fails; and the three-set witness in
   `cex-incidence-vectors-dependent-over-the-two-element-field-and-independent-over-the-reals`
   must show the determinant expansion. No `ai-generated` statement is load-bearing anywhere in
   this batch, and `content-policy.mjs --manifest-only` reports 131 scoped items with no error.
9. **Gate order after authoring**, from `QUALITY-CONTROLS.md`: `merge-proof-contracts.mjs` first,
   then `proof-contract --strict`, `finite-smoke`, `risk-report`, `boundary-audit`,
   `citation-fidelity`, `gate-liveness`. Two contracts carry a registered `finite_smoke` check
   (`thm-oddtown` uses `matrix-ring-laws-mod-n`,
   `lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime` uses
   `binomial-congruence-solution-count`); read the check count, not the colour.

---

## 11. Gates run at steps 1–2

| gate | command | result |
|---|---|---|
| coverage harvest | `node tools/coverage-checklist.mjs research/frontier-18-batch-5.coverage.json` | 2 pages, 118 harvested results, **0 errors**, 1 `coverage-low-yield` warning (pair 2) |
| source liveness (bodies) | `node tools/source-fetch-check.mjs --coverage ... --stamp` | **8/8 fetch-verified and stamped** |
| source liveness (headers) | `node tools/url-sweep.mjs --coverage ... --recover --fail-on-dead` | **8/8 live**, 0 failed |
| batch scope policy | `node tools/content-policy.mjs research/frontier-18-batch-5.pages.json --manifest-only` | 131 scoped items, **0 errors, 0 warnings** |
| boundary boilerplate | `node tools/boundary-audit.mjs research/frontier-18-batch-5.proof-contracts.json --min-cluster 3` | 832 rows, **no template cluster at or above 3**, no contradicted disposition |
| proof contracts | `node tools/proof-contract.mjs research/frontier-18-batch-5.proof-contracts.json` | 104 `item-missing` errors — **the correct state at step 2**, since the items are authored at step 5 |
| prose rules | `node tools/prosecheck.mjs research/frontier-18-batch-5.notes.md --warnings` | **0 errors**, 29 warnings, all `count-in-prose` or `count-of-this-page` in THIS report, which the brief requires to carry recountable counts; no positional claim contradicts the spec |

Not run, and why: `validate-plan.mjs` and `depsource.mjs` are authoritative only against the
SPLICED spec, and splicing is step 4. My own check reproduces what they will look at — every
dependency resolves to a published item or to an earlier item on a page of strictly lower order,
no same-page dependency points forward, no dependency is homed on a B page, every prefix matches
its kind, no id collides with `items/` or with the 5,851 planned ids in the spec, and neither A
page exceeds 60 items — and it reports no error. **That is a claim about my own script, not a
gate passing.** The engine runs the authoritative gates.

---

## 12. Continuity checkpoint

**Substage:** steps 1–2 complete; all three owned artifacts written and self-checked.
**Owned artifacts:** `research/frontier-18-batch-5.pages.json` (4 pages, 131 items),
`research/frontier-18-batch-5.coverage.json` (2 pairs, 8 sources, 118 harvested rows, all
stamped), `research/frontier-18-batch-5.proof-contracts.json` (version 1, scope 104, 104
contracts), and this file.
**Completed checks:** the six gates tabulated in §11, plus the dependency and id sweep of §7.
**Open constraints for step 5:** the ten authoring notes of §10; the two boundary conventions
flagged in §7 (the degenerate polygon at the base of the triangulation recursion, and the odd-`n`
case of maximal Eventown); the three witnesses that must be computed before shipping.
**Open adjudications:** F1 and F5–F10 need an Alpha decision at step 3; F2, F3, F4, F9 and F11
need only approval.
**Exact next action:** hand this report to the step-3 Alpha. On return as the step-5 author,
re-read §10 first, re-verify every contract quote against the then-published dependency text, and
author in page order.

---

## 13. Expected component provenance, item by item

Every mathematical-content item in the batch appears. Definitions and remarks carry
`proof: not-applicable`. Every proof-bearing item authored at steps 1–2 carries
`proof: ai-altered`, because in each case the argument is the source's but is restructured into the
library's phase format and split across the lemmas §2 describes. **Four of the seven items added at
the step-3 fix pass carry `proof: ai-generated` instead**, and the row says which: where the source
states the result but reaches it by a route this page cannot run — Krattenthaler proves Theorem
10.9.2 from an infinite continued fraction, and Corollary 10.8.2 from a reflect-and-rotate change of
model — the local proof is written here rather than transcribed, and calling it `ai-altered` would
claim a fidelity to the source's argument that it does not have. In every one of those four the
STATEMENT is `literature-derived`, so none carries the truth-risk flag and all four remain eligible
as `deps` targets. No item carries `provenance.statement: ai-generated` except
examples and counterexamples, and none of those is a `deps` target anywhere in the batch;
`generation.role` is `example` or `counterexample` accordingly. **An AI-generated proof never
makes a sourced statement AI-generated**, which is why the proof column is uniform and the
statement column is not.

#### `lattice-paths-and-catalan-numbers`

| id | statement | proof | rationale |
|---|---|---|---|
| `def-lattice-path-and-step-set` | ai-altered | not-applicable | The sources draw paths; the library needs a function on a finite index set with a named step set, so the formalisation is adapted (Krattenthaler §10.1). |
| `lem-lattice-paths-are-determined-by-their-step-words` | ai-altered | ai-altered | Bookkeeping the sources assume; stated here because every later count is transported along it. |
| `def-monotone-lattice-path` | ai-altered | not-applicable | A convention choice among the two pictures Krattenthaler §10.2 uses interchangeably. |
| `thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient` | literature-derived | ai-altered | Taken from Krattenthaler, 10.2. Lattice paths without restrictions. |
| `def-diagonal-lattice-path-and-its-height` | ai-altered | not-applicable | The height function is named and made the primary object, which the sources leave implicit in the picture (Krattenthaler §10.3). |
| `lem-monotone-and-diagonal-lattice-paths-correspond` | ai-altered | ai-altered | The dictionary between Krattenthaler §10.2 and §10.3; each source uses one picture and states no correspondence. |
| `cor-diagonal-lattice-paths-with-a-prescribed-endpoint-are-counted-by-a-binomial-coefficient` | ai-altered | ai-altered | Restated with the parity and range window explicit and the vanishing case proved rather than assumed. |
| `lem-a-diagonal-path-that-changes-side-of-a-level-meets-it` | ai-altered | ai-altered | The discrete intermediate-value step is implicit in every source reflection argument and is isolated here. |
| `lem-reflection-at-the-first-visit-to-a-level-is-a-bijection` | ai-altered | ai-altered | Krattenthaler Theorem 10.3.1 states the count; the bijection is extracted as its own statement. |
| `thm-reflection-principle-for-diagonal-lattice-paths` | literature-derived | ai-altered | Taken from Krattenthaler, 10.3. Linear boundaries of slope 1; Krattenthaler, Theorem 10.3.1. |
| `thm-ballot-problem` | ai-altered | ai-altered | Stated in the cleared natural-number form; the sources state the quotient. |
| `cor-weak-ballot-problem` | ai-altered | ai-altered | Same reformulation as the strict form, with the prepending bijection made the content. |
| `def-dyck-path-and-semilength` | literature-derived | not-applicable | Taken from Postnikov (notes by A. Lin), Example 4. |
| `lem-dyck-paths-of-a-given-semilength-form-a-finite-set` | ai-altered | ai-altered | A well-definedness obligation the library imposes and the sources do not state. |
| `def-catalan-number` | literature-derived | not-applicable | Taken from Guichard, 3.5 Catalan Numbers. |
| `thm-catalan-numbers-by-reflection` | ai-altered | ai-altered | Krattenthaler Corollary 10.3.2 in the additive natural-number form. |
| `cor-catalan-closed-formula` | ai-altered | ai-altered | The universal closed formula, stated multiplicatively so no division or embedding is needed. |
| `cor-one-more-than-n-divides-the-central-binomial-coefficient` | ai-altered | ai-altered | A divisibility the sources record in passing, stated against the library divisibility relation. |
| `def-cyclic-shift-and-the-periodic-partial-sum-function` | ai-altered | not-applicable | The two-sided partial-sum function is given by a closed formula because the library has no two-sided sequence machinery. |
| `lem-cyclic-shift-is-an-action-of-the-integers-modulo-the-length` | ai-altered | ai-altered | Implicit in the sources; stated so orbit-stabiliser can be cited. |
| `lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser` | ai-altered | ai-altered | Postnikov Claim 10 in the weight-coprime generality. |
| `lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums` | ai-altered | ai-altered | The first half of Dershowitz--Zaks’ second proof, isolated. |
| `lem-strict-right-minima-of-a-quasiperiodic-partial-sum-function` | ai-altered | ai-altered | The second half of that proof, isolated and stated with the hypothesis that each letter is at most one made explicit. |
| `thm-cycle-lemma` | literature-derived | ai-altered | Taken from Krattenthaler, 10.4. Simple paths with linear boundaries of rational slope, I; Krattenthaler, Lemma 10.4.6; Postnikov (notes by A. Lin), Claim 11; Dershowitz–S. Zaks, 1. The Cycle Lemma; Dershowitz–S. Zaks, 1.1 First proof. |
| `thm-catalan-numbers-by-the-cycle-lemma` | ai-altered | ai-altered | Dershowitz--Zaks §2 in the cleared natural-number form. |
| `lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once` | literature-derived | ai-altered | **Step-3 fix pass (B5-2).** Huq, *Generalized Chung-Feller Theorems for Lattice Paths*, Theorem 2.1.1, the same proposition restated in this page's $S_a$ notation. The proof is Huq's, with the rational perturbation $S_a(i)-i/m$ replaced by the integer key $m\,S_a(i)-i$ it clears to, so `ai-altered` rather than `literature-derived`. |
| `thm-chung-feller` | literature-derived | ai-altered | **Step-3 fix pass (B5-2).** Huq Theorem 1.1.3, which is the classical statement of Chung and Feller (1949); the statement is transcribed with no change of quantifier or range. The proof assembles Huq's Theorems 2.1.1, 2.2.1 and 2.3.1(1), inlining the special-vertex blocking as a numbered step and supplying the up-crossing/down-crossing pairing, which Huq asserts in one clause, as a telescoping argument. |
| `lem-first-return-decomposition-of-a-nonempty-dyck-path` | ai-altered | ai-altered | Stated as a bijection onto a disjoint union rather than as a way of reading the recurrence. |
| `thm-catalan-recurrence` | literature-derived | ai-altered | Taken from Postnikov (notes by A. Lin), Proposition 5. |
| `def-catalan-generating-function` | literature-derived | not-applicable | Postnikov, Proposition 6 (generating function for the Catalan numbers); Guichard §3.5 forms the same series. |
| `thm-catalan-generating-function-satisfies-a-quadratic-equation` | literature-derived | ai-altered | Taken from Postnikov (notes by A. Lin), Proposition 6. |
| `lem-the-coefficients-of-the-formal-square-root-of-one-minus-four-x` | ai-altered | ai-altered | A classical expansion, stated against the library formal binomial power law with the index zero separated. |
| `thm-catalan-generating-function-closed-form` | ai-altered | ai-altered | Stated in cleared form and with the root IDENTIFIED by uniqueness rather than chosen, which is the library requirement. |
| `thm-catalan-numbers-from-the-generating-function` | ai-altered | ai-altered | Postnikov Theorem 9 restated multiplicatively. |
| `thm-the-catalan-generating-function-is-not-rational` | ai-altered | ai-altered | Folklore, restated against the library definition of a rational formal power series so the recurrence corollary can be cited. |
| `def-motzkin-and-schroder-paths` | literature-derived | not-applicable | **Step-3 fix pass (B5-1).** Krattenthaler §10.8 defines both step sets and both families verbatim, and the paragraph introducing Theorem 10.9.2 defines $M_n$ and $S_n$ as the counts of the paths returning to the axis. The only departure is the letter: this page writes $R_n$ where the source writes $S_n$, recorded in the item itself because $S$ is already the step set. |
| `thm-motzkin-numbers-by-first-return-decomposition` | literature-derived | ai-generated | **Step-3 fix pass (B5-1).** Krattenthaler Theorem 10.9.2 states both the equation $M(z)=1/(1-z-z^2M(z))$ and the closed form (10.49); the statement is transcribed. The proof is NOT the source's: Krattenthaler derives it from Flajolet's infinite continued fraction, which needs the $x$-adic topology this order does not have, so the first-return route is written locally. `ai-generated` proof, `literature-derived` statement, no truth-risk flag. |
| `cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers` | literature-derived | ai-generated | **Step-3 fix pass (B5-1).** Krattenthaler Corollary 10.8.2, equation (10.45), transcribed with the summation range written as $\{k:2k\le n\}$ instead of a floor function. The source's proof goes through the reflect-and-rotate change of model; the level-step deletion bijection is written locally. |
| `thm-large-schroder-numbers-by-first-return-decomposition` | literature-derived | ai-generated | **Step-3 fix pass (B5-1).** Krattenthaler Theorem 10.9.2, equation (10.50), with the same reading as the Motzkin case: the statement is the source's, the first-return proof is local. |
| `cor-large-schroder-numbers-as-a-binomial-sum-of-catalan-numbers` | literature-derived | ai-generated | **Step-3 fix pass (B5-1).** Krattenthaler Corollary 10.8.2, equation (10.46), re-indexed by half-length to match this page's $R_n$; the source's $n$ is the horizontal extent, so its $n/2$ is this page's $n$ and the two forms agree term by term. Proof written locally as above. |
| `def-balanced-bracket-word` | ai-altered | not-applicable | Defined by the recursive grammar, which is a deliberate choice so the equivalence with the prefix condition is a theorem. |
| `thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words` | ai-altered | ai-altered | Both descriptions are classical; their equivalence is stated here as the theorem that makes the family definition honest. |
| `cor-balanced-bracket-words-are-counted-by-the-catalan-numbers` | literature-derived | ai-altered | Guichard §3.5, which counts properly matched parenthesis sequences and identifies the count with the tree count. |
| `def-binary-tree-and-its-size` | ai-altered | not-applicable | A recursive set-theoretic definition, since graph-theoretic trees are not available at this order. |
| `lem-binary-trees-of-a-given-size-form-a-finite-set` | ai-altered | ai-altered | Well-definedness obligation minted here. |
| `thm-binary-trees-correspond-to-dyck-paths` | literature-derived | ai-altered | Guichard §3.5 (rooted binary trees and the same recurrence) with Dershowitz--Zaks §2.1, which counts binary trees by the cycle lemma; the bijection with Dyck paths is the route this page takes. |
| `cor-binary-trees-are-counted-by-the-catalan-numbers` | literature-derived | ai-altered | Guichard §3.5 and Dershowitz--Zaks §2.1, both of which give the tree count directly. |
| `def-convex-polygon-chords-crossings-and-triangulations` | ai-altered | not-applicable | A purely combinatorial definition on labelled vertices, because no plane geometry is available at this order. |
| `lem-a-triangulation-has-a-unique-triangle-on-the-closing-side` | ai-altered | ai-altered | The splitting lemma implicit in every source treatment, stated with its uniqueness clause. |
| `thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees` | literature-derived | ai-altered | Guichard Exercise 3.5.5 (dividing a convex polygon by non-intersecting diagonals); Dershowitz--Zaks §2.1 cites Grunert for the polygon analogue. |
| `cor-triangulations-of-a-convex-polygon-are-counted-by-the-catalan-numbers` | literature-derived | ai-altered | Guichard Exercise 3.5.5. |
| `def-path-system-and-non-intersecting-path-system` | ai-altered | not-applicable | Krattenthaler §10.13 states it for an acyclic digraph; the lattice-path case is stated natively. |
| `lem-sign-reversing-involution-on-intersecting-path-systems` | literature-derived | ai-altered | Krattenthaler §10.13, named at §10.1 as "the path switching involution for non-intersecting lattice paths". |
| `thm-lindstrom-gessel-viennot` | literature-derived | ai-altered | Krattenthaler Theorem 10.13.1, stated in its lattice-path case. |
| `cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant` | ai-altered | ai-altered | A specialisation computed here from Corollary 10.13.2 with the compatibility hypothesis verified rather than assumed. |
| `rem-routes-to-the-catalan-count` | ai-altered | not-applicable | Records which hypotheses each proved route spends; the content is the page’s own theorems. |
| `rem-binary-trees-and-triangulations-here-are-combinatorial-objects` | ai-altered | not-applicable | Records the scope of two definitions on this page. |
| `rem-lattice-path-conventions` | ai-altered | not-applicable | Records conventions the sources disagree about, each attributed. |

#### `lattice-paths-and-catalan-numbers-examples`

| id | statement | proof | rationale |
|---|---|---|---|
| `ex-monotone-lattice-paths-from-the-origin-to-three-two` | ai-generated | ai-altered | A computed instance of a published count; role example, non-load-bearing. |
| `ex-the-five-dyck-paths-of-semilength-three` | literature-derived | ai-altered | The standard enumeration, reproduced in Postnikov’s lecture of 6 February 2019; it is a deps target on this page, so it may not be generated. |
| `ex-the-three-catalan-families-matched-at-semilength-three` | ai-generated | ai-altered | The three tables are computed from the page’s own bijections; role example, non-load-bearing. |
| `ex-the-reflection-bijection-on-a-concrete-path` | ai-generated | ai-altered | A chosen input to a proved bijection; role example. |
| `ex-the-ballot-problem-with-three-and-two-votes` | ai-generated | ai-altered | A computed instance; role example. |
| `ex-the-cycle-lemma-on-a-word-of-length-seven` | ai-generated | ai-altered | A chosen word; role example. |
| `ex-catalan-numbers-to-six-computed-two-ways` | ai-generated | ai-altered | A computed table; role example. |
| `ex-the-fourteen-triangulations-of-a-convex-hexagon` | ai-generated | ai-altered | A computed enumeration; role example. |
| `ex-the-first-coefficients-of-the-catalan-generating-function` | ai-generated | ai-altered | A computed truncation check; role example. |
| `ex-non-intersecting-path-pairs-by-a-two-by-two-determinant` | ai-generated | ai-altered | A computed instance; role example. |
| `ex-the-tail-swap-involution-on-an-intersecting-pair` | ai-generated | ai-altered | A chosen input to a proved involution; role example. |
| `fs-the-central-binomial-quotient-is-an-integer-only-for-small-n` | ai-altered | ai-altered | A deliberate weakening of the true divisibility statement; false statements may not be generated. |
| `fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths` | ai-altered | ai-altered | A deliberate distortion of the sourced Catalan count. |
| `fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence` | ai-altered | ai-altered | A deliberate misreading of the sourced convolution recurrence. |
| `cex-a-map-between-two-catalan-families-that-is-not-injective` | ai-generated | ai-altered | The statistic and its collision are constructed here and verified; role counterexample, non-load-bearing. |
| `cex-a-step-set-for-which-the-reflection-argument-fails` | ai-generated | ai-altered | The step set and witness are constructed here; role counterexample. |

#### `linear-algebra-methods-in-combinatorics`

| id | statement | proof | rationale |
|---|---|---|---|
| `def-incidence-vector-of-a-subset` | literature-derived | not-applicable | Babai--Frankl §1.1 and Matousek Miniature 3, which both attach the same zero-one vector to a set. |
| `def-standard-bilinear-form-on-a-coordinate-space` | literature-derived | not-applicable | Taken from Babai–P. Frankl, 2.3.1 Inner product spaces. |
| `lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size` | ai-altered | ai-altered | The computation every source performs inline, stated once with both field specialisations. |
| `def-set-family-and-its-incidence-matrix` | literature-derived | not-applicable | Matousek Miniature 3 (the $m\times n$ matrix with clubs as rows) and Babai--Frankl §2.4. |
| `lem-a-family-with-independent-incidence-vectors-has-at-most-n-members` | ai-altered | ai-altered | The set-family instantiation of the dimension bound, which is how Babai--Frankl ch. 1 uses it. |
| `lem-diagonal-independence-criterion` | literature-derived | ai-altered | Taken from Babai–P. Frankl, 2.1.4 Criteria of linear independence. |
| `lem-triangular-independence-criterion` | literature-derived | ai-altered | Babai--Frankl §2.1.4, "Criteria of linear independence". |
| `lem-determinant-independence-criterion` | literature-derived | ai-altered | Babai--Frankl §2.1.4, "Criteria of linear independence". |
| `thm-oddtown` | literature-derived | ai-altered | Taken from Babai–P. Frankl, 1.1 Counting clubs in Oddtown; Matoušek, Miniature 3. The Clubs of Oddtown; Pikhurko, 4.1 A Few Problems. |
| `cor-the-oddtown-bound-is-attained` | ai-altered | ai-altered | The singleton family is the standard witness; stated as its own item because the sharpness is used. |
| `lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field` | ai-altered | ai-altered | Standard, minted here because the library has it nowhere. |
| `lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form` | ai-altered | ai-altered | Stated for the standard form over an arbitrary field and proved without a choice principle. |
| `thm-eventown` | literature-derived | ai-altered | Taken from Babai–P. Frankl, 2.3.2 Eventown revisited; Pikhurko, 4.2 Solutions. |
| `thm-every-maximal-eventown-family-is-maximum` | literature-derived | ai-altered | Babai--Frankl §2.3.2, "Eventown revisited". |
| `lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent` | ai-altered | ai-altered | Matousek Miniature 4 argues positive definiteness; the independence form is the one the master lemma consumes. |
| `thm-nonuniform-fisher-inequality` | literature-derived | ai-altered | Taken from Babai–P. Frankl, 4.1 When all intersections are equal size; Matoušek, Miniature 4. Same-Size Intersections. |
| `cor-uniform-fisher-inequality` | ai-altered | ai-altered | The uniform reading of the theorem, stated separately because the companion page applies it. |
| `def-complete-bipartite-decomposition-of-a-graph` | literature-derived | not-applicable | Taken from Pikhurko, 3.2 Reduction to Decompositions. |

| `thm-graham-pollak` | literature-derived | ai-altered | Taken from Babai–P. Frankl, 1.4 Addressing into the squashed cube; Matoušek, Miniature 8. Packing Complete Bipartite Graphs; Pikhurko, 3.3 Graham–Pollack Theorem. |
| `def-shattering-and-vc-dimension` | literature-derived | not-applicable | Babai--Frankl §7.4, whose title names the Vapnik--Chervonenkis dimension. |
| `def-down-shift-of-a-set-family` | literature-derived | not-applicable | Babai--Frankl §7.5, "Shadows of s-independent families", where the compression operator appears. |
| `lem-the-down-shift-preserves-the-number-of-sets` | ai-altered | ai-altered | One of the two compression lemmas the design requires be separated. |
| `lem-the-down-shift-creates-no-new-shattered-set` | ai-altered | ai-altered | The other compression lemma. |
| `lem-iterated-down-shifting-terminates-in-a-downward-closed-family` | ai-altered | ai-altered | The termination and closure halves stated together as one lemma. |
| `lem-a-downward-closed-family-shatters-each-of-its-members` | ai-altered | ai-altered | The step that turns a structural fact into a size bound. |
| `thm-sauer-shelah` | literature-derived | ai-altered | Babai--Frankl §7.4; the shifting proof is a standard alternative to the inclusion-matrix route stated there, and the split into two compression lemmas is this page’s structuring. |
| `cor-sauer-shelah-polynomial-bound` | ai-altered | ai-altered | A weakened, source-anchored form of the standard polynomial bound, chosen so the companion page’s false statement has something true to be measured against. |
| `def-inclusion-matrix` | literature-derived | not-applicable | Taken from Babai–P. Frankl, 7.1 The inclusion matrix; s-independent families. |
| `thm-rank-of-the-point-inclusion-matrix` | ai-altered | ai-altered | The case t = 1 of Babai--Frankl §7.1, with a direct proof; the general rank theorem is not claimed. |
| `rem-the-rank-of-a-general-inclusion-matrix-is-not-established-here` | ai-altered | not-applicable | Records what this page proves and what it does not. |
| `def-monomials-multidegree-and-total-degree` | ai-altered | not-applicable | Built against the library iterated multivariate construction, which supplies no monomial expansion. |
| `thm-polynomial-identity-lemma` | literature-derived | ai-altered | Taken from Alon, Lemma 2.1. |
| `lem-grid-reduction-of-a-multivariate-polynomial` | ai-altered | ai-altered | A step of Alon’s proof of Theorem 1.2 promoted to a lemma with its three clauses separated. |
| `thm-combinatorial-nullstellensatz` | literature-derived | ai-altered | Taken from Alon, Theorem 1.2. |
| `lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime` | ai-altered | ai-altered | The non-vanishing Alon’s Cauchy--Davenport proof needs, stated as its own item because the design requires it be a cited step. |
| `thm-cauchy-davenport` | literature-derived | ai-altered | Taken from Pikhurko, 11.1 Cauchy–Davenport Theorem; Alon, Theorem 3.2. |
| `thm-alon-furedi-hyperplane-cover-of-the-cube` | literature-derived | ai-altered | Taken from Matoušek, Miniature 16. Covering a Cube Minus One Vertex; Pikhurko, 11.3 Covering Cube by Affine Hyperplanes; Alon, Theorem 6.3. |
| `def-multilinear-polynomial-and-multilinear-reduction` | literature-derived | not-applicable | Matousek Miniature 17, which multilinearises on the cube; Babai--Frankl §4.3 uses the same reduction. |
| `lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction` | ai-altered | ai-altered | Babai--Frankl’s multilinearisation proposition, stated with the uniqueness clause the independence argument uses. |
| `lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube` | ai-altered | ai-altered | The dimension count of the multilinear space, stated as the ambient bound the intersection theorem consumes. |
| `def-l-intersecting-family` | literature-derived | not-applicable | Babai--Frankl §4.3, "Restricted intersections"; Matousek Miniature 17 states the same hypothesis. |
| `thm-frankl-wilson-nonuniform-bound` | literature-derived | ai-altered | Taken from Babai–P. Frankl, 4.3 Restricted intersections; Matoušek, Miniature 17. Medium-Size Intersection Is Hard To Avoid. |
| `lem-an-unshattered-set-reduces-a-monomial-on-a-family` | ai-altered | ai-altered | The relation at the heart of the polynomial proof of Sauer--Shelah, isolated. |
| `thm-sauer-shelah-by-multilinear-polynomials` | literature-derived | ai-altered | Taken from Babai–P. Frankl, 7.4 Linear dependencies among the rows of inclusion matrices and the Vapnik–Chervonenkis dimension. |
| `rem-sauer-shelah-uses-no-linear-algebra` | ai-altered | not-applicable | Records which machinery each of the two proofs spends. |
| `rem-the-field-is-a-hypothesis-of-every-bound-on-this-page` | ai-altered | not-applicable | Records the field each theorem is proved over. |

#### `linear-algebra-methods-in-combinatorics-examples`

| id | statement | proof | rationale |
|---|---|---|---|
| `ex-an-oddtown-family-on-four-points` | ai-generated | ai-altered | A computed instance of the singleton family; role example. |
| `ex-an-eventown-family-of-maximum-size` | literature-derived | ai-altered | The pairing construction of Babai--Frankl §2.3; it is a deps target on this page, so it may not be generated. |
| `ex-the-nonuniform-fisher-bound-on-the-seven-lines-of-the-fano-plane` | literature-derived | ai-altered | The Fano line set is the classical witness recorded in Babai--Frankl §4.1. |
| `ex-graham-pollak-for-the-complete-graph-on-four-vertices` | ai-generated | ai-altered | A computed instance; role example. |
| `ex-a-family-of-vc-dimension-two-attaining-the-sauer-shelah-bound` | literature-derived | ai-altered | The family of small subsets is the standard extremal example recorded in Babai--Frankl §7.4. |
| `ex-the-inclusion-matrix-of-points-against-pairs-on-four-points` | ai-generated | ai-altered | A computed matrix; role example. |
| `ex-cauchy-davenport-in-the-integers-modulo-seven` | ai-generated | ai-altered | A computed instance; role example. |
| `ex-the-combinatorial-nullstellensatz-on-a-two-variable-polynomial` | ai-generated | ai-altered | The polynomial is constructed here and every value verified; role example. |
| `ex-the-nonuniform-intersection-bound-on-the-pairs-in-four-points` | ai-generated | ai-altered | A computed instance; role example. |
| `ex-covering-the-cube-minus-the-origin-with-n-hyperplanes` | literature-derived | ai-altered | The coordinate hyperplanes are the sharpness witness recorded with Alon Theorem 6.3. |
| `fs-the-oddtown-bound-can-be-improved-to-n-minus-one` | ai-altered | ai-altered | A deliberate tightening of the sourced Oddtown bound. |
| `fs-fisher-inequality-holds-over-the-two-element-field` | ai-altered | ai-altered | A deliberate transposition of the sourced Fisher statement to the wrong field. |
| `fs-a-family-of-vc-dimension-d-has-at-most-n-to-the-d-members` | ai-altered | ai-altered | A deliberate over-tightening of the sourced Sauer--Shelah bound. |
| `fs-the-standard-bilinear-form-on-the-two-element-field-is-an-inner-product` | ai-altered | ai-altered | A deliberate misclassification of the form Babai--Frankl §2.3 defines. |
| `fs-the-combinatorial-nullstellensatz-holds-without-the-top-coefficient-hypothesis` | ai-altered | ai-altered | A deliberate deletion of a hypothesis from Alon Theorem 1.2. |
| `cex-incidence-vectors-dependent-over-the-two-element-field-and-independent-over-the-reals` | ai-generated | ai-altered | The three-set witness is constructed here and both computations verified; role counterexample. |
| `cex-cauchy-davenport-fails-for-a-composite-modulus` | literature-derived | ai-altered | The proper-subgroup witness is the standard one recorded with Alon Theorem 3.2. |
| `cex-a-nonzero-polynomial-vanishing-on-a-grid-of-exactly-its-degree` | literature-derived | ai-altered | The grid polynomial itself is the boundary witness for Alon Lemma 2.1. |

---

## Step-3 fix pass

Group Alpha `b` reviewed this batch; its report is
`research/frontier-18-alpha-b-step3-scaffold-review.md`, which uses the `B5-` prefix for batch 5.
One entry per finding id in that report, in its order, not renumbered. Alpha's own repairs
(B5-3, B5-4, B5-5) were already applied to the manifest by Alpha and are recorded here as
verified from disk rather than reapplied.

### B5-1 — Motzkin and Schröder numbers · **applied**

Alpha is right on both halves and I withdraw the F10 decline. Verified from disk before
changing anything: Krattenthaler §10.8 is titled *Elementary results on Motzkin and Schröder
paths* and begins at page 26 of `arxiv.org/pdf/1503.05930` (the copy this batch already
fetch-verified, byte-identical at 745,705 bytes), four sections past the declared locator's end.
The decline's stated reason — that the design's CB-15 symbolic method is unavailable — was true
of the design's route and false of the page's own.

**Reading §10.8 and §10.9 changed the shape of the fix.** Alpha proposed three items reaching the
two algebraic equations. The source carries more than that at no extra cost:

* **Corollary 10.8.2** states the Motzkin and large Schröder numbers as closed binomial-weighted
  sums of Catalan numbers, equations (10.45) and (10.46).
* **Theorem 10.9.2** states both generating functions in closed form and displays
  $M(z)=1/(1-z-z^2M(z))$, which is the functional equation Alpha reconstructed. So the equations
  are transcribed from a source rather than derived here, and only their proofs are local.

Once §10.8 is harvested, Corollary 10.8.2 needs a disposition, and declining it would be a drop
for ergonomics — the two closed sums are source-stated and their proof (delete the level steps,
what remains is a Dyck path) uses only material this page already builds. So I added **five**
items, not three, and say so plainly rather than burying it:

| id | kind | why |
|---|---|---|
| `def-motzkin-and-schroder-paths` | definition | both step sets, both families, $M_n$ and $R_n$ as counts, both generating functions, the $S_n \to R_n$ renaming and the step-count identity the two corollaries use |
| `thm-motzkin-numbers-by-first-return-decomposition` | theorem | $M=1+xM+x^2M^2$ and $2x^2M=1-x-(1-2x-3x^2)^{1/2}$ |
| `cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers` | corollary | $M_n=\sum_{2k\le n}\binom{n}{2k}C_k$, Krattenthaler (10.45) |
| `thm-large-schroder-numbers-by-first-return-decomposition` | theorem | $R=1+xR+xR^2$ and $2xR=1-x-(1-6x+x^2)^{1/2}$ |
| `cor-large-schroder-numbers-as-a-binomial-sum-of-catalan-numbers` | corollary | $R_n=\sum_{k\le n}\binom{n+k}{2k}C_k$, Krattenthaler (10.46) |

**Arithmetic I checked rather than copied.** The Motzkin convolution index runs $i=0,\dots,n-1$
and the Schröder one runs $i=0,\dots,n$, because a $U$ and a $D$ consume two units of LENGTH but
one unit of HALF-length; that asymmetry is the single most copyable error in the block and it is
a numbered step in the Schröder item, not a remark. Completing the square gives
$(1-x-2x^2M)^2=(x-1)^2-4x^2=1-2x-3x^2$ and $(1-x-2xR)^2=(x-1)^2-4x=1-6x+x^2$, matching (10.49)
and (10.50); both roots have constant coefficient $1$, so the uniqueness clause of the published
`cor-unique-formal-root-with-constant-one` identifies them and neither item divides by a
non-unit. The recurrences reproduce $M_0,\dots,M_4=1,1,2,4,9$ and $R_0,\dots,R_4=1,2,6,22,90$,
and the two closed sums reproduce the same values independently. The Schröder sum is re-indexed:
the source's $n$ is the horizontal extent, so its $n/2$ is this page's $n$.

**Harvest.** The Krattenthaler locator is now `ch. 10, §§10.1–10.4, §§10.8–10.9 and §10.13`, and
twelve rows were added enumerating those two sections' own headings: the section heading, the
reflect-rotate translation and the Delannoy pointer, Theorem 10.8.1, Corollary 10.8.2, equations
(10.45) and (10.46), the little Schröder numbers, decorated Motzkin paths, the §10.9 weight,
Theorem 10.9.1, Theorem 10.9.2 and Theorem 10.9.3. Six are `included`; the six `deferred` rows
each carry a reason about that specific result. `coverage-checklist` passes.

### B5-2 — Chung–Feller · **applied, and the lemma is sourced rather than reconstructed**

Alpha's instruction was explicit: source the height-profile lemma before scaffolding, and report
rather than improvise if no source carries a transcribable proof. I did not use Alpha's sketch.

**Where I looked.** Krattenthaler carries no Chung–Feller at all — `grep -ni "chung\|feller"` over
the full extracted text of `1503.05930` returns one hit, a bibliography entry for Feller's
probability book. Dershowitz–Zaks §2 is about ordered trees and average height. Neither of
Alpha's two suggestions holds it.

**What does.** A. Huq, *Generalized Chung-Feller Theorems for Lattice Paths* (PhD thesis,
Brandeis 2009), `arxiv.org/pdf/0907.3254`, fetch-verified and stamped as the pair's ninth source:

* **Theorem 1.1.3** is the classical statement, in the design's own phrasing — among the
  $\binom{2n}{n}$ paths from $(0,0)$ to $(2n,0)$, the number with $2k$ steps above the axis is
  independent of $k$ and equals $C_n$.
* **Theorem 2.1.1** is exactly the missing lemma: for an integer word of sum $1$ and length $m$,
  each of $1,\dots,m$ is the number of nonpositive partial sums of exactly one conjugate. Its
  proof is four lines and transcribes into numbered steps.
* **Theorems 2.2.1 and 2.3.1(1)** carry it from the word to the up steps by blocking, which is
  what makes the count come out $C_n$ per class.

**Two items, as Alpha specified.** `lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once`
and `thm-chung-feller`. The blocking reduction and the pairing are numbered steps inside the
theorem: neither has a second consumer, and the generated-claim rule prefers an inline step to a
minted statement.

**Two departures from the source, both recorded in the items.** Huq perturbs the partial sums by
$-i/n$ to break ties; I use the integer key $T(i)=m\,S_a(i)-i$ that the perturbation clears to,
so the lemma never leaves $\mathbb{Z}$ and needs no fractional parts. And Huq disposes of the
up/down pairing in one clause ("since the number of up and down steps below the x-axis are the
same"); step 6 proves it, by telescoping $i\mapsto[\,h(i)\ge c+1\,]$ over the path, which is
$0$ at both ends. I also do not transcribe the source's line "since there are $n+1$ up steps, $p$
has $n$ conjugates that start with an up step" — it is a slip for $n+1$, and the count that
matters ($n+1$ classes, each of size $C_n$, totalling $\binom{2n}{n}=(n+1)C_n$) only closes with
$n+1$.

**Checked numerically before scaffolding.** At $n=2$ the six paths split $2/2/2$ across
$k=0,1,2$; at $n=1$, $UD$ has both steps above and $DU$ neither. The transversal lemma was
checked by hand on $a=(+1,+1,-1)$, where $X(0),X(1),X(2)=1,2,3$.

### B5-3 — `cex-cauchy-davenport-fails-for-a-composite-modulus` · **already correct (Alpha's repair verified)**

Read from disk: the manifest now displays all four sums of $A+B$ for $A=B=\{0,2\}$ in
$\mathbb{Z}/4$, gives $\lvert A+B\rvert=2$, and states the subgroup obstruction as the general
reason. Alpha is right that the old witness was false and right that the counterexample survives:
$2<3=\min\{4,\lvert A\rvert+\lvert B\rvert-1\}$. No further edit. Its `provenance.statement` row
in §13 stays `literature-derived`, which is correct now that the displayed witness is the
standard proper-subgroup one.

### B5-4 — `fs-fisher-inequality-holds-over-the-two-element-field` · **already correct (Alpha's repair verified)**

Read from disk. Alpha's objection is right: a false statement must refute a proposition, and
"the Fisher bound follows from the same argument over $\mathbb{F}_2$" is a claim about a proof.
The restatement — distinct nonempty $A_1,\dots,A_m\subseteq[n]$ with all pairwise intersections
of the same parity satisfy $m\le n$ — is refutable by an Eventown family, and I confirm the
witness: $2^{\lfloor n/2\rfloor}-1$ exceeds $n$ from $n=6$ ($7>6$). The strategy now names the
step with no $\mathbb{F}_2$ analogue. No further edit.

### B5-5 — `cor-catalan-closed-formula` · **already correct (Alpha's repair verified)**

Alpha's arithmetic is right and mine was wrong. Both sides times $(n+1)!(n-1)!$ are $(n+1)(2n)!$,
not $n(2n)!$: $(n+1)\binom{2n}{n+1}(n+1)!(n-1)!=(n+1)(2n)!$ and
$n\binom{2n}{n}(n+1)!(n-1)!=n(2n)!\cdot\frac{n+1}{n}=(n+1)(2n)!$. The identity being reduced to
was never wrong, only the displayed common value. Verified corrected in the manifest.

### B5-6 — the Hankel determinant · **applied**

Alpha accepted the drop and required the reason to be named in `rem-lattice-path-conventions`.
The remark's closing list is rewritten. It now names the Hankel determinant with both things it
would need — `thm-lindstrom-gessel-viennot` restated for a family of monotone paths closed under
tail-swapping at a common point, and the count of monotone paths from $(0,0)$ to $(m,m)$ weakly
below the diagonal — and says the page supplies neither. The Narayana refinement keeps its own
reason. Motzkin, Schröder and Chung–Feller are **removed** from that list, because this run now
builds them and leaving them there would publish a false claim about the page.

The remark deliberately does **not** wikilink the companion page's
`fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths`, which is where the
weakly-below count is currently visible: Alpha's own mechanical check records zero B-page
citations on all four pages of the group, and an A-page link would break that. The remark
describes the gap instead.

### B5-7 — `finite-probability-and-the-probabilistic-method` · **applied (no manifest change)**

Alpha decided: keep the declared edge, do not remove it and do not manufacture a citation. No
manifest change is needed and none was made. Recorded here so the decision travels with the
batch: the zero edge is deliberate, the page's closure reaches
`finite-counting-and-binomial-coefficients` and
`inclusion-exclusion-and-the-pigeonhole-principle` through order 221, and removing 221 would
force two backward edges that `validate-plan` would then report as `redundant-prereq`.

### B5-8 — the design's false claim about disk · **already correct**

Amendment A1 in §9 of these notes already carries the exact old text and exact replacement for
CB-13 (ENRICHED) L5335. Alpha approved it and it lands with the lead Alpha at step 4. Nothing in
my three files changes; prose scaffolds are not mine to edit.

### B5-9 — the declines examined and accepted · **recorded, one correction**

No action required on (a) or (b). One correction to the record, which I make because leaving it
would put a false reason in a durable artifact: the Narayana decline was justified in F10 by "no
source in my declared read ranges carries them", and that is still true of the declared ranges,
but Huq §2.5 — outside my locator, and glimpsed while navigating to §§2.1–2.3 — does carry the
Narayana number formulas. So the honest reason is about the result, not about availability: the
Narayana numbers refine $C_n$ by the number of peaks, and every route this page builds
(reflection, the cycle lemma, the generating function) counts paths without tracking a statistic
on them, so the refinement needs machinery the page does not have rather than a source it cannot
find. **If the page is ever revisited, Huq §2.5 is the source to harvest**, and it is in hand.

---

### Self-found repair at this pass, not one of Alpha's findings

Checking my six new proof contracts against disk, I ran the same check over all 110 and found
**eleven citation quotes recorded at steps 1–2 that do not occur in the cited item's `Statement`
or `Definition`** — `"degree"`, `"transport"`, `"standard basis"`, `"unique coordinates"`,
`"free variable"`, `"division"`, `"evaluation"`, `"additive"` and `"representatives"`, each a
word from the cited item's id or title rather than a clause from its text. `citation-fidelity`
cannot see them yet, because it checks authored items and none of these items exists on disk; at
step 6 every one would have failed `--fail-on-missing-quote`. All eleven are rewritten to exact
clauses, verified verbatim against the Statement or Definition section of the cited published
item. All 119 published-item quotes in the file now match.

---

### Gates run at this pass

```
node tools/source-fetch-check.mjs --coverage research/frontier-18-batch-5.coverage.json --stamp
  -> 9/9 source(s) fetch-verified (1 newly stamped)
node tools/coverage-checklist.mjs research/frontier-18-batch-5.coverage.json
  -> 2 page(s), 141 harvested result(s), 0 error(s), 1 warning(s)
     (the warning is the pre-existing coverage-low-yield on the linear-algebra pair, which
      Alpha confirmed result by result at B5-9(b))
node tools/content-policy.mjs --manifest-only research/frontier-18-batch-*.pages.json
  -> 796 scoped item(s), 0 error(s), 0 warning(s)
node tools/validate-plan.mjs research/plan-spec.json
  -> exit 0, redundant-prereq advisories only, none on this batch's pages
node tools/prosecheck.mjs research/frontier-18-batch-5.pages.json --warnings
  -> 0 error(s); no warning is on any item added or amended at this pass
node tools/citation-fidelity.mjs research/frontier-18-batch-5.proof-contracts.json
  -> 0 citations over 0 authored items; 110 referenced items not on disk, SKIPPED not passed
```

`node tools/depsource.mjs` and `node tools/proof-contract.mjs --strict` were **not** satisfied and
are not expected to be: `depsource` reads the spliced spec and this batch's items are spliced at
step 4, and `proof-contract --strict` reports `item-missing` for all 110 contracts because nothing
is authored until step 5. Neither is evidence about this pass either way.

### Page size after this pass

`lattice-paths-and-catalan-numbers` holds **58** A items against the 60 cap, up from 51. Alpha's
own arithmetic anticipated 56 for the three-item version of B5-1; the two closed-sum corollaries
account for the other two. No split is proposed and none is needed, but the headroom is now two
items, so the page cannot absorb another block without one — which is a fact Alpha should have
when it re-checks, since B5-6 declined the Hankel determinant on a headroom argument that assumed
56.

## Continuity checkpoint

**Substage:** step 5 authoring, pre-edit inventory complete.
**Owned artifacts:** `research/frontier-18-batch-5.pages.json`, `research/frontier-18-batch-5.coverage.json`, `research/frontier-18-batch-5.proof-contracts.json`, `research/frontier-18-batch-5.notes.md`, and the four page targets under `library/combinatorics/`.
**Disk state:** the first 44 A-page items of `lattice-paths-and-catalan-numbers` already exist on disk; 94 owned item files remain absent, namely the rest of the lattice-path pair and all of the linear-algebra pair.
**Completed gates carried into authoring:** the step-2/source-fix checks recorded above, including `coverage-checklist`, `source-fetch-check`, `url-sweep`, `content-policy --manifest-only`, `validate-plan`, and the quote repair sweep.
**Frozen-text state:** none; nothing in this batch has been judged and no page/item text is frozen.
**Open mathematical constraints:** keep `def-catalan-number` justified by `lem-dyck-paths-of-a-given-semilength-form-a-finite-set`; preserve the no-`\iota(n)` rule in every multiplicative count identity; keep Chung–Feller on Huq's sourced route; keep the Hankel/Narayana omissions as recorded declines rather than silent drops; and keep every AI-generated statement non-load-bearing with its concrete witness displayed.
**Exact next action:** author the remaining lattice-path A-page items beginning with `lem-binary-trees-of-a-given-size-form-a-finite-set`, then finish the lattice examples page before moving to the linear-algebra pair.

## Step-5 authoring

**Status on Monday, August 24, 2026.** All 138 owned item files now exist on disk, along with the four owned page files:
`library/combinatorics/lattice-paths-and-catalan-numbers.md`,
`library/combinatorics/lattice-paths-and-catalan-numbers-examples.md`,
`library/combinatorics/linear-algebra-methods-in-combinatorics.md`,
`library/combinatorics/linear-algebra-methods-in-combinatorics-examples.md`.

**What was authored.** Both A/B pairs are written in full. The lattice-path pair was completed from
`lem-binary-trees-of-a-given-size-form-a-finite-set` onward, including the binary-tree,
triangulation and Lindstrom-Gessel-Viennot block plus all 16 B-page examples, false statements and
counterexamples. The linear-algebra pair was authored in full: the incidence-vector and orthogonal
complement spine, the Oddtown/Eventown/Fisher/Graham-Pollak results, the shifting and VC-dimension
block, the polynomial-method block through Frankl-Wilson, and all 18 B-page examples, false
statements and counterexamples.

**Component provenance.** The intended per-item provenance rationale remains the table already
recorded in §13 above, and the authored frontmatter matches those classifications: sourced
statements stay `literature-derived` where the literature gives the same claim, definitions and
structural lemmas needed only for this library's formalisation are `ai-altered`, and the non-load-
bearing worked examples or witness counterexamples minted locally stay `ai-generated` with the
required `generation.role`.

**Claims narrowed or dropped while authoring.** None of the scaffolded item ids was dropped. The
batch kept the already-approved step-3 declines: the Hankel determinant and the Narayana refinement
remain recorded as not built here on the lattice-path page, and the step-3 linear-algebra declines
remain as accepted. One local repair changed no claim but did change notation: the sign-reversing
involution lemma now uses `\\tau` instead of an applied `\\iota(\\cdot)` to satisfy the standing
notation gate.

**Gates run after authoring.**

```
node tools/tsx-run.mjs tools/precheck.mts items/<all 138 owned ids>
  -> 110 proof-bearing items checked, 0 failing; all authored proof-bearing items clean
node tools/validate-plan.mjs research/plan-spec.json
  -> exit 0, redundant-prereq advisories only, none specific to a batch-5 authored defect
node tools/content-policy.mjs research/frontier-18-batch-5.pages.json
  -> 138 scoped item(s), 0 error(s), 0 warning(s)
node tools/coverage-checklist.mjs research/frontier-18-batch-5.coverage.json
  -> 2 page(s), 142 harvested result(s), 0 error(s), 1 pre-existing `coverage-low-yield` warning
node tools/prosecheck.mjs library/combinatorics/lattice-paths-and-catalan-numbers.md library/combinatorics/linear-algebra-methods-in-combinatorics.md research/frontier-18-batch-5.pages.json --warnings
  -> 0 errors on the two page files; warnings only on the scaffold prose in `.pages.json`
node tools/depcheck.mjs
  -> batch-local page cycles removed; remaining output is repo-wide warnings / legacy multi-home noise
node tools/fwdcheck.mjs
  -> no new batch-local forward-reference failure observed
node tools/extcheck.mjs
  -> no batch-local error
node tools/citecheck.mjs
  -> warnings only; no batch-specific fatal gate
```

**Blocker.** The strict proof-contract file is not reconciled to the final authored prose. Running

```
node tools/proof-contract.mjs research/frontier-18-batch-5.proof-contracts.json --strict
```

on August 24, 2026 reports **1655 errors**. These are not item-missing failures anymore; they are
real contract mismatches against the authored text, dominated by `citation-quote-mismatch`,
`citation-fact-uncontracted`, `step-entry-input-omitted`, `step-unmapped` and
`boundary-evidence-unanchored` on the already-authored lattice-path contracts. The authored items
exist and precheck cleanly, but the contract file still reflects scaffold-era quotations and step
maps rather than the final prose. That reconciliation remains open and blocks an honest
`proof-contract --strict` pass for this batch.

**Confidence statement.** I am confident that the authored files exist, that the batch now clears
`precheck`, `validate-plan` and `content-policy`, and that the batch-local page-cycle issue found
by `depcheck` has been repaired. I did **not** complete the proof-contract rewrite, and I did not
re-run every repo-wide warning tool to zero because the remaining outputs are dominated by legacy or
unrelated corpus warnings outside this batch.
