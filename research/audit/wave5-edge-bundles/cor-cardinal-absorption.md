# Citation-precision audit — everything that cites `cor-cardinal-absorption`

## The target, as it actually stands on disk

`items/cor-cardinal-absorption.md` — corollary — Absorption: for cardinals $\\kappa, \\lambda$ with $\\kappa$ infinite and $\\lambda \\le \\kappa$, $\\kappa \\oplus \\lambda = \\kappa$, and $\\kappa \\otimes \\lambda = \\kappa$ when $\\lambda \\ne 0$

#### Statement

Let $\kappa$ be an infinite cardinal and $\lambda$ a cardinal with
$\lambda \le \kappa$ ([[def-cardinal]]). Then

$$\kappa \oplus \lambda = \kappa, \qquad \text{and} \qquad \kappa \otimes \lambda = \kappa \ \text{ whenever } \lambda \ne 0$$

([[def-cardinal-arithmetic]]). The exception at $\lambda = 0$ is not an artefact:
$\kappa \otimes 0 = 0$.

**This is a theorem of ZF**, inherited from [[thm-hessenberg]], which is
choice free. In particular the ordinary arithmetic of infinite cardinals collapses
completely for $\oplus$ and $\otimes$: below the level of exponentiation, the
larger argument simply swallows the smaller one.

## The 2 citing use(s), quoted verbatim from the citing items

### `ex-cardinal-functions-of-the-lower-limit-line` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-metric-weight-equals-density` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every metrizable space has $w(X)=d(X)$

- [L3] If $\kappa$ is infinite, then $\kappa\cdot\aleph_0=\kappa$ ([[def-cardinal-arithmetic]], [[cor-cardinal-absorption]]).
