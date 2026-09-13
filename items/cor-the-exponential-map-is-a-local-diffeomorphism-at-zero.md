---
id: cor-the-exponential-map-is-a-local-diffeomorphism-at-zero
kind: corollary
title: The exponential map is a local diffeomorphism at zero
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero", "thm-smooth-inverse-function-theorem-on-manifolds"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad and Aaron Landesman, Compact Lie Groups
      url: https://math.stanford.edu/~conrad/249BW16Page/handouts/249B_2016.pdf
      locator: Lemma 6.7 and inverse-function-theorem consequence, printed pages 28–29
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 3.7(2) and proof, printed pages 30–31
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group
with identity $e$ and Lie algebra $\mathfrak g$. There are open neighborhoods
$V\subseteq\mathfrak g$ of $0$ and $U\subseteq G$ of $e$ such that

$$\exp_G|_V:V\longrightarrow U$$

is a diffeomorphism. The countable-choice assumption is inherited exactly from
the supplied smoothness and identity-differential theorem.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a finite-dimensional real Lie group $G$
with identity $e$ and Lie algebra $\mathfrak g$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] Assuming $\mathrm{AC}_\omega$, $\exp_G$ is smooth,
$\exp_G(0)=e$, and $d(\exp_G)_0=\operatorname{id}_{\mathfrak g}$.
[[thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero]].

[F3] A smooth map whose differential at a point is an isomorphism restricts
to a diffeomorphism between neighborhoods of that point and its image.
[[thm-smooth-inverse-function-theorem-on-manifolds]].

## Proof

**Proof technique:** direct.

1.1 By [F2], $\exp_G$ is smooth, sends $0$ to $e$, and its differential at $0$ is the identity of $\mathfrak g$, hence a linear isomorphism. [F2]

2.1 Apply [F3] to $F=\exp_G$ at $0$. Using step 1.1, obtain open neighborhoods $V$ of $0$ and $U$ of $e=\exp_G(0)$ such that $\exp_G|_V:V\to U$ is a diffeomorphism. [F2, F3, step 1.1]

3.1 Lie groups are nonempty and boundaryless. If $\dim G=0$, then $V=\{0\}$ and $U=\{e\}$ may be chosen open and the restriction is the unique diffeomorphism; in dimension one the same inverse function theorem applies. The neighborhoods are open and contain their named points, so there is no endpoint issue. No metric or nondegeneracy condition occurs. The only choice use is the stated $\mathrm{AC}_\omega$, inherited through [F2]; applying [F3] once adds no family choice. No biconditional is asserted. [F1, F2, F3, step 1.1, step 2.1] ∎
