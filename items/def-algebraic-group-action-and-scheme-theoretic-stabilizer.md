---
id: def-algebraic-group-action-and-scheme-theoretic-stabilizer
kind: definition
title: "Algebraic group actions, orbit maps, orbit subschemes and scheme-theoretic stabilizers"
status: draft
origin: pipeline
dependency_level: 1
deps: [def-fibre-product-schemes-universal-property, def-group-scheme-over-a-field, def-locally-closed-immersion, def-morphism-and-closed-subgroup-scheme, def-morphism-of-schemes, def-quotient-sheaf-and-representable-quotient, def-scheme-over-base, def-scheme-theoretic-fibre, def-scheme-theoretic-image, lem-field-valued-points-of-schemes]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapter 7, Sections 7(b)-(c), pp. 139-140; Chapter 1, Section 1f, pp. 27-28"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf
      locator: "Definitions 1.4 and 1.10, printed pp. 3-5"
---

## Definition

Let $k$ be a field, let $G$ be a group scheme of finite type over $k$
([[def-group-scheme-over-a-field]]) and let $X$ be a $k$-scheme
([[def-scheme-over-base]]). An **action** of $G$ on $X$ is a morphism
$\alpha:G\times_kX\to X$ ([[def-morphism-of-schemes]]) such that the unit and
associativity diagrams commute:
$\alpha(e\times\operatorname{id}_X)=\operatorname{id}_X$ and
$\alpha(\operatorname{id}_G\times\alpha)=\alpha(m\times\operatorname{id}_X)$,
where $m$ is the multiplication of $G$. A morphism $f:X\to Y$ of $k$-schemes on
which $G$ acts is **equivariant** if
$f\alpha_X=\alpha_Y(\operatorname{id}_G\times f)$. The action is determined by
its values on $R$-points, giving an action of the abstract group $G(R)$ on
$X(R)$ for every $k$-algebra $R$.

For $x\in X(k)$ ([[lem-field-valued-points-of-schemes]]) the **orbit map** is
$\varrho_x:G\to X$, $\varrho_x(g)=\alpha(g,x)$; for separated finite-type $X$,
its image on $k$-points is the **rational orbit** $G(k)\cdot x$, whereas its
underlying topological image is $|\varrho_x|(|G|)\subseteq|X|$. The orbit set
$X(k)/G(k)$ is the set of all rational orbits. The **reduced orbit subscheme**
$O_x$ means this locally closed image with reduced structure, when local
closedness is established; the orbit lemma below constructs it for smooth $G$.
For a nonsmooth group, the orbit map need not factor through this reduced
subscheme: translation of $\alpha_p$ on $\mathbb A^1$ at $0$ has a one-point
reduced orbit but a nonconstant infinitesimal orbit map. A factorization
$G\to O_x$ must therefore be justified or explicitly assumed.

The **scheme-theoretic stabilizer** (isotropy group) is the fibre product
$G_x:=G\times_{X}\operatorname{Spec}k$ formed with $\varrho_x$ and the $k$-point
$x$ ([[def-scheme-theoretic-fibre]],
[[def-fibre-product-schemes-universal-property]]): for separated finite-type
$X$ it is a closed subscheme of $G$, and for every $k$-algebra $R$ its
$R$-points are $G_x(R)=\{g\in G(R):\alpha(g,x_R)=x_R\}$. The pair
$R=G\times_kX\rightrightarrows X$ with $s(g,z)=z$ and $t(g,z)=\alpha(g,z)$ is
the **action groupoid** of the action, a pre-relation on $X$
([[def-quotient-sheaf-and-representable-quotient]]). When $X$ is separated and
of finite type over $k$, $k$-points are closed, so $G_x$ is a closed subgroup
scheme of $G$ ([[def-morphism-and-closed-subgroup-scheme]]).

The reduced orbit $O_x$ need not equal the scheme-theoretic image
([[def-scheme-theoretic-image]]): the latter is closed and is normally the orbit
closure, whereas the orbit is only locally closed. Fibres and the kernel pair of
$\varrho_x:G\to X$ are always defined; a kernel pair over $O_x$ requires a
factorization through the reduced orbit ([[def-locally-closed-immersion]]).
