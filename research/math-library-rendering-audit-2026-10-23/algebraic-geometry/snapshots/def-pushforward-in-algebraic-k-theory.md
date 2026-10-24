---
id: def-pushforward-in-algebraic-k-theory
kind: definition
title: "Pushforward of coherent sheaves in algebraic K-theory"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - thm-grothendieck-spectral-sequence
  - lem-injective-modules-flasque-and-ext-of-structure-sheaf
  - thm-flasque-sheaves-acyclic
  - cor-derived-long-exact-sequence
  - def-axiom-of-choice
  - def-dependent-choice
  - def-euler-characteristic-coherent-sheaf
  - def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme
  - def-higher-direct-image-sheaf
  - def-locally-finite-type-and-finite-type-morphism
  - def-proper-morphism
  - lem-euler-characteristic-additive-short-exact
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-cohomological-dimension-noetherian-scheme
  - thm-leray-spectral-sequence-for-sheaf-cohomology
  - thm-proper-pushforward-coherent
  - thm-serre-finiteness-projective-cohomology
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Borel and Serre, Le theoreme de Riemann-Roch (1958), §3 and §5"
      url: "https://www.numdam.org/item/?id=BSMF_1958__86__97_0"
      locator: "Sections 3 and 5: proper pushforward of coherent sheaves on the Grothendieck group, its functoriality and the projection formula"
    - title: "The Stacks Project, Chow Homology and Chern Classes, Appendix B (rational equivalence and K-groups, tag 0AYD)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Appendix 42.69: K-groups and the pushforward defined by higher direct images"
---

## Definition

Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from the
coherence and finiteness suppliers below ([[def-axiom-of-choice]],
[[def-dependent-choice]]). Let $k$ be a field and let $f:X\to Y$ be a proper
morphism of schemes of finite type over $k$ ([[def-proper-morphism]],
[[def-locally-finite-type-and-finite-type-morphism]]); then $Y$ is locally
Noetherian and for every coherent $\mathcal O_X$-module $\mathcal F$ all higher
direct images $R^qf_*\mathcal F$ are coherent $\mathcal O_Y$-modules
([[thm-proper-pushforward-coherent]], [[def-higher-direct-image-sheaf]]) and
vanish for all sufficiently large $q$
([[thm-cohomological-dimension-noetherian-scheme]] on the separated Noetherian
preimage of each affine open of $Y$, giving the single global bound
$q>\dim X$). Set
$$f_![\mathcal F]:=\sum_{q\ge0}(-1)^q\,[R^qf_*\mathcal F]\in K_0(Y)$$
([[def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme]]).
Then:

1. $f_!$ is a well-defined homomorphism $K_0(X)\to K_0(Y)$ of abelian groups:
   a short exact sequence $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ on
   $X$ induces the long exact sequence of higher direct images
   $0\to f_*\mathcal F'\to f_*\mathcal F\to f_*\mathcal F''\to R^1f_*\mathcal F'\to\cdots$
   ([[def-higher-direct-image-sheaf]], [[cor-derived-long-exact-sequence]]),
   whose alternating sum is zero, giving
   $f_![\mathcal F]=f_![\mathcal F']+f_![\mathcal F'']$.
2. (Functoriality) $\operatorname{id}_!=\operatorname{id}$ and
   $(g\circ f)_!=g_!\circ f_!$ for composable proper morphisms: the bounded
   Leray spectral sequence for the composition preserves its total alternating
   class on every page; no degeneration or splitting is asserted
   ([[thm-leray-spectral-sequence-for-sheaf-cohomology]]).
3. (Compatibility with the module structure)
   $f_!(f^*[\mathcal E]\cdot[\mathcal F])=[\mathcal E]\cdot f_![\mathcal F]$
   for $\mathcal E$ locally free on $Y$ and $\mathcal F$ coherent on $X$, i.e.
   the projection formula; this is proved in
   lem-projection-formula-in-algebraic-k-theory. For $Y=\operatorname{Spec}k$
   and $X$ projective, $f_![\mathcal F]=\chi(X,\mathcal F)$ is the Euler
   characteristic ([[def-euler-characteristic-coherent-sheaf]],
   [[lem-euler-characteristic-additive-short-exact]]).

**Well-definedness.** The sum in the definition is finite because $R^qf_*\mathcal F=0$
for $q>\dim X$: for an affine open $U\subseteq Y$ the preimage $f^{-1}U$ is
separated, Noetherian and of dimension at most $\dim X$, and
[[thm-cohomological-dimension-noetherian-scheme]] bounds its quasi-coherent
cohomology uniformly, the higher direct image being the sheafification of these
local cohomology groups
([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]).
Additivity in short exact sequences is the alternating-sum cancellation in the
bounded long exact sequence of higher direct images, together with the coherence
of every term ([[thm-proper-pushforward-coherent]],
[[def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme]]).
For the composition spectral sequence apply
[[thm-grothendieck-spectral-sequence]] to $f_*$ and $g_*$ on module sheaves.
Module-injective sheaves are flasque
([[lem-injective-modules-flasque-and-ext-of-structure-sheaf]]), their direct
images are flasque, and flasque sheaves are acyclic on every open
([[thm-flasque-sheaves-acyclic]]). As in the module/abelian comparison in
[[thm-leray-spectral-sequence-for-sheaf-cohomology]], this makes them
$g_*$-acyclic and supplies the required acyclicity hypothesis. Functoriality
is then page-invariance of the total alternating class: for composable proper $f:X\to Y$, $g:Y\to Z$ the
$E_2$ page $R^pg_*(R^qf_*\mathcal F)$ is bounded in both directions by the
uniform dimension bounds for $f$, $g$ and $gf$, each differential changes total
degree by one so that the two kernel/image short exact sequences cancel every
image class, and the finite abutment filtration identifies the invariant with
the alternating class of $R^\bullet(g\circ f)_*\mathcal F$
([[thm-leray-spectral-sequence-for-sheaf-cohomology]]); no degeneration is
used. The projection formula is proved separately in
lem-projection-formula-in-algebraic-k-theory, and for $Y=\operatorname{Spec}k$
the definition reduces to the Euler characteristic.
