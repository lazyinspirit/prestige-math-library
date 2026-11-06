---
id: lem-gts-projective-volume-pairing-for-vector-bundles
kind: lemma
title: Projective volume trace duality for perfect complexes under derived base change
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
dependency_level: 2
deps:
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - def-axiom-of-choice
  - lem-gts-morimura-ample-power-perfect-generator
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
dependency_roles:
  def-smooth-projective-dualizing-line-bundle-and-trace: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-gts-morimura-ample-power-perfect-generator: mathematical-premise
  thm-cech-computes-qc-cohomology-separated-scheme-affine-cover: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pinned mathematical supplier, dualizing line bundle and trace datum
      url: repository:items/def-smooth-projective-dualizing-line-bundle-and-trace.md
      locator: Definition and normalized-trace construction.
    - title: Pinned mathematical supplier, Serre duality for locally free sheaves
      url: repository:items/thm-serre-duality-smooth-projective-variety-locally-free-sheaves.md
      locator: Theorem and complete relevant proof.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Statement

Assume the Axiom of Choice. Let k be a field, let X be a smooth projective k-scheme of pure dimension d, and choose an isomorphism nu from $O_{X}$ to $\omega_{X}$, where $\omega_{X}$ is the determinant of the rank-d sheaf of differentials. Let $t_{X}$ be the normalized Serre trace on $H^d(X,\omega_X)$, and let E be a finite locally free $O_{X}$-module. Then the trace and evaluation pairing induces a quasi-isomorphism
$R\Gamma(X,E)\to R\operatorname{Hom}_k(R\Gamma(X,E\text{ dual}),k)[-d]$.
Moreover, for every connective derived commutative k-algebra A, write $X_{A}=X$ × Spec(A) for the derived base change. Derived sections $C_{A}(P)=R$ $\Gamma(X_{A},P)$ are perfect A-modules for every perfect P, and commute with every further derived scalar extension A -> A′. The base-changed trace induces a quasi-isomorphism
$C_A(P)\to R\operatorname{Hom}_A(C_A(P\text{ dual}),A)[-d]$
for every such P. The structure sheaf is compact in $QCoh(X_{A})$. Thus in characteristic zero the normalized volume trace supplies the full geometric orientation, including its derived-base-change condition, not only its vector-bundle restriction.

For a finite locally free E over k, equivalently, for every integer q the pairing $H^q(X,E)$ x $H^{d-q}(X,E\text{ dual})$ -> k obtained by evaluation, cup product, nu, and $t_{X}$ is perfect.

## Statement references

[The pinned normalized trace definition](https://stacks.math.columbia.edu/download/duality.pdf).

[The pinned local-free Serre-duality theorem](https://stacks.math.columbia.edu/download/duality.pdf).

## Facts & Assumptions

**Given:** A field k, a smooth projective pure d-dimensional k-scheme X, the chosen volume isomorphism nu: $O_{X}$ -> $\omega_{X}$, the normalized trace $t_{X}$, a finite locally free $O_{X}$-module E, and the Axiom of Choice as assumed by both pinned suppliers. Use cohomological shifts K[r]^$j = K$^(j+r).

[F1] [[def-smooth-projective-dualizing-line-bundle-and-trace]]: $\omega_{X}$ is det $\Omega^1_{X/k}$; a normalized trace $t_{X}$ is fixed, and its normalization is independent of the projective-space model used to define it.

[F2] [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]: for finite locally free E, cup product, contraction with E dual, and $t_{X}$ give perfect finite-dimensional pairings $H^q(X,E)$ x $H^{d-q}(X,E\text{ dual tensor }\omega_X)$ -> k for $0\le q\le d$; the cohomology groups vanish outside this range.

[A1] [[def-axiom-of-choice]]: adopt the Axiom of Choice; the cited trace and Serre-duality suppliers explicitly assume it.

[F3] [[lem-gts-morimura-ample-power-perfect-generator]] gives the coordinate Koszul generator, finite affine Čech localization, and the semifree tensor–Hom and compact-to-finite-cell arguments for the Noetherian discrete projective case. The extension of these explicit arguments to $X_{A}$ is given below, rather than assuming its Statement for a derived base.

[F4] [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]] gives the affine Čech computation for quasi-coherent sheaves. The bounded Čech direction extends it to derived modules as below.

## Proof

1.1 The isomorphism nu identifies E dual tensor $\omega_{X}$ with E dual. Under this identification, the pairing in [F2] is exactly evaluation E tensor E dual -> $O_{X}$, followed by cup product, nu: $O_{X}$ -> $\omega_{X}$, and $t_{X}$. Thus its perfectness applies to the pairing in the Statement for every $0\le q\le d$. [given, F1, F2, A1, algebra]

1.2 Choose a projective embedding $X\hookrightarrow\mathbb P^r_k$, put $M=\mathcal O_X(1)$ and $G=\bigoplus_{j=0}^r M^{-j}$. Let $U_a$ be its coordinate affine cover. For any connective derived $k$-algebra $A$, the base-changed intersections are derived affines with algebras $\mathcal O(U_J)\otimes_k^{\mathbf L}A$. Their quasi-coherent derived modules are modules over these algebras; restrictions are derived localizations. Derived sections on $X_A$ are computed by the finite ordered Čech total complex on this cover. Indeed the augmented sheaf Čech complex has the contraction inserting an index containing the point. On each derived affine the module description makes sections exact in the stable sense. Thus this bounded Čech resolution computes derived sections on arbitrary modules; only finitely many Čech degrees occur, so totalization uses finite limits and no unbounded convergence assertion. It commutes with coproducts and filtered colimits. A perfect $P$ is locally a finite-cell retract, so $R\operatorname{Hom}(P,-)=C_A(P^\vee\otimes-)$ preserves coproducts. In particular $G_A$ and $\mathcal O_{X_A}$ are compact. [given, F3, F4, A1, construct]

2.1 Put $C=R\Gamma(X,E)$ and $D=R\Gamma(X,E^\vee)$. Since $k$ is a field, $\operatorname{Hom}_k(-,k)$ is exact; applying it to cycles and boundaries gives naturally $H^q(R\operatorname{Hom}_k(D,k)[-d])=\operatorname{Hom}_k(H^{d-q}(D),k)$ under the stated shift convention. The morphism induced by evaluation, cup product, $\nu$, and $t_X$ therefore induces on $H^q$ exactly the perfect pairing of 1.1. [given, F2, step 1.1, algebra]

2.2 The coordinate Koszul complexes remain locally contracted after derived scalar change: on $U_a$ the section $s_a$ is still a unit, and insertion of $s_a^{-1}$ is the same contracting homotopy. Their finite cones show that all integral powers of $M_A$ lie in the thick closure of $G_A$. If $R\operatorname{Hom}(G_A,K)=0$, consequently $C_A(K\otimes M_A^n)=0$ for every integer $n$. The filtered colimit under multiplication by $s_a$ identifies with sections on $U_{a,A}$, because on every affine chart it is precisely module localization by $s_a$, and filtered colimits commute with the finite Čech totalization of step 1.2. Thus $K$ restricts to zero on every derived affine $U_{a,A}$ and is zero. This proves generation for arbitrary quasi-coherent derived modules, including unbounded ones. Finally repeat the actual tensor–Hom construction of [F3] with $B_A=R\operatorname{Hom}(G_A,G_A)$: on semifree modules its unit is an equivalence on $B_A$, then on sums, cones and sequential homotopy colimits; its counit's cone is killed by $R\operatorname{Hom}(G_A,-)$ and hence zero by the detection just proved. This gives $D(B_A)\simeq\operatorname{QCoh}(X_A)$. The compact-to-finite-cell argument in [F3] applies to every dg algebra, regardless of boundedness: a finite set of semifree generators has a finite differential closure because attachment stages decrease. A compact module is a retract of a finite cell submodule. Hence every perfect $P$ on $X_A$, compact by step 1.2, lies in the finite sum, shift, cone and retract closure of $G_A$. No Noetherianity or finite amplitude of $A$ has been imposed. [F3, F4, A1, step 1.2, construct, algebra]

3.1 For q outside [0,d], both source and target cohomology in degree q vanish by [F2] and the displayed derived-dual formula. Hence the morphism induces an isomorphism on cohomology in every degree. A morphism of complexes is a quasi-isomorphism precisely when it induces such isomorphisms, proving its vector-bundle assertion. [F2, step 2.1, algebra]

3.2 For every vector bundle $V$ on $X$ the same affine Čech complex gives naturally $C_A(V_A)\simeq C_k(V)\otimes_k^{\mathbf L}A$. A finite number of Čech terms is involved, and on each intersection this is the module scalar-extension identity. By [F2], $C_k(V)$ has bounded finite-dimensional cohomology and is therefore perfect over $k$: split cycles and boundaries over the field, leaving a finite-dimensional cohomology complex. It follows that $C_A(V_A)$ is perfect over $A$. For a map $A\to A'$ the canonical comparison $C_A(P)\otimes_A^{\mathbf L}A'\to C_{A'}(P\otimes_A^{\mathbf L}A')$ is an equivalence for every summand of $G_A$ by this formula. Both its sides are exact functors of $P$ and preserve retracts. Step 2.2 proves the comparison for every perfect $P$. The same finite-closure argument proves perfection of $C_A(P)$. This proves all required compactness, finiteness and base-change assertions. [F2, F3, F4, A1, step 1.2, step 2.2, algebra]

4.1 Construct the cap transformation by the evaluation map $P\otimes P^\vee\to\mathcal O_{X_A}$, the Čech cup product and the scalar extension of the normalized trace of 1.1. These maps are natural, with the cohomological tensor signs, and commute with further scalar change by the very affine restriction and tensor maps of 3.2. For $P=V_A$ from a vector bundle on $X$, its cap map is the scalar extension of 1.1–3.1. Indeed $C_k(V^\vee)$ is perfect, so the canonical dual base-change map $R\operatorname{Hom}_k(C_k(V^\vee),k)\otimes_k^{\mathbf L}A\to R\operatorname{Hom}_A(C_k(V^\vee)\otimes_k^{\mathbf L}A,A)$ is an equivalence, checked first on finite-dimensional shifts of $k$ and then on finite cones and retracts. Thus the cap is an equivalence on each summand of $G_A$. As functors of $P$, both $C_A(P)$ and $R\operatorname{Hom}_A(C_A(P^\vee),A)[-d]$ are exact and preserve finite sums and retracts; the second is covariant because it dualizes twice. Naturality gives a map of exact triangles, so two cap equivalences force the third by the cohomology long exact sequence. Equivalences also pass to shifts and retracts. Step 2.2 therefore proves the cap equivalence for every perfect $P$. This proves the claimed orientation at every connective derived base, with its actual trace and evaluation maps, and retains the original vector-bundle pairing as its restriction. For $X=\varnothing$ all module categories and cap maps are zero; for $d=0$ the argument uses the empty exterior power and the same trace, without an intermediate-degree assumption. [F1, F2, F3, F4, A1, step 3.1, step 2.2, step 3.2, algebra] ∎

