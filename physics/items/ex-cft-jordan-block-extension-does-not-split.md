---
id: ex-cft-jordan-block-extension-does-not-split
kind: example
title: A two-dimensional Jordan-block extension does not split
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Fix $h\in\mathbb C$ and let $V=\mathbb Ce_1\oplus\mathbb Ce_2$. Define $Ne_1=0$, $Ne_2=e_1$ and $T=hI_V+N$. Give $V$ the $\mathbb C[t]$-module action $f(t)\cdot v=f(T)v$, where $f(T)=\sum_{j=0}^m a_jT^j$ for $f(t)=\sum_{j=0}^m a_jt^j$. Give $K=\mathbb Ce_1$ and $C_h=\mathbb C$ the scalar actions $f(t)\cdot ae_1=f(h)ae_1$ and $f(t)\cdot b=f(h)b$, respectively. With $i:K\to V$ the inclusion and $q:V\to C_h$ given by $q(ae_1+be_2)=b$, the sequence $0\to K\xrightarrow{i}V\xrightarrow{q}C_h\to0$ is exact and does not split as a sequence of $\mathbb C[t]$-modules. Equivalently, $K$ has no $T$-invariant vector-space complement in $V$.

## Facts & Assumptions

**Given:** The displayed vector spaces, operators, polynomial actions and linear maps. Exactness means that the maps are module homomorphisms, $i$ is injective, $q$ is surjective and $\operatorname{im}i=\ker q$. Splitting means that a module homomorphism $s:C_h\to V$ satisfies $q\circ s=I_{C_h}$.

## Verification

1.1 Polynomial evaluation defines a unital module action: $1(T)=I_V$, evaluation is complex-linear, and $(fg)(T)=f(T)g(T)$ because $T^jT^k=T^{j+k}$ and both polynomial sums are finite. Scalar evaluation at $h$ gives the same properties on $K$ and $C_h$. Since $T e_1=he_1$, one has $f(T)e_1=f(h)e_1$, so $K$ is invariant and $i$ is a module homomorphism. [given, algebra]

2.1 For $v=ae_1+be_2$ one has $Tv=(ha+b)e_1+hbe_2$, hence $q(Tv)=h q(v)$. Iteration and linearity give $q(f(T)v)=f(h)q(v)$, so $q$ is a module homomorphism. Inclusion is injective, $q(e_2)=1$ proves surjectivity, and $q(v)=0$ holds exactly when $b=0$, that is, when $v\in K=\operatorname{im}i$. Thus the sequence is exact. [given, step 1.1, algebra]

3.1 Every vector-space complement $U$ to $K$ is a line spanned by $u=ae_1+be_2$ with $b\ne0$. If $U$ were $T$-invariant, it would be invariant under $N=T-hI_V$. But $Nu=be_1$ is a nonzero element of $K$, whereas $Nu\in U$ would force $Nu\in K\cap U=0$. Hence there is no $T$-invariant complement. Conversely, a $T$-invariant complement is invariant under every polynomial in $T$, and $q|_U$ would be a bijective module map; its inverse would split the sequence. [given, step 2.1, algebra]

4.1 If a splitting $s$ existed, then $s(1)=ae_1+e_2$ because $q(s(1))=1$. Module-linearity would imply $Ts(1)=s(t\cdot1)=h s(1)$, while direct computation gives $(T-hI_V)s(1)=e_1\ne0$. This contradiction proves nonsplitting, consistently with the complement obstruction. [given, step 2.1, step 3.1, algebra] ∎

## Remarks

This generated finite-dimensional example isolates an elementary obstruction from an actual invariant Jordan block. Constructing a module for a vertex algebra such as the triplet $W(p)$ additionally requires state fields, lower truncation, the vacuum axiom and the full module Jacobi identity, together with any claimed grading and exact-sequence identifications. None of those additional constructions follows from this example.
