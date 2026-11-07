---
id: lem-regular-variable-specialization-of-square-presentation-has-no-invariants
kind: lemma
title: Regular-variable specialization of a square presentation has no invariants
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - thm-right-exactness-of-tensor-products
  - thm-determinant-multiplicative
  - thm-adjugate-identity-over-a-commutative-ring
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Burns, Alexandre Daoud, and Dingli Liang, On Non-Noetherian Iwasawa Theory
      url: https://arxiv.org/pdf/2401.02946
      locator: Proposition3.4(i), printed pp.13–14; direct regular-variable square-presentation specialization argument
---

## Statement

Let $B$ be a commutative unital ring, let $x\in B$ be a non-zero-divisor, let $d\ge0$, and let $M$ have a square presentation
$$B^d\xrightarrow{H}B^d\longrightarrow M\longrightarrow0.$$
Put $C=B/xB$. If $C\ne0$, assume that $(M/xM)\otimes_C Q(C)=0$, where $Q(C)$ is localization at all non-zero-divisors of $C$. Then multiplication by $x$ on $M$ is injective:
$$M[x]:=\ker(x:M\to M)=0.$$
The same conclusion holds when $C=0$, without a torsion hypothesis. In particular this annihilator module, viewed as a $C$-module, has zero localization at every prime, so is pseudo-null whenever pseudo-nullness means vanishing at primes of height at most one. No Noetherian, domain or semisimplicity assumption is required.

## Facts & Assumptions

**Given:** Exactly the ring, regular element, finite square presentation and specialized torsion hypothesis in the Statement. All selections below are finite; no choice axiom is added.

[F1] Tensor products are right exact. [[thm-right-exactness-of-tensor-products]]

[F2] Determinants of square matrices over a commutative ring are multiplicative. [[thm-determinant-multiplicative]]

[F3] The adjugate identity is $H\operatorname{adj}(H)=\operatorname{adj}(H)H=\det(H)I$. [[thm-adjugate-identity-over-a-commutative-ring]]

## Proof

**Proof technique:** adjugate injectivity after specialization, followed by cancellation of the regular variable in the free presentation.

1.1 If $d=0$, the presentation gives $M=0$. If $C=0$, then $xB=B$, so $x$ is a unit and acts invertibly on every module. These cases give the conclusion. Hence suppose $d\ge1$ and $C\ne0$. Reduction modulo $x$ identifies $M/xM$ with $\operatorname{coker}(\overline H:C^d\to C^d)$: both are the quotient of $B^d$ by $H(B^d)+xB^d$. By [F1] and the torsion hypothesis, $\overline H$ becomes a surjection on $Q(C)^d$. Choose preimages of its finitely many standard basis vectors; their columns give a right inverse matrix $D$. [F1, given, construct, algebra]

1.2 From $\overline H D=I$, [F2] gives $\det(\overline H)\det(D)=1$ in $Q(C)$. The map $C\to Q(C)$ is injective: if $c/1=0$, some regular element of $C$ kills $c$, so $c=0$. Thus if $\det(\overline H)c=0$ in $C$, multiplying in $Q(C)$ by its inverse forces $c=0$. The determinant is therefore a non-zero-divisor in $C$. By [F3], $\overline H w=0$ gives $\det(\overline H)w=0$ coordinatewise and hence $w=0$. This proves injectivity of the specialized matrix without assuming that $Q(C)$ is a field or semisimple. [F2, F3, step 1.1, algebra]

2.1 Let $m\in M$ satisfy $xm=0$, and lift it to $v\in B^d$. There is $w\in B^d$ with $xv=Hw$. Reducing modulo $x$ gives $\overline H\,\overline w=0$, so $\overline w=0$ by step 1.2. Write $w=xu$. Then $x(v-Hu)=0$ in the free module $B^d$. The regularity of $x$ makes it injective on that free module, giving $v=Hu$ and $m=0$. The zero module has zero localization at every prime of $C$, proving the final pseudo-null assertion as well. This is an assertion about annihilators, not coinvariant quotients. [given, step 1.1, step 1.2, algebra] ∎

## Relation to the source specialization

For $B=A_{n+1}=A_n[\![X_{n+1}]\!]$, multiplication by $x=X_{n+1}$ is regular by coefficient shifting. Whenever the module has the required actual square presentation and its $A_n$-specialization is torsion, the proof supplies the annihilator conclusion used in Burns–Daoud–Liang's pseudo-null specialization. It does not construct the Weil–étale square presentation or the class-group injection in that theorem.
