---
id: lem-algebraic-set-finite-irreducible-components
kind: lemma
title: "Every affine algebraic set has finitely many irreducible components"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-affine-nullstellensatz-correspondence, cor-radical-ideal-has-finitely-many-minimal-primes-noetherian]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 2.31"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, Theorem 1.5.3"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
---

## Statement

Let $k$ be an algebraically closed field and let $X\subseteq \mathbf A_k^n$ be
an affine algebraic set. Then there exist finitely many irreducible closed
subsets $X_1,\ldots,X_m\subseteq X$ such that
$$ X=X_1\cup\cdots\cup X_m, $$
no $X_i$ is contained in the union of the others, and the family
$\{X_1,\ldots,X_m\}$ is uniquely determined up to reordering. These sets are the
irreducible components of $X$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ and an affine algebraic set $X\subseteq \mathbf A_k^n$.

[L1] Algebraic sets correspond to radical ideals, and irreducible nonempty algebraic sets correspond to prime ideals ([[thm-affine-nullstellensatz-correspondence]]).

[L2] In a Noetherian ring, every radical ideal is a finite intersection of the prime ideals minimal over it ([[cor-radical-ideal-has-finitely-many-minimal-primes-noetherian]]).

## Proof

**Proof technique:** direct.

1.1 The ideal $I(X)$ is radical by [L1], so [L2] yields minimal prime ideals $\mathfrak p_1,\ldots,\mathfrak p_m$ over $I(X)$ with $$ I(X)=\mathfrak p_1\cap\cdots\cap\mathfrak p_m. $$ Applying [L1] again, $$ X=V(I(X))=V(\mathfrak p_1)\cup\cdots\cup V(\mathfrak p_m), $$ and each $V(\mathfrak p_i)$ is irreducible. [L1, L2, given]

2.1 This union is irredundant. Indeed, if $V(\mathfrak p_i)\subseteq V(\mathfrak p_j)$, then [L1] reverses inclusions and gives $\mathfrak p_j\subseteq\mathfrak p_i$. Minimality of the $\mathfrak p_i$ over $I(X)$ forces equality, so distinct terms cannot contain one another. [L1, step 1.1, algebra]

2.2 Let $Y\subseteq X$ be any irreducible closed subset. Then $Y$ is an affine algebraic set, so $Y=V(\mathfrak q)$ for some prime ideal $\mathfrak q$ containing $I(X)$ by [L1]. Since the $\mathfrak p_i$ are precisely the minimal primes over $I(X)$, some $\mathfrak p_i$ is contained in $\mathfrak q$, hence $Y=V(\mathfrak q)\subseteq V(\mathfrak p_i)$. Therefore every irreducible closed subset of $X$ lies in one of the $V(\mathfrak p_i)$. [L1, step 1.1, choose]

3.1 Step 2.2 shows that the maximal irreducible closed subsets of $X$ are exactly the sets $V(\mathfrak p_i)$. Hence the family from step 1.1 is uniquely determined up to order and is precisely the irreducible-component decomposition of $X$. [step 2.1, step 2.2] ∎
