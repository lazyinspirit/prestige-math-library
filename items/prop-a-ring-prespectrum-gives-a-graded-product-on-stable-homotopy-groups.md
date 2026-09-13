---
id: prop-a-ring-prespectrum-gives-a-graded-product-on-stable-homotopy-groups
kind: proposition
title: A ring prespectrum gives a graded product on stable homotopy groups
status: draft
origin: pipeline
deps: ["def-pairing-and-unital-multiplication-of-sequential-prespectra", "def-stable-homotopy-groups-of-a-sequential-prespectrum", "prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 25, Section 3, printed page 223
---

## Statement

Let $E$ be a sequential prespectrum with a unital multiplication. If
$x\in\pi_p(E)$ and $y\in\pi_q(E)$ are represented at stages $m,n$ by

$$ f:S^{m+p}\to E_m,\qquad g:S^{n+q}\to E_n, $$

then the smash $f\wedge g$, followed by $\mu_{m,n}$ and the canonical sphere
coordinate rearrangement, defines a product

$$ \pi_p(E)\times\pi_q(E)\longrightarrow\pi_{p+q}(E). $$

It is well defined, associative, and unital. If the multiplication has the
commutativity datum of the preceding definition, then

$$xy=(-1)^{pq}yx.$$

## Facts & Assumptions

[F1] The pairing has both displayed structure-compatibility homotopies; the second includes the suspension-coordinate twist ([[def-pairing-and-unital-multiplication-of-sequential-prespectra]]).

[F2] Smash associators, twists, and units are coherent canonical homeomorphisms ([[prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms]]).

[F3] The commutativity datum includes the level-block permutation, whose degree is $(-1)^{ab}$ for blocks of dimensions $a,b$ ([[def-pairing-and-unital-multiplication-of-sequential-prespectra]]).

## Proof

**Given:** A unital ring prespectrum $E$ and stable classes $x,y$ represented as in the statement.

1.1 **Define the product on representatives.** Use [F2] to identify $S^{m+n+p+q}$ with $S^{m+p}\wedge S^{n+q}$ in the fixed order, then set [F1] $$[f]\cdot[g]=[\mu_{m,n}(f\wedge g)] \in\pi_{m+n+p+q}(E_{m+n}).$$ [F1]

Changing $f$ or $g$ through a based homotopy changes this composite through a based homotopy.

1.2 **Check the colimit relation.** Advance $f$ once. The first comparison in [F1] homotopes the resulting composite to the one-fold suspension of the product. Advancing $g$ once gives the same conclusion from the second comparison; its explicit twist is exactly the coordinate rearrangement needed to put the new $S^1$ at the front. Hence replacing either representative by a bonding-map representative does not change the colimit class. Repetition and common-stage comparison prove full well-definedness. [F1]

1.3 **Associativity and the unit.** For three representatives, the two products are the two composites $\mu(\mu\wedge1)$ and $\mu(1\wedge\mu)$ after the same canonical reassociation of sphere coordinates. The specified associativity homotopy and [F2] identify them. The class of $\eta:S^0\to E_0$ is a two-sided identity by the two unit homotopies. [F1]

1.4 **Compute the commutativity sign.** Compare the two representative maps after putting both in one fixed order: degree coordinates $p,q$ followed by level coordinates $m,n$. The parity contributions are [F1] $$ (m+p)(n+q)\quad\text{(swap the two full source blocks)}, $$ $$ mn\quad\text{(the target level-block permutation)}, \qquad mq+np\quad\text{(restore the fixed stable ordering)}. $$ [F1]

By [F3] their sum modulo two is $(m+p)(n+q)+mn+mq+np\equiv pq$. The commutativity homotopy therefore gives $xy=(-1)^{pq}yx$, independent of the chosen stages. $\square$
