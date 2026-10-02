---
id: cor-h1-line-bundle-dual-sections
kind: corollary
title: "h^1 of a line bundle equals the dimension of the space of dual sections"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-divisor-smooth-proper-curve
  - def-index-speciality-divisor
  - def-riemann-roch-space-of-divisor
  - def-sheaf-tensor-product
  - lem-cartier-divisor-addition-tensor
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-riemann-roch-as-l-minus-index
  - thm-serre-duality-curves-line-bundles
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "Joseph Lipman, Residues, duality, and the fundamental class of a scheme-map (2011)"
      url: "https://www.math.purdue.edu/~lipman/papers/Algecom.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the duality suppliers. Let $C$
be a smooth proper geometrically integral curve over a field $k$, let $K_C$
be a canonical divisor and let $D$ be a divisor on $C$. Then
$$h^1(C,\mathcal O_C(D))=h^0(C,\mathcal O_C(K_C-D))=l(K_C-D),$$
i.e. the index of speciality of $D$ equals the dimension of the space of
sections of the dual twist, and the full Riemann-Roch identity may accordingly
be written $l(D)-l(K_C-D)=\deg_k(D)+1-g$ with no unknown term.

## Facts & Assumptions

**Given:** the Axiom of Choice; a field $k$; a smooth proper geometrically
integral curve $C$ over $k$; a canonical divisor $K_C$ on $C$; and a divisor
$D$ on $C$.

[F1] The Axiom of Choice: every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F2] Divisors on $C$ form a free abelian group on the closed points, with
support, positive and negative parts and degree $\deg_k$; addition and
subtraction of divisors are defined componentwise and canonical divisors are
divisors of rational differentials
([[def-divisor-smooth-proper-curve]],
[[def-canonical-line-bundle-curve]]).

[F3] The index of speciality of $D$ is
$i(D):=h^1(C,\mathcal O_C(D))=\dim_kH^1(C,\mathcal O_C(D))$, computed from
the invertible sheaf $\mathcal O_C(D)$ attached to $D$; it depends only on the
linear equivalence class of $D$ and is a nonnegative integer
([[def-index-speciality-divisor]]).

[F4] Over any field $k$, for an invertible $\mathcal O_C$-module $\mathcal L$
on the smooth proper geometrically integral curve $C$ one has
$h^1(C,\mathcal L)=h^0(C,\omega_C\otimes\mathcal L^{-1})$, with
$\mathcal L^{-1}=\mathcal L^\vee$ the dual ([[def-sheaf-tensor-product]]),
and the pairing realizing this equality is perfect and functorial in
$\mathcal L$ ([[thm-serre-duality-curves-line-bundles]]).

[F5] For a canonical divisor $K_C$ the canonical bundle satisfies
$\omega_C\cong\mathcal O_C(K_C)$ for the invertible sheaf attached to the
divisor, by the dictionary between invertible sheaves with a rational section
and divisors ([[def-canonical-line-bundle-curve]]).

[F6] The in-run draft theorem on line bundles and divisors
(authored as a draft in this run; its supplier closure remains pending) states: on an integral
scheme, every pair $(\mathcal L,s)$ of an invertible sheaf and a nonzero
rational section determines a Cartier divisor $\operatorname{div}_C(s)$ with
$\mathcal O_X(\operatorname{div}_C(s))\cong\mathcal L$ carrying its canonical
rational section $1$ to $s$; conversely every Cartier divisor arises, and pair
isomorphism is the equivalence relation. In particular, applied to
$\mathcal L=\omega_C\otimes\mathcal O_C(-D)$ and a nonzero rational section
with divisor $K_C-D$, it gives
$\omega_C\otimes\mathcal O_C(-D)\cong\mathcal O_C(K_C-D)$. This is the
promised claim of [[thm-line-bundle-rational-section-cartier-divisor]], treated
here as a declared supplier.

[F7] The in-run draft definition of the Riemann-Roch space
(authored as a draft in this run; its supplier closure remains pending) states: for a divisor $D$ on
the smooth proper geometrically integral curve $C$ one sets
$L(D)=\{f\in k(C)^\times:\operatorname{div}(f)+D\ge0\}\cup\{0\}$, and under
the identification of divisors with invertible sheaves $L(D)=H^0(C,\mathcal
O_C(D))$ as a $k$-subspace of $k(C)$, so that $l(D)=\dim_kL(D)=
h^0(C,\mathcal O_C(D))$. This is the promised claim of
[[def-riemann-roch-space-of-divisor]], treated here as a declared supplier.

[F8] Euler-characteristic Riemann-Roch in divisor notation gives
$l(D)-i(D)=\deg_k(D)+1-g$ for every divisor over the arbitrary field
([[thm-riemann-roch-as-l-minus-index]]). Its divisor dictionary suppliers
remain the declared in-run draft prerequisites.

[F9] Cartier divisor addition and inverse give canonical isomorphisms
$\mathcal O_C(K_C)\otimes\mathcal O_C(-D)\cong\mathcal O_C(K_C-D)$
and $\mathcal O_C(D)^\vee\cong\mathcal O_C(-D)$
([[lem-cartier-divisor-addition-tensor]]), with the curve divisor dictionary
as in [F2, F5, F6].

## Proof

**Proof technique:** direct; apply line-bundle duality to
$\mathcal L=\mathcal O_C(D)$ and translate
$\omega_C\otimes\mathcal O_C(-D)$ into $\mathcal O_C(K_C-D)$ with the
divisor-line-bundle dictionary.

1.1 The divisor $D$ and the canonical divisor $K_C$ are divisors on the curve in the sense of [F2], so that degrees and differences of divisors are defined; the divisor $D$ has an attached invertible sheaf $\mathcal O_C(D)$, and the index of speciality is  $i(D)=h^1(C,\mathcal O_C(D))$ [F3]; the canonical divisor $K_C$ is a divisor on $C$ with $\omega_C\cong\mathcal O_C(K_C)$ [F5]. [F2, F3, F5]

2.1 Apply the line-bundle duality theorem [F4] to the invertible sheaf $\mathcal L=\mathcal O_C(D)$: $h^1(C,\mathcal O_C(D))=h^0(C,\omega_C\otimes\mathcal O_C(D)^{-1})$. [F4, step 1.1]

3.1 The inverse of the invertible sheaf $\mathcal O_C(D)$ is $\mathcal O_C(-D)$ and the tensor product is commutative up to canonical isomorphism, so $\omega_C\otimes\mathcal O_C(D)^{-1}\cong\omega_C\otimes\mathcal O_C(-D)$ by [F9]. [F4, F9, step 2.1]

4.1 By the divisor-line-bundle dictionary [F6], applied to the invertible sheaf $\omega_C\otimes\mathcal O_C(-D)$ and a rational section whose divisor is $K_C-D$, one has $\omega_C\otimes\mathcal O_C(-D)\cong\mathcal O_C(K_C-D)$; this uses $\omega_C\cong\mathcal O_C(K_C)$ from step 1.1 and the additivity of the divisor of a rational section, so taking global sections gives $h^0(C,\omega_C\otimes\mathcal O_C(-D))=h^0(C,\mathcal O_C(K_C-D))$. [F5, F6, F9, step 1.1, step 3.1]

5.1 The Riemann-Roch space of $K_C-D$ satisfies $l(K_C-D)=h^0(C,\mathcal O_C(K_C-D))$ by [F7], so the right-hand side is the dimension of the space of sections of the dual twist $\mathcal O_C(K_C-D)$. [F7, step 4.1]

6.1 Chaining the equalities of steps 1.1, 5.1 and the intervening computations, $i(D)=h^1(C,\mathcal O_C(D))=h^0(C,\mathcal O_C(K_C-D))=l(K_C-D)$: the index of speciality of $D$ equals the dimension of the space of sections of the dual twist, and applying [F8] gives $l(D)-i(D)=\deg_k(D)+1-g$. Substituting $i(D)=l(K_C-D)$ into that identity, the full Riemann-Roch identity reads $l(D)-l(K_C-D)=\deg_k(D)+1-g$ with no unknown term, and the Axiom of Choice is inherited through the duality suppliers [F1]. [F1, F3, F4, F8, step 2.1, step 5.1] ∎
