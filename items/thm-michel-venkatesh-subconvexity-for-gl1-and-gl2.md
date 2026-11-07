---
id: thm-michel-venkatesh-subconvexity-for-gl1-and-gl2
kind: theorem
title: "Michel–Venkatesh Subconvexity for GL1 and GL2 L-Functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-analytic-conductor-of-a-gl1-automorphic-representation
  - def-analytic-conductor-of-a-gl2-automorphic-representation
  - def-adelic-gln-automorphic-representation
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - thm-standard-gl2-l-function-analytic-continuation-and-functional-equation
provenance:
  statement: ai-altered
  proof: not-supplied
proof_strategy: direct
sources:
  references:
    - title: "Philippe Michel and Akshay Venkatesh, The Subconvexity Problem for GL2, arXiv:0903.3591v2"
      url: "https://arxiv.org/pdf/0903.3591v2"
      locator: "§1.1, Theorem 1.1; proof in §§2–4 and §5.1."
    - title: "Akshay Venkatesh, Sparse Equidistribution Problems, Period Bounds and Subconvexity"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf"
      locator: "§6, Theorem 6.1, a separate finite-conductor character-twist treatment with different scope."
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), PCMI lecture notes (2003)"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
      locator: "Lectures 2–4, Eulerian integrals, standard L-functions, and functional equations in cuspidal settings."
forward_refs: []
---

## Statement

Let $F$ be a number field with adele ring $\mathbb A_F$. Let $d\in\{1,2\}$ and let $\pi$ be an automorphic representation of $\mathrm{GL}_d(\mathbb A_F)$ with unitary central character, meaning that the central character has image in $S^1$. For $d=1$, this means a unitary Hecke character. For $d=2$, require $\pi$ to be a generic standard automorphic representation: a cuspidal representation with unitary central character, or an Eisenstein representation induced from two unitary Hecke characters, including the normalized limiting realization at coincident inducing characters. Let $L(s,\pi)$ be the standard finite-place L-function, continued meromorphically to $s=1/2$, and let $C(\pi)$ be its analytic conductor. There is an absolute constant $\delta>0$, independent of $F$ and $\pi$, such that
$$|L(1/2,\pi)|\ll_F C(\pi)^{1/4-\delta}.$$

## Statement references

[[def-adelic-gln-automorphic-representation|number fields, adeles, automorphic representations, and central characters]]

[[def-analytic-conductor-of-a-gl1-automorphic-representation|the GL1 analytic conductor]]

[[def-analytic-conductor-of-a-gl2-automorphic-representation|the GL2 analytic conductor]]

[[def-standard-and-rankin-selberg-l-functions-on-gln|the standard finite-place L-function convention]]

[Michel and Venkatesh, *The Subconvexity Problem for GL2*, Theorem 1.1](https://arxiv.org/pdf/0903.3591v2)

[Venkatesh, *Sparse Equidistribution Problems, Period Bounds and Subconvexity*, Theorem 6.1, finite-conductor twist comparison](https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf)

[Cogdell, *L-functions and Converse Theorems for GL(n)*, Lectures 2–4, cuspidal L-function background](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

## Facts & Assumptions

**Given:** A number field $F$, $d\in\{1,2\}$, and a unitary Hecke character when $d=1$, or a generic standard GL2 automorphic representation in the stated cuspidal-or-unitary-Eisenstein class when $d=2$. The claim is the stated bound at the central point.

[F1] [[def-adelic-gln-automorphic-representation]]: an automorphic representation is an irreducible subquotient of the right-regular representation on automorphic forms over $\mathrm{GL}_d(F)\backslash\mathrm{GL}_d(\mathbb A_F)$; its central character is a character of the adelic center.

[F2] [[def-analytic-conductor-of-a-gl1-automorphic-representation]]: for $d=1$, the finite local exponent is the least $m$ for which the local character is trivial on the specified unit subgroup, and the archimedean factor is $(2+|\mu_v|)^{[F_v:\mathbb R]}$.

[F3] [[def-analytic-conductor-of-a-gl2-automorphic-representation]]: for $d=2$, the finite local exponent is the Artin conductor of the Weil–Deligne parameter and the archimedean factors are the two normalized gamma-shift factors.

[F4] For GL1, the local factors can be defined directly from the character as in [F2]. For GL2, [[def-standard-and-rankin-selberg-l-functions-on-gln]] defines a finite local factor from the local Weil–Deligne parameter and its Euler product where it converges absolutely; that general GL2 parameter assignment is still a separate local proof obligation.

[F5] [[thm-standard-gl2-l-function-analytic-continuation-and-functional-equation]]: the current local theorem proves continuation and the functional equation only for normalized full-level holomorphic cusp Hecke eigenforms over $\mathbb Q$; it does not supply continuation for all GL2 representations over every number field.

## Escalation

**Given:** A number field $F$, a unitary GL1 character or generic standard GL2 automorphic representation in the Statement, and the standard L-function and conductor conventions in [F1]–[F4].

This item is escalated. Michel–Venkatesh prove the fixed-representation character-twist estimate and GL1 case in §5.1; the uniform varying-GL2 theorem follows from the pair theorem in §5.2.1. These arguments use the global Sobolev, local Whittaker/Hecke, and period inputs of §§2–4. The source proof was read, but no such proof is supplied locally here. The GL1 conductor and direct local Tate factors are now supplied by [F2]; no general local correspondence is needed for them. The general GL2 L-function interface is still escalated: the exact proposed local suppliers are thm-local-langlands-correspondence-for-gl-n-over-p-adic-fields and thm-archimedean-gln-standard-parameters-and-local-factors; the local GL2 continuation theorem in [F5] is only a holomorphic full-level special case. The scope defect is corrected in the Statement: the GL2 family is the source's generic standard cuspidal-or-unitary-Eisenstein class, including normalized singular limits. The library's broader class also contains nongeneric one-dimensional representations with central poles, so it cannot replace that source class. The missing proof obligations and proposed A-page placements are recorded in the batch proof contract. No external theorem-import exception applies.
