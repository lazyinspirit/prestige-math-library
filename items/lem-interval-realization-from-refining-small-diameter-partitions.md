---
id: lem-interval-realization-from-refining-small-diameter-partitions
kind: lemma
title: Interval realization from refining small diameter partitions
deps: ["lem-countable-boundary-null-partitions-of-a-separable-metric-space", "cor-weak-limits-are-unique", "thm-dominated-convergence", "def-complete-metric-space", "def-axiom-of-choice", "thm-lebesgue-measure-of-a-box-of-every-kind", "prop-countable-subsets-of-rn-are-lebesgue-null", "def-countable-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Advanced Probability, Theorem 5.29, pp. 65–67; representative-limit repair of the nonclosed-atom intersection step
      url: https://www.mat.univie.ac.at/~mathias/Advanced_Probability.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. Let S be nonempty, complete and separable, and let $(\mathcal P_k)$ be countable refining Borel partitions with nonempty atoms of diameter at most $2^{-k}$. Fix orders on each family of children. Every Borel probability $\sigma$ on S is the law of a measurable $T_\sigma:(0,1)\to S$ under Borel Lebesgue probability, obtained by nested interval allocation.

## Facts & Assumptions

[F1] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: Let $n \ge 1$, **assume the Axiom of Countable Choice**
(def-countable-choice), and let $a_i \le b_i$ be reals for $i<n$. Write

$$R^{\circ} := \{\, x \in \mathbb{R}^n : a_i < x_i < b_i \text{ for every } i<n \,\}, \qquad \overline{R} := [a,b] = \{\, x \in \mathbb{R}^n : a_i \le x_i \le b_i \text{ for every } i<n \,\}$$

(def-multidimensional-rectangle-and-volume). Then $R^{\circ}$ is open and
$\overline{R}$ is closed, so both are Borel and Lebesgue measurable, and **every**
set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue
measurable with

$$\lambda_n(R) \;=\; \prod_{i<n}(b_i-a_i).$$

In particular this covers the four one-dimensional face conventions in each
coordinate — the open box, the closed box $[a,b]$, the half-open box
$B(a,b) = \prod_{i<n}(a_i,b_i]$ of def-half-open-box, and every mixture of
them, in any combination of coordinates — and it gives measure $0$ to all of them
whenever $a_i = b_i$ for some $i<n$. For a half-open box with infinite
parameters the value is already
$\lambda_n(B) = \operatorname{vol}(B)$ (thm-lebesgue-measure-is-a-complete-measure).

[F2] [[prop-countable-subsets-of-rn-are-lebesgue-null]]: Let $n \ge 1$ and **assume the Axiom of Countable Choice**
(def-countable-choice). Every at most countable subset $E \subseteq \mathbb{R}^n$
(def-countable) is Lebesgue measurable with

$$\lambda_n(E) \;=\; 0,$$

so $E$ is a $\lambda_n$-null set (def-measure-null-set-and-almost-everywhere).
In particular every singleton is null, and on the real line the set
$\mathbb{Q}_{\mathbb{R}}$ of rational reals (lem-rat-embeds-dense) satisfies
$\lambda_1(\mathbb{Q}_{\mathbb{R}}) = 0$.

[F3] [[def-complete-metric-space]]: Let $(X,d)$ be a metric space (def-metric-space).

$(X,d)$ is **complete** if every Cauchy sequence in $(X,d)$
(def-cauchy-in-metric) converges to a point of $X$
(def-metric-convergence).

A subset $A \subseteq X$ is called **complete** when the metric subspace
$(A, d_A)$ is complete (def-isometry-and-metric-embedding); as always, the
metric is part of the data, and $d_A$ is the restriction of $d$ to $A \times A$.

**The limit is unique when it exists**, since limits in a metric space are unique
(lem-metric-limits-unique), so a complete space assigns to each of its Cauchy
sequences one point and not a set of points.

**Completeness is a property of the pair $(X,d)$, not of $X$ and not of the
topology of $d$.** Both quantifiers in the definition are about the metric: the
Cauchy condition is stated with distances, and so is convergence. Two metrics on
the same set can have the same open sets while exactly one of them is complete,
which is the content of fs-completeness-is-a-topological-property and its
witness. Read the word *complete* as an abbreviation for *complete with respect
to this metric*, always.

[F4] [[thm-dominated-convergence]]: Let $f$ and $(f_n)$ be measurable complex-valued functions such that
$f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for a single
nonnegative measurable function $g$ with $\int g\,d\mu<+\infty$. Then
$f\in L^1(\mu)$,
$$\int|f_n-f|\,d\mu\longrightarrow0,$$
and hence
$$\int f_n\,d\mu\longrightarrow\int f\,d\mu.$$

[F5] [[cor-weak-limits-are-unique]]: Bounded continuous real tests determine Borel probability measures on any metric space. In particular, weak limits are unique.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 AC chooses a representative x_A from each nonempty atom and a fixed $x_0$ in S. Assign the root S interval [0,1); inside each parent interval [l,r), put the jth child A in $[l+\sum_{i<j}\sigma(A_i),l+\sum_{i\le j}\sigma(A_i))$. Countable additivity makes these child lengths sum to r-l. Zero-mass children have empty intervals. Each interval has the asserted length under F1: its CC hypothesis follows by restricting AC to a countable family. [F1]

1.2 Let $N_sigma$ consist of all allocated endpoints in (0,1). It is countable and Borel, and F2 makes it null under the same CC assumption. For u outside it, at each level there is one interval containing u, with a nested atom $A_k$(u). Existence at each level follows because finite partial sums of child lengths increase to the parent length; an interior u lies below some partial sum. Put $Z_k$(u)=x_{$A_k$(u)} there and $Z_k$(u)=$x_0$ on $N_sigma$. Each $Z_k$ is countably valued and Borel measurable. [F2]

1.3 For l>=k and u outside $N_sigma$, both representatives lie in $A_k$(u), so $d(Z_l(u),Z_k(u))\le2^{-k}$. The sequence is Cauchy; completeness F3 supplies a unique limit $T_sigma$(u). Define $T_sigma$=$x_0$ on $N_sigma$. For a nonempty closed F, $d(T_\sigma(u),F)=\lim_kd(Z_k(u),F)$, and hence its preimage of zero is measurable by countable real limit operations. These are preimages of all closed F, so $T_sigma$ is Borel measurable. The limit belongs to the closure of each selected atom; membership in the atom itself is not needed. [F3]

2.1 For bounded continuous f, define $h_k$(x)=f(x_A) on A in $P_k$. Since $d(x,x_A)\le2^{-k}$, $h_k(x)\to f(x)$ pointwise on S, with $|h_k|\le\|f\|_\infty$. Countable additivity of integrals over the atoms gives $\int f(Z_k(u))\,du=\sum_{A\in P_k}\sigma(A)f(x_A)=\int h_k\,d\sigma$. The null endpoint set does not change this equality. Apply F4 to both sides: the left tends to $\int f(T_\sigma(u))\,du$ by step 1.3, and the right tends to integral f against $\sigma$. Thus all bounded continuous test integrals of the law of $T_sigma$ equal those of $\sigma$, and F5 identifies the laws. [F4, F5, step 1.3] ∎
