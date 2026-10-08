---
id: prop-sl2-r-does-not-have-property-t
kind: proposition
title: SL2(R) does not have property (T)
status: draft
origin: pipeline
deps:
  - def-kazhdans-property-t
  - def-kazhdan-pair-and-kazhdan-constant
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-normalized-principal-series-i-epsilon-nu
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - thm-unitarity-of-the-sl2-complementary-series
  - cor-complementary-series-converge-to-the-trivial-representation
  - def-axiom-of-choice
  - def-hilbert-direct-sum-of-unitary-representations
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC as in the normalized principal-series and complementary-series model and Hilbert direct-sum interfaces. The parameter sequence is explicit; no additional choice is used."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Definitions 1.1.1 and 1.1.3, printed pp. 32–33: almost-invariant vectors, property (T), and Kazhdan pairs."
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.3, Theorem 9.3, printed p. 52: the spherical complementary series occurs for real parameter 0<|s|<1 and s is equivalent to -s. The explicit normalized compact-picture proof and coefficient limit are local suppliers."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Lecture 2, §II, paragraph after Theorem 0.9, printed p. 5/PDF p. 12: states that SL2(R) does not have property (T), without a free-lattice proof or complementary-series argument there. The proof used here is local."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The group
$\mathrm{SL}_2(\mathbb R)$ does not have property (T)
([[def-kazhdans-property-t]]). Explicitly, for every compact
$Q\subseteq\mathrm{SL}_2(\mathbb R)$ and every $\varepsilon>0$ there is
$\nu\in(0,1)$ such that the spherical complementary-series representation
$I_{0,\nu}$ ([[def-normalized-principal-series-i-epsilon-nu]],
[[thm-unitarity-of-the-sl2-complementary-series]]) has no nonzero invariant
vector but has a $(Q,\varepsilon)$-invariant unit vector
([[def-almost-invariant-vectors-for-a-unitary-representation]]), namely its
$K$-fixed vector $f_0$ for $\nu$ sufficiently close to $1$. Consequently no
pair $(Q,\varepsilon)$ with $Q$ compact is a Kazhdan pair
([[def-kazhdan-pair-and-kazhdan-constant]]).

## Facts & Assumptions

**Given:** AC, $G=\mathrm{SL}_2(\mathbb R)$ with its standard topology, a compact set $Q\subseteq G$, and $\varepsilon>0$.

[F1] For $0<\nu<1$, the completion of $I_{0,\nu}$ in the normalized complementary-series form is an irreducible strongly continuous unitary representation, and $f_0=1$ has norm one ([[thm-unitarity-of-the-sl2-complementary-series]]).

[F2] The spherical coefficient $\varphi_\nu(g)=\langle\Pi_\nu(g)f_0,f_0\rangle$ converges to $1$ uniformly on each compact subset of $G$ as $\nu\uparrow1$ ([[cor-complementary-series-converge-to-the-trivial-representation]]).

[F3] For a unitary representation and a unit vector $\xi$, $\|\pi(g)\xi-\xi\|^2=2(1-\operatorname{Re}\langle\pi(g)\xi,\xi\rangle)$; this is the expansion of the squared Hilbert norm and uses $\|\pi(g)\xi\|=1$.

[F4] A pair $(Q,\varepsilon)$ is Kazhdan if every strongly continuous unitary representation with a $(Q,\varepsilon)$-invariant unit vector has a nonzero invariant vector ([[def-kazhdan-pair-and-kazhdan-constant]]).

[F5] A strongly continuous unitary representation has almost invariant vectors exactly when every compact test set and every positive tolerance admit a near-invariant unit vector ([[def-almost-invariant-vectors-for-a-unitary-representation]]).

[F6] Property (T) requires every strongly continuous unitary representation with almost invariant vectors to have a nonzero invariant vector ([[def-kazhdans-property-t]]).

[F7] The Hilbert direct sum carries the componentwise unitary action, and a vector is invariant exactly when each coordinate is invariant ([[def-hilbert-direct-sum-of-unitary-representations]]).

[F8] In the smooth spherical compact picture, $f_{2j}(k_\theta)=e^{2ij\theta}$ has right $K$-character $k_\phi\mapsto e^{2ij\phi}$ for every $j\in\mathbb Z$. In the complementary completion at $0<\nu<1$, its squared norm is $B_\nu(f_{2j},f_{2j})=a_{2j}(\nu)>0$, so each of these distinct smooth $K$-lines survives as a nonzero line. This transfers the characters, not the ordinary $L^2(K)$ norm, to the positive weighted completion ([[def-normalized-principal-series-i-epsilon-nu]], [[lem-k-type-decomposition-of-the-sl2-principal-series]], [[thm-unitarity-of-the-sl2-complementary-series]]).

[A1] AC is assumed in the normalized principal-series, complementary-series, and Hilbert direct-sum interfaces ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** use compact-uniform convergence of the normalized spherical coefficient, then form one direct-sum representation with almost invariant vectors and no invariant vector.

1.1 If $Q=\varnothing$, take $\nu=1/2$ and $f_0$; the invariance condition is vacuous. Otherwise [F2] lets us choose $0<\nu<1$ sufficiently close to $1$ that $\sup_{g\in Q}|\varphi_\nu(g)-1|<\varepsilon^2/2$. By [F1], $f_0$ is a unit vector in $I_{0,\nu}$, and [F3] gives $\|\Pi_\nu(g)f_0-f_0\|^2=2(1-\operatorname{Re}\varphi_\nu(g))\le2|1-\varphi_\nu(g)|<\varepsilon^2$ for every $g\in Q$. Thus the promised fixed-parameter vector is $(Q,\varepsilon)$-invariant. [F1, F2, F3, F5, choose, algebra]

2.1 The invariant subspace of each $I_{0,\nu}$ is closed and $G$-invariant. By irreducibility in [F1], it is either zero or the whole representation; the latter would make every $K$-action the identity, contrary to the nonzero even-weight lines in [F8]: for example $f_2$ has positive norm and $\Pi_\nu(k_{\pi/2})f_2=-f_2$. Hence every fixed $I_{0,\nu}$ has no nonzero invariant vector. Together with step 1.1 and [F4], this shows that no compact $(Q,\varepsilon)$ is a Kazhdan pair. [F1, F4, F8, step 1.1, algebra]

3.1 Set $\nu_j=1-1/(j+2)$ for $j\ge1$ and let $\Pi=\widehat\bigoplus_{j\ge1}I_{0,\nu_j}$. By [F7] this is a strongly continuous unitary representation. For each compact $Q$ and $\varepsilon>0$, [F2] and [F3] show that the unit vector $f_0$ from [F1] in a sufficiently late summand has displacement less than $\varepsilon$ on $Q$; therefore $\Pi$ has almost invariant unit vectors by [F5]. An invariant vector in $\Pi$ would have every coordinate invariant, so step 2.1 forces it to be zero. By [F6], this single representation witnesses that $G$ fails property (T). [F1, F2, F3, F5, F6, F7, A1, step 2.1, construct] ∎

## Remarks

No fixed $I_{0,\nu}$ is asserted to have almost invariant vectors or to weakly contain the trivial representation; the property-(T) failure is witnessed by the direct sum of a cofinal parameter sequence.

