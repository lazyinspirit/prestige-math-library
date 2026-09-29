---
id: rem-base-change-is-not-automatic
kind: remark
title: "Base change requires its actual map and hypotheses"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-affine-scheme-spectrum
  - def-base-change-map-cohomology
  - def-fibre-of-module-at-point
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-locally-free-sheaf-finite-rank
  - def-relative-projective-space-standard-charts
  - def-twisting-sheaf-proj
  - ex-cech-cocycle-projective-line-o-minus-two
  - ex-upper-semicontinuity-jumping-h0
  - thm-cohomology-and-base-change
  - thm-cohomology-projective-space-twisting-sheaves
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Remark

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and the Axiom of
Dependent Choice ([[def-dependent-choice]]) as required by the cited
cohomology-and-base-change theorem.

The cohomology and base-change map of [[def-base-change-map-cohomology]] is a
comparison between the fibre of a higher direct image and the cohomology of a
fibre of $f$: for $f:X\to S$, an $\mathcal O_X$-module $\mathcal F$, a point
$s\in S$ and $q\ge0$ it is the $\kappa(s)$-linear map
$$\varphi^q_s\colon (R^qf_*\mathcal F)(s)\longrightarrow H^q(X_s,\mathcal F_s),$$
where $(R^qf_*\mathcal F)(s)=(R^qf_*\mathcal F)_s\otimes_{\mathcal O_{S,s}}\kappa(s)$
is the fibre of the higher direct image at $s$
([[def-fibre-of-module-at-point]]). It is not a licence to commute cohomology
with arbitrary base change, and its hypotheses are exactly those of
[[thm-cohomology-and-base-change]]: $f$ proper of finite presentation over an
arbitrary base $S$, and $\mathcal F$ coherent and flat over $S$
([[def-flat-and-faithfully-flat-modules-and-ring-maps]]). Under them the
theorem states:

(i) $\varphi^q_s$ is surjective if and only if it is an isomorphism, and then
all base changes of $R^qf_*\mathcal F$ over a neighbourhood of $s$ are
isomorphisms, so the criterion is checked in the degree $q$ whose fibre
dimension is being computed;

(ii) assuming $\varphi^q_s$ is surjective, $R^qf_*\mathcal F$ is locally free
of finite rank in a neighbourhood of $s$ if and only if the adjacent map
$\varphi^{q-1}_s$ is surjective. The adjacent condition is automatic for
$q=0$; local freeness alone does not imply surjectivity of $\varphi^q_s$.

In particular the fibre dimension
$h^q(s)=\dim_{\kappa(s)}H^q(X_s,\mathcal F_s)$ equals the dimension of the
fibre of $R^qf_*\mathcal F$ at $s$ whenever the corresponding surjectivity
holds; equality of these dimensions alone does not imply surjectivity; the rank of a locally free $R^qf_*\mathcal F$ is not by itself a
formula for $h^q$, and the degree shift in the local-freeness criterion (ii)
must be respected.

**The hypotheses are not automatic.** Even a proper flat family with a
coherent sheaf flat over the base can have jumping fibre dimensions. Let $k$
be a field, let $S=\operatorname{Spec}k[a]$
([[def-affine-scheme-spectrum]]), let $X=\mathbb P^1_S$ be the relative
projective line ([[def-relative-projective-space-standard-charts]]) with
twisting sheaves $\mathcal O_X(d)$ ([[def-twisting-sheaf-proj]]) and
projection $f:X\to S$, which is proper, flat and of finite presentation, and
let $\mathcal E$ be the rank-two finite locally free $\mathcal O_X$-module
([[def-locally-free-sheaf-finite-rank]]) given by the extension
$$0\to\mathcal O_X(-2)\to\mathcal E\to\mathcal O_X\to0$$
whose extension class is $a$ times the generator $[1/(x_0x_1)]$ of
$H^1(\mathbb P^1_k,\mathcal O(-2))=k$
([[ex-cech-cocycle-projective-line-o-minus-two]],
[[thm-cohomology-projective-space-twisting-sheaves]]). The construction of
$\mathcal E$ and the computations of the fibre dimensions are carried out in
the companion example [[ex-upper-semicontinuity-jumping-h0]] of this frontier's
examples page, where it is shown that
$$h^0(\mathcal E_{(a)})=1\qquad\text{and}\qquad h^0(\mathcal E_u)=0\ \text{ for every }u\neq(a)\in S .$$
Now suppose that $\varphi^0_{(a)}$ were surjective. Then by the theorem, (i)
and (ii) with the degree $-1$ condition automatic for $q=0$, the sheaf
$R^0f_*\mathcal E=f_*\mathcal E$ would be locally free of finite rank on a
neighbourhood $U$ of the origin, with $\varphi^0_u$ an isomorphism for every
$u\in U$; the dimension of the fibre of $f_*\mathcal E$ at $u\in U$ is the
locally constant rank, so
$$h^0(\mathcal E_u)=\dim_{\kappa(u)}(f_*\mathcal E)(u)$$
would be constant after shrinking $U$ around the origin to a constant-rank neighbourhood. This contradicts the displayed jump
$h^0(\mathcal E_{(a)})=1$, $h^0(\mathcal E_u)=0$ for $u\neq(a)$.
Consequently $\varphi^0_{(a)}$ is not surjective, and in particular not an
isomorphism: properness and flatness of the family do not by themselves make
the base-change map an isomorphism, and the rank of a locally free
$R^qf_*\mathcal F$ cannot in general be used to compute $h^q$ without
checking the comparison map.
