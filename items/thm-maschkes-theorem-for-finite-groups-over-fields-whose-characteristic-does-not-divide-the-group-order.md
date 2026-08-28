---
id: thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
kind: theorem
title: "Maschke's theorem for finite groups over fields whose characteristic does not divide $|G|$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, def-subrepresentation-and-irreducible-representation]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 1.2.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 3.1"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group, let $k$ be a field with
$\operatorname{char} k \nmid |G|$, let $\rho:G \to \operatorname{GL}(V)$ be a
finite-dimensional representation of $G$ over $k$, and let $W \le V$ be a
subrepresentation. Then there is a subrepresentation $U \le V$ such that

$$V=W\oplus U.$$

## Facts & Assumptions

**Given:** A finite group $G$, a field $k$ with $\operatorname{char} k \nmid |G|$, a finite-dimensional representation $\rho:G \to \operatorname{GL}(V)$, and a subrepresentation $W \le V$.

[L1] A subrepresentation is a linear subspace stable under every group element ([[def-subrepresentation-and-irreducible-representation]]).

[A1] Because $\operatorname{char} k \nmid |G|$, the scalar $|G|\cdot 1_k$ is nonzero in $k$ and therefore has a multiplicative inverse, denoted $|G|^{-1}$.

[A2] Since $V$ is finite-dimensional over $k$, the subspace $W$ has a $k$-linear complement, so there is a $k$-linear projection $P:V \to W$ with $P(w)=w$ for every $w \in W$.

## Proof

**Proof technique:** direct.

1.1 Choose the projection $P$ from [A2] and define $$P_G:=|G|^{-1}\sum_{g \in G}\rho(g)P\rho(g)^{-1}.$$ Each summand is $k$-linear, so $P_G$ is a $k$-linear endomorphism of $V$. [A1, A2, given, construct]

2.1 For every $h \in G$, $$\rho(h)P_G\rho(h)^{-1}=|G|^{-1}\sum_{g \in G}\rho(hg)P\rho(hg)^{-1}=P_G,$$ because left multiplication by $h$ permutes the finite set $G$. Thus $P_G$ is $G$-equivariant. [step 1.1, given, algebra]

3.1 Each summand $\rho(g)P\rho(g)^{-1}$ maps $V$ into $\rho(g)(W)=W$, so $P_G(V)\subseteq W$ by [L1]. If $w \in W$, then $\rho(g)^{-1}w \in W$ by [L1], hence $P(\rho(g)^{-1}w)=\rho(g)^{-1}w$ and therefore $\rho(g)P\rho(g)^{-1}(w)=w$ for every $g$. Summing gives $P_G(w)=w$. So $P_G$ has image exactly $W$. [step 1.1, step 2.1, L1, given, algebra]

4.1 Put $U:=\ker P_G$. Since $P_G$ is $G$-equivariant, $U$ is a subrepresentation. For every $v \in V$ one has $$v=P_G(v)+(v-P_G(v)),$$ with $P_G(v) \in W$ and $v-P_G(v) \in U$. If $x \in W \cap U$, then step 3.1 gives $x=P_G(x)=0$, so the sum is direct. Hence $V=W\oplus U$. [step 2.1, step 3.1, L1, given, algebra] ∎
