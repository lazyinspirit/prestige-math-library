---
id: thm-mates-under-a-pair-of-adjunctions
kind: theorem
title: 'Natural transformations have mates under a pair of adjunctions'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjunction-by-unit-counit-and-triangle-identities, thm-interchange-law-for-natural-transformations, def-horizontal-composition-and-whiskering-of-natural-transformations, lem-horizontal-composition-of-natural-transformations-is-natural, lem-vertical-composition-of-natural-transformations-is-natural]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Proposition 4.3.7'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Saunders Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter IV.7'
      url: 'https://doi.org/10.1007/978-1-4757-4721-8'
pipeline_run: null
---

## Statement

Let $F\dashv G:\mathcal D\to\mathcal C$ and $F'\dashv G':\mathcal D'\to\mathcal C'$ have units $\eta,\eta'$ and counits $\varepsilon,\varepsilon'$. For functors $H:\mathcal C\to\mathcal C'$ and $K:\mathcal D\to\mathcal D'$, there is a bijection between natural transformations

$$\alpha:F'H\Rightarrow KF$$

and their **right mates**

$$\alpha^\flat:HG\Rightarrow G'K.$$

The right mate and inverse construction are

$$\alpha^\flat=(G'K\varepsilon)\circ(G'\alpha G)\circ(\eta'HG),$$

$$\beta^\sharp=(\varepsilon'KF)\circ(F'\beta F)\circ(F'H\eta).$$

When the two adjunctions coincide and $H=1_{\mathcal C}$, $K=1_{\mathcal D}$, the mate of $1_F$ is $1_G$. Mates respect typed vertical and horizontal pasting. No local-smallness hypothesis is needed.

For a general pair of adjunctions the mate of an identity transformation need not be an identity transformation: $\alpha^\flat$ has source $HG$ and target $G'K$, and these functors need not be equal.

## Facts & Assumptions

**Given:** The adjunctions, functors, and typed transformations in the Statement.

[L1] Each adjunction supplies natural units, counits, and two triangle identities ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

[L2] The left whiskering $H\alpha$ has components $H(\alpha_A)$ and the right whiskering $\alpha K$ has components $\alpha_{KB}$; each is a horizontal composite of $\alpha$ with an identity transformation, and horizontal composites of natural transformations satisfy naturality ([[def-horizontal-composition-and-whiskering-of-natural-transformations]], [[lem-horizontal-composition-of-natural-transformations-is-natural]]).

[L3] The vertical composite of natural transformations satisfies naturality ([[lem-vertical-composition-of-natural-transformations-is-natural]]).

[F1] The interchange identity is $(\beta'\circ\beta)*(\alpha'\circ\alpha)=(\beta'*\alpha')\circ(\beta*\alpha)$ whenever the expressions are defined ([[thm-interchange-law-for-natural-transformations]]).

## Proof

**Proof technique:** direct.

1.1 Whiskering shows that the three factors defining $\alpha^\flat$ have successive types $HG\to G'F'HG\to G'KFG\to G'K$; the three factors defining $\beta^\sharp$ have successive types $F'H\to F'HGF\to F'G'KF\to KF$. [L1]

1.2 Each of those six factors is a whiskering of one of $\eta'$, $\alpha$, $\varepsilon$, $\varepsilon'$, $\beta$, $\eta$, every one of which is natural by [L1] and the hypothesis on $\alpha$ and $\beta$; so each factor is natural by [L2], and the two vertical composites are natural by [L3]. Only the unit–counit data enters, so the argument applies whether or not the four categories are locally small. [L1, L2, L3]

1.3 When the two adjunctions coincide and $H,K$ are identity functors, the middle factor $G1_FG$ is the identity transformation of $GFG$, so the mate of $1_F$ is $(G\varepsilon)\circ(\eta G)$, which is $1_G$ by the triangle identity of [L1]. For a typed vertical or horizontal pasting, expand the displayed formulas; interchange identifies the expansion with the corresponding pasting of the mates, with the order fixed by the types. [L1, F1]

2.1 Substitute $\alpha^\flat$ into the formula for $(-)^\sharp$. Interchange moves the two unit-counit pairs together, and the triangle identities cancel both pairs, leaving $\alpha$. [step 1.1, F1, L1]

2.2 Substituting $\beta^\sharp$ into the formula for $(-)^\flat$ gives the dual cancellation and leaves $\beta$. Thus the constructions are inverse. [step 1.1, F1, L1]

3.1 Hence the formulas give the asserted bijection, carry $1_F$ to $1_G$ in the coinciding-adjunction case, and preserve both forms of compatible pasting. [step 2.1, step 2.2, step 1.3] ∎
