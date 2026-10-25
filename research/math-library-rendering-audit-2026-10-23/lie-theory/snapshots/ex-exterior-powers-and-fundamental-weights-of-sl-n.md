---
id: ex-exterior-powers-and-fundamental-weights-of-sl-n
kind: example
title: Exterior powers and fundamental weights of sl_n
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-standard-and-dual-representations-of-sl-n-by-highest-weights, prop-root-systems-of-the-classical-complex-lie-algebras, def-fundamental-weights, def-highest-weight-vector-and-highest-weight-module, def-weight-and-weight-space-of-a-lie-algebra-representation, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation, thm-poincare-birkhoff-witt, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §1 examples"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.7 and Exercise 8.5"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice. Let $\mathfrak g=\mathfrak{sl}_n(\mathbb C)$ with
its diagonal Cartan $\mathfrak h$, coordinate functionals $\varepsilon_i$ and
upper-triangular positive system as in
[[ex-standard-and-dual-representations-of-sl-n-by-highest-weights]]. For every
$k$ with $1\le k\le n-1$ the exterior power
$\Lambda^k(\mathbb C^n)$ is an irreducible module of highest weight
$\omega_k=\varepsilon_1+\dots+\varepsilon_k$
([[def-fundamental-weights]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h$, the standard module $V=\mathbb C^n$ with basis $e_1,\dots,e_n$, and $W=\Lambda^k(V)$ with basis the wedges $e_I=e_{i_1}\wedge\dots\wedge e_{i_k}$ for increasing index sets $I=\{i_1<\dots<i_k\}\subseteq\{1,\dots,n\}$.

[A1] The Axiom of Choice is assumed; it enters through the root-space and highest-weight theory used below ([[def-axiom-of-choice]]).

[L1] The weights of the standard module are $\varepsilon_1,\dots,\varepsilon_n$, $\varepsilon_1=\omega_1$, and $\varepsilon_1+\dots+\varepsilon_k=\omega_k$ for $1\le k\le n-1$, because the simple coroots are $h_{\alpha_j}=E_{jj}-E_{j+1,j+1}$ and $(\varepsilon_1+\dots+\varepsilon_k)(h_{\alpha_j})=\delta_{kj}$ ([[ex-standard-and-dual-representations-of-sl-n-by-highest-weights]], [[def-fundamental-weights]]).

[L2] The wedge $e_I$ is a weight vector of weight $\sum_{i\in I}\varepsilon_i$, these weights are pairwise distinct for distinct index sets $I$, and $E_{ab}\cdot e_I=\sum_{l:i_l=b}e_{i_1}\wedge\dots\wedge e_a\wedge\dots\wedge e_{i_k}$, the sum being zero when the replacement produces a repeated index ([[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[prop-root-systems-of-the-classical-complex-lie-algebras]]).

[L3] For a finite set of pairwise distinct weights and one of them, an element of $U(\mathfrak h)$ acts as the projection onto the corresponding weight component, since $U(\mathfrak h)$ is the polynomial algebra on $\mathfrak h^*$ ([[thm-poincare-birkhoff-witt]]).

[L4] A nonzero submodule of an irreducible module is the whole module ([[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]], [[def-highest-weight-vector-and-highest-weight-module]]).

## Verification

**Proof technique:** direct.

1.1 The vector $e_{\{1,\dots,k\}}=e_1\wedge\dots\wedge e_k$ has weight $\varepsilon_1+\dots+\varepsilon_k=\omega_k$ by [L1] and [L2], and it is killed by every positive root vector $E_{ij}$ with $i<j$: if $j\le k$ then $i<j\le k$ gives $i\in\{1,\dots,k\}$ and the replacement repeats an index, while if $j>k$ then $e_j$ is not a factor at all; either way $E_{ij}\cdot e_{\{1,\dots,k\}}=0$ by [L2]. [L1, L2, A1]

2.1 From any basis wedge $e_I\ne e_{\{1,\dots,k\}}$ one reaches $e_{\{1,\dots,k\}}$ by positive root vectors: let $j$ be the smallest positive integer not in $I$, so $j\le k$, and choose $i\in I$ with $i>j$, which exists since $I$ has $k$ elements; then $E_{ji}\cdot e_I=\pm e_{I'}$ with $I'=I\setminus\{i\}\cup\{j\}$ a nonvanishing basis wedge whose index sum is strictly smaller, and repeating finitely many times reaches $\{1,\dots,k\}$. [L2, step 1.1]

2.2 From $e_{\{1,\dots,k\}}$ one reaches every basis wedge by negative root vectors: for $a\in\{1,\dots,k\}$ and $b>k$ the operator $E_{ba}$ replaces the factor $e_a$ by $e_b$ without repeated indices (as $b\notin\{1,\dots,k\}$), giving $\pm e_{I''}$ with $I''=I_0\setminus\{a\}\cup\{b\}$; successive replacements of this kind produce every increasing index set. [L2, step 1.1]

3.1 $W$ is irreducible: if $0\ne U\subseteq W$ is a submodule, then by [L3] some basis wedge $e_I$ lies in $U$, so by step 2.1 the highest vector $e_{\{1,\dots,k\}}$ lies in $U$, and by step 2.2 every basis wedge lies in $U$; hence $U=W$ by [L4]. [L3, L4, step 2.1, step 2.2]

4.1 By step 1.1 the vector $e_{\{1,\dots,k\}}$ is a highest weight vector of weight $\omega_k$, and by step 3.1 the module is irreducible; hence $\Lambda^k(\mathbb C^n)$ has highest weight $\omega_k$, as asserted. [step 1.1, step 3.1] ∎
