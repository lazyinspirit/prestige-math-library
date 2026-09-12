---
id: "lem-finite-support-constructibility-absoluteness"
kind: "lemma"
title: "Finite support for constructibility absoluteness"
deps: ["thm-constructibility-is-absolute-and-l-is-minimal", "lem-derivation-finite-support-and-concatenation", "def-countable-transitive-model-and-fragment-transfer"]
justified_by: []
forward_refs: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Kunen, Set Theory, Chapter VI Theorem 3.8 pp. 171–172 and Chapter VII section 1 pp. 184–186"
      url: "https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Set/Kunen1980SetTheory-AnIntroductionToIndependenceProofs.pdf"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

There is a fixed finite fragment $K_L\subseteq\mathrm{ZF}$ such that every
nonempty transitive set $M$ satisfying $K_L$ has a limit ordinal
$\delta_M=\operatorname{Ord}\cap M$ and

$$L^M=L_{\delta_M}\subseteq M.$$

Consequently, if $M\subseteq N$ are nonempty transitive $K_L$-models with
the same ordinals, then $L^M=L^N\subseteq M$. In particular, every
$x\in N\setminus M$ witnesses $N\models V\ne L$.

Here $K_L$ is a finite list of actual ZF axiom sentences and schema instances,
not the assertion that either set models all of ZF.

## Facts & Assumptions

**Given:** The fixed first-order presentation of ZF and the fixed formulas for
ordinals, constructible histories and membership in $L$.

[F1] [[thm-constructibility-is-absolute-and-l-is-minimal]] proves the
comparison of internal and external constructible histories for transitive ZF
models by one fixed induction using absoluteness of the definable-subset
operation.

[F2] [[lem-derivation-finite-support-and-concatenation]] extracts the finitely
many nonlogical axiom occurrences from any fixed formal derivation and permits
weakening by further axioms.

[F3] [[def-countable-transitive-model-and-fragment-transfer]] defines what it
means for a transitive set to satisfy a fixed finite sentence fragment; no
full-theory satisfaction predicate is implicit.

## Proof

1.1 Expand the proof used in F1 into the fixed first-order formulas named in the Given. Its induction says simultaneously that, for every internal ordinal $\alpha$, the internally constructed history through $\alpha$ is the actual history and hence $(L_\alpha)^M=L_\alpha$. At a successor, finite satisfaction over the transitive set $L_\beta$ is absolute, so the two definable-subset operations agree. At a limit, transitivity gives exactly the actual earlier indices and union gives exactly their union. The proof uses only finitely many instances of Separation, Replacement and Foundation, together with finitely many of the remaining ZF axioms. By F2, let $K_0$ be the exact finite set of ZF axiom sentences occurring in this expanded derivation. Thus the comparison holds for every transitive $K_0$-model; no occurrence of the hypothesis "model of ZF" remains unexpanded. [F1, F2, F3, induction]

2.1 Add to $K_0$ the finitely many axiom occurrences in the fixed proofs that Infinity supplies an internal nonzero limit ordinal, that the ordinals of a nonempty transitive set form an ordinal with no largest member, and that the fixed formula $x\in L$ is equivalent internally to membership in some level of its hierarchy. Call the resulting finite fragment $K_L$. If $M$ is a transitive $K_L$-model and $\delta_M=\operatorname{Ord}\cap M$, these fixed proofs make $\delta_M$ a nonzero limit ordinal and give $L^M=\bigcup_{\alpha<\delta_M}(L_\alpha)^M$. By step 1.1 every summand is the actual $L_\alpha$. Each such level is an element of $M$, and transitivity puts all of its elements in $M$. Therefore $L^M=L_{\delta_M}\subseteq M$. [F2, F3, step 1.1]

3.1 Suppose $M\subseteq N$ are transitive $K_L$-models with the same ordinals. Then $\delta_M=\delta_N$, so step 2.1 gives $L^M=L_{\delta_M}=L_{\delta_N}=L^N\subseteq M$. [step 2.1]

4.1 If $x\in N\setminus M$, step 3.1 gives $x\notin L^N$. Since $x$ is an element of the universe of $N$ but is not internally constructible there, $N\models V\ne L$. This last implication uses the fixed internal formula for $x\in L$ and does not compare $L^N$ with constructible levels above the common ordinal height. [step 3.1] ∎
