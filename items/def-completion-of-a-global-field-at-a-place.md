---
id: def-completion-of-a-global-field-at-a-place
kind: definition
title: "Completion of a global field at a place"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-completion-of-a-number-field-at-a-prime
  - def-countable-choice
  - def-dependent-choice
  - def-equivalent-field-absolute-values
  - def-place-of-a-global-field
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-completion-of-an-absolutely-valued-field
  - thm-metric-completion-unique
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, §7.1"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Keith Conrad, Ostrowski's Theorem for Q, §§5.1–5.3"
      url: "https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf"
verification: {}
---

## Definition

Assume the Axiom of Choice, and hence Countable Choice. Let $K$ be a global
field and let $v$ be a place of $K$. Choose an absolute value $|\cdot|_v$
representing $v$, give $K$ the metric $d_v(x,y)=|x-y|_v$, and let $K_v$ be its
metric completion with the compatible complete valued-field structure. The
canonical map $\iota_v:K\to K_v$ is a dense isometric field embedding. The
completion of the place means this topological field together with $\iota_v$;
it is independent of the representative up to a unique continuous field
isomorphism commuting with the dense embeddings. At a finite number-field
place $\mathfrak p$, this agrees with the completion $K_{\mathfrak p}$ defined
from its normalized representative.

## Definition references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-place-of-a-global-field]]

[[thm-completion-of-an-absolutely-valued-field]]

[[def-completion-of-a-number-field-at-a-prime]]

## Facts & Assumptions

**Given:** The Axiom of Choice; a global field $K$; a place $v$; and
representatives $|\cdot|_1,|\cdot|_2$ of $v$.

[A1] The Axiom of Choice implies Dependent Choice and Countable Choice.
([[def-axiom-of-choice]], [[def-dependent-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]])

[F1] Equivalent nontrivial absolute values satisfy
$|x|_2=|x|_1^c$ for some $c>0$; equivalence is the relation defining $v$.
([[def-place-of-a-global-field]], [[def-equivalent-field-absolute-values]])

[F2] Under Countable Choice, an absolutely valued field has a completion that
is a complete valued field, and its canonical embedding is dense and
isometric. ([[thm-completion-of-an-absolutely-valued-field]],
[[def-countable-choice]])

[F3] A uniformly continuous map between metric spaces extends uniquely from
the source to its completion when the target is complete.
([[thm-metric-completion-unique]])

[F4] For a number field $K$ and nonzero prime ideal $\mathfrak p$, the
completion at $|x|_{\mathfrak p}=(N\mathfrak p)^{-\operatorname{ord}_{\mathfrak p}(x)}$
is the number-field completion $K_{\mathfrak p}$.
([[def-completion-of-a-number-field-at-a-prime]])

## Proof



**Given:** The data above, with $|x|_2=|x|_1^c$ from [F1].

1.1 The two metrics satisfy $d_2(x,y)=d_1(x,y)^c$. The identity map from $(K,d_1)$ to $(K,d_2)$ is uniformly continuous: for any $\epsilon>0$ take $\delta=\epsilon^{1/c}$, so $d_1(x,y)<\delta$ implies $d_2(x,y)<\epsilon$. The reverse identity is uniformly continuous by the same argument with exponent $1/c$. [F1, given, algebra]

2.1 By [F2], both completions are complete valued fields with dense embeddings $\iota_i:K\to K_i$. Applying [F3] to the two uniformly continuous identity maps extends them to unique continuous maps $T:K_1\to K_2$ and $S:K_2\to K_1$ with $T\iota_1=\iota_2$ and $S\iota_2=\iota_1$. [A1, F2, F3, step 1.1]

3.1 The maps $T$ and $S$ preserve addition, multiplication and $1$: each operation is continuous in a valued field, and on the dense embedded copy of $K$ both maps are the identity field map. For example, approximating $x,y$ by sequences from $K$ makes the images of their sums and products converge to the corresponding sums and products in $K_2$; the same argument applies to $S$. Each composition restricts to the identity on the dense image of $K$, so continuity makes $ST$ and $TS$ the identity everywhere. The uniqueness in [F3] also makes $T$ the unique continuous map commuting with the embeddings. Thus the completion does not depend on which representative of $v$ was chosen. [F2, F3, step 2.1, algebra]

4.1 For a finite number-field place, [F4] identifies the construction with the established $K_{\mathfrak p}$. This proves the specialization clause and the Definition. [F4, step 2.1, step 3.1] ∎

## Remarks

The Axiom of Choice supplies the number-field and function-field place
classifications; Countable Choice is the additional premise for the general
metric-completion construction. Positive powers change the metric but preserve
the topology, which is why the completed topological field is attached to the
place class.

## Remarks references

[[def-axiom-of-choice]]

[[def-countable-choice]]
