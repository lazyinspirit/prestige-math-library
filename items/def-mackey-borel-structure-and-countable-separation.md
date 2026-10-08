---
id: def-mackey-borel-structure-and-countable-separation
kind: definition
title: Mackey Borel structure and countable separation of the unitary dual
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-borel-sigma-algebra
  - def-countable
  - def-countable-choice
  - def-hausdorff-space
  - def-locally-compact-space
  - def-measurable-space
  - def-separable-space
  - def-second-countable-space
  - def-strongly-continuous-unitary-representation
  - def-unitary-dual-of-a-locally-compact-group
  - def-hilbert-space
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - def-complex-metric-convergence-and-continuity
  - lem-finite-choice
  - lem-countable-iff-surjection-from-n
  - lem-finite-powers-of-countable-sets-are-countable
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-countable-union-of-countable
  - thm-rational-points-and-boxes-in-rn
  - thm-separable-hilbert-space-has-a-countable-orthonormal-basis
  - thm-second-countable-implies-separable
  - thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: >-
  AC is inherited from the unitary-dual set construction, fixes the countable
  family of carrier models, and implies AC_omega. Countable choice supplies
  second-countable separability, countable unions in the rational-span
  argument, and the Fourier-coefficient Hilbert isomorphisms. No family of
  irreducible representations is selected; carrier transport is done for one
  arbitrary class at a time.
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 6, §6.C.b, Definitions 6.C.4–6.C.5 and Remark 6.C.6(2), printed pp. 195–196 (PDF pp. 194–195; comparison only—the source also cites Dixmier for Polishness, which this item does not assert); Appendix A.B, printed p. 404 (PDF p. 403)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---
## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a second-countable locally compact Hausdorff group ([[def-second-countable-space]], [[def-locally-compact-space]], [[def-hausdorff-space]]), and let $\widehat G$ be its unitary dual, the set of unitary-equivalence classes of irreducible strongly continuous unitary representations ([[def-unitary-dual-of-a-locally-compact-group]], [[def-strongly-continuous-unitary-representation]]). For each $n\in\{1,2,\ldots,\aleph_0\}$ fix a Hilbert carrier $H_n$ of dimension $n$, meaning it admits a complete orthonormal basis indexed by a set of cardinality $n$. Let $\operatorname{Irr}_n(G)$ be the space of irreducible strongly continuous unitary representations of $G$ on $H_n$. Give $\operatorname{Irr}_n(G)$ the topology of weak uniform convergence on compact subsets: a net $\pi_\alpha$ converges to $\pi$ when, for every $\xi,\eta\in H_n$, the functions $g\mapsto\langle\pi_\alpha(g)\xi,\eta\rangle$ converge uniformly to $g\mapsto\langle\pi(g)\xi,\eta\rangle$ on every compact subset of $G$. Give $\mathscr I(G):=\bigsqcup_{1\le n\le\aleph_0}\operatorname{Irr}_n(G)$ the sum topology and its Borel sigma-algebra ([[def-borel-sigma-algebra]]), and let $q:\mathscr I(G)\to\widehat G$ send each representation to its equivalence class. Every irreducible representation has a separable carrier, as proved below, so $q$ is onto. The **Mackey Borel structure** on $\widehat G$ is the quotient sigma-algebra

$$\mathcal B_M(\widehat G):=\{E\subseteq\widehat G:q^{-1}(E)\text{ is Borel in }\mathscr I(G)\}.$$

A Borel space $(X,\mathcal B)$ ([[def-measurable-space]]) is **countably separated** if it has a countable family $\mathcal S\subseteq\mathcal B$ such that for any distinct $x,y\in X$, some $S\in\mathcal S$ contains exactly one of $x,y$. In particular, “the Mackey dual is countably separated” means that $(\widehat G,\mathcal B_M(\widehat G))$ has such a family. No standard-Borel or pure-state-quotient claim is part of this definition.

## Facts & Assumptions

[A1] AC is the choice-function axiom: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] AC implies countable choice, written $\mathrm{AC}_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F2] Under $\mathrm{AC}_\omega$, every second-countable space has an at-most-countable dense subset ([[def-second-countable-space]], [[thm-second-countable-implies-separable]]).

[F3] A strongly continuous unitary representation has continuous orbit maps; irreducibility means the Hilbert space is nonzero and has no nonzero proper closed invariant subspace ([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]).

[F4] Under the standard identification $\mathbb C\cong\mathbb R^2$, $\mathbb Q+i\mathbb Q$ is countable and dense; finite powers of countable sets are countable, and countable unions of countable sets are countable under $\mathrm{AC}_\omega$ ([[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]], [[def-complex-metric-convergence-and-continuity]], [[thm-rational-points-and-boxes-in-rn]], [[lem-finite-powers-of-countable-sets-are-countable]], [[thm-countable-union-of-countable]], [[lem-finite-choice]]).

[F5] A topological space is separable if it has an at-most-countable dense subset ([[def-separable-space]]).

[F6] “Countable” means at most countable, and every nonempty at-most-countable set is the range of a sequence ([[def-countable]], [[lem-countable-iff-surjection-from-n]]).

[F7] A Hilbert space with a dense sequence has a finite or countable orthonormal basis; under countable choice the Fourier coefficient map for a complete orthonormal basis is a unitary onto $\ell^2$ of its index set. A carrier of dimension $n$ has a complete orthonormal basis indexed by a set of cardinality $n$ ([[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F8] The coordinate vectors $e_i$ form an orthonormal family in $\ell^2(I,\mathbb C)$ ([[def-square-summable-family-on-an-arbitrary-index-set]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F9] Every square-summable family has finite-coordinate truncations converging in norm, by choosing a finite set that makes the omitted square-sum arbitrarily small ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F10] The unitary dual is the set of unitary-equivalence classes of irreducible strongly continuous unitary representations ([[def-unitary-dual-of-a-locally-compact-group]]).

[F11] A Borel sigma-algebra is the sigma-algebra generated by the open sets, and a Borel space is a measurable space equipped with a sigma-algebra ([[def-borel-sigma-algebra]], [[def-measurable-space]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a second-countable locally compact Hausdorff group $G$, its unitary dual, and the standard carrier spaces in the definition.

1.1 On the one-dimensional carrier $H_1$, the constant map $g\mapsto I_{H_1}$ is a strongly continuous unitary representation: it is a homomorphism and every orbit map is constant. Its only closed linear subspaces are $\{0\}$ and $H_1$, so it is irreducible; consequently both $\widehat G$ and $\mathscr I(G)$ are nonempty. [F3, construct]

1.2 Let $\pi$ be irreducible on a nonzero Hilbert space $H$ and fix $0\ne\xi\in H$. The closed span $K=\overline{\operatorname{span}}\{\pi(g)\xi:g\in G\}$ is nonzero and invariant, because $\pi(h)$ maps the orbit bijectively to itself by $\pi(h)\pi(g)\xi=\pi(hg)\xi$ and is unitary; thus $K=H$ by [F3]. By [A1, F1, F2], choose an at-most-countable dense set $D\subseteq G$. Continuity of $g\mapsto\pi(g)\xi$ implies $\{\pi(d)\xi:d\in D\}$ is dense in the orbit: the inverse image of any neighborhood of $\pi(g)\xi$ is a neighborhood of $g$ and meets $D$. The complex span of this countable orbit is dense in $H$. By [F4], its finite $\mathbb Q+i\mathbb Q$-linear combinations form an at-most-countable set $V$. They are dense in the complex span: for any finite sum $\sum_{j=1}^m c_j\pi(d_j)\xi$ and $\varepsilon>0$, choose $r_j\in\mathbb Q+i\mathbb Q$ with $|c_j-r_j|<\varepsilon/(m(1+\|\pi(d_j)\xi\|))$; the triangle inequality makes the resulting rational-complex sum differ by less than $\varepsilon$. Thus $V$ is a countable dense subset of $H$, so $H$ is separable by [F5]. [A1, F1, F2, F3, F4, F5]

2.1 The set $V$ in step 1.2 is nonempty because it contains the empty sum $0$. By [F6], there is a sequence with range $V$; [F7], using the countable choice supplied by [A1, F1], gives a finite or countable orthonormal basis $E$ of $H$ and a unitary Fourier-coefficient map $\Phi:H\to\ell^2(E,\mathbb C)$. Since $H\ne0$, $E$ is nonempty, so its cardinal is some $n\in\{1,2,\ldots,\aleph_0\}$. The coordinate vectors give $\ell^2(E,\mathbb C)$ a complete orthonormal basis by [F8, F9]; a complete orthonormal basis of $H_n$ has the same cardinality $n$ by [F7]. Reindex these two bases by bijections with $n$ and apply the Fourier-coefficient theorem [F7] to obtain a unitary $R:\ell^2(E,\mathbb C)\to H_n$. Then $U:=R\Phi$ is unitary, and $\widetilde\pi(g):=U\pi(g)U^{-1}$ is irreducible and strongly continuous: conjugation preserves invariant closed subspaces and preserves orbit-map norm continuity. Hence $\widetilde\pi\in\operatorname{Irr}_n(G)$ and $q(\widetilde\pi)=[\pi]$, so $q$ is onto. [A1, F1, F3, F6, F7, F8, F9, F10, step 1.2]

3.1 The collection $\mathcal B_M(\widehat G)=\{E\subseteq\widehat G:q^{-1}(E)\in\mathcal B(\mathscr I(G))\}$ is a sigma-algebra: inverse images preserve the whole set, complements, and countable unions. Thus it is the quotient Borel structure specified in the definition. A Borel space is countably separated exactly when a countable family of its Borel sets separates every pair of distinct points; applying this definition to $(\widehat G,\mathcal B_M(\widehat G))$ gives the stated meaning, without asserting that it is countably separated or standard Borel. [F10, F11, step 2.1] ∎
