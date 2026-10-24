---
id: lem-point-divisor-exact-sequence-and-euler-characteristic-step
kind: lemma
title: The point-divisor exact sequence and the Euler-characteristic step
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-exact-sequence-sheaves
  - def-flasque-sheaf
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - def-meromorphic-function-complex-domain
  - def-riemann-surface-and-holomorphic-atlas
  - def-skyscraper-sheaf-abelian-group
  - thm-exactness-of-sheaves-stalkwise
  - thm-finiteness-cohomology-compact-riemann-surface
  - thm-flasque-sheaves-acyclic
  - thm-laurent-coefficient-formula-and-uniqueness
  - thm-laurent-expansion-annulus
  - thm-long-exact-sequence-sheaf-cohomology
dependency_level: 10
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references: [{"title": "Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan", "url": "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf", "locator": "Ch. 16 §§16.6-16.9, printed pp. 128-130: the skyscraper sheaf, the exact sequence 0→O_D→O_{D+P}→C_P→0 (with Laurent coefficient c_{-D(P)-1}), its cohomology sequence, and the Euler-characteristic increment. The exact sequence is stated for arbitrary D."}, {"title": "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)", "url": "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf", "locator": "Ch. 9, equation (9.1), Theorems 9.2-9.4, printed pp. 85-86: the skyscraper sequence, alternating dimensions, and higher-cohomology vanishing."}, {"title": "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)", "url": "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf", "locator": "Ch. 6 §1, Proposition 6.1, printed pp. 53-54: the alternative principal-part exact sequence for nested divisors and the local quotient dimension deg(D)-deg(D')."}]
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface, $D$ a divisor on $X$, and $p\in X$. Write $D+p:=D+[p]$ and let $\mathbb C_p$ be the skyscraper sheaf at $p$ with value $\mathbb C$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[def-skyscraper-sheaf-abelian-group]]). By local finiteness of $\operatorname{supp}D$, fix a coordinate disk $(W,z)$ about $p$, with $z(p)=0$, such that $W\cap\operatorname{supp}D\subseteq\{p\}$, and put $k=D(p)$.

1. There is a short exact sequence of sheaves
$$0\longrightarrow\mathcal O_X(D)\longrightarrow\mathcal O_X(D+p)\xrightarrow{\ \lambda_{p,z}\ }\mathbb C_p\longrightarrow0.$$
For an open $U$ containing $p$ and $f\in\mathcal O_X(D+p)(U)$, $\lambda_{p,z}(f)$ is the Laurent coefficient $c_{-k-1}$ of the germ of $f$ at $p$ in coordinate $z$; if $p\notin U$, the map is zero. The identification of the one-dimensional quotient with $\mathbb C$ depends on the chosen coordinate, while exactness does not. If $k<0$, this coefficient may be a Taylor coefficient rather than a polar coefficient; for example, when $k=-2$ it is $c_1$.

2. The skyscraper sheaf $\mathbb C_p$ is flasque, $H^q(X,\mathbb C_p)=0$ for every $q\ge1$, and $H^0(X,\mathbb C_p)=\mathbb C$.

3. The resulting long exact sequence truncates to
$$0\to H^0(X,\mathcal O_X(D))\to H^0(X,\mathcal O_X(D+p))\xrightarrow{\ \lambda_{p,z}\ }\mathbb C\to H^1(X,\mathcal O_X(D))\to H^1(X,\mathcal O_X(D+p))\to0.$$
All four cohomology spaces are finite-dimensional. Therefore
$$\chi(\mathcal O_X(D+p))=\chi(\mathcal O_X(D))+1,$$
the map $H^1(X,\mathcal O_X(D))\to H^1(X,\mathcal O_X(D+p))$ is surjective, and
$$\dim\operatorname{im}\lambda_{p,z}=\ell(D+p)-\ell(D).$$

## Facts & Assumptions

**Given:** Full AC, a compact Riemann surface $X$, a divisor $D$, a point $p\in X$, and the fixed coordinate disk $(W,z)$ from the statement.

[F1] Full AC is the hypothesis for derived sheaf cohomology and its long exact sequence ([[def-axiom-of-choice]]).

[F2] Riemann surfaces have holomorphic coordinate charts; divisors have locally finite support and local coefficient $D(p)$ ([[def-riemann-surface-and-holomorphic-atlas]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F3] The sheaf $\mathcal O_X(D)$ is locally the meromorphic functions satisfying $\operatorname{ord}_q(f)\ge-D(q)$ ([[def-line-bundle-associated-to-a-divisor]]); meromorphic functions are holomorphic away from their isolated poles ([[def-meromorphic-function-complex-domain]]).

[F4] A holomorphic function on a punctured coordinate disk has a convergent Laurent expansion with uniquely determined coefficients ([[thm-laurent-expansion-annulus]], [[thm-laurent-coefficient-formula-and-uniqueness]]).

[F5] A sequence of sheaves is exact if and only if its stalk sequence is exact ([[def-exact-sequence-sheaves]], [[thm-exactness-of-sheaves-stalkwise]]).

[F6] The skyscraper sheaf has value $\mathbb C$ on opens containing $p$ and value $0$ on other opens; its restrictions are identity maps when both opens contain $p$ and zero maps otherwise ([[def-skyscraper-sheaf-abelian-group]]). A sheaf is flasque when all restriction maps are surjective ([[def-flasque-sheaf]]).

[F7] Positive-degree sheaf cohomology of a flasque sheaf vanishes under AC ([[thm-flasque-sheaves-acyclic]]).

[F8] A short exact sequence of abelian sheaves gives a natural long exact sequence of sheaf-cohomology groups ([[thm-long-exact-sequence-sheaf-cohomology]]).

[F9] Full AC supplies its countable instances, so compatible Riemannian metrics on $X$ and Hermitian metrics on each holomorphic divisor bundle exist. With such metrics supplied, $H^0(X,\mathcal O_X(A))$ and $H^1(X,\mathcal O_X(A))$ are finite-dimensional, with the stated $\ell,i,\chi$ notation ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]], [[thm-finiteness-cohomology-compact-riemann-surface]]).

## Proof

1.1 Fix the disk $(W,z)$ from the statement, small enough to meet no support point of $D$ other than possibly $p$. For a germ $f$ in $\mathcal O_X(D+p)_p$, [F3] gives $\operatorname{ord}_p(f)\ge-k-1$, so its Laurent expansion on a sufficiently small punctured disk has only powers $z^n$ with $n\ge-k-1$ by [F4]. Define $\lambda_{p,z}$ on a section over any open containing $p$ by taking this germ coefficient $c_{-k-1}$, and define it to be zero on opens not containing $p$. Uniqueness of Laurent coefficients makes this independent of the smaller disk used to compute it, and restrictions preserve the coefficient, so these maps form a sheaf morphism. Its kernel at $p$ consists exactly of germs with order at least $-k$, which is $\mathcal O_X(D)_p$; it is surjective at $p$ because the germ $z^{-k-1}$ maps to $1$. At any $x\ne p$, the divisors $D$ and $D+p$ agree near $x$, so the inclusion is an isomorphism on that stalk and $(\mathbb C_p)_x=0$. Thus the stalk sequence is exact at every point, and [F5] gives the asserted short exact sequence. [F2, F3, F4, F5, given]

1.2 For open sets $V\subseteq U$, the restriction $\mathbb C_p(U)\to\mathbb C_p(V)$ is the identity if both contain $p$ and is the zero map to $0$ otherwise, so it is always surjective by [F6]. Hence $\mathbb C_p$ is flasque. Since $p\in X$, its global sections are $\mathbb C$. Applying [F7] to the flasque sheaf on $X$ gives $H^q(X,\mathbb C_p)=0$ for every $q\ge1$. [F1, F6, F7, given]

2.1 Apply [F8] to the short exact sequence in step 1.1 and use step 1.2; the relevant portion is the displayed six-term exact sequence, with final zero because $H^1(X,\mathbb C_p)=0$. Choose compatible metrics on $X$, $\mathcal O_X(D)$ and $\mathcal O_X(D+p)$ using [F9] and the countable instances of full AC in [F1]. Applying the finiteness theorem in [F9] with these metrics makes the $H^0$ and $H^1$ terms for both divisors finite-dimensional, and $\dim H^0(X,\mathbb C_p)=1$. Exactness gives $\dim\operatorname{im}\lambda_{p,z}=\ell(D+p)-\ell(D)$ and makes $H^1(X,\mathcal O_X(D))\to H^1(X,\mathcal O_X(D+p))$ surjective. If $r=\dim\operatorname{im}\lambda_{p,z}$, exactness also gives $i(D)-i(D+p)=1-r$; hence $\chi(\mathcal O_X(D+p))-\chi(\mathcal O_X(D))=(\ell(D+p)-\ell(D))+(i(D)-i(D+p))=r+(1-r)=1$. [F1, F8, F9, step 1.1, step 1.2, algebra] ∎
