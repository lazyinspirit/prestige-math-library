---
id: "thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions"
kind: "theorem"
title: "Skip bases, cover roots, greatest-sortable projections, and the chamber union of each cone"
status: published
origin: pipeline
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 26
deps:
  - def-cg-sortable-element-skip-roots-and-cone
  - lem-cg-sortable-recursion-output-and-initial-choice-independence
  - lem-cg-sortable-skips-basis-and-cover-decomposition
  - lem-cg-sortable-cone-criterion-and-projection-monotonicity
  - thm-cg-finite-chamber-tiling-and-coset-face-identification
  - thm-cg-weak-order-meet-semilattice-and-finite-lattice
  - thm-cg-finite-parabolic-longest-element-and-opposition
  - def-cg-left-right-weak-order-and-descents
  - def-cg-initial-letter-sortable-projection
  - lem-cg-weak-parabolic-projection-and-cover-joins
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "sections 5-7: Propositions 5.1-5.4, Lemma 5.9, Lemma 6.6, Proposition 6.7, Corollary 6.2, Theorem 6.3, Proposition 6.13, and Theorems 7.1, 7.3, 7.4, pp. 25-40"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 3, pp. 8-11 (Theorems 1.1 and 1.2 and Proposition 3.7 in the finite case)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 3.2, pp. 70-75 (the lattice property of weak order); the chamber-cone correspondence is in Reading--Speyer, Theorem 6.3"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type, $c$ a reduced Coxeter word, $\pi_c$ the sortable projection of [[def-cg-initial-letter-sortable-projection]], $C^r_c(v)$ and $\mathrm{Cone}_c(v)$ the skip roots and cone of a $c$-sortable element $v$, and let $wC$ denote the closed chambers of the finite reflection arrangement ([[def-cg-sortable-element-skip-roots-and-cone]], [[thm-cg-finite-chamber-tiling-and-coset-face-identification]]). Put $\mathrm{Cov}(v):=\{t_\alpha:\alpha\in\operatorname{cov}(v)\}$ for its cover reflections, with $\operatorname{cov}(v)$ the positive-root set of [[lem-cg-weak-parabolic-projection-and-cover-joins]] (4). Then:

**(1) The projection.** $\pi_c\colon W\to W$ is well defined, independent of all initial-letter choices, takes values in the $c$-sortable elements, is idempotent and order preserving, and $\pi_c(w)$ is the unique greatest $c$-sortable element below $w$ in the right weak order, for every $w\in W$.

**(2) Skip basis and cover roots.** For every $c$-sortable $v$, $C_c(v)=\{C^r_c(v):r\in S\}$ is a basis of $V$, independent of the reduced Coxeter word for $c$, and its negative elements are exactly the negatives of the positive roots of the cover reflections:
$$\{C\in C_c(v):C\in\Phi_-\}=\{-\beta_t:t\in\mathrm{Cov}(v)\}.$$
In particular the number of negative skip roots of $v$ equals $|\mathrm{Cov}(v)|$, the number of elements covered by $v$ in the weak order.

**(3) Chamber unions.** For every $c$-sortable $v$,
$$\mathrm{Cone}_c(v)=\bigcup_{w\in W:\ \pi_c(w)=v} wC,$$
the union of exactly those closed chambers of the finite reflection arrangement whose group element projects to $v$. Thus each group-theoretic fiber indexes the closed chambers whose union is the corresponding cone.

**(4) Parabolic compatibility and abstentions.** $\pi_{c|_J}(w_J)=\pi_c(w)_J$ for every $J\subseteq S$ and $w\in W$, where $w_J$ is the $W_J$-prefix. Neither the traditional Cambrian congruence (the least lattice congruence forcing the oriented rank-two contractions) nor the noncrossing-partition bijection is used or asserted here.

## Facts & Assumptions

**Given:** a Coxeter system $(W,S)$ of finite type, a Coxeter element $c$, the projection $\pi_c$, the skip roots $C^r_c(v)$, the sets $\mathcal A_c(v),\mathcal B_c(v)$ and the cone $\mathrm{Cone}_c(v)$ of a $c$-sortable element $v$, the cover-reflection set $\mathrm{Cov}(v)=\{t_\alpha:\alpha\in\operatorname{cov}(v)\}$, the closed chambers $wC$ and the right weak order $\le_R$.

[F1] [[lem-cg-sortable-recursion-output-and-initial-choice-independence]] (1),(2),(3),(4),(5): $\pi_c$ is well defined and independent of the initial-letter choices, $\pi_c(w)$ is $c$-sortable, $\pi_c(w)\le_Rw$ with equality if and only if $w$ is $c$-sortable, $\pi_c$ is idempotent, $w\ge_Rs$ if and only if $\pi_c(w)\ge_Rs$ for initial $s$, and $\pi_c$ restricts to $\pi_{c|_J}$ on $W_J$.

[F2] [[lem-cg-sortable-cone-criterion-and-projection-monotonicity]] (1),(2),(3),(4): for comparable pairs $\pi_c(w)=v\iff wC\subseteq\mathrm{Cone}_c(v)$; $\pi_c$ is order preserving for $\le_R$; $\pi_c(w)$ is the unique greatest $c$-sortable element below $w$ and $\pi_c(w)=v\iff wC\subseteq\mathrm{Cone}_c(v)$ for every $c$-sortable $v$ and every $w$; and $\pi_{c'}(w_J)=\pi_c(w)_J$.

[F3] [[lem-cg-sortable-skips-basis-and-cover-decomposition]] (1),(2),(3): $C^r_c(v)=\pm\beta_t$, the set $C_c(v)=\{C^r_c(v):r\in S\}$ is a basis of $V$ independent of all choices, and $\mathcal A_c(v)=\{-\beta_t:t\in\mathrm{Cov}(v)\}$, $\mathcal B_c(v)=\{\beta_t:t\in ufs_c(v)\}$ with $fsc(v)=\mathrm{Cov}(v)$.

[F4] [[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (1),(2): the closed chambers $wC$ tile $V$ and are the closures of the connected components of the complement of the root hyperplanes; there are only finitely many of them in finite type; and the walls of $wC$ are the hyperplanes $H_{\rho(w)e_s}$.

[F5] [[def-cg-sortable-element-skip-roots-and-cone]] (3),(4): $\mathrm{Cone}_c(v)=\{x:B(x,C^r_c(v))\ge0\text{ for every }r\in S\}$ is the intersection of the halfspaces with normals the skip roots.

[F6] [[lem-cg-weak-parabolic-projection-and-cover-joins]] (4): the positive-root set $\operatorname{cov}(w)$ consists of roots $\alpha\in N(w^{-1})$ with $t_\alpha w=ws$ and $\ell(ws)=\ell(w)-1$ for some $s\in S$, together with the cover-join formulas (i) and (ii).

## Proof

1.1 Clause (1): [F1] gives that $\pi_c$ is well defined, independent of the initial-letter choices, idempotent, descent detecting and equal to the restriction of $\pi_{c|_J}$ on parabolics; [F2] gives that $\pi_c$ is order preserving and that $\pi_c(w)$ is the unique greatest $c$-sortable element below $w$. Clause (1) is exactly the conjunction of these statements. [F1, F2]

1.2 Clause (2): [F3] states that $C_c(v)$ is a basis of $V$ independent of the reduced Coxeter word for $c$ and of the recursion choices, and that the negative elements of the basis are exactly the negatives of the positive roots of the cover reflections, $\mathcal A_c(v)=\{-\beta_t:t\in\mathrm{Cov}(v)\}$; since the map $t\mapsto\beta_t$ is injective, the number of negative skip roots equals $|\mathrm{Cov}(v)|$, the number of cover reflections. [F3]

1.3 Clause (3), inclusion $\supseteq$: if $\pi_c(w)=v$ then $wC\subseteq\mathrm{Cone}_c(v)$ by [F2] (full criterion), so each such closed chamber is contained in the cone. [F2]

1.4 Clause (4): the parabolic compatibility $\pi_{c|_J}(w_J)=\pi_c(w)_J$ is [F2] (parabolic compatibility), and the abstention clause is a statement about what the proof does not use: no lattice congruence, no forcing of oriented rank-two contractions and no noncrossing-partition bijection is invoked anywhere in clauses (1)-(4), whose inputs are the recursion [F1], the cone criterion and monotonicity [F2], the skip basis [F3], the chamber tiling [F4] and the cover-root dictionary [F6]. [F1, F2, F3, F4, F6]

2.1 Clause (3), reverse inclusion. Since the skip normals form a basis, their nonnegative halfspaces define a full-dimensional cone. A chamber whose interior meets its interior is contained in it: each bounding root hyperplane has constant sign on that open chamber, and closure preserves its inequalities. Choose one interior point $y$ avoiding all root hyperplanes; it exists because a finite union of proper hyperplanes cannot contain an open ball. For any $x$ in the cone, the points $x+\lambda(y-x)$ lie in its interior for $0<\lambda\le1$, and each root hyperplane excludes at most one value of $\lambda$ because it does not contain $y$. For each integer $n\ge1$, let $k_n$ be the least integer $k>n$ such that $x+k^{-1}(y-x)$ avoids all root hyperplanes. Finitely many values are excluded, so $k_n$ exists; these explicitly chosen points approach $x$ without any countable choice principle. Every such point lies in an open chamber contained in the cone, whose label projects to $v$ by [F2]. Finitely many chambers occur, so one such closed chamber contains a subsequence approaching $x$ and therefore contains $x$. Together with step 1.3 this proves the union equality. Interior points of the cone which happen to lie on additional arrangement hyperplanes require this generic approximation; they are not asserted to be in open chambers. [step 1.3, F2, F3, F4, F5]

3.1 Clauses (1)-(4) are proved. No Choice is used: the approximation points are specified by least integers, and the remaining choices are single existential instantiations. [step 1.1, step 1.2, step 1.3, step 2.1, step 1.4, given, algebra] ∎
