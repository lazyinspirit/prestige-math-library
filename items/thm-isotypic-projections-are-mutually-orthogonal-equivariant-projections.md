---
id: thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections
kind: theorem
title: "Isotypic projections are mutually orthogonal equivariant projections"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, def-countable-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, cor-normalized-haar-probability-on-a-compact-group, def-topological-group, def-compact-space, def-hausdorff-space, def-strongly-continuous-unitary-representation, def-hilbert-space, def-real-and-complex-inner-product-space, def-linear-subspace, def-compact-group-isotypic-projection, thm-schur-orthogonality-for-compact-groups, thm-schurs-lemma-for-unitary-representations, thm-bounded-linear-maps-commute-with-bochner-integration, def-strongly-measurable-banach-valued-function, def-banach-valued-simple-function-and-integral, def-bochner-integrable-function, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, def-hilbert-orthogonal-projection, lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements, cor-finite-dimensional-subspaces-are-closed, thm-integrals-are-invariant-under-measure-preserving-maps, def-measure-preserving-transformation-and-system, def-measure-space, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integrable-real-and-complex-functions-and-their-integrals, def-bounded-linear-operator, def-operator-norm, thm-cauchy-schwarz-in-an-inner-product-space, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-bessel-inequality-and-finite-parseval-identity, def-dimension, def-trace-of-an-endomorphism, cor-trace-is-invariant-under-similarity, def-linear-isometry-and-orthogonal-or-unitary-operator]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
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

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact
Hausdorff topological group ([[def-topological-group]], [[def-compact-space]],
[[def-hausdorff-space]]) with normalized Haar probability measure $\mu$
([[cor-normalized-haar-probability-on-a-compact-group]]). Let $\sigma$ be an
irreducible strongly continuous unitary representation of $K$ of degree
$d_\sigma$, let $\pi:K\to U(H)$ be a strongly continuous unitary representation
of $K$ on a complex Hilbert space $H$
([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]),
let $P_\sigma:H\to H$ be the $\sigma$-isotypic projection and $H_\sigma$ the
$\sigma$-isotypic subspace of [[def-compact-group-isotypic-projection]]. Then:

1. $P_\sigma$ is a bounded linear operator, with
   $\|P_\sigma v\|\le d_\sigma\bigl(\int_K|\chi_\sigma|\,d\mu\bigr)\|v\|$ for
   every $v\in H$;
2. $P_\sigma$ is self-adjoint: $\langle P_\sigma v,w\rangle=\langle v,P_\sigma w\rangle$
   for all $v,w\in H$;
3. $P_\sigma$ commutes with $\pi(K)$: $P_\sigma\pi(g)=\pi(g)P_\sigma$ for every
   $g\in K$;
4. $P_\sigma$ fixes every $\sigma$-copy: if $M\subseteq H$ is a $\sigma$-copy,
   then $P_\sigma x=x$ for every $x\in M$;
5. $P_\sigma$ is idempotent, $P_\sigma^2=P_\sigma$, and its range is exactly
   the $\sigma$-isotypic subspace: $\operatorname{range}(P_\sigma)=H_\sigma$;
6. if $\tau$ is an irreducible strongly continuous unitary representation of
   $K$ inequivalent to $\sigma$, with isotypic projection $P_\tau$ and
   isotypic subspace $H_\tau$, then $P_\sigma P_\tau=0=P_\tau P_\sigma$ and
   $\langle P_\sigma v,P_\tau w\rangle=0$ for all $v,w\in H$.

No assertion is made that the sum of the operators $P_\sigma$ over the unitary
dual is $I_H$; no completeness, density or Peter--Weyl statement is used.

## Facts & Assumptions

**Given:** AC; a compact Hausdorff group $K$ with normalized Haar probability
$\mu$; an irreducible strongly continuous unitary representation $\sigma$ of
$K$ of degree $d_\sigma$; a strongly continuous unitary representation $\pi$ of
$K$ on a complex Hilbert space $H$; the isotypic projection $P_\sigma$, the
character $\chi_\sigma$, the $\sigma$-copies and the isotypic subspace $H_\sigma$
of [[def-compact-group-isotypic-projection]].

[F1] Well-definedness and norm bound: for each $v$ the integrand
$f_v(k)=\overline{\chi_\sigma(k)}\pi(k)v$ is continuous and Bochner integrable,
$P_\sigma v=d_\sigma\int_K f_v\,d\mu$, and
$\|P_\sigma v\|\le d_\sigma\int_K|\chi_\sigma|\,d\mu\,\|v\|$
([[def-compact-group-isotypic-projection]],
[[lem-bochner-integral-norm-inequality]], [[def-hilbert-space]]).

[F2] Weak pairing formula: for all $v,y\in H$,
$$\langle P_\sigma v,y\rangle=d_\sigma\int_K\overline{\chi_\sigma(k)}\langle\pi(k)v,y\rangle\,d\mu(k),$$
obtained by applying the theorem that bounded linear maps commute with Bochner
integrals to the bounded functional $x\mapsto\langle x,y\rangle$
([[thm-bounded-linear-maps-commute-with-bochner-integration]],
[[def-real-and-complex-inner-product-space]]).

[F3] The character is a continuous class function with
$\chi_\sigma(k^{-1})=\overline{\chi_\sigma(k)}$: the trace of a unitary
endomorphism is the sum of its eigenvalues on the unit circle, and
$\chi_\sigma(hkh^{-1})=\chi_\sigma(k)$
([[def-compact-group-isotypic-projection]],
[[def-trace-of-an-endomorphism]],
[[cor-trace-is-invariant-under-similarity]]); in particular $|\chi_\sigma|$
is bounded on the compact space $K$.

[F4] Haar invariance: $\mu(K)=1$; the maps $k\mapsto hk$, $k\mapsto kh$ and
$k\mapsto k^{-1}$ are measure preserving, so integrals of integrable functions
are unchanged under these substitutions
([[cor-normalized-haar-probability-on-a-compact-group]],
[[def-measure-preserving-transformation-and-system]],
[[thm-integrals-are-invariant-under-measure-preserving-maps]],
[[def-measure-space]]).

[F5] The scalar Lebesgue integral is linear, so finite sums and scalar
multiples integrate termwise and $\int\overline f\,d\mu=\overline{\int f\,d\mu}$
by the definition of the complex integral
([[thm-linearity-of-the-lebesgue-integral-on-l-one]],
[[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F6] Schur orthogonality ([[thm-schur-orthogonality-for-compact-groups]]): for
an orthonormal basis $e_1,\dots,e_{d_\sigma}$ of the carrier of $\sigma$ one has
$\overline{\chi_\sigma(k)}=\sum_i\overline{\langle\sigma(k)e_i,e_i\rangle}$,
$$(\mathrm i)\quad \int_K\langle\pi(k)v,w\rangle\,\overline{\langle\rho(k)v',w'\rangle}\,d\mu(k)=0$$
for irreducible $\pi,\rho$ that are not unitarily equivalent, and
$$(\mathrm{ii})\quad \int_K\langle\sigma(k)a,b\rangle\,\overline{\langle\sigma(k)e_i,e_i\rangle}\,d\mu(k)=d_\sigma^{-1}\langle a,e_i\rangle\overline{\langle b,e_i\rangle}$$
for all $a,b$ in the carrier of $\sigma$
([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]],
[[thm-bessel-inequality-and-finite-parseval-identity]]).

[F7] Schur's lemma: every bounded self-intertwiner of an irreducible strongly
continuous unitary representation is a scalar multiple of the identity, and a
nonzero bounded intertwiner between irreducible such representations makes them
unitarily equivalent ([[thm-schurs-lemma-for-unitary-representations]],
[[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

[F8] Bochner framework for the auxiliary averages: a continuous map
$g:K\to H$ into the Banach space $H$ has compact image and is attained as a
pointwise norm limit of $H$-valued measurable simple functions built from
finite nets, the selection of nets costing only Countable Choice, which the
standing AC supplies; if $\|g(k)\|\le M$ for all $k$ then
$\int_K\|g\|\,d\mu\le M<\infty$ and $g$ is Bochner integrable with
$\|\int_Kg\,d\mu\|\le M$; every bounded linear map commutes with the
Bochner integral, so for the bounded linear functional $x\mapsto\langle x,y\rangle$
one has $\langle\int_Kg\,d\mu,y\rangle=\int_K\langle g(k),y\rangle\,d\mu(k)$
([[def-compact-group-isotypic-projection]],
[[def-strongly-measurable-banach-valued-function]],
[[def-banach-valued-simple-function-and-integral]],
[[def-bochner-integrable-function]], [[thm-bochner-integrability-criterion]],
[[lem-bochner-integral-norm-inequality]],
[[thm-bounded-linear-maps-commute-with-bochner-integration]],
[[def-countable-choice]],
[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[F9] Orthogonal projections: for a closed subspace $M\subseteq H$ the orthogonal
projection $p_M$ is linear and self-adjoint with $p_Mx=x$ for $x\in M$; if
$M$ is invariant under a unitary representation, then so is $M^\perp$
([[def-hilbert-orthogonal-projection]],
[[lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements]]).

[F10] A finite-dimensional subspace of a normed space is closed
([[cor-finite-dimensional-subspaces-are-closed]], [[def-dimension]]); bounded
linear operators are continuous, and $\|Bv\|\le\|B\|\,\|v\|$
([[def-bounded-linear-operator]], [[def-operator-norm]]); Cauchy--Schwarz
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

**Proof technique:** direct.

1.1 If $H=\{0\}$ then $P_\sigma=0$, $H_\sigma=\{0\}$ and every assertion is immediate, so assume $H\ne\{0\}$ throughout; nothing below uses more than $H\ne\{0\}$ where a vector is exhibited. [F1, given]

1.2 Linearity and boundedness. Let $v,v'\in H$, $a,b\in\mathbb C$ and $y\in H$. By [F2], linearity of each $\pi(k)$ and termwise integration [F5], $\langle P_\sigma(av+bv'),y\rangle=d_\sigma\int_K\overline{\chi_\sigma(k)}\langle\pi(k)(av+bv'),y\rangle\,d\mu(k)=a\langle P_\sigma v,y\rangle+b\langle P_\sigma v',y\rangle$; a vector is determined by its pairings, so $P_\sigma(av+bv')=aP_\sigma v+bP_\sigma v'$. Moreover $|\langle P_\sigma v,y\rangle|\le d_\sigma\int_K|\chi_\sigma(k)|\,|\langle\pi(k)v,y\rangle|\,d\mu(k)\le d_\sigma\bigl(\int_K|\chi_\sigma|\,d\mu\bigr)\|v\|\,\|y\|$ by Cauchy--Schwarz [F10]; applying this with $y=P_\sigma v$ when $P_\sigma v\ne0$ gives $\|P_\sigma v\|\le d_\sigma\bigl(\int_K|\chi_\sigma|\,d\mu\bigr)\|v\|$. Thus $P_\sigma$ is a bounded linear operator. [F1, F2, F5, F10]

1.3 Self-adjointness. By [F2] and unitarity of $\pi(k)$, $\langle P_\sigma v,y\rangle=d_\sigma\int_K\overline{\chi_\sigma(k)}\langle v,\pi(k)^{-1}y\rangle\,d\mu(k)$; substituting $k\mapsto k^{-1}$, which preserves $\mu$ by [F4], and using $\overline{\chi_\sigma(k^{-1})}=\chi_\sigma(k)$ from [F3] turns this into $d_\sigma\int_K\chi_\sigma(k)\langle v,\pi(k)y\rangle\,d\mu(k)=\overline{d_\sigma\int_K\overline{\chi_\sigma(k)}\langle\pi(k)y,v\rangle\,d\mu(k)}=\overline{\langle P_\sigma y,v\rangle}=\langle v,P_\sigma y\rangle$, the conjugation inside the scalar integral being justified by [F5]. Hence $P_\sigma$ is self-adjoint. [F2, F3, F4, F5]

1.4 Equivariance. Let $g\in K$. For $v,y\in H$, [F2] and the homomorphism property give $\langle P_\sigma\pi(g)v,y\rangle=d_\sigma\int_K\overline{\chi_\sigma(k)}\langle\pi(kg)v,y\rangle\,d\mu(k)$; right translation $u\mapsto ug^{-1}$ is measure preserving by [F4], so substituting $k=ug^{-1}$ this equals $d_\sigma\int_K\overline{\chi_\sigma(ug^{-1})}\langle\pi(u)v,y\rangle\,d\mu(u)$, and since $\chi_\sigma$ is a class function the identity $\chi_\sigma(ug^{-1})=\chi_\sigma(g^{-1}u)$ of [F3] gives $d_\sigma\int_K\overline{\chi_\sigma(g^{-1}u)}\langle\pi(u)v,y\rangle\,d\mu(u)$; left translation $u\mapsto gu$ is measure preserving by [F4], so substituting $u=gk$ gives $d_\sigma\int_K\overline{\chi_\sigma(k)}\langle\pi(gk)v,y\rangle\,d\mu(k)=d_\sigma\int_K\overline{\chi_\sigma(k)}\langle\pi(k)v,\pi(g)^{-1}y\rangle\,d\mu(k)=\langle P_\sigma v,\pi(g)^{-1}y\rangle=\langle\pi(g)P_\sigma v,y\rangle$, the second-to-last equality by unitarity of $\pi(g)$. As $y$ is arbitrary, $P_\sigma\pi(g)=\pi(g)P_\sigma$. [F2, F3, F4]

1.5 Fixing a single $\sigma$-copy. Let $M\subseteq H$ be a $\sigma$-copy with unitary intertwiner $U:V_\sigma\to M$, and let $x\in M$, $y\in H$. Writing $p_M$ for the orthogonal projection onto the closed subspace $M$ [F9], the invariance of $M$ gives $\pi(k)x\in M$, hence $\langle\pi(k)x,y\rangle=\langle\pi(k)x,p_My\rangle$. For $x=Ua$ and $p_My=Ub$ with $a,b\in V_\sigma$, intertwining and unitarity of $U$ give $\langle\pi(k)Ua,Ub\rangle=\langle\sigma(k)a,b\rangle$, and the character expansion of [F6] together with Schur orthogonality (ii) yields $\langle P_\sigma x,y\rangle=d_\sigma\sum_i\int_K\langle\sigma(k)a,b\rangle\overline{\langle\sigma(k)e_i,e_i\rangle}\,d\mu(k)=d_\sigma\sum_id_\sigma^{-1}\langle a,e_i\rangle\overline{\langle b,e_i\rangle}=\sum_i\langle a,e_i\rangle\overline{\langle b,e_i\rangle}=\langle a,b\rangle=\langle Ua,Ub\rangle=\langle x,p_My\rangle=\langle x,y\rangle$. Hence $P_\sigma x=x$ for every $x$ in any $\sigma$-copy. [F2, F5, F6, F9]

1.6 Killing inequivalent copies. Let $\tau$ be an irreducible strongly continuous unitary representation of $K$ inequivalent to $\sigma$, let $M\subseteq H$ be a $\tau$-copy with unitary intertwiner $U:V_\tau\to M$, and let $x=Ua\in M$, $y\in H$ with $p_My=Ub$. Then $\pi(k)x\in M$, so $\langle\pi(k)x,y\rangle=\langle\tau(k)a,b\rangle$, and [F2], [F6] with Schur orthogonality (i) applied to the inequivalent irreducibles $\tau$ and $\sigma$ give $\langle P_\sigma x,y\rangle=d_\sigma\sum_i\int_K\langle\tau(k)a,b\rangle\overline{\langle\sigma(k)e_i,e_i\rangle}\,d\mu(k)=0$. Hence $P_\sigma x=0$ for every $x$ in any $\tau$-copy. [F2, F6, F9]

1.7 The range lies in the isotypic subspace. Fix $v\in H$ and, for each $i$, define $A_i(w):=\int_K\langle w,\sigma(k)e_i\rangle\,\pi(k)v\,d\mu(k)$ for $w\in V_\sigma$. The integrand $g_{i,w}(k):=\langle w,\sigma(k)e_i\rangle\pi(k)v$ is continuous and satisfies $\|g_{i,w}(k)\|\le\|w\|\,\|v\|$ for every $k$, because $\sigma(k)e_i$ has norm $1$ and $\pi(k)v$ has norm $\|v\|$, so $g_{i,w}$ is Bochner integrable and $\|A_i(w)\|\le\|w\|\,\|v\|$ by [F8]; moreover, since the bounded linear functional $x\mapsto\langle x,y\rangle$ commutes with the Bochner integral, $\langle A_i(w),y\rangle=\int_K\langle w,\sigma(k)e_i\rangle\langle\pi(k)v,y\rangle\,d\mu(k)$ for every $y\in H$. The map $A_i$ is linear: the scalar integrand in this pairing is linear in $w$ and the scalar integral is linear [F5], so $\langle A_i(aw+bw'),y\rangle=a\langle A_i(w),y\rangle+b\langle A_i(w'),y\rangle$ for all $y$, and a vector is determined by its pairings. For $h\in K$ and $y\in H$, unitarity of $\pi(h)$ together with the pairing formula gives $\langle\pi(h)A_i(w),y\rangle=\langle A_i(w),\pi(h)^{-1}y\rangle=\int_K\langle w,\sigma(k)e_i\rangle\langle\pi(hk)v,y\rangle\,d\mu(k)$, and the substitution $k\mapsto h^{-1}k$, measure preserving by [F4], turns this into $\int_K\langle w,\sigma(h^{-1}k)e_i\rangle\langle\pi(k)v,y\rangle\,d\mu(k)=\int_K\langle\sigma(h)w,\sigma(k)e_i\rangle\langle\pi(k)v,y\rangle\,d\mu(k)=\langle A_i(\sigma(h)w),y\rangle$; hence $\pi(h)A_i=A_i\sigma(h)$ and each $A_i$ is a bounded intertwiner. If $A_i\ne0$ then $\ker A_i$ is a $\sigma$-invariant subspace, because $A_i\sigma(h)=\pi(h)A_i$ for all $h$, and $\ker A_i\ne V_\sigma$; by irreducibility $\ker A_i=\{0\}$, so $A_i$ is injective, and its image $M_i=A_i(V_\sigma)$ is finite dimensional (hence closed [F10]) and $\pi(K)$-invariant, because $\pi(h)M_i=A_i\sigma(h)V_\sigma\subseteq M_i$; a closed invariant subspace $N\subseteq M_i$ pulls back under the injective intertwiner $A_i$ to the $\sigma$-invariant subspace $A_i^{-1}(N)$ of the irreducible $V_\sigma$, which is $\{0\}$ or $V_\sigma$, so $\pi|_{M_i}$ is irreducible and the nonzero bounded intertwiner $A_i$ makes $\pi|_{M_i}$ unitarily equivalent to $\sigma$ by Schur's lemma [F7]; thus $M_i$ is a $\sigma$-copy and $A_i(e_i)\in H_\sigma$, while if $A_i=0$ then $A_i(e_i)=0\in H_\sigma$. Finally, for every $y$, summing the pairing formula over $i$ and using linearity of the scalar integral [F5] and the trace formula $\chi_\sigma(k)=\sum_i\langle\sigma(k)e_i,e_i\rangle$ of [F3] together with conjugate symmetry $\langle e_i,\sigma(k)e_i\rangle=\overline{\langle\sigma(k)e_i,e_i\rangle}$ gives $\langle d_\sigma\sum_iA_i(e_i),y\rangle=d_\sigma\int_K\overline{\chi_\sigma(k)}\langle\pi(k)v,y\rangle\,d\mu(k)=\langle P_\sigma v,y\rangle$ by [F2]; hence $P_\sigma v=d_\sigma\sum_iA_i(e_i)$ lies in $H_\sigma$. [F2, F3, F4, F5, F7, F8, F10]

2.1 Fixing the isotypic subspace and identifying the range. By step 1.5, $P_\sigma$ fixes every vector lying in a $\sigma$-copy; by linearity (step 1.2) it fixes the linear span of all $\sigma$-copies, and since it is bounded, hence continuous, it fixes the closure of that span: $P_\sigma x=x$ for every $x\in H_\sigma$. Combined with step 1.7, for every $v\in H$ the vector $P_\sigma v$ lies in $H_\sigma$ and is therefore fixed, so $P_\sigma^2=P_\sigma$. Hence $\operatorname{range}(P_\sigma)\subseteq H_\sigma$ by step 1.7 and $H_\sigma\subseteq\operatorname{range}(P_\sigma)$ because $x=P_\sigma x$ for $x\in H_\sigma$; the range is exactly $H_\sigma$. [F1, F10, step 1.2, step 1.5, step 1.7]

3.1 Distinct inequivalent types. Let $\tau$ be irreducible and inequivalent to $\sigma$ with isotypic projection $P_\tau$ and isotypic subspace $H_\tau$. Repeating steps 1.6, 1.7 and 2.1 with $\tau$ in place of $\sigma$ shows $P_\sigma$ vanishes on every $\tau$-copy, hence by linearity and continuity on $H_\tau$, and that $\operatorname{range}(P_\tau)=H_\tau$; therefore $P_\sigma P_\tau=0$. Exchanging the roles of $\sigma$ and $\tau$ gives $P_\tau P_\sigma=0$. Finally, for $v,w\in H$, self-adjointness (step 1.3) and idempotence (step 2.1) give $\langle P_\sigma v,P_\tau w\rangle=\langle P_\sigma^2v,P_\tau w\rangle=\langle P_\sigma v,P_\sigma P_\tau w\rangle=0$, so the ranges of $P_\sigma$ and $P_\tau$ are orthogonal. [F6, step 1.3, step 1.6, step 2.1]

4.1 Collecting steps 1.2, 1.3, 1.4, 1.5, 2.1 and 3.1: $P_\sigma$ is a bounded self-adjoint idempotent commuting with $\pi(K)$, fixes every $\sigma$-copy, has range exactly the $\sigma$-isotypic subspace $H_\sigma$, and the projections of inequivalent irreducibles multiply to zero with orthogonal ranges. At no point is any sum over the unitary dual asserted, and no density or completeness statement is used. [step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 3.1] ∎
