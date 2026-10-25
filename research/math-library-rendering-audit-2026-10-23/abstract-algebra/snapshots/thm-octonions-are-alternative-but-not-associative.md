---
id: thm-octonions-are-alternative-but-not-associative
kind: theorem
title: The Cayley–Dickson octonions are alternative but not associative
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 2
deps: [def-alternative-algebra, def-octonion-algebra-by-cayley-dickson, def-quaternions, lem-octonion-conjugation-is-an-anti-involution, thm-quaternions-form-a-division-ring]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §8"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "Holger P. Petersson, Albert Algebras, §3.5"
      url: https://www.fieldsinstitute.ca/programs/scientific/11-12/exceptional/Alb.-alg.-Ottawa-2012-Vii-new.pdf
    - title: "John C. Baez, The Octonions, §2.2"
      url: https://arxiv.org/pdf/math/0105155v4
---

## Statement

For $\mathbb O$ as in [[def-octonion-algebra-by-cayley-dickson]],
$1_{\mathbb O}=(1,0)$ is a two-sided unit, both alternative laws
$x(xy)=x^2y$ and $(yx)x=yx^2$ hold, and multiplication is not associative:
$(ij)\ell=k\ell$ but $i(j\ell)=-k\ell$. Thus $\mathbb O$ is a unital
alternative nonassociative real algebra.

## Facts & Assumptions

**Given:** $x=(a,b)$ and $y=(c,d)$ in the pair model for $\mathbb O$.

[F1] The Cayley–Dickson product is $(a,b)(c,d)=(ac-\bar d b,da+b\bar c)$ ([[def-octonion-algebra-by-cayley-dickson]]).

[F2] Quaternion multiplication is associative and $a\bar a=\bar a a=\widehat{N(a)}$, with $N(a)\in\mathbb R$ ([[thm-quaternions-form-a-division-ring]]); embedded real scalars commute with quaternions ([[def-quaternions]]).

[F3] Octonion conjugation is an anti-involution, and for $a\in\mathbb H$, $a+\bar a=\widehat{2a_0}$ ([[lem-octonion-conjugation-is-an-anti-involution]]).

[F4] An alternative algebra satisfies $x(xy)=x^2y$ and $(yx)x=yx^2$ ([[def-alternative-algebra]]).

[F5] In quaternion coordinates the product has coordinates that are sums of signed terms $a_pb_q$, and conjugation is $(a_0,a_1,a_2,a_3)\mapsto(a_0,-a_1,-a_2,-a_3)$ ([[def-quaternions]]).

## Proof
1.1 Each quaternion product coordinate is a sum of signed terms $a_pb_q$, so the quaternion product is real-bilinear; the coordinate sign-change formula in [F5] makes conjugation real-linear. Therefore every term in the pair formula [F1] is bilinear in $x=(a,b)$ and $y=(c,d)$, and the octonion product is real-bilinear. The quaternion coordinate formula also gives $\hat1 a=a\hat1=a$ and $\bar0=0$, so [F1] gives $(1,0)(a,b)=(a,b)=(a,b)(1,0)$. Let $t:=2a_0\in\mathbb R$. By [F2]–[F3], $a+\bar a=\hat t$ is central in $\mathbb H$ and $b\bar b=\bar b b=\widehat{N(b)}$. Squaring $x$ in [F1] gives $x^2=(a^2-\widehat{N(b)},\;\hat t b)$. Here the second coordinate is $ba+b\bar a=b(a+\bar a)=\hat t b$. [given, F1, F2, F3, F5, algebra]

1.2 The quaternion table in [[def-quaternions]] gives $ij=k$ and $ji=-k$. Formula [F1] gives $(ij)\ell=(0,k)=k\ell$ and $i(j\ell)=(0,ji)=(0,-k)=-k\ell$. The pair $(0,k)$ is nonzero because its quaternion coordinate $k=(0,0,0,1)$ is nonzero. Thus the two bracketings differ, so multiplication is not associative. [given, F1, algebra]

2.1 Substituting $xy=(ac-\bar d b,da+b\bar c)$ into [F1], expanding with associativity in [F2], and grouping $a+\bar a=\hat t$ gives $x(xy)=(a^2c-\widehat{N(b)}c-\hat t\bar d b,\; da^2-\widehat{N(b)}d+\hat t b\bar c).$ On the other hand, [F1] and step 1.1 give $x^2y=((a^2-\widehat{N(b)})c-\bar d(\hat t b),\;d(a^2-\widehat{N(b)})+(\hat t b)\bar c),$ which is the same pair because real scalars are central. Thus $x(xy)=x^2y$. [given, F1, F2, step 1.1, algebra]

3.1 By [F3] and the left alternative law just proved, $\overline{(yx)x}=\bar x\,\overline{yx}=\bar x(\bar x\bar y)=(\bar x^2)\bar y=\overline{y(x^2)}.$ The third equality uses the left alternative law on $\bar x,\bar y$; the fourth uses the anti-involution identities in [F3]. Since conjugation is an involution, it is injective, hence $(yx)x=y(x^2)$. [given, F3, step 2.1, algebra]

4.1 The product is real-bilinear by step 1.1, and steps 2.1 and 3.1 are exactly the two laws in [F4]; step 1.2 proves nonassociativity. Thus this is a unital alternative nonassociative real algebra. [step 1.1, step 2.1, step 3.1, step 1.2, F4] ∎
