---
id: ex-the-standard-two-dimensional-representation-of-s-three-is-irreducible
kind: example
title: "The standard $2$-dimensional representation of $S_3$ inside the permutation representation on $\\mathbb C^3$ is irreducible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-subrepresentation-and-irreducible-representation, def-trivial-regular-and-permutation-representations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 1.1.3"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Example

Let $S_3$ act on $\mathbb C^3$ by permuting the standard basis vectors
$e_1,e_2,e_3$. The line
$$L:=\mathbb C(1,1,1)$$
is invariant, and its invariant complement
$$U:=\{(x,y,z)\in \mathbb C^3:x+y+z=0\}$$
is the standard $2$-dimensional representation. This representation is
irreducible.

## Facts & Assumptions

**Given:** The permutation representation of $S_3$ on $\mathbb C^3$.

[L1] A permutation action on a finite set gives a permutation representation on the free vector space with that basis ([[def-trivial-regular-and-permutation-representations]]).

[L2] A representation is irreducible exactly when it has no proper nonzero subrepresentation ([[def-subrepresentation-and-irreducible-representation]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the action of $S_3$ on $\{e_1,e_2,e_3\}$ extends to $\mathbb C^3$ by permuting coordinates. The vector $(1,1,1)$ is fixed by every permutation, so $L$ is invariant. The coordinate sum $x+y+z$ is also permutation-invariant, so $U$ is invariant and $\mathbb C^3=L \oplus U$. [L1, given]

2.1 Suppose $W \subseteq U$ is a nonzero invariant line, and choose $0 \ne v=(a,b,c) \in W$. Because $W$ is invariant under the transposition $\tau=(12)$, one has $\tau(v)=\lambda v$ for some scalar $\lambda$, and $\tau^2=1$ forces $\lambda=\pm 1$. If $\lambda=1$, then $a=b$ and the relation $a+b+c=0$ gives $v=a(1,1,-2)$. If $\lambda=-1$, then $a=-b$ and $c=0$, so $v=a(1,-1,0)$. [step 1.1, L2, given, algebra]

3.1 The $3$-cycle $\sigma=(123)$ sends $(1,1,-2)$ to $(1,-2,1)$ and $(1,-1,0)$ to $(0,1,-1)$, and neither image is a scalar multiple of the original vector. Thus neither of the two possibilities from step 2.1 can span an invariant line. So $U$ has no proper nonzero invariant line, and by [L2] it is irreducible. [step 2.1, L2, given, algebra] ∎
