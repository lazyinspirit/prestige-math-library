---
id: def-nevanlinna-exceptional-radius-notation
kind: definition
title: "Nevanlinna exceptional-radius error notation"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-nevanlinna-counting-proximity-and-characteristic
  - def-order-of-growth-meromorphic-function
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §§4–6"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§§4–6, printed pp. 6–14: the error terms S(r) of the Second Main Theorem and of the logarithmic-derivative lemma"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §§1–2, printed pp. 87–98; Ch. 4 §3, printed pp. 121–122"
verification:
  audited: 2026-10-02
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Under this
assumption the Lebesgue measurable subsets of $\mathbb R$ form a
$\sigma$-algebra and Lebesgue measure is a complete measure
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]],
[[thm-lebesgue-measure-is-a-complete-measure]]).

Let $f$ be a nonconstant meromorphic function on $\mathbb C$, with
characteristic $T(r,f)$ as in
[[def-nevanlinna-counting-proximity-and-characteristic]]. By
[[def-order-of-growth-meromorphic-function]], $T(r,f)>1$ for all sufficiently
large $r$.

An **error term for $f$**, written $S(r,f)$, is a function $e$ on a half-line
$[r_0,\infty)$ with $r_0\ge1$ for which there are a constant $C\ge0$, a radius
$r_0'\ge r_0$, and a Lebesgue measurable set $E\subseteq[r_0',\infty)$ of
finite linear measure, $\lambda(E)<\infty$, such that

$$ |e(r)|\le C\bigl(\log^+T(r,f)+\log r\bigr)\qquad\text{for every }r\ge r_0'\text{ with }r\notin E . $$

The notation $X(r,f)=S(r,f)$ means that the function
$r\mapsto X(r,f)$ is an error term in this sense; the constant $C$, the
threshold $r_0'$ and the exceptional set $E$ belong to that particular
occurrence. No bound is asserted at the radii belonging to $E$.

## Remarks

- **The exceptional set is part of each occurrence.** Two occurrences of
  $S(r,f)$ in one formula may use different constants, thresholds and
  exceptional sets. A chain of estimates that uses $k$ occurrences may take the
  union $E_1\cup\dots\cup E_k$ as a common exceptional set; a finite union of
  sets of finite linear measure again has finite linear measure, and the sum of
  the constants bounds the sum of the error terms.
- **$S(r,f)$ denotes no single fixed function.** Error terms for fixed
  $f$ are closed under finite real linear combinations on a common half-line,
  by the finite-union estimate above. The symbol abbreviates "some function
  satisfying the displayed bound"; replacing
  the constant or the exceptional set by larger ones produces another valid
  occurrence of the same symbol.
- **No all-radius bound and no sharper order is implicit.** Membership in
  $S(r,f)$ alone gives no information at exceptional radii and no information
  beyond the stated bound. The logarithmic-derivative lemma supplies an
  all-radius $O(\log r)$
  estimate when $f$ has finite order and an all-radius $O(1)$ estimate when
  $f$ is rational. These are sufficient hypotheses for those estimates,
  not necessary ones: for $f(z)=e^z$, $f'/f=1$ and
  $m_0(r,f'/f)=0$ at every radius although $f$ is transcendental. No
  refinement of an arbitrary occurrence of $S(r,f)$ follows solely from
  the order or rationality of $f$.
- **The exact use of Countable Choice.** It is used only through the published
  measure interface: finite linear measure of $E$ and its finite unions, and
  the measurability of the sets of bad radii that occur. Every occurrence of
  $S(r,f)$ in this page carries the assumption explicitly, and no stronger
  choice principle is used.
