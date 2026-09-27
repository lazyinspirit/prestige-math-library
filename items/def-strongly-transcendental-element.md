---
id: def-strongly-transcendental-element
kind: definition
title: Strong transcendence over a subring
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-polynomial-ring-over-a-commutative-ring, def-subring, def-zero-divisor-and-integral-domain, def-field-of-fractions, def-integral-element-and-algebraic-integer]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.123, Definition 10.123.7"
      url: "https://stacks.math.columbia.edu/tag/00PI"
      locator: "Section 10.123, Definition 10.123.7 with the remark following it"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Section 17"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Let $R\subseteq S$ be an inclusion of commutative rings ([[def-subring]]) and let
$x\in S$. The element $x$ is **strongly transcendental over $R$** when the
implication

$$ u\,(a_0+a_1x+\cdots+a_kx^k)=0 \quad\Longrightarrow\quad ua_i=0\ \text{ for every } i\in\{0,\ldots,k\} $$

holds for every integer $k\ge0$, every multiplier $u\in S$ and all
$a_0,a_1,\ldots,a_k\in R$; the polynomial $a_0+a_1x+\cdots+a_kx^k$ is the
evaluation in $S$ of a polynomial over $R$ ([[def-polynomial-ring-over-a-commutative-ring]]),
so the condition is a statement about all polynomial relations that hold in $S$
between $x$ and the elements of $R$.

**Conventions kept here.** (i) The multiplier $u$ is retained on purpose. It
records annihilators: when $S$ has zero divisors the vanishing of a product
$u\cdot P(x)$ does not force $P(x)$ to vanish, and it is the annihilator form
above, not mere linear independence of the monomials, that is used in the
minimal-prime argument of this page. (ii) No finiteness or noetherian
hypothesis is imposed on $R$, on $S$ or on the polynomial degree; $x$ has trivial annihilator in $S$: applying the condition to $P(X)=X$ gives $ux=0\Rightarrow u=0$. The zero polynomial ($k=0$, $a_0=0$) is included.
(iii) The condition is tied to the chosen pair $R\subseteq S$ and is not
preserved by an arbitrary quotient: for $R=k$ a field $S=k[z]\times k[y]$ and
$x=(z,y)$, the element $x$ is strongly transcendental over $k$ (a multiplier
$u=(u_1,u_2)$ with $u\cdot(P(z),P(y))=0$ has $u_1P(z)=0$ and $u_2P(y)=0$, so
if $P=0$ all coefficients vanish, whereas if $P\ne0$ both $P(z)$ and $P(y)$ are nonzero, so the domain property forces $u_1=u_2=0$; in either case $ua_i=0$ for every $i$),
yet in the quotient $S/\mathfrak q$ by the prime
$\mathfrak q=(z-1)k[z]\times k[y]$ the image of $x$ is $1\in k$, which is a root
of the monic $X-1$ and therefore not transcendental at all. The descent proved
on this page is consequently formulated for minimal primes of reduced rings.

**Domains.** If $S$ is an integral domain ([[def-zero-divisor-and-integral-domain]]),
then strong transcendence of $x$ over $R$ is the same as saying that $x$ is
transcendental over the fraction field $\operatorname{Frac}(R)$, viewed inside
$\operatorname{Frac}(S)$ ([[def-field-of-fractions]]). Suppose first that $x$ is
strongly transcendental over $R$ and let $P\in\operatorname{Frac}(R)[X]$ be
nonzero with $P(x)=0$; clearing denominators gives $u\in R$ nonzero with
$uP\in R[X]$ still nonzero, and evaluating gives $u\cdot(uP)(x)=u\cdot0=0$, so
strong transcendence applied to the polynomial $uP$ and the multiplier $u$
forces $u\cdot(up_i)=0$ for every coefficient $p_i$ of $P$; since $S$ is a
domain and $u\ne0$, this gives $p_i=0$ for all $i$, contradicting $P\ne0$.
Conversely, if $x$ is transcendental over $\operatorname{Frac}(R)$ and
$u(a_0+\cdots+a_kx^k)=0$ with $u\ne0$, then cancelling the nonzero element $u$
in the domain $S$ exhibits the polynomial $a_0+\cdots+a_kX^k\in R[X]$ as
vanishing at $x$; if some $a_i$ were nonzero that polynomial would be a nonzero
element of $\operatorname{Frac}(R)[X]$ vanishing at $x$, contradicting
transcendence, so all $a_i$ vanish and $ua_i=0$ holds; for $u=0$ the conclusion
is immediate. In this case the annihilator clause is automatic and the condition
reduces to the classical notion. Nothing in the argument uses integrality;
compare [[def-integral-element-and-algebraic-integer]], where the integral
element is the opposite extreme, a root of a monic polynomial.
