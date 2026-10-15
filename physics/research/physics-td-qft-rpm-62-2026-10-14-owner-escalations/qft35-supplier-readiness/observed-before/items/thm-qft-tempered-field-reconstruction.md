---
id: thm-qft-tempered-field-reconstruction
kind: theorem
title: Tested positive moments reconstruct closable smeared fields
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-countable-choice
  - def-qft-positive-tempered-moments
  - def-qft-weak-operator-valued-tempered-distribution
  - def-qft-poincare-test-action
  - def-qft-minkowski-fourier-transform
  - lem-qft-poincare-pullback-continuity-on-schwartz
  - thm-qft-algebraic-gns-domain
  - lem-qft-positive-state-cauchy-schwarz
  - lem-qft-state-symmetry-implementer
  - thm-polynomial-growth-functions-define-tempered-distributions
  - def-c-c-and-c-c-infinity-on-rn
  - lem-test-function-inclusion-in-schwartz-space-is-continuous
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-positive-tempered-moments: mathematical-premise
  def-qft-weak-operator-valued-tempered-distribution: mathematical-premise
  def-qft-poincare-test-action: mathematical-premise
  def-qft-minkowski-fourier-transform: mathematical-premise
  lem-qft-poincare-pullback-continuity-on-schwartz: mathematical-premise
  thm-qft-algebraic-gns-domain: mathematical-premise
  lem-qft-positive-state-cauchy-schwarz: mathematical-premise
  lem-qft-state-symmetry-implementer: mathematical-premise
  thm-polynomial-growth-functions-define-tempered-distributions: mathematical-premise
  def-c-c-and-c-c-infinity-on-rn: mathematical-premise
  lem-test-function-inclusion-in-schwartz-space-is-continuous: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Konrad Schmüdgen, An Invitation to Unbounded Representations of *-Algebras on Hilbert Space, Graduate Texts in Mathematics 285, Springer Nature (2020)"
      url: https://dokumen.pub/an-invitation-to-unbounded-representations-of-algebras-on-hilbert-space-1nbsped-3030463656-9783030463656.html
      locator: "§§2.4, 4.4, printed pp. 20–21 and 78–81: positivity, quotient domain, left multiplication, adjoint identity, GNS reconstruction, and uniqueness."
    - title: "Jens Mund, General Aspects of Relativistic Quantum Field Theory, lecture notes, DF-UFJF (2012)"
      url: https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf
      locator: "§2.1, Theorem 2.6 and proof, PDF pp. 15–17: Wightman distributions, positive functional on the tensor test algebra, GNS quotient, field on a common dense domain, covariance, locality, and the conditional spectrum premise. The notes explicitly call themselves incomplete; this item proves only the conditional conclusions stated here."
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, arXiv:1904.04051v2 (2019)"
      url: https://arxiv.org/pdf/1904.04051
      locator: "§2.3, printed pp. 7–9: algebraic GNS quotient, common domain, adjoint relation, state recovery, and unitary uniqueness."
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and let
$(W_n)_{n\ge0}$ be a positive tempered moment family on $T(S)$ as in
[[def-qft-positive-tempered-moments]]. Write $\omega$ for its linear extension,
and let $P^\uparrow_+$, $T_g$, and $\alpha_g$ be the group and pullbacks of
[[def-qft-poincare-test-action]] and
[[lem-qft-poincare-pullback-continuity-on-schwartz]]. Let
$(H_\omega,D_\omega,\pi_\omega,\Omega_\omega)$ be the GNS construction of
[[thm-qft-algebraic-gns-domain]] for this functional, with the first-variable-
linear Hilbert pairing.

For $f\in S$, put $X(f):=f$ in degree one and
$\Phi(f):=\pi_\omega(X(f))|_{D_\omega}$. Then $D_\omega$ is a common invariant
dense domain, every $\Phi(f)$ is closable with
$\Phi(\overline f)=\Phi(f)^*|_{D_\omega}$, and $\Phi$ is a weak
operator-valued tempered distribution in the exact sense of
[[def-qft-weak-operator-valued-tempered-distribution]]. Its vacuum moments are
exactly the input:
$$\bigl(\Phi(f_1)\cdots\Phi(f_n)\Omega_\omega,\Omega_\omega\bigr)=\langle W_n,J_n(f_1\otimes\cdots\otimes f_n)\rangle.$$

The following additional conclusions are conditional on additional moment
identities.

1. If $\omega\circ\alpha_g=\omega$ for every $g\in P^\uparrow_+$, then there
is a strongly continuous unitary representation $g\mapsto U_g$ on
$H_\omega$ fixing $\Omega_\omega$ and satisfying
$$U_g\Phi(f)U_g^{-1}|_{D_\omega}=\Phi(T_gf)\qquad(g\in P^\uparrow_+,\ f\in S).$$

2. If $f,h\in C_c^\infty(\mathbb R^4;\mathbb C)$ have spacelike-separated
supports, meaning $(x^0-y^0)^2-|\mathbf x-\mathbf y|^2<0$ for every
$x\in\operatorname{supp}f$, $y\in\operatorname{supp}h$, and
$$\omega\bigl(b^*[X(f),X(h)]a\bigr)=0\qquad(a,b\in T(S)),$$
then $[\Phi(f),\Phi(h)]=0$ on $D_\omega$. More generally, any polynomial
relation $r\in T(S)$ satisfying $\omega(b^*ra)=0$ for all $a,b\in T(S)$ is
represented by $\pi_\omega(r)=0$ on $D_\omega$; tested field equations are
instances of this statement when their required identities are assumed.

3. For translations $\tau_z=(I,z)$ define
$$D_{b,a}(z):=\omega\bigl(b^*\alpha_{\tau_z}(a)\bigr)\qquad(a,b\in T(S)).$$
If $\omega$ is translation-invariant, each $D_{b,a}$ is a bounded continuous
function and hence a regular tempered distribution; applying the
symmetry-implementation lemma to the translation subgroup gives strongly
continuous unitaries $U_{\tau_z}$. If, in addition,
$\operatorname{supp}\widehat{D}_{b,a,M}\subseteq\overline V_+$ for every $a,b$,
with the Fourier convention of
[[def-qft-minkowski-fourier-transform]], then the reconstructed translation
matrix coefficients
$$z\longmapsto\bigl(U_{\tau_z}\pi_\omega(a)\Omega_\omega,\pi_\omega(b)\Omega_\omega\bigr)$$
have precisely the same Fourier support. This is a matrix-coefficient
spectrum condition; it does not assert joint self-adjoint energy-momentum
generators or their joint spectral measure.

This theorem reconstructs a weak field only from supplied, actually positive
continuous moments. It does not construct an unspecified positive functional,
complete a formal perturbation series, or establish the full Wightman
reconstruction theorem with assumptions not listed here.

## Facts & Assumptions

**Given:** Countable Choice $\mathrm{AC}_\omega$; a positive tempered moment
family $(W_n)$; the proper-orthochronous Poincaré pullback of
[[def-qft-poincare-test-action]]; and the GNS inputs described below. The
covariance, locality, and spectrum conclusions use only the additional
identities stated alongside those conclusions.

[A1] Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) is
assumed for the Hilbert completion in the GNS supplier and for its cited
Fourier suppliers; no full Axiom of Choice is assumed.

[F1] [[def-qft-positive-tempered-moments]]: $T(S)$ consists of finite sums of
algebraic tensor powers with concatenation product and reversal/conjugation
involution; each $W_n$ is a continuous linear functional on
$\mathcal S(\mathbb R^{4n})$; the extension satisfies $\omega(1)=1$ and
$\omega(a^*a)\ge0$.

[F2] [[thm-qft-algebraic-gns-domain]]: under Countable Choice and these
positive normalized algebraic-state hypotheses, the quotient has a Hilbert
completion and a common invariant dense domain $D_\omega$, with
$\pi_\omega(a)[b]=[ab]$, $\Omega_\omega=[1]$, and
$\omega(a)=(\pi_\omega(a)\Omega_\omega,\Omega_\omega)$; each represented
operator is closable and its adjoint restricts to $\pi_\omega(a^*)$ on the
common domain.

[F3] [[lem-qft-positive-state-cauchy-schwarz]]:
$|\omega(b^*a)|^2\le\omega(a^*a)\omega(b^*b)$, including zero-norm cases.

[F4] [[def-qft-weak-operator-valued-tempered-distribution]]: weak
operator-valued temperedness means continuity of each first-variable-linear
matrix coefficient $f\mapsto(\Phi(f)u,v)$ for $u,v\in D_\omega$.

[F5] [[def-qft-poincare-test-action]] and
[[lem-qft-poincare-pullback-continuity-on-schwartz]]: $T_gf(x)=f(g^{-1}x)$;
the pullbacks are continuous on $S$ and induce a group of unital
star-automorphisms $\alpha_g$ on the algebraic tensor algebra, with continuous
coefficient dependence for each finite tensor polynomial.

[F6] [[lem-qft-state-symmetry-implementer]]: for a state-preserving action of
a topological group, continuity at the identity of every coefficient
$g\mapsto\omega(b^*\alpha_g(a))$ yields a strongly continuous unitary
implementation on the GNS Hilbert space, fixing the cyclic vector and
implementing the action on the common domain.

[F7] [[def-qft-minkowski-fourier-transform]]: $\widehat D_M$ is defined by
bilinear transposition of $\mathcal F_M\psi(z)=\int e^{-ip\cdot z}\psi(p)d^4p$;
support in $\overline V_+$ means vanishing on every compact test supported
off that cone.

[F8] [[thm-polynomial-growth-functions-define-tempered-distributions]]: a
locally integrable function bounded by a polynomial outside compact sets
defines a regular tempered distribution.

[A2] For covariance, assume $\omega\circ\alpha_g=\omega$ for every
$g\in P^\uparrow_+$.

[A3] For tested locality, assume the displayed commutator moment identity for
all $a,b\in T(S)$ and all compact tests with the stated spacelike-separated
supports.

[A4] For tested relations, fix $r\in T(S)$ and assume
$\omega(b^*ra)=0$ for every $a,b\in T(S)$.

[A5] For the matrix-coefficient spectrum conclusion, assume translation
invariance $\omega\circ\alpha_{\tau_z}=\omega$ and
$\operatorname{supp}\widehat{D}_{b,a,M}\subseteq\overline V_+$ for every
$a,b\in T(S)$.

## Proof

1.1 For $f_1,\ldots,f_n\in S$, the product test map $J_n$ satisfies the
seminorm identity in [F1]: every joint Schwartz seminorm is the product of the
corresponding four-dimensional seminorms. It is therefore continuous
multilinear. Since each $W_n$ is continuous, fixing all but one factor and
evaluating $W_n$ on $J_n$ gives a continuous linear functional of the remaining
test. [F1, algebra]

1.2 Apply [F2] to the positive normalized functional $\omega$ on the unital
star algebra $T(S)$. Under the Countable Choice premise [A1] this produces
$H_\omega$, the common invariant dense quotient domain $D_\omega$, the
closable representation $\pi_\omega$, and the unit cyclic vector
$\Omega_\omega$. [F1, F2, A1, given]

2.1 For $a,b\in T(S)$, the GNS quotient pairing gives
$$\bigl(\Phi(f)[a],[b]\bigr)=\omega\bigl(b^*X(f)a\bigr).$$
Because $a$ and $b$ are finite sums, the right-hand side is a finite sum of
distributions $W_n$ evaluated on product tests with $f$ in one tensor slot.
Step 1.1 makes each term continuous and linear in $f$. Thus every matrix
coefficient is tempered, and [F4] shows that $\Phi$ is a weak
operator-valued tempered distribution on the common domain. [F1, F2, F4, step 1.1]

2.2 The degree-one map $f\mapsto X(f)$ is complex-linear and left
multiplication preserves $D_\omega$, so $\Phi:S\to\operatorname{Lin}(D_\omega)$
is linear and has the stated common invariant domain. By [F2], each
$\Phi(f)$ is closable and
$\Phi(\overline f)=\Phi(f)^*|_{D_\omega}$. Repeated application of
$\pi_\omega(X(f_j))[a]=[X(f_j)a]$ gives
$$\bigl(\Phi(f_1)\cdots\Phi(f_n)\Omega_\omega,\Omega_\omega\bigr)=\omega\bigl(X(f_1)\cdots X(f_n)\bigr)=\langle W_n,J_n(f_1\otimes\cdots\otimes f_n)\rangle,$$
which is the asserted moment identity for $n\ge1$. For $n=0$, the empty
product is $\Omega_\omega$ and
$(\Omega_\omega,\Omega_\omega)=\omega(1)=W_0=\langle W_0,J_0(1)\rangle$.
[F1, F2, step 1.2, algebra]

3.1 For fixed $a,b$, expand them as finite sums of tensor monomials. Under
$\alpha_g$, each test factor varies continuously in Schwartz space by [F5];
the product maps $J_n$ are continuous by step 1.1, so each $W_n$ evaluation
and hence $g\mapsto\omega(b^*\alpha_g(a))$ is continuous at the identity.
[F1, F5, step 1.1, algebra]

3.2 Under the additional invariance hypothesis [A2], the hypotheses of [F6]
hold because step 3.1 provides the required coefficient continuity. The lemma supplies strongly
continuous unitaries $U_g$ fixing $\Omega_\omega$ and implementing
$\alpha_g$ on $D_\omega$. Since $\alpha_g(X(f))=X(T_gf)$, its covariance
identity gives $U_g\Phi(f)U_g^{-1}|_{D_\omega}=\Phi(T_gf)$. [F5, F6, A2, step 1.2, step 3.1]

4.1 Assume [A4]. For the fixed $r$, [F2] gives
$(\pi_\omega(r)[a],[b])=\omega(b^*ra)=0$ for every $a,b$. The classes $[b]$
are dense in $H_\omega$, so $\pi_\omega(r)[a]=0$ for each
$[a]\in D_\omega$; hence $\pi_\omega(r)=0$ on $D_\omega$. Taking
$r=X(f)X(h)-X(h)X(f)$ and [A3] proves the stated locality conclusion.
Any tested field equation is obtained by the same substitution of its own
polynomial relation, without adding an unstated identity. [F2, A3, A4, algebra]

5.1 Assume [A5]. For fixed $a,b$, [F3] and translation invariance give
$$|D_{b,a}(z)|^2=|\omega(b^*\alpha_{\tau_z}(a))|^2\le\omega(b^*b)\,\omega(\alpha_{\tau_z}(a)^*\alpha_{\tau_z}(a))=\omega(b^*b)\,\omega(a^*a),$$
uniformly in $z$. The coefficient is continuous in $z$ by the argument of
step 3.1 and the translation subgroup's topology, so it is locally integrable.
Its boundedness is polynomial growth of degree zero; [F8] therefore makes it
a regular tempered distribution. [F3, F5, F8, A5, step 3.1, algebra]

5.2 Under translation invariance in [A5], restrict the action to the
translation subgroup $\mathbb R^4$. Step 3.1 gives continuity at the identity
of each coefficient on this subgroup; [F6] therefore supplies strongly
continuous unitaries $U_{\tau_z}$ fixing $\Omega_\omega$ and implementing
$\alpha_{\tau_z}$ on $D_\omega$. [F6, A5, step 3.1, given]

5.3 The GNS state-recovery identity and step 5.2 give
$$D_{b,a}(z)=\bigl(\pi_\omega(\alpha_{\tau_z}(a))\Omega_\omega,\pi_\omega(b)\Omega_\omega\bigr)=\bigl(U_{\tau_z}\pi_\omega(a)\Omega_\omega,\pi_\omega(b)\Omega_\omega\bigr).$$
Equal tempered distributions have equal transposed Fourier transforms by
[F7], so the assumed support of $\widehat D_{b,a,M}$ is exactly the support
of the reconstructed matrix coefficient. No generator or spectral-measure
assertion is used. [F2, F7, A5, step 5.2, algebra] ∎
