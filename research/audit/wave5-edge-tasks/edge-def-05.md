# Citation-precision audit — do these citing items state their target correctly?

You are reading a **published legacy corpus** of this library. Below are one or
more TARGET items, each quoted as it actually stands on disk, followed by every
place in this audit wave that cites it.

**The one question for every citing line:** does the citing text state the
target's own proposition — same domain, same quantifiers, same hypotheses, same
direction, same strength — or does it state something the target does not
actually give? A fact that quietly drops a hypothesis, flips an implication,
promotes an implication to a biconditional, or widens a domain is a **FATAL**
defect of the incorrect-dependency-citation class. It is this library's single
most common confirmed defect, and it is only visible by reading the two texts
against each other, which is what this file lets you do.

Do NOT report: a concise but faithful shortening (that is the required house
style); a paraphrase that preserves content; wording you would have chosen
differently; missing URLs; prose style. A citing line reading as a shortened
but faithful version of the target is CORRECT and must not be flagged.

Where a citing line says a dependency is declared but never cited in the body,
say whether that looks like a stale declaration or a use that lost its citation
— that one is NONFATAL either way.

For every finding use the block format from the brief, and finish with the
`N fatal, M nonfatal` line. If every citation is faithful, say so plainly and
name the targets you checked.

---

# Citation-precision audit — everything that cites `def-real-limit`

## The target, as it actually stands on disk

`items/def-real-limit.md` — definition — Limits and Cauchy sequences of reals

#### Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## The 20 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L7] Squeeze theorem ([[thm-squeeze]]) and the algebra of limits ([[thm-algebra-of-limits]]); a constant sequence converges to its value ([[def-sequence]], [[def-real-limit]]).

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- [[def-real-limit]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L7] Divergence to $+\infty$ ([[def-divergence-to-infinity]]); a convergent sequence is bounded ([[lem-convergent-implies-bounded]]); convergence ([[def-real-limit]]).

### `cex-unbounded-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence

- [L4] Boundedness of a sequence and of a subset of $\mathbb{R}$ ([[def-sequence]], [[def-bounded-set]]); a constant sequence converges to its value ([[def-real-limit]]); and every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

### `def-subsequential-limit` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Subsequential limit of a real sequence, and the subsequential limit set

- in the sense of [[def-real-limit]]. The **subsequential limit set** of $(x_k)$ is
- *converges* is [[def-real-limit]]. Nothing about $(x_k)$ itself is assumed; in

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L7] Monotone convergence: a nonincreasing sequence whose range is bounded below converges, to the infimum of its range ([[thm-monotone-convergence]], [[def-real-limit]]).

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L6] Every contractive sequence is Cauchy and converges, with the stated error bound for $k \ge 1$ ([[thm-contractive-implies-cauchy]], [[def-real-limit]]).

### `ex-nested-intervals-single-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$

- [L7] Convergence of a sequence of reals to $0$; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- [L7] Monotone convergence: a nondecreasing sequence whose range is bounded above converges, to the supremum of its range ([[thm-monotone-convergence]], [[def-real-limit]]).

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L7] Convergence and boundedness of a sequence of reals; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [[def-real-limit]]), then $(x_k)$ is Cauchy.
- [L9] Convergence to $0$, boundedness, and the Cauchy condition; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

### `fs-convergent-subsequence-implies-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a sequence with a convergent subsequence is bounded (the converse of Bolzano-Weierstrass)

- [L5] A constant sequence converges to its value, and a sequence is bounded when some real $M$ satisfies $|y_n| \le M$ at every index ([[def-sequence]], [[def-real-limit]]).

### `lem-cauchy-sequence-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every Cauchy sequence of reals is bounded

- ([[def-real-limit]]) then there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
- [A1] Cauchy condition: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$ ([[def-real-limit]]).

### `lem-cauchy-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit

- Let $(x_k)$ be a Cauchy sequence of reals ([[def-real-limit]]) and suppose some
- [A1] Cauchy condition: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$ ([[def-real-limit]]).
- [A2] Convergence of the subsequence: for every rational $\varepsilon > 0$ there is $J$ with $|x_{n_j} - L| < \varepsilon$ for all $j \ge J$ ([[def-real-limit]], [[def-subsequential-limit]], [[def-sequence]]).
- [L5] Convergence: $(x_k)$ converges to $L$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - L| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- ([[def-real-limit]]).
- [L11] Convergence to $0$ and divergence to $+\infty$ for a sequence of reals; a rational test value $\varepsilon > 0$ is in particular a real one ([[def-real-limit]], [[def-divergence-to-infinity]], [[def-sequence]]).

### `thm-cauchy-criterion-via-lub` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The Cauchy criterion from the least-upper-bound property: in a complete ordered field every Cauchy sequence converges

- Every Cauchy sequence of reals converges to a real ([[def-real-limit]]).
- [L4] Convergence of a sequence of reals to a real ([[def-real-limit]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- 2. **Convergence.** $(x_k)$ is Cauchy ([[def-real-limit]]) and therefore
- [L12] Cauchy condition and convergence; it suffices to test a real $\varepsilon > 0$, since every positive rational is a positive real ([[def-real-limit]], [[def-sequence]]).

### `thm-dini` (published-backward, page function-space-topologies)

Title: Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly

- $x \in X$ ([[def-real-limit]]) with the limit function $f : X \to \mathbb{R}$

### `thm-monotone-convergence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

- above ([[def-bounded-set]]), then $(x_k)$ converges ([[def-real-limit]]) and
- [L6] Convergence, tested against a real $\varepsilon$: $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and producing such a $K$ for every *real* $\varepsilon > 0$ establishes this, since every positive rational is a positive real ([[def-real-limit]], [[def-sequence]]).

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- if $\ell_k \to 0$ ([[def-real-limit]]).


---

# Citation-precision audit — everything that cites `def-topology-basis-subbasis`

## The target, as it actually stands on disk

`items/def-topology-basis-subbasis.md` — definition — Basis and subbasis for a topology, and the topology generated by a family of sets

#### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

A family $\mathcal{B} \subseteq \mathcal{T}$ is a **basis for $\mathcal{T}$** if
every open set is a union of members of $\mathcal{B}$: for every
$U \in \mathcal{T}$ there is $\mathcal{B}_U \subseteq \mathcal{B}$ with
$U = \bigcup \mathcal{B}_U$. Equivalently, and this is the form used in proofs,

$$\text{for every } U \in \mathcal{T} \text{ and every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U .$$

*The two forms say the same thing.* If every open $U$ is such a union and
$x \in U$, then $x$ lies in one of the sets united, which is a member of
$\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then
$U = \bigcup \{\, B \in \mathcal{B} : B \subseteq U \,\}$, since each such $B$ is
contained in $U$ and each $x \in U$ lies in one of them. Note that
$\bigcup \varnothing = \varnothing$, so the empty open set is covered by the empty
subfamily and needs no member of $\mathcal{B}$. The members of a basis are called
**basic open sets**.

**The topology generated by a family.** Let $\mathcal{S} \subseteq \mathcal{P}(X)$
be *any* family of subsets of $X$. Then

$$\langle \mathcal{S} \rangle := \bigcap \{\, \mathcal{T}' : \mathcal{T}' \text{ is a topology on } X \text{ with } \mathcal{S} \subseteq \mathcal{T}' \,\}$$

is a topology on $X$, it contains $\mathcal{S}$, and it is contained in every
topology on $X$ that contains $\mathcal{S}$. It is called the **topology
generated by $\mathcal{S}$**, and $\mathcal{S}$ is a **subbasis** for a topology
$\mathcal{T}$ when $\mathcal{T} = \langle \mathcal{S} \rangle$.

*This is well posed, and the obligation is discharged here.* The collection being
intersected is nonempty, because $\mathcal{P}(X)$ is a topology on $X$ containing
$\mathcal{S}$; so the intersection is an intersection of a nonempty family of
subsets of $\mathcal{P}(X)$ and is a set. It is a topology: $\varnothing$ and $X$
lie in every topology on $X$, hence in the intersection, which is (T1); if
$\mathcal{S}' \subseteq \langle \mathcal{S} \rangle$ then $\mathcal{S}'$ is a
subfamily of each $\mathcal{T}'$ in the collection, so $\bigcup \mathcal{S}'$ lies
in each $\mathcal{T}'$ and hence in the intersection, which is (T2); and the same
argument with $U \cap V$ gives (T3). It contains $\mathcal{S}$ because every
$\mathcal{T}'$ in the collection does, and it is contained in each such
$\mathcal{T}'$ because an intersection is contained in each of its members. So
$\langle \mathcal{S} \rangle$ is the coarsest topology on $X$ containing
$\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely
determined by $\mathcal{S}$.

**Neither notion is intrinsic to the family alone.** "$\mathcal{B}$ is a basis
for $\mathcal{T}$" and "$\mathcal{S}$ is a subbasis for $\mathcal{T}$" are
relations between a family and a topology, not properties of the family. The
question of which families are a basis *for some* topology, and how the topology
generated by a subbasis is computed from it, is settled by the next item.

## The 19 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [A1] The basic open sets of an ordinal $\gamma$ are $[0,\beta]$ for $\beta \in \gamma$ and $(\alpha,\beta]$ for $\alpha < \beta$ in $\gamma$, and they form a basis ([[def-order-topology-on-an-ordinal]], [[def-topology-basis-subbasis]]).
- [A2] For a binary product the basic product-open sets are exactly the boxes $P \times Q$ with $P$ and $Q$ open, and the boxes $P_0 \times Q_0$ with $P_0$, $Q_0$ basic in the factors also form a basis: given $(x,y) \in P \times Q$, basic $P_0 \ni x$ inside $P$ and $Q_0 \ni y$ inside $Q$ give $(x,y) \in P_0 \times Q_0 \subseteq P \times Q$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

### `def-compact-open-topology` (published-backward, page function-space-topologies)

Title: The compact-open topology on $C(X,Y)$ for a metric domain $X$, with subbasis $S(K,V) = \\{f : f[K] \\subseteq V\\}$

- as a subbasis ([[def-topology-basis-subbasis]]). By [[thm-basis-criterion]] the
- ([[def-topology-basis-subbasis]]).

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]), and that topology is

### `def-second-countable-space` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Second countability: an at most countable basis for the topology

- A topological space $X$ is **second countable** when its topology has a basis $\mathcal B$ that is at most countable ([[def-topology-basis-subbasis]], [[def-countable]]). Thus every open set is a union of members of one at most countable family $\mathcal B$.

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- ([[def-topology-basis-subbasis]]).

### `def-topology-of-pointwise-convergence` (published-backward, page function-space-topologies)

Title: The topology of pointwise convergence on $Y^{X}$, which is the product topology, and its restriction to $C(X,Y)$

- form a basis for it ([[def-topology-basis-subbasis]]), so the basic open sets are

### `def-weight-density-and-character` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, weight $w(X)$, density $d(X)$, local character $\\chi(x,X)$, and character $\\chi(X)$ as raw cardinal minima and a supremum

- Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $X$ be a topological space. The **weight** $w(X)$ is the least cardinality of a basis for $X$, and the **density** $d(X)$ is the least cardinality of a dense subset of $X$ ([[def-topology-basis-subbasis]], [[def-dense-top]], [[def-cardinal]]).

### `ex-sequential-fan-is-frechet-urysohn-not-first-countable` (published-backward, page nets-and-filters-examples)

Title: The sequential fan is Fréchet–Urysohn and not first countable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L4] The subbasic sets of the compact-open topology are $S(K,V) = \{\, f : f[K] \subseteq V \,\}$ for compact $K$ and open $V$, and those of the topology of pointwise convergence on $Y^{X}$ are $\pi_x^{-1}[V] = \{\, f : f(x) \in V \,\}$; finite intersections of subbasic sets form a basis in both cases, and a topology generated by a family is contained in every topology containing that family ([[def-compact-open-topology]], [[def-topology-of-pointwise-convergence]], [[def-product-topology]], [[def-topology-basis-subbasis]], [[thm-basis-criterion]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L7] Continuity of a map at a point, in the open-set form, and the fact that the boxes $O \times U$ with $O$ open in $C(\mathbb{Q},\mathbb{R})$ and $U$ open in $\mathbb{Q}$ form a basis for the product topology, while the finite intersections of the sets $S(K,W)$ form a basis for the compact-open topology ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-product-topology]], [[def-compact-open-topology]], [[def-topology-basis-subbasis]], [[thm-basis-criterion]], [[def-topological-space]]).

### `lem-convergence-in-the-pointwise-topology` (published-backward, page function-space-topologies)

Title: A sequence converges in the topology of pointwise convergence exactly when it converges at every point

- [L4] If $\mathcal{B}$ is a basis for a topology and $N$ is a neighbourhood of $g$, then there is $B \in \mathcal{B}$ with $g \in B \subseteq N$ ([[def-neighbourhood-top]], [[def-topology-basis-subbasis]]).

### `lem-ordinal-order-topology-is-t3` (published-backward, page separation-axioms)

Title: Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular

- [A1] $[0,\beta] = \{\, \zeta \in \gamma : \zeta \le \beta \,\}$ and $(\alpha,\beta] = \{\, \zeta \in \gamma : \alpha < \zeta \le \beta \,\}$, and $\mathcal{B}_\gamma$ is a basis for the order topology ([[def-order-topology-on-an-ordinal]], [[def-topology-basis-subbasis]]).
- [L2] A set is open exactly when each of its points lies in a basic set inside it; a set is closed exactly when its complement is open; a union of open sets is open ([[def-topology-basis-subbasis]], [[def-topological-space]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- [L1] A family satisfying (B1) and (B2) is a basis for exactly one topology, namely the family of sets each of whose points lies in a member inside the set ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

### `lem-tube-lemma-for-a-compact-metric-factor` (published-backward, page function-space-topologies)

Title: Tube lemma: if $K$ is a compact subset of a metric space $X$, $Z$ is a topological space and $N$ is open in $X \\times Z$ with $K \\times \\{z_0\\} \\subseteq N$, then $K \\times W \\subseteq N$ for some open $W \\ni z_0$

- [L1] For a two-element index set the basic product-open sets are exactly the boxes: the sets $U \times W$ with $U$ open in $X$ and $W$ open in $Z$ form a basis for the product topology on $X \times Z$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L1] The sets $S(K,V)$, for $K \subseteq X$ compact and $V \subseteq Y$ open, are a subbasis for $\mathcal{T}_{\mathrm{co}}$; $S(\varnothing,V) = S(K,Y) = C(X,Y)$; and finite intersections of subbasic sets are open ([[def-compact-open-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).
- [L3] A topology generated by a family $\mathcal{S}$ is contained in every topology containing $\mathcal{S}$, and a set all of whose points lie in a basic set inside it is a union of basic sets, hence open ([[def-topology-basis-subbasis]], [[thm-basis-criterion]]).

### `thm-comparison-of-the-three-function-space-topologies` (published-backward, page function-space-topologies)

Title: On $C(X,Y)$ with $X$ and $Y$ metric, uniform convergence is finer than compact convergence, which is finer than pointwise convergence

- [L1] $\mathcal{T}_{\mathrm{pt}}$ is generated by the sets $T(x,V) := \{\, g \in C(X,Y) : g(x) \in V \,\}$ for $x \in X$ and $V \subseteq Y$ open, these being the traces on $C(X,Y)$ of the subbasic sets of the product topology ([[def-topology-of-pointwise-convergence]], [[def-subspace-topology-top]], [[def-topology-basis-subbasis]]).
- [L4] A topology generated by a family is contained in every topology containing that family, and a set all of whose points lie in a member of a basis inside it is open ([[def-topology-basis-subbasis]], [[thm-basis-criterion]]).

### `thm-evaluation-is-continuous-on-a-locally-compact-metric-domain` (published-backward, page function-space-topologies)

Title: If $X$ is a locally compact metric space then the evaluation map is continuous for the compact-open topology

- [L2] For a two-element index set the basic product-open sets are the boxes: $O \times U$ with $O$ open in $C(X,Y)$ and $U$ open in $X$ is open in $C(X,Y) \times X$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

### `thm-exponential-correspondence-is-continuous` (published-backward, page function-space-topologies)

Title: If $f : X \\times Z \\to Y$ is continuous then its transpose $F : Z \\to C(X,Y)$, $F(z)(x) = f(x,z)$, is continuous for the compact-open topology, with no hypothesis on $X$ beyond being metric

- [L5] Continuity may be checked on a subbasis: $h$ is continuous exactly when $h^{-1}[S]$ is open for every member $S$ of a subbasis of the target ([[thm-continuity-characterisations-top]], clause (d), [[def-topology-basis-subbasis]], [[thm-basis-criterion]]).

### `thm-rational-points-and-boxes-in-rn` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{Q}^n$ is a countable dense subset of $\\mathbb{R}^n$, and rational open boxes form a countable basis

- [L4] A family is a basis when each point of each open set lies in one of its members contained in that open set ([[def-topology-basis-subbasis]]).


---

# Citation-precision audit — everything that cites `def-subspace-topology-top`

## The target, as it actually stands on disk

`items/def-subspace-topology-top.md` — definition — Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace

#### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

## The 19 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- ([[def-subspace-topology-top]]) is normal ([[def-normal-and-t4-spaces]]).
- [A3] The open sets of $T$ are the traces $U' \cap T$ of the open sets of $W \times Z$, the closed sets of $T$ are the traces of the closed sets, and the traces of a basis form a basis ([[def-subspace-topology-top]], [[thm-subspace-closure-and-interior]]).

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- [L4] A function whose restrictions to the members of a finite closed cover are continuous is continuous ([[lem-continuity-is-local-and-pastes]], claim 3, [[def-subspace-topology-top]], [[def-continuous-map-top]]).

### `def-completely-regular-and-tychonoff-spaces` (published-backward, page separation-axioms)

Title: Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces

- $\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],

### `def-euclidean-spheres-and-closed-balls` (published-backward, page the-topology-of-euclidean-space)

Title: Euclidean spheres and closed balls as subspaces of $\\mathbb{R}^n$

- These are respectively the **Euclidean closed ball** and **Euclidean sphere** with centre $c$ and radius $r$. They carry the subspace topology inherited from $\mathbb{R}^n$ ([[def-subspace-topology-top]]). Since $d_2(c,x)=\lVert x-c\rVert_2$, they are precisely the closed ball and sphere $\bar B(c,r)$ and $S(c,r)$ of the metric-space definition ([[def-metric-ball]]).

### `def-evaluation-map` (published-backward, page function-space-topologies)

Title: The evaluation map $e : C(X,Y) \\times X \\to Y$, $e(f,x) = f(x)$

- the subspace topology ([[def-subspace-topology-top]]).

### `def-pseudocompact-space` (published-backward, page the-topology-of-euclidean-space)

Title: Pseudocompact space: every continuous real-valued function has bounded image

- A subset $A$ of a topological space is **pseudocompact** when $A$, equipped with its subspace topology, is pseudocompact ([[def-subspace-topology-top]]).

### `def-separated-sets` (published-backward, page separation-axioms)

Title: Separated sets: $\\overline{A} \\cap B = A \\cap \\overline{B} = \\varnothing$

- ([[def-subspace-topology-top]]). Then $A$ and $B$ are separated in the space $S$

### `def-topology-of-pointwise-convergence` (published-backward, page function-space-topologies)

Title: The topology of pointwise convergence on $Y^{X}$, which is the product topology, and its restriction to $C(X,Y)$

- ([[def-subspace-topology-top]]); its subbasic open sets are the traces
- ([[def-subspace-topology-top]]).

### `def-topology-of-uniform-convergence` (published-backward, page function-space-topologies)

Title: Uniform convergence, and the topology of uniform convergence: the metric topology of the uniform metric on $Y^{X}$ and on $C(X,Y)$

- inherited from $Y^{X}$ ([[def-subspace-topology-top]]). It is the metric topology

### `def-zero-sets-and-cozero-sets` (published-backward, page separation-axioms)

Title: Zero sets and cozero sets of continuous real-valued functions

- topology ([[def-subspace-topology-top]]), a continuous map $X \to [0,1]$ is the
- [[def-subspace-topology-top]]; so nothing below depends on which of the two

### `ex-dini-on-the-unit-interval` (published-backward, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- [L4] A function whose restrictions to the members of a finite closed cover are continuous is continuous ([[lem-continuity-is-local-and-pastes]], claim 3, [[def-subspace-topology-top]], [[def-continuous-map-top]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- [L4] A function on a topological space whose restrictions to the members of a finite closed cover are continuous is continuous ([[lem-continuity-is-local-and-pastes]], claim 3, [[def-subspace-topology-top]]).

### `fs-separability-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: separability is hereditary

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `lem-euclidean-polygonal-paths-are-continuous` (published-backward, page the-topology-of-euclidean-space)

Title: A finite concatenation of straight segments in $\\mathbb{R}^n$ is a continuous path

- [L2] A map whose values lie in a subspace is continuous into that subspace exactly when its composite with the inclusion into the ambient space is continuous ([[def-subspace-topology-top]]).

### `prop-second-countability-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Second countability is hereditary

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `prop-subspace-weight-and-character-inequalities` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, for $Y\\subseteq X$, $w(Y)\\le w(X)$ and $\\chi(y,Y)\\le\\chi(y,X)$

- [L1] In the subspace topology, the open subsets of $Y$ are the traces $U\cap Y$ of open subsets $U$ of $X$ ([[def-subspace-topology-top]]).

### `thm-comparison-of-the-three-function-space-topologies` (published-backward, page function-space-topologies)

Title: On $C(X,Y)$ with $X$ and $Y$ metric, uniform convergence is finer than compact convergence, which is finer than pointwise convergence

- [L1] $\mathcal{T}_{\mathrm{pt}}$ is generated by the sets $T(x,V) := \{\, g \in C(X,Y) : g(x) \in V \,\}$ for $x \in X$ and $V \subseteq Y$ open, these being the traces on $C(X,Y)$ of the subbasic sets of the product topology ([[def-topology-of-pointwise-convergence]], [[def-subspace-topology-top]], [[def-topology-basis-subbasis]]).

### `thm-completely-regular-implies-regular` (published-backward, page separation-axioms)

Title: Every completely regular space is regular, and every Tychonoff space is $T_3$

- [L1] A map into the subspace $[0,1]$ of $\mathbb{R}$ is continuous exactly when it is continuous as a map into $\mathbb{R}$, and the open subsets of $[0,1]$ are the traces on $[0,1]$ of the open subsets of $\mathbb{R}$ ([[def-subspace-topology-top]], [[def-interval]]).

### `thm-radial-straight-line-map-on-punctured-rn` (published-backward, page the-topology-of-euclidean-space)

Title: For $n\\ge1$, the map $H(x,t)=((1-t)+t/\\lVert x\\rVert_2)x$ is continuous on $(\\mathbb{R}^n\\setminus\\{0\\})\\times[0,1]$, starts at $x$, ends at radial normalisation, fixes the unit sphere, and never reaches $0$

- [L5] A map into a subspace is continuous exactly when its composite with the ambient inclusion is continuous ([[def-subspace-topology-top]]).


---

# Citation-precision audit — everything that cites `def-countable`

## The target, as it actually stands on disk

`items/def-countable.md` — definition — Finite, countably infinite, countable, uncountable

#### Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## The 18 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).
- [L4] The image of $\mathbb{N}$ under a function is nonempty and at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

### `def-countable-chain-condition` (published-backward, page countability-axioms-and-cardinal-functions)

Title: The countable chain condition: every pairwise-disjoint family of nonempty open sets is at most countable

- A topological space $X$ satisfies the **countable chain condition** (ccc) if every family $\mathcal U$ of nonempty open subsets of $X$ with $U\cap V=\varnothing$ whenever $U,V\in\mathcal U$ are distinct is at most countable ([[def-countable]]).

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- ([[def-countable]]): a finite list $V_0, \dots, V_m$ is extended by $V_n := V_m$

### `def-second-countable-space` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Second countability: an at most countable basis for the topology

- A topological space $X$ is **second countable** when its topology has a basis $\mathcal B$ that is at most countable ([[def-topology-basis-subbasis]], [[def-countable]]). Thus every open set is a union of members of one at most countable family $\mathcal B$.

### `def-separable-space` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Separability: the existence of an at most countable dense subset

- A topological space $X$ is **separable** if some at most countable subset $D\subseteq X$ is dense in $X$ ([[def-dense-top]], [[def-countable]]). Equivalently, every nonempty open subset of $X$ meets $D$.

### `ex-cocountable-closure-detected-by-a-net-not-a-sequence` (published-backward, page nets-and-filters-examples)

Title: In the cocountable topology on $\\mathbb{R}$, a closure point outside $[0,1]$ is reached by a net in $[0,1]$ but by no sequence in $[0,1]$

- [L1] Nonempty cocountable opens have at most countable complements ([[def-standard-topologies]], [[def-countable]]).

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- the at most countable subsets of $\mathbb{R}$ ([[def-countable]]). Then:
- [L1] A topology is $T_1$ exactly when it contains the cofinite topology on the same set; a finite set is at most countable ([[thm-t1-iff-singletons-are-closed]], clause (d), [[def-t0-and-t1-spaces]], [[def-countable]]).

### `ex-the-cofinite-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cofinite topology on an infinite set is $T_1$ but neither Hausdorff nor regular nor normal

- ([[def-countable]]) — and give it the cofinite topology
- [L3] A set with at most one element is finite, being equinumerous with $0$ or with $1$; so an infinite set has at least three distinct points, since a set with at most two elements is finite as a union of two sets each with at most one ([[def-countable]], [[def-standard-topologies]], fact (ii)).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- [L3] $\omega_1$ is uncountable, is a limit ordinal, and every ordinal below it is at most countable ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).
- [L5] The range of a sequence is nonempty and at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

### `fs-every-t1-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every $T_1$ space is Hausdorff

- [L3] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]), and every finite set is at most countable ([[def-countable]]); so $\mathbb{R}$ is not finite.

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L7] An at most countable nonempty family is the set of values of a function with domain $\mathbb{N}$ ([[def-countable]], [[def-injection-surjection-bijection]]).
- [L8] Assuming the Axiom of Countable Choice, a union over $\mathbb{N}$ of at most countable sets is at most countable; a subset of an at most countable set is at most countable; and $\mathbb{R}$ is uncountable ([[thm-countable-union-of-countable]], [[def-countable-choice]], [[lem-subset-of-countable]], [[thm-r-uncountable]], [[def-countable]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L5] Every nondegenerate open interval of $\mathbb{R}$ is uncountable, $\mathbb{Q}$ is at most countable, and a subset of an at most countable set is at most countable ([[cor-interval-uncountable]], [[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- [L1] The range $\{\, x_k : k \in \mathbb{N} \,\}$ of a sequence is nonempty and at most countable, the sequence itself being a surjection of $\mathbb{N}$ onto it; and a subset of an at most countable set is at most countable ([[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]], [[def-countable]]).
- [L4] A topology is $T_1$ exactly when it contains the cofinite topology on the same set ([[thm-t1-iff-singletons-are-closed]], clause (d), [[def-t0-and-t1-spaces]]); a finite set is at most countable ([[def-countable]]).

### `lem-countable-local-bases-can-be-open-and-decreasing` (published-backward, page countability-axioms-and-cardinal-functions)

Title: A countable local base can be chosen open and decreasing

- [L2] Every nonempty at most countable set is a surjective image of $\mathbb N$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

### `lem-finite-powers-of-countable-sets-are-countable` (published-backward, page the-topology-of-euclidean-space)

Title: Every finite power of an at most countable set is at most countable

- [L3] A finite set is at most countable, and induction holds on $\mathbb N$ ([[def-countable]], [[thm-induction-principle]]).

### `lem-uncountable-delta-system-for-finite-sets` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, the uncountable $\\Delta$-system lemma for finite sets

- [L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable]]).

### `thm-perfectly-normal-implies-completely-normal` (published-backward, page separation-axioms)

Title: Assuming countable choice, every perfectly normal space is completely normal: separated sets in a normal space whose open sets are all $F_\\sigma$ can be separated by disjoint open sets

- [A2] Every open subset of $X$ is an $F_\sigma$: it is $\bigcup_{n \in \mathbb{N}} C_n$ for some sequence of closed sets $C_n$ ([[def-completely-normal-and-perfectly-normal-spaces]], [[def-g-delta-and-f-sigma-in-a-topological-space]], [[def-countable]]).

### `thm-t1-iff-singletons-are-closed` (published-backward, page separation-axioms)

Title: A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology

- - **(c)** $F$ is closed for every finite $F \subseteq X$ ([[def-countable]]).
- [L4] A finite set is one equinumerous with a natural number, so a finite $F$ may be listed as $F = \{x_0, \dots, x_{n-1}\}$ for some $n \in \mathbb{N}$, the case $n = 0$ being $F = \varnothing$ ([[def-countable]]).
