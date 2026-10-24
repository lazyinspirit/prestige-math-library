---
id: "thm-weakly-convergent-sequences-are-norm-bounded"
kind: "theorem"
title: "Weakly convergent sequences are norm bounded"
deps: ["def-weak-convergence-of-nets-and-sequences", "cor-relative-hahn-banach-bidual-isometry", "thm-bounded-operator-space-is-banach", "thm-sequential-uniform-boundedness-under-countable-choice", "def-hahn-banach-extension-principle-relative", "def-countable-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume HB ([[def-hahn-banach-extension-principle-relative]]) and the Axiom of Countable Choice ([[def-countable-choice]]). Every weakly convergent sequence in a real or complex normed space is norm bounded. If $X$ is Banach, every weak-star convergent sequence in $X^*$ is norm bounded; this second assertion needs only Countable Choice.

## Facts & Assumptions

[F1] Weak convergence means convergence under each bounded scalar-linear functional ([[def-weak-convergence-of-nets-and-sequences]]).

[F2] Under HB the canonical map $J_X(x)(f)=f(x)$ satisfies $\|J_Xx\|=\|x\|$ ([[cor-relative-hahn-banach-bidual-isometry]]).

[F3] If the target is Banach, its bounded-operator space from any normed domain is Banach ([[thm-bounded-operator-space-is-banach]]).

[F4] Under Countable Choice, a pointwise bounded sequence of bounded operators on a Banach domain has uniformly bounded operator norms ([[thm-sequential-uniform-boundedness-under-countable-choice]]).

## Proof

**Given:** the stated axioms and a weakly convergent sequence $x_n\rightharpoonup x$ in $X$; for the second assertion, a Banach $X$ and a weak-star convergent sequence $f_n\to f$ in $X^*$.

1.1 For every $g\in X^*$, the scalar sequence $g(x_n)$ converges to $g(x)$, hence is bounded: a tail has modulus at most $|g(x)|+1$, and finitely many preceding moduli have a finite maximum. The maps $J_Xx_n:X^*\to\mathbb K$ are therefore pointwise bounded bounded linear maps. Their domain $X^*=\mathcal B(X,\mathbb K)$ is Banach since $\mathbb K$ is complete. [given, F1, F2, F3]

2.1 Sequential uniform boundedness applied to these maps gives $\sup_n\|J_Xx_n\|<\infty$. The HB isometry makes this $\sup_n\|x_n\|<\infty$. Countable Choice is used exactly in F4; HB is used only in F2, and completeness of $X$ was not required. [step 1.1, F4, F2]

3.1 For the second assertion, each scalar sequence $f_n(y)$ converges for fixed $y\in X$, so the same finite-head/tail estimate from step 1.1 gives pointwise boundedness. Apply F4 directly on the assumed Banach domain $X$ to obtain $\sup_n\|f_n\|<\infty$. No bidual norming or HB is used in this case. If either domain is zero, all its operator norms are zero, so the same conclusions hold. $\square$ [step 2.1, step 1.1, F4, given]
