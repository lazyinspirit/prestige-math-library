---
id: "lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage"
kind: "lemma"
title: "A comparison isomorphism propagates over one skeleton stage"
deps: ["def-coefficient-normalized-morphism-of-ordinary-homology-theories", "lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair", "thm-five-lemma-for-a-morphism-of-long-exact-sequences"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 15§2, skeletal exactness pp.119–120"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "15§2, skeletal exactness pp.119–120"
    - title: "Miller, Algebraic Topology I lecture notes, Proposition 9.6, opening p.22"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf"
      locator: "Proposition 9.6, opening p.22"
status: published
origin: "pipeline"
proof_strategy: "Apply the five lemma to five consecutive terms in the commuting pair LES. This propagates invertibility of constructed maps; it does not construct a natural transformation from an abstract coefficient isomorphism."
---

## Statement

Let $\eta:h\to k$ be an existing morphism of ordinary theories, natural on CW pairs and commuting with connecting maps. For a CW skeleton stage $F_{r-1}\subset F_r$, if $\eta_q(F_{r-1})$ and $\eta_q(F_r,F_{r-1})$ are isomorphisms for every $q$, then $\eta_q(F_r)$ is an isomorphism for every $q$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For ordinary theories $h,k$ as in def-unreduced-homology-theory-on-cw-pairs, a **morphism** $\eta:h\to k$ consists of homomorphisms $\eta_n(X,A):h_n(X,A)\to k_n(X,A)$, natural for all maps of CW pairs and all $n\in\mathbb Z$, satisfying $\partial^k\eta_n=\eta_{n-1}\partial^h$. For a specified homomorphism $u:h_0(*)\to k_0(*)$, the morphism is **coefficient-normalized by $u$** if $\eta_0(*)=u$. A comparison equivalence has every component invertible and is normalized by a specified coefficient isomorphism. Neither the existence nor uniqueness of such an extension is part of this definition. ([[def-coefficient-normalized-morphism-of-ordinary-homology-theories]])

[F2] For a CW pair $(X,A)$ and an ordinary theory $h$ with coefficient $G$, put $F_{-1}=A$ and $F_r=A\cup X^r$ for $r\ge0$. Set $$C_r^h(X,A)=h_r(F_r,F_{r-1})\quad(r\ge0),\qquad C_r^h=0\quad(r<0).$$ Each $C_r^h$ is the direct sum of copies of $G$ indexed by the relative $r$-cells. Define $d_0=0$ and for $r\ge1$ let $d_r$ be the triple boundary to $h_{r-1}(F_{r-1},A)$ followed by its map to $h_{r-1}(F_{r-1},F_{r-2})$. Then $d_{r-1}d_r=0$, naturally for cellular maps of CW pairs. ([[lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair]])

[F3] Let $$\cdots \to A_{n-1} \to A_n \to A_{n+1} \to A_{n+2} \to A_{n+3} \to \cdots$$ and $$\cdots \to B_{n-1} \to B_n \to B_{n+1} \to B_{n+2} \to B_{n+3} \to \cdots$$ be long exact sequences in an abelian category, together with a morphism of these sequences. If the four comparison maps at $A_{n-1},A_n,A_{n+2},A_{n+3}$ are isomorphisms, then the comparison map $A_{n+1} \to B_{n+1}$ is an isomorphism. ([[thm-five-lemma-for-a-morphism-of-long-exact-sequences]])

## Proof

1.1 F1 means that $\eta$ gives a commuting morphism of the pair long exact sequences. The skeletal pair of F2 has the five consecutive terms $h_{q+1}(F_r,F_{r-1})\to h_q(F_{r-1})\to h_q(F_r)\to h_q(F_r,F_{r-1})\to h_{q-1}(F_{r-1})$, and the analogous row for $k$. [F1, F2]

2.1 The four comparison homomorphisms surrounding the middle term are isomorphisms by the stated hypotheses. Apply F3 to these five terms to conclude that the already specified middle homomorphism $\eta_q(F_r)$ is an isomorphism. Since $q$ was arbitrary this proves the result in all degrees, even at the empty bottom skeleton. This argument propagates invertibility; it does not construct $\eta$. [F3, step 1.1, given] ∎
