---
id: "rem-the-grothendieck-spectral-sequence-has-a-dual-left-derived-form"
kind: "remark"
title: "Dual left-derived Grothendieck spectral sequence"
deps: ["thm-grothendieck-spectral-sequence", "thm-the-opposite-of-an-abelian-category-is-abelian", "def-dependent-choice"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Weibel, Theorem 5.8.3, dual form"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
---

## Remark

Let $\mathcal A,\mathcal B,\mathcal C$ be abelian categories. For additive right-exact functors $F:\mathcal A\to\mathcal B$ and $G:\mathcal B\to\mathcal C$, assume enough projectives in $\mathcal A$ and $\mathcal B$ and that $F$ sends projectives to objects with $L_pG=0$ for $p>0$. Supply a projective resolution $P_\bullet\to A$, a projective Cartan–Eilenberg resolution of $F(P_\bullet)$, and the projective resolution comparisons and homotopies compatible with both Cartan–Eilenberg filtrations; alternatively assume DC in the same per-construction ambient-set convention so that these countable choices can be made. Then the dual sequence is
$$E^2_{p,q}=L_pG(L_qF(A))\quad\Longrightarrow\quad L_{p+q}(GF)(A),\qquad d_r:(p,q)\mapsto(p-r,q+r-1).$$
Its finite increasing filtration has $F_{-1}H_n=0$, $F_nH_n=H_n$ and associated graded $E^\infty_{p,n-p}$.

Indeed, [[thm-the-opposite-of-an-abelian-category-is-abelian]] permits application of [[thm-grothendieck-spectral-sequence]] to $F^{\mathrm{op}}$ and $G^{\mathrm{op}}$. Projective objects become injective, right exactness becomes left exactness, and a projective resolution becomes an injective resolution in the opposite category with the same nonnegative indices. The hypothesis on $L_pG$ is exactly the required acyclicity hypothesis there. Reversing the resulting arrows gives the displayed differential and filtration. This is the duality translation of the proved theorem, not a recorded unproved supplier. No separate duplicate construction is needed.

DC ([[def-dependent-choice]]) is used only for the dual countable projective resolution, Cartan–Eilenberg resolution, comparisons and homotopies when they are not supplied. There is no assertion of projective existence from enough injectives, and no choice of projective models for a proper class of inputs. The zero complex and degree-zero case translate without change. Weibel, Corollary 5.8.4, printed pp.151–152, gives precisely this dual form.
