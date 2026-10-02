---
id: lem-reduced-prepared-polynomial-has-nonzero-discriminant
kind: lemma
title: "Reduced preparation has nonzero discriminant"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-discriminant-of-a-monic-polynomial
  - def-field-of-fractions
  - def-holomorphic-germ-ring-and-its-maximal-ideal
  - def-perfect-field
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-repeated-root-and-separable-polynomial
  - def-unique-factorisation-domain
  - def-weierstrass-polynomial
  - lem-gauss-lemma-over-a-ufd
  - lem-prepared-factorizations-and-irreducibility
  - thm-bezout-identity-for-polynomials
  - thm-discriminant-root-formula-and-repeated-root-criterion
  - thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - thm-holomorphic-germ-ring-is-a-ufd
  - thm-perfect-field-characterizations
  - thm-polynomial-ring-over-a-field-is-a-ufd
  - thm-uniqueness-in-weierstrass-preparation
  - thm-weierstrass-preparation-theorem
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
      locator: "§6.2 Weierstrass preparation and the discriminant set (pp. 175–178); Theorem 6.3.3 on dependence of zeros and the discriminant (p. 178)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (4.19) local parametrisation: finite preparation, degree and discriminant (p. 95)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $n\ge1$, let $f\in\mathcal O_{\mathbb C^n,p}$ be a reduced nonzero nonunit
germ that is regular in the last variable of order $d$ after the page's
translation convention, and let

$$f=uW$$

be its Weierstrass preparation, with $u$ a unit and $W$ a Weierstrass
polynomial of degree $d$. Put $K:=\operatorname{Frac}(\mathcal O_{n-1,0})$ for
$n\ge2$ and $K:=\mathbb C=\operatorname{Frac}(\mathcal O_{0,0})$ for $n=1$.
Then $W$ is square-free in $K[T]$: no irreducible element of $K[T]$ divides
$W$ twice. Consequently

$$D_W(z'):=\operatorname{Disc}_T(W)\in\mathcal O_{n-1,0}$$

is a nonzero holomorphic base germ.

## Facts & Assumptions

**Given:** A reduced nonzero nonunit germ $f$ that is regular in the last
variable of order $d$, its preparation $f=uW$, and
$K=\operatorname{Frac}(\mathcal O_{n-1,0})$ (with $\mathcal O_{0,0}=\mathbb C$).

[F1] Reducedness means that no irreducible element of $\mathcal O_{\mathbb C^n,p}$ divides $f$ twice ([[def-reduced-holomorphic-germ-for-hypersurface]]).

[F2] The germ ring is a unique factorisation domain, so every nonzero nonunit has a factorisation into finitely many irreducibles, unique up to order and associates ([[thm-holomorphic-germ-ring-is-a-ufd]], [[def-unique-factorisation-domain]]).

[F3] Weierstrass preparation: a germ regular in the last variable of order $d$ is a unit times a Weierstrass polynomial $W$ of degree $d$, and the Weierstrass polynomial of a preparation of a fixed regular germ is unique ([[thm-weierstrass-preparation-theorem]], [[thm-uniqueness-in-weierstrass-preparation]], [[def-weierstrass-polynomial]]).

[F4] Prepared factorisations: if $f=gh$ and $f=uW$ is the preparation of $f$, then $g,h$ are regular in the last variable and $W=GH$ for their preparations; conversely a factorisation of $W$ into Weierstrass polynomials of positive degree gives a nontrivial factorisation of $f$. Consequently $g$ is irreducible in $\mathcal O_{n,0}$ exactly when its prepared Weierstrass polynomial is irreducible in $\mathcal O_{n-1,0}[T]$ ([[lem-prepared-factorizations-and-irreducibility]]).

[F5] Gauss's lemma: over a unique factorisation domain $R$ with fraction field $K$, a primitive positive-degree polynomial is irreducible in $R[x]$ if and only if it is irreducible in $K[x]$, and a product of primitive polynomials is primitive ([[lem-gauss-lemma-over-a-ufd]], [[def-field-of-fractions]]).

[F6] For every field $F$, the polynomial ring $F[T]$ is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[F7] The discriminant of a monic polynomial is the coefficient expression $\operatorname{Disc}(W)=D_d(-a_1,a_2,\dots,(-1)^da_d)$, and in a splitting field with $W=\prod_i(T-\alpha_i)$ it equals $\prod_{i<j}(\alpha_i-\alpha_j)^2$; it vanishes exactly when $W$ has a repeated root ([[def-discriminant-of-a-monic-polynomial]], [[thm-discriminant-root-formula-and-repeated-root-criterion]]).

[F8] $K$ is a field containing the constant germs, hence of characteristic $0$, and a characteristic-zero field is perfect; over a perfect field every nonconstant irreducible polynomial is separable, that is, has no repeated root in any extension field ([[thm-perfect-field-characterizations]], [[def-perfect-field]], [[def-repeated-root-and-separable-polynomial]], [[thm-field-of-fractions-is-a-field-and-the-domain-embeds]], [[def-holomorphic-germ-ring-and-its-maximal-ideal]]).

[F9] Bézout for polynomials: for $f,g\in F[x]$ not both zero with monic gcd $d$ there are $A,B$ with $Af+Bg=d$ ([[thm-bezout-identity-for-polynomials]]).



**Proof technique:** direct — factor $f$ in the germ UFD, prepare each irreducible factor, and read square-freeness of $W$ in $K[T]$.

## Proof

1.1 By [F1] and [F2] write $f=u\prod_{i=1}^{r}p_i$ with $r\ge1$, the $p_i$ irreducible and pairwise nonassociate, and no irreducible factor repeated. [given, F1, F2]

2.1 For each $i$ factor $f=p_i\,h_i$ with $h_i:=u\prod_{j\ne i}p_j$. By [F4] both $p_i$ and $h_i$ are regular in the last variable, the preparation $f=uW$ satisfies $W=W_iV_i$ where $p_i=u_iW_i$ and $h_i=v_iV_i$ are preparations, and $p_i$ is a nonunit, so its order $d_i=\deg W_i$ is at least $1$. [step 1.1, F3, F4]

3.1 Applying the consequence in [F4] to the irreducible $p_i$ shows that $W_i$ is irreducible in $\mathcal O_{n-1,0}[T]$. Each $W_i$ is monic by [F3], hence primitive, so by Gauss's lemma [F5] $W_i$ is irreducible in $K[T]$. [step 2.1, F3, F4, F5]

4.1 The $W_i$ are pairwise distinct: if $W_i=W_j$ for $i\ne j$, then $p_i=u_iW_i=u_iu_j^{-1}p_j$ makes $p_i$ and $p_j$ associates, contradicting step 1.1. [step 2.1, step 3.1]

5.1 The product $\prod_{i=1}^{r}W_i$ is a Weierstrass polynomial: it is monic of degree $\sum_id_i$ with coefficients in $\mathcal O_{n-1,0}$, and at $z'=0$ each factor equals $T^{d_i}$ by [F3], so the product equals $T^{\sum_id_i}$. Since step 2.1 gives $f=\bigl(u\prod_iu_i\bigr)\prod_iW_i$ and $f=uW$ is a preparation, uniqueness of the prepared polynomial [F3] yields $W=\prod_{i=1}^{r}W_i$. [step 1.1, step 2.1, step 4.1, F3]

6.1 Hence $W$ is square-free in $K[T]$: an irreducible $P\in K[T]$ dividing $W$ twice would, by uniqueness of factorisation in the UFD $K[T]$ from [F6], be associate to two of the distinct monic irreducibles $W_i$; being monic it would equal both, contradicting step 4.1. [step 4.1, step 5.1, F6]

7.1 For the discriminant, let $E$ be a splitting field of $W$ over $K$ and write $W=\prod_{k=1}^{d}(T-\alpha_k)$ as in [F7]. The roots of $W$ are the roots of the factors $W_i$. Two distinct factors $W_i,W_j$ are coprime in $K[T]$: their monic gcd divides the irreducible $W_i$, so it is $1$ or an associate of $W_i$, and in the second case it would also be an associate of $W_j$, forcing $W_i=W_j$; thus $1=A W_i+B W_j$ for some $A,B\in K[T]$ by [F9], and a common root would give $1=0$. A root of exactly one factor $W_i$ that were repeated for $W$ would be a repeated root of $W_i$, since the complementary product does not vanish there. [step 3.1, step 4.1, step 6.1, F7, F9]

8.1 Each $W_i$ is separable by step 3.1 and [F8], so it has no repeated root in the extension $E$; combined with step 7.1, all roots $\alpha_1,\dots,\alpha_d$ of $W$ in $E$ are pairwise distinct. The root formula in [F7] then gives $\operatorname{Disc}_T(W)=\prod_{k<l}(\alpha_k-\alpha_l)^2\ne0$ in $K$. [step 7.1, F7, F8]

9.1 Finally, $\operatorname{Disc}_T(W)$ is the coefficient expression $D_d(-a_1,\dots,(-1)^da_d)$ in the coefficients $a_j\in\mathcal O_{n-1,0}$ of $W$ by [F7], hence is a holomorphic base germ $D_W\in\mathcal O_{n-1,0}$; since it is nonzero as an element of $K=\operatorname{Frac}(\mathcal O_{n-1,0})$ by step 8.1, it is a nonzero germ. [step 5.1, step 8.1, F3, F7] ∎
