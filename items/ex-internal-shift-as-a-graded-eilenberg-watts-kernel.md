---
id: ex-internal-shift-as-a-graded-eilenberg-watts-kernel
kind: example
title: The internal shift as a graded Eilenberg-Watts kernel
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-graded-eilenberg-watts-with-coherent-shifts, lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent, lem-graded-balanced-tensor-and-shift-isomorphisms, def-graded-ring-module-bimodule-and-internal-shift, lem-internal-shift-endofunctors-and-tensor-compatibility, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization, thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility]
justified_by: []
aliases: []
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roozbeh Hazrat, Graded Rings and Graded Grothendieck Groups (arXiv:1405.5071), §1.2.2 shift of modules (1.16), printed p.34; §1.2.6 graded tensor product (1.21)-(1.23), printed pp.40-41; §2.3 Definitions 2.3.3-2.3.4, Theorem 2.3.7 with its proof, Theorem 2.3.8, Example 2.3.9, printed pp.118-123"
      url: "https://arxiv.org/pdf/1405.5071"
    - title: "M. Khovanov and P. Seidel, Quivers, Floer Cohomology, and Braid Group Actions (arXiv:math/0006056), §2a-2c, author pp.8-11 (internal shift {k} and cochain shift [k] with ∂_{M[k]}=(-1)^k∂_M)"
      url: "https://arxiv.org/pdf/math/0006056"
---

## Example

Let $k$ be a field and $A$ a graded $k$-algebra with $1_A\ne0$. For each $r\in\mathbb Z$ the internal shift functor
$$\{r\}:\operatorname{GrMod}_0(A)\longrightarrow\operatorname{GrMod}_0(A),\qquad X\longmapsto X\{r\},$$
is $k$-linear, right exact, coproduct preserving and coherently shift-compatible, and it is
naturally isomorphic to the graded Eilenberg-Watts tensor functor
$$T_{A\{r\}}=A\{r\}\otimes_A-$$
of [[thm-graded-eilenberg-watts-with-coherent-shifts]]: the canonical isomorphisms
$A\{r\}\otimes_AX\cong X\{r\}$ of
[[lem-graded-balanced-tensor-and-shift-isomorphisms]] are natural degree-zero and compatible with
outer actions, so the kernel attached to the internal shift by the theorem is the shifted regular
bimodule $A\{r\}$, and the standard comparisons $\theta^{A\{r\}}$ of
[[lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent]] are
the canonical shift comparisons of
[[lem-internal-shift-endofunctors-and-tensor-compatibility]]. The shift $\{r\}$ is the identity
functor precisely when $r=0$; the hypothesis $1_A\ne0$ is used only for this criterion, since over
the zero algebra the only graded left module is $0$, the module category degenerates and every
shift is the identity there. It is not the cochain (homological) shift $[1]$ of the bounded-complex
page: $X[1]^n=X^{n+1}$, so $[1]$ lowers cochain placement by one and negates the differential, while $\{r\}$ raises
internal degrees and introduces no sign and no differential; the published counterexample
[[cex-internal-and-homological-shifts-are-not-interchangeable]] shows specifically that $\{1\}$ and $[1]$ are not naturally isomorphic on
$K^b(\operatorname{proj}^{gr}A_m)$ for the Khovanov–Seidel algebra $A_m$, $m\ge1$, so the internal and homological
shifts must not be conflated. The example makes no choice.

## Facts & Assumptions

**Given:** A field $k$, a graded $k$-algebra $A$ with $1_A\ne0$, an integer $r$, graded left $A$-modules $X,Y$ and the functors $\{r\}$ and $T_{A\{r\}}=A\{r\}\otimes_A-$.

[L1] The functor $\Phi(M)=(T_M,\theta^M)$ classifies the $k$-linear right exact coproduct-preserving coherently shift-compatible functors, its inverse attaches to $F$ the bimodule $F(A)$ with the reconstructed action, and $\Phi(M)(A)=M\otimes_AA$ is identified with $M$ by the unit isomorphism ([[thm-graded-eilenberg-watts-with-coherent-shifts]]).

[L2] For a graded $(B,A)$-bimodule $M$ the functor $T_M$ is $k$-linear, right exact and coproduct preserving, the canonical comparisons $\theta^M_{X,s}$ are the identity on elementary tensors, and $M\mapsto(T_M,\theta^M)$ is functorial ([[lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent]]).

[L3] The tensor-unit map $A\otimes_AX\to X$, $a\otimes x\mapsto ax$, and the shift isomorphism $M\{r\}\otimes_AX\cong(M\otimes_AX)\{r\}$ are natural degree-zero isomorphisms compatible with outer actions ([[lem-graded-balanced-tensor-and-shift-isomorphisms]]).

[L4] The internal shift has $(X\{r\})_d=X_{d-r}$ with the same actions, is again a graded module, satisfies $X\{0\}=X$, and distinct homogeneous pieces intersect trivially; it introduces no sign and no differential ([[def-graded-ring-module-bimodule-and-internal-shift]]).

[L5] The internal shift is a strict autoequivalence with $\{0\}=\mathrm{id}$ and $\{r\}\{s\}=\{r+s\}$, acting as the identity on underlying sets ([[lem-internal-shift-endofunctors-and-tensor-compatibility]]).

[L7] The cochain shift is $X[1]^n=X^{n+1}$ with differential $-d_X^{n+1}$ ([[thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility]]).

[L6] In the signed tensor totalization of bounded cochain complexes the cochain sign depends only on cochain degree, and the internal $\mathbb Z$-grading is independent of cochain degree and contributes no additional sign ([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).

## Verification

1.1 $T_{A\{r\}}$ is $k$-linear, right exact and coproduct preserving with comparisons the identity on elementary tensors [L2]; the unit isomorphism $A\otimes_AX\cong X$ and the shift isomorphism $A\{r\}\otimes_AX\cong(A\otimes_AX)\{r\}$ of [L3] compose to a natural degree-zero isomorphism $A\{r\}\otimes_AX\cong X\{r\}$ compatible with the outer actions, so $T_{A\{r\}}\cong\{r\}$ as functors. [L2, L3]

1.2 The shift $\{r\}$ is the identity functor precisely when $r=0$: for $r=0$ this is $\{0\}=\mathrm{id}$ [L5]; conversely, if $\{r\}$ is the identity functor then $\{r\}(A)=A\{r\}$ equals $A$, so the degree-zero pieces agree, $A_{-r}=(A\{r\})_0=A_0$, and $1_A\in A_{-r}\cap A_0$ is nonzero by the standing hypothesis $1_A\ne0$, so $-r=0$ because distinct homogeneous pieces intersect trivially [L4]. The excluded zero algebra is genuinely different: there the only graded left $A$-module is $0$, so every shift is the identity functor. [L4, L5]

1.3 The functor $\{r\}$ is not the cochain shift $[1]$: $\{r\}$ changes only the internal grading and inserts no sign or differential [L4], while the cochain shift changes cochain placement and, by the convention of the bounded-complex page, its sign is the cochain Koszul sign carried by the differential alone, with internal degrees contributing no cochain sign [L6, L7]; the two are different operations on different structures, and the published counterexample cited in the statement records their non-interchangeability in the bounded homotopy category, where it is not a prerequisite of the present computation. [L4, L6, L7]

2.1 The kernel attached to the internal shift by the classification of [L1] is $A\{r\}$: the bimodule attached to a tensor functor $T_M$ is recovered as $T_M(A)=M\otimes_AA\cong M$, and here $T_{A\{r\}}(A)=A\{r\}\otimes_AA\cong A\{r\}$ by step 1.1 and [L3]; under the identification $T_{A\{r\}}\cong\{r\}$ of step 1.1 the comparisons $\theta^{A\{r\}}$ are the identity on elementary tensors [L2], which is the canonical comparison of the internal shift [L5]. [step 1.1, L1, L2, L3, L5]

3.1 Collecting steps 1.1, 1.2, 1.3 and 2.1: the internal shift is a $k$-linear right exact coproduct-preserving coherent functor, it is naturally isomorphic to $T_{A\{r\}}$, its kernel is the shifted regular bimodule $A\{r\}$ with the canonical comparisons, it is the identity exactly for $r=0$, and it is a different operation from the cochain shift $[1]$; all identifications used are the canonical ones, so no choice is made. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
