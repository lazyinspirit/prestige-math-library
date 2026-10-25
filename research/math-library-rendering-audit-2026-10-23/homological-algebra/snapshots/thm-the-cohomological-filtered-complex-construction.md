---
id: thm-the-cohomological-filtered-complex-construction
kind: theorem
title: The cohomological filtered complex construction
deps: ["def-cohomological-spectral-sequence", "thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology", "prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences", "def-cochain-complex-in-an-abelian-category", "prop-e-zero-is-the-associated-graded-complex", "prop-e-one-is-homology-of-the-associated-graded-complex"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---






## Statement

Let K be a cochain complex with decreasing filtration by subcomplexes. Set $C_n=K^{-n}$, $F_pC_n=F^{-p}K^{-n}$ and $d_n=d_K^{-n}$. Then
$$E_r^{p,q}(K)=E^r_{-p,-q}(C),\qquad d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}.$$
The construction gives $E_0^{p,q}=\operatorname{gr}^p K^{p+q}$ and $E_1^{p,q}\cong H^{p+q}(\operatorname{gr}^p K)$. With degreewise finite filtration it naturally abuts to the decreasing image filtration on $H^{p+q}(K)$, with $E_\infty^{p,q}\cong\operatorname{gr}^pH^{p+q}(K)$.

## Facts & Assumptions

**Given:** A decreasing filtered cochain complex K.

[F1] Negating both indices converts homological into cohomological spectral sequences ([[def-cohomological-spectral-sequence]]).

[F2] Finite filtered homological construction has natural graded-homology abutment ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

[F3] Filtered chain maps induce compatible maps on all pages ([[prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences]]).

[F4] A cochain complex has d raising degree and consecutive differential composite zero ([[def-cochain-complex-in-an-abelian-category]]).

[F5] The initial homological page is the associated graded complex ([[prop-e-zero-is-the-associated-graded-complex]]).

[F6] The first homological page is homology of that graded complex ([[prop-e-one-is-homology-of-the-associated-graded-complex]]).

## Proof

**Proof technique:** direct.

1.1 Since $F^{-(p+1)}K^{-n}\supseteq F^{-p}K^{-n}$, the specified $F_p$ is increasing. The cochain differential maps $K^{-n}\to K^{-n+1}=C_{n-1}$ and preserves that piece; its square is zero by [F4]. Thus this is a filtered chain complex. The index rule in [F1] turns the target $(-p-r,-q+r-1)$ into $(p+r,q-r+1)$. [F1, F4]

2.1 At r=0, the chain quotient at (-p,-q) is $F^pK^{p+q}/F^{p+1}K^{p+q}$. Its differential is induced by $d_K$, so its homology is $H^{p+q}(\operatorname{gr}^pK)$. The first-page identification in [F6] supplies the next-page isomorphism, giving the displayed $E_1$. Its square-zero property and every subsequent transition are preserved by the index substitution. [F1, F2, step 1.1, F5, F6]

3.1 Degreewise finite decreasing bounds become finite increasing bounds after negating their indices. Apply [F2] with chain degree −(p+q): its image filtration $F_{-p}H_{-(p+q)}(C)$ is precisely the image $H^{p+q}(F^pK)\to H^{p+q}(K)$. The next lower chain piece corresponds to $F^{p+1}$, giving the stated graded quotient. A filtered cochain map reindexes to a filtered chain map by the same formula; [F3] and the naturality in [F2] prove naturality of all identifications. [F2, F3, step 1.1, step 2.1] ∎

## Source notes

[Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Definition 5.2.3 p.123; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3 pp.91–92.
