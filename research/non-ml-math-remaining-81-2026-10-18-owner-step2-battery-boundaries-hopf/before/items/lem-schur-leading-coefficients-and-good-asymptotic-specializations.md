---
id: lem-schur-leading-coefficients-and-good-asymptotic-specializations
kind: lemma
title: "Leading Schur coefficients and split good-characteristic asymptotic specializations"
status: draft
dependency_level: 7
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-finite-weyl-lusztig-basic-set-data
  - lem-lusztig-asymptotic-algebra-and-specialization-map
  - thm-hh-canonical-hecke-trace-is-symmetric-and-perfect
  - def-schur-elements-from-a-symmetrizing-trace
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, sections 4–6"
      url: "https://arxiv.org/pdf/math/0511548"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised text, sections 18–21"
      url: "https://arxiv.org/pdf/math/0208154"
---

## Statement

Use the data and hypotheses of [[def-finite-weyl-lusztig-basic-set-data]]. For each rational simple $J_{\mathbb Q}$-module $V_E$ supplied by [[lem-lusztig-asymptotic-algebra-and-specialization-map]], let $\chi_E^J$ be its character and $\alpha_E$ its support degree. There are positive integers $f_E$ such that

$$\mu_{\mathbb Q}=\sum_Ef_E^{-1}\chi_E^J,\qquad c_E(v)=f_Ev^{-2\alpha_E}+\text{strictly higher powers of }v.$$

Thus $\alpha_E$ is precisely the Schur-element exponent in Geck's convention. The full Schur elements $c_E(v)$ lie in $A$. Each $V_E$ has a full finite free $J$-stable integral lattice $\Lambda_E$. Put $F=\prod_Ef_E$ and $S=\mathbb Z[1/F]$. There is an explicit algebra isomorphism

$$J_S\ \cong\ \prod_E\operatorname{End}_S(S\otimes_{\mathbb Z}\Lambda_E).$$

Consequently, for every field $k$ of characteristic zero or characteristic not dividing any $f_E$, the algebra $J_k$ is split semisimple with simple modules $V_{E,k}=k\otimes\Lambda_E$, preserving dimensions and support degrees. More generally the displayed matrix decomposition holds after base change to any commutative ring in which every $f_E$ is a unit. The actual Hecke model is already free globally: $L_{E,A}=A\otimes_{\mathbb Z}\Lambda_E$, with $H_A$ acting through the integral map $\phi_A$ and the integral $J$-matrices. Its generic fibre is $E$, and every local model used below is the base change of this displayed free module. No assertion that arbitrary torsion-free lattices over higher-dimensional local rings are free is used. No hypothesis that every specialized full Schur element $\theta(c_E(v))$ is nonzero is imposed.

## Facts & Assumptions

**Given:** The stated finite-Weyl data, generic splitting and exact P hypotheses.

[F1] [[lem-lusztig-asymptotic-algebra-and-specialization-map]] gives the integral algebra $J$, its inverse-index dual basis, positive coordinate form, rational splitting, generic isomorphism $\phi_K$, and orthogonal support ideals.

[F2] [[def-finite-weyl-lusztig-basic-set-data]] fixes $D_w=C_w^\dagger$, the P conditions, generic Schur trace and coefficient conventions.

[F3] [[thm-hh-canonical-hecke-trace-is-symmetric-and-perfect]] proves that the standard Hecke basis $T_w$ has trace-dual basis $T_{w^{-1}}$, also after weighted base change.

[F4] [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]] says a finitely generated torsion-free module over a PID is finite free.

[F5] [[def-schur-elements-from-a-symmetrizing-trace]] defines the Schur scalars by the irreducible-character expansion of a symmetrizing trace.

[F6] [[lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain]] proves that $A=\mathbb Z[v,v^{-1}]$ is a UFD.

## Proof

1.1 On a split matrix algebra, a symmetric linear functional is a scalar multiple of ordinary matrix trace: commuting $e_{ii}$ with $e_{ij}$ forces its value on $e_{ij}$ to be zero for $i\ne j$, and commuting $e_{ij}$ with $e_{ji}$ makes all diagonal values equal. Thus on a split product it is $\sum_Es_E\operatorname{Tr}_E$. Nondegeneracy forces every $s_E\ne0$, since otherwise an entire block is orthogonal to the algebra. Apply this to $J_{\mathbb Q}$ from [F1], and set $f_E=s_E^{-1}\in\mathbb Q^\times$. The same argument gives the generic Hecke Schur scalars in [F5]. [F1, F2, F5, algebra]

2.1 For any finite split algebra with symmetrizing trace $\sum f_E^{-1}\operatorname{Tr}_E$ and dual bases $b_r,b_r^\vee$, its inverse pairing tensor is basis-independent and equals $\sum_Ef_E\sum_{i,j}e_{ij}^E\otimes e_{ji}^E$. Indeed both tensors represent the identity map under the trace pairing; in the matrix-unit basis the dual of $e_{ij}^E$ is $f_Ee_{ji}^E$. Applying the matrix-coefficient functions gives $\sum_r\rho_G(b_r)_{ij}\rho_E(b_r^\vee)_{ab}=\delta_{G,E}f_E\delta_{i,b}\delta_{j,a}$. Summing the appropriate diagonal entries gives $\sum_r\chi_E(b_r)\chi_E(b_r^\vee)=f_E\dim V_E$. These are actual coefficient identities over $\mathbb Q$ or $K$, with no character-orthogonality result left as a citation. [F1, F3, step 1.1, algebra]

2.2 Choose a rational basis of $V_E$ and let $L_0$ be its integer span. The sum $\Lambda_E=\sum_{w\in W}\mathbb Z\rho_E(t_w)L_0$ is finitely generated, contains $L_0$ since $1_J\in J$, and is stable under every $t_x$ because the multiplication constants of $J$ are integers. It is torsion-free of rank $d_E=\dim V_E$. The integers form a PID (division with remainder makes each nonzero ideal generated by its least positive member), so [F4] makes $\Lambda_E$ finite free. In such a basis all $\rho_E(t_w)$ have integer entries and $\chi_E^J(t_w)\in\mathbb Z$. [F1, F4, step 1.1, construct]

3.1 Let $z_E=\sum_w\chi_E^J(t_{w^{-1}})t_w\in J$. The coefficient identity in step 2.1 says that its action on $V_G$ is $\delta_{E,G}f_E\operatorname{id}$. Left multiplication by $z_E$ on the integral basis of $J$ has an integer matrix. The Cayley–Hamilton identity therefore shows that the rational number $f_E$ is an algebraic integer; a rational root of a monic integer polynomial is an integer, by clearing its reduced denominator in that polynomial. Hence $f_E\in\mathbb Z\setminus\{0\}$. [F1, step 2.1, step 2.2, algebra]

3.2 Put $a=\alpha_E$. The character of $E=K\otimes V_E$ satisfies $\chi_E(D_x)=\sum_{z,d:a(z)=a(d)=a}h_{x,d,z}n_d\chi_E^J(t_z)$ by [F1]. Each $v^ah_{x,d,z}$ is in $\mathbb Z[v]$ by the definition of $a(z)$. Taking its constant term gives $\sum_{z,d:a(z)=a(d)=a}\gamma_{x,d,z^{-1}}n_d\chi_E^J(t_z)=\chi_E^J(t_x)$, since $\sum_dn_dt_d$ is the identity of $J$ and all other support degrees act by zero. Thus $v^a\chi_E(D_x)\in\mathbb Z[v]$ and it is congruent to $\chi_E^J(t_x)$ modulo $v\mathbb Z[v]$. [F1, F2, step 2.2, algebra]

4.1 To see positivity, use the rational positive definite form $\langle x,y\rangle=\mu(x\iota_J(y))$ on $J_{\mathbb Q}$: [F1] makes its basis $t_w$ orthonormal. Trace symmetry implies $\langle ax,y\rangle=\langle x,\iota_J(a)y\rangle$. A rational simple left ideal $U_E\subset J_{\mathbb Q}$ exists from its matrix decomposition and is invariant under both $a$ and $\iota_J(a)$; restriction of this positive form to $U_E$ is nondegenerate. Thus their matrices on $U_E$ are adjoints and have equal trace. It follows that $\chi_E^J(t_{w^{-1}})=\chi_E^J(t_w)$. Step 2.1 now gives $f_Ed_E=\sum_w\chi_E^J(t_w)^2>0$. The strict inequality holds because $\chi_E^J$ is a nonzero linear functional on $J_{\mathbb Q}$, so it cannot vanish on the basis $\{t_w\}$; at least one rational summand is nonzero. Therefore $f_E>0$. [F1, step 2.1, step 3.1, algebra]

4.2 In $J_S$ set $q_{ij}^E=f_E^{-1}\sum_w\rho_E(t_{w^{-1}})_{ji}t_w$. Step 2.1 gives $\rho_G(q_{ij}^E)=\delta_{E,G}e_{ij}$. These elements lie in $J_S$ by step 2.2 and send every block to its indicated matrix unit. Hence they provide an inverse to $\rho:J_S\to\prod_E\operatorname{End}_S(S\otimes\Lambda_E)$: their composites are the identity after extension to $\mathbb Q$, and both modules are torsion-free, so they are already the identity over $S$. This proves the displayed algebra isomorphism. Since it is defined by inverse coefficient matrices over $S$, it survives every commutative base change out of $S$, including all stated fields. [F1, step 2.1, step 2.2, step 3.1, algebra]

4.3 Let $j$ be the semilinear algebra involution sending $v$ to $v^{-1}$ and $T_s$ to $-T_s$. It is the product of bar with $\dagger$, so $D_x=j(C_x)$ since $C_x$ is bar invariant. The native negative triangular expansion of $C_x$ therefore gives $D_x=(-1)^{\ell(x)}T_x+\sum_{y<x}r_{y,x}T_y$ with every $r_{y,x}\in v\mathbb Z[v]$. Its finite unitriangular inverse gives $T_x=(-1)^{\ell(x)}D_x+v\mathbb Z[v]$-linear combinations of lower $D_y$. Applying step 3.2 yields $v^a\chi_E(T_x)\equiv(-1)^{\ell(x)}\chi_E^J(t_x)\pmod{v\mathbb Z[v]}$. [F1, F2, step 3.2, algebra]

5.1 Each central $1_i$ acts on $V_E$ as either zero or the identity, with the identity occurring only for $i=\alpha_E$. These are exact integral matrix equalities on $\Lambda_E$, so they remain the same after every base change in step 4.2. All special simple dimensions and support degrees are therefore the stated ones. [F1, step 2.2, step 4.2, algebra]

5.2 The integral matrices $\rho_E(t_w)$ from step 2.2 define the action of $J_A$ on the explicitly free module $L_{E,A}=A\otimes_{\mathbb Z}\Lambda_E$. Composing with the integral homomorphism $\phi_A$ of [F1] gives Laurent-integer Hecke action matrices. Its generic fibre is exactly the simple $E$ by [F1]. For any coefficient ring $R$, set $L_{E,R}=R\otimes_A L_{E,A}$; it remains free with its displayed basis. When the $f_E$ are units, step 4.2 identifies this same module as the standard module of the corresponding full matrix block of $J_R$. Thus the needed generic irreducible models are genuinely free by construction even over a two-dimensional local base. [F1, step 2.2, step 4.2, construct, algebra]

5.3 Apply step 2.1 to the generic Hecke symmetrizing trace, using the exact dual basis of [F3]. It gives $c_E(v)d_E=\sum_x\chi_E(T_x)\chi_E(T_{x^{-1}})$. Multiply by $v^{2a}$ and insert step 4.3. The two length signs cancel, and the constant coefficient is $\sum_x\chi_E^J(t_x)\chi_E^J(t_{x^{-1}})=f_Ed_E$ by step 2.1. All higher coefficients have strictly positive powers of $v$. Dividing by the nonzero integer $d_E$ in characteristic zero gives $c_E(v)=f_Ev^{-2a}$ plus strictly higher powers. This proves the exponent and leading coefficient assertions directly from the trace pairing. It also shows the Schur element is a Laurent polynomial over $\mathbb Q$, sufficient for its lowest term; no cyclotomic factorization is assumed or needed. [F2, F3, F5, step 2.1, step 4.1, step 4.3, algebra]

6.1 Step 3.2 expresses each $\chi_E(D_x)$ as an integral Laurent combination of the integer characters $\chi_E^J(t_z)$; step 4.3 does the same for $\chi_E(T_x)$, so all these values lie in $A$. The element $z_E^H=\sum_x\chi_E(T_{x^{-1}})T_x$ therefore lies in the finite free $A$-algebra $H$. By the matrix coefficient identity in step 2.1 it acts on the generic block $E$ as $c_E(v)$ and on all other generic blocks as zero. The Cayley–Hamilton polynomial of its integral left multiplication shows that $c_E(v)\in K$ is integral over $A$. By [F6], write it as a coprime fraction $f/g$ in the UFD $A$. A monic equation for $f/g$, multiplied by its denominator, implies $g\mid f^m$; unique factorization forces $g$ to be a unit. Thus $c_E(v)\in A$, so its specialization is defined even when it vanishes. The good-characteristic condition used in step 4.2 concerns $f_E$, not this full Laurent polynomial. [F2, F6, step 2.1, step 2.2, step 3.2, step 4.2, step 4.3, step 5.3, algebra] ∎
