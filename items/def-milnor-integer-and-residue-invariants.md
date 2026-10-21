---
id: def-milnor-integer-and-residue-invariants
kind: definition
title: Integer Milnor coefficients and closed-link residues
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-based-string-link-and-labeled-link-peripheral-system
  - def-lower-central-series-and-magnus-expansion-for-links
  - lem-magnus-commutator-degree-and-truncation
  - lem-string-link-exterior-homology-and-meridian-maps
  - lem-link-nilpotent-quotient-generated-by-component-meridians
  - thm-string-link-nilpotent-peripheral-identifications
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: John Milnor, Link Groups
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf
      locator: §§3–5, PDF pp. 7–16, Magnus coefficients, lower-central quotients, and
        link examples
    - title: Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable
        3-Manifolds
      url: https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content
      locator: §2.5, printed pp. 16–18 (PDF pp. 24–26), coefficient indexing and
        indeterminacy
---

## Definition

Assume AC for the string-link quotient branch. Use the closed-link residue
definition one finite maximum index length at a time, so its based word-lift
data are finite.

Let $\tau$ be a based $r$-component string link with $r\geq1$ and bottom meridian symbol group
$F_r=\langle x_1,\ldots,x_r\rangle$, exterior group $G=\pi_1(X_\tau)$, and
based string-link longitudes $\lambda_1,\ldots,\lambda_r$. With compatible stem accesses this free group identifies the full endpoint fundamental group. For arbitrary independently based meridians, use instead its meridian map on each finite nilpotent quotient, which is still an isomorphism by the end-identification theorem; no full-group free-basis assertion is made. Longitudes retain their specified parallel and access data. For a multi-index
$I=(i_1,\ldots,i_k,j)$ with $k\geq1$ and each index in $\{1,\ldots,r\}$,
let $w_{j,k}\in F_r/\Gamma_{k+1}F_r$ be the unique class whose image under
the bottom-end nilpotent isomorphism is the class of $\lambda_j$ in
$G/\Gamma_{k+1}G$. Define the integer coefficient
$$\mu_\tau(I)=[X_{i_1}\cdots X_{i_k}]\,E(w_{j,k})\in\mathbb Z,$$
where the bracket means the coefficient of that word in the finite Magnus
expansion through degree $k$. The commutator-degree lemma makes this coefficient
independent of the representative of $w_{j,k}$.

For a closed labeled link $L$, choose a common basing and its preferred
zero-self-meridian longitudes. For every component $j$ and every finite
$q\geq2$, choose a lift $w_{j,q}\in F_r/\Gamma_qF_r$ of the class of its
longitude in $G/\Gamma_qG$, where $G=\pi_1(E_L)$ and $F_r$ is free on the
component meridian symbols. Such lifts exist because those meridians generate
every finite nilpotent quotient. For $I=(i_1,\ldots,i_k,j)$, define the based
coefficient $\mu_L^b(I)$ by taking the coefficient of
$X_{i_1}\cdots X_{i_k}$ in $E(w_{j,k+1})$ through degree $k$. Let
$\Delta_I^b$ be the nonnegative greatest common divisor of the finite set of
all $\mu_L^b(J)$ for sequences $J$ of lengths from $2$ to $|I|-1$ that occur
as subsequences of cyclic permutations of $I$. The gcd of an empty set is $0$.
Define the based residue candidate
$$\bar\mu_L^b(I):=\mu_L^b(I)\pmod{\Delta_I^b}\in \mathbb Z/\Delta_I^b\mathbb Z,$$
with $\mathbb Z/0\mathbb Z=\mathbb Z$. Independence of the basing and word
lifts is not part of this definition; it is a separate theorem. A based
Borromean example with $I=(1,2,3)$ uses this convention.

## Definition references

[[def-lower-central-series-and-magnus-expansion-for-links|Lower-central quotients and finite Magnus expansion]]

[[def-based-string-link-and-labeled-link-peripheral-system|Based string-link longitudes and closed-link peripheral data]]

[[lem-magnus-commutator-degree-and-truncation|Representative-independent truncated coefficients]]

[[thm-string-link-nilpotent-peripheral-identifications|End isomorphisms on finite lower-central quotients]]

[[lem-link-nilpotent-quotient-generated-by-component-meridians|Component meridians generate finite closed-link nilpotent quotients]]

[[lem-string-link-exterior-homology-and-meridian-maps|Existence of preferred zero-self-meridian longitudes]]

## Remarks

The length of $I$ is $k+1$; its final index names the longitude component, and the preceding indices name the Magnus word. The gcd convention records exactly the lower-order data used in the classical residue definition. The isotopy theorem later proves that the based residue candidate is independent of its choices.
