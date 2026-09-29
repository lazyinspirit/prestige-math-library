---
id: cor-intermediate-cohomology-o-d-projective-space-vanishes
kind: corollary
title: "Intermediate cohomology of projective twists vanishes"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-commutative-ring
  - def-relative-projective-space-standard-charts
  - def-twisting-sheaf-proj
  - thm-cohomology-projective-space-twisting-sheaves
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Lemma 30.8.2 (Tag 01XV)"
      url: "https://stacks.math.columbia.edu/tag/01XV"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Section 19.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice as inherited from the cited theorem
([[def-axiom-of-choice]]). Let $A$ be a commutative ring with $1$
([[def-commutative-ring]]), let $n\ge0$ and $d\in\mathbb Z$, and let
$\mathcal O_X(d)$ be the twisting sheaf on $X=\mathbb P^n_A$
([[def-relative-projective-space-standard-charts]], [[def-twisting-sheaf-proj]]).
Then
$$H^q(X,\mathcal O_X(d))=0\qquad\text{for every }q\text{ with }0<q<n;$$
for $n\le1$ the index range is empty and the assertion is vacuous. The zero
ring $A=0$ is allowed.

## Facts & Assumptions

**Given:** The Axiom of Choice as inherited, a commutative ring $A$ with $1$, integers $n\ge0$ and $d$, and the twisting sheaf $\mathcal O(d)$ on $\mathbb P^n_A$.

[F1] Cohomology of twists on projective space: for every commutative ring $A$,
every $n\ge0$ and every $d\in\mathbb Z$,
$H^q(\mathbb P^n_A,\mathcal O(d))=0$ unless $q=0$ or $q=n$.
([[thm-cohomology-projective-space-twisting-sheaves]])

## Proof

**Proof technique:** direct: an index range with no integers is vacuous, and otherwise the full computation leaves only degrees zero and n.

1.1 If $n\le1$ there is no integer $q$ with $0<q<n$, so the assertion is vacuous. If $n\ge2$ and $0<q<n$, then $q\ne0$ and $q\ne n$, so [F1] gives $H^q(\mathbb P^n_A,\mathcal O(d))=0$. [F1]

2.1 Boundaries and choice accounting. The cases $n=0$ and $n=1$ have empty index range; $q=0$ and $q=n$ lie outside the range and are not asserted to vanish. The ring $A=0$ is covered by [F1]. The Axiom of Choice is inherited from [F1] and nothing further is selected. [F1] ∎
