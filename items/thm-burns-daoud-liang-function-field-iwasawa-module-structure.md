---
id: thm-burns-daoud-liang-function-field-iwasawa-module-structure
kind: theorem
title: "Non-Noetherian Iwasawa Structure Theorem for Weil–Étale H^1(G_m)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-infinite-rank-p-adic-iwasawa-algebra
  - lem-infinite-rank-iwasawa-algebra-is-non-noetherian
  - def-weil-etale-class-group-and-cohomology-in-function-field-tower
  - def-burns-daoud-liang-decomposition-hypothesis
  - lem-regular-variable-specialization-of-square-presentation-has-no-invariants
  - lem-function-field-class-group-injects-into-weil-etale-cohomology
  - thm-global-function-field-artin-reciprocity-and-norm-index
  - thm-global-function-field-class-field-existence
  - thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC, AC_omega, and DC are inherited from the global function-field class-formation, reciprocity, class-field existence, and divisor-class interfaces; no additional choice branch is claimed."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Burns, Alexandre Daoud, and Dingli Liang, On Non-Noetherian Iwasawa Theory, Theorem 3.6 and §§3.2.2–3.2.3"
      url: "https://arxiv.org/pdf/2401.02946"
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Appendix A.7–A.13"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Stephen Lichtenbaum, The Weil-étale topology on schemes over finite fields, §2"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/E70A59FA79C01CDBCD940699A72A6F59/S0010437X04001150a.pdf/the-weil-etale-topology-on-schemes-over-finite-fields.pdf"
verification: {}
---

## Statement

Assume AC, AC$_\omega$, and DC. Let $k$ be a global function field of characteristic $p$ with finite exact constant field, and let $K/k$ be an abelian Galois extension with $\Gamma=\operatorname{Gal}(K/k)\cong\mathbb Z_p^{\mathbb N}\times G$, where $G$ is finite abelian and $\mathbb N=\{1,2,\ldots\}$. Assume that only finitely many places ramify in $K/k$. Let $\Sigma$ be a finite nonempty set of places of $k$ containing all ramified places and no place that splits completely in $K$. A place splits completely in $K$ when its decomposition subgroup is trivial. Fix coordinates on $\mathbb Z_p^{\mathbb N}$; for $n\ge1$ let $\Gamma(n)=\{(x_i,g)\in\mathbb Z_p^{\mathbb N}\times G:x_1=\cdots=x_n=0,\ g=1_G\}$ and put $K_n=K^{\Gamma(n)}$. For $v\in\Sigma$, fix a prolongation of $v$ to $K$ and let $\Gamma_v$ be its stabilizer; because $\Gamma$ is abelian, $\Gamma_v$ is independent of the chosen prolongation. Assume that there is $n_0\ge1$ such that $\Gamma(n_0)\cap\Gamma_v$ is not open in $\Gamma_v$ for every $v\in\Sigma$.

Put $A=\mathbb Z_p[\![\Gamma]\!]=R[G]$, where $R=\mathbb Z_p[\![\mathbb Z_p^{\mathbb N}]\!]$. For each finite intermediate field $L/k$ in $K/k$, let $C_L$ be its smooth proper geometrically integral curve over its full finite constant field, let $U_L$ be $C_L$ with the places above $\Sigma$ removed, and set
$$M:=\varprojlim_{L\subset K}\left(\mathbb Z_p\otimes_{\mathbb Z}H_W^1(U_L,\mathbb G_m)\right),$$
with corestriction transition maps; $\Gamma$ acts through its action on the tower. This inverse-limit Weil–étale cohomology module is also denoted $H^1((\mathcal O_K^\Sigma)_W,\mathbb Z_p(1))$. The ring $A$ is non-Noetherian. For $n\ge1$ put $A_n=\mathbb Z_p[\![\Gamma/\Gamma(n)]\!]\cong\mathbb Z_p[\![\mathbb Z_p^n\times G]\!]$, and let $A\to A_n$ be induced by $\Gamma\to\Gamma/\Gamma(n)$; set $M(n)=A_n\otimes_A M$. A module $N$ over a commutative ring $B$ is torsion if $N\otimes_B Q(B)=0$, where $Q(B)$ is the localization at the multiplicative set of non-zero-divisors. For any $B$-module $N$, put $P_B(N)=\{\mathfrak q\subset B:\operatorname{ht}(\mathfrak q)=1,\ N_{\mathfrak q}\ne0\}$, where $\operatorname{ht}$ is Krull height. A module is pseudo-null if its localization at every prime ideal of height at most one is zero; a map is a pseudo-isomorphism if its kernel and cokernel are pseudo-null. For an element $X$ acting on a module $N$, write $N[X]=\ker(X:N\to N)$ for the submodule annihilated by $X$.

For each finite intermediate Galois field $F/k$ in $K$, write $\Gamma_F=\operatorname{Gal}(F/k)$ and $\Sigma_F$ for the places above $\Sigma$. For a character $\psi:\Gamma_F\to\overline{\mathbb Q}_p^\times$, let $L^\Sigma(\psi,s)=\prod_{v\notin\Sigma}(1-\psi(\operatorname{Frob}_v)|\kappa(v)|^{-s})^{-1}$, initially for $\operatorname{Re}(s)>1$ and then by its rational-function continuation. Here $\kappa(v)$ is the finite residue field and $\operatorname{Frob}_v$ is the arithmetic Frobenius acting on the residue algebraic closure by $x\mapsto x^{|\kappa(v)|}$, viewed in the unramified quotient of $\Gamma_F$. Define $e_\psi=|\Gamma_F|^{-1}\sum_{\gamma\in\Gamma_F}\psi(\gamma^{-1})[\gamma]$, where $[\gamma]$ is the corresponding group-ring basis element, and $\theta_F^\Sigma=\sum_\psi L^\Sigma(\psi,0)e_\psi$. The theorem includes the assertion that these finite-level elements lie in $\mathbb Z_p[\Gamma_F]$ and are compatible under quotient maps; denote their inverse limit by $\theta_K^\Sigma\in A$.

Then the following hold.

(i) $M$ is finitely presented over $A$, and for every $n\ge1$ there is an isomorphism of $A_n$-modules $M(n)\cong H^1((\mathcal O_{K_n}^\Sigma)_W,\mathbb Z_p(1))$.

(ii) $M$ is torsion over $A$.

(iii) If $|G|\notin\mathfrak p$ for every $\mathfrak p\in P_A(M)$, then $P_A(M)$ is finite and there are finite integers $r_{\mathfrak p}\ge0$ and $e_{\mathfrak p,i}\ge1$ and an $A$-module pseudo-isomorphism $M\to\bigoplus_{\mathfrak p\in P_A(M)}\bigoplus_{i=1}^{r_{\mathfrak p}}A/\mathfrak p^{e_{\mathfrak p,i}}$ such that
$$\prod_{\mathfrak p\in P_A(M)}\mathfrak p^{\sum_{i=1}^{r_{\mathfrak p}}e_{\mathfrak p,i}}=A\theta_K^\Sigma,$$
with the empty product interpreted as $A$.

(iv) If $|G|$ belongs to no prime in $P_A(M)$ and, for every $n\ge n_0$, belongs to no prime in $P_{A_n}(M(n))$, then for every $n\ge n_0$ the $A_n$-modules $M(n+1)[X_{n+1}]$ and $\operatorname{Cl}(\mathcal O_{K_{n+1}}^\Sigma)_p[X_{n+1}]$ are pseudo-null, where $X_{n+1}=\gamma_{n+1}-1$ for the $(n+1)$st coordinate generator and $(-)_p=\mathbb Z_p\otimes_\mathbb Z(-)$.

## Specialization notation correction

In Burns–Daoud–Liang Theorem 3.6(iv), printed p.15, the superscript $X_{n+1}=0$ denotes the submodule annihilated by the variable. It does not denote the quotient by that variable. The original carrier had incorrectly transcribed both annihilator modules as coinvariant quotients. The corrected assertion above retains the source's $A_n$-module pseudo-null conclusion. Its independent module, determinant and Weil–étale proof obligations below remain held.

## Statement references

[Burns, Daoud, and Liang, Theorem 3.6](https://arxiv.org/pdf/2401.02946)

[Milne, *Arithmetic Duality Theorems*, Appendix A.7–A.13](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Lichtenbaum, §2](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/E70A59FA79C01CDBCD940699A72A6F59/S0010437X04001150a.pdf/the-weil-etale-topology-on-schemes-over-finite-fields.pdf)

## Facts & Assumptions

**Given:** AC, AC$_\omega$, DC, a function-field tower $K/k$, and a finite set $\Sigma$ satisfying the hypotheses in the Statement.

[F1] [[def-infinite-rank-p-adic-iwasawa-algebra]]: $A=R[G]$ is the completed group algebra for $\Gamma\cong\mathbb Z_p^{\mathbb N}\times G$, and $R$ is the completed group algebra of $\mathbb Z_p^{\mathbb N}$.

[F2] [[lem-infinite-rank-iwasawa-algebra-is-non-noetherian]]: for countably infinite $\mathbb N$, both $R$ and $A$ are non-Noetherian.

[F3] [[def-weil-etale-class-group-and-cohomology-in-function-field-tower]]: $M$ is the corestriction inverse limit of $\mathbb Z_p\otimes H_W^1(U_L,\mathbb G_m)$ and $M(n)=A_n\otimes_A M$.

[F4] [[def-burns-daoud-liang-decomposition-hypothesis]]: $\Gamma(n)$ is the tail subgroup and Hypothesis 3.5 requires $\Gamma(n_0)\cap\Gamma_v$ to be non-open for every $v\in\Sigma$.

[F5] [[thm-global-function-field-artin-reciprocity-and-norm-index]]: the current supplier Statement asserts global Artin reciprocity and the norm-index equality for finite abelian function-field extensions, with arithmetic Frobenius normalization.

[F6] [[thm-global-function-field-class-field-existence]]: the current supplier Statement asserts realization of every open finite-index idele-class subgroup by a unique finite abelian extension.

[F7] [[thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field]]: for a smooth proper geometrically integral curve over a finite field, its degree-zero divisor class group is finite.

[A1] The Axiom of Choice, Countable Choice, and Dependent Choice are inherited with the exact strengths recorded in the direct global function-field reciprocity and class-field supplier bodies and the degree-zero class-group proof; no additional axiom is used by the local ring definitions. ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]])

[L1] [[thm-global-function-field-artin-reciprocity-and-norm-index]] now
supplies its full actual finite Artin map and norm-index proof at the stated
AC, Countable Choice and DC scope, including the principal-idèle bridge.
It is a completed class-field input to this theorem; it does not establish
the separate module and determinant arguments in [L3]–[L4].

[L2] [[thm-global-function-field-class-field-existence]] now supplies its
full open-subgroup norm realization, uniqueness and inclusion-reversing
lattice proof under AC, Countable Choice and DC. No absent duplicate global
realization carrier is needed. The independent obligations [L3]–[L4] remain.

[L3] The local proof of Theorem 2.3's module structure argument over the non-Noetherian ring, including the Warfield, Endo, Fuchs–Salce, and Cohen inputs, has not been authored as a proved supplier on this page. The finite-level perfect-complex/determinant identity used in Theorem 3.6(ii)–(iii), including its finite class-group calculation, also has no local proof item here; [F7] supplies degree-zero class-group finiteness but not that identity. The cited Weil–étale duality identification is a separate local proof obligation, not an imported proof.

[L4] The proof of Theorem 3.6(iv) still needs the actual finite-level Weil–étale square presentations and torsion specializations, part of [L3]. The regular-variable square-presentation specialization calculation is now supplied by [L5], and the norm-compatible Weil–étale class-group injection by [L6]; neither supplies the absent cohomological presentation or torsion input. No extra square-presentation hypothesis is silently added to the public theorem.

[L5] If $B=A_{n+1}=A_n[\![X_{n+1}]\!]$, a square-presented $B$-module whose specialization is torsion over $A_n$ has zero $X_{n+1}$-annihilator. Regularity of $X_{n+1}$ is coefficient shifting; the adjugate/cancellation proof is now supplied locally. [[lem-regular-variable-specialization-of-square-presentation-has-no-invariants]]

[L6] Divisor classes inject canonically into Weil–étale $H^1(\mathbb G_m)$, compatibly with finite étale divisor norms and cohomological corestriction, including changing full constant fields. Flat $\mathbb Z_p$ tensor and coordinatewise inverse limits preserve this injection, also for $K_{n+1}$. Its $X_{n+1}$-annihilator is therefore a submodule of the corresponding cohomology annihilator. [[lem-function-field-class-group-injects-into-weil-etale-cohomology]]

## Proof

**Given:** The data and hypotheses in the Statement and [F1]–[F7], with completed class-field inputs [L1]–[L2] and the independent unresolved obligations [L3]–[L4].

1.1 By [F1] and [F3], the coefficient ring and inverse-limit module in the Statement are defined. The non-Noetherian assertion follows from [F2]. The coordinate-tail convention in [F4] defines $K_n$ and the quotient rings $A_n$, whose module specializations are the stated objects. [F1, F2, F3, F4, given]

2.1 The finite-presentation clause (i) requires a local proof of Weil–étale descent and a compatible finite-level perfect-complex presentation. Those arguments are not supplied by the definitions [F1], [F3], and remain the unresolved local obligation [L3]. [F1, F3, L3, step 1.1]

3.1 The torsion and characteristic-ideal clauses (ii)–(iii) require the missing finite-level determinant identity in [L3], the finite degree-zero class-group input [F7], the non-Noetherian module structure argument in [L3], and the actual global reciprocity/class-field hypotheses in [L1]–[L2]. The class-field inputs [L1]–[L2] are now supplied, but the independent determinant, module-structure and Weil–étale arguments in [L3] remain unresolved, so these clauses are still held. [F5, F6, F7, L1, L2, L3, step 2.1]

4.1 The regular-variable algebra in [L5] supplies the annihilator specialization calculation once the finite-level square presentations and torsion inputs in [L3] have been proved. The class-group injection in [L6] then passes the annihilator conclusion to the class-group submodule (and localization preserves that inclusion). The actual presentations and torsion inputs remain absent, so the full theorem stays escalated; neither completed supplier is treated as a proof of the missing cohomological presentation. [F3, F4, L3, L4, L5, L6, step 3.1] ∎
