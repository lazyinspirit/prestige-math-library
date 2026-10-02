---
id: lem-total-fractions-split-over-hypersurface-branches
kind: lemma
title: "Total fractions split over the branches of a reduced hypersurface"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-field-of-fractions
  - def-irreducible-and-prime-elements-in-a-domain
  - def-irreducible-hypersurface-germ
  - def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ
  - def-unique-factorisation-domain
  - lem-irreducible-holomorphic-germ-is-prime
  - prop-units-in-the-holomorphic-germ-ring
  - thm-holomorphic-germ-ring-is-a-ufd
  - thm-local-irreducible-decomposition-hypersurface-germ
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
      locator: "§6.4 unique factorisation (p. 182); Proposition 6.7.3 irreducible decomposition and branches (p. 194); §6.6 defining ideals (p. 188)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (4.21) prime vanishing ideals and products (p. 96); II (6.6) product of irreducible germs (pp. 106–107)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $n\ge1$, let $p\in\mathbb C^n$ and let $q_1,\dots,q_r$ be pairwise
nonassociate irreducible germs in the holomorphic germ ring
$\mathcal O=\mathcal O_{\mathbb C^n,p}$, with $r\ge1$. Put

$$f:=q_1\cdots q_r,\qquad A:=\mathcal O/(f),$$

so that $f$ is a reduced product and $X=Z(f)$ is the hypersurface germ whose
branches are the prime factors $q_i$
([[thm-local-irreducible-decomposition-hypersurface-germ]],
[[def-irreducible-hypersurface-germ]]). Let $Q(A)$ be the total quotient ring
of $A$: the localisation at the multiplicative subset $S$ of the
nonzerodivisors of $A$
([[def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ]]).
Then there is a ring isomorphism

$$Q(A)\;\cong\;\prod_{i=1}^{r}\operatorname{Frac}\!\bigl(\mathcal O/(q_i)\bigr),$$

where each $\mathcal O/(q_i)$ is a domain and $\operatorname{Frac}$ is its
fraction field ([[def-field-of-fractions]]). For $r=1$ this is the identity
$Q(A)=\operatorname{Frac}(A)$.

## Facts & Assumptions

**Given:** Pairwise nonassociate irreducible germs $q_1,\dots,q_r$ in $\mathcal O=\mathcal O_{\mathbb C^n,p}$, the reduced product $f=q_1\cdots q_r$, and $A=\mathcal O/(f)$ with its nonzerodivisors $S$.

[F1] The total quotient ring is $Q(A)=S^{-1}A$ for $S$ the set of nonzerodivisors of $A$, with the localisation map $a\mapsto a/1$ ([[def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ]]).

[F2] $\mathcal O$ is a unique factorisation domain: an integral domain in which every nonzero nonunit is a finite product of irreducibles, uniquely up to order and associates ([[thm-holomorphic-germ-ring-is-a-ufd]], [[def-unique-factorisation-domain]]).

[F3] Every irreducible germ is prime: $q\mid ab$ implies $q\mid a$ or $q\mid b$ ([[lem-irreducible-holomorphic-germ-is-prime]], [[def-irreducible-and-prime-elements-in-a-domain]]); in particular each ideal $(q_i)$ is a prime ideal, so $\mathcal O/(q_i)$ is a domain and its fraction field is defined ([[def-field-of-fractions]]).


[F4] Pairwise nonassociate irreducibles are pairwise coprime in the UFD: if $i\ne j$ and $q_i\mid q_j$, then $q_j=q_ih$ with $h$ a unit, because otherwise both factors would be nonunits and $q_j$ would be reducible ([[def-irreducible-and-prime-elements-in-a-domain]], [[def-unique-factorisation-domain]]).



**Proof technique:** direct — embed $A$ into the product of the branch rings, identify the nonzerodivisors, and construct the comparison isomorphism with explicit idempotent fractions.

## Proof

1.1 Write $D_i:=\mathcal O/(q_i)$ for each $i$ and $R:=\prod_{i=1}^{r}D_i$. Write $a^{(i)}$ for the $i$-th component in $D_i$ of a class $a\in A$. The quotient map $\psi:A\to R$, $h+(f)\mapsto(h+(q_1),\dots,h+(q_r))$, is well defined by [F2] and [F3], and its kernel is $\bigl(\bigcap_i(q_i)\bigr)/(f)$. By [F2] and [F3], an element $h$ lies in every $(q_i)$ exactly when each $q_i$ divides $h$, and since the $q_i$ are pairwise nonassociate irreducibles this happens exactly when $q_1\cdots q_r=f$ divides $h$; hence $\bigcap_i(q_i)=(f)$ and $\psi$ is injective. Each $D_i$ is a domain by [F3], so the fraction fields $K_i:=\operatorname{Frac}(D_i)$ exist. [given, F1, F2, F3, F4]

2.1 For each $i$ let $\sigma_i\in A$ be the class of $\prod_{j\ne i}q_j$. Its $i$-th component $\sigma_i^{(i)}$ is nonzero in $D_i$ — it is a product of the nonzero classes of the $q_j$, $j\ne i$, in the domain $D_i$ by [F3] and [F4] — and its $j$-th component vanishes for every $j\ne i$. The sum $s:=\sigma_1+\cdots+\sigma_r$ therefore has $s^{(i)}=\sigma_i^{(i)}\ne0$ for every $i$. An element $x\in A$ has all components nonzero in $R$ if and only if it is a nonzerodivisor: if $x^{(i)}=0$ for some $i$, then $x\,\sigma_i=0$ with $\sigma_i\ne0$, so $x$ is a zerodivisor; conversely, if $x^{(i)}\ne0$ for all $i$ and $xy=0$ for some $y\in A$, then $x^{(i)}y^{(i)}=0$ in the domain $D_i$ gives $y^{(i)}=0$ for every $i$, hence $y=0$. Therefore $S=\{x\in A:\ x^{(i)}\ne0\ \text{for all }i\}$, and in particular $s\in S$. [step 1.1, F1, F2, F3, F4]

3.1 In $Q(A)$ the element $s$ is invertible, and the elements $e_i:=\sigma_i/s$ are orthogonal idempotents with $\sum_ie_i=1$: componentwise in $R$ one has $\sigma_i^2=\sigma_is$ and $\sigma_i\sigma_j=0$ for $i\ne j$, while $\sum_i\sigma_i=s$, so $e_i^2=e_i$, $e_ie_j=0$ and $\sum_ie_i=1$ in $Q(A)$ by the arithmetic of the localisation. [step 2.1, F1, algebra]

3.2 Define $\Phi:Q(A)\to R':=\prod_{i=1}^{r}K_i$ by $\Phi(a/s):=(a^{(1)}/s^{(1)},\dots,a^{(r)}/s^{(r)})$. This is well defined: if $a/s=a'/s'$ in $Q(A)$, then $u(as'-a's)=0$ in $A$ for some $u\in S$, and applying the injective map of step 1.1 componentwise gives $u^{(i)}\bigl(a^{(i)}s'^{(i)}-a'^{(i)}s^{(i)}\bigr)=0$ in the domain $D_i$ with $u^{(i)}\ne0$, hence $a^{(i)}/s^{(i)}=a'^{(i)}/s'^{(i)}$ in $K_i$. The map $\Phi$ is a ring homomorphism, and it is injective: if $\Phi(a/s)=0$, then $a^{(i)}=0$ for every $i$, so $a=0$ by injectivity of $\psi$, and $a/s=0$ in the localisation. [step 2.1, step 1.1, F2, algebra]

4.1 $\Phi$ is surjective. Let $(y_1,\dots,y_r)\in R'$, and for each $i$ write $y_i=X_i/D_i$ with $X_i,D_i\in D_i$ and $D_i\ne0$; since $\psi$ is surjective onto $D_i$, choose lifts $X,D\in A$ of $X_i$ and $D_i$. Put $u_i:=D\sigma_i+(s-\sigma_i)\in A$ and $z_i:=X\sigma_i/u_i\in Q(A)$. The element $u_i$ has all components nonzero: $u_i^{(i)}=D^{(i)}\sigma_i^{(i)}\ne0$ in the domain $D_i$, and for $j\ne i$ one has $u_i^{(j)}=(s-\sigma_i)^{(j)}=\sigma_j^{(j)}\ne0$; hence $u_i\in S$ by step 2.1 and $z_i$ is a legitimate fraction. Moreover $\Phi(z_i)$ has $i$-th component $\bigl(X^{(i)}\sigma_i^{(i)}\bigr)\big/\bigl(D^{(i)}\sigma_i^{(i)}\bigr)=X_i/D_i=y_i$ and vanishes in every component $j\ne i$, because the numerator $X\sigma_i$ has vanishing $j$-th component. Therefore $\Phi\bigl(\sum_iz_i\bigr)=(y_1,\dots,y_r)$, so $\Phi$ is surjective. [step 2.1, step 3.2, F2, choose, algebra]

5.1 Together with step 3.2 this makes $\Phi$ an isomorphism $Q(A)\cong\prod_iK_i=\prod_i\operatorname{Frac}(\mathcal O/(q_i))$. For $r=1$ we have $f=q_1$, $A=\mathcal O/(q_1)$ is a domain by [F3], $R=D_1$, and $\Phi$ identifies $Q(A)$ with its fraction field, the ordinary case of the total quotient ring. [step 3.2, step 4.1, step 3.1] ∎
