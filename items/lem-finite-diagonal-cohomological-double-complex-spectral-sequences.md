---
id: "lem-finite-diagonal-cohomological-double-complex-spectral-sequences"
kind: "lemma"
title: "Finite-diagonal cohomological double-complex spectral sequences"
deps: ["thm-the-opposite-of-an-abelian-category-is-abelian", "thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex", "thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex", "thm-long-exact-sequence-in-cohomology"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Stacks Project, Lemmas 12.25.1 and 12.25.3, with explicit dual filtration conversion"
      url: "https://stacks.math.columbia.edu/tag/012X"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Let $C^{a,b}$ be a commuting double cochain complex in an abelian category, zero for $a<0$ or $b<0$. Put $T^n=\bigoplus_{a+b=n}C^{a,b}$ with $D=h+(-1)^av$. The decreasing filtrations by $a\ge p$ and by $b\ge p$ give spectral sequences with
$$ {}'E_1^{p,q}=H^q(C^{p,\bullet}),\qquad {}''E_1^{p,q}=H^q(C^{\bullet,p}).$$
The first $d_1$ is induced by $h$; the second by $(-1)^qv$. Both have $d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}$. Their stationary terms are $F^pH^{p+q}(T)/F^{p+1}H^{p+q}(T)$, where $F^pH^n(T)=\operatorname{im}(H^n(F^pT)\to H^n(T))$. For each $n\ge0$, $F^0H^n=H^n$ and $F^{n+1}H^n=0$. In particular convergence is strong with a finite filtration. A lower bound $a\ge c$ is allowed by translation, retaining original total degree $a+b$.

## Facts & Assumptions

**Given:** The bicomplex and two decreasing filtrations above.

[F1] The opposite of an abelian category is abelian ([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[F2] The homological column and row theorems compute the two pages and their finite image-filtration abutments ([[thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex]], [[thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex]]).

[F3] A short exact sequence of cochain complexes yields the long exact cohomology sequence ([[thm-long-exact-sequence-in-cohomology]]).

## Proof

1.1 Replace $v$ on column $a$ by $(-1)^av$. The mixed composites sum to $(-1)^ahv+(-1)^{a+1}vh=0$, and the new vertical arrow still squares to zero. Then regard the resulting cochain arrows as arrows in the opposite category. Thus the arrow from $C^{a-1,b}$ to $C^{a,b}$ becomes a homological arrow from bidegree $(a,b)$ to $(a-1,b)$ in the opposite category, with analogous vertical arrows. The square-zero and anticommuting identities are unchanged on reversing composition. The total complex there is the opposite of $T$. The increasing column cutoff through $p$ is the quotient $T/F^{p+1}T$ viewed as a subobject in the opposite category; the same holds for the row cutoff. [F1, given, algebra]

2.1 Apply both homological theorems in that category. Opposite-category homology is original-category cohomology, since kernel and cokernel exchange. Reversing a page arrow of bidegree $(-r,r-1)$ gives bidegree $(r,1-r)$. For the first page, the within-column differential is $(-1)^pv$. This constant sign does not change its kernel, image, or their canonical quotient, so vertical cohomology has its canonical quotient identification and the $d_1$ on that quotient is induced by $h$. For the row filtration the within-row differential is $h$ and the next differential on horizontal degree $q$ is $(-1)^qv$. [F2, step 1.1]

2.2 Translate the abutment precisely. An image subobject of $H_n(T^{\mathrm{op}})$ in the opposite category corresponds to the quotient of $H^n(T)$ by $\ker(H^n(T)\to H^n(T/F^{p+1}T))$. The long exact sequence for $0\to F^{p+1}T\to T\to T/F^{p+1}T\to0$ identifies this kernel with $F^{p+1}H^n(T)$. Thus the opposite of the successive quotient between cutoffs $p-1$ and $p$ is exactly $F^pH^n/F^{p+1}H^n$, proving the asserted abutment rather than an unrelated filtration. [F2, F3, step 1.1]

3.1 In total degree $n$ all summands have indices between zero and $n$, giving the stated endpoints; negative total degrees vanish. Finite filtrations are exhaustive and separated, and their quotient towers are eventually constant with value $H^n(T)$, so the completion map is an isomorphism. The first-quadrant bounds make both incident differentials eventually zero at each bidegree. These prove strong convergence, including zero and one-summand diagonals. If $a\ge c$, set $a'=a-c$ and replace $v$ by $(-1)^cv$; then $h+(-1)^{a'}((-1)^cv)=h+(-1)^av$. The normalized total degree is $n-c$, and translation back preserves the original target degree. All constructions use finite biproducts and prescribed signs; no choice is used. [F2, step 2.1, step 2.2] ∎
