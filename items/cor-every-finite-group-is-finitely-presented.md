---
id: cor-every-finite-group-is-finitely-presented
kind: corollary
title: "Every finite group has a finite presentation from its multiplication table"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-presentation, def-relators-relations-and-finite-presentations, thm-von-dyck, def-finite-cardinality, thm-product-rule]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
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

[F2] A set is finite when it is in bijection with a natural number ([[def-finite-cardinality]]).

## Proof

**Proof technique:** constructive.

1.1 Let $X=\{x_g:g\in G\}$ and $R=\{x_gx_hx_{gh}^{-1}:(g,h)\in G\times G\}$. The map $g\mapsto x_g$ is a bijection, so [F2] makes $X$ finite. By [L2], $G\times G$ is finite, and $R$ is the image of this finite set under $(g,h)\mapsto x_gx_hx_{gh}^{-1}$, so $R$ is finite. [F2, L2, given, construct]

2.1 The assignment $x_g\mapsto g$ sends each relator $x_gx_hx_{gh}^{-1}$ to $gh(gh)^{-1}=e_G$, so [L1] gives a homomorphism $\pi:P:=\langle X\mid R\rangle\to G$. [L1, step 1.1, construct]

2.2 In $P$ the table relators give $[x_g][x_h]=[x_{gh}]$, so $\sigma:G\to P$, $\sigma(g)=[x_g]$, is a homomorphism. [step 1.1, construct]

3.1 The composite $\pi\circ\sigma$ fixes every $g\in G$; the composite $\sigma\circ\pi$ fixes every generator class $[x_g]$, and uniqueness in [L1] makes it the identity on $P$. Thus $\pi$ and $\sigma$ are inverse isomorphisms. [L1, step 2.1, step 2.2]

4.1 Both $X$ and $R$ are finite and $P\cong G$, so [F1] shows that $G$ has the displayed finite presentation, including when $G$ is the one-element group. [F1, step 1.1, step 3.1, discharge-construct] ∎
