---
id: "thm-naturality-of-de-rham-mayer-vietoris-for-maps-of-covered-manifolds"
kind: "theorem"
title: "Naturality of de rham mayer vietoris for maps of covered manifolds"
deps: ["thm-mayer-vietoris-sequence-in-de-rham-cohomology", "prop-explicit-de-rham-mayer-vietoris-connecting-class", "prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges", "thm-naturality-of-the-homology-connecting-morphism", "prop-pullback-is-a-morphism-of-de-rham-complexes"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume countable choice. For smooth $F:M\to N$ with $F(U)\subseteq U\prime$ and $F(V)\subseteq V\prime$, pullback gives a contravariant commutative ladder of the two Mayer–Vietoris sequences; in particular $\delta_M F_{U\cap V}^*=F^*\delta_N$.

## Facts & Assumptions

**Given:** Assume countable choice. Open covers $M=U\cup V$, $N=U\prime\cup V\prime$ and the stated smooth covered map $F$.

[F1] [[thm-mayer-vietoris-sequence-in-de-rham-cohomology]]: Under countable choice the de Rham Mayer–Vietoris sequence is exact: $\cdots\to H^k(M)\xrightarrow{r^*}H^k(U)\oplus H^k(V)\xrightarrow{s^*}H^k(U\cap V)\xrightarrow\delta H^{k+1}(M)\to\cdots$, beginning with $0\to H^0(M)$.

[F2] [[prop-explicit-de-rham-mayer-vietoris-connecting-class]]: Under countable choice, for a closed $k$-form $\omega$ on $U\cap V$, $\delta[\omega]=[\eta]$, where $\eta|_U=d(-\rho_V\omega)$ and $\eta|_V=d(\rho_U\omega)$, with products smoothly extended by zero as in the lift construction. This class is independent of partition, lift and representative.

[F3] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]: For a smooth map $F:M\to N$, pullback sends smooth differential forms on $N$ to smooth differential forms on $M$, is functorial, and satisfies $$ F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta. $$

[F4] [[thm-naturality-of-the-homology-connecting-morphism]]: A morphism of short exact sequences of complexes induces a commutative square $$ \begin{matrix} H_n(C)&\xrightarrow{\partial_n}&H_{n-1}(A)\\ \downarrow&&\downarrow\\ H_n(C')&\xrightarrow{\partial'_n}&H_{n-1}(A') \end{matrix} $$ for every $n\in\mathbb Z$.

[F5] [[prop-pullback-is-a-morphism-of-de-rham-complexes]]: A smooth map $F:M\to N$ induces a degree-zero real cochain map $F^*:\Omega^\bullet(N)\to\Omega^\bullet(M)$.

## Proof

**Proof technique:** direct.

1.1 Restriction of a pullback is pullback by the restricted map. Therefore $r_MF^*=(F_U^*\oplus F_V^*)r_N$ and $s_M(F_U^*\oplus F_V^*)=F_{U\cap V}^*s_N$, with the second identity using $\beta-\alpha$ on both sides. These are cochain squares, since all restrictions and pullbacks commute with $d$. [F1, F3, F5, given]

2.1 These squares are a morphism from the short exact sequence for $N$ to that for $M$. Reindexing by degree negation and applying naturality of the homology connector gives the displayed connecting square in degree $k$ to $k+1$. Concretely, a lift $(\alpha\prime,\beta\prime)$ of a closed overlap form on $N$ pulls back to a lift on $M$, and its glued derivative is $F^*\eta\prime$; the connector formula gives exactly the same sign. Partition preservation is unnecessary, since the class is lift independent. [F2, F4, step 1.1] ∎

## Source locator

Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.
