---
id: cex-lp-functions-need-not-have-point-values
kind: counterexample
title: Lp and Sobolev classes do not determine point values
status: published
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, lem-weak-derivative-is-independent-of-lp-representatives, prop-countable-subsets-of-rn-are-lebesgue-null, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, prop-indicator-function-is-measurable-iff-its-set-is-measurable, cor-integral-over-a-null-set-vanishes]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3 §3.5
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Definition 3.23, printed pp. 58–59; identifies functions equal almost everywhere
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 1 §1.2
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Definition 1.8 and Remark 1.9(1), printed pp. 4–5
---

## Statement

Assume Countable Choice. Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be a
nonempty open set, and fix $x_0\in\Omega$. For every $k\in\mathbb N_0$,
$1\le p\le\infty$, and $\mathbb K\in\{\mathbb R,\mathbb C\}$, the zero
function and the point spike
$$u_0(x)=0,\qquad u_1(x)=\mathbf1_{\{x_0\}}(x)$$
represent the same element of $L^p(\Omega;\mathbb K)$ and
$W^{k,p}(\Omega;\mathbb K)$, although $u_0(x_0)=0$ and $u_1(x_0)=1$.
Consequently evaluation at $x_0$ is not a well-defined operation on either
equivalence class.

## Facts & Assumptions

**Given:** Countable Choice, a nonempty open $\Omega\subseteq\mathbb R^n$,
$n\ge1$, $x_0\in\Omega$, $k\in\mathbb N_0$, $1\le p\le\infty$, and
$\mathbb K\in\{\mathbb R,\mathbb C\}$.

[F1] Every at most countable subset of $\mathbb R^n$ is Lebesgue measurable
and null under Countable Choice. In particular, $\{x_0\}$ is measurable and
null. ([[prop-countable-subsets-of-rn-are-lebesgue-null]])

[F2] An indicator of a measurable set is measurable.
([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]])

[F3] An $L^p$ element is an almost-everywhere equivalence class of measurable
representatives. ([[def-l-p-space-as-a-quotient-by-null-functions]])

[F4] A $W^{k,p}$ class has an $L^p$ representative whose weak derivatives
$D^\alpha u$ lie in $L^p$ for every $|\alpha|\le k$; representatives and
weak derivative classes are well-defined under Countable Choice.
([[def-sobolev-space-wkp-and-its-norm]])

[F7] The zero multi-index derivative is the function class itself:
$D^0u=u$. ([[def-sobolev-space-wkp-and-its-norm]])

[F5] Weak differentiation is unchanged when both the input and derivative
representatives are changed on null sets, for all $1\le p\le\infty$ under
Countable Choice. ([[lem-weak-derivative-is-independent-of-lp-representatives]])

[F6] A nonnegative measurable function has integral zero over a measurable
null set. ([[cor-integral-over-a-null-set-vanishes]])

[F8] Countable Choice, or $\mathrm{AC}_\omega$, says that every sequence of
nonempty sets has a choice function selecting one element from each set.
([[def-countable-choice]])

## Counterexample

**Proof technique:** direct.

1.1 Put $E=\{x_0\}$. By [F1], $E$ is measurable and $|E|=0$, so [F2] makes $u_1=\mathbf1_E$ measurable. Both functions are locally integrable; for every compact $K\subseteq\Omega$, $$\int_K|u_1|\,dx=\int_{K\cap E}1\,dx=0$$ by [F6]. They agree at every $x\ne x_0$, hence almost everywhere. For $1\le p<\infty$, $$\int_\Omega|u_1|^p\,dx=\int_E1\,dx=0$$ again by [F6]; for $p=\infty$, every positive superlevel set $\{|u_1|>\varepsilon\}$ is empty or $E$, so its measure is zero and $\|u_1\|_{L^\infty}=0$. Thus $[u_0]=[u_1]$ in every $L^p$ by [F3], including both endpoints. [F1, F2, F3, F6, given]

2.1 For every multi-index $\alpha$, zero has weak derivative zero because both sides of its test identity vanish. The functions $u_0,u_1,0,0$ are locally integrable and $u_0=u_1$ almost everywhere, so [F5] transfers the identity to $u_1$: zero is a weak derivative of both representatives at every order. At $\alpha=0$ the derivative class is their common zero $L^p$ class by [F7]; for $|\alpha|>0$ it is the zero $L^p$ class. By [F4], both belong to $W^{k,p}$ with identical derivative classes through order $k$, so every term in the Sobolev norm is zero. This includes $k=0$, $p=1$, and $p=\infty$. [F4, F5, F7, step 1.1, given]

3.1 The representatives have different point values, $u_0(x_0)=0$ and $u_1(x_0)=1$, although [F3] and [F4] identify them as the same $L^p$ and $W^{k,p}$ elements. A value at $x_0$ therefore cannot be assigned from either class alone. After fixing $x_0$, the construction makes no choices; the stated Countable Choice hypothesis is exactly $\mathrm{AC}_\omega$ by [F8] and is carried only through the null-set, representative-independence, and Sobolev-class interfaces. No full Axiom of Choice is used. [F3, F4, F8, step 1.1, step 2.1, given] ∎
