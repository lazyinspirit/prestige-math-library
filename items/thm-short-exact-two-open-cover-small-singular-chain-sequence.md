---
id: "thm-short-exact-two-open-cover-small-singular-chain-sequence"
kind: "theorem"
title: "Short exact two open cover small singular chain sequence"
deps: ["def-real-singular-chain-complex", "thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 7; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $X=U\cup V$ with $U,V$ open. Let $C_\bullet^{U,V}(X;\mathbb R)$ be the span of simplices whose image lies in $U$ or $V$. There is a short exact sequence of real chain complexes
$$0\longrightarrow C_\bullet(U\cap V;\mathbb R)\xrightarrow{i} C_\bullet(U;\mathbb R)\oplus C_\bullet(V;\mathbb R)\xrightarrow{j} C_\bullet^{U,V}(X;\mathbb R)\longrightarrow0,$$
where $i(c)=(-c,c)$ and $j(a,b)=a+b$. This choice of $i$ is the negative of the ordinary AT convention.

## Facts & Assumptions

**Given:** The ordered open cover $(U,V)$ of $X$; all chains have real coefficients.

[F1] Chains use a supplied basis of simplices and the signed face differential ([[def-real-singular-chain-complex]]).

[F2] The ordinary coefficient-chain sequence uses $i(c)=(c,-c)$ and $j(a,b)=a+b$ ([[thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence]]).

## Proof

1.1 Regard chains in $U$, $V$, and $U\cap V$ as chains in $X$ by their basis inclusions: a map with image in a subspace has a unique corestriction, continuous by the subspace topology. A face of a small simplex remains small. Hence these spaces and the span $C^{U,V}$ are subcomplexes, and both displayed arrows commute with boundary. The sign choice equals [F2] precomposed by $-\operatorname{id}$ on the overlap. [given, F1, F2]

2.1 The map $i$ is injective since its second component is $c$. To split a finite small chain, assign a simplex to the $U$ component whenever its image lies in $U$, and otherwise to $V$. This formula gives a preimage under $j$, proving surjectivity without choosing from an arbitrary family. [F1, step 1.1]

3.1 If $a+b=0$, coefficient comparison in the supplied $X$ basis forces coefficients of $a$ outside the overlap to vanish, and likewise for $b$. Thus $b=-a$ is an overlap chain, and $(a,b)=i(b)$. Conversely $j i(c)=-c+c=0$. These prove equality of kernel and image. If an open set or overlap is empty the same argument gives the appropriate zero term; when $U=V=X$ it is the diagonal signed sequence. In negative degrees all terms are zero, and degree zero uses the same basis argument with zero differential. Constant simplices remain generators, and no AC is used. [F1, step 1.1, step 2.1, algebra] ∎
