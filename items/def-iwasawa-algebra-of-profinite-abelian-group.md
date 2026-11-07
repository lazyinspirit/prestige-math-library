---
id: def-iwasawa-algebra-of-profinite-abelian-group
kind: definition
title: Iwasawa algebra of a profinite abelian group
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-p-adic-integers-as-compatible-residue-classes
- def-profinite-group-by-inverse-limit
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions
    url: https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf
    locator: §3.3, printed pp. 121–123
verification: {}
---

## Definition

Let $p$ be prime and $G$ a profinite abelian group. Its **Iwasawa algebra over $\mathbb Z_p$** is the completed group algebra
$$\Lambda(G):=\mathbb Z_p[[G]]:=\varprojlim_{U\triangleleft_o G}\mathbb Z_p[G/U],$$
where $U$ ranges over open subgroups and the transition maps are the natural quotient maps. Multiplication is induced by multiplication in the finite group rings. If $G\cong\mathbb Z_p$ with topological generator $\gamma$, the map $\gamma\mapsto1+T$ identifies $\Lambda(G)$ with $\mathbb Z_p\llbracket T\rrbracket$.

## Definition references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, §3.3, pp. 121–123](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

## Facts & Assumptions

**Given:** A prime $p$ and a profinite abelian group $G$.

[F1] The coefficient ring $\mathbb Z_p$ is a complete inverse limit of finite residue rings. [[def-p-adic-integers-as-compatible-residue-classes]]

[F2] Open normal subgroups form an inverse system of finite quotients for a profinite group. [[def-profinite-group-by-inverse-limit]]

## Proof

1.1 Each quotient map between finite group rings is a ring homomorphism. Compatible coordinates therefore form a ring under componentwise operations. For $G\cong\mathbb Z_p$, every open subgroup contains $p^n\mathbb Z_p$ for some $n$, since these residue kernels are a neighborhood basis; these cyclic quotients are cofinal. Put $A=\mathbb Z_p[T]$ and $f_n=(1+T)^{p^n}-1$. Sending the chosen generator to $1+T$ identifies $\mathbb Z_p[G/p^nG]$ with $A/(f_n)$: the basis $1,(1+T),\ldots,(1+T)^{p^n-1}$ is related to $1,T,\ldots,T^{p^n-1}$ by a triangular integral matrix with diagonal entries $1$. [F1, F2, given, algebra]

2.1 Write $J=(p,T)$ and $I_{m,n}=(p^m,f_n)$ in $A$. These two systems of ideals are cofinal. Indeed, for fixed $k$, take $m\ge k$ and then $n$ large. For $1\le j<k$, the identity $j\binom{p^n}{j}=p^n\binom{p^n-1}{j-1}$ shows that the coefficient of $T^j$ in $f_n$ is divisible by $p^{n-v_p(j)}$; choose $n$ so this is at least $p^{k-j}$ for every such $j$. Terms of degree at least $k$ already lie in $J^k$, so $I_{m,n}\subseteq J^k$. Conversely, modulo $f_n$, the identity $f_n\equiv T^{p^n}\pmod p$ gives $T^{p^n}\in p(A/(f_n))$. Every monomial of total $(p,T)$-degree $p^n$ either has a factor $p$ or is $T^{p^n}$; thus $J^{p^n}\subseteq(p,f_n)$ and $J^{mp^n}\subseteq(p^m,f_n)=I_{m,n}$. Both the coefficient-modulus and cyclic-quotient directions have been treated. [F1, step 1.1, algebra]

3.1 Since $f_n$ is monic, $A/(f_n)$ is finite free over $\mathbb Z_p$ and is the inverse limit of $A/(p^m,f_n)$ over $m$, by applying [F1] to its finitely many coefficients. Compatibility in $m$ and $n$ commutes: in either order it is exactly a compatible tuple indexed by pairs $(m,n)$. Hence the ring of step 1.1 is $\varprojlim_{m,n}A/I_{m,n}$. Step 2.1 identifies this with $\varprojlim_k A/J^k$. In the latter limit, the coefficient of $T^j$ modulo $J^k$ is specified modulo $p^{k-j}$ for $j<k$; compatible such data are precisely arbitrary coefficient sequences in $\mathbb Z_p$, with the formal-series operations. This identifies the limit with $\mathbb Z_p\llbracket T\rrbracket$, topologized by $(p,T)$, and sends $\gamma$ to $1+T$. The constructions use canonical residue compatibility and no choice of infinitely many representatives. [F1, step 1.1, step 2.1, algebra] ∎
