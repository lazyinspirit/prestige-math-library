---
id: thm-finite-dimensional-orthogonal-decomposition
kind: theorem
title: "For a subspace $W$ of a finite-dimensional inner product space, $V=W\\oplus W^\\perp$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-orthogonal-complement, thm-gram-schmidt-orthonormalisation, thm-dimension-of-a-linear-subspace, def-internal-direct-sum]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., result 6.49'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, §5.3.3'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

If $W$ is a subspace of a finite-dimensional real or complex inner product space $V$, then

$$V=W\oplus W^\perp.$$

Thus every $v\in V$ has unique vectors $w\in W$ and $z\in W^\perp$ with $v=w+z$.

## Facts & Assumptions

**Given:** A subspace $W$ of a finite-dimensional inner product space $V$.

[L1] Every subspace of a finite-dimensional space has a finite basis that can be extended to a basis of the ambient space ([[thm-dimension-of-a-linear-subspace]]).

[L2] Gram–Schmidt preserves the span of every initial segment of an independent list ([[thm-gram-schmidt-orthonormalisation]]).

[L3] The orthogonal complement consists of vectors pairing to zero with every vector of the subspace ([[def-orthogonal-complement]]).

[L4] For two summands, $V=W\oplus U$ means $W+U=V$ and $W\cap U=\{0_V\}$ ([[def-internal-direct-sum]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a basis $(w_0,\ldots,w_{s-1})$ of $W$ and extend it to a basis $(w_0,\ldots,w_{s-1},v_s,\ldots,v_{n-1})$ of $V$. Empty initial or terminal blocks cover $W=0$ and $W=V$. [L1, choose]

2.1 Apply [L2] to this basis, obtaining an orthonormal basis $(e_0,\ldots,e_{n-1})$ with $W=\operatorname{span}(e_0,\ldots,e_{s-1})$. Put $U=\operatorname{span}(e_s,\ldots,e_{n-1})$. Orthonormality and [L3] give $U\subseteq W^\perp$. [step 1.1, L2, L3]

3.1 The orthonormal basis splits every vector as a sum of a vector in $W$ and a vector in $U$, so $V=W+U\subseteq W+W^\perp$. The reverse inclusion is automatic. [step 2.1]

4.1 If $x\in W\cap W^\perp$, then [L3] gives $\langle x,x\rangle=0$, and positive definiteness gives $x=0$. With step 3.1 this is exactly the pair of conditions in [L4], so $V=W\oplus W^\perp$. The decomposition of each $x$ is unique: if $w+u=w'+u'$ with $w,w'\in W$ and $u,u'\in W^\perp$, then $w-w'=u'-u$ lies in $W\cap W^\perp=\{0_V\}$, so $w=w'$ and $u=u'$. [step 3.1, L3, L4, algebra] ∎
