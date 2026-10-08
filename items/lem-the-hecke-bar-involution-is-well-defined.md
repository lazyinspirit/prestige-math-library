---
id: lem-the-hecke-bar-involution-is-well-defined
kind: lemma
title: The Hecke bar involution is well defined
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [def-normalized-type-a-hecke-algebra-and-its-bar-involution, thm-standard-basis-of-the-generic-type-a-hecke-algebra]
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules, arXiv:1212.0791 (45 pp.) — §3.2 (printed pp. 15–16): the Hecke algebra in the normalization $H_xH_s=H_{xs}$ or $(v^{-1}-v)H_x+H_{xs}$, the bar involution $\\overline{H_x}=H_{x^{-1}}^{-1}$, the Kazhdan–Lusztig basis $\\{\\underline H_x\\}$ characterized by bar-invariance and $\\underline H_x\\in H_x+\\sum_{y<x}v\\mathbb Z[v]H_y$, the example $\\underline H_s=H_s+vH_{\\mathrm{id}}$, and Remark 3.2: $v=q^{-1/2}$, $H_x=v^{\\ell(x)}T_x$, $\\underline H_x=C'_x$, $h_{y,x}=v^{\\ell(x)-\\ell(y)}P_{y,x}(v^{-2})$"
      url: "https://arxiv.org/pdf/1212.0791"
      locator: "§3.2, printed pp. 15–16; complete section and displayed formulas read."
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters (revised book version, arXiv:math/0208154v2) — the split case $L\\equiv1$ read as the source for the bar operator, the R-coefficients, the new basis, its multiplication properties and cells; translated to the normalization of this page by $v_L=v^{-1}$ (so $v_L^{L(w)-L(y)}=v^{-(\\ell(w)-\\ell(y))}$)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§2.1–2.5 (printed pp. 19–22); §3.1–3.5 (pp. 22–24); §4.1–4.9 (pp. 24–27); §5.1–5.6 (pp. 27–30); §6.1–6.8 (pp. 30–31); §7.1–7.6 (pp. 31–36); §8.1–8.9 (pp. 36–39); §10.1–10.9 (pp. 46–49)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Facts & Assumptions

**Given:** The presented algebra $H_v(n)$, its generators $H_{s_i}$, the coefficient involution $v\mapsto v^{-1}$, and the generator assignment $H_{s_i}\mapsto H_{s_i}^{-1}$ from [[def-normalized-type-a-hecke-algebra-and-its-bar-involution]].

[F1] The defining relations are $H_{s_i}^2=1+(v^{-1}-v)H_{s_i}$, the adjacent braid relations, and the distant commutations; the quadratic relation gives $H_{s_i}^{-1}=H_{s_i}-(v^{-1}-v)$ ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]).

[F2] On the free algebra, the candidate assignment is $\iota_0(v)=v^{-1}$ and $\iota_0(H_{s_i})=H_{s_i}-(v^{-1}-v)$; in the quotient the quadratic relation identifies this latter element with $H_{s_i}^{-1}$ ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]).

[F3] Each $H_w$ is the product of the generators along a reduced expression for $w$, and the elements $H_w$ form the standard basis ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]], [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

## Statement

In $H_v(n)$ there is a unique $A$-semilinear unital ring involution, denoted by a bar, with $\bar v=v^{-1}$ and $\overline{H_{s_i}}=H_{s_i}^{-1}$. It is multiplicative and satisfies $\overline{\overline{H_w}}=H_w$ and $\overline{H_w}=H_{w^{-1}}^{-1}$ for every $w\in S_n$; consequently each $H_w$ is invertible and $\overline{H_{w^{-1}}}=H_w^{-1}$.

## Proof

**Proof technique:** direct verification on the presentation.

1.1 **Uniqueness and inverse generators.** Any semilinear ring homomorphism with the prescribed coefficient action and generator images is unique: its action on $A=\mathbb Z[v^{\pm1}]$ is fixed, and the $H_{s_i}$ generate $H_v(n)$ as an $A$-algebra. Put $\lambda:=v^{-1}-v$. By the quadratic relation, $H_{s_i}(H_{s_i}-\lambda)=1=(H_{s_i}-\lambda)H_{s_i}$, so $H_{s_i}^{-1}=H_{s_i}-\lambda$. Multiplying the quadratic relation by $H_{s_i}^{-2}$ gives $H_{s_i}^{-2}=1-\lambda H_{s_i}^{-1}=1+(v-v^{-1})H_{s_i}^{-1}$, the quadratic relation with $v$ replaced by $v^{-1}$. [F1, F2, algebra]

2.1 **The assignment respects the presentation.** On the free associative algebra, extend $v\mapsto v^{-1}$ and $H_{s_i}\mapsto H_{s_i}-\lambda$ semilinearly and multiplicatively as in [F2]. In the quotient, step 1.1 identifies $H_{s_i}-\lambda$ with $H_{s_i}^{-1}$. The inverse quadratic relation in step 1.1 shows that the image of each quadratic relator is zero in the quotient. The braid relator maps to the equality obtained by inverting both sides of $H_{s_i}H_{s_{i+1}}H_{s_i}=H_{s_{i+1}}H_{s_i}H_{s_{i+1}}$; the words are palindromes. A distant commutation relator maps to the commutation of the inverse generators, which follows by inverting the original equality. Thus the defining ideal is preserved and the assignment descends to a unital semilinear algebra endomorphism of $H_v(n)$. [F1, F2, step 1.1, algebra]

3.1 **Involutivity.** Applying bar twice fixes $v$. Since a ring homomorphism sends the inverse of a unit to the inverse of its image, $\overline{\overline{H_{s_i}}}=\overline{H_{s_i}^{-1}}=\overline{H_{s_i}}^{-1}=(H_{s_i}^{-1})^{-1}=H_{s_i}$. It therefore fixes every generator and coefficient, so bar squared is the identity. [F2, step 2.1, algebra]

4.1 **Formula on the standard basis.** Let $w=s_{i_1}\cdots s_{i_k}$ be reduced. By multiplicativity, $\overline{H_w}=H_{s_{i_1}}^{-1}\cdots H_{s_{i_k}}^{-1}=(H_{s_{i_k}}\cdots H_{s_{i_1}})^{-1}=H_{w^{-1}}^{-1}$. This includes $w=\mathrm{id}$, for which the product is empty. Every generator is a unit by step 1.1, hence every $H_w$ is a unit, and applying bar gives the equivalent formula $\overline{H_{w^{-1}}}=H_w^{-1}$. This proves the statement. The case $n=1$ has no generators and reduces to the coefficient involution of $A$. [F3, step 1.1, step 2.1, step 3.1, algebra] ∎
