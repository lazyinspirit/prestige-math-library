---
id: ex-poitou-tate-mu-n-local-global-sequence
kind: example
title: "The Poitou–Tate sequence for roots of unity over the rationals"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps:
  - def-absolute-galois-group-of-a-field
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-finite-galois-module-and-cartier-dual
  - def-restricted-product-of-local-galois-cohomology-groups
  - lem-kummer-cohomology-of-roots-of-unity
  - thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes
  - thm-poitou-tate-exact-sequence-for-finite-modules
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter I, §4"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Theorem I.4.10 and the restricted-product definitions, printed pp. 48–65."
    - title: "Kęstutis Česnavičius, Poitou–Tate without restrictions on the order, arXiv:1410.2621v2"
      url: "https://arxiv.org/pdf/1410.2621v2"
      locator: "§1.1 and §5, Theorem 5.1 and proof, arXiv PDF pp. 1–2 and 21."
verification:
  precheck: pass
---

## Example

Assume AC, Countable Choice, Dependent Choice, and the full finite-module
Poitou–Tate theorem in its stated number-field scope. Let $n\ge2$, let
$M=\mu_n(\overline{\mathbb Q})$ with its natural
$G_{\mathbb Q}$-action, put $S_0$ equal to the real place together with the
finite places ramified in this action and those whose residue characteristic
divides $n$, and take $S$ to be all places of $\mathbb Q$. Then
$M^D$ is the constant module $\mathbb Z/n\mathbb Z$. The Poitou–Tate sequence
specializes to
$$\begin{aligned}0\longrightarrow H^0(G_{\mathbb Q},\mu_n)&\longrightarrow P^0_S(\mathbb Q,\mu_n)\longrightarrow H^2(G_{\mathbb Q},\mathbb Z/n\mathbb Z)^\vee\longrightarrow \mathbb Q^\times/(\mathbb Q^\times)^n\longrightarrow P^1_S(\mathbb Q,\mu_n)\\&\longrightarrow H^1(G_{\mathbb Q},\mathbb Z/n\mathbb Z)^\vee\longrightarrow H^2(G_{\mathbb Q},\mu_n)\longrightarrow P^2_S(\mathbb Q,\mu_n)\longrightarrow \operatorname{Hom}(\mathbb Z/n\mathbb Z,\mathbb Q/\mathbb Z)\longrightarrow0.\end{aligned}$$
Here $P^1_S(\mathbb Q,\mu_n)$ is the restricted product of
$\mathbb Q_v^\times/(\mathbb Q_v^\times)^n$ relative, outside $S_0$, to the
images of unramified inflation under the local Kummer identifications. The
localization arrow from $\mathbb Q^\times/(\mathbb Q^\times)^n$ sends a class
of $a$ to its local classes $([a]_v)_v$. The group
$P^2_S(\mathbb Q,\mu_n)$ is the direct sum of
the local groups $H^2(G_{\mathbb Q_v},\mu_n)$, with the prescribed Tate
modification at the real place. The degree-zero real factor is also
Tate-modified. The displayed exactness is conditional on the stated
Poitou–Tate theorem; this Example does not independently establish it.

## Example references

[[def-finite-galois-module-and-cartier-dual]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[def-restricted-product-of-local-galois-cohomology-groups]]

[[lem-kummer-cohomology-of-roots-of-unity]]

[[thm-poitou-tate-exact-sequence-for-finite-modules]]

[J. S. Milne, *Arithmetic Duality Theorems*, Chapter I §4](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Kęstutis Česnavičius, *Poitou–Tate without restrictions on the order*, §§1.1 and 5](https://arxiv.org/pdf/1410.2621v2)

## Facts & Assumptions

**Given:** $n\ge2$, the number field $\mathbb Q$, its absolute Galois group, and the finite module $\mu_n(\overline{\mathbb Q})$.

[F1] For a characteristic-zero field $F$, $H^1(G_F,\mu_n)$ is $F^\times/(F^\times)^n$, and $H^2(G_F,\mu_n)$ identifies with the kernel of multiplication by $n$ on $H^2(G_F,F_s^\times)$. [[lem-kummer-cohomology-of-roots-of-unity]]

[F2] The Cartier dual of $\mu_n$ is the constant $G_{\mathbb Q}$-module $\mathbb Z/n\mathbb Z$, with evaluation pairing given by exponentiation. [[def-finite-galois-module-and-cartier-dual]]

[F3] The groups $P^r_S(K,M)$ use Tate-modified archimedean cohomology and, at finite places outside the exceptional set, the images of inertia-quotient inflation. [[def-restricted-product-of-local-galois-cohomology-groups]]

[F4] For a finite residue field and a discrete torsion Galois module, continuous cohomology vanishes in degrees $r\ge2$. [[thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes]]

[A1] The full finite-module Poitou–Tate theorem is assumed in the Example and states the exact sequence under the stated choice assumptions. [[thm-poitou-tate-exact-sequence-for-finite-modules]]

[A2] The Axiom of Choice, Countable Choice, and Dependent Choice are the choice assumptions in the invoked finite-module theorem. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** substitute the Kummer identifications and the restricted-product conventions into the finite-module sequence.

**Given:** The data in the Example and, conditionally, the full Poitou–Tate theorem of [A1].

1.1 Apply [F1] with $F=\mathbb Q$ and with $F=\mathbb Q_v$. This identifies the global degree-one term with $\mathbb Q^\times/(\mathbb Q^\times)^n$ and each local degree-one term with $\mathbb Q_v^\times/(\mathbb Q_v^\times)^n$. Naturality of the Kummer connecting map makes localization send the class of $a$ to its class in every completion. [F1, given, construct]

1.2 Every power map $\mu_n\to\mu_n$ is defined over $\mathbb Q$, so the Galois action on the character group $M^D$ is trivial; evaluation identifies it with $\mathbb Z/n\mathbb Z$. Thus the dual-coefficient terms in the sequence have the displayed form. [F2, given]

1.3 Let $v$ be a finite place outside $S_0$. Inertia acts trivially on $\mu_n$ by the defining property of $S_0$. The local Kummer identification of [F1] identifies the local cohomology factor with $\mathbb Q_v^\times/(\mathbb Q_v^\times)^n$; its restricted subgroup remains exactly the image of unramified inflation in the Definition. Thus the localization map is the stated tuple of local Kummer classes without choosing representatives. [F1, F3, given]

2.1 At a finite place outside $S_0$, the inertia-quotient coefficient is a torsion module over the finite residue field, so its degree-two cohomology is zero by [F4]. Therefore the unramified subgroup in degree two is zero away from the finite exceptional set, and the restricted product in degree two is the direct sum of the local degree-two groups. At the real place the definition retains Tate-modified groups in degrees zero and two. [F3, F4, step 1.3]

3.1 Substitute the identifications in steps 1.1–2.1 and the trivial dual module from step 1.2 into the sequence asserted by [A1]. This gives exactly the displayed specialization and its localized arrow. Exactness is inherited from the theorem explicitly assumed in [A1]. [A1, A2, F1, F2, F3, F4, step 1.1, step 1.2, step 1.3, step 2.1] ∎
