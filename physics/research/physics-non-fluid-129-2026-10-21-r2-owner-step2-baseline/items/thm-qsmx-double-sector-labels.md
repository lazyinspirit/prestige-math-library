---
id: thm-qsmx-double-sector-labels
kind: theorem
title: Irreducible sectors of the finite-group double
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsmx-finite-group-double
  - thm-qsmx-double-hopf-structure
  - lem-qsmx-finite-group-irrep-dimension-square-sum
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-subrepresentation-and-irreducible-representation
dependency_roles:
  def-qsmx-finite-group-double: mathematical-premise
  thm-qsmx-double-hopf-structure: mathematical-premise
  lem-qsmx-finite-group-irrep-dimension-square-sum: mathematical-premise
  thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order: mathematical-premise
  def-finite-dimensional-representation-of-a-group-over-a-field: mathematical-premise
  def-subrepresentation-and-irreducible-representation: mathematical-premise
justified_by: []
physical_scope: Pure finite-dimensional representation theory of the explicit algebra $D(G)$; no modular-functor, braided-category, or physical-realization claim.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. Yu. Kitaev, Fault-tolerant quantum computation by anyons
      url: https://arxiv.org/pdf/quant-ph/9707021
      locator: "§5.1, equations (21)–(23), PDF pp. 14–15; conjugacy classes, centralizers, and explicit irreducible D(G)-modules."
    - title: Mark de Wild Propitius and F. Alexander Bais, Discrete Gauge Theories
      url: https://arxiv.org/pdf/hep-th/9511201
      locator: "§2.1, equations (2.1.5)–(2.1.8), PDF pp. 45–46; conjugacy-class fibers and irreducible centralizer representations."
    - title: Alexander Cowtan and Shahn Majid, Quantum Double Aspects of Surface Code Models
      url: https://arxiv.org/pdf/2107.04411
      locator: "§3.2, PDF pp. 10–12; orbit/centralizer classification, sector dimensions, and projection operators."
verification:
  precheck: pass
---

## Statement

Let $G$ be a finite group and let $D(G)$ be the finite-dimensional complex algebra with basis $d_{h,g}=\delta_h\otimes g$ and multiplication $d_{h,g}d_{k,l}=\mathbf 1_{h=gkg^{-1}}d_{h,gl}$. A finite-dimensional representation of $D(G)$ means a nonzero finite-dimensional complex vector space $V$ with a unital algebra homomorphism $D(G)\to\operatorname{End}_{\mathbb C}(V)$; it is irreducible when it has no nonzero proper invariant subspace. Two such representations are equivalent if an invertible complex-linear map intertwines their $D(G)$-actions. For $c\in G$, define its conjugacy class $C_c=\{gcg^{-1}:g\in G\}$ and centralizer $Z_G(c)=\{z\in G:zc=cz\}$. The equivalence classes of irreducible finite-dimensional representations of $D(G)$ are in bijection with pairs $(C,[\pi])$, where $C$ is a conjugacy class, $c\in C$ is any chosen representative, and $[\pi]$ is an equivalence class of irreducible finite-dimensional complex representations of $Z_G(c)$. In this statement, each such equivalence class is a **sector**. The representation indexed by $(C,[\pi])$ has dimension $|C|\dim\pi$, independently of the chosen representative up to the corresponding conjugation of the centralizer representation. The sum of the squared dimensions of all these irreducible representations is $|G|^2=\dim_{\mathbb C}D(G)$.

## Statement references

[[def-qsmx-finite-group-double]]

[[thm-qsmx-double-hopf-structure]]

[[lem-qsmx-finite-group-irrep-dimension-square-sum]]

[[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]

[A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons,” §5.1](https://arxiv.org/pdf/quant-ph/9707021)

[Mark de Wild Propitius and F. Alexander Bais, *Discrete Gauge Theories*, §2.1](https://arxiv.org/pdf/hep-th/9511201)

[Alexander Cowtan and Shahn Majid, “Quantum Double Aspects of Surface Code Models,” §3.2](https://arxiv.org/pdf/2107.04411)

## Facts & Assumptions

**Given:** A finite group $G$, its finite-dimensional algebra $D(G)$, and finite-dimensional unital complex representations as defined in the Statement.

[F1] [[def-qsmx-finite-group-double]]: $D(G)$ has basis $d_{h,g}$, multiplication $d_{h,g}d_{k,l}=\mathbf 1_{h=gkg^{-1}}d_{h,gl}$, unit $\sum_h d_{h,e}$, and dimension $|G|^2$.

[F2] [[thm-qsmx-double-hopf-structure]]: the displayed multiplication on $D(G)$ is associative with the stated unit, so the unital algebra representations in the Statement are well-defined.

[F3] [[def-finite-dimensional-representation-of-a-group-over-a-field]]: a finite-dimensional group representation is a finite-dimensional vector space with a group homomorphism into its invertible linear maps.

[F4] [[def-subrepresentation-and-irreducible-representation]]: a subrepresentation is an invariant linear subspace; irreducible means nonzero with no subrepresentations other than zero and the whole space.

[F5] [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]: for a finite group over a field whose characteristic does not divide its order, every subrepresentation of a finite-dimensional representation has an invariant complement. Here $\operatorname{char}\mathbb C=0$.

[F6] [[lem-qsmx-finite-group-irrep-dimension-square-sum]]: for every finite group $H$, its irreducible complex representation classes are finite and their squared dimensions sum to $|H|$.

## Proof

1.1 In any irreducible $D(G)$-module $V$, put $p_h=\rho(d_{h,e})$ and $u_g=\rho(\sum_{r\in G}d_{r,g})$. The multiplication in [F1] gives $p_hp_k=\mathbf 1_{h=k}p_h$, $\sum_h p_h=I$, $u_gu_l=u_{gl}$, $u_gp_hu_g^{-1}=p_{ghg^{-1}}$, and $\rho(d_{h,g})=p_hu_g$. Hence $V=\bigoplus_{h\in G}V_h$ with $V_h=p_hV$, and $u_g$ maps $V_h$ isomorphically onto $V_{ghg^{-1}}$. [F1, F2, algebra]

1.2 Conversely, fix a conjugacy class $C$, representative $c$, and irreducible representation $\pi:Z_G(c)\to\operatorname{GL}(W)$ as in [F3]–[F4]. For each $h\in C$ choose $t_h$ with $t_hct_h^{-1}=h$ and take $t_c=e$. On $M_{C,\pi}:=\bigoplus_{h\in C}W_h$ define $p_a$ as projection onto $W_a$ (zero if $a\notin C$), and define $u_g(h,w)=(ghg^{-1},\pi(t_{ghg^{-1}}^{-1}gt_h)w)$. With $h'=ghg^{-1}$, the factor $z=t_{h'}^{-1}gt_h$ centralizes $c$, since $zcz^{-1}=t_{h'}^{-1}g h g^{-1}t_{h'}=c$. For $k\in G$, the product of the two centralizer factors in $u_g u_k$ is $(t_{gkhk^{-1}g^{-1}}^{-1}g t_{khk^{-1}})(t_{khk^{-1}}^{-1}k t_h)=t_{gkhk^{-1}g^{-1}}^{-1}gk t_h$, so $u_gu_k=u_{gk}$. The fiber definition also gives $u_gp_au_g^{-1}=p_{gag^{-1}}$. [F1, F3, F4, construct, algebra, choose]

2.1 The set of $h$ for which $V_h\ne0$ is a union of conjugacy classes. For any such class $C$, the subspace $\bigoplus_{h\in C}V_h$ is invariant under every $p_a$ and $u_g$, hence under every $d_{a,g}$. Irreducibility therefore forces the support to be one conjugacy class $C$. Fix $c\in C$. [given, step 1.1, construct]

2.2 Define $\rho(d_{a,g})=p_au_g$. The identities of step 1.2 imply $\rho(d_{a,g})\rho(d_{b,l})=\mathbf 1_{a=gbg^{-1}}\rho(d_{a,gl})$, exactly the multiplication in [F1], and $\rho(1_D)=\sum_a p_a=I$. Thus $M_{C,\pi}$ is a unital $D(G)$-module. If $N$ is a nonzero invariant subspace, the projections $p_h$ decompose it into fibers because they are pairwise orthogonal and sum to $I$; $N_c$ is $\pi$-invariant, so by [F4] it is either zero or all of $W_c$. In the first case, for each $h$ the isomorphism $u_{t_h}$ carries $N_c$ onto $N_h$, so every fiber vanishes. In the second case, those images fill every fiber. Thus $N=0$ or $N=M_{C,\pi}$, proving irreducibility. [F1, F4, step 1.2, construct, algebra]

3.1 By [F3], the restrictions $u_z|_{V_c}$ for $z\in Z_G(c)$ form a finite-dimensional group representation. If it had a nonzero proper invariant subspace $W$, choose for each $h\in C$ an element $t_h$ with $t_hct_h^{-1}=h$. For $h'=ghg^{-1}$ the element $z=t_{h'}^{-1}gt_h$ satisfies $zcz^{-1}=t_{h'}^{-1}g h g^{-1}t_{h'}=c$, so $z\in Z_G(c)$. Therefore $u_g u_{t_h}W=u_{t_{h'}}u_zW\subseteq u_{t_{h'}}W$. The direct sum $\bigoplus_{h\in C}u_{t_h}W$ is invariant under every $u_g$ and $p_a$; it is nonzero, and it is proper because each $u_{t_h}$ is an isomorphism from $V_c$ to $V_h$ while $W\subsetneq V_c$. It is thus a nonzero proper $D(G)$-submodule, contradicting irreducibility. Hence $V_c$ is irreducible as a $Z_G(c)$-representation. [given, F3, F4, step 1.1, step 2.1, algebra, choose]

3.2 The constructed module has one fiber $W_h\cong W$ for each $h\in C$, so its dimension is $|C|\dim\pi$. The map $G/Z_G(c)\to C$, $gZ_G(c)\mapsto gcg^{-1}$, is well-defined and onto; equality of two conjugates implies the two representatives differ by an element of $Z_G(c)$, so it is injective. Therefore $|C||Z_G(c)|=|G|$. [step 1.2, step 2.2, algebra]

4.1 For an arbitrary irreducible $V$ with support $C$, set $W=V_c$ and let $\pi$ be its centralizer action from step 3.1. The maps $u_{t_h}$ then identify each fiber $V_h$ with the constructed copy $W_h$, and the relation $u_g u_{t_h}=u_{t_{ghg^{-1}}}u_{t_{ghg^{-1}}^{-1}gt_h}$ shows that this fiberwise identification intertwines the full $D(G)$-action. Distinct classes have distinct supports; for a fixed $C$, an isomorphism restricts on the $p_c$ fiber to an isomorphism of centralizer representations. Hence the pairs $(C,[\pi])$ classify the irreducibles without duplication. [step 1.1, step 3.1, step 1.2, step 2.2, algebra]

4.2 If $c'=rcr^{-1}$ is another representative of $C$, then $Z_G(c')=rZ_G(c)r^{-1}$. Sending $\pi$ to $\pi'(z')=\pi(r^{-1}z'r)$ gives a bijection of the irreducible representation classes of the two centralizers. The fiber map $u_r:V_c\to V_{c'}$ implements this relabeling because $u_{z'}u_r=u_r u_{r^{-1}z'r}$, by $u_gu_l=u_{gl}$ from step 1.1. Thus the parametrization is independent of the representative up to the stated conjugation. [step 1.1, step 3.1, algebra]

5.1 The finite centralizer $Z_G(c)$ satisfies the finite-group and characteristic hypotheses of [F5], and [F6] supplies the resulting squared-dimension sum $\sum_{[\pi]\in\operatorname{Irr}_{\mathbb C}(Z_G(c))}(\dim\pi)^2=|Z_G(c)|$. Summing the squared dimensions from step 3.2 over conjugacy classes gives $\sum_C|C|^2|Z_G(c)|=\sum_C|C||G|=|G|^2$, since the conjugacy classes partition $G$. Finally, [F1] gives $\dim D(G)=|G|^2$. [F1, F5, F6, step 3.2, algebra] ∎
