---
id: thm-von-dyck
kind: theorem
title: "Von Dyck's theorem: maps of generators that satisfy the relators extend uniquely from a presented group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-presentation, def-free-group, def-normal-closure, def-generated-subgroup, thm-quotient-group-universal-property, prop-canonical-quotient-map, def-kernel-and-image-of-group-homomorphism, thm-image-subgroup-and-kernel-normal, def-group-homomorphism]
justified_by: []
aliases: [thm-von-dycks-theorem]
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ashot Minasyan, MATH6138 Geometric Group Theory, §2.2"
      url: "https://www.personal.soton.ac.uk/am4x07/rs/MATH6138-notes.pdf"
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, §1.6"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/sec_homs_tietze.html"
pipeline_run: null
---

## Statement

Let $\langle X\mid R\rangle$ be a presentation, let $H$ be a group, and let
$u:X\to H$ be a function. If the evaluation of every $r\in R$ under $u$ is
$e_H$, then there is a unique homomorphism

$$\overline u:\langle X\mid R\rangle\longrightarrow H$$

with $\overline u([x])=u(x)$ for every $x\in X$. Moreover, $\overline u$ is
surjective if and only if $u(X)$ generates $H$.

## Facts & Assumptions

**Given:** A presentation $\langle X\mid R\rangle$, a group $H$, and a function $u:X\to H$ whose evaluation sends every $r\in R$ to $e_H$.

[L1] If $N\mathrel{\trianglelefteq}G$, $f:G\to H$ is a homomorphism, and $N\subseteq\ker f$, then there is a unique homomorphism $\bar f:G/N\to H$ with $f=\bar f\circ\pi$ ([[thm-quotient-group-universal-property]]).

[L2] For every group $G$ and every function $u:X\to G$, there is a unique group homomorphism $\widehat u:F(X)\to G$ extending $u$ ([[def-free-group]]).

[L3] For a normal subgroup $N\mathrel{\trianglelefteq}G$, the canonical projection $\pi:G\to G/N$ is surjective ([[prop-canonical-quotient-map]]).

[F1] The normal closure of $R$ is the smallest normal subgroup containing $R$ ([[def-normal-closure]]).

[F2] The subgroup $\langle S\rangle$ is the smallest subgroup containing $S$ ([[def-generated-subgroup]]).

[L4] For every group homomorphism $f:G\to H$, one has $\operatorname{im}f\leq H$ and $\ker f\mathrel{\trianglelefteq}G$ ([[thm-image-subgroup-and-kernel-normal]]).

[F3] A group homomorphism preserves products, identities, and inverses, and a composite of group homomorphisms is a group homomorphism ([[def-group-homomorphism]]).

[F4] The presented group is $\langle X\mid R\rangle=F(X)/\langle\!\langle R\rangle\!\rangle_{F(X)}$ ([[def-group-presentation]]).

## Proof

**Proof technique:** constructive.

1.1 By [L2], construct the unique homomorphism $f:F(X)\to H$ whose value on each free generator $x$ is $u(x)$. [L2, given, construct]

1.2 The free generators generate $F(X)$: if $K=\langle X\rangle\le F(X)$, the map $X\to K$ extends by [L2] to $a:F(X)\to K$, and inclusion $j:K\hookrightarrow F(X)$ makes $j\circ a$ agree with $\operatorname{id}_{F(X)}$ on $X$, so uniqueness gives $j\circ a=\operatorname{id}_{F(X)}$ and $K=F(X)$. By [L3], the canonical quotient map $\pi:F(X)\to\langle X\mid R\rangle$ is surjective; since it sends $X$ to the classes $[x]$, [F2] and [F3] show that these classes generate the presented group. [L2, L3, F2, F3, construct]

2.1 The hypothesis puts every $r\in R$ in $\ker f$; [L4] makes the kernel normal, so the minimality in [F1] gives $\langle\!\langle R\rangle\!\rangle_{F(X)}\subseteq\ker f$. [F1, L4, step 1.1, given]

3.1 By [F4], apply [L1] to factor $f$ uniquely through $F(X)/\langle\!\langle R\rangle\!\rangle=\langle X\mid R\rangle$, obtaining $\overline u$ with $\overline u([x])=u(x)$. [F4, L1, step 2.1, construct]

4.1 If $h:\langle X\mid R\rangle\to H$ also has $h([x])=u(x)$, then [F3] makes $h\circ\pi:F(X)\to H$ a homomorphism extending $u$, so [L2] gives $h\circ\pi=f=\overline u\circ\pi$; uniqueness of the factorisation in [L1] gives $h=\overline u$. [L1, L2, F3, step 3.1]

5.1 By [L4], $\operatorname{im}\overline u$ is a subgroup containing every $u(x)$, so [F2] gives $\langle u(X)\rangle\subseteq\operatorname{im}\overline u$. Conversely, put $K=\langle u(X)\rangle$. By [F3], $\overline u^{-1}(K)$ is a subgroup of the domain, and it contains every $[x]$; step 1.2 and [F2] therefore give $\overline u^{-1}(K)=\langle X\mid R\rangle$. Hence $\operatorname{im}\overline u\subseteq K$, so $\operatorname{im}\overline u=\langle u(X)\rangle$. Thus $\overline u$ is surjective exactly when $u(X)$ generates $H$. [F2, L4, F3, step 1.2, step 3.1, discharge-construct] ∎
