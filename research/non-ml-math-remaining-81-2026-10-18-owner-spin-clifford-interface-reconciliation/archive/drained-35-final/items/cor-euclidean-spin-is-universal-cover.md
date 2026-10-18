---
id: cor-euclidean-spin-is-universal-cover
kind: corollary
title: Euclidean Spin is the universal cover of SO(n) for n at least three
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations
dependency_level: 9
deps:
  - lem-normalized-pin-spin-product-and-norm-laws
  - thm-real-pin-spin-topological-double-covers
  - lem-real-spin-norm-detects-components
  - lem-euclidean-spin-sphere-bundle-local-sections
  - thm-clifford-pbw-basis-and-associated-graded
  - def-axiom-of-choice
  - thm-numerable-fiber-bundles-are-hurewicz-fibrations
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-higher-dimensional-spheres-are-simply-connected
justified_by: []
verification:
  precheck: pass
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.8"
      url: https://arxiv.org/pdf/0805.0311
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry, §1.5.3, pp. 29–31"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Assume the Axiom of Choice. For every integer $n\ge3$, the connected double cover $\operatorname{Spin}_{\mathrm{full}}(n)\to SO(n)$ from [[thm-real-pin-spin-topological-double-covers]] has simply connected total space and is the universal covering group of $SO(n)$. The proof uses the explicit locally trivial sphere bundle

$$\operatorname{Spin}(n-1)\longrightarrow\operatorname{Spin}(n)\xrightarrow{x\mapsto\rho_x(e_n)}S^{n-1}$$

from [[lem-euclidean-spin-sphere-bundle-local-sections]]. No universal-cover assertion is made for $n=1$ or $n=2$.

## Facts & Assumptions

**Given:** Euclidean $V=\mathbb R^n$ with its positive Clifford convention, the Axiom of Choice, and the group maps above.

[F1] $\operatorname{Spin}(n)\to SO(n)$ is a two-sheeted covering, and $SO(n)$ is connected ([[thm-real-pin-spin-topological-double-covers]], [[lem-real-spin-norm-detects-components]]).

[F2] The sphere projection has explicit local product charts and a finite partition of unity subordinate to those charts ([[lem-euclidean-spin-sphere-bundle-local-sections]]).

[F3] Under AC, a numerable fiber bundle is a Hurewicz fibration ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]). The AC hypothesis in this supplier is used to well-order finite chart words in its lifting construction.

[F4] For a based Serre fibration, the homotopy groups of the fiber, total space, and base form an exact sequence ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F5] $S^m$ is simply connected for every $m\ge2$ ([[thm-higher-dimensional-spheres-are-simply-connected]]).

[F6] Full-even Spin elements are even products of unit vectors, with $-1$ included ([[lem-normalized-pin-spin-product-and-norm-laws]]).

[F7] The orthogonal square-free monomials form a basis of the Clifford algebra ([[thm-clifford-pbw-basis-and-associated-graded]]).

[A1] Assume AC; it is used only in step 3.1 through the numerable-bundle-to-fibration supplier [F3] ([[def-axiom-of-choice]]).

## Proof


**Proof technique:** induction.

1.1 For every $n\ge2$, $\operatorname{Spin}(n)$ is path connected. By [F6], each element is a product of an even number of unit vectors, possibly multiplied by $-1$. The unit sphere $S^{n-1}$ is path connected: non-antipodal points join by a great-circle arc, and antipodal points join by two such arcs through a third point. For each pair of unit factors choose paths from a fixed unit vector $e_1$ to the two factors and multiply the two paths; at the initial endpoint their product is $e_1^2=1$. Concatenating these paths joins $1$ to the product. The remaining scalar $-1$ joins to $1$ along $t\mapsto\cos(\pi t)+e_1e_2\sin(\pi t)$, which has norm one and is even. [given, F6, construct]

2.1 In dimension $3$, [F7] gives basis $1,e_1e_2,e_2e_3,e_3e_1$ for $\mathrm{Cl}^0_{3,0}$. Direct multiplication gives the quaternion relations, Clifford conjugation negates each bivector, and hence $N(a+b_1e_1e_2+b_2e_2e_3+b_3e_3e_1)=a^2+b_1^2+b_2^2+b_3^2$. A bivector $b=b_1e_2e_3+b_2e_3e_1+b_3e_1e_2$ corresponds to the vector $b_1e_1+b_2e_2+b_3e_3$ under the three-dimensional Hodge star; choosing an oriented orthonormal basis in its perpendicular plane gives $b=\beta uw$ with $u,w$ orthonormal and $\beta=\sqrt{b_1^2+b_2^2+b_3^2}$. If $a^2+\beta^2=1$, the vector $v=au+\beta w$ is unit and $uv=a+b$. For $b=0$, the elements $\pm1$ are the empty product and a product $u(-u)$. Thus every unit quaternion is in Spin, and every Spin element has norm one, so $\operatorname{Spin}(3)=S^3$. By [F5], this group is simply connected. [F5, F6, F7, step 1.1, construct, base]

3.1 For $n\ge4$, the sphere bundle in [F2] has a finite subordinate partition of unity, so it is numerable; [F3] and [A1] make it a Hurewicz, hence Serre, fibration. Its fiber is $\operatorname{Spin}(n-1)$ and its base is $S^{n-1}$. By the induction hypothesis the fiber is simply connected, and [F5] makes the base simply connected. The exact segment $\pi_1(\operatorname{Spin}(n-1))\to\pi_1(\operatorname{Spin}(n))\to\pi_1(S^{n-1})$ from [F4] therefore forces $\pi_1(\operatorname{Spin}(n))=0$. Step 1.1 gives path connectedness, so Spin$(n)$ is simply connected for all $n\ge3$. [A1, F2, F3, F4, F5, step 1.1, step 2.1, ih]

4.1 By [F1], Spin$(n)\to SO(n)$ is a connected covering with connected simply connected total space. By definition this is the universal covering space; since the map is a group homomorphism, it is the universal covering group. The induction begins at $n=3$ in step 2.1 and proceeds by step 3.1, with the exact choice use recorded in [A1]. [A1, F1, step 1.1, step 2.1, step 3.1, discharge-induction] ∎

## Remarks

The proof carries AC because it uses the published general theorem that numerable bundles are Hurewicz fibrations. The group-theoretic factorization and the explicit finite partition of unity use no choice axiom. Spin$(2)\cong S^1$ is a nontrivial double cover of $SO(2)\cong S^1$, not a universal cover; its direct calculation is on the B page.
