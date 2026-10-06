---
id: thm-good-reduction-and-smooth-proper-base-change
kind: theorem
title: "Good reduction, coherent base change, and unramified torsion"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-scheme
  - def-abelian-variety-over-a-field
  - def-dedekind-domain
  - def-good-reduction-and-abelian-scheme-model
  - def-arith-tate-module-and-inertia
  - def-base-change-map-cohomology
  - def-locally-free-sheaf-finite-rank
  - def-coherent-module-scheme
  - lem-good-reduction-stable-under-base-change
  - cor-good-reduction-admits-a-neron-model
  - thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre
  - lem-abelian-scheme-base-change-and-products
  - lem-abelian-scheme-universal-structure-sheaf-sections
  - thm-cohomology-and-base-change
  - thm-neron-model-existence-in-stated-class
  - thm-arith-neron-ogg-shafarevich-prime-to-residue-characteristic
  - lem-arith-abelian-scheme-torsion-specialization-unramified
  - lem-arith-prime-to-characteristic-multiplication-etale
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), Chapter 1 (good reduction) and 7.4/5 (Neron-Ogg-Shafarevich)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
    - title: "A. Grothendieck, EGA III (cohomology and base change)"
      url: "https://www.numdam.org/item/PMIHES_1963__17__5_0/"
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from the cohomology-and-base-change suppliers. Let $S$ be a Dedekind scheme with function field $K$, let $f:A\to S$ be an abelian scheme of relative dimension $g$, and let $A_K$ be its generic fibre. Then:

(a) [good reduction] $A_K$ is an abelian variety with good reduction over $S$, the abelian scheme model $A$ is unique up to a unique $S$-isomorphism inducing the specified identity on $A_K$, and $A$ is the Neron model of $A_K$; for every closed point $s\in S$ the fibre $A_s$ is an abelian variety of dimension $g$ over $\kappa(s)$.

(b) [base change] For every morphism $S'\to S$ the base change $A_{S'}\to S'$ is an abelian scheme of relative dimension $g$, it represents the base change of the good reduction data, and if $S'$ is a Dedekind scheme with function field $K'$ and $S'\to S$ is dominant so that $K\to K'$ is defined, then $A_{K'}$ has good reduction over $S'$.

(c) [coherent cohomology and base change] Fix $s\in S$, $q\ge0$ and a coherent $\mathcal O_A$-module $\mathcal F$ flat over $S$, and let $\varphi_s^q:(R^qf_*\mathcal F)(s)\to H^q(A_s,\mathcal F_s)$ be the cohomology-and-base-change map. If $\varphi_s^q$ is surjective, then there is an affine open neighbourhood $U\subseteq S$ of $s$ such that for every $T\to U$ the base-change map $h^*(R^qf_*\mathcal F|_U)\to R^qf'_{T*}(g_T^*\mathcal F)$ is an isomorphism; if moreover $\varphi_s^{q-1}$ is surjective, then $R^qf_*\mathcal F$ is finite locally free on a neighbourhood of $s$. For $q=0$ and $\mathcal F=\mathcal O_A$ the unit map $\mathcal O_S\to f_*\mathcal O_A$ is an isomorphism, with inverse evaluation along the identity section, and for $\mathcal F$ a line bundle flat over $S$ the higher direct images are finite locally free wherever the successive base-change maps are surjective.

(d) [residue restrictions] No restriction on the residue characteristic of $S$ is imposed in (a)-(c); the finite flatness conclusions in (c) are stated under the exact surjectivity hypotheses of the cohomology-and-base-change theorem, because fibrewise cohomology of smooth proper families need not be locally constant in residue characteristic $p>0$.

(e) [prime-to-residue-characteristic etale good reduction] Locally let $R$ be a discrete valuation ring, $K$ its fraction field and $k$ its residue field, $A_K$ an abelian variety and $\ell$ a prime different from $\operatorname{char}k$. Then $A_K$ has good reduction over $R$ if and only if inertia acts trivially on $T_\ell(A_K)$, equivalently on $A_K[\ell^\nu](K^{\mathrm{sep}})$ for every $\nu\ge1$.

## Facts & Assumptions

**Given:** AC and DC, a Dedekind scheme $S$ with function field $K$, an abelian scheme $f:A\to S$ of relative dimension $g$ with generic fibre $A_K$, and the base-change maps of [[def-base-change-map-cohomology]].

[F1] The generic fibre of an abelian scheme is an abelian variety of the same dimension, fibres of abelian schemes are abelian varieties, and base change of an abelian scheme is an abelian scheme of the same relative dimension ([[def-abelian-scheme]], [[def-abelian-variety-over-a-field]], [[lem-abelian-scheme-base-change-and-products]]).

[F2] An abelian scheme over a Dedekind scheme is the Neron model of its generic fibre, is unique as an abelian scheme model up to a unique isomorphism inducing the specified identity on the generic fibre, and every abelian variety with a good-reduction model admits a Neron model ([[thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre]], [[cor-good-reduction-admits-a-neron-model]], [[lem-good-reduction-stable-under-base-change]]).

[F3] Cohomology and base change for a proper finite-presentation morphism and a coherent sheaf flat over the base gives the following conclusions: surjectivity of the base-change map at a point propagates to an isomorphism on an affine neighbourhood for arbitrary test bases, and surjectivity in degrees $q$ and $q-1$ makes $R^qf_*\mathcal F$ finite locally free there ([[thm-cohomology-and-base-change]], [[def-locally-free-sheaf-finite-rank]]). The unit map $\mathcal O_S\to f_*\mathcal O_A$ and its inverse by identity-section evaluation are supplied by [[lem-abelian-scheme-universal-structure-sheaf-sections]]. The finite local freeness assertion for higher direct images uses the stated successive surjectivity hypotheses.

[F4] Every abelian variety over the fraction field of an arbitrary DVR has a finite-type Neron model by [[thm-neron-model-existence-in-stated-class]] (with AC and DC as assumed here). For such a model the local Neron-Ogg-Shafarevich criterion for $\ell\ne\operatorname{char}k$: good reduction, the Neron model being an abelian scheme, inertia-fixed $\ell$-power torsion and an unramified Tate module are equivalent ([[thm-arith-neron-ogg-shafarevich-prime-to-residue-characteristic]], [[def-arith-tate-module-and-inertia]]).

[F5] For an abelian scheme, $[\ell^\nu]$-torsion is finite etale of full rank and specializes to the geometric special torsion over a strict henselization ([[lem-arith-abelian-scheme-torsion-specialization-unramified]], [[lem-arith-prime-to-characteristic-multiplication-etale]]).

## Proof

**Proof technique:** direct: read (a) and (b) off the generic fibre, Neron uniqueness and base-change stability; specialize the cohomology-and-base-change theorem for (c)-(d); and invoke the local Neron-Ogg-Shafarevich criterion for (e).

1.1 Clause (a): the generic fibre $A_K$ is an abelian variety of dimension $g$ over the function field $K$ by [F1], and the abelian scheme $A$ itself is an abelian scheme model, so $A_K$ has good reduction over $S$ by definition; the fibre $A_s$ is an abelian variety of dimension $g$ for every closed $s\in S$ by [F1]. Any abelian scheme model of $A_K$ is a Neron model of $A_K$ by [F2], and such models are uniquely isomorphic compatibly with their specified generic-fibre identifications, so $A$ has exactly this compatible uniqueness and is the Neron model. [F1, F2, given, algebra]

1.2 Clause (b): for every $S'\to S$ the base change $A_{S'}\to S'$ is an abelian scheme of relative dimension $g$ and represents the base change of the model by [F1]; it is therefore again a good-reduction model. If $S'$ is Dedekind, $S'\to S$ dominant and $K'$ is its function field, then $A_{K'}$ has good reduction over $S'$ with model $A_{S'}$ by [F2]. [F1, F2, given, algebra]

1.3 Clause (c): the map $\varphi_s^q$ is the base-change map of [[def-base-change-map-cohomology]], and [F3] gives, under surjectivity, an affine open $U\ni s$ with $h^*(R^qf_*\mathcal F|_U)\to R^qf'_{T*}(g_T^*\mathcal F)$ an isomorphism for every $T\to U$, and under the additional surjectivity of $\varphi_s^{q-1}$ the finite local freeness of $R^qf_*\mathcal F$ on a neighbourhood. For $q=0$ the degree $-1$ surjectivity condition is automatic. For $q=0$ and $\mathcal F=\mathcal O_A$, [F3] identifies the unit map $\mathcal O_S\to f_*\mathcal O_A$ with inverse given by evaluation along the identity section; for a line bundle flat over $S$, the successive-surjectivity clause yields finite locally free higher direct images where the base-change maps are isomorphisms. [F3, given, algebra]

1.4 Clause (e): locally near a closed point of $S$ the base is a discrete valuation ring $R$ with fraction field $K$ and residue field $k$, and the arbitrary-DVR existence theorem in [F4] first supplies a finite-type Neron model for the abelian variety in (e). Applying the criterion in [F4] to that model gives the equivalence between good reduction of $A_K$ over $R$, the Neron model being an abelian scheme, pointwise inertia-fixed $\ell$-power torsion, and an unramified Tate module, for every $\ell\ne\operatorname{char}k$. For an abelian scheme model, [F5] shows that each $A[\ell^\nu]$ is finite etale of rank $\ell^{2g\nu}$ and commutes with every base change, specializing over a strict henselization to the special geometric torsion; this is the finite-torsion route to the criterion and claims no all-degree smooth-proper etale cohomology theorem. [F4, F5, given, algebra]

2.1 Clause (d): the arguments in steps 1.1–1.3 are the scheme-theoretic identity, base-change and cohomology-and-base-change statements, none of which restricts the residue characteristic; only the surjectivity hypotheses of the cohomology-and-base-change theorem are used in (c), which is exactly why the finite-flatness conclusions are stated conditionally. [F2, F3, step 1.1, step 1.2, step 1.3, algebra]

3.1 Combining steps 1.1–2.1 proves clauses (a)-(e); in particular both the coherent cohomology clauses (c)-(d) and the prime-to-residue-characteristic etale clause (e) are retained. [step 1.1, step 1.2, step 1.3, step 2.1, step 1.4, algebra] ∎ 
