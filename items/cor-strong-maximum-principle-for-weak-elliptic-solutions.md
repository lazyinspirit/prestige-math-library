---
id: cor-strong-maximum-principle-for-weak-elliptic-solutions
kind: corollary
title: "Strong maximum principle for weak elliptic solutions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution, thm-de-giorgi-nash-interior-holder-regularity, thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions, def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, def-uniformly-elliptic-divergence-form-operator, def-connected-space, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Krummel, Consequences of De Giorgi-Nash-Moser (4 March 2016; complete 7-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/ConseqDNM.pdf"
      locator: "Theorem 3 (the strong maximum principle in divergence form) and its consequences, printed pp. 1-3 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "The applications of De Giorgi-Nash-Moser theory in Lecture 18, printed pp. 211-215 (read in full)"
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "Teoremi 1-2 and the oscillation-decay applications, printed pp. 1-7 (read in full)"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $n\ge3$, let $\Omega\subseteq\mathbb R^n$ be connected and open, let $A,L_0$ be as in [[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]], and let $u\in H^1(\Omega;\mathbb R)$ with $u\ge0$ a.e. be a weak solution of $L_0u=0$ on $\Omega$.
Then either $u=0$ a.e. on $\Omega$, or $u>0$ a.e. on $\Omega$; moreover the Holder representative $u^*$ of [[thm-de-giorgi-nash-interior-holder-regularity]] satisfies: if $u^*$ vanishes at one point of $\Omega$, then $u^*\equiv0$ on $\Omega$, and otherwise $u^*>0$ on all of $\Omega$. In particular a nonnegative weak solution that is not identically zero is strictly positive after the representative is fixed, and no interior zero is possible.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; a connected open set $\Omega\subseteq\mathbb R^n$, $n\ge3$; uniformly elliptic measurable symmetric coefficients $A$ with constants $\theta,M_a$; the principal operator $L_0u=-D_i(a^{ij}D_ju)$; a nonnegative weak solution $u\in H^1(\Omega;\mathbb R)$ of $L_0u=0$; a Holder representative $u^*$ of $u$ on $\Omega$.

[F1] Assume the Axiom of Choice. Zero-set propagation: if $u\ge0$ a.e. is a weak solution of $L_0u=0$ on a connected open set and $u^*$ is a continuous representative with $u^*(x_0)=0$ for some $x_0\in\Omega$, then $u^*\equiv0$ on $\Omega$ ([[lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution]], [[def-connected-space]]).

[F2] Assume the Axiom of Choice. The representative exists, is continuous, and agrees with $u$ almost everywhere, so $u^*\ge0$ everywhere because $u\ge0$ a.e. and $u^*$ is continuous; conversely if $u^*>0$ on $\Omega$ then $u>0$ a.e. ([[thm-de-giorgi-nash-interior-holder-regularity]], [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] Assume the Axiom of Choice. Weak solution vocabulary: $L_0u=0$ weakly means $a_0(u,v)=0$ for every $v\in H^1_0(\Omega)$, and in particular $u$ is both a weak subsolution and a weak supersolution ([[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]], [[def-uniformly-elliptic-divergence-form-operator]]).

## Proof

**Proof technique:** direct dichotomy; either the continuous representative vanishes somewhere, in which case the zero-set propagation lemma makes it identically zero, or it has no zero, in which case continuity and nonnegativity make it strictly positive.

1.1 The case of a zero. If there is $x_0\in\Omega$ with $u^*(x_0)=0$, then [F1] gives $u^*\equiv0$ on the connected set $\Omega$; since $u=u^*$ a.e., $u=0$ a.e. on $\Omega$. [given, F1, F2]

2.1 The case of no zero. If $u^*$ vanishes nowhere on $\Omega$, then $u^*\ne0$ everywhere; by [F2] $u^*\ge0$ everywhere, so $u^*>0$ on all of $\Omega$, and hence $u>0$ a.e. on $\Omega$. Thus either $u=0$ a.e. or $u>0$ a.e.; in the first case $u^*\equiv0$ (as the continuous representative of the zero class) and in the second $u^*>0$ everywhere. In particular no point of $\Omega$ can be an interior zero of $u^*$ unless $u^*$ vanishes identically. All arguments use Countable Choice and the Axiom of Choice only through the suppliers named above. [step 1.1, F2, F3] ∎
