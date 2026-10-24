---
id: lem-game-covering-composition-and-continuity
kind: lemma
title: "Composition and continuity of game coverings"
status: published
origin: pipeline
deps: ["def-game-covering-and-k-covering"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "composition paragraph before Lemma 4"
      url: "https://arxiv.org/html/2401.09659v1"
    - title: "Lemma 2.1.5, printed p68"
      url: "https://www.math.ucla.edu/~dam/booketc/D.A._Martin,_Determinacy_of_Infinitely_Long_Games.pdf"
    - title: "Lemma 2, printed p451"
      url: "https://www.math.ucla.edu/~dam/booketc/purely_inductive.pdf"
---
## Statement

In ZF, identity maps give a covering of any taboo tree. If $(S,\pi_1,\phi_1)$ covers $T$ and $(R,\pi_2,\phi_2)$ covers $S$, then $(R,\pi_1\circ\pi_2,\phi_1\circ\phi_2)$ covers $T$. A $k_1$-covering composed with a $k_2$-covering is a $\min(k_1,k_2)$-covering. Every covering's branch map is continuous, so its preimages preserve clopen subsets of the target branch space.

## Facts & Assumptions

[F1] Coverings, lifting, locality, and the literal finite-level identity convention are [[def-game-covering-and-k-covering]].

## Proof

**Given:** Two coverings as in the statement and an arbitrary strategy $\sigma$ for player $P$ on $R$.

1.1 For identity maps, take a target play itself as its lift; every condition in F1 is then an equality. For the composite, prefix and length preservation compose. If $\pi_1\pi_2(r)$ is taboo for a player, first reflection makes $\pi_2(r)$ taboo for that player and second reflection makes $r$ so. Same-player strategy preservation also composes. If two input strategies agree below depth $n$, locality for $\phi_2$ makes their images agree below $n$, and locality for $\phi_1$ does so once more. [F1]

1.2 Given maximal $x$ consistent with $\phi_1\phi_2(\sigma)$, first lift it to maximal $y$ on $S$ consistent with $\phi_2(\sigma)$, then lift $y$ to maximal $z$ on $R$ consistent with $\sigma$. We have $\pi_1(y)\subseteq x$ and $\pi_2(z)\subseteq y$, whence $\pi_1\pi_2(z)\subseteq x$. If both lifts project exactly, so does the composite. If the second is proper, $z$ is taboo for $P$. If only the first is proper, $y$ is taboo for $P$ and $\pi_2(z)=y$; taboo reflection then makes $z$ taboo for $P$. These exhaust the alternatives and prove composite lifting. [F1]

2.1 Set $k=\min(k_1,k_2)$. The three trees' nodes and labels agree through depth $k$, and both position maps are identity there; their composite is identity there. Both strategy maps preserve every prescribed move below $k$, so their composite does too. This proves the $k$-covering clause, including $k=0$. [F1, step 1.1, step 1.2]

3.1 For any covering and target node $p$, length and prefix preservation give $\pi^{-1}([T]_p)=\bigcup\{[S]_s:|s|=|p|,\ \pi(s)=p\}$. The right side is open, hence preimages of all unions of cylinders are open. If $B$ and its complement are open, their preimages are open and complementary in $[S]$. Thus the preimage of $B$ is clopen, completing the assertions. QED. [F1, step 2.1]
