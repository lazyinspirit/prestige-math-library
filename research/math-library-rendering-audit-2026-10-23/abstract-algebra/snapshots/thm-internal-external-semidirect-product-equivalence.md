---
id: thm-internal-external-semidirect-product-equivalence
kind: theorem
title: ' Recognition theorem: $G=NH$ with $N\trianglelefteq G$, $N\cap H=1$ exactly realises an external semidirect product'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-internal-semidirect-product, thm-external-semidirect-product-is-a-group, prop-canonical-subgroups-of-an-external-semidirect-product, thm-conjugation-is-an-automorphism, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: iff
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products, Definition 3.1 and Theorem 4.1"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement

Let $N,H\le G$. The conditions

$$N\trianglelefteq G,\qquad G=NH,\qquad N\cap H=\{1\}$$

hold if and only if both of the following hold: conjugation $\alpha_h(n)=hnh^{-1}$ restricts to an action $\alpha:H\to\operatorname{Aut}(N)$, and the resulting map

$$\Phi:N\rtimes_\alpha H\longrightarrow G,\qquad (n,h)\longmapsto nh$$

is an isomorphism carrying the canonical factors onto $N$ and $H$.

The first clause of the right-hand side is what makes $N\rtimes_\alpha H$ defined at all: without normality of $N$, the map $\alpha_h$ need not send $N$ into $N$.

## Facts & Assumptions

**Given:** Subgroups $N,H$ of a group $G$.

[L1] An internal semidirect product satisfies $N\trianglelefteq G$, $G=NH$, and $N\cap H=\{1\}$ ([[def-internal-semidirect-product]]).

[L2] Conjugation is an automorphism; normality of $N$ makes conjugation by $H$ restrict to $N$ ([[thm-conjugation-is-an-automorphism]]).

[L3] The external semidirect product is a group ([[thm-external-semidirect-product-is-a-group]]).

[L4] Its canonical factors have precisely the normality, product, intersection, and conjugation properties stated above ([[prop-canonical-subgroups-of-an-external-semidirect-product]]).

[L5] An isomorphism is a bijective homomorphism ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** iff.

1.1 [forward] Assume the three conditions in [L1]. By [L2], conjugation defines an action $\alpha:H\to\operatorname{Aut}(N)$, so the domain of $\Phi$ is a group by [L3]. [L1, L2, L3]

1.2 For $(n,h),(n',h')$ one has

$$\Phi((n,h)(n',h'))=n(hn'h^{-1})hh'=nhn'h'=\Phi(n,h)\Phi(n',h'),$$

so $\Phi$ is a homomorphism. It is surjective because $G=NH$. [step 1.1, L1, algebra]

2.1 If $nh=n'h'$, then $n^{-1}n'=hh'^{-1}\in N\cap H$, hence both sides are $1$; therefore $n=n'$ and $h=h'$. Thus $\Phi$ is injective, and step 1.2 makes it bijective and therefore an isomorphism by [L5]. [step 1.2, L1, L5, algebra]

3.1 [reverse] Conversely, assume conjugation restricts to $\alpha:H\to\operatorname{Aut}(N)$ and that $\Phi$ is such an isomorphism; the first assumption is what makes $N\rtimes_\alpha H$, and hence $\Phi$, defined. Transport the canonical-factor properties from [L4] through $\Phi$. The images are $N,H$, so the three conditions in [L1] hold. [L1, L4, L5] ∎
