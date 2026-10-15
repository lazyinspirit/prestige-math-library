---
id: lem-tdmath-integrable-horizontal-orbits-have-empty-interior
kind: lemma
title: "Horizontal orbits under local first integrals have empty interior"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps: [def-tdmath-one-form-and-horizontal-path, lem-tdmath-local-contraction-flow, lem-tdmath-variational-flow-and-commutation, thm-tdmath-local-implicit-rank, thm-chain-rule-for-total-derivatives, cor-mean-value-theorem, thm-connected-subsets-of-r-are-intervals, thm-rationals-countable, lem-q-and-irrationals-dense-r, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, thm-euclidean-space-complete, thm-recursion, thm-well-ordering-principle]
dependency_roles:
  def-tdmath-one-form-and-horizontal-path: mathematical-premise
  lem-tdmath-local-contraction-flow: mathematical-premise
  lem-tdmath-variational-flow-and-commutation: mathematical-premise
  thm-tdmath-local-implicit-rank: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-connected-subsets-of-r-are-intervals: mathematical-premise
  thm-rationals-countable: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  thm-recursion: mathematical-premise
  thm-well-ordering-principle: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, 18.745 Lie Groups and Lie Algebras I, §8.3, Frobenius and integral manifolds"
      url: "https://arxiv.org/html/2201.09397"
---

## Statement

Let $U\subseteq\mathbb R^{n+1}$, $n\ge1$, be open, and let $\omega$ be a nowhere-zero $C^2$ one-form, with the horizontal paths of [[def-tdmath-one-form-and-horizontal-path]]. Assume that every point has a neighborhood $W$ with $S\in C^2(W)$ and nowhere-zero $\mu\in C^1(W)$ satisfying $dS=\mu\omega$. For every $q\in U$, its horizontal reachability class in $U$ is contained in a countable union of compact subsets of $U$ with empty interior. Consequently every nonempty open $V\subseteq U$ contains a point not horizontally reachable from $q$ by any horizontal path in $U$. In particular, if $q\in V$, that point is not reachable by a path contained in $V$. No global first integral or choice axiom is assumed.

## Facts & Assumptions

**Given:** The open Euclidean domain, nowhere-zero $C^2$ form, two-sided finite-piece horizontal paths, and local first integrals in the Statement.

[F1] [[def-tdmath-one-form-and-horizontal-path]]: a horizontal path is piecewise $C^1$, with finitely many pieces, and its tangent lies in $\ker\omega$; constant paths, reversal and finite concatenation are admissible.

[F2] [[lem-tdmath-local-contraction-flow]] and [[lem-tdmath-variational-flow-and-commutation]]: $C^2$ vector fields have unique local $C^2$ flows, available for both time signs, with inverse flow and differentiable dependence.

[F3] [[thm-chain-rule-for-total-derivatives]] and [[cor-mean-value-theorem]]: composition derivatives obey the chain rule, and a real differentiable function with zero derivative on an interval is constant.

[L1] [[thm-tdmath-local-implicit-rank]]: a $C^1$ zero equation with a specified invertible solved-coordinate minor has a local $C^1$ graph with the displayed derivative formula. Its present batch-4 carrier remains draft; the graph uses here await final native supplier handoff.

[F4] [[thm-connected-subsets-of-r-are-intervals]]: every interval is connected; it cannot be partitioned into two nonempty relatively open sets.

[F5] [[thm-rationals-countable]] and [[lem-q-and-irrationals-dense-r]]: the rational numbers admit an enumeration and are dense in the reals, without a choice hypothesis. Finite words and finite rational tuples can be enumerated by length and by the sum of their integer indices.

[F6] [[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]] and [[thm-compact-subset-is-closed-and-bounded]]: a closed bounded parameter box is compact; its continuous image is compact and closed in the Euclidean ambient space. These suppliers are choice-free.

[F7] [[thm-euclidean-space-complete]]: every Euclidean Cauchy sequence converges, coordinatewise from real completeness.

[F8] [[thm-recursion]] and [[thm-well-ordering-principle]]: a recursively prescribed least natural-number index defines a sequence without arbitrary selections.

## Proof

**Proof technique:** direct.

1.1 Use the local first integrals in the Statement. Write $\omega=\sum_{j=1}^{n+1}\omega_j dx_j$ in the fixed Euclidean coordinates and set $w=(\omega_1,\ldots,\omega_{n+1})$ and $Z_j=e_j-(\omega_j/|w|^2)w$. These globally defined $C^2$ vector fields are horizontal and span $\ker\omega$ at each point, since their matrix is the orthogonal projection onto that kernel. On every neighborhood supplied by the hypothesis, $dS=\mu\omega$ has nonzero derivative, and each $Z_j$-flow preserves $S$ as long as its trajectory remains there, by [F3]. Its derivative therefore preserves horizontal tangent vectors there: differentiating $S(\phi_j^t(x))=S(x)$ gives $dS_{\phi_j^t(x)}D\phi_j^t(x)v=dS_xv=0$ for horizontal $v$. The compact image of any finite flow trajectory has a finite subcover by such neighborhoods; a sufficiently fine finite subdivision of its compact time interval puts each subtrajectory in one of them. This follows directly from compactness: otherwise shrinking subintervals failing the subdivision would have a limiting time whose neighborhood contains them. Composing the local derivative identities obtains preservation over the full duration. Local flow uniqueness makes these continuations consistent, and [F2] gives $C^2$ dependence on durations and initial points wherever the finite composition is defined. [F1, F2, F3, F6, given, construct]

2.1 Fix $q\in U$, and let $\mathcal O(q)$ consist of endpoints of all finite words of the $n+1$ fields $Z_j$, with signed durations and intermediate trajectories in $U$; include the empty word. At any $r$, choose $n$ of these fields forming a basis of $\ker\omega_r$. In a neighborhood from the hypothesis, [L1] applied to $S(x)-S(r)$ gives a local graph plaque with $n$ free coordinates. Composing the $n$ chosen flows for small durations gives endpoints in that plaque. The derivative at zero, followed by projection to the plaque's free coordinates, is invertible, because those vectors form its tangent basis; apply [L1] to this free-coordinate endpoint map minus a target, with durations solved, to see that the endpoints contain a plaque neighborhood of $r$. All these paths stay in the chosen neighborhood. A horizontal piecewise $C^1$ path preserves the local $S$ by [F3], so near every one of its parameter values it lies in this plaque neighborhood and hence in the same finite-word orbit as that point. The finite-word orbits form equivalence classes by reversal and concatenation, and their preimages along the path are consequently relatively open in its interval domain. By [F4], connectedness of that interval forces one class. Thus every point horizontally reachable from $q$ lies in $\mathcal O(q)$; the reverse inclusion follows because each word is a horizontal concatenation. [F1, F2, F3, F4, L1, step 1.1, algebra]

3.1 For a fixed finite word $\alpha$ of length $m\ge1$, write $F_\alpha:O_\alpha\subseteq\mathbb R^m\to U$ for its endpoint map from $q$, on the open set of admissible duration tuples. Each duration derivative is a field vector transported by the later flows and is horizontal by step 1.1. Near any $s\in O_\alpha$, continuity puts the endpoint image in a neighborhood with the first integral $S$ from the hypothesis; hence $D(S\circ F_\alpha)=0$. On a small convex parameter ball, [F3] makes $S\circ F_\alpha$ constant. Choose a closed box with rational endpoints, containing $s$ in its interior and contained in that ball. Its image under $F_\alpha$ is compact by [F6], lies in one level of $S$, and has empty interior in $U$: a nonempty open subset of that image would make $S$ constant on an open set, contradicting $dS=\mu\omega\ne0$. Thus the image is a closed nowhere-dense subset of $U$. By [F5], enumerate the countable collection of all finite words and rational closed parameter boxes; for an admissible box whose compact image has empty interior record that image, and otherwise record the empty set. Include the singleton $\{q\}$ for the empty word. This explicitly defined sequence $(K_j)$ of closed nowhere-dense sets covers $\mathcal O(q)$, since every duration tuple admits the small box just constructed. No countable atlas or choice of first integrals is needed for the enumeration. [F1, F2, F3, F5, F6, step 1.1, step 2.1, construct]

4.1 Let $V$ be any nonempty open subset of $U$. Choose a rational open Euclidean ball with closure contained in $V$. Recursively choose the first ball in a fixed enumeration of rational balls whose closure is inside the preceding open ball, disjoint from $K_j$, and whose radius is below $2^{-j}$. Such a ball exists because $K_j$ is closed with empty interior. If the $j$th ball has center $c_j$ and radius $r_j<2^{-j}$, then all later centers lie in its closed ball, so $|c_k-c_j|\le r_j$ for $k>j$. Thus the centers form a Cauchy sequence; [F7] gives a limit $p$ in all the nested closed balls, hence in $V$ and outside every $K_j$. Each selection is the least natural-number index satisfying explicit nonempty conditions, so it uses no choice axiom. Since the $K_j$ cover $\mathcal O(q)$, step 2.1 shows $p$ is not horizontally reachable from $q$ even by a path in $U$, and therefore not by one in $V$. This proves the asserted conclusion for every nonempty open $V$, using no global first integral or choice axiom. [given, F5, F7, F8, step 2.1, step 3.1, construct, algebra] ∎
