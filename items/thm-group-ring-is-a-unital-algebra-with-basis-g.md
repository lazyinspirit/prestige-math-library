---
id: thm-group-ring-is-a-unital-algebra-with-basis-g
kind: theorem
title: "The group ring $R[G]$ is a unital $R$-algebra with basis $G$, and each $g\\in G$ is a unit of $R[G]$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-algebra-over-a-commutative-ring, def-group-ring, thm-universal-property-of-free-modules]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 1 Section 1.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $G$ be a group. Write $[g] \in R[G]$ for
the basis vector of [[def-group-ring]] indexed by $g \in G$.

There is a unique $R$-bilinear multiplication on $R[G]$ satisfying
$$[g][h]=[gh]\qquad(g,h\in G).$$
With this product, $R[G]$ is a unital $R$-algebra whose underlying
$R$-module has basis $\{[g]:g\in G\}$. Its identity is $[e]$, where $e$ is the
identity of $G$, and every basis element $[g]$ is a unit with inverse
$[g^{-1}]$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a group $G$ with identity $e$.

[L1] The module $R[G]$ is free on the set $G$, with basis vectors $[g]$, and every element has a unique finite expansion $\sum_{g \in F} r_g [g]$ ([[def-group-ring]]).

[L2] Every set map from a set $X$ to a left $R$-module $M$ extends uniquely to an $R$-module homomorphism from the free module $R^{(X)}$ ([[thm-universal-property-of-free-modules]]).

[L3] An $R$-algebra is a unital ring equipped with a central unital map $R \to A$, and the multiplication is $R$-bilinear ([[def-algebra-over-a-commutative-ring]]).

## Proof

**Proof technique:** constructive.

1.1 For each fixed $g \in G$, the set map $u_g:G \to R[G]$, $u_g(h):=[gh]$, extends uniquely by [L2] to an $R$-linear map $\lambda_g:R[G] \to R[G]$ with $\lambda_g([h])=[gh]$ for every $h \in G$. [L1, L2, given, construct]

2.1 For each fixed $y \in R[G]$, the set map $v_y:G \to R[G]$, $v_y(g):=\lambda_g(y)$, extends uniquely by [L2] to an $R$-linear map $m_y:R[G] \to R[G]$. Define the product by $xy:=m_y(x)$. [step 1.1, L1, L2, given, construct]

3.1 By construction, $[g][h]=m_{[h]}([g])=\lambda_g([h])=[gh]$. The map $x \mapsto xy$ is $R$-linear because $m_y$ is, and if $x=\sum_{g \in F} r_g[g]$ then $xy=\sum_{g \in F} r_g\lambda_g(y)$, so the $R$-linearity of each $\lambda_g$ makes $y \mapsto xy$ linear as well. Thus the product is $R$-bilinear. [step 1.1, step 2.1, L1]

4.1 For fixed $y,z \in R[G]$, the maps $x \mapsto (xy)z$ and $x \mapsto x(yz)$ are $R$-linear by step 3.1, so it is enough to compare them on basis elements $[g]$. For fixed $g,z$ the maps $y \mapsto ([g]y)z$ and $y \mapsto [g](yz)$ are likewise linear, so it is enough to compare them on basis elements $[h]$. Repeating once more in the variable $z$ reduces associativity to basis triples, where $([g][h])[k]=[(gh)k]=[g(hk)]=[g]([h][k])$ by associativity in $G$. Hence the product on $R[G]$ is associative. [step 3.1, L1, given, algebra]

4.2 The same bilinear reduction shows that $[e]$ is a two-sided identity, because $[e][g]=[eg]=[g]$ and $[g][e]=[ge]=[g]$ for every basis element. Likewise $[g][g^{-1}]=[e]=[g^{-1}][g]$, so each $[g]$ is a unit with inverse $[g^{-1}]$. [step 3.1, L1, given, algebra]

5.1 The map $\eta:R \to R[G]$ defined by $\eta(r)=r[e]$ is additive and satisfies $\eta(rs)=(r[e])(s[e])=rs[e]$ and $\eta(1_R)=1_R[e]=[e]$ by steps 3.1 and 4.2. For every basis element $[g]$, one has $\eta(r)[g]=r[g]=[g]\eta(r)$; bilinearity extends this equality to every element of $R[G]$. [step 3.1, step 4.2, L1, given, algebra]

6.1 If $\ast$ is any other $R$-bilinear product with $[g] \ast [h]=[gh]$, then for $x=\sum_{g \in F} r_g[g]$ and $y=\sum_{h \in E} s_h[h]$ bilinearity forces $x \ast y=\sum_{g \in F}\sum_{h \in E} r_gs_h[gh]$, which is exactly the product already constructed in steps 1.1-3.1. Therefore the multiplication is unique, and with steps 4.1-5.1 it makes $R[G]$ a unital $R$-algebra as in [L3]. [step 3.1, step 4.1, step 4.2, step 5.1, L3, discharge-construct] ∎
