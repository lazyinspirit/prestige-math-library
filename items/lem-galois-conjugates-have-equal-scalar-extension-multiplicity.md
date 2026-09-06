---
id: lem-galois-conjugates-have-equal-scalar-extension-multiplicity
kind: lemma
title: "Galois conjugates have equal scalar-extension multiplicity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-galois-conjugate-representation, cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Lemma 2.2.9"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, Proposition 4.3.2"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Statement

Let $E/F$ be finite Galois of characteristic $0$, let $G$ be finite, and let $V$ be a
finite-dimensional $F$-representation.  If $U$ is an irreducible constituent of $E\otimes_FV$,
then every ${}^{\sigma}U$ is a constituent with the same multiplicity as $U$.

## Facts & Assumptions

**Given:** $E/F$, $G$, $V$, and $U$ as in the statement.

[L1] In characteristic not dividing $|G|$, finite-dimensional representations of $G$ are completely reducible ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

[L2] Galois conjugation applies an automorphism entrywise and preserves equivalence ([[def-galois-conjugate-representation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], write $E\otimes_FV\cong\bigoplus_X m_X X$ as a direct sum over its irreducible constituents. [L1, given]

2.1 Apply $\sigma$ entrywise to this decomposition.  Since the matrices of $V$ have entries in $F$, [L2] identifies the conjugate of the left side with itself, while the right side becomes $\bigoplus_Xm_X{}^{\sigma}X$. [L2, step 1.1]

3.1 Uniqueness of multiplicities in a completely reducible decomposition now gives $m_{{}^{\sigma}U}=m_U$, as required. [L1, step 2.1] ∎
