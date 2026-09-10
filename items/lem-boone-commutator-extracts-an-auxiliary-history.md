---
id: lem-boone-commutator-extracts-an-auxiliary-history
kind: lemma
title: "Boone commutator extracts an auxiliary history"
status: published
verification:
  audited: 2026-09-10
origin: pipeline
deps: ["lem-boone-hnn-tower-and-auxiliary-subgroups", "thm-brittons-lemma", "def-axiom-of-choice"]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to the Theory of Groups, Chapter 12, pp.440\u2013441, Lemma 12.13"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Statement

Assume AC. For a special word $\Sigma$, if $W(\Sigma)=1$ in $\mathcal B$, then there are freely reduced auxiliary words $L,R$ on $x,r_i$ with $L\Sigma R=q$ in the embedded rule group $G_2$.

## Facts & Assumptions

**Given:** $\Sigma\in G_0\le G_2$ with $W(\Sigma)=1$.

[F1] $G_3$ is the $t$-HNN extension centralizing $C=\langle x,r_i\rangle$; $\mathcal B$ is the $k$-HNN extension centralizing $D=\langle C,q^{-1}tq\rangle$, with all bases embedded. ([[lem-boone-hnn-tower-and-auxiliary-subgroups]])

[F2] A reduced HNN word with a stable letter is nonidentity; an identity word with stable letters therefore has a pinch. ([[thm-brittons-lemma]])

[A1] Assume AC for the HNN transversals. ([[def-axiom-of-choice]])

## Proof

1.1 Set $g=\Sigma^{-1}t\Sigma\in G_3$. It has one $t$, hence is nonidentity by [F2]. In the identity word $kgk^{-1}g^{-1}$ the only two $k$ letters must form a pinch. For the identity edge map of $D$ this says precisely $g\in D$, with membership in the embedded base $G_3$. [F1, F2, A1, given]

2.1 Write $$g^{-1}=R_0(q^{-1}t^{e_1}q)R_1\cdots(q^{-1}t^{e_n}q)R_n,$$ where $R_j\in C$ are auxiliary words and $e_j\in\{1,-1\}$, and choose the least possible $n$. Such finite expressions exist by $g\in D$ and the definition of generated subgroup. If $n=0$, the equality $\Sigma^{-1}t\Sigma R_0=1$ has exactly one $t$ and violates [F2]. Thus $n\ge1$. [F1, F2, step 1.1, choose]

3.1 Apply [F2] to the displayed word for $gg^{-1}$ in $G_3$. If a pinch uses its first $t$, it pairs that $t$ with $t^{e_1}$, so $e_1=-1$ and $\Sigma R_0q^{-1}=P\in C$ in $G_2$. Multiplying gives $P^{-1}\Sigma R_0=q$. This is the desired auxiliary equation. [F1, F2, step 2.1, algebra]

3.2 Any other pinch pairs consecutive $t^{e_j},t^{e_{j+1}}$ with $e_{j+1}=-e_j$ and $qR_jq^{-1}\in C$. Since $t$ commutes with $C$, for either sign $e_j$ the corresponding subexpression satisfies $$(q^{-1}t^{e_j}q)R_j(q^{-1}t^{-e_j}q)=q^{-1}(qR_jq^{-1})q=R_j.$$ Replacing it combines the neighboring auxiliary factors and gives an expression for $g^{-1}$ with $n-2$ such occurrences, contrary to minimality. Thus this kind of pinch cannot occur. [F1, step 2.1, algebra]

4.1 A pinch exists, so step 3.1 must apply. Freely reducing $P^{-1}$ and $R_0$ changes neither represented element nor alphabet, and yields the claimed $L,R$. All coefficient equalities were obtained in $G_2$, by the embedded-base clause in [F1]. Least finite length and finite free reduction need no additional choice. [F1, step 3.1, step 3.2] ∎

## Source locator

Rotman, printed pp.440–441, Lemma 12.13, including both signs of the later $t$-pinch.
