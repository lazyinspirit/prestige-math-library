---
id: lem-weight-zero-tensor-middle-extension-is-mixed
kind: lemma
title: "A Weight-Zero Tensor of Middle Extensions Is Mixed"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-weight-zero-trace-function
  - def-l-adic-middle-extension-sheaf-over-finite-field
  - lem-weight-zero-dual-trace-is-complex-conjugate
  - thm-etale-open-closed-localization-sequence-for-compact-support
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, La conjecture de Weil II, §1.2 and Theorem 3.3.1"
      url: "https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf"
      locator: "§1.2 weight conventions and Theorem 3.3.1 mixed-sheaf weight bound"
    - title: "J. S. Milne, Lectures on Étale Cohomology"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "Chapter I §8 Proposition 8.15, exact open-closed sheaf sequence"
verification:
  precheck: pending
---
## Statement

Let $p$ be prime, let $\ell\ne p$, fix an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$. For $i=1,2$, let $j_i:U_i\hookrightarrow\mathbb P^1_{\mathbb F_p}$ be the maximal lisse open inclusion, let $L_i$ be a finite-rank lisse sheaf on $U_i$, and let $M_i=j_{i*}L_i$ be its ordinary middle extension. Assume each $M_i$ is pointwise of weight zero. Let $\check M_2=j_{2*}(L_2^\vee)$ and put $G=M_1\otimes\check M_2$. Then $G$ is mixed of weights at most zero in the finite-filtration sense: it has a finite filtration by constructible $\overline{\mathbb Q}_\ell$-subsheaves whose nonzero successive quotients are pointwise pure of fixed real weights at most zero.

## Statement references

[[def-weight-zero-trace-function|Weight-zero trace function]]

[[lem-weight-zero-dual-trace-is-complex-conjugate|Dual trace of a weight-zero middle-extension sheaf]]

[[thm-etale-open-closed-localization-sequence-for-compact-support|Étale open–closed localization sequence for compact support]]

[[thm-deligne-weight-bound-for-compactly-supported-cohomology|Deligne weight bound for compactly supported cohomology]]

## Facts & Assumptions

**Given:** The prime $p$, the prime $\ell\ne p$, the embedding $\iota$, and the two weight-zero middle-extension sheaves.

[F1] [[def-weight-zero-trace-function]]: on each maximal lisse open the sheaf is pointwise pure of weight zero, and at every closed boundary point its Frobenius eigenvalues have complex absolute value at most one.

[F2] [[lem-weight-zero-dual-trace-is-complex-conjugate]]: after every finite extension of $\mathbb F_p$, the trace of the dual middle extension at every rational point is the complex conjugate of the original trace.

[F3] [[thm-etale-open-closed-localization-sequence-for-compact-support]]: for a constructible sheaf, the open–closed localization sequence is induced by $0\to j_!j^*G\to G\to i_*i^*G\to0$.

## Proof

1.1 Let $U$ be the intersection of the two maximal lisse opens, and let $S=\mathbb P^1_{\mathbb F_p}\setminus U$ with its reduced closed subscheme structure. On $U$, every geometric-Frobenius eigenvalue of $L_1$ and $L_2$ has absolute value one by [F1]; the dual eigenvalues are inverses, also of absolute value one. Frobenius eigenvalues of the tensor product are pairwise products, so $G|_U$ is pointwise pure of weight zero. [F1, given, algebra]

1.2 Let $j:U\hookrightarrow\mathbb P^1_{\mathbb F_p}$ denote the common open inclusion and $i:S\hookrightarrow\mathbb P^1_{\mathbb F_p}$ its closed complement. By [F3] there is a short exact sequence $0\to j_!G|_U\to G\to i_*G|_S\to0$. The extension-by-zero term has zero stalks on $S$ and restricts to the pure weight-zero sheaf $G|_U$ on $U$, so it is pointwise pure of weight zero. [F1, F3, given]

2.1 Let $x$ be a closed point in $S$ of degree $d$. For every $m\ge1$, the point $x$ is rational over $\mathbb F_{p^{dm}}$. By [F2], the traces of every positive power of geometric Frobenius on the dual stalk are the complex conjugates of the corresponding traces on the original stalk. Both Frobenius operators are invertible. To justify the eigenvalue comparison even before knowing their stalk dimensions agree, list the distinct nonzero complex numbers $\lambda_1,\ldots,\lambda_s$ appearing in the dual spectrum or the conjugate original spectrum, and let $c_j$ be their multiplicity differences. The power-sum identities give $\sum_j c_j\lambda_j^m=0$ for $m=1,\ldots,s$. The matrix of these equations is a Vandermonde matrix times the invertible diagonal matrix of the $\lambda_j$, so all $c_j=0$. Thus the eigenvalue multisets agree, including multiplicities. By [F1], their absolute values are at most one. Products of these eigenvalues show that every eigenvalue on $G_{\bar x}$ also has absolute value at most one. This proves the pointwise boundary weight bound for every closed point. [F1, F2, step 1.1, algebra]

3.1 The boundary sheaf $i_*G|_S$ is supported on finitely many closed points. At a point $x$ of degree $d$, its stalk has an invertible geometric-Frobenius operator with eigenvalues of absolute value at most one by step 2.1. Over the algebraically closed coefficient field, choose an eigenline; quotient by it and repeat on the finite-dimensional quotient. Induction gives a finite Frobenius-stable filtration with one-dimensional successive quotients. Each quotient is a rank-one sheaf supported at $x$ and is pure of weight $w=2\log(|\iota(\alpha)|)/(d\log p)\le0$, where $\alpha$ is its Frobenius eigenvalue. Combining these finite filtrations over the finitely many points filters $i_*G|_S$ by pure quotients of weights at most zero. Pulling that filtration back along the quotient map in step 1.2 and placing $j_!G|_U$ first gives a finite filtration of $G$ with all nonzero successive quotients pure of weights at most zero. [F1, step 2.1, step 1.2, given, algebra]

4.1 The filtration in step 3.1 is exactly the mixedness hypothesis required by the compact-support Deligne weight theorem. The proof uses the dual-trace and l-adic localization statements [F2] and [F3], as the precise declared inputs; this completes the local bridge without asserting independent proofs of those inputs. [F2, F3, step 3.1] ∎
