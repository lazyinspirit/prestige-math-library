---
dependency_level: 9
id: lem-deligne-correlation-estimate-from-cohomological-data
kind: lemma
title: "A correlation bound from explicit open-curve cohomological data"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-deligne-filtered-swan-dual-and-tensor-bound
  - lem-deligne-weight-zero-matrix-trace-and-dual-identities
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Fouvry, Kowalski and Michel, Trace functions over finite fields and applications, Dec3 2014 draft"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "Section4.1 Steps1-9; sharper conditional constant bookkeeping, global geometric inputs explicit"
---

## Statement

Let $p\ge2$ be real. Fix positive integers $m,n$, nonnegative real numbers $a_1,a_2,t_1,t_2$, and put $c_1=m+a_1+t_1$, $c_2=n+a_2+t_2$. Let $s$ be an integer with $0\le s\le a_1+a_2$, let $u\ge0$ satisfy $u\le n t_1+m t_2$, and let $\delta\in\{0,1\}$. Suppose $C,T,M\in\mathbb C$ and a finite-dimensional operator $F$ over an algebraically closed characteristic-zero field with a specified complex embedding satisfy
$$|C-T|\le mn s,\qquad T=M-\iota(\operatorname{Tr}F),$$
$$\dim F=\delta+mn(s-1)+u,\qquad |\iota(\beta)|\le\sqrt p\text{ for every eigenvalue }\beta\text{ of }F.$$
Then
$$|C-M|\le 3c_1^2c_2^2\sqrt p.$$
In the intended open-curve application, $s$ counts the omitted finite geometric points, infinity is also removed, $F$ acts on $H_c^1$, the displayed dimension equality is GOS with $H_c^0=0$ and $\dim H_c^2=\delta$, and $M$ is the actual degree-two Frobenius trace. These are hypotheses here: neither the trace formula, GOS, duality, nor a weight theorem is proved by this conditional estimate.

## Facts & Assumptions

**Given:** All scalar parameters, the finite-dimensional operator and every displayed equality and bound in the Statement.

[F1] A spectral absolute-value bound bounds the absolute trace by dimension times that bound. [[lem-deligne-weight-zero-matrix-trace-and-dual-identities]]

[F2] For specified finite ramification filtrations the tensor Swan bound is rank-weighted. [[lem-deligne-filtered-swan-dual-and-tensor-bound]]

## Proof

1.1 Since $\delta\le1\le mn$, the dimension equality gives $h:=\dim F\le mn s+u$. By [F1], $|\iota(\operatorname{Tr}F)|\le h\sqrt p$. The two given trace comparisons and $\sqrt p\ge1$ imply $$|C-M|\le mn s+h\sqrt p\le(2mn s+u)\sqrt p.$$ This includes $s=0$: the hypotheses then force a nonnegative dimension despite the negative term in the Euler expression. No vanishing claim on a proper curve has been assumed; the intended open always removes infinity. [given, F1, algebra]

2.1 The scalar Swan premise is precisely the form supplied by [F2] in a geometric application, but is given here. Using it and $m,n\ge1$ yields $$2mn s+u\le2mn(a_1+a_2)+n t_1+m t_2\le2mn(c_1-m+c_2-n).$$ The identities $(c_1-2m)^2\ge0$ and $(c_2-2n)^2\ge0$ give $$2mn(c_1-m+c_2-n)\le\tfrac12(n c_1^2+m c_2^2)\le c_1^2c_2^2,$$ because $n\le c_2^2$ and $m\le c_1^2$. Thus step 1.1 even bounds the error by $c_1^2c_2^2\sqrt p$, which implies the asserted approved constant $3$. The strict weakening to $3$ makes no claim that any of the global geometric hypotheses have been supplied. [given, F2, step 1.1, algebra] ∎
