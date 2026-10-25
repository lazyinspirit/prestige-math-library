---
id: ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group
kind: example
title: "The finite Heisenberg group is the unique Sylow $p$-subgroup of its coordinate upper-triangular group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, def-action-by-automorphisms, def-external-semidirect-product, thm-external-semidirect-product-is-a-group, prop-canonical-subgroups-of-an-external-semidirect-product, cor-sylow-subgroup-normal-iff-unique, thm-z-mod-p-is-a-field, thm-standard-representatives-modulo-n, def-unit-group-modulo-n-and-euler-totient, cor-totient-at-one-and-at-a-prime, thm-product-rule]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Example

Let $H_p=\mathbb F_p^3$ with $(a,b,c)(a',b',c')=(a+a',b+b',c+c'+ab')$, and let $D=(\mathbb F_p^\times)^3$ act by diagonal coordinate scaling. In the coordinate upper-triangular group $B_p=H_p\rtimes D$, the subgroup $H_p$ is the unique Sylow $p$-subgroup. See [[def-external-direct-product-of-groups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $G$ and $H$ be groups. Their external direct product has underlying set $$G\times H:=\{(g,h):g\in G,\ h\in H\}$$ and componentwise operation $$(g,h)(g',h') := (gg',hh').$$ The fact that this operation makes $G\times H$ a group, with the indicated identity and inverses, is proved in thm-external-direct-product-is-a-group. Until that result is used, this definition introduces only the set and its componentwise binary operation. ([[def-external-direct-product-of-groups]]).

[L2] For groups $G$ and $H$, the componentwise operation of def-external-direct-product-of-groups makes $G\times H$ a group. Its identity is $(e_G,e_H)$, and $$(g,h)^{-1}=(g^{-1},h^{-1}).$$ Moreover the coordinate maps $\pi_G(g,h)=g$ and $\pi_H(g,h)=h$ are group homomorphisms. ([[thm-external-direct-product-is-a-group]]).

[L3] An action of a group $H$ on a group $N$ by automorphisms is a homomorphism $$\alpha:H\longrightarrow\operatorname{Aut}(N).$$ Here automorphisms are those of def-group-isomorphism-and-automorphism. Writing $\alpha_h=\alpha(h)$, this means that every $\alpha_h$ is an automorphism of $N$, $\alpha_{hk}=\alpha_h\circ\alpha_k$, and $\alpha_1=\operatorname{id}_N$. Equivalently, by thm-group-actions-correspond-to-homomorphisms, it is a group action (def-group-action) on the underlying set of $N$ for which every acting permutation is an automorphism. ([[def-action-by-automorphisms]]).

[L4] For an action $\alpha:H\to\operatorname{Aut}(N)$, the external semidirect product $N\rtimes_\alpha H$ is $N\times H$ with multiplication $$(n,h)(n',h')=(n\alpha_h(n'),hh').$$ ([[def-external-semidirect-product]]).

[L5] Let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms. The multiplication $$(n,h)(n',h')=\bigl(n\alpha_h(n'),hh'\bigr)$$ makes $N\times H$ a group with identity $(1_N,1_H)$ and inverse $$(n,h)^{-1}=\bigl(\alpha_{h^{-1}}(n^{-1}),h^{-1}\bigr).$$. ([[thm-external-semidirect-product-is-a-group]]).

[L6] In $N\rtimes_\alpha H$, the canonical copies $\bar N=\{(n,1):n\in N\}$ and $\bar H=\{(1,h):h\in H\}$ are subgroups, $\bar N$ is normal, their intersection is trivial, every element has a unique factorization $(n,1)(1,h)$, and $$(1,h)(n,1)(1,h)^{-1}=(\alpha_h(n),1).$$ ([[prop-canonical-subgroups-of-an-external-semidirect-product]]).

[L7] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L8] For every prime $p$, the operations of addition and multiplication on $\mathbb Z/p$ make it a field (def-field). ([[thm-z-mod-p-is-a-field]]).

[L9] Let $n$ be a positive integer. Every class in $\mathbb Z/n$ (def-integers-modulo-n) contains exactly one integer $r$ with $0\le r<n$. Consequently the map $$r\longmapsto[r]_n\qquad(0\le r<n)$$ is a bijection from the von Neumann natural $n$ to $\mathbb Z/n$, and $|\mathbb Z/n|=n$. This includes $n=1$, where the only representative is $0$. For $n=0$, the map $a\mapsto[a]_0$ is a bijection $\mathbb Z\to\mathbb Z/0$. ([[thm-standard-representatives-modulo-n]]).

[L10] For $n\ge1$, the unit group is $$(\mathbb Z/n)^\times:=\{u\in\mathbb Z/n:\text{some }v\in\mathbb Z/n\text{ satisfies }uv=[1]_n\},$$ and Euler's totient is $\varphi(n):=|(\mathbb Z/n)^\times|$. ([[def-unit-group-modulo-n-and-euler-totient]]).

[L11] Euler's totient satisfies $\varphi(1)=1$. If $p$ is prime (def-prime), then $$\varphi(p)=p-1.$$. ([[cor-totient-at-one-and-at-a-prime]]).

[L12] 1. If $A$ and $B$ are finite then $A \times B$ is finite and $\lvert A \times B\rvert = \lvert A\rvert \cdot \lvert B\rvert$ (def-finite-cardinality). 2. Let $m \in \mathbb{N}$ and let $A_0, \dots, A_{m-1}$ be finite sets. Write $$\prod_{i<m} A_i := \{\, f : f \text{ is a function with domain } m \text{ and } f(i) \in A_i \text{ for every } i < m \,\}.$$ Then $\prod_{i<m} A_i$ is finite and $\big\lvert\prod_{i<m} A_i\big\rvert = \prod_{i<m}\lvert A_i\rvert$, the right-hand product being the $\mathbb{N}$-valued one of def-nat-finite-sum-and-product. ([[thm-product-rule]]).

## Verification

**Proof technique:** direct.

1.1 In $H_p=\mathbb F_p^3$, expanding both triple products gives the same third coordinate $c+c'+c''+ab'+ab''+a'b''$; hence the operation is associative, with identity $(0,0,0)$ and inverse $(a,b,c)^{-1}=(-a,-b,-c+ab)$. [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12, given, algebra]

2.1 For $d=(d_1,d_2,d_3)\in D=(\mathbb F_p^\times)^3$, the scaling factors on $a,b,c$ are $\lambda=d_1d_2^{-1}$, $\mu=d_2d_3^{-1}$, and $\lambda\mu=d_1d_3^{-1}$. This identity preserves the cross term $ab'$, so the scaling is an automorphism, and coordinate multiplication makes $D\to\operatorname{Aut}(H_p)$ a homomorphism. [step 1.1, given, algebra]

3.1 The semidirect product $B_p=H_p\rtimes D$ is therefore defined, and its canonical copy of $H_p$ is normal. [step 2.1, given, algebra]

4.1 Since $|H_p|=p^3$ and $|B_p|=p^3(p-1)^3$, $H_p$ has the full $p$-part of $|B_p|$; normality makes it the unique Sylow $p$-subgroup. For $p=2$, $D$ is trivial and $B_p=H_p$. This proves the stated claim. [step 1.1, step 3.1, given, algebra] ∎
