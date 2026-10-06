---
id: "def-square-zero-extension-and-small-extension"
kind: "definition"
title: "Square-zero extensions, small extensions and first-order thickenings"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 0
justified_by: []
aliases: []
deps:
  - "def-commutative-ring"
  - "def-ring-homomorphism"
  - "def-artinian-ring"
  - "def-local-ring"
  - "def-closed-immersion-schemes"
  - "def-quasi-coherent-ideal-sheaf"
  - "def-quasi-coherent-module-scheme"
  - "def-scheme"
  - "def-flat-morphism-schemes"
  - "def-fibre-product-schemes-universal-property"
  - "lem-flat-morphisms-stable-base-change"
  - "thm-quasi-coherent-ideal-closed-subscheme-correspondence"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  precheck: "n/a"
sources:
  references:
    - title: "The Stacks Project, Formal Deformation Theory, complete chapter (Chapter 90)"
      url: "https://stacks.math.columbia.edu/download/formal-defos.pdf"
      locator: "Definition 90.3.1 (tag 06GC, the base category), Definition 90.3.2 (tag 06GD, small extensions) and Lemma 90.3.3 (tag 06GE, factorization into small extensions) with its full proof (printed pages 4-5, read 2026-10-05)"
    - title: "The Stacks Project, Deformation Theory, complete chapter (Chapter 91)"
      url: "https://stacks.math.columbia.edu/download/defos.pdf"
      locator: "Section 91.3 (tags 08KY-08L1): thickenings and first-order thickenings of ringed spaces, the short exact sequence 0 -> I -> O_X' -> O_X -> 0, and the identification of the ideal as an O_X-module (printed pages 7-8, read 2026-10-05)"
---

## Definition

Let $k$ be a field. A surjective homomorphism $u\colon A'\to A$ of commutative
unital rings ([[def-commutative-ring]], [[def-ring-homomorphism]]) with kernel
$I=\ker u$ satisfying $I^2=0$ is a **square-zero extension**. Then $I$ carries
an $A$-module structure: $I$ is an ideal of $A'$, hence an $A'$-module, and
because $I\cdot I=0$ the action of $A'$ on $I$ factors through
$A'/I\cong A$. The **trivial square-zero extension** of $A$ by an $A$-module
$I$ is the ring $A[I]=A\oplus I$ with multiplication
$$(a,x)(b,y)=(ab,\,ay+bx);$$
the axioms hold because $I$ is an $A$-module and $I^2=0$, and the projection
$A[I]\to A$ is a surjective ring map with kernel $0\oplus I$, so that $A[I]$ is
a square-zero extension of $A$ by $I$. If $u\colon A'\to A$ is any square-zero
extension and one chooses an $A$-module splitting $s\colon A\to A'$ of $u$, the
map $A\oplus I\to A'$, $(a,x)\mapsto s(a)+x$, is an isomorphism of $A$-algebras
onto $A'$ carrying the multiplication of $A[I]$; no such choice is part of the
definition.

**Small extensions.** The standard deformation-theoretic convention fixes a
base category $\mathcal C_k$ of local Artin $k$-algebras with residue field $k$
([[def-artinian-ring]], [[def-local-ring]]), and a square-zero extension
$u\colon A'\to A$ with $A,A'\in\mathcal C_k$ is **small** when $I=\ker u$ is
annihilated by the maximal ideal $\mathfrak m_{A'}$ of $A'$. The finiteness
built into $\mathcal C_k$ is part of the convention: assuming as in the
deformation-theoretic setup that $A$ and $A'$ are finite-dimensional over $k$,
the $A'$-module structure on $I$ factors through
$k=A'/\mathfrak m_{A'}$ because $\mathfrak m_{A'}I=0$, so $I$ is a
$k$-subspace of the finite-dimensional $k$-vector space $A'$; thus $I$ is a
finite-dimensional $k$-vector space. The kernel is allowed to be zero, in which
case $u$ is an isomorphism. This notion is weaker than the convention that
additionally requires $\ker u$ to be nonzero and principal; the factorization
statement below holds in the weaker form used here.

The basic example is the dual numbers $k[\epsilon]=k[\epsilon]/(\epsilon^2)=k\oplus k\epsilon$,
$\epsilon^2=0$, with the augmentation $k[\epsilon]\to k$ sending $\epsilon$ to
$0$; its kernel $k\epsilon$ is annihilated by $\mathfrak m=(\epsilon)$.
More generally, for a $k$-vector space $I$ the projection
$k[I]=k\oplus I\to k$ exhibits $k[I]$ as a square-zero extension of $k$ with
kernel $I$, and it is small exactly when $I$ is finite-dimensional over $k$,
since $k[I]$ is then a finite-dimensional local Artin $k$-algebra with residue
field $k$ (and conversely a finite-dimensional $k[I]$ forces
$\dim_kI<\infty$). Every surjection $A'\to A$ in $\mathcal C_k$ factors as a
composition of small extensions: the maximal ideal $\mathfrak m=\mathfrak m_{A'}$
is nilpotent because $A'$ is Artinian, say $\mathfrak m^n=0$, so with
$I=\ker u$ the chain
$$A'=A'/I\mathfrak m^{n-1}\twoheadrightarrow A'/I\mathfrak m^{n-2}\twoheadrightarrow\cdots\twoheadrightarrow A'/I\cong A$$
factors $u$ into surjections whose successive kernels
$I\mathfrak m^k/I\mathfrak m^{k+1}$ are annihilated by $\mathfrak m$; each
intermediate ring is a quotient of $A'$, hence again in $\mathcal C_k$, and each
step is small in the sense above. Thus deformations over Artin rings are built
from small extensions.

**First-order thickenings.** On schemes, a closed immersion
$i\colon S\to S'$ ([[def-closed-immersion-schemes]]) whose ideal sheaf
$$J=\ker\bigl(\mathcal O_{S'}\to i_*\mathcal O_S\bigr)$$
satisfies $J^2=0$ is a **first-order thickening**. Here $J^2=0$ means that the
product ideal generated by local sections of $J$ is zero; local sections of $J$
are therefore nilpotent, and a nilpotent element of a ring lies in every prime
ideal, so every prime of $S'$ contains the stalk of $J$. Hence the underlying
continuous map of $i$ is a homeomorphism onto $S'$, as required of a thickening,
and $J$ is in particular locally nilpotent. The quotient
$\mathcal O_{S'}\to i_*\mathcal O_S$ makes $J$ a quasi-coherent
$\mathcal O_S$-module ([[def-quasi-coherent-ideal-sheaf]], [[def-quasi-coherent-module-scheme]]):
the closed immersion corresponds to a quasi-coherent sheaf of ideals on $S'$
([[thm-quasi-coherent-ideal-closed-subscheme-correspondence]]), and a
$\mathcal O_{S'}$-module annihilated by $J$ is the same thing as an
$\mathcal O_S$-module. Because $J^2=0$, the canonical surjection
$J\twoheadrightarrow J/J^2$ is an isomorphism, so $J$ is identified with the
**conormal sheaf** $C_{S/S'}=J/J^2$ of the immersion. For a field $k$ and a
$k$-vector space $I$, the morphism
$\operatorname{Spec}k\hookrightarrow\operatorname{Spec}k[I]$ is the **trivial
first-order thickening**, with ideal sheaf $I\otimes_k\mathcal O_{\operatorname{Spec}k}$.
A **morphism of square-zero extensions** (respectively of first-order
thickenings) is a commuting square of ring maps (respectively of scheme
morphisms) respecting the structure maps, in the evident sense.

**Base change.** Let $f\colon X\to S$ be a flat morphism of schemes
([[def-flat-morphism-schemes]]), let $S'$ be a first-order thickening of $S$
with ideal sheaf $J$, and let $X'=X\times_SS'$ with its two projections
([[def-fibre-product-schemes-universal-property]]). Then the ideal sheaf of
$X$ in $X'$ is the pullback $f^*J$: the projection $X'\to S'$ is flat by
stability of flatness under base change ([[lem-flat-morphisms-stable-base-change]]),
so pulling back the short exact sequence
$0\to J\to\mathcal O_{S'}\to\mathcal O_S\to0$ of $\mathcal O_{S'}$-modules
along $X'\to S'$ stays exact and yields
$$0\to f^*J\to\mathcal O_{X'}\to\mathcal O_X\to0,$$
which identifies the kernel of $\mathcal O_{X'}\to\mathcal O_X$ with $f^*J$.
In particular $X\hookrightarrow X'$ is itself a first-order thickening.

## Remarks

- **Conventions.** The scheme-side definition fixes the Zariski case of
  Stacks, *Deformation Theory*, Section 91.3 (tags 08KY-08L1), where
  thickenings of ringed spaces are defined by a homeomorphism with locally
  nilpotent kernel and first-order thickenings require the kernel to have
  square zero. The small-extension convention follows Stacks, *Formal
  Deformation Theory*, Definitions 90.3.1-90.3.2 (tags 06GC-06GD) specialized
  to $\Lambda=k$, with the factorized form of Lemma 90.3.3 (tag 06GE).
- **Automorphisms of trivial extensions.** For an $A'$-algebra $B'$ over
  $A'$ and a square-zero kernel, an $A'$-algebra endomorphism reducing to the
  identity on $B=B'/I B'$ differs from the identity by an $A$-linear derivation
  into the kernel; this is used in the companion counterexample and is not
  needed for the definition itself.
- **No choice principle is used by this definition.** Every construction above
  is canonical; the identification of a square-zero extension with a trivial
  one may require a splitting and is never asserted as canonical.
