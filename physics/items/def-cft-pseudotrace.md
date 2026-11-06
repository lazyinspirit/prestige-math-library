---
id: def-cft-pseudotrace
kind: definition
title: Hattori–Stallings pseudo-trace
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps: []
justified_by:
  - lem-cft-pseudotrace-basis-independent
domain: mathematics
library: mathematics
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras II: Convergence of Sewing and Higher Genus Pseudo-q-traces"
      url: https://arxiv.org/pdf/2411.07707v4
      locator: "§4.4.1, PDF pp. 61–62, for the pseudo-trace on finite projective weight truncations."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $A$ be a unital associative $\mathbb C$-algebra, let $[A,A]\subseteq A$ be the linear span of commutators $ab-ba$, and let $\omega:A\to\mathbb C$ be a symmetric linear functional, meaning $\omega(ab)=\omega(ba)$ for all $a,b\in A$. A right $A$-module $P$ is **finite projective** here if there are an integer $n\geq0$ and an idempotent $e\in M_n(A)$ with $P\cong eA^n$.

A **finite dual basis** for $P$ is a finite list $p_i\in P$, $\phi_i\in\mathrm{Hom}_A(P,A)$ satisfying $p=\sum_i p_i\phi_i(p)$ for every $p\in P$; a finite projective module has such a list. For $T\in\mathrm{End}_A(P)$ define the candidate pseudo-trace value set
$$
\mathsf{Tr}_{\omega,A}(T)=\left\{\omega\!\left(\sum_i\phi_i(Tp_i)\right): (p_i,\phi_i)_i\text{ is a finite dual basis for }P\right\}\subseteq\mathbb C.
$$
The basis-independence lemma for this definition proves that this set is a singleton; its unique value is denoted $\mathrm{Tr}_{\omega,A}(T)$ and called the Hattori–Stallings pseudo-trace.

## Definition references

[[lem-cft-pseudotrace-basis-independent]]

## Remarks

The asserted existence of a finite dual basis follows directly from the chosen definition of finite projective. If $P=eA^n$ for an idempotent $e\in M_n(A)$, regard $A^n$ as column vectors, set $p_i=ee_i$, and let $\phi_i$ be the $i$th coordinate restricted to $eA^n$. For $p\in eA^n$, $p=ep=\sum_i ee_i\,\phi_i(p)=\sum_i p_i\phi_i(p)$. An isomorphism $P\cong eA^n$ transports this finite dual basis to $P$. The basis-independence lemma then shows the candidate value set in the Definition is a singleton.
