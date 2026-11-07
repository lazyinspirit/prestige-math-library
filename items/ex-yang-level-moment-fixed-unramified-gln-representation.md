---
dependency_level: 10
id: ex-yang-level-moment-fixed-unramified-gln-representation
kind: example
title: "The GL(3) × GL(2) Level Moment over Q at Prime Level 2"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-gln-last-row-congruence-subgroup-index
  - thm-yang-level-aspect-second-moment-glnplus1-gln
  - ex-ring-of-integers-of-q
  - thm-riemann-zeta-meromorphic-continuation
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula and L-functions for GL(n+1) × GL(n), Theorem 9.1, §9.1.1"
      url: "https://arxiv.org/pdf/2303.02225v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Example

Use the source’s normalization that the specified central characters are trivial on the positive real split center.

Take $F=\mathbb Q$, $n=2$, and $\mathfrak N=(2)$. Let $\pi'$ be a unitary cuspidal generic automorphic representation of $\mathrm{GL}_2(\mathbb A_\mathbb Q)$ unramified at every place, let $\omega$ be a unitary Hecke character of finite conductor dividing $(2)$, and take a test function $f=f_\infty\otimes f_{\mathrm{fin}}$ from Yang's level-moment test class at level $(2)$, with $f_\infty$ spherical. For the second-moment integral $M$ in Yang's theorem, the specialization is

$$M =24\,H^\heartsuit_{f_\infty}(\lambda_{\pi'_\infty})\Lambda(1,\pi',\mathrm{Ad})\log 2 +O_{\pi',f_\infty}(4).$$

Independently, the local subgroup $K_0(2)\subset\mathrm{GL}_3(\mathbb Z_2)$ has index seven, so its volume ratio to the maximal compact subgroup is $1/7$. This local factor is not identified with the global coefficient $24$.

Here $M$ is the full generic-spectrum integral in that theorem, including its basis sum, local $\alpha$- and $\beta$-weights, completed central Rankin–Selberg value, $L(\pi)$-denominator, archimedean transform, and Plancherel measure.

## Example references

[Liyang Yang, *Relative Trace Formula and L-functions for GL(n+1) × GL(n)*, Theorem 9.1, §9.1.1](https://arxiv.org/pdf/2303.02225v1)

## Facts & Assumptions

**Given:** The data in the Example and the level-aspect second-moment theorem.

[F1] [[thm-yang-level-aspect-second-moment-glnplus1-gln]]: for the stated $F,n,\mathfrak N,\pi',\omega,f$, the leading constant is $c_{F,f_\infty}=n(n+1)2^{r_2(n-1)}\pi^{-r_2}|D_F|^{n/2}\operatorname*{Res}_{s=1}\zeta_F(s)$.

[F4] [[thm-yang-level-aspect-second-moment-glnplus1-gln]]: the main term is $c_{F,f_\infty}H^\heartsuit_{f_\infty}(\lambda_{\pi'_\infty})\Lambda(1,\pi',\mathrm{Ad})|\mathfrak N|^n\log|\mathfrak N|$, with error $O_{F,\pi',f_\infty}(|\mathfrak N|^n)$.

[F2] [[ex-ring-of-integers-of-q]]: $\mathcal O_{\mathbb Q}=\mathbb Z$ and $D_{\mathbb Q}=1$.

[F3] [[thm-riemann-zeta-meromorphic-continuation]]: $\operatorname*{Res}_{s=1}\zeta_{\mathbb Q}(s)=1$.

[F5] [[lem-gln-last-row-congruence-subgroup-index]] gives the exact finite congruence-subgroup index.

## Verification

**Proof technique:** direct.

1.1 Since $F=\mathbb Q$ has no complex places, $r_2=0$; [F2] gives $|D_F|=1$, and [F3] gives the residue $1$. The ideal $(2)$ has norm $2$. [given, F2, F3, algebra]

2.1 Substituting $n=2$, $r_2=0$, $|D_F|=1$, and residue $1$ into [F1] gives $c_{\mathbb Q,f_\infty}=2\cdot3=6$. By [F4], the level factor is $|(2)|^2\log|(2)|=4\log2$, and the error is $O_{\pi',f_\infty}(4)$; hence the displayed expression follows. [F1, F4, given, step 1.1, algebra]

3.1 Apply [F5] with $m=3$, $e=1$ and $q=2$. It gives $[\mathrm{GL}_3(\mathbb Z_2):K_0(2)]=(2^3-1)/(2-1)=7$ and the relative volume $1/7$. This elementary calculation is independent of the still-held moment identity. [F5, algebra] ∎

The central-character normalization and remaining spectral/analytic obligations are those of the moment theorem; the displayed moment specialization remains conditional.

The level space is interpreted with its specified nebentypus character, not literal compact-subgroup invariance for a ramified central character; matching that convention to the held global theorem remains required.
