---
id: ex-scheme-theoretic-image-dense-open-immersion
kind: example
title: "The scheme-theoretic image of a dense open immersion"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-scheme-theoretic-image, def-integral-scheme, def-open-immersion-schemes]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.6.7"
      url: "https://stacks.math.columbia.edu/tag/01R5"
---
## Example

Let $X$ be an integral scheme and let $j:U\hookrightarrow X$ be a dense open
immersion. Then the scheme-theoretic image of $j$ is $X$ itself. This does not
assume that $j$ is quasi-compact.

## Facts & Assumptions

**Given:** An integral scheme $X$ and a dense open immersion $j:U\hookrightarrow X$.

[F1] Every nonempty affine open of an integral scheme is the spectrum of a
domain [[def-integral-scheme]].

[F2] The scheme-theoretic image, when it exists, is the smallest closed
subscheme through which the morphism factors [[def-scheme-theoretic-image]].

## Verification

**Proof technique:** direct.

1.1 Let $Z\hookrightarrow X$ be a closed subscheme through which $j$ factors, and let $\mathcal I$ be its ideal sheaf. On a nonempty affine open $V=\operatorname{Spec}A$, every $a\in\mathcal I(V)$ restricts to zero on the dense open $U\cap V$. [given]

2.1 Choose a nonempty principal open $D(f)\subseteq U\cap V$. By [F1], $A$ is a domain and $f\ne0$; the equality $a/1=0$ in $A_f$ gives $f^na=0$ for some $n$, hence $a=0$. Thus $\mathcal I|_V=0$. [F1, step 1.1, choose]

3.1 The same holds on every nonempty affine open, while the empty opens carry only the zero ideal. Hence $\mathcal I=0$, so every closed factorization of $j$ contains $X$ itself. By [F2], the smallest such factorization is $X$. [F2, step 2.1] ∎
