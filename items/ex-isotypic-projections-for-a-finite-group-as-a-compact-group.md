---
id: ex-isotypic-projections-for-a-finite-group-as-a-compact-group
kind: example
title: "Isotypic Haar projections specialize to finite character sums"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, def-group, def-finite-cardinality, def-standard-topologies, def-product-topology, def-continuous-map-top, def-compact-space, def-hausdorff-space, def-topological-group, lem-finite-choice, def-strongly-continuous-unitary-representation, def-hilbert-space, def-real-and-complex-inner-product-space, thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional, def-dimension, def-linear-subspace, def-linear-combination-and-span, cor-finite-dimensional-subspaces-are-closed, cor-normalized-haar-probability-on-a-compact-group, def-left-haar-integral-and-left-haar-measure, def-measure-space, def-measure, def-borel-sigma-algebra, def-compact-group-isotypic-projection, def-banach-valued-simple-function-and-integral, lem-banach-valued-simple-integral-is-well-defined, def-bochner-integrable-function, def-strongly-measurable-banach-valued-function, def-finite-sum-in-a-commutative-monoid, def-trace-of-an-endomorphism, def-linear-isometry-and-orthogonal-or-unitary-operator, thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections]
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "David Vogan, Review of Harmonic Analysis on Compact Groups, §§2.1–2.16"
      url: "https://math.mit.edu/~dav/compactrev.ps"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $F$ be a finite group
([[def-group]], [[def-finite-cardinality]]) of order $n:=|F|$, equipped with the
discrete topology, so that $F$ is a compact Hausdorff topological group
([[def-standard-topologies]], [[def-compact-space]], [[def-hausdorff-space]],
[[def-topological-group]]). Let $\pi:F\to U(H)$ be a unitary representation of
$F$ on a complex Hilbert space $H$, and let $\sigma$ be an irreducible unitary
representation of $F$ on a nonzero complex Hilbert space $V_\sigma$
([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]).
Every function on the discrete space $F$ is continuous, so $\pi$ and $\sigma$
are strongly continuous, and $d_\sigma:=\dim_{\mathbb C}V_\sigma$ is finite
([[thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional]],
[[def-dimension]]). Let $\mu$ be the normalized Haar probability of $F$ and let
$P_\sigma$ be the $\sigma$-isotypic projection of $\pi$
([[cor-normalized-haar-probability-on-a-compact-group]],
[[def-compact-group-isotypic-projection]]), with character $\chi_\sigma$. Then
the compact-group formula becomes the finite character sum
$$P_\sigma=\frac{d_\sigma}{|F|}\sum_{g\in F}\overline{\chi_\sigma(g)}\,\pi(g),$$
the ordinary character idempotent of the finite group $F$. In detail:

1. $\mu(\{g\})=1/|F|$ for every $g\in F$;
2. the displayed operator is the $\sigma$-isotypic projection: it is a bounded
   self-adjoint idempotent commuting with $\pi(F)$ whose range is exactly the
   $\sigma$-isotypic subspace $H_\sigma$ of $H$, and inequivalent irreducible
   representations $\sigma,\tau$ give $P_\sigma P_\tau=0=P_\tau P_\sigma$ with
   orthogonal ranges;
3. for the trivial representation $\sigma_0$ on $\mathbb C$ one has
   $P_{\sigma_0}=|F|^{-1}\sum_{g\in F}\pi(g)$, and if $d_\sigma=1$ the displayed
   sum reproduces the identity on every $\sigma$-copy;
4. for $F=\mathbb Z/2\mathbb Z=\{e,t\}$ and $\pi(t)=\operatorname{diag}(1,-1)$
   on $\mathbb C^2$ one gets $P_{\sigma_0}=\operatorname{diag}(1,0)$ and
   $P_{\sigma_1}=\operatorname{diag}(0,1)$, where $\sigma_1$ is the sign
   representation.

## Facts & Assumptions

**Given:** AC; a finite group $F$ of order $n=|F|\ge1$ with the discrete topology; a unitary representation $\pi$ of $F$ on a complex Hilbert space $H$; an irreducible unitary representation $\sigma$ of $F$ on a nonzero complex Hilbert space $V_\sigma$; the normalized Haar probability $\mu$ of $F$; and the $\sigma$-isotypic projection $P_\sigma$, its character $\chi_\sigma$ and the isotypic subspace $H_\sigma$.

[F1] Discrete and finite topology: in the discrete topology every subset is open and closed, the product topology on $F\times F$ is again discrete because $\{g\}\times\{h\}$ is a basic open set, and every function whose domain is discrete is continuous, so inversion and multiplication of $F$ are continuous and $F$ is a topological group; an open cover of the finite space $F$ has a subcover with at most $|F|$ members, obtained by choosing one member through each element of $F$ (finite choice), so $F$ is compact; distinct points are separated by the disjoint open singletons, so $F$ is Hausdorff ([[def-standard-topologies]], [[def-product-topology]], [[def-continuous-map-top]], [[def-topological-group]], [[def-compact-space]], [[def-hausdorff-space]], [[lem-finite-choice]], [[def-finite-cardinality]]).

[F2] Normalized Haar measure: under AC, $\mu$ is the unique left Haar probability of $F$, that is, a Borel probability with $\mu(gE)=\mu(E)$ for every Borel $E\subseteq F$ and every $g\in F$, and it is also right invariant and inversion invariant, with $\mu(F)=1$ ([[cor-normalized-haar-probability-on-a-compact-group]], [[def-left-haar-integral-and-left-haar-measure]], [[def-measure-space]]).

[F3] Measure arithmetic: $\mu$ is countably additive and $\mu(\varnothing)=0$, so for a finite pairwise disjoint family $E_1,\dots,E_m$ of measurable sets one has $\mu(E_1\cup\dots\cup E_m)=\mu(E_1)+\dots+\mu(E_m)$ by adding empty sets to make a sequence; and every subset of the discrete space $F$ is open, hence Borel ([[def-measure]], [[def-borel-sigma-algebra]]).

[F4] The isotypic projection: $d_\sigma=\dim_{\mathbb C}V_\sigma$ is finite and positive, $\chi_\sigma(k)=\operatorname{tr}\sigma(k)$ is its character, and for every $v\in H$ the Bochner integral $P_\sigma v=d_\sigma\int_F\overline{\chi_\sigma(k)}\,\pi(k)v\,d\mu(k)$ defines the $\sigma$-isotypic projection; a $\sigma$-copy is a closed $\pi(F)$-invariant subspace unitarily equivalent to $\sigma$, and $H_\sigma$ is their closed span ([[def-compact-group-isotypic-projection]], [[thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional]], [[def-dimension]], [[def-linear-subspace]]).

[F5] Simple and Bochner integration: if $A_1,\dots,A_m$ are pairwise disjoint measurable sets and $x_j\in H$, then $s=\sum_jx_j\mathbf 1_{A_j}$ is a measurable $H$-valued simple function with $\int_Fs\,d\mu=\sum_j\mu(A_j)x_j$, independent of the disjoint measurable representation used; an integrable simple function is Bochner integrable and its Bochner integral is this simple integral; the nonzero fibres of a measurable function with finite image form such a representation ([[def-banach-valued-simple-function-and-integral]], [[lem-banach-valued-simple-integral-is-well-defined]], [[def-bochner-integrable-function]], [[def-strongly-measurable-banach-valued-function]]).

[F6] The A-page theorem applied to the compact group $F$: $P_\sigma$ is a bounded linear self-adjoint idempotent commuting with $\pi(F)$, fixes every $\sigma$-copy, has range exactly $H_\sigma$, and for irreducible $\tau$ inequivalent to $\sigma$ one has $P_\sigma P_\tau=0=P_\tau P_\sigma$ with orthogonal ranges ([[thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections]]).

[F7] One-dimensional unitaries and their traces: if $d_\sigma=1$ then $\sigma(g)$ is multiplication by the scalar $\chi_\sigma(g)$, which satisfies $|\chi_\sigma(g)|=1$ because $\sigma(g)$ is a unitary isometry, and $\sigma(e)=I$; a one-dimensional nonzero complex vector space has exactly the subspaces $\{0\}$ and itself, so its trivial representation is irreducible ([[def-strongly-continuous-unitary-representation]], [[def-linear-isometry-and-orthogonal-or-unitary-operator]], [[def-trace-of-an-endomorphism]], [[def-linear-subspace]], [[def-linear-combination-and-span]], [[cor-finite-dimensional-subspaces-are-closed]]).

[F8] Finite sums over $F$ are defined, commute with scalar multiplication and with linear maps, and do not depend on the enumeration of $F$ ([[def-finite-sum-in-a-commutative-monoid]]).

## Proof

**Proof technique:** direct.

1.1 $F$ is a compact Hausdorff topological group. Every subset of $F$ is open and closed in the discrete topology, and the product topology on $F\times F$ is discrete because its points are the basic open sets $\{g\}\times\{h\}$; hence the inversion $F\to F$ and the multiplication $F\times F\to F$ are continuous, being functions on discrete domains [F1]. Thus $F$ is a topological group; it is Hausdorff because distinct $g,h$ are separated by the disjoint open sets $\{g\}$ and $\{h\}$; and it is compact: given an open cover, enumerate $F=\{g_1,\dots,g_n\}$ and choose a covering member $U_i\ni g_i$ for each $i$, which is a finite choice, and $U_1,\dots,U_n$ is a finite subcover. [F1]
2.1 The normalized Haar probability $\mu$ exists on $F$ by [F2]. Every singleton is open, hence Borel [F3]. For every $g\in F$ the set $\{g\}=g\{e\}$ is a left translate of $\{e\}$, so left invariance gives $\mu(\{g\})=\mu(\{e\})$; writing $F=\{g_1,\dots,g_n\}$ as a disjoint union of singletons and using finite additivity and $\mu(F)=1$ gives $1=\mu(F)=\sum_{i=1}^n\mu(\{g_i\})=n\,\mu(\{e\})$, so $\mu(\{g\})=1/|F|$ for every $g\in F$. [F2, F3, step 1.1]
3.1 Fix $v\in H$. The function $f_v(k):=\overline{\chi_\sigma(k)}\,\pi(k)v$ is constant on each singleton, with value $x_g:=\overline{\chi_\sigma(g)}\,\pi(g)v$ on $\{g\}$; its nonzero fibres are therefore unions of those singletons $g$ for which $x_g$ takes one fixed nonzero value, so $f_v=\sum_j y_j\mathbf 1_{B_j}$ for finitely many pairwise disjoint Borel sets $B_j$ and distinct nonzero $y_j\in H$ [F5]. Each $\mu(B_j)\le\mu(F)=1$ is finite, so $f_v$ is an integrable simple function and hence Bochner integrable, with Bochner integral equal to its simple integral; regrouping the singletons into the fibres and using finite additivity of $\mu$ gives $\int_Ff_v\,d\mu=\sum_j\mu(B_j)y_j=\sum_{g\in F}\mu(\{g\})x_g=\frac1{|F|}\sum_{g\in F}\overline{\chi_\sigma(g)}\pi(g)v$. [F3, F5, step 2.1]
4.1 Multiplying the identity of step 3.1 by $d_\sigma$ and comparing with the definition $P_\sigma v=d_\sigma\int_Ff_v\,d\mu$ of [F4] yields $P_\sigma v=\frac{d_\sigma}{|F|}\sum_{g\in F}\overline{\chi_\sigma(g)}\,\pi(g)v$ for every $v\in H$, which is the displayed operator identity; the finite sum is independent of the enumeration by [F8]. [F4, F8, step 3.1]
5.1 The representation $\sigma$ and $\pi$ are strongly continuous, since every function on the discrete space $F$ is continuous, and $F$ is a compact Hausdorff group by step 1.1; so the A-page theorem [F6] applies and shows that this operator $P_\sigma$ is a bounded linear self-adjoint idempotent commuting with $\pi(F)$ whose range is exactly $H_\sigma$, and that for every irreducible $\tau$ inequivalent to $\sigma$ the corresponding projections satisfy $P_\sigma P_\tau=0=P_\tau P_\sigma$ and have orthogonal ranges. [F6, step 1.1, step 4.1]
6.1 Special cases of the formula of step 4.1. For the trivial representation $\sigma_0$ on $\mathbb C$ one has $d_{\sigma_0}=1$ and $\chi_{\sigma_0}\equiv1$, so $P_{\sigma_0}=\frac1{|F|}\sum_{g\in F}\pi(g)$; the $\sigma_0$-copies are exactly the lines spanned by nonzero vectors fixed by $\pi(F)$ (a fixed vector spans a one-dimensional invariant subspace on which $\pi$ acts trivially, and conversely every $\sigma_0$-copy consists of fixed vectors); the fixed space is $\bigcap_{g\in F}\ker(\pi(g)-I)$, which is closed because each $\pi(g)-I$ is bounded, so its closed span of fixed lines is itself; by step 5.1 the range of $P_{\sigma_0}$ is exactly that fixed space. If $d_\sigma=1$, then on a $\sigma$-copy $\pi(g)$ acts as the scalar $\chi_\sigma(g)$ with $|\chi_\sigma(g)|=1$, so the formula gives $P_\sigma x=\frac1{|F|}\sum_{g\in F}\overline{\chi_\sigma(g)}\chi_\sigma(g)x=x$ for every $x$ in that copy, in agreement with the fixing property of step 5.1. For the one-element group $F=\{e\}$ irreducibility forces $d_\sigma=1$, because for $d_\sigma\ge2$ a line in the finite-dimensional space $V_\sigma$ is a proper nontrivial closed $\sigma(e)$-invariant subspace, since $\sigma(e)=I$ and every finite-dimensional subspace is closed; then $\chi_\sigma(e)=1$, $\pi(e)=I$ and the formula gives $P_\sigma=I$, while $v=0$ gives $P_\sigma v=0$. [F4, F6, F7, step 5.1]
7.1 Explicit two-element group. Let $F=\mathbb Z/2\mathbb Z=\{e,t\}$ and $H=\mathbb C^2$ with orthonormal basis $e_1,e_2$, let $\pi(e)=I$, $\pi(t)=\operatorname{diag}(1,-1)$, and let $\sigma_0$ be the trivial representation and $\sigma_1$ the sign representation $\sigma_1(t)=-1$ on $\mathbb C$, both irreducible of degree one by [F7] and inequivalent because their characters differ at $t$. Applying the formula of step 4.1 ($|F|=2$, characters $\chi_{\sigma_0}(e)=\chi_{\sigma_0}(t)=1$ and $\chi_{\sigma_1}(e)=1,\chi_{\sigma_1}(t)=-1$) gives $P_{\sigma_0}=\frac12\bigl(I+\pi(t)\bigr)=\operatorname{diag}(1,0)$ and $P_{\sigma_1}=\frac12\bigl(I-\pi(t)\bigr)=\operatorname{diag}(0,1)$; both matrices are self-adjoint idempotents, they are mutually orthogonal, and their ranges $\mathbb Ce_1$ and $\mathbb Ce_2$ are the trivial and sign copies inside $H$, so the ranges are orthogonal and span $H$. [F7, F8, step 4.1] ∎
