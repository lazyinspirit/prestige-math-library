---
id: "lem-finite-local-modules-admit-minimal-free-resolutions"
kind: "lemma"
title: "finite local modules admit minimal free resolutions"
deps: ["def-minimal-free-resolution-over-a-local-ring", "cor-minimal-generators-over-a-local-ring", "thm-nakayama-lemma", "thm-equivalent-characterizations-of-noetherian-modules"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Construction before Proposition 12.27, p.120"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Every finite module $M$ over a nonzero Noetherian local ring $(R,\mathfrak m,k)$ has an augmented resolution $\cdots\to F_1\to F_0\to M\to0$ by finite-rank free modules, with $d_i(F_i)\subseteq\mathfrak mF_{i-1}$ for $i>0$. Such a resolution is called minimal; it need not be bounded. This extends the bounded terminology without changing it.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-minimal-free-resolution-over-a-local-ring]]: A finite free resolution $F_\bullet\to N$ over local $(R,\mathfrak m)$ is minimal when $d_i(F_i)\subseteq\mathfrak mF_{i-1}$ for every $i>0$.

[F2] [[cor-minimal-generators-over-a-local-ring]]: Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a local ring with residue field $k=R/\mathfrak m$, and let $M$ be a finitely generated left $R$-module. A finite generating set $x_1,\dots,x_r$ of $M$ is minimal if and only if the images of $x_1,\dots,x_r$ in $M/\mathfrak mM$ form a $k$-basis. In particular every minimal generating set of $M$ has the same cardinality.

[F3] [[thm-nakayama-lemma]]: Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$.

[F4] [[thm-equivalent-characterizations-of-noetherian-modules]]: For a left $R$-module $M$, the following are equivalent: every submodule is finitely generated; every ascending chain of submodules stabilizes; and every nonempty family of submodules has a maximal member. The implication from ACC to the maximal condition uses dependent choice; the other displayed implications are choice-free. See def-noetherian-module.

## Proof

1.1 Choose a basis of $M/\mathfrak mM$ and lift it to $x_1,\ldots,x_r\in M$. If $N=\sum_iRx_i$, then $M=N+\mathfrak mM$, so the finite module $M/N$ satisfies $\mathfrak m(M/N)=M/N$. Nakayama gives $M=N$. Thus the corresponding map $F_0=R^r\to M$ is onto. A relation among the $x_i$ has all coefficients in $\mathfrak m$, because their residue classes are independent. Hence $K_0=\ker(F_0\to M)\subseteq\mathfrak mF_0$. [F2, F3, algebra]

2.1 Every kernel is finite by Noetherianity. Repeating the same construction on $K_0$ and on each successive kernel produces an exact augmented complex whose differential images lie in the required maximal-ideal multiples. Dependent Choice suffices for the infinite recursive selections; the cited Nakayama results are used with their AC ledger. If a kernel is zero, choose zero modules thereafter; for $M=0$ choose the zero complex. The bounded case agrees with the prior definition. [F4, F3, F1, step 1.1] ∎
