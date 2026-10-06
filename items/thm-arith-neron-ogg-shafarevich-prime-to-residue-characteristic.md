---
id: thm-arith-neron-ogg-shafarevich-prime-to-residue-characteristic
kind: theorem
title: "The Neron-Ogg-Shafarevich criterion in residue characteristic prime to l"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-group-scheme-over-a-scheme
  - def-neron-model-and-mapping-property
  - def-discrete-valuation-ring
  - cor-morphisms-equal-on-dense-open-reduced-source
  - lem-arith-strict-henselian-etale-sections
  - lem-arith-dilatations-and-defect-of-smoothness
  - thm-differentials-smooth-locally-free
  - lem-arith-prime-to-characteristic-multiplication-etale
  - lem-arith-field-prime-to-characteristic-torsion-and-tate-module
  - lem-arith-special-fibre-torsion-growth-detects-properness
  - lem-arith-connected-smooth-quasiprojective-model-proper-special-fibre
  - lem-arith-group-model-with-abelian-generic-fibre-quasiprojective
  - lem-arith-abelian-scheme-torsion-specialization-unramified
  - lem-arith-smooth-group-identity-component-open
  - thm-neron-model-existence-in-stated-class
  - lem-neron-model-uniqueness-etale-base-change-and-local-nature
  - thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre
  - def-good-reduction-and-abelian-scheme-model
  - def-arith-tate-module-and-inertia
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 7.4/5 (Neron-Ogg-Shafarevich)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
    - title: "J.-P. Serre, J. Tate, Good reduction of abelian varieties, Ann. of Math. 88 (1968), Theorem 1"
      url: "https://doi.org/10.2307/1970722"
---

## Statement

Assume AC and DC as inherited from the stated suppliers. Let $R$ be a discrete valuation ring with fraction field $K$ and residue field $k$, let $A/K$ be an abelian variety of dimension $g$ with finite-type Neron model $N/R$ ([[thm-neron-model-existence-in-stated-class]], [[def-neron-model-and-mapping-property]]), and let $\ell\ne\operatorname{char}k$ be a prime. Then the following are equivalent:

(a) $A$ has good reduction over $R$, i.e. there is an abelian scheme over $R$ with generic fibre $A$ ([[def-good-reduction-and-abelian-scheme-model]]);

(b) the Neron model $N$ is an abelian scheme over $R$;

(c) all the torsion groups $A[\ell^\nu](K^{\mathrm{sep}})$, $\nu\ge1$, are fixed pointwise by the inertia group $I\subseteq\operatorname{Gal}(K^{\mathrm{sep}}/K)$;

(d) the Tate module $T_\ell A$ is unramified at $R$ ([[def-arith-tate-module-and-inertia]]).

## Facts & Assumptions

**Given:** AC and DC, a discrete valuation ring $R$ with fraction field $K$, residue field $k$ and strict henselization $R^{\mathrm{sh}}$, an abelian variety $A/K$ of dimension $g$, its finite-type Neron model $N/R$, and a prime $\ell\ne\operatorname{char}k$.

[F1] An abelian scheme over $R$ with generic fibre $A$ is a Neron model of $A$, and Neron models of smooth separated finite-type $K$-schemes are unique up to a unique $R$-isomorphism inducing the identity on generic fibres ([[thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre]], [[lem-neron-model-uniqueness-etale-base-change-and-local-nature]]).

[F2] For an abelian scheme $B/R$ of relative dimension $g$ and $\ell\ne\operatorname{char}k$, each $B[\ell^\nu]$ is finite etale over $R$ of rank $\ell^{2g\nu}$, and over $R^{\mathrm{sh}}$ specialization identifies its geometric generic points with its special separable points; the inertia group acts trivially on $B[\ell^\nu]$ and on the Tate module ([[lem-arith-abelian-scheme-torsion-specialization-unramified]], [[lem-arith-prime-to-characteristic-multiplication-etale]]).

[F3] For a field $F$ and $\ell\ne\operatorname{char}F$, $A[\ell^\nu](F^{\mathrm{sep}})\cong(\mathbb Z/\ell^\nu)^{2g}$ and $T_\ell(A)$ is free of rank $2g$; an automorphism of $F^{\mathrm{sep}}$ over $F$ acts trivially on $T_\ell(A)$ if and only if it acts trivially on every $A[\ell^\nu](F^{\mathrm{sep}})$ ([[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]], [[def-arith-tate-module-and-inertia]]).

[F4] Over a strictly henselian local ring with separably closed residue field, a separated etale finite-type scheme $H$ satisfies $H(R)\cong H(k)$ by reduction. A Neron model has the extension property for etale local points; for $R^{\mathrm{sh}}$ this follows by finite-stage approximation, and separatedness makes $N(R^{\mathrm{sh}})\to A(K^{\mathrm{sh}})$ bijective ([[lem-arith-strict-henselian-etale-sections]], [[lem-neron-model-uniqueness-etale-base-change-and-local-nature]], [[def-neron-model-and-mapping-property]]).

[F5] If $G$ is a smooth commutative finite-type group scheme of dimension $g$ over a field of characteristic $\ne\ell$ with $|G[\ell^\nu](\bar k)|=\ell^{2g\nu}$ for every $\nu\ge1$, then $G^0$ is an abelian variety; a smooth separated finite-type quasi-projective $R$-scheme with abelian generic fibre and proper geometrically connected special fibre is proper over $R$ and an abelian scheme on its identity component; a smooth group scheme over a discrete valuation ring has an open identity component with connected generic and special fibres ([[lem-arith-special-fibre-torsion-growth-detects-properness]], [[lem-arith-connected-smooth-quasiprojective-model-proper-special-fibre]], [[lem-arith-group-model-with-abelian-generic-fibre-quasiprojective]], [[lem-arith-smooth-group-identity-component-open]]).

[F6] The Neron group scheme $N$ is commutative: its generic group law is commutative, and the two multiplication morphisms $N\times_RN\to N$ agree on the schematically dense generic fibre because $N$ is separated ([[cor-morphisms-equal-on-dense-open-reduced-source]]). For a smooth commutative $R$-group scheme, if $n$ is a unit then $[n]:N\to N$ is etale: its differential at the identity is multiplication by $n$ on the locally free Lie module, and translations identify the differential at every point; apply the equal-relative-dimension criterion ([[def-group-scheme-over-a-scheme]], [[thm-differentials-smooth-locally-free]], [[lem-arith-dilatations-and-defect-of-smoothness]]). Its kernel is therefore a separated etale finite-type $R$-scheme, though it need not be finite.

## Proof

**Proof technique:** direct: reduce good reduction to the Neron model, identify special-fibre torsion through etale sections over the strict henselization, and detect properness of the identity component by prime-to-characteristic torsion growth.

1.1 (a)$\Leftrightarrow$(b). If $A$ has good reduction with abelian scheme model $B$, then $B$ is a Neron model of $A$ by [F1], so $B\cong N$ by uniqueness and $N$ is an abelian scheme. Conversely if $N$ is an abelian scheme over $R$ with generic fibre $N_K\cong A$, then $N$ is an abelian scheme model of $A$, i.e. (a) holds. [F1, given, algebra]

1.2 (c)$\Leftrightarrow$(d). By definition of the inertia group and of the unramified Tate module [F3], $I$ acts trivially on $T_\ell A=\varprojlim_\nu A[\ell^\nu](K^{\mathrm{sep}})$ if and only if it acts trivially on every finite quotient $A[\ell^\nu](K^{\mathrm{sep}})$, which is precisely (c). [F3, given, algebra]

1.3 (c)$\Rightarrow$(b). Assume all $\ell^\nu$-torsion is inertia-fixed. By [F6], multiplication by $\ell^\nu$ on the smooth group scheme $N$ is etale, so its kernel $N[\ell^\nu]$ is a separated etale finite-type $R$-scheme. We do not need this kernel to be finite: over $R^{\mathrm{sh}}$, [F4] gives the reduction bijection
$$N[\ell^\nu](R^{\mathrm{sh}})\xrightarrow{\sim}N_k[\ell^\nu](k^{\mathrm{sep}}).$$
The weak Neron property and separatedness identify $N(R^{\mathrm{sh}})$ with $A(K^{\mathrm{sh}})$, compatibly with the group laws. Therefore
$$N_k[\ell^\nu](k^{\mathrm{sep}})\cong A(K^{\mathrm{sh}})[\ell^\nu]=A[\ell^\nu](K^{\mathrm{sep}})^I=A[\ell^\nu](K^{\mathrm{sep}}),$$
where $K^{\mathrm{sh}}=(K^{\mathrm{sep}})^I$ and the last equality is hypothesis (c). By [F3], this set has cardinality $\ell^{2g\nu}$. Now apply [F5] to the smooth commutative finite-type special fibre $N_k$ of dimension $g$: its identity component $N_k^0$ is an abelian variety, hence proper. [F3, F4, F6, construct]

2.1 (b)$\Rightarrow$(c). If $N$ is an abelian scheme, [F2] gives that each $N[\ell^\nu]$ is finite etale of rank $\ell^{2g\nu}$ over $R$ and that inertia acts trivially on the geometric torsion points; under the identification $A[\ell^\nu](K^{\mathrm{sep}})=N[\ell^\nu](K^{\mathrm{sep}})$ this is exactly the pointwise invariance of (c). [F2, step 1.1, algebra]

2.2 The identity component $N^0$ is an open smooth separated finite-type $R$-subgroup scheme with generic fibre $A$ and geometrically connected special fibre $N_k^0$ [F5]. It is quasi-projective by [F5], so the connected-model properness criterion makes it proper over $R$; a smooth proper $R$-group scheme with abelian generic fibre of dimension $g$ is an abelian scheme. By [F1], this abelian scheme $N^0$ is a Neron model of $A$. Both $N$ and $N^0$ are now Neron models of the same generic fibre, so uniqueness [F1] identifies them; hence $N$ is an abelian scheme, proving (b). [F1, F5, step 1.3, algebra]

3.1 The implications (a)$\Leftrightarrow$(b) (step 1.1), (b)$\Rightarrow$(c) (step 2.1), (c)$\Leftrightarrow$(d) (step 1.2) and (c)$\Rightarrow$(b) (steps 1.3 and 2.2) close the cycle, proving the equivalence of (a)–(d). [step 1.1, step 2.1, step 1.2, step 2.2, algebra] ∎ 
