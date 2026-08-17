---
id: ex-sylow-subgroups-of-gl-two-over-a-finite-prime-field
kind: example
title: "Sylow $p$-subgroups of $\\operatorname{Aut}((\\mathbb Z/p)^2)$: $n_p=p+1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-order-of-automorphism-group-of-elementary-abelian-rank-two, def-sylow-p-subgroup, def-number-of-sylow-p-subgroups, thm-sylow-number-as-normalizer-index, thm-z-mod-p-is-a-field, thm-lagrange]
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
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Example

For $E_p=(\mathbb Z/p)^2$, the Sylow $p$-subgroups of $\operatorname{Aut}(E_p)$ have order $p$ and number $p+1$. Distinct ones meet trivially, and their union contains exactly $p^2-1$ nonidentity elements. See [[thm-order-of-automorphism-group-of-elementary-abelian-rank-two]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For every prime $p$, $$|\operatorname{Aut}((\mathbb Z/p)\times(\mathbb Z/p))|=(p^2-1)(p^2-p).$$. ([[thm-order-of-automorphism-group-of-elementary-abelian-rank-two]]).

[L2] Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\in\mathbb N$ and $p\nmid m$. A subgroup $P\le G$ is a Sylow $p$-subgroup when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in thm-sylow-first-theorem. ([[def-sylow-p-subgroup]]).

[L3] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L4] If $P$ is a Sylow $p$-subgroup of a finite group $G$, then $$n_p(G)=[G:N_G(P)].$$. ([[thm-sylow-number-as-normalizer-index]]).

[L5] For every prime $p$, the operations of addition and multiplication on $\mathbb Z/p$ make it a field (def-field). ([[thm-z-mod-p-is-a-field]]).

[L6] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Verification

**Proof technique:** direct.

1.1 For $E_p=(\mathbb Z/p)^2$, the maps $u_t(x,y)=(x+ty,y)$ satisfy $u_su_t=u_{s+t}$, so $P=\{u_t:t\in\mathbb Z/p\}$ has order $p$. Because $|\operatorname{Aut}(E_p)|=p(p-1)^2(p+1)$, it is a Sylow $p$-subgroup. [L1, L2, L3, L4, L5, L6, given, algebra]

2.1 The common fixed subgroup of $P$ is $L=\{(x,0)\}$, since $u_t(x,y)=(x,y)$ for every $t$ exactly when $y=0$. A normalizer preserves $L$; conversely, a coordinate automorphism preserving $L$ conjugates each $u_t$ to another element of $P$. [step 1.1, given, algebra]

3.1 Such an automorphism has the form $(x,y)\mapsto(ax+by,dy)$ with $a,d\ne0$, giving $p(p-1)^2$ choices. The normalizer-index formula therefore gives $n_p=p+1$. [step 2.1, given, algebra]

4.1 Two distinct order-$p$ subgroups meet trivially, so their nonidentity elements are disjoint and number $(p+1)(p-1)=p^2-1$. At $p=2$, the normalizer has order $2$ in a group of order $6$, giving three Sylow subgroups and three nonidentity elements. This proves the stated claim. [step 1.1, step 3.1, given, algebra] ∎
