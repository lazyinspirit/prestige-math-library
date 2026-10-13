---
id: cex-the-whole-affine-hecke-algebra-is-not-one-cyclotomic-klr-block
kind: counterexample
title: "At positive rank the whole affine Hecke algebra is not one cyclotomic KLR block"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 32
deps: [def-affine-and-cyclotomic-type-a-hecke-algebras,
       lem-cyclotomic-hecke-algebra-basis-and-dimension,
       def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks,
       thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov–Lauda algebras, arXiv:0808.2032v3, Invent. Math. 178 (2009) 451–484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1–5 (quiver, (1.1)–(1.4), Main Theorem (1.6)–(1.15), Corollaries 1–2); Section 2 (2.1)–(2.7), Lemmas 2.1–2.2; Sections 3.1–3.5 pp. 7–19; Sections 4.1–4.5 pp. 19–27; Section 6 pp. 29–31."
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3 (published in Math. Ann.), complete 51-page article"
      url: "https://arxiv.org/pdf/1304.0906"
      locator: "Introduction: Theorem A and Corollary 1.1, pp. 2–4; Section 2.2 Definition 2.2 and Remark 2.3; Sections 2.5–2.6, Theorem 2.8, Definition 2.10, Remark 2.13, Theorem 2.14, Corollary 2.15, pp. 11–16; Section 4.1 Definition 4.1."
---

## Statement refuted

One might hope that for a fixed content-block isomorphism, replacing one side
by the whole affine Hecke algebra, or by the whole cyclotomic quotient in the
example below, still gives an isomorphism. This fails. The failure does not
forbid summing all the central-sector isomorphisms on **both** sides.

## Facts & Assumptions

**Given:** The affine and cyclotomic presentation conventions [F1], the
bounded basis and dimension of the cyclotomic quotient [F2], the
residue-projector/block conventions [F3], and the blockwise isomorphism [F4].

[F1] The affine Hecke algebra at rank one is $F[X_1^{\pm1}]$ in the
nondegenerate normalization and $F[x_1]$ in the degenerate normalization, and
the cyclotomic quotient is obtained by imposing the first-variable cyclotomic
relation
([[def-affine-and-cyclotomic-type-a-hecke-algebras]]).

[F2] The cyclotomic quotient has a bounded spanning family and finite
dimension at most $\ell^dd!$
([[lem-cyclotomic-hecke-algebra-basis-and-dimension]]).

[F3] The nonzero central sectors $H^\Lambda_\alpha=e_\alpha H^\Lambda_d$ are
the blocks, with the level-one Jucys–Murphy identification
$H^\Lambda_d\cong H_{F,q}(S_d)$
([[def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks]]).

[F4] The blockwise maps $\rho\colon R^\Lambda_\alpha\to H^\Lambda_\alpha$ are
mutually inverse isomorphisms for every content with $e_\alpha\ne0$
([[thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism]]).

## Counterexample

**Proof technique:** direct.

**Given:** The presentation and block conventions of [F1]–[F4].

1.1 The positive-rank affine algebra is infinite dimensional. At rank one the affine presentation is $F[X_1^{\pm1}]$ in NG and $F[x_1]$ in DG by [F1], and their distinct powers are independent. More generally for any $d\ge1$, the NG assignments $T_r\mapsto q_H$, $X_r\mapsto q_H^{r-1}t$ give a surjection onto $F[t,t^{-1}]$: the quadratic relation reads $q_H^2=(q_H-1)q_H+q_H$, the Bernstein relation reads $q_H^2q_H^{r-1}t=q_Hq_H^rt$, and the commuting and braid relations are scalar identities. In DG the assignments $s_r\mapsto1$, $x_r\mapsto t+(r-1)1_F$ similarly give a surjection onto $F[t]$, since the adjacent mixed relation reads $t+(r-1)=(t+r)-1$ and all other relations hold. The images contain $t$, so the affine algebras are infinite-dimensional at every positive rank. Every cyclotomic block is finite-dimensional by [F2], and its KLR partner has the same dimension by [F4]; thus neither is isomorphic to the whole positive-rank affine algebra. At rank zero both presentations give $F$, and the obstruction does not apply. [F1, F2, F4, algebra]

2.1 The whole cyclotomic quotient is not one block. Take $\Lambda=\Lambda_0$ (level one), $d=2$, $e=3$ and $q_H$ a primitive cube root of unity. By the level-one identification [F3] the algebra is $H_{F,q}(S_2)\cong F[T]/((T-q_H)(T+1))\cong F\times F$, since $q_H\ne-1$ in characteristic $\ne3$. Here $X_1=1$ and $X_2=q_H^{-1}T_1^2$, so the two factors $T_1=q_H$ and $T_1=-1$ have polynomial eigenwords $(1,q_H)$ and $(1,q_H^2)$, hence residue words $(0,1)$ and $(0,2)$. Thus there are two nonzero blocks $H^\Lambda_{\alpha_0+\alpha_1}$ and $H^\Lambda_{\alpha_0+\alpha_2}$, each one dimensional with residue sequences $(0,1)$ and $(0,2)$. Therefore $H^\Lambda_2$ has dimension $2$ and is not isomorphic to either one-dimensional block; on the KLR side [F4] gives $R^\Lambda_2=R^\Lambda_{\alpha_0+\alpha_1}\oplus R^\Lambda_{\alpha_0+\alpha_2}$, which is not isomorphic to a single block. [F3, F4, step 1.1]

3.1 Conclusion. Both branches of the attempted replacement fail: the affine algebra is infinite dimensional, and the whole cyclotomic quotient decomposes into more than one block. Summing the central-sector isomorphisms on both sides remains valid. [F1, F2, step 1.1, step 2.1] ∎

## Remarks

At rank zero the affine algebra and the unique cyclotomic KLR content algebra are both $F$; there is no dimension obstruction or counterexample at that boundary. The counterexample separates the blockwise statement of the
Brundan–Kleshchev theorem from two stronger readings: the rank-one affine algebra
itself is not a cyclotomic block, and a cyclotomic quotient can have several
blocks. No choice principle is used.
