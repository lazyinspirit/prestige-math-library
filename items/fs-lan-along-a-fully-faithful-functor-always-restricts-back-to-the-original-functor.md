---
id: fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor
kind: false-statement
title: "FALSE: a left Kan extension along a fully faithful functor always restricts back to the original functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-kan-extension, thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise, def-full-faithful-and-essentially-surjective-functor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 6.2.17"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement refuted

That for every fully faithful $K:\mathcal C\to\mathcal D$ and every left Kan
extension $(L,\eta)$ of $F$ along $K$, the unit components
$\eta_c:F(c)\to L(Kc)$ are automatically isomorphisms.

The published positive theorem
[[thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise]]
shows this is true only under the pointwise hypothesis.

## Facts & Assumptions

**Given:** The discrete category $\mathcal A$ with objects $\ell$ and $r$; the walking span $\mathcal D$ with objects $\ell,m,r$ and non-identity arrows $s:m\to \ell$ and $t:m\to r$; the fully faithful inclusion $K:\mathcal A\hookrightarrow\mathcal D$; the category $\mathcal E$ with objects $L,L',M,R',R$, identities, and exactly four non-identity arrows $f:L\to L'$, $g:M\to L'$, $h:M\to R'$, and $k:R\to R'$; the functor $F:\mathcal A\to\mathcal E$ with $F(\ell)=L$ and $F(r)=R$; the functor $G:\mathcal D\to\mathcal E$ with $G(\ell)=L'$, $G(m)=M$, $G(r)=R'$, $G(s)=g$, and $G(t)=h$; and the natural transformation $\lambda:F\Rightarrow GK$ with components $\lambda_\ell=f$ and $\lambda_r=k$.

[F1] A left Kan extension is initial among pairs $(M,\alpha)$ with $\alpha:F\Rightarrow MK$ ([[def-left-and-right-kan-extension]]).

[F2] A fully faithful functor is bijective on each hom-set ([[def-full-faithful-and-essentially-surjective-functor]]).

[L1] If such a left Kan extension were pointwise, then the unit component at $r$ would be an isomorphism ([[thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise]]).

## Refutation

**Proof technique:** direct.

1.1 The inclusion $K$ is fully faithful because $\mathcal A$ is discrete and $\mathcal D$ has no non-identity arrows between the image objects $\ell$ and $r$, so each hom-set map is bijective as required by [F2]. [F2, given]

2.1 The pair $(G,\lambda)$ is a left Kan extension of $F$ along $K$. Let $M:\mathcal D\to\mathcal E$ and $\alpha:F\Rightarrow MK$. Because $\mathcal D$ has arrows $m\to \ell$ and $m\to r$, the object $M(m)$ must admit arrows to both $M(\ell)$ and $M(r)$. In $\mathcal E$ the only object with arrows to two targets is $M$, via $g:M\to L'$ and $h:M\to R'$. Therefore $M(m)=M$, $M(\ell)=L'$, $M(r)=R'$, and the two span arrows must be sent to $g$ and $h$. So $M=G$. Then $\alpha_\ell:L\to L'$ and $\alpha_r:R\to R'$ are forced to be $f$ and $k$, whence $\alpha=\lambda$. Since the only endomorphisms of $L'$, $M$, and $R'$ are identities, the only natural transformation $G\Rightarrow M=G$ is the identity. Thus $(G,\lambda)$ satisfies the universal property [F1]. [F1, step 1.1]

3.1 The components $\lambda_\ell=f:L\to L'$ and $\lambda_r=k:R\to R'$ are not isomorphisms, since $\mathcal E$ has no arrows $L'\to L$ or $R'\to R$. Therefore the unrestricted claim is false. By [L1], this also shows that the witness is not pointwise. [L1, step 2.1] ∎
