---
id: lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected
kind: lemma
title: "Multipartitions with fixed component cores are cyclotomic Jantzen-connected"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 27
deps: [lem-cyclotomic-jantzen-equivalence-is-schur-and-hecke-block-linkage,
       thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations,
       def-e-core-e-quotient-and-e-weight,
       thm-e-core-is-independent-of-the-rim-hook-removal-order,
       prop-core-quotient-size-and-weight-formula,
       cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core,
       prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras,
       thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
       lem-dj-bridge-sign-automorphism-and-star-dual]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451"
      locator: "Actually read full PDF pp. 1–20; relevant Prop. 2.3/2.9/Theorem 2.11 and §3. Local proof bodies and Q/J suppliers replace citation-only use."
---

## Statement

Under the arbitrary-field finite-$e$ nondegenerate cyclotomic hypotheses of
[[lem-cyclotomic-jantzen-equivalence-is-schur-and-hecke-block-linkage]], any
two $\ell$-multipartitions of a common rank $n$ with equal componentwise
$e$-cores are $J$-equivalent, even if their component sizes differ. At fixed
component sizes, the full-level coefficient for a change in a single
component equals its level-one coefficient. The proof consumes the actual
same-$e$-core Hecke Specht block theorem for all ranks
([[cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core]])
rather than a readiness receipt, and imports no Carter-partition
classification.

## Facts & Assumptions

**Given:** The Jantzen linkage equivalence [F1], the exact $J$ formula [F2],
the level-one identification [F3], the same-core Hecke block theorem [F4],
and the $e$-core/e-weight conventions [F5]–[F7].

[F1] $\lambda\sim_J\mu$ iff the corresponding Schur standards share a block
iff the Murphy Specht modules share a Hecke block, at any level and over any
field in the stated regime
([[lem-cyclotomic-jantzen-equivalence-is-schur-and-hecke-block-linkage]]).

[F2] The integer $J_{\lambda\mu}$ is the signed sum of
$\nu_\pi(\operatorname{res}_{\mathcal O}(f_x^\lambda)-\operatorname{res}_{\mathcal O}(f_y^\mu))$
over equal-remainder equal-length hook pairs, $0$ unless $\lambda$ strictly
dominates $\mu$, and every foot difference is nonzero in $K$
([[thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations]]).

[F3] At level one the arbitrary-level cyclotomic Hecke algebra is the finite
type-A Hecke algebra
([[prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras]]).

[F4] Two type-A Hecke Specht modules are in the same block exactly when their
labels have the same $e$-core
([[cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core]]).

[F5] $e$-core, $e$-quotient and $e$-weight of a partition
([[def-e-core-e-quotient-and-e-weight]]), with the core independent of the
removal order ([[thm-e-core-is-independent-of-the-rim-hook-removal-order]])
and the size/weight formula ([[prop-core-quotient-size-and-weight-formula]]).

[F6] The actual universal signed-conjugate comparison gives $P(\lambda^{\mathsf T})\cong C_{\mathrm M}(\lambda)^\theta$, hence $C_{\mathrm M}(\lambda)\cong P(\lambda^{\mathsf T})^\theta$; $\theta$ is an involutive algebra automorphism whose pullback is exact ([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]], [[lem-dj-bridge-sign-automorphism-and-star-dual]]).

## Proof

**Proof technique:** direct.

**Given:** The rank $n$, the charges, and the suppliers of [F1]–[F5].

1.1 One component at a time, at level one. Suppose first that the component sizes agree. For a single component $a$ of rank $m$, the actual level-one Hecke algebra is the finite Hecke algebra by [F3]. Its same-core Specht-block clause [F4], together with the level-one case of the Jantzen linkage equivalence [F1], connects any two rank-$m$ partitions with equal $e$-core by level-one Jantzen edges. The exact signed-conjugate bridge is $C_{\mathrm M}(\lambda)\cong P(\lambda^{\mathsf T})^\theta$, where $\theta(T_i)=-zT_i^{-1}$ and $P$ denotes the ordinary Dipper–James Specht module. If $\lambda,\mu$ have equal $e$-cores, their transposes have the equal transposed cores, so [F4] puts $P(\lambda^{\mathsf T})$ and $P(\mu^{\mathsf T})$ in the same ordinary Hecke block. An algebra automorphism sends primitive central idempotents bijectively to primitive central idempotents; its exact module pullback therefore preserves the equivalence of sharing a block. Applying the SAME $\theta$ to both modules gives the required Murphy block equality and then [F1] gives the level-one Jantzen connection. No untwisted conjugate-dual identity or algebraic-closure assumption is used. The rank $m=0$ case has a single empty partition and needs no block theorem. [F1, F3, F4, F5, F6]

1.2 Equalizing the component weights with charged runners. Choose a component $a$ whose weight exceeds its target and a component $b$ whose weight is deficient. A positive-weight component has a removable rim $e$-hook by [F5]. For each component $c$ use the charged infinite beta set $B_c=\{\lambda_j^{(c)}+c_c-j:j\ge1\}$. This is the ordinary beta display shifted to charge $c_c$, with all sufficiently negative positions occupied and all sufficiently positive positions vacant. A removable hook is a bead move $u\mapsto u-e$ to a gap, and its charged foot residue is $u-e+1$ modulo $e$. To see the foot formula, order the beta positions before and after the move: the affected consecutive rows form the boundary strip between the starting and ending positions, and the leftmost removed box in the last affected row has charged content one more than the ending position. The inverse move wraps a hook whose foot has charged residue one more than its starting position. Let $f$ be the charged foot residue of the hook removed from $a$. In $B_b$, choose the largest occupied integer $v\equiv f-1\pmod e$; it exists by the two tail conditions, and $v+e$ is vacant by maximality. Move $v$ to $v+e$ in component $b$. Its new hook has charged foot residue $v+1=f$. Equivalently, in an uncharged display for component $b$ the runner to use is $f-c_b-1$ modulo $e$, so different component charges cannot be ignored. Both moves stay on their own runners and preserve the component cores and total rank. The earlier of $a,b$ determines the strict dominance orientation: removing boxes there and adding them later decreases every intervening prefix sum; adding boxes there reverses the inequality. In that orientation the equal-remainder hook pair is unique, since the two changed components determine both strips. Its charged foot residues agree, so the foot difference evaluates to zero at $t=1$; it is nonzero over $F(t)$ by [F2], and consequently has a finite positive valuation. Thus the single signed contribution is nonzero, giving a Jantzen edge. If $\delta_c$ is the current component weight minus its target, then $\delta_a\ge1$, $\delta_b\le-1$, and this transfer changes $\sum_c\delta_c^2$ by $-2\delta_a+2\delta_b+2\le-2$. Finitely many such transfers therefore equalize all component weights. [F2, F5, algebra]

2.1 Fixed component sizes. For two full multipartitions that differ only in component $a$, every contributing equal-remainder hook pair in $J$ lies in $a$: the other components are unchanged on both sides and cancelling hooks between two unchanged components would return the same multipartition. The common residue factor $Q_at^{na}$ is a unit of $\mathcal O$, and replacing it by the level-one factor $Q_at^m$ multiplies each foot difference by a Laurent unit, so the valuation is unchanged and the full-level $J$ coefficient equals the level-one coefficient of [F2]. Inserting the level-one paths of step 1.1 in component $a$ and leaving the other components fixed connects all multipartitions with equal component sizes and the same component cores. [F1, F2, step 1.1]

3.1 Conclusion. Steps 1.2 equalize component sizes along Jantzen edges from any starting multipartition, and step 2.1 connects all multipartitions of fixed component sizes with equal component cores. Composing the two finite chains connects any two multipartitions of rank $n$ with equal componentwise $e$-cores, proving that they are $J$-equivalent; the fixed-size comparison of coefficients is step 2.1. [F1, F2, step 2.1, step 1.2] ∎

## Remarks

The lemma reduces the multipartition block question to the componentwise
$e$-core data and the level-one Hecke theorem, using the exact level-one to
finite-Hecke identification and the explicit hook transfer between
components. No choice principle is used: all chains and hook moves are
finite and explicitly constructed.


For a concrete instance of step 1.2, take $e=3$, two components in the
order $a=1<b=2$, and charges $(c_1,c_2)=(0,1)$. The transfer is
$\lambda=((3),\varnothing)\longmapsto\mu=(\varnothing,(2,1))$.
The diagram shows the selected charged runner (positions congruent to $2$
modulo $3$) **before** the moves; filled circles are beads and empty circles
are gaps. Each arrow moves one bead into the indicated gap.

```tikz
\begin{tikzpicture}[x=1.55cm,y=1cm]
\node[anchor=east] at (-0.6,0) {$B_1:\ (3)$};
\node[anchor=east] at (-0.6,-2) {$B_2:\ \varnothing$};
\draw (-0.3,0)--(3.3,0);
\draw (-0.3,-2)--(3.3,-2);
\node at (-0.5,0) {$\cdots$};
\node at (3.5,0) {$\cdots$};
\node at (-0.5,-2) {$\cdots$};
\node at (3.5,-2) {$\cdots$};
\fill (0,0) circle (2.5pt);
\draw[fill=white] (1,0) circle (2.5pt);
\fill (2,0) circle (2.5pt);
\draw[fill=white] (3,0) circle (2.5pt);
\fill (0,-2) circle (2.5pt);
\fill (1,-2) circle (2.5pt);
\draw[fill=white] (2,-2) circle (2.5pt);
\draw[fill=white] (3,-2) circle (2.5pt);
\node[below] at (0,0) {$-4$};
\node[below] at (1,0) {$-1$};
\node[below] at (2,0) {$2$};
\node[below] at (3,0) {$5$};
\node[below] at (0,-2) {$-4$};
\node[below] at (1,-2) {$-1$};
\node[below] at (2,-2) {$2$};
\node[below] at (3,-2) {$5$};
\draw[->,thick] (2,0.12) to[bend right=45] node[above] {$-3$} (1,0.12);
\draw[->,thick] (1,-1.88) to[bend left=45] node[above] {$+3$} (2,-1.88);
\node[anchor=west] at (3.9,0) {$u=2,\quad u-e+1=0$};
\node[anchor=west] at (3.9,-2) {$v=-1,\quad v+1=0$};
\end{tikzpicture}
```

Indeed $B_1=\{2,-2,-3,-4,\ldots\}$ and
$B_2=\{0,-1,-2,-3,\ldots\}$ initially. After the moves they are
$\{-1,-2,-3,\ldots\}$ and $\{2,0,-2,-3,\ldots\}$, giving exactly the
stated partitions. The second component's uncharged runner is
$f-c_2-1\equiv1\pmod3$, although its charged runner is $2$.
The removed hook has foot $(1,1,1)$ and the added hook has foot $(2,1,2)$;
their charged contents are $0$ and $1+1-2=0$. Both component cores are empty
and the total rank is $3$ on both sides. Since the earlier component loses
boxes, $\lambda$ strictly dominates $\mu$. Their common remainder is empty;
the unique hook pair has leg lengths $0$ and $1$, so [F2] gives
$J_{\lambda\mu}=-\nu_\pi(t^3-t^5)\ne0$ with the rank-three deformation.
This illustrates a Jantzen edge from step 1.2; the rigorous proof above is
independent of the figure.
