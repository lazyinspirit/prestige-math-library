---
id: "lem-cg-sortable-cone-criterion-and-projection-monotonicity"
kind: "lemma"
title: "The cone criterion, monotonicity of the projection, and the greatest sortable element below w"
status: draft
origin: pipeline
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 25
deps:
  - def-cg-canonical-reflection-homomorphism
  - lem-cg-reflection-representation-descends-and-root-norms
  - lem-cg-weak-parabolic-projection-and-cover-joins
  - def-cg-sortable-element-skip-roots-and-cone
  - lem-cg-uniform-omega-positive-and-aligned-sortability
  - def-cg-initial-letter-sortable-projection
  - lem-cg-sortable-recursion-output-and-initial-choice-independence
  - lem-cg-sortable-skips-basis-and-cover-decomposition
  - def-cg-finite-reflection-arrangement-and-spherical-chambers
  - thm-cg-finite-chamber-tiling-and-coset-face-identification
  - thm-cg-weak-order-meet-semilattice-and-finite-lattice
  - lem-cg-bounded-weak-order-join-construction
  - def-cg-left-right-weak-order-and-descents
  - lem-cg-greedy-sorting-word-and-rank-two-alignment
  - lem-cg-weak-order-is-a-graded-partial-order
  - lem-cg-weak-order-prefix-property-and-left-translation
  - def-cg-geometric-inversion-set
  - lem-cg-finite-dihedral-subsystems-and-canonical-roots
  - thm-hh-coxeter-exchange-deletion-and-faithfulness
  - lem-hh-dihedral-root-recurrence-and-root-sign
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "Lemma 6.12, pp. 35-36, Theorem 6.1, pp. 36-37, Corollary 6.2 and Theorem 6.3, p. 37, Proposition 6.13, p. 37"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 3, pp. 8-9 (Proposition 3.2, Corollary 3.3 and Theorem 1.2 in the finite case)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 3, section 3.2 (the weak order as a lattice and its chamber model)"
verification:
  precheck: pass
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type, $c$ a Coxeter element, $\pi_c$ the projection of [[def-cg-initial-letter-sortable-projection]], $C^r_c(v)$ and $\mathrm{Cone}_c(v)$ the skip roots and cone of [[def-cg-sortable-element-skip-roots-and-cone]], and let $wC$ denote the closed chambers of the finite reflection arrangement ([[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (1),(2)) under the identification $V\cong V^\ast$.

**(1) Cone criterion for comparable pairs.** If $v$ is $c$-sortable and $v\le_Rw$, then
$$\pi_c(w)=v\iff wC\subseteq\mathrm{Cone}_c(v).$$

**(2) Monotonicity.** $\pi_c$ is order preserving: $x\le_R y$ implies $\pi_c(x)\le_R\pi_c(y)$.

**(3) Greatest sortable below, and full cone criterion.** For every $w\in W$ the element $\pi_c(w)$ is the unique greatest $c$-sortable element below $w$ in $\le_R$; and for every $c$-sortable $v$,
$$\pi_c(w)=v\iff wC\subseteq\mathrm{Cone}_c(v).$$
Consequently each fiber of $\pi_c$ is a union of chambers and each cone is a union of closed chambers (assembled in [[thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions]]).

**(4) Parabolic compatibility.** For $J\subseteq S$, with $c'$ the restriction of $c$ and $w_J$ the $W_J$-prefix,
$$\pi_{c'}(w_J)=\pi_c(w)_J$$
for every $w\in W$.

## Facts & Assumptions

**Given:** the finite-type system and objects of the Statement. Write $J_s=S\setminus\{s\}$, $I(w)=\{t_\alpha:\alpha\in N(w^{-1})\}$, and $\mathrm{Cov}(v)=\{t_\alpha:\alpha\in\operatorname{cov}(v)\}$ for the cover reflections associated to the positive-root set of [[lem-cg-weak-parabolic-projection-and-cover-joins]] (4).

[F1] [[def-cg-sortable-element-skip-roots-and-cone]] (3),(4) and [[lem-cg-sortable-skips-basis-and-cover-decomposition]] (1),(2): skip roots obey the initial-letter recursion, form a basis, and define the cone by their nonnegative halfspaces.

[F2] [[lem-cg-sortable-skips-basis-and-cover-decomposition]] (3): the negative skip roots are $\{-\beta_t:t\in\mathrm{Cov}(v)\}$ and the positive ones $\{\beta_t:t\in ufs_c(v)\}$.

[F3] [[lem-cg-sortable-recursion-output-and-initial-choice-independence]] (1)-(5): $\pi_c$ is independent of the initial choices, is sortable-valued and below its input, fixes exactly the sortable elements, detects descent at an initial letter, and restricts to the projection of the restricted Coxeter element on $W_J$.

[F4] [[lem-cg-weak-parabolic-projection-and-cover-joins]] (1): $N(w_J^{-1})=N(w^{-1})\cap\Phi_{J,+}$, the prefix is greatest in $W_J$ below $w$, and the prefix map preserves order.

[F5] [[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (1),(2): the closed chambers tile $V$, their interiors are the components of the root-hyperplane complement, and the fundamental chamber is positive on every positive root and negative on every negative root in its interior.

[F6] [[lem-cg-reflection-representation-descends-and-root-norms]] (2): the action is $B$-preserving.

[F7] [[lem-cg-weak-order-prefix-property-and-left-translation]] (3) preserves and reflects order under left multiplication by $s$ between two elements above $s$. It also does so between two elements not above $s$, by applying (3) to their left multiples, which are above $s$.

[F8] [[lem-cg-weak-order-is-a-graded-partial-order]] (1)-(5): weak order is a partial order, every inequality is a chain of simple covers, it is inversion-set inclusion, and $s\le_Rw$ is equivalent to $e_s\in N(w^{-1})$. A cover deletes exactly one positive inversion root, by [[lem-cg-weak-parabolic-projection-and-cover-joins]], Proof 1.3.

[F9] [[thm-cg-weak-order-meet-semilattice-and-finite-lattice]] (2),(3): weak order is a lattice in finite type, and the join of two simple generators is the longest element of their parabolic.

[F10] [[lem-cg-uniform-omega-positive-and-aligned-sortability]] (3) : sortable parabolic prefixes are sortable for the restricted element.

[F11] [[lem-hh-dihedral-root-recurrence-and-root-sign]] (7): standard dihedral alternating words of length at most $m(s,t)$ are reduced in the ambient group. [[lem-cg-finite-dihedral-subsystems-and-canonical-roots]] (3) identifies the standard rank-two subgroup with the dihedral group of order $2m$. Its $2m$ elements have alternating representatives of length at most $m$ (the two length-$m$ words agree by the braid relation of [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (3)). Thus an alternating length-$m$ word is its longest element, and deleting its first $s$ gives a reduced length-$m-1$ alternating word starting with $t$.


[F12] [[def-cg-sortable-element-skip-roots-and-cone]] (1) defines decreasing selected blocks. [[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (1) computes them. Thus a sortable non-descent at initial $s$ selects no occurrence of $s$ and lies in $W_{J_s}$; in the descent case deleting the first selected $s$ preserves the per-letter initial-segment condition and gives $scs$-sortability of $sv$.

## Proof

1.1 Chamber signs. For $x=\rho(w)y$ with $y\in C^\circ$ and $\beta\in\Phi_+$, invariance gives $B(x,\beta)=B(y,\rho(w^{-1})\beta)$; its sign is negative exactly when $\beta\in N(w^{-1})$. Thus $wC\subseteq\mathrm{Cone}_c(v)$ exactly when every negative skip root $-\beta_t$ has $t\in I(w)$ and every positive skip root $\beta_t$ has $t\notin I(w)$. Closure extends the interior signs to the entire chamber. We use this dictionary throughout, so root-hyperplane geometry introduces no dependence on the final cone theorem. [F1, F2, F5, F6, F8, given]

1.2 The identity case. For any $c$, $\pi_c(w)=1$ implies $w=1$. Prove this by rank induction: if an initial $s$ is below $w$, descent detection excludes value $1$; otherwise $\pi_c(w)=\pi_{sc}(w_{J_s})$, so rank induction gives $w_{J_s}=1$. If $w\ne1$, a first letter $r$ of a reduced word for $w$ is a left descent and differs from $s$, hence $r\in J_s$ and $r\le_Rw_{J_s}$ by [F4], a contradiction. Conversely $\pi_c(1)=1$. The cone for $1$ is $C$, and $wC\subseteq C$ exactly when $w=1$ by disjoint chamber interiors. This is the base for the following inductions on (rank, length of the sortable element). [F1, F3, F4, F5, F8, induction, base]

1.3 We prove monotonicity by induction on (rank, $\ell(y)$), simultaneously for every Coxeter element and pair $x\le_Ry$. The base $y=1$ is immediate. It suffices to handle covers. First establish the auxiliary consequence under these inductive hypotheses: for any simple $t\le_Ry$, one has $t\le_R\pi_c(y)$. Choose initial $s$ of $c$. If $s=t$, descent detection proves this. If $s\not\le_Ry$, then $t\in J_s$ and $t\le_Ry_{J_s}$; rank induction gives $t=\pi_{sc}(t)\le_R\pi_{sc}(y_{J_s})=\pi_c(y)$, since every simple generator is sortable (its one selected occurrence is in the first block). [F3, F4, F8, F10, base, induction, ih]

1.4 Cover case with neither $x$ nor $y$ above $s$. The prefix map preserves $x_{J_s}\le_Ry_{J_s}$, and rank induction gives $\pi_{sc}(x_{J_s})\le_R\pi_{sc}(y_{J_s})$, the desired projections. No parabolic membership of $x,y$ is needed. If both are above $s$, left translation gives $sx\le_Rsy$ with the upper length smaller; length induction followed by [F7] gives $s\pi_{scs}(sx)\le_Rs\pi_{scs}(sy)$. [F3, F4, F7, ih]

2.1 Comparable criterion, neither element above initial $s$. Only the sortable $v$, not an arbitrary non-descent $w$, is asserted to belong to $W_{J_s}$ by [F12]. Its skip set is $\{e_s\}\cup C_{sc}(v)$. The $e_s$-inequality holds for $wC$ since $s\not\le_Rw$; all other inequalities involve subsystem roots and therefore depend only on $N(w_{J_s}^{-1})$ by [F4]. Consequently $wC\subseteq\mathrm{Cone}_c(v)$ is equivalent to $w_{J_s}C_{J_s}\subseteq\mathrm{Cone}_{sc}(v)$. Since $v\le_Rw$ gives $v\le_Rw_{J_s}$, rank induction identifies this with $\pi_{sc}(w_{J_s})=v$, the recursion for $\pi_c(w)$. [step 1.1, step 1.2, F1, F3, F4, F10, F12, ih]

2.2 Comparable criterion, both elements above $s$. Then $sv\le_Rsw$ by [F7], $sv$ is $scs$-sortable, and $\pi_c(w)=s\pi_{scs}(sw)$. Root transport gives $\mathrm{Cone}_c(v)=\rho(s)\mathrm{Cone}_{scs}(sv)$, so inclusion of $wC$ is equivalent to inclusion of $(sw)C$ in the latter cone. Induction on the strictly smaller length of $sv$ proves the equivalence with $\pi_{scs}(sw)=sv$, hence $\pi_c(w)=v$. [step 1.2, F1, F3, F6, F7, F10, F12, ih]

2.3 Auxiliary consequence when $s\le_Ry$ and $s\ne t$. Put $z=s\vee t$, the rank-two longest element by [F9]; then $z\le_Ry$, so $sz\le_Rsy$ by [F7]. In the rank-two system $sz$ has an alternating reduced word of length $m(s,t)-1$ beginning with $t$, by [F11], so it is sortable for $ts$, the restriction of $scs$ (where $s$ is final). Parabolic restriction and the fixed-point property give $\pi_{scs}(sz)=sz$. Since $\ell(sy)<\ell(y)$, length induction gives $sz\le_R\pi_{scs}(sy)$. Both sides are not above $s$: the left because $s(sz)=z$ lengthens, the right because it is below $sy$, which is not above $s$. Apply [F7] to their left multiples to obtain $z\le_Rs\pi_{scs}(sy)=\pi_c(y)$, hence $t\le_R\pi_c(y)$. This proves the auxiliary consequence for all simple $t$ and all $c$ under the stated inductive hypotheses. [step 1.3, F3, F7, F8, F9, F11, ih]

3.1 Comparable criterion, $v\not\ge_Rs$ and $w\ge_Rs$. Descent detection makes $\pi_c(w)\ne v$, while $e_s$ is a positive skip root of $v$ and interior points of $wC$ have negative pairing with it. Both sides fail. The fourth possibility $v\ge_Rs$, $w\not\ge_Rs$ is excluded by $v\le_Rw$. These cases prove (1) using only rank and sortable-length induction. [step 1.1, step 2.1, step 2.2, F1, F3, F8, F10, discharge-induction]

4.1 Mixed cover $x\not\ge_Rs$, $y\ge_Rs$. Their inversion sets differ by one root, necessarily $e_s$ by [F8]; deleting its cover reflection gives $x=sy$. Put $u=\pi_{scs}(x)$. It is below $x$ and not above $s$. The auxiliary consequence in steps 1.3 and 2.3, applied to $scs$ at the present upper element $y$, gives $\pi_{scs}(y)\ge_Rs$, so it differs from $u$. Comparable criterion (1), already proved independently, gives $xC\subseteq\mathrm{Cone}_{scs}(u)$ and $yC\not\subseteq\mathrm{Cone}_{scs}(u)$, since $u\le_Rx\le_Ry$. The sign dictionary and the single new inversion $e_s$ show that the skip inequality which changes from satisfied on $xC$ to violated on $yC$ must have positive normal $e_s$. Thus $e_s\in C_{scs}(u)$, and transport gives $-e_s\in C_c(su)$; the negative-skip/cover dictionary makes $s$ a cover reflection of $su=\pi_c(y)$. Therefore $u=s\pi_c(y)<_R\pi_c(y)$. Length induction at $x$, together with parabolic restriction, gives $\pi_c(x)=\pi_{sc}(x_{J_s})=\pi_{scs}(x_{J_s})\le_Ru$. Hence $\pi_c(x)\le_R\pi_c(y)$. This proves (2). The separating wall here is $H_{e_s}$; no identification with $H_{\rho(x)e_s}$ is used. [step 1.1, step 3.1, step 1.3, step 2.3, step 1.4, F1, F2, F3, F4, F8, ih, discharge-induction]

5.1 Greatest sortable element. The projection is sortable and below $w$ by [F3]. If sortable $v\le_Rw$, monotonicity gives $v=\pi_c(v)\le_R\pi_c(w)$. Antisymmetry proves uniqueness. [step 4.1, F3, F8]

6.1 Full criterion: induct again on (rank, $\ell(v)$), now with arbitrary $w$. The base $v=1$ is step 1.2. Cases where neither element is above initial $s$, or both are above it, use exactly the sign/prefix and conjugation computations in steps 2.1-2.2, with this full induction replacing the comparable induction; no comparison is needed. The case $v\not\ge_Rs$, $w\ge_Rs$ is step 3.1. In the remaining case $v\ge_Rs$, $w\not\ge_Rs$, descent detection excludes equality. Monotonicity gives $\pi_{scs}(sw)\ge_R\pi_{scs}(s)=s$, since $sw\ge_Rs$; but $sv\not\ge_Rs$. The projections therefore differ. Full induction on the shorter sortable element $sv$ gives $(sw)C\not\subseteq\mathrm{Cone}_{scs}(sv)$, hence $wC\not\subseteq\mathrm{Cone}_c(v)$ by conjugation. This proves (3) without applying the comparable criterion to an unverified comparable pair. [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1, F1, F3, F6, F8, ih, discharge-induction]

6.2 Parabolic compatibility. Since $w_J\le_Rw$, monotonicity and restriction give $\pi_{c|_J}(w_J)=\pi_c(w_J)\le_R\pi_c(w)$, hence it is below $\pi_c(w)_J$. Conversely $\pi_c(w)\le_Rw$ implies $\pi_c(w)_J\le_Rw_J$. This prefix is $c|_J$-sortable by [F10], so applying monotonicity of $\pi_{c|_J}$ gives $\pi_c(w)_J\le_R\pi_{c|_J}(w_J)$. Antisymmetry proves (4). [step 4.1, step 5.1, F3, F4, F8, F10]

7.1 Clauses (1)-(4) have been proved in the order comparable criterion, monotonicity, greatest/full criterion, and parabolic compatibility. All choices use finite words, roots or chambers and no Choice is invoked. [step 3.1, step 4.1, step 5.1, step 6.1, step 6.2, discharge-induction] ∎
