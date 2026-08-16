---
id: thm-sylow-third-theorem
kind: theorem
title: "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-first-theorem, thm-sylow-second-theorem, thm-sylow-number-as-normalizer-index, thm-p-group-fixed-point-congruence, def-number-of-sylow-p-subgroups]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$ See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] If $P$ is a Sylow $p$-subgroup of a finite group $G$, then $$n_p(G)=[G:N_G(P)].$$. ([[thm-sylow-number-as-normalizer-index]]).

[L3] If a finite $p$-group $P$ acts on a finite set $X$, then $$|X|\equiv|X^P|\pmod p.$$. ([[thm-p-group-fixed-point-congruence]]).

[L4] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L5] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup ([[thm-sylow-first-theorem]]).

## Proof

**Proof technique:** direct.

1.1 By [L5] the set $\operatorname{Syl}_p(G)$ of [L4] is nonempty, so fix $P\in\operatorname{Syl}_p(G)$ and let it act by conjugation on that set; the action is well defined because a conjugate of a Sylow $p$-subgroup again has order $p^a$. [L4, L5, given, algebra]

2.1 Suppose $P$ fixes $Q\in\operatorname{Syl}_p(G)$, so $P\le N_G(Q)$, and also $Q\le N_G(Q)$. Both have order $p^a$, the full power of $p$ dividing $|G|$ and hence dividing $|N_G(Q)|$, so both are Sylow $p$-subgroups of $N_G(Q)$; by [L1] applied inside $N_G(Q)$ they are conjugate there, and $Q\trianglelefteq N_G(Q)$ makes every such conjugate equal to $Q$, so $P=Q$. Thus $P$ itself is the only fixed point, and since $P$ is a finite $p$-group acting on the finite set $\operatorname{Syl}_p(G)$, [L3] gives $n_p(G)\equiv1\pmod p$. [step 1.1, L1, L3, L4, given, algebra]

3.1 By [L2], $n_p(G)=[G:N_G(P)]$. Since $P\le N_G(P)\le G$, the index tower gives $[G:P]=[G:N_G(P)]\,[N_G(P):P]$, and $[G:P]=m$ because $|P|=p^a$; hence $n_p(G)$ divides $m$. This proves the stated claim. [step 1.1, step 2.1, L2, given, algebra] ∎
