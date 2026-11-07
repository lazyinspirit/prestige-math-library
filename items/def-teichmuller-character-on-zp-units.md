---
id: def-teichmuller-character-on-zp-units
kind: definition
title: Teichmüller character of the p-adic units
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- cor-unit-group-modulo-prime-is-cyclic
- def-p-adic-integers-as-compatible-residue-classes
- lem-prime-to-p-roots-lift-uniquely-in-a-complete-discrete-valuation-ring
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions
    url: https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf
    locator: §3.2 and Definition 5.15, printed pp. 119–121 and 146–147
verification: {}
---

## Definition

Let $p$ be an odd prime. For $x\in\mathbb Z_p^\times$, reduce $x$ modulo $p$ and let $\omega(x)$ be the unique $(p-1)$st root of unity in $\mathbb Z_p$ that reduces to $x\bmod p$. The map
$$\omega:\mathbb Z_p^\times\longrightarrow\mu_{p-1}(\mathbb Z_p)$$
is the **Teichmüller character**. Put $\langle x\rangle=\omega(x)^{-1}x\in1+p\mathbb Z_p$.

## Definition references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, §3.2 and Definition 5.15, pp. 119–121 and 146–147](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

## Facts & Assumptions

**Given:** An odd prime $p$ and the p-adic unit group.

[F1] $\mathbb Z_p$ is the inverse limit of $\mathbb Z/p^n\mathbb Z$. [[def-p-adic-integers-as-compatible-residue-classes]]

[F2] The residue-field unit group $\mathbb F_p^\times$ is cyclic of order $p-1$. [[cor-unit-group-modulo-prime-is-cyclic]]

[F3] Roots of unity of order prime to $p$ lift uniquely through a complete discrete valuation ring. [[lem-prime-to-p-roots-lift-uniquely-in-a-complete-discrete-valuation-ring]]

## Proof

1.1 The compatible residues in [F1] make $\mathbb Z_p$ complete and separated. A nonzero element has a first nonzero residue, so it is $p^r u$ for a unique $r\ge0$ and an element $u$ with nonzero residue modulo $p$. Such a $u$ is a unit: its inverses modulo $p^n$ are unique and compatible. In a nonzero ideal, an element with least $r$ generates the ideal; thus $\mathbb Z_p$ is a complete DVR with uniformizer $p$. By [F2], every residue class $\bar x\in\mathbb F_p^\times$ satisfies $\bar x^{p-1}=1$. Since $p\nmid p-1$, [F3] gives a unique lift $\omega(x)\in\mathbb Z_p$ with $\omega(x)^{p-1}=1$ and residue $\bar x$.[F1, F2, F3, given]

2.1 Products of the lifts of $\bar x,\bar y$ and the lift of $\bar x\bar y$ have the same residue and are $(p-1)$st roots of unity; uniqueness in [F3] gives $\omega(xy)=\omega(x)\omega(y)$. Also $\omega(x)\equiv x\pmod p$, hence $\langle x\rangle\equiv1\pmod p$. These are precisely the stated character and principal-unit properties.[F1, F3, step 1.1, algebra] ∎
