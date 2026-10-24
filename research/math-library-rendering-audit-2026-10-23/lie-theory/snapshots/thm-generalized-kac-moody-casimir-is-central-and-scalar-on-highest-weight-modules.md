---
id: thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules
kind: theorem
title: "Generalized kac moody casimir is central and scalar on highest weight modules"
status: published
origin: pipeline
deps: ["def-generalized-casimir-on-restricted-kac-moody-modules", "thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Lemma 2.3.1, Theorem 2.3.5 and Corollary 2.3.6, pp.32–36"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

On every restricted module for a symmetrizable $\mathfrak g(A)$, $\Omega$ commutes with the action of $\mathfrak g$. If $v$ is a highest vector of weight $\lambda$, then $\Omega v=(\lambda+2\rho,\lambda)v$. If $v$ generates the module, $\Omega$ is this scalar on the whole module.

## Facts & Assumptions

**Given:** The restricted operator Omega, its dual bases and chosen rho.

[F1] The operator and its sums are pointwise finite. ([[def-generalized-casimir-on-restricted-kac-moody-modules]]).

[F2] Invariance and perfect opposite-root pairings identify commutators. ([[thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra]]).

## Proof

1.1 For $z\in\mathfrak g_{\beta-\alpha}$, the tensors $\sum_s y_{\alpha,s}\otimes[z,x_{\alpha,s}]$ and $\sum_t[y_{\beta,t},z]\otimes x_{\beta,t}$ agree. Pair with arbitrary $a\otimes b\in\mathfrak g_\alpha\otimes\mathfrak g_{-\beta}$: their values are respectively $(a,[b,z])$ and $([z,a],b)$, equal by invariance. Perfect finite-dimensional pairings imply the tensor equality. This also covers a missing root space by interpreting the corresponding maps as zero. [F2]

2.1 Write $S=\sum_{\alpha>0,s}y_{\alpha,s}x_{\alpha,s}$ and $t_i=\nu^{-1}(\alpha_i)=d_i h_i$. In $[S,e_i]$, the term $y_\alpha[x_\alpha,e_i]$ cancels the term $[y_\beta,e_i]x_\beta$ with $\beta=\alpha+\alpha_i$ by step 1.1. The only unmatched degree is $\alpha_i$, where the dual pair is $e_i,d_i f_i$, giving $[S,e_i]=-t_i e_i$. Terms of mixed root sign vanish, and $2\alpha_i$ is absent. For $[S,f_i]$ the same identity with $z=f_i$ pairs $y_\beta[x_\beta,f_i]$ with $[y_\alpha,f_i]x_\alpha$ for $\beta=\alpha+\alpha_i$; the unmatched simple term is $d_i f_i[e_i,f_i]=f_i t_i$. Thus $[S,f_i]=f_i t_i$. All cancellations are finite on a fixed vector: root spaces kill that vector, its images under $e_i,f_i$, and all but finitely many shifted degrees. [F1, F2, step 1.1]

3.1 Let $C=\sum_a u_a u^a$. Expanding with $[h,x]=\beta(h)x$ gives $[C,x]=x(2\nu^{-1}(\beta)+(\beta,\beta))$ for $x\in\mathfrak g_\beta$. Also $[2\nu^{-1}(\rho),x]=2(\rho,\beta)x$. For $e_i$, these finite terms total $e_i(2t_i+4d_i)$, while $2[S,e_i]=-2t_i e_i=-2e_i t_i-4d_i e_i$. For $f_i$ they total $-2f_i t_i$, canceled by $2[S,f_i]=2f_i t_i$. Every summand has weight zero, so $[\Omega,h]=0$. Since these elements generate $\mathfrak g$, the commutator identity with a product or bracket proves centrality on the entire algebra action. [F1, F2, step 2.1]

4.1 On a highest vector all positive factors $x_{\alpha,s}$ vanish. The Cartan terms give $\sum_a\lambda(u_a)\lambda(u^a)=(\lambda,\lambda)$ and $2\lambda(\nu^{-1}\rho)=2(\rho,\lambda)$. This proves the displayed scalar on $v$. By step 3.1, $\Omega(uv)=u\Omega v$ for every finite enveloping word $u$, so the scalar holds on the generated module. [F1, step 3.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Lemma 2.3.1, Theorem 2.3.5 and Corollary 2.3.6, pp.32–36.
