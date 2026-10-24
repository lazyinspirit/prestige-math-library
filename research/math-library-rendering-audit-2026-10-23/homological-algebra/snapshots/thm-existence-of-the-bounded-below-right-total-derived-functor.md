---
id: "thm-existence-of-the-bounded-below-right-total-derived-functor"
kind: "theorem"
title: "Existence of the bounded below right total derived functor"
deps: ["def-right-total-derived-functor-on-the-bounded-below-derived-category", "prop-morphisms-into-a-homotopically-injective-complex-need-no-roof", "prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories"]
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

The supplied injective replacement construction for additive $F$ gives $RF:D^+(\mathcal A)\to D^+(\mathcal B)$ with its initial universal property. It is independent of the replacement system up to unique natural isomorphism compatible with coaugmentations. Before localization in the target it factors through $K^+(\mathcal B)$; its values agree with these models under the bounded embedding into $D(\mathcal B)$.

## Facts & Assumptions

**Given:** The supplied injective replacement construction for additive $F$ gives $RF:D^+(\mathcal A)\to D^+(\mathcal B)$ with its initial universal property. It is independent of the replacement system up to unique natural isomorphism compatible with coaugmentations. Before localization in the target it factors through $K^+(\mathcal B)$; its values agree with these models under the bounded embedding into $D(\mathcal B)$.

[F1] The injective-model equivalence defines the right total construction and its coaugmentation ([[def-right-total-derived-functor-on-the-bounded-below-derived-category]]).

[F2] Hom into a K-injective needs no roof ([[prop-morphisms-into-a-homotopically-injective-complex-need-no-roof]]).

[F3] An additive functor induces an exact functor on homotopy categories ([[prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories]]).

## Proof

1.1 Compose the supplied injective-model quasi-inverse with $K(F)$ and then $Q_{\mathcal B}$. This constructs the functor, and also its factorization before $Q_{\mathcal B}$. The identity $\widetilde u j_X=j_Yu$ in $K$ proves naturality of $\eta_X=QF(j_X)$. The construction includes zero complexes. [F1, F3]

2.1 For a second system $j'_X:X\to I'_X$, the no-roof bijection supplies a unique homotopy class $c_X:I_X\to I'_X$ with $c_Xj_X=j'_X$. The reverse comparison is inverse by uniqueness. The same uniqueness on conjugated derived arrows gives naturality after $F$. For an injective complex $I$, $j_I$ is therefore a homotopy equivalence and $\eta_I$ is invertible. [F2, step 1.1, algebra]

3.1 Given $(G,\gamma)$ put $\nu_{QI}=\gamma_I\eta_I^{-1}$ on injective complexes. On $X$ put $\nu_{QX}=G(Qj_X)^{-1}\nu_{QI_X}RF(Qj_X)$. Conjugating any derived arrow to its unique injective-model homotopy class proves naturality. Naturality along $j_X$ gives $\nu_{QX}\eta_X=\gamma_X$. Any such comparison must have the prescribed value on injectives and then on $X$, so it is unique. Applying this property to two replacement functors proves uniqueness of the isomorphism relative to coaugmentations. [F2, step 2.1, algebra]

4.1 The factorization in step 1.1 takes values in bounded-below complexes because $F$ preserves zero objects. The target localization and then the fully faithful bounded embedding send precisely this complex to its unbounded derived class. Thus the two descriptions agree; neither asserts an unbounded injective replacement theorem. [F1, step 1.1] ∎
