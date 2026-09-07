---
id: "lem-inducing-an-irreducible-inertia-module-is-irreducible"
kind: "lemma"
title: "Induction of an inertia constituent is irreducible"
status: published
origin: "pipeline"
deps: ["lem-normal-restriction-constituents-form-one-conjugacy-orbit", "lem-normal-isotypical-components-are-permuted-by-translation", "prop-induced-module-decomposes-over-a-left-transversal", "thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — Theorem 4.2.4(1) pp.55–56; Späth Theorem 1.2"
      url: "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf"
proof_strategy: direct
---

## Statement

Let $G$ be finite, $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$, and $I=I_G(\theta)$. If $W$ is an irreducible complex $I$-module lying over $\theta$, then $W|_N$ is $\theta$-isotypical and $X=\operatorname{Ind}_I^G W$ is irreducible. Its $\theta$-isotypical component is the identity-coset copy of $W$, consisting of the covariant functions supported on $I$.

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the statement. All representations here are finite-dimensional complex left representations.

[F1] For an irreducible module of a finite group, restriction to a normal subgroup has one orbit of constituents. ([[lem-normal-restriction-constituents-form-one-conjugacy-orbit]]).

[F2] An $N$-submodule of a complex $G$-module is the direct sum of its intersections with the normal isotypical components. ([[lem-normal-isotypical-components-are-permuted-by-translation]]).

[F3] Evaluation on a finite left transversal identifies an induced function module with the direct sum of its coset-supported copies of the inducing space. ([[prop-induced-module-decomposes-over-a-left-transversal]]).

## Proof

**Proof technique:** direct.

1.1 Apply the orbit result inside $I$: every element of $I$ fixes $\theta$, so $W|_N$ is a positive number of copies of $\theta$. [F1, given]

2.1 Use a left transversal $T$ containing $1$, and write $X=\bigoplus_{t\in T}X_t$, where $X_t$ consists of functions supported on $tI$. For $n\in N$, covariance gives $(nf)(t)=f(n^{-1}t)=f(t(t^{-1}n^{-1}t))=(t^{-1}nt)f(t)$. Thus evaluation makes $X_t$ a module of type ${}^t\theta$. These types are distinct for distinct $tI$, so the $X_t$ are exactly the normal isotypical components, and $X_1\cong W$ as an $I$-module. [F3, step 1.1, algebra]

3.1 If $Y\subseteq X$ is a nonzero $G$-submodule, the intersection decomposition gives $Y\cap X_t\ne0$ for some $t$. Left translation by $t^{-1}$ carries $X_t$ onto $X_1$ and preserves $Y$, so $Y\cap X_1\ne0$. This intersection is $I$-stable, hence equals $X_1$ by irreducibility of $W$. Translating back fills every $X_t$, giving $Y=X$. This includes $I=G$ (one block) and $I=N$ (induction of the chosen normal type). [F2, step 2.1, given] ∎
