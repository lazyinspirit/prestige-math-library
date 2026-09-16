---
id: ex-nonzero-d-three-in-the-k-ahss-for-rp-two-times-rp-four
kind: example
title: A nonzero d-three in the K-AHSS for RP-two times RP-four
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-first-possible-complex-k-ahss-differential-is-integral-sq-three, lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from complex K-theory and the finite field Kunneth calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Caleb Ji, The Atiyah–Hirzebruch Spectral Sequence, §3.2.4, Figure 2 and Proposition 3.12, printed pp. 11–12"
      url: https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf
      locator: "§3.2.4 and Proposition 3.12, printed pp. 11–12"
---

## Example

Assume AC. In the complex $K$-theory Atiyah–Hirzebruch spectral sequence for
$\mathbb{RP}^2\times\mathbb{RP}^4$, let $u$ and $v$ be the degree-one mod-two
generators and let $z=\beta_{\mathbb Z}(uv)\in H^3(-;\mathbb Z)$. Then
$$d_3(z)=\beta_{\mathbb Z}(uv^4)\ne0;$$
equivalently $d_3$ agrees with $\beta Sq^2\rho_2$ on this class. No complex
$K$-theory Künneth theorem or group-order argument is used.

## Facts & Assumptions

[A1] Assume AC. In the complex $K$-AHSS, $d_2=0$ and $d_3=\beta_{\mathbb Z}Sq^2\rho_2$ on all even coefficient rows ([[thm-first-possible-complex-k-ahss-differential-is-integral-sq-three]]).

[A2] Assume AC. For $u,v$ the degree-one mod-two generators one has $\beta_{\mathbb Z}Sq^2\rho_2(\beta_{\mathbb Z}(uv))=\beta_{\mathbb Z}(uv^4)\ne0$ ([[lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three]]).

## Verification

**Proof technique:** direct.

**Given:** Assume AC, the space $\mathbb{RP}^2\times\mathbb{RP}^4$, its $K$-AHSS, and $z=\beta_{\mathbb Z}(uv)\in H^3(-;\mathbb Z)$.

1.1 The class $z$ lies in $E_3^{3,-2}$: the coefficient row $-2$ is even and $H^3$ is the integral cohomology degree of the target, and by [A1] the differential $d_3$ on this row is the operation $\beta_{\mathbb Z}Sq^2\rho_2$. [A1, given]

2.1 By [A2] the value of that operation on $z=\beta_{\mathbb Z}(uv)$ is $\beta_{\mathbb Z}(uv^4)\ne0$. [A2, step 1.1]

3.1 Therefore $d_3(z)=\beta_{\mathbb Z}(uv^4)$ is nonzero, which exhibits a nonzero $d_3$ and shows that the $K$-AHSS does not collapse for this space. [A1, step 2.1]

4.1 Steps 1.1 and 3.1 verify the displayed nonzero value of $d_3$ without using a $K$-theory Künneth theorem. [step 3.1] ∎

## Source notes

Compare [Ji](https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf), §3.2.4, Figure 2 and Proposition 3.12, printed pp. 11–12, for the nonzero $d_3$ on $\mathbb{RP}^2\times\mathbb{RP}^4$.
