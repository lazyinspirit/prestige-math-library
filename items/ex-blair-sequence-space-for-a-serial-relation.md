---
id: ex-blair-sequence-space-for-a-serial-relation
kind: example
title: "Blair's sequence space for a serial relation"
status: draft
origin: pipeline
deps: [lem-discrete-sequence-spaces-are-complete-in-zf, lem-serial-relation-successor-sets-are-open-dense, thm-complete-metric-baire-principle-implies-dependent-choice-over-zf]
landmark: false
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
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
    - title: "Miller, Lecture notes on set theory without choice; Proposition 5.4(2) implies (1), p.11 (construction specialized locally)"
      url: https://people.math.wisc.edu/~awmille1/old/m873-08/ac.pdf
    - title: "Karagila, Zornian Functional Analysis, Definition 4 and Chapter 2, pp. 4–5, 8–11"
      url: https://karagila.org/wp-content/uploads/2016/10/axiom-of-choice-in-analysis.pdf
---

## Example

Work in ZF with $A=\omega$ and $i\,R\,j$ meaning $j=i+1$. On the complete
sequence space $Y=\omega^\omega$ use the reciprocal first-difference metric.
Then $U_n=\{g:(\exists m)\ g(m)=g(n)+1\}$.

Starting with the prefix $(2,0,2)$, appending $3$ at coordinate $3$ and then a
constant zero tail produces a point of $U_0$ in that cylinder. Define a second
sequence by
$f(0)=2$, $f(1)=0$, $f(2)=2$, $f(3)=1$, and $f(n)=n-1$ for $n\ge4$.
Thus $f=(2,0,2,1,3,4,5,\ldots)$ belongs to every $U_n$ but is not an adjacent
$R$-chain. Least-index extraction from coordinate $0$ gives indices
$0,4,5,6,\ldots$ and values $2,3,4,5,\ldots$.

## Facts & Assumptions

**Given:** The explicit $A,R,f$ and prefix in the example; coordinates start at zero.

[F1] The reciprocal metric on $\omega^\omega$ is complete and its finite-prefix cylinders are nonempty clopen basic sets ([[lem-discrete-sequence-spaces-are-complete-in-zf]]).

[F2] For a serial relation the sets $U_n$ encode occurrence of a successor somewhere in the range and are open dense ([[lem-serial-relation-successor-sets-are-open-dense]]).

[F3] The converse Baire-to-DC theorem uses least witness indices followed by natural recursion to extract a chain from a point in all $U_n$ ([[thm-complete-metric-baire-principle-implies-dependent-choice-over-zf]]).

## Verification

1.1 The relation is serial because for each $i\in\omega$, $i+1\in\omega$ and $i\,R\,(i+1)$. Thus the sequence-space and open-dense conclusions apply. Let $g=(2,0,2,3,0,0,\ldots)$ and $h=(2,0,2,0,0,0,\ldots)$. They extend the prefix, their first disagreement is at coordinate $3$, and $d(g,h)=1/(3+1)=1/4$. Since $g(3)=3=g(0)+1$, $g\in U_0$. [F1, F2, given]

1.2 For $f$ the successor witnesses are explicit: at $n=0$ or $n=2$, use $m=4$ since $f(4)=3=2+1$; at $n=1$, use $m=3$ since $f(3)=1=0+1$; at $n=3$, use $m=0$ since $f(0)=2=1+1$; and at every $n\ge4$, use $m=n+1$ since $f(n+1)=n=f(n)+1$. These cases cover all naturals, proving $f\in\bigcap_n U_n$. But $f(1)=0\ne3=f(0)+1$, so $f(0)\,R\,f(1)$ fails. [F2, given]

2.1 Let $q(i)=\min\{j:f(j)=f(i)+1\}$. The displayed values give $q(0)=q(2)=4$, $q(1)=3$, and $q(3)=0$: the first occurrences of $3,1,2$ are at $4,3,0$, respectively. For $i\ge4$, $f(i)+1=i\ge4$ cannot occur among coordinates $0,1,2,3$, whose values are $2,0,2,1$, and in the tail $f(j)=j-1$ it occurs only at $j=i+1$. Thus $q(i)=i+1$ for $i\ge4$. Recursing from $k(0)=0$ gives $k(1)=4$ and $k(t)=t+3$ for every $t\ge1$, because $q(t+3)=t+4$. Hence $f(k(0))=2$ and $f(k(t))=t+2$ for $t\ge1$, so successive extracted values differ by exactly one. [F3, step 1.2, algebra]

3.1 For arbitrary serial $R$, membership in every $U_n$ says exactly that each coordinate value has an $R$-successor somewhere among the sequence's values. It does not specify the next coordinate. The explicit failure at coordinates zero and one demonstrates that distinction, and the computed least-index extraction demonstrates how to obtain a chain. The backward witness $q(3)=0$ also shows why unrestricted witness indices need not increase. These computations required no CM-Baire assumption to produce this particular $f$. [F2, step 1.2, step 2.1] ∎
