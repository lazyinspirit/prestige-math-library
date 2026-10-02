---
id: def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ
kind: definition
title: "Total quotient ring and normalisation of a reduced plane curve germ"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-integral-closure-and-integrally-closed-domain
  - def-integral-element-and-algebraic-integer
  - def-multiplicative-subset-and-localisation
  - lem-vanishing-ideal-of-a-reduced-hypersurface-germ
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "§6.6–6.7 defining equations and local decomposition of a plane curve germ (pp. 188–194)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (6.6) principal equation of a codimension-one germ (pp. 106–107); II (4.19) finite integral extension of the curve ring (p. 95)."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Fix a reduced complex-analytic plane curve germ $X$ at a point
$p\in\mathbb C^2$, that is, a hypersurface germ in $\mathbb C^2$ given by an
equation whose square-free reduction is itself
([[def-complex-analytic-hypersurface-germ-and-reduced-equation]]). Write
$I_p(X)$ for its vanishing ideal and define the **local ring of the curve
germ**

$$A:=\mathcal O_{\mathbb C^2,p}/I_p(X).$$

By the principal vanishing-ideal lemma, choosing a reduced defining equation
$f$ of $X$ gives $I_p(X)=(f)$ and hence
$A=\mathcal O_{\mathbb C^2,p}/(f)$; in particular $A$ is the same ring for
every reduced defining equation of $X$
([[lem-vanishing-ideal-of-a-reduced-hypersurface-germ]]).

Let

$$S:=\{a\in A:\ a\ \text{is a nonzerodivisor of }A\}$$

be the set of nonzerodivisors. Then $S$ is a multiplicative subset of $A$
([[def-multiplicative-subset-and-localisation]]): $1\in S$, and if $s,t\in S$
and $st\,x=0$ for some $x\in A$, then $t(sx)=0$, so $sx=0$ because $t$ is a
nonzerodivisor and then $x=0$ because $s$ is one; thus $st\in S$.

The **total quotient ring** of the curve germ is the localisation

$$Q(A):=S^{-1}A,$$

with its localisation map $A\to Q(A)$, $a\mapsto a/1$. Since $S$ consists of
the nonzerodivisors, this map is injective and every nonzerodivisor of $A$
becomes a unit in $Q(A)$; the ring $Q(A)$ is the largest localisation of $A$ in
which the map is injective.

The **normalisation** of $A$ is the integral closure of $A$ in $Q(A)$: the set
of elements of $Q(A)$ that are integral over $A$, i.e. roots of monic
polynomials with coefficients in the image of $A$
([[def-integral-element-and-algebraic-integer]],
[[def-integral-closure-and-integrally-closed-domain]]). Explicitly, writing
the localisation map as an inclusion,

$$\overline A=\{b\in Q(A):\ b^k+a_1b^{k-1}+\cdots+a_k=0\ \text{for some }k\ge1\ \text{and }a_i\in A\}.$$

The curve germ $X$ is **normal** when $A=\overline A$, that is, when $A$ is
integrally closed in $Q(A)$.

## Remarks

**Well-definedness.** The ring $A$, and therefore the set $S$, the ring
$Q(A)$ and the normalisation $\overline A$, depend only on the set germ $X$:
the vanishing ideal $I_p(X)$ is attached to $X$, and the principal
vanishing-ideal lemma identifies it with $(f)$ for every reduced defining
equation $f$, so no choice of equation enters. The translation convention of
[[def-reduced-holomorphic-germ-for-hypersurface]] identifies
$\mathcal O_{\mathbb C^2,p}$ with the germ ring at the origin and transports
the whole construction.

**One branch and several branches.** The ring $A$ is a domain exactly when the
ideal $(f)=I_p(X)$ is a prime ideal of $\mathcal O_{\mathbb C^2,p}$. When $A$
is a domain, $Q(A)=\operatorname{Frac}(A)$ is its fraction field and the
normalisation is the integral closure of $A$ in that fraction field, in
agreement with [[def-integral-closure-and-integrally-closed-domain]]. When $X$
has several branches, $A$ has zero divisors, so no fraction field of $A$
exists; this is exactly why the ambient ring for integrality is the total
quotient ring $Q(A)$, obtained by inverting precisely the nonzerodivisors.
The product description of $Q(A)$ in terms of the branches of $X$, and the
identification of the normalisation with the product of the normalisations of
the branches, are proved in the next result on this page.

**Nonzerodivisors and the localisation map.** An element $a\in A$ is a
nonzerodivisor exactly when the multiplication map $x\mapsto ax$ is injective,
and this is the property that makes the localisation map $A\to S^{-1}A$
injective: $x/1=0$ in $S^{-1}A$ means $ux=0$ for some $u\in S$, and then
$x=0$ because $u$ is a nonzerodivisor. Thus $Q(A)$ contains $A$, and by the
arithmetic of the localisation every $s\in S$ becomes a unit there
([[def-multiplicative-subset-and-localisation]]); this is the ambient ring in
which integrality is tested in the normalisation definition above.
