---
id: post-m2-cjs-superspace-constraints
kind: postulate
title: CJS Superspace Constraints for the M2 Membrane
status: published
origin: session
domain: physics
library: physics
dependency_level: 7
deps:
- post-eleven-dimensional-cjs-supergravity-action
- def-eleven-dimensional-lorentzian-geometry
- def-eleven-dimensional-spin-structure-and-majorana-bundle
- def-supergravity-conventions-and-normalizations
dependency_roles:
  post-eleven-dimensional-cjs-supergravity-action: formulation-prerequisite
  def-eleven-dimensional-lorentzian-geometry: mathematical-premise
  def-eleven-dimensional-spin-structure-and-majorana-bundle: mathematical-premise
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
physical_scope: Source-reported classical on-shell D=11, 32-fermionic-coordinate superspace background constraints over the complexified structure sheaf with real bosonic body in the
  stated mostly-plus CJS convention and the explicit C3/B3 sign normalization; not a derivation of superspace from the component
  action or a quantum completion.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: E. Bergshoeff, E. Sezgin, and P. K. Townsend, Supermembranes and Eleven-Dimensional Supergravity, Physics Letters
      B 189 (1987), equations (3)–(20)
    url: https://pure.rug.nl/ws/portalfiles/portal/14453122/1987PhysLettBBergshoeff4.pdf
  - title: E. Bergshoeff, E. Sezgin, and P. K. Townsend, Properties of the Eleven-Dimensional Supermembrane Theory, Annals
      of Physics 185 (1988), §2, equations (2.1), (2.18)–(2.22)
    url: https://pure.rug.nl/ws/files/14495060/1988AnnPhysBergshoeff.pdf
  - title: Paul K. Townsend, Four Lectures on M-theory, §2
    url: https://arxiv.org/pdf/hep-th/9612121v3
  - title: Paul K. Townsend, M-theory from its Superalgebra, Lecture 1
    url: https://arxiv.org/pdf/hep-th/9712004
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---

## Postulate

Adopt the standard source-reported on-shell $D=11$ supergravity superspace constraints for a classical Green–Schwarz membrane background, with the torsion convention $T^a_{\alpha\beta}=-2i(C\Gamma^a)_{\alpha\beta}$ and the four-form convention $G_{\alpha\beta ab}=+2i(C\Gamma_{ab})_{\alpha\beta}$. Here $\Gamma_a$ obeys $\{\Gamma_a,\Gamma_b\}=2\eta_{ab}$ for mostly-plus Lorentz metric $\eta$, indices $a,b=0,\ldots,10$ are vector indices, and $\alpha,\beta=1,\ldots,32$ are real Majorana spinor indices. Use a real antisymmetric charge-conjugation matrix $C$ with $C^{\mathsf T}=-C$ and $\Gamma_a^{\mathsf T}=-C\Gamma_aC^{-1}$, and set $\bar\psi=\psi^{\mathsf T}C$. These are physical background constraints, not consequences proved from the bosonic CJS action in this item.

## Postulate references

[[def-eleven-dimensional-spin-structure-and-majorana-bundle]]

[Bergshoeff, Sezgin, and Townsend, *Supermembranes and Eleven-Dimensional Supergravity*, eqs. (3)–(20)](https://pure.rug.nl/ws/portalfiles/portal/14453122/1987PhysLettBBergshoeff4.pdf)

[Bergshoeff, Sezgin, and Townsend, *Properties of the Eleven-Dimensional Supermembrane Theory*, §2, eqs. (2.1), (2.18)–(2.22)](https://pure.rug.nl/ws/files/14495060/1988AnnPhysBergshoeff.pdf)

[Townsend, *Four Lectures on M-theory*, §2](https://arxiv.org/pdf/hep-th/9612121v3)

[Townsend, *M-theory from its Superalgebra*, Lecture 1](https://arxiv.org/pdf/hep-th/9712004)

## Formulation

The superspace has the complexified structure sheaf of a real smooth $11|32$-dimensional supermanifold, with body an oriented Lorentzian eleven-manifold $M$. Locally over a body chart $U\subseteq M$, its sheaf of functions is $C^\infty(U)\otimes_\mathbb R\Lambda_\mathbb R(\theta^1,\ldots,\theta^{32})\otimes_\mathbb R\mathbb C$, where the $\theta^\mu$ are odd generators, $\theta^\mu\theta^\nu=-\theta^\nu\theta^\mu$, and smoothness means that every complex coefficient function on $U$ is smooth. The scalar $i$ is the complex unit. All superforms, connections and formal variations below take values in this complexified sheaf; their bosonic metric and potential bodies are the supplied real CJS fields. The real Majorana representation and its bilinear pairing are extended complex-linearly; the bar denotes transpose times $C$, without complex conjugation. This explicit scalar extension permits the displayed imaginary dimension-zero components without claiming they belong to a strictly real exterior algebra. The even coordinates are $x^m$, $m=0,\ldots,10$, and the odd coordinates are $\theta^\mu$, $\mu=1,\ldots,32$. A spin structure and real rank-$32$ Majorana spinor bundle are supplied background data ([[def-eleven-dimensional-spin-structure-and-majorana-bundle]]); no global existence for an arbitrary Lorentzian manifold is asserted.

Use $\hbar=c=1$. The coordinates $x^m$ and coframe $E^a$ have length dimension, $\theta^\mu$ and $E^\alpha$ have dimension length$^{1/2}$, the Clifford matrices and $C$ are dimensionless, and $\Omega_B{}^A$ is dimensionless as a one-form. The potential $C_3$ and $G_4=dC_3$ have form dimension length$^3$; these assignments make both displayed dimension-zero constraints dimensionally consistent. Write $p(a)=0$ and $p(\alpha)=1$ for vector and spinor frame-index parity. The local supervielbein $E^A=dZ^M E_M{}^A$, $E^A=(E^a,E^\alpha)$, is an invertible parity-preserving coframe with smooth superfunction coefficients. The Lorentz connection $\Omega_B{}^A$ is a smooth $\mathfrak{so}(10,1)\otimes_\mathbb R\mathbb C$-valued one-form preserving $\eta$ and the supplied spin structure. The graded exterior product convention is
$$
E^A\wedge E^B=-(-1)^{p(A)p(B)}E^B\wedge E^A.
$$
Let $R_B{}^A=d\Omega_B{}^A+\Omega_B{}^C\wedge\Omega_C{}^A$. For a local smooth super three-form potential $C_3$, set $G_4=dC_3$, define the torsion by $T^A=dE^A+E^B\wedge\Omega_B{}^A$, and fix the reversed-index component expansions $T^A=\frac12 E^B\wedge E^C T_{CB}{}^A$ and $G_4=\frac1{4!}E^D\wedge E^C\wedge E^B\wedge E^A G_{ABCD}$. Coefficients and forms use the Koszul rule: moving a coefficient of parity $q$ across $E^A$ gives $(-1)^{qp(A)}$; $d$ has form degree one and intrinsic parity zero, and satisfies the form-degree Leibniz rule. The charge-conjugation matrix $C$ is an invertible real antisymmetric matrix with the Majorana convention in the Postulate. For a vector-valued $p$-form $\alpha^A$ fix $D\alpha^A=d\alpha^A+(-1)^{p+1}\alpha^B\wedge\Omega_B{}^A$. Expanding the torsion gives $DT^A=dT^A-T^B\wedge\Omega_B{}^A=-E^B\wedge(d\Omega_B{}^A+\Omega_B{}^C\wedge\Omega_C{}^A)$. Thus the Bianchi identities are $DT^A=-E^B\wedge R_B{}^A$ and $dG_4=0$.

The source-reported conventional constraints used here include
$$
T^a_{\alpha\beta}=-2i(C\Gamma^a)_{\alpha\beta},\quad G_{\alpha\beta\gamma\delta}=G_{\alpha\beta\gamma a}=0,\quad G_{\alpha\beta ab}=+2i(C\Gamma_{ab})_{\alpha\beta},
$$
and
$$
T^a_{b\alpha}=T^\alpha_{\beta\gamma}=T^a_{bc}=G_{\alpha abc}=0,\qquad DT^A=-E^B\wedge R_B{}^A,\qquad dG_4=0.
$$
The last two equations are the torsion and four-form Bianchi identities in the stated connection convention. The listed constraints are the conventional source choice needed for the local membrane variation; no claim is made here that the displayed subset alone proves all CJS field equations.

The 1988 source writes its Wess–Zumino potential as $B_3=\frac16 E^A\wedge E^B\wedge E^C B_{CBA}$ and its component action with Wess–Zumino term $-\varepsilon^{ijk}\Pi_i^A\Pi_j^B\Pi_k^C B_{CBA}$. Since $\int_\Sigma B_3=\frac16\int d^3\xi\,\varepsilon^{ijk}\Pi_i^A\Pi_j^B\Pi_k^C B_{CBA}$, the convention matching the planned $+C_3$ action is
$$
C_3=-6B_3,\qquad G_4=dC_3=-6\,dB_3.
$$
Its source component $(dB_3)_{\alpha\beta ab}=-(i/3)(\Gamma_{ab})_{\alpha\beta}$, where the source notation with both spinor indices lowered denotes the corresponding $C\Gamma_{ab}$ bilinear, therefore becomes $G_{\alpha\beta ab}=+2i(C\Gamma_{ab})_{\alpha\beta}$. This explicit map fixes the relative Wess–Zumino sign and coefficient used below; it does not set the independent membrane tension.

## Physical status and limits

Here “on-shell” refers to the standard source-reported CJS superspace constraint system together with its Bianchi identities, which the cited treatments identify with the classical component field equations. This postulate adopts only the displayed subset needed for the membrane variation; that subset alone is not asserted to imply all CJS field equations. No local derivation from the component action, superspace existence theorem, quantum path-integral measure, or nonperturbative M-theory existence result is claimed.

