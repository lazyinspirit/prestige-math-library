---
id: ex-serre-duality-on-a-singular-projective-cm-curve
kind: example
title: "Coherent duality on a singular plane cubic"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-axiom-of-choice", "thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme", "lem-projective-pure-cm-dualizing-complex-concentration", "thm-regular-quotients-and-cohen-macaulayness", "thm-cohomology-projective-space-twisting-sheaves", "lem-projective-hypersurface-cohomology-sequence", "thm-flasque-sheaves-acyclic", "thm-dimension-and-parameters-for-modules", "thm-dimension-formula-for-affine-domains", "lem-affine-domain-chain-dimension-formula-step"]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-28.md"
      - "research/frontier-38-owner-30-alpha-batch-28-5a.md"
      - "research/frontier-38-owner-30-step5-hash-28-post.json"
    reviewed_raw_sha256: "4a93e45f085b7b5f69b074a659505b4fc1915818d16f8e137fb07a80229ee44c"
    content_sha256: "fbbda173bd214a2812e088eefdccb3e33cc7af18103335ef335f5fa6809cc88c"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Vakil 2025, Proposition 29.4.8 and Exercise 29.4.H: hypersurface canonical sheaf"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
    - title: "Stacks, Lemma 48.27.5: coherent duality on a CM curve"
      url: https://stacks.math.columbia.edu/tag/0FVZ
---

## Example

Assume AC. Over an algebraically closed field $k$ of characteristic zero, let $C\subset\mathbb P^2_k$ be the cubic $y^2z=x^2(x+z)$. It is an integral singular projective CM curve with $\omega_C\cong\mathcal O_C$. Its trace pairs $H^1(C,\mathcal O_C)=k$ perfectly with $H^0(C,\omega_C)=k$. At its node $p=[0:0:1]$, the coherent skyscraper $k_p$ satisfies $\operatorname{Ext}_C^1(k_p,\omega_C)=k$ and $\operatorname{Hom}_C(k_p,\omega_C)=0$, illustrating the coherent Ext theorem at a singular point.

## Verification

**Given:** $k,C,p$ and AC as above.

[F1] A regular parameter quotient of a CM ring is CM ([[thm-regular-quotients-and-cohen-macaulayness]]). Projective twisting cohomology is [[thm-cohomology-projective-space-twisting-sheaves]]. The structure sequence of a plane cubic and its cohomology are [[lem-projective-hypersurface-cohomology-sequence]]; flasque sheaves have no higher cohomology ([[thm-flasque-sheaves-acyclic]]).

[F2] The ambient Ext description of $\omega_C$ is [[lem-projective-pure-cm-dualizing-complex-concentration]], and coherent perfect duality is [[thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme]].

[F3] The affine-domain dimension formula and its prime-extension form compute local dimensions ([[thm-dimension-formula-for-affine-domains]], [[lem-affine-domain-chain-dimension-formula-step]]). A nonzero finite local module of dimension $e$ has a parameter tuple of length $e$ ([[thm-dimension-and-parameters-for-modules]]).

1.1 On $z=1$, the polynomial is $y^2-x^2(x+1)$. It is irreducible over $k(x)$ as a polynomial in $y$, since $x+1$ has odd valuation at $x=-1$ and hence is not a square; Gauss's lemma proves irreducibility in $k[x,y]$. The homogeneous polynomial is not divisible by $z$, and any homogeneous factorization would dehomogenize to a nontrivial factorization, so $C$ is integral and pure of dimension one. Its affine gradient vanishes at $(0,0)$ and its quadratic tangent cone is $y^2-x^2$, with two distinct lines. Thus $p$ is a node and $C$ is singular. In a regular ambient local ring along $C$, the nonzero hypersurface equation is regular and lowers dimension by one by [F3]. Lift a parameter tuple from the quotient and prepend the equation: [F3] makes this a parameter tuple of the ambient ring. The equation is therefore a regular parameter element, so [F1] makes $C$ CM. [F1, F3, given, algebra]

2.1 The resolution $0\to\mathcal O_{\mathbb P^2}(-3)\xrightarrow{f}\mathcal O_{\mathbb P^2}\to i_*\mathcal O_C\to0$ of [F1], dualized into $\omega_{\mathbb P^2}=\mathcal O(-3)$, has cokernel $i_*\mathcal O_C$ in degree one. Therefore [F2] gives $\omega_C=\mathcal O_C$. The same resolution and its long exact sequence [F1] give $H^0(C,\mathcal O_C)=k$ and $H^1(C,\mathcal O_C)=H^2(\mathbb P^2,\mathcal O(-3))=k$. The trace identifies the latter with $k$ and pairs it perfectly with the constants by [F2]. Finally $H^0(C,k_p)=k$ and $H^1(C,k_p)=0$, since a point sheaf has surjective restriction maps and is flasque, so [F1] applies. Apply [F2] with $d=1$ and $F=k_p$ to obtain the stated Ext and Hom groups. The example uses the A theorem for both pairings; singularity did not require a locally free hypothesis on $k_p$. [F1, F2, step 1.1, algebra] ∎
