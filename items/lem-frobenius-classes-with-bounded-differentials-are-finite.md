---
id: lem-frobenius-classes-with-bounded-differentials-are-finite
kind: lemma
title: Bounded differentials give finite Frobenius classes on a finite-field curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-ag-separating-transcendence-basis-perfect-field
  - thm-ag-field-differentials-separable-rank
  - def-canonical-line-bundle-curve
  - def-riemann-roch-space-of-divisor
  - thm-full-riemann-roch-divisor
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves, Riemann–Roch"
      url: "https://stacks.math.columbia.edu/tag/0B5B"
      locator: "Section 53.5, finite-dimensional Riemann–Roch spaces; the differential-kernel and bounded-pole argument is supplied below."
---

## Statement

Assume AC. Let $C/k$ be a smooth proper geometrically integral curve over the finite field $k$ of $q$ elements and characteristic $p>0$, and set $K=k(C)$. Let $D$ be any divisor on $C$. Define $B_D$ as the set of classes $[f]\in K/K^p$ for which $\operatorname{div}(df)+D\ge0$, with the zero differential allowed. Then $B_D$ is finite. More precisely, for any nonzero rational differential $\omega$ on $C$,
$$\#B_D\le q^{l(D+\operatorname{div}(\omega))}.$$
In particular, if for each closed point $v$ a condition on $[f]$ implies $\operatorname{ord}_v(df)\ge-n_v$, where $D=\sum_v n_v[v]$, then the classes satisfying all those conditions form a finite set. For any finite number of such coordinates, a set admitting an injection into their product is finite. This result does not identify any fppf cohomology group with $K/K^p$ or prove that Selmer local conditions imply such differential bounds.

## Statement references

[[thm-ag-separating-transcendence-basis-perfect-field]]

[[thm-full-riemann-roch-divisor]]

## Facts & Assumptions

**Given:** AC, the finite field, curve and divisor of the Statement; any injection or local implication in the last assertions is supplied.

[F1] Over a perfect field, a finitely generated field extension has a separating transcendence basis. [[thm-ag-separating-transcendence-basis-perfect-field]]

[F2] For a separably generated field of transcendence degree one, the differential of a separating parameter is a basis of the module of relative differentials. [[thm-ag-field-differentials-separable-rank]]

[F3] A nonzero rational differential defines a finite divisor by local frames; multiplication by a rational function adds its principal divisor. The Riemann–Roch space $L(E)$ is finite-dimensional over $k$ for every divisor $E$. [[def-canonical-line-bundle-curve]] [[def-riemann-roch-space-of-divisor]] [[thm-full-riemann-roch-divisor]]

## Proof

1.1 The finite field $k$ is perfect, so [F1] gives a separating parameter $t$ and $K$ is finite separable over $k(t)$. Frobenius gives $[K^p:k(t^p)]=[K:k(t)]$; comparing the two towers above $k(t^p)$ yields $[K:K^p]=p$. Also $t\notin K^p$: otherwise a $p$th root of $t$ in $K$ would be inseparable over $k(t)$, contrary to separability. Thus $1,t,\ldots,t^{p-1}$ is a $K^p$-basis of $K$. By [F2], $dt$ is a $K$-basis of $\Omega^1_{K/k}$. Write $f=\sum_{i=0}^{p-1}a_i^p t^i$; then $df=(\sum_{i=1}^{p-1}i a_i^p t^{i-1})dt$, which vanishes exactly when all $a_i$ with $i>0$ vanish. Hence $d$ has kernel $K^p$ and induces an injection $K/K^p\hookrightarrow\Omega^1_{K/k}$. This is $k$-linear since $k$ is perfect. [F1, F2, given, algebra]

2.1 Fix a nonzero rational differential $\omega$. Every rational differential is $g\omega$ for a unique $g\in K$. By [F3], the condition $\operatorname{div}(g\omega)+D\ge0$ is equivalent to $g\in L(D+\operatorname{div}(\omega))$. Hence the differentials with this bound form a $k$-vector space of dimension $l(D+\operatorname{div}(\omega))$ and cardinality $q^{l(D+\operatorname{div}(\omega))}$. This includes the zero differential. [F3, step 1.1, algebra]

3.1 The map in step 1.1 sends $B_D$ injectively into the finite space of step 2.1, proving the bound. The valuation inequalities are precisely the coefficientwise condition on the differential divisor, and finitely many products of finite sets are finite. Thus any set with a supplied injection into such a product is finite. No implication from a Selmer local condition is used. [step 1.1, step 2.1, given, algebra] ∎

## Remarks

The differential criterion is invariant under replacing $f$ by $f+h^p$. To use it for characteristic-dividing Selmer finiteness one must still construct the relevant fppf cohomology maps and prove a uniform divisor bound from the actual local Kummer conditions; general finite-flat group schemes need additional treatment.
