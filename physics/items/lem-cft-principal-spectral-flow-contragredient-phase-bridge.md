---
id: lem-cft-principal-spectral-flow-contragredient-phase-bridge
kind: lemma
title: Signed principal spectral-flow bridge to the intrinsic contragredient
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - def-cft-affine-w-algebra-via-brst
  - thm-cft-affine-w-brst-pbw
  - lem-cft-principal-minus-ds-verma-and-induced-k-complex
dependency_roles:
  def-cft-affine-w-algebra-via-brst: mathematical-premise
  thm-cft-affine-w-brst-pbw: mathematical-premise
  lem-cft-principal-minus-ds-verma-and-induced-k-complex: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa, Representation Theory of W-Algebras
      url: https://arxiv.org/pdf/math/0506056v4
      locator: Sections3.9,4.16,6.5 and8.1–8.5; in particular PDFpp70–75, equations333 and352–355 define the Chevalley-dual pairing and the top-height/induced-tail dual filtration. The literal equation330 is replaced by the signed bridge below in the production J-minus-chi convention.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 10
---

## Statement

Use the principal physical-current modes $J_{\alpha}(m)$, Cartan modes a(m), and charged ghosts $b_{\alpha}(m),c_{\alpha}(m)$, with root grade $j=\alpha(\rho^\vee)>0$ for $b_{\alpha}$ and grade -j for $c_{\alpha}$. The actual plus differential has $Q_{\mathrm{plus}}=Q_{st}-\chi$ and the actual minus differential is obtained by sharp after tau, hence has its opposite-root character with a plus sign. Tau is new-to-old spectral flow: $J_{\alpha}(m)$ maps to $J_{\alpha}(m+j)$, a(m) maps to a(m)+k $B(\rho^\vee,a)\delta_{m,0}$, $b_{\alpha}(m)$ maps to $b_{\alpha}(m+j)$, and $c_{\alpha}(m)$ maps to $c_{\alpha}(m-j)$.

Let $C_{\mathrm{plus}}(M)$ have a full Cartan-weight decomposition in one root-lattice coset lambda, with finite-dimensional weight spaces, as for the actual Verma cyclic complexes. On it let sigma act in weight mu by exp(pi i (mu-lambda)(rho-vee)), including the ghost Cartan weights. Give the physical affine Chevalley/ghost pairing its explicit phases in the proof. Then the degree-r map $I_{r}(f)(c)=i^r$ B(f,sigma c) identifies the physical minus restricted-dual complex with the restricted dual of the actual plus complex with its plain transposed differential. It intertwines the actual W action with the intrinsic contragredient action f to (c maps to $f(\tau(\theta_{\mathrm{new}}(u))c)$). It preserves the old-energy and horizontal-height filtrations and fixes central-character labels. No literal identity $\theta_{\mathrm{old}}$ $\tau=\tau$ $\theta_{\mathrm{new}}$ is assumed.

## Facts & Assumptions

**Given:** Exactly the physical modes, chosen weight coset, restricted weight dual and sign conventions in the Statement.

[F1] [[def-cft-affine-w-algebra-via-brst]] and [[thm-cft-affine-w-brst-pbw]] give the current/Clifford relations, actual $Q_{st}-\chi$ residue, corrected currents and old/improved Hamiltonians. In the old Hamiltonian b has state weight1 and c weight0; improved weights are1-j and j.

[F2] [[lem-cft-principal-minus-ds-verma-and-induced-k-complex]] supplies the actual new-to-old tau and corrected cyclic complexes; all vectors have finite PBW support and the stated weight decomposition.

## Proof

**Given:** F1–F2. Theta maps are complex-linear opposite-mode anti maps; their odd normalization is i times the even weight sign.

1.1 In physical indices the primary-root formulas are $\theta_{\mathrm{old}}$ $J_{\alpha}(m)=-J_{\alpha}(-m)$, $\theta_{\mathrm{new}}$ $J_{\alpha}(m)=(-1)^{1-j}J_{\alpha}(-m-2j)$. On ghosts they are $\theta_{\mathrm{old}}$ b(m)=-i b(-m), $\theta_{\mathrm{old}}$ $c(m)=i$ c(-m), $\theta_{\mathrm{new}}$ $b(m)=i(-1)^{1-j}b(-m-2j)$, and $\theta_{\mathrm{new}}$ $c(m)=i(-1)^j$ c(-m+2j). These follow by writing the Hamiltonian-normalized index as physical index plus j for a current or b and minus j for c, then reversing that index in the opposite-state formula. For Cartan, the improved lowering operator on a[-1]1 is -2k B(rho-vee,a)1; hence $\theta_{\mathrm{new}}$ a(m)=-a(-m)+2k $B(\rho^\vee,a)\delta_{m,0}$, whereas $\theta_{\mathrm{old}}$ a(m)=-a(-m). These formulas preserve the current and Clifford defining relations as anti maps. They therefore determine the opposite maps on the mode algebra and its degreewise completion. [given, F1, F2, construct, algebra]

2.1 Put $kappa=Ad(\sigma)$. On a root operator or its ghost it multiplies by (-1)^j, and on Cartan it is the identity. Substitution in every formula of step 1.1, including the Cartan scalar, gives the exact identity $kappa^{-1}$ $\theta_{\mathrm{old}}$ $\tau=\tau$ $\theta_{\mathrm{new}}$. For example the two uncorrected root expressions are $-J_{\alpha}(-m-j)$ and $(-1)^{1-j}J_{\alpha}(-m-j)$; their ratio is (-1)^j. The Cartan expressions on both corrected sides are -a(-m)+k $B(\rho^\vee,a)\delta_{m,0}$. The ghost expressions have the same root-height ratio. Since all these are anti maps, generator equality proves equality on all products. A scalar root rephasing of tau alone could not repair the discrepancy because theta is complex-linear. [F1, F2, step 1.1, construct, algebra]

3.1 Kappa preserves $Q_{st}$: a current and its dual ghost have opposite root weights, and every cubic ghost term has total root weight zero. The character term involves only simple-root dual ghosts, each of odd height, so kappa sends $Q_{st}+\chi_{\mathrm{prime}}$ to $Q_{st}-\chi_{\mathrm{prime}}$ and conversely. Sigma is an actual involution on the chosen coset after normalizing its value on the highest vector to1. It is diagonal on full weight spaces, commutes with old loop energy, and preserves every weight-height/PBW filtration. It implements kappa on the coefficient-plus-ghost operators. Thus this character flip is a genuine filtered cochain identification, not a change to a central or highest-weight label. [F1, F2, step 2.1, construct, algebra]

4.1 Define the unmodified physical pairing B by the coefficient Chevalley pairing $J_{\alpha}(m)^t=J_{-\alpha}(-m)$, $a(m)^t=a(-m)$, and the ghost vacuum value1 with the recursions $B(b_{\alpha}(m)v,w)=-i$ $B(v,c_{\alpha}(-m)w)$, $B(c_{\alpha}(m)v,w)=i$ $B(v,b_{\alpha}(-m)w)$. Ordered Clifford monomials define this pairing uniquely and nondegenerately on each finite weight space: move annihilation modes through creation modes and use their scalar anticommutators. Transposing the physical minus BRST formula gives B(i $Q_{\mathrm{minus}}$ $f,c)=B(f,(Q_{st}+\chi_{\mathrm{prime}})c$). The current/ghost term uses one ghost phase; the cubic term uses its three phases and order reversal, giving the same i factor and its Lie-bracket sign; the character term is exactly the plus character on the right. This also follows coefficientwise by these two ghost recursions on the current term, the ordered cubic term and the character separately. There is no spectral-flow identity used in this transpose calculation. [F1, F2, step 3.1, construct, algebra]

5.1 Specify the filtrations before inserting the phase map. Write $C_{\mu,N}$ for a full Cartan-weight and old-energy block of the plus complex, with ghost weights included, and put $h_\lambda(\mu)=\langle\bar\lambda-\bar\mu,\rho^\vee\rangle\in\mathbb Z$. The horizontal weight-height tails are $G_sC=\bigoplus_{h_\lambda(\mu)\ge s,N}C_{\mu,N}$. On the physical minus restricted dual use the standard Chevalley-dual labels: the $\mu,N$ block evaluates the $\mu,N$ block of C. These labels are fixed by B in step 4.1, before sigma or $I_r$ is applied. The coefficient pairing and the ghost vacuum/recursions pair the corresponding finite PBW blocks perfectly: move each annihilator to the right, so that only matching mode and root labels in the Chevalley-dual basis survive. The old-energy labels also match, since a creation mode pairs with its opposite-index annihilation mode. The dual height filtration is the annihilator of $G_sC$, inside the full-weight restricted dual; the old-energy filtration is the sum of blocks up to a given old-energy bound. For the Verma cyclic model the horizontal top-height filtration used for the spectral sequence has the more precise induced-tail form: let T be its old-energy-zero top, set $T_{\ge s}=\bigoplus_{h_\lambda(\mu)\ge s}T_\mu$, and let $R_s$ be the span of negative-loop corrected-current/ghost PBW words applied to $T_{\ge s}$. Its canonical restricted-dual filtration is $F_s=\operatorname{Ann}(R_s)$, equivalently the restricted dual of $C^+/R_s$; on the physical side it is the annihilator under the already fixed B. This is the usual top-height-induced filtration, rather than replacing it by total PBW length or by the height of the entire negative-loop word. Sigma fixes every $G_sC$ and every old-energy block because it is scalar on full weights. It also fixes $R_s$: it fixes each $T_{\ge s}$ and conjugates each homogeneous corrected-current or ghost mode by its root-height sign, so it maps every defining PBW word to a scalar multiple of such a word. Therefore, for either $U=G_sC$ or $U=R_s$, one has $B(f,\sigma U)=0$ if and only if $B(f,U)=0$, since $\sigma U=U$. The invertible scalar $i^r$ changes neither annihilator. Consequently $I_r$ and its inverse preserve these canonical height filtrations and the old-energy filtration. The filtrations were specified from weights, the cyclic top and its induced PBW tails independently of $I_r$; no arbitrary filtration is transported through the desired isomorphism. [F1, F2, step 3.1, step 4.1, construct, algebra]

6.1 Replace B by $B_\sigma(f,c)=B(f,\sigma c)$. Step 3.1 changes the right differential of step 4.1 to the actual $Q_{\mathrm{prime}}=Q_{st}-\chi_{\mathrm{prime}}$: $B_\sigma(iQ_{\mathrm{minus}}f,c)=B_\sigma(f,Q_{\mathrm{prime}}c)$. Therefore $I_{r}=i^r$ $B_{\sigma}$ is a cochain map from physical degree r to dual degree r: its differential equality is $i^r i B_\sigma(Q_{\mathrm{minus}}f,c)=i^{r+1}B_\sigma(Q_{\mathrm{minus}}f,c)$. All pairings and maps are between the restricted weight duals, so nondegeneracy gives an isomorphism, with no unrestricted completion or infinite-support dual vector. The phase scalar in each degree does not affect the filtrations specified and checked in step 5.1. [F1, F2, step 4.1, step 5.1, construct, algebra]

7.1 For an even W operator u, the physical minus action is sharp tau(u). Transposition through the unmodified Chevalley/ghost pairing gives $\theta_{\mathrm{old}}$ tau(u): on a root current sharp contributes minus the opposite root, and on b,c the two recursions in step 4.1 give precisely the odd phases of $\theta_{\mathrm{old}}$; Cartan scalar shifts agree as in step 2.1. Extending from generators by order reversal proves this equality on the actual W operators. Through $B_{\sigma}$ it becomes $\sigma^{-1}$ $\theta_{\mathrm{old}}$ tau(u) $\sigma=\tau$ $\theta_{\mathrm{new}}(u)$, exactly by step 2.1. This is the intrinsic W contragredient action used on the filtered dual complex. The scalar $i^r$ commutes with this even action. Step 5.1 proves filtration preservation for the actual pairing map and its inverse, including the induced top-height tails on the cyclic model; the inner Cartan phase fixes Z and its central characters. Hence the physical-minus all-page maps and their limit identify with the untwisted intrinsic W dual, as claimed. [F1, F2, step 5.1, step 6.1, construct, algebra] ∎
