---
id: thm-nonconstant-morphism-proper-curves-finite-surjective
kind: theorem
title: "Nonconstant morphisms of proper curves are finite and surjective"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-finite-morphism-schemes
  - def-integral-scheme
  - def-irreducible-topological-space-and-subset
  - def-proper-morphism
  - def-universally-closed-morphism
  - lem-curve-closed-subsets-finite
  - lem-integral-finite-type-scheme-function-field
  - lem-proper-source-to-separated-target-proper
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves, Lemma 53.2.4 (tag 0CCL)"
      url: "https://stacks.math.columbia.edu/tag/0CCL"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "The Stacks Project, Morphisms of Schemes, \u00a7\u00a729, 33-35, 43"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Statement

Assume the Axiom of Choice. Let $f:C\to D$ be a $k$-morphism of proper
integral curves over a field $k$ which is nonconstant in the sense that the
image $f(C)$ consists of more than one point (equivalently, $f$ does not factor
through the structure morphism of $\operatorname{Spec}$ of a field). Then $f$
is surjective and finite; in particular $f$ is dominant, the comorphism
$k(D)\to k(C)$, $g\mapsto g\circ f$, embeds $k(D)$ into $k(C)$, and
$[k(C):k(D)]$ is finite.

## Facts & Assumptions
**Given:** A field $k$, proper integral curves $C,D$ over $k$, and a nonconstant $k$-morphism $f:C\to D$.

[F1] A curve over $k$ is nonempty, integral, separated, of finite type over $k$ and of chain dimension one; a proper curve is additionally proper over $k$, and every nonempty open subscheme contains the generic point. ([[def-algebraic-curve-over-field]], [[def-integral-scheme]])

[F2] A morphism is proper if and only if it is separated, of finite type and universally closed; a universally closed morphism is closed, so the image of a closed subset is closed, and the image of an irreducible space is irreducible. ([[def-proper-morphism]], [[def-universally-closed-morphism]], [[def-irreducible-topological-space-and-subset]])

[F3] If $f:X\to S$ is proper and $g:Y\to S$ is separated, then every $S$-morphism $h:X\to Y$ is proper. ([[lem-proper-source-to-separated-target-proper]])

[F4] Under Choice, every proper closed subset of a curve is a finite set of closed points, and every point other than the generic point is closed. ([[lem-curve-closed-subsets-finite]])

[F5] A finite morphism has affine inverse images of affine opens: if $U=\operatorname{Spec}A\subseteq D$, then $f^{-1}(U)=\operatorname{Spec}B$ with $B$ a finite $A$-module. ([[def-finite-morphism-schemes]])

[F6] For an integral finite-type $k$-scheme $W$, its function field is $k(W)=\operatorname{Frac}(A)$ for every nonempty affine open $\operatorname{Spec}A\subseteq W$. ([[lem-integral-finite-type-scheme-function-field]])

[F7] The Axiom of Choice: every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F8] Stacks Project, *Algebraic Curves*, Lemma 53.2.4 (tag [0CCL](https://stacks.math.columbia.edu/tag/0CCL)): a $k$-morphism $X\to Y$ is finite if $Y$ is separated over $k$, $X$ is proper over $k$ of dimension at most one, and the image of every one-dimensional irreducible component of $X$ contains at least two points.



## Proof

**Proof technique:** use closedness for surjectivity and the finite-morphism criterion for maps from proper curves; then compute the function-field degree on affine charts.

1.1 By [F1] the schemes $C$ and $D$ are nonempty, integral, separated and of finite type over $k$, with $C$ proper over $k$; by [F3] the morphism $f$, being a $k$-morphism from a proper $k$-scheme to a separated $k$-scheme, is proper. Hence $f$ is of finite type, universally closed and closed by [F2], and its image $f(C)$ is closed and irreducible; it is nonempty because $C$ is nonempty. [F1, F2, F3, given]

1.2 The hypotheses of [F8] hold: $D$ is separated over $k$, $C$ is proper of dimension one over $k$, and the image of its sole one-dimensional irreducible component has more than one point. Therefore $f$ is finite. The cited lemma checks finite fibres over images of closed points; it does not treat the fibre over the generic point as a closed subset. [F1, F8, given]

2.1 If $f(C)$ were a proper closed subset of $D$, then by [F4] it would be a finite set of closed points, hence discrete. A nonempty finite discrete irreducible space is a single point, contradicting nonconstancy. Thus $f(C)=D$ and $f$ is surjective. [F1, F2, F4, step 1.1, given]

3.1 Let $U=\operatorname{Spec}A$ be a nonempty affine open of $D$. By finiteness [F5], $f^{-1}(U)=\operatorname{Spec}B$ with $B$ finite as an $A$-module. Both rings are domains [F1]. Surjectivity implies $A\to B$ is injective: an element in its kernel lies in every prime of $A$, hence is zero. Set $L=\operatorname{Frac}(A)$ and $K=\operatorname{Frac}(B)$ [F6]. The localization $B\otimes_A L$ is a finite-dimensional domain over $L$, hence a field; since it contains $B$, it equals $K$. Thus $k(D)=L\hookrightarrow K=k(C)$ is a finite field extension. [F1, F5, F6, step 1.2, step 2.1]

4.1 Steps 1.2, 2.1 and 3.1 prove finiteness, surjectivity and the finite function-field embedding. The stated Choice premise is inherited from [F4] in step 2.1; [F8] itself states no Choice premise. [F4, F7, F8, step 1.2, step 2.1, step 3.1] ∎
