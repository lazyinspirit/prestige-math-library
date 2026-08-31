---
id: thm-parametric-transversality
kind: theorem
title: "Parametric transversality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-family-of-maps-and-evaluation-map,
       def-a-smooth-map-transverse-to-an-embedded-submanifold,
       thm-transverse-preimage-theorem,
       thm-morse-sard-for-smooth-manifolds]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $\mathcal F:M\times S\to N$ be a smooth family of maps and let $Z\subseteq N$
be an embedded submanifold. If $\mathcal F\pitchfork Z$, then the set of
parameters $s\in S$ for which the slice $\mathcal F_s:M\to N$ fails to be
transverse to $Z$ is a null subset of $S$.

## Facts & Assumptions

**Given:** A smooth family $\mathcal F:M\times S\to N$ transverse to an embedded submanifold $Z\subseteq N$.

[F1] The slice maps $\mathcal F_s$ come from the evaluation map $\mathcal F$ ([[def-smooth-family-of-maps-and-evaluation-map]]).

[F2] Transversality to an embedded submanifold means a tangent-space spanning condition at each point of the preimage ([[def-a-smooth-map-transverse-to-an-embedded-submanifold]]).

[L1] The preimage $W=\mathcal F^{-1}(Z)$ is an embedded submanifold, and for the projection $\pi_S:W\to S$, regular values are dense outside a null set ([[thm-transverse-preimage-theorem]], [[thm-morse-sard-for-smooth-manifolds]]).

## Proof
**Proof technique:** direct.

1.1 Because $\mathcal F\pitchfork Z$, [L1] makes $$ W:=\mathcal F^{-1}(Z)\subseteq M\times S $$ an embedded submanifold. Let $\pi_S:W\to S$ be the restriction of the second projection. [L1, given, construct]

2.1 Fix $(p,s)\in W$ and write $z:=\mathcal F(p,s)$. The fibre of $\pi_S$ over $s$ is $$ \pi_S^{-1}(s)=\{(q,s)\in M\times S:\mathcal F(q,s)\in Z\}, $$ which identifies with $\mathcal F_s^{-1}(Z)$ by [F1]. A pair $(u,w)\in T_pM\times T_sS$ lies in $T_{(p,s)}W$ exactly when $d\mathcal F_{(p,s)}(u,w)\in T_zZ$, so $d(\pi_S)_{(p,s)}$ is surjective exactly when every $w\in T_sS$ admits some $u\in T_pM$ with $d\mathcal F_{(p,s)}(u,w)\in T_zZ$. [F1, step 1.1, algebra]

3.1 If $\mathcal F_s\pitchfork Z$ at $p$, then [F2] gives $$ d\mathcal F_{(p,s)}(T_pM\times\{0\})+T_zZ=T_zN. $$ For any $w\in T_sS$, choose $u\in T_pM$ so that $d\mathcal F_{(p,s)}(u,0)+d\mathcal F_{(p,s)}(0,w)\in T_zZ$. Then $(u,w)\in T_{(p,s)}W$, so step 2.1 makes $\pi_S$ a submersion at $(p,s)$. [F2, step 2.1, algebra]

3.2 Conversely, assume $\pi_S$ is a submersion at $(p,s)$. Given $\xi\in T_zN$, the transversality of $\mathcal F$ in [F2] gives $(u,w)\in T_pM\times T_sS$ and $\eta\in T_zZ$ with $\xi=d\mathcal F_{(p,s)}(u,w)+\eta$. By step 2.1 choose $u'\in T_pM$ with $(u',w)\in T_{(p,s)}W$, so $d\mathcal F_{(p,s)}(u',w)\in T_zZ$. Then $$ \xi=d\mathcal F_{(p,s)}(u-u',0)+\bigl(\eta+d\mathcal F_{(p,s)}(u',w)\bigr)\in d\mathcal F_{(p,s)}(T_pM\times\{0\})+T_zZ, $$ which is exactly the transversality condition for $\mathcal F_s$ at $p$. [F2, step 2.1, algebra]

4.1 Therefore $s$ is a regular value of $\pi_S$ if and only if the slice $\mathcal F_s$ is transverse to $Z$ at every point of its fibre. Applying the Sard statement in [L1] to $\pi_S$ shows that the bad parameters form a null subset of $S$. [L1, step 3.1, step 3.2] ∎
