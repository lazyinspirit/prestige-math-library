---
id: ex-cft-r5-replica-potts-numerical-bootstrap
kind: example
title: Numerical bootstrap of coupled two-dimensional Potts replicas
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: physics
library: physics
deps:
  - def-cft-r5-two-dimensional-bootstrap-system
dependency_roles:
  def-cft-r5-two-dimensional-bootstrap-system: mathematical-premise
physical_scope: "Numerical crossing study motivated by the scaling limit of three coupled critical 3-state Potts models; it reports no experiment and does not prove a unique continuum theory."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Stefanos R. Kousvos, Alessandro Piazza, Alessandro Vichi, Exploring Replica-Potts CFTs in Two Dimensions, arXiv:2405.19416v1 (2024-05-29)"
      url: https://arxiv.org/pdf/2405.19416v1
      locator: "§1, §§2.1–2.3, §4.1 (Table 4.2), §4.4, Figures 4.17–4.19, Appendix A.7–A.9, Appendix B."
      source_limit: "The article reports finite global-SL(2,R) numerical constraints with explicit spectral gaps and truncations. It reports a peninsula, not an isolated island or a proof of full-local-CFT existence."
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988; published 1989), arXiv:hep-th/9108028v1"
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§3.7, printed pp. 42–45: four-point OPE channels, crossing, and the distinction between chiral blocks and the full correlator."
      source_limit: "Pedagogical consistency discussion; it does not prove convergence or existence for the replica-Potts model."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

For a positive integer $m$, let $S_m$ be the permutation group of $\{1,\ldots,m\}$. For positive integers $n,Q$, the wreath-product group $S_n\ltimes(S_Q)^n$ is the semidirect product in which $S_n$ permutes the $n$ factors of $(S_Q)^n$. For the motivating lattice terminology, fix square boxes $\Lambda_L=\{-L,\ldots,L\}^2\subset\mathbb Z^2$, $L\ge1$, with nearest-neighbor edges $E_L$ joining pairs at Euclidean distance $1$, and free boundary conditions (edges leaving the box are omitted). At real dimensionless coupling $K$, define the finite-volume Potts probability by $P_{L,K}(\sigma)=Z_{L,Q}(K)^{-1}\exp(K\sum_{\{x,y\}\in E_L}\mathbf 1_{\sigma(x)=\sigma(y)})$ on $\{1,\ldots,Q\}^{\Lambda_L}$, where $Z_{L,Q}(K)$ is the sum of the displayed positive weight over all configurations. Three uncoupled replicas have the product probability. For $Q=3$, criticality refers to supplied thermodynamic data: a value $K_c>0$ and a pressure $p_3(K)=\lim_{L\to\infty}|\Lambda_L|^{-1}\log Z_{L,3}(K)$ existing near $K_c$ and not real analytic at $K_c$. It is not a singularity of any finite-volume partition function. This finite-volume convention explains the lattice terminology; it is not an asserted lattice setup of the bootstrap solver. Thermodynamic and continuum limits and their identification with CFT data are additional hypotheses, not deductions here. For a field of left and right conformal weights $(h,\bar h)$, define its total scaling dimension by $\Delta=h+\bar h$ and its spin by $\ell=h-\bar h$. In the $n=Q=3$ case put $G=S_3\ltimes(S_3)^3$ and $W=\{x\in\mathbb C^3:x_1+x_2+x_3=0\}$, with each base-group factor acting by coordinate permutations on its copy $W_a$. The full defining representation is $V=W_1\oplus W_2\oplus W_3$, with the outer $S_3$ permuting summands; the irrep $Z_3$ is $W_1\otimes W_2\otimes W_3$, with the outer $S_3$ permuting tensor factors. An irreducible representation has no nonzero proper invariant subspace. Thus $\dim V=6$ and $\dim Z_3=8$. Let $\phi$ and $Z_3$ denote the source's lowest spin-zero primary fields in representations $V$ and $Z_3$ respectively. The candidate continuum theory is the paper's proposed scaling-limit description of three critical two-dimensional three-state Potts copies perturbed by the energy-energy interaction $g\int_{\mathbb R^2}d^2x\sum_{a\ne b}\epsilon^a(x)\epsilon^b(x)$, where $\epsilon^a$ is the thermal or mass-deformation operator of copy $a$. Here “scaling-limit description” means candidate limits of bulk correlation distributions: first take the declared thermodynamic limit $L\to\infty$, then let the lattice spacing $a>0$ tend to zero with specified field normalizations at fixed distinct physical positions. Existence of these limits, tuning of the coupled model to criticality, and identification with the continuum fields remain proposed model assumptions; the study does not construct them.

Here a numerical global-block bootstrap means a finite linear-functional search on global-block crossing-sum vectors subject to declared spectral gaps and derivative, spin, and solver cutoffs. A spectral-gap assumption $\Delta_{R,\ell}\ge\delta$ is a lower bound $\delta$ on dimensions of exchanged operators in representation $R$ and spin $\ell$, with an explicitly isolated operator treated separately. A mixed-correlator calculation uses the joint crossing system for four-point functions with more than one external field species. The global blocks retain descendants of only the subalgebras generated by $L_{-1},L_0,L_1$ and their barred counterparts, not full Virasoro descendants. A parameter point reported as numerically allowed is one not excluded by the functionals found in that finite search; this does not prove that full crossing data or a full local CFT exist. The study analyzes scalar-field crossing constraints and, for $n=Q=3$, reports numerical bounds and an allowed region for selected low-lying scaling dimensions in the candidate regime. Its $\phi$–$Z_3$ mixed-correlator calculation reports a peninsula containing the coupled-model estimates under its stated spectral gaps and finite truncation. The source reports neither an isolated island nor a unique theory or construction of full local CFT data. This is a numerical crossing study, not a reported experiment; earlier transfer-matrix and Monte Carlo findings mentioned by the paper are not premises of this example.

## Example references

[[def-cft-r5-two-dimensional-bootstrap-system]]

## Facts & Assumptions

[F1] [[def-cft-r5-two-dimensional-bootstrap-system]]: The full-local data package requires weak local fields, absolutely and locally uniformly convergent OPE/block expansions on declared domains, bosonic locality or the specified spin-locality, and equality of all iterated OPE trees after declared continuation. A formal crossing solution without those data is not a full-local CFT datum.

[A1] Kousvos, Piazza, and Vichi study the group $G$ and representations $V,Z_3$ defined in the Example; their source notation $R$ labels an irreducible representation, $\Delta_{R,\ell}$ is the dimension of its leading operator at spin $\ell$, and a prime denotes the next subleading operator in that sector. The source labels $S$ for the trivial representation, $X$ for the zero-sum representation of the outer copy-permutation group, and $A$ for the three-copy representation built from the sign representation of each base $S_3$ factor. For distinct copies, $Z$ and $B$ are the symmetric and antisymmetric combinations of $W_a\otimes W_b$, respectively. Composite labels such as $(VA),(AZ),(AA),(VAA),(AAA)$ denote the irreducible summands formed by the tensor-product and outer-permutation construction specified in the source's §§2.2–2.3 and Table 2.1. Their Table 4.2 gaps are $\Delta_{S,0}\ge1$, $\Delta_{S,2}=2$ for the stress tensor, $\Delta_{S'_2}\ge2.5$, $\Delta_{S,\ell}\ge\ell$ for singlet spin $\ell=1$ or $\ell\ge3$, $\Delta_{X,0}\ge0.5$, $\Delta_{V'_0}=\Delta_{\phi'_0}\ge0.7$, $\Delta_{Z,0}\ge0.2$, $\Delta_{A,1}\ge1.1$, $\Delta_{(VA),1}\ge1.2$, $\Delta_{(AZ),1}\ge1.2$, $\Delta_{(AA),0}\ge2.2$, $\Delta_{(VAA),0}\ge2.3$, $\Delta_{(AAA),0}\ge3.3$, and $\Delta_{(Z'_3),0}\ge1$. Other nonsinglet operators obey the two-dimensional unitarity bound with twist gap $\tau=10^{-6}$, $\Delta\ge\ell+\tau$; singlets obey unitarity only because identity Virasoro descendants have zero twist. For Figures 4.18–4.19 the additional scalar gap is $\Delta_{Z',0}\ge1$, distinct from the baseline $\Delta_{(Z'_3),0}\ge1$ in Table 4.2. Figure 4.17 uses the Table 4.2 leading gap $\Delta_{Z,0}\ge0.2$, not that additional subleading-$Z$ condition. For all three Figures 4.17–4.19 the stress-tensor OPE ratio is fixed to $\lambda_{\phi\phi T_{\mu\nu}}/\lambda_{Z_3Z_3T_{\mu\nu}}=\Delta_\phi/\Delta_{Z_3}$, where each $\lambda_{ABT_{\mu\nu}}$ is the source's OPE coefficient for the indicated external pair and the stress-tensor exchange. These are assumptions and numerical choices of the source's functional search, not independently established physical postulates or observations in this item.

[L1] Kousvos, Piazza, and Vichi, arXiv:2405.19416v1, §1, §§2.1–2.3, §4.1/Table 4.2, §4.4, [Figures 4.17–4.19](https://arxiv.org/pdf/2405.19416v1#page=27), Appendices A.7–A.9 and B. The source defines the field representations and projected crossing sum rules, reports the gap assumptions and numerical settings, and describes the allowed region as a peninsula without signs of becoming an island.

[L2] Ginsparg, Applied Conformal Field Theory, §3.7, printed pp. 42–45. The notes explain that associativity equates different OPE decompositions of a four-point function and that chiral blocks are summed to obtain the full correlator; this is a consistency discussion, not a model-specific proof.

## Verification

**Given:** The source's full text and declared numerical setup are as recorded in [L1]; the mathematical boundary between a full-local datum and a formal crossing system is [F1].

1.1 Each $W_a$ has dimension $3-1=2$, so $V=W_1\oplus W_2\oplus W_3$ has dimension $3\cdot2=6$, while $Z_3=W_1\otimes W_2\otimes W_3$ has dimension $2^3=8$. The source's table of low-lying irreducible representations uses the shorthand $VVV$ for this replica-factor representation; it is not the tensor cube of the full six-dimensional $V$. [given, A1, L1, algebra]

1.2 Appendix B reports simpleboot parameters $d=2$, $\Lambda=19$, $\kappa=14$, $r_N=56$, and exchanged-spin set $\{0,\ldots,26,49,50\}$ for the study's principal plots. It reports SDPB precision $1024$, at most $1000$ iterations, maximum complementarity $10^{70}$, duality-gap threshold $10^{-40}$, primal and dual error thresholds $10^{-60}$, initial primal and dual matrix scales $10^{20}$, and primal/dual feasible-jump detection enabled. The paper also reports early tests with PyCFTBoot and qboot; this item does not claim an independent solver replay or a certificate beyond what the source records. [given, A1, L1]

2.1 Appendix A.7 decomposes $\phi\times Z_3$ into $Z\oplus AZ\oplus VB\oplus Z_3$. For distinct replica labels, its tensor structures are $P_{Z_3}=C_{ijn}C_{mok}\delta_{lp}$ and $P_{VB}=-C_{ijn}C_{mok}\delta_{lp}$. They are exact negatives with the same indices; the odd crossing projection therefore gives the source's relation $F_{Z_3}^- - F_{VB}^-=0$ (Appendix A.9, Eq. A.39). This checks the sign relation directly from the displayed structures. [given, L1, step 1.1, algebra]

2.2 Under the Table 4.2 gaps and truncations in [A1], with the fixed stress-tensor OPE ratio for Figures 4.17–4.19 and the distinct additional $\Delta_{Z',0}\ge1$ condition for Figures 4.18–4.19, the paper reports allowed regions/projections in $(\Delta_\phi,\Delta_Z,\Delta_{Z_3})$. The coupled-model estimate lies in its peninsula; the decoupled point is excluded in the relevant three-dimensional projections, although the projection onto the $(\Delta_\phi,\Delta_Z)$ plane can make it appear allowed. The source reports no sign of convergence to an island after trying more derivatives or stronger assumptions. These are source-reported numerical bounds and limitations, not an independent solver replay or a proof that the coupled continuum theory exists or is unique. [given, A1, L1, step 1.2]

3.1 By [F1], a full-local bootstrap datum also needs the underlying state space, actual local fields, convergent full OPEs, locality, and equality of all OPE trees. Since this study uses global blocks and a finite functional truncation, its reported allowed peninsula alone does not supply those data. [given, F1, L1, L2, step 2.2] ∎

## Remarks

The source's four crossing systems are the $\phi^4$ system, the $\phi Z_3\phi Z_3$ system, the $\phi\phi Z_3Z_3$ system, and the $Z_3^4$ system in Eq. (4.4). Its notation $F_R^\pm$ denotes the block-sum vectors for exchanged representation $R$, with the superscript recording the crossing-even or crossing-odd combination. The $\phi Z_3\phi Z_3$ and $\phi\phi Z_3Z_3$ tensor structures and the resulting sum rules are transcribed below from Appendix A.7–A.9; no new numerical solve is asserted.

For the same-replica tensor structure in Appendix A.7, let $\delta_{ij}$ be the Euclidean pairing on the standard representation and put $m=2$, its dimension for $Q=3$. The source's four structures are

$$P_Z=\delta_{ij}\delta_{mn}\delta_{ko}\delta_{lp},\qquad P_{AZ}=(\delta_{im}\delta_{jn}-\delta_{in}\delta_{jm})\delta_{ko}\delta_{lp}.$$

$$P_{VB}=2\left(\delta_{im}\delta_{jn}+\delta_{in}\delta_{jm}-\frac{2}{m}\delta_{ij}\delta_{mn}\right)\delta_{ko}\delta_{lp},\qquad P_{Z_3}=\left(\delta_{im}\delta_{jn}+\delta_{in}\delta_{jm}-\frac{2}{m}\delta_{ij}\delta_{mn}\right)\delta_{ko}\delta_{lp}.$$

For distinct replicas, the invariant tensor $C_{ijk}$ is the $S_3$-invariant trilinear tensor of the standard representation, with normalization absorbed into the OPE coefficients. The two structures are

$$P_{Z_3}=C_{ijn}C_{mok}\delta_{lp},\qquad P_{VB}=-C_{ijn}C_{mok}\delta_{lp}.$$

For $\phi\phi Z_3Z_3$, Appendix A.8 gives the same-replica structures

$$P_S=\delta_{im}\delta_{jn}\delta_{ko}\delta_{lp},\quad P_A=(\delta_{in}\delta_{mj}-\delta_{ij}\delta_{mn})\delta_{ko}\delta_{lp},\quad P_V=(\delta_{in}\delta_{mj}+\delta_{ij}\delta_{mn}-\delta_{im}\delta_{jn})\delta_{ko}\delta_{lp},$$

and the distinct-replica structure $P_Z=C_{ijn}C_{mok}\delta_{lp}$.

With the paper's $F_R^\pm$ convention, its $\phi Z_3\phi Z_3$ sum rules (A.37–A.39) are

$$0=2F_{AZ}^-+4F_{VB}^-+2F_{Z_3}^-.$$

$$0=-F_{AZ}^-+2F_{VB}^-+F_Z^-+F_{Z_3}^- -2F_{VB}^- -F_{Z_3}^-.$$

$$0=F_{AZ}^+ +F_Z^+ -4F_{VB}^+ -2F_{Z_3}^+.$$

$$0=F_{Z_3}^- -F_{VB}^-.$$

The $\phi\phi Z_3Z_3$ sum rules (A.40–A.43), with $\ell$ the exchanged spin and $\lambda_{\phi Z_3 O}=(-1)^\ell\lambda_{Z_3\phi O}$, are

$$0=(-1)^{1+\ell}F_{AZ}^-+F_S^- -F_A^-+(-1)^\ell F_Z^-.$$

$$0=(-1)^{1+\ell}F_{AZ}^-+F_S^-+F_A^- -2F_V^-+4(-1)^\ell F_{VB}^-+2(-1)^\ell F_{Z_3}^-+(-1)^{1+\ell}F_Z^-.$$

$$0=(-1)^\ell F_{AZ}^-+F_A^-+F_V^-+2(-1)^\ell F_{VB}^-+(-1)^\ell F_{Z_3}^-.$$

$$0=(-1)^\ell F_{AZ}^++F_S^+-F_A^++(-1)^{1+\ell}F_Z^+.$$

$$0=(-1)^\ell F_{AZ}^++F_S^++F_A^+-2F_V^+-4(-1)^\ell F_{VB}^+-2(-1)^\ell F_{Z_3}^++(-1)^\ell F_Z^+.$$

$$0=(-1)^{1+\ell}F_{AZ}^++F_A^++F_V^+-2(-1)^\ell F_{VB}^++(-1)^{1+\ell}F_{Z_3}^+.$$

$$0=(-1)^{1+\ell}F_{VB}^-+F_Z^-+(-1)^\ell F_{Z_3}^-.$$

$$0=(-1)^\ell F_{VB}^++F_Z^++(-1)^{1+\ell}F_{Z_3}^+.$$

The source's sum rules are source-reported tensor contractions; the local verification above checks the distinct-replica sign relation directly. They do not establish existence or uniqueness of a full local CFT.

The trees below show only the OPE pairings. Each leaf is an external field, and the internal line is labelled by the intermediate representation sum. The displayed equations and tensor contractions, not the drawing, establish the verification.

```tikz
\begin{tikzpicture}[baseline=-2pt,thick,every node/.style={font=\small}]
\node (s1) at (0,0) {$\mathcal O_1$};
\node (s2) at (1,0) {$\mathcal O_2$};
\node (s3) at (3,0) {$\mathcal O_3$};
\node (s4) at (4,0) {$\mathcal O_4$};
\node (sa) at (0.5,1) {$a$};
\node (sb) at (3.5,1) {$a^\vee$};
\draw (s1) -- (sa) -- (s2);
\draw (s3) -- (sb) -- (s4);
\draw (sa) -- (sb);
\node at (2,-0.45) {$s:(12)(34)$};
\begin{scope}[xshift=6cm]
\node (t1) at (0,0) {$\mathcal O_1$};
\node (t4) at (1,0) {$\mathcal O_4$};
\node (t2) at (3,0) {$\mathcal O_2$};
\node (t3) at (4,0) {$\mathcal O_3$};
\node (tb) at (0.5,1) {$b$};
\node (tc) at (3.5,1) {$b^\vee$};
\draw (t1) -- (tb) -- (t4);
\draw (t2) -- (tc) -- (t3);
\draw (tb) -- (tc);
\node at (2,-0.45) {$t:(14)(23)$};
\end{scope}
\end{tikzpicture}
```
