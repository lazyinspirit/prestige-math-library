---
id: lem-exceptional-fiber-line-bundle-euler-characteristic
kind: lemma
title: "Euler characteristic of line bundles on a projective line over a finite field extension"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-euler-characteristic-coherent-sheaf
  - def-sheaf-cohomology-derived-global-sections
  - cor-picard-projective-line-integers
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-projective-space-proper-over-base
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "Chapter 8 and the cohomology of the projective line (course notes, curve and divisor chapters)"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Exercise 19.3.A computing the exceptional divisor and normal bundle via the cone, p. 388"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and let $\kappa$ be a finite
extension of $k$ of degree $r=[\kappa:k]$. Let $E$ be a scheme isomorphic to
$\mathbb P^1_\kappa$ over $\kappa$, and let $M$ be an invertible sheaf on $E$.
Then $H^q(E,M)=0$ for $q\ge2$, and writing $d$ for the degree of $M$ over
$\kappa$ one has

$$\dim_kH^0(E,M)-\dim_kH^1(E,M)=r(1+d),$$

so the $k$-Euler characteristic of $M$ is $\chi_k(E,M)=r(1+d)$. In particular
a line bundle of degree $-j$ on $E$ has Euler characteristic $r(1-j)$.

## Facts & Assumptions

**Given:** A field $k$, a finite field extension $\kappa/k$ of degree $r=[\kappa:k]$, a $\kappa$-scheme $E$ isomorphic to $\mathbb P^1_\kappa$ over $\kappa$, and an invertible sheaf $M$ on $E$; the Axiom of Choice is inherited from the Picard, cohomology and Euler-characteristic suppliers cited below ([[def-axiom-of-choice]]).

[F1] [[def-sheaf-cohomology-derived-global-sections]]: For a scheme $X$ and an $\mathcal O_X$-module $\mathcal F$, the cohomology groups $H^q(X,\mathcal F)$ are the right derived functors of the global-section functor $\Gamma(X,-)$, so an isomorphism of $\mathcal O_X$-modules induces an isomorphism $H^q(X,\mathcal F)\cong H^q(X,\mathcal F')$, functorially in $q$.

[F2] [[cor-picard-projective-line-integers]]: For every field $K$, the degree homomorphism induces an isomorphism $\operatorname{Pic}(\mathbb P^1_K)\to\mathbb Z$ under which $\mathcal O_{\mathbb P^1_K}(d)$ corresponds to $d$; every invertible sheaf on $\mathbb P^1_K$ is isomorphic to $\mathcal O_{\mathbb P^1_K}(d)$ for a unique integer $d$.

[F3] [[thm-cohomology-projective-space-twisting-sheaves]]: For $n=1$ over a field $K$, $H^0(\mathcal O(d))$ has basis the degree-$d$ ordinary monomials when $d\ge0$ and is zero otherwise; $H^1(\mathcal O(d))$ has basis the Laurent monomials $x^ey^f$ with $e,f<0$ and $e+f=d$; all higher groups vanish.

[F4] [[def-euler-characteristic-coherent-sheaf]]: For a scheme $X$ proper over a field $k$ and a coherent $\mathcal O_X$-module $\mathcal F$, all groups $H^q(X,\mathcal F)$ are finite-dimensional over $k$ and only finitely many are nonzero, and the Euler characteristic is the alternating sum $\chi(X,\mathcal F)=\sum_{q\ge0}(-1)^q\dim_kH^q(X,\mathcal F)$.

[F5] [[thm-projective-space-proper-over-base]]: For a scheme $S$ and $n\ge0$ the structure morphism $\mathbb P^n_S\to S$ is proper.

[F6] [[def-coherent-module-scheme]]: On a locally Noetherian scheme, a finite locally free sheaf is coherent; in particular an invertible sheaf on a locally Noetherian scheme is coherent.

## Proof

1.1 Fix a $\kappa$-isomorphism $\varphi\colon E\to\mathbb P^1_\kappa$ and set $N:=\varphi_*M$, so that $N$ is an invertible sheaf on $\mathbb P^1_\kappa$ and $\Gamma(E,M)=\Gamma(\mathbb P^1_\kappa,N)$ by definition of the direct image. The direct image along an isomorphism is an exact equivalence of module categories with inverse $\varphi^*$, so it preserves the global-section functors and their right derived functors; hence $\varphi$ induces $\kappa$-linear isomorphisms $H^q(E,M)\cong H^q(\mathbb P^1_\kappa,N)$ for all $q\ge0$. [F1]

2.1 By [F2] applied to the field $\kappa$, the invertible sheaf $N$ on $\mathbb P^1_\kappa$ is isomorphic to $\mathcal O_{\mathbb P^1_\kappa}(d)$ for a unique integer $d$, which we take as the definition of the degree $d$ of $M$ over $\kappa$. [F2, step 1.1]

3.1 By [F3] with $A=\kappa$ and $n=1$ the groups $H^q(\mathbb P^1_\kappa,\mathcal O(d))$ vanish unless $q=0$ or $q=1$; the same description gives $H^0\cong\kappa[x,y]_d$, of dimension $h^0=d+1$ for $d\ge0$ and $0$ for $d<0$, and $H^1$ free on the Laurent monomials $x^ey^f$ with $e,f<0$ and $e+f=d$, of dimension $h^1=-d-1$ for $d\le-2$ and $0$ otherwise, so $h^0-h^1=1+d$. Since cohomology depends only on the isomorphism class of the sheaf, [F1] gives $\dim_\kappa H^q(\mathbb P^1_\kappa,N)=h^q$; combined with step 1.1 this yields $H^q(E,M)=0$ for $q\ge2$ and $\dim_\kappa H^0(E,M)-\dim_\kappa H^1(E,M)=1+d$. [F1, F3, step 1.1, step 2.1]

4.1 The structure morphism $E\to\operatorname{Spec}\kappa$ makes $\kappa\to\Gamma(E,\mathcal O_E)$ a ring homomorphism, so each $H^q(E,M)$ is a $\kappa$-vector space; for a $\kappa$-vector space $V$ of dimension $h$ one has $\dim_kV=rh$, because if $v_1,\dots,v_h$ is a $\kappa$-basis of $V$ and $\mu_1,\dots,\mu_r$ is a $k$-basis of $\kappa$, then the products $\mu_jv_i$ span $V$ over $k$ and are $k$-independent. Applying this to the groups of step 3.1 gives $\dim_kH^0(E,M)-\dim_kH^1(E,M)=r(h^0-h^1)=r(1+d)$. [step 3.1, algebra]

5.1 The scheme $E$ is proper over $\kappa$ because it is $\kappa$-isomorphic to $\mathbb P^1_\kappa$ and $\mathbb P^1_S\to S$ is proper for every $S$ [F5], and $M$ is coherent on the locally Noetherian scheme $E$ because it is invertible [F6]; thus the Euler characteristic of [F4], with base field $\kappa$, is the alternating sum over the finitely many nonzero cohomology groups. By step 3.1 only the terms $q=0,1$ occur, and passing to $k$-dimensions as in step 4.1 gives the $k$-Euler characteristic $\chi_k(E,M)=\dim_kH^0(E,M)-\dim_kH^1(E,M)=r(1+d)$. [F4, F5, F6, step 3.1, step 4.1]

6.1 If $\varphi'$ is another $\kappa$-isomorphism with associated integer $d'$, then step 5.1 applied to both gives $r(1+d)=\chi_k(E,M)=r(1+d')$, and $r\ge1$ because $\kappa/k$ is a finite extension, so $d=d'$; thus the degree of $M$ over $\kappa$ is well defined. For $d=-j$ the formula reads $\chi_k(E,M)=r(1-j)$, which is the final assertion. [step 2.1, step 5.1] ∎

## Remarks

The extension $\kappa/k$ need not be separable or Galois: the proof never decomposes
$\kappa\otimes_k\kappa$, using only that $H^q(E,M)$ is a $\kappa$-vector space and
that $r=[\kappa:k]$ is the $k$-dimension of $\kappa$. The case $d=-1$ gives
$\chi_k=0$, and $d=0$ gives $\chi_k=r$, the $k$-dimension of the structure sheaf's
cohomology.
