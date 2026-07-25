---
id: rem-jacobian-conjecture
kind: remark
title: "The Jacobian conjecture (false for $n \\ge 3$; open for $n = 2$)"
status: published
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "Refuted in dimension 3 in July 2026; the plane case n = 2 is still open"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Jacobian conjecture (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Jacobian_conjecture"
    - title: "T. Tao, A digestion of the Jacobian conjecture counterexample (blog, 21 July 2026)"
      url: "https://terrytao.wordpress.com/2026/07/21/a-digestion-of-the-jacobian-conjecture-counterexample/"
    - title: "The new counterexample to the Jacobian conjecture (Secret Blogging Seminar, 20 July 2026)"
      url: "https://sbseminar.wordpress.com/2026/07/20/the-new-counterexample-to-the-jacobian-conjecture/"
    - title: "H. Bass, E. H. Connell and D. Wright, The Jacobian conjecture: reduction of degree and formal expansion of the inverse, Bulletin of the AMS 7 (1982) 287-330"
      url: "https://www.ams.org/journals/bull/1982-07-02/S0273-0979-1982-15032-7/"
    - title: "Dixmier conjecture (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dixmier_conjecture"
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

**Status: FALSE for every $n \ge 3$, and open for $n = 2$.** Ott-Heinrich Keller
posed the $n$-variable conjecture in 1939, and it is number $16$ on Smale's 1998
list of problems for the century. On 19 July 2026 Levent Alpöge announced an
explicit three-variable counterexample, found with the assistance of Anthropic's
Claude Fable 5. Write $F = (P, Q, R) : \mathbb{C}^3 \to \mathbb{C}^3$ with

$$P = (1 + xy)^3 z + y^2 (1 + xy)(4 + 3xy), \qquad Q = y + 3x(1 + xy)^2 z + 3xy^2(4 + 3xy), \qquad R = 2x - 3x^2 y - x^3 z.$$

The Jacobian determinant of $F$ is the constant $-2$, so the hypothesis holds;
but

$$F\left(0, 0, -\tfrac{1}{4}\right) = F\left(1, -\tfrac{3}{2}, \tfrac{13}{2}\right) = F\left(-1, \tfrac{3}{2}, \tfrac{13}{2}\right) = \left(-\tfrac{1}{4}, 0, 0\right),$$

so $F$ is three-to-one over that point and is not injective. Adjoining identity
coordinates turns this into a counterexample in every dimension $n \ge 3$. The
coefficients are rational, so the conjecture fails over every field of
characteristic zero. The case $n = 1$ is elementary and true. The two-variable
case, the **plane Jacobian conjecture**, is still open; it is older than Keller's
general form, having been stated by Ludwig Kraus in 1884.

Characteristic zero remains essential to the surviving question: in
characteristic $p$ the map $x \mapsto x - x^{p}$ has Jacobian determinant $1$ and
is not injective, so nothing is being conjectured there.

## Remarks

**Neither proved nor disproved in this library.** Nothing here depends on the
conjecture, and this library develops neither the commutative algebra nor the
algebraic geometry in which it was attacked. The refutation is a different
matter: it is a finite identity in $\mathbb{Q}[x, y, z]$, and both displayed
claims above were re-checked by exact rational arithmetic during the audit of
this page. What this library does not contain is the theory the *question*
belongs to, which is why the entry stays here rather than becoming a
counterexample item with a proof.

**What was known before, and what is now known.** The converse direction is easy
and is the reason the hypothesis is the natural one: if a polynomial map has a
polynomial inverse then the chain rule makes the two Jacobian determinants
reciprocal polynomials, and the only units of a polynomial ring over a field are
the nonzero constants, so each is constant. The deepest structural result in the
hard direction was the reduction of Bass, Connell and Wright (1982): the
conjecture in all dimensions follows from the special case $F = X + H$ with $H$
homogeneous of degree $3$ and nilpotent Jacobian matrix, so bounding the degree
never helped. The conjecture was also known to be stably equivalent to the
Dixmier conjecture on endomorphisms of the Weyl algebra (Tsuchimoto 2005;
Belov-Kanel and Kontsevich 2007), the Dixmier conjecture for $A_n$ implying the
Jacobian conjecture in $n$ variables. That implication now runs backwards as a
refutation: the three-variable counterexample shows the Dixmier conjecture is
false for $A_n$ for every $n \ge 3$, while it stays open for $A_1$ and $A_2$
exactly because the plane Jacobian conjecture does.

**A neighbouring statement that was already FALSE.** Weakening "constant nonzero"
to merely "nowhere zero" over $\mathbb{R}$ destroys the conclusion, and this was
known long before 2026: Pinchuk (1994) constructed a polynomial map
$\mathbb{R}^2 \to \mathbb{R}^2$ whose Jacobian determinant is everywhere positive
and which is not injective. Pinchuk's example says nothing about the plane
Jacobian conjecture, whose hypothesis is the stronger one that the determinant is
constant.

**Why it matters here.** The inverse function theorem is in scope for this
library, and it is exactly the local statement: a nonvanishing Jacobian
determinant gives a local inverse. The Jacobian conjecture asked for the global
polynomial upgrade, and the pair was for decades the cleanest illustration
available of how much stronger a global statement is than its local counterpart.
It is now an illustration of something else as well, which is why the entry is
worth keeping rather than deleting: a question can stand for eighty-seven years,
be believed by specialists in the plane case and disbelieved in high dimensions,
and then be settled by a counterexample a reader can verify with nothing beyond
the definition of a determinant.
