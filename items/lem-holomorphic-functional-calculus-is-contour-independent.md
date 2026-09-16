---
id: lem-holomorphic-functional-calculus-is-contour-independent
kind: lemma
title: Holomorphic functional calculus is contour independent
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-holomorphic-functional-calculus, lem-banach-valued-cauchy-integral-vanishes, def-axiom-of-choice, def-null-homologous-and-homologous-complex-cycles, def-complex-chain-and-cycle, lem-admissible-cycle-around-a-compact-plane-set, thm-resolvent-is-banach-valued-holomorphic, def-spectrum-and-resolvent-set-in-a-banach-algebra, def-banach-algebra-valued-contour-integral]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.25(i), printed pp. 228–229"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — the contour-independence discussion after Definition 2.5.1, printed p. 47"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a unital
complex Banach algebra, $a \in A$, and let $f$ be holomorphic on an open set $U$
containing $\sigma_A(a)$. Then the value $f(a)$ of
[[def-holomorphic-functional-calculus]] is independent of the admissible cycle
used to compute it. Moreover, if $V \subseteq U$ is another open set containing
$\sigma_A(a)$ and $g$ is holomorphic on $V$ with $g = f$ on a neighbourhood of
$\sigma_A(a)$, then $f(a) = g(a)$ with $g$ computed from $V$.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a unital complex Banach algebra $A$, an element $a \in A$ with nonempty compact spectrum $\sigma_A(a)$, an open $U \supseteq \sigma_A(a)$, a holomorphic $f : U \to \mathbb C$, and two admissible cycles $\Gamma_1,\Gamma_2$ in $U\setminus\sigma_A(a)$.

[L1] $f(a) = \frac{1}{2\pi i}\int_\Gamma f(z)R(z,a)\,dz$ for every admissible cycle $\Gamma$; the integrand is continuous on the trace ([[def-holomorphic-functional-calculus]]).

[L2] A cycle $\Gamma$ is null-homologous in an open set $\Omega$ exactly when $n(\Gamma,p) = 0$ for every $p \notin \Omega$; equivalently $n(\Gamma,p)$ vanishes at every point outside $\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L3] If $F$ is continuous and weakly holomorphic on an open $\Omega$ and $\Gamma$ is a cycle with trace in $\Omega$ that is null-homologous in $\Omega$, then $\int_\Gamma F\,dz = 0$ ([[lem-banach-valued-cauchy-integral-vanishes]]).

[L4] For fixed $a$ the map $z \mapsto R(z,a)$ is holomorphic on $\rho_A(a)$ and the product of a scalar holomorphic function with it is weakly holomorphic: for every bounded linear functional $\varphi$ on $A$ the map $z \mapsto \varphi(f(z)R(z,a))$ is holomorphic on $U \cap \rho_A(a)$ ([[thm-resolvent-is-banach-valued-holomorphic]], [[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

[L6] For every compact $K$ contained in an open set $U$ there is a finite polygonal cycle with index $1$ on $K$ and index $0$ outside $U$ ([[lem-admissible-cycle-around-a-compact-plane-set]]).

## Proof

**Proof technique:** direct.

1.1 Put $\Omega := U\setminus\sigma_A(a)$, an open set containing both traces $\Gamma_1^\ast,\Gamma_2^\ast$; the difference $\Gamma_1 - \Gamma_2$ is a cycle with trace in $\Omega$ whose index at $p$ is $n(\Gamma_1,p) - n(\Gamma_2,p)$. [L2, L4, algebra]

1.2 The map $F(z) := f(z)R(z,a)$ is continuous on $\Omega$ and weakly holomorphic there: for a bounded linear functional $\varphi$ the composition $\varphi(F(z)) = f(z)\,\varphi(R(z,a))$ is a product of the holomorphic scalar function $f$ and the holomorphic scalar function $\varphi(R(\cdot,a))$, hence holomorphic on the open subset $\Omega$ of $\rho_A(a)$. [L4, algebra]

1.3 Germ independence: let $V \supseteq \sigma_A(a)$ be open and let $g$ be holomorphic on $V$ with $f = g$ on a neighbourhood $W$ of $\sigma_A(a)$. Apply [L6] to the compact set $\sigma_A(a)$ and the open set $U \cap V \cap W$: this gives an admissible cycle for both $(f,U)$ and $(g,V)$ with trace in $(U\cap V\cap W)\setminus\sigma_A(a)$, hence lying in $W$, where $f = g$. [L6, algebra]

2.1 For $p \in \sigma_A(a)$ both indices equal $1$, and for $p \notin U$ both equal $0$, by admissibility; hence $n(\Gamma_1-\Gamma_2,p) = 0$ for every $p \notin U\setminus\sigma_A(a)$, that is, $\Gamma_1-\Gamma_2$ is null-homologous in $\Omega := U\setminus\sigma_A(a)$. [step 1.1, L2, algebra]

3.1 By [L3] applied to $F$ and the cycle $\Gamma_1-\Gamma_2$, null-homologous in $\Omega$ by [step 2.1], one has $\int_{\Gamma_1-\Gamma_2}F\,dz = 0$; by additivity of the chain integral this gives $\int_{\Gamma_1}f(z)R(z,a)dz = \int_{\Gamma_2}f(z)R(z,a)dz$, hence $f(a)$ does not depend on the admissible cycle. [step 1.2, step 2.1, L1]

4.1 On the trace of the cycle of [step 1.3] the two integrands coincide, $f(z)R(z,a) = g(z)R(z,a)$, so the two integrals agree; by [step 3.1] applied to each function separately, $f(a) = g(a)$. [step 1.3, step 3.1, L1]

5.1 Both assertions of the statement are proved: cycle independence by [step 3.1] and germ independence by [step 4.1]. [step 3.1, step 4.1] ∎
