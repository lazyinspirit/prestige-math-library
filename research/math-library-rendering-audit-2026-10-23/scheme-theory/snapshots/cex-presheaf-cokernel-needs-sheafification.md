---
id: cex-presheaf-cokernel-needs-sheafification
kind: counterexample
title: "The objectwise cokernel presheaf can fail to be a sheaf"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-extension-by-zero-differs-direct-image, def-kernel-cokernel-image-sheaves]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 17.3"
      url: "https://stacks.math.columbia.edu/tag/01AF"
    - title: "Ravi Vakil, The Rising Sea, Proposition 2.6.1"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement refuted

For a morphism of sheaves of abelian groups, the objectwise cokernel presheaf is
automatically a sheaf.

## Facts & Assumptions

**Given:** The circle $X=S^1$, the sheaf $\mathcal C$ of continuous real-valued functions, and the subsheaf $\underline{\mathbb Z}$ of locally constant integer-valued functions.

[F1] Cokernel sheaves are obtained by sheafifying the objectwise cokernel presheaf ([[def-kernel-cokernel-image-sheaves]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $\mathcal P$ be the presheaf cokernel of the inclusion $\underline{\mathbb Z}\hookrightarrow \mathcal C$, so $$\mathcal P(V)=\mathcal C(V)/\underline{\mathbb Z}(V)$$ for each open $V\subseteq S^1$. Cover $S^1$ by the arcs $U_0=S^1\setminus\{(-1,0)\}$ and $U_1=S^1\setminus\{(1,0)\}$, and choose continuous angle functions $\theta_0:U_0\to(-1/2,1/2)$ and $\theta_1:U_1\to(0,1)$ with $e^{2\pi i\theta_i(z)}=z$. On $U_0\cap U_1$, the difference $\theta_1-\theta_0$ is locally constant integer-valued, so the classes $[\theta_0]\in\mathcal P(U_0)$ and $[\theta_1]\in\mathcal P(U_1)$ agree on the overlap. [given, construct]

2.1 If these local classes came from a global class $[g]\in\mathcal P(S^1)$, then on each arc $U_i$ the difference $g-\theta_i$ would be integer-valued and continuous, hence constant because $U_i$ is connected. On the two connected components of $U_0\cap U_1$, this would force the same constant difference to be both $0$ and $1$, which is impossible. Therefore the compatible local classes of step 1.1 do not glue in the presheaf $\mathcal P$. [step 1.1, contradiction]

3.1 So the objectwise cokernel presheaf is not a sheaf. By [F1], this is exactly why one sheafifies it to obtain the true cokernel sheaf. The statement is false. [F1, step 2.1] ∎
