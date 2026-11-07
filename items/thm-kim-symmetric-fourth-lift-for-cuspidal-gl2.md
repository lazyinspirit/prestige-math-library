---
id: thm-kim-symmetric-fourth-lift-for-cuspidal-gl2
kind: theorem
title: Kim Symmetric-Fourth Lift for Cuspidal GL(2)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - thm-kim-weak-exterior-square-lift-for-cuspidal-gl4
  - thm-kim-shahidi-symmetric-cube-lift-for-cuspidal-gl2
proof_strategy: exterior-square-comparison-and-classification
provenance:
  statement: ai-altered
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "Henry H. Kim, Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2"
      url: "https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf"
      locator: "§7, Theorem 7.3.2 and its proof, printed pp. 167–171."
    - title: "H. H. Kim and F. Shahidi, Functorial Products for GL₂ × GL₃ and the Symmetric Cube for GL₂"
      url: "https://www.math.purdue.edu/~fshahidi/articles/Kim%20%26%20Shahidi%20%5B2002%2C%2057pp%5D---Functorial%20products%20for%20GL_2%20x%20GL_3%20and%20the%20symmetric%20cube%20for%20GL_2.pdf"
      locator: "§6, Theorem 6.1: the symmetric-cube prerequisite used in Kim §7."
---

## Statement

Let $F$ be a number field and let $\pi$ be a cuspidal automorphic
representation of $\mathrm{GL}_2(\mathbb A_F)$ with central character
$\omega_\pi$, the character by which the center acts. Define
$A^4(\pi)=\operatorname{Sym}^4(\pi)\otimes\omega_\pi^{-1}$.
Then $A^4(\pi)$ is an automorphic isobaric representation of
$\mathrm{GL}_5(\mathbb A_F)$. If $\operatorname{Sym}^3(\pi)$ is cuspidal, it is either cuspidal or
unitarily induced from cuspidal automorphic representations of
$\mathrm{GL}_2(\mathbb A_F)$ and $\mathrm{GL}_3(\mathbb A_F)$. Equivalently,
$\operatorname{Sym}^4(\pi)=A^4(\pi)\otimes\omega_\pi$ is automorphic, with
unramified local Satake parameters given by the fourth symmetric power of those
of $\pi$. Under the unitary normalization, an isobaric representation here is a finite
isobaric sum of unitary cuspidal representations whose ranks sum to $5$.
Full automorphy is retained also when the symmetric cube is not cuspidal;
the monomial and tetrahedral decompositions in §§7.1–7.2 are separate branches,
not subject to the cuspidal-or-$2+3$ dichotomy.

## Statement references

[Henry H. Kim, *Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2*](https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf)

[H. H. Kim and F. Shahidi, *Functorial Products for GL₂ × GL₃ and the Symmetric Cube for GL₂*](https://www.math.purdue.edu/~fshahidi/articles/Kim%20%26%20Shahidi%20%5B2002%2C%2057pp%5D---Functorial%20products%20for%20GL_2%20x%20GL_3%20and%20the%20symmetric%20cube%20for%20GL_2.pdf)

## Proof status

The cited proof constructs the lift from the exterior-square lift of the
symmetric-cube representation, with a separate local gamma-factor and
converse-theorem argument. Both the weak exterior-square and symmetric-cube
suppliers remain proof-unresolved in this batch. Full automorphy and all noncuspidal branches are retained and
escalated; no lift is imported as a locally reconstructed proof. The previous unconditional
cuspidal-or-$2+3$ sentence omitted the hypothesis of §7.3: §7.1 has monomial
character and induced-character decompositions, while §7.2 gives a
$3+1+1$ decomposition. Those source branches remain proof obligations.
