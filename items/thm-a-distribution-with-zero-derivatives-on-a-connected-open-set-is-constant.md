---
id: "thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant"
kind: "theorem"
title: "A distribution with zero derivatives on a connected open set is constant"
deps: ["def-distributional-derivative", "thm-convolution-with-a-test-function-is-smooth", "thm-mollifier-approximation-in-distributions", "thm-distributions-form-a-sheaf", "def-countable-choice", "thm-mean-value-inequality", "lem-test-function-cutoffs-and-euclidean-localization", "thm-distributional-differentiation-is-continuous-and-commutes"]
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
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume Countable Choice for the Lebesgue regular-distribution convention. If $\Omega\subseteq\mathbb R^n$ is nonempty, open and connected and $\partial_j u=0$ for every $1\le j\le n$, then there is a unique $c\in\mathbb C$ such that $u(\psi)=c\int\psi$ for every test. Conversely every constant regular distribution has zero first derivatives. On a disconnected open set constants may differ on different connected components.

## Facts & Assumptions

[F1] Smooth local convolutions satisfy $\partial_j(u*\rho_\varepsilon)=(\partial_j u)*\rho_\varepsilon$ ([[thm-convolution-with-a-test-function-is-smooth]]).

[F2] Unit-mass mollifications converge locally in distribution pairings under Countable Choice ([[thm-mollifier-approximation-in-distributions]]).

[F3] A compact ball admits a nonnegative smooth compact cutoff, so a nonzero such bump inside any open ball can be normalized by its positive finite integral ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F4] The mean-value inequality for $\mathbb C=\mathbb R^2$ implies that a smooth function with zero gradient is constant on a ball ([[thm-mean-value-inequality]]).

[F5] Distributions equal on an open cover are equal globally ([[thm-distributions-form-a-sheaf]]).

[F6] Classical derivatives of smooth regular distributions agree with distribution derivatives under Countable Choice ([[thm-distributional-differentiation-is-continuous-and-commutes]]). We assume [[def-countable-choice]] for F2 and this regular interpretation.

## Proof

**Given:** the vanishing first derivatives and the stated choice assumption.

1.1 Take any open ball $B$ with compact closure in $\Omega$. For all sufficiently small $\varepsilon>0$, F1 gives a smooth mollification on a neighborhood of $\overline B$ with every first derivative zero. Along the segment between any two points of $B$, the chain rule gives derivative zero; F4 with bound zero makes their values equal. Denote this value by $c_\varepsilon$. [given, F1, F2, F4]

2.1 Choose $\eta\in\mathcal D(B)$ with $\int\eta=1$ using F3. Then F2 gives $c_\varepsilon=\int (u*\rho_\varepsilon)\eta\to u(\eta)=c_B$. For every $\psi\in\mathcal D(B)$, F2 therefore gives $u(\psi)=\lim c_\varepsilon\int\psi=c_B\int\psi$. A unit-integral test also shows uniqueness of this constant on $B$. [step 1.1, F2, F3]

3.1 If two such balls overlap, their intersection contains an open ball and hence a unit-integral test by F3. Evaluation on that test proves that their constants agree. Consequently there is a well-defined locally constant function $c(x)$ on $\Omega$, whose value is the unique constant of any sufficiently small ball about $x$. For a fixed $x_0$, the set $\{x:c(x)=c(x_0)\}$ and its complement are open. It is nonempty, so connectedness forces the complement empty. F5 applied to the ball cover yields $u=c(x_0)$ as a regular distribution. A unit-integral test anywhere proves uniqueness. [step 2.1, given, F3, F5]

4.1 F6 proves the converse, since the classical first derivatives of a constant vanish. In any open subset of Euclidean space each connected component is open: a ball about a point is connected and belongs to its component. Applying the preceding argument in each component gives independent constants. Conversely such a componentwise constant function is locally constant, hence smooth, and F6 gives zero derivatives. On the empty domain the sole distribution is zero but its representing constant is not unique; this explains the nonempty hypothesis. Countable Choice is inherited only from the integral mollification and regular-derivative clauses, not from the overlap argument. $\square$ [step 3.1, F6]
