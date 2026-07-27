---
id: lem-group-inverse-laws
kind: lemma
title: "In a group $e^{-1} = e$, $(g^{-1})^{-1} = g$ and $(gh)^{-1} = h^{-1}g^{-1}$, the order of the last product being essential"
status: published
origin: session
deps: [def-group, def-invertible-element, lem-inverse-unique, def-identity-element]
justified_by: []
aliases: [lem-socks-and-shoes]
landmark: false
short: "$(gh)^{-1}=h^{-1}g^{-1}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Group (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Group_(mathematics)"
    - title: "Inverse element (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_element"
pipeline_run: null
---

## Statement

Let $G$ be a group ([[def-group]]) with identity $e$. For all $g, h \in G$:

1. $e^{-1} = e$;
2. $(g^{-1})^{-1} = g$; in particular inversion $g \mapsto g^{-1}$ is its own
   two-sided inverse as a map $G \to G$, hence a bijection of $G$;
3. $(gh)^{-1} = h^{-1} g^{-1}$;
4. $(gh)^{-1} = g^{-1} h^{-1}$ holds **if and only if** $g$ and $h$ commute. So
   the reversal of order in claim 3 cannot be dropped in general, and in an
   abelian group it may be.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$, and elements $g, h \in G$; $g^{-1}$ denotes the unique two-sided inverse of $g$ ([[def-group]], [[def-invertible-element]]).

[L1] Uniqueness of inverses in the sharp form: if $x$ is invertible and $y * x = e$ or $x * y = e$, then $y = x^{-1}$; and an element with a left and a right inverse is invertible with that common element as inverse ([[lem-inverse-unique]]).

[L2] The group axioms: $*$ is associative, $e$ is a two-sided identity, and every element has a two-sided inverse ([[def-group]], [[def-identity-element]]).

## Proof

**Proof technique:** direct.

1.1 $e \, e = e$ by the identity law, so $e$ is a two-sided inverse of $e$; since inverses are unique, $e^{-1} = e$, which is claim 1. [L1, L2]

1.2 The defining equations of $g^{-1}$ are $g^{-1} g = e$ and $g\, g^{-1} = e$; read with $g^{-1}$ in the role of the element being inverted, they say that $g$ is a two-sided inverse of $g^{-1}$. Uniqueness gives $(g^{-1})^{-1} = g$, which is the equation of claim 2. [L1, L2]

1.3 Compute $(gh)(h^{-1}g^{-1}) = g\,(h h^{-1})\,g^{-1} = g\,e\,g^{-1} = g g^{-1} = e$, using associativity to regroup and the identity law twice. [L2]

1.4 Compute likewise $(h^{-1}g^{-1})(gh) = h^{-1}(g^{-1}g)h = h^{-1} e\, h = h^{-1} h = e$. [L2]

2.1 By steps 1.3 and 1.4 the element $h^{-1}g^{-1}$ is a two-sided inverse of $gh$, so $gh$ is invertible and $(gh)^{-1} = h^{-1}g^{-1}$ by uniqueness; this is claim 3. [step 1.3, step 1.4, L1]

2.2 Inversion is a map $G \to G$ by claim (G3) and uniqueness, and step 1.2 says it composed with itself is the identity map of $G$, so it is a bijection of $G$ onto itself; this completes claim 2. [step 1.2, L1, L2]

3.1 Suppose $gh = hg$. Applying step 2.1 to the pair $(h,g)$ gives $(hg)^{-1} = g^{-1}h^{-1}$, and $gh = hg$ gives $(gh)^{-1} = (hg)^{-1}$; hence $(gh)^{-1} = g^{-1}h^{-1}$. [step 2.1, given]

3.2 Conversely suppose $(gh)^{-1} = g^{-1}h^{-1}$. Taking inverses of both sides and using step 2.1 on the right and step 1.2 on the left gives $gh = ((gh)^{-1})^{-1} = (g^{-1}h^{-1})^{-1} = (h^{-1})^{-1}(g^{-1})^{-1} = hg$. [step 1.2, step 2.1]

4.1 Steps 3.1 and 3.2 give claim 4: $(gh)^{-1} = g^{-1}h^{-1}$ holds exactly when $g$ and $h$ commute, so the reversal in claim 3 is essential precisely for non-commuting pairs, and is harmless in an abelian group. [step 3.1, step 3.2]

5.1 Claims 1, 2, 3 and 4 are established in steps 1.1, 2.2, 2.1 and 4.1. [step 1.1, step 2.1, step 2.2, step 4.1] ∎

## Remarks

- Claim 4 is what makes the wording of claim 3 more than a stylistic preference: a pair with $(gh)^{-1} \ne g^{-1}h^{-1}$ exists in a group exactly when some two of its elements fail to commute. That non-abelian groups exist is settled below by [[lem-symmetric-group-is-a-group]], which shows $\operatorname{Sym}(X)$ is non-abelian whenever $X$ has three distinct elements.

- Claim 2 is used constantly in the form "inversion is a bijection": a statement quantified over all $g$ may be re-read as a statement quantified over all $g^{-1}$ without loss.
