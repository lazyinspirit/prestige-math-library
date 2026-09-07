---
id: thm-completion-of-an-absolutely-valued-field
title: "Completion of an absolutely valued field"
kind: theorem
status: published
origin: pipeline
deps: [def-multiplicative-absolute-value-on-a-field, thm-metric-completion-exists, thm-metric-completion-unique]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a75, Definitions 5.1\u20135.2 and Theorem 5.3, pp.8\u20139"
      url: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf
proof_strategy: direct argument
---

## Statement

The metric completion $\widehat F$ of an absolutely valued field F has a unique compatible complete valued-field structure. The map $F\to\widehat F$ is a dense isometric field embedding, universal for isometric field maps from F to complete valued fields. In the nonarchimedean case the value group and residue field are unchanged. We use the ordinary metric-completion construction with its countable-choice assumption for arbitrary metric spaces.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[def-multiplicative-absolute-value-on-a-field]]: Let $F$ be a field. An **absolute value** on $F$ is a function $|\cdot| : F \to \mathbb R_{\ge 0}$ such that for all $x,y \in F$: $|x| = 0 \iff x = 0,\qquad |xy| = |x||y|,\qquad |x+y| \le |x| + |y|.$ It is **nonarchimedean** when it satisfies the stronger inequality $|x+y| \le \max\{|x|,|y|\}$ for all $x,y \in F$. It is **trivial** when $|x| = 1$ for every nonzero $x \in F$.

[F2] [[thm-metric-completion-exists]]: Let $(X,d)$ be a metric space (def-metric-space) and let $\mathcal{C}$ be the set of all Cauchy sequences in $X$ (def-cauchy-in-metric). Then: 1. For all $x = (x_n)$ and $y = (y_n)$ in $\mathcal{C}$ the real sequence $\big(d(x_n,y_n)\big)_n$ converges, so $\rho(x,y) \;:=\; \lim_{n} d(x_n,y_n)$ is a single well-determined real (thm-cauchy-criterion-via-lub, lem-limit-unique). 2. The relation $x \sim y :\Longleftrightarrow \rho(x,y) = 0$ is an equivalence relation on $\mathcal{C}$. Write $\widehat{X} := \mathcal{C}/\!\sim$ for the set of its classes and $[x]$ for the class of $x$. 3. $\widehat{d}\big([x],[y]\big) := \rho(x,y)$ does not depend on the chosen representatives, and $\widehat{d}$ is a metric on $\widehat{X}$. 4. The map $\iota : X \to \widehat{X}$ sending $p$ to the class of the constant sequence at $p$ is an isometric embedding with dense image (def-isometry-and-metric-embedding, def-metric-interior-closure-boundary). 5. $(\widehat{X}, \widehat{d})$ is complete. Consequently $\big((\widehat{X},\widehat{d}), \iota\big)$ is a completion of $(X,d)$ (def-metric-completion), and **every metric space has a completion**. **The notation is kept honest.** A Cauchy sequence in $X$ need not converge in $X$, so no symbol $\lim_n x_n$ appears anywhere below; the only limits taken are limits of *real* sequences, and each is written only after its existence has been proved. The equivalence relation is defined and verified here rather than cited, as was done for def-integers, so that the construction is self-contained and its transitivity argument is visible at the point of use.

[F3] [[thm-metric-completion-unique]]: Let $(X,d)$ be a metric space (def-metric-space); completions of it exist (thm-metric-completion-exists, def-metric-completion). Then: 1. **Universal property.** Let $\big((\widehat{X},\widehat{d}), \iota\big)$ be a completion of $(X,d)$, let $(Z,d_Z)$ be a complete metric space (def-complete-metric-space) and let $f : X \to Z$ be uniformly continuous (def-metric-uniform-continuity). Then there is exactly one continuous $F : \widehat{X} \to Z$ with $F \circ \iota = f$, and that $F$ is uniformly continuous. 2. **Uniqueness of the completion.** Let $\big((\widehat{X}_1,\widehat{d}_1), \iota_1\big)$ and $\big((\widehat{X}_2,\widehat{d}_2), \iota_2\big)$ be completions of $(X,d)$. Then there is exactly one continuous $\varphi : \widehat{X}_1 \to \widehat{X}_2$ with $\varphi \circ \iota_1 = \iota_2$, and that $\varphi$ is an isometry (def-isometry-and-metric-embedding). So a completion is determined by $(X,d)$ up to a unique isometry compatible with the embeddings, which is what licenses the phrase *the* completion from here on.

## Proof

1.1 Use Cauchy-sequence classes with distance $\lim|x_n-y_n|$. Addition and multiplication are defined termwise: Cauchy sequences are bounded, and $|x_ny_n-x_my_m|\le|x_n||y_n-y_m|+|y_m||x_n-x_m|$ proves that products are Cauchy and independent of representatives. Addition is treated by the triangle inequality. Field identities follow termwise, and $|[x_n]|=\lim|x_n|$ is multiplicative and positive definite. [F1, F2]

2.1 For a nonzero class x, eventually $|x_n|\ge|x|/2>0$. The tail reciprocals are Cauchy because $|x_n^{-1}-x_m^{-1}|=|x_n-x_m|/(|x_n||x_m|)$; finitely many initial entries may be set to one. Their class is the inverse of x. Zero and one are the constant classes, so this proves the field structure on the complete metric space. [step 1.1]

3.1 An isometric field map to a complete field extends uniquely as a continuous map by the metric universal property. Taking limits of sums and products shows that the extension is a field map; taking distance limits shows it is an isometry. Density forces uniqueness of all these operations and of the extending map. The general completion theorem is used with its usual countable choices of representatives; no choice-free assertion for arbitrary F is inferred. [F3, step 2.1]

4.1 In the nonarchimedean case the strong triangle inequality passes to limits. If $x\ne0$ in the completion, choose $a\in F$ with $|x-a|<|x|$; the strong inequality applied in both directions gives $|a|=|x|$. Thus no new nonzero values appear. If $|x|\le1$, approximation with $|x-a|<1$ has $|a|\le1$ and gives the same residue. The kernel of the map of original valuation rings on residues is exactly $|a|<1$, proving the residue-field isomorphism. A trivial value gives the discrete already-complete field. [step 1.1, step 3.1] ∎
