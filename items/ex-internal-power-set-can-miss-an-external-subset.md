---
id: ex-internal-power-set-can-miss-an-external-subset
kind: example
title: "Power sets need not agree across transitive models"
status: draft
origin: pipeline
deps: [thm-rank-and-hierarchy-membership-absoluteness, lem-bounded-definitions-of-basic-set-operations, thm-ordinals-and-omega-are-absolute-in-transitive-models]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Freiburg, Course Notes for Set Theory and Independence Proofs (2024) — §3.5 distinction between bounded operation graphs and unbounded power-set quantification, local diagonal example"
      url: "https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf"
---


## Example

If $M$ is a countable transitive model of ZF, then externally its internal power set of $\omega$ is countable and misses an actual subset of $\omega$. This conditional example does not assert that ZF proves the existence of such an $M$.

## Facts & Assumptions

[F1] [[thm-ordinals-and-omega-are-absolute-in-transitive-models]]: In ambient ZF, ordinalhood is absolute between transitive membership domains containing the parameter. A transitive set model of ZF contains precisely the real finite ordinals as its natural numbers and has $\omega^M=\omega$. Its ordinals form an initial segment of the actual ordinals.

[F2] [[lem-bounded-definitions-of-basic-set-operations]]: The graphs of empty set, subset, unordered pair, singleton, union, intersection (with $\bigcap\varnothing=\varnothing$), difference, Kuratowski ordered pair, Cartesian product, relation domain/range, functionhood, evaluation and injection have $\Delta_0$ definitions. Thus their values agree between transitive membership structures whenever the input and output sets are in the smaller domain. This is graph agreement, not an assertion that an arbitrary transitive domain is closed under these operations.

[F3] [[thm-rank-and-hierarchy-membership-absoluteness]]: If $M\subseteq N$ are transitive models of ZF and $x\in M$, then $\operatorname{rank}^M(x)=\operatorname{rank}^N(x)$. For every $\alpha\in M\cap\operatorname{Ord}$, $(V_\alpha)^M=M\cap(V_\alpha)^N$. Equality of the two internal power sets or stage sets is not asserted.

## Verification

**Given:** A countable transitive $M\models\mathrm{ZF}$ and an external countability injection.

1.1 By F1, $\omega^M=\omega$. Fix an external injection $h:M\to\omega$. Define $e(n)$ to be the unique $x\in M$ with $h(x)=n$ when there is one, and otherwise $\varnothing\in M$. Thus $e:\omega\to M$ is onto, without any further choice. Put $A_n=e(n)$ if $e(n)\subseteq\omega$, and $A_n=\varnothing$ otherwise. [F1, given]

2.1 Let $d=\{n\in\omega:n\notin A_n\}$. For every $k$, $k\in d$ iff $k\notin A_k$, so $d\ne A_k$. If $d\in M$, surjectivity gives $e(k)=d$ for some $k$, whence $A_k=d$ because $d\subseteq\omega$, a contradiction. Therefore $d$ is a subset of the actual omega outside $M$. [step 1.1, algebra]

3.1 Let $p$ be the internal power set of omega. Transitivity gives $p\subseteq M$. Bounded subset agreement F2 and the internal power-set axiom give $p=\{x\in M:x\subseteq\omega\}$. Restricting $h$ to $p$ proves countability, and step 2.1 proves $d\notin p$. Thus the hierarchy intersection identity in F3 does not imply equality of internal and external power sets. [F2, F3, step 1.1, step 2.1] ∎

