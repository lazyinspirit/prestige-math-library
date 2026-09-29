---
id: ex-projective-zero-space-cohomology
kind: example
title: "Projective zero-space over an affine base"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-associated-sheaf-module-affine-scheme
  - def-commutative-ring
  - def-proj-graded-ring-points
  - def-quasi-coherent-module-scheme
  - def-relative-projective-space-standard-charts
  - def-sheaf-cohomology-derived-global-sections
  - def-standard-open-proj
  - def-twisting-sheaf-proj
  - lem-associated-sheaf-sections-basic-open
  - lem-standard-opens-proj-affine
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-global-sections-affine-scheme
  - thm-projective-space-as-proj
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Section 30.8 (Tag 01XV)"
      url: "https://stacks.math.columbia.edu/tag/01XV"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Section 19.1"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Example

Let $A$ be a commutative ring with $1$ ([[def-commutative-ring]]). Then
$\mathbb P^0_A\cong\operatorname{Spec}A$
([[def-relative-projective-space-standard-charts]],
[[thm-projective-space-as-proj]]), and under this identification every twisting
sheaf is trivial:
$$\mathcal O_{\mathbb P^0_A}(d)\;\cong\;\mathcal O_{\operatorname{Spec}A}\qquad\text{for every }d\in\mathbb Z$$
([[def-twisting-sheaf-proj]]). Consequently
$$H^0(\mathbb P^0_A,\mathcal O(d))\cong A,\qquad H^q(\mathbb P^0_A,\mathcal O(d))=0\ \ (q>0),$$
for every $d\in\mathbb Z$ ([[def-sheaf-cohomology-derived-global-sections]]). The
zero ring $A=0$, the case $d=0$ and negative $d$ are included. For a general
base scheme $S$ the same definition gives $\mathbb P^0_S\cong S$, with one
chart and no gluing; only this identification of schemes is asserted, and no
general vanishing of higher cohomology over a nonaffine base is claimed.

## Facts & Assumptions
**Given:** A commutative ring $A$ with $1$, an integer $d\in\mathbb Z$, the scheme $\mathbb P^0_A$ with its twisting sheaf $\mathcal O(d)$, and the Axiom of Choice as inherited from the affine suppliers.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] There is a canonical isomorphism
$\mathbb P^0_A\cong\operatorname{Proj}A[x_0]$ for the total-degree grading; the
points of $\operatorname{Proj}A[x_0]$ are the homogeneous primes not containing
the irrelevant ideal $(x_0)$, so each of them omits $x_0$ and lies in the
standard open $D_+(x_0)$; and
$D_+(x_0)=\operatorname{Spec}\bigl((A[x_0]_{x_0})_0\bigr)$ is the single
standard affine chart.
([[thm-projective-space-as-proj]], [[def-standard-open-proj]],
[[def-proj-graded-ring-points]], [[lem-standard-opens-proj-affine]])

[F2] The chart ring of the single chart is
$(A[x_0]_{x_0})_0\cong A$ via $a\mapsto a/1$; more generally the degree-zero
part of the localisation of the shifted module $A[x_0](d)$ is
$$A[x_0](d)_{(x_0)}=\{\,cx_0^d:c\in A\,\}\cong A,$$
a free $A$-module of rank one with generator $x_0^d$, for every $d\in\mathbb Z$
(including negative $d$, where $x_0^d$ denotes the unit $x_0^{-|d|}$ of the
localisation). [algebra]

[F3] The twisting sheaf is $\mathcal O(d)=\widetilde{A[x_0](d)}$
([[def-twisting-sheaf-proj]]), its sections on the chart $D_+(x_0)$ are the
degree-zero localisation $A[x_0](d)_{(x_0)}$, and the restriction of
$\mathcal O(d)$ to that chart is the associated sheaf of this
$A$-module; an isomorphism of $A$-modules induces an isomorphism of the
associated sheaves on $\operatorname{Spec}A$
([[def-associated-sheaf-module-affine-scheme]],
[[lem-associated-sheaf-sections-basic-open]]).

[F4] For an affine scheme $X=\operatorname{Spec}R$ and a quasi-coherent
$\mathcal O_X$-module $\mathcal F$ one has $H^q(X,\mathcal F)=0$ for every
$q>0$, and $H^0(\operatorname{Spec}R,\mathcal O)\cong R$ via the canonical map;
the structure sheaf of a scheme is quasi-coherent, being over an affine open
the associated sheaf of its coordinate ring.
([[thm-qc-sheaf-affine-higher-cohomology-vanishes]],
[[thm-global-sections-affine-scheme]], [[def-quasi-coherent-module-scheme]])

[F5] Cohomology of twists on projective space includes the case $n=0$:
$\mathbb P^0_R=\operatorname{Spec}R$ and
$H^0(\mathbb P^0_R,\mathcal O(m))\cong R$ for every $m\in\mathbb Z$, with all
higher groups zero, for every commutative ring $R$.
([[thm-cohomology-projective-space-twisting-sheaves]])

[F6] For an arbitrary base scheme $S$ the relative projective space is
$\mathbb P^n_S=S\times_{\operatorname{Spec}\mathbb Z}\mathbb P^n_{\mathbb Z}$;
for $n=0$ there is one chart $U_0=\operatorname{Spec}\mathbb Z$, no gluing takes
place, and $\mathbb P^0_{\mathbb Z}=\operatorname{Spec}\mathbb Z$, so that
$\mathbb P^0_S\cong S$; for $S=\varnothing$ one has
$\mathbb P^n_\varnothing=\varnothing$.
([[def-relative-projective-space-standard-charts]])



## Verification

**Proof technique:** direct: identify the single standard chart with $\operatorname{Spec}A$, compute the degree-zero localisations defining the twists, transport the resulting trivialisations into the affine vanishing theorem, and record the relative case and the degenerate boundaries.

1.1 The single chart covers the space. By [F1] the points of $\operatorname{Proj}A[x_0]$ omit $x_0$, so every point lies in $D_+(x_0)$; hence the single standard chart is the whole space, and $\mathbb P^0_A=D_+(x_0)=\operatorname{Spec}\bigl((A[x_0]_{x_0})_0\bigr)$. [F1]
2.1 The chart ring. The map $A\to(A[x_0]_{x_0})_0$, $a\mapsto a/1$, is an isomorphism: a degree-zero fraction has the form $a x_0^m/x_0^m=a/1$, and $a/1=b/1$ forces $a=b$ by comparing coefficients after clearing the powers of $x_0$; for $A=0$ both rings are zero. Hence $\mathbb P^0_A\cong\operatorname{Spec}A$ for every commutative ring $A$. [F2, step 1.1, algebra]
2.2 The twisting sheaves are trivial. By [F3] and [F2], for every $d\in\mathbb Z$ the sections of $\mathcal O(d)$ on the chart are $A[x_0](d)_{(x_0)}=A\cdot x_0^d$, a free rank-one $A$-module, and the associated sheaf of this module on $\operatorname{Spec}A$ is isomorphic to $\widetilde A=\mathcal O$ through the module isomorphism $c\mapsto cx_0^d$; since the chart is the whole space by [step 1.1], this is a global isomorphism $\mathcal O_{\mathbb P^0_A}(d)\cong\mathcal O_{\operatorname{Spec}A}$, valid for every $d\in\mathbb Z$ including $d=0$ and negative $d$. [F2, F3, step 1.1]
3.1 The cohomology. The isomorphism of [step 2.2] identifies $H^q(\mathbb P^0_A,\mathcal O(d))$ with $H^q(\operatorname{Spec}A,\mathcal O)$; by [F4] the target is $A$ in degree zero, through the canonical isomorphism $A\to\Gamma(\operatorname{Spec}A,\mathcal O)$, and vanishes for $q>0$ because the structure sheaf is quasi-coherent on the affine scheme $\operatorname{Spec}A$. This gives $H^0(\mathbb P^0_A,\mathcal O(d))\cong A$ and $H^q(\mathbb P^0_A,\mathcal O(d))=0$ for $q>0$; the $n=0$ clause of [F5] states the same conclusion directly, independent of the trivialisation. [F4, F5, step 2.2]
4.1 General base, boundaries and choice accounting. For an arbitrary base scheme $S$, [F6] gives $\mathbb P^0_S\cong S$ with one chart and no gluing, and $\mathbb P^0_\varnothing=\varnothing$; only this identification is asserted, because for a nonaffine base the same reasoning would reduce the question to $H^q(S,\mathcal O_S)$, which is not claimed to vanish. The cases $A=0$, where $\operatorname{Spec}A=\varnothing$ and the degree-zero group is the zero ring $A=0$ in agreement with [step 2.1] and [step 3.1], and $d=0$, where $\mathcal O(0)=\mathcal O$ by [F3] and [step 2.2] reduces to the identity, are both included. The Axiom of Choice [A1] is inherited through the affine vanishing and global-sections suppliers of [F4] and the projective cohomology of [F5]; no chart, resolution or trivialisation is chosen here. [A1, F3, F4, F5, F6, step 2.1, step 2.2, step 3.1, cases: zero ring and d=0 and general base] ∎
