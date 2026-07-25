---
id: rem-dual-of-l-infinity
kind: remark
title: "The dual of $\\ell^\\infty$ is $ba(2^{\\mathbb{N}})$, the finitely additive charges"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "l-infinity dual is bigger than l^1"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "ba space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ba_space"
    - title: "Sequence space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence_space"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

The dual of $\ell^\infty$ is isometrically isomorphic to $ba(2^{\mathbb{N}})$, the space of bounded
finitely additive signed measures (charges) on the full power set of $\mathbb{N}$, normed by total
variation; the pairing sends $\mu$ to the functional $x \mapsto \int x \, d\mu$ defined by the
finitely additive integral.

Under this identification $\ell^1$ is exactly the subspace of countably additive charges, a proper
norm closed subspace of $(\ell^\infty)^{*}$. In particular $(\ell^1)^{*} = \ell^\infty$ but
$(\ell^\infty)^{*} \neq \ell^1$, so $\ell^1$ and $\ell^\infty$ are not reflexive.

## Remarks

**Not proved in this library.** Recorded with a citation; both the finitely additive integral and
the duality are outside the current stack.

**What would prove it.** Given $\varphi \in (\ell^\infty)^{*}$, define $\mu(A) = \varphi(1_A)$ for
$A \subseteq \mathbb{N}$; finite additivity is linearity, boundedness of the total variation is
boundedness of $\varphi$, and the two operations invert each other because simple functions are
dense in $\ell^\infty$ in the supremum norm.

**Why it matters here.** It is where the naive pattern "the dual of a sequence space is a sequence
space" breaks. Every element of $(\ell^\infty)^{*} \setminus \ell^1$ is produced by an extension
argument and never by a formula, the Banach limits of [[rem-banach-limits]] being the standard
examples, so the failure of reflexivity for $\ell^1$ is inseparable from the choice discussion in
[[rem-hahn-banach-choice-strength]].
