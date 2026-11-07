---
id: lem-kolesnik-a-endpoint-absorption-criterion
kind: lemma
title: "Sharp endpoint criterion for the numerical A-process bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [lem-kolesnik-process-substitution-and-constrained-balancing]
justified_by: []
proof_strategy: direct
axiom_use: "Only explicit real inequalities and a finite case distinction are used."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "G. A. Kolesnik, On the method of exponent pairs"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/104633"
      locator: "Printed p. 142, numerical A-process expression and minimization; the endpoint criterion here is a local derivation, not a quoted source theorem"
verification: {}
---

## Statement

Let $N\ge1$, $B>0$, $p\ge1$, and $0<l\le u$. Define
$$q_*=(N^2/B)^{1/p},\qquad T=N/\sqrt{q_*},\qquad H(q)=\sqrt{N^2/q+Bq^{p-1}},$$
$$M=\max\{T,N/\sqrt u,\sqrt B\,l^{(p-1)/2}\},\qquad V=\min\{N,\inf_{l\le q\le u}H(q)\}.$$
Then
$$\min\{N,M\}\le V\le\sqrt2\min\{N,M\}.$$
In particular, put
$$R=\min\left\{\sqrt{q_*},\max\left\{1,\sqrt{q_*/u},(l/q_*)^{(p-1)/2}\right\}\right\}.$$
The ratio satisfies $R\le V/T\le\sqrt2 R$. Consequently, on any family of these numerical data, $V=O(T)$ uniformly if and only if $R$ is bounded uniformly. This describes exactly when the trivial bound and minimization of this two-term expression suffice, up to an absolute factor; it is not a necessary condition for a separate estimate for an actual exponential sum.

For $q_*\ge1$ and $C\ge1$, the condition $R\le C$ is equivalent to
$$q_*\le C^2\quad\text{or}\quad\bigl(q_*\le C^2u\ \text{and}\ (l/q_*)^{p-1}\le C^2\bigr).$$
For $q_*<1$, the trivial bound already gives $V<T$. For $p=1$ the lower-endpoint factor is identically $1$.

Suppose, in addition, that $S\ge0$, $S\le C_0N$, and for every $\eta>0$ there is $C_\eta$, independent of $q,N,B,l,u$, such that
$$S^2\le C_\eta N^\eta\bigl(N^2/q+Bq^{p-1}\bigr)\qquad(l\le q\le u).$$
Then $S\le K_\varepsilon N^\varepsilon V$ for every $\varepsilon>0$. A uniform bound on $R$ therefore gives $S\le K'_\varepsilon N^\varepsilon T$. Neither the loss factor nor the numerical criterion asserts ordinary exponent-tuple membership or admissibility of any transformed phase or scale.

## Statement references

[[lem-kolesnik-process-substitution-and-constrained-balancing]]

[Kolesnik, printed p. 142, final A-process expression](https://www.impan.pl/shop/publication/transaction/download/product/104633)

## Facts & Assumptions

**Given:** The real numerical data and, for the final assertion, the uniform inequalities in the Statement. Uniform big-O constants refer to the entire family under consideration.

[F1] The numerical A substitution has $p=s/m\ge1$, $q_*=Q_*$ and balanced monomial $T=N/\sqrt{Q_*}$ with the notation of the constrained-balancing lemma. That lemma supplies an upper bound with both endpoints retained; it does not supply the endpoint absorption proved here. [[lem-kolesnik-process-substitution-and-constrained-balancing]]

## Proof

1.1 The definitions imply $Bq_*^{p-1}=N^2/q_*=T^2$. If $q\le q_*$ then $N^2/q\ge T^2$; if $q\ge q_*$ then $Bq^{p-1}\ge T^2$ because $p-1\ge0$. Thus $H(q)\ge T$ for every $q>0$. For $l\le q\le u$ its first term also gives $H(q)\ge N/\sqrt u$, and its second gives $H(q)\ge\sqrt B\,l^{(p-1)/2}$. Therefore $H(q)\ge M$ throughout the interval, so $V\ge\min\{N,M\}$. This is the same two-term numerical expression as in [F1]. [given, F1, algebra]

2.1 Clip $q_*$ to $[l,u]$, calling the resulting point $q_c$. If $q_*<l$, then $q_c=l$, $N^2/l\le T^2$, and $Bl^{p-1}\le M^2$. If $q_*>u$, then $q_c=u$, $Bu^{p-1}\le T^2$, and $N^2/u\le M^2$. Otherwise $q_c=q_*$ and both terms are $T^2$. In every case $H(q_c)\le\sqrt2 M$. Hence $V\le\min\{N,\sqrt2 M\}\le\sqrt2\min\{N,M\}$. No assertion that $q_*$ is the exact minimizer is required; for $p=1$, $H$ is decreasing. [given, step 1.1, choose, algebra]

3.1 Division by $T>0$ gives $N/T=\sqrt{q_*}$, $(N/\sqrt u)/T=\sqrt{q_*/u}$, and $(\sqrt B\,l^{(p-1)/2})/T=(l/q_*)^{(p-1)/2}$. Therefore $\min\{N,M\}/T=R$, proving the ratio bounds and the equivalence of uniform boundedness of $V/T$ and $R$. [step 1.1, step 2.1, algebra]

4.1 For $q_*\ge1$, write $R=\min\{a,\max\{1,b,c\}\}$ with $a=\sqrt{q_*}$, $b=\sqrt{q_*/u}$ and $c=(l/q_*)^{(p-1)/2}$. For $C\ge1$, $R\le C$ means $a\le C$ or both $b\le C$ and $c\le C$. Squaring these inequalities gives the stated alternative. When $q_*<1$, $V\le N<T$. If $p=1$, the exponent in $c$ is zero, proving the lower-endpoint assertion including this boundary case. [given, step 3.1, algebra]

5.1 Fix $\varepsilon>0$ and use the assumed square estimate with $\eta=2\varepsilon$. Taking square roots and then the infimum over the nonempty interval gives $S\le\sqrt{C_{2\varepsilon}}N^\varepsilon\inf H$. Together with $S\le C_0N$ and $N^\varepsilon\ge1$, this implies $S\le\max\{C_0,\sqrt{C_{2\varepsilon}}\}N^\varepsilon V$. The ratio bounds then give the final implication when $R$ is uniformly bounded. The loss remains explicitly present. [given, step 3.1, algebra] ∎

## Source notes

The complete printed p. 142 scan was read, including the B substitution and the A expression followed by minimization. The source URL returned HTTP 403 in this session. No reading of the full paper, proof acceptance, or derivation of the source process inequalities is claimed. The lower bound for $V$ concerns the strength of this numerical bound and the trivial cap, not a lower bound for any exponential sum. Applying the criterion to the held A-process theorem still requires an actual admitted interval and a proof that its tuple and scale data make $R$ uniformly bounded.
