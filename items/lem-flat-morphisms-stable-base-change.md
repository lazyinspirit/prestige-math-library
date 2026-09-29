---
id: lem-flat-morphisms-stable-base-change
kind: lemma
title: "Flatness is stable under arbitrary base change"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-flat-morphism-schemes
  - def-base-change-morphism-schemes
  - lem-flatness-affine-local-source-target
  - thm-affine-fibre-product-tensor-ring
  - thm-symmetry-and-associativity-over-a-commutative-ring
  - thm-flatness-criteria-by-injections-and-ideals
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
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.25-29.26"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f:X\to S$ be a flat morphism of schemes and let $h:S'\to S$ be an
arbitrary morphism ([[def-base-change-morphism-schemes]]). Then the base change
$$f_{S'}:X\times_SS'\longrightarrow S'$$
is flat. No hypothesis is placed on $h$; in particular it need not be flat,
locally of finite presentation, or a monomorphism.

If $f$ is flat at $x\in X$ only, the same argument shows that $f_{S'}$ is flat
at every point of $X\times_SS'$ lying over $x$; the empty-source case is
vacuous.

## Facts & Assumptions


**Given:** The Axiom of Choice and the data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] $f$ is flat at $x$ when $\mathcal O_{X,x}$ is flat over $\mathcal O_{S,f(x)}$, and $f$ is flat when this holds at every point ([[def-flat-morphism-schemes]]).

[F2] Assuming AC, let $f:X\to S$, $U=\operatorname{Spec}B\subseteq X$ and $V=\operatorname{Spec}A\subseteq S$ be affine with $f(U)\subseteq V$. Then $f$ is flat at $x\in U$ if and only if $B_{\mathfrak q}$ is flat over $A_{\mathfrak p}$ ($\mathfrak q$ the prime of $x$, $\mathfrak p=\mathfrak q\cap A$), and $f$ is flat at every point of $U$ if and only if $B$ is flat over $A$ ([[lem-flatness-affine-local-source-target]]).

[F3] For ring maps $A\to B$, $A\to C$ there is a canonical isomorphism $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_AC)$ compatible with the projections ([[thm-affine-fibre-product-tensor-ring]]).

[F4] Tensor products over a commutative ring are associative: there are natural isomorphisms $(L\otimes_RM)\otimes_RN\cong L\otimes_R(M\otimes_RN)$ ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

[F5] $M$ is flat over $R$ if and only if for every injection $K\hookrightarrow N$ of $R$-modules the induced map $K\otimes_RM\to N\otimes_RM$ is injective ([[thm-flatness-criteria-by-injections-and-ideals]]).

[F6] The base change of $X\to S$ along $h:S'\to S$ is $X\times_SS'$ with the second projection as structure map ([[def-base-change-morphism-schemes]]).

[F7] If $M$ is flat over $R$ and $T$ is an $R$-algebra, then $M\otimes_RT$ is flat over $T$: for an injection of $T$-modules, tensor associativity identifies the resulting map with tensoring the same injection, viewed as an $R$-module map, with $M$; apply [F5]. The same holds after localizing the resulting $T$-algebra.

[F8] AC is the choice-function principle ([[def-axiom-of-choice]]). It is used through the global affine-local converse in [F2] at step 1.2.

## Proof

**Proof technique:** direct.

1.1 Fix a point $x'\in X_{S'}=X\times_SS'$ and let $x\in X$, $s'\in S'$ be its images, $s=h(s')=f(x)$. Choose affine opens $U=\operatorname{Spec}A\subseteq S$ containing $s$, $V=\operatorname{Spec}A'\subseteq S'$ containing $s'$ with $h(V)\subseteq U$, and $W=\operatorname{Spec}B\subseteq X$ affine containing $x$ with $f(W)\subseteq U$. Then $W\times_UV=\operatorname{pr}_X^{-1}(W)\cap\operatorname{pr}_{S'}^{-1}(V)$ is an affine open neighbourhood of $x'$ in $X_{S'}$, isomorphic to $\operatorname{Spec}(B\otimes_AA')$ by [F3], and it lies over $V$. [F3, F6]

1.2 In the global case, $f$ is flat at every point of $W$, so the AC-qualified global converse in [F2], licensed by [F8], gives that $B$ is flat over $A$. Therefore [F7] gives that $B\otimes_AA'$ is flat over $A'$, and its localization at the prime of $x'$ is flat over $A'_{\mathfrak p'}$. For the pointwise clause, [F2] gives only that $B_{\mathfrak q}$ is flat over $A_{\mathfrak p}$; no global flatness of $B$ is inferred from this local hypothesis. [F2, F7, F8]

1.3 Claim: $B\otimes_AA'$ is flat over $A'$. By [F5] it suffices to check injections $K\hookrightarrow N$ of $A'$-modules. Viewing $K,N$ as $A$-modules through $A\to A'$, associativity [F4] gives canonical isomorphisms $K\otimes_{A'}(B\otimes_AA')\cong K\otimes_AB$ and $N\otimes_{A'}(B\otimes_AA')\cong N\otimes_AB$ under which the induced map is $K\otimes_AB\to N\otimes_AB$; this is injective because $B$ is flat over $A$ and $K\hookrightarrow N$ is an injection of $A$-modules, by [F5]. Hence $B\otimes_AA'$ is flat over $A'$. [F4, F5]

2.1 Applying [F2] to the affine charts $W\times_UV=\operatorname{Spec}(B\otimes_AA')$ over $V=\operatorname{Spec}A'$ converts the flatness of step 1.3 into flatness of $f_{S'}$ at the arbitrary point $x'$; by [F1] the base change is therefore flat, and [F6] identifies it as the pullback of $f$ along $h$. For the pointwise assertion, let $\mathfrak r$ be the prime of $B\otimes_AA'$ corresponding to $x'$, let $\mathfrak q$ be its contraction to $B$, and let $\mathfrak p'=\mathfrak r\cap A'$; set $\mathfrak p=\mathfrak q\cap A$. The assumption that $x'$ lies over $x$ means that $\mathfrak q$ is the prime of $x$. By [F2], $B_{\mathfrak q}$ is flat over $A_{\mathfrak p}$. Base-changing along $A_{\mathfrak p}\to A'_{\mathfrak p'}$ and using [F7], $B_{\mathfrak q}\otimes_{A_{\mathfrak p}}A'_{\mathfrak p'}$ is flat over $A'_{\mathfrak p'}$. Localizing this algebra at the prime induced by $\mathfrak r$ gives $(B\otimes_AA')_{\mathfrak r}$, which remains flat over $A'_{\mathfrak p'}$ by [F7]. The pointwise criterion [F2] now proves that $f_{S'}$ is flat at $x'$. This applies to every point over $x$. [F1, F2, F6, F7, step 1.3] $\square$
