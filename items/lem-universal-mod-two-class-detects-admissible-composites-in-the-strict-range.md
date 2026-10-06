---
id: lem-universal-mod-two-class-detects-admissible-composites-in-the-strict-range
kind: lemma
title: "The universal mod-two class detects admissible composites in the strict range"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-eilenberg-maclane-spaces-represent-singular-cohomology
  - cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces
  - thm-steenrod-squares-are-well-defined-and-natural
  - def-axiom-of-choice
  - lem-admissible-square-action-has-a-distinct-leading-monomial
  - thm-admissible-composites-present-the-mod-two-square-algebra
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 8, printed p. 15: universal evaluation on Eilenberg–Mac Lane classes."
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 4.L, printed pp. 499–500: admissible operations and the stable range."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For $q\ge1$ let $K_q=K(\mathbb F_2,q)$ be a based CW model with its normalized fundamental class $\iota_q$. For $0\le i<q$, the map

$$\eta_{q,i}:\mathcal A^i\longrightarrow \widetilde H^{q+i}(K_q;\mathbb F_2),\qquad a\longmapsto a(\iota_q)$$

is injective. If $f:X\to K_q$ classifies $z\in\widetilde H^q(X;\mathbb F_2)$, then $f^*\eta_{q,i}(a)=a(z)$.

## Facts & Assumptions

**Given:** AC; $q\ge1$; a based CW model $K_q=K(\mathbb F_2,q)$ with normalized fundamental class $\iota_q$; an admissible-basis expansion of $a\in\mathcal A^i$; and the test space $X=(\mathbb{RP}^{i+1})^q$ with $P=x_1\cdots x_q$.

[F1] Eilenberg–Mac Lane representability supplies $\iota_q$, the classifying map of any class, and naturality of evaluation ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]]); squares are natural ([[thm-steenrod-squares-are-well-defined-and-natural]]).

[F2] Every admissible sequence of degree $i$ has excess at most $i<q$, and the leading-monomial lemma makes $a(P)\ne0$ for nonzero $a$ ([[lem-admissible-square-action-has-a-distinct-leading-monomial]]); finite products of projective spaces are finite well-pointed CW complexes.

[F3] AC is used for the algebraic and model choices ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The published representability theorem supplies $\iota_q$ and the classifying map, and square naturality gives the evaluation identity, also for finite linear combinations and composites. This is precisely the already-published universal-operation evaluation mechanism. [given, F1]

2.1 Let a nonzero $a\in\mathcal A^i$ be expanded in the admissible basis. Take $r=q$, $L=i+1$, $X=(\mathbb{RP}^{L})^q$, and $P=x_1\cdots x_q$. This is a finite well-pointed CW complex and $P$ has degree $q$. Every sequence appearing in $a$ has excess at most $i<q=r$, so the leading-monomial lemma and its same-largest-term argument give $a(P)\ne0$. A based classifying map $f:X\to K_q$ exists. If $\eta_{q,i}(a)=0$, naturality would give $0=f^*\eta_{q,i}(a)=a(P)$, a contradiction. For $i=0$, the same argument is the nonzero fundamental class test. For $q=1$ the asserted strict range contains only $i=0$. [step 1.1, F2, F3] ∎
