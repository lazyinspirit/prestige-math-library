---
id: lem-nonaffine-normal-subgroup-kernel-of-representation
kind: lemma
title: "Every normal subgroup of an affine group is a representation kernel"
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-nonaffine-subgroup-scheme-stabilizer-of-line, lem-nonaffine-normal-subgroup-inverse-multiple-character, thm-existence-of-algebraic-closures, cor-finite-type-algebra-over-noetherian-ring-is-noetherian]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-24.md"
      - "research/frontier-38-owner-30-alpha-batch-24-5a.md"
      - "research/frontier-38-owner-30-step5-hash-24-post.json"
    reviewed_raw_sha256: "9693fd34874438631c7dc51520fa01bf1bb47c44df8eecb5e54a18df32ce2694"
    content_sha256: "184b92788eeaba7786204a109115347df57d14251cdf7b604c0614fd4a8ecc64"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Corollary 4.29, Lemmas 5.15–5.17 and Proposition 5.18, pp.95,102–103"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume AC. Over any field $k$, every closed normal subgroup scheme $N$ of an affine finite-type $k$-group scheme $G$ is the scheme-theoretic kernel of a finite-dimensional representation $G\to\operatorname{GL}(E)$. Neither group scheme is assumed smooth.

## Facts & Assumptions

[F1] A closed subgroup scheme of an affine group is the stabilizer of a line in a finite-dimensional representation, on all algebras. ([[lem-nonaffine-subgroup-scheme-stabilizer-of-line]])

[F2] Over an algebraically closed field, if a character $\chi$ of a normal subgroup occurs in a group representation, so does $\chi^{-m}$ for some $m>0$. ([[lem-nonaffine-normal-subgroup-inverse-multiple-character]])

[F3] Algebraic closures exist under AC and finite-type coordinate rings are Noetherian. ([[thm-existence-of-algebraic-closures]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]])

## Proof

**Given:** AC, $k$, $G$ and $N$ as in the statement.

1.1 First let $k$ be algebraically closed. Choose by [F1] a representation $V$ and a line $L$ with stabilizer $N$. The action of $N$ on $L$ is a character $\chi$. By [F2], some representation $V'$ contains a nonzero $N$-weight subspace $D$ of character $\chi^{-m}$. The subspace $T=L^{\otimes m}\otimes D\subset V^{\otimes m}\otimes V'$ has stabilizer exactly $N$. To see this on any algebra $R$, suppose an automorphism in each factor preserves $W_R\otimes D_R$, with $W,D$ nonzero subspaces. For a transformed basis vector $u$ of $W_R$ and a transformed basis vector $d$ of $D_R$, project $u\otimes d$ to $(V_R/W_R)\otimes V'_R$. It is zero. The vector $d$ is unimodular because it is part of a transformed basis, so contracting with a functional taking $d$ to $1$ gives $u\bmod W_R=0$. Interchanging the factors gives preservation of $D_R$, and applying the inverse gives equality of both submodules. Thus the tensor-subspace stabilizer is the intersection of the factor stabilizers. Likewise, the tensor line $L_R^{\otimes m}$ determines $L_R$: for a unimodular generator $u$ of a transformed line choose a functional with value $1$ on $u$, and contract $u^{\otimes m}$ in all but one slot after projecting the remaining slot to $V_R/L_R$. Thus its stabilizer is the stabilizer of $L_R$. Since $N$ stabilizes $D$, the claimed intersection is exactly $N$. The action of $N$ on $T$ is trivial, since the characters cancel. [F1, F2, construct, algebra]

2.1 Taking the top exterior power of $T$ and of its ambient representation gives a line $L_0$ with stabilizer $N$, by the wedge calculation in [F1], and $N$ acts trivially on $L_0$. Write $B$ for this ambient representation and $B^N$ for the kernel of the linear map $b\mapsto\rho_N(b)-b\otimes1$ into $B\otimes k[N]$. Tensoring this kernel with every $k$-algebra $R$ preserves it, since all $k$-modules are flat. Thus $B^N\otimes R$ is exactly the vectors fixed by every $N$-point after every further algebra extension: the universal point of $N$ tests the coaction equality. Normality makes this space $G$-stable. Indeed, for $g\in G(R)$, $v\in B^N\otimes R$ and $n\in N(R')$, where $R'$ is any $R$-algebra, $n(gv)=g(g^{-1}ng)v=gv$. The representation on $B^N$ has kernel containing $N$. Its kernel fixes $L_0\subset B^N$, hence is contained in the line stabilizer $N$. These inclusions hold on all algebras, so its scheme-theoretic kernel equals $N$. [F1, step 1.1, construct, algebra]

3.1 For arbitrary $k$, extend to an algebraic closure $\bar k$ by [F3] and apply steps 1.1–2.1 there. The resulting representation is given by finitely many matrix coefficients in $\bar k\otimes_k k[G]$, its inverse determinant and the finitely many relations expressing its group identities. All coefficient scalars lie in a finite subextension $K/k$. Equality of its kernel ideal with $I_N\otimes\bar k$ can also be descended to a finite such extension: the representation-kernel ideal is generated by its matrix coefficients minus those of the identity; $I_N$ has a finite generating set by [F3]; expressing each set of generators in terms of the other uses only finitely many additional scalars. Enlarge $K$ to contain them. The representation on $K^n$ then exists over $K$, its group identities hold by injectivity of $k[G]\otimes K\to k[G]\otimes\bar k$ and its tensor square, and its kernel is exactly $N_K$. This argument permits inseparable $K/k$. [F3, step 2.1, construct, algebra]

4.1 Let $E$ be the underlying $k$-vector space of $K^n$. For every $k$-algebra $R$, extend $g\in G(R)$ to $G(K\otimes_kR)$ and apply the $K$-representation from step 3.1. This gives an invertible $R$-linear map on $E\otimes_kR$ and hence a representation of $G$ on $E$: choosing a $k$-basis of $K$ expresses its entries as regular $k[G]$-functions, and multiplication and inversion follow from the $K$-representation. This automorphism is the identity precisely when $g$ extended to $K\otimes R$ lies in $N(K\otimes R)$. Since $R\to K\otimes R$ is faithfully flat, it is injective, and the vanishing of every generator of $I_N$ after this extension is equivalent to its vanishing in $R$. Thus the kernel on $R$-points is $N(R)$ for every $R$, proving the scheme assertion. AC is used through [F2] and [F3]. [step 3.1, construct, algebra] ∎
