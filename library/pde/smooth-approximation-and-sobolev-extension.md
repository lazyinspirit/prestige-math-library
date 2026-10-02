---
page: smooth-approximation-and-sobolev-extension
title: Smooth Approximation and Sobolev Extension
status: draft
items: ["lem-mollification-commutes-with-weak-derivatives-in-the-interior", "thm-local-smooth-approximation-in-wkp", "thm-meyers-serrin-density-on-an-arbitrary-open-set", "cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn", "rem-meyers-serrin-does-not-assert-density-for-p-infinity", "def-wkp-zero-as-a-sobolev-closure", "lem-zero-extension-from-w-one-p-zero", "lem-compact-support-zero-extension-in-wkp", "def-sobolev-extension-domain-and-extension-operator", "thm-wkp-extension-from-a-half-space", "def-bounded-c-k-domain-and-boundary-charts", "lem-c-k-boundary-flattening-preserves-wkp-locally", "thm-extension-theorem-for-bounded-smooth-domains", "thm-smooth-up-to-the-boundary-density-on-smooth-domains", "cor-sobolev-embeddings-transfer-from-rn-to-extension-domains", "rem-lipschitz-versus-c-one-versus-smooth-domain-hypotheses"]
examples: []
---

This page develops the approximation and extension theory of integer-order
Sobolev spaces. Mollification is first shown to commute with weak derivatives
on the interior of a domain, and the resulting interior mollifications of a
class in $W^{k,p}$ converge to it in $W^{k,p}$ on every compactly contained
open subset, for every $1\le p<\infty$. Meyers–Serrin density on an arbitrary
open set is then obtained by exhausting the domain with compact pieces and
mollifying each piece with a dyadic error budget, summing the errors rather
than the pieces; it requires no regularity of the boundary and no extension of
the class beyond the domain, and the endpoint $p=\infty$ is excluded, as the
one-dimensional corner $|x|$ witnesses. On the whole space the argument
upgrades to compactly supported smooth approximation.

The second half introduces zero extension and extension operators. The space
$W_0^{k,p}$ is defined as a closure, zero extension is proved for classes
supported in a compact subset of the open set in every order and exponent, and
the one-dimensional case $W_0^{1,p}$ is treated through test-function
approximants. A $W^{k,p}$-extension domain is an open set for which restriction
admits a bounded linear right inverse. The half-space operator is constructed
by reflection with Vandermonde-matched moments, the flattening of $C^k$
boundary charts is shown to preserve $W^{k,p}$ locally, and the two are
combined into a bounded extension operator on every bounded $C^k$ domain whose
output is supported in any prescribed neighbourhood of the closure. On such
domains, restrictions of globally smooth compactly supported functions are
dense for $1\le p<\infty$, and whole-space Sobolev inequalities transfer
through the extension operator with its operator norm. A closing remark
records the exact boundary regularity each construction uses, together with
the endpoints and strengthenings the page does not claim.

Conventions: $\Omega\subseteq\mathbb R^n$ is open with $n\ge1$,
$1\le p\le\infty$, $k\in\mathbb N_0$, and the scalar field $\mathbb K$ is
$\mathbb R$ or $\mathbb C$; Sobolev spaces are almost-everywhere classes and
restriction is a contraction. Countable Choice is declared through the
published measure, convolution, weak-derivative and localization interfaces
that carry it, and the Axiom of Choice is declared on the extension and
boundary-density items exactly where their chart, partition and ACL
interfaces invoke it. The scalar field is complex where the cited convolution
interface is complex; no trace operator, no boundary point values and no
$W^{k,\infty}$ norm density are asserted on this page.
