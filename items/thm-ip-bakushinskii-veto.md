---
id: thm-ip-bakushinskii-veto
kind: theorem
title: Bakushinskii veto for discontinuous pseudoinverses
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-countable-choice
  - def-ip-compact-linear-inverse-model
  - def-ip-noise-level-free-parameter-rule
  - def-ip-unbounded-hilbert-moore-penrose-inverse
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, Theorem 4.8"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Chapter 4, Theorem 4.8 and proof, PDF p. 37; following scope discussion, PDF pp. 37–38."
    - title: "Ferdia Sherry, Inverse Problems: Lecture Notes 2024, Theorem 3.12"
      url: "https://ferdiasherry.com/LectureNotes2024.pdf"
      locator: "Section 3.2.3, Theorem 3.12 and complete proof, PDF pp. 33–34."
---

## Statement

Assume Countable Choice. Let $K:X\to Y$ be a compact linear operator between
real or complex Hilbert spaces over one scalar field, with Hilbert-space
Moore–Penrose inverse $K^\dagger:D(K^\dagger)\to X$. Suppose $K^\dagger$ is
discontinuous on $D(K^\dagger)$ with its norm inherited from $Y$. Let
$(R_\alpha)_{\alpha>0}$ be maps $Y\to X$ such that
$R_\alpha y\to K^\dagger y$ for every $y\in D(K^\dagger)$ as
$\alpha\downarrow0$, and let $\alpha:Y\to(0,\infty)$ be a deterministic
noise-level-free rule. For each exact datum $y\in D(K^\dagger)$ and
$\delta>0$, set $E_y(\delta):=\sup\{\|R_{\alpha(z)}z-K^\dagger y\|_X:z\in Y,\ \|z-y\|_Y\le\delta\}$.
If $E_y(\delta)\to0$ as $\delta\downarrow0$ for every $y\in D(K^\dagger)$,
then $K^\dagger$ is continuous on $D(K^\dagger).$ Thus, when $K^\dagger$ is
discontinuous, no such noise-level-free rule yields worst-case convergence
over each exact datum's full admissible error balls. The limit is required
separately for each exact datum, not uniformly over $y$. This veto does not
exclude convergence on restricted solution or error classes, stochastic noise
models, or finite-dimensional problems.

## Statement references

[[def-ip-compact-linear-inverse-model|Compact Hilbert inverse model]]

[[def-ip-unbounded-hilbert-moore-penrose-inverse|Hilbert-space Moore–Penrose inverse and its domain]]

[[def-ip-noise-level-free-parameter-rule|Noise-level-free parameter-choice rule]]

[Clason, Regularization of Inverse Problems, Theorem 4.8](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Sherry, Inverse Problems: Lecture Notes 2024, Theorem 3.12](https://ferdiasherry.com/LectureNotes2024.pdf)

## Facts & Assumptions

**Given:** Countable Choice, a compact linear map $K:X\to Y$ between real or complex Hilbert spaces over one scalar field, its Moore–Penrose inverse $K^\dagger$ discontinuous on $D(K^\dagger)$, a family $(R_\alpha)_{\alpha>0}$ that converges pointwise to $K^\dagger$ on this domain, a noise-level-free rule $\alpha:Y\to(0,\infty)$, and the convergence condition $E_y(\delta)\to0$ for each $y\in D(K^\dagger)$.

[A1] [[def-countable-choice]]: For every family $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$, there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n$.

[F1] [[def-ip-compact-linear-inverse-model]]: The compact inverse model has real or complex Hilbert parameter and data spaces over one scalar field and a compact linear forward map $K:X\to Y$.

[F2] [[def-ip-unbounded-hilbert-moore-penrose-inverse]]: The inverse has domain $D(K^\dagger)=R(K)\oplus R(K)^\perp$ and maps $r+z$ to the unique minimum-norm solution of $Kx=r$.

[F3] [[def-ip-noise-level-free-parameter-rule]]: For the fixed operator and reconstruction family, $\alpha$ is a function of the observed datum alone; its value does not take the exact datum or noise bound as input.

## Proof

1.1 Fix $y\in D(K^\dagger)$ and put $T(y):=R_{\alpha(y)}y$. By [F3], this vector is independent of $\delta$. Since $y$ itself satisfies $\|y-y\|_Y=0\le\delta$ for every $\delta>0$, the supremum defining $E_y(\delta)$ gives $\|T(y)-K^\dagger y\|_X\le E_y(\delta)$ for every $\delta>0$. Letting $\delta\downarrow0$ proves $T(y)=K^\dagger y$. [given, A1, F1, F2, F3, algebra]

2.1 Fix $y\in D(K^\dagger)$ and $\varepsilon>0$. By the assumed limit choose $r>0$ such that $E_y(r)<\varepsilon$. For any $z\in D(K^\dagger)$ with $\|z-y\|_Y\le r$, step 1.1 applied to $z$ gives $R_{\alpha(z)}z=K^\dagger z$, while $z$ belongs to the ball in $E_y(r)$. Hence $\|K^\dagger z-K^\dagger y\|_X\le E_y(r)<\varepsilon$. This is continuity of $K^\dagger$ at the arbitrary point $y$ in its subspace domain, contradicting the hypothesis. [given, step 1.1, F2, F3, choose, algebra] ∎
