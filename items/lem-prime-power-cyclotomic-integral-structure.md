---
id: lem-prime-power-cyclotomic-integral-structure
kind: lemma
title: Prime-power cyclotomic ring, discriminant support and p factor
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-cyclotomic-extension
  - prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate
  - thm-cyclotomic-polynomials-are-irreducible-over-the-rationals
  - cor-order-index-discriminant-formula
  - thm-power-basis-discriminant-is-polynomial-discriminant
  - def-ring-of-integers-of-a-number-field
  - cor-rational-algebraic-integers-are-integers
  - cor-the-galois-group-of-a-rational-cyclotomic-field
  - def-order-in-a-number-field
  - def-integral-element-and-algebraic-integer
  - cor-integral-elements-form-a-subring
  - thm-field-norm-and-trace-by-embeddings
  - def-discriminant-of-a-number-field-basis-and-order
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - thm-orders-have-integral-bases-and-finite-index
  - thm-ring-of-integers-free-of-rank-degree
  - cor-order-of-element-divides-group-order
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Proposition 6.2 and proof, pp. 96-98"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 6, Proposition 6.2(a)-(d) with proof, pp. 96-98: O_{Q(zeta_{p^r})}=Z[zeta_{p^r}], (p)=(1-zeta)^{phi(p^r)} with 1-zeta prime, and disc = ±p^{p^{r-1}(r(p-1)-1)}."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Theorem 10.1 with Lemmas 10.2, 10.3, 10.5 and 10.6"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Ch. 10, pp. 54-58: the discriminant is ±p^{p^{r-1}(r(p-1)-1)} up to sign; the index is a p-power; and the (zeta-1)-adic coefficient descent proves O_K ∩ p^{-1}Z[zeta] = Z[zeta]."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

For a prime $p$ and an integer $a\ge1$ put $K=\mathbb Q(\zeta_{p^{a}})$,
$e=\varphi(p^{a})$ and $\lambda=1-\zeta_{p^{a}}$. Then
$$\mathcal O_K=\mathbb Z[\zeta_{p^{a}}],\qquad (p)=(\lambda)^{e},$$
the power basis $1,\zeta_{p^{a}},\dots,\zeta_{p^{a}}^{e-1}$ is an integral
basis of $\mathcal O_K$, and the discriminant of that basis is a signed power
of $p$ with absolute value $p^{\,p^{a-1}(a(p-1)-1)}$.

## Facts & Assumptions

**Given:** A prime $p$, an integer $a\ge1$, $e:=\varphi(p^{a})$, a primitive
$p^{a}$-th root of unity $\zeta=\zeta_{p^{a}}$ in a fixed algebraic closure of
$\mathbb Q$, the field $K:=\mathbb Q(\zeta)$, the element $\lambda:=1-\zeta$,
the subring $R:=\mathbb Z[\zeta]\subseteq K$, the polynomial
$\Phi:=\Phi_{p^{a}}\in\mathbb Z[t]$, and the index $m:=[\mathcal O_K:R]$ of the
order $R$ in the ring of integers $\mathcal O_K$ of $K$.

[F1] $\Phi$ is monic of degree $e=\varphi(p^{a})$, $\Phi(1)=p$, and
$\Phi(t)\,(t^{p^{a-1}}-1)=t^{p^{a}}-1$
([[prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate]]).

[F2] $\Phi$ is irreducible over $\mathbb Q$
([[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]]), so
$\Phi$ is the minimal polynomial of $\zeta$ over $\mathbb Q$,
$K=\mathbb Q[t]/(\Phi)$, $[K:\mathbb Q]=\deg\Phi=e$, and
$1,\zeta,\dots,\zeta^{e-1}$ is a $\mathbb Q$-basis of $K$
([[def-cyclotomic-extension]]).

[F3] $K/\mathbb Q$ is Galois and
$\operatorname{Gal}(K/\mathbb Q)\cong(\mathbb Z/p^{a})^{\times}$ via
$\sigma_j(\zeta)=\zeta^{j}$; in particular for every integer $j$ coprime to
$p$ there is $\sigma_j\in\operatorname{Gal}(K/\mathbb Q)$ with
$\sigma_j(\zeta)=\zeta^{j}$
([[cor-the-galois-group-of-a-rational-cyclotomic-field]]).

[F4] $\zeta$ is integral over $\mathbb Z$, being a root of the monic polynomial
$t^{p^{a}}-1$, and the integral elements form a subring; hence
$R=\mathbb Z[\zeta]\subseteq\mathcal O_K$
([[def-integral-element-and-algebraic-integer]],
[[cor-integral-elements-form-a-subring]]). A unital subring of
$\mathcal O_K$ that is free of rank $[K:\mathbb Q]$ as a $\mathbb Z$-module is
an order, every order has an integral basis and finite additive index in
$\mathcal O_K$, and $\mathcal O_K$ itself is free of rank $[K:\mathbb Q]$
([[def-order-in-a-number-field]],
[[thm-orders-have-integral-bases-and-finite-index]],
[[thm-ring-of-integers-free-of-rank-degree]]). Consequently $R$ is an order
in $K$, $m$ is finite, and $m\mathcal O_K\subseteq R$: the quotient group
$\mathcal O_K/R$ is finite of order $m$ and every element of a finite group of
order $m$ has order dividing $m$
([[cor-order-of-element-divides-group-order]]).

[F5] Since $K/\mathbb Q$ is Galois of degree $e$, for $x\in K$ the norm is
$$N_{K/\mathbb Q}(x)=\prod_{\sigma\in\operatorname{Gal}(K/\mathbb Q)}\sigma(x),$$
and if $x\in\mathcal O_K$ then $N_{K/\mathbb Q}(x)\in\mathbb Z$
([[thm-field-norm-and-trace-by-embeddings]],
[[cor-rational-algebraic-integers-are-integers]]).

[F6] $\operatorname{disc}(1,\zeta,\dots,\zeta^{e-1})
=(-1)^{e(e-1)/2}N_{K/\mathbb Q}\bigl(\Phi'(\zeta)\bigr)$
([[thm-power-basis-discriminant-is-polynomial-discriminant]]), this is the
discriminant $\operatorname{disc}(R)$ of the order $R$, and
$\operatorname{disc}(R)=m^{2}d_K$ with $d_K:=\operatorname{disc}(\mathcal O_K)$
a nonzero integer
([[def-discriminant-of-a-number-field-basis-and-order]],
[[cor-order-index-discriminant-formula]],
[[thm-number-field-discriminant-is-well-defined-and-nonzero]]).

[F7] $\mathcal O_K\cap\mathbb Q=\mathbb Z$: a rational number that is a root of
a monic polynomial in $\mathbb Z[t]$ lies in $\mathbb Z$
([[cor-rational-algebraic-integers-are-integers]]).

## Proof

**Proof technique:** direct.

1.1 $\Phi(\zeta)=0$ by [F1], so $\zeta$ is a root of the degree-$e$ monic $\Phi$, which is irreducible by [F2]; hence $K$ has degree $e$ over $\mathbb Q$, the powers $1,\zeta,\dots,\zeta^{e-1}$ form a $\mathbb Z$-basis of $R$, and $R$ is an order in $\mathcal O_K$ with finite index $m$ satisfying $m\mathcal O_K\subseteq R$. [F1, F2, F4, given]

1.2 For every integer $j$ coprime to $p$ the element $\zeta^{j}$ is a root of $\Phi$: its order is $p^{a}$, so $(\zeta^{j})^{p^{a}}=1$ while $(\zeta^{j})^{p^{a-1}}\ne1$, and [F1] then forces $\Phi(\zeta^{j})=0$; the $e$ elements $\zeta^{j}$ with $j\in(\mathbb Z/p^{a})^{\times}$ are pairwise distinct, so comparison with the monic degree-$e$ polynomial $\Phi$ gives $\Phi(X)=\prod_{j\in(\mathbb Z/p^{a})^{\times}}(X-\zeta^{j})$ and $p=\Phi(1)=\prod_{j\in(\mathbb Z/p^{a})^{\times}}(1-\zeta^{j})$. [F1, F2, F3]

2.1 Each factor of the product in step 1.2 is a unit multiple of $\lambda=1-\zeta$ inside $R$: after replacing $j$ by its least positive residue modulo $p^{a}$ the quotient $(1-\zeta^{j})/(1-\zeta)=1+\zeta+\dots+\zeta^{j-1}$ lies in $R$, and if $s$ satisfies $js\equiv1\pmod{p^{a}}$ then $\zeta=(\zeta^{j})^{s}$ and $(1-\zeta)/(1-\zeta^{j})=1+\zeta^{j}+\dots+(\zeta^{j})^{s-1}\in\mathbb Z[\zeta^{j}]\subseteq R$; the two quotients are inverse to each other, so $(1-\zeta^{j})/(1-\zeta)\in R^{\times}$. Hence $p=u\lambda^{e}$ for some $u\in R^{\times}$, and consequently $\lambda^{e}\mathcal O_K=p\mathcal O_K$. [F1, step 1.2]

2.2 Taking the product formula of [F5] over the Galois group identified in [F3] and substituting step 1.2 gives $N_{K/\mathbb Q}(1-\zeta)=\prod_{\sigma}\sigma(1-\zeta)=\prod_{j\in(\mathbb Z/p^{a})^{\times}}(1-\zeta^{j})=\Phi(1)=p$; moreover $N_{K/\mathbb Q}(\zeta)\in\mathbb Z$ by [F5] and $N_{K/\mathbb Q}(\zeta)^{p^{a}}=N_{K/\mathbb Q}(\zeta^{p^{a}})=N_{K/\mathbb Q}(1)=1$, so $N_{K/\mathbb Q}(\zeta)=\pm1$, since the only integers whose $p^{a}$-th power is $1$ are $\pm1$. [F1, F3, F5, step 1.2]

3.1 For $0\le s\le a-1$ one has $N_{K/\mathbb Q}(1-\zeta^{p^{s}})=p^{\,p^{s}}$: the element $\zeta_{s}:=\zeta^{p^{s}}$ is a primitive $p^{a-s}$-th root of unity in $L_{s}:=\mathbb Q(\zeta_{s})$, the computation of step 2.2 with $a$ replaced by $a-s$ gives $N_{L_{s}/\mathbb Q}(1-\zeta_{s})=p$, and the embedding formula of [F5] applied to the tower $\mathbb Q\subseteq L_{s}\subseteq K$ gives $N_{K/\mathbb Q}(1-\zeta^{p^{s}})=N_{L_{s}/\mathbb Q}(1-\zeta_{s})^{[K:L_{s}]}=p^{\,p^{s}}$, since $[K:L_{s}]=\varphi(p^{a})/\varphi(p^{a-s})=p^{s}$ by [F2]. [F2, F5, step 2.2]

3.2 $\mathbb Z\cap\lambda\mathcal O_K=p\mathbb Z$: step 2.1 gives $p=u\lambda^{e}$ with $u\in R^{\times}$, so $p\in\lambda\mathcal O_K$ and $p\mathbb Z\subseteq\mathbb Z\cap\lambda\mathcal O_K$; conversely, if $c\in\mathbb Z\cap\lambda\mathcal O_K$, then $c^{e}\in\mathbb Z\cap\lambda^{e}\mathcal O_K=\mathbb Z\cap p\mathcal O_K$ by step 2.1, say $c^{e}=p\beta$ with $\beta=c^{e}/p\in\mathcal O_K$, and $\beta\in\mathcal O_K\cap\mathbb Q=\mathbb Z$ by [F7], so $p$ divides $c^{e}$ in $\mathbb Z$ and hence $p$ divides $c$, that is $c\in p\mathbb Z$. [F7, step 2.1]

4.1 $(p\mathcal O_K)\cap R=pR$: the inclusion $\supseteq$ is clear; for $\subseteq$ let $\alpha\in p\mathcal O_K\cap R$ and expand $\alpha=c_0+c_1\lambda+\dots+c_{e-1}\lambda^{e-1}$ with $c_i\in\mathbb Z$, which is possible because $\zeta=1-\lambda$ makes $1,\lambda,\dots,\lambda^{e-1}$ a $\mathbb Z$-basis of $R$ as well. We show $c_i\in p\mathbb Z$ for all $i$ by induction: if $\alpha=\sum_{i\ge i_0}c_i\lambda^{i}\in p\mathcal O_K$ with $0\le i_0<e$, then $i_0+1\le e$ and $p\mathcal O_K=\lambda^{e}\mathcal O_K$ by step 2.1, so $\alpha\in\lambda^{i_0+1}\mathcal O_K$ and $\alpha/\lambda^{i_0}\in\lambda\mathcal O_K$; on the other hand $\alpha/\lambda^{i_0}=c_{i_0}+\lambda\sum_{i>i_0}c_i\lambda^{i-i_0-1}\in c_{i_0}+\lambda\mathcal O_K$, the bracket lying in $R\subseteq\mathcal O_K$. Hence $c_{i_0}\in\mathbb Z\cap\lambda\mathcal O_K=p\mathbb Z$ by step 3.2, and subtracting $c_{i_0}\lambda^{i_0}\in pR\subseteq p\mathcal O_K$ from $\alpha$ leaves $\sum_{i>i_0}c_i\lambda^{i}\in p\mathcal O_K\cap R$ for the next index. Thus all coefficients are multiples of $p$ and $\alpha\in pR$. [step 2.1, step 3.2]

4.2 Differentiating the identity $t^{p^{a}}-1=(t^{p^{a-1}}-1)\Phi(t)$ of [F1] gives $\Phi'(t)(t^{p^{a-1}}-1)+\Phi(t)p^{a-1}t^{p^{a-1}-1}=p^{a}t^{p^{a}-1}$, and evaluating at $t=\zeta$, where $\Phi(\zeta)=0$ and $\zeta^{p^{a}}=1$, yields $\Phi'(\zeta)=p^{a}\zeta^{p^{a}-1}/(\zeta^{p^{a-1}}-1)$. Taking norms with the product formula of [F5] and using multiplicativity of the norm together with step 3.1 at $s=a-1$ and $N_{K/\mathbb Q}(\zeta)=\pm1$ from step 2.2 gives $N_{K/\mathbb Q}(\Phi'(\zeta))=(p^{a})^{e}N_{K/\mathbb Q}(\zeta)^{p^{a}-1}/N_{K/\mathbb Q}(\zeta^{p^{a-1}}-1)=\pm p^{\,ae-p^{a-1}}=\pm p^{\,p^{a-1}(a(p-1)-1)}$, so [F6] gives $\operatorname{disc}(R)=\pm p^{N}$ with $N:=p^{a-1}(a(p-1)-1)$. [F1, F5, F6, step 2.2, step 3.1]

5.1 Since $\operatorname{disc}(R)=m^{2}d_K$ by [F6] and both $\operatorname{disc}(R)$ and $d_K$ are nonzero integers, $m^{2}$ divides $\operatorname{disc}(R)=\pm p^{N}$ in $\mathbb Z$, so the positive index is $m=p^{\nu}$ for some integer $\nu\ge0$. [F6, step 4.2]

5.2 $\mathcal O_K\cap p^{-1}R=R$: if $\beta\in\mathcal O_K$ and $p\beta\in R$, then $p\beta\in p\mathcal O_K\cap R=pR$ by step 4.1, say $p\beta=p\rho$ with $\rho\in R$, and cancelling $p$ in the domain $K$ gives $\beta=\rho\in R$; the reverse inclusion is trivial. [step 4.1]

6.1 By induction on $j\ge0$ one has $\mathcal O_K\cap p^{-j}R=R$: the case $j=0$ is trivial and the case $j=1$ is step 5.2; if $j\ge1$ and $x\in\mathcal O_K$ satisfies $p^{j}x\in R$, then $p^{j-1}(px)\in R$ with $px\in\mathcal O_K$, so the induction hypothesis gives $px\in R$, and then step 5.2 gives $x\in R$. [step 5.2]

7.1 By step 5.1 write the finite index as $m=p^{\nu}$ with $\nu\ge0$; then $m\mathcal O_K=p^{\nu}\mathcal O_K\subseteq R$ by step 1.1, so for any $x\in\mathcal O_K$ we get $p^{\nu}x\in R$ and step 6.1 with $j=\nu$ gives $x\in R$. Hence $\mathcal O_K=R=\mathbb Z[\zeta]$, and the equality $p=u\lambda^{e}$ with $u\in R^{\times}$ from step 2.1 is an equality of principal ideals $(p)=(\lambda)^{e}$ in $\mathcal O_K$; in particular the power basis $1,\zeta,\dots,\zeta^{e-1}$ is an integral basis of $\mathcal O_K$ whose discriminant, by step 4.2, equals $\pm p^{\,p^{a-1}(a(p-1)-1)}$. For $p^{a}=2$ one has $e=1$, $\lambda=2$, $K=\mathbb Q$ and exponent $0$, in agreement with the general computation. [step 1.1, step 2.1, step 4.2, step 5.1, step 6.1] ∎

## Remarks

- **Both halves of the index argument are needed.** The order-index formula
  alone gives only that the index $m$ is a power of $p$; the descent through the
  coefficients of $\lambda=1-\zeta$ in steps 4.1 and 5.2 is what forces
  $m=1$. The unit identity $p=u\lambda^{e}$ of step 2.1 is used in both places,
  through $\lambda^{e}\mathcal O_K=p\mathcal O_K$.
- **The boundary case $p^{a}=2$** has $K=\mathbb Q$, $\lambda=2$ and
  discriminant $1=2^{0}$; the formulas $\Phi_{2}(t)=t+1$ and
  $\zeta^{p^{a-1}}-1=\zeta-1=-2$ are consistent with the general computation in
  step 4.2, whose exponent is $0$ there.
