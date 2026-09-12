---
id: lem-the-shifted-integrable-character-numerator-is-weyl-skew
kind: lemma
title: The shifted integrable character numerator is Weyl skew
deps: ["lem-the-kac-moody-denominator-is-weyl-skew", "def-kac-moody-integral-and-dominant-integral-weights", "def-integrable-kac-moody-module", "lem-integrability-can-be-checked-on-simple-root-sl2-subalgebras", "thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules", "thm-universal-property-and-pbw-character-of-kac-moody-verma-modules", "thm-kac-moody-verma-module-has-a-unique-simple-quotient", "def-simple-reflections-and-the-kac-moody-weyl-group", "def-contragredient-lie-algebra-before-the-maximal-ideal-quotient", "def-kac-moody-formal-character-completion"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Section 10.1
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Section 11.2
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Let $A$ be finite and symmetrizable and $\Lambda\in P^+$. Then $N=D\operatorname{ch}L(\Lambda)$ is Weyl skew: $wN=\det(w)N$ as coefficient arrays in the formal downward-cone completion. The character symmetry used here requires no AC.

## Facts & Assumptions

**Given:** The stated datum, and $V=L(\Lambda)$.

[F1] The denominator is skew by [[lem-the-kac-moody-denominator-is-weyl-skew]].

[F2] Dominant integral labels are defined in [[def-kac-moody-integral-and-dominant-integral-weights]].

[F3] Local nilpotence and weight decomposition mean [[def-integrable-kac-moody-module]].

[F4] Every vector lies in a finite-dimensional simple-root submodule by [[lem-integrability-can-be-checked-on-simple-root-sl2-subalgebras]].

[F5] $V$ is integrable by [[thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules]].

[F6] The dual reflection is $s_i h=h-\alpha_i(h)h_i$ by [[def-simple-reflections-and-the-kac-moody-weyl-group]].

[F7] The Cartan and simple-root brackets are [[def-contragredient-lie-algebra-before-the-maximal-ideal-quotient]].

[F8] Characters and finite coefficient multiplication are [[def-kac-moody-formal-character-completion]].

[F9] The Verma module belongs to $\mathcal O$ by [[thm-universal-property-and-pbw-character-of-kac-moody-verma-modules]], and $L(\Lambda)$ is its quotient by [[thm-kac-moody-verma-module-has-a-unique-simple-quotient]]; F8 makes quotients of $\mathcal O$-modules remain in $\mathcal O$.

## Proof

1.1 Fix $i$ and write $E=e_i,F=f_i,H=h_i$. By F2 and F5 the module has the local nilpotence in F3, while F8 and F9 give $V\in\mathcal O$ and hence well-defined finite-dimensional weight spaces. Thus $T=\exp(E)\exp(-F)\exp(E)$ is defined on each vector by finite sums. Its inverse is $\exp(-E)\exp(F)\exp(-E)$: each adjacent exponential cancellation is the finite binomial identity on a vector. F4 permits all computations involving $E,F,H$ on a finite-dimensional invariant subspace containing the vector under consideration. [F2, F3, F4, F5, F8, F9, algebra]

2.1 The brackets in F7 give conjugations $\exp(E)H\exp(-E)=H-2E$, $\exp(-F)H\exp(F)=H-2F$ and $\exp(-F)E\exp(F)=E+H-F$. These follow by expanding the finite exponentials, or by differentiating their polynomial conjugations and using the first two commutators. Consequently the successive conjugations of $H$ in $THT^{-1}$ are $H-2E$, then $-H-2E$, then $-H$. For an arbitrary $h\in\mathfrak h$, put $h^\perp=h-\alpha_i(h)H/2$. F7 makes $h^\perp$ commute with $E,F$, so $ThT^{-1}=h-\alpha_i(h)H=s_i h$. The polynomial identities hold on every vector by step 1.1; commutation with $h^\perp$ requires no finite-dimensional invariant space for the whole Cartan. [F6, F7, step 1.1, algebra]

3.1 If $v\in V_\mu$, step 2.1 and $s_i^2=1$ give $hTv=T(s_i h)v=\mu(s_i h)Tv$. Thus $T:V_\mu\to V_{s_i\mu}$ is an isomorphism, with the inverse from step 1.1. The two finite dimensions in F8 are equal, including when both spaces are zero. Hence $s_i\operatorname{ch}V=\operatorname{ch}V$ as coefficient arrays. [F6, F8, step 1.1, step 2.1, algebra]

4.1 Transform the coefficient sum for $D\operatorname{ch}V$ by $s_i$. Relabelling its pairs of exponents bijectively gives the coefficient sum for $(s_iD)(s_i\operatorname{ch}V)$; it is finite because its preimage is a coefficient sum of the original product, finite by F8. F1 and step 3.1 therefore give $s_iN=-N$. Iterating a finite word gives the claimed determinant sign. No assertion of an action on arbitrary completion elements is needed. All exponential identities were finite on each vector and no bases of infinitely many spaces were selected. [F1, F8, step 3.1, algebra] ∎
