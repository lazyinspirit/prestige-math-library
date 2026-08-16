---
id: thm-sylow-second-theorem
kind: theorem
title: "Sylow II: in a finite group every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-first-theorem, thm-p-group-fixed-point-congruence, def-number-of-sylow-p-subgroups, def-normalizer-of-a-subgroup, thm-lagrange]
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

Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. See [[thm-sylow-first-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L2] If a finite $p$-group $P$ acts on a finite set $X$, then $$|X|\equiv|X^P|\pmod p.$$. ([[thm-p-group-fixed-point-congruence]]).

[L3] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L4] Let $H\le G$ be a subgroup (def-subgroup). The normalizer of $H$ in $G$ is $$N_G(H):=\{g\in G:gHg^{-1}=H\}.$$ Thus $g\in N_G(H)$ exactly when the conjugation automorphism $c_g$ preserves $H$ setwise (thm-conjugation-is-an-automorphism). The subgroup property is proved in lem-centralizers-and-normalizers-are-subgroups. ([[def-normalizer-of-a-subgroup]]).

[L5] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 Let a finite $p$-subgroup $H$ act by left multiplication on $G/P$. [L1, L2, L3, L4, L5, given, algebra]

2.1 Its cardinality is prime to $p$, so the fixed-point congruence gives a fixed coset $gP$, and the fixed-coset condition is exactly $H\le gPg^{-1}$. [step 1.1, given, algebra]

3.1 Taking $H$ Sylow, Lagrange's theorem turns containment into equality; applying this to any Sylow $p$-subgroup $Q$ gives $Q=gPg^{-1}$. [step 2.1, given, algebra]

4.1 If $H=\{1\}$, then $X^H=X$ and step 2.1 returns any coset, with $\{1\}\le gPg^{-1}$ for every $g$. If $p\nmid|G|$, then $a=0$, so $P=\{1\}$ is the Sylow $p$-subgroup and the only $p$-subgroup of $G$ is $\{1\}$ itself, which is already equal to it. This proves the stated claim. [step 3.1, given, algebra] ∎
