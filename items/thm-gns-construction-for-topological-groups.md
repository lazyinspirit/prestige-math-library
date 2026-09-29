---
id: thm-gns-construction-for-topological-groups
kind: theorem
title: GNS construction for a continuous positive-type function
status: published
origin: pipeline
pipeline_run: frontier-36-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-completion-of-a-normed-space
  - def-countable-choice
  - def-cyclic-vector-and-cyclic-unitary-representation
  - def-matrix-coefficient-of-a-unitary-representation
  - lem-positive-type-functions-define-a-pre-hilbert-form
  - lem-the-gns-translation-action-is-unitary-and-strongly-continuous
  - thm-choice-implies-dependent-implies-countable-choice
axiom_audit: "Assume AC only for the completed GNS representation supplied by the translation-action lemma: AC implies Countable Choice, used there for the Hilbert completion and bounded left-translation extensions. The point-mass vector, coefficient, cyclicity, and zero-case calculations use no further choice."
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Theorem C.4.10 (GNS Construction)"
      url: https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf
      locator: "Appendix C §C.4, theorem and complete proof, printed pp. 376–377"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: https://arxiv.org/pdf/1912.07262
      locator: "Chapter 1 §1.B, Construction 1.B.5, printed pp. 27–28"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $G$ be a topological group and let
$\varphi:G\to\mathbb C$ be a continuous function of positive type. Set
$Q_\varphi=\mathbb C^{(G)}/N_\varphi$, let $H_\varphi$ be its Hilbert
completion, and let $\kappa_\varphi:Q_\varphi\to H_\varphi$ be the canonical
dense isometric embedding. Let $\pi_\varphi$ be the strongly continuous unitary
representation obtained by extending left translations, and define
$\xi_\varphi:=\kappa_\varphi([\delta_e])$. Then $\xi_\varphi$ is cyclic and
$$
\varphi(g)=\langle\pi_\varphi(g)\xi_\varphi,\xi_\varphi\rangle\quad(g\in G),\qquad \|\xi_\varphi\|^2=\varphi(e).
$$
If $\varphi=0$, then $Q_\varphi=H_\varphi=\{0\}$ and $\xi_\varphi=0$; the
zero representation is cyclic under the stated convention.

## Facts & Assumptions

**Given:** AC; a topological group $G$; a continuous positive-type function
$\varphi:G\to\mathbb C$; its GNS form $B_\varphi$, null space $N_\varphi$,
and quotient $Q_\varphi$.

[F1] Under AC, left translations on $Q_\varphi$ extend to a homomorphism
$\pi_\varphi:G\to U(H_\varphi)$ on its Hilbert completion, and every vector
orbit is norm-continuous ([[lem-the-gns-translation-action-is-unitary-and-strongly-continuous]]).

[F2] The form $B_\varphi$ is positive semidefinite and linear in its first
argument; its null space is orthogonal to every finitely supported function,
and the quotient inner product satisfies
$B_\varphi(\delta_x,\delta_y)=\varphi(y^{-1}x)$
([[lem-positive-type-functions-define-a-pre-hilbert-form]]).

[F3] The canonical completion map is a dense linear isometry
([[def-completion-of-a-normed-space]]).

[F4] A vector is cyclic when the complex linear span of its representation
orbit is dense; the representation on the zero Hilbert space is cyclic
([[def-cyclic-vector-and-cyclic-unitary-representation]]).

[F5] The diagonal matrix coefficient of a unitary representation is
$g\mapsto\langle\pi(g)\xi,\xi\rangle$
([[def-matrix-coefficient-of-a-unitary-representation]]).

[F6] AC implies Dependent Choice and hence Countable Choice
([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]],
[[def-countable-choice]]).

## Proof

Bekka–de la Harpe–Valette state the existence of the cyclic GNS triple in
Theorem C.4.10 and prove it by realizing the positive kernel, extending the
left-translation isometries, checking the group law and continuity, and taking
$f(e)$ as the cyclic vector (Appendix C §C.4, printed pp. 376–377). Bekka and
de la Harpe give the finite-support form and quotient-completion construction
in Construction 1.B.5 (§1.B, printed pp. 27–28). The proof below uses the
already checked local form and translation-action lemmas, and derives the zero
case directly from the null-radical property.

**Proof technique:** direct.

1.1 For every $g\in G$, left translation sends $\delta_e$ to $\delta_g$; because $\pi_\varphi(g)$ extends the induced quotient map, $\pi_\varphi(g)\xi_\varphi=\kappa_\varphi([\delta_g])$. [F1, F2, F3, construct]

1.2 The same quotient inner product gives $\|\xi_\varphi\|^2=B_\varphi(\delta_e,\delta_e)=\varphi(e)$, which is a nonnegative real because $B_\varphi$ is positive semidefinite. [F2, F3]

1.3 If $\varphi(e)=0$, then [F2] gives $B_\varphi(\delta_e,\delta_e)=0$, so $\delta_e\in N_\varphi$. The null space is orthogonal to every finitely supported function; in particular $B_\varphi(\delta_e,\delta_g)=0$ for every $g$. The point-mass formula gives $B_\varphi(\delta_e,\delta_g)=\varphi(g^{-1})$, so $\varphi$ vanishes identically. Thus a positive-type function with zero value at the identity is necessarily the zero function. [F2]

2.1 Using the isometry of $\kappa_\varphi$ and the point-mass formula in [F2], $\langle\pi_\varphi(g)\xi_\varphi,\xi_\varphi\rangle=\langle\kappa_\varphi([\delta_g]),\kappa_\varphi([\delta_e])\rangle=B_\varphi(\delta_g,\delta_e)=\varphi(g)$. By [F5] this is the diagonal matrix coefficient of the constructed representation. [F1, F2, F3, F5, step 1.1]

2.2 Every finitely supported function is a finite linear combination of point masses, with the empty support giving the zero function as the empty linear combination, so the span of $[\delta_g]$ over $g\in G$ is $Q_\varphi$. By step 1.1 the orbit of $\xi_\varphi$ maps onto the point masses under $\kappa_\varphi$, and $\kappa_\varphi(Q_\varphi)$ is dense in $H_\varphi$; hence the orbit span is dense and $\xi_\varphi$ is cyclic by [F4], including when the quotient is zero. [F2, F3, F4, step 1.1]

3.1 If $\varphi=0$, then $B_\varphi=0$, hence $N_\varphi=\mathbb C^{(G)}$ and $Q_\varphi=H_\varphi=\{0\}$. The unique action on the zero space is strongly continuous; $\xi_\varphi=0$, its orbit span is dense by [F4], and the coefficient and norm identities from steps 2.1 and 1.2 both read $0=0$. [F1, F2, F3, F4, step 2.1, step 1.2]

4.1 AC is used only through Countable Choice in [F6] for the Hilbert completion and unique bounded extensions supplied by [F1]. Steps 1.1–3.1 use no additional choice: the point masses and their finite linear combinations are specified, and all quotient, coefficient, and zero-case calculations are choice-free. [F1, F6, step 1.1, step 3.1] ∎
