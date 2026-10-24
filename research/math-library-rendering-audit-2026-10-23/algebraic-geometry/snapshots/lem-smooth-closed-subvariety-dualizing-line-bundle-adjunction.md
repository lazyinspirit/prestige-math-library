---
id: lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction
kind: lemma
title: Adjunction for a smooth closed subvariety
status: published
origin: pipeline
deps:
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - lem-smooth-closed-immersion-regular-conormal-sequence
  - thm-serre-duality-projective-space-twisting-sheaves
  - def-locally-free-sheaf-finite-rank
  - def-sheaf-hom
  - def-invertible-sheaf
  - def-sheaf-tensor-product
  - def-sheaf-relative-differentials
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Duality for Schemes"
      url: https://stacks.math.columbia.edu/download/duality.pdf
      locator: "§27, Lemmas 27.1, 27.4-27.5 and Remarks 27.2-27.3, 27.6 (adjunction for a regular closed immersion)"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry Classes 53-54"
      url: https://math.stanford.edu/~vakil/0506-216/216Cjun2807.pdf
      locator: "Class 53 §§1-5 and Class 54 §§7, 11"
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $X$ be a smooth
finite-type $k$-scheme of pure dimension $n$, and let
$i:X\hookrightarrow\mathbb P^N_k$ be a closed immersion of pure codimension
$c=N-n$ over $k$, with ideal sheaf $\mathcal I\subseteq\mathcal O_{\mathbb P^N}$.
Write
$$\mathcal N_{X/\mathbb P^N}:=(\mathcal I/\mathcal I^2)^{\vee} =\mathcal H om_{\mathcal O_X}(\mathcal I/\mathcal I^2,\mathcal O_X)$$
for the normal bundle, a finite locally free $\mathcal O_X$-module of rank $c$,
and let $\omega_X$ and $\omega_{\mathbb P^N}$ be the dualizing line bundles of
[[def-smooth-projective-dualizing-line-bundle-and-trace]]. Then there is a
canonical isomorphism of invertible $\mathcal O_X$-modules
$$\omega_X\;\cong\;i^*\omega_{\mathbb P^N}\otimes_{\mathcal O_X} \det\mathcal N_{X/\mathbb P^N},\qquad \det\mathcal N_{X/\mathbb P^N}:=\textstyle\bigwedge^{c}\mathcal N_{X/\mathbb P^N}.$$

## Facts & Assumptions

**Given:** a field $k$, a smooth finite-type $k$-scheme $X$ of pure dimension $n$, a closed immersion $i:X\hookrightarrow\mathbb P^N_k$ of pure codimension $c=N-n$ with ideal sheaf $\mathcal I$, the normal bundle $\mathcal N=(\mathcal I/\mathcal I^2)^{\vee}$, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] The conormal sheaf $\mathcal I/\mathcal I^2$ is a locally free $\mathcal O_X$-module of rank $c$, the conormal sequence $$0\longrightarrow\mathcal I/\mathcal I^2\longrightarrow i^*\Omega^1_{\mathbb P^N/k}\longrightarrow\Omega^1_{X/k}\longrightarrow0$$ is exact, and the middle term is locally free of rank $N$ while the outer terms are locally free of ranks $c$ and $n$. ([[lem-smooth-closed-immersion-regular-conormal-sequence]])

[F2] For a smooth projective $k$-scheme of pure relative dimension $m$ the dualizing line bundle is $\omega=\bigwedge^m\Omega^1_{X/k}$, a locally free $\mathcal O_X$-module of rank one, and for $X=\mathbb P^m_k$ one has $\omega_{\mathbb P^m}=\mathcal O(-m-1)$; formation of $\omega$ is functorial in isomorphisms. ([[def-smooth-projective-dualizing-line-bundle-and-trace]], [[def-sheaf-relative-differentials]])

[F3] For a finite locally free $\mathcal O_X$-module $\mathcal E$ of rank $r$ the dual $\mathcal E^{\vee}=\mathcal H om_{\mathcal O_X}(\mathcal E,\mathcal O_X)$ is finite locally free of rank $r$, and the determinant pairing $\bigwedge^r\mathcal E\otimes_{\mathcal O_X} \bigwedge^r\mathcal E^{\vee}\to\mathcal O_X$ is perfect, so that $\bigwedge^r(\mathcal E^{\vee})\cong(\bigwedge^r\mathcal E)^{\vee}$; in particular $\det\mathcal E^{\vee}\cong(\det\mathcal E)^{\vee}$ is invertible. ([[def-locally-free-sheaf-finite-rank]], [[def-sheaf-hom]], [[def-invertible-sheaf]], [[def-sheaf-tensor-product]])



**Proof technique:** direct: pass to a trivialising affine cover of the conormal sequence, take top exterior powers of the split sequence and check that the resulting identification is independent of the splitting, so that the local identifications glue canonically; then rewrite the two det factors using the duality of finite locally free modules.

## Proof

1.1 The conormal sequence and its ranks. By [F1] the sequence $$0\longrightarrow\mathcal A\longrightarrow\mathcal B\longrightarrow\mathcal C\longrightarrow0,\qquad \mathcal A=\mathcal I/\mathcal I^2,\quad\mathcal B=i^*\Omega^1_{\mathbb P^N/k},\quad\mathcal C=\Omega^1_{X/k},$$ is an exact sequence of finite locally free $\mathcal O_X$-modules of ranks $c$, $N$ and $n$. In particular every point of $X$ has an affine open neighbourhood $U=\operatorname{Spec}A$ over which all three restrictions $\mathcal A|_U,\mathcal B|_U,\mathcal C|_U$ are free $A$-modules of ranks $c,N,n$: a finite intersection of trivialising opens for the three locally free modules, shrunk to an affine open. [F1, algebra]

1.2 Top exterior powers. By [F2] the dualizing line bundles are $$\omega_X=\textstyle\bigwedge^n\mathcal C,\qquad \omega_{\mathbb P^N}=\bigwedge^N\Omega^1_{\mathbb P^N/k},$$ and forming the top exterior power commutes with pullback along $i$ for a locally free module of finite rank: restricting to a chart on which $\Omega^1_{\mathbb P^N/k}$ is free and $i$ is given by a ring map, the pullback of a free module is free and the map on top exterior powers of the pulled-back basis is the pullback of the corresponding wedge, so the identifications are compatible on overlaps and glue. Hence $$i^*\omega_{\mathbb P^N}\cong\textstyle\bigwedge^N\mathcal B, \qquad\omega_X=\textstyle\bigwedge^n\mathcal C.$$ [F2, algebra]

1.3 The normal bundle. By [F1] and the definition of the normal bundle, $\mathcal N=\mathcal A^{\vee}$ is finite locally free of rank $c$, so by [F3] applied to $\mathcal E=\mathcal A$ there is a canonical isomorphism $$\det\mathcal N=\textstyle\bigwedge^{c}(\mathcal A^{\vee})\cong (\textstyle\bigwedge^{c}\mathcal A)^{\vee}=(\det\mathcal A)^{\vee}.$$ [F1, F3]

2.1 The determinant of the conormal sequence. We construct a canonical isomorphism $$\Phi:\textstyle\bigwedge^{c}\mathcal A\otimes_{\mathcal O_X}\bigwedge^{n}\mathcal C \longrightarrow\bigwedge^{N}\mathcal B.$$ On an affine chart $U=\operatorname{Spec}A$ as in step 1.1 choose a splitting $s:\mathcal C|_U\to\mathcal B|_U$ of $\mathcal B|_U\to\mathcal C|_U$, which exists because $\mathcal C|_U$ is free, hence projective. For $\alpha\in\bigwedge^c_A\mathcal A(U)$ and a decomposable $\gamma=c_1\wedge\cdots\wedge c_n\in\bigwedge^n_A\mathcal C(U)$ put $$\Phi_U(\alpha\otimes\gamma)=\alpha\wedge s(c_1)\wedge\cdots\wedge s(c_n)\in\bigwedge^N_A\mathcal B(U),$$ extended to all of $\bigwedge^c\mathcal A(U)\otimes\bigwedge^n\mathcal C(U)$ by linearity. This is well defined: for fixed $\alpha$ the assignment $(c_1,\dots,c_n)\mapsto\alpha\wedge s(c_1)\wedge\cdots\wedge s(c_n)$ is alternating $A$-multilinear, so it factors through $\bigwedge^n_A\mathcal C(U)$ by the universal property of exterior powers, and for fixed $\gamma$ the assignment is alternating $A$-multilinear in the $\alpha$-variables. [F1, algebra]

3.1 Independence of the splitting. Let $s'$ be another splitting. For each $j$ one has $s'(c_j)-s(c_j)\in\mathcal A|_U$ because both map to $c_j$ in $\mathcal C|_U$. Expanding the product $s'(c_1)\wedge\cdots\wedge s'(c_n)$ by multilinearity, every term in which at least one factor $s'(c_j)-s(c_j)\in\mathcal A$ occurs is a wedge product in which $c+1$ elements of the rank-$c$ free module $\mathcal A|_U$ occur ($\alpha$ contributes $c$ of them), hence vanishes; only the term $s(c_1)\wedge\cdots\wedge s(c_n)$ survives. Therefore $\Phi_U$ does not depend on the chosen splitting. It also does not depend on the chart: restrictions of splittings are splittings, and the construction is compatible with restriction, so the maps $\Phi_U$ for the members of a trivialising affine cover agree on overlaps and glue to a global morphism $\Phi$ of $\mathcal O_X$-modules, without any choice of splitting. [F1, step 2.1, algebra]

4.1 $\Phi$ is an isomorphism. It suffices to check this on the members of the cover, where we may choose a splitting and bases $a_1,\dots,a_c$ of $\mathcal A|_U$ and $\bar c_1,\dots,\bar c_n$ of $\mathcal C|_U$; then $a_1,\dots,a_c,s(\bar c_1),\dots,s(\bar c_n)$ is a basis of the free module $\mathcal B|_U$ (the sequence is split exact). For every subset $J=\{j_1<\cdots<j_n\}$ the element $a_1\wedge\cdots\wedge a_c\otimes \bar c_{j_1}\wedge\cdots\wedge\bar c_{j_n}$ is mapped to the corresponding determinant basis element of the complement, up to the sign of the shuffle; these elements form a basis of $\bigwedge^c_A\mathcal A(U)\otimes_A\bigwedge^n_A\mathcal C(U)$ (tensor of two free modules with the displayed bases), so $\Phi_U$ is an isomorphism. Hence $\Phi$ is an isomorphism of finite locally free modules everywhere. Inverting it and using [F3] to dualise the rank-one factor $\bigwedge^c\mathcal A$ gives a canonical isomorphism $$\bigwedge^n\mathcal C\cong (\textstyle\bigwedge^{c}\mathcal A)^{\vee}\otimes_{\mathcal O_X}\bigwedge^{N}\mathcal B, \qquad\text{that is}\qquad \omega_X\cong(\det\mathcal A)^{\vee}\otimes i^*\omega_{\mathbb P^N}.$$ [F2, F3, step 1.2, step 3.1, algebra]

5.1 Conclusion. Combining step 4.1 and step 1.3 gives a canonical isomorphism $$\omega_X\cong i^*\omega_{\mathbb P^N}\otimes_{\mathcal O_X}\det\mathcal N_{X/\mathbb P^N}.$$ As a consistency check, for a linear subspace $i:\mathbb P^n_k\hookrightarrow\mathbb P^N_k$ one has $\mathcal I/\mathcal I^2\cong\mathcal O_{\mathbb P^n}(-1)^{\oplus c}$ and $\det\mathcal N\cong\mathcal O_{\mathbb P^n}(c)$, so the right hand side is $\mathcal O(-N-1)\otimes\mathcal O(c)=\mathcal O(-n-1)=\omega_{\mathbb P^n}$, matching the projective-space model of [F2]; the same value is the one fixed by [[thm-serre-duality-projective-space-twisting-sheaves]] for the trace normalisation. The Axiom of Choice [A1] is assumed in the statement and is inherited through the conormal-sequence supplier [F1] and the dualizing-bundle definition [F2]; the determinant construction above chooses only finitely many splittings on the members of a fixed finite trivialising cover, hence adds no further choice. The conormal-sequence supplier is used at steps 1.1 and 1.3 for the exact sequence and ranks, while the dualizing definition is used at step 1.2 for the top-exterior identification. [A1, F1, F2, F3, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 1.3] ∎
