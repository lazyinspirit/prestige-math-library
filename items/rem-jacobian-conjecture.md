---
id: rem-jacobian-conjecture
kind: remark
title: "The Jacobian conjecture (open)"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "Open since Keller 1939: constant nonzero Jacobian determinant implies polynomial invertibility"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jacobian conjecture (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jacobian_conjecture"
    - title: "H. Bass, E. H. Connell and D. Wright, The Jacobian conjecture: reduction of degree and formal expansion of the inverse, Bulletin of the AMS 7 (1982) 287-330"
      url: "https://www.ams.org/journals/bull/1982-07-02/S0273-0979-1982-15032-7/"
    - title: "S. Pinchuk, A counterexample to the strong real Jacobian conjecture, Mathematische Zeitschrift 217 (1994) 1-4"
      url: "https://link.springer.com/article/10.1007/BF02571929"
    - title: "Smale's problems (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smale%27s_problems"
pipeline_run: null
---

## Statement

**Jacobian conjecture.** Let $n \ge 1$ and let
$F = (F_1, \dots, F_n) : \mathbb{C}^n \to \mathbb{C}^n$ be a polynomial map whose
Jacobian determinant

$$\det\left(\frac{\partial F_i}{\partial x_j}\right)$$

is a nonzero constant. Then $F$ is bijective, and its inverse is again a
polynomial map.

**Status: open.** It was posed by Ott-Heinrich Keller in 1939 and is open for
every $n \ge 2$; the case $n = 1$ is elementary. The same statement over any field
of characteristic zero is equally open, and it is one of Smale's 1998 list of
problems for the century. Characteristic zero is essential: in characteristic $p$
the map $x \mapsto x - x^{p}$ has Jacobian determinant $1$ and is not injective.

## Remarks

**Not proved in this library, and not proved anywhere.** Nothing here depends on
it, and this library develops neither the commutative algebra nor the algebraic
geometry in which the conjecture is normally attacked.

**What is known, and what would settle it.** The converse direction is easy and is
the reason the hypothesis is the natural one: if a polynomial map has a polynomial
inverse then the chain rule makes the two Jacobian determinants reciprocal
polynomials, and the only units of a polynomial ring over a field are the nonzero
constants, so each is constant. In the hard direction the deepest structural
result is the reduction of Bass, Connell and Wright (1982): the conjecture in all
dimensions follows from the special case $F = X + H$ with $H$ homogeneous of
degree $3$ and nilpotent Jacobian matrix. So bounding the degree does not help;
degree $3$ in unbounded dimension is already the whole problem. The conjecture is
also equivalent to the Dixmier conjecture on endomorphisms of the Weyl algebra
(Tsuchimoto; Belov-Kanel and Kontsevich), which transports the difficulty rather
than reducing it. What would settle it is a proof of the cubic homogeneous case,
or a counterexample in some dimension.

**A neighbouring statement that is FALSE.** Weakening "constant nonzero" to merely
"nowhere zero" over $\mathbb{R}$ destroys the conclusion: Pinchuk (1994)
constructed a polynomial map $\mathbb{R}^2 \to \mathbb{R}^2$ whose Jacobian
determinant is everywhere positive and which is not injective. This is the sharp
warning against the plausible reading of the conjecture as "local invertibility
plus polynomiality gives global invertibility".

**Why it matters here.** The inverse function theorem is in scope for this
library, and it is exactly the local statement: a nonvanishing Jacobian determinant gives a local
inverse. The Jacobian conjecture asks for the global polynomial upgrade, and
Pinchuk's example shows the naive global upgrade is false over $\mathbb{R}$. The
pair is the cleanest illustration available of how much stronger a global
statement is than its local counterpart, and it belongs on record even though
neither half can be developed here.
