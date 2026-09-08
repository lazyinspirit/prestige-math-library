---
id: lem-serial-relation-successor-sets-are-open-dense
kind: lemma
title: "Successor-occurrence sets of a serial relation are open and dense"
status: draft
origin: pipeline
deps: [def-serial-relation-dependent-choice-principle-over-zf, lem-discrete-sequence-spaces-are-complete-in-zf, def-axiom-schema-of-separation, def-indexed-family, def-metric-interior-closure-boundary]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Miller, Lecture notes on set theory without choice; Proposition 5.4(2) implies (1), p.11"
      url: https://people.math.wisc.edu/~awmille1/old/m873-08/ac.pdf
    - title: "Karagila, Zornian Functional Analysis, Definition 4 and Chapter 2, pp. 4–5, 8–11"
      url: https://karagila.org/wp-content/uploads/2016/10/axiom-of-choice-in-analysis.pdf
---

## Statement

Work in ZF. Let $A\ne\varnothing$, let $R\subseteq A\times A$ be serial,
and give $Y=A^\omega$ the reciprocal first-difference metric of
[[lem-discrete-sequence-spaces-are-complete-in-zf]]. Then
$U_n=\{f\in Y:(\exists m\in\omega)\ f(n)\,R\,f(m)\}$, for $n\in\omega$,
is a sequence of open dense sets. Witness indices $m$ are unrestricted.

## Facts & Assumptions

**Given:** The nonempty $A$, serial $R$, and metric space $Y$ in the statement.

[F1] Seriality means that every $a\in A$ has at least one $b\in A$ with $a\,R\,b$ ([[def-serial-relation-dependent-choice-principle-over-zf]]).

[F2] Finite-prefix cylinders in $Y$ are nonempty clopen sets forming a metric basis ([[lem-discrete-sequence-spaces-are-complete-in-zf]]).

[F3] Separation gives subsets defined by formulas with fixed parameters ([[def-axiom-schema-of-separation]]).

[F5] A set is dense when its closure, defined by meeting every ball, is the whole space ([[def-metric-interior-closure-boundary]]).

[F4] An indexed family is a function with the stated index set as domain ([[def-indexed-family]]).

## Proof

1.1 Each $U_n$ is a set by Separation in $Y$. The graph $\{(n,U)\in\omega\times\mathcal P(Y): (\forall f\in Y)(f\in U\leftrightarrow(\exists m\in\omega)f(n)\,R\,f(m))\}$ is also a set by Separation. For each $n$ there is exactly one such $U$, so this graph defines an indexed family with domain $\omega$. [F3, F4, given]

2.1 If $f\in U_n$, fix one witnessing $m$. Every $g$ in the cylinder $[f\restriction(\max(n,m)+1)]$ has $g(n)=f(n)$ and $g(m)=f(m)$, hence $g(n)\,R\,g(m)$ and $g\in U_n$. This is an open neighbourhood of $f$, so $U_n$ is open. [F2, step 1.1]

2.2 Fix one $a_*\in A$, and let $s:l\to A$ be any finite prefix; $l=0$ is allowed. Set $L=\max(l,n+1)$. Extend $s$ to $t:L\to A$ by assigning $a_*$ at each new coordinate. Thus $t(n)$ is defined and $L>n$. Seriality gives one $b\in A$ with $t(n)\,R\,b$. Define $g(i)=t(i)$ for $i<L$, $g(L)=b$, and $g(i)=a_*$ for $i>L$. Then $g\in[s]$ and $g(n)\,R\,g(L)$, so $g\in U_n$. This is one explicit extension for a fixed cylinder and fixed $n$, not a choice of extensions for a family of cylinders. [F1, F2, step 1.1]

3.1 Every nonempty open subset of $Y$ contains a cylinder, and hence meets $U_n$ by the preceding construction. Equivalently every ball meets $U_n$, which is exactly density by the metric closure definition. Thus every $U_n$ is open dense. For singleton $A=\{a_*\}$ seriality forces $a_*\,R\,a_*$ and the same construction gives $U_n=Y$. No infinite relation-path was assumed in proving nonemptiness of a cylinder. [F1, F2, F5, step 2.1, step 2.2] ∎
