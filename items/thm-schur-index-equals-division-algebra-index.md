---
id: thm-schur-index-equals-division-algebra-index
kind: theorem
title: "The Schur index equals the division-algebra index"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-index-of-a-central-division-algebra, def-endomorphism-division-algebra-of-an-irreducible, def-schur-index-of-an-irreducible-character, lem-character-field-is-the-stabilizer-fixed-field, thm-scalar-extension-of-an-irreducible-finite-group-representation, def-splitting-field-for-a-finite-group, lem-base-change-of-intertwiner-spaces]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Corollary 2.5.7 and Remark 2.5.15"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, Proposition 4.6.14"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Statement

Let $\chi$ be an irreducible complex character of a finite group $G$, put
$K=\mathbb Q(\chi)$, and let $V$ be the irreducible $K$-representation used in
[[def-schur-index-of-an-irreducible-character]].  If
$D_V=\operatorname{End}_G(V)$, then $Z(D_V)=K$ and
$$m_K(\chi)=\operatorname{ind}(D_V).$$

## Facts & Assumptions

**Given:** $\chi$, $K$, $V$, and $D_V$ as in the statement, and a finite Galois splitting field $E/K$ inside $\mathbb C$.

[L1] Base change identifies $E\otimes_KD_V$ with $\operatorname{End}_G(E\otimes_KV)$ ([[lem-base-change-of-intertwiner-spaces]]).

[L2] The scalar-extension decomposition is $E\otimes_KV\cong U^{\oplus m_K(\chi)}$ for an absolutely irreducible $U$ with character $\chi$ ([[thm-scalar-extension-of-an-irreducible-finite-group-representation]], [[lem-character-field-is-the-stabilizer-fixed-field]]).

[L3] The index of a central division algebra is the square root of its central dimension ([[def-index-of-a-central-division-algebra]]).

[L4] Since $E$ splits $G$, $\operatorname{End}_G(U)=E$ ([[def-splitting-field-for-a-finite-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L4], $\operatorname{End}_G(E\otimes_KV)\cong\operatorname{End}_G(U^{\oplus m_K(\chi)})\cong M_{m_K(\chi)}(E)$.  Thus [L1] gives $E\otimes_KD_V\cong M_{m_K(\chi)}(E)$. [L1, L2, L4]

2.1 If $z\in Z(D_V)$, its image in the matrix algebra of step 1.1 commutes with every matrix, so it is $\lambda I$ for some $\lambda\in E$.  Because $1\otimes z$ is fixed by $\operatorname{Gal}(E/K)$, so is $\lambda$; hence $\lambda\in K$.  Since $K$ already acts by scalar endomorphisms, $Z(D_V)=K$. [step 1.1, algebra]

3.1 Taking $E$-dimensions in step 1.1 gives $\dim_KD_V=m_K(\chi)^2$.  With step 2.1, [L3] therefore gives $\operatorname{ind}(D_V)=m_K(\chi)$. [L3, step 1.1, step 2.1] ∎
