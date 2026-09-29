---
id: def-projective-bundle-scheme
kind: definition
title: "Projective bundle in the quotient convention"
status: draft
origin: pipeline
deps:
  - def-relative-proj-quasi-coherent-graded-algebra
  - thm-relative-proj-base-change
  - def-symmetric-algebra-qc-module
  - lem-symmetric-algebra-qc-and-base-change
  - def-locally-free-sheaf-finite-rank
  - def-axiom-of-choice
  - def-quasi-coherent-module-scheme
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Definition

Assume the Axiom of Choice as inherited from the relative Proj construction
([[def-axiom-of-choice]], [[def-relative-proj-quasi-coherent-graded-algebra]]).
Let $S$ be a scheme and let $E$ be a finite locally free
$\mathcal O_S$-module of locally constant rank $r\ge0$
([[def-locally-free-sheaf-finite-rank]]). Write
$$\operatorname{Sym}(E)=\bigoplus_{d\ge0}\operatorname{Sym}^d(E)$$
for the symmetric algebra of $E$
([[def-symmetric-algebra-qc-module]]): a quasi-coherent graded
$\mathcal O_S$-algebra ([[def-quasi-coherent-module-scheme]]) with $\operatorname{Sym}^0(E)=\mathcal O_S$,
$\operatorname{Sym}^1(E)=E$, generated as an $\mathcal O_S$-algebra by its
degree-one part $E$, and compatible with base change $S'\to S$
([[lem-symmetric-algebra-qc-and-base-change]]).

**Definition.** The **projective bundle** of $E$ over $S$ is the relative Proj
$$\pi:\mathbb P_S(E)=\operatorname{Proj}_S\operatorname{Sym}(E)\longrightarrow S,$$
with the relative twists $\mathcal O_{\mathbb P_S(E)}(n)$, $n\in\mathbb Z$
([[def-relative-proj-quasi-coherent-graded-algebra]]). Since
$\operatorname{Sym}(E)$ is generated in degree one, the degree-one part
$\operatorname{Sym}^1(E)=E$ generates the whole algebra, and there is a
canonical surjection
$$\pi^*E\longrightarrow\mathcal O_{\mathbb P_S(E)}(1),$$
the **tautological quotient** of the pullback of $E$; it is locally given by
the coordinate sections of a projective space, over an open set on which
$E\cong\mathcal O_S^{\,r}$.

**Quotient convention.** This is the quotient (Grothendieck) convention: over
an $S$-scheme $g:T\to S$, an $S$-morphism $T\to\mathbb P_S(E)$ is the same as
an isomorphism class of surjections $g^*E\to L$ with $L$ invertible on $T$,
and the universal such quotient is the tautological quotient above; the
representing property is proved as [[thm-projective-bundle-represents-line-quotients]].
The associated affine construction is
$\mathbb V(E)=\operatorname{Spec}_S\operatorname{Sym}(E)$; the rank-zero
case below displays its difference from $\mathbb P_S(E)$ over nonempty $S$.

**Rank zero.** If $E=0$ then $\operatorname{Sym}(E)=\mathcal O_S$ is
concentrated in degree $0$, its irrelevant ideal is $0$, and
$$\mathbb P_S(0)=\varnothing:$$
the total space is empty. This is consistent with the quotient convention,
because a surjection $0\to L$ onto an invertible sheaf exists only over the
empty scheme; the affine bundle $\mathbb V(0)=S$ is nonempty whenever $S$ is.

## Remarks

- **Frames.** If $E|_U\cong\mathcal O_U^{\,r}$ over an open $U\subseteq S$ with
  $r\ge1$, then $\operatorname{Sym}(E)|_U\cong\mathcal O_U[t_1,\dots,t_r]$
  with $\deg t_i=1$, so
  $\mathbb P_S(E)\times_SU\cong\mathbb P^{r-1}_U$ by the absolute case of
  [[def-relative-proj-quasi-coherent-graded-algebra]]; the tautological
  quotient restricts to the standard quotient
  $\mathcal O_U^{\,r}\to\mathcal O_{\mathbb P^{r-1}_U}(1)$ whose components are
  the coordinate sections. The case $r=1$ gives a single degree-one generator
  and is computed on the paired examples page of this pair.
- **Base change.** For a morphism $S'\to S$ one has
  $\mathbb P_{S'}(E_{S'})\cong\mathbb P_S(E)\times_SS'$, because the symmetric
  algebra and relative Proj commute with base change
  ([[lem-symmetric-algebra-qc-and-base-change]],
  [[thm-relative-proj-base-change]]).
- **Base-change supplier.** The construction uses the symmetric algebra and
  relative Proj only. The base-change bullet above rests on
  [[lem-symmetric-algebra-qc-and-base-change]] and
  [[thm-relative-proj-base-change]]. The former supplies the compatibility
  $f^*\operatorname{Sym}(\mathcal F)\cong\operatorname{Sym}(f^*\mathcal F)$
  and the latter supplies base change for relative Proj; this definition is reconciled with
  [[def-symmetric-algebra-qc-module]] and
  [[def-relative-proj-quasi-coherent-graded-algebra]] as written.
