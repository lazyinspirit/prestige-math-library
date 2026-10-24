---
id: cex-sl2-r-complementary-series-destroys-property-t
kind: counterexample
title: The spherical complementary series destroys property (T) for SL2(R)
status: published
origin: pipeline
deps:
  - prop-sl2-r-does-not-have-property-t
  - cor-complementary-series-converge-to-the-trivial-representation
  - thm-unitarity-of-the-sl2-complementary-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - def-fell-topology-on-the-unitary-dual
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-kazhdans-property-t
  - def-axiom-of-choice
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the in-run SL2(R) principal/complementary-series and property-(T) suppliers. No further choice is used."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.3, Theorem 9.3, printed p. 52: the spherical complementary series occurs for real parameter 0<|s|<1."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Lecture 2, §II, paragraph after Theorem 0.9, printed p. 5/PDF p. 12: states that SL2(R) does not have property (T), without a free-lattice proof or complementary-series argument there. The proof used here is local."
---

## Statement refuted

$\mathrm{SL}_2(\mathbb R)$ has property (T) ([[def-kazhdans-property-t]]).

## Facts & Assumptions

[F1] For $0<\nu<1$, the completion of $I_{0,\nu}$ in the normalized complementary-series form is an irreducible strongly continuous unitary representation, and $f_0=1$ has norm one ([[thm-unitarity-of-the-sl2-complementary-series]]).

[F2] The smooth even Fourier vectors $f_{2j}$ have pairwise distinct right $K$-characters $e^{2ij\phi}$. For $0<\nu<1$, the normalized complementary form has $B_\nu(f_{2j},f_{2j})=a_{2j}(\nu)>0$, so these nonzero $K$-lines survive in its weighted Hilbert completion; no ordinary-$L^2$ norm is transferred ([[lem-k-type-decomposition-of-the-sl2-principal-series]], [[thm-unitarity-of-the-sl2-complementary-series]]).

[F3] The normalized spherical coefficient $\varphi_\nu(g)=\langle\Pi_\nu(g)f_0,f_0\rangle$ tends to $1$ uniformly on compact sets as $\nu\uparrow1$ ([[cor-complementary-series-converge-to-the-trivial-representation]]).

[F4] The classes $[I_{0,\nu}]$ converge to the trivial class in the Fell topology as $\nu\uparrow1$ ([[cor-complementary-series-converge-to-the-trivial-representation]], [[def-fell-topology-on-the-unitary-dual]]).

[F5] For the unit vector $f_0$ in a unitary representation, $\|\Pi_\nu(g)f_0-f_0\|^2=2(1-\operatorname{Re}\varphi_\nu(g))$ by expansion of the squared norm.

[F6] The A-page proposition proves directly that $G$ fails property (T) by one direct-sum representation built from a cofinal sequence of complementary-series parameters ([[prop-sl2-r-does-not-have-property-t]], [[def-kazhdans-property-t]]).

[F7] A unit vector is $(Q,\varepsilon)$-invariant when its displacement is strictly less than $\varepsilon$ at every point of $Q$ ([[def-almost-invariant-vectors-for-a-unitary-representation]]).

[A1] AC is the principle that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); it is assumed by the in-run representation suppliers.

## Counterexample

**Given:** AC, $G=\mathrm{SL}_2(\mathbb R)$, and the family of parameters $0<\nu<1$.

**Proof technique:** use the compact-uniform spherical coefficient limit and the earlier A-page failure theorem.

1.1 By [F1], each fixed $I_{0,\nu}$ is irreducible and strongly continuous unitary; [F2] gives a nonzero vector $f_2$ with $\Pi_\nu(k_{\pi/2})f_2=-f_2$, so it is not the trivial representation. Its fixed subspace is closed and invariant, hence irreducibility implies that it is zero. [F1, F2, algebra]

1.2 Fix any compact $Q\subseteq G$ and $\varepsilon>0$. If $Q=\varnothing$, every unit vector is $(Q,\varepsilon)$-invariant. If $Q$ is nonempty and compact, [F3] lets us choose $\nu$ close enough to $1$ that $\sup_{g\in Q}|\varphi_\nu(g)-1|<\varepsilon^2/2$; [F1] supplies the unit vector $f_0$, and [F5] gives $\|\Pi_\nu(g)f_0-f_0\|<\varepsilon$ for every $g\in Q$. Thus the same fixed-parameter family has nontrivial representations with near-invariant vectors for every compact test and tolerance. [F1, F3, F5, F7, choose, algebra]

2.1 By [F4], the nontrivial classes from step 1.1 converge to the trivial class in the Fell topology as $\nu\uparrow1$. No fixed $I_{0,\nu}$ is asserted to weakly contain the trivial representation; the convergence is a parameter-family statement. [F4, step 1.1]

3.1 The A-page proposition in [F6] constructs the direct sum over an explicit cofinal sequence $\nu_j\uparrow1$, which has almost invariant vectors and no invariant vector; hence $G$ fails property (T), refuting the statement above. AC is inherited as in [A1]. [F6, A1, step 1.1, step 1.2, step 2.1] ∎

