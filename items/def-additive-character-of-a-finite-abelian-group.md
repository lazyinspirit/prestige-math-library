---
id: def-additive-character-of-a-finite-abelian-group
kind: definition
title: "Additive characters of a finite abelian group"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-group, def-group-homomorphism, thm-complex-numbers-form-a-field, lem-ring-units-form-a-group, lem-group-homomorphism-basic-properties, def-character-of-a-complex-representation, def-finite-dimensional-representation-of-a-group-over-a-field]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3 Example 1"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 4.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Definition

Let $G$ be a finite abelian group ([[def-group]]), written **additively**: its
operation is written $+$, its identity is written $0$, and its underlying set is
finite. Let $\mathbb C^{\times}$ be the group of units of the field $\mathbb C$
([[thm-complex-numbers-form-a-field]], [[lem-ring-units-form-a-group]]), that
is, the nonzero complex numbers under multiplication.

An **additive character** of $G$ is a group homomorphism
([[def-group-homomorphism]])

$$\chi:G\longrightarrow\mathbb C^{\times},\qquad \chi(x+y)=\chi(x)\,\chi(y)\quad(x,y\in G).$$

Write $\widehat G$ for the set of all additive characters of $G$. Since $G$ and
$\mathbb C^{\times}$ are groups, every additive character automatically
satisfies $\chi(0)=1$ and $\chi(-x)=\chi(x)^{-1}$
([[lem-group-homomorphism-basic-properties]]), so multiplicativity is the whole
requirement.

**This is not the representation-theoretic character.** The word "character"
already names the function $\chi_V(g)=\operatorname{tr}(\rho_V(g))$ attached to
a finite-dimensional complex representation $V$ of $G$
([[def-character-of-a-complex-representation]],
[[def-finite-dimensional-representation-of-a-group-over-a-field]]). That
function need not be multiplicative — only for a one-dimensional representation
is it a homomorphism to $\mathbb C^{\times}$ — and the next item proves the
precise bridge: the additive characters of a finite abelian group are exactly
the characters of its one-dimensional complex representations, and exactly its
irreducible ones.

**Well-definedness.** $\widehat G$ is defined as a set of functions
$G\to\mathbb C^{\times}$, so the definition itself selects nothing. In
particular it chooses no decomposition of $G$, no enumeration of $G$, and no
isomorphism $G\cong\widehat G$, and it asserts nothing here about a group
structure on $\widehat G$; the dictionary proved in the next item records what
structure there is.

## Remarks

- The definition makes sense for an arbitrary abelian group; finiteness is kept
  because the page works with finite groups throughout, and it is what makes the
  orthogonality average of the later item a finite sum.

- For $G$ written multiplicatively the same condition reads
  $\chi(gh)=\chi(g)\chi(h)$. The additive notation is not a change of
  mathematics: it records that $G$ is abelian and that its operation is being
  written as addition, so that $\chi$ is a homomorphism of the additive group
  $G$ into the multiplicative group $\mathbb C^{\times}$.
