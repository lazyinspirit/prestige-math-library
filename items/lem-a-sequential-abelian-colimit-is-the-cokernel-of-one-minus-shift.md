---
id: "lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift"
kind: "lemma"
title: "A sequential abelian colimit is the cokernel of one minus shift"
deps: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 14§6, algebraic lemma p.114"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "14§6, algebraic lemma p.114"
    - title: "Hatcher, Algebraic Topology, Theorem 3F.8 proof pp.314–315"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
      locator: "Theorem 3F.8 proof pp.314–315"
status: published
origin: "pipeline"
proof_strategy: "Injectivity follows recursively from the lowest coordinate of a finite-support vector. The cokernel imposes precisely the generating relations of the colimit; no injectivity of u_i is assumed."
---

## Statement

For any sequence of abelian groups $G_0\xrightarrow{u_0}G_1\xrightarrow{u_1}\cdots$, let $D=\bigoplus_{i\ge0}G_i$ and let $s:D\to D$ send the $i$th coordinate by $u_i$ into coordinate $i+1$. Then
$$0\longrightarrow D\xrightarrow{1-s}D\longrightarrow\operatorname{colim}_iG_i\longrightarrow0$$
is exact, where the last map sums the canonical maps to the colimit. The maps $u_i$ need not be injective.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

## Proof

1.1 If $(1-s)x=0$, its coordinate zero is $x_0=0$. Recursively its coordinate $i$ is $x_i-u_{i-1}x_{i-1}=0$, forcing $x_i=0$ for every $i$. Thus $1-s$ is injective, even if some or all transition maps vanish. [given, algebra]

2.1 The quotient $D/\operatorname{im}(1-s)$ imposes the relations $\iota_i(g)=\iota_{i+1}(u_i g)$. A homomorphism from this quotient to any abelian group $B$ is exactly a family of homomorphisms $v_i:G_i\to B$ satisfying $v_{i+1}u_i=v_i$: define the map on a finite-support tuple by the finite sum $\sum_i v_i(x_i)$. This proves the colimit universal property, so the quotient is the colimit and the last map is surjective with the stated kernel. Zero groups and a sequence supported at only one index are included. [step 1.1, algebra] ∎
