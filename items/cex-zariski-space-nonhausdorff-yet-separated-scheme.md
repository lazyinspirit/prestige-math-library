---
id: cex-zariski-space-nonhausdorff-yet-separated-scheme
kind: counterexample
title: A separated scheme whose point space is not Hausdorff
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-affine-schemes-separated, rem-hausdorff-analogy-limited]
justified_by: []
aliases: []
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, The Rising Sea, Exercise 11.3.B, printed p.308"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Schemes, Section 26.21 introduction, printed pp.39-40"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement refuted

Let $k$ be a field. If a $k$-scheme is separated over $k$, then its underlying
Zariski topological space is Hausdorff. In particular separatedness of
$\mathbb A^1_k$ can be read off from the separation of its points by disjoint
open sets.

## Facts & Assumptions

**Given:** A field $k$, the affine line $\mathbb A^1_k=\operatorname{Spec}k[t]$ with structure morphism to $\operatorname{Spec}k$, and the two points $(0)$ and $(t)$ of $\operatorname{Spec}k[t]$.

[F1] Every morphism of affine schemes $\operatorname{Spec}B\to\operatorname{Spec}A$ is separated; in particular $\mathbb A^1_k\to\operatorname{Spec}k$ is separated. ([[cor-affine-schemes-separated]])

[F2] The comparison between separatedness and Hausdorffness goes through the scheme-theoretic product: a nonempty open subset of $\operatorname{Spec}k[t]$ is the complement of a closed set $V(f)$ with $f\ne0$, the generic point $(0)$ lies in every such complement, so every two nonempty open subsets meet, and closedness of the diagonal in $X\times_SX$ says nothing about pairs of distinct points of $|X|$. ([[rem-hausdorff-analogy-limited]])

## Counterexample

1.1 The affine line $\mathbb A^1_k=\operatorname{Spec}k[t]$ is affine over $\operatorname{Spec}k$, so by [F1] the structure morphism is separated. The points $(0)$ and $(t)$ of $\operatorname{Spec}k[t]$ are distinct: $(0)$ is the generic point, and the maximal ideal $(t)$ is a proper nonzero prime. [F1, algebra]

1.2 Let $U\subseteq\operatorname{Spec}k[t]$ be a nonempty open subset. Its complement is a proper closed subset, hence of the form $V(f)$ for some nonzero $f\in k[t]$; since $k[t]$ is a domain, a nonzero polynomial is not in the prime ideal $(0)$, so $(0)\notin V(f)$ and therefore $(0)\in U$. Thus $(0)$ belongs to every nonempty open subset. [F2, algebra]

2.1 Let $U_1$ and $U_2$ be open neighbourhoods of the distinct points $(0)$ and $(t)$. Since $U_2$ is nonempty, step 1.2 gives $(0)\in U_2$, and $(0)\in U_1$ by definition; hence $U_1\cap U_2\ni(0)$ is nonempty. [step 1.1, step 1.2]

3.1 Step 2.1 shows that no two distinct points of $\operatorname{Spec}k[t]$ have disjoint open neighbourhoods, so $|\mathbb A^1_k|$ is not Hausdorff, while step 1.1 shows that $\mathbb A^1_k$ is separated over $k$; the implication asserted in the statement is therefore false. [F2, step 1.1, step 2.1] ∎

## Remarks

The prime-spectrum page records the same non-Hausdorff phenomenon for
$\operatorname{Spec}\mathbb Z$ as [[ex-zariski-spectrum-not-hausdorff]]. Here the
example is placed next to the separatedness of $\mathbb A^1_k$, which is what
makes the failure of the topological analogy visible: the two notions live in
different categories, the scheme-theoretic product and the product of
topological spaces.
