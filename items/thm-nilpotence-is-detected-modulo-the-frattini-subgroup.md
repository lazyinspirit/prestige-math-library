---
id: thm-nilpotence-is-detected-modulo-the-frattini-subgroup
kind: theorem
title: "Nilpotence lifts over the Frattini subgroup of a finite group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-frattini-subgroup-of-a-finite-group, thm-frattini-argument, lem-finite-nilpotence-via-normal-sylow-subgroups, thm-correspondence-theorem-groups, thm-subgroups-quotients-and-finite-products-of-nilpotent-groups, thm-sylow-second-theorem, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

Let $G$ be finite and let $\Phi(G)\le N\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\Phi(G)$ is nilpotent. See [[def-frattini-subgroup-of-a-finite-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a finite group $G$, the Frattini subgroup is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$. ([[def-frattini-subgroup-of-a-finite-group]]).

[L2] If $N\trianglelefteq G$ is finite and $P$ is a Sylow $p$-subgroup of $N$, then $$G=N N_G(P).$$. ([[thm-frattini-argument]]).

[L3] For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. ([[lem-finite-nilpotence-via-normal-sylow-subgroups]]).

[L4] For $K\mathrel{\trianglelefteq}G$, subgroups of $G/K$ correspond to subgroups of $G$ containing $K$, and the correspondence preserves normality. ([[thm-correspondence-theorem-groups]]).

[L5] Every subgroup and every quotient of a nilpotent group is nilpotent, and every finite direct product of nilpotent groups is nilpotent. ([[thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]]).

[L6] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$; in particular all Sylow $p$-subgroups are conjugate. ([[thm-sylow-second-theorem]]).

[L7] If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$. ([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]).

## Proof

**Proof technique:** direct.

1.1 If $N$ is nilpotent, then its quotient $N/\Phi(G)$ is nilpotent by [L5]. [L1, L5, given]

1.2 Conversely, assume that $N/\Phi(G)$ is nilpotent, and let $P$ be a Sylow $p$-subgroup of $N$. Every automorphism of $G$ permutes its maximal proper subgroups, so [L1] makes $\Phi(G)$ characteristic and hence normal in $G$. If $S$ is Sylow in $\Phi(G)$, then [L6] gives $n\in N$ with $S\le nPn^{-1}$; normality of $\Phi(G)$ gives $n^{-1}Sn\le P\cap\Phi(G)$. Thus $P\cap\Phi(G)$ contains a Sylow $p$-subgroup of $\Phi(G)$ and, being a $p$-subgroup, is itself Sylow there. Consequently $P\Phi(G)/\Phi(G)$ is a Sylow $p$-subgroup of $N/\Phi(G)$. [L1, L3, L4, L6, given, algebra]

2.1 By nilpotence and [L3], this quotient Sylow subgroup is normal; conjugacy [L6] makes it unique, hence characteristic in $N/\Phi(G)$. Since $N/\Phi(G)\trianglelefteq G/\Phi(G)$, [L7] and [L4] give $P\Phi(G)\trianglelefteq G$. [step 1.2, L3, L4, L6, L7, given, algebra]

3.1 Because $P\cap\Phi(G)$ is Sylow in $\Phi(G)$, the product-order formula shows that $P$ is Sylow in $P\Phi(G)$. Apply the Frattini argument [L2] to the normal subgroup $P\Phi(G)$: $$G=P\Phi(G)N_G(P)=\Phi(G)N_G(P).$$ If $N_G(P)$ were proper, finiteness would place it in a maximal subgroup $M$; [L1] gives $\Phi(G)\le M$, contradicting the displayed equality. Hence $N_G(P)=G$. [L1, L2, step 1.2, step 2.1, given, algebra]

4.1 Thus every Sylow subgroup of $N$ is normal, so [L3] makes $N$ nilpotent. Together with step 1.1 this proves both directions. [L3, step 1.1, step 3.1, given]

5.1 Taking $N=G$ gives the asserted special case. When $G=1$, one has $N=\Phi(G)=1$, and both groups in the equivalence are trivial and nilpotent. [L1, step 4.1, given] ∎
