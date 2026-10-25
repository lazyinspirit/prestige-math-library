---
id: lem-nonscalar-positive-commutant-elements-split-a-normalized-positive-type-function
kind: lemma
title: Nonscalar commutant contractions and convex decompositions
status: published
origin: pipeline
pipeline_run: frontier-36-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-bounded-linear-operator
  - def-continuous-function-of-positive-type
  - def-countable-choice
  - def-cyclic-vector-and-cyclic-unitary-representation
  - def-hilbert-space-adjoint
  - def-real-and-complex-inner-product-space
  - def-self-adjoint-positive-unitary-and-normal-operator
  - def-space-of-bounded-linear-operators
  - def-strongly-continuous-unitary-representation
  - lem-dominated-positive-type-functions-give-positive-commutant-contractions
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-gns-construction-for-topological-groups
axiom_audit: "Assume AC through the GNS norm/realization and the dominated-positive-operator theorem. The latter uses AC→DC→Countable Choice for Riesz representation and the adjoint/positive-operator interfaces. The positive-form expansion, endpoint argument, scaling, and finite coefficient comparison are choice-free."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Proposition C.5.1 and complete proof"
      url: https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf
      locator: "Appendix C §C.5, printed pp. 379–380"
    - title: "Karl-Hermann Neeb, An Introduction to Unitary Representations of Lie Groups, Proposition 5.1.11 and Theorem 5.1.12 with complete proof"
      url: https://www.math.fau.de/wp-content/uploads/2024/01/rep.pdf
      locator: "§5.1, printed pp. 98–99"
---

## Statement

Assume AC. Let $G$ be a topological group, let $\varphi\in P_1(G)$, and let
$(\pi_\varphi,H_\varphi,\xi_\varphi)$ be its cyclic GNS triple, with
$\|\xi_\varphi\|=1$. A positive contraction means a bounded self-adjoint
operator $T\in\pi_\varphi(G)'$ for which $T$ and $I-T$ are positive. Every
nonscalar positive contraction $T$ yields $s\in(0,1)$ and distinct
$\varphi_1,\varphi_2\in P_1(G)$ with
$\varphi=s\varphi_1+(1-s)\varphi_2$. Conversely, for every such decomposition
there is a nonscalar positive contraction $T\in\pi_\varphi(G)'$ such that
$\langle\pi_\varphi(g)T\xi_\varphi,\xi_\varphi\rangle=s\varphi_1(g)$ for all
$g\in G$.

## Facts & Assumptions

**Given:** AC; a topological group $G$; a normalized continuous positive-type function $\varphi$; its canonical GNS triple; and the first-variable-linear complex Hilbert inner product. “Scalar operator” means $\lambda I$ for some $\lambda\in\mathbb C$.

[F1] $P(G)$ is the cone of continuous functions of positive type and $P_1(G)=\{\psi\in P(G):\psi(e)=1\}$; positive real scalar multiples preserve positive type ([[def-continuous-function-of-positive-type]]).

[F2] Under AC the GNS triple is cyclic, has diagonal coefficient $\varphi$, and satisfies $\|\xi_\varphi\|^2=\varphi(e)$ ([[thm-gns-construction-for-topological-groups]]).

[F3] Under AC, each $0\le\psi\le\varphi$ corresponds to a unique bounded self-adjoint operator in $\pi_\varphi(G)'$ with both $T$ and $I-T$ positive and coefficient $\psi(g)=\langle\pi_\varphi(g)T\xi_\varphi,\xi_\varphi\rangle$; conversely every such operator gives a continuous positive-type function dominated by $\varphi$ ([[lem-dominated-positive-type-functions-give-positive-commutant-contractions]]).

[F4] Cyclicity means the complex-linear span of $\{\pi_\varphi(g)\xi_\varphi:g\in G\}$ is dense in $H_\varphi$ ([[def-cyclic-vector-and-cyclic-unitary-representation]]).

[F5] For a bounded operator $A$, self-adjoint means $A^*=A$, and positive means $\langle Ax,x\rangle$ is real and nonnegative for every $x$ ([[def-self-adjoint-positive-unitary-and-normal-operator]]).

[F6] The Hilbert adjoint satisfies $\langle Ax,y\rangle=\langle x,A^*y\rangle$ ([[def-hilbert-space-adjoint]]).

[F7] The inner product is linear in its first variable, conjugate-linear in its second, conjugate-symmetric, and positive definite; its induced norm is the nonnegative square root of $\langle x,x\rangle$ ([[def-real-and-complex-inner-product-space]]).

[F8] A bounded linear operator has a bound $C\ge0$ with $\|Ax\|\le C\|x\|$, and $\mathcal B(H)$ consists of bounded linear operators ([[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]]).

[F9] A unitary representation is a group homomorphism into the unitary operators, and its commutant is $\pi_\varphi(G)'=\{A\in\mathcal B(H_\varphi):A\pi_\varphi(g)=\pi_\varphi(g)A\}$ ([[def-strongly-continuous-unitary-representation]]).

[F10] AC implies DC and Countable Choice; the adjoint and positive-operator definitions assume Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]], [[def-hilbert-space-adjoint]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

## Proof

Bekka–de la Harpe–Valette's Proposition C.5.1 shows that if the GNS representation is irreducible, a positive-type summand is a scalar multiple of the original function; its proof constructs an intertwiner and applies Schur's lemma. Neeb's Proposition 5.1.11 and Theorem 5.1.12 give the analogous dominated-operator and extremal-ray correspondence for invariant reproducing kernels. The argument below proves the precise positive-contraction and convex-decomposition correspondence for every normalized cyclic GNS triple, using the local dominated-operator theorem.

**Proof technique:** direct.

1.1 Let $A$ be a bounded self-adjoint positive operator and set $q_A(x,y)=\langle Ax,y\rangle$. It is sesquilinear, and self-adjointness with the adjoint identity gives $q_A(x,y)=\langle x,Ay\rangle=\overline{\langle Ay,x\rangle}=\overline{q_A(y,x)}$; positivity gives $q_A(x,x)\ge0$. If $q_A(x,x)=0$, fix any $y$, put $b=q_A(x,y)$ and $c=q_A(y,y)\ge0$. For each real $r>0$, expansion gives $0\le q_A(x-rb\,y,x-rb\,y)=-r\overline b b-rb\overline b+r^2|b|^2c=-2r|b|^2+r^2|b|^2c$. Taking $r=(c+1)^{-1}$ makes the displayed value $-(c+2)|b|^2/(c+1)^2$, which is negative unless $b=0$; positivity therefore gives $b=0$. This holds for every $y$; setting $y=Ax$ gives $\|Ax\|^2=q_A(x,Ax)=0$, so $Ax=0$. Thus zero quadratic value forces annihilation, including for a degenerate form. [F5, F6, F7, algebra]

1.2 By [F2], the GNS vector satisfies $\|\xi_\varphi\|^2=\varphi(e)=1$. Nonnegativity of the induced norm [F7] therefore gives $\|\xi_\varphi\|=1$. [F2, F7]

1.3 Conversely, suppose $\varphi=s\varphi_1+(1-s)\varphi_2$ with $0<s<1$ and distinct $\varphi_1,\varphi_2\in P_1(G)$. Positive scaling and [F1] give $s\varphi_1\in P(G)$ and $\varphi-s\varphi_1=(1-s)\varphi_2\in P(G)$; thus $0\le s\varphi_1\le\varphi$. By [F3] there is a unique positive contraction $S\in\pi_\varphi(G)'$ whose coefficient is $s\varphi_1$. [F1, F3]

2.1 Let $T$ be a positive contraction in the commutant and put $t=\langle T\xi_\varphi,\xi_\varphi\rangle$. Positivity of $T$ and $I-T$ and [F7] give $t\in\mathbb R$ and $1-t=\langle(I-T)\xi_\varphi,\xi_\varphi\rangle\ge0$. Hence $0\le t\le1$. [F3, F5, F7, step 1.2, algebra]

2.2 If this $S$ were scalar, say $S=\lambda I$, then evaluating its coefficient at $e$ and using [F1], [F2] gives $s=s\varphi_1(e)=\langle S\xi_\varphi,\xi_\varphi\rangle=\lambda$. For every $g$, the coefficient would then be $\lambda\langle\pi_\varphi(g)\xi_\varphi,\xi_\varphi\rangle=s\varphi(g)$. Since the same coefficient is $s\varphi_1(g)$ and $s>0$, we get $\varphi_1=\varphi$, and the decomposition with $s<1$ then forces $\varphi_2=\varphi$, a contradiction. Therefore $S$ is nonscalar. [F1, F2, F3, F7, F9, step 1.3, algebra]

3.1 If $t=0$, step 1.1 applied to $T$ gives $T\xi_\varphi=0$; if $t=1$, it applied to $I-T$ gives $(I-T)\xi_\varphi=0$. In either case let $A=T$ or $A=I-T$, respectively. Commutation gives $A\pi_\varphi(g)\xi_\varphi=\pi_\varphi(g)A\xi_\varphi=0$ for every $g$, so $A$ vanishes on the cyclic orbit span. If $C$ is a bound for $A$, density [F4] implies $A=0$: for any $v\in H_\varphi$ and $\varepsilon>0$ choose one orbit-span vector $w$ with $\|v-w\|<\varepsilon$, giving $\|Av\|\le C\varepsilon$. Thus $t=0$ forces $T=0$, and $t=1$ forces $T=I$. A nonscalar $T$ therefore has $0<t<1$. [F3, F4, F8, F9, step 1.1, step 2.1, algebra]

4.1 Let $\psi_T(g)=\langle\pi_\varphi(g)T\xi_\varphi,\xi_\varphi\rangle$. Since $I-T$ is also a positive contraction in the commutant, [F3] makes both $\psi_T$ and $\psi_{I-T}$ continuous and of positive type. By linearity and $T+(I-T)=I$, their sum is $\varphi$, and their identity values are $t$ and $1-t$. Positive scalar multiples preserve positive type by [F1], so $\varphi_1=\psi_T/t$ and $\varphi_2=\psi_{I-T}/(1-t)$ belong to $P_1(G)$. They satisfy $\varphi=t\varphi_1+(1-t)\varphi_2$. [F1, F3, F7, step 1.2, step 2.1, step 3.1, algebra]

5.1 If $\varphi_1=\varphi_2$, their convex combination is $\varphi$, so $\psi_T=t\varphi$. The scalar operator $tI$ is a positive contraction in the commutant and has coefficient $t\varphi$. Since $0\le t\varphi\le\varphi$, uniqueness in [F3] gives $T=tI$, contradicting that $T$ is nonscalar. Hence the two normalized summands are distinct. [F1, F3, F5, step 4.1, algebra]

6.1 AC is used through [F2] for the canonical GNS triple and [F3] for the dominated-positive-operator theorem. That theorem uses AC $\Rightarrow$ DC $\Rightarrow$ Countable Choice for Riesz representation and the adjoint and positive-operator interfaces [F10]. The positive-form expansion in step 1.1, the finite coefficient calculations, and the one-at-a-time density argument in step 3.1 use no further choice. [F2, F3, F10, step 1.1, step 3.1, algebra] ∎
