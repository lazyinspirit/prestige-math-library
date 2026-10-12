---
id: def-cm16-chaos-list-for-model-maps
kind: definition
title: "Chaos in the stated sense for maps of the model: topological mixing, dense periodic points and sensitive dependence, as one precise list among several"
status: draft
origin: session
domain: physics
dependency_level: 12
deps: [def-cm16-stroboscopic-and-poincare-maps,
       def-cm-topologically-mixing-dense-periodic-and-sensitive-maps,
       def-metric-space,
       def-metric-continuity,
       def-dense-top]
dependency_roles:
  def-cm16-stroboscopic-and-poincare-maps: formulation-prerequisite
  def-cm-topologically-mixing-dense-periodic-and-sensitive-maps: mathematical-premise
  def-metric-space: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-dense-top: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The chaos vocabulary of the page, applied to the stroboscopic and Poincare return maps of the declared models: a continuous map of a metric space is chaotic in the stated sense when it is topologically mixing, has dense periodic points and has sensitive dependence on initial conditions with a positive constant, with the three predicates spelled out exactly. The item fixes one precise list among several used in the literature, requires an invariant set and a metric relative to which the properties are stated, and asserts no measure-theoretic property, no entropy or dimension and no empirical claim."
sources:
  references:
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3 and §7.4: sensitivity, mixing and the explicit warning that plots and numerical portraits are not proofs of chaos"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), Chapter 7 pp. 143-195: the requirement of a chosen precise definition of chaos and the distinctness of sensitivity, mixing and positive exponents"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Chapter 9 'Chaos': qualitative chaos discussion retained here only as motivation for the precise list"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Definition

Let $(X,d)$ be a nonempty metric space ([[def-metric-space]]) and let
$f:X\to X$ be a map. Say that $f$ is **chaotic in the stated sense** when all
four of the following hold; this is the definition of
[[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]], quoted here
to fix the exact content used on this page:

1. $f$ is **continuous** with respect to the metric topology
   ([[def-metric-continuity]]);
2. $f$ is **topologically mixing**: for all nonempty open sets $U,V\subseteq X$
   there is an integer $N$ with $f^n(U)\cap V\ne\emptyset$ for every $n\ge N$;
3. the periodic points of $f$ are **dense** in $X$: every nonempty open subset
   of $X$ meets $\{x\in X:f^n(x)=x\text{ for some }n\ge1\}$
   ([[def-dense-top]]);
4. $f$ has **sensitive dependence on initial conditions**: there is
   $\delta>0$ (a sensitivity constant) such that for every $x\in X$ and every
   $\varepsilon>0$ there are $y\in X$ and $n\ge1$ with $d(x,y)<\varepsilon$
   and $d(f^n(x),f^n(y))\ge\delta$.

The predicate is applied on this page only to maps of the model: the
stroboscopic map $\Psi$ of a periodic model, restricted to a subset
$X\subseteq\Sigma$ with $\Psi(X)\subseteq X$, or the local return map $P$ of a
transversal section restricted to an invariant subset of its domain
([[def-cm16-stroboscopic-and-poincare-maps]] clauses (i) and (iii)), with $d$
the Euclidean distance of the state chart restricted to $X$. The properties
are relative to that set and that metric; changing the invariant set or
rescaling coordinates changes the property list in general.

**Conventions and scope.** (a) This is one precise list among several
inequivalent usages of the word "chaos" in the literature; the page asserts
none of the other usages, and no item of the page claims that a model is
"chaotic" without exhibiting the four properties for a stated map, set and
metric. (b) The four properties are independent: the identity map of a
nonempty space has dense periodic points and is not mixing whenever the space
has more than one point; a hyperbolic equilibrium can have positive
finite-time growth rates while its compact invariant sets are single points
(see the page's counterexample on the repulsive linear model). (c) The list is
purely topological: it asserts no invariant measure, no positivity of an
entropy, no fractal dimension, no statistical stability and no property of any
physical system. (d) A numerical trajectory, a histogram or a plotted section
is not evidence that the four properties hold; they are established by proof
for a stated model.

## Remarks

- **Where the list is established on this page.** The four properties are
  proved for the stroboscopic map of one explicitly constructed smooth
  periodically pulsed oscillator, on an explicitly constructed compact
  invariant set, later on the page; every other use of the word "chaotic" on
  the page is to be read through this definition.
