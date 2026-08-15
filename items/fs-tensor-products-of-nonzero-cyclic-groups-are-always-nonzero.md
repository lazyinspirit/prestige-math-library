---
id: fs-tensor-products-of-nonzero-cyclic-groups-are-always-nonzero
kind: false-statement
title: "False: $\\mathbb Z/m\\otimes_{\\mathbb Z}\\mathbb Z/n$ is nonzero for all positive $m,n$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-tensor-product-with-a-quotient-ring, thm-gcd-generates-the-subgroup, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n]
aliases: []
landmark: false
short: "Cyclic tensor products can vanish"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wenqi Li, Commutative Algebra, Lecture 10"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
pipeline_run: null
---

## Statement

**False claim:** for all positive integers $m,n$, the tensor product $\mathbb Z/m\otimes_{\mathbb Z}\mathbb Z/n$ is nonzero.

In fact, with the convention that $\mathbb Z/1$ is the zero group,

$$\mathbb Z/m\otimes_{\mathbb Z}\mathbb Z/n\cong\mathbb Z/\gcd(m,n).$$

Thus $m=2$ and $n=3$ give a tensor product of two nonzero cyclic groups that is zero.

## Facts & Assumptions

**Given:** Positive integers $m,n$, and $d:=\gcd(m,n)$.

[L1] For a right module $M$ and an ideal $I$ of a commutative ring $R$, $M\otimes_RR/I\cong M/IM$ ([[cor-tensor-product-with-a-quotient-ring]]).

[L2] The subgroup $m\mathbb Z+n\mathbb Z$ of $\mathbb Z$ is $d\mathbb Z$ ([[thm-gcd-generates-the-subgroup]]).

[L3] Modular addition and multiplication give $\mathbb Z/q$ its usual quotient-ring operations ([[thm-integers-modulo-n-basic-algebra]]). For positive $q$, its classes have the unique representatives $0,\ldots,q-1$, so $|\mathbb Z/q|=q$; in particular, $\mathbb Z/1$ is zero while $\mathbb Z/2$ and $\mathbb Z/3$ are nonzero ([[thm-standard-representatives-modulo-n]]).

## Refutation

**Proof technique:** direct.

1.1 Apply [L1] to $M=\mathbb Z/m$ and $I=n\mathbb Z$ to obtain $\mathbb Z/m\otimes_{\mathbb Z}\mathbb Z/n\cong(\mathbb Z/m)/n(\mathbb Z/m)$. [L1, L3]

1.2 Define $\phi:\mathbb Z/d\to(\mathbb Z/m)/n(\mathbb Z/m)$ by $\phi([a]_d)=[a]_m+n(\mathbb Z/m)$. If $a-b\in d\mathbb Z=m\mathbb Z+n\mathbb Z$ by [L2], then $[a-b]_m$ lies in $n(\mathbb Z/m)$, so $\phi$ is well-defined. [L2, L3]

2.1 The map $\phi$ is surjective because every class in the target is represented by some $[a]_m$. If $\phi([a]_d)=0$, then $[a]_m=n[b]_m$ for some integer $b$, so $a-nb\in m\mathbb Z$ and hence $a\in m\mathbb Z+n\mathbb Z=d\mathbb Z$ by [L2]; therefore $[a]_d=0$, and $\phi$ is injective. [step 1.2, L2, L3]

3.1 Steps 1.1 and 2.1 give the displayed isomorphism. For $(m,n)=(2,3)$ one has $d=1$, so the tensor product is $\mathbb Z/1=0$ although both $\mathbb Z/2$ and $\mathbb Z/3$ are nonzero. This refutes the claim. [step 1.1, step 2.1, L3] ∎
