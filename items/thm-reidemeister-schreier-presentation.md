---
id: thm-reidemeister-schreier-presentation
kind: theorem
title: "The Reidemeister-Schreier presentation theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-presentation, def-schreier-generator, def-schreier-rewriting-map, def-schreier-transversal-and-schreier-system, prop-normal-closure-is-products-of-conjugates, thm-first-isomorphism-theorem-groups, thm-nielsen-schreier-with-an-explicit-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

Let $G=\langle X\mid R\rangle$ be a group presentation, let $\pi:F(X)\to G$ be
the canonical quotient map, and let $H\le G$. Put $H'=\pi^{-1}(H)\le F(X)$, and
choose a Schreier system $\mathcal T$ for the right cosets of $H'$ in $F(X)$.
If $S$ denotes the nontrivial Schreier generators and $\tau$ the corresponding
rewriting map, then $H$ has presentation

$$H\cong\langle S\mid \tau(trt^{-1})\text{ for }t\in\mathcal T,\ r\in R\rangle.$$

## Facts & Assumptions

**Given:** A presentation $G=\langle X\mid R\rangle$, the quotient map $\pi:F(X)\to G$, a subgroup $H\le G$, the preimage $H'=\pi^{-1}(H)$, a Schreier system $\mathcal T$, and its nontrivial Schreier generators $S$.

[L1] A presentation is the quotient $F(X)/\langle\!\langle R\rangle\!\rangle$ ([[def-group-presentation]]).

[L2] Elements of a normal closure are exactly finite products of conjugates of the generating relators and their inverses ([[prop-normal-closure-is-products-of-conjugates]]).

[L3] For a Schreier system, the nontrivial Schreier generators form a free basis of the subgroup ([[thm-nielsen-schreier-with-an-explicit-basis]]).

[L4] For a word $w=a_1\cdots a_n$, the Schreier rewrite $\tau(w)=\sigma_1\cdots\sigma_n$ is defined from the successive representatives $t_j=\overline{a_1\cdots a_j}$; if $w$ represents an element of $H'$, then $t_n=1$ ([[def-schreier-rewriting-map]]).

[L5] The first isomorphism theorem identifies a quotient by a kernel with the image ([[thm-first-isomorphism-theorem-groups]]).

[L6] Schreier generators are the elements $s(u,x)=ux\,\overline{ux}^{-1}$ ([[def-schreier-generator]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the set $S$ of nontrivial Schreier generators is a free basis of $H'$. Therefore the inclusion $S\hookrightarrow H'$ extends to an isomorphism $\rho:F(S)\to H'$. [L3, given, construct]

1.2 By [L1], the ambient quotient is $G=F(X)/N$ with $N=\langle\!\langle R\rangle\!\rangle_{F(X)}$. The restriction of the quotient map to $H'$ has image $H$ and kernel $H'\cap N$, so [L5] gives $H\cong H'/(H'\cap N)$. By [L2], every element of $H'\cap N$ is a finite product of conjugates $u r^{\pm1}u^{-1}$ with $u\in F(X)$ and $r\in R$. Writing $u=ht$ with $h\in H'$ and $t\in\mathcal T$ turns each such conjugate into $h(tr^{\pm1}t^{-1})h^{-1}$, so $H'\cap N$ is contained in the normal closure in $H'$ of the elements $trt^{-1}$. Conversely, each $trt^{-1}$ lies in $H'\cap N$, and $H'\cap N$ is normal in $H'$, so that normal closure is exactly $H'\cap N$. [L1, L2, L5, given]

2.1 Let $q:H'\to H'/(H'\cap N)$ be the quotient map, and put $\bar\rho=q\circ\rho:F(S)\to H'/(H'\cap N)\cong H$. Fix $t\in\mathcal T$ and $r\in R$, and write $trt^{-1}=a_1\cdots a_n$. Let $t_j$ and $\sigma_j$ be the successive representatives and rewriting factors from [L4]. If $a_j=x\in X$, then [L6] gives $\sigma_j=s(t_{j-1},x)=t_{j-1}x\,t_j^{-1}$, so $t_{j-1}a_j=\sigma_j t_j$. If $a_j=x^{-1}$, then $t_{j-1}$ is the chosen representative of the coset $H't_jx$, so [L6] gives $\sigma_j=s(t_j,x)^{-1}=t_{j-1}x^{-1}t_j^{-1}$ and again $t_{j-1}a_j=\sigma_j t_j$. Multiplying these identities yields $trt^{-1}=\sigma_1\cdots\sigma_n t_n=\rho(\tau(trt^{-1}))$, because $trt^{-1}\in H'$ forces $t_n=1$ by [L4]. Since $trt^{-1}\in H'\cap N$, every rewritten relator $\tau(trt^{-1})$ lies in $\ker\bar\rho$. [L4, L6, step 1.1, step 1.2, construct]

3.1 Conversely, if $w\in\ker\bar\rho$, then $\rho(w)\in H'\cap N$. By step 1.2, $\rho(w)$ is a finite product of conjugates in $H'$ of the elements $trt^{-1}$ and their inverses. Replacing each $trt^{-1}$ by the equal element $\rho(\tau(trt^{-1}))$ from step 2.1 and applying the isomorphism $\rho^{-1}$ shows that $w$ lies in the normal closure of the words $\tau(trt^{-1})$ in $F(S)$. Therefore $\ker\bar\rho=\langle\!\langle \tau(trt^{-1}) : t\in\mathcal T,\ r\in R\rangle\!\rangle_{F(S)}$. [step 1.1, step 1.2, step 2.1]

4.1 The map $\bar\rho$ is surjective onto $H'/(H'\cap N)\cong H$, so [L5] gives $F(S)/\ker\bar\rho\cong H$. Substituting the kernel description from step 3.1 yields $H\cong\langle S\mid \tau(trt^{-1})\text{ for }t\in\mathcal T,\ r\in R\rangle$, which is the Reidemeister-Schreier presentation. [L5, step 3.1] ∎
