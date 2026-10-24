---
id: "def-kahler-differentials-algebra"
kind: "definition"
title: "Universal Kähler differential module"
status: published
origin: "pipeline"
deps: ["def-derivation-algebra"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stacks Algebra 10.131.2–3"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §22.2.17, p.582"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Definition

Let $A\xrightarrow{\varphi}B$ be a homomorphism of commutative rings and let
$\operatorname{Der}_A(B,-)$ be the derivation functor of
[[def-derivation-algebra]]. A **Kähler differential module for
$A\to B$** is a pair $(\Omega_{B/A},\mathrm{d})$ consisting of a $B$-module
$\Omega_{B/A}$ and an $A$-derivation $\mathrm{d}\colon B\to\Omega_{B/A}$ such
that for every $B$-module $M$ the assignment

$$g\longmapsto g\circ\mathrm{d},\qquad \operatorname{Hom}_B(\Omega_{B/A},M)\longrightarrow\operatorname{Der}_A(B,M),$$

is a bijection, and such that these bijections are **natural in $M$**: for every
$B$-linear map $h\colon M\to N$ the square

$$\begin{array}{ccc} \operatorname{Hom}_B(\Omega_{B/A},M) & \xrightarrow{\ g\mapsto g\circ\mathrm{d}\ } & \operatorname{Der}_A(B,M)\\[2mm] \downarrow{\scriptstyle h\circ-} & & \downarrow{\scriptstyle h\circ-}\\[2mm] \operatorname{Hom}_B(\Omega_{B/A},N) & \xrightarrow{\ g\mapsto g\circ\mathrm{d}\ } & \operatorname{Der}_A(B,N) \end{array}$$

commutes. In other words, $\Omega_{B/A}$ **represents** the covariant
functor $M\mapsto\operatorname{Der}_A(B,M)$ on $B$-modules, and
$\mathrm{d}$ is the **universal $A$-derivation** of $B$ over $A$; the element
$\mathrm{d}b$ is the image of $b$ under it. Whether such a pair exists for a
given $A\to B$ is not part of the definition; when it does, the pair is
uniquely determined up to a unique compatible isomorphism, as the next paragraph
records.

**Uniqueness.** If $(\Omega,\mathrm{d})$ and $(\Omega',\mathrm{d}')$ are both
Kähler differential modules for the same ring map $A\to B$, the universal
property of the first applied to the derivation $\mathrm{d}'$ produces a unique
$B$-linear $u\colon\Omega\to\Omega'$ with $u\circ\mathrm{d}=\mathrm{d}'$, and
the property of the second applied to $\mathrm{d}$ produces a unique $B$-linear
$v\colon\Omega'\to\Omega$ with $v\circ\mathrm{d}'=\mathrm{d}$. Then
$(v\circ u)\circ\mathrm{d}=v\circ\mathrm{d}'=\mathrm{d}$ and
$(u\circ v)\circ\mathrm{d}'=\mathrm{d}'$, while the identity maps of $\Omega$
and $\Omega'$ have the same property; the injectivity clause of the universal
property applied twice gives $v\circ u=\mathrm{id}_{\Omega}$ and
$u\circ v=\mathrm{id}_{\Omega'}$. So $u$ is an isomorphism with inverse $v$, and
$u$ is the only $B$-linear map from $\Omega$ to $\Omega'$ compatible with the
two universal derivations. In particular $\Omega_{B/A}$ is determined by the
ring map $A\to B$ up to canonical isomorphism, which is what justifies writing
it as $\Omega_{B/A}$ without further qualification.

**Functoriality in ring maps.** Given a commutative square of ring maps
$A\to B$, $A'\to B'$, $u:A\to A'$ and $v:B\to B'$, and universal pairs
for its two horizontal maps, regard $\Omega_{B'/A'}$ as a $B$-module through
$v$. The composite $\mathrm d'\circ v$ is an $A$-derivation: it is additive,
satisfies Leibniz with this module action, and kills $A$ since the square
commutes. Universality gives a unique $B$-linear map
$\Omega_{B/A}\to\Omega_{B'/A'}$ sending $\mathrm db$ to $\mathrm d'(v(b))$.
For identity squares this is the identity; for composable squares the
composite has the prescribed values on $\mathrm db$ and so equals the map
of the composite square by uniqueness. This proves functoriality in ring
maps separately from naturality in the target module $M$.
