---
id: lem-rudin-disjoint-box-refinement
kind: lemma
title: Disjoint box refinements in the ambient Rudin space
status: published
verification:
  audited: 2026-09-12
origin: pipeline
deps: [def-rudin-ambient-ordinal-box-space, lem-rudin-box-space-basic-neighborhoods-and-p-space, thm-transfinite-recursion, thm-regularity-of-the-alephs, lem-ordinal-basics, def-axiom-of-choice, def-ordinal, thm-cofinality-basics]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 6 section 2, printed p. 36, partition construction and Exercises 2–3"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. Every open cover $\mathcal O$ of $Y_B$ has a refinement consisting of pairwise disjoint nonempty open boxes $(a,b]_Y$ which cover $Y_B$. Thus $Y_B$ is ultraparacompact, meaning every open cover has a disjoint open refinement. The upper endpoint functions are not required to be points of $Y_B$. No hereditary ultraparacompactness assertion is made.

## Facts & Assumptions

**Given:** An open cover $\mathcal O$ of the ambient Rudin space $Y_B$ and AC. A set is called subordinate if it is contained in some member of $\mathcal O$.

[F1] Points of $Y_B$ have nonzero limit coordinates of uncountable cofinality in $[0,\aleph_n]$; half-open boxes allow arbitrary ordinal upper bounds ([[def-rudin-ambient-ordinal-box-space]]).

[F2] Half-open relative boxes are clopen and give the local base at each point of $Y_B$; this space is a P-space ([[lem-rudin-box-space-basic-neighborhoods-and-p-space]]).

[F3] Under AC $\omega_1$ is regular ([[thm-regularity-of-the-alephs]], (b)).

[F4] An ordinal is well-ordered by membership, so each nonempty subset of it has a least element ([[def-ordinal]]).

[F5] Specified rules recurse on ordinals ([[thm-transfinite-recursion]]).

[F6] A limit ordinal has an increasing cofinal enumeration of length its cofinality, which is regular; a smaller set is bounded when its size is less than that cofinality ([[thm-cofinality-basics]], (c)–(d)).

[A1] AC fixes choices from nonempty sets ([[def-axiom-of-choice]]).

## Proof

1.1 Normalize a represented box $(a,b]_Y$ by replacing every successor coordinate of $b$ by its predecessor repeatedly, until it becomes zero or a limit ordinal. This takes finitely many replacements per coordinate: otherwise successive predecessors would form an infinite descending sequence of ordinals, whose set of values has a least member followed by a smaller one, contradicting F4. It does not change the box because a point-coordinate of $Y_B$ is a limit by F1 and cannot equal any removed successor. If a normalized upper coordinate is at most its lower coordinate, the box is empty and is discarded. Every surviving box thus has $a<b$ and positive limit upper coordinates. Normalization only decreases upper bounds and leaves lower bounds fixed. Each represented box, empty or not, is clopen by F2. [F1, F2, F4]

1.2 Fix by A1 the following choices, all indexed by sets of ordinal bounds or points in the set $P_B$. For every $b\in Y_B$ choose a local lower bound $d<b$ with $(d,b]_Y$ subordinate: the cover contains some neighborhood of $b$ and F2 supplies this local box, so the witness set is nonempty. For every limit ordinal $\eta\le\aleph_n$ of cofinality $\omega$ and $r<\eta$, choose a strictly increasing cofinal sequence $(d_j)_{j<\omega}$ in $\eta$ with $d_0=r$. It exists by F6: use a countable cofinal enumeration and recursively choose successors above both its next value and the preceding value, still below limit $\eta$. These choices specify the successor refinements below. [F2, F5, F6, A1]

2.1 Consider a normalized nonempty nonsubordinate box $U=(a,b]_Y$ with $b\in Y_B$. The chosen $d$ in step 1.2 gives a subordinate $(d,b]_Y$. Put $c(n)=\max\{a(n),d(n)\}+1<b(n)$, since $b(n)$ is a limit. For each $S\subseteq B$ take the cell whose coordinates satisfy $a(n)<x(n)\le c(n)$ for $n\in S$ and $c(n)<x(n)\le b(n)$ for $n\notin S$. These are boxes with lower bounds at least $a$ and upper bounds at most $b$, and are open by F2. Every point of $U$ belongs to exactly one cell, determined by the set of coordinates where $x(n)\le c(n)$. The empty-$S$ cell lies in $(d,b]_Y$, hence is subordinate. Every other nonempty cell has a strictly smaller upper bound at each coordinate in its nonempty $S$. Normalize its upper bound by step 1.1; the same cell is retained, and none of the strict decreases is lost. This gives a partition of $U$ into normalized boxes, each either subordinate or strictly lowering at least one upper coordinate. [step 1.1, step 1.2, F1, F2]

2.2 For a normalized nonempty nonsubordinate box $U=(a,b]_Y$ with $b\notin Y_B$, choose the least $n\in B$ for which $\operatorname{cf}(b(n))\le\omega$. Such a coordinate exists by F1. Its value is a positive limit by normalization, so its cofinality is exactly $\omega$ by F6. Take the chosen sequence of step 1.2 with $d_0=a(n)$ cofinal in $b(n)$. Restrict the $n$th coordinate successively to $(d_j,d_{j+1}]$, leaving all others as in $U$. The cells are disjoint open boxes by F2. They cover $U$: every allowed point-coordinate is greater than $a(n)$ and strictly less than $b(n)$, since equality would give countable cofinality, and the successive intervals cover that half-open range without gaps. Each upper coordinate at $n$ is $d_{j+1}<b(n)$. Normalize and discard empty cells as in step 1.1. This preserves the partition and the strict decrease. [step 1.1, step 1.2, F1, F2, F6]

2.3 For a countable nonzero limit ordinal $\alpha$, suppose normalized box partitions have been constructed at all stages below $\alpha$, with coordinatewise nondecreasing lower bounds and nonincreasing upper bounds along every refinement branch. Take all nonempty intersections along these branches. They form a partition: each point determines its unique preceding cells, while two different branches separate at some earlier partition. They are open by the P-space property F2, since $\alpha$ is countable. They are also represented boxes. On a branch set $a(n)=\sup_{\beta<\alpha}a_\beta(n)$ and $b(n)=\inf_{\beta<\alpha}b_\beta(n)$. The infimum is the minimum of that nonempty set of ordinals by F4. If $x$ belongs to the intersection, each $a_\beta(n)<x(n)$ and the set of lower bounds is countable, so F1 and F6 give $a(n)<x(n)$; also $x(n)\le b(n)$. Conversely these inequalities imply all earlier box inequalities. Hence the intersection is exactly $(a,b]_Y$. Nonemptiness ensures $a<b$, and step 1.1 can normalize the representation while preserving all refinement-bound inequalities. [step 1.1, F1, F2, F4, F6]

3.1 Start at $\mathcal U_0=\{(0,t]_Y\}=\{Y_B\}$, where $t(n)=\aleph_n$; these bounds are normalized positive limits and every point has positive coordinates by F1. F3 gives $\operatorname{cf}(t(n))=\aleph_n>\omega$, so $t\in Y_B$ and the initial cell is nonempty. At a successor stage preserve each subordinate cell with its existing representation, and refine every other cell by step 2.1 or 2.2. At nonzero limits use step 2.3. The choices were fixed in step 1.2, so F5 supplies this construction for all $\alpha<\omega_1$. Every such limit stage is countable. Induction using the proved partition and endpoint properties gives a refining partition at every stage, with nonincreasing upper coordinates along each branch. A subordinate cell, once reached, remains the identical represented cell at every subsequent stage: successors preserve it and limit intersections of its constant tail with its earlier supersets equal it. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, F1, F3, F5]

4.1 Fix $x\in Y_B$ and its unique cells $U_\alpha=(a_\alpha,b_\alpha]_Y$. For each $n\in B$ the ordinals $b_\alpha(n)$ never increase. They eventually stabilize: if not, one could recursively take later indices with strictly smaller values for infinitely many steps, contradicting F4 as in step 1.1. Let $\gamma_n<\omega_1$ be a stage after which that coordinate is constant. Since $B$ is countable, F3 and F6 give $\gamma=\sup_{n\in B}\gamma_n<\omega_1$, so all upper coordinates are constant after $\gamma$. If $U_\gamma$ is subordinate we are done. Otherwise its successor cell containing $x$ is either subordinate or lowers an upper coordinate by steps 2.1–2.2. Stabilization excludes the latter possibility, so $U_{\gamma+1}$ is subordinate. Thus every point belongs to a subordinate cell occurring in the construction. [step 1.1, step 2.1, step 2.2, step 3.1, F3, F4, F6]

5.1 Let $\mathcal V$ be the set of all nonempty subordinate cells that occur. Step 4.1 shows they cover $Y_B$. If two such cells meet, put the earlier stage first. Refinement makes the later cell a subset of the earlier one, and step 3.1 says that the earlier subordinate cell is preserved at that later stage. The uniqueness of the cell of a partition through their common point forces the two sets to be equal. Therefore distinct members of $\mathcal V$ are disjoint. Each is an open box and is contained in a member of $\mathcal O$ by subordination. This is the required partition refinement. QED. [step 3.1, step 4.1, F2]
