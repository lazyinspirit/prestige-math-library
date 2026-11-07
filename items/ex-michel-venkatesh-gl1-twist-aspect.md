---
id: ex-michel-venkatesh-gl1-twist-aspect
kind: example
title: "A GL1 Twist-Aspect Specialization"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-analytic-conductor-of-a-gl2-automorphic-representation
  - def-adelic-gln-automorphic-representation
  - thm-michel-venkatesh-subconvexity-for-gl1-and-gl2
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Philippe Michel and Akshay Venkatesh, The Subconvexity Problem for GL2, arXiv:0903.3591v2"
      url: "https://arxiv.org/pdf/0903.3591v2"
      locator: "§1.1, Theorem 1.1; §5.1, character twists as a special case."
    - title: "Akshay Venkatesh, Sparse Equidistribution Problems, Period Bounds and Subconvexity"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf"
      locator: "§6, Theorem 6.1, finite-conductor character-twist comparison only."
forward_refs: []
---

## Example

Let $F$ be a number field, let $\Pi$ be a fixed automorphic representation of $\mathrm{GL}_2(\mathbb A_F)$ in the generic standard cuspidal-or-unitary-Eisenstein class of the GL1/GL2 subconvexity theorem, with unitary central character, and let $\chi:F^\times\backslash\mathbb A_F^\times\to S^1$ be any unitary Hecke character. Define the twist $\Pi_\chi$ on the space of $\Pi$ by
$$\Pi_\chi(g)=\chi(\det g)\Pi(g),\qquad g\in\mathrm{GL}_2(\mathbb A_F).$$
Then $\Pi_\chi$ is again in that generic standard class with unitary central character, and the GL1/GL2 subconvexity theorem gives
$$|L(1/2,\Pi_\chi)|\ll_F C(\Pi_\chi)^{1/4-\delta}$$
for the same absolute $\delta>0$ as in that theorem. The bound is uniform in the full analytic conductor of the twist family.

## Example references

[[def-adelic-gln-automorphic-representation|automorphic representations and central characters]]

[[def-analytic-conductor-of-a-gl2-automorphic-representation|the analytic conductor of the twist]]

[[thm-michel-venkatesh-subconvexity-for-gl1-and-gl2|the GL1/GL2 subconvexity theorem]]

[Michel and Venkatesh, *The Subconvexity Problem for GL2*, Theorem 1.1](https://arxiv.org/pdf/0903.3591v2)

[Venkatesh, *Sparse Equidistribution Problems, Period Bounds and Subconvexity*, Theorem 6.1, a finite-conductor comparison](https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf)

## Facts & Assumptions

**Given:** A number field $F$, a fixed automorphic representation $\Pi$ of $\mathrm{GL}_2(\mathbb A_F)$ with unitary central character, and a unitary Hecke character $\chi:F^\times\backslash\mathbb A_F^\times\to S^1$.

[F1] [[def-adelic-gln-automorphic-representation]]: automorphic forms are left invariant under $\mathrm{GL}_2(F)$, and the central character describes the action of scalar adelic matrices.

[F2] [[thm-michel-venkatesh-subconvexity-for-gl1-and-gl2]]: every GL2 representation in the stated generic standard class with unitary central character satisfies the stated bound in its analytic conductor, with the same absolute $\delta$.

[F3] [[def-analytic-conductor-of-a-gl2-automorphic-representation]]: the conductor $C(\Pi_\chi)$ is the product of the finite Artin-conductor factors and the two archimedean gamma-shift factors.

## Verification

**Given:** The data in the Example.

1.1 For an automorphic form $f$ in the space of $\Pi$, define $f_\chi(g)=\chi(\det g)f(g)$. For $\gamma\in\mathrm{GL}_2(F)$, $\chi(\det\gamma)=1$ because $\chi$ is trivial on $F^\times$; hence $f_\chi$ is again automorphic. The map $f\mapsto f_\chi$ is invertible, so irreducibility is preserved. It preserves cuspidality because $\det u=1$ on each unipotent radical. On unitary Eisenstein data it replaces each inducing character by its product with the unitary $\chi$; the same identity commutes with the normalized limiting realization at coincident characters. The global Whittaker functional is preserved because the twisting determinant is $1$ on the upper-unitriangular subgroup. Thus the stated generic standard class is preserved; right translation gives the action $\Pi_\chi(g)=\chi(\det g)\Pi(g)$. [given, F1, construct, algebra]

2.1 On a scalar matrix $zI_2$, the twisting factor is $\chi(z^2)=\chi(z)^2$, so the central character of $\Pi_\chi$ is $\omega_\Pi\chi^2$, which is unitary. Thus [F2] applies to $\Pi_\chi$ and gives the claimed bound; [F3] identifies its analytic conductor with the finite and archimedean conductor factors used in the statement. [given, F2, F3, step 1.1, algebra] ∎
