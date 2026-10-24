---
id: "thm-existence-of-the-bounded-above-left-total-derived-functor"
kind: "theorem"
title: "Existence of the bounded above left total derived functor"
deps: ["def-left-total-derived-functor-on-the-bounded-above-derived-category", "lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism", "prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For additive $F:\mathcal A\to\mathcal B$ and supplied bounded-above projective replacements with the model-equivalence hypotheses, the replacement construction is a functor $LF:D^-(\mathcal A)\to D^-(\mathcal B)$ with the terminal universal property in its definition. Right exactness of $F$ is not needed for existence.

## Facts & Assumptions

**Given:** For additive $F:\mathcal A\to\mathcal B$ and supplied bounded-above projective replacements with the model-equivalence hypotheses, the replacement construction is a functor $LF:D^-(\mathcal A)\to D^-(\mathcal B)$ with the terminal universal property in its definition. Right exactness of $F$ is not needed for existence.

[F1] Supplied projective models and the augmentation specify the left total derived construction ([[def-left-total-derived-functor-on-the-bounded-above-derived-category]]).

[F2] Projective replacement comparisons are unique relative to augmentations ([[lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism]]).

[F3] An additive functor induces an exact functor on homotopy categories ([[prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories]]).

## Proof

1.1 Compose the supplied quasi-inverse $D^-(\mathcal A)\to K^-(\operatorname{Proj}\mathcal A)$ with $K(F)$ and $Q_{\mathcal B}$. These are functors, so this gives $LF$ on all arrows, including identities and zero complexes. The homotopy equality $p_Y\widetilde u=u p_X$ for an ordinary map makes $QF(p_X)$ a natural augmentation. [F1, F3]

2.1 Given $(G,\gamma)$, for a projective complex $P$ put $\mu_{QP}=\epsilon_P^{-1}\gamma_P$; the augmentation here is invertible by replacement comparison with $P\to P$. For general $X$ define $\mu_{QX}=LF(Qp_X)\mu_{QP_X}G(Qp_X)^{-1}$. This is meaningful since both functors take $Qp_X$ to isomorphisms. For a derived arrow, lift its conjugate between projective models; naturality of $\gamma$ on that ordinary homotopy-class map gives naturality of $\mu$ after conjugation. [F2, step 1.1, algebra]

3.1 Naturality of $\epsilon$ along $p_X$ and of $\gamma$ gives $\epsilon_X\mu_{QX}=\gamma_X$. Conversely this equation determines $\mu$ on projective complexes because $\epsilon_P$ is invertible, and naturality along $Qp_X$ forces the formula at every object. Thus the universal comparison exists uniquely. All uses of $F$ required only additivity and preservation of homotopies. [step 1.1, step 2.1, algebra] ∎
