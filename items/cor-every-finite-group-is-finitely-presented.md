---
id: cor-every-finite-group-is-finitely-presented
kind: corollary
title: "Every finite group has a finite presentation from its multiplication table"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-subset-of-a-finite-set, thm-well-ordering-principle, def-group-presentation, def-relators-relations-and-finite-presentations, thm-von-dyck, def-finite-cardinality, thm-product-rule]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ashot Minasyan, MATH6138 Geometric Group Theory, §2.3"
      url: "https://www.personal.soton.ac.uk/am4x07/rs/MATH6138-notes.pdf"
pipeline_run: null
---

## Statement

Every finite group $G$ has the finite multiplication-table presentation

$$G\cong\left\langle x_g\ (g\in G)\ \middle|\ x_gx_hx_{gh}^{-1}\ (g,h\in G)\right\rangle.$$

## Facts & Assumptions

**Given:** A finite group $G$ and a distinct formal symbol $x_g$ for each $g\in G$.

[L1] A map $u:X\to H$ that sends every relator in $R$ to the identity extends uniquely to a homomorphism $\langle X\mid R\rangle\to H$ ([[thm-von-dyck]]).

[L2] If $A$ and $B$ are finite, then $A\times B$ is finite ([[thm-product-rule]]).

[F1] A presentation $\langle X\mid R\rangle$ is finite when both $X$ and $R$ are finite ([[def-relators-relations-and-finite-presentations]]).

[F2] A set is finite when it is in bijection with a natural number; and if $A$ is finite and $f:A\to B$ is a bijection, then $B$ is finite ([[def-finite-cardinality]]).

[F3] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

[F4] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[F5] In $\langle X\mid R\rangle$ every relator of $R$ becomes the identity ([[def-group-presentation]]).

## Proof

**Proof technique:** constructive.

1.1 Let $X=\{x_g:g\in G\}$ and $R=\{x_gx_hx_{gh}^{-1}:(g,h)\in G\times G\}$. The map $g\mapsto x_g$ is a bijection, so [F2] makes $X$ finite. By [L2], $G\times G$ is finite, so by [F2] fix a bijection $c:G\times G\to n$ for some $n\in\mathbb N$, and let $q$ send $(g,h)$ to $x_gx_hx_{gh}^{-1}$, so that $R$ is the image of $q$. Sending each $r\in R$ to the least element of the nonempty set $\{k<n:q(c^{-1}(k))=r\}$, which exists by [F4], is an injection of $R$ into $n$; it is a bijection onto its image, that image is finite by [F3], and [F2] transports finiteness back, so $R$ is finite. [F2, F3, F4, L2, given, construct]

2.1 The assignment $x_g\mapsto g$ sends each relator $x_gx_hx_{gh}^{-1}$ to $gh(gh)^{-1}=e_G$, so [L1] gives a homomorphism $\pi:P:=\langle X\mid R\rangle\to G$. [L1, step 1.1, construct]

3.1 By [F5] every relator of $R$ is the identity in $P$, so $[x_g][x_h][x_{gh}]^{-1}=e$ and hence $[x_g][x_h]=[x_{gh}]$; therefore $\sigma:G\to P$, $\sigma(g)=[x_g]$, is a homomorphism. [F5, step 1.1, step 2.1, construct]

4.1 The composite $\pi\circ\sigma$ fixes every $g\in G$; the composite $\sigma\circ\pi$ fixes every generator class $[x_g]$, and uniqueness in [L1] makes it the identity on $P$. Thus $\pi$ and $\sigma$ are inverse isomorphisms. [L1, step 2.1, step 3.1]

5.1 Both $X$ and $R$ are finite and $P\cong G$, so [F1] shows that $G$ has the displayed finite presentation, including when $G$ is the one-element group. [F1, step 1.1, step 4.1, discharge-construct] ∎
