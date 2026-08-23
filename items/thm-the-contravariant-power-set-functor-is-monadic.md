---
id: thm-the-contravariant-power-set-functor-is-monadic
kind: theorem
title: "The contravariant power-set functor is monadic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-equivalent-encodings-of-an-adjunction, thm-crude-monadicity-the-reflexive-tripleability-theorem, lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets, def-conservative-functor, thm-set-has-all-small-limits, def-opposite-category, def-power-set]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Theorem 5.5.9"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "D. Mehrle, Category Theory Part III, Theorem 5.21"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: null
---

## Statement

The contravariant power-set functor

$$\mathcal P:\mathbf{Set}^{\mathrm{op}}\to\mathbf{Set},\qquad X\mapsto\mathcal P(X),\qquad f^{\mathrm{op}}\mapsto f^{-1},$$

is monadic.

## Facts & Assumptions

**Given:** The contravariant power-set functor between $\mathbf{Set}^{\mathrm{op}}$ and $\mathbf{Set}$.

[L1] An adjunction may be specified by a natural family of hom-set bijections ([[thm-equivalent-encodings-of-an-adjunction]]).

[L2] A conservative functor reflects isomorphisms ([[def-conservative-functor]]).

[L3] Direct and inverse image satisfy Beck–Chevalley for pullback squares of sets ([[lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets]]).

[L4] A right adjoint equipped with a specified coequalizer for every reflexive pair is monadic when it preserves those coequalizers and reflects isomorphisms ([[thm-crude-monadicity-the-reflexive-tripleability-theorem]]).

[L5] Every small diagram in $\mathbf{Set}$ has a limit ([[thm-set-has-all-small-limits]]).

## Proof

**Proof technique:** direct.

1.1 A function $X\to\mathcal P(Y)$ is the same as a relation $R\subseteq X\times Y$. Transposing $R$ gives a function $Y\to\mathcal P(X)$, and transposition is natural and involutive. By [L1] this makes the power-set functor on the opposite side its own left adjoint. [L1, construct]

1.2 If $f^{-1}:\mathcal P(Y)\to\mathcal P(X)$ is bijective, then $f$ is surjective because otherwise $\varnothing$ and a singleton outside $f[X]$ have the same preimage. It is injective because surjectivity of $f^{-1}$ realizes each singleton of $X$ as a preimage, which separates points with different singleton membership. Thus $f$ is bijective and the functor is conservative by [L2], including when $X$ is empty. [L2, algebra]

1.3 A reflexive pair in $\mathbf{Set}^{\mathrm{op}}$ corresponds to maps $f,g:A\rightrightarrows B$ in $\mathbf{Set}$ with a common retraction $r:B\to A$, so $rf=rg=1_A$. Define $E=\{a\in A:f(a)=g(a)\}$ and let $e:E\hookrightarrow A$ be inclusion. This formula supplies an equalizer for every such pair uniformly, so the opposite maps form the required specified family of reflexive coequalizers in $\mathbf{Set}^{\mathrm{op}}$. [L5, construct]

2.1 The square with both left and top maps $e:E\to A$, and with bottom and right maps $f,g:A\rightrightarrows B$, is a pullback: if $f(a)=g(a')$, applying $r$ gives $a=a'\in E$. Hence [L3] gives $$e[e^{-1}[S]]=g^{-1}[f[S]]=S\cap e[E]$$ for every $S\subseteq A$; the last equality also follows directly, while $f^{-1}[f[S]]=S$ because $rf=1_A$. [step 1.3, L3, algebra]

3.1 Let $H:\mathcal P(A)\to Z$ satisfy $Hf^{-1}=Hg^{-1}$. Applying this equality to $f[S]$ and using step 2.1 gives $H(S)=H(S\cap e[E])$. Define $\bar H:\mathcal P(E)\to Z$ by $\bar H(R)=H(e[R])$. Then $\bar H e^{-1}=H$, and this factorization is unique because $e^{-1}:\mathcal P(A)\to\mathcal P(E)$ is surjective. Thus $e^{-1}$ is the coequalizer of $f^{-1},g^{-1}$, so the power-set functor preserves every reflexive coequalizer in $\mathbf{Set}^{\mathrm{op}}$. [step 2.1, construct]

4.1 Step 1.3 supplies the required coequalizer family, while steps 1.1, 1.2, and 3.1 give the left adjoint, conservativity, and preservation hypotheses of [L4]. The crude monadicity theorem therefore proves that $\mathcal P:\mathbf{Set}^{\mathrm{op}}\to\mathbf{Set}$ is monadic. [step 1.1, step 1.2, step 1.3, step 3.1, L4] ∎
