---
id: lem-eventual-global-generation-coherent-twists
kind: lemma
title: "Eventual generation of coherent projective twists"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-affine-scheme-spectrum
  - def-ample-invertible-sheaf
  - def-coherent-module-scheme
  - def-globally-generated-sheaf
  - def-invertible-sheaf
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-noetherian-ring-and-module
  - def-projective-morphism-pre-proj
  - def-proper-morphism
  - def-quasi-compact-and-quasi-separated-morphism
  - def-relative-projective-space-standard-charts
  - cor-affine-scheme-quasi-compact
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - lem-finite-type-local-on-source-and-target
  - thm-projective-morphism-proper
  - thm-serre-criterion-ampleness
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Properties of Schemes, Proposition 28.27.13 (Tag 01Q3)"
      url: "https://stacks.math.columbia.edu/tag/01Q3"
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.44.5 (Tag 01WC)"
      url: "https://stacks.math.columbia.edu/tag/01WC"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 17.4, 17.6"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a Noetherian
commutative ring ([[def-noetherian-ring-and-module]]) and let $X$ be a scheme
projective over $A$ in the finite-dimensional H-projective convention
([[def-projective-morphism-pre-proj]]): the structure morphism
$X\to\operatorname{Spec}A$ ([[def-affine-scheme-spectrum]]) factors over
$\operatorname{Spec}A$ as a closed immersion
$X\hookrightarrow\mathbb P^n_A$
([[def-relative-projective-space-standard-charts]]) followed by the projection,
for some $n\ge0$. Let $L$ be an ample invertible $\mathcal O_X$-module
([[def-ample-invertible-sheaf]], [[def-invertible-sheaf]]) and let $F$ be a
coherent $\mathcal O_X$-module ([[def-coherent-module-scheme]]). Then there is
an integer $m_0$ such that
$$F\otimes_{\mathcal O_X}L^{\otimes m}$$
is globally generated ([[def-globally-generated-sheaf]]) for every $m\ge m_0$;
the bound may depend on $F$. The empty scheme $X$, the zero module $F=0$ and
the cases $n=0$ and $\operatorname{Spec}A=\varnothing$ are included, and no
effectivity of $m_0$ is claimed.

## Facts & Assumptions
**Given:** The Axiom of Choice, a Noetherian commutative ring $A$, a scheme $X$ projective over $A$, an ample invertible $\mathcal O_X$-module $L$ and a coherent $\mathcal O_X$-module $F$.

[F1] $f:X\to S$ is projective in the H-projective convention when for some
$n\ge0$ it factors over $S$ as a closed immersion $X\hookrightarrow\mathbb P^n_S$
followed by the projection of relative projective space; $n=0$ is allowed with
$\mathbb P^0_S\cong S$, and for $S=\operatorname{Spec}A$ the standard charts of
$\mathbb P^n_A$ are the affine schemes $\operatorname{Spec}A[x^{(i)}_\ell]$.
([[def-projective-morphism-pre-proj]],
[[def-relative-projective-space-standard-charts]],
[[def-affine-scheme-spectrum]])

[F2] Assume AC. Every projective morphism is proper; a morphism is proper
exactly when it is separated, of finite type and universally closed.
([[thm-projective-morphism-proper]], [[def-proper-morphism]])

[F3] A morphism is of finite type when it is locally of finite type and
quasi-compact; a morphism is quasi-compact when the inverse image of every
quasi-compact open is quasi-compact; being locally of finite type is
affine-local on source and target, so over an affine target it is tested on
affine source charts, and a quasi-compact morphism locally of finite type is of
finite type.
([[def-locally-finite-type-and-finite-type-morphism]],
[[def-quasi-compact-and-quasi-separated-morphism]],
[[lem-finite-type-local-on-source-and-target]])

[F4] Every commutative algebra of finite type over a Noetherian commutative
ring is a Noetherian ring; a scheme is locally Noetherian when it has an affine
open cover by spectra of Noetherian rings and Noetherian when it is in addition
quasi-compact.
([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
[[def-locally-noetherian-and-noetherian-scheme]],
[[cor-affine-scheme-quasi-compact]])

[F5] Serre criterion for ampleness: for a Noetherian scheme $X$ and an
invertible $\mathcal O_X$-module $L$, the sheaf $L$ is ample if and only if for
every coherent $\mathcal O_X$-module $G$ the twist
$G\otimes_{\mathcal O_X}L^{\otimes n}$ is globally generated for all
sufficiently large integers $n$, the bound depending on $G$.
([[thm-serre-criterion-ampleness]])

[F6] Conventions: $L$ invertible means locally free of rank one, with tensor
powers $L^{\otimes m}$, $m\ge0$, and $L^{\otimes0}=\mathcal O_X$; ampleness is
the covering-by-nonvanishing-loci condition of the cited definition; a sheaf is
globally generated when its evaluation map
$\Gamma(X,\mathcal H)\otimes_{\mathbb Z}\mathcal O_X\to\mathcal H$ is
surjective; coherence is the finite-type-and-kernel condition of the cited
definition. ([[def-invertible-sheaf]], [[def-ample-invertible-sheaf]],
[[def-globally-generated-sheaf]], [[def-coherent-module-scheme]])

[F7] The Axiom of Choice states that every family of nonempty sets has a choice
function. ([[def-axiom-of-choice]])



## Proof

**Proof technique:** direct: a projective morphism is proper, so $X$ has affine charts of finite type over the Noetherian ring $A$ and is quasi-compact; hence $X$ is Noetherian, and the forward direction of the Serre criterion yields the eventual global generation.

1.1 By [F1] the structure morphism $p:X\to\operatorname{Spec}A$ is projective: there are $n\ge0$ and a closed immersion $i:X\hookrightarrow\mathbb P^n_A$ with $p=\pi\circ i$, where $\pi$ is the projection of the relative projective space. [F1]

1.2 By [F2] the morphism $p$ is proper, hence of finite type and (being of finite type) quasi-compact by [F3]. [F2, F3]

2.1 Let $x\in X$. Since $p$ is locally of finite type and the target $\operatorname{Spec}A$ is affine, [F3] provides an affine open $U=\operatorname{Spec}B\subseteq X$ containing $x$ with $p(U)\subseteq\operatorname{Spec}A$ and $A\to B$ of finite type. As $A$ is Noetherian, [F4] makes $B$ a Noetherian ring. The point $x$ was arbitrary, so $X$ has an affine open cover by spectra of Noetherian rings and is locally Noetherian by [F4]. [F3, F4, step 1.2]

3.1 The scheme $\operatorname{Spec}A$ is quasi-compact, so the inverse image $X=p^{-1}(\operatorname{Spec}A)$ is quasi-compact because $p$ is quasi-compact by 1.2; with 2.1, [F4] makes $X$ a Noetherian scheme. [F3, F4, step 1.2, step 2.1]

4.1 Apply the forward direction of the Serre criterion [F5] to the Noetherian scheme $X$, the ample invertible sheaf $L$ and the coherent sheaf $F$: there is an integer $m_0$, depending on $F$, such that $F\otimes_{\mathcal O_X}L^{\otimes m}$ is globally generated for every $m\ge m_0$, which is the asserted conclusion. [F5, step 3.1]

5.1 Boundaries and choice accounting. If $X=\varnothing$ then the empty morphism to $\operatorname{Spec}A$ is projective (take $n=0$ and the empty closed subscheme of $\mathbb P^0_A=\operatorname{Spec}A$), the only coherent module on $X$ is $F=0$ by [F6], and $0\otimes_{\mathcal O_X}L^{\otimes m}=0$ is globally generated for every $m$, so any $m_0$ works; the same argument covers $F=0$ over any $X$. If $\operatorname{Spec}A=\varnothing$ then also $X=\varnothing$, since a projective morphism has empty source over an empty target. If $n=0$ then $X$ is isomorphic to a closed subscheme $\operatorname{Spec}(A/I)$ of $\operatorname{Spec}A$ and is affine Noetherian, and 4.1 still applies. The bound $m_0$ is obtained from [F5] without effectivity, and it is unique only up to enlarging. The Axiom of Choice [F7] is consumed through [F2] and [F5] and through the selection, in 2.1, of one affine Noetherian chart for each point of $X$; all statements remain those of the cited suppliers. [F1, F2, F5, F6, F7, step 2.1, step 4.1] ∎
