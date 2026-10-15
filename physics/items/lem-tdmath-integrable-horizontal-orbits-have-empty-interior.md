---
id: lem-tdmath-integrable-horizontal-orbits-have-empty-interior
kind: lemma
title: "Horizontal orbits under local first integrals have empty interior"
status: published
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
    - title: "Pavel Etingof, Lie groups and Lie algebras, arXiv:2201.09397v5, §10.1, Lemma 10.3 and Theorem 10.6, pp. 54–57"
      url: "https://arxiv.org/pdf/2201.09397v5"
dependency_level: 2
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $U\subseteq\mathbb R^{n+1}$, $n\ge1$, be open, and let $\omega$ be a nowhere-zero $C^2$ one-form, with the horizontal paths of [[def-tdmath-one-form-and-horizontal-path]]. Assume that every point has a neighborhood $W$ with $S\in C^2(W)$ and nowhere-zero $\mu\in C^1(W)$ satisfying $dS=\mu\omega$. For every $q\in U$, its horizontal reachability class in $U$ is contained in a countable union of compact subsets of $U$ with empty interior. Consequently every nonempty open $V\subseteq U$ contains a point not horizontally reachable from $q$ by any horizontal path in $U$. In particular, if $q\in V$, that point is not reachable by a path contained in $V$. No global first integral or choice axiom is assumed.

## Facts & Assumptions

**Given:** The open Euclidean domain, nowhere-zero $C^2$ form, two-sided finite-piece horizontal paths, and local first integrals in the Statement.

[F1] [[def-tdmath-one-form-and-horizontal-path]]: a horizontal path is piecewise $C^1$, with finitely many pieces, and its tangent lies in $\ker\omega$; constant paths, reversal and finite concatenation are admissible.

[F2] [[lem-tdmath-local-contraction-flow]] and [[lem-tdmath-variational-flow-and-commutation]]: $C^2$ vector fields have unique local $C^2$ flows, available for both time signs, with inverse flow and differentiable dependence.

[F3] [[thm-chain-rule-for-total-derivatives]] and [[cor-mean-value-theorem]]: composition derivatives obey the chain rule, and a real differentiable function with zero derivative on an interval is constant.

[L1] [[thm-tdmath-local-implicit-rank]]: a $C^1$ zero equation with a specified invertible solved-coordinate minor has a local $C^1$ graph. The batch-4 draft carrier and its proof have been inspected; deductions using it remain conditional on that supplier's final acceptance.

[F4] [[thm-connected-subsets-of-r-are-intervals]]: every interval is connected; it cannot be partitioned into two nonempty relatively open sets.

[F5] [[thm-rationals-countable]] and [[lem-q-and-irrationals-dense-r]]: the rational reals admit an enumeration and are dense, without a choice hypothesis. Fix an enumeration $(r_k)_{k\in\mathbb N}$ of them. Encode each length-$m$ flow word by its finite string in the finite alphabet of fields, and each rational closed box in $\mathbb R^m$ by the $2m$ indices of its endpoints in $(r_k)$. For each $N$, only finitely many word-box codes have $m$ plus the sum of those indices at most $N$; ordering these finite levels and then lexicographically enumerates all pairs. The same coding by dimension, center-coordinate indices, and radius index enumerates rational balls in $\mathbb R^{n+1}$. Coordinatewise density and a sufficiently small positive rational radius give such a ball whose closed ball lies in any prescribed nonempty open set.

[F6] [[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]] and [[thm-compact-subset-is-closed-and-bounded]]: a closed bounded parameter box is compact; its continuous image is compact and closed in the Euclidean ambient space. These suppliers are choice-free.

[F7] [[thm-euclidean-space-complete]]: every Euclidean Cauchy sequence converges, coordinatewise from real completeness.

[F8] [[thm-recursion]] and [[thm-well-ordering-principle]]: a recursively prescribed least natural-number index defines a sequence without arbitrary selections.

## Proof

**Proof technique:** direct.

1.1 Use the local first integrals in the Statement. Write $\omega=\sum_{j=1}^{n+1}\omega_j dx_j$ in the fixed Euclidean coordinates and set $w=(\omega_1,\ldots,\omega_{n+1})$ and $Z_j=e_j-(\omega_j/|w|^2)w$. These globally defined $C^2$ vector fields are horizontal and span $\ker\omega$ at each point, since their matrix is the orthogonal projection onto that kernel. On every neighborhood supplied by the hypothesis, $dS=\mu\omega$ has nonzero derivative, and each $Z_j$-flow preserves $S$ as long as its trajectory remains there, by [F3]. Its derivative therefore preserves horizontal tangent vectors there: differentiating $S(\phi_j^t(x))=S(x)$ gives $dS_{\phi_j^t(x)}D\phi_j^t(x)v=dS_xv=0$ for horizontal $v$. The compact image of any finite flow trajectory has a finite subcover by such neighborhoods; a sufficiently fine finite subdivision of its compact time interval puts each subtrajectory in one of them. This follows directly from compactness: otherwise shrinking subintervals failing the subdivision would have a limiting time whose neighborhood contains them. Composing the local derivative identities obtains preservation over the full duration. Local flow uniqueness makes these continuations consistent, and [F2] gives $C^2$ dependence on durations and initial points wherever the finite composition is defined. [F1, F2, F3, F6, given, construct]

2.1 Fix $q\in U$ and a neighborhood $W$ with $dS=\mu\omega$ as in the hypothesis. Since $dS_q=\mu(q)\omega_q\ne0$, apply [L1] to $x\mapsto S(x)-S(q)$ with ambient dimension $n+1$ and target dimension $1$; after choosing the solved coordinate, its zero set is a local $C^1$ graph plaque $P$ through $q$, parameterized by its $n$ free coordinates. Let $\pi$ be projection to those free coordinates. Choose $n$ of the fields $Z_j$ that form a basis of $\ker\omega_q=\ker dS_q$, and for $s=(s_1,\ldots,s_n)$ near $0$ let $E(s)$ be the endpoint at $q$ of the successive local flows of these fields for durations $s_1,\ldots,s_n$. Shrink the open duration domain $D\subseteq\mathbb R^n$ so all flow segments stay in $W$. Step 1.1 shows that each flow preserves $S$, so $E(D)\subseteq P$; moreover $DE(0)$ has the chosen basis as its columns. The differential $D(\pi\circ E)(0)$ is therefore an invertible $n\times n$ matrix, because $D\pi_q$ is an isomorphism from the tangent space of the graph plaque to its free-coordinate space. Choose an open neighborhood $Y\subseteq\mathbb R^n$ of $y_0=\pi(q)$ and shrink $D$ so that the target-augmented map $H:D\times Y\to\mathbb R^n$, $H(s,y):=\pi(E(s))-y$, is defined. It satisfies $H(0,y_0)=0$ and its solved block $D_sH(0,y_0)=D(\pi\circ E)(0)$ is invertible. Apply [L1] with ambient dimension $2n$ and target dimension $n<2n$, permuting inputs to $(y,s)$ so $y$ is free and $s$ is solved. For every $y$ near $y_0$ this gives $s(y)$ with $\pi(E(s(y)))=y$; uniqueness of the graph plaque then says the endpoints $E(s(y))$ fill a relative neighborhood of $q$ in $P$. Each is reachable by a finite word of horizontal flows inside $W$. Conversely, a horizontal path preserves the local $S$ on each short subarc in a first-integral neighborhood by [F3]. Thus near each parameter value its image lies in the relative plaque neighborhood just shown to be reachable by such a finite word. The finite-word orbits are equivalence classes by flow reversal and concatenation, so their preimages along the path are relatively open in its interval domain. By [F4], connectedness of that interval forces one class. Hence every point horizontally reachable from $q$ lies in its finite-word orbit; the reverse inclusion follows because every word is a horizontal concatenation. [F1, F2, F3, F4, L1, step 1.1, algebra]

3.1 For a fixed finite word $\alpha$ of length $m\ge1$, write $F_\alpha:O_\alpha\subseteq\mathbb R^m\to U$ for its endpoint map from $q$, on the open set of admissible duration tuples. Each duration derivative is a field vector transported by the later flows and is horizontal by step 1.1. Near any $s\in O_\alpha$, continuity puts the endpoint image in a neighborhood with the first integral $S$ from the hypothesis; hence $D(S\circ F_\alpha)=0$. On a small convex parameter ball, [F3] makes $S\circ F_\alpha$ constant. Coordinatewise density in [F5] supplies a closed box with rational endpoints containing $s$ in its interior and contained in that ball. Its image under $F_\alpha$ is compact by [F6], lies in one level of $S$, and has empty interior in $U$: a nonempty open subset of that image would make $S$ constant on an open set, contradicting $dS=\mu\omega\ne0$. Thus the image is a closed nowhere-dense subset of $U$. Enumerate the finite-word/rational-box pairs by the finite-level coding in [F5]; for an admissible box whose compact image has empty interior record that image, and otherwise record the empty set. Include the singleton $\{q\}$ for the empty word. This sequence $(K_j)$ of closed nowhere-dense sets covers $\mathcal O(q)$, since every duration tuple admits the small box just constructed. No countable atlas or choice of first integrals is needed for the enumeration. [F1, F2, F3, F5, F6, step 1.1, step 2.1, construct]

4.1 Let $V$ be any nonempty open subset of $U$. By [F5], choose an initial rational open ball $B_{-1}$ with $\overline{B_{-1}}\subset V$. Recursively, for each $j\ge0$, choose the first rational ball $B_j=B(c_j,r_j)$ in the fixed enumeration such that $\overline{B_j}\subset B_{j-1}\setminus K_j$ and $0<r_j<2^{-j}$. Such a ball exists: $K_j$ is closed with empty interior, so $B_{j-1}\setminus K_j$ is a nonempty open set, which contains a rational ball with closed ball inside it and arbitrarily small radius by [F5]. For $k>j$, the later centers lie in $B_j$, so $|c_k-c_j|<r_j<2^{-j}$; hence $(c_j)$ is Cauchy. By [F7] it has a limit $p$, and each tail of the sequence lies in the closed ball $\overline{B_j}$, so $p\in\overline{B_j}$ for every $j$. These closed balls lie in $V$ and satisfy $\overline{B_j}\cap K_j=\varnothing$, so $p\in V\setminus\bigcup_jK_j$. Each selection is the least natural-number index satisfying explicit conditions, so it uses no choice axiom. Since the $K_j$ cover $\mathcal O(q)$, step 2.1 shows $p$ is not horizontally reachable from $q$ even by a path in $U$, and therefore not by one in $V$. This proves the asserted conclusion for every nonempty open $V$, using no global first integral or choice axiom. [given, F5, F7, F8, step 2.1, step 3.1, construct, algebra] ∎
