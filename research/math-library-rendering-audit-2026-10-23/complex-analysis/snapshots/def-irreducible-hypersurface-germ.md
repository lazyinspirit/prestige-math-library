---
id: def-irreducible-hypersurface-germ
kind: definition
title: "Irreducible hypersurface germs and their components"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - def-reduced-holomorphic-germ-for-hypersurface
  - lem-square-free-reduction-of-holomorphic-germ
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Proposition 6.7.3 finite irreducible decomposition of a variety germ (p. 194); §6.6 hypervariety germs (p. 188)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (4.21) prime vanishing ideals and irreducibility (p. 96); II (6.6) product of irreducible germs (pp. 106–107)."
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Fix $n\ge1$ and $p\in\mathbb C^n$, and let $X$ be a complex-analytic
hypersurface germ at $p$, that is, a nonempty proper set germ of the form
$X=(Z(f),p)$ for a nonzero nonunit germ $f$
([[def-complex-analytic-hypersurface-germ-and-reduced-equation]]).

A **hypersurface subgerm** of $X$ is a hypersurface germ $Y$ at $p$ with
$Y\subseteq X$ as set germs; by the definition of a hypersurface germ, every
such $Y$ has the form $(Z(g),p)$ for a nonzero nonunit $g$, and by
[[lem-square-free-reduction-of-holomorphic-germ]] and
[[def-reduced-holomorphic-germ-for-hypersurface]] the equation may be taken
reduced.

The germ $X$ is **reducible** when there are hypersurface subgerms
$Y_1,Y_2\subseteq X$ with

$$Y_1\ne X,\qquad Y_2\ne X,\qquad X=Y_1\cup Y_2$$

as set germs; it is **irreducible** when no such pair exists.

An **irreducible component** of $X$ is an irreducible hypersurface subgerm
$Y\subseteq X$ that is maximal among the irreducible hypersurface subgerms of
$X$: if $Y\subseteq Y'\subseteq X$ and $Y'$ is an irreducible hypersurface
subgerm, then $Y'=Y$.

## Remarks

The notions only involve the set germ $X$: containment and union of set germs
are defined by containment and union of representatives on a common
neighbourhood of $p$, and the resulting notions do not depend on the chosen
representatives or on the defining equation.

The pair condition in the definition of reducibility also covers finite
decompositions. If $X=Y_1\cup\cdots\cup Y_s$ is a finite union of hypersurface
subgerms with $Y_i=Z(g_i)$, then the identity
$Z(g_1)\cup\cdots\cup Z(g_s)=Z(g_1\cdots g_s)$ writes the union as a single
hypersurface subgerm, and grouping the factors into two products writes $X$ as
the union of the two corresponding subgerms $Z(g_1\cdots g_k)$ and
$Z(g_{k+1}\cdots g_s)$. Thus $X$ is reducible exactly when it is a finite union
of hypersurface subgerms properly contained in it.
