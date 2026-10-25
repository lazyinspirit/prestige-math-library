---
id: rem-lipschitz-versus-c-one-versus-smooth-domain-hypotheses
kind: remark
title: Boundary regularity required by the constructed extension
status: published
origin: pipeline
deps: [cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, def-axiom-of-choice, thm-meyers-serrin-density-on-an-arbitrary-open-set, rem-meyers-serrin-does-not-assert-density-for-p-infinity, lem-zero-extension-from-w-one-p-zero, def-wkp-zero-as-a-sobolev-closure, def-bounded-c-k-domain-and-boundary-charts, lem-mollification-commutes-with-weak-derivatives-in-the-interior, lem-c-k-boundary-flattening-preserves-wkp-locally, thm-extension-theorem-for-bounded-smooth-domains, thm-smooth-up-to-the-boundary-density-on-smooth-domains]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Definition 3.10 and Theorem 3.12
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.5–§3.6, printed pp. 58–62
    - title: Sung-Jin Oh, Lecture Notes for Math 222A (2024), Remark 11.14
      url: https://web.math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
      locator: §11.3, Proposition 11.13 and Remark 11.14, printed pp. 157–159
verification:
  audited: 2026-10-02
---

## Remark

The four approximation and extension statements on this page carry
deliberately different regularity hypotheses on $\partial\Omega$, and none of
them may be strengthened by accident. This remark records what each
construction actually uses. The comparisons retain the cited Choice hypotheses: Countable Choice for the density and zero-extension interfaces, and the Axiom of Choice for the constructed bounded-domain extension and boundary-density interfaces.

**Approximation needs no boundary regularity.** Meyers–Serrin density
[[thm-meyers-serrin-density-on-an-arbitrary-open-set]], under Countable Choice, assumes only that
$\Omega$ is open and that $1\le p<\infty$: no boundary chart, no extension
operator and no unboundedness of the derivatives of a cutoff near $\partial
\Omega$ enters, because the argument exhausts $\Omega$ by compactly contained
pieces. Likewise the zero extension of
[[lem-zero-extension-from-w-one-p-zero]] is defined by extending a class in
$W_0^{1,p}(\Omega)$ by zero, and the limit definition of the closure
[[def-wkp-zero-as-a-sobolev-closure]] requires no boundary regularity; the
price is the membership hypothesis in $W_0^{1,p}$, not a hypothesis on
$\partial\Omega$. The interior mollification
[[lem-mollification-commutes-with-weak-derivatives-in-the-interior]] is
available only on the shrinking sets
$\Omega_\varepsilon=\{x\in\Omega:\operatorname{dist}(x,\mathbb R^n\setminus
\Omega)>\varepsilon\}$. For a general class on $\Omega$, this interior
construction alone supplies convergence on compactly contained subsets, not
convergence in the norm on all of $\Omega$. A licensed extension to the whole
space changes that conclusion: for $u\in W_0^{1,p}(\Omega)$ and
$1\le p<\infty$, zero extension lies in $W^{1,p}(\mathbb R^n)$ by
[[lem-zero-extension-from-w-one-p-zero]]. Whole-space mollification then
converges in $W^{1,p}(\mathbb R^n)$, and restriction gives convergence on
$\Omega$, including regions arbitrarily close to its boundary. Indeed, the
whole-space density corollary
[[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]] supplies
ambient compactly supported smooth restrictions converging to $u$ without
any boundary regularity. These restrictions need not themselves lie in
$C_c^\infty(\Omega)$ or have zero boundary values.

**Extension needs exactly the chart regularity of its order.** The half-space
operator and the $C^k$ flattening lemma
[[lem-c-k-boundary-flattening-preserves-wkp-locally]] are combined by
[[thm-extension-theorem-for-bounded-smooth-domains]] under the hypothesis
that $\Omega$ is a bounded $C^k$ domain in the graph sense of
[[def-bounded-c-k-domain-and-boundary-charts]]: at each boundary point the
flattening chart and the graph function $h$ must have bounded derivatives
through order $k$, because the pullback of a $W^{k,p}$ class needs bounded
derivatives of the chart through that same order, and the reflected moment
formula cancels interface terms involving derivatives up to order $k-1$. For
fixed $k$ the hypothesis is "boundary of class $C^k$": a $C^1$ boundary
suffices for the first-order theorem and gives no control of second or higher
derivatives, and a $C^\infty$ boundary is needed only when one wants the
construction at every order simultaneously. Consequently the
smooth-up-to-the-boundary density statement
[[thm-smooth-up-to-the-boundary-density-on-smooth-domains]], which is
obtained by extending first and mollifying afterwards, inherits the same
bounded-$C^k$ hypothesis and the same fixed $k$.

**Excluded endpoints and unproved strengthenings.** The density statements
are for $1\le p<\infty$; at $p=\infty$ the excluded endpoint is recorded in
[[rem-meyers-serrin-does-not-assert-density-for-p-infinity]], where the
one-dimensional corner $|x|$ shows that no smooth sequence converges in the
$W^{1,\infty}$ norm. Nothing here asserts extension theorems for Lipschitz
domains, for domains with less regular boundary, or a single operator
simultaneously bounded on all orders $k$: such results are separate theorems,
not consequences of the $C^k$ chart-and-reflection argument displayed on this
page, and no step of that argument supplies the uniform higher-order
estimates they would require.
