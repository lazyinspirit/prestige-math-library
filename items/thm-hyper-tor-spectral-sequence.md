---
id: "thm-hyper-tor-spectral-sequence"
kind: "theorem"
title: "Hyper-Tor spectral sequence"
deps: ["thm-kunneth-tor-spectral-sequence", "def-tor-by-resolving-the-left-module", "thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex", "def-dependent-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 5.7.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

For a right $R$-module $M$, a bounded-below chain complex $K$ of left $R$-modules and supplied projective Cartan–Eilenberg data $P\to K$, there is a strongly convergent spectral sequence
$$E^2_{p,q}=\operatorname{Tor}^R_p(M,H_qK)\quad\Longrightarrow\quad H_{p+q}(M\otimes_R^{\mathbf L}K).$$
Here the derived tensor is represented by $M\otimes_R\operatorname{Tot}P$, $p$ is resolution degree, and $d_r$ has degree $(-r,r-1)$. For $K_q=0$ below $b$, translate $q$ by $b$; its target filtration is finite in each degree. Naturality and independence require DC or supplied projective comparisons and homotopies.

## Facts & Assumptions

**Given:** $M,K,P,b$ and the comparison qualification above.

[F1] The Künneth theorem states the projective homological Cartan–Eilenberg grid clauses and supplies naturality and resolution independence under DC or corresponding supplied projective comparisons and homotopies ([[thm-kunneth-tor-spectral-sequence]]).

[F2] Tor by a supplied projective resolution of a left module is the homology after tensoring with the right module ([[def-tor-by-resolving-the-left-module]]).

[F3] The row filtration computes horizontal homology first and has a finite image-filtration abutment ([[thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex]]).

## Proof

1.1 Form the double complex $M\otimes_RP_{q,p}$ and filter by resolution degree $p$. For every $p$, the horizontal complex $P_{*,p}$ is split into its homology and contractible identity disks. Tensoring preserves those split identities, so its horizontal homology is canonically $M\otimes_RH_q(P_{*,p})$. This identification comes from tensors of cycles and is independent of the splittings used to verify it. [F1, F3]

2.1 The vertical complex $H_q(P_{*,p})$, augmented to $H_qK$, is a projective resolution. The differential on the first page is its induced signed resolution differential. Taking its degree-$p$ homology gives $\operatorname{Tor}^R_p(M,H_qK)$ by F2. To verify the target model directly, filter the augmented total $\operatorname{Tot}P\to K$ by original complex degree. Its first page is $K$ in resolution degree zero and zero in higher resolution degrees because the augmented term columns in F1 are exact. Finite diagonals therefore make the augmentation a quasi-isomorphism. Each total term is a finite biproduct of projectives and hence projective, so this bounded-below total is the displayed supplied projective model for $M\otimes_R^{\mathbf L}K$. [F1, F2, F3, step 1.1]

3.1 F3 supplies strong convergence and the image filtration, with $F_{-1}=0$ and $F_{n-b}=H_n$ in total degree $n\ge b$. If $n<b$ the target is zero; for $n=b$ there is one possible quotient. Under DC or the corresponding supplied projective comparisons and homotopies, F1's naturality and resolution-independence assertion applies to this one-factor specialization; tensoring a comparison or homotopy with $M$ preserves its equations and the resolution-degree filtration. Hence the sequence is independent from $E^2$ onward and on the target under exactly the stated qualification. For a stalk $K$ this reduces to the ordinary Tor construction in F2, and zero $M$ gives zero throughout. [F1, F2, F3, step 2.1] ∎
