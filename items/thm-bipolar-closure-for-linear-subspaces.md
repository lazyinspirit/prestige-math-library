---
id: thm-bipolar-closure-for-linear-subspaces
kind: theorem
title: "Double annihilators give norm and weak-star closures"
status: published
origin: pipeline
deps: ["def-weak-star-topology", "def-annihilator-and-preannihilator", "lem-finite-evaluations-separate-from-a-dual-subspace", "cor-annihilator-detects-closure"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Corollary 3.26(i)–(iii), p.130; Corollary 2.55, p.84 (real source; K-linear finite-coordinate proof covers C)"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Every evaluation at x in preannihilator N vanishes on N and has a closed kernel in sigma(X*,X), proving closure(N) is contained in its double annihilator. Conversely, if f0 is outside closure(N), choose a basic finite-evaluation neighbourhood disjoint from N. It has n>=1 since N contains zero. Its coordinate map E satisfies E(f0) not in E(N). The preceding separation lemma gives x in preannihilator N with f0(x)=1, excluding f0 from the double annihilator. Closedness is immediate; density uses that X* separates each nonzero x, already contained in the published primal annihilator-closure result with M={0}. Reuse that published result for the primal identity. No sequence characterization or Banach hypothesis is used."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ and a linear subspace $N\le X^*$, $$({}^\perp N)^\perp=\overline N^{\sigma(X^*,X)}.$$ Consequently $N$ is weak-star closed if and only if $N=({}^\perp N)^\perp$, and weak-star dense in $X^*$ if and only if ${}^\perp N=\{0\}$. For a linear subspace $M\le X$, the primal formula is ${}^\perp(M^\perp)=\overline M^{\|\cdot\|}$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-weak-star-topology]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ with continuous dual $X^*$ from def-dual-space-of-a-normed-space, the **weak-star topology** $\sigma(X^*,X)$ is the initial topology of all evaluations $f\mapsto f(x)$ into $\mathbb K$ with its usual topology. At $f_0$, a neighbourhood basis consists of $U(f_0;x_1,\ldots,x_n;\varepsilon)=\{f\in X^*: |(f-f_0)(x_j)|<\varepsilon\ (1\le j\le n)\},$ where $n$ is finite and $\varepsilon>0$. For $n=0$ the set is all of $X^*$. Finite intersections of inverse images of scalar open sets form the initial-topology basis; at the given point, finitely many disks can be refined using their smallest positive radius. Weak-star closure means closure in this topology, not merely sequential closure.

[F2] From [[def-annihilator-and-preannihilator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ and arbitrary subsets $M\subseteq X$, $N\subseteq X^*$, define $M^\perp=\{f\in X^*:f(m)=0\text{ for all }m\in M\},\qquad {}^\perp N=\{x\in X:f(x)=0\text{ for all }f\in N\}.$ Here $X^*$ is def-dual-space-of-a-normed-space. The first notation agrees with def-continuous-annihilator-of-a-subspace on $\operatorname{span}M$, since linearity makes vanishing on $M$ equivalent to vanishing on its span. The preannihilator lies in $X$, not in $X^{**}$. Empty sets impose no conditions: $\varnothing^\perp=X^*$ and ${}^\perp\varnothing=X$.

[F3] From [[lem-finite-evaluations-separate-from-a-dual-subspace]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $X$ be normed, $N\le X^*$ a linear subspace, and $x_1,\ldots,x_n\in X$ with $n\ge1$. Define $E(f)=(f(x_1),\ldots,f(x_n))$. If $f_0\in X^*$ satisfies $E(f_0)\notin E(N)$, there is $x\in\operatorname{span}\{x_1,\ldots,x_n\}$ such that $g(x)=0$ for all $g\in N$ and $f_0(x)=1$.

[F4] From [[cor-annihilator-detects-closure]], with its stated hypotheses: For every linear subspace $M\subseteq X$, $\overline M=\bigcap_{f\in M^\perp}\ker f.$

## Proof

1.1 If $x\in{}^\perp N$, evaluation at $x$ vanishes on $N$. Its kernel is weak-star closed by the definition of that topology. Intersecting these kernels shows $\overline N^{\sigma(X^*,X)}\subseteq({}^\perp N)^\perp$. [F1, F2]

1.2 Let $f_0$ lie outside the weak-star closure. Choose a basic neighbourhood $U(f_0;x_1,\ldots,x_n;\varepsilon)$ disjoint from $N$. Since $0\in N$, this neighbourhood cannot have $n=0$. Its finite-coordinate map satisfies $E(f_0)\notin E(N)$, since equality with $E(g)$ would put that $g\in N$ in $U$. [F1]

2.1 Finite-evaluation separation supplies $x\in{}^\perp N$ with $f_0(x)=1$. Hence $f_0\notin({}^\perp N)^\perp$. Together with step 1.1, this proves equality. [F2, F3, step 1.1, step 1.2]

3.1 A set is closed exactly when it equals its closure, so the first equivalence follows in both directions. For density, if ${}^\perp N=0$, the equality gives closure $X^*$. Conversely if the closure is $X^*$, any $x\in{}^\perp N$ is annihilated by all of $X^*$. The published primal formula with $M=0$ says ${}^\perp X^*=0$, so $x=0$. [F2, F4, step 2.1]

4.1 The primal formula in the statement is exactly the published annihilator-closure identity, with the preannihilator notation unpacked. It also checks the extremes $N=0$ and $N=X^*$: their closures and double annihilators are respectively $0$ and $X^*$. For $X=0$ these coincide. [F2, F4, step 2.1] ∎
