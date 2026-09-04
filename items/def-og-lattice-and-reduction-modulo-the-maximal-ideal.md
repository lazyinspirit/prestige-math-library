---
id: def-og-lattice-and-reduction-modulo-the-maximal-ideal
kind: definition
title: "An OG-lattice is a finite free module over the valuation ring with G-action, and reduction modulo the maximal ideal produces a kG-module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-splitting-p-modular-system-for-a-finite-group, def-g-module-over-a-commutative-ring]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Definition

Let $(K,\mathcal O,k)$ be a splitting $p$-modular system for a finite group
$G$. An **$\mathcal O G$-lattice** is a left $\mathcal O G$-module $L$ that is
finite free as an $\mathcal O$-module.

Its **reduction modulo the maximal ideal** $\mathfrak m$ of $\mathcal O$ is

$$ \overline L:=k\otimes_{\mathcal O}L\cong L/\mathfrak m L. $$

Because the $G$-action on $L$ is $\mathcal O$-linear, it descends to a
$G$-action on $\overline L$, so $\overline L$ is a $kG$-module in the sense of
[[def-g-module-over-a-commutative-ring]].
