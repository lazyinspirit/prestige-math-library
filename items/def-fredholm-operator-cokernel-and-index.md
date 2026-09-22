---
id: def-fredholm-operator-cokernel-and-index
kind: definition
title: Fredholm operator cokernel and index
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-bounded-linear-operator, def-banach-space, def-quotient-vector-space-coset-notation, def-quotient-seminorm, def-linear-subspace, def-linear-basis, def-dimension, def-integers, def-int-operations, thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5 p.184, definition of a Fredholm operator and its index"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.3 p.190, Definition 4.31"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Definition

Let $X$ and $Y$ be Banach spaces over the same scalar field $\mathbb F$
([[def-banach-space]]) and let $T:X\to Y$ be a bounded linear operator
([[def-bounded-linear-operator]]). Then $T$ is a **Fredholm operator** when
all three of the following hold:

1. $\ker T$ is finite dimensional, that is, admits an ordered basis of finite
   length ([[def-linear-basis]], [[def-dimension]]);
2. $\operatorname{ran}T$ is a closed subspace of $Y$
   ([[def-linear-subspace]]);
3. the **cokernel** $\operatorname{coker}T:=Y/\operatorname{ran}T$ is finite
   dimensional ([[def-quotient-vector-space-coset-notation]],
   [[def-dimension]]).

Here the cokernel is the algebraic quotient vector space; it also carries the
quotient seminorm of [[def-quotient-seminorm]], which is a norm when the range
is closed ([[thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed]]), but the dimension in clause 3 is the vector-space dimension of the
quotient and does not depend on that norm.

For a Fredholm operator $T$ the **index** of $T$ is the integer

$$\operatorname{ind}T:=\dim_{\mathbb F}\ker T-\dim_{\mathbb F}\operatorname{coker}T$$

Here subtraction is in $\mathbb Z$, not in $\mathbb N$: write $a=\dim_{\mathbb F}\ker T$ and $b=\dim_{\mathbb F}\operatorname{coker}T$ and identify a natural $n$ with $[(n,0)]$. Precisely,

$$\operatorname{ind}T=[(a,b)]=[(a,0)]+(-[(b,0)])\in\mathbb Z$$

by [[def-integers]] and [[def-int-operations]]. Both dimensions are natural numbers, so this class is defined even when $a<b$; the index may be positive, negative or zero.

**Two remarks on the definition.** The closedness of the range is listed
explicitly as a hypothesis of the definition rather than extracted from the
other clauses. And no property of the index is asserted here; additivity,
local constancy and invariance under compact perturbations are separate
theorems.
