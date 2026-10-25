---
id: lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units
kind: lemma
title: "The Hecke generators satisfy the Artin relations and are units"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps: [def-generic-type-a-hecke-algebra, def-markov-trace-on-the-type-a-hecke-tower,
       def-braid-group-by-the-artin-presentation, thm-von-dyck,
       lem-the-markov-trace-of-an-inverse-hecke-generator, def-group-homomorphism,
       def-braid-group-by-the-artin-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.3 printed pp. 47-48 (the map f: B_n to H_n(t) defined on generators and the Hecke relations)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Let $H(n)$ be the Hecke tower over $\Lambda=\mathbb Z[v^{\pm1},z]$ of
[[def-markov-trace-on-the-type-a-hecke-tower]]. Then: (1) the elements
$T_1,\dots,T_{n-1}$ are units of $H(n)$ with
$T_i^{-1}=v^{-1}T_i+(v^{-1}-1)$; (2) the assignment $\sigma_i\mapsto T_i$
descends to a group homomorphism
$$\pi_n:B_n\longrightarrow H(n)^{\times},\qquad \pi_n(\sigma_i)=T_i,$$
where $H(n)^{\times}$ is the group of units of $H(n)$; (3) for every Artin word
$\beta=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_k}^{\varepsilon_k}$ one has
$\pi_n(\beta)=T_{i_1}^{\varepsilon_1}\cdots T_{i_k}^{\varepsilon_k}$, and
$\pi_{n+1}(\iota_n^{\mathrm{Br}}(\beta))=\iota_n(\pi_n(\beta))$ for all
$\beta\in B_n$ under the standard inclusion of braid groups $B_n\to B_{n+1}$.

## Facts & Assumptions

**Given:** The Hecke tower over $\Lambda=\mathbb Z[v^{\pm1},z]$ and an integer
$n\ge1$. No choice principle is used.

[F1] $H(n)$ is the $\Lambda$-algebra with generators $T_1,\dots,T_{n-1}$ and
the relations $T_iT_{i+1}T_i=T_{i+1}T_iT_{i+1}$ for $1\le i\le n-2$ and
$T_iT_j=T_jT_i$ for $|i-j|>1$ ([[def-generic-type-a-hecke-algebra]],
[[def-markov-trace-on-the-type-a-hecke-tower]]).

[F2] Each generator $T_i$ is a unit of $H(n)$ with
$T_i^{-1}=v^{-1}T_i+(v^{-1}-1)$
([[lem-the-markov-trace-of-an-inverse-hecke-generator]]).

[F3] $B_n=\langle\sigma_1,\dots,\sigma_{n-1}\mid\text{Artin relators}\rangle$
with the braid and far-commutation relations, $B_0,B_1$ trivial
([[def-braid-group-by-the-artin-presentation]]).

[F4] Von Dyck: a function from the generators of a presented group to a group
$G$ that sends every defining relator to the identity extends to a unique group
homomorphism ([[thm-von-dyck]]); a group homomorphism satisfies
$\varphi(x_1\cdots x_k)=\varphi(x_1)\cdots\varphi(x_k)$ and
$\varphi(x^{-1})=\varphi(x)^{-1}$ ([[def-group-homomorphism]]).

## Proof

1.1 **The assignment kills the relators.** Define $u(\sigma_i):=T_i\in H(n)^\times$, using [F2] to regard each $T_i$ as an element of the unit group. At the braid relator $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ both sides are sent to the equal elements $T_iT_{i+1}T_i=T_{i+1}T_iT_{i+1}$ of [F1]; at a far-commutation relator both sides are sent to $T_iT_j=T_jT_i$ by [F1]. Hence every defining relator of [F3] is sent to the identity and [F4] applies, giving a unique group homomorphism $\pi_n:B_n\to H(n)^\times$ with $\pi_n(\sigma_i)=T_i$. For $n=1$ the domain $B_1$ is trivial and its unique homomorphism into $H(1)^\times$ sends the identity to the unit of $H(1)$. [F2, F3, F4]

2.1 **Words and compatibility.** For an Artin word $\beta=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_k}^{\varepsilon_k}$, [F4] gives $\pi_n(\beta)=\pi_n(\sigma_{i_1})^{\varepsilon_1}\cdots\pi_n(\sigma_{i_k})^{\varepsilon_k}=T_{i_1}^{\varepsilon_1}\cdots T_{i_k}^{\varepsilon_k}$, since negative exponents are the inverses from step 1.1; this also shows that the value does not depend on the chosen word, being the value of the homomorphism $\pi_n$ at the element $\beta$. The standard inclusion $B_n\to B_{n+1}$ sends each Artin generator $\sigma_i$ with $i\le n-1$ to the generator with the same name ([[def-braid-group-by-the-artin-presentation]]), and $\iota_n:H(n)\to H(n+1)$ sends $T_i$ to $T_i$ ([[def-markov-trace-on-the-type-a-hecke-tower]]); hence $\pi_{n+1}(\iota_n^{\mathrm{Br}}(\beta))$ and $\iota_n(\pi_n(\beta))$ are both the product of the $T_i^{\varepsilon_i}$ computed in $H(n+1)$, and they agree. [F3, F4, step 1.1] ∎ 