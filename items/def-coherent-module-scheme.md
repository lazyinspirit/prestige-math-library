---
id: def-coherent-module-scheme
kind: definition
title: Coherent module sheaves
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-finite-type-finite-presentation-module-sheaf
  - def-quasi-coherent-module-scheme
  - def-kernel-cokernel-image-sheaves
  - thm-localisation-of-modules-is-exact
  - thm-associated-module-sheaf-exists
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
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
    - title: "The Stacks Project, Cohomology of Schemes §30.9"
      url: "https://stacks.math.columbia.edu/tag/01XY"
    - title: "The Stacks Project, Properties of Schemes, §§28.20, 28.26"
      url: "https://stacks.math.columbia.edu/download/properties.pdf"
pipeline_run: frontier-36-complete
---

## Definition

Let $X$ be a scheme and let $\mathcal F$ be a quasi-coherent
$\mathcal O_X$-module ([[def-quasi-coherent-module-scheme]]) that is of finite
type ([[def-finite-type-finite-presentation-module-sheaf]]). Then $\mathcal F$
is **coherent** if for every open $U\subseteq X$ and every morphism
$$\mathcal O_U^{\,n}\longrightarrow\mathcal F|_U,\qquad n\ge0\ \text{finite},$$
the kernel sheaf $\ker\varphi$ is of finite type
([[def-kernel-cokernel-image-sheaves]]).

Under the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
associated-sheaf existence theorem at the sheaf-kernel identification below,
the following affine test is equivalent to the definition. Since the
conditions are local, it suffices to test affine opens
$U=\operatorname{Spec}A$ on which $\mathcal F|_U\cong\widetilde M$ for a
finitely generated $A$-module $M$: then a morphism
$\mathcal O_U^n\to\widetilde M$ is given by an $A$-linear map
$\psi:A^n\to M$ ([[def-finite-type-finite-presentation-module-sheaf]]) and, as
localisation is exact ([[thm-localisation-of-modules-is-exact]]), the kernel
sheaf has $\ker\varphi(D(f))=\ker(\psi)\otimes_AA_f=\ker(\psi)_f$, so it is the
associated sheaf of the finitely generated module
$\ker\psi$ precisely when that kernel is finitely generated
([[thm-associated-module-sheaf-exists]]).

*Finite presentation does not imply coherence under the same AC assumption.* Over a general base the
kernel condition is a genuine additional hypothesis. Let $k$ be a field and let
$$A=k[x,y_1,y_2,\dots]/(xy_i,\ y_iy_j\ :\ i,j\ge1);$$
the classes of $1,x,x^2,\dots,y_1,y_2,\dots$ form a $k$-basis of $A$, so
$A=k[x]\oplus\bigoplus_{i\ge1}k[x]y_i$ as a $k[x]$-module, and
multiplication by $x$, viewed as an $A$-linear map $\psi:A\to A$, has kernel
$\ker\psi=\operatorname{Ann}_A(x)=\bigoplus_{i\ge1}k[x]y_i$, which is not
finitely generated as an $A$-module. The module $A$ is finitely presented, even
free of rank one, but the associated sheaf $\widetilde A=\mathcal O_X$ on
$X=\operatorname{Spec}A$ receives the morphism $\mathcal O_X\to\mathcal O_X$
corresponding to $\psi$ ([[def-finite-type-finite-presentation-module-sheaf]],
[[thm-associated-module-sheaf-exists]]) whose kernel is the associated sheaf of
$\operatorname{Ann}_A(x)$ and is not of finite type. Hence $\mathcal O_X$ is
not coherent on this $X$; finite presentation, and even local freeness of finite
rank, do not by themselves imply coherence over an arbitrary base. The
identification of coherent with finite type is a theorem about locally
Noetherian schemes, proved on this page; over a locally Noetherian scheme
finite locally free sheaves are therefore coherent.

*Immediate consequences.* Coherence is local on $X$ and invariant under
isomorphism; a coherent module is of finite type by definition; restrictions of
coherent modules to open subschemes are coherent; and the zero module is
coherent. On a locally Noetherian scheme the kernel condition is automatic for
finite-type quasi-coherent modules, and the theorem on this page proves the
converse direction: there, finite type and coherent coincide
([[def-locally-noetherian-and-noetherian-scheme]]). Over a non-Noetherian ring
the two notions differ, as the $A=\mathcal O_X$ example above shows, and the
relation-kernel condition must be checked; the remark on this page records that
warning.
