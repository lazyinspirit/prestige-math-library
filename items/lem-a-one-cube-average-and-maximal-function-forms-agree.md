---
id: lem-a-one-cube-average-and-maximal-function-forms-agree
kind: lemma
title: The two defining forms of A_1 agree
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-muckenhoupt-a-p-and-a-one-weights, lem-ball-and-cube-maximal-functions-are-comparable, def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-essential-supremum-with-respect-to-a-measure, def-measure-null-set-and-almost-everywhere, thm-rational-points-and-boxes-in-rn, def-weight-and-weighted-lp-space, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "The equivalence of (7.1.13), (7.1.15) and (7.1.18) around Definition 7.1.1, printed pp. 502-503"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Definition 4.7, Remark 4.9 and Theorem 4.11, printed pp. 71-73"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $w$ be a weight on $\mathbb R^n$
([[def-weight-and-weighted-lp-space]]). Then the following are equivalent:

1. $Mw\le Cw$ almost everywhere for some constant $C<\infty$, where $M$ is the
   centred ball maximal function
   ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]);
2. $\sup_Q\langle w\rangle_Q(\operatorname{ess\,inf}_Qw)^{-1}=:C'<\infty$, the
   supremum over axis-parallel cubes, where the essential infimum is defined in
   [[def-muckenhoupt-a-p-and-a-one-weights]].

Moreover the least constants satisfy $C'\le C_nC$ and $C\le C_nC'$ for a
dimensional constant $C_n$, and the same equivalence holds with the uncentred
maximal function $M^*$ in place of $M$. In particular the cube-average/
essential-infimum condition may be used as an equivalent definition of $A_1$
with a characteristic changed only by a dimensional factor; a positive average divided by a zero essential infimum is interpreted as $+\infty$; the class $A_1$
itself is the one of [[def-muckenhoupt-a-p-and-a-one-weights]].

## Facts & Assumptions

**Given:** Countable Choice; A weight $w$, the centred and uncentred ball maximal functions $M$ and $M^*$, and the cube averages $\langle w\rangle_Q$.

[F1] $w>0$ and $w<\infty$ Lebesgue-a.e., and for every cube $Q$ one has $0<w(Q)<\infty$ ([[def-weight-and-weighted-lp-space]]).

[F2] For every ball $B=B(x,r)$ there is an axis-parallel cube $Q\supseteq B$ with $|Q|\le C_n|B|$, and for every cube $Q$ there is a ball $B\supseteq Q$ with $|B|\le C_n|Q|$; consequently, if $E\subseteq F$ and $|F|\le C_n|E|$, then $\langle w\rangle_E\le C_n\langle w\rangle_F$ by nonnegativity ([[lem-ball-and-cube-maximal-functions-are-comparable]]).

[F3] For a nonnegative function $g$ the set where $g$ does not satisfy a pointwise inequality of the form $g\le c$ a.e. is contained in a null set, and countable unions of null sets are null ([[def-measure-null-set-and-almost-everywhere]]).

[F4] $\mathbb Q^n$ is countable and dense in $\mathbb R^n$, so cubes with rational centre and rational side length approximate any given cube from outside with volume comparable by a fixed factor ([[thm-rational-points-and-boxes-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 Assume (1), with constant $C$. For each cube $Q$ of side $\ell$ and each $x\in Q$, the centred ball $B(x,\sqrt n\ell)$ contains $Q$ and has volume at most a dimensional multiple of $|Q|$. Thus $\langle w\rangle_Q\le C_nMw(x)\le C_nCw(x)$ for almost every $x\in Q$. Taking the essential infimum and then the supremum in $Q$ gives $C'\le C_nC$. If the hypothesis instead uses $M^*$, the same estimate holds since $M\le M^*$. [F1, F2, given, algebra]

1.2 Assume (2). For each rational-centred, rational-sided cube $Q$, the set $N(Q)=\{x\in Q:\langle w\rangle_Q>C'w(x)\}$ is null. Their union $N$ is null by [F3, F4]. For $x\notin N$ and any ball $B\ni x$, choose a rational cube $Q\supseteq B$ with $|Q|\le C_n|B|$. Then $\langle w\rangle_B\le C_n\langle w\rangle_Q\le C_nC'w(x)$. Taking the supremum over these balls gives $M^*w(x)\le C_nC'w(x)$, hence also $Mw(x)\le C_nC'w(x)$. [F1, F2, F3, F4, given, choose]

2.1 Steps 1.1 and 1.2 prove the equivalence together with the comparable bounds $C'\le C_nC$ and $C\le C_nC'$ for one and the same dimensional constant $C_n$ (renaming constants if necessary), and each direction was proved both for $M$ and for $M^*$, so the centred and uncentred forms of condition (1) are equivalent to (2). Therefore the cube-average/essential-infimum condition defines the same class as $Mw\le Cw$ a.e., with characteristic changed only by dimensional factors. [step 1.1, step 1.2, algebra] ∎
