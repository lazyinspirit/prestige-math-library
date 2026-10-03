---
id: cex-a-linear-representation-need-not-be-faithful
kind: counterexample
title: A linear representation need not be faithful
status: draft
origin: pipeline
deps: [cor-every-classical-braid-group-is-linear, def-braid-group-by-the-artin-presentation]
justified_by: []
aliases: []
dependency_level: 14
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Theorem 1.1, printed p. 471: faithfulness is the content of linearity, not a consequence of the existence of some representation"
    - title: "Kassel and Turaev, Braid Groups, Graduate Texts in Mathematics 247"
      url: "https://doi.org/10.1007/978-0-387-68548-9"
      locator: "Chapter 1: the Artin presentation and the endpoint permutation homomorphism B_n -> S_n with kernel the pure braid group"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Statement refuted

Exhibiting a finite-dimensional linear representation of a group already
exhibits a faithful one.

## Counterexample

**Given:** $n\ge2$, the classical braid group $B_n$ with its Artin presentation and
generators $\sigma_1,\dots,\sigma_{n-1}$
([[def-braid-group-by-the-artin-presentation]]), and a field $F$.

1.1 The endpoint permutation. Since the transpositions $s_i=(i\ i+1)\in S_n$ satisfy $s_is_{i+1}s_i=s_{i+1}s_is_{i+1}$ and $s_is_j=s_js_i$ for $|i-j|>1$, the assignment $\pi:B_n\to S_n$, $\pi(\sigma_i)=s_i$, respects the Artin presentation and is a homomorphism. Composing it with the standard permutation representation $S_n\to\mathrm{GL}_n(F)$ gives a linear representation $$\pi_F:B_n\longrightarrow\mathrm{GL}_n(F)$$ of degree $n$ over any field. [given, construct]

2.1 The kernel is nontrivial. The exponent-sum map $\varepsilon:B_n\to\mathbb Z$, $\varepsilon(\sigma_i)=1$, is well defined because every Artin relator has equal total exponent on both sides; hence $\varepsilon(\sigma_1^2)=2\ne0$ and $\sigma_1^2\ne1$ in $B_n$. The element $\sigma_1^2$ is pure: its image under $\pi$ is $s_1^2=1$. Therefore $\sigma_1^2$ is a nontrivial element of $\ker\pi$, and a fortiori of $\ker\pi_F$; for $n\ge2$ the kernel of the permutation representation is the nontrivial pure braid group. [given, step 1.1, algebra]

3.1 Linear does not mean faithful. Thus for every $n\ge2$ the group $B_n$ admits the linear representation $\pi_F$ of degree $n$ with $\ker\pi_F\ne1$. Linearity of $B_n$ is therefore not witnessed by an arbitrary representation: the content of [[cor-every-classical-braid-group-is-linear]] lies in the faithfulness of $\rho_{\mathrm{LKB}}$, not merely in the existence of a representation, and the claim stated above is refuted. [step 2.1, algebra] ∎
