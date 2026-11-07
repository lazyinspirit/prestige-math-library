---
id: lem-totally-imaginary-cyclotomic-class-field-inertia-trace-kernels
kind: lemma
title: Totally imaginary cyclotomic class-field towers realize inertia trace kernels
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-ideal-class-group-of-a-domain
  - def-relative-ideal-norm-in-number-field-extension
  - def-p-primary-component-of-an-abelian-group
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-global-artin-reciprocity-and-norm-index
  - lem-canonical-local-reciprocity-is-compatible-with-field-norms
  - thm-finiteness-of-the-number-field-class-group
  - lem-unramified-local-unit-norms-and-cohomology
  - thm-archimedean-local-reciprocity
  - lem-unramified-finite-galois-extensions-descend-in-number-field-towers
  - lem-procyclic-inertia-normal-closures-and-trace-kernels
  - thm-decomposition-and-inertia-in-towers
  - thm-galois-action-on-primes-above-a-prime-is-transitive
  - cor-orders-of-decomposition-and-inertia-groups
  - thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - cor-the-galois-group-of-a-rational-cyclotomic-field
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: The original AC, CC and DC branch is retained for class fields, finite valued-field extensions and inverse-limit compactness. No unqualified inertia lifting or general coinvariant control theorem is assumed.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: R. Sharifi, Iwasawa Theory lecture notes
      url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
      locator: Propositions3.1.9–3.1.11, Proposition3.2.6/Corollary3.2.7, and Proposition3.2.11/Lemma3.2.13, printed pp.77–82, read in full. The existing descent and abstract trace-kernel suppliers are reused; the arithmetic realization is supplied below.
---

## Statement

Assume AC, Countable Choice and Dependent Choice. Let $K$ be totally imaginary, let $p$ be a prime, and let $K_\infty/K$ be its cyclotomic $\mathbb Z_p$-extension, with degree-$p^n$ layers $K_n$, Galois group $\Gamma=\langle\gamma\rangle\cong\mathbb Z_p$, and
$$A_n=\operatorname{Cl}(\mathcal O_{K_n})[p^\infty],\qquad X=\varprojlim_n A_n$$
under ideal norms. There is an index $m$ beyond which all primes over $p$ are totally ramified. Their number $t$ in $K_m$ is then constant in all later layers. There are elements $g_1,\ldots,g_{t-1}\in X$ such that, for every $n\ge m$, the norm projection $N_n:X\to A_n$ is surjective and its kernel is
$$Y_n=(\gamma^{p^n}-1)X+\sum_{i=1}^{t-1}\mathbb Z_p\nu_{n,m}g_i,\qquad \nu_{n,m}=\sum_{j=0}^{p^{n-m}-1}\gamma^{j p^m}.$$
All displayed sums are closed. In particular
$$\mathbb Z_p^{t-1}\longrightarrow X/(\gamma^{p^n}-1)X\longrightarrow A_n\longrightarrow0$$
is exact, and the $\mathbb Z_p$-rank of these ordinary coinvariants is at most $t-1$, uniformly for $n\ge m$. No claim that their kernels have finite or uniformly bounded order is made.

## Facts & Assumptions

**Given:** The cyclotomic tower, compact class-group norm limit, prime $p$, and original AC/CC/DC hypotheses in the Statement.

[F1] The groups $A_n$ are finite $p$-primary ordinary ideal class groups, their norm maps are induced by ideal norm, and $X$ is their compatible-tuple inverse limit. Finite ray-class Artin theory identifies each ordinary class group with the Galois group of its finite Hilbert class field. There are no real places, because $K$ is totally imaginary. Norms match restrictions by the local norm square and the product definition of global Artin ([[def-ideal-class-group-of-a-domain]], [[def-relative-ideal-norm-in-number-field-extension]], [[def-p-primary-component-of-an-abelian-group]], [[thm-number-field-ray-class-field-artin-isomorphism]], [[thm-global-artin-reciprocity-and-norm-index]], [[lem-canonical-local-reciprocity-is-compatible-with-field-norms]], [[thm-archimedean-local-reciprocity]]).

[F2] Number-field ideal class groups are finite, and unramified local unit norms are onto ([[thm-finiteness-of-the-number-field-class-group]], [[lem-unramified-local-unit-norms-and-cohomology]]).

[F3] For a number-field Galois tower, the maximal finite-place-unramified abelian pro-$p$ extension at infinity is the union of the corresponding finite-layer extensions, and its Galois group is their compatible inverse limit. All fields in this branch have no real places ([[lem-unramified-finite-galois-extensions-descend-in-number-field-towers]]).

[F4] In $X\rtimes\langle\eta\rangle$, if $s_i=g_i\eta$ with $g_0=0$, the closed normal closure of $s_i^{p^a}$ intersects $X$ in $(\eta^{p^a}-1)X+\sum_i\mathbb Z_p(\sum_{j=0}^{p^a-1}\eta^j)g_i$. These finite sums are closed ([[lem-procyclic-inertia-normal-closures-and-trace-kernels]]).

[F5] Finite Galois inertia restricts surjectively in finite normal towers, and inertia over an intermediate field is the intersection with its fixing group. Under AC the compatible inverse limit of finite groups is compact Hausdorff ([[thm-decomposition-and-inertia-in-towers]], [[thm-galois-action-on-primes-above-a-prime-is-transitive]], [[cor-orders-of-decomposition-and-inertia-groups]], [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]).

[F6] Hensel factor lifting and finite residue extensions supply the unramified lifts of separable residue polynomials. Cyclotomic Galois groups are the unit groups modulo their conductors ([[lem-hensel-factor-lifting-over-a-complete-valued-field]], [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]], [[cor-the-galois-group-of-a-rational-cyclotomic-field]]).

[A1] AC, CC and DC are the original hypotheses and cover all the cited class-field and inverse-limit constructions ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** realize the unramified class-field tower, its actual finite list of procyclic inertia groups, and the supplied closed normal-closure formula.

1.1 The modulus-one ray class field of $K_n$ from [F1] is finite by [F2]. Its maximal $p$-subextension $B_n/K_n$ has $\operatorname{Gal}(B_n/K_n)=A_n$. It is the maximal abelian pro-$p$ extension unramified at finite primes: local unramified Artin maps kill all finite units, and $K_n$ has no real places. Conversely any finite abelian extension with those properties kills that congruence subgroup and lies in this field, by the Artin quotient and its fixed-subfield compatibility. Its finite degree bounds all such $p$-extensions. [F1, F2, A1, given, construct, algebra]

1.2 We justify eventual total ramification of the actual cyclotomic tower. The polynomial $\Phi_{p^a}(1+T)=\sum_{j=0}^{p-1}(1+T)^{j p^{a-1}}$ is monic, has constant coefficient $p$, and modulo $p$ equals $T^{p^{a-1}(p-1)}$. It is Eisenstein. For a root $\zeta_{p^a}-1$ over $\mathbb Q_p$, the residue of the $p$-power root of unity is $1$, since a finite residue multiplicative group has order prime to $p$. The polynomial equation then gives valuation $1/(p^{a-1}(p-1))$, forcing ramification index equal to the degree. Thus these local cyclotomic fields and their finite subfields are totally ramified. This includes the real cyclotomic $\mathbb Z_2$ subfields. For a completion $F=K_v$ above $p$, the residue degree of $F\mathbb Q_p(\mu_{p^a})$ over $\mathbb Q_p$ is at most $[F:\mathbb Q_p]$, since its degree over the totally ramified cyclotomic factor has that bound; linearly independent residue classes lift to linearly independent field elements. In contrast, the local cyclotomic degree over $F$ tends to infinity. Its decomposition group in $\Gamma\cong\mathbb Z_p$ and its inertia subgroup are therefore both nonzero closed subgroups, with the latter of finite index in the former. They are open. For the finitely many $v\mid p$, choose $m$ so that $\Gamma^{p^m}$ lies in every such inertia subgroup. Beyond $m$ each prime over $p$ is totally ramified, and none splits further. [F6, A1, given, construct, algebra]

2.1 Put $B_\infty=\bigcup_nB_n$. By [F3], $B_n\subseteq B_{n+1}$, this union is the maximal unramified abelian pro-$p$ extension of $K_\infty$, and $X\cong\operatorname{Gal}(B_\infty/K_\infty)$. The identifications are exactly the Artin ones of step 1.1: norm on ideals corresponds to restriction by [F1]. More concretely, a compatible tuple of these restrictions defines a unique automorphism of the nested union and fixes every $K_n$, so fixes $K_\infty$. The maximal field is invariant under the automorphisms of $K_\infty/K$, hence $B_\infty/K$ is Galois. The extension of $X$ by $\Gamma$ is pro-$p$, since each finite level over a sufficiently early $K_n$ is a finite extension of two $p$-groups. [F1, F3, A1, step 1.1, construct, algebra]

3.1 No prime away from $p$ ramifies in $K_\infty/K$: at such a local prime, $T^{p^a}-1$ has simple residue roots in a finite residue extension, and [F6] lifts all of them to an unramified extension. Its cyclotomic subfields are unramified too. All fields $K_n$ and $B_n$ are totally imaginary, so no archimedean prime ramifies. Consequently the extension $B_\infty/K_n$ can ramify only at the finite list of primes over $p$, because its extension over $K_\infty$ is unramified by step 2.1. [F3, F6, step 1.1, step 2.1, algebra]

3.2 The inertia statements at this infinite union follow without an extra lifting hypothesis. For a fixed prolonged prime and the finite Galois subfields of $B_\infty/K_n$, take their finite inertia groups. Their restriction maps are surjective by [F5]. The inverse limit is a closed compact group, whose projections onto these finite groups are surjective by the finite-intersection property. Finite-prime transitivity in [F5] also passes to this limit: the closed finite-level conjugating cosets have the finite-intersection property, so compactness gives a compatible conjugating automorphism. Thus the inertia groups over a single finite base prime are conjugate. It equals the residue-action kernel: the valuation ring, its maximal ideal and residue field of a directed algebraic union are the corresponding directed unions, so fixing every finite residue is exactly fixing the whole residue field. Prescribing the restrictions to all $K_j$ likewise gives closed nonempty finite-intersection fibres. Hence this inertia maps onto the inertia in $K_\infty/K_n$ and intersects $X$ in the inertia of $B_\infty/K_\infty$, which is trivial by step 2.1. For $n\ge m$, every inertia group above $p$ is therefore isomorphic to $\Gamma^{p^n}$. [F3, F5, A1, step 2.1, step 1.2, construct, algebra]

4.1 Work at level $m$, and choose one prolonged prime for each of the $t$ primes above $p$. The list is finite and nonempty. Choose its inertia generators $s_0,\ldots,s_{t-1}$ mapping to $\gamma^{p^m}$ by step 3.2. Their closed procyclic subgroups map isomorphically to $\Gamma^{p^m}$; in particular $s_0$ splits the extension $P_m=\operatorname{Gal}(B_\infty/K_m)$ of $X$ by $\Gamma^{p^m}$. Thus $P_m=X\rtimes\langle s_0\rangle$. Put $g_i=s_i s_0^{-1}\in X$, so $g_0=0$. At level $n\ge m$, the unique continued prime has inertia generated by $s_i^{p^{n-m}}$, because inertia over an intermediate field is the intersection as in [F5], extended by the compatible finite limits in step 3.2. [F5, A1, step 1.2, step 3.2, construct, algebra]

5.1 Let $D_n$ be the closed normal subgroup of $P_n=\operatorname{Gal}(B_\infty/K_n)$ generated by those $t$ inertia subgroups. The quotient is unramified everywhere and is abelian: killing $s_0^{p^{n-m}}$ leaves a group generated by the image of the abelian $X$. It is pro-$p$ and its base $K_n$ has no real places, so by step 1.1 its fixed field is contained in $B_n$. Conversely $B_n/K_n$ is unramified, so every inertia subgroup fixes $B_n$ and the fixed field contains $B_n$. Thus the quotient is exactly $A_n$, and $D_n=\operatorname{Gal}(B_\infty/B_n)$. Since $D_n$ maps onto $\Gamma^{p^n}$ through its first inertia generator, $X\to A_n$ is surjective and its kernel is $Y_n=D_n\cap X$. [F1, F2, step 1.1, step 4.1, construct, algebra]

6.1 Apply the exact abstract formula [F4] with base generator $s_0$, exponent $p^{n-m}$, and finite list $g_0=0,g_1,\ldots,g_{t-1}$. Its action on $X$ is the given $\gamma^{p^m}$ action. It gives $Y_n=(\gamma^{p^n}-1)X+\sum_{i=1}^{t-1}\mathbb Z_p\nu_{n,m}g_i$, with closed sums. Dividing the surjection in step 5.1 by $(\gamma^{p^n}-1)X$ gives the exact sequence in the Statement. Its kernel is generated by at most $t-1$ elements as a $\mathbb Z_p$-module, and its quotient $A_n$ is finite; after tensoring with $\mathbb Q_p$ its dimension is at most $t-1$. This proves the uniform rank bound and every asserted identity, including $t=1$ and $n=m$. [F4, step 4.1, step 5.1, algebra] ∎
