---
id: lem-principal-boundary-chain-evaluation-over-division-fractions
kind: lemma
title: Degree-one evaluation for a principal degree-zero boundary ideal
status: draft
origin: pipeline
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Cochran, Orr and Teichner, Knot concordance, Whitney towers and
        L2-signatures, degree-one evaluation in the proof of Theorem 2.13
      url: https://arxiv.org/pdf/math/9908117
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
---

## Statement

Let $R$ be an associative unital ring with $1\ne0$ and no zero divisors, embedded as a unital subring in a division ring $K$, put $N=K/R$ as a right $R$-module, and let $C_*$ be a right $R$-module chain complex concentrated in nonnegative degrees. Supply an identification $C_0=R$. If the right ideal $\operatorname{im}(d_1)$ is principal, restriction to cycles gives an isomorphism
$$H^1(\operatorname{Hom}_R(C_*,N))\xrightarrow{\sim}\operatorname{Hom}_R(H_1(C_*),N).$$
Neither a principal ideal domain hypothesis on $R$ nor a choice principle is required.

## Facts & Assumptions

**Given:** The specified complex and division-ring embedding. Put $Z_1=\ker d_1$, $B_1=\operatorname{im}d_2$, and $B_0=\operatorname{im}d_1=aR$ for one generator $a$.

## Proof

1.1 A degree-one cocycle is a map $f:C_1\to N$ vanishing on $B_1$, and a coboundary is a map of the form $g d_1$. Restriction of a cocycle to $Z_1$ descends to $Z_1/B_1=H_1$; coboundaries restrict to zero. Thus restriction defines the stated map. If $a=0$, then $Z_1=C_1$ and all coboundaries vanish, so the map is already an isomorphism. [given, construct, algebra]

2.1 Suppose $a\ne0$. Choose $z\in C_1$ with $d_1z=a$. Because $R$ has no zero divisors, $aR\to C_1$, $ar\mapsto zr$, is well-defined and a section of $d_1$. Hence $C_1=Z_1\oplus zR$. Any map $H_1\to N$ pulls back to a map on $Z_1$ vanishing on $B_1$ and extends by zero on $zR$ to a degree-one cocycle. This proves surjectivity. [step 1.1, given, construct, algebra]

3.1 If a degree-one cocycle restricts to zero on $Z_1$, it factors as $v d_1$ for a right-linear map $v:aR\to N$. Let $v(a)=q+R$ with $q\in K$ and put $u=q a^{-1}+R$. Then $ua=v(a)$ in $N$. The right-linear map $g:R\to N$, $g(r)=ur$, extends $v$, since $g(ar)=v(a)r=v(ar)$. The cocycle is consequently the coboundary $g d_1$. This proves injectivity and the result. All selections comprise one ideal generator, one lift and one fraction representative. [step 1.1, given, construct, algebra] ∎
