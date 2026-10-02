---
id: def-complex-analytic-hypersurface-germ-and-reduced-equation
kind: definition
title: "Complex-analytic hypersurface germ and its reduced equation"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-holomorphic-germ-ring-and-its-maximal-ideal
  - def-reduced-holomorphic-germ-for-hypersurface
  - lem-square-free-reduction-of-holomorphic-germ
  - lem-vanishing-ideal-of-a-reduced-hypersurface-germ
  - prop-units-in-the-holomorphic-germ-ring
justified_by: []
landmark: true
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Theorem 6.6.1 a hypervariety germ is a zero set Z_f with I_p(X)=(f,p) (p. 188); §6.7 irreducible decomposition (pp. 193–194)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (4.21) vanishing ideal of a prime (p. 96); II (6.6) principal ideal of a pure codimension-one germ (pp. 106–107)."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Fix $n\ge1$ and $p\in\mathbb C^n$.

**Set germs.** Two subsets $S,S'$ of neighbourhoods of $p$ define the same
**set germ at $p$** when $S\cap W=S'\cap W$ for some neighbourhood $W$ of $p$
contained in both domains. A set germ is written $(S,p)$, and containment of
set germs is defined by containment of suitable representatives. This is the
standard equivalence relation of germs of sets; it is the analogue for subsets
of the equivalence of holomorphic functions used for the germ ring
$\mathcal O_{\mathbb C^n,p}$ ([[def-holomorphic-germ-ring-and-its-maximal-ideal]]).

**Hypersurface germs.** A nonempty proper set germ $X$ at $p$ is a
**complex-analytic hypersurface germ** at $p$ when there is a nonzero nonunit
germ $f\in\mathcal O_{\mathbb C^n,p}$ with

$$X=(Z(f),p),\qquad Z(f)=\{z:f(z)=0\},$$

the zero set of a representative of $f$ near $p$. Every nonzero nonunit
produces a nonempty proper zero germ: $f(p)=0$ because nonunits are exactly the
germs vanishing at the base point
([[prop-units-in-the-holomorphic-germ-ring]]), and $Z(f)$ is not all of a
neighbourhood of $p$ because a nonzero germ is not identically zero on any
neighbourhood.

**Reduced defining germ.** Let $X=(Z(f),p)$ be a hypersurface germ and let
$f_{\mathrm{red}}$ be the square-free reduction of $f$
([[lem-square-free-reduction-of-holomorphic-germ]]), so
$Z(f_{\mathrm{red}})=Z(f)$ and $f_{\mathrm{red}}$ is reduced
([[def-reduced-holomorphic-germ-for-hypersurface]]). Then $f_{\mathrm{red}}$ is
called the **reduced defining germ** of $X$, and $f$ is called a defining
equation of $X$.

**Well-definedness.** If $f'$ is any other nonzero nonunit with
$(Z(f'),p)=X$, then $f'$ vanishes on $Z(f_{\mathrm{red}})$ near $p$ and
$f_{\mathrm{red}}$ vanishes on $Z(f')$ near $p$, so the two reduced germs lie in
the same vanishing ideal:

$$f'_{\mathrm{red}}\in I_p(X)=(f_{\mathrm{red}})\quad\text{and}\quad f_{\mathrm{red}}\in (f'_{\mathrm{red}}),$$

by the principal vanishing-ideal lemma
([[lem-vanishing-ideal-of-a-reduced-hypersurface-germ]]). Hence
$f'_{\mathrm{red}}$ is a unit multiple of $f_{\mathrm{red}}$: two reduced
defining germs of the same hypersurface germ differ by a unit of the germ ring.
The reduced defining germ is therefore determined by $X$ up to a unit, and
since a set germ is independent of the chosen representative neighbourhood, the
hypersurface germ and its reduced defining germ are geometric objects attached
to $X$ and not to a particular equation or neighbourhood.
