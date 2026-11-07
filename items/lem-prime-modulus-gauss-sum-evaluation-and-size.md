---
dependency_level: 1
id: lem-prime-modulus-gauss-sum-evaluation-and-size
kind: lemma
title: "Prime-modulus Gauss sums and their exact size"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-dirichlet-character-modulo-q, def-exponential-character-e, thm-complex-exponential-addition-and-real-extension, thm-kernel-and-fibres-of-complex-exponential]
justified_by: []
sources:
  references:
    - title: "Knightly-Li, Kuznetsov trace formula, sections 4.2 and 7-9; local reconstruction with stated scope"
      url: https://arxiv.org/pdf/1202.0189v1
---

## Statement

Let $p$ be prime, extend a multiplicative character $\chi$ of $\mathbb F_p^\times$ by $\chi(0)=0$, put $e_p(x)=\exp(2\pi ix/p)$, and define $\tau_\chi(a)=\sum_{x\in\mathbb F_p}\chi(x)e_p(ax)$. If $\chi$ is nonprincipal, then

$$\tau_\chi(0)=0,\qquad \tau_\chi(a)=\overline{\chi(a)}\tau_\chi(1)\quad(a\ne0),\qquad |\tau_\chi(1)|=\sqrt p.$$

For the principal character, $\tau_\chi(0)=p-1$ and $\tau_\chi(a)=-1$ for $a\ne0$. This is a Gauss-sum identity, not a character-weighted Kloosterman Weil bound.

## Statement references

[[def-dirichlet-character-modulo-q]]

[[def-exponential-character-e]]

[Knightly–Li, section 9, Gauss-sum prerequisites](https://arxiv.org/pdf/1202.0189v1)

## Facts & Assumptions

[F1] Characters are multiplicative on the finite unit group. [[def-dirichlet-character-modulo-q]]

[F2] The exponential addition law and its kernel give finite geometric-sum orthogonality. [[def-exponential-character-e]] [[thm-complex-exponential-addition-and-real-extension]] [[thm-kernel-and-fibres-of-complex-exponential]]

## Proof

**Given:** The prime, character and finite sums in the Statement.

1.1 The exponential is well-defined modulo $p$ by F2. Every nonzero residue has finite multiplicative order; applying the character shows its value is a root of unity, so its conjugate is its inverse. If $\chi$ is nonprincipal, choose $u$ with $\chi(u)\ne1$. Multiplication by $u$ permutes the units, so $\sum_x\chi(x)=\chi(u)\sum_x\chi(x)$ and this sum is zero. For $a\ne0$, substitution $y=ax$ gives $\tau_\chi(a)=\chi(a)^{-1}\tau_\chi(1)$. These observations prove the zero and scaling formulas. [F1, F2, given, algebra, choose]

2.1 Expand $|\tau_\chi(1)|^2$ over nonzero $x,y$ and put $x=uy$. Multiplicativity gives $|\tau_\chi(1)|^2=\sum_{u\ne0}\chi(u)\sum_{y\ne0}e_p((u-1)y)$. The inner sum is $p-1$ for $u=1$ and $-1$ otherwise, since the full additive sum is zero for a nonzero frequency by F2. For nonprincipal $\chi$, the result is $(p-1)-\sum_{u\ne1}\chi(u)=p$. For the principal character, its sum at zero is $p-1$ and its nonzero-frequency sum is the full additive sum minus its zero term, hence $-1$. This proves every assertion, including $p=2$ where the nonprincipal clause has no instance. [F1, F2, step 1.1, algebra] ∎ 