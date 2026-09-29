---
page: "weak-derivatives-and-sobolev-spaces"
title: "Weak Derivatives and Sobolev Spaces"
status: draft
items: ["def-locally-integrable-function-as-a-regular-distribution", "def-weak-derivative-of-a-locally-integrable-function", "lem-weak-derivative-is-independent-of-lp-representatives", "lem-weak-derivatives-are-unique-almost-everywhere", "def-sobolev-space-wkp-and-its-norm", "lem-classical-derivatives-are-weak-derivatives", "lem-weak-derivative-linearity-locality-and-commutation", "rem-weak-derivatives-are-distributional-derivatives-with-function-values", "def-absolute-continuity-on-almost-every-coordinate-line", "lem-sobolev-integration-by-parts-for-dual-exponents", "lem-sobolev-norm-is-well-defined-and-definite", "lem-sobolev-pasting-across-an-overlap", "lem-weak-leibniz-rule-with-a-smooth-factor", "lem-weak-stability-of-sobolev-derivatives", "thm-zero-weak-gradient-implies-componentwise-constancy", "cor-weak-derivative-operator-is-closed-between-lp-spaces", "def-hk-and-hk-zero-notation", "lem-acl-representatives-reconstruct-weak-gradients-by-fubini", "lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces", "lem-weak-lower-semicontinuity-of-the-sobolev-norm", "thm-sobolev-spaces-are-banach-spaces", "thm-acl-characterisation-of-w-one-p", "thm-hk-is-a-hilbert-space", "cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives", "thm-sobolev-chain-rule-for-c-one-lipschitz-compositions", "thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions", "cor-positive-negative-part-and-truncation-calculus-in-w-one-p", "cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p"]
examples: []
---

This page develops weak differentiation of locally integrable functions on
Euclidean domains. Locally integrable functions are read as regular
distributions, a weak derivative is defined by the integration-by-parts
identity against test functions, and it is unique as an almost-everywhere
class, independent of the chosen representative, and compatible with
classical differentiation; weak differentiation is linear, local, commutes
with coordinate partials, and obeys the smooth-factor Leibniz rule. The
integer-order Sobolev spaces $W^{k,p}(\Omega;\mathbb K)$ are then the classes
whose weak derivatives up to order $k$ lie in $L^p$, equipped with the
derivative-sum norm for $1\le p\le\infty$, shown to be well defined and
definite on classes, weakly lower semicontinuous, and complete (Banach);
$H^k=W^{k,2}$ carries the derivative-sum inner product and is a Hilbert
space, while $H^k_0$ is reserved for a later closure definition. Distributional
integration by parts for dual exponents, bounded restriction and smooth-cutoff
localisation, and pasting across an overlap supply the working tools. On the
analytic side, absolute continuity on almost every coordinate line
characterises $W^{1,p}$, the Fubini reconstruction lemma recovers weak
gradients from line derivatives, and in one dimension every $W^{1,p}$ class
has an absolutely continuous representative. Chain rules are proved for
$C^1$ compositions with bounded derivative and for globally Lipschitz scalar
functions, and $W^{1,p}$ is closed under positive and negative parts,
truncation, and maxima and minima of two functions.

Conventions: $\Omega\subseteq\mathbb R^n$ is open with $n\ge1$,
$1\le p\le\infty$, $k\in\mathbb N_0$, the scalar field $\mathbb K$ is
$\mathbb R$ or $\mathbb C$, and coordinates are indexed
$x_1,\dots,x_n$ with basis $e_1,\dots,e_n$. Sobolev spaces are
almost-everywhere classes, so every membership statement is
representative-independent. Countable Choice is declared through the
published distribution, measure, $L^p$ and Fubini interfaces that carry it,
and the completeness, ACL and chain- and truncation-calculus items declare the
Axiom of Choice exactly where they invoke the published choice-bearing
interfaces, which in turn supply the Countable and Dependent Choice instances
those interfaces need. The mollifier argument constructs local smooth approximants for the ACL
proof, but the page proves no global smooth-density theorem, density of test
functions, extension, trace, embedding, Poincare or compactness theorem;
$H^k_0$ is only a reserved symbol here, and no weak gradient is claimed to be
continuous.
