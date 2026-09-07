---
id: "ex-ext-one-as-a-derived-category-morphism"
kind: "example"
deps: ["thm-ext-is-hom-in-the-derived-category"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.4.7 and 10.7.5, pp. 388, 400"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

For positive integers $m,n$, $\operatorname{Hom}_{D(\mathbf{Ab})}(\mathbb Z/m[0],\mathbb Z/n[1])\cong\mathbb Z/\gcd(m,n)$.

## Facts & Assumptions

**Given:** For positive integers $m,n$, $\operatorname{Hom}_{D(\mathbf{Ab})}(\mathbb Z/m[0],\mathbb Z/n[1])\cong\mathbb Z/\gcd(m,n)$.

[F1] Ext computed by a supplied projective resolution is derived Hom into the positive shift ([[thm-ext-is-hom-in-the-derived-category]]).

## Verification

1.1 Resolve $\mathbb Z/m$ by $P=(\mathbb Z\xrightarrow m\mathbb Z)$ in degrees $-1,0$, with its quotient augmentation. Since $m>0$ the first map is injective, so this is a projective resolution. Hom into $\mathbb Z/n$ has terms $\mathbb Z/n$ in degrees zero and one, and differential $-m$ with the cochain Hom convention. [F1, algebra]

2.1 Degree-one cohomology is $(\mathbb Z/n)/m(\mathbb Z/n)=\mathbb Z/(m\mathbb Z+n\mathbb Z)=\mathbb Z/\gcd(m,n)$. The Ext comparison identifies it with the claimed Hom group. If $m=1$ or $n=1$ the quotient is zero, as required for a zero input module. [F1, step 1.1, algebra] ∎
