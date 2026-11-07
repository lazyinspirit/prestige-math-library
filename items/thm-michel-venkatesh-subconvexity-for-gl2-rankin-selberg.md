---
id: thm-michel-venkatesh-subconvexity-for-gl2-rankin-selberg
kind: theorem
title: "Michel–Venkatesh Subconvexity for GL2 Rankin–Selberg L-Functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-general-gl2-rankin-selberg-l-function
  - def-analytic-conductor-of-a-gl2-automorphic-representation
  - def-analytic-conductor-of-a-gl2-rankin-selberg-pair
  - def-adelic-gln-automorphic-representation
  - thm-michel-venkatesh-subconvexity-for-gl1-and-gl2
  - thm-gl2-rankin-selberg-unfolding-and-functional-equation
  - thm-spectral-decomposition-l2-congruence-surface
provenance:
  statement: ai-altered
  proof: not-supplied
proof_strategy: direct
sources:
  references:
    - title: "Philippe Michel and Akshay Venkatesh, The Subconvexity Problem for GL2, arXiv:0903.3591v2"
      url: "https://arxiv.org/pdf/0903.3591v2"
      locator: "§1.1, Theorem 1.2; proof in §§2–4 and §5.2."
    - title: "Akshay Venkatesh, Sparse Equidistribution Problems, Period Bounds and Subconvexity"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf"
      locator: "§§4–5, level-aspect Rankin–Selberg and triple-product comparison only."
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), PCMI lecture notes (2003)"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
      locator: "Lecture 2, §2.3; Lecture 3, §§3.1–3.2; Lecture 4, §4.1, Theorem 4.1, cuspidal setting."
forward_refs: []
---

## Statement

Let $F$ be a number field with adele ring $\mathbb A_F$. Let $\pi_1$ and $\pi_2$ be automorphic representations of $\mathrm{GL}_2(\mathbb A_F)$ with unitary central characters, meaning that both central characters have image in $S^1$, and assume that each $\pi_i$ is a generic standard automorphic representation: a cuspidal representation with unitary central character, or an Eisenstein representation induced from two unitary Hecke characters, including the normalized limiting realization at coincident inducing characters. Keep $F$ and $\pi_2$ fixed while $\pi_1$ varies. Let $L(s,\pi_1\times\pi_2)$ be the finite-place Rankin–Selberg L-function, continued meromorphically to $s=1/2$, and let $C(\pi_1\times\pi_2)$ and $C(\pi_1)$ be the corresponding analytic conductors. There is an absolute constant $\delta>0$, independent of $F$, $\pi_1$, and $\pi_2$, such that
$$|L(1/2,\pi_1\times\pi_2)|\ll_{F,\pi_2}C(\pi_1\times\pi_2)^{1/4-\delta}.$$
More precisely, the same theorem gives
$$|L(1/2,\pi_1\times\pi_2)|\ll_{F,\pi_2}C(\pi_1)^{1/2-2\delta}.$$
When $F$ varies among fields of fixed degree, the implied constant is polynomial in the discriminant of $F$ and in $C(\pi_2)$.

## Statement references

[[def-adelic-gln-automorphic-representation|number fields, adeles, automorphic representations, and central characters]]

[[def-general-gl2-rankin-selberg-l-function|the finite Rankin–Selberg Euler product and tensor local parameters]]

[[def-analytic-conductor-of-a-gl2-automorphic-representation|the GL2 analytic conductor]]

[[def-analytic-conductor-of-a-gl2-rankin-selberg-pair|the Rankin–Selberg pair conductor]]

[[thm-michel-venkatesh-subconvexity-for-gl1-and-gl2|the GL1/GL2 subconvexity theorem used in the proof route]]

[Michel and Venkatesh, *The Subconvexity Problem for GL2*, Theorem 1.2](https://arxiv.org/pdf/0903.3591v2)

[Venkatesh, *Sparse Equidistribution Problems, Period Bounds and Subconvexity*, level-aspect comparison](https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf)

[Cogdell, *L-functions and Converse Theorems for GL(n)*, cuspidal Rankin–Selberg background](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

## Facts & Assumptions

**Given:** A number field $F$, automorphic representations $\pi_1,\pi_2$ of $\mathrm{GL}_2(\mathbb A_F)$ in the stated generic standard class with unitary central characters, and a fixed $\pi_2$. The claim is the stated bound for the central value of the Rankin–Selberg L-function.

[F1] [[def-adelic-gln-automorphic-representation]]: a GL2 automorphic representation has local components $\pi_v$ in the restricted tensor product over the places of $F$, and its central character is a character of the adelic center.

[F2] [[def-general-gl2-rankin-selberg-l-function]]: the finite local factors are defined from the tensor Weil–Deligne parameter $(r_{1,v}\otimes r_{2,v},N_{1,v}\otimes1+1\otimes N_{2,v})$, and their finite Euler product is the stated L-function where it converges absolutely. This definition asserts no continuation.

[F3] [[def-analytic-conductor-of-a-gl2-rankin-selberg-pair]]: the pair conductor uses the Artin conductor of that tensor parameter at finite places and its four archimedean gamma shifts.

[F4] [[def-analytic-conductor-of-a-gl2-automorphic-representation]]: $C(\pi_1)$ is the product of the finite Artin-conductor factors and the two archimedean gamma-shift factors.

[F5] [[thm-michel-venkatesh-subconvexity-for-gl1-and-gl2]] records the full uniform theorem, still unproved here. The actual separate input to the §5.2 source proof is the fixed-representation character-twist Theorem 5.1, which must be reconstructed independently of the uniform pair theorem.

[F6] [[thm-gl2-rankin-selberg-unfolding-and-functional-equation]]: the current theorem's Statement is restricted to full-level automorphic distributions over $\mathbb Q$. A local full-level $\mathbb Q$ reconstruction is available; that scope does not supply the broader number-field regularized Rankin–Selberg period identity needed here.

## Escalation

**Given:** A number field $F$, two GL2 automorphic representations with unitary central characters, fixed $\pi_2$, and the Rankin–Selberg L-function and conductor conventions in [F1]–[F4]. The separate character-twist result is [F5]; [F6] records the narrower existing Rankin–Selberg supplier scope.

This item is escalated. The source proof in §5.2 uses the character-twist estimate of §5.1, local Whittaker and trilinear bounds, regularized Rankin–Selberg period identities, a Plancherel expansion with Eisenstein contributions, amplification, and conductor interpolation. Those arguments were read in full but are not locally supplied here. The full-level $\mathbb Q$ Rankin–Selberg proof in [F6] is available; its narrower field and level scope cannot establish the broader number-field claim here. The existing spectral item thm-spectral-decomposition-l2-congruence-surface treats congruence surfaces over $\mathbb Q$ under the Axiom of Choice; it does not provide the adelic spectral decomposition over an arbitrary number field required here. Proposed general suppliers include an adelic PGL2 spectral decomposition over number fields; the full GL2 Rankin–Selberg unfolding and regularized period identity over number fields; local Whittaker/Hecke/trilinear bounds; and the global amplification and conductor-interpolation estimate. The Statement now specifies the source's generic standard cuspidal-or-unitary-Eisenstein class, including normalized singular limits. This resolves the nongeneric residual-representation scope defect; all genuine analytic proof obligations remain. Exact required claims, source locators, and affected examples are recorded in the batch proof contract. No external theorem-import exception applies.
