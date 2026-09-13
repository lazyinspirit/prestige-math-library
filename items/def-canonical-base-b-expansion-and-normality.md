---
id: def-canonical-base-b-expansion-and-normality
kind: definition
title: Canonical base-b expansions and normal numbers
status: draft
origin: pipeline
deps: [def-integer-base-map-on-the-circle, lem-integer-part]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§11.2, printed pp. 99–101"
---

## Definition

Fix an integer $b\geq2$.  For $x\in[0,1)$, its **canonical base-$b$
digits** are

$$d_j^{(b)}(x)=\left\lfloor bD_b^{j-1}x\right\rfloor\in\{0,\ldots,b-1\},\qquad j\geq1,$$

where $D_b(x)=\{bx\}$ is the integer-base circle map from
[[def-integer-base-map-on-the-circle]] and the floor is supplied by
[[lem-integer-part]].  Thus

$$D_b^jx=bD_b^{j-1}x-d_j^{(b)}(x).$$

Iterating this recurrence gives

$$x=\sum_{j=1}^{n}d_j^{(b)}(x)b^{-j}+b^{-n}D_b^nx.$$

Since $0\leq D_b^nx<1$, the remainder tends to zero.  Hence the digit string
represents $x$:

$$x=0.d_1^{(b)}(x)d_2^{(b)}(x)\cdots{}_b=\sum_{j=1}^{\infty}d_j^{(b)}(x)b^{-j}.$$

At a $b$-adic rational the recurrence chooses the expansion that eventually
has only zero digits, called the **terminating expansion**.  Equivalently, the
canonical expansion is the expansion that is not eventually equal to $b-1$.
Indeed, an eventually-$(b-1)$ tail represents the same number as incrementing
the last preceding digit and then appending zeros; conversely, if the greedy
digits were all $b-1$ after some place, the displayed remainder identity would
force the corresponding iterate $D_b^Nx$ to be $1$, contrary to
$D_b^Nx\in[0,1)$.

For a word $w=(w_1,\ldots,w_\ell)\in\{0,\ldots,b-1\}^{\ell}$ and $n\geq1$,
write

$$N_n(w,x)=\#\{0\leq k<n:(d_{k+1}^{(b)}(x),\ldots,d_{k+\ell}^{(b)}(x))=w\}.$$

The number $x$ is **normal in base $b$** if, for every length $\ell\geq1$ and
every such word $w$,

$$\frac{N_n(w,x)}n\longrightarrow b^{-\ell}.$$

It is **normal** if it is normal in every integer base $b\geq2$.
