---
id: rem-proper-not-topologically-compact-over-arbitrary-field
kind: remark
title: Properness is not a compactness claim on rational points
status: published
origin: pipeline
deps:
  - def-proper-morphism
  - def-complete-variety
  - def-universally-closed-morphism
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Definition 29.42.1"
      url: https://stacks.math.columbia.edu/tag/01W0
    - title: "Vakil, The Rising Sea, §11.3.1, printed p.249"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Remark

Properness is a property of a scheme morphism: it asks for separatedness, finite
type, and universal closedness, as in [[def-proper-morphism]] and
[[def-universally-closed-morphism]]. It does not put a topology on the set
$X(k)$ of $k$-valued points for an arbitrary field $k$, and it therefore makes
no blanket compactness assertion about that set. The scheme-theoretic content
that replaces compactness is universal closedness, together with the valuative
criterion on this page: every solid valuative diagram has a unique filler.

On a page about $k$-varieties the word **complete** is used only as a name for
properness of the structure morphism $X\to\operatorname{Spec}k$
([[def-complete-variety]]); it is not a claim that $X(k)$ is compact in any
topology. For $k=\mathbb C$ there is a classical analytic statement, not proved
here, that a proper $\mathbb C$-scheme has compact $\mathbb C$-points in the
analytic topology; that statement needs the analytic topology as extra
structure and is a theorem about it, not part of the definition of properness.
The empty scheme is proper over every base and its set of points is empty, so a
compactness reading would also have to handle that boundary case separately.

Care is needed because an empty set of rational points does not imply properness.
For example, let $X=\mathbb A^1_{\mathbb C}=\operatorname{Spec}\mathbb C[x]$,
viewed as an $\mathbb R$-scheme. It has no $\mathbb R$-points, since such a
point would give an $\mathbb R$-algebra map $\mathbb C[x]\to\mathbb R$, and in
particular a unital $\mathbb R$-algebra map $\mathbb C\to\mathbb R$, which does
not exist. This morphism is not proper: after base change to $\mathbb C$,
$\mathbb C\otimes_{\mathbb R}\mathbb C\cong\mathbb C\times\mathbb C$, so the
base change is two copies of $\mathbb A^1_{\mathbb C}$ over
$\operatorname{Spec}\mathbb C$. After a further base change along
$\mathbb A^1_{\mathbb C}\to\operatorname{Spec}\mathbb C$, the closed subset
$V(tx-1)\subseteq\operatorname{Spec}\mathbb C[t,x]$ in one component has image
$D(t)\subseteq\operatorname{Spec}\mathbb C[t]$, which is not closed. Thus
universal closedness fails. The point of this remark is that properness must be
tested with the morphism definition and the valuative criterion, never by
inspecting $X(k)$ alone.
