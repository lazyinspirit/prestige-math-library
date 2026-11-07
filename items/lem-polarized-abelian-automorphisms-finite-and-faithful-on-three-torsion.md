---
dependency_level: 0
id: lem-polarized-abelian-automorphisms-finite-and-faithful-on-three-torsion
kind: lemma
title: Polarized abelian automorphisms are finite and faithful on three-torsion
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-abelian-variety-over-a-field
- def-polarization-of-an-abelian-variety
- lem-arith-polarization-and-picard-twist-ampleness
- lem-arith-dual-and-poincare-bundle-finite-field-descent
- lem-arith-dual-isogeny-kernel-and-abelian-biduality
- thm-ample-powers-very-ample-proper-base
- lem-projective-coherent-cohomology-finite-and-vanishing
- thm-closed-subschemes-projective-space-homogeneous-ideals
- lem-general-linear-group-scheme-and-its-coordinate-ring
- thm-hilbert-basis-theorem
- thm-global-functions-proper-integral-variety
- thm-nakayama-lemma
- cor-weak-nullstellensatz-algebraically-closed-coordinate-form
- lem-nonaffine-reduced-neutral-subgroup-over-perfect-field
- lem-arith-field-prime-to-characteristic-torsion-and-tate-module
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Abelian Varieties v2.00 (2008), I Proposition14.4(a),(b),
      Lemma14.5 and Remark14.6
    url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    locator: Printed62–63 (local PDF68–69). Exact characteristic-zero/n=3 specialization;
      the local proof reconstructs finiteness without importing the omitted Rosati
      calculation in14.3.
verification:
  precheck: pending
axiom_use: AC and DC retained literally. AC supplies the projective/cohomology/Noetherian
  scheme contexts; DC is inherited from compatible Tate bases. No additional axiom
  is introduced.
---

## Statement

Assume AC and DC. Let $k$ be an algebraically closed field of characteristic zero, and let $(B,\lambda)$ be a polarized abelian variety over $k$. Then $H=\operatorname{Aut}_k(B,\lambda)$ is finite, and restriction induces an injection
$$ H\longrightarrow\operatorname{Aut}\bigl(B[3](k)\bigr). $$
Here an automorphism is a group-scheme automorphism $u:B\to B$ satisfying $u^\vee\lambda u=\lambda$; the polarization need not be principal. Dimension zero is included.

## Statement references

[Milne, *Abelian Varieties*, v2.00, I Proposition 14.4(a),(b), printed pp.62–63](https://www.jmilne.org/math/CourseNotes/AV.pdf). The Statement is its characteristic-zero, $n=3$ specialization. The proof below reconstructs the claim using a projective stabilizer and a $3$-adic congruence argument; it does not assume the source's Rosati trace-positivity calculation.

## Facts & Assumptions

**Given:** Exactly AC and DC, $k$, $B$, and $\lambda$ in the Statement; $g=\dim B$.

[A1] AC and DC are retained literally ([[def-axiom-of-choice]], [[def-dependent-choice]]). AC supplies the scheme/cohomology and finite-type algebra contexts below; DC supplies compatible Tate bases in [F7].

[F1] Abelian varieties are proper smooth geometrically integral group varieties, and a polarization is geometrically the Mumford map of an ample bundle ([[def-abelian-variety-over-a-field]], [[def-polarization-of-an-abelian-variety]]).

[F2] The dual and normalized Poincare bundle $\mathcal P$ exist compatibly with field extension; pullback of degree-zero rigidified bundles defines the contravariant dual functor ([[lem-arith-dual-and-poincare-bundle-finite-field-descent]], [[lem-arith-dual-isogeny-kernel-and-abelian-biduality]], latter proof1.2 and Statement(d)). For a polarization $\lambda$, $\mathcal C=(\operatorname{id},\lambda)^*\mathcal P$ is ample, since over $k$ it is the graph bundle of an ample Mumford map ([[lem-arith-polarization-and-picard-twist-ampleness]], Statement(a)).

[F3] A high power of an ample bundle on a proper scheme embeds it into projective space, and coherent cohomology on a projective scheme over a field is finite dimensional ([[thm-ample-powers-very-ample-proper-base]], [[lem-projective-coherent-cohomology-finite-and-vanishing]]).

[F4] Closed subschemes of projective space have saturated homogeneous ideals; polynomial rings over fields are Noetherian; $\operatorname{GL}(V)$ for finite-dimensional $V$ is affine of finite type with inverse matrix entries regular after inverting the determinant ([[thm-closed-subschemes-projective-space-homogeneous-ideals]], [[thm-hilbert-basis-theorem]], [[lem-general-linear-group-scheme-and-its-coordinate-ring]]).

[F5] $H^0(B,\mathcal O_B)=k$; Nakayama applies to finite modules over local Noetherian rings; maximal ideals of finite-type algebras over $k$ have residue field $k$ ([[thm-global-functions-proper-integral-variety]], [[thm-nakayama-lemma]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

[F6] For a separated finite-type group scheme over a perfect field, the reduced identity component is a smooth geometrically integral closed subgroup of the same dimension as the original group; it is proper when that group is proper. Over an algebraically closed field there are finitely many components, each a translate of that identity component ([[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]], including proof2.1).

[F7] For an abelian variety $C/k$ of dimension $d$, $|C[3^r](k)|=3^{2dr}$, $T_3(C)$ is free of rank $2d$ over $\mathbb Z_3$, and $T_3(C)/3^rT_3(C)\cong C[3^r](k)$ via the natural surjective projections ([[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal C=(\operatorname{id},\lambda)^*\mathcal P$, ample by [F2] and rigidified at $0$. For $u\in H$, Poincare functoriality gives an isomorphism of rigidified bundles $$ u^*\mathcal C=(u,\lambda u)^*\mathcal P\cong(\operatorname{id},u^\vee\lambda u)^*\mathcal P=\mathcal C. $$ The functoriality used here is the defining pullback identity $(u\times\operatorname{id})^*\mathcal P\cong(\operatorname{id}\times u^\vee)^*\mathcal P$ on $B\times B^\vee$. Any two normalized isomorphisms differ by a global unit whose value at $0$ is $1$, hence are equal by [F5]. Thus they are compatible with composition. [F1, F2, F5, given, construct]

1.2 The action $\operatorname{End}(B)\to\operatorname{End}_{\mathbb Z_3}T_3(B)$ is injective for an elementary geometric reason. For a nonzero endomorphism $v$, its scheme-theoretic kernel $Z$ is a proper closed subgroup of $B$. By [F6], $C=(Z_{\mathrm{red}})^0$ is an abelian variety of dimension $d=\dim Z<g$. The strict inequality follows by extending any chain of irreducible closed subsets in the proper closed subset $Z$ by the strictly larger irreducible variety $B$. There are finitely many components of $Z_{\mathrm{red}}$, say $c$, each a translate of $C$. If a coset contains a point killed by $3^r$, its intersection with $B[3^r](k)$ is a coset of $C[3^r](k)$, by subtraction of that point. By [F7], $$ |\ker(v)(k)\cap B[3^r](k)|\le c\,3^{2dr}. $$ If $v$ were zero on $T_3(B)$, the surjective quotient maps of [F7] would make it kill every $B[3^r](k)$, giving $3^{2gr}\le c3^{2dr}$ for all $r$, impossible since $d<g$. This proves injectivity. No Tate-isogeny theorem or finite generation of the endomorphism ring is used. [F1, F6, F7, given, algebra]

1.3 The kernel of $\operatorname{GL}_r(\mathbb Z_3)\to\operatorname{GL}_r(\mathbb F_3)$ has no nonidentity finite-order matrix. Suppose otherwise, and take a power of such a matrix of prime order $q$, still nonidentity and congruent to $I$ modulo $3$. Write it as $M=I+3^sD$ with $s\ge1$ minimal among its nonzero entry valuations; some entry of $D$ is a unit. If $q\ne3$, the binomial expansion gives $M^q-I\equiv q3^sD\pmod{3^{s+1}}$, nonzero. If $q=3$, then $$ M^3-I=3^{s+1}D+3^{2s+1}D^2+3^{3s}D^3. $$ The last two terms are divisible by $3^{s+2}$, including when $s=1$, and the first is not. This is again nonzero. Both cases contradict prime order. Finite valuations of nonzero $3$-adic integers follow from their first nonzero inverse-limit digit. [algebra]

2.1 Choose $m\ge1$ such that $\mathcal C^m$ is very ample by [F3], and put $V=H^0(B,\mathcal C^m)$, finite dimensional by the coherent-finiteness part of [F3]. The COMPLETE linear system gives a closed immersion $B\hookrightarrow\mathbb P(V^*)$. Indeed a finite subsystem $W\subset V$ already gives a closed immersion; on each of its section charts the complete-system coordinate-ring map contains the already-surjective map from $W$, so is also surjective. Those charts cover $B$, proving the assertion. Write its image as $X$. It is linearly nondegenerate: a linear form vanishing on it is precisely a zero section in $V$. The rigidification identifies $(\mathcal C^m)_0$ with $k$ and gives a nonzero evaluation functional $l:V\to k$. The normalized inverse pullbacks in step 1.1 give a faithful linear action of $H$ on $V$ preserving $l$: the corresponding projective action on $X$ is the original action or its inverse, so an identity matrix forces the original automorphism to be the identity. [A1, F1, F3, step 1.1, choose, construct]

3.1 Construct an ambient affine stabilizer without assuming an automorphism-scheme theorem. Let $I$ be the saturated homogeneous ideal of $X$ and choose finite homogeneous generators $f_j$, using [F4]. In $\operatorname{GL}(V)$ impose $lM=l$, and impose that the projective coordinate pullbacks of every $f_j$ by both $M$ and $M^{-1}$ belong to $I_{\deg f_j}$. Each condition is polynomial in matrix entries and $\det(M)^{-1}$: in degree $d$, membership is zero in the finite-dimensional vector-space quotient $k[x]_d/I_d$. These finitely many equations define a closed affine finite-type subgroup $G$. Over every test algebra the two ideal-inclusion conditions give equality of the extended homogeneous ideals; hence they give an action on $X$. Composition and inverse preserve the conditions. The condition $lM=l$ fixes its point $0$. Thus $G$ acts on $B$ fixing $0$, and contains the faithful image of $H$ from step 2.1. We need only this containment, not equality with the polarized automorphism functor. [F4, step 2.1, construct, algebra]

4.1 An element $D\in\operatorname{Lie}(G)$ induces a global vector field on $B$ vanishing at $0$. Translation trivializes $T_B$: the algebraic map $(x,v)\mapsto d(t_x)_0v$ identifies $B\times T_0B$ with $T_B$, and differentiation of $t_{-x}$ gives its inverse. Consequently [F5] gives $H^0(B,T_B)=T_0B$, with evaluation at $0$ the identity in this trivialization. The induced vector field is therefore zero. For its infinitesimal projective action, zero means $D^*v\in kv$ for every nonzero vector $v$ over a point of $X$. The finitely many projective eigenspaces of $D^*$ therefore cover $X$. They are closed; irreducibility puts $X$ inside one of them, and linear nondegeneracy makes that eigenspace all of $V^*$. Thus $D$ is scalar. The differential of $lM=l$ gives $lD=0$; since $l\ne0$, the scalar is zero. We have proved $\operatorname{Lie}(G)=0$. [F1, F5, step 2.1, step 3.1, algebra]

5.1 The local ring of $G$ at its identity is Noetherian by [F4]. Its maximal ideal $\mathfrak m$ is finite and $\mathfrak m/\mathfrak m^2=0$ by step 4.1, so Nakayama [F5] gives $\mathfrak m=0$. The identity is an open singleton: if $A$ is the coordinate ring and $\mathfrak p$ its identity maximal ideal, $A_{\mathfrak p}=k$; choose generators of $\mathfrak p$ and multiply the finitely many elements outside $\mathfrak p$ killing them after localization. The product $s\notin\mathfrak p$ gives $\mathfrak pA_s=0$, and $A_s=k$. Translations make every $k$-point isolated. Every point specializes to a closed point: quotient by its prime and take a maximal ideal, whose residue is $k$ by [F5]. An open singleton closed point contains all its generalizations, so that original point equals it. Thus all points of $G$ are isolated. Quasi-compactness makes $G(k)$ finite and then its subgroup $H$ finite. This uses no Rosati positivity or lattice discreteness of $\operatorname{End}(B)$. [A1, F4, F5, step 3.1, step 4.1, algebra]

6.1 If $u\in H$ fixes $B[3](k)$, its Tate matrix is $I$ modulo $3$ by [F7]. It has finite order by step 5.1, so step 1.3 makes its Tate matrix $I$. Apply step 1.2 to $u-\operatorname{id}$ to obtain $u=\operatorname{id}$. This proves the injection. If $g=0$, smooth proper geometric integrality gives $B=\operatorname{Spec}k$, whose group and polarized automorphism group are trivial; the same conclusion holds. All uses of choice retain [A1], and characteristic zero makes $3$ invertible throughout [F7]. [A1, F1, F7, step 5.1, step 1.2, step 1.3, algebra] ∎
