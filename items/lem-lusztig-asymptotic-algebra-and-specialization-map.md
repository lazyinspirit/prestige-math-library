---
id: lem-lusztig-asymptotic-algebra-and-specialization-map
kind: lemma
title: "The asymptotic algebra, filtered layers and the specialization homomorphism"
status: published
dependency_level: 6
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-finite-weyl-lusztig-basic-set-data
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-18}}
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, sections 4–6"
      url: "https://arxiv.org/pdf/math/0511548"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised text, sections 18–21"
      url: "https://arxiv.org/pdf/math/0208154"
---

## Statement

Assume [[def-finite-weyl-lusztig-basic-set-data]], including P2–P8 and P15′. The free abelian group $J=\bigoplus_{w\in W}\mathbb Zt_w$ is an associative algebra under $t_xt_y=\sum_z\gamma_{x,y,z^{-1}}t_z$, with identity $\sum_{d\in\mathcal D}n_dt_d$. It has an anti-involution $\iota_J(t_w)=t_{w^{-1}}$ and a perfect symmetrizing trace $\mu(t_w)=n_w$ for $w\in\mathcal D$ and zero otherwise, with $\mu(t_xt_y)=\delta_{x,y^{-1}}$.

Put $J^i=\langle t_w:a(w)=i\rangle_{\mathbb Z}$ and $I_i=\langle D_w:a(w)\ge i\rangle_A$, and $B_i=I_i/I_{i+1}$. These are respectively mutually orthogonal two-sided ideals of $J$, two-sided ideals of $H$, and free layers on the classes $[D_w]$ with $a(w)=i$. The identification $[D_w]\mapsto t_w$ makes $B_i$ a left $J_A$-module and a $(J_A,H)$-bimodule. The map

$$\phi:H\longrightarrow J_A,\qquad \phi(D_x)=\sum_{\substack{z\in W,\ d\in\mathcal D\\a(z)=a(d)}}h_{x,d,z}n_dt_z$$

is a unital algebra homomorphism, and the natural left $H$ action on $B_i$ is exactly restriction along $\phi$. Here the sum means $z\in W,d\in\mathcal D$.

All these statements survive any commutative coefficient specialization. With $N=\max_wa(w)$, $(\ker\phi_R)^{N+1}=0$ for every specialization to a field or ring $R$. Over $K=\mathbb Q(v)$, $\phi_K$ is an isomorphism. The rational algebra $J_{\mathbb Q}$ is split semisimple. Its simple modules $V_E$ can be indexed by the generic labels $E$ so that $K\otimes V_E$, restricted through $\phi_K$, is $E$. Each has a unique support degree $\nu_E$ such that $J^{\nu_E}_{\mathbb Q}V_E=V_E$ and the other $J^i$ act by zero.

## Facts & Assumptions

**Given:** The finite-Weyl split generic setup, KL/dagger bases and the exact P hypotheses.

[F1] [[def-finite-weyl-lusztig-basic-set-data]] supplies the structure constants, $a$, $\gamma$, $\mathcal D$, $n_d$, generic splitting and P2–P8/P15′.

## Proof

1.1 Reversing words gives the anti-involution $T_w\mapsto T_{w^{-1}}$ of the Hecke presentation. It commutes with bar. Inversion preserves length and sends a reflection-chain step $u\to ut$ to $u^{-1}\to tu^{-1}=u^{-1}(utu^{-1})$, again a length-increasing right-reflection step; hence it preserves Bruhat order. Thus it preserves Bruhat triangularity, and KL uniqueness gives $C_w\mapsto C_{w^{-1}}$. Hence $h_{x,y,z}=h_{y^{-1},x^{-1},z^{-1}}$, $a(z)=a(z^{-1})$, and $\gamma_{x,y,z}=\gamma_{y^{-1},x^{-1},z^{-1}}$. Comparing coefficients in the bar-invariant products $C_xC_y$ also gives $\overline{h_{x,y,z}}=h_{x,y,z}$. P3 with $y=1$ forces $a(1)=0$ and $1\in\mathcal D$, since $C_1C_1=C_1$ makes the required nonzero coefficient possible only for $d=1$ and exponent zero. The assignment $T_s\mapsto-T_s^{-1}$ preserves the quadratic relation and braid relations (the signs agree at equal braid length and inverse reversed braid words agree), is involutive and is $A$-linear. Thus $D_xD_y$ has the same constants $h$. [F1, given, algebra]

2.1 P8 implies that products in $J$ vanish across distinct $a$-degrees. For a fixed degree $i$, multiply P15′ by $v^i$ and take its constant coefficient. Whenever a $\gamma$ term is nonzero, P8 forces every participating index to have degree $i$. The resulting identity is $\sum_u\gamma_{x,u,y^{-1}}\gamma_{w,x',u^{-1}}=\sum_u\gamma_{x,w,u^{-1}}\gamma_{u,x',y^{-1}}$, exactly equality of the coefficients of $t_y$ in $t_x(t_wt_{x'})$ and $(t_xt_w)t_{x'}$. Other degree combinations vanish. This proves associativity without using any unlisted P property. [F1, step 1.1, algebra]

3.1 The coefficient of $t_y$ in $t_x\sum_dn_dt_d$ is $\sum_dn_d\gamma_{x,d,y^{-1}}=\sum_dn_d\gamma_{y^{-1},x,d}$ by P7. P2 makes it zero unless $y=x$; then P3 and P5 give the unique coefficient $n_d^2=1$. The left identity is proved in the same way, using cyclic symmetry with $\gamma_{x,y^{-1},d}$; the appropriate unique $d$ comes from P3 applied to $x^{-1}$. Step 1.1 proves that $\iota_J$ reverses products. Since $d=d^{-1}$ by P6, $\mu(t_xt_y)=\sum_d\gamma_{x,y,d}n_d$ is $\delta_{x,y^{-1}}$ by P2, P3 and P5. This symmetric permutation Gram matrix is invertible over $\mathbb Z$, proving every trace assertion. [F1, step 1.1, step 2.1, algebra]

4.1 P4 implies that each $I_i$ is a two-sided ideal. Its layer has exactly the stated basis since both ideals are spans of subsets of the $D$-basis. P8 and step 3.1 give the orthogonal ideal decomposition $J=\bigoplus_iJ^i$, with central identities $1_i=\sum_{d:a(d)=i}n_dt_d$. On the free layer $B_i$, identify $[D_w]$ with $t_w$ for $a(w)=i$ and give it the left regular $J^i_A$ action. Natural left and right $H$ multiplication are well defined on the layer. [F1, step 2.1, step 3.1, algebra]

5.1 Let $A_x$ be natural left multiplication by $D_x$ on $B_i$. The coefficient of $[D_y]$ in $A_xR_{t_{x'}}[D_w]$ is $\sum_uh_{x,u,y}\gamma_{w,x',u^{-1}}$; the coefficient in $R_{t_{x'}}A_x[D_w]$ is $\sum_uh_{x,w,u}\gamma_{u,x',y^{-1}}$. Here only indices of degree $i=a(w)=a(y)$ survive. P15′ gives equality. Thus $A_x$ commutes with every right regular $J^i_A$ multiplication and is left multiplication by its value on $1_i$. That value is $\sum_{z:a(z)=i}\sum_{d:a(d)=i}h_{x,d,z}n_dt_z$, the degree-$i$ component of the displayed $\phi(D_x)$. This proves compatibility of the left $H$ action with $\phi$. [F1, step 4.1, algebra]

6.1 Composition of natural left $H$ actions gives $L_{\phi(hh')}=L_{\phi(h)}L_{\phi(h')}$ on $\bigoplus_iJ_A^i$. Evaluating on its identity proves $\phi(hh')=\phi(h)\phi(h')$; evaluating the identity action proves $\phi(1_H)=1_J$. For the right $H$ action to commute with left $J$, apply P15′ with $(x,x',w,y)$ replaced by $(x^{-1},z^{-1},w^{-1},y^{-1})$ and replace the summation variable by its inverse. Using step 1.1 gives $\sum_u\gamma_{z,w,u^{-1}}h_{u,x,y}=\sum_uh_{w,x,u}\gamma_{z,u,y^{-1}}$, exactly the coefficient equality for $(t_z\cdot[D_w])D_x=t_z\cdot([D_w]D_x)$. Thus $B_i$ is the asserted bimodule. This argument requires no equality between $\phi$ and its opposite/adjoint version. [F1, step 1.1, step 4.1, step 5.1, algebra]

7.1 The bases, identities and multiplication equalities above are finite integral coefficient identities; they remain valid after every commutative base change. If $h\in\ker\phi_R$, compatibility says that $hI_i\subseteq I_{i+1}$ for all $i$. A product of $N+1$ such elements therefore kills $I_0=H_R$ and in particular its unit, proving the nilpotence bound. Over $K$, the algebra $H_K$ is a product of full matrix algebras by the given split generic hypothesis. A nilpotent two-sided ideal of such a product is zero: its intersection with any simple matrix factor is either zero or that factor, and a nonzero factor contains its identity and is not nilpotent. Thus $\phi_K$ is injective and, since both sides have dimension $|W|$, is an isomorphism. [F1, step 5.1, step 6.1, algebra]

8.1 Transport matrix units of $H_K$ through $\phi_K$. Their coordinates in the integral basis $t_w$ are rational functions of $v$, and their coordinate determinant is nonzero. Choose a nonzero rational value avoiding the finitely many zeros of their denominators and that determinant; such a value exists because a nonzero polynomial has finitely many roots and $\mathbb Q^\times$ is infinite. Evaluating the coordinates preserves the finite matrix-unit and unit identities and retains their linear independence. They therefore give an isomorphism $J_{\mathbb Q}\cong\prod_E\operatorname{Mat}_{d_E}(\mathbb Q)$. After scalar extension back to $K$, this decomposition has the same primitive central blocks: in the center of a split matrix product every idempotent has only zero/one coordinates. Relabel its factors accordingly. This gives rational models $V_E$ for all generic labels. Finally the central orthogonal identities $1_i$ act on a simple module through exactly one component; denote its index by $\nu_E$. [F1, step 4.1, step 7.1, construct, algebra] ∎
