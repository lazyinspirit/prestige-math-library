---
id: def-khovanov-seidel-bigrading-cover-and-local-intersection-indices
kind: definition
title: "Local indices and bigraded intersection numbers"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-khovanov-seidel-bigraded-cover-and-bigraded-curves
  - def-curves-and-geometric-intersection-numbers-on-the-marked-disk
  - def-the-laurent-polynomial-ring
  - lem-geometric-intersection-numbers-are-isotopy-invariants
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Section 3d"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Section 3d, printed pp. 24-26 (local indices, I^bigr and properties (B1)-(B4))"
verification:
  precheck: pass
---

## Definition

Assume AC ([[def-axiom-of-choice]]) for the supplied representative-independence
and isotopy-invariance assertions for $I$ used in (B1) and the proof below.
The local-index construction and finite Laurent sums require no additional choice.

Work in the situation of
[[def-khovanov-seidel-bigraded-cover-and-bigraded-curves]]: $(D,\Delta)$ is the
marked disk, $P$ the projectivized tangent bundle and
$\widetilde\pi\colon\widetilde P\to P$ the $\mathbb Z^2$-cover with deck action
$\chi$. Let $\widetilde c_0,\widetilde c_1$ be bigraded curves meeting
transversally at a point $z\in D^\circ\setminus\partial D$; $z$ may or may not
lie in $\Delta$.

**The local index.** Fix a small circle $l\subset D\setminus\Delta$ around $z$
and an embedded arc $\alpha\colon[0,1]\to l$ moving clockwise around $l$ with
$\alpha^{-1}(c_0)=\{0\}$ and $\alpha^{-1}(c_1)=\{1\}$, and choose a smooth path
$$\pi\colon[0,1]\longrightarrow P,\qquad \pi(t)\in P_{\alpha(t)},$$
over $\alpha$ from $T_{\alpha(0)}c_0$ to $T_{\alpha(1)}c_1$ which is never
tangent to $\alpha$, that is, $\pi(t)\ne T_{\alpha(t)}l$ for all $t$. Lift
$\pi$ to a path $\widetilde\pi\colon[0,1]\to\widetilde P$ with
$\widetilde\pi(0)=\widetilde c_0(\alpha(0))$; then necessarily
$\widetilde c_1(\alpha(1))=\chi(\mu_1,\mu_2)\widetilde\pi(1)$ for a unique
$(\mu_1,\mu_2)\in\mathbb Z^2$. The **local index** is
$$\mu^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1;z):=(\mu_1,\mu_2)\in\mathbb Z^2 .$$
It is independent of the choices of $l$, of the admissible $\alpha$, of the
path $\pi$ and of the chosen lift, by the proof below.

**The bigraded intersection number.** Let $\widetilde c_0,\widetilde c_1$ be
bigraded curves with $c_0\cap c_1\cap\partial D=\varnothing$. Choose a curve
$c_1'\simeq c_1$ in minimal intersection with $c_0$; by the free deck action on bigraded isotopy classes
(Khovanov--Seidel, Lemma 3.13, printed p. 24), there is a unique bigrading $\widetilde c_1'$ of $c_1'$ with
$\widetilde c_1'\simeq\widetilde c_1$ (the deck group acts freely on bigradings
of a fixed curve, and a fixed bigrading transported along an isotopy determines the
resulting bigraded isotopy class). Put
$$I^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1):= (1+q_1^{-1}q_2)\!\!\sum_{z\in(c_0\cap c_1')\setminus\Delta}\!\!q_1^{\mu_1(z)}q_2^{\mu_2(z)} +\!\!\sum_{z\in c_0\cap c_1'\cap\Delta}\!\!q_1^{\mu_1(z)}q_2^{\mu_2(z)}\in \mathbb Z[q_1^{\pm1},q_2^{\pm1}],$$
where $(\mu_1(z),\mu_2(z))=\mu^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1';z)$
and the coefficients lie in the two-variable Laurent polynomial ring
[[def-the-laurent-polynomial-ring]] (iterated once; its monomials
$q_1^{r_1}q_2^{r_2}$, $r_1,r_2\in\mathbb Z$, are units). The number
$I^{\mathrm{bigr}}$ is a Laurent polynomial: the intersection $c_0\cap c_1'$ is
finite and the sum is finite. For curves with
$c_0\cap c_1\cap\partial D\ne\varnothing$ the number is extended by the positive
boundary flow: take the flow $(f_t)$ of the boundary vector field, lift it to a
flow $(\widetilde f_t)$ on $\widetilde P$ with $\widetilde f_0=\mathrm{id}$, and
set
$$I^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1):= I^{\mathrm{bigr}}\bigl(\widetilde f_t(\widetilde c_0),\widetilde c_1\bigr) \qquad(t>0\text{ small}).$$

**Properties.** The following hold, and the first four are proved below.

- **(B1)** Setting $q_1=q_2=1$ and dividing by two recovers the ordinary
  geometric intersection number: $I^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1)|_{q_1=q_2=1}=2I(c_0,c_1)$
  ([[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]]).
- **(B2)** $I^{\mathrm{bigr}}(\widetilde f(\widetilde c_0),\widetilde f(\widetilde c_1))=I^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1)$
  for every actual $f\in\mathcal D=\operatorname{Diff}(D,\partial D;\Delta)$, with $\widetilde f$ the preferred lift; equivalently this holds for the induced mapping-class action on bigraded isotopy classes.
- **(B3)** $I^{\mathrm{bigr}}(\widetilde c_0,\chi(r_1,r_2)\widetilde c_1)=q_1^{r_1}q_2^{r_2}I^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1)$
  and $I^{\mathrm{bigr}}(\chi(-r_1,-r_2)\widetilde c_0,\widetilde c_1)=q_1^{r_1}q_2^{r_2}I^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1)$.
- **(B4)** If $c_0\cap c_1\cap\partial D=\varnothing$ and
  $I^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1)=\sum a_{r_1,r_2}q_1^{r_1}q_2^{r_2}$,
  then $I^{\mathrm{bigr}}(\widetilde c_1,\widetilde c_0)=\sum a_{r_1,r_2}q_1^{-r_1}q_2^{1-r_2}$.
- $I^{\mathrm{bigr}}$ is independent of the choices of $c_1'$ and
  $\widetilde c_1'$ and is an invariant of the isotopy classes of
  $(\widetilde c_0,\widetilde c_1)$.

## Facts & Assumptions
**Given:** AC and the marked disk $(D,\Delta)$, the projectivized tangent bundle $P$, the $\mathbb Z^2$-cover $\widetilde\pi\colon\widetilde P\to P$ with deck action $\chi$, bigraded curves $\widetilde c_0,\widetilde c_1$ transverse at $z$, and the local model of the annulus around $z$.

[L1] $\widetilde P\to P$ is a covering with deck group $\mathbb Z^2$ acting by $\chi$, and a bigrading of a curve is a continuous lift of the canonical section; the deck action and the preferred lifts $\widetilde f$ of actual diffeomorphisms in $\mathcal D$ act on bigraded curves ([[def-khovanov-seidel-bigraded-cover-and-bigraded-curves]]).

[L2] Under AC, $I(c_0,c_1)$ is independent of the minimal representative and is an isotopy invariant of curves, with the half-weight convention at marked endpoints and the positive flow extension ([[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]], [[lem-geometric-intersection-numbers-are-isotopy-invariants]]).

[L3] $\mathbb Z[q_1^{\pm1},q_2^{\pm1}]$ is the Laurent polynomial ring in two variables, obtained by iterating the one-variable construction; its monomials are units and finite Laurent coefficient sequences are unique, and $q_iq_i^{-1}=1$ gives the unit identities ([[def-the-laurent-polynomial-ring]]).

[L4] The tangent lines $T_{\alpha(0)}c_0$ and $T_{\alpha(1)}c_1$ are defined at the endpoints of $\alpha$; the fibre $P_{\alpha(t)}$ is a circle, the path $\pi$ is transverse to the circle-valued family $T_{\alpha(t)}l$, and a lift of $\pi$ exists with any prescribed initial point because $\widetilde\pi$ is a covering ([[def-khovanov-seidel-bigraded-cover-and-bigraded-curves]]).


[L5] Khovanov–Seidel Lemmas 3.2 and 3.3 (printed pp. 18–19) give relative comparison of nonisotopic minimal pairs and the two minimal models for isotopic arcs. Lemma 3.13 (printed p. 24) gives freeness of the deck action on bigraded isotopy classes. The type-VI entry of Lemma 3.20 (printed p. 32) is $1+q_2$ for the zero-shift basic arc. These exact literature inputs concern the smooth marked-disk conventions of this item (source URL in references).

## Proof

**Proof technique:** direct.

1.1 *The local index is well defined.* For a fixed clockwise arc $\alpha$, trivialize the projective tangent bundle along $\alpha$ so that its circle tangent line is a fixed forbidden point of $\mathbb RP^1$. The allowed fibre is $\mathbb RP^1\setminus\{\text{point}\}\cong\mathbb R$, so any two admissible paths with the prescribed endpoint tangent lines are homotopic through admissible paths relative to endpoints. Homotopy lifting then gives the same lifted endpoint and index. Shrinking the small circle and straightening the two curve germs yields homotopic data, so the index is independent of these choices. At a marked endpoint there is one clockwise sector. At an unmarked crossing there are two sectors; in the straight-line model a half-turn identifies them and acts trivially on projective tangent lines. Their base-path comparison is contained in an unmarked disk and their fibre paths agree, so they have identical monodromy after transporting the curve bigradings through the disk. Thus the two admissible sectors give the same index. These are the local models of Khovanov--Seidel printed p. 25, Figure 10. [L1, L4]

1.2 *Properties (B3) and (B4).* For (B3), replacing $\widetilde c_1$ by $\chi(r_1,r_2)\widetilde c_1$ adds $(r_1,r_2)$ to the endpoint of the lifted path, so by the definition of the local index and the deck action each $\mu^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1;z)$ is replaced by $\mu^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1;z)+(r_1,r_2)$, and the displayed sum is multiplied by $q_1^{r_1}q_2^{r_2}$ by [L3]; the second identity is the same computation with the roles of the two arguments exchanged. For (B4), assume minimal intersection and let $z$ be an intersection point; exchanging the two arguments reverses the direction of the arc $\alpha$ around $l$, so the local indices satisfy $\mu^{\mathrm{bigr}}(\widetilde c_1,\widetilde c_0;z)=(1,0)-\mu^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1;z)$ when $z\notin\Delta$ and $(0,1)-\mu^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1;z)$ when $z\in\Delta$, since reversing the direction adds the deck element corresponding to one full turn of the tangent line along the small circle, which is $(1,0)$ in the interior case and $(0,1)$ at a marked point; the interior contribution of $z$ to $I^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1)$ is $(1+q_1^{-1}q_2)q_1^{a}q_2^{b}$ with $(a,b)=\mu^{\mathrm{bigr}}(\widetilde c_0,\widetilde c_1;z)$, while the contribution of the same point to $I^{\mathrm{bigr}}(\widetilde c_1,\widetilde c_0)$ is $(1+q_1^{-1}q_2)q_1^{1-a}q_2^{-b}=q_1^{1-a}q_2^{-b}+q_1^{-a}q_2^{1-b}$, which is the sum of the two monomials obtained from the contributions of the original summand by applying the transformation $F(q_1,q_2)\mapsto q_2F(q_1^{-1},q_2^{-1})$; summing over the finitely many points (and treating marked endpoints the same way without the $(1+q_1^{-1}q_2)$ factor) gives the stated reversal rule. [L1, L3]

2.1 *B1, B2 and independence of minimal representatives.* Bigraded curves are arcs, by the obstruction computation in [L1]; there is no bigraded simple-closed-curve exceptional case. Setting $q_1=q_2=1$ makes each unmarked contribution $2$ and each marked-endpoint contribution $1$, so [L2] gives B1. For nonisotopic arcs, the relative minimal-position comparison of [L5] supplies an isotopy fixing $c_0$ setwise between minimal representatives. Lift that isotopy; its returned bigrading on $c_0$ equals the original by the free deck action on isotopy classes ([L5]), so it transports every local index unchanged. For isotopic arcs with no common boundary endpoint, both endpoints are marked; the isotopic-minimal-position statement of [L5] (Figure 5) reduces to the two small push-offs of the same arc. For a small self push-off with the transported bigrading, the two marked-end indices are $(0,0)$ and $(0,1)$. To compute them, straighten the arc near an endpoint $q$ and write $h(z)=(z-q)a(z)$ with $a$ nonvanishing on the small disk. In the clockwise sector the radial tangent and $z-q$ rotate together, so the first coordinate $h(z)^{-2}\zeta^2$ has zero winding. At one endpoint the clockwise comparison is the short sector, giving index $(0,0)$; at the other it differs from the bigrading transport by one clockwise full turn, giving endpoint index $(0,1)$ because $\mu$ compares the curve lift to the path lift. The other push-off exchanges the two ends. Thus a relative deck shift $(r_1,r_2)$ gives total contribution $q_1^{r_1}q_2^{r_2}(1+q_2)$. This also satisfies the reversal identity of step 1.2 and agrees with the source type-VI table in [L5]. Thus the two choices agree. This proves independence and bigraded isotopy invariance. For B2, an orientation-preserving diffeomorphism maps the small circle and clockwise sector to admissible local data after deformation; its deck-equivariant lift sends the endpoint relation defining the index to the identical relation, and preserves marked/unmarked points and minimal intersection. Hence it preserves each summand. The boundary-flow extension is compatible with these arguments: two sufficiently small positive pushes are joined by a flow interval with no endpoint passing, and transporting a field by a boundary-fixed diffeomorphism preserves its positive direction. Its lift starts at the identity, so no deck ambiguity occurs. [L1, L2, L3, L5, step 1.1, step 1.2]

3.1 *Conclusion.* The local index and the bigraded intersection number are well defined functions of the choices of bigradings and their isotopy classes, with the properties (B1)–(B4), and the definition is meaningful for all bigraded curves; AC is inherited through [L2] for ordinary intersection invariance; the local-index and finite-sum calculations require no additional choice. [L2, step 1.1, step 1.2, step 2.1] ∎ 