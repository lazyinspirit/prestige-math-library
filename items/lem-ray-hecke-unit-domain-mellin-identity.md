---
dependency_level: 12
id: lem-ray-hecke-unit-domain-mellin-identity
kind: lemma
title: Unit-domain Mellin reconstruction of partial Hecke L-functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-ray-hecke-signed-gaussian-theta-transformation
- lem-ray-hecke-ideal-number-residue-gauss-reassembly
- thm-logarithmic-unit-image-is-a-full-lattice
- thm-dirichlet-unit-theorem
- lem-roots-of-unity-in-a-number-field-are-finite
- lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity
- def-logarithmic-unit-embedding
- thm-finite-order-hecke-l-euler-product
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- cor-c-one-change-of-variables-for-l-one-functions
- thm-substitution-for-improper-integrals
- def-euler-gamma-function
- thm-discriminant-is-the-norm-of-the-different
- def-axiom-of-choice
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: Assume AC and Countable Choice. Choice is inherited from the actual number-field, unit, lattice
  and integration suppliers; no cited external theorem is imported.
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, Chapter VII
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: §8, Lemma8.2 and Proposition8.3, printed496–501; full local finite-order specialization below.
---

## Statement

Assume AC and Countable Choice and use the theta data of the signed primitive Hecke class theta transformation. Put $Q=|d_K|N\mathfrak m_0$, $S=\{x_i>0:N(x)=1\}$ and $\rho(u)=(|u_i|^2)_i$ for a unit $u$. Choose a half-open fundamental parallelepiped $F\subset S$ under logarithms for $\rho(\mathcal O_K^\times)$, and write $w=|\mu_K|$. Normalize $d^\times x$ on $S$ by
$$\prod_i d_i\,\frac{dy_i}{y_i}=d^\times x\,\frac{dt}{t},\qquad y_i=x_i t^{1/n},\quad t=N(y).$$
For $S$ of dimension zero this gives the point mass $1$. Set $c=\prod_{i\text{ real}}A_i^{-\epsilon_i/2}$ and
$$f_{C,\chi}(t)=\frac c w\int_F x^{\epsilon/2}\Theta_{C,\chi}(x t^{1/n})\,d^\times x,\qquad a_C=\frac c w\int_F x^{\epsilon/2}c_C\,d^\times x.$$
These integrals are independent of the chosen unit fundamental cell. With $z(s)=(s+e/n)/2$, for $\operatorname{Re}s>1$ one has the absolutely convergent identity
$$\int_0^\infty(f_{C,\chi}(t)-a_C)t^{z(s)}\,\frac{dt}{t}=Q^{s/2}\prod_{i\text{ real}}\Gamma_{\mathbb R}(s+\epsilon_i)\prod_{j\text{ complex}}\Gamma_{\mathbb C}(s)L_C(s,\chi).$$
Moreover, for $\kappa=1/2+e/n$,
$$f_{C,\chi}(1/t)=W_\chi t^\kappa f_{C^\#,\bar\chi}(t).$$
If $\mathfrak m_0=\mathcal O_K$ and all parities are zero, $a_C=\chi(C)\operatorname{vol}(F)/w$; otherwise $a_C=0$.

## Statement references

[[lem-ray-hecke-signed-gaussian-theta-transformation]]

## Facts & Assumptions

**Given:** The objects and choice assumptions of the Statement.

[F1] The class theta transform and unit covariance hold, with $|W_\chi|=1$ and $W_\chi W_{\bar\chi}=1$. [[lem-ray-hecke-signed-gaussian-theta-transformation]] [[lem-ray-hecke-ideal-number-residue-gauss-reassembly]]

[F2] The logarithmic units form a full lattice in $\sum_i d_i\log|u_i|=0$; the kernel is the finite roots-of-unity group, and units split into that kernel and a free group of rank $r_1+r_2-1$. [[thm-logarithmic-unit-image-is-a-full-lattice]] [[thm-dirichlet-unit-theorem]] [[lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity]] [[lem-roots-of-unity-in-a-number-field-are-finite]] [[def-logarithmic-unit-embedding]]

[F3] The Hecke ideal series is absolutely convergent for $\operatorname{Re}s>1$. [[thm-finite-order-hecke-l-euler-product]]

[F4] Tonelli and Fubini apply to nonnegative and absolutely integrable series/integrals; positive substitutions and linear logarithmic changes obey their Jacobians. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[thm-substitution-for-improper-integrals]] [[cor-c-one-change-of-variables-for-l-one-functions]]

[F5] The Euler gamma integral defines $\Gamma(w)$ for $\operatorname{Re}w>0$, with the displayed real and complex normalizations; $N\mathfrak D_K=|d_K|$. [[def-euler-gamma-function]] [[thm-discriminant-is-the-norm-of-the-different]]

[A1] AC/CC are retained through [F1]–[F4]. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 In coordinates $v_i=d_i\log x_i$, the torus $S$ is the hyperplane $\sum_i v_i=0$ and the unit translations form twice the full lattice in [F2]. A lattice basis gives a bounded half-open parallelepiped with compact closure; its exponential image is $F$. The radial column in the map $(x,t)\mapsto y$ has entries $d_i/n$ and coordinate sum $1$, so ordinary linear change of variables in logarithms gives exactly the normalized product measure in the Statement. The rank-zero case is the same one-dimensional radial substitution. Unit covariance in [F1] makes $x^{\epsilon/2}\Theta_{C,\chi}(x t^{1/n})$ invariant under $x\mapsto\rho(u)x$. Thus its integral over any unit cell is the same, by translating and partitioning parallelepipeds along their measure-zero boundaries. The same holds for its constant part, which is either zero or constant. [A1, F1, F2, F4, algebra, choose]

2.1 The nonzero ideal numbers $a$ of class $C$ with integral prime-to-modulus ideal, modulo multiplication by units, correspond bijectively to the integral ideals in $C$ prime to $\mathfrak m_0$, since $\ker q=\mathcal O_K^\times$. For one such orbit, [F1] gives $\psi_\chi(au)(au)^\epsilon=\chi(q(a))\prod_{i\text{ real}}|a_i u_i|^{\epsilon_i}$. Under $x\mapsto\rho(u)x$ this weight, multiplied by $x^{\epsilon/2}$, is transported to the fixed orbit representative's integrand. Every translation of $F$ occurs exactly $w$ times, by the kernel in [F2]. The factor $1/w$ therefore unfolds the unit-orbit integral over $F$ to the integral over all of $S$. For absolute values the same calculation has weight one in place of $\chi(q(a))$, because the latter has modulus one. Tonelli applies first to these nonnegative expressions. [F1, F2, F4, step 1.1, algebra]

3.1 For one fixed orbit use $y_i=x_i t^{1/n}$ and $z=(s+e/n)/2$. The equality $x^{\epsilon/2}t^z=\prod_i y_i^{(d_i s+\epsilon_i)/2}$ reduces the unfolded integral to a product of Euler integrals. At a real place its factor, including the $a$-weight, is $$|a_i|^{\epsilon_i}\int_0^\infty e^{-\pi |a_i|^2 y_i/A_i}y_i^{(s+\epsilon_i)/2}\,\frac{dy_i}{y_i}=A_i^{(s+\epsilon_i)/2}|a_i|^{-s}\Gamma_{\mathbb R}(s+\epsilon_i).$$ At a complex place it is $$\int_0^\infty e^{-2\pi|a_i|^2y_i/A_i}y_i^s\,2\frac{dy_i}{y_i}=A_i^s|a_i|^{-2s}\Gamma_{\mathbb C}(s).$$ Thus the factor $2$ in each complex gamma is supplied by the measure, not omitted. Multiplication by $c$ cancels the factors $A_i^{\epsilon_i/2}$. Since $\prod_i A_i^{d_i}=Q$ and $\prod_i|a_i|^{d_i}=Nq(a)$, the result is $Q^{s/2}$ times the displayed gamma product times $\chi(q(a))(Nq(a))^{-s}$. Summing the orbits gives the claimed Mellin identity. Applying the same computation with $\sigma=\operatorname{Re}s>1$ bounds the absolute integral by a finite gamma constant times the ideal series in [F3]; hence Fubini justifies all complex interchanges as well. [F1, F3, F4, F5, step 2.1, algebra]

4.1 In the expression for $f_{C,\chi}(1/t)$ substitute $x\mapsto x^{-1}$, preserving $d^\times x$ and replacing $F$ by its inverse cell. Apply [F1] to $y=x t^{1/n}$. Since $N(x)=1$ and $y^\epsilon=x^\epsilon t^{e/n}$, the factor $x^{-\epsilon/2}$ becomes $x^{\epsilon/2}$ and the radial factor becomes $t^{1/2+e/n}$. Independence of cells from step 1.1 gives the asserted identity with the same $W_\chi$. Finally the definition of $c_C$ in [F1] gives the two cases for $a_C$, with $c=1$ in the unramified even case. [F1, step 1.1, step 3.1, algebra] ∎ 