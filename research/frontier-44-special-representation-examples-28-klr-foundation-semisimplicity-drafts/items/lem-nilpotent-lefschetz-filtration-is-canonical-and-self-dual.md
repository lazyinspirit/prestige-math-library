---
id: lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual
kind: lemma
title: "The nilpotent Lefschetz filtration is canonical and self-dual"
status: draft
origin: session
deps:
  - lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition
  - thm-nilpotent-jordan-string-basis
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "de Cataldo and Migliorini, The Hodge theory of algebraic maps, section 4.5, formulas (22)–(27)"
      url: https://arxiv.org/pdf/math/0306030
---

## Statement

Let $N$ be a nilpotent endomorphism of a finite-dimensional vector space $H$. There is a unique increasing finite filtration $W_i$ satisfying $NW_i\subset W_{i-2}$ and $N^r:\operatorname{Gr}^W_rH\to\operatorname{Gr}^W_{-r}H$ an isomorphism for every $r\ge0$. It is given intrinsically by
$$W_i=\sum_{a,b\ge0,\ a-b=i}\ker N^{a+1}\cap\operatorname{im}N^b.$$
If $S$ is a nondegenerate bilinear form with $S(Nv,w)+S(v,Nw)=0$, then $(W_i)^\perp=W_{-i-1}$. Consequently $S$ induces a perfect pairing between $\operatorname{Gr}^W_iH$ and $\operatorname{Gr}^W_{-i}H$, and for $i\ge0$ the form $S_i([v],[w])=S(v,N^iw)$ on $\operatorname{Gr}^W_iH$ is well-defined and nondegenerate.

## Facts & Assumptions

**Given:** the finite-dimensional space, nilpotent operator and optional bilinear form of the Statement.

[F1] A nilpotent operator has a finite Jordan-chain basis. Within a chain of length $l$ choose vectors $v_0,\ldots,v_{l-1}$ with $Nv_t=v_{t-1}$ and $Nv_0=0$. This is [[thm-nilpotent-jordan-string-basis]], whose full actual proof constructs the strings from the image filtration.

[F2] A finite graded family with hard Lefschetz has its primitive decomposition ([[lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition]]). Applied with degrees reversed, this gives $N^q:\operatorname{Gr}_{t+2q}^W\to\operatorname{Gr}_t^W$ surjective whenever $t\le-q$.

## Proof

**Given:** the data in the Statement.

1.1 On a Jordan chain from [F1], assign $v_t$ weight $2t-l+1$. The resulting filtration satisfies the two required conditions, since $N$ lowers this weight by two and pairs the chain weights symmetrically. The term $\ker N^{a+1}\cap\operatorname{im}N^b$ in that chain is spanned by the vectors with $t\le\min(a,l-1-b)$. Under $a-b=i$, the maximum such index is $\lfloor(i+l-1)/2\rfloor$, with negative values giving zero and values beyond $l-1$ giving the full chain. This is exactly the span of vectors of weight at most $i$. Kernels and images decompose chainwise, proving the intrinsic formula, independent of the chosen Jordan basis. [F1, given, algebra]

2.1 Suppose another filtration has the two required properties. Apply [F2] to its graded objects and choose a finite basis of each primitive graded summand of weight $r\ge0$. For a primitive vector, lift it to $v\in W_r$. Its primitive condition puts $N^{r+1}v$ in $W_{-r-3}$. The surjectivity in [F2], lifted successively through the finite filtration, makes $N^{r+1}:W_{r-1}\to W_{-r-3}$ surjective: at weight $t\le-r-3$ use a preimage at weight $t+2r+2\le r-1$ and then correct the lower-weight error, terminating at the bottom of the filtration. Subtract such a preimage from $v$. It now obeys $N^{r+1}v=0$ without changing its primitive graded class. Its string $v,Nv,\ldots,N^rv$ lifts the corresponding graded primitive string. All these finite strings form a basis, because their associated graded classes do, and the filtration is exactly their span by weights. It is therefore the Jordan-chain filtration of step 1.1. This proves uniqueness. [F2, step 1.1, construct]

3.1 For the bilinear assertion define $W'_i=(W_{-i-1})^\perp$. The infinitesimal skew-adjoint identity gives $NW'_i\subset W'_{i-2}$: test $Nv$ against $w\in W_{-i+1}$ and use $Nw\in W_{-i-1}$. The graded objects of $W'$ are dual to those of $W$ in opposite degrees, and the maps $N^r$ on them are, up to the unit sign $(-1)^r$, the duals of the hard Lefschetz maps for $W$. Thus $W'$ has the same hard Lefschetz property and uniqueness from step 2.1 gives $W'=W$. The orthogonal complement identity follows. [step 2.1, algebra]

4.1 This identity makes $S$ descend to a perfect pairing between opposite graded pieces: their radicals are exactly the lower filtration terms. Compose that pairing with $N^i:\operatorname{Gr}_i^W\to\operatorname{Gr}_{-i}^W$, an isomorphism, to obtain the displayed nondegenerate form $S_i$. Independence of representatives follows because a representative error in $W_{i-1}$ is orthogonal to $W_{-i}$, and $N^i$ takes an error in $W_{i-1}$ into $W_{-i-1}$, orthogonal to $W_i$. [step 1.1, step 3.1, algebra] ∎

## Proof contract boundary

All constructions are finite-dimensional and require only finite choices of bases. Neither mixed-Hodge weight theory nor a relative-weight-filtration theorem is an input. This is an ordinary nilpotent linear-algebra statement used to identify the perverse filtration once graded hard Lefschetz is proved.
