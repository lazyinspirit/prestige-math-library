---
id: ex-skyscraper-etale-sheaf-is-constructible-not-lisse
kind: example
title: "A closed-point étale sheaf is constructible but not lisse"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-small-etale-site-of-a-scheme
  - lem-etale-coverings-form-a-grothendieck-site
  - def-etale-sheaf-of-finite-modules
  - lem-locally-constant-functions-sheafify-the-constant-etale-presheaf
  - def-lisse-etale-sheaf-of-finite-modules
  - def-constructible-etale-sheaf-of-finite-modules
  - thm-etale-morphisms-open-and-quasi-finite
  - lem-etale-inverse-image-preserves-geometric-stalks
  - thm-etale-over-algebraically-closed-field-discrete-smooth-points
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC through the published openness and algebraically-closed-field étale suppliers used to exclude lissity and analyze the closed stratum."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Sections 59.64 and 59.71"
      url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
    - title: "The Stacks Project, Étale Cohomology, Section 59.46, Closed immersions and pushforward"
      url: https://stacks.math.columbia.edu/tag/04E1
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, Section 14"
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
---

## Example

Assume AC. Let $k$ be an algebraically closed field, $X=\operatorname{Spec}k[t]$, $Z=V(t)\hookrightarrow X$, and $\Lambda=\mathbb F_2$. For every object $V\to X$ of $X_{\acute e t}$ define $\mathcal S(V)=\operatorname{LC}(|V\times_X Z|,\Lambda)$ with pointwise module operations and restrictions by base change. Let $\bar z:\operatorname{Spec}k\to X$ be the geometric point over $Z$, and let $\bar\eta:\operatorname{Spec}\Omega\to X$ be a geometric point over the generic point, where $\Omega$ is an algebraic closure of $k(t)$. A geometric stalk $\mathcal S_{\bar x}$ is the direct limit of sections over étale neighborhoods $(V,\bar v)$ of $\bar x$. Then $\mathcal S$ restricts to the constant sheaf $\underline\Lambda$ on $Z$ and to the zero sheaf on $X\setminus Z$, so it is constructible. Its stalks are $\mathcal S_{\bar z}=\Lambda$ and $\mathcal S_{\bar\eta}=0$, so $\mathcal S$ is not lisse.

## Example references

[The Stacks Project, Sections 59.64 and 59.71](https://stacks.math.columbia.edu/download/etale-cohomology.pdf)

[Milne, Lectures on Étale Cohomology, Chapter I, Section 14](https://www.jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** $X$, its closed point $Z$, the finite coefficient field $\Lambda$, and the presheaf described in the Example.

[F1] [[def-etale-sheaf-of-finite-modules]]: module sheaves satisfy the equalizer condition for étale covers.

[F2] [[lem-locally-constant-functions-sheafify-the-constant-etale-presheaf]]: locally constant functions form constant étale sheaves and glue along étale coverings.

[F3] [[def-constructible-etale-sheaf-of-finite-modules]]: a finite partition into locally closed strata with lisse restrictions is constructibility.

[F4] [[def-lisse-etale-sheaf-of-finite-modules]]: lisse means locally constant with finite module values.

[F5] [[thm-etale-morphisms-open-and-quasi-finite]]: under AC, étale morphisms are open.

[F6] [[lem-etale-inverse-image-preserves-geometric-stalks]]: the geometric stalk of the inverse-image sheaf at a point is the stalk of the original sheaf at its image point.

[F7] [[thm-etale-over-algebraically-closed-field-discrete-smooth-points]]: a finite-type étale scheme over an algebraically closed field is a finite disjoint union of copies of the field's spectrum.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F5] and [F7].

## Verification

**Given:** The functor $\mathcal S(V)=\operatorname{LC}(|V\times_X Z|,\Lambda)$ on étale $V\to X$.

1.1 If $\{V_i\to V\}$ is an étale covering family, base change gives an étale covering family $\{V_i\times_XZ\to V\times_XZ\}$. By [F2], compatible locally constant functions on these schemes glue uniquely to a locally constant function on $V\times_XZ$. The pointwise operations preserve the glued function, so $\mathcal S$ satisfies [F1] and is a sheaf of $\Lambda$-modules. [F1, F2, given, construct]

2.1 A germ of $\mathcal S$ at $\bar z$ is represented by a locally constant function on $V\times_XZ$ for an étale neighborhood $(V,\bar v)$ of $\bar z$. Evaluation at $\bar v$ gives an element of $\Lambda$. Every element is realized by a constant function, and if two representatives have the same value, their pullbacks agree on a smaller common étale neighborhood obtained from the fiber product of their neighborhoods; hence $\mathcal S_{\bar z}=\Lambda$. By [F6], the inverse-image sheaf $\mathcal S|_Z$ has geometric stalk $\Lambda$ at $\bar z$. Every point of an étale scheme $W\to Z=\operatorname{Spec}k$ has an affine open neighborhood of finite type over $k$, since étale morphisms are locally of finite presentation. By [F7] each such neighborhood is a finite disjoint union of copies of $Z$, so each point is open and $W$ is a disjoint union of copies of $Z$. The site $Z_{\acute e t}$ is therefore determined by its value at $Z$: the covering by point components and the sheaf condition give the product of those values. Its geometric stalk equals that value, so $\mathcal S|_Z\cong\underline\Lambda$. For any étale object $W\to X\setminus Z$, the fiber product $W\times_XZ$ is empty, so the restricted sheaf there is the zero module sheaf. These two locally closed strata give constructibility by [F3]. [F2, F3, F6, F7, step 1.1]

2.2 The open neighborhood $D(t)\to X$ of the generic point has empty fiber product with $Z$. Therefore every section of $\mathcal S$ on an étale object over $D(t)$ is zero, and the geometric stalk at the generic point is the zero module. [given, step 1.1]

3.1 Suppose $\mathcal S$ were lisse. A trivializing étale covering family has some member $V\to X$ with a point over the closed point, since the family is jointly surjective. By [F5], the image of $V$ is open. Since $X=\operatorname{Spec}k[t]$ is irreducible, every nonempty open subset contains its generic point; hence $V$ also has a point over the generic point. A constant sheaf on $V$ has isomorphic geometric stalks at these two points, contradicting the stalks $\Lambda\ne0$ and $0$ computed in steps 2.1–2.2. Thus $\mathcal S$ is not lisse. AC is used only through [F5]. [F4, F5, A1, step 2.1, step 2.2] ∎
