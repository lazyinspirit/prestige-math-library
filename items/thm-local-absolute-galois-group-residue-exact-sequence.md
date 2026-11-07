---
id: thm-local-absolute-galois-group-residue-exact-sequence
kind: theorem
title: "The local absolute Galois group maps onto the residue-field Galois group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-absolute-galois-group-of-a-local-field
  - def-local-inertia-subgroup-of-absolute-galois-group
  - thm-absolute-galois-group-of-finite-field-is-procyclic
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-lower-ramification-groups-of-a-local-galois-extension
  - def-finite-galois-extension-and-galois-group
  - thm-finite-galois-extension-characterizations
  - thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - cor-finite-extensions-of-finite-fields-are-simple
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - def-profinite-group-by-inverse-limit
  - thm-algebraic-embedding-extension
  - def-algebraic-closure
  - thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Theorem 7.58"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, Chapter IV, §8.2"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a nonarchimedean local field with
finite residue field $k$, fix a separable closure $K_s$, and put
$G_K=\mathrm{Gal}(K_s/K)$. Let $\bar k$ be the residue-field algebraic
closure and let $\eta:G_K\to\mathrm{Gal}(\bar k/k)$ be the natural reduction
map. Then $\eta$ is surjective and
$$\ker(\eta)=I_K,$$
where $I_K$ is the inverse limit of the finite inertia groups in the
definition of the absolute inertia subgroup. Thus
$$1\longrightarrow I_K\longrightarrow G_K\mathop{\longrightarrow}^{\eta}\mathrm{Gal}(\bar k/k)\longrightarrow1$$
is an exact sequence of profinite groups.

## Statement references

[[def-absolute-galois-group-of-a-local-field]]

[[def-local-inertia-subgroup-of-absolute-galois-group]]

[[thm-absolute-galois-group-of-finite-field-is-procyclic]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]]

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Theorem 7.58, printed p. 131](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter IV, §8.2, printed pp. 168–169](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a nonarchimedean local field $K$ with finite
residue field $k$, its fixed separable closure $K_s$, and $\bar k$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice
function. Together with
[[thm-choice-implies-dependent-implies-countable-choice]], it supplies
Countable Choice for [F4] and compactness of the inverse limit defining
$G_K$.

[F1] [[def-local-field-valuation-ring-uniformizer-and-residue-field]] and
[[def-absolute-galois-group-of-a-local-field]]: $K$ is complete with a
discrete valuation, finite residue field, and profinite absolute Galois group
$G_K$.

[F2] [[def-local-inertia-subgroup-of-absolute-galois-group]] and
[[def-lower-ramification-groups-of-a-local-galois-extension]]: at a finite
Galois level $E/K$, inertia is the kernel of the action of
$\mathrm{Gal}(E/K)$ on the residue field $k_E$; $I_K$ is the inverse limit of
these kernels.

[F3] [[thm-absolute-galois-group-of-finite-field-is-procyclic]]: for finite
$k$, $\mathrm{Gal}(\bar k/k)\cong\widehat{\mathbb Z}$, generated
topologically by arithmetic Frobenius $x\mapsto x^{|k|}$.

[F4] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]:
under Countable Choice, if $L/K$ is finite, then
$[L:K]=e(L/K)[k_L:k]$, so its residue extension is finite.

[F5] [[cor-finite-extensions-of-finite-fields-are-simple]]: a finite
extension of finite fields has a primitive element.

[F11] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]:
every finite extension of finite fields is Galois with cyclic Frobenius group.

[F6] [[lem-hensel-factor-lifting-over-a-complete-valued-field]] and
[[thm-unique-extension-of-a-nonarchimedean-absolute-value]]: over the
complete finite extension $E$, each simple residue root has a unique
integral lift to a root of a lifted polynomial.

[F7] [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]:
assuming Choice, $G_K$ is compact; $\mathrm{Gal}(\bar k/k)$ is Hausdorff.

[F8] [[def-finite-galois-extension-and-galois-group]] and
[[thm-finite-galois-extension-characterizations]]: in a finite Galois extension the full automorphism group has fixed field the base field, and the automorphisms permute roots of base-field polynomials. The transitivity needed below is derived explicitly from these facts.

[F9] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]:
every finite extension $\ell/k$ is the residue field of a finite unramified
Galois extension $E/K$, and reduction identifies
$\mathrm{Gal}(E/K)$ with $\mathrm{Gal}(\ell/k)$.

[F10] [[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]]:
assuming Choice, every automorphism of a finite Galois subextension extends
to the separable closure.

[F12] [[thm-algebraic-embedding-extension]] and [[def-algebraic-closure]]: under AC an embedding into an algebraically closed field extends over an algebraic extension. A finite separable local extension therefore embeds in the fixed separable closure.

## Proof

1.1 Let $E/K$ be finite Galois, with residue field $k_E$. By [F4], it is a finite extension of $k$; choose a primitive element $\bar a$ by [F5], with monic minimal polynomial $\bar f$ of degree $d=[k_E:k]$. It is separable by [F11]. Lift its coefficients to a monic $f\in\mathcal O_K[T]$. Hensel lifting [F6] in complete $E$ gives a root $\alpha\in\mathcal O_E$ reducing to $\bar a$. The residue degree of $K(\alpha)/K$ is at least $d$, and its field degree is at most $d$. By [F4], field degree is ramification index times residue degree, so both degrees are $d$ and its ramification index is one. Thus $f$ is the minimal polynomial of $\alpha$. [A1, F1, F4, F5, F6, F11, given, choose, algebra]

1.2 The unique extended absolute values on the finite Galois subextensions in $K_s$ are compatible by [F6], so their residue fields embed compatibly. Their directed union $k_\infty$ is a field algebraic over $k$ by [F4]. For every finite $\ell/k$, [F9] gives a finite unramified Galois $E/K$ with residue field isomorphic to $\ell$; [F12] embeds $E$ in $K_s$ and uniqueness of the value preserves its residue field. Thus $k_\infty$ contains a copy of every finite extension of $k$. Embed $k_\infty$ into the given algebraic closure $\bar k$ by [F12]. For each $d$, a subfield of order $|k|^d$ is exactly the roots of $T^{|k|^d}-T$ in $\bar k$, so there is at most one such subfield there; the image consequently contains every finite subextension of $\bar k/k$. Every element of $\bar k$ lies in such a finite extension, so this embedding is onto. This identifies $k_\infty$ with the residue algebraic closure in the Statement. Compatible finite residue actions define the homomorphism $\eta$; each target finite coordinate factors through a finite Galois field coordinate, so it is continuous. Its kernel is precisely the compatible families of finite inertia elements, namely $I_K$ by [F2]. [A1, F1, F2, F4, F6, F9, F12, construct, algebra]

2.1 The $d$ distinct conjugates of $\bar a$ lift uniquely to $d$ roots of $f$ in $E$ by [F6]. The automorphisms of $E/K$ are transitive on these roots: the product of $T-\sigma\alpha$ over the distinct members of the orbit is monic and its coefficients are fixed by every automorphism, hence lie in $K$ by [F8]. Since it has $\alpha$ as a root, its degree is at least the degree $d$ of the minimal polynomial, so the orbit includes all $d$ roots. Each Frobenius power on $k_E$ sends $\bar a$ to one of their residues by [F11]; an automorphism sending $\alpha$ to that lift reduces to that Frobenius power on the generator $\bar a$ and thus on $k_E$. Reduction $\operatorname{Gal}(E/K)\to\operatorname{Gal}(k_E/k)$ is therefore surjective; its kernel is $G_0(E/K)$ by [F2]. [F2, F6, F8, F11, step 1.1, algebra]

2.2 Given a finite $\ell/k$ inside $\bar k$, choose the embedded unramified $E/K$ in step 1.2. Its reduction is an isomorphism onto $\operatorname{Gal}(\ell/k)$ by [F9]. Every automorphism of $E/K$ extends to $K_s$ by [F10]. The image of $\eta$ therefore projects onto every finite quotient of $\operatorname{Gal}(\bar k/k)$ and is dense in its inverse-limit topology. [A1, F3, F9, F10, step 1.2, construct]

3.1 By [F7], the continuous image $\eta(G_K)$ is compact, hence closed in the Hausdorff residue Galois group. Density in step 2.2 makes it the whole group. The kernel calculation in step 1.2 proves exactness. The induced quotient isomorphism is topological because a continuous surjection from a compact group to a Hausdorff group is closed and hence a quotient map. [A1, F7, step 1.2, step 2.2, algebra] ∎
