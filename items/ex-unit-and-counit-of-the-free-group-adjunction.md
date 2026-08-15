---
id: ex-unit-and-counit-of-the-free-group-adjunction
kind: example
title: 'The unit inserts generators as one-letter words and the counit evaluates words in the free-group adjunction'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor, thm-reduced-words-form-the-free-group, def-adjunction-by-unit-counit-and-triangle-identities]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.2.4'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Example

For the free-group adjunction $F\dashv U$, the unit $\eta_X:X\to UF(X)$ sends a generator to its one-letter word. The counit $\varepsilon_G:FU(G)\to G$ evaluates a reduced word in the elements of $G$.

## Facts & Assumptions

**Given:** A set $X$ and a group $G$.

[L1] The free-group adjunction identifies homomorphisms $F(X)\to G$ with functions $X\to U(G)$ by restriction to the generator map ([[thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[F1] Reduced words on $X\sqcup X^{-1}$ form $F(X)$, and the generator map sends $x$ to its one-letter word ([[thm-reduced-words-form-the-free-group]]).

[F2] The triangle identities are $(\varepsilon F)(F\eta)=1_F$ and $(U\varepsilon)(\eta U)=1_U$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Verification

**Proof technique:** direct.

1.1 Under [L1], the identity of $F(X)$ transposes to the generator inclusion, so $\eta_X(x)$ is the one-letter word $x$. The identity function of $U(G)$ extends uniquely to $\varepsilon_G$, hence $\varepsilon_G$ evaluates a word by multiplying its letters in $G$. [L1, F1]

2.1 On a generator $x$, the composite $\varepsilon_{F(X)}F(\eta_X)$ first makes the one-letter word whose letter is the word $x$, then evaluates it to $x$. The two homomorphisms agree on all generators, so the first identity in [F2] holds. [step 1.1, L1, F2]

2.2 For $g\in G$, the composite $U(\varepsilon_G)\eta_{U(G)}$ forms the one-letter word $g$ and evaluates it to $g$. Thus the second identity in [F2] holds. [step 1.1, F2]

3.1 If $X=\varnothing$, the first check is equality of the unique homomorphisms from the trivial free group. If $G$ is trivial, every evaluated word is its identity. Thus both boundary cases obey the same formulas. [step 2.1, step 2.2] ∎
