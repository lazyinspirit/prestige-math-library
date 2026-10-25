---
id: ex-qftx-gaga-analytic-finite-not-vanishing
kind: example
title: Compact coherent cohomology can be finite and nonzero
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-qftx-gaga-projective-twisting-line-bundles
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - def-polydisc-boundary-radius
  - def-levi-form-and-strict-plurisubharmonicity
  - thm-c-two-levi-criterion-for-plurisubharmonicity
  - thm-leray-acyclic-cover-theorem
  - thm-cech-to-sheaf-cohomology-comparison
  - thm-qftx-gaga-analytic-oka-coherence
  - thm-qftx-gaga-analytic-compact-projective-coherent-finiteness
  - lem-qftx-gaga-scalar-pseudoconvex-acyclicity
  - lem-qftx-gaga-cstar-laurent-decomposition
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-gaga-projective-twisting-line-bundles: mathematical-premise
  def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity: mathematical-premise
  def-polydisc-boundary-radius: mathematical-premise
  def-levi-form-and-strict-plurisubharmonicity: mathematical-premise
  thm-c-two-levi-criterion-for-plurisubharmonicity: mathematical-premise
  thm-leray-acyclic-cover-theorem: mathematical-premise
  thm-cech-to-sheaf-cohomology-comparison: mathematical-premise
  thm-qftx-gaga-analytic-oka-coherence: mathematical-premise
  thm-qftx-gaga-analytic-compact-projective-coherent-finiteness: mathematical-premise
  lem-qftx-gaga-scalar-pseudoconvex-acyclicity: mathematical-premise
  lem-qftx-gaga-cstar-laurent-decomposition: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Chapter IX §§1.B and 4.D, printed pp. 406–408 and 424: finite cohomology can be nonzero."
    - title: "Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series"
      url: https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf
      locator: "Topic 7: Laurent series and annular cohomology calculation background."
verification:
  precheck: pending
page: qftx-gaga-compact-coherent-finiteness-examples
category: quantum-field-theory-mathematics
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
---

## Example

Assume full AC. Let $P^1(\mathbb C)$ have standard charts $U_0=\{Z_0\ne0\}$ and $U_1=\{Z_1\ne0\}$, with coordinates $z=Z_1/Z_0$ on $U_0\cong\mathbb C$ and $w=Z_0/Z_1=1/z$ on $U_1\cong\mathbb C$. Let $\mathcal O(-2)$ be the projective twisting line bundle with local frames satisfying $e_1=z^{-2}e_0$ on $U_0\cap U_1\cong\mathbb C^*$. Then
$$
H^1(P^1(\mathbb C),\mathcal O(-2))\cong\mathbb C.
$$
Thus finite-dimensionality of compact coherent cohomology does not imply vanishing of positive-degree cohomology.

## Example references

[Jean-Pierre Demailly, *Complex Analytic and Differential Geometry*, Chapter IX §§1.B and 4.D](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series](https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf)

## Facts & Assumptions

**Given:** Full AC; the projective line with its two standard charts; and the line bundle $\mathcal O(-2)$ with the stated transition rule.

[F1] The compact projective coherent-finiteness theorem asserts finite-dimensional Hausdorff cohomology for coherent analytic modules on $P^1$ ([[thm-qftx-gaga-analytic-compact-projective-coherent-finiteness]]); the calculation below determines the exact nonzero group.

[F2] The local frames of $\mathcal O(k)$ satisfy $e_j^{(k)}=(Z_j/Z_i)^k e_i^{(k)}$ on the standard chart overlaps ([[def-qftx-gaga-projective-twisting-line-bundles]]).

[F3] A domain is Hartogs pseudoconvex when $-\log\delta_\Omega$ is plurisubharmonic, where $\delta_\Omega$ is the equal-radius polydisc boundary function; the whole-space convention makes $\mathbb C$ Hartogs pseudoconvex. On such domains the scalar holomorphic structure sheaf has zero positive-degree sheaf cohomology ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]], [[def-polydisc-boundary-radius]], [[lem-qftx-gaga-scalar-pseudoconvex-acyclicity]]).

[F4] A $C^2$ function on a domain is plurisubharmonic when its Levi form is nonnegative ([[def-levi-form-and-strict-plurisubharmonicity]], [[thm-c-two-levi-criterion-for-plurisubharmonicity]]).

[F5] The ordered two-set cover computes derived cohomology by its Čech complex when the sheaf is acyclic on the two sets and their overlap ([[thm-leray-acyclic-cover-theorem]], [[thm-cech-to-sheaf-cohomology-comparison]]).

[F6] Every holomorphic function on $\mathbb C^*$ has a unique Laurent decomposition $f(z)=g(z)+a z^{-1}+z^{-2}h(1/z)$ with $g,h$ entire and $a\in\mathbb C$ ([[lem-qftx-gaga-cstar-laurent-decomposition]]).

[A1] Full AC is the set-choice postulate and is included in the local Oka and scalar-acyclicity inputs ([[def-axiom-of-choice]], [[thm-qftx-gaga-analytic-oka-coherence]], [[lem-qftx-gaga-scalar-pseudoconvex-acyclicity]]).

[F7] Under the Oka interface, the structure sheaf is coherent; a line bundle is locally free of rank one and therefore is a coherent analytic module ([[thm-qftx-gaga-analytic-oka-coherence]], [[def-qftx-gaga-projective-twisting-line-bundles]]).

## Proof

1.1 By [F7], $\mathcal O(-2)$ is coherent, and its displayed frames trivialize it on $U_0$ and $U_1$. The domain $U_0\cong\mathbb C$ is Hartogs pseudoconvex by the whole-space convention. On $U_0\cap U_1\cong\mathbb C^*$, the equal-radius disk boundary function is $\delta(z)=|z|$, so $-\log\delta(z)=-\log|z|$ is harmonic and has zero Levi form; it is plurisubharmonic by [F4], hence the overlap is Hartogs pseudoconvex. The same argument applies to $U_1\cong\mathbb C$. By [F3], $\mathcal O$ and thus $\mathcal O(-2)$ are acyclic on every nonempty member and overlap. [A1, F2, F3, F4, F7, given, construct]

1.2 By [F5], $H^1(P^1,\mathcal O(-2))$ is the degree-one cohomology of the ordered Čech complex for $(U_0,U_1)$. A degree-one cochain is $f(z)e_0$ with $f\in\mathcal O(\mathbb C^*)$. A degree-zero cochain is $(a(z)e_0,b(w)e_1)$ with $a,b\in\mathcal O(\mathbb C)$. Using $e_1=z^{-2}e_0$, its coboundary on the overlap is $(z^{-2}b(1/z)-a(z))e_0$. Therefore the degree-one cohomology is the quotient of $\mathcal O(\mathbb C^*)$ by the subspace $\mathcal O(\mathbb C)+\{z^{-2}b(1/z):b\in\mathcal O(\mathbb C)\}$. [F2, F5, given, construct]

2.1 For every $f\in\mathcal O(\mathbb C^*)$, [F6] writes it uniquely as $f(z)=g(z)+a z^{-1}+z^{-2}h(1/z)$ with $g,h$ entire. The first and last terms lie in the coboundary subspace of step 1.2, so every quotient class is represented by $a z^{-1}$. If $a z^{-1}$ itself lies in that subspace, its Laurent coefficient of degree $-1$ is zero because an entire $a(z)$ has only nonnegative powers and $z^{-2}b(1/z)$ has only powers at most $-2$; uniqueness in [F6] forces $a=0$. Thus the quotient is one-dimensional with basis class $[z^{-1}e_0]$. [F6, step 1.2, algebra]

3.1 The quotient computation in step 2.1 and the Leray identification in step 1.2 give $H^1(P^1(\mathbb C),\mathcal O(-2))\cong\mathbb C$. In particular, [F1] supplies the compact coherent finiteness conclusion while this calculation exhibits a nonzero positive-degree group. This is a direct analytic Čech calculation using one-variable Laurent series; it invokes neither GAGA nor a positive-twist theorem. [F1, step 1.2, step 2.1] ∎
