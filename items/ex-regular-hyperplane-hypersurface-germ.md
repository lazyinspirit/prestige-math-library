---
id: ex-regular-hyperplane-hypersurface-germ
kind: example
title: "A regular hyperplane has a one-sheeted projection"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-discriminant-and-branch-locus-weierstrass-hypersurface
  - def-discriminant-of-a-monic-polynomial
  - def-irreducible-and-prime-elements-in-a-domain
  - def-local-dimension-hypersurface-germ
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-regular-singular-point-analytic-hypersurface
  - def-weierstrass-polynomial
  - lem-dimension-of-holomorphic-germ-ring
  - thm-power-series-expansion-in-several-complex-variables
  - thm-weierstrass-finite-projection-hypersurface-germ
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "§6.2 linear coordinate changes and hyperplanes (pp. 175–178); Theorem 6.3.3 the discriminant set of a degree-one preparation (p. 178); §6.6 dimension of a hypervariety germ (p. 188)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (2.10) dimension of O_n (p. 82); II (4.19) finite preparation of degree one (p. 95)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Fix $n\ge1$ and let

$$X=\{z\in\mathbb C^n:z_n=0\}$$

be the coordinate hyperplane through the origin. Then $z_n$ is a reduced
equation of the hypersurface germ $X$ with $dz_n\ne0$ everywhere, so every
point of $X$ is regular; the projection $\pi(z)=z'=(z_1,\dots,z_{n-1})$ is
one-sheeted with constant discriminant $1$ and empty branch set; and
$\dim_0X=n-1$. The Axiom of Choice is used only through the numerical
dimension result [F7] for holomorphic germ rings below.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the coordinate hyperplane $X=\{z_n=0\}\subseteq\mathbb C^n$, its equation germ $z_n\in\mathcal O_{\mathbb C^n,0}$, and the projection $\pi(z)=z'$ forgetting the last coordinate.

[F1] A hypersurface germ at $0$ is the zero germ of a nonzero nonunit; its reduced defining germ is unique up to a unit ([[def-complex-analytic-hypersurface-germ-and-reduced-equation]]).

[F2] A reduced germ is a nonzero nonunit that is not divisible by the square of an irreducible germ; irreducible means not a product of two nonunits, and an irreducible germ is reduced ([[def-reduced-holomorphic-germ-for-hypersurface]], [[def-irreducible-and-prime-elements-in-a-domain]]).

[F3] A Weierstrass polynomial of degree $1$ in the last variable has the form $z_n+a_0(z')$ with $a_0\in\mathcal O_{\mathbb C^{n-1},0}$, $a_0(0)=0$; in particular $z_n$ itself is a degree-one Weierstrass polynomial and $W(0,z_n)=z_n$ ([[def-weierstrass-polynomial]]).

[F4] A point $q$ of a reduced hypersurface germ is regular exactly when the differential of a local reduced equation at $q$ is nonzero, equivalently exactly when the germ is a holomorphic hypersurface graph near $q$ ([[def-regular-singular-point-analytic-hypersurface]]).

[F5] The discriminant of a monic degree-one polynomial $t+a_1$ is $1$; in particular $\operatorname{Disc}_{z_n}(z_n)=1\ne0$ ([[def-discriminant-of-a-monic-polynomial]]).

[F6] For a prepared equation $W$ on the chosen product neighbourhood $V\times D$ of the finite projection theorem, containing all slice roots in $D$ and none on $\partial D$, put $X_W:=Z(W)\cap(V\times D)$ and let $\pi_W:X_W\to V$ be the restricted coordinate projection. The discriminant definition and finite projection theorem give $D_W=\operatorname{Disc}(W)$, branch set $B_{\pi_W}=\{D_W=0\}\subseteq V$, and a proper surjection with finite fibres that is a covering with as many sheets as the degree of $W$ over $V\setminus B_{\pi_W}$; when $n=1$ the base is a single point ([[def-discriminant-and-branch-locus-weierstrass-hypersurface]], [[thm-weierstrass-finite-projection-hypersurface-germ]]).

[F7] Assume the Axiom of Choice. For $m\ge0$ the Krull dimension of the holomorphic germ ring is $\dim\mathcal O_{\mathbb C^m,0}=m$, with $\mathcal O_{\mathbb C^0,0}=\mathbb C$; this is the only place where the Axiom of Choice is used in the present example ([[lem-dimension-of-holomorphic-germ-ring]], [[def-axiom-of-choice]]).

[F8] The local dimension of a hypersurface germ is $\dim_0X=\dim\mathcal O_{\mathbb C^n,0}/(f_{\mathrm{red}})$ for any reduced equation $f_{\mathrm{red}}$ of $X$ ([[def-local-dimension-hypersurface-germ]]).

[F9] A germ $h\in\mathcal O_{\mathbb C^n,0}$ expands as a convergent power series in $z_n$ with coefficients $h_k\in\mathcal O_{\mathbb C^{n-1},0}$, so $h-h_0\in(z_n)$ and the substitution $z_n=0$ induces an isomorphism $\mathcal O_{\mathbb C^n,0}/(z_n)\to\mathcal O_{\mathbb C^{n-1},0}$, $h+(z_n)\mapsto h(z',0)$ ([[thm-power-series-expansion-in-several-complex-variables]]).



**Proof technique:** direct — identify the reduced equation, compute the gradient and the discriminant, and compute the local ring by expanding in the last variable.

## Verification

1.1 The germ $z_n$ is irreducible: if $z_n=ab$ with $a,b$ nonunits, then $a,b\in\mathfrak m_0$ and hence $z_n=ab\in\mathfrak m_0^2$, contradicting that $z_n\notin\mathfrak m_0^2$ because its linear part is nonzero. By [F2] $z_n$ is therefore reduced, and $X=Z(z_n)$ is a hypersurface germ whose reduced defining germ is $z_n$ by [F1], with $Z(z_n)$ exactly the hyperplane $\{z_n=0\}$. [given, F1, F2]

2.1 Every point $q\in X$ is regular. Indeed $X=\{z_n=0\}$ is the graph of the zero function over the $z'$-coordinates near $q$, so by the graph criterion of [F4] $q$ is regular; equivalently, $dz_n\ne0$ everywhere and the reduced local equation $z_n$ has nonvanishing differential at $q$. [step 1.1, F4, construct]

2.2 For the prepared equation $W=z_n$ of degree $1$ in the last variable, [F3] and [F5] give $D_W=\operatorname{Disc}_{z_n}(z_n)=1\ne0$. On the product representative $V\times D$, [F6] gives the local branch set $B_{\pi_W}=\{D_W=0\}=\varnothing$ and the one-sheeted covering $\pi_W:X_W\to V$, where $X_W=Z(W)\cap(V\times D)=\{(z',0):z'\in V\}$. Separately, the global coordinate projection $\pi:X\to\mathbb C^{n-1}$ is the identity under the identification $X=\{z_n=0\}\cong\mathbb C^{n-1}$, so it is a one-sheeted covering over its whole base; the local map above is its restriction to $X_W$. When $n=1$ both bases are the single point $z'=0$. [step 1.1, F3, F5, F6]

3.1 For the same prepared equation $W=z_n$ as in step 2.2, the expansion [F9] in the last variable shows that the substitution $z_n=0$ gives a ring isomorphism $\mathcal O_{\mathbb C^n,0}/(z_n)\cong\mathcal O_{\mathbb C^{n-1},0}$; combined with the definition of local dimension in [F8] this gives $\dim_0X=\dim\mathcal O_{\mathbb C^{n-1},0}=n-1$, where the numerical value is the dimension result [F7], the only use of the Axiom of Choice. [step 1.1, step 2.2, F8, F9, F7]

4.1 Assembling steps 2.1, 2.2 and 3.1: the hyperplane germ $X=\{z_n=0\}$ has the reduced equation $z_n$ with nonzero differential everywhere, its projection to $z'$ is one-sheeted with discriminant $1$ and branch set $\varnothing$, and $\dim_0X=n-1$. At $n=1$ the curve is the point germ $\{0\}\subseteq\mathbb C$, the base is a point, and the dimension is $0=1-1$, so the degenerate case is covered. [step 2.1, step 2.2, step 3.1] ∎
