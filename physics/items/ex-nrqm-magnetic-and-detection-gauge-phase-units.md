---
id: ex-nrqm-magnetic-and-detection-gauge-phase-units
aliases: [nrqm-magnetic-and-detection-example-gauge-phase-units]
kind: example
domain: mathematics
title: "Gauge phase periodicity, a linear gauge, and the dimension vector of q chi over hbar"
status: published
origin: pipeline
dependency_level: 4
deps: [thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation, thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator, def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, def-nrqm-magnetic-and-detection-position-and-momentum-operators, thm-spectral-theorem-for-unbounded-self-adjoint-operators, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, def-unbounded-integral-against-a-pvm, def-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-kernel-and-fibres-of-complex-exponential, thm-derivative-of-exponential, def-sobolev-space-wkp-and-its-norm, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation: mathematical-premise
  thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator: mathematical-premise
  def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  def-complex-exponential: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 3.5 pp. 49-54 (gauge transformation of the potentials and the phase factor)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "BIPM, The International System of Units (SI), 9th edition 2019, Chapter 2 §§2.3.1–2.3.4, printed pp. 126–134 (Tables 2–4: base units, dimensions, and derived units; current PDF v4.01, June 2026)"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf"
---

## Example

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Fix $\hbar>0$, $m>0$,
$q\in\mathbb R$ and consider the gauge multiplication
$G:=M_{e^{iq\chi/\hbar}}$ of
[[thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation]].

(a) *Periodicity of the phase.* If $\chi,\chi':\mathbb R^3\to\mathbb R$ are
real functions and $\chi-\chi'$ takes values in
$\frac{2\pi\hbar}{q}\mathbb Z$ when $q\ne0$, then
$e^{iq\chi/\hbar}=e^{iq\chi'/\hbar}$ pointwise; in particular
$M_{e^{iq(\chi+2\pi\hbar/q)/\hbar}}=M_{e^{iq\chi/\hbar}}$. If $q=0$ then
$G=I$.

(b) *A linear gauge.* Let $A=0$, $\Phi=0$, let $c\in\mathbb R^3$ and let
$\chi(x):=c\cdot x$, time-independent. Then $A'_j=\partial_j\chi=c_j$,
$\Phi'=-\partial_t\chi=0$, and on $W^{2,2}(\mathbb R^3;\mathbb C)$
$$K_{c,0}=G\,K_{0,0}\,G^{-1},\qquad G(P_j)G^{-1}=P_j-qc_j,\qquad e^{-itK_{c,0}/\hbar}=G\,e^{-itK_{0,0}/\hbar}\,G^{-1},$$
so the constant vector potential is removed by the unitarity $G$; in
particular, $K_{c,0}$ and $K_{0,0}$ have the same spectrum, and their
operator-domain pairings agree under $G$:
$$\langle K_{c,0}Gf,Gf\rangle=\langle K_{0,0}f,f\rangle\qquad(f\in W^{2,2}(\mathbb R^3;\mathbb C)).$$

(c) *Dimension vector.* In the SI dimension convention with base dimensions
$(\mathrm m,\mathrm{kg},\mathrm s,\mathrm A)$ and dimension vectors
$$[q]=(0,0,1,1),\qquad[\chi]=(2,1,-2,-1),\qquad[\hbar]=(2,1,-1,0),$$
the combination $q\chi/\hbar$ has dimension vector
$[q]+[\chi]-[\hbar]=(0,0,0,0)$: it is dimensionless in that convention. (The
dimension-vector formalism is a bookkeeping device; the assignment of
dimension vectors to the physical quantities is an external convention, not a
mathematical consequence.)

## Verification

**Given:** $\hbar>0$, $m>0$, $q\in\mathbb R$; gauge multipliers as in [[thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation]]; in (b) the data $A=0$, $\Phi=0$, $\chi(x)=c\cdot x$ with $\chi$ regarded as a function on $\mathbb R^3\times\mathbb R$ constant in $t$.

**Proof technique:** direct verification of the phase algebra, of the conjugation identities and of the finite dimension-vector arithmetic.

[F1] For real $\alpha$, Euler's formula gives $|e^{i\alpha}|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]); the complex exponential's fibres are exactly its translates by $2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[F2] The covariance identity of [[thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation]] clause (c): $(P_j-q(A_j+\partial_j\chi))G=G(P_j-qA_j)$ on $W^{1,2}$; the gauge unitarity and $W^{2,2}$-preservation of $G$ are clauses (a)-(b) there.

[F3] $K_{A,\Phi}$ of [[def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator]] is self-adjoint on $W^{2,2}$ and equals the displayed magnetic square plus scalar potential ([[thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator]]); $P_j$ is linear on its domain.

1.1 [Periodicity] If $q\ne0$ and $\chi(x)-\chi'(x)=\frac{2\pi\hbar}{q}k(x)$ with $k(x)\in\mathbb Z$, then $i\frac q\hbar(\chi-\chi')(x)=2\pi i k(x)\in2\pi i\mathbb Z$. By [F1], $e^{i\frac q\hbar\chi(x)}=e^{i\frac q\hbar\chi'(x)}$ pointwise, hence the multipliers agree; $\chi+2\pi\hbar/q$ is the case $\chi'=\chi$. If $q=0$ then $e^{i0\cdot\chi/\hbar}=1$. This is (a). [given, F1, algebra]

1.2 [Linear gauge conjugations] Take $\chi(x)=c\cdot x$, $\partial_j\chi=c_j$ constant and $\partial_t\chi=0$. By [F2] with $A=0$, $(P_j-qc_j)G=GP_j$ on $W^{1,2}$. For the inverse, compute on $f\in W^{1,2}$: $D_j(G^{-1}f)=G^{-1}\bigl(D_jf-i\frac{qc_j}\hbar f\bigr)$, hence $P_jG^{-1}f=G^{-1}(P_j-qc_j)f$; multiplying by $G$ on the left gives $GP_jG^{-1}=P_j-qc_j$ on $W^{1,2}$. [given, F2, F3, algebra]

2.1 [Operator identity and propagator] For $u\in W^{2,2}$, $(P_j-qc_j)^2Gu=(P_j-qc_j)G(P_ju)=G P_j(P_ju)$ by two uses of step 1.2, so $K_{c,0}G=GK_{0,0}$ on $W^{2,2}$; since $G$ is a bijection of $W^{2,2}$ onto itself ([F2]), this gives $K_{c,0}=GK_{0,0}G^{-1}$ with common domain $W^{2,2}$. Both operators are self-adjoint by [F3]; the conjugate of the spectral PVM of $K_{0,0}$ by $G$ is a regular PVM representing $K_{c,0}$, hence is its spectral PVM by the uniqueness clause of the spectral theorem, so every bounded Borel function satisfies $h(K_{c,0})=Gh(K_{0,0})G^{-1}$ and in particular $e^{-itK_{c,0}/\hbar}=Ge^{-itK_{0,0}/\hbar}G^{-1}$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[def-unbounded-integral-against-a-pvm]]); the spectra coincide because $G$ carries the resolvent of $K_{0,0}$ to that of $K_{c,0}$, $(K_{c,0}-z)^{-1}=G(K_{0,0}-z)^{-1}G^{-1}$. This is (b). [given, step 1.2, F3, algebra]

3.1 [Dimension vector] With the stated vectors, $[q]+[\chi]-[\hbar]=(0+2-2,\ 0+1-1,\ 1-2+1,\ 1-1-0)=(0,0,0,0)$, so the combination $q\chi/\hbar$ has zero dimension vector; this is a four-component integer computation. This is (c). [given, algebra] ∎
