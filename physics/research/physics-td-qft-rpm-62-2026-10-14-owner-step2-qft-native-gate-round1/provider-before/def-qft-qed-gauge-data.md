---
id: def-qft-qed-gauge-data
kind: definition
title: Charged gauge data and SI-natural conventions
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-countable-choice
  - def-qft-dirac-projections
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-dirac-projections: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §§6.1–6.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; QED gauge transformations, photon polarizations, Coulomb constraint and field observables.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §§54–58
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; Maxwell and Coulomb gauge, transverse modes, and QED conventions. Its signature and charge conventions are translated explicitly here.
    - title: BIPM, The International System of Units (SI), 9th edition, version 4.01
      url: https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf
      locator: Official brochure §§2.2 and 2.3.1; exact fixed constants and the experimentally determined status of $\mu_0$.
---

## Definition

Use the fixed Minkowski coordinates $x=(x^0,\mathbf x)=(ct,x^1,x^2,x^3)$, with $\eta=\operatorname{diag}(-1,1,1,1)$, on an open coordinate domain $U\subseteq\mathbb R^4$ with its standard topology. Each $x^a$ has unit metre. For a smooth scalar component $u:U\to\mathbb R$ or $u:U\to\mathbb C$, define $\partial_a u:=\partial u/\partial x^a$; thus $\partial_0=c^{-1}\partial_t$ at fixed $\mathbf x$, $\partial_j=\partial/\partial x^j$ for $j=1,2,3$, and each $\partial_a$ has unit $\mathrm m^{-1}$. Raise derivative indices with $\partial^a:=\eta^{ab}\partial_b$. The fields in this definition are smooth maps
$$\phi\in C^\infty(U;\mathbb R),\qquad \mathbf A\in C^\infty(U;\mathbb R^3),\qquad \psi\in C^\infty(U;\mathbb C^4),\qquad \chi\in C^\infty(U;\mathbb R).$$
Define the lower-potential component maps $A_a:U\to\mathbb R$ by $A_0=-\phi/c$ and $A_j=\mathbf A_j$; collectively $(A_a)$ is the real covector potential in this chart. Then $F_{ab}:=\partial_aA_b-\partial_bA_a$ has smooth real component maps $F_{ab}:U\to\mathbb R$. The spinor is an ordinary commuting $\mathbb C^4$-valued map, not a tuple of Grassmann generators. Its Dirac adjoint is the smooth row-valued map $\bar\psi:=\psi^\dagger\beta:U\to(\mathbb C^4)^*$, using the fixed matrices and adjoint of [[def-qft-dirac-projections]], so $\{\gamma^a,\gamma^b\}=-2\eta^{ab}I_4$. In fixed SI units, $\phi$ is in volts, each $A_a$ is in $\mathrm{T\,m}$, $\psi$ is assigned field dimension $\mathrm m^{-3/2}$, and $\chi$ is in webers; these unit labels accompany the maps and do not identify $q$ with a measured charge. For periodic spatial domains, the same component and unit conventions apply to smooth periodic coordinate lifts, with the quotient domain specified by the item using them.

For the SI-normalization bookkeeping, let $c>0$ (m s$^{-1}$), $\hbar>0$ (J s), $\mu_0>0$ (N A$^{-2}$), a real charge parameter $q$ (C), and a mass parameter $m>0$ (kg) be symbolic inputs; put $\epsilon_0=(\mu_0c^2)^{-1}$. In the current SI, $c$ and $h$ are defining constants while $\mu_0$ is experimentally determined; the formula below keeps $\mu_0$ symbolic and assigns it no numerical value. Use the lower-potential convention
$$A_a=(-\phi/c,\mathbf A),$$
where $A_a$ has units T m, $\phi$ is in volts, and $\mathbf A$ is in T m. Define
$$S_0=\sqrt{\mu_0\hbar c},\qquad a_a=A_a/S_0,\qquad f_{ab}=\partial_aa_b-\partial_ba_a,$$
$$\mu=mc/\hbar,\qquad g=q\sqrt{\mu_0c/\hbar}=q/\sqrt{\epsilon_0\hbar c},\qquad D_a=\partial_a-ig a_a.$$
Here $D_a$ acts on $\psi\in C^\infty(U;\mathbb C^4)$ by $(D_a\psi)(x)=\partial_a\psi(x)-ig a_a(x)\psi(x)$, again a smooth map $U\to\mathbb C^4$. Thus $a_a$ and $\mu$ have units m$^{-1}$, $f_{ab}$ has units m$^{-2}$, and $g$ is dimensionless. For $\psi$ with units m$^{-3/2}$, both $-\tfrac14 f_{ab}f^{ab}$ and $\bar\psi(i\gamma^aD_a-\mu)\psi$ have units m$^{-4}$; their integral over $d^4x$ is dimensionless and represents the action divided by $\hbar$ in this normalization.

For the real smooth gauge-parameter map $\chi:U\to\mathbb R$ in webers, put $\alpha:=\chi/S_0\in C^\infty(U;\mathbb R)$ (dimensionless) and use
$$A'_a=A_a+\partial_a\chi,\qquad a'_a=a_a+\partial_a\alpha,\qquad \psi'=e^{ig\alpha}\psi.$$
The induced covariant derivative is $D'_a=\partial_a-ig a'_a$. These are formal mathematical conventions for the later conditional deductions. They do not adopt a measured value of $\mu_0$, identify $q$ with an electron charge, impose charge quantization, or assert that interacting continuum fields exist.

## Facts & Assumptions

**Given:** The matrix and adjoint conventions of [[def-qft-dirac-projections]]; symbolic SI inputs with the units stated above; smooth $A,\chi,\psi$; and commuting coordinate derivatives.

[A1] The fixed representation uses $\gamma^0=\beta$, $\gamma^j=\beta\alpha_j$, $\bar z=z^\dagger\beta$, and the Clifford relation $\{\gamma^a,\gamma^b\}=-2\eta^{ab}I_4$. [[def-qft-dirac-projections]]

[A2] Assume Countable Choice, as required by the conditional Dirac-data supplier. [[def-countable-choice]]

## Proof

**Given:** [A1], [A2], and the symbolic unit assignments in the definition.

1.1 The Clifford and adjoint conventions in the definition are the exact ones in [A1]; in particular, no change from $\eta=(-,+,+,+)$ to the slash-matrix convention $-\eta$ is made when raising the indices on $F_{ab}$. The supplier's Countable Choice hypothesis is carried explicitly in [A2]. [given, A1, A2, algebra]

1.2 Since $\mu_0$ has units kg m C$^{-2}$ and $\hbar c$ has units kg m$^3$ s$^{-2}$, $S_0$ has units kg m$^2$(C s)$^{-1}$. Dividing $A_a$, whose units are kg m(C s)$^{-1}$, by $S_0$ gives $[a_a]=$m$^{-1}$. Also $[\mu]=[mc/\hbar]=$m$^{-1}$ and $[\mu_0c/\hbar]=$C$^{-2}$, so $[g]=1$. A derivative has units m$^{-1}$; hence both terms in $D_a$ have units m$^{-1}$. The two displayed Lagrangian densities therefore have units m$^{-4}$ and their spacetime integral is dimensionless. [given, algebra]

2.1 Under the stated transformation,
$$D'_a\psi'=(\partial_a-ig(a_a+\partial_a\alpha))(e^{ig\alpha}\psi) =e^{ig\alpha}\bigl(\partial_a\psi+ig(\partial_a\alpha)\psi-ig a_a\psi-ig(\partial_a\alpha)\psi\bigr) =e^{ig\alpha}D_a\psi.$$
Thus $\bar\psi'(i\gamma^aD'_a-\mu)\psi'=\bar\psi(i\gamma^aD_a-\mu)\psi$, since $\overline{\psi'}=e^{-ig\alpha}\bar\psi$. Further, $f'_{ab}=f_{ab}$ because $\partial_a\partial_b\alpha=\partial_b\partial_a\alpha$. These are algebraic covariance identities for smooth fields. [given, A1, step 1.1, algebra] ∎
