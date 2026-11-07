---
id: lem-fkm-tensor-product-cohomology-dimension-bound
kind: lemma
title: "Cohomological Dimension Bound for a Tensor of Trace Sheaves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-trace-function-conductor
  - def-fkm-conductor-complexity-on-the-affine-line
  - lem-hc0-vanishing-for-tensor-middle-extensions
  - lem-euler-characteristic-of-punctured-projective-line
  - thm-grothendieck-ogg-shafarevich-euler-characteristic-formula
  - lem-swan-conductor-tensor-product-bound
  - thm-geometric-invariants-control-compact-support-degree-two
  - thm-finiteness-of-compactly-supported-etale-cohomology-for-curves-over-algebraically-closed-fields
  - thm-etale-open-closed-localization-sequence-for-compact-support
  - def-swan-conductor-of-an-l-adic-inertia-representation
  - lem-deligne-filtered-swan-dual-and-tensor-bound
  - lem-deligne-irreducible-comparison-and-frobenius-scalar
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Their Applications*, §3.6 and Theorem 4.1"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "PDF pp. 10–13; tensor Swan bound and cohomological dimension estimate"
    - title: "Kiran S. Kedlaya, *Weil Cohomology in Practice*, Chapter 16"
      url: "https://kskedlaya.org/weil-cohom/chapter-16.html"
      locator: "§§16.1.9–16.1.14; trace, Poincaré duality and curve cohomology interfaces"
verification:
  precheck: pending
---

## Statement

Let $p$ be prime and let $\ell\ne p$. For $i=1,2$, let $j_i:U_i\hookrightarrow\mathbb P^1_{\overline{\mathbb F}_p}$ be the maximal lisse open inclusion, let $L_i$ be a finite-rank lisse $\overline{\mathbb Q}_\ell$-sheaf on $U_i$, and let $M_i=j_{i*}L_i$ be its ordinary middle extension. Assume the geometric-monodromy representation of each $L_i$ is irreducible. Write $r_i=\operatorname{rank}(L_i)$, let $\Sigma_i=\mathbb P^1_{\overline{\mathbb F}_p}\setminus U_i$ be its finite singular set, let $w_i=\sum_{x\in\Sigma_i}\operatorname{Sw}_x(L_i)$, and put $c_i=r_i+|\Sigma_i|+w_i$. Let $\check M_2:=j_{2*}(L_2^\vee)$ be the middle extension of the dual lisse sheaf. Then
$$\dim_{\overline{\mathbb Q}_\ell}H_c^1\!\left(\mathbb A^1_{\overline{\mathbb F}_p},(M_1\otimes\check M_2)|_{\mathbb A^1}\right)\le3c_1^2c_2^2.$$

## Statement references

[[def-trace-function-conductor|Trace-function conductor]]

[[thm-grothendieck-ogg-shafarevich-euler-characteristic-formula|Grothendieck–Ogg–Shafarevich Euler-characteristic formula]]

[[lem-swan-conductor-tensor-product-bound|Tensor-product bound for Swan conductors]]

[[def-swan-conductor-of-an-l-adic-inertia-representation|Swan conductor of an l-adic inertia representation]]

[[thm-geometric-invariants-control-compact-support-degree-two|Geometric invariants and compact-support degree two]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, Theorem 4.1 and proof paragraph](https://people.math.ethz.ch/~kowalski/trace-functions-pisa.pdf)

## Facts & Assumptions

**Given:** The prime $p$, the prime $\ell\ne p$, the geometrically irreducible middle extensions $M_i$, their ranks, projective singular sets and Swan conductors.

[F1] [[def-trace-function-conductor]]: $c_i=r_i+|\Sigma_i|+w_i$, where $\Sigma_i$ includes all ramified points on $\mathbb P^1$.

[F2] [[thm-grothendieck-ogg-shafarevich-euler-characteristic-formula]]: for a lisse rank-$R$ sheaf $Q$ on an open curve $U$, $\chi_c(U,Q)=R\chi_c(U,\overline{\mathbb Q}_\ell)-\sum_{x\in\mathbb P^1\setminus U}\operatorname{Sw}_x(Q)$.

[F3] [[lem-swan-conductor-tensor-product-bound]]: $\operatorname{Sw}_x(V\otimes W)\le\dim(W)\operatorname{Sw}_x(V)+\dim(V)\operatorname{Sw}_x(W)$.

[F9] [[def-swan-conductor-of-an-l-adic-inertia-representation]]: $\operatorname{Sw}(V)=\int_0^\infty\operatorname{codim}V^{G^v}\,dv$.

[F4] [[lem-euler-characteristic-of-punctured-projective-line]]: for $U=\mathbb P^1\setminus D$ with finite $D$ containing $\infty$, $\chi_c(U,\overline{\mathbb Q}_\ell)=2-|D|$.

[F5] [[thm-etale-open-closed-localization-sequence-for-compact-support]]: the open–closed long exact sequence identifies compact-support Euler characteristics across a finite closed boundary by adding the Euler characteristic of its stalk sheaves.

[F6] [[lem-hc0-vanishing-for-tensor-middle-extensions]]: the compactly supported degree-zero group of a tensor of two middle extensions on $\mathbb A^1$ vanishes.

[F7] [[thm-geometric-invariants-control-compact-support-degree-two]]: for a lisse sheaf $Q$ on a smooth geometrically connected nonproper curve, $\dim H_c^2$ equals the dimension of the geometric invariant subspace of its dual stalk.

[F8] [[thm-finiteness-of-compactly-supported-etale-cohomology-for-curves-over-algebraically-closed-fields]]: these compact-support groups are finite-dimensional and vanish above degree two.

[F10] [[lem-deligne-filtered-swan-dual-and-tensor-bound]] proves dual Swan equality and the rank-weighted tensor bound for specified finite ramification filtrations.

[F11] [[lem-deligne-irreducible-comparison-and-frobenius-scalar]] gives the zero/one-dimensional intertwiner alternative for the given irreducible representations.

## Proof

1.1 Put $D=\Sigma_1\cup\Sigma_2\cup\{\infty\}$, $s=|D|-1$, $U=\mathbb P^1\setminus D$, and $R=r_1r_2$. The sheaf $Q=L_1|_U\otimes L_2^\vee|_U$ is lisse of rank $R$, and $s\le|\Sigma_1|+|\Sigma_2|$. Since $D$ is finite and contains infinity, [F4] gives $\chi_c(U,\overline{\mathbb Q}_\ell)=1-s$. [F1, F4, given, construct]

2.1 Apply [F2] to $Q$ on $U$. It gives $\chi_c(U,Q)=R(1-s)-W$, where $W=\sum_{x\in D}\operatorname{Sw}_x(Q)$. For each $x\in D$, the finite-filtration calculation [F10], interpreted under the actual upper-filtration interface [F9], gives $\operatorname{Sw}_x(L_2^\vee)=\operatorname{Sw}_x(L_2)$: for every finite upper-ramification image, averaging over the finite group identifies the invariant dimension of a representation and its dual, so the integrands in [F9] agree. Apply [F3] to $L_1$ and $L_2^\vee$ to obtain $\operatorname{Sw}_x(Q)\le r_2\operatorname{Sw}_x(L_1)+r_1\operatorname{Sw}_x(L_2)$; summing gives $W\le r_2w_1+r_1w_2$. [F2, F3, F9, F10, step 1.1, algebra]

3.1 Let $S=D\setminus\{\infty\}$ and $G=(M_1\otimes\check M_2)|_{\mathbb A^1}$. The localization sequence [F5] gives $\chi_c(\mathbb A^1,G)=\chi_c(U,Q)+\sum_{x\in S}\dim G_{\bar x}$. Each stalk has dimension at most $R$, so the sum is at most $Rs$. Substituting step 2.1 yields $$-\chi_c(\mathbb A^1,G)=R(s-1)+W-\sum_{x\in S}\dim G_{\bar x}\le R(s-1)+W.$$ [F5, step 1.1, step 2.1, algebra]

4.1 By [F6], $H_c^0(\mathbb A^1,G)=0$. For $Q=L_1|_U\otimes L_2^\vee|_U$, the dual generic stalk is $V_1^\vee\otimes V_2$, so its invariant space is $\operatorname{Hom}_{\pi_1(U)}(V_1,V_2)$, in that order. The irreducible restrictions have intertwiner dimension at most one by [F11]. With the monodromy/section comparison required by [F7], duality identifies $H_c^2(U,Q)$ with the dual of this invariant space, followed by the Tate twist; it does not replace the dual-invariant space by invariants of $Q$ for arbitrary representations. The localization sequence [F5] identifies $H_c^2(\mathbb A^1,G)$ with $H_c^2(U,Q)$ since the finite closed boundary has no positive-degree cohomology. Thus $h_c^2\le1$. By [F8], $\chi_c(\mathbb A^1,G)=-h_c^1+h_c^2$, and step 3.1 implies $h_c^1\le1+Rs+W\le1+R(|\Sigma_1|+|\Sigma_2|+w_1+w_2)$. The coefficient-compatible GOS, duality, finite-point, boundary-rank and localization interfaces remain hypotheses of this local derivation. [F5, F6, F7, F8, F11, step 2.1, step 3.1, given, algebra]

5.1 Since $r_i\ge1$, [F1] and the definitions give $R(|\Sigma_1|+|\Sigma_2|+w_1+w_2)\le r_1r_2(c_1+c_2)$, and $r_1r_2\le c_1c_2$. Also $c_1+c_2\le2c_1c_2$ because $c_i\ge1$. Therefore $$h_c^1\le1+c_1c_2(c_1+c_2)\le3c_1^2c_2^2.$$ This proves the claimed dimension bound conditional on [F2], [F5], [F7] and [F8]. Their current carrier proofs are not supplied; the batch item is escalated until those supplier arguments close. [F1, F2, F5, F7, F8, step 4.1, algebra] ∎
