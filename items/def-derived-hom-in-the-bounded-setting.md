---
id: "def-derived-hom-in-the-bounded-setting"
kind: "definition"
title: "Derived hom in the bounded setting"
deps: ["thm-projective-complexes-model-the-bounded-above-derived-category", "thm-injective-complexes-model-the-bounded-below-derived-category", "prop-morphisms-from-a-homotopically-projective-complex-need-no-roof", "prop-morphisms-into-a-homotopically-injective-complex-need-no-roof", "def-hom-complex-of-chain-complexes"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.7.2–10.7.5 and Exercise 10.7.1, pp. 399–400"
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

Let $M\in D^-(\mathcal A)$ and $N\in D^+(\mathcal A)$, with termwise bounded representatives. With supplied bounded-above projective models under [[thm-projective-complexes-model-the-bounded-above-derived-category]], define $\mathbf R\operatorname{Hom}(M,N)=Q\underline{\operatorname{Hom}}(P_M,N)$. Alternatively, with supplied bounded-below injective models under [[thm-injective-complexes-model-the-bounded-below-derived-category]], use $Q\underline{\operatorname{Hom}}(M,I_N)$. The target is $D^+(\mathbf{Ab})$.

Here the cochain form of [[def-hom-complex-of-chain-complexes]] has degree-$r$ term $\prod_i\operatorname{Hom}(M^i,N^{i+r})$ and differential $du=d_Nu-(-1)^ru d_M$. If $M^i=0$ above $b$ and $N^j=0$ below $a$, nonzero factors require $a-r\leq i\leq b$, a finite interval, and the whole term is zero for $r<a-b$.

This construction is a bifunctor on the declared derived categories. Indeed homotopies in either variable induce Hom-complex homotopies. Replacing a projective model by a homotopy equivalent one therefore changes its Hom complex by a homotopy equivalence. A quasi-isomorphism in the target has acyclic cone, whose Hom from $P_M$ is acyclic by K-projectivity; hence the Hom map is a quasi-isomorphism. This also follows degree by degree from [[prop-morphisms-from-a-homotopically-projective-complex-need-no-roof]], which identifies each Hom-complex cohomology with the corresponding derived Hom. The injective argument uses [[prop-morphisms-into-a-homotopically-injective-complex-need-no-roof]] and reverses the roles of source and target. Thus both variables descend through localization. When both systems exist, the quasi-isomorphisms $\underline{\operatorname{Hom}}(P_M,N)\to\underline{\operatorname{Hom}}(P_M,I_N)\leftarrow\underline{\operatorname{Hom}}(M,I_N)$ give their natural identification. Either one-sided resolution hypothesis suffices.
