---
id: def-japanese-bracket-bessel-potential-operator
kind: definition
title: Japanese-bracket and Laplacian Bessel-potential operators
status: published
origin: pipeline
deps:
  - def-schwartz-space-and-its-seminorms
  - lem-japanese-bracket-powers-preserve-schwartz-space
  - lem-smooth-polynomially-bounded-multipliers-on-schwartz-space
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions
  - def-countable-choice
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "§12.1.2, Japanese bracket (12.3) and the weighted Sobolev definitions, printed p. 140"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
      locator: "§6.2, Definition 6.5 and the surrounding multiplier discussion, printed p. 25; source normalization converted to the 2 pi convention"
---

## Definition

Assume [[def-countable-choice|Countable Choice]] and let $n\ge1$. Throughout,
$\langle\xi\rangle=(1+|\xi|^2)^{1/2}$ is the Japanese bracket and
$\mathcal F$ is the negative-sign $2\pi$-normalized Fourier transform, an
automorphism of $\mathcal S'(\mathbb R^n)$ with inverse $\mathcal F^{-1}$
([[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]]).

**Japanese-bracket operator.** For real $t$ and $u\in\mathcal S'(\mathbb R^n)$ define
$$\langle D\rangle^tu:=\mathcal F^{-1}\bigl(\langle\xi\rangle^t\mathcal Fu\bigr)\in\mathcal S'(\mathbb R^n),$$
where $\langle\xi\rangle^t\mathcal Fu$ is multiplication of the tempered
distribution $\mathcal Fu$ by the smooth symbol $\langle\xi\rangle^t$.

**Laplacian Bessel-potential operator.** Independently, define
$$(I-\Delta)^{t/2}u:=\mathcal F^{-1}\bigl((1+4\pi^2|\xi|^2)^{t/2}\mathcal Fu\bigr)\in\mathcal S'(\mathbb R^n).$$

**Well-definedness and invertibility.** The symbols
$w_t(\xi)=\langle\xi\rangle^t$, $w_{-t}(\xi)=\langle\xi\rangle^{-t}$,
$a_t(\xi)=(1+4\pi^2|\xi|^2)^{t/2}$ and $a_{-t}(\xi)=(1+4\pi^2|\xi|^2)^{-t/2}$
are smooth, and every derivative has polynomial growth. For $w_{\pm t}$ this is
[[lem-japanese-bracket-powers-preserve-schwartz-space]], which also states that
these two multipliers act continuously and inversely on $\mathcal S$ and, by
transposition, on $\mathcal S'$. For $a_{\pm t}$ the chain rule and induction
on $|\alpha|$ write
$$\partial^\alpha a_t(\xi)=\sum_jP_{\alpha,j}(\xi)\,(1+4\pi^2|\xi|^2)^{t/2-j}$$
with polynomials $P_{\alpha,j}$ of degree at most $|\alpha|$; since
$1+4\pi^2|\xi|^2$ is bounded above and below by positive constant multiples of
$\langle\xi\rangle^2$, each term is $O(\langle\xi\rangle^{t+|\alpha|})$ on
$\mathbb R^n$, so every derivative of $a_t$ has polynomial growth, and the same
holds for $a_{-t}$. Hence
[[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]] makes
multiplication by either symbol a continuous endomorphism of
$\mathcal S(\mathbb R^n)$ whose transpose is a continuous endomorphism of
$\mathcal S'(\mathbb R^n)$ for both dual topologies. Since
$a_ta_{-t}=1$ pointwise, the two transposed maps are inverse: evaluated on a
Schwartz test $\varphi$ one has
$\langle a_t(a_{-t}u),\varphi\rangle=\langle u,a_{-t}(a_t\varphi)\rangle=\langle u,\varphi\rangle$,
and likewise with the factors exchanged. Thus both $\langle D\rangle^t$ and
$(I-\Delta)^{t/2}$ are continuous bijections of $\mathcal S'(\mathbb R^n)$ with
inverses $\langle D\rangle^{-t}$ and $(I-\Delta)^{-t/2}$. No self-adjointness,
spectral-theorem or positivity assertion is made here; the operators are
defined by their Fourier symbols on tempered distributions.

**Consistency at integer order.** For every nonnegative integer $m$,
$$\mathcal F\bigl((I-\Delta)^mu\bigr)=(1+4\pi^2|\xi|^2)^m\mathcal Fu,$$
because the published Fourier differentiation identity gives
$\mathcal F(\partial_j^2u)=(2\pi i\xi_j)^2\mathcal Fu=-4\pi^2\xi_j^2\mathcal Fu$,
summation over $j$ gives
$\mathcal F(\Delta u)=-4\pi^2|\xi|^2\mathcal Fu$, and iterating $m$ times
([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]).
So the symbol $(1+4\pi^2|\xi|^2)^{m}$ really is the integer power of
$I-\Delta$ under this normalization.

**The two symbols differ.** For $t\ne0$ the symbols $\langle\xi\rangle^t$ and
$(1+4\pi^2|\xi|^2)^{t/2}$ differ at every $\xi\ne0$: equality would give
$1+|\xi|^2=1+4\pi^2|\xi|^2$, hence $|\xi|=0$, since $4\pi^2\ne1$ and
$x\mapsto x^{t/2}$ is injective on $(0,\infty)$ for $t\ne0$. They agree at
$\xi=0$, a Lebesgue-null set of frequencies. Consequently $\langle D\rangle^t$
and $(I-\Delta)^{t/2}$ are different operators for $t\ne0$, and in particular
$\langle D\rangle^t$ is not the Bessel potential $(I-\Delta)^{t/2}$; the
bracket symbol uses the $2\pi$-independent weight, while the Laplacian symbol
carries the factor $4\pi^2$ from $\mathcal F(\partial_j)=2\pi i\xi_j\mathcal F$.
