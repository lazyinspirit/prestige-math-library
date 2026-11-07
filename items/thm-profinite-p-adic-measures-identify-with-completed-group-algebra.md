---
id: thm-profinite-p-adic-measures-identify-with-completed-group-algebra
kind: theorem
title: "Profinite p-adic measures are the completed group algebra"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-iwasawa-algebra-of-profinite-abelian-group
  - def-p-adic-integers-as-compatible-residue-classes
  - def-p-adic-measure-on-profinite-abelian-group
  - def-profinite-group-by-inverse-limit
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions"
      url: "https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf"
      locator: "§§3.2–3.3, printed pp. 119–123"
    - title: "J. Sharifi, Iwasawa Theory lecture notes"
      url: "https://www.math.ucla.edu/~sharifi/iwasawa.pdf"
      locator: "§2.3, printed pp. 47–51"
verification: {}
---

## Statement

Let $G$ be a profinite abelian group. For each open subgroup $U$, write an element of the finite group ring as $a_U=\sum_{gU\in G/U}a_{gU}[gU]$. The map that sends a compatible family $(a_U)_U\in\varprojlim_U\mathbb Z_p[G/U]=\Lambda(G)$ to the measure whose value on each coset $gU$ is $a_{gU}$ is a bijection from $\Lambda(G)$ to the bounded $\mathbb Z_p$-valued measures on $G$. Under this bijection, convolution defined by multiplying the finite-quotient distributions agrees with multiplication in $\Lambda(G)$.

## Statement references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, §§3.2–3.3, pp. 119–123](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

[J. Sharifi, *Iwasawa Theory*, §2.3, pp. 47–51](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A profinite abelian group $G$ and the inverse system of its finite quotients.

[F1] The p-adic integers are complete and separated for the $p$-adic metric. [[def-p-adic-integers-as-compatible-residue-classes]]

[F2] Cosets of open subgroups form a clopen basis for a profinite group. [[def-profinite-group-by-inverse-limit]]

[F3] A bounded measure is a continuous $\mathbb Z_p$-linear functional on $C(G,\mathbb Z_p)$, and its value on a clopen set is its value on that set's indicator function. [[def-p-adic-measure-on-profinite-abelian-group]]

[F4] The completed group algebra is the inverse limit of the finite group rings, with transition maps induced by quotienting the groups. [[def-iwasawa-algebra-of-profinite-abelian-group]]

## Proof

**Given:** The data in the Statement.

1.1 Let $(a_U)_U$ be a compatible family, and write $a_U=\sum_{gU}a_{gU}[gU]$. Compatibility means $a_{gU}=\sum_{hV\mapsto gU}a_{hV}$ whenever $V\subseteq U$. For a function constant on the cosets of $U$, define $\mu(f)=\sum_{gU}f(gU)a_{gU}$. The compatibility identity makes this independent of the subgroup through which $f$ factors. Since each coefficient lies in $\mathbb Z_p$, the ultrametric inequality gives $|\mu(f)|_p\le\|f\|_\infty$.[F1, F4, given, algebra]

1.2 For any $f\in C(G,\mathbb Z_p)$ and integer $n\ge1$, its reduction modulo $p^n$ is continuous to the finite discrete ring $\mathbb Z/p^n\mathbb Z$. Its fibers are clopen and, by [F2], are unions of cosets of a common open subgroup after taking a finite common refinement. Choosing the canonical representatives $0,\ldots,p^n-1$ gives a locally constant function $f_n$ with $\|f-f_n\|_\infty\le p^{-n}$. Thus locally constant functions are dense. By [F1], the bounded functional from step 1.1 extends uniquely to a continuous $\mathbb Z_p$-linear functional on $C(G,\mathbb Z_p)$, hence to a bounded measure by [F3].[F1, F2, F3, step 1.1, algebra]

2.1 Conversely, let $\mu$ be a bounded measure. For every open $U$, set $a_U=\sum_{gU}\mu(gU)[gU]$, where $\mu(gU)=\mu(1_{gU})$. If $V\subseteq U$, the cosets of $V$ partition each coset of $U$, so finite additivity gives $\mu(gU)=\sum_{hV\mapsto gU}\mu(hV)$. Hence $(a_U)_U$ is compatible and defines an element of $\Lambda(G)$ by [F4].[F3, F4, given, algebra]

2.2 For each locally constant $f$, the construction in step 1.1 recovers $\mu(f)$ from the finite partition on which $f$ is constant. Density from step 1.2 and continuity then give the same equality for every continuous $f$. The two constructions are therefore inverse, proving the bijection. [F1, F3, step 1.1, step 1.2, step 2.1, algebra]

3.1 For compatible finite-quotient distributions $(a_U)_U$ and $(b_U)_U$, their convolution has distribution $a_Ub_U$ at each quotient $G/U$. The transition maps are ring homomorphisms, so $(a_Ub_U)_U$ is compatible, and componentwise multiplication is exactly multiplication in the inverse-limit ring [F4]. Thus the bijection preserves convolution. [F4, step 2.1, algebra] ∎
