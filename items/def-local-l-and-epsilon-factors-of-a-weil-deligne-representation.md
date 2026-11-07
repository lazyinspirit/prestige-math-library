---
id: def-local-l-and-epsilon-factors-of-a-weil-deligne-representation
kind: definition
title: "Local L- and ε-factors of a Weil–Deligne representation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-weil-deligne-representation-of-a-local-field
  - lem-nonarchimedean-tate-zeta-integral-and-fourier-functional-equation
  - cor-existence-of-left-and-right-haar-measures
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-local-artin-reciprocity-map
  - thm-local-artin-reciprocity-and-norm-index
  - thm-local-artin-unramified-frobenius-normalization
  - thm-local-artin-reciprocity-identifies-the-weil-group-abelianization
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Torsten Wedhorn, The Local Langlands Correspondence for GL(n) over p-adic Fields, §3.2.1"
      url: "https://arxiv.org/pdf/math/0011210"
    - title: "Pierre Deligne, Les constantes des équations fonctionnelles des fonctions L, §§2–4, 5.1, 5.5 and 8.12"
      url: "https://publications.ias.edu/sites/default/files/Number20.pdf"
    - title: "Masao Oi, Introduction to the Local Langlands Correspondence, §§6.1 and 6.5"
      url: "https://masaooi.github.io/LLC.pdf"
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter III §§1–3"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. Let $K$ be a nonarchimedean local field with residue field of cardinality $q$, Weil group $W_K$, inertia subgroup $I_K$, and geometric Frobenius coset $\Phi_K$. Let $(r,V,N)$ be an $n$-dimensional Frobenius-semisimple Weil–Deligne representation over $\mathbb C$, and choose any lift $\Phi\in W_K$ of $\Phi_K$. The defining relation implies $Nr(w)=|w|_K^{-1}r(w)N$, so $\ker N$ is $W_K$-stable; hence $(\ker N)^{I_K}$ is a subspace of $V^{I_K}$. The local $L$-factor is
$$L_K(s,(r,V,N))=\det\!\left(1-q^{-s}r(\Phi)\mid(\ker N)^{I_K}\right)^{-1},$$
where $V^{I_K}$ denotes the vectors fixed by inertia; the determinant is independent of the lift because inertia acts trivially on $(\ker N)^{I_K}$.

Fix a nontrivial continuous unitary additive character $\psi:K\to\mathbb C^\times$. Let $dx_\psi$ be the additive Haar measure for which the Fourier transform $\widehat f(y)=\int_K f(x)\psi(xy)\,dx_\psi$ satisfies $\widehat{\widehat f}(x)=f(-x)$, and let $d^\times x$ be the multiplicative Haar measure on $K^\times$ normalized by $\operatorname{vol}(\mathcal O_K^\times)=1$. For a continuous character $\chi:K^\times\to\mathbb C^\times$, put
$$L_K(s,\chi)=\begin{cases}(1-\chi(\pi_K)q^{-s})^{-1},&\chi|_{\mathcal O_K^\times}=1,\\1,&\chi|_{\mathcal O_K^\times}\ne1.\end{cases}$$
For locally constant compactly supported $f:K\to\mathbb C$, put $Z(s,f,\chi)=\int_{K^\times}f(x)\chi(x)|x|_K^s\,d^\times x$. Tate's one-dimensional local epsilon factor $\epsilon_K(s,\chi,\psi)$ is the scalar in the local functional equation
$$\frac{Z(1-s,\widehat f,\chi^{-1})}{L_K(1-s,\chi^{-1})}=\epsilon_K(s,\chi,\psi)\frac{Z(s,f,\chi)}{L_K(s,\chi)}.$$
For a one-dimensional Weil representation $r$, its corresponding character of $K^\times$ is $r\circ\operatorname{Art}_{K,\mathrm{LL}}$, and use the Tate factor just defined. Deligne's epsilon factor $\epsilon(s,r,\psi,dx_\psi)$ is the factor of the Weil representation $r$ after twisting by $|\cdot|_K^s$; it is characterized by the Tate factors in dimension one, multiplicativity in exact sequences, and induction for virtual representations of dimension zero. Define the Weil–Deligne epsilon factor by the monodromy formula
$$\epsilon_K(s,(r,V,N),\psi)=\epsilon(s,r,\psi,dx_\psi)\det\!\left(-q^{-s}r(\Phi)\mid V^{I_K}/(\ker N)^{I_K}\right).$$
For the one-dimensional normalization, use the local Artin map $\operatorname{Art}_{K,\mathrm{LL}}:K^\times\to W_K^{\mathrm{ab}}$ satisfying $\operatorname{Art}_{K,\mathrm{LL}}(\pi_K)=\Phi_K$ for every uniformizer $\pi_K$; if the local Artin map is stated with arithmetic Frobenius, then $\operatorname{Art}_{K,\mathrm{LL}}(x)=\operatorname{Art}_{K,\mathrm{arith}}(x^{-1})$.

## Definition references

[[def-weil-deligne-representation-of-a-local-field]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-local-artin-reciprocity-map]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[thm-local-artin-unramified-frobenius-normalization]]

[[thm-local-artin-reciprocity-identifies-the-weil-group-abelianization]]

[J. S. Milne, *Class Field Theory*, Chapter III §§1–3](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Torsten Wedhorn, *The Local Langlands Correspondence for GL(n) over p-adic Fields*, §3.2.1](https://arxiv.org/pdf/math/0011210)

[Pierre Deligne, *Les constantes des équations fonctionnelles des fonctions L*, §§2–4, 5.1, 5.5 and 8.12](https://publications.ias.edu/sites/default/files/Number20.pdf)

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §§6.1 and 6.5](https://masaooi.github.io/LLC.pdf)

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]


## Facts & Assumptions

**Given:** The Axiom of Choice.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A2] [[def-dependent-choice]]: DC is the principle that every serial relation on a nonempty set has an infinite successor sequence from each prescribed initial point.

[F1] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF, AC implies DC, so the local reciprocity supplier’s DC hypothesis follows from the stated AC branch.

## Scalar equation and remaining construction limits

The spectral twist applies to the monodromy determinant as well as to the Weil factor: on the quotient of dimension $d=\dim V^{I_K}-\dim(\ker N)^{I_K}$ it contributes $q^{-sd}$. Deligne's §5.1 relates $\epsilon$ to $\epsilon_0$ by the inverse determinant on inertia invariants; §8.12, formula (8.12.4), uses the inverse determinant on the monodromy kernel. Taking their ratio gives the quotient determinant with the spectral variable included. Wedhorn §3.2.1 prints this determinant without that variable; we use Deligne's normalization here. This correction does not supply the higher-dimensional construction.

The scalar Tate equation for multiplicative characters, including the self-dual additive normalization, rational continuation and nonzero finite Gauss factor, is proved in [[lem-nonarchimedean-tate-zeta-integral-and-fourier-functional-equation]]. Its Haar data are exactly those fixed above; it adds no analytic hypothesis. Under the Definition's AC convention, additive and multiplicative Haar measures exist by [[cor-existence-of-left-and-right-haar-measures]]; the local groups are locally compact because their valuation/unit balls are compact open, as proved by the finite-residue argument in that scalar lemma. The Artin–Weil conversion in both characteristics is now proved by [[thm-local-artin-reciprocity-identifies-the-weil-group-abelianization]] at this Definition's AC scope. The higher-dimensional Deligne factor's existence, induction compatibility and independence remain explicit construction obligations. The scalar proof does not make this entire Definition ready or prove a ramified higher-rank LLC theorem.
