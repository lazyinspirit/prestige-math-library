---
id: "ex-hypersurface-regularity-at-a-rational-point"
kind: "example"
title: "hypersurface regularity at a rational point"
deps: ["thm-localisation-and-polynomial-extension-of-regular-rings", "thm-quotient-and-lifting-regularity-across-a-regular-element"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Exercise 12.17, p.117; rational-point calculation removes the unnecessary algebraic-closure hypothesis"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: "draft"
origin: "pipeline"
generation:
  role: example
proof_strategy: "Explicit algebraic derivation"
---

## Example

Let $k$ be any field, $a\in k^n$, and $0\ne f\in k[x_1,\ldots,x_n]$ with $f(a)=0$. The local hypersurface ring at $a$ is regular if and only if at least one formal partial derivative $\partial f/\partial x_i$ is nonzero at $a$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-localisation-and-polynomial-extension-of-regular-rings]]: Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular. Regularity can equivalently be tested at maximal ideals. For every nonzero such ring, $\operatorname{gldim}R=\dim R$, allowing infinity. More generally, for a finite module over any commutative Noetherian ring, projective dimension is the supremum of its prime-local projective dimensions. Dedekind domains and their finite polynomial extensions are regular.

[F2] [[thm-quotient-and-lifting-regularity-across-a-regular-element]]: Let $(R,\mathfrak m)$ be nonzero Noetherian local. If $x\in\mathfrak m$ is a nonzerodivisor and $R/(x)$ is regular, then $R$ is regular and $x\notin\mathfrak m^2$. For every nonzerodivisor $x\in\mathfrak m$, $\dim(R/(x))=\dim R-1$. If $R$ is regular and $0\ne x\in\mathfrak m$, then $R/(x)$ is regular if and only if $x\notin\mathfrak m^2$.

## Verification

1.1 Translate coordinates $u_i=x_i-a_i$. The ambient local ring $S=k[u_1,\ldots,u_n]_{(u_1,\ldots,u_n)}$ is regular, with cotangent basis the $u_i$. It is a domain, so the nonzero polynomial $f$ is a nonzerodivisor. The quotient regularity criterion says $S/(f)$ is regular exactly when $f\notin\mathfrak m_S^2$. The hypotheses cannot hold for n=0, because then f is a nonzero constant. [F1, F2]

2.1 Monomial expansion after translation gives $f\equiv\sum_i(\partial f/\partial x_i)(a)u_i\pmod{\mathfrak m_S^2}$; the constant term vanishes. Independence of the cotangent basis makes this class nonzero precisely when at least one coefficient is nonzero. This proves both implications over every characteristic. It is a rational-point hypersurface statement and makes no assertion about smoothness over arbitrary residue-field extensions. [step 1.1, algebra] ∎
