---
id: lem-effective-fppf-descent-separated-locally-quasi-finite
kind: lemma
title: "Effective fppf descent for separated locally quasi-finite morphisms"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
local_addition: true
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-fppf-topology-on-schemes
  - def-descent-data-for-schemes
  - def-separated-morphism-schemes
  - def-quasi-finite-morphism-schemes
  - def-flat-morphism-schemes
  - def-locally-finite-presentation-morphism
  - def-fibre-product-schemes-universal-property
  - lem-scheme-zariski-main-factorization-quasi-finite
  - lem-finite-morphism-affine
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - thm-flat-finite-presentation-is-open
  - def-axiom-of-choice
  - lem-nonaffine-effective-affine-algebra-descent
  - thm-gluing-affine-schemes
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 37 (More on Morphisms), Section 37.57, Lemma 37.57.1"
      url: "https://stacks.math.columbia.edu/download/more-morphisms.pdf"
      locator: "Lemma 37.57.1 (tag 02W8), printed 169-170; proof read in full, with Descent Lemmas 35.36.2 (02W3), 35.38.1 (0247) and 35.35.13 (0AP4), More on Morphisms Lemma 37.43.2 (02LR) and Morphisms Lemma 29.26.10 (01UA)"
---

## Statement

Assume the Axiom of Choice inherited from the Zariski Main and descent
suppliers ([[def-axiom-of-choice]]). Let $S$ be a scheme and let
$\{X_i\to X\}$ be an fppf covering of an $S$-scheme $X$
([[def-fppf-topology-on-schemes]]). If $(V_i/X_i,\varphi_{ij})$ is a descent
datum for schemes ([[def-descent-data-for-schemes]]) and each $V_i\to X_i$ is
separated ([[def-separated-morphism-schemes]]) and locally quasi-finite
([[def-quasi-finite-morphism-schemes]]), then the descent datum is effective:
there is a scheme $V\to X$, separated and locally quasi-finite over $X$, with
compatible isomorphisms $V\times_XX_i\cong V_i$.

## Facts & Assumptions

**Given:** $S$, an fppf covering $\{X_i\to X\}$ of an $S$-scheme $X$, a descent datum $(V_i/X_i,\varphi_{ij})$ with every $V_i\to X_i$ separated and locally quasi-finite, and AC.

[F1] Fppf coverings are stable under base change and composition; effectivity of descent is preserved under refinement and is local on the base ([[def-fppf-topology-on-schemes]], [[def-descent-data-for-schemes]]; Stacks Descent Lemma 35.36.2, tag 02W3, in the recorded source).

[F2] Flat locally finite-presentation morphisms are universally open, so their base changes are open maps ([[thm-flat-finite-presentation-is-open]]).

[F3] A separated quasi-finite morphism to an affine scheme factors as an open immersion followed by a finite morphism; a finite morphism to an affine scheme has affine source ([[lem-scheme-zariski-main-factorization-quasi-finite]], [[lem-finite-morphism-affine]]).

[F4] Under AC, morphisms descend uniquely along faithfully flat, quasi-compact, locally finitely presented covers when their two pullbacks agree ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[def-axiom-of-choice]]).

[F5] Separatedness and local quasi-finiteness are preserved under base change and composition with open immersions; a quasi-compact locally quasi-finite morphism is quasi-finite ([[def-separated-morphism-schemes]], [[def-quasi-finite-morphism-schemes]], [[def-fibre-product-schemes-universal-property]]).

[F6] Faithfully flat affine algebra descent is effective, with its invariant equalizer and compatible maps ([[lem-nonaffine-effective-affine-algebra-descent]]). Schemes glue along compatible open isomorphisms, by applying affine-chart gluing ([[thm-gluing-affine-schemes]]).

## Proof

**Given:** The fppf descent datum of the Statement.

1.1 Affine refinement and reduction. Work on an affine open of the original target. Flat locally finitely presented maps are open by [F2], so finitely many affine source opens of the given covering have images covering this affine target. Their disjoint union gives a single affine faithfully flat finitely presented cover $X=\operatorname{Spec}B\to S=\operatorname{Spec}A$. Pull the datum back to it. Effectivity on such a refinement implies effectivity for the original datum: over each original member the two pulled-back schemes become compatibly isomorphic on its base change by $X\to S$, so [F4] descends the isomorphism and its inverse; uniqueness makes all cocycles agree. Local solutions on target affine opens likewise glue uniquely by [F4] and [F6]. It therefore suffices to treat this single affine cover. Write $V\to X$ for the scheme with its datum. If the target is empty, the unique solution is the empty scheme. [F1, F2, F4, F6, given]

1.2 Saturated quasi-compact opens. Let $W^1\subseteq V$ be an affine open and let $\varphi:V\times_SX\to X\times_SV$ be the descent transport. Set $W=\operatorname{pr}_V(\varphi(W^1\times_SX))$. It is open by [F2] and quasi-compact, since $W^1\times_SX$ is affine and its continuous image is quasi-compact. The diagonal identity gives $W^1\subseteq W$. The cocycle makes $W$ invariant under transport: applying two transports to a point has the same result as their composite. Points over a common base point may first be lifted to a common residue-field extension, since their residue-field tensor product is nonzero. This gives $\varphi(W\times_SX)=X\times_SW$ and restricts the datum to $W$. [F1, F2]

2.1 Quasi-affineness. The map $W\to X$ is separated and locally quasi-finite by [F5]. It is quasi-compact: a distinguished open in the affine $X$ pulls back to the nonvanishing locus of a global function on the quasi-compact $W$; choose a finite affine cover of $W$, where each such locus is principal affine. Thus $W\to X$ is quasi-finite. By [F3] it is an open subscheme of a finite $X$-scheme, which is affine, hence $W$ is quasi-affine. It is also separated over $S$, since $X\to S$ is affine. [F3, F5, step 1.2]

3.1 Canonical affinization and flat base change. Put $C=\Gamma(W,\mathcal O_W)$. The canonical map $j:W\to\operatorname{Spec}C$ is an open immersion. To verify this, embed $W$ into an affine $\operatorname{Spec}D$ and cover this quasi-compact open by finitely many principal opens $D_D(f_a)\subseteq W$. For any quasi-compact separated scheme, sections are the equalizer of the finite products of the coordinate rings of a finite affine cover and its affine pair intersections; intersections are affine because the separated diagonal is closed in the product of the affine charts. Localizing this equalizer is exact and commutes with its finite products, so $C_{f_a}=\Gamma(W_{f_a},\mathcal O_W)=D_{f_a}$. Thus $j$ is an isomorphism on each $W_{f_a}$ onto $D_C(f_a)$ and is an open immersion globally. The same equalizer shows that, for any flat ring extension $B\to B'$, $C\otimes_BB'\cong\Gamma(W_{B'},\mathcal O)$: tensor preserves this finite equalizer and the affine intersection rings base change. These identifications respect restriction and composition. [F3, step 2.1]

4.1 Effective descent of the quasi-affine piece. The two projections $B\to B\otimes_AB$ are flat. Therefore step 3.1 turns the datum on $W$ into an algebra descent datum on $C$, satisfying its cocycle by functoriality. By [F6] it descends to an $A$-algebra $C_0$ with $B\otimes_AC_0\cong C$. The canonical open immersion $W\subseteq\operatorname{Spec}C$ is compatible with that datum. Let $p:\operatorname{Spec}C\to\operatorname{Spec}C_0$ be the faithfully flat finitely presented base change of $X\to S$. Its invariant open $W$ descends to the open $W_0=p(W)$: openness follows from [F2], and invariance says that any two points in one fibre either both lie in $W$ or both do not. The residue-field tensor argument of step 1.2 proves $p^{-1}(W_0)=W$. Hence $W_0\times_SX\cong W$, with its original datum. This proves quasi-affine effectivity here without an external descent lemma. [F2, F6, step 1.2, step 3.1]

5.1 Gluing the descended pieces. The saturated opens of step 1.2 cover $V$. For two such opens, their intersection is an invariant open in each. Under the affine faithfully flat cover $W\to W_0$, invariance descends this intersection to an open of $W_0$ by the image argument of step 4.1, and likewise for the other piece. Their canonical upstairs identification descends with its inverse by [F4]. These identifications satisfy the cocycle by uniqueness of morphism descent. Glue the descended pieces by [F6], using their affine covers, to a scheme $V_0\to S$. Its pullback is the given $V$, compatibly with the datum. [F4, F6, step 1.2, step 4.1]

6.1 Descent of separatedness. The diagonal of $V_0\to S$ becomes a closed immersion after the affine faithfully flat cover $X\to S$, because $V\to X$ is separated. Closed immersions descend here: on an affine open $T=\operatorname{Spec}R$ of the diagonal target, its pullback $T_X$ is affine and the upstairs closed subscheme is specified by an ideal $I\subseteq R\otimes_AB$ with the canonical descent datum. Module descent [F6] descends the inclusion $I\hookrightarrow R\otimes_AB$ to an ideal $J\subseteq R$; the ideal property is preserved by transport. The quotient $R/J$ base changes to the upstairs quotient. By [F4] the resulting closed subscheme and the original diagonal fibre product are isomorphic: descend their compatible upstairs isomorphism and its inverse. Thus the diagonal is a closed immersion, and $V_0\to S$ is separated. [F4, F6, step 5.1]

7.1 Descent of local quasi-finiteness. Restrict $V_0$ to an affine open $Z=\operatorname{Spec}D$ over the affine $S$. Its base change $Z_X$ is affine and locally quasi-finite over $X$, hence quasi-finite because it is quasi-compact. In particular $D\otimes_AB$ is finitely generated as a $B$-algebra. Finitely many tensor coefficients $d_a\in D$ of such generators generate an $A$-subalgebra $D'\subseteq D$ whose tensor with $B$ surjects onto $D\otimes_AB$; faithful flatness applied to the module $D/D'$ gives $D=D'$. Thus $Z\to S$ is of finite type. For a point $s\in S$, choose a point of $X$ above it with residue field $L/\kappa(s)$. The fibre algebra $(D\otimes_A\kappa(s))\otimes_{\kappa(s)}L$ is finite-dimensional over $L$: apply [F3] to the separated quasi-finite $Z_X\to X$, whose fibre is an open subscheme of a finite fibre. A finite-dimensional algebra is Artinian; its prime spectrum is finite and discrete, and every open subscheme is a product of some of its local factors, hence again finite-dimensional. Linear independence is preserved by field extension, so $D\otimes_A\kappa(s)$ is already finite-dimensional over $\kappa(s)$. Its localizations at primes are finite-dimensional, which is the pointwise quasi-finite condition of [F5]. Each $Z\to S$ is therefore quasi-finite, and $V_0\to S$ is locally quasi-finite. Undoing step 1.1 gives the entire original claim. AC is inherited from [F3], [F4], [F6] and the affine-cover choices. [F3, F4, F5, F6, step 1.1, step 5.1, step 6.1] ∎

