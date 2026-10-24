---
id: thm-the-codensity-construction-satisfies-the-monad-laws
kind: theorem
title: "The codensity construction satisfies the monad laws"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-codensity-monad, def-left-and-right-kan-extension, def-monad, def-natural-transformation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Exercise 6.5(viii)"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Codensity and the ultrafilter monad, §2"
      url: "https://arxiv.org/pdf/1209.3606"
pipeline_run: null
---

## Statement

Let $G:\mathcal B\to\mathcal C$ be a functor, and suppose its codensity monad
$(T,\eta,\mu)$ is supplied as in [[def-codensity-monad]] from a right Kan
extension $\varepsilon:TG\Rightarrow G$ of $G$ along itself.

Then $(T,\eta,\mu)$ is a monad on $\mathcal C$ ([[def-monad]]): the two unit
laws and the associativity law all hold.

## Facts & Assumptions

**Given:** A right Kan extension $\varepsilon:TG\Rightarrow G$ of $G$ along itself, and the induced natural transformations $\eta:1_{\mathcal C}\Rightarrow T$ and $\mu:T^2\Rightarrow T$.

[F1] In the codensity construction, $1_G=\varepsilon\circ(\eta G)$ and $\varepsilon\circ(\mu G)=\varepsilon\circ(T\varepsilon)$ ([[def-codensity-monad]]).

[F2] A right Kan extension $(T,\varepsilon)$ is terminal among natural transformations $SG\Rightarrow G$ ([[def-left-and-right-kan-extension]]).

[F3] A monad is an endofunctor with unit and multiplication satisfying $\mu\circ T\eta=1_T=\mu\circ\eta T$ and $\mu\circ T\mu=\mu\circ\mu T$ ([[def-monad]]).

## Proof

**Proof technique:** direct.

1.1 The codensity unit $\eta$ is defined by the identity on $G$: by [F1], $1_G=\varepsilon\circ(\eta G)$. [F1]

2.1 The codensity multiplication $\mu$ is defined by pasting the counit with itself: by [F1], $\varepsilon\circ(\mu G)=\varepsilon\circ(T\varepsilon)$. [F1, step 1.1]

3.1 To prove the unit laws, compare natural transformations $T\Rightarrow T$ after whiskering with $G$ and composing with $\varepsilon$, which [F2] makes a uniqueness test: $\varepsilon\circ((\mu\circ T\eta)G)=\varepsilon\circ(\mu G)\circ T(\eta G)=\varepsilon\circ T\varepsilon\circ T(\eta G)=\varepsilon$ by [F1], so $\mu\circ T\eta=1_T$; likewise $\varepsilon\circ((\mu\circ\eta T)G)=\varepsilon\circ(\mu G)\circ\eta TG=\varepsilon\circ T\varepsilon\circ\eta TG=\varepsilon\circ(\eta G)\circ\varepsilon=\varepsilon$, where the third equality is naturality of $\eta$ at $\varepsilon$, so $\mu\circ\eta T=1_T$. [F1, F2, step 2.1]

4.1 For associativity, both composites $\mu\circ T\mu$ and $\mu\circ\mu T$ are natural transformations $T^3\Rightarrow T$. After whiskering with $G$ and composing with $\varepsilon$, the left composite gives $\varepsilon\circ((\mu\circ T\mu)G)=\varepsilon\circ(\mu G)\circ T(\mu G)=\varepsilon\circ T\varepsilon\circ T^2\varepsilon$ by [F1], while the right composite gives $\varepsilon\circ((\mu\circ\mu T)G)=\varepsilon\circ(\mu G)\circ\mu TG=\varepsilon\circ T\varepsilon\circ\mu TG=\varepsilon\circ(\mu G)\circ T^2\varepsilon=\varepsilon\circ T\varepsilon\circ T^2\varepsilon$, where the third equality is naturality of $\mu$ at $\varepsilon$ and the last uses [F1] again. By the uniqueness clause [F2], the two composites are equal. Thus $\mu\circ T\mu=\mu\circ\mu T$. Together with step 3.1, this is exactly the monad law package [F3]. [F1, F2, F3, step 3.1] ∎
