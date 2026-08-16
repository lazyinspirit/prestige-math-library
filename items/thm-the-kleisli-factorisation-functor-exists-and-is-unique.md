---
id: thm-the-kleisli-factorisation-functor-exists-and-is-unique
kind: theorem
title: "The Kleisli factorisation functor for an adjunction inducing a monad exists and is unique"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [thm-the-kleisli-adjunction-induces-the-given-monad, rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic, def-adjunction-by-unit-counit-and-triangle-identities, thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.2.13"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Theorem 6.3.10"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $F:\mathcal C\rightleftarrows\mathcal D:U$ be an adjunction with counit $\varepsilon$ whose induced monad is a fixed monad $T$ on $\mathcal C$ on the nose, and write $F_T\dashv U_T$ for the Kleisli adjunction with counit $\varepsilon^T$. There is exactly one functor $J:\mathcal C_T\to\mathcal D$ satisfying

$$JF_T=F,\qquad UJ=U_T,\qquad J(\varepsilon^T_B)=\varepsilon_{FB}\ \text{for every object }B,$$

namely

$$J(A)=F(A),\qquad J(f:A\to TB)=\varepsilon_{FB}\circ F(f):FA\to FB.$$

These three equalities are what it means for $J$ to be a morphism of adjunctions from the Kleisli adjunction to $F\dashv U$.

## Facts & Assumptions

**Given:** An adjunction $F\dashv U$ as in [[def-adjunction-by-unit-counit-and-triangle-identities]], inducing $T=UF$ with $\mu=U\varepsilon F$ as in [[thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]], and the Kleisli adjunction of [[thm-the-kleisli-adjunction-induces-the-given-monad]].

## Proof

**Proof technique:** direct.

1.1 A Kleisli arrow $f:A\to TB=UFB$ has adjoint transpose $\varepsilon_{FB}\circ F(f):FA\to FB$; define $J$ by this formula and by $J(A)=FA$. [given]

2.1 For an identity $\eta_A$, the first triangle identity gives $J(\eta_A)=\varepsilon_{FA}\circ F(\eta_A)=1_{FA}$. For $f:A\to TB$ and $g:B\to TC$, substitution of $\mu=U\varepsilon F$, naturality of $\varepsilon$, and the triangle identities gives $J(g\star f)=J(g)\circ J(f)$, so $J$ is a functor. [step 1.1, given]

3.1 The formulas give $JF_T=F$ and $UJ=U_T$ on objects and arrows, and $J$ sends the Kleisli counit to $\varepsilon$. Conversely, those equalities force the image of $f:A\to UFB$ to be its adjoint transpose, so they force the formula of step 1.1 on every arrow and prove uniqueness. [step 1.1, step 2.1] ∎
