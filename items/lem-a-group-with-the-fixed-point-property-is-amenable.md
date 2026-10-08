---
id: lem-a-group-with-the-fixed-point-property-is-amenable
kind: lemma
title: The fixed point property implies amenability
status: draft
origin: pipeline
dependency_level: 6
proof_strategy: direct
deps:
  - def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group
  - lem-an-invariant-mean-produces-a-reiter-net
  - lem-a-reiter-net-has-an-invariant-mean-cluster-point
  - def-amenable-locally-compact-group
  - def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
  - def-locally-convex-topological-vector-space
  - thm-banach-alaoglu
  - def-weak-star-topology
  - def-axiom-of-choice
  - thm-ultrafilter-lemma
  - def-dual-space-of-a-normed-space
  - def-topological-vector-space-for-local-convexity
  - def-compact-space
  - thm-closed-subspace-of-a-compact-space-is-compact
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - def-reiter-condition-p1
axiom_use: Assume AC. It is used through the ultrafilter lemma for Banach–Alaoglu compactness of the weak-star dual ball and for the Reiter-net cluster-point result; the state-space construction and fixed-point action use no further choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press, 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G.1, Remark G.1.6 and Theorem G.1.7, fixed-point property implication (ii) to amenability (printed pp. 448–449; author-hosted PDF pp. 454–455)"
---

## Statement

Assume AC. Let $G$ be a locally compact Hausdorff group with the fixed point
property: every continuous affine action of $G$ on a nonempty compact convex
subset of a Hausdorff locally convex topological vector space has a fixed point. Then
$G$ is amenable ([[def-amenable-locally-compact-group]]).

## Facts & Assumptions

**Given:** AC, an LCH group $G$, and the fixed point property in the Statement.

[A1] AC is assumed in the choice-function form ([[def-axiom-of-choice]]).

[F1] $X:=\mathrm{UCB}(G)$ consists of actual bounded continuous functions with the supremum norm; it is invariant under left translations, and the orbit map $x\mapsto L_x\psi$ is norm-continuous for each $\psi\in X$ ([[def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group]]).

[F2] Complex conjugation, real and imaginary parts, and modulus have their coordinate definitions and standard modulus laws ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F3] The continuous dual $X^*$ consists of bounded linear functionals with the dual norm; the weak-star topology is the initial topology of the evaluation maps $m\mapsto m(\psi)$ and has a finite-evaluation neighborhood basis ([[def-dual-space-of-a-normed-space]], [[def-weak-star-topology]]).

[F4] A topological vector space has jointly continuous addition and scalar multiplication; local convexity means that zero has a base of convex neighborhoods ([[def-topological-vector-space-for-local-convexity]], [[def-locally-convex-topological-vector-space]]).

[F5] AC implies that every filter extends to an ultrafilter ([[thm-ultrafilter-lemma]]).

[F6] Under the ultrafilter lemma, the closed dual unit ball of a normed space is weak-star compact ([[thm-banach-alaoglu]]).

[F7] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-compact-space]]).

[F8] A left-invariant mean on $\mathrm{UCB}(G)$ yields Reiter's condition (P1) ([[lem-an-invariant-mean-produces-a-reiter-net]]).

[F9] Under the ultrafilter lemma, a Reiter net has a weak-star cluster point which is a left-invariant mean on $L^\infty(G)$ ([[lem-a-reiter-net-has-an-invariant-mean-cluster-point]]).

[F10] Amenability means existence of a left-invariant mean on complex $L^\infty(G)$ ([[def-amenable-locally-compact-group]], [[def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group]]).

[F12] Reiter's condition (P1) is equivalent to the existence of a net in $\mathcal P$ with the compact-uniform translation estimates ([[def-reiter-condition-p1]]).

## Proof

**Proof technique:** direct.

1.1 Put $X:=\mathrm{UCB}(G)$ and $E:=X^*$ with the weak-star topology. By [F3], every evaluation on $E$ is continuous and linear. Therefore addition and scalar multiplication on $E$ are continuous, since their evaluations are the corresponding sums and scalar multiples. The basic zero-neighborhoods are finite intersections of inverse images of open disks under linear evaluations; these neighborhoods are convex. Distinct functionals differ on some $\psi\in X$; disjoint scalar neighborhoods of their evaluations pull back to disjoint weak-star neighborhoods, so $E$ is Hausdorff. Hence $E$ is a Hausdorff locally convex topological vector space by [F4]. [F3, F4]

1.2 Let $M$ be the set of positive complex-linear functionals $m$ on $X$ with $m(1_G)=1$. It is nonempty because evaluation $\delta_e(\psi)=\psi(e)$ is a mean, and it is convex. Every real-valued $u\in X$ satisfies $m(u)\in\mathbb R$ and $|m(u)|\le\|u\|_\infty$: positivity applied to $\|u\|_\infty1_G+u$ and $\|u\|_\infty1_G-u$ gives both claims. Real and imaginary parts of UCB functions remain in $X$, since their translation differences are bounded by the original difference. If $m(\psi)\ne0$, set $\alpha=\overline{m(\psi)}/|m(\psi)|$. Then $|\alpha|=1$ and $m(\operatorname{Re}(\alpha\psi))=|m(\psi)|$; also $\operatorname{Re}(\alpha\psi)\le|\psi|\le\|\psi\|_\infty1_G$. Positivity gives $|m(\psi)|\le\|\psi\|_\infty$, and the same bound is immediate if $m(\psi)=0$. Thus $M\subseteq B_{X^*}$. [F1, F2, F3, algebra]

2.1 The set $M$ is weak-star closed: it is the intersection of $\{m:m(1_G)=1\}$ and, for every nonnegative $\psi\in X$, $\{m:m(\psi)\in[0,\infty)\}$; these are closed by [F3]. By [A1] and [F5], the ultrafilter lemma holds, so [F6] makes $B_{X^*}$ compact. Since $M$ is a closed subset, [F7] makes $M$ compact. Together with step 1.2, $M$ is a nonempty compact convex subset of the locally convex space $E$. [A1, F3, F5, F6, F7, step 1.1, step 1.2]

2.2 For $g\in G$ and $m\in M$, define $(g\cdot m)(\psi):=m(L_{g^{-1}}\psi)$ for $\psi\in X$. Translation invariance of $X$ shows this is well-defined; positivity and $L_{g^{-1}}1_G=1_G$ show $g\cdot m\in M$. The identity $L_aL_b=L_{ab}$ gives $g\cdot(h\cdot m)=(gh)\cdot m$, and linearity in $m$ makes each map $m\mapsto g\cdot m$ affine. [F1, F3, step 1.2]

3.1 Fix $(g_0,m_0)\in G\times M$, $\psi\in X$, and $\eta>0$. By [F1], choose a neighborhood $V$ of $g_0$ with $\|L_{g^{-1}}\psi-L_{g_0^{-1}}\psi\|_\infty<\eta/2$ for $g\in V$. By [F3], choose a weak-star neighborhood $W$ of $m_0$ such that $|(m-m_0)(L_{g_0^{-1}}\psi)|<\eta/2$ for $m\in W$. For $g\in V$ and $m\in W\cap M$, step 1.2 gives $|(g\cdot m)(\psi)-(g_0\cdot m_0)(\psi)|\le\|m\|\,\|L_{g^{-1}}\psi-L_{g_0^{-1}}\psi\|_\infty+|(m-m_0)(L_{g_0^{-1}}\psi)|<\eta$. Thus every evaluation of the action is continuous; by the initial weak-star topology, the action $G\times M\to M$ is continuous. It is affine by step 2.2. [F1, F3, step 1.2, step 2.2]

4.1 The fixed point property applied to the continuous affine action of step 2.2 on the nonempty compact convex set $M$ gives a fixed point $m\in M$. Thus $m(L_{g^{-1}}\psi)=m(\psi)$ for every $g\in G$ and $\psi\in X$; as $g^{-1}$ ranges over $G$, $m$ is a left-invariant mean on $\mathrm{UCB}(G)$. [F1, step 2.1, step 2.2, step 3.1, given]

5.1 By [F8] and step 4.1, $G$ satisfies (P1); [F12] gives a Reiter net. AC supplies the ultrafilter lemma by [F5], so [F9] gives a left-invariant mean on $L^\infty(G)$. By [F10], $G$ is amenable. [A1, F5, F8, F9, F10, F12, step 4.1] ∎
## Sources

BHV, *Kazhdan's Property (T)*, Appendix G.1, Remark G.1.6 and Theorem G.1.7, proves that the fixed-point property for continuous affine actions on nonempty compact convex sets in locally convex spaces implies amenability, using the weak-star compact state space of UCB means and its translation action (printed pp. 448–449). The proof above supplies the compactness and continuity details under the repository's explicit AC convention, then uses the local Reiter and cluster-point suppliers to reach the stated $L^\infty$ definition.

