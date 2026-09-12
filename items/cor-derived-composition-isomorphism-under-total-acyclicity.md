---
id: "cor-derived-composition-isomorphism-under-total-acyclicity"
kind: "corollary"
title: "Derived composition isomorphisms under total acyclicity"
deps: ["thm-grothendieck-spectral-sequence", "def-g-acyclic-object-for-a-left-exact-functor", "def-dependent-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Theorem 5.8.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

In the Grothendieck setup, with its supplied-data/choice conventions, fix $A$. If $R^qF(A)=0$ for every $q>0$, then the lower edge gives $R^nG(F(A))\cong R^n(GF)(A)$. If every $R^qF(A)$, including $q=0$, is $G$-acyclic, then the upper edge gives $R^n(GF)(A)\cong G(R^nF(A))$. These isomorphisms hold for $n\ge0$ and are natural on inputs satisfying the relevant vanishing conditions.

## Facts & Assumptions

**Given:** The Grothendieck hypotheses and one of the two vanishing conditions above.

[F1] The Grothendieck page is $E_2^{p,q}=R^pG(R^qF(A))$ with finite normalized filtration and the stated canonical edges ([[thm-grothendieck-spectral-sequence]]).

[F2] $G$-acyclicity means vanishing in every positive derived degree ([[def-g-acyclic-object-for-a-left-exact-functor]]).

## Proof

1.1 Under the first condition all rows $q>0$ vanish, leaving $E_2^{p,0}=R^pG(F(A))$. Under the second condition F2 makes every column $p>0$ vanish, leaving $E_2^{0,q}=G(R^qF(A))$. The qualification including $q=0$ is needed to kill entries $E_2^{p,0}$ with $p>0$. In either case every differential $d_r$ for $r\ge2$ has zero source or target because it changes both coordinates. The same support is preserved on taking homology, hence $E_2=E_\infty$. [F1, F2]

2.1 The first case has one possible degree-$n$ quotient at filtration index $n$; the zero preceding quotients identify its filtration subobject with all of $H^n$. The second case has its sole quotient at index zero; the zero later quotients force $F^1H^n=0$. The normalized endpoints in F1 therefore identify the respective edges with the displayed isomorphisms. At $n=0$ both reduce to $GF(A)$, and if the sole quotient is zero the target is zero by the same finite argument. Naturality follows by restricting F1 to morphisms between inputs obeying the conditions. [F1, step 1.1] ∎
