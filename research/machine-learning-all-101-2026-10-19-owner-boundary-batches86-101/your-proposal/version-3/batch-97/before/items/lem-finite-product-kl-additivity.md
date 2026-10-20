---
id: lem-finite-product-kl-additivity
kind: lemma
title: Finite product KL is the sum of coordinate KLs
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-finite-kullback-leibler-divergence
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the proof is a finite sum calculation.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 2, §2.5, Theorem 2.16(d), tensorization; PDF pp. 33–34"
---

## Statement

Let $r\ge1$, let $S_1,\ldots,S_r$ be finite nonempty sets, and let $u_k,v_k$ be probability vectors on $S_k$. Put $U=\bigotimes_{k=1}^r u_k$ and $V=\bigotimes_{k=1}^r v_k$ on $S_1\times\cdots\times S_r$. With $D$ the finite directional KL divergence, zero source masses contributing zero and positive source mass against zero reference mass contributing $+\infty$, one has
$$D(U\|V)=\sum_{k=1}^rD(u_k\|v_k),$$
with equality also when one or both sides are $+\infty$.

## Statement references

[[def-finite-kullback-leibler-divergence]]: $D(P\|Q)=\sum_{x:p_x>0}p_x\log(p_x/q_x)$, with $+\infty$ for positive source mass where the reference mass is zero.

## Facts & Assumptions

**Given:** A finite list of finite nonempty sets and probability vectors $u_k,v_k$. Prove additivity of the finite KL of their product laws, including singular support.

[F1] [[def-finite-kullback-leibler-divergence]]: the finite KL convention is directional; zero source terms vanish and positive source mass over zero reference mass gives $+\infty$.

## Proof

1.1 Suppose some coordinate $k$ has $u_k(a_k)>0=v_k(a_k)$. For every other coordinate $i$, the finite probability vector $u_i$ has a nonempty support set $A_i=\{a:u_i(a)>0\}$. Choose one point from each of the finitely many $A_i$ by recursion over the finite index list; this uses only finite choice. Then $U(a_1,\ldots,a_r)>0$ while $V(a_1,\ldots,a_r)=0$. By [F1], $D(U\|V)=+\infty$ and $D(u_k\|v_k)=+\infty$, so both sides of the claimed identity are $+\infty$. [given, F1, construct]

1.2 Otherwise, for every $i$ and every $a_i$ with $u_i(a_i)>0$, $v_i(a_i)>0$. For each tuple with $U(a)>0$, $$\log\frac{U(a)}{V(a)}=\sum_{i=1}^r\log\frac{u_i(a_i)}{v_i(a_i)}.$$ Substitute this finite sum into the definition [F1], interchange the finite sums, and sum out every coordinate except $i$; each such marginal sum is $\sum_{a_k}u_k(a_k)=1$. The result is $D(U\|V)=\sum_i\sum_{a_i:u_i(a_i)>0}u_i(a_i)\log(u_i(a_i)/v_i(a_i))=\sum_iD(u_i\|v_i)$. [given, F1, algebra]

2.1 Steps 1.1 and 1.2 cover all possibilities, including $r=1$ and coordinates with zero source mass. This proves the extended-valued identity. [F1, step 1.1, step 1.2] ∎
