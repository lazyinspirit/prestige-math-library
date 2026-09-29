---
id: ex-associated-sheaf-quotient-module
kind: example
title: Quotient module sheaf and its support
status: draft
origin: pipeline
deps:
  - thm-associated-module-sheaf-exists
  - thm-support-finite-type-qc-closed
  - thm-localisation-of-modules-commutes-with-quotients-and-sums
  - def-axiom-of-choice
  - lem-associated-sheaf-sections-basic-open
  - lem-associated-sheaf-stalk-localization
  - def-associated-sheaf-module-affine-scheme
  - def-support-module-sheaf
  - def-quotient-module
  - def-prime-spectrum-and-vanishing-sets
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Example

Assume the Axiom of Choice, inherited from the existence theorem for the
associated sheaf. Let $A$ be a commutative ring with $1$ and let
$I\subseteq A$ be an ideal, with quotient module $A/I$
([[def-quotient-module]]). Write $X=\operatorname{Spec}A$, let
$\widetilde{A/I}$ be the associated sheaf of the $A$-module $A/I$, and let
$\widetilde I$ be the associated sheaf of the ideal $I$, a subsheaf of
$\mathcal O_X=\widetilde A$
([[def-associated-sheaf-module-affine-scheme]],
[[thm-associated-module-sheaf-exists]]).

Then there is a canonical isomorphism of $\mathcal O_X$-modules
$$\widetilde{A/I}\;\cong\;\mathcal O_X/\widetilde I,$$
and the support of this sheaf is the closed set
$$\operatorname{Supp}\bigl(\widetilde{A/I}\bigr)=V(I)=\{\mathfrak p\in\operatorname{Spec}A:I\subseteq\mathfrak p\}$$
([[def-prime-spectrum-and-vanishing-sets]], [[def-support-module-sheaf]]). The
example includes the two extreme ideals: for $I=A$ one gets $A/I=0$, both sides
are the zero sheaf, and $V(A)=\varnothing$; for $I=0$ one gets $A/I=A$, both
sides are $\mathcal O_X$, and $V(0)=X$. The module $A/I$ is cyclic, hence
finitely generated, and the Axiom of Choice is inherited from the
associated-sheaf and support theorems, no new choice being made.

## Facts & Assumptions

**Given:** A commutative ring $A$ with $1$ and an ideal $I\subseteq A$.

[F1] On a distinguished open $D(f)\subseteq X$ the associated sheaf has
sections $\widetilde M(D(f))=M_f$, with restriction the canonical localisation;
these data determine the sheaf
([[def-associated-sheaf-module-affine-scheme]],
[[lem-associated-sheaf-sections-basic-open]]).

[F2] Localisation commutes with quotients: for $f\in A$ the canonical map
$(A/I)_f\to A_f/I_f$ is an isomorphism, and more generally localisation is
right exact so it carries the quotient $A\to A/I$ to the quotient
$A_f\to A_f/I_f$
([[thm-localisation-of-modules-commutes-with-quotients-and-sums]]).

[F3] Stalks of associated sheaves are the localisations: for a prime
$\mathfrak p$ one has $(\widetilde M)_{\mathfrak p}\cong M_{\mathfrak p}$,
and the stalk of a quotient sheaf is the quotient of the stalks, so
$(\mathcal O_X/\widetilde I)_{\mathfrak p}\cong A_{\mathfrak p}/I_{\mathfrak p}$
([[lem-associated-sheaf-stalk-localization]]).

[F4] The support of an $\mathcal O_X$-module $\mathcal F$ is
$\operatorname{Supp}(\mathcal F)=\{x:\mathcal F_x\neq0\}$
([[def-support-module-sheaf]]); for a finitely generated $A$-module $M$ on
$X=\operatorname{Spec}A$ one has
$\operatorname{Supp}(\widetilde M)=V(\operatorname{Ann}_A(M))$
([[thm-support-finite-type-qc-closed]]).

[F5] For an ideal $I\subseteq A$ the zero set is
$V(I)=\{\mathfrak p:I\subseteq\mathfrak p\}$, and $V(A)=\varnothing$,
$V(0)=X$
([[def-prime-spectrum-and-vanishing-sets]]); moreover
$\operatorname{Ann}_A(A/I)=I$, because $a\in\operatorname{Ann}_A(A/I)$ holds
exactly when $a\cdot1\in I$ ([[def-quotient-module]]).

[F6] The Axiom of Choice as used by the associated-sheaf construction
([[def-axiom-of-choice]], [[thm-associated-module-sheaf-exists]]).



**Proof technique:** direct; compare the two associated sheaves on distinguished opens via exactness of localisation, and compute the support from the stalks of the quotient.

## Proof

1.1 The identification on distinguished opens: for $f\in A$ the localisation of the exact sequence of $A$-modules $0\to I\to A\to A/I\to0$ at $f$ is the exact sequence $0\to I_f\to A_f\to(A/I)_f\to0$, so the induced map $(A/I)_f\to A_f/I_f$ is an isomorphism by [F2]; by [F1] the sections of $\widetilde{A/I}$, of $\mathcal O_X$ and of $\widetilde I$ on $D(f)$ are $(A/I)_f$, $A_f$ and $I_f$, so the two sheaves $\widetilde{A/I}$ and $\mathcal O_X/\widetilde I$ have canonically isomorphic sections on every distinguished open, compatibly with restrictions; as morphisms of $\mathcal O_X$-modules are determined by their components on the distinguished-open basis and both sides are sheaves, these identifications assemble into a canonical isomorphism $\widetilde{A/I}\cong\mathcal O_X/\widetilde I$. [F1, F2]

2.1 The support: by [F3] the stalk of $\mathcal O_X/\widetilde I$ at a prime $\mathfrak p$ is $A_{\mathfrak p}/I_{\mathfrak p}$, and by step 1.1 the same is the stalk of $\widetilde{A/I}$; now $A_{\mathfrak p}/I_{\mathfrak p}=0$ exactly when $I\nsubseteq\mathfrak p$, because $s\in I$ with $s\notin\mathfrak p$ makes $s/1$ a unit of $A_{\mathfrak p}$ lying in $I_{\mathfrak p}$, so that $I_{\mathfrak p}=A_{\mathfrak p}$, while for $I\subseteq\mathfrak p$ one has $I_{\mathfrak p}\subseteq\mathfrak pA_{\mathfrak p}\neq A_{\mathfrak p}$; hence the stalk at $\mathfrak p$ is nonzero if and only if $\mathfrak p\in V(I)$, that is, $\operatorname{Supp}(\widetilde{A/I})=V(I)$ by [F4] and [F5]. This also agrees with $\operatorname{Supp}(\widetilde{A/I})=V(\operatorname{Ann}_A(A/I))=V(I)$ from the support theorem for the finitely generated module $A/I$. [F3, F4, F5, step 1.1]

3.1 The extreme ideals and the choice accounting: if $I=A$ then $A/I=0$, so $\widetilde{A/I}$ is the zero sheaf and $\mathcal O_X/\widetilde I=\mathcal O_X/\mathcal O_X=0$, while $V(A)=\varnothing$ is indeed the support of the zero sheaf; if $I=0$ then $A/I=A$, so $\widetilde{A/I}=\mathcal O_X$, while $\widetilde I=0$ as the associated sheaf of the zero ideal, so $\mathcal O_X/\widetilde I=\mathcal O_X$, and $V(0)=X$. The only appeal to the Axiom of Choice is the inherited one in [F1] and [F4], and the module $A/I$ is cyclic, generated by the class of $1$, so the finite-generation hypothesis of the support theorem is met without any selection. [F1, F4, F5, F6, step 1.1, step 2.1] ∎
