---
id: def-cft-r5-exceptional-n1-target-data
kind: definition
title: Source-defined exceptional $N=1$ minimal-model target data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
deps:
  - def-cft-r5-full-local-cft-data
  - def-cft-r5-n1-superconformal-algebra
dependency_roles:
  def-cft-r5-full-local-cft-data: mathematical-premise
  def-cft-r5-n1-superconformal-algebra: mathematical-premise
physical_scope: "Source-reported target data for the two-dimensional exceptional (E6,D8), m=12 N=1 minimal model; no Landau–Ginzburg RG identification is asserted."
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Yu Nakayama, Andrei Katsevich, Igor R. Klebanov, Zimo Sun, Landau–Ginzburg description of an exceptional N=1 minimal model, arXiv:2609.10972v2"
      url: https://arxiv.org/pdf/2609.10972v2
      locator: "§1 (m=12, (E6,D8), central charge and super-W3 target); §§3.2–3.7 (extended modules, modular data, Ramond sector, chiral fermion grading, R-parity, fusion and the unresolved upper resolved-tower lift sign); §4.1 (operator dictionary); §4.3 (RG-flow outcomes)."
    - title: "Matthias R. Gaberdiel, An Introduction to Conformal Field Theory, arXiv:hep-th/9910156v2"
      url: https://arxiv.org/pdf/hep-th/9910156v2
      locator: "§3.7.6, printed pp. 29–31, N=1 and extended superconformal algebras."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Facts & Assumptions

**Given:** All algebra modes and central charges use the conventions of the local $N=1$ super-Virasoro item. A full local CFT claim must meet the state-space/OPE interface separately.

[F1] [[def-cft-r5-n1-superconformal-algebra|$N=1$ superconformal mode algebra in NS and Ramond sectors]]: The $N=1$ super-Virasoro algebra has stress-tensor modes $L_m$, odd supercurrent modes $G_r$, bracket $[L_m,G_r]=(m/2-r)G_{m+r}$, and NS modes $r\in\mathbb Z+\tfrac12$.

[F2] [[def-cft-r5-full-local-cft-data]]: The full-local-CFT package specifies local fields, convergent OPE data, locality and crossed-channel equality; it is not a theorem that a model with a proposed spectrum exists.

[A1] Nakayama, Katsevich, Klebanov and Sun, arXiv:2609.10972v2, report the exceptional target as the $m=12$, $(E_6,D_8)$ $N=1$ minimal model, whose extended chiral algebra is the super-$W_3$ algebra $SW(3/2,5/2)$.

## Definition

The **source-defined exceptional target** means the two-dimensional minimal-model target reported in [A1], with central charge convention
$$
c_m=\frac32\left(1-\frac{8}{m(m+2)}\right),\qquad m=12,
$$
and the exceptional modular invariant labelled $(E_6,D_8)$. Its $N=1$ super-Virasoro algebra from [F1] is a subalgebra, not its full chiral algebra. The reported full chiral algebra is the extension $SW(3/2,5/2)$: besides the $N=1$ super-stress-tensor generators of spins $3/2$ and $2$, it has an additional superprimary of weight $5/2$, with components of spins $5/2$ and $3$.

Here a **superprimary of weight $h$** means a nonzero homogeneous vector $v$ in an NS representation of the supplied $N=1$ algebra such that $L_0v=hv$, $L_nv=0$ for every integer $n>0$, and $G_rv=0$ for every positive half-integer $r$. The source reports the additional $h=5/2$ generator as a fermionic superprimary $U$; its superpartner $G_{-1/2}U$ has weight $3$ by the $[L_0,G_{-1/2}]$ relation and is reported as the bosonic spin-$3$ current.

The reported extended modules are indexed by the following table (source §3.2, Table 2). An extended module is a representation of the reported extended chiral algebra; the listed weights are the $L_0$ eigenvalues of its super-Virasoro primary vectors, each generating its tower of descendants. The orbit column uses the second Kac index $s$ with the equivalence $s\sim14-s$ on $\{1,3,5,7,9,11,13\}$. These are reported representation data, not a construction or existence proof of the extended algebra.

| Sector | Module | Orbit | Super-Virasoro primary weights |
|---|---|---|---|
| NS | $\mathbf1$ | $\{1,13\}$ | $0,5/2,11/2,15$ |
| NS | $\widehat\Phi_{1,3}$ | $\{3,11\}$ | $5/14,6/7,20/7,145/14$ |
| NS | $\widehat X$ | $\{5,9\}$ | $1/14,15/14,11/7,46/7$ |
| NS | $\Phi_+,\Phi_-$ | $\{7\}$ | $1/7,51/14$ in each module |
| R | $R_{3/2}$ | $\{1,13\}$ | $3/2,15/2$ |
| R | $R_{5/14}$ | $\{3,11\}$ | $5/14,61/14$ |
| R | $R_{1/14}$ | $\{5,9\}$ | $1/14,29/14$ |
| R | $R_{9/14,+},R_{9/14,-}$ | $\{7\}$ | $9/14$ in each module |

The fixed orbit $\{7\}$ is resolved into two inequivalent modules in each sector. Their characters coincide, but their lowest states have opposite nonzero eigenvalues of the spin-$3$ current's zero mode $W_0$; the subscripts $\pm$ label that pair, not fermion parity. Thus each sector has five extended modules. For the NS labels $a\in A=\{\mathbf1,\widehat\Phi_{1,3},\widehat X,\Phi_+,\Phi_-\}$, write $B_a$ for the module and $h_a$ for its smallest weight in the table. A descendant is obtained by a finite word in negative current modes from a lowest state; its level $\ell$ is its $L_0$ eigenvalue minus $h_a$. The NS character is the trace $\hat\chi_a(\tau)=\operatorname{Tr}_{B_a}\exp(2\pi i\tau(L_0-c_{12}/24))$ in the source's convergent upper-half-plane domain. The reported NS partition function is $Z_{\rm NS}=\sum_{a\in A}|\hat\chi_a|^2$ (equation (34)). This statement concerns the reported spectrum, not a reconstruction of the full local package.

The chiral-fermion-parity operator $\omega$ on $B_a$ has eigenvalue $\omega_a(-1)^{2\ell}$ on level $\ell\in\tfrac12\mathbb Z_{\ge0}$, where
$$
(\omega_{\mathbf1},\omega_{\widehat\Phi_{1,3}},\omega_{\widehat X},\omega_{\Phi_+},\omega_{\Phi_-})=(+1,-1,-1,+1,+1).
$$
The right operator $\widetilde\omega$ uses the right level instead. Thus the signs of the lowest states are not constant signs on entire modules. In the source's three-point convention, $N_{abc}^{+}$ and $N_{abc}^{-}$ count even and odd chiral three-point structures, respectively, and $N_{abc}$ is their sum; a structure is even or odd according to the parity of its number of supercurrent top components. The reported grading is $N_{abc}^{\pm}=N_{abc}(1\pm\omega_a\omega_b\omega_c)/2$ (equations (36), (44), (46)). These NS signs do not assign a single parity to a Ramond module with odd zero modes.

Distinguish the conjugation operator $C_{\rm conj}$ from the central mode $C$ of [F1]. On the diagonal NS sectors $B_a\otimes\widetilde B_a$, $C_{\rm conj}$ is the source's simultaneous left/right lift of the current automorphism $(T,G,U,W)\mapsto(T,G,-U,-W)$. Explicitly, its lift intertwines every current mode $V_n$ with $(AV)_n$, where $A$ is that sign automorphism; it maps the $a$ sector to the $\mathcal C(a)$ sector, with $\mathcal C$ fixing $\mathbf1,\widehat\Phi_{1,3},\widehat X$ and exchanging $\Phi_+,\Phi_-$. The lift is normalized to square to one, fix the lowest state of each fixed diagonal sector, and exchange the normalized lowest states of the resolved sectors without a phase. Its action on current descendants must satisfy that intertwining relation. On the four super-Virasoro towers in each fixed NS module, in the weight order of the table, the source gives relative lift signs $(+,-,+,-)$ for $\mathbf1$ and $\widehat\Phi_{1,3}$, and $(+,-,-,+)$ for $\widehat X$; on a left/right tower pair $C_{\rm conj}$ acts by the product of the tower signs. The source leaves the relative exchange sign $\eta\in\{+1,-1\}$ on the upper resolved tower of weight $51/14$ undetermined (equations (51)–(52), §3.7); the lower resolved tower is normalized to exchange with sign $+1$. That unresolved datum is retained, rather than supplied by a label permutation. It is not a constant sign on every tower or sector. These are source-reported lift data (§3.6), whose existence is not deduced from the label permutation alone. The source's R-parities are $R=\omega C_{\rm conj}$ and $\widetilde R=\widetilde\omega C_{\rm conj}$ (equation (48)); the commuting factors give involutions. On the comparison superfields the chosen $R$ has superspace action
$$
\Phi(x,\theta,\widetilde\theta)\longmapsto-\Phi(x,-\theta,\widetilde\theta),\qquad \Phi=(X,Y).
$$
Here $x$ is a local Euclidean coordinate on the two-dimensional worldsheet, and $\theta,\widetilde\theta$ are independent Grassmann-odd coordinates, meaning $\theta^2=\widetilde\theta^2=0$ and $\theta\widetilde\theta=-\widetilde\theta\theta$. These are source conventions for the target comparison. Modular and fusion data alone do not supply the full local OPE package in [F2].

## Proof
 1.1 Substitution of $m=12$ gives $m(m+2)=168$, so $c_{12}=\frac32(1-8/168)=\frac32(20/21)=10/7$. This is the arithmetic consequence of the source's minimal-model convention, not a derivation of the model's existence. [given, A1, algebra]

2.1 The target has the $N=1$ algebra of [F1] as a subalgebra, while [A1] reports the strictly extended $SW(3/2,5/2)$ chiral algebra. Thus the target cannot be specified by the $N=1$ algebra alone. By [F2], the reported modular and fusion data do not by themselves establish a complete full-local-CFT realization. [given, F1, F2, A1, step 1.1] ∎