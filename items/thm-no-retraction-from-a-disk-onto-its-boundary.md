---
id: "thm-no-retraction-from-a-disk-onto-its-boundary"
kind: "theorem"
title: "No retraction from a disk onto its boundary"
deps: ["cor-homology-of-spheres", "thm-singular-homology-satisfies-dimension-and-arbitrary-additivity", "cor-contractible-nonempty-spaces-have-the-homology-of-a-point"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Miller, Algebraic Topology I lecture notes, Theorem 10.7 proof, p.24"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf"
      locator: "Theorem 10.7 proof, p.24"
status: published
origin: "pipeline"
proof_strategy: "A retraction would split the boundary inclusion on reduced H_(n-1), but the intermediate disk group is zero and the sphere group is Z. Use reduced H_0 when n=1."
---

## Statement

For every integer $n\ge1$, there is no continuous retraction $D^n\to S^{n-1}$ of the closed unit ball onto its boundary.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For $n\ge1$, $\widetilde H_k(S^n;G)$ is $G$ for $k=n$ and $0$ otherwise. For $S^0$, $\widetilde H_0(S^0;G)\cong G$ and all other reduced groups vanish. Thus $H_0(S^n;G)\cong G$ for $n\ge1$, whereas $H_0(S^0;G)\cong G\oplus G$. ([[cor-homology-of-spheres]])

[F2] For any abelian group $G$, $H_0(*;G)\cong G$ and $H_n(*;G)=0$ for every integer $n\ne0$. For every set-indexed family of pairs the canonical map $$\bigoplus_\alpha H_n(X_\alpha,A_\alpha;G)\longrightarrow H_n\left(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha;G\right)$$ is an isomorphism. Together with the structural axioms, singular homology is an ordinary theory with coefficient group $G$. ([[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]])

[F3] If $X$ is a nonempty contractible topological space, then for every $n\geq 0$ and every abelian group $G$, $$H_n^{\mathrm{sing}}(X;G)\cong H_n^{\mathrm{sing}}(\ast;G),$$ where $\ast$ denotes a one-point space. ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]])

## Proof

1.1 The disk contracts by $(x,t)\mapsto(1-t)x$. Thus its reduced integral homology is zero, by F3 and the point computation F2. In contrast $\widetilde H_{n-1}(S^{n-1};\mathbb Z)=\mathbb Z$ by F1, including reduced $H_0(S^0)$ when $n=1$. [F1, F2, F3]

2.1 A retraction $r$ of the boundary inclusion $i$ would satisfy $r\circ i=\mathrm{id}$. Functoriality on reduced homology would factor the identity of $\mathbb Z$ through the zero group $\widetilde H_{n-1}(D^n;\mathbb Z)$. That composite is zero, whereas the identity sends $1$ to $1$, a contradiction. [step 1.1, algebra] ∎
