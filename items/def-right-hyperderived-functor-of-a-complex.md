---
id: "def-right-hyperderived-functor-of-a-complex"
kind: "definition"
title: "Right hyperderived functor of a complex"
deps: ["lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense", "def-left-exact-and-right-exact-functor", "def-right-derived-object-relative-to-injective-resolution-data", "def-dependent-choice"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Definition 5.7.4 and cohomology variant 5.7.9, printed pp.147 and 149–150"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
---

## Definition

Let $F:\mathcal A\to\mathcal B$ be additive and [[def-left-exact-and-right-exact-functor|left exact]] between abelian categories. For a bounded-below complex $K$ with supplied Cartan–Eilenberg resolution $I$, define the **right hyperderived object relative to $I$** by
$$\mathbb R_I^nF(K)=H^n\bigl(\operatorname{Tot}(FI)\bigr),\qquad (FI)^{p,q}=F(I^{p,q}),\qquad D=F(h)+(-1)^pF(v).$$
Additivity preserves the two square-zero equations and the commuting square, so the total differential squares to zero. Each diagonal is finite, and the canonical finite-biproduct comparison identifies $\operatorname{Tot}(FI)$ with $F(\operatorname{Tot}I)$.

The [[lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense|totalization lemma]] gives a bounded-below termwise injective replacement $K\to\operatorname{Tot}I$. With its DC or supplied homotopy-extension qualification, this is a K-injective model, so the same formula is $H^n(RF(K))$. Without comparison data the subscript $I$ is retained: the definition alone asserts neither independence nor a choice of a resolution for every complex. This extends [[def-right-derived-object-relative-to-injective-resolution-data]]: an object in degree zero resolved in one column gives precisely $R_I^nF$ of that object.

If $K$ and the supplied resolution are zero, every value is zero. For lower bound $b$, the values vanish for $n<b$, and the total diagonal at $n=b$ has one term. Translating the first index to $p-b$ changes the total degree to $n-b$, not the original degree $n$ in the formula.
