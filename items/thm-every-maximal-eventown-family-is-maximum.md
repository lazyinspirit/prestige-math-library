---
id: thm-every-maximal-eventown-family-is-maximum
kind: theorem
title: "An Eventown family that no further set can be added to has exactly $2^{\\lfloor n/2\\rfloor}$ members"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eventown, lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form, lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field, def-standard-bilinear-form-on-a-coordinate-space, def-linear-subspace, def-incidence-vector-of-a-subset, thm-z-mod-p-is-a-field, def-linear-map, thm-rank-nullity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §2.3.2"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal{F}$ be an Eventown family on $[n]$ that is maximal under inclusion
among Eventown families on $[n]$. Then

$$\lvert\mathcal{F}\rvert=2^{\lfloor n/2\rfloor}.$$

## Facts & Assumptions

**Given:** a maximal Eventown family $\mathcal{F}$ on $[n]$.

[L1] Every Eventown family has at most $2^{\lfloor n/2\rfloor}$ members ([[thm-eventown]]).

[L2] For a subspace $U\le\mathbb{F}_2^n$, one has $\dim U^\perp=n-\dim U$ ([[lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form]]).

[L3] A $d$-dimensional vector space over $\mathbb{F}_2$ has $2^d$ elements ([[lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field]]).

[L4] If $\Phi:V\to\mathbb{F}_2$ is a nonzero linear map on a finite-dimensional $\mathbb{F}_2$-vector space, then $\dim\ker\Phi=\dim V-1$ ([[thm-rank-nullity]]).

## Proof

**Proof technique:** direct.

1.1 The family $\mathcal{F}$ contains $\varnothing$ and is closed under symmetric difference: if $A,B\in\mathcal{F}$, then $\lvert A\triangle B\rvert=\lvert A\rvert+\lvert B\rvert-2\lvert A\cap B\rvert$ is even, and for every $C\in\mathcal{F}$ the intersection $(A\triangle B)\cap C$ has even size as well; maximality therefore forces $A\triangle B\in\mathcal{F}$. [given]

2.1 Hence the set $U:=\{v_A:A\in\mathcal{F}\}$ is a subspace of $\mathbb{F}_2^n$. Every $A\in\mathcal{F}$ has even size, so the all-ones vector $\mathbf{1}$ is orthogonal to every $v_A$ and therefore lies in $U^\perp$. The Eventown hypotheses give $\langle v_A,v_B\rangle=0$ for every $A,B\in\mathcal F$; bilinearity then gives $\langle u,u'\rangle=0$ for all $u,u'\in U$. Consequently $U\subseteq H:=\{x:\langle x,x\rangle=0\}$ and $U\subseteq U^\perp$. [step 1.1, given]

3.1 If $x\in U^\perp\cap H$, then the subset $X\subseteq[n]$ with incidence vector $x$ has even size and even intersection with every member of $\mathcal{F}$, so maximality forces $X\in\mathcal{F}$ and thus $x\in U$. Therefore $U=U^\perp\cap H$. [step 2.1]

4.1 Let $d=\dim U$. If $n$ is odd, then $\mathbf{1}\notin H$ while step 2.1 gives $\mathbf{1}\in U^\perp$, so the linear map $\Phi:U^\perp\to\mathbb{F}_2$ given by $\Phi(x)=\langle x,x\rangle=\langle x,\mathbf{1}\rangle$ is nonzero and has kernel $U^\perp\cap H$. Hence step 3.1, [L2] and [L4] give $d=\dim(U^\perp\cap H)=\dim U^\perp-1=n-d-1$, so $d=(n-1)/2$. If $n$ is even, then the whole set $[n]$ has even size and even intersection with every member of $\mathcal{F}$, so maximality forces $[n]\in\mathcal{F}$ and therefore $\mathbf{1}\in U$. Every $x\in U^\perp$ then satisfies $\langle x,\mathbf{1}\rangle=0$, hence $U^\perp\subseteq H$; step 3.1 gives $U=U^\perp\cap H=U^\perp$, and [L2] yields $d=n-d$, so $d=n/2$. In both cases $d=\lfloor n/2\rfloor$. [L2, L4, step 2.1, step 3.1, algebra]

5.1 The subspace $U$ has $2^d=2^{\lfloor n/2\rfloor}$ elements by [L3], and step 1.1 identified those elements with the members of $\mathcal{F}$. The upper bound [L1] is therefore attained by every maximal Eventown family. [L1, L3, step 4.1] ∎

## Remarks

- Maximality is used only once, in step 3.1, to turn the orthogonality conditions back into actual set membership.
