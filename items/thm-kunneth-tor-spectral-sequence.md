---
id: "thm-kunneth-tor-spectral-sequence"
kind: "theorem"
title: "Kunneth Tor spectral sequence"
deps: ["thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex", "def-tensor-product-total-complex-of-chain-complexes", "def-tor-by-resolving-the-left-module", "lem-projective-modules-are-flat-over-an-arbitrary-ring", "thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic", "lem-cartan-eilenberg-comparisons-preserve-both-filtrations", "thm-the-opposite-of-an-abelian-category-is-abelian", "def-dependent-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Weibel, Sections 5.6-5.7"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Let $C$ be a bounded-below complex of right $R$-modules and $D$ a bounded-below complex of left $R$-modules, and suppose at least one is degreewise flat. Supply projective Cartan–Eilenberg resolutions $P\to C$ and $Q\to D$ in the following homological sense. The commuting grids $P_{i,a}$ and $Q_{j,b}$ are zero for negative resolution degree and consist of projective modules. Their augmented vertical complexes are projective resolutions of the corresponding terms, horizontal cycles, horizontal boundaries, and horizontal homology objects. In every bidegree the horizontal sequences $0\to B\to Z\to H\to0$ and $0\to Z\to P_{i,a}\to B_{i-1,a}\to0$, and likewise for $Q$, are split exact. Then there is a spectral sequence of abelian groups
$$E^2_{p,q}=\bigoplus_{i+j=q}\operatorname{Tor}^R_p(H_iC,H_jD)\quad\Longrightarrow\quad H_{p+q}(\operatorname{Tot}(C\otimes_RD)),$$
with $d_r$ of degree $(-r,r-1)$ and a finite increasing filtration by resolution degree. If the lower bounds are $c,d$, its support is $p\ge0,q\ge c+d$; translation makes it first quadrant. All sums in fixed bidegree are finite. For naturality and resolution independence assume DC or supply the corresponding projective comparisons and homotopies; no symmetry of tensor over a noncommutative ring is used.

## Facts & Assumptions

**Given:** The complexes, side conventions, flatness and supplied data above.

[F1] The supplied projective Cartan–Eilenberg data have projective term, cycle, boundary, and homology resolutions and the two degreewise split horizontal sequences stated explicitly above. [given]

[F2] A first-quadrant homological double complex has the row spectral sequence and finite image-filtration abutment ([[thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex]]).

[F3] Tensor totalization uses the Koszul differential ([[def-tensor-product-total-complex-of-chain-complexes]]).

[F4] Projective modules are flat on the appropriate side without choice ([[lem-projective-modules-are-flat-over-an-arbitrary-ring]]).

[F5] The total tensor of supplied right and left projective resolutions computes Tor via either augmentation; DC concerns comparison naturality ([[thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]]).

[F6] The injective Cartan–Eilenberg comparison theorem supplies bicomplex maps, vertical homotopies, and the two filtered spectral-sequence comparisons under DC or supplied extension data ([[lem-cartan-eilenberg-comparisons-preserve-both-filtrations]]); module categories and their opposites are abelian ([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

## Proof

1.1 Write the supplied resolutions as $P_{i,a}\to C_i$ and $Q_{j,b}\to D_j$, with commuting arrows $h_P,v_P$ and $h_Q,v_Q$ in complex and resolution degrees, as supplied in F1. Twisting the vertical arrows by $\widetilde v_P=(-1)^iv_P$ and $\widetilde v_Q=(-1)^jv_Q$ puts each commuting grid into anticommuting homological double-complex form, with signed totals $h_P+\widetilde v_P$ and $h_Q+\widetilde v_Q$. Form $P_{i,a}\otimes_RQ_{j,b}$, group by $q=i+j$, $p=a+b$, and take the Koszul total differential of F3. Its components lowering $q$ and $p$ are
$$d_q=h_P\otimes1+(-1)^{i+a}1\otimes h_Q,\qquad d_p=\widetilde v_P\otimes1+(-1)^{i+a}1\otimes\widetilde v_Q,$$
where $(-1)^{i+a}$ is the Koszul sign attached to the second factor of the tensor of the two signed totals. Then $d_q^2=d_p^2=0$ and $d_qd_p+d_pd_q=0$: the diagonal blocks vanish by the two internal anticommutations $h_P\widetilde v_P+\widetilde v_Ph_P=0$ and $h_Q\widetilde v_Q+\widetilde v_Qh_Q=0$, while the mixed blocks cancel because the Koszul sign changes sign whenever the complex degree $i$ or the resolution degree $a$ changes. Hence $(P\otimes Q,d_q,d_p)$ is a homological double complex whose total differential is $d_q+d_p$, the Koszul differential of the tensor of the signed totals of $P$ and $Q$. [F1, F3]

2.1 Filter increasingly by $p$. At a fixed pair $(a,b)$ the horizontal complexes $P_{*,a},Q_{*,b}$ split into stalks of their homology and two-term identity disks, by F1. Tensoring a disk with any complex remains contractible: if $s$ contracts the disk, $s\otimes1$ contracts the first-factor tensor, and $(-1)^i1\otimes s$ contracts a second-factor disk. Substitution in F3 cancels the mixed terms. Consequently horizontal homology is canonically $\bigoplus_{i+j=q}H_i(P_{*,a})\otimes_RH_j(Q_{*,b})$, via the tensor-of-cycles map. The splitting argument proves this canonical map is an isomorphism; it need not choose splittings naturally. [F1, F2, F3, step 1.1]

2.2 Both augmented totals $\operatorname{Tot}P\to C$ and $\operatorname{Tot}Q\to D$ are quasi-isomorphisms: filtering by the original complex degree gives first page equal to that complex in resolution degree zero and zero in higher degrees, by the exact augmented projective columns; the finite filtration comparison identifies the augmentation on homology. Their total terms are finite sums of projectives, hence flat by F4. A bounded-below complex $L$ of flat modules preserves quasi-isomorphisms on tensoring: tensor the acyclic mapping cone with each $L_i$, obtaining exact complexes by flatness, and use the finite-diagonal row filtration of F2 to get an acyclic total. This proves the assertion on either side, without exchanging right and left modules. [F1, F2, F3, F4, step 1.1]

3.1 At fixed $(i,j)$ the resolution complexes $H_i(P_{*,a})$ and $H_j(Q_{*,b})$ are projective resolutions of $H_iC$ and $H_jD$. The remaining $d_1$ on the preceding horizontal homology is their tensor-resolution differential, with the harmless constant total sign for fixed $q$. F5 identifies its degree-$p$ homology with $\operatorname{Tor}^R_p(H_iC,H_jD)$. Taking the finite sum over $i+j=q$ gives exactly the displayed $E^2$. [F1, F5, step 2.1]

4.1 If $C$ is flat degreewise, use the two quasi-isomorphisms $\operatorname{Tot}P\otimes\operatorname{Tot}Q\to C\otimes\operatorname{Tot}Q\to C\otimes D$; the first uses flatness of $\operatorname{Tot}Q$ and the second of $C$. If $D$ is flat instead, use $\operatorname{Tot}P\otimes\operatorname{Tot}Q\to\operatorname{Tot}P\otimes D\to C\otimes D$. Thus the target in F2 is the stated ordinary tensor homology. In degree $n$ the filtration has endpoints $-1$ and $n-c-d$, hence is finite and strongly convergent after translation. For a chain map $f:C\to C'$, pass to the opposite module categories: $f^{\mathrm{op}}:(C')^{\mathrm{op}}\to C^{\mathrm{op}}$. The projective Cartan–Eilenberg resolutions become injective ones there, so F6 gives a comparison $(P')^{\mathrm{op}}\to P^{\mathrm{op}}$ over $f^{\mathrm{op}}$, unique up to its stated vertical homotopy and compatible with both filtrations. Reversing arrows returns the required projective comparison $P\to P'$ over $f$; the same applies to $Q\to Q'$. Tensoring these maps and their homotopies gives the natural $E^2$ and target maps under DC or the corresponding supplied comparison data. Zero complexes, a zero homology summand and a one-degree complex satisfy the same calculation. [F2, F5, F6, step 3.1, step 2.2] ∎
