---
id: "lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner"
kind: "lemma"
title: "Invariant square integrable kernel produces a compact intertwiner"
deps: ["lem-square-integrable-kernels-define-bounded-compact-integral-operators", "lem-conjugate-transpose-kernels-give-adjoints", "lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace", "lem-product-rectangle-kernels-are-dense-in-complex-l-two", "thm-measure-preservation-on-a-generating-pi-system", "thm-tonelli-and-fubini-for-completed-product-measures", "def-axiom-of-choice", "def-unitary-eigenfunction-for-a-probability-system"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Sarig Theorem 3.2 p.91 (criterion); Axler Example 10.5 p.282 (kernel formula)
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
    - title: Axler Example 10.5 and 10.70; intertwining derived locally
      url: https://measure.axler.net/MIRA.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Suppose $T$ preserves a completed Lebesgue probability space and $k\in L^2(X^2)$ satisfies $k(Tx,Ty)=k(x,y)$ a.e. Its compact kernel operator satisfies $KU=UK$ and $K^*U=UK^*$, where $U=U_T$, even if $U$ is not surjective. If both marginal integrals of $k$ vanish a.e., then $K\mathbf1=K^*\mathbf1=0$, both operators preserve $H_0$, and $k\ne0$ implies $K|_{H_0}\ne0$.

## Facts & Assumptions

[F1] Kernel operators are compact and the kernel-to-operator map is bounded and injective [[lem-square-integrable-kernels-define-bounded-compact-integral-operators]].

[F2] Conjugate-transpose kernels give adjoints [[lem-conjugate-transpose-kernels-give-adjoints]].

[F3] A linear isometry has the explicit adjoint $V$ with $VU=I$ [[lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace]].

[F4] Finite rectangle combinations are dense in product $L^2$ [[lem-product-rectangle-kernels-are-dense-in-complex-l-two]].

[F5] The local canonical-simple and monotone-convergence argument proves that Koopman pullback is an isometry on complex $L^2$ [[def-unitary-eigenfunction-for-a-probability-system]].

[F6] Preservation on generating rectangles implies preservation on the product sigma-algebra [[thm-measure-preservation-on-a-generating-pi-system]].

[F7] Completed-product Fubini applies with a.e. sections [[thm-tonelli-and-fubini-for-completed-product-measures]].

[F8] The centered space is $H_0=\{f:\int f=0\}$ [[def-unitary-eigenfunction-for-a-probability-system]].

[F9] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** $T,k$ and AC as in the statement.

1.1 The preimage under $T\times T$ of $E\times F$ is $T^{-1}E\times T^{-1}F$, of the same measure. These rectangles generate the product sigma-algebra and include the whole probability square, so F6 applies. Preimages of completed null subsets lie in the preimages of product-measurable null covers, hence are measurable and null in the completion. Thus $T\times T$ preserves the completed product. Its Koopman operator $W$ and the factor operator $U$ are isometries. Obtain $V=U^*$ and $VU=I$ from F3, under AC. [F3, F5, F6, F9]

2.1 For a rectangle tensor $l(x,y)=a(x)b(y)$, the adjoint identity and its conjugate give $\int b(Ty)f(y)\,d\mu(y)=\langle f,U\overline b\rangle=\langle Vf,\overline b\rangle=\int b(y)Vf(y)\,d\mu(y)$. Multiplying by $a(Tx)$ yields $K_{Wl}=UK_lV$. Finite linear combinations obey the same identity. For any $l\in L^2$, approximate by such combinations in kernel norm; isometry of $W$ and F1 make both sides converge in operator norm. Hence the identity holds for every kernel. [F1, F4, step 1.1]

3.1 Since $Wk=k$, step 2.1 gives $K=UKV$, and multiplying on the right by $U$ gives $KU=UK$. The swapped conjugate kernel obeys $Wk^*=k^*$ too: F2 makes conjugate transpose a well-defined operation on completed $L^2$ kernel classes, algebraically $W(k^*)=(Wk)^*$, and $Wk=k$. Applying the same identity to $k^*$ yields $K^*U=UK^*$. Compactness of both operators comes from F1–F2. [F1, F2, step 2.1]

4.1 Vanishing $y$-marginal gives $K\mathbf1=0$. Vanishing $x$-marginal gives $K^*\mathbf1=0$ after conjugation. For $f\in H_0$, $\langle Kf,\mathbf1\rangle=\langle f,K^*\mathbf1\rangle=0$, and similarly for $K^*$ using its double adjoint. Thus both preserve $H_0$. If $k\ne0$, F1 gives $K\ne0$. Every $f$ splits as $(\int f)\mathbf1+f_0$ with $f_0\in H_0$; since $K\mathbf1=0$, a vector with $Kf\ne0$ supplies $Kf_0\ne0$. Therefore the restriction is nonzero. All marginal equalities are a.e. equalities of integrable sections, justified by F7. [F1, F2, F7, F8, step 3.1] ∎
