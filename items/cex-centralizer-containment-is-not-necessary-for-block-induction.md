---
id: cex-centralizer-containment-is-not-necessary-for-block-induction
kind: counterexample
title: Centralizer containment is sufficient but not necessary
deps: ["def-induced-block-from-a-subgroup", "lem-block-induction-exists-under-centralizer-containment", "prop-principal-block-has-sylow-defect", "thm-kg-is-local-iff-g-is-a-p-group"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Saunders, Modular Representation Theory, Example 5.15
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement refuted

The sufficient condition $C_G(D)\le H$ for induction of an $H$-block of defect $D$ is necessary.

## Counterexample

In characteristic $2$, take $G=D_{2n}=\langle r,s\mid r^n=s^2=1,\ srs=r^{-1}\rangle$ with $n$ odd, and $H=\langle r\rangle\cong C_n$. The principal block $b_0(H)$ has defect $1$ and induces to $b_0(G)$, but $C_G(1)=G\not\le H$.

## Facts & Assumptions

**Given:** A splitting residue field $k$ of characteristic $2$ and the displayed groups, with $n\ge1$ odd.

[F1] [[def-induced-block-from-a-subgroup]] defines induction by the unique block bimodule containing the restricted summand.

[F2] [[lem-block-induction-exists-under-centralizer-containment]] states the sufficient condition whose converse is tested.

[F3] [[prop-principal-block-has-sylow-defect]] gives the principal defect groups.

[F4] [[thm-kg-is-local-iff-g-is-a-p-group]] makes $kC_2$ local.

## Proof

1.1 The averaging element $e=n^{-1}\sum_{j=0}^{n-1}r^j$ exists since $n$ is odd. Counting the $n$ occurrences of each $r^j$ in the square proves $e^2=e$. Conjugation by $r,s$ permutes its terms, so it is central in $kG$. Its ideal in $kH$ is the one-dimensional algebra $ke$, since $r^je=e$, and augmentation sends $e$ to $1$. Hence $b_0(H)=ke$. F3 gives defect $1$, since $H$ has odd order. [F3, algebra]

2.1 The ideal $kGe$ has basis $e,se$, supported on the disjoint cosets $H,sH$. Its multiplication satisfies $(se)^2=e$, so it is $kC_2$. By F4 it has no nontrivial idempotents; consequently $e$ is primitive central in $kG$. As it acts by identity on the trivial module, $kGe=b_0(G)$. On restriction to $H\times H$ both $e$ and $se$ are fixed: $H$ is normal and $he=e$ for all $h\in H$. Thus the restriction is two copies of $ke$ as a bimodule. [F4, step 1.1, algebra]

3.1 For any other block idempotent $f$, $ef=0$, so left multiplication by $e$ is zero on the whole bimodule $kGf$ and its restriction. On $ke$ that operator is identity. Therefore $ke$ cannot be isomorphic to a summand of such a restriction. F1 proves uniqueness and $b_0(H)^G=b_0(G)$. Yet the centralizer of the trivial subgroup is $G$, while $H$ has index two. This contradicts the proposed necessity, without contradicting F2's sufficient implication. For $n=1$ the same computation is $H=1$, $G=C_2$; for the smallest nonabelian case $n=3$, $D_6\cong S_3\cong\mathrm{SL}_2(\mathbf F_2)$, the latter via its faithful action on the three nonzero vectors and its order six. No semisimplicity or choice assumption is needed. [F1, F2, step 1.1, step 2.1, algebra] ∎
