---
id: cex-regular-not-smooth-purely-inseparable-point
kind: counterexample
title: "A regular point that is not smooth: a purely inseparable thickening"
status: published
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-rational-function-field-as-a-fraction-field
  - def-algebraic-and-transcendental-elements
  - def-axiom-of-choice
  - def-purely-inseparable-extension
  - def-ring-characteristic
  - thm-frobenius-endomorphism-and-finite-field-automorphism
  - thm-polynomial-ring-over-a-field-is-a-ufd
  - thm-quotient-is-field-iff-ideal-maximal
  - thm-regular-not-smooth-imperfect-field
  - thm-stalk-structure-sheaf-prime-localization
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Varieties, Example 33.12.7 (tag 038S), first example"
      url: "https://stacks.math.columbia.edu/tag/038S"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement refuted

False claim: every regular scheme of finite type over a field is smooth over
that field. Let $p$ be a prime, let $k=\mathbb{F}_p(s)$ be the rational function
field over the field $\mathbb{F}_p=\mathbb{Z}/p$ of $p$ elements, and put
$L=k[t]/(t^p-s)$ with $\alpha=t+(t^p-s)\in L$. Then $s\notin k^p$, the ring $L$
is a field with $\alpha^p=s$ and $L=k[\alpha]$, and the extension $k\subseteq L$
is purely inseparable. The affine $k$-scheme $X=\operatorname{Spec}L$ is of
finite type over $k$ and regular, yet it is not smooth over $k$; base change
along the purely inseparable extension $\operatorname{Spec}L\to\operatorname{Spec}k$
satisfies
$$L\otimes_kL\cong L[u]/(u^p),$$
a Noetherian local ring with unique prime $(u)$, Krull dimension $0$, embedding
dimension $1$ and not regular, so after adjoining the $p$th root $\alpha$ of $s$
the regular point has become a nonregular point.

## Facts & Assumptions

**Given:** A prime $p$, the field $k=\mathbb{F}_p(s)$ of rational functions in one variable over $\mathbb{F}_p=\mathbb{Z}/p$, the ring $L=k[t]/(t^p-s)$ with the class $\alpha$ of $t$, and the Axiom of Choice.

[F1] [[cor-rational-function-field-as-a-fraction-field]] and [[def-ring-characteristic]]: for every field $F$ the rational function field $F(s)=\operatorname{Frac}(F[s])$ is a field whose elements are the fractions $f/g$ with $f,g\in F[s]$ and $g\ne0$, and it contains an embedded copy of $F$; the characteristic of a ring $R$ is the least $n\ge1$ with $n\cdot1_R=0_R$, and is $0$ when no such $n$ exists.

[F2] [[thm-polynomial-ring-over-a-field-is-a-ufd]]: for every field $F$, the polynomial ring $F[s]$ is a unique factorisation domain.

[F3] [[thm-quotient-is-field-iff-ideal-maximal]]: for a commutative ring $R$ and an ideal $M\subseteq R$, the quotient $R/M$ is a field if and only if $M$ is a maximal ideal.

[F4] [[thm-regular-not-smooth-imperfect-field]]: under AC, let $F$ be a field of characteristic $p>0$, let $a\in F\setminus F^p$, and put $L'=F[t]/(t^p-a)$ with the class $\alpha'$ of $t$. Then $L'$ is a field, $F\to L'$ is injective, $(\alpha')^p=a$ and $L'=F[\alpha']$; the affine $F$-scheme $X'=\operatorname{Spec}L'$ is of finite type over $F$ and regular; for every field extension $K/F$ and every $\beta\in K$ with $\beta^p=a$ there is a $K$-algebra isomorphism $L'\otimes_FK\cong K[u]/(u^p)$, where the target is a Noetherian local ring with unique prime $(u)$, Krull dimension $0$ and embedding dimension $1$, and is not regular; consequently $X'\to\operatorname{Spec}F$ is not smooth although $X'$ is regular, the failure being witnessed already by $K=L'$ and $\beta=\alpha'$.

[F5] [[def-purely-inseparable-extension]]: an algebraic extension $K/F$ with $\operatorname{char}F=p>0$ is purely inseparable when for every $\alpha\in K$ there is $n\ge0$ with $\alpha^{p^n}\in F$.

[F6] [[def-algebraic-and-transcendental-elements]]: an element $a$ of an extension $K/F$ is algebraic over $F$ when $f(a)=0$ for some nonzero polynomial $f\in F[x]$, and the extension is algebraic when every element is algebraic.

[F7] [[thm-frobenius-endomorphism-and-finite-field-automorphism]]: for a field $F$ of characteristic $p>0$ the Frobenius map $x\mapsto x^p$ is an injective field endomorphism, so $(x+y)^p=x^p+y^p$ and $(xy)^p=x^py^p$; its $n$-fold iterate is $x\mapsto x^{p^n}$.

[F8] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F9] [[thm-stalk-structure-sheaf-prime-localization]]: for a prime $\mathfrak p\in\operatorname{Spec}A$ there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.




## Counterexample

**Proof technique:** direct.

1.1 The field and its characteristic. By [F1] the field $k=\mathbb{F}_p(s)=\operatorname{Frac}(\mathbb{F}_p[s])$ consists of the fractions $f/g$ with $f,g\in\mathbb{F}_p[s]$, $g\ne0$, and contains an embedded copy of $\mathbb{F}_p=\mathbb{Z}/p$. In $\mathbb{F}_p$ one has $p\cdot1=0$ while $n\cdot1\ne0$ for every integer $n$ with $0<n<p$, since such an $n$ is not a multiple of $p$; a ring embedding preserves natural multiples of the identity, so in $k$ also $p\cdot1_k=0$ and $n\cdot1_k\ne0$ for $0<n<p$. By the definition of characteristic in [F1] this is exactly $\operatorname{char}k=p$, so $k$ is a field of characteristic $p>0$. [F1, given, algebra]

1.2 The element $s$ is not a $p$th power. Suppose $s=(f/g)^p$ with $f,g\in\mathbb{F}_p[s]$ and $g\ne0$; then $sg^p=f^p$ in the polynomial ring $\mathbb{F}_p[s]$, which is a UFD by [F2]. Evaluation at $0$ is a surjective ring homomorphism $\mathbb{F}_p[s]\to\mathbb{F}_p$ with kernel $(s)$, so $\mathbb{F}_p[s]/(s)\cong\mathbb{F}_p$ is a field and $(s)$ is a maximal, hence prime, ideal by [F3]; therefore $s$ is a prime element, and the $s$-adic order $\operatorname{ord}_s$ on nonzero polynomials, which records the largest power of $s$ dividing an element, is additive over products. Comparing orders in $sg^p=f^p$ gives $1+p\operatorname{ord}_s(g)=p\operatorname{ord}_s(f)$, which is impossible because $p\ge2$ does not divide $1$. Hence no element of $k$ has $p$th power $s$, that is, $s\notin k^p$. [F1, F2, F3, algebra]

2.1 The general theorem applies to this pair. The field $k$ has characteristic $p>0$ by step 1.1, and $s\notin k^p$ by step 1.2, so [F4] applies with $F=k$ and $a=s$: the ring $L=k[t]/(t^p-s)$ is a field, the structural map $k\to L$ is injective, $\alpha^p=s$ and $L=k[\alpha]$; the affine $k$-scheme $X=\operatorname{Spec}L$ is of finite type over $k$ and regular; for every field extension $K/k$ and every $\beta\in K$ with $\beta^p=s$ there is a $K$-algebra isomorphism $L\otimes_kK\cong K[u]/(u^p)$, where $K[u]/(u^p)$ is a Noetherian local ring with unique prime $(u)$, Krull dimension $0$ and embedding dimension $1$, and is not regular; and consequently $X\to\operatorname{Spec}k$ is not smooth, although $X$ is regular. The Axiom of Choice is used only here, through [F4], as declared in [F8]. [F4, F8, step 1.1, step 1.2, given]

3.1 Adjoining the $p$th root: the base change at $K=L$. By step 2.1 the element $\alpha\in L$ satisfies $\alpha^p=s$, so the witness clause of [F4] applies with $K=L$ and $\beta=\alpha$ and gives the $L$-algebra isomorphism $L\otimes_kL\cong L[u]/(u^p)$; this is the coordinate ring of the base change $X_L$ of $X$ along $\operatorname{Spec}L\to\operatorname{Spec}k$. The ring $L[u]/(u^p)$ is a Noetherian local ring with unique prime and maximal ideal $(u)$, Krull dimension $0$, embedding dimension $1$, and it is not regular; every element outside $(u)$ is a unit, so its localisation at $(u)$ is the ring itself, and by [F9] that localisation is the local ring of the unique point of $X_L$. Hence that point is nonregular, although its image under $X_L\to X$ is the regular point of $X$. [F4, F9, step 2.1, given, algebra]

3.2 The extension is purely inseparable. Every element of $L=k[\alpha]$ is a $k$-linear combination $z=\sum_{i=0}^{p-1}c_i\alpha^i$ with $c_i\in k$: each power $\alpha^m$ with $m\ge p$ is reduced by $\alpha^m=\alpha^{m-p}\alpha^p=s\,\alpha^{m-p}$. By [F7] the $p$th power map of the field $L$ is additive and multiplicative, so $z^p=\sum_{i=0}^{p-1}c_i^{\,p}\alpha^{ip}=\sum_{i=0}^{p-1}c_i^{\,p}s^{\,i}\in k$, because $\alpha^{ip}=(\alpha^p)^i=s^i$ for $i\ge1$, and $c_i^{\,p}\in k$ and $s^i\in k$ for every $i$. Hence every $z\in L$ is a root of the nonzero polynomial $x^p-z^p$ over $k$, so every element of $L$ is algebraic over $k$ by [F6] and $L/k$ is an algebraic extension; with $\operatorname{char}k=p>0$ from step 1.1 and $z^p\in k$ for every $z$, the definition [F5] shows that $k\subseteq L$ is purely inseparable. [F5, F6, F7, step 1.1, step 2.1, algebra]

4.1 Boundaries and conclusion. The argument includes $p=2$, where $L[u]/(u^2)$ is the dual-numbers ring over $L$, local with Krull dimension $0$ and embedding dimension $1$ and not regular. The hypothesis $s\notin k^p$ is genuinely used: it holds in $\mathbb{F}_p(s)$ by step 1.2, but over $K=L$ the same element satisfies $s=\alpha^p$, and correspondingly $t^p-s=(t-\alpha)^p$ over $K$, so the base change acquires the class $u=t-\alpha$ with $u^p=0$; this is why the regularity detected in $k$ is not stable. No reduction or Frobenius twist is applied: the isomorphism of step 3.1 is an isomorphism of the actual tensor product $L\otimes_kL$ and retains the class $u$. The scheme $X$ is nonempty, since $L$ is a field with $1\ne0$, and has a single point of residue field $L$; the empty-scheme case is therefore absent, while $X$ has Krull dimension zero and embedding dimension zero because its local ring is the field $L$. Its base change in step 3.1 still has dimension zero but has embedding dimension one, and the finite-type hypothesis of [F4] is met by construction. Perfectness of $k$ fails: $s\notin k^p$ exhibits the Frobenius $x\mapsto x^p$ of $k$ as nonsurjective by [F7]. Choice is declared in [F8] and is used only through [F4]; the example exhibits one field, one element and one base change, so no simultaneous selection occurs. [F1, F4, F7, F8, step 1.2, step 2.1, step 3.1, given, algebra] ∎

## Source qualification

Stacks Project Example 33.12.7 (tag 038S), first example, takes
$k=\mathbb F_p(t)$ and observes that $\operatorname{Spec}(k[x]/(x^p-t))$ is a
regular variety over $k$ that is not geometrically reduced. The item above
instantiates the pair's own general result
[[thm-regular-not-smooth-imperfect-field]] at $F=\mathbb F_p(s)$ and $a=s$,
and its only independent obligation is the hypothesis $s\notin
\mathbb F_p(s)^p$, proved in step 1.2 from reduced fractions in the UFD
$\mathbb F_p[s]$; the corresponding claim for $t$ over $\mathbb F_p(t)$ is the
one recorded by the Stacks example. All smoothness, regularity, base-change and
dimension assertions are taken from the statement of
[[thm-regular-not-smooth-imperfect-field]], which is proved in this library
from its own suppliers; the purely inseparable clause is derived here from the
definition [[def-purely-inseparable-extension]]. The dual-number case $p=2$ is
the published computation of [[ex-dual-numbers-not-regular]], which is not used
as a supplier because its statement provenance is ai-generated.
