---
id: lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous
kind: lemma
title: "Finite-rank conjugation orbits are operator-norm continuous"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-strongly-continuous-unitary-representation, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-axiom-of-choice, thm-riesz-representation-for-hilbert-space, thm-cauchy-schwarz-in-an-inner-product-space, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-bessel-inequality-and-finite-parseval-identity, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Vera Serganova, Representation Theory, Chapter III §§1.6–2.1"
      url: "https://math.berkeley.edu/~serganov/math252/Bookrep.pdf"
---

## Statement

Assume the Axiom of Choice. Let $G$ be a topological group and let
$\pi:G\to U(H)$ be a strongly continuous unitary representation on a complex
Hilbert space $H$ ([[def-strongly-continuous-unitary-representation]],
[[def-hilbert-space]]). Let $T\in\mathcal B(H)$ be a bounded linear operator
([[def-bounded-linear-operator]]) whose range $T(H)$ is finite dimensional
(that is, $T$ is a finite-rank operator). Then the conjugation orbit

$$g\longmapsto\pi(g)T\pi(g)^{-1}$$

is continuous from $G$ to $\mathcal B(H)$ for the operator norm
([[def-operator-norm]]).

## Facts & Assumptions

**Given:** a topological group $G$, a strongly continuous unitary representation $\pi$ on a complex Hilbert space $H$, and a bounded finite-rank operator $T$.

[A1] The Axiom of Choice is assumed. ([[def-axiom-of-choice]])

[F1] For every $v\in H$ the orbit map $g\mapsto\pi(g)v$ is norm continuous, and each $\pi(g)$ is a bijective isometry, so $\pi(g)^{-1}=\pi(g)^{*}$ and $\|\pi(g)v\|=\|v\|$. ([[def-strongly-continuous-unitary-representation]])

[F2] Countable Choice holds under AC, and it is the hypothesis of the Riesz representation theorem. ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[thm-riesz-representation-for-hilbert-space]])

[F3] A finite-dimensional inner product space has an orthonormal basis, and for an orthonormal basis $e_0,\dots,e_{r-1}$ of a finite-dimensional subspace every vector $v$ of that subspace satisfies $v=\sum_{i<r}\langle v,e_i\rangle e_i$. ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[thm-bessel-inequality-and-finite-parseval-identity]])

[F4] Cauchy–Schwarz: $|\langle x,y\rangle|\le\|x\|\,\|y\|$. ([[thm-cauchy-schwarz-in-an-inner-product-space]])

[F5] The operator norm is a bound and a least bound: $\|Sx\|\le\|S\|\,\|x\|$, and $\|S\|$ is the least such constant. ([[def-operator-norm]], [[def-bounded-linear-operator]])

## Proof

**Proof technique:** direct.

1.1 The assumed Axiom of Choice supplies Countable Choice, so the Riesz representation theorem is available for bounded linear functionals on $H$. [A1, F2]

1.2 Since $T(H)$ is finite dimensional, it has an orthonormal basis $a_0,\dots,a_{r-1}$, and for every $x\in H$ the vector $Tx$ lies in $T(H)$, so $Tx=\sum_{i<r}\langle Tx,a_i\rangle a_i$. [F3]

1.3 For fixed $a,b\in H$ the rank-one operator $R_{a,b}x:=\langle x,b\rangle a$ is bounded with $\|R_{a,b}x\|\le\|a\|\,\|b\|\,\|x\|$ by Cauchy–Schwarz, so $\|R_{a,b}\|\le\|a\|\,\|b\|$; and for $g\in G$ one has $\pi(g)R_{a,b}\pi(g)^{-1}=R_{\pi(g)a,\pi(g)b}$, because $\langle\pi(g)^{-1}x,b\rangle=\langle x,\pi(g)b\rangle$ and $\pi(g)$ is linear. [F1, F4, F5]

2.1 Each functional $x\mapsto\langle Tx,a_i\rangle$ is bounded, since $|\langle Tx,a_i\rangle|\le\|T\|\,\|x\|$; by Riesz representation there is for each $i$ a unique vector $b_i\in H$ with $\langle Tx,a_i\rangle=\langle x,b_i\rangle$ for all $x$, so $T=\sum_{i<r}\langle\,\cdot\,,b_i\rangle a_i=\sum_{i<r}R_{a_i,b_i}$. [F2, F4, step 1.1, step 1.2]

3.1 Conjugating the finite sum of step 2.1 and using step 1.3 termwise gives $\pi(g)T\pi(g)^{-1}=\sum_{i<r}\pi(g)R_{a_i,b_i}\pi(g)^{-1}=\sum_{i<r}R_{\pi(g)a_i,\pi(g)b_i}$ for every $g\in G$. [step 1.3, step 2.1]

4.1 For $g,h\in G$ and vectors $a,b,a',b'$, $R_{a,b}-R_{a',b'}=R_{a-a',b}+R_{a',b-b'}$, so $\|R_{a,b}-R_{a',b'}\|\le\|a-a'\|\,\|b\|+\|a'\|\,\|b-b'\|$; applying this with $a=\pi(g)a_i$, $b=\pi(g)b_i$, $a'=\pi(h)a_i$, $b'=\pi(h)b_i$ and using unitarity bounds $\|\pi(g)T\pi(g)^{-1}-\pi(h)T\pi(h)^{-1}\|$ by $\sum_{i<r}\bigl(\|b_i\|\,\|\pi(g)a_i-\pi(h)a_i\|+\|a_i\|\,\|\pi(g)b_i-\pi(h)b_i\|\bigr)$. [F1, F4, F5, step 3.1]

5.1 The finitely many orbit maps $g\mapsto\pi(g)a_i$ and $g\mapsto\pi(g)b_i$ are norm continuous at $h$ by strong continuity, so the bound of step 4.1 tends to zero as $g\to h$; hence $g\mapsto\pi(g)T\pi(g)^{-1}$ is continuous in operator norm at every $h\in G$. [F1, step 4.1] ∎
