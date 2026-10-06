---
id: def-transitive-system-of-imprimitivity
kind: definition
title: Transitive systems of imprimitivity and their normalized measure class
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps:
  - def-system-of-imprimitivity
  - def-group-action
  - def-standard-borel-space
  - def-quasi-invariant-measure-on-a-homogeneous-space
  - def-coset
  - lem-closed-subgroup-quotient-averaging-and-compact-lifts
  - lem-second-countable-lch-spaces-are-standard-borel
  - thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h
  - def-rho-function-for-a-closed-subgroup
  - def-topological-group
  - def-second-countable-space
  - def-locally-compact-space
  - def-axiom-of-choice
  - lem-haar-lifts-and-borel-descent-on-a-homogeneous-space
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
---

## Definition

A system of imprimitivity $(U,P)$ on a standard Borel $G$-space $X$
([[def-system-of-imprimitivity]], [[def-standard-borel-space]]) is
**transitive** when $X$ is $G$-equivariantly isomorphic to a homogeneous space
$G/H$ with $H\le G$ closed, the isomorphism carrying the Borel structure of
$G/H$ ([[def-group-action]], [[def-coset]], [[def-topological-group]]); hence
then $G$ is second-countable locally compact, the action on $G/H$ is the
left-coset action, and the stabilizer of the identity coset is $H$. For a
transitive system one fixes the base identification $X=G/H$.

Assume AC for the following normalized-measure existence and uniqueness
assertions: a **normalized representative** is a strongly quasi-invariant
Radon measure $\mu_\rho$ on $G/H$ built from a rho-function $\rho$
([[def-rho-function-for-a-closed-subgroup]],
[[def-quasi-invariant-measure-on-a-homogeneous-space]],
[[thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h]]).
The **normalized homogeneous measure class** is the unique class of nonzero
quasi-invariant Radon measures on $G/H$; the system is called transitive on
$G/H$.

**Well-definedness.** The equivariant-isomorphism clause is a condition on the
given system and selects the conjugacy class of $H$: if $x_0\in X$ is the image
of the identity coset under a $G$-equivariant Borel isomorphism, then
$\operatorname{Stab}_G(x_0)=H$ by the computation $gH=H\iff g\in H$
([[def-coset]]); conversely a homogeneous space $G/H$ for second-countable
locally compact $G$ and closed $H$ is a standard Borel $G$-space with Borel
action ([[lem-second-countable-lch-spaces-are-standard-borel]],
[[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]). The normalized
class exists and is unique: the rho-function theorem supplies a full-support
strongly quasi-invariant Radon representative $\mu_\rho$
([[thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h]]),
two rho-functions give representatives in the same class (their densities
$\rho_1/\rho_2$ are positive continuous), and every nonzero $\sigma$-finite
quasi-invariant Borel measure is equivalent to $\mu_\rho$
([[lem-haar-lifts-and-borel-descent-on-a-homogeneous-space]]); in particular
the class does not depend on the chosen rho-function, on the normalization of
Haar measure, or on the choice of the base-point identification. Consumers
that use only the definitional term *transitive* do not consume the
normalized-measure existence assertion.

The definition names no choice; AC is used exactly by the quoted
rho-function and Haar-lift suppliers for existence and uniqueness of the
normalized class.
