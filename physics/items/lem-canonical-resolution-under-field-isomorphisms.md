---
id: "lem-canonical-resolution-under-field-isomorphisms"
kind: "lemma"
title: "Canonical resolution under isomorphisms of the ground field"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 11
deps:
  - "def-axiom-of-choice"
  - "def-canonical-resolution-invariants"
  - "def-coefficient-ideal"
  - "def-companion-ideal-and-monomial-part"
  - "def-equivalence-of-marked-ideals"
  - "def-homogenized-ideal"
  - "def-ideal-of-derivatives"
  - "def-marked-ideal"
  - "def-maximal-order-and-tangent-directions"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "def-order-of-an-ideal-sheaf-at-a-point"
  - "def-field"
  - "def-morphism-of-schemes"
  - "def-smooth-morphism-schemes"
  - "lem-coefficient-ideal-is-equivalent"
  - "lem-derivatives-under-field-isomorphisms"
  - "lem-homogenized-ideal-is-equivalent"
  - "lem-order-semicontinuity-and-snc-strata"
  - "lem-smooth-pullback-of-multiple-test-blowups"
  - "prop-canonical-resolution-of-marked-ideals"
  - "thm-prime-subfield-classification"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Assume AC ([[def-axiom-of-choice]]).

Let $K,K'$ be fields of characteristic zero and let $\sigma\colon K\overset\sim\longrightarrow K'$ be a field isomorphism fixing the common prime field $\mathbb Q$ ([[def-field]], [[thm-prime-subfield-classification]]). Let $X/K$ and $X'/K'$ be smooth schemes and let $\varphi\colon X'\to X$ be a $\sigma$-semilinear isomorphism, as in [[lem-derivatives-under-field-isomorphisms]]. Let $(\mathcal I,E,\mu)$ be a marked ideal on $X$ with $\mu\ge1$ and with $\mathcal I$ not identically zero on any irreducible component ([[def-marked-ideal]]), and suppose it has a canonical resolution $(X_i)$, with induced marked ideals $(\mathcal I_i,E_i,\mu)$ ([[prop-canonical-resolution-of-marked-ideals]]).

Then the induced sequence $(X'_i):=(X_i\times_X X')$ is a canonical resolution of $\varphi^*(\mathcal I,E,\mu)$. The isomorphism $\varphi$ lifts to semilinear isomorphisms $\varphi_i\colon X'_i\to X_i$, and for every $i$,
$$\varphi_i^{-1}\!\left(\operatorname{supp}(\mathcal I_i,E_i,\mu)\right)=\operatorname{supp}(\mathcal I'_i,E'_i,\mu).$$
On these corresponding supports the invariants agree:
$$\operatorname{inv}(\varphi_i(x))=\operatorname{inv}(x),\qquad \nu(\varphi_i(x))=\nu(x),\qquad \rho(\varphi_i(x))=\varphi_i(\rho(x)).$$

## Facts & Assumptions

**Given:** Characteristic-zero fields $K,K'$ and a semilinear field isomorphism $\sigma\colon K\to K'$, smooth schemes $X/K$ and $X'/K'$, a $\sigma$-semilinear isomorphism $\varphi\colon X'\to X$, a marked ideal $(\mathcal I,E,\mu)$ with $\mu\ge1$ and $\mathcal I$ generically nonzero on every component of $X$, its pullback $\varphi^*(\mathcal I,E,\mu)=(\varphi^*\mathcal I,\varphi^{-1}E,\mu)$, a canonical resolution $(X_i)_{0\le i\le m}$ of $(\mathcal I,E,\mu)$ with induced marked ideals $(\mathcal I_i,E_i,\mu)$, and the base changes $X'_i:=X_i\times_XX'$ with induced marked ideals $(\mathcal I'_i,E'_i,\mu)$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the canonical-resolution consumer clauses and their cited AC-dependent construction suppliers.

[F1] [[lem-derivatives-under-field-isomorphisms]], [[def-ideal-of-derivatives]]: for every coherent ideal sheaf $\mathcal A$ on $X$ and every $i\ge0$ one has $\varphi^*(\mathcal D^i_K(\mathcal A))=\mathcal D^i_{K'}(\varphi^*\mathcal A)$; in particular $\varphi^*(T_K(\mathcal I))=T_{K'}(\varphi^*\mathcal I)$.

[F2] [[def-homogenized-ideal]], [[def-coefficient-ideal]]: For a maximal-order input $(\mathcal J,\nu)$ with $\nu\ge1$, $H(\mathcal J,\nu)=\sum_{i=0}^{\nu-1}\mathcal D^i(\mathcal J)T(\mathcal J)^i$ and $C(\mathcal J,\nu)=\sum_{i=0}^{\nu-1}(\mathcal D^i(\mathcal J),\nu-i)=(\sum_{i=0}^{\nu-1}\mathcal D^i(\mathcal J)^{\nu!/(\nu-i)},\ \nu!)$ are built from the derivative ideals by finite sums, products and powers of ideal sheaves, and are used only on maximal-order inputs.

[F3] [[def-marked-ideal]], [[def-order-of-an-ideal-sheaf-at-a-point]]: for a marked ideal $(\mathcal J,\nu)$ the support is $\{x:\operatorname{ord}_x(\mathcal J)\ge\nu\}$; the underlying scheme isomorphism $\varphi$ induces local-ring isomorphisms carrying maximal ideals and ideal stalks to their pullbacks. Hence corresponding orders, supports, exceptional-divisor counts $s_E$, and SNC conditions agree, independently of the ground-field semilinearity.

[F4] [[def-multiple-test-blowup-and-controlled-transform]]: $(X_i)$ is a multiple test blow-up with $\mathcal I_{i+1}=\mathcal I(D_{i+1})^{-\mu}\sigma_{i+1}^*(\mathcal I_i)$ and $E_{i+1}=\sigma_{i+1}^{\mathrm c}(E_i)\cup\{D_{i+1}\}$, the centers regular and in SNC position with $E_i$; a resolution is a multiple test blow-up with empty support.

[F5] [[def-maximal-order-and-tangent-directions]]: a tangent direction of $(\mathcal J,\nu)$ is a multiplicity-one section $u$ of $T(\mathcal J)=\mathcal D^{\nu-1}(\mathcal J)$, and $V(u)$ is the hypersurface of maximal contact containing the support.

[F6] [[prop-canonical-resolution-of-marked-ideals]], [[def-canonical-resolution-invariants]], [[def-companion-ideal-and-monomial-part]], [[def-equivalence-of-marked-ideals]], [[lem-homogenized-ideal-is-equivalent]], [[lem-coefficient-ideal-is-equivalent]]: the canonical resolution is produced by the algorithm of Steps 1-2; for a maximal-order input $(\mathcal J,\nu)$, replacing it by the equivalent marked ideals $H(\mathcal J,\nu)$ and $C(H(\mathcal J,\nu))$ does not change the supports, the admissible centers or the resolution process; each further reduction is determined by intrinsic data, namely the strata $H^s_\alpha$ (intersections of members of $E$), the restrictions of marked ideals to them and to hypersurfaces of maximal contact, the monomial/non-monomial decomposition and the companion ideal, and the invariants $\operatorname{inv},\nu,\rho$ assembled from $s_E$, the order functions and the lower-dimensional invariants, with the center the maximal locus of the pair $(\operatorname{inv},\rho)$.

[F7] [[lem-smooth-pullback-of-multiple-test-blowups]], [[def-smooth-morphism-schemes]]: the underlying scheme isomorphism $\varphi$ is smooth, so the base change $(X'_i)=(X_i\times_XX')$ is a multiple test blow-up of $\varphi^*(\mathcal I,E,\mu)$ with $\mathcal I'_i=\varphi_i^*\mathcal I_i$ and $E'_i=\varphi_i^{-1}E_i$, where each $\varphi_i\colon X'_i\to X_i$ is an isomorphism.

[F8] [[lem-order-semicontinuity-and-snc-strata]], [[prop-canonical-resolution-of-marked-ideals]]: divisor counts and order functions are upper semicontinuous by the former supplier; the latter supplies finite ranges and upper semicontinuity of $\operatorname{inv}$ and the lexicographic pairs $(\operatorname{inv},\nu)$ and $(\operatorname{inv},\rho)$. Thus the center-ordering pair has a closed maximal locus.

## Proof

1.1 Pullback of the derived objects at their proper inputs. By [F1], derivative ideals of every coherent ideal commute with the semilinear isomorphism. For a maximal-order marked ideal $(\mathcal J,\eta)$, finite sums, products and powers commute with this pullback, so [F2] gives $\varphi^*H(\mathcal J,\eta)=H(\varphi^*\mathcal J,\eta)$ and the analogous identity for $C(H(\mathcal J,\eta))$. For a general input $(\mathcal I,\mu)$ first transport its monomial and non-monomial factors: local-ring isomorphisms preserve divisibility by each ordered boundary equation and preserve the maximum residual order on the corresponding supports. If that maximum is positive, the corresponding companions $O(\mathcal I,\mu)$ are maximal-order inputs, and it is these companions to which the homogenization and coefficient identities apply. If the maximum is zero, the inputs are monomial near their supports and Step 2b applies directly; no homogenization of an unrestricted input is used. [A1, F1, F2, F3, F6]

2.1 Pullback of orders, supports and strata. By [F3] one has $\operatorname{ord}_{\varphi(x)}(\mathcal J)=\operatorname{ord}_x(\varphi^*\mathcal J)$ for every coherent ideal $\mathcal J$ on $X$, hence $\operatorname{supp}(\varphi^*(\mathcal J,\nu))=\varphi^{-1}(\operatorname{supp}(\mathcal J,\nu))$, and $s_{\varphi^{-1}E}(x)=s_E(\varphi(x))$; since the SNC condition is stalk-local, $\varphi$ maps the strata $H^s_\alpha$ of the algorithm for $(\mathcal I,E,\mu)$ isomorphically onto the corresponding strata for $\varphi^*(\mathcal I,E,\mu)$, and carries the restriction $(\mathcal I|_{H^s_\alpha},\mu)$ to $(\varphi^*\mathcal I|_{\varphi^{-1}H^s_\alpha},\mu)$. [A1, F3, step 1.1]

3.1 Commutation with the reductions of the algorithm. We prove the assertion by induction on $d=\dim X$. For $d=0$, every component is the spectrum of a finite separable field extension, and the hypothesis of generic nonvanishing makes the ideal the unit ideal on each component. The positive marking therefore gives empty support and the canonical sequence is the identity; its base change is again the identity by step 2.1. Assume now $d\ge1$ and the assertion known in dimensions $<d$, and transport the algorithm of [F6] along the identification of steps 1.1-2.1: (a) for every maximal-order input reached in Step 1, the replacement of $(\mathcal J,\nu)$ by the equivalent $C(H(\mathcal J,\nu))$ commutes with pullback by step 1.1; (b) the strata $H^s_\alpha$ and the restricted coefficient ideals correspond by step 2.1. First remove components contained in the support by Step 1aa: their regular SNC stratum blowups and controlled division commute with the isomorphism, and both sides give the same count/infinity primary value with $\nu=0$, $\rho=\varnothing$. No lower-dimensional induction is applied to these zero restrictions. By the coefficient-ideal support identity in [F6], the remaining restrictions are generically nonzero on each retained component; their lower-dimensional canonical resolutions therefore commute with $\varphi$ by induction. Once the inherited boundary is disjoint from the support, the isolated codimension-one components of Step 1ba correspond by their local equations and labelled Cartier division. Only on the remaining codimension-at-least-two support do we pass to Step 1bb; (c) a hypersurface of maximal contact $V(u)$, $u\in T(\mathcal J)$, is carried to the hypersurface $V(\varphi^*u)$ with $\varphi^*u\in T(\varphi^*\mathcal J)$ by steps 1.1-2.1, and the restriction of $C(\mathcal J,\nu)$ to $V(u)$ corresponds, so the induction hypothesis applies to the lower-dimensional marked ideal on $V(u)$; (d) the monomial/non-monomial decomposition $\mathcal J=M(\mathcal J)N(\mathcal J)$ is read off from the vanishing orders of $\mathcal J$ along the members of $E$ by [F3], hence is transported, and, when the residual maximum is positive, its companion satisfies $\varphi^*(O(\mathcal J))=O(\varphi^*\mathcal J)$; when it is zero the local monomial Step 2b data correspond directly; (e) the invariants assembled in [F6] from $s_E$, the order functions and the lower-dimensional invariants have equal values at corresponding points by steps 1.1-2.1 and the induction hypothesis, and equality of all values together with preservation of their orders carries the maximal locus of $(\operatorname{inv},\rho)$ on $X_i$ to its exact preimage under $\varphi_i$ on $X'_i$; its closedness is supplied by [F8]. Since the algorithm's centre at each stage is exactly that maximal locus [F6], the process for $\varphi^*(\mathcal I,E,\mu)$ has centres $\varphi_i^{-1}(C_i)$ and produces the base-changed marked ideals $(\mathcal I'_i,E'_i,\mu)$. [A1, F3, F5, F6, F8, step 1.1, step 2.1]

4.1 The canonical resolution of the pullback. By [F4, F7] the sequence $(X'_i)=(X_i\times_XX')$ is a multiple test blow-up of $\varphi^*(\mathcal I,E,\mu)$ with $\mathcal I'_i=\varphi_i^*\mathcal I_i$, $E'_i=\varphi_i^{-1}E_i$, and each $\varphi_i$ is an isomorphism; by step 3.1 its centre at each stage is $\varphi_i^{-1}(C_i)$, which is the centre prescribed by the algorithm for the pullback, and the algorithm is determined by the intrinsic data [F6]. Hence $(X'_i)$ is the canonical resolution of $\varphi^*(\mathcal I,E,\mu)$. For $x\in X'_i$ with $\varphi_i(x)\in\operatorname{supp}(\mathcal I_i,E_i,\mu)$ step 2.1 gives $x\in\operatorname{supp}(\mathcal I'_i,E'_i,\mu)$, and step 3.1(e) gives $\operatorname{inv}(\varphi_i(x))=\operatorname{inv}(x)$ and $\nu(\varphi_i(x))=\nu(x)$; since $\varphi_i$ carries the ordered family $E'_i=\varphi_i^{-1}E_i$ isomorphically onto $E_i$, the subsets of exceptional divisors through corresponding points match and $\rho(\varphi_i(x))=\varphi_i(\rho(x))$. This completes the induction and the proof. [A1, F4, F6, F7, step 2.1, step 3.1] ∎

## Remarks

- The source's Proposition 4.3.2 is stated for isomorphisms over $\mathbb Q$ that may act nontrivially on the ground field. The semilinear formulation above includes the Galois automorphisms of $\overline K/K$ used in [[lem-canonical-resolution-over-nonclosed-fields]].
- The scalar extension used in the descent is algebraic and separable in characteristic zero, so every $K$-derivation of $\mathcal O_{\overline X}$ is $\overline K$-linear and the derivative ideals computed over $K$ and over $\overline K$ coincide; the lemma therefore applies to the Galois action on the base change.
- The case of an empty support is the identity resolution and is covered by step 2.1.
