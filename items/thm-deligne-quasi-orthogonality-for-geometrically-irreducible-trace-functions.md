---
id: thm-deligne-quasi-orthogonality-for-geometrically-irreducible-trace-functions
kind: theorem
title: "Deligne Quasi-Orthogonality for Geometrically Irreducible Trace Functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-trace-function-conductor
  - def-weight-zero-trace-function
  - thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves
  - thm-deligne-weight-bound-for-compactly-supported-cohomology
  - thm-geometric-invariants-control-compact-support-degree-two
  - lem-weight-zero-dual-trace-is-complex-conjugate
  - lem-hc0-vanishing-for-tensor-middle-extensions
  - lem-fkm-tensor-product-cohomology-dimension-bound
  - thm-etale-open-closed-localization-sequence-for-compact-support
  - def-l-adic-middle-extension-sheaf-over-finite-field
  - cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars
  - thm-finiteness-of-compactly-supported-etale-cohomology-for-curves-over-algebraically-closed-fields
  - lem-weight-zero-tensor-middle-extension-is-mixed
  - lem-deligne-irreducible-comparison-and-frobenius-scalar
  - lem-deligne-weight-zero-matrix-trace-and-dual-identities
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Their Applications*, Theorem 4.1"
      url: "https://people.math.ethz.ch/~kowalski/trace-functions-pisa.pdf"
      locator: "PDF pp. 12–13; exact conjugated correlation, isomorphic main term and constant 3"
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §§4.1–4.2"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "full proof route inspected; Hc0/Hc2 supplier gaps and different generic constant retained"
    - title: "Pierre Deligne, *La conjecture de Weil II*, Theorem 3.3.1"
      url: "https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf"
      locator: "printed pp. 204–205; compact-support weight bound statement"
    - title: "Kiran S. Kedlaya, *Weil Cohomology in Practice*, §16.1.14"
      url: "https://kskedlaya.org/weil-cohom/chapter-16.html"
      locator: "curve Hc1 weight-bound statement"
verification:
  precheck: pending
---

## Statement

Let $p$ be prime, let $\ell\ne p$, and fix an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$. For $i=1,2$, let $j_i:U_i\hookrightarrow\mathbb P^1_{\mathbb F_p}$ be the maximal lisse open inclusion, let $L_i$ be a finite-rank lisse $\overline{\mathbb Q}_\ell$-sheaf on $U_i$, and let $M_i=j_{i*}L_i$ be its ordinary middle extension. Assume each $L_i$ has irreducible geometric monodromy and $M_i$ is pointwise of weight zero. Write $t_i$ for its trace function and $c_i$ for its Fouvry–Kowalski–Michel complexity. Here geometrically isomorphic means isomorphic after base change to $\overline{\mathbb F}_p$. If $M_1$ and $M_2$ are not geometrically isomorphic, then
$$\left|\sum_{x\in\mathbb F_p}t_1(x)\overline{t_2(x)}\right|\le3c_1^2c_2^2\sqrt p.$$
If they are geometrically isomorphic, there is a scalar $\alpha\in\mathbb C$ with $|\alpha|=1$ such that $t_1(x)=\alpha t_2(x)$ for every $x\in\mathbb F_p$ and
$$\left|\sum_{x\in\mathbb F_p}t_1(x)\overline{t_2(x)}-\alpha p\right|\le3c_1^2c_2^2\sqrt p.$$

## Statement references

[[def-weight-zero-trace-function|Weight-zero trace function]]

[[def-trace-function-conductor|Trace-function conductor]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, Theorem 4.1](https://people.math.ethz.ch/~kowalski/trace-functions-pisa.pdf)

## Facts & Assumptions

**Given:** The prime $p$, the prime $\ell\ne p$, the embedding $\iota$, and the two pointwise weight-zero middle-extension sheaves.

[F1] [[thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves]]: the sum of geometric-Frobenius stalk traces over $\mathbb A^1(\mathbb F_p)$ is the alternating sum of geometric-Frobenius traces on compactly supported cohomology.

[F2] [[thm-deligne-weight-bound-for-compactly-supported-cohomology]]: a constructible sheaf with a finite filtration by pointwise pure quotients of weights at most zero has all $H_c^1$ Frobenius eigenvalues of absolute value at most $\sqrt p$.

[F3] [[thm-geometric-invariants-control-compact-support-degree-two]]: for a lisse sheaf $Q$ on a smooth geometrically connected nonproper curve, $H_c^2(U,Q)\cong((V^\vee)^{\pi_1(U)})^\vee(-1)$, with geometric Frobenius acting on the twist by $p$.

[F4] [[lem-weight-zero-dual-trace-is-complex-conjugate]]: after every finite extension, the trace of the middle extension of the dual lisse sheaf is the complex conjugate of the original trace.

[F5] [[lem-hc0-vanishing-for-tensor-middle-extensions]]: $H_c^0(\mathbb A^1,M_1\otimes\check M_2)=0$.

[F6] [[lem-fkm-tensor-product-cohomology-dimension-bound]]: $\dim H_c^1(\mathbb A^1,M_1\otimes\check M_2)\le3c_1^2c_2^2$.

[F7] [[thm-etale-open-closed-localization-sequence-for-compact-support]]: finite closed boundaries do not change $H_c^2$ when passing between a constructible extension on $\mathbb A^1$ and its common lisse open.

[F8] [[def-weight-zero-trace-function]]: the original sheaves are pointwise pure of weight zero on their lisse loci and have boundary Frobenius eigenvalues of absolute value at most one.

[F9] [[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]: an endomorphism of an irreducible representation over an algebraically closed field is scalar.

[F10] [[def-l-adic-middle-extension-sheaf-over-finite-field]]: the middle-extension sheaf is $j_*L$, the ordinary direct image of its lisse sheaf.

[F11] [[thm-finiteness-of-compactly-supported-etale-cohomology-for-curves-over-algebraically-closed-fields]]: for a constructible sheaf on a smooth curve, compactly supported cohomology vanishes in degrees below zero and above two.

[F12] [[lem-weight-zero-tensor-middle-extension-is-mixed]]: $G=M_1\otimes\check M_2$ has a finite filtration with pointwise pure quotients of weights at most zero.

[F13] [[lem-deligne-irreducible-comparison-and-frobenius-scalar]] proves the abstract intertwiner, normalizing-Frobenius scalar and positive-degree determinant comparison.

[F14] [[lem-deligne-weight-zero-matrix-trace-and-dual-identities]] bounds traces by dimension times a spectral absolute-value bound.

## Proof

1.1 Let $G=M_1\otimes\check M_2$, where $\check M_2$ is the middle extension of the dual lisse sheaf. By [F4], the trace function of $G$ at each rational point is $t_1(x)\overline{t_2(x)}$. Apply [F1] to express the correlation sum as
$$\operatorname{Tr}(\operatorname{Frob}^{\mathrm{geom}}_p\mid H_c^0)-\operatorname{Tr}(\operatorname{Frob}^{\mathrm{geom}}_p\mid H_c^1)+\operatorname{Tr}(\operatorname{Frob}^{\mathrm{geom}}_p\mid H_c^2),$$
with cohomology on $\mathbb A^1_{\overline{\mathbb F}_p}$. Only these degrees occur by [F11]. [F1, F4, F11, given, construct]

1.2 Work on the nonproper common open $U=(U_1\cap U_2)\setminus\{\infty\}$. Write $V_i$ for the two geometric generic stalks and $H$ for their common geometric monodromy group. The dual of $G|_U$ has generic stalk $V_1^\vee\otimes V_2$, so its $H$-invariants identify with $\operatorname{Hom}_H(V_1,V_2)$. By [F13] these have dimension zero or one according as the irreducible representations are nonisomorphic or isomorphic. With the geometric monodromy, section and coefficient comparison required by [F3], and the localization identification [F7], $H_c^2(\mathbb A^1,G)$ is zero in the first case and one-dimensional in the second. These geometric comparison inputs remain held; the algebraic Hom calculation uses the dual-invariant orientation explicitly. [F3, F7, F13, given, algebra]

2.1 By [F5] the first term is zero. The mixedness statement [F12] supplies the finite filtration by pure quotients required by [F2], so every Frobenius eigenvalue on $H_c^1$ has absolute value at most $\sqrt p$. By [F14], the trace has absolute value at most $\dim H_c^1\sqrt p$, and [F6] bounds this by $3c_1^2c_2^2\sqrt p$. [F2, F5, F6, F12, F14, step 1.1, algebra]

2.2 In the isomorphic case fix an $H$-isomorphism $A:V_2\to V_1$. Under the actual arithmetic-descent/monodromy interface, choose a lift of geometric base Frobenius, with operators $F_i$ normalizing $H$ by the same automorphism. By [F13] there is $\lambda\in\overline{\mathbb Q}_\ell^\times$ with $F_1=\lambda A F_2 A^{-1}$. No rational point of $U$ is required. Choose a geometric point of $U$ outside its finite complement; its coordinates lie in some finite extension, so it gives a closed point of positive degree $d$. Its Frobenius operators have the form $F_i^d\rho_i(h)$ for the same geometric element $h$. The pure lisse-locus hypothesis [F8] gives unit complex absolute values of their eigenvalues, and the determinant argument in [F13] gives $|\iota(\lambda)|=1$. The scalar $\lambda$ is also an $\ell$-adic unit: a positive power of it is a ratio of determinants of the continuous local Frobenius actions, whose eigenvalues are $\ell$-adic units. Its powers therefore define the continuous rank-one arithmetic twist (at each finite coefficient level this is the cyclic action generated by the scalar). Put $\alpha=\iota(\lambda)$. The intertwiner relation on the generic descent data gives a constant Frobenius twist of the lisse sheaves; functorial underived direct image [F10] extends it to the middle extensions, so $t_1(x)=\alpha t_2(x)$ at every rational point, including boundary points. On $\operatorname{Hom}_H(V_1,V_2)$ the induced Frobenius scalar is $\lambda^{-1}$; its dual has scalar $\lambda$, and the Tate twist $(-1)$ multiplies it by $p$. Thus [F3] gives the $H_c^2$ trace $\alpha p$. Every geometric descent, duality and coefficient interface used here remains a full proof-chain hold; [F13] supplies the finite-dimensional comparison, not those geometric theorems. [F3, F8, F10, F13, step 1.2, given, choose, algebra]

3.1 Subtract the $H_c^2$ term identified in [step 1.2] or [step 2.2] from the trace expression of [step 1.1]. The remainder is minus the $H_c^1$ trace, whose absolute value was bounded in [step 2.1]. This gives the corresponding inequality in both cases. The trace formula, Deligne weight theorem, invariant-control theorem, dual-trace identity and open–closed localization still have unsupplied geometric proofs. The mixedness bridge and cohomological dimension estimate are conditional local derivations that depend on those held geometric suppliers. Thus this derivation and its full proof chain remain escalated. [step 1.1, step 2.1, step 1.2, step 2.2, algebra] ∎
