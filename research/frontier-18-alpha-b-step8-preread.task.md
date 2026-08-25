# Step 8 — group **b**, run `frontier-18`

You are the group Alpha for batches **5**, **10**: 4 A/B pair(s), 8 page(s), 225 item(s), 196 open rejection(s) over 130 item(s).

You are a **fresh agent**. Nothing you did at step 3 or step 6 is in this
context, and nothing from any other group ever will be. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read your own pre-read first

**No pre-read digest exists for this group.** The step-7 pass did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

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
`{from_group, item, owning_group, model, context_sha256, finding}` and adjudicate
your own rejection on what is true. The gate routes it to the owning group,
and a finding nobody answers fails the stage.

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

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `lem-unions-of-components-and-of-anticomponents-are-modules` | `modules-substitution-and-prime-graphs` | gpt-5.6-terra | `3cc7dbf1b7ea6e306dfa5716de23b725052e9a16c0b9b28f8e7c568f0edf0ef2` |
| `lem-a-pattern-inside-an-extension-set-produces-the-substitution` | `modules-substitution-and-prime-graphs` | gpt-5.6-terra | `c1854e77b72461394a8724518404546b40d602c4ef9356ae1fe352aec188e68d` |
| `rem-conventions-for-prime-graphs` | `modules-substitution-and-prime-graphs` | gpt-5.6-terra | `b822ed9f9e3564b74fcc6e17da230c4b4a3825f8d7f9384e7082cba27fcce94e` |
| `ex-modules-of-the-four-vertex-path` | `modules-substitution-and-prime-graphs-examples` | gpt-5.6-terra | `e3c6221669b9f3ea434e13c7820113a95e119d6844d1a8d7a19ab891b5021a69` |
| `ex-the-four-vertex-path-is-the-only-prime-graph-on-four-vertices` | `modules-substitution-and-prime-graphs-examples` | gpt-5.6-terra | `85b8cf3bd366d618204b1b4bb8906e5d25446386d1d6876c3ddc641611e556d8` |
| `cor-the-erdos-hajnal-conjecture-reduces-to-prime-graphs` | `modules-substitution-and-prime-graphs` | gpt-5.6-terra | `013ef4f9a03f677c98c2428e965495233ecf01d74509b427a1d77047028c6745` |
| `ex-paths-on-at-least-four-vertices-are-prime` | `modules-substitution-and-prime-graphs-examples` | gpt-5.6-terra | `d28368db0360187c22776cdd04d31257d1f0ffa87b0256c959c9a59a94b41113` |
| `ex-the-modular-decomposition-of-a-blown-up-five-cycle` | `modules-substitution-and-prime-graphs-examples` | gpt-5.6-terra | `25b36e56fa2a370f6166a4128eda5e89b22345f8219048934e431cb4f87cbf34` |
| `ex-counting-induced-three-vertex-paths-by-extensions` | `modules-substitution-and-prime-graphs-examples` | gpt-5.6-terra | `62d9a8f4d608bd0510e1d535af1ceb8a0ae9d6b1e749db4af8917d0532a86f00` |
| `ex-substitution-into-an-edge-and-into-a-nonedge` | `modules-substitution-and-prime-graphs-examples` | gpt-5.6-terra | `de24e47cd7945a65c4fa784d4b72712edfef1df5fa6f3882d77e87bf15511d24` |
| `cex-a-union-of-two-disjoint-modules-need-not-be-a-module` | `modules-substitution-and-prime-graphs-examples` | gpt-5.6-terra | `8eddf35f7265afbcb607fd6232247f4156d39aa89a2ef25e675515f7d6cf653d` |
| `def-module-of-a-graph` | `modules-substitution-and-prime-graphs` | deepseek-v4-pro | `8b3887aeccb8c6be9f660721c49904c85a1536c5f05ec0d72d83064797c630f0` |
| `cex-a-difference-of-nested-modules-need-not-be-a-module` | `modules-substitution-and-prime-graphs-examples` | gpt-5.6-terra | `334e8686ee7541b4b13cee6cd6748cd95c5cafe5e83911d2980cbf322aebb989` |
| `lem-supersaturation-for-induced-copies` | `modules-substitution-and-prime-graphs` | gpt-5.6-terra | `cd1a5eebf3f57c5b77a8e2965a707aa19eb31ce2900c6b00bf537fec5d400fff` |
| `cex-maximal-proper-modules-need-not-be-disjoint-in-a-disconnected-graph` | `modules-substitution-and-prime-graphs-examples` | gpt-5.6-terra | `e1c831010428fc0077775ff9fecb10e6edc4cc9fd048bbb79d50a8e8dddb6dbe` |
| `cex-primality-is-not-inherited-by-induced-subgraphs` | `modules-substitution-and-prime-graphs-examples` | gpt-5.6-terra | `1673fc48506fcda080c2f69ef2a89c090bf24502bba5b9ec688a05f0a585be25` |
| `def-directional-and-weak-sparsity-between-vertex-sets` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `e07f67de247d5eeb0b74ace81e17cd0c4bbc10c53311d7c6441c8b6e32aa337a` |
| `lem-a-weakly-sparse-set-has-a-large-sparse-subset` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `21118068771ffec02682397c545ac14e52b7cdd8a6a98815a1858614ee888cd8` |
| `lem-a-sparse-set-has-small-self-density` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `9644e2170ae93ea6488573939c75a74d7d865ffdf776ad90f7eb862603e14d0a` |
| `thm-substitution-preserves-the-erdos-hajnal-property` | `modules-substitution-and-prime-graphs` | gpt-5.6-terra | `72682a9ee2e921332c3e6f832bc844b83f46b27936be41e33439d7c4f823a155` |
| `lem-restrictedness-is-complement-invariant` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `2b11d733da1ab4ecfb5641bd46a2f73c2cff5372ad0ec8ac3d3cc5fabe5eca3c` |
| `lem-sparsity-transfers-to-a-large-subset` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `d944edc3c9f397ecf71f31369c4543b16208b09e135947c33160d530d09e37c8` |
| `lem-sparsity-is-monotone-in-the-parameter` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `edffecf1fe8f45b69b6e61f82eaf1226b4a9753a86432210a67733049558050b` |
| `lem-unions-of-components-and-of-anticomponents-are-modules` | `modules-substitution-and-prime-graphs` | deepseek-v4-pro | `3cc7dbf1b7ea6e306dfa5716de23b725052e9a16c0b9b28f8e7c568f0edf0ef2` |
| `lem-trimming-a-self-regular-set-of-low-density` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `8adffe8263264f64523eac90c2f626fcbf7e1bab76f20e73a78d3af90c00d254` |
| `lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `f7be4b8c778c9f11830e134ceae45782612b91b26e44323b5ab895756655f2fd` |
| `cor-rodl-for-a-nonempty-family-of-forbidden-graphs` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `a6f473bb6056751c48ee590a4be04476e156347e59f4628309454565efcc534d` |
| `ex-modules-of-the-four-vertex-path` | `modules-substitution-and-prime-graphs-examples` | deepseek-v4-pro | `e3c6221669b9f3ea434e13c7820113a95e119d6844d1a8d7a19ab891b5021a69` |
| `cor-rodl-in-the-edge-density-form` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `fd78f35eace38618062c130cb88db31d641b99ca8ecf91b8638cb091d12435f0` |
| `thm-nikiforov-few-induced-copies-force-a-linear-restricted-set` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `bd1520265969da146a4703d221b9d5597977f94fa2ab1a9f4270eccbcb93d004` |
| `cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `fd9c5f86a524ba45101987dd1f5189e021762dd4c69877f833798d784b346e31` |
| `ex-the-four-vertex-path-is-the-only-prime-graph-on-four-vertices` | `modules-substitution-and-prime-graphs-examples` | deepseek-v4-pro | `85b8cf3bd366d618204b1b4bb8906e5d25446386d1d6876c3ddc641611e556d8` |
| `cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `314f2721c7882b4c6f8a895a8048df9bf11737eed67c23b8a014278fad834a2b` |
| `ex-substitution-into-an-edge-and-into-a-nonedge` | `modules-substitution-and-prime-graphs-examples` | deepseek-v4-pro | `de24e47cd7945a65c4fa784d4b72712edfef1df5fa6f3882d77e87bf15511d24` |
| `thm-a-bounded-partition-into-weakly-restricted-sets` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `1bd87f5500d620c45140e550830556291d553310841156a00f9bc72625cf6cee` |
| `rem-the-diagonal-convention-in-self-density` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | gpt-5.6-terra | `52e5893bdb360d75cbd224324c03ebbda1120dfd8274fd7bfa9c695dd03fcc52` |
| `ex-zero-sparse-sets-are-the-stable-sets` | `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` | gpt-5.6-terra | `5e80b38d1226d431dedd89705459be49f8e0553ea1fe01753f4ce21a98228fc3` |
| `cor-the-erdos-hajnal-conjecture-reduces-to-prime-graphs` | `modules-substitution-and-prime-graphs` | deepseek-v4-pro | `013ef4f9a03f677c98c2428e965495233ecf01d74509b427a1d77047028c6745` |
| `ex-a-disjoint-union-of-small-cliques-is-a-sparse-vertex-set` | `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` | gpt-5.6-terra | `f28cc5aeb5346bd8f45f148217bc42e9f95385df6bb393dc12f614bb5d68a13a` |
| `ex-the-modular-decomposition-of-a-blown-up-five-cycle` | `modules-substitution-and-prime-graphs-examples` | deepseek-v4-pro | `25b36e56fa2a370f6166a4128eda5e89b22345f8219048934e431cb4f87cbf34` |
| `ex-rodls-theorem-with-an-explicit-constant-for-p-three-free-graphs` | `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` | gpt-5.6-terra | `659c1fc6697e0a6cf76b258319edd99b0f681727e2748f3f99a49e75f7578159` |
| `cor-the-modular-partition-with-a-prime-quotient-is-unique` | `modules-substitution-and-prime-graphs` | deepseek-v4-pro | `cc1bbbe01c9c02cf9fee50a4b4f059699912c2facdb8e76df56271e0f6ceac3e` |
| `ex-restricted-sets-in-a-union-of-two-cliques` | `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` | gpt-5.6-terra | `0e9a5732fc3fef94c4d1edabfd5674db8a91ba2fa697d33e31f55ef184d493af` |
| `cex-primality-is-not-inherited-by-induced-subgraphs` | `modules-substitution-and-prime-graphs-examples` | deepseek-v4-pro | `1673fc48506fcda080c2f69ef2a89c090bf24502bba5b9ec688a05f0a585be25` |
| `ex-restricted-sets-in-a-complete-bipartite-graph` | `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` | gpt-5.6-terra | `f62079749eefe13eb6031b9f2234bdb050eb62f6c3fdb3ddca4ed4600a816cb5` |
| `cex-a-complete-graph-has-no-large-sparse-set` | `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` | gpt-5.6-terra | `147b043f2a084a3ec112598309ce38212373854fb2e0c9b9e47a86b059a2250f` |
| `ex-counting-induced-three-vertex-paths-by-extensions` | `modules-substitution-and-prime-graphs-examples` | deepseek-v4-pro | `62d9a8f4d608bd0510e1d535af1ceb8a0ae9d6b1e749db4af8917d0532a86f00` |
| `lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | deepseek-v4-pro | `f7be4b8c778c9f11830e134ceae45782612b91b26e44323b5ab895756655f2fd` |
| `def-directional-and-weak-sparsity-between-vertex-sets` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | deepseek-v4-pro | `e07f67de247d5eeb0b74ace81e17cd0c4bbc10c53311d7c6441c8b6e32aa337a` |
| `cor-rodl-for-a-nonempty-family-of-forbidden-graphs` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | deepseek-v4-pro | `a6f473bb6056751c48ee590a4be04476e156347e59f4628309454565efcc534d` |
| `lem-a-weakly-sparse-set-has-a-large-sparse-subset` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | deepseek-v4-pro | `21118068771ffec02682397c545ac14e52b7cdd8a6a98815a1858614ee888cd8` |
| `cor-blowing-up-a-vertex-preserves-the-erdos-hajnal-property` | `modules-substitution-and-prime-graphs` | deepseek-v4-pro | `aa32ff04f4a365b2c59ace613441b853cf6d540a883e7e33882daf1728abbde1` |
| `rem-the-diagonal-convention-in-self-density` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | deepseek-v4-pro | `52e5893bdb360d75cbd224324c03ebbda1120dfd8274fd7bfa9c695dd03fcc52` |
| `cor-rodl-every-h-free-graph-has-a-linear-restricted-set` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | deepseek-v4-pro | `76b086e832d50b69aee7484f9afd1da59f557907677444defcc93e3476c52a5d` |
| `thm-nikiforov-few-induced-copies-force-a-linear-restricted-set` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | deepseek-v4-pro | `bd1520265969da146a4703d221b9d5597977f94fa2ab1a9f4270eccbcb93d004` |
| `cor-nikiforov-applies-to-every-linearly-large-induced-subgraph` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | deepseek-v4-pro | `906fac1f01b61b0e7847148af617fbb587ffe5be9ca375ad99c182978aa463f0` |
| `ex-rodls-theorem-with-an-explicit-constant-for-p-three-free-graphs` | `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` | deepseek-v4-pro | `659c1fc6697e0a6cf76b258319edd99b0f681727e2748f3f99a49e75f7578159` |
| `ex-a-disjoint-union-of-small-cliques-is-a-sparse-vertex-set` | `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` | deepseek-v4-pro | `f28cc5aeb5346bd8f45f148217bc42e9f95385df6bb393dc12f614bb5d68a13a` |
| `ex-restricted-sets-in-a-union-of-two-cliques` | `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` | deepseek-v4-pro | `0e9a5732fc3fef94c4d1edabfd5674db8a91ba2fa697d33e31f55ef184d493af` |
| `cex-a-complete-graph-has-no-large-sparse-set` | `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` | deepseek-v4-pro | `147b043f2a084a3ec112598309ce38212373854fb2e0c9b9e47a86b059a2250f` |
| `lem-a-pattern-inside-an-extension-set-produces-the-substitution` | `modules-substitution-and-prime-graphs` | deepseek-v4-pro | `c1854e77b72461394a8724518404546b40d602c4ef9356ae1fe352aec188e68d` |
| `cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction` | `sparse-restricted-subgraphs-and-rodl-nikiforov` | deepseek-v4-pro | `314f2721c7882b4c6f8a895a8048df9bf11737eed67c23b8a014278fad834a2b` |
| `ex-restricted-sets-in-a-complete-bipartite-graph` | `sparse-restricted-subgraphs-and-rodl-nikiforov-examples` | deepseek-v4-pro | `f62079749eefe13eb6031b9f2234bdb050eb62f6c3fdb3ddca4ed4600a816cb5` |
| `def-lattice-path-and-step-set` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `0477e72e1d4e04f5cbadd479848ccc2a385a5760d2e0eeafbd25c2b5d6163f72` |
| `cor-diagonal-lattice-paths-with-a-prescribed-endpoint-are-counted-by-a-binomial-coefficient` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `50b70e776be37b6827787af0445ad0bf3f1637c2fa7e1c0756c9945a1e622ee6` |
| `def-monotone-lattice-path` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `844828f57e2d2625973068249d006d3f16e2c8e9f0c77a8a6c4f61fa798a59dc` |
| `lem-lattice-paths-are-determined-by-their-step-words` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `39090a710f69cd418eaa4f466d03f26c4dcd1939800dcdf07d2faf00fcea8c88` |
| `lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `85786fcab0dddd25e770cfe65c9d68e5f25f3f9b927c51b4eec7c7ecbb26f495` |
| `thm-ballot-problem` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `8653636e362b2f71d30024f2ab58e28460b97eeb24e047ef2cdc278cc7b97cf9` |
| `cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `74ed245ab33f71daf8d5dedd44d0c3e9be16bab8cbb21fdf1072658571cd795d` |
| `def-lattice-path-and-step-set` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `0477e72e1d4e04f5cbadd479848ccc2a385a5760d2e0eeafbd25c2b5d6163f72` |
| `def-path-system-and-non-intersecting-path-system` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `53a622eb3e8be2240ad12d851a68288da5208610b4117f1a98e27c3827fd9218` |
| `lem-a-triangulation-has-a-unique-triangle-on-the-closing-side` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `826bd3dedd969b12c960328d934f2ea511ab5293e90dd6358cb8c1cfeeb1f800` |
| `def-monotone-lattice-path` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `844828f57e2d2625973068249d006d3f16e2c8e9f0c77a8a6c4f61fa798a59dc` |
| `thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `5c0415abc43c936fe3be6685ebb1f5f2dd943289efd3f2418b95ae0b7beb1f16` |
| `cor-diagonal-lattice-paths-with-a-prescribed-endpoint-are-counted-by-a-binomial-coefficient` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `50b70e776be37b6827787af0445ad0bf3f1637c2fa7e1c0756c9945a1e622ee6` |
| `cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `f00b780e11cc3b1a179357c5f2ffb7ee3b8cd0c5d4a9c1fb9996d66b4ea76338` |
| `lem-sign-reversing-involution-on-intersecting-path-systems` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `a9c269a72415a5477d8a20eb5c7cfeabe6b77e81073d1da7602f012ac0fbb16d` |
| `def-diagonal-lattice-path-and-its-height` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `3880aea35e43cc4b7e339882871e5d9a1bfef7f8c855cefce287e84b31088561` |
| `lem-reflection-at-the-first-visit-to-a-level-is-a-bijection` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `bc9b4ea200b56b44d18746cc3fb503a2212125a6b326fd2b999780e5d46c4a9f` |
| `def-binary-tree-and-its-size` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `ca2f5e31f8d9657085d42bca515cc375b723a15eafc45e73eeb2adff175a5269` |
| `cor-weak-ballot-problem` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `7eb634e60de4c94835dd1fd33e4ab01dd3708cb8e904ede4d3fcffd889d69a80` |
| `thm-ballot-problem` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `8653636e362b2f71d30024f2ab58e28460b97eeb24e047ef2cdc278cc7b97cf9` |
| `rem-binary-trees-and-triangulations-here-are-combinatorial-objects` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `92836d15487cae4a03b9de41b2ea3234d2349584047049b70e9d30439796ffa2` |
| `thm-catalan-numbers-by-reflection` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `52eeff2ecd52280e87042c277758ccef0a07984243861a7f0186d5c9af2a0c7f` |
| `cor-catalan-closed-formula` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `f5127b1bb9c0582d8db4d0c5b76355cf2b67d755c275824183ecef9819800a7b` |
| `def-cyclic-shift-and-the-periodic-partial-sum-function` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `56d86f4bc5449d187fa98adee24a043c5fbda82e097333302655bdfc95cdc42d` |
| `fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence` | `lattice-paths-and-catalan-numbers-examples` | deepseek-v4-pro | `761678a9085dd8c2e63fbc4448dcab924f9302cb052bdc609c25a535b858127f` |
| `lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `85786fcab0dddd25e770cfe65c9d68e5f25f3f9b927c51b4eec7c7ecbb26f495` |
| `lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `a1e6c58be20e9464090a9f4305c5503f03d75485f82c8001086bbb8a7d9855ea` |
| `thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `8ef868a9ee31bef06cfa521e18c75a36470c442d2b106dea072c48731b327fe7` |
| `def-set-family-and-its-incidence-matrix` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `a485557330cd94fea911f874397d493a121b9603ed2e4d96deeec72ebe9d0e6d` |
| `ex-the-reflection-bijection-on-a-concrete-path` | `lattice-paths-and-catalan-numbers-examples` | deepseek-v4-pro | `2f4ae17835da74c769d70fe73b3f1bc5dfa16e54f33c23da980e7797813f466c` |
| `def-convex-polygon-chords-crossings-and-triangulations` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `4de5d7984e9b7abd5738bb93986a5a05eb6edb6eac8a68412bd3c9d34750b1d1` |
| `thm-lindstrom-gessel-viennot` | `lattice-paths-and-catalan-numbers` | deepseek-v4-pro | `29a390f4fe9ccc1677529bd998978fc4ab84e9f80f17ba3fbff48735d018f438` |
| `thm-oddtown` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `7223517b1fb6b27b577b5cb847498a260145fa997575647de2109be9ef413269` |
| `thm-catalan-recurrence` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `1a5ef1905e211c0ad57f34334f9440c5f23c2ea2fe1882c436ab533dc9dbdfe6` |
| `def-standard-bilinear-form-on-a-coordinate-space` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `535fb6803200f962ae8dbf877c661b52b6d7a4874a5c7253fc770120439c1590` |
| `lem-a-family-with-independent-incidence-vectors-has-at-most-n-members` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `b6a7fbd9f42124c248018e5d0175d226e8e8ed74f53a2a73933a4f31f5ee6cc7` |
| `lem-triangular-independence-criterion` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `bd18d6f5ffa39215a7c606c5414738111b553e2fab514aed84f62f92d7ab0d26` |
| `lem-determinant-independence-criterion` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `a6c2c6193524a13b0703ebd53716a64ee1dec91987f268843e725ec0d01d6f43` |
| `lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `87b503b8df11dfe7c9e38af18c3388209085676b613e3e6da55b0996e96246fb` |
| `def-balanced-bracket-word` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `31f1c8d8aee8c47daad4a953ca67535b0762ea085717811f82ccbc067a51c9c6` |
| `lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `4eee5755aa38ed5a9465f4744675289f31aa40483b1158b4158de4b8fed27b2d` |
| `lem-binary-trees-of-a-given-size-form-a-finite-set` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `ed7bb35a1a4331d83e85df4f159a91d9ed34d643d39ce99f710d91249623433d` |
| `thm-binary-trees-correspond-to-dyck-paths` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `b2e6b395800c3dd231dd93d3d2fc7be0767450dc2b23e04f9e92a9f5f54e5500` |
| `def-convex-polygon-chords-crossings-and-triangulations` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `4de5d7984e9b7abd5738bb93986a5a05eb6edb6eac8a68412bd3c9d34750b1d1` |
| `def-binary-tree-and-its-size` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `ca2f5e31f8d9657085d42bca515cc375b723a15eafc45e73eeb2adff175a5269` |
| `fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths` | `lattice-paths-and-catalan-numbers-examples` | deepseek-v4-pro | `65925c4b413173f63a5f7752ff0379a73f7d3de305c9ea42375844d421256a5f` |
| `lem-iterated-down-shifting-terminates-in-a-downward-closed-family` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `0d16bfa1d0bc0c9812cc9ee322d52628c166af90baa9300e32eb3a9cd7d4105d` |
| `thm-every-maximal-eventown-family-is-maximum` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `ca1bea2ff35b76629aa875f3cc2e3b650ef228525c3c734367337b9cb7749f21` |
| `def-path-system-and-non-intersecting-path-system` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `53a622eb3e8be2240ad12d851a68288da5208610b4117f1a98e27c3827fd9218` |
| `ex-the-fourteen-triangulations-of-a-convex-hexagon` | `lattice-paths-and-catalan-numbers-examples` | deepseek-v4-pro | `161c27c19ded1285a6d088883baf6129ff86bf800bb6eb048b574b2c4f1c2b10` |
| `lem-a-triangulation-has-a-unique-triangle-on-the-closing-side` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `826bd3dedd969b12c960328d934f2ea511ab5293e90dd6358cb8c1cfeeb1f800` |
| `cor-sauer-shelah-polynomial-bound` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `a932dff03b74d28fe8062629741afa9aa259035ce0cbc94a6b8a27cfae607a55` |
| `rem-binary-trees-and-triangulations-here-are-combinatorial-objects` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `92836d15487cae4a03b9de41b2ea3234d2349584047049b70e9d30439796ffa2` |
| `lem-sign-reversing-involution-on-intersecting-path-systems` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `a9c269a72415a5477d8a20eb5c7cfeabe6b77e81073d1da7602f012ac0fbb16d` |
| `thm-lindstrom-gessel-viennot` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `29a390f4fe9ccc1677529bd998978fc4ab84e9f80f17ba3fbff48735d018f438` |
| `cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `f00b780e11cc3b1a179357c5f2ffb7ee3b8cd0c5d4a9c1fb9996d66b4ea76338` |
| `ex-monotone-lattice-paths-from-the-origin-to-three-two` | `lattice-paths-and-catalan-numbers-examples` | gpt-5.6-terra | `74cd4d9ff2ced6a50628ff62a701ee1c0925b75515af361213c44d173fdd44c8` |
| `thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees` | `lattice-paths-and-catalan-numbers` | gpt-5.6-terra | `8ef868a9ee31bef06cfa521e18c75a36470c442d2b106dea072c48731b327fe7` |
| `ex-the-five-dyck-paths-of-semilength-three` | `lattice-paths-and-catalan-numbers-examples` | gpt-5.6-terra | `90ab026530e8e35ec31ca34660928e8f830b7fb3dc50233b8ce437fd77cd355d` |
| `cex-a-step-set-for-which-the-reflection-argument-fails` | `lattice-paths-and-catalan-numbers-examples` | deepseek-v4-pro | `bfebf6af785172f628afc291bcdbb0c67d57884abcdb46e7ed4b7f7151110516` |
| `ex-the-reflection-bijection-on-a-concrete-path` | `lattice-paths-and-catalan-numbers-examples` | gpt-5.6-terra | `2f4ae17835da74c769d70fe73b3f1bc5dfa16e54f33c23da980e7797813f466c` |
| `lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `9d4b91bf229fe44109e18da90d56d9723a8d4fb962d58f518f5fda1f3bc1a074` |
| `ex-the-ballot-problem-with-three-and-two-votes` | `lattice-paths-and-catalan-numbers-examples` | gpt-5.6-terra | `6dd19c4433db1d45c49cd83da1eaa1a95032ccd421750476cb2d915cc9f7feb7` |
| `ex-the-three-catalan-families-matched-at-semilength-three` | `lattice-paths-and-catalan-numbers-examples` | gpt-5.6-terra | `20f4987d4c18cb2c70a9cde40812dc91671a62e9af5ed57342a41b45114d8146` |
| `ex-the-cycle-lemma-on-a-word-of-length-seven` | `lattice-paths-and-catalan-numbers-examples` | gpt-5.6-terra | `0d887f13adff2114ba89fc31b72071205e21ec98b4d7406a0b64421dfcc8a8cf` |
| `lem-diagonal-independence-criterion` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `c9a5361ea9de3ec2d83e51508b3e8515b48ea41f89f602eaf2af86bb0ddfcffc` |
| `ex-the-fourteen-triangulations-of-a-convex-hexagon` | `lattice-paths-and-catalan-numbers-examples` | gpt-5.6-terra | `161c27c19ded1285a6d088883baf6129ff86bf800bb6eb048b574b2c4f1c2b10` |
| `ex-catalan-numbers-to-six-computed-two-ways` | `lattice-paths-and-catalan-numbers-examples` | gpt-5.6-terra | `2a4b793f34cb69d7eb77ada6b31eeff59eb6312f630e7352da78dde7027fc524` |
| `ex-the-first-coefficients-of-the-catalan-generating-function` | `lattice-paths-and-catalan-numbers-examples` | gpt-5.6-terra | `47b88deac1da59ccf6eae6945996d62f2be9fa6f2f813ee31f874c4f88c997f1` |
| `rem-the-field-is-a-hypothesis-of-every-bound-on-this-page` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `13878db78a670d297a3bfd08b7ae2dad5e579bc3916079448b769a4b733168e0` |
| `thm-sauer-shelah-by-multilinear-polynomials` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `7b874a615b1a8a8ce164083878b61692795964260da31b80b3108b0df88959ab` |
| `fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence` | `lattice-paths-and-catalan-numbers-examples` | gpt-5.6-terra | `761678a9085dd8c2e63fbc4448dcab924f9302cb052bdc609c25a535b858127f` |
| `ex-the-nonuniform-fisher-bound-on-the-seven-lines-of-the-fano-plane` | `linear-algebra-methods-in-combinatorics-examples` | deepseek-v4-pro | `abdd0ca18f09059fc9c4066a7a4fc110e9ef047177462876b29da57239da11e2` |
| `cex-a-step-set-for-which-the-reflection-argument-fails` | `lattice-paths-and-catalan-numbers-examples` | gpt-5.6-terra | `bfebf6af785172f628afc291bcdbb0c67d57884abcdb46e7ed4b7f7151110516` |
| `def-standard-bilinear-form-on-a-coordinate-space` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `535fb6803200f962ae8dbf877c661b52b6d7a4874a5c7253fc770120439c1590` |
| `thm-cauchy-davenport` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `6cdb36ef2a0c973cfa5142b9e2f2e2f5e84ddaf243fd7cb2a293a20973bcde30` |
| `def-multilinear-polynomial-and-multilinear-reduction` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `da0c9e5d22f135faa0c854b8a565ade15c9a265710ddb40d4e64f08bff70d845` |
| `ex-the-nonuniform-intersection-bound-on-the-pairs-in-four-points` | `linear-algebra-methods-in-combinatorics-examples` | deepseek-v4-pro | `929b1e636d792c096de95f520830cb26e37726c66a3ae6bff92caa81a7ee8914` |
| `lem-an-unshattered-set-reduces-a-monomial-on-a-family` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `6587bd51767a789ca81652feb8914c04f387712486b3fc9e59c79ad178f81ad5` |
| `thm-alon-furedi-hyperplane-cover-of-the-cube` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `8159040af036064475b2bee275a849d69f31f11d8b63b3c101cae5fb83acab85` |
| `def-set-family-and-its-incidence-matrix` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `a485557330cd94fea911f874397d493a121b9603ed2e4d96deeec72ebe9d0e6d` |
| `lem-diagonal-independence-criterion` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `c9a5361ea9de3ec2d83e51508b3e8515b48ea41f89f602eaf2af86bb0ddfcffc` |
| `lem-triangular-independence-criterion` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `bd18d6f5ffa39215a7c606c5414738111b553e2fab514aed84f62f92d7ab0d26` |
| `lem-determinant-independence-criterion` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `a6c2c6193524a13b0703ebd53716a64ee1dec91987f268843e725ec0d01d6f43` |
| `cex-incidence-vectors-dependent-over-the-two-element-field-and-independent-over-the-reals` | `linear-algebra-methods-in-combinatorics-examples` | deepseek-v4-pro | `9bc570a831c3ab34ebb404beed946436b794907ec9b101883ee10e21b94b000d` |
| `thm-frankl-wilson-nonuniform-bound` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `927d495b630e03df50b0066dbfd5ae7da6fb9f5fabff4b632bdbbdec2a37cb2b` |
| `cor-the-oddtown-bound-is-attained` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `b316470c185acd81885eb31ef42202ddf834b7d7b26981b3ce641c928935e3bb` |
| `fs-fisher-inequality-holds-over-the-two-element-field` | `linear-algebra-methods-in-combinatorics-examples` | deepseek-v4-pro | `322b0e0db68029f7e2e0f21a3770f8f26a50a7cef76da992fdb9b33b58c0705b` |
| `lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `8056b7fba50b1b4f3f0cafe4d671b764585a0939d82e7b0270ec5fa6f2b0eb53` |
| `lem-grid-reduction-of-a-multivariate-polynomial` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `2373e7f47b83e1165ea65357f1b47d50b1c06d24e277702c5da05aa6c8c7dc7f` |
| `ex-the-cycle-lemma-on-a-word-of-length-seven` | `lattice-paths-and-catalan-numbers-examples` | deepseek-v4-pro | `0d887f13adff2114ba89fc31b72071205e21ec98b4d7406a0b64421dfcc8a8cf` |
| `lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `fb309b4ad44cce1de8b58c0eb8a22cd717342220d0625b473954ec48b77bf889` |
| `thm-eventown` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `c8fbef7184babdd071219f96b6445252e93832804b3403251cb7885b792f7446` |
| `lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `4eee5755aa38ed5a9465f4744675289f31aa40483b1158b4158de4b8fed27b2d` |
| `lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `87b503b8df11dfe7c9e38af18c3388209085676b613e3e6da55b0996e96246fb` |
| `ex-an-eventown-family-of-maximum-size` | `linear-algebra-methods-in-combinatorics-examples` | deepseek-v4-pro | `472e1d1cdb6b510ef10141de30f7adf877be6259fbe881dbf7f4232c2b109993` |
| `thm-every-maximal-eventown-family-is-maximum` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `ca1bea2ff35b76629aa875f3cc2e3b650ef228525c3c734367337b9cb7749f21` |
| `thm-nonuniform-fisher-inequality` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `a912fd0c236b8cb7d21b3a33b8684278ffec9d4c2da2e56e0ee42050dd7e3e1b` |
| `def-down-shift-of-a-set-family` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `5e67f32299a77e84838ea80883b8a6167869c43945be1ebf208117026733c47f` |
| `lem-the-down-shift-preserves-the-number-of-sets` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `b1e35792d6f044853bf6f96b56a3eba1bdd442fc63ff6aca0d1339ed9e66edc7` |
| `lem-iterated-down-shifting-terminates-in-a-downward-closed-family` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `0d16bfa1d0bc0c9812cc9ee322d52628c166af90baa9300e32eb3a9cd7d4105d` |
| `thm-graham-pollak` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `91def1e207d0215aacd898446c71f3430071b65ba53526b6c6bd9bcacaec945d` |
| `thm-sauer-shelah` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `e1e5d8a7ed92bcfc4cce97ade185068e0c03a43adadc1d461e3ed566b9435410` |
| `cor-sauer-shelah-polynomial-bound` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `a932dff03b74d28fe8062629741afa9aa259035ce0cbc94a6b8a27cfae607a55` |
| `lem-the-down-shift-creates-no-new-shattered-set` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `c8c76a905a18ec772bbe14e8599ec7db4a114cd47b414749e8d0e0df955d9748` |
| `def-inclusion-matrix` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `5fb349f3b1d295bc47f6cc320a44cdf2dcde709fcbcf42a7e337f114d5458473` |
| `cex-cauchy-davenport-fails-for-a-composite-modulus` | `linear-algebra-methods-in-combinatorics-examples` | deepseek-v4-pro | `b2c37c30d404cab82577bdf8e874cd02e64045279d4ad8f54e7167781a7ca0bf` |
| `thm-polynomial-identity-lemma` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `7cf57eca5be016253835f1d2f344ed1a966ed85aa57ff5552396ae5c24372924` |
| `thm-rank-of-the-point-inclusion-matrix` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `6f3504d619414edc8cc76177c6e4cbaa31616e5df96a5d62ac30e649ef9d595c` |
| `lem-grid-reduction-of-a-multivariate-polynomial` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `2373e7f47b83e1165ea65357f1b47d50b1c06d24e277702c5da05aa6c8c7dc7f` |
| `lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `9d4b91bf229fe44109e18da90d56d9723a8d4fb962d58f518f5fda1f3bc1a074` |
| `thm-alon-furedi-hyperplane-cover-of-the-cube` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `8159040af036064475b2bee275a849d69f31f11d8b63b3c101cae5fb83acab85` |
| `thm-cauchy-davenport` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `6cdb36ef2a0c973cfa5142b9e2f2e2f5e84ddaf243fd7cb2a293a20973bcde30` |
| `def-multilinear-polynomial-and-multilinear-reduction` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `da0c9e5d22f135faa0c854b8a565ade15c9a265710ddb40d4e64f08bff70d845` |
| `lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `fb309b4ad44cce1de8b58c0eb8a22cd717342220d0625b473954ec48b77bf889` |
| `lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `35d8b077c2cdef509e67a930a31ae1646f977bcf614833f607f267d9dd1e3a9c` |
| `def-l-intersecting-family` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `f8bb2ce445213d31341bc4a9957e3acd801fd5d7e63665838c1a30b87703aa42` |
| `thm-frankl-wilson-nonuniform-bound` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `927d495b630e03df50b0066dbfd5ae7da6fb9f5fabff4b632bdbbdec2a37cb2b` |
| `lem-an-unshattered-set-reduces-a-monomial-on-a-family` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `6587bd51767a789ca81652feb8914c04f387712486b3fc9e59c79ad178f81ad5` |
| `thm-sauer-shelah-by-multilinear-polynomials` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `7b874a615b1a8a8ce164083878b61692795964260da31b80b3108b0df88959ab` |
| `rem-the-field-is-a-hypothesis-of-every-bound-on-this-page` | `linear-algebra-methods-in-combinatorics` | gpt-5.6-terra | `13878db78a670d297a3bfd08b7ae2dad5e579bc3916079448b769a4b733168e0` |
| `ex-an-eventown-family-of-maximum-size` | `linear-algebra-methods-in-combinatorics-examples` | gpt-5.6-terra | `472e1d1cdb6b510ef10141de30f7adf877be6259fbe881dbf7f4232c2b109993` |
| `ex-the-nonuniform-fisher-bound-on-the-seven-lines-of-the-fano-plane` | `linear-algebra-methods-in-combinatorics-examples` | gpt-5.6-terra | `abdd0ca18f09059fc9c4066a7a4fc110e9ef047177462876b29da57239da11e2` |
| `ex-a-family-of-vc-dimension-two-attaining-the-sauer-shelah-bound` | `linear-algebra-methods-in-combinatorics-examples` | gpt-5.6-terra | `787bbded91644c3cfdc30ef445a3899bbdeda677f8b930317b8d4e6ba3b09707` |
| `ex-the-inclusion-matrix-of-points-against-pairs-on-four-points` | `linear-algebra-methods-in-combinatorics-examples` | gpt-5.6-terra | `f4db8653913699c54585bc54095c6be228e46df0195de54816253e8220960f88` |
| `ex-cauchy-davenport-in-the-integers-modulo-seven` | `linear-algebra-methods-in-combinatorics-examples` | gpt-5.6-terra | `f19e45efc9c5c409e26ed65915acd4f68a6fb2967a7e1cb6cee802f8e63178cb` |
| `ex-the-combinatorial-nullstellensatz-on-a-two-variable-polynomial` | `linear-algebra-methods-in-combinatorics-examples` | gpt-5.6-terra | `723594c758f0891b077f42b6147380ed34ba7432bd9e113cdb8e65781e14859d` |
| `thm-sauer-shelah` | `linear-algebra-methods-in-combinatorics` | deepseek-v4-pro | `e1e5d8a7ed92bcfc4cce97ade185068e0c03a43adadc1d461e3ed566b9435410` |
| `ex-the-nonuniform-intersection-bound-on-the-pairs-in-four-points` | `linear-algebra-methods-in-combinatorics-examples` | gpt-5.6-terra | `929b1e636d792c096de95f520830cb26e37726c66a3ae6bff92caa81a7ee8914` |
| `fs-fisher-inequality-holds-over-the-two-element-field` | `linear-algebra-methods-in-combinatorics-examples` | gpt-5.6-terra | `322b0e0db68029f7e2e0f21a3770f8f26a50a7cef76da992fdb9b33b58c0705b` |
| `fs-the-standard-bilinear-form-on-the-two-element-field-is-an-inner-product` | `linear-algebra-methods-in-combinatorics-examples` | gpt-5.6-terra | `be6f0c9e7322d41a21eca8043efcc3d7911bf27f73c255c29c8383a448355b04` |
| `cex-incidence-vectors-dependent-over-the-two-element-field-and-independent-over-the-reals` | `linear-algebra-methods-in-combinatorics-examples` | gpt-5.6-terra | `9bc570a831c3ab34ebb404beed946436b794907ec9b101883ee10e21b94b000d` |
| `cex-a-nonzero-polynomial-vanishing-on-a-grid-of-exactly-its-degree` | `linear-algebra-methods-in-combinatorics-examples` | gpt-5.6-terra | `7a8a5059aef1beea8e7e8e3b7ed9380ae8454f27561fc6dc62d701257906067c` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step-7 pre-read — build your group's context before the verdicts exist

You are a **group Alpha for run `frontier-18`**, and this is the reading pass that
happens *while* the paired judges are still sweeping. Your group is named in the
context above, along with every page and item you own.

## You are READ-ONLY, and that is a kernel guarantee

Your sandbox refuses every write. This is not a request you could comply with
badly: step 7 judges a frozen text, and an edit landing during the sweep would
void verdicts already cast against the old bytes and silently produce a level
judged in two states at once. You cannot cause that here.

So: **do not attempt to repair anything.** If you find a defect — and you may —
record it in `concerns` and stop there. Step 8 is where you act on it, under the
fatal-only rule, after a verdict exists.

## Why this pass exists

Step 8 partitions the judges' rejections across the group Alphas, and each
step-8 Alpha is a **fresh dispatch** carrying nothing from earlier stages. Fresh
is deliberate — a reader who already decided a proof was fine is the worst-placed
reader of an objection to it — but it means the adjudicator meets 200 items and a
list of rejections in the same context window, and reads the mathematics through
the objections.

This pass separates those two readings. You read the mathematics **now**, before
any verdict exists, and your notes become the first thing your step-8 self reads.
Its judgement is then made against your own unprompted account of what the pages
say, not against the judges' framing of it.

Your `concerns` list is the sharpest part. A concern you record here was found
with nobody suggesting where to look; if a judge later objects at the same place,
that is two independent readings agreeing, and it is much stronger evidence than
your agreeing with a rejection you were shown.

## What to do

1. **Open every A page and its `-examples` companion**, and the item files under
   `items/` for each. The inventory above lists them; it is an inventory, not the
   mathematics.
2. **Open every published dependency your pages actually cite.** You may read the
   entire library — `items/` holds every published item and every item this run
   has built. Record a dependency only if you opened it; `opened: false` is an
   honest answer and a fabricated `true` is worse than either.
3. **Write down the conventions your pages fix** — the orientation sign, the
   boundary regularity, whether a measure is complete, where an index starts,
   which direction an iff is stated in. These are what a rejection usually turns
   on, and they are the thing a reader arriving cold does not have.
4. **Check each cross-group edge** your context names, in both directions. If it
   names none, `seams_checked` is empty and that is the expected answer.
5. **Record what already looks thin**, honestly graded. `would-be-fatal` means the
   claim as written looks false or unsupported — not that you would phrase it
   differently. `gap-a-reader-closes` is the 30-second class. Never manufacture an
   entry to look thorough; an empty list from a careful reading is a result.

## What this pass is not

It is not an audit, and it does not replace one. Step 6 already ran independent
readers, refuters and adjudication over this text. You are not re-running that
and you are not being asked for a verdict on anything. You are building the
context your step-8 self will otherwise have to build under time pressure with
the judges talking over you.

Do not summarise the pages for a reader who has not seen them. Write for
yourself, six hours from now, holding a list of rejections.

**No permission prompts of any kind**, including inside an `&&` chain.
