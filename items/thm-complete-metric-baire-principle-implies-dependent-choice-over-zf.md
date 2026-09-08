---
id: thm-complete-metric-baire-principle-implies-dependent-choice-over-zf
kind: theorem
title: "The complete-metric Baire principle implies Dependent Choice over ZF"
status: draft
origin: pipeline
deps: [def-complete-metric-baire-principle-over-zf, lem-discrete-sequence-spaces-are-complete-in-zf, lem-serial-relation-successor-sets-are-open-dense, lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf, thm-well-ordering-principle, thm-recursion, def-axiom-schema-of-separation]
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

In ZF, the [[def-complete-metric-baire-principle-over-zf|complete-metric Baire principle]] implies both starting-point-free and prescribed-start Dependent
Choice. No monotonicity of the witness indices or distinctness of the resulting
chain values is asserted.

More explicitly, for any $f\in\bigcap_i U_i$, where
$U_i=\{f:(\exists j\in\omega)f(i)\,R\,f(j)\}$, the least-index map
$q(i)=\min\{j\in\omega:f(i)\,R\,f(j)\}$ exists. Recursion
$k(0)=0$, $k(n+1)=q(k(n))$ gives the chain $a(n)=f(k(n))$.

## Facts & Assumptions

**Given:** CM-Baire and an arbitrary serial relation $R$ on a nonempty set $A$.

[F1] Under CM-Baire, every sequence of open dense sets in a complete metric space has dense intersection ([[def-complete-metric-baire-principle-over-zf]]).

[F2] The reciprocal first-difference metric makes $A^\omega$ nonempty and complete in ZF ([[lem-discrete-sequence-spaces-are-complete-in-zf]]).

[F3] The sets $U_i=\{f:(\exists j\in\omega)f(i)\,R\,f(j)\}$ form a sequence of open dense subsets of that space ([[lem-serial-relation-successor-sets-are-open-dense]]).

[F4] A nonempty subset of $\omega$ has a least element ([[thm-well-ordering-principle]]); Separation forms sets defined inside a given set ([[def-axiom-schema-of-separation]]).

[F5] For a self-map $q$ of a set and a specified initial element, recursion on the naturals gives a function with successor rule $k(n+1)=q(k(n))$ ([[thm-recursion]]).

[F6] Starting-point-free DC implies prescribed-start DC in ZF ([[lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf]]).

## Proof

1.1 Since $A\ne\varnothing$, $Y=A^\omega$ with its specified metric is nonempty complete, and $(U_i)$ is open dense. Apply CM-Baire to this space and family: $D=\bigcap_i U_i$ is dense in $Y$. If $D$ were empty, every ball about a point of the nonempty space $Y$ would miss it, contradicting density. Thus fix a single $f\in D$. [F1, F2, F3, given]

2.1 For each $i\in\omega$, Separation gives $W_i=\{j\in\omega:f(i)\,R\,f(j)\}$. Since $f\in U_i$, this set is nonempty and has a unique least element $q(i)$. The graph of $q$ is the subset of $\omega\times\omega$ where $j\in W_i$ and no smaller natural belongs to $W_i$; hence Separation makes $q:\omega\to\omega$ a set function. In particular $f(i)\,R\,f(q(i))$ for every $i$. This defines successors uniquely from the one fixed $f$. [F4, step 1.1]

3.1 Apply recursion with carrier $\omega$, initial element $0$ and the self-map $q$. It yields $k:\omega\to\omega$ with $k(0)=0$ and $k(n+1)=q(k(n))$. The composite $a(n)=f(k(n))$ has graph obtained by Separation in $\omega\times A$. For every $n$, the preceding relation at $i=k(n)$ says $a(n)=f(k(n))\,R\,f(q(k(n)))=f(k(n+1))=a(n+1)$. Thus $a$ is an $R$-chain. [F4, F5, step 2.1]

4.1 The construction works for every nonempty $A$ and every serial $R$, so gives the global starting-point-free DC principle. Its ZF equivalence with the prescribed-start principle gives the latter as well. The minimum $q(i)$ can be smaller or larger than $i$, so no increasing-index or distinct-value assumption entered the argument; singleton carriers and self-loops are allowed. [F6, step 1.1, step 3.1] ∎
