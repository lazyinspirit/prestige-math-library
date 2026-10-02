---
id: lem-vanishing-ideal-of-a-reduced-hypersurface-germ
kind: lemma
title: "The vanishing ideal of a reduced hypersurface germ is principal"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-discriminant-and-branch-locus-weierstrass-hypersurface
  - lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular
  - lem-reduced-prepared-polynomial-has-nonzero-discriminant
  - lem-square-free-reduction-of-holomorphic-germ
  - prop-units-in-the-holomorphic-germ-ring
  - thm-discriminant-root-formula-and-repeated-root-criterion
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-identity-theorem-in-several-complex-variables
  - thm-root-bound-for-polynomials-over-a-domain
  - thm-weierstrass-division-theorem
  - thm-weierstrass-finite-projection-hypersurface-germ
  - thm-weierstrass-preparation-theorem
justified_by: []
landmark: true
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Theorem 6.6.1 the vanishing ideal of a hypervariety germ (p. 188); Theorem 6.4.2 unique factorisation (p. 182)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (4.21) vanishing ideal of a prime (p. 96); II (6.6) principal ideal of a pure codimension-one germ (pp. 106–107)."
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $p\in\mathbb C^n$ and let $f\in\mathcal O_{\mathbb C^n,p}$ be a
reduced nonzero nonunit. Write $Z(f)$ for the zero set germ of $f$ at $p$ and
set

$$I_p\bigl(Z(f)\bigr):=\{h\in\mathcal O_{\mathbb C^n,p}:\ h\ \text{vanishes on the zero set of }f\ \text{near }p\},$$

where $h$ vanishes on the zero set of $f$ near $p$ when some representative of
$h$ vanishes at every point of the zero set of some representative of $f$ on a
common neighbourhood of $p$. Then $I_p(Z(f))$ is an ideal of the germ ring and

$$I_p\bigl(Z(f)\bigr)=(f).$$

More generally, for an arbitrary nonzero nonunit germ $g$ with square-free
reduction $g_{\mathrm{red}}$,

$$I_p\bigl(Z(g)\bigr)=(g_{\mathrm{red}}).$$

## Facts & Assumptions

**Given:** A reduced nonzero nonunit germ $f$ at $p$, and the ideal $I_p(Z(f))$ of germs vanishing on its zero set near $p$.

[F1] The square-free reduction $g_{\mathrm{red}}=q_1\cdots q_r$ of a nonzero nonunit $g$ is reduced, its associate class depends only on $g$, and $Z(g_{\mathrm{red}})=Z(g)$ on a common neighbourhood of $p$ ([[lem-square-free-reduction-of-holomorphic-germ]]).

[F2] Center at $p$ and choose the invertible complex-linear map $T$ and product representative of the finite-projection theorem. With $\Phi(z)=p+Tz$, the germ $f\circ\Phi$ is regular of order $d\ge1$ and equals $uW$ for a unit $u$ and a degree-$d$ Weierstrass polynomial $W$; their zero sets coincide on that representative ([[lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular]], [[thm-weierstrass-preparation-theorem]], [[thm-weierstrass-finite-projection-hypersurface-germ]]).

[F3] Units have nonzero value at the base point, so $(f\circ\Phi)=(W)$ and their zero germs agree ([[prop-units-in-the-holomorphic-germ-ring]]).

[F4] Weierstrass division: every $h\in\mathcal O_{n,0}$ is uniquely $qW+r_0+r_1T+\cdots+r_{d-1}T^{d-1}$ with $q\in\mathcal O_{n,0}$ and coefficients $r_j\in\mathcal O_{n-1,0}$ ([[thm-weierstrass-division-theorem]]).

[F5] The prepared $W$ of the reduced germ $f$ is square-free over $K=\operatorname{Frac}(\mathcal O_{n-1,0})$ and its discriminant $D_W=\operatorname{Disc}_T(W)$ is a nonzero base germ; $D_W(z')=0$ exactly when the slice $W(z',\cdot)$ has a repeated root ([[lem-reduced-prepared-polynomial-has-nonzero-discriminant]], [[def-discriminant-and-branch-locus-weierstrass-hypersurface]], [[thm-discriminant-root-formula-and-repeated-root-criterion]]).

[F6] A nonzero holomorphic function on a connected open set does not vanish on a nonempty open subset ([[thm-identity-theorem-in-several-complex-variables]]).

[F7] A monic complex polynomial of degree $d$ has $d$ roots counted with multiplicity ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]). A nonzero polynomial of degree at most $d-1$ over a field has fewer than $d$ distinct roots ([[thm-root-bound-for-polynomials-over-a-domain]]).



**Proof technique:** direct — prepare in generic coordinates, divide by $W$, and force the remainder to vanish on a dense base set.

## Proof

1.1 Choose $T$ and $\Phi(z)=p+Tz$ with $f\circ\Phi=uW$ as in [F2]. The pullback $\Phi^*:h\mapsto h\circ\Phi$ is a ring isomorphism $\mathcal O_{\mathbb C^n,p}\to\mathcal O_{n,0}$, with inverse pullback by $\Phi^{-1}$. It sends $(f)$ to $(W)$ by [F3] and sends $I_p(Z(f))$ to $I_0(Z(W))$, since $\Phi$ carries the corresponding zero germs onto each other. Hence it suffices to prove $I_0(Z(W))=(W)$. [given, F2, F3]

1.2 The reverse inclusion is immediate: if $h=cW$ then every representative of $h$ vanishes at every point where $W$ vanishes, so $(W)\subseteq I_0(Z(W))$. [given, F4]

2.1 Let $h\in I_0(Z(W))$. By [F4] write $h=qW+r$ with $r=\sum_{j<d}r_jT^j$, $r_j\in\mathcal O_{n-1,0}$. Since $qW$ vanishes on $Z(W)$ and $h$ does too, the remainder $r=h-qW$ vanishes on $Z(W)$ near the origin. [step 1.1, F4]

3.1 Choose a common product $V\times\{|T|<\rho\}$ on which the division identity and vanishing of $r$ on $Z(W)$ hold. Write $W=T^d+\sum_{j<d}a_j(z')T^j$. Since $a_j(0)=0$, shrink the connected base polydisc $V$ until $\sum_{j<d}|a_j(z')|\rho^{j-d}<1$. For $|T|\ge\rho$ the lower terms have sum of absolute values strictly less than $|T|^d$, so no slice root lies there. For every $z'\in V$ with $D_W(z')\ne0$, [F5] and [F7] therefore give $d$ distinct roots, all within the common product. The polynomial $r(z',\cdot)$ has degree less than $d$ and vanishes at all these roots, so [F7] makes it the zero polynomial. Thus $r_j(z')=0$ for every $j<d$. [step 2.1, F2, F5, F7]

4.1 If $n=1$, the base is the single point $V\subset\mathbb C^0$ and $D_W$ is a nonzero constant, so $V\setminus\{D_W=0\}=V$. Each $r_j$ is also a constant; step 3.1 says it vanishes at this sole point, hence $r_j=0$. If $n\ge2$, then $V\setminus\{D_W=0\}$ is nonempty and open: $D_W$ is a nonzero holomorphic germ, so it cannot vanish on a nonempty open subset of $V$, and its zero set is closed. Since each $r_j\in\mathcal O_{n-1,0}$ vanishes on this nonempty open set, [F6] gives $r_j=0$ for every $j<d$. In either case $r=0$ and $h=qW\in(W)$; combined with step 1.2 this gives $I_0(Z(W))=(W)$. [step 3.1, F5, F6]

5.1 Undoing the coordinate change of step 1.1 gives $I_p(Z(f))=(f)$ for reduced $f$. For an arbitrary nonzero nonunit $g$ with square-free reduction $g_{\mathrm{red}}$, the zero germs agree on a neighbourhood and $g_{\mathrm{red}}$ is reduced by [F1], so $I_p(Z(g))=I_p(Z(g_{\mathrm{red}}))=(g_{\mathrm{red}})$. [step 1.1, step 4.1, F1] ∎
