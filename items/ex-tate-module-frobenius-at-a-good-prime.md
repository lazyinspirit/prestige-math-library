---
id: ex-tate-module-frobenius-at-a-good-prime
title: "Frobenius on the Tate module of an abelian variety at a good prime"
kind: example
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - thm-local-absolute-galois-group-residue-exact-sequence
  - thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group
  - def-global-field
  - def-continuous-l-adic-galois-representation
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-absolute-galois-group-of-a-local-field
  - def-local-inertia-subgroup-of-absolute-galois-group
  - def-discrete-valuation-ring
  - thm-equivalent-characterisations-of-a-dvr
  - def-dedekind-domain
  - def-unramified-galois-representation-at-a-place
  - thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial
  - def-arith-tate-module-and-inertia
  - lem-arith-field-prime-to-characteristic-torsion-and-tate-module
  - def-good-reduction-and-abelian-scheme-model
  - thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre
  - thm-arith-neron-ogg-shafarevich-prime-to-residue-characteristic
  - lem-arith-abelian-scheme-torsion-specialization-unramified
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jean-Pierre Serre, Abelian ℓ-adic Representations and Elliptic Curves, Chapter IV, §1.3"
      url: "https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf"
    - title: "J. S. Milne, Abelian Varieties, version 2.00, Chapter I, §§11 and 17"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Néron Models, §§7.3–7.4"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
verification: {}
---

## Example

Assume AC, DC, and Countable Choice as declared by the global and local
Galois-group and Tate-module interfaces. Let $F$ be a number field, let $A/F$
be an abelian variety of dimension $g$, and let $v$ be a finite place with
completion $F_v$, valuation ring $R$, and residue field $\mathbb F_q$ of
characteristic $p$. Fix a separable closure $\bar F/F$ and an extension
$\bar v$ of $v$ to $\bar F$. Suppose
$\mathcal A/R$ is an abelian scheme whose generic fibre is $A\times_F F_v$,
and let $\widetilde A/\mathbb F_q$ be its special
fibre. Let $\ell$ be a prime with $\ell\ne p$, and write
$V_\ell(B)=T_\ell(B)\otimes_{\mathbb Z_\ell}\mathbb Q_\ell$ for either
$B=A$ or $\widetilde A$. Let
$\rho_{A,\ell}:G_F\to\operatorname{GL}_{\mathbb Q_\ell}(V_\ell(A))$ be the
natural action on the generic Tate module. Then $V_\ell(A)$ has dimension
$2g$ and is unramified at $v$. With arithmetic Frobenius normalized by
$x\mapsto x^q$, its characteristic polynomial is
$$\det(1-T\rho_{A,\ell}(\operatorname{Frob}_v)) =\det(1-T\Phi_q\mid V_\ell(\widetilde A)),$$
where $\Phi_q$ is the endomorphism of $\widetilde A$ whose action on
$\overline{\mathbb F}_q$-points raises each coordinate to the $q$th power.
The polynomial is independent of $\bar v$. Thus the polynomial of the generic
Tate-module representation is the polynomial of the special-fibre Frobenius
endomorphism.

## Example references

[[def-arith-tate-module-and-inertia]]

[[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]

[[def-good-reduction-and-abelian-scheme-model]]

[[thm-arith-neron-ogg-shafarevich-prime-to-residue-characteristic]]

[[lem-arith-abelian-scheme-torsion-specialization-unramified]]

[[thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial]]

[Jean-Pierre Serre, *Abelian ℓ-adic Representations and Elliptic Curves*, Chapter IV, §1.3](https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf)

[J. S. Milne, *Abelian Varieties*, version 2.00, Chapter I, §§11 and 17](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[S. Bosch, W. Lutkebohmert, M. Raynaud, *Néron Models*, §§7.3–7.4](https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf)

## Facts & Assumptions

**Given:** AC, DC, and Countable Choice, a number field $F$, an abelian
variety $A/F$ of dimension $g$, a finite place $v$, a fixed separable closure
$\bar F/F$, an extension $\bar v$, an abelian scheme model $\mathcal A/R$ of
$A_{F_v}$, its special fibre $\widetilde A/\mathbb F_q$, and a prime
$\ell\ne p=\operatorname{char}\mathbb F_q$.

[A1] [[def-axiom-of-choice]]: AC is inherited from the Tate-module,
global-Galois, and Néron-model suppliers.

[A2] [[def-dependent-choice]]: DC is used by the published Tate-module and
Néron–Ogg–Shafarevich arguments; it is kept as a separate hypothesis.

[A3] [[def-countable-choice]]: Countable Choice is retained for the local
place and inertia conventions.

[F1] [[def-global-field]] and
[[def-continuous-l-adic-galois-representation]]: the global Galois group has
its Krull topology; a continuous action on the finite-dimensional
$\mathbb Q_\ell$-space $V_\ell(A)$ is an $\ell$-adic representation.

[F2] [[def-arith-tate-module-and-inertia]]: $T_\ell(A)$ is the inverse limit
of the finite geometric torsion groups, with the coordinatewise Galois action.

[F3] [[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]:
under AC and DC, $T_\ell(A)$ is free of rank $2g$ and
$T_\ell(A)/\ell^nT_\ell(A)\cong A[\ell^n](\bar F)$.

[F4] [[def-good-reduction-and-abelian-scheme-model]]: an abelian scheme model
has generic fibre $A_{F_v}$ and special fibre an abelian variety over
$\mathbb F_q$.

[F5] [[thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre]]: under AC
and DC, an abelian scheme over a Dedekind base is the Néron model of its
generic fibre.

[F6] [[thm-arith-neron-ogg-shafarevich-prime-to-residue-characteristic]]:
under AC and DC, good reduction and $\ell\ne p$ imply that inertia fixes every
$A[\ell^n](F_v^{\mathrm{sep}})$ and acts trivially on $T_\ell(A)$.

[F7] [[lem-arith-abelian-scheme-torsion-specialization-unramified]]:
under AC and DC, reduction identifies the geometric generic and special
$\ell^n$-torsion for every $n$, and inertia acts trivially on each group.

[F8] [[def-unramified-galois-representation-at-a-place]]: a representation
is unramified at $v$ when $I_{\bar v}$ acts trivially.

[F9] [[thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial]]:
for such a representation, the arithmetic Frobenius characteristic
polynomial is $\det(1-T\rho(\operatorname{Frob}_v))$ and is independent of
the lift.

[F10] [[def-local-field-valuation-ring-uniformizer-and-residue-field]] and
[[def-discrete-valuation-ring]]: the completion $F_v$ is a complete
nonarchimedean local field and $R$ is its discrete valuation ring with residue
field $\mathbb F_q$.

[F11] [[thm-equivalent-characterisations-of-a-dvr]] and
[[def-dedekind-domain]]: a DVR is Noetherian, one-dimensional, and integrally
closed, hence is a Dedekind domain; therefore $\operatorname{Spec}R$ is a
Dedekind base for [F5].

[F12] [[thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group]]: under AC, the global decomposition group at every finite place is the local absolute Galois group; the identification preserves residue kernels, and all prolongations are conjugate with residue maps commuting with arithmetic Frobenius.

[F13] [[thm-local-absolute-galois-group-residue-exact-sequence]]: under AC the local residue action is surjective and has kernel absolute inertia.


## Proof


1.1 By [F3], both geometric finite torsion groups have order $\ell^{2g\nu}$ at every $\nu$, and their Tate modules are free of rank $2g$. Choose the embedding of the fixed global separable closure into the local separable closure compatible with $\bar v$, as in [F12]. The induced map from global to local geometric torsion is injective. Both sets have this same finite cardinality by [F3], so the map is bijective. It commutes with the decomposition-group action. The finite torsion actions have open kernels because their coordinates generate finite extensions, so the inverse-limit action is continuous. Tensoring the free Tate module with $\mathbb Q_\ell$ gives dimension $2g$. [A1, A2, A3, F1, F2, F3, F12, given, construct, algebra]

2.1 Apply the bijective reduction in [F7] to each finite torsion scheme of the given abelian scheme. Reduction commutes with addition and multiplication by $\ell$, since these are morphisms over $R$. For an automorphism in the decomposition group, its action preserves the chosen valuation ring by [F12]; reduction therefore commutes with its residue action on special-fibre points. These bijections consequently induce an equivariant inverse-limit isomorphism between the generic and special Tate modules. By [F12] and [F13], an element of global inertia has trivial residue action. It therefore fixes every special torsion point, hence every generic torsion point by the bijection, and the entire Tate module. Thus the representation is unramified by [F8]. This uses the bijective specialization clause of [F7] and naturality directly, without identifying its strict-henselization inertia convention by an additional unproved bridge. [A1, A2, F2, F4, F7, F8, F12, F13, step 1.1, algebra]

3.1 By [F12] and [F13], arithmetic residue Frobenius has a lift $\sigma$ in the global decomposition group. Its residue action is $x\mapsto x^q$. On every special-fibre torsion point this is the endomorphism $\Phi_q$; the equivariance in step 2.1 thus identifies its generic Tate-module action with the special-fibre action of $\Phi_q$. The same equality holds after tensoring with $\mathbb Q_\ell$. [F2, F7, F12, F13, step 2.1, algebra]

4.1 By [F9], for the unramified representation proved in step 2.1 the arithmetic Frobenius polynomial is independent of its lift and chosen prolongation. Step 3.1 identifies the two operators by an equivariant vector-space isomorphism, so their characteristic polynomials agree. This proves all assertions of the Example. [F8, F9, step 1.1, step 2.1, step 3.1, algebra] ∎
