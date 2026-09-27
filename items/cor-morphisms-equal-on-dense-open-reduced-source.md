---
id: cor-morphisms-equal-on-dense-open-reduced-source
kind: corollary
title: Agreement on a schematically dense open
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-morphisms-agree-closed-equalizer-separated-target, def-reduction-of-scheme, def-reduced-affine-scheme, def-closed-immersion-schemes, def-axiom-of-choice, thm-proper-ideal-contained-in-maximal-ideal, cor-maximal-ideals-are-prime]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.21.5, printed p.40"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Section 11.4.2, printed p.315"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Assume the Axiom of Choice. Let $Y\to S$ be a separated morphism, let $X$ be an $S$-scheme and let
$U\subseteq X$ be an open subscheme such that $\mathcal O_X\to j_*\mathcal O_U$
is injective, where $j:U\to X$ is the inclusion. Then any two $S$-morphisms
$a,b:X\to Y$ with $a|_U=b|_U$ are equal. In particular this holds when $X$ is
reduced and $U$ is a topologically dense open subscheme.

## Facts & Assumptions

**Given:** $S$-morphisms $a,b:X\to Y$ with $Y\to S$ separated, an open subscheme $j:U\to X$ with $\mathcal O_X\to j_*\mathcal O_U$ injective, and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] Under the hypothesis that $Y\to S$ is separated, the equalizer of $a$ and $b$ exists as a closed subscheme $e:E\hookrightarrow X$ and represents agreement: for every scheme $T$, the morphisms $T\to E$ correspond bijectively to the $t:T\to X$ with $at=bt$. ([[thm-morphisms-agree-closed-equalizer-separated-target]])

[F2] For a scheme $X$ the nilradical ideal sheaf $\mathcal N_X$ has nilpotent germs, $\mathcal N_X(U)$ consists of the locally nilpotent sections on $U$, on $\operatorname{Spec}A$ the reduction is $\operatorname{Spec}(A/\sqrt{(0)})$, and $X$ is reduced exactly when $\mathcal N_X=0$. ([[def-reduction-of-scheme]])

[F3] An affine scheme is **reduced** when its coordinate ring is reduced, that is, has no nonzero nilpotent element. ([[def-reduced-affine-scheme]])

[F4] A **closed immersion** $e:E\to X$ has $\mathcal O_X\to e_*\mathcal O_E$ surjective and is a homeomorphism onto a closed subset of $X$. ([[def-closed-immersion-schemes]])

[F5] Assume AC: in a nonzero commutative ring every proper ideal is contained in a maximal ideal, and a maximal ideal is prime, so every nonzero commutative ring has a prime ideal. ([[thm-proper-ideal-contained-in-maximal-ideal]], [[cor-maximal-ideals-are-prime]])

## Proof

**Proof technique:** direct.

1.1 Injectivity of $\mathcal O_X\to j_*\mathcal O_U$ means that for every open $W\subseteq X$ a section $s\in\mathcal O_X(W)$ with $s|_{W\cap U}=0$ is zero; it suffices to test this for affine $W$, since these form a basis of the topology. [given]

1.2 Because $a|_U=b|_U$, the inclusion $j:U\to X$ satisfies $aj=bj$; so by the universal property of [F1] there is a morphism $U\to E$ whose composite with the closed immersion $e:E\to X$ is $j$. [F1, given]

1.3 By [F4] the map $e^\sharp:\mathcal O_X\to e_*\mathcal O_E$ is surjective. [F4]

2.1 The composite $\mathcal O_X\xrightarrow{e^\sharp}e_*\mathcal O_E\xrightarrow{}j_*\mathcal O_U$ of structure-sheaf maps corresponding to $e$ and to the factorization $j=e\circ(U\to E)$ is the restriction map $\mathcal O_X\to j_*\mathcal O_U$ of the inclusion $j$. [F4, step 1.2]

3.1 The composite of step 2.1 equals the injective map $\mathcal O_X\to j_*\mathcal O_U$, hence is injective; since $e^\sharp$ is surjective by step 1.3 and its composite with the next map is injective, $e^\sharp$ is injective as well. Therefore $e^\sharp$ is an isomorphism of sheaves. [step 2.1, step 1.3]

4.1 Step 3.1 reduces the corollary to its stated hypothesis; it remains to verify that hypothesis in the reduced case. Let $X$ be reduced and $U$ topologically dense, let $W=\operatorname{Spec}A$ be a nonempty affine open and let $s\in A$ satisfy $s|_{W\cap U}=0$. Suppose $s\ne0$. By [F2] and [F3] the ring $A$ is reduced, so $s$ is not nilpotent and the localization $A_s$ is a nonzero ring; by [F5] the nonzero ring $A_s$ has a maximal ideal, hence a prime ideal, whose contraction is a prime $\mathfrak p\subseteq A$ with $s\notin\mathfrak p$, so $D(s)\subseteq W$ is a nonempty open subset. If $x\in D(s)\cap(W\cap U)$, then $s_x=0$ in $\mathcal O_{W,x}=A_{\mathfrak p_x}$ because $s$ vanishes on $W\cap U$, while $s\notin\mathfrak p_x$ together with primality of $\mathfrak p_x$ shows that no $t\notin\mathfrak p_x$ has $ts=0$, so $s_x\ne0$; hence $D(s)\cap(W\cap U)=\varnothing$, contradicting density of $U$ in $X$, since the nonempty open $D(s)\subseteq W$ must meet $U$; the exact use of the Axiom of Choice is [F5] producing $\mathfrak p$. Hence $s=0$, and by step 1.1 the map $\mathcal O_X\to j_*\mathcal O_U$ is injective. [F2, F3, F5, step 1.1, step 3.1]

5.1 Combining step 3.1 with step 4.1: if $X$ is reduced and $U$ is a topologically dense open subscheme, then $\mathcal O_X\to j_*\mathcal O_U$ is injective, and then $a|_U=b|_U$ forces $a=b$ by step 3.1. [step 3.1, step 4.1] ∎
